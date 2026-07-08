Game.NS_OE_1A_G6level1 = function () { };


Game.NS_OE_1A_G6level1.prototype =
{

    init: function (game) {
        _this = this;
        console.log("Ipdated");
        //* This game is to identify odd or even numbers. one tray of egg/apples get filled
        //* with random number of apples/eggs. child has to identify if it is odd/even number.
        //* Randomized apple/eggs and numbers.

        //* use the language selected to form the string for url of the audio files.
        //* need to populate that from a parameter that is passed.
        //* 
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

        _this.arrangeinpairs = document.createElement('audio');
        _this.arrangeinpairssrc = document.createElement('source');
        _this.arrangeinpairssrc.setAttribute("src", window.baseUrl + "questionSounds/NS-OE-1A-G6/" + _this.languageSelected
            + "/OE-drag.mp3");
        _this.arrangeinpairs.appendChild(_this.arrangeinpairssrc);


        _this.oddquestionSound = document.createElement('audio');
        _this.oddquestionSoundsrc = document.createElement('source');
        _this.oddquestionSoundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-OE-1A-G6/" + _this.languageSelected
            + "/NS-OE-1A-G6-a.mp3");
        _this.oddquestionSound.appendChild(_this.oddquestionSoundsrc);

        _this.evenquestionSound = document.createElement('audio');
        _this.evenquestionSoundsrc = document.createElement('source');
        _this.evenquestionSoundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-OE-1A-G6/" + _this.languageSelected
            + "/NS-OE-1A-G6-b.mp3");
        _this.evenquestionSound.appendChild(_this.evenquestionSoundsrc);

        _this.hatchSound = document.createElement('audio');
        _this.hatchSoundsrc = document.createElement('source');
        _this.hatchSoundsrc.setAttribute("src", window.baseUrl + "sounds/egg_cracking.wav");
        _this.hatchSound.appendChild(_this.hatchSoundsrc);

        _this.tweenSound = document.createElement('audio');
        _this.tweenSoundsrc = document.createElement('source');
        _this.tweenSoundsrc.setAttribute("src", window.baseUrl + "sounds/Egg_Counter_onTray.mp3");
        _this.tweenSound.appendChild(_this.tweenSoundsrc);
        _this.tweenSound.volume = 0.5;

        telInitializerbbpp.gameIdInit("NSN_OE_1_G6", gradeSelected);
        console.log(gameID, "gameID...");

    },


    create: function (game) {

        _this.questionid = null;
        _this.noofAttempts = 0;
        _this.sceneCount = 0;
        _this.AnsTimerCount = 0;

        _this.count1 = 0;

        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        _this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        // //* variables used for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        _this.microConcepts;
      //  _this.grade;

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        //* for speaker button to play appropriate question - let us arrange../is it even/is itodd
        _this.AskOddEvenAudio = false;

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
                // console.log(_this.game_id);
                // console.log(_this.userHasPlayed);
                // console.log(_this.timeinMinutes);
                // console.log(_this.timeinSeconds);
                // console.log(_this.score, "score");
                // console.log(_this.gradeTopics);
                // console.log(_this.grade);
                // console.log(_this.microConcepts);
            });
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');
        _this.speakerbtn.inputEnabled = false;

        _this.speakerbtn.events.onInputDown.add(function () {
            console.log("ENterd speaker");

            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                //console.log("speaker if: " + _this.AskOddEvenAudio + ":" + _this.array_audioquestion[0]);
                _this.speakerbtnClicked = true;
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                if (_this.AskOddEvenAudio == true && _this.array_AudioQtype[_this.count1] == 1)
                    _this.oddquestionSound.play();
                else if (_this.AskOddEvenAudio == true && _this.array_AudioQtype[_this.count1] == 0)
                    _this.evenquestionSound.play();
                else if (_this.AskOddEvenAudio == false)
                    _this.arrangeinpairs.play();

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

        _this.QuestionBox = _this.add.image(865, 215, "NumberBox");

        _this.Egg = _this.add.sprite(64, 203, 'Egg');
        _this.Egg = _this.add.sprite(114, 203, 'Egg');
        _this.Egg2 = _this.add.sprite(64, 253, 'Egg');
        _this.Egg2.frame = 0;

        _this.array_egg_x = [64, 114, 164, 214, 264, 314, 364, 414, 464, 514, 564, 614, 664, 714, 764];
        _this.array_apple_x = [67, 117, 167, 217, 267, 317, 367, 417, 467, 517, 567, 617, 667, 717, 767];

        _this.eggBasketx = [40, 43, 46, 49, 52, 55, 58];
        _this.eggBaskety1 = 450;
        _this.eggBaskety2 = 455;

        _this.array_audioquestion = [0, 1]; //* 0 - is it even. 1 - is it odd?
        _this.array_traytype = [0, 1];
        _this.array_numbertype = [];
        _this.array_OddEvenCombo = [0, 1];  //* 0 - Even, Even, Odd. 1- Odd, Odd, Even. Ask one of these.

        _this.array_OddEvenComboAudio = [0, 1]; //* 0 - Is it Even (twice) and Is it Odd once.
        //* 1 - Is it Odd (twice) and Is it even once.
        //* shuffle it before starting.
        _this.array_AudioQtype = []; //* this will store 0,1,1 or 1,0,0 (E,O,O or O,E,E)

        _this.array_oddnumber = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
        _this.array_evennumber = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

        _this.getQuestion();


    },

    stopVoice: function () {
        if (_this.arrangeinpairs) {
            _this.arrangeinpairs.pause();
            _this.arrangeinpairs = null;
            _this.arrangeinpairssrc = null;
        }

        if (_this.oddquestionSound) {
            _this.oddquestionSound.pause();
            _this.oddquestionSound = null;
            _this.oddquestionSoundsrc = null;
        }

        if (_this.evenquestionSound) {
            _this.evenquestionSound.pause();
            _this.evenquestionSound = null;
            _this.evenquestionSoundsrc = null;
        }
        if (_this.celebrationSound) {
            if (_this.celebrationSound.isPlaying) {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }
    },

    EnableVoice: function () {

        if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
        }

    },

    shuffle: function (array) {
        //console.log('hi');
        var currentIndex = array.length;
        var temporaryValue, randomIndex;
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
        _this.sceneCount++;

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

        //* shuffle the even and odd arrays.
        _this.array_evennumber = _this.shuffle(_this.array_evennumber);
        _this.array_oddnumber = _this.shuffle(_this.array_oddnumber);

        //* shuffle the combination array. And then Decide to ask Even Even and Odd or Odd, Odd, Even.
        _this.array_OddEvenCombo = _this.shuffle(_this.array_OddEvenCombo);

        //* And then Decide to ask Even Even and Odd (0) or Odd, Odd, Even (if it is 1).
        //* pick the numbers from the even or odd number array accordingly.
        //* so array_numbertype has 3 numbers to be asked in this game instance.
        if (_this.array_OddEvenCombo[0] == 0) {
            _this.array_numbertype[0] = _this.array_evennumber[0];
            _this.array_numbertype[1] = _this.array_evennumber[1];
            _this.array_numbertype[2] = _this.array_oddnumber[0];
        }
        else {
            _this.array_numbertype[0] = _this.array_oddnumber[0];
            _this.array_numbertype[1] = _this.array_oddnumber[1];
            _this.array_numbertype[2] = _this.array_evennumber[0];
        }

        //* shuffle the number type array to randomize the selected 3 numbers. 
        _this.array_numbertype = _this.shuffle(_this.array_numbertype);

        //* shuffle the odd even combo audio array and pick which combo Audio Qns will be used
        //* for this game session (ie, choose between Is it Even/E/Odd / Is it Even/Odd/O)
        _this.array_OddEvenComboAudio = _this.shuffle(_this.array_OddEvenComboAudio);

        if (_this.array_OddEvenComboAudio[0] == 0) {
            _this.array_AudioQtype[0] = 0;
            _this.array_AudioQtype[1] = 0;
            _this.array_AudioQtype[2] = 1;
        }
        else {
            _this.array_AudioQtype[0] = 0;
            _this.array_AudioQtype[1] = 1;
            _this.array_AudioQtype[2] = 1;
        }

        _this.array_AudioQtype = _this.shuffle(_this.array_AudioQtype); //* shuffleit bfore using to ask Qstn.

        //* randomize the numbers, egg/apple array and the audio question to be asked
        this.start();

        _this.questionid = 1;


    },

    start: function () {
        _this.randomizing_elements();

        _this.AskOddEvenAudio = false;
        _this.EnableVoice();

        _this.gotoOddEven();
    },

    gotoOddEven: function () {
        _this.AskQuestion();
        _this.EggOrApple = _this.array_traytype[0];  //* change to an index. (to be incremented later)

        _this.traychosen = _this.array_traytype[0]; //* change to an index which should be ++ later

        _this.readyToPlace();
    },

    AskQuestion: function () {
        _this.enterTxt = _this.add.text(895, 247, "" + _this.question, { fontSize: '30px' });
        _this.enterTxt.anchor.setTo(0.5);
        // _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#F04C26';
        _this.enterTxt.fontWeight = 'normal';
    },

    //* shuffle the question text to ask (is it even or is it odd)
    //* pick the number to ask from numbertype array and set a flag
    //* shuffle the egg/apple array for selecting randomly.
    randomizing_elements: function () {

        //* shuffle the array to decide which audio to play for the question.
        //_this.array_audioquestion = _this.shuffle(_this.array_audioquestion);
        //_this.array_AudioQtype

        //* pick the number to ask now.
        _this.question = _this.array_numbertype[_this.count1];

        if (_this.question % 2 == 0)  //* if it is even
        {
            _this.IsEvenOdd = 0;
            console.log("Even. The question is " + _this.question);
        }
        else   //* if it is odd
        {
            _this.IsEvenOdd = 1;
            console.log("Odd. The question is " + _this.question);
        }

        //* use the egg or apple array and shuffle it
        _this.array_traytype = _this.shuffle(_this.array_traytype);

    },

    readyToPlace: function () {
        var audio_delay = 1000;

        if (_this.count1 == 0) {
            _this.arrangeinpairs.play(); //* play "let us arrange.." only first time.
            audio_delay = 3800;   //* for first question, audio Q is played, so higher delay
        }

        // _this.array_traytype[0]=1; //**************** to be removed...for testing
        // _this.traychosen=1; //**************** to be removed...for testing

        if (_this.array_traytype[0] == 1) {
            _this.Basket = _this.add.sprite(35, 407, "eggBasket");
            _this.Basket.frame = 13;
            _this.eggTray = _this.add.image(35, 180, "Eggtray");
            _this.time.events.add(audio_delay, function () {
                _this.counterCelebrationSound.play();
                _this.Basket.frame = 14;

                //* show eggs or apples which need to be dragged initially
                _this.ShowInitialDragObj(1);

                //                _this.Basket.inputEnabled = true;
                //                _this.Basket.input.useHandCursor=true;

                //                _this.Basket.input.enableDrag(true);
                //                //_this.Basket.events.onDragUpdate.add(_this.dragUpdate, Counter);
                //                _this.Basket.events.onDragStop.add();

            });
        }
        else {
            console.log('placing apple basket')
            _this.Basket = _this.add.sprite(35, 407, "appleBasket");
            _this.Basket.frame = 13;
            _this.appleTray = _this.add.image(35, 180, "Appletray");
            _this.time.events.add(audio_delay, function () {
                _this.counterCelebrationSound.play();
                _this.Basket.frame = 14;
                //                _this.Basket.inputEnabled = true;
                //                _this.Basket.input.useHandCursor=true;

                //* show eggs or apples which need to be dragged initially
                _this.ShowInitialDragObj(2);
            });
            //console.log("Enabling basket click");

            // _this.Basket.input.useHandCursor=true;
            //            _this.Basket.events.onInputDown.add(_this.placeEgg_Apple); //add onclick event.


            console.log("Appletray");
            //* need to show apple filled basket and other things.
        }

    },

    ShowInitialDragObj: function (target) {
        //* show initial objects egg or apple on screen to be dragged.
        //* 1 means egg, 2 means apple
        if (target == 1) {
            _this.firstEgg1 = _this.add.sprite(90, 400, 'Egg');
            _this.firstEgg2 = _this.add.sprite(110, 400, 'Egg');

            _this.firstEgg1.name = "1";
            _this.firstEgg1.inputEnabled = true;
            _this.firstEgg1.input.useHandCursor = true;

            _this.firstEgg1.input.enableDrag(true);
            _this.firstEgg1.events.onDragStop.add(_this.firstEggDrop, _this);

            _this.firstEgg2.name = "2";
            _this.firstEgg2.inputEnabled = true;
            _this.firstEgg2.input.useHandCursor = true;

            _this.firstEgg2.input.enableDrag(true);
            _this.firstEgg2.events.onDragStop.add(_this.firstEggDrop, _this);

            _this.firstEgg1.events.onDragUpdate.add(_this.Egg_dragUpdate, _this.firstEgg1);
            _this.firstEgg2.events.onDragUpdate.add(_this.Egg_dragUpdate, _this.firstEgg2);
        }
        else {
            _this.firstApple1 = _this.add.sprite(90, 400, 'Apple');
            _this.firstApple2 = _this.add.sprite(110, 400, 'Apple');

            _this.firstApple1.name = "1";
            _this.firstApple1.inputEnabled = true;
            _this.firstApple1.input.useHandCursor = true;

            _this.firstApple1.input.enableDrag(true);
            _this.firstApple1.events.onDragStop.add(_this.firstAppleDrop, _this);

            _this.firstApple2.name = "2";
            _this.firstApple2.inputEnabled = true;
            _this.firstApple2.input.useHandCursor = true;

            _this.firstApple2.input.enableDrag(true);
            _this.firstApple2.events.onDragStop.add(_this.firstAppleDrop, _this);

            _this.firstApple1.events.onDragUpdate.add(_this.Apple_dragUpdate, _this.firstApple1);
            _this.firstApple2.events.onDragUpdate.add(_this.Apple_dragUpdate, _this.firstApple2);
        }
    },

    Egg_dragUpdate: function (target) {
        //        console.log(" IIIIIIIIIIIinside dragupdate: target: " + target.name);
        if (target.name == "1")  //* first egg is being dragged. update x,y of second egg accordingly.
        {
            _this.firstEgg2.x = target.x + 20;
            _this.firstEgg2.y = target.y;
        }
        else   //* second egg is being dragged. update x,y of the first one
        {
            _this.firstEgg1.x = target.x - 20;
            _this.firstEgg1.y = target.y;
        }
    },

    Apple_dragUpdate: function (target) {
        //        console.log(" FFFFFFFFFFinside dragupdate: target: " + target.name);
        if (target.name == "1")  //* first apple is being dragged. update x,y of second apple accordingly.
        {
            _this.firstApple2.x = target.x + 20;
            _this.firstApple2.y = target.y;
        }
        else   //* second apple is being dragged. update x,y of the first one
        {
            _this.firstApple1.x = target.x - 20;
            _this.firstApple1.y = target.y;
        }
    },

    firstEggDrop: function (target) {
        //* check if dragg stop location of egg is on the tray. 
        //* if it is on the tray, then place two eggs on the first two holes on the tray.
        //* once on tray, remove its events/functions.

        //* if it is placed else where take it back to the original position near basket.
        if (target.x >= 35 && target.x <= 870 && target.y >= 150 && target.y <= 340) {
            if (target.name == "1") {
                target.x = _this.array_egg_x[0];
                target.y = 203;
                _this.firstEgg2.x = _this.array_egg_x[0];
                _this.firstEgg2.y = 253;
            }
            else {
                target.x = _this.array_egg_x[0];
                target.y = 253;
                _this.firstEgg1.x = _this.array_egg_x[0];
                _this.firstEgg1.y = 203;
            }

            target.inputEnabled = false;
            target.input.useHandCursor = false;

            target.input.enableDrag(false);
            target.events.onDragStop.removeAll();
            target.events.onDragUpdate.removeAll();
            target.events.onInputDown.removeAll();

            _this.placeEgg_Apple(); //continue to place the eggs now onwards.
        }
        else  //* if dropped else where, take it back near basket.
        {
            _this.firstEgg1.x = 90;
            _this.firstEgg1.y = 400;
            _this.firstEgg2.x = 110;
            _this.firstEgg2.y = 400;
        }
    },

    firstAppleDrop: function (target) {
        //* check if dragg stop location of apple is on the tray. 
        //* if it is on the tray, then place two apples on the first two holes on the tray.
        //* once on tray, remove its events/functions.

        //* if it is placed else where take it back to the original position near basket.
        if (target.x >= 35 && target.x <= 870 && target.y >= 150 && target.y <= 340) {
            if (target.name == "1") {
                target.x = _this.array_apple_x[0];
                target.y = 203;
                _this.firstApple2.x = _this.array_egg_x[0];
                _this.firstApple2.y = 253;
            }
            else {
                target.x = _this.array_apple_x[0];
                target.y = 253;
                _this.firstApple1.x = _this.array_apple_x[0];
                _this.firstApple1.y = 203;
            }

            target.inputEnabled = false;
            target.input.useHandCursor = false;

            target.input.enableDrag(false);
            target.events.onDragStop.removeAll();
            target.events.onDragUpdate.removeAll();
            target.events.onInputDown.removeAll();

            _this.placeEgg_Apple(); //continue to place the eggs now onwards.
        }
        else  //* if dropped else where, take it back near basket.
        {
            _this.firstApple1.x = 90;
            _this.firstApple1.y = 400;
            _this.firstApple2.x = 110;
            _this.firstApple2.y = 400;
        }
    },

    placeEgg_Apple: function () {

        //_this.clickSound.play();
        _this.Basket.frame = 13;
        //* prevent any more clicks
        _this.Basket.events.onInputDown.removeAll();
        _this.Basket.inputEnabled = false;

        _this.eggGroup = _this.add.group();
        _this.eggTweenGroup = _this.add.group();
        _this.appleGroup = _this.add.group();
        _this.appleTweenGroup = _this.add.group();

        //* if current random selection is egg, then tween eggs else apples to the tray
        if (_this.EggOrApple == 1) {
            console.log("it is egg!!");
            _this.TweenEggs();
        }
        else {
            console.log("it is apples!!");
            _this.TweenApples();
        }
    },

    TweenEggs: function () {
        var tween_LoopCount = 0;

        //* add the eggs dragged to the group
        _this.eggGroup.addChild(_this.firstEgg1);
        _this.eggGroup.addChild(_this.firstEgg2);

        tween_LoopCount = Math.floor(_this.question / 2);
        let tween_LoopCounthalf = Math.floor((tween_LoopCount / 2));

        for (let i = 1; i < tween_LoopCount; i++) {
            _this.time.events.add(750 * i, function () {

                let moveEgg1 = _this.add.sprite(40, 450, 'Egg');
                let moveEgg2 = _this.add.sprite(60, 450, 'Egg');

                _this.eggGroup.addChild(moveEgg1);
                _this.eggGroup.addChild(moveEgg2);

                let clickMoveAction1 = _this.add.tween(moveEgg1);
                let clickMoveAction2 = _this.add.tween(moveEgg2);
                clickMoveAction1.to({ x: _this.array_egg_x[i], y: 203 }, 500, 'Linear', true, 0);
                clickMoveAction2.to({ x: _this.array_egg_x[i], y: 253 }, 500, 'Linear', true, 0);

                _this.time.events.add(500, function () {
                    _this.tweenSound.play();
                });

                if (i >= tween_LoopCounthalf) {
                    _this.Basket.frame = 7;
                    xyz = tween_LoopCount - 2;
                    abc = tween_LoopCount - 1;
                    if (i >= xyz && i < abc) { _this.Basket.frame = 4; }
                    else if (i == abc) {
                        if (_this.IsEvenOdd == 0)
                            _this.Basket.frame = 0;
                        else
                            _this.Basket.frame = 1;
                    }

                }

            });

        }

        //* move the last egg if the current question is odd.
        if (_this.IsEvenOdd == 1) {
            _this.time.events.add(750 * tween_LoopCount, function () {

                _this.moveEgg1 = _this.add.sprite(40, 450, 'Egg');
                _this.eggGroup.addChild(_this.moveEgg1);
                let clickMoveAction1 = _this.add.tween(_this.moveEgg1);
                clickMoveAction1.to({ x: _this.array_egg_x[tween_LoopCount], y: 203 }, 500, 'Linear', true, 0);

                _this.time.events.add(500, function () {
                    _this.tweenSound.play();
                });

                _this.time.events.add(1500, function () {
                    _this.hatchSound.play();
                    _this.eggfinal = _this.eggGroup.getChildAt(tween_LoopCount * 2).frame = 1;

                });
                _this.time.events.add(40, function () { _this.Basket.frame = 0; });
            });

        }
        _this.timedelay = tween_LoopCount;
        _this.questionAsk();
    },

    TweenApples: function () {
        var tween_LoopCount = 0;

        //* add the eggs dragged to the group
        _this.appleGroup.addChild(_this.firstApple1);
        _this.appleGroup.addChild(_this.firstApple2);

        tween_LoopCount = Math.floor(_this.question / 2);
        tween_LoopCounthalf = Math.floor(tween_LoopCount / 2);

        for (let i = 1; i < tween_LoopCount; i++) {
            _this.time.events.add(750 * i, function () {

                let moveApple1 = _this.add.sprite(40, 450, 'Apple');
                let moveApple2 = _this.add.sprite(60, 450, 'Apple');

                _this.appleGroup.addChild(moveApple1);
                _this.appleGroup.addChild(moveApple2);

                let clickMoveAction1 = _this.add.tween(moveApple1);
                let clickMoveAction2 = _this.add.tween(moveApple2);
                clickMoveAction1.to({ x: _this.array_apple_x[i], y: 203 }, 500, 'Linear', true, 0);
                clickMoveAction2.to({ x: _this.array_apple_x[i], y: 253 }, 500, 'Linear', true, 0);

                _this.time.events.add(500, function () {
                    _this.tweenSound.play();
                });

                if (i >= tween_LoopCounthalf) {

                    _this.Basket.frame = 7;
                    xyz = tween_LoopCount - 2;
                    abc = tween_LoopCount - 1;
                    if (i >= xyz && i < abc) { _this.Basket.frame = 4; }
                    else if (i == abc) {
                        if (_this.IsEvenOdd == 0)
                            _this.Basket.frame = 0;
                        else
                            _this.Basket.frame = 1;
                    }

                }

                //************ Change the basket frame in stages to show eggs reducing

            });

        }

        //* move the last egg if the current question is odd.
        if (_this.IsEvenOdd == 1) {
            // _this.Basket.frame=0;
            _this.time.events.add(750 * tween_LoopCount, function () {

                _this.moveApple1 = _this.add.sprite(40, 450, 'Apple');
                _this.appleGroup.addChild(_this.moveApple1);
                let clickMoveAction1 = _this.add.tween(_this.moveApple1);
                clickMoveAction1.to({ x: _this.array_apple_x[tween_LoopCount], y: 203 }, 500, 'Linear', true, 0);
                // clickMoveAction1.to({ x: _this.array_apple_x[tween_LoopCount], y: 203 }, 1000, 'Quart', true, 0);

                _this.time.events.add(500, function () {
                    _this.tweenSound.play();
                });

                _this.time.events.add(1500, function () {
                    _this.hatchSound.play();
                    _this.applefinal = _this.appleGroup.getChildAt(tween_LoopCount * 2).frame = 1;

                });
                _this.time.events.add(40, function () { _this.Basket.frame = 0; });
            });
            //******* the last odd egg should hatch next
        }
        _this.timedelay = tween_LoopCount;
        _this.questionAsk();
    },

    questionAsk: function () {
        _this.AskOddEvenAudio = true;
        if (_this.array_AudioQtype[_this.count1] == 1) {
            _this.audioQ = 1; //* asking the audio question  "is it odd? "
            let timeforques = 750 * _this.timedelay + 750;
            _this.time.events.add(timeforques, function () {

                _this.time.events.add(1500, function () {

                    _this.oddquestionSound.play();
                    _this.speakerbtn.visible = true;
                    _this.thumbsUp.visible = true;
                    _this.thumbsDown.visible = true;
                });
            });
            console.log("Is the given number,odd?");

        }
        else {
            _this.audioQ = 0; //* asking the audio question  "is it even? "
            let timeforques = 750 * _this.timedelay + 750;
            _this.time.events.add(timeforques, function () {


                _this.time.events.add(1500, function () {
                    _this.evenquestionSound.play();
                    _this.speakerbtn.visible = true;
                    _this.thumbsUp.visible = true;
                    _this.thumbsDown.visible = true;
                });
                console.log("Is the given number,even?");

            });
        }

        _this.thumbsUp = _this.add.sprite(770, 380, 'ThumbsUp');
        _this.thumbsDown = _this.add.sprite(850, 380, 'ThumbsDown');
        _this.thumbsUp.visible = false;
        _this.thumbsDown.visible = false;
        _this.thumbsUp.inputEnabled = true;
        _this.thumbsDown.inputEnabled = true;
        _this.thumbsUp.input.useHandCursor = true;
        _this.thumbsDown.input.useHandCursor = true;

        _this.thumbsUp.events.onInputDown.add(function () {

            if (_this.thumbsUp.frame == 0) {
                _this.thumbsUp.frame = 1;
                console.log("frame swap");
            }
            else
                _this.thumbsUp.frame = 0;
            _this.thumbsDown.frame = 0;

            if (_this.thumbsUp.frame == 1 || _this.thumbsDown.frame == 1) {
                _this.tickButton.visible = true;
                _this.tickButton.input.useHandCursor = true;
            }
            else if (_this.thumbsUp.frame == 0 && _this.thumbsDown.frame == 0) {
                _this.tickButton.visible = false;

                console.log("Vanish");
            }
            //* Now, the answer chosen by user is thumbs up. There are 4 possibilities:
            //* Given number is even/odd and Audio Questions is it even / odd.
            //* 1._this.question is even; audio is is it even -> then answer is right.
            //* 2._this.question is even; audio is is it odd  -> then answer is wrong.
            //* 3._this.question is odd;  audio is is it even -> then answer is wrong.
            //* 4._this.question is odd;  audio is is it odd  -> then answer is right.
            if (_this.question % 2 == 0 && _this.audioQ == 0) {
                _this.answer = true;
            }
            else if (_this.question % 2 == 0 && _this.audioQ == 1) {
                _this.answer = false;
            }
            else if (_this.question % 2 != 0 && _this.audioQ == 0) {
                _this.answer = false;
            }
            else if (_this.question % 2 != 0 && _this.audioQ == 1) {
                _this.answer = true;
            }

        });


        _this.thumbsDown.events.onInputDown.add(function () {

            if (_this.thumbsDown.frame == 0) {
                _this.thumbsDown.frame = 1;
                console.log("frame swap");
            }
            else
                _this.thumbsDown.frame = 0;
            _this.thumbsUp.frame = 0;
            if (_this.thumbsUp.frame == 1 || _this.thumbsDown.frame == 1) {
                _this.tickButton.visible = true;
                _this.tickButton.input.useHandCursor = true;
            }
            else if (_this.thumbsUp.frame == 0 && _this.thumbsDown.frame == 0)
                _this.tickButton.visible = false;

            //* Now, the answer chosen by user is thumbs down. There are 4 possibilities:
            //* Given number is even/odd and Audio Questions is it even / odd.
            //* 1._this.question is even; audio is is it even -> then answer is wrong.
            //* 2._this.question is even; audio is is it odd  -> then answer is right.
            //* 3._this.question is odd;  audio is is it even -> then answer is right.
            //* 4._this.question is odd;  audio is is it odd  -> then answer is wrong.
            if (_this.question % 2 == 0 && _this.audioQ == 0) {
                _this.answer = false;
            }
            else if (_this.question % 2 == 0 && _this.audioQ == 1) {
                _this.answer = true;
            }
            else if (_this.question % 2 != 0 && _this.audioQ == 0) {
                _this.answer = true;
            }
            else if (_this.question % 2 != 0 && _this.audioQ == 1) {
                _this.answer = false;
            }

        });

        _this.tickButton = _this.add.sprite(820, 470, 'Tick');
        _this.tickButton.frame = 0;
        _this.tickButton.visible = false;

        _this.tickButton.inputEnabled = true;


        _this.tickButton.events.onInputDown.add(function () {
            _this.noofAttempts++;
            _this.rightbtn_is_Clicked = true;
            _this.tickButton.frame = 1;
            if (_this.answer == true) {
                // telInitializerbbpp.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                _this.tickButton.inputEnabled = false;
                _this.thumbsUp.inputEnabled = false;
                _this.thumbsDown.inputEnabled = false;
                _this.destroy();
                if (_this.array_traytype[0] == 0) {
                    for (var i = 0; i < _this.appleGroup.length; i++) {
                        _this.appleGroup.getChildAt(i).frame = 1;
                    }
                }
                else {
                    for (var i = 0; i < _this.eggGroup.length; i++) {
                        _this.eggGroup.getChildAt(i).frame = 1;
                    }
                }

                _this.hatchSound.play();
            }
            else {
                _this.wrongSound.play();
                _this.wrongbtnClicked();
                //_this.tickButton.visible = false;
                _this.gotoOddEven();

            }

            _this.time.events.add(1000, function () {
                _this.rightbtn_is_Clicked = false;
                _this.EnableVoice();
            });

        });


    },

    wrongbtnClicked: function () {
        //        _this.tickButton.frame = 0;
        //        _this.thumbsUp.frame = 0;
        //        _this.thumbsDown.frame = 0;
        _this.Basket.destroy();
        _this.thumbsDown.destroy();
        _this.thumbsUp.destroy();
        _this.enterTxt.destroy();
        _this.tickButton.destroy();

    },

    destroy: function () {

        _this.time.events.add(1000, function () {
            //            _this.speakerbtn.visible = false;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.AnsTimerCount = 0;
            _this.noofAttempts =0;
            
            _this.Basket.destroy();
            _this.thumbsDown.destroy();
            _this.thumbsUp.destroy();
            _this.enterTxt.destroy();
            _this.tickButton.destroy();
            _this.starActions();
            _this.celebrationSound.play();

            if (_this.count1 < 3) {
                _this.time.events.add(2000, function () { _this.start(); })
            }
            else {
                _this.timer1.stop();
                _this.time.events.add(2000, function () {
                    _this.stopVoice();
                    _this.state.start('NS_OE_1B_G6level1', false, false, _this.minutes, _this.seconds, _this.counterForTimer,gameID);
                });
            }
        });
    },

    starActions: function () {
        _this.score++;
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim = _this.starAnim.animations.add('star');
        // _this.userHasPlayed = 1;
        // _this.game_id='NS_OE_1A_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Numbers";
         _this.microConcepts = "Number Systems";
        _this.anim.play();
        _this.count1++;

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


    //   var dragPlus = _this.add.sprite(61,85,'plus');

    //          dragPlusDragAction = _this.add.tween(dragPlus);

    //          dragPlusDragAction.to({x: 45, y: _this.spoty_rectaglebox1 }, 1250, 'Quart', false, 0);
    //          dragPlusDragAction.onComplete.add(function() {dragPlus.destroy();});
    //          dragPlusDragAction.start();
    // },

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

    shutdown: function () {
        console.log("inside shutdown function");
    }


}