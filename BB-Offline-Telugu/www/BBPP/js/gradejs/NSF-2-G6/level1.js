Game.NSF_2_G6level1 = function () { };

Game.NSF_2_G6level1.prototype =
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

        _this.ColorChangeSound = document.createElement('audio');
        _this.ColorChangeSoundsrc = document.createElement('source');
        _this.ColorChangeSoundsrc.setAttribute("src", window.baseUrl + "sounds/Game_Asset_Disappear.mp3");
        _this.ColorChangeSound.appendChild(_this.ColorChangeSoundsrc);


        telInitializerbbpp.gameIdInit("NSF_2_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },

    create: function (game) {

        //* show the demo video
        _this.time.events.add(1, function () {
            _this.ViewDemoVideo();
        });

        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(1000, function () {
            _this.gameCreate();
        });
    },

    ViewDemoVideo: function () {
        //* pause the game before going to the demovideo 
        _this.game.paused = true;
        _this.DemoVideo();  //* at the end of demo video/skip pressed, it will unpause the game.
    },

    gameCreate: function () {
        console.log("in gameCreate function...............");
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;
        
        _this.count1 = 0;

        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        //_this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        //  //* User Progress variables for BB++ app
        //  _this.userHasPlayed = 0;
        //  _this.timeinMinutes;
        //  _this.timeinSeconds;
        //  _this.game_id;
        //  _this.score = 0;
        //  _this.gradeTopics;
         _this.microConcepts;
        //  _this.grade;

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;
        _this.qn_flag = -1;

        //** include the background file, navigation bar, stars, timer objects.
        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(10, 6, 'backbtn');
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

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                console.log(_this.speakerbtnClicked);
                console.log(_this.rightbtn_is_Clicked);
                console.log(_this.qn_flag);
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                if (_this.qn_flag == 1) {
                    _this.askQn1();
                }
                if (_this.qn_flag == 2) {
                    _this.askQn2();
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



        _this.generateStarsForTheScene(6);

        //* include variables for use - objGroup (where cube objects can be added)
        _this.objGroup;
        _this.numGroup;

        //* first digit and second digit of number selected on number pad
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';

        //* Horizontal or Vertical cubes to be shown for shuffling. 1 - Horizontal, 2 - Vertical.
        _this.HzOrVertArray = [1, 2];
        _this.HzOrVertIndex = 0;


        //* X, y coordinates for placing cubes
        _this.Hz_x = [50, 85, 120, 155, 190, 225, 260, 295, 330, 365, 400, 435, 470, 505, 540, 575, 610, 645, 680, 715];//store 20 x value];               
        _this.Hz_y = 250;
        _this.Ver_y = [360, 325, 290, 255, 220, 185, 150, 115, 80, 45];//store 10 x value];              
        _this.Ver_x = 400;

        //* used for evaluation
        _this.denominator = false;
        _this.numerator = false;

        //*empty array to store cube coutn
        _this.cube_count = [];

        _this.askedDenominators = [-1, -1, -1, -1, -1, -1];

        _this.getQuestion();
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

        //* randomize the numbers, horizontal or vertical box and decide numerator and denominator
        _this.randomizing_elements();
        _this.gotoFractions();

        _this.questionid = 1;

    },

    stopVoice: function () {
        if (_this.Question1) {
            _this.Question1.pause();
            _this.Question1 = null;
            _this.Question1src = null;
        }

        if (_this.Question2) {
            _this.Question2.pause();
            _this.Question2 = null;
            _this.Question2src = null;
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

    gotoFractions: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
        //* get  vertical / horizontal from the array shuffled.
        //_this.HzOrVert = _this.HzOrVertArray[ use index varialbe used for this array];

        //* load the initial screen with  vertical/horizontal
        _this.LoadInitialScreen();

        if (_this.count1 == 0)   //* only for first question, ask the vo question
        {
            //* ask the question How many cubes are there? Enter the denominator’
            _this.askQn1();
        }

        //* with a delay call Addnumber pad function to add the denominator
        //* set a flag to show that the numberpad is being shown for how many cubes ae there 
        //* set the other flag for asking denominator and numerator
        //* this flag will be used while validating the number entered
        _this.denominator = true;
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.numerator = false;

        //* add a delay if reqquired and show number pad
        _this.time.events.add(2000, function () {
            _this.qn_flag = 1;
            _this.SquareBox1.frame = 1;
            console.log(_this.SquareBox1.frame);
            _this.addNumberPad();
        });
        // _this.time.events.add(3000,function(){
        //     _this.SquareBox1.frame=0;
        // });        
    },


    //* load all the initial screen elements based on the options chosen by randomizing function 
    LoadInitialScreen: function () {
        _this.objGroup = _this.add.group();
        _this.AddInitialScreen()//* adding cubes to screen 
        console.log(_this.objGroup.length);
    },

    AddInitialScreen: function () {

        _this.AnswerBox = _this.add.image(800, 150, 'numberBox');
        _this.SquareBox1 = _this.add.sprite(26, 78, 'SquareBox');//825 230
        _this.SquareBox1.frame = 0;
        _this.SquareBox2 = _this.add.sprite(26, 15.1, 'SquareBox');//825 165
        _this.SquareBox2.frame = 0;

        _this.AnswerBox.addChild(_this.SquareBox1);
        _this.AnswerBox.addChild(_this.SquareBox2);
        _this.SquareBox1.bringToTop();
        _this.SquareBox2.bringToTop();

        console.log(_this.HzOrVertArray[_this.HzOrVertIndex]);
        console.log(_this.Hz_Denominator);
        console.log(_this.Ver_Denominator);
        console.log(_this.HzOrVertArray[_this.HzOrVertIndex]);
        //* add image to enter denominator and numerator here already decided horozontal or vertical
        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            _this.askedDenominators[_this.count1] = _this.Hz_Denominator;
            if (_this.Hz_Denominator <= 5) {
                console.log("greater  9");
                for (var i = 0; i < _this.Hz_Denominator; i++) {
                    //* add cube image use x and y in create fn
                    _this.objGroup.create(_this.Hz_x[i] + 140, _this.Hz_y, 'HorizontalCube');    //* add to objGroup                
                    _this.cube_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator                
                }
            }
            else if (_this.Hz_Denominator > 5) {
                console.log("greater  9");
                for (var i = 0; i < _this.Hz_Denominator; i++) {
                    //* add cube image use x and y in create fn
                    _this.objGroup.create(_this.Hz_x[i], _this.Hz_y, 'HorizontalCube');    //* add to objGroup                
                    _this.cube_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator                
                }
            }
        }
        else {
            _this.askedDenominators[_this.count1] = _this.Ver_Denominator;
            if (_this.Ver_Denominator <= 8) {
                for (var i = 0; i < _this.Ver_Denominator; i++) {
                    //*smae as above for vertical
                    _this.cubeobject = _this.objGroup.create(_this.Ver_x, _this.Ver_y[i] - 35, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 1;
                    _this.cube_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator
                }
            }
            else if (_this.Ver_Denominator > 8) {

                for (var i = 0; i < _this.Ver_Denominator; i++) {
                    //*smae as above for vertical
                    _this.cubeobject = _this.objGroup.create(_this.Ver_x, _this.Ver_y[i] + 35, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 1;
                    _this.cube_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator
                }
            }


        }

    },

    askQn1: function () {
        console.log("how many cubes are there");
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-2-G6/" +
            _this.languageSelected + "/NSF-2-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);
        _this.Question1.play();
    },

    askQn2: function () {
        console.log('Represent the shaded cubes as fraction.');
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NSF-2-G6/" +
            _this.languageSelected + "/NSF-2-G6-b.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
    },

    //* shuffle the Horizontal or Vertical representation array for selecting one randomly.
    //* decing numerator and denominator for vetical and hozizontal
    randomizing_elements: function () {

        //* Horizontal or Vertical cubes to be shown for shuffling. 1 - Horizontal, 2 - Vertical.
        _this.HzOrVertical = _this.shuffle(_this.HzOrVertArray);
        // _this.HzOrVertArray[_this.HzOrVertIndex]=2;
        //* genearte denominator 

        _this.Ver_Denominator = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
        _this.Hz_Denominator = Math.floor(Math.random() * (20 - 2 + 1)) + 2;

        for (i = 0; i <= _this.count1; i++) {
            console.log("asked numbers: " + i + " " + _this.askedDenominators[i]);

            if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
                if (_this.Hz_Denominator == _this.askedDenominators[i]) {
                    _this.Ver_Denominator = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
                    _this.Hz_Denominator = Math.floor(Math.random() * (20 - 2 + 1)) + 2;
                    console.log("genearte denominator1");
                    i = -1;
                }
                else if (_this.askedDenominators[i] == -1) {
                    console.log("genearte denominator2 break");
                    break;
                }
            }
            else {
                if (_this.Ver_Denominator == _this.askedDenominators[i]) {
                    _this.Ver_Denominator = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
                    _this.Hz_Denominator = Math.floor(Math.random() * (20 - 2 + 1)) + 2;
                    console.log("Vertical genearte denominator2");
                    i = -1;
                }
                else if (_this.askedDenominators[i] == -1) {
                    console.log("Vertical genearte denominator2 break");
                    break;
                }
            }
        }

        //* generate numerator
        _this.Ver_Numerator = Math.floor(Math.random() * ((_this.Ver_Denominator - 1) - 1 + 1)) + 1;
        _this.Hz_Numerator = Math.floor(Math.random() * ((_this.Hz_Denominator - 1) - 1 + 1)) + 1;

        if (_this.count1 == 5) {
            //* for last question numerator and denominator should be same
            _this.Ver_Numerator = _this.Ver_Denominator;
            _this.Hz_Numerator = _this.Hz_Denominator;
        }
        //        console.log("Count1: " + _this.count1);
        //        console.log("Hz_Denominator: "+ _this.Hz_Denominator);
        //        console.log("Ver_Denominator: "+ _this.Ver_Denominator);
        //
        //        console.log("Hz_numerator: "+ _this.Hz_Numerator);
        //        console.log("Ver_numerator: "+ _this.Ver_Numerator);
    },

    //* to select cubes ramdomly and tween upwards or left
    tweenfunction1: function () {
        _this.Cube_index = _this.shuffle(_this.cube_count);
        _this.tweened_cubeGroup = _this.add.group();

        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            _this.Cube_index[_this.Hz_Numerator];

            for (var i = 0; i < _this.Hz_Numerator; i++) {
                //                console.log(_this.Cube_index[i]);
                trayDragAction = _this.add.tween(_this.objGroup.getChildAt(_this.Cube_index[i]));
                trayDragAction.to({ x: _this.objGroup.getChildAt(_this.Cube_index[i]).x, y: _this.objGroup.getChildAt(_this.Cube_index[i]).y - 40 }, 1000, 'Linear', true, 0);
                trayDragAction.start();
            }

            _this.time.events.add(2000, function () {
                _this.ColorChangeSound.play();
                for (var k = 0; k < _this.Hz_Numerator; k++) {
                    _this.objGroup.getChildAt(_this.Cube_index[k]).frame = 1;
                }
            });

        }
        else {
            _this.Cube_index[_this.Ver_Numerator];

            for (var i = 0; i < _this.Ver_Numerator; i++) {
                trayDragAction = _this.add.tween(_this.objGroup.getChildAt(_this.Cube_index[i]));
                trayDragAction.to({ x: _this.objGroup.getChildAt(_this.Cube_index[i]).x + 50, y: _this.objGroup.getChildAt(_this.Cube_index[i]).y }, 1000, 'Linear', true, 0);
                trayDragAction.start();
            }

            _this.time.events.add(2000, function () {
                _this.ColorChangeSound.play();
                for (var k = 0; k < _this.Ver_Numerator; k++) {
                    _this.objGroup.getChildAt(_this.Cube_index[k]).frame = 0;
                }
            });
        }
        console.log(_this.tweened_cubeGroup.length);
    },

    //*placing their initial position
    tweenfunction2: function () {
        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {

            for (var i = 0; i < _this.Hz_Numerator; i++) {
                trayDragAction = _this.add.tween(_this.objGroup.getChildAt(_this.Cube_index[i]));
                trayDragAction.to({ x: _this.objGroup.getChildAt(_this.Cube_index[i]).x, y: _this.objGroup.getChildAt(_this.Cube_index[i]).y + 40 }, 1000, 'Linear', true, 0);
                trayDragAction.start();
            }
        }
        else {
            for (var i = 0; i < _this.Ver_Numerator; i++) {
                trayDragAction = _this.add.tween(_this.objGroup.getChildAt(_this.Cube_index[i]));
                trayDragAction.to({ x: _this.objGroup.getChildAt(_this.Cube_index[i]).x - 50, y: _this.objGroup.getChildAt(_this.Cube_index[i]).y }, 1000, 'Linear', true, 0);
                trayDragAction.start();
            }
        }

    },

    //* Change this function to show small number pad as given in GDD. (no signs)
    addNumberPad: function () {

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

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.eraseScreen();
    },

    eraseScreen: function (target) {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.SquareBox1.removeChild(_this.enterTxt);
        _this.SquareBox2.removeChild(_this.enterTxt);
        _this.enterTxt.destroy();
        _this.enterTxt;
        _this.enterTxt.text = "";
        console.log(_this.selectedAns1);
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },


    //* Change this function to take 2 digit numbers only. No sign expected.
    //* this is called when a number on num pad is clicked.

    numClicked: function (target) {
        _this.clickSound.play();
        // _this.SquareBox1.frame=0;
        // _this.SquareBox2.frame=0;
        //_this.qn_flag=-1;
        console.log(target.name);
        if (_this.selectedAns2 === '') {
            console.log(target.name);
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


        //console.log(_this.selectedAns1);
        if (_this.numerator == true) {
            if ((Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) &&
                (_this.selectedAns2 === '')) {
                _this.enterTxt = _this.add.text(16, 9, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
            }
            else {
                _this.enterTxt = _this.add.text(9, 9, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//36 88
            }
            _this.SquareBox2.addChild(_this.enterTxt);
        }
        else if (_this.denominator == true) {
            if ((Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) &&
                (_this.selectedAns2 === '')) {
                _this.enterTxt = _this.add.text(16, 9, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
            }
            else {
                _this.enterTxt = _this.add.text(9, 9, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//36 88
            }
            _this.SquareBox1.addChild(_this.enterTxt);
        }

        _this.enterTxt.align = 'right';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'normal';
        //_this.AnswerBox.addChild(_this.enterTxt);
        _this.enterTxt.visible = true;
    },

    //* This is called when Right btn on the numberpad is clicked to enter numerator and denominator        
    rightbtnClicked: function () {
        _this.qn_flag = -1;
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        _this.SquareBox1.frame = 0;
        _this.SquareBox2.frame = 0;

        //_this.rightbtn_is_Clicked=true;
        if (_this.denominator == true) {
            _this.evaluation1(); //* evaluation for denominator

            if (_this.denominator_flag == 1) {
                _this.numGroup.destroy(); //* after enter corect denominator destroying the numberpad
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                _this.counterCelebrationSound.play();
                _this.tweenfunction1();
                _this.time.events.add(3000, _this.tweenfunction2);
                _this.time.events.add(4000, function () {

                    _this.denominator = false;
                    _this.numerator = true;  //*//here set flag to false because further we are not use denominator and go for numerator 
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    if (_this.count1 == 0)   //* only first time ask audio question.
                    {
                        _this.askQn2();
                    }

                });
                _this.time.events.add(6000, function () {
                    _this.qn_flag = 2;
                    _this.SquareBox2.frame = 1;
                    _this.addNumberPad();
                });
                // _this.time.events.add(7000,function(){
                //     _this.SquareBox2.frame=0;
                // });
            }
            else {
                _this.qn_flag = 1;
                //               console.log("for wrong ans");
                _this.wrongSound.play();
                _this.time.events.add(200, _this.destroyingObject);
                _this.time.events.add(1000, _this.gotoFractions);
            }

        }
        else if (_this.numerator == true) {
            _this.numerator == false;
            _this.evaluation2(); //* evaluation for numerator //* need to code

        }
    },



    //* here denominator will calculate 
    //* if it correct go for numerator operation
    //* if its wrong repeat the qn from begining

    evaluation1: function () {
        //* need to code for evaluation of the denomination
        //write code for evaluation
        //        console.log(_this.Hz_Denominator);
        //        console.log(_this.Ver_Denominator);
        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            if (_this.Hz_Denominator == Number('' + _this.selectedAns1 + _this.selectedAns2)) {
                _this.denominator_flag = 1;
            }
            else {
                _this.denominator_flag = 0;
            }
        }

        else {
            if (_this.Ver_Denominator == Number('' + _this.selectedAns1 + _this.selectedAns2)) {
                _this.denominator_flag = 1;
            }
            else {
                _this.denominator_flag = 0;
            }
        }
        //        console.log(_this.Hz_Denominator);
        //        console.log( Number(''+_this.selectedAns1+_this.selectedAns2));

    },

    evaluation2: function () {
        _this.noofAttempts++;
        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            if (_this.Hz_Numerator == Number('' + _this.selectedAns1 + _this.selectedAns2)) {
                //                console.log("correct");
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebrationSound.play();
                _this.celebration();
                _this.starActions();
                _this.numGroup.destroy();
                _this.time.events.add(2000, _this.destroyingOtherObject);
                _this.time.events.add(2500, _this.nextquestion);
            }
            else {8
                _this.qn_flag = 2;
                _this.wrongSound.play();
                _this.destroyingObject();
                _this.gotoFractions();
            }
        }

        else {
            if (_this.Ver_Numerator == Number('' + _this.selectedAns1 + _this.selectedAns2)) {
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebrationSound.play();
                _this.celebration();
                _this.starActions();
                _this.numGroup.destroy();
                _this.time.events.add(2000, _this.destroyingOtherObject);
                _this.time.events.add(2500, _this.nextquestion);
            }
            else {
                _this.qn_flag = 2;
                _this.wrongSound.play();
                _this.time.events.add(300, _this.destroyingObject);
                _this.time.events.add(1000, _this.gotoFractions);
            }
        }

    },

    destroyingObject: function () {
        _this.objGroup.destroy()
        _this.eraseScreen();
        _this.numGroup.destroy();
        _this.AnswerBox.destroy();
    },

    destroyingOtherObject: function () {
        _this.objGroup.destroy()
        _this.eraseScreen();
        _this.AnswerBox.destroy();
    },

    celebration: function () {

        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            console.log(_this.objGroup.length);
            console.log(_this.Hz_Denominator - _this.Hz_Numerator);
            for (var j = 0; j < _this.Hz_Denominator - _this.Hz_Numerator; j++) {
                console.log(j);
                console.log(_this.objGroup.getChildAt(j).frame);
                _this.objGroup.getChildAt(j).frame = 0;
            }
            for (var k = _this.objGroup.length - 1; k >= _this.Hz_Denominator - _this.Hz_Numerator; k--) {
                _this.objGroup.getChildAt(k).frame = 1;
            }
        }
        else {
            for (var l = 0; l < _this.Ver_Denominator - _this.Ver_Numerator; l++) {
                _this.objGroup.getChildAt(l).frame = 1;
            }
            for (var m = _this.objGroup.length - 1; m >= _this.Ver_Denominator - _this.Ver_Numerator; m--) {
                _this.objGroup.getChildAt(m).frame = 0;
            }
        }

    },

    nextquestion: function () {
        console.log(_this.cube_count.length)
        if (_this.count1 < 6) {
            for (var i = 0; i < _this.cube_count.length; i++) {
                _this.cube_count.splice(i);

            }
            console.log(_this.cube_count.length)
            _this.denominator = true;
            _this.numerator = false;
            _this.randomizing_elements();
            _this.gotoFractions();

        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            // _this.time.events.add(2500,function(){ window.parent.location.reload();});
            _this.time.events.add(2400, function () {
                //* transition to score. Score App version will show score menu - home/replay/next.
                //* Score Diksha version will end the session and show the score.
                //* appropriate version of the score should be present in commonjsfiles folder.
                _this.time.events.add(50, function () {
                    //_this.state.start('score');
                    _this.state.start('score', true, false,gameID,_this.microConcepts);
                });
            });
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
        // _this.game_id = "NSF_2_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Fractions";
        _this.microConcepts = "Number Systems";
        //_this.anim.play();
        _this.count1++;
        anim.play();
    },

    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },


    //* functions related to showing the demo video. 
    //* the game is paused before calling this. Once the demo video 
    //* completes or skip button is pressed, it makes _this.game.paused = false.

    DemoVideo: function () {
        //* This game introduces the concept of Fraction as part of a collection
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-2-G6/" +
            _this.languageSelected + "/NSF-2-G6-demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* how many cubes are there
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-2-G6/" +
            _this.languageSelected + "/NSF-2-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* represent the colored cubes as a fraction
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-2-G6/" +
            _this.languageSelected + "/NSF-2-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.showDemoVideo();  //* call the function to show the video

        // _this.backbtn1 = _this.add.sprite(10, 6, 'backbtn');
        // _this.backbtn1.inputEnabled = true;
        // _this.backbtn1.input.useHandCursor = true;
        // _this.backbtn1.events.onInputDown.add(function ()
        // {   
        //     _this.clickSound.play();
        //    // _this.stopVideo();
        //     _this.stopAudio();
        //     _this.game.paused = false;
        //     _this.state.start('grade6NumberSystems',true,false);
        // });

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.clickSound.play();
            //_this.stopVideo();
            _this.stopAudio();
            _this.videoWorld.destroy();
            _this.game.paused = false;  //* restart the game
        });
    },

    //* function to stop the video and audio if they are playing.
    stopVideo: function () {
        if (_this.demoVideo_1) {
            _this.demoVideo_1.destroy();
            _this.videoWorld.destroy();
        }
    },

    stopAudio: function () {
        //* clear all the timers first

        if (_this.q2Timer) clearTimeout(_this.q2Timer);

        if (_this.dVTimer) clearTimeout(_this.dVTimer);

        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.q1Sound) {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound.removeEventListener('ended', _this.qA1);
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }
        //_this.backbtn1.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                   //* skip button destroyed
        // _this.backbtn1.destroy();               //* backbutton button destroyed
    },

    //* event functions for demo audio and question audios. 
    //* do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        _this.q1Sound.play();
    },

    showDemoVideo: function () {
        //* As _this.game is paused, phaser time events cannot be used since its timer is stopped.
        //* so we have to use js timers as required

        _this.demoAudio1.play();
        _this.demoVideo_1 = _this.add.video('nsf2_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSF-2-G6_1.mp4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* play question 1

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2 after 15 seconds.
        {
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 15000);

        _this.dVTimer = setTimeout(function ()   //* dvTimer - add a js timer to stop demovideo after 25 seconds.
        {
            clearTimeout(_this.dVTimer);
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop vide.
            _this.videoWorld.destroy();         //* destroy the video, gets removed from screen.
            _this.game.paused = false;          //* now, unpause the game, so that it continues.
        }, 25000);
    }
}

//* video related commands
//        _this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        _this.videoWorld = this.video.addToWorld();
//        _this.video2.stop(false);
//        _this.video2.onComplete.add(function() {})
//        _this.video3.playbackRate = 1;
//        _this.game.paused = true; //* pauses the game.
//        _this.videoWorld.destroy(); //* removes video from screen
