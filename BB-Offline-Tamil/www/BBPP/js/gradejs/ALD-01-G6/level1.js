Game.ALD_01_G6level1 = function () { };


Game.ALD_01_G6level1.prototype =
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

        _this.CounterCelebrationSound = document.createElement('audio');
        _this.CounterCelebrationSoundsrc = document.createElement('source');
        _this.CounterCelebrationSoundsrc.setAttribute("src", window.baseUrl + "sounds/counter_celebration.mp3");
        _this.CounterCelebrationSound.appendChild(_this.CounterCelebrationSoundsrc);

        telInitializerbbpp.gameIdInit("ALD_01_G6", gradeSelected);// first Tele call
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
        //*add these  variables
        _this.noofAttempts = 0;//total attempt to answer q question
        _this.AnsTimerCount = 0;//total time
        _this.sceneCount = 0;//no of screen
        _this.questionid = null;//always 1

        // _this.AnsTimerCount = 0;
        _this.count1 = 0;

        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        //_this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        _this.microConcepts;
        // _this.grade;

        _this.counterForTimer = 0;

        _this.hint_flag = 0;// * hint flag zero

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        _this.Question_flag = 0;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';

        _this.firstBowlClicked = false;
        _this.secondBowlClicked = false;
        _this.thirdBowlClicked = false;
        _this.fourthBowlClicked = false;
        _this.fifthBowlClicked = false;
        _this.sixthBowlClicked = false;


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

        _this.bowl_noX = [360, 550, 750];
        _this.bowl_noY = [230, 340];

        _this.FishInSmallTank_X = [435, 480, 390, 430, 435];//[20,82,20,82,20]////[80,140,80,140,80];// recent[380,427,380,427,380]
        _this.FishInSmallTank_Y = [162, 162, 135, 135, 108];//[210,210,175,175,140]; // recent[162,162,135,135,108];

        _this.FishInSecondSmallTank_X = [580, 625, 620, 670, 580];//[20,80,20,80,20];
        _this.FishInThirdSmallTank_X = [820, 865, 778, 820, 820];
        _this.FishInFourthSmallTank_X = [390, 435, 430, 475, 390];
        _this.FishInSecondSmallTank_Y = [162, 162, 135, 135, 108]; //[210,175,140];
        _this.FishInFourthSmallTank_Y = [333, 333, 306, 306, 279]; //[210,175,140];
        _this.FishInFifthSmallTank_X = [620, 665, 576, 624, 620];
        _this.FishInSixthSmallTank_X = [780, 825, 815, 860, 780];

        _this.row1BlueFishX = [90, 150, 210, 270, 330];
        _this.row1BlueFishY = [330, 330, 330, 330, 330];
        _this.row2RedFishX = [90, 150, 210, 270, 330];
        _this.row2RedFishY = [300, 300, 300, 300, 300];
        _this.row3BlueFishX = [90, 150, 210, 270, 330];
        _this.row3BlueFishY = [270, 270, 270, 270, 270];
        _this.row4RedFishX = [90, 150, 210, 270, 330];
        _this.row4RedFishY = [240, 240, 240, 240, 240];
        _this.row5BlueFishX = [90, 150, 210, 270, 330];
        _this.row5BlueFishY = [210, 210, 210, 210, 210];
        _this.row6RedFishX = [90, 150, 210, 270, 330];
        _this.row6RedFishY = [180, 180, 180, 180, 180];

        //*ALD-02-G6
        _this.FisrtBowlFishPosX = [];
        _this.FisrtBowlFishPosY = [];

        _this.SecondBowlFishPosX = [];
        _this.SecondBowlFishPosY = [];

        _this.ThirdBowlFishPosX = [];
        _this.ThirdBowlFishPosY = [];

        _this.FourthBowlFishPosX = [];
        _this.FourthBowlFishPosY = [];

        _this.SixthBowlFishPosX = [];
        _this.FisrtBowlFishPosY = [];

        _this.lastBowlPosX = [];
        _this.lastBowlPosY = [];

        _this.EquationFn_PartA = false;
        _this.EquationFn_PartB = false;//part B equation in not loaded

        _this.PartAQnCnt = 0;
        _this.PartBQnCnt = 0;
        _this.FIBTypeArrayCount = 0;

        _this.tweenShown = 0;

        _this.QuestionArray = [1, 2, 1, 2, 1, 2]; //1=patrA 2=PartB
        _this.QuestionArray = _this.shuffle(_this.QuestionArray);

        //* Division Game arrays 
        _this.QYArray = [];
        _this.QZArray = [];
        _this.QXArray = [];
        // _this.QChoiceArray = [2,1,2,1,2,1];

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

    shuffle2D: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex][0];
            array[currentIndex][0] = array[randomIndex][0];
            array[randomIndex][0] = temporaryValue;

            temporaryValue = array[currentIndex][1];
            array[currentIndex][1] = array[randomIndex][1];
            array[randomIndex][1] = temporaryValue;
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
        _this.displayInitialScreen();
        // _this.DecidesQn();//here dicedde which part we nees ask

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
        _this.imageb11 = _this.add.sprite(90, 128, 'bubbles');
        _this.imageb11_anim = _this.imageb11.animations.add('draw');
        _this.imageb11_anim.play(15);
        // _this.showBubbles(345, 150);

        _this.imageb11_anim.onComplete.add(function () {
            _this.imageb11_anim.play(15);
        }, _this);


        _this.imageb21 = _this.add.sprite(480 - 300, 128, 'bubbles')
        _this.imageb21_anim = _this.imageb21.animations.add('draw');
        _this.imageb21_anim.play(30);
        _this.imageb21_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            _this.imageb21.frame = 17;
            _this.imageb21_anim.play(30);


        }, _this);

        _this.imageb31 = _this.add.sprite(550 - 300, 128, 'bubbles')
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
        _this.VoiceNote1Fn();
        _this.Question_flag = 1;
        _this.randomizing_elements_PartAD();

    },

    randomizing_elements_PartAD: function () {
        //* This is a division equation EX : 5 = X/3 or 5=a/6
        //* In this function we will generate value for a(let call it as y), x(5 in the above equation), z(6 in the above equation)
        //* y can be from 2 - 5, x can be from 2 - 5 and z can be from 2 - 6. Our equation will be y = x/z
        _this.QChoiceArray = [2, 1, 2, 1, 1, 2]; //2,1,2,1,1,2
        _this.QChoiceArray = _this.shuffle(_this.QChoiceArray);
        //* Create a 2D array to hold the questions ready ..
        //* Shuffle it and use
        _this.questionArray = [[2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6]];
        _this.questionArray = _this.shuffle2D(_this.questionArray);
        //console.log(_this.questionArray);

        console.log("Inside Div Questions")
        for (i = 0; i < 20; i++) {
            console.log(_this.questionArray[i][0]);
            console.log(_this.questionArray[i][1]);
        }

        for (i = 0; i < 6; i++) {
            // _this.Yval =  Math.floor((Math.random() * (6-2)) + 2); //y can be from 2 - 5 each fish in pot
            // _this.QYArray.push(_this.Yval);

            // _this.Zval =  Math.floor((Math.random() * (7-2)) + 2); //z can be from 2 - 6

            //* Y = 2 3 4 5
            //* Z = 2 3 4 5 6
            //* Z = 2*2 2*3 2*4 2*5 2*6
            //*   = 3*2 3*3 3*4 3*5 3*6
            //*   = 4*2 4*3 ........4*6
            //*   = 5*2 5*3 ........5*6

            //* questionArray = [2,2],[2,3],[2,4],[2,5],[2,6],[3,2],[3,3],......[5,6]
            //* questionArray[i,j] i = 0 - 19 & j = 0 1
            //** Shuffle this array
            //* for(i = 0; i<5 ; i++)
            // {


            //**  _this.questionArray = [[2,2],[2,3],[2,4],[2,5],[2,6],[3,2],[3,3],[3,4],[3,5],[3,6],[4,2],[4,3],[4,4],[4,5],[4,6],[5,2],[5,3],[5,4],[5,5],[5,6]];
            _this.QYArray.push(_this.questionArray[i][0]); //* store Y from the 2D array

            _this.QZArray.push(_this.questionArray[i][1]); //* store Z from the above 2D array


            _this.Xval = _this.questionArray[i][0] * _this.questionArray[i][1]; // Total no of fishes in the big tank
            _this.QXArray.push(_this.Xval);
            // }


            // _this.QZArray.push(_this.Zval);


            // _this.Xval = _this.Yval * _this.Zval; // Total no of fishes in the big tank
            // _this.QXArray.push(_this.Xval);

        }
        console.log(_this.QYArray, "Y Array");
        console.log(_this.QZArray, "Z Array");
        console.log(_this.QXArray, "X array");
        console.log(_this.QChoiceArray, "choice array");

    },

    displayInitialScreen: function () {
        _this.sceneCount++;
       // _this.AnsTimerCount = 0;
        _this.noofAttempts = 0;
        //* This will display initial screen for the game with all the objects
        //* also have created the group according to the need
        _this.potGroups = _this.add.group();
        _this.bowl1Group = _this.add.group();
        _this.bowl2Group = _this.add.group();
        _this.bowl3Group = _this.add.group();
        _this.bowl4Group = _this.add.group();
        _this.bowl5Group = _this.add.group();
        _this.bowl6Group = _this.add.group();
        _this.bowlnumberGroup = _this.add.group();
        // _this.bigTankFishGroup = _this.add.group();
        // _this.bubblesAnimation1();
        _this.AquariumBox();
        _this.displayPots();
        _this.makeRedAquariumBox();
        _this.initBox = _this.add.image(115, 400, "Text box_1");
        _this.initBoxText = _this.add.text(145, 420, "a");
        _this.initBoxText.fill = '#FF0000';
        //_this.displayBigtankFish();
        //* display Equation 
        //* y =x/z
        _this.equationBox = _this.add.image(10, 50, 'Text box_4');
        _this.equationBox.scale.setTo(0.8, 0.8);

        _this.addY = _this.add.text(45, 60, _this.QYArray[_this.count1]);
        _this.applyingStyle(_this.addY);
        _this.addEqlsign = _this.add.text(70, 60, "=");
        _this.applyingStyle(_this.addEqlsign);
        _this.addX = _this.add.text(100, 60, "a");
        _this.addX.fill = '#FF0000';
        _this.addDivsign = _this.add.text(120, 60, "/");
        _this.applyingStyle(_this.addDivsign);
        _this.addZ = _this.add.text(140, 60, _this.QZArray[_this.count1]);
        _this.applyingStyle(_this.addZ);

        _this.jumpToBowls();
    },

    jumpToBowls: function () {
        //* this function will make the fishes jump to the bowl according to the QZarray
        console.log("start Fill the bowls")
        switch (_this.QZArray[_this.count1]) //_this.QXArray[_this.count1]
        {
            // case 1 : _this.fillBowl1();
            //         break;
            case 2: _this.fillBowl2();
                break;
            case 3: _this.fillBowl3();
                break;
            case 4: _this.fillBowl4();
                break;
            case 5: _this.fillBowl5();
                break;
            case 6: _this.fillBowl6();
                break;
        }
    },

    fishAnim_bowl1: function () {
        //* adding animation to all group of fishes. We have 6 groups here
        if (_this.bowl_flag == 1) {
            _this.tank1_anim = [];
            _this.tank1 = [];
            for (i = 0; i < _this.bowl1Group.length; i++) {
                // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
                _this.tank1_anim[i] = _this.bowl1Group.getChildAt(i).animations.add('draw');
                _this.tank1_anim[i].play(15);
                _this.tank1_anim[i].onComplete.add(function () {
                    _this.tank1_anim.forEach(element => {
                        if (element)
                            element.play(15)
                    });

                }, _this);

            }
        }
        if (_this.bowl_flag == 2) {
            _this.tank2_anim = [];
            _this.tank2 = [];
            for (i = 0; i < _this.bowl2Group.length; i++) {
                // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
                _this.tank2_anim[i] = _this.bowl2Group.getChildAt(i).animations.add('draw');
                _this.tank2_anim[i].play(15);
                _this.tank2_anim[i].onComplete.add(function () {
                    _this.tank2_anim.forEach(element => {
                        if (element)
                            element.play(15)
                    });

                }, _this);

            }
        }
        if (_this.bowl_flag == 3) {
            _this.tank3_anim = [];
            _this.tank3 = [];
            for (i = 0; i < _this.bowl3Group.length; i++) {
                // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
                _this.tank3_anim[i] = _this.bowl3Group.getChildAt(i).animations.add('draw');
                _this.tank3_anim[i].play(15);
                _this.tank3_anim[i].onComplete.add(function () {
                    _this.tank3_anim.forEach(element => {
                        if (element)
                            element.play(15)
                    });

                }, _this);

            }
        }
        if (_this.bowl_flag == 4) {
            _this.tank4_anim = [];
            _this.tank4 = [];
            for (i = 0; i < _this.bowl4Group.length; i++) {
                // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
                _this.tank4_anim[i] = _this.bowl4Group.getChildAt(i).animations.add('draw');
                _this.tank4_anim[i].play(15);
                _this.tank4_anim[i].onComplete.add(function () {
                    _this.tank4_anim.forEach(element => {
                        if (element)
                            element.play(15)
                    });

                }, _this);

            }
        }
        if (_this.bowl_flag == 5) {
            _this.tank5_anim = [];
            _this.tank5 = [];
            for (i = 0; i < _this.bowl5Group.length; i++) {
                // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
                _this.tank5_anim[i] = _this.bowl5Group.getChildAt(i).animations.add('draw');
                _this.tank5_anim[i].play(15);
                _this.tank5_anim[i].onComplete.add(function () {
                    _this.tank5_anim.forEach(element => {
                        if (element)
                            element.play(15)
                    });

                }, _this);

            }
        }
        if (_this.bowl_flag == 6) {
            _this.tank6_anim = [];
            _this.tank6 = [];
            for (i = 0; i < _this.bowl6Group.length; i++) {
                // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
                _this.tank6_anim[i] = _this.bowl6Group.getChildAt(i).animations.add('draw');
                _this.tank6_anim[i].play(15);
                _this.tank6_anim[i].onComplete.add(function () {
                    _this.tank6_anim.forEach(element => {
                        if (element)
                            element.play(15)
                    });

                }, _this);

            }
        }

    },

    showtank1ClickigDemo: function () {
        //* This will show the demo for clicking the bowl
        _this.hand = _this.add.image(430, 180, 'hand');
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

    fillBowl1: function () {
        //* Fill the first bowl and call animation function 
        //* destroy red screen here
        //* add necessarywindow.baseUrl+  sounds and bubble animation
        //* make the bowls input ebable 
        _this.bowl_flag = 1;
        let i = 0;
        let row = 0;
        let mainrow = _this.QYArray[_this.count1] / 2;
        console.log(mainrow);
        _this.fishX = 0;
        _this.fishY = 0;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(800, () => {
            // for(i =0; i< 1 ; i++) //_this.QXArray[_this.count1]
            // {
            _this.WaterDropSound.play();
            if (row <= 1 || row >= 4) //_this.fishX <= 1 || _this.fishX >=4
            {
                _this.Bluefishes = _this.add.sprite(140, 300, "BlueFishAnim");
                _this.Bluefishes.scale.setTo(0.7, 0.7);
                _this.Bluefishes.scale.x *= -1; // ** To reverse the position of the fish(left to right ot right to left)

            }
            else {
                console.log("Reverse the Fishh")
                _this.Bluefishes = _this.add.sprite(140, 300, "BlueFishAnim");
                _this.Bluefishes.scale.setTo(0.7, 0.7);
                // _this.fishes.scale.x *= -1;
            }
            _this.bowl1Group.addChild(_this.Bluefishes);
            console.log(_this.bowl1Group.length);
            //} 

            //if(_this.QXArray[_this.count1] /)
            _this.fishTween = _this.add.tween(_this.Bluefishes);
            _this.fishTween.to({ x: _this.FishInSmallTank_X[_this.fishX], y: _this.FishInSmallTank_Y[_this.fishY] }, 300, 'Linear', true, 0);
            _this.fishTween.start();
            row += 1;
            i++;

            if (i == _this.QYArray[_this.count1]) {
                console.log("stop loop")
                _this.loope.stop();
                _this.fishAnim_bowl1();
                _this.bubbleSound.play();
                _this.graphicsImg.destroy();
                _this.bubblesAnimation1();
                _this.potGroups.forEach(element => {
                    console.log("Hellowww");
                    element.inputEnabled = true;
                    element.input.useHandCursor = true;
                })
                if (_this.count1 == 0) {
                    _this.time.events.add(800, _this.showtank1ClickigDemo);
                }

                // _this.potGroups.getChildAt(_this.potGroups.length -1).input.useHandCursor = true;
                //_this.potGroups.getChildAt(_this.potGroups.length -1).events.onInputDown.add(_this.bowl1FishClicked,_this);
                //group1.inputEnableChildren = true;
                // _this.BigTankBlueFishGroup.addChild(_this.BlueFishInAquirium);
                // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).inputEnabled = true;
                // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).input.useHandCursor = true;
                // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).events.onInputDown.add(_this.bluefishClicked,_this);
                // _this.enableBowlsToClick();


                //_this.showtank1ClickigDemo();
                //_this.time.events.add(500, _this.enableBowlsToClick);

            }
            _this.fishX++;
            if (_this.fishX >= 1) {
                _this.fishY++;
            }
            console.log(row);
        });

    },

    fillBowl2: function () {
        //* Fill the second bowl and call animation function 
        _this.bowl_flag = 2;
        console.log("second bowl")
        let i = 0;
        let row = 0;
        _this.fishX = 0;
        _this.fishY = 0;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(800, () => {
            // for(i =0; i< 1 ; i++) //_this.QXArray[_this.count1]
            // {
            _this.WaterDropSound.play();
            if (row <= 1 || row >= 4) //_this.fishX <= 1 || _this.fishX >=4
            {
                _this.Redfishes = _this.add.sprite(140, 340, "RedFishAnim");
                _this.Redfishes.scale.setTo(0.7, 0.7);

            }
            else {
                _this.Redfishes = _this.add.sprite(140, 340, "RedFishAnim");
                _this.Redfishes.scale.setTo(0.7, 0.7);
                _this.Redfishes.scale.x *= -1;
            }
            _this.bowl2Group.add(_this.Redfishes);
            console.log(_this.bowl2Group.length);
            //_this.BlueFishInAquirium.scale.x *= -1;
            //}

            _this.fishTween = _this.add.tween(_this.Redfishes);
            _this.fishTween.to({ x: _this.FishInSecondSmallTank_X[_this.fishX], y: _this.FishInSecondSmallTank_Y[_this.fishY] }, 300, 'Linear', true, 0);
            _this.fishTween.start();
            row += 1;

            i++;

            if (i == _this.QYArray[_this.count1]) {
                console.log("stop loop")
                _this.loope.stop();
                _this.bubbleSound.play();
                _this.fishAnim_bowl1();
                _this.time.events.add(500, _this.fillBowl1);
                //_this.fillBowl2();
            }
            _this.fishX++;
            if (_this.fishX >= 1) {
                _this.fishY++;
            }
            console.log(row);
        });
    },

    fillBowl3: function () {
        //* Fill the third bowl and call animation function 
        _this.bowl_flag = 3;
        console.log("third bowl")
        let i = 0;
        let row = 0;
        _this.fishX = 0;
        _this.fishY = 0;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(800, () => {
            // for(i =0; i< 1 ; i++) //_this.QXArray[_this.count1]
            // {
            _this.WaterDropSound.play();
            if (row <= 1 || row >= 4) //_this.fishX <= 1 || _this.fishX >=4
            {
                _this.Bluefishes = _this.add.sprite(140, 360, "BlueFishAnim");
                _this.Bluefishes.scale.setTo(0.7, 0.7);
                _this.Bluefishes.scale.x *= -1;

            }
            else {
                _this.Bluefishes = _this.add.sprite(140, 360, "BlueFishAnim");
                _this.Bluefishes.scale.setTo(0.7, 0.7);
            }
            _this.bowl3Group.add(_this.Bluefishes);
            console.log(_this.bowl3Group.length);
            //_this.BlueFishInAquirium.scale.x *= -1;
            //}

            _this.fishTween = _this.add.tween(_this.Bluefishes);
            _this.fishTween.to({ x: _this.FishInThirdSmallTank_X[_this.fishX], y: _this.FishInSecondSmallTank_Y[_this.fishY] }, 300, 'Linear', true, 0);
            _this.fishTween.start();
            row += 1;

            i++;

            if (i == _this.QYArray[_this.count1]) {
                console.log("stop loop")
                _this.loope.stop();
                _this.bubbleSound.play();
                _this.fishAnim_bowl1();
                _this.time.events.add(500, _this.fillBowl2);
                //_this.fillBowl2();
            }
            _this.fishX++;
            if (_this.fishX >= 1) {
                _this.fishY++;
            }
            console.log(row);
        });
    },

    fillBowl4: function () {
        //* Fill the fourth bowl and call animation function 
        _this.bowl_flag = 4;
        console.log("third bowl")
        let i = 0;
        let row = 0;
        _this.fishX = 0;
        _this.fishY = 0;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(800, () => {
            // for(i =0; i< 1 ; i++) //_this.QXArray[_this.count1]
            // {
            _this.WaterDropSound.play();
            if (row <= 1 || row >= 4) //_this.fishX <= 1 || _this.fishX >=4
            {
                _this.Redfishes = _this.add.sprite(140, 380, "RedFishAnim");
                _this.Redfishes.scale.setTo(0.7, 0.7);
            }
            else {
                _this.Redfishes = _this.add.sprite(140, 380, "RedFishAnim");
                _this.Redfishes.scale.setTo(0.7, 0.7);
                _this.Redfishes.scale.x *= -1;
            }
            _this.bowl4Group.add(_this.Redfishes);
            console.log(_this.bowl4Group.length);
            //_this.BlueFishInAquirium.scale.x *= -1;
            //}

            _this.fishTween = _this.add.tween(_this.Redfishes);
            _this.fishTween.to({ x: _this.FishInFourthSmallTank_X[_this.fishX], y: _this.FishInFourthSmallTank_Y[_this.fishY] }, 300, 'Linear', true, 0);
            _this.fishTween.start();
            row += 1;

            i++;

            if (i == _this.QYArray[_this.count1]) {
                console.log("stop loop")
                _this.loope.stop();
                _this.fishAnim_bowl1();
                _this.bubbleSound.play();
                _this.time.events.add(500, _this.fillBowl3);
                //_this.fillBowl2();
            }
            _this.fishX++;
            if (_this.fishX >= 1) {
                _this.fishY++;
            }
            console.log(row);
        });
    },

    fillBowl5: function () {
        //* Fill the fifth bowl and call animation function 
        _this.bowl_flag = 5;
        console.log("Fifth bowl")
        let i = 0;
        let row = 0;
        _this.fishX = 0;
        _this.fishY = 0;
        _this.loope = _this.time.create(false);
        _this.loope.start();
        _this.loope.loop(800, () => {
            // for(i =0; i< 1 ; i++) //_this.QXArray[_this.count1]
            // {
            _this.WaterDropSound.play();
            if (row <= 1 || row >= 4) //_this.fishX <= 1 || _this.fishX >=4
            {
                _this.Bluefishes = _this.add.sprite(140, 380, "BlueFishAnim");
                _this.Bluefishes.scale.setTo(0.7, 0.7);
                _this.Bluefishes.scale.x *= -1;
            }
            else {
                _this.Bluefishes = _this.add.sprite(140, 380, "BlueFishAnim");
                _this.Bluefishes.scale.setTo(0.7, 0.7);

            }
            _this.bowl5Group.add(_this.Bluefishes);
            console.log(_this.bowl5Group.length);
            //_this.BlueFishInAquirium.scale.x *= -1;
            //}

            _this.fishTween = _this.add.tween(_this.Bluefishes);
            _this.fishTween.to({ x: _this.FishInFifthSmallTank_X[_this.fishX], y: _this.FishInFourthSmallTank_Y[_this.fishY] }, 300, 'Linear', true, 0);
            _this.fishTween.start();
            row += 1;

            i++;

            if (i == _this.QYArray[_this.count1]) {
                console.log("stop loop")
                _this.loope.stop();
                _this.fishAnim_bowl1();
                _this.bubbleSound.play();
                _this.time.events.add(500, _this.fillBowl4);
                //_this.fillBowl2();
            }
            _this.fishX++;
            if (_this.fishX >= 1) {
                _this.fishY++;
            }
            console.log(row);
        });
    },

    fillBowl6: function () {
        //* Fill the sixth bowl and call animation function 
        _this.bowl_flag = 6;
        console.log("third bowl")
        let i = 0;
        let row = 0;
        _this.fishX = 0;
        _this.fishY = 0;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(800, () => {
            // for(i =0; i< 1 ; i++) //_this.QXArray[_this.count1]
            // {
            _this.WaterDropSound.play();
            if (row <= 1 || row >= 4) //_this.fishX <= 1 || _this.fishX >=4
            {
                _this.Redfishes = _this.add.sprite(140, 300, "RedFishAnim");
                _this.Redfishes.scale.setTo(0.7, 0.7);

            }
            else {
                _this.Redfishes = _this.add.sprite(140, 300, "RedFishAnim");
                _this.Redfishes.scale.setTo(0.7, 0.7);
                _this.Redfishes.scale.x *= -1;

            }
            _this.bowl6Group.add(_this.Redfishes);
            console.log(_this.bowl6Group.length);
            //_this.BlueFishInAquirium.scale.x *= -1;
            //}

            _this.fishTween = _this.add.tween(_this.Redfishes);
            _this.fishTween.to({ x: _this.FishInSixthSmallTank_X[_this.fishX], y: _this.FishInFourthSmallTank_Y[_this.fishY] }, 300, 'Linear', true, 0);
            _this.fishTween.start();
            row += 1;

            i++;

            if (i == _this.QYArray[_this.count1]) {
                console.log("stop loop")
                _this.loope.stop();
                _this.fishAnim_bowl1();
                _this.bubbleSound.play();
                _this.time.events.add(500, _this.fillBowl5);
                //_this.fillBowl2();
            }
            _this.fishX++;
            if (_this.fishX >= 1) {
                _this.fishY++;
            }
            console.log(row);
        });
    },

    displayPots: function () {
        //* Display required number of bowls here and numbers for the bowls
        //* Add bowlclicked() function
        _this.bigTankFishGroup = _this.add.group();
        var j = 0;
        var k = 0;
        var no = 0;

        for (i = 0; i < _this.QZArray[_this.count1]; i++) //_this.QZArray[_this.count1]
        {
            _this.FirstSmallTank = _this.add.sprite(_this.FishBowlPositionX[j], _this.FishBowlPositionY[k], 'FishBowl');
            _this.FirstSmallTank.scale.setTo(0.8, 0.8);
            no += 1;

            _this.bowl_no = _this.add.image(_this.FishBowlPositionX[j] + 48, _this.FishBowlPositionY[k] + 130, "pot_EraserBg"); //_this.bowl_noX[j], _this.bowl_noY[k]
            _this.bowl_noText = _this.add.text(_this.FishBowlPositionX[j] + 60, _this.FishBowlPositionY[k] + 135, no);
            _this.bowl_noText.fill = '#65B4C3';
            _this.bowl_noText.fontSize = 24;
            _this.bowl_noText.font = "Akzidenz-Grotesk BQ";
            //pot_EraserBg

            _this.bowlnumberGroup.addChild(_this.bowl_no);
            _this.bowlnumberGroup.addChild(_this.bowl_noText);
            _this.potGroups.addChild(_this.FirstSmallTank);
            //_this.animBowls();
            _this.potGroups.getChildAt(_this.potGroups.length - 1).name = _this.potGroups.length;
            // _this.potGroups.getChildAt(_this.potGroups.length-1).inputEnabled = true;
            //_this.potGroups.getChildAt(_this.potGroups.length-1).input.useHandCursor = true;
            _this.potGroups.getChildAt(_this.potGroups.length - 1).events.onInputDown.add(_this.BowlClicked1, _this);
            console.log(_this.potGroups.length);
            //_this.animBowls();

            j++;
            if (j >= 3) {
                k++;
                j = 0;
            }
        }

    },

    displayFirstAnswerBox: function (target) {
        //* when all the fishes move to the bug tank add an answer box to eneter total number of fishes
        _this.FIBPart = 0;

        console.log("here you are ")
        if (_this.bigTankFishGroup.length === _this.QXArray[_this.count1]) {
            console.log("you can display the ans box now")
            _this.initBox.destroy();
            _this.initBoxText.destroy();
            _this.AnsBox_flag = 1;
            _this.AnswerBox = _this.add.image(115, 400, "Text box_2");
            _this.AnswerBox.inputEnabled = true;
            _this.commonPart = 1;
            _this.firstAnswerBoxText = _this.add.text(140, 420, "a");
            _this.firstAnswerBoxText.fill = '#FF0000';//#FF0000
            _this.firstBoxEqlsign = _this.add.text(165, 420, "=");
            _this.firstBoxEqlsign.fill = '#65B4C3';
            _this.addNumberPad();
            if (_this.count1 == 0) {
                // _this.Question_flag = 2;
                _this.VoiceNote2Fn();
            }
            _this.Question_flag = 2;
            _this.potGroups.forEach(element => {
                element.inputEnabled = false;
            })
        }

    },

    BowlClicked1: function (target) {
        //* this will move the fishes to the big tank when bowls are clicked
        //* we have separate click function to each bowl 
        console.log("bowl clicked")
        // target.inputEnabled = false;
        console.log(target.name);

        switch (target.name) {
            case 1: _this.FirstBowlClicked1(target);
                break;
            case 2: _this.SecondBowlClicked2(target);
                break;
            case 3: _this.ThirdBowlClicked3(target);
                break;
            case 4: _this.FourthBowlClicked4(target);
                break;
            case 5: _this.FifthBowlClicked5(target);
                break;
            case 6: _this.SixthBowlClicked6(target);
                break;
        }

    },

    FirstBowlClicked1: function (target) {
        //* when first bowl is clicked move the fishes to big tank
        target.inputEnabled = false;
        console.log("1 ..hii");
        _this.bubbleSound.play();

        i = _this.bowl1Group.length - 1;
        j = 0;

        // console.log(i, "grp lenth");
        if (_this.bowl1Group.length >= 1) {

            _this.potGroups.forEach(element => {
                console.log("okayyyy")
                element.inputEnabled = false;
                element.input.useHandCursor = false;
            })
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(800, () => {
                console.log(i, "grp lenth");
                _this.WaterDropSound.play();
                _this.bowl1Group.getChildAt(i).scale.setTo(0.9, 0.9);
                _this.bowl1Group.getChildAt(i).scale.x *= -1;
                _this.bigTankTween = _this.add.tween(_this.bowl1Group.getChildAt(i));
                _this.bigTankTween.to({ x: _this.row1BlueFishX[j], y: _this.row1BlueFishY[j] }, 300, 'Sine', true, 0);
                _this.bigTankTween.start();


                _this.bigTankTween.onComplete.add(function () {
                    console.log("say hii")
                    _this.bigTankFishGroup.addChild(_this.bowl1Group.getChildAt(_this.bowl1Group.length - 1));
                    _this.displayFirstAnswerBox();
                })
                if (i == 0) {
                    _this.loope.stop();
                    _this.bubbleSound.play();
                    _this.time.events.add(500, function () {
                        _this.potGroups.forEach(element => {
                            console.log("okayyyy")
                            element.inputEnabled = true;
                            element.input.useHandCursor = true;
                        })
                    })

                }

                console.log(i, "grp lenth");
                i -= 1;

                j++;
            })
        }

        // _this.fishTween = _this.add.tween(_this.Redfishes);
        // _this.fishTween.to({ x:_this.FishInSixthSmallTank_X[_this.fishX], y:_this.FishInFourthSmallTank_Y[_this.fishY]}, 300, 'Linear', true, 0);
        // _this.fishTween.start();
    },

    SecondBowlClicked2: function (target) {
        //* when second bowl is clicked move the fishes to big tank
        target.inputEnabled = false;
        console.log("2...hii");
        _this.bubbleSound.play();
        i = _this.bowl2Group.length - 1;
        j = 0;
        if (_this.bowl2Group.length >= 1) {
            _this.potGroups.forEach(element => {
                console.log("okayyyy")
                element.inputEnabled = false;
                element.input.useHandCursor = false;
            })
            // console.log(i, "grp lenth");
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(800, () => {
                console.log(i, "grp lenth");
                _this.WaterDropSound.play();
                _this.bowl2Group.getChildAt(i).scale.setTo(0.9, 0.9);
                _this.bowl2Group.getChildAt(i).scale.x *= -1;
                _this.bigTankTween = _this.add.tween(_this.bowl2Group.getChildAt(i));
                _this.bigTankTween.to({ x: _this.row2RedFishX[j], y: _this.row2RedFishY[j] }, 300, 'Linear', true, 0);
                _this.bigTankTween.start();

                _this.bigTankTween.onComplete.add(function () {
                    console.log("say hii")
                    _this.bigTankFishGroup.addChild(_this.bowl2Group.getChildAt(_this.bowl2Group.length - 1));
                    _this.displayFirstAnswerBox();
                })

                if (i == 0) {
                    _this.loope.stop();
                    _this.bubbleSound.play();

                    _this.time.events.add(500, function () {
                        _this.potGroups.forEach(element => {
                            console.log("okayyyy")
                            element.inputEnabled = true;
                            element.input.useHandCursor = true;
                        })
                    })

                }
                console.log(i, "grp lenth");
                i -= 1;
                j++;
            })
        }
    },

    ThirdBowlClicked3: function (target) {
        //* when third bowl is clicked move the fishes to big tank
        target.inputEnabled = false;
        console.log("3..hii");
        _this.bubbleSound.play();
        i = _this.bowl3Group.length - 1;
        j = 0;
        if (_this.bowl3Group.length >= 1) {
            _this.potGroups.forEach(element => {
                console.log("okayyyy")
                element.inputEnabled = false;
                element.input.useHandCursor = true;
            })
            // console.log(i, "grp lenth");
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(800, () => {
                console.log(i, "grp lenth");
                _this.WaterDropSound.play();
                _this.bowl3Group.getChildAt(i).scale.setTo(0.9, 0.9);
                _this.bowl3Group.getChildAt(i).scale.x *= -1;
                _this.bigTankTween = _this.add.tween(_this.bowl3Group.getChildAt(i));
                _this.bigTankTween.to({ x: _this.row3BlueFishX[j], y: _this.row3BlueFishY[j] }, 300, 'Linear', true, 0);
                _this.bigTankTween.start();

                _this.bigTankTween.onComplete.add(function () {
                    console.log("say hii")
                    _this.bigTankFishGroup.addChild(_this.bowl3Group.getChildAt(_this.bowl3Group.length - 1));
                    _this.displayFirstAnswerBox();
                })

                if (i == 0) {
                    _this.loope.stop();
                    _this.bubbleSound.play();

                    _this.time.events.add(500, function () {
                        _this.potGroups.forEach(element => {
                            console.log("okayyyy")
                            element.inputEnabled = true;
                            element.input.useHandCursor = true;
                        })
                    })
                }

                console.log(i, "grp lenth");
                i -= 1;
                j++;
            })
        }
    },

    FourthBowlClicked4: function (target) {
        //* when fourth bowl is clicked move the fishes to big tank
        target.inputEnabled = false;
        console.log("4...hii");
        _this.bubbleSound.play();
        i = _this.bowl4Group.length - 1;
        j = 0;
        if (_this.bowl4Group.length >= 1) {
            _this.potGroups.forEach(element => {
                console.log("okayyyy")
                element.inputEnabled = false;
                element.input.useHandCursor = true;
            })
            // console.log(i, "grp lenth");
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(800, () => {
                console.log(i, "grp lenth");
                _this.WaterDropSound.play();
                _this.bowl4Group.getChildAt(i).scale.setTo(0.9, 0.9);
                _this.bowl4Group.getChildAt(i).scale.x *= -1;
                _this.bigTankTween = _this.add.tween(_this.bowl4Group.getChildAt(i));
                _this.bigTankTween.to({ x: _this.row4RedFishX[j], y: _this.row4RedFishY[j] }, 300, 'Linear', true, 0);
                _this.bigTankTween.start();


                _this.bigTankTween.onComplete.add(function () {
                    console.log("say hii")
                    _this.bigTankFishGroup.addChild(_this.bowl4Group.getChildAt(_this.bowl4Group.length - 1));
                    _this.displayFirstAnswerBox();
                })

                if (i == 0) {
                    _this.loope.stop();
                    _this.bubbleSound.play();

                    _this.time.events.add(500, function () {
                        _this.potGroups.forEach(element => {
                            console.log("okayyyy")
                            element.inputEnabled = true;
                            element.input.useHandCursor = true;
                        })
                    })
                }

                console.log(i, "grp lenth");
                i -= 1;
                j++;
            })
        }
    },

    FifthBowlClicked5: function (target) {
        //* when fifth bowl is clicked move the fishes to big tank
        target.inputEnabled = false;
        console.log("5...hii");
        _this.bubbleSound.play();
        i = _this.bowl5Group.length - 1;
        j = 0;
        if (_this.bowl5Group.length >= 1) {
            _this.potGroups.forEach(element => {
                console.log("okayyyy")
                element.inputEnabled = false;
                element.input.useHandCursor = true;
            })
            // console.log(i, "grp lenth");
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(800, () => {
                console.log(i, "grp lenth");
                _this.WaterDropSound.play();
                _this.bowl5Group.getChildAt(i).scale.setTo(0.9, 0.9);
                _this.bowl5Group.getChildAt(i).scale.x *= -1;
                _this.bigTankTween = _this.add.tween(_this.bowl5Group.getChildAt(i));
                _this.bigTankTween.to({ x: _this.row5BlueFishX[j], y: _this.row5BlueFishY[j] }, 300, 'Linear', true, 0);
                _this.bigTankTween.start();


                _this.bigTankTween.onComplete.add(function () {
                    console.log("say hii")
                    _this.bigTankFishGroup.addChild(_this.bowl5Group.getChildAt(_this.bowl5Group.length - 1));
                    _this.displayFirstAnswerBox();
                })

                if (i == 0) {
                    _this.loope.stop();
                    _this.bubbleSound.play();

                    _this.time.events.add(500, function () {
                        _this.potGroups.forEach(element => {
                            console.log("okayyyy")
                            element.inputEnabled = true;
                            element.input.useHandCursor = true;
                        })
                    })
                }

                console.log(i, "grp lenth");
                i -= 1;
                j++;
            })
        }
    },

    SixthBowlClicked6: function (target) {
        //* when sixth bowl is clicked move the fishes to big tank
        target.inputEnabled = false;
        console.log("6...hii");
        _this.bubbleSound.play();
        i = _this.bowl6Group.length - 1;
        j = 0;
        if (_this.bowl6Group.length >= 1) {
            _this.potGroups.forEach(element => {
                console.log("okayyyy")
                element.inputEnabled = false;
                element.input.useHandCursor = true;
            })
            // console.log(i, "grp lenth");
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(800, () => {
                console.log(i, "grp lenth");
                _this.WaterDropSound.play();
                _this.bowl6Group.getChildAt(i).scale.setTo(0.9, 0.9);
                _this.bowl6Group.getChildAt(i).scale.x *= -1;
                _this.bigTankTween = _this.add.tween(_this.bowl6Group.getChildAt(i));
                _this.bigTankTween.to({ x: _this.row6RedFishX[j], y: _this.row6RedFishY[j] }, 340, 'Linear', true, 0);
                _this.bigTankTween.start();


                _this.bigTankTween.onComplete.add(function () {
                    console.log("say hii")
                    _this.bigTankFishGroup.addChild(_this.bowl6Group.getChildAt(_this.bowl6Group.length - 1));
                    _this.displayFirstAnswerBox();
                })

                if (i == 0) {
                    _this.loope.stop();
                    _this.bubbleSound.play();

                    _this.time.events.add(500, function () {
                        _this.potGroups.forEach(element => {
                            console.log("okayyyy")
                            element.inputEnabled = true;
                            element.input.useHandCursor = true;
                        })
                    })
                }
                console.log(i, "grp lenth");
                i -= 1;
                j++;
            })
        }
    },

    displayPots2: function () {
        if (_this.QZArray[_this.count1] == 2) {
            _this.pot1 = _this.add.image(100, 200, "FishBowl");
            _this.pot1.scale.setTo(0.8, 0.8);

            _this.bowl_no = _this.add.image(110, 210, "pot_EraserBg"); //_this.bowl_noX[j], _this.bowl_noY[k]
            _this.bowl_no = _this.add.text(120, 220, "1");
            _this.bowl_no.fill = '#65B4C3';

        }
    },

    makeRedAquariumBox: function () {
        //* make a red screen above the aquarium
        _this.graphicsImg = _this.add.graphics();
        _this.graphicsImg.beginFill(0xFF0000, 1)
        _this.graphicsImg.drawRect(17, 130, 81.5 * 4, 64 * 4);
    },

    displayOptionQuestions: function () {
        //* Decide betwen FIb and MCQ question
        if (_this.QChoiceArray[_this.count1] == 1) {
            console.log("MCQ")
            _this.displayForMultpleChoiceQ();
            if (_this.count1 == 0) {
                _this.time.events.add(500, function () {
                    _this.VoiceNote3Fn();
                });

            }
            _this.Question_flag = 3; // multiple choice questions
        }
        else if (_this.QChoiceArray[_this.count1] == 2) {
            _this.displayforFIBQ();
            if (_this.count1 == 0) {
                _this.time.events.add(520, function () {
                    _this.VoiceNote4Fn();
                });
            }
            _this.Question_flag = 4;// fill in the blanks
        }
    },

    displayForMultpleChoiceQ: function () {
        //* Go to MCQ function if MCQ comes
        console.log("MCQQQQ")
        _this.choiceMCQ();
    },

    displayforFIBQ: function () {
        //* go to FIB function if FIB comes
        console.log("FIB")
        _this.MCQBackground = _this.add.image(10, 150, 'BlueBg');
        _this.FIBPart = 1;

        _this.FIBTypeArray = [1, 2, 3];//1,2,3 // * This is to decide types between the FIB question
        _this.FIBTypeArray = _this.shuffle(_this.FIBTypeArray);
        //_this.QuestionBox();
        _this.displayFIBQn(_this.FIBTypeArray[_this.FIBTypeArrayCount]);     //_this.FIBTypeArray[_this.FIBTypeArrayCount]   
        _this.FIBTypeArrayCount++;

        _this.addNumberPad();

    },

    displayFIBQn: function (target) {
        //* 3 types in FIb you can find here
        if (target == 1) {
            _this.FIBType = 1;
            console.log(_this.FIBType);
            var a = _this.add.text(30, 22, 'a');//_this.ValueXArray[_this.count1]
            _this.applyingStyle(a);
            a.fill = "#FF0000";
            var equal = _this.add.text(55, 24, '=');//_this.SignArray[_this.count1]
            _this.applyingStyle(equal);
            var x = _this.add.text(80, 22, _this.QZArray[_this.count1]);//
            _this.applyingStyle(x);
            var minus = _this.add.text(120, 20, 'x');
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
            var x = _this.add.text(170, 22, _this.QYArray[_this.count1]);//
            _this.applyingStyle(x);
            var minus = _this.add.text(145, 20, 'x');
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
            var minus = _this.add.text(133, 20, 'x');
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

    clearInitialScreen: function () {
        //* this will make the initial screen clear
        _this.potGroups.destroy();
        _this.bigTankFishGroup.destroy();
        _this.AnswerBox.destroy();
        _this.firstAnswerBoxText.destroy();
        _this.firstBoxEqlsign.destroy();
        _this.ClearAquariumObj();
        _this.bowlnumberGroup.destroy();
        _this.numGroup.destroy();

    },

    // CurrectAns:function(target)
    // {
    //     target.destroy();

    //     _this.ansBoxBg = _this.add.image(800,390,'Text box_2');
    //     _this.ansBoxBg.scale.setTo(1.1,1.1);
    //     if(_this.PartB == 1)
    //     {
    //         a = _this.add.text(15,18,'b');
    //     }
    //     else
    //     {
    //         a = _this.add.text(15,18,'a');
    //     }

    //     _this.applyingStyle(a);
    //     a.fill = '#FF0000';
    //     _this.ansBoxBg.addChild(a);
    //     equal = _this.add.text(38,20,'=');
    //     _this.applyingStyle(equal);
    //     _this.ansBoxBg.addChild(equal);
    //     _this.AnswerBox = _this.add.image(70,14,'small_text_box');
    //     _this.AnswerBox.scale.setTo(0.9,0.9);
    //     _this.ansBoxBg.addChild(_this.AnswerBox);
    //     _this.addNumberPad();

    //     if(_this.count1 == 0) {
    //         _this.Question_flag = -1;
    //         _this.VoiceNote2Fn();
    //     }
    //     _this.time.events.add(1000,function(){
    //         _this.Question_flag = 2;
    //     })
    // },

    // checkOverlap:function(spriteA, spriteB) 
    // {     
    //     var boundsA = spriteA.getBounds();
    //     var boundsB = spriteB.getBounds();

    //     return Phaser.Rectangle.intersects(boundsA, boundsB);
    // },


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
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked1, _this);

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

    rightbtnClicked1: function () {
        _this.clickSound.play();
        if (_this.enterTxt == null) {
            _this.wrongSound.play();

        }
        if (_this.FIBPart == 1) //_this.FIBPart == 1
        {
            console.log("Cmmmn")
            _this.validateFib();

        }
        else if (_this.commonPart == 1) {
            console.log("fibb")
            _this.validationC();

        }
    },

    validationC: function () {
        if (_this.selectedAns1 == '' && _this.selectedAns2 == '') {
            console.log("wrong sound !!!!")
            _this.wrongSound.play();
        }
        console.log("Cmmmn..part")
        if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.QXArray[_this.count1]) {
            _this.CounterCelebrationSound.play();
            _this.clearInitialScreen();
            _this.selectedAns1 = "";
            _this.selectedAns2 = "";
            _this.commonPart = 0;
            _this.displayOptionQuestions();
        }
        else {
            console.log("common part answer is wrong");
            _this.wrongSound.play();
            _this.selectedAns1 = "";
            _this.selectedAns2 = "";
            _this.enterTxt.destroy();
        }
    },

    validateFib: function () {
        //* validation FIB answers (Fill In the Blanks)
        console.log("fib...part")
        if (_this.FIBType == 1) {
            //console.log("_this.FIBType"+_this.FIBType,_this.ValueYArray[_this.count1]);
            console.log("type 1")
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.QYArray[_this.count1]) {
                console.log("FIBType 1 answer is correct");
                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.starActions(_this.count1);
                _this.celebrationSound.play();
                _this.time.events.add(2000, function () {
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
            console.log("type 2")
            //console.log("_this.FIBType"+_this.FIBType,_this.ValueXArray[_this.count1]);
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.QZArray[_this.count1]) {
                console.log("initial answer is correct");
                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.starActions(_this.count1);
                _this.celebrationSound.play();
                _this.time.events.add(2000, function () {
                    _this.ClearFIBPart();
                    _this.CallingNextQuestion();
                });
            }
            else {
                _this.noofAttempts++;
                console.log("FIBType 2 answer is wrong");
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
            console.log("type 3")
            // console.log("ansBox1 name"+_this.ValueXArray[_this.count1]+"ansbox2 name"+_this.ValueYArray[_this.count1])
            console.log(_this.AnswerBox.name, _this.AnswerBox1.name);
            _this.finalAnswer = _this.QZArray[_this.count1] * _this.QYArray[_this.count1];
            if (_this.AnswerBox.name * _this.AnswerBox1.name == _this.finalAnswer) //_this.QZArray[_this.count1]  && _this.AnswerBox1.name == _this.QYArray[_this.count1]
            {
                console.log("initial answer is correct");
                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.starActions(_this.count1);
                _this.celebrationSound.play();
                _this.time.events.add(2000, function () {
                    _this.ClearFIBPart();
                    _this.CallingNextQuestion();
                });
            }
            else {
                _this.noofAttempts++;
                console.log("FIBType 3 answer is wrong");
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
                    _this.FisrstBox == true;
                    _this.secondBox == false;
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

    ClearFIBPart: function () {
        _this.BgAnswerBox.destroy();
        _this.MCQBackground.destroy();
        _this.equationBox.destroy();
        _this.addX.destroy();
        _this.addY.destroy();
        _this.addZ.destroy();
        _this.addEqlsign.destroy();
        _this.addDivsign.destroy();
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        //_this.QnBox.destroy();
        //_this.BlueBackground.destroy();
        _this.numGroup.destroy();
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
        // _this.AnswerBox.removeChild(_this.enterTxt);
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

    CallingNextQuestion: function () {
        // if(_this.QuestionArray[_this.count1] == 1) _this.PartAQnCnt++;
        // if(_this.QuestionArray[_this.count1] == 2) _this.PartBQnCnt++;
        _this.count1++;
        _this.PartBQnCnt++;
        // _this.DecidesQn();
        if (_this.count1 < 6) {
            _this.Question_flag = 1;
            console.log(_this.QuestionArray[_this.count1])

            _this.displayInitialScreen();
            //_this.getQuestion();
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
        // _this.Question_flag = -1;
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

        if (_this.commonPart == 1) {
            _this.enterTxt.visible = false;
            if (Number('' + var_selectedAns1) == 0 && ('' + var_selectedAns2) < 10) {
                console.log("here22")
                _this.AnswerBox.removeChild(_this.enterTxt);
                _this.enterTxt = _this.add.text(85, 18, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                _this.AnswerBox.addChild(_this.enterTxt);
            }
            else if (Number('' + var_selectedAns1 + var_selectedAns2) < 10) {
                //&& (''+var_selectedAns1+var_selectedAns2) >= 1
                console.log("here")
                _this.AnswerBox.removeChild(_this.enterTxt);
                _this.enterTxt = _this.add.text(95, 18, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                _this.AnswerBox.addChild(_this.enterTxt);
            }
            else if (Number('' + var_selectedAns1 + var_selectedAns2) >= 10) {
                //|| (''+var_selectedAns1+var_selectedAns2) == 0
                console.log("here1111")
                _this.AnswerBox.removeChild(_this.enterTxt);
                _this.enterTxt = _this.add.text(85, 18, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                _this.AnswerBox.addChild(_this.enterTxt);
            }

        }

        else if (_this.FIBPart == 1) {
            _this.AnswerBox.frame = 0;
            if (_this.FIBType == 3) {
                console.log(_this.FisrstBox, _this.secondBox)
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
                    //_this.AnswerBox.inputEnabled = false;
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

    AquariumBox: function () {
        _this.Aquarium = _this.add.image(10, 130, 'aquiriumBox');
        _this.Aquarium.scale.setTo(0.9, 1.05);

        _this.sand = _this.add.image(16, 360, 'sand');
        _this.sand.scale.setTo(0.9, 1.0);

        _this.Plant_1 = _this.add.image(80, 320, 'Plant');
        _this.Grass_2_1 = _this.add.image(270, 275, 'Grass_2');
        _this.image11_anim = _this.Grass_2_1.animations.add('draw');
        _this.image11_anim.play(15);
        _this.image11_anim.onComplete.add(function () {
            _this.image11_anim.play(15);
        }, _this);

        _this.Grass_1_2 = _this.add.sprite(25, 240, 'Grass_1');
        _this.Grass_1_2.frame = 0;
        _this.image12_anim = _this.Grass_1_2.animations.add('draw');
        _this.image12_anim.play(15);
        _this.image12_anim.onComplete.add(function () {
            _this.image12_anim.play(15);
        }, _this);

        _this.Grass_1_1 = _this.add.sprite(346, 230, 'Grass_1');
        _this.Grass_1_1.frame = 0;
        _this.image13_anim = _this.Grass_1_1.animations.add('draw');
        _this.image13_anim.play(15);
        _this.image13_anim.onComplete.add(function () {
            _this.image13_anim.play(15);
        }, _this);
        _this.Grass_1_1.scale.x *= -1;
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

    choiceMCQ: function () {
        console.log("McQQQQQQ")
        _this.OptionBox_X = [50, 300, 550];
        _this.OptionBox_X = _this.shuffle(_this.OptionBox_X);
        _this.OptionBox_Y = 250;

        //_this.QuestionBox_PartB();
        _this.MCQBackground_B = _this.add.image(10, 150, 'BlueBg');

        _this.OptionPaneltickbtn_PartB = _this.add.sprite(800, 250, 'TickBtn');
        _this.OptionPaneltickbtn_PartB.frame = 1;
        _this.OptionPaneltickbtn_PartB.visible = false;

        _this.PlacingMCQoptionD();

        _this.a1 = _this.add.text(25, 20, 'a');
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
        _this.a2 = _this.add.text(25, 20, 'a');
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
        _this.a3 = _this.add.text(25, 20, 'a');
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

    PlacingMCQoptionD: function () {
        //* Randomizing options to get in MCQ

        //* Store correct answer initially
        _this.CurrectAnsX = _this.QZArray[_this.count1];; //_this.QZArray[_this.count1];
        _this.CurrectAnsZ = _this.QYArray[_this.count1];
        _this.CurrectAnsSign = 'x';

        console.log(_this.CurrectAnsX);
        console.log(_this.CurrectAnsZ);

        _this.XvalueArray = [_this.QZArray[_this.count1], _this.QXArray[_this.count1]];//,_this.ZArray_PartB[_this.PartBQnCnt]];
        _this.ZvalueArray = [_this.QXArray[_this.count1], _this.QZArray[_this.count1]];//,_this.XArray_PartB[_this.PartBQnCnt]];
        _this.SignArray = ['/', 'x'];

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
        //Here we are validating the MCQ answrs(option)
        console.log(target.name);
        _this.OptionPaneltickbtn_PartB.inputEnabled = false;
        _this.OptionBox1_PartB.inputEnabled = false;
        _this.OptionBox2_PartB.inputEnabled = false;
        _this.OptionBox3_PartB.inputEnabled = false;
        if (Number(target.name) == _this.QXArray[_this.PartBQnCnt]) {
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
                _this.equationBox.destroy();
                _this.addY.destroy();
                _this.addX.destroy();
                _this.addZ.destroy();
                _this.addEqlsign.destroy();
                _this.addDivsign.destroy();

                //_this.displayInitialScreen();
                //_this.QnBox_B.destroy();
                //_this.clearRemainingObjects_PartB();
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
        //_this.Question_flag = -1;  
        _this.VoiceNote1 = document.createElement('audio');
        _this.VoiceNote1src = document.createElement('source');
        _this.VoiceNote1src.setAttribute("src", window.baseUrl + "questionSounds/ALD-01-G6/" + _this.languageSelected + "/ALD-01-G6A.mp3");
        _this.VoiceNote1.appendChild(_this.VoiceNote1src);
        _this.VoiceNote1.play();

        // _this.time.events.add(6000,function(){
        //     console.log("completed")
        //     _this.Question_flag = 1;
        // })

    },

    VoiceNote2Fn: function () {
        if (_this.VoiceNote1) _this.VoiceNote1.pause();
        // _this.VoiceNote1.stopAudio();
        console.log("Enter The Value Of The Variable");
        _this.VoiceNote2 = document.createElement('audio');
        _this.VoiceNote2src = document.createElement('source');
        _this.VoiceNote2src.setAttribute("src", window.baseUrl + "questionSounds/ALD-01-G6/" + _this.languageSelected + "/ALD-01-G6B.mp3");
        _this.VoiceNote2.appendChild(_this.VoiceNote2src);
        _this.VoiceNote2.play();
    },

    VoiceNote3Fn: function () {

        console.log("Select The Suitable Equation To Find The Value Of a Given Variable");
        _this.VoiceNote3 = document.createElement('audio');
        _this.VoiceNote3src = document.createElement('source');
        _this.VoiceNote3src.setAttribute("src", window.baseUrl + "questionSounds/ALD-01-G6/" + _this.languageSelected + "/ALD-01-G6C.mp3");
        _this.VoiceNote3.appendChild(_this.VoiceNote3src);
        _this.VoiceNote3.play();

    },
    VoiceNote4Fn: function () {

        console.log("Select The Suitable Equation To Find The Value Of a Given Variable");
        _this.VoiceNote3 = document.createElement('audio');
        _this.VoiceNote3src = document.createElement('source');
        _this.VoiceNote3src.setAttribute("src", window.baseUrl + "questionSounds/ALD-01-G6/" + _this.languageSelected + "/ALD-01-G6D.mp3");
        _this.VoiceNote3.appendChild(_this.VoiceNote3src);
        _this.VoiceNote3.play();

    },

    starActions: function (target) {
        _this.score++;
        _this.AnsTimerCount =0;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        //_this.anim.play();
        //* star Actions changes
        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "ALD_01_G6";
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
        //*  To find value of variable ,  bring all objects from smaller tank  to the bigger tank and count altogether 
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/ALD-01-G6/" + _this.languageSelected + "/DV-ALD-01-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //*  How many objects are needed in big tank to balance the equation?
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALD-01-G6/" +
            _this.languageSelected + "/ALD-01-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //*Enter the value of the variable
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALD-01-G6/" +
            _this.languageSelected + "/ALD-01-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Select the correct equation
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALD-01-G6/" +
            _this.languageSelected + "/ALD-01-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        // *  Complete the equation 
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALD-01-G6/" +
            _this.languageSelected + "/ALD-01-G6D.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.stopAudio();
            if (_this.demoVideo_3)
                _this.demoVideo_3.stop(false);
            if (_this.demoVideo_2)
                _this.demoVideo_2.stop(false);
            if (_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if (_this.videoWorld_1)
                _this.videoWorld_1.destroy();
            if (_this.videoWorld_2)
                _this.videoWorld_2.destroy();
            if (_this.videoWorld_3)
                _this.videoWorld_3.destroy();
            //* hintbtn
            if (_this.hintBtn) {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;  //* restart the game
        });
    },

    stopAudio: function () {
        //* clear all the timers first
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.q3Timer) clearTimeout(_this.q2Timer);

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

        if (_this.q4Sound) {
            console.log("removing the q3");
            _this.q4Sound.pause();
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed
    },

    dA1: function () {
        _this.demoAudio1.play();
    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('ald01_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/ALD-01-G6_1.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        _this.q1Sound.play();

        _this.q1Sound.addEventListener('ended', _this.dA1);

        _this.q2Timer = setTimeout(function ()    //* q2Sound js timer to play q2Timer after 19 seconds.
        {
            console.log("inside demoAudio1sound.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 19000);

        _this.demoVideo_1.onComplete.add(function () {
            console.log("audio2 ended - pause video1");
            _this.demoVideo_2 = _this.add.video('ald01_2');
            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/ALD-01-G6_2.mp4");  //* phaser needs this.to run in mobile
            _this.video_playing = 2;
            _this.videoWorld_2 = _this.demoVideo_2.addToWorld();

            _this.skip.bringToTop();

            _this.q4Sound.play();

            _this.demoVideo_2.onComplete.add(function () {
                console.log("demovideo 2 completed......!!!1")
                _this.demoVideo_3 = _this.add.video('ald01_3');
                _this.demoVideo_3.play(false);
                _this.demoVideo_3.changeSource(window.baseUrl + "assets/demoVideos/ALD-01-G6_3.mp4");  //* phaser needs this.to run in mobile
                _this.video_playing = 3;
                _this.videoWorld_3 = _this.demoVideo_3.addToWorld();

                _this.skip.bringToTop();

                _this.q3Timer = setTimeout(function ()    //* q2Sound js timer to play q2Timer after 19 seconds.
                {
                    console.log("inside q3Timer.....")
                    clearTimeout(_this.q3Timer);         //* clear the time once its used.
                    _this.q3Sound.play();
                }, 1000);


                _this.demoVideo_3.onComplete.add(function () {
                    console.log("demovideo 3 completed......!!!1")

                    _this.stopAudio();
                    _this.demoVideo_3.stop(false);
                    _this.demoVideo_2.stop(false);
                    _this.demoVideo_1.stop(false);
                    _this.videoWorld_3.destroy();
                    _this.videoWorld_2.destroy();
                    _this.videoWorld_1.destroy();
                    if (_this.hintBtn) {
                        _this.hintBtn.inputEnabled = true;
                        _this.hintBtn.input.useHandCursor = true;
                    }
                    _this.game.paused = false;

                });

            });

        });
    }
}