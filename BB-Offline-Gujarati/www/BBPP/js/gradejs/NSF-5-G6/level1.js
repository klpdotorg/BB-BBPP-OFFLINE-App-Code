Game.NSF_5_G6level1 = function () { };


Game.NSF_5_G6level1.prototype =
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

        _this.giveShadeSound = document.createElement('audio');
        _this.giveShadeSoundsrc = document.createElement('source');
        _this.giveShadeSoundsrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.giveShadeSound.appendChild(_this.giveShadeSoundsrc);

        _this.nextOptionSound = document.createElement('audio');
        _this.nextOptionSoundsrc = document.createElement('source');
        _this.nextOptionSoundsrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.nextOptionSound.appendChild(_this.nextOptionSoundsrc);

        telInitializerbbpp.gameIdInit("NSF_5_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },

    create: function (game) {

        //* show the demo video
        _this.time.events.add(1, function () {
            _this.ViewDemoVideo();
        });

        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(400, function () {
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

        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        //_this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        // //* User Progress variables for BB++ app
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
        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        _this.navBar = _this.add.sprite(0, 0, 'navBar');
        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

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

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                //                console.log("speaker button clicked:qn flag is: " + _this.qn_flag);
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                if (_this.qn_flag == 1) {
                    _this.voiceNote1();
                }
                if (_this.qn_flag == 2) {
                    _this.voiceNote2();
                }
                if (_this.qn_flag == 3) {
                    _this.voiceNote3();
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

        // _this.enterTxt1 = "";
        // _this.enterTxt2 = "";

        //* Horizontal or Vertical cubes to be shown for shuffling. 1 - Horizontal, 2 - Vertical.
        _this.HzOrVertArray = [2, 1, 1, 1, 1, 1];
        _this.HzOrVertIndex = 0;

        _this.questionCube = false;
        _this.optionCube = false;
        _this.WorkSpace_cubeX = [55, 90, 125, 160, 195, 230, 265, 300, 335, 370, 405, 4]; // store 17 x value

        _this.askedDenominators = [-1, -1, -1, -1, -1, -1];

        //*array for create 27 instance
        _this.elementArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 24, 26, 27];
        _this.elementArray2 = [1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 12, 13, 14, 23, 25];
        _this.elementArray3 = [1, 2, 3, 4, 5, 6, 13, 25]
        _this.elementArray4 = [1, 2, 3, 5];

        _this.elementArray1_Vertical = [1, 2, 3];


        _this.numberBoxPlacing = [];

        //*x coordinate for question cubes
        _this.Question_Hz_X = [111, 145, 179, 213, 247, 281, 315, 349];//[128,162,196,230,264,298,332,366];
        _this.Question_Hz_Y = 140;

        _this.Question_Ver_X = 195; //170
        _this.Question_Ver_Y = [350, 316, 282];

        _this.QnCubeDrag_Hz_X = [60, 94, 128, 162, 196, 230, 264, 298];
        _this.QnCubeDrag_Hz_Y = 10;

        _this.QnCubeDrag_Ver_X = 195; //170
        _this.QnCubeDrag_Ver_Y = [350, 316, 282];

        _this.optionX = [780, 834];
        _this.optionY = [122, 199];//195

        _this.optionNumX1 = [19, 15, 17, 16];//[15,19];
        _this.optionNumY1 = [42, 42, 43, 43];

        _this.optionNumX2 = [19, 15, 17, 15];
        _this.optionNumY2 = [7, 7, 8, 8];

        _this.optionNumX3 = [7, 11, 9, 11];//12
        _this.optionNumY3 = [40, 40, 43, 43];

        _this.optionNumX4 = [7, 10, 7, 10];//12
        _this.optionNumY4 = [9, 9, 9, 9];

        // _this.ws_question_Hz_X = [20,54,88,122,156,190,224,258,292,326,360,394,428,462,496,530,564];
        // _this.ws_question_Hz_Y = 20;

        _this.ws_Hz_X = [62, 96, 130, 164, 198, 232, 266, 300, 334, 368, 402, 436, 470, 504, 538, 572, 606];//70
        _this.ws_Hz_Y = 325;//330;//340

        _this.ws_Ver_X = 395; //370
        _this.ws_Ver_Y = [350, 316, 282, 248, 214, 180];

        _this.ws1_Hz_X = [12, 46, 80, 114, 148, 182, 216, 250, 284, 318, 352, 386, 420, 454, 488, 522, 556];//[20,54,88,122,156,190,224,258,292,326,360,394,428,462,496,530,564];
        _this.ws1_Hz_Y = 125;

        _this.ws1_Ver_X = 485; //460
        _this.ws1_Ver_Y = [350, 316, 282, 248, 214, 180];

        //_this.arr = [16,50,84,118,152,186,220,254,288,322,356,390,424,458,492,526,560]

        _this.Option_Hz_X = [110, 144, 178, 212, 246, 280, 314, 348, 382, 416, 450, 484, 518, 552, 586, 620, 654];//[106,140,174,208,242,276,310,344,378,412,446,480,514,548,582,616,650];
        _this.Option_Hz_Y = 420;

        _this.Option_Ver_X = 480; //455
        _this.Option_Ver_Y = [350, 316, 282, 248, 214, 180];
        //_this.smallBox = _this.add.image(750,100,'smallBox');
        _this.Thums_Down = _this.add.sprite(820, 310, 'Thumbs_Down');
        _this.Thumbs_Up = _this.add.sprite(750, 310, 'Thumbs_UP');
        _this.Thumbs_Up.visible = false;
        _this.Thums_Down.visible = false;


        _this.optionCubes = [];
        _this.equi_count = 0; //count when it change frame
        _this.fractionBoxCount = 0; // count when it arrive equi frnaction on ws
        _this.store_equi_deno = [];
        _this.store_equi_num = [];
        //*array to decide how many numbers equivalent and non equivqlent factor
        _this.Equivalent_NonEquivalentArray = [1, 2, 3, 4];

        //* asked instance array stores the instances already asked (in the function: go to each instance)
        _this.asked_instance = [];

        //* start the game with first question
        _this.time.events.add(500, _this.getQuestion);
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

        //* shuffle the arrays carrying different instances of options
        _this.elementArray1 = _this.shuffle(_this.elementArray1);
        _this.elementArray2 = _this.shuffle(_this.elementArray2);
        _this.elementArray3 = _this.shuffle(_this.elementArray3);
        _this.elementArray4 = _this.shuffle(_this.elementArray4);
        //* randomize the numbers, horizontal or vertical box and decide numerator and denominator
        _this.randomizing_elements();
        if (_this.HzOrVertArray[_this.count1] == 1) {
            _this.Decide_Fractions();
            _this.Decide_Nonequi_Fractions();  // here we get equivalent denom and num array and non equivalent denom array and question also
        }
        else if (_this.HzOrVertArray[_this.count1] == 2) {
            //            console.log("hihi");
            _this.Decide_Fractions_Vertical();
            _this.Ver_Decide_Nonequi_Fractions();
        }
        // _this.Decide_equi_Fractions();

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

        if (_this.Question3) {
            _this.Question3.pause();
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

        //* load the initial screen here options and question will display
        _this.LoadInitialScreen();

        //* ask the question Let us find the equivalent fractions 
        //_this.askQn1 ();

        //* with a delay enabling the every option box 


        //* add a delay if reqquired and show number pad
        _this.time.events.add(2000, function () {
            //_this.currentoptionIndx = 0;  //* since audio is asked, give a bit of delay
            if (_this.count1 == 0) {
                _this.voiceNote1();
                _this.time.events.add(3000, function () {
                    _this.qn_flag = 1;
                    _this.enable_options();
                    _this.create_Qncubes();
                });
            }
            else {
                _this.time.events.add(600, function ()   //* reduce the delay since audio is not asked here.
                {
                    _this.qn_flag = 1;
                    _this.enable_options();
                    _this.create_Qncubes();
                });
            }

        });

    },

    voiceNote1: function () {
        _this.stopVoice();
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-5-G6/" +
            _this.languageSelected + "/NSF-5-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);

        _this.Question1.play();

    },

    voiceNote2: function () {

        _this.stopVoice();
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NSF-5-G6/" +
            _this.languageSelected + "/NSF-5-G6-b.mp3");
        _this.Question2.appendChild(_this.Question2src);

        _this.Question2.play();

    },

    voiceNote3: function () {
        _this.stopVoice();
        _this.Question3 = document.createElement('audio');
        _this.Question3src = document.createElement('source');
        _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NSF-5-G6/" +
            _this.languageSelected + "/NSF-5-G6-c.mp3");
        _this.Question3.appendChild(_this.Question3src);

        _this.Question3.play();
    },

    create_Qncubes: function () {
        _this.objGroup1.destroy();
        _this.Array_Qncube = [];
        _this.Array_Optcube = [];
        _this.QnCubeGroupCpy = _this.add.group();
        _this.QnCubeGroup = _this.add.group();

        if (_this.HzOrVertArray[_this.count1] == 1) {
            _this.askedDenominators[_this.count1] = _this.Hz_Denominator;
            for (i = 0; i < _this.left_denominator; i++) {

                _this.Question_cube2 = _this.QnCubeGroup.create(_this.ws_Hz_X[i] - 49, 30, 'YG_Hz');
                _this.Question_cube2.name = i;
                _this.Array_Qncube[i] = _this.Question_cube2.name;
                _this.Question_cube2.frame = 0;

                //* create a copy of the selected cube group in workspace. it will sit behind Qstion group in WS
                qstCubeCpy = _this.QnCubeGroupCpy.create(_this.ws_Hz_X[i] - 49, 30, 'YG_Hz');
                qstCubeCpy.name = "" + i;
                qstCubeCpy.frame = 0;

                //console.log("First question cube copy: " + qstCubeCpy.x + " " + qstCubeCpy.y +" " + _this.QnCubeGroupCpy.length + " " + qstCubeCpy.frame + " " + + _this.Array_Qncube.length);

                // console.log(_this.ws_Hz_X[i]);                                          
            }
            for (k = _this.objGroup.length - 1; k >= _this.left_denominator - _this.left_numerator; k--) {
                _this.QnCubeGroup.getChildAt(k).frame = 1;
                _this.QnCubeGroupCpy.getChildAt(k).frame = 1;
            }
            _this.bigBox.addChild(_this.QnCubeGroupCpy);
            _this.bigBox.addChild(_this.QnCubeGroup);
            _this.Xvalue_QnCube = _this.QnCubeGroup.getChildAt(_this.QnCubeGroup.length - 1).x;
        }
        else {
            _this.askedDenominators[_this.count1] = _this.Hz_Denominator;
            for (i = 0; i < _this.left_denominator; i++) {

                _this.Question_cube2 = _this.QnCubeGroup.create(_this.ws_Ver_X - 90, _this.ws_Ver_Y[i], 'YG_Ver');
                _this.Question_cube2.name = i;
                _this.Array_Qncube[i] = _this.Question_cube2.name;
                _this.Question_cube2.frame = 0;

                //* create a copy of the selected cube group in workspace. it will sit behind Qstion group in WS
                qstCubeCpy = _this.QnCubeGroupCpy.create(_this.ws_Ver_X - 90, _this.ws_Ver_Y[i], 'YG_Ver');
                qstCubeCpy.name = "" + i;
                qstCubeCpy.frame = 0;

                //console.log("First question cube copy: " + qstCubeCpy.x + " " + qstCubeCpy.y +" " + _this.QnCubeGroupCpy.length + " " + qstCubeCpy.frame + " " + + _this.Array_Qncube.length);

                // console.log(_this.ws_Hz_X[i]);                                          
            }
            for (k = _this.objGroup.length - 1; k >= _this.left_denominator - _this.left_numerator; k--) {
                _this.QnCubeGroup.getChildAt(k).frame = 1;
                _this.QnCubeGroupCpy.getChildAt(k).frame = 1;
            }
            // _this.bigBox.addChild(_this.QnCubeGroupCpy);
            // _this.bigBox.addChild(_this.QnCubeGroup);
            _this.Xvalue_QnCube = _this.QnCubeGroup.getChildAt(_this.QnCubeGroup.length - 1).x;
        }

    },

    optionclicked: function (target) {
        //_this.ws_optioncubeGroup =  _this.add.group();
        _this.clickSound.play();
        //_this.qn_flag =-1; 
        _this.QnGroup = _this.add.group();
        _this.optGroup = _this.add.group();

        //console.log("inside option clicked")
        target.frame = 2;
        //        console.log(target.getChildAt(0).name);
        //        console.log(target.getChildAt(1).name);

        _this.selectedOption_Denominator = target.getChildAt(0).name;
        _this.selectedOption_Numerator = target.getChildAt(1).name;

        //        console.log(_this.selectedOption_Numerator);
        //        console.log(_this.selectedOption_Denominator);

        if (_this.HzOrVertArray[_this.count1] == 1) {
            _this.selectedFraction = _this.add.sprite(50, 405, 'fraction_Bg');
        }
        else if (_this.HzOrVertArray[_this.count1] == 2) {
            _this.selectedFraction = _this.add.sprite(480, 412, 'fraction_Bg'); //455
        }



        if (_this.selectedOption_Denominator >= 10) {
            //            console.log("here");
            _this.selected_Denominator = _this.add.text(10, 40, _this.selectedOption_Denominator);//60 450
            _this.selectedFraction.addChild(_this.selected_Denominator);

        }
        else if (_this.selectedOption_Denominator < 10) {
            //            console.log("here");
            _this.selected_Denominator = _this.add.text(15, 40, _this.selectedOption_Denominator);
            _this.selectedFraction.addChild(_this.selected_Denominator);
        }

        if (_this.selectedOption_Numerator >= 10) {
            //            console.log("here");
            _this.selected_Numerator = _this.add.text(10, 10, _this.selectedOption_Numerator);
            _this.selectedFraction.addChild(_this.selected_Numerator);
        }
        else if (_this.selectedOption_Numerator < 10) {
            //            console.log("here");           
            _this.selected_Numerator = _this.add.text(16, 10, _this.selectedOption_Numerator);
            _this.selectedFraction.addChild(_this.selected_Numerator);
        }

        for (i = 0; i < _this.optionsGroup.length; i++) {
            currentOption = _this.optionsGroup.getChildAt(i);
            currentOption.inputEnabled = false;
        }

        _this.selected_Denominator.fill = '#65B4C3';
        _this.selected_Numerator.fill = '#65B4C3';
        //*change the frame and place that particular fraction in below the work spce with same cubes
        //*disable remaining options

        //console.log(target.length);
        //for(j =0;j<target.length;j++){
        // console.log(_this.selectedOption_Denominator);
        // console.log(_this.selectedOption_Numerator);

        //}
        //        console.log(_this.selected_Denominator.font);
        //        console.log(_this.selected_Denominator.fontSize);

        _this.generating_cubes(_this.selectedOption_Denominator);
        //*drag enale to workspcae
        //_this.optionCube = true;
        //_this.questionCube = false;
        //_this.cubeEnable(_this.selectedCubeGroup);

        //* for first question & first option, show the tween action of selected cubes to work space.
        //* that is to indicate to user to drag and drop it in workspace.

        if (_this.currentoptionIndx == 0 && _this.count1 == 0)  //* check for first Q and frst option.
        {
            _this.drag_cubesAction_Ver();  //* only vertical will be asked as first Q. so show that drag action

            _this.time.events.add(1500, function () {
                _this.EnableSelectedCube();  //* let the tween complete and then enable the cubes
            });
        }
        else {
            _this.EnableSelectedCube();
        }
    },

    //* to show drag action to user from outside to workspace.
    drag_cubesAction_Ver: function () {
        var denominator_length = _this.selectedCubeGroup.length;

        _this.tempCubeGroup = _this.add.group();


        for (var i = 0; i < denominator_length; i++)  //* create a temp group
        {
            //* create temp group of cubes to show dragging action to user. 
            _this.tempCube = _this.add.sprite(_this.Option_Ver_X, _this.Option_Ver_Y[i], 'YB_Ver');
            _this.tempCubeGroup.addChild(_this.tempCube);
        }

        //* change the color of numberator.
        for (var k = denominator_length - 1; k >= (denominator_length - _this.selectedOption_Numerator); k--) {
            //*add cube image for num with diff clr cube
            _this.tempCubeGroup.getChildAt(k).frame = 1;
        }

        _this.time.events.add(1000, function () {
            _this.hand = _this.add.image(_this.Option_Ver_X + 20, _this.Option_Ver_Y[0], 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.tempCubeGroup.addChild(_this.hand);
        });

        _this.time.events.add(1500, function () {
            //* add tween to temp group and tween it to work space.
            //_this.bigBox.addChild(_this.objGroup1);
            tempDragAction = _this.add.tween(_this.tempCubeGroup);
            tempDragAction.to({ x: -85, y: 1 }, 800, 'Linear', true, 0);
            tempDragAction.start();
        });

        //* destroy the group after the show after a delay
        _this.time.events.add(3000, function () {
            _this.tempCubeGroup.destroy();
        });
    },

    //* to show drag action to user within the workspace.
    drag_cubesAction_WS_Ver: function () {
        var denominator_length = _this.selectedCubeGroup.length;
        _this.tempQnCubeGroup = _this.add.group();
        _this.tempOptCubeGroup = _this.add.group();

        //* tween Question / Option cubes whichever is smaller in length

        //* if question cubes (question denominator) is less than the option cubes
        if (_this.Array_Qncube.length < denominator_length) {
            //* go till length of denominator of question & create temp cubes on the question cubes.
            for (var l = 0; l < _this.left_denominator; l++) {
                //* create temp group of Qstn cubes to show dragging action to user. 
                _this.tempQnCube = _this.add.sprite(_this.ws_Ver_X - 90, _this.QnCubeDrag_Ver_Y[l], 'YG_Ver');

                _this.tempQnCubeGroup.addChild(_this.tempQnCube);
            }

            //* color the numberators there.
            for (var m = _this.left_denominator - 1; m >= _this.left_denominator - _this.left_numerator; m--) {
                //*add cube image for num with diff clr cube
                _this.tempQnCubeGroup.getChildAt(m).frame = 1;
            }

            //* add a hand symbol on those cube for tweening.
            _this.time.events.add(1000, function () {
                _this.hand = _this.add.image(_this.ws_Ver_X - 70, _this.ws_Ver_Y[0], 'hand');
                _this.hand.scale.setTo(0.5, 0.5);
                _this.tempQnCubeGroup.addChild(_this.hand);
            });

            //* tween it till the next vertical space on the cubes.
            _this.time.events.add(1500, function () {
                //* add tween to this temp group and tween it upwards to show drag action
                tempDragAction = _this.add.tween(_this.tempQnCubeGroup);
                tempDragAction.to({ y: -34.5 * _this.left_denominator }, 800, 'Linear', true, 0);
                tempDragAction.start();
            });

            //* destroy the group after the show after a delay
            _this.time.events.add(3000, function () {
                _this.tempQnCubeGroup.destroy();
            });
        }

        //* question cubes are more. then tween the option cubes.
        else if (_this.Array_Qncube.length > denominator_length) {
            for (var n = 0; n < denominator_length; n++) {
                //* create temp group of Qstn cubes to show dragging action to user. 
                _this.tempOptCube = _this.add.sprite(_this.ws_Ver_X, _this.Option_Ver_Y[n], 'YB_Ver');
                _this.tempOptCubeGroup.addChild(_this.tempOptCube);
            }

            for (var m = denominator_length - 1; m >= (denominator_length - _this.selectedOption_Numerator); m--) {
                //*add cube image for num with diff clr cube
                _this.tempOptCubeGroup.getChildAt(m).frame = 1;
            }

            _this.time.events.add(1000, function () {
                _this.hand = _this.add.image(_this.ws_Ver_X + 20, _this.Option_Ver_Y[0], 'hand');
                _this.hand.scale.setTo(0.5, 0.5);
                _this.tempOptCubeGroup.addChild(_this.hand);
            });

            _this.time.events.add(1500, function () {
                //* add tween to this temp group and tween it upwards to show drag action
                tempDragAction = _this.add.tween(_this.tempOptCubeGroup);
                tempDragAction.to({ y: -34.5 * denominator_length }, 800, 'Linear', true, 0);
                tempDragAction.start();
            });

            //* destroy the group after the show after a delay
            _this.time.events.add(3000, function () {
                _this.tempOptCubeGroup.destroy();
            });
        }
    },

    EnableSelectedCube: function ()
    //* enable the bottom cubes to be clicked and dragged. It will have a duplicate below it.
    //* so when dragged, duplicate will show up.
    {
        if (_this.selectedCubeGroup.length == _this.QnCubeGroup.length) {
            // target = _this.objGroup;
            //console.log("inside cube enable if"); 
            _this.Denominator = _this.left_denominator;
            _this.Numerator = _this.left_numerator;
        }
        else {
            // target = _this.selectedCubeGroup;
            //console.log("inside cube enable else");
            _this.Denominator = _this.selectedOption_Denominator;
            _this.Numerator = _this.selectedOption_Numerator;
        }

        //console.log("inside enable selected cube function.........:"+ this.Denominator);
        if (_this.HzOrVertArray[_this.count1] == 1) {
            for (l = 0; l < _this.Denominator; l++) {
                //console.log("hi");
                let currentCube = _this.selectedCubeGroup.getChildAt(l);
                currentCube.inputEnabled = true;
                currentCube.input.useHandCursor = true;
                //currentCube.events.onInputDown.add(_this.currentCubeClicked,currentCube);
                currentCube.input.enableDrag(true);

                currentCube.events.onDragUpdate.add(_this.Sel_dragUpdate, currentCube);
                currentCube.events.onDragStop.add(_this.Sel_dragStop, currentCube);
            }
        }
        else if (_this.HzOrVertArray[_this.count1] == 2) {
            for (l = 0; l < _this.Denominator; l++) {
                //console.log("hi");
                let currentCube = _this.selectedCubeGroup.getChildAt(l);
                currentCube.inputEnabled = true;
                currentCube.input.useHandCursor = true;
                //currentCube.events.onInputDown.add(_this.currentCubeClicked,currentCube);
                currentCube.input.enableDrag(true);

                currentCube.events.onDragUpdate.add(_this.Ver_Sel_dragUpdate, currentCube);
                currentCube.events.onDragStop.add(_this.Ver_Sel_dragStop, currentCube);
            }
        }

    },

    Sel_dragUpdate: function (target) {
        //console.log("inside drag update");
        //* drag stop for selectedCubeGroup. target is one counter which is dragged
        //* target.name has its position number. All counter in front and back, change the x,y
        //* with a displacement from the dragged counter. There are two for loops for this.

        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.Denominator; k++) {
            _this.selectedCubeGroup.getChildAt(k).y = dragggedCubeY;
            _this.selectedCubeGroup.getChildAt(k).x = draggedCubeX + 34 * frontpos;

            frontpos++;
        }

        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.selectedCubeGroup.getChildAt(k).y = dragggedCubeY;
            _this.selectedCubeGroup.getChildAt(k).x = draggedCubeX - 34 * backpos;

            backpos++;
        }
    },

    Sel_dragStop: function (target) {
        //console.log("selected drag stop function............ ");
        //* dragstop function for selectedCubeGroup. 
        //* if the dragged area is workspace, then create a copy of itself & hide the copy below it in work place.
        //* if dropped else where, then go back to the original place.
        _this.clickSound.play();
        console.log(target.y);
        if (target.y <= 395 && target.y >= 200)  //* if within rangetarget.x>=50 && target.x<=616 && 
        {
            _this.bigBox.addChild(_this.optionCubeGroupCpy);
            for (i = 0; i < _this.Denominator; i++) {
                //* set the x,y of the selected group to sit properly in work space.
                current_ws_cube = _this.selectedCubeGroup.getChildAt(i);
                current_ws_cube.x = _this.ws_Hz_X[i];
                current_ws_cube.y = _this.ws_Hz_Y;

                //* create a copy of the selected cube group in workspace. it will sit behind selected group in WS
                //optionCubeCpy = _this.add.sprite(_this.Option_Hz_X[i],_this.Option_Hz_Y,'YB_Hz');
                optionCubeCpy = _this.optionCubeGroupCpy.create(_this.ws1_Hz_X[i], _this.ws1_Hz_Y, 'YB_Hz');
                optionCubeCpy.name = "" + i;
                optionCubeCpy.frame = current_ws_cube.frame;
                optionCubeCpy.visible = true;

                _this.Array_Optcube[i] = i;
                //console.log("option cube copy: " + optionCubeCpy.x + " " + optionCubeCpy.y +" " + _this.optionCubeGroupCpy.length);
            }
            //* Compare the length of the cubes now, is it </>/= to Question cubes.
            _this.Check_Dragenable_cubes();
        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            for (var i = 0; i < _this.Denominator; i++) {
                _this.selectedCubeGroup.getChildAt(i).x = _this.Option_Hz_X[i];
                _this.selectedCubeGroup.getChildAt(i).y = _this.Option_Hz_Y;
            }
        }
    },

    Ver_Sel_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;
        for (let k = Number(target.name) + 1; k < _this.Denominator; k++) {
            _this.selectedCubeGroup.getChildAt(k).y = dragggedCubeY - 34 * frontpos;
            _this.selectedCubeGroup.getChildAt(k).x = draggedCubeX;

            frontpos++;
        }
        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.selectedCubeGroup.getChildAt(k).y = dragggedCubeY + 34 * backpos;
            _this.selectedCubeGroup.getChildAt(k).x = draggedCubeX;

            backpos++;
        }
    },

    Ver_Sel_dragStop: function (target) {
        //        console.log(target.y);
        //        console.log(target.x);
        _this.clickSound.play();
        if (target.x >= 375 && target.x <= 455)  //* if within range &&  target.y<360 && target.y>170
        {
            //_this.bigBox.addChild(_this.optionCubeGroupCpy);
            for (i = 0; i < _this.Denominator; i++) {
                //* set the x,y of the selected group to sit properly in work space.
                current_ws_cube = _this.selectedCubeGroup.getChildAt(i);
                current_ws_cube.x = _this.ws_Ver_X;
                current_ws_cube.y = _this.ws_Ver_Y[i];

                //* create a copy of the selected cube group in workspace. it will sit behind selected group in WS
                //optionCubeCpy = _this.add.sprite(_this.Option_Hz_X[i],_this.Option_Hz_Y,'YB_Hz');
                optionCubeCpy = _this.optionCubeGroupCpy.create(_this.ws_Ver_X, _this.ws_Ver_Y[i], 'YB_Ver');
                optionCubeCpy.name = "" + i;
                optionCubeCpy.frame = current_ws_cube.frame;
                optionCubeCpy.visible = true;

                _this.Array_Optcube[i] = i;
                //console.log("option cube copy: " + optionCubeCpy.x + " " + optionCubeCpy.y +" " + _this.optionCubeGroupCpy.length);
            }

            //* for first question, first option, demonstrate how to drag within the work space.
            //* in rear case of Qstn 1/3 and Option 2/3 show in first question, hand may not be shown.
            //* in work space...no need to take care of that.
            if (_this.currentoptionIndx == 0 && _this.count1 == 0) {
                _this.drag_cubesAction_WS_Ver();

            }
            //* Compare the length of the cubes now, is it </>/= to Question cubes.
            _this.Ver_Check_Dragenable_cubes();
        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            for (var i = 0; i < _this.Denominator; i++) {
                _this.selectedCubeGroup.getChildAt(i).x = _this.Option_Ver_X;
                _this.selectedCubeGroup.getChildAt(i).y = _this.Option_Ver_Y[i];
            }
        }
    },

    Opt_dragUpdate: function (target) {
        //console.log("inside drag update");
        //* Work space drag stop for selectedCubeGroup. target is one counter which is dragged
        //* target.name has its position number. All counter in front and back, change the x,y
        //* with a displacement from the dragged counter. There are two for loops for this.

        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.Denominator; k++) {
            _this.selectedCubeGroup.getChildAt(k).y = dragggedCubeY;
            _this.selectedCubeGroup.getChildAt(k).x = draggedCubeX + 34 * frontpos;

            frontpos++;
        }

        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.selectedCubeGroup.getChildAt(k).y = dragggedCubeY;
            _this.selectedCubeGroup.getChildAt(k).x = draggedCubeX - 34 * backpos;

            backpos++;
        }
    },

    Opt_dragStop: function (target) {
        //console.log("selected drag stop function in work space. ....: ");
        //* dragstop function for selectedCubeGroup. 
        //* if the dragged area is workspace, then create a copy of itself & hide the copy below it in work place.
        //* if dropped else where, then go back to the original place.
        _this.clickSound.play();
        j = _this.Array_Optcube.length;

        if (target.y <= 460 && target.y >= 200)  //* if within range target.x>=50 && target.x<=616 && 
        {
            for (i = 0; i < _this.Denominator; i++) {
                //* set the x,y of the selected group to sit properly in work space.
                current_ws_cube = _this.selectedCubeGroup.getChildAt(i);
                current_ws_cube.x = _this.ws_Hz_X[j];
                current_ws_cube.y = _this.ws_Hz_Y;

                //* create a copy of the selected cube group in workspace. it will sit behind selected group in WS
                optionCubeCpy = _this.optionCubeGroupCpy.create(_this.ws1_Hz_X[j], _this.ws1_Hz_Y, 'YB_Hz');
                optionCubeCpy.name = "" + i;
                optionCubeCpy.frame = current_ws_cube.frame;
                optionCubeCpy.visible = true;

                _this.Array_Optcube[j] = i;
                //console.log("option cube copy: " + optionCubeCpy.x + " " + optionCubeCpy.y +" " + _this.optionCubeGroupCpy.length + " " + optionCubeCpy.frame + " " + + _this.Array_Optcube.length);
                j++;
            }

            _this.Check_Dragenable_cubes();
        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            j--; //* reduce by 1 (from length) for it to go back previous cube index.
            for (var i = _this.Denominator - 1; i >= 0; i--) {
                _this.selectedCubeGroup.getChildAt(i).x = _this.ws_Hz_X[j];
                _this.selectedCubeGroup.getChildAt(i).y = _this.ws_Hz_Y;
                j--;
            }
        }

    },

    Ver_Opt_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;
        for (let k = Number(target.name) + 1; k < _this.Denominator; k++) {
            _this.selectedCubeGroup.getChildAt(k).y = dragggedCubeY - 34 * frontpos;
            _this.selectedCubeGroup.getChildAt(k).x = draggedCubeX;

            frontpos++;
        }
        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.selectedCubeGroup.getChildAt(k).y = dragggedCubeY + 34 * backpos;
            _this.selectedCubeGroup.getChildAt(k).x = draggedCubeX;

            backpos++;
        }
    },

    Ver_Opt_dragStop: function (target) {
        _this.clickSound.play();
        j = _this.Array_Optcube.length;
        //        console.log(target.y);
        if (target.x >= 355 && target.x <= 455)  //* if within range  && target.y <= 340 && target.y >=170
        {
            for (i = 0; i < _this.Denominator; i++) {
                //* set the x,y of the selected group to sit properly in work space.
                current_ws_cube = _this.selectedCubeGroup.getChildAt(i);
                current_ws_cube.x = _this.ws_Hz_X;
                current_ws_cube.y = _this.ws_Hz_Y[j];

                //* create a copy of the selected cube group in workspace. it will sit behind selected group in WS
                optionCubeCpy = _this.optionCubeGroupCpy.create(_this.ws_Ver_X, _this.ws_Ver_Y[j], 'YB_Ver');
                optionCubeCpy.name = "" + i;
                optionCubeCpy.frame = current_ws_cube.frame;
                optionCubeCpy.visible = true;

                _this.Array_Optcube[j] = i;
                //console.log("option cube copy: " + optionCubeCpy.x + " " + optionCubeCpy.y +" " + _this.optionCubeGroupCpy.length + " " + optionCubeCpy.frame + " " + + _this.Array_Optcube.length);
                j++;
            }

            _this.Ver_Check_Dragenable_cubes();
        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            //            console.log("koo");
            j--; //* reduce by 1 (from length) for it to go back previous cube index.
            for (var i = _this.Denominator - 1; i >= 0; i--) {
                _this.selectedCubeGroup.getChildAt(i).x = _this.ws_Ver_X;
                _this.selectedCubeGroup.getChildAt(i).y = _this.ws_Ver_Y[j];
                j--;
            }
        }
    },

    Qst_dragUpdate: function (target) {
        //console.log("inside drag update");
        //* Work space drag stop for selectedCubeGroup. target is one counter which is dragged
        //* target.name has its position number. All counter in front and back, change the x,y
        //* with a displacement from the dragged counter. There are two for loops for this.

        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.left_denominator; k++) {
            _this.QnCubeGroup.getChildAt(k).y = dragggedCubeY;
            _this.QnCubeGroup.getChildAt(k).x = draggedCubeX + 34 * frontpos;

            frontpos++;
        }

        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.QnCubeGroup.getChildAt(k).y = dragggedCubeY;
            _this.QnCubeGroup.getChildAt(k).x = draggedCubeX - 34 * backpos;

            backpos++;
        }

    },

    Qst_dragStop: function (target) {
        //console.log("Question drag stop function in work space. ....: ");
        //* dragstop function for QnCubesGroup. 
        //* if the dragged area is workspace, then create a copy of itself & hide the copy below it in work place.
        //* if dropped else where, then go back to the original place.
        _this.clickSound.play();
        j = _this.Array_Qncube.length;

        if (target.y <= 50 && target.y >= 0)  //* if within range target.x>=50 && target.x<=616 && 
        {
            for (i = 0; i < _this.left_denominator; i++) {
                //* set the x,y of the question group to sit properly in work space.
                current_ws_cube = _this.QnCubeGroup.getChildAt(i);
                current_ws_cube.x = _this.ws_Hz_X[j] - 49;
                current_ws_cube.y = 30;

                //* create a copy of the selected cube group in workspace. it will sit behind selected group in WS
                qnCubeCpy = _this.QnCubeGroupCpy.create(_this.ws_Hz_X[j] - 49, 30, 'YG_Hz');
                qnCubeCpy.name = "" + i;
                qnCubeCpy.frame = current_ws_cube.frame;
                qnCubeCpy.visible = true;

                _this.Array_Qncube[j] = i;
                //console.log("question cube copy: " + qnCubeCpy.x + " " + qnCubeCpy.y +" " + _this.QnCubeGroupCpy.length + " " + qnCubeCpy.frame + " " + + _this.Array_Qncube.length);
                j++;
            }
            _this.Check_Dragenable_cubes();
        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            //console.log(" Question drag else part...J: " + j);
            j--; //* reduce by 1 (from length) for it to go back previous cube index.
            for (var i = _this.left_denominator - 1; i >= 0; i--)  //* go back each cube resetting x,y values
            {
                _this.QnCubeGroup.getChildAt(i).x = _this.ws_Hz_X[j] - 54;
                _this.QnCubeGroup.getChildAt(i).y = 30;

                //console.log(" resetting...X: " + _this.ws_Hz_X[j] + " " + _this.QnCubeGroup.getChildAt(i).x);
                j--;
            }
        }
    },

    Ver_Qst_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.left_denominator; k++) {
            _this.QnCubeGroup.getChildAt(k).y = dragggedCubeY - 34 * frontpos;
            _this.QnCubeGroup.getChildAt(k).x = draggedCubeX;

            frontpos++;
        }

        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.QnCubeGroup.getChildAt(k).y = dragggedCubeY + 34 * backpos;
            _this.QnCubeGroup.getChildAt(k).x = draggedCubeX;

            backpos++;
        }
    },

    Ver_Qst_dragStop: function (target) {
        _this.clickSound.play();
        j = _this.Array_Qncube.length;

        if (target.x >= 285 && target.x <= 325)  //* if within range  && target.y <= 360 && target.y >=170
        {
            //            console.log("here");
            for (i = 0; i < _this.left_denominator; i++) {
                //* set the x,y of the question group to sit properly in work space.
                current_ws_cube = _this.QnCubeGroup.getChildAt(i);
                current_ws_cube.x = _this.ws_Ver_X - 90;
                current_ws_cube.y = _this.ws_Ver_Y[j];

                //* create a copy of the selected cube group in workspace. it will sit behind selected group in WS
                qnCubeCpy = _this.QnCubeGroupCpy.create(_this.ws_Ver_X - 90, _this.ws_Ver_Y[j], 'YG_Ver');
                qnCubeCpy.name = "" + i;
                qnCubeCpy.frame = current_ws_cube.frame;
                qnCubeCpy.visible = true;

                _this.Array_Qncube[j] = i;
                //console.log("question cube copy: " + qnCubeCpy.x + " " + qnCubeCpy.y +" " + _this.QnCubeGroupCpy.length + " " + qnCubeCpy.frame + " " + + _this.Array_Qncube.length);
                j++;
            }
            _this.Ver_Check_Dragenable_cubes();
        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            //            console.log(" Question drag else part...J: " + j);
            j--; //* reduce by 1 (from length) for it to go back previous cube index.
            for (var i = _this.left_denominator - 1; i >= 0; i--)  //* go back each cube resetting x,y values
            {
                _this.QnCubeGroup.getChildAt(i).x = _this.ws_Ver_X - 90;
                _this.QnCubeGroup.getChildAt(i).y = _this.ws_Ver_Y[j];

                //console.log(" resetting...X: " + _this.ws_Hz_X[j] + " " + _this.QnCubeGroup.getChildAt(i).x);
                j--;
            }
        }
    },

    Check_Dragenable_cubes: function () {
        _this.SelectedCube = false;

        //* Compare array lengths of option fraction and question fraction
        //* if they are the same, then stop dragging. Show thumbps up/down & ask audio qst etc.
        //* if Qst < Opt, then enable Qst cubes.
        //* otherwise, enable Opt cubes to be dragged.

        //console.log("Check Drag Enable: Array lengths Qst: Opt " + _this.Array_Qncube.length + " " + _this.Array_Optcube.length);

        //* first disable both the Question cubes and option cubes initially.
        //* based on the length, enable one of those two sets.

        let qstCube = _this.QnCubeGroup.getChildAt(0); //* get first question cube.
        if (qstCube.inputEnabled == true) //* if one of the chid is enabled, then disable all.
        {
            for (l = 0; l < _this.left_denominator; l++)   //* go till length of denominator of question & disable.
            {
                //* remove all events
                qstCube = _this.QnCubeGroup.getChildAt(l);
                qstCube.input.enableDrag(false);
                qstCube.events.onInputDown.removeAll();
                qstCube.events.onDragUpdate.removeAll();
                qstCube.events.onDragStop.removeAll();
                qstCube.inputEnabled = false;
            }
        }

        let optCube = _this.selectedCubeGroup.getChildAt(0);     //* get first option cube. 
        if (optCube.inputEnabled == true) //* if one is enabled, then remove events from all.
        {
            for (l = 0; l < _this.selectedOption_Denominator; l++) //* remove all its events once.
            {
                optCube = _this.selectedCubeGroup.getChildAt(l);
                optCube.input.enableDrag(false);
                optCube.events.onInputDown.removeAll();
                optCube.events.onDragUpdate.removeAll();
                optCube.events.onDragStop.removeAll();
                optCube.inputEnabled = false;
            }
        }

        if (_this.Array_Qncube.length < _this.Array_Optcube.length) {

            for (l = 0; l < _this.left_denominator; l++)   //* go till length of denominator of question.
            {
                //* enabling Qn cube events.
                qstCube = _this.QnCubeGroup.getChildAt(l);

                //* add all events to question cubes since it has to be enabled now.
                qstCube.inputEnabled = true;
                qstCube.input.useHandCursor = true;
                qstCube.input.enableDrag(true);
                qstCube.events.onDragUpdate.add(_this.Qst_dragUpdate, qstCube);
                qstCube.events.onDragStop.add(_this.Qst_dragStop, qstCube);
            }

        }
        else if (_this.Array_Qncube.length > _this.Array_Optcube.length) {
            for (l = 0; l < _this.selectedOption_Denominator; l++) {
                optCube = _this.selectedCubeGroup.getChildAt(l);
                //* add all events to question cubes.
                optCube.inputEnabled = true;
                optCube.input.useHandCursor = true;
                optCube.input.enableDrag(true);
                optCube.events.onDragUpdate.add(_this.Opt_dragUpdate, optCube);
                optCube.events.onDragStop.add(_this.Opt_dragStop, optCube);
            }

        }
        else if (_this.Array_Qncube.length == _this.Array_Optcube.length) {
            //console.log( "reached equal length..stopping dragging.................");

            _this.optionCube = false;
            _this.questionCube = false;
            //console.log(_this.Array_Qncube.length);

            _this.QnCubeGroup.destroy();
            _this.selectedCubeGroup.destroy();

            Qst_drag_count = _this.Array_Qncube.length / _this.left_denominator;
            total_Qst_frame = Qst_drag_count * _this.left_numerator;

            opt_drag_count = _this.Array_Optcube.length / _this.selectedOption_Denominator;
            //console.log(_this.selectedOption_Denominator);
            total_opt_frame = opt_drag_count * _this.selectedOption_Numerator;
            //console.log(_this.selectedOption_Numerator);
            _this.giveShadeSound.play();
            for (let i = 0; i < _this.Array_Qncube.length - total_Qst_frame; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.QnCubeGroupCpy.getChildAt(i).frame = 0;
                });

            }
            for (let i = _this.Array_Qncube.length - total_Qst_frame; i < _this.Array_Qncube.length - 1; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.QnCubeGroupCpy.getChildAt(i).frame = 1;
                });
            }

            for (let i = 0; i < _this.Array_Optcube.length - total_opt_frame; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.optionCubeGroupCpy.getChildAt(i).frame = 0;
                });
            }
            for (let i = _this.Array_Optcube.length - 1; i >= _this.Array_Optcube.length - total_opt_frame; i--) {
                _this.time.events.add(50 * i, function () {
                    _this.optionCubeGroupCpy.getChildAt(i).frame = 1;
                });
            }

            _this.time.events.add(400, function () {
                _this.next_step();//thumsup to appear
            });
        }
    },

    Ver_Check_Dragenable_cubes: function () {
        _this.SelectedCube = false;

        //console.log("hooooooooooooooooooooooooooooooooooooooooo");
        let qstCube = _this.QnCubeGroup.getChildAt(0); //* get first question cube.
        if (qstCube.inputEnabled == true) //* if one of the chid is enabled, then disable all.
        {
            for (l = 0; l < _this.left_denominator; l++)   //* go till length of denominator of question & disable.
            {
                //* remove all events
                qstCube = _this.QnCubeGroup.getChildAt(l);
                qstCube.input.enableDrag(false);
                qstCube.events.onInputDown.removeAll();
                qstCube.events.onDragUpdate.removeAll();
                qstCube.events.onDragStop.removeAll();
                qstCube.inputEnabled = false;
            }
        }

        let optCube = _this.selectedCubeGroup.getChildAt(0);     //* get first option cube. 
        if (optCube.inputEnabled == true) //* if one is enabled, then remove events from all.
        {
            for (l = 0; l < _this.selectedOption_Denominator; l++) //* remove all its events once.
            {
                optCube = _this.selectedCubeGroup.getChildAt(l);
                optCube.input.enableDrag(false);
                optCube.events.onInputDown.removeAll();
                optCube.events.onDragUpdate.removeAll();
                optCube.events.onDragStop.removeAll();
                optCube.inputEnabled = false;
            }
        }

        if (_this.Array_Qncube.length < _this.Array_Optcube.length) {
            for (l = 0; l < _this.left_denominator; l++)   //* go till length of denominator of question.
            {
                //* enabling Qn cube events.
                qstCube = _this.QnCubeGroup.getChildAt(l);

                //* add all events to question cubes since it has to be enabled now.
                qstCube.inputEnabled = true;
                qstCube.input.useHandCursor = true;
                qstCube.input.enableDrag(true);
                qstCube.events.onDragUpdate.add(_this.Ver_Qst_dragUpdate, qstCube);
                qstCube.events.onDragStop.add(_this.Ver_Qst_dragStop, qstCube);
            }

        }
        else if (_this.Array_Qncube.length > _this.Array_Optcube.length) {
            for (l = 0; l < _this.selectedOption_Denominator; l++) {
                optCube = _this.selectedCubeGroup.getChildAt(l);
                //* add all events to question cubes.
                optCube.inputEnabled = true;
                optCube.input.useHandCursor = true;
                optCube.input.enableDrag(true);
                optCube.events.onDragUpdate.add(_this.Ver_Opt_dragUpdate, optCube);
                optCube.events.onDragStop.add(_this.Ver_Opt_dragStop, optCube);
            }
        }
        else if (_this.Array_Qncube.length == _this.Array_Optcube.length) {
            //            console.log( "reached equal length..stopping dragging.................");
            //            console.log(_this.Array_Optcube.length);
            //            console.log(_this.selectedCubeGroupCpy.getChildAt(0).x);
            _this.optionCube = false;
            _this.questionCube = false;
            //            console.log(_this.Array_Qncube.length);
            _this.QnCubeGroup.destroy();
            _this.selectedCubeGroup.destroy();

            Qst_drag_count = _this.Array_Qncube.length / _this.left_denominator;
            total_Qst_frame = Qst_drag_count * _this.left_numerator;

            opt_drag_count = _this.Array_Optcube.length / _this.selectedOption_Denominator;
            //            console.log(opt_drag_count);
            total_opt_frame = opt_drag_count * _this.selectedOption_Numerator;
            //            console.log(total_opt_frame);
            _this.giveShadeSound.play();
            for (let i = 0; i < _this.Array_Qncube.length - total_Qst_frame; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.QnCubeGroupCpy.getChildAt(i).frame = 0;
                });

            }
            for (let i = _this.Array_Qncube.length - total_Qst_frame; i < _this.Array_Qncube.length - 1; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.QnCubeGroupCpy.getChildAt(i).frame = 1;
                });
            }
            //            console.log(_this.Array_Optcube.length);           
            //            console.log((_this.Array_Optcube.length-1)-total_opt_frame);
            //            console.log(total_opt_frame);

            for (let i = 0; i < _this.Array_Optcube.length - total_opt_frame; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.optionCubeGroupCpy.getChildAt(i).frame = 0;
                });
            }
            for (let i = _this.Array_Optcube.length - 1; i >= _this.Array_Optcube.length - total_opt_frame; i--) {
                _this.time.events.add(50 * i, function () {
                    _this.optionCubeGroupCpy.getChildAt(i).frame = 1;
                });
            }

            // for(i=_this.Array_Qncube.length-(total_Qst_frame+1);i<_this.Array_Qncube.length-1;i++)
            // {
            //     console.log("hello");
            //     _this.optionCubeGroupCpy.getChildAt(i).frame = 1;
            // }

            _this.time.events.add(400, function () {
                _this.next_step();//thumsup to appear
            });
        }
    },


    generating_cubes: function (target) {
        //* Note: order of creating these groups is important. Lastly created cube will appear on top of other two
        //* create a group as a copy of selected group. This is for work space.
        _this.optionCubeGroupCpy = _this.add.group();

        //* create a group as a copy of selected group. This is for below the work place(below selected option cubes)
        _this.selectedCubeGroupCpy = _this.add.group();

        //* create the selected copy group which is visible belwo the work place (selected option cubes)
        _this.selectedCubeGroup = _this.add.group();

        if (_this.HzOrVertArray[_this.count1] == 1) {
            for (var i = 0; i < target; i++) {

                //* create a copy of the selected cube group here. it will sit behind selected group
                _this.optionCubeCpy = _this.add.sprite(_this.Option_Hz_X[i], _this.Option_Hz_Y, 'YB_Hz');
                _this.selectedCubeGroupCpy.addChild(_this.optionCubeCpy);

                //* add cube image for num with diff clr cube
                _this.optionCube = _this.add.sprite(_this.Option_Hz_X[i], _this.Option_Hz_Y, 'YB_Hz');
                _this.optionCube.name = "" + i;
                _this.selectedCubeGroup.addChild(_this.optionCube);
            }

            for (k = _this.selectedCubeGroup.length - 1; k >= target - _this.selectedOption_Numerator; k--) {
                //*add cube image for num with diff clr cube
                //console.log(_this.left_denominator);
                _this.selectedCubeGroup.getChildAt(k).frame = 1;

                _this.selectedCubeGroupCpy.getChildAt(k).frame = 1;  //* copy the frame for copy group also.
                //* add to questionCubeGroup                

            }

            //initially it will comes to work space here
        }
        else if (_this.HzOrVertArray[_this.count1] == 2) {
            //* vertical   
            for (var i = 0; i < target; i++) {

                //* create a copy of the selected cube group here. it will sit behind selected group
                _this.optionCubeCpy = _this.add.sprite(_this.Option_Ver_X, _this.Option_Ver_Y[i], 'YB_Ver');
                _this.selectedCubeGroupCpy.addChild(_this.optionCubeCpy);

                //* add cube image for num with diff clr cube
                _this.optionCube = _this.add.sprite(_this.Option_Ver_X, _this.Option_Ver_Y[i], 'YB_Ver');
                _this.optionCube.name = "" + i;
                _this.selectedCubeGroup.addChild(_this.optionCube);
            }

            for (k = _this.selectedCubeGroup.length - 1; k >= target - _this.selectedOption_Numerator; k--) {
                //*add cube image for num with diff clr cube
                //console.log(_this.left_denominator);
                _this.selectedCubeGroup.getChildAt(k).frame = 1;

                _this.selectedCubeGroupCpy.getChildAt(k).frame = 1;  //* copy the frame for copy group also.
                //* add to questionCubeGroup                

            }
        }
    },


    //* load all the initial screen elements based on the options chosen by randomizing function 
    LoadInitialScreen: function () {
        _this.smallBox = _this.add.image(759, 102, 'smallBox');
        _this.smallBox.scale.setTo(0.95, 0.9);
        _this.currentoptionIndx = 0;
        _this.objGroup = _this.add.group();
        if (_this.HzOrVertArray[_this.count1] == 1) {

            //_this.optionsGroup = _this.ad.group();

            _this.bigBox = _this.add.image(50, 200, 'bigBox');
            _this.Bg_fraction = _this.add.sprite(50, 110, 'fraction_Bg');
            _this.Bg_fraction.frame = 5;
            //_this.addQn_cubes_to_screen();  // add cubes according to question asked 
            //_this.show_drag_action();
            //_this.cubeEnable(_this.objGroup);
            // _this.displayOption()//* adding option the screen

            // //_this.voice_note() //* let us find equivalent fraction

            // console.log(_this.objGroup.length); 
            // _this.getFractionCombination();
            // _this.displayOption();
        }
        else if (_this.HzOrVertArray[_this.count1] == 2) {
            _this.bigBox = _this.add.image(275, 105, 'smallBox'); //250
            _this.bigBox.scale.setTo(1.3, 1.6);
            _this.Bg_fraction = _this.add.sprite(190, 415, 'fraction_Bg'); //165
            _this.Bg_fraction.frame = 5;
        }
        _this.addQn_cubes_to_screen();  // add cubes according to question asked
        _this.getFractionCombination();
        _this.displayOption();
    },

    addQn_cubes_to_screen: function () {
        //_this.Bg_fraction = _this.add.sprite(50,100,'fraction_Bg');
        _this.objGroup1 = _this.add.group();
        _this.objGroup2 = _this.add.group();
        _this.Question_numerator = _this.add.text(15, 40, _this.left_denominator);
        _this.Question_numerator.fill = '#FF0000';
        _this.Question_denominator = _this.add.text(15, 10, _this.left_numerator);
        _this.Question_denominator.fill = '#FF0000';
        _this.Bg_fraction.addChild(_this.Question_numerator);
        _this.Bg_fraction.addChild(_this.Question_denominator);
        //        console.log(_this.Question_numerator.font);
        //        console.log(_this.Question_numerator.fontSize);

        if (_this.HzOrVertArray[_this.count1] == 1) {
            _this.askedDenominators[_this.count1] = _this.Hz_Denominator;
            for (i = 0; i < _this.left_denominator; i++) {
                _this.Question_cube = _this.objGroup.create(_this.Question_Hz_X[i], _this.Question_Hz_Y, 'YG_Hz');
                _this.Question_cube1 = _this.objGroup1.create(_this.QnCubeDrag_Hz_X[i], _this.QnCubeDrag_Hz_y, 'YG_Hz');
                //_this.objGroup1.addChild(_this.objGroup);
                _this.Question_cube.frame = 0;

                //* add cube image for num with diff clr cube                                          
            }
            // console.log(_this.left_denominator);
            // console.log(_this.objGroup.length);
            for (k = _this.objGroup.length - 1; k >= _this.left_denominator - _this.left_numerator; k--) {
                //*add cube image for num with diff clr cube
                //console.log(_this.left_denominator);
                _this.objGroup.getChildAt(k).frame = 1;
                _this.objGroup1.getChildAt(k).frame = 1;
                //* add to questionCubeGroup                    
            }
        }
        else {
            //* vertical          
            _this.askedDenominators[_this.count1] = _this.Hz_Denominator;
            for (i = 0; i < _this.left_denominator; i++) {
                _this.Question_cube = _this.objGroup.create(_this.Question_Ver_X, _this.Question_Ver_Y[i], 'YG_Ver');
                _this.Question_cube1 = _this.objGroup1.create(_this.QnCubeDrag_Ver_X, _this.QnCubeDrag_Ver_Y[i], 'YG_Ver');
                //_this.objGroup1.addChild(_this.objGroup);
                _this.Question_cube.frame = 0;

                //* add cube image for num with diff clr cube                                          
            }
            // console.log(_this.left_denominator);
            // console.log(_this.objGroup.length);
            for (k = _this.objGroup.length - 1; k >= _this.left_denominator - _this.left_numerator; k--) {
                //*add cube image for num with diff clr cube
                //console.log(_this.left_denominator);
                _this.objGroup.getChildAt(k).frame = 1;
                _this.objGroup1.getChildAt(k).frame = 1;
                //* add to questionCubeGroup                    
            }
        }
        _this.show_drag_action(); //* counter tween to work space by the game 
        //*then enable counter to drag to work space

    },

    show_drag_action: function () {
        //*show drag action
        if (_this.HzOrVertArray[_this.count1] == 1) {
            _this.bigBox.addChild(_this.objGroup1);
            // console.log(_this.objGroup1.getChildAt(0).x);
            // console.log(_this.objGroup1.getChildAt(0).y);
            trayDragAction = _this.add.tween(_this.objGroup1);
            trayDragAction.to({ x: -40, y: 30 }, 500, 'Linear', true, 0);
            trayDragAction.start();
        }
        else {
            //_this.bigBox.addChild(_this.objGroup1);
            trayDragAction = _this.add.tween(_this.objGroup1);
            trayDragAction.to({ x: 110, y: 1 }, 500, 'Linear', true, 0);
            trayDragAction.start();
        }

        //_this.objGroup1.destroy();

    },

    enable_options: function () {
        _this.nextOptionSound.play();
        _this.Thumbs_Up.visible = false;
        _this.Thumbs_Up.frame = 0;
        _this.Thums_Down.visible = false;
        _this.Thumbs_Up.frame = 0;

        _this.SelectedCube = true;
        currentOption = _this.optionsGroup.getChildAt(_this.currentoptionIndx);
        _this.optionsGroup.getChildAt(_this.currentoptionIndx).frame = 2;
        //        console.log(currentOption.getChildAt(1).name);
        //        console.log(currentOption.getChildAt(0).name);
        currentOption.inputEnabled = true;
        currentOption.input.useHandCursor = true;
        currentOption.events.onInputDown.add(_this.optionclicked, currentOption);
    },

    QnCube: function () {
        _this.add.sprite(200, 10, 'YG_Hz');
    },


    next_step: function () {
        //_this.Voice_note2() //*Are these Equivalent fractions?
        //        console.log("calling thums up down");
        //        console.log(_this.Denominator);
        //        console.log(_this.Numerator);
        //        console.log()
        if (_this.currentoptionIndx == 0 && _this.count1 == 0) {
            _this.voiceNote2();
        }
        _this.time.events.add(500, function () {
            _this.qn_flag = 2;
            _this.appear_thumbs_upDown();
        });
    },

    appear_thumbs_upDown: function () {
        _this.Thumbs_Up.visible = true;
        _this.Thumbs_Up.frame = 0;
        _this.Thums_Down.visible = true;
        _this.Thums_Down.frame = 0;

        _this.Thumbs_Up.inputEnabled = true;
        _this.Thumbs_Up.input.useHandCursor = true;
        _this.Thumbs_Up.events.onInputDown.add(_this.ThumbsUpClicked, _this.Thumbs_Up);

        _this.Thums_Down.inputEnabled = true;
        _this.Thums_Down.input.useHandCursor = true;
        _this.Thums_Down.events.onInputDown.add(_this.ThumbsDownClicked, _this.Thums_Down);
    },

    ThumbsUpClicked: function (target) {
        //       console.log("thumsupclicked fn");
        //_this.qn_flag =-1; 
        target.frame = 1;
        //_this.Thums_Down.frame = 0;
        _this.Thums_Down.input.useHandCursor = false;


        if (_this.ThumbsUpClicked_evaluation()) {
            //            console.log("thumsupclicked fn true"); 
            _this.optionsGroup.getChildAt(_this.currentoptionIndx).frame = 4;

            _this.optionsGroup.getChildAt(_this.currentoptionIndx).getChildAt(0).fill = '#FFFFFF';
            _this.optionsGroup.getChildAt(_this.currentoptionIndx).getChildAt(1).fill = '#FFFFFF';

            _this.store_equi_deno[_this.currentoptionIndx] = _this.optionsGroup.getChildAt(_this.currentoptionIndx).getChildAt(0).name;
            _this.store_equi_num[_this.currentoptionIndx] = _this.optionsGroup.getChildAt(_this.currentoptionIndx).getChildAt(1).name;
            _this.equi_count++;
            //            console.log(_this.optionsGroup.getChildAt(_this.currentoptionIndx).getChildAt(0).name);
            //            console.log(_this.optionsGroup.getChildAt(_this.currentoptionIndx).getChildAt(1).name);
            //            console.log(_this.store_equi_deno.length);

            _this.Thums_Down.inputEnabled = false;
            _this.Thumbs_Up.inputEnabled = false;
            _this.currentoptionIndx++;
            //            console.log(_this.currentoptionIndx );
            if (_this.currentoptionIndx == 4) {
                _this.qn_flag = 3;
                //                console.log("here");
                _this.Array_Optcube = [];
                _this.Array_Qncube = [];
                //_this.QnCubeGroup.destroy();
                _this.optGroup.destroy();
                _this.QnGroup.destroy();
                _this.ansCheckArr = ['n', 'n', 'n', 'n'];
                _this.Thumbs_Up.frame = 0;
                _this.Thums_Down.frame = 0;
                _this.Thumbs_Up.visible = false;
                _this.Thums_Down.visible = false;
                _this.selectedCubeGroupCpy.destroy();
                _this.selectedFraction.destroy();
                if (_this.HzOrVertArray[_this.count1] == 1) {
                    _this.optionCubeGroupCpy.destroy();
                    _this.QnCubeGroupCpy.destroy();
                    //_this.selectedCubeGroupCpy.destroy();

                    //_this.selectedCubeGroup.destroy();
                    //_this.selectedFraction.destroy();
                    //_this.ws_optioncubeGroup.destroy();
                    //_this.cubeGroupCopy.destroy();

                    _this.addNumberPad();
                    _this.before_appear_numpad();
                    //_this.addNumberPad();
                }
                else {
                    _this.optionCubeGroupCpy.y -= 40;
                    _this.QnCubeGroupCpy.y -= 40;
                    _this.bigBox.y -= 50;
                    _this.Bg_fraction.y -= 40;
                    _this.objGroup.y -= 40;
                    //                    console.log("here");
                    _this.addNumberPad_Ver();
                    _this.Ver_before_appear_numpad();
                }

            }
            else {

                _this.qn_flag = 1;
                _this.optionCubeGroupCpy.destroy();
                _this.QnCubeGroupCpy.destroy();
                _this.selectedCubeGroupCpy.destroy();

                //_this.selectedCubeGroup.destroy();
                _this.selectedFraction.destroy();
                //_this.ws_optioncubeGroup.destroy();
                //_this.cubeGroupCopy.destroy();
                _this.Array_Optcube = [];
                _this.Array_Qncube = [];
                //_this.QnCubeGroup.destroy();
                _this.create_Qncubes();
                _this.optGroup.destroy();
                _this.QnGroup.destroy();

                _this.time.events.add(750, _this.enable_options);
            }

        }
        else {
            //            console.log("thumsupclicked fn false");
            _this.wrongSound.play();
            _this.qn_flag = 1;
            _this.optionsGroup.getChildAt(_this.currentoptionIndx).frame = 1;

            _this.optionCubeGroupCpy.destroy();
            _this.QnCubeGroupCpy.destroy();
            _this.selectedCubeGroupCpy.destroy();

            // _this.selectedCubeGroup.destroy();
            _this.selectedFraction.destroy();
            //_this.ws_optioncubeGroup.destroy();
            //_this.cubeGroupCopy.destroy();
            _this.Array_Optcube = [];
            _this.Array_Qncube = [];
            //_this.QnCubeGroup.destroy();
            _this.create_Qncubes();

            _this.QnGroup.destroy();
            _this.optGroup.destroy();
            _this.time.events.add(750, _this.enable_options);
        }
    },

    ThumbsUpClicked_evaluation: function () {
        for (i = 0; i < _this.equi_denominatorArray.length; i++) {
            //            console.log("hi");
            //            console.log(_this.equi_denominatorArray[i]);
            //            console.log(_this.selectedOption_Denominator);
            //            console.log(_this.equi_numeratorArray[i]);
            //            console.log(_this.selectedOption_Numerator);
            //            console.log(_this.selectedOption_Denominator);
            // _this.Numerator = _this.selectedOption_Numerator;

            if (_this.selectedOption_Denominator == _this.equi_denominatorArray[i] && _this.selectedOption_Numerator == _this.equi_numeratorArray[i]) {
                //                console.log("hi");
                i = _this.equi_denominatorArray.length;
                return true;
            }
        }
    },

    ThumbsDownClicked: function (target) {
        target.frame = 1;
        //_this.qn_flag =-1; 
        _this.Thumbs_Up.inputEnabled = false;
        _this.Thums_Down.inputEnabled = false;
        //_this.currentoptionIndx++
        //_this.enable_options();
        //        console.log("thums down clicked");
        if (_this.Thums_Down_evaluation()) {
            _this.optionsGroup.getChildAt(_this.currentoptionIndx).frame = 1;
            _this.optionsGroup.getChildAt(_this.currentoptionIndx).getChildAt(0).fill = '#808080';
            _this.optionsGroup.getChildAt(_this.currentoptionIndx).getChildAt(1).fill = '#808080';
            _this.currentoptionIndx++;
            //            console.log(_this.currentoptionIndx );
            if (_this.currentoptionIndx == 4) {
                _this.qn_flag = 3;
                //                console.log("here");
                _this.QnGroup.destroy();
                _this.optGroup.destroy();
                _this.ansCheckArr = ['n', 'n', 'n', 'n'];
                _this.Thumbs_Up.frame = 0;
                _this.Thums_Down.frame = 0;

                _this.Thumbs_Up.visible = false;
                _this.Thums_Down.visible = false;
                _this.selectedCubeGroupCpy.destroy();
                _this.selectedFraction.destroy();
                if (_this.HzOrVertArray[_this.count1] == 1) {
                    _this.optionCubeGroupCpy.destroy();
                    _this.QnCubeGroupCpy.destroy();


                    //_this.selectedCubeGroup.destroy();

                    //_this.ws_optioncubeGroup.destroy();
                    //_this.cubeGroupCopy.destroy();
                    _this.Array_Optcube = [];
                    _this.Array_Qncube = [];
                    //_this.QnCubeGroup.destroy();

                    _this.addNumberPad();
                    _this.before_appear_numpad();
                }
                else if (_this.HzOrVertArray[_this.count1] == 2) {
                    //                    console.log("here");
                    _this.optionCubeGroupCpy.y -= 40;
                    _this.QnCubeGroupCpy.y -= 40;
                    _this.bigBox.y -= 50;
                    _this.Bg_fraction.y -= 40;
                    _this.objGroup.y -= 40;
                    //                    console.log("here");
                    _this.addNumberPad_Ver();
                    //_this.addNumberPad();
                    _this.Ver_before_appear_numpad();
                }

                //_this.addNumberPad();
            }
            else {
                _this.qn_flag = 1;
                _this.Thums_Down.inputEnabled = false;

                _this.optionCubeGroupCpy.destroy();
                _this.QnCubeGroupCpy.destroy();
                _this.selectedCubeGroupCpy.destroy();

                //_this.selectedCubeGroup.destroy();
                _this.selectedFraction.destroy();
                //_this.ws_optioncubeGroup.destroy();
                //_this.cubeGroupCopy.destroy();
                _this.Array_Optcube = [];
                _this.Array_Qncube = [];
                //_this.QnCubeGroup.destroy();
                _this.create_Qncubes();
                _this.QnGroup.destroy();
                _this.optGroup.destroy();
                _this.time.events.add(750, _this.enable_options);
            }
        }
        else {
            _this.optionsGroup.getChildAt(_this.currentoptionIndx).frame = 2;
            _this.wrongSound.play();
            _this.qn_flag = 1;
            _this.optionCubeGroupCpy.destroy();
            _this.QnCubeGroupCpy.destroy();
            _this.selectedCubeGroupCpy.destroy();

            //_this.selectedCubeGroup.destroy();
            _this.selectedFraction.destroy();
            //_this.ws_optioncubeGroup.destroy();
            //_this.cubeGroupCopy.destroy();
            _this.Array_Optcube = [];
            _this.Array_Qncube = [];
            //_this.QnCubeGroup.destroy();
            _this.create_Qncubes();
            _this.QnGroup.destroy();
            _this.optGroup.destroy();
            _this.time.events.add(750, _this.enable_options);

        }
    },

    Thums_Down_evaluation: function () {
        // _this.Nonequi_numeratorArray[i]
        //       console.log(_this.Nonequi_denominatorArray.length);
        for (i = 0; i < _this.Nonequi_denominatorArray.length; i++) {

            //            console.log(_this.Nonequi_numeratorArray[i]);
            //            console.log(_this.Nonequi_denominatorArray[i]);
            // console.log(_this.selectedOption_Denominator);
            // console.log(_this.Nonequi_denominator[i]);   
            // console.log(_this.selectedOption_Numerator);
            // console.log(_this.Nonequi_numeratorArray[i]);

            if (_this.selectedOption_Denominator == _this.Nonequi_denominatorArray[i] && _this.selectedOption_Numerator == _this.Nonequi_numeratorArray[i]) {
                //                console.log(_this.selectedOption_Denominator);
                //                console.log(_this.Nonequi_denominatorArray[i]);
                //                console.log(_this.selectedOption_Numerator);
                //                console.log(_this.Nonequi_numeratorArray[i]);
                //                    console.log("hi true");
                //i = _this.equi_denominatorArray.length;
                return true;
            }
        }
    },

    getFractionCombination: function () {
        var j = 0;
        var k = 3;
        _this.numberBoxPlacing_deno = [];
        _this.numberBoxPlacing_num = [];
        _this.fraction_Combination_Array = _this.shuffle(_this.fraction_Combination_Array);
        for (var i = 0; i < 4; i++) {
            if (_this.fraction_Combination_Array[i] == 0) {
                _this.questionNumber_deno = _this.equi_denominatorArray[j];
                _this.questionNumber_num = _this.equi_numeratorArray[j];
                j++;
            }
            else if (_this.fraction_Combination_Array[i] == 1) {
                _this.questionNumber_deno = _this.Nonequi_denominatorArray[k];
                _this.questionNumber_num = _this.Nonequi_numeratorArray[k];
                k--;
            }
            _this.numberBoxPlacing_deno[i] = _this.questionNumber_deno;
            _this.numberBoxPlacing_num[i] = _this.questionNumber_num;

        }
    },

    before_appear_numpad: function () {
        //        console.log("before appear number pad: Equi Deno length: ");
        //        console.log(_this.store_equi_deno.length);

        _this.numpad = false;
        _this.enterFractionGroup = _this.add.group();
        _this.fractionBoxDenoGroup = _this.add.group();
        _this.fractionBoxNumGroup = _this.add.group();

        _this.equalsGroup = _this.add.group();
        _this.BlueLineGroup = _this.add.group();
        _this.x1 = 205;
        _this.y1 = 249;

        _this.x2 = 210;//216;
        _this.y2 = 255;

        _this.x3 = 210;
        _this.y3 = 295;

        _this.x4 = 170;
        _this.y4 = 275;


        _this.Bg_fraction1 = _this.add.sprite(100, 250, 'fraction_Bg');
        _this.Question_numerator = _this.add.text(15, 40, _this.left_denominator);
        _this.Question_denominator = _this.add.text(15, 10, _this.left_numerator);
        _this.Bg_fraction1.addChild(_this.Question_numerator);
        _this.Bg_fraction1.addChild(_this.Question_denominator);
        _this.Question_numerator.fill = '#FF0000';
        _this.Question_denominator.fill = '#FF0000';

        for (i = 0; i < _this.store_equi_deno.length; i++) {
            _this.enterFraction = _this.add.sprite(_this.x1, _this.y1, 'fraction_Bg');
            _this.enterFraction.frame = 0;
            //_this.enterFraction.scale.setTo(0.6);
            _this.enterFraction.visible = false;
            _this.enterFractionGroup.addChild(_this.enterFraction);

            _this.enterFractionBox1 = _this.add.sprite(_this.x2, _this.y2, 'newBox');
            _this.enterFractionBox1.scale.setTo(0.8);
            _this.enterFractionBox1.visible = false;
            _this.fractionBoxNumGroup.addChild(_this.enterFractionBox1);

            _this.BlueLine = _this.add.image(_this.x3 + 2, _this.y3 - 2, 'blueLine');
            _this.BlueLine.visible = false;
            _this.BlueLineGroup.addChild(_this.BlueLine);

            _this.enterFractionBox2 = _this.add.sprite(_this.x3, _this.y3, 'newBox');
            _this.enterFractionBox2.scale.setTo(0.8);
            _this.enterFractionBox2.visible = false;
            _this.fractionBoxDenoGroup.addChild(_this.enterFractionBox2);

            _this.equals = _this.add.text(_this.x4, _this.y4, "=");
            _this.equals.fill = '#FF0000';
            _this.equals.visible = false;
            _this.equalsGroup.addChild(_this.equals);

            _this.x1 += 109;
            _this.x2 += 110;
            _this.x3 += 110;
            _this.x4 += 108;
        }

        // _this.Bg_fraction.addChild(_this.equals);        
        // _this.Thumbs_Up.visible = false;        
        // _this.Thums_Down.visible = false;
        if (_this.count1 == 0) {
            _this.voiceNote3();
        }
        _this.time.events.add(1000, function () {
            _this.qn_flag = 3;
            _this.enableBoxes();
        });

        // _this.smallBox.y = _this.smallBox.y+30;        
    },

    Ver_before_appear_numpad: function () {
        _this.equals = _this.add.text(263, 400, "=");
        _this.equals.fill = '#FF0000';
        _this.equals.visible = true;

        _this.enterFraction = _this.add.sprite(295, 374, 'fraction_Bg');
        _this.enterFraction.frame = 0;
        // _this.enterFraction.scale.setTo(0.6);
        _this.enterFraction.visible = false;


        _this.enterFractionBox1 = _this.add.sprite(307, 379, 'newBox');
        _this.enterFractionBox1.scale.setTo(0.8);
        _this.enterFractionBox1.visible = true;
        //_this.fractionBoxNumGroup.addChild(_this.enterFractionBox1);
        _this.BlueLine = _this.add.image(309, 416, 'blueLine');

        _this.enterFractionBox2 = _this.add.sprite(307, 418, 'newBox');
        _this.enterFractionBox2.scale.setTo(0.8);
        _this.enterFractionBox2.visible = true;
        //_this.fractionBoxDenoGroup.addChild(_this.enterFractionBox2);
        //_this.Ver_enableBoxes();
        if (_this.count1 == 0) {
            _this.voiceNote3();
        }
        _this.time.events.add(1000, function () {
            _this.qn_flag = 3;
            _this.Ver_enableBoxes();
        });
    },

    Ver_enableBoxes: function () {
        //        console.log(_this.fractionBoxCount);
        _this.denominator = undefined;
        _this.numerator = true;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.enterFractionBox1.frame = 1;
        _this.enterFractionBox2.frame = 0;

        //_this.enterFractionBox1.visible = true;
        _this.enterFractionBox1.inputEnabled = true;
        _this.enterFractionBox1.input.useHandCursor = true;
        _this.enterFractionBox1.events.onInputDown.add(function () {
            _this.denominator = false;
            _this.numerator = true;

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;
            //_this.qn_flag=-1;
        });

        _this.enterFractionBox2.visible = true;
        _this.enterFractionBox2.inputEnabled = true;
        _this.enterFractionBox2.input.useHandCursor = true;
        _this.enterFractionBox2.events.onInputDown.add(function () {
            _this.denominator = true;
            _this.numerator = false;

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';

            _this.enterFractionBox2.frame = 1;
            _this.enterFractionBox1.frame = 0;
            //_this.qn_flag=-1;

        });
    },

    enableBoxes: function () {
        //        console.log(_this.fractionBoxCount);
        _this.denominator = undefined;
        _this.numerator = true;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        //_this.enterFractionGroup.getChildAt(_this.fractionBoxCount).visible = true;
        _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).frame = 1;
        _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).frame = 0;
        _this.equalsGroup.getChildAt(_this.fractionBoxCount).visible = true;
        // _this.enterFraction.getChildAt(_this.fractionBoxCount).visible = true;
        // console.log(_this.enterFraction.getChildAt(_this.fractionBoxCount).visible);

        _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).visible = true;
        _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).inputEnabled = true;
        _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).input.useHandCursor = true;
        _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).events.onInputDown.add(function () {
            _this.denominator = false;
            _this.numerator = true;
            //_this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount);

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).frame = 1;
            _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).frame = 0;
            //_this.qn_flag=-1;
            // if(_this.numpad== false)
            // {
            //     _this.addNumberPad();
            // }

        });
        _this.BlueLineGroup.getChildAt(_this.fractionBoxCount).visible = true;
        _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).visible = true;
        _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).inputEnabled = true;
        _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).input.useHandCursor = true;
        _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).events.onInputDown.add(function () {
            _this.denominator = true;
            _this.numerator = false;

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';

            _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).frame = 0;
            _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).frame = 1;
            //_this.qn_flag=-1;            
        });
    },

    //* here create four option and make it as clickable
    displayOption: function () {
        _this.optionsGroup = _this.add.group();
        //_this.fractionNumGroup = _this.add.group();
        var row = 0;
        var col = 0;
        // var rx1 = 15;
        // var cx1 = 25;
        for (i = 0; i < 4; i++) {
            _this.optionbox = _this.add.sprite(_this.optionX[row], _this.optionY[col], 'fraction_Bg');
            _this.optionbox.scale.setTo(0.8);
            _this.optionsGroup.addChild(_this.optionbox);
            //            console.log("row" + row);
            //            console.log("col"+col);

            //            console.log("row" + row+ _this.optionX[row]);
            //            console.log("col"+col+ _this.optionY[col]);

            //_this.smallBox.addChild(_this.optionsGroup);   
            //            console.log(_this.numberBoxPlacing_deno[i]);
            //            console.log(_this.numberBoxPlacing_num[i]);
            if (_this.numberBoxPlacing_deno[i] < 10) {
                //                console.log(_this.numberBoxPlacing_deno[i]);
                //                console.log("lesser deno");
                //                console.log("row"+row);
                //                console.log("col"+col);
                //                console.log(_this.numberBoxPlacing_deno[i]);
                _this.fractiontext_Deno = _this.add.text(_this.optionNumX1[i], _this.optionNumY1[i], _this.numberBoxPlacing_deno[i]);
                //                console.log(_this.fractiontext_Deno.scale);
                _this.fractiontext_Deno.scale.setTo(1.1, 1.1);
                //                console.log(_this.fractiontext_Deno.font);
                //                console.log(_this.fractiontext_Deno.fontSize);
                _this.fractiontext_Deno.name = _this.numberBoxPlacing_deno[i];
                _this.optionbox.addChild(_this.fractiontext_Deno);

            }
            else if (_this.numberBoxPlacing_deno[i] >= 10) {
                //                console.log("greater deno");
                //                console.log("row"+row);
                //                console.log("col"+col);
                //                console.log(_this.numberBoxPlacing_deno[i]);
                _this.fractiontext_Deno = _this.add.text(_this.optionNumX3[i], _this.optionNumY3[i], _this.numberBoxPlacing_deno[i]);
                _this.fractiontext_Deno.scale.setTo(1.1, 1.1);
                _this.fractiontext_Deno.name = _this.numberBoxPlacing_deno[i];
                _this.optionbox.addChild(_this.fractiontext_Deno);
            }
            if (_this.numberBoxPlacing_num[i] < 10) {
                //                console.log("lesser numerator");
                //                console.log("row"+row);
                //                console.log("col"+col);
                //                console.log(_this.numberBoxPlacing_num[i]);
                _this.fractiontext_Num = _this.add.text(_this.optionNumX2[i], _this.optionNumY2[i], _this.numberBoxPlacing_num[i]);  //_this.optionNumY1[col]
                _this.fractiontext_Num.scale.setTo(1.1, 1.1);
                _this.fractiontext_Num.name = _this.numberBoxPlacing_num[i];
                _this.optionbox.addChild(_this.fractiontext_Num);
            }

            else if (_this.numberBoxPlacing_num[i] >= 10) {
                //                console.log("greater numerator");
                _this.fractiontext_Num = _this.add.text(_this.optionNumX4[i], _this.optionNumY4[i], _this.numberBoxPlacing_num[i]);
                _this.fractiontext_Num.scale.setTo(1.1, 1.1);
                _this.fractiontext_Num.name = _this.numberBoxPlacing_num[i];
                _this.optionbox.addChild(_this.fractiontext_Num);
                //                console.log(_this.optionbox.getChildAt(0).name);
            }

            _this.fractiontext_Deno.align = 'center';
            _this.fractiontext_Deno.fill = '#65B4C3';

            _this.fractiontext_Num.align = 'center';
            _this.fractiontext_Num.fill = '#65B4C3';


            //_this.fractionNumGroup.addChild(_this.factorTxt);                         
            row += 1;

            if (row >= 2) {
                row = 0;
                col = col + 1;

            }

        }
    },


    //* shuffle the Horizontal or Vertical representation array for selecting one randomly.
    //* decing numerator and denominator for vetical and hozizontal
    randomizing_elements: function () {
        if (_this.HzOrVertArray[_this.count1] == 1) {
            _this.Equivalent_NonEquivalentArray = _this.shuffle(_this.Equivalent_NonEquivalentArray);
        }
        else if (_this.HzOrVertArray[_this.count1] == 2) {
            _this.elementArray1_Vertical = _this.shuffle(_this.elementArray1_Vertical);
        }
    },

    //*function to decide how many are equivalent fraction and how many are non equivalent fraction
    Decide_Fractions: function () {
        var repeat_flag = false;

        if (_this.Equivalent_NonEquivalentArray[0] == 1) //* means 0 1 1 1 0-equivalent 1-non equivalent
        {
            //            console.log("1 equalent");
            _this.fraction_Combination_Array = [0, 1, 1, 1];

            //* search the already asked instances. if asked is true, change the element.
            repeat_flag = _this.search_asked_instance(_this.elementArray1[_this.count1]);

            if (repeat_flag == true) {
                _this.gotoEachinstance(_this.elementArray1[_this.count1 + 1]);
            }
            else {
                _this.gotoEachinstance(_this.elementArray1[_this.count1]);
            }
            //            console.log("which num is passing: "+_this.elementArray1[_this.count1]);             
        }
        else if (_this.Equivalent_NonEquivalentArray[0] == 2) //0 0 1 1
        {
            //            console.log("2 equalent");
            _this.fraction_Combination_Array = [0, 0, 1, 1];
            //            console.log("which num is passing: "+_this.elementArray2[_this.count1]);

            //* search the already asked instances. if asked is true, change the element.
            repeat_flag = _this.search_asked_instance(_this.elementArray2[_this.count1]);

            if (repeat_flag == true) {
                _this.gotoEachinstance(_this.elementArray2[_this.count1 + 1]);
            }
            else {
                _this.gotoEachinstance(_this.elementArray2[_this.count1]);
            }

        }
        else if (_this.Equivalent_NonEquivalentArray[0] == 3) //0 0 0 1
        {
            //            console.log("3 equalent");
            _this.fraction_Combination_Array = [0, 0, 0, 1];
            //            console.log("which num is passing: "+_this.elementArray3[_this.count1]);

            //* search the already asked instances. if asked is true, change the element.
            repeat_flag = _this.search_asked_instance(_this.elementArray3[_this.count1]);

            if (repeat_flag == true) {
                _this.gotoEachinstance(_this.elementArray3[_this.count1 + 1]);
            }
            else {
                _this.gotoEachinstance(_this.elementArray3[_this.count1]);
            }

        }
        else                                            // 0 0 0 0
        {
            //            console.log("4 equalent");
            _this.fraction_Combination_Array = [0, 0, 0, 0];
            //            console.log("which num is passing: "+_this.elementArray4[0]);
            var tempidx = _this.count1; //* use tempidx to point to next element in elementArray4

            if (tempidx > _this.elementArray4.length - 1) tempidx = 0;  //* use tempidx to point to next element in elementArray4
            //* if tempidx is greater than arraylength of elementArray4, then reset it to zero.

            //* search the already asked instances. if asked is true, change the element to the next one.
            repeat_flag = _this.search_asked_instance(_this.elementArray4[tempidx]);

            if (repeat_flag == true) {
                if (tempidx == _this.elementArray4.length - 1) //* if its already last element in array4, then reset it to zero.
                {
                    _this.gotoEachinstance(_this.elementArray4[0]); // cannot go to 4, reset it back to zero
                }
                else {
                    _this.gotoEachinstance(_this.elementArray4[tempidx + 1]);
                }
            }
            else {
                _this.gotoEachinstance(_this.elementArray4[tempidx]);
            }
        }
    },

    //* search if the passed instance of gotoeach instance function is already asked.
    search_asked_instance(search_element) {
        for (i = 0; i < _this.count1; i++) {
            //            console.log("search array: asked:i:search: " + _this.asked_instance[i] + " " + i + " " + search_elementArray);

            if (_this.asked_instance[i] == search_element) {
                return true;
            }
        }
        return false;
    },

    Decide_Fractions_Vertical: function () {
        // if(_this.Equivalent_NonEquivalentArray[0]==1) //* means 0 1 1 1 0-equivalent 1-non equivalent
        // {
        //            console.log("1 equalent");
        _this.fraction_Combination_Array = [0, 1, 1, 1];
        _this.gotoEachinstance_Vertical(_this.elementArray1_Vertical[0]);
        //            console.log("which num is passing: "+_this.elementArray1_Vertical[0]);             
        //}
    },

    Decide_Nonequi_Fractions: function () {
        //_this.fraction_Combination_Array = _this.shuffle(_this.fraction_Combination_Array);
        _this.Nonequi_denominator = _this.shuffle(_this.Nonequi_denominator);
        _this.indx = 0;
        _this.Nonequi_numeratorArray = [];
        _this.Nonequi_denominatorArray = [];

        for (i = 0; i < 4; i++) {
            if (_this.fraction_Combination_Array[i] == 1) {
                //                console.log(_this.indx);
                _this.Nonequi_denominatorArray[i] = _this.Nonequi_denominator[_this.indx];
                //console.log(_this.Nonequi_denominator[i]);
                _this.Nonequi_numerator = Math.floor(Math.random() * ((_this.Nonequi_denominatorArray[i] - 1) - 1 + 1)) + 1;
                //                console.log(_this.Nonequi_numerator);
                //                console.log(_this.left_numerator);

                //                console.log(_this.Nonequi_denominatorArray[i]);
                //                console.log(_this.left_denominator);

                while ((_this.Nonequi_numerator == _this.left_numerator && _this.Nonequi_denominatorArray[i] == _this.left_denominator) || _this.Check_Equifraction(i)) {
                    //                    console.log("while loop");
                    _this.indx++;
                    if (_this.indx >= _this.Nonequi_denominator.length) {
                        _this.indx = 0;

                    }
                    //_this.Nonequi_denominator = _this.shuffle(_this.Nonequi_denominator);
                    _this.Nonequi_denominatorArray[i] = _this.Nonequi_denominator[_this.indx];
                    _this.Nonequi_numerator = Math.floor(Math.random() * ((_this.Nonequi_denominatorArray[i] - 1) - 1 + 1)) + 1;
                }
                _this.Nonequi_numeratorArray[i] = _this.Nonequi_numerator;
                //console.log(_this.Nonequi_numeratorArray[i]);
                _this.indx++;
                if (_this.indx >= _this.Nonequi_denominator.length) {
                    _this.indx = 0;

                }
            }
        }

        for (i = 0; i < 4; i++) {
            if (_this.fraction_Combination_Array[i] == 1) {
                //                console.log("non equi fraction  :"+_this.Nonequi_numeratorArray[i]+"/" +_this.Nonequi_denominatorArray[i]);
            }

            //console.log("non equi fraction numerators :"+_this.Non_equi_numeratorArray[i]);
        }
        // _this.getFractionCombination();
    },

    Check_Equifraction: function (i) {
        //        console.log("check equi fraction");
        //        console.log(_this.equi_numeratorArray.length);
        //* check in a loop if any of the equi fractions is equal to non-equi fraction generated now.
        for (k = 0; k < _this.equi_numeratorArray.length; k++) {
            //            console.log("check equi fraction");
            //            console.log(k);
            //            console.log(_this.Nonequi_numeratorArray.length);
            //            console.log(_this.Nonequi_numerator);
            //            console.log(_this.equi_numeratorArray[k]);
            //            console.log(_this.Nonequi_denominatorArray[i]);
            //            console.log(_this.equi_denominatorArray[k]);
            //* if equi and non-equi fractions match, then return true;
            if (_this.Nonequi_numerator == _this.equi_numeratorArray[k] && _this.Nonequi_denominatorArray[i] == _this.equi_denominatorArray[k]) {
                //                console.log("true  ");
                return true;
            }
        }
        //* if it completes the loop, then none of equi fractions is equal to what non-equi fractions got generated now.
        return false;
    },

    Ver_Decide_Nonequi_Fractions: function () {
        //_this.fraction_Combination_Array = _this.shuffle(_this.fraction_Combination_Array);
        _this.indexArray = _this.shuffle(_this.indexArray);
        _this.Nonequi_numeratorArray = []
        _this.Nonequi_denominatorArray = []
        var j = 0;
        for (i = 0; i < 4; i++) {
            if (_this.fraction_Combination_Array[i] == 1) {
                _this.Nonequi_numeratorArray[i] = _this.Nonequi_numerator[_this.indexArray[j]];
                _this.Nonequi_denominatorArray[i] = _this.Nonequi_denominator[_this.indexArray[j]];
                j++;
            }
        }
        var k = 0;
        for (i = 0; i < 4; i++) {
            if (_this.fraction_Combination_Array[i] == 1) {
                //                console.log("non equi fraction  :"+_this.Nonequi_numeratorArray[i]+"/" +_this.Nonequi_denominatorArray[i]);
                k++;
            }

            //console.log("non equi fraction numerators :"+_this.Non_equi_numeratorArray[i]);
        }

    },

    //* here we can go each instance they given is design 
    gotoEachinstance: function (target) {

        _this.asked_instance[_this.count1] = target;
        //        console.log("asked array: " + _this.asked_instance + ":" + _this.count1);
        switch (target) {
            case 1: _this.left_denominator = 2;
                _this.left_numerator = 1;

                _this.equi_denominatorArray = [4, 6, 8, 10, 12, 14, 16];
                _this.equi_numeratorArray = [2, 3, 4, 5, 6, 7, 8];

                _this.Nonequi_denominator = [3, 4, 5, 6, 7, 8, 10, 12, 14, 16];
                break;
            case 2: _this.left_denominator = 3;
                _this.left_numerator = 1;

                _this.equi_denominatorArray = [6, 9, 12, 15];
                _this.equi_numeratorArray = [2, 3, 4, 5];
                _this.Nonequi_denominator = [2, 3, 4, 5, 6, 9, 12, 15];

                break;
            case 3: _this.left_denominator = 3;
                _this.left_numerator = 2;

                _this.equi_denominatorArray = [6, 9, 12, 15];
                _this.equi_numeratorArray = [4, 6, 8, 10];
                _this.Nonequi_denominator = [2, 3, 4, 5, 6, 9, 12, 15];

                break;
            case 4: _this.left_denominator = 4;
                _this.left_numerator = 1;

                _this.equi_denominatorArray = [8, 12, 16];
                _this.equi_numeratorArray = [2, 3, 4];

                _this.Nonequi_denominator = [2, 3, 4, 6, 8, 12, 16];

                break;
            case 5: _this.left_denominator = 4;
                _this.left_numerator = 2;

                _this.equi_denominatorArray = [2, 8, 6, 12, 16];
                _this.equi_numeratorArray = [1, 4, 3, 6, 8];
                _this.Nonequi_denominator = [2, 3, 4, 6, 8, 12, 16];

                break;
            case 6: _this.left_denominator = 4;
                _this.left_numerator = 3;

                _this.equi_denominatorArray = [8, 12, 16];
                _this.equi_numeratorArray = [6, 9, 12];
                _this.Nonequi_denominator = [2, 3, 4, 6, 8, 12, 16];

                break;
            case 7: _this.left_denominator = 5;
                _this.left_numerator = 1;

                _this.equi_denominatorArray = [10, 15];
                _this.equi_numeratorArray = [2, 3];
                _this.Nonequi_denominator = [2, 3, 5, 10, 15];

                break;
            case 8: _this.left_denominator = 5;
                _this.left_numerator = 2;

                _this.equi_denominatorArray = [10, 15];
                _this.equi_numeratorArray = [4, 6];
                _this.Nonequi_denominator = [2, 3, 5, 10, 15];

                break;
            case 9: _this.left_denominator = 5;
                _this.left_numerator = 3;

                _this.equi_denominatorArray = [10, 15];
                _this.equi_numeratorArray = [6, 9];
                _this.Nonequi_denominator = [2, 3, 5, 10, 15];

                break;
            case 10: _this.left_denominator = 5;
                _this.left_numerator = 4;
                _this.equi_denominatorArray = [10, 15];
                _this.equi_numeratorArray = [8, 12];
                _this.Nonequi_denominator = [2, 3, 5, 10, 15];

                break;
            case 11: _this.left_denominator = 6;
                _this.left_numerator = 1;

                _this.equi_denominatorArray = [12];
                _this.equi_numeratorArray = [2];
                _this.Nonequi_denominator = [2, 3, 4, 6, 12];

                break;
            case 12: _this.left_denominator = 6;
                _this.left_numerator = 2;

                _this.equi_denominatorArray = [3, 12];
                _this.equi_numeratorArray = [1, 4];
                _this.Nonequi_denominator = [2, 3, 4, 6, 12];

                break;
            case 13: _this.left_denominator = 6;
                _this.left_numerator = 3;

                _this.equi_denominatorArray = [2, 4, 12];
                _this.equi_numeratorArray = [1, 2, 6];
                _this.Nonequi_denominator = [2, 3, 4, 6, 12];

                break;
            case 14: _this.left_denominator = 6;
                _this.left_numerator = 4;

                _this.equi_denominatorArray = [3, 12];
                _this.equi_numeratorArray = [2, 8];
                _this.Nonequi_denominator = [2, 3, 4, 6, 12];

                break;
            case 15: _this.left_denominator = 6;
                _this.left_numerator = 5;

                _this.equi_denominatorArray = [12];
                _this.equi_numeratorArray = [10];
                _this.Nonequi_denominator = [2, 3, 4, 6, 12];

                break;
            case 16: _this.left_denominator = 7;
                _this.left_numerator = 1;

                _this.equi_denominatorArray = [14];
                _this.equi_numeratorArray = [2];
                _this.Nonequi_denominator = [2, 7, 14];

                break;
            case 17: _this.left_denominator = 7;
                _this.left_numerator = 2;

                _this.equi_denominatorArray = [14];
                _this.equi_numeratorArray = [4];
                _this.Nonequi_denominator = [2, 7, 14];

                break;
            case 18: _this.left_denominator = 7;
                _this.left_numerator = 3;

                _this.equi_denominatorArray = [14];
                _this.equi_numeratorArray = [6];
                _this.Nonequi_denominator = [2, 7, 14];

                break;
            case 19: _this.left_denominator = 7;
                _this.left_numerator = 4;

                _this.equi_denominatorArray = [14];
                _this.equi_numeratorArray = [8];
                _this.Nonequi_denominator = [2, 7, 14];

                break;
            case 20: _this.left_denominator = 7;
                _this.left_numerator = 5;

                _this.equi_denominatorArray = [14];
                _this.equi_numeratorArray = [10];
                _this.Nonequi_denominator = [2, 7, 14];

                break;
            case 21: _this.left_denominator = 7;
                _this.left_numerator = 6;

                _this.equi_denominatorArray = [14];
                _this.equi_numeratorArray = [12];
                _this.Nonequi_denominator = [2, 7, 14];

                break;
            case 22: _this.left_denominator = 8;
                _this.left_numerator = 1;

                _this.equi_denominatorArray = [16];
                _this.equi_numeratorArray = [2];
                _this.Nonequi_denominator = [2, 4, 8, 16];

                break;
            case 23: _this.left_denominator = 8;
                _this.left_numerator = 2;

                _this.equi_denominatorArray = [4, 16];
                _this.equi_numeratorArray = [1, 4];
                _this.Nonequi_denominator = [2, 4, 8, 16];

                break;
            case 24: _this.left_denominator = 8;
                _this.left_numerator = 3;

                _this.equi_denominatorArray = [16];
                _this.equi_numeratorArray = [6];
                _this.Nonequi_denominator = [2, 4, 8, 16];

                break;
            case 25: _this.left_denominator = 8;
                _this.left_numerator = 4;

                _this.equi_denominatorArray = [2, 4, 16];
                _this.equi_numeratorArray = [1, 2, 8];
                _this.Nonequi_denominator = [2, 4, 8, 16];

                break;
            case 26: _this.left_denominator = 8;
                _this.left_numerator = 5;

                _this.equi_denominatorArray = [16];
                _this.equi_numeratorArray = [10];

                _this.Nonequi_denominator = [2, 4, 8, 16];

                break;
            case 27: _this.left_denominator = 8;
                _this.left_numerator = 6;

                _this.equi_denominatorArray = [4, 16];
                _this.equi_numeratorArray = [3, 12];
                _this.Nonequi_denominator = [2, 4, 8, 16];

                break;
        }

        //        console.log("qestion"+_this.left_numerator+"/"+_this.left_denominator);
        //_this.equi_denominatorArray = _this.shuffle(_this.equi_denominatorArray);         
        //_this.equi_numeratorArray = _this.shuffle(_this.equi_numeratorArray);

        //        for(i=0;i<_this.equi_denominatorArray.length;i++)
        //        {
        //            console.log("equi fraction:"+_this.equi_numeratorArray[i]+"/"+_this.equi_denominatorArray[i]);
        //        }
    },

    gotoEachinstance_Vertical: function (target) {
        _this.asked_instance[_this.count1] = target;
        //        console.log("asked array: " + _this.asked_instance[_this.count1] + " " + _this.count1);
        switch (target) {
            case 1: _this.left_denominator = 2;
                _this.left_numerator = 1;

                _this.equi_denominatorArray = [4, 6];
                _this.equi_numeratorArray = [2, 3];
                //_this.Nonequi_denominator = [3,6];
                _this.indexArray = [0, 1, 2, 3, 4, 5];
                _this.Nonequi_numerator = [1, 2, 1, 2, 4, 5];//[1,2,1,2,3,4,5];
                _this.Nonequi_denominator = [3, 3, 6, 6, 6, 6];//[3,3,6,6,6,6,6];   
                break;

            case 2: _this.left_denominator = 3;
                _this.left_numerator = 1;

                _this.equi_denominatorArray = [6];
                _this.equi_numeratorArray = [2];
                //_this.Nonequi_denominator = [2,3,6];
                _this.indexArray = [0, 1, 2, 3, 4, 5];
                _this.Nonequi_numerator = [1, 2, 1, 3, 4, 5];
                _this.Nonequi_denominator = [2, 3, 6, 6, 6, 6];

                break;

            case 3: _this.left_denominator = 3;
                _this.left_numerator = 2;

                _this.equi_denominatorArray = [6];
                _this.equi_numeratorArray = [4];
                //_this.Nonequi_denominator = [2,3,6];
                _this.indexArray = [0, 1, 2, 3, 4, 5];
                _this.Nonequi_numerator = [1, 1, 1, 2, 3, 5];
                _this.Nonequi_denominator = [2, 3, 6, 6, 6, 6];

                break;
        }
        //        console.log("qestion"+_this.left_numerator+"/"+_this.left_denominator);
        //_this.equi_denominatorArray = _this.shuffle(_this.equi_denominatorArray);         
        //_this.equi_numeratorArray = _this.shuffle(_this.equi_numeratorArray);

        //        for(i=0;i<_this.equi_denominatorArray.length;i++)
        //        {
        //            console.log("equi fraction:"+_this.equi_numeratorArray[i]+"/"+_this.equi_denominatorArray[i]);
        //        }

    },

    addNumberPad_Ver: function () {
        //        console.log("inside numberpad");
        _this.numpad = true;
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        //bottomnumpadbg.anchor.setTo(0.5);
        bottomnumpadbg.scale.setTo(1, 1);

        bottomnumpadbg.name = "numpadbg";

        _this.x = 70;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;
        //        console.log("inside numberpad1");

        for (var i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.8, 0.8);
            _this.numbg.name = i + 1;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked1, _this);

            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 10;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8, 0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.rightbtn.frame = 11;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8, 0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked1, _this);

        _this.numpadTween = _this.add.tween(_this.numGroup);

        //tween in the number pad after a second.
        _this.tweenNumPad();
    },

    //* Change this function to show small number pad as given in GDD. (no signs)
    addNumberPad: function () {
        //        console.log("inside numberpad");
        _this.numpad = true;
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        //bottomnumpadbg.anchor.setTo(0.5);
        bottomnumpadbg.scale.setTo(1, 1);

        bottomnumpadbg.name = "numpadbg";

        _this.x = 70;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;
        //        console.log("inside numberpad1");

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

        // _this.enterTxt = _this.add.text(8,8, "");
        // _this.enterTxt.anchor.setTo(0.5);
        // _this.enterTxt.align = 'center';
        // _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        // _this.enterTxt.fontSize = "30px";
        // _this.enterTxt.fontWeight = 'normal';
        // _this.enterTxt.fill = '#65B4C3';

        //_this.objGroup.add(_this.ScreenTextBox);
        _this.numpadTween = _this.add.tween(_this.numGroup);

        //tween in the number pad after a second.
        _this.tweenNumPad();

        //after 2 seconds, show the screen text box as enabled
        //_this.time.events.add(2000, _this.enableScreenText);

    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.eraseScreen();
    },

    wrongbtnClicked1: function (target) {
        _this.clickSound.play();
        _this.eraseScreen1();
    },

    eraseScreen: function (target) {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        // _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).addChild(_this.enterTxt);
        // _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).addChild(_this.enterTxt);
        if (_this.denominator == true) {
            //_this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).frame = 1;
            _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt2);
            _this.enterTxt2.destroy();

            _this.enterTxt2 = null;
            //_this.enterTxt2.text = "";
        }
        else if (_this.numerator == true) {
            // _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).frame = 0;
            _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt1);
            _this.enterTxt1.destroy();

            _this.enterTxt1 = null;
            //_this.enterTxt1.text = "";
        }
        // _this.enterTxt.destroy();
        // _this.enterTxt;
        // _this.enterTxt.text = "";
        // console.log(_this.selectedAns1);
    },

    eraseScreen1: function (target) {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        if (_this.denominator == true) {
            //_this.enterFractionBox2.frame = 0;
            _this.enterFractionBox2.removeChild(_this.enterTxt2);
            _this.enterTxt2.destroy();

            _this.enterTxt2 = null;
        }
        else if (_this.numerator == true) {
            //_this.enterFractionBox2.frame = 0;
            _this.enterFractionBox2.removeChild(_this.enterTxt1);
            _this.enterTxt1.destroy();

            _this.enterTxt1 = null;
        }
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },


    //* Change this function to take 2 digit numbers only. No sign expected.
    //* this is called when a number on num pad is clicked.

    numClicked: function (target) {
        _this.clickSound.play();
        //_this.qn_flag=-1;
        // _this.wrongbtn.inputEnabled = true;
        // _this.wrongbtn.input.useHandCursor = true;
        // _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked,_this);

        // _this.rightbtn.inputEnabled = true;
        // _this.rightbtn.input.useHandCursor = true;
        // _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked,_this);
        //_this.qn_flag=3;   
        //        console.log(target.name);
        if (_this.selectedAns2 === '') {
            //            console.log(target.name);
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

        //_this.AnswerBox.removeChild(_this.enterTxt);

        //_this.enterTxt.destroy();
        // _this.enterTxt2.text = "";
        // _this.enterTxt1.text = "";

        if (_this.selectedAns1 === 10) var_selectedAns1 = 0;
        else var_selectedAns1 = _this.selectedAns1;
        if (_this.selectedAns2 === 10) _this.selectedAns2 = 0;
        else var_selectedAns2 = _this.selectedAns2;


        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;

        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;


        //console.log(_this.selectedAns1);
        if (_this.denominator == true) {
            _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt2);
            //            if(Number(''+_this.selectedAns1+_this.selectedAns2)<10)
            if (_this.selectedAns2 === '') {
                _this.enterTxt2 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt2.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }
            //          else if(Number(''+_this.selectedAns1+_this.selectedAns2)>=10)
            else {
                _this.enterTxt2 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt2.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }

            _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).addChild(_this.enterTxt2);
            //            console.log(_this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).length);
            _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).getChildAt(0).name = _this.enterTxt2.name;
            //            console.log(_this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).getChildAt(0).name);
            _this.enterTxt2.align = 'right';
            _this.enterTxt2.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt2.fill = '#65B4C3';
            _this.enterTxt2.fontWeight = 'Normal';
            //_this.AnswerBox.addChild(_this.enterTxt);
            _this.enterTxt2.visible = true;

        }
        else if (_this.numerator == true) {
            // _this.denominator = true;
            // _this.numerator = false;
            //_this.enterTxt1.destroy();
            //_this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).frame = 0;
            //            console.log("hi");
            _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt1);
            //_this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt2);
            //            if(Number(''+_this.selectedAns1+_this.selectedAns2)<10)
            if (_this.selectedAns2 === '') {
                _this.enterTxt1 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//20,10
                _this.enterTxt1.name = Number('' + var_selectedAns1 + var_selectedAns2);
                //_this.enterTxt.bringToTop();
            }
            //            else if(Number(''+_this.selectedAns1+_this.selectedAns2)>=10)
            else {
                _this.enterTxt1 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//36 23
                _this.enterTxt1.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }
            //_this.enterFractionBox1.addChild(_this.enterTxt); 
            _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).addChild(_this.enterTxt1);
            _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).getChildAt(0).name = _this.enterTxt1.name;
            //_this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).getChildAt(0).bringToTop();
            //console.log(_this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).addChild(_this.enterTxt).name);

            //_this.SquareBox2.addChild(_this.enterTxt); 
            _this.enterTxt1.align = 'right';
            _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt1.fill = '#65B4C3';
            _this.enterTxt1.fontWeight = 'Normal';
            //_this.AnswerBox.addChild(_this.enterTxt);
            _this.enterTxt1.visible = true;
        }
    },

    numClicked1: function (target) {
        _this.clickSound.play();
        //_this.qn_flag=-1;
        //        console.log(target.name);
        if (_this.selectedAns2 === '') {
            //            console.log(target.name);
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


        //console.log(_this.selectedAns1);
        if (_this.denominator == true) {
            //_this.enterFractionBox2.frame = 0;
            _this.enterFractionBox2.removeChild(_this.enterTxt2);

            //            if(Number(''+_this.selectedAns1+_this.selectedAns2)<10)
            if (_this.selectedAns2 == '') {
                _this.enterTxt2 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt2.name = Number('' + var_selectedAns1 + var_selectedAns2);
                //                console.log(_this.enterTxt2.name);
                //                console.log(Number(''+var_selectedAns1+var_selectedAns2));
            }
            //            else if(Number(''+_this.selectedAns1+_this.selectedAns2)>=10)
            else {
                _this.enterTxt2 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt2.name = Number('' + var_selectedAns1 + var_selectedAns2);
                //                console.log(_this.enterTxt2.name);
                //                console.log(Number(''+var_selectedAns1+var_selectedAns2));
            }


            _this.enterFractionBox2.addChild(_this.enterTxt2);
            _this.enterFractionBox2.name = _this.enterTxt2.name;
            _this.enterTxt2.align = 'right';
            _this.enterTxt2.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt2.fill = '#65B4C3';
            _this.enterTxt2.fontWeight = 'Normal';
            _this.enterTxt2.visible = true;

        }
        else if (_this.numerator == true) {
            //_this.enterFractionBox1.frame = 0;

            _this.enterFractionBox1.removeChild(_this.enterTxt1);

            //            if(Number(''+_this.selectedAns1+_this.selectedAns2)<10)
            if (_this.selectedAns2 == '') {
                _this.enterTxt1 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//20,10
                _this.enterTxt1.name = Number('' + var_selectedAns1 + var_selectedAns2);

            }
            //            else if(Number(''+_this.selectedAns1+_this.selectedAns2)>=10)
            else {
                _this.enterTxt1 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//36 23
                _this.enterTxt1.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }

            _this.enterFractionBox1.addChild(_this.enterTxt1);
            _this.enterFractionBox1.name = _this.enterTxt1.name;


            _this.enterTxt1.align = 'right';
            _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt1.fill = '#65B4C3';
            _this.enterTxt1.fontWeight = 'Normal';
            _this.enterTxt1.visible = true;
        }
    },

    //* This is called when Right btn on the numberpad is clicked to enter numerator and denominator        
    rightbtnClicked: function () {
        _this.clickSound.play();

        if (_this.enterTxt1 == null || _this.enterTxt2 == null) {
            _this.wrongSound.play();
            _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt2);
            _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt1);
            _this.enableBoxes();
        }

        else if (_this.rightbtn_evaluation()) {
            _this.noofAttempts++;
            //_this.fractionBoxCount++;
            if (_this.equi_count == _this.fractionBoxCount) {
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebrationSound.play();
                _this.starActions();
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                _this.enterTxt1 = null;
                _this.enterTxt2 = null;
                //console.log(_this.enterTxt1);
                //i = _this.store_equi_deno.length;
                _this.time.events.add(3000, function () {
                    _this.equalsGroup.destroy();

                    _this.Bg_fraction1.destroy();
                    _this.enterFractionGroup.destroy();
                    _this.nextquestion();
                });
            }
            else {
                _this.enterTxt1 = null;
                _this.enterTxt2 = null;
                _this.time.events.add(500, _this.enableBoxes);
            }
        }
        else {
            _this.wrongSound.play();
            _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt2);
            _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt1);
            _this.enableBoxes();
            //i = _this.store_equi_deno.length;
        }
    },

    rightbtn_evaluation: function () {
        for (i = 0; i < _this.store_equi_deno.length; i++) {
            if (_this.store_equi_deno[i] == _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).getChildAt(0).name && _this.store_equi_num[i] == _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).getChildAt(0).name) {
                //                console.log(_this.store_equi_num[i]);
                //                console.log(_this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).getChildAt(0).name);
                // if(_this.store_equi_num[i] == _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).getChildAt(0).name)
                //{                       
                //                    console.log(_this.equi_count);
                //                    console.log(_this.fractionBoxCount);
                if (_this.ansCheckArr[i] == 'n') {
                    _this.enterFractionGroup.getChildAt(_this.fractionBoxCount).visible = true;
                    _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).visible = false;
                    _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).visible = false;
                    _this.BlueLineGroup.getChildAt(_this.fractionBoxCount).visible = false;
                    _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt2);
                    _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt1);

                    _this.enterFractionGroup.getChildAt(_this.fractionBoxCount).addChild(_this.enterTxt1);
                    _this.enterFractionGroup.getChildAt(_this.fractionBoxCount).addChild(_this.enterTxt2);
                    if (_this.enterTxt1.name < 10) {

                        _this.enterTxt1.text = '' + _this.enterTxt1.name;
                        //                            console.log("here");
                        _this.enterTxt1.x = 15;
                        console.log("here SUBSTRINGING TO REMOVE FIRST CHAR" + _this.enterTxt1.text);

                    }
                    else if (_this.enterTxt1.name > 10) {
                        //                            console.log("here");
                        _this.enterTxt1.x = 8;
                    }
                    if (_this.enterTxt2.name < 10) {

                        _this.enterTxt2.text = '' + _this.enterTxt2.name;
                        _this.enterTxt2.x = 15;
                        console.log("here SUBSTRINGING TO REMOVE FIRST CHAR" + _this.enterTxt2.text);
                    }
                    else if (_this.enterTxt2.name >= 10) {
                        //                            console.log("here");
                        _this.enterTxt2.x = 8;
                    }
                    //_this.enterTxt2.name
                    _this.enterTxt1.y = 10;
                    _this.enterTxt2.y = 40;
                    _this.enterTxt1.fontSize = "20pt";
                    _this.enterTxt2.fontSize = "20pt";
                    _this.fractionBoxCount++;
                    //                        console.log("here");
                    //                        console.log(i);                      
                    _this.ansCheckArr[i] = "y";

                    //                        console.log(_this.equi_count);
                    //                        console.log(_this.fractionBoxCount);
                    //                        console.log(_this.ansCheckArr[i]);

                    return true;
                }

                else //if(_this.ansCheckArr[i] != 'n')
                {
                    _this.wrongSound.play();
                    //_this.fractionBoxCount--;
                    _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt2);
                    _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt1);
                    //                        console.log("here");                      
                    _this.enableBoxes();
                    //return false;
                }
            }
        }


    },

    rightbtnClicked1: function (target) {
        _this.clickSound.play();
        _this.noofAttempts++;
        if (_this.enterTxt1 == null || _this.enterTxt2 == null) {
            _this.wrongSound.play();
            _this.enterFractionBox2.removeChild(_this.enterTxt2);
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.Ver_enableBoxes();
        }

        else if (_this.rightbtn_evaluation1()) {
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.celebrationSound.play();
            _this.starActions();

            _this.enterFractionBox1.destroy();
            _this.enterFractionBox2.destroy();
            _this.BlueLine.destroy();

            _this.numGroup.destroy();
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.enterTxt1 = null;
            _this.enterTxt2 = null;
            _this.time.events.add(3000, function () {
                _this.equals.destroy();
                _this.optionCubeGroupCpy.destroy();
                _this.QnCubeGroupCpy.destroy();

                _this.nextquestion();
            });
        }
        else {
            _this.wrongSound.play();
            _this.enterFractionBox2.removeChild(_this.enterTxt2);
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.Ver_enableBoxes();
        }
    },

    rightbtn_evaluation1: function () {
        //        console.log(_this.store_equi_deno[0]);
        //        console.log(_this.store_equi_num[0]);
        //        console.log( _this.enterFractionBox2.name);
        //        console.log( _this.enterFractionBox1.name);
        for (i = 0; i < 4; i++) {
            if (_this.store_equi_deno[i] == _this.enterFractionBox2.name && _this.store_equi_num[i] == _this.enterFractionBox1.name) {
                if (_this.ansCheckArr[i] == 'n') {

                    if (_this.enterTxt1.name < 10) {

                        _this.enterTxt1.text = '' + _this.enterTxt1.name;
                        _this.enterTxt1.x = 15;
                        console.log("here SUBSTRINGING TO REMOVE FIRST CHAR" + _this.enterTxt1.text);
                    }
                    else if (_this.enterTxt1.name >= 10) {
                        //                            console.log("here");
                        _this.enterTxt1.x = 8;
                    }

                    if (_this.enterTxt2.name < 10) {

                        _this.enterTxt2.text = '' + _this.enterTxt2.name;
                        _this.enterTxt2.x = 15;
                        console.log("here SUBSTRINGING TO REMOVE FIRST CHAR" + _this.enterTxt2.text);
                    }
                    else if (_this.enterTxt2.name >= 10) {
                        //                            console.log("here");
                        _this.enterTxt2.x = 8;
                    }

                    _this.enterFraction.addChild(_this.enterTxt1);
                    _this.enterFraction.addChild(_this.enterTxt2);
                    _this.enterFraction.visible = true;


                    //                            _this.enterTxt1.x = 15;
                    //                            _this.enterTxt2.x = 15;
                    _this.enterTxt1.y = 7;
                    _this.enterTxt2.y = 40;

                    //                            console.log("here");
                    //                            console.log(i);                      
                    _this.ansCheckArr[i] = "y";

                    return true;
                }

                else //if(_this.ansCheckArr[i] != 'n')
                {
                    _this.wrongSound.play();
                    //_this.fractionBoxCount--;
                    _this.enterFractionBox2.removeChild(_this.enterTxt2);
                    _this.enterFractionBox1.removeChild(_this.enterTxt1);
                    //                            console.log("here");                      
                    _this.Ver_enableBoxes();
                    //return false;
                }
            }
        }

    },

    create_nextFractionBox: function () {
        _this.enterFraction = _this.add.sprite(_this.enterFraction.x + 100, _this.enterFraction.y, 'numberBox');
        _this.enterFraction.scale.setTo(0.6);
        _this.enterFractionBox1 = _this.add.sprite(_this.x1 + 100, _this.y1, 'newBox');
        _this.enterFractionBox1.scale.setTo(0.6);
        _this.enterFractionBox2 = _this.add.sprite(_this.x2 + 100, _this.y2, 'newBox');
        _this.enterFractionBox2.scale.setTo(0.6);
        _this.equals = _this.add.text(_this.x3 + 30, _this.y3, "=");
        _this.enterFraction.addChild(_this.equals);
    },

    nextquestion: function () {

        _this.selectedCubeGroupCpy.destroy();
        _this.selectedFraction.destroy();
        _this.Array_Optcube = [];
        _this.Array_Qncube = [];
        _this.objGroup.destroy();
        _this.optGroup.destroy();
        _this.QnGroup.destroy();
        _this.QnCubeGroup.destroy();
        _this.numGroup.destroy();
        _this.denominator = undefined;
        _this.numerator = undefined;
        _this.bigBox.destroy();
        _this.smallBox.destroy();
        _this.Bg_fraction.destroy();
        _this.optionsGroup.destroy();
        _this.enterFraction.destroy();
        _this.fractionBoxCount = 0;
        _this.equi_count = 0;

        if (_this.count1 < 6) {
            _this.randomizing_elements();
            if (_this.HzOrVertArray[_this.count1] == 1) {
                _this.Decide_Fractions();
                _this.Decide_Nonequi_Fractions();
            }
            else if (_this.HzOrVertArray[_this.count1] == 2) {
                //                    console.log("hihi");
                _this.Decide_Fractions_Vertical();
                _this.Ver_Decide_Nonequi_Fractions();
            }
            _this.gotoFractions();
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            //_this.time.events.add(5000,function(){ window.parent.location.reload();});
            _this.time.events.add(1900, function () {
                //* transition to score. Score App version will show score menu - home/replay/next.
                //* Score Diksha version will end the session and show the score.
                //* appropriate version of the score should be present in commonjsfiles folder.
                _this.time.events.add(50, function () {
                    // _this.state.start('score');
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
        // _this.game_id = "NSF_5_G6";
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
        //* in this game you'll find equivalent fractions using cubes by concrete method
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-5-G6/" +
            _this.languageSelected + "/NSF-5-G6-demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* find the equivalent fractions of the given fractions
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-5-G6/" +
            _this.languageSelected + "/NSF-5-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* are these equivalent fractions?
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-5-G6/" +
            _this.languageSelected + "/NSF-5-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* enter the equivalent fractions of given options
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-5-G6/" +
            _this.languageSelected + "/NSF-5-G6-c.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

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
            // _this.stopVideo();
            _this.stopAudio();
            _this.videoWorld.destroy();
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

        if (_this.q3Timer) clearTimeout(_this.q3Timer);

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

        if (_this.q3Sound) {
            console.log("removing the q3");
            _this.q3Sound.pause();
            _this.q3Sound = null;
            _this.q3Soundsrc = null;
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
        _this.demoVideo_1 = _this.add.video('nsf5_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSF-5-G6_1.mp4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* play question 1

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2 after 18 seconds.
        {
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 18000);

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3 after 48 seconds.
        {
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 48000);

        _this.demoVideo_1.onComplete.add(function ()   //* on completion of demovideo close the video
        {
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop vide.
            _this.videoWorld.destroy();         //* destroy the video, gets removed from screen.
            _this.game.paused = false;          //* now, unpause the game, so that it continues.
        });
    }
}
