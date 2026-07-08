Game.NSF_11_G6level1 = function () { };

Game.NSF_11_G6level1.prototype =
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


        _this.giveShadeSound = document.createElement('audio');
        _this.giveShadeSoundsrc = document.createElement('source');
        _this.giveShadeSoundsrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.giveShadeSound.appendChild(_this.giveShadeSoundsrc);

        telInitializerbbpp.gameIdInit("NSF_11_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },

    create: function (game) {

        //* show the demo video
        _this.time.events.add(1, function () {
            _this.ViewDemoVideo();
        });

        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(1200, function () {
            _this.gameCreate();
        });
    },

    ViewDemoVideo: function () {
        //* pause the game before going to the demovideo 
        _this.game.paused = true;
        _this.DemoVideo();  //* at the end of demo video/skip pressed, it will unpause the game.
    },

    gameCreate: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.count1 = 0;
        _this.graphicsObj = [];

        _this.speakerbtn;
        _this.background;
        _this.countHrVerRept = [-1, -1, -1, -1, -1, -1];
        _this.WholeQues = 0;

        //_this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        //   //* User Progress variables for BB++ app
        //   _this.userHasPlayed = 0;
        //   _this.timeinMinutes;
        //   _this.timeinSeconds;
        //   _this.game_id;
        //   _this.score = 0;
        //   _this.gradeTopics;
           _this.microConcepts;
        //   _this.grade;

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

                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                if (_this.qn_flag == 1) {
                    if (_this.Question1) {
                        _this.Question1.pause();
                        _this.Question1.currentTime = 0;
                    }
                    _this.askQn1();
                }
                if (_this.qn_flag == 2) {
                    if (_this.Question2) {
                        _this.Question2.pause();
                        _this.Question2.currentTime = 0;
                    }
                    _this.askQn2();
                }
                if (_this.qn_flag == 3) {
                    // _this.stopVoice();
                    if (_this.Question3) {
                        _this.Question3.pause();
                        _this.Question3.currentTime = 0;
                    }
                    _this.askQn3();
                }
                _this.time.events.add(2000, function () {
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

        // Draggable Object
        _this.stack2 = false;
        _this.stack1 = false;

        //* first digit and second digit of number selected on number pad
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';

        //* Horizontal or Vertical cubes to be shown for shuffling. 1 - Horizontal, 2 - Vertical.
        _this.HzOrVertArray = [1, 2];
        _this.HzOrVertIndex = 0;

        //* X, y coordinates for placing cubes

        _this.Hz_x1 = [50, 85, 120, 155, 190, 225, 260, 295, 330, 365, 400, 435, 470, 505, 540, 575, 610, 645, 680, 715];//store 20 x value];               
        _this.Hz_y1 = 100;
        _this.Ver_y1 = [360, 325, 290, 255, 220, 185, 150, 115, 80, 45];//store 10 x value];              
        _this.Ver_x1 = 350;

        _this.Hz_x2 = [50, 85, 120, 155, 190, 225, 260, 295, 330, 365, 400, 435, 470, 505, 540, 575, 610, 645, 680, 715];//store 20 x value];               
        _this.Hz_y2 = 225;
        _this.Ver_y2 = [360, 325, 290, 255, 220, 185, 150, 115, 80, 45];//store 10 x value];              
        _this.Ver_x2 = 450;

        _this.Hz_x3 = [50, 85, 120, 155, 190, 225, 260, 295, 330, 365, 400, 435, 470, 505, 540, 575, 610, 645, 680, 715];//store 20 x value];               
        _this.Hz_y3 = 350;
        _this.Ver_y3 = [360, 325, 290, 255, 220, 185, 150, 115, 80, 45];//store 10 x value];              
        _this.Ver_x3 = 550;


        _this.cube1_count = [];
        _this.cube2_count = [];
        _this.cube3_count = [];
        //* used for evaluation
        _this.denominator = false;
        _this.numerator = false;
        _this.ansArray = [-1, -1];

        _this.num = false;
        _this.denom = false;
        _this.hzCount = 0;

        //*empty array to store cube coutn
        _this.cube_count = [];

        _this.askedDenominators = [-1, -1, -1, -1, -1, -1];

        //* start the game with first question
        _this.time.events.add(2000, _this.getQuestion);
    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () {
        if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.speakerbtnClicked = false;
        }
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

        //* ask the question How many cubes are there? Enter the denominator’
        if (_this.count1 < 1) {

            _this.askQn1();
        }
        _this.qn_flag = 1;


        //* with a delay call Addnumber pad function to add the denominator
        //* set a flag to show that the numberpad is being shown for how many cubes ae there 
        //* set the other flag for asking denominator and numerator
        //* this flag will be used while validating the number entered
        _this.denominator = false;
        _this.numerator = true;

        //* add a delay if reqquired and show number pad
        _this.time.events.add(2000, function () {
            _this.qn_flag = 1;
            _this.SquareBox1.frame = 1;
            _this.addNumberPad();
        });

    },


    //* load all the initial screen elements based on the options chosen by randomizing function 
    LoadInitialScreen: function () {
        _this.objGroup1 = _this.add.group();
        _this.objGroup2 = _this.add.group();
        _this.objGroup3 = _this.add.group();
        _this.objGroup1cpy = _this.add.group();
        _this.objGroup2cpy = _this.add.group();
        _this.objGroup3cpy = _this.add.group();

        _this.AddInitialScreen()//* adding cubes to screen 
    },
    askQn1: function () {
        // console.log("What are the fractions shown here?");
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-11-G6/" +
            _this.languageSelected + "/NSF-11-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);
        _this.Question1.play();
    },

    askQn2: function () {
        // console.log('Add the fractions by dragging them to the whole.');
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NSF-11-G6/" + _this.languageSelected + "/NSF-11-G6-b.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
    },
    askQn3: function () {
        // console.log('Enter the answer.');
        _this.Question3 = document.createElement('audio');
        _this.Question3src = document.createElement('source');
        _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NSF-11-G6/" + _this.languageSelected + "/NSF-11-G6-d.mp3");
        _this.Question3.appendChild(_this.Question3src);
        _this.Question3.play();
    },

    AddAnswerBoxesVr: function () {
        _this.YellowBox1 = _this.add.image(350, 353, 'yellowtextbox');
        _this.YellowBox1.scale.setTo(1.0);
        _this.YellowBox1.visible = false;

        _this.SquareBox1 = _this.add.sprite(350, 355, 'SquareBox');//825 230
        _this.SquareBox1.frame = 1;
        _this.SquareBox1.scale.setTo(0.9);

        _this.SquareBox2 = _this.add.sprite(350, 400, 'SquareBox');//825 165
        _this.SquareBox2.frame = 0;
        _this.SquareBox2.scale.setTo(0.9);

        _this.line1 = _this.AddLineGraphics(_this.SquareBox1.x, _this.SquareBox2.y, '0x65B4C3');

        _this.YellowBox2 = _this.add.image(450, 353, 'yellowtextbox');
        _this.YellowBox2.scale.setTo(1.0);
        _this.YellowBox2.visible = false;

        _this.SquareBox3 = _this.add.sprite(450, 355, 'SquareBox');//825 230
        _this.SquareBox3.frame = 0;
        _this.SquareBox3.scale.setTo(0.9);
        _this.SquareBox3.visible = false;

        _this.SquareBox4 = _this.add.sprite(450, 400, 'SquareBox');//825 165
        _this.SquareBox4.frame = 0;
        _this.SquareBox4.scale.setTo(0.9);
        _this.SquareBox4.visible = false;

        _this.line2 = _this.AddLineGraphics(_this.SquareBox3.x, _this.SquareBox4.y, '0x65B4C3');
        _this.line2.visible = false;

        _this.enableBoxes(_this.SquareBox1, _this.SquareBox2);


    },
    AddAnswerBoxesHr: function () {
        _this.YellowBox1 = _this.add.image(618, 73, 'yellowtextbox');
        _this.YellowBox1.scale.setTo(1.0);
        _this.YellowBox1.visible = false;
        _this.SquareBox1 = _this.add.sprite(620, 75, 'SquareBox');//825 230
        _this.SquareBox1.frame = 1;
        _this.SquareBox1.scale.setTo(0.9);

        _this.SquareBox2 = _this.add.sprite(620, 120, 'SquareBox');//825 165
        _this.SquareBox2.frame = 0;
        _this.SquareBox2.scale.setTo(0.9);

        _this.line1 = _this.AddLineGraphics(_this.SquareBox1.x, _this.SquareBox2.y, '0x65B4C3');

        _this.YellowBox2 = _this.add.image(618, 203, 'yellowtextbox');
        _this.YellowBox2.scale.setTo(1.0);
        _this.YellowBox2.visible = false;

        _this.SquareBox3 = _this.add.sprite(620, 205, 'SquareBox');//825 230
        _this.SquareBox3.frame = 0;
        _this.SquareBox3.scale.setTo(0.9);
        _this.SquareBox3.visible = false;

        _this.SquareBox4 = _this.add.sprite(620, 250, 'SquareBox');//825 165
        _this.SquareBox4.frame = 0;
        _this.SquareBox4.scale.setTo(0.9);
        _this.SquareBox4.visible = false;


        _this.line2 = _this.AddLineGraphics(_this.SquareBox3.x, _this.SquareBox4.y, '0x65B4C3');
        _this.line2.visible = false;

        _this.enableBoxes(_this.SquareBox1, _this.SquareBox2);

    },
    AddPlusSign: function (y) {

        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(4, 0xff0000);
        _this.graphics.moveTo(y + 32, y);
        _this.graphics.lineTo(y + 10, y);
        _this.graphicsObj.push(_this.graphics);

        _this.graphics.moveTo(y + 21, y + 10);
        _this.graphics.lineTo(y + 21, y - 10);
        _this.graphicsObj.push(_this.graphics);


    },
    AddPlusSignHr: function (y) {
        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(4, 0xff0000);
        _this.graphics.moveTo(y + 347, y);
        _this.graphics.lineTo(y + 325, y);
        _this.graphicsObj.push(_this.graphics);

        _this.graphics.moveTo(y + 336, y + 10);
        _this.graphics.lineTo(y + 336, y - 10);
        _this.graphicsObj.push(_this.graphics);

    },
    AddEqualsSignHr: function (y) {
        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(4, 0xff0000);
        _this.graphics.moveTo(y + 70 + 305, y - 55);
        _this.graphics.lineTo(y + 84 + 305, y - 55);
        _this.graphicsObj.push(_this.graphics);


        _this.graphics.moveTo(y + 70 + 305, y - 45);
        _this.graphics.lineTo(y + 84 + 305, y - 45);
        _this.graphicsObj.push(_this.graphics);

    },
    AddEqualsSign: function (y) {
        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(4, 0xff0000);
        _this.graphics.moveTo(y + 70, y - 55);
        _this.graphics.lineTo(y + 84, y - 55);
        _this.graphicsObj.push(_this.graphics);


        _this.graphics.moveTo(y + 70, y - 45);
        _this.graphics.lineTo(y + 84, y - 45);
        _this.graphicsObj.push(_this.graphics);

    },
    AddEqualsSign2: function (y) {
        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(4, 0xff0000);
        _this.graphics.moveTo(y + 170, y - 55);
        _this.graphics.lineTo(y + 184, y - 55);
        _this.graphicsObj.push(_this.graphics);


        _this.graphics.moveTo(y + 170, y - 45);
        _this.graphics.lineTo(y + 184, y - 45);
        _this.graphicsObj.push(_this.graphics);

    },

    AddLineGraphics: function (x, y, color) {

        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(4, color);
        _this.graphics.moveTo(x + 46, y);
        _this.graphics.lineTo(x + 1, y);
        _this.graphicsObj.push(_this.graphics);
        return _this.graphics

    },
    AddLineGraphics2: function (x, y, color) {

        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(4, color);
        _this.graphics.moveTo(x + 43, y);
        _this.graphics.lineTo(x + 6, y);
        _this.graphicsObj.push(_this.graphics);
        return _this.graphics

    },


    AddInitialScreen: function () {

        _this.draggableObj1 = _this.add.group();
        _this.draggableObj2 = _this.add.group();
        // console.log(_this.HzOrVertArray[_this.HzOrVertIndex]);
        // console.log(_this.Hz_Denominator);
        // console.log(_this.Ver_Denominator);

        //* add image to enter denominator and numerator here already decided horozontal or vertical
        // console.log(_this.stack1Numerator, _this.stack2Numerator)

        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            _this.askedDenominators[_this.count1] = _this.Hz_Denominator;
            if (_this.Hz_Denominator <= 7) {
                // console.log("less than 5");
                for (var i = 0; i < _this.Hz_Denominator; i++) {
                    //* add cube image use x and y in create fn
                    _this.cubeobject = _this.objGroup1.create(_this.Hz_x1[i] + 140, _this.Hz_y1, 'HorizontalCube');    //* add to objGroup         
                    _this.cubeobject.frame = 0;
                    _this.cube1_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator                
                }
                for (var i = 0; i < _this.Hz_Denominator - _this.stack1Numerator; i++) {
                    _this.cubeobject = _this.objGroup1cpy.create(_this.Hz_x1[i] + 140, _this.Hz_y1, 'HorizontalCube');    //* add to objGroup         
                    _this.cubeobject.frame = 4;

                }
                for (var k = _this.Hz_Denominator - _this.stack1Numerator; k < _this.Hz_Denominator; k++) {
                    _this.cubeobject = _this.draggableObj1.create(_this.Hz_x1[k] + 140, _this.Hz_y1, 'HorizontalCube');    //* add to objGroup         
                    _this.cubeobject.frame = 1;
                }

                // For Stack 2

                for (var i = 0; i < _this.Hz_Denominator; i++) {
                    _this.cubeobject = _this.objGroup2.create(_this.Hz_x2[i] + 140, _this.Hz_y2, 'HorizontalCube');    //* add to objGroup                
                    _this.cubeobject.frame = 0;

                    _this.cube2_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator                
                }
                for (var i = 0; i < _this.Hz_Denominator - _this.stack2Numerator; i++) {
                    _this.cubeobject = _this.objGroup2cpy.create(_this.Hz_x2[i] + 140, _this.Hz_y2, 'HorizontalCube');    //* add to objGroup         
                    _this.cubeobject.frame = 4;

                }
                for (var k = _this.Hz_Denominator - _this.stack2Numerator; k < _this.Hz_Denominator; k++) {
                    _this.cubeobject = _this.draggableObj2.create(_this.Hz_x2[k] + 140, _this.Hz_y2, 'HorizontalCube');    //* add to objGroup         

                    _this.cubeobject.frame = 2;
                }
                // For Stack 3

                for (var i = 0; i < _this.Hz_Denominator; i++) {
                    _this.cubeobject = _this.objGroup3.create(_this.Hz_x3[i] + 140, _this.Hz_y3, 'HorizontalCube');    //* add to objGroup                

                    _this.cube3_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator                
                    _this.cubeobject.frame = 0;
                }


            }
            else if (_this.Hz_Denominator > 7) {
                // console.log("greater 5");
                for (var i = 0; i < _this.Hz_Denominator; i++) {
                    //* add cube image use x and y in create fn
                    _this.cubeobject = _this.objGroup1.create(_this.Hz_x1[i] - 20, _this.Hz_y1, 'HorizontalCube');    //* add to objGroup                
                    _this.cubeobject.frame = 0;

                    _this.cube1_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator                
                }
                for (var i = 0; i < _this.Hz_Denominator - _this.stack1Numerator; i++) {
                    _this.cubeobject = _this.objGroup1cpy.create(_this.Hz_x1[i] - 20, _this.Hz_y1, 'HorizontalCube');    //* add to objGroup         
                    _this.cubeobject.frame = 4;

                }
                // console.log(_this.cube1_count.length);
                for (var k = _this.Hz_Denominator - _this.stack1Numerator; k < _this.Hz_Denominator; k++) {
                    _this.cubeobject = _this.draggableObj1.create(_this.Hz_x1[k] - 20, _this.Hz_y1, 'HorizontalCube');    //* add to objGroup         

                    _this.cubeobject.frame = 1;
                }


                for (var i = 0; i < _this.Hz_Denominator; i++) {
                    //* add cube image use x and y in create fn
                    _this.cubeobject = _this.objGroup2.create(_this.Hz_x2[i] - 20, _this.Hz_y2, 'HorizontalCube');    //* add to objGroup                
                    _this.cubeobject.frame = 0;

                    _this.cube2_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator                
                }
                for (var i = 0; i < _this.Hz_Denominator - _this.stack2Numerator; i++) {
                    //* add cube image use x and y in create fn
                    _this.cubeobject = _this.objGroup2cpy.create(_this.Hz_x2[i] - 20, _this.Hz_y2, 'HorizontalCube');    //* add to objGroup         
                    _this.cubeobject.frame = 4;

                }
                for (var k = _this.Hz_Denominator - _this.stack2Numerator; k < _this.Hz_Denominator; k++) {
                    _this.cubeobject = _this.draggableObj2.create(_this.Hz_x2[k] - 20, _this.Hz_y2, 'HorizontalCube');    //* add to objGroup         

                    _this.cubeobject.frame = 2;
                }

                for (var i = 0; i < _this.Hz_Denominator; i++) {
                    //* add cube image use x and y in create fn
                    _this.cubeobject = _this.objGroup3.create(_this.Hz_x3[i] - 20, _this.Hz_y3, 'HorizontalCube');    //* add to objGroup                
                    _this.cube3_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator                
                    _this.cubeobject.frame = 0;

                }
            }
            _this.AddAnswerBoxesHr();

        }
        else {

            _this.askedDenominators[_this.count1] = _this.Ver_Denominator;
            if (_this.Ver_Denominator <= 4) {

                for (var i = 0; i < _this.Ver_Denominator; i++) {
                    //*same as above for vertical
                    _this.cubeobject = _this.objGroup1.create(_this.Ver_x1, _this.Ver_y1[i] - 120, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 0;
                }
                for (var i = 0; i < _this.Ver_Denominator - _this.stack1Numerator; i++) {
                    _this.cubeobject = _this.objGroup1cpy.create(_this.Ver_x1, _this.Ver_y1[i] - 120, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 3;
                }

                for (var k = _this.Ver_Denominator - _this.stack1Numerator; k < _this.Ver_Denominator; k++) {
                    _this.cubeobject = _this.draggableObj1.create(_this.Ver_x1, _this.Ver_y1[k] - 120, 'VerticalCube'); //* add to objGroup

                    _this.cubeobject.frame = 2;
                }
                // For Stack 2

                for (var i = 0; i < _this.Ver_Denominator; i++) {
                    _this.cubeobject = _this.objGroup2.create(_this.Ver_x2, _this.Ver_y2[i] - 120, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 0;
                }
                for (var i = 0; i < _this.Ver_Denominator - _this.stack2Numerator; i++) {
                    _this.cubeobject = _this.objGroup2cpy.create(_this.Ver_x2, _this.Ver_y2[i] - 120, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 3;
                }

                for (var k = _this.Ver_Denominator - _this.stack2Numerator; k < _this.Ver_Denominator; k++) {
                    _this.cubeobject = _this.draggableObj2.create(_this.Ver_x2, _this.Ver_y2[k] - 120, 'VerticalCube'); //* add to objGroup

                    _this.cubeobject.frame = 1;
                }
                // For Stack 3

                for (var i = 0; i < _this.Ver_Denominator; i++) {
                    //*smae as above for vertical
                    _this.cubeobject = _this.objGroup3.create(_this.Ver_x3, _this.Ver_y3[i] - 120, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 0;
                }
            }

            else if (_this.Ver_Denominator > 4) {
                for (var i = 0; i < _this.Ver_Denominator; i++) {
                    _this.cubeobject = _this.objGroup1.create(_this.Ver_x1, _this.Ver_y1[i] - 75, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 0;

                }

                for (var i = 0; i < _this.Ver_Denominator - _this.stack1Numerator; i++) {
                    _this.cubeobject = _this.objGroup1cpy.create(_this.Ver_x1, _this.Ver_y1[i] - 75, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 3;
                }

                for (var k = _this.Ver_Denominator - _this.stack1Numerator; k < _this.Ver_Denominator; k++) {
                    _this.cubeobject = _this.draggableObj1.create(_this.Ver_x1, _this.Ver_y1[k] - 75, 'VerticalCube'); //* add to objGroup

                    _this.cubeobject.frame = 2;
                }

                for (var i = 0; i < _this.Ver_Denominator; i++) {
                    _this.cubeobject = _this.objGroup2.create(_this.Ver_x2, _this.Ver_y2[i] - 75, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 0;
                }

                for (var i = 0; i < _this.Ver_Denominator - _this.stack2Numerator; i++) {
                    _this.cubeobject = _this.objGroup2cpy.create(_this.Ver_x2, _this.Ver_y2[i] - 75, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 3;
                }

                for (var k = _this.Ver_Denominator - _this.stack2Numerator; k < _this.Ver_Denominator; k++) {
                    _this.cubeobject = _this.draggableObj2.create(_this.Ver_x2, _this.Ver_y2[k] - 75, 'VerticalCube'); //* add to objGroup

                    _this.cubeobject.frame = 1;
                }

                for (var i = 0; i < _this.Ver_Denominator; i++) {
                    _this.cubeobject = _this.objGroup3.create(_this.Ver_x3, _this.Ver_y3[i] - 75, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 0;
                    _this.cube3_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator
                }

            }
            _this.AddAnswerBoxesVr();

        }


    },
    //* to show drag action to user from outside to workspace.
    drag_cubesAction_Ver: function () {
        var denominator_length = _this.stack1Numerator;

        _this.tempCubeGroup = _this.add.group();


        for (var i = 0; i < denominator_length; i++)  //* create a temp group
        {
            //* create temp group of cubes to show dragging action to user. 
            _this.tempCube = _this.add.sprite(_this.draggableObj1.getChildAt(i).x, _this.draggableObj1.getChildAt(i).y, 'VerticalCube');
            _this.tempCubeGroup.addChild(_this.tempCube);

            _this.tempCube.frame = 2;

        }

        _this.time.events.add(1000, function () {
            _this.hand = _this.add.image(_this.draggableObj1.getChildAt(i - 1).x + 20, _this.draggableObj1.getChildAt(i - 1).y, 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.tempCubeGroup.addChild(_this.hand);
        });

        _this.time.events.add(1500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.tempCubeGroup);
            tempDragAction.to({ x: 200, y: -_this.objGroup3.getChildAt(_this.Ver_Denominator - 1).y + _this.objGroup3.getChildAt(_this.stack1Numerator - 1).y }, 800, 'Linear', true, 0);
            tempDragAction.start();
        });

        //* destroy the group after the show after a delay
        _this.time.events.add(3000, function () {
            _this.tempCubeGroup.destroy();
            _this.EnableSelectedCube();
        });
    },

    drag_cubesAction_Ver2: function () {
        var denominator_length = _this.stack2Numerator;

        _this.tempCubeGroup = _this.add.group();


        for (var i = 0; i < denominator_length; i++)  //* create a temp group
        {
            //* create temp group of cubes to show dragging action to user. 
            _this.tempCube = _this.add.sprite(_this.draggableObj2.getChildAt(i).x, _this.draggableObj2.getChildAt(i).y, 'VerticalCube');
            _this.tempCubeGroup.addChild(_this.tempCube);

            _this.tempCube.frame = 1;

        }

        _this.time.events.add(1000, function () {
            _this.hand = _this.add.image(_this.draggableObj2.getChildAt(i - 1).x + 20, _this.draggableObj2.getChildAt(i - 1).y, 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.tempCubeGroup.addChild(_this.hand);
        });
        for (l = 0; l < _this.stack2Numerator; l++) {
            //console.log("hi");
            let currentCube = _this.draggableObj2.getChildAt(l);
            currentCube.inputEnabled = false;
            currentCube.input.useHandCursor = false;
            currentCube.input.enableDrag(false);

        }

        _this.time.events.add(1500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.tempCubeGroup);
            tempDragAction.to({ x: 100, y: -_this.objGroup3.getChildAt(_this.Ver_Denominator - 1).y + _this.objGroup3.getChildAt(_this.stack1Numerator + _this.stack2Numerator - 1).y }, 600, 'Linear', true, 0);
            tempDragAction.start();
        });


        //* destroy the group after the show after a delay
        _this.time.events.add(3000, function () {
            _this.tempCubeGroup.destroy();
            for (l = 0; l < _this.stack2Numerator; l++) {
                //console.log("hi");
                let currentCube = _this.draggableObj2.getChildAt(l);
                currentCube.inputEnabled = true;
                currentCube.input.useHandCursor = true;
                currentCube.input.enableDrag(true);
                currentCube.events.onDragUpdate.add(_this.Ver_Sel_dragUpdate2, currentCube);
                currentCube.events.onDragStop.add(_this.Ver_Sel_dragStop2, currentCube);
            }
            // _this.EnableSelectedCube();
        });
    },

    EnableSelectedCube: function ()
    //* enable the bottom cubes to be clicked and dragged.
    {

        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {

            for (l = 0; l < _this.stack1Numerator; l++) {
                let currentCube = _this.draggableObj1.getChildAt(l);
                currentCube.inputEnabled = true;
                currentCube.input.useHandCursor = true;
                currentCube.input.enableDrag(true);
                // console.log("in Horizontal")
                currentCube.events.onDragUpdate.add(_this.Sel_dragUpdate, currentCube);
                currentCube.events.onDragStop.add(_this.Sel_dragStop, currentCube);

            }

            for (l = 0; l < _this.stack2Numerator; l++) {
                let currentCube = _this.draggableObj2.getChildAt(l);
                currentCube.inputEnabled = true;
                currentCube.input.useHandCursor = true;
                currentCube.input.enableDrag(true);
                currentCube.events.onDragUpdate.add(_this.Sel_dragUpdate2, currentCube);
                currentCube.events.onDragStop.add(_this.Sel_dragStop2, currentCube);
            }
        }
        else {
            for (l = 0; l < _this.stack1Numerator; l++) {
                let currentCube = _this.draggableObj1.getChildAt(l);
                currentCube.inputEnabled = true;
                currentCube.input.useHandCursor = true;
                currentCube.input.enableDrag(true);
                currentCube.events.onDragUpdate.add(_this.Ver_Sel_dragUpdate, currentCube);
                currentCube.events.onDragStop.add(_this.Ver_Sel_dragStop, currentCube);
            }


            for (l = 0; l < _this.stack2Numerator; l++) {
                //console.log("hi");
                let currentCube = _this.draggableObj2.getChildAt(l);
                currentCube.inputEnabled = true;
                currentCube.input.useHandCursor = true;
                currentCube.input.enableDrag(true);
                currentCube.events.onDragUpdate.add(_this.Ver_Sel_dragUpdate2, currentCube);
                currentCube.events.onDragStop.add(_this.Ver_Sel_dragStop2, currentCube);
            }
        }

    },

    Sel_dragUpdate: function (target) {
        //console.log("inside drag update");
        //* drag stop for draggableObj1. target is one counter which is dragged
        //* target.name has its position number. All counter in front and back, change the x,y
        //* with a displacement from the dragged counter. There are two for loops for this.

        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x - 45;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name); k < _this.stack1Numerator; k++) {
            _this.draggableObj1.getChildAt(k).y = dragggedCubeY;
            _this.draggableObj1.getChildAt(k).x = draggedCubeX + 34 * frontpos;

            frontpos++;
        }

        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.draggableObj1.getChildAt(k).y = dragggedCubeY;
            _this.draggableObj1.getChildAt(k).x = draggedCubeX - 34 * backpos;

            backpos++;
        }

    },

    Sel_dragStop: function (target) {
        //console.log("selected drag stop function............ ");

        _this.clickSound.play();
        // console.log(target.y);
        if (target.y <= 795 && target.y >= 85)  //* if within rangetarget.x>=50 && target.x<=616 && 
        {
            _this.draggableObj1.destroy();
            _this.stack1 = true;
            if (_this.stack2 == true) {
                for (i = _this.stack2Numerator; i < _this.stack1Numerator + _this.stack2Numerator; i++) {
                    _this.objGroup3.getChildAt(i).frame = 1;

                }
            }
            else {
                for (i = 0; i < _this.stack1Numerator; i++) {

                    _this.objGroup3.getChildAt(i).frame = 1;

                }
            }

            if (_this.count1 < 1 && _this.stack2 == false) {
                _this.drag_cubesAction_Hr2();
            }

            if (_this.stack1 == true && _this.stack2 == true)
                _this.reArrangeHrCubes();
        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            for (var i = 0; i < _this.stack1Numerator; i++) {
                _this.draggableObj1.getChildAt(i).x = _this.objGroup1.getChildAt(i + _this.Hz_Denominator - _this.stack1Numerator).x;
                _this.draggableObj1.getChildAt(i).y = _this.objGroup1.getChildAt(i + _this.Hz_Denominator - _this.stack1Numerator).y;
            }
        }

    },

    Ver_Sel_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y + 50;
        for (let k = Number(target.name); k < _this.stack1Numerator; k++) {
            _this.draggableObj1.getChildAt(k).y = dragggedCubeY - 34 * frontpos;
            _this.draggableObj1.getChildAt(k).x = draggedCubeX;

            frontpos++;
        }
        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.draggableObj1.getChildAt(k).y = dragggedCubeY + 34 * backpos;
            _this.draggableObj1.getChildAt(k).x = draggedCubeX;

            backpos++;
        }
    },

    Ver_Sel_dragStop: function (target) {
        _this.clickSound.play();
        if (target.x >= 320 && target.x <= 655)  //* if within range &&  target.y<360 && target.y>170
        {
            _this.draggableObj1.destroy();
            _this.stack1 = true;
            if (_this.count1 < 1 && _this.stack2 == false) {
                _this.drag_cubesAction_Ver2();
            }
            if (_this.stack2 == true) {
                for (i = _this.stack2Numerator; i < _this.stack1Numerator + _this.stack2Numerator; i++) {
                    _this.objGroup3.getChildAt(i).frame = 2;
                }
            }
            else {
                for (i = 0; i < _this.stack1Numerator; i++) {
                    _this.objGroup3.getChildAt(i).frame = 2;
                }
            }
            if (_this.stack1 == true && _this.stack2 == true)
                _this.reArrangeVerCubes();

        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            for (var i = 0; i < _this.stack1Numerator; i++) {
                _this.draggableObj1.getChildAt(i).x = _this.objGroup1.getChildAt(i + _this.Ver_Denominator - _this.stack1Numerator).x;
                _this.draggableObj1.getChildAt(i).y = _this.objGroup1.getChildAt(i + _this.Ver_Denominator - _this.stack1Numerator).y;
            }

        }


    },
    Sel_dragUpdate2: function (target) {
        //console.log("inside drag update for draggable object 2");

        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x - 45;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name); k < _this.stack2Numerator; k++) {
            _this.draggableObj2.getChildAt(k).y = dragggedCubeY;
            _this.draggableObj2.getChildAt(k).x = draggedCubeX + 34 * frontpos;
            frontpos++;
        }

        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.draggableObj2.getChildAt(k).y = dragggedCubeY;
            _this.draggableObj2.getChildAt(k).x = draggedCubeX - 34 * backpos;
            backpos++;
        }

    },

    Sel_dragStop2: function (target) {
        //console.log("selected draggable object 2 stop function............ ");

        _this.clickSound.play();
        // console.log(target.y);
        if (target.y <= 695 && target.y >= 200)  //* if within rangetarget.x>=50 && target.x<=616 && 
        {
            _this.stack2 = true;

            _this.draggableObj2.destroy();
            if (_this.stack1 == false) {
                for (i = 0; i < _this.stack2Numerator; i++) {
                    _this.objGroup3.getChildAt(i).frame = 2;
                }
            }
            else {
                for (i = _this.stack1Numerator; i < _this.stack1Numerator + _this.stack2Numerator; i++) {
                    _this.objGroup3.getChildAt(i).frame = 2;
                }
            }

            if (_this.stack1 == true && _this.stack2 == true)
                _this.reArrangeHrCubes();

        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            for (var i = 0; i < _this.stack2Numerator; i++) {
                _this.draggableObj2.getChildAt(i).x = _this.objGroup2.getChildAt(i + _this.Hz_Denominator - _this.stack2Numerator).x;
                _this.draggableObj2.getChildAt(i).y = _this.objGroup2.getChildAt(i + _this.Hz_Denominator - _this.stack2Numerator).y;
            }

        }

    },

    Ver_Sel_dragUpdate2: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y + 50;
        for (let k = Number(target.name); k < _this.stack2Numerator; k++) {
            _this.draggableObj2.getChildAt(k).y = dragggedCubeY - 34 * frontpos;
            _this.draggableObj2.getChildAt(k).x = draggedCubeX;

            frontpos++;
        }
        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.draggableObj2.getChildAt(k).y = dragggedCubeY + 34 * backpos;
            _this.draggableObj2.getChildAt(k).x = draggedCubeX;

            backpos++;
        }

    },

    Ver_Sel_dragStop2: function (target) {
        //        console.log(target.y);
        //        console.log(target.x);
        _this.clickSound.play();
        if (target.x >= 400 && target.x <= 655)  //* if within range &&  target.y<360 && target.y>170
        {
            _this.draggableObj2.destroy();
            _this.stack2 = true;


            if (_this.stack1 == false) {
                for (i = 0; i < _this.stack2Numerator; i++) {
                    _this.objGroup3.getChildAt(i).frame = 1;
                }
            }
            else {
                for (i = _this.stack1Numerator; i < _this.stack1Numerator + _this.stack2Numerator; i++) {
                    _this.objGroup3.getChildAt(i).frame = 1;

                }
            }
            if (_this.stack1 == true && _this.stack2 == true)
                _this.reArrangeVerCubes();

        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            for (var i = 0; i < _this.stack2Numerator; i++) {
                _this.draggableObj2.getChildAt(i).x = _this.objGroup2.getChildAt(i + _this.Ver_Denominator - _this.stack2Numerator).x;
                _this.draggableObj2.getChildAt(i).y = _this.objGroup2.getChildAt(i + _this.Ver_Denominator - _this.stack2Numerator).y;
            }

        }

    },
    reArrangeHrCubes: function () {
        _this.time.events.add(500, function () {

            _this.giveShadeSound.play();
            _this.objGroup3cpy.destroy();
            _this.objGroup3cpy = _this.add.group();
            for (let i = 0; i < _this.Hz_Denominator; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.objGroup3.getChildAt(i).frame = 4;
                });
            }

            for (let i = _this.Hz_Denominator - (_this.stack1Numerator + _this.stack2Numerator); i < _this.Hz_Denominator; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.objGroup3.getChildAt(i).frame = 5;
                });
                // _this.objGroup3.getChildAt(i).frame = 5;
            }
            _this.AddEqualsSignHr(410);
            _this.makefinalboxes();
            _this.qn_flag = 3;

        });

        _this.time.events.add(1500, function () {

            if (_this.count1 < 1)
                _this.askQn3();
            for (i = 0; i < 12; i++) {
                _this.numGroup.getChildAt(i).inputEnabled = true;
                _this.numGroup.getChildAt(i).input.useHandCursor = true;

            }
        });

    },
    reArrangeVerCubes: function () {
        _this.time.events.add(500, function () {
            _this.giveShadeSound.play();

            _this.objGroup3cpy.destroy();
            _this.objGroup3cpy = _this.add.group();
            for (let i = 0; i < _this.Ver_Denominator; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.objGroup3.getChildAt(i).frame = 3;
                });

            }
            for (let i = _this.Ver_Denominator - (_this.stack1Numerator + _this.stack2Numerator); i < _this.Ver_Denominator; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.objGroup3.getChildAt(i).frame = 5;
                });

            }
            _this.AddEqualsSign(450);
            _this.makefinalboxes();
            _this.qn_flag = 3;

        });

        _this.time.events.add(1000, function () {

            if (_this.count1 < 1)
                _this.askQn3();
            for (i = 0; i < 12; i++) {
                // _this.numbg.inputEnabled = true;
                // _this.numbg.input.useHandCursor = true;
                _this.numGroup.getChildAt(i).inputEnabled = true;
                _this.numGroup.getChildAt(i).input.useHandCursor = true;

            }


        });
    },


    //* shuffle the Horizontal or Vertical representation array for selecting one randomly.
    //* decing numerator and denominator for vetical and hozizontal
    randomizing_elements: function () {

        //* Horizontal or Vertical cubes to be shown for shuffling. 1 - Horizontal, 2 - Vertical.
        _this.HzOrVertArray = _this.shuffle(_this.HzOrVertArray);
        var loopcount = 0;

        if (_this.count1 < 1) {
            _this.HzOrVertArray[_this.HzOrVertIndex] = 2;
            _this.HzOrVertArray[1] = 1;
        }
        // Checking if we r getting simulatenous representations of same orientation
        if (_this.count1 > 1) {

            if (_this.countHrVerRept[_this.count1 - 2] == _this.countHrVerRept[_this.count1 - 1]) {
                if (_this.countHrVerRept[_this.count1 - 1] == 1) {
                    _this.HzOrVertArray[_this.HzOrVertIndex] = 2;
                    _this.HzOrVertArray[1] = 1;
                }
                else {
                    _this.HzOrVertArray[_this.HzOrVertIndex] = 1;
                    _this.HzOrVertArray[1] = 2;

                }

            }
        }

        _this.Ver_Denominator = Math.floor(Math.random() * (7 - 3 + 1)) + 3;
        _this.Hz_Denominator = Math.floor(Math.random() * (16 - 3 + 1)) + 3;
        if (_this.count1 == 5 && _this.WholeQues != 1) {

            _this.HzOrVertArray[_this.HzOrVertIndex] = 2;
            _this.HzOrVertArray[1] = 1;

            // _this.stack1Numerator = Math.floor(Math.random() * ((_this.Ver_Denominator - 2) - 1) + 1);

            // _this.stack2Numerator = _this.Ver_Denominator - _this.stack1Numerator;

        }

        for (i = 0; i <= _this.count1; i++) {

            if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
                _this.hzCount = 1;
                // console.log(_this.WholeQues)
                _this.countHrVerRept[_this.count1] = 1;

                // if (_this.WholeQues == 1) {
                // console.log("hello")
                _this.stack1Numerator = Math.floor(Math.random() * ((_this.Hz_Denominator - 2) - 1) + 1);
                _this.stack2Numerator = Math.floor(Math.random() * ((_this.Hz_Denominator - _this.stack1Numerator - 1) - 1) + 1);
                // }
                // else {
                //     _this.stack1Numerator = Math.floor(Math.random() * ((_this.Hz_Denominator - 2) - 1 + 1)) + 1;
                //     _this.stack2Numerator = Math.floor(Math.random() * ((_this.Hz_Denominator - _this.stack1Numerator) - 1 + 1)) + 1;
                // }
                // console.log(_this.stack1Numerator, _this.stack2Numerator);

                if ((_this.stack1Numerator + _this.stack2Numerator < _this.Hz_Denominator - 1) && _this.stack1Numerator == _this.stack2Numerator)
                    _this.stack2Numerator += 1;
                // console.log(_this.stack1Numerator, _this.stack2Numerator);
                if (_this.Hz_Denominator == _this.askedDenominators[i]) {
                    _this.Hz_Denominator = Math.floor(Math.random() * (16 - 3 + 1)) + 3;
                    // console.log("genearte denominator1");
                    i = -1;
                    loopcount += 1;
                    if (loopcount >= 5)
                        break;
                }

                else if (_this.askedDenominators[i] == -1) {
                    break;
                }

            }
            else {
                // console.log(_this.WholeQues)
                _this.countHrVerRept[_this.count1] = 2;

                if (_this.WholeQues == 1) {
                    _this.stack1Numerator = Math.floor(Math.random() * ((_this.Ver_Denominator - 2) - 1) + 1);
                    _this.stack2Numerator = Math.floor(Math.random() * ((_this.Ver_Denominator - _this.stack1Numerator - 1) - 1) + 1);
                }
                else {
                    _this.stack1Numerator = Math.floor(Math.random() * ((_this.Ver_Denominator - 2) - 1 + 1)) + 1;
                    _this.stack2Numerator = Math.floor(Math.random() * ((_this.Ver_Denominator - _this.stack1Numerator) - 1 + 1)) + 1;
                }

                if ((_this.stack1Numerator + _this.stack2Numerator < _this.Ver_Denominator - 1) && _this.stack1Numerator == _this.stack2Numerator)
                    _this.stack2Numerator += 1;
                // console.log(_this.stack1Numerator, _this.stack2Numerator);
                if (_this.Ver_Denominator == _this.askedDenominators[i]) {
                    _this.Ver_Denominator = Math.floor(Math.random() * (7 - 3 + 1)) + 3;
                    // console.log("Vertical genearte denominator2");
                    i = -1;
                    loopcount += 1;
                    if (loopcount >= 10)
                        break;
                }

                else if (_this.askedDenominators[i] == -1) {
                    break;
                }
            }
        }

        // if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
        //     if (_this.stack1Numerator + _this.stack2Numerator == _this.Hz_Denominator) {
        //         _this.WholeQues = 1;

        //     }
        //     if (_this.count1 == 5 && _this.WholeQues != 1) {
        //         _this.stack1Numerator = Math.floor(Math.random() * ((_this.Hz_Denominator - 2) - 1) + 1);
        //         _this.stack2Numerator = _this.Hz_Denominator - _this.stack1Numerator;

        //     }


        // }
        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 2) {
            if (_this.stack1Numerator + _this.stack2Numerator == _this.Ver_Denominator) {
                _this.WholeQues = 1;

            }
            if (_this.count1 == 5 && _this.WholeQues != 1) {

                _this.stack1Numerator = Math.floor(Math.random() * ((_this.Ver_Denominator - 2) - 1) + 1);

                _this.stack2Numerator = _this.Ver_Denominator - _this.stack1Numerator;

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

        _this.enterTxt1 = _this.add.text(8, 8, "");
        _this.enterTxt1.anchor.setTo(0.5);
        _this.enterTxt1.align = 'center';
        _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt1.fontSize = "30px";
        _this.enterTxt1.fontWeight = 'normal';
        _this.enterTxt1.fill = '#65B4C3';
        _this.enterTxt2 = _this.add.text(8, 8, "");
        _this.enterTxt2.anchor.setTo(0.5);
        _this.enterTxt2.align = 'center';
        _this.enterTxt2.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt2.fontSize = "30px";
        _this.enterTxt2.fontWeight = 'normal';
        _this.enterTxt2.fill = '#65B4C3';

        //_this.objGroup1add(_this.ScreenTextBox);
        _this.numpadTween = _this.add.tween(_this.numGroup);

        //_this.ScreenTextTween = _this.add.tween(_this.ScreenTextBox);

        //tween in the number pad after a second.
        //_this.time.events.add(100, _this.tweenNumPad);
        _this.tweenNumPad();

        //after 2 seconds, show the screen text box as enabled
        //_this.time.events.add(2000, _this.enableScreenText);

    },
    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        if (_this.Box1.frame == 1) {
            _this.numerator = true;
            _this.Box1.removeChild(_this.enterTxt1);
            _this.enterTxt1.destroy();
            _this.enterTxt1;
            _this.ansArray[0] = 0;

            _this.enterTxt1.text = "";
            _this.num = false;

        }
        else if (_this.Box2.frame == 1) {
            _this.denominator = true;
            _this.Box2.removeChild(_this.enterTxt2);
            _this.enterTxt2.destroy();
            _this.enterTxt2;
            _this.ansArray[1] = 0;

            _this.enterTxt2.text = "";
            _this.denom = false;

        }

        // _this.eraseScreen();
    },
    eraseAll: function () {
        _this.eraseScreen();
        // console.log("erasing number pad")
        _this.numGroup.visible = false;
        _this.numGroup.destroy();
        _this.graphicsObj.forEach(element => {
            element.destroy();
        });
        // Destroying yellow Boxes
        _this.YellowBox1.destroy();
        _this.YellowBox2.destroy();
        _this.YellowBoxAns.destroy();


        // Destroying numerator n denominators

        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            _this.displayHrdenom1.destroy();
            _this.displayHrnum1.destroy();
            _this.displayHrnum2.destroy();
            _this.displayHrdenom2.destroy();
            _this.YellowBoxhr1.destroy();
            _this.YellowBoxhr2.destroy();
        }
        _this.displaydenom1.destroy();
        _this.displaydenom2.destroy();
        _this.displaynumAns.destroy();
        _this.displaydenomAns.destroy();
        _this.displaynum1.destroy();
        _this.displaynum2.destroy();

        _this.cube1_count = [];
        _this.cube2_count = [];
        _this.cube3_count = [];
        _this.objGroup1.destroy();
        _this.objGroup2.destroy();
        _this.objGroup3.destroy();
        _this.objGroup1cpy.destroy();
        _this.objGroup2cpy.destroy();
        _this.objGroup3cpy.destroy();

        _this.SquareBox3.destroy();
        _this.SquareBox4.destroy();
        _this.SquareBox1.destroy();
        _this.SquareBox2.destroy();
        _this.SquareBox5.destroy();
        _this.SquareBox6.destroy();
        if (_this.SquareBoxWhole)
            _this.SquareBoxWhole.destroy();
        _this.stack1 = false;
        _this.stack2 = false;
        _this.denominator = false;
        _this.numerator = false;
        _this.Denominator = ''
        _this.stackNumerator = ''


    },

    eraseScreen: function (target) {

        _this.Box1.removeChild(_this.enterTxt1);
        _this.Box2.removeChild(_this.enterTxt2);
        _this.enterTxt1.destroy();
        _this.enterTxt2.destroy();
        _this.ansArray = [-1, -1];

        _this.enterTxt1;
        _this.enterTxt2;

        _this.enterTxt1.text = "";
        _this.enterTxt2.text = "";
        _this.num = false;
        _this.denom = false;
        // console.log(_this.selectedAns1);
    },
    enableBoxes: function (Box1, Box2) {

        Box1.visible = true;
        Box2.visible = true;

        _this.denominator = undefined;
        _this.numerator = true;
        _this.selectedAns1 = '';
        Box1.frame = 1;
        Box2.frame = 0;

        Box1.inputEnabled = true;
        Box1.input.useHandCursor = true;

        // console.log("yes its null")
        Box1.events.onInputDown.add(function () {
            if (_this.num == false) {
                _this.numerator = true;
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';

            }
            _this.denominator = false;
            Box1.frame = 1;
            Box2.frame = 0;

        });

        Box2.visible = true;
        Box2.inputEnabled = true;
        Box2.input.useHandCursor = true;

        Box2.events.onInputDown.add(function () {
            if (_this.denom == false) {
                _this.denominator = true;
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';


            }
            _this.numerator = false;

            Box2.frame = 1;
            Box1.frame = 0;

        });

    },

    //* Change this function to take 2 digit numbers only. No sign expected.
    //* this is called when a number on num pad is clicked.

    numClicked: function (target) {
        _this.clickSound.play();
        var font = '30px';
        var toadd = 0;
        if (_this.wholeQ == 1) {
            _this.Box1 = _this.SquareBoxWhole;
            font = '32px';
            toadd = 2;



        }
        if (_this.SquareBox1.frame == 1 || _this.SquareBox2.frame == 1) {
            _this.Box1 = _this.SquareBox1;
            _this.Box2 = _this.SquareBox2;
        }
        else if (_this.SquareBox3.frame == 1 || _this.SquareBox4.frame == 1) {
            _this.Box1 = _this.SquareBox3;
            _this.Box2 = _this.SquareBox4;

        }
        else if (_this.SquareBox5.frame == 1 || _this.SquareBox6.frame == 1) {
            _this.Box1 = _this.SquareBox5;
            _this.Box2 = _this.SquareBox6;

        }
        else {

        }
        // console.log(target.name);
        if (_this.selectedAns2 === '') {
            // console.log(target.name);
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

        if (_this.numerator == true)
            _this.enterTxt1.visible = false;
        else if (_this.denominator == true)
            _this.enterTxt2.visible = false;


        if (_this.selectedAns1 === 10) var_selectedAns1 = 0;
        else var_selectedAns1 = _this.selectedAns1;
        if (_this.selectedAns2 === 10) _this.selectedAns2 = 0;
        else var_selectedAns2 = _this.selectedAns2;
        if (var_selectedAns1 === 0 && _this.selectedAns2 === 0) {
            _this.selectedAns2 = ''
        }

        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;

        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;

        if (_this.denominator == true) {
            //            if ((Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) && 
            if (_this.selectedAns2 === '') {
                _this.enterTxt2 = _this.add.text(16, 9, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
            }
            else {
                _this.enterTxt2 = _this.add.text(9, 9, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//36 88
            }
            _this.ansArray[1] = Number('' + _this.selectedAns1 + _this.selectedAns2);

            _this.enterTxt2.visible = true;
            _this.denom = true;

            _this.Box2.addChild(_this.enterTxt2);
            _this.enterTxt2.align = 'right';
            _this.enterTxt2.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt2.fill = '#65B4C3';
            _this.enterTxt2.fontWeight = 'normal';
            //_this.AnswerBox.addChild(_this.enterTxt);
        }

        else if (_this.numerator == true) {

            //            if ( (Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) && 
            if (_this.selectedAns2 === '') {
                _this.enterTxt1 = _this.add.text(16, 9 - toadd, "" + var_selectedAns1 + var_selectedAns2, { fontSize: font });//43 23
            }
            //            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10)
            else {
                _this.enterTxt1 = _this.add.text(9 - toadd / 2, 9 - toadd, "" + var_selectedAns1 + var_selectedAns2, { fontSize: font });//36 23
            }
            _this.ansArray[0] = Number('' + _this.selectedAns1 + _this.selectedAns2);
            _this.enterTxt1.visible = true;
            _this.num = true;

            _this.Box1.addChild(_this.enterTxt1);
            _this.enterTxt1.align = 'right';
            _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt1.fill = '#65B4C3';
            _this.enterTxt1.fontWeight = 'normal';
        }

    },

    //* This is called when Right btn on the numberpad is clicked to enter numerator and denominator        
    rightbtnClicked: function () {
        _this.clickSound.play();
        _this.noofAttempts++;
        if (_this.wholeQ == 1) {

            if (_this.ansArray[0] == 1) {
                _this.wholeQ = 0;
                _this.qn_flag = -1;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebration();
                _this.SquareBoxWhole.frame = 0;

            } else {
                _this.wrongSound.play();
                _this.Box1.removeChild(_this.enterTxt1);
                _this.enterTxt1.destroy();
                _this.enterTxt1.text = "";
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';

            }
        }
        else if (_this.ansArray[0] > -1 && _this.ansArray[1] > -1 && _this.YellowBox2.visible == true) {
            _this.evaluation();
        }
        else if (_this.ansArray[0] > -1 && _this.ansArray[1] > -1) {
            _this.evaluation1();
            // For colored stacks
        }

        else if (_this.ansArray[0] == 0) {
            // console.log("num 0")
            _this.Box1.removeChild(_this.enterTxt1);
            // _this.Box2.removeChild(_this.enterTxt1);
            _this.wrongSound.play();

            _this.enterTxt1.destroy();
            // _this.enterTxt2.destroy();

            _this.enterTxt1.text = "";
            // _this.enterTxt2.text = "";
            _this.ansArray = [-1, -1];
            // console.log("Re-initialising Array")

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.num = false;
        }
        else if (_this.ansArray[1] == 0) {

            _this.Box2.removeChild(_this.enterTxt1);
            _this.wrongSound.play();

            // _this.enterTxt1.destroy();
            _this.enterTxt2.destroy();
            // console.log("Re-initialising Array")
            _this.ansArray = [-1, -1];


            // _this.enterTxt1.text = "";
            _this.enterTxt2.text = "";

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.denom = false;
        }

        else {
            _this.wrongSound.play();

            // console.log("both not entered")
            _this.enterTxt1.destroy();
            _this.enterTxt2.destroy();

            _this.enterTxt1.text = "";
            _this.enterTxt2.text = "";

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            // console.log("destroying array")
            _this.ansArray = [-1, -1];

            _this.num = false;
            _this.denom = false;

        }
    },

    // Evaluating the fraction here
    evaluation: function () {
        if (_this.SquareBox1.frame == 1 || _this.SquareBox2.frame == 1) {
            _this.stackNumerator = _this.stack1Numerator;
        }
        else if (_this.SquareBox3.frame == 1 || _this.SquareBox4.frame == 1)
            _this.stackNumerator = _this.stack2Numerator;
        else if (_this.SquareBox5.frame == 1 || _this.SquareBox6.frame == 1) {
            _this.stackNumerator = _this.stack1Numerator + _this.stack2Numerator
        }

        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            _this.Denominator = _this.Hz_Denominator
        }
        else
            _this.Denominator = _this.Ver_Denominator

        // console.log(_this.stackNumerator, _this.Denominator)
        if (_this.checkEquivalent()) {
            // _this.counterCelebrationSound.play();
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.displayYellowBox();
            _this.ansArray = [-1, -1];

        }
        else {
            _this.wrongSound.play();
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';

            _this.eraseScreen();
            _this.enableBoxes(_this.Box1, _this.Box2)
        }

    },
    evaluation1: function () {
        if (_this.SquareBox1.frame == 1 || _this.SquareBox2.frame == 1) {
            _this.stackNumerator = _this.stack1Numerator;
        }
        else if (_this.SquareBox3.frame == 1 || _this.SquareBox4.frame == 1)
            _this.stackNumerator = _this.stack2Numerator;
        else if (_this.SquareBox5.frame == 1 || _this.SquareBox6.frame == 1) {
            _this.stackNumerator = _this.stack1Numerator + _this.stack2Numerator
        }

        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            _this.Denominator = _this.Hz_Denominator
        }
        else
            _this.Denominator = _this.Ver_Denominator

        // console.log(_this.stackNumerator, _this.Denominator)
        if (_this.ansArray[0] == _this.stackNumerator && _this.ansArray[1] == _this.Denominator) {
            _this.counterCelebrationSound.play();
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.displayYellowBox();
            _this.ansArray = [-1, -1];

        }
        else {
            _this.wrongSound.play();
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';

            _this.eraseScreen();
            _this.enableBoxes(_this.Box1, _this.Box2)
        }

    },
    checkEquivalent: function () {
        for (var k = 1; k <= _this.stackNumerator; k++) {
            if (_this.ansArray[0] == _this.stackNumerator / k && _this.ansArray[1] == _this.Denominator / k)

                return true;
        }
        return false;
    },


    createHrCpy: function () {

        if (_this.YellowBox2.visible == true) {
            _this.YellowBoxhr2 = _this.add.image(718, 318, 'yellowtextbox');
            _this.YellowBoxhr2.scale.setTo(1.0);
            _this.YellowBoxhr2.visible = false;
            _this.line4 = _this.AddLineGraphics2(_this.SquareBox3.x + 100, _this.SquareBox4.y + 115 - 4, '0xff0000');
            _this.line4.visible = false;
            if (_this.ansArray[1] < 10 && _this.ansArray[0] < 10) {
                _this.displayHrnum2 = _this.add.text(_this.SquareBox3.x + 116, _this.SquareBox3.y + 10 + 115, _this.ansArray[0], { fontSize: '26px' });
                _this.displayHrdenom2 = _this.add.text(_this.SquareBox4.x + 116, _this.SquareBox4.y + 115, _this.ansArray[1], { fontSize: '26px' });
            }
            else if (_this.ansArray[1] >= 10 && _this.ansArray[0] >= 10) {
                _this.displayHrnum2 = _this.add.text(_this.SquareBox3.x + 110, _this.SquareBox3.y + 10 + 115, _this.ansArray[0], { fontSize: '26px' });
                _this.displayHrdenom2 = _this.add.text(_this.SquareBox4.x + 110, _this.SquareBox4.y + 115, _this.ansArray[1], { fontSize: '26px' });

            }
            else if (_this.ansArray[1] < 10 && _this.ansArray[0] >= 10) {
                _this.displayHrnum2 = _this.add.text(_this.SquareBox3.x + 110, _this.SquareBox3.y + 10 + 115, _this.ansArray[0], { fontSize: '26px' });
                _this.displayHrdenom2 = _this.add.text(_this.SquareBox4.x + 116, _this.SquareBox4.y + 115, _this.ansArray[1], { fontSize: '26px' });
            }
            else if (_this.ansArray[1] >= 10 && _this.ansArray[0] < 10) {
                _this.displayHrnum2 = _this.add.text(_this.SquareBox3.x + 116, _this.SquareBox3.y + 10 + 115, _this.ansArray[0], { fontSize: '26px' });
                _this.displayHrdenom2 = _this.add.text(_this.SquareBox4.x + 110, _this.SquareBox4.y + 115, _this.ansArray[1], { fontSize: '26px' });
            }
            _this.displayHrnum2.fill = '#FF0000';
            _this.displayHrdenom2.fill = '#FF0000';
            _this.displayHrnum2.visible = false;
            _this.displayHrdenom2.visible = false;

        }
        else {

            _this.YellowBoxhr1 = _this.add.image(618, 318, 'yellowtextbox');
            _this.YellowBoxhr1.scale.setTo(1.0);
            _this.YellowBoxhr1.visible = false;
            _this.line3 = _this.AddLineGraphics2(_this.SquareBox1.x, _this.SquareBox2.y + 245 - 4, '0xff0000');
            _this.line3.visible = false;
            // console.log(_this.Denominator, _this.stack1Numerator)

            if (_this.ansArray[1] < 10 && _this.ansArray[0] < 10) {

                _this.displayHrnum1 = _this.add.text(_this.SquareBox1.x + 16, _this.SquareBox1.y + 10 + 245, _this.ansArray[0], { fontSize: '26px' });
                _this.displayHrdenom1 = _this.add.text(_this.SquareBox2.x + 16, _this.SquareBox2.y + 245, _this.ansArray[1], { fontSize: '26px' });

            }
            else if (_this.ansArray[1] >= 10 && _this.ansArray[0] >= 10) {

                _this.displayHrnum1 = _this.add.text(_this.SquareBox1.x + 10, _this.SquareBox1.y + 245 + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displayHrdenom1 = _this.add.text(_this.SquareBox2.x + 10, _this.SquareBox2.y + 245, _this.ansArray[1], { fontSize: '26px' });

            }
            else if (_this.ansArray[1] < 10 && _this.ansArray[0] >= 10) {

                _this.displayHrnum1 = _this.add.text(_this.SquareBox1.x + 10, _this.SquareBox1.y + 10 + 245, _this.ansArray[0], { fontSize: '26px' });
                _this.displayHrdenom1 = _this.add.text(_this.SquareBox2.x + 16, _this.SquareBox2.y + 245, _this.ansArray[1], { fontSize: '26px' });

            }
            else if (_this.ansArray[1] >= 10 && _this.ansArray[0] < 10) {

                _this.displayHrnum1 = _this.add.text(_this.SquareBox1.x + 16, _this.SquareBox1.y + 10 + 245, _this.ansArray[0], { fontSize: '26px' });
                _this.displayHrdenom1 = _this.add.text(_this.SquareBox2.x + 10, _this.SquareBox2.y + 245, _this.ansArray[1], { fontSize: '26px' });

            }
            // console.log(_this.displayHrnum1)
            _this.displayHrnum1.fill = '#FF0000';
            _this.displayHrdenom1.fill = '#FF0000';
            _this.displayHrnum1.visible = false;
            _this.displayHrdenom1.visible = false;
        }

    },
    displayYellowBox: function () {

        if (_this.YellowBox1.visible == false) {
            _this.YellowBox1.visible = true;
            _this.line1.destroy();
            _this.line1 = _this.AddLineGraphics2(_this.SquareBox1.x, _this.SquareBox2.y - 3, '0xff0000');
            if (_this.ansArray[1] < 10 && _this.ansArray[0] < 10) {

                _this.displaynum1 = _this.add.text(_this.SquareBox1.x + 16, _this.SquareBox1.y + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displaydenom1 = _this.add.text(_this.SquareBox2.x + 16, _this.SquareBox2.y, _this.ansArray[1], { fontSize: '26px' });
            }
            else if (_this.ansArray[1] >= 10 && _this.ansArray[0] >= 10) {

                _this.displaynum1 = _this.add.text(_this.SquareBox1.x + 10, _this.SquareBox1.y + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displaydenom1 = _this.add.text(_this.SquareBox2.x + 10, _this.SquareBox2.y, _this.ansArray[1], { fontSize: '26px' });

            }
            else if (_this.ansArray[1] < 10 && _this.ansArray[0] >= 10) {

                _this.displaynum1 = _this.add.text(_this.SquareBox1.x + 10, _this.SquareBox1.y + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displaydenom1 = _this.add.text(_this.SquareBox2.x + 16, _this.SquareBox2.y, _this.ansArray[1], { fontSize: '26px' });
            }

            else if (_this.ansArray[1] >= 10 && _this.ansArray[0] < 10) {

                _this.displaynum1 = _this.add.text(_this.SquareBox1.x + 16, _this.SquareBox1.y + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displaydenom1 = _this.add.text(_this.SquareBox2.x + 10, _this.SquareBox2.y, _this.ansArray[1], { fontSize: '26px' });
            }


            if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
                _this.createHrCpy();
            }
            _this.SquareBox1.destroy();
            _this.SquareBox2.destroy();
            _this.num = false;
            _this.denom = false;

            _this.displaynum1.fill = '#FF0000';
            _this.displaydenom1.fill = '#FF0000';
            _this.counterCelebrationSound.play();

            _this.enableBoxes(_this.SquareBox3, _this.SquareBox4)
            _this.line2.visible = true;



        }
        else if (_this.YellowBox2.visible == false) {
            _this.YellowBox2.visible = true;
            _this.line2.destroy();
            _this.line2 = _this.AddLineGraphics2(_this.SquareBox3.x, _this.SquareBox4.y - 3, '0xff0000');
            if (_this.ansArray[1] < 10 && _this.ansArray[0] < 10) {
                _this.displaynum2 = _this.add.text(_this.SquareBox3.x + 16, _this.SquareBox3.y + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displaydenom2 = _this.add.text(_this.SquareBox4.x + 16, _this.SquareBox4.y, _this.ansArray[1], { fontSize: '26px' });
            }
            else if (_this.ansArray[1] >= 10 && _this.ansArray[0] >= 10) {
                _this.displaynum2 = _this.add.text(_this.SquareBox3.x + 10, _this.SquareBox3.y + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displaydenom2 = _this.add.text(_this.SquareBox4.x + 10, _this.SquareBox4.y, _this.ansArray[1], { fontSize: '26px' });

            }
            else if (_this.ansArray[1] < 10 && _this.ansArray[0] >= 10) {
                _this.displaynum2 = _this.add.text(_this.SquareBox3.x + 10, _this.SquareBox3.y + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displaydenom2 = _this.add.text(_this.SquareBox4.x + 16, _this.SquareBox4.y, _this.ansArray[1], { fontSize: '26px' });
            }
            else if (_this.ansArray[1] >= 10 && _this.ansArray[0] < 10) {
                _this.displaynum2 = _this.add.text(_this.SquareBox3.x + 16, _this.SquareBox3.y + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displaydenom2 = _this.add.text(_this.SquareBox4.x + 10, _this.SquareBox4.y, _this.ansArray[1], { fontSize: '26px' });
            }
            if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
                _this.createHrCpy();
            }
            _this.SquareBox3.destroy();
            _this.SquareBox4.destroy();
            _this.displaynum2.fill = '#FF0000';
            _this.displaydenom2.fill = '#FF0000';
            // _this.counterCelebrationSound.pause();
            _this.counterCelebrationSound.currentTime = 0;

            _this.counterCelebrationSound.play();


            _this.num = false;
            _this.denom = false;

            if (_this.HzOrVertArray[_this.HzOrVertIndex] == 2) {
                _this.AddPlusSign(_this.SquareBox2.y);
                if (_this.count1 < 1)
                    _this.drag_cubesAction_Ver();
                else
                    _this.EnableSelectedCube();
            }
            else {
                // Display horizontal copies of num1 and num2
                _this.YellowBoxhr1.visible = true;
                _this.YellowBoxhr2.visible = true;
                _this.line3.visible = true
                _this.line4.visible = true;

                _this.displayHrnum1.visible = true;
                _this.displayHrdenom1.visible = true;
                _this.displayHrnum2.visible = true;
                _this.displayHrdenom2.visible = true;

                _this.AddPlusSignHr(_this.SquareBox2.y + 240);

                _this.EnableSelectedCube();


            }
            _this.qn_flag = 2
            if (_this.count1 < 1)
                _this.askQn2();
            for (i = 0; i < 12; i++) {
                _this.numGroup.getChildAt(i).inputEnabled = false;
            }

        }
        else if (_this.YellowBoxAns.visible == false) {

            _this.YellowBoxAns.visible = true
            _this.lineAns.destroy();
            _this.lineAns = _this.AddLineGraphics2(_this.SquareBox5.x, _this.SquareBox6.y - 3, '0xff0000');
            if (_this.ansArray[1] < 10 && _this.ansArray[0] < 10) {

                _this.displaynumAns = _this.add.text(_this.SquareBox5.x + 16, _this.SquareBox5.y + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displaydenomAns = _this.add.text(_this.SquareBox6.x + 16, _this.SquareBox6.y, _this.ansArray[1], { fontSize: '26px' });
            }
            else if (_this.ansArray[1] >= 10 && _this.ansArray[0] >= 10) {

                _this.displaynumAns = _this.add.text(_this.SquareBox5.x + 10, _this.SquareBox5.y + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displaydenomAns = _this.add.text(_this.SquareBox6.x + 10, _this.SquareBox6.y, _this.ansArray[1], { fontSize: '26px' });

            }

            else if (_this.ansArray[1] < 10 && _this.ansArray[0] >= 10) {
                _this.displaynumAns = _this.add.text(_this.SquareBox5.x + 10, _this.SquareBox5.y + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displaydenomAns = _this.add.text(_this.SquareBox6.x + 16, _this.SquareBox6.y, _this.ansArray[1], { fontSize: '26px' });
            }

            else if (_this.ansArray[1] >= 10 && _this.ansArray[0] < 10) {
                _this.displaynumAns = _this.add.text(_this.SquareBox5.x + 16, _this.SquareBox5.y + 10, _this.ansArray[0], { fontSize: '26px' });
                _this.displaydenomAns = _this.add.text(_this.SquareBox6.x + 10, _this.SquareBox6.y, _this.ansArray[1], { fontSize: '26px' });
            }
            _this.SquareBox5.destroy();
            _this.SquareBox6.destroy();
            _this.num = false;
            _this.denom = false;
            _this.displaynumAns.fill = '#FF0000';
            _this.displaydenomAns.fill = '#FF0000';
            _this.denominator = false;


            if ((Number(_this.stack1Numerator) + Number(_this.stack2Numerator)) / Number(_this.Denominator) == 1) {
                _this.DisplayWholeNumQ();
            }
            else {
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.qn_flag = -1;
                _this.celebration();
            }

        }
    },
    makefinalboxes: function () {

        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {

            _this.YellowBoxAns = _this.add.image(_this.SquareBox4.x + 200, _this.YellowBox1.y + 243, 'yellowtextbox');
            _this.YellowBoxAns.scale.setTo(1.0);
            _this.YellowBoxAns.visible = false;

            _this.SquareBox5 = _this.add.sprite(_this.SquareBox4.x + 200, _this.SquareBox1.y + 243, 'SquareBox');//825 230
            _this.SquareBox5.frame = 1;
            _this.SquareBox5.scale.setTo(0.9);

            _this.SquareBox6 = _this.add.sprite(_this.SquareBox4.x + 200, _this.SquareBox2.y + 243, 'SquareBox');//825 165
            _this.SquareBox6.frame = 0;
            _this.SquareBox6.scale.setTo(0.9);

        }
        else {
            _this.YellowBoxAns = _this.add.image(_this.SquareBox4.x + 100, _this.YellowBox1.y, 'yellowtextbox');
            _this.YellowBoxAns.scale.setTo(1.0);
            _this.YellowBoxAns.visible = false;

            _this.SquareBox5 = _this.add.sprite(_this.SquareBox4.x + 100, _this.SquareBox1.y, 'SquareBox');//825 230
            _this.SquareBox5.frame = 1;
            _this.SquareBox5.scale.setTo(0.9);

            _this.SquareBox6 = _this.add.sprite(_this.SquareBox4.x + 100, _this.SquareBox2.y, 'SquareBox');//825 165
            _this.SquareBox6.frame = 0;
            _this.SquareBox6.scale.setTo(0.9);

        }
        _this.num = false;
        _this.denom = false;
        _this.enableBoxes(_this.SquareBox5, _this.SquareBox6)
        _this.lineAns = _this.AddLineGraphics(_this.SquareBox5.x, _this.SquareBox6.y, '0x65B4C3');

    },
    enablebox: function () {

        _this.denominator = false;
        _this.numerator = true;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.SquareBoxWhole.inputEnabled = true;
        _this.SquareBoxWhole.input.useHandCursor = true;

    },
    DisplayWholeNumQ: function () {

        _this.AddEqualsSign2(450);
        _this.SquareBoxWhole = _this.add.sprite(550 + 100, 400 - 25, 'SquareBox');//825 230
        _this.SquareBoxWhole.frame = 1;
        _this.SquareBoxWhole.scale.setTo(0.9);
        _this.wholeQ = 1;
        _this.enablebox();

    },

    celebration: function () {

        _this.celebrationSound.play();
        _this.starActions(_this.count1);
        _this.time.events.add(1500, _this.eraseAll);
        _this.time.events.add(1500, _this.nextquestion);

    },

    nextquestion: function () {
        if (_this.count1 < 6) {
            _this.denominator = false;
            _this.numerator = false;
            _this.randomizing_elements();
            _this.gotoFractions();
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(1500, function () {
                //_this.state.start('score');
                _this.state.start('score', true, false,gameID,_this.microConcepts);
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
        // _this.game_id = "NSF_11_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Fractions";
        _this.microConcepts = "Number Systems";
        _this.count1++;
        anim.play();

    },
    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },

    DemoVideo: function () {
        //* count the added cubes
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-11-G6/" +
            _this.languageSelected + "/NSF-11-G6-demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* what are the fraction givrn here
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-11-G6/" +
            _this.languageSelected + "/NSF-11-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* add the fraction bye dragging them to the whole
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-11-G6/" + _this.languageSelected + "/NSF-11-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* count the added cubes
        //        _this.q3Sound = document.createElement('audio');
        //        _this.q3Soundsrc = document.createElement('source');
        //        _this.q3Soundsrc.setAttribute("src", "questionSounds/NSF-11-G6/" + 
        //                                         _this.languageSelected + "/NSF-11-G6-c.mp3");
        //        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //* enter your ans
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-11-G6/" +
            _this.languageSelected + "/NSF-11-G6-d.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.showDemoVideo();  //* call the function to show the video

        // _this.backbtn1 = _this.add.sprite(10, 6, 'backbtn');
        // _this.backbtn1.inputEnabled = true;
        // _this.backbtn1.input.useHandCursor = true;
        // _this.backbtn1.events.onInputDown.add(function ()
        // {   
        //     //_this.stopVideo();
        //     _this.stopAudio();
        //     _this.game.paused = false;
        //     _this.state.start('grade6NumberSystems',true,false);
        // });

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            //_this.clickSound.play();
            //_this.stopVideo();
            _this.stopAudio();
            _this.videoWorld.destroy();
            _this.skip.destroy();
            _this.game.paused = false;  //* restart the game

        });
    },

    //* function to stop the video and audio if they are playing.
    stopVideo: function () {
        console.log("inside stop video");
        if (_this.demoVideo_1) {
            console.log("removing the video");
            _this.demoVideo_1.destroy();
            _this.videoWorld.destroy();

        }
    },

    stopAudio: function () {
        //* clear all the timers first

        if (_this.q2Timer) clearTimeout(_this.q2Timer);

        // if (_this.q3Timer) clearTimeout(_this.q3Timer);



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
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }

        if (_this.q2Sound) {
            console.log("removing the q2");
            _this.q2Sound.pause();
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }

        //        if (_this.q3Sound)
        //        {
        //            console.log("removing the q3");
        //            _this.q3Sound.pause();
        //            _this.q3Sound = null;
        //            _this.q3Soundsrc = null;
        //        }

        if (_this.q4Sound) {
            console.log("removing the q4");
            _this.q4Sound.pause();
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }

        // _this.backbtn1.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                   //* skip button destroyed
        // _this.backbtn1.destroy();               //* backbutton button destroyed
    },

    //* event functions for question audio 
    //* do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        _this.q1Sound.play();
    },

    showDemoVideo: function () {
        //* As _this.game is paused, phaser time events cannot be used since its timer is stopped.
        //* so we have to use js timers as required

        _this.demoAudio1.play();
        _this.demoVideo_1 = _this.add.video('nsf11');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSF-11-G6.mp4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* play question 1

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2 after 18 seconds.
        {
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
            console.log("here")
        }, 23000);

        //        _this.q3Timer = setTimeout(function()    //* q3 js timer to play q3 after 28 seconds.
        //        {
        //            clearTimeout(_this.q3Timer);         //* clear the time once its used.
        //            _this.q3Sound.play();
        //        }, 28000);  

        _this.q4Timer = setTimeout(function ()    //* q4 js timer to play q4 after 32 seconds.
        {
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q4Sound.play();
        }, 30000);

        _this.demoVideo_1.onComplete.add(function ()   //* on completion of demovideo close the video
        {
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop vide.
            _this.videoWorld.destroy();         //* destroy the video, gets removed from screen.
            _this.game.paused = false;          //* now, unpause the game, so that it continues.
        });
    }
}
