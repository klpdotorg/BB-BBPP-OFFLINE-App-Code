Game.GMAN_01_G6level1 = function () { };

Game.GMAN_01_G6level1.prototype = {
    init: function (game) {
        _this = this;
        _this.languageSelected = window.languageSelected;
        //    telInitializerbbpp.gameIdInit("SG21_2_5",gradeSelected);

        if (_this.languageSelected == null
            || _this.languageSelected == " "
            || _this.languageSelected == "") {
            _this.languageSelected = "English";
        }
        else console.log("Language selected: " + _this.languageSelected);

        telInitializerbbpp.gameIdInit("GMAN_01_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },

    preload: function (game) {
        if (!window.grade5SG2) {

            window.grade5SG2 = true;

            this.load.image('prgressbarOutLine', window.baseUrl + 'assets/commonAssets/prgressbarOutLine.png');
            this.load.image('preloadBar', window.baseUrl + 'assets/commonAssets/prgressbar.png');
            this.load.image('Level42C_Topbar', window.baseUrl + 'assets/commonAssets/topbar.png');
            this.load.image('Level42C_timer', window.baseUrl + 'assets/commonAssets/timebg.png');
            this.load.image('commonBg2', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/commonBg2.png');

            this.load.atlas('grade11_speaker', window.baseUrl + 'assets/commonAssets/grade11_speaker.png', window.baseUrl + 'assets/commonAssets/grade11_speaker.json');
            this.load.atlas('newCommonBackBtnForAll', window.baseUrl + 'assets/commonAssets/backbtn.png', window.baseUrl + 'assets/commonAssets/backbtn.json');
            this.load.atlas('starAnim1', window.baseUrl + 'assets/commonAssets/starAnim1.png', window.baseUrl + 'assets/commonAssets/starAnim1.json');

            //GAME ASSETS  
            this.load.image('SG21_2_5protractor', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/protractor.png');
            this.load.image('SG21_2_5graphic', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/graphic.png');
            this.load.atlas('SG21_2_5rightmark', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/rightmark.png', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/JSON/rightmark.json');
            this.load.atlas('SG21_2_5line', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/line.png', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/JSON/line.json');
            this.load.atlas('SG21_2_5angle1', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/angle1.png', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/JSON/angle1.json');
            this.load.atlas('SG21_2_5angle2', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/angle2.png', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/JSON/angle2.json');
            this.load.atlas('circle_arc', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/geometry.png', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/JSON/geometry.json');
            this.load.atlas('SG21_2_5numbers', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/numbers.png', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/JSON/numbers.json');
            this.load.image('SG21_2_5degree', window.baseUrl + 'assets/gradeAssets/GMAN-01-G6/degree.png');
            this.load.image('hand', window.baseUrl + 'assets/commonAssets/hand.png');

            _this.load.audio('ClickSound', window.baseUrl + 'sounds/ClickSound.mp3');
            _this.load.audio('snapSound', window.baseUrl + 'sounds/snapSound.mp3');
            _this.load.audio('waudio', window.baseUrl + 'sounds/WrongCelebrationSound.mp3');
            _this.load.audio('celebr', window.baseUrl + 'sounds/celebration.mp3');
        }
    },

    create: function (game) {

        _this.questionid = null;
        // _this.noofAttempts = 0;
        // //_this.sceneCount = 0;
        // _this.AnsTimerCount = 0;

        _this.amplify = null;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.wrong = true;
        _this.qArrays;
        _this.speaker;
        _this.celebration;
        _this.timerDisplay;
        _this.rightmark;
        _this.background;
        _this.click3;
        _this.anim4;
        _this.wmusic;
        _this.clickSound;
        _this.starsGroup;
        _this.snapsound;
        _this.questioNo = 0;
        _this.wrongAnswer = false;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
        //  _this.sceneCount = 0;
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count = 0;
        _this.count1 = 0;
        _this.minutes = 0;
        _this.seconds = 0;
        _this.demoCount = 0;
        _this.counterForTimer = 0;
        _this.correct = 0;
        _this.celebration = false;
        _this.cX = 0;
        _this.cY = 0;
        _this.circle = 0;
        _this.radius = 100;
        _this.qArrays = new Array();

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        _this.microConcepts;
        // _this.grade;

        //  _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
        //  _this.qArrays = _this.shuffle(_this.qArrays);
        //  console.log(_this.qArrays);

        //_this.QuestionSetArray= [];
        _this.GrpOneArray = [1, 2, 3, 4, 5, 6, 7];
        _this.GrpOneArray = _this.shuffle(_this.GrpOneArray);
        console.log(_this.GrpOneArray, "1 Group")
        _this.GrpTwoArray = [8, 9, 10];
        _this.GrpTwoArray = _this.shuffle(_this.GrpTwoArray);
        console.log(_this.GrpTwoArray, "2 Group")
        _this.GrpThreeArray = [11, 12, 13];
        _this.GrpThreeArray = _this.shuffle(_this.GrpThreeArray);
        console.log(_this.GrpThreeArray, "3 Group")

        _this.qArrays.push(_this.GrpOneArray[0]);
        _this.qArrays.push(_this.GrpOneArray[1]);
        _this.qArrays.push(_this.GrpOneArray[2]);
        _this.qArrays.push(_this.GrpTwoArray[0]);
        _this.qArrays.push(_this.GrpThreeArray[0]);
        _this.qArrays.push(_this.GrpThreeArray[1]);
        console.log(_this.qArrays, "QQ Set");

        _this.qArrays = _this.shuffle(_this.qArrays);
        console.log(_this.qArrays, "QQ Set Final !!!");

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'commonBg2');

        _this.topbar = _this.add.sprite(0, 0, 'Level42C_Topbar');
        _this.topbar.scale.setTo(1, 1.1);

        _this.backbtn = _this.add.button(-3, 3, 'newCommonBackBtnForAll', function () {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            // _this.state.start('ALS_02_FIB_G6Score');
            console.log("inside backbutton function");
            //  _this.stopVoice();
            _this.time.events.removeAll();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50, function () {
                _this.state.start('grade6Geometry', true, false);
            });
            console.log("here");
        }, _this, 0, 1, 2);

        _this.speaker = _this.add.button(620, 9, 'grade11_speaker', function () {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();
        }, _this);

        _this.timebg = _this.add.sprite(320, 9, 'Level42C_timer');
        _this.timebg.scale.setTo(1, 1);

        _this.timeDisplay = _this.add.text(345, 25, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'myfont';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';


        _this.generateStarsForTheScene(6);
        _this.getQuestion();
    },

    updateTimer: function () {
        _this.counterForTimer++;
        // //console.log("lololil"+_this.counterForTimer);
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

    showtickClickingDemo: function () {
        _this.hand = _this.add.image(850, 307, 'hand')
        _this.hand.scale.setTo(0.66);
        _this.time.events.add(400, () => {
            _this.hand.scale.setTo(0.6);
            _this.time.events.add(400, () => {
                _this.hand.scale.setTo(0.66);
                _this.time.events.add(470, () => {
                    _this.hand.destroy();
                })
            })
        })
    },

    getQuestion: function (target) {
        if (!_this.timer) {
            _this.timer = _this.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
            _this.timer.loop(1000, function () {
                _this.AnsTimerCount++;
            }, this);
            //  Start the timer running - this is important!
            //  It won't start automatically, allowing you to hook it to button events and the like.
            _this.timer.start();
        }

        /**************************************************************************/
        _this.timer1 = _this.time.create(false);
        _this.timer1.loop(1000, function () {
            _this.updateTimer();
        }, _this);
        _this.timer1.start();

        console.log("get" + _this.no11);
        _this.speaker.inputEnabled = true;
        _this.speaker.input.useHandCursor = true;
        _this.questionid = 1;

        switch (_this.qArrays[_this.no11]) //_this.qArrays[_this.no11]
        {
            case 1: _this.gotoThirdQuestion(); // 30 1G
                break;
            case 2: _this.gotoEleventhQuestion() // 360 1G
                break;
            case 3: _this.gotoFourthQuestion(); // 115 1G
                break;
            case 4: _this.gotoFrteenQ(); //280 1G
                break;
            case 5: _this.gotoFifteenQ(); //180 1G
                break;
            case 6: _this.gotoSixteenQ(); // 90 1G
                break;
            case 7: _this.gotoThirteenthQ(); //320 1G
                break;
            case 8: _this.gotoTenthQuestion(); //OBT  2G
                break;
            case 9: _this.gotoEighthQuestion(); // RA 2G
                break;
            case 10: _this.gotoNinthQuestion(); //AC   2G
                break;
            case 11: _this.gotoTwelthQuestion(); // SA 3G
                break;
            case 12: _this.gotoSeventeenQ(); //Complete Angle 3G
                break;
            case 13: _this.gotoFirstQuestion() //RF 3G
                break;
        }
    },

    generateStarsForTheScene: function (count) {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++) {

            _this.starsGroup.create(_this.world.centerX, 15, 'starAnim1');
            for (var j = 0; j < i; j++) {
                if (_this.starsGroup.getChildAt(j)) {
                    _this.starsGroup.getChildAt(j).x -= 15;
                    _this.starsGroup.getChildAt(i).x += 15;
                }
            }
        }
    },

    loadobject: function () {
        _this.image1 = _this.add.sprite(420, 294, 'SG21_2_5protractor');
        _this.image1.anchor.setTo(0.5);
        //_this.image1.scale.setTo(0.75,0.85);
        _this.image1.scale.setTo(0.80, 0.90);

        _this.tickMark = _this.add.sprite(860, 300, 'SG21_2_5rightmark');
        _this.tickMark.anchor.setTo(0.5);
        //_this.tickMark.frame = 0;
        _this.tickMark.scale.setTo(1.5, 1.5);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle, _this);
    },

    gotoFirstQuestion: function () {
        //* Make a reflex angle = an angle that is more than 180 degrees and less than 360 degrees
        console.log("1st question")
        _this.questioNo = 1;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(420, 294, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.55, 0.5);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(548, 290, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(1.9, 0.9);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(420, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.55, 0.5);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(345, 290, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(1.9, 0.9);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        _this.c.drawCircle(420, 293, 15);

        _this.cX = 420;
        _this.cY = 293;

        _this.cX1 = 420;
        _this.cY1 = 296;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        //* Right side angles for reflex angle
        //  //* 185
        _this.image6 = _this.add.sprite(418, 293, 'circle_arc'); //arc 1
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 42;
        //_this.image6.scale.x *= -1;
        _this.image6.visible = false;

        _this.arc2 = _this.add.sprite(418, 293, 'circle_arc'); //arc 2 reverse arc
        _this.arc2.anchor.setTo(0.5);
        _this.arc2.scale.setTo(0.95, 0.95);
        _this.arc2.frame = 42;
        _this.arc2.scale.x *= -1;
        _this.arc2.visible = false;

        _this.image7 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(2, 2);
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(2, 1.5);
        _this.image8.frame = 1;
        _this.image8.visible = false;

        _this.image9 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(2, 1.5);
        _this.image9.frame = 8;
        _this.image9.visible = false;

        _this.image10 = _this.add.sprite(434, 210, 'SG21_2_5numbers');
        _this.image10.anchor.setTo(0.5);
        _this.image10.scale.setTo(2, 1.5);
        _this.image10.frame = 5;
        _this.image10.visible = false;
        //** 190
        _this.arc3 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc3.anchor.setTo(0.5);
        _this.arc3.scale.setTo(0.95, 0.95);
        _this.arc3.frame = 44;
        _this.arc3.visible = false;

        _this.arc4 = _this.add.sprite(418, 290, 'circle_arc');//arc 4 reverse arc
        _this.arc4.anchor.setTo(0.5);
        _this.arc4.scale.setTo(0.95, 0.95);
        _this.arc4.frame = 44;
        _this.arc4.scale.x *= -1;
        _this.arc4.visible = false;

        _this.image11 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image11.anchor.setTo(0.5);
        _this.image11.scale.setTo(1.5, 1.5);
        _this.image11.frame = 1;
        _this.image11.visible = false;

        _this.image12 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image12.anchor.setTo(0.5);
        _this.image12.scale.setTo(1.5, 1.5);
        _this.image12.frame = 9;
        _this.image12.visible = false;

        _this.image13 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image13.anchor.setTo(0.5);
        _this.image13.scale.setTo(1.5, 1.5);
        _this.image13.frame = 0;
        _this.image13.visible = false;

        _this.image14 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image14.anchor.setTo(0.5);
        _this.image14.scale.setTo(1.5, 1.5);
        _this.image14.visible = false;

        //* 195
        _this.arc5 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc5.anchor.setTo(0.5);
        _this.arc5.scale.setTo(0.95, 0.95);
        _this.arc5.frame = 45;
        _this.arc5.visible = false;

        _this.arc6 = _this.add.sprite(418, 293, 'circle_arc'); // reverse arc
        _this.arc6.anchor.setTo(0.5);
        _this.arc6.scale.setTo(0.95, 0.95);
        _this.arc6.frame = 45;
        _this.arc6.scale.x *= -1;
        _this.arc6.visible = false;

        _this.image15 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image15.anchor.setTo(0.5);
        _this.image15.scale.setTo(1.5, 1.5);
        _this.image15.frame = 1;
        _this.image15.visible = false;

        _this.image16 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image16.anchor.setTo(0.5);
        _this.image16.scale.setTo(1.5, 1.5);
        _this.image16.frame = 9;
        _this.image16.visible = false;

        _this.image17 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image17.anchor.setTo(0.5);
        _this.image17.scale.setTo(1.5, 1.5);
        _this.image17.frame = 5;
        _this.image17.visible = false;

        _this.image18 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image18.anchor.setTo(0.5);
        _this.image18.scale.setTo(1.5, 1.5);
        _this.image18.visible = false;
        //*200
        _this.arc7 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc7.anchor.setTo(0.5);
        _this.arc7.scale.setTo(0.95, 0.95);
        _this.arc7.frame = 46;
        _this.arc7.visible = false;

        _this.arc8 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc8.anchor.setTo(0.5);
        _this.arc8.scale.setTo(0.95, 0.95);
        _this.arc8.frame = 46;
        _this.arc8.scale.x *= -1;
        _this.arc8.visible = false;

        _this.image19 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image19.anchor.setTo(0.5);
        _this.image19.scale.setTo(1.5, 1.5);
        _this.image19.frame = 2;
        _this.image19.visible = false;

        _this.image20 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image20.anchor.setTo(0.5);
        _this.image20.scale.setTo(1.5, 1.5);
        _this.image20.frame = 0;
        _this.image20.visible = false;

        _this.image21 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image21.anchor.setTo(0.5);
        _this.image21.scale.setTo(1.5, 1.5);
        _this.image21.frame = 0;
        _this.image21.visible = false;

        _this.image22 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image22.anchor.setTo(0.5);
        _this.image22.scale.setTo(1.5, 1.5);
        _this.image22.visible = false;
        //  //*205
        _this.arc9 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc9.anchor.setTo(0.5);
        _this.arc9.scale.setTo(0.95, 0.95);
        _this.arc9.frame = 47;
        _this.arc9.visible = false;

        _this.arc10 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc10.anchor.setTo(0.5);
        _this.arc10.scale.setTo(0.95, 0.95);
        _this.arc10.frame = 47;
        _this.arc10.scale.x *= -1;
        _this.arc10.visible = false;

        _this.image23 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image23.anchor.setTo(0.5);
        _this.image23.scale.setTo(1.5, 1.5);
        _this.image23.frame = 2;
        _this.image23.visible = false;

        _this.image24 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image24.anchor.setTo(0.5);
        _this.image24.scale.setTo(1.5, 1.5);
        _this.image24.frame = 0;
        _this.image24.visible = false;

        _this.image25 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image25.anchor.setTo(0.5);
        _this.image25.scale.setTo(1.5, 1.5);
        _this.image25.frame = 5;
        _this.image25.visible = false;

        _this.image26 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image26.anchor.setTo(0.5);
        _this.image26.scale.setTo(1.5, 1.5);
        _this.image26.visible = false;
        //  //* 210
        _this.arc11 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc11.anchor.setTo(0.5);
        _this.arc11.scale.setTo(0.95, 0.95);
        _this.arc11.frame = 48;
        _this.arc11.visible = false;

        _this.arc12 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc12.anchor.setTo(0.5);
        _this.arc12.scale.setTo(0.95, 0.95);
        _this.arc12.frame = 48;
        _this.arc12.scale.x *= -1;
        _this.arc12.visible = false;

        _this.image27 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image27.anchor.setTo(0.5);
        _this.image27.scale.setTo(1.5, 1.5);
        _this.image27.frame = 2;
        _this.image27.visible = false;

        _this.image28 = _this.add.sprite(414, 210, 'SG21_2_5numbers');
        _this.image28.anchor.setTo(0.5);
        _this.image28.scale.setTo(1.5, 1.5);
        _this.image28.frame = 1;
        _this.image28.visible = false;

        _this.image29 = _this.add.sprite(428, 210, 'SG21_2_5numbers');
        _this.image29.anchor.setTo(0.5);
        _this.image29.scale.setTo(1.5, 1.5);
        _this.image29.frame = 0;
        _this.image29.visible = false;

        _this.image30 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image30.anchor.setTo(0.5);
        _this.image30.scale.setTo(1.5, 1.5);
        _this.image30.visible = false;
        //  //* 215
        _this.arc13 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc13.anchor.setTo(0.5);
        _this.arc13.scale.setTo(0.95, 0.95);
        _this.arc13.frame = 49;
        _this.arc13.visible = false;

        _this.arc14 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc14.anchor.setTo(0.5);
        _this.arc14.scale.setTo(0.95, 0.95);
        _this.arc14.frame = 49;
        _this.arc14.scale.x *= -1;
        _this.arc14.visible = false;

        _this.image31 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image31.anchor.setTo(0.5);
        _this.image31.scale.setTo(1.5, 1.5);
        _this.image31.frame = 2;
        _this.image31.visible = false;

        _this.image32 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image32.anchor.setTo(0.5);
        _this.image32.scale.setTo(1.5, 1.5);
        _this.image32.frame = 1;
        _this.image32.visible = false;

        _this.image33 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image33.anchor.setTo(0.5);
        _this.image33.scale.setTo(1.5, 1.5);
        _this.image33.frame = 5;
        _this.image33.visible = false;

        _this.image34 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image34.anchor.setTo(0.5);
        _this.image34.scale.setTo(1.5, 1.5);
        _this.image34.visible = false;
        //  //*220
        _this.arc15 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc15.anchor.setTo(0.5);
        _this.arc15.scale.setTo(0.95, 0.95);
        _this.arc15.frame = 50;
        _this.arc15.visible = false;

        _this.arc16 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc16.anchor.setTo(0.5);
        _this.arc16.scale.setTo(0.95, 0.95);
        _this.arc16.frame = 50;
        _this.arc16.scale.x *= -1;
        _this.arc16.visible = false;

        _this.image35 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image35.anchor.setTo(0.5);
        _this.image35.scale.setTo(1.5, 1.5);
        _this.image35.frame = 2;
        _this.image35.visible = false;

        _this.image36 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image36.anchor.setTo(0.5);
        _this.image36.scale.setTo(1.5, 1.5);
        _this.image36.frame = 2;
        _this.image36.visible = false;

        _this.image37 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image37.anchor.setTo(0.5);
        _this.image37.scale.setTo(1.5, 1.5);
        _this.image37.frame = 0;
        _this.image37.visible = false;

        _this.image38 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image38.anchor.setTo(0.5);
        _this.image38.scale.setTo(1.5, 1.5);
        _this.image38.visible = false;
        // //* 225 
        _this.arc17 = _this.add.sprite(418, 291, 'circle_arc');
        _this.arc17.anchor.setTo(0.5);
        _this.arc17.scale.setTo(0.95, 0.95);
        _this.arc17.frame = 51;
        _this.arc17.visible = false;

        _this.arc18 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc18.anchor.setTo(0.5);
        _this.arc18.scale.setTo(0.95, 0.95);
        _this.arc18.frame = 51;
        _this.arc18.scale.x *= -1;
        _this.arc18.visible = false;

        _this.imageN35 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.imageN35.anchor.setTo(0.5);
        _this.imageN35.scale.setTo(1.5, 1.5);
        _this.imageN35.frame = 2;
        _this.imageN35.visible = false;

        _this.imageN36 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.imageN36.anchor.setTo(0.5);
        _this.imageN36.scale.setTo(1.5, 1.5);
        _this.imageN36.frame = 2;
        _this.imageN36.visible = false;

        _this.imageN37 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.imageN37.anchor.setTo(0.5);
        _this.imageN37.scale.setTo(1.5, 1.5);
        _this.imageN37.frame = 5;
        _this.imageN37.visible = false;

        _this.imageN38 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.imageN38.anchor.setTo(0.5);
        _this.imageN38.scale.setTo(1.5, 1.5);
        _this.imageN38.visible = false;
        //  //*230
        _this.arc19 = _this.add.sprite(418, 290, 'circle_arc');
        _this.arc19.anchor.setTo(0.5);
        _this.arc19.scale.setTo(0.95, 0.95);
        _this.arc19.frame = 52;
        _this.arc19.visible = false;

        _this.arc20 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc20.anchor.setTo(0.5);
        _this.arc20.scale.setTo(0.95, 0.95);
        _this.arc20.frame = 52;
        _this.arc20.scale.x *= -1;
        _this.arc20.visible = false;

        _this.image39 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image39.anchor.setTo(0.5);
        _this.image39.scale.setTo(1.5, 1.5);
        _this.image39.frame = 2;
        _this.image39.visible = false;

        _this.image40 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image40.anchor.setTo(0.5);
        _this.image40.scale.setTo(1.5, 1.5);
        _this.image40.frame = 3;
        _this.image40.visible = false;

        _this.image41 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image41.anchor.setTo(0.5);
        _this.image41.scale.setTo(1.5, 1.5);
        _this.image41.frame = 0;
        _this.image41.visible = false;

        _this.image42 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image42.anchor.setTo(0.5);
        _this.image42.scale.setTo(1.5, 1.5);
        _this.image42.visible = false;
        //*235
        _this.arc21 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc21.anchor.setTo(0.5);
        _this.arc21.scale.setTo(0.95, 0.95);
        _this.arc21.frame = 52;
        _this.arc21.visible = false;

        _this.arc22 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc22.anchor.setTo(0.5);
        _this.arc22.scale.setTo(0.95, 0.95);
        _this.arc22.frame = 53;
        _this.arc22.scale.x *= -1;
        _this.arc22.visible = false;

        _this.image43 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image43.anchor.setTo(0.5);
        _this.image43.scale.setTo(1.5, 1.5);
        _this.image43.frame = 2;
        _this.image43.visible = false;

        _this.image44 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image44.anchor.setTo(0.5);
        _this.image44.scale.setTo(1.5, 1.5);
        _this.image44.frame = 3;
        _this.image44.visible = false;

        _this.image45 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image45.anchor.setTo(0.5);
        _this.image45.scale.setTo(1.5, 1.5);
        _this.image45.frame = 5;
        _this.image45.visible = false;

        _this.image46 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image46.anchor.setTo(0.5);
        _this.image46.scale.setTo(1.5, 1.5);
        _this.image46.visible = false;
        //*240
        _this.arc23 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc23.anchor.setTo(0.5);
        _this.arc23.scale.setTo(0.95, 0.95);
        _this.arc23.frame = 53;
        _this.arc23.visible = false;

        _this.arc24 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc24.anchor.setTo(0.5);
        _this.arc24.scale.setTo(0.95, 0.95);
        _this.arc24.frame = 54;
        _this.arc24.scale.x *= -1;
        _this.arc24.visible = false;

        _this.image47 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image47.anchor.setTo(0.5);
        _this.image47.scale.setTo(1.5, 1.5);
        _this.image47.frame = 2;
        _this.image47.visible = false;

        _this.image48 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image48.anchor.setTo(0.5);
        _this.image48.scale.setTo(1.5, 1.5);
        _this.image48.frame = 4;
        _this.image48.visible = false;

        _this.image49 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image49.anchor.setTo(0.5);
        _this.image49.scale.setTo(1.5, 1.5);
        _this.image49.frame = 0;
        _this.image49.visible = false;

        _this.image50 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image50.anchor.setTo(0.5);
        _this.image50.scale.setTo(1.5, 1.5);
        _this.image50.visible = false;
        //*245
        _this.arc25 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc25.anchor.setTo(0.5);
        _this.arc25.scale.setTo(0.95, 0.95);
        _this.arc25.frame = 54;
        _this.arc25.visible = false;

        _this.arc26 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc26.anchor.setTo(0.5);
        _this.arc26.scale.setTo(0.95, 0.95);
        _this.arc26.frame = 55;
        _this.arc26.scale.x *= -1;
        _this.arc26.visible = false;

        _this.image51 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image51.anchor.setTo(0.5);
        _this.image51.scale.setTo(1.5, 1.5);
        _this.image51.frame = 2;
        _this.image51.visible = false;

        _this.image52 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image52.anchor.setTo(0.5);
        _this.image52.scale.setTo(1.5, 1.5);
        _this.image52.frame = 4;
        _this.image52.visible = false;

        _this.image53 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image53.anchor.setTo(0.5);
        _this.image53.scale.setTo(1.5, 1.5);
        _this.image53.frame = 5;
        _this.image53.visible = false;

        _this.image54 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image54.anchor.setTo(0.5);
        _this.image54.scale.setTo(1.5, 1.5);
        _this.image54.visible = false;
        //  //*250
        _this.arc27 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc27.anchor.setTo(0.5);
        _this.arc27.scale.setTo(0.95, 0.95);
        _this.arc27.frame = 55;
        _this.arc27.visible = false;

        _this.arc28 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc28.anchor.setTo(0.5);
        _this.arc28.scale.setTo(0.95, 0.95);
        _this.arc28.frame = 56;
        _this.arc28.scale.x *= -1;
        _this.arc28.visible = false;

        _this.image55 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image55.anchor.setTo(0.5);
        _this.image55.scale.setTo(1.5, 1.5);
        _this.image55.frame = 2;
        _this.image55.visible = false;

        _this.image56 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image56.anchor.setTo(0.5);
        _this.image56.scale.setTo(1.5, 1.5);
        _this.image56.frame = 5;
        _this.image56.visible = false;

        _this.image57 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image57.anchor.setTo(0.5);
        _this.image57.scale.setTo(1.5, 1.5);
        _this.image57.frame = 0;
        _this.image57.visible = false;

        _this.image58 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image58.anchor.setTo(0.5);
        _this.image58.scale.setTo(1.5, 1.5);
        _this.image58.visible = false;
        //  //* 255
        _this.arc29 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc29.anchor.setTo(0.5);
        _this.arc29.scale.setTo(0.95, 0.95);
        _this.arc29.frame = 56;
        _this.arc29.visible = false;

        _this.arc30 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc30.anchor.setTo(0.5);
        _this.arc30.scale.setTo(0.95, 0.95);
        _this.arc30.frame = 57;
        _this.arc30.scale.x *= -1;
        _this.arc30.visible = false;

        _this.image59 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image59.anchor.setTo(0.5);
        _this.image59.scale.setTo(1.5, 1.5);
        _this.image59.frame = 2;
        _this.image59.visible = false;

        _this.image60 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image60.anchor.setTo(0.5);
        _this.image60.scale.setTo(1.5, 1.5);
        _this.image60.frame = 5;
        _this.image60.visible = false;

        _this.image61 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image61.anchor.setTo(0.5);
        _this.image61.scale.setTo(1.5, 1.5);
        _this.image61.frame = 5;
        _this.image61.visible = false;

        _this.image62 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image62.anchor.setTo(0.5);
        _this.image62.scale.setTo(1.5, 1.5);
        _this.image62.visible = false;
        //* 260
        _this.arc31 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc31.anchor.setTo(0.5);
        _this.arc31.scale.setTo(0.95, 0.95);
        _this.arc31.frame = 57;
        _this.arc31.visible = false;

        _this.arc32 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc32.anchor.setTo(0.5);
        _this.arc32.scale.setTo(0.95, 0.95);
        _this.arc32.frame = 58;
        _this.arc32.scale.x *= -1;
        _this.arc32.visible = false;

        _this.image63 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image63.anchor.setTo(0.5);
        _this.image63.scale.setTo(1.5, 1.5);
        _this.image63.frame = 2;
        _this.image63.visible = false;

        _this.image64 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image64.anchor.setTo(0.5);
        _this.image64.scale.setTo(1.5, 1.5);
        _this.image64.frame = 6;
        _this.image64.visible = false;

        _this.image65 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image65.anchor.setTo(0.5);
        _this.image65.scale.setTo(1.5, 1.5);
        _this.image65.frame = 0;
        _this.image65.visible = false;

        _this.image66 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image66.anchor.setTo(0.5);
        _this.image66.scale.setTo(1.5, 1.5);
        _this.image66.visible = false;
        //  //*265
        _this.arc33 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc33.anchor.setTo(0.5);
        _this.arc33.scale.setTo(0.95, 0.95);
        _this.arc33.frame = 58;
        _this.arc33.visible = false;

        _this.arc34 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc34.anchor.setTo(0.5);
        _this.arc34.scale.setTo(0.95, 0.95);
        _this.arc34.frame = 59;
        _this.arc34.scale.x *= -1;
        _this.arc34.visible = false;

        _this.image67 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image67.anchor.setTo(0.5);
        _this.image67.scale.setTo(1.5, 1.5);
        _this.image67.frame = 2;
        _this.image67.visible = false;

        _this.image68 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image68.anchor.setTo(0.5);
        _this.image68.scale.setTo(1.5, 1.5);
        _this.image68.frame = 6;
        _this.image68.visible = false;

        _this.image69 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image69.anchor.setTo(0.5);
        _this.image69.scale.setTo(1.5, 1.5);
        _this.image69.frame = 5;
        _this.image69.visible = false;

        _this.image70 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image70.anchor.setTo(0.5);
        _this.image70.scale.setTo(1.5, 1.5);
        _this.image70.visible = false;
        //  //*270
        _this.arc33N = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc33N.anchor.setTo(0.5);
        _this.arc33N.scale.setTo(0.95, 0.95);
        _this.arc33N.frame = 59;
        _this.arc33N.visible = false;

        _this.arc34N = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc34N.anchor.setTo(0.5);
        _this.arc34N.scale.setTo(0.95, 0.95);
        _this.arc34N.frame = 61;
        _this.arc34N.scale.x *= -1;
        _this.arc34N.visible = false;

        _this.image71 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image71.anchor.setTo(0.5);
        _this.image71.scale.setTo(1.5, 1.5);
        _this.image71.frame = 2;
        _this.image71.visible = false;

        _this.image72 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image72.anchor.setTo(0.5);
        _this.image72.scale.setTo(1.5, 1.5);
        _this.image72.frame = 7;
        _this.image72.visible = false;

        _this.image73 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image73.anchor.setTo(0.5);
        _this.image73.scale.setTo(1.5, 1.5);
        _this.image73.frame = 0;
        _this.image73.visible = false;

        _this.image74 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image74.anchor.setTo(0.5);
        _this.image74.scale.setTo(1.5, 1.5);
        _this.image74.visible = false;
        //* 275
        _this.arc35 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc35.anchor.setTo(0.5);
        _this.arc35.scale.setTo(0.95, 0.95);
        _this.arc35.frame = 61;
        _this.arc35.visible = false;

        _this.arc36 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc36.anchor.setTo(0.5);
        _this.arc36.scale.setTo(0.95, 0.95);
        _this.arc36.frame = 63;
        _this.arc36.scale.x *= -1;
        _this.arc36.visible = false;

        _this.image75 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image75.anchor.setTo(0.5);
        _this.image75.scale.setTo(1.5, 1.5);
        _this.image75.frame = 2;
        _this.image75.visible = false;

        _this.image76 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image76.anchor.setTo(0.5);
        _this.image76.scale.setTo(1.5, 1.5);
        _this.image76.frame = 7;
        _this.image76.visible = false;

        _this.image77 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image77.anchor.setTo(0.5);
        _this.image77.scale.setTo(1.5, 1.5);
        _this.image77.frame = 5;
        _this.image77.visible = false;

        _this.image78 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image78.anchor.setTo(0.5);
        _this.image78.scale.setTo(1.5, 1.5);
        _this.image78.visible = false;
        //*280
        _this.arc37 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc37.anchor.setTo(0.5);
        _this.arc37.scale.setTo(0.95, 0.95);
        _this.arc37.frame = 64;
        _this.arc37.visible = false;

        _this.arc38 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc38.anchor.setTo(0.5);
        _this.arc38.scale.setTo(0.95, 0.95);
        _this.arc38.frame = 64;
        _this.arc38.scale.x *= -1;
        _this.arc38.visible = false;

        _this.image79 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image79.anchor.setTo(0.5);
        _this.image79.scale.setTo(1.5, 1.5);
        _this.image79.frame = 2;
        _this.image79.visible = false;

        _this.image80 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image80.anchor.setTo(0.5);
        _this.image80.scale.setTo(1.5, 1.5);
        _this.image80.frame = 8;
        _this.image80.visible = false;

        _this.image81 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image81.anchor.setTo(0.5);
        _this.image81.scale.setTo(1.5, 1.5);
        _this.image81.frame = 0;
        _this.image81.visible = false;

        _this.image82 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image82.anchor.setTo(0.5);
        _this.image82.scale.setTo(1.5, 1.5);
        _this.image82.visible = false;
        //* 285
        _this.arc37N = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc37N.anchor.setTo(0.5);
        _this.arc37N.scale.setTo(0.95, 0.95);
        _this.arc37N.frame = 64;
        _this.arc37N.visible = false;

        _this.arc38N = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc38N.anchor.setTo(0.5);
        _this.arc38N.scale.setTo(0.95, 0.95);
        _this.arc38N.frame = 65;
        _this.arc38N.scale.x *= -1;
        _this.arc38N.visible = false;

        _this.image83 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image83.anchor.setTo(0.5);
        _this.image83.scale.setTo(1.5, 1.5);
        _this.image83.frame = 2;
        _this.image83.visible = false;

        _this.image84 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image84.anchor.setTo(0.5);
        _this.image84.scale.setTo(1.5, 1.5);
        _this.image84.frame = 8;
        _this.image84.visible = false;

        _this.image85 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image85.anchor.setTo(0.5);
        _this.image85.scale.setTo(1.5, 1.5);
        _this.image85.frame = 5;
        _this.image85.visible = false;

        _this.image86 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image86.anchor.setTo(0.5);
        _this.image86.scale.setTo(1.5, 1.5);
        _this.image86.visible = false;
        //* 290
        _this.arc39 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc39.anchor.setTo(0.5);
        _this.arc39.scale.setTo(0.95, 0.95);
        _this.arc39.frame = 65;
        _this.arc39.visible = false;

        _this.arc40 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc40.anchor.setTo(0.5);
        _this.arc40.scale.setTo(0.95, 0.95);
        _this.arc40.frame = 66;
        _this.arc40.scale.x *= -1;
        _this.arc40.visible = false;

        _this.image87 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image87.anchor.setTo(0.5);
        _this.image87.scale.setTo(1.5, 1.5);
        _this.image87.frame = 2;
        _this.image87.visible = false;

        _this.image88 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image88.anchor.setTo(0.5);
        _this.image88.scale.setTo(1.5, 1.5);
        _this.image88.frame = 9;
        _this.image88.visible = false;

        _this.image89 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image89.anchor.setTo(0.5);
        _this.image89.scale.setTo(1.5, 1.5);
        _this.image89.frame = 0;
        _this.image89.visible = false;

        _this.image90 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image90.anchor.setTo(0.5);
        _this.image90.scale.setTo(1.5, 1.5);
        _this.image90.visible = false;
        //* 295
        _this.arc41 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc41.anchor.setTo(0.5);
        _this.arc41.scale.setTo(0.95, 0.95);
        _this.arc41.frame = 66;
        _this.arc41.visible = false;

        _this.arc42 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc42.anchor.setTo(0.5);
        _this.arc42.scale.setTo(0.95, 0.95);
        _this.arc42.frame = 67;
        _this.arc42.scale.x *= -1;
        _this.arc42.visible = false;

        _this.image91 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image91.anchor.setTo(0.5);
        _this.image91.scale.setTo(1.5, 1.5);
        _this.image91.frame = 2;
        _this.image91.visible = false;

        _this.image92 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image92.anchor.setTo(0.5);
        _this.image92.scale.setTo(1.5, 1.5);
        _this.image92.frame = 9;
        _this.image92.visible = false;

        _this.image93 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image93.anchor.setTo(0.5);
        _this.image93.scale.setTo(1.5, 1.5);
        _this.image93.frame = 5;
        _this.image93.visible = false;

        _this.image94 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image94.anchor.setTo(0.5);
        _this.image94.scale.setTo(1.5, 1.5);
        _this.image94.visible = false;
        //* 300
        _this.arc43 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc43.anchor.setTo(0.5);
        _this.arc43.scale.setTo(0.95, 0.95);
        _this.arc43.frame = 67;
        _this.arc43.visible = false;

        _this.arc44 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc44.anchor.setTo(0.5);
        _this.arc44.scale.setTo(0.95, 0.95);
        _this.arc44.frame = 68;
        _this.arc44.scale.x *= -1;
        _this.arc44.visible = false;

        _this.image95 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image95.anchor.setTo(0.5);
        _this.image95.scale.setTo(1.5, 1.5);
        _this.image95.frame = 3;
        _this.image95.visible = false;

        _this.image96 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image96.anchor.setTo(0.5);
        _this.image96.scale.setTo(1.5, 1.5);
        _this.image96.frame = 0;
        _this.image96.visible = false;

        _this.image97 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image97.anchor.setTo(0.5);
        _this.image97.scale.setTo(1.5, 1.5);
        _this.image97.frame = 0;
        _this.image97.visible = false;

        _this.image98 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image98.anchor.setTo(0.5);
        _this.image98.scale.setTo(1.5, 1.5);
        _this.image98.visible = false;
        //* 305
        _this.arc45 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc45.anchor.setTo(0.5);
        _this.arc45.scale.setTo(0.95, 0.95);
        _this.arc45.frame = 68;
        _this.arc45.visible = false;

        _this.arc46 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc46.anchor.setTo(0.5);
        _this.arc46.scale.setTo(0.95, 0.95);
        _this.arc46.frame = 69;
        _this.arc46.scale.x *= -1;
        _this.arc46.visible = false;

        _this.image99 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image99.anchor.setTo(0.5);
        _this.image99.scale.setTo(1.5, 1.5);
        _this.image99.frame = 3;
        _this.image99.visible = false;

        _this.image100 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image100.anchor.setTo(0.5);
        _this.image100.scale.setTo(1.5, 1.5);
        _this.image100.frame = 0;
        _this.image100.visible = false;

        _this.image101 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image101.anchor.setTo(0.5);
        _this.image101.scale.setTo(1.5, 1.5);
        _this.image101.frame = 5;
        _this.image101.visible = false;

        _this.image102 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image102.anchor.setTo(0.5);
        _this.image102.scale.setTo(1.5, 1.5);
        _this.image102.visible = false;
        //* 310
        _this.arc47 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc47.anchor.setTo(0.5);
        _this.arc47.scale.setTo(0.95, 0.95);
        _this.arc47.frame = 69;
        _this.arc47.visible = false;

        _this.arc48 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc48.anchor.setTo(0.5);
        _this.arc48.scale.setTo(0.95, 0.95);
        _this.arc48.frame = 70;
        _this.arc48.scale.x *= -1;
        _this.arc48.visible = false;

        _this.image103 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image103.anchor.setTo(0.5);
        _this.image103.scale.setTo(1.5, 1.5);
        _this.image103.frame = 3;
        _this.image103.visible = false;

        _this.image104 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image104.anchor.setTo(0.5);
        _this.image104.scale.setTo(1.5, 1.5);
        _this.image104.frame = 1;
        _this.image104.visible = false;

        _this.image105 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image105.anchor.setTo(0.5);
        _this.image105.scale.setTo(1.5, 1.5);
        _this.image105.frame = 0;
        _this.image105.visible = false;

        _this.image106 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image106.anchor.setTo(0.5);
        _this.image106.scale.setTo(1.5, 1.5);
        _this.image106.visible = false;
        //* 315
        _this.arc49 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc49.anchor.setTo(0.5);
        _this.arc49.scale.setTo(0.95, 0.95);
        _this.arc49.frame = 69;
        _this.arc49.visible = false;

        _this.arc50 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc50.anchor.setTo(0.5);
        _this.arc50.scale.setTo(0.95, 0.95);
        _this.arc50.frame = 70;
        _this.arc50.scale.x *= -1;
        _this.arc50.visible = false;

        _this.image107 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image107.anchor.setTo(0.5);
        _this.image107.scale.setTo(1.5, 1.5);
        _this.image107.frame = 3;
        _this.image107.visible = false;

        _this.image108 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image108.anchor.setTo(0.5);
        _this.image108.scale.setTo(1.5, 1.5);
        _this.image108.frame = 1;
        _this.image108.visible = false;

        _this.image109 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image109.anchor.setTo(0.5);
        _this.image109.scale.setTo(1.5, 1.5);
        _this.image109.frame = 5;
        _this.image109.visible = false;

        _this.image110 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image110.anchor.setTo(0.5);
        _this.image110.scale.setTo(1.5, 1.5);
        _this.image110.visible = false;
        //* 320 /Checkd
        _this.arc51 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc51.anchor.setTo(0.5);
        _this.arc51.scale.setTo(0.95, 0.95);
        _this.arc51.frame = 70;
        _this.arc51.visible = false;

        _this.arc52 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc52.anchor.setTo(0.5);
        _this.arc52.scale.setTo(0.95, 0.95);
        _this.arc52.frame = 71;
        _this.arc52.scale.x *= -1;
        _this.arc52.visible = false;

        _this.image111 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image111.anchor.setTo(0.5);
        _this.image111.scale.setTo(1.5, 1.5);
        _this.image111.frame = 3;
        _this.image111.visible = false;

        _this.image112 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image112.anchor.setTo(0.5);
        _this.image112.scale.setTo(1.5, 1.5);
        _this.image112.frame = 2;
        _this.image112.visible = false;

        _this.image113 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image113.anchor.setTo(0.5);
        _this.image113.scale.setTo(1.5, 1.5);
        _this.image113.frame = 0;
        _this.image113.visible = false;

        _this.image114 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image114.anchor.setTo(0.5);
        _this.image114.scale.setTo(1.5, 1.5);
        _this.image114.visible = false;
        //* 325 Chk
        _this.arc53 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc53.anchor.setTo(0.5);
        _this.arc53.scale.setTo(0.95, 0.95);
        _this.arc53.frame = 71;
        _this.arc53.visible = false;

        _this.arc54 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc54.anchor.setTo(0.5);
        _this.arc54.scale.setTo(0.95, 0.95);
        _this.arc54.frame = 72;
        _this.arc54.scale.x *= -1;
        _this.arc54.visible = false;

        _this.image115 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image115.anchor.setTo(0.5);
        _this.image115.scale.setTo(1.5, 1.5);
        _this.image115.frame = 3;
        _this.image115.visible = false;

        _this.image116 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image116.anchor.setTo(0.5);
        _this.image116.scale.setTo(1.5, 1.5);
        _this.image116.frame = 2;
        _this.image116.visible = false;

        _this.image117 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image117.anchor.setTo(0.5);
        _this.image117.scale.setTo(1.5, 1.5);
        _this.image117.frame = 5;
        _this.image117.visible = false;

        _this.image118 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image118.anchor.setTo(0.5);
        _this.image118.scale.setTo(1.5, 1.5);
        _this.image118.visible = false;
        //* 330 //chk
        _this.arc55 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc55.anchor.setTo(0.5);
        _this.arc55.scale.setTo(0.95, 0.95);
        _this.arc55.frame = 72;
        _this.arc55.visible = false;

        _this.arc56 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc56.anchor.setTo(0.5);
        _this.arc56.scale.setTo(0.95, 0.95);
        _this.arc56.frame = 73;
        _this.arc56.scale.x *= -1;
        _this.arc56.visible = false;

        _this.image119 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image119.anchor.setTo(0.5);
        _this.image119.scale.setTo(1.5, 1.5);
        _this.image119.frame = 3;
        _this.image119.visible = false;

        _this.image120 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image120.anchor.setTo(0.5);
        _this.image120.scale.setTo(1.5, 1.5);
        _this.image120.frame = 3;
        _this.image120.visible = false;

        _this.image121 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image121.anchor.setTo(0.5);
        _this.image121.scale.setTo(1.5, 1.5);
        _this.image121.frame = 0;
        _this.image121.visible = false;

        _this.image122 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image122.anchor.setTo(0.5);
        _this.image122.scale.setTo(1.5, 1.5);
        _this.image122.visible = false;
        //* 335
        _this.arc57 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc57.anchor.setTo(0.5);
        _this.arc57.scale.setTo(0.95, 0.95);
        _this.arc57.frame = 73;
        _this.arc57.visible = false;

        _this.arc58 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc58.anchor.setTo(0.5);
        _this.arc58.scale.setTo(0.95, 0.95);
        _this.arc58.frame = 74;
        _this.arc58.scale.x *= -1;
        _this.arc58.visible = false;

        _this.image123 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image123.anchor.setTo(0.5);
        _this.image123.scale.setTo(1.5, 1.5);
        _this.image123.frame = 3;
        _this.image123.visible = false;

        _this.image124 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image124.anchor.setTo(0.5);
        _this.image124.scale.setTo(1.5, 1.5);
        _this.image124.frame = 3;
        _this.image124.visible = false;

        _this.image125 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image125.anchor.setTo(0.5);
        _this.image125.scale.setTo(1.5, 1.5);
        _this.image125.frame = 5;
        _this.image125.visible = false;

        _this.image126 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image126.anchor.setTo(0.5);
        _this.image126.scale.setTo(1.5, 1.5);
        _this.image126.visible = false;
        //* 340
        _this.arc59 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc59.anchor.setTo(0.5);
        _this.arc59.scale.setTo(0.95, 0.95);
        _this.arc59.frame = 74;
        _this.arc59.visible = false;

        _this.arc60 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc60.anchor.setTo(0.5);
        _this.arc60.scale.setTo(0.95, 0.95);
        _this.arc60.frame = 75;
        _this.arc60.scale.x *= -1;
        _this.arc60.visible = false;

        _this.image127 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image127.anchor.setTo(0.5);
        _this.image127.scale.setTo(1.5, 1.5);
        _this.image127.frame = 3;
        _this.image127.visible = false;

        _this.image128 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image128.anchor.setTo(0.5);
        _this.image128.scale.setTo(1.5, 1.5);
        _this.image128.frame = 4;
        _this.image128.visible = false;

        _this.image129 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image129.anchor.setTo(0.5);
        _this.image129.scale.setTo(1.5, 1.5);
        _this.image129.frame = 0;
        _this.image129.visible = false;

        _this.image130 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image130.anchor.setTo(0.5);
        _this.image130.scale.setTo(1.5, 1.5);
        _this.image130.visible = false;
        //* 345
        _this.arc61 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc61.anchor.setTo(0.5);
        _this.arc61.scale.setTo(0.95, 0.95);
        _this.arc61.frame = 75;
        _this.arc61.visible = false;

        _this.arc62 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc62.anchor.setTo(0.5);
        _this.arc62.scale.setTo(0.95, 0.95);
        _this.arc62.frame = 76;
        _this.arc62.scale.x *= -1;
        _this.arc62.visible = false;

        _this.image131 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image131.anchor.setTo(0.5);
        _this.image131.scale.setTo(1.5, 1.5);
        _this.image131.frame = 3;
        _this.image131.visible = false;

        _this.image132 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image132.anchor.setTo(0.5);
        _this.image132.scale.setTo(1.5, 1.5);
        _this.image132.frame = 4;
        _this.image132.visible = false;

        _this.image133 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image133.anchor.setTo(0.5);
        _this.image133.scale.setTo(1.5, 1.5);
        _this.image133.frame = 5;
        _this.image133.visible = false;

        _this.image134 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image134.anchor.setTo(0.5);
        _this.image134.scale.setTo(1.5, 1.5);
        _this.image134.visible = false;
        //* 350
        _this.arc63 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc63.anchor.setTo(0.5);
        _this.arc63.scale.setTo(0.95, 0.95);
        _this.arc63.frame = 76;
        _this.arc63.visible = false;

        _this.arc64 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc64.anchor.setTo(0.5);
        _this.arc64.scale.setTo(0.95, 0.95);
        _this.arc64.frame = 77;
        _this.arc64.scale.x *= -1;
        _this.arc64.visible = false;

        _this.image135 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image135.anchor.setTo(0.5);
        _this.image135.scale.setTo(1.5, 1.5);
        _this.image135.frame = 3;
        _this.image135.visible = false;

        _this.image136 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image136.anchor.setTo(0.5);
        _this.image136.scale.setTo(1.5, 1.5);
        _this.image136.frame = 5;
        _this.image136.visible = false;

        _this.image137 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image137.anchor.setTo(0.5);
        _this.image137.scale.setTo(1.5, 1.5);
        _this.image137.frame = 0;
        _this.image137.visible = false;

        _this.image138 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image138.anchor.setTo(0.5);
        _this.image138.scale.setTo(1.5, 1.5);
        _this.image138.visible = false;
        //* 355
        _this.arc65 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc65.anchor.setTo(0.5);
        _this.arc65.scale.setTo(0.95, 0.95);
        _this.arc65.frame = 77;
        _this.arc65.visible = false;

        _this.arc66 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc66.anchor.setTo(0.5);
        _this.arc66.scale.setTo(0.95, 0.95);
        _this.arc66.frame = 78;
        _this.arc66.scale.x *= -1;
        _this.arc66.visible = false;

        _this.image139 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image139.anchor.setTo(0.5);
        _this.image139.scale.setTo(1.5, 1.5);
        _this.image139.frame = 3;
        _this.image139.visible = false;

        _this.image140 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image140.anchor.setTo(0.5);
        _this.image140.scale.setTo(1.5, 1.5);
        _this.image140.frame = 5;
        _this.image140.visible = false;

        _this.image141 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image141.anchor.setTo(0.5);
        _this.image141.scale.setTo(1.5, 1.5);
        _this.image141.frame = 5;
        _this.image141.visible = false;

        _this.image142 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image142.anchor.setTo(0.5);
        _this.image142.scale.setTo(1.5, 1.5);
        _this.image142.visible = false;
        _this.slideGrp.add(_this.image1);
        _this.slideGrp.add(_this.image2); _this.slideGrp.add(_this.image14); _this.slideGrp.add(_this.image27); _this.slideGrp.add(_this.image40); _this.slideGrp.add(_this.image53); _this.slideGrp.add(_this.image66); _this.slideGrp.add(_this.image74);
        _this.slideGrp.add(_this.image3); _this.slideGrp.add(_this.image15); _this.slideGrp.add(_this.image28); _this.slideGrp.add(_this.image41); _this.slideGrp.add(_this.image54); _this.slideGrp.add(_this.image67); _this.slideGrp.add(_this.image75);
        _this.slideGrp.add(_this.image4); _this.slideGrp.add(_this.image16); _this.slideGrp.add(_this.image29); _this.slideGrp.add(_this.image42); _this.slideGrp.add(_this.image55); _this.slideGrp.add(_this.image68); _this.slideGrp.add(_this.image76);
        _this.slideGrp.add(_this.image5); _this.slideGrp.add(_this.image17); _this.slideGrp.add(_this.image30); _this.slideGrp.add(_this.image43); _this.slideGrp.add(_this.image56); _this.slideGrp.add(_this.image69); _this.slideGrp.add(_this.image77);
        _this.slideGrp.add(_this.image6); _this.slideGrp.add(_this.image18); _this.slideGrp.add(_this.image31); _this.slideGrp.add(_this.image44); _this.slideGrp.add(_this.image57); _this.slideGrp.add(_this.image70); _this.slideGrp.add(_this.image78);
        _this.slideGrp.add(_this.image7); _this.slideGrp.add(_this.image19); _this.slideGrp.add(_this.image32); _this.slideGrp.add(_this.image45); _this.slideGrp.add(_this.image58); _this.slideGrp.add(_this.image71); _this.slideGrp.add(_this.image79);
        _this.slideGrp.add(_this.image8); _this.slideGrp.add(_this.image20); _this.slideGrp.add(_this.image33); _this.slideGrp.add(_this.image46); _this.slideGrp.add(_this.image59); _this.slideGrp.add(_this.image72); _this.slideGrp.add(_this.image80);
        _this.slideGrp.add(_this.image9); _this.slideGrp.add(_this.image21); _this.slideGrp.add(_this.image34); _this.slideGrp.add(_this.image47); _this.slideGrp.add(_this.image60); _this.slideGrp.add(_this.image73); _this.slideGrp.add(_this.image81);
        _this.slideGrp.add(_this.image10); _this.slideGrp.add(_this.image22); _this.slideGrp.add(_this.image35); _this.slideGrp.add(_this.image48); _this.slideGrp.add(_this.image61); _this.slideGrp.add(_this.imageN35); _this.slideGrp.add(_this.image82);
        _this.slideGrp.add(_this.image11); _this.slideGrp.add(_this.image23); _this.slideGrp.add(_this.image36); _this.slideGrp.add(_this.image49); _this.slideGrp.add(_this.image62); _this.slideGrp.add(_this.imageN36); _this.slideGrp.add(_this.image83);
        _this.slideGrp.add(_this.image12); _this.slideGrp.add(_this.image24); _this.slideGrp.add(_this.image37); _this.slideGrp.add(_this.image50); _this.slideGrp.add(_this.image63); _this.slideGrp.add(_this.imageN37); _this.slideGrp.add(_this.image84);
        _this.slideGrp.add(_this.image13); _this.slideGrp.add(_this.image25); _this.slideGrp.add(_this.image38); _this.slideGrp.add(_this.image51); _this.slideGrp.add(_this.image64); _this.slideGrp.add(_this.imageN38); _this.slideGrp.add(_this.image85);
        _this.slideGrp.add(_this.tickMark); _this.slideGrp.add(_this.image26); _this.slideGrp.add(_this.image39); _this.slideGrp.add(_this.image52); _this.slideGrp.add(_this.image65); _this.slideGrp.add(_this.image86); _this.slideGrp.add(_this.image87);
        _this.slideGrp.add(_this.image88); _this.slideGrp.add(_this.image93); _this.slideGrp.add(_this.image99); _this.slideGrp.add(_this.image105); _this.slideGrp.add(_this.image111); _this.slideGrp.add(_this.image117); _this.slideGrp.add(_this.image123);
        _this.slideGrp.add(_this.image89); _this.slideGrp.add(_this.image94); _this.slideGrp.add(_this.image100); _this.slideGrp.add(_this.image106); _this.slideGrp.add(_this.image112); _this.slideGrp.add(_this.image118); _this.slideGrp.add(_this.image124);
        _this.slideGrp.add(_this.image90); _this.slideGrp.add(_this.image95); _this.slideGrp.add(_this.image101); _this.slideGrp.add(_this.image107); _this.slideGrp.add(_this.image113); _this.slideGrp.add(_this.image119); _this.slideGrp.add(_this.image125);
        _this.slideGrp.add(_this.image91); _this.slideGrp.add(_this.image96); _this.slideGrp.add(_this.image102); _this.slideGrp.add(_this.image108); _this.slideGrp.add(_this.image114); _this.slideGrp.add(_this.image120); _this.slideGrp.add(_this.image126);
        _this.slideGrp.add(_this.image92); _this.slideGrp.add(_this.image97); _this.slideGrp.add(_this.image103); _this.slideGrp.add(_this.image109); _this.slideGrp.add(_this.image115); _this.slideGrp.add(_this.image121); _this.slideGrp.add(_this.image127);
        _this.slideGrp.add(_this.circle); _this.slideGrp.add(_this.image98); _this.slideGrp.add(_this.image104); _this.slideGrp.add(_this.image110); _this.slideGrp.add(_this.image116); _this.slideGrp.add(_this.image122); _this.slideGrp.add(_this.image128);
        _this.slideGrp.add(_this.image129); _this.slideGrp.add(_this.image130); _this.slideGrp.add(_this.image131); _this.slideGrp.add(_this.image132); _this.slideGrp.add(_this.image133); _this.slideGrp.add(_this.image134); _this.slideGrp.add(_this.image135);
        _this.slideGrp.add(_this.image136); _this.slideGrp.add(_this.image137); _this.slideGrp.add(_this.image138); _this.slideGrp.add(_this.image139); _this.slideGrp.add(_this.image140); _this.slideGrp.add(_this.image141); _this.slideGrp.add(_this.image142);
        _this.slideGrp.add(_this.arc2); _this.slideGrp.add(_this.arc7); _this.slideGrp.add(_this.arc12); _this.slideGrp.add(_this.arc17); _this.slideGrp.add(_this.arc22); _this.slideGrp.add(_this.arc27); _this.slideGrp.add(_this.arc32); _this.slideGrp.add(_this.arc37);
        _this.slideGrp.add(_this.arc3); _this.slideGrp.add(_this.arc8); _this.slideGrp.add(_this.arc13); _this.slideGrp.add(_this.arc18); _this.slideGrp.add(_this.arc23); _this.slideGrp.add(_this.arc28); _this.slideGrp.add(_this.arc33); _this.slideGrp.add(_this.arc38);
        _this.slideGrp.add(_this.arc4); _this.slideGrp.add(_this.arc9); _this.slideGrp.add(_this.arc14); _this.slideGrp.add(_this.arc19); _this.slideGrp.add(_this.arc24); _this.slideGrp.add(_this.arc29); _this.slideGrp.add(_this.arc34); _this.slideGrp.add(_this.arc39);
        _this.slideGrp.add(_this.arc5); _this.slideGrp.add(_this.arc10); _this.slideGrp.add(_this.arc15); _this.slideGrp.add(_this.arc20); _this.slideGrp.add(_this.arc25); _this.slideGrp.add(_this.arc30); _this.slideGrp.add(_this.arc35); _this.slideGrp.add(_this.arc40);
        _this.slideGrp.add(_this.arc6); _this.slideGrp.add(_this.arc11); _this.slideGrp.add(_this.arc16); _this.slideGrp.add(_this.arc21); _this.slideGrp.add(_this.arc26); _this.slideGrp.add(_this.arc31); _this.slideGrp.add(_this.arc36); _this.slideGrp.add(_this.arc41);
        _this.slideGrp.add(_this.arc42); _this.slideGrp.add(_this.arc45); _this.slideGrp.add(_this.arc48); _this.slideGrp.add(_this.arc51); _this.slideGrp.add(_this.arc54); _this.slideGrp.add(_this.arc57); _this.slideGrp.add(_this.arc60); _this.slideGrp.add(_this.arc63);
        _this.slideGrp.add(_this.arc43); _this.slideGrp.add(_this.arc46); _this.slideGrp.add(_this.arc49); _this.slideGrp.add(_this.arc52); _this.slideGrp.add(_this.arc55); _this.slideGrp.add(_this.arc58); _this.slideGrp.add(_this.arc61); _this.slideGrp.add(_this.arc64);
        _this.slideGrp.add(_this.arc44); _this.slideGrp.add(_this.arc47); _this.slideGrp.add(_this.arc50); _this.slideGrp.add(_this.arc53); _this.slideGrp.add(_this.arc56); _this.slideGrp.add(_this.arc59); _this.slideGrp.add(_this.arc62); _this.slideGrp.add(_this.arc65);
        _this.slideGrp.add(_this.arc66); _this.slideGrp.add(_this.arc34N); _this.slideGrp.add(_this.arc33N); _this.slideGrp.add(_this.c); _this.slideGrp.add(_this.arc38N); _this.slideGrp.add(_this.arc37N);

        _this.x = 124;
        _this.y = 285;
    },

    moveSpriteOnCircle: function (x, y) {
        _this.theta = Math.atan2(x - _this.cX1, y - _this.cY1)

        var newX = Math.sin(_this.theta) * _this.radius;
        var newY = Math.cos(_this.theta) * _this.radius;

        _this.image4.x = _this.cX1 + newX;
        _this.image4.y = _this.cY1 + newY;
    },

    moveSpriteOnCircle1: function (x, y) {

        _this.theta = Math.atan2(x - _this.cX, y - _this.cY)

        var newX = Math.sin(_this.theta) * _this.radius;
        var newY = Math.cos(_this.theta) * _this.radius;

        _this.image5.x = _this.cX + newX;
        _this.image5.y = _this.cY + newY;
    },

    onDragUpdate: function () {
        var mouseX = _this.input.x;
        var mouseY = _this.input.y;
        console.log("value" + mouseX);
        console.log("value" + mouseY);
        if (mouseY >= 433) {
            mouseY = 433;

        }
        _this.moveSpriteOnCircle(mouseX, mouseY);
        {
            _this.image2.rotation = _this.physics.arcade.angleBetween(_this.image2, _this.image4);
            _this.image4.rotation = _this.physics.arcade.angleBetween(_this.image4, _this.image2);
            _this.image4.events.onDragStop.removeAll();
            if (_this.count1 == 0 && _this.demoCount == 0) {
                _this.image4.events.onDragStop.add(function () {
                    _this.demoCount++;
                    _this.showtickClickingDemo();
                    console.log(_this.demoCount, "counttt")
                })
            }
            _this.tickMark.events.onInputDown.add(_this.toCheckangle, _this);
        }
    },

    onDragUpdate1: function () {
        var mouseX = _this.input.x;
        var mouseY = _this.input.y;
        console.log("value" + mouseX);
        console.log("value" + mouseY);
        if (mouseY >= 430) {
            mouseY = 430;
        }
        _this.moveSpriteOnCircle1(mouseX, mouseY);
        {
            _this.image3.rotation = _this.physics.arcade.angleBetween(_this.image3, _this.image5);
            _this.image5.rotation = _this.physics.arcade.angleBetween(_this.image5, _this.image3);
            _this.image5.events.onDragStop.removeAll();
            if (_this.count1 == 0 && _this.demoCount == 0) {
                _this.image5.events.onDragStop.add(function () {
                    _this.demoCount++;
                    _this.showtickClickingDemo();
                })
            }

            _this.tickMark.events.onInputDown.add(_this.toCheckangle, _this);
        }
    },

    gotoThirdQuestion: function () {
        //* To Make an angle of 30 degree 
        console.log("3rd question , 30D")
        _this.questioNo = 3;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(420, 294, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.55, 0.5);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(538, 290, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(2.0, 2);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(420, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.55, 0.5);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(355, 290, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(2.0, 2);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        _this.c.drawCircle(420, 293, 15);

        _this.cX = 420;
        _this.cY = 293;

        _this.cX1 = 420;
        _this.cY1 = 296;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        _this.image6 = _this.add.sprite(412, 264, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 14;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(480, 280, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(1.6, 1.6);
        _this.image7.frame = 3;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(500, 280, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(1.6, 1.6);
        _this.image8.frame = 0;
        _this.image8.visible = false;

        _this.image9 = _this.add.sprite(510, 260, 'SG21_2_5degree');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(2, 2);
        _this.image9.visible = false;

        _this.image10 = _this.add.sprite(415, 265, 'SG21_2_5angle2');
        _this.image10.anchor.setTo(0.5);
        _this.image10.scale.setTo(0.95, 0.95);
        _this.image10.frame = 15;
        _this.image10.visible = false;

        _this.image11 = _this.add.sprite(310, 275, 'SG21_2_5numbers');
        _this.image11.anchor.setTo(0.5);
        _this.image11.scale.setTo(1.7, 1.7);
        _this.image11.frame = 3;
        _this.image11.visible = false;

        _this.image12 = _this.add.sprite(332, 275, 'SG21_2_5numbers');
        _this.image12.anchor.setTo(0.5);
        _this.image12.scale.setTo(1.7, 1.7);
        _this.image12.frame = 0;
        _this.image12.visible = false;

        _this.image13 = _this.add.sprite(335, 257, 'SG21_2_5degree');
        _this.image13.anchor.setTo(0.5);
        _this.image13.scale.setTo(2, 2);
        _this.image13.visible = false;

        _this.slideGrp.add(_this.image1);
        _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3);
        _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.image6);
        _this.slideGrp.add(_this.image7);
        _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9);
        _this.slideGrp.add(_this.image10);
        _this.slideGrp.add(_this.image11);
        _this.slideGrp.add(_this.image12);
        _this.slideGrp.add(_this.image13);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoFourthQuestion: function () {
        //* To make an angle of 115 degrees
        console.log("4th question, 115d")
        _this.questioNo = 4;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(420, 294, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.55, 0.5);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(538, 290, 'SG21_2_5graphic');;
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(2.0, 2);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(420, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.55, 0.5);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(355, 290, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(3.4, 2);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        _this.c.drawCircle(420, 293, 15);

        _this.cX = 420;
        _this.cY = 293;

        _this.cX1 = 420;
        _this.cY1 = 296;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;
        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        _this.image6 = _this.add.sprite(429, 265, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 22;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(470, 243, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(1.5, 1.5);
        _this.image7.frame = 1;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(485, 243, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(1.5, 1.5);
        _this.image8.frame = 1;
        _this.image8.visible = false;

        _this.image9 = _this.add.sprite(500, 243, 'SG21_2_5numbers');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(1.5, 1.5);
        _this.image9.frame = 5;
        _this.image9.visible = false;

        _this.image10 = _this.add.sprite(515, 230, 'SG21_2_5degree');
        _this.image10.anchor.setTo(0.5);
        _this.image10.scale.setTo(2, 2);
        _this.image10.visible = false;

        _this.image11 = _this.add.sprite(410, 265, 'SG21_2_5angle2');
        _this.image11.anchor.setTo(0.5);
        _this.image11.scale.setTo(0.95, 0.95);
        _this.image11.frame = 22;
        _this.image11.visible = false;

        _this.image12 = _this.add.sprite(325, 243, 'SG21_2_5numbers');
        _this.image12.anchor.setTo(0.5);
        _this.image12.scale.setTo(1.5, 1.5);
        _this.image12.frame = 1;
        _this.image12.visible = false;

        _this.image13 = _this.add.sprite(340, 243, 'SG21_2_5numbers');
        _this.image13.anchor.setTo(0.5);
        _this.image13.scale.setTo(1.5, 1.5);
        _this.image13.frame = 1;
        _this.image13.visible = false;

        _this.image14 = _this.add.sprite(355, 243, 'SG21_2_5numbers');
        _this.image14.anchor.setTo(0.5);
        _this.image14.scale.setTo(1.5, 1.5);
        _this.image14.frame = 5;
        _this.image14.visible = false;

        _this.image15 = _this.add.sprite(365, 233, 'SG21_2_5degree');
        _this.image15.anchor.setTo(0.5);
        _this.image15.scale.setTo(2, 2);
        _this.image15.visible = false;

        _this.slideGrp.add(_this.image1);
        _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3);
        _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.image6);
        _this.slideGrp.add(_this.image7);
        _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9);
        _this.slideGrp.add(_this.image10);
        _this.slideGrp.add(_this.image11);
        _this.slideGrp.add(_this.image12);
        _this.slideGrp.add(_this.image13);
        _this.slideGrp.add(_this.image14);
        _this.slideGrp.add(_this.image15);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoFifthQuestion: function () {
        //* To make an angle of 130 degrees
        console.log("5th question")
        _this.questioNo = 5;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }
        _this.image2 = _this.add.sprite(420, 294, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.55, 0.5);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(538, 290, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(2, 2);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(420, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.55, 0.5);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(355, 290, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(2, 2);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        _this.c.drawCircle(420, 293, 15);

        _this.cX = 420;
        _this.cY = 293;

        _this.cX1 = 420;
        _this.cY1 = 296;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        _this.image6 = _this.add.sprite(413, 270, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 25;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(450, 250, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(1.5, 1.5);
        _this.image7.frame = 1;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(465, 250, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(1.5, 1.5);
        _this.image8.frame = 3;
        _this.image8.visible = false;

        _this.image9 = _this.add.sprite(485, 250, 'SG21_2_5numbers');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(1.5, 1.5);
        _this.image9.frame = 0;
        _this.image9.visible = false;

        _this.image10 = _this.add.sprite(497, 241, 'SG21_2_5degree');
        _this.image10.anchor.setTo(0.5);
        _this.image10.scale.setTo(2, 2);
        _this.image10.visible = false;

        _this.image11 = _this.add.sprite(426, 270, 'SG21_2_5angle2');
        _this.image11.anchor.setTo(0.5);
        _this.image11.scale.setTo(0.95, 0.95);
        _this.image11.frame = 24;
        _this.image11.visible = false;

        _this.image12 = _this.add.sprite(340, 270, 'SG21_2_5numbers');
        _this.image12.anchor.setTo(0.5);
        _this.image12.scale.setTo(1.5, 1.5);
        _this.image12.frame = 1;
        _this.image12.visible = false;

        _this.image13 = _this.add.sprite(355, 270, 'SG21_2_5numbers');
        _this.image13.anchor.setTo(0.5);
        _this.image13.scale.setTo(1.5, 1.5);
        _this.image13.frame = 3;
        _this.image13.visible = false;

        _this.image14 = _this.add.sprite(370, 270, 'SG21_2_5numbers');
        _this.image14.anchor.setTo(0.5);
        _this.image14.scale.setTo(1.5, 1.5);
        _this.image14.frame = 0;
        _this.image14.visible = false;

        _this.image15 = _this.add.sprite(382, 262, 'SG21_2_5degree');
        _this.image15.anchor.setTo(0.5);
        _this.image15.scale.setTo(2, 2);
        _this.image15.visible = false;

        _this.slideGrp.add(_this.image1);
        _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3);
        _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.image6);
        _this.slideGrp.add(_this.image7);
        _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9);
        _this.slideGrp.add(_this.image10);
        _this.slideGrp.add(_this.image11);
        _this.slideGrp.add(_this.image12);
        _this.slideGrp.add(_this.image13);
        _this.slideGrp.add(_this.image14);
        _this.slideGrp.add(_this.image15);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoSixthQuestion: function () {
        //* To make an angle of 145 degrees
        console.log("6th qqq")
        _this.questioNo = 6;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(420, 292, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.5, 0.5);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(510, 292, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(1.5, 0.5);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(419, 290, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.5, 0.5);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(370, 290, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(1.5, 0.5);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        //   _this.c.drawCircle(416, 432, 15);
        _this.c.drawCircle(419, 292, 15);

        _this.cX = 419;
        _this.cY = 292;

        _this.cX1 = 419;
        _this.cY1 = 295;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        _this.image6 = _this.add.sprite(410, 268, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 25;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(468, 268, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(2, 2);
        _this.image7.frame = 1;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(485, 268, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(2, 2);
        _this.image8.frame = 4;
        _this.image8.visible = false;

        _this.image9 = _this.add.sprite(505, 268, 'SG21_2_5numbers');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(2, 2);
        _this.image9.frame = 5;
        _this.image9.visible = false;

        _this.image10 = _this.add.sprite(520, 256, 'SG21_2_5degree');
        _this.image10.anchor.setTo(0.5);
        _this.image10.scale.setTo(2, 2);
        _this.image10.visible = false;

        _this.image11 = _this.add.sprite(430, 266, 'SG21_2_5angle2');
        _this.image11.anchor.setTo(0.5);
        _this.image11.scale.setTo(0.95, 0.95);
        _this.image11.frame = 25;
        _this.image11.visible = false;

        _this.image12 = _this.add.sprite(328, 266, 'SG21_2_5numbers');
        _this.image12.anchor.setTo(0.5);
        _this.image12.scale.setTo(2, 2);
        _this.image12.frame = 1;
        _this.image12.visible = false;

        _this.image13 = _this.add.sprite(345, 266, 'SG21_2_5numbers');
        _this.image13.anchor.setTo(0.5);
        _this.image13.scale.setTo(2, 2);
        _this.image13.frame = 4;
        _this.image13.visible = false;

        _this.image14 = _this.add.sprite(368, 266, 'SG21_2_5numbers');
        _this.image14.anchor.setTo(0.5);
        _this.image14.scale.setTo(2, 2);
        _this.image14.frame = 5;
        _this.image14.visible = false;

        _this.image15 = _this.add.sprite(380, 256, 'SG21_2_5degree');
        _this.image15.anchor.setTo(0.5);
        _this.image15.scale.setTo(2, 2);
        _this.image15.visible = false;

        _this.slideGrp.add(_this.image1);
        _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3);
        _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.image6);
        _this.slideGrp.add(_this.image7);
        _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9);
        _this.slideGrp.add(_this.image10);
        _this.slideGrp.add(_this.image11);
        _this.slideGrp.add(_this.image12);
        _this.slideGrp.add(_this.image13);
        _this.slideGrp.add(_this.image14);
        _this.slideGrp.add(_this.image15);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoSeventhQuestion: function () {
        //* To make an angle of 45 degrees
        console.log("7th question")
        _this.questioNo = 7;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(420, 293, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.47, 0.5);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(510, 291, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(1.5, 0.5);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(419, 291, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.5, 0.5);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(370, 292, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(1.5, 0.5);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        //   _this.c.drawCircle(416, 432, 15);
        _this.c.drawCircle(419, 292, 15);

        _this.cX = 419;
        _this.cY = 292;

        _this.cX1 = 419;
        _this.cY1 = 295;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        _this.image6 = _this.add.sprite(423, 268, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.9, 0.95);
        _this.image6.frame = 16;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(480, 268, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(1.5, 1.5);
        _this.image7.frame = 4;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(495, 268, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(1.5, 1.5);
        _this.image8.frame = 5;
        _this.image8.visible = false;

        _this.image9 = _this.add.sprite(505, 258, 'SG21_2_5degree');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(2, 2);
        _this.image9.visible = false;

        _this.image10 = _this.add.sprite(397, 266, 'SG21_2_5angle2');
        _this.image10.anchor.setTo(0.5);
        _this.image10.scale.setTo(0.9, 0.95);
        _this.image10.frame = 17;
        _this.image10.visible = false;

        _this.image11 = _this.add.sprite(310, 266, 'SG21_2_5numbers');
        _this.image11.anchor.setTo(0.5);
        _this.image11.scale.setTo(1.5, 1.5);
        _this.image11.frame = 4;
        _this.image11.visible = false;

        _this.image12 = _this.add.sprite(325, 266, 'SG21_2_5numbers');
        _this.image12.anchor.setTo(0.5);
        _this.image12.scale.setTo(1.5, 1.5);
        _this.image12.frame = 5;
        _this.image12.visible = false;

        _this.image13 = _this.add.sprite(335, 256, 'SG21_2_5degree');
        _this.image13.anchor.setTo(0.5);
        _this.image13.scale.setTo(1.5, 1.5);
        _this.image13.visible = false;

        _this.slideGrp.add(_this.image1);
        _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3);
        _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.image6);
        _this.slideGrp.add(_this.image7);
        _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9);
        _this.slideGrp.add(_this.image10);
        _this.slideGrp.add(_this.image11);
        _this.slideGrp.add(_this.image12);
        _this.slideGrp.add(_this.image13);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoEighthQuestion: function () {
        //* To make right angle (A right angle is an angle that is exactly equal to 90 degrees (or π/2) in measure.)
        console.log("8th question")
        _this.questioNo = 8;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(420, 293, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.5, 0.5);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(510, 293, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(1.5, 0.5);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(420, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.5, 0.5);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(370, 293, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(1.5, 0.5);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        //   _this.c.drawCircle(416, 432, 15);
        _this.c.drawCircle(419, 292, 15);

        _this.cX = 419;
        _this.cY = 292;

        _this.cX1 = 419;
        _this.cY1 = 295;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        _this.image6 = _this.add.sprite(416, 265, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 9;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(476, 235, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(1.5, 1.5);
        _this.image7.frame = 9;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(490, 235, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(1.5, 1.5);
        _this.image8.frame = 0;
        _this.image8.visible = false;

        _this.image9 = _this.add.sprite(500, 225, 'SG21_2_5degree');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(2, 2);
        _this.image9.visible = false;

        _this.image10 = _this.add.sprite(422, 266, 'SG21_2_5angle2');
        _this.image10.anchor.setTo(0.5);
        _this.image10.scale.setTo(0.95, 0.95);
        _this.image10.frame = 9;
        _this.image10.visible = false;

        _this.image11 = _this.add.sprite(340, 235, 'SG21_2_5numbers');
        _this.image11.anchor.setTo(0.5);
        _this.image11.scale.setTo(1.5, 1.5);
        _this.image11.frame = 9;
        _this.image11.visible = false;

        _this.image12 = _this.add.sprite(355, 235, 'SG21_2_5numbers');
        _this.image12.anchor.setTo(0.5);
        _this.image12.scale.setTo(1.5, 1.5);
        _this.image12.frame = 0;
        _this.image12.visible = false;

        _this.image13 = _this.add.sprite(365, 225, 'SG21_2_5degree');
        _this.image13.anchor.setTo(0.5);
        _this.image13.scale.setTo(2, 2);
        _this.image13.visible = false;

        _this.slideGrp.add(_this.image1);
        _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3);
        _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.image6);
        _this.slideGrp.add(_this.image7);
        _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9);
        _this.slideGrp.add(_this.image10);
        _this.slideGrp.add(_this.image11);
        _this.slideGrp.add(_this.image12);
        _this.slideGrp.add(_this.image13);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoNinthQuestion: function () {
        //* To make an acute angle = An angle which is measuring less than 90 degrees is called an acute angle
        console.log("9th qqq")
        _this.questioNo = 9;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(420, 293, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.45, 0.5);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(510, 293, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(1.5, 1.5);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(420, 290, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.5, 0.5);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(370, 290, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(1.5, 1.5);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        //   _this.c.drawCircle(416, 432, 15);
        _this.c.drawCircle(419, 292, 15);

        _this.cX = 419;
        _this.cY = 292;

        _this.cX1 = 419;
        _this.cY1 = 295;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        //angle5
        _this.image6 = _this.add.sprite(450, 265, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 12;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(520, 270, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(1.0, 1.0);
        _this.image7.frame = 5;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(530, 260, 'SG21_2_5degree');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(1, 1);
        _this.image8.visible = false;

        //angle5 another side
        _this.image9 = _this.add.sprite(350, 275, 'SG21_2_5angle2');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(0.5, 0.5);
        _this.image9.frame = 13;
        _this.image9.visible = false;

        _this.image10 = _this.add.sprite(350, 265, 'SG21_2_5numbers');
        _this.image10.anchor.setTo(0.5);
        _this.image10.scale.setTo(1.0, 1.0);
        _this.image10.frame = 5;
        _this.image10.visible = false;

        _this.image11 = _this.add.sprite(360, 255, 'SG21_2_5degree');
        _this.image11.anchor.setTo(0.5);
        _this.image11.scale.setTo(1, 1);
        _this.image11.visible = false;

        //angle10
        _this.image12 = _this.add.sprite(450, 267, 'SG21_2_5angle1');
        _this.image12.anchor.setTo(0.5);
        _this.image12.scale.setTo(0.9, 0.90);
        _this.image12.frame = 13;
        _this.image12.visible = false;

        _this.image13 = _this.add.sprite(510, 257, 'SG21_2_5numbers');
        _this.image13.anchor.setTo(0.5);
        _this.image13.scale.setTo(1.2, 1.2);
        _this.image13.frame = 1;
        _this.image13.visible = false;

        _this.image14 = _this.add.sprite(520, 257, 'SG21_2_5numbers');
        _this.image14.anchor.setTo(0.5);
        _this.image14.scale.setTo(1.2, 1.2);
        _this.image14.frame = 0;
        _this.image14.visible = false;

        _this.image15 = _this.add.sprite(530, 247, 'SG21_2_5degree');
        _this.image15.anchor.setTo(0.5);
        _this.image15.scale.setTo(1.2, 1.2);
        _this.image15.visible = false;

        //angle10 another side
        _this.image16 = _this.add.sprite(370, 265, 'SG21_2_5angle2');
        _this.image16.anchor.setTo(0.5);
        _this.image16.scale.setTo(0.95, 0.95);
        _this.image16.frame = 13;
        _this.image16.visible = false;

        _this.image17 = _this.add.sprite(300, 260, 'SG21_2_5numbers');
        _this.image17.anchor.setTo(0.5);
        _this.image17.scale.setTo(1.2, 1.2);
        _this.image17.frame = 1;
        _this.image17.visible = false;

        _this.image18 = _this.add.sprite(310, 260, 'SG21_2_5numbers');
        _this.image18.anchor.setTo(0.5);
        _this.image18.scale.setTo(1.2, 1.2);
        _this.image18.frame = 0;
        _this.image18.visible = false;

        _this.image19 = _this.add.sprite(320, 250, 'SG21_2_5degree');
        _this.image19.anchor.setTo(0.5);
        _this.image19.scale.setTo(1.2, 1.2);
        _this.image19.visible = false;

        //angle15
        _this.image20 = _this.add.sprite(450, 272, 'SG21_2_5angle1');
        _this.image20.anchor.setTo(0.5);
        _this.image20.scale.setTo(0.7, 0.7);
        _this.image20.frame = 14;
        _this.image20.visible = false;

        _this.image21 = _this.add.sprite(510, 280, 'SG21_2_5numbers');
        _this.image21.anchor.setTo(0.5);
        _this.image21.scale.setTo(1.0, 1.0);
        _this.image21.frame = 1;
        _this.image21.visible = false;

        _this.image22 = _this.add.sprite(520, 280, 'SG21_2_5numbers');
        _this.image22.anchor.setTo(0.5);
        _this.image22.scale.setTo(1.0, 1.0);
        _this.image22.frame = 5;
        _this.image22.visible = false;

        _this.image23 = _this.add.sprite(530, 270, 'SG21_2_5degree');
        _this.image23.anchor.setTo(0.5);
        _this.image23.scale.setTo(1.5, 1.5);
        _this.image23.visible = false;

        //angle15 another side
        _this.image24 = _this.add.sprite(370, 268, 'SG21_2_5angle2');
        _this.image24.anchor.setTo(0.5);
        _this.image24.scale.setTo(0.8, 0.8);
        _this.image24.frame = 14;
        _this.image24.visible = false;

        _this.image25 = _this.add.sprite(300, 280, 'SG21_2_5numbers');
        _this.image25.anchor.setTo(0.5);
        _this.image25.scale.setTo(1.0, 1.0);
        _this.image25.frame = 1;
        _this.image25.visible = false;

        _this.image26 = _this.add.sprite(310, 280, 'SG21_2_5numbers');
        _this.image26.anchor.setTo(0.5);
        _this.image26.scale.setTo(1, 1);
        _this.image26.frame = 5;
        _this.image26.visible = false;

        _this.image27 = _this.add.sprite(320, 270, 'SG21_2_5degree');
        _this.image27.anchor.setTo(0.5);
        _this.image27.scale.setTo(1, 1);
        _this.image27.visible = false;

        //angle20
        _this.image28 = _this.add.sprite(410, 268, 'SG21_2_5angle1');
        _this.image28.anchor.setTo(0.5);
        _this.image28.scale.setTo(0.95, 0.95);
        _this.image28.frame = 13;
        _this.image28.visible = false;

        _this.image29 = _this.add.sprite(510, 280, 'SG21_2_5numbers');
        _this.image29.anchor.setTo(0.5);
        _this.image29.scale.setTo(1.0, 1.0);
        _this.image29.frame = 2;
        _this.image29.visible = false;

        _this.image30 = _this.add.sprite(520, 280, 'SG21_2_5numbers');
        _this.image30.anchor.setTo(0.5);
        _this.image30.scale.setTo(1.0, 1.0);
        _this.image30.frame = 0;
        _this.image30.visible = false;

        _this.image31 = _this.add.sprite(530, 270, 'SG21_2_5degree');
        _this.image31.anchor.setTo(0.5);
        _this.image31.scale.setTo(1, 1);
        _this.image31.visible = false;

        //angle20 another side
        _this.image32 = _this.add.sprite(420, 266, 'SG21_2_5angle2');
        _this.image32.anchor.setTo(0.5);
        _this.image32.scale.setTo(0.95, 0.95);
        _this.image32.frame = 13;
        _this.image32.visible = false;

        _this.image33 = _this.add.sprite(310, 275, 'SG21_2_5numbers');
        _this.image33.anchor.setTo(0.5);
        _this.image33.scale.setTo(1, 1);
        _this.image33.frame = 2;
        _this.image33.visible = false;

        _this.image34 = _this.add.sprite(320, 275, 'SG21_2_5numbers');
        _this.image34.anchor.setTo(0.5);
        _this.image34.scale.setTo(1, 1);
        _this.image34.frame = 0;
        _this.image34.visible = false;

        _this.image35 = _this.add.sprite(330, 268, 'SG21_2_5degree');
        _this.image35.anchor.setTo(0.5);
        _this.image35.scale.setTo(1, 1);
        _this.image35.visible = false;

        //angle25
        _this.image36 = _this.add.sprite(430, 267, 'SG21_2_5angle1');
        _this.image36.anchor.setTo(0.5);
        _this.image36.scale.setTo(0.9, 0.9);
        _this.image36.frame = 14;
        _this.image36.visible = false;

        _this.image37 = _this.add.sprite(505, 275, 'SG21_2_5numbers');
        _this.image37.anchor.setTo(0.5);
        _this.image37.scale.setTo(1.5, 1.5);
        _this.image37.frame = 2;
        _this.image37.visible = false;

        _this.image38 = _this.add.sprite(520, 275, 'SG21_2_5numbers');
        _this.image38.anchor.setTo(0.5);
        _this.image38.scale.setTo(1.5, 1.5);
        _this.image38.frame = 5;
        _this.image38.visible = false;

        _this.image39 = _this.add.sprite(530, 265, 'SG21_2_5degree');
        _this.image39.anchor.setTo(0.5);
        _this.image39.scale.setTo(1.5, 1.5);
        _this.image39.visible = false;

        //angle25 another side
        _this.image40 = _this.add.sprite(400, 265, 'SG21_2_5angle2');
        _this.image40.anchor.setTo(0.5);
        _this.image40.scale.setTo(0.95, 0.95);
        _this.image40.frame = 14;
        _this.image40.visible = false;

        _this.image400 = _this.add.sprite(310, 275, 'SG21_2_5numbers');
        _this.image400.anchor.setTo(0.5);
        _this.image400.scale.setTo(1.5, 1.5);
        _this.image400.frame = 2;
        _this.image400.visible = false;

        _this.image41 = _this.add.sprite(325, 275, 'SG21_2_5numbers');
        _this.image41.anchor.setTo(0.5);
        _this.image41.scale.setTo(1.5, 1.5);
        _this.image41.frame = 5;
        _this.image41.visible = false;

        _this.image42 = _this.add.sprite(335, 265, 'SG21_2_5degree');
        _this.image42.anchor.setTo(0.5);
        _this.image42.scale.setTo(1.5, 1.5);
        _this.image42.visible = false;

        //angle30
        _this.image43 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image43.anchor.setTo(0.5);
        _this.image43.scale.setTo(0.95, 0.95);
        _this.image43.frame = 14;
        _this.image43.visible = false;

        _this.image44 = _this.add.sprite(480, 280, 'SG21_2_5numbers');
        _this.image44.anchor.setTo(0.5);
        _this.image44.scale.setTo(1.5, 1.5);
        _this.image44.frame = 3;
        _this.image44.visible = false;

        _this.image45 = _this.add.sprite(495, 280, 'SG21_2_5numbers');
        _this.image45.anchor.setTo(0.5);
        _this.image45.scale.setTo(1.5, 1.5);
        _this.image45.frame = 0;
        _this.image45.visible = false;

        _this.image46 = _this.add.sprite(505, 270, 'SG21_2_5degree');
        _this.image46.anchor.setTo(0.5);
        _this.image46.scale.setTo(2, 2);
        _this.image46.visible = false;

        //angle30 another side
        _this.image47 = _this.add.sprite(400, 265, 'SG21_2_5angle2');
        _this.image47.anchor.setTo(0.5);
        _this.image47.scale.setTo(0.95, 0.95);
        _this.image47.frame = 15;
        _this.image47.visible = false;

        _this.image48 = _this.add.sprite(310, 265, 'SG21_2_5numbers');
        _this.image48.anchor.setTo(0.5);
        _this.image48.scale.setTo(1.5, 1.5);
        _this.image48.frame = 3;
        _this.image48.visible = false;

        _this.image49 = _this.add.sprite(325, 265, 'SG21_2_5numbers');
        _this.image49.anchor.setTo(0.5);
        _this.image49.scale.setTo(1.5, 1.5);
        _this.image49.frame = 0;
        _this.image49.visible = false;

        _this.image50 = _this.add.sprite(335, 255, 'SG21_2_5degree');
        _this.image50.anchor.setTo(0.5);
        _this.image50.scale.setTo(2, 2);
        _this.image50.visible = false;

        //angle35
        _this.image51 = _this.add.sprite(430, 265, 'SG21_2_5angle1');
        _this.image51.anchor.setTo(0.5);
        _this.image51.scale.setTo(0.95, 0.95);
        _this.image51.frame = 15;
        _this.image51.visible = false;

        _this.image52 = _this.add.sprite(490, 265, 'SG21_2_5numbers');
        _this.image52.anchor.setTo(0.5);
        _this.image52.scale.setTo(1.5, 1.5);
        _this.image52.frame = 3;
        _this.image52.visible = false;

        _this.image53 = _this.add.sprite(505, 265, 'SG21_2_5numbers');
        _this.image53.anchor.setTo(0.5);
        _this.image53.scale.setTo(1.5, 1.5);
        _this.image53.frame = 5;
        _this.image53.visible = false;

        _this.image54 = _this.add.sprite(515, 255, 'SG21_2_5degree');
        _this.image54.anchor.setTo(0.5);
        _this.image54.scale.setTo(1.5, 1.5);
        _this.image54.visible = false;

        //angle35 another side
        _this.image55 = _this.add.sprite(395, 264, 'SG21_2_5angle2');
        _this.image55.anchor.setTo(0.5);
        _this.image55.scale.setTo(0.95, 0.95);
        _this.image55.frame = 16;
        _this.image55.visible = false;

        _this.image56 = _this.add.sprite(310, 264, 'SG21_2_5numbers');
        _this.image56.anchor.setTo(0.5);
        _this.image56.scale.setTo(1.5, 1.5);
        _this.image56.frame = 3;
        _this.image56.visible = false;

        _this.image57 = _this.add.sprite(325, 264, 'SG21_2_5numbers');
        _this.image57.anchor.setTo(0.5);
        _this.image57.scale.setTo(1.5, 1.5);
        _this.image57.frame = 5;
        _this.image57.visible = false;

        _this.image58 = _this.add.sprite(335, 254, 'SG21_2_5degree');
        _this.image58.anchor.setTo(0.5);
        _this.image58.scale.setTo(2, 2);
        _this.image58.visible = false;

        //angle40
        _this.image59 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image59.anchor.setTo(0.5);
        _this.image59.scale.setTo(0.95, 0.95);
        _this.image59.frame = 15;
        _this.image59.visible = false;

        _this.image60 = _this.add.sprite(485, 265, 'SG21_2_5numbers');
        _this.image60.anchor.setTo(0.5);
        _this.image60.scale.setTo(1.5, 1.5);
        _this.image60.frame = 4;
        _this.image60.visible = false;

        _this.image61 = _this.add.sprite(500, 265, 'SG21_2_5numbers');
        _this.image61.anchor.setTo(0.5);
        _this.image61.scale.setTo(1.5, 1.5);
        _this.image61.frame = 0;
        _this.image61.visible = false;

        _this.image62 = _this.add.sprite(510, 255, 'SG21_2_5degree');
        _this.image62.anchor.setTo(0.5);
        _this.image62.scale.setTo(1.5, 1.5);
        _this.image62.visible = false;

        //angle40 another side
        _this.image63 = _this.add.sprite(405, 265, 'SG21_2_5angle2');
        _this.image63.anchor.setTo(0.5);
        _this.image63.scale.setTo(0.95, 0.95);
        _this.image63.frame = 16;
        _this.image63.visible = false;

        _this.image64 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image64.anchor.setTo(0.5);
        _this.image64.scale.setTo(1.5, 1.5);
        _this.image64.frame = 4;
        _this.image64.visible = false;

        _this.image65 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image65.anchor.setTo(0.5);
        _this.image65.scale.setTo(1.5, 1.5);
        _this.image65.frame = 0;
        _this.image65.visible = false;

        _this.image66 = _this.add.sprite(325, 255, 'SG21_2_5degree');
        _this.image66.anchor.setTo(0.5);
        _this.image66.scale.setTo(1.5, 1.5);
        _this.image66.visible = false;

        //angle45
        _this.image67 = _this.add.sprite(430, 265, 'SG21_2_5angle1');
        _this.image67.anchor.setTo(0.5);
        _this.image67.scale.setTo(0.95, 0.95);
        _this.image67.frame = 16;
        _this.image67.visible = false;

        _this.image68 = _this.add.sprite(490, 265, 'SG21_2_5numbers');
        _this.image68.anchor.setTo(0.5);
        _this.image68.scale.setTo(1.5, 1.5);
        _this.image68.frame = 4;
        _this.image68.visible = false;

        _this.image69 = _this.add.sprite(505, 265, 'SG21_2_5numbers');
        _this.image69.anchor.setTo(0.5);
        _this.image69.scale.setTo(1.5, 1.5);
        _this.image69.frame = 5;
        _this.image69.visible = false;

        _this.image70 = _this.add.sprite(515, 255, 'SG21_2_5degree');
        _this.image70.anchor.setTo(0.5);
        _this.image70.scale.setTo(2, 2);
        _this.image70.visible = false;

        //angle45 another side
        _this.image71 = _this.add.sprite(400, 265, 'SG21_2_5angle2');
        _this.image71.anchor.setTo(0.5);
        _this.image71.scale.setTo(0.95, 0.95);
        _this.image71.frame = 17;
        _this.image71.visible = false;

        _this.image72 = _this.add.sprite(305, 265, 'SG21_2_5numbers');
        _this.image72.anchor.setTo(0.5);
        _this.image72.scale.setTo(1.5, 1.5);
        _this.image72.frame = 4;
        _this.image72.visible = false;

        _this.image73 = _this.add.sprite(320, 265, 'SG21_2_5numbers');
        _this.image73.anchor.setTo(0.5);
        _this.image73.scale.setTo(1.5, 1.5);
        _this.image73.frame = 5;
        _this.image73.visible = false;

        _this.image74 = _this.add.sprite(330, 255, 'SG21_2_5degree');
        _this.image74.anchor.setTo(0.5);
        _this.image74.scale.setTo(1.5, 1.5);
        _this.image74.visible = false;

        //angle50
        _this.image75 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image75.anchor.setTo(0.5);
        _this.image75.scale.setTo(0.95, 0.95);
        _this.image75.frame = 16;
        _this.image75.visible = false;

        _this.image76 = _this.add.sprite(485, 265, 'SG21_2_5numbers');
        _this.image76.anchor.setTo(0.5);
        _this.image76.scale.setTo(1.5, 1.5);
        _this.image76.frame = 5;
        _this.image76.visible = false;

        _this.image77 = _this.add.sprite(500, 265, 'SG21_2_5numbers');
        _this.image77.anchor.setTo(0.5);
        _this.image77.scale.setTo(1.5, 1.5);
        _this.image77.frame = 0;
        _this.image77.visible = false;

        _this.image78 = _this.add.sprite(510, 255, 'SG21_2_5degree');
        _this.image78.anchor.setTo(0.5);
        _this.image78.scale.setTo(1.5, 1.5);
        _this.image78.visible = false;

        //angle50 another side
        _this.image79 = _this.add.sprite(400, 265, 'SG21_2_5angle2');
        _this.image79.anchor.setTo(0.5);
        _this.image79.scale.setTo(0.95, 0.95);
        _this.image79.frame = 18;
        _this.image79.visible = false;

        _this.image80 = _this.add.sprite(310, 265, 'SG21_2_5numbers');
        _this.image80.anchor.setTo(0.5);
        _this.image80.scale.setTo(1.5, 1.5);
        _this.image80.frame = 5;
        _this.image80.visible = false;

        _this.image81 = _this.add.sprite(325, 265, 'SG21_2_5numbers');
        _this.image81.anchor.setTo(0.5);
        _this.image81.scale.setTo(1.5, 1.5);
        _this.image81.frame = 0;
        _this.image81.visible = false;

        _this.image82 = _this.add.sprite(335, 255, 'SG21_2_5degree');
        _this.image82.anchor.setTo(0.5);
        _this.image82.scale.setTo(1.5, 1.5);
        _this.image82.visible = false;

        //angle55
        _this.image83 = _this.add.sprite(429, 265, 'SG21_2_5angle1');
        _this.image83.anchor.setTo(0.5);
        _this.image83.scale.setTo(0.95, 0.95);
        _this.image83.frame = 17;
        _this.image83.visible = false;

        _this.image84 = _this.add.sprite(490, 265, 'SG21_2_5numbers');
        _this.image84.anchor.setTo(0.5);
        _this.image84.scale.setTo(1.5, 1.5);
        _this.image84.frame = 5;
        _this.image84.visible = false;

        _this.image85 = _this.add.sprite(505, 265, 'SG21_2_5numbers');
        _this.image85.anchor.setTo(0.5);
        _this.image85.scale.setTo(1.5, 1.5);
        _this.image85.frame = 5;
        _this.image85.visible = false;

        _this.image86 = _this.add.sprite(515, 255, 'SG21_2_5degree');
        _this.image86.anchor.setTo(0.5);
        _this.image86.scale.setTo(2, 2);
        _this.image86.visible = false;

        //angle55 another side
        _this.image87 = _this.add.sprite(400, 265, 'SG21_2_5angle2');
        _this.image87.anchor.setTo(0.5);
        _this.image87.scale.setTo(0.95, 0.95);
        _this.image87.frame = 18;
        _this.image87.visible = false;

        _this.image88 = _this.add.sprite(305, 265, 'SG21_2_5numbers');
        _this.image88.anchor.setTo(0.5);
        _this.image88.scale.setTo(1.5, 1.5);
        _this.image88.frame = 5;
        _this.image88.visible = false;

        _this.image89 = _this.add.sprite(320, 265, 'SG21_2_5numbers');
        _this.image89.anchor.setTo(0.5);
        _this.image89.scale.setTo(1.5, 1.5);
        _this.image89.frame = 5;
        _this.image89.visible = false;

        _this.image90 = _this.add.sprite(330, 255, 'SG21_2_5degree');
        _this.image90.anchor.setTo(0.5);
        _this.image90.scale.setTo(2, 2);
        _this.image90.visible = false;

        //angle60
        _this.image91 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image91.anchor.setTo(0.5);
        _this.image91.scale.setTo(0.95, 0.95);
        _this.image91.frame = 17;
        _this.image91.visible = false;

        _this.image92 = _this.add.sprite(485, 265, 'SG21_2_5numbers');
        _this.image92.anchor.setTo(0.5);
        _this.image92.scale.setTo(1.5, 1.5);
        _this.image92.frame = 6;
        _this.image92.visible = false;

        _this.image93 = _this.add.sprite(500, 265, 'SG21_2_5numbers');
        _this.image93.anchor.setTo(0.5);
        _this.image93.scale.setTo(1.5, 1.5);
        _this.image93.frame = 0;
        _this.image93.visible = false;

        _this.image94 = _this.add.sprite(510, 255, 'SG21_2_5degree');
        _this.image94.anchor.setTo(0.5);
        _this.image94.scale.setTo(2, 2);
        _this.image94.visible = false;

        //angle60 another side
        _this.image95 = _this.add.sprite(400, 265, 'SG21_2_5angle2');
        _this.image95.anchor.setTo(0.5);
        _this.image95.scale.setTo(0.95, 0.95);
        _this.image95.frame = 19;
        _this.image95.visible = false;

        _this.image96 = _this.add.sprite(310, 265, 'SG21_2_5numbers');
        _this.image96.anchor.setTo(0.5);
        _this.image96.scale.setTo(1.5, 1.5);
        _this.image96.frame = 6;
        _this.image96.visible = false;

        _this.image97 = _this.add.sprite(325, 265, 'SG21_2_5numbers');
        _this.image97.anchor.setTo(0.5);
        _this.image97.scale.setTo(1.5, 1.5);
        _this.image97.frame = 0;
        _this.image97.visible = false;

        _this.image98 = _this.add.sprite(335, 255, 'SG21_2_5degree');
        _this.image98.anchor.setTo(0.5);
        _this.image98.scale.setTo(2, 2);
        _this.image98.visible = false;

        //angle65
        _this.image99 = _this.add.sprite(425, 265, 'SG21_2_5angle1');
        _this.image99.anchor.setTo(0.5);
        _this.image99.scale.setTo(0.95, 0.95);
        _this.image99.frame = 18;
        _this.image99.visible = false;

        _this.image100 = _this.add.sprite(490, 265, 'SG21_2_5numbers');
        _this.image100.anchor.setTo(0.5);
        _this.image100.scale.setTo(1.5, 1.5);
        _this.image100.frame = 6;
        _this.image100.visible = false;

        _this.image101 = _this.add.sprite(510, 265, 'SG21_2_5numbers');
        _this.image101.anchor.setTo(0.5);
        _this.image101.scale.setTo(1.5, 1.5);
        _this.image101.frame = 5;
        _this.image101.visible = false;

        _this.image102 = _this.add.sprite(525, 255, 'SG21_2_5degree');
        _this.image102.anchor.setTo(0.5);
        _this.image102.scale.setTo(1.5, 1.5);
        _this.image102.visible = false;

        //angle65 another side
        _this.image103 = _this.add.sprite(398, 265, 'SG21_2_5angle2');
        _this.image103.anchor.setTo(0.5);
        _this.image103.scale.setTo(0.95, 0.95);
        _this.image103.frame = 20;
        _this.image103.visible = false;

        _this.image104 = _this.add.sprite(310, 265, 'SG21_2_5numbers');
        _this.image104.anchor.setTo(0.5);
        _this.image104.scale.setTo(1.5, 1.5);
        _this.image104.frame = 6;
        _this.image104.visible = false;

        _this.image105 = _this.add.sprite(325, 265, 'SG21_2_5numbers');
        _this.image105.anchor.setTo(0.5);
        _this.image105.scale.setTo(1.5, 1.5);
        _this.image105.frame = 5;
        _this.image105.visible = false;

        _this.image106 = _this.add.sprite(335, 255, 'SG21_2_5degree');
        _this.image106.anchor.setTo(0.5);
        _this.image106.scale.setTo(2, 2);
        _this.image106.visible = false;
        //angle70
        _this.image107 = _this.add.sprite(430, 265, 'SG21_2_5angle1');
        _this.image107.anchor.setTo(0.5);
        _this.image107.scale.setTo(0.95, 0.95);
        _this.image107.frame = 19;
        _this.image107.visible = false;

        _this.image108 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image108.anchor.setTo(0.5);
        _this.image108.scale.setTo(1.5, 1.5);
        _this.image108.frame = 7;
        _this.image108.visible = false;

        _this.image109 = _this.add.sprite(510, 265, 'SG21_2_5numbers');
        _this.image109.anchor.setTo(0.5);
        _this.image109.scale.setTo(1.5, 1.5);
        _this.image109.frame = 0;
        _this.image109.visible = false;

        _this.image110 = _this.add.sprite(520, 255, 'SG21_2_5degree');
        _this.image110.anchor.setTo(0.5);
        _this.image110.scale.setTo(2, 2);
        _this.image110.visible = false;

        //angle70 another side
        _this.image111 = _this.add.sprite(400, 265, 'SG21_2_5angle2');
        _this.image111.anchor.setTo(0.5);
        _this.image111.scale.setTo(0.95, 0.95);
        _this.image111.frame = 20;
        _this.image111.visible = false;

        _this.image112 = _this.add.sprite(310, 265, 'SG21_2_5numbers');
        _this.image112.anchor.setTo(0.5);
        _this.image112.scale.setTo(1.5, 1.5);
        _this.image112.frame = 7;
        _this.image112.visible = false;

        _this.image113 = _this.add.sprite(325, 265, 'SG21_2_5numbers');
        _this.image113.anchor.setTo(0.5);
        _this.image113.scale.setTo(1.5, 1.5);
        _this.image113.frame = 0;
        _this.image113.visible = false;

        _this.image114 = _this.add.sprite(335, 255, 'SG21_2_5degree');
        _this.image114.anchor.setTo(0.5);
        _this.image114.scale.setTo(2, 2);
        _this.image114.visible = false;

        //angle75
        _this.image115 = _this.add.sprite(425, 265, 'SG21_2_5angle1');
        _this.image115.anchor.setTo(0.5);
        _this.image115.scale.setTo(0.95, 0.95);
        _this.image115.frame = 19;
        _this.image115.visible = false;

        _this.image116 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image116.anchor.setTo(0.5);
        _this.image116.scale.setTo(1.5, 1.5);
        _this.image116.frame = 7;
        _this.image116.visible = false;

        _this.image117 = _this.add.sprite(510, 265, 'SG21_2_5numbers');
        _this.image117.anchor.setTo(0.5);
        _this.image117.scale.setTo(1.5, 1.5);
        _this.image117.frame = 5;
        _this.image117.visible = false;

        _this.image118 = _this.add.sprite(525, 255, 'SG21_2_5degree');
        _this.image118.anchor.setTo(0.5);
        _this.image118.scale.setTo(2, 2);
        _this.image118.visible = false;

        //angle75 another side
        _this.image119 = _this.add.sprite(395, 265, 'SG21_2_5angle2');
        _this.image119.anchor.setTo(0.5);
        _this.image119.scale.setTo(0.95, 0.95);
        _this.image119.frame = 22;
        _this.image119.visible = false;

        _this.image120 = _this.add.sprite(298, 265, 'SG21_2_5numbers');
        _this.image120.anchor.setTo(0.5);
        _this.image120.scale.setTo(2, 2);
        _this.image120.frame = 7;
        _this.image120.visible = false;

        _this.image121 = _this.add.sprite(320, 265, 'SG21_2_5numbers');
        _this.image121.anchor.setTo(0.5);
        _this.image121.scale.setTo(2, 2);
        _this.image121.frame = 5;
        _this.image121.visible = false;

        _this.image122 = _this.add.sprite(340, 255, 'SG21_2_5degree');
        _this.image122.anchor.setTo(0.5);
        _this.image122.scale.setTo(2, 2);
        _this.image122.visible = false;

        //angle80
        _this.image123 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image123.anchor.setTo(0.5);
        _this.image123.scale.setTo(0.95, 0.95);
        _this.image123.frame = 20;
        _this.image123.visible = false;

        _this.image124 = _this.add.sprite(485, 265, 'SG21_2_5numbers');
        _this.image124.anchor.setTo(0.5);
        _this.image124.scale.setTo(2, 2);
        _this.image124.frame = 8;
        _this.image124.visible = false;

        _this.image125 = _this.add.sprite(505, 265, 'SG21_2_5numbers');
        _this.image125.anchor.setTo(0.5);
        _this.image125.scale.setTo(2, 2);
        _this.image125.frame = 0;
        _this.image125.visible = false;

        _this.image126 = _this.add.sprite(520, 255, 'SG21_2_5degree');
        _this.image126.anchor.setTo(0.5);
        _this.image126.scale.setTo(2, 2);
        _this.image126.visible = false;

        //angle80 another side
        _this.image127 = _this.add.sprite(400, 265, 'SG21_2_5angle2');
        _this.image127.anchor.setTo(0.5);
        _this.image127.scale.setTo(0.95, 0.95);
        _this.image127.frame = 22;
        _this.image127.visible = false;

        _this.image128 = _this.add.sprite(290, 265, 'SG21_2_5numbers');
        _this.image128.anchor.setTo(0.5);
        _this.image128.scale.setTo(2, 2);
        _this.image128.frame = 8;
        _this.image128.visible = false;

        _this.image129 = _this.add.sprite(310, 265, 'SG21_2_5numbers');
        _this.image129.anchor.setTo(0.5);
        _this.image129.scale.setTo(2, 2);
        _this.image129.frame = 0;
        _this.image129.visible = false;

        _this.image130 = _this.add.sprite(320, 255, 'SG21_2_5degree');
        _this.image130.anchor.setTo(0.5);
        _this.image130.scale.setTo(2, 2);
        _this.image130.visible = false;

        //angle85
        _this.image131 = _this.add.sprite(425, 265, 'SG21_2_5angle1');
        _this.image131.anchor.setTo(0.5);
        _this.image131.scale.setTo(0.95, 0.95);
        _this.image131.frame = 20;
        _this.image131.visible = false;

        _this.image132 = _this.add.sprite(490, 265, 'SG21_2_5numbers');
        _this.image132.anchor.setTo(0.5);
        _this.image132.scale.setTo(2, 2);
        _this.image132.frame = 8;
        _this.image132.visible = false;

        _this.image133 = _this.add.sprite(510, 265, 'SG21_2_5numbers');
        _this.image133.anchor.setTo(0.5);
        _this.image133.scale.setTo(2, 2);
        _this.image133.frame = 5;
        _this.image133.visible = false;

        _this.image134 = _this.add.sprite(525, 265, 'SG21_2_5degree');
        _this.image134.anchor.setTo(0.5);
        _this.image134.scale.setTo(2, 2);
        _this.image134.visible = false;

        //angle85 another side
        _this.image135 = _this.add.sprite(400, 265, 'SG21_2_5angle2');
        _this.image135.anchor.setTo(0.5);
        _this.image135.scale.setTo(0.95, 0.95);
        _this.image135.frame = 23;
        _this.image135.visible = false;

        _this.image136 = _this.add.sprite(298, 265, 'SG21_2_5numbers');
        _this.image136.anchor.setTo(0.5);
        _this.image136.scale.setTo(2, 2);
        _this.image136.frame = 8;
        _this.image136.visible = false;

        _this.image137 = _this.add.sprite(320, 265, 'SG21_2_5numbers');
        _this.image137.anchor.setTo(0.5);
        _this.image137.scale.setTo(2, 2);
        _this.image137.frame = 5;
        _this.image137.visible = false;

        _this.image138 = _this.add.sprite(340, 265, 'SG21_2_5degree');
        _this.image138.anchor.setTo(0.5);
        _this.image138.scale.setTo(2, 2);
        _this.image138.visible = false;

        _this.slideGrp.add(_this.image1); _this.slideGrp.add(_this.image2); _this.slideGrp.add(_this.image3); _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5); _this.slideGrp.add(_this.image6); _this.slideGrp.add(_this.image7); _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9); _this.slideGrp.add(_this.image10); _this.slideGrp.add(_this.image11); _this.slideGrp.add(_this.image12);
        _this.slideGrp.add(_this.image13); _this.slideGrp.add(_this.image14); _this.slideGrp.add(_this.image15); _this.slideGrp.add(_this.image16);
        _this.slideGrp.add(_this.image17); _this.slideGrp.add(_this.image18); _this.slideGrp.add(_this.image19); _this.slideGrp.add(_this.image20);
        _this.slideGrp.add(_this.image21); _this.slideGrp.add(_this.image22); _this.slideGrp.add(_this.image23); _this.slideGrp.add(_this.image24);
        _this.slideGrp.add(_this.image25); _this.slideGrp.add(_this.image26); _this.slideGrp.add(_this.image27); _this.slideGrp.add(_this.image28);
        _this.slideGrp.add(_this.image29); _this.slideGrp.add(_this.image30); _this.slideGrp.add(_this.image31); _this.slideGrp.add(_this.image32);
        _this.slideGrp.add(_this.image33); _this.slideGrp.add(_this.image34); _this.slideGrp.add(_this.image35); _this.slideGrp.add(_this.image36);
        _this.slideGrp.add(_this.image37); _this.slideGrp.add(_this.image38); _this.slideGrp.add(_this.image39); _this.slideGrp.add(_this.image40);
        _this.slideGrp.add(_this.image41); _this.slideGrp.add(_this.image42); _this.slideGrp.add(_this.image43); _this.slideGrp.add(_this.image44);
        _this.slideGrp.add(_this.image45); _this.slideGrp.add(_this.image46); _this.slideGrp.add(_this.image47); _this.slideGrp.add(_this.image48);
        _this.slideGrp.add(_this.image49); _this.slideGrp.add(_this.image50); _this.slideGrp.add(_this.image51); _this.slideGrp.add(_this.image52);
        _this.slideGrp.add(_this.image53); _this.slideGrp.add(_this.image54); _this.slideGrp.add(_this.image55); _this.slideGrp.add(_this.image56);
        _this.slideGrp.add(_this.image57); _this.slideGrp.add(_this.image58); _this.slideGrp.add(_this.image59); _this.slideGrp.add(_this.image60);
        _this.slideGrp.add(_this.image61); _this.slideGrp.add(_this.image62); _this.slideGrp.add(_this.image63); _this.slideGrp.add(_this.image64);
        _this.slideGrp.add(_this.image65); _this.slideGrp.add(_this.image66); _this.slideGrp.add(_this.image67); _this.slideGrp.add(_this.image68);
        _this.slideGrp.add(_this.image69); _this.slideGrp.add(_this.image70); _this.slideGrp.add(_this.image71); _this.slideGrp.add(_this.image72);
        _this.slideGrp.add(_this.image73); _this.slideGrp.add(_this.image74); _this.slideGrp.add(_this.image75); _this.slideGrp.add(_this.image76);
        _this.slideGrp.add(_this.image77); _this.slideGrp.add(_this.image78); _this.slideGrp.add(_this.image79); _this.slideGrp.add(_this.image80);
        _this.slideGrp.add(_this.image81); _this.slideGrp.add(_this.image82); _this.slideGrp.add(_this.image83); _this.slideGrp.add(_this.image84);
        _this.slideGrp.add(_this.image85); _this.slideGrp.add(_this.image86); _this.slideGrp.add(_this.image87); _this.slideGrp.add(_this.image88);
        _this.slideGrp.add(_this.image89); _this.slideGrp.add(_this.image90); _this.slideGrp.add(_this.image91); _this.slideGrp.add(_this.image92);
        _this.slideGrp.add(_this.image93); _this.slideGrp.add(_this.image94); _this.slideGrp.add(_this.image95); _this.slideGrp.add(_this.image96);
        _this.slideGrp.add(_this.image97); _this.slideGrp.add(_this.image98); _this.slideGrp.add(_this.image99); _this.slideGrp.add(_this.image100);
        _this.slideGrp.add(_this.image101); _this.slideGrp.add(_this.image102); _this.slideGrp.add(_this.image103); _this.slideGrp.add(_this.image104);
        _this.slideGrp.add(_this.image105); _this.slideGrp.add(_this.image106); _this.slideGrp.add(_this.image107); _this.slideGrp.add(_this.image108);
        _this.slideGrp.add(_this.image109); _this.slideGrp.add(_this.image110); _this.slideGrp.add(_this.image111); _this.slideGrp.add(_this.image112);
        _this.slideGrp.add(_this.image113); _this.slideGrp.add(_this.image114); _this.slideGrp.add(_this.image115); _this.slideGrp.add(_this.image116);
        _this.slideGrp.add(_this.image117); _this.slideGrp.add(_this.image118); _this.slideGrp.add(_this.image119); _this.slideGrp.add(_this.image120);
        _this.slideGrp.add(_this.image121); _this.slideGrp.add(_this.image122); _this.slideGrp.add(_this.image123); _this.slideGrp.add(_this.image124);
        _this.slideGrp.add(_this.image125); _this.slideGrp.add(_this.image126); _this.slideGrp.add(_this.image127); _this.slideGrp.add(_this.image128);
        _this.slideGrp.add(_this.image129); _this.slideGrp.add(_this.image130); _this.slideGrp.add(_this.image131); _this.slideGrp.add(_this.image132);
        _this.slideGrp.add(_this.image133); _this.slideGrp.add(_this.image134); _this.slideGrp.add(_this.image135); _this.slideGrp.add(_this.image400); _this.slideGrp.add(_this.image136); _this.slideGrp.add(_this.image137); _this.slideGrp.add(_this.image138);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoTenthQuestion: function () {
        //*To make an Obtuse angle (greater than 90° and less than 180°)
        console.log("10 question")
        _this.questioNo = 10;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }
        _this.image2 = _this.add.sprite(419, 293, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.5, 0.4);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(530, 292, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(2.0, 2);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(419, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.5, 0.4);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(356, 292, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(2, 2);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        //   _this.c.drawCircle(416, 432, 15);

        _this.c.drawCircle(419, 292, 15);
        _this.cX = 419;
        _this.cY = 292;

        _this.cX1 = 419;
        _this.cY1 = 295;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        //angle95
        _this.image6 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 22;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(490, 265, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(2, 2);
        _this.image7.frame = 9;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(510, 265, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(2, 2);
        _this.image8.frame = 5;
        _this.image8.visible = false;

        _this.image9 = _this.add.sprite(525, 255, 'SG21_2_5degree');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(2, 2);
        _this.image9.visible = false;

        //angle95 another side
        _this.image10 = _this.add.sprite(405, 265, 'SG21_2_5angle2');
        _this.image10.anchor.setTo(0.5);
        _this.image10.scale.setTo(0.95, 0.95);
        _this.image10.frame = 23;
        _this.image10.visible = false;

        _this.image11 = _this.add.sprite(298, 265, 'SG21_2_5numbers');
        _this.image11.anchor.setTo(0.5);
        _this.image11.scale.setTo(2, 2);
        _this.image11.frame = 9;
        _this.image11.visible = false;

        _this.image12 = _this.add.sprite(320, 265, 'SG21_2_5numbers');
        _this.image12.anchor.setTo(0.5);
        _this.image12.scale.setTo(2, 2);
        _this.image12.frame = 5;
        _this.image12.visible = false;

        _this.image13 = _this.add.sprite(340, 255, 'SG21_2_5degree');
        _this.image13.anchor.setTo(0.5);
        _this.image13.scale.setTo(2, 2);
        _this.image13.visible = false;

        //angle100
        _this.image14 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image14.anchor.setTo(0.5);
        _this.image14.scale.setTo(0.95, 0.95);
        _this.image14.frame = 22;
        _this.image14.visible = false;

        _this.image15 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image15.anchor.setTo(0.5);
        _this.image15.scale.setTo(2, 2);
        _this.image15.frame = 1;
        _this.image15.visible = false;

        _this.image16 = _this.add.sprite(500, 265, 'SG21_2_5numbers');
        _this.image16.anchor.setTo(0.5);
        _this.image16.scale.setTo(2, 2);
        _this.image16.frame = 0;
        _this.image16.visible = false;

        _this.image17 = _this.add.sprite(525, 265, 'SG21_2_5numbers');
        _this.image17.anchor.setTo(0.5);
        _this.image17.scale.setTo(2, 2);
        _this.image17.frame = 0;
        _this.image17.visible = false;

        _this.image18 = _this.add.sprite(540, 255, 'SG21_2_5degree');
        _this.image18.anchor.setTo(0.5);
        _this.image18.scale.setTo(2, 2);
        _this.image18.visible = false;

        //angle100 another side
        _this.image19 = _this.add.sprite(405, 265, 'SG21_2_5angle2');
        _this.image19.anchor.setTo(0.5);
        _this.image19.scale.setTo(0.95, 0.95);
        _this.image19.frame = 23;
        _this.image19.visible = false;

        _this.image20 = _this.add.sprite(290, 265, 'SG21_2_5numbers');
        _this.image20.anchor.setTo(0.5);
        _this.image20.scale.setTo(2, 2);
        _this.image20.frame = 1;
        _this.image20.visible = false;

        _this.image21 = _this.add.sprite(310, 265, 'SG21_2_5numbers');
        _this.image21.anchor.setTo(0.5);
        _this.image21.scale.setTo(2, 2);
        _this.image21.frame = 0;
        _this.image21.visible = false;

        _this.image22 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image22.anchor.setTo(0.5);
        _this.image22.scale.setTo(2, 2);
        _this.image22.frame = 0;
        _this.image22.visible = false;

        _this.image23 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image23.anchor.setTo(0.5);
        _this.image23.scale.setTo(2, 2);
        _this.image23.visible = false;

        //angle105
        _this.image24 = _this.add.sprite(425, 265, 'SG21_2_5angle1');
        _this.image24.anchor.setTo(0.5);
        _this.image24.scale.setTo(0.95, 0.95);
        _this.image24.frame = 23;
        _this.image24.visible = false;

        _this.image25 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image25.anchor.setTo(0.5);
        _this.image25.scale.setTo(2, 2);
        _this.image25.frame = 1;
        _this.image25.visible = false;

        _this.image26 = _this.add.sprite(500, 265, 'SG21_2_5numbers');
        _this.image26.anchor.setTo(0.5);
        _this.image26.scale.setTo(2, 2);
        _this.image26.frame = 0;
        _this.image26.visible = false;

        _this.image27 = _this.add.sprite(525, 265, 'SG21_2_5numbers');
        _this.image27.anchor.setTo(0.5);
        _this.image27.scale.setTo(2, 2);
        _this.image27.frame = 5;
        _this.image27.visible = false;

        _this.image28 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image28.anchor.setTo(0.5);
        _this.image28.scale.setTo(2, 2);
        _this.image28.visible = false;

        //angle105 another side
        _this.image29 = _this.add.sprite(400, 265, 'SG21_2_5angle2');
        _this.image29.anchor.setTo(0.5);
        _this.image29.scale.setTo(0.95, 0.95);
        _this.image29.frame = 24;
        _this.image29.visible = false;

        _this.image30 = _this.add.sprite(290, 265, 'SG21_2_5numbers');
        _this.image30.anchor.setTo(0.5);
        _this.image30.scale.setTo(2, 2);
        _this.image30.frame = 1;
        _this.image30.visible = false;

        _this.image31 = _this.add.sprite(310, 265, 'SG21_2_5numbers');
        _this.image31.anchor.setTo(0.5);
        _this.image31.scale.setTo(2, 2);
        _this.image31.frame = 0;
        _this.image31.visible = false;

        _this.image32 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image32.anchor.setTo(0.5);
        _this.image32.scale.setTo(2, 2);
        _this.image32.frame = 5;
        _this.image32.visible = false;

        _this.image33 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image33.anchor.setTo(0.5);
        _this.image33.scale.setTo(2, 2);
        _this.image33.visible = false;

        //angle110
        _this.image34 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image34.anchor.setTo(0.5);
        _this.image34.scale.setTo(0.95, 0.95);
        _this.image34.frame = 23;
        _this.image34.visible = false;

        _this.image35 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image35.anchor.setTo(0.5);
        _this.image35.scale.setTo(2, 2);
        _this.image35.frame = 1;
        _this.image35.visible = false;

        _this.image36 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image36.anchor.setTo(0.5);
        _this.image36.scale.setTo(2, 2);
        _this.image36.frame = 1;
        _this.image36.visible = false;

        _this.image37 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image37.anchor.setTo(0.5);
        _this.image37.scale.setTo(2, 2);
        _this.image37.frame = 0;
        _this.image37.visible = false;

        _this.image38 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image38.anchor.setTo(0.5);
        _this.image38.scale.setTo(2, 2);
        _this.image38.visible = false;

        //angle110 another side
        _this.image39 = _this.add.sprite(405, 265, 'SG21_2_5angle2');
        _this.image39.anchor.setTo(0.5);
        _this.image39.scale.setTo(0.95, 0.95);
        _this.image39.frame = 24;
        _this.image39.visible = false;

        _this.image40 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image40.anchor.setTo(0.5);
        _this.image40.scale.setTo(2, 2);
        _this.image40.frame = 1;
        _this.image40.visible = false;

        _this.image41 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image41.anchor.setTo(0.5);
        _this.image41.scale.setTo(2, 2);
        _this.image41.frame = 1;
        _this.image41.visible = false;

        _this.image42 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image42.anchor.setTo(0.5);
        _this.image42.scale.setTo(2, 2);
        _this.image42.frame = 0;
        _this.image42.visible = false;

        _this.image43 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image43.anchor.setTo(0.5);
        _this.image43.scale.setTo(2, 2);
        _this.image43.visible = false;

        //angle115
        _this.image44 = _this.add.sprite(425, 265, 'SG21_2_5angle1');
        _this.image44.anchor.setTo(0.5);
        _this.image44.scale.setTo(0.95, 0.95);
        _this.image44.frame = 24;
        _this.image44.visible = false;

        _this.image45 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image45.anchor.setTo(0.5);
        _this.image45.scale.setTo(2, 2);
        _this.image45.frame = 1;
        _this.image45.visible = false;

        _this.image46 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image46.anchor.setTo(0.5);
        _this.image46.scale.setTo(2, 2);
        _this.image46.frame = 1;
        _this.image46.visible = false;

        _this.image47 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image47.anchor.setTo(0.5);
        _this.image47.scale.setTo(2, 2);
        _this.image47.frame = 5;
        _this.image47.visible = false;

        _this.image48 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image48.anchor.setTo(0.5);
        _this.image48.scale.setTo(2, 2);
        _this.image48.visible = false;

        //angle115 another side
        _this.image49 = _this.add.sprite(400, 265, 'SG21_2_5angle2');
        _this.image49.anchor.setTo(0.5);
        _this.image49.scale.setTo(0.95, 0.95);
        _this.image49.frame = 25;
        _this.image49.visible = false;

        _this.image50 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image50.anchor.setTo(0.5);
        _this.image50.scale.setTo(2, 2);
        _this.image50.frame = 1;
        _this.image50.visible = false;

        _this.image51 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image51.anchor.setTo(0.5);
        _this.image51.scale.setTo(2, 2);
        _this.image51.frame = 1;
        _this.image51.visible = false;

        _this.image52 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image52.anchor.setTo(0.5);
        _this.image52.scale.setTo(2, 2);
        _this.image52.frame = 5;
        _this.image52.visible = false;

        _this.image53 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image53.anchor.setTo(0.5);
        _this.image53.scale.setTo(2, 2);
        _this.image53.visible = false;

        //angle120
        _this.image54 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image54.anchor.setTo(0.5);
        _this.image54.scale.setTo(0.95, 0.95);
        _this.image54.frame = 24;
        _this.image54.visible = false;

        _this.image55 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image55.anchor.setTo(0.5);
        _this.image55.scale.setTo(2, 2);
        _this.image55.frame = 1;
        _this.image55.visible = false;

        _this.image56 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image56.anchor.setTo(0.5);
        _this.image56.scale.setTo(2, 2);
        _this.image56.frame = 2;
        _this.image56.visible = false;

        _this.image57 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image57.anchor.setTo(0.5);
        _this.image57.scale.setTo(2, 2);
        _this.image57.frame = 0;
        _this.image57.visible = false;

        _this.image58 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image58.anchor.setTo(0.5);
        _this.image58.scale.setTo(2, 2);
        _this.image58.visible = false;

        //angle120 another side
        _this.image59 = _this.add.sprite(405, 265, 'SG21_2_5angle2');
        _this.image59.anchor.setTo(0.5);
        _this.image59.scale.setTo(0.95, 0.95);
        _this.image59.frame = 25;
        _this.image59.visible = false;

        _this.image60 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image60.anchor.setTo(0.5);
        _this.image60.scale.setTo(2, 2);
        _this.image60.frame = 1;
        _this.image60.visible = false;

        _this.image61 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image61.anchor.setTo(0.5);
        _this.image61.scale.setTo(2, 2);
        _this.image61.frame = 2;
        _this.image61.visible = false;

        _this.image62 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image62.anchor.setTo(0.5);
        _this.image62.scale.setTo(2, 2);
        _this.image62.frame = 0;
        _this.image62.visible = false;

        _this.image63 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image63.anchor.setTo(0.5);
        _this.image63.scale.setTo(2, 2);
        _this.image63.visible = false;

        //angle125
        _this.image64 = _this.add.sprite(425, 265, 'SG21_2_5angle1');
        _this.image64.anchor.setTo(0.5);
        _this.image64.scale.setTo(0.95, 0.95);
        _this.image64.frame = 25;
        _this.image64.visible = false;

        _this.image65 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image65.anchor.setTo(0.5);
        _this.image65.scale.setTo(2, 2);
        _this.image65.frame = 1;
        _this.image65.visible = false;

        _this.image66 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image66.anchor.setTo(0.5);
        _this.image66.scale.setTo(2, 2);
        _this.image66.frame = 2;
        _this.image66.visible = false;

        _this.image67 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image67.anchor.setTo(0.5);
        _this.image67.scale.setTo(2, 2);
        _this.image67.frame = 5;
        _this.image67.visible = false;

        _this.image68 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image68.anchor.setTo(0.5);
        _this.image68.scale.setTo(2, 2);
        _this.image68.visible = false;

        //angle125 another side
        _this.image69 = _this.add.sprite(405, 265, 'SG21_2_5angle2');
        _this.image69.anchor.setTo(0.5);
        _this.image69.scale.setTo(0.95, 0.95);
        _this.image69.frame = 25;
        _this.image69.visible = false;

        _this.image70 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image70.anchor.setTo(0.5);
        _this.image70.scale.setTo(2, 2);
        _this.image70.frame = 1;
        _this.image70.visible = false;

        _this.image71 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image71.anchor.setTo(0.5);
        _this.image71.scale.setTo(2, 2);
        _this.image71.frame = 2;
        _this.image71.visible = false;

        _this.image72 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image72.anchor.setTo(0.5);
        _this.image72.scale.setTo(2, 2);
        _this.image72.frame = 5;
        _this.image72.visible = false;

        _this.image73 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image73.anchor.setTo(0.5);
        _this.image73.scale.setTo(2, 2);
        _this.image73.visible = false;

        //angle130
        _this.image74 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image74.anchor.setTo(0.5);
        _this.image74.scale.setTo(0.95, 0.95);
        _this.image74.frame = 25;
        _this.image74.visible = false;

        _this.image75 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image75.anchor.setTo(0.5);
        _this.image75.scale.setTo(2, 2);
        _this.image75.frame = 1;
        _this.image75.visible = false;

        _this.image76 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image76.anchor.setTo(0.5);
        _this.image76.scale.setTo(2, 2);
        _this.image76.frame = 3;
        _this.image76.visible = false;

        _this.image77 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image77.anchor.setTo(0.5);
        _this.image77.scale.setTo(2, 2);
        _this.image77.frame = 0;
        _this.image77.visible = false;

        _this.image78 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image78.anchor.setTo(0.5);
        _this.image78.scale.setTo(2, 2);
        _this.image78.visible = false;

        //angle130 another side
        _this.image79 = _this.add.sprite(415, 265, 'SG21_2_5angle2');
        _this.image79.anchor.setTo(0.5);
        _this.image79.scale.setTo(0.95, 0.95);
        _this.image79.frame = 25;
        _this.image79.visible = false;

        _this.image80 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image80.anchor.setTo(0.5);
        _this.image80.scale.setTo(2, 2);
        _this.image80.frame = 1;
        _this.image80.visible = false;

        _this.image81 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image81.anchor.setTo(0.5);
        _this.image81.scale.setTo(2, 2);
        _this.image81.frame = 3;
        _this.image81.visible = false;

        _this.image82 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image82.anchor.setTo(0.5);
        _this.image82.scale.setTo(2, 2);
        _this.image82.frame = 0;
        _this.image82.visible = false;

        _this.image83 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image83.anchor.setTo(0.5);
        _this.image83.scale.setTo(2, 2);
        _this.image83.visible = false;

        //angle135
        _this.image84 = _this.add.sprite(415, 265, 'SG21_2_5angle1');
        _this.image84.anchor.setTo(0.5);
        _this.image84.scale.setTo(0.95, 0.95);
        _this.image84.frame = 25;
        _this.image84.visible = false;

        _this.image85 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image85.anchor.setTo(0.5);
        _this.image85.scale.setTo(2, 2);
        _this.image85.frame = 1;
        _this.image85.visible = false;

        _this.image86 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image86.anchor.setTo(0.5);
        _this.image86.scale.setTo(2, 2);
        _this.image86.frame = 3;
        _this.image86.visible = false;

        _this.image87 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image87.anchor.setTo(0.5);
        _this.image87.scale.setTo(2, 2);
        _this.image87.frame = 5;
        _this.image87.visible = false;

        _this.image88 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image88.anchor.setTo(0.5);
        _this.image88.scale.setTo(2, 2);
        _this.image88.visible = false;

        //angle135 another side
        _this.image89 = _this.add.sprite(415, 265, 'SG21_2_5angle2');
        _this.image89.anchor.setTo(0.5);
        _this.image89.scale.setTo(0.95, 0.95);
        _this.image89.frame = 25;
        _this.image89.visible = false;

        _this.image90 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image90.anchor.setTo(0.5);
        _this.image90.scale.setTo(2, 2);
        _this.image90.frame = 1;
        _this.image90.visible = false;

        _this.image91 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image91.anchor.setTo(0.5);
        _this.image91.scale.setTo(2, 2);
        _this.image91.frame = 3;
        _this.image91.visible = false;

        _this.image92 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image92.anchor.setTo(0.5);
        _this.image92.scale.setTo(2, 2);
        _this.image92.frame = 5;
        _this.image92.visible = false;

        _this.image93 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image93.anchor.setTo(0.5);
        _this.image93.scale.setTo(2, 2);
        _this.image93.visible = false;

        //angle140
        _this.image94 = _this.add.sprite(415, 265, 'SG21_2_5angle1');
        _this.image94.anchor.setTo(0.5);
        _this.image94.scale.setTo(0.95, 0.95);
        _this.image94.frame = 26;
        _this.image94.visible = false;

        _this.image95 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image95.anchor.setTo(0.5);
        _this.image95.scale.setTo(2, 2);
        _this.image95.frame = 1;
        _this.image95.visible = false;

        _this.image96 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image96.anchor.setTo(0.5);
        _this.image96.scale.setTo(2, 2);
        _this.image96.frame = 4;
        _this.image96.visible = false;

        _this.image97 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image97.anchor.setTo(0.5);
        _this.image97.scale.setTo(2, 2);
        _this.image97.frame = 0;
        _this.image97.visible = false;

        _this.image98 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image98.anchor.setTo(0.5);
        _this.image98.scale.setTo(2, 2);
        _this.image98.visible = false;

        //angle140 another side
        _this.image99 = _this.add.sprite(415, 265, 'SG21_2_5angle2');
        _this.image99.anchor.setTo(0.5);
        _this.image99.scale.setTo(0.95, 0.95);
        _this.image99.frame = 26;
        _this.image99.visible = false;

        _this.image100 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image100.anchor.setTo(0.5);
        _this.image100.scale.setTo(2, 2);
        _this.image100.frame = 1;
        _this.image100.visible = false;

        _this.image101 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image101.anchor.setTo(0.5);
        _this.image101.scale.setTo(2, 2);
        _this.image101.frame = 4;
        _this.image101.visible = false;

        _this.image102 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image102.anchor.setTo(0.5);
        _this.image102.scale.setTo(2, 2);
        _this.image102.frame = 0;
        _this.image102.visible = false;

        _this.image103 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image103.anchor.setTo(0.5);
        _this.image103.scale.setTo(2, 2);
        _this.image103.visible = false;

        //angle145
        _this.image104 = _this.add.sprite(415, 265, 'SG21_2_5angle1');
        _this.image104.anchor.setTo(0.5);
        _this.image104.scale.setTo(0.95, 0.95);
        _this.image104.frame = 26;
        _this.image104.visible = false;

        _this.image105 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image105.anchor.setTo(0.5);
        _this.image105.scale.setTo(2, 2);
        _this.image105.frame = 1;
        _this.image105.visible = false;

        _this.image106 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image106.anchor.setTo(0.5);
        _this.image106.scale.setTo(2, 2);
        _this.image106.frame = 4;
        _this.image106.visible = false;

        _this.image107 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image107.anchor.setTo(0.5);
        _this.image107.scale.setTo(2, 2);
        _this.image107.frame = 5;
        _this.image107.visible = false;

        _this.image108 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image108.anchor.setTo(0.5);
        _this.image108.scale.setTo(2, 2);
        _this.image108.visible = false;

        //angle145 another side
        _this.image109 = _this.add.sprite(415, 265, 'SG21_2_5angle2');
        _this.image109.anchor.setTo(0.5);
        _this.image109.scale.setTo(0.95, 0.95);
        _this.image109.frame = 26;
        _this.image109.visible = false;

        _this.image110 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image110.anchor.setTo(0.5);
        _this.image110.scale.setTo(2, 2);
        _this.image110.frame = 1;
        _this.image110.visible = false;

        _this.image111 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image111.anchor.setTo(0.5);
        _this.image111.scale.setTo(2, 2);
        _this.image111.frame = 4;
        _this.image111.visible = false;

        _this.image112 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image112.anchor.setTo(0.5);
        _this.image112.scale.setTo(2, 2);
        _this.image112.frame = 5;
        _this.image112.visible = false;

        _this.image113 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image113.anchor.setTo(0.5);
        _this.image113.scale.setTo(2, 2);
        _this.image113.visible = false;

        //angle150
        _this.image114 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image114.anchor.setTo(0.5);
        _this.image114.scale.setTo(0.95, 0.95);
        _this.image114.frame = 27;
        _this.image114.visible = false;

        _this.image115 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image115.anchor.setTo(0.5);
        _this.image115.scale.setTo(2, 2);
        _this.image115.frame = 1;
        _this.image115.visible = false;

        _this.image116 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image116.anchor.setTo(0.5);
        _this.image116.scale.setTo(2, 2);
        _this.image116.frame = 5;
        _this.image116.visible = false;

        _this.image117 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image117.anchor.setTo(0.5);
        _this.image117.scale.setTo(2, 2);
        _this.image117.frame = 0;
        _this.image117.visible = false;

        _this.image118 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image118.anchor.setTo(0.5);
        _this.image118.scale.setTo(2, 2);
        _this.image118.visible = false;

        //angle150 another side
        _this.image119 = _this.add.sprite(415, 265, 'SG21_2_5angle2');
        _this.image119.anchor.setTo(0.5);
        _this.image119.scale.setTo(0.95, 0.95);
        _this.image119.frame = 27;
        _this.image119.visible = false;

        _this.image120 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image120.anchor.setTo(0.5);
        _this.image120.scale.setTo(2, 2);
        _this.image120.frame = 1;
        _this.image120.visible = false;

        _this.image121 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image121.anchor.setTo(0.5);
        _this.image121.scale.setTo(2, 2);
        _this.image121.frame = 5;
        _this.image121.visible = false;

        _this.image122 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image122.anchor.setTo(0.5);
        _this.image122.scale.setTo(2, 2);
        _this.image122.frame = 0;
        _this.image122.visible = false;

        _this.image123 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image123.anchor.setTo(0.5);
        _this.image123.scale.setTo(2, 2);
        _this.image123.visible = false;

        //angle155
        _this.image124 = _this.add.sprite(415, 265, 'SG21_2_5angle1');
        _this.image124.anchor.setTo(0.5);
        _this.image124.scale.setTo(0.95, 0.95);
        _this.image124.frame = 27;
        _this.image124.visible = false;

        _this.image125 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image125.anchor.setTo(0.5);
        _this.image125.scale.setTo(2, 2);
        _this.image125.frame = 1;
        _this.image125.visible = false;

        _this.image126 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image126.anchor.setTo(0.5);
        _this.image126.scale.setTo(2, 2);
        _this.image126.frame = 5;
        _this.image126.visible = false;

        _this.image127 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image127.anchor.setTo(0.5);
        _this.image127.scale.setTo(2, 2);
        _this.image127.frame = 5;
        _this.image127.visible = false;

        _this.image128 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image128.anchor.setTo(0.5);
        _this.image128.scale.setTo(2, 2);
        _this.image128.visible = false;

        //angle155 another side
        _this.image129 = _this.add.sprite(415, 265, 'SG21_2_5angle2');
        _this.image129.anchor.setTo(0.5);
        _this.image129.scale.setTo(0.95, 0.95);
        _this.image129.frame = 27;
        _this.image129.visible = false;

        _this.image130 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image130.anchor.setTo(0.5);
        _this.image130.scale.setTo(2, 2);
        _this.image130.frame = 1;
        _this.image130.visible = false;

        _this.image131 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image131.anchor.setTo(0.5);
        _this.image131.scale.setTo(2, 2);
        _this.image131.frame = 5;
        _this.image131.visible = false;

        _this.image132 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image132.anchor.setTo(0.5);
        _this.image132.scale.setTo(2, 2);
        _this.image132.frame = 5;
        _this.image132.visible = false;

        _this.image133 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image133.anchor.setTo(0.5);
        _this.image133.scale.setTo(2, 2);
        _this.image133.visible = false;

        //angle160
        _this.image134 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image134.anchor.setTo(0.5);
        _this.image134.scale.setTo(0.95, 0.95);
        _this.image134.frame = 28;
        _this.image134.visible = false;

        _this.image135 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image135.anchor.setTo(0.5);
        _this.image135.scale.setTo(2, 2);
        _this.image135.frame = 1;
        _this.image135.visible = false;

        _this.image136 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image136.anchor.setTo(0.5);
        _this.image136.scale.setTo(2, 2);
        _this.image136.frame = 6;
        _this.image136.visible = false;

        _this.image137 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image137.anchor.setTo(0.5);
        _this.image137.scale.setTo(2, 2);
        _this.image137.frame = 0;
        _this.image137.visible = false;

        _this.image138 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image138.anchor.setTo(0.5);
        _this.image138.scale.setTo(2, 2);
        _this.image138.visible = false;

        //angle160 another side
        _this.image139 = _this.add.sprite(415, 265, 'SG21_2_5angle2');
        _this.image139.anchor.setTo(0.5);
        _this.image139.scale.setTo(0.95, 0.95);
        _this.image139.frame = 28;
        _this.image139.visible = false;

        _this.image140 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image140.anchor.setTo(0.5);
        _this.image140.scale.setTo(2, 2);
        _this.image140.frame = 1;
        _this.image140.visible = false;

        _this.image141 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image141.anchor.setTo(0.5);
        _this.image141.scale.setTo(2, 2);
        _this.image141.frame = 6;
        _this.image141.visible = false;

        _this.image142 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image142.anchor.setTo(0.5);
        _this.image142.scale.setTo(2, 2);
        _this.image142.frame = 0;
        _this.image142.visible = false;

        _this.image143 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image143.anchor.setTo(0.5);
        _this.image143.scale.setTo(2, 2);
        _this.image143.visible = false;

        //angle165
        _this.image144 = _this.add.sprite(415, 265, 'SG21_2_5angle1');
        _this.image144.anchor.setTo(0.5);
        _this.image144.scale.setTo(0.95, 0.95);
        _this.image144.frame = 28;
        _this.image144.visible = false;

        _this.image145 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image145.anchor.setTo(0.5);
        _this.image145.scale.setTo(2, 2);
        _this.image145.frame = 1;
        _this.image145.visible = false;

        _this.image146 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image146.anchor.setTo(0.5);
        _this.image146.scale.setTo(2, 2);
        _this.image146.frame = 6;
        _this.image146.visible = false;

        _this.image147 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image147.anchor.setTo(0.5);
        _this.image147.scale.setTo(2, 2);
        _this.image147.frame = 5;
        _this.image147.visible = false;

        _this.image148 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image148.anchor.setTo(0.5);
        _this.image148.scale.setTo(2, 2);
        _this.image148.visible = false;

        //angle165 another side
        _this.image149 = _this.add.sprite(415, 265, 'SG21_2_5angle2');
        _this.image149.anchor.setTo(0.5);
        _this.image149.scale.setTo(0.95, 0.95);
        _this.image149.frame = 28;
        _this.image149.visible = false;

        _this.image150 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image150.anchor.setTo(0.5);
        _this.image150.scale.setTo(2, 2);
        _this.image150.frame = 1;
        _this.image150.visible = false;

        _this.image151 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image151.anchor.setTo(0.5);
        _this.image151.scale.setTo(2, 2);
        _this.image151.frame = 6;
        _this.image151.visible = false;

        _this.image152 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image152.anchor.setTo(0.5);
        _this.image152.scale.setTo(2, 2);
        _this.image152.frame = 5;
        _this.image152.visible = false;

        _this.image153 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image153.anchor.setTo(0.5);
        _this.image153.scale.setTo(2, 2);
        _this.image153.visible = false;

        //angle170
        _this.image154 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image154.anchor.setTo(0.5);
        _this.image154.scale.setTo(0.95, 0.95);
        _this.image154.frame = 29;
        _this.image154.visible = false;

        _this.image155 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image155.anchor.setTo(0.5);
        _this.image155.scale.setTo(2, 2);
        _this.image155.frame = 1;
        _this.image155.visible = false;

        _this.image156 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image156.anchor.setTo(0.5);
        _this.image156.scale.setTo(2, 2);
        _this.image156.frame = 7;
        _this.image156.visible = false;

        _this.image157 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image157.anchor.setTo(0.5);
        _this.image157.scale.setTo(2, 2);
        _this.image157.frame = 0;
        _this.image157.visible = false;

        _this.image158 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image158.anchor.setTo(0.5);
        _this.image158.scale.setTo(2, 2);
        _this.image158.visible = false;

        //angle170 another side
        _this.image159 = _this.add.sprite(410, 265, 'SG21_2_5angle2');
        _this.image159.anchor.setTo(0.5);
        _this.image159.scale.setTo(0.95, 0.95);
        _this.image159.frame = 29;
        _this.image159.visible = false;

        _this.image160 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image160.anchor.setTo(0.5);
        _this.image160.scale.setTo(2, 2);
        _this.image160.frame = 1;
        _this.image160.visible = false;

        _this.image161 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image161.anchor.setTo(0.5);
        _this.image161.scale.setTo(2, 2);
        _this.image161.frame = 7;
        _this.image161.visible = false;

        _this.image162 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image162.anchor.setTo(0.5);
        _this.image162.scale.setTo(2, 2);
        _this.image162.frame = 0;
        _this.image162.visible = false;

        _this.image163 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image163.anchor.setTo(0.5);
        _this.image163.scale.setTo(2, 2);
        _this.image163.visible = false;

        //angle175
        _this.image164 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image164.anchor.setTo(0.5);
        _this.image164.scale.setTo(0.95, 0.95);
        _this.image164.frame = 29;
        _this.image164.visible = false;

        _this.image165 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image165.anchor.setTo(0.5);
        _this.image165.scale.setTo(2, 2);
        _this.image165.frame = 1;
        _this.image165.visible = false;

        _this.image166 = _this.add.sprite(495, 265, 'SG21_2_5numbers');
        _this.image166.anchor.setTo(0.5);
        _this.image166.scale.setTo(2, 2);
        _this.image166.frame = 7;
        _this.image166.visible = false;

        _this.image167 = _this.add.sprite(515, 265, 'SG21_2_5numbers');
        _this.image167.anchor.setTo(0.5);
        _this.image167.scale.setTo(2, 2);
        _this.image167.frame = 5;
        _this.image167.visible = false;

        _this.image168 = _this.add.sprite(535, 255, 'SG21_2_5degree');
        _this.image168.anchor.setTo(0.5);
        _this.image168.scale.setTo(2, 2);
        _this.image168.visible = false;

        //angle175 another side
        _this.image169 = _this.add.sprite(410, 265, 'SG21_2_5angle2');
        _this.image169.anchor.setTo(0.5);
        _this.image169.scale.setTo(0.95, 0.95);
        _this.image169.frame = 29;
        _this.image169.visible = false;

        _this.image170 = _this.add.sprite(300, 265, 'SG21_2_5numbers');
        _this.image170.anchor.setTo(0.5);
        _this.image170.scale.setTo(2, 2);
        _this.image170.frame = 1;
        _this.image170.visible = false;

        _this.image171 = _this.add.sprite(315, 265, 'SG21_2_5numbers');
        _this.image171.anchor.setTo(0.5);
        _this.image171.scale.setTo(2, 2);
        _this.image171.frame = 7;
        _this.image171.visible = false;

        _this.image172 = _this.add.sprite(335, 265, 'SG21_2_5numbers');
        _this.image172.anchor.setTo(0.5);
        _this.image172.scale.setTo(2, 2);
        _this.image172.frame = 5;
        _this.image172.visible = false;

        _this.image173 = _this.add.sprite(350, 255, 'SG21_2_5degree');
        _this.image173.anchor.setTo(0.5);
        _this.image173.scale.setTo(2, 2);
        _this.image173.visible = false;

        _this.slideGrp.add(_this.image1);
        _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3);
        _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.image1); _this.slideGrp.add(_this.image2); _this.slideGrp.add(_this.image3); _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5); _this.slideGrp.add(_this.image6); _this.slideGrp.add(_this.image7); _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9); _this.slideGrp.add(_this.image10); _this.slideGrp.add(_this.image11); _this.slideGrp.add(_this.image12);
        _this.slideGrp.add(_this.image13); _this.slideGrp.add(_this.image14); _this.slideGrp.add(_this.image15); _this.slideGrp.add(_this.image16);
        _this.slideGrp.add(_this.image17); _this.slideGrp.add(_this.image18); _this.slideGrp.add(_this.image19); _this.slideGrp.add(_this.image20);
        _this.slideGrp.add(_this.image21); _this.slideGrp.add(_this.image22); _this.slideGrp.add(_this.image23); _this.slideGrp.add(_this.image24);
        _this.slideGrp.add(_this.image25); _this.slideGrp.add(_this.image26); _this.slideGrp.add(_this.image27); _this.slideGrp.add(_this.image28);
        _this.slideGrp.add(_this.image29); _this.slideGrp.add(_this.image30); _this.slideGrp.add(_this.image31); _this.slideGrp.add(_this.image32);
        _this.slideGrp.add(_this.image33); _this.slideGrp.add(_this.image34); _this.slideGrp.add(_this.image35); _this.slideGrp.add(_this.image36);
        _this.slideGrp.add(_this.image37); _this.slideGrp.add(_this.image38); _this.slideGrp.add(_this.image39); _this.slideGrp.add(_this.image40);
        _this.slideGrp.add(_this.image41); _this.slideGrp.add(_this.image42); _this.slideGrp.add(_this.image43); _this.slideGrp.add(_this.image44);
        _this.slideGrp.add(_this.image45); _this.slideGrp.add(_this.image46); _this.slideGrp.add(_this.image47); _this.slideGrp.add(_this.image48);
        _this.slideGrp.add(_this.image49); _this.slideGrp.add(_this.image50); _this.slideGrp.add(_this.image51); _this.slideGrp.add(_this.image52);
        _this.slideGrp.add(_this.image53); _this.slideGrp.add(_this.image54); _this.slideGrp.add(_this.image55); _this.slideGrp.add(_this.image56);
        _this.slideGrp.add(_this.image57); _this.slideGrp.add(_this.image58); _this.slideGrp.add(_this.image59); _this.slideGrp.add(_this.image60);
        _this.slideGrp.add(_this.image61); _this.slideGrp.add(_this.image62); _this.slideGrp.add(_this.image63); _this.slideGrp.add(_this.image64);
        _this.slideGrp.add(_this.image65); _this.slideGrp.add(_this.image66); _this.slideGrp.add(_this.image67); _this.slideGrp.add(_this.image68);
        _this.slideGrp.add(_this.image69); _this.slideGrp.add(_this.image70); _this.slideGrp.add(_this.image71); _this.slideGrp.add(_this.image72);
        _this.slideGrp.add(_this.image73); _this.slideGrp.add(_this.image74); _this.slideGrp.add(_this.image75); _this.slideGrp.add(_this.image76);
        _this.slideGrp.add(_this.image77); _this.slideGrp.add(_this.image78); _this.slideGrp.add(_this.image79); _this.slideGrp.add(_this.image80);
        _this.slideGrp.add(_this.image81); _this.slideGrp.add(_this.image82); _this.slideGrp.add(_this.image83); _this.slideGrp.add(_this.image84);
        _this.slideGrp.add(_this.image85); _this.slideGrp.add(_this.image86); _this.slideGrp.add(_this.image87); _this.slideGrp.add(_this.image88);
        _this.slideGrp.add(_this.image89); _this.slideGrp.add(_this.image90); _this.slideGrp.add(_this.image91); _this.slideGrp.add(_this.image92);
        _this.slideGrp.add(_this.image93); _this.slideGrp.add(_this.image94); _this.slideGrp.add(_this.image95); _this.slideGrp.add(_this.image96);
        _this.slideGrp.add(_this.image97); _this.slideGrp.add(_this.image98); _this.slideGrp.add(_this.image99); _this.slideGrp.add(_this.image100);
        _this.slideGrp.add(_this.image101); _this.slideGrp.add(_this.image102); _this.slideGrp.add(_this.image103); _this.slideGrp.add(_this.image104);
        _this.slideGrp.add(_this.image105); _this.slideGrp.add(_this.image106); _this.slideGrp.add(_this.image107); _this.slideGrp.add(_this.image108);
        _this.slideGrp.add(_this.image109); _this.slideGrp.add(_this.image110); _this.slideGrp.add(_this.image111); _this.slideGrp.add(_this.image112);
        _this.slideGrp.add(_this.image113); _this.slideGrp.add(_this.image114); _this.slideGrp.add(_this.image115); _this.slideGrp.add(_this.image116);
        _this.slideGrp.add(_this.image117); _this.slideGrp.add(_this.image118); _this.slideGrp.add(_this.image119); _this.slideGrp.add(_this.image120);
        _this.slideGrp.add(_this.image121); _this.slideGrp.add(_this.image122); _this.slideGrp.add(_this.image123); _this.slideGrp.add(_this.image124);
        _this.slideGrp.add(_this.image125); _this.slideGrp.add(_this.image126); _this.slideGrp.add(_this.image127); _this.slideGrp.add(_this.image128);
        _this.slideGrp.add(_this.image129); _this.slideGrp.add(_this.image130); _this.slideGrp.add(_this.image131); _this.slideGrp.add(_this.image132);
        _this.slideGrp.add(_this.image133); _this.slideGrp.add(_this.image134); _this.slideGrp.add(_this.image135); _this.slideGrp.add(_this.image136); _this.slideGrp.add(_this.image137); _this.slideGrp.add(_this.image138); _this.slideGrp.add(_this.image139); _this.slideGrp.add(_this.image140);
        _this.slideGrp.add(_this.image141); _this.slideGrp.add(_this.image142); _this.slideGrp.add(_this.image143); _this.slideGrp.add(_this.image144);
        _this.slideGrp.add(_this.image145); _this.slideGrp.add(_this.image146); _this.slideGrp.add(_this.image147); _this.slideGrp.add(_this.image148);
        _this.slideGrp.add(_this.image149); _this.slideGrp.add(_this.image150); _this.slideGrp.add(_this.image151); _this.slideGrp.add(_this.image152);
        _this.slideGrp.add(_this.image153); _this.slideGrp.add(_this.image154); _this.slideGrp.add(_this.image155); _this.slideGrp.add(_this.image156);
        _this.slideGrp.add(_this.image157); _this.slideGrp.add(_this.image158); _this.slideGrp.add(_this.image159); _this.slideGrp.add(_this.image160);
        _this.slideGrp.add(_this.image161); _this.slideGrp.add(_this.image162); _this.slideGrp.add(_this.image163); _this.slideGrp.add(_this.image164);
        _this.slideGrp.add(_this.image165); _this.slideGrp.add(_this.image166); _this.slideGrp.add(_this.image167); _this.slideGrp.add(_this.image168);
        _this.slideGrp.add(_this.image169); _this.slideGrp.add(_this.image170); _this.slideGrp.add(_this.image171); _this.slideGrp.add(_this.image172);
        _this.slideGrp.add(_this.image173);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoEleventhQuestion: function () {
        //* To Make an angle of 360 degree 
        console.log("11 qqq")
        _this.questioNo = 11;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(419, 293, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.5, 0.4);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(530, 292, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(2.0, 2);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(419, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.5, 0.4);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(356, 292, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(2, 2);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        //   _this.c.drawCircle(416, 432, 15);

        _this.c.drawCircle(419, 292, 15);
        _this.cX = 419;
        _this.cY = 292;

        _this.cX1 = 419;
        _this.cY1 = 295;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        //angle 360 degree
        _this.image6 = _this.add.sprite(420, 267, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 30;
        _this.image6.visible = false;

        _this.imagerevAngle = _this.add.sprite(419, 317, 'SG21_2_5angle1');
        _this.imagerevAngle.anchor.setTo(0.5);
        _this.imagerevAngle.scale.setTo(0.95, 0.95);
        _this.imagerevAngle.angle = 180;
        _this.imagerevAngle.frame = 30;
        _this.imagerevAngle.visible = false;

        _this.image7 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(2, 2);
        _this.image7.frame = 3;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(500, 265, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(2, 2);
        _this.image8.frame = 6;
        _this.image8.visible = false;

        _this.imagezero = _this.add.sprite(520, 265, 'SG21_2_5numbers');
        _this.imagezero.anchor.setTo(0.5);
        _this.imagezero.scale.setTo(2, 2);
        _this.imagezero.frame = 0;
        _this.imagezero.visible = false;

        _this.image9 = _this.add.sprite(525, 245, 'SG21_2_5degree');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(2, 2);
        _this.image9.visible = false;

        //angle 360 another side
        _this.image10 = _this.add.sprite(420, 267, 'SG21_2_5angle2');
        _this.image10.anchor.setTo(0.5);
        _this.image10.scale.setTo(0.95, 0.95);
        _this.image10.frame = 30;
        _this.image10.visible = false;

        //* Ulta circle 
        _this.imagereverseAngle = _this.add.sprite(420, 319, 'SG21_2_5angle2');
        _this.imagereverseAngle.anchor.setTo(0.5);
        _this.imagereverseAngle.scale.setTo(0.95, 0.95);
        _this.imagereverseAngle.angle = 180;
        _this.imagereverseAngle.frame = 30;
        _this.imagereverseAngle.visible = false;

        _this.image11 = _this.add.sprite(299, 265, 'SG21_2_5numbers');
        _this.image11.anchor.setTo(0.5);
        _this.image11.scale.setTo(2, 2);
        _this.image11.frame = 3;
        _this.image11.visible = false;

        _this.image12 = _this.add.sprite(320, 265, 'SG21_2_5numbers');
        _this.image12.anchor.setTo(0.5);
        _this.image12.scale.setTo(2, 2);
        _this.image12.frame = 6;
        _this.image12.visible = false;

        _this.imagefirstZero = _this.add.sprite(341, 265, 'SG21_2_5numbers');
        _this.imagefirstZero.anchor.setTo(0.5);
        _this.imagefirstZero.scale.setTo(2, 2);
        _this.imagefirstZero.frame = 0;
        _this.imagefirstZero.visible = false;

        _this.image13 = _this.add.sprite(350, 250, 'SG21_2_5degree');
        _this.image13.anchor.setTo(0.5);
        _this.image13.scale.setTo(2, 2);
        _this.image13.visible = false;

        _this.slideGrp.add(_this.image1);
        _this.slideGrp.add(_this.imagerevAngle);
        _this.slideGrp.add(_this.imagereverseAngle);
        _this.slideGrp.add(_this.imagezero);
        _this.slideGrp.add(_this.imagefirstZero);
        _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3);
        _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.image1); _this.slideGrp.add(_this.image2); _this.slideGrp.add(_this.image3); _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5); _this.slideGrp.add(_this.image6); _this.slideGrp.add(_this.image7); _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9); _this.slideGrp.add(_this.image10); _this.slideGrp.add(_this.image11); _this.slideGrp.add(_this.image12); _this.slideGrp.add(_this.image13);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoTwelthQuestion: function () {
        //* To make a straight angle = 180 degrees
        console.log("12th question");
        _this.questioNo = 12;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(419, 292, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.5, 0.4);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(530, 292, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(2.0, 2);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(419, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.5, 0.4);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(356, 292, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(2, 2);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        //   _this.c.drawCircle(416, 432, 15);

        _this.c.drawCircle(419, 292, 15);
        _this.cX = 419;
        _this.cY = 292;

        _this.cX1 = 419;
        _this.cY1 = 295;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        _this.image6 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 30;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(395, 225, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(2, 2);
        _this.image7.frame = 1;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(410, 225, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(2, 2);
        _this.image8.frame = 8;
        _this.image8.visible = false;

        _this.imagezero = _this.add.sprite(430, 225, 'SG21_2_5numbers');
        _this.imagezero.anchor.setTo(0.5);
        _this.imagezero.scale.setTo(2, 2);
        _this.imagezero.frame = 0;
        _this.imagezero.visible = false;

        _this.image9 = _this.add.sprite(445, 210, 'SG21_2_5degree');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(2, 2);
        _this.image9.visible = false;

        _this.slideGrp.add(_this.image1); _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3); _this.slideGrp.add(_this.image6);
        _this.slideGrp.add(_this.image7); _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9);
        _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.imagezero);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoThirteenthQ: function () {
        //* To make 320 degrees of angle
        console.log("13th question");
        _this.questioNo = 13;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(419, 292, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.5, 0.4);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(530, 292, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(2.0, 2);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(419, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.5, 0.4);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(356, 292, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(2, 2);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        //   _this.c.drawCircle(416, 432, 15);

        _this.c.drawCircle(419, 292, 15);
        _this.cX = 419;
        _this.cY = 292;

        _this.cX1 = 419;
        _this.cY1 = 295;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        _this.arc1 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc1.anchor.setTo(0.5);
        _this.arc1.scale.setTo(0.95, 0.95);
        _this.arc1.frame = 70;
        _this.arc1.visible = false;

        _this.arc2 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc2.anchor.setTo(0.5);
        _this.arc2.scale.setTo(0.95, 0.95);
        _this.arc2.frame = 71;
        _this.arc2.scale.x *= -1;
        _this.arc2.visible = false;

        _this.image6 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(1.5, 1.5);
        _this.image6.frame = 3;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(1.5, 1.5);
        _this.image7.frame = 2;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(1.5, 1.5);
        _this.image8.frame = 0;
        _this.image8.visible = false;

        _this.image9 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(1.5, 1.5);
        _this.image9.visible = false;

        _this.slideGrp.add(_this.image1); _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3); _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.arc1); _this.slideGrp.add(_this.image6);
        _this.slideGrp.add(_this.image4); _this.slideGrp.add(_this.image7);
        _this.slideGrp.add(_this.arc2); _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoFrteenQ: function () {
        //* To make 280 degrees of angle
        console.log("14th question");
        _this.questioNo = 14;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(419, 292, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.5, 0.4);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(530, 292, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(2.0, 2);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(419, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.5, 0.4);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(356, 292, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(2, 2);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        //   _this.c.drawCircle(416, 432, 15);

        _this.c.drawCircle(419, 292, 15);
        _this.cX = 419;
        _this.cY = 292;

        _this.cX1 = 419;
        _this.cY1 = 295;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        _this.arc1 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc1.anchor.setTo(0.5);
        _this.arc1.scale.setTo(0.95, 0.95);
        _this.arc1.frame = 64;
        _this.arc1.visible = false;

        _this.arc2 = _this.add.sprite(418, 293, 'circle_arc');
        _this.arc2.anchor.setTo(0.5);
        _this.arc2.scale.setTo(0.95, 0.95);
        _this.arc2.frame = 64;
        _this.arc2.scale.x *= -1;
        _this.arc2.visible = false;

        _this.image6 = _this.add.sprite(400, 210, 'SG21_2_5numbers');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(1.5, 1.5);
        _this.image6.frame = 2;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(415, 210, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(1.5, 1.5);
        _this.image7.frame = 8;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(430, 210, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(1.5, 1.5);
        _this.image8.frame = 0;
        _this.image8.visible = false;

        _this.image9 = _this.add.sprite(444, 200, 'SG21_2_5degree');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(1.5, 1.5);
        _this.image9.visible = false;

        _this.slideGrp.add(_this.image1); _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3); _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.arc1); _this.slideGrp.add(_this.image6);
        _this.slideGrp.add(_this.image4); _this.slideGrp.add(_this.image7);
        _this.slideGrp.add(_this.arc2); _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoFifteenQ: function () {
        //* To make an angle of 180 degrees
        console.log("15th question, 180");
        _this.questioNo = 15;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(419, 292, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.5, 0.4);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(530, 292, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(2.0, 2);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(419, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.5, 0.4);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(356, 292, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(2, 2);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        //   _this.c.drawCircle(416, 432, 15);

        _this.c.drawCircle(419, 292, 15);
        _this.cX = 419;
        _this.cY = 292;

        _this.cX1 = 419;
        _this.cY1 = 295;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        _this.image6 = _this.add.sprite(420, 265, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 30;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(395, 225, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(2, 2);
        _this.image7.frame = 1;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(410, 225, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(2, 2);
        _this.image8.frame = 8;
        _this.image8.visible = false;

        _this.imagezero = _this.add.sprite(430, 225, 'SG21_2_5numbers');
        _this.imagezero.anchor.setTo(0.5);
        _this.imagezero.scale.setTo(2, 2);
        _this.imagezero.frame = 0;
        _this.imagezero.visible = false;

        _this.image9 = _this.add.sprite(445, 210, 'SG21_2_5degree');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(2, 2);
        _this.image9.visible = false;

        _this.slideGrp.add(_this.image1); _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3); _this.slideGrp.add(_this.image6);
        _this.slideGrp.add(_this.image7); _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9);
        _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.imagezero);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoSixteenQ: function () {
        //* Make 90 degrees Angle
        console.log("16th question")
        _this.questioNo = 16;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(420, 293, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.5, 0.5);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(510, 293, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(1.5, 0.5);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(420, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.5, 0.5);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(370, 293, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(1.5, 0.5);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        //   _this.c.drawCircle(416, 432, 15);
        _this.c.drawCircle(419, 292, 15);

        _this.cX = 419;
        _this.cY = 292;

        _this.cX1 = 419;
        _this.cY1 = 295;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        _this.image6 = _this.add.sprite(416, 265, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 9;
        _this.image6.visible = false;

        _this.image7 = _this.add.sprite(476, 235, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(1.5, 1.5);
        _this.image7.frame = 9;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(490, 235, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(1.5, 1.5);
        _this.image8.frame = 0;
        _this.image8.visible = false;

        _this.image9 = _this.add.sprite(500, 225, 'SG21_2_5degree');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(2, 2);
        _this.image9.visible = false;

        _this.image10 = _this.add.sprite(422, 266, 'SG21_2_5angle2');
        _this.image10.anchor.setTo(0.5);
        _this.image10.scale.setTo(0.95, 0.95);
        _this.image10.frame = 9;
        _this.image10.visible = false;

        _this.image11 = _this.add.sprite(340, 235, 'SG21_2_5numbers');
        _this.image11.anchor.setTo(0.5);
        _this.image11.scale.setTo(1.5, 1.5);
        _this.image11.frame = 9;
        _this.image11.visible = false;

        _this.image12 = _this.add.sprite(355, 235, 'SG21_2_5numbers');
        _this.image12.anchor.setTo(0.5);
        _this.image12.scale.setTo(1.5, 1.5);
        _this.image12.frame = 0;
        _this.image12.visible = false;

        _this.image13 = _this.add.sprite(365, 225, 'SG21_2_5degree');
        _this.image13.anchor.setTo(0.5);
        _this.image13.scale.setTo(2, 2);
        _this.image13.visible = false;

        _this.slideGrp.add(_this.image1);
        _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3);
        _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.image6);
        _this.slideGrp.add(_this.image7);
        _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9);
        _this.slideGrp.add(_this.image10);
        _this.slideGrp.add(_this.image11);
        _this.slideGrp.add(_this.image12);
        _this.slideGrp.add(_this.image13);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    gotoSeventeenQ: function () {
        //* To Make a complete angle  
        console.log("17 qqq")
        _this.questioNo = 17;
        _this.getVoice();

        _this.loadobject();

        _this.slideGrp = _this.add.group();
        if (_this.wrongAnswer == false) {
            _this.slideGrp.x = -1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);
        }

        _this.image2 = _this.add.sprite(419, 293, 'SG21_2_5line');
        _this.image2.anchor.setTo(0.021, 0.5);
        _this.image2.scale.setTo(0.5, 0.4);
        _this.image2.name = "line1";
        _this.image2.inputEnabled = true;
        _this.image2.input.useHandCursor = true;

        _this.image4 = _this.add.sprite(530, 292, 'SG21_2_5graphic');
        _this.image4.anchor.setTo(0.65, 0.5);
        _this.image4.scale.setTo(2.0, 2);
        _this.image4.alpha = 0;
        _this.image4.inputEnabled = true;
        _this.image4.input.useHandCursor = true;
        _this.image4.input.enableDrag(true);

        _this.image3 = _this.add.sprite(419, 292, 'SG21_2_5line');
        _this.image3.anchor.setTo(0.021, 0.5);
        _this.image3.scale.setTo(0.5, 0.4);
        _this.image3.angle = -180;
        _this.image3.name = "line2";
        _this.image3.inputEnabled = true;
        _this.image3.input.useHandCursor = true;

        _this.image5 = _this.add.sprite(356, 292, 'SG21_2_5graphic');
        _this.image5.anchor.setTo(0.65, 0.5);
        _this.image5.scale.setTo(2, 2);
        _this.image5.alpha = 0;
        _this.image5.inputEnabled = true;
        _this.image5.input.useHandCursor = true;
        _this.image5.input.enableDrag(true);

        _this.c = _this.add.graphics(0, 0);
        _this.c.beginFill(0xEC008C, 1);
        //   _this.c.drawCircle(416, 432, 15);

        _this.c.drawCircle(419, 292, 15);
        _this.cX = 419;
        _this.cY = 292;

        _this.cX1 = 419;
        _this.cY1 = 295;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2, 0xFF0000);
        _this.circle.drawCircle(_this.cX, _this.cY, _this.radius);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2, 0xFF0000);
        _this.circle1.drawCircle(_this.cX1, _this.cY1, _this.radius);
        _this.circle1.alpha = 0;

        _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);

        //angle 360 degree
        _this.image6 = _this.add.sprite(420, 267, 'SG21_2_5angle1');
        _this.image6.anchor.setTo(0.5);
        _this.image6.scale.setTo(0.95, 0.95);
        _this.image6.frame = 30;
        _this.image6.visible = false;

        _this.imagerevAngle = _this.add.sprite(419, 317, 'SG21_2_5angle1');
        _this.imagerevAngle.anchor.setTo(0.5);
        _this.imagerevAngle.scale.setTo(0.95, 0.95);
        _this.imagerevAngle.angle = 180;
        _this.imagerevAngle.frame = 30;
        _this.imagerevAngle.visible = false;

        _this.image7 = _this.add.sprite(480, 265, 'SG21_2_5numbers');
        _this.image7.anchor.setTo(0.5);
        _this.image7.scale.setTo(2, 2);
        _this.image7.frame = 3;
        _this.image7.visible = false;

        _this.image8 = _this.add.sprite(500, 265, 'SG21_2_5numbers');
        _this.image8.anchor.setTo(0.5);
        _this.image8.scale.setTo(2, 2);
        _this.image8.frame = 6;
        _this.image8.visible = false;

        _this.imagezero = _this.add.sprite(520, 265, 'SG21_2_5numbers');
        _this.imagezero.anchor.setTo(0.5);
        _this.imagezero.scale.setTo(2, 2);
        _this.imagezero.frame = 0;
        _this.imagezero.visible = false;

        _this.image9 = _this.add.sprite(525, 245, 'SG21_2_5degree');
        _this.image9.anchor.setTo(0.5);
        _this.image9.scale.setTo(2, 2);
        _this.image9.visible = false;

        //angle 360 another side
        _this.image10 = _this.add.sprite(420, 267, 'SG21_2_5angle2');
        _this.image10.anchor.setTo(0.5);
        _this.image10.scale.setTo(0.95, 0.95);
        _this.image10.frame = 30;
        _this.image10.visible = false;

        //* Ulta circle 
        _this.imagereverseAngle = _this.add.sprite(420, 319, 'SG21_2_5angle2');
        _this.imagereverseAngle.anchor.setTo(0.5);
        _this.imagereverseAngle.scale.setTo(0.95, 0.95);
        _this.imagereverseAngle.angle = 180;
        _this.imagereverseAngle.frame = 30;
        _this.imagereverseAngle.visible = false;

        _this.image11 = _this.add.sprite(299, 265, 'SG21_2_5numbers');
        _this.image11.anchor.setTo(0.5);
        _this.image11.scale.setTo(2, 2);
        _this.image11.frame = 3;
        _this.image11.visible = false;

        _this.image12 = _this.add.sprite(320, 265, 'SG21_2_5numbers');
        _this.image12.anchor.setTo(0.5);
        _this.image12.scale.setTo(2, 2);
        _this.image12.frame = 6;
        _this.image12.visible = false;

        _this.imagefirstZero = _this.add.sprite(341, 265, 'SG21_2_5numbers');
        _this.imagefirstZero.anchor.setTo(0.5);
        _this.imagefirstZero.scale.setTo(2, 2);
        _this.imagefirstZero.frame = 0;
        _this.imagefirstZero.visible = false;

        _this.image13 = _this.add.sprite(350, 250, 'SG21_2_5degree');
        _this.image13.anchor.setTo(0.5);
        _this.image13.scale.setTo(2, 2);
        _this.image13.visible = false;

        _this.slideGrp.add(_this.image1);
        _this.slideGrp.add(_this.imagerevAngle);
        _this.slideGrp.add(_this.imagereverseAngle);
        _this.slideGrp.add(_this.imagezero);
        _this.slideGrp.add(_this.imagefirstZero);
        _this.slideGrp.add(_this.image2);
        _this.slideGrp.add(_this.image3);
        _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5);
        _this.slideGrp.add(_this.image1); _this.slideGrp.add(_this.image2); _this.slideGrp.add(_this.image3); _this.slideGrp.add(_this.image4);
        _this.slideGrp.add(_this.image5); _this.slideGrp.add(_this.image6); _this.slideGrp.add(_this.image7); _this.slideGrp.add(_this.image8);
        _this.slideGrp.add(_this.image9); _this.slideGrp.add(_this.image10); _this.slideGrp.add(_this.image11); _this.slideGrp.add(_this.image12); _this.slideGrp.add(_this.image13);
        _this.slideGrp.add(_this.tickMark);
        _this.slideGrp.add(_this.circle);
        _this.slideGrp.add(_this.c);

        _this.x = 124;
        _this.y = 285;
    },

    toCheckangle: function (target) {
        target.events.onInputDown.removeAll();

        _this.tickMark.frame = 1;
        //* right Side validation
        if (_this.questioNo == 1) {
            if (_this.image2.angle > 3 && _this.image2.angle <= 7 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("185 DDD");//
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]);
                _this.image.play(30);
                _this.time.events.add(1600, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                    _this.image10.visible = true;
                    _this.correctAns();
                    //_this.imageD.visible=true; 
                }, _this);
            }
            else if (_this.image2.angle > 7 && _this.image2.angle <= 12 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("...190 DDD !!!!");
                _this.arc3.visible = true;
                _this.image = _this.arc3.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]);
                _this.image.play(30);
                _this.time.events.add(1600, function () {
                    _this.image11.visible = true;
                    _this.image12.visible = true;
                    _this.image13.visible = true;
                    _this.image14.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 12 && _this.image2.angle <= 17 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("195 DDD !!!");
                _this.arc5.visible = true;
                _this.image = _this.arc5.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]);
                _this.image.play(30);
                _this.time.events.add(1600, function () {
                    _this.image15.visible = true;
                    _this.image16.visible = true;
                    _this.image17.visible = true;
                    _this.image18.visible = true;
                    _this.correctAns();
                }, _this);

            }
            else if (_this.image2.angle > 17 && _this.image2.angle <= 22 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("200 DDD !!!!");
                _this.arc7.visible = true;
                _this.image = _this.arc7.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]);
                _this.image.play(30);
                _this.time.events.add(1600, function () {
                    _this.image19.visible = true;
                    _this.image20.visible = true;
                    _this.image21.visible = true;
                    _this.image22.visible = true;
                    _this.correctAns();
                }, _this);

            }
            else if (_this.image2.angle > 22 && _this.image2.angle <= 27 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("205 DDD !!!!");
                _this.arc9.visible = true;
                _this.image = _this.arc9.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]);
                _this.image.play(30);
                _this.time.events.add(1600, function () {
                    _this.image23.visible = true;
                    _this.image24.visible = true;
                    _this.image25.visible = true;
                    _this.image26.visible = true;
                    _this.correctAns();
                }, _this);

            }
            else if (_this.image2.angle > 27 && _this.image2.angle <= 36 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("210 DDD !!!!");
                _this.arc11.visible = true;
                _this.image = _this.arc11.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]);
                _this.image.play(30);
                _this.time.events.add(1600, function () {
                    _this.image27.visible = true;
                    _this.image28.visible = true;
                    _this.image29.visible = true;
                    _this.image30.visible = true;
                    _this.correctAns();
                }, _this);

            }
            else if (_this.image2.angle > 36 && _this.image2.angle <= 41 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("215 DDD !!!!");
                _this.arc13.visible = true;
                _this.image = _this.arc13.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]);
                _this.image.play(30);
                _this.time.events.add(1600, function () {
                    _this.image31.visible = true;
                    _this.image32.visible = true;
                    _this.image33.visible = true;
                    _this.image34.visible = true;
                    _this.correctAns();
                }, _this);

            }
            else if (_this.image2.angle > 41 && _this.image2.angle <= 46 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("220 DDD !!!!");
                _this.arc15.visible = true;
                _this.image = _this.arc15.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]);
                _this.image.play(30);
                _this.time.events.add(1600, function () {
                    _this.image35.visible = true;
                    _this.image36.visible = true;
                    _this.image37.visible = true;
                    _this.image38.visible = true;
                    _this.correctAns();
                }, _this);

            }
            else if (_this.image2.angle > 46 && _this.image2.angle <= 51 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("225 DDD !!!!");
                _this.arc17.visible = true;
                _this.image = _this.arc17.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51]);
                _this.image.play(30);
                _this.time.events.add(1600, function () {
                    _this.imageN35.visible = true;
                    _this.imageN36.visible = true;
                    _this.imageN37.visible = true;
                    _this.imageN38.visible = true;
                    _this.correctAns();
                }, _this);

            }
            else if (_this.image2.angle > 51 && _this.image2.angle <= 56 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("230 DDD !!!!");
                _this.arc19.visible = true;
                _this.image = _this.arc19.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]);
                _this.image.play(36);
                _this.time.events.add(1600, function () {
                    _this.image39.visible = true;
                    _this.image40.visible = true;
                    _this.image41.visible = true;
                    _this.image42.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 56 && _this.image2.angle <= 61 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("235 DDD !!!!");
                _this.arc21.visible = true;
                _this.image = _this.arc21.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]);
                _this.image.play(36);
                _this.time.events.add(1600, function () {
                    _this.image43.visible = true;
                    _this.image44.visible = true;
                    _this.image45.visible = true;
                    _this.image46.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 61 && _this.image2.angle <= 66 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("240 DDD !!!!");
                _this.arc23.visible = true;
                _this.image = _this.arc23.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]);
                _this.image.play(36);
                _this.time.events.add(1600, function () {
                    _this.image47.visible = true;
                    _this.image48.visible = true;
                    _this.image49.visible = true;
                    _this.image50.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 66 && _this.image2.angle <= 71 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("245 DDD !!!!");
                _this.arc25.visible = true;
                _this.image = _this.arc25.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54]);
                _this.image.play(36);
                _this.time.events.add(1600, function () {
                    _this.image51.visible = true;
                    _this.image52.visible = true;
                    _this.image53.visible = true;
                    _this.image54.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 71 && _this.image2.angle <= 76 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("250 DDD !!!!");
                _this.arc27.visible = true;
                _this.image = _this.arc27.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]);
                _this.image.play(36);
                _this.time.events.add(1600, function () {
                    _this.image55.visible = true;
                    _this.image56.visible = true;
                    _this.image57.visible = true;
                    _this.image58.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 76 && _this.image2.angle <= 81 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("255 DDD !!!!");
                _this.arc29.visible = true;
                _this.image = _this.arc29.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56]);
                _this.image.play(42);
                _this.time.events.add(1600, function () {
                    _this.image59.visible = true;
                    _this.image60.visible = true;
                    _this.image61.visible = true;
                    _this.image62.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 81 && _this.image2.angle <= 85 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("260 DDD !!!!");
                _this.arc31.visible = true;
                _this.image = _this.arc31.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
                _this.image.play(42);
                _this.time.events.add(1600, function () {
                    _this.image63.visible = true;
                    _this.image64.visible = true;
                    _this.image65.visible = true;
                    _this.image66.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 85 && _this.image2.angle <= 89 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("265 DDD !!!!");
                _this.arc33.visible = true;
                _this.image = _this.arc33.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58]);
                _this.image.play(42);
                _this.time.events.add(1600, function () {
                    _this.image67.visible = true;
                    _this.image68.visible = true;
                    _this.image69.visible = true;
                    _this.image70.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 89 && _this.image2.angle <= 94 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("270 DDD !!!!");
                _this.arc33N.visible = true;
                _this.image = _this.arc33N.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]);
                _this.image.play(42);
                _this.time.events.add(1600, function () {
                    _this.image71.visible = true;
                    _this.image72.visible = true;
                    _this.image73.visible = true;
                    _this.image74.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 94 && _this.image2.angle <= 98 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("275 DDD !!!!");
                _this.arc35.visible = true;
                _this.image = _this.arc35.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]);
                _this.image.play(42);
                _this.time.events.add(1600, function () {
                    _this.image75.visible = true;
                    _this.image76.visible = true;
                    _this.image77.visible = true;
                    _this.image78.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 98 && _this.image2.angle <= 102 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("280 DDD !!!!");
                _this.arc37.visible = true;
                _this.image = _this.arc37.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]);
                _this.image.play(48);
                _this.time.events.add(1600, function () {
                    _this.image79.visible = true;
                    _this.image80.visible = true;
                    _this.image81.visible = true;
                    _this.image82.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 102 && _this.image2.angle <= 106 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("285 DDD !!!!");
                _this.arc37N.visible = true;
                _this.image = _this.arc37N.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]);
                _this.image.play(48);
                _this.time.events.add(1600, function () {
                    _this.image83.visible = true;
                    _this.image84.visible = true;
                    _this.image85.visible = true;
                    _this.image86.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 106 && _this.image2.angle <= 110 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("290 DDD !!!!");
                _this.arc39.visible = true;
                _this.image = _this.arc39.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65]);
                _this.image.play(48);
                _this.time.events.add(1600, function () {
                    _this.image87.visible = true;
                    _this.image88.visible = true;
                    _this.image89.visible = true;
                    _this.image90.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 110 && _this.image2.angle <= 114 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("295 DDD !!!!");
                _this.arc41.visible = true;
                _this.image = _this.arc41.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]);
                _this.image.play(48);
                _this.time.events.add(1600, function () {
                    _this.image91.visible = true;
                    _this.image92.visible = true;
                    _this.image93.visible = true;
                    _this.image94.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 114 && _this.image2.angle <= 118 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("300 DDD !!!!");
                _this.arc43.visible = true;
                _this.image = _this.arc43.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67]);
                _this.image.play(48);
                _this.time.events.add(1600, function () {
                    _this.image95.visible = true;
                    _this.image96.visible = true;
                    _this.image97.visible = true;
                    _this.image98.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 118 && _this.image2.angle <= 122 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("305 DDD !!!!");
                _this.arc45.visible = true;
                _this.image = _this.arc45.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68]);
                _this.image.play(54);
                _this.time.events.add(1600, function () {
                    _this.image99.visible = true;
                    _this.image100.visible = true;
                    _this.image101.visible = true;
                    _this.image102.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 122 && _this.image2.angle <= 130 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("310 DDD !!!!");
                _this.arc47.visible = true;
                _this.image = _this.arc47.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69]);
                _this.image.play(54);
                _this.time.events.add(1600, function () {
                    _this.image103.visible = true;
                    _this.image104.visible = true;
                    _this.image105.visible = true;
                    _this.image106.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 130 && _this.image2.angle <= 134 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("315 DDD !!!!");
                _this.arc49.visible = true;
                _this.image = _this.arc49.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69]);
                _this.image.play(54);
                _this.time.events.add(1600, function () {
                    _this.image107.visible = true;
                    _this.image108.visible = true;
                    _this.image109.visible = true;
                    _this.image110.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 134 && _this.image2.angle <= 138 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("320 DDD !!!!");
                _this.arc51.visible = true;
                _this.image = _this.arc51.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]);
                _this.image.play(54);
                _this.time.events.add(1600, function () {
                    _this.image111.visible = true;
                    _this.image112.visible = true;
                    _this.image113.visible = true;
                    _this.image114.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 138 && _this.image2.angle <= 144 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("325 DDD !!!!");
                _this.arc53.visible = true;
                _this.image = _this.arc53.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]);
                _this.image.play(54);
                _this.time.events.add(1600, function () {
                    _this.image115.visible = true;
                    _this.image116.visible = true;
                    _this.image117.visible = true;
                    _this.image118.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 144 && _this.image2.angle <= 151 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("330 DDD !!!!");
                _this.arc55.visible = true;
                _this.image = _this.arc55.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72]);
                _this.image.play(60);
                _this.time.events.add(1600, function () {
                    _this.image119.visible = true;
                    _this.image120.visible = true;
                    _this.image121.visible = true;
                    _this.image122.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 151 && _this.image2.angle <= 155 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("335 DDD !!!!");
                _this.arc57.visible = true;
                _this.image = _this.arc57.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73]);
                _this.image.play(60);
                _this.time.events.add(1700, function () {
                    _this.image123.visible = true;
                    _this.image124.visible = true;
                    _this.image125.visible = true;
                    _this.image126.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 155 && _this.image2.angle <= 162 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("340 DDD !!!!");
                _this.arc59.visible = true;
                _this.image = _this.arc59.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74]);
                _this.image.play(60);
                _this.time.events.add(1700, function () {
                    _this.image127.visible = true;
                    _this.image128.visible = true;
                    _this.image129.visible = true;
                    _this.image130.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 162 && _this.image2.angle <= 166 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("345 DDD !!!!");
                _this.arc61.visible = true;
                _this.image = _this.arc61.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]);
                _this.image.play(60);
                _this.time.events.add(1700, function () {
                    _this.image131.visible = true;
                    _this.image132.visible = true;
                    _this.image133.visible = true;
                    _this.image134.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 166 && _this.image2.angle <= 172 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("350 DDD !!!!");
                _this.arc63.visible = true;
                _this.image = _this.arc63.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76]);
                _this.image.play(60);
                _this.time.events.add(1700, function () {
                    _this.image135.visible = true;
                    _this.image136.visible = true;
                    _this.image137.visible = true;
                    _this.image138.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image2.angle > 172 && _this.image2.angle <= 176 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("355 DDD !!!!");
                _this.arc65.visible = true;
                _this.image = _this.arc65.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77]);
                _this.image.play(60);
                _this.time.events.add(1700, function () {
                    _this.image139.visible = true;
                    _this.image140.visible = true;
                    _this.image141.visible = true;
                    _this.image142.visible = true;
                    _this.correctAns();
                }, _this);
            }
            //* Left Side Validation
            else if (_this.image3.angle > 3 && _this.image3.angle <= 7 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("355 DDD");
                _this.arc66.visible = true;
                _this.image = _this.arc66.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78]);
                _this.image.play(60);

                _this.time.events.add(1600, function () {
                    _this.image139.visible = true;
                    _this.image140.visible = true;
                    _this.image141.visible = true;
                    _this.image142.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 7 && _this.image3.angle <= 12 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("...350 DDD !!!!");
                _this.arc64.visible = true;
                _this.image = _this.arc64.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77]);
                _this.image.play(60);
                _this.time.events.add(1600, function () {
                    _this.image135.visible = true;
                    _this.image136.visible = true;
                    _this.image137.visible = true;
                    _this.image138.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 12 && _this.image3.angle <= 17 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("345 DDD !!!");
                _this.arc62.visible = true;
                _this.image = _this.arc62.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76]);
                _this.image.play(60);
                _this.time.events.add(1600, function () {
                    _this.image131.visible = true;
                    _this.image132.visible = true;
                    _this.image133.visible = true;
                    _this.image134.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 17 && _this.image3.angle <= 22 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("340 DDD !!!!");
                _this.arc60.visible = true;
                _this.image = _this.arc60.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]);
                _this.image.play(60);
                _this.time.events.add(1800, function () {
                    _this.image127.visible = true;
                    _this.image128.visible = true;
                    _this.image129.visible = true;
                    _this.image130.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 22 && _this.image3.angle <= 27 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("335 DDD !!!!");
                _this.arc58.visible = true;
                _this.image = _this.arc58.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74]);
                _this.image.play(60);
                _this.time.events.add(1800, function () {
                    _this.image123.visible = true;
                    _this.image124.visible = true;
                    _this.image125.visible = true;
                    _this.image126.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 27 && _this.image3.angle <= 36 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("330 DDD !!!!");
                _this.arc56.visible = true;
                _this.image = _this.arc56.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73]);
                _this.image.play(60);
                _this.time.events.add(1800, function () {
                    _this.image119.visible = true;
                    _this.image120.visible = true;
                    _this.image121.visible = true;
                    _this.image122.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 36 && _this.image3.angle <= 41 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("325 DDD !!!!");
                _this.arc54.visible = true;
                _this.image = _this.arc54.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72]);
                _this.image.play(54);
                _this.time.events.add(1600, function () {
                    _this.image115.visible = true;
                    _this.image116.visible = true;
                    _this.image117.visible = true;
                    _this.image118.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 41 && _this.image3.angle <= 46 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("320 DDD !!!!");
                _this.arc52.visible = true;
                _this.image = _this.arc52.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]);
                _this.image.play(54);
                _this.time.events.add(1600, function () {
                    _this.image111.visible = true;
                    _this.image112.visible = true;
                    _this.image113.visible = true;
                    _this.image114.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 46 && _this.image3.angle <= 51 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("315 DDD !!!!");
                _this.arc50.visible = true;
                _this.image = _this.arc50.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]);
                _this.image.play(54);
                _this.time.events.add(1600, function () {
                    _this.image107.visible = true;
                    _this.image108.visible = true;
                    _this.image109.visible = true;
                    _this.image110.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 51 && _this.image3.angle <= 56 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("310 DDD !!!!");
                _this.arc48.visible = true;
                _this.image = _this.arc48.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69]);
                _this.image.play(54);
                _this.time.events.add(1600, function () {
                    _this.image103.visible = true;
                    _this.image104.visible = true;
                    _this.image105.visible = true;
                    _this.image106.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 56 && _this.image3.angle <= 60 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("305 DDD !!!!");
                _this.arc46.visible = true;
                _this.image = _this.arc46.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69]);
                _this.image.play(54);
                _this.time.events.add(1600, function () {
                    _this.image99.visible = true;
                    _this.image100.visible = true;
                    _this.image101.visible = true;
                    _this.image102.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 60 && _this.image3.angle <= 66 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("300 DDD !!!!");
                _this.arc44.visible = true;
                _this.image = _this.arc44.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68]);
                _this.image.play(48);
                _this.time.events.add(1600, function () {
                    _this.image95.visible = true;
                    _this.image96.visible = true;
                    _this.image97.visible = true;
                    _this.image98.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 66 && _this.image3.angle <= 69 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("295 DDD !!!!");
                _this.arc42.visible = true;
                _this.image = _this.arc42.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67]);
                _this.image.play(48);
                _this.time.events.add(1600, function () {
                    _this.image91.visible = true;
                    _this.image92.visible = true;
                    _this.image93.visible = true;
                    _this.image94.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 69 && _this.image3.angle <= 76 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("290 DDD !!!!");
                _this.arc40.visible = true;
                _this.image = _this.arc40.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]);
                _this.image.play(48);
                _this.time.events.add(1600, function () {
                    _this.image87.visible = true;
                    _this.image88.visible = true;
                    _this.image89.visible = true;
                    _this.image90.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 76 && _this.image3.angle <= 78 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("285 DDD !!!!");
                _this.arc38N.visible = true;
                _this.image = _this.arc38N.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65]);
                _this.image.play(48);
                _this.time.events.add(1600, function () {
                    _this.image83.visible = true;
                    _this.image84.visible = true;
                    _this.image85.visible = true;
                    _this.image86.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 78 && _this.image3.angle <= 84 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("280 DDD !!!!");
                _this.arc38.visible = true;
                _this.image = _this.arc38.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]);
                _this.image.play(48);
                _this.time.events.add(1600, function () {
                    _this.image79.visible = true;
                    _this.image80.visible = true;
                    _this.image81.visible = true;
                    _this.image82.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 84 && _this.image3.angle <= 87 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("275 DDD !!!!");
                _this.arc36.visible = true;
                _this.image = _this.arc36.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]);
                _this.image.play(42);
                _this.time.events.add(1600, function () {
                    _this.image75.visible = true;
                    _this.image76.visible = true;
                    _this.image77.visible = true;
                    _this.image78.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 87 && _this.image3.angle <= 93 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("270 DDD !!!!");
                _this.arc34N.visible = true;
                _this.image = _this.arc34N.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]);
                _this.image.play(42);
                _this.time.events.add(1600, function () {
                    _this.image71.visible = true;
                    _this.image72.visible = true;
                    _this.image73.visible = true;
                    _this.image74.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 93 && _this.image3.angle <= 95 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("265 DDD !!!!");
                _this.arc34.visible = true;
                _this.image = _this.arc34.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]);
                _this.image.play(42);
                _this.time.events.add(1600, function () {
                    _this.image67.visible = true;
                    _this.image68.visible = true;
                    _this.image69.visible = true;
                    _this.image70.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 95 && _this.image3.angle <= 102 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("260 DDD !!!!");
                _this.arc32.visible = true;
                _this.image = _this.arc32.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58]);
                _this.image.play(42);
                _this.time.events.add(1600, function () {
                    _this.image63.visible = true;
                    _this.image64.visible = true;
                    _this.image65.visible = true;
                    _this.image66.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 102 && _this.image3.angle <= 104 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("255 DDD !!!!");
                _this.arc30.visible = true;
                _this.image = _this.arc30.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
                _this.image.play(42);
                _this.time.events.add(1600, function () {
                    _this.image59.visible = true;
                    _this.image60.visible = true;
                    _this.image61.visible = true;
                    _this.image62.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 104 && _this.image3.angle <= 111 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("250 DDD !!!!");
                _this.arc28.visible = true;
                _this.image = _this.arc28.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56]);
                _this.image.play(36);
                _this.time.events.add(1600, function () {
                    _this.image55.visible = true;
                    _this.image56.visible = true;
                    _this.image57.visible = true;
                    _this.image58.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 111 && _this.image3.angle <= 113 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("245 DDD !!!!");
                _this.arc26.visible = true;
                _this.image = _this.arc26.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]);
                _this.image.play(36);
                _this.time.events.add(1600, function () {
                    _this.image51.visible = true;
                    _this.image52.visible = true;
                    _this.image53.visible = true;
                    _this.image54.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 113 && _this.image3.angle <= 120 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("240 DDD !!!!");
                _this.arc24.visible = true;
                _this.image = _this.arc24.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54]);
                _this.image.play(36);
                _this.time.events.add(1600, function () {
                    _this.image47.visible = true;
                    _this.image48.visible = true;
                    _this.image49.visible = true;
                    _this.image50.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 120 && _this.image3.angle <= 122 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("235 DDD !!!!");
                _this.arc22.visible = true;
                _this.image = _this.arc22.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]);
                _this.image.play(36);
                _this.time.events.add(1500, function () {
                    _this.image43.visible = true;
                    _this.image44.visible = true;
                    _this.image45.visible = true;
                    _this.image46.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 122 && _this.image3.angle <= 128 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("230 DDD !!!!");
                _this.arc20.visible = true;
                _this.image = _this.arc20.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]);
                _this.image.play(36);
                _this.time.events.add(1500, function () {
                    _this.image39.visible = true;
                    _this.image40.visible = true;
                    _this.image41.visible = true;
                    _this.image42.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 128 && _this.image3.angle <= 133 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("225 DDD !!!!");
                _this.arc18.visible = true;
                _this.image = _this.arc18.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]);
                _this.image.play(30);
                _this.time.events.add(1500, function () {
                    _this.imageN35.visible = true;
                    _this.imageN36.visible = true;
                    _this.imageN37.visible = true;
                    _this.imageN38.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 133 && _this.image3.angle <= 139 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("220 DDD !!!!");
                _this.arc16.visible = true;
                _this.image = _this.arc16.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]);
                _this.image.play(30);
                _this.time.events.add(1500, function () {
                    _this.image35.visible = true;
                    _this.image36.visible = true;
                    _this.image37.visible = true;
                    _this.image38.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 139 && _this.image3.angle <= 142 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("215 DDD !!!!");
                _this.arc14.visible = true;
                _this.image = _this.arc14.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]);
                _this.image.play(30);
                _this.time.events.add(1500, function () {
                    _this.image31.visible = true;
                    _this.image32.visible = true;
                    _this.image33.visible = true;
                    _this.image34.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 142 && _this.image3.angle <= 147 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("210 DDD !!!!");
                _this.arc12.visible = true;
                _this.image = _this.arc12.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]);
                _this.image.play(30);
                _this.time.events.add(1500, function () {
                    _this.image27.visible = true;
                    _this.image28.visible = true;
                    _this.image29.visible = true;
                    _this.image30.visible = true;
                    _this.correctAns();
                }, _this);

            }
            else if (_this.image3.angle > 147 && _this.image3.angle <= 153 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("205 DDD !!!!");
                _this.arc10.visible = true;
                _this.image = _this.arc10.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]);
                _this.image.play(30);
                _this.time.events.add(1500, function () {
                    _this.image23.visible = true;
                    _this.image24.visible = true;
                    _this.image25.visible = true;
                    _this.image26.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 153 && _this.image3.angle <= 159 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("200 DDD !!!!");
                _this.arc8.visible = true;
                _this.image = _this.arc8.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]);
                _this.image.play(30);
                _this.time.events.add(1500, function () {
                    _this.image19.visible = true;
                    _this.image20.visible = true;
                    _this.image21.visible = true;
                    _this.image22.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 159 && _this.image3.angle <= 164 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("195 DDD !!!");
                _this.arc6.visible = true;
                _this.image = _this.arc6.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]);
                _this.image.play(30);
                _this.time.events.add(1500, function () {
                    _this.image15.visible = true;
                    _this.image16.visible = true;
                    _this.image17.visible = true;
                    _this.image18.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 164 && _this.image3.angle <= 170 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.arc4.visible = true;
                _this.image = _this.arc4.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]);
                _this.image.play(30);
                console.log("...190 DDD !!!!");
                _this.time.events.add(1500, function () {
                    _this.image11.visible = true;
                    _this.image12.visible = true;
                    _this.image13.visible = true;
                    _this.image14.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 170 && _this.image3.angle <= 176 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("185 DDD !!!!");
                _this.arc2.visible = true;
                _this.image = _this.arc2.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]);
                _this.image.play(30);
                _this.time.events.add(1400, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                    _this.image10.visible = true;
                    _this.correctAns();
                    //_this.imageD.visible=true; 
                }, _this);
            }
            else {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 2) {
            console.log("2nd Q")
            if (_this.image2.angle > -168 && _this.image2.angle < -162 && _this.image3.angle == -180) {
                _this.image2.frame = 1;
                _this.image3.frame = 1;
                _this.image10.visible = true;
                _this.image = _this.image10.animations.add('play', [11, 12]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image11.visible = true;
                    _this.image12.visible = true;
                    _this.image13.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -18 && _this.image3.angle < -12 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                }, _this);
                _this.correctAns();
            }

            else {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 3) { //30 d
            if (_this.image3.angle > -35 && _this.image3.angle < -31 && _this.image2.angle == 0) {
                _this.image2.frame = 1;
                _this.image3.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12, 13]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle > -149 && _this.image2.angle < -144 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image10.visible = true;
                _this.image = _this.image10.animations.add('play', [11, 12, 13, 14]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image11.visible = true;
                    _this.image12.visible = true;
                    _this.image13.visible = true;
                }, _this);
                _this.correctAns();
            }

            else {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 4) {
            if (_this.image2.angle > -70 && _this.image2.angle < -66 && _this.image3.angle == -180) {
                console.log("hloo")
                _this.image2.frame = 1;
                _this.image3.frame = 1;
                _this.image11.visible = true;
                _this.image = _this.image11.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image12.visible = true;
                    _this.image13.visible = true;
                    _this.image14.visible = true;
                    _this.image15.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -118 && _this.image3.angle < -112 && _this.image2.angle == 0) {
                console.log("hiiii")
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                    _this.image10.visible = true;
                }, _this);
                _this.correctAns();
            }

            else {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 5) {
            if (_this.image3.angle > -133 && _this.image3.angle < -127 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                    _this.image10.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle > -53 && _this.image2.angle < -47 && _this.image3.angle == -180) {
                _this.image2.frame = 1;
                _this.image3.frame = 1;
                _this.image11.visible = true;
                _this.image = _this.image11.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image12.visible = true;
                    _this.image13.visible = true;
                    _this.image14.visible = true;
                    _this.image15.visible = true;
                }, _this);
                _this.correctAns();
            }

            else {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 6) {
            if (_this.image2.angle > -38 && _this.image2.angle < -32 && _this.image3.angle == -180) {
                _this.image2.frame = 1;
                _this.image3.frame = 1;
                _this.image11.visible = true;
                _this.image = _this.image11.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image12.visible = true;
                    _this.image13.visible = true;
                    _this.image14.visible = true;
                    _this.image15.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -148 && _this.image3.angle < -142 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                    _this.image10.visible = true;
                }, _this);
                _this.correctAns();
            }

            else {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 7) {
            if (_this.image3.angle > -48 && _this.image3.angle < -42 && _this.image2.angle == 0) {
                _this.image2.frame = 1;
                _this.image3.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12, 13, 14, 15, 16]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle > -138 && _this.image2.angle < -132 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image10.visible = true;
                _this.image = _this.image10.animations.add('play', [11, 12, 13, 14, 15, 16, 17]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image11.visible = true;
                    _this.image12.visible = true;
                    _this.image13.visible = true;
                }, _this);
                _this.correctAns();
            }
            else {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 8 || _this.questioNo == 16) {
            if (_this.image3.angle > -93 && _this.image3.angle < -87 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                }, _this);
                _this.correctAns();
            }

            else if (_this.image2.angle > -93 && _this.image2.angle < -87 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image10.visible = true;
                _this.image = _this.image10.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image11.visible = true;
                    _this.image12.visible = true;
                    _this.image13.visible = true;
                }, _this);
                _this.correctAns();
            }
            else {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 9) {
            if (_this.image3.angle > -7 && _this.image3.angle < -3 && _this.image2.angle == 0) {
                // * -4 -5 -6 //* 5
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image7.visible = true; //5
                    _this.image8.visible = true;
                }, _this);
                _this.correctAns();
            }

            else if (_this.image2.angle > -178 && _this.image2.angle < -172 && _this.image3.angle == -180) {    // 5
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image9.visible = true;
                _this.image = _this.image9.animations.add('play', [11, 12]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image10.visible = true;
                    _this.image11.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -13 && _this.image3.angle < -7 && _this.image2.angle == 0) {   // 10
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image12.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12, 13]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image13.visible = true;
                    _this.image14.visible = true;
                    _this.image15.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle > -173 && _this.image2.angle < -167 && _this.image3.angle == -180) {   //10
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image16.visible = true;
                _this.image = _this.image16.animations.add('play', [11, 12, 13]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image17.visible = true;
                    _this.image18.visible = true;
                    _this.image19.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -18 && _this.image3.angle < -12 && _this.image2.angle == 0) {   //15
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image20.visible = true;
                _this.image = _this.image20.animations.add('play', [11, 12, 13, 14]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image21.visible = true;
                    _this.image22.visible = true;
                    _this.image23.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle > -168 && _this.image2.angle < -162 && _this.image3.angle == -180) {   //15
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image24.visible = true;
                _this.image = _this.image24.animations.add('play', [11, 12, 13, 14]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image25.visible = true;
                    _this.image26.visible = true;
                    _this.image27.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -26 && _this.image3.angle < -19 && _this.image2.angle == 0) {   //20
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image28.visible = true;
                _this.image = _this.image28.animations.add('play', [11, 12, 13]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image29.visible = true;
                    _this.image30.visible = true;
                    _this.image31.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle > -160 && _this.image2.angle < -152 && _this.image3.angle == -180) {   //20
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image32.visible = true;
                _this.image = _this.image32.animations.add('play', [11, 12, 13, 14]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image33.visible = true;
                    _this.image34.visible = true;
                    _this.image35.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -31 && _this.image3.angle <= -26 && _this.image2.angle == 0) {   //25
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image36.visible = true;
                _this.image = _this.image36.animations.add('play', [11, 12, 13, 14]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image37.visible = true;
                    _this.image38.visible = true;
                    _this.image39.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -152 && _this.image2.angle < -149 && _this.image3.angle == -180) {   //25
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image40.visible = true;
                _this.image = _this.image40.animations.add('play', [11, 12, 13, 14]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image400.visible = true;
                    _this.image41.visible = true;
                    _this.image42.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -37 && _this.image3.angle <= -31 && _this.image2.angle == 0) {   //30
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image43.visible = true;
                _this.image = _this.image43.animations.add('play', [11, 12, 13, 14]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image44.visible = true;
                    _this.image45.visible = true;
                    _this.image46.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -149 && _this.image2.angle < -144 && _this.image3.angle == -180) {   //30
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image47.visible = true;
                _this.image = _this.image47.animations.add('play', [11, 12, 13, 14]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image48.visible = true;
                    _this.image49.visible = true;
                    _this.image50.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -39 && _this.image3.angle <= -35 && _this.image2.angle == 0) {   //35
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image51.visible = true;
                _this.image = _this.image51.animations.add('play', [11, 12, 13, 14, 15]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image52.visible = true;
                    _this.image53.visible = true;
                    _this.image54.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -144 && _this.image2.angle < -139 && _this.image3.angle == -180) {   //35
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image55.visible = true;
                _this.image = _this.image55.animations.add('play', [11, 12, 13, 14, 15]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image56.visible = true;
                    _this.image57.visible = true;
                    _this.image58.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -47 && _this.image3.angle <= -30 && _this.image2.angle == 0) {   //40
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image59.visible = true;
                _this.image = _this.image59.animations.add('play', [11, 12, 13, 14, 15]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image60.visible = true;
                    _this.image61.visible = true;
                    _this.image62.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -139 && _this.image2.angle < -132 && _this.image3.angle == -180) {   //40
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image63.visible = true;
                _this.image = _this.image63.animations.add('play', [11, 12, 13, 14, 15, 16]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image64.visible = true;
                    _this.image65.visible = true;
                    _this.image66.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -52 && _this.image3.angle <= -47 && _this.image2.angle == 0) {   //45
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image67.visible = true;
                _this.image = _this.image67.animations.add('play', [11, 12, 13, 14, 15, 16]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image68.visible = true;
                    _this.image69.visible = true;
                    _this.image70.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -132 && _this.image2.angle < -128 && _this.image3.angle == -180) {   //45
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image71.visible = true;
                _this.image = _this.image71.animations.add('play', [11, 12, 13, 14, 15, 16, 17]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image72.visible = true;
                    _this.image73.visible = true;
                    _this.image74.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -56 && _this.image3.angle <= -52 && _this.image2.angle == 0) {   //50
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image75.visible = true;
                _this.image = _this.image75.animations.add('play', [11, 12, 13, 14, 15, 16]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image76.visible = true;
                    _this.image77.visible = true;
                    _this.image78.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -128 && _this.image2.angle < -121 && _this.image3.angle == -180) {   //50
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image79.visible = true;
                _this.image = _this.image79.animations.add('play', [11, 12, 13, 14, 15, 16, 17]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image80.visible = true;
                    _this.image81.visible = true;
                    _this.image82.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -60 && _this.image3.angle <= -56 && _this.image2.angle == 0) {   //55
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image83.visible = true;
                _this.image = _this.image83.animations.add('play', [11, 12, 13, 14, 15, 16, 17]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image84.visible = true;
                    _this.image85.visible = true;
                    _this.image86.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -121 && _this.image2.angle < -118 && _this.image3.angle == -180) {   //55
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image87.visible = true;
                _this.image = _this.image87.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image88.visible = true;
                    _this.image89.visible = true;
                    _this.image90.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -66 && _this.image3.angle <= -60 && _this.image2.angle == 0) {   //60
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image91.visible = true;
                _this.image = _this.image91.animations.add('play', [11, 12, 13, 14, 15, 16, 17]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image92.visible = true;
                    _this.image93.visible = true;
                    _this.image94.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -118 && _this.image2.angle < -113 && _this.image3.angle == -180) {   //60
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image95.visible = true;
                _this.image = _this.image95.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image96.visible = true;
                    _this.image97.visible = true;
                    _this.image98.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -70 && _this.image3.angle <= -66 && _this.image2.angle == 0) {   //65
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image99.visible = true;
                _this.image = _this.image99.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image100.visible = true;
                    _this.image101.visible = true;
                    _this.image102.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -113 && _this.image2.angle < -109 && _this.image3.angle == -180) {   //65
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image103.visible = true;
                _this.image = _this.image103.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image104.visible = true;
                    _this.image105.visible = true;
                    _this.image106.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -76 && _this.image3.angle <= -70 && _this.image2.angle == 0) {   //70
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image107.visible = true;
                _this.image = _this.image107.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image108.visible = true;
                    _this.image109.visible = true;
                    _this.image110.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -109 && _this.image2.angle < -104 && _this.image3.angle == -180) {   //70
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image111.visible = true;
                _this.image = _this.image111.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image112.visible = true;
                    _this.image113.visible = true;
                    _this.image114.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -79 && _this.image3.angle <= -76 && _this.image2.angle == 0) {   //75
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image115.visible = true;
                _this.image = _this.image115.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image116.visible = true;
                    _this.image117.visible = true;
                    _this.image118.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -104 && _this.image2.angle < -100 && _this.image3.angle == -180) {   //75
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image119.visible = true;
                _this.image = _this.image119.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image120.visible = true;
                    _this.image121.visible = true;
                    _this.image122.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -83 && _this.image3.angle <= -79 && _this.image2.angle == 0) { //80
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image123.visible = true;
                _this.image = _this.image123.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image124.visible = true;
                    _this.image125.visible = true;
                    _this.image126.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -100 && _this.image2.angle < -95 && _this.image3.angle == -180) { //80
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image127.visible = true;
                _this.image = _this.image127.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image128.visible = true;
                    _this.image129.visible = true;
                    _this.image130.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -87 && _this.image3.angle <= -83 && _this.image2.angle == 0) { //85
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image131.visible = true;
                _this.image = _this.image131.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image132.visible = true;
                    _this.image133.visible = true;
                    _this.image134.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -95 && _this.image2.angle < -92 && _this.image3.angle == -180) { //85
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image135.visible = true;
                _this.image = _this.image135.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image136.visible = true;
                    _this.image137.visible = true;
                    _this.image138.visible = true;
                }, _this);
                _this.correctAns();//
            }
            else {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 10) {
            console.log("hello")
            if (_this.image3.angle > -95 && _this.image3.angle <= -92 && _this.image2.angle == 0) {
                console.log('1', "95")
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                }, _this);
                _this.correctAns();
            }

            else if (_this.image2.angle >= -88 && _this.image2.angle < -82 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image10.visible = true;
                _this.image = _this.image10.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image11.visible = true;
                    _this.image12.visible = true;
                    _this.image13.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -101 && _this.image3.angle <= -95 && _this.image2.angle == 0) {
                console.log('3, 100')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image14.visible = true;
                _this.image = _this.image14.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image15.visible = true;
                    _this.image16.visible = true;
                    _this.image17.visible = true;
                    _this.image18.visible = true;
                }, _this);
                _this.correctAns();
            }

            else if (_this.image2.angle > -83 && _this.image2.angle < -78 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image19.visible = true;
                _this.image = _this.image19.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image20.visible = true;
                    _this.image21.visible = true;
                    _this.image22.visible = true;
                    _this.image23.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -104 && _this.image3.angle <= -101 && _this.image2.angle == 0) {
                console.log('5, 105')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image24.visible = true;
                _this.image = _this.image24.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image25.visible = true;
                    _this.image26.visible = true;
                    _this.image27.visible = true;
                    _this.image28.visible = true;
                }, _this);
                _this.correctAns();
            }

            else if (_this.image2.angle >= -78 && _this.image2.angle < -74 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image29.visible = true;
                _this.image = _this.image29.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image30.visible = true;
                    _this.image31.visible = true;
                    _this.image32.visible = true;
                    _this.image33.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -110 && _this.image3.angle <= -104 && _this.image2.angle == 0) {
                console.log('7, 110')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image34.visible = true;
                _this.image = _this.image34.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image35.visible = true;
                    _this.image36.visible = true;
                    _this.image37.visible = true;
                    _this.image38.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -74 && _this.image2.angle < -69 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image39.visible = true;
                _this.image = _this.image39.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image40.visible = true;
                    _this.image41.visible = true;
                    _this.image42.visible = true;
                    _this.image43.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -114 && _this.image3.angle <= -110 && _this.image2.angle == 0) {
                console.log('9, 115')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image44.visible = true;
                _this.image = _this.image44.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image45.visible = true;
                    _this.image46.visible = true;
                    _this.image47.visible = true;
                    _this.image48.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -69 && _this.image2.angle < -65 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image49.visible = true;
                _this.image = _this.image49.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image50.visible = true;
                    _this.image51.visible = true;
                    _this.image52.visible = true;
                    _this.image53.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -120 && _this.image3.angle <= -114 && _this.image2.angle == 0) {
                console.log('11, 120')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image54.visible = true;
                _this.image = _this.image54.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image55.visible = true;
                    _this.image56.visible = true;
                    _this.image57.visible = true;
                    _this.image58.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -65 && _this.image2.angle < -61 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image59.visible = true;
                _this.image = _this.image59.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image60.visible = true;
                    _this.image61.visible = true;
                    _this.image62.visible = true;
                    _this.image63.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -123 && _this.image3.angle <= -120 && _this.image2.angle == 0) {
                console.log('13, 125')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image64.visible = true;
                _this.image = _this.image64.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image65.visible = true;
                    _this.image66.visible = true;
                    _this.image67.visible = true;
                    _this.image68.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -61 && _this.image2.angle < -56 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image69.visible = true;
                _this.image = _this.image69.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image70.visible = true;
                    _this.image71.visible = true;
                    _this.image72.visible = true;
                    _this.image73.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -129 && _this.image3.angle <= -123 && _this.image2.angle == 0) {
                console.log('15, 130')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image74.visible = true;
                _this.image = _this.image74.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image75.visible = true;
                    _this.image76.visible = true;
                    _this.image77.visible = true;
                    _this.image78.visible = true;
                }, _this);
                _this.correctAns();
            }

            else if (_this.image2.angle >= -56 && _this.image2.angle < -51 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image79.visible = true;
                _this.image = _this.image79.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image80.visible = true;
                    _this.image81.visible = true;
                    _this.image82.visible = true;
                    _this.image83.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -133 && _this.image3.angle <= -129 && _this.image2.angle == 0) {
                console.log('17, 135')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image84.visible = true;
                _this.image = _this.image84.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image85.visible = true;
                    _this.image86.visible = true;
                    _this.image87.visible = true;
                    _this.image88.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -51 && _this.image2.angle < -45 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image89.visible = true;
                _this.image = _this.image89.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image90.visible = true;
                    _this.image91.visible = true;
                    _this.image92.visible = true;
                    _this.image93.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -140 && _this.image3.angle <= -133 && _this.image2.angle == 0) {
                console.log('19, 140')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image94.visible = true;
                _this.image = _this.image94.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image95.visible = true;
                    _this.image96.visible = true;
                    _this.image97.visible = true;
                    _this.image98.visible = true;
                }, _this);
                _this.correctAns();
            }

            else if (_this.image2.angle >= -45 && _this.image2.angle < -40 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image99.visible = true;
                _this.image = _this.image99.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image100.visible = true;
                    _this.image101.visible = true;
                    _this.image102.visible = true;
                    _this.image103.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -144 && _this.image3.angle <= -140 && _this.image2.angle == 0) {
                console.log('21, 145')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image104.visible = true;
                _this.image = _this.image104.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image105.visible = true;
                    _this.image106.visible = true;
                    _this.image107.visible = true;
                    _this.image108.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -40 && _this.image2.angle < -35 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image109.visible = true;
                _this.image = _this.image109.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image110.visible = true;
                    _this.image111.visible = true;
                    _this.image112.visible = true;
                    _this.image113.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -151 && _this.image3.angle <= -144 && _this.image2.angle == 0) {
                console.log('23, 150')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image114.visible = true;
                _this.image = _this.image114.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image115.visible = true;
                    _this.image116.visible = true;
                    _this.image117.visible = true;
                    _this.image118.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -35 && _this.image2.angle < -30 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image119.visible = true;
                _this.image = _this.image119.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image120.visible = true;
                    _this.image121.visible = true;
                    _this.image122.visible = true;
                    _this.image123.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -154 && _this.image3.angle <= -151 && _this.image2.angle == 0) {
                console.log('25, 155')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image124.visible = true;
                _this.image = _this.image124.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image125.visible = true;
                    _this.image126.visible = true;
                    _this.image127.visible = true;
                    _this.image128.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -30 && _this.image2.angle < -24 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image129.visible = true;
                _this.image = _this.image129.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image130.visible = true;
                    _this.image131.visible = true;
                    _this.image132.visible = true;
                    _this.image133.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -161 && _this.image3.angle <= -154 && _this.image2.angle == 0) {
                console.log('27, 160')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image134.visible = true;
                _this.image = _this.image134.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image135.visible = true;
                    _this.image136.visible = true;
                    _this.image137.visible = true;
                    _this.image138.visible = true;
                }, _this);
                _this.correctAns();
            }

            else if (_this.image2.angle >= -24 && _this.image2.angle < -18 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image139.visible = true;
                _this.image = _this.image139.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image140.visible = true;
                    _this.image141.visible = true;
                    _this.image142.visible = true;
                    _this.image143.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -165 && _this.image3.angle <= -161 && _this.image2.angle == 0) {
                console.log('29, 165')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image144.visible = true;
                _this.image = _this.image144.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image145.visible = true;
                    _this.image146.visible = true;
                    _this.image147.visible = true;
                    _this.image148.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -18 && _this.image2.angle < -13 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image149.visible = true;
                _this.image = _this.image149.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image150.visible = true;
                    _this.image151.visible = true;
                    _this.image152.visible = true;
                    _this.image153.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -173 && _this.image3.angle <= -165 && _this.image2.angle == 0) {
                console.log('31, 170')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image154.visible = true;
                _this.image = _this.image154.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image155.visible = true;
                    _this.image156.visible = true;
                    _this.image157.visible = true;
                    _this.image158.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -13 && _this.image2.angle < -7 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image159.visible = true;
                _this.image = _this.image159.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image160.visible = true;
                    _this.image161.visible = true;
                    _this.image162.visible = true;
                    _this.image163.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > -176 && _this.image3.angle <= -173 && _this.image2.angle == 0) {
                console.log('33, 175')
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image164.visible = true;
                _this.image = _this.image164.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image165.visible = true;
                    _this.image166.visible = true;
                    _this.image167.visible = true;
                    _this.image168.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image2.angle >= -7 && _this.image2.angle < -3 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image169.visible = true;
                _this.image = _this.image169.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
                _this.image.play(10);
                _this.time.events.add(1500, function () {
                    _this.image170.visible = true;
                    _this.image171.visible = true;
                    _this.image172.visible = true;
                    _this.image173.visible = true;
                }, _this);
                _this.correctAns();
            }
            else {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 11 || _this.questioNo == 17) {
            //* 360 //*validating right side needle
            if ((_this.image3.angle == -180 || _this.image3.angle >= -180 && _this.image3.angle <= -177) && (_this.image2.angle >= -180 && _this.image2.angle <= -177) || (_this.image2.angle >= 177 && _this.image2.angle <= 179.95))//&& _this.image2.angle <= 179
            {
                console.log("1 Anss..!!!!!!!!!!!!");
                console.log(_this.image2.angle);
                _this.image2.frame = 1;
                _this.image3.frame = 1;
                _this.image10.visible = true;
                _this.image = _this.image10.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]); //21,22,23,24,25,26,27,28,29,30
                _this.image.play(30);

                _this.image.onComplete.add(function () {
                    _this.imagereverseAngle.visible = true;
                    _this.leftReverse = _this.imagereverseAngle.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
                    _this.leftReverse.play(30);
                    _this.image11.visible = true;
                    _this.image12.visible = true;
                    _this.imagefirstZero.visible = true;
                    _this.image13.visible = true;
                    _this.correctAns();
                })
            }
            else if ((_this.image3.angle == -180 || _this.image3.angle >= 177 && _this.image3.angle <= 179.95) && (_this.image2.angle >= -180 && _this.image2.angle <= -177) || (_this.image2.angle >= 177 && _this.image2.angle <= 179.95))//&& _this.image2.angle <= 179
            {
                console.log("1 Anss..!!!!!!!!!!!!");
                console.log(_this.image2.angle);
                _this.image2.frame = 1;
                _this.image3.frame = 1;
                _this.image10.visible = true;
                _this.image = _this.image10.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]); //21,22,23,24,25,26,27,28,29,30
                _this.image.play(30);

                _this.image.onComplete.add(function () {
                    _this.imagereverseAngle.visible = true;
                    _this.leftReverse = _this.imagereverseAngle.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
                    _this.leftReverse.play(30);
                    _this.image11.visible = true;
                    _this.image12.visible = true;
                    _this.imagefirstZero.visible = true;
                    _this.image13.visible = true;
                    _this.correctAns();
                })
            }
            //* validating left side needle //
            else if ((_this.image2.angle == 0 || _this.image2.angle >= 0 && _this.image2.angle <= 3) && (_this.image3.angle >= 0 && _this.image3.angle <= 3) || (_this.image3.angle > -2 && _this.image3.angle <= 0))//&& _this.image2.angle <= 179
            {
                console.log("Both Working..!!!!!!!!!!!!");
                console.log(_this.image2.angle);
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28.29, 30]); //21,22,23,24,25,26,27,28.29,30 
                _this.image.play(30);

                _this.image.onComplete.add(function () {
                    _this.imagerevAngle.visible = true;
                    _this.imagerevse = _this.imagerevAngle.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28.29, 30]);
                    _this.imagerevse.play(30);
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.imagezero.visible = true;
                    _this.image9.visible = true;
                    _this.correctAns();
                })
            }
            else if ((_this.image2.angle == 0 || _this.image2.angle > -2 && _this.image2.angle <= 0) && (_this.image3.angle >= 0 && _this.image3.angle <= 3) || (_this.image3.angle > -2 && _this.image3.angle <= 0))//&& _this.image2.angle <= 179
            {
                console.log("Both Working..!!!!!!!!!!!!");
                console.log(_this.image2.angle);
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28.29, 30]); //21,22,23,24,25,26,27,28.29,30 
                _this.image.play(30);

                _this.image.onComplete.add(function () {
                    _this.imagerevAngle.visible = true;
                    _this.imagerevse = _this.imagerevAngle.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28.29, 30]);
                    _this.imagerevse.play(30);
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.imagezero.visible = true;
                    _this.image9.visible = true;
                    _this.correctAns();
                })
            }
            else {
                console.log("wrongg")
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 12 || _this.questioNo == 15) {
            if (_this.image3.angle > -179.7 && _this.image3.angle < -177 && _this.image2.angle > -3 && _this.image2.angle < 3) {
                // _this.image2.angle == 0 && _this.image3.angle == -180
                console.log("1 Anss") //_this.image2.angle >- 355 && _this.image2.angle < -5
                console.log(_this.image2.angle)
                _this.image2.frame = 1;
                _this.image3.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]); //21,22,23,24,25,26,27,28,29,30
                _this.image.play(10);

                _this.time.events.add(1800, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.imagezero.visible = true;
                    _this.image9.visible = true;
                }, _this);
                _this.correctAns();
            }//_this.image3.angle > 175 && _this.image3.angle < 185
            else if (_this.image2.angle > -3 && _this.image2.angle < 3 && _this.image3.angle == -180) {
                //_this.image3.angle > -175 && _this.image3.angle < -185 && _this.image2.angle ==0
                console.log("2 Anss")
                console.log(_this.image2.angle)
                console.log(_this.image3.angle)
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28.29, 30]); //21,22,23,24,25,26,27,28.29,30 
                _this.image.play(10);

                _this.time.events.add(1800, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.imagezero.visible = true;
                    _this.image9.visible = true;
                }, _this);
                _this.correctAns();
            }
            else if (_this.image3.angle > 177 && _this.image3.angle < 179.5 && _this.image2.angle > -3 && _this.image2.angle < 3) {
                console.log("## 3 Anss")
                console.log(_this.image2.angle)
                console.log(_this.image3.angle)
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                _this.image6.visible = true;
                _this.image = _this.image6.animations.add('play', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28.29, 30]); //21,22,23,24,25,26,27,28.29,30 
                _this.image.play(10);

                _this.time.events.add(1800, function () {
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.imagezero.visible = true;
                    _this.image9.visible = true;
                }, _this);
                _this.correctAns();
            }
            else {
                console.log("wrongg")
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 13) {
            if (_this.image2.angle > 132 && _this.image2.angle <= 137 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("320 DDD !!!! 1");
                _this.arc1.visible = true;
                _this.image = _this.arc1.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]);
                _this.image.play(54);
                _this.time.events.add(1600, function () {
                    _this.image6.visible = true;
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 40 && _this.image3.angle <= 46 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("320 DDD !!!! 2");
                _this.arc2.visible = true;
                _this.image = _this.arc2.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]);
                _this.image.play(54);
                _this.time.events.add(1600, function () {
                    _this.image6.visible = true;
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else {
                console.log("wrongg")
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
        }
        else if (_this.questioNo == 14) {
            if (_this.image2.angle > 97 && _this.image2.angle <= 102 && _this.image3.angle == -180) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("280 DDD !!!! 1");
                _this.arc1.visible = true;
                _this.image = _this.arc1.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]);
                _this.image.play(48);
                _this.time.events.add(1600, function () {
                    _this.image6.visible = true;
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else if (_this.image3.angle > 77 && _this.image3.angle <= 82 && _this.image2.angle == 0) {
                _this.image3.frame = 1;
                _this.image2.frame = 1;
                console.log("280 DDD !!!! 2");
                _this.arc2.visible = true;
                _this.image = _this.arc2.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]);
                _this.image.play(48);
                _this.time.events.add(1600, function () {
                    _this.image6.visible = true;
                    _this.image7.visible = true;
                    _this.image8.visible = true;
                    _this.image9.visible = true;
                    _this.correctAns();
                }, _this);
            }
            else {
                console.log("wrongg")
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }

        }
    },

    removeCelebration: function () {

        console.log("removeCeleb");
        console.log("no" + _this.no11);
        _this.correct = 0;

        _this.no11++;

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

        if (_this.no11 < 6) {
            _this.wrong = true;
            // _this.timer1.stop();
            _this.slideGrp.destroy();
            _this.time.events.add(1000, function () {
                _this.getQuestion();
            }, _this);
        }
        else {
            _this.stopvoice();
            _this.timer1 = null;
            _this.countIncrement = 0;
            _this.counterForTimer = null;
            //_this.state.start('score', true, false);
            _this.state.start('score', true, false, gameID, _this.microConcepts);
        }
    },

    correctAns: function (target) {
        _this.stopvoice();
        // target.events.onInputDown.removeAll();
        _this.speaker.inputEnabled = false;
        // _this.rightmark.inputEnabled=false;

        _this.noofAttempts++;
        //  _this.interactEvent = 
        // { 
        //     id_game_play: _this.savedVar, 
        //     id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
        //     date_time_event: _this.currentTime, 
        //     event_type: "drag", 
        //     res_id: target,
        //     access_token: window.acctkn 
        // }       
        if (_this.timer) {
            _this.timer.stop();
            _this.timer = null;
        }

        if (_this.timer1) {
            _this.timer1.stop();
            _this.timer1 = null;
        }
        // _this.currentTime = _this.timeSaveFunc();
        // _this.saveAsment = 
        // { 
        //     id_game_play: _this.savedVar,
        //     id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
        //     pass: "yes",
        //     time2answer: _this.AnsTimerCount,
        //     attempts: _this.noofAttempts,
        //     date_time_submission: _this.currentTime, 
        //     access_token: _this.acctkn 
        // }
        _this.sceneCount++;
        _this.questionid = 1;

        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
        _this.score++; //score increement

        _this.wrongAnswer = false;
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        //console.log(_this.starAnim);

        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');

        // //* star Actions changes
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "GMAN_01_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Shapes";
        _this.microConcepts = "Geometry";

        _this.anim4.play();
        _this.count1++;

        _this.speaker.inputEnabled = false;
        _this.celebration = true;
        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();

        _this.time.events.add(4000, _this.removeCelebration, _this);
    },

    wrongAns: function (target) {

        _this.stopvoice();
        _this.noofAttempts++;
        // _this.currentTime = window.timeSaveFunc();
        // _this.interactEvent = 
        // { 
        //     id_game_play: _this.savedVar, 
        //     id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
        //     date_time_event: _this.currentTime, 
        //     event_type: "click", 
        //     res_id: "level21.2.5_", 
        //     access_token: window.acctkn 
        // } 
        console.log(_this.image2.angle);
        console.log(_this.image3.angle);

        _this.wrongAnswer = true;
        if (_this.timer1)
            _this.timer1.stop();
        _this.wrong = false;
        _this.time.events.add(500, function () {
            _this.tickMark.frame = 0;
        }, _this)

        _this.wmusic = _this.add.audio('waudio');
        _this.wmusic.play();
        _this.time.events.add(1000, function () {
            _this.slideGrp.destroy();
            _this.getQuestion();

        }, _this);
    },

    getVoice: function () {
        //window.baseUrl+ "questionSounds/AL-MEM01-G6/" + 
        // _this.languageSelected + "/AL-MEM01-G6-e.mp3"
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch (_this.qArrays[_this.no11]) {
            case 1:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6A.mp3");
                break;
            case 2:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6B.mp3");
                break;
            case 3:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6C.mp3");
                break;
            case 4:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6D.mp3");
                break;
            case 5:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6E.mp3");
                break;
            case 6:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6F.mp3");
                break;
            case 7:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6G.mp3");
                break;
            case 8:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6H.mp3");
                break;
            case 9:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6I.mp3");
                break;
            case 10:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6J.mp3");
                break;
            case 11:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6K.mp3");
                break;
            case 12:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6L.mp3");
                break;
            case 13:
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMAN-01-G6/" + _this.languageSelected + "/GMAN-01-G6M.mp3");
                break;
        }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },

    stopvoice: function () {
        if (_this.playQuestionSound) {
            if (_this.playQuestionSound.contains(_this.src)) {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if (!_this.playQuestionSound.paused) {
                console.log("here");
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
        }

        if (_this.celebrationSound) {
            if (_this.celebrationSound.isPlaying) {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }
    },

    shutdown: function () {
        this.stopvoice();
    }
};






















