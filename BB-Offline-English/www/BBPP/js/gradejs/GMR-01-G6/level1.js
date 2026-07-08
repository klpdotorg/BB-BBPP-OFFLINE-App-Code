Game.GMR_01_G6level1 = function () { };


Game.GMR_01_G6level1.prototype =
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
        _this.clickSoundsrc.setAttribute("src", window.baseUrl+"sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src", window.baseUrl+"sounds/celebration.mp3");
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.wrongans = document.createElement('audio');
        _this.wronganssrc = document.createElement('source');
        _this.wronganssrc.setAttribute("src", window.baseUrl+"sounds/WrongCelebrationSound.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.framechange = document.createElement('audio');
        _this.framechangesrc = document.createElement('source');
        _this.framechangesrc.setAttribute("src", window.baseUrl+"sounds/Frame_change_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);

        _this.snapSound = document.createElement('audio');
        _this.snapSoundsrc = document.createElement('source');
        _this.snapSoundsrc.setAttribute("src", window.baseUrl+"sounds/snapSound.mp3");
        _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.bubbleSound = document.createElement('audio');
        _this.bubbleSoundsrc = document.createElement('source');
        _this.bubbleSoundsrc.setAttribute("src", window.baseUrl+"sounds/Bubbles.mp3");
        _this.bubbleSound.appendChild(_this.bubbleSoundsrc);

        _this.Ask_Question1 = _this.createAudio("GMPR-01-G6-A");
        _this.Ask_Question2 = _this.createAudio("GMPR-01-G6-B");

        telInitializerbbpp.gameIdInit("GMR_01_G6", gradeSelected);
        console.log(gameID,"gameID...");
    },

    create: function (game) {
        _this.AnsTimerCount = 0;
        _this.questionid = null;
        _this.noofAttempts = 0;
        _this.sceneCount = 0;
      

        _this.count1 = 0;
        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        //  //* User Progress variables for BB++ app
        //  _this.userHasPlayed = 0;
        //  _this.timeinMinutes;
        //  _this.timeinSeconds;
        //  _this.game_id;
        //  _this.score = 0;
        //  _this.gradeTopics;
         _this.microConcepts;
        //  _this.grade;

        _this.counterForTimer = 0;

        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.Question_flag = -1;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.count1 = 0;
        _this.minutes = 0;
        _this.seconds = 0;
        _this.counterForTimer = 0;

        _this.correct = 0;
        _this.celebration = false;

        _this.qArrays = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays2 = new Array();
        _this.qArrays3 = new Array();
        _this.qArrays4 = new Array();
        _this.qArrays5 = new Array();
        _this.qArrays6 = new Array();

        _this.qArrays1 = [1, 3, 5, 7];
        _this.qArrays2 = [2, 4, 6, 8];
        _this.qArrays3 = [10, 12, 14, 16];
        _this.qArrays4 = [9, 11, 13, 15];
        _this.qArrays5 = [17, 19, 21, 23];
        _this.qArrays6 = [18, 20, 22, 24];

        _this.qArrays1 = _this.shuffle(_this.qArrays1);
        _this.qArrays2 = _this.shuffle(_this.qArrays2);
        _this.qArrays3 = _this.shuffle(_this.qArrays3);
        _this.qArrays4 = _this.shuffle(_this.qArrays4);
        _this.qArrays5 = _this.shuffle(_this.qArrays5);
        _this.qArrays6 = _this.shuffle(_this.qArrays6);

        for (var i = 0; i < 1; i++) {
            _this.qArrays.push(_this.qArrays1[i]);
        }
        for (var j = 0; j < 1; j++) {
            _this.qArrays.push(_this.qArrays2[j]);
        }
        for (var j = 0; j < 1; j++) {
            _this.qArrays.push(_this.qArrays3[j]);
        }
        for (var j = 0; j < 1; j++) {
            _this.qArrays.push(_this.qArrays4[j]);
        }
        for (var j = 0; j < 1; j++) {
            _this.qArrays.push(_this.qArrays5[j]);
        }
        for (var j = 0; j < 1; j++) {
            _this.qArrays.push(_this.qArrays6[j]);
        }
        console.log(_this.qArrays);

        // _this.qArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        //** include the background file, navigation bar, stars, timer objects.

        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function ()
        {   
            _this.stopVoice();
            _this.time.events.removeAll();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50,function()
            {
                _this.state.start('grade6Geometry',true,false);
            }); 
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if (_this.questioNo == 1 || _this.questioNo == 3 || _this.questioNo == 5 || _this.questioNo == 7 || _this.questioNo == 9 || _this.questioNo == 11 || _this.questioNo == 13 || _this.questioNo == 15 || _this.questioNo == 17 || _this.questioNo == 19 || _this.questioNo == 21 || _this.questioNo == 23) {
                    _this.Ask_Question1.play();
                }
                if (_this.questioNo == 2 || _this.questioNo == 4 || _this.questioNo == 6 || _this.questioNo == 8 || _this.questioNo == 10 || _this.questioNo == 12 || _this.questioNo == 14 || _this.questioNo == 16 || _this.questioNo == 18 || _this.questioNo == 20 || _this.questioNo == 22 || _this.questioNo == 24) {
                    _this.Ask_Question2.play();
                }
                _this.time.events.add(3000, function () {
                    _this.speakerbtnClicked = false;
                    _this.EnableVoice();
                });
            }

        }, _this);

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);

        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);
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

    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl+"questionSounds/GMR-01-G6/" + _this.languageSelected + "/" + src + ".mp3");
        audio.appendChild(audiosrc);
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

        _this.randomiseQues();
        _this.questionid = 1;

    },
    randomiseQues: function () {
        _this.sceneCount++;
        _this.noofAttempts =0;
        _this.AnsTimerCount = 0;
     
        switch (_this.qArrays[_this.count1]) {
            case 1: _this.gotoFirstQuestion();
                break;
            case 2: _this.gotoSecondQuestion();
                break;
            case 3: _this.gotoThirdQuestion();
                break;
            case 4: _this.gotoFourthQuestion();
                break;
            case 5: _this.gotoFifthQuestion();
                break;
            case 6: _this.gotoSixthQuestion();
                break;
            case 7: _this.gotoSeventhQuestion();
                break;
            case 8: _this.gotoEighthQuestion();
                break;
            case 9: _this.gotoNinthQuestion();
                break;
            case 10: _this.gotoTenthQuestion();
                break;
            case 11: _this.gotoEleventhQuestion();
                break;
            case 12: _this.gotoTwevelvethQuestion();
                break;
            case 13: _this.gotoThirteenthQuestion();
                break;
            case 14: _this.gotoFourteenthQuestion();
                break;
            case 15: _this.gotoFifteenthQuestion();
                break;
            case 16: _this.gotoSixteenthQuestion();
                break;
            case 17: _this.gotoSeventeenthQuestion();
                break;
            case 18: _this.gotoEightteenthQuestion();
                break;
            case 19: _this.gotoNineteenthQuestion();
                break;
            case 20: _this.gotoTwentythQuestion();
                break;
            case 21: _this.gotoTwentyonethQuestion();
                break;
            case 22: _this.gotoTwentytwothQuestion();
                break;
            case 23: _this.gotoTwentythreethQuestion();
                break;
            case 24: _this.gotoTwentyfourthQuestion();
                break;
        }

    },
    stopVoice: function () {
    
        if(_this.Ask_Question1)
        {
            _this.Ask_Question1.pause();
            _this.Ask_Question1 = null; 
          //  _this.arrangeinpairssrc = null;
        }
        if(_this.Ask_Question2)
        {
            _this.Ask_Question2.pause();
            _this.Ask_Question2 = null; 
          //  _this.arrangeinpairssrc = null;
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
    loadobject: function () {

        _this.water = _this.add.sprite(230, 380, 'water');
        _this.water.anchor.setTo(0.5);
        _this.water.scale.setTo(1, 1);
        _this.water.name = "img1";

        _this.mirror = _this.add.sprite(600, 270, 'mirror');
        _this.mirror.anchor.setTo(0.5);
        _this.mirror.scale.setTo(1, 1);
        _this.mirror.name = "img2";

        _this.horizontal = _this.add.sprite(850, 190, 'horizontal');
        _this.horizontal.anchor.setTo(0.5);
        _this.horizontal.scale.setTo(1.2, 1.2);
        _this.horizontal.name = "img3";
        _this.horizontal.inputEnabled = true;
        _this.horizontal.input.useHandCursor = true;

        _this.vertical = _this.add.sprite(850, 370, 'vertical');
        _this.vertical.anchor.setTo(0.5);
        _this.vertical.scale.setTo(1.2, 1.2);
        _this.vertical.name = "img4";
        _this.vertical.inputEnabled = true;
        _this.vertical.input.useHandCursor = true;

    },

    gotoFirstQuestion: function () {

        _this.questioNo = 1;
        _this.Ask_Question1.play();
        _this.slideGrp = _this.add.group();
        _this.loadobject();

        _this.boot = _this.add.sprite(220, 200, 'boot');
        _this.boot.anchor.setTo(0.5);
        _this.boot.scale.setTo(1, 1);
        _this.boot.visible = true;
        _this.boot.name = "boot";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.slideGrp.add(_this.boot);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

        _this.horizontal.events.onInputDown.add(_this.selected, _this);
        _this.vertical.events.onInputDown.add(_this.clicked, _this);
    },
    gotoSecondQuestion: function () {

        _this.questioNo = 2;
        _this.Ask_Question2.play();
        _this.slideGrp = _this.add.group();
        _this.loadobject();

        _this.boot = _this.add.sprite(220, 200, 'boot');
        _this.boot.anchor.setTo(0.5);
        _this.boot.scale.setTo(1, 1);
        _this.boot.visible = true;
        _this.boot.name = "boot";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.horizontal.events.onInputDown.add(_this.clicked, _this);
        _this.vertical.events.onInputDown.add(_this.selected, _this);

        _this.slideGrp.add(_this.boot);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

    },

    gotoThirdQuestion: function () {

        _this.questioNo = 3;
        _this.Ask_Question1.play();
        _this.slideGrp = _this.add.group();
        _this.loadobject();

        _this.banana = _this.add.sprite(250, 210, 'banana');
        _this.banana.anchor.setTo(0.5);
        _this.banana.scale.setTo(1, 1);
        _this.banana.visible = true;
        _this.banana.name = "banana";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.slideGrp.add(_this.banana);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

        _this.horizontal.events.onInputDown.add(_this.selected, _this);
        _this.vertical.events.onInputDown.add(_this.clicked, _this);

    },


    gotoFourthQuestion: function () {

        _this.questioNo = 4;
        _this.Ask_Question2.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.banana = _this.add.sprite(250, 210, 'banana');
        _this.banana.anchor.setTo(0.5);
        _this.banana.scale.setTo(1, 1);
        _this.banana.visible = true;
        _this.banana.name = "banana";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.horizontal.events.onInputDown.add(_this.clicked, _this);
        _this.vertical.events.onInputDown.add(_this.selected, _this);

        _this.slideGrp.add(_this.banana);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

    },

    gotoFifthQuestion: function () {

        _this.questioNo = 5;
        _this.Ask_Question1.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.can = _this.add.sprite(230, 200, 'can');
        _this.can.anchor.setTo(0.5);
        _this.can.scale.setTo(1, 1);
        _this.can.visible = true;
        _this.can.name = "can";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.slideGrp.add(_this.can);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

        _this.horizontal.events.onInputDown.add(_this.selected, _this);
        _this.vertical.events.onInputDown.add(_this.clicked, _this);

    },

    gotoSixthQuestion: function () {

        _this.questioNo = 6;
        _this.Ask_Question2.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.can = _this.add.sprite(230, 200, 'can');
        _this.can.anchor.setTo(0.5);
        _this.can.scale.setTo(1, 1);
        _this.can.visible = true;
        _this.can.name = "can";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.horizontal.events.onInputDown.add(_this.clicked, _this);
        _this.vertical.events.onInputDown.add(_this.selected, _this);

        _this.slideGrp.add(_this.can);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

    },


    gotoSeventhQuestion: function () {

        _this.questioNo = 7;
        _this.Ask_Question1.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.comb = _this.add.sprite(240, 220, 'comb');
        _this.comb.anchor.setTo(0.5);
        _this.comb.scale.setTo(0.9, 0.9);
        _this.comb.visible = true;
        _this.comb.name = "comb";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.slideGrp.add(_this.comb);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

        _this.horizontal.events.onInputDown.add(_this.selected, _this);
        _this.vertical.events.onInputDown.add(_this.clicked, _this);

    },


    gotoEighthQuestion: function () {

        _this.questioNo = 8;
        _this.Ask_Question2.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.comb = _this.add.sprite(240, 220, 'comb');
        _this.comb.anchor.setTo(0.5);
        _this.comb.scale.setTo(1, 1);
        _this.comb.visible = true;
        _this.comb.name = "comb";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.horizontal.events.onInputDown.add(_this.clicked, _this);
        _this.vertical.events.onInputDown.add(_this.selected, _this);

        _this.slideGrp.add(_this.comb);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

    },


    gotoNinthQuestion: function () {

        _this.questioNo = 9;
        _this.Ask_Question1.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.cup = _this.add.sprite(250, 200, 'cup');
        _this.cup.anchor.setTo(0.5);
        _this.cup.scale.setTo(1, 1);
        _this.cup.visible = true;
        _this.cup.name = "cup";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.slideGrp.add(_this.cup);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

        _this.horizontal.events.onInputDown.add(_this.selected, _this);
        _this.vertical.events.onInputDown.add(_this.clicked, _this);

    },

    gotoTenthQuestion: function () {

        _this.questioNo = 10;
        _this.Ask_Question2.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.cup = _this.add.sprite(250, 200, 'cup');
        _this.cup.anchor.setTo(0.5);
        _this.cup.scale.setTo(1, 1);
        _this.cup.visible = true;
        _this.cup.name = "cup";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.horizontal.events.onInputDown.add(_this.clicked, _this);
        _this.vertical.events.onInputDown.add(_this.selected, _this);

        _this.slideGrp.add(_this.cup);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

    },

    gotoEleventhQuestion: function () {

        _this.questioNo = 11;
        _this.Ask_Question1.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.hammer = _this.add.sprite(230, 195, 'hammer');
        _this.hammer.anchor.setTo(0.5);
        _this.hammer.scale.setTo(0.8, 0.8);
        _this.hammer.visible = true;
        _this.hammer.name = "hammer";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.slideGrp.add(_this.hammer);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

        _this.horizontal.events.onInputDown.add(_this.selected, _this);
        _this.vertical.events.onInputDown.add(_this.clicked, _this);

    },

    gotoTwevelvethQuestion: function () {

        _this.questioNo = 12;
        _this.Ask_Question2.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.hammer = _this.add.sprite(230, 195, 'hammer');
        _this.hammer.anchor.setTo(0.5);
        _this.hammer.scale.setTo(0.8, 0.8);
        _this.hammer.visible = true;
        _this.hammer.name = "hammer";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.horizontal.events.onInputDown.add(_this.clicked, _this);
        _this.vertical.events.onInputDown.add(_this.selected, _this);

        _this.slideGrp.add(_this.hammer);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

    },

    gotoThirteenthQuestion: function () {

        _this.questioNo = 13;
        _this.Ask_Question1.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.hand = _this.add.sprite(230, 210, 'hand');
        _this.hand.anchor.setTo(0.5);
        _this.hand.scale.setTo(1, 1);
        _this.hand.visible = true;
        _this.hand.name = "hand";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.slideGrp.add(_this.hand);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

        _this.horizontal.events.onInputDown.add(_this.selected, _this);
        _this.vertical.events.onInputDown.add(_this.clicked, _this);


    },

    gotoFourteenthQuestion: function () {

        _this.questioNo = 14;
        _this.Ask_Question2.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.hand = _this.add.sprite(230, 210, 'hand');
        _this.hand.anchor.setTo(0.5);
        _this.hand.scale.setTo(1, 1);
        _this.hand.visible = true;
        _this.hand.name = "hand";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.horizontal.events.onInputDown.add(_this.clicked, _this);
        _this.vertical.events.onInputDown.add(_this.selected, _this);

        _this.slideGrp.add(_this.hand);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

    },

    gotoFifteenthQuestion: function () {

        _this.questioNo = 15;
        _this.Ask_Question1.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.key = _this.add.sprite(250, 210, 'key');
        _this.key.anchor.setTo(0.5);
        _this.key.scale.setTo(1, 1);
        _this.key.visible = true;
        _this.key.name = "key";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.slideGrp.add(_this.key);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

        _this.horizontal.events.onInputDown.add(_this.selected, _this);
        _this.vertical.events.onInputDown.add(_this.clicked, _this);


    },

    gotoSixteenthQuestion: function () {

        _this.questioNo = 16;
        _this.Ask_Question2.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.key = _this.add.sprite(250, 210, 'key');
        _this.key.anchor.setTo(0.5);
        _this.key.scale.setTo(1, 1);
        _this.key.visible = true;
        _this.key.name = "key";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.horizontal.events.onInputDown.add(_this.clicked, _this);
        _this.vertical.events.onInputDown.add(_this.selected, _this);

        _this.slideGrp.add(_this.key);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);


    },

    gotoSeventeenthQuestion: function () {

        _this.questioNo = 17;
        _this.Ask_Question1.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.leg = _this.add.sprite(230, 190, 'leg');
        _this.leg.anchor.setTo(0.5);
        _this.leg.scale.setTo(0.8, 0.8);
        _this.leg.visible = true;
        _this.leg.name = "leg";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.slideGrp.add(_this.leg);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

        _this.horizontal.events.onInputDown.add(_this.selected, _this);
        _this.vertical.events.onInputDown.add(_this.clicked, _this);

    },

    gotoEightteenthQuestion: function () {

        _this.questioNo = 18;
        _this.Ask_Question2.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.leg = _this.add.sprite(230, 190, 'leg');
        _this.leg.anchor.setTo(0.5);
        _this.leg.scale.setTo(0.8, 0.8);
        _this.leg.visible = true;
        _this.leg.name = "leg";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.horizontal.events.onInputDown.add(_this.clicked, _this);
        _this.vertical.events.onInputDown.add(_this.selected, _this);

        _this.slideGrp.add(_this.leg);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);


    },

    gotoNineteenthQuestion: function () {

        _this.questioNo = 19;
        _this.Ask_Question1.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.triangle = _this.add.sprite(250, 210, 'triangle');
        _this.triangle.anchor.setTo(0.5);
        _this.triangle.scale.setTo(0.8, 0.8);
        _this.triangle.visible = true;
        _this.triangle.name = "triangle";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.slideGrp.add(_this.triangle);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

        _this.horizontal.events.onInputDown.add(_this.selected, _this);
        _this.vertical.events.onInputDown.add(_this.clicked, _this);


    },

    gotoTwentythQuestion: function () {

        _this.questioNo = 20;
        _this.Ask_Question2.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.triangle = _this.add.sprite(250, 210, 'triangle');
        _this.triangle.anchor.setTo(0.5);
        _this.triangle.scale.setTo(1, 1);
        _this.triangle.visible = true;
        _this.triangle.name = "triangle";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.horizontal.events.onInputDown.add(_this.clicked, _this);
        _this.vertical.events.onInputDown.add(_this.selected, _this);

        _this.slideGrp.add(_this.triangle);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);


    },

    gotoTwentyonethQuestion: function () {

        _this.questioNo = 21;
        _this.Ask_Question1.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.umbrella = _this.add.sprite(230, 200, 'umbrella');
        _this.umbrella.anchor.setTo(0.5);
        _this.umbrella.scale.setTo(1, 1);
        _this.umbrella.visible = true;
        _this.umbrella.name = "umbrella";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.slideGrp.add(_this.umbrella);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

        _this.horizontal.events.onInputDown.add(_this.selected, _this);
        _this.vertical.events.onInputDown.add(_this.clicked, _this);


    },

    gotoTwentytwothQuestion: function () {

        _this.questioNo = 22;
        _this.Ask_Question2.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.umbrella = _this.add.sprite(230, 200, 'umbrella');
        _this.umbrella.anchor.setTo(0.5);
        _this.umbrella.scale.setTo(1, 1);
        _this.umbrella.visible = true;
        _this.umbrella.name = "umbrella";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.horizontal.events.onInputDown.add(_this.clicked, _this);
        _this.vertical.events.onInputDown.add(_this.selected, _this);

        _this.slideGrp.add(_this.umbrella);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

    },

    gotoTwentythreethQuestion: function () {

        _this.questioNo = 23;
        _this.Ask_Question1.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.watercan = _this.add.sprite(230, 200, 'watercan');
        _this.watercan.anchor.setTo(0.5);
        _this.watercan.scale.setTo(0.9, 0.9);
        _this.watercan.visible = true;
        _this.watercan.name = "watercan";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.slideGrp.add(_this.watercan);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

        _this.horizontal.events.onInputDown.add(_this.selected, _this);
        _this.vertical.events.onInputDown.add(_this.clicked, _this);

    },

    gotoTwentyfourthQuestion: function () {

        _this.questioNo = 24;
        _this.Ask_Question2.play();

        _this.slideGrp = _this.add.group();

        _this.loadobject();

        _this.watercan = _this.add.sprite(230, 200, 'watercan');
        _this.watercan.anchor.setTo(0.5);
        _this.watercan.scale.setTo(1, 1);
        _this.watercan.visible = true;
        _this.watercan.name = "watercan";

        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        _this.horizontal.events.onInputDown.add(_this.clicked, _this);
        _this.vertical.events.onInputDown.add(_this.selected, _this);

        _this.slideGrp.add(_this.watercan);
        _this.slideGrp.add(_this.water);
        _this.slideGrp.add(_this.mirror);
        _this.slideGrp.add(_this.horizontal);
        _this.slideGrp.add(_this.vertical);

    },

    clicked: function (target) {
        _this.horizontal.events.onInputDown.removeAll();
        _this.vertical.events.onInputDown.removeAll();
        // _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.frame = 1;

        if (_this.questioNo == 1) {
            _this.time.events.add(800, function () {
                _this.boot1 = _this.add.sprite(610, 200, 'boot');
                _this.boot1.anchor.setTo(0.5);
                _this.boot1.scale.setTo(1, 1);
                _this.boot1.name = "boot1";
                _this.boot1.scale.x *= -1;
                _this.boot1.alpha = 0;
                _this.add.tween(_this.boot1).to({ alpha: 1 }, 1000, 'Linear', true, 0);

            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 2) {
            _this.time.events.add(800, function () {
                _this.boot2 = _this.add.sprite(220, 405, 'boot');
                _this.boot2.anchor.setTo(0.5);
                _this.boot2.scale.setTo(1, 1);
                _this.boot2.name = "boot2";
                _this.boot2.scale.y *= -1;
                _this.boot2.alpha = 0;
                _this.add.tween(_this.boot2).to({ alpha: 0.5 }, 1000, 'Linear', true, 0);
                _this.time.events.add(1000, function () {
                    // _this.bubbleSound = _this.add.audio('bubble');
                    _this.bubbleSound.play();
                }, _this);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 3) {
            _this.time.events.add(800, function () {
                _this.banana1 = _this.add.sprite(590, 210, 'banana');
                _this.banana1.anchor.setTo(0.5);
                _this.banana1.scale.setTo(1, 1);
                _this.banana1.name = "banana1";
                _this.banana1.scale.x *= -1;
                _this.banana1.alpha = 0;
                _this.add.tween(_this.banana1).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 4) {
            _this.time.events.add(800, function () {
                _this.banana2 = _this.add.sprite(250, 390, 'banana');
                _this.banana2.anchor.setTo(0.5);
                _this.banana2.scale.setTo(1, 1);
                _this.banana2.name = "banana2";
                _this.banana2.scale.y *= -1;
                _this.banana2.alpha = 0;
                _this.add.tween(_this.banana2).to({ alpha: 0.5 }, 1000, 'Linear', true, 0);
                _this.time.events.add(1000, function () {
                    // _this.bubbleSound = _this.add.audio('bubble');
                    _this.bubbleSound.play();
                }, _this);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 5) {
            _this.time.events.add(800, function () {
                _this.can1 = _this.add.sprite(600, 200, 'can');
                _this.can1.anchor.setTo(0.5);
                _this.can1.scale.setTo(1, 1);
                _this.can1.name = "can1";
                _this.can1.scale.x *= -1;
                _this.can1.alpha = 0;
                _this.add.tween(_this.can1).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 6) {
            _this.time.events.add(800, function () {
                _this.can2 = _this.add.sprite(230, 400, 'can');
                _this.can2.anchor.setTo(0.5);
                _this.can2.scale.setTo(1, 1);
                _this.can2.name = "can2";
                _this.can2.scale.y *= -1;
                _this.can2.alpha = 0;
                _this.add.tween(_this.can2).to({ alpha: 0.5 }, 1000, 'Linear', true, 0);
                _this.time.events.add(1000, function () {
                    // _this.bubbleSound = _this.add.audio('bubble');
                    _this.bubbleSound.play();
                }, _this);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 7) {
            _this.time.events.add(800, function () {
                _this.comb1 = _this.add.sprite(600, 220, 'comb');
                _this.comb1.anchor.setTo(0.5);
                _this.comb1.scale.setTo(0.9, 0.9);
                _this.comb1.name = "can1";
                _this.comb1.scale.x *= -1;
                _this.comb1.alpha = 0;
                _this.add.tween(_this.comb1).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 8) {
            _this.time.events.add(800, function () {
                _this.comb2 = _this.add.sprite(240, 390, 'comb');
                _this.comb2.anchor.setTo(0.5);
                _this.comb2.scale.setTo(1, 1);
                _this.comb2.name = "comb2";
                _this.comb2.scale.y *= -1;
                _this.comb2.alpha = 0;
                _this.add.tween(_this.comb2).to({ alpha: 0.5 }, 1000, 'Linear', true, 0);
                _this.time.events.add(1000, function () {
                    // _this.bubbleSound = _this.add.audio('bubble');
                    _this.bubbleSound.play();
                }, _this);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 9) {
            _this.time.events.add(800, function () {
                _this.cup1 = _this.add.sprite(580, 200, 'cup');
                _this.cup1.anchor.setTo(0.5);
                _this.cup1.scale.setTo(1, 1);
                _this.cup1.name = "cup1";
                _this.cup1.scale.x *= -1;
                _this.cup1.alpha = 0;
                _this.add.tween(_this.cup1).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 10) {
            _this.time.events.add(800, function () {
                _this.cup2 = _this.add.sprite(250, 400, 'cup');
                _this.cup2.anchor.setTo(0.5);
                _this.cup2.scale.setTo(1, 1);
                _this.cup2.name = "cup2";
                _this.cup2.scale.y *= -1;
                _this.cup2.alpha = 0;
                _this.add.tween(_this.cup2).to({ alpha: 0.5 }, 1000, 'Linear', true, 0);
                _this.time.events.add(1000, function () {
                    // _this.bubbleSound = _this.add.audio('bubble');
                    _this.bubbleSound.play();
                }, _this);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 11) {
            _this.time.events.add(800, function () {
                _this.hammer1 = _this.add.sprite(600, 195, 'hammer');
                _this.hammer1.anchor.setTo(0.5);
                _this.hammer1.scale.setTo(0.8, 0.8);
                _this.hammer1.name = "hammer1";
                _this.hammer1.scale.x *= -1;
                _this.hammer1.alpha = 0;
                _this.add.tween(_this.hammer1).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 12) {
            _this.time.events.add(800, function () {
                _this.hammer2 = _this.add.sprite(230, 400, 'hammer');
                _this.hammer2.anchor.setTo(0.5);
                _this.hammer2.scale.setTo(0.8, 0.8);
                _this.hammer2.name = "hammer2";
                _this.hammer2.scale.y *= -1;
                _this.hammer2.alpha = 0;
                _this.add.tween(_this.hammer2).to({ alpha: 0.5 }, 1000, 'Linear', true, 0);
                _this.time.events.add(1000, function () {
                    // _this.bubbleSound = _this.add.audio('bubble');
                    _this.bubbleSound.play();
                }, _this);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 13) {
            _this.time.events.add(800, function () {
                _this.hand1 = _this.add.sprite(600, 210, 'hand');
                _this.hand1.anchor.setTo(0.5);
                _this.hand1.scale.setTo(1, 1);
                _this.hand1.name = "hand1";
                _this.hand1.scale.x *= -1;
                _this.hand1.alpha = 0;
                _this.add.tween(_this.hand1).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 14) {
            _this.time.events.add(800, function () {
                _this.hand2 = _this.add.sprite(230, 390, 'hand');
                _this.hand2.anchor.setTo(0.5);
                _this.hand2.scale.setTo(1, 1);
                _this.hand2.name = "hand2";
                _this.hand2.scale.y *= -1;
                _this.hand2.alpha = 0;
                _this.add.tween(_this.hand2).to({ alpha: 0.5 }, 1000, 'Linear', true, 0);
                _this.time.events.add(1000, function () {
                    // _this.bubbleSound = _this.add.audio('bubble');
                    _this.bubbleSound.play();
                }, _this);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 15) {
            _this.time.events.add(800, function () {
                _this.key1 = _this.add.sprite(595, 210, 'key');
                _this.key1.anchor.setTo(0.5);
                _this.key1.scale.setTo(1, 1);
                _this.key1.name = "key1";
                _this.key1.scale.x *= -1;
                _this.key1.alpha = 0;
                _this.add.tween(_this.key1).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 16) {
            _this.time.events.add(800, function () {
                _this.key2 = _this.add.sprite(250, 380, 'key');
                _this.key2.anchor.setTo(0.5);
                _this.key2.scale.setTo(1, 1);
                _this.key2.name = "key2";
                _this.key2.scale.y *= -1;
                _this.key2.alpha = 0;
                _this.add.tween(_this.key2).to({ alpha: 0.5 }, 1000, 'Linear', true, 0);
                _this.time.events.add(1000, function () {
                    // _this.bubbleSound = _this.add.audio('bubble');
                    _this.bubbleSound.play();
                }, _this);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 17) {
            _this.time.events.add(800, function () {
                _this.leg1 = _this.add.sprite(600, 190, 'leg');
                _this.leg1.anchor.setTo(0.5);
                _this.leg1.scale.setTo(0.8, 0.8);
                _this.leg1.name = "leg1";
                _this.leg1.scale.x *= -1;
                _this.leg1.alpha = 0;
                _this.add.tween(_this.leg1).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 18) {
            _this.time.events.add(800, function () {
                _this.leg2 = _this.add.sprite(230, 400, 'leg');
                _this.leg2.anchor.setTo(0.5);
                _this.leg2.scale.setTo(0.8, 0.8);
                _this.leg2.name = "leg2";
                _this.leg2.scale.y *= -1;
                _this.leg2.alpha = 0;
                _this.add.tween(_this.leg2).to({ alpha: 0.5 }, 1000, 'Linear', true, 0);
                _this.time.events.add(1000, function () {
                    // _this.bubbleSound = _this.add.audio('bubble');
                    _this.bubbleSound.play();
                }, _this);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 19) {
            _this.time.events.add(800, function () {
                _this.triangle1 = _this.add.sprite(590, 210, 'triangle');
                _this.triangle1.anchor.setTo(0.5);
                _this.triangle1.scale.setTo(0.8, 0.8);
                _this.triangle1.name = "triangle1";
                _this.triangle1.scale.x *= -1;
                _this.triangle1.alpha = 0;
                _this.add.tween(_this.triangle1).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 20) {
            _this.time.events.add(800, function () {
                _this.triangle2 = _this.add.sprite(250, 400, 'triangle');
                _this.triangle2.anchor.setTo(0.5);
                _this.triangle2.scale.setTo(1, 1);
                _this.triangle2.name = "triangle2";
                _this.triangle2.scale.y *= -1;
                _this.triangle2.alpha = 0;
                _this.add.tween(_this.triangle2).to({ alpha: 0.5 }, 1000, 'Linear', true, 0);
                _this.time.events.add(1000, function () {
                    // _this.bubbleSound = _this.add.audio('bubble');
                    _this.bubbleSound.play();
                }, _this);
            }, _this);
            _this.time.events.add(4000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 21) {
            _this.time.events.add(800, function () {
                _this.umbrella1 = _this.add.sprite(600, 200, 'umbrella');
                _this.umbrella1.anchor.setTo(0.5);
                _this.umbrella1.scale.setTo(1, 1);
                _this.umbrella1.name = "umbrella1";
                _this.umbrella1.scale.x *= -1;
                _this.umbrella1.alpha = 0;
                _this.add.tween(_this.umbrella1).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 22) {
            _this.time.events.add(800, function () {
                _this.umbrella2 = _this.add.sprite(230, 400, 'umbrella');
                _this.umbrella2.anchor.setTo(0.5);
                _this.umbrella2.scale.setTo(1, 1);
                _this.umbrella2.name = "umbrella2";
                _this.umbrella2.scale.y *= -1;
                _this.umbrella2.alpha = 0;
                _this.add.tween(_this.umbrella2).to({ alpha: 0.5 }, 1000, 'Linear', true, 0);
                _this.time.events.add(1000, function () {
                    // _this.bubbleSound = _this.add.audio('bubble');
                    _this.bubbleSound.play();
                }, _this);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 23) {
            _this.time.events.add(800, function () {
                _this.watercan1 = _this.add.sprite(600, 200, 'watercan');
                _this.watercan1.anchor.setTo(0.5);
                _this.watercan1.scale.setTo(0.9, 0.9);
                _this.watercan1.name = "watercan1";
                _this.watercan1.scale.x *= -1;
                _this.watercan1.alpha = 0;
                _this.add.tween(_this.watercan1).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
        else if (_this.questioNo == 24) {
            _this.time.events.add(800, function () {
                _this.watercan2 = _this.add.sprite(230, 410, 'watercan');
                _this.watercan2.anchor.setTo(0.5);
                _this.watercan2.scale.setTo(1, 1);
                _this.watercan2.name = "watercan2";
                _this.watercan2.scale.y *= -1;
                _this.watercan2.alpha = 0;
                _this.add.tween(_this.watercan2).to({ alpha: 0.5 }, 1000, 'Linear', true, 0);
                _this.time.events.add(1000, function () {
                    // _this.bubbleSound = _this.add.audio('bubble');
                    _this.bubbleSound.play();
                }, _this);
            }, _this);
            _this.time.events.add(3000, function () {
                target.frame = 0;
                _this.correctAns();
            }, _this);
        }
    },

    selected: function (target) {
        target.frame = 1;
        if (_this.questioNo == 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23) {
            if (target.name == "img3") {
                _this.wrongans.play();
                _this.shake.shake(10, _this.horizontal);
                _this.time.events.add(500, function () {
                    target.frame = 0;
                }, _this);
            }
        }
        if (_this.questioNo == 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24) {
            if (target.name == "img4") {
                _this.wrongans.play();
                _this.shake.shake(10, _this.vertical);
                _this.time.events.add(500, function () {
                    target.frame = 0;
                }, _this);
            }
        }

        _this.noofAttempts++;

    },

    addBubble: function () {

        _this.bubbleGrp = _this.add.group();

        _this.s1 = _this.add.sprite(90, 400, 'bubble');
        _this.s1.anchor.setTo(0.5);
        _this.s1.scale.setTo(0.8, 0.8);
        var tween = _this.add.tween(_this.s1);
        tween.to({ y: 350 }, 2000, 'Linear', true, 0);

        _this.s2 = _this.add.sprite(150, 440, 'bubble');
        _this.s2.anchor.setTo(0.5);
        _this.s2.scale.setTo(0.6, 0.6);
        var tween = _this.add.tween(_this.s2);
        tween.to({ y: 390 }, 2000, 'Linear', true, 0);

        _this.s3 = _this.add.sprite(150, 360, 'bubble');
        _this.s3.anchor.setTo(0.5);
        _this.s3.scale.setTo(0.7, 0.7);
        var tween = _this.add.tween(_this.s3);
        tween.to({ y: 340 }, 2000, 'Linear', true, 0);

        _this.s4 = _this.add.sprite(220, 390, 'bubble');
        _this.s4.anchor.setTo(0.5);
        _this.s4.scale.setTo(0.5, 0.5);
        var tween = _this.add.tween(_this.s4);
        tween.to({ y: 360 }, 2000, 'Linear', true, 0);

        _this.s5 = _this.add.sprite(280, 360, 'bubble');
        _this.s5.anchor.setTo(0.5);
        _this.s5.scale.setTo(0.65, 0.65);
        var tween = _this.add.tween(_this.s5);
        tween.to({ y: 340 }, 2000, 'Linear', true, 0);

        _this.s6 = _this.add.sprite(280, 450, 'bubble');
        _this.s6.anchor.setTo(0.5);
        _this.s6.scale.setTo(0.5, 0.5);
        var tween = _this.add.tween(_this.s6);
        tween.to({ y: 390 }, 2000, 'Linear', true, 0);

        _this.s7 = _this.add.sprite(340, 420, 'bubble');
        _this.s7.anchor.setTo(0.5);
        _this.s7.scale.setTo(0.7, 0.7);
        var tween = _this.add.tween(_this.s7);
        tween.to({ y: 400 }, 2000, 'Linear', true, 0);

        _this.s8 = _this.add.sprite(360, 360, 'bubble');
        _this.s8.anchor.setTo(0.5);
        _this.s8.scale.setTo(0.6, 0.6);
        var tween = _this.add.tween(_this.s8);
        tween.to({ y: 350 }, 2000, 'Linear', true, 0);

        _this.bubbleGrp.add(_this.s1);
        _this.bubbleGrp.add(_this.s2);
        _this.bubbleGrp.add(_this.s3);
        _this.bubbleGrp.add(_this.s4);
        _this.bubbleGrp.add(_this.s5);
        _this.bubbleGrp.add(_this.s6);
        _this.bubbleGrp.add(_this.s7);
        _this.bubbleGrp.add(_this.s8);

    },

    removeCelebration: function () {

        if (_this.count1 < 6) {
            _this.wrong = true;
            _this.slideGrp.destroy();
            if (_this.boot1)
                _this.boot1.destroy();
            if (_this.banana1)
                _this.banana1.destroy();
            if (_this.bubbleGrp)
                _this.bubbleGrp.destroy();
            _this.time.events.add(1000, function () {
                _this.randomiseQues();
            }, _this);

        }

        else {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(1500, () => {
                //_this.state.start('score', true, false);
                _this.state.start('score',true,false,gameID,_this.microConcepts);
            })
        }

    },
    correctAns: function (target) {
        _this.clickSound.play();

        if (_this.questioNo == 1) {
            _this.time.events.add(1000, function () {
                var tween = _this.add.tween(_this.boot1);
                tween.to({ alpha: 0.10, alpha: 0 }, 1000, 'Linear', true, 0);
            }, _this);
        }
        else if (_this.questioNo == 2) {
            _this.time.events.add(1000, function () {
                _this.boot2.destroy();
                _this.addBubble();
            }, _this);
        }
        else if (_this.questioNo == 3) {
            _this.time.events.add(1500, function () {
                var tween = _this.add.tween(_this.banana1);
                tween.to({ alpha: 0.10, alpha: 0 }, 1000, 'Linear', true, 0);
            }, _this);
        }
        else if (_this.questioNo == 4) {
            _this.time.events.add(1000, function () {
                _this.banana2.destroy();
                _this.addBubble();
            }, _this);
        }
        else if (_this.questioNo == 5) {
            _this.time.events.add(1500, function () {
                var tween = _this.add.tween(_this.can1);
                tween.to({ alpha: 0.10, alpha: 0 }, 1000, 'Linear', true, 0);
            }, _this);
        }
        else if (_this.questioNo == 6) {
            _this.time.events.add(1000, function () {
                _this.can2.destroy();
                _this.addBubble();
            }, _this);
        }
        else if (_this.questioNo == 7) {
            _this.time.events.add(1500, function () {
                var tween = _this.add.tween(_this.comb1);
                tween.to({ alpha: 0.10, alpha: 0 }, 1000, 'Linear', true, 0);
            }, _this);
        }
        else if (_this.questioNo == 8) {
            _this.time.events.add(1000, function () {
                _this.comb2.destroy();
                _this.addBubble();
            }, _this);
        }
        else if (_this.questioNo == 9) {
            _this.time.events.add(1500, function () {
                var tween = _this.add.tween(_this.cup1);
                tween.to({ alpha: 0.10, alpha: 0 }, 1000, 'Linear', true, 0);
            }, _this);
        }
        else if (_this.questioNo == 10) {
            _this.time.events.add(1000, function () {
                _this.cup2.destroy();
                _this.addBubble();
            }, _this);
        }
        else if (_this.questioNo == 11) {
            _this.time.events.add(1500, function () {
                var tween = _this.add.tween(_this.hammer1);
                tween.to({ alpha: 0.10, alpha: 0 }, 1000, 'Linear', true, 0);
            }, _this);
        }
        else if (_this.questioNo == 12) {
            _this.time.events.add(1000, function () {
                _this.hammer2.destroy();
                _this.addBubble();
            }, _this);
        }
        else if (_this.questioNo == 13) {
            _this.time.events.add(1500, function () {
                var tween = _this.add.tween(_this.hand1);
                tween.to({ alpha: 0.10, alpha: 0 }, 1000, 'Linear', true, 0);
            }, _this);
        }
        else if (_this.questioNo == 14) {
            _this.time.events.add(1000, function () {
                _this.hand2.destroy();
                _this.addBubble();
            }, _this);
        }
        else if (_this.questioNo == 15) {
            _this.time.events.add(1500, function () {
                var tween = _this.add.tween(_this.key1);
                tween.to({ alpha: 0.10, alpha: 0 }, 1000, 'Linear', true, 0);
            }, _this);
        }
        else if (_this.questioNo == 16) {
            _this.time.events.add(1000, function () {
                _this.key2.destroy();
                _this.addBubble();
            }, _this);
        }
        else if (_this.questioNo == 17) {
            _this.time.events.add(1500, function () {
                var tween = _this.add.tween(_this.leg1);
                tween.to({ alpha: 0.10, alpha: 0 }, 1000, 'Linear', true, 0);
            }, _this);
        }
        else if (_this.questioNo == 18) {
            _this.time.events.add(1000, function () {
                _this.leg2.destroy();
                _this.addBubble();
            }, _this);
        }
        else if (_this.questioNo == 19) {
            _this.time.events.add(1500, function () {
                var tween = _this.add.tween(_this.triangle1);
                tween.to({ alpha: 0.10, alpha: 0 }, 1000, 'Linear', true, 0);
            }, _this);
        }
        else if (_this.questioNo == 20) {
            _this.time.events.add(1000, function () {
                _this.triangle2.destroy();
                _this.addBubble();
            }, _this);
        }
        else if (_this.questioNo == 21) {
            _this.time.events.add(1500, function () {
                var tween = _this.add.tween(_this.umbrella1);
                tween.to({ alpha: 0.10, alpha: 0 }, 1000, 'Linear', true, 0);
            }, _this);
        }
        else if (_this.questioNo == 22) {
            _this.time.events.add(1000, function () {
                _this.umbrella2.destroy();
                _this.addBubble();
            }, _this);
        }
        else if (_this.questioNo == 23) {
            _this.time.events.add(1500, function () {
                var tween = _this.add.tween(_this.watercan1);
                tween.to({ alpha: 0.10, alpha: 0 }, 1000, 'Linear', true, 0);
            }, _this);
        }
        else if (_this.questioNo == 24) {
            _this.time.events.add(1000, function () {
                _this.watercan2.destroy();
                _this.addBubble();
            }, _this);
        }
        // Adding star anim
        _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
        _this.time.events.add(2000, _this.removeCelebration, _this);

    },
    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        
        // //*star action changes
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "GMR_01_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Shapes";
         _this.microConcepts = "Geometry";

        _this.count1++;
        anim.play();
    },


    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },
}