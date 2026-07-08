Game.NS_FM_2_G6level1 = function () { };

Game.NS_FM_2_G6level1.prototype =
{
    init: function (minutes, seconds, counterForTimer) {
        _this = this;

        //* language is passed as parameter.
        _this.languageSelected = window.languageSelected;

        if (_this.languageSelected == null
            || _this.languageSelected == " "
            || _this.languageSelected == "") {
            _this.languageSelected = "English";
        }
        else console.log("Language selected: " + _this.languageSelected);

        _this.seconds = seconds;
        _this.minutes = minutes;
        _this.counterForTimer = counterForTimer;

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

        _this.counterColorchange = document.createElement('audio');
        _this.counterColorchangesrc = document.createElement('source');
        _this.counterColorchangesrc.setAttribute("src", window.baseUrl + "sounds/colour_change.mp3");
        _this.counterColorchange.appendChild(_this.counterColorchangesrc);

        _this.deletefactorSound = document.createElement('audio');
        _this.deletefactorSoundsrc = document.createElement('source');
        _this.deletefactorSoundsrc.setAttribute("src", window.baseUrl + "sounds/Game_Asset_Disappear-new.mp3");
        _this.deletefactorSound.appendChild(_this.deletefactorSoundsrc);

        _this.TraySound = document.createElement('audio');
        _this.TraySoundsrc = document.createElement('source');
        _this.TraySoundsrc.setAttribute("src", window.baseUrl + "sounds/Egg_Counter_onTray.mp3");
        _this.TraySound.appendChild(_this.TraySoundsrc);

        _this.crackSound = document.createElement('audio');
        _this.crackSoundsrc = document.createElement('source');
        _this.crackSoundsrc.setAttribute("src", window.baseUrl + "sounds/egg_cracking.wav");
        _this.crackSound.appendChild(_this.crackSoundsrc);

        _this.boxHighlight = document.createElement('audio');
        _this.boxHighlightsrc = document.createElement('source');
        _this.boxHighlightsrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.boxHighlight.appendChild(_this.boxHighlightsrc);

       // telInitializerbbpp.gameIdInit("NS_FM_1_G6", gradeSelected);
    },


    create: function (game) {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
         _this.sceneCount = 3;
        _this.questionid = null;

        //* initialize to 3 since already 3 stars are given in FM1 game.
        _this.count1 = 3;

        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        //        _this.seconds = 0;
        //        _this.minutes = 0;
        //
        //        _this.counterForTimer = 0;
        // //* this is  for BBplus app 
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.grade;
        // _this.gradeTopics;
         _this.microConcepts; 
        // _this.score = 3;

        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NS_FM_1_G6";
        // _this.grade = "6";
        // _this.gradeTopics = 'Numbers';
        // _this.microConcepts = 'Number Systems';

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        _this.Question_flag = -1;


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
                    _this.Choosefactors();
                }
                else if (_this.Question_flag == 1) {
                    _this.Ask_Question();
                }
                else if (_this.Question_flag == 2) {
                    _this.Ask_Question2();
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

        //* display the stars from oe FM1 game.
        _this.FM1stars1 = _this.add.sprite(390, 10, 'starAnim');//_this.world.centerX-20
        _this.FM1stars1.frame = 35;
        _this.FM1stars2 = _this.add.sprite(420, 10, 'starAnim');//_this.world.centerX-20
        _this.FM1stars2.frame = 35;
        _this.FM1stars3 = _this.add.sprite(450, 10, 'starAnim');//_this.world.centerX-20
        _this.FM1stars3.frame = 35;

        _this.apcount = 0;
        _this.amcount = 0;

        _this.time.events.add(2000, _this.getQuestion);

        _this.factorX = [790, 844];
        _this.factorY = [122, 175];

        _this.eraserX = [790];
        _this.eraserY = [232];

        _this.placeEggX = [100, 138, 177, 214, 253,
            291, 329, 367, 405, 444, 482,
            519, 558, 596, 634, 673];
        _this.placeEggY = [102, 140, 178, 217, 256, 293, 332, 370, 408, 447];

        _this.placeSweetX = [96, 134, 172, 210, 249, 287, 325, 363, 401, 440, 478, 516, 554, 592, 630, 669];
        _this.placeSweetY = [99, 138, 176, 215, 254, 291, 330, 368, 406, 444];

        //        _this.placeSweetX=[103,141,180,218,256,294,332,370,408,447,485,523,561,600,637,676];
        //        _this.placeSweetY=[105,144,182,221,260,297,336,374,412,451];

        _this.elementindex = 0; // index to element

        _this.eggcounterindex = 0; // index for selecting egg or apple

        _this.factorGroup = _this.add.group(); // this stores all the factors to be displayed on the screen

        _this.eggGroup = _this.add.group(); // this stores eggs to be displayed on tray

        _this.sweetGroup = _this.add.group(); // this stores apple to be displayed on tray

        _this.factorNumGroup = _this.add.group(); //this stores the factors displayed on screen

        _this.currentFactorIndx = 0;//set the factor index to 0

        _this.crackeggGroup = _this.add.group();

        _this.changesweetGroup = _this.add.group();

        _this.factorGroup;
        _this.factorNumGroup;

        _this.twoMoreFactor = 0;
        _this.twoOrMoreFactor = [1, 2, 3];
        _this.FactorArray = [];
        _this.NonFactorArray = [];
        _this.combinationArray = [1, 2, 3];
        _this.numberBoxPlacing = [];
        _this.row = 0;
        _this.col = 0;

        _this.currentFactorBox;

        _this.rightbtn = _this.add.sprite(830, 460, 'Rightbtn');
        _this.rightbtn.visible = false;
        _this.rightbtn.frame = 1;

        _this.enablingFor_last = 0;

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

        // element,eggs/apple, prime/composite,for audio question is it a prime or composite
        _this.randomizing_elements();
        _this.gotoNumbers();

        _this.questionid =1;
    },

    stopVoice: function () {

        if (_this.Question) {
            _this.Question = null;
            _this.Questionsrc = null;
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

    gotoNumbers: function () {
        _this.sceneCount ++;
        _this.noofAttempts=0;
        _this.AnsTimerCount =0;

        _this.currentFactorIndx = 0;
        _this.twoMoreFact = _this.twoOrMoreFactor[_this.twoMoreFactor];

        if (_this.twoMoreFact == 1) {
            _this.element = _this.elementArray1[_this.elementindex];
            _this.displayOnscreen();
            _this.getFactors1();
        }
        else if (_this.twoMoreFact == 2) {
            _this.element = _this.elementArray2[_this.elementindex];
            _this.displayOnscreen();
            _this.getFactors2();
        }
        else {
            _this.element = _this.elementArray3[_this.elementindex];
            _this.displayOnscreen();
            _this.getFactors3();
        }

    },

    // display redBox, egg/apple tray on screen
    displayOnscreen: function () {
        if (_this.egg_or_counterArray[_this.eggcounterindex] == 1) {
            _this.initialTray = _this.add.image(83, 80, 'EggTray');
        }
        else {
            _this.initialTray = _this.add.image(85, 87, 'CounterTray');
        }

        _this.redBox = _this.add.image(10, 90, 'RedBox');
        _this.redBox.visible = true;
        _this.mainBox = _this.add.image(772, 110, 'MainBox');
        _this.mainBox.scale.setTo(0.75);
        _this.mainBox.scale.y = 0.5;

        _this.Txt = _this.add.text(30, 105, _this.element);
        _this.Txt.fill = '#FFFFFF';

    },

    getFactors1: function () {
        _this.combinationArray = [2];
        switch (_this.element) {
            case 35:
                _this.FactorArray = [5, 7];
                _this.NonFactorArray = [4, 6, 8, 9, 10];
                break;

            case 50:
                _this.FactorArray = [5, 10];
                _this.NonFactorArray = [6, 7, 8, 9];
                break;

            case 63:
                _this.FactorArray = [7, 9];
                _this.NonFactorArray = [5, 6, 8, 10];
                break;

            case 64:
                _this.FactorArray = [4, 8];
                _this.NonFactorArray = [6, 7, 9, 10];
                break;

            case 84:
                _this.FactorArray = [6, 7];
                _this.NonFactorArray = [8, 9, 10];
                break;

            case 96:
                _this.FactorArray = [6, 8];
                _this.NonFactorArray = [7, 9, 10];
                break;

        }
        _this.combinationArray[0];
        _this.factorNonfactorCombination();

    },

    getFactors2: function () {
        _this.combinationArray = [1, 2];
        _this.combinationArray = _this.shuffle(_this.combinationArray);
        switch (_this.element) {
            case 16:
                _this.FactorArray = [2, 4, 8];
                _this.NonFactorArray = [3, 5, 6, 7, 9, 10];
                break;

            case 28:
                _this.FactorArray = [2, 4, 7];
                _this.NonFactorArray = [3, 5, 6, 8, 9, 10];
                break;

            case 32:
                _this.FactorArray = [2, 4, 8];
                _this.NonFactorArray = [3, 5, 6, 7, 9, 10];
                break;

            case 42:
                _this.FactorArray = [3, 6, 7];
                _this.NonFactorArray = [4, 5, 8, 9, 10];
                break;

            case 45:
                _this.FactorArray = [3, 5, 9];
                _this.NonFactorArray = [4, 6, 7, 8, 10];
                break;

            case 56:
                _this.FactorArray = [4, 7, 8];
                _this.NonFactorArray = [5, 6, 9, 10];
                break;

            case 70:
                _this.FactorArray = [5, 7, 10];
                _this.NonFactorArray = [6, 8, 9];
                break;

            case 72:
                _this.FactorArray = [6, 8, 9];
                _this.NonFactorArray = [7, 10];
                break;

            case 80:
                _this.FactorArray = [5, 8, 10];
                _this.NonFactorArray = [6, 7, 9];
                break;

            case 90:
                _this.FactorArray = [6, 9, 10];
                _this.NonFactorArray = [7, 8];
                break;

        }
        _this.combinationArray[0];
        _this.factorNonfactorCombination();

    },

    getFactors3: function () {
        switch (_this.element) {
            case 12:
                _this.FactorArray = [2, 3, 4, 6];
                _this.NonFactorArray = [5, 7, 8, 9, 10];
                break;

            case 18:
                _this.FactorArray = [2, 3, 6, 9];
                _this.NonFactorArray = [4, 5, 7, 8, 10];
                break;

            case 20:
                _this.FactorArray = [2, 4, 5, 10];
                _this.NonFactorArray = [3, 6, 7, 8, 9];
                break;

            case 24:
                _this.FactorArray = [2, 3, 4, 6, 8];
                _this.NonFactorArray = [5, 7, 9, 10];
                break;

            case 30:
                _this.FactorArray = [2, 3, 5, 6, 10];
                _this.NonFactorArray = [4, 7, 8, 9];
                break;

            case 36:
                _this.FactorArray = [3, 4, 6, 9];
                _this.NonFactorArray = [5, 7, 8, 10];
                break;

            case 40:
                _this.FactorArray = [4, 5, 8, 10];
                _this.NonFactorArray = [6, 7, 9];
                break;

            case 48:
                _this.FactorArray = [3, 4, 6, 8];
                _this.NonFactorArray = [5, 7, 9, 10];
                break;

            case 60:
                _this.FactorArray = [4, 5, 6, 10];
                _this.NonFactorArray = [7, 8, 9];
                break;
        }
        _this.factorNonfactorCombination();
    },


    factorNonfactorCombination: function () {
        _this.combinationArray = _this.shuffle(_this.combinationArray);
        _this.FactorArray = _this.shuffle(_this.FactorArray);
        _this.NonFactorArray = _this.shuffle(_this.NonFactorArray);

        if (_this.combinationArray[0] == 1) {
            _this.factorNonfactorArray = [0, 1, 1, 1];
        }
        else if (_this.combinationArray[0] == 2) {
            _this.factorNonfactorArray = [0, 0, 1, 1];
        }
        else {
            _this.factorNonfactorArray = [1, 1, 1, 1];
        }
        _this.factorNonfactorArray = _this.shuffle(_this.factorNonfactorArray);
        _this.getFactorCombination();

    },

    getFactorCombination: function () {
        var j = 0;
        var k = 0;
        for (var i = 0; i < 4; i++) {
            if (_this.factorNonfactorArray[i] == 1) {
                _this.questionNumber = _this.FactorArray[j];
                j++;
            }
            else {
                _this.questionNumber = _this.NonFactorArray[k];
                k++;
            }

            _this.numberBoxPlacing[i] = _this.questionNumber;
            _this.numberBoxPlacing.sort((a, b) => a - b);
        }
        _this.displayFactorNumbers();
        _this.checkFactor();
    },

    displayFactorNumbers: function () {
        _this.factorGroup = _this.add.group();
        _this.factorNumGroup = _this.add.group();
        var row = 0;
        var col = 0;
        for (i = 0; i < 4; i++) {
            _this.factorbox = _this.add.sprite(_this.factorX[row], _this.factorY[col], 'FactorBox');
            _this.factorbox.scale.setTo(1);

            if (_this.numberBoxPlacing[i] < 10) {
                _this.factorTxt = _this.add.text(20, 13, _this.numberBoxPlacing[i]);
            }
            else {
                _this.factorTxt = _this.add.text(13, 13, _this.numberBoxPlacing[i]);
            }
            _this.factorbox.name = _this.numberBoxPlacing[i];
            _this.factorbox.addChild(_this.factorTxt);
            _this.factorGroup.addChild(_this.factorbox);

            row += 1;

            if (row >= 2) {
                row = 0;
                col = col + 1;
            }
        }

        _this.displayEraser();
    },

    displayEraser: function () {
        _this.eraser = _this.add.sprite(790, 228, 'Eraser');
        _this.eraser.scale.setTo(1.04);

        //* setting eraser visible to false since it not required as per desing change.
        //* eraser functions are retained. We need to perform the same actions when eraser was 
        //* pressed.
        _this.eraser.visible = false;
    },

    checkFactor: function () {

        if (_this.count1 == 3) _this.Choosefactors();   //* only for the 1st question ask this question

        _this.Question_flag = 0;
        _this.highlightFactor();
    },

    highlightFactor: function () {
        _this.currentFactorBox = _this.factorGroup.getChildAt(_this.currentFactorIndx);
        _this.time.events.add(500, function () {
            //console.log("IIIIIIIIIIIIIIIIinside highlight factor Q#: " + _this.count1);
            _this.boxHighlight.play();
            _this.currentFactorBox.frame = 1;
            _this.currentFactorBox.inputEnabled = true;

            _this.currentFactorBox.input.useHandCursor = true;
            _this.currentFactorBox.events.onInputDown.add(_this.factorClicked, _this.currentFactorBox);
        });
    },

    factorClicked: function (SquareBox) {
        _this.eraser.frame = 0;
        _this.eraser.inputEnabled = false;

        _this.crackeggGroup.destroy();
        _this.changesweetGroup.destroy();

        _this.currentFactorBox.inputEnabled = false;
        //_this.currentFactorBox.input.useHandCursor = false;
        _this.truncateTray();
        _this.eggGroup = _this.add.group();
        _this.crackeggGroup = _this.add.group();


        _this.sweetGroup = _this.add.group();
        _this.changesweetGroup = _this.add.group();

        if (_this.egg_or_counterArray[_this.eggcounterindex] == 1) {
            _this.TweenEggs();
        }
        else {
            _this.TweenSweets();
        }
    },

    truncateTray: function () {
        _this.initialTray.destroy();

        if (_this.egg_or_counterArray[_this.eggcounterindex] == 1) {
            switch (_this.numberBoxPlacing[_this.currentFactorIndx]) {

                case 2: _this.eggcountertray = _this.add.image(84, 85, '2x16EggTray');
                    break;

                case 3: _this.eggcountertray = _this.add.image(88, 86, '3x16EggTray');
                    break;

                case 4: _this.eggcountertray = _this.add.image(85, 87, '4x16EggTray');
                    break;

                case 5: _this.eggcountertray = _this.add.image(85, 86, '5x16EggTray');
                    break;

                case 6: _this.eggcountertray = _this.add.image(85, 86, '6x16EggTray');
                    break;

                case 7: _this.eggcountertray = _this.add.image(85, 85, '7x16EggTray');
                    break;

                case 8: _this.eggcountertray = _this.add.image(87, 85, '8x16EggTray');
                    break;

                case 9: _this.eggcountertray = _this.add.image(87, 88, '9x16EggTray');
                    break;

                case 10: _this.eggcountertray = _this.add.image(85, 85, '10x16EggTray');
                    break;
            }
        }

        else {
            switch (_this.numberBoxPlacing[_this.currentFactorIndx]) {
                case 2: _this.eggcountertray = _this.add.image(85, 83, '2x16CounterTray');
                    break;

                case 3: _this.eggcountertray = _this.add.image(85, 89, '3x16CounterTray');
                    break;

                case 4: _this.eggcountertray = _this.add.image(86, 90, '4x16CounterTray');
                    break;

                case 5: _this.eggcountertray = _this.add.image(84, 85, '5x16CounterTray');
                    break;

                case 6: _this.eggcountertray = _this.add.image(85, 89, '6x16CounterTray');
                    break;

                case 7: _this.eggcountertray = _this.add.image(85, 91, '7x16CounterTray');
                    break;

                case 8: _this.eggcountertray = _this.add.image(86, 85, '8x16CounterTray');
                    break;

                case 9: _this.eggcountertray = _this.add.image(84, 89, '9x16CounterTray');
                    break;

                case 10: _this.eggcountertray = _this.add.image(85, 87, 'CounterTray');
                    break;
            }
        }
    },

    TweenEggs: function () {
        var tween_LoopCount = 0;

        tween_LoopCount = Math.floor(_this.element / _this.numberBoxPlacing[_this.currentFactorIndx]);

        for (let i = 0; i < tween_LoopCount; i++) {
            _this.time.events.add(550 * i, function () {

                for (let j = 0; j < _this.numberBoxPlacing[_this.currentFactorIndx]; j++) {
                    moveEgg1 = _this.add.sprite(_this.placeEggX[i], _this.placeEggY[j], 'Egg');
                    moveEgg1.scale.setTo(0.98);
                    _this.eggGroup.addChild(moveEgg1);
                }
                _this.TraySound.play();

            });
        }

        //* move the remainder of the eggs.
        _this.remainder = _this.element % _this.numberBoxPlacing[_this.currentFactorIndx];

        if (_this.remainder != 0) {
            _this.time.events.add(550 * tween_LoopCount + 750, function () {
                for (let k = 0; k < _this.remainder; k++) {
                    moveEgg1 = _this.add.sprite(_this.placeEggX[tween_LoopCount], _this.placeEggY[k], 'Egg');
                    moveEgg1.scale.setTo(0.98);
                    _this.crackeggGroup.addChild(moveEgg1);
                }
                _this.TraySound.play();

            });
        }


        _this.time.events.add(550 * tween_LoopCount + 1000, function () {
            _this.ShowRectangleOnCounters();

            _this.time.events.add(600, function () {
                for (p = 0; p < _this.eggGroup.length; p++) {
                    _this.purpleEgg = _this.eggGroup.getChildAt(p).frame = 2;
                }
            });

            if (_this.remainder != 0) {

                _this.time.events.add(1200, function () {

                    for (let i = 0; i < _this.crackeggGroup.length; i++) {
                        _this.eggfinal = _this.crackeggGroup.getChildAt(i).frame = 1;
                    }
                    _this.crackSound.play();

                });
            }

            _this.time.events.add(1800, function () {
                if (_this.count1 == 3 && _this.currentFactorIndx == 0) _this.Ask_Question();
                _this.thumsUpDownEnable();
            });

        });

    },

    TweenSweets: function () {
        var tween_LoopCount = 0;

        tween_LoopCount = Math.floor(_this.element / _this.numberBoxPlacing[_this.currentFactorIndx]);
        for (let i = 0; i < tween_LoopCount; i++) {
            _this.time.events.add(550 * i, function () {

                for (let j = 0; j < _this.numberBoxPlacing[_this.currentFactorIndx]; j++) {
                    moveSweet1 = _this.add.sprite(_this.placeSweetX[i], _this.placeSweetY[j], 'Sweet');
                    moveSweet1.scale.setTo(1.18);
                    _this.sweetGroup.addChild(moveSweet1);
                }
                _this.TraySound.play();

            });
        }

        //* move the last egg if the current question is odd.
        _this.remainder = _this.element % _this.numberBoxPlacing[_this.currentFactorIndx];

        if (_this.remainder != 0) {
            _this.time.events.add(550 * tween_LoopCount + 750, function () {

                for (let k = 0; k < _this.remainder; k++) {
                    moveSweet1 = _this.add.sprite(_this.placeSweetX[tween_LoopCount], _this.placeSweetY[k], 'Sweet');
                    moveSweet1.scale.setTo(1.2);
                    _this.changesweetGroup.addChild(moveSweet1);
                }
                _this.TraySound.play();
            });
        }

        _this.time.events.add(550 * tween_LoopCount + 1000, function () {

            _this.ShowRectangleOnCounters();
            _this.time.events.add(600, function () {
                for (p = 0; p < _this.sweetGroup.length; p++) {
                    _this.purpleCtr = _this.sweetGroup.getChildAt(p).frame = 2;
                }
            });

            if (_this.remainder != 0) {
                _this.time.events.add(1200, function () {

                    for (let i = 0; i < _this.changesweetGroup.length; i++) {
                        _this.sweetfinal = _this.changesweetGroup.getChildAt(i).frame = 1;
                    }
                    _this.counterColorchange.play();

                });
            }

            _this.time.events.add(1800, function () {
                if (_this.count1 == 3 && _this.currentFactorIndx == 0) _this.Ask_Question();
                _this.thumsUpDownEnable();
            });

        });

    },

    //    playEggCrack : function()
    //    {
    //        _this.stopVoice(); 
    //        _this.Question = document.createElement('audio');
    //        _this.Questionsrc = document.createElement('source');
    //        _this.Questionsrc.setAttribute("src", "sounds/egg_cracking.wav");
    //        _this.Question.appendChild(_this.Questionsrc);
    //        _this.Question.play();
    //    },


    thumsUpDownEnable: function () {

        _this.thumsUp = _this.add.sprite(780, 370, 'Thumsup');
        _this.thumsDown = _this.add.sprite(858, 370, 'Thumsdown');
        _this.thumsUp.inputEnabled = true;
        _this.thumsUp.name = "1";
        _this.thumsUp.input.useHandCursor = true;
        _this.thumsUp.events.onInputDown.add(_this.thumsUpClicked, _this.thumsUp);

        _this.thumsDown.inputEnabled = true;
        _this.thumsDown.name = "2";
        _this.thumsDown.input.useHandCursor = true;
        _this.thumsDown.events.onInputDown.add(_this.thumsDownClicked, _this.thumsDown);
    },

    thumsUpClicked: function (target) {
        _this.thumsUp.frame = 1;
        _this.thumsDown.frame = 0;
        _this.selectedAns = target.name;
        _this.rightbtnEnable();
    },

    thumsDownClicked: function (target) {
        _this.thumsDown.frame = 1;
        _this.thumsUp.frame = 0;
        _this.selectedAns = target.name;
        _this.rightbtnEnable();
    },

    rightbtnEnable: function () {
        _this.rightbtn.visible = true;
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this.rightbtn);
    },

    rightbtnClicked: function () {
        _this.rightbtn.events.onInputDown.removeAll();
        _this.rightbtn.inputEnabled = false;
        _this.thumsDown.events.onInputDown.removeAll();
        _this.thumsUp.events.onInputDown.removeAll();
        _this.thumsUp.inputEnabled = false;
        _this.thumsDown.inputEnabled = false;

        if (_this.remainder == 0 && _this.thumsUp.frame == 1) {
            _this.thumsUp.frame = 0;
            _this.celebration();
            //_this.eraserEnable();

            _this.time.events.add(2500, function () {
                _this.eraserClicked();
            });

        }
        else if (_this.remainder == 0 && _this.thumsDown.frame == 1) {
            _this.thumsDown.frame = 0;
            _this.wrongAnswer();

        }
        else if (_this.remainder != 0 && _this.thumsUp.frame == 1) {
            _this.thumsUp.frame = 0;
            _this.wrongAnswer();
        }
        else {
            _this.thumsUp.frame = 0;
            _this.thumsDown.frame = 0;
            _this.celebration1();
            //_this.eraserEnable();

            _this.time.events.add(2500, function () {
                _this.eraserClicked();
            });
        }
    },

    eraserEnable: function () {
        _this.time.events.add(1300, function () {
            _this.eraser.frame = 1;
            _this.eraser.inputEnabled = true;
            _this.eraser.input.useHandCursor = true;
            _this.eraser.events.onInputDown.add(_this.eraserClicked, _this.eraser);
        });

    },

    Choosefactors: function (OddEvenAudio) {
        _this.stopVoice();
        _this.Question = document.createElement('audio');
        _this.Questionsrc = document.createElement('source');
        _this.Questionsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-2-G6/" +
            _this.languageSelected + "/NS-FM-1B-G6-a.mp3");
        _this.Question.appendChild(_this.Questionsrc);
        _this.Question.play();

    },

    randomizing_elements: function () {
        _this.twoOrMoreFactor = _this.shuffle(_this.twoOrMoreFactor);

        _this.elementArray1 = [35, 50, 63, 64, 84, 96];//2 factors
        _this.elementArray1 = _this.shuffle(_this.elementArray1);

        _this.elementArray2 = [16, 28, 32, 42, 45, 56, 70, 72, 80, 90];//3 factors
        _this.elementArray2 = _this.shuffle(_this.elementArray2);

        _this.elementArray3 = [12, 18, 20, 24, 30, 36, 40, 48, 60];//4&5 factors
        _this.elementArray3 = _this.shuffle(_this.elementArray3);

        //* shuufle the array to randomize egg and apple
        _this.egg_or_counterArray = [1, 2]; // 1 = egg and 2 = counter
        _this.egg_or_counterArray = _this.shuffle(_this.egg_or_counterArray);

    },

    Ask_Question: function () {
        _this.stopVoice();
        _this.Question_flag = 1;
        _this.Question = document.createElement('audio');
        _this.Questionsrc = document.createElement('source');
        _this.Questionsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-2-G6/" +
            _this.languageSelected + "/NS-FM-1B-G6-b.mp3");
        _this.Question.appendChild(_this.Questionsrc);
        _this.Question.play();
    },


    //* called in case of celebrating correct answer when it is a factor.
    celebration: function () {

        if (_this.egg_or_counterArray[_this.eggcounterindex] == 1) {
            for (p = 0; p < _this.eggGroup.length; p++) {
                _this.eggGroup.getChildAt(p).frame = 1;

            }
            _this.crackSound.play();
        }
        else {
            for (p = 0; p < _this.sweetGroup.length; p++) {
                _this.sweetGroup.getChildAt(p).frame = 1;

            }

        }

        _this.counterCelebrationSound.play();

        //* set the factorbox color to green as it is a factor
        _this.currentFactorBox.frame = 3;


        _this.currentFactorBox.inputEnabled = false;
        _this.currentFactorIndx++;

    },

    eraserClicked: function (target) {
        _this.eraser.frame = 0;
        _this.thumsUp.frame = 0;
        _this.thumsDown.frame = 0;

        _this.eggcountertray.destroy();
        _this.eggGroup.destroy();
        _this.crackeggGroup.destroy();
        _this.sweetGroup.destroy();
        _this.changesweetGroup.destroy();

        _this.thumsUp.destroy();
        _this.thumsDown.destroy();
        _this.rightbtn.visible = false;

        if (_this.currentFactorIndx < 4) {
            _this.highlightFactor();

            if (_this.egg_or_counterArray[_this.eggcounterindex] == 1) {
                _this.initialTray = _this.add.image(83, 80, 'EggTray');
            }
            else {
                _this.initialTray = _this.add.image(85, 87, 'CounterTray');
            }
        }
        else {
            //           _this.tweenNumberBoxes();
            //           _this.time.events.add(2500, function(){
            //              _this.destroyNonfactor();
            //              _this.enableRemainingFactor();
            //           });
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.celebrationSound.play();
            _this.rightbtn.events.onInputDown.removeAll();
            _this.starActionCall();
            _this.time.events.add(500, function () {
                _this.starActions();
            });
        }

    },

    Ask_Question2: function () {
        _this.stopVoice();
        _this.Question_flag = 2;
        _this.Question = document.createElement('audio');
        _this.Questionsrc = document.createElement('source');
        _this.Questionsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-2-G6/" +
            _this.languageSelected + "/greaterfactor.mp3");
        _this.Question.appendChild(_this.Questionsrc);
        _this.Question.play();

    },

    enableRemainingFactor: function () {
        _this.time.events.add(1200, function () {
            _this.Ask_Question2();
        });
        for (i = 0; i < _this.factorGroup.length; i++) {
            if (_this.factorGroup.getChildAt(i).frame == 3) {
                _this.factorGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.factorGroup.getChildAt(i).frame = 0;
                _this.factorGroup.getChildAt(i).inputEnabled = true;
                _this.factorGroup.getChildAt(i).input.useHandCursor = true;
                _this.factorGroup.getChildAt(i).events.onInputDown.add(_this.lastFactorClicked, _this.factorGroup.getChildAt(i));
            }
        }

    },

    lastFactorClicked: function (target1) {

        if (target1.frame == 0) {
            for (k = 0; k < _this.factorGroup.length; k++) {
                if (_this.factorGroup.getChildAt(k).frame == 1) {
                    _this.factorGroup.getChildAt(k).frame = 0;

                }
            }
            target1.frame = 1;
        }
        else if (target1.frame == 1) {
            target1.frame = 0;
        }
        _this.rightbtnEnable1();
    },

    rightbtnEnable1: function () {
        _this.rightbtn.events.onInputDown.removeAll();
        _this.rightbtn.visible = true;
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked1);
    },

    rightbtnClicked1: function () {
        _this.evaluation();
        _this.evaluation1();
        _this.noofAttempts++;
        if (_this.final_selected_num == _this.greaterFactor) {
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.celebrationSound.play();
            _this.rightbtn.events.onInputDown.removeAll();
            _this.starActionCall();
            _this.time.events.add(500, function () {
                _this.starActions();
            });
        }
        else {
            _this.wrongSound.play();
            _this.factorGroup.visible = false;
            _this.rightbtn.visible = false;
            _this.time.events.add(500, function () {
                _this.Ask_Question2();
                _this.factorGroup.visible = true;
                _this.rightbtn.visible = true;

                for (i = 0; i < _this.factorGroup.length; i++) {
                    _this.factorGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.factorGroup.getChildAt(i).inputEnabled = true;
                    _this.factorGroup.getChildAt(i).input.useHandCursor = true;
                    _this.factorGroup.getChildAt(i).events.onInputDown.add(_this.lastFactorClicked, _this.factorGroup.getChildAt(i));
                }
            });
        }
    },

    starActionCall: function () {
        if (_this.count1 < 5) {

            for (j = 0; j < 4; j++) {
                _this.numberBoxPlacing.splice(j);
            }

            _this.time.events.add(2000, function () {
                _this.initialTray.destroy();
                _this.eggcountertray.destroy();
                _this.eggGroup.destroy();
                _this.crackeggGroup.destroy();
                _this.mainBox.destroy();
                _this.sweetGroup.destroy();
                _this.changesweetGroup.destroy();
                _this.Txt.destroy();
                _this.rightbtn.visible = false;
                _this.rightbtn.events.onInputDown.removeAll();
                _this.redBox.destroy();
                _this.factorGroup.destroy();

            });

            _this.time.events.add(4000, function () {
                _this.count1++;
                _this.randomizing_elements();
                _this.gotoNumbers();

            });

        }
        else {
            _this.time.events.add(1900, function () {
                _this.initialTray.destroy();
                _this.eggcountertray.destroy();
                _this.eggGroup.destroy();
                _this.crackeggGroup.destroy();
                _this.sweetGroup.destroy();
                _this.changesweetGroup.destroy();
                _this.mainBox.destroy();
                _this.Txt.destroy();
                _this.rightbtn.visible = false;
                _this.rightbtn.events.onInputDown.removeAll();
                _this.redBox.destroy();
                _this.factorGroup.destroy();
                _this.timer1.stop();
                _this.timer1 = null;


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

    evaluation: function () {

        for (i = 0; i < _this.numberBoxPlacing.length; i++) {
            for (j = 0; j < _this.FactorArray.length; j++) {
                if (_this.FactorArray[j] == _this.numberBoxPlacing[i]) {
                    _this.greaterFactor = _this.FactorArray[j];
                }
            }
        }
    },

    evaluation1: function () {
        for (k = 0; k < _this.factorGroup.length; k++) {
            _this.factorGroup.getChildAt(k).events.onInputDown.removeAll();
            if (_this.factorGroup.getChildAt(k).frame == 1) {
                _this.final_selected_num = _this.factorGroup.getChildAt(k).name;
            }
        }

    },


    //* called in case of celebrating when it is a non factor.
    celebration1: function () {
        if (_this.egg_or_counterArray[_this.eggcounterindex] == 1) {
            for (p = 0; p < _this.eggGroup.length; p++) {
                _this.eggGroup.getChildAt(p).frame = 1;

            }
            _this.crackSound.play();
        }
        else {
            for (p = 0; p < _this.sweetGroup.length; p++) {
                _this.sweetGroup.getChildAt(p).frame = 1;

            }
        }

        //        _this.time.events.add(2000,function(){

        _this.counterCelebrationSound.play();
        //        });

        //* set the factorbox to gray since it is not a factor.
        _this.currentFactorBox.frame = 2;
        _this.currentFactorIndx++;

    },

    wrongAnswer: function () {

        _this.wrongSound.play();

        _this.currentFactorBox.frame = 1;
        _this.currentFactorBox.inputEnabled = true;
        _this.currentFactorBox.input.useHandCursor = true;
        _this.thumsUp.destroy();
        _this.thumsDown.destroy();

        _this.rightbtn.visible = false;

        _this.eggcountertray.destroy();
        _this.sweetGroup.destroy();
        _this.eggGroup.destroy();
        _this.crackeggGroup.destroy();
        _this.changesweetGroup.destroy();

        if (_this.egg_or_counterArray[_this.eggcounterindex] == 1) {
            _this.initialTray = _this.add.image(83, 80, 'EggTray');
        }
        else {
            _this.initialTray = _this.add.image(85, 87, 'CounterTray');
        }
    },

    ShowRectangleOnCounters: function () {
        graphics = _this.add.graphics(100, 100);
        graphics.bringToTop = true;
        graphics.lineStyle(3, 0xffd900, 1);

        rect_width = Math.floor(_this.element / _this.numberBoxPlacing[_this.currentFactorIndx]);
        rect = graphics.drawRect(-3, 0, rect_width * 38.09, _this.numberBoxPlacing[_this.currentFactorIndx] * 38.5, '#FF0000');
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

        _this.time.events.add(5500, function () {
            rect.visible = false;
        });
    },

    tweenNumberBoxes: function () {
        _this.eraser.destroy();
        _this.time.events.add(1200, function () {

            _this.counterCelebrationSound.play();
        });

        dragAction1 = _this.add.tween(_this.factorGroup);
        dragAction1.to({ x: -500, y: 60 }, 1000, 'Linear', true, 0);

        dragAction1.start();


        _this.factorGroup.getChildAt(1).x += 70;
        _this.factorGroup.getChildAt(3).x += 70;
        _this.factorGroup.getChildAt(2).y += 75;
        _this.factorGroup.getChildAt(3).y += 75;

        for (i = 0; i < 4; i++) {
            _this.factorGroup.getChildAt(i).scale.setTo(1.9);
        }

    },

    destroyNonfactor: function () {
        _this.deletefactorSound.play();

        for (i = 0; i < 4; i++) {
            if (_this.factorGroup.getChildAt(i).frame == 2) {
                _this.factorGroup.getChildAt(i).visible = false;

            }
        }
    },

    starActions: function () {
        _this.score++;
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim = _this.starAnim.animations.add('star');
        // _this.userHasPlayed = 1;
        // _this.game_id='NS_FM_1_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Numbers";
         _this.microConcepts = "Number Systems";
        _this.anim.play();

    },

    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },
}



