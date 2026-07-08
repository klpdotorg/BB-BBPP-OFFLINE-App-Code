Game.NSRP_02_G6level1 = function () { };


Game.NSRP_02_G6level1.prototype =
{
    init: function (param, score) {
        _this = this;

        this.Stararr = param;
        this.score = score;
        _this = this;

        _this.languageSelected = window.languageSelected;
        console.log(window.languageSelected,_this.languageSelected, "selected lang tho");
        // _this.languageSelected = "HIN"; 

        //localStorage.getItem("language");

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
        _this.wronganssrc.setAttribute("src", window.baseUrl + "sounds/wrongans.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        _this.Ask_Question1 = _this.createAudio("NSRP-02-G6B");
        _this.Ask_Question2 = _this.createAudio("NSRP-02-G6A");

        telInitializerbbpp.gameIdInit("NSRP_2_G6", gradeSelected);
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

        _this.count1 = 0;
        _this.trackCount = 0;
        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        _this.starsGroup;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.AnswerBox;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.answer = 0;
        _this.stage = 0;
        _this.Question_flag = 0;
        _this.starting = 0;
        _this.objectCounter = 0;
        _this.i = 0;
        _this.j = 0;
        _this.limit = 0;

        // //* BB plus variables
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        _this.microConcepts;
        // _this.grade;

        _this.counterForTimer = 0;
        _this.array = ["3n", "2n", "3n", "2n", "4n", "5n", "3n", "2n+1", "3n+1", "5n+1", "7n+1", "4n+1", "3n+1", "2n+1"];
        _this.arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        _this.shuffle(_this.arr);

        _this.questionType2OrginalArray = [];

        _this.col1objectArrayX = [148, 188, 148, 188];
        _this.col1objectArrayY = [70, 70, 138, 138];

        _this.col1purpleObjArrayX = [148, 188, 228, 268, 308, 348, 388, 428, 148, 188, 228, 268, 308, 348, 388, 428];//
        _this.col1purpleObjArrayY = [160, 240];

        _this.col2objectArrayX = [240, 280, 320, 360, 400, 440, 480, 520];
        _this.col2objectArrayY = [70, 137];

        _this.col3objectArrayX = [580, 620, 660, 700, 740, 780, 820, 860];
        _this.col3objectArrayY = [70, 140];

        _this.col2purpleArrayX = [240, 280, 320, 360, 400, 440, 480, 520, 240, 280, 320, 360, 400, 440, 480, 520];
        _this.col2purpleArrayY = [270, 336];

        _this.col3purpleArrayX = [480, 520, 560, 600, 640, 680, 720, 760, 480, 520, 560, 600, 640, 680, 720, 760];//520,560,600,640,680
        _this.col3purpleArrayY = [160, 240];

        _this.empty_pos2Array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        _this.empty_pos3Array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        _this.empty_pos1Array = [0, 0, 0, 0];
        _this.tweenObjectGroup = _this.add.group();

        _this.initObjectArray = [];
        _this.objHolderArray = [];

        _this.hint_flag = 0;
        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'BG1');
        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            //_this.state.start('NSRP_02_G6Score');
            _this.stopVoice();
            _this.time.events.removeAll();
            _this.backbtn.events.onInputDown.removeAll();
            _this.time.events.add(50, function () {
                _this.state.start('grade6NumberSystems', true, false);
            });
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if (_this.Question_flag == 0) {
                    _this.Ask_Question1.play();
                }
                else if (_this.Question_flag == 1) {
                    _this.Ask_Question2.play();
                }

                _this.time.events.add(4000, function () {
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

        _this.greenObjectArray = [];

        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);
    },

    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSRP-02-G6/" + _this.languageSelected + "/" + src + ".mp3");
        audio.appendChild(audiosrc);
        // audio.play();

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

            temporaryValue = array[currentIndex][2];
            array[currentIndex][2] = array[randomIndex][2];
            array[randomIndex][2] = temporaryValue;

            temporaryValue = array[currentIndex][3];
            array[currentIndex][3] = array[randomIndex][3];
            array[randomIndex][3] = temporaryValue;
        }

        return array;
    },

    getQuestion: function (target) {
        _this.completed = 0;
        _this.current = 0;
        _this.choice = _this.arr[_this.starting++];

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

        _this.Question_flag = 0;

        _this.Initial_randomizing();
        _this.displayInitialScreen();



        if (_this.count1 == 0) {
            _this.Ask_Question2.play();
        }
        _this.Question_flag = 1;

        console.log("inside get question.....");
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1;
    },

    calculateRatio: function (num_1, num_2) {
        console.log("calc")
        _this.ratio1 = 0;
        _this.ratio2 = 0;
        for (num = num_2; num > 1; num--) {

            if ((num_1 % num) == 0 && (num_2 % num) == 0) {
                num_1 = num_1 / num;
                num_2 = num_2 / num;
            }
        }
        _this.ratio1 = num_1;
        _this.ratio2 = num_2;
    },

    Initial_randomizing: function () {
        //* store possible test cases to display th eequation and shuffle it

        _this.objectArray = [];
        _this.chooseBoxArr = [1, 2, 1, 2, 1, 2];//,2,1,2,1,2
        _this.chooseBoxArr = _this.shuffle(_this.chooseBoxArr)
        _this.questionType2Array = []; //* 1 = elephant , 2= cup
        _this.EMaArray = [];
        _this.EMbArray = [];
        _this.aArr = [];
        _this.bArr = [];
        _this.cArr = [];
        _this.dArr = [];
        _this.Arra = [];
        _this.Arrb = [];
        _this.Arrc = [];
        _this.Arrd = [];
        _this.Aa = 0;
        _this.Bb = 0;


        //* 
        //* 
        //* We want only one instance of the question where a = c and b = c. OR a = b
        //* So, set same ratio generated flag to false first. 
        //* once a same ratio gets generated, set that flag to true which will 
        //* prevent it again from occuring.
        _this.sameRatioGenerated = false;

        //* Generate 6 non duplicate ratio's to be used for generating final ratio's to be asked.
        for (i = 0; i < 6; i++) {

            _this.generateRatio();

            for (j = 0; j < _this.Arra.length; j++) {
                //* ratio1 & ratio2 should not repeat in any order
                if ((_this.ratio1 == _this.Arra[j] && _this.ratio2 == _this.Arrb[j]) ||
                    (_this.ratio2 == _this.Arra[j] && _this.ratio1 == _this.Arrb[j]) ||
                    (_this.ratio1 == _this.ratio2 && _this.sameRatioGenerated == true)) {
                    //* 
                    _this.generateRatio();
                    j = -1;
                }
                else if (_this.ratio1 == _this.ratio2) _this.sameRatioGenerated = true;
            }
            _this.Arra.push(_this.ratio1);
            _this.Arrb.push(_this.ratio2);

            console.log(_this.ratio1, "arrA....")
            console.log(_this.ratio2, "arraB....")
        }

        //* br1:br2 
        //* determine a random number Ra such that Ra * br1 && Ra * br2 is less than or equal to 64 (<=64)
        //* a= Ra * br1  b= Ra * br2
        //* determine a random number Rc such that Rc * br1 && Rc * br2 is less than or equal to 16 (<=16)
        //* c= Rc * br1  d= Rc * br2
        //* Ex: br1:br2 = 11:7
        //* Ra = 1 - 5(Upper range = 64/bigger number of br1 and br2)
        //* Rc = 1 - 1 (Upper range = 16/bigger number of br1 and br2)
        //* a = 44 b = 28 c = 11 d = 7

        //* br1:br2 = 64:3  (34:33,64:3,)
        //* a = Ra * br1 = 1 * 64= 64 
        //* b = Ra * br2 = 1 * 3 = 3
        //* 

        //* generate 6 instances of the questions ratios a, b, c and d to be asked.
        for (i = 0; i < 6; i++) {
            _this.ratio1 = _this.Arra[i];
            _this.ratio2 = _this.Arrb[i];

            //* find Rc, the range for finding multiple for c and d ratio.
            //* choose the bigger one so that the ratio will not cross 16
            //* since we can keep only max 16 chess coins.

            //* 
            if (_this.ratio1 > _this.ratio2) {
                _this.Rc = Math.floor(16 / _this.ratio1);
            }
            else {
                _this.Rc = Math.floor(16 / _this.ratio2);
            }

            //* final Rc is the multiple used to find c and d ratios.
            _this.finalRc = Math.floor(Math.random() * (_this.Rc - 1) + 1);

            //* find Ra the range for finding multiple for a and b ratio
            if (_this.ratio1 > _this.ratio2) {
                _this.Ra = Math.floor(64 / _this.ratio1);
            }
            else {
                _this.Ra = Math.floor(64 / _this.ratio2);
            }

            //* check if the ratio multiple is same for a,b and c,d.
            //* if it is same and if already this condition occured earlier,
            //* then find another finalRa in a loop till we find a different value.
            _this.finalRa = Math.floor(Math.random() * (_this.Ra - 1) + 1);

            while (_this.finalRa == _this.finalRc && _this.sameRatioGenerated == true) {
                _this.finalRa = Math.floor(Math.random() * (_this.Ra - 1) + 1);
            }

            //* if once finalRa = finalRc, then set the flag so that it will prevent next
            //* generating same ratio again.
            if (_this.finalRa == _this.finalRc) _this.sameRatioGenerated = true;

            _this.finalA = _this.finalRa * _this.ratio1;
            _this.finalB = _this.finalRa * _this.ratio2;

            _this.finalC = _this.finalRc * _this.ratio1;
            _this.finalD = _this.finalRc * _this.ratio2;

            //* store the ratio's to be asked in respective arrays
            _this.aArr.push(_this.finalA);
            _this.bArr.push(_this.finalB);
            _this.cArr.push(_this.finalC);
            _this.dArr.push(_this.finalD);
        }
        console.log(_this.aArr, "A array");
        console.log(_this.bArr, "B array");
        console.log(_this.cArr, "C array");
        console.log(_this.dArr, "D array");
    },

    generateRatio: function () {
        //*  determine a ratio(br1:br2) such that br1 and br2 are <= 16 

        //* Generate two random numbers and find the basic ratio
        _this.Aa = Math.floor(Math.random() * (64 - 1) + 1);
        _this.Bb = Math.floor(Math.random() * (64 - 1) + 1);

        //* calculate the basic ratio(GCD) of the generated numbers
        _this.calculateRatio(_this.Aa, _this.Bb);

        //* ratio1 = 18, ratio2 = 13
        //* ratio1 = 15, ratio2 = 20
        //* ratio1 = 10, ratio2 = 5
        //* ratio1 = 40, ratio2 = 28

        //* Generate ratio's until we get both < 16
        while (_this.ratio1 > 16 || _this.ratio2 > 16) {
            console.log("lesser than 16")
            _this.Aa = Math.floor(Math.random() * (64 - 1) + 1);
            _this.Bb = Math.floor(Math.random() * (64 - 1) + 1);

            console.log(_this.Aa, _this.Bb, "a ,b")

            _this.calculateRatio(_this.Aa, _this.Bb);
        }
    },

    displayInitialScreen: function () {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
        //* This function displays the initial screen with the big colum 
        //* and numbers, objects of the equation
        _this.column = _this.add.image(60, 150, 'Table_1');
        _this.column.scale.setTo(0.23, 0.3)
        _this.initObjectArray.push(_this.column);

        _this.equation = _this.add.image(783, 80, 'textbox2');
        _this.equation.scale.setTo(1.5, 1.2)
        _this.initObjectArray.push(_this.equation);
        _this.displayInitialObject(); //* objects to be displayed by the game
        //_this.dragpurpleObj();
    },

    displayInitialObject: function () {
        //* based on the question type Array this function will display the equation
        //* _this.trackCount this variable is used to keep track of the array. It is initialised as 0.
        console.log("F1")
        _this.dragged_Objects = _this.add.group();
        if (_this.aArr[_this.trackCount] < 10) {
            _this.a = _this.add.text(810, 95, _this.aArr[_this.trackCount])
        }
        else {
            _this.a = _this.add.text(797, 95, _this.aArr[_this.trackCount])
        }

        _this.applyingStyleRed(_this.a)
        _this.initObjectArray.push(_this.a);
        _this.coln = _this.add.text(834, 95, ':');
        _this.applyingStyleRed(_this.coln)
        _this.initObjectArray.push(_this.coln);
        if (_this.bArr[_this.trackCount] < 10)//_this.bArr[_this.trackCount]
        {
            _this.b = _this.add.text(855, 95, _this.bArr[_this.trackCount])
        }
        else {
            _this.b = _this.add.text(850, 95, _this.bArr[_this.trackCount])
        }
        _this.applyingStyleRed(_this.b)
        _this.initObjectArray.push(_this.b);
        if (_this.chooseBoxArr[_this.trackCount] == 1) {

            console.log("F11")
            if (_this.cArr[_this.trackCount] < 10) {
                _this.c = _this.add.text(444, 340, _this.cArr[_this.trackCount])
            }
            else {
                _this.c = _this.add.text(430, 340, _this.cArr[_this.trackCount])
            }
            _this.applyingStyle(_this.c)
            _this.initObjectArray.push(_this.c);
            _this.coln1 = _this.add.text(471, 335, ':')
            _this.applyingStyle(_this.coln1)
            _this.initObjectArray.push(_this.coln1);
            _this.AnswerBox = _this.add.image(490, 335, 'textB');
            _this.chesscoin2 = _this.add.image(75, 200, 'chesscoin2')
            _this.initObjectArray.push(_this.chesscoin2);
            _this.chesscoin12 = _this.add.image(825, 180, 'chesscoin2')//eraser1
            _this.chesscoin12.frame = 1;
            _this.initObjectArray.push(_this.chesscoin12);
            _this.eraserBg = _this.add.image(825, 260, 'eraserBg')
            _this.initObjectArray.push(_this.eraserBg)
            _this.eraser = _this.add.image(832, 270, 'eraser1')
            _this.eraser.inputEnabled = true;
            _this.eraser.input.useHandCursor = true;
            _this.eraser.events.onInputDown.add(_this.eraserClicked, _this);
            _this.initObjectArray.push(_this.eraser)

            _this.img_Count = 0;
            _this.x = 150
            _this.y = 160
            for (let i = 0; i < _this.cArr[_this.trackCount]; i++) {
                _this.chessCoin = _this.add.image(_this.x, _this.y, 'chesscoin1');
                _this.chessCoin.frame = 1;
                _this.x += 40;
                _this.initObjectArray.push(_this.chessCoin);
                if (_this.x >= 450) {
                    _this.y += 80;
                    _this.x = 150;
                }
            }
            _this.draggable_Obj1();
        }
        else {
            console.log("F12")
            _this.AnswerBox = _this.add.image(420, 335, 'textB')
            _this.coln1 = _this.add.text(471, 335, ':')
            _this.applyingStyle(_this.coln1)
            _this.initObjectArray.push(_this.coln1);
            if (_this.dArr[_this.trackCount] < 10) {
                _this.d = _this.add.text(490, 340, _this.dArr[_this.trackCount])
            }
            else {
                _this.d = _this.add.text(495, 340, _this.dArr[_this.trackCount])
            }
            _this.applyingStyle(_this.d);
            _this.initObjectArray.push(_this.d);
            _this.chesscoin2 = _this.add.image(824, 200, 'chesscoin2')
            _this.initObjectArray.push(_this.chesscoin2);
            _this.chesscoin12 = _this.add.image(75, 180, 'chesscoin2')//200,200
            _this.chesscoin12.frame = 1;
            _this.initObjectArray.push(_this.chesscoin12);
            _this.eraserBg = _this.add.image(75, 260, 'eraserBg')
            _this.initObjectArray.push(_this.eraserBg);
            _this.eraser = _this.add.image(82, 270, 'eraser1')
            _this.eraser.inputEnabled = true;
            _this.eraser.input.useHandCursor = true;
            _this.eraser.events.onInputDown.add(_this.eraserClicked1, _this);
            _this.initObjectArray.push(_this.eraser)
            _this.x = 480
            _this.y = 160
            for (let i = 0; i < _this.dArr[_this.trackCount]; i++) {
                _this.chessCoin = _this.add.image(_this.x, _this.y, 'chesscoin1');
                _this.chessCoin.frame = 1;
                _this.x += 40;
                _this.initObjectArray.push(_this.chessCoin);
                if (_this.x >= 780) {
                    _this.y += 80;
                    _this.x = 480;
                }
            }
            _this.draggable_Obj1();
        }
        _this.tickMark = _this.add.image(820, 405, 'TickBtn');
        _this.tickMark.inputEnabled = true;
        _this.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.tickBtnClicked);
    },

    draggable_Obj1: function (target) {
        //* add an object in the place of original object to make it draggable
        if (_this.chooseBoxArr[_this.trackCount] == 1) {
            console.log("Inside draggable object")

            console.log("inside IFFF");
            _this.img = _this.add.sprite(825, 180, "chesscoin2");
            _this.img.frame = 1;
            //_this.img.scale.setTo(0.9);

            _this.img.inputEnabled = true;
            _this.img.input.enableDrag(true);
            _this.initObjectArray.push(_this.img);
            _this.img.events.onDragStop.add(function (target) {
                _this.img.visible = false;
                _this.dragged_objs();
                // if(_this.questionTypeArray[_this.count1] == 1)
                // {
                //_this.dragged_purpleObjects();
                // }
                // if(target.x >=70 && target.x <= 860 && target.y <=350 && target.y >=260)
                // {
                //    _this.dragged_purpleObjects();
                // }
                // else
                // {
                //_this.draggable_Obj1();

                // }            
            });
        }
        else if (_this.chooseBoxArr[_this.trackCount] == 2) {
            console.log("inside IFFF");
            _this.img = _this.add.sprite(75, 180, "chesscoin2");
            _this.img.frame = 1;
            //_this.img.scale.setTo(0.9);

            _this.img.inputEnabled = true;
            _this.img.input.enableDrag(true);
            _this.initObjectArray.push(_this.img);
            _this.img.events.onDragStop.add(function (target) {
                _this.img.visible = false;
                _this.leftSideDragged_Objs();

            });
        }
    },

    eraserClicked1: function (target) {
        target.input.enableDrag(true);
        _this.eraserX = target.x;
        _this.eraserY = target.y;
        _this.clickSound.play();
        target.events.onDragStop.add(_this.Overlap_Eraser1, target);
        console.log(_this.eraserX, "erser X")
        console.log(_this.eraserY, " erser Y")
    },

    eraserClicked: function (target) {
        target.input.enableDrag(true);
        _this.eraserX = target.x;
        _this.eraserY = target.y;
        _this.clickSound.play();
        target.events.onDragStop.add(_this.Overlap_Eraser, target);
        console.log(_this.eraserX, "erser X")
        console.log(_this.eraserY, " erser Y")
    },

    Overlap_Eraser: function (target) // To check over lap with the eraser and the object
    {
        if (_this.dragged_Objects.length >= 1) {
            if (_this.checkOverlap(target, _this.dragged_Objects)) {
                console.log("inside first if")

                if (_this.checkOverlap(target, _this.target0)) {
                    console.log("Hiii 0")
                    if (_this.target0.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {

                        _this.target0.visible = false;
                        _this.empty_pos2Array[_this.target0.name] = 0;
                        _this.objectCounter -= 1;
                        console.log(_this.objectCounter, "Counter Varr")

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target1)) {
                    console.log("Hiii 1")
                    if (_this.target1.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {

                        _this.target1.visible = false;
                        _this.empty_pos2Array[_this.target1.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target2)) {
                    console.log("Hiii 2")
                    if (_this.target2.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target2.visible = false;
                        _this.empty_pos2Array[_this.target2.name] = 0;
                        _this.objectCounter -= 1;

                        console.log(_this.objHolderArray.length, "Obj Holder Array")

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target3)) {
                    console.log("Hiii 3")
                    if (_this.target3.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target3.visible = false;
                        _this.empty_pos2Array[_this.target3.name] = 0;
                        _this.objectCounter -= 1;

                        console.log(_this.objHolderArray.length, "Obj Holder Array")

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target4)) {
                    console.log("Hiii 4")
                    if (_this.target4.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target4.visible = false;
                        _this.empty_pos2Array[_this.target4.name] = 0;
                        _this.objectCounter -= 1;

                        console.log(_this.objHolderArray.length, "Obj Holder Array")

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target5)) {
                    console.log("Hiii 5")
                    if (_this.target5.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target5.visible = false;
                        _this.empty_pos2Array[_this.target5.name] = 0;
                        _this.objectCounter -= 1;
                        console.log(_this.objHolderArray.length, "Obj Holder Array")
                        // _this.dragged_Objects.getChildAt(_this.target5.name).destroy();
                        // console.log(_this.dragged_Objects.length, "after removing")

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target6)) {
                    console.log("Hiii 6")
                    if (_this.target6.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target6.visible = false;
                        // _this.dragged_Objects.getChildAt(_this.target6.name).destroy();
                        _this.empty_pos2Array[_this.target6.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target7)) {
                    console.log("Hiii 7")
                    if (_this.target7.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target7.visible = false;
                        // _this.dragged_Objects.getChildAt(_this.target7.name).destroy();
                        _this.empty_pos2Array[_this.target7.name] = 0;
                        _this.objectCounter -= 1;
                        console.log(_this.objHolderArray.length, "Obj Holder Array")

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target8)) {
                    console.log("Hiii 8")
                    if (_this.target8.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target8.visible = false;
                        // _this.dragged_Objects.getChildAt(_this.target8.name).destroy();
                        _this.empty_pos2Array[_this.target8.name] = 0;
                        _this.objectCounter -= 1;
                        console.log(_this.objHolderArray.length, "Obj Holder Array")

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target9)) {
                    console.log("Hiii 9")
                    if (_this.target9.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target9.visible = false;
                        // _this.dragged_Objects.getChildAt(_this.target9.name).destroy();
                        _this.empty_pos2Array[_this.target9.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target10)) {
                    console.log("Hiii 10")
                    if (_this.target10.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target10.visible = false;

                        _this.empty_pos2Array[_this.target10.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target11)) {
                    console.log("Hiii 11")
                    if (_this.target11.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target11.visible = false;

                        _this.empty_pos2Array[_this.target11.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target12)) {
                    console.log("Hiii 12")
                    if (_this.target12.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target12.visible = false;

                        _this.empty_pos2Array[_this.target12.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target13)) {
                    console.log("Hiii 13")
                    if (_this.target13.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target13.visible = false;

                        _this.empty_pos2Array[_this.target13.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target14)) {
                    console.log("Hiii 14")
                    if (_this.target14.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target14.visible = false;

                        _this.empty_pos2Array[_this.target14.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target15)) {
                    console.log("Hiii 15")
                    if (_this.target15.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target15.visible = false;

                        _this.empty_pos2Array[_this.target15.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }
                else {
                    target.x = _this.eraserX;
                    target.y = _this.eraserY;
                }
            }
            else {
                console.log("prev else")
                target.x = _this.eraserX;
                target.y = _this.eraserY;
            }
        }
        else {
            console.log("last else")
            target.x = _this.eraserX;
            target.y = _this.eraserY;
        }
    },

    Overlap_Eraser1: function (target) // check overlap for another side
    {
        if (_this.dragged_Objects.length >= 1) {
            if (_this.checkOverlap(target, _this.dragged_Objects)) {
                console.log("inside first if")

                if (_this.checkOverlap(target, _this.target0)) {
                    console.log("Hiii 0")
                    if (_this.target0.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {

                        _this.target0.visible = false;
                        _this.empty_pos3Array[_this.target0.name] = 0;
                        _this.objectCounter -= 1;
                        console.log(_this.objectCounter, "Counter Varr")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target1)) {
                    console.log("Hiii 1")
                    if (_this.target1.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {


                        _this.target1.visible = false;
                        _this.empty_pos3Array[_this.target1.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target2)) {
                    console.log("Hiii 2")
                    if (_this.target2.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target2.visible = false;
                        _this.empty_pos3Array[_this.target2.name] = 0;
                        _this.objectCounter -= 1;

                        console.log(_this.objHolderArray.length, "Obj Holder Array")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target3)) {
                    console.log("Hiii 3")
                    if (_this.target3.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target3.visible = false;
                        _this.empty_pos3Array[_this.target3.name] = 0;
                        _this.objectCounter -= 1;

                        console.log(_this.objHolderArray.length, "Obj Holder Array")

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target4)) {
                    console.log("Hiii 4")
                    if (_this.target4.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target4.visible = false;
                        _this.empty_pos3Array[_this.target4.name] = 0;
                        _this.objectCounter -= 1;

                        console.log(_this.objHolderArray.length, "Obj Holder Array")

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target5)) {
                    console.log("Hiii 5")
                    if (_this.target5.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target5.visible = false;
                        _this.empty_pos3Array[_this.target5.name] = 0;
                        _this.objectCounter -= 1;

                        console.log(_this.objHolderArray.length, "Obj Holder Array")

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target6)) {
                    console.log("Hiii 6")
                    if (_this.target6.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target6.visible = false;
                        // _this.dragged_Objects.getChildAt(_this.target6.name).destroy();
                        _this.empty_pos3Array[_this.target6.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target7)) {
                    console.log("Hiii 7")
                    if (_this.target7.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target7.visible = false;
                        // _this.dragged_Objects.getChildAt(_this.target7.name).destroy();
                        _this.empty_pos3Array[_this.target7.name] = 0;
                        _this.objectCounter -= 1;
                        console.log(_this.objHolderArray.length, "Obj Holder Array")

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target8)) {
                    console.log("Hiii 8")
                    if (_this.target8.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target8.visible = false;
                        // _this.dragged_Objects.getChildAt(_this.target8.name).destroy();
                        _this.empty_pos3Array[_this.target8.name] = 0;
                        _this.objectCounter -= 1;
                        console.log(_this.objHolderArray.length, "Obj Holder Array")

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target9)) {
                    console.log("Hiii 9")
                    if (_this.target9.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target9.visible = false;
                        // _this.dragged_Objects.getChildAt(_this.target9.name).destroy();
                        _this.empty_pos3Array[_this.target9.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target10)) {
                    console.log("Hiii 10")
                    if (_this.target10.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target10.visible = false;

                        _this.empty_pos3Array[_this.target10.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target11)) {
                    console.log("Hiii 11")
                    if (_this.target11.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target11.visible = false;

                        _this.empty_pos3Array[_this.target11.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target12)) {
                    console.log("Hiii 12")
                    if (_this.target12.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target12.visible = false;

                        _this.empty_pos3Array[_this.target12.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target13)) {
                    console.log("Hiii 13")
                    if (_this.target13.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target13.visible = false;

                        _this.empty_pos3Array[_this.target13.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target14)) {
                    console.log("Hiii 14")
                    if (_this.target14.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target14.visible = false;

                        _this.empty_pos3Array[_this.target14.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }

                else if (_this.checkOverlap(target, _this.target15)) {
                    console.log("Hiii 15")
                    if (_this.target15.visible == false) {
                        console.log("falseee")
                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    } else {
                        _this.target15.visible = false;

                        _this.empty_pos3Array[_this.target15.name] = 0;
                        _this.objectCounter -= 1;

                        target.x = _this.eraserX;
                        target.y = _this.eraserY;
                    }
                }
                else {
                    target.x = _this.eraserX;
                    target.y = _this.eraserY;
                }
            }
            else {
                console.log("prev else")
                target.x = _this.eraserX;
                target.y = _this.eraserY;
            }
        }
        else {
            console.log("last else")
            target.x = _this.eraserX;
            target.y = _this.eraserY;
        }
    },

    tickBtnClicked: function () {
        if (_this.chooseBoxArr[_this.trackCount] == 1) {
            if (_this.objectCounter == _this.dArr[_this.trackCount]) {
                _this.counterCelebrationSound.play();
                _this.tickMark.destroy();
                _this.addNumberPad();
                _this.eraser.inputEnabled = false;
                _this.img.inputEnabled = false;
                _this.AnswerBox.inputEnabled = true;
                if (_this.count1 == 0) {
                    _this.time.events.add(560, function () {
                        _this.Ask_Question1.play();
                    })
                }
                _this.Question_flag = 0;
            }
            else {
                _this.wrongSound.play();
            }
        }
        else if (_this.chooseBoxArr[_this.trackCount] == 2) {
            if (_this.objectCounter == _this.cArr[_this.trackCount]) {
                _this.counterCelebrationSound.play();
                _this.tickMark.destroy();
                _this.addNumberPad();
                _this.eraser.inputEnabled = false;
                _this.img.inputEnabled = false;
                _this.AnswerBox.inputEnabled = true;
                if (_this.count1 == 0) {
                    _this.time.events.add(560, function () {
                        _this.Ask_Question1.play();
                    })
                }
                _this.Question_flag = 0;
            }
            else {
                _this.wrongSound.play();
            }

        }
    },

    applyingStyle: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = 30;
    },

    applyingStyleRed: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#FF0000';
        target.fontWeight = 'normal';
        target.visible = true;
    },

    checkOverlap: function (spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    checkOverlap1: function (spriteA, spriteB, spriteG) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        var boundsG = spriteG.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB, boundsG);
    },

    smallEraserClicked: function (target) {
        console.log("Try to erase now")
        target.x = 77;
        target.y = 350;

        if (_this.checkOverlap(target, _this.initialObjectGroup)) //_this.img1
        {
            //_this.img1.visible = false;
            _this.initialObjectGroup.getChildAt(_this.initialObjectGroup.length - 1).visible = false;
            _this.initialObjectGroup.getChildAt(_this.initialObjectGroup.length - 1).destroy();
        }
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

    //* Change this function to show small number pad as given in GDD. (no signs)
    addNumberPad: function () {
        _this.Choice = 1;
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
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

        _this.enterTxt = _this.add.text(-100, 8, "");
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fontSize = "30px";
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fill = '#65B4C3';

        _this.numpadTween = _this.add.tween(_this.numGroup);
        //_this.AnswerBox.visible=true;
        //tween in the number pad after a second.
        _this.tweenNumPad();
    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.eraseScreen();
    },

    eraseScreen: function (target) {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.AnswerBox.removeChild(_this.enterTxt);

        _this.enterTxt.destroy();
        _this.enterTxt;
        _this.enterTxt.text = "";
        // _this.AnswerBox.name = '';
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);
    },

    numClicked: function (target) {
        console.log(target.name)
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

        if (_this.selectedAns2 === "")
            _this.enterTxt = _this.add.text(14, 5, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
        else
            _this.enterTxt = _this.add.text(4.5, 5, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
        _this.enterTxt.align = 'right';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'normal';
        _this.AnswerBox.addChild(_this.enterTxt);
        _this.enterTxt.visible = true;
        console.log(_this.selectedAns1, _this.selectedAns2)
        _this.AnswerBox.name = Number('' + var_selectedAns1 + var_selectedAns2);
        console.log(_this.AnswerBox.name);
    },

    rightbtnClicked1: function (target) {
        console.log(target.name);
        console.log("inside rightbtn");
        _this.clickSound.play();
        _this.noofAttempts++;
        // _this.draggedPurpleGroup = _this.add.group();
        if (_this.chooseBoxArr[_this.trackCount] == 1) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.dArr[_this.trackCount]) {
                // _this.celebrationSound.play();
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebration();
                _this.numGroup.destroy();
                _this.AnswerBox.destroy();
                _this.coln1.destroy();
                _this.c.destroy();
                _this.displayAnswrHighlted();
                _this.Question_flag = 1;
                _this.time.events.add(5600, function () {
                    _this.clearScreen();
                    _this.nextquestion();
                });
            }
            else {
                _this.Question_flag = 0;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
        else if (_this.chooseBoxArr[_this.trackCount] == 2) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.cArr[_this.trackCount]) {
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebration();

                _this.numGroup.destroy();
                _this.AnswerBox.destroy();
                _this.coln1.destroy();
                _this.d.destroy();
                _this.displayAnswrHighlted();
                _this.Question_flag = 1;
                _this.time.events.add(5600, function () {
                    _this.clearScreen();
                    _this.nextquestion();
                });
            }
            else {
                _this.Question_flag = 0;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
    },

    displayAnswrHighlted: function () {
        console.log("highlit text")
        if (_this.aArr[_this.trackCount] < 10) {
            _this.a1 = _this.add.text(380, 335, _this.aArr[_this.trackCount]);
        }
        else {
            _this.a1 = _this.add.text(362, 335, _this.aArr[_this.trackCount]);
        }
        _this.applyingStyleRed(_this.a1)
        _this.a1.fontSize = 30;
        _this.initObjectArray.push(_this.a1);
        _this.addColn = _this.add.text(406, 335, ':')
        _this.applyingStyleRed(_this.addColn)
        _this.initObjectArray.push(_this.addColn);
        if (_this.bArr[_this.trackCount] < 10) {
            _this.b1 = _this.add.text(430, 335, _this.bArr[_this.trackCount]);
        }
        else {
            _this.b1 = _this.add.text(420, 335, _this.bArr[_this.trackCount]);
        }
        _this.applyingStyleRed(_this.b1)
        _this.b1.fontSize = 30;
        _this.initObjectArray.push(_this.b1);
        _this.addColn1 = _this.add.text(460, 330, ': :')
        _this.addColn1.fill = '#FF0000'
        _this.addColn1.fontSize = 35;
        _this.initObjectArray.push(_this.addColn1);
        //_this.addColn1.visible = false;
        if (_this.cArr[_this.trackCount] < 10) {
            _this.c1 = _this.add.text(512, 335, _this.cArr[_this.trackCount]);
        }
        else {
            _this.c1 = _this.add.text(507, 335, _this.cArr[_this.trackCount]);
        }
        _this.applyingStyleRed(_this.c1)
        _this.c1.fontSize = 30;
        _this.initObjectArray.push(_this.c1);
        _this.addColn2 = _this.add.text(546, 335, ':')
        _this.applyingStyleRed(_this.addColn2)
        _this.initObjectArray.push(_this.addColn2);
        if (_this.dArr[_this.trackCount] < 10) {
            _this.d1 = _this.add.text(567, 335, _this.dArr[_this.trackCount]);
        }
        else {
            _this.d1 = _this.add.text(560, 335, _this.dArr[_this.trackCount]);
        }
        _this.applyingStyleRed(_this.d1)
        _this.d1.fontSize = 30;
        _this.initObjectArray.push(_this.d1);
        _this.time.events.add(800, function () {
            _this.addColn1.visible = false;
        })
        _this.time.events.add(1600, function () {
            _this.addColn1.fontSize = 40;
            _this.addColn1.x = 460;
            _this.addColn1.y = 325;
            _this.addColn1.visible = true;
        })
        _this.time.events.add(2400, function () {
            console.log("hhh")
            _this.addColn1.visible = false;
        })
        _this.time.events.add(3200, function () {
            console.log("ffff")
            _this.addColn1.fontSize = 40;
            _this.addColn1.x = 460;
            _this.addColn1.y = 325;
            _this.addColn1.visible = true;
        })
        _this.time.events.add(4000, function () {
            console.log("ttt")
            _this.addColn1.visible = false;
        })
        _this.time.events.add(4800, function () {
            console.log("youu")
            _this.addColn1.fontSize = 40;
            _this.addColn1.x = 460;
            _this.addColn1.y = 325;
            _this.addColn1.visible = true;
        })
    },

    draggable_Obj: function (target) {
        //* This function adds an duplicate image in the place of original chesscoin or Trophy(main image in the first column)
        //* Here we makw this duplicate image Draggable.
        //* when drag stops we are attaching an event which contain dragged_purpleobjects function
        console.log("Inside draggable object")
        // _this.initialObjectGroup = _this.add.group();
        if (_this.objectArray[_this.trackCount] == 1) {
            console.log("inside IFFF");
            _this.img = _this.add.sprite(70, 300, "chesscoin2");
            _this.img.frame = 1;
            _this.img.scale.setTo(0.9);

            _this.img.inputEnabled = true;
            _this.img.input.enableDrag(true);
            _this.initObjectArray.push(_this.img);
            _this.img.events.onDragStop.add(function (target) {
                _this.img.visible = false;
                // if(_this.questionTypeArray[_this.count1] == 1)
                // {
                //     _this.dragged_purpleObjects();
                // }
                if (target.x >= 70 && target.x <= 860 && target.y <= 350 && target.y >= 260) {
                    _this.dragged_purpleObjects();
                }
                else {
                    _this.draggable_Obj();
                }
            });
        }
        else if (_this.objectArray[_this.trackCount] == 2) {
            console.log("Trophyyy");
            _this.img = _this.add.sprite(70, 300, "Trophy2");
            _this.img.frame = 0;
            _this.img.scale.setTo(0.9);
            console.log("addedd");
            _this.initObjectArray.push(_this.img);
            _this.img.inputEnabled = true;
            _this.img.input.enableDrag(true);
            _this.img.events.onDragStop.add(function (target) {
                console.log("Purple Imaage");
                _this.img.visible = false;
                // _this.dragged_purpleObjects();
                if (target.x >= 70 && target.x <= 860 && target.y <= 350 && target.y >= 260) {
                    _this.dragged_purpleObjects();
                }
                else {
                    _this.draggable_Obj();
                }
            })
        }
    },

    searchEmptyPos3: function () {
        console.log("Inside search fin")
        let i = 0;
        while (_this.empty_pos3Array[i] != 0 && i < _this.empty_pos3Array.length) //_this.empty_pos1Array[i] != 0 && i< 4
        {
            i++;
        }
        return i;
    },

    searchEmptyPos2: function () {
        //* search the empty_pos1Array from index 0 till it finds array element with value 0 
        //* i=0;
        //* while(empty_pos1Array[i] != 0 && i< empty_pos1Array.length){ i++; }
        //* return 
        console.log("Inside search fin")
        let i = 0;
        while (_this.empty_pos2Array[i] != 0 && i < _this.empty_pos2Array.length) //_this.empty_pos1Array[i] != 0 && i< 4
        {
            i++;
        }
        return i;
    },

    searchEmptyPos1: function () {
        //* search the empty_pos1Array from index 0 till it finds array element with value 0 
        //* i=0;
        //* while(empty_pos1Array[i] != 0 && i< empty_pos1Array.length){ i++; }
        //* return i; 
        console.log("Inside search fin")
        let i = 0;
        while (_this.empty_pos1Array[i] != 0 && i < _this.empty_pos1Array.length) //_this.empty_pos1Array[i] != 0 && i< 4
        {
            i++;
        }
        return i;
    },

    dragged_objs: function (target) {
        //For right side objects add duplocate object to make it draggable
        console.log("second questionnnn");
        if (_this.objectCounter < 16) {
            _this.searchPos = _this.searchEmptyPos2();
            _this.i = _this.searchPos % 16;
            _this.j = Math.floor(_this.searchPos / 16);
            console.log(_this.i, _this.j);
            if (_this.i >= 8) {
                _this.j++;
                //_this.i= 0;
            }
            _this.img1 = _this.add.sprite(_this.col3purpleArrayX[_this.i], _this.col3purpleArrayY[_this.j], "chesscoin1");
            _this.img1.name = _this.searchPos;
            _this.img1.frame = 0;
            _this.objectCounter++;
            _this.dragged_Objects.addChild(_this.img1);
            _this.initObjectArray.push(_this.img1);
            console.log(_this.img1.name, " image name")
            console.log(_this.dragged_Objects.length, " Group lenth")
            console.log("Counter Varrrrr", _this.objectCounter)
            //* mark the returned index as 1 in empty_posArray
            _this.empty_pos2Array[_this.searchPos] = 1;
            console.log(_this.empty_pos2Array);

            switch (_this.img1.name) {
                case 0: _this.target0 = _this.img1;
                    _this.target0.name = _this.img1.name;
                    console.log(_this.target0.name, 'f1 NAME')
                    f_flag = 1;
                    break;
                case 1: _this.target1 = _this.img1;
                    _this.target1.name = _this.img1.name;
                    break;
                case 2: _this.target2 = _this.img1;
                    _this.target2.name = _this.img1.name;
                    break;
                case 3: _this.target3 = _this.img1;
                    _this.target3.name = _this.img1.name;
                    break;
                case 4: _this.target4 = _this.img1;
                    _this.target4.name = _this.img1.name;
                    break;
                case 5: _this.target5 = _this.img1;
                    _this.target5.name = _this.img1.name;
                    break;
                case 6: _this.target6 = _this.img1;
                    _this.target6.name = _this.img1.name;
                    break;
                case 7: _this.target7 = _this.img1;
                    _this.target7.name = _this.img1.name;
                    break;
                case 8: _this.target8 = _this.img1;
                    _this.target8.name = _this.img1.name;
                    break;
                case 9: _this.target9 = _this.img1;
                    _this.target9.name = _this.img1.name;
                    break;
                case 10: _this.target10 = _this.img1;
                    _this.target10.name = _this.img1.name;
                    break;
                case 11: _this.target11 = _this.img1;
                    _this.target11.name = _this.img1.name;
                    break;
                case 12: _this.target12 = _this.img1;
                    _this.target12.name = _this.img1.name;
                    break;
                case 13: _this.target13 = _this.img1;
                    _this.target13.name = _this.img1.name;
                    break;
                case 14: _this.target14 = _this.img1;
                    _this.target14.name = _this.img1.name;
                    break;
                case 15: _this.target15 = _this.img1;
                    _this.target15.name = _this.img1.name;
                    break;
            }
        }
        _this.draggable_Obj1();
    },

    leftSideDragged_Objs: function () {
        // duplicate onject to make it draggable another side
        if (_this.objectCounter < 16) {
            _this.searchPos = _this.searchEmptyPos3();
            _this.i = _this.searchPos % 16;
            _this.j = Math.floor(_this.searchPos / 16);
            console.log(_this.i, _this.j);
            if (_this.i >= 8) {
                _this.j++;
                //_this.i= 0;
            }
            _this.img1 = _this.add.sprite(_this.col1purpleObjArrayX[_this.i], _this.col1purpleObjArrayY[_this.j], "chesscoin1");
            _this.img1.name = _this.searchPos;
            _this.img1.frame = 0;
            _this.objectCounter++;
            _this.dragged_Objects.addChild(_this.img1);
            console.log("Counter Varrrrr", _this.objectCounter)
            _this.initObjectArray.push(_this.img1);
            console.log(_this.dragged_Objects.length, " Group lenth")
            //* mark the returned index as 1 in empty_posArray
            _this.empty_pos3Array[_this.searchPos] = 1;
            console.log(_this.empty_pos3Array);

            switch (_this.img1.name) {
                case 0: _this.target0 = _this.img1;
                    _this.target0.name = _this.img1.name;
                    console.log(_this.target0.name, 'f1 NAME')
                    f_flag = 1;
                    break;
                case 1: _this.target1 = _this.img1;
                    _this.target1.name = _this.img1.name;
                    break;
                case 2: _this.target2 = _this.img1;
                    _this.target2.name = _this.img1.name;
                    break;
                case 3: _this.target3 = _this.img1;
                    _this.target3.name = _this.img1.name;
                    break;
                case 4: _this.target4 = _this.img1;
                    _this.target4.name = _this.img1.name;
                    break;
                case 5: _this.target5 = _this.img1;
                    _this.target5.name = _this.img1.name;
                    break;
                case 6: _this.target6 = _this.img1;
                    _this.target6.name = _this.img1.name;
                    break;
                case 7: _this.target7 = _this.img1;
                    _this.target7.name = _this.img1.name;
                    break;
                case 8: _this.target8 = _this.img1;
                    _this.target8.name = _this.img1.name;
                    break;
                case 9: _this.target9 = _this.img1;
                    _this.target9.name = _this.img1.name;
                    break;
                case 10: _this.target10 = _this.img1;
                    _this.target10.name = _this.img1.name;
                    break;
                case 11: _this.target11 = _this.img1;
                    _this.target11.name = _this.img1.name;
                    break;
                case 12: _this.target12 = _this.img1;
                    _this.target12.name = _this.img1.name;
                    break;
                case 13: _this.target13 = _this.img1;
                    _this.target13.name = _this.img1.name;
                    break;
                case 14: _this.target14 = _this.img1;
                    _this.target14.name = _this.img1.name;
                    break;
                case 15: _this.target15 = _this.img1;
                    _this.target15.name = _this.img1.name;
                    break;
            }
        }
        _this.draggable_Obj1();
    },

    nextquestion: function () {
        if (_this.count1 < 6) {
            _this.qn_flag = 1;
            _this.time.events.add(500, function () {
                _this.displayInitialScreen();
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

    clearScreen: function () {
        console.log("clear the screen");
        _this.trackCount++;
        _this.objectCounter = 0;
        _this.dragged_Objects.destroy();


        _this.selectedAns1 = '';
        _this.selectedAns2 = '';

        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt = null;

        _this.initObjectArray.forEach(element => {
            element.destroy();
        });

        _this.empty_pos1Array.splice(0, _this.empty_pos1Array.length);
        console.log(_this.empty_pos1Array);

        _this.empty_pos2Array.splice(0, _this.empty_pos2Array.length);
        console.log(_this.empty_pos2Array);

        _this.empty_pos3Array.splice(0, _this.empty_pos3Array.length);
        console.log(_this.empty_pos3Array);

        _this.empty_pos1Array.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        console.log(_this.empty_pos1Array);

        _this.empty_pos2Array.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        console.log(_this.empty_pos2Array);

        _this.empty_pos3Array.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        console.log(_this.empty_pos3Array);
    },

    celebration: function () {
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },

    calculate: function (choice, number) {
        if (choice === 0) {
            return number * 3;
        }
        else if (choice === 1) {
            return number * 2;
        }
        else if (choice === 2) {
            return number * 3;
        }
        else if (choice === 3) {
            return number * 2;
        }
        else if (choice === 4) {
            return number * 4;
        }
        else if (choice === 5) {
            return number * 5;
        }
        else if (choice === 6) {
            return number * 3;
        }
        else if (choice === 7) {
            return number * 2 + 1;
        }
        else if (choice === 8) {
            return number * 3 + 1;
        }
        else if (choice === 9) {
            return number * 5 + 1;
        }
        else if (choice === 10) {
            return number * 7 + 1;
        }
        else if (choice === 11) {
            return number * 4 + 1;
        }
        else if (choice === 12) {
            return number * 3 + 1;
        }
        else if (choice === 13) {
            return number * 2 + 1;
        }
    },

    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');

        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NSRP_2_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Ratio and Proportion";
        _this.microConcepts = "Number Systems";
        //_this.anim.play();
        _this.count1++;
        anim.play();
    },

    shutdown: function () {
        _this.stopVoice();
    },

    DemoVideo: function () {
        //*  Proportion is an equation that defines that the two given ratios are equivalent to each other.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSRP-02-G6/" + _this.languageSelected + "/DV-NSRP-02-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //*  4 is to 1 as 8 is to 2 
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/NSRP-02-G6/" + _this.languageSelected + "/DV1-NSRP-02-G6.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* Place the objects as per required ratio
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSRP-02-G6/" +
            _this.languageSelected + "/NSRP-02-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* enter required ratio
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSRP-02-G6/" +
            _this.languageSelected + "/NSRP-02-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 110, 'skipArrow');       //* skip button shown at the bottom
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

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsrp02_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSRP-02-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();
        _this.demoAudio1.play();

        _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1Timer after 13 seconds.
        {
            console.log("inside q1sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 13000);

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 21 seconds.
        {
            console.log("inside q2sound.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 21000);

        _this.demoAudio2Timer = setTimeout(function ()    //* demoAudio2 js timer to play demoAudio2Timer after 26 seconds.
        {
            console.log("inside demoAudio2sound.....")
            clearTimeout(_this.demoAudio2Timer);         //* clear the time once its used.
            _this.demoAudio2.play();
        }, 26000);

        _this.demoVideo_1.onComplete.add(function () {
            _this.stopAudio();
            _this.demoVideo_1.stop(false);
            _this.videoWorld_1.destroy();

            if (_this.hintBtn) {
                console.log('inside show demo video..............');
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;
        });
    }
}