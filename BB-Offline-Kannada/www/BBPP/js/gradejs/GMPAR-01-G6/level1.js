Game.GMPAR_01_G6level1 = function () { };


Game.GMPAR_01_G6level1.prototype =
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

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        _this.nextOptionSound = document.createElement('audio');
        _this.nextOptionSoundsrc = document.createElement('source');
        _this.nextOptionSoundsrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.nextOptionSound.appendChild(_this.nextOptionSoundsrc);

        _this.snapSound = document.createElement('audio');
        _this.snapSoundsrc = document.createElement('source');
        _this.snapSoundsrc.setAttribute("src", window.baseUrl + "sounds/snapSound.mp3");
        _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.colorSound = document.createElement('audio');
        _this.colorSoundsrc = document.createElement('source');
        _this.colorSoundsrc.setAttribute("src", window.baseUrl + "sounds/colour_change.mp3");
        _this.colorSound.appendChild(_this.colorSoundsrc);

        _this.Ask_Question1 = _this.createAudio("GMPAR-01-G6A");
        _this.Ask_Question2 = _this.createAudio("GMPAR-01-G6B");
        _this.Ask_Question3 = _this.createAudio("GMPAR-01-G6C");
        _this.Ask_Question4 = _this.createAudio("GMPAR-01-G6D");
        _this.Ask_Question5 = _this.createAudio("GMPAR-01-G6E");
        _this.Ask_Question6 = _this.createAudio("GMPAR-01-G6F");
        _this.Ask_Question7 = _this.createAudio("GMPAR-01-G6G");
        _this.Ask_Question8 = _this.createAudio("GMPAR-01-G6H");
        _this.Ask_Question9 = _this.createAudio("GMPAR-01-G6I");

        telInitializerbbpp.gameIdInit("GMPAR_01_G6", gradeSelected);
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

        _this.questionid = null;
        _this.noofAttempts = 0;
        _this.sceneCount = 0;
        _this.AnsTimerCount = 0;

        //_this.AnsTimerCount = 0;
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
        _this.limit = 0;
        _this.audioTrack = 0;
        _this.tickBtn = 0;
        _this.tickBtn2 = 0;
        _this.tickBtn3 = 0;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        //   //*  User Progress variables for BB++ app
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

        _this.empty_pos1Array = [0, 0, 0, 0];
        _this.tweenObjectGroup = _this.add.group();
        _this.clearScreenArray = [];
        _this.initObjectArray = [];

        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

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
                _this.state.start('grade6Geometry');
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
                } else if (_this.Question_flag == 2) {
                    _this.Ask_Question3.play();
                } else if (_this.Question_flag == 3) {
                    _this.Ask_Question4.play();
                } else if (_this.Question_flag == 4) {
                    _this.Ask_Question5.play();
                } else if (_this.Question_flag == 5) {
                    _this.Ask_Question6.play();
                } else if (_this.Question_flag == 6) {
                    _this.Ask_Question7.play();
                } else if (_this.Question_flag == 7) {
                    _this.Ask_Question8.play();
                } else if (_this.Question_flag == 8) {
                    _this.Ask_Question9.play();
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
            //* show the demo video
            _this.hintBtn.inputEnabled = false;
            _this.hintBtn.input.useHandCursor = false;
            _this.time.events.add(1, function () {
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
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" + _this.languageSelected + "/" + src + ".mp3");
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

    getQuestion: function (target) {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

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
        _this.sceneCount++;

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

        _this.area_flag = 0;
        _this.sides_flag = 0;
        _this.triangle_flag = 0;
        _this.gmpar_flag = 0;
        _this.Initial_randomizing();
        _this.displayPerimeterQs();
        if (_this.count1 == 0) {
            _this.Ask_Question1.play();
        }

        _this.questionid = 1;
    },

    Initial_randomizing : function()
    {
       //* Randomize the shapes between rectangle and square for area to display 
       //*randomize the quation or the numbers to find the area of a rect angle and square
       //*Decide the shapes
        _this.shapesArray = [1,2,3]; //,2,3
        _this.shapesArray = _this.shuffle(_this.shapesArray);
        
        _this.QZArray = ["L", "2 x (L"];
        _this.QYArray = ["B","B)"];
        _this.QYYArray = ["2 x L"];
        _this.QXArray = ["LB"];
        _this.QX1Array = ["SS"];
        _this.QZ1Array = ["S"];
        _this.QY1Array = [2];
        _this.QYY1Array = [4, 3];
        _this.rectAngleLValArray =[];
        _this.rectAngleBValArray =[];
        _this.sidesArray = [];
        _this.sidesTArray = [];
        _this.sidesSquareArray = [];
        _this.rectAngleLPArray =[];
        _this.rectAngleBPArray =[];
        _this.trackLB = 0; // this variable will track the length and breadth array
        _this.trackS = 0;
        _this.trackTR = 0;
        _this.decideAreaArray = [1,2,1,2];//1,2,1,2
        _this.decideAreaArray = _this.shuffle(_this.decideAreaArray);
       //* generate no for rect angle - Length, Breadth(L & B)
       //* Length can be from 2 to 10
       //* and width can be from 2 to 9 ( L should be always greater than B)
      
       for(i=0; i<6; i++)
       {
            _this.lengthValue =  Math.floor(Math.random() * (11- 2) + 2); //2.... 10
            for (j = 0; j <= i - 1; j++) 
            { 
                    if (_this.lengthValue == _this.rectAngleLValArray[j]) //_this.lengthValue == _this.rectAngleLValArray[j] ||
                    {
                        console.log("inside LLLLL....................");
                        _this.lengthValue = Math.floor(Math.random() * (11 - 2) + 2);
                        j = -1;
                    } 
            }
            _this.rectAngleLValArray.push(_this.lengthValue);
            console.log(_this.lengthValue ,"= LLLLLL");
           
            _this.breadthValue =  Math.floor(Math.random() * (_this.lengthValue - 1) + 1);
            console.log(_this.breadthValue, "= BRRRR");
            _this.rectAngleBValArray.push(_this.breadthValue);        // _this.rectAngleBValArray.push(_this.breadthValue);
           
            console.log(_this.rectAngleLValArray, 'Lenghth values');
            console.log(_this.rectAngleBValArray, 'Breadth values');
        }

        for(i=0; i < 8; i++)
        {
            _this.sides =  Math.floor(Math.random() * (10- 2) + 2);
            console.log(_this.sides, "first SSSS");
            for (j = 0; j <= i - 1; j++) 
            {
                if (_this.sides == _this.sidesArray[j]) //&& _this.lengthValue < _this.breadthValue//_this.questionType2Array[j] &&
                {
                    console.log("inside SSS....................");
                    _this.sides = Math.floor(Math.random() * (10 - 2) + 2);
                    console.log(_this.sides, "subsequent SSSS");
                    j = -1;
                }
            }
            _this.sidesArray.push(_this.sides);
        }
        for(i = 0; i<3; i++)
        {
            //* Generate 3 sides for triangle and 3 sides for square and 3 L&B for rectangle
            _this.sidesT =  Math.floor(Math.random() * (9- 2) + 2);
            //console.log(_this.sides, "first SSSS");
            for (j = 0; j <= i - 1; j++) 
            {
                if (_this.sidesT == _this.sidesTArray[j]) //&& _this.lengthValue < _this.breadthValue//_this.questionType2Array[j] &&
                {
                    //console.log("inside SSS....................");
                    _this.sidesT = Math.floor(Math.random() * (9 - 2) + 2);
                    //console.log(_this.sides, "subsequent SSSS");
                    j = -1;
                }
            }
            _this.sidesTArray.push(_this.sidesT);

            _this.sidesSquare =  Math.floor(Math.random() * (10- 2) + 2);
            for (j = 0; j <= i - 1; j++) 
            {
                if (_this.sidesSquare == _this.sidesSquareArray[j]) //&& _this.lengthValue < _this.breadthValue//_this.questionType2Array[j] &&
                {
                    //console.log("inside SSS....................");
                    _this.sidesSquare = Math.floor(Math.random() * (10 - 2) + 2);
                    j = -1;
                }
            }
            _this.sidesSquareArray.push(_this.sidesSquare);

            _this.lengthValueLp =  Math.floor(Math.random() * (11- 2) + 2);
            for (j = 0; j <= i - 1; j++) 
            {
                if (_this.lengthValueLp == _this.rectAngleLPArray[j]) //&& _this.lengthValue < _this.breadthValue//_this.questionType2Array[j] &&
                {
                    //console.log("inside SSS....................");
                    _this.lengthValueLp = Math.floor(Math.random() * (11 - 2) + 2);
                    j = -1;
                }
            }
            _this.rectAngleLPArray.push(_this.lengthValueLp);

            _this.lengthValueBp =  Math.floor(Math.random() * (_this.lengthValueLp- 1) + 1);
            _this.rectAngleBPArray.push(_this.lengthValueBp);
        }
    },

    displayPerimeterQs: function () {
        //* this function will display the equation,objects, doted grids for the perimeter questions
        _this.commonGroup1 = _this.add.group();
        _this.greenLineGroup = _this.add.group();
        _this.greenLineBGroup = _this.add.group();
        _this.greenLineT1Group = _this.add.group();
        _this.greenLineT2Group = _this.add.group();
        _this.pencilEraserGroup1 = _this.add.group();
        _this.tableGroup1 = _this.add.group();

        _this.addGreenpencil = _this.add.image(100, 150, 'Greenpencil');
        _this.addGreenpencil.inputEnabled = true;
        _this.addGreenpencil.input.useHandCursor = true;
        _this.pencilEraserGroup1.add(_this.addGreenpencil);
        _this.addGreenpencil.events.onInputDown.add(function () {
            _this.addGreenLinesOnBoard();
        })
        _this.addEraser = _this.add.image(50, 232, 'eraser');
        _this.addEraser.inputEnabled = true;
        _this.addEraser.input.useHandCursor = true;
        _this.pencilEraserGroup1.add(_this.addEraser);
        _this.addEraser.events.onInputDown.add(function () {
            _this.eraseGreeenLines();
        })
        if (_this.shapesArray[_this.trackCount] == 1) {
            console.log("shapess")
            _this.addRectDots = _this.add.image(200, 80, 'dote_1');
            _this.addRectDots.scale.setTo(0.9, 0.9);
            // _this.commonGroup1.add(_this.addRectDots);
            _this.firsTable = _this.add.sprite(735, 80, 'table');
            _this.firsTable.frame = 1;
            _this.tableGroup1.add(_this.firsTable);
            _this.addL = _this.add.text(766, 105, "L");
            _this.addL.fill = '#FF0000';
            _this.tableGroup1.add(_this.addL);
            _this.addB = _this.add.text(847, 105, "B");
            _this.addB.fill = '#FF0000';
            _this.tableGroup1.add(_this.addB);
            _this.textBox1 = _this.add.image(829, 170, 'textbox2');
            _this.tableGroup1.add(_this.textBox1);
            _this.textBox2 = _this.add.image(749, 170, 'textbox2');
            _this.tableGroup1.add(_this.textBox2);
            if (_this.rectAngleLPArray[_this.trackLB] < 10) {
                _this.addL1 = _this.add.text(770, 183, _this.rectAngleLPArray[_this.trackLB]);
            }
            else {
                _this.addL1 = _this.add.text(761, 183, _this.rectAngleLPArray[_this.trackLB]);
            }
            _this.tableGroup1.add(_this.addL1);
            _this.applyingStyle(_this.addL1)
            if (_this.rectAngleBPArray[_this.trackLB] < 10) {
                _this.addB1 = _this.add.text(852, 183, _this.rectAngleBPArray[_this.trackLB]);
            }
            else {
                _this.addB1 = _this.add.text(845, 183, _this.rectAngleBPArray[_this.trackLB]);
            }
            _this.tableGroup1.add(_this.addB1);
            _this.applyingStyle(_this.addB1)
        }
        else if (_this.shapesArray[_this.trackCount] == 2) {
            console.log("shapess 2")
            _this.addRectDots = _this.add.image(200, 80, 'dote_1');
            _this.addRectDots.scale.setTo(0.9, 0.9);
            _this.firsTable = _this.add.sprite(780, 60, 'table');
            _this.firsTable.frame = 0;
            _this.tableGroup1.add(_this.firsTable);
            _this.addL = _this.add.text(811, 85, "S");
            _this.addL.fill = '#FF0000';
            _this.tableGroup1.add(_this.addL);
            _this.textBox1 = _this.add.image(795, 150, 'textbox2');
            _this.tableGroup1.add(_this.textBox1);
            _this.addS1 = _this.add.text(815, 163, _this.sidesSquareArray[_this.trackS]);
            _this.applyingStyle(_this.addS1);
            _this.tableGroup1.add(_this.addS1);
        }
        else if (_this.shapesArray[_this.trackCount] == 3) {
            console.log("shapess 3")
            _this.addRectDots = _this.add.image(200, 80, 'dote_2');
            _this.firsTable = _this.add.sprite(780, 60, 'table');
            _this.firsTable.frame = 0;
            _this.tableGroup1.add(_this.firsTable);
            _this.addL = _this.add.text(811, 85, "S");
            _this.addL.fill = '#FF0000';
            _this.tableGroup1.add(_this.addL);
            _this.textBox1 = _this.add.image(795, 150, 'textbox2');
            _this.tableGroup1.add(_this.textBox1);
            _this.addS1 = _this.add.text(815, 163, _this.sidesTArray[_this.trackTR]);
            _this.applyingStyle(_this.addS1);
            _this.tableGroup1.add(_this.addS1);
        }
        _this.tick_mark = _this.add.image(820, 350, 'TickBtn');
        _this.tick_mark.frame = 1;
        _this.tick_mark.inputEnabled = true;
        _this.tick_mark.input.useHandCursor = true;
        _this.tick_mark.events.onInputDown.add(function () {
            // if(_this.tickBtn ==0)
            // {
            //     console.log("wrongggg")
            //     _this.wrongSound.play();
            // }
            // else{
            console.log("validateee")
            _this.tick_mark.inputEnabled = false;
            _this.tick_mark.input.useHandCursor = false;
            _this.validateGreenLines();
            //}  
        })
    },

    addGreenLinesOnBoard: function () {
        //* This function will add lines when the pencil is clicked
        if (_this.shapesArray[_this.trackCount] == 3) {
            if (_this.greenLineT2Group.length == 0) {
                _this.lineTX = 487;
                _this.lineTY = 120.7;
            }
            console.log("Triangle lines")
            if (_this.lineTX >= 340 && _this.lineTX <= 487) {
                _this.snapSound.play();
                _this.greenline2 = _this.add.sprite(_this.lineTX, _this.lineTY, 'greenline1');
                _this.greenline2.angle = -59; // -121 r angle
                _this.greenline2.scale.setTo(0.9, 0.9);
                _this.greenLineT2Group.addChild(_this.greenline2);
                console.log(_this.lineTX);
                _this.lineTX = _this.lineTX - 21;
                _this.lineTY = _this.lineTY + 36;
                console.log(_this.lineTY);
                _this.Tflag = 1;
                _this.commonGroup1.addChild(_this.greenLineT2Group);
            }
        }
        else {
            if (_this.greenLineGroup.length == 0) {
                _this.lineX = 239;
                _this.lineY = 113;
            }
            console.log("clicked")
            if (_this.lineX <= 609) {
                console.log("line added")
                _this.snapSound.play();
                _this.greenline1 = _this.add.sprite(_this.lineX, _this.lineY, 'greenline1');
                _this.greenline1.scale.setTo(0.8, 1);
                _this.Lbflag = 1;
                _this.S_flag = 1;
                console.log(_this.lineX);
                _this.greenLineGroup.addChild(_this.greenline1);
                console.log(_this.greenLineGroup.length);
                _this.lineX = _this.lineX + 37;
                _this.commonGroup1.addChild(_this.greenLineGroup);
            }
        }
        //_this.tickBtn++;
    },

    eraseGreeenLines: function () {
        //* This function erase the green lines (in perimeter)

        if (_this.shapesArray[_this.trackCount] == 3) {
            if (_this.Tflag == 1) {
                if (_this.greenLineT2Group.length >= 1) {
                    console.log("erase");
                    console.log(_this.greenLineT2Group.length, "grp Lennnn", _this.greenLineT2Group.length - 1, "length - 1");
                    _this.greenLineT2Group.getChildAt(_this.greenLineT2Group.length - 1).visible = false;
                    _this.greenLineT2Group.getChildAt(_this.greenLineT2Group.length - 1).destroy();
                    _this.lineTY = _this.lineTY - 36;
                    _this.lineTX = _this.lineTX + 21;
                    console.log(_this.greenLineT2Group.length);
                }
            }
            else if (_this.Tflag == 2) {
                if (_this.greenLineT2Group.length >= 1) {
                    console.log("erase loine 2");
                    console.log(_this.greenLineT2Group.length, "grp Lennnn", _this.greenLineT2Group.length - 1, "length - 1");
                    _this.greenLineT2Group.getChildAt(_this.greenLineT2Group.length - 1).visible = false;
                    _this.greenLineT2Group.getChildAt(_this.greenLineT2Group.length - 1).destroy();
                    if (_this.greenLineT2Group.length == 0) {
                        console.log("zeroo")
                        _this.lineTY = _this.lineTY + 43;
                        _this.lineTX = _this.lineTX - 57;
                    }
                    else {
                        console.log("1111")
                        _this.lineTX = _this.lineTX - 41;
                    }
                    console.log(_this.greenLineT2Group.length);
                }
            }
        }
        else {
            if (_this.Lbflag == 1) {
                if (_this.greenLineGroup.length >= 1) {
                    console.log("hey Eraser")
                    console.log(_this.greenLineGroup.length, "grp Lennnn", _this.greenLineGroup.length - 1, "length - 1");
                    _this.greenLineGroup.getChildAt(_this.greenLineGroup.length - 1).visible = false;
                    _this.greenLineGroup.getChildAt(_this.greenLineGroup.length - 1).destroy();
                    _this.lineX = _this.lineX - 37;
                    console.log(_this.greenLineGroup.length);
                }
            }
            else if (_this.Lbflag == 2) {
                if (_this.greenLineBGroup.length >= 1) {
                    console.log("erasing BBB Lines")
                    console.log(_this.greenLineBGroup.length, "grp Lennnn", _this.greenLineBGroup.length - 1, "length - 1");
                    _this.greenLineBGroup.getChildAt(_this.greenLineBGroup.length - 1).visible = false;
                    _this.greenLineBGroup.getChildAt(_this.greenLineBGroup.length - 1).destroy();
                    _this.lineYB = _this.lineYB - 38;
                    console.log(_this.greenLineBGroup.length);
                }
            }
        }
        _this.tick_mark.inputEnabled = true;
        _this.tick_mark.input.useHandCursor = true;
    },

    validateGreenLines: function () {
        console.log("Me validating Length") //* This function will validate green lines added by the user(in peremeter)
        if (_this.shapesArray[_this.trackCount] == 1) {
            console.log("Me validating Length.....1")
            if (_this.Lbflag == 2) {
                console.log("heyy hlo");
                if (_this.greenLineBGroup.length == _this.rectAngleBPArray[_this.trackLB]) {
                    _this.nextOptionSound.play();
                    _this.addGreenpencil.events.onInputDown.removeAll();
                    _this.addEraser.inputEnabled = false;
                    _this.time.events.add(500, function () {
                        _this.completeGreenLength();
                        _this.tick_mark.visible = false;
                    })
                }
                else {
                    _this.wrongSound.play();
                    _this.shake.shake(10, _this.addRectDots);
                    if (_this.greenLineBGroup.length >= 1) {
                        console.log("remove all lines")
                        _this.greenLineBGroup.removeAll();
                    }
                    _this.tick_mark.inputEnabled = true;
                    _this.tick_mark.input.useHandCursor = true;
                }
            }
            else if (_this.Lbflag == 1 || _this.tickBtn == 0) {
                console.log("Me validating Length......2")
                if (_this.greenLineGroup.length == _this.rectAngleLPArray[_this.trackLB]) {
                    console.log("Me validating Length.......3")
                    _this.nextOptionSound.play();
                    _this.addGreenpencil.events.onInputDown.removeAll();
                    _this.addEraser.inputEnabled = false;
                    _this.time.events.add(500, function () {
                        _this.addGreenpencil.events.onInputDown.add(function () {
                            console.log("Verticl liness");
                            _this.tick_mark.inputEnabled = true;
                            _this.tick_mark.input.useHandCursor = true;
                            _this.addGreenWidthLines();
                        })
                    })
                }
                else {
                    _this.wrongSound.play();
                    _this.shake.shake(10, _this.addRectDots);
                    if (_this.greenLineGroup.length >= 1) {
                        console.log("remove all lines")
                        _this.greenLineGroup.removeAll();
                    }
                    _this.tick_mark.inputEnabled = true;
                    _this.tick_mark.input.useHandCursor = true;
                }

            }
        }
        else if (_this.shapesArray[_this.trackCount] == 2) {
            if (_this.S_flag == 1 || _this.tickBtn == 0) {
                if (_this.greenLineGroup.length == _this.sidesSquareArray[_this.trackS]) {
                    _this.nextOptionSound.play();
                    _this.addGreenpencil.events.onInputDown.removeAll();
                    _this.addEraser.inputEnabled = false;
                    _this.S_flag = 0;
                    _this.time.events.add(500, function () {
                        _this.completeGreenSquareside();
                        _this.tick_mark.visible = false;
                    })
                }
                else {
                    _this.wrongSound.play();
                    _this.shake.shake(10, _this.addRectDots);
                    if (_this.greenLineGroup.length >= 1) {
                        console.log("remove all lines")
                        _this.greenLineGroup.removeAll();
                    }
                    _this.tick_mark.inputEnabled = true;
                    _this.tick_mark.input.useHandCursor = true;
                }
            }
        }
        else if (_this.shapesArray[_this.trackCount] == 3) {
            if (_this.Tflag == 1 || _this.tickBtn == 0) {
                if (_this.greenLineT2Group.length == _this.sidesTArray[_this.trackTR]) {
                    _this.nextOptionSound.play();
                    _this.addGreenpencil.events.onInputDown.removeAll();
                    _this.addEraser.inputEnabled = false;
                    _this.time.events.add(500, function () {
                        console.log("Verticl liness")
                        _this.completeFirstTriSide();
                        _this.tick_mark.visible = false;

                    })
                }
                else {
                    _this.wrongSound.play();
                    _this.shake.shake(10, _this.addRectDots);
                    if (_this.greenLineT2Group.length >= 1) {
                        console.log("remove all lines")
                        _this.greenLineT2Group.removeAll();
                    }
                    _this.tick_mark.inputEnabled = true;
                    _this.tick_mark.input.useHandCursor = true;
                }
            }
        }
    },

    addGreenWidthLines: function () {
        //* Adding green lines to fill the width it is different for triangle and for Rectangle/Square (in perimeter)    
        if (_this.greenLineBGroup.length == 0) {
            _this.lineXB = 249;
            _this.lineYB = 113;
        }

        if (_this.lineYB <= 423) {
            console.log("Verttical line added")
            _this.snapSound.play();
            _this.greenline1 = _this.add.sprite(_this.lineXB, _this.lineYB, 'greenline1');
            _this.greenline1.scale.setTo(0.8, 1);
            _this.Lbflag = 2;
            _this.S_flag = 2
            _this.addEraser.inputEnabled = true;
            _this.greenline1.angle = 90;
            _this.greenLineBGroup.addChild(_this.greenline1);
            console.log(_this.greenLineBGroup.length);
            _this.lineYB = _this.lineYB + 37;
            _this.commonGroup1.addChild(_this.greenLineBGroup);
        }
    },

    completeFirstTriSide: function () {
        //* This function will complete the last side of a triangle(in perimeter)
        let i = 0;
        _this.lineTY = _this.lineTY - 43;
        _this.lineTX = _this.lineTX + 20;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(0, () => //800,
        {
            _this.snapSound.play();
            _this.greenline1 = _this.add.sprite(_this.lineTX, _this.lineTY, 'greenline1');
            _this.greenLineT2Group.addChild(_this.greenline1);
            console.log(_this.greenLineT2Group.length);
            i++;
            // _this.initLineX = _this.initLineX+37;
            _this.lineTX = _this.lineTX + 41;

            if (i == _this.sidesTArray[_this.trackTR]) //_this.sidesTArray[_this.trackTR]
            {
                _this.loope.stop();
                _this.time.events.add(500, function () {
                    _this.completeTside();
                })
            }
        });
    },

    completeTside: function () {
        //* This function will complete the last side of a triangle(in perimeter)
        let i = 0;
        _this.lineTY = _this.lineTY + 15;
        _this.lineTX = _this.lineTX + 8;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(0, () => //800,
        {
            _this.snapSound.play();
            _this.greenline1 = _this.add.sprite(_this.lineTX, _this.lineTY, 'greenline1');
            _this.greenline1.angle = -121;
            _this.greenline1.scale.setTo(0.8, 0.9);
            _this.greenLineT2Group.addChild(_this.greenline1);
            console.log(_this.greenLineT2Group.length);
            i++;
            // _this.initLineX = _this.initLineX+37;
            _this.lineTX = _this.lineTX - 21;
            _this.lineTY = _this.lineTY - 36;

            if (i == _this.sidesTArray[_this.trackTR]) //_this.sidesTArray[_this.trackTR]
            {
                _this.loope.stop();
                _this.time.events.add(500, function () {
                    // _this.completeGreenWidth();
                    _this.colorSound.play();
                    _this.greenLineT2Group.forEach(element => {
                        element.frame = 1;
                    })
                    _this.time.events.add(1000, function () {
                        _this.greenLineT2Group.forEach(element => {
                            element.frame = 0;
                        })
                        _this.movePencilEraserP();
                    })
                })
            }
        });
    },

    completeGreenSquareside: function () {
        console.log("Firstttttt")
        let i = 0;
        _this.firstX = 249;
        _this.firstY = 113;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(0, () => //800,
        {
            _this.snapSound.play();
            _this.greenline1 = _this.add.sprite(_this.firstX, _this.firstY, 'greenline1');
            _this.greenline1.scale.setTo(0.8, 1)
            _this.greenline1.angle = 90;
            _this.greenLineGroup.addChild(_this.greenline1);
            console.log(_this.greenLineGroup.length);
            i++;
            _this.firstY = _this.firstY + 37;

            if (i == _this.sidesSquareArray[_this.trackS]) {
                _this.loope.stop();
                _this.time.events.add(500, function () {
                    _this.completeGreenLength();
                })
            }
        });
    },

    completeGreenLength: function () {
        //* This function will complete the length in Rectangle and square(in perimeter)
        if (_this.shapesArray[_this.trackCount] == 1) {
            let i = 0;
            _this.initLineX = 240;
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(0, () => //800,
            {
                _this.snapSound.play();
                _this.greenline1 = _this.add.sprite(_this.initLineX, _this.lineYB, 'greenline1');
                _this.greenline1.scale.setTo(0.8, 1)
                _this.greenLineGroup.addChild(_this.greenline1);
                console.log(_this.greenLineGroup.length);
                i++;
                _this.initLineX = _this.initLineX + 37;

                if (i == _this.rectAngleLPArray[_this.trackLB]) {
                    _this.loope.stop();
                    _this.time.events.add(500, function () {
                        _this.completeGreenWidth();
                        _this.greenLineGroup.forEach(element => {
                            element.frame = 1;
                        })
                    })
                }
            });
        }
        else if (_this.shapesArray[_this.trackCount] == 2) {
            console.log("Seconddd")
            let i = 0;
            _this.initLineX = 239;
            _this.firstY -= 1;
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(0, () => //800,
            {
                _this.snapSound.play();
                _this.greenline1 = _this.add.sprite(_this.initLineX, _this.firstY, 'greenline1');
                _this.greenline1.scale.setTo(0.8, 1)
                _this.greenLineGroup.addChild(_this.greenline1);
                console.log(_this.greenLineGroup.length);
                i++;
                _this.initLineX = _this.initLineX + 37;

                if (i == _this.sidesSquareArray[_this.trackS]) {
                    _this.loope.stop();
                    _this.time.events.add(500, function () {
                        _this.completeGreenWidth();
                    })
                }
            });
        }
    },

    completeGreenWidth: function () {
        //* This function will complete the width in Rectangle and square(in perimeter)
        if (_this.shapesArray[_this.trackCount] == 1) {
            let i = 0;
            _this.initBLineX = _this.initLineX + 10;
            _this.loope = _this.time.create(false);
            _this.loope.start();
            _this.loope.loop(0, () => {
                _this.snapSound.play();
                _this.lineYB = _this.lineYB - 37;
                _this.greenline1 = _this.add.sprite(_this.initBLineX, _this.lineYB, 'greenline1');
                _this.greenline1.angle = 90;
                _this.greenline1.scale.setTo(0.8, 1)
                _this.greenLineBGroup.addChild(_this.greenline1);
                console.log(_this.greenLineBGroup.length);
                i++;

                if (i == _this.rectAngleBPArray[_this.trackLB]) {
                    _this.loope.stop();
                    _this.colorSound.play();
                    _this.greenLineBGroup.forEach(element => {
                        element.frame = 1;
                    })
                    _this.time.events.add(1000, function () {
                        _this.greenLineBGroup.forEach(element => {
                            element.frame = 0;
                        })
                        _this.greenLineGroup.forEach(element => {
                            element.frame = 0;
                        })
                        _this.movePencilEraserP();
                    })
                }
            });
        }
        else if (_this.shapesArray[_this.trackCount] == 2) {
            let i = 0;
            _this.initBLineX = _this.initLineX + 11;
            _this.loope = _this.time.create(false);
            _this.loope.start();
            _this.loope.loop(0, () => {
                _this.snapSound.play();
                _this.firstY = _this.firstY - 36.5;
                _this.greenline1 = _this.add.sprite(_this.initBLineX, _this.firstY, 'greenline1');
                _this.greenline1.angle = 90;
                _this.greenline1.scale.setTo(0.8, 1)
                _this.greenLineGroup.addChild(_this.greenline1);
                console.log(_this.greenLineGroup.length);
                i++;
                if (i == _this.sidesSquareArray[_this.trackS]) {
                    _this.loope.stop();
                    _this.colorSound.play();
                    _this.greenLineGroup.forEach(element => {
                        element.frame = 1;
                    })
                    _this.colorSound.play();
                    _this.time.events.add(1000, function () {
                        _this.greenLineGroup.forEach(element => {
                            element.frame = 0;
                        })
                        _this.movePencilEraserP();
                    })
                }
            });
        }
    },

    decideQn: function () {
        console.log("hiiii") //* This function will decide which question to display(in Area)
        if (_this.count1 == 3) {
            _this.Ask_Question6.play();
        }
        _this.Question_flag = 5;
        if (_this.decideAreaArray[_this.trackCount] == 1) {
            _this.displayInitialScreen();
        }
        else if (_this.decideAreaArray[_this.trackCount] == 2) {
            _this.displayInitialScreen2();
        }
    },

    displayInitialScreen: function () {
        //* This function displays the initial screen with the big colum 
        //* and numbers, objects of the equation
        _this.pinkLineGroup = _this.add.group();
        _this.pinkLineBgroup = _this.add.group();
        console.log("Initial screen ")
        _this.pencilEraserGroup = _this.add.group();
        _this.commonGroup = _this.add.group();
        _this.tableGroup = _this.add.group();
        _this.checkBox = _this.add.image(220, 60, 'mainbord');
        _this.checkBox.scale.setTo(0.9, 0.9);
        _this.commonGroup.addChild(_this.checkBox);

        _this.firsTable = _this.add.sprite(700, 60, 'table');
        _this.firsTable.frame = 1;
        _this.tableGroup.addChild(_this.firsTable);

        _this.addL = _this.add.text(735, 90, "L");
        _this.addL.fill = '#FF0000';
        _this.tableGroup.addChild(_this.addL);

        _this.textBox1 = _this.add.image(715, 150, 'textbox2');// First box
        _this.tableGroup.addChild(_this.textBox1);
        _this.addB = _this.add.text(810, 90, "B");
        _this.tableGroup.addChild(_this.addB);
        _this.addB.fill = '#FF0000';
        _this.textBox2 = _this.add.image(794, 150, 'textbox2');// second box
        _this.tableGroup.addChild(_this.textBox2);

        if (_this.rectAngleLValArray[_this.trackLB] < 10) {
            _this.addTextL = _this.add.text(735, 162, _this.rectAngleLValArray[_this.trackLB]);
        }
        else {
            _this.addTextL = _this.add.text(727, 162, _this.rectAngleLValArray[_this.trackLB]);
        }
        _this.applyingStyle(_this.addTextL);
        _this.tableGroup.addChild(_this.addTextL);
        _this.addTextL11 = _this.rectAngleLValArray[0];
        _this.addTextB = _this.add.text(815, 162, _this.rectAngleBValArray[_this.trackLB]);
        _this.applyingStyle(_this.addTextB);
        _this.addTextB11 = _this.rectAngleBValArray[0];
        _this.tableGroup.addChild(_this.addTextB);

        _this.yellow_eraser = _this.add.image(50, 232, 'eraser');
        _this.yellow_eraser.inputEnabled = true;
        _this.yellow_eraser.input.useHandCursor = true;
        _this.yellow_eraser.events.onInputDown.add(function () {
            _this.eraseLine();
        })
        _this.pencilEraserGroup.addChild(_this.yellow_eraser);
        _this.pink_pencil = _this.add.image(100, 150, 'pinkPencil');
        _this.pink_pencil.inputEnabled = true;
        _this.pink_pencil.input.useHandCursor = true;
        _this.pink_pencil.events.onInputDown.add(function () {
            console.log("say hii")
            _this.addLinesOnTheBoard();
        })
        _this.pencilEraserGroup.addChild(_this.pink_pencil);
        _this.tick_mark = _this.add.image(820, 350, 'TickBtn');
        _this.tick_mark.frame = 1;
        _this.tick_mark.inputEnabled = true;
        _this.tick_mark.input.useHandCursor = true;
        _this.tick_mark.events.onInputDown.add(function () {
            _this.tick_mark.inputEnabled = false;
            _this.tick_mark.input.useHandCursor = false;
            _this.validatePinkLines();
        })
    },

    clickOnPencil: function () {
        //* Enable pencil and add an event
        _this.pink_pencil.inputEnabled = true;
        _this.pink_pencil.input.useHandCursor = true;
        _this.pink_pencil.events.onInputDown.add(function () {
            console.log("say hii")
            _this.addLinesOnTheBoard();
        })
    },

    applyingStyle: function (target) //* Blue colors to text
    {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
    },

    addLinesOnTheBoard: function () {
        //* add lines pink lines in Area
        if (_this.decideAreaArray[_this.trackCount] == 1) {
            if (_this.pinkLineGroup.length == 0) {
                _this.lineX = 242;
                _this.lineY = 80;
            }
            console.log("clicked")
            if (_this.lineX <= 584) {
                console.log("line added")
                _this.snapSound.play();
                _this.pinkLine = _this.add.sprite(_this.lineX, _this.lineY, 'pinkline');
                _this.Lbflag = 1;
                console.log(_this.lineX);
                _this.pinkLineGroup.addChild(_this.pinkLine);
                console.log(_this.pinkLineGroup.length);
                _this.lineX = _this.lineX + 38;
                _this.commonGroup.addChild(_this.pinkLineGroup);
            }
        }
        else if (_this.decideAreaArray[_this.trackCount] == 2) {
            if (_this.pinkLineGroup.length == 0) {
                _this.lineX = 242;
                _this.lineY = 80;
            }
            console.log("SQUARES clicked")
            if (_this.lineX <= 584) {
                console.log("line added")
                _this.snapSound.play();
                _this.pinkLine = _this.add.sprite(_this.lineX, _this.lineY, 'pinkline');
                _this.S_flag = 1;
                console.log(_this.lineX);
                _this.pinkLineGroup.addChild(_this.pinkLine);
                console.log(_this.pinkLineGroup.length);
                _this.lineX = _this.lineX + 38;
                _this.commonGroup.addChild(_this.pinkLineGroup);
            }
        }
    },

    addWidthOnTheBoard: function () {
        //* will add pink lines on width side (in Area)
        if (_this.decideAreaArray[_this.trackCount] == 1) {
            if (_this.pinkLineBgroup.length == 0) {
                _this.lineXB = 277;
                _this.lineYB = 82;
            }

            if (_this.lineYB <= 386) {
                console.log("Verttical line added")
                _this.snapSound.play();
                _this.pinkLine = _this.add.sprite(_this.lineXB, _this.lineYB, 'pinkline');
                _this.Lbflag = 2;
                _this.yellow_eraser.inputEnabled = true;
                _this.pinkLine.angle = 90;
                console.log(_this.lineX, "X value")
                console.log(_this.lineY, " Y value");
                _this.pinkLineBgroup.addChild(_this.pinkLine);
                console.log(_this.pinkLineBgroup.length);
                _this.lineYB = _this.lineYB + 38;
                console.log(_this.lineX, "X value");
                console.log(_this.lineY, " Y value");
                _this.commonGroup.addChild(_this.pinkLineBgroup);
            }
        }
    },

    eraseLine: function () //* This will erase the pink lines(in area)
    {
        if (_this.decideAreaArray[_this.trackCount] == 1) {
            if (_this.Lbflag == 1) {
                if (_this.pinkLineGroup.length >= 1) {
                    console.log("hey Eraser")
                    console.log(_this.pinkLineGroup.length, "grp Lennnn", _this.pinkLineGroup.length - 1, "length - 1");
                    _this.pinkLineGroup.getChildAt(_this.pinkLineGroup.length - 1).visible = false;
                    _this.pinkLineGroup.getChildAt(_this.pinkLineGroup.length - 1).destroy();
                    _this.lineX = _this.lineX - 38;
                    console.log(_this.pinkLineGroup.length);
                }
            }
            else if (_this.Lbflag == 2) {
                if (_this.pinkLineBgroup.length >= 1) {
                    console.log("erasing BBB Lines")
                    console.log(_this.pinkLineBgroup.length, "grp Lennnn", _this.pinkLineBgroup.length - 1, "length - 1");
                    _this.pinkLineBgroup.getChildAt(_this.pinkLineBgroup.length - 1).visible = false;
                    _this.pinkLineBgroup.getChildAt(_this.pinkLineBgroup.length - 1).destroy();
                    _this.lineYB = _this.lineYB - 38;
                    console.log(_this.pinkLineBgroup.length);
                }
            }
        }
        else if (_this.decideAreaArray[_this.trackCount] == 2) {
            if (_this.S_flag == 1) {
                if (_this.pinkLineGroup.length >= 1) {
                    console.log("hey Eraser")
                    console.log(_this.pinkLineGroup.length, "grp Lennnn", _this.pinkLineGroup.length - 1, "length - 1");
                    _this.pinkLineGroup.getChildAt(_this.pinkLineGroup.length - 1).visible = false;
                    _this.pinkLineGroup.getChildAt(_this.pinkLineGroup.length - 1).destroy();
                    _this.lineX = _this.lineX - 38;
                    console.log(_this.pinkLineGroup.length);
                }
            }
        }
        _this.tick_mark.inputEnabled = true;
        _this.tick_mark.input.useHandCursor = true;
    },

    validatePinkLines: function () {
        //* this will validate the pink lines added by the user(in area)
        if (_this.Lbflag == 2) {
            console.log("heyy hlo");
            if (_this.pinkLineBgroup.length == _this.rectAngleBValArray[_this.trackLB]) {
                _this.nextOptionSound.play();
                _this.pink_pencil.events.onInputDown.removeAll();
                _this.yellow_eraser.inputEnabled = false;
                _this.time.events.add(500, function () {
                    _this.completeTheLength();
                    _this.tick_mark.visible = false;
                })
            }
            else {
                _this.wrongSound.play();
                _this.shake.shake(10, _this.checkBox);
                if (_this.pinkLineBgroup.length >= 1) {
                    console.log("remove all lines")
                    _this.pinkLineBgroup.removeAll();
                }
                _this.tick_mark.inputEnabled = true;
                _this.tick_mark.input.useHandCursor = true;
            }
        }
        else if (_this.Lbflag == 1 || _this.tickBtn2 == 0) {
            console.log("Me validating Length")
            if (_this.pinkLineGroup.length == _this.rectAngleLValArray[_this.trackLB]) {
                _this.nextOptionSound.play();
                _this.pink_pencil.events.onInputDown.removeAll();
                _this.yellow_eraser.inputEnabled = false;
                _this.time.events.add(500, function () {
                    _this.pink_pencil.events.onInputDown.add(function () {
                        console.log("Verticl liness")
                        _this.tick_mark.inputEnabled = true;
                        _this.tick_mark.input.useHandCursor = true;
                        _this.addWidthOnTheBoard();
                    })
                })
            }
            else {
                _this.wrongSound.play();
                _this.shake.shake(10, _this.checkBox);
                if (_this.pinkLineGroup.length >= 1) {
                    console.log("remove all lines")
                    _this.pinkLineGroup.removeAll();
                }
                _this.tick_mark.inputEnabled = true;
                _this.tick_mark.input.useHandCursor = true;
            }
        }
    },

    completeTheLength: function () {
        //* Game will complete rest of the length (in area)
        console.log(_this.lineY, " YYY");
        console.log(_this.lineX, "XXX");
        let i = 0;
        _this.initLineX = 242;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(0, () => //800,
        {
            _this.snapSound.play();
            _this.pinkLine = _this.add.sprite(_this.initLineX, _this.lineYB, 'pinkline');
            //_this.pinkLine.angle = 90
            _this.pinkLineGroup.addChild(_this.pinkLine);
            console.log(_this.pinkLineGroup.length);
            i++;
            _this.initLineX = _this.initLineX + 38;

            if (i == _this.rectAngleLValArray[_this.trackLB]) {
                _this.loope.stop();
                _this.time.events.add(500, function () {
                    _this.completeTheWidth();
                    _this.pinkLineGroup.forEach(element => {
                        element.frame = 1;
                    })
                })
            }
        });
    },

    completeTheWidth: function () {
        //* Game will complete rest of the width (in area)
        let i = 0;
        _this.initBLineX = _this.initLineX + 33; //31
        _this.lineYB = _this.lineYB - 43;
        _this.loope = _this.time.create(false);
        _this.loope.start();
        _this.loope.loop(0, () => {
            _this.snapSound.play();
            // _this.lineYB = _this.lineYB - 38;
            _this.pinkLine = _this.add.sprite(_this.initBLineX, _this.lineYB, 'pinkline');
            _this.pinkLine.angle = 90;
            _this.pinkLine.scale.setTo(1.15, 1);
            _this.pinkLineBgroup.addChild(_this.pinkLine);
            console.log(_this.pinkLineBgroup.length);
            i++;
            _this.lineYB = _this.lineYB - 38;

            if (i == _this.rectAngleBValArray[_this.trackLB]) {
                _this.loope.stop();
                _this.pinkLineBgroup.forEach(element => {
                    element.frame = 1;
                })
                _this.colorSound.play();
                _this.time.events.add(1000, function () {
                    _this.pinkLineBgroup.forEach(element => {
                        element.frame = 0;
                    })
                    _this.pinkLineGroup.forEach(element => {
                        element.frame = 0;
                    })
                    _this.movePencilEraser();
                })
            }
        });
    },

    completeFirstSide: function () {
        //* Game will complete rest of the sids(in area, shapes)
        console.log(_this.lineY, " YYY");
        console.log(_this.lineX, "XXX");
        let i = 0;
        _this.initX = 277;
        _this.lineYB = 82;
        _this.loope = _this.time.create(false);
        _this.loope.start();
        _this.loope.loop(0, () => {
            _this.snapSound.play();
            _this.pinkLine = _this.add.sprite(_this.initX, _this.lineYB, 'pinkline');
            _this.pinkLine.angle = 90
            _this.pinkLineGroup.addChild(_this.pinkLine);
            console.log(_this.pinkLineGroup.length);
            i++;
            _this.lineYB = _this.lineYB + 38;
            if (i == _this.sidesArray[_this.trackS]) {
                _this.loope.stop();
                _this.time.events.add(500, function () {
                    _this.completeTheSecondSide();
                })
            }
        });
    },

    completeTheSecondSide: function () {
        let i = 0;
        _this.initLineX = 242;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(0, () => {
            _this.snapSound.play();
            _this.pinkLine = _this.add.sprite(_this.initLineX, _this.lineYB, 'pinkline');
            //_this.pinkLine.angle = 90
            _this.pinkLineGroup.addChild(_this.pinkLine);
            console.log(_this.pinkLineGroup.length);
            i++;
            _this.initLineX = _this.initLineX + 38;

            if (i == _this.sidesArray[_this.trackS]) {
                _this.loope.stop();
                _this.time.events.add(500, function () {
                    _this.completeThirdSide();
                })
            }
        });
    },

    completeThirdSide: function () {
        //* Game will complete rest of the sids(in area, shapes)
        let i = 0;
        _this.initBLineX = _this.initLineX + 33;
        _this.lineYB = _this.lineYB - 43;
        _this.loope = _this.time.create(false);
        _this.loope.start();
        _this.loope.loop(0, () => {
            _this.snapSound.play();
            // _this.lineYB = _this.lineYB - 38;
            _this.pinkLine = _this.add.sprite(_this.initBLineX, _this.lineYB, 'pinkline');
            _this.pinkLine.angle = 90;
            _this.pinkLine.scale.setTo(1.15, 1);
            _this.pinkLineGroup.addChild(_this.pinkLine);
            console.log(_this.pinkLineGroup.length);
            i++;
            _this.lineYB = _this.lineYB - 38;

            if (i == _this.sidesArray[_this.trackS]) {
                _this.loope.stop();
                _this.pinkLineGroup.forEach(element => {
                    element.frame = 1;
                })
                _this.colorSound.play();
                _this.time.events.add(1000, function () {
                    _this.pinkLineGroup.forEach(element => {
                        element.frame = 0;
                    })
                    _this.movePencilEraser();
                })
            }
        });
    },

    movePencilEraserP: function () //*Tween pencil and erser from screen and destroy it(in perimeter)
    {
        _this.tweenPEraser = _this.add.tween(_this.pencilEraserGroup1);
        _this.tweenPEraser.to({ x: -50, y: 0 }, 500, 'Linear', true, 0);
        _this.tweenPEraser.start();

        _this.tweenPEraser.onComplete.add(function () {
            _this.pencilEraserGroup1.destroy();
            _this.commonGroup1.add(_this.addRectDots);
            _this.moveTheBoardP();
            _this.decideShapesP();
            _this.tick_mark.destroy();
        })
    },

    moveTheBoardP: function () //* Tween the Board from the screen(in perimetr)
    {
        _this.tweenBoard = _this.add.tween(_this.commonGroup1);
        _this.tweenBoard.to({ x: -60, y: 0 }, 500, 'Linear', true, 0);
        _this.tweenBoard.start();
    },

    decideShapesP: function () //* This function will decide the shape display the table accordingly(in perimeter)
    {
        _this.Question_flag = 1;
        if (_this.count1 == 0 && _this.audioTrack == 0) {
            _this.Ask_Question2.play();
        }

        if (_this.shapesArray[_this.trackCount] == 1) {
            _this.moveTheTableP();
        }
        else if (_this.shapesArray[_this.trackCount] == 2) {
            _this.moveTableSquareP();
        }
        else if (_this.shapesArray[_this.trackCount] == 3) {
            console.log(" triiii")
            _this.moveTableTriangle();
        }
    },

    movePencilEraser: function () //*Tween pencil and erser from screen and destroy it(in area)
    {
        _this.tweenPEraser = _this.add.tween(_this.pencilEraserGroup);
        _this.tweenPEraser.to({ x: -50, y: 0 }, 500, 'Linear', true, 0);
        _this.tweenPEraser.start();

        _this.tweenPEraser.onComplete.add(function () {
            _this.pencilEraserGroup.destroy();
            _this.moveTheBoard();
            _this.decideShapes();
            _this.tick_mark.destroy();
        })
    },

    moveTheBoard: function () //*Tween Board from screen and destroy it(in area)
    {
        _this.tweenBoard = _this.add.tween(_this.commonGroup);
        _this.tweenBoard.to({ x: -80, y: 0 }, 500, 'Linear', true, 0);
        _this.tweenBoard.start();
    },

    decideShapes: function () //* This function will decide the shape display the table accordingly(in area)
    {

        if (_this.decideAreaArray[_this.trackCount] == 1) {
            _this.moveTheTable();
        }
        else {
            _this.moveTableSquare();
        }
        _this.Question_flag = 6;
        if (_this.count1 == 3 && _this.limit == 0) {
            _this.Ask_Question7.play();
        }

    },

    moveTheTableP: function () {
        //* This will display the tables accordibg to the Question (in perimeter)
        if (_this.area_flag == 0) {
            _this.tweenTable = _this.add.tween(_this.tableGroup1);
            _this.tweenTable.to({ x: -60, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();

            _this.tweenTable.onComplete.add(function () {
                _this.addsingleColum = _this.add.sprite(832, 129.8, 'table');
                _this.addsingleColum.frame = 0;
                _this.addArea = _this.add.text(864, 155, "P");
                _this.addArea.fill = '#FF0000';

                _this.answer_flag = 0;
                _this.AnswerBox = _this.add.sprite(844, 227, 'textbox4');
                _this.addNumberPad();
            })
        }
        if (_this.area_flag == 1) {
            _this.tweenTable = _this.add.tween(_this.tableGroup1);
            _this.tweenTable.to({ x: -60, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();
            _this.tweenTable.onComplete.add(function () {
                _this.tableGroup1.destroy();
                console.log("2nd Qq");

                _this.ftable = _this.add.sprite(640, 110, 'table');
                _this.ftable.frame = 5;
                _this.clearScreenArray.push(_this.ftable);
                _this.addArea = _this.add.text(833, 132, "P");
                _this.addArea.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addArea);
                _this.addL = _this.add.text(676, 132, "L");
                _this.addL.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addL);
                _this.addB = _this.add.text(750, 132, "B");
                _this.addB.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addB);

                _this.textBox12 = _this.add.image(654, 200, 'textbox2');
                _this.textBox11 = _this.add.image(734, 200, 'textbox2');
                _this.clearScreenArray.push(_this.textBox12);
                _this.clearScreenArray.push(_this.textBox11);
                if (_this.rectAngleLPArray[_this.trackNumber] >= 10) {
                    _this.addTextL1 = _this.add.text(666, 212, _this.rectAngleLPArray[_this.trackNumber]); //_this.addTextL11
                } else {
                    _this.addTextL1 = _this.add.text(673.5, 212, _this.rectAngleLPArray[_this.trackNumber]); //_this.addTextL11
                }
                _this.applyingStyle(_this.addTextL1);
                _this.addTextB1 = _this.add.text(756, 212, _this.rectAngleBPArray[_this.trackNumber]);//addTextB11
                _this.applyingStyle(_this.addTextB1);// First box
                _this.clearScreenArray.push(_this.addTextL1);
                _this.clearScreenArray.push(_this.addTextB1);

                _this.AnsBox1 = _this.add.image(812, 204, 'textbox4');
                _this.clearScreenArray.push(_this.AnsBox1);
                if (2 * (_this.rectAngleLPArray[_this.trackNumber] + _this.rectAngleBPArray[_this.trackNumber]) >= 10) {
                    _this.fanswer = _this.add.text(827, 210, 2 * (_this.rectAngleLPArray[_this.trackNumber] + _this.rectAngleBPArray[_this.trackNumber]));
                } else {
                    _this.fanswer = _this.add.text(835, 210, 2 * (_this.rectAngleLPArray[_this.trackNumber] + _this.rectAngleBPArray[_this.trackNumber]));
                }
                _this.applyingStyle(_this.fanswer);
                _this.clearScreenArray.push(_this.fanswer);

                _this.textBox21 = _this.add.image(654, 279, 'textbox2');
                _this.textBox22 = _this.add.image(734, 279, 'textbox2');
                _this.clearScreenArray.push(_this.textBox21);
                _this.clearScreenArray.push(_this.textBox22);

                if (_this.rectAngleLPArray[_this.trackNumber2] >= 10) {
                    _this.addTextL2 = _this.add.text(666, 293, _this.rectAngleLPArray[_this.trackNumber2]);
                }
                else {
                    _this.addTextL2 = _this.add.text(673.5, 293, _this.rectAngleLPArray[_this.trackNumber2]);
                }
                _this.applyingStyle(_this.addTextL2);
                _this.addTextB2 = _this.add.text(756, 293, _this.rectAngleBPArray[_this.trackNumber2]);
                _this.applyingStyle(_this.addTextB2);
                _this.clearScreenArray.push(_this.addTextL2);
                _this.clearScreenArray.push(_this.addTextB2);

                _this.answer_flag = 1;
                _this.AnswerBox = _this.add.sprite(812, 286, 'textbox4');
                _this.clearScreenArray.push(_this.AnswerBox);
                _this.addNumberPad();
            })
        }
        if (_this.area_flag == 2) {
            if (_this.area_flag == 2) {
                _this.tweenTable = _this.add.tween(_this.tableGroup1);
                _this.tweenTable.to({ x: -60, y: 50 }, 500, 'Linear', true, 0);
                _this.tweenTable.start();
                _this.tweenTable.onComplete.add(function () {
                    _this.tableGroup1.destroy();
                    console.log("3rd Qq")

                    _this.ftable = _this.add.sprite(640, 110, 'table');
                    _this.ftable.frame = 6;
                    _this.clearScreenArray.push(_this.ftable);
                    _this.addArea = _this.add.text(833, 132, "P");
                    _this.addArea.fill = '#FF0000';
                    _this.clearScreenArray.push(_this.addArea);
                    _this.addL = _this.add.text(676, 132, "L");
                    _this.addL.fill = '#FF0000';
                    _this.clearScreenArray.push(_this.addL);
                    _this.addB = _this.add.text(750, 130, "B");
                    _this.addB.fill = '#FF0000';
                    _this.clearScreenArray.push(_this.addB);
                    _this.textBox12.visible = true;
                    _this.textBox11.visible = true;

                    _this.textBox12 = _this.add.image(654, 200, 'textbox2');
                    _this.textBox11 = _this.add.image(734, 200, 'textbox2');
                    _this.clearScreenArray.push(_this.textBox12);
                    _this.clearScreenArray.push(_this.textBox11);
                    if (_this.rectAngleLPArray[_this.trackNumber] >= 10) {
                        _this.addTextL1 = _this.add.text(666, 212, _this.rectAngleLPArray[_this.trackNumber]);
                    } else {
                        _this.addTextL1 = _this.add.text(673.5, 212, _this.rectAngleLPArray[_this.trackNumber]);
                    }
                    _this.applyingStyle(_this.addTextL1);
                    _this.addTextB1 = _this.add.text(756, 212, _this.rectAngleBPArray[_this.trackNumber]);
                    _this.applyingStyle(_this.addTextB1);// First box
                    _this.clearScreenArray.push(_this.addTextL1);
                    _this.clearScreenArray.push(_this.addTextB1);

                    _this.AnsBox1 = _this.add.image(812, 205, 'textbox4');
                    _this.clearScreenArray.push(_this.AnsBox1);
                    if (2 * (_this.rectAngleLPArray[_this.trackNumber] + _this.rectAngleBPArray[_this.trackNumber]) >= 10) {
                        _this.fanswer = _this.add.text(827, 211, 2 * (_this.rectAngleLPArray[_this.trackNumber] + _this.rectAngleBPArray[_this.trackNumber]));
                    } else {
                        _this.fanswer = _this.add.text(835, 211, 2 * (_this.rectAngleLPArray[_this.trackNumber] + _this.rectAngleBPArray[_this.trackNumber]));
                    }
                    _this.applyingStyle(_this.fanswer);
                    _this.clearScreenArray.push(_this.fanswer);
                    _this.textBox21 = _this.add.image(654, 279, 'textbox2');
                    _this.clearScreenArray.push(_this.textBox21);
                    _this.textBox22 = _this.add.image(734, 279, 'textbox2');
                    _this.clearScreenArray.push(_this.textBox22);

                    if (_this.rectAngleLPArray[_this.trackNumber2] >= 10) {
                        _this.addTextL2 = _this.add.text(666, 293, _this.rectAngleLPArray[_this.trackNumber2]);
                    }
                    else {
                        _this.addTextL2 = _this.add.text(673.5, 293, _this.rectAngleLPArray[_this.trackNumber2]);
                    }
                    _this.applyingStyle(_this.addTextL2);
                    _this.clearScreenArray.push(_this.addTextL2)
                    _this.addTextB2 = _this.add.text(756, 293, _this.rectAngleBPArray[_this.trackNumber2]);
                    _this.applyingStyle(_this.addTextB2);
                    _this.clearScreenArray.push(_this.addTextB2);
                    _this.AnsBox2 = _this.add.image(812, 287, 'textbox4');
                    _this.clearScreenArray.push(_this.AnsBox2);
                    if (2 * (_this.rectAngleLPArray[_this.trackNumber2] + _this.rectAngleBPArray[_this.trackNumber2]) >= 10) {
                        _this.fanswer2 = _this.add.text(828, 293, 2 * (_this.rectAngleLPArray[_this.trackNumber2] + _this.rectAngleBPArray[_this.trackNumber2]));
                    } else {
                        _this.fanswer2 = _this.add.text(835, 293, 2 * (_this.rectAngleLPArray[_this.trackNumber2] + _this.rectAngleBPArray[_this.trackNumber2]));
                    }
                    _this.applyingStyle(_this.fanswer2);
                    _this.clearScreenArray.push(_this.fanswer2);

                    _this.textBox21 = _this.add.image(654, 360, 'textbox2');
                    _this.textBox22 = _this.add.image(734, 360, 'textbox2');
                    _this.clearScreenArray.push(_this.textBox21);
                    _this.clearScreenArray.push(_this.textBox22);
                    if (_this.rectAngleLPArray[_this.trackNumber3] >= 10) {
                        _this.addTextL2 = _this.add.text(666, 372, _this.rectAngleLPArray[_this.trackNumber3]);
                    } else {
                        _this.addTextL2 = _this.add.text(673.5, 372, _this.rectAngleLPArray[_this.trackNumber3]);
                    }
                    _this.applyingStyle(_this.addTextL2);
                    _this.addTextB2 = _this.add.text(756, 372, _this.rectAngleBPArray[_this.trackNumber3]);
                    _this.applyingStyle(_this.addTextB2);
                    _this.clearScreenArray.push(_this.addTextL2);
                    _this.clearScreenArray.push(_this.addTextB2);

                    _this.answer_flag = 2;
                    _this.AnswerBox = _this.add.sprite(812, 364, 'textbox4');
                    _this.clearScreenArray.push(_this.AnswerBox);

                    _this.addNumberPad();
                })
            }
        }
    },

    moveTheTable: function () {
        //* This will display the tables accordibg to the Question (in area)
        if (_this.area_flag == 0) {
            _this.tweenTable = _this.add.tween(_this.tableGroup);
            _this.tweenTable.to({ x: -60, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();

            _this.tweenTable.onComplete.add(function () {
                _this.addsingleColum = _this.add.sprite(798, 110, 'table');
                _this.addsingleColum.frame = 0;
                // _this.addsingleColum.scale.setTo(1,0.98);
                _this.addArea = _this.add.text(830, 140, "A");
                _this.addArea.fill = '#FF0000';

                _this.answer_flag = 0;
                _this.AnswerBox = _this.add.sprite(812, 206, 'textbox4');

                _this.addNumberPad();
            })
        }
        if (_this.area_flag == 1) {
            _this.tweenTable = _this.add.tween(_this.tableGroup);
            _this.tweenTable.to({ x: -60, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();
            _this.tweenTable.onComplete.add(function () {
                _this.tableGroup.destroy();
                console.log("2nd Qq");

                _this.ftable = _this.add.sprite(640, 110, 'table');
                _this.ftable.frame = 5;
                _this.clearScreenArray.push(_this.ftable);
                _this.addArea = _this.add.text(833, 132, "A");
                _this.addArea.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addArea);
                _this.addL = _this.add.text(676, 132, "L");
                _this.addL.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addL);
                _this.addB = _this.add.text(750, 132, "B");
                _this.addB.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addB);

                _this.textBox12 = _this.add.image(654, 200, 'textbox2');
                _this.textBox11 = _this.add.image(734, 200, 'textbox2');
                _this.clearScreenArray.push(_this.textBox12);
                _this.clearScreenArray.push(_this.textBox11);
                if (_this.rectAngleLValArray[_this.trackNumber] >= 10) {
                    _this.addTextL1 = _this.add.text(666, 212, _this.rectAngleLValArray[_this.trackNumber]); //_this.addTextL11
                } else {
                    _this.addTextL1 = _this.add.text(673.5, 212, _this.rectAngleLValArray[_this.trackNumber]); //_this.addTextL11
                }
                _this.applyingStyle(_this.addTextL1);
                _this.addTextB1 = _this.add.text(756, 212, _this.rectAngleBValArray[_this.trackNumber]);//addTextB11
                _this.applyingStyle(_this.addTextB1);// First box
                _this.clearScreenArray.push(_this.addTextL1);
                _this.clearScreenArray.push(_this.addTextB1);

                _this.AnsBox1 = _this.add.image(812, 204, 'textbox4');
                _this.clearScreenArray.push(_this.AnsBox1);
                if (_this.rectAngleLValArray[_this.trackNumber] * _this.rectAngleBValArray[_this.trackNumber] >= 10) {
                    _this.fanswer = _this.add.text(827, 210, _this.rectAngleLValArray[_this.trackNumber] * _this.rectAngleBValArray[_this.trackNumber]);
                } else {
                    _this.fanswer = _this.add.text(835, 210, _this.rectAngleLValArray[_this.trackNumber] * _this.rectAngleBValArray[_this.trackNumber]);
                }
                _this.applyingStyle(_this.fanswer);
                _this.clearScreenArray.push(_this.fanswer);
                _this.addBoxes();

            })
        }
        if (_this.area_flag == 2) {
            _this.tweenTable = _this.add.tween(_this.tableGroup);
            _this.tweenTable.to({ x: -60, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();
            _this.tweenTable.onComplete.add(function () {
                _this.tableGroup.destroy();
                console.log("3rd Qq")

                _this.ftable = _this.add.sprite(640, 110, 'table');
                _this.ftable.frame = 6;
                _this.clearScreenArray.push(_this.ftable);
                _this.addArea = _this.add.text(833, 132, "A");
                _this.addArea.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addArea);
                _this.addL = _this.add.text(676, 132, "L");
                _this.addL.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addL);
                _this.addB = _this.add.text(750, 132, "B");
                _this.addB.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addB);
                _this.textBox12.visible = true;
                _this.textBox11.visible = true;

                _this.textBox12 = _this.add.image(654, 200, 'textbox2');
                _this.textBox11 = _this.add.image(734, 200, 'textbox2');
                _this.clearScreenArray.push(_this.textBox12);
                _this.clearScreenArray.push(_this.textBox11);
                if (_this.rectAngleLValArray[_this.trackNumber] >= 10) {
                    _this.addTextL1 = _this.add.text(666, 212, _this.rectAngleLValArray[_this.trackNumber]);
                } else {
                    _this.addTextL1 = _this.add.text(673.5, 212, _this.rectAngleLValArray[_this.trackNumber]);
                }
                _this.applyingStyle(_this.addTextL1);
                _this.addTextB1 = _this.add.text(756, 212, _this.rectAngleBValArray[_this.trackNumber]);
                _this.applyingStyle(_this.addTextB1);// First box
                _this.clearScreenArray.push(_this.addTextL1);
                _this.clearScreenArray.push(_this.addTextB1);

                _this.AnsBox1 = _this.add.image(812, 205, 'textbox4');
                _this.clearScreenArray.push(_this.AnsBox1);
                if (_this.rectAngleLValArray[_this.trackNumber] * _this.rectAngleBValArray[_this.trackNumber] >= 10) {
                    _this.fanswer = _this.add.text(827, 211, _this.rectAngleLValArray[_this.trackNumber] * _this.rectAngleBValArray[_this.trackNumber]);
                } else {
                    _this.fanswer = _this.add.text(835, 211, _this.rectAngleLValArray[_this.trackNumber] * _this.rectAngleBValArray[_this.trackNumber]);
                }
                _this.applyingStyle(_this.fanswer);
                _this.clearScreenArray.push(_this.fanswer);
                _this.textBox21 = _this.add.image(654, 279, 'textbox2');
                _this.clearScreenArray.push(_this.textBox21);
                _this.textBox22 = _this.add.image(734, 279, 'textbox2');
                _this.clearScreenArray.push(_this.textBox22);
                if (_this.rectAngleLValArray[_this.trackNumber2] >= 10) {
                    _this.addTextL2 = _this.add.text(666, 293, _this.rectAngleLValArray[_this.trackNumber2]);
                } else {
                    _this.addTextL2 = _this.add.text(673.5, 293, _this.rectAngleLValArray[_this.trackNumber2]);
                }
                _this.applyingStyle(_this.addTextL2);
                _this.clearScreenArray.push(_this.addTextL2)
                _this.addTextB2 = _this.add.text(756, 293, _this.rectAngleBValArray[_this.trackNumber2]);
                _this.applyingStyle(_this.addTextB2);
                _this.clearScreenArray.push(_this.addTextB2);
                _this.AnsBox2 = _this.add.image(812, 287, 'textbox4');
                _this.clearScreenArray.push(_this.AnsBox2);
                if (_this.rectAngleLValArray[_this.trackNumber2] * _this.rectAngleBValArray[_this.trackNumber2] >= 10) {
                    _this.fanswer2 = _this.add.text(828, 293, _this.rectAngleLValArray[_this.trackNumber2] * _this.rectAngleBValArray[_this.trackNumber2]);
                } else {
                    _this.fanswer2 = _this.add.text(835, 293, _this.rectAngleLValArray[_this.trackNumber2] * _this.rectAngleBValArray[_this.trackNumber2]);
                }
                _this.applyingStyle(_this.fanswer2);
                _this.clearScreenArray.push(_this.fanswer2);
                _this.addFinalBoxes();
            })
        }
    },

    moveTableSquareP: function () {
        //* This will display the tables accordibg to the Question (in perimeter)
        if (_this.sides_flag == 0) {
            _this.tweenTable = _this.add.tween(_this.tableGroup1);
            _this.tweenTable.to({ x: -60, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();

            _this.tweenTable.onComplete.add(function () {
                _this.addsingleColum = _this.add.sprite(798, 110, 'table');
                _this.addsingleColum.frame = 0;
                // _this.addsingleColum.scale.setTo(1,0.98);
                _this.addArea = _this.add.text(830, 140, "P");
                _this.addArea.fill = '#FF0000';

                _this.answer_flag = 0;
                _this.AnswerBox = _this.add.sprite(812, 205, 'textbox4');

                _this.addNumberPad();
            })
        }
        if (_this.sides_flag == 1) {
            _this.tweenTable = _this.add.tween(_this.tableGroup1);
            _this.tweenTable.to({ x: -60, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();
            _this.tweenTable.onComplete.add(function () {
                _this.tableGroup1.destroy();
                console.log("2nd Qq")

                _this.ftable = _this.add.sprite(640, 110, 'table');
                _this.ftable.frame = 2;
                _this.clearScreenArray.push(_this.ftable);
                _this.addS = _this.add.text(675, 135, "S");
                _this.addS.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addS);
                _this.addA = _this.add.text(754, 135, "P");
                _this.addA.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addA);

                _this.textBox12 = _this.add.image(652.5, 200, 'textbox2');
                _this.clearScreenArray.push(_this.textBox12);

                _this.addTextL1 = _this.add.text(672.5, 211, _this.sidesSquareArray[_this.trackNumber]); //_this.addTextL11
                _this.applyingStyle(_this.addTextL1);
                _this.clearScreenArray.push(_this.addTextL1);

                _this.AnsBox1 = _this.add.image(732, 203, 'textbox4');
                if (4 * _this.sidesSquareArray[_this.trackNumber] >= 10) {
                    _this.fanswer = _this.add.text(748, 210, 4 * _this.sidesSquareArray[_this.trackNumber]);
                }
                else {
                    _this.fanswer = _this.add.text(754, 210, 4 * _this.sidesSquareArray[_this.trackNumber]);
                }
                _this.applyingStyle(_this.fanswer);
                _this.clearScreenArray.push(_this.AnsBox1);
                _this.clearScreenArray.push(_this.fanswer);

                _this.textBox21 = _this.add.image(652.5, 280, 'textbox2');
                _this.clearScreenArray.push(_this.textBox21);

                _this.addTextL2 = _this.add.text(672.5, 292, _this.sidesSquareArray[_this.trackNumber2]);
                _this.applyingStyle(_this.addTextL2);
                _this.clearScreenArray.push(_this.addTextL2);

                _this.answer_flag = 1;
                _this.AnswerBox = _this.add.sprite(732, 283, 'textbox4');
                _this.clearScreenArray.push(_this.AnswerBox);
                _this.addNumberPad();
            })
        }
        if (_this.sides_flag == 2) {
            _this.tweenTable = _this.add.tween(_this.tableGroup1);
            _this.tweenTable.to({ x: -60, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();
            _this.tweenTable.onComplete.add(function () {
                _this.tableGroup1.destroy();
                console.log("3rd Qq")

                _this.ftable = _this.add.sprite(640, 110, 'table');
                _this.ftable.frame = 3;
                _this.clearScreenArray.push(_this.ftable);
                _this.addL = _this.add.text(675, 135, "S");
                _this.addL.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addL);
                _this.addB = _this.add.text(754, 135, "P");
                _this.addB.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addB);

                _this.textBox12 = _this.add.image(652.5, 200, 'textbox2');
                _this.clearScreenArray.push(_this.textBox12);

                _this.addTextL1 = _this.add.text(672.5, 211, _this.sidesSquareArray[_this.trackNumber]);
                _this.applyingStyle(_this.addTextL1);
                _this.clearScreenArray.push(_this.addTextL1);

                _this.AnsBox1 = _this.add.image(732, 203, 'textbox4');
                _this.clearScreenArray.push(_this.AnsBox1);
                if (4 * _this.sidesSquareArray[_this.trackNumber] >= 10) {
                    _this.fanswer = _this.add.text(748, 210, 4 * _this.sidesSquareArray[_this.trackNumber]);
                }
                else {
                    _this.fanswer = _this.add.text(754, 210, 4 * _this.sidesSquareArray[_this.trackNumber]);
                }

                _this.applyingStyle(_this.fanswer);
                _this.clearScreenArray.push(_this.fanswer);

                _this.textBox21 = _this.add.image(652.5, 280, 'textbox2');
                _this.clearScreenArray.push(_this.textBox21);

                _this.addTextL2 = _this.add.text(672.5, 291, _this.sidesSquareArray[_this.trackNumber2]);
                _this.applyingStyle(_this.addTextL2);
                _this.clearScreenArray.push(_this.addTextL2);
                _this.AnsBox2 = _this.add.image(732, 283, 'textbox4');
                _this.clearScreenArray.push(_this.AnsBox2);
                if (4 * _this.sidesSquareArray[_this.trackNumber2] >= 10) {
                    _this.fanswer2 = _this.add.text(748, 291, 4 * _this.sidesSquareArray[_this.trackNumber2]);
                } else {
                    _this.fanswer2 = _this.add.text(754, 291, 4 * _this.sidesSquareArray[_this.trackNumber2]);
                }
                _this.applyingStyle(_this.fanswer2);
                _this.clearScreenArray.push(_this.fanswer2);

                _this.textBox21 = _this.add.image(652.5, 360, 'textbox2');
                _this.clearScreenArray.push(_this.textBox21);

                _this.addTextL2 = _this.add.text(672.5, 371, _this.sidesSquareArray[_this.trackNumber3]);
                _this.applyingStyle(_this.addTextL2);
                _this.clearScreenArray.push(_this.addTextL2);

                _this.answer_flag = 2;
                _this.AnswerBox = _this.add.sprite(732, 363, 'textbox4');
                _this.clearScreenArray.push(_this.AnswerBox);
                _this.addNumberPad();
            })
        }
    },

    moveTableTriangle: function () {
        //* This will display the tables for triangle according to the Question (in perimetr)
        if (_this.triangle_flag == 0) {
            _this.tweenTable = _this.add.tween(_this.tableGroup1);
            _this.tweenTable.to({ x: -50, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();

            _this.tweenTable.onComplete.add(function () {
                _this.addsingleColum = _this.add.sprite(810, 110, 'table');
                _this.addsingleColum.frame = 0;
                // _this.addsingleColum.scale.setTo(1,0.98);
                _this.addArea = _this.add.text(842, 140, "P");
                _this.addArea.fill = '#FF0000';

                _this.answer_flag = 0;
                _this.AnswerBox = _this.add.sprite(822, 205, 'textbox4');
                _this.addNumberPad();
            })
        }
        if (_this.triangle_flag == 1) {
            _this.tweenTable = _this.add.tween(_this.tableGroup1);
            _this.tweenTable.to({ x: -50, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();
            _this.tweenTable.onComplete.add(function () {
                _this.tableGroup1.destroy();
                console.log("2nd Qq")

                _this.ftable = _this.add.sprite(710, 110, 'table');
                _this.ftable.frame = 2;
                _this.clearScreenArray.push(_this.ftable);
                _this.addS = _this.add.text(740, 130, "S");
                _this.addS.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addS);
                _this.addA = _this.add.text(820, 130, "P");
                _this.addA.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addA);

                _this.textBox12 = _this.add.image(722, 200, 'textbox2');
                _this.clearScreenArray.push(_this.textBox12);

                _this.addTextL1 = _this.add.text(742, 211, _this.sidesTArray[_this.trackNumber]); //_this.addTextL11
                _this.applyingStyle(_this.addTextL1);
                _this.clearScreenArray.push(_this.addTextL1);

                _this.AnsBox1 = _this.add.image(804, 204, 'textbox4');
                if (3 * _this.sidesTArray[_this.trackNumber] >= 10) {
                    _this.fanswer = _this.add.text(816, 210, 3 * _this.sidesTArray[_this.trackNumber]);
                }
                else {
                    _this.fanswer = _this.add.text(825, 210, 3 * _this.sidesTArray[_this.trackNumber]);

                }
                _this.applyingStyle(_this.fanswer);
                _this.clearScreenArray.push(_this.AnsBox1);
                _this.clearScreenArray.push(_this.fanswer);

                _this.textBox21 = _this.add.image(722, 280, 'textbox2');
                _this.clearScreenArray.push(_this.textBox21);

                _this.addTextL2 = _this.add.text(742, 292, _this.sidesTArray[_this.trackNumber2]);
                _this.applyingStyle(_this.addTextL2);
                _this.clearScreenArray.push(_this.addTextL2);

                _this.answer_flag = 1;
                _this.AnswerBox = _this.add.sprite(804, 282, 'textbox4');
                _this.clearScreenArray.push(_this.AnswerBox);
                _this.addNumberPad();
            })
        }
        if (_this.triangle_flag == 2) {
            _this.tweenTable = _this.add.tween(_this.tableGroup1);
            _this.tweenTable.to({ x: -50, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();
            _this.tweenTable.onComplete.add(function () {
                _this.tableGroup1.destroy();
                console.log("3rd Qq")

                _this.ftable = _this.add.sprite(710, 110, 'table');
                _this.ftable.frame = 3;
                _this.clearScreenArray.push(_this.ftable);
                _this.addL = _this.add.text(738, 130, "S");
                _this.addL.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addL);
                _this.addB = _this.add.text(816, 130, "P");
                _this.addB.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addB);

                _this.textBox12 = _this.add.image(722, 200, 'textbox2');
                _this.clearScreenArray.push(_this.textBox12);

                _this.addTextL1 = _this.add.text(742, 211, _this.sidesTArray[_this.trackNumber]);
                _this.applyingStyle(_this.addTextL1);
                _this.clearScreenArray.push(_this.addTextL1);

                _this.AnsBox1 = _this.add.image(804, 204, 'textbox4');
                _this.clearScreenArray.push(_this.AnsBox1);
                if (3 * _this.sidesTArray[_this.trackNumber] >= 10) {
                    _this.fanswer = _this.add.text(817, 210, 3 * _this.sidesTArray[_this.trackNumber]);
                } else {
                    _this.fanswer = _this.add.text(825, 210, 3 * _this.sidesTArray[_this.trackNumber]);
                }
                _this.applyingStyle(_this.fanswer);
                _this.clearScreenArray.push(_this.fanswer);

                _this.textBox21 = _this.add.image(720, 280, 'textbox2');
                _this.clearScreenArray.push(_this.textBox21);

                _this.addTextL2 = _this.add.text(740, 292, _this.sidesTArray[_this.trackNumber2]);
                _this.applyingStyle(_this.addTextL2);
                _this.clearScreenArray.push(_this.addTextL2);
                _this.AnsBox2 = _this.add.image(804, 284, 'textbox4');
                _this.clearScreenArray.push(_this.AnsBox2);
                if (3 * _this.sidesTArray[_this.trackNumber2] >= 10) {
                    _this.fanswer2 = _this.add.text(817, 293, 3 * _this.sidesTArray[_this.trackNumber2]);
                } else {
                    _this.fanswer2 = _this.add.text(825, 293, 3 * _this.sidesTArray[_this.trackNumber2]);
                }
                _this.applyingStyle(_this.fanswer2);
                _this.clearScreenArray.push(_this.fanswer2);

                _this.textBox21 = _this.add.image(720, 360, 'textbox2');
                _this.clearScreenArray.push(_this.textBox21);

                _this.addTextL2 = _this.add.text(740, 371, _this.sidesTArray[_this.trackNumber3]);
                _this.applyingStyle(_this.addTextL2);
                _this.clearScreenArray.push(_this.addTextL2);

                _this.answer_flag = 2;
                _this.AnswerBox = _this.add.sprite(804, 362, 'textbox4');
                _this.clearScreenArray.push(_this.AnswerBox);
                _this.addNumberPad();
            })
        }
    },

    moveTableSquare: function () {
        //*This will display the tables for square according to the Question (in area)
        if (_this.sides_flag == 0) {
            _this.tweenTable = _this.add.tween(_this.tableGroup);
            _this.tweenTable.to({ x: -60, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();

            _this.tweenTable.onComplete.add(function () {
                _this.addsingleColum = _this.add.sprite(798, 110, 'table');
                _this.addsingleColum.frame = 0;
                _this.addArea = _this.add.text(830, 140, "A");
                _this.addArea.fill = '#FF0000';
                _this.answer_flag = 0;
                _this.AnswerBox = _this.add.sprite(812, 205, 'textbox4');
                _this.addNumberPad();
            })
        }
        if (_this.sides_flag == 1) {
            _this.tweenTable = _this.add.tween(_this.tableGroup);
            _this.tweenTable.to({ x: -60, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();
            _this.tweenTable.onComplete.add(function () {
                _this.tableGroup.destroy();
                console.log("2nd Qq")

                _this.ftable = _this.add.sprite(640, 110, 'table');
                _this.ftable.frame = 2;
                _this.clearScreenArray.push(_this.ftable);
                _this.addS = _this.add.text(675, 135, "S");
                _this.addS.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addS);
                _this.addA = _this.add.text(754, 135, "A");
                _this.addA.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addA);

                _this.textBox12 = _this.add.image(652.5, 200, 'textbox2');
                _this.clearScreenArray.push(_this.textBox12);

                _this.addTextL1 = _this.add.text(672.5, 211, _this.sidesArray[_this.trackNumber]); //_this.addTextL11
                _this.applyingStyle(_this.addTextL1);
                _this.clearScreenArray.push(_this.addTextL1);

                _this.AnsBox1 = _this.add.image(732, 203, 'textbox4');
                if (_this.sidesArray[_this.trackNumber] * _this.sidesArray[_this.trackNumber] >= 10) {
                    _this.fanswer = _this.add.text(748, 210, _this.sidesArray[_this.trackNumber] * _this.sidesArray[_this.trackNumber]);
                } else {
                    _this.fanswer = _this.add.text(754, 210, _this.sidesArray[_this.trackNumber] * _this.sidesArray[_this.trackNumber]);

                }
                _this.applyingStyle(_this.fanswer);
                _this.clearScreenArray.push(_this.AnsBox1);
                _this.clearScreenArray.push(_this.fanswer);

                _this.textBox21 = _this.add.image(652.5, 280, 'textbox2');
                _this.clearScreenArray.push(_this.textBox21);

                _this.addTextL2 = _this.add.text(672, 292, _this.sidesArray[_this.trackNumber2]);
                _this.applyingStyle(_this.addTextL2);
                _this.clearScreenArray.push(_this.addTextL2);

                _this.answer_flag = 1;
                _this.AnswerBox = _this.add.sprite(732, 283, 'textbox4');
                _this.clearScreenArray.push(_this.AnswerBox);
                _this.addNumberPad();
            })
        }
        if (_this.sides_flag == 2) {
            _this.tweenTable = _this.add.tween(_this.tableGroup);
            _this.tweenTable.to({ x: -60, y: 50 }, 500, 'Linear', true, 0);
            _this.tweenTable.start();
            _this.tweenTable.onComplete.add(function () {
                _this.tableGroup.destroy();
                console.log("3rd Qq")

                _this.ftable = _this.add.sprite(640, 110, 'table');
                _this.ftable.frame = 3;
                _this.clearScreenArray.push(_this.ftable);
                _this.addL = _this.add.text(675, 135, "S");
                _this.addL.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addL);
                _this.addB = _this.add.text(754, 135, "A");
                _this.addB.fill = '#FF0000';
                _this.clearScreenArray.push(_this.addB);

                _this.textBox12 = _this.add.image(652.2, 200, 'textbox2');
                _this.clearScreenArray.push(_this.textBox12);

                _this.addTextL1 = _this.add.text(672.5, 211, _this.sidesArray[_this.trackNumber]);
                _this.applyingStyle(_this.addTextL1);
                _this.clearScreenArray.push(_this.addTextL1);

                _this.AnsBox1 = _this.add.image(732, 203, 'textbox4');
                _this.clearScreenArray.push(_this.AnsBox1);
                if (_this.sidesArray[_this.trackNumber] * _this.sidesArray[_this.trackNumber] >= 10) {
                    _this.fanswer = _this.add.text(748, 210, _this.sidesArray[_this.trackNumber] * _this.sidesArray[_this.trackNumber]);
                } else {
                    _this.fanswer = _this.add.text(754, 210, _this.sidesArray[_this.trackNumber] * _this.sidesArray[_this.trackNumber]);
                }
                _this.applyingStyle(_this.fanswer);
                _this.clearScreenArray.push(_this.fanswer);

                _this.textBox21 = _this.add.image(652.5, 280, 'textbox2');
                _this.clearScreenArray.push(_this.textBox21);

                _this.addTextL2 = _this.add.text(672.5, 291, _this.sidesArray[_this.trackNumber2]);
                _this.applyingStyle(_this.addTextL2);
                _this.clearScreenArray.push(_this.addTextL2);
                _this.AnsBox2 = _this.add.image(734, 282, 'textbox4');
                _this.clearScreenArray.push(_this.AnsBox2);
                if (_this.sidesArray[_this.trackNumber2] * _this.sidesArray[_this.trackNumber2] >= 10) {
                    _this.fanswer2 = _this.add.text(748, 291, _this.sidesArray[_this.trackNumber2] * _this.sidesArray[_this.trackNumber2]);
                } else {
                    _this.fanswer2 = _this.add.text(754, 291, _this.sidesArray[_this.trackNumber2] * _this.sidesArray[_this.trackNumber2]);

                }
                _this.applyingStyle(_this.fanswer2);
                _this.clearScreenArray.push(_this.fanswer2);

                _this.textBox21 = _this.add.image(652.5, 360, 'textbox2');
                _this.clearScreenArray.push(_this.textBox21);

                _this.addTextL2 = _this.add.text(672.5, 371, _this.sidesArray[_this.trackNumber3]);
                _this.applyingStyle(_this.addTextL2);
                _this.clearScreenArray.push(_this.addTextL2);

                _this.answer_flag = 2;
                _this.AnswerBox = _this.add.sprite(732, 363, 'textbox4');
                _this.clearScreenArray.push(_this.AnswerBox);
                _this.addNumberPad();
            })
        }
    },

    addBoxes: function () //* add boxes to enter the answer in area
    {
        _this.textBox21 = _this.add.image(654, 279, 'textbox2');
        _this.textBox22 = _this.add.image(734, 279, 'textbox2');
        _this.clearScreenArray.push(_this.textBox21);
        _this.clearScreenArray.push(_this.textBox22);

        if (_this.rectAngleLValArray[_this.trackNumber2] < 10) {
            _this.addTextL2 = _this.add.text(673.5, 293, _this.rectAngleLValArray[_this.trackNumber2]);
        }
        else {
            _this.addTextL2 = _this.add.text(666, 293, _this.rectAngleLValArray[_this.trackNumber2]);
        }
        _this.applyingStyle(_this.addTextL2);
        _this.addTextB2 = _this.add.text(756, 293, _this.rectAngleBValArray[_this.trackNumber2]);
        _this.applyingStyle(_this.addTextB2);
        _this.clearScreenArray.push(_this.addTextL2);
        _this.clearScreenArray.push(_this.addTextB2);

        _this.answer_flag = 1;
        _this.AnswerBox = _this.add.sprite(812, 286, 'textbox4');
        _this.clearScreenArray.push(_this.AnswerBox);
        _this.addNumberPad();
    },

    addFinalBoxes: function () //* add boxes to enter the answer in area
    {
        _this.textBox21 = _this.add.image(654, 360, 'textbox2');
        _this.textBox22 = _this.add.image(734, 360, 'textbox2');
        _this.clearScreenArray.push(_this.textBox21);
        _this.clearScreenArray.push(_this.textBox22);
        if (_this.rectAngleLValArray[_this.trackNumber3] >= 10) {
            _this.addTextL2 = _this.add.text(666, 372, _this.rectAngleLValArray[_this.trackNumber3]);
        } else {
            _this.addTextL2 = _this.add.text(673.5, 372, _this.rectAngleLValArray[_this.trackNumber3]);

        }
        _this.applyingStyle(_this.addTextL2);
        _this.addTextB2 = _this.add.text(756, 372, _this.rectAngleBValArray[_this.trackNumber3]);
        _this.applyingStyle(_this.addTextB2);
        _this.clearScreenArray.push(_this.addTextL2);
        _this.clearScreenArray.push(_this.addTextB2);

        _this.answer_flag = 2;
        _this.AnswerBox = _this.add.sprite(812, 364, 'textbox4');
        _this.clearScreenArray.push(_this.AnswerBox);
        _this.addNumberPad();
    },

    stopVoice: function () {

        if (_this.Ask_Question1) {
            _this.Ask_Question1.pause();
            _this.Ask_Question1 = null;
            //audiosrc = null;
        } else if (_this.Ask_Question2) {
            _this.Ask_Question2.pause();
            _this.Ask_Question2 = null;
            //audiosrc = null;
        } else if (_this.Ask_Question3) {
            _this.Ask_Question3.pause();
            _this.Ask_Question3 = null;
            //audiosrc = null;
        } else if (_this.Ask_Question4) {
            _this.Ask_Question4.pause();
            _this.Ask_Question4 = null;
            //audiosrc = null;
        }
        else if (_this.Ask_Question5) {
            _this.Ask_Question5.pause();
            _this.Ask_Question5 = null;
            //audiosrc = null;
        }
        else if (_this.Ask_Question6) {
            _this.Ask_Question6.pause();
            _this.Ask_Question6 = null;
            //audiosrc = null;
        }
        else if (_this.Ask_Question7) {
            _this.Ask_Question7.pause();
            _this.Ask_Question7 = null;
            //audiosrc = null;
        }
        else if (_this.Ask_Question8) {
            _this.Ask_Question8.pause();
            _this.Ask_Question8 = null;
            //audiosrc = null;
        }
        else if (_this.Ask_Question9) {
            _this.Ask_Question9.pause();
            _this.Ask_Question9 = null;
            //audiosrc = null;
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
        _this.samplevar = target.name;
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
            _this.enterTxt = _this.add.text(21, 7, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
        else
            _this.enterTxt = _this.add.text(13.5, 7, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
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

    rightbtnClicked1: function (target) //* validating area and perimeter accoring to the question
    {
        if (_this.gmpar_flag == 0) {
            if (_this.shapesArray[_this.trackCount] == 1) {
                console.log(target.name);
                _this.validatePRect();
            }
            else if (_this.shapesArray[_this.trackCount] == 2) {
                console.log(target.name);
                _this.validatePSquare();
            }
            else {
                console.log(target.name);
                _this.validateTriangleP();
            }
            _this.audioTrack++;
        }
        else if (_this.gmpar_flag == 1) {
            if (_this.decideAreaArray[_this.trackCount] == 1) {
                console.log(target.name);
                console.log("RECtttt")
                _this.validateRectangle();
            }
            else if (_this.decideAreaArray[_this.trackCount] == 2) {
                console.log(target.name);
                console.log("Squareee")
                _this.validateSquare();
            }
            _this.limit++;
        }
    },

    validatePRect: function ()  //* validating perimeter accoring to the question
    {
        console.log("inside rightbtn");
        _this.clickSound.play();

        if (_this.answer_flag == 0) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 2 * (_this.rectAngleLPArray[_this.trackLB] + _this.rectAngleBPArray[_this.trackLB])) {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.Question_flag = 0;
                _this.numpad = 0;
                _this.eraseScreen();
                _this.trackNumber = _this.trackLB;
                console.log(_this.trackNumber);
                _this.trackLB++;
                console.log(_this.trackLB)
                _this.trackNumber2 = _this.trackLB;
                _this.commonGroup1.destroy();
                _this.tableGroup1.destroy();

                _this.addArea.visible = false;
                _this.addsingleColum.visible = false;
                _this.AnswerBox.visible = false;
                _this.area_flag = 1;
                //  _this.tickBtn =0;
                _this.clearScreenArray.forEach(element => {
                    element.destroy();
                })
                _this.displayPerimeterQs();
            }
            else {
                _this.Question_flag = 1;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
        else if (_this.answer_flag == 1) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 2 * (_this.rectAngleLPArray[_this.trackLB] + _this.rectAngleBPArray[_this.trackLB])) {
                _this.counterCelebrationSound.play();
                _this.commonGroup1.destroy();
                _this.numGroup.destroy();
                _this.numpad = 0;
                _this.Question_flag = 0;
                // _this.tickBtn =0;
                _this.eraseScreen();
                _this.trackLB++;
                _this.trackNumber3 = _this.trackLB;
                _this.clearScreenArray.forEach(element => {
                    element.destroy();
                })
                _this.area_flag = 2;
                _this.displayPerimeterQs();
            }
            else {
                _this.Question_flag = 1;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
        else if (_this.answer_flag == 2) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 2 * (_this.rectAngleLPArray[_this.trackLB] + _this.rectAngleBPArray[_this.trackLB])) {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.numpad = 0;
                _this.Question_flag = 0;
                _this.eraseScreen();
                _this.trackLB = 0;
                _this.commonGroup1.destroy();
                _this.tableGroup1.destroy();
                _this.area_flag = 0;
                _this.clearScreenArray.forEach(element => {
                    element.destroy();
                })
                _this.displayMCQRect();
            }
            else {
                _this.Question_flag = 1;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
    },

    validatePSquare: function ()  //* validating  perimeter accoring to the question
    {
        if (_this.answer_flag == 0) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 4 * _this.sidesSquareArray[_this.trackS]) {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.numpad = 0;
                _this.Question_flag = 0;
                //_this.tickBtn =0;
                _this.eraseScreen();
                _this.trackNumber = _this.trackS;
                console.log(_this.trackNumber)
                _this.trackS++;
                console.log(_this.trackS)
                _this.trackNumber2 = _this.trackS;
                _this.commonGroup1.destroy();
                _this.tableGroup1.destroy();
                _this.addArea.visible = false;
                _this.addsingleColum.visible = false;
                _this.AnswerBox.visible = false;
                _this.sides_flag = 1;
                _this.clearScreenArray.forEach(element => {
                    element.destroy();
                })
                _this.displayPerimeterQs();
            }
            else {
                _this.Question_flag = 1;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
        else if (_this.answer_flag == 1) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 4 * _this.sidesSquareArray[_this.trackS]) {
                _this.counterCelebrationSound.play();
                _this.commonGroup1.destroy();
                _this.numGroup.destroy();
                _this.numpad = 0;
                _this.Question_flag = 0;
                //_this.tickBtn =0;
                _this.eraseScreen();
                _this.trackS++;
                _this.trackNumber3 = _this.trackS;
                _this.clearScreenArray.forEach(element => {
                    element.destroy();
                })
                _this.sides_flag = 2;
                _this.displayPerimeterQs();
            }
            else {
                _this.Question_flag = 1;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
        else if (_this.answer_flag == 2) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 4 * _this.sidesSquareArray[_this.trackS]) {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.numpad = 0;
                _this.Question_flag = 0;
                _this.eraseScreen();
                _this.trackS = 0;
                _this.commonGroup1.destroy();
                _this.tableGroup1.destroy();
                //_this.trackS ++;
                _this.sides_flag = 0;
                _this.clearScreenArray.forEach(element => {
                    element.destroy();
                })
                _this.displayMCQSqaure();
            }
            else {
                _this.Question_flag = 1;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
    },

    validateTriangleP: function ()  //* validating triangle perimeter accoring to the question
    {
        if (_this.answer_flag == 0) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 3 * _this.sidesTArray[_this.trackTR]) {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.numpad = 0;
                _this.Question_flag = 0;
                // _this.tickBtn =0;
                _this.eraseScreen();
                _this.trackNumber = _this.trackTR;
                console.log(_this.trackNumber)
                _this.trackTR++;
                console.log(_this.trackTR)
                _this.trackNumber2 = _this.trackTR;
                _this.commonGroup1.destroy();
                _this.tableGroup1.destroy();
                _this.addArea.visible = false;
                _this.addsingleColum.visible = false;
                _this.AnswerBox.visible = false;
                _this.triangle_flag = 1;
                _this.displayPerimeterQs();
            }
            else {
                _this.Question_flag = 1;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
        else if (_this.answer_flag == 1) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 3 * _this.sidesTArray[_this.trackTR]) {
                _this.counterCelebrationSound.play();
                _this.commonGroup1.destroy();
                _this.numGroup.destroy();
                _this.numpad = 0;
                _this.Question_flag = 0;
                // _this.tickBtn =0;
                _this.eraseScreen();
                _this.trackTR++;
                _this.trackNumber3 = _this.trackTR;
                _this.clearScreenArray.forEach(element => {
                    element.destroy();
                })
                _this.triangle_flag = 2;
                _this.displayPerimeterQs();
            }
            else {
                _this.Question_flag = 1;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
        else if (_this.answer_flag == 2) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 3 * _this.sidesTArray[_this.trackTR]) {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.numpad = 0;
                _this.Question_flag = 0;
                _this.eraseScreen();
                _this.trackTR++
                _this.commonGroup1.destroy();
                _this.tableGroup1.destroy();
                _this.triangle_flag = 0;
                _this.clearScreenArray.forEach(element => {
                    element.destroy();
                })
                _this.displayMCQSqaure();
            }
            else {
                _this.Question_flag = 1;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
    },

    validateRectangle: function ()  //* validating area accoring to the question
    {
        console.log("inside rightbtn");
        _this.clickSound.play();

        if (_this.answer_flag == 0) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.rectAngleLValArray[_this.trackLB] * _this.rectAngleBValArray[_this.trackLB]) {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.numpad = 0;
                //_this.tickBtn2 =0;
                _this.Question_flag = 5;
                _this.eraseScreen();
                _this.trackNumber = _this.trackLB;
                console.log(_this.trackNumber)
                _this.trackLB++;
                console.log(_this.trackLB)
                _this.trackNumber2 = _this.trackLB;
                _this.asnswer1 = _this.rectAngleLValArray[_this.trackLB] * _this.rectAngleBValArray[_this.trackLB];
                _this.commonGroup.destroy();
                _this.tableGroup.destroy();

                _this.addArea.visible = false;
                _this.addsingleColum.visible = false;
                _this.AnswerBox.visible = false;
                _this.area_flag = 1;
                _this.displayInitialScreen();
            }
            else {
                _this.Question_flag = 6;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
        else if (_this.answer_flag == 1) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.rectAngleLValArray[_this.trackLB] * _this.rectAngleBValArray[_this.trackLB]) {
                _this.counterCelebrationSound.play();
                _this.commonGroup.destroy();
                _this.numGroup.destroy();
                _this.numpad = 0;
                //_this.tickBtn2 =0;
                _this.Question_flag = 5;
                _this.eraseScreen();
                _this.trackLB++;
                _this.trackNumber3 = _this.trackLB;
                _this.clearScreenArray.forEach(element => {
                    element.destroy();
                })
                _this.area_flag = 2;
                _this.displayInitialScreen();
            }
            else {
                _this.Question_flag = 6;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
        else if (_this.answer_flag == 2) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.rectAngleLValArray[_this.trackLB] * _this.rectAngleBValArray[_this.trackLB]) {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.numpad = 0;
                _this.Question_flag = 5;
                _this.eraseScreen();
                _this.trackLB++
                _this.commonGroup.destroy();
                _this.tableGroup.destroy();
                _this.area_flag = 0;
                if (_this.trackLB >= 6) {
                    _this.trackLB = 0;
                }
                _this.clearScreenArray.forEach(element => {
                    element.destroy();
                })
                _this.displayMCQRect();
            }
            else {
                _this.Question_flag = 6;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
    },

    validateSquare: function ()  //* validating area accoring to the question
    {
        console.log("inside rightbtn");
        _this.clickSound.play();

        if (_this.answer_flag == 0) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.sidesArray[_this.trackS] * _this.sidesArray[_this.trackS]) {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.numpad = 0;

                _this.Question_flag = 5;
                _this.eraseScreen();
                _this.trackNumber = _this.trackS;
                console.log(_this.trackNumber)
                _this.trackS++;
                console.log(_this.trackS)
                _this.trackNumber2 = _this.trackS;
                _this.commonGroup.destroy();
                _this.tableGroup.destroy();
                _this.addArea.visible = false;
                _this.addsingleColum.visible = false;
                _this.AnswerBox.visible = false;
                _this.sides_flag = 1;
                _this.displayInitialScreen2();
            }
            else {
                _this.Question_flag = 6;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
        else if (_this.answer_flag == 1) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.sidesArray[_this.trackS] * _this.sidesArray[_this.trackS]) {
                _this.counterCelebrationSound.play();
                _this.commonGroup.destroy();
                _this.numGroup.destroy();
                _this.numpad = 0;
                _this.Question_flag = 5;
                _this.eraseScreen();
                _this.trackS++;
                _this.trackNumber3 = _this.trackS;
                _this.clearScreenArray.forEach(element => {
                    element.destroy();
                })
                _this.sides_flag = 2;
                _this.displayInitialScreen2();
            }
            else {
                _this.Question_flag = 6;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
        else if (_this.answer_flag == 2) {
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.sidesArray[_this.trackS] * _this.sidesArray[_this.trackS]) {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.numpad = 0;
                _this.Question_flag = 5;
                _this.eraseScreen();
                _this.trackS++
                _this.commonGroup.destroy();
                _this.tableGroup.destroy();
                _this.trackS++;
                _this.sides_flag = 0;
                _this.clearScreenArray.forEach(element => {
                    element.destroy();
                })
                _this.displayMCQSqaure();
            }
            else {
                _this.Question_flag = 6;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
    },

    displayTable: function () {
        //* Display table for Rectangle shape question in MCQ screen 
        _this.ftable = _this.add.sprite(680, 80, 'table');
        _this.ftable.frame = 6;
        _this.ftable.scale.setTo(0.9, 0.8);
        _this.clearScreenArray.push(_this.ftable);
        _this.addArea = _this.add.text(849, 95, "A");
        _this.addArea.fill = '#FF0000';
        _this.clearScreenArray.push(_this.addArea);
        _this.addL = _this.add.text(708, 95, "L");
        _this.addL.fill = '#FF0000';
        _this.clearScreenArray.push(_this.addL);
        _this.addB = _this.add.text(778, 95, "B");
        _this.addB.fill = '#FF0000';
        _this.clearScreenArray.push(_this.addB);

        _this.textBox12 = _this.add.image(690, 145, 'textbox2');
        _this.textBox11 = _this.add.image(761, 145, 'textbox2');
        _this.clearScreenArray.push(_this.textBox12);
        _this.clearScreenArray.push(_this.textBox11);
        if (_this.rectAngleLValArray[_this.trackNumber] >= 10) {
            _this.addTextL1 = _this.add.text(702, 156, _this.rectAngleLValArray[_this.trackNumber]);
        } else {
            _this.addTextL1 = _this.add.text(709, 156, _this.rectAngleLValArray[_this.trackNumber]);

        }
        _this.applyingStyle(_this.addTextL1);
        _this.addTextB1 = _this.add.text(780, 156, _this.rectAngleBValArray[_this.trackNumber]);
        _this.applyingStyle(_this.addTextB1);// First box
        _this.clearScreenArray.push(_this.addTextL1);
        _this.clearScreenArray.push(_this.addTextB1);

        _this.AnsBox1 = _this.add.image(834, 153, 'textbox4');
        _this.AnsBox1.scale.setTo(0.9, 0.9);
        if (_this.rectAngleLValArray[_this.trackNumber] * _this.rectAngleBValArray[_this.trackNumber] >= 10) {
            _this.fanswer = _this.add.text(845, 158, _this.rectAngleLValArray[_this.trackNumber] * _this.rectAngleBValArray[_this.trackNumber]);
        } else {
            _this.fanswer = _this.add.text(850, 158, _this.rectAngleLValArray[_this.trackNumber] * _this.rectAngleBValArray[_this.trackNumber]);

        }
        _this.applyingStyle(_this.fanswer);
        _this.clearScreenArray.push(_this.AnsBox1);
        _this.clearScreenArray.push(_this.fanswer);
        _this.textBox21 = _this.add.image(690, 210, 'textbox2');
        _this.textBox22 = _this.add.image(761, 210, 'textbox2');
        _this.clearScreenArray.push(_this.textBox21);
        _this.clearScreenArray.push(_this.textBox22);
        if (_this.rectAngleLValArray[_this.trackNumber2] >= 10) {
            _this.addTextL2 = _this.add.text(702, 221, _this.rectAngleLValArray[_this.trackNumber2]);
        } else {
            _this.addTextL2 = _this.add.text(709, 221, _this.rectAngleLValArray[_this.trackNumber2]);

        }
        _this.applyingStyle(_this.addTextL2);
        _this.addTextB2 = _this.add.text(780, 221, _this.rectAngleBValArray[_this.trackNumber2]);
        _this.applyingStyle(_this.addTextB2);
        _this.AnsBox2 = _this.add.image(834, 217, 'textbox4');
        _this.AnsBox2.scale.setTo(0.9, 0.9);
        if (_this.rectAngleLValArray[_this.trackNumber2] * _this.rectAngleBValArray[_this.trackNumber2]) {
            _this.fanswer2 = _this.add.text(845, 223, _this.rectAngleLValArray[_this.trackNumber2] * _this.rectAngleBValArray[_this.trackNumber2]);
        } else {
            _this.fanswer2 = _this.add.text(850, 223, _this.rectAngleLValArray[_this.trackNumber2] * _this.rectAngleBValArray[_this.trackNumber2]);
        }
        _this.applyingStyle(_this.fanswer2);
        _this.clearScreenArray.push(_this.AnsBox2);
        _this.clearScreenArray.push(_this.fanswer2);
        _this.clearScreenArray.push(_this.addTextL2);
        _this.clearScreenArray.push(_this.addTextB2);

        _this.textBox21 = _this.add.image(690, 273, 'textbox2');
        _this.textBox22 = _this.add.image(761, 273, 'textbox2');
        _this.clearScreenArray.push(_this.textBox21);
        _this.clearScreenArray.push(_this.textBox22);
        if (_this.rectAngleLValArray[_this.trackNumber3] >= 10) {
            _this.addTextL2 = _this.add.text(702, 285, _this.rectAngleLValArray[_this.trackNumber3]);
        } else {
            _this.addTextL2 = _this.add.text(709, 285, _this.rectAngleLValArray[_this.trackNumber3]);
        }
        _this.applyingStyle(_this.addTextL2);
        _this.clearScreenArray.push(_this.addTextL2);
        _this.addTextB2 = _this.add.text(780, 285, _this.rectAngleBValArray[_this.trackNumber3]);
        _this.applyingStyle(_this.addTextB2);
        _this.clearScreenArray.push(_this.addTextB2);
        _this.AnswerBox3 = _this.add.sprite(834, 280, 'textbox4');
        _this.AnswerBox3.scale.setTo(0.9, 0.9);
        _this.clearScreenArray.push(_this.AnswerBox3);
        if (_this.rectAngleLValArray[_this.trackNumber3] * _this.rectAngleBValArray[_this.trackNumber3] >= 10) {
            _this.fanswer3 = _this.add.text(845, 286, _this.rectAngleLValArray[_this.trackNumber3] * _this.rectAngleBValArray[_this.trackNumber3]);
        } else {
            _this.fanswer3 = _this.add.text(850, 286, _this.rectAngleLValArray[_this.trackNumber3] * _this.rectAngleBValArray[_this.trackNumber3]);
        }
        _this.applyingStyle(_this.fanswer3);
        _this.clearScreenArray.push(_this.fanswer3);
    },

    displayTablePRect: function () {
        //* Display table for Rectangle shape question in MCQ screen (perimeter)
        _this.ftable = _this.add.sprite(680, 80, 'table');
        _this.ftable.frame = 6;
        _this.ftable.scale.setTo(0.9, 0.8);
        _this.clearScreenArray.push(_this.ftable);
        _this.addArea = _this.add.text(849, 95, "P");
        _this.addArea.fill = '#FF0000';
        _this.clearScreenArray.push(_this.addArea);
        _this.addL = _this.add.text(708, 95, "L");
        _this.addL.fill = '#FF0000';
        _this.clearScreenArray.push(_this.addL);
        _this.addB = _this.add.text(778, 95, "B");
        _this.addB.fill = '#FF0000';
        _this.clearScreenArray.push(_this.addB);

        _this.textBox12 = _this.add.image(690, 145, 'textbox2');
        _this.textBox11 = _this.add.image(761, 145, 'textbox2');
        _this.clearScreenArray.push(_this.textBox12);
        _this.clearScreenArray.push(_this.textBox11);
        if (_this.rectAngleLPArray[_this.trackNumber] >= 10) {
            _this.addTextL1 = _this.add.text(702, 156, _this.rectAngleLPArray[_this.trackNumber]);
        } else {
            _this.addTextL1 = _this.add.text(709, 156, _this.rectAngleLPArray[_this.trackNumber]);
        }
        _this.applyingStyle(_this.addTextL1);
        _this.addTextB1 = _this.add.text(780, 156, _this.rectAngleBPArray[_this.trackNumber]);
        _this.applyingStyle(_this.addTextB1);// First box
        _this.clearScreenArray.push(_this.addTextL1);
        _this.clearScreenArray.push(_this.addTextB1);

        _this.AnsBox1 = _this.add.image(834, 153, 'textbox4');
        _this.AnsBox1.scale.setTo(0.9, 0.9);
        if (2 * (_this.rectAngleLPArray[_this.trackNumber] + _this.rectAngleBPArray[_this.trackNumber]) >= 10) {
            _this.fanswer = _this.add.text(845, 158, 2 * (_this.rectAngleLPArray[_this.trackNumber] + _this.rectAngleBPArray[_this.trackNumber]));
        } else {
            _this.fanswer = _this.add.text(850, 158, 2 * (_this.rectAngleLPArray[_this.trackNumber] + _this.rectAngleBPArray[_this.trackNumber]));
        }
        _this.applyingStyle(_this.fanswer);
        _this.clearScreenArray.push(_this.AnsBox1);
        _this.clearScreenArray.push(_this.fanswer);
        _this.textBox21 = _this.add.image(690, 210, 'textbox2');
        _this.textBox22 = _this.add.image(761, 210, 'textbox2');
        _this.clearScreenArray.push(_this.textBox21);
        _this.clearScreenArray.push(_this.textBox22);
        if (_this.rectAngleLPArray[_this.trackNumber2] >= 10) {
            _this.addTextL2 = _this.add.text(702, 221, _this.rectAngleLPArray[_this.trackNumber2]);
        } else {
            _this.addTextL2 = _this.add.text(709, 221, _this.rectAngleLPArray[_this.trackNumber2]);
        }
        _this.applyingStyle(_this.addTextL2);
        _this.addTextB2 = _this.add.text(780, 221, _this.rectAngleBPArray[_this.trackNumber2]);
        _this.applyingStyle(_this.addTextB2);
        _this.AnsBox2 = _this.add.image(834, 217, 'textbox4');
        _this.AnsBox2.scale.setTo(0.9, 0.9);
        if (2 * (_this.rectAngleLPArray[_this.trackNumber2] + _this.rectAngleBPArray[_this.trackNumber2]) >= 10) {
            _this.fanswer2 = _this.add.text(845, 223, 2 * (_this.rectAngleLPArray[_this.trackNumber2] + _this.rectAngleBPArray[_this.trackNumber2]));
        } else {
            _this.fanswer2 = _this.add.text(850, 223, 2 * (_this.rectAngleLPArray[_this.trackNumber2] + _this.rectAngleBPArray[_this.trackNumber2]));
        }
        _this.applyingStyle(_this.fanswer2);
        _this.clearScreenArray.push(_this.AnsBox2);
        _this.clearScreenArray.push(_this.fanswer2);
        _this.clearScreenArray.push(_this.addTextL2);
        _this.clearScreenArray.push(_this.addTextB2);

        _this.textBox21 = _this.add.image(690, 273, 'textbox2');
        _this.textBox22 = _this.add.image(761, 273, 'textbox2');
        _this.clearScreenArray.push(_this.textBox21);
        _this.clearScreenArray.push(_this.textBox22);
        if (_this.rectAngleLPArray[_this.trackNumber3] >= 10) {
            _this.addTextL2 = _this.add.text(702, 285, _this.rectAngleLPArray[_this.trackNumber3]);
        } else {
            _this.addTextL2 = _this.add.text(709, 285, _this.rectAngleLPArray[_this.trackNumber3]);
        }
        _this.applyingStyle(_this.addTextL2);
        _this.clearScreenArray.push(_this.addTextL2);
        _this.addTextB2 = _this.add.text(780, 285, _this.rectAngleBPArray[_this.trackNumber3]);
        _this.applyingStyle(_this.addTextB2);
        _this.clearScreenArray.push(_this.addTextB2);

        _this.AnswerBox3 = _this.add.sprite(834, 280, 'textbox4');
        _this.AnswerBox3.scale.setTo(0.9, 0.9);
        _this.clearScreenArray.push(_this.AnswerBox3);
        if (2 * (_this.rectAngleLPArray[_this.trackNumber3] + _this.rectAngleBPArray[_this.trackNumber3]) >= 10) {
            _this.fanswer3 = _this.add.text(845, 286, 2 * (_this.rectAngleLPArray[_this.trackNumber3] + _this.rectAngleBPArray[_this.trackNumber3]));
        } else {
            _this.fanswer3 = _this.add.text(850, 286, 2 * (_this.rectAngleLPArray[_this.trackNumber3] + _this.rectAngleBPArray[_this.trackNumber3]));
        }
        _this.applyingStyle(_this.fanswer3);
        _this.clearScreenArray.push(_this.fanswer3);
    },

    displayTableforPSquare: function () //* Display table for square shape question in MCQ screen (perimeter)
    {
        _this.ftable = _this.add.sprite(680, 80, 'table');
        _this.ftable.frame = 3;
        _this.ftable.scale.setTo(0.9, 0.8);
        _this.clearScreenArray.push(_this.ftable);
        _this.addL = _this.add.text(706, 98, "S");
        _this.addL.fill = '#FF0000';
        _this.clearScreenArray.push(_this.addL);
        _this.addB = _this.add.text(780, 98, "P");
        _this.addB.fill = '#FF0000';
        _this.clearScreenArray.push(_this.addB);

        _this.textBox12 = _this.add.image(688.5, 145, 'textbox2');
        _this.clearScreenArray.push(_this.textBox12);

        if (_this.shapesArray[_this.trackCount] == 2) {
            if (_this.sidesSquareArray[_this.trackNumber] >= 10) {
                _this.addTextL1 = _this.add.text(705, 157, _this.sidesSquareArray[_this.trackNumber]);
            }
            else {
                _this.addTextL1 = _this.add.text(708, 157, _this.sidesSquareArray[_this.trackNumber]);
            }
        }
        else if (_this.shapesArray[_this.trackCount] == 3) {
            if (_this.sidesTArray[_this.trackNumber] >= 10) {
                _this.addTextL1 = _this.add.text(705, 157, _this.sidesTArray[_this.trackNumber]);
            }
            else {
                _this.addTextL1 = _this.add.text(708, 157, _this.sidesTArray[_this.trackNumber]);
            }
        }
        _this.applyingStyle(_this.addTextL1);
        _this.clearScreenArray.push(_this.addTextL1);

        _this.AnsBox1 = _this.add.image(762, 152, 'textbox4'); ///
        _this.AnsBox1.scale.setTo(0.9, 0.9);
        if (_this.shapesArray[_this.trackCount] == 2) {
            if (4 * _this.sidesSquareArray[_this.trackNumber] >= 10) {
                _this.fanswer = _this.add.text(772, 158, 4 * _this.sidesSquareArray[_this.trackNumber]);
            }
            else {
                _this.fanswer = _this.add.text(779, 158, 4 * _this.sidesSquareArray[_this.trackNumber]);

            }
        }
        else if (_this.shapesArray[_this.trackCount] == 3) {
            if (3 * _this.sidesTArray[_this.trackNumber] >= 10) {
                _this.fanswer = _this.add.text(772, 157, 3 * _this.sidesTArray[_this.trackNumber]);
            }
            else {
                _this.fanswer = _this.add.text(779, 157, 3 * _this.sidesTArray[_this.trackNumber]);
            }
        }
        _this.applyingStyle(_this.fanswer);
        _this.clearScreenArray.push(_this.AnsBox1);
        _this.clearScreenArray.push(_this.fanswer);
        _this.textBox21 = _this.add.image(690, 210, 'textbox2');
        _this.clearScreenArray.push(_this.textBox21);

        if (_this.shapesArray[_this.trackCount] == 2) {
            if (_this.sidesSquareArray[_this.trackNumber2] >= 10) {
                _this.addTextL2 = _this.add.text(705, 221, _this.sidesSquareArray[_this.trackNumber2]);
            }
            else {
                _this.addTextL2 = _this.add.text(708, 221, _this.sidesSquareArray[_this.trackNumber2]);
            }
        }
        else if (_this.shapesArray[_this.trackCount] == 3) {
            if (_this.sidesTArray[_this.trackNumber2] >= 10) {
                _this.addTextL2 = _this.add.text(705, 221, _this.sidesTArray[_this.trackNumber2]);
            }
            else {
                _this.addTextL2 = _this.add.text(708, 221, _this.sidesTArray[_this.trackNumber2]);
            }
        }
        _this.applyingStyle(_this.addTextL2);
        _this.clearScreenArray.push(_this.addTextL2);

        _this.AnsBox2 = _this.add.image(762, 217, 'textbox4'); ///
        _this.AnsBox2.scale.setTo(0.9, 0.9);
        _this.clearScreenArray.push(_this.AnsBox2);
        if (_this.shapesArray[_this.trackCount] == 2) {
            if (4 * _this.sidesSquareArray[_this.trackNumber2] >= 10) {
                _this.fanswer2 = _this.add.text(772, 222, 4 * _this.sidesSquareArray[_this.trackNumber2]);
            }
            else {
                _this.fanswer2 = _this.add.text(779, 222, 4 * _this.sidesSquareArray[_this.trackNumber2]);
            }
        }
        else if (_this.shapesArray[_this.trackCount] == 3) {
            if (3 * _this.sidesTArray[_this.trackNumber2] >= 10) {
                _this.fanswer2 = _this.add.text(772, 222, 3 * _this.sidesTArray[_this.trackNumber2]);
            }
            else {
                _this.fanswer2 = _this.add.text(779, 222, 3 * _this.sidesTArray[_this.trackNumber2]);
            }
        }
        _this.applyingStyle(_this.fanswer2);
        _this.clearScreenArray.push(_this.fanswer2);

        _this.textBox21 = _this.add.image(688.5, 274, 'textbox2');
        _this.clearScreenArray.push(_this.textBox21);

        if (_this.shapesArray[_this.trackCount] == 2) {
            if (_this.sidesSquareArray[_this.trackNumber3] >= 10) {
                _this.addTextL2 = _this.add.text(705, 286, _this.sidesSquareArray[_this.trackNumber3]);
            }
            else {
                _this.addTextL2 = _this.add.text(708, 286, _this.sidesSquareArray[_this.trackNumber3]);
            }
        }
        else if (_this.shapesArray[_this.trackCount] == 3) {
            if (_this.sidesTArray[_this.trackNumber3] >= 10) {
                _this.addTextL2 = _this.add.text(705, 286, _this.sidesTArray[_this.trackNumber3]);
            }
            else {
                _this.addTextL2 = _this.add.text(708, 286, _this.sidesTArray[_this.trackNumber3]);
            }
        }
        _this.applyingStyle(_this.addTextL2);
        _this.clearScreenArray.push(_this.addTextL2);

        _this.AnswerBox3 = _this.add.sprite(762, 281, 'textbox4'); ///
        _this.AnswerBox3.scale.setTo(0.9, 0.9);
        if (_this.shapesArray[_this.trackCount] == 2) {
            if (4 * _this.sidesSquareArray[_this.trackNumber3] >= 10) {
                _this.fanswer3 = _this.add.text(772, 285, 4 * _this.sidesSquareArray[_this.trackNumber3]);
            }
            else {
                _this.fanswer3 = _this.add.text(779, 285, 4 * _this.sidesSquareArray[_this.trackNumber3]);
            }
        }
        else if (_this.shapesArray[_this.trackCount] == 3) {
            if (3 * _this.sidesTArray[_this.trackNumber3] >= 10) {
                _this.fanswer3 = _this.add.text(772, 285, 3 * _this.sidesTArray[_this.trackNumber3]);
            }
            else {
                _this.fanswer3 = _this.add.text(779, 285, 3 * _this.sidesTArray[_this.trackNumber3]);
            }
        }
        _this.applyingStyle(_this.fanswer3);
        _this.clearScreenArray.push(_this.AnswerBox3);
        _this.clearScreenArray.push(_this.fanswer3);
    },

    displayTableforSquare: function () //* Display table for square shape question in MCQ screen (area)
    {
        _this.ftable = _this.add.sprite(680, 80, 'table');
        _this.ftable.frame = 3;
        _this.ftable.scale.setTo(0.9, 0.8);
        _this.clearScreenArray.push(_this.ftable);
        _this.addL = _this.add.text(706, 98, "S");
        _this.addL.fill = '#FF0000';
        _this.clearScreenArray.push(_this.addL);
        _this.addB = _this.add.text(780, 98, "A");
        _this.addB.fill = '#FF0000';
        _this.clearScreenArray.push(_this.addB);

        _this.textBox12 = _this.add.image(688.5, 145, 'textbox2');
        _this.clearScreenArray.push(_this.textBox12);
        if (_this.sidesArray[_this.trackNumber] >= 10) {
            _this.addTextL1 = _this.add.text(705, 157, _this.sidesArray[_this.trackNumber]);
        } else {
            _this.addTextL1 = _this.add.text(708, 157, _this.sidesArray[_this.trackNumber]);

        }
        _this.applyingStyle(_this.addTextL1);
        _this.clearScreenArray.push(_this.addTextL1);

        _this.AnsBox1 = _this.add.image(762, 152, 'textbox4'); ///
        _this.AnsBox1.scale.setTo(0.9, 0.9);
        if (_this.sidesArray[_this.trackNumber] * _this.sidesArray[_this.trackNumber] >= 10) {
            _this.fanswer = _this.add.text(772, 158, _this.sidesArray[_this.trackNumber] * _this.sidesArray[_this.trackNumber]);
        } else {
            _this.fanswer = _this.add.text(779, 158, _this.sidesArray[_this.trackNumber] * _this.sidesArray[_this.trackNumber]);

        }
        _this.applyingStyle(_this.fanswer);
        _this.clearScreenArray.push(_this.AnsBox1);
        _this.clearScreenArray.push(_this.fanswer);
        _this.textBox21 = _this.add.image(690, 210, 'textbox2');
        _this.clearScreenArray.push(_this.textBox21);
        if (_this.sidesArray[_this.trackNumber2] >= 10) {
            _this.addTextL2 = _this.add.text(705, 220, _this.sidesArray[_this.trackNumber2]);
        } else {
            _this.addTextL2 = _this.add.text(708, 220, _this.sidesArray[_this.trackNumber2]);

        }
        _this.applyingStyle(_this.addTextL2);
        _this.clearScreenArray.push(_this.addTextL2);
        _this.AnsBox2 = _this.add.image(762, 217, 'textbox4'); ///
        _this.AnsBox2.scale.setTo(0.9, 0.9);
        if (_this.sidesArray[_this.trackNumber2] * _this.sidesArray[_this.trackNumber2] >= 10) {
            _this.fanswer2 = _this.add.text(772, 222, _this.sidesArray[_this.trackNumber2] * _this.sidesArray[_this.trackNumber2]);
        } else {
            _this.fanswer2 = _this.add.text(779, 222, _this.sidesArray[_this.trackNumber2] * _this.sidesArray[_this.trackNumber2]);

        }
        _this.applyingStyle(_this.fanswer2);
        _this.clearScreenArray.push(_this.AnsBox2);
        _this.clearScreenArray.push(_this.fanswer2);

        _this.textBox21 = _this.add.image(688.5, 274, 'textbox2');
        _this.clearScreenArray.push(_this.textBox21);
        if (_this.sidesArray[_this.trackNumber3] >= 10) {
            _this.addTextL2 = _this.add.text(705, 285, _this.sidesArray[_this.trackNumber3]);
        } else {
            _this.addTextL2 = _this.add.text(708, 285, _this.sidesArray[_this.trackNumber3]);

        }
        _this.applyingStyle(_this.addTextL2);
        _this.clearScreenArray.push(_this.addTextL2);

        _this.AnswerBox3 = _this.add.sprite(762, 281, 'textbox4'); ///
        _this.AnswerBox3.scale.setTo(0.9, 0.9);
        if (_this.sidesArray[_this.trackNumber3] * _this.sidesArray[_this.trackNumber3] >= 10) {
            _this.fanswer3 = _this.add.text(772, 285, _this.sidesArray[_this.trackNumber3] * _this.sidesArray[_this.trackNumber3]);
        } else {
            _this.fanswer3 = _this.add.text(779, 285, _this.sidesArray[_this.trackNumber3] * _this.sidesArray[_this.trackNumber3]);

        }
        _this.applyingStyle(_this.fanswer3);
        _this.clearScreenArray.push(_this.AnswerBox3);
        _this.clearScreenArray.push(_this.fanswer3);
    },

    displayMCQRect: function () //*MCQ for Rectangle in area and perimeter
    {
        if (_this.gmpar_flag == 0) {
            _this.choiceMCQPR();
            _this.OptionBox = _this.add.image(80, 200, 'textbox5');
            _this.clearScreenArray.push(_this.OptionBox);
            _this.qBoxA = _this.add.text(100, 225, "P");
            _this.qBoxA.fontSize = 25;
            _this.clearScreenArray.push(_this.qBoxA);
            _this.applyingStyle(_this.qBoxA);
            _this.qBoxEqls = _this.add.text(130, 225, "=");
            _this.clearScreenArray.push(_this.qBoxEqls);
            _this.applyingStyle(_this.qBoxEqls);
            _this.qBoxEqls.fontSize = 25;
            _this.qBoxQ = _this.add.text(160, 225, "?");
            _this.clearScreenArray.push(_this.qBoxQ);
            _this.qBoxQ.fill = '#FF0000';
            _this.qBoxQ.fontSize = 25;
            _this.displayTablePRect();
            if (_this.count1 == 0) {
                _this.time.events.add(550, function () {
                    _this.Ask_Question3.play();
                })
            }
            _this.Question_flag = 2;
        }
        else if (_this.gmpar_flag == 1) {
            _this.choiceMCQPR();
            _this.OptionBox = _this.add.image(80, 200, 'textbox5');
            _this.clearScreenArray.push(_this.OptionBox);
            _this.qBoxA = _this.add.text(100, 225, "A");
            _this.qBoxA.fontSize = 25;
            _this.clearScreenArray.push(_this.qBoxA);
            _this.applyingStyle(_this.qBoxA);
            _this.qBoxEqls = _this.add.text(130, 225, "=");
            _this.clearScreenArray.push(_this.qBoxEqls);
            _this.applyingStyle(_this.qBoxEqls);
            _this.qBoxEqls.fontSize = 25;
            _this.qBoxQ = _this.add.text(160, 225, "?");
            _this.clearScreenArray.push(_this.qBoxQ);
            _this.qBoxQ.fill = '#FF0000';
            _this.qBoxQ.fontSize = 25;
            _this.displayTable();
            if (_this.count1 == 3) {
                _this.time.events.add(550, function () {
                    _this.Ask_Question8.play();
                })
            }
            _this.Question_flag = 7;
        }
    },

    choiceMCQPR: function () //*MCQ for Rectangle in  perimeter
    {
        console.log("McQQQQQQ")
        _this.OptionBox_X = [80, 235, 390];
        _this.OptionBox_X = _this.shuffle(_this.OptionBox_X);
        _this.OptionBox_Y = 350;

        _this.MCQBackground_B = _this.add.image(45, 80, 'BlueBg');
        _this.MCQBackground_B.scale.setTo(0.7, 1);

        _this.OptionPaneltickbtn_PartB = _this.add.sprite(565, 350, 'TickBtn');
        _this.OptionPaneltickbtn_PartB.frame = 1;
        _this.OptionPaneltickbtn_PartB.visible = false;

        _this.PlacingMCQoptionPR();

        if (_this.XvalueArray[_this.randomIndexArray[0]] == "L" && _this.ZvalueArray[_this.randomIndexArray[0]] == "B") {
            console.log("op1")
            var OptionBox1Value1 = _this.add.text(27, 22, _this.XvalueArray[_this.randomIndexArray[0]]);
            OptionBox1Value1.fill = '#FF0000';
            OptionBox1Value1.fontSize = 22;
            OptionBox1Value1.font = "Akzidenz-Grotesk BQ";
            OptionBox1Value1.name = _this.XvalueArray[_this.randomIndexArray[0]];

            var OptionBox1Value2 = _this.add.text(73, 22, _this.ZvalueArray[_this.randomIndexArray[0]]);
            OptionBox1Value2.fill = '#FF0000';
            OptionBox1Value2.fontSize = 22;
            OptionBox1Value2.font = "Akzidenz-Grotesk BQ";
            OptionBox1Value2.name = _this.ZvalueArray[_this.randomIndexArray[0]];
        }
        else if (_this.XvalueArray[_this.randomIndexArray[0]] == "2 x (L") {
            console.log("OP2")
            var OptionBox1Value1 = _this.add.text(14, 22, _this.XvalueArray[_this.randomIndexArray[0]]);
            OptionBox1Value1.fill = '#FF0000';
            OptionBox1Value1.fontSize = 22;
            OptionBox1Value1.font = "Akzidenz-Grotesk BQ";
            OptionBox1Value1.name = _this.XvalueArray[_this.randomIndexArray[0]];
            var OptionBox1Value2 = _this.add.text(85, 22, _this.ZvalueArray[_this.randomIndexArray[0]]);
            OptionBox1Value2.fill = '#FF0000';
            OptionBox1Value2.fontSize = 22;
            OptionBox1Value2.font = "Akzidenz-Grotesk BQ";
            OptionBox1Value2.name = _this.ZvalueArray[_this.randomIndexArray[0]];
        }
        else {
            console.log("OP3")
            var OptionBox1Value1 = _this.add.text(16, 22, _this.XvalueArray[_this.randomIndexArray[0]]);
            OptionBox1Value1.fill = '#FF0000';
            OptionBox1Value1.fontSize = 22;
            OptionBox1Value1.font = "Akzidenz-Grotesk BQ";
            OptionBox1Value1.name = _this.XvalueArray[_this.randomIndexArray[0]];
            var OptionBox1Value2 = _this.add.text(90, 22, _this.ZvalueArray[_this.randomIndexArray[0]]);
            OptionBox1Value2.fill = '#FF0000';
            OptionBox1Value2.fontSize = 22;
            OptionBox1Value2.font = "Akzidenz-Grotesk BQ";
            OptionBox1Value2.name = _this.ZvalueArray[_this.randomIndexArray[0]];
        }

        if (_this.SignArray[_this.randomIndexArray[0]] == "x") {
            var OptionBox1Sign = _this.add.text(50, 22, _this.SignArray[_this.randomIndexArray[0]]);
            OptionBox1Sign.fontSize = 22;
        }
        else if (_this.SignArray[_this.randomIndexArray[0]] == '+') {
            var OptionBox1Sign = _this.add.text(71, 22, _this.SignArray[_this.randomIndexArray[0]]);
            OptionBox1Sign.fontSize = 22;
        }
        OptionBox1Sign.fill = '#FF0000';
        OptionBox1Sign.name = _this.SignArray[_this.randomIndexArray[0]];

        _this.OptionBox1_PartB = _this.add.image(_this.OptionBox_X[0], _this.OptionBox_Y, 'textbox5');
        _this.OptionBox1_PartB.name = '1';
        _this.OptionBox1_PartB.scale.setTo(1.3, 1.1);
        if (OptionBox1Sign.name == 'x') {
            _this.Box1result_PartB = OptionBox1Value1.name + OptionBox1Value2.name;
            _this.Box1result_PartB.name = OptionBox1Value1.name + OptionBox1Value2.name;
        }
        else if (OptionBox1Sign.name == '+') {
            _this.Box1result_PartB = OptionBox1Value1.name; //+ OptionBox1Value2.name
            _this.Box1result_PartB.name = OptionBox1Value1.name;//+ OptionBox1Value2.name
        }

        console.log(_this.Box1result_PartB, "REsulttt1");
        _this.OptionBox1_PartB.addChild(OptionBox1Value1);
        _this.OptionBox1_PartB.addChild(OptionBox1Value2);
        _this.OptionBox1_PartB.addChild(OptionBox1Sign);

        _this.OptionBox1_PartB.inputEnabled = true;
        _this.OptionBox1_PartB.input.useHandCursor = true;
        _this.OptionBox1_PartB.events.onInputDown.add(_this.optionClicked_PartB, _this.OptionBox1_PartB, _this.Box1result_PartB);

        //option2
        if (_this.XvalueArray[_this.randomIndexArray[1]] == "L" && _this.ZvalueArray[_this.randomIndexArray[1]] == "B") {
            var OptionBox2Value1 = _this.add.text(27, 22, _this.XvalueArray[_this.randomIndexArray[1]]);
            OptionBox2Value1.fill = '#FF0000';
            OptionBox2Value1.fontSize = 22;
            OptionBox2Value1.font = "Akzidenz-Grotesk BQ";
            OptionBox2Value1.name = _this.XvalueArray[_this.randomIndexArray[1]];

            var OptionBox2Value2 = _this.add.text(73, 22, _this.ZvalueArray[_this.randomIndexArray[1]]);
            OptionBox2Value2.fill = '#FF0000';
            OptionBox2Value2.fontSize = 22;
            OptionBox2Value2.font = "Akzidenz-Grotesk BQ";
            OptionBox2Value2.name = _this.ZvalueArray[_this.randomIndexArray[1]];
        }
        else if (_this.XvalueArray[_this.randomIndexArray[1]] == "2 x (L") {
            console.log("OP2")
            var OptionBox2Value1 = _this.add.text(14, 22, _this.XvalueArray[_this.randomIndexArray[1]]);
            OptionBox2Value1.fill = '#FF0000';
            OptionBox2Value1.fontSize = 22;
            OptionBox2Value1.font = "Akzidenz-Grotesk BQ";
            OptionBox2Value1.name = _this.XvalueArray[_this.randomIndexArray[1]];
            var OptionBox2Value2 = _this.add.text(85, 22, _this.ZvalueArray[_this.randomIndexArray[1]]);
            OptionBox2Value2.fill = '#FF0000';
            OptionBox2Value2.fontSize = 22;
            OptionBox2Value2.font = "Akzidenz-Grotesk BQ";
            OptionBox2Value2.name = _this.ZvalueArray[_this.randomIndexArray[1]];
        }
        else {
            var OptionBox2Value1 = _this.add.text(16, 22, _this.XvalueArray[_this.randomIndexArray[1]]);
            OptionBox2Value1.fill = '#FF0000';
            OptionBox2Value1.fontSize = 22;
            OptionBox2Value1.font = "Akzidenz-Grotesk BQ";
            OptionBox2Value1.name = _this.XvalueArray[_this.randomIndexArray[1]];
            var OptionBox2Value2 = _this.add.text(90, 22, _this.ZvalueArray[_this.randomIndexArray[1]]);
            OptionBox2Value2.fill = '#FF0000';
            OptionBox2Value2.fontSize = 22;
            OptionBox2Value2.font = "Akzidenz-Grotesk BQ";
            OptionBox2Value2.name = _this.ZvalueArray[_this.randomIndexArray[1]];
        }
        if (_this.SignArray[_this.randomIndexArray[1]] == "x") {
            var OptionBox2Sign = _this.add.text(50, 22, _this.SignArray[_this.randomIndexArray[1]]);
            OptionBox2Sign.fontSize = 22;
        }
        else if (_this.SignArray[_this.randomIndexArray[1]] == '+') {
            var OptionBox2Sign = _this.add.text(71, 22, _this.SignArray[_this.randomIndexArray[1]]);
            OptionBox2Sign.fontSize = 22;
        }

        OptionBox2Sign.fill = '#FF0000';
        OptionBox2Sign.name = _this.SignArray[_this.randomIndexArray[1]];

        _this.OptionBox2_PartB = _this.add.image(_this.OptionBox_X[1], _this.OptionBox_Y, 'textbox5');
        _this.OptionBox2_PartB.name = '2';
        _this.OptionBox2_PartB.scale.setTo(1.3, 1.1);

        if (OptionBox2Sign.name == 'x') {
            _this.Box2result_PartB = OptionBox2Value1.name + OptionBox2Value2.name;
            _this.Box2result_PartB.name = OptionBox2Value1.name + OptionBox2Value2.name;
        }
        else if (OptionBox2Sign.name == '+') {
            _this.Box2result_PartB = OptionBox2Value1.name; //+ OptionBox2Value2.name
            _this.Box2result_PartB.name = OptionBox2Value1.name;//+ OptionBox2Value2.name
        }
        console.log(_this.Box2result_PartB, "REsulttt2");
        _this.OptionBox2_PartB.addChild(OptionBox2Value1);
        _this.OptionBox2_PartB.addChild(OptionBox2Value2);
        _this.OptionBox2_PartB.addChild(OptionBox2Sign);

        _this.OptionBox2_PartB.inputEnabled = true;
        _this.OptionBox2_PartB.input.useHandCursor = true;
        _this.OptionBox2_PartB.events.onInputDown.add(_this.optionClicked_PartB, _this.OptionBox2_PartB, _this.Box2result_PartB);

        //option3 
        if (_this.XvalueArray[_this.randomIndexArray[2]] == "L" && _this.ZvalueArray[_this.randomIndexArray[2]] == "B") {
            var OptionBox3Value1 = _this.add.text(27, 22, _this.XvalueArray[_this.randomIndexArray[2]]);
            OptionBox3Value1.fill = '#FF0000';
            OptionBox3Value1.fontSize = 22;
            OptionBox3Value1.font = "Akzidenz-Grotesk BQ";
            OptionBox3Value1.name = _this.XvalueArray[_this.randomIndexArray[2]];

            var OptionBox3Value2 = _this.add.text(73, 22, _this.ZvalueArray[_this.randomIndexArray[2]]);
            OptionBox3Value2.fill = '#FF0000';
            OptionBox3Value2.fontSize = 22;
            OptionBox3Value2.font = "Akzidenz-Grotesk BQ";
            OptionBox3Value2.name = _this.ZvalueArray[_this.randomIndexArray[2]];
        }
        else if (_this.XvalueArray[_this.randomIndexArray[2]] == "2 x (L") {
            console.log("OP2")
            var OptionBox3Value1 = _this.add.text(14, 22, _this.XvalueArray[_this.randomIndexArray[2]]);
            OptionBox3Value1.fill = '#FF0000';
            OptionBox3Value1.fontSize = 22;
            OptionBox3Value1.font = "Akzidenz-Grotesk BQ";
            OptionBox3Value1.name = _this.XvalueArray[_this.randomIndexArray[2]];
            var OptionBox3Value2 = _this.add.text(85, 22, _this.ZvalueArray[_this.randomIndexArray[2]]);
            OptionBox3Value2.fill = '#FF0000';
            OptionBox3Value2.fontSize = 22;
            OptionBox3Value2.font = "Akzidenz-Grotesk BQ";
            OptionBox3Value2.name = _this.ZvalueArray[_this.randomIndexArray[2]];
        }
        else {
            var OptionBox3Value1 = _this.add.text(16, 22, _this.XvalueArray[_this.randomIndexArray[2]]);
            OptionBox3Value1.fill = '#FF0000';
            OptionBox3Value1.fontSize = 22;
            OptionBox3Value1.font = "Akzidenz-Grotesk BQ";
            OptionBox3Value1.name = _this.XvalueArray[_this.randomIndexArray[2]];
            var OptionBox3Value2 = _this.add.text(90, 22, _this.ZvalueArray[_this.randomIndexArray[2]]);
            OptionBox3Value2.fill = '#FF0000';
            OptionBox3Value2.fontSize = 22;
            OptionBox3Value2.font = "Akzidenz-Grotesk BQ";
            OptionBox3Value2.name = _this.ZvalueArray[_this.randomIndexArray[2]];
        }
        if (_this.SignArray[_this.randomIndexArray[2]] == "x") {
            var OptionBox3Sign = _this.add.text(50, 22, _this.SignArray[_this.randomIndexArray[2]]);
            OptionBox3Sign.fontSize = 22;
        }
        else if (_this.SignArray[_this.randomIndexArray[2]] == '+') {
            var OptionBox3Sign = _this.add.text(71, 22, _this.SignArray[_this.randomIndexArray[2]]);
            OptionBox3Sign.fontSize = 22;
        }

        OptionBox3Sign.fill = '#FF0000';
        OptionBox3Sign.name = _this.SignArray[_this.randomIndexArray[2]];

        _this.OptionBox3_PartB = _this.add.image(_this.OptionBox_X[2], _this.OptionBox_Y, 'textbox5');
        _this.OptionBox3_PartB.name = '3';
        _this.OptionBox3_PartB.scale.setTo(1.3, 1.1);
        if (OptionBox3Sign.name == 'x') {
            _this.Box3result_PartB = OptionBox3Value1.name + OptionBox3Value2.name;
            _this.Box3result_PartB.name = OptionBox3Value1.name + OptionBox3Value2.name;
        }
        else if (OptionBox3Sign.name == '+') {
            _this.Box3result_PartB = OptionBox3Value1.name; //+ OptionBox3Value2.name
            _this.Box3result_PartB.name = OptionBox3Value1.name; //+ OptionBox3Value2.name
        }
        console.log(_this.Box3result_PartB, "REsulttt3");
        _this.OptionBox3_PartB.addChild(OptionBox3Value1);
        _this.OptionBox3_PartB.addChild(OptionBox3Value2);
        _this.OptionBox3_PartB.addChild(OptionBox3Sign);

        _this.OptionBox3_PartB.inputEnabled = true;
        _this.OptionBox3_PartB.input.useHandCursor = true;
        _this.OptionBox3_PartB.events.onInputDown.add(_this.optionClicked_PartB, _this.OptionBox3_PartB, _this.Box3result_PartB);
    },

    PlacingMCQoptionPR: function () {
        //* Randomizing options to get in MCQ
        //* Store correct answer initially
        _this.CurrectAnsX = _this.QZArray[1];; //_this.QZArray[_this.count1];
        _this.CurrectAnsZ = _this.QYArray[1];

        _this.CurrectAnsSign = '+';

        console.log(_this.CurrectAnsX);
        console.log(_this.CurrectAnsZ);

        _this.XvalueArray = [_this.QZArray[_this.stage], _this.QYYArray[_this.stage]];//,_this.ZArray_PartB[_this.PartBQnCnt]];
        _this.ZvalueArray = [_this.QYArray[_this.stage], _this.QYArray[_this.stage]];//,_this.XArray_PartB[_this.PartBQnCnt]];
        _this.SignArray = ['x', '+'];

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

    PlacingMCQoptionD: function () {
        //* Randomizing options to get in MCQ
        //* Store correct answer initially
        _this.CurrectAnsX = _this.QZArray[_this.stage];; //_this.QZArray[_this.count1];
        _this.CurrectAnsZ = _this.QYArray[_this.stage];

        _this.CurrectAnsSign = 'x';

        console.log(_this.CurrectAnsX);
        console.log(_this.CurrectAnsZ);

        _this.XvalueArray = [_this.QYYArray[_this.stage], _this.QZArray[_this.stage]];//,_this.ZArray_PartB[_this.PartBQnCnt]];
        _this.ZvalueArray = [_this.QYArray[_this.stage], _this.QYArray[_this.stage]];//,_this.XArray_PartB[_this.PartBQnCnt]];
        _this.SignArray = ['x', '+'];

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
        console.log("validate MCQ")
        //* Here we are validating the MCQ answrs for both area and perimeter(option)
        if (_this.gmpar_flag == 0) {
            if (_this.shapesArray[_this.trackCount] == 1) {
                console.log(target.name);
                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
                _this.OptionPaneltickbtn_PartB.inputEnabled = false;
                _this.OptionBox1_PartB.inputEnabled = false;
                _this.OptionBox2_PartB.inputEnabled = false;
                _this.OptionBox3_PartB.inputEnabled = false;
                if ((target.name) == "2 x (L") {
                    
                  
                    console.log("ans is correct");
                    _this.celebrationSound.play();
                    _this.Question_flag = 0;
                    _this.starActions(_this.count1);
                    _this.OptionPaneltickbtn_PartB.destroy();
                    _this.OptionBox1_PartB.destroy();
                    _this.OptionBox2_PartB.destroy();
                    _this.OptionBox3_PartB.destroy();
                    _this.MCQBackground_B.destroy();
                    _this.clearScreenArray.forEach(element => {
                        element.destroy();
                    });
                    _this.displayFormula();
                    _this.drawAnimation();
                    _this.trackCount++;
                }
                else {
                    _this.noofAttempts++;
                    console.log("ans is wrong");
                    _this.wrongSound.play();
                    _this.OptionBox1_PartB.frame = 0;
                    _this.OptionBox2_PartB.frame = 0;
                    _this.OptionBox3_PartB.frame = 0;
                    _this.Question_flag = 2;
                    _this.OptionBox1_PartB.inputEnabled = true;
                    _this.OptionBox1_PartB.input.useHandCursor = true;
                    _this.OptionBox2_PartB.inputEnabled = true;
                    _this.OptionBox2_PartB.input.useHandCursor = true;
                    _this.OptionBox3_PartB.inputEnabled = true;
                    _this.OptionBox3_PartB.input.useHandCursor = true;
                    _this.OptionPaneltickbtn_PartB.inputEnabled = true;
                    _this.OptionPaneltickbtn_PartB.input.useHandCursor = true;
                }
            }
            else if (_this.shapesArray[_this.trackCount] == 2) {
                console.log(target.name);
                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
                _this.OptionPaneltickbtn_PartB.inputEnabled = false;
                _this.OptionBox1_PartB.inputEnabled = false;
                _this.OptionBox2_PartB.inputEnabled = false;
                _this.OptionBox3_PartB.inputEnabled = false;
                if ((target.name) == "4S") {
                    console.log("ans is correct");
                    _this.celebrationSound.play();
                    _this.starActions(_this.count1);
                    _this.Question_flag = 0;
                    _this.OptionPaneltickbtn_PartB.destroy();
                    _this.OptionBox1_PartB.destroy();
                    _this.OptionBox2_PartB.destroy();
                    _this.OptionBox3_PartB.destroy();
                    _this.MCQBackground_B.destroy();
                    _this.clearScreenArray.forEach(element => {
                        element.destroy();
                    });
                    _this.displayFormula();
                    _this.drawAnimation2();
                    _this.trackCount++;
                }
                else {
                    _this.noofAttempts++;
                    console.log("ans is wrong");
                    _this.wrongSound.play();
                    _this.OptionBox1_PartB.frame = 0;
                    _this.OptionBox2_PartB.frame = 0;
                    _this.OptionBox3_PartB.frame = 0;
                    _this.Question_flag = 3;
                    _this.OptionBox1_PartB.inputEnabled = true;
                    _this.OptionBox1_PartB.input.useHandCursor = true;
                    _this.OptionBox2_PartB.inputEnabled = true;
                    _this.OptionBox2_PartB.input.useHandCursor = true;
                    _this.OptionBox3_PartB.inputEnabled = true;
                    _this.OptionBox3_PartB.input.useHandCursor = true;
                    _this.OptionPaneltickbtn_PartB.inputEnabled = true;
                    _this.OptionPaneltickbtn_PartB.input.useHandCursor = true;
                }
            }
            else if (_this.shapesArray[_this.trackCount] == 3) {
                console.log(target.name);
                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
                _this.OptionPaneltickbtn_PartB.inputEnabled = false;
                _this.OptionBox1_PartB.inputEnabled = false;
                _this.OptionBox2_PartB.inputEnabled = false;
                _this.OptionBox3_PartB.inputEnabled = false;
                if ((target.name) == "3S") {
                    console.log("ans is correct");
                    _this.celebrationSound.play();
                    _this.starActions(_this.count1);
                    _this.Question_flag = 0;
                    _this.OptionPaneltickbtn_PartB.destroy();
                    _this.OptionBox1_PartB.destroy();
                    _this.OptionBox2_PartB.destroy();
                    _this.OptionBox3_PartB.destroy();
                    _this.MCQBackground_B.destroy();
                    _this.clearScreenArray.forEach(element => {
                        element.destroy();
                    });
                    _this.displayFormula();
                    _this.drawAnimation3();
                    _this.trackCount++;
                }
                else {
                    _this.noofAttempts++;
                    console.log("ans is wrong");
                    _this.wrongSound.play();
                    _this.OptionBox1_PartB.frame = 0;
                    _this.OptionBox2_PartB.frame = 0;
                    _this.OptionBox3_PartB.frame = 0;
                    _this.Question_flag = 4;
                    _this.OptionBox1_PartB.inputEnabled = true;
                    _this.OptionBox1_PartB.input.useHandCursor = true;
                    _this.OptionBox2_PartB.inputEnabled = true;
                    _this.OptionBox2_PartB.input.useHandCursor = true;
                    _this.OptionBox3_PartB.inputEnabled = true;
                    _this.OptionBox3_PartB.input.useHandCursor = true;
                    _this.OptionPaneltickbtn_PartB.inputEnabled = true;
                    _this.OptionPaneltickbtn_PartB.input.useHandCursor = true;
                }
            }
        }
        else if (_this.gmpar_flag == 1) {
            if (_this.decideAreaArray[_this.trackCount] == 1) {
                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
                console.log(target.name);
                _this.OptionPaneltickbtn_PartB.inputEnabled = false;
                _this.OptionBox1_PartB.inputEnabled = false;
                _this.OptionBox2_PartB.inputEnabled = false;
                _this.OptionBox3_PartB.inputEnabled = false;
                if ((target.name) == _this.QXArray[_this.stage]) {
                    console.log("ans is correct");
                    _this.celebrationSound.play();
                    _this.starActions(_this.count1);
                    _this.OptionPaneltickbtn_PartB.destroy();
                    _this.OptionBox1_PartB.destroy();
                    _this.OptionBox2_PartB.destroy();
                    _this.OptionBox3_PartB.destroy();
                    _this.MCQBackground_B.destroy();
                    _this.clearScreenArray.forEach(element => {
                        element.destroy();
                    });
                    _this.displayFormula();
                    _this.drawAnimation();
                    _this.trackCount++;

                }
                else {
                    _this.noofAttempts++;
                    console.log("ans is wrong");
                    console.log(_this.QXArray[_this.count1]);
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
            }
            else if (_this.decideAreaArray[_this.trackCount] == 2) {
                console.log(target.name);
                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
                _this.OptionPaneltickbtn_PartB.inputEnabled = false;
                _this.OptionBox1_PartB.inputEnabled = false;
                _this.OptionBox2_PartB.inputEnabled = false;
                _this.OptionBox3_PartB.inputEnabled = false;
                if ((target.name) == _this.QX1Array[_this.stage]) {
                    console.log("ans is correct");
                    _this.starActions(_this.count1);
                    _this.celebrationSound.play();
                    _this.OptionPaneltickbtn_PartB.destroy();
                    _this.OptionBox1_PartB.destroy();
                    _this.OptionBox2_PartB.destroy();
                    _this.OptionBox3_PartB.destroy();
                    _this.MCQBackground_B.destroy();
                    _this.clearScreenArray.forEach(element => {
                        element.destroy();
                    });
                    _this.displayFormula();
                    _this.drawAnimation2();
                    _this.trackCount++;

                }
                else {
                    _this.noofAttempts++;
                    console.log("ans is wrong");
                    console.log(_this.QXArray[_this.count1]);
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
            }
        }
    },

    drawAnimation: function () //* This animation does last shown animation for each shape as follow (rectangle)
    {
        let i = 0;
        _this.animX = 469;
        _this.animY = 95;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(0, () => //800,
        {
            _this.greenline1 = _this.add.sprite(_this.animX, _this.animY, 'greenline1'); // 1 loop
            _this.clearScreenArray.push(_this.greenline1);
            i++;
            _this.animX = _this.animX - 37;

            if (i == 10) //_this.sidesTArray[_this.trackTR]
            {
                _this.loope.stop();
                _this.length1 = _this.add.image(138, 72, 'L_line');
                _this.length1.scale.setTo(0.83, 1)
                _this.clearScreenArray.push(_this.length1);
                _this.l1 = _this.add.text(320, 55, "L");
                _this.l1.fill = '#FF0000';
                _this.clearScreenArray.push(_this.l1);
                _this.time.events.add(500, function () {
                    i = 0;
                    _this.animX = 150;
                    _this.animY -= 1;
                    _this.loope.start();
                    _this.loope.loop(0, () => //800,
                    {
                        _this.greenline1 = _this.add.sprite(_this.animX, _this.animY, 'greenline1'); //2 loop
                        _this.greenline1.angle = 90;
                        _this.greenline1.scale.setTo(1.27, 1)
                        _this.clearScreenArray.push(_this.greenline1);
                        i++;
                        _this.animY = _this.animY + 37;


                        if (i == 8) //_this.sidesTArray[_this.trackTR]
                        {
                            _this.loope.stop();
                            _this.breadth2 = _this.add.image(110, 100, 'B_line');
                            _this.clearScreenArray.push(_this.breadth2);
                            _this.b1 = _this.add.text(95, 250, "B");
                            _this.b1.fill = '#FF0000';
                            _this.clearScreenArray.push(_this.b1);

                            _this.time.events.add(500, function () {
                                i = 0;
                                _this.animX = _this.animX - 15;
                                _this.animY = _this.animY + 22;
                                _this.loope.start();
                                _this.loope.loop(0, () => //800,
                                {
                                    _this.greenline1 = _this.add.sprite(_this.animX, _this.animY, 'greenline1');//3 loop
                                    _this.clearScreenArray.push(_this.greenline1);
                                    i++;
                                    _this.animX = _this.animX + 37;

                                    if (i == 10) //_this.sidesTArray[_this.trackTR]
                                    {
                                        _this.loope.stop();
                                        _this.length1 = _this.add.image(138, 424, 'L_line');
                                        _this.clearScreenArray.push(_this.length1);
                                        _this.length1.scale.setTo(0.83, 1)
                                        _this.l2 = _this.add.text(320, 440, "L")
                                        _this.l2.fill = '#FF0000';
                                        _this.clearScreenArray.push(_this.l2);
                                        _this.time.events.add(500, function () {

                                            i = 0;
                                            _this.animX = _this.animX + 23;
                                            _this.animY = _this.animY - 58;
                                            _this.loope.start();
                                            _this.loope.loop(0, () => //800,
                                            {
                                                console.log(_this.animX, " startmig x")
                                                _this.greenline1 = _this.add.sprite(_this.animX, _this.animY, 'greenline1');// 4 loop
                                                _this.greenline1.scale.setTo(1.25, 1)
                                                _this.greenline1.angle = 90;
                                                _this.clearScreenArray.push(_this.greenline1);
                                                i++;
                                                _this.animY = _this.animY - 37;

                                                if (i == 8) //_this.sidesTArray[_this.trackTR]
                                                {
                                                    _this.loope.stop();
                                                    _this.breadth2 = _this.add.image(526, 100, 'B_line');
                                                    _this.clearScreenArray.push(_this.breadth2);
                                                    _this.b2 = _this.add.text(550, 250, "B");
                                                    _this.b2.fill = '#FF0000';
                                                    _this.clearScreenArray.push(_this.b2);
                                                    _this.time.events.add(1800, function () {
                                                        _this.clearScreenArray.forEach(element => {
                                                            element.destroy();
                                                        })

                                                        if (_this.gmpar_flag == 0) {
                                                            if (_this.count1 == 3) {
                                                                console.log("hii perimeter")
                                                                _this.gmpar_flag = 1;
                                                                _this.area_flag = 0;
                                                                _this.sides_flag = 0;
                                                                _this.trackCount = 0;
                                                                _this.Question_flag = 1
                                                                _this.decideQn();
                                                            }
                                                            else {
                                                                _this.displayPerimeterQs();
                                                            }
                                                        }
                                                        else if (_this.gmpar_flag == 1) {
                                                            console.log("hii area");
                                                            _this.clearScreen();
                                                        }
                                                    })
                                                }
                                            });
                                        })
                                    }
                                });
                            })
                        }
                    });
                })
            }
        });
    },

    drawAnimation2: function () //Square
    {
        let i = 0;
        _this.animX = 394;
        _this.animY = 95;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(0, () => //800,
        {
            _this.greenline1 = _this.add.sprite(_this.animX, _this.animY, 'greenline1'); // 1 loop
            _this.clearScreenArray.push(_this.greenline1);
            i++;
            _this.animX = _this.animX - 37;

            if (i == 8) //_this.sidesTArray[_this.trackTR]
            {
                _this.loope.stop();
                _this.length1 = _this.add.image(140, 72, 'S_line_1');
                _this.length1.scale.setTo(0.84, 1)
                _this.clearScreenArray.push(_this.length1);
                _this.l1 = _this.add.text(320, 55, "S");
                _this.l1.fill = '#FF0000';
                _this.clearScreenArray.push(_this.l1);
                _this.time.events.add(500, function () {
                    i = 0;
                    _this.animX = 150;
                    _this.animY -= 1;
                    _this.loope.start();
                    _this.loope.loop(0, () => //800,
                    {
                        _this.greenline1 = _this.add.sprite(_this.animX, _this.animY, 'greenline1'); //2 loop
                        _this.greenline1.angle = 90;
                        _this.greenline1.scale.setTo(1.27, 1)
                        _this.clearScreenArray.push(_this.greenline1);
                        i++;
                        _this.animY = _this.animY + 37;

                        if (i == 8) //_this.sidesTArray[_this.trackTR]
                        {
                            _this.loope.stop();
                            _this.breadth2 = _this.add.image(110, 100, 'S_line_2');
                            _this.clearScreenArray.push(_this.breadth2);
                            _this.b1 = _this.add.text(95, 250, "S");
                            _this.b1.fill = '#FF0000';
                            _this.clearScreenArray.push(_this.b1);

                            _this.time.events.add(500, function () {
                                i = 0;
                                _this.animX = _this.animX - 15;
                                _this.animY = _this.animY + 22;
                                _this.loope.start();
                                _this.loope.loop(0, () => //800,
                                {
                                    _this.greenline1 = _this.add.sprite(_this.animX, _this.animY, 'greenline1');//3 loop
                                    _this.clearScreenArray.push(_this.greenline1);
                                    i++;
                                    _this.animX = _this.animX + 37;

                                    if (i == 8) //_this.sidesTArray[_this.trackTR]
                                    {
                                        _this.loope.stop();
                                        _this.length1 = _this.add.image(140, 424, 'S_line_1');
                                        _this.clearScreenArray.push(_this.length1);
                                        _this.length1.scale.setTo(0.84, 1)
                                        _this.l2 = _this.add.text(320, 440, "S")
                                        _this.l2.fill = '#FF0000';
                                        _this.clearScreenArray.push(_this.l2);
                                        _this.time.events.add(500, function () {
                                            i = 0;
                                            _this.animX = _this.animX + 23;
                                            _this.animY = _this.animY - 58;
                                            _this.loope.start();
                                            _this.loope.loop(0, () => //800,
                                            {
                                                console.log(_this.animX, " startmig x")
                                                _this.greenline1 = _this.add.sprite(_this.animX, _this.animY, 'greenline1');// 4 loop
                                                _this.greenline1.scale.setTo(1.25, 1)
                                                _this.greenline1.angle = 90;
                                                _this.clearScreenArray.push(_this.greenline1);
                                                i++;
                                                _this.animY = _this.animY - 37;

                                                if (i == 8) //_this.sidesTArray[_this.trackTR]
                                                {
                                                    _this.loope.stop();
                                                    _this.breadth2 = _this.add.image(451, 100, 'S_line_2');
                                                    _this.clearScreenArray.push(_this.breadth2);
                                                    _this.b2 = _this.add.text(465, 250, "S");
                                                    _this.b2.fill = '#FF0000';
                                                    _this.clearScreenArray.push(_this.b2);
                                                    _this.time.events.add(1800, function () {
                                                        _this.clearScreenArray.forEach(element => {
                                                            element.destroy();
                                                        })

                                                        if (_this.gmpar_flag == 0) {
                                                            if (_this.count1 == 3) {
                                                                console.log("hii perimeter")
                                                                _this.gmpar_flag = 1;
                                                                _this.area_flag = 0;
                                                                _this.sides_flag = 0;
                                                                _this.trackCount = 0;
                                                                _this.Question_flag = 1
                                                                _this.decideQn();
                                                            }
                                                            else {
                                                                _this.displayPerimeterQs();
                                                            }
                                                        }
                                                        else if (_this.gmpar_flag == 1) {
                                                            console.log("hii area");
                                                            _this.clearScreen();
                                                        }
                                                    })

                                                }
                                            });
                                        })
                                    }
                                });
                            })
                        }
                    });
                })
            }
        });
    },

    drawAnimation3: function () //Triangle
    {
        let i = 0;
        _this.animX = 287;
        _this.animY = 140;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(0, () => //800,
        {
            _this.greenline1 = _this.add.sprite(_this.animX, _this.animY, 'greenline1'); // 1 loop
            _this.greenline1.angle = -59;
            _this.greenline1.scale.setTo(0.9, 1)
            _this.clearScreenArray.push(_this.greenline1);
            i++;
            _this.animX = _this.animX - 21;
            _this.animY = _this.animY + 36;

            if (i == 8) {
                _this.loope.stop();
                _this.length1 = _this.add.image(123, 377, 'tri_line3');
                _this.length1.scale.setTo(0.92, 1)
                _this.length1.angle = -60;
                _this.clearScreenArray.push(_this.length1);
                _this.l1 = _this.add.text(200, 200, "S");
                _this.l1.fill = '#FF0000';
                _this.clearScreenArray.push(_this.l1);

                _this.time.events.add(500, function () {
                    i = 0;
                    _this.animX += 24;
                    _this.animY -= 45;
                    _this.loope.start();
                    _this.loope.loop(0, () => {
                        _this.greenline1 = _this.add.sprite(_this.animX, _this.animY, 'greenline1'); //2 loop
                        _this.clearScreenArray.push(_this.greenline1);
                        i++;
                        _this.animX = _this.animX + 41;
                        if (i == 8) {
                            _this.loope.stop();
                            _this.breadth2 = _this.add.image(147, 398, 'tri_line3');
                            _this.breadth2.scale.setTo(0.93, 1);
                            _this.clearScreenArray.push(_this.breadth2);
                            _this.b1 = _this.add.text(300, 412, "S");
                            _this.b1.fill = '#FF0000';
                            _this.clearScreenArray.push(_this.b1);
                            _this.time.events.add(500, function () {
                                i = 0;
                                _this.animX = _this.animX + 8;
                                _this.animY = _this.animY + 17;
                                _this.loope.start();
                                _this.loope.loop(0, () => {
                                    _this.greenline1 = _this.add.sprite(_this.animX, _this.animY, 'greenline1'); //2 loop
                                    _this.greenline1.angle = -120;
                                    _this.greenline1.scale.setTo(0.9, 1)
                                    _this.clearScreenArray.push(_this.greenline1);
                                    i++;
                                    _this.animX = _this.animX - 21;
                                    _this.animY = _this.animY - 36;

                                    if (i == 8) {
                                        _this.loope.stop();
                                        _this.length2 = _this.add.image(320, 85, 'tri_line2');
                                        _this.clearScreenArray.push(_this.length2);
                                        //_this.length1.scale.setTo(0.84,1)
                                        _this.l2 = _this.add.text(419, 200, "S")
                                        _this.l2.fill = '#FF0000';
                                        _this.clearScreenArray.push(_this.l2);
                                        _this.time.events.add(1800, function () {
                                            _this.clearScreenArray.forEach(element => {
                                                element.destroy();
                                            })

                                            if (_this.gmpar_flag == 0) {
                                                if (_this.count1 == 3) {
                                                    console.log("hii perimeter")
                                                    _this.gmpar_flag = 1;
                                                    _this.area_flag = 0;
                                                    _this.sides_flag = 0;
                                                    _this.trackCount = 0;
                                                    _this.Question_flag = 1
                                                    _this.decideQn();
                                                }
                                                else {
                                                    _this.displayPerimeterQs();
                                                }
                                            }
                                            else if (_this.gmpar_flag == 1) {
                                                console.log("hii area");
                                                _this.clearScreen();
                                            }
                                        })
                                    }
                                })
                            })
                        }
                    })
                })
            }
        });
    },

    displayFormula: function () {
        if (_this.gmpar_flag == 0) {
            if (_this.shapesArray[_this.trackCount] == 1) {
                _this.fBox = _this.add.image(650, 100, 'textBox1');
                _this.clearScreenArray.push(_this.fBox);
                _this.formula = _this.add.text(677, 125, "P = 2 x (L+B)");
                _this.formula.fill = '#FF0000';
                _this.clearScreenArray.push(_this.formula);

            }
            else if (_this.shapesArray[_this.trackCount] == 2) {
                _this.fBox = _this.add.image(650, 100, 'textBox1');
                _this.fBox.scale.setTo(0.7, 1)
                _this.clearScreenArray.push(_this.fBox);
                _this.formula = _this.add.text(672, 125, "P = 4 x S");
                _this.formula.fill = '#FF0000';
                _this.clearScreenArray.push(_this.formula);
            }
            else {
                _this.fBox = _this.add.image(650, 100, 'textBox1');
                _this.fBox.scale.setTo(0.7, 1)
                _this.clearScreenArray.push(_this.fBox);
                _this.formula = _this.add.text(672, 125, "P = 3 x S");
                _this.formula.fill = '#FF0000';
                _this.clearScreenArray.push(_this.formula);
            }
        }
        else if (_this.gmpar_flag == 1) {
            if (_this.decideAreaArray[_this.trackCount] == 1) {
                _this.fBox = _this.add.image(650, 100, 'textBox1');
                _this.fBox.scale.setTo(0.7, 1)
                _this.clearScreenArray.push(_this.fBox);
                _this.formula = _this.add.text(672, 125, "A = L x B");
                _this.formula.fill = '#FF0000';
                _this.clearScreenArray.push(_this.formula);

            }
            else if (_this.decideAreaArray[_this.trackCount] == 2) {
                _this.fBox = _this.add.image(650, 100, 'textBox1');
                _this.fBox.scale.setTo(0.7, 1)
                _this.clearScreenArray.push(_this.fBox);
                _this.formula = _this.add.text(672, 125, "A = S x S");
                _this.formula.fill = '#FF0000';
                _this.clearScreenArray.push(_this.formula);
            }
        }
    },

    displayInitialScreen2: function () //* Initial screen for square in area
    {
        console.log("Initial screen for SQUARE ")
        _this.pinkLineGroup = _this.add.group();
        _this.pinkLineBgroup = _this.add.group();
        _this.pencilEraserGroup = _this.add.group();
        _this.commonGroup = _this.add.group();
        _this.tableGroup = _this.add.group();
        _this.checkBox = _this.add.image(220, 60, 'mainbord');
        _this.checkBox.scale.setTo(0.9, 0.9);
        _this.commonGroup.addChild(_this.checkBox);

        _this.firsTable = _this.add.sprite(780, 60, 'table');
        _this.firsTable.frame = 0;
        _this.tableGroup.addChild(_this.firsTable);

        _this.addL = _this.add.text(810, 90, "S");
        _this.addL.fill = '#FF0000';
        _this.tableGroup.addChild(_this.addL);
        _this.textBox1 = _this.add.image(795, 150, 'textbox2');// First box
        _this.tableGroup.addChild(_this.textBox1);

        _this.addTextS = _this.add.text(815, 162, _this.sidesArray[_this.trackS]);
        _this.applyingStyle(_this.addTextS);
        _this.tableGroup.addChild(_this.addTextS);

        _this.yellow_eraser = _this.add.image(50, 232, 'eraser');
        _this.pencilEraserGroup.addChild(_this.yellow_eraser);
        _this.yellow_eraser.inputEnabled = true;
        _this.yellow_eraser.input.useHandCursor = true;
        _this.yellow_eraser.events.onInputDown.add(function () {
            _this.eraseLine();
        })
        _this.pink_pencil = _this.add.image(100, 150, 'pinkPencil');
        _this.pencilEraserGroup.addChild(_this.pink_pencil);
        _this.pink_pencil.inputEnabled = true;
        _this.pink_pencil.input.useHandCursor = true;
        _this.pink_pencil.events.onInputDown.add(function () {
            console.log("say hii")
            _this.addLinesOnTheBoard();
        })
        _this.tick_mark = _this.add.image(820, 350, 'TickBtn');
        _this.tick_mark.frame = 1;
        _this.tick_mark.inputEnabled = true;
        _this.tick_mark.input.useHandCursor = true;
        _this.tick_mark.events.onInputDown.add(function () {

            _this.tick_mark.inputEnabled = false;
            _this.tick_mark.input.useHandCursor = false;
            _this.validatePinkLines2();
        })
    },

    validatePinkLines2: function () //* validate pink lines for square in area
    {
        if (_this.S_flag == 1 || _this.tickBtn2 == 0) {
            console.log("Me validating Length")
            if (_this.pinkLineGroup.length == _this.sidesArray[_this.trackS]) {
                _this.nextOptionSound.play();
                _this.pink_pencil.events.onInputDown.removeAll();
                _this.yellow_eraser.inputEnabled = false;
                _this.time.events.add(500, function () {
                    console.log("Verticl liness")
                    _this.completeFirstSide();
                    _this.tick_mark.visible = false;
                })
            }
            else {
                _this.wrongSound.play();
                _this.shake.shake(10, _this.checkBox);
                if (_this.pinkLineGroup.length >= 1) {
                    console.log("remove all lines")
                    _this.pinkLineGroup.removeAll();
                }
                _this.tick_mark.inputEnabled = true;
                _this.tick_mark.input.useHandCursor = true;
            }
        }
    },

    displayMCQSqaure: function () //* displays MCQ for triangle and square
    {
        if (_this.gmpar_flag == 0) {
            if (_this.shapesArray[_this.trackCount] == 2) {
                _this.choiceMCQSquare();
                _this.displayTableforPSquare();
                if (_this.count1 == 0) {
                    _this.time.events.add(550, function () {
                        _this.Ask_Question4.play();
                    })
                }
                _this.Question_flag = 3;
            }
            else if (_this.shapesArray[_this.trackCount] == 3) {
                _this.choiceMCQSquare();
                _this.displayTableforPSquare();
                if (_this.count1 == 0) {
                    _this.time.events.add(550, function () {
                        _this.Ask_Question5.play();
                    })
                }
                _this.Question_flag = 4;
            }
            console.log("square or triangle")
            _this.OptionBox = _this.add.image(80, 200, 'textbox5');
            _this.clearScreenArray.push(_this.OptionBox);
            _this.qBoxA = _this.add.text(100, 225, "P");
            _this.qBoxA.fontSize = 25;
            _this.clearScreenArray.push(_this.qBoxA);
            _this.applyingStyle(_this.qBoxA);
            _this.qBoxEqls = _this.add.text(130, 225, "=");
            _this.clearScreenArray.push(_this.qBoxEqls);
            _this.applyingStyle(_this.qBoxEqls);
            _this.qBoxEqls.fontSize = 25;
            _this.qBoxQ = _this.add.text(160, 225, "?");
            _this.clearScreenArray.push(_this.qBoxQ);
            _this.qBoxQ.fill = '#FF0000';
            _this.qBoxQ.fontSize = 25;
            _this.clearScreenArray.push(_this.qBoxQ);
        }
        else if (_this.gmpar_flag == 1) {
            _this.choiceMCQSquare();
            _this.OptionBox = _this.add.image(100, 200, 'textbox5');
            _this.clearScreenArray.push(_this.OptionBox);
            _this.qBoxA = _this.add.text(130, 225, "A");
            _this.qBoxA.fontSize = 25;
            _this.applyingStyle(_this.qBoxA)
            _this.clearScreenArray.push(_this.qBoxA);
            _this.qBoxEqls = _this.add.text(150, 225, "=");
            _this.applyingStyle(_this.qBoxEqls)
            _this.qBoxEqls.fontSize = 25;
            _this.clearScreenArray.push(_this.qBoxEqls);
            _this.qBoxQ = _this.add.text(180, 225, "?");
            _this.qBoxQ.fill = '#FF0000';
            _this.qBoxQ.fontSize = 25;
            _this.clearScreenArray.push(_this.qBoxQ);
            _this.displayTableforSquare();
            if (_this.count1 == 3) {
                _this.time.events.add(550, function () {
                    _this.Ask_Question9.play();
                })
            }
            _this.Question_flag = 8;
        }
    },

    choiceMCQSquare: function () //* displays MCQ for and square
    {
        console.log("McQQQQQQ")
        _this.OptionBox_X = [100, 250, 400];
        _this.OptionBox_X = _this.shuffle(_this.OptionBox_X);
        _this.OptionBox_Y = 340;

        _this.MCQBackground_B = _this.add.image(45, 80, 'BlueBg');
        _this.MCQBackground_B.scale.setTo(0.7, 1);
        _this.OptionPaneltickbtn_PartB = _this.add.sprite(550, 340, 'TickBtn');
        _this.OptionPaneltickbtn_PartB.frame = 1;
        _this.OptionPaneltickbtn_PartB.visible = false;

        if (_this.gmpar_flag == 0 && _this.shapesArray[_this.trackCount] == 3) {
            _this.PlacingMCQoptionTri();
        }
        else {
            _this.PlacingMCQoptionSquare();
        }
        var OptionBox1Value1 = _this.add.text(19, 22, _this.XvalueArray[_this.randomIndexArray[0]]);
        OptionBox1Value1.fill = '#FF0000';
        OptionBox1Value1.fontSize = 25;
        OptionBox1Value1.name = _this.XvalueArray[_this.randomIndexArray[0]];
        var OptionBox1Value2 = _this.add.text(81, 22, _this.ZvalueArray[_this.randomIndexArray[0]]);
        OptionBox1Value2.fill = '#FF0000';
        OptionBox1Value2.fontSize = 25;
        OptionBox1Value2.name = _this.ZvalueArray[_this.randomIndexArray[0]];
        if (_this.SignArray[_this.randomIndexArray[0]] == "x") {
            var OptionBox1Sign = _this.add.text(52, 22, _this.SignArray[_this.randomIndexArray[0]]);
            OptionBox1Sign.fontSize = 25;
        }
        else if (_this.SignArray[_this.randomIndexArray[0]] == '+') {
            var OptionBox1Sign = _this.add.text(52, 22, _this.SignArray[_this.randomIndexArray[0]]);
            OptionBox1Sign.fontSize = 25;
        }
        OptionBox1Sign.fill = '#FF0000';
        OptionBox1Sign.name = _this.SignArray[_this.randomIndexArray[0]];

        _this.OptionBox1_PartB = _this.add.image(_this.OptionBox_X[0], _this.OptionBox_Y, 'textbox5');
        _this.OptionBox1_PartB.name = '1';
        if (OptionBox1Sign.name == 'x') {
            _this.Box1result_PartB = OptionBox1Value1.name + OptionBox1Value2.name;
            _this.Box1result_PartB.name = OptionBox1Value1.name + OptionBox1Value2.name;
        }
        else if (OptionBox1Sign.name == 'x') {
            _this.Box1result_PartB = OptionBox1Value1.name; //+ OptionBox1Value2.name
            _this.Box1result_PartB.name = OptionBox1Value1.name;//+ OptionBox1Value2.name
        }
        console.log(_this.Box1result_PartB, "REsulttt1");
        _this.OptionBox1_PartB.addChild(OptionBox1Value1);
        _this.OptionBox1_PartB.addChild(OptionBox1Value2);
        _this.OptionBox1_PartB.addChild(OptionBox1Sign);

        _this.OptionBox1_PartB.inputEnabled = true;
        _this.OptionBox1_PartB.input.useHandCursor = true;
        _this.OptionBox1_PartB.events.onInputDown.add(_this.optionClicked_PartB, _this.OptionBox1_PartB, _this.Box1result_PartB);

        //option2 
        var OptionBox2Value1 = _this.add.text(19, 22, _this.XvalueArray[_this.randomIndexArray[1]]);
        OptionBox2Value1.fill = '#FF0000';
        OptionBox2Value1.fontSize = 25;
        OptionBox2Value1.name = _this.XvalueArray[_this.randomIndexArray[1]];
        var OptionBox2Value2 = _this.add.text(81, 22, _this.ZvalueArray[_this.randomIndexArray[1]]);
        OptionBox2Value2.fill = '#FF0000';
        OptionBox2Value2.fontSize = 25;
        OptionBox2Value2.name = _this.ZvalueArray[_this.randomIndexArray[1]];
        if (_this.SignArray[_this.randomIndexArray[1]] == "x") {
            var OptionBox2Sign = _this.add.text(52, 22, _this.SignArray[_this.randomIndexArray[1]]);
            OptionBox2Sign.fontSize = 25;
        }
        else if (_this.SignArray[_this.randomIndexArray[1]] == '+') {
            var OptionBox2Sign = _this.add.text(52, 22, _this.SignArray[_this.randomIndexArray[1]]);
            OptionBox2Sign.fontSize = 25;
        }
        OptionBox2Sign.fill = '#FF0000';
        OptionBox2Sign.name = _this.SignArray[_this.randomIndexArray[1]];

        _this.OptionBox2_PartB = _this.add.image(_this.OptionBox_X[1], _this.OptionBox_Y, 'textbox5');
        _this.OptionBox2_PartB.name = '2';

        if (OptionBox2Sign.name == 'x') {
            _this.Box2result_PartB = OptionBox2Value1.name + OptionBox2Value2.name;
            _this.Box2result_PartB.name = OptionBox2Value1.name + OptionBox2Value2.name;
        }
        else if (OptionBox2Sign.name == 'x') {
            _this.Box2result_PartB = OptionBox2Value1.name; //+ OptionBox2Value2.name
            _this.Box2result_PartB.name = OptionBox2Value1.name;//+ OptionBox2Value2.name
        }
        console.log(_this.Box2result_PartB, "REsulttt2");
        _this.OptionBox2_PartB.addChild(OptionBox2Value1);
        _this.OptionBox2_PartB.addChild(OptionBox2Value2);
        _this.OptionBox2_PartB.addChild(OptionBox2Sign);

        _this.OptionBox2_PartB.inputEnabled = true;
        _this.OptionBox2_PartB.input.useHandCursor = true;
        _this.OptionBox2_PartB.events.onInputDown.add(_this.optionClicked_PartB, _this.OptionBox2_PartB, _this.Box2result_PartB);

        //option3 
        var OptionBox3Value1 = _this.add.text(19, 22, _this.XvalueArray[_this.randomIndexArray[2]]);
        OptionBox3Value1.fill = '#FF0000';
        OptionBox3Value1.fontSize = 25;
        OptionBox3Value1.name = _this.XvalueArray[_this.randomIndexArray[2]];
        var OptionBox3Value2 = _this.add.text(81, 22, _this.ZvalueArray[_this.randomIndexArray[2]]);
        OptionBox3Value2.fill = '#FF0000';
        OptionBox3Value2.fontSize = 25;
        OptionBox3Value2.name = _this.ZvalueArray[_this.randomIndexArray[2]];
        if (_this.SignArray[_this.randomIndexArray[2]] == "x") {
            var OptionBox3Sign = _this.add.text(52, 22, _this.SignArray[_this.randomIndexArray[2]]);
            OptionBox3Sign.fontSize = 25;
        }
        else if (_this.SignArray[_this.randomIndexArray[2]] == '+') {
            var OptionBox3Sign = _this.add.text(52, 22, _this.SignArray[_this.randomIndexArray[2]]);
            OptionBox3Sign.fontSize = 25;
        }
        OptionBox3Sign.fill = '#FF0000';
        OptionBox3Sign.name = _this.SignArray[_this.randomIndexArray[2]];
        _this.OptionBox3_PartB = _this.add.image(_this.OptionBox_X[2], _this.OptionBox_Y, 'textbox5');
        _this.OptionBox3_PartB.name = '3';
        if (OptionBox3Sign.name == 'x') {
            _this.Box3result_PartB = OptionBox3Value1.name + OptionBox3Value2.name;
            _this.Box3result_PartB.name = OptionBox3Value1.name + OptionBox3Value2.name;
        }
        else if (OptionBox3Sign.name == 'x') {
            _this.Box3result_PartB = OptionBox3Value1.name; //+ OptionBox3Value2.name
            _this.Box3result_PartB.name = OptionBox3Value1.name; //+ OptionBox3Value2.name
        }
        console.log(_this.Box3result_PartB, "REsulttt3");
        _this.OptionBox3_PartB.addChild(OptionBox3Value1);
        _this.OptionBox3_PartB.addChild(OptionBox3Value2);
        _this.OptionBox3_PartB.addChild(OptionBox3Sign);

        _this.OptionBox3_PartB.inputEnabled = true;
        _this.OptionBox3_PartB.input.useHandCursor = true;
        _this.OptionBox3_PartB.events.onInputDown.add(_this.optionClicked_PartB, _this.OptionBox3_PartB, _this.Box3result_PartB);
    },

    PlacingMCQoptionSquare: function () //* displays MCQ for and square
    {
        //* Randomizing options to get in MCQ
        //* Store correct answer initially
        _this.CurrectAnsX = _this.QZ1Array[_this.stage];  //_this.QZArray[_this.count1];
        _this.CurrectAnsZ = _this.QZ1Array[_this.stage];

        _this.CurrectAnsSign = 'x';

        console.log(_this.CurrectAnsX);
        console.log(_this.CurrectAnsZ);

        _this.XvalueArray = [_this.QYY1Array[_this.stage], _this.QY1Array[_this.stage]];//,_this.ZArray_PartB[_this.PartBQnCnt]];
        _this.ZvalueArray = [_this.QZ1Array[_this.stage], _this.QZ1Array[_this.stage]];//,_this.XArray_PartB[_this.PartBQnCnt]];
        _this.SignArray = ['x', 'x'];

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

    PlacingMCQoptionTri: function () //* displays MCQ for triangle 
    {
        _this.CurrectAnsX = _this.QZ1Array[_this.stage];; //_this.QZArray[_this.count1];
        _this.CurrectAnsZ = _this.QZ1Array[_this.stage];

        _this.CurrectAnsSign = 'x';

        console.log(_this.CurrectAnsX);
        console.log(_this.CurrectAnsZ);

        _this.XvalueArray = [_this.QYY1Array[1], _this.QY1Array[_this.stage]];//,_this.ZArray_PartB[_this.PartBQnCnt]];
        _this.ZvalueArray = [_this.QZ1Array[_this.stage], _this.QZ1Array[_this.stage]];//,_this.XArray_PartB[_this.PartBQnCnt]];
        _this.SignArray = ['x', 'x'];

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

    nextquestion: function () {
        if (_this.count1 < 6) {
            _this.qn_flag = 1;
            _this.time.events.add(500, function () {
                _this.getQuestion();
            });
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(1000, function () {
                //_this.state.start('score');
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            });
        }
    },

    clearScreen: function () {
        console.log("clear the screen");
        //_this.stage = 0; 
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        if (_this.count1 < 6) {
            _this.decideQn();
        }
        else {
            _this.nextquestion();
        }
    },

    celebration: function () {
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },

    checkOverlap: function (spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(boundsA, boundsB);
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
        console.log("get a star")
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');

        // //* star Actions changes
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "GMPAR_01_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Mensuration";
         _this.microConcepts = "Geometry";

        anim.play();
        _this.count1++;
    },

    shutdown: function () {
        _this.stopVoice();
    },

    DemoVideo: function () {
        //*  ‘S ‘ represents the side of a square
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" + _this.languageSelected + "/DV-GMPAR-01-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* ‘P ‘ represents perimeter
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" + _this.languageSelected + "/DV1-GMPAR-01-G6.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //*  ‘L ‘ represents the Length and  ‘B’ represents the breadth  of a rectangle
        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" + _this.languageSelected + "/DV2-GMPAR-01-G6.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        //*  ‘S ‘ represents the side of a equilateral Triangle 
        _this.demoAudio4 = document.createElement('audio');
        _this.demoAudio4src = document.createElement('source');
        _this.demoAudio4src.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" + _this.languageSelected + "/DV3-GMPAR-01-G6.mp3");
        _this.demoAudio4.appendChild(_this.demoAudio4src);

        //*  ‘A' represents area
        _this.demoAudio5 = document.createElement('audio');
        _this.demoAudio5src = document.createElement('source');
        _this.demoAudio5src.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" + _this.languageSelected + "/DV4-GMPAR-01-G6.mp3");
        _this.demoAudio5.appendChild(_this.demoAudio5src);

        //* Find the formula of perimeter for a given shape
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" +
            _this.languageSelected + "/GMPAR-01-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Enter ‘Perimeter
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" +
            _this.languageSelected + "/GMPAR-01-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* select formula of perimeter for a rectangle
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" +
            _this.languageSelected + "/GMPAR-01-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        // * select formula of perimeter for a square
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" +
            _this.languageSelected + "/GMPAR-01-G6D.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        // * select formula of perimeter for a Triangle
        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" +
            _this.languageSelected + "/GMPAR-01-G6E.mp3");
        _this.q5Sound.appendChild(_this.q5Soundsrc);

        // * Find the formula of Area  for a given shape
        _this.q6Sound = document.createElement('audio');
        _this.q6Soundsrc = document.createElement('source');
        _this.q6Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" +
            _this.languageSelected + "/GMPAR-01-G6F.mp3");
        _this.q6Sound.appendChild(_this.q6Soundsrc);

        // * count the number of  boxes that fills the shape, Enter the value of the Area
        _this.q7Sound = document.createElement('audio');
        _this.q7Soundsrc = document.createElement('source');
        _this.q7Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" +
            _this.languageSelected + "/GMPAR-01-G6G.mp3");
        _this.q7Sound.appendChild(_this.q7Soundsrc);

        // * select formula of Area for a rectangle
        _this.q8Sound = document.createElement('audio');
        _this.q8Soundsrc = document.createElement('source');
        _this.q8Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" +
            _this.languageSelected + "/GMPAR-01-G6H.mp3");
        _this.q8Sound.appendChild(_this.q8Soundsrc);

        // * select formula of Area for a square
        _this.q9Sound = document.createElement('audio');
        _this.q9Soundsrc = document.createElement('source');
        _this.q9Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/GMPAR-01-G6/" +
            _this.languageSelected + "/GMPAR-01-G6I.mp3");
        _this.q9Sound.appendChild(_this.q9Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        // _this.backbtn1 = _this.add.sprite(5, 6, 'backbtn');
        // _this.backbtn1.inputEnabled = true;
        // _this.backbtn1.input.useHandCursor = true;
        // _this.backbtn1.events.onInputDown.add(function () {
        //     //_this.state.start('GMPAR_01_G6Score');
        //     console.log("inside backbutton1 function"); 
        //     // _this.stopVoice();
        //     _this.time.events.removeAll();
        //     _this.backbtn1.events.onInputDown.removeAll();

        //     _this.time.events.add(50,function()
        //     {
        //         _this.state.start('Backbutton');
        //     });
        // });

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.stopAudio();

            if (_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if (_this.demoVideo_2)
                _this.demoVideo_2.stop(false);
            if (_this.demoVideo_3)
                _this.demoVideo_3.stop(false);
            if (_this.demoVideo_4)
                _this.demoVideo_4.stop(false);
            if (_this.videoWorld_1)
                _this.videoWorld_1.destroy();
            if (_this.videoWorld_2)
                _this.videoWorld_2.destroy();
            if (_this.videoWorld_3)
                _this.videoWorld_3.destroy();
            if (_this.videoWorld_4)
                _this.videoWorld_4.destroy();
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
        if (_this.demoAudio2Timer) clearTimeout(_this.demoAudio2Timer);
        if (_this.demoAudio3Timer) clearTimeout(_this.demoAudio3Timer);
        if (_this.demoAudio4Timer) clearTimeout(_this.demoAudio4Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.q3Timer) clearTimeout(_this.q3Timer);
        if (_this.demoAudio5Timer) clearTimeout(_this.demoAudio5Timer);
        if (_this.q7Timer) clearTimeout(_this.q7Timer);
        if (_this.q8Timer) clearTimeout(_this.q8Timer);
        if (_this.demoAudio6Timer) clearTimeout(_this.demoAudio6Timer);
        if (_this.demoAudio7Timer) clearTimeout(_this.demoAudio7Timer);
        if (_this.demoAudio8Timer) clearTimeout(_this.demoAudio8Timer);

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

        if (_this.demoAudio3) {
            console.log("removing the demo audio1");
            _this.demoAudio3.pause();
            _this.demoAudio3 = null;
            _this.demoAudio3src = null;
        }

        if (_this.demoAudio4) {
            console.log("removing the demo audio1");
            _this.demoAudio4.pause();
            _this.demoAudio4 = null;
            _this.demoAudio4src = null;
        }

        if (_this.demoAudio5) {
            console.log("removing the demo audio1");
            _this.demoAudio5.pause();
            _this.demoAudio5 = null;
            _this.demoAudio5src = null;
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

        if (_this.q5Sound) {
            console.log("removing the q3");
            _this.q5Sound.pause();
            _this.q5Sound = null;
            _this.q5Soundsrc = null;
        }

        if (_this.q6Sound) {
            console.log("removing the q3");
            _this.q6Sound.pause();
            _this.q6Sound = null;
            _this.q6Soundsrc = null;
        }

        if (_this.q7Sound) {
            console.log("removing the q3");
            _this.q7Sound.pause();
            _this.q7Sound = null;
            _this.q7Soundsrc = null;
        }

        if (_this.q8Sound) {
            console.log("removing the q3");
            _this.q8Sound.pause();
            _this.q8Sound = null;
            _this.q8Soundsrc = null;
        }

        if (_this.q9Sound) {
            console.log("removing the q3");
            _this.q9Sound.pause();
            _this.q9Sound = null;
            _this.q9Soundsrc = null;
        }


        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('gmpar01_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/GMPAR-01-G6_1.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        //* play the demo audio1 after 1 sec delay
        _this.demoAudio1Timer = setTimeout(function ()    //* demoAudio1 js timer to play demoAudio1Timer after 1 seconds.
        {
            console.log("inside demoAudio1sound.....")
            clearTimeout(_this.demoAudio1Timer);         //* clear the time once its used.
            _this.demoAudio1.play();
        }, 1000);

        //* play the demo audio2 after 5 sec delay
        _this.demoAudio2Timer = setTimeout(function ()    //* demoAudio2 js timer to play demoAudio2Timer after 5 seconds.
        {
            console.log("inside demoAudio2sound.....")
            clearTimeout(_this.demoAudio2Timer);         //* clear the time once its used.
            _this.demoAudio2.play();
        }, 5000);

        //* play the demo audio3 after 13 sec delay
        _this.demoAudio3Timer = setTimeout(function ()    //* demoAudio3 js timer to play demoAudio1Timer after 13 seconds.
        {
            console.log("inside demoAudio3sound.....")
            clearTimeout(_this.demoAudio3Timer);         //* clear the time once its used.
            _this.demoAudio3.play();
        }, 13000);

        _this.demoAudio4Timer = setTimeout(function ()    //* demoAudio4 js timer to play demoAudio1Timer after 22 seconds.
        {
            console.log("inside demoAudio4sound.....")
            clearTimeout(_this.demoAudio4Timer);         //* clear the time once its used.
            _this.demoAudio4.play();
        }, 22000);

        _this.demoVideo_1.onComplete.add(function () {
            console.log("audio2 ended - pause video1");
            _this.demoVideo_2 = _this.add.video('gmpar01_2');
            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/GMPAR-01-G6_2.mp4");  //* phaser needs this.to run in mobile
            _this.video_playing = 2;
            _this.videoWorld_2 = _this.demoVideo_2.addToWorld();

            _this.skip.bringToTop();
            _this.q1Sound.play();

            _this.q2Timer = setTimeout(function ()    //* q2 js timer to play demoAudio1Timer after 15 seconds.
            {
                console.log("inside q2sound.....")
                clearTimeout(_this.q2Timer);         //* clear the time once its used.
                _this.q2Sound.play();
            }, 15000);

            _this.q3Timer = setTimeout(function ()    //* q3 js timer to play demoAudio1Timer after 23 seconds.
            {
                console.log("inside q3sound.....")
                clearTimeout(_this.q3Timer);         //* clear the time once its used.
                _this.q3Sound.play();
            }, 23000);

            _this.demoVideo_2.onComplete.add(function () {
                console.log("demovideo 2 completed......!!!1")
                _this.demoVideo_3 = _this.add.video('gmpar01_3');
                _this.demoVideo_3.play(false);
                _this.demoVideo_3.changeSource(window.baseUrl + "assets/demoVideos/GMPAR-01-G6_3.mp4");  //* phaser needs this.to run in mobile
                _this.video_playing = 3;
                _this.videoWorld_3 = _this.demoVideo_3.addToWorld();

                _this.skip.bringToTop();

                _this.demoAudio6Timer = setTimeout(function ()    //* demoAudio1 js timer to play demoAudio6Timer after 2 seconds.
                {
                    console.log("inside demoAudio1.....")
                    clearTimeout(_this.demoAudio6Timer);         //* clear the time once its used.
                    _this.demoAudio1.play();
                }, 2000);

                _this.demoAudio5Timer = setTimeout(function ()    //* demoAudio5 js timer to play demoAudio5Timer after 10 seconds.
                {
                    console.log("inside demoAudio5.....")
                    clearTimeout(_this.demoAudio5Timer);         //* clear the time once its used.
                    _this.demoAudio5.play();
                }, 10000);

                _this.demoAudio7Timer = setTimeout(function ()    //* demoAudio3 js timer to play demoAudio7Timer after 20 seconds.
                {
                    console.log("inside demoAudio3.....")
                    clearTimeout(_this.demoAudio7Timer);         //* clear the time once its used.
                    _this.demoAudio3.play();
                }, 20000);

                _this.demoAudio8Timer = setTimeout(function ()    //* demoAudio5 js timer to play demoAudio8Timer after 27 seconds.
                {
                    console.log("inside demoAudio5.....")
                    clearTimeout(_this.demoAudio8Timer);         //* clear the time once its used.
                    _this.demoAudio5.play();
                }, 27000);


                _this.demoVideo_3.onComplete.add(function () {
                    console.log("demovideo 3 completed......!!!1")
                    _this.demoVideo_4 = _this.add.video('gmpar01_4');
                    _this.demoVideo_4.play(false);
                    _this.demoVideo_4.changeSource(window.baseUrl + "assets/demoVideos/GMPAR-01-G6_4.mp4");  //* phaser needs this.to run in mobile
                    _this.video_playing = 4;
                    _this.videoWorld_4 = _this.demoVideo_4.addToWorld();

                    _this.skip.bringToTop();

                    _this.q6Sound.play();

                    _this.q7Timer = setTimeout(function ()    //* q7 js timer to play q7Timer after 22 seconds.
                    {
                        console.log("inside q7.....")
                        clearTimeout(_this.q7Timer);         //* clear the time once its used.
                        _this.q7Sound.play();
                    }, 22000);

                    _this.q8Timer = setTimeout(function ()    //* q8 js timer to play q8Timer after 28 seconds.
                    {
                        console.log("inside q8.....")
                        clearTimeout(_this.q8Timer);         //* clear the time once its used.
                        _this.q8Sound.play();
                    }, 28100);

                    _this.demoVideo_4.onComplete.add(function () {
                        _this.stopAudio();
                        _this.demoVideo_4.stop(false);
                        _this.demoVideo_3.stop(false);
                        _this.demoVideo_2.stop(false);
                        _this.demoVideo_1.stop(false);
                        _this.videoWorld_4.destroy();
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

        });
    }
}
