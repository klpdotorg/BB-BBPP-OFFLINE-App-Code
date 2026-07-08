Game.NSF_14_G6level1 = function () { };

Game.NSF_14_G6level1.prototype =
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

        telInitializerbbpp.gameIdInit("NSF_14_G6", gradeSelected);
        console.log(gameID, "gameID...");

    },
    create: function (game) {

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
        _this.graphicsObj = [];

        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        //_this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;


        // //* BB plus variables
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
         _this.microConcepts;
        // _this.grade;

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;
        _this.qn_flag = -1;

        //** include the background file, navigation bar, stars, timer objects.
        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'Bg');
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
                console.log(_this.qn_flag);
                if (_this.qn_flag == 1) {
                    _this.askQn1();
                }
                if (_this.qn_flag == 2) {

                    _this.askQn2();
                }
                if (_this.qn_flag == 3) {
                    _this.askQn3();
                }
                if (_this.qn_flag == 4) {

                    _this.askQn4();
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

        _this.possibleDen = [];

        _this.isfractionDisplayed = false;
        //* used for evaluation
        _this.denominator = false;
        _this.numerator = false;
        _this.ansArray = [-1, -1];

        _this.num = false;
        _this.denom = false;

        _this.blue = 0;
        _this.white = 0;

        _this.hz_count = 0;
        _this.ver_count = 0;

        _this.wholeQ = -1;

        //*empty array to store cube coutn
        _this.cube_count = [];

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
        _this.randomZeroQuestion();
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

        if (_this.Question4) {
            if (_this.Question4.contains(_this.Question4src)) {
                _this.Question4.removeChild(_this.Question4src);
                _this.Question4src = null;
            }

            if (!_this.Question4.paused) {
                _this.Question4.pause();
                _this.Question4.currentTime = 0.0;
            }
            _this.Question4 = null;
            _this.Question4src = null;
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

    askQn1: function () {
        // console.log("What are the fractions shown here?");
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-14-G6/" + _this.languageSelected + "/NSF-14-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);
        _this.Question1.play();
    },

    askQn2: function () {
        // console.log('drag the remaining fractions cube to the whole');
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NSF-14-G6/" + _this.languageSelected + "/NSF-14-G6-d.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
    },
    askQn3: function () {
        // console.log('Enter the answer.');
        _this.Question3 = document.createElement('audio');
        _this.Question3src = document.createElement('source');
        _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NSF-14-G6/" + _this.languageSelected + "/NSF-14-G6-e.mp3");
        _this.Question3.appendChild(_this.Question3src);
        _this.Question3.play();
    },

    askQn4: function () {
        // console.log('find the difference between the given fractions');
        _this.Question4 = document.createElement('audio');
        _this.Question4src = document.createElement('source');
        _this.Question4src.setAttribute("src", window.baseUrl + "questionSounds/NSF-14-G6/" + _this.languageSelected + "/NSF-14-G6-b.mp3");
        _this.Question4.appendChild(_this.Question4src);
        _this.Question4.play();
        _this.Question4.addEventListener('ended', _this.askQn41);
    },

    askQn41: function () {
        // console.log('touch the fraction cubes to do one to one matching');
        _this.Question4.removeEventListener('ended', _this.askQn41);
        _this.Question41 = document.createElement('audio');
        _this.Question41src = document.createElement('source');
        _this.Question41src.setAttribute("src", window.baseUrl + "questionSounds/NSF-14-G6/" + _this.languageSelected + "/NSF-14-G6-c.mp3");
        _this.Question41.appendChild(_this.Question41src);
        _this.Question41.play();
    },


    gotoFractions: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
        //* get  vertical / horizontal from the array shuffled.
        //_this.HzOrVert = _this.HzOrVertArray[ use index varialbe used for this array];

        //* load the initial screen with  vertical/horizontal
        _this.LoadInitialScreen();

        //* what are the fractions given here.
        if (_this.count1 < 1) {
            _this.askQn1();
            //* add a delay if reqquired and show number pad
            _this.time.events.add(2000, function () {
                _this.qn_flag = 1;
                _this.SquareBox1.frame = 1;
                _this.addNumberPad();
            });
        }
        else {
            _this.qn_flag = 1;
            //* add a delay if reqquired and show number pad
            _this.time.events.add(2000, function () {
                _this.SquareBox1.frame = 1;
                _this.addNumberPad();
            });
        }

        //* with a delay call Addnumber pad function to add the denominator and numerator
        //* set a flag to show that the numberpad is being shown for how many cubes ae there 
        //* set the other flag for asking denominator and numerator
        //* this flag will be used while validating the number entered
        _this.denominator = false;
        _this.numerator = true;




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

    randomZeroQuestion: function () {
        _this.zeroNumber = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
        var Hz_denominatorArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        var Ver_denominatorArray = [3, 4, 5, 6, 7];
        console.log(_this.zeroNumber);
        for (i = 0; _this.possibleDen.length < 6; i++) {
            if (i == 0) {
                _this.firstQn = Ver_denominatorArray[Math.floor(Math.random() * Ver_denominatorArray.length)];
                if (_this.possibleDen.indexOf(_this.firstQn) === -1)
                    _this.possibleDen.push(_this.firstQn);
            }
            else {
                var value = Hz_denominatorArray[Math.floor(Math.random() * Hz_denominatorArray.length)];
                if (_this.possibleDen.indexOf(value) === -1)
                    _this.possibleDen.push(value);
            }
        }
        console.log(_this.possibleDen);
    },

    //* shuffle the Horizontal or Vertical representation array for selecting one randomly.
    //* decing numerator and denominator for vetical and hozizontal
    randomizing_elements: function () {
        //* Horizontal or Vertical cubes to be shown for shuffling. 1 - Horizontal, 2 - Vertical.
        _this.HzOrVertical = _this.shuffle(_this.HzOrVertArray);

        if (_this.count1 == 0) {
            _this.HzOrVertArray[_this.HzOrVertIndex] = 2;
            _this.firstQn = _this.Ver_Denominator;
        }

        if (_this.possibleDen[_this.count1] >= 8) {
            _this.HzOrVertArray[_this.HzOrVertIndex] = 1;
            _this.Hz_Denominator = _this.possibleDen[_this.count1];
        }

        _this.Ver_Denominator = _this.possibleDen[_this.count1];
        _this.Hz_Denominator = _this.possibleDen[_this.count1];

        console.log("denominator horizontal", _this.Hz_Denominator, "vertical", _this.Ver_Denominator);
        console.log(_this.count1);
        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            _this.hz_count += 1;
            _this.stack1Numerator = Math.floor(Math.random() * (_this.Hz_Denominator - 2) + 2);
            _this.stack2Numerator = Math.floor(Math.random() * (_this.stack1Numerator - 1) + 1);
            if (_this.count1 == _this.zeroNumber) {
                _this.stack2Numerator = _this.stack1Numerator;
                console.log(_this.stack1Numerator, _this.stack2Numerator);
            }
            console.log("inside horizontal", _this.Hz_Denominator);
        }
        else {
            _this.stack1Numerator = Math.floor(Math.random() * (_this.Ver_Denominator - 2) + 2);
            _this.stack2Numerator = Math.floor(Math.random() * (_this.stack1Numerator - 1) + 1);
            console.log(_this.stack1Numerator, _this.stack2Numerator);
            if (_this.count1 == _this.zeroNumber) {
                _this.stack2Numerator = _this.stack1Numerator;
                console.log(_this.stack1Numerator, _this.stack2Numerator);
            }
            console.log("inside vertical", _this.Ver_Denominator);
        }
    },

    AddInitialScreen: function () {

        _this.draggableObj1 = _this.add.group();
        _this.draggableObj2 = _this.add.group();
        // console.log(_this.HzOrVertArray[_this.HzOrVertIndex]);
        // console.log(_this.Hz_Denominator);
        // console.log(_this.Ver_Denominator);

        //* add image to enter denominator and numerator here already decided horozontal or vertical
        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            //_this.askedDenominators[_this.count1] = _this.Hz_Denominator;
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
                    _this.blue += 1;
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
                    _this.blue += 1;
                }

                for (var i = 0; i < _this.Hz_Denominator; i++) {
                    //* add cube image use x and y in create fn
                    _this.cubeobject = _this.objGroup3.create(_this.Hz_x3[i] - 20, _this.Hz_y3, 'HorizontalCube');    //* add to objGroup                
                    _this.cube3_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator                
                    _this.cubeobject.frame = 0;

                }
            }
            _this.AddAnswerBoxesHr1();

        }
        else {
            //_this.askedDenominators[_this.count1] = _this.Ver_Denominator;
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
                    _this.blue += 1;
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
                    _this.blue += 1;
                }

                for (var i = 0; i < _this.Ver_Denominator; i++) {
                    _this.cubeobject = _this.objGroup3.create(_this.Ver_x3, _this.Ver_y3[i] - 75, 'VerticalCube'); //* add to objGroup
                    _this.cubeobject.frame = 0;
                    _this.cube3_count[i] = i; //*adding index num to an array this will use when shuffle for numerator it should within a range of denominator
                }

            }
            _this.AddAnswerBoxesVr1();

        }
        console.log(_this.draggableObj1, _this.draggableObj2);
    },
    AddAnswerBoxesVr1: function () {
        _this.YellowBox1 = _this.add.image(350, 353, 'yellowtextbox');
        _this.YellowBox1.scale.setTo(1.0);
        _this.YellowBox1.visible = false;

        _this.SquareBox1 = _this.add.sprite(350, 355, 'SquareBox');//825 230
        _this.SquareBox1.frame = 1;
        _this.SquareBox1.scale.setTo(0.9);

        _this.SquareBox2 = _this.add.sprite(350, 400, 'SquareBox'); //825 165
        _this.SquareBox2.frame = 0;
        _this.SquareBox2.scale.setTo(0.9);

        _this.line1 = _this.AddLineGraphics(_this.SquareBox1.x - 1, _this.SquareBox2.y, '0x65B4C3');
        _this.enableBoxes(_this.SquareBox1, _this.SquareBox2);
    },
    AddAnswerBoxesVr2: function () {
        console.log(" AddAnswerBoxesVr2");
        _this.YellowBox2 = _this.add.image(450, 353, 'yellowtextbox');
        _this.YellowBox2.scale.setTo(1.0);
        _this.YellowBox2.visible = false;

        _this.SquareBox3 = _this.add.sprite(450, 355, 'SquareBox');//825 230
        _this.SquareBox3.frame = 0;
        _this.SquareBox3.scale.setTo(0.9);

        _this.SquareBox4 = _this.add.sprite(450, 400, 'SquareBox');//825 165
        _this.SquareBox4.frame = 0;
        _this.SquareBox4.scale.setTo(0.9);

        _this.line2 = _this.AddLineGraphics(_this.SquareBox3.x - 1, _this.SquareBox4.y, '0x65B4C3');
        _this.enableBoxes(_this.SquareBox3, _this.SquareBox4);


    },
    AddAnswerBoxesHr1: function () {
        _this.YellowBox1 = _this.add.image(618, 73, 'yellowtextbox');
        _this.YellowBox1.scale.setTo(1.0);
        _this.YellowBox1.visible = false;

        _this.SquareBox1 = _this.add.sprite(620, 75, 'SquareBox');//825 230
        _this.SquareBox1.frame = 1;
        _this.SquareBox1.scale.setTo(0.9);

        _this.SquareBox2 = _this.add.sprite(620, 120, 'SquareBox');//825 165
        _this.SquareBox2.frame = 0;
        _this.SquareBox2.scale.setTo(0.9);

        _this.line1 = _this.AddLineGraphics(_this.SquareBox1.x - 1, _this.SquareBox2.y, '0x65B4C3');
        _this.enableBoxes(_this.SquareBox1, _this.SquareBox2);
    },
    AddAnswerBoxesHr2: function () {
        _this.YellowBox2 = _this.add.image(618, 203, 'yellowtextbox');
        _this.YellowBox2.scale.setTo(1.0);
        _this.YellowBox2.visible = false;

        _this.SquareBox3 = _this.add.sprite(620, 205, 'SquareBox');//825 230
        _this.SquareBox3.frame = 0;
        _this.SquareBox3.scale.setTo(0.9);

        _this.SquareBox4 = _this.add.sprite(620, 250, 'SquareBox');//825 165
        _this.SquareBox4.frame = 0;
        _this.SquareBox4.scale.setTo(0.9);

        _this.line2 = _this.AddLineGraphics(_this.SquareBox3.x - 1, _this.SquareBox4.y, '0x65B4C3');
        _this.enableBoxes(_this.SquareBox3, _this.SquareBox4);

    },
    AddMinusSign: function (y) {

        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(4, 0xff0000);
        _this.graphics.moveTo(y + 18, y);
        _this.graphics.lineTo(y + 30, y);
        _this.graphicsObj.push(_this.graphics);
    },
    AddMinusSignHr: function (y) {
        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(4, 0xff0000);
        _this.graphics.moveTo(y + 326, y);
        _this.graphics.lineTo(y + 338, y);
        _this.graphicsObj.push(_this.graphics);

    },
    AddEqualsSignHr: function (y) {
        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(3, 0xff0000);
        _this.graphics.moveTo(y + 70 + 305, y - 55);
        _this.graphics.lineTo(y + 82 + 305, y - 55);
        _this.graphicsObj.push(_this.graphics);


        _this.graphics.moveTo(y + 70 + 305, y - 47);
        _this.graphics.lineTo(y + 82 + 305, y - 47);
        _this.graphicsObj.push(_this.graphics);

    },
    AddEqualsSignVr: function (y) {
        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(3, 0xff0000);
        _this.graphics.moveTo(y + 158, y - 55);
        _this.graphics.lineTo(y + 170, y - 55);
        _this.graphicsObj.push(_this.graphics);


        _this.graphics.moveTo(y + 158, y - 47);
        _this.graphics.lineTo(y + 170, y - 47);
        _this.graphicsObj.push(_this.graphics);

    },
    AddEqualsSign: function (y) {
        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(3, 0xff0000);
        _this.graphics.moveTo(y + 68, y - 55);
        _this.graphics.lineTo(y + 80, y - 55);
        _this.graphicsObj.push(_this.graphics);

        _this.graphics.moveTo(y + 68, y - 47);
        _this.graphics.lineTo(y + 80, y - 47);
        _this.graphicsObj.push(_this.graphics);
    },

    AddEqualsSign2: function (y) {
        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(3, 0xff0000);
        _this.graphics.moveTo(y + 468, y - 55);
        _this.graphics.lineTo(y + 480, y - 55);
        _this.graphicsObj.push(_this.graphics);

        _this.graphics.moveTo(y + 468, y - 47);
        _this.graphics.lineTo(y + 480, y - 47);
        _this.graphicsObj.push(_this.graphics);
    },

    AddLineGraphics: function (x, y, color) {

        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(4, color);
        _this.graphics.moveTo(x + 43, y);
        _this.graphics.lineTo(x + 5, y);
        _this.graphicsObj.push(_this.graphics);
        return _this.graphics

    },

    one_to_one_match_ver: function () {
        _this.tempGroup = _this.add.group();
        console.log(_this.draggableObj2.getChildAt(_this.draggableObj2.length - 1));
        var tempCube1 = _this.add.sprite(_this.draggableObj2.getChildAt(0).x, _this.draggableObj2.getChildAt(0).y, 'VerticalCube');
        tempCube1.frame = 1;
        _this.tempGroup.addChild(tempCube1);
        var tempCube2 = _this.add.sprite(_this.draggableObj1.getChildAt(0).x, _this.draggableObj1.getChildAt(0).y, 'VerticalCube');
        tempCube2.frame = 2;
        _this.tempGroup.addChild(tempCube2);
        _this.time.events.add(1000, function () {
            _this.hand = _this.add.image(_this.draggableObj2.getChildAt(0).x, _this.draggableObj2.getChildAt(0).y, 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.hand.visible = true;
            _this.tempGroup.addChild(_this.hand);
        });

        _this.time.events.add(2000, function () {
            tempCube1.frame = 4;
            tempCube2.frame = 4;
        });

        _this.time.events.add(3000, function () {
            _this.tempGroup.destroy();
        });
        _this.ver_create_hole_and_itsfunction();
    },

    ver_create_hole_and_itsfunction: function () {
        console.log(_this.draggableObj2.getChildAt(_this.draggableObj2.length - 1));
        for (var i = 0; i <= _this.draggableObj2.length - 1; i++) {
            element1 = _this.draggableObj2.getChildAt(i);
            element1.name = "" + i;
            element1.inputEnabled = true;
            element1.input.useHandCursor = true;
            element1.events.onInputDown.add(_this.ver_one_one_matching, element1);
        }
    },

    ver_one_one_matching: function (target1) {
        target1.inputEnabled = false;
        target1.input.useHandCursor = false;
        target1.frame = 4;
        _this.white += 1;
        console.log(Number(target1.name))
        _this.draggableObj1.getChildAt(Number(target1.name)).frame = 4;

        if (_this.white == _this.blue) {
            if (_this.count1 == _this.zeroNumber) {
                if (_this.count1 < 1) {
                    _this.Question2 = null;
                    _this.Question2src = null;
                    _this.qn_flag = -1;
                    _this.askQn3();

                    _this.time.events.add(1000, function () {
                        _this.qn_flag = 3;
                    });
                    _this.AddEqualsSign(450);
                    _this.makefinalboxes();
                    _this.isfractionDisplayed = true;
                }
                else {
                    _this.qn_flag = 3;
                    _this.AddEqualsSign(450);
                    _this.makefinalboxes();
                    _this.isfractionDisplayed = true;
                }
            }
            else if (_this.count1 < 1) {
                _this.qn_flag = -1;
                _this.askQn2();
                _this.drag_cubesAction_Ver();
                _this.EnableSelectedCube();
            }
            else {
                _this.qn_flag = 2;
                _this.EnableSelectedCube();
            }
        }
    },

    one_to_one_match_hz: function () {
        _this.tempGroup = _this.add.group();
        //console.log(_this.draggableObj2.getChildAt(_this.draggableObj2.length-1));
        var tempCube1 = _this.add.sprite(_this.draggableObj2.getChildAt(_this.draggableObj2.length - 1).x, _this.draggableObj2.getChildAt(_this.draggableObj2.length - 1).y, 'HorizontalCube');
        tempCube1.frame = 2;
        _this.tempGroup.addChild(tempCube1);
        var tempCube2 = _this.add.sprite(_this.draggableObj1.getChildAt(_this.draggableObj2.length - 1).x, _this.draggableObj1.getChildAt(_this.draggableObj2.length - 1).y, 'HorizontalCube');
        tempCube2.frame = 1;
        _this.tempGroup.addChild(tempCube2);
        _this.time.events.add(1000, function () {
            _this.hand = _this.add.image(_this.draggableObj2.getChildAt(_this.draggableObj2.length - 1).x, _this.draggableObj2.getChildAt(_this.draggableObj2.length - 1).y, 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.hand.visible = true;
            _this.tempGroup.addChild(_this.hand);
        });

        _this.time.events.add(2000, function () {
            tempCube1.frame = 3;
            tempCube2.frame = 3;
        });

        _this.time.events.add(3000, function () {
            _this.tempGroup.destroy();
        });
        _this.hz_create_hole_and_itsfunction();
    },

    hz_create_hole_and_itsfunction: function () {
        console.log(_this.draggableObj2.getChildAt(_this.draggableObj2.length - 1));
        for (var i = 0; i <= _this.draggableObj2.length - 1; i++) {
            element1 = _this.draggableObj2.getChildAt(i);
            element1.name = "" + i;
            element1.inputEnabled = true;
            element1.input.useHandCursor = true;
            element1.events.onInputDown.add(_this.hz_one_one_matching, element1);
        }
    },

    hz_one_one_matching: function (target1) {
        target1.inputEnabled = false;
        target1.input.useHandCursor = false;
        target1.frame = 3;
        _this.white += 1;
        console.log(Number(target1.name))
        _this.draggableObj1.getChildAt(Number(target1.name)).frame = 3;
        if (_this.white == _this.blue) {
            if (_this.count1 == _this.zeroNumber) {
                _this.qn_flag = 3;
                _this.AddEqualsSignHr(410);
                _this.makefinalboxes();
                _this.isfractionDisplayed = true;
            }
            else {
                _this.qn_flag = 2;
                _this.EnableSelectedCube();
            }
        }
    },

    //* to show drag action to user from outside to workspace.
    drag_cubesAction_Ver: function () {
        var denominator_length = _this.draggableObj1.length;
        _this.tempCubeGroup = _this.add.group();


        for (var i = _this.draggableObj2.length; i < denominator_length; i++)  //* create a temp group
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
        var num = _this.stack1Numerator - _this.stack2Numerator;
        _this.time.events.add(1500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.tempCubeGroup);
            tempDragAction.to({ x: 200, y: -_this.objGroup3.getChildAt(_this.Ver_Denominator - 1).y + _this.objGroup3.getChildAt(num - 1).y }, 800, 'Linear', true, 0);
            tempDragAction.start();
        });

        //* destroy the group after the show after a delay
        _this.time.events.add(3000, function () {
            _this.tempCubeGroup.destroy();
            _this.qn_flag = 2;
        });
        //_this.EnableSelectedCube();
    },

    drag_cubesAction_Hr: function () {
        var denominator_length = _this.draggableObj1.length;

        _this.tempCubeGroup = _this.add.group();


        for (var i = _this.draggableObj2.length; i < denominator_length; i++)  //* create a temp group
        {
            //* create temp group of cubes to show dragging action to user. 
            _this.tempCube = _this.add.sprite(_this.draggableObj1.getChildAt(i).x, _this.draggableObj1.getChildAt(i).y, 'HorizontalCube');
            _this.tempCubeGroup.addChild(_this.tempCube);

            _this.tempCube.frame = 1;

        }

        _this.time.events.add(1000, function () {
            _this.hand = _this.add.image(_this.draggableObj1.getChildAt(i - 1).x + 20, _this.draggableObj1.getChildAt(i - 1).y, 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.tempCubeGroup.addChild(_this.hand);
        });
        var num = _this.stack1Numerator - _this.stack2Numerator;
        _this.time.events.add(1500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.tempCubeGroup);
            tempDragAction.to({ x: -_this.objGroup3.getChildAt(_this.Hz_Denominator - 1).x + _this.objGroup3.getChildAt(num - 1).x, y: 250 }, 800, 'Linear', true, 0);
            tempDragAction.start();
        });

        //* destroy the group after the show after a delay
        _this.time.events.add(3000, function () {
            _this.tempCubeGroup.destroy();
            _this.qn_flag = 2;
        });
        //_this.EnableSelectedCube();
    },

    EnableSelectedCube: function ()
    //* enable the bottom cubes to be clicked and dragged.
    {
        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {

            for (l = _this.stack2Numerator; l < _this.stack1Numerator; l++) {
                let currentCube = _this.draggableObj1.getChildAt(l);
                currentCube.inputEnabled = true;
                currentCube.input.useHandCursor = true;
                currentCube.input.enableDrag(true);
                // console.log("in Horizontal")
                currentCube.events.onDragUpdate.add(_this.Sel_dragUpdate, currentCube);
                currentCube.events.onDragStop.add(_this.Sel_dragStop, currentCube);

            }
        }
        else {
            //console.log( _this.draggableObj1.getChildAt())
            for (l = _this.stack2Numerator; l < _this.stack1Numerator; l++) {
                console.log(_this.draggableObj1.getChildAt(l));
                let currentCube = _this.draggableObj1.getChildAt(l);
                currentCube.inputEnabled = true;
                currentCube.input.useHandCursor = true;
                currentCube.input.enableDrag(true);
                currentCube.events.onDragUpdate.add(_this.Ver_Sel_dragUpdate, currentCube);
                currentCube.events.onDragStop.add(_this.Ver_Sel_dragStop, currentCube);
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

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name) + _this.stack2Numerator; k < _this.stack1Numerator; k++) {
            _this.draggableObj1.getChildAt(k).y = dragggedCubeY;
            _this.draggableObj1.getChildAt(k).x = draggedCubeX + 34 * frontpos;

            frontpos++;
        }

        for (let k = Number(target.name) - 1; k >= _this.stack2Numerator; k--) {
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
        if (target.y <= 695 && target.y >= 95)  //* if within rangetarget.x>=50 && target.x<=616 && 
        {

            for (i = _this.stack1Numerator - 1; i >= _this.stack2Numerator; i--) {
                console.log(_this.draggableObj1.getChildAt(i));
                _this.draggableObj1.getChildAt(i).destroy();
            }
            for (i = 0; i < (_this.stack1Numerator - _this.stack2Numerator); i++) {

                _this.objGroup3.getChildAt(i).frame = 1;

            }
            _this.stack1 = true;

            if (_this.stack1 == true && _this.stack2 == false)
                _this.reArrangeHrCubes();
        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            for (var i = _this.stack2Numerator; i < _this.stack1Numerator; i++) {
                _this.draggableObj1.getChildAt(i).x = _this.objGroup1.getChildAt(i + _this.Hz_Denominator - _this.stack1Numerator).x;
                _this.draggableObj1.getChildAt(i).y = _this.objGroup1.getChildAt(i + _this.Hz_Denominator - _this.stack1Numerator).y;
            }
        }

    },

    Ver_Sel_dragUpdate: function (target) {
        //console.log(target.name);
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;
        for (let k = Number(target.name) + _this.stack2Numerator; k < _this.stack1Numerator; k++) {
            //console.log(target.name);
            _this.draggableObj1.getChildAt(k).y = dragggedCubeY - 34 * frontpos;
            _this.draggableObj1.getChildAt(k).x = draggedCubeX;

            frontpos++;
        }
        for (let k = Number(target.name) - 1; k >= _this.stack2Numerator; k--) {
            //console.log(target.name);
            //console.log("hi");
            _this.draggableObj1.getChildAt(k).y = dragggedCubeY + 34 * backpos;
            _this.draggableObj1.getChildAt(k).x = draggedCubeX;

            backpos++;
        }
    },

    Ver_Sel_dragStop: function (target) {
        _this.clickSound.play();
        console.log(target);
        if (target.x >= 340 && target.x <= 655)  //* if within range &&  target.y<360 && target.y>170
        {
            //_this.draggableObj1.destroy(1);

            for (i = _this.stack1Numerator - 1; i >= _this.stack2Numerator; i--) {
                console.log(_this.draggableObj1.getChildAt(i));
                _this.draggableObj1.getChildAt(i).destroy();
            }

            for (i = 0; i < (_this.stack1Numerator - _this.stack2Numerator); i++) {
                _this.objGroup3.getChildAt(i).frame = 2;
            }
            _this.stack1 = true;
            if (_this.stack1 == true && _this.stack2 == false)
                _this.reArrangeVerCubes();

        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            for (var i = _this.stack2Numerator; i < _this.stack1Numerator; i++) {
                _this.draggableObj1.getChildAt(i).x = _this.objGroup1.getChildAt(i + _this.Ver_Denominator - _this.stack1Numerator).x;
                _this.draggableObj1.getChildAt(i).y = _this.objGroup1.getChildAt(i + _this.Ver_Denominator - _this.stack1Numerator).y;
            }

        }


    },

    reArrangeHrCubes: function () {
        _this.time.events.add(800, function () {

            _this.giveShadeSound.play();
            _this.objGroup3cpy.destroy();
            _this.objGroup3cpy = _this.add.group();
            for (let i = 0; i < _this.Hz_Denominator; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.objGroup3.getChildAt(i).frame = 4;
                });
            }

            for (let i = _this.Hz_Denominator - (_this.stack1Numerator - _this.stack2Numerator); i < _this.Hz_Denominator; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.objGroup3.getChildAt(i).frame = 1;
                });
            }
            _this.AddEqualsSignHr(410);

            _this.makefinalboxes();
            _this.isfractionDisplayed = true;

        });

        _this.qn_flag = 3;
    },
    reArrangeVerCubes: function () {
        _this.time.events.add(800, function () {
            _this.giveShadeSound.play();

            _this.objGroup3cpy.destroy();
            _this.objGroup3cpy = _this.add.group();
            for (let i = 0; i < _this.Ver_Denominator; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.objGroup3.getChildAt(i).frame = 3;
                });
            }

            for (let i = _this.Ver_Denominator - (_this.stack1Numerator - _this.stack2Numerator); i < _this.Ver_Denominator; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.objGroup3.getChildAt(i).frame = 2;
                });
            }
            _this.AddEqualsSign(450);
            _this.makefinalboxes();
            _this.isfractionDisplayed = true;
        });
        if (_this.count1 < 1) {
            _this.Question2 = null;
            _this.Question2src = null;
            _this.qn_flag = -1;
            _this.askQn3();
        }
        _this.time.events.add(1000, function () {
            _this.qn_flag = 3;
        });
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
        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            _this.AddEqualsSign2(410);
            _this.SquareBoxWhole = _this.add.sprite(_this.SquareBox6.x + 80, _this.SquareBox6.y - 25, 'SquareBox');//825 230
            _this.SquareBoxWhole.frame = 1;
            _this.SquareBoxWhole.scale.setTo(0.9);
            _this.wholeQ = 0;
            _this.enablebox();
        }
        else {
            _this.AddEqualsSignVr(450);
            _this.SquareBoxWhole = _this.add.sprite(_this.SquareBox6.x + 80, _this.SquareBox6.y - 25, 'SquareBox');//825 230
            _this.SquareBoxWhole.frame = 1;
            _this.SquareBoxWhole.scale.setTo(0.9);
            _this.wholeQ = 0;
            _this.enablebox();
        }
    },
    celebration: function () {

        _this.celebrationSound.play();
        _this.starActions(_this.count1);
        _this.time.events.add(1500, function () {
            _this.eraseAll();
            console.log(_this.count1)
            if (_this.count1 == _this.zeroNumber + 1) {
                _this.SquareBoxWhole.destroy();
            }
        });
        _this.time.events.add(1500, _this.nextquestion);

    },

    nextquestion: function () {
        if (_this.count1 < 6) {
            _this.denominator = false;
            _this.numerator = false;
            _this.qn_flag = -1;
            _this.isfractionDisplayed = false;
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
        // _this.game_id = "NSF_14_G6";
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

    evaluation1: function () {
        //write code for Numerator evaluation 
        if (_this.SquareBox1.frame == 1 || _this.SquareBox2.frame == 1) {
            _this.stackNumerator = _this.stack1Numerator;
        }
        else if (_this.SquareBox3.frame == 1 || _this.SquareBox4.frame == 1)
            _this.stackNumerator = _this.stack2Numerator;
        if (_this.isfractionDisplayed == true) {
            if (_this.SquareBox5.frame == 1 || _this.SquareBox6.frame == 1) {
                _this.stackNumerator = _this.stack1Numerator - _this.stack2Numerator;
            }
        }
        if (_this.stackNumerator == _this.ansArray[0] && _this.ansArray[1] == _this.Denominator) {
            if (_this.stackNumerator == _this.ansArray[0]) {
                // console.log("true")
                _this.numerator = false;
                _this.denominator = true;
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                // _this.counterCelebrationSound.play();
                _this.Box1.frame = 0;

                _this.Box2.frame = 1;

                if (_this.denom == false) {
                    _this.Box2.frame = 1;
                    _this.denominator = true;

                }
                else {
                    _this.displayYellowBox();
                }
            }

        }
        else {
            _this.numerator = true;
            _this.wrongSound.play();
            _this.Box1.removeChild(_this.enterTxt1);
            _this.enterTxt1.destroy();
            _this.enterTxt1.text = "";
            _this.ansArray[0] = -1;
            _this.num = false;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
        }
    },

    evaluation2: function () {

        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            _this.Denominator = _this.Hz_Denominator
        }
        else
            _this.Denominator = _this.Ver_Denominator

        if (_this.Denominator == _this.ansArray[1] && _this.stackNumerator == _this.ansArray[0]) {

            _this.denominator = false;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            // _this.counterCelebrationSound.play();
            _this.Box2.frame = 0;

            if (_this.num == false) {
                _this.Box1.frame = 1;
                _this.numerator = true;

            }
            else {
                _this.displayYellowBox();
            }
        }
        else {

            _this.denominator = true;
            _this.wrongSound.play();
            _this.Box2.removeChild(_this.enterTxt1);
            _this.enterTxt2.destroy();
            _this.enterTxt2.text = "";
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.ansArray[1] = -1;
            _this.denom = false;

        }

    },
    createHrCpy: function () {

        if (_this.YellowBox2.visible == true) {
            _this.YellowBoxhr2 = _this.add.image(718, 318, 'yellowtextbox');
            _this.YellowBoxhr2.scale.setTo(1.0);
            _this.YellowBoxhr2.visible = false;
            _this.line4 = _this.AddLineGraphics(_this.SquareBox3.x + 100, _this.SquareBox4.y + 115 - 5, '0xff0000');
            _this.line4.visible = false;
            if (_this.Denominator < 10 && _this.stack2Numerator < 10) {
                _this.displayHrnum2 = _this.add.text(_this.SquareBox3.x + 116, _this.SquareBox3.y + 6 + 115, _this.stack2Numerator, { fontSize: '26px' });
                _this.displayHrdenom2 = _this.add.text(_this.SquareBox4.x + 116, _this.SquareBox4.y + 115, _this.Denominator, { fontSize: '26px' });
            }
            else if (_this.Denominator >= 10 && _this.stack2Numerator >= 10) {
                _this.displayHrnum2 = _this.add.text(_this.SquareBox3.x + 109, _this.SquareBox3.y + 6 + 115, _this.stack2Numerator, { fontSize: '26px' });
                _this.displayHrdenom2 = _this.add.text(_this.SquareBox4.x + 109, _this.SquareBox4.y + 115, _this.Denominator, { fontSize: '26px' });

            }
            else if (_this.Denominator < 10 && _this.stack2Numerator >= 10) {
                _this.displayHrnum2 = _this.add.text(_this.SquareBox3.x + 109, _this.SquareBox3.y + 6 + 115, _this.stack2Numerator, { fontSize: '26px' });
                _this.displayHrdenom2 = _this.add.text(_this.SquareBox4.x + 116, _this.SquareBox4.y + 115, _this.Denominator, { fontSize: '26px' });
            }
            else if (_this.Denominator >= 10 && _this.stack2Numerator < 10) {
                _this.displayHrnum2 = _this.add.text(_this.SquareBox3.x + 116, _this.SquareBox3.y + 6 + 115, _this.stack2Numerator, { fontSize: '26px' });
                _this.displayHrdenom2 = _this.add.text(_this.SquareBox4.x + 109, _this.SquareBox4.y + 115, _this.Denominator, { fontSize: '26px' });
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
            _this.line3 = _this.AddLineGraphics(_this.SquareBox1.x, _this.SquareBox2.y + 245 - 5, '0xff0000');
            _this.line3.visible = false;
            // console.log(_this.Denominator, _this.stack1Numerator)

            if (_this.Denominator < 10 && _this.stack1Numerator < 10) {

                _this.displayHrnum1 = _this.add.text(_this.SquareBox1.x + 16, _this.SquareBox1.y + 6 + 245, _this.stack1Numerator, { fontSize: '26px' });
                _this.displayHrdenom1 = _this.add.text(_this.SquareBox2.x + 16, _this.SquareBox2.y + 245, _this.Denominator, { fontSize: '26px' });

            }
            else if (_this.Denominator >= 10 && _this.stack1Numerator >= 10) {

                _this.displayHrnum1 = _this.add.text(_this.SquareBox1.x + 9, _this.SquareBox1.y + 245 + 6, _this.stack1Numerator, { fontSize: '26px' });
                _this.displayHrdenom1 = _this.add.text(_this.SquareBox2.x + 9, _this.SquareBox2.y + 245, _this.Denominator, { fontSize: '26px' });

            }
            else if (_this.Denominator < 10 && _this.stack1Numerator >= 10) {

                _this.displayHrnum1 = _this.add.text(_this.SquareBox1.x + 9, _this.SquareBox1.y + 6 + 245, _this.stack1Numerator, { fontSize: '26px' });
                _this.displayHrdenom1 = _this.add.text(_this.SquareBox2.x + 16, _this.SquareBox2.y + 245, _this.Denominator, { fontSize: '26px' });

            }
            else if (_this.Denominator >= 10 && _this.stack1Numerator < 10) {

                _this.displayHrnum1 = _this.add.text(_this.SquareBox1.x + 16, _this.SquareBox1.y + 6 + 245, _this.stack1Numerator, { fontSize: '26px' });
                _this.displayHrdenom1 = _this.add.text(_this.SquareBox2.x + 9, _this.SquareBox2.y + 245, _this.Denominator, { fontSize: '26px' });

            }
            // console.log(_this.displayHrnum1)
            _this.displayHrnum1.fill = '#FF0000';
            _this.displayHrdenom1.fill = '#FF0000';
            _this.displayHrnum1.visible = false;
            _this.displayHrdenom1.visible = false;
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
            _this.ansArray[0] = -1;

            _this.enterTxt1.text = "";
            _this.num = false;

        }
        else if (_this.Box2.frame == 1) {
            _this.denominator = true;
            _this.Box2.removeChild(_this.enterTxt2);
            _this.enterTxt2.destroy();
            _this.enterTxt2;
            _this.ansArray[1] = -1;

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
        _this.draggableObj1.destroy();
        _this.draggableObj2.destroy();

        _this.SquareBox3.destroy();
        _this.SquareBox4.destroy();
        _this.SquareBox1.destroy();
        _this.SquareBox2.destroy();
        _this.SquareBox5.destroy();
        _this.SquareBox6.destroy();
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

        if (_this.wholeQ == 0) {
            _this.Box1 = _this.SquareBoxWhole;

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


        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;

        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;

        if (_this.denominator == true) {

            // console.log("denominator");
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 0) {
                _this.enterTxt2 = _this.add.text(16, 9, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
            }
            else if (Number('' + _this.selectedAns1) == 0 && Number('' + _this.selectedAns2) < 10) {
                _this.enterTxt2 = _this.add.text(9, 9, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) {
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

            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 0) {
                _this.enterTxt1 = _this.add.text(16, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
            }
            else if (Number('' + _this.selectedAns1) == 0 && Number('' + _this.selectedAns2) < 10) {
                _this.enterTxt1 = _this.add.text(9, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) {
                _this.enterTxt1 = _this.add.text(16, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 23
            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10) {
                _this.enterTxt1 = _this.add.text(9, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//36 23
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

    // Evaluating the fraction here
    evaluation: function () {
        if (_this.SquareBox1.frame == 1 || _this.SquareBox2.frame == 1) {
            _this.stackNumerator = _this.stack1Numerator;
        }
        else if (_this.SquareBox3.frame == 1 || _this.SquareBox4.frame == 1)
            _this.stackNumerator = _this.stack2Numerator;

        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            _this.Denominator = _this.Hz_Denominator
        }
        else
            _this.Denominator = _this.Ver_Denominator

        if (_this.ansArray[0] == _this.stackNumerator && _this.ansArray[1] == _this.Denominator) {
            console.log("inside 2nd if");
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
    // Evaluating the fraction here
    finalEvaluation: function () {
        if (_this.SquareBox5.frame == 1 || _this.SquareBox6.frame == 1) {
            _this.stackNumerator = _this.stack1Numerator - _this.stack2Numerator
        }

        if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
            _this.Denominator = _this.Hz_Denominator
        }
        else
            _this.Denominator = _this.Ver_Denominator
        if ((_this.ansArray[1] < _this.Denominator) && ((_this.stackNumerator / _this.Denominator) == (_this.ansArray[0] / _this.ansArray[1]))) {
            if (_this.ansArray[0] == 0) {
                console.log("zero question");
                _this.counterCelebrationSound.play();
                _this.stackNumerator = _this.ansArray[0];
                _this.Denominator = _this.ansArray[1];
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                _this.displayYellowBox();
                _this.ansArray = [-1, -1];
            }
            else {
                _this.stackNumerator = _this.ansArray[0];
                _this.Denominator = _this.ansArray[1];
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                _this.displayYellowBox();
                _this.ansArray = [-1, -1];
            }
        }

        else if (_this.ansArray[0] == _this.stackNumerator && _this.ansArray[1] == _this.Denominator) {
            if (_this.ansArray[0] == 0) {
                _this.counterCelebrationSound.play();
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                _this.displayYellowBox();
                _this.ansArray = [-1, -1];
            }
            else {
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                _this.displayYellowBox();
                _this.ansArray = [-1, -1];
            }
        }
        else {
            _this.wrongSound.play();
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';

            _this.eraseScreen();
            _this.enableBoxes(_this.Box1, _this.Box2)
        }

    },
    displayYellowBox: function () {

        if (_this.YellowBox1.visible == false) {
            if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
                _this.YellowBox1.visible = true;
                _this.line1.destroy();
                _this.line1 = _this.AddLineGraphics(_this.SquareBox1.x, _this.SquareBox2.y - 5, '0xff0000');
                if (_this.Denominator < 10 && _this.stack1Numerator < 10) {

                    _this.displaynum1 = _this.add.text(_this.SquareBox1.x + 16, _this.SquareBox1.y + 6, _this.stack1Numerator, { fontSize: '26px' });
                    _this.displaydenom1 = _this.add.text(_this.SquareBox2.x + 16, _this.SquareBox2.y, _this.Denominator, { fontSize: '26px' });
                }
                else if (_this.Denominator >= 10 && _this.stack1Numerator >= 10) {

                    _this.displaynum1 = _this.add.text(_this.SquareBox1.x + 9, _this.SquareBox1.y + 6, _this.stack1Numerator, { fontSize: '26px' });
                    _this.displaydenom1 = _this.add.text(_this.SquareBox2.x + 9, _this.SquareBox2.y, _this.Denominator, { fontSize: '26px' });

                }
                else if (_this.Denominator < 10 && _this.stack1Numerator >= 10) {

                    _this.displaynum1 = _this.add.text(_this.SquareBox1.x + 9, _this.SquareBox1.y + 6, _this.stack1Numerator, { fontSize: '26px' });
                    _this.displaydenom1 = _this.add.text(_this.SquareBox2.x + 16, _this.SquareBox2.y, _this.Denominator, { fontSize: '26px' });
                }

                else if (_this.Denominator >= 10 && _this.stack1Numerator < 10) {

                    _this.displaynum1 = _this.add.text(_this.SquareBox1.x + 16, _this.SquareBox1.y + 6, _this.stack1Numerator, { fontSize: '26px' });
                    _this.displaydenom1 = _this.add.text(_this.SquareBox2.x + 9, _this.SquareBox2.y, _this.Denominator, { fontSize: '26px' });
                }
                _this.createHrCpy();
            }
            else {
                _this.YellowBox1.visible = true;
                _this.line1.destroy();
                _this.line1 = _this.AddLineGraphics(_this.SquareBox1.x + 1, _this.SquareBox2.y - 5, '0xff0000');
                if (_this.Denominator < 10 && _this.stack1Numerator < 10) {

                    _this.displaynum1 = _this.add.text(_this.SquareBox1.x + 16, _this.SquareBox1.y + 6, _this.stack1Numerator, { fontSize: '26px' });
                    _this.displaydenom1 = _this.add.text(_this.SquareBox2.x + 16, _this.SquareBox2.y, _this.Denominator, { fontSize: '26px' });
                }
                else if (_this.Denominator >= 10 && _this.stack1Numerator >= 10) {

                    _this.displaynum1 = _this.add.text(_this.SquareBox1.x + 10, _this.SquareBox1.y + 6, _this.stack1Numerator, { fontSize: '26px' });
                    _this.displaydenom1 = _this.add.text(_this.SquareBox2.x + 10, _this.SquareBox2.y, _this.Denominator, { fontSize: '26px' });

                }
                else if (_this.Denominator < 10 && _this.stack1Numerator >= 10) {

                    _this.displaynum1 = _this.add.text(_this.SquareBox1.x + 10, _this.SquareBox1.y + 6, _this.stack1Numerator, { fontSize: '26px' });
                    _this.displaydenom1 = _this.add.text(_this.SquareBox2.x + 16, _this.SquareBox2.y, _this.Denominator, { fontSize: '26px' });
                }

                else if (_this.Denominator >= 10 && _this.stack1Numerator < 10) {

                    _this.displaynum1 = _this.add.text(_this.SquareBox1.x + 16, _this.SquareBox1.y + 6, _this.stack1Numerator, { fontSize: '26px' });
                    _this.displaydenom1 = _this.add.text(_this.SquareBox2.x + 10, _this.SquareBox2.y, _this.Denominator, { fontSize: '26px' });
                }
            }
            _this.SquareBox1.destroy();
            _this.SquareBox2.destroy();
            _this.num = false;
            _this.denom = false;
            //_this.isfractionDisplayed = true;
            _this.displaynum1.fill = '#FF0000';
            _this.displaydenom1.fill = '#FF0000';
            _this.counterCelebrationSound.play();
            if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
                _this.AddAnswerBoxesHr2();
            }
            else {
                _this.AddAnswerBoxesVr2();
            }
        }
        else if (_this.YellowBox2.visible == false) {
            if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
                _this.YellowBox2.visible = true;
                _this.line2.destroy();
                _this.line2 = _this.AddLineGraphics(_this.SquareBox3.x, _this.SquareBox4.y - 5, '0xff0000');
                if (_this.Denominator < 10 && _this.stack2Numerator < 10) {
                    _this.displaynum2 = _this.add.text(_this.SquareBox3.x + 16, _this.SquareBox3.y + 6, _this.stack2Numerator, { fontSize: '26px' });
                    _this.displaydenom2 = _this.add.text(_this.SquareBox4.x + 16, _this.SquareBox4.y, _this.Denominator, { fontSize: '26px' });
                }
                else if (_this.Denominator >= 10 && _this.stack2Numerator >= 10) {
                    _this.displaynum2 = _this.add.text(_this.SquareBox3.x + 9, _this.SquareBox3.y + 6, _this.stack2Numerator, { fontSize: '26px' });
                    _this.displaydenom2 = _this.add.text(_this.SquareBox4.x + 9, _this.SquareBox4.y, _this.Denominator, { fontSize: '26px' });

                }
                else if (_this.Denominator < 10 && _this.stack2Numerator >= 10) {
                    _this.displaynum2 = _this.add.text(_this.SquareBox3.x + 9, _this.SquareBox3.y + 6, _this.stack2Numerator, { fontSize: '26px' });
                    _this.displaydenom2 = _this.add.text(_this.SquareBox4.x + 16, _this.SquareBox4.y, _this.Denominator, { fontSize: '26px' });
                }
                else if (_this.Denominator >= 10 && _this.stack2Numerator < 10) {
                    _this.displaynum2 = _this.add.text(_this.SquareBox3.x + 16, _this.SquareBox3.y + 6, _this.stack2Numerator, { fontSize: '26px' });
                    _this.displaydenom2 = _this.add.text(_this.SquareBox4.x + 9, _this.SquareBox4.y, _this.Denominator, { fontSize: '26px' });
                }
                _this.createHrCpy();
            }
            else {
                _this.YellowBox2.visible = true;
                _this.line2.destroy();
                _this.line2 = _this.AddLineGraphics(_this.SquareBox3.x + 1, _this.SquareBox4.y - 5, '0xff0000');
                if (_this.Denominator < 10 && _this.stack2Numerator < 10) {
                    _this.displaynum2 = _this.add.text(_this.SquareBox3.x + 16, _this.SquareBox3.y + 6, _this.stack2Numerator, { fontSize: '26px' });
                    _this.displaydenom2 = _this.add.text(_this.SquareBox4.x + 16, _this.SquareBox4.y, _this.Denominator, { fontSize: '26px' });
                }
                else if (_this.Denominator >= 10 && _this.stack2Numerator >= 10) {
                    _this.displaynum2 = _this.add.text(_this.SquareBox3.x + 10, _this.SquareBox3.y + 6, _this.stack2Numerator, { fontSize: '26px' });
                    _this.displaydenom2 = _this.add.text(_this.SquareBox4.x + 10, _this.SquareBox4.y, _this.Denominator, { fontSize: '26px' });

                }
                else if (_this.Denominator < 10 && _this.stack2Numerator >= 10) {
                    _this.displaynum2 = _this.add.text(_this.SquareBox3.x + 10, _this.SquareBox3.y + 6, _this.stack2Numerator, { fontSize: '26px' });
                    _this.displaydenom2 = _this.add.text(_this.SquareBox4.x + 16, _this.SquareBox4.y, _this.Denominator, { fontSize: '26px' });
                }
                else if (_this.Denominator >= 10 && _this.stack2Numerator < 10) {
                    _this.displaynum2 = _this.add.text(_this.SquareBox3.x + 16, _this.SquareBox3.y + 6, _this.stack2Numerator, { fontSize: '26px' });
                    _this.displaydenom2 = _this.add.text(_this.SquareBox4.x + 10, _this.SquareBox4.y, _this.Denominator, { fontSize: '26px' });
                }
            }
            _this.SquareBox3.destroy();
            _this.SquareBox4.destroy();
            _this.displaynum2.fill = '#FF0000';
            _this.displaydenom2.fill = '#FF0000';
            _this.num = false;
            _this.denom = false;

            if (_this.HzOrVertArray[_this.HzOrVertIndex] == 2) {
                _this.AddMinusSign(_this.SquareBox2.y);
                _this.Question1 = null;
                _this.Question1src = null;
                if (_this.count1 < 1) {
                    _this.qn_flag = -1;
                    _this.askQn4();
                    _this.time.events.add(5100, function () {
                        _this.qn_flag = 4;
                        _this.one_to_one_match_ver();
                    });
                }
                else {
                    _this.qn_flag = 4;
                    _this.ver_create_hole_and_itsfunction();
                }
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

                _this.AddMinusSignHr(_this.SquareBox2.y + 240);
                //_this.qn_flag= -1;
                _this.Question1 = null;
                _this.Question1src = null;
                _this.qn_flag = 4;
                _this.hz_create_hole_and_itsfunction();
            }
        }
        else if (_this.YellowBoxAns.visible == false) {
            if (_this.HzOrVertArray[_this.HzOrVertIndex] == 1) {
                _this.YellowBoxAns.visible = true
                _this.lineAns.destroy();
                _this.lineAns = _this.AddLineGraphics(_this.SquareBox5.x, _this.SquareBox6.y - 5, '0xff0000');
                if (_this.Denominator < 10 && _this.stackNumerator < 10) {

                    _this.displaynumAns = _this.add.text(_this.SquareBox5.x + 16, _this.SquareBox5.y + 6, _this.stackNumerator, { fontSize: '26px' });
                    _this.displaydenomAns = _this.add.text(_this.SquareBox6.x + 16, _this.SquareBox6.y, _this.Denominator, { fontSize: '26px' });
                }
                else if (_this.Denominator >= 10 && _this.stackNumerator >= 10) {

                    _this.displaynumAns = _this.add.text(_this.SquareBox5.x + 9, _this.SquareBox5.y + 6, _this.stackNumerator, { fontSize: '26px' });
                    _this.displaydenomAns = _this.add.text(_this.SquareBox6.x + 9, _this.SquareBox6.y, _this.Denominator, { fontSize: '26px' });

                }

                else if (_this.Denominator < 10 && _this.stackNumerator >= 10) {
                    _this.displaynumAns = _this.add.text(_this.SquareBox5.x + 9, _this.SquareBox5.y + 6, _this.stackNumerator, { fontSize: '26px' });
                    _this.displaydenomAns = _this.add.text(_this.SquareBox2.x + 16, _this.SquareBox6.y, _this.Denominator, { fontSize: '26px' });
                }

                else if (_this.Denominator >= 10 && _this.stackNumerator < 10) {
                    _this.displaynumAns = _this.add.text(_this.SquareBox5.x + 16, _this.SquareBox5.y + 6, _this.stackNumerator, { fontSize: '26px' });
                    _this.displaydenomAns = _this.add.text(_this.SquareBox6.x + 9, _this.SquareBox6.y, _this.Denominator, { fontSize: '26px' });
                }
            }
            else {
                _this.YellowBoxAns.visible = true
                _this.lineAns.destroy();
                _this.lineAns = _this.AddLineGraphics(_this.SquareBox5.x + 1, _this.SquareBox6.y - 5, '0xff0000');
                if (_this.Denominator < 10 && _this.stackNumerator < 10) {

                    _this.displaynumAns = _this.add.text(_this.SquareBox5.x + 16, _this.SquareBox5.y + 6, _this.stackNumerator, { fontSize: '26px' });
                    _this.displaydenomAns = _this.add.text(_this.SquareBox6.x + 16, _this.SquareBox6.y, _this.Denominator, { fontSize: '26px' });
                }
                else if (_this.Denominator >= 10 && _this.stackNumerator >= 10) {

                    _this.displaynumAns = _this.add.text(_this.SquareBox5.x + 10, _this.SquareBox5.y + 6, _this.stackNumerator, { fontSize: '26px' });
                    _this.displaydenomAns = _this.add.text(_this.SquareBox6.x + 10, _this.SquareBox6.y, _this.Denominator, { fontSize: '26px' });

                }

                else if (_this.Denominator < 10 && _this.stackNumerator >= 10) {
                    _this.displaynumAns = _this.add.text(_this.SquareBox5.x + 10, _this.SquareBox5.y + 6, _this.stackNumerator, { fontSize: '26px' });
                    _this.displaydenomAns = _this.add.text(_this.SquareBox2.x + 16, _this.SquareBox6.y, _this.Denominator, { fontSize: '26px' });
                }

                else if (_this.Denominator >= 10 && _this.stackNumerator < 10) {
                    _this.displaynumAns = _this.add.text(_this.SquareBox5.x + 16, _this.SquareBox5.y + 6, _this.stackNumerator, { fontSize: '26px' });
                    _this.displaydenomAns = _this.add.text(_this.SquareBox6.x + 10, _this.SquareBox6.y, _this.Denominator, { fontSize: '26px' });
                }
            }
            _this.SquareBox5.destroy();
            _this.SquareBox6.destroy();
            _this.num = false;
            _this.denom = false;
            _this.displaynumAns.fill = '#FF0000';
            _this.displaydenomAns.fill = '#FF0000';
            _this.denominator = false;

            if (_this.count1 == _this.zeroNumber) {
                _this.DisplayWholeNumQ();
            }
            else {
                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebration();
            }

        }
    },

    //* This is called when Right btn on the numberpad is clicked to enter numerator and denominator        
    rightbtnClicked: function () {
        _this.clickSound.play();
        _this.noofAttempts++;
        if (_this.wholeQ == 0) {
            console.log("1");
            if (_this.ansArray[0] == 0) {
                _this.wholeQ = -1;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebration();
                _this.SquareBoxWhole.frame = 0;
                //_this.SquareBoxWhole.visible = false;

            } else {
                _this.wrongSound.play();
                _this.Box1.removeChild(_this.enterTxt1);
                _this.enterTxt1.destroy();
                _this.enterTxt1.text = "";
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';

            }
        }
        else if ((_this.ansArray[0] == -1 || _this.ansArray[1] == -1)) {
            _this.wrongSound.play();
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            if (_this.SquareBox1.frame == 1 || _this.SquareBox2.frame == 1) {
                _this.Box1 = _this.SquareBox1;
                _this.Box2 = _this.SquareBox2;
                _this.eraseScreen();
                _this.enableBoxes(_this.Box1, _this.Box2)
            }
            else if (_this.SquareBox3.frame == 1 || _this.SquareBox4.frame == 1) {
                _this.Box1 = _this.SquareBox3;
                _this.Box2 = _this.SquareBox4;
                _this.eraseScreen();
                _this.enableBoxes(_this.Box1, _this.Box2)
            }
            else if (_this.isfractionDisplayed == true) {
                if (_this.SquareBox5.frame == 1 || _this.SquareBox6.frame == 1) {
                    _this.Box1 = _this.SquareBox5;
                    _this.Box2 = _this.SquareBox6;
                    _this.eraseScreen();
                    _this.enableBoxes(_this.Box1, _this.Box2)
                }
            }
        }
        else if (_this.ansArray[0] >= 0 && _this.ansArray[1] >= 0) {
            if (_this.isfractionDisplayed == true) {
                _this.finalEvaluation();
                console.log("final");
            }
            else {
                _this.evaluation();
            }
            console.log("2");
        }
        else if (_this.ansArray[1] >= 0) {
            _this.evaluation2(); //* evaluation for denominator
            console.log("3");
        }
        else if (_this.ansArray[0] >= 0) {
            _this.evaluation1(); //* evaluation for numerator 
            console.log("4");

        }
    },
    //* functions related to showing the demo video. 
    //* the game is paused before calling this. Once the demo video 
    //* completes or skip button is pressed, it makes _this.game.paused = false.

    DemoVideo: function () {
        //* In this game, we find the difference between two like fractions by ‘the method of one to one matching’.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-14-G6/" +
            _this.languageSelected + "/NSF-14-G6-demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        // //* what are the fraction given here.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-14-G6/" +
            _this.languageSelected + "/NSF-14-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //  //* Find the difference between the given fractions. 
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-14-G6/" +
            _this.languageSelected + "/NSF-14-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //  //*Drag the remaining fraction pieces to the whole.
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-14-G6/" +
            _this.languageSelected + "/NSF-14-G6-c.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);
        //  //drag the remaining cubes to the whole.
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-14-G6/" +
            _this.languageSelected + "/NSF-14-G6-d.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        //  //Enter your answer.
        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-14-G6/" +
            _this.languageSelected + "/NSF-14-G6-e.mp3");
        _this.q5Sound.appendChild(_this.q5Soundsrc);

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

        if (_this.dvTimer1) clearTimeout(_this.dvTimer1);
        if (_this.dvTimer2) clearTimeout(_this.dvTimer2);
        if (_this.dvTimer3) clearTimeout(_this.dvTimer3);
        if (_this.dvTimer4) clearTimeout(_this.dvTimer4);


        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.q1Sound) {
            console.log("removing the q1");
            //_this.q1Sound.removeEventListener('ended', _this.qA1);
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
        if (_this.q5Sound) {
            console.log("removing the q5");
            _this.q5Sound.pause();
            _this.q5Sound = null;
            _this.q5Soundsrc = null;
        }

        // _this.backbtn1.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                   //* skip button destroyed
        // _this.backbtn1.destroy();               //* backbutton button destroyed
    },

    //* event functions for demo audio and question audios. 
    //* do the action as required for synching with video. See showVideo
    // * function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        console.log("inside dA1.");
        _this.q1Sound.play();    //* play the first question after demo audio is done playing
    },

    // qA5: function()
    // {
    //     console.log("inside qA5.");
    //     _this.q5Sound.play();    //* play the second question after demo audio is done playing
    // },

    showDemoVideo: function () {
        //* As _this.game is paused, phaser time events cannot be used since its timer is stopped.
        //* so we have to use js timers as required

        _this.demoAudio1.play();
        _this.demoVideo_1 = _this.add.video('nsf14_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSF-14-G6_1.mp4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* after demoAudio is played, start q1

        // _this.q1Sound.addEventListener('ended', _this.qA1);  //* after q1 is played, start q2


        _this.dvTimer1 = setTimeout(function ()    //* Find the difference betwn the fraction
        {
            clearTimeout(_this.dvTimer1); 
            _this.q2Sound.play();
        }, 30000);

        _this.dvTimer2 = setTimeout(function ()    //* Touch the fraction cubes to do one to one matching.
        {
            clearTimeout(_this.dvTimer2);
            _this.q3Sound.play();
        }, 34000);

        _this.dvTimer3 = setTimeout(function ()    //* Drag the remaining cubes to the whole.
        {
            clearTimeout(_this.dvTimer3);
            _this.q4Sound.play();
        }, 40000);

        _this.dvTimer4 = setTimeout(function ()    //* Enter your answer 
        {
            clearTimeout(_this.dvTimer4);
            _this.q5Sound.play();
        }, 44000);

        _this.demoVideo_1.onComplete.add(function ()   //* on completion of demovideo close the video
        {
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop video.
            _this.videoWorld.destroy();         //* destroy the video, gets removed from screen.
            _this.game.paused = false;          //* now, unpause the game, so that it continues.
        });
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


