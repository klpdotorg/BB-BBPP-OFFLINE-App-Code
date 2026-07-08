Game.NS_FM_1_G6level1 = function () { };


Game.NS_FM_1_G6level1.prototype =
{

    init: function (game) {
        _this = this;

        //* This game is about factors/multiple. identify if given smaller number
        //* is a factor of the given bigger number. 
        //* uses trays of eggs/counters to show them in groups of smaller number
        //* and check if it divides bigger number. 

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

        _this.eggcrackingSound = document.createElement('audio');
        _this.eggcrackingSoundsrc = document.createElement('source');
        _this.eggcrackingSoundsrc.setAttribute("src", window.baseUrl + "sounds/egg_cracking.wav");
        _this.eggcrackingSound.appendChild(_this.eggcrackingSoundsrc);

        _this.counterChangeSound = document.createElement('audio');
        _this.counterChangeSoundsrc = document.createElement('source');
        _this.counterChangeSoundsrc.setAttribute("src", window.baseUrl + "sounds/colour_change.mp3");
        _this.counterChangeSound.appendChild(_this.counterChangeSoundsrc);
        _this.counterChangeSound.volume = 0.5;

        _this.tweenSound = document.createElement('audio');
        _this.tweenSoundsrc = document.createElement('source');
        _this.tweenSoundsrc.setAttribute("src", window.baseUrl + "sounds/Egg_Counter_onTray_multiple.mp3");
        _this.tweenSound.appendChild(_this.tweenSoundsrc);
        _this.tweenSound.volume = 0.5;

        telInitializerbbpp.gameIdInit("NSN_FM_1_G6", gradeSelected);
        console.log(gameID,"gameID...");
    },

    create: function (game) {

        console.log("inside create ..........//");
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

        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        //_this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        _this.glowminus;
        _this.first_evaluation = 0;
        _this.numpad_present = 0;

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

        _this.Question_flag = -1;

        //** include the background file, navigation bar, stars, timer objects.
        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            //_this.state.start('NS_INT_G6Menu');

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

                if (_this.Question_flag == 0) {
                    _this.AskHowManyLines();
                }
                else if (_this.Question_flag == 1) {
                    _this.Ask_Question2();
                }
                else if (_this.Question_flag == 2) {
                    _this.Ask_Question3();
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

        _this.generateStarsForTheScene(6);

        //* include variables for use - objGroup (where egg objects can be added)
        _this.objGroup;
        _this.numGroup;
        _this.BasketContentGroup = _this.add.group();

        //* first digit and second digit of number selected on number pad
        //* when the question asked 'how many lines do you need'
        //* this has o be validated to be same as the Small_Num given
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';

        //* add the answer box to capture 'how many lines do you need'
        _this.AnswerBox = _this.add.sprite(840, 410, 'TextBox');
        _this.AnswerBox.visible = false;

        _this.EggOrCounterIndex = 0;//index to the array whether we show egg or Counter
        //* Egg or counter tray to be shown for shuffling. 1 - egg, 2 - counter.
        _this.EggOrCounterArray = [1, 2];

        _this.Big_Num  //* generate a random number between 3 to 160.
        //* smaller number, child has to answer if it is a factor of bigger number.
        //* Small_Num = generate a random number from (Big_Num/16)+1 to a maximum of 10.
        //* e.g: if Big_Num = 137, then (Big_Num/16)+1 = 9. So Small_Num = 9 or 10.
        //* e.g: if Big_Num = 88, then (Big_Num/16)+1 = 6. So Small_Num = 6/7/8/9/10.
        //* e.g: if Big_Num = 16, then (Big_Num/16)+1 = 2. So Small_Num = 2/3/4/5../10
        //* e.g: if Big_Num < 16, then (Big_Num/16)+1 = 1. In this case, take Small_Num = 2/3/4/..10.
        //* that is, in case Big_Num is less than 16, you can choose min Small_Num as 2.

        //* Store the Big numbers asked here to avoid duplicate.
        //* every time, store the Big_Num generated in this array. While generating, check if it is already
        //* in this array. if already present, then generate it again. 
        _this.Big_NumAsked = [0, 0, 0, 0, 0, 0];
        _this.Small_Num; //* use the formula given above.


        //* X, y coordinates for the egg tray and Counter trays to be placed on screen
        /*_this.eggTrayx=XX;
        _this.eggTrayy= XX;
        _this.counterTrayx= XX;
        _this.counterTrayy= XX;*/

        //* X, Y coordinates of the eggs and counters on the tray to be placed.
        //* These 2 arrays serve as 2 dimentional array of X,Y coordinates
        //* of the eggs/counters on the tray.  
        //        _this.eggX = [166,205,242,281,319,357,395,434,472,510,548,586,625,662,701,739];
        //        _this.eggY = [115,153,192,231,269,306,346,384,422,460];
        //        //115,153,192,231,269,306,346,384,422,460

        _this.eggX = [165, 204, 242, 280, 319, 357, 395, 433, 471, 510, 547, 586, 624, 662, 701, 739];
        _this.eggY = [114, 152, 191, 229, 269, 305, 345, 384, 422, 460];
        //115,153,192,231,269,306,346,384,422,460

        //        _this.CounterX = [171,208,246,285,324,361,400,438,476,515,552,591,629,667,705,743];
        //        _this.CounterY = [119,156,195,234,273,310,348,387,425,463];

        //        _this.CounterX = [170,207,245,284,323,360,399,437,475,514,551,590,628,666,704,742];
        //        _this.CounterY = [117,154,193,232,271,309,346,385,423,461];

        _this.CounterX = [164, 201, 239, 278, 317, 354, 393, 431, 469, 508, 545, 584, 622, 660, 698, 736];
        _this.CounterY = [111, 149, 188, 227, 266, 303, 341, 381, 418, 456];

        //* X, Y coordinates of the eggs and Counters on the basket
        //_this.eggBasketX = [store 30 X values];  //* place couple of eggs and then add these X values
        //_this.eggBasketY = [store 30 Y values];  //* place couple of eggs and then add these Y values

        //_this.counterBasketX = [store 30 X values];  //* place couple of counter and add these X values
        //_this.counterBasketY = [store 30 Y values];  //* place couple of counter and add these Y values

        //* flags set when numberpad is called for asking lines or asking which is the other factor
        _this.AskingLines = false;
        _this.AskingFactor = false;

        _this.trayGroup = _this.add.group();

        _this.tick_btn = _this.add.sprite(840, 380, "tick_btn");
        _this.tick_btn.visible = false;
        _this.tick_btn.frame = 1;


        //* Randomize the options to ask - proper factor or non-factor to be asked. 
        //* 3 instances of each to be asked.
        _this.Factor_NonFactor = [1, 2, 1, 2, 1, 2];   //* 1 - proper factor. 2 - non-factor

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
        _this.sceneCount++;
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

        //* shuffle the array to drive 3 instances of each to be asked (factor/non factor randomly)
        //* this array has to be shuffled only once for the game.
        _this.Factor_NonFactor = _this.shuffle(_this.Factor_NonFactor);


        //* randomize the numbers, egg/Counter array and the audio question to be asked
        _this.randomizing_elements();
        _this.gotoFactors();

        _this.questionid =1;
    },

    stopVoice: function () {

        if (_this.Question) {
            _this.Question.pause();
            _this.Question = null;
            _this.Questionsrc = null;
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

    gotoFactors: function () {
        //* get egg/counter and vertical / horizontal from the array shuffled.
        //_this.EggOrCounter = _this.EggOrCounterArray[ use index varialbe used for this array];
        //_this.HzOrVert = _this.HzOrVertArray[ use index varialbe used for this array];

        //* load the initial screen with egg/counter and vertical/horizontal & big and small numbers
        _this.LoadInitialScreen();

        //* ask the question how many lines needed
        _this.GetHowManyLines();
    },

    GetHowManyLines: function () {
        //* play the audio question how many lines needed only first time.

        if (_this.count1 == 0) _this.AskHowManyLines();

        //* with a delay call Addnumber pad function to add the smaller number pad
        //* set a flag to show that the numberpad is being shown for asking hiw many lines
        //* set the other flag for asking factor to false.
        //* this flag will be used while validating the number entered

        _this.AskingLines = true;
        _this.AskingFactor = false;
        //* add a delay if reqquired and show number pad
        _this.time.events.add(2000, function () {
            _this.Question_flag = 0;
            _this.rightbtn_is_Clicked = false;
            _this.addNumberPad();
            _this.initialtraytween();
        });
    },

    initialtraytween: function () {
        trayDragAction = _this.add.tween(_this.trayGroup);
        trayDragAction.to({ x: 0, y: -53 }, 1000, 'Linear', false, 0);
        trayDragAction.start();
    },

    //* load all the initial screen elements based on the options chosen by randomizing function 
    LoadInitialScreen: function () {
        _this.AddInitialTray()//* need to code this function. Add big tray of Egg/counter. Add the
        //* objects to a group, so it can be destroyed together.        
        _this.AddBigSmallNumer(); //* need to code this function to Big and small numbers on screen.
    },

    AddInitialTray: function () {
        _this.objGroup = _this.add.group();

        _this.Small_num_Box = _this.objGroup.create(50, 80, "Small_num_Box");
        _this.Small_num_Box.visible = true;
        _this.Big_num_Box = _this.objGroup.create(833, 80, "Big_num_Box");
        _this.Big_num_Box.visible = true;
        _this.AnswerBox = _this.objGroup.create(849, 400, "TextBox");
        _this.AnswerBox.visible = true;
        // console.log(_this.Big_Num);
        // console.log(_this.Small_Num);
        _this.trayGroup = _this.add.group();

        if (_this.EggOrCounterArray[_this.EggOrCounterIndex] == 1) {

            _this.ten_x_sixteen = _this.trayGroup.create(152, 100, '10x16');
        }
        else {
            _this.ten_x_sixteen = _this.trayGroup.create(152, 100, 'counter_10x16');
        }
    },

    AddBigSmallNumer: function () {
        if (_this.Big_Num < 10) { _this.Bignumber = _this.add.text(22, 15, _this.Big_Num); }
        else if (_this.Big_Num >= 10 && _this.Big_Num < 100) { _this.Bignumber = _this.add.text(26, 15, _this.Big_Num); }
        else if (_this.Big_Num >= 100) { _this.Bignumber = _this.add.text(18, 15, _this.Big_Num); }

        if (_this.Small_Num < 10) { _this.Smallnumber = _this.add.text(23, 15, _this.Small_Num); }
        else if (_this.Small_Num == 10) { _this.Smallnumber = _this.add.text(15, 15, _this.Small_Num); }

        _this.Bignumber.visible = true;
        _this.Bignumber.fill = '#FF0000';
        _this.Smallnumber.visible = true;
        _this.Smallnumber.fill = '#FFFFFF';
        _this.Big_num_Box.addChild(_this.Bignumber);
        _this.Small_num_Box.addChild(_this.Smallnumber);
    },

    //* Clear all the initial screen elements on the screen
    clearInitialScreen: function () {
        //* need to code this. clear the objects on initial screen. Destroy it from the group.
        _this.objGroup.visible = false;
        _this.numGroup.destroy();
        _this.AnswerBox.destroy();
        _this.Small_num_Box.destroy();
        _this.Big_num_Box.destroy();
        _this.Big_num_Box.removeChild();
        _this.Small_num_Box.removeChild();
        _this.eraseScreen();
    },

    //* shuffle egg/Counter array for selecting randomly.
    //* shuffle the Horizontal or Vertical representation array for selecting one randomly.
    randomizing_elements: function () {
        //* Use the egg or Counter array and shuffle it
        _this.EggOrCounterArray = _this.shuffle(_this.EggOrCounterArray);
        _this.EggOrCounterArray[_this.EggOrCounterIndex];
        //console.log("egg or counter: "+_this.EggOrCounterArray[_this.EggOrCounterIndex]);

        //* Horizontal or Vertical trays to be shown for shuffling. 1 - Horizontal, 2 - Vertical.

        //* determine big and small numbers.
        _this.Generate_BigSmall_Numbers();
    },

    Generate_BigSmall_Numbers: function () {

        if (_this.Factor_NonFactor[_this.count1] == 1)  //* generate proper factor
        {
            //* call the function which generates Big and Small number till you get a proper multiple pair
            //* if it is not a proper factor, then change it to a proper pair.

            _this.GetBigSmall_Numbers();
            _this.MakeProperFactor();

            //console.log("Proper factor", _this.Big_Num+ " " + _this.Small_Num);
        }
        else if (_this.Factor_NonFactor[_this.count1] == 2)  //* generate nonproper factor
        {
            //* call the function which generates Big and Small number till you get a improper multiple pair
            do {
                _this.GetBigSmall_Numbers();
                //console.log("ImProper factor do-while loop: ", _this.Big_Num+ " " + _this.Small_Num);
            }
            while (_this.Big_Num % _this.Small_Num == 0);

        }

    },

    //* smaller number, child has to answer if it is a factor of bigger number.
    //* Small_Num = generate a random number from (Big_Num/16)+1 to a maximum of 10.
    //* e.g: if Big_Num = 137, then (Big_Num/16)+1 = 9. So Small_Num = 9 or 10.
    //* e.g: if Big_Num = 88, then (Big_Num/16)+1 = 6. So Small_Num = 6/7/8/9/10.
    //* e.g: if Big_Num = 16, then (Big_Num/16)+1 = 2. So Small_Num = 2/3/4/5../10
    //* e.g: if Big_Num < 16, then (Big_Num/16)+1 = 1. In this case, take Small_Num = 2/3/4/..10.
    //* e.g: if if Big_Num = 160, then (Big_Num/16) = 10. In this case, take Small_Num = 10.
    //* that is, in case Big_Num is less than 16, you can choose min Small_Num as 2.

    //* Store the Big numbers asked here to avoid duplicate.
    //* every time, store the Big_Num generated in this array. While generating, check if it is already
    //* in this array. if already present, then generate it again. 

    GetBigSmall_Numbers: function () {
        //* get a random number between 3 and 160.
        //* below logic needs to be tested
        _this.Big_Num = Math.floor(Math.random() * (160 - 3 + 1)) + 3;

        //* search the Big num asked array to see if it is already asked.
        //* if yes, then generate the number again and re-start the loop
        //* otherwise, break the loop

        for (i = 0; i <= _this.count1; i++) {
            if (_this.Big_Num == _this.Big_NumAsked[i]) {
                _this.Big_Num = Math.floor(Math.random() * (160 - 3 + 1)) + 3;

                //* reset the index to -1; in the next iteration, it gets incremented to 0 and starts the search again.
                i = -1;
            }
            else if (_this.Big_NumAsked[i] == 0) {
                break;
            }
        }

        //* store that big number in the array.

        _this.Big_NumAsked[i] = _this.Big_Num;
        //* divide it by 16, which is the maximum lines that can be shown.
        if (_this.Big_Num == 160) {
            _this.Small_Num = 10;
        }
        else if (_this.Big_Num < 16 && _this.Big_Num > 10) {
            _this.Small_Num = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
        }
        else if (_this.Big_Num <= 10) {
            _this.Small_Num = Math.floor(Math.random() * (_this.Big_Num - 1 - 2 + 1)) + 2;
        }
        else {
            var LeastLinesToShow = Math.floor(_this.Big_Num / 16) + 1;
            _this.Small_Num = Math.floor(Math.random() * (10 - LeastLinesToShow + 1)) + LeastLinesToShow;
        }

    },

    //* MakeProperFactor function converts a non-multiple Big_number to to a proper multiple of small number
    //* if it is a proper multiple then just return. Otherwise:
    //* e.g. Big_number = 29
    //*      Small_number = 9
    //*      Big_number / Small_number = 3 and 2 is remainder
    //*      Now change Big_number = Big_number - remainder
    //*      that is, Big_number = 29 - 2 = 27. 
    //*      27 is a proper multiple of 9. 
    //* While loop is used since if there is a repeated number, then it will repeat the process for converting to proper factor.
    //* for loop is used to search through the already generated numbers.

    MakeProperFactor: function () {
        var Remainder = _this.Big_Num % _this.Small_Num;
        var i;

        //for (i=0;i<6;i++);
        //console.log(_this.Big_NumAsked[i]);

        while (Remainder != 0) {

            //* if remainder is > 0, then change Big number.
            //* in case Big number is less than 20, then make it bigger. Otherwise, subraction of remainder may not work.

            if (_this.Big_Num > 20) {
                _this.Big_Num = _this.Big_Num - Remainder;
            }
            else if (_this.Big_Num <= 20) {
                //* subtraction of remainder may make it zero or too small. so bump it up by small number!
                _this.Big_Num = _this.Big_Num + _this.Small_Num;
                Remainder = _this.Big_Num % _this.Small_Num;
                _this.Big_Num = _this.Big_Num - Remainder;
            }

            //* search if this proper factor is already asked by any chance. if yes, get the pair again.
            for (i = 0; i <= _this.count1; i++) {
                if (_this.Big_Num == _this.Big_NumAsked[i]) {
                    _this.GetBigSmall_Numbers();
                    i = 0;
                }
                else if (_this.Big_NumAsked[i] == 0) {
                    break;
                }
            }
            _this.Big_NumAsked[_this.count1] = _this.Big_Num;
            Remainder = _this.Big_Num % _this.Small_Num;

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
        // console.log(_this.selectedAns1);
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

        //_this.ScreenTextBox.visible = true;
        //_this.ScreenTextTween.to({ x:860, y:115},1000, 'Linear', true, 0);

    },

    AskHowManyLines: function () {
        //_this.rightbtn_is_Clicked == true;       
        _this.Question = document.createElement('audio');
        _this.Questionsrc = document.createElement('source');
        _this.Questionsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1A-G6-a.mp3");
        _this.Question.appendChild(_this.Questionsrc);
        _this.Question.play();
    },

    //* Place the basket on screen. Based on whether it is Egg or Counter, fill the basket.
    AddBasket: function () {
        //*add the basket object to screen (this is empty basket, needs to be loaded with eggs);
        //* Need a strategy how to fill it, show it as reducing as objects are placed on tray.
        //* One idea: Place two or three sets of eggs (of 5 each) one behind the other. 
        //* And while tweening them to the tray, move only the top set. At that point create another set
        //* at the back.
        trayDragAction = _this.add.tween(_this.trayGroup);
        trayDragAction.to({ x: 0, y: 13 }, 1000, 'Linear', false, 0);
        trayDragAction.start();

        if (_this.EggOrCounterArray[_this.EggOrCounterIndex] == 1) //* egg
        {
            _this.eggBasket = _this.add.sprite(792, 190, "egg_basket");
            _this.eggBasket.frame = 13;
            _this.eggBasket.visible = true;
        }
        else                         //* counters
        {
            _this.CounterBasket = _this.add.sprite(792, 190, "orengeCounterBasket");
            _this.CounterBasket.frame = 13;
            _this.CounterBasket.visible = true
            //_this.fillCountersinBasket(); //* this function needs to be coded
        }

        _this.time.events.add(2000, function () {
            if (_this.EggOrCounterArray[_this.EggOrCounterIndex] == 1) //* egg
            {
                _this.eggBasket.frame = 14;


                _this.eggBasket.inputEnabled = true;
                _this.eggBasket.input.useHandCursor = true;
                _this.eggBasket.events.onInputDown.add(_this.BasketClicked, _this.eggBasket);
            }
            else                         //* counters
            {
                _this.CounterBasket.frame = 14; //* highlight the basket to show its clickable

                _this.CounterBasket.inputEnabled = true;
                _this.CounterBasket.input.useHandCursor = true;
                _this.CounterBasket.events.onInputDown.add(_this.BasketClicked, _this.CounterBasket);
            }
        });

        //* add a click even to the basket to tween the set of eggs or counters to fill the tray
        //add onClick event to the basket (should call BasketClicked()); //* this function needs to be coded        
    },



    //* Change this function to take 2 digit numbers only. No sign expected.
    //* this is called when a number on num pad is clicked.

    numClicked: function (target) {
        _this.clickSound.play();
        // console.log(target.name);
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


        //console.log(_this.selectedAns1);
        _this.enterTxt = _this.add.text(15, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });

        _this.enterTxt.align = 'right';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'normal';
        _this.AnswerBox.addChild(_this.enterTxt);
        _this.enterTxt.visible = true;
    },

    //* when basket is clicked, the eggs or Counters should arrange in set of Small_Num in the 
    //* tray on screen
    //* that is, change the x,y coordinates of the eggs/Counters in the basket to the x,y of the tray.
    //* But, the eggs/Counters have to be shown moving in set of the small num from basket to the tray.
    //* that is, tween them.

    //* need to code: Vertical or Horizontal set of eggs to be tweened
    //* Last set of movement should show basket as empty..?
    BasketClicked: function (target) {
        //Remove all events from Basket object

        //* place egg or counters on the tray
        _this.clickSound.play();
        target.input.useHandCursor = true;
        target.inputEnabled = false;
        target.frame = 13;
        if (_this.EggOrCounterArray[_this.EggOrCounterIndex] == 1) //* EggorCounter array
        {
            // console.log("insie basket clicking");
            _this.eggGroup1 = _this.add.group();
            _this.eggGroup2 = _this.add.group();

            _this.TweenEggs();
            //* to be coded, place the transparent frame on the tray
            //Add some delay and then cut the last set of eggs (change its frame of those eggs)
        }
        else {
            _this.counterGroup1 = _this.add.group();
            _this.counterGroup2 = _this.add.group();

            // console.log("CounterBasket clicking");                    
            _this.TweenCounters();
            //_this.PlaceFrame(); //* to be coded, place the transparent frame on the tray
            //Add some delay and then change color of the last set of counters (change its frame of those counter)
        }

        /* Ask the question is small num a factor of big number //* call a function; to be coded
         Show the thumbs up and thumbs down on screen  //* code a function
         Add event to thumbs up object (_this.ThumbsUpClicked())
         Add event to thumbs up object (_this.ThumbsDownClicked()
         Add tick button on screen & add event to it (_this.TickBtnClicked())*/

    },

    PlaceFrame: function () {
        /*console.log("insside PlaceFrame");
        //console.log(_this.eggGroup1.length);
        for(var i=0;i<_this.eggGroup1.length;i++){
            _this.eggGroup1.getChildAt(i).frame=2;
            console.log(_this.eggGroup1.getChildAt(i).name);
        }
        for(var i=0;i<_this.eggGroup2.length;i++){
                _this.eggGroup2.getChildAt(i).frame=1;
        }*/

    },

    TweenEggs: function () {
        //_this.trayGroup=_this.add.group();
        //* Divide the Big and Small Num and loop that many times to keep the eggs.

        for (let i = 0; i < Math.floor(_this.Big_Num / _this.Small_Num); i++) {
            _this.time.events.add(580 * i, function () {

                for (var j = 0; j < _this.Small_Num; j++) {
                    //create an egg object line vertically/horizontally near the basket (one by one)       
                    //Add tween to the each of the object
                    //Add the object to a group (OnTrayObjectGroup)
                    moveEgg1 = _this.add.sprite(800, 215, 'egg');
                    moveEgg1.scale.setTo(0.96, 0.96);
                    moveEgg1.name = String(j);
                    _this.eggGroup1.addChild(moveEgg1);
                    _this.trayGroup.addChild(_this.eggGroup1);
                    _this.changingframe_eggBasket();


                    eggDragAction = _this.add.tween(moveEgg1);
                    eggDragAction.to({ x: _this.eggX[i], y: _this.eggY[j] }, 550, 'Linear', false, 0);
                    eggDragAction.start();
                    _this.tween_egg_count++;
                }

            });

            _this.time.events.add(580 * i + 550, function () {
                _this.tweenSound.play();
            });
            //console.log("sound");

            //tween To: x,y of the tray (which can be got from the _this.eggX array, and its Y  )
            //Add a set 6 or 7 objects to the basket & send to back. (add to BasketContentGroup)
            //Remove one set of objects from the BasketContentGroup from front        
        }


        if (_this.Big_Num % _this.Small_Num == 0) {
            _this.time.events.add(700 * Math.floor(_this.Big_Num / _this.Small_Num), function () {
                _this.ShowRectangleOnEggs();

                _this.time.events.add(600, function () {

                    for (p = 0; p < _this.eggGroup1.length; p++) {
                        _this.purple_egg = _this.eggGroup1.getChildAt(p).frame = 2;
                    }

                });

                if (_this.count1 == 0) {
                    _this.time.events.add(1200, function () {
                        _this.Ask_Question2();
                    });
                }

                _this.time.events.add(1800, function () {
                    _this.Question_flag = 1;
                    _this.rightbtn_is_Clicked = false;
                    _this.rightbtn_is_Clicked = false;
                    _this.ThumpsUpDownAppear();
                });
            });
        }

        //* if there are remainders, move them to the tray as a set.
        if (_this.Big_Num % _this.Small_Num > 0) {

            i = Math.floor(_this.Big_Num / _this.Small_Num);
            _this.time.events.add(580 * i, function () {
                for (var j = 0; j < _this.Big_Num % _this.Small_Num; j++) {
                    //create an egg object line vertically/horizontally near the basket (one by one)       
                    //Add tween to the each of the object
                    //Add the object to a group (OnTrayObjectGroup)
                    moveEgg1 = _this.add.sprite(800, 215, 'egg');

                    //moveEgg1 = _this.add.sprite(_this.eggX[i],_this.eggY[j], 'egg');
                    moveEgg1.scale.setTo(0.96, 0.96);
                    //_this.moveEgg1.frame=0;
                    _this.eggGroup2.addChild(moveEgg1);
                    _this.trayGroup.addChild(_this.eggGroup2);
                    eggDragAction = _this.add.tween(moveEgg1);
                    eggDragAction.to({ x: _this.eggX[i], y: _this.eggY[j] }, 550, 'Linear', false, 0);
                    eggDragAction.start();
                }

                _this.time.events.add(550, function () {
                    _this.tweenSound.play();
                });


                _this.time.events.add(1800, function () {
                    _this.ShowRectangleOnEggs();
                    _this.time.events.add(800, function () {
                        for (p = 0; p < _this.eggGroup1.length; p++) {
                            _this.purple_egg = _this.eggGroup1.getChildAt(p).frame = 2;
                        }
                    });

                    _this.time.events.add(1800, function () {
                        _this.eggcrackingSound.play();
                        for (h = 0; h < _this.eggGroup2.length; h++) {

                            _this.hatchEgg = _this.eggGroup2.getChildAt(h).frame = 1;
                        }
                    });

                    if (_this.count1 == 0) {
                        _this.time.events.add(2300, function () {
                            _this.Ask_Question2();
                        });
                    }

                    _this.time.events.add(3000, function () {
                        _this.Question_flag = 1;
                        _this.rightbtn_is_Clicked = false;
                        _this.ThumpsUpDownAppear();
                    });
                });

            });

            //Tween To: x,y of the tray (which can be got from the _this.eggX array, and its Y  )           
        }
    },

    ShowRectangleOnEggs: function () {
        graphics = _this.add.graphics(100, 100);
        graphics.bringToTop = true;
        //_this.graphics.beginFill(0xFF3300);
        graphics.lineStyle(3, 0xffd900, 1);

        factor = Math.floor(_this.Big_Num / _this.Small_Num);
        rect = graphics.drawRect(63, 24, factor * 38.09, _this.Small_Num * 38.5, '#FF0000');
        //_this.rect.anchor.setTo(0.5);

        rect.visible = true;
        rect.bringToTop = true;

        //        _this.time.events.add(500,function()
        //        {
        //            rect.visible = false;
        //        });
        //
        //        _this.time.events.add(1000,function()
        //        {
        //            rect.visible = true;
        //        });

        //        _this.time.events.add(1500,function()
        //        {
        //            rect.visible = false;
        //        });

        //        _this.time.events.add(2000,function()
        //        {
        //            rect.visible = true;
        //        });
        //        
        _this.time.events.add(4000, function () {
            rect.visible = false;
        });

        //        _this.graphics.moveTo(50,50);
        //        _this.graphics.lineTo(250, 50);
        //        _this.graphics.lineTo(100, 100);
        //        _this.graphics.lineTo(250, 220);
        //        _this.graphics.lineTo(50, 220);
        //        _this.graphics.lineTo(50, 50);
        //_this.graphics.endFill();
        //console.log("the rectangle created: "+ _this.rect);
    },

    changingframe_eggBasket: function () {
        if (_this.Big_Num <= 80) {
            if (_this.eggGroup1.length == 8) { _this.eggBasket.frame = 12; }
            else if (_this.eggGroup1.length == 16) { _this.eggBasket.frame = 11; }
            else if (_this.eggGroup1.length == 32) { _this.eggBasket.frame = 10; }
            else if (_this.eggGroup1.length == 40) { _this.eggBasket.frame = 9; }
            else if (_this.eggGroup1.length == 48) { _this.eggBasket.frame = 8; }
            else if (_this.eggGroup1.length == 56) { _this.eggBasket.frame = 7; }
            else if (_this.eggGroup1.length == 64) { _this.eggBasket.frame = 6; }
            else if (_this.eggGroup1.length == 72) { _this.eggBasket.frame = 5; }
            else if (_this.eggGroup1.length == 80) { _this.eggBasket.frame = 4; }
        }
        else {
            if (_this.eggGroup1.length == 16) { _this.eggBasket.frame = 12; }
            else if (_this.eggGroup1.length == 32) { _this.eggBasket.frame = 11; }
            else if (_this.eggGroup1.length == 40) { _this.eggBasket.frame = 10; }
            else if (_this.eggGroup1.length == 48) { _this.eggBasket.frame = 9; }
            else if (_this.eggGroup1.length == 64) { _this.eggBasket.frame = 8; }
            else if (_this.eggGroup1.length == 80) { _this.eggBasket.frame = 7; }
            else if (_this.eggGroup1.length == 96) { _this.eggBasket.frame = 6; }
            else if (_this.eggGroup1.length == 112) { _this.eggBasket.frame = 5; }
            else if (_this.eggGroup1.length == 128) { _this.eggBasket.frame = 4; }
            else if (_this.eggGroup1.length == 144) { _this.eggBasket.frame = 3; }
            else if (_this.eggGroup1.length == 160) { _this.eggBasket.frame = 2; }
        }

    },

    changingframe_counterBasket: function () {
        if (_this.Big_Num <= 80) {
            if (_this.counterGroup1.length == 8) { _this.CounterBasket.frame = 12; }
            else if (_this.counterGroup1.length == 16) { _this.CounterBasket.frame = 11; }
            else if (_this.counterGroup1.length == 32) { _this.CounterBasket.frame = 10; }
            else if (_this.counterGroup1.length == 40) { _this.CounterBasket.frame = 9; }
            else if (_this.counterGroup1.length == 48) { _this.CounterBasket.frame = 8; }
            else if (_this.counterGroup1.length == 56) { _this.CounterBasket.frame = 7; }
            else if (_this.counterGroup1.length == 64) { _this.CounterBasket.frame = 6; }
            else if (_this.counterGroup1.length == 72) { _this.CounterBasket.frame = 5; }
            else if (_this.counterGroup1.length == 80) { _this.CounterBasket.frame = 4; }
        }
        else {
            if (_this.counterGroup1.length == 16) { _this.CounterBasket.frame = 12; }
            else if (_this.counterGroup1.length == 32) { _this.CounterBasket.frame = 11; }
            else if (_this.counterGroup1.length == 40) { _this.CounterBasket.frame = 10; }
            else if (_this.counterGroup1.length == 48) { _this.CounterBasket.frame = 9; }
            else if (_this.counterGroup1.length == 64) { _this.CounterBasket.frame = 8; }
            else if (_this.counterGroup1.length == 80) { _this.CounterBasket.frame = 7; }
            else if (_this.counterGroup1.length == 96) { _this.CounterBasket.frame = 6; }
            else if (_this.counterGroup1.length == 112) { _this.CounterBasket.frame = 5; }
            else if (_this.counterGroup1.length == 128) { _this.CounterBasket.frame = 4; }
            else if (_this.counterGroup1.length == 144) { _this.CounterBasket.frame = 3; }
            else if (_this.counterGroup1.length == 160) { _this.CounterBasket.frame = 2; }
        }

    },

    Ask_Question2: function () {
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1A-G6-b.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
    },


    //    Ask_Question2:function()
    //    {        
    //        console.log("is small num is factor of big num");
    //
    //        _this.Question2 = document.createElement('audio');
    //        _this.Question2src = document.createElement('source');
    //        _this.Question2src.setAttribute("src", "questionSounds/NS-FM-1-G6/English/is.mp3");
    //        _this.Question2.appendChild(_this.Question2src);
    //        _this.Question2.play();
    //                
    //        _this.askSmallNumber(_this.Small_Num);
    //
    //         _this.time.events.add(2000,function()
    //         {
    //            _this.Question4 = document.createElement('audio');
    //            _this.Question4src = document.createElement('source');
    //            _this.Question4src.setAttribute("src", "questionSounds/NS-FM-1-G6/English/a_factor_of.mp3");
    //            _this.Question4.appendChild(_this.Question4src);       
    //           _this.Question4.play()
    //           _this.asknumber(_this.Big_Num);
    //         });
    //         //_this.time.events.add(2000,_this.asknumber(_this.Big_Num));
    //        
    //    },

    asknumber: function (target) {
        _this.tenth_Delay = 1000;
        _this.hundred_Delay = 1000;
        _this.digit_Delay = 1000;
        _this.time.events.add(1000, function () {
            if (target == 100) {
                _this.hundred_Delay += 500;
                _this.digit_Delay += 500;
                _this.Question9 = document.createElement('audio');
                _this.Question9src = document.createElement('source');
                _this.Question9src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/100.mp3");
                _this.Question9.appendChild(_this.Question9src);
                _this.Question9.play();
                target = 0;
                return;
            }

            if (target > 100) {
                _this.hundred_Delay += 500;
                _this.digit_Delay += 500;
                _this.Question8 = document.createElement('audio');
                _this.Question8src = document.createElement('source');
                _this.Question8src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/100 and.mp3");
                _this.Question8.appendChild(_this.Question8src);

                target = target - 100;
                _this.Question8.play();
            }




            if (target >= 20 || target == 10) {
                _this.tenth_Delay += 500;
                _this.digit_Delay += 1000;//done
                // console.log(_this.hundred_Delay);
                _this.time.events.add(_this.hundred_Delay, function () {
                    _this.Question7 = document.createElement('audio');
                    _this.Question7src = document.createElement('source');
                    switch (Math.floor(target / 10)) {
                        case 9: _this.Question7src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/90.mp3");

                            break;
                        case 8: _this.Question7src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/80.mp3");

                            break;
                        case 7: _this.Question7src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/70.mp3");
                            break;
                        case 6: _this.Question7src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/60.mp3");
                            break;
                        case 5: _this.Question7src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/50.mp3");
                            break;
                        case 4: _this.Question7src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/40.mp3");
                            break;
                        case 3: _this.Question7src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/30.mp3");

                            break;
                        case 2: _this.Question7src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/20.mp3");
                            break;
                        case 1: _this.Question7src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/10.mp3");
                            break;
                    }
                    _this.Question7.appendChild(_this.Question7src);
                    _this.Question7.play();

                });

            }

            if (target < 20 && target >= 11) {
                _this.time.events.add(_this.tenth_Delay, function () {
                    _this.Question6 = document.createElement('audio');
                    _this.Question6src = document.createElement('source');
                    switch (target) {
                        case 11: _this.Question6src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/11.mp3");
                            break;
                        case 12: _this.Question6src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/12.mp3");
                            break;
                        case 13: _this.Question6src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/13.mp3");
                            break;
                        case 14: _this.Question6src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/14.mp3");
                            break;
                        case 15: _this.Question6src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/15.mp3");
                            break;
                        case 16: _this.Question6src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/16.mp3");
                            break;
                        case 17: _this.Question6src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/17.mp3");
                            break;
                        case 18: _this.Question6src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/18.mp3");
                            break;
                        case 19: _this.Question6src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/19.mp3");
                            break;
                    }
                    _this.Question6.appendChild(_this.Question6src);
                    _this.Question6.play();

                });

            }

            else {
                _this.time.events.add(_this.digit_Delay, function () {

                    _this.Question5 = document.createElement('audio');
                    _this.Question5src = document.createElement('source');
                    switch (target % 10) {

                        case 1: _this.Question5src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/1.mp3");
                            break;
                        case 2: _this.Question5src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/2.mp3");
                            break;
                        case 3: _this.Question5src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/3.mp3");
                            break;
                        case 4: _this.Question5src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/4.mp3");
                            break;
                        case 5: _this.Question5src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/5.mp3");
                            break;
                        case 6: _this.Question5src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/6.mp3");
                            break;
                        case 7: _this.Question5src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/7.mp3");
                            break;
                        case 8: _this.Question5src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/8.mp3");
                            break;
                        case 9: _this.Question5src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/9.mp3");
                            break;

                    }
                    _this.Question5.appendChild(_this.Question5src);
                    _this.Question5.play();
                });

            }
        });

    },

    askSmallNumber: function (target) {
        _this.time.events.add(500, function () {
            _this.Question3 = document.createElement('audio');
            _this.Question3src = document.createElement('source');
            switch (target) {

                case 1: _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/1.mp3");
                    break;
                case 2: _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/2.mp3");
                    break;
                case 3: _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/3.mp3");
                    break;
                case 4: _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/4.mp3");
                    break;
                case 5: _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/5.mp3");
                    break;
                case 6: _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/6.mp3");
                    break;
                case 7: _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/7.mp3");
                    break;
                case 8: _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/8.mp3");

                    break;
                case 9: _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/9.mp3");
                    break;
                case 10: _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/English/10.mp3");
                    break;
            }
            _this.Question3.appendChild(_this.Question3src);
            _this.Question3.play();
        });

    },

    Ask_Question3: function () {
        // console.log("is small num is factor of big num");
        _this.Question3 = document.createElement('audio');
        _this.Question3src = document.createElement('source');
        _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1A-G6-c.mp3");
        _this.Question3.appendChild(_this.Question3src);
        _this.Question3.play();
    },

    ThumpsUpDownAppear: function () {
        _this.thumbs_Up = _this.add.sprite(800, 310, "thumbs_Up");
        _this.thumbs_Up.frame = 0;

        _this.thumbs_Down = _this.add.sprite(880, 310, "thumbs_Down");
        _this.thumbs_Down.frame = 0;

        _this.thumbs_Up.inputEnabled = true;
        _this.thumbs_Up.input.useHandCursor = true;
        _this.thumbs_Up.events.onInputDown.add(_this.ThumbsUpClicked, _this.thumbs_Up);

        _this.thumbs_Down.inputEnabled = true;
        _this.thumbs_Down.input.useHandCursor = true;
        _this.thumbs_Down.events.onInputDown.add(_this.ThumbsDownClicked, _this.thumbs_Down);

        //        _this.tick_btn.inputEnabled=true;
        //        _this.tick_btn.input.useHandCursor=true;
        //        _this.tick_btn.events.onInputDown.add(_this.TickBtnClicked,_this.tick_btn);

    },

    TweenCounters: function () {
        //* code this similar to TweenEggs.
        for (let i = 0; i < Math.floor(_this.Big_Num / _this.Small_Num); i++) {
            _this.time.events.add(580 * i, function () {
                for (var j = 0; j < _this.Small_Num; j++) {
                    //create an egg object line vertically/horizontally near the basket (one by one)       
                    //Add tween to the each of the object
                    //Add the object to a group (OnTrayObjectGroup)
                    moveCounter1 = _this.add.sprite(800, 215, 'counter');
                    moveCounter1.scale.setTo(1.13, 1.13);
                    //moveEgg1 = _this.trayGroup.create(800,235, 'egg');
                    moveCounter1.name = String(j);
                    _this.counterGroup1.addChild(moveCounter1);
                    _this.trayGroup.addChild(_this.counterGroup1);
                    _this.changingframe_counterBasket();

                    eggDragAction = _this.add.tween(moveCounter1);
                    eggDragAction.to({ x: _this.CounterX[i], y: _this.CounterY[j] }, 550, 'Linear', false, 0);
                    eggDragAction.start();
                }

            });

            _this.time.events.add(580 * i + 750, function () {
                _this.tweenSound.play();
            });

            //tween To: x,y of the tray (which can be got from the _this.eggX array, and its Y  )
            //Add a set 6 or 7 objects to the basket & send to back. (add to BasketContentGroup)
            //Remove one set of objects from the BasketContentGroup from front           
        }

        if (_this.Big_Num % _this.Small_Num == 0) {
            _this.time.events.add(700 * Math.floor(_this.Big_Num / _this.Small_Num), function () {
                _this.ShowRectangleOnCounters();

                _this.time.events.add(600, function () {

                    for (p = 0; p < _this.counterGroup1.length; p++) {
                        _this.purple_ctr = _this.counterGroup1.getChildAt(p).frame = 2;
                    }

                });

                if (_this.count1 == 0) {
                    _this.time.events.add(1200, function () {
                        _this.Ask_Question2();
                    });
                }


                _this.time.events.add(1800, function () {
                    _this.Question_flag = 1;
                    _this.rightbtn_is_Clicked = false;
                    _this.ThumpsUpDownAppear();
                });
            });
        }


        //* if there are remainders, move them to the tray as a set.
        if (_this.Big_Num % _this.Small_Num > 0) {
            i = Math.floor(_this.Big_Num / _this.Small_Num);
            _this.time.events.add(580 * i, function () {

                for (var j = 0; j < _this.Big_Num % _this.Small_Num; j++) {
                    //create an egg object line vertically/horizontally near the basket (one by one)       
                    //Add tween to the each of the object
                    //Add the object to a group (OnTrayObjectGroup)
                    moveCounter1 = _this.add.sprite(800, 215, 'counter');
                    //moveCounter1 = _this.add.sprite(_this.eggX[i],_this.eggY[j], 'egg');
                    moveCounter1.scale.setTo(1.13, 1.13);
                    //_this.moveCounter1.frame=0;
                    _this.counterGroup2.addChild(moveCounter1);
                    _this.trayGroup.addChild(_this.counterGroup2);

                    eggDragAction = _this.add.tween(moveCounter1);
                    eggDragAction.to({ x: _this.CounterX[i], y: _this.CounterY[j] }, 550, 'Linear', false, 0);
                    eggDragAction.start();

                }

                _this.time.events.add(550, function () {
                    _this.tweenSound.play();
                });

                _this.time.events.add(1800, function () {
                    _this.ShowRectangleOnCounters();
                    _this.time.events.add(800, function () {
                        for (p = 0; p < _this.counterGroup1.length; p++) {
                            _this.purple_ctr = _this.counterGroup1.getChildAt(p).frame = 2;
                        }
                    });

                    _this.time.events.add(1800, function () {
                        _this.counterChangeSound.play();
                        for (g = 0; g < _this.counterGroup2.length; g++) {
                            _this.green_counter = _this.counterGroup2.getChildAt(g);
                            //_this.green_counter.scale.setTo(1.1,1.1);
                            _this.green_counter.frame = 1;
                        }
                    });

                    if (_this.count1 == 0) {
                        _this.time.events.add(2300, function () {
                            _this.Ask_Question2();
                        });
                    }

                    _this.time.events.add(3000, function () {
                        _this.Question_flag = 1;
                        _this.rightbtn_is_Clicked = false;
                        _this.ThumpsUpDownAppear();
                    });
                });
            });

            //Tween To: x,y of the tray (which can be got from the _this.eggX array, and its Y  )           
        }

    },

    ShowRectangleOnCounters: function () {
        graphics = _this.add.graphics(100, 100);
        graphics.bringToTop = true;
        //_this.graphics.beginFill(0xFF3300);
        graphics.lineStyle(3, 0xffd900, 1);

        factor = Math.floor(_this.Big_Num / _this.Small_Num);
        rect = graphics.drawRect(63, 24, factor * 38.09, _this.Small_Num * 38.5, '#FF0000');
        //_this.rect.anchor.setTo(0.5);

        rect.visible = true;
        rect.bringToTop = true;

        //        _this.time.events.add(500,function()
        //        {
        //            rect.visible = false;
        //        });
        //
        //        _this.time.events.add(1000,function()
        //        {
        //            rect.visible = true;
        //        });
        //
        //        _this.time.events.add(1500,function()
        //        {
        //            rect.visible = false;
        //        });
        //
        //        _this.time.events.add(2000,function()
        //        {
        //            rect.visible = true;
        //        });

        _this.time.events.add(4000, function () {
            rect.visible = false;
        });

        //        _this.graphics.moveTo(50,50);
        //        _this.graphics.lineTo(250, 50);
        //        _this.graphics.lineTo(100, 100);
        //        _this.graphics.lineTo(250, 220);
        //        _this.graphics.lineTo(50, 220);
        //        _this.graphics.lineTo(50, 50);
        //_this.graphics.endFill();
        // console.log("the rectangle created: "+ _this.rect);
    },

    //* Thumbs up clicked function to run when user chooses thumbs up button on screen
    //* the object itself is passed as parameter target to this function
    ThumbsUpClicked: function (target) {
        // console.log("ThumbsUpClicked now");  
        _this.clickSound.play();
        _this.isThumbsUp = true;
        _this.isThumbsDown = false;

        //* change the frame of thumbsUp button on screen to indicate it is selected
        _this.thumbs_Up.frame = 1;

        //* change the frame of thumbsDown button to indicate it is de-selected
        _this.thumbs_Down.frame = 0;
        _this.tick_btn.visible = true;
        _this.tick_btn.inputEnabled = true;
        _this.tick_btn.input.useHandCursor = true;
        _this.tick_btn.events.onInputDown.add(_this.TickBtnClicked, _this.tick_btn);

    },

    ThumbsDownClicked: function (target) {
        //console.log("ThumbsDownClicked now");
        _this.clickSound.play();
        _this.isThumbsUp = false;
        _this.isThumbsDown = true;

        //* change the frame of thumbsDown button on screen to indicate it is selected
        _this.thumbs_Down.frame = 1;

        //* change the frame of thumbsUp button to indicate it is de-selected
        _this.thumbs_Up.frame = 0;
        _this.tick_btn.visible = true;
        _this.tick_btn.inputEnabled = true;
        _this.tick_btn.input.useHandCursor = true;
        _this.tick_btn.events.onInputDown.add(_this.TickBtnClicked, _this.tick_btn);
    },

    celebration: function () {
        //* if eggs are shown, then show all egs crack with a small delay
        //  console.log("inside celebration");
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
        if (_this.EggOrCounterArray[_this.EggOrCounterIndex] == 1) {
            _this.time.events.add(1000, function () {
                for (_this.j = 0; _this.j < _this.eggGroup1.length; _this.j++) {
                    _this.eggGroup1.getChildAt(_this.j).frame = 1;
                }
                //play sound for egg crack.
                _this.eggcrackingSound.play();
            });
        }

        else //* else if Counters are shown, there is no other action on screen
        {


        }
    },

    //* This is called when Right btn on the numberpad is clicked (while asking how many lines
    //* do you need? and what is the other factor?) 

    rightbtnClicked: function () {
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        _this.rightbtn_is_Clicked = true;
        if (_this.AskingLines == true) {
            _this.ValidateHowManyLines();
        }
        else if (this.AskingFactor == true) {
            _this.ValidateOtherFactor();
        }
    },

    //* validating the other factor entered on the keypad.
    ValidateOtherFactor: function () {
        if (_this.Big_Num / _this.Small_Num == Number('' + _this.selectedAns1 + _this.selectedAns2)) {
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.celebration();
            _this.Question_flag = -1;
            //increment the question number
            //increment the array indexes (for those which have 2 entries, reset if required)
            //clear the objects on screen
            _this.time.events.add(2000, function () {
                _this.clearInitialScreen();
                _this.thumbs_Up.destroy();
                _this.thumbs_Down.destroy();
                _this.tick_btn.visible = false;

                _this.ten_x_sixteen.destroy();
                _this.rightbtn_is_Clicked = false;

                //_this.trayGroup.removeChiidren();
                _this.trayGroup.destroy();
                if (_this.EggOrCounterArray[_this.EggOrCounterIndex] == 1) { _this.eggGroup1.destroy(); _this.eggGroup2.destroy(); _this.eggBasket.destroy(); }
                else { _this.counterGroup1.destroy(); _this.counterGroup2.destroy(); _this.CounterBasket.destroy(); }

            });
            _this.time.events.add(2500, function () {
                _this.nextquestion();
            });
        }
        else {
            _this.noofAttempts++;
            //wrong sound play
            //Reset the screen/clearn screen
            //clear the objects on screen
            _this.wrongSound.play();
            _this.clearInitialScreen();
            _this.thumbs_Up.destroy();
            _this.thumbs_Down.destroy();
            _this.tick_btn.visible = false;
            _this.trayGroup.destroy();
            _this.AnswerBox.destroy();
            _this.rightbtn_is_Clicked = false;
            _this.Question_flag = -1;
            if (_this.EggOrCounterArray[_this.EggOrCounterIndex] == 1) { _this.eggGroup1.destroy(); _this.eggGroup2.destroy(); _this.eggBasket.destroy(); }
            else { _this.counterGroup1.destroy(); _this.counterGroup2.destroy(); _this.CounterBasket.destroy(); }

            _this.gotoFactors();
        }
    },

    ValidateHowManyLines: function () {
        //* if selected number == small number, then give a sound & show the correct number of lines
        //* on the egg/counter tray. 
        //   console.log(_this.Small_Num);
        //    console.log(Number(''+_this.selectedAns1+_this.selectedAns2));

        if (_this.Small_Num == Number('' + _this.selectedAns1 + _this.selectedAns2)) {
            //_this.TrayResizeSound();
            _this.counterCelebrationSound.play(); //* to be coded. get a sound file and play it.

            //* remove the original egg/Counter tray from the screen

            //_this.objGroup.destroy();
            _this.numGroup.destroy();
            _this.AnswerBox.visible = false;

            //remove the numberpad from screen

            _this.LoadTray(); //* Load the tray of egg or counter with appropriate size

            _this.AddBasket(); //* Add the basket on screen
        }
        else {
            _this.wrongSound.play();
            //* Clear the screen and start the question again
            _this.clearInitialScreen(); //* to be coded, remove the objects on screen & restart.
            //* same Question to be asked again - call startQuestion function to restart.
            _this.ten_x_sixteen.visible = false;

            _this.Question_flag = -1;
            _this.time.events.add(1000, _this.gotoFactors);//* call the initial function to load the questions again.
        }
    },

    //* Tick button is clicked after selecting one of thumbs up or down. if none selected, give error.
    //* Validate when thumbps up or down is pressed.
    TickBtnClicked: function () {
        _this.clickSound.play();
        _this.tick_btn.inputEnabled = false;
        //_this.tick_btn.input.useHandCursor=false;
        _this.tick_btn.frame = 0;
        _this.thumbs_Up.inputEnabled = false;
        _this.thumbs_Down.inputEnabled = false;

        if (_this.isThumbsUp || _this.isThumbsDown) {
            //* if it has remainders, then expected to click thumbs down
            //* then question ends here.
            if (_this.Big_Num % _this.Small_Num > 0 && _this.isThumbsDown) {
                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
    
                _this.celebration();
                _this.Question_flag = -1;
                //increment the question number
                //increment the array indexes (for those which have 2 entries, reset if required)
                //clear the objects on screen

                _this.time.events.add(3000, function () {
                    _this.clearInitialScreen();
                    _this.thumbs_Up.destroy();
                    _this.thumbs_Down.destroy();
                    _this.tick_btn.visible = false;
                    _this.AnswerBox.destroy();

                    _this.ten_x_sixteen.destroy();
                    //_this.trayGroup.removeChiidren();
                    _this.trayGroup.destroy();
                    _this.rightbtn_is_Clicked = false;
                    _this.tick_btn.frame = 1;
                    if (_this.EggOrCounterArray[_this.EggOrCounterIndex] == 1) { _this.eggGroup1.destroy(); _this.eggGroup2.destroy(); _this.eggBasket.destroy(); }
                    else { _this.counterGroup1.destroy(); _this.counterGroup2.destroy(); _this.CounterBasket.destroy(); }
                });
                _this.time.events.add(4000, function () {
                    _this.nextquestion();
                });

            }
            //* otherwise, if there are no remainders, then expected to click thumbs up
            else if (_this.Big_Num % _this.Small_Num == 0 && _this.isThumbsUp) {

                //Ask the question 'what is the other factor'
                //   console.log("wt is the othr factor: Big, small: "+ _this.Big_Num + " " + _this.Small_Num );
                if (_this.count1 == 0) _this.Ask_Question3();
                _this.Question_flag = 2;


                _this.AskingLines = false;  //* set the flag false since now its for asking other factor
                _this.AskingFactor = true;  //* set the flag true since its for asking other factor Q
                //remove the thumbsup/down from the screen
                _this.eraseScreen();

                //Show the number pad         //* to enter the other factor
                _this.addNumberPad();
                _this.AnswerBox.visible = true;
                _this.tick_btn.visible = false;
                _this.thumbs_Up.visible = false;
                _this.thumbs_Down.visible = false;
                //_this.ten_x_sixteen.visible=false;
                trayDragAction = _this.add.tween(_this.trayGroup);
                trayDragAction.to({ x: 0, y: -53 }, 1000, 'Linear', false, 0);
                trayDragAction.start();

            }
            //* otherwise, if the remainders == 0, but thumbsDown OR remainders > 0; thumpsUp
            else {
                _this.noofAttempts++;
                //wrong sound play
                _this.wrongSound.play();
                //Reset the screen/clearn screen
                //clear the objects on screen
                _this.clearInitialScreen();
                _this.thumbs_Up.destroy();
                _this.thumbs_Down.destroy();
                _this.tick_btn.visible = false;
                _this.AnswerBox.destroy();
                _this.ten_x_sixteen.destroy();
                _this.trayGroup.destroy();
                _this.rightbtn_is_Clicked = false;

                if (_this.EggOrCounterArray[_this.EggOrCounterIndex] == 1) { _this.eggGroup1.destroy(); _this.eggGroup2.destroy(); _this.eggBasket.destroy(); }
                else { _this.counterGroup1.destroy(); _this.counterGroup2.destroy(); _this.CounterBasket.destroy(); }
                _this.ten_x_sixteen.destroy();
                _this.Question_flag = -1;
                _this.gotoFactors();
            }
        }
        else {
            //give wrong sound;
            _this.wrongSound.play();

            //Reset the screen/clearn screen
            //clear the objects on screen
            _this.clearInitialScreen();
            _this.thumbs_Up.destroy();
            _this.thumbs_Down.destroy();
            _this.tick_btn.visible = false;
            _this.AnswerBox.destroy();
            _this.ten_x_sixteen.destroy();
            _this.trayGroup.destroy();
            _this.rightbtn_is_Clicked = false;
            _this.Question_flag = -1;
            if (_this.EggOrCounterArray[_this.EggOrCounterIndex] == 1) { _this.eggGroup1.destroy(); _this.eggGroup2.destroy(); _this.eggBasket.destroy(); }
            else { _this.counterGroup1.destroy(); _this.counterGroup2.destroy(); _this.CounterBasket.destroy(); }
            _this.ten_x_sixteen.destroy();

            _this.gotoFactors();
        }
    },

    nextquestion: function () {
        
        if (_this.count1 < 3) {
            _this.sceneCount ++;
            _this.noofAttempts=0;
            _this.AnsTimerCount =0;

            _this.Question_flag = -1;
            _this.rightbtn_is_Clicked = false;
            _this.randomizing_elements();
            _this.gotoFactors();

        }
        //        else
        //        {
        //            _this.timer1.stop();
        //            _this.timer1=null;
        //            _this.time.events.add(2000,function(){ _this.state.start('NS_INT_G6Menu')});
        //
        //        }
        else {
            _this.timer1.stop();
            _this.stopVoice();

            _this.state.start('NS_FM_2_G6level1', false, false, _this.minutes, _this.seconds, _this.counterForTimer);
        }
    },

    //* Add the egg/counter tray to the screen based on the selection done earlier
    //* Depending on the lines selected (small number), show appropriate object on screen
    LoadTray: function () {
        //  console.log("inside LoadTray");
        _this.ten_x_sixteen.visible = false;
        if (_this.EggOrCounterArray[_this.EggOrCounterIndex] == 1)// && _this.HzOrVert == 1)  //* show egg tray horizontally.
        {
            switch (_this.Small_Num)  //* based on the number of lines to be shown, show the tray
            {
                case 2: //console.log("2 row");
                    _this.two_x_sixteen = _this.trayGroup.create(153, 100, '2x16');
                    _this.two_x_sixteen.visible = true;
                    break;
                case 3: //console.log("3 row");
                    _this.three_x_sixteen = _this.trayGroup.create(153, 98, '3x16');
                    _this.three_x_sixteen.visible = true;
                    break;
                case 4: //console.log("4 row");
                    _this.four_x_sixteen = _this.trayGroup.create(151, 95, '4x16');
                    _this.four_x_sixteen.visible = true;
                    break;
                case 5: //console.log("5 row");
                    _this.five_x_sixteen = _this.trayGroup.create(152, 101, '5x16');
                    _this.five_x_sixteen.visible = true;
                    break;
                case 6: //console.log("6 row");
                    _this.six_x_sixteen = _this.trayGroup.create(152, 100, '6x16');
                    _this.six_x_sixteen.visible = true;
                    break;
                case 7: //console.log("7 row");
                    _this.seven_x_sixteen = _this.trayGroup.create(152, 100, '7x16');
                    _this.seven_x_sixteen.visible = true;
                    break;
                case 8: //console.log("8 row");
                    _this.eight_x_sixteen = _this.trayGroup.create(152, 96, '8x16');
                    _this.eight_x_sixteen.visible = true;
                    break;
                case 9:  //console.log("9 row");
                    _this.nine_x_sixteen = _this.trayGroup.create(153, 100, '9x16');
                    _this.nine_x_sixteen.visible = true;
                    break;
                case 10: //console.log("10 row");
                    _this.ten_x_sixteen.visible = true;
                    break;
            }
        }
        else if (_this.EggOrCounterArray[_this.EggOrCounterIndex] == 2)// && _this.HzOrVert == 2) // show the egg tray vertically
        {
            switch (_this.Small_Num)  //* based on the number of lines to be shown, show the tray
            {
                case 2: //console.log("2 row");
                    _this.two_x_sixteen = _this.trayGroup.create(152, 96, 'counter_2x16');
                    _this.two_x_sixteen.visible = true;
                    break;
                case 3: //console.log("3 row");
                    _this.three_x_sixteen = _this.trayGroup.create(152, 100, 'counter_3x16');
                    _this.three_x_sixteen.visible = true;
                    break;
                case 4: //console.log("4 row");
                    _this.four_x_sixteen = _this.trayGroup.create(153, 102, 'counter_4x16');
                    _this.four_x_sixteen.visible = true;
                    break;
                case 5: //console.log("5 row");
                    _this.five_x_sixteen = _this.trayGroup.create(151, 96, 'counter_5x16');
                    _this.five_x_sixteen.visible = true;
                    break;
                case 6: //console.log("6 row");
                    _this.six_x_sixteen = _this.trayGroup.create(152, 100, 'counter_6x16');
                    _this.six_x_sixteen.visible = true;
                    break;
                case 7: //console.log("7 row");
                    _this.seven_x_sixteen = _this.trayGroup.create(152, 102, 'counter_7x16');
                    _this.seven_x_sixteen.visible = true;
                    break;
                case 8: //console.log("8 row");
                    _this.eight_x_sixteen = _this.trayGroup.create(152, 96, 'counter_8x16');
                    _this.eight_x_sixteen.visible = true;
                    break;
                case 9: //console.log("9 row");
                    _this.nine_x_sixteen = _this.trayGroup.create(151, 100, 'counter_9x16');
                    _this.nine_x_sixteen.visible = true;
                    break;
                case 10: //console.log("10 row");
                    _this.ten_x_sixteen.visible = true;
                    break;
            }
        }
        /*else if(_this.EggOrCounter == 2 && _this.HzOrVert == 1) //* show the counter tray horizontally
        {
            switch (_this.Small_Num)  //* based on the number of lines to be shown, show the tray
            {
                    
            }
        }
        else if(_this.EggOrCounter == 2 && _this.HzOrVert == 2) //* show the counter tray vertically
        {
            switch (_this.Small_Num)  //* based on the number of lines to be shown, show the tray
            {
                    
            }
        }*/

    },

    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        // //_this.anim.play();
        // _this.userHasPlayed = 1;
        // _this.game_id = 'NS_FM_1_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Numbers";
        _this.microConcepts = "Number Systems";
        _this.count1++;
        anim.play();
    },


    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },

    stopAudio: function () {
        if (_this.dv1Timer) clearTimeout(_this.dv1Timer);
        if (_this.dv2Timer) clearTimeout(_this.dv2Timer);
        if (_this.dv3Timer) clearTimeout(_this.dv3Timer);

        if (_this.demoAudio1) {
            console.log("removing the audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.demoAudio2) {
            console.log("removing the audio2");
            _this.demoAudio2.pause();
            _this.demoAudio2.removeEventListener('ended', _this.dA2);
            _this.demoAudio2 = null;
            _this.demoAudio2src = null;
        }

        if (_this.demoAudio3) {
            console.log("removing the audio3");
            _this.demoAudio3.pause();
            _this.demoAudio3.removeEventListener('ended', _this.dA3);
            _this.demoAudio3 = null;
            _this.demoAudio3src = null;
        }

        if (_this.q1Sound) {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound.removeEventListener('ended', _this.q1S);
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }

        if (_this.q2Sound) {
            console.log("removing the q2");
            _this.q2Sound.pause();
            _this.q2Sound.removeEventListener('ended', _this.q2S);
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
            _this.q4Sound.removeEventListener('ended', _this.q4S);
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }

        if (_this.q5Sound) {
            console.log("removing the q5");
            _this.q5Sound.pause();
            _this.q5Sound.removeEventListener('ended', _this.q5S);
            _this.q5Sound = null;
            _this.q5Soundsrc = null;
        }
        _this.skip.events.onInputDown.removeAll();
    },

    dA1: function () {
        console.log("audi1 ended - executing un-pause of video1");
        _this.demoVideo_1.playbackRate = 1;              //* let video play now (for 1 second)
        _this.demoAudio2.play();                         //* start audio 2.
        // _this.time.events.add(2500, function()           //* pause video after 2.5sec while showing rect box
        // {
        //     console.log("2.5sec - executing pause of video1");
        //     _this.demoVideo_1.playbackRate = 0;
        // });
    },

    dA2: function () {
        console.log("audio2 ended - pause video1");
        if (_this.demoVideo_1) _this.demoVideo_1.stop(false);
        _this.demoVideo_2.play(false);
        _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-1-G6_2.mp4");  //* phaser needs this.to run in mobile
        _this.video_playing = 2;
        _this.demoVideo_2.addToWorld();
        //_this.backbtn.bringToTop();               //* bring backbtn and skip to top.
        _this.skip.bringToTop();

        //* ask 1st question here.bit delay for video to pl.
        _this.time.events.add(800, function () { _this.q1Sound.play() });

        _this.time.events.add(1500, function ()           //* pause video after 1.5sec for Question to complete
        {
            console.log("1.5sec - executing pause of video2");
            _this.demoVideo_2.playbackRate = 0;
        });
    },

    q1S: function () {
        // console.log("Q1 over - executing un-pause of video2");
         _this.demoVideo_2.playbackRate = 1;
         _this.dv3Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 27 seconds.
         {
             console.log("inside q2sound.....")
             clearTimeout(_this.dv3Timer);
             _this.demoVideo_2.playbackRate = 0; 
             _this.q2Sound.play();
         }, 9000);
         
        //_this.time.events.add(9000, function()           //* after 8 seconds, ask 2nd question. pause video2
        // {
        // _this.demoVideo_2.playbackRate = 0;
        // console.log("1.5sec - executing pause of video2");
        // _this.q2Sound.play();
        // });
    },

    q2S: function () {
         _this.demoVideo_2.playbackRate = 1;         //* continue the video
        _this.demoAudio3.play();                  //* play 3rd audio which shows full rectangle
    },

    dA3: function () {
        _this.q3Sound.play();
    },


    q4S: function () {
        // _this.demoVideo_3.playbackRate = 1;     //* unpause the video3, let it play for 5 seconds
        // _this.time.events.add(5000, function()
        // {
        //  _this.demoVideo_3.playbackRate = 0;
        _this.q5Sound.play();           //* ask if the given option is a factor.
        // });
    },

    q5S: function () {
        _this.demoVideo_3.playbackRate = 1;   //* let the video continue till the end
    },



    DemoVideo: function () {

        _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src", window.baseUrl + "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.screen_opening = document.createElement('audio');
        _this.screen_openingsrc = document.createElement('source');
        _this.screen_openingsrc.setAttribute("src", window.baseUrl + "sounds/screen opening.wav");
        _this.screen_opening.appendChild(_this.screen_openingsrc);

        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1-G6 demo 1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1-G6 demo 2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1-G6 demo 3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        //* enter the number of lines you need.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1A-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* is the smaller number factor of bigger number
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1A-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* wht is the other factor here
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1A-G6-c.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //* find if the options are factors of the given number.
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-2-G6/" +
            _this.languageSelected + "/NS-FM-1B-G6-a.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        //* is the selected option a factor of the bigger number.
        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-2-G6/" +
            _this.languageSelected + "/NS-FM-1B-G6-b.mp3");
        _this.q5Sound.appendChild(_this.q5Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 490, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.stopAudio();
            if (_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if (_this.videoWorld1)
                _this.videoWorld1.destroy();

            if (_this.demoVideo_2)
                _this.demoVideo_2.stop(false);
            if (_this.videoWorld2)
                _this.videoWorld2.destroy();

            if (_this.demoVideo_3)
                _this.demoVideo_3.stop(false);
            if (_this.videoWorld3)
                _this.videoWorld3.destroy();
            _this.game.paused = false;  //* restart the game
        });

    },

    showDemoVideo: function () { 

        _this.demoVideo_1 = _this.add.video('fm_1_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-1-G6_1.mp4");
        _this.video_playing = 1;
        _this.demoVideo_1.addToWorld();

        _this.demoAudio1.play();

        // _this.time.events.add(3000, function()       //* pause video after 3 seconds to show rectangle box 
        // {
        //     console.log("3sec - executing pause of video1");
        //     _this.demoVideo_1.playbackRate = 0; 
        // });
          
        _this.dv1Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 27 seconds.
        {
            console.log("inside q2sound.....")
            clearTimeout(_this.dv1Timer);
            _this.demoVideo_1.playbackRate = 0; 
        }, 3000);

        _this.demoAudio1.addEventListener('ended', _this.dA1);

        _this.demoVideo_2 = _this.add.video('fm_1_2');

        _this.demoVideo_1.onComplete.add(function () {
            if (_this.demoVideo_1) _this.demoVideo_1.stop(false);
            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-1-G6_2.mp4");  //* phaser needs this.to run in mobile
            _this.video_playing = 2;
            _this.demoVideo_2.addToWorld();

            _this.skip.bringToTop();
            _this.demoAudio2.addEventListener('ended',function()
            {
                _this.q1Sound.play();
            });

                 
        _this.dv2Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 27 seconds.
        {
            console.log("inside q2sound.....")
            clearTimeout(_this.dv2Timer);
            _this.demoVideo_2.playbackRate = 0; 
        }, 1500);
       
            //   _this.time.events.add(1500, function()           //* pause video after 1.5sec for Question to complete
            //         {
            //             console.log("1.5sec - executing pause of video2");
            //             _this.demoVideo_2.playbackRate = 0;
            //         });

            _this.q1Sound.addEventListener('ended', _this.q1S);
            _this.q2Sound.addEventListener('ended', _this.q2S);
            _this.demoAudio3.addEventListener('ended', _this.dA3);

            _this.demoVideo_3 = _this.add.video('fm_1_3');

            _this.demoVideo_2.onComplete.add(function () {
                console.log("completing video 2, playing v3");
                if (_this.demoVideo_2) _this.demoVideo_2.stop(false);

                _this.demoVideo_3.play(false);        //* start playing video3 of fm2 game
                _this.demoVideo_3.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-1-G6_3.mp4");
                _this.video_playing = 3;
                _this.demoVideo_3.addToWorld();

                _this.q4Sound.play();

                // _this.time.events.add(2000, function()   //* pause the video after 2 seconds
                // {
                //     _this.demoVideo_3.playbackRate = 0;
                // });
                _this.skip.bringToTop();

                _this.q4Sound.addEventListener('ended', _this.q4S);

                //_this.q5Sound.addEventListener('ended', _this.q5S);

                _this.demoVideo_3.onComplete.add(function ()  //* after video3 is done, start the game
                {
                    if (_this.demoVideo_3) _this.demoVideo_3.stop(false);
                    _this.stopAudio();

                    if (_this.videoWorld1) _this.videoWorld1.destroy();
                    if (_this.videoWorld2) _this.videoWorld2.destroy();
                    if (_this.videoWorld3) _this.videoWorld3.destroy();

                    if (_this.demoVideo_1)
                        _this.demoVideo_1.stop(false);

                    if (_this.demoVideo_2)
                        _this.demoVideo_2.stop(false);

                    if (_this.demoVideo_3)
                        _this.demoVideo_3.stop(false);

                    _this.game.paused = false;
                });
            });

        });

    }
}