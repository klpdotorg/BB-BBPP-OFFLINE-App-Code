Game.GMS_01_G6level1 = function () { };


Game.GMS_01_G6level1.prototype = {

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


        _this.correctans = document.createElement('audio');
        _this.correctanssrc = document.createElement('source');
        _this.correctanssrc.setAttribute("src", window.baseUrl+"sounds/celebration.mp3");
        _this.correctans.appendChild(_this.correctanssrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl+"sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

        _this.wrongans = document.createElement('audio');
        _this.wronganssrc = document.createElement('source');
        _this.wronganssrc.setAttribute("src", window.baseUrl+"sounds/WrongCelebrationSound.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.selecttile = document.createElement('audio');
        _this.selecttilesrc = document.createElement('source');
        _this.selecttilesrc.setAttribute("src", window.baseUrl+"sounds/ClickSound.mp3");
        _this.selecttile.appendChild(_this.selecttilesrc);

        _this.drawingsound = document.createElement('audio');
        _this.drawingsoundsrc = document.createElement('source');
        _this.drawingsoundsrc.setAttribute("src", window.baseUrl+"sounds/drawing sound.mp3");
        _this.drawingsound.appendChild(_this.drawingsoundsrc);

        _this.askQ1 = _this.createAudio("GMS_01_G6");
        //_this.askQ2 = _this.createAudio("hrVoice");

     telInitializerbbpp.gameIdInit("GMS_01_G6",gradeSelected);
     console.log(gameID,"gameID...");
    },
    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl+"questionSounds/GMS-01-G6/" + _this.languageSelected + "/" + src + ".mp3");
        audio.appendChild(audiosrc);
        // audio.play();

        return audio;
    },

    create:function(game)
    {
        _this.hintBtn = _this.add.sprite(670,6,'bulb');
        _this.hintBtn.scale.setTo(0.5,0.6);
        _this.hintBtn.visible = false;
        //* show the demo video
       _this.time.events.add(1, function()
        {
            _this.ViewDemoVideo(); 
        });
        
        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(1500, function()
        {
            console.log("//////////////////")
            _this.gameCreate(game);
        });
    },
    
    ViewDemoVideo: function()
    {
        //* pause the game before going to the demovideo 
        _this.game.paused = true;
        _this.DemoVideo();  //* at the end of demo video/skip pressed, it will unpause the game.
    },

    gameCreate: function (game) {
        _this = this;
        _this.Stararr = [];
        _this.amplify = null;

        _this.questionid = null;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
         _this.microConcepts;
        // _this.grade;

        _this.wrongAnswer = false;

        _this.dragStarted = false;

        _this.crayonFrame = 0;
        _this.xdotCordinates = [440, 517, 594, 671, 748, 825];
        _this.ydotCordinates = [72, 145, 218, 290, 362, 435, 508];


        _this.no11 = 0;
        _this.count = 0;

        _this.hint_flag = 0; // * hint flag zero

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;
        _this.count1 = 0;

        _this.minutes = 0;
        _this.seconds = 0;
        _this.counterForTimer = 0;

        _this.prevTarget = null;
        _this.currentTarget = null;

        _this.prev = [];
        // Stores ques asked for randomization
        _this.visited = [];

        _this.qArray = new Array();
        _this.qArray = [1, 2, 3, 4, 5, 6, 7];
        // _this.qArray = [1, 3, 4, 5];

        //        _this.qArray = [5];
        _this.qArray = _this.shuffle(_this.qArray);

        _this.bg1 = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');

        _this.navBar = game.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(10, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.stopVoice();
            _this.time.events.removeAll();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50, function () {
                _this.state.start('grade6Geometry', true, false);
            });
        });


        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                _this.selecttile.play();
                // console.log("speaker btn clicked")
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                if (_this.qn_flag == 1) {

                    _this.askQ1.play();
                    _this.time.events.add(2000, function () {
                        _this.speakerbtnClicked = false;
                        _this.EnableVoice();
                    });
                }
                if (_this.qn_flag == 2) {

                    _this.askQ1.play();
                    _this.time.events.add(6500, function () {
                        _this.speakerbtnClicked = false;
                        _this.EnableVoice();
                    });
                }



            }

        }, _this);

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

         //bulb 
        //  _this.hintBtn = _this.add.sprite(670,6,'bulb');
        //  _this.hintBtn.scale.setTo(0.5,0.6);
        _this.hintBtn.bringToTop();
        _this.hintBtn.visible = true;
         _this.hintBtn.smoothed = false;
         _this.hintBtnAnim = _this.hintBtn.animations.add('hint');
         _this.hintBtnAnim.play(15);
         _this.hintBtnAnim.onComplete.add(function () {
             _this.hintBtnAnim.play(15);
         }, _this);
         _this.hintBtn.inputEnabled = true;
         _this.hintBtn.input.useHandCursor = true;
 
         _this.hintBtn.events.onInputDown.add(function () {
             console.log("inside hintbutton function"); 
             //* show the demo video
             _this.hintBtn.inputEnabled = false;
             _this.hintBtn.input.useHandCursor = false; 

            _this.time.events.add(1, function()
            {
                console.log(_this.hintBtn.inputEnabled, "status of hintBtn");
                _this.ViewDemoVideo(); 
            });
         });

        _this.generateStarsForTheScene(6);

        _this.getQuestion();

        // _this.getVoice();


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

    randomization: function () {
        // 1-vertical axis
        // 2 - Both axis
        _this.sceneCount++;
        _this.AnsTimerCount = 0;
        _this.noofAttempts = 0;

        _this.NullCount = 0;
        _this.noofDrops = 0;
        _this.objDelArray = [];
        _this.FselectedArr = [];
        _this.askedHrV2 = false;

        // Vertical Correct Ans
        _this.q1CorrectAns = ['GMS_01_G6_image_anim143667', 'GMS_01_G6_image_anim151367', 'GMS_01_G6_image_anim259067', 'GMS_01_G6_image_anim2590140', 'GMS_01_G6_image_anim1590213', 'GMS_01_G6_image_anim1667213', 'GMS_01_G6_image_anim2744213', 'GMS_01_G6_image_anim2744285', 'GMS_01_G6_image_anim1667357', 'GMS_01_G6_image_anim1590357', 'GMS_01_G6_image_anim2590357', 'GMS_01_G6_image_anim2590430', 'GMS_01_G6_image_anim1513503', 'GMS_01_G6_image_anim1436503'];
        _this.q2CorrectAns = ['GMS_01_G6_image_anim343668', 'GMS_01_G6_image_anim3513141', 'GMS_01_G6_image_anim1513213.5', 'GMS_01_G6_image_anim3513214', 'GMS_01_G6_image_anim3590286', 'GMS_01_G6_image_anim1590357.5', 'GMS_01_G6_image_anim1513357.5', 'GMS_01_G6_image_anim2513358', 'GMS_01_G6_image_anim2513431', 'GMS_01_G6_image_anim1436503.5'];
        _this.q3CorrectAns = ['GMS_01_G6_image_anim1436212', 'GMS_01_G6_image_anim2513140', 'GMS_01_G6_image_anim251367', 'GMS_01_G6_image_anim151366', 'GMS_01_G6_image_anim159066', 'GMS_01_G6_image_anim266767', 'GMS_01_G6_image_anim2667140', 'GMS_01_G6_image_anim2667213', 'GMS_01_G6_image_anim2667285', 'GMS_01_G6_image_anim2667357', 'GMS_01_G6_image_anim2667430', 'GMS_01_G6_image_anim1590503.5', 'GMS_01_G6_image_anim1513503.5', 'GMS_01_G6_image_anim2513430', 'GMS_01_G6_image_anim2513357', 'GMS_01_G6_image_anim1436357.5'];
        _this.q4CorrectAns = ['GMS_01_G6_image_anim143666.5', 'GMS_01_G6_image_anim151366.5', 'GMS_01_G6_image_anim159066.5', 'GMS_01_G6_image_anim459068', 'GMS_01_G6_image_anim4513141', 'GMS_01_G6_image_anim1513212.5', 'GMS_01_G6_image_anim1590212.5', 'GMS_01_G6_image_anim2667213', 'GMS_01_G6_image_anim2667285', 'GMS_01_G6_image_anim1590356.5', 'GMS_01_G6_image_anim1513356.5', 'GMS_01_G6_image_anim3513358', 'GMS_01_G6_image_anim3590431', 'GMS_01_G6_image_anim1590502.5', 'GMS_01_G6_image_anim1513502.5', 'GMS_01_G6_image_anim1436502.5'];
        _this.q5CorrectAns = ['GMS_01_G6_image_anim151367.5', 'GMS_01_G6_image_anim443668', 'GMS_01_G6_image_anim259068', 'GMS_01_G6_image_anim2590141', 'GMS_01_G6_image_anim4590141', 'GMS_01_G6_image_anim3667141', 'GMS_01_G6_image_anim3744214', 'GMS_01_G6_image_anim4744286', 'GMS_01_G6_image_anim4667358', 'GMS_01_G6_image_anim3590358', 'GMS_01_G6_image_anim2590358', 'GMS_01_G6_image_anim2590431', 'GMS_01_G6_image_anim1513503.5', 'GMS_01_G6_image_anim3436431'];
        _this.q6CorrectAns = ['GMS_01_G6_image_anim143667.5', 'GMS_01_G6_image_anim151367.5', 'GMS_01_G6_image_anim451368', 'GMS_01_G6_image_anim3513141', 'GMS_01_G6_image_anim1590213.5', 'GMS_01_G6_image_anim4590214', 'GMS_01_G6_image_anim3590286', 'GMS_01_G6_image_anim3665357', 'GMS_01_G6_image_anim1665430.5', 'GMS_01_G6_image_anim1588430.5', 'GMS_01_G6_image_anim3588430', 'GMS_01_G6_image_anim1587502', 'GMS_01_G6_image_anim1510502', 'GMS_01_G6_image_anim1433502'];
        _this.q7CorrectAns = ['GMS_01_G6_image_anim343667', 'GMS_01_G6_image_anim3513140', 'GMS_01_G6_image_anim3590213', 'GMS_01_G6_image_anim2667286', 'GMS_01_G6_image_anim2667358', 'GMS_01_G6_image_anim2667431', 'GMS_01_G6_image_anim1590503.5', 'GMS_01_G6_image_anim1513503.5', 'GMS_01_G6_image_anim2513431', 'GMS_01_G6_image_anim1436430.5', 'GMS_01_G6_image_anim3436213', 'GMS_01_G6_image_anim2513286', 'GMS_01_G6_image_anim1436356.5'];

        // Horizontal correct answers
        _this.Hq1CorrectAns = ["GMS_01_G6_image_anim2128285", "GMS_01_G6_image_anim1128357", "GMS_01_G6_image_anim1205357", "GMS_01_G6_image_anim2282357", "GMS_01_G6_image_anim2282430", "GMS_01_G6_image_anim1282503", "GMS_01_G6_image_anim1359503", 'GMS_01_G6_image_anim2744285', 'GMS_01_G6_image_anim1667357', 'GMS_01_G6_image_anim1590357', 'GMS_01_G6_image_anim2590357', 'GMS_01_G6_image_anim2590430', 'GMS_01_G6_image_anim1513503', 'GMS_01_G6_image_anim1436503'];
        _this.Hq3CorrectAns = ["GMS_01_G6_image_anim2205285", "GMS_01_G6_image_anim2205357", "GMS_01_G6_image_anim2205430", "GMS_01_G6_image_anim1205503.5", "GMS_01_G6_image_anim1282503.5", "GMS_01_G6_image_anim2359430", "GMS_01_G6_image_anim2359357", "GMS_01_G6_image_anim1359357.5", 'GMS_01_G6_image_anim2667285', 'GMS_01_G6_image_anim2667357', 'GMS_01_G6_image_anim2667430', 'GMS_01_G6_image_anim1590503.5', 'GMS_01_G6_image_anim1513503.5', 'GMS_01_G6_image_anim2513430', 'GMS_01_G6_image_anim2513357', 'GMS_01_G6_image_anim1436357.5'];
        _this.Hq4CorrectAns = ["GMS_01_G6_image_anim2205285", "GMS_01_G6_image_anim1359502.5", "GMS_01_G6_image_anim1282502.5", "GMS_01_G6_image_anim1205502.5", "GMS_01_G6_image_anim4205431", "GMS_01_G6_image_anim4282358", "GMS_01_G6_image_anim1282356.5", "GMS_01_G6_image_anim1205356.5", 'GMS_01_G6_image_anim2667285', 'GMS_01_G6_image_anim1590356.5', 'GMS_01_G6_image_anim1513356.5', 'GMS_01_G6_image_anim3513358', 'GMS_01_G6_image_anim3590431', 'GMS_01_G6_image_anim1590502.5', 'GMS_01_G6_image_anim1513502.5', 'GMS_01_G6_image_anim1436502.5'];
        _this.Hq5CorrectAns = ["GMS_01_G6_image_anim351286", "GMS_01_G6_image_anim3128358", "GMS_01_G6_image_anim4205358", "GMS_01_G6_image_anim2282358", "GMS_01_G6_image_anim2282431", "GMS_01_G6_image_anim1282503.5", "GMS_01_G6_image_anim4359431", 'GMS_01_G6_image_anim4744286', 'GMS_01_G6_image_anim4667358', 'GMS_01_G6_image_anim3590358', 'GMS_01_G6_image_anim2590358', 'GMS_01_G6_image_anim2590431', 'GMS_01_G6_image_anim1513503.5', 'GMS_01_G6_image_anim3436431'];


        if (_this.no11 == 0) {
            if (_this.qArray[_this.no11] == 1 || _this.qArray[_this.no11] == 3 || _this.qArray[_this.no11] == 4 || _this.qArray[_this.no11] == 5) {
                for (i = 0; i < 6; i++) {
                    if (_this.qArray[i] == 2 || _this.qArray[i] == 6 || _this.qArray[i] == 7) {
                        // swap
                        temp = _this.qArray[i];
                        _this.qArray[i] = _this.qArray[_this.no11];
                        _this.qArray[_this.no11] = temp;
                        break;
                    }
                }
            }
        }
        if (_this.qArray[_this.no11] == 2 || _this.qArray[_this.no11] == 6 || _this.qArray[_this.no11] == 7) {
            _this.selectedcase = 1;
        }
        else {
            _this.selectedcase = 2;

        }
        // _this.selectedcase=2;
        if (_this.selectedcase == 1) {
            // ask question for vertical only
            _this.xdotCordinates = [440, 517, 594, 671, 748, 825];
            _this.ydotCordinates = [72, 145, 218, 290, 362, 435, 508];


            _this.drawVrAxis();
            _this.qn_flag = 1;
            if(_this.no11 == 0) _this.askQ1.play();
            _this.selectedVrQ = _this.qArray[_this.no11]

            switch (_this.selectedVrQ) {

                case 2: {
                    _this.gotoSecondQuestion();
                    _this.visited.push(2);

                    break;
                }

                case 6: {
                    _this.gotoSixthQuestion();
                    _this.visited.push(6);

                    break;
                }

                case 7: {
                    _this.gotoSeventhQuestion();
                    _this.visited.push(7);

                    break;
                }


            }
        }
        else {

            _this.drawVrAxis();
            _this.drawHrAxis();

            _this.HrQues = _this.qArray[_this.no11];
            // _this.HrQues=5;
            // 1- vertical first 2-horizontal first
            var HrCase = [1, 2];
            _this.selectedHrCase = HrCase[Math.floor(Math.random() * HrCase.length)]

            switch (_this.HrQues) {
                case 1: {
                    _this.gotoFirst2axisQ();
                    _this.visited.push(1);
                    break;
                }

                case 3: {
                    _this.gotoThird2axisQ();
                    _this.visited.push(3);

                    break;
                }

                case 4: {
                    _this.gotoFourth2axisQ();
                    _this.visited.push(4);

                    break;
                }

                case 5: {
                    _this.gotoFifth2axisQ();
                    _this.visited.push(5);

                    break;
                }


            }
            if (_this.selectedHrCase == 1) {
                // vertical entered first so disable horizontal dots
                // console.log("disabling horixontal and lower")
                _this.qn_flag = 1;
                if(_this.no11 == 0) _this.askQ1.play();
                _this.xdotCordinates = [440, 517, 594, 671, 748, 825];
                _this.ydotCordinates = [72, 145, 218, 290];

                _this.disableLowerHalf();
                _this.diableHrDots();
            }
            else {
                _this.qn_flag = 2;
                if(_this.no11 == 0) _this.askQ1.play();
                _this.xdotCordinates = [55, 132, 209, 286, 363, 440];
                _this.ydotCordinates = [290, 362, 435, 508];

                // console.log("disabling vertical and upper")
                _this.disableUpperHalf();
                _this.disableVrDots();

            }
            _this.showHrQ1Demo();
        }
        if (_this.no11 == 0) {
            _this.FirstQdemo();
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

    getQuestion: function (target1) {
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
        _this.randomization();

        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;

        console.log("hii there.....");
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1;
    },
    FirstQdemo: function () {
        _this.DisableAllDots();

        _this.time.events.add(2000, () => {

            _this.makeDGrp = _this.add.group();
            _this.demo = _this.add.graphics(_this.world.centerX - 40, _this.world.centerY - 198);
            _this.demo.beginFill(0xFF0000, 1);
            _this.demo.drawCircle(0, 0, 32);
            _this.demo.alpha = 0;
            _this.hand = _this.add.sprite(20, 360, 'hand');
            _this.hand.scale.setTo(0.65, 0.65);
            // _this.demo.alpha = 1;

            _this.time.events.add(500, function () {
                _this.tween1 = _this.add.tween(this.hand).to({ x: 435, y: 68 }, 1000, 'Linear', true, 0);
                _this.tween1.onComplete.add(function () {
                    _this.time.events.add(200, function () {
                        _this.demo.alpha = 1;
                    }, _this);
                }, _this);
            }, _this);

            if (_this.questionNo == 2) {

                _this.time.events.add(2000, function () {
                    _this.tween1 = _this.add.tween(_this.hand).to({ x: 510, y: 140 }, 500, 'Linear', true, 0);
                    _this.tween2 = _this.add.tween(_this.demo).to({ x: 515, y: 146 }, 500, 'Linear', true, 0);


                    _this.tween1.onComplete.add(function () {
                        _this.time.events.add(1500, function () {
                            _this.hand.destroy();
                            _this.demo.destroy();
                            _this.enableVrDots();

                        }, _this);
                    }, _this);
                }, _this);
            }
            if (_this.questionNo == 6) {

                _this.time.events.add(2000, function () {
                    _this.tween1 = _this.add.tween(_this.hand).to({ x: 510, y: 65 }, 500, 'Linear', true, 0);
                    _this.tween2 = _this.add.tween(_this.demo).to({ x: 515, y: _this.world.centerY - 198 }, 500, 'Linear', true, 0);


                    _this.tween1.onComplete.add(function () {
                        _this.time.events.add(1500, function () {
                            _this.hand.destroy();
                            _this.demo.destroy();
                            _this.enableVrDots();

                        }, _this);
                    }, _this);


                }, _this);
            }
            else {

                _this.time.events.add(2000, function () {
                    _this.tween1 = _this.add.tween(_this.hand).to({ x: 510, y: 140 }, 500, 'Linear', true, 0);

                    _this.tween2 = _this.add.tween(_this.demo).to({ x: 515, y: 146 }, 500, 'Linear', true, 0);


                    _this.tween1.onComplete.add(function () {
                        _this.time.events.add(1500, function () {
                            _this.hand.destroy();
                            _this.demo.destroy();
                            _this.enableVrDots();
                        }, _this);
                    }, _this);
                }, _this);
            }
        })

    },
    showHrQ1Demo: function () {
        _this.hand = _this.add.sprite(20, 360, 'hand');
        _this.hand.scale.setTo(0.65, 0.65);
        // _this.xdotCordinates = [55, 132, 209, 286, 363, 440, 517, 594, 671, 748, 825];
        _this.time.events.add(1000, () => {

            // _this.demo.alpha = 1;
            if (_this.selectedHrCase == 1) {
                if (_this.questionNo == 1) {
                    _this.time.events.add(500, function () {
                        _this.tween1 = _this.add.tween(this.hand).to({ x: 435, y: 68 }, 1000, 'Linear', true, 0);
                        _this.tween1.onComplete.add(function () {
                            _this.time.events.add(1000, function () {
                                // _this.demo.alpha = 1;
                                _this.hand.destroy();
                            }, _this);
                        }, _this);
                    }, _this);
                }
                if (_this.questionNo == 3) {
                    _this.time.events.add(500, function () {
                        _this.tween1 = _this.add.tween(this.hand).to({ x: 435, y: 212 }, 1000, 'Linear', true, 0);
                        _this.tween1.onComplete.add(function () {
                            _this.time.events.add(1000, function () {
                                _this.hand.destroy();
                            }, _this);
                        }, _this);
                    }, _this);
                }
                if (_this.questionNo == 4) {
                    _this.time.events.add(500, function () {
                        _this.tween1 = _this.add.tween(this.hand).to({ x: 435, y: 68 }, 1000, 'Linear', true, 0);
                        _this.tween1.onComplete.add(function () {
                            _this.time.events.add(1000, function () {
                                _this.hand.destroy();
                            }, _this);
                        }, _this);
                    }, _this);
                }
                if (_this.questionNo == 5) {
                    _this.time.events.add(500, function () {
                        _this.tween1 = _this.add.tween(this.hand).to({ x: 435, y: 138 }, 1000, 'Linear', true, 0);
                        _this.tween1.onComplete.add(function () {
                            _this.time.events.add(1000, function () {
                                _this.hand.destroy();

                            }, _this);
                        }, _this);
                    }, _this);
                }
            }
            else {
                if (_this.questionNo == 1) {
                    _this.time.events.add(500, function () {
                        _this.tween1 = _this.add.tween(this.hand).to({ x: 130, y: 288 }, 1000, 'Linear', true, 0);
                        _this.tween1.onComplete.add(function () {
                            _this.time.events.add(1000, function () {
                                _this.hand.destroy();
                            }, _this);
                        }, _this);
                    }, _this);
                }
                if (_this.questionNo == 3) {
                    _this.time.events.add(500, function () {
                        _this.tween1 = _this.add.tween(this.hand).to({ x: 207, y: 288 }, 1000, 'Linear', true, 0);
                        _this.tween1.onComplete.add(function () {
                            _this.time.events.add(1000, function () {
                                _this.hand.destroy();
                            }, _this);
                        }, _this);
                    }, _this);
                }
                if (_this.questionNo == 4) {
                    _this.time.events.add(500, function () {
                        _this.tween1 = _this.add.tween(this.hand).to({ x: 207, y: 288 }, 1000, 'Linear', true, 0);
                        _this.tween1.onComplete.add(function () {
                            _this.time.events.add(1000, function () {
                                _this.hand.destroy();


                            }, _this);
                        }, _this);
                    }, _this);
                }
                if (_this.questionNo == 5) {
                    _this.time.events.add(500, function () {
                        _this.tween1 = _this.add.tween(this.hand).to({ x: 52, y: 288 }, 1000, 'Linear', true, 0);
                        _this.tween1.onComplete.add(function () {
                            _this.time.events.add(1000, function () {
                                _this.hand.destroy();

                            }, _this);
                        }, _this);
                    }, _this);
                }
            }
        })


    },
    drawHrAxis: function () {
        _this.graphicsEq12 = _this.add.graphics();
        _this.graphicsEq12.lineStyle(8, 0x65B4C3);
        _this.graphicsEq12.moveTo(0, 290);
        _this.graphicsEq12.lineTo(958, 290);

    },
    drawVrAxis: function () {
        _this.graphicsAddVr = _this.add.graphics();
        _this.graphicsAddVr.lineStyle(8, 0x65B4C3);
        _this.graphicsAddVr.moveTo(440, 43);
        _this.graphicsAddVr.lineTo(440, 558);
    },
    greenSprites: function () {

        _this.objDelGroup = _this.add.group();
        _this.currentGrp = _this.add.group();
        _this.selectedAns = _this.add.group();
        _this.selectedAns1 = _this.add.group();
        _this.additionalGraphics = _this.add.group();
        _this.FselectedArr = [];
        _this.NullCount = 0;


        _this.noofDeletions = 0;
        _this.FirstRowImage = _this.add.group();
        _this.SecondRowImage = _this.add.group();
        _this.ThirdRowImage = _this.add.group();
        _this.FourthRowImage = _this.add.group();
        _this.FifthRowImage = _this.add.group();
        _this.SixthRowImage = _this.add.group();
        _this.SeventhRowImage = _this.add.group();


        _this.row_graphics1 = _this.add.group();
        _this.row_graphics2 = _this.add.group();
        _this.row_graphics3 = _this.add.group();
        _this.row_graphics4 = _this.add.group();
        _this.row_graphics5 = _this.add.group();
        _this.row_graphics6 = _this.add.group();
        _this.row_graphics7 = _this.add.group();

        _this.row_graphics11 = _this.add.group();
        _this.row_graphics21 = _this.add.group();
        _this.row_graphics31 = _this.add.group();
        _this.row_graphics41 = _this.add.group();
        _this.row_graphics51 = _this.add.group();
        _this.row_graphics61 = _this.add.group();
        _this.row_graphics71 = _this.add.group();

        /*------------------------------------Row Sprites---------------------------------------*/
        //1st Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY - 198);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;

            _this.row_graphics11.add(_this.row_graphics);


            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY - 198);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics1-" + i;
            _this.row_graphics.rowname = '1';
            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics1.add(_this.row_graphics);

            _this.row_graphics1.getChildAt(i).inputEnabled = true;
            _this.row_graphics1.getChildAt(i).useHandCursor = true;


            _this.row_graphics1.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics1.getChildAt(i).input.enableDrag(true)
            _this.row_graphics1.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics1.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);

            x += 76;
            graph1 += 76;
        }

        //2nd Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY - 125);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;

            _this.row_graphics21.add(_this.row_graphics)

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY - 125);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics2-" + i;
            _this.row_graphics.rowname = '2';

            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics2.add(_this.row_graphics);

            _this.row_graphics2.getChildAt(i).inputEnabled = true;
            _this.row_graphics2.getChildAt(i).useHandCursor = true;
            _this.row_graphics2.getChildAt(i).input.enableDrag(true)


            _this.row_graphics2.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics2.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics2.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);

            x += 76;
            graph1 += 76;
        }

        //3rd Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY - 52);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;



            _this.row_graphics31.add(_this.row_graphics)

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY - 52);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics3-" + i;
            _this.row_graphics.rowname = '3';

            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics3.add(_this.row_graphics);

            _this.row_graphics3.getChildAt(i).inputEnabled = true;
            _this.row_graphics3.getChildAt(i).useHandCursor = true;
            _this.row_graphics3.getChildAt(i).input.enableDrag(true)


            _this.row_graphics3.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics3.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics3.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);

            x += 76;
            graph1 += 76;
        }

        //4th Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 20);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;


            _this.row_graphics41.add(_this.row_graphics)


            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 20);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics4-" + i;
            _this.row_graphics.rowname = '4';

            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics4.add(_this.row_graphics);

            _this.row_graphics4.getChildAt(i).inputEnabled = true;
            _this.row_graphics4.getChildAt(i).useHandCursor = true;
            _this.row_graphics4.getChildAt(i).input.enableDrag(true)


            _this.row_graphics4.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics4.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics4.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);

            x += 76;
            graph1 += 76;
        }

        //5th Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 92);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;



            _this.row_graphics51.add(_this.row_graphics)

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 92);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics5-" + i;
            _this.row_graphics.rowname = '5';

            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics5.add(_this.row_graphics);

            _this.row_graphics5.getChildAt(i).inputEnabled = true;
            _this.row_graphics5.getChildAt(i).useHandCursor = true
            _this.row_graphics5.getChildAt(i).input.enableDrag(true);

            _this.row_graphics5.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics5.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics5.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);

            x += 76;
            graph1 += 76;
        }

        //6th Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 165);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;


            _this.row_graphics61.add(_this.row_graphics)

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 165);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics6-" + i;
            _this.row_graphics.rowname = '6';

            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics6.add(_this.row_graphics);

            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics6.getChildAt(i).useHandCursor = true;
            _this.row_graphics6.getChildAt(i).input.enableDrag(true)

            _this.row_graphics6.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics6.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics6.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);


            x += 76;
            graph1 += 76;
        }

        //7th Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 238);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;



            _this.row_graphics71.add(_this.row_graphics)

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 238);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics7-" + i;
            _this.row_graphics.rowname = '7';

            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics7.add(_this.row_graphics);

            _this.row_graphics7.getChildAt(i).inputEnabled = true;
            _this.row_graphics7.getChildAt(i).useHandCursor = true;
            _this.row_graphics7.getChildAt(i).input.enableDrag(true)


            _this.row_graphics7.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics7.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics7.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);


            x += 76;
            graph1 += 76;
        }

        /*------------------------------------End of Column Sprites---------------------------------------*/
        _this.game.world.bringToTop(_this.graphicsAddVr)
        if (_this.graphicsEq12)
            _this.game.world.bringToTop(_this.graphicsEq12);

    },
    gotoFirst2axisQ: function () {
        _this.questionNo = 1;
        _this.ansCount = 14;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX - 40, _this.world.centerY + 20, 'GMS_01_G6_Board');
        _this.board.anchor.setTo(0.5);
        _this.greenSprites();


        _this.image5 = _this.add.sprite(_this.world.centerX - 192, _this.world.centerY + 20, 'GMS_01_G6_image_animHr1');
        _this.image5.anchor.setTo(0.5);
        _this.image5.name = "image5";

        if (_this.wrongAnswer == false) {

            _this.time.events.add(500, function () {

                // _this.drawingsound.play()

                _this.image5_anim = _this.image5.animations.add('draw');
                _this.image5_anim.play(15);
                _this.image5_anim.onComplete.add(function () {
                    _this.drawingsound.pause()
                    _this.image5.frame = 17;

                }, _this);

            }, _this);

        } else {

            // Complete image of frame
            _this.image5.frame = 17;

        }


        _this.addEventListeners();

    },

    gotoThird2axisQ: function () {
        _this.questionNo = 3;
        _this.ansCount = 16;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX - 40, _this.world.centerY + 20, 'GMS_01_G6_Board');
        _this.board.anchor.setTo(0.5);

        // _this.hand = _this.add.sprite(50, 300, 'hand');
        // _this.hand.scale.setTo(0.65, 0.65);

        // _this.time.events.add(1000, function () {
        //     _this.tween1 = _this.add.tween(this.hand).to({ x: 515, y: 215 }, 1000, 'Linear', true, 0);
        //     _this.tween1.onComplete.add(function () {
        //         _this.time.events.add(3000, function () {
        //             _this.hand.destroy();
        //         }, _this);
        //     }, _this);
        // }, _this);
        _this.greenSprites();


        _this.image8 = _this.add.sprite(_this.world.centerX - 155, _this.world.centerY + 20, 'GMS_01_G6_image_animHr3');
        _this.image8.anchor.setTo(0.5);
        _this.image8.name = "image8";

        if (_this.wrongAnswer == false) {

            _this.time.events.add(500, function () {

                _this.drawingsound.play()

                _this.image8_anim = _this.image8.animations.add('draw');
                _this.image8_anim.play(20);
                _this.image8_anim.onComplete.add(function () {
                    _this.drawingsound.pause()
                    _this.image8.frame = 23;

                }, _this);

            }, _this);

        } else {

            _this.image8.frame = 23;

        }

        // _this.greenSprites();

        _this.addEventListeners();
    },
    gotoFourth2axisQ: function () {
        _this.questionNo = 4;
        _this.ansCount = 16;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX - 40, _this.world.centerY + 20, 'GMS_01_G6_Board');
        _this.board.anchor.setTo(0.5);

        _this.greenSprites();

        // _this.hand = _this.add.sprite(50, 300, 'hand');
        // _this.hand.scale.setTo(0.65, 0.65);

        // _this.time.events.add(1000, function () {
        //     _this.tween1 = _this.add.tween(this.hand).to({ x: 510, y: 65 }, 1000, 'Linear', true, 0);
        //     _this.tween1.onComplete.add(function () {
        //         _this.time.events.add(2500, function () {
        //             _this.hand.destroy();
        //         }, _this);
        //     }, _this);
        // }, _this);

        _this.image11 = _this.add.sprite(_this.world.centerX - 156, _this.world.centerY + 20, 'GMS_01_G6_image_animHr4');
        _this.image11.anchor.setTo(0.5);
        _this.image11.name = "image11";

        if (_this.wrongAnswer == false) {

            _this.time.events.add(500, function () {

                _this.drawingsound.play()

                _this.image11_anim = _this.image11.animations.add('draw');
                _this.image11_anim.play(20);
                _this.image11_anim.onComplete.add(function () {
                    _this.drawingsound.pause()
                    _this.image11.frame = 23;

                }, _this);

            }, _this);

        } else {

            _this.image11.frame = 23;

        }

        // _this.greenSprites();

        _this.addEventListeners();

    },

    gotoFifth2axisQ: function () {

        _this.questionNo = 5;
        _this.ansCount = 14;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX - 40, _this.world.centerY + 20, 'GMS_01_G6_Board');
        _this.board.anchor.setTo(0.5);
        _this.greenSprites();

        // _this.hand = _this.add.sprite(30, 330, 'hand');
        // _this.hand.scale.setTo(0.65, 0.65);

        // _this.time.events.add(1000, function () {
        //     _this.tween1 = _this.add.tween(this.hand).to({ x: 510, y: 65 }, 1000, 'Linear', true, 0);
        //     _this.tween1.onComplete.add(function () {
        //         _this.time.events.add(3000, function () {
        //             _this.hand.destroy();
        //         }, _this);
        //     }, _this);
        // }, _this);

        _this.image9 = _this.add.sprite(_this.world.centerX - 233, _this.world.centerY + 20, 'GMS_01_G6_image_animHr5');
        _this.image9.anchor.setTo(0.5);
        _this.image9.name = "image9";

        if (_this.wrongAnswer == false) {

            _this.time.events.add(500, function () {

                _this.drawingsound.play()
                _this.image9_anim = _this.image9.animations.add('draw');
                _this.image9_anim.play(15);
                _this.image9_anim.onComplete.add(function () {
                    _this.drawingsound.pause()
                    _this.image9.frame = 23;

                }, _this);

            }, _this);

        } else {

            _this.image9.frame = 23;

        }

        // _this.greenSprites();

        _this.addEventListeners();

    },


    gotoFirstQuestion: function () {

        _this.questionNo = 1;
        _this.ansCount = 14;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX - 40, _this.world.centerY + 20, 'GMS_01_G6_Board');
        _this.board.anchor.setTo(0.5);
        _this.greenSprites();

        //        _this.board.scale.setTo(0.95,0.95);

        // _this.hand = _this.add.sprite(50, 300, 'hand');
        // _this.hand.scale.setTo(0.65, 0.65);

        // _this.time.events.add(1000, function () {
        //     _this.tween1 = _this.add.tween(this.hand).to({ x: 510, y: 65 }, 1000, 'Linear', true, 0);
        //     _this.tween1.onComplete.add(function () {
        //         _this.time.events.add(2500, function () {
        //             _this.hand.destroy();
        //         }, _this);
        //     }, _this);
        // }, _this);


        _this.image5 = _this.add.sprite(_this.world.centerX - 192, _this.world.centerY + 20, 'GMS_01_G6_image_anim5');
        _this.image5.anchor.setTo(0.5);
        _this.image5.name = "image5";

        if (_this.wrongAnswer == false) {

            _this.time.events.add(500, function () {

                // _this.drawingsound.play()

                _this.image5_anim = _this.image5.animations.add('draw');
                _this.image5_anim.play(15);
                _this.image5_anim.onComplete.add(function () {
                    _this.drawingsound.pause()
                }, _this);

            }, _this);

        } else {

            // Complete image of frame
            _this.image5.frame = 37;

        }

        // _this.greenSprites();
        _this.diableHrDots();

        _this.addEventListeners();

    },

    gotoSecondQuestion: function () {

        _this.questionNo = 2;
        _this.ansCount = 10;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX - 40, _this.world.centerY + 20, 'GMS_01_G6_Board');
        _this.board.anchor.setTo(0.5);
        _this.greenSprites();


        // _this.hand = _this.add.sprite(50, 300, 'hand');
        // _this.hand.scale.setTo(0.65, 0.65);

        // _this.time.events.add(1000, function () {
        //     _this.tween1 = _this.add.tween(this.hand).to({ x: 510, y: 140 }, 1000, 'Linear', true, 0);
        //     _this.tween1.onComplete.add(function () {
        //         _this.time.events.add(3000, function () {
        //             _this.hand.destroy();
        //         }, _this);
        //     }, _this);
        // }, _this);

        _this.image7 = _this.add.sprite(_this.world.centerX - 158, _this.world.centerY + 20, 'GMS_01_G6_image_anim7');
        _this.image7.anchor.setTo(0.5);
        _this.image7.name = "image7";

        if (_this.wrongAnswer == false) {

            _this.time.events.add(500, function () {

                _this.drawingsound.play()

                _this.image7_anim = _this.image7.animations.add('draw');
                _this.image7_anim.play(15);
                _this.image7_anim.onComplete.add(function () {

                    _this.drawingsound.pause()
                }, _this);

            }, _this);

        } else {

            _this.image7.frame = 57;

        }

        // _this.greenSprites();
        _this.diableHrDots();

        _this.addEventListeners();

    },

    gotoThirdQuestion: function () {

        _this.questionNo = 3;
        _this.ansCount = 16;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX - 40, _this.world.centerY + 20, 'GMS_01_G6_Board');
        _this.board.anchor.setTo(0.5);
        _this.greenSprites();


        // _this.hand = _this.add.sprite(50, 300, 'hand');
        // _this.hand.scale.setTo(0.65, 0.65);

        // _this.time.events.add(1000, function () {
        //     _this.tween1 = _this.add.tween(this.hand).to({ x: 515, y: 215 }, 1000, 'Linear', true, 0);
        //     _this.tween1.onComplete.add(function () {
        //         _this.time.events.add(3000, function () {
        //             _this.hand.destroy();
        //         }, _this);
        //     }, _this);
        // }, _this);

        _this.image8 = _this.add.sprite(_this.world.centerX - 155, _this.world.centerY + 20, 'GMS_01_G6_image_anim8');
        _this.image8.anchor.setTo(0.5);
        _this.image8.name = "image8";

        if (_this.wrongAnswer == false) {

            _this.time.events.add(500, function () {

                _this.drawingsound.play()

                _this.image8_anim = _this.image8.animations.add('draw');
                _this.image8_anim.play(20);
                _this.image8_anim.onComplete.add(function () {
                    _this.drawingsound.pause()
                }, _this);

            }, _this);

        } else {

            _this.image8.frame = 55;

        }

        // _this.greenSprites();
        _this.diableHrDots();

        _this.addEventListeners();

    },

    gotoFourthQuestion: function () {

        _this.questionNo = 4;
        _this.ansCount = 16;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX - 40, _this.world.centerY + 20, 'GMS_01_G6_Board');
        _this.board.anchor.setTo(0.5);
        _this.greenSprites();


        // _this.hand = _this.add.sprite(50, 300, 'hand');
        // _this.hand.scale.setTo(0.65, 0.65);

        // _this.time.events.add(1000, function () {
        //     _this.tween1 = _this.add.tween(this.hand).to({ x: 510, y: 65 }, 1000, 'Linear', true, 0);
        //     _this.tween1.onComplete.add(function () {
        //         _this.time.events.add(2500, function () {
        //             _this.hand.destroy();
        //         }, _this);
        //     }, _this);
        // }, _this);

        _this.image11 = _this.add.sprite(_this.world.centerX - 156, _this.world.centerY + 20, 'GMS_01_G6_image_anim11');
        _this.image11.anchor.setTo(0.5);
        _this.image11.name = "image11";

        if (_this.wrongAnswer == false) {

            _this.time.events.add(500, function () {

                _this.drawingsound.play()

                _this.image11_anim = _this.image11.animations.add('draw');
                _this.image11_anim.play(20);
                _this.image11_anim.onComplete.add(function () {
                    _this.drawingsound.pause()
                }, _this);

            }, _this);

        } else {

            _this.image11.frame = 46;

        }

        // _this.greenSprites();
        _this.diableHrDots();

        _this.addEventListeners();

    },

    gotoFifthQuestion: function () {

        _this.questionNo = 5;
        _this.ansCount = 14;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX - 40, _this.world.centerY + 20, 'GMS_01_G6_Board');
        _this.board.anchor.setTo(0.5);
        _this.greenSprites();

        // _this.hand = _this.add.sprite(30, 330, 'hand');
        // _this.hand.scale.setTo(0.65, 0.65);

        // _this.time.events.add(1000, function () {
        //     _this.tween1 = _this.add.tween(this.hand).to({ x: 510, y: 65 }, 1000, 'Linear', true, 0);
        //     _this.tween1.onComplete.add(function () {
        //         _this.time.events.add(3000, function () {
        //             _this.hand.destroy();
        //         }, _this);
        //     }, _this);
        // }, _this);

        _this.image9 = _this.add.sprite(_this.world.centerX - 233, _this.world.centerY + 20, 'GMS_01_G6_image_anim9');
        _this.image9.anchor.setTo(0.5);
        _this.image9.name = "image9";

        if (_this.wrongAnswer == false) {

            _this.time.events.add(500, function () {

                _this.drawingsound.play()
                _this.image9_anim = _this.image9.animations.add('draw');
                _this.image9_anim.play(15);
                _this.image9_anim.onComplete.add(function () {
                    _this.drawingsound.pause()
                }, _this);

            }, _this);

        } else {

            _this.image9.frame = 46;

        }

        // _this.greenSprites();
        _this.diableHrDots();

        _this.addEventListeners();

    },

    gotoSixthQuestion: function () {

        _this.questionNo = 6;
        _this.ansCount = 14;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX - 40, _this.world.centerY + 20, 'GMS_01_G6_Board');
        _this.board.anchor.setTo(0.5);
        _this.greenSprites();

        // _this.hand = _this.add.sprite(50, 300, 'hand');
        // _this.hand.scale.setTo(0.65, 0.65);

        // _this.time.events.add(500, function () {
        //     _this.tween1 = _this.add.tween(this.hand).to({ x: 510, y: 65 }, 1000, 'Linear', true, 0);
        //     _this.tween1.onComplete.add(function () {
        //         _this.time.events.add(3000, function () {
        //             _this.hand.destroy();
        //         }, _this);
        //     }, _this);
        // }, _this);

        _this.image12 = _this.add.sprite(_this.world.centerX - 192, _this.world.centerY + 20, 'GMS_01_G6_image_anim12');
        _this.image12.anchor.setTo(0.5);
        _this.image12.name = "image5";

        if (_this.wrongAnswer == false) {

            _this.time.events.add(500, function () {

                _this.drawingsound.play()

                _this.image12_anim = _this.image12.animations.add('draw');
                _this.image12_anim.play(15);
                _this.image12_anim.onComplete.add(function () {
                    _this.drawingsound.pause()
                }, _this);

            }, _this);

        } else {

            _this.image12.frame = 44;

        }

        // _this.greenSprites();
        _this.diableHrDots();

        _this.addEventListeners();

    },

    gotoSeventhQuestion: function () {

        _this.questionNo = 7;
        _this.ansCount = 13;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX - 40, _this.world.centerY + 20, 'GMS_01_G6_Board');
        _this.board.anchor.setTo(0.5);
        _this.greenSprites();


        // _this.hand = _this.add.sprite(50, 300, 'hand');
        // _this.hand.scale.setTo(0.65, 0.65);

        // _this.time.events.add(1000, function () {
        //     _this.tween1 = _this.add.tween(this.hand).to({ x: 510, y: 140 }, 1000, 'Linear', true, 0);
        //     _this.tween1.onComplete.add(function () {
        //         _this.time.events.add(3000, function () {
        //             _this.hand.destroy();
        //         }, _this);
        //     }, _this);
        // }, _this);

        _this.image10 = _this.add.sprite(_this.world.centerX - 156, _this.world.centerY + 22, 'GMS_01_G6_image_anim10');
        _this.image10.anchor.setTo(0.5);
        _this.image10.name = "image10";

        if (_this.wrongAnswer == false) {

            _this.time.events.add(500, function () {

                _this.drawingsound.play()

                _this.image10_anim = _this.image10.animations.add('draw');
                _this.image10_anim.play(15);
                _this.image10_anim.onComplete.add(function () {
                    _this.drawingsound.pause()
                }, _this);

            }, _this);

        } else {

            _this.image10.frame = 66;

        }

        // _this.greenSprites();
        _this.diableHrDots();

        _this.addEventListeners();

    },

    addEventListeners: function () {

        // Adding Eraser
        _this.eraser = _this.add.sprite(_this.world.centerX + 420, _this.world.centerY - 30, 'GMS_01_G6_Eraser');
        _this.eraser.scale.setTo(0.8, 0.6);
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.angle = 90;
        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.input.useHandCursor = true;
        // _this.row_graphics3.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);

        _this.eraser.events.onDragStop.add(_this.deleteLines, _this);
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);


        _this.tickMark = _this.add.sprite(_this.world.centerX + 420, _this.world.centerY + 75, 'GMS_01_G6_TickMark');
        _this.tickMark.scale.setTo(0.8);
        _this.tickMark.anchor.setTo(0.5);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.tickMarkclicked, _this);

    },
    checkAnswerVer: function () {
        if (_this.questionNo == 1) {


            for (var i = 0; i < _this.q1CorrectAns.length; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.q1CorrectAns.length)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.q1CorrectAns[i])) {

                }
                else {
                    _this.correct = false;
                    break;
                }
            }

        }

        if (_this.questionNo == 2) {

            for (var i = 0; i < _this.q2CorrectAns.length; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.q2CorrectAns.length)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.q2CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }

        if (_this.questionNo == 3) {

            for (var i = 0; i < _this.q3CorrectAns.length; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.q3CorrectAns.length)) {
                    _this.correct = false;
                    break;
                }

                if (_this.FselectedArr.includes(_this.q3CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }
        if (_this.questionNo == 4) {

            for (var i = 0; i < _this.q4CorrectAns.length; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.q4CorrectAns.length)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.q4CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }
        if (_this.questionNo == 5) {

            for (var i = 0; i < _this.q5CorrectAns.length; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.q5CorrectAns.length)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.q5CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }
        if (_this.questionNo == 6) {

            for (var i = 0; i < _this.q6CorrectAns.length; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.q6CorrectAns.length)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.q6CorrectAns[i])) {

                }
                else {
                    _this.correct = false;
                    break;
                }
            }

        }
        if (_this.questionNo == 7) {

            for (var i = 0; i < _this.q7CorrectAns.length; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.q7CorrectAns.length)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.q7CorrectAns[i])) {

                }
                else {
                    _this.correct = false;
                    break;
                }
            }

        }
    },
    checkAnswerHr: function () {
        if (_this.questionNo == 1) {


            for (var i = 0; i < _this.Hq1CorrectAns.length; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.Hq1CorrectAns.length)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.Hq1CorrectAns[i])) {

                }
                else {
                    _this.correct = false;
                    break;
                }
            }

        }

        if (_this.questionNo == 3) {

            for (var i = 0; i < _this.Hq3CorrectAns.length; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.Hq3CorrectAns.length)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.Hq3CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }

        if (_this.questionNo == 4) {

            for (var i = 0; i < _this.Hq4CorrectAns.length; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.Hq4CorrectAns.length)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.Hq4CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }
        if (_this.questionNo == 5) {

            for (var i = 0; i < _this.Hq5CorrectAns.length; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.Hq5CorrectAns.length)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.Hq5CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }

    },
    checkAnswerH1: function () {
        // 3rd quad

        if (_this.questionNo == 1) {


            for (var i = 0; i < _this.Hq1CorrectAns.length / 2; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.Hq1CorrectAns.length / 2)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.Hq1CorrectAns[i])) {

                }
                else {
                    _this.correct = false;
                    break;
                }
            }

        }

        if (_this.questionNo == 3) {

            for (var i = 0; i < _this.Hq3CorrectAns.length / 2; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.Hq3CorrectAns.length / 2)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.Hq3CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }

        if (_this.questionNo == 4) {

            for (var i = 0; i < _this.Hq4CorrectAns.length / 2; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.Hq4CorrectAns.length / 2)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.Hq4CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }
        if (_this.questionNo == 5) {

            for (var i = 0; i < _this.Hq5CorrectAns.length / 2; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.Hq5CorrectAns.length / 2)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.Hq5CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }


    },
    checkAnswerV1: function () {
        // 1st quad
        if (_this.questionNo == 1) {

            for (var i = 0; i < _this.q1CorrectAns.length / 2; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.q1CorrectAns.length / 2)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.q1CorrectAns[i])) {

                }
                else {
                    _this.correct = false;
                    break;
                }
            }

        }
        if (_this.questionNo == 3) {

            for (var i = 0; i < _this.q3CorrectAns.length / 2; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.q3CorrectAns.length / 2)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.q3CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }
        if (_this.questionNo == 4) {

            for (var i = 0; i < _this.q4CorrectAns.length / 2; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.q4CorrectAns.length / 2)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.q4CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }
        if (_this.questionNo == 5) {

            for (var i = 0; i < _this.q5CorrectAns.length / 2; i++) {
                if (_this.objDelArray.length - _this.NullCount != (_this.q5CorrectAns.length / 2)) {
                    _this.correct = false;
                    break;
                }
                if (_this.FselectedArr.includes(_this.q5CorrectAns[i])) {

                }
                else {

                    _this.correct = false;
                    break;
                }
            }

        }
    },
    checkIfAllSelected: function () {
        _this.correct = true;
        if (_this.selectedHrCase == 1) {
            //   vertiiacal entered first
            _this.checkAnswerV1();

        }
        else {
            // horizontal entered in 3rd quardrant
            _this.checkAnswerH1();
        }
        if (_this.correct == true) {
            // Guide child to press the tick button as 1st part is completed
            _this.hand = _this.add.sprite(_this.world.centerX + 420, _this.world.centerY + 80, "hand")
            _this.hand.scale.setTo(0.65);
            _this.time.events.add(1000, () => {
                _this.hand.scale.setTo(0.6);
                _this.tickMark.scale.setTo(0.85);
                _this.time.events.add(1000, () => {
                    _this.hand.scale.setTo(0.65);
                    _this.tickMark.scale.setTo(0.8);
                })
            })
            _this.time.events.add(2200, () => {
                _this.hand.destroy();
            })
        }

    },
    tickMarkclicked: function () {
        // _this.tickMark.events.onInputDown.add(function (target1) {
        // _this.selecttile.play()
        _this.selecttile.play();
        _this.correct = true;
        _this.tickMark.inputEnabled = false;

        if (_this.selectedcase == 1) {
            // vertical
            _this.checkAnswerVer();
        }
        else if (_this.selectedcase == 2) {
            if (_this.selectedHrCase == 1) {
                //   vertiiacal entered first
                if (_this.askedHrV2) {
                    // means ask second part of vertical ques which is horizontal bpth 3rd and 4th
                    _this.checkAnswerHr();
                }
                else {
                    // vertiacl entered in 1st quardrant
                    _this.checkAnswerV1();
                }
            }
            else {
                if (_this.askedHrV2) {
                    // means ask second part of horizontal ques which is vetical both 1st and 4th
                    _this.checkAnswerVer();
                }
                else {
                    // horizontal entered in 3rd quardrant
                    _this.checkAnswerH1();
                }
            }
        }
        if (_this.correct == true) {
            for (var i = 0; i < _this.objDelArray.length; i++) {
                if (_this.objDelArray[i] != null) {
                    _this.objDelArray[i].inputEnabled = false;
                    _this.objDelArray[i].frame = 1;
                }
            }
            if ((_this.selectedcase == 2 && _this.askedHrV2) || _this.selectedcase == 1) {
                _this.correctans.play();
                _this.correctAns();
            }
            else {
                _this.counterCelebrationSound.play();
                // Storing previous lines as to delete later
                _this.prevObjArr = [];
                for (var i = 0; i < _this.objDelArray.length; i++) {
                    if (_this.objDelArray[i] != null) {
                        _this.prevObjArr.push(_this.objDelArray[i])

                    }
                }
                _this.time.events.add(1000, () => {
                    _this.clearObjects();
                    _this.askedHrV2 = true;
                    _this.storeNewCordinates();
                })

            }
        } else {
            _this.noofAttempts ++;
            _this.wrongans.play();
            _this.wrongAns();
        }


    },
    storeNewCordinates: function () {

        if (_this.selectedHrCase == 1) {
            _this.xdotCordinates = [55, 132, 209, 286, 363, 440, 517, 594, 671, 748, 825];
            _this.ydotCordinates = [290, 362, 435, 508];
            _this.disableUpperHalf();
            _this.enableHrDots();
            _this.qn_flag = 2;
            if(_this.no11 == 0) _this.askQ1.play();
        }
        else {
            _this.xdotCordinates = [440, 517, 594, 671, 748, 825];
            _this.ydotCordinates = [72, 145, 218, 290, 362, 435, 508];
            _this.diableHrDots();
            _this.enableVrDots();
            _this.qn_flag = 1;
            if(_this.no11 == 0) _this.askQ1.play();
        }
    },
    starActions: function (target) {

        // if (_this.no11 >= 0) {
       // _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.no11);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        
         //* star Actions changes
        //  _this.userHasPlayed =1;
        //  _this.timeinMinutes = _this.minutes;
        //  _this.timeinSeconds = _this.seconds;
        //  _this.game_id = "GMS_01_G6";
        //  _this.grade = "6";
        //  _this.gradeTopics = "Shapes";
         _this.microConcepts = "Geometry";
         
        anim.play();
        _this.no11++;

        // }
        // else
        //     _this.count1++;

    },
    correctAns: function () {

        if (_this.no11 < 5) {

            _this.noofAttempts ++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.starActions(_this.no11);
            _this.time.events.add(2000, _this.eraseAll);
            _this.time.events.add(3000, _this.randomization);

        }
        else {
            _this.starActions(_this.no11);

            _this.time.events.add(2000, _this.eraseAll);
            _this.time.events.add(2500, () => {
                //_this.state.start('score', true, false);
                _this.state.start('score', true, false,gameID,_this.microConcepts);

            })
        }

    },
    wrongAns: function () {

        for (i = 0; i < _this.objDelArray.length; i++) {
            if (_this.objDelArray[i] != null) {
                _this.objDelArray[i].destroy();

            }
        }
        _this.clearObjects();
        _this.tickMark.inputEnabled = true;

    },
    clearObjects: function () {
        _this.objDelArray = [];
        _this.FselectedArr = [];
        _this.NullCount = 0;
        _this.correct = true;
        _this.hasprevvalue = false;
        _this.repeatedline = false;
        _this.tickMark.inputEnabled = true;

    },

    DisableAllDots: function () {
        for (var i = 0; i < 11; i++) {
            _this.row_graphics1.getChildAt(i).inputEnabled = false;
            _this.row_graphics1.getChildAt(i).useHandCursor = false;
            _this.row_graphics2.getChildAt(i).inputEnabled = false;
            _this.row_graphics2.getChildAt(i).useHandCursor = false;
            _this.row_graphics3.getChildAt(i).inputEnabled = false;
            _this.row_graphics3.getChildAt(i).useHandCursor = false;
            _this.row_graphics4.getChildAt(i).inputEnabled = false;
            _this.row_graphics4.getChildAt(i).useHandCursor = false;
            _this.row_graphics5.getChildAt(i).inputEnabled = false;
            _this.row_graphics5.getChildAt(i).useHandCursor = false;
            _this.row_graphics6.getChildAt(i).inputEnabled = false;
            _this.row_graphics6.getChildAt(i).useHandCursor = false;
            _this.row_graphics7.getChildAt(i).inputEnabled = false;
            _this.row_graphics7.getChildAt(i).useHandCursor = false;

            _this.row_graphics11.getChildAt(i).allowDrag = false;
            _this.row_graphics21.getChildAt(i).allowDrag = false;
            _this.row_graphics31.getChildAt(i).allowDrag = false;
            _this.row_graphics41.getChildAt(i).allowDrag = false;
            _this.row_graphics51.getChildAt(i).allowDrag = false;
            _this.row_graphics61.getChildAt(i).allowDrag = false;
            _this.row_graphics71.getChildAt(i).allowDrag = false;

        }
    },
    disableUpperHalf: function () {

        for (var i = 0; i < 11; i++) {
            _this.row_graphics1.getChildAt(i).inputEnabled = false;
            _this.row_graphics1.getChildAt(i).useHandCursor = false;
            _this.row_graphics2.getChildAt(i).inputEnabled = false;
            _this.row_graphics2.getChildAt(i).useHandCursor = false;
            _this.row_graphics3.getChildAt(i).inputEnabled = false;
            _this.row_graphics3.getChildAt(i).useHandCursor = false;

            _this.row_graphics11.getChildAt(i).allowDrag = false;
            _this.row_graphics21.getChildAt(i).allowDrag = false;
            _this.row_graphics31.getChildAt(i).allowDrag = false;

        }
    },
    disableLowerHalf: function () {
        console.log("diabling all lower")

        for (var i = 0; i < 11; i++) {

            _this.row_graphics5.getChildAt(i).inputEnabled = false;
            _this.row_graphics5.getChildAt(i).useHandCursor = false;
            _this.row_graphics6.getChildAt(i).inputEnabled = false;
            _this.row_graphics6.getChildAt(i).useHandCursor = false;
            _this.row_graphics7.getChildAt(i).inputEnabled = false;
            _this.row_graphics7.getChildAt(i).useHandCursor = false;


            _this.row_graphics51.getChildAt(i).allowDrag = false;
            _this.row_graphics61.getChildAt(i).allowDrag = false;
            _this.row_graphics71.getChildAt(i).allowDrag = false;
        }
    },
    disableVrDots: function () {
        for (var i = 6; i < 11; i++) {
            _this.row_graphics1.getChildAt(i).inputEnabled = false;
            _this.row_graphics1.getChildAt(i).useHandCursor = false;
            _this.row_graphics2.getChildAt(i).inputEnabled = false;
            _this.row_graphics2.getChildAt(i).useHandCursor = false;
            _this.row_graphics3.getChildAt(i).inputEnabled = false;
            _this.row_graphics3.getChildAt(i).useHandCursor = false;
            _this.row_graphics4.getChildAt(i).inputEnabled = false;
            _this.row_graphics4.getChildAt(i).useHandCursor = false;
            _this.row_graphics5.getChildAt(i).inputEnabled = false;
            _this.row_graphics5.getChildAt(i).useHandCursor = false;
            _this.row_graphics6.getChildAt(i).inputEnabled = false;
            _this.row_graphics6.getChildAt(i).useHandCursor = false;
            _this.row_graphics7.getChildAt(i).inputEnabled = false;
            _this.row_graphics7.getChildAt(i).useHandCursor = false;


            _this.row_graphics11.getChildAt(i).allowDrag = false;
            _this.row_graphics21.getChildAt(i).allowDrag = false;
            _this.row_graphics31.getChildAt(i).allowDrag = false;
            _this.row_graphics41.getChildAt(i).allowDrag = false;
            _this.row_graphics51.getChildAt(i).allowDrag = false;
            _this.row_graphics61.getChildAt(i).allowDrag = false;
            _this.row_graphics71.getChildAt(i).allowDrag = false;
        }
    },
    diableHrDots: function () {

        for (var i = 0; i < 5; i++) {
            _this.row_graphics1.getChildAt(i).inputEnabled = false;
            _this.row_graphics1.getChildAt(i).useHandCursor = false;
            _this.row_graphics2.getChildAt(i).inputEnabled = false;
            _this.row_graphics2.getChildAt(i).useHandCursor = false;
            _this.row_graphics3.getChildAt(i).inputEnabled = false;
            _this.row_graphics3.getChildAt(i).useHandCursor = false;
            _this.row_graphics4.getChildAt(i).inputEnabled = false;
            _this.row_graphics4.getChildAt(i).useHandCursor = false;
            _this.row_graphics5.getChildAt(i).inputEnabled = false;
            _this.row_graphics5.getChildAt(i).useHandCursor = false;
            _this.row_graphics6.getChildAt(i).inputEnabled = false;
            _this.row_graphics6.getChildAt(i).useHandCursor = false;
            _this.row_graphics7.getChildAt(i).inputEnabled = false;
            _this.row_graphics7.getChildAt(i).useHandCursor = false;


            _this.row_graphics11.getChildAt(i).allowDrag = false;
            _this.row_graphics21.getChildAt(i).allowDrag = false;
            _this.row_graphics31.getChildAt(i).allowDrag = false;
            _this.row_graphics41.getChildAt(i).allowDrag = false;
            _this.row_graphics51.getChildAt(i).allowDrag = false;
            _this.row_graphics61.getChildAt(i).allowDrag = false;
            _this.row_graphics71.getChildAt(i).allowDrag = false;
        }



    },
    EnableAllDots: function () {
        // console.log("bringing every dot to top to easily drag")

        _this.game.world.bringToTop(_this.row_graphics1)

        _this.game.world.bringToTop(_this.row_graphics2)

        _this.game.world.bringToTop(_this.row_graphics3)

        _this.game.world.bringToTop(_this.row_graphics4)

        _this.game.world.bringToTop(_this.row_graphics5)

        _this.game.world.bringToTop(_this.row_graphics6)

        _this.game.world.bringToTop(_this.row_graphics7)


        _this.game.world.bringToTop(_this.additionalGraphics)


    },
    enableVrDots: function () {
        for (var i = 5; i < 11; i++) {
            _this.row_graphics1.getChildAt(i).inputEnabled = true;
            _this.row_graphics1.getChildAt(i).useHandCursor = true;
            _this.row_graphics2.getChildAt(i).inputEnabled = true;
            _this.row_graphics2.getChildAt(i).useHandCursor = true;
            _this.row_graphics3.getChildAt(i).inputEnabled = true;
            _this.row_graphics3.getChildAt(i).useHandCursor = true;
            _this.row_graphics4.getChildAt(i).inputEnabled = true;
            _this.row_graphics4.getChildAt(i).useHandCursor = true;
            _this.row_graphics5.getChildAt(i).inputEnabled = true;
            _this.row_graphics5.getChildAt(i).useHandCursor = true;
            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics6.getChildAt(i).useHandCursor = true;
            _this.row_graphics7.getChildAt(i).inputEnabled = true;
            _this.row_graphics7.getChildAt(i).useHandCursor = true;


            _this.row_graphics11.getChildAt(i).allowDrag = true;
            _this.row_graphics21.getChildAt(i).allowDrag = true;
            _this.row_graphics31.getChildAt(i).allowDrag = true;
            _this.row_graphics41.getChildAt(i).allowDrag = true;
            _this.row_graphics51.getChildAt(i).allowDrag = true;
            _this.row_graphics61.getChildAt(i).allowDrag = true;
            _this.row_graphics71.getChildAt(i).allowDrag = true;

        }
    },
    enableHrDots: function () {
        for (var i = 0; i < 11; i++) {

            _this.row_graphics4.getChildAt(i).inputEnabled = true;
            _this.row_graphics4.getChildAt(i).useHandCursor = true;
            _this.row_graphics5.getChildAt(i).inputEnabled = true;
            _this.row_graphics5.getChildAt(i).useHandCursor = true;
            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics6.getChildAt(i).useHandCursor = true;
            _this.row_graphics7.getChildAt(i).inputEnabled = true;
            _this.row_graphics7.getChildAt(i).useHandCursor = true;


            _this.row_graphics41.getChildAt(i).allowDrag = true;
            _this.row_graphics51.getChildAt(i).allowDrag = true;
            _this.row_graphics61.getChildAt(i).allowDrag = true;
            _this.row_graphics71.getChildAt(i).allowDrag = true;
        }
    },

    dragupdate: function (target) {
        // console.log("DRAGUPDATED");
        // console.log(_this.hasprevvaluex)
        // console.log(_this.hasprevvaluey)

        // console.log(target.y);
        // console.log(target.x);
        target.alpha = 1;

        _this.EnableAllDots();

        if (!_this.dotSelected) {


            _this.dotSelected = true;
            _this.dotSelectedX = target.initialXvalue;
            _this.dotSelectedY = target.initialYvalue;
            _this.dotSelectedName = target.name;
            // _this.starActions(_this.no11);

            _this.initialxPt = Math.ceil(target.initialXvalue)
            _this.initialyPt = Math.ceil(target.initialYvalue)


        }

        if (_this.linegraphics)
            _this.linegraphics.destroy();
        _this.linegraphics = _this.add.graphics();
        _this.linegraphics.lineStyle(8, 0x3CB371);
        _this.linegraphics.moveTo(_this.initialxPt, _this.initialyPt);
        _this.linegraphics.lineTo(target.x, target.y);
        // drawing a straight line till target
        _this.hasprevvalue = true;
        _this.hasprevvaluex = _this.initialxPt;
        _this.hasprevvaluey = _this.initialyPt;
        // console.log(_this.hasprevvaluex + " " +_this.hasprevvaluey)



        for (i = 0; i < 11; i++) {
            if (_this.checkOverlap(target, _this.row_graphics11.getChildAt(i)) && (_this.initialxPt != _this.row_graphics11.getChildAt(i).x || _this.initialyPt != _this.row_graphics11.getChildAt(i).y) && (_this.row_graphics11.getChildAt(i).allowDrag == true)) {
                _this.gotx = true;
                _this.goty = true;

                _this.x = _this.row_graphics11.getChildAt(i).x;
                _this.y = _this.row_graphics11.getChildAt(i).y;

                break;

            }
            else if (_this.checkOverlap(target, _this.row_graphics21.getChildAt(i)) && (_this.initialxPt != _this.row_graphics21.getChildAt(i).x || _this.initialyPt != _this.row_graphics21.getChildAt(i).y) && (_this.row_graphics21.getChildAt(i).allowDrag == true)) {
                _this.gotx = true;
                _this.goty = true;
                _this.x = _this.row_graphics21.getChildAt(i).x;
                _this.y = _this.row_graphics21.getChildAt(i).y;

                break;

            }
            else if (_this.checkOverlap(target, _this.row_graphics31.getChildAt(i)) && (_this.initialxPt != _this.row_graphics31.getChildAt(i).x || _this.initialyPt != _this.row_graphics31.getChildAt(i).y) && (_this.row_graphics31.getChildAt(i).allowDrag == true)) {
                _this.gotx = true;
                _this.goty = true;
                _this.x = _this.row_graphics31.getChildAt(i).x;
                _this.y = _this.row_graphics31.getChildAt(i).y;

                break;

            }
            else if (_this.checkOverlap(target, _this.row_graphics41.getChildAt(i)) && (_this.initialxPt != _this.row_graphics41.getChildAt(i).x || _this.initialyPt != _this.row_graphics41.getChildAt(i).y) && (_this.row_graphics41.getChildAt(i).allowDrag == true)) {
                // console.log("yes oevrlapping2")
                _this.gotx = true;
                _this.goty = true;
                _this.x = _this.row_graphics41.getChildAt(i).x;
                _this.y = _this.row_graphics41.getChildAt(i).y;

                break;

            }
            else if (_this.checkOverlap(target, _this.row_graphics51.getChildAt(i)) && (_this.initialxPt != _this.row_graphics51.getChildAt(i).x || _this.initialyPt != _this.row_graphics51.getChildAt(i).y) && (_this.row_graphics51.getChildAt(i).allowDrag == true)) {
                _this.gotx = true;
                _this.goty = true;
                _this.x = _this.row_graphics51.getChildAt(i).x;
                _this.y = _this.row_graphics51.getChildAt(i).y;

                break;

            }
            else if (_this.checkOverlap(target, _this.row_graphics61.getChildAt(i)) && (_this.initialxPt != _this.row_graphics61.getChildAt(i).x || _this.initialyPt != _this.row_graphics61.getChildAt(i).y) && (_this.row_graphics61.getChildAt(i).allowDrag == true)) {
                _this.gotx = true;
                _this.goty = true;
                _this.x = _this.row_graphics61.getChildAt(i).x;
                _this.y = _this.row_graphics61.getChildAt(i).y;

                break;

            }
            else if (_this.checkOverlap(target, _this.row_graphics71.getChildAt(i)) && (_this.initialxPt != _this.row_graphics71.getChildAt(i).x || _this.initialyPt != _this.row_graphics71.getChildAt(i).y) && (_this.row_graphics71.getChildAt(i).allowDrag == true)) {
                _this.gotx = true;
                _this.goty = true;
                _this.x = _this.row_graphics71.getChildAt(i).x;
                _this.y = _this.row_graphics71.getChildAt(i).y;


                break;

            }

        }
    },

    dragstop: function (target) {
        if (_this.linegraphics) {
            _this.linegraphics.destroy();
        }
        _this.game.world.bringToTop(target)

        if (_this.gotx && _this.goty) {
            _this.gotx = false;
            _this.goty = false;

            // console.log("gotx vakues")
            // console.log("got values")


            if (_this.hasprevvalue && (_this.hasprevvaluex != _this.x || _this.hasprevvaluey != _this.y)) {
                // WE have to make a check if already line has been drawn at that place

                _this.gotx = true;
                _this.goty = true;
                if (_this.linegraphics)
                    _this.linegraphics.destroy();

                if (_this.y === _this.hasprevvaluey) {
                    //    line 1
                    _this.linetype = 'GMS_01_G6_image_anim1';



                    x = (_this.hasprevvaluex < _this.x ? _this.hasprevvaluex - 4 : _this.x - 4);
                    y = _this.y - 4.5;

                    if (_this.questionNo == 3) {
                        y = _this.y - 6;
                        if (y > 290)
                            y = _this.y - 4.5;
                    }
                    if (_this.questionNo == 1) {
                        y = _this.y - 5;

                    }
                    if (_this.questionNo == 6 && y > 500) {
                        y = _this.y - 6;
                        x = x - 1;


                    }
                    if (_this.questionNo == 6 && y > 410) {
                        x = x - 2;

                    }
                    if (_this.questionNo == 4) {
                        y = y - 1;
                    }
                    if (_this.questionNo == 7 && y > 355 && y < 370) {
                        y = y - 1;
                    }

                    if (!_this.FselectedArr.includes(_this.linetype + x + y)) {
                        _this.line = _this.add.sprite(x, y, 'GMS_01_G6_image_anim1')
                        _this.repeatedline = false;

                    }
                    else {
                        _this.repeatedline = true;
                    }


                    _this.initialxPt = _this.x;
                    _this.initialyPt = _this.y;

                }
                else if (_this.x === _this.hasprevvaluex) {
                    //   vertical line
                    _this.linetype = 'GMS_01_G6_image_anim2';

                    x = _this.hasprevvaluex - 4;
                    y = _this.hasprevvaluey < _this.y ? _this.hasprevvaluey - 4 : _this.y - 4;
                    if (_this.questionNo == 3) {
                        y = y - 1;
                    }
                    if (_this.questionNo == 1) {
                        y = y - 1;

                    }
                    if (_this.questionNo == 4) {
                        y = y - 1;
                    }

                    if (!_this.FselectedArr.includes(_this.linetype + x + y)) {

                        _this.line = _this.add.sprite(x, y, 'GMS_01_G6_image_anim2')
                        _this.repeatedline = false;

                    }
                    else {
                        _this.repeatedline = true;
                    }
                    _this.initialxPt = _this.x;
                    _this.initialyPt = _this.y;

                }
                else if ((_this.y > _this.hasprevvaluey && _this.x > _this.hasprevvaluex) || (_this.hasprevvaluey > _this.y && _this.hasprevvaluex > _this.x)) {
                    //    right
                    _this.linetype = 'GMS_01_G6_image_anim3';

                    x = _this.hasprevvaluex < _this.x ? _this.hasprevvaluex - 4 : _this.x - 4;
                    y = _this.hasprevvaluey < _this.y ? _this.hasprevvaluey - 4 : _this.y - 4;
                    if (_this.questionNo == 7) {
                        y = y - 1
                    }
                    if (_this.questionNo == 6 && y > 310) {
                        x = x - 2;
                        y = y - 1;
                    }
                    if (!_this.FselectedArr.includes(_this.linetype + x + y)) {

                        _this.line = _this.add.sprite(x, y, 'GMS_01_G6_image_anim3')
                        _this.repeatedline = false;

                    }
                    else {
                        _this.repeatedline = true;
                    }
                    _this.initialxPt = _this.x;
                    _this.initialyPt = _this.y;


                }
                else {
                    //    left
                    _this.linetype = 'GMS_01_G6_image_anim4';

                    x = _this.hasprevvaluex < _this.x ? _this.hasprevvaluex - 4 : _this.x - 4;
                    y = _this.hasprevvaluey < _this.y ? _this.hasprevvaluey - 4 : _this.y - 4;
                    if (!_this.FselectedArr.includes(_this.linetype + x + y)) {

                        _this.line = _this.add.sprite(x, y, 'GMS_01_G6_image_anim4')
                        _this.repeatedline = false;

                    }
                    else {
                        _this.repeatedline = true;
                    }
                    _this.initialxPt = _this.x;
                    _this.initialyPt = _this.y;

                }

                if (_this.repeatedline != true) {
                    _this.currentGrp.add(_this.line);

                    _this.line.name = _this.objDelArray.length

                    _this.line.lineType = _this.linetype
                    _this.line.inputEnabled = true;
                    _this.line.lasttime = 0;
                    _this.objDelArray.push(_this.line)

                    _this.FselectedArr.push(_this.linetype + _this.line.x + _this.line.y)
                    if (_this.selectedcase == 2 && !_this.askedHrV2) {
                        _this.checkIfAllSelected();

                    }

                }

            }
            if (_this.hasprevvalue && (_this.hasprevvaluex != _this.x || _this.hasprevvaluey != _this.y)) {
                _this.hasprevvalue = true;
                _this.hasprevvaluex = _this.initialxPt;
                _this.hasprevvaluey = _this.initialyPt;
            }

        }
        _this.gotx = false;
        _this.goty = false;

        // Make each dot on top so we can drag easily

        _this.EnableAllDots();


        target.alpha = 0;

        if (_this.dotSelected == true) {
            _this.dotSelected = false;

            target.inputEnabled = false;
            _this.graphics = _this.add.graphics(_this.dotSelectedX, _this.dotSelectedY);
            _this.graphics.beginFill(0xFF0000, 1);
            _this.graphics.drawCircle(0, 0, 32);
            _this.graphics.alpha = 0;
            _this.graphics.initialXvalue = target.initialXvalue;
            _this.graphics.initialYvalue = target.initialYvalue;
            _this.graphics.name = _this.dotSelectedName;
            _this.graphics.boundsPadding = 0;

            _this.graphics.inputEnabled = true;
            _this.graphics.useHandCursor = true;
            _this.graphics.input.enableDrag(true)


            _this.graphics.events.onDragUpdate.add(_this.dragupdate, _this);
            _this.graphics.events.onDragStop.add(_this.dragstop, _this);
            _this.additionalGraphics.add(_this.graphics);


        }
        _this.repeatedline = false;
        _this.currentGrp = null;
        _this.currentGrp = _this.add.group();
        _this.hasprevvalue = false;

    },


    //dragstop: function (target) {
    //    target.alpha = 0;
    //    if (_this.linegraphics) {
    //        _this.linegraphics.destroy();
    //    }
    //    if (_this.dotSelected == true) {
    //        _this.dotSelected = false;
    //        target.inputEnabled = false;
    //        _this.graphics = _this.add.graphics(_this.dotSelectedX, _this.dotSelectedY);
    //        _this.graphics.beginFill(0xFF0000, 1);
    //        _this.graphics.drawCircle(0, 0, 32);
    //        _this.graphics.alpha = 0;
    //        _this.graphics.initialXvalue = target.initialXvalue;
    //        _this.graphics.initialYvalue = target.initialYvalue;
    //        _this.graphics.name = _this.dotSelectedName;
    //        _this.graphics.boundsPadding = 0;
    //        _this.additionalGraphics.add(_this.graphics);
    //
    //        _this.graphics.inputEnabled = true;
    //        _this.graphics.useHandCursor = true;
    //        _this.graphics.input.enableDrag(true)
    //
    //
    //        _this.graphics.events.onDragUpdate.add(_this.dragupdate, _this);
    //        _this.graphics.events.onDragStop.add(_this.dragstop, _this);
    //
    //    }
    //    _this.repeatedline = false;
    //    _this.currentGrp = null;
    //    _this.currentGrp = _this.add.group();
    //    _this.hasprevvalue = false;
    //},
    deleteLines: function (target) {

        _this.hasprevvalue = false;

        for (var i = 0; i < _this.objDelArray.length; i++) {
            // console.log("checking lines if any overlaps")
            if (_this.objDelArray[i] != null && _this.checkOverlap(_this.objDelArray[i], target)) {
                // We have found line to delete
                _this.FselectedArr[i] = null;
                _this.objDelArray[i].destroy();
                _this.objDelArray[i] = null;
                _this.NullCount += 1;

                break;
            }

        }
        _this.time.events.add(100, () => {
             // Making eraser to got at inital position;
            target.x = _this.world.centerX + 420;
            target.y = _this.world.centerY - 30;
            // target.scale.setTo(0.28,0.3);
        })


    },
    eraserUpdate: function () {
        _this.world.bringToTop(_this.eraser)
        // _this.eraser.scale.setTo(0.25);
    },
    removeListeners: function () {
        _this.crayon.inputEnabled = false;
        _this.eraser.inputEnabled = false;
    },

    eraseAll: function () {
        _this.qn_flag = -1;
        if (_this.image5)
            _this.image5.destroy();
        if (_this.image6)
            _this.image6.destroy();
        if (_this.image7)
            _this.image7.destroy();
        if (_this.image8)
            _this.image8.destroy();
        if (_this.image9)
            _this.image9.destroy();
        if (_this.image10)
            _this.image10.destroy();
        if (_this.image11)
            _this.image11.destroy();
        if (_this.image12)
            _this.image12.destroy();

        _this.wrongAns();
        _this.tickMark.destroy();
        _this.eraser.destroy();
        if (_this.graphicsEq12)
            _this.graphicsEq12.destroy();
        if (_this.graphicsAddVr)
            _this.graphicsAddVr.destroy();

        if (_this.prevObjArr) {
            _this.prevObjArr.forEach(element => {
                element.destroy();
            });
        }
        _this.additionalGraphics.destroy();
        _this.row_graphics1.destroy();
        _this.row_graphics2.destroy();
        _this.row_graphics3.destroy();
        _this.row_graphics4.destroy();
        _this.row_graphics5.destroy();
        _this.row_graphics6.destroy();
        _this.row_graphics7.destroy();


    },

    checkOverlap: function (spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    update: function () {

    },

    getVoice: function () {
        _this.stopVoice();

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        if (_this.languageSelected == "English") {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/GMS-01-G6/English/GMS_01_G6.mp3");
        }
        else if (_this.languageSelected == "Hindi") {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/GMS-01-G6/Hindi/GMS_01_G6.mp3");
        }
        else if (_this.languageSelected == "Kannada") {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/GMS-01-G6/Kannada/GMS_01_G6.mp3");
        }
        else if (_this.languageSelected == "Gujarati") {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/GMS-01-G6/Gujarati/GMS_01_G6.mp3");
        }
        else if (_this.languageSelected == "Marathi") {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/GMS-01-G6/Marathi/GMS_01_G6.mp3");
        }
        else if (_this.languageSelected == "Telugu") {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/GMS-01-G6/Telugu/GMS_01_G6.mp3");
        }
        else if (_this.languageSelected == "Tamil") {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/GMS-01-G6/Tamil/GMS_01_G6.mp3");
        }
        else if (_this.languageSelected == "Urdu") {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/GMS-01-G6/Urdu/GMS_01_G6.mp3");
        }
        else {
            _this.src.setAttribute("src",  window.baseUrl+"questionSounds/GMS-01-G6/Odiya/GMS_01_G6.mp3");
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();

    },

    stopVoice: function () {
        if (_this.playQuestionSound) {
            if (_this.playQuestionSound.contains(_this.src)) {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if (!_this.playQuestionSound.paused) {
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
        if (_this.amplify != null) {
            _this.amplify.context.close();
            _this.amplify = null;
        }
    },

    shutdown: function () {
        //        _this.stopVoice();

        _this.drawingsound.pause();
        _this.askQ1.pause();
       // _this.askQ2.pause();
        _this.correctans.pause();
        _this.wrongans.pause();
        _this.counterCelebrationSound.pause();

    },

    DemoVideo:function()
    {
       
        //*  complete the picture for the given line of symmetry
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl+"questionSounds/GMS-01-G6/" + 
                                        _this.languageSelected + "/GMS_01_G6.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function ()
        {
            
            _this.stopAudio();
            if(_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if(_this.videoWorld_1)
                _this.videoWorld_1.destroy();
            if(_this.hintBtn)
            {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true; 
            }
            _this.game.paused = false;  //* restart the game
        });
    },

    stopAudio: function()
    {    
        //* clear all the timers first
        if (_this.q1Timer) clearTimeout(_this.q1Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer);  
    
        if (_this.q1Sound)
        {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }
        
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed
    },

    showDemoVideo:function()
    {
      
        _this.demoVideo_1 = _this.add.video('gms01_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl+"assets/demoVideos/GMS-01-G6.mp4");
        _this.video_playing = 1;        
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();
    
        //* play the demo audio1 after 1 sec delay
        _this.q1Timer = setTimeout(function()    //* q1Sound js timer to play q2Timer after 3 seconds.
        {
            console.log("inside demoAudio1sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 6000);

        _this.q2Timer = setTimeout(function()    //* q1Sound js timer to play q2Timer after 16 seconds.
        {
            console.log("inside demoAudio1sound.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 16000);
                     
        _this.demoVideo_1.onComplete.add(function()
        {
            _this.stopAudio(); 
            _this.demoVideo_1.stop(false);
            _this.videoWorld_1.destroy();
            if(_this.hintBtn)
            {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true; 
            }
            _this.game.paused = false; 
        });
    }

};