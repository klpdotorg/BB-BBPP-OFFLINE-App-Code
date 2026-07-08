Game.ALAS_01_G6level1 = function () { };


Game.ALAS_01_G6level1.prototype =
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

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl + "sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);


        _this.clungSound = document.createElement('audio');
        _this.clungSoundsrc = document.createElement('source');
        _this.clungSoundsrc.setAttribute("src", window.baseUrl + "sounds/clung.mp3");
        _this.clungSound.appendChild(_this.clungSoundsrc);

        _this.snapSound = document.createElement('audio');
        _this.snapSoundsrc = document.createElement('source');
        _this.snapSoundsrc.setAttribute("src", window.baseUrl + "sounds/snapSound.mp3");
        _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.bellSound = document.createElement('audio');
        _this.bellSoundsrc = document.createElement('source');
        _this.bellSoundsrc.setAttribute("src", window.baseUrl + "sounds/bell.mp3");
        _this.bellSound.appendChild(_this.bellSoundsrc);

        _this.bottleSound = document.createElement('audio');
        _this.bottleSoundsrc = document.createElement('source');
        _this.bottleSoundsrc.setAttribute("src", window.baseUrl + "sounds/bottle_clank.mp3");
        _this.bottleSound.appendChild(_this.bottleSoundsrc);

        _this.SuccessSound = document.createElement('audio');
        _this.SuccessSoundsrc = document.createElement('source');
        _this.SuccessSoundsrc.setAttribute("src", window.baseUrl + "sounds/Success.mp3");
        _this.SuccessSound.appendChild(_this.SuccessSoundsrc);

        _this.SmallRewardSound = document.createElement('audio');
        _this.SmallRewardSoundsrc = document.createElement('source');
        _this.SmallRewardSoundsrc.setAttribute("src", window.baseUrl + "sounds/Small Reward.mp3");
        _this.SmallRewardSound.appendChild(_this.SmallRewardSoundsrc);

        _this.Car_lockSound = document.createElement('audio');
        _this.Car_lockSoundsrc = document.createElement('source');
        _this.Car_lockSoundsrc.setAttribute("src", window.baseUrl + "sounds/Car_lock.mp3");
        _this.Car_lockSound.appendChild(_this.Car_lockSoundsrc);

        _this.GamePositiveSound = document.createElement('audio');
        _this.GamePositiveSoundsrc = document.createElement('source');
        _this.GamePositiveSoundsrc.setAttribute("src", window.baseUrl + "sounds/Game Positive.mp3");
        _this.GamePositiveSound.appendChild(_this.GamePositiveSoundsrc);

        telInitializerbbpp.gameIdInit("ALAS_01_G6", gradeSelected);
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
            _this.gameCreate();
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
        _this.wholeNoQues = -1;
        //* play the audio only once.( when answer is wrong, it does not repeat the audio)
        _this.audio_Q1_Played = false;
        _this.audio_Q2_Played = false;
        _this.audio_Q3_Played = false;
        //* show the drag action demo only once. dont repeat when answer given is wrong
        _this.dragActionShown = false;

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        _this.microConcepts;
        // _this.grade;

        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.number;
        _this.selectedAns1 = '';

        _this.qn_flag = 0;
        _this.index2 = 0;

        _this.numValues1 = [];
        _this.numValues2 = [];
        _this.numValues3 = [];
        _this.numCount1 = 0;
        _this.numCount2 = 0;
        _this.numCount3 = 0;


        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'Bg new');
        _this.tickbtn = _this.add.sprite(800, 405, 'tickbtn');
        _this.tickbtn.frame = 1;
        _this.tickbtn.visible = false;



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
            ////console.log("Hello");
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            //telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();


                console.log(_this.qn_flag);
                if (_this.qn_flag == 0) {
                    console.log("first voice note");
                    _this.askQn1();
                }
                else if (_this.qn_flag == 1) {
                    _this.askQn2();
                }
                else if (_this.qn_flag == 2) {
                    _this.askQn3();
                }
                _this.time.events.add(4000, function () {
                    _this.speakerbtnClicked = false;
                    _this.EnableVoice();
                });
            }


        }, _this);

        _this.enterTxt1 = null;
        _this.enterTxt2 = null;
        _this.enterTxt3 = null;
        _this.numGroup = _this.add.group();

        _this.boxesObj = [];
        _this.grayboxesObj = [];
        _this.grayboxes2Obj = [];

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        //bulb hintBtn
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
            //* show the demo video
            _this.hintBtn.inputEnabled = false;
            _this.hintBtn.input.useHandCursor = false;
            _this.time.events.add(1, function () {
                _this.ViewDemoVideo();
            });

        });

        _this.generateStarsForTheScene(6);
        _this.mybox3 = _this.add.image(655, 350, 'yellowtextbox');
        _this.mybox3.scale.setTo(1.0);
        _this.mybox3.visible = false;


        // weightScale3 = _this.add.sprite(70, 205, 'Level33B2_level2weight32');
        // weightScale3.scale.setTo(1);
        // weightScale3.y += 0;
        // // _this.leftscaleGroup.add(weightScale3);
        // weightScale3.visible = false;

        //     weightScale4 = _this.add.sprite(405, 205, 'Level33B2_level2weight42');
        //     weightScale4.scale.setTo(1);
        //     weightScale4.y -= 0;
        //    // _this.rightscaleGroup.add(weightScale4);
        //     weightScale4.visible = false;

        _this.time.events.add(2000, _this.getQuestion);

        _this.fractionX = [70, 160];
        _this.fraction2X = [285, 370];
        _this.fractionY = [90, 150, 210, 270];
        _this.fraction2Y = [90, 150, 210, 270];

        _this.denominator = false;
        _this.numerator = false;
        _this.numpad = 0;
        _this.wholeCnt = 0; //use for evaluation for whole ans
        _this.wrongAns = 0; //used for wrong answer for 1/4 to ask same 1/4 qn //we have to asset for 1/4 


        _this.objectCounter = 0; // To keep track of the dragged objects(car, cake, cup)

        //* array to store X and Y position of X variable Objects on LHS of the balance
        _this.carPostionXY = [90, 135, 180, 225, 270]; //90,135,180,225,270,90,135,180,225,270,90,135,180,225,270,90,135,180,225,270];
        _this.carPostionYY = [210, 182, 154, 126, 98]; //182,182,182,182,182,154,154,154,154,154,126,126,126,126,126,98,98,98,98,98];

        _this.cakePostionXXY = [90, 130, 170, 210, 250, 290]; //90,130,170,210,250,290,90,130,170,210,250,290,90,130,170,210,250,290,90,130,170,210,250,290];
        _this.cakePostionYY = [205, 170, 137, 105, 70]; //170,170,170,170,170,170,137,137,137,137,137,137,105,105,105,105,105,105,70,70,70,70,70,70];
        _this.jarPostionXXY = [91, 123, 155, 186, 217, 249, 280, 108, 141, 172, 204, 236, 268, 123, 154, 185, 217, 250, 137, 169, 201, 232, 152, 184, 217, 168, 201, 185];
        _this.jarPostionYY = [212, 187, 164, 141, 118, 95, 72]; //212,212,212,212,212,212,187,187,187,187,187,187,164,164,164,164,164,141,141,141,141,118,118,118,95,95,72]; 

        _this.bootlePostionXX = [100, 132, 164, 196, 230, 264]; //100,132,164,196,230,264,100,132,164,196,230,264,100,132,164,196,230,264,100,132,164,196,230,264];
        _this.bottlePostionYY = [205, 173, 141, 109, 78, 47];//173,173,173,173,173,173,141,141,141,141,141,141,109,109,109,109,109,109,78,78,78,78,78,78]; 

        //* array to store X and Y position of Y variable Objects on RHS of the balance

        _this.carPostionXZ = [480, 525, 571, 616, 661];
        _this.carPostionYZ = [210, 182, 154, 126, 98];

        _this.cakePostionXZ = [475, 515, 555, 595, 635, 675]; //480,520,560,600,640,680,480,520,560,600,640,680,480,520,560,600,640,680,480,520,560,600,640,680];
        _this.cakePostionYZ = [205, 175, 145, 115, 85]; //170,170,170,170,170,170,137,137,137,137,137,137,105,105,105,105,105,105,70,70,70,70,70,70];
        _this.jarPostionXZ = [490, 522, 554, 585, 616, 647, 678, 507, 539, 571, 601, 631, 661, 522, 553, 584, 615, 646, 535, 567, 599, 632, 552, 583, 615, 568, 600, 583]; //550,590,630,670,490,531,570,610,650,510,550,590,630,530,570,610,550,590,570
        _this.jarPostionYZ = [212, 187, 164, 141, 118, 95, 72];//212, 212, 212, 212, 212, 212, 187, 187, 187, 187, 187, 187, 164, 164, 164, 164, 164, 141, 141, 141, 141, 118, 118, 118, 95, 95, 72
        _this.bottlePostionXZ = [490, 522, 554, 586, 618, 650]; //490,522,554,586,618,650,490,522,554,586,618,650,490,522,554,586,618,650,490,522,554,586,618,650];
        _this.bottlePostionYZ = [205, 173, 141, 109, 78, 47]; //173,173,173,173,173,173,141,141,141,141,141,141,109,109,109,109,109,109,78,78,78,78,78,78]; 

        //* array to store X and Y position of Objects On the tray
        _this.carOnTrayX = [710, 755, 800, 842];
        _this.carOnTrayY = [335, 307, 279, 251, 223];

        _this.cakePostionXX = [710, 750, 790, 830];
        _this.cakePostionXY = [330, 295, 260, 225, 190];

        _this.jarOnTrayX = [710, 742, 774, 806, 838, 870, 722, 754, 786, 818, 850, 740, 772, 804, 836, 760, 792, 824, 775, 810, 790];
        _this.jarOnTrayY = [335, 310, 285, 260, 235, 210];

        _this.bottleOnTrayX = [710, 742, 774, 805, 836];
        _this.bottleOnTrayY = [335, 302, 270, 235, 205];

        //*Floating car array
        _this.floatingCarX = [20, 60, 100, 140, 180];
        _this.floatingCarY = [120, 95, 70, 45, 20];

        _this.floatingRedCarX = [600, 640, 680, 720, 760];
        _this.floatingRedCarY = [120, 95, 70, 45, 20];

        //_this.floatingCakeX = [20,55,89,122,154,187];
        _this.floatingCakeX = [20, 60, 100, 140, 180, 220];
        _this.floatingCakeY = [120, 90, 60, 30, 5];

        //_this.floatingRedCakeX = [600,632,662,692,722,752];
        _this.floatingRedCakeX = [600, 640, 680, 720, 760, 800];
        _this.floatingRedCakeY = [120, 90, 60, 30, 5];

        _this.floatingJarX = [20, 50, 80, 110, 140, 170, 200, 35, 65, 95, 125, 155, 185, 50, 80, 110, 140, 170, 65, 95, 125, 155, 80, 110, 145, 95, 125, 115];
        _this.floatingJarY = [120, 100, 80, 60, 40, 20, 5];

        _this.floatingRedJarX = [550, 582, 614, 646, 678, 710, 742, 570, 602, 634, 666, 698, 730, 590, 622, 654, 686, 718, 610, 642, 672, 706, 630, 662, 694];
        _this.floatingRedJarY = [120, 100, 80, 60, 40, 20, 5];

        _this.floatingBottleX = [20, 52, 84, 116, 148, 180];
        _this.floatingBottleY = [130, 100, 70, 40, 10, 5];

        _this.floatingRedBottleX = [600, 630, 660, 690, 720, 750];
        _this.floatingRedBottleY = [130, 100, 70, 40, 10, 5];
        //* Add answer box to the top of the screen
        _this.answerBox = _this.add.sprite(755, 405, 'textbox3');
        _this.answerBox.scale.setTo(0.9);
        _this.answerBox.visible = false;
        _this.answerBox.frame = 1;

        //* declaring variable for original answer
        _this.originalAnswer = false;

        // *
        _this.ballObjYArray = [];
        _this.ballObjZArray = [];
        _this.ballObjXArray = [];
        _this.draggedObjectArray = [];

        _this.tweenAarray = [];
        //_this.questionTypeArray = [];

        //* Intial position of the balance 
        _this.balanceLX = 65;
        _this.balanceLY = 274;
        _this.balanceRX = 335;
        _this.balanceRY = 274;

        // weightScale2 = this.add.sprite(this.world.centerX - 80, 294, 'Level33B2_Newlevel2weight2');
        // weightScale2.scale.setTo(1);
        // weightScale2.anchor.setTo(0.5, 0.5);
        _this.basket = _this.add.image(750, 252, 'bigg box'); // Add box for Addition question  
        _this.basket.scale.setTo(1);
        _this.basket.inputEnabled = false;
        _this.basket.visible = false;

        _this.basket1 = _this.add.image(680, 330, 'box tray'); //  Add box for subtraction question
        _this.basket1.scale.setTo(0.9);
        _this.basket1.visible = false;


        //* Gropus to hold the objects 

        _this.leftscaleGroup = _this.add.group();
        _this.rightscaleGroup = _this.add.group();


        _this.RedCarGroup = _this.add.group();
        _this.RedCakeGroup = _this.add.group();
        _this.RedJarGroup = _this.add.group();
        _this.RedBottleGroup = _this.add.group();
        _this.trayGroup = _this.add.group();

        _this.tweenCarGroup = _this.add.group();
        _this.tweenCakeGroup = _this.add.group();

        _this.tweenYsideGroup = _this.add.group();
        _this.subtractionRedGroup = _this.add.group();
        _this.additionRedGroup = _this.add.group();
        _this.additionRedCakeGroup = _this.add.group();

        //* flag used to check if tweening is in progress while dragging/dropping from balance
        //* it is set to true when tween starts and on complete, it is reset to false
        //* this logic is used to prevent multiple tweens happening at the same time.
        _this.tweenInProgress = false;

        // _this.rightscaleObjects = _this.group(); 
    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () {
        ////console.log("SBtn: " + _this.speakerbtnClicked + " RBtn: " + _this.rightbtnClicked);
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

    askQn1: function () {
        //console.log("Subtract the second fraction from the first fraction");
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/ALAS-01-G6/" + _this.languageSelected + "/ALAS-01-G6B.mp3");
        _this.Question1.appendChild(_this.Question1src);
        _this.Question1.play();
        // _this.Question1.addEventListener('ended', _this.askQn11);
    },

    //question 2
    askQn2: function () {
        //console.log('Drag the remaining fraction pieces to the whole');
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/ALAS-01-G6/" + _this.languageSelected + "/ALAS-01-G6C.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
    },
    askQn3: function () {
        //console.log('Enter the answer');
        _this.Question3 = document.createElement('audio');
        _this.Question3src = document.createElement('source');
        _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/ALAS-01-G6/" + _this.languageSelected + "/ALAS-01-G6D.mp3");
        _this.Question3.appendChild(_this.Question3src);
        _this.Question3.play();
    },

    delayq3: function () {
        setTimeout(function () {
            _this.askQn3();
            //document.getElementById( _this.Question11).play();
            //console.log('your audio is started just now');
        }, 1000)


    },

    getQuestion: function () {
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
        _this.Initial_randomizing();
        _this.displayQuestions();

        if (_this.count1 == 0 && _this.questionNumber < 3) {
            console.log("Addition....")
            _this.time.events.add(1500, function () {
                _this.qn_flag = 0;
                _this.askQn1();
            })
        }
        else if (_this.count1 == 0 && _this.questionNumber > 3) {
            console.log("Subtraction....")
            _this.time.events.add(1500, function () {
                _this.qn_flag = 2;
                _this.askQn3();
            })
        }
        // _this.qn_flag = 1; 
        _this.questionid = 1;

    },

    displayQuestions: function () {
        //* Ask each of The 6 Questions and enable drag and drop of objects to the balance, evaluate the answer.
        //* Display Balance , objects (Cars, Cakes,Jars ..), Basket of spare objects(car,cake,bottle..) 
        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

        console.log("Inside display Question......!")
        _this.questionNumber = _this.questionOrderArray[_this.count1] - 1;
        console.log(_this.questionNumber);
        if (_this.count1 > 0 && _this.questionNumber < 3) {
            console.log("Addition...")
            _this.qn_flag = 0;
        }
        else if (_this.count1 > 0 && _this.questionNumber >= 3) {
            console.log("subtraction.....")
            _this.qn_flag = 2;
        }
        _this.displayNumbersOnscreen();
        _this.displayObjectsOnScreen();
        _this.time.events.add(1000, function () {
            _this.animObject();
            _this.animObjectatY();
        });

    },

    displayObjectsOnScreen: function () {

        //* Display Balance , objects (cars, cakes, ..), Basket of spare objects
        weightScale2 = this.add.sprite(this.world.centerX - 80, 294, 'beam');
        weightScale2.scale.setTo(1);
        weightScale2.anchor.setTo(0.5, 0.5);
        weightScale2.angle -= 0;

        weightScale3 = this.add.sprite(70, 205, 'weight gauge part_1');
        weightScale3.scale.setTo(1);
        weightScale3.y += 0;
        _this.leftscaleGroup.add(weightScale3);

        weightScale4 = this.add.sprite(405, 205, 'weight gauge part_2');
        weightScale4.scale.setTo(1);
        weightScale4.y -= 0;
        _this.rightscaleGroup.add(weightScale4);

        weightScale1 = this.add.sprite(this.world.centerX - 80, 280, 'base');
        weightScale1.anchor.setTo(0.5, 0);


        var graphics = this.add.graphics(0, 0);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0, 0, 200, 70);
        graphics.boundsPadding = 0;
        graphics.alpha = 0;
        weightScale3.addChild(graphics);

        var graphics1 = this.add.graphics(40, 0);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0, 0, 200, 70);
        graphics1.boundsPadding = 0;
        graphics1.alpha = 0;
        weightScale4.addChild(graphics1);

        _this.rightscaleGroup.forEach(element => {
            element.visible = true;
        });

        _this.netWeight = 0;
        _this.objectCounter = 0;
    },

    displayNumbersOnscreen: function () {
        //Display yellow box 
        _this.mybox1 = _this.add.image(202, 405, 'textbox1');
        _this.mybox1.scale.setTo(0.9);
        _this.mybox1.visible = true;

        //Display Left hand side of the balance
        if (_this.leftValueXArray[_this.questionNumber] < 10) {
            _this.lefthandvalue = _this.add.text(226.5, 425, _this.leftValueXArray[_this.questionNumber]); // { fontSize: '24px' }
        }
        else {
            _this.lefthandvalue = _this.add.text(220, 424, _this.leftValueXArray[_this.questionNumber]);
        }

        _this.lefthandvalue.align = 'center';
        _this.lefthandvalue.fontSize = "25px";
        _this.lefthandvalue.font = "Akzidenz-Grotesk BQ";
        _this.lefthandvalue.fill = '#65B4C3';
        _this.lefthandvalue.fontWeight = 'Normal';
        _this.lefthandvalue.visible = true;

        _this.mybox2 = _this.add.image(360, 405, 'textbox1');
        _this.mybox2.scale.setTo(0.9);
        _this.mybox2.visible = true;
        //For the Equal sign
        _this.graphicsEq12 = _this.add.text(386, 424, '=');
        _this.graphicsEq12.fill = '#65B4C3';

        //display box 2 
        _this.mybox3 = _this.add.image(505, 405, 'textbox2');
        _this.mybox3.scale.setTo(0.9);
        _this.mybox3.visible = true;

        //Display Right  hand side of the balance
        if (_this.rightValueYArray[_this.questionNumber] < 10) {
            _this.righthand1 = _this.add.text(532, 425, _this.rightValueYArray[_this.questionNumber]);//, { fontSize: '24px' }
        }
        else {
            _this.righthand1 = _this.add.text(522, 424, _this.rightValueYArray[_this.questionNumber]);//, { fontSize: '24px' }
        }
        _this.righthand1.align = 'center';
        _this.righthand1.fontSize = "25px";
        _this.righthand1.font = "Akzidenz-Grotesk BQ";
        _this.righthand1.fill = '#65B4C3';
        _this.righthand1.fontWeight = 'Normal';
        _this.righthand1.visible = true;

        //Display plus sign
        if (_this.questionNumber < 3) {
            console.log("put plus for addition");
            _this.pluSign = _this.add.text(563, 422.5, '+');
            _this.pluSign.fill = '#65B4C3';
        }
        else {
            _this.minusSign = _this.add.text(565, 420, '-')
            _this.minusSign.fill = '#65B4C3';
            console.log("put Minus for subtraction");
        }

        //display RHS 2 as a on screen

        _this.righthand2 = _this.add.text(591, 423, 'a');//{ fontSize: '27px' }
        _this.righthand2.align = 'center';
        _this.righthand2.fontSize = "25px";
        _this.righthand2.font = "Akzidenz-Grotesk BQ";
        _this.righthand2.fill = '#FF0000';
        _this.righthand2.fontWeight = 'Normal';
        _this.righthand2.visible = true;

        //display a=
        _this.textA = _this.add.text(770, 423, 'a'); //{ fontSize: '27px' }
        _this.textA.font = "Akzidenz-Grotesk BQ";
        _this.textA.fill = '#FF0000';
        _this.textA.fontWeight = 'Normal';
        _this.textA.visible = false;

        _this.graphicsEq1 = _this.add.text(800, 425, '=');
        _this.graphicsEq1.fill = '#FF0000';
        _this.graphicsEq1.visible = false;
    },

    animObject: function () {
        _this.firstTween = false;
        switch (_this.ObjectArray[_this.count1]) //_this.ObjectArray[_this.count1]
        {
            case 1: _this.tweenCarToScreen();
                break;
            case 2: _this.tweenCakeToScreen();
                break;
            case 3: _this.tweenJarToScreen();
                break;
            case 4: _this.tweenBottleToScreen();
                break;
        }
    },

    tweenCarToScreen: function () {
        var j = 0;
        var k = 0;
        //* Tweening Car to screen
        console.log(_this.floatingCarX[j], _this.floatingCarY[k]);
        for (let i = 0; i < _this.leftValueXArray[_this.questionNumber]; i++) {

            _this.tweenCar = _this.add.image(_this.carPostionXY[j], _this.carPostionYY[k], 'car');
            _this.tweenCar.scale.setTo(0.9);
            _this.tweenCarGroup.add(_this.tweenCar);

            j++;
            if (j >= 5) {
                k++;
                j = 0;
            }
        }

        console.log("Tween Function");
        //* add tween to temp group and tween it to work space.
        tempDragAction = _this.add.tween(_this.tweenCarGroup);
        tempDragAction.bringToTop = true;
        tempDragAction.from({ x: -50, y: 0 }, 1000, 'Quart', true, 0);
        tempDragAction.start();

        tempDragAction.onComplete.add(function () {
            console.log("Completed Tween Function");

            _this.tweenCarGroup.removeAll(true);
            _this.tweenCarGroup.x = 0;
            _this.tweenCarGroup.y = 0;
            _this.getCarsDisplayedX();
            _this.adjustBalanace();

        });
    },

    tweenCakeToScreen: function () {
        var j = 0;
        var k = 0;
        //* Tweening Cake to screen
        for (let i = 0; i < _this.leftValueXArray[_this.questionNumber]; i++) {
            // _this.tweenCake = _this.add.image(_this.floatingCakeX[j],_this.floatingCakeY[k], 'cake'); 
            _this.tweenCake = _this.add.image(_this.cakePostionXXY[j], _this.cakePostionYY[k], 'cake');
            //_this.tweenCake.scale.setTo(0.9);

            _this.tweenCakeGroup.add(_this.tweenCake);

            j++;
            if (j >= 6) {
                k++;
                j = 0;
            }

            console.log(_this.tweenCakeGroup.length);
        }

        tempDragAction = _this.add.tween(_this.tweenCakeGroup);
        tempDragAction.from({ x: -50, y: 0 }, 1000, 'Quart', true, 0);
        tempDragAction.start();

        tempDragAction.onComplete.add(function () {
            //_this.tweenCakeGroup.x = 0;
            //_this.tweenCakeGroup.y = 0;
            _this.getCakesDisplayedX();
            _this.adjustBalanace();
        });
    },

    tweenJarToScreen: function () {
        var j = 0;
        var k = 0;
        //* Tweening Jar to screen
        for (let i = 0; i < _this.leftValueXArray[_this.questionNumber]; i++) //_this.leftValueXArray[_this.questionNumber]
        {

            _this.tweenCake = _this.add.image(_this.jarPostionXXY[j], _this.jarPostionYY[k], 'cup');
            _this.tweenCake.scale.setTo(0.8);
            _this.tweenCarGroup.add(_this.tweenCake);

            j++;
            if (j == 7 || j == 13 || j == 18 || j == 22 || j == 25) {
                k++;
                //j=0;
            }

            console.log(_this.tweenCarGroup.length);
        }

        //* add tween to temp group and tween it to work space.
        tempDragAction = _this.add.tween(_this.tweenCarGroup);
        tempDragAction.from({ x: -50, y: 0 }, 1000, 'Quart', true, 0);
        tempDragAction.start();

        tempDragAction.onComplete.add(function () {
            _this.tweenCarGroup.removeAll(true);
            _this.tweenCarGroup.x = 0;
            _this.tweenCarGroup.y = 0;
            _this.getJarsDisplayedX();
            _this.adjustBalanace();

        });
    },

    tweenBottleToScreen: function () {
        var j = 0;
        var k = 0;
        //* Tweening Bottle to screen
        for (let i = 0; i < _this.leftValueXArray[_this.questionNumber]; i++) {
            _this.tweenCake = _this.add.image(_this.bootlePostionXX[j], _this.bottlePostionYY[k], 'greenBottle');
            //_this.tweenCake.scale.setTo(0.9);
            _this.tweenCarGroup.add(_this.tweenCake);

            j++;
            if (j >= 6) {
                k++;
                j = 0;
            }

            console.log(_this.tweenCarGroup.length);
        }

        //* add tween to temp group and tween it to work space.
        tempDragAction = _this.add.tween(_this.tweenCarGroup);
        tempDragAction.from({ x: -50, y: 0 }, 1000, 'Quart', true, 0);
        tempDragAction.start();

        tempDragAction.onComplete.add(function () {
            _this.tweenCarGroup.removeAll(true);
            _this.tweenCarGroup.x = 0;
            _this.tweenCarGroup.y = 0;
            _this.getBottlesDisplayedX();
            _this.adjustBalanace();

        });
    },

    animObjectatY: function () {
        //switch(_this.ObjectArray[_this.count1]) //_this.ObjectArray[_this.count1]
        switch (_this.ObjectArray[_this.count1]) {
            case 1: _this.tweenCarYToScreen();
                break;
            case 2: _this.tweenCakeYToScreen();
                break;
            case 3: _this.tweenJarYToScreen();
                break;
            case 4: _this.tweenBottleYToScreen();
                break;
        }
    },

    tweenCarYToScreen: function () {
        var j = 0;
        var k = 0;
        // _this.RedCarGroup = _this.add.group();
        //* Tweening Car to screen on the right side 
        for (let i = 0; i < _this.rightValueYArray[_this.questionNumber]; i++) {
            if (_this.questionNumber < 3) {
                //_this.tweenCake = _this.add.image(_this.floatingRedCarX[j],_this.floatingRedCarY[k], 'car');
                _this.tweenCar = _this.add.image(_this.carPostionXZ[j], _this.carPostionYZ[k], 'car');
            }
            else {
                _this.tweenCar = _this.add.image(_this.carPostionXZ[j], _this.carPostionYZ[k], 'orangecar');
            }
            _this.tweenCar.scale.setTo(0.9);
            //            _this.tweenYsideGroup.add(_this.tweenCake);
            _this.RedCarGroup.add(_this.tweenCar);

            j++;
            if (j >= 5) {
                k++;
                j = 0;
            }

            console.log(_this.tweenYsideGroup.length);
        }

        console.log("Tween Function Ridht side");

        //* add tween to temp group and tween it to work space.
        tempDragAction = _this.add.tween(_this.RedCarGroup);
        //tempDragAction.to({ x: -70, y :90}, 800, 'Linear', true, 0);
        tempDragAction.from({ x: 300, y: 0 }, 1000, 'Sine', true, 0);
        tempDragAction.start();

        tempDragAction.onComplete.add(function () {
            console.log("Completeed Tween Function Ridht side");

            _this.getCarsDisplayedY();

            if (_this.questionNumber < 3) {
                console.log("plus");
                // _this.basket = _this.add.image(750, 252, 'bigg box'); // Add box for Addition question
                // _this.basket.scale.setTo(1);
                _this.basket.visible = true;
                _this.basket.inputEnabled = true;
                _this.dragEnable();
                // _this.basket.inputEnabled = true;
                // _this.basket.input.useHandCursor = true;
                // _this.basket.events.onInputDown.add(_this.listner1, _this);

            }
            else {
                _this.basket1.visible = true;
                // _this.basket1 = _this.add.image(680, 330, 'box tray'); //  Add box for subtraction question

                // _this.basket1.scale.setTo(0.9);  
            }
        });

    },

    tweenCakeYToScreen: function () {
        var j = 0;
        var k = 0;
        // _this.RedCakeGroup = _this.add.group();
        //* Tweening Cake to screen on the right side 
        for (let i = 0; i < _this.rightValueYArray[_this.questionNumber]; i++) {
            if (_this.questionNumber < 3) {
                //_this.tweenCake = _this.add.image(_this.floatingRedCakeX[j],_this.floatingRedCakeY[k], 'cake');
                _this.tweenCake = _this.add.image(_this.cakePostionXZ[j], _this.cakePostionYZ[k], 'cake');
            }
            else {
                //_this.tweenCake = _this.add.image(_this.floatingRedCakeX[j], _this.floatingRedCakeY[k], 'orangecake');
                _this.tweenCake = _this.add.image(_this.cakePostionXZ[j], _this.cakePostionYZ[k], 'orangecake');
            }
            //_this.tweenCake.scale.setTo(0.9);
            //_this.tweenYsideGroup.add(_this.tweenCake);
            _this.RedCakeGroup.add(_this.tweenCake);

            j++;
            if (j >= 6) {
                k++;
                j = 0;
            }
        }

        //* add tween to temp group and tween it to work space.
        tempDragAction = _this.add.tween(_this.RedCakeGroup);
        tempDragAction.from({ x: 300, y: 0 }, 1000, 'Sine', true, 0);
        //tempDragAction.to({ x: -125, y :85}, 1000, 'Sine', true, 0);
        tempDragAction.start();

        tempDragAction.onComplete.add(function () {
            _this.getCakesDisplayedY();

            if (_this.questionNumber < 3) {
                console.log("plus");
                _this.basket.visible = true;
                _this.basket.inputEnabled = true;
                _this.dragEnable();
            }
            else {
                _this.basket1.visible = true;

            }
        });
    },

    tweenJarYToScreen: function () {
        var j = 0;
        var k = 0;
        // _this.RedJarGroup = _this.add.group();
        //* Tweening jar to screen on the right side 
        for (let i = 0; i < _this.rightValueYArray[_this.questionNumber]; i++) {
            if (_this.questionNumber < 3) {
                //_this.tweenCake = _this.add.image(_this.floatingRedJarX[j],_this.floatingRedJarY[k], 'cup');
                _this.tweenCup = _this.add.image(_this.jarPostionXZ[j], _this.jarPostionYZ[k], 'cup');
            }
            else {
                //_this.tweenCake = _this.add.image(_this.floatingRedJarX[j],_this.floatingRedJarY[k], 'orangejar');
                _this.tweenCup = _this.add.image(_this.jarPostionXZ[j], _this.jarPostionYZ[k], 'orangejar');
            }
            _this.tweenCup.scale.setTo(0.8);
            _this.RedJarGroup.add(_this.tweenCup);

            j++;
            if (j == 7 || j == 13 || j == 18 || j == 22 || j == 25) {
                k++;
                //j=0;
            }
        }

        //* add tween to temp group and tween it to work space.
        tempDragAction = _this.add.tween(_this.RedJarGroup);
        tempDragAction.from({ x: 300, y: 0 }, 1000, 'Sine', true, 0);
        tempDragAction.start();

        tempDragAction.onComplete.add(function () {
            //_this.tweenYsideGroup.removeAll(true);
            //_this.tweenYsideGroup.x = 0;
            //_this.tweenYsideGroup.y = 0;
            _this.getJarsDisplayedY();
            if (_this.questionNumber < 3) {
                console.log("plus");
                _this.basket.visible = true;
                _this.basket.inputEnabled = true;
                _this.dragEnable();
            }
            else {
                _this.basket1.visible = true;
            }
        });
    },

    tweenBottleYToScreen: function () {
        var j = 0;
        var k = 0;
        //_this.RedBottleGroup = _this.add.group();
        //* Tweening Bottle to screen on the right side 
        for (let i = 0; i < _this.rightValueYArray[_this.questionNumber]; i++) {
            if (_this.questionNumber < 3) {
                //_this.tweenBottle = _this.add.image(_this.floatingRedBottleX[j],_this.floatingRedBottleY[k], 'greenBottle');
                _this.tweenBottle = _this.add.image(_this.bottlePostionXZ[j], _this.bottlePostionYZ[k], 'greenBottle');
            }
            else {
                //_this.tweenBottle = _this.add.image(_this.floatingRedBottleX[j], _this.floatingRedBottleY[k], 'orangebottle');
                _this.tweenBottle = _this.add.image(_this.bottlePostionXZ[j], _this.bottlePostionYZ[k], 'orangebottle');
            }
            // _this.tweenCake.scale.setTo(0.9);
            //_this.tweenYsideGroup.add(_this.tweenBottle);
            _this.RedBottleGroup.add(_this.tweenBottle);

            j++;
            if (j >= 6) {
                k++;
                j = 0;
            }
        }

        //* add tween to temp group and tween it to work space.
        tempDragAction = _this.add.tween(_this.RedBottleGroup);
        tempDragAction.from({ x: 300, y: 0 }, 1000, 'Sine', true, 0);
        tempDragAction.start();

        tempDragAction.onComplete.add(function () {
            //_this.tweenYsideGroup.removeAll(true);
            //_this.tweenYsideGroup.x = 0;
            //_this.tweenYsideGroup.y = 0;
            _this.getBottlesDisplayedY();
            if (_this.questionNumber < 3) {
                console.log("plus");
                _this.basket.visible = true;
                _this.basket.inputEnabled = true;
                _this.dragEnable();

            }
            else {
                _this.basket1.visible = true;
            }
        });
    },

    getCarsDisplayedX: function () {
        //* Display the number of cars on the LHS of the equation (balance)
        var j = 0;
        var k = 0;
        for (let i = 0; i < _this.leftValueXArray[_this.questionNumber]; i++) {
            _this.ballObjY = _this.add.image(_this.carPostionXY[j], _this.carPostionYY[k], 'car'); //* carPostionX carPostionY are the separate array for car which stores car position
            _this.ballObjY.scale.setTo(0.9);
            _this.ballObjYArray.push(_this.ballObjY);
            //* _this.ballObjY add these objects to the left scale group

            _this.leftscaleGroup.add(_this.ballObjY);
            j++;
            if (j >= 5) {
                k++;
                j = 0;
            }
        }
    },

    getCakesDisplayedX: function () {
        //* Display the number of cakes on the LHS of the equation (balance)
        var j = 0;
        var k = 0;
        for (let i = 0; i < _this.leftValueXArray[_this.questionNumber]; i++) {
            _this.appleObjY = _this.tweenCakeGroup.getChildAt(i);
            //_this.cakePostionXXY[j], _this.cakePostionYY[k], 'cake'); //* cakePostionX cakePostionY are the separate array for cakes which stores cake position
            // _this.appleObjY.scale.setTo(0.3);
            _this.ballObjYArray.push(_this.appleObjY);

            //* _this.ballObjY add these objects to the left scale group
            j++;
            if (j >= 6) {
                k++;
                j = 0;
            }
        }
        _this.leftscaleGroup.add(_this.tweenCakeGroup);
    },

    getJarsDisplayedX: function () {
        //* Display the number of jars on the LHS of the equation (balance)
        var j = 0;
        var k = 0;
        for (let i = 0; i < _this.leftValueXArray[_this.questionNumber]; i++) //_this.leftValueXArray[_this.questionNumber]
        {
            _this.jarObjY = _this.add.image(_this.jarPostionXXY[j], _this.jarPostionYY[k], 'cup'); //* jarPostionX jarPostionY are the separate array for jars which stores jar position
            _this.ballObjYArray.push(_this.jarObjY);
            _this.jarObjY.scale.setTo(0.8);
            //* _this.ballObjY add these objects to the left scale group

            _this.leftscaleGroup.add(_this.jarObjY);
            j++;
            if (j == 7 || j == 13 || j == 18 || j == 22 || j == 25) {
                k++;
                //j=0;
            }
        }
    },

    getBottlesDisplayedX: function () {
        //* Display the number of bottles on the LHS of the equation (balance)
        var j = 0;
        var k = 0;
        for (let i = 0; i < _this.leftValueXArray[_this.questionNumber]; i++) {
            _this.bottleObjY = _this.add.image(_this.bootlePostionXX[j], _this.bottlePostionYY[k], 'greenBottle'); //* bootlePostionX bottlePostionY are the separate array for bottle which stores bottle position
            _this.ballObjYArray.push(_this.bottleObjY);
            //_this.bottleObjY.scale.setTo(0.9);
            //* _this.ballObjY add these objects to the left scale group

            _this.leftscaleGroup.add(_this.bottleObjY);
            j++;
            if (j >= 6) {
                k++;
                j = 0;
            }
        }
    },

    getCarsDisplayedY: function () {
        //_this.RedCarGroup = _this.add.group();
        _this.RedCarTrayGroup = _this.add.group();
        //* Display the number of cars on the RHS of the equation (balance)
        if (_this.questionNumber < 3)//_this.rightValueYArray[_this.questionNumber] < _this.leftValueXArray[_this.questionNumber]
        {
            var j = 0;
            var k = 0;
            for (let i = 0; i < _this.rightValueYArray[_this.questionNumber]; i++) {

                //                _this.ballObjZ = _this.add.image(_this.carPostionXZ[j], _this.carPostionYZ[k], 'car'); //* carPostionX carPostionY are the separate array for cars which stores cars position on RHS 
                //                _this.ballObjZ.scale.setTo(0.9);

                _this.ballObjZ = _this.RedCarGroup.getChildAt(i);
                _this.ballObjZArray.push(_this.ballObjZ);

                //* _this.ballObjZ add these objects to the right scale group
                //                _this.rightscaleGroup.addChild(_this.ballObjZ);
                j++;
                if (j >= 5) {
                    k++;
                    j = 0;
                }

            }
            _this.rightscaleGroup.add(_this.RedCarGroup);
            _this.nextCarXidx = j;
            _this.nextCarYidx = k;
        }
        else {
            var j = 0;
            var k = 0;
            for (let i = 0; i < _this.rightValueYArray[_this.questionNumber]; i++) {
                //                _this.ballObjZ = _this.add.image(_this.carPostionXZ[j], _this.carPostionYZ[k], 'orangecar');
                //                _this.ballObjZ.scale.setTo(0.9);

                _this.ballObjZ = _this.RedCarGroup.getChildAt(i);
                _this.ballObjZArray.push(_this.ballObjZ);

                //* _this.ballObjZ add these objects to the right scale group

                //_this.RedCarGroup.addChild(_this.ballObjZ);
                j++;
                if (j >= 5) {
                    k++;
                    j = 0;
                }

            }
            _this.tweeningFn();

            _this.rightscaleGroup.add(_this.RedCarGroup);
            _this.nextRedcarXidx = j;
            _this.nextRedcarYidx = k;

        }
    },

    getCakesDisplayedY: function () {
        //_this.RedCakeGroup = _this.add.group();
        _this.RedCakeTrayGroup = _this.add.group();
        //* Display the number of cackes same as in the equation 
        if (_this.questionNumber < 3) {
            var j = 0;
            var k = 0;
            for (let i = 0; i < _this.rightValueYArray[_this.questionNumber]; i++) {
                //_this.appleObjZ = _this.add.image(_this.cakePostionXZ[j], _this.cakePostionYZ[k], 'cake'); //* cakePostionX cakePostionY are the separate array for cakes which stores cake position On RHS
                //_this.appleObjZ.scale.setTo(0.3);

                _this.appleObjZ = _this.RedCakeGroup.getChildAt(i);
                _this.ballObjZArray.push(_this.appleObjZ);
                //* _this.ballObjZ add these objects to the right scale group

                //_this.rightscaleGroup.add(_this.appleObjZ);

                j++;
                if (j >= 6) {
                    k++;
                    j = 0;
                }
            }

            _this.rightscaleGroup.add(_this.RedCakeGroup);
            _this.nextCakeXidx = j;
            _this.nextCakeYidx = k;
        }
        else {
            var j = 0;
            var k = 0;
            for (let i = 0; i < _this.rightValueYArray[_this.questionNumber]; i++) {

                //_this.appleObjZ = _this.add.image(_this.cakePostionXZ[j], _this.cakePostionYZ[k], 'orangecake');
                _this.appleObjZ = _this.RedCakeGroup.getChildAt(i);
                //                _this.appleObjZ.x = _this.cakePostionXZ[j];
                //                _this.appleObjZ.y = _this.cakePostionYZ[k];
                //_this.appleObjZ.scale.setTo(0.3);
                _this.ballObjZArray.push(_this.appleObjZ);
                //* _this.ballObjZ add these objects to the right scale group

                //_this.rightscaleGroup.add(_this.appleObjZ);
                //_this.RedCakeGroup.addChild(_this.appleObjZ);
                j++;
                if (j >= 6) {
                    k++;
                    j = 0;
                }

            }
            _this.tweeningFnCake();
            _this.rightscaleGroup.add(_this.RedCakeGroup);
            _this.nextRedcakeXidx = j;
            _this.nextRedcakeYidx = k;
        }
    },

    getJarsDisplayedY: function () {
        //_this.RedJarGroup = _this.add.group();
        _this.RedJarTrayGroup = _this.add.group();
        //* Display the number of jars same as in the equation 
        if (_this.questionNumber < 3) {
            var j = 0;
            var k = 0;
            for (let i = 0; i < _this.rightValueYArray[_this.questionNumber]; i++) // _this.rightValueYArray[_this.questionNumber]
            {
                //_this.carrotObjZ = _this.add.image(_this.jarPostionXZ[j], _this.jarPostionYZ[k], 'cup'); //* jarPostionX jarPostionY are the separate array for jar which stores jar position on RHS

                _this.jarsObjZ = _this.RedJarGroup.getChildAt(i);
                _this.ballObjZArray.push(_this.jarsObjZ);
                //_this.carrotObjZ.scale.setTo(0.8);
                //* _this.ballObjZ add these objects to the right scale group

                //_this.rightscaleGroup.add(_this.carrotObjZ);
                j++;
                if (j == 7 || j == 13 || j == 18 || j == 22 || j == 25) {
                    k++;
                    //j=0;
                }
            }
            _this.rightscaleGroup.add(_this.RedJarGroup);
            _this.nextJarXidx = j;
            _this.nextJarYidx = k;
        }
        else {
            var j = 0;
            var k = 0;
            for (let i = 0; i < _this.rightValueYArray[_this.questionNumber]; i++) // _this.rightValueYArray[_this.questionNumber]
            {
                //_this.carrotObjZ = _this.add.image(_this.jarPostionXZ[j], _this.jarPostionYZ[k], 'orangejar');
                _this.jarsObjZ = _this.RedJarGroup.getChildAt(i);
                _this.ballObjZArray.push(_this.jarsObjZ);
                j++;
                if (j == 7 || j == 13 || j == 18 || j == 22 || j == 25) {
                    k++;
                    //j=0;
                }

            }

            _this.tweeningFnJar();
            _this.rightscaleGroup.add(_this.RedJarGroup);
            _this.nextRedJarXidx = j;
            _this.nextRedJarYidx = k;
        }
    },

    getBottlesDisplayedY: function () {
        //_this.RedBottleGroup = _this.add.group();
        _this.RedBottleTrayGroup = _this.add.group();
        //* Display the number of jars same as in the equation 
        if (_this.questionNumber < 3) {
            var j = 0;
            var k = 0
            for (let i = 0; i < _this.rightValueYArray[_this.questionNumber]; i++) {
                //_this.bottleObjY = _this.add.image(_this.bottlePostionXZ[j], _this.bottlePostionYZ[k], 'greenBottle'); //* bottlepostionX bottlePostionY are the separate array for bottle which stores bottle position on RHS
                _this.bottleObjY = _this.RedBottleGroup.getChildAt(i);
                _this.ballObjZArray.push(_this.bottleObjY);

                j++
                if (j >= 6) {
                    k++;
                    j = 0;
                }
            }
            _this.rightscaleGroup.add(_this.RedBottleGroup);
            _this.nextBottleXidx = j;
            _this.nextBottleYidx = k;
        }
        else {
            var j = 0;
            var k = 0
            for (let i = 0; i < _this.rightValueYArray[_this.questionNumber]; i++) {
                //_this.bottleObjY = _this.add.image(_this.bottlePostionXZ[j], _this.bottlePostionYZ[k], 'orangebottle');
                _this.bottleObjY = _this.RedBottleGroup.getChildAt(i);
                _this.ballObjZArray.push(_this.bottleObjY);
                j++;
                if (j >= 6) {
                    k++;
                    j = 0;
                }

            }
            _this.tweeningFnBottle();
            _this.rightscaleGroup.add(_this.RedBottleGroup);
            _this.nextRedBottleXidx = j;
            _this.nextRedBottleYidx = k;
        }
    },

    getBallFilled: function () {
        //* Balls to be filled by the player by dragging 
        //* Adjust the balance position based on the LATEST net weight  
        //* Adjust the position of the objects based on the new balance position  
        _this.ballObjX = _this.add.sprite(_this.carPostionXX[_this.objectCounter], _this.carPostionYX[_this.objectCounter], 'orangecar'); //* ballPostionXX ballPostionYX are the separate array for balls which stores balls position of X (RHS)
        _this.ballObjX.scale.setTo(0.5);
        _this.ballObjXArray.push(_this.ballObjX);
        //* _this.ballObjZ add these objects to the right scale group
        _this.rightscaleGroup.add(_this.ballObjX);

        _this.adjustBalanace();
    },

    getAppleFilled: function () {
        //* Applles to be filled by the player by dragging
        //* Adjust the balance position based on the LATEST net weight  
        //* Adjust the position of the objects based on the new balance position
        _this.appleObjX = _this.add.sprite(_this.cakePostionXX[_this.objectCounter], _this.cakePostionXY[_this.objectCounter], 'orangecake'); //* cakePostionXX cakePostionYX are the separate array for cake which stores cake position of X(RHS)
        _this.appleObjX.scale.setTo(0.3);
        _this.ballObjXArray.push(_this.appleObjX);
        _this.rightscaleGroup.add(_this.appleObjX);
        _this.adjustBalanace();
    },

    getCarrotFilled: function () {
        //* Carrots  to be fillled by the plyer by dragging 
        //* Adjust the balance position based on the LATEST net weight  
        //* Adjust the position of the objects based on the new balance position
        _this.carrotObjX = _this.add.sprite(_this.jarPostionXX[_this.objectCounter], _this.jarPostionXY[_this.objectCounter], 'orangejar'); //* carrotPostionXX carrotPostionYX are the separate array for carrots which stores carrots position of X(RHS)
        _this.carrotObjX.scale.setTo(0.5);
        _this.ballObjXArray.push(_this.carrotObjX);
        _this.rightscaleGroup.add(_this.carrotObjX);
        _this.adjustBalanace();
    },

    getBottleFilled: function () {
        //* Carrots  to be fillled by the plyer by dragging 
        //* Adjust the balance position based on the LATEST net weight  
        //* Adjust the position of the objects based on the new balance position
        _this.bottleObjX = _this.add.sprite(_this.jarPostionXX[_this.objectCounter], _this.jarPostionXY[_this.objectCounter], 'orangebottle'); //* carrotPostionXX carrotPostionYX are the separate array for carrots which stores carrots position of X(RHS)
        _this.bottleObjX.scale.setTo(0.5);
        _this.ballObjXArray.push(_this.bottleObjX);
        _this.rightscaleGroup.add(_this.bottleObjX);
        _this.adjustBalanace();
    },

    dragEnable: function () {

        console.log("Inside Dragenable");
        //* Make the Basket as clickable and Add an event when the Basket is clicked.
        // _this.group1 = _this.add.group();
        _this.basket.inputEnabled = true;
        _this.basket.input.useHandCursor = true;
        _this.basket.events.onInputDown.add(_this.listner1, _this);

    },
    //* Tweens in Addition
    listner1: function () {
        //* Make each object move to the balance from the box.
        //* tween only if already a tween is not in progress

        if (_this.tweenInProgress == false) {
            //* set the flag to prevent starting another tween by clicking fast on the box
            //* this flag has to be reset once the tween is complete (in on-complete function)

            if (_this.rightValueYArray[_this.questionNumber] + _this.objectCounter < 25) {
                _this.tweenInProgress = true;
                _this.objectCounter += 1;
                console.log("inside the listner function" + _this.ObjectArray[_this.count1]);
                switch (_this.ObjectArray[_this.count1]) //_this.ObjectArray[_this.count1]
                {
                    case 1: _this.Tweencar();

                        break;
                    case 2: _this.Tweencake();
                        //_this.snapSound.play();
                        break;
                    case 3: _this.Tweenjar();
                        // _this.bellSound.play();
                        break;
                    case 4: _this.Tweenbottle();
                    //_this.bottleSound.play();
                }
                if (_this.objectCounter == _this.rightValueZArray[_this.questionNumber]) {
                    _this.displayTickmark();
                }
            }
            else {
                _this.wrongSound.play();
            }
        }

    },

    carToBox: function () {
        //* Tween the car to box from the balance
        console.log("Car To The Box");
        // for(k=0;k<_this.additionRedGroup.length;k++)
        // {
        _this.additionRedGroup.getChildAt(_this.additionRedGroup.length - 1).inputEnabled = true;
        _this.additionRedGroup.getChildAt(_this.additionRedGroup.length - 1).events.onInputDown.add(_this.backToBox, _this); //function ()
        //}

    },

    backToBox: function () {
        //* Tween the car to box from the balance 
        //* tween only if currently a tween is not in progress 

        if (_this.tweenInProgress == false) {
            _this.tweenInProgress = true;
            _this.cuurentElement = _this.additionRedGroup.getChildAt(_this.additionRedGroup.length - 1);
            _this.tweenMe = _this.add.tween(_this.additionRedGroup.getChildAt(_this.additionRedGroup.length - 1));
            _this.tweenMe.to({ x: 800, y: 240 }, 500, 'Linear', true, 0);
            _this.tweenMe.start();

            // _this.snapSound.play();
            _this.adjustBalanaceback();

            _this.tweenMe.onComplete.add(function () {
                _this.snapSound.play();
                console.log(_this.additionRedGroup.length);
                _this.additionRedGroup.removeChild(_this.cuurentElement);
                _this.cuurentElement.events.onInputDown.removeAll();

                _this.nextCarXidx--;
                if (_this.nextCarXidx < 0) {
                    _this.nextCarYidx--;
                    _this.nextCarXidx = 4;
                }

                _this.tweenInProgress = false;
            });
        }

    },

    cakeToBox: function () {
        //* Tween the cake to box from the balance
        console.log("movingdown");
        for (k = 0; k < _this.additionRedGroup.length; k++) {
            _this.additionRedGroup.getChildAt(k).inputEnabled = true;

            _this.additionRedGroup.getChildAt(k).events.onInputDown.add(_this.backToBoxCake, _this); //function ()
        }
        console.log(_this.additionRedGroup.length);
    },

    backToBoxCake: function () {
        //* Tween the cake to box from the balance

        //* tween only if already a tween is not in progress currently
        if (_this.tweenInProgress == false) {
            _this.tweenInProgress = true;
            _this.cuurentElement = _this.additionRedCakeGroup.getChildAt(_this.additionRedCakeGroup.length - 1);
            // _this.additionRedGroup.getChildAt(_this.additionRedGroup.length - 1)
            _this.tweenMe = _this.add.tween(_this.additionRedCakeGroup.getChildAt(_this.additionRedCakeGroup.length - 1));
            _this.tweenMe.to({ x: 800, y: 240 }, 500, 'Linear', true, 0);
            _this.tweenMe.start();
            //_this.additionRedGroup.removeChildAt(_this.additionRedGroup.length - 1);
            // _this.snapSound.play();
            _this.adjustBalanaceback();

            _this.tweenMe.onComplete.add(function () {
                _this.snapSound.play();
                console.log(_this.additionRedCakeGroup.length);
                _this.additionRedCakeGroup.removeChild(_this.cuurentElement);
                _this.cuurentElement.events.onInputDown.removeAll();

                _this.nextCakeXidx--;
                if (_this.nextCakeXidx < 0) {
                    _this.nextCakeYidx--;
                    _this.nextCakeXidx = 5;
                }

                _this.tweenInProgress = false;

            });
        }

    },

    bottleToBox: function () {
        //* Tween the Bottle to box from the balance
        console.log("movingdown");
        for (k = 0; k < _this.additionRedGroup.length; k++) {
            _this.additionRedGroup.getChildAt(k).inputEnabled = true;

            _this.additionRedGroup.getChildAt(k).events.onInputDown.add(_this.backToBoxBottle, _this); //function ()
        }
        console.log(_this.additionRedGroup.length);
    },

    backToBoxBottle: function () {
        //* Tween the Bottle to box from the balance
        //* tween only if currently a tween is not in progress 

        if (_this.tweenInProgress == false) {
            _this.tweenInProgress = true;
            console.log("BOX TO CAKE");
            _this.cuurentElement = _this.additionRedGroup.getChildAt(_this.additionRedGroup.length - 1);
            _this.tweenMe = _this.add.tween(_this.additionRedGroup.getChildAt(_this.additionRedGroup.length - 1));
            _this.tweenMe.to({ x: 800, y: 240 }, 500, 'Linear', true, 0);
            _this.tweenMe.start();
            //_this.additionRedGroup.removeChildAt(_this.additionRedGroup.length - 1);
            _this.adjustBalanaceback();
            //_this.bottleSound.play();

            _this.tweenMe.onComplete.add(function () {
                _this.bottleSound.play();
                console.log(_this.additionRedGroup.length);
                _this.additionRedGroup.removeChild(_this.cuurentElement);
                _this.cuurentElement.events.onInputDown.removeAll();

                _this.nextBottleXidx--;
                if (_this.nextBottleXidx < 0) {
                    _this.nextBottleYidx--;
                    _this.nextBottleXidx = 5;
                }

                _this.tweenInProgress = false;
            });
        }

    },

    jarToBox: function () {
        //* Tween the Jar to box from the balance
        console.log("movingdown");
        for (k = 0; k < _this.additionRedGroup.length; k++) {
            _this.additionRedGroup.getChildAt(k).inputEnabled = true;

            _this.additionRedGroup.getChildAt(k).events.onInputDown.add(_this.backToBoxJar, _this); //function ()
        }
        console.log(_this.additionRedGroup.length);
    },

    backToBoxJar: function () {
        //* Tween the jar to box from the balance
        //* tween only if currently a tween is not in progress 

        if (_this.tweenInProgress == false) {
            _this.tweenInProgress = true;

            _this.cuurentElement = _this.additionRedGroup.getChildAt(_this.additionRedGroup.length - 1);
            // _this.additionRedGroup.getChildAt(_this.additionRedGroup.length - 1)
            _this.tweenMe = _this.add.tween(_this.additionRedGroup.getChildAt(_this.additionRedGroup.length - 1));
            _this.tweenMe.to({ x: 800, y: 240 }, 500, 'Linear', true, 0);
            _this.tweenMe.start();
            //_this.additionRedGroup.removeChildAt(_this.additionRedGroup.length - 1);
            _this.adjustBalanaceback();
            // _this.bellSound.play(); 

            _this.tweenMe.onComplete.add(function () {
                _this.bellSound.play();
                console.log(_this.additionRedGroup.length);
                _this.additionRedGroup.removeChild(_this.cuurentElement);
                _this.cuurentElement.events.onInputDown.removeAll();

                _this.nextJarXidx--;
                if (_this.nextJarXidx == 6 || _this.nextJarXidx == 12 || _this.nextJarXidx == 17 || _this.nextJarXidx == 21 || _this.nextJarXidx == 24) {
                    _this.nextJarYidx--;
                }

                _this.tweenInProgress = false;
            });
        }

    },

    Tweencar: function () {
        //* Tween the car to balance from the Box

        _this.basket.inputEnabled = false;

        _this.cars = _this.add.image(800, 250, 'orangecar');
        _this.cars.scale.setTo(0.9);
        //        if(_this.additionRedGroup.length >= 1)
        //        {
        //            _this.additionRedGroup.getChildAt(_this.additionRedGroup.length -1).inputEnabled = false; 
        //        }
        _this.additionRedGroup.addChild(_this.cars);
        console.log(_this.additionRedGroup.length);


        _this.time.events.add(500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.cars);
            tempDragAction.to({ x: _this.carPostionXZ[_this.nextCarXidx], y: _this.carPostionYZ[_this.nextCarYidx] }, 200, 'Linear', true, 0);
            tempDragAction.start();
            tempDragAction.bringToTop = true;
            _this.rightscaleGroup.add(_this.additionRedGroup);

            tempDragAction.onComplete.add(function () {
                _this.snapSound.play();
                _this.adjustBalanace();
                _this.snapSound.play();
                _this.basket.inputEnabled = true;
                _this.cars.inputEnabled = true;
                _this.cars.input.useHandCursor = true;
                _this.cars.events.onInputDown.add(_this.backToBox, _this);
                // _this.rightscaleGroup.addChild(_this.car);
                //*attach adjust bal here 

                _this.nextCarXidx++;
                if (_this.nextCarXidx >= 5) {
                    _this.nextCarYidx++;
                    _this.nextCarXidx = 0;
                }

                //* reset the flag to allow another tween
                _this.tweenInProgress = false;
            });

        });

    },

    Tweencake: function () {
        //* Tween the cake to balance from the Box

        _this.basket.inputEnabled = false;
        _this.cake = _this.add.image(800, 240, 'orangecake');
        _this.cake.scale.setTo(1.0);
        //        if(_this.additionRedGroup.length >= 1)
        //        {
        //            _this.additionRedGroup.getChildAt(_this.additionRedGroup.length -1).inputEnabled = false; 
        //        } 
        _this.additionRedCakeGroup.addChild(_this.cake);
        _this.additionRedGroup.bringToTop(_this.cake);
        console.log(_this.additionRedGroup.length);

        _this.time.events.add(500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.cake);
            tempDragAction.to({ x: _this.cakePostionXZ[_this.nextCakeXidx], y: _this.cakePostionYZ[_this.nextCakeYidx] }, 200, 'Sine', true, 0);
            tempDragAction.start();

            tempDragAction.bringToTop = true;
            _this.rightscaleGroup.add(_this.additionRedCakeGroup);
            tempDragAction.onComplete.add(function () {
                _this.snapSound.play();
                _this.adjustBalanace();
                //_this.cakeToBox();
                _this.cake.inputEnabled = true;
                _this.cake.input.useHandCursor = true;
                _this.cake.events.onInputDown.add(_this.backToBoxCake, _this);
                _this.basket.inputEnabled = true;
                //*attach adjust bal here   
                _this.nextCakeXidx++;
                if (_this.nextCakeXidx >= 6) {
                    _this.nextCakeYidx++;
                    _this.nextCakeXidx = 0;
                }

                //* reset the flag to allow another tween
                _this.tweenInProgress = false;
            });

        });

    },

    Tweenjar: function () {
        //* Tween the jar to balance from the Box
        _this.basket.inputEnabled = false;
        _this.jar = _this.add.image(800, 250, 'orangejar');
        _this.jar.scale.setTo(0.8);

        //        if(_this.additionRedGroup.length >= 1)
        //        {
        //            _this.additionRedGroup.getChildAt(_this.additionRedGroup.length -1).inputEnabled = false; 
        //        }
        _this.additionRedGroup.addChild(_this.jar);
        console.log(_this.additionRedGroup.length);

        _this.time.events.add(500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.jar);
            tempDragAction.to({ x: _this.jarPostionXZ[_this.nextJarXidx], y: _this.jarPostionYZ[_this.nextJarYidx] }, 200, 'Linear', true, 0);
            tempDragAction.start();
            tempDragAction.bringToTop = true;
            _this.rightscaleGroup.add(_this.additionRedGroup);
            tempDragAction.onComplete.add(function () {
                _this.bellSound.play();
                _this.adjustBalanace();
                _this.jar.inputEnabled = true;
                _this.jar.input.useHandCursor = true;
                _this.jar.events.onInputDown.add(_this.backToBoxJar, _this);
                _this.basket.inputEnabled = true;
                // _this.backToBox();

                _this.nextJarXidx++;
                if (_this.nextJarXidx == 7 || _this.nextJarXidx == 13 || _this.nextJarXidx == 18 || _this.nextJarXidx == 22 || _this.nextJarXidx == 25) {
                    _this.nextJarYidx++;
                    //_this.nextJarXidx = 0;
                }//*attach adjust bal here

                //* reset the flag to allow next tweens
                _this.tweenInProgress = false;
            });
        });
    },

    Tweenbottle: function () {
        //* Tween the Bottle to balance from the Box
        _this.basket.inputEnabled = false;
        _this.bottle = _this.add.image(800, 240, 'orangebottle');
        //_this.bottle.scale.setTo(0.8);       
        //        if(_this.additionRedGroup.length >= 1)
        //        {
        //            _this.additionRedGroup.getChildAt(_this.additionRedGroup.length -1).inputEnabled = false; 
        //        }
        _this.additionRedGroup.addChild(_this.bottle);
        console.log(_this.additionRedGroup.length);

        _this.time.events.add(500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.bottle);
            tempDragAction.to({ x: _this.bottlePostionXZ[_this.nextBottleXidx], y: _this.bottlePostionYZ[_this.nextBottleYidx] }, 200, 'Linear', true, 0);
            tempDragAction.start();
            _this.rightscaleGroup.add(_this.additionRedGroup);
            tempDragAction.onComplete.add(function () {
                _this.bottleSound.play();
                _this.adjustBalanace();
                _this.bottle.inputEnabled = true;
                _this.bottle.input.useHandCursor = true;
                _this.bottle.events.onInputDown.add(_this.backToBoxBottle, _this);
                _this.basket.inputEnabled = true;

                _this.nextBottleXidx++;
                if (_this.nextBottleXidx >= 6) {
                    _this.nextBottleYidx++;
                    _this.nextBottleXidx = 0;
                }

                //* reset the flag to allow next tweens
                _this.tweenInProgress = false;
            });

        });

    },

    adjustBalanace: function () {
        //* Based on the net weight we will find Y ( vertical displacement of the left balance) and Angle (beam of the balance)
        //* Maximum displacement is 11 digrees & 30 Y value 
        //* Y = X * 1.5 where X is the net.w. 1.5 is the per object displacement 
        //* angle = X * 0.55. 0.55 is the per objrct angle 

        console.log("++++++ adjustBalance Function");

        _this.prevnetWeight = _this.netWeight; //* save the previous net weight.
        _this.netWeight = _this.leftValueXArray[_this.questionNumber] - (_this.rightValueYArray[_this.questionNumber] + _this.objectCounter);

        _this.diffnetWeight = _this.netWeight - _this.prevnetWeight;

        adjustBalanceTweenL = _this.add.tween(_this.leftscaleGroup);
        adjustBalanceTweenR = _this.add.tween(_this.rightscaleGroup);
        adjustBarTween = _this.add.tween(weightScale2); //*the middle beam of balance.

        // _this.leftScaleY  = _this.leftscaleGroup.y  + 1.5 * _this.diffnetWeight;
        // _this.rightScaleY = _this.rightscaleGroup.y - 1.5 * _this.diffnetWeight;
        // _this.barAngleY   = weightScale2.angle - 0.55 * _this.diffnetWeight;

        // console.log("+++++++++++++++++++++++" + _this.barAngleY + " " + weightScale2.angle);

        // adjustBalanceTweenL.to({ x: 0, y: _this.leftScaleY  }, 600, 'Sine', true, 0);
        // adjustBalanceTweenR.to({ x: 0, y: _this.rightScaleY }, 600, 'Sine', true, 0);
        // adjustBarTween.to     ({ angle: _this.barAngleY }, 600, 'Sine', true, 0);

        // adjustBalanceTweenL.start();
        // adjustBalanceTweenR.start();
        if (_this.firstTween == false) {
            _this.leftScaleY = _this.leftscaleGroup.y + 1.5 * _this.diffnetWeight;
            _this.rightScaleY = _this.rightscaleGroup.y - 1.5 * _this.diffnetWeight;
            _this.barAngleY = weightScale2.angle - 0.55 * _this.diffnetWeight;

            console.log("+++++++++++++++++++++++" + _this.barAngleY + " " + weightScale2.angle);

            adjustBalanceTweenL.to({ x: 0, y: _this.leftScaleY }, 600, 'Sine', true, 0);
            adjustBalanceTweenR.to({ x: 0, y: _this.rightScaleY }, 600, 'Sine', true, 0);
            adjustBarTween.to({ angle: _this.barAngleY }, 600, 'Sine', true, 0);

            adjustBalanceTweenL.start();
            adjustBalanceTweenR.start();
            _this.firstTween = true;
        } else {

            weightScale2.angle -= 0.55 * _this.diffnetWeight;
            _this.rightscaleGroup.y -= 1.5 * _this.diffnetWeight;
            _this.leftscaleGroup.y += 1.5 * _this.diffnetWeight;
        }
        //weightScale2.angle -= 0.55 * _this.diffnetWeight;

        if (_this.objectCounter == _this.rightValueZArray[_this.questionNumber]) {
            console.log("inside if ");
            //* play a clung sound
            _this.time.events.add(100, function () {
                // _this.clungSound = _this.add.audio('ClungSound');
                _this.clungSound.play();
            }, this);
        }
    },

    // adjustBalanace: function () {
    //     //* Based on the net weight we will find Y ( vertical displacement of the left balance) and Angle (beam of the balance)
    //     //* Maximum displacement is 11 digrees & 30 Y value 
    //     //* Y = X * 1.5 where X is the net.w. 1.5 is the per object displacement 
    //     //* angle = X * 0.55. 0.55 is the per objrct angle 

    //     console.log("++++++ adjustBalance Function");

    //     _this.prevnetWeight = _this.netWeight; //* save the previous net weight.
    //     _this.netWeight = _this.leftValueXArray[_this.questionNumber] - (_this.rightValueYArray[_this.questionNumber] + _this.objectCounter);

    //     _this.diffnetWeight = _this.netWeight - _this.prevnetWeight;

    //     adjustBalanceTweenL = _this.add.tween(_this.leftscaleGroup);
    //     adjustBalanceTweenR = _this.add.tween(_this.rightscaleGroup);
    //     adjustBarTween = _this.add.tween(weightScale2); //*the middle beam of balance.

    //     _this.leftScaleY = _this.leftscaleGroup.y + 1.5 * _this.diffnetWeight;
    //     _this.rightScaleY = _this.rightscaleGroup.y - 1.5 * _this.diffnetWeight;
    //     _this.barAngleY = weightScale2.angle - 0.55 * _this.diffnetWeight;

    //     console.log("+++++++++++++++++++++++" + _this.barAngleY + " " + weightScale2.angle);

    //     adjustBalanceTweenL.to({ x: 0, y: _this.leftScaleY }, 600, 'Sine', true, 0);
    //     adjustBalanceTweenR.to({ x: 0, y: _this.rightScaleY }, 600, 'Sine', true, 0);
    //     adjustBarTween.to({ angle: _this.barAngleY }, 600, 'Sine', true, 0);

    //     adjustBalanceTweenL.start();
    //     adjustBalanceTweenR.start();

    //     //weightScale2.angle -= 0.55 * _this.diffnetWeight;

    //     if (_this.objectCounter == _this.rightValueZArray[_this.questionNumber]) {
    //         console.log("inside if ");
    //         //* play a clung sound
    //         _this.time.events.add(100, function () {
    //             // _this.clungSound = _this.add.audio('ClungSound');
    //             _this.clungSound.play();
    //         }, this);
    //     }
    // },

    adjustBalanaceback: function () {

        console.log("+++++++ adjustBalanaceback Function");
        //* When you remove objects from the balance in addition case
        _this.objectCounter -= 1;
        _this.prevnetWeight = _this.netWeight;
        _this.netWeight = _this.leftValueXArray[_this.questionNumber] - (_this.rightValueYArray[_this.questionNumber] + _this.objectCounter);

        _this.diffnetWeight = _this.netWeight - _this.prevnetWeight;
        weightScale2.angle -= 0.55 * _this.diffnetWeight;
        _this.leftscaleGroup.y += 1.5 * _this.diffnetWeight;
        _this.rightscaleGroup.y -= 1.5 * _this.diffnetWeight;

        if (_this.objectCounter == _this.rightValueZArray[_this.questionNumber]) {
            console.log("inside if ");
            //* play a clung sound
            _this.time.events.add(100, function () {
                //_this.clungSound = _this.add.audio('ClungSound');
                _this.clungSound.play();
            }, this);
        }
    },

    //* Tweening for Subtraction Questions
    tweeningFn: function () {
        //*This contains the function to move the car down   
        console.log("movetotryacalling");
        _this.movingCarDown();

    },

    movingCarDown: function () {
        //*Add _this.TweeingCarToTray to the element of the RedCarGroup
        _this.nextTrayCarIdxX = 0;
        _this.nextTrayCarIdxY = 0;

        console.log(_this.nextTrayCarIdxX);
        console.log(_this.nextTrayCarIdxY);

        console.log("movingdown");
        for (k = 0; k < _this.RedCarGroup.length; k++) {
            //            _this.RedCarGroup.getChildAt(_this.RedCarGroup.length - 1).inputEnabled = true;
            //            _this.RedCarGroup.getChildAt(_this.RedCarGroup.length - 1).input.useHandCursor = true;
            //            _this.RedCarGroup.getChildAt(_this.RedCarGroup.length - 1).events.onInputDown.add(_this.TweeingCarToTray,_this);
            _this.RedCarGroup.getChildAt(k).inputEnabled = true;
            _this.RedCarGroup.getChildAt(k).input.useHandCursor = true;
            _this.RedCarGroup.getChildAt(k).events.onInputDown.add(_this.TweeingCarToTray, _this);

        }
    },

    TweeingCarToTray: function (target) {
        //* Tween the car to tray from the balance and add it to the RedCarTrayGroup
        //* Restrict the moving of object to the tray till 16
        //* Adjust the balance 
        console.log("movingdown1");
        // console.log(i);
        if (_this.objectCounter < 16 && _this.tweenInProgress == false) {
            //* set the flag to disable next tween till this completes

            _this.tweenInProgress = true;
            console.log(_this.objectCounter);
            _this.curentChild_car = _this.RedCarGroup.getChildAt(_this.RedCarGroup.length - 1);
            _this.moveTotray = _this.add.tween(_this.RedCarGroup.getChildAt(_this.RedCarGroup.length - 1));
            _this.moveTotray.to({ x: _this.carOnTrayX[_this.nextTrayCarIdxX], y: _this.carOnTrayY[_this.nextTrayCarIdxY] }, 500, 'Linear', true, 0);
            _this.moveTotray.start();

            console.log(_this.nextTrayCarIdxX, _this.nextTrayCarIdxY);
            //console.log(_this.nextTrayCarIdxY);
            // _this.snapSound.play();
            _this.adjustBalanaceSub();


            console.log(_this.nextRedcarXidx);
            console.log(_this.nextRedcarYidx)

            _this.curentChild_car.events.onInputDown.removeAll();
            _this.moveTotray.onComplete.add(function () {
                _this.snapSound.play();
                console.log(_this.RedCarGroup.length);
                _this.RedCarGroup.removeChild(_this.curentChild_car);

                _this.nextRedcarXidx--;
                if (_this.nextRedcarXidx < 0) {
                    _this.nextRedcarYidx--;
                    _this.nextRedcarXidx = 4;
                }

                _this.RedCarTrayGroup.addChild(_this.curentChild_car);

                _this.curentChild_car.inputEnabled = true;
                _this.curentChild_car.input.useHandCursor = true;
                _this.curentChild_car.events.onInputDown.add(_this.tweeningUP, _this);

                console.log(_this.RedCarGroup.length, _this.RedCarTrayGroup.length,);


                //                 _this.RedCarTrayGroup.getChildAt(_this.RedCarTrayGroup.length).inputEnabled = true;
                //                 _this.RedCarTrayGroup.getChildAt(_this.RedCarTrayGroup.length).events.onInputDown.add(_this.tweeningUP,_this);

                _this.nextTrayCarIdxX++;
                if (_this.nextTrayCarIdxX >= 4) {
                    _this.nextTrayCarIdxY++;
                    _this.nextTrayCarIdxX = 0;
                }
                console.log(_this.nextTrayCarIdxX, _this.nextTrayCarIdxY);

                //* now that tween completes, reset the flag to enable next tween
                _this.tweenInProgress = false;
            });

        }
        else {
            if (_this.RedCarTrayGroup.length >= 16) {
                console.log("You cant drag more ERRRor Sound")
                _this.wrongSound.play();
            }

        }
        //if(_this.RedCarTrayGroup.length > 16)
    },

    movingUp: function () {
        //*Tween the car to balance from the tray add tweeningUP function to element of the RedCarTrayGroup

        for (i = 0; i < _this.RedCarTrayGroup.length; i++) {
            //            _this.RedCarTrayGroup.getChildAt(_this.RedCarTrayGroup.length -1).inputEnabled = true;
            //            _this.RedCarTrayGroup.getChildAt(_this.RedCarTrayGroup.length -1).events.onInputDown.add(_this.tweeningUP,_this);
            _this.RedCarTrayGroup.getChildAt(i).inputEnabled = true;
            _this.RedCarTrayGroup.getChildAt(i).input.useHandCursor = true;
            _this.RedCarTrayGroup.getChildAt(i).events.onInputDown.add(_this.tweeningUP, _this);
        }

    },

    tweeningUP: function (target) {
        //* when user clicks on the object on the tray make them movre to the balance.
        //* Restrict the moving of object to the tray till 16
        //* Adjust the balance 
        //* tween only if a tween is not in progress currently. No action taken if tween happening.

        if (_this.tweenInProgress == false) {
            //* set the flag to prevent another tween while this is in progress
            _this.tweenInProgress = true;

            _this.curentChild_Tray = _this.RedCarTrayGroup.getChildAt(_this.RedCarTrayGroup.length - 1);
            _this.moveUp = _this.add.tween(_this.RedCarTrayGroup.getChildAt(_this.RedCarTrayGroup.length - 1));
            _this.moveUp.to({ x: _this.carPostionXZ[_this.nextRedcarXidx], y: _this.carPostionYZ[_this.nextRedcarYidx] }, 500, 'Linear', true, 0);
            _this.moveUp.start();
            // _this.snapSound.play();

            _this.moveUp.onComplete.add(function () {
                _this.snapSound.play();
                _this.adjustBalanaceOriginal();

                _this.RedCarTrayGroup.removeChild(_this.curentChild_Tray);
                _this.curentChild_Tray.inputEnabled = false;
                _this.curentChild_Tray.events.onInputDown.removeAll();

                _this.nextTrayCarIdxX--;
                if (_this.nextTrayCarIdxX < 0) {
                    _this.nextTrayCarIdxY--;
                    _this.nextTrayCarIdxX = 3;
                }

                _this.RedCarGroup.addChild(_this.curentChild_Tray);

                _this.curentChild_Tray.inputEnabled = true;
                _this.curentChild_Tray.input.useHandCursor = true;
                _this.curentChild_Tray.events.onInputDown.add(_this.TweeingCarToTray, _this);

                _this.nextRedcarXidx++;
                if (_this.nextRedcarXidx >= 5) {
                    _this.nextRedcarYidx++;
                    _this.nextRedcarXidx = 0;
                }

                //* now that the tween is complete, reset the flag to enable next tween
                _this.tweenInProgress = false;
            });
        }
    },

    tweeningFnCake: function () {
        //*This contains the function to move the car down
        console.log("movetotryacalling");
        _this.movingCakeDown();
    },

    movingCakeDown: function () {
        //*Add TweeingCakeToTray to the object in the RedCakeGroup to make them move 
        _this.nextTrayCakeIdxX = 0;
        _this.nextTrayCakeIdxY = 0;

        for (i = 0; i < _this.RedCakeGroup.length; i++) {
            _this.RedCakeGroup.getChildAt(i).inputEnabled = true;
            _this.RedCakeGroup.getChildAt(i).input.useHandCursor = true;
            _this.RedCakeGroup.getChildAt(i).events.onInputDown.add(_this.TweeingCakeToTray, _this);
        }
    },

    TweeingCakeToTray: function (target) {
        //* when the objects on the tray is clicked make them move to the balance
        //* As well as make the objects on the tray move up to the balance.

        if (_this.objectCounter < 16 && _this.tweenInProgress == false) {
            //* set the flag to prevent another tween while this tween is happening
            _this.tweenInProgress = true;

            _this.curentChild_cake = _this.RedCakeGroup.getChildAt(_this.RedCakeGroup.length - 1);

            _this.curentChild_cake.events.onInputDown.removeAll();

            _this.moveTotray = _this.add.tween(_this.curentChild_cake);

            _this.moveTotray.to({ x: _this.cakePostionXX[_this.nextTrayCakeIdxX], y: _this.cakePostionXY[_this.nextTrayCakeIdxY] }, 500, 'Linear', true, 0);
            _this.moveTotray.start();

            // _this.snapSound.play();
            _this.adjustBalanaceSub();

            _this.moveTotray.onComplete.add(function () {
                _this.snapSound.play();
                _this.nextRedcakeXidx--;
                if (_this.nextRedcakeXidx < 0) {
                    _this.nextRedcakeYidx--;
                    _this.nextRedcakeXidx = 5;
                }

                _this.curentChild_cake.inputEnabled = true;
                _this.curentChild_cake.input.useHandCursor = true;
                _this.curentChild_cake.events.onInputDown.add(_this.tweeningCakeUP, _this);
                // console.log(_this.RedCakeTrayGroup.length - 1);

                //* adding the currentchild to tray group (which removes it from the balance grp)
                //* that is, adding to RedCakeTrayGroup which removes from RedCakeGroup
                _this.RedCakeTrayGroup.addChild(_this.curentChild_cake);


                _this.nextTrayCakeIdxX++;
                if (_this.nextTrayCakeIdxX >= 4) {
                    _this.nextTrayCakeIdxY++;
                    _this.nextTrayCakeIdxX = 0;
                }

                //* reset the flag to allow next tween since current one is completed
                _this.tweenInProgress = false;

            });
        }
        else {
            if (_this.RedCakeTrayGroup.length >= 16) {
                console.log("You cant drag more ERRRor Sound")
                _this.wrongSound.play();
            }

        }
    },

    movingCakeUp: function () {
        //*Make  cake to move from tray to balance 
        // for(i=0;i<_this.RedCakeTrayGroup.length;i++)
        // {
        _this.RedCakeTrayGroup.getChildAt(_this.RedCakeTrayGroup.length - 1).inputEnabled = true;
        _this.RedCakeTrayGroup.getChildAt(_this.RedCakeTrayGroup.length - 1).input.useHandCursor = true;
        _this.RedCakeTrayGroup.getChildAt(_this.RedCakeTrayGroup.length - 1).events.onInputDown.add(_this.tweeningCakeUP, _this);
        //}
        console.log("movingup");
    },

    tweeningCakeUP: function () {
        //* Add tween function to each element of the tray group
        //* tween only if a tween is not in progress currently

        if (_this.tweenInProgress == false) {
            //* set the flag to prevent another tween while this is progress
            _this.tweenInProgress = true;

            _this.nextTrayCakeIdxX--;
            if (_this.nextTrayCakeIdxX < 0) {
                _this.nextTrayCakeIdxY--;
                _this.nextTrayCakeIdxX = 3;
            }

            _this.curentChild_Tray = _this.RedCakeTrayGroup.getChildAt(_this.RedCakeTrayGroup.length - 1);

            _this.moveUp = _this.add.tween(_this.RedCakeTrayGroup.getChildAt(_this.RedCakeTrayGroup.length - 1));
            _this.moveUp.to({ x: _this.cakePostionXZ[_this.nextRedcakeXidx], y: _this.cakePostionYZ[_this.nextRedcakeYidx] }, 500, 'Linear', true, 0);
            _this.moveUp.start();
            // _this.snapSound.play();

            _this.moveUp.onComplete.add(function () {
                _this.snapSound.play();
                _this.adjustBalanaceOriginal();

                _this.RedCakeTrayGroup.removeChild(_this.curentChild_Tray);
                _this.curentChild_Tray.inputEnabled = false;//.onInputDown.removeAll();
                _this.curentChild_Tray.events.onInputDown.removeAll();

                _this.RedCakeGroup.addChild(_this.curentChild_Tray);

                _this.curentChild_Tray.inputEnabled = true;
                _this.curentChild_Tray.input.useHandCursor = true;
                _this.curentChild_Tray.events.onInputDown.add(_this.TweeingCakeToTray, _this);

                _this.nextRedcakeXidx++;
                if (_this.nextRedcakeXidx >= 6) {
                    _this.nextRedcakeYidx++;
                    _this.nextRedcakeXidx = 0;
                }

                //* reset the flag to allow next tween since this one is completed
                _this.tweenInProgress = false;
            });
        }
    },

    tweeningFnJar: function () {
        //*Make the Jar move from Balance to tray 
        console.log("movetotryacalling");
        _this.movingJarDown();
    },

    movingJarDown: function () {
        //*Make Jar move from Balance to the  tray 
        //* Take two variable to keep track of the Jar position on the tray
        _this.nextTrayJarIdxX = 0;
        _this.nextTrayJarIdxY = 0;

        console.log("movingdown");
        for (k = 0; k < _this.RedJarGroup.length; k++) {
            _this.RedJarGroup.getChildAt(k).inputEnabled = true;
            _this.RedJarGroup.getChildAt(k).input.useHandCursor = true;
            _this.RedJarGroup.getChildAt(k).events.onInputDown.add(_this.TweeingJarToTray, _this);
        }
    },

    TweeingJarToTray: function () {
        //* make jar tween from tray to the balance 
        //* Adjust the balance 
        //* Restrict the moving of object to the tray till 16

        console.log("movingdown1");
        // console.log(i);
        if (_this.objectCounter < 21 && _this.tweenInProgress == false) {
            _this.tweenInProgress = true;
            _this.curentChild_jar = _this.RedJarGroup.getChildAt(_this.RedJarGroup.length - 1);
            _this.moveTotray = _this.add.tween(_this.RedJarGroup.getChildAt(_this.RedJarGroup.length - 1));
            _this.moveTotray.to({ x: _this.jarOnTrayX[_this.nextTrayJarIdxX], y: _this.jarOnTrayY[_this.nextTrayJarIdxY] }, 500, 'Linear', true, 0);
            _this.moveTotray.start();

            // _this.bellSound.play();
            _this.adjustBalanaceSub();

            _this.curentChild_jar.events.onInputDown.removeAll();
            _this.moveTotray.onComplete.add(function () {
                _this.bellSound.play();
                console.log(_this.RedJarGroup.length);
                _this.RedJarGroup.removeChild(_this.curentChild_jar);
                _this.nextRedJarXidx--;
                if (_this.nextRedJarXidx == 6 || _this.nextRedJarXidx == 12 || _this.nextRedJarXidx == 17 || _this.nextRedJarXidx == 21 || _this.nextRedJarXidx == 24) {
                    _this.nextRedJarYidx--;
                    //_this.nextRedJarXidx = 
                }

                _this.RedJarTrayGroup.addChild(_this.curentChild_jar);

                _this.curentChild_jar.inputEnabled = true;
                _this.curentChild_jar.input.useHandCursor = true;
                _this.curentChild_jar.events.onInputDown.add(_this.tweeningJarUP, _this);

                console.log(_this.RedJarGroup.length, _this.RedJarTrayGroup.length,);
                // if( _this.RedJarTrayGroup.length >=1) _this.movingJarUp();

                _this.nextTrayJarIdxX++;
                if (_this.nextTrayJarIdxX == 6 || _this.nextTrayJarIdxX == 11 || _this.nextTrayJarIdxX == 15 || _this.nextTrayJarIdxX == 18 || _this.nextTrayJarIdxX == 20) {
                    _this.nextTrayJarIdxY++;
                    //_this.nextTrayJarIdxX = 0;     
                }
                _this.tweenInProgress = false;
            });
        }
        else {
            if (_this.RedJarTrayGroup.length >= 21) {
                console.log("You cant drag more ERRRor Sound")
                _this.wrongSound.play();
            }

        }
    },

    movingJarUp: function () {
        //*Add tweeningJarUP function to each of the object in the RedJarTrayGroup
        for (i = 0; i < _this.RedJarTrayGroup.length; i++) {
            _this.RedJarTrayGroup.getChildAt(i).inputEnabled = true;
            _this.RedJarTrayGroup.getChildAt(i).input.useHandCursor = true;
            _this.RedJarTrayGroup.getChildAt(i).events.onInputDown.add(_this.tweeningJarUP, _this);
        }
        console.log("movingup");
    },

    tweeningJarUP: function () {

        if (_this.tweenInProgress == false) {
            _this.tweenInProgress = true;

            _this.nextTrayJarIdxX--;
            if (_this.nextTrayJarIdxX == 5 || _this.nextTrayJarIdxX == 10 || _this.nextTrayJarIdxX == 14 || _this.nextTrayJarIdxX == 17 || _this.nextTrayJarIdxX == 19 || _this.nextTrayJarIdxX == 20) {
                _this.nextTrayJarIdxY--;
                if (_this.nextTrayJarIdxY < 0) {

                }
            }

            _this.curentChild_Tray = _this.RedJarTrayGroup.getChildAt(_this.RedJarTrayGroup.length - 1);

            _this.moveUp = _this.add.tween(_this.RedJarTrayGroup.getChildAt(_this.RedJarTrayGroup.length - 1));
            _this.moveUp.to({ x: _this.jarPostionXZ[_this.nextRedJarXidx], y: _this.jarPostionYZ[_this.nextRedJarYidx] }, 500, 'Linear', true, 0);
            _this.moveUp.start();
            // _this.bellSound.play();

            _this.moveUp.onComplete.add(function () {
                _this.bellSound.play();
                _this.adjustBalanaceOriginal();

                _this.RedJarTrayGroup.removeChild(_this.curentChild_Tray);
                _this.curentChild_Tray.inputEnabled = false;//.onInputDown.removeAll();
                _this.curentChild_Tray.events.onInputDown.removeAll();

                _this.RedJarGroup.addChild(_this.curentChild_Tray);

                _this.curentChild_Tray.inputEnabled = true;
                _this.curentChild_Tray.input.useHandCursor = true;
                _this.curentChild_Tray.events.onInputDown.add(_this.TweeingJarToTray, _this);

                _this.nextRedJarXidx++;
                if (_this.nextRedJarXidx == 7 || _this.nextRedJarXidx == 13 || _this.nextRedJarXidx == 18 || _this.nextRedJarXidx == 22 || _this.nextRedJarXidx == 25) {
                    _this.nextRedJarYidx++;
                }

                _this.tweenInProgress = false;
            });
        }
    },

    tweeningFnBottle: function () {
        //* Make the Bottle move down from balance to the tray
        console.log("movetotryacalling");
        _this.movinBottlegDown();
    },

    movinBottlegDown: function () {
        //*Add TweeingBottleToTray function to each of the object in the red bottle group
        _this.nextTrayBottleIdxX = 0;
        _this.nextTrayBottleIdxY = 0;
        console.log("movingdown");
        //_this.bottleSound.play();
        for (k = 0; k < _this.RedBottleGroup.length; k++) {
            _this.RedBottleGroup.getChildAt(k).inputEnabled = true;
            _this.RedBottleGroup.getChildAt(k).input.useHandCursor = true;
            _this.RedBottleGroup.getChildAt(k).events.onInputDown.add(_this.TweeingBottleToTray, _this);
        }
    },

    TweeingBottleToTray: function () {
        //* Restrict the moving of object to the tray till 16
        //* Adjust the balance 
        //* Make the Bottle move from balance to tray 

        if (_this.objectCounter < 16 && _this.tweenInProgress == false) {
            _this.tweenInProgress = true;
            _this.curentChild_Bottle = _this.RedBottleGroup.getChildAt(_this.RedBottleGroup.length - 1);
            _this.moveTotray = _this.add.tween(_this.RedBottleGroup.getChildAt(_this.RedBottleGroup.length - 1));
            _this.moveTotray.to({ x: _this.bottleOnTrayX[_this.nextTrayBottleIdxX], y: _this.bottleOnTrayY[_this.nextTrayBottleIdxY] }, 500, 'Linear', true, 0);
            _this.moveTotray.start();

            // _this.bottleSound.play();
            _this.adjustBalanaceSub();

            _this.curentChild_Bottle.events.onInputDown.removeAll();
            _this.moveTotray.onComplete.add(function () {
                _this.bottleSound.play();
                console.log(_this.RedBottleGroup.length);
                _this.RedBottleGroup.removeChild(_this.curentChild_Bottle);

                _this.nextRedBottleXidx--;
                if (_this.nextRedBottleXidx < 0) {
                    _this.nextRedBottleYidx--;
                    _this.nextRedBottleXidx = 5;
                }

                _this.RedBottleTrayGroup.addChild(_this.curentChild_Bottle);

                _this.curentChild_Bottle.inputEnabled = true;
                _this.curentChild_Bottle.input.useHandCursor = true;
                _this.curentChild_Bottle.events.onInputDown.add(_this.tweeningBottleUP, _this);

                console.log(_this.RedBottleGroup.length, _this.RedBottleTrayGroup.length,);

                _this.nextTrayBottleIdxX++;
                if (_this.nextTrayBottleIdxX >= 5) {
                    _this.nextTrayBottleIdxY++;
                    _this.nextTrayBottleIdxX = 0;
                }

                _this.tweenInProgress = false;

            });
        }
        else {
            if (_this.RedBottleTrayGroup.length >= 16) {
                console.log("You cant drag more ERRRor Sound")
                _this.wrongSound.play();
            }

        }
    },

    movingBottleUp: function () {
        for (i = 0; i < _this.RedBottleTrayGroup.length; i++) {
            _this.RedBottleTrayGroup.getChildAt(i).inputEnabled = true;
            _this.RedBottleTrayGroup.getChildAt(i).events.onInputDown.add(_this.tweeningBottleUP, _this);
        }
        console.log("movingup");
    },

    tweeningBottleUP: function () {
        //* Make the bottle move from tray to the Balance.

        if (_this.tweenInProgress == false) {
            _this.tweenInProgress = true;
            _this.nextTrayBottleIdxX--;
            if (_this.nextTrayBottleIdxX < 0) {
                _this.nextTrayBottleIdxY--;
                _this.nextTrayBottleIdxX = 4;
            }

            console.log("movingup1");
            _this.curentChild_Tray = _this.RedBottleTrayGroup.getChildAt(_this.RedBottleTrayGroup.length - 1);

            _this.moveUp = _this.add.tween(_this.RedBottleTrayGroup.getChildAt(_this.RedBottleTrayGroup.length - 1));
            _this.moveUp.to({ x: _this.bottlePostionXZ[_this.nextRedBottleXidx], y: _this.bottlePostionYZ[_this.nextRedBottleYidx] }, 500, 'Linear', true, 0);
            _this.moveUp.start();
            //_this.bottleSound.play();

            _this.moveUp.onComplete.add(function () {
                _this.bottleSound.play();
                _this.adjustBalanaceOriginal();

                _this.RedBottleTrayGroup.removeChild(_this.curentChild_Tray);
                _this.curentChild_Tray.inputEnabled = false;//.onInputDown.removeAll();
                _this.curentChild_Tray.events.onInputDown.removeAll();

                _this.RedBottleGroup.addChild(_this.curentChild_Tray);

                _this.curentChild_Tray.inputEnabled = true;
                _this.curentChild_Tray.input.useHandCursor = true;
                _this.curentChild_Tray.events.onInputDown.add(_this.TweeingBottleToTray, _this);

                console.log(_this.RedBottleTrayGroup.length, _this.RedBottleGroup.length);

                _this.nextRedBottleXidx++;
                if (_this.nextRedBottleXidx >= 6) {
                    _this.nextRedBottleYidx++;
                    _this.nextRedBottleXidx = 0;
                }

                _this.tweenInProgress = false;
            });
        }
    },

    adjustBalanaceSub: function () {

        console.log("++++++++++ adjustBalanaceSub Function");

        _this.objectCounter += 1;
        _this.prevnetWeight = _this.netWeight; //* save the previous net weight.
        _this.netWeight = _this.leftValueXArray[_this.questionNumber] - (_this.rightValueYArray[_this.questionNumber] + _this.objectCounter);

        _this.diffnetWeight = _this.netWeight - _this.prevnetWeight;
        weightScale2.angle += 0.55 * _this.diffnetWeight;
        _this.leftscaleGroup.y -= 1.5 * _this.diffnetWeight;
        _this.rightscaleGroup.y += 1.5 * _this.diffnetWeight;

        if (_this.objectCounter == _this.rightValueZArray[_this.questionNumber]) {
            console.log("inside if ");
            //* play a clung sound
            _this.displayTickmark();
            _this.time.events.add(100, function () {
                // _this.clungSound = _this.add.audio('ClungSound');
                _this.clungSound.play();
            }, this);
        }
    },

    adjustBalanaceOriginal: function () {

        console.log("++++++++++ adjustBalanaceOriginal Function");
        _this.objectCounter -= 1;
        _this.prevnetWeight = _this.netWeight; //* save the previous net weight.
        _this.netWeight = _this.leftValueXArray[_this.questionNumber] - (_this.rightValueYArray[_this.questionNumber] + _this.objectCounter);

        _this.diffnetWeight = _this.netWeight - _this.prevnetWeight;
        weightScale2.angle += 0.55 * _this.diffnetWeight;
        _this.leftscaleGroup.y -= 1.5 * _this.diffnetWeight;
        _this.rightscaleGroup.y += 1.5 * _this.diffnetWeight;

        if (_this.objectCounter == _this.rightValueZArray[_this.questionNumber]) {
            console.log("inside if ");
            //* play a clung sound
            _this.displayTickmark();
            _this.time.events.add(100, function () {
                //_this.clungSound = _this.add.audio('ClungSound');
                _this.clungSound.play();
            }, this);
        }
    },

    stopVoice: function () {
        if (_this.Question1) {
            if (_this.Question1.contains(_this.Question1src)) {
                _this.Question1.removeChild(_this.Question1src);
                _this.Question1src = null;
            }

            if (!_this.Question1.paused) {
                _this.Question1.pause();
                _this.Question1.currentTime = 0.0;
            }
            _this.Question1 = null;
            _this.Question1src = null;
        }

        if (_this.Question11) {
            if (_this.Question11.contains(_this.Question11src)) {
                _this.Question11.removeChild(_this.Question11src);
                _this.Question11src = null;
            }

            if (!_this.Question11.paused) {
                _this.Question11.pause();
                _this.Question11.currentTime = 0.0;
            }
            _this.Question11 = null;
            _this.Question11src = null;
        }

        if (_this.Question2) {
            if (_this.Question2.contains(_this.Question2src)) {
                _this.Question2.removeChild(_this.Question2src);
                _this.Question2src = null;
            }

            if (!_this.Question2.paused) {
                _this.Question2.pause();
                _this.Question2.currentTime = 0.0;
            }
            _this.Question2 = null;
            _this.Question2src = null;
        }

        if (_this.Question3) {
            if (_this.Question3.contains(_this.Question3src)) {
                _this.Question3.removeChild(_this.Question3src);
                _this.Question3src = null;
            }

            if (!_this.Question3.paused) {
                _this.Question3.pause();
                _this.Question3.currentTime = 0.0;
            }
            _this.Question3 = null;
            _this.Question3src = null;
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

    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');

        // //* star Actions changes
        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "ALAS_01_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Variable and Equation";
        _this.microConcepts = "Algebra";

        _this.count1++;
        anim.play();
    },

    celebration1: function () {
        _this.counterCelebrationSound.play();
        // _this.starActions(_this.count1);
    },

    celebration: function () {
        //_this.numGroup.destroy();
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },

    Initial_randomizing: function () {
        //* Randomizing the Objects between car, cake and jar
        //* Randomizing the numbers of the equation to be asked.

        //* array for storing the object type 
        _this.ObjectArray = [];

        //* array for storing the RHS & LHS value type 
        _this.rightValueZArray = [];
        _this.rightValueYArray = [];
        _this.leftValueXArray = [];
        _this.questionTypeArray = [1, 2];

        // _this.NumeratorValue1 = Math.floor(Math.random() * (max - min) + min);
        // let admax = _this.NumeratorValue1 + 1;
        // _this.NumeratorValue2 = Math.floor(Math.random() * (admax - min) + min);    

        //* Generate 3 questions for Addition and gnenerate 3 question for subtraction.
        for (let i = 0; i < 3; i++) {
            //* generating type of object to be displayed 
            //* generating numbers of equation  
            //* This loop is for addition questions 
            //  _this.questionTypeArray[_this.questionNumber] = 1;
            _this.qflag = 1;
            //* Let 1= car 2 = cake 3= jar , pick a random number Btwn 1 2 3 and store it in an array

            _this.objectValue = Math.floor(Math.random() * (5 - 1) + 1);   //  (3 - 1) + 1); 
            //_this.objectValue = 2;
            _this.ObjectArray.push(_this.objectValue);

            //* x= y+z -> X = LHS of the balance , y+z -> RHS of the balance. Z value has to be identified by the user
            //* generate z & y value where z can be 1 to 8 and  y can be 1 to 24. max of x = 25.
            //* store these x, z and y value in an array 
            //* while finding Y Z search the randomly generated number in its array to check if it is already generated earliler
            //* If it is already there then generate another number 

            //*get the next Z value through random number generation. 
            //*Search through the Array of Z values which are already generated previously if the new Z value is there. 
            //*if it is already present, then generate a new Z value through randomization & search from the beginning. 
            //*if you reach the end while searching, it means the new value is unique.

            _this.rightValueZ = Math.floor(Math.random() * (8 - 1) + 1);
            for (j = 0; j <= i - 1; j++) {
                if (_this.rightValueZ == _this.rightValueZArray[j]) {
                    console.log("....................");
                    _this.rightValueZ = Math.floor(Math.random() * (8 - 1) + 1);
                    j = -1;
                }
            }
            _this.rightValueZArray.push(_this.rightValueZ);

            _this.rightValueY = Math.floor(Math.random() * (24 - _this.rightValueZ) + 1);
            for (j = 0; j <= i - 1; j++) {
                if (_this.rightValueY == _this.rightValueYArray[j]) {
                    _this.rightValueY = Math.floor(Math.random() * (24 - _this.rightValueZ) + 1);
                    j = -1;
                }
            }

            _this.rightValueYArray.push(_this.rightValueY);

            //* Finding X here
            _this.leftValueX = _this.rightValueZ + _this.rightValueY;
            _this.leftValueXArray.push(_this.leftValueX);

            console.log("I am inside a loop ");
            console.log("Values for Z , X and Y " + _this.rightValueZ + "/t" + _this.rightValueX + "/t" + _this.leftValueY);


        }
        console.log(_this.leftValueXArray);
        console.log(_this.rightValueZArray);
        console.log(_this.rightValueYArray);
        console.log(_this.questionTypeArray[_this.questionNumber]);
        //* This for loop will generate questions for subtraction
        for (i = 3; i < 6; i++) {
            // _this.questionTypeArray[_this.questionNumber] =2;

            _this.qflag = 2;
            _this.objectValue = Math.floor(Math.random() * (4 - 1) + 1);   //  (3 - 1) + 1); 
            _this.ObjectArray.push(_this.objectValue);

            _this.rightValueZ = Math.floor(Math.random() * (8 - 1) + 1);
            for (j = 0; j <= i - 1; j++) {
                if (_this.rightValueZ == _this.rightValueZArray[j]) {
                    console.log("....................");
                    _this.rightValueZ = Math.floor(Math.random() * (8 - 1) + 1);
                    j = -1;
                }
            }
            _this.rightValueZArray.push(_this.rightValueZ);

            _this.rightValueY = Math.floor(Math.random() * (25 - 1) + 1); // 30 
            for (j = 0; j <= i - 1; j++) {
                if (_this.rightValueY == _this.rightValueYArray[j] || _this.rightValueY < _this.rightValueZ || _this.rightValueY == _this.rightValueZ) {

                    _this.rightValueY = Math.floor(Math.random() * (25 - 1) + 1);
                    j = -1;

                }
            }
            _this.rightValueYArray.push(_this.rightValueY);

            _this.leftValueX = _this.rightValueY - _this.rightValueZ;
            _this.leftValueXArray.push(_this.leftValueX);

        }
        console.log(_this.leftValueXArray);
        console.log(_this.rightValueZArray);
        console.log(_this.rightValueYArray);
        console.log(_this.questionTypeArray[_this.questionNumber]);
        //* Here we will determine the order of asking the questions by randomising questionOrderArray
        // rightValueXArray = [2,7,4,8,3,9];
        // questionOrderArray = [4,2,1,5,3,0];
        // _this.questionNumber = questionOrderArray[_this.count1];

        // rightValueXArray[  _this.questionNumber ];
        // _this.questionTypeArray[_this.questionNumber];
        _this.questionOrderArray = [1, 2, 3, 4, 5, 6]; //4, 5, 6
        _this.questionOrderArray = _this.shuffle(_this.questionOrderArray);
        console.log(_this.questionOrderArray);
    },

    dragtoBottomTween: function () {
        // _this.handGroup = _this.add.group();
        //console.log("hand");
        _this.time.events.add(500, function () {
            _this.hand = _this.add.image(620, 440, 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
        });
        _this.time.events.add(1000, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.hand);
            tempDragAction.to({ x: 700, y: 460 }, 500, 'Linear', true, 0);
            tempDragAction.start();
        });
        // _this.handGroup.destroy();

        _this.time.events.add(1500, function () {
            _this.hand.destroy();
        });
    },

    TweentheObjects: function () {
        _this.time.events.add(500, function () {
            _this.hand = _this.add.image(620, 440, 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
        });
    },

    displayTickmark: function () {
        //* When the objects dragged by the user is equal to X value then display a tickmark
        //* if tick button is clicked play a sound and show the answer box

        _this.tickbtn.events.onInputDown.removeAll();
        _this.tickbtn.visible = true;
        _this.tickbtn.inputEnabled = true;
        _this.tickbtn.input.useHandCursor = true;
        _this.tickbtn.events.onInputDown.add(function () {
            if (_this.objectCounter == _this.rightValueZArray[_this.questionNumber]) {
                //_this.tickbtn.frame = 1;
                // _this.counterCelebrationSound.play();
                switch (_this.ObjectArray[_this.count1]) {
                    case 1: _this.Car_lockSound.play();
                        break;
                    case 2: _this.GamePositiveSound.play();
                        break;
                    case 3: _this.SmallRewardSound.play();
                        break;
                    case 4: _this.SuccessSound.play();
                        break;
                }
                _this.displayAnswerbox();
            }
            else {
                _this.wrongSound.play();
            }
        });

    },

    displayAnswerbox: function () {
        //* Show the answer box with X = to make user enter the number 
        //* To make him enter to the box  show the number pad
        _this.qn_flag = 1;
        _this.answerBox.visible = true;
        _this.textA.visible = true;
        _this.graphicsEq1.visible = true;
        //_this.graphicsEq2.visible = true;
        _this.answerBox.inputEnabled = true;
        _this.answerBox.input.useHandCursor = true;
        _this.numberPad1();
        _this.tickbtn.visible = false;
        // for(k=0;k<_this.RedCarGroup.length;k++)
        // {
        //     _this.RedCarGroup.getChildAt(k).inputEnabled = false;       
        // }
        if (_this.questionNumber < 3) {
            _this.basket.inputEnabled = false;
            for (k = 0; k < _this.additionRedGroup.length; k++) {
                _this.additionRedGroup.getChildAt(k).inputEnabled = false;
            }
            for (k = 0; k < _this.additionRedCakeGroup.length; k++) {
                _this.additionRedCakeGroup.getChildAt(k).inputEnabled = false;
            }
        }
        switch (_this.ObjectArray[_this.count1]) {
            case 1: for (k = 0; k < _this.RedCarGroup.length; k++) {
                _this.RedCarGroup.getChildAt(k).inputEnabled = false;
            }
                for (k = 0; k < _this.RedCarTrayGroup.length; k++) {
                    _this.RedCarTrayGroup.getChildAt(k).inputEnabled = false;
                }
                break;
            case 2: for (k = 0; k < _this.RedCakeGroup.length; k++) {
                _this.RedCakeGroup.getChildAt(k).inputEnabled = false;
            }
                for (k = 0; k < _this.RedCakeTrayGroup.length; k++) {
                    _this.RedCakeTrayGroup.getChildAt(k).inputEnabled = false;
                }
                break;
            case 3: for (k = 0; k < _this.RedJarGroup.length; k++) {
                _this.RedJarGroup.getChildAt(k).inputEnabled = false;
            }
                for (k = 0; k < _this.RedJarTrayGroup.length; k++) {
                    _this.RedJarTrayGroup.getChildAt(k).inputEnabled = false;
                }
                break;
            case 4: for (k = 0; k < _this.RedBottleGroup.length; k++) {
                _this.RedBottleGroup.getChildAt(k).inputEnabled = false;
            }
                for (k = 0; k < _this.RedBottleTrayGroup.length; k++) {
                    _this.RedBottleTrayGroup.getChildAt(k).inputEnabled = false;
                }
                break;

        }
        if (_this.count1 == 0) {
            _this.time.events.add(1500, function () {
                _this.askQn2();
                // _this.qn_flag = 0;
            });
        }
        // _this.basket.destroy();
        _this.draggedObjectArray.forEach(element => {
            console.log("deleting dragged obj");
            element.destroy();
        });
    },

    repeatQn() {
        _this.wrongSound.play();

        // Destryoying each sprite in the whole
        _this.boxesObj.forEach(element => {
            element.destroy();
        });
        // Destroying each sprite in the tray 2
        _this.grayboxesObj.forEach(element => {
            element.destroy();
        });
        _this.grayboxesObj.forEach(element => {
            _this.grayboxesObj.splice(0, _this.grayboxesObj.length);
        });
        _this.grayboxes2Obj.forEach(element => {
            element.destroy();
        });

        _this.grayboxes2Obj.forEach(element => {
            _this.grayboxes2Obj.splice(0, _this.grayboxes2Obj.length);
        });

        console.log(_this.grayboxesObj.length);
        _this.fractionBoxGroup.destroy();
        _this.grayfractiongroup.destroy();
        _this.trayBox1.destroy();
        _this.trayBox2.destroy();
        _this.emptyBox1.destroy();
        _this.graphicsAddHr.destroy();

        _this.mybox1.visible = false;
        _this.displaynumerator1.visible = false;
        _this.graphics1.visible = false;
        _this.displaydenominator1.visible = false;

        _this.mybox2.visible = false;
        _this.displaynumerator2.visible = false;
        _this.graphics2.visible = false;
        _this.displaydenominator2.visible = false;

        _this.fractionGroup = _this.add.group();
        _this.grayfractiongroup = _this.add.group();
        _this.fractionBoxGroup = _this.add.group();

        if (_this.DenominatorValue == 4)//here we have two option so 
        {
            _this.wrongAns = 1;
        }
        // _this.randomizing_elements(); 
        _this.index2 = 0;
    },

    nextquestion: function () {
        if (_this.count1 < 6) {
            //  _this.enterFractionBox1.frame = 1;
            //  _this.enterFractionBox2.frame = 0;
            _this.qn_flag = 1;
            _this.time.events.add(2000, function () {
                _this.displayQuestions();
            });
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(1000, function () {
                //_this.state.start('score');
                _this.state.start('score', true, false, gameID, _this.microConcepts);
            });
        }
    },

    numberPad1: function () {
        _this.numGroup = _this.add.group();
        _this.numpad = 1;

        let bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);

        bottomnumpadbg.name = "numpadbg";

        _this.x = 60;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;

        for (let i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.7, 0.7);
            _this.numbg.name = i + 1;
            _this.numbg.frame = i;
            if (_this.numbg.name == 10)
                _this.numbg.name = 0;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked, _this);

            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 10;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.7, 0.7);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.rightbtn.frame = 11;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.7, 0.7);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);

        _this.numpadTween = _this.add.tween(_this.numGroup);
        //tween in the number pad after a second.
        _this.tweenNumPad();
    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.answerBox.removeChild(_this.enterTxt1);
        _this.enterTxt1 = '';
    },

    wrongAnsClicked: function (target) {
        _this.wrongSound.play();
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.answerBox.removeChild(_this.enterTxt1);
        _this.enterTxt1 = '';
        //_this.enablebox();
    },

    eraseScreen: function (target) {
        //* Remove the Objects from the balance and also remove the basket 
        //* Equalise the balance , balance can reamain on the screen

        _this.additionRedGroup.removeAll(true);
        _this.additionRedCakeGroup.removeAll(true);
        //*Remove all the elemnts from Redcake group, Redcar group, Redjar group and Redbottle group
        _this.RedCakeGroup.removeAll(true);
        _this.RedJarGroup.removeAll(true);
        _this.RedBottleGroup.removeAll(true);
        _this.RedCarGroup.removeAll(true);
        _this.selectedAns1 = '';
        // _this.selectedAns2 = '';

        _this.lefthandvalue.destroy();
        _this.righthand1.destroy();
        _this.righthand2.destroy();
        _this.textA.destroy();
        _this.answerBox.removeChild(_this.enterTxt1);
        _this.enterTxt1 = null;
        _this.numpad = 0;
        _this.objectCounter = 0;



        weightScale1.visible = false;
        // // weightScale2.destroy();
        weightScale3.visible = false;
        weightScale4.visible = false;

        weightScale2.visible = false;

        // _this.draggedObjectArray.forEach(element =>{
        //     console.log("deleting dragged obj");
        //     element.destroy();
        // });

        //* Remove the objects from left side of the balance
        _this.ballObjYArray.forEach(element => {
            element.destroy();
        });

        //* Remove the objects from right side of the balance (filled by the game)
        _this.ballObjZArray.forEach(element => {
            element.destroy();
        });

        //* Remove the objects from right side of the balance (filled by the user)
        _this.ballObjXArray.forEach(element => {
            element.destroy();
        });

        _this.subtractionRedGroup.forEach(element => {
            element.destroy();
        });
        _this.rightscaleGroup.forEach(element => {
            element.visible = false;
        });

        _this.trayGroup.forEach(element => {
            element.destroy();
        })
        _this.graphicsEq12.destroy();
        //_this.graphicsEq22.destroy();
        _this.graphicsEq1.destroy();
        // _this.graphicsEq2.destroy();

        if (_this.questionNumber < 3) {
            _this.basket.visible = false;
            _this.pluSign.destroy();

        }
        else {
            _this.basket1.visible = false;
            _this.minusSign.destroy();
        }


        _this.mybox1.destroy();
        _this.mybox2.destroy();
        _this.mybox3.destroy();
        _this.answerBox.visible = false;
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);
    },

    numClicked: function (target) {
        _this.clickSound.play();

        //* If first digit is already filled capture the number into selectedAns2
        //* else capture it into selectedAns1
        if (_this.selectedAns1 === '') {
            console.log("you have enetred the first num");
            _this.selectedAns1 = target.name;
            // _this.selectedAns2 = '';
        }

        let var_selectedAns1 = _this.selectedAns1;

        _this.answerBox.removeChild(_this.enterTxt1);
        _this.enterTxt1 = _this.add.text(108, 38.5, "" + var_selectedAns1, { fontSize: '26px' });//43 88
        _this.enterTxt1.name = Number('' + var_selectedAns1);
        _this.answerBox.addChild(_this.enterTxt1);
        _this.answerBox.name = _this.enterTxt1.name;
        _this.enterTxt1.anchor.setTo(0.5);
        _this.enterTxt1.align = 'center';
        _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt1.fill = '#65B4C3';
        _this.enterTxt1.fontWeight = 'Normal';
        _this.enterTxt1.visible = true;
    },

    rightbtnClicked: function (target) {
        console.log("here right btn");

        //* Validate entered answer against expected answer.
        //* By comparing eneterText1 and rightXArray[_this.count1]
        //* If they matched play the celebration sound reset the screen and move to the next question
        //* If they don't match then play the wrong sound, blank the entered answer. 

        _this.clickSound.play();

        if (_this.enterTxt1 == null) {
            _this.wrongSound.play();
        }
        else if (Number(_this.enterTxt1.name) == _this.rightValueZArray[_this.questionNumber]) {
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.celebration();
            _this.numGroup.destroy();
            _this.numpad = 0;

            _this.time.events.add(1800, function () {
                _this.eraseScreen();
                _this.nextquestion();
            });

        }
        else {
            _this.noofAttempts++;
            console.log("if answer is wrong");
            _this.wrongSound.play();
            _this.wrongAnsClicked();
        }

    },

    //* functions related to showing the demo video. 
    //* the game is paused before calling this. Once the demo video 
    //* completes or skip button is pressed, it makes _this.game.paused = false.

    DemoVideo: function () {
        //*Algebra is a branch of mathematics that deals with variables and uses arithmetic operations such as  addition,subtraction, multiplication and division to find the unknown quantities.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/ALAS-01-G6/" +
            _this.languageSelected + "/DV-ALAS-01-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //In this game , we are finding the value of a variable by Trial and Error method .
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALAS-01-G6/" +
            _this.languageSelected + "/ALAS-01-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //Drag the items from the box to balance the scale ..
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALAS-01-G6/" +
            _this.languageSelected + "/ALAS-01-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //Enter the value of a variable
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALAS-01-G6/" +
            _this.languageSelected + "/ALAS-01-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //Drag the items from the balance to the plate to balance the scale..
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALAS-01-G6/" +
            _this.languageSelected + "/ALAS-01-G6D.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
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

        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.q3Timer) clearTimeout(_this.q3Timer);
        if (_this.q4Timer) clearTimeout(_this.q4Timer);
        if (_this.q5Timer) clearTimeout(_this.q5Timer);

        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.q1Sound) {
            console.log("removing the q1");
            _this.q1Sound.removeEventListener('ended', _this.qA1);
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
        _this.skip.destroy();
    },

    dA1: function () {
        console.log("q1");
        _this.q1Sound.play();
    },

    showDemoVideo: function () {
        //* As _this.game is paused, phaser time events cannot be used since its timer is stopped.
        //* so we have to use js timers as required

        _this.demoVideo_1 = _this.add.video('alas01_1');
        _this.demoVideo_1.play(false);
        _this.video_playing = 1;
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/ALAS-01-G6_1.mp4");
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.play();

        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* after demoAudio is played, start q1

        _this.q2Timer = setTimeout(function ()    //* play the second question after 24 seconds of playing video
        {
            console.log("q2");
            clearTimeout(_this.q2Timer);
            _this.q2Sound.play();
        }, 24000);

        _this.q3Timer = setTimeout(function ()    //* play the third question after 30 seconds of playing video
        {
            console.log("q3");
            clearTimeout(_this.q3Timer);
            _this.q3Sound.play();
        }, 30000);

        _this.demoVideo_1.onComplete.add(function ()   //* on completion of demovideo close the video
        {
            console.log("video1 completed");
            _this.demoVideo_2 = _this.add.video('alas01_2');
            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/ALAS-01-G6_2.mp4");  //* phaser needs this.to run in mobile
            _this.video_playing = 2;
            _this.videoWorld_2 = _this.demoVideo_2.addToWorld();

            _this.skip.bringToTop();

            _this.q4Timer = setTimeout(function ()    //* play the third question after 5 seconds of playing video
            {
                console.log("q4");
                clearTimeout(_this.q4Timer);
                _this.q4Sound.play();
            }, 5000);

            _this.q5Timer = setTimeout(function ()    //* play the third question after 17 seconds of playing video
            {
                console.log("q3");
                clearTimeout(_this.q5Timer);
                _this.q3Sound.play();
            }, 17000);

            _this.demoVideo_2.onComplete.add(function () {
                _this.stopAudio();
                _this.demoVideo_2.stop(false);
                _this.demoVideo_1.stop(false);
                _this.videoWorld_2.destroy();
                _this.videoWorld_1.destroy();

                if (_this.hintBtn) {
                    _this.hintBtn.inputEnabled = true;
                    _this.hintBtn.input.useHandCursor = true;
                }
                _this.game.paused = false;
            });
        });
    }
        // _this.loadingTimer = setTimeout(function ()    //* play the second question after 24 seconds of playing video
        // {
        //     console.log(" loadingTimer !!!!");
        //     SpinnerDialog.hide();
        //     clearTimeout(_this.loadingTimer);

        //     _this.videoWorld_1 = _this.demoVideo_1.addToWorld();
        //     _this.demoAudio1.play();

        //     _this.demoAudio1.addEventListener('ended', _this.dA1);  //* after demoAudio is played, start q1

        //     _this.q2Timer = setTimeout(function ()    //* play the second question after 24 seconds of playing video
        //     {
        //         console.log("q2");
        //         clearTimeout(_this.q2Timer);
        //         _this.q2Sound.play();
        //     }, 24000);

        //     _this.q3Timer = setTimeout(function ()    //* play the third question after 30 seconds of playing video
        //     {
        //         console.log("q3");
        //         clearTimeout(_this.q3Timer);
        //         _this.q3Sound.play();
        //     }, 30000);

        //     _this.demoVideo_1.onComplete.add(function ()   //* on completion of demovideo close the video
        //     {
        //         console.log("video1 completed");
        //         _this.demoVideo_2 = _this.add.video('alas01_2');
        //         _this.demoVideo_2.play(false);
        //         _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/ALAS-01-G6_2.mp4");  //* phaser needs this.to run in mobile
        //         _this.video_playing = 2;
        //         _this.videoWorld_2 = _this.demoVideo_2.addToWorld();

        //         _this.skip.bringToTop();

        //         _this.q4Timer = setTimeout(function ()    //* play the third question after 5 seconds of playing video
        //         {
        //             console.log("q4");
        //             clearTimeout(_this.q4Timer);
        //             _this.q4Sound.play();
        //         }, 5000);

        //         _this.q5Timer = setTimeout(function ()    //* play the third question after 17 seconds of playing video
        //         {
        //             console.log("q3");
        //             clearTimeout(_this.q5Timer);
        //             _this.q3Sound.play();
        //         }, 17000);

        //         _this.demoVideo_2.onComplete.add(function () {
        //             _this.stopAudio();
        //             _this.demoVideo_2.stop(false);
        //             _this.demoVideo_1.stop(false);
        //             _this.videoWorld_2.destroy();
        //             _this.videoWorld_1.destroy();

        //             if (_this.hintBtn) {
        //                 _this.hintBtn.inputEnabled = true;
        //                 _this.hintBtn.input.useHandCursor = true;
        //             }
        //             _this.game.paused = false;
        //         });
        //     });


        // }, 3000);

        //     SpinnerDialog.hide();
}
