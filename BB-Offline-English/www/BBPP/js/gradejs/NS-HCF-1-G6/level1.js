Game.NS_HCF_1_G6level1 = function () { };


Game.NS_HCF_1_G6level1.prototype =
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

        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NS-HCF-1-G6/" +
            _this.languageSelected + "/NS-HCF-1-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);

        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NS-HCF-1-G6/" +
            _this.languageSelected + "/NS-HCF-1-G6-b.mp3");
        _this.Question2.appendChild(_this.Question2src);

        _this.notFactorSound = document.createElement('audio');
        _this.notFactorSoundsrc = document.createElement('source');
        _this.notFactorSoundsrc.setAttribute("src", window.baseUrl + "sounds/Not_factor_sound.mp3");
        _this.notFactorSound.appendChild(_this.notFactorSoundsrc);

        _this.nextOptionSound = document.createElement('audio');
        _this.nextOptionSoundsrc = document.createElement('source');
        _this.nextOptionSoundsrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.nextOptionSound.appendChild(_this.nextOptionSoundsrc);

        telInitializerbbpp.gameIdInit("NSN_HCF_1_G6", gradeSelected);
        console.log(gameID,"gameID...");
        //NS_HCF_1_G6
    },

    create: function (game) {
        //_this.game = game;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.count1 = 0;

        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.number;
        _this.position;

        _this.Choice = 0;
        _this.lastFactor = 0;

        // //*BB++ variables
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        _this.microConcepts;
       // _this.grade;


        _this.selectedAns1 = '';

        _this.repetition = 0;
        _this.Grouptile = _this.add.group();


        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');


        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            console.log("inside backbutton function");
            _this.stopVoice();
            _this.time.events.removeAll();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50, function () {
                _this.state.start('grade6NumberSystems', true, false);
            });
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            //console.log("Hello");
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                _this.Ask_Question(_this.Choice);

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

        _this.time.events.add(2000, _this.getQuestion);

        _this.Counter_position = [55, 90, 125, 160, 195, 230, 265, 300, 335, 370, 405, 440, 475, 510, 545, 580, 615, 650];

        _this.Counter_position_emptyBox = [64, 100, 137, 173, 210, 246, 283, 319, 356, 393, 429, 466, 502, 539, 575, 612, 649, 686];

        _this.Question_option1 = [[2, 6, 2], [2, 8, 2], [2, 10, 2], [2, 12, 2], [2, 14, 2], [2, 16, 2], [2, 18, 2], [3, 6, 3],
        [3, 9, 3], [3, 12, 3], [3, 15, 3], [3, 18, 3], [4, 8, 4], [4, 12, 4], [4, 16, 4], [5, 10, 5],
        [5, 15, 5], [6, 12, 6], [6, 18, 6], [7, 14, 7], [8, 16, 8], [9, 18, 9]];

        //_this.Question_option1 = [[6, 14, 2], [6, 14, 2]];
        //_this.Question_option1 = [[8, 15, 1], [8, 15, 1]];

        _this.Question_option2 = [[4, 6, 2], [4, 10, 2], [4, 14, 2], [6, 8, 2], [6, 9, 3], [6, 10, 2], [6, 14, 2],
        [6, 15, 3], [6, 16, 2], [8, 10, 2], [8, 12, 4], [8, 14, 2], [9, 12, 3], [9, 15, 3]];

        //_this.Question_option2 = [[6, 14, 2], [6, 14, 2], [6, 14, 2]];
        //_this.Question_option2 = [[8, 15, 1], [8, 15, 1], [8, 15, 1]];

        _this.Question_option3 = [[2, 5, 1], [2, 7, 1], [2, 9, 1], [2, 11, 1], [2, 13, 1], [2, 15, 1], [2, 17, 1], [3, 5, 1],
        [3, 7, 1], [3, 8, 1], [3, 10, 1], [3, 11, 1], [3, 13, 1], [3, 14, 1], [3, 16, 1], [3, 17, 1],
        [4, 5, 1], [4, 7, 1], [4, 9, 1], [4, 11, 1], [4, 13, 1], [4, 15, 1], [5, 6, 1], [5, 7, 1],
        [5, 8, 1], [5, 9, 1], [5, 11, 1], [5, 12, 1], [5, 13, 1], [5, 14, 1], [6, 7, 1], [6, 11, 1],
        [6, 13, 1], [6, 17, 1], [7, 8, 1], [7, 9, 1], [7, 10, 1], [7, 11, 1], [7, 12, 1], [7, 13, 1],
        [8, 9, 1], [8, 11, 1], [8, 13, 1], [8, 15, 1], [9, 10, 1], [9, 11, 1], [9, 13, 1],
        [9, 14, 1], [9, 16, 1], [9, 17, 1]];

        //_this.Question_option3 = [[6, 14, 2], [6, 14, 2], [6, 14, 2]];
        //_this.Question_option3 = [[8, 15, 1], [8, 15, 1], [8, 15, 1]];

        _this.CounterAnimeGroup1 = _this.add.group();
        _this.CounterAnimeGroup2 = _this.add.group();

        _this.array_Questions = [];
        _this.CombinationArray = [1, 2, 3];
        _this.hcfShufflingArray = [];
        _this.hcfShuffledArray = [];
        _this.hcfarray = [];
        _this.FactorBoxArray = [];
        _this.factorX = [790, 844];
        _this.factorY = [122, 175, 229];
        _this.factorNumX = [809, 864];
        _this.factorNumY = [134, 187, 240];
        _this.eraserX = [790, 844];
        _this.eraserY = [122, 175, 228, 283];
        _this.AnswerBox = _this.add.sprite(840, 410, 'TextBox');
        _this.AnswerBox.visible = false;
    },

    gameDestroy: function () {

        //        _this.sound.destroy();
        //        _this.scale.destroy();
        //        _this.stage.destroy();
        //        _this.input.destroy();
        //        _this.physics.destroy();
        //        _this.debug = null;
        //        _this.state = null;
        //        _this.sound = null;
        //        _this.scale = null;
        //        _this.stage = null;
        //        _this.input = null;
        //        _this.physics = null;
        //        _this.plugins = null;

        //        _this.cache = null;
        //        _this.load = null;
        //        _this.time = null;
        //        _this.world = null;

        //        _this.isBooted = false;

        //_this.game.renderer.destroy(false);
        //        _this.state.destroy();
        //        Phaser.Canvas.removeFromDOM(_this.game.canvas);
        //        _this.game = null;

        // PIXI.defaultRenderer = null;

        // Phaser.GAMES[_this.game.id] = null;
        //        console.log("insde game destroy");
        //        _this.game.destroy(true,false);
        //        _this.game = null;
    },


    Ask_Question: function (numberpad_is_up) {
        if (numberpad_is_up == 0) {
            _this.Question1.play();
        }
        else {
            _this.Question2.play();
        }
    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () {
        //console.log("SBtn: " + _this.speakerbtnClicked + " RBtn: " + _this.rightbtnClicked);
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

    shuffle2D: function (array, idx) {
        var array_number = [22, 14, 50];
        //var array_number=[2, 3, 3];
        var currentidx = array_number[idx];
        var temporaryValue, randomidx;

        //While there remain elements to shuffle...
        while (0 !== currentidx) {
            // Pick a remaining element...
            randomidx = Math.floor(Math.random() * currentidx);
            currentidx -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentidx][0];
            array[currentidx][0] = array[randomidx][0];
            array[randomidx][0] = temporaryValue;

            temporaryValue = array[currentidx][1];
            array[currentidx][1] = array[randomidx][1];
            array[randomidx][1] = temporaryValue;

            temporaryValue = array[currentidx][2];
            array[currentidx][2] = array[randomidx][2];
            array[randomidx][2] = temporaryValue;
        }

        return array;
    },

    shuffle: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;


            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },

    getQuestion: function () {
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

        _this.randomizing_elements();
        _this.Ask_Question(0);
        _this.Choice = 0;
        _this.gotoMultiples(_this.repetition);

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

    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');

        // _this.userHasPlayed = 1;
        // _this.game_id='NS_HCF_1_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Numbers";
       _this.microConcepts = "Number Systems";

        _this.count1++;
        anim.play();
    },

    celebration: function () {
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },

    randomizing_elements: function () {
        _this.shuffle2D(_this.Question_option1, 0);
        _this.shuffle2D(_this.Question_option2, 1);
        _this.shuffle2D(_this.Question_option3, 2);
        _this.getCombination();
        var index1 = 0;
        var index2 = 0;
        var index3 = 0;
        for (var i = 0; i < _this.NumberTypeArray.length; i++) {

            if (_this.NumberTypeArray[i] == 1) {
                _this.hcfArray1 = [_this.Question_option1[index1][0], _this.Question_option1[index1][1], _this.Question_option1[index1][2]];
                index1++;
                // console.log(_this.hcfArray1);
            }
            else if (_this.NumberTypeArray[i] == 2) {
                _this.hcfArray1 = [_this.Question_option2[index2][0], _this.Question_option2[index2][1], _this.Question_option2[index2][2]];
                index2++;
                // console.log(_this.hcfArray1);
            }
            else {
                _this.hcfArray1 = [_this.Question_option3[index3][0], _this.Question_option3[index3][1], _this.Question_option3[index3][2]];
                index3++;
                // console.log(_this.hcfArray1);  
            }
            _this.array_Questions[i] = _this.hcfArray1;
        }
    },

    gotoMultiples: function (repetition) {
        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

        _this.currentFactorIndx = 0;

        _this.hcfShufflingArray[0] = _this.array_Questions[repetition][0];
        _this.hcfAnswer = _this.hcfShufflingArray[0];
        //console.log(_this.hcfAnswer);

        _this.hcfShufflingArray[1] = _this.array_Questions[repetition][1];
        _this.hcfShuffledArray = [_this.hcfShufflingArray[0], _this.hcfShufflingArray[1]];
        _this.hcfShuffledArray = _this.shuffle(_this.hcfShuffledArray);
        _this.hcfarray[0] = _this.hcfShuffledArray[0];
        _this.hcfarray[1] = _this.hcfShuffledArray[1];

        _this.onScreenDisplay();
    },

    getCombination: function () {
        _this.CombinationArray = _this.shuffle(_this.CombinationArray);

        if (_this.CombinationArray[0] == 1) {
            _this.NumberTypeArray = [1, 1, 2, 2, 3, 3];
        }
        else if (_this.CombinationArray[0] == 2) {
            _this.NumberTypeArray = [1, 1, 2, 2, 2, 3];
        }
        else {
            _this.NumberTypeArray = [1, 1, 2, 3, 3, 3];
        }
        _this.NumberTypeArray = _this.shuffle(_this.NumberTypeArray);
        //console.log(_this.NumberTypeArray);

    },

    onScreenDisplay: function () {
        // * display empty counter box of size 22

        _this.emptyBox1 = _this.add.sprite(55, 210, 'EmptyBox');
        _this.emptyBox1.visible = true;

        _this.emptyBox2 = _this.add.sprite(55, 305, 'EmptyBox');
        _this.emptyBox2.visible = true;

        _this.emptyBox1_Glow = _this.add.sprite(55, 210, 'EmptyBox_Glow');
        _this.emptyBox1_Glow.visible = false;

        _this.emptyBox2_Glow = _this.add.sprite(55, 305, 'EmptyBox_Glow');
        _this.emptyBox2_Glow.visible = false;

        _this.numberBox = _this.add.image(777, 110, 'MainBox');

        _this.redBox = _this.add.sprite(45, 75, 'RedBox');
        _this.largeTxt = _this.add.text(65, 90, _this.hcfarray[0]);
        _this.largeTxt.fill = '#FFFFFF';


        //* display the gray boxes based on the first and second number length.
        //* and then display the counters based  first and second numbers on top of the gray box base.

        var emptyBox_String_1 = "EmptyBox_l_" + _this.hcfarray[0];  //*form object name of gray box.
        var emptyBox_String_2 = "EmptyBox_l_" + _this.hcfarray[1]; //* if length is 2, form "EmptyBox_l_2"

        _this.emptyBox_First_num = _this.add.sprite(55, 160, emptyBox_String_1);  //* use the string formed above.
        _this.emptyBox_Second_num = _this.add.sprite(55, 360, emptyBox_String_2);

        //* declare the groups. the counters are added to these groups. they should 
        //* appear on top of the gray boxes created above
        _this.Group1 = _this.add.group();
        _this.Group2 = _this.add.group();

        _this.CounterAnimeGroup1 = _this.add.group();
        _this.CounterAnimeGroup2 = _this.add.group();

        _this.GroupCopy1 = _this.add.group();
        _this.GroupCopy2 = _this.add.group();

        _this.GroupCopy1Duplicate = _this.add.group();
        _this.GroupCopy2Duplicate = _this.add.group();



        for (var i = 0; i < _this.hcfarray[0]; i++) {
            _this.Counter1 = _this.add.sprite(_this.Counter_position_emptyBox[i], 160, 'FourColorBox');
            _this.Counter1.frame = 1;
            _this.Group1.addChild(_this.Counter1);
        }

        for (i = 0; i < _this.hcfarray[1]; i++) {
            _this.Counter2 = _this.add.sprite(_this.Counter_position_emptyBox[i], 360, 'FourColorBox');
            _this.Counter2.frame = 0;
            _this.Group2.addChild(_this.Counter2);
        }

        _this.redBox = _this.add.sprite(45, 410, 'RedBox');
        _this.smallTxt = _this.add.text(65, 425, _this.hcfarray[1]);
        _this.smallTxt.fill = '#FFFFFF';

        _this.generateFactor();


        _this.highlightFactor();

    },

    generateFactor: function () {
        _this.FactorBoxArray[0] = _this.hcfAnswer;

        _this.FactorBoxNumbers = Math.floor(_this.hcfAnswer / 2);
        var i = 1;
        for (var k = _this.FactorBoxNumbers; k >= 1; k--) {
            _this.FactorBoxArray[i] = k;
            i++;
        }
        //console.log(_this.FactorBoxArray);
        _this.displayFactorsOnScreen();
    },

    displayFactorsOnScreen: function () {
        _this.factorGroup = _this.add.group();
        _this.factorTxtGroup = _this.add.group();

        var row = 0;
        var col = 0;



        console.log("FactorsOnscreen: " + _this.FactorBoxArray);

        for (i = 0; i < _this.FactorBoxArray.length; i++) {
            _this.factorbox = _this.add.sprite(_this.factorX[row], _this.factorY[col], 'FactorBox');
            _this.factorbox.scale.setTo(0.8);
            _this.factorbox.name = _this.FactorBoxArray[i];
            _this.factorGroup.addChild(_this.factorbox);

            _this.factorTxt = _this.add.text(_this.factorNumX[row], _this.factorNumY[col], _this.FactorBoxArray[i]);
            //console.log(_this.factorGroup.getChildAt(i).name);
            _this.factorTxtGroup.addChild(_this.factorTxt);

            row += 1;

            if (row >= 2) {
                row = 0;
                col = col + 1;
            }
        }
        _this.displayEraser();
    },

    displayEraser: function () {
        if (_this.FactorBoxArray.length == 1) {
            _this.eraser = _this.add.sprite(_this.eraserX[1], _this.eraserY[0], 'Eraser');
            _this.eraser.scale.setTo(1.04);
            _this.numberBox.scale.setTo(0.7, 0.3)
        }
        else if (_this.FactorBoxArray.length == 2) {
            _this.eraser = _this.add.sprite(_this.eraserX[0], _this.eraserY[1], 'Eraser');
            _this.eraser.scale.setTo(1.04);
            _this.numberBox.scale.setTo(0.7, 0.3)
        }
        else if (_this.FactorBoxArray.length == 3) {
            _this.eraser = _this.add.sprite(_this.eraserX[1], _this.eraserY[1], 'Eraser');
            _this.eraser.scale.setTo(1.04);
            _this.numberBox.scale.setTo(0.7, 0.5);
        }
        else if (_this.FactorBoxArray.length == 4) {
            _this.eraser = _this.add.sprite(_this.eraserX[0], _this.eraserY[2], 'Eraser');
            _this.eraser.scale.setTo(1.04);
            _this.numberBox.scale.setTo(0.7, 0.5);
        }
        else if (_this.FactorBoxArray.length == 5) {
            _this.eraser = _this.add.sprite(_this.eraserX[1], _this.eraserY[2], 'Eraser');
            _this.eraser.scale.setTo(1.02);
            _this.numberBox.scale.setTo(0.7, 0.7);
        }
        else if (_this.factors_index == 0) {
            _this.eraser = _this.add.sprite(_this.eraserX[0], _this.eraserY[3], 'Eraser');
            _this.eraser.scale.setTo(1.04);
            _this.numberBox.scale.setTo(0.7, 0.3);
        }
        _this.eraser.visible = false;
    },

    highlightFactor: function () {
        console.log("inside highlight facctor");

        _this.currentFactorBox = _this.factorGroup.getChildAt(_this.currentFactorIndx);
        _this.currentFactorBoxElement = _this.FactorBoxArray[_this.currentFactorIndx];
        //console.log(_this.currentFactorBoxElement);
        _this.top1 = _this.currentFactorBoxElement;
        _this.top2 = _this.currentFactorBoxElement;

        _this.nextOptionSound.play();
        _this.currentFactorBox.frame = 1;
        _this.currentFactorBox.inputEnabled = true;
        _this.currentFactorBox.input.useHandCursor = true;
        _this.currentFactorBox.events.onInputDown.add(_this.placeCounterBox, _this.currentFactorBox);

        _this.lastCurrentFactorBox = _this.factorGroup.getChildAt(_this.FactorBoxArray.length - 1);
        _this.lastCurrentFactorBox.frame = 2;
        _this.lastCurrentFactorBox.inputEnabled = false;

        _this.time.events.add(1000, function () {
            if (_this.currentFactorIndx == _this.FactorBoxArray.length - 1) {
                _this.lastCurrentFactorBox.frame = 1;
                //console.log("number pad");
                _this.Choice = 1;

                _this.time.events.add(1500, function () {
                    if (_this.count1 == 0) _this.Ask_Question(1);
                    _this.numberPad();
                });
            }
        });
    },

    placeCounterBox: function (target) {
        //console.log("inside placeCounterBox");
        _this.currentFactorBox.inputEnabled = false;
        _this.placeFactors1();
        _this.placeFactors2();

        //* if 1st question, 1st factor- tween one of the set to show how to drag.
        if (_this.count1 == 0 && _this.currentFactorIndx == 0) {
            _this.time.events.add(1300, function () {
                _this.ShowDragAction();

            });
            _this.time.events.add(1800, function () {
                _this.SelectCounterBox();
            });
        }
        else        //* for next factors/questions, directly enable the counters.
        {
            _this.time.events.add(1300, function () {
                _this.SelectCounterBox();
            });
        }
    },

    placeFactors1: function () {
        //console.log("inside placeFactor1");
        _this.CounterAnimeGroup1 = _this.add.group();
        for (let i = 0; i < _this.currentFactorBoxElement; i++) {
            let Counter = _this.add.sprite(0, 0, 'FourColorBox');
            Counter.scale.setTo(0.97);
            Counter.name = String(i);
            Counter.frame = 2;
            Counter.x = _this.Group1.getChildAt(i).x;
            Counter.y = _this.Group1.getChildAt(i).y;

            let CounterAnime = _this.add.tween(Counter);
            CounterAnime.to({ x: _this.Counter_position_emptyBox[i], y: 214 }, 1250, 'Quart', false, 0);
            CounterAnime.start();
            _this.CounterAnimeGroup1.addChild(Counter);
        }
    },

    placeFactors2: function () {
        //console.log("inside placeFactor2");
        for (let i = 0; i < _this.currentFactorBoxElement; i++) {
            let Counter = _this.add.sprite(0, 0, 'FourColorBox');
            Counter.scale.setTo(0.97);
            Counter.name = String(i);
            Counter.frame = 2;
            Counter.x = _this.Group2.getChildAt(i).x;
            Counter.y = _this.Group2.getChildAt(i).y;

            let CounterAnime = _this.add.tween(Counter);
            CounterAnime.to({ x: _this.Counter_position_emptyBox[i], y: 309 }, 1250, 'Quart', false, 0);
            CounterAnime.start();
            _this.CounterAnimeGroup2.addChild(Counter);
        }
    },

    SelectCounterBox: function () {
        if (_this.hcfarray[0] == _this.currentFactorBoxElement) {
            for (var i = 0; i < _this.currentFactorBoxElement; i++) {
                _this.CounterAnimeGroup2.getChildAt(i).inputEnabled = true;
                _this.CounterAnimeGroup2.getChildAt(i).input.useHandCursor = true;
                _this.CounterAnimeGroup2.getChildAt(i).events.onInputDown.add(_this.ClickEnable2, _this);
            }
            _this.emptyBox2_Glow.visible = true;
        }
        else if (_this.hcfarray[1] == _this.currentFactorBoxElement) {
            for (var i = 0; i < _this.currentFactorBoxElement; i++) {
                _this.CounterAnimeGroup1.getChildAt(i).inputEnabled = true;
                _this.CounterAnimeGroup1.getChildAt(i).input.useHandCursor = true;
                _this.CounterAnimeGroup1.getChildAt(i).events.onInputDown.add(_this.ClickEnable1, _this);
            }
            _this.emptyBox1_Glow.visible = true;
        }
        else {
            for (var i = 0; i < _this.currentFactorBoxElement; i++) {
                _this.CounterAnimeGroup1.getChildAt(i).inputEnabled = true;
                _this.CounterAnimeGroup1.getChildAt(i).input.useHandCursor = true;
                _this.CounterAnimeGroup1.getChildAt(i).events.onInputDown.add(_this.ClickEnable1, _this);
                _this.emptyBox1_Glow.visible = true;

                _this.CounterAnimeGroup2.getChildAt(i).inputEnabled = true;
                _this.CounterAnimeGroup2.getChildAt(i).input.useHandCursor = true;
                _this.CounterAnimeGroup2.getChildAt(i).events.onInputDown.add(_this.ClickEnable2, _this);
                _this.emptyBox2_Glow.visible = true;
            }
        }

    },

    ShowDragAction: function () {
        _this.ShowAnimGroup = _this.add.group();

        //* tween the counters and show how to drag counters to user.
        //* choose which counters to tween. 
        //* if first number is bigger than factor chosen, then tween the counters there.
        if (_this.hcfarray[0] > _this.currentFactorBoxElement) {
            for (let i = 0; i < _this.currentFactorBoxElement; i++) {
                let Counter = _this.add.sprite(_this.Counter_position_emptyBox[i] + 10,
                    220, 'FourColorBox');
                Counter.scale.setTo(0.97);
                Counter.frame = 2;

                let ShowAnim = _this.add.tween(Counter);
                ShowAnim.to({
                    x: _this.Counter_position_emptyBox[i + _this.currentFactorBoxElement],
                    y: 214
                }, 1250, 'Linear', false, 0);    //* tween to next slot.
                ShowAnim.start();
                _this.ShowAnimGroup.addChild(Counter);
            }
            _this.time.events.add(2000, function ()  //* destroy the counters after tweening.
            {
                _this.ShowAnimGroup.destroy();
            });
        }
        //* if 2nd number is bigger than factor chosen, then tween the counters on it.
        else if (_this.hcfarray[1] > _this.currentFactorBoxElement) {
            for (let i = 0; i < _this.currentFactorBoxElement; i++) {
                let Counter = _this.add.sprite(_this.Counter_position_emptyBox[i] + 10,
                    319, 'FourColorBox');
                Counter.scale.setTo(0.97);
                Counter.frame = 2;

                let ShowAnim = _this.add.tween(Counter);
                ShowAnim.to({
                    x: _this.Counter_position_emptyBox[i + _this.currentFactorBoxElement],
                    y: 309
                }, 1250, 'Linear', false, 0);    //* tween to next slot.
                ShowAnim.start();
                _this.ShowAnimGroup.addChild(Counter);
            }
            _this.time.events.add(2000, function ()  //* destroy the tweened group after tweening.
            {
                _this.ShowAnimGroup.destroy();
            });
        }
    },

    ClickEnable1: function (target) {

        for (var i = 0; i < _this.currentFactorBoxElement; i++) {
            _this.CounterAnimeGroup2.getChildAt(i).inputEnabled = false;

        }
        _this.emptyBox2_Glow.visible = false;
        //console.log("ClickEnable1");
        if (_this.top1 < _this.hcfarray[0]) {
            _this.emptyBox1_Glow.visible = true;
            for (let i = 0; i < _this.currentFactorBoxElement; i++) {
                let Counter = _this.add.sprite(0, 0, 'FourColorBox');
                //Counter.name = String(i);
                //console.log( "name of the counter CE: " + Counter.name);
                Counter.frame = _this.CounterAnimeGroup1.getChildAt(i).frame;
                Counter.x = _this.CounterAnimeGroup1.getChildAt(i).x;
                Counter.y = _this.CounterAnimeGroup1.getChildAt(i).y;
                if (Counter.frame == 2) {
                    Counter.frame == 3;
                }
                else {
                    Counter.frame == 2;
                }

                _this.GroupCopy1.addChild(Counter);

                _this.CounterAnimeGroup1.getChildAt(i).inputEnabled = true;
                _this.CounterAnimeGroup1.getChildAt(i).input.enableDrag(true);
                _this.CounterAnimeGroup1.getChildAt(i).events.onDragUpdate.add(_this.dragUpdate1, _this);
                _this.CounterAnimeGroup1.getChildAt(i).events.onDragStop.add(_this.dragStop1, _this);
            }
        }
        else {
            if (_this.top1 >= _this.hcfarray[0]) {
                for (i = 0; i < _this.currentFactorBoxElement; i++) {
                    _this.emptyBox1_Glow.visible = false;
                    _this.CounterAnimeGroup1.getChildAt(i).inputEnabled = false;
                    _this.CounterAnimeGroup1.getChildAt(i).input.enableDrag(false);
                    _this.CounterAnimeGroup1.getChildAt(i).events.onDragStop.removeAll();
                    _this.CounterAnimeGroup1.getChildAt(i).events.onDragUpdate.removeAll();
                    _this.CounterAnimeGroup1.getChildAt(i).events.onInputDown.removeAll();

                }
            }
        }
    },

    ClickEnable2: function (target) {
        for (var i = 0; i < _this.currentFactorBoxElement; i++) {
            _this.CounterAnimeGroup1.getChildAt(i).inputEnabled = false;
        }
        _this.emptyBox1_Glow.visible = false;
        if (_this.top2 < _this.hcfarray[1]) {
            _this.emptyBox2_Glow.visible = true;
            for (let i = 0; i < _this.currentFactorBoxElement; i++) {
                let Counter = _this.add.sprite(0, 0, 'FourColorBox');
                //Counter.name = String(i);
                //console.log( "name of the counter: " + Counter.name);
                Counter.frame = _this.CounterAnimeGroup2.getChildAt(i).frame;
                Counter.x = _this.CounterAnimeGroup2.getChildAt(i).x;
                Counter.y = _this.CounterAnimeGroup2.getChildAt(i).y;
                if (Counter.frame == 2) {
                    Counter.frame == 3;
                }
                else {
                    Counter.frame == 2;
                }

                _this.GroupCopy2.addChild(Counter);
                _this.CounterAnimeGroup2.getChildAt(i).inputEnabled = true;
                _this.CounterAnimeGroup2.getChildAt(i).input.enableDrag(true);
                _this.CounterAnimeGroup2.getChildAt(i).events.onDragUpdate.add(_this.dragUpdate2, _this);
                _this.CounterAnimeGroup2.getChildAt(i).events.onDragStop.add(_this.dragStop2, _this);
            }
        }
        else {
            if (_this.top2 >= _this.hcfarray[1]) {
                for (i = 0; i < _this.currentFactorBoxElement; i++) {
                    _this.emptyBox2_Glow.visible = false;
                    _this.CounterAnimeGroup2.getChildAt(i).inputEnabled = false;
                    _this.CounterAnimeGroup2.getChildAt(i).input.enableDrag(false);
                    _this.CounterAnimeGroup2.getChildAt(i).events.onDragStop.removeAll();
                    _this.CounterAnimeGroup2.getChildAt(i).events.onDragUpdate.removeAll();
                    _this.CounterAnimeGroup2.getChildAt(i).events.onInputDown.removeAll();
                }
            }
        }
    },

    dragUpdate1: function (dragCounter) {
        let frontpos = 0;

        //console.log("name of counter1: " + dragCounter.name ); 
        //+ ":" + _this.name);
        var dragCounterX = dragCounter.x;
        var dragCounterY = dragCounter.y;

        for (k = 0; k < _this.CounterAnimeGroup1.length; k++) {
            //console.log(k);
            _this.CounterAnimeGroup1.getChildAt(k).y = dragCounterY;
            _this.CounterAnimeGroup1.getChildAt(k).x = dragCounterX + 30 * frontpos;
            frontpos++;
        }
    },

    dragUpdate2: function (dragCounter) {
        let frontpos = 0;

        //console.log("name of counter2: " + dragCounter.name+ ":" + _this.name);
        var dragCounterX = dragCounter.x;
        var dragCounterY = dragCounter.y;

        for (k = 0; k < _this.CounterAnimeGroup2.length; k++) {
            //console.log(k);
            _this.CounterAnimeGroup2.getChildAt(k).y = dragCounterY;
            _this.CounterAnimeGroup2.getChildAt(k).x = dragCounterX + 30 * frontpos;
            frontpos++;
        }
    },

    dragStop1: function (Counter) {
        console.log("dragStop1");
        if (Counter.x >= 80 && Counter.x <= 800 && Counter.y <= 270 && Counter.y >= 190 && _this.top1 <= 17) {
            //console.log(Counter.x + " " + Counter.y);
            for (i = 0; i < _this.CounterAnimeGroup1.length; i++) {
                frame = _this.CounterAnimeGroup1.getChildAt(i).frame;
                if (frame == 2) {
                    _this.CounterAnimeGroup1.getChildAt(i).frame = 3;
                }
                else {
                    _this.CounterAnimeGroup1.getChildAt(i).frame = 2;
                }
                _this.CounterAnimeGroup1.getChildAt(i).inputEnabled = true;
                _this.CounterAnimeGroup1.getChildAt(i).input.enableDrag(false);
                _this.CounterAnimeGroup1.getChildAt(i).x = _this.Counter_position_emptyBox[_this.top1];
                _this.CounterAnimeGroup1.getChildAt(i).y = 214;
                //_this.CounterAnimeGroup1.getChildAt(i).name = String(i);
                //console.log( "name of the counter Stop1: " + _this.CounterAnimeGroup1.getChildAt(i).name);
                _this.top1++;
                _this.CounterAnimeGroup1.getChildAt(i).events.onDragStop.removeAll();
                _this.CounterAnimeGroup1.getChildAt(i).events.onDragUpdate.removeAll();
                _this.CounterAnimeGroup1.getChildAt(i).events.onInputDown.removeAll();
                //console.log(_this.top1);
            }
            //_this.CounterAnimeGroup1Copy = _this.add.group();
            for (i = 0; i < _this.currentFactorBoxElement; i++) {
                _this.GroupCopy1Duplicate.addChild(_this.GroupCopy1.getChildAt(0));
            }

            //console.log(_this.GroupCopy1Duplicate);
            _this.GroupCopy1 = null;
            _this.GroupCopy1 = _this.add.group();

            if (_this.top1 < _this.hcfarray[0]) {
                for (var i = 0; i < _this.currentFactorBoxElement; i++) {
                    let Counter = _this.add.sprite(0, 0, 'FourColorBox');
                    Counter.frame = _this.CounterAnimeGroup1.getChildAt(i).frame;
                    if (Counter.frame == 2) {
                        Counter.frame == 3;
                    }
                    else {
                        Counter.frame == 2;
                    }
                    Counter.x = _this.CounterAnimeGroup1.getChildAt(i).x;
                    Counter.y = _this.CounterAnimeGroup1.getChildAt(i).y;

                    _this.GroupCopy1.addChild(Counter);
                    _this.CounterAnimeGroup1.getChildAt(i).inputEnabled = true;
                    _this.CounterAnimeGroup1.getChildAt(i).input.enableDrag(true);
                    _this.CounterAnimeGroup1.getChildAt(i).events.onDragUpdate.add(_this.dragUpdate1, _this);
                    _this.CounterAnimeGroup1.getChildAt(i).events.onDragStop.add(_this.dragStop1, _this);
                }
            }
            else if (_this.top1 == _this.hcfarray[0]) {
                for (var i = 0; i < _this.currentFactorBoxElement; i++) {
                    _this.emptyBox1_Glow.visible = false;
                    _this.CounterAnimeGroup1.getChildAt(i).inputEnabled = false;
                    _this.CounterAnimeGroup1.getChildAt(i).input.enableDrag(false);
                    _this.CounterAnimeGroup1.getChildAt(i).events.onDragStop.removeAll();
                    _this.CounterAnimeGroup1.getChildAt(i).events.onDragUpdate.removeAll();
                    _this.CounterAnimeGroup1.getChildAt(i).events.onInputDown.removeAll();
                    if (_this.top2 < _this.hcfarray[1]) {
                        _this.emptyBox2_Glow.visible = true;
                        _this.CounterAnimeGroup2.getChildAt(i).inputEnabled = true;
                        _this.CounterAnimeGroup2.getChildAt(i).input.useHandCursor = true;
                        _this.CounterAnimeGroup2.getChildAt(i).events.onInputDown.add(_this.ClickEnable2, _this);


                    }
                    else {
                        _this.emptyBox2_Glow.visible = false;
                        _this.CounterAnimeGroup2.getChildAt(i).inputEnabled = false;
                        _this.CounterAnimeGroup2.getChildAt(i).events.onInputDown.removeAll();
                    }
                }

            }
            else {
                if (_this.top1 > _this.hcfarray[0]) {
                    for (i = 0; i < _this.currentFactorBoxElement; i++) {
                        _this.emptyBox1_Glow.visible = false;
                        _this.CounterAnimeGroup1.getChildAt(i).inputEnabled = false;
                        _this.CounterAnimeGroup1.getChildAt(i).input.enableDrag(false);
                        _this.CounterAnimeGroup1.getChildAt(i).events.onDragStop.removeAll();
                        _this.CounterAnimeGroup1.getChildAt(i).events.onDragUpdate.removeAll();
                        _this.CounterAnimeGroup1.getChildAt(i).events.onInputDown.removeAll();
                    }
                }
            }
            _this.EvaluationOfHcf();

        }
        else {
            var start_idx = _this.top1 - _this.currentFactorBoxElement;
            console.log("inside else partaaaaaaaaaaaaaaaaaaaaaaa. Start idx: " + start_idx);
            for (i = 0; i < _this.currentFactorBoxElement; i++) {
                _this.CounterAnimeGroup1.getChildAt(i).x = _this.Counter_position_emptyBox[start_idx];
                _this.CounterAnimeGroup1.getChildAt(i).y = 214;
                //_this.CounterAnimeGroup1.getChildAt(i).frame = _this.GroupCopy1.getChildAt(i).frame;
                //console.log("EEEEEEEEEEElse x: " + _this.Counter_position_emptyBox[start_idx]);
                start_idx++;
            }
        }
    },

    dragStop2: function (Counter) {
        if (Counter.x >= 80 && Counter.x <= 800 && Counter.y <= 320 && Counter.y >= 250 && _this.top2 <= 17) {
            for (i = 0; i < _this.CounterAnimeGroup2.length; i++) {
                frame = _this.CounterAnimeGroup2.getChildAt(i).frame;
                if (frame == 2) {
                    _this.CounterAnimeGroup2.getChildAt(i).frame = 3;
                }
                else {
                    _this.CounterAnimeGroup2.getChildAt(i).frame = 2;
                }
                _this.CounterAnimeGroup2.getChildAt(i).inputEnabled = true;
                _this.CounterAnimeGroup2.getChildAt(i).input.enableDrag(false);
                _this.CounterAnimeGroup2.getChildAt(i).x = _this.Counter_position_emptyBox[_this.top2];
                _this.CounterAnimeGroup2.getChildAt(i).y = 309;
                //_this.CounterAnimeGroup1.getChildAt(i).name = String(i);
                //console.log( "name of the counter Stop2: " + _this.CounterAnimeGroup1.getChildAt(i).name);
                _this.top2++;
                _this.CounterAnimeGroup2.getChildAt(i).events.onDragStop.removeAll();
                _this.CounterAnimeGroup2.getChildAt(i).events.onDragUpdate.removeAll();
                _this.CounterAnimeGroup2.getChildAt(i).events.onInputDown.removeAll();
            }
            //_this.CounterAnimeGroup2Copy = _this.add.group();

            for (i = 0; i < _this.currentFactorBoxElement; i++) {
                _this.GroupCopy2Duplicate.addChild(_this.GroupCopy2.getChildAt(0));
            }

            _this.GroupCopy2 = null;
            _this.GroupCopy2 = _this.add.group();

            if (_this.top2 < _this.hcfarray[1]) {
                for (var i = 0; i < _this.currentFactorBoxElement; i++) {
                    let Counter = _this.add.sprite(0, 0, 'FourColorBox');
                    Counter.frame = _this.CounterAnimeGroup2.getChildAt(i).frame;
                    if (Counter.frame == 2) {
                        Counter.frame == 3;
                    }
                    else {
                        Counter.frame == 2;
                    }
                    Counter.frame = _this.CounterAnimeGroup2.getChildAt(i).frame;
                    Counter.x = _this.CounterAnimeGroup2.getChildAt(i).x;
                    Counter.y = _this.CounterAnimeGroup2.getChildAt(i).y;
                    _this.GroupCopy2.addChild(Counter);
                    _this.CounterAnimeGroup2.getChildAt(i).inputEnabled = true;
                    _this.CounterAnimeGroup2.getChildAt(i).input.enableDrag(true);
                    _this.CounterAnimeGroup2.getChildAt(i).events.onDragUpdate.add(_this.dragUpdate2, _this);
                    _this.CounterAnimeGroup2.getChildAt(i).events.onDragStop.add(_this.dragStop2, _this);
                }
            }
            else if (_this.top2 == _this.hcfarray[1]) {
                for (var i = 0; i < _this.currentFactorBoxElement; i++) {
                    _this.emptyBox2_Glow.visible = false;
                    _this.CounterAnimeGroup2.getChildAt(i).inputEnabled = false;
                    _this.CounterAnimeGroup2.getChildAt(i).input.enableDrag(false);
                    _this.CounterAnimeGroup2.getChildAt(i).events.onDragStop.removeAll();
                    _this.CounterAnimeGroup2.getChildAt(i).events.onDragUpdate.removeAll();
                    _this.CounterAnimeGroup2.getChildAt(i).events.onInputDown.removeAll();
                    if (_this.top1 < _this.hcfarray[0]) {
                        _this.emptyBox1_Glow.visible = true;
                        _this.CounterAnimeGroup1.getChildAt(i).inputEnabled = true;
                        _this.CounterAnimeGroup1.getChildAt(i).input.useHandCursor = true;
                        _this.CounterAnimeGroup1.getChildAt(i).events.onInputDown.add(_this.ClickEnable1, _this);


                    }
                    else {
                        _this.emptyBox1_Glow.visible = false;
                        _this.CounterAnimeGroup1.getChildAt(i).inputEnabled = false;
                        _this.CounterAnimeGroup1.getChildAt(i).events.onInputDown.removeAll();
                    }

                }

            }
            else {
                if (_this.top2 > _this.hcfarray[1]) {
                    for (i = 0; i < _this.currentFactorBoxElement; i++) {
                        _this.emptyBox2_Glow.visible = false;
                        _this.CounterAnimeGroup2.getChildAt(i).inputEnabled = false;
                        _this.CounterAnimeGroup2.getChildAt(i).input.enableDrag(false);
                        _this.CounterAnimeGroup2.getChildAt(i).events.onDragStop.removeAll();
                        _this.CounterAnimeGroup2.getChildAt(i).events.onDragUpdate.removeAll();
                        _this.CounterAnimeGroup2.getChildAt(i).events.onInputDown.removeAll();
                    }
                }
            }
            _this.EvaluationOfHcf();
        }
        else {
            var start_idx = _this.top2 - _this.currentFactorBoxElement;
            for (i = 0; i < _this.currentFactorBoxElement; i++) {
                _this.CounterAnimeGroup2.getChildAt(i).x = _this.Counter_position_emptyBox[start_idx];
                _this.CounterAnimeGroup2.getChildAt(i).y = 309;
                _this.CounterAnimeGroup2.getChildAt(i).frame = _this.GroupCopy2.getChildAt(i).frame;
                start_idx++;
            }
        }
    },

    EvaluationOfHcf: function () {
        console.log("inside EvaluationOfHcf");

        if (_this.hcfarray[0] == _this.top1 && _this.hcfarray[1] == _this.top2) {
            //            console.log("number pad");
            _this.counterCelebrationSound.play();
            _this.Choice = 1;

            _this.time.events.add(2000, function () {
                if (_this.count1 == 0) _this.Ask_Question(1);
                _this.numberPad();
            });
        }
        else if (_this.hcfarray[0] == _this.top1 && _this.hcfarray[1] < _this.top2) {
            _this.notFactorSound.play();
            _this.eraserGlow();
        }
        else if (_this.hcfarray[0] < _this.top1 && _this.hcfarray[1] == _this.top2) {
            _this.notFactorSound.play();
            _this.eraserGlow();
        }
        else if (_this.hcfarray[0] > _this.top1 && _this.hcfarray[1] < _this.top2) {
            _this.notFactorSound.play();
            _this.eraserGlow();
        }
        else if (_this.hcfarray[0] < _this.top1 && _this.hcfarray[1] > _this.top2) {
            _this.notFactorSound.play();
            _this.eraserGlow();
        }
    },

    eraserGlow: function () {
        //        _this.eraser.frame=1;
        //        _this.eraser.inputEnabled = true;
        //        _this.eraser.input.useHandCursor = true;
        //        _this.eraser.events.onInputDown.add(_this.eraserClicked,_this.eraser);
        _this.time.events.add(1500, function () {
            _this.eraserClicked();
        });

    },

    eraserClicked: function () {
        console.log("eraserClicked :");

        _this.eraser.frame = 0;
        _this.eraser.inputEnabled = false;
        _this.GroupCopy1.destroy();
        _this.GroupCopy2.destroy();
        _this.CounterAnimeGroup1.destroy();
        _this.CounterAnimeGroup2.destroy();
        _this.GroupCopy1Duplicate.destroy();
        _this.GroupCopy2Duplicate.destroy();
        //        _this.Group1.destroy();
        //        _this.Group2.destroy();

        _this.currentFactorBox.frame = 2;
        _this.currentFactorIndx++;

        _this.emptyBox1 = _this.add.sprite(55, 210, 'EmptyBox');
        _this.emptyBox1.visible = true;

        _this.emptyBox2 = _this.add.sprite(55, 305, 'EmptyBox');
        _this.emptyBox2.visible = true;

        _this.emptyBox1_Glow = _this.add.sprite(55, 210, 'EmptyBox_Glow');
        _this.emptyBox1_Glow.visible = false;

        _this.emptyBox2_Glow = _this.add.sprite(55, 305, 'EmptyBox_Glow');
        _this.emptyBox2_Glow.visible = false;

        _this.time.events.add(1000, function () {
            //            _this.Group1= _this.add.group();
            //            _this.Group2 = _this.add.group();

            _this.CounterAnimeGroup1 = _this.add.group();
            _this.CounterAnimeGroup2 = _this.add.group();

            _this.GroupCopy1 = _this.add.group();
            _this.GroupCopy2 = _this.add.group();

            _this.GroupCopy1Duplicate = _this.add.group();
            _this.GroupCopy2Duplicate = _this.add.group();

            //            for(let i=0; i<_this.hcfarray[0]; i++)
            //            {
            //                _this.Counter1 = _this.add.sprite( _this.Counter_position[i], 160, 'FourColorBox' );
            //                _this.Counter1.frame=1;
            //                _this.Group1.addChild(_this.Counter1);
            //            }
            //
            //            for(let j=0; j<_this.hcfarray[1]; j++)
            //            {
            //                _this.Counter2 = _this.add.sprite(_this.Counter_position[j], 360,'FourColorBox');
            //                _this.Counter2.frame = 0;
            //                _this.Group2.addChild(_this.Counter2);
            //            }
            _this.highlightFactor();
        });

    },

    numberPad: function () {

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
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);


        _this.enterTxt = _this.add.text(8, 8, "");
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fontSize = "30px";
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fill = '#65B4C3';

        _this.numpadTween = _this.add.tween(_this.numGroup);
        _this.AnswerBox.visible = true;
        //tween in the number pad after a second.
        _this.tweenNumPad();

    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.eraseScreen();
    },

    eraseScreen: function (target) {
        _this.selectedAns1 = '';
        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt.destroy();
        _this.enterTxt;
        _this.enterTxt.text = "";
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },
    numClicked: function (target) {
        //_this.rightbtn.inputEnabled = false;
        //_this.rightbtn.events.onInputDown.removeAll();

        _this.clickSound.play();
        _this.selectedAns1 = target.name;

        if (_this.selectedAns1 === 10 && target.name === 10) {
            _this.selectedAns1 = 0;
        }

        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt.visible = false;

        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;

        _this.enterTxt = _this.add.text(18, 10, "" + var_selectedAns1, { fontSize: '30px' });

        _this.enterTxt.align = 'right';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'normal';
        _this.AnswerBox.addChild(_this.enterTxt);
        _this.enterTxt.visible = true;

    },

    rightbtnClicked: function () {
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        _this.rightbtn_is_Clicked = true;
        if (_this.selectedAns1 === _this.currentFactorBoxElement) {
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.celebration();
            _this.repetition++;
            _this.time.events.add(1800, function () {
                _this.numGroup.destroy();
                _this.eraseScreen();
                _this.AnswerBox.visible = false;
                _this.GroupCopy1.destroy();
                _this.GroupCopy2.destroy();
                _this.CounterAnimeGroup1.destroy();
                _this.CounterAnimeGroup2.destroy();
                _this.GroupCopy1Duplicate.destroy();
                _this.GroupCopy2Duplicate.destroy();
                _this.Group1.destroy();
                _this.Group2.destroy();

                _this.emptyBox_First_num.destroy();
                _this.emptyBox_Second_num.destroy();

                _this.smallTxt.destroy();
                _this.largeTxt.destroy();
                _this.emptyBox1.destroy();
                _this.emptyBox2.destroy();
                _this.emptyBox1_Glow.destroy();
                _this.emptyBox2_Glow.destroy();
                _this.numberBox.destroy();
                _this.factorTxt.destroy();
                _this.factorbox.destroy();
                _this.factorGroup.destroy();
                _this.factorTxtGroup.destroy();

                _this.hcfShufflingArray = null;
                _this.hcfarray = null;
                _this.hcfShufflingArray = null;
                _this.FactorBoxArray = null;

                _this.rightbtn.events.onInputDown.removeAll();

                _this.hcfShufflingArray = [];
                _this.hcfarray = [];
                _this.hcfShufflingArray = [];
                _this.FactorBoxArray = [];

            });

            if (_this.count1 < 6) {
                _this.time.events.add(2000, function () {
                    _this.rightbtn_is_Clicked = false;
                    _this.Choice = 0;
                    _this.speakerbtn.inputEnabled = true;
                    _this.gotoMultiples(_this.repetition);
                });
            }
            else {
                _this.timer1.stop();
                _this.timer1 = null;
                //                _this.time.events.add(2000,function(){ window.parent.location.reload();});
                _this.time.events.add(1900, function () {

                    //* transition to score. Score App version will show score menu - home/replay/next.
                    //* Score Diksha version will end the session and show the score.
                    //* appropriate version of the score should be present in commonjsfiles folder.
                    //_this.state.start('score');
                    _this.state.start('score', true, false,gameID,_this.microConcepts);
                });
            }
        }
        else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.rightbtn.inputEnabled = true;
            _this.rightbtn.input.useHandCursor = true;
            _this.rightbtn_is_Clicked = false;
            _this.time.events.add(1000, function () {
                _this.numGroup.destroy();
                _this.eraseScreen();
                _this.AnswerBox.visible = false;
            });

            _this.Choice = 1;
            //_this.Ask_Question(1);

            _this.time.events.add(2000, function () {
                _this.numberPad();
            });
        }
    },
}



