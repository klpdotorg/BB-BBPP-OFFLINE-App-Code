Game.NSF_9B_G6level1 = function () { };


Game.NSF_9B_G6level1.prototype =
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

       // telInitializerbbpp.gameIdInit("NSF_9A_G6", gradeSelected);
    },

    create: function (game) {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        //_this.sceneCount = 0;
        _this.questionid = null;

        //* initialize to 3 since already 3 stars are given in 9A game.
        _this.count1 = 3;
        // _this.count1 = 0;

        _this.wholeNoQues = -1;

        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        _this.number;
        _this.selectedAns1 = '';

        _this.qn_flag = 1;
        _this.draggableObj = [];
        _this.askedQues = [-1, -1, -1];
        _this.cases = [1, 2, 3, 4];

        // //* this is  for BBplus app 
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.grade;
        // _this.gradeTopics;
        _this.microConcepts; 
        gameID = gameID;
        // _this.score = 3;

        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NSF_9A_G6";
        // _this.grade = "6";
        // _this.gradeTopics = 'Fractions';
        // _this.microConcepts = 'Number Systems';


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


                _this.time.events.add(4000, function () {
                    _this.speakerbtnClicked = false;
                    _this.EnableVoice();

                });
            }


        }, _this);
        _this.boxesObj = [];
        _this.chosen = [];
        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ':' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);

        //* display the stars from of 9A game.
        _this.FM1stars1 = _this.add.sprite(390, 10, 'starAnim');//_this.world.centerX-20
        _this.FM1stars1.frame = 35;
        _this.FM1stars2 = _this.add.sprite(420, 10, 'starAnim');//_this.world.centerX-20
        _this.FM1stars2.frame = 35;
        _this.FM1stars3 = _this.add.sprite(450, 10, 'starAnim');//_this.world.centerX-20
        _this.FM1stars3.frame = 35;

        // To start game immeditely in association with NSF-9A
        _this.time.events.add(0, _this.getQuestion);


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


    askQn1: function () {
        // console.log("Select on the White strip to color to estimate ");
        if (_this.Question1) {
            _this.Question1.pause();
            _this.Question1.currentTime = 0;
        }
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        //_this.Question1src.setAttribute("src", "questionSounds/NSF-9B-G6/English/VoiceNote1.mp3");

        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-9B-G6/" +
            _this.languageSelected + "/NSF-9-G6-b.mp3");

        _this.Question1.appendChild(_this.Question1src);
        _this.Question1.play();
    },

    getQuestion: function () {
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
        _this.askQn1();
        _this.initialScreen();

        _this.questionid = 1;
        // _this.randomizing_elements();
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
        // _this.game_id='NSF_9A_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Fractions";
         _this.microConcepts = "Number Systems";
        _this.count1++;
        anim.play();
    },

    celebration: function () {
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },
    initialScreen: function () {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.scale = _this.add.image(48, 240, 'scale');
        _this.slider = _this.add.image(48, 235, 'arrow')
        _this.slider.scale.setTo(0.85)

        // _this.slider.events.onDragStop.add(_this.dragStop, _this);

        _this.zero = _this.add.text(47, 305, 0, { fontSize: '24px' })
        _this.one = _this.add.text(290, 305, 1, { fontSize: '24px' })
        _this.two = _this.add.text(533, 305, 2, { fontSize: '24px' })
        _this.three = _this.add.text(774, 305, 3, { fontSize: '24px' })

        // _this.scale.frame=10;
        _this.optionBox1 = _this.add.sprite(660, 370, 'TextBox2');
        _this.optionBox1.scale.setTo(0.8, 1)
        // Enable inputs for both the boxes here
        _this.optionBox1.inputEnabled = true;
        _this.optionBox1.events.onInputDown.add(_this.OptionClicked, this);

        _this.optionBox2 = _this.add.sprite(740, 370, 'TextBox2');
        _this.optionBox2.scale.setTo(0.8, 1)
        _this.optionBox2.inputEnabled = true;
        _this.optionBox2.events.onInputDown.add(_this.OptionClicked, this);

        _this.rightbtn = _this.add.sprite(820, 380, 'Rightbtn')
        // _this.rightbtn.frame=1
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);

        // _this.rightbtn.input.events.onClick()

        _this.quesBox = _this.add.image(840, 70, 'QuesBox');

        _this.randomize();
        if (_this.count1 == 3) {
            _this.showDrag();

        }
        else {
            _this.EnableSlider();
            _this.blueLine1.bringToTop();
            _this.blueLine2.bringToTop();
        }


    },
    EnableSlider: function () {
        _this.slider.inputEnabled = true;
        _this.slider.input.useHandCursor = true;

        _this.slider.input.allowVerticalDrag = false;
        _this.slider.input.allowHorizontalDrag = true;
        _this.slider.input.enableDrag(true);
        _this.slider.visible = true;
        _this.slider.input.dragFromCenter = false;

        _this.slider.events.onDragUpdate.add(_this.dragStop1, _this);
    },
    randomize: function () {

        // _this.numerator % _this.denominator >=0.5 
        // _this.denominator = 8;
        _this.denominator = Math.floor(Math.random() * (8 - 2 + 1) + 2);
        for (var i = 0; i <= _this.count1 - 3; i++) {
            if (_this.denominator == _this.askedQues[i]) {
                _this.denominator = Math.floor(Math.random() * (8 - 2 + 1) + 2);
                i = -1;
            }
            else if (_this.askedQues[i] == -1) {
                break;
            }
        }
        _this.askedQues[_this.count1 - 3] = _this.denominator;
        // _this.denominator=7;
        _this.numerator = 1;

        while (_this.numerator / _this.denominator < 0.5) {
            _this.numerator = Math.floor(Math.random() * (_this.denominator * 2.5 - 1) + 1);
        }

        // console.log(_this.numerator, _this.denominator);
        // _this.fillQuesBox();
        _this.randomizing_options();

    },
    swap: function () {
        var temp = _this.Option1Numerator;
        _this.Option1Numerator = _this.Option2Numerator;
        _this.Option2Numerator = temp;

        temp = _this.Option1Denom;
        _this.Option1Denom = _this.Option2Denom;
        _this.Option2Denom = temp;


    },
    randomizing_options: function () {
        var loopcount = 0;
        _this.Option1Denom = Math.floor(Math.random() * (8 - 2 + 1) + 2);
        _this.Option2Denom = Math.floor(Math.random() * (8 - 2 + 1) + 2);
        _this.Option1Numerator = Math.floor(Math.random() * (_this.Option1Denom * 2 - 1 - (_this.Option1Denom)) + (_this.Option1Denom));
        _this.Option2Numerator = Math.floor(Math.random() * (_this.Option2Denom * 2.5 - 1 - (_this.Option2Denom * 1.5)) + (_this.Option2Denom * 1.5));
        var Option1Dist = (720 / (_this.Option1Denom * 3)) * _this.Option1Numerator + 52;
        var Option2Dist = (720 / (_this.Option2Denom * 3)) * _this.Option2Numerator + 52;


        while ((_this.Option1Numerator / _this.Option1Denom) - (_this.Option2Numerator / _this.Option2Denom) < 0.5) {
            // console.log("inside while loop")

            if (loopcount > 5) {
                // console.log("breaking loop to avoid infinite loop")
                if (_this.Option2Numerator / _this.Option2Denom > 1.5) {

                    _this.Option2Numerator = _this.Option2Numerator - Math.floor(0.5 * _this.Option2Denom)

                }
                else {

                    _this.Option1Numerator = _this.Option1Numerator + Math.floor(0.5 * _this.Option1Denom)
                }

                break;
            }
            _this.Option1Numerator = Math.floor(Math.random() * (_this.Option1Denom * 2 - 1 - (_this.Option1Denom)) + (_this.Option1Denom));
            _this.Option2Numerator = Math.floor(Math.random() * (_this.Option2Denom * 2.5 - 1 - (_this.Option2Denom * 1.5)) + (_this.Option2Denom * 1.5));
            n2Numerator = Math.floor(Math.random() * (_this.Option2Denom * 3 - 1 - (_this.Option2Denom + 1) / 2) + (_this.Option2Denom + 1) / 2);

            loopcount += 1;
            Option1Dist = (720 / (_this.Option1Denom * 3)) * _this.Option1Numerator + 52;
            Option2Dist = (720 / (_this.Option2Denom * 3)) * _this.Option2Numerator + 52;

            if (Option1Dist < Option2Dist) {
                // console.log("Incorrect")
                _this.swap();
            }

        }

        // console.log("--Printing the options--")
        // console.log(_this.Option1Denom, _this.Option1Numerator);
        // console.log(_this.Option2Denom, _this.Option2Numerator);


        _this.checkQues();

        _this.storeDistance();

        _this.fillQuesBox();
        _this.fillOptions();

    },


    checkQues: function () {
        var QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;
        var Option1Dist = (720 / (_this.Option1Denom * 3)) * _this.Option1Numerator + 52;
        var Option2Dist = (720 / (_this.Option2Denom * 3)) * _this.Option2Numerator + 52;
        var choice = Math.floor(Math.random() * _this.cases.length) + 1;

        // Generating a random case scenario where 1 of 2 options should be closer to ques
        if (_this.chosen.length >= 1) {

            for (i = 0; i < _this.chosen.length; i++) {
                if (choice == _this.chosen[i]) {
                    choice = Math.floor(Math.random() * _this.cases.length) + 1;
                    // console.log("random case is ", choice)
                    i = 0;
                }

            }

        }
        if (_this.denominator == 2)
            choice = 4;

        _this.chosen.push(choice);
        //console.log(choice)

        switch (choice) {
            case 1:
                _this.makeCase1();
                break
            case 2:
                _this.makeCase2();
                break
            case 3:
                _this.makeCase3();

                break;
            case 4:
                _this.makeCase4();
                break;
        }

    },
    makeCase1: function () {
        // When ques is closer to first option right to it
        var Option1Dist = (720 / (_this.Option1Denom * 3)) * _this.Option1Numerator + 52;
        var Option2Dist = (720 / (_this.Option2Denom * 3)) * _this.Option2Numerator + 52;
        var QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;

        for (var i = 0; i < 3 * _this.denominator - 1; i++) {
            var distance = (720 / (_this.denominator * 3)) * (i + 1) + 52;
            //console.log(distance)
            //console.log(Option2Dist)
            QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;
            if (Option2Dist + 60 > distance) {
                _this.numerator = i + 1;
                //console.log(_this.numerator)
                QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;

            }

            else
                break;

        }
        QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;
        if (_this.Option2Numerator / _this.Option2Denom == _this.numerator / _this.denominator) {
            if (_this.Option2Numerator / _this.Option2Denom >= 1)
                _this.Option2Numerator = _this.Option2Numerator - 1;
            else {
                _this.numerator = _this.numerator + 1;
                _this.Option1Numerator = _this.Option1Numerator + 1;
            }
        }
        if ((QuesPos - Option2Dist) < 30 && _this.Option2Denom > 2 && _this.Option2Numerator / _this.Option2Denom >= 1) {
            _this.Option2Numerator = _this.Option2Numerator - 1;
        }
        if ((Option1Dist - QuesPos) - (QuesPos - Option1Dist) < 30) {

            _this.Option1Numerator = _this.Option1Numerator + 1;
        }


        // console.log(_this.numerator, _this.denominator);
        // console.log(_this.Option1Numerator, _this.Option1Denom);
        // console.log(_this.Option2Numerator, _this.Option2Denom);

    },
    makeCase2: function () {
        // Question closer to 2nd option left to it
        var k = 0;
        var Option1Dist = (720 / (_this.Option1Denom * 3)) * _this.Option1Numerator + 52;
        var Option2Dist = (720 / (_this.Option2Denom * 3)) * _this.Option2Numerator + 52;

        for (var i = 0; i < 3 * _this.denominator - 1; i++) {
            var distance = (720 / (_this.denominator * 3)) * (i + 1) + 52;
            //console.log(distance)
            //console.log(Option1Dist)

            QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;

            if (Option1Dist - 30 > distance) {
                _this.numerator = i + 1;
                //console.log(_this.numerator)
                QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;

            }

            else
                break;
        }
        var QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;
        var c = 0;
        if (QuesPos - Option2Dist <= Option1Dist - QuesPos) {
            while (QuesPos - Option2Dist <= Option1Dist - QuesPos) {
                _this.Option2Numerator = _this.Option2Numerator - 1;
                // console.log("changed num")
                Option2Dist = (720 / (_this.Option2Denom * 3)) * _this.Option2Numerator + 52;
                c++;
                if (c > 10)
                    break;
            }
        }
        if ((QuesPos - Option2Dist) - (Option1Dist - QuesPos) < 30) {

            if (_this.Option2Numerator / _this.Option2Denom >= 1) {

                _this.Option2Numerator = _this.Option2Numerator - 1;
            }
            else if ((720 / (_this.denominator * 3)) * _this.numerator + 1 + 52 < (Option2Dist + 30)) {
                _this.numerator = _this.numerator + 1;
            }
        }


    },
    makeCase3: function () {
        // Question closer to 1st option left to it

        var k = 0;
        var Option1Dist = (720 / (_this.Option1Denom * 3)) * _this.Option1Numerator + 52;
        var Option2Dist = (720 / (_this.Option2Denom * 3)) * _this.Option2Numerator + 52;

        for (var i = 0; i < 3 * _this.denominator - 1; i++) {
            var distance = (720 / (_this.denominator * 3)) * (i + 1) + 52;
            //console.log(distance)
            //console.log(Option2Dist)


            if (Option2Dist - 30 > distance) {
                _this.numerator = i + 1;
                //console.log(_this.numerator)
            }
            else
                break;
        }
        var QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;
        // Checking if still difference bcoz of denom 2
        if (Option2Dist - QuesPos >= 110 && _this.Option2Numerator > 2) {
            _this.Option2Numerator = _this.Option2Numerator - 1;
        }
        // console.log(_this.numerator, _this.denominator);
        // console.log(_this.Option1Numerator, _this.Option1Denom);
        // console.log(_this.Option2Numerator, _this.Option2Denom);

    },
    makeCase4: function () {
        // Question closer to 2nd right to it
        var Option1Dist = (720 / (_this.Option1Denom * 3)) * _this.Option1Numerator + 52;
        var Option2Dist = (720 / (_this.Option2Denom * 3)) * _this.Option2Numerator + 52;
        var QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;

        for (var i = 0; i < 3 * _this.denominator - 1; i++) {
            var distance = (720 / (_this.denominator * 3)) * (i + 1) + 52;

            QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;
            if (Option1Dist + 60 >= distance) {
                _this.numerator = i + 1;
                //console.log(_this.numerator)
                QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;

            }
            else if (Option1Dist >= QuesPos && _this.denominator == 2) {
                _this.numerator = i + 1;
                //console.log(_this.numerator)
                QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;

            }

            else
                break;

        }
        QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;
        if (_this.Option1Numerator / _this.Option1Denom == _this.numerator / _this.denominator) {
            _this.numerator = _this.numerator + 1;
        }
        if (Option1Dist - QuesPos == QuesPos - Option1Dist) {
            _this.Option2Numerator = _this.Option2Numerator - 1;
            // console.log("changed option 2 num")
        }
        if (QuesPos - Option1Dist < 30) {
            _this.numerator = _this.numerator + 1;
        }
        // For case 2 checking is option and ques at a distance greater than 110
        if (QuesPos - Option1Dist >= 110 && _this.Option1Denom > 2) {

            _this.Option1Numerator = _this.Option1Numerator + 1;
        }

        // console.log(_this.numerator, _this.denominator);
        // console.log(_this.Option1Numerator, _this.Option1Denom);
        // console.log(_this.Option2Numerator, _this.Option2Denom);


    },

    showDrag: function () {
        _this.tempGroup = _this.add.group();

        _this.tempSlider = _this.add.image(48, 235, 'arrow')
        _this.tempSlider.scale.setTo(0.85)
        _this.tempSlider.bringToTop();

        _this.tempGroup.addChild(_this.tempSlider);

        _this.time.events.add(1000, function () {
            _this.hand = _this.add.image(50, 230, 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.tempGroup.addChild(_this.hand);
        });


        _this.time.events.add(1500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.tempGroup);
            tempDragAction.to({ x: 230, y: 1 }, 800, 'Linear', true, 0);
            tempDragAction.start();

        });

        //* destroy the group after the show after a delay
        _this.time.events.add(3000, function () {
            _this.tempGroup.destroy();
            _this.EnableSlider();

        });


    },
    fillOptions: function () {
        _this.NumeratorOpText = _this.add.text(40, 31, _this.Option1Numerator, { fontSize: '24px' });
        _this.NumeratorOpText.anchor.setTo(0.5);
        _this.DenominatorOpText = _this.add.text(34, 45, _this.Option1Denom, { fontSize: '26px' })
        _this.optionBox1.addChild(_this.NumeratorOpText)
        _this.optionBox1.addChild(_this.DenominatorOpText)
        _this.NumeratorOpText.fill = '#65B4C3';
        _this.DenominatorOpText.fill = '#65B4C3';


        _this.NumeratorOp2Text = _this.add.text(40, 30, _this.Option2Numerator, { fontSize: '24px' });
        _this.NumeratorOp2Text.anchor.setTo(0.5)
        _this.DenominatorOp2Text = _this.add.text(34, 45, _this.Option2Denom, { fontSize: '26px' })
        _this.optionBox2.addChild(_this.NumeratorOp2Text)
        _this.optionBox2.addChild(_this.DenominatorOp2Text)
        _this.NumeratorOp2Text.fill = '#65B4C3';
        _this.DenominatorOp2Text.fill = '#65B4C3';
        var add1 = 48;
        var add2 = 48;
        if (_this.Option1Numerator / _this.Option1Denom > 1) {
            add1 = 50 + 2;
        }
        if (_this.Option2Numerator / _this.Option2Denom > 1) {
            add2 = 50 + 2;
        }

        if (_this.Option1Numerator / _this.Option1Denom >= 2) {
            add1 = 50 + 4.6;
        }
        if (_this.Option2Numerator / _this.Option2Denom >= 2) {
            // console.log("yes blue line 2")
            add2 = 50 + 4.6;
        }



        _this.blueLine1 = _this.add.image((720 / (_this.Option1Denom * 3)) * _this.Option1Numerator + add1, 240, 'BlueLine');
        _this.blueLine2 = _this.add.image((720 / (_this.Option2Denom * 3)) * _this.Option2Numerator + add2, 240, 'BlueLine');


        if (_this.count1 - 3 >= 1) {
            _this.blueLine1.bringToTop();
            _this.blueLine2.bringToTop();
        }



        if (_this.Option1Numerator < 10)
            _this.numOp1 = _this.add.text(_this.blueLine1.x - 5, 180, _this.Option1Numerator, { fontSize: '24px' })
        else
            _this.numOp1 = _this.add.text(_this.blueLine1.x - 10, 180, _this.Option1Numerator, { fontSize: '24px' })
        _this.line1 = _this.add.graphics();
        _this.line1.lineStyle(2, 0x65B4C3);
        _this.line1.moveTo(_this.blueLine1.x + 22, 210);
        _this.line1.lineTo(_this.blueLine1.x - 12, 210);

        _this.denomOp1 = _this.add.text(_this.blueLine1.x - 5, 210, _this.Option1Denom, { fontSize: '24px' })
        _this.numOp1.fill = '#65B4C3';
        _this.denomOp1.fill = '#65B4C3';

        if (_this.Option2Numerator < 10)
            _this.numOp2 = _this.add.text(_this.blueLine2.x - 5, 180, _this.Option2Numerator, { fontSize: '24px' })
        else
            _this.numOp2 = _this.add.text(_this.blueLine2.x - 10, 180, _this.Option2Numerator, { fontSize: '24px' })
        _this.line2 = _this.add.graphics();
        _this.line2.lineStyle(2, 0x65B4C3);
        _this.line2.moveTo(_this.blueLine2.x + 22, 210);
        _this.line2.lineTo(_this.blueLine2.x - 12, 210);

        _this.denomOp2 = _this.add.text(_this.blueLine2.x - 5, 210, _this.Option2Denom, { fontSize: '24px' })
        _this.numOp2.fill = '#65B4C3';
        _this.denomOp2.fill = '#65B4C3';


    },

    storeDistance: function () {
        // stores the distance of each option from ques 
        var QuesPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;
        var Option1Dist = (720 / (_this.Option1Denom * 3)) * _this.Option1Numerator + 52;
        var Option2Dist = (720 / (_this.Option2Denom * 3)) * _this.Option2Numerator + 52;

        if (Math.abs(Option1Dist - QuesPos) > Math.abs(Option2Dist - QuesPos)) {
            // console.log("second Option correct")
            _this.CorrectOption = _this.optionBox2;
        }
        else if (Math.abs(Option2Dist - QuesPos) > Math.abs(Option1Dist - QuesPos)) {
            // console.log("first option correct")
            _this.CorrectOption = _this.optionBox1;
        }

        else {
            // console.log("Almost Same Distance")

            if (_this.Option1Numerator / _this.Option1Denom > 1 && _this.Option1Numerator / _this.Option1Denom < 2.5) {
                _this.Option1Numerator = _this.Option1Numerator + Math.floor(0.5 * _this.Option1Denom)
            }
            else {
                _this.Option2Numerator = _this.Option2Numerator - Math.floor(0.5 * _this.Option2Denom)
            }
            var Option1Dist = (720 / (_this.Option1Denom * 3)) * _this.Option1Numerator + 52;
            var Option2Dist = (720 / (_this.Option2Denom * 3)) * _this.Option2Numerator + 52;
            if (Math.abs(Option1Dist - QuesPos) > Math.abs(Option2Dist - QuesPos)) {
                //console.log("second Option correct")
                _this.CorrectOption = _this.optionBox2;
            }
            else {
                //console.log("first option correct")
                _this.CorrectOption = _this.optionBox1;
            }


        }

    },


    fillQuesBox: function () {

        _this.NumeratorText = _this.add.text(36, 35, _this.numerator, { fontSize: '24px' });
        _this.NumeratorText.anchor.setTo(0.5);

        _this.DenominatorText = _this.add.text(30, 49, _this.denominator, { fontSize: '24px' })
        _this.quesBox.addChild(_this.NumeratorText)
        _this.quesBox.addChild(_this.DenominatorText)
        _this.NumeratorText.fill = '#FF0000';
        _this.DenominatorText.fill = '#FF0000';

    },

    dragStop1: function (sprite, pointer) {
        if (_this.graphics)
            _this.graphics.destroy();
        if (pointer.x >= 60 && pointer.x <= 780) {

            // console.log(pointer.x, pointer.y)
            _this.graphics = _this.add.graphics();
            _this.graphics.beginFill(0xFFF00, 1)

            if (pointer.x >= 770)
                _this.graphics.drawRect(778, 242.5, 50 - 778, 42.5);
            else if (pointer.x >= 740)
                _this.graphics.drawRect(748, 242.5, 50 - 748, 42.5);
            else if (pointer.x >= 710)
                _this.graphics.drawRect(718, 242.5, 50 - 718, 42.5);
            else if (pointer.x >= 680)
                _this.graphics.drawRect(688, 242.5, 50 - 688, 42.5);
            else if (pointer.x >= 650)
                _this.graphics.drawRect(658, 242.5, 50 - 658, 42.5);
            else if (pointer.x >= 620)
                _this.graphics.drawRect(628, 242.5, 50 - 628, 42.5);
            else if (pointer.x >= 590)
                _this.graphics.drawRect(598, 242.5, 50 - 598, 42.5);
            else if (pointer.x >= 560)
                _this.graphics.drawRect(565, 242.5, 50 - 565, 42.5);
            else if (pointer.x >= 530)
                _this.graphics.drawRect(535, 242.5, 50 - 535, 42.5);
            else if (pointer.x >= 500)
                _this.graphics.drawRect(505, 242.5, 50 - 505, 42.5);
            else if (pointer.x >= 470)
                _this.graphics.drawRect(475, 242.5, 50 - 475, 42.5);
            else if (pointer.x >= 440)
                _this.graphics.drawRect(445, 242.5, 50 - 445, 42.5);
            else if (pointer.x >= 410)
                _this.graphics.drawRect(415, 242.5, 50 - 415, 42.5);
            else if (pointer.x >= 380)
                _this.graphics.drawRect(385, 242.5, 50 - 385, 42.5);
            else if (pointer.x >= 350)
                _this.graphics.drawRect(355, 242.5, 50 - 355, 42.5);
            else if (pointer.x >= 320) {
                _this.graphics.drawRect(323, 242.5, 50 - 323, 42.5);
            }
            else if (pointer.x >= 290) {
                _this.graphics.drawRect(295, 242.5, 50 - 295, 42.5);
            }
            else if (pointer.x >= 260)
                _this.graphics.drawRect(265, 242.5, 50 - 265, 42.5);
            else if (pointer.x >= 230)
                _this.graphics.drawRect(230, 242.5, 50 - 230, 42.5);
            else if (pointer.x >= 200) {
                _this.graphics.drawRect(200, 242.5, 50 - 200, 42.5);
            }
            else if (pointer.x >= 170)
                _this.graphics.drawRect(170, 242.5, 50 - 170, 42.5);
            else if (pointer.x >= 140)
                _this.graphics.drawRect(140, 242.5, 50 - 140, 42.5);
            else if (pointer.x >= 110)
                _this.graphics.drawRect(110, 242.5, 50 - 110, 42.5);
            else if (pointer.x >= 80)
                _this.graphics.drawRect(80, 242.5, 50 - 80, 42.5);
            _this.pointer = pointer.x;

            _this.scale.bringToTop();


            if (pointer.x > _this.blueLine1.x) {
                if (_this.whiteLine1)
                    _this.whiteLine1.destroy();

                _this.whiteLine1 = _this.add.image(_this.blueLine1.x, 240, 'WhiteLine')
                _this.whiteLine1.bringToTop();

            }
            if (pointer.x > _this.blueLine2.x) {
                if (_this.whiteLine2)
                    _this.whiteLine2.destroy();
                _this.whiteLine2 = _this.add.image(_this.blueLine2.x, 240, 'WhiteLine')
                _this.whiteLine2.bringToTop();

            }
            if (pointer.x < _this.blueLine2.x && _this.whiteLine2) {
                _this.whiteLine2.destroy();

            }
            if (pointer.x < _this.blueLine1.x && _this.whiteLine1) {
                _this.whiteLine1.destroy();
            }
            if (pointer.x < _this.blueLine1.x)
                _this.blueLine1.bringToTop();
            if (pointer.x < _this.blueLine2.x)
                _this.blueLine2.bringToTop();


            // rectangle paramters Third for horizontal  first for x posn
            // 2nd for vertical 4th for bounds breadth 30 diff
            _this.slider.bringToTop();
        }
        else if (pointer.x > 780) {
            // console.log("Arrow at end of scale")

            _this.slider.x = 770;
            _this.slider.y = 235;
            _this.graphics = _this.add.graphics();
            _this.graphics.beginFill(0xFFF00, 1)
            _this.graphics.drawRect(778, 242.5, 50 - 778, 42.5);
            _this.whiteLine1.bringToTop();
            _this.whiteLine2.bringToTop();
            _this.scale.bringToTop();
            _this.whiteLine1.bringToTop();
            _this.whiteLine2.bringToTop();
            _this.slider.bringToTop();


        }
        else if (pointer.x < 60) {
            // console.log("gedgtydcg")
            _this.slider.x = 48;
            _this.slider.y = 235;

        }


    },


    nextquestion: function () {

        if (_this.count1 < 6) {
            _this.initialScreen();

        }
        else {
            // console.log("here end");
            _this.timer1.stop();
            _this.timer1 = null;
            _this.stopVoice();
            _this.time.events.add(2000, function () {
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


    eraseScreen: function (target) {

        // console.log("erasing screen");

        _this.scale.destroy();
        _this.slider.destroy();
        _this.graphics.destroy();
        _this.zero.destroy();
        _this.one.destroy();
        _this.two.destroy();
        _this.three.destroy();
        _this.rightbtn.destroy();
        _this.quesBox.destroy();

        _this.optionBox1.destroy();
        _this.optionBox2.destroy();
        _this.blueLine1.destroy();
        _this.blueLine2.destroy();
        _this.denomOp1.destroy();
        _this.denomOp2.destroy();
        _this.numOp1.destroy();
        _this.numOp2.destroy();
        _this.line1.destroy();
        _this.line2.destroy();


        if (_this.whiteLine1)
            _this.whiteLine1.destroy();
        if (_this.whiteLine2)
            _this.whiteLine2.destroy();


    },

    rightbtnClicked: function () {

        _this.noofAttempts++;
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;

        _this.rightbtn.frame = 1;
        if (_this.slider.inputEnabled == true)
            _this.slider.input.draggable = false
        if (_this.SliderisCorrect() && _this.CorrectOptionClicked()) {

            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.showAns();
            // console.log("hello")
            _this.optionBox1.inputEnabled = false;
            _this.optionBox2.inputEnabled = false;

            _this.celebration();
            _this.time.events.add(2000, function () {
                // _this.rightbtn.inputEnabled=false;

                _this.eraseScreen();
                _this.nextquestion();

            });

        } else {
            _this.wrongSound.play();

            _this.slider.x = 48;
            _this.slider.y = 235;
            if (_this.graphics)
                _this.graphics.destroy();
            if (_this.slider.inputEnabled == true)
                _this.slider.input.draggable = true;
            if (_this.whiteLine1)
                _this.whiteLine1.destroy();
            if (_this.whiteLine2)
                _this.whiteLine2.destroy();
            _this.blueLine1.bringToTop();
            _this.blueLine2.bringToTop();
            _this.optionBox1.frame = 0;
            _this.optionBox2.frame = 0;
            _this.rightbtn.frame = 0;
            _this.rightbtn.inputEnabled = true;


        }

    },
    SliderisCorrect: function () {
        // + 50 bcoz scale starts from 50 to 780 
        // Scale has length 720 total

        if (_this.pointer >= (720 / (_this.denominator * 3)) * _this.numerator + 25 && _this.pointer <= (720 / (_this.denominator * 3)) * _this.numerator + 100) {
            return true;
        }
        else {
            return false;
        }

    },
    CorrectOptionClicked: function () {
        // _this.CorrectOption
        if (_this.CorrectOption.frame == 1) {
            return true;
        }

    },

    OptionClicked: function (e) {
        // console.log("Clicked an option ");
        _this.clickSound.play();

        if (_this.optionBox1.frame == 1)
            _this.optionBox1.frame = 0;
        else if (_this.optionBox2.frame == 1)
            _this.optionBox2.frame = 0;
        e.frame = 1;

    },
    showAns: function () {
        _this.graphics.destroy();
        _this.graphics = _this.add.graphics();
        _this.graphics.beginFill(0xFFF00, 1)


        var correctPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;

        if (_this.numerator / _this.denominator <= 1) {
            _this.graphics.drawRect(correctPos, 242.5, 50 - correctPos, 42.5);
        }
        else {
            var correctPos1 = (720 / (_this.denominator * 3)) * _this.numerator + 57;
            _this.graphics.drawRect(correctPos1, 242.5, 50 - correctPos1, 42.5);

        }
        _this.scale.bringToTop();
        if (_this.whiteLine1)
            _this.whiteLine1.bringToTop();
        if (_this.whiteLine2)
            _this.whiteLine2.bringToTop();
        if (_this.pointer < _this.blueLine1.x)
            _this.blueLine1.bringToTop();
        if (_this.pointer < _this.blueLine2.x)
            _this.blueLine2.bringToTop();

        _this.slider.bringToTop();
        _this.slider.x = correctPos - 5;
    },
}
