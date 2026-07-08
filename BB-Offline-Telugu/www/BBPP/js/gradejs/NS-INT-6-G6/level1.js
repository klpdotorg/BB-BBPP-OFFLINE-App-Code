Game.NS_INT_6_G6level1 = function () { };


Game.NS_INT_6_G6level1.prototype = {

    init: function (game) {
        _this = this;

        //* Fruit seller game. Boy/girl asks fruits. Transaction can be +, - or zero.
        //* this is a real life application of integers.

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

        //telInitializerbbpp.gameIdInit("sequence2_1_1a",gradeSelected);

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


        _this.bellsound = document.createElement('audio');
        _this.bellsoundsrc = document.createElement('source');
        _this.bellsoundsrc.setAttribute("src", window.baseUrl + "sounds/bellsound.mp3");
        _this.bellsound.appendChild(_this.bellsoundsrc);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        telInitializerbbpp.gameIdInit("NS_INT_6_G6", gradeSelected);
        console.log(gameID,"gameID...");
    },



    create: function (game) {

        _this.amplify = null;

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.qArrays;
        //_this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.group1;
        _this.group2;
        _this.group3;

        _this.opt = new Array();
        _this.correctans = 0;
        _this.questionNo = 0;

        _this.background;
        _this.click3;

        _this.click4;
        _this.rightCount;

        _this.opt1;
        _this.opt2;
        _this.opt3;

        _this.wmusic;
        _this.wrong = true;

        _this.count = 0;
        _this.clickSound;

        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0
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

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        //_this.count=0;
        //_this.count1=0;
        _this.celebration = false;

        _this.reset = -1;
        _this.glowminus;

        _this.qArrays = new Array();

        _this.qArrays = [1, 2, 3, 4, 5, 6];
        _this.qArrays = _this.shuffle(_this.qArrays);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.tray_base = _this.add.image(290, 200, 'box');
        _this.tray_base1 = _this.add.image(530, 30, 'box');
        _this.tray_base1.scale.setTo(0.8, 1.3);

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'Q4_bg');
        _this.background.scale.setTo(1, 1);
        _this.navBar = _this.add.sprite(0, 0, 'navBar');
        _this.navBar.scale.setTo(1, 1);

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
            //_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.Q6_Question();


        }, _this);

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';


        _this.generateStarsForTheScene(6);


        _this.man = _this.add.sprite(140, 70, 'Store_man');
        _this.man.name = "Store_man";
        _this.man.frame = 0;
        //_this.Mann =_this.man.animations.add('Store_man');
        //_this.man.animations.play('Store_man', 10, true);

        _this.Bell = _this.add.sprite(100, 130, 'Bellanim');
        _this.Bell.anchor.setTo(0.5);
        _this.Bell.visible = true;
        _this.Bell.scale.set(1);

        _this.Bellanim = _this.Bell.animations.add('Bellanim');

        //        _this.bellsound.volume = 0.5;

        _this.time.events.add(700, function () {
            _this.Bell.animations.play('Bellanim', 17, true);
            _this.bellsound.currentTime = 0;
            _this.bellsound.play();
        });

        /*_this.time.events.add(500, function() //2500
        {
            _this.Bell.animations.play('Bellanim', 15, false);
            _this.bellsound.currentTime = 0;
            _this.bellsound.play();
        });*/

        /*_this.time.events.add(4300, function() 
        {
            _this.Bell.animations.play('Bellanim', 15, false);
            _this.bellsound.currentTime = 0;
            _this.bellsound.play();
        });*/

        //bell animation for 2500 milliseconds.
        _this.time.events.add(3432, function () {
            _this.Bell.animations.stop();

        });

        _this.Bell.frame = 0;
        _this.cart = _this.add.image(5, 45, 'gaadi');
        _this.cart.scale.setTo(1.0, 0.9);

        //_this.add.image(150,220,'tray');
        _this.keepertray = _this.add.image(100, 220, 'tray');
        _this.keepertray.scale.setTo(1.2, 1.1);


        _this.BoyGirl = _this.add.sprite('BoyGirl');
        //_this.BoyGirl.scale.setTo(0.6,0.6);
        //_this.BoyGirl;//.name = "BoyGirl";
        //_this.BoyGirl.frame=0;

        //_this.BoyandGirl =_this.BoyGirl.animations.add('BoyGirl');
        //_this.BoyGirl.animations.play('BoyGirl', 1, true);

        //_this.base=_this.add.image(770,55,'base');
        //_this.base.scale.setTo(0.7,0.9);


        _this.plus1 = _this.add.image(749, 67, 'plusGlow');
        _this.plus1.scale.setTo(1.2, 1.2);
        _this.plus1.frame = 0;
        _this.plus2 = _this.add.image(749, 67, 'plusGlow');
        _this.plus2.scale.setTo(1.2, 1.2);
        _this.plus2.frame = 0;

        _this.plus2.name = "+2";
        //        console.log(_this.plus2.name);

        _this.vx = _this.plus2.x;
        _this.vy = _this.plus2.y;
        //        console.log(_this.vx);
        //        console.log(_this.vy);
        _this.minus1 = _this.add.image(821, 67, 'minusGlow');
        _this.minus1.scale.setTo(1.2, 1.2);
        _this.minus2 = _this.add.image(821, 67, 'minusGlow');
        _this.minus2.scale.setTo(1.2, 1.2);


        /*_this.plusApple1 = _this.add.sprite(200,200,'plusApple');
        _this.plusApple1.name = "plusApple";        
        _this.plusApple2 =_this.plusApple1.animations.add('plusApple');
        _this.plusApple1.animations.play('plusApple', 10, true);

        _this.plusApple1 = _this.add.sprite(300,300,'plusApple');
        _this.plusApple1.name = "plusApple";        
        _this.plusApple2 =_this.plusApple1.animations.add('plusApple');
        _this.plusApple1.animations.play('plusApple', 10, true)*/


        _this.objGroup;
        _this.numGroup;
        //_this.num=8;
        _this.numGroup1 = [0, 1, 2, 3, 4, 5, 6, 7];
        //_this.numGroup1 = _this.add.group();
        _this.objGroup1;
        //_this.objGroup1=_this.add.group();
        _this.numGroupA;
        _this.numGroupB;

        //        _this.ScreenTextBox = _this.add.sprite(870,450,'ScreenTextBox');
        //        _this.ScreenTextBox.anchor.setTo(0.5);
        //        _this.ScreenTextBox.visible=true;
        //        _this.ScreenTextBox.scale.set(0.5);


        _this.rightAns;
        _this.repeat1 = 1;

        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.selectedAns4 = "";
        _this.signplus;
        _this.signminus;

        _this.c = 1;
        _this.count1 = 0;
        //_this.count=1;
        _this.flag = 3;
        //_this.Apple =_this.add.image(313, 223,'plusApple');
        //_this.Apple.frame=0;
        //_this.flag1=0;
        _this.lightplusApple = _this.add.image('papple');
        //_this.lightplusApple.visible=false;

        _this.apcount = 0;
        _this.amcount = 0;
        /*_this.ap=_this.add.image(552,99,"papple");
        _this.ap.anchor.setTo(0.5);
        _this.ap.scale.setTo(1.1,1.1);*///minus apple in trzy

        _this.time.events.add(4000, _this.getQuestion);

    },

    updateTimer: function () {
        _this.counterForTimer++;
        ////console.log("lololil"+counterForTimer);
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
        //console.log("getQuestion :"+_this.no11);
        //console.log("getQuestion :"+_this.qArrays[_this.no11]);




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

        _this.qArrays[_this.no11] = 1;
        _this.Q6_options = [1, 2, 3, 1, 3, 1];
        _this.Q6_options = _this.shuffle(_this.Q6_options);
        _this.flag1 = 0;
        _this.NoOfApple = [1, 2, 3, 4, 5, 6, 7, 8];
        _this.NoOfApple = _this.shuffle(_this.NoOfApple)
        _this.flag2 = 0;
        //        console.log("1 "+_this.NoOfApple[0]);
        //        console.log("2 "+_this.NoOfApple[1]);
        //        console.log("3 "+_this.NoOfApple[2]);
        //        console.log("4 "+_this.NoOfApple[3]);
        //        console.log("5 "+_this.NoOfApple[4]);
        //        console.log("6 "+_this.NoOfApple[5]);
        //        console.log("7 "+_this.NoOfApple[6]);
        //        console.log("8 "+_this.NoOfApple[7]);

        _this.gotoSixthQuestion();

        _this.questionid = 1;
    },

    stopVoice: function () {
        if (_this.playQuestionSound) {
            if (_this.playQuestionSound.contains(_this.src)) {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }

            if (!_this.playQuestionSound.paused) {
                //console.log("here");
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
        }
        if (_this.bellsound) {
            _this.bellsound.pause();
            _this.bellsound = null;
            _this.bellsoundsrc = null;
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

    gotoSixthQuestion: function () {

        _this.sceneCount++;
        _this.AnsTimerCount = 0;
        _this.noofAttempts = 0;

        _this.spot2X = 318;//red minus apple
        _this.spot2Y = 234;//red minus apple          

        _this.plusAppleX = 554;//light plus apple
        _this.plusAppleY = 98;//light plus apple

        _this.signplus = 1;
        _this.signminus = 1;

        _this.BoyGirl.visible = false;



        _this.bgarray = [0, 1];
        _this.bgarray = _this.shuffle(_this.bgarray);
        _this.bgarray[0];

        if (_this.bgarray[0] == 0) {

            _this.BoyGirl = _this.add.sprite(279, 140, 'BoyGirl');

            _this.BoyGirl.scale.setTo(0.9, 0.9);
            _this.BoyGirl.visible = true;
            _this.BoyGirl.frame = 0;
        }

        if (_this.bgarray[0] == 1) {
            //_this.BoyGirl = _this.add.sprite(300,123,'BoyGirl');
            _this.BoyGirl = _this.add.sprite(275, 135, 'BoyGirl');
            _this.BoyGirl.scale.setTo(0.95, 0.95);
            _this.BoyGirl.visible = true;
            //_this.BoyGirl.name = "BoyGirl";
            _this.BoyGirl.frame = 2;

        }

        _this.Q6_3options();
    },


    Q6_3options: function (target) {


        switch (_this.Q6_options[_this.flag1]) {
            case 1: _this.Q6_options_1_3();
                break;
            case 2: _this.Q6_options_2();

                break;
            case 3: _this.Q6_options_3();
                break;
        }

    },


    Q6_options_1: function () {

        _this.time.events.add(1000, _this.BoyGirlAsking);
        _this.time.events.add(2700, _this.Apple_no);

        _this.man.frame = 0;

        if (_this.bgarray[0] == 0) {

            _this.BoyGirl.visible = true;
            _this.BoyGirl.frame = 0;
            _this.man.frame = 0;
            //stay for 1 second like paying money
            _this.BG_stay = _this.add.tween(_this.BoyGirl).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            _this.BG_stay.onComplete.add(function () {
                _this.man.frame = 1;
                _this.BoyGirl.frame = 1;
                //man to stay for 1 second in frame 1 like accepting money. after that change the frame.
                _this.man_stay = _this.add.tween(_this.man).to({ alpha: 1 }, 1000, 'Linear', true, 0);
                _this.man_stay.onComplete.add(function () {
                    _this.man.frame = 2;

                });
            });

        }

        if (_this.bgarray[0] == 1) {

            _this.BoyGirl.visible = true;
            _this.BoyGirl.frame = 2;
            _this.man.frame = 0;
            //stay for 1 second like paying money
            _this.BG_stay = _this.add.tween(_this.BoyGirl).to({ alpha: 1 }, 1000, 'Linear', true, 0);
            _this.BG_stay.onComplete.add(function () {
                _this.man.frame = 1;
                _this.BoyGirl.frame = 3;
                //man to stay for 1 second in frame 1 like accepting money. after that change the frame.
                _this.man_stay = _this.add.tween(_this.man).to({ alpha: 1 }, 1000, 'Linear', true, 0);
                _this.man_stay.onComplete.add(function () {
                    _this.man.frame = 2;

                });
            });

        }
        //             console.log("please take the fruits");
        _this.time.events.add(5000, _this.Q6_SellerVoice);
        //            console.log("plz select num of tranaction");

        _this.time.events.add(7000, _this.Q6_AppleInTray);
        //if(_this.Q6_options[_this.flag1]!=2)
        //{

        _this.time.events.add(10000, _this.Q6_enablingSign);


        _this.time.events.add(7300, _this.Q6_Question);
    },

    Q6_options_1_3: function () {
        //    console.log(_this.NoOfApple[_this.flag2]);
        switch (_this.NoOfApple[_this.flag2]) {
            case 1: _this.Q6_oneApple();
                break;
            case 2: _this.Q6_twoApple();
                break;
            case 3: _this.Q6_threeApple();
                break;
            case 4: _this.Q6_fourApple();
                break;
            case 5: _this.Q6_fiveApple();
                break;
            case 6: _this.Q6_sixApple();
                break;
            case 7: _this.Q6_sevenApple();
                break;
            case 8: _this.Q6_eightApple();
                break;

        }

    },

    Q6_oneApple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.apple1 = _this.add.image(130, 220, 'apple');
            _this.Q6_options_1();

        }
        else if (_this.Q6_options[_this.flag1] == 3) {
            _this.al1 = _this.add.sprite(537, 84, 'lightApple');//537
            _this.al1.frame = 0;

            _this.lightAppleCount1 = 0;//1+applelight

        }
    },

    Q6_twoApple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.apple1 = _this.add.image(130, 220, 'apple');
            _this.apple2 = _this.add.image(160, 220, 'apple');
            _this.Q6_options_1();
        }
        else if (_this.Q6_options[_this.flag1] == 3) {
            _this.al1 = _this.add.sprite(537, 84, 'lightApple');
            _this.al1.frame = 0;
            _this.al2 = _this.add.sprite(572, 84, 'lightApple');
            _this.al2.frame = 0;

            _this.lightAppleCount2 = 0;//2+applelight

        }

    },

    Q6_threeApple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.apple1 = _this.add.image(130, 220, 'apple');
            _this.apple2 = _this.add.image(160, 220, 'apple');
            _this.apple3 = _this.add.image(190, 220, 'apple');
            _this.Q6_options_1();

        }
        else if (_this.Q6_options[_this.flag1] == 3) {
            _this.al1 = _this.add.sprite(537, 84, 'lightApple');
            _this.al1.frame = 0;
            _this.al2 = _this.add.sprite(572, 84, 'lightApple');
            _this.al2.frame = 0;
            _this.al3 = _this.add.sprite(607, 84, 'lightApple');
            _this.al3.frame = 0;

            _this.lightAppleCount3 = 0;//3+applelight


        }
    },


    Q6_fourApple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.apple1 = _this.add.image(130, 220, 'apple');
            _this.apple2 = _this.add.image(160, 220, 'apple');
            _this.apple3 = _this.add.image(190, 220, 'apple');
            _this.apple4 = _this.add.image(220, 220, 'apple');
            _this.Q6_options_1();


        }
        else if (_this.Q6_options[_this.flag1] == 3) {
            _this.al1 = _this.add.sprite(537, 84, 'lightApple');//537
            _this.al1.frame = 0;
            _this.al2 = _this.add.sprite(572, 84, 'lightApple');//572
            _this.al2.frame = 0;
            _this.al3 = _this.add.sprite(607, 84, 'lightApple');//607
            _this.al3.frame = 0;
            _this.al4 = _this.add.sprite(642, 84, 'lightApple');//642
            _this.al4.frame = 0;


            _this.lightAppleCount4 = 0;//4+applelight

        }
    },


    Q6_fiveApple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.apple1 = _this.add.image(130, 220, 'apple');
            _this.apple2 = _this.add.image(160, 220, 'apple');
            _this.apple3 = _this.add.image(190, 220, 'apple');
            _this.apple4 = _this.add.image(220, 220, 'apple');

            _this.apple5 = _this.add.image(130, 250, 'apple');
            _this.Q6_options_1();


        }
        else if (_this.Q6_options[_this.flag1] == 3) {
            _this.al1 = _this.add.sprite(537, 84, 'lightApple');
            _this.al1.frame = 0;
            _this.al2 = _this.add.sprite(572, 84, 'lightApple');
            _this.al2.frame = 0;
            _this.al3 = _this.add.sprite(607, 84, 'lightApple');
            _this.al3.frame = 0;
            _this.al4 = _this.add.sprite(642, 84, 'lightApple');
            _this.al4.frame = 0;

            _this.al5 = _this.add.sprite(537, 124, 'lightApple');
            _this.al5.frame = 0;

            _this.lightAppleCount5 = 0;//5+applelight

        }
    },


    Q6_sixApple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.apple1 = _this.add.image(130, 220, 'apple');
            _this.apple2 = _this.add.image(160, 220, 'apple');
            _this.apple3 = _this.add.image(190, 220, 'apple');
            _this.apple4 = _this.add.image(220, 220, 'apple');

            _this.apple5 = _this.add.image(130, 250, 'apple');
            _this.apple6 = _this.add.image(160, 250, 'apple');
            _this.Q6_options_1();

        }
        else if (_this.Q6_options[_this.flag1] == 3) {
            _this.al1 = _this.add.sprite(537, 84, 'lightApple');
            _this.al1.frame = 0;
            _this.al2 = _this.add.sprite(572, 84, 'lightApple');
            _this.al2.frame = 0;
            _this.al3 = _this.add.sprite(607, 84, 'lightApple');
            _this.al3.frame = 0;
            _this.al4 = _this.add.sprite(642, 84, 'lightApple');
            _this.al4.frame = 0;

            _this.al5 = _this.add.sprite(537, 124, 'lightApple');
            _this.al5.frame = 0;
            _this.al6 = _this.add.sprite(572, 124, 'lightApple');
            _this.al6.frame = 0;


            _this.lightAppleCount6 = 0;//6+applelight

        }
    },

    Q6_sevenApple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.apple1 = _this.add.image(130, 220, 'apple');
            _this.apple2 = _this.add.image(160, 220, 'apple');
            _this.apple3 = _this.add.image(190, 220, 'apple');
            _this.apple4 = _this.add.image(220, 220, 'apple');

            _this.apple5 = _this.add.image(130, 250, 'apple');
            _this.apple6 = _this.add.image(160, 250, 'apple');
            _this.apple7 = _this.add.image(190, 250, 'apple');
            _this.Q6_options_1();

        }
        else if (_this.Q6_options[_this.flag1] == 3) {
            _this.al1 = _this.add.sprite(537, 84, 'lightApple');
            _this.al1.frame = 0;
            _this.al2 = _this.add.sprite(572, 84, 'lightApple');
            _this.al2.frame = 0;
            _this.al3 = _this.add.sprite(607, 84, 'lightApple');
            _this.al3.frame = 0;
            _this.al4 = _this.add.sprite(642, 84, 'lightApple');
            _this.al4.frame = 0;

            _this.al5 = _this.add.sprite(537, 124, 'lightApple');
            _this.al5.frame = 0;
            _this.al6 = _this.add.sprite(572, 124, 'lightApple');
            _this.al6.frame = 0;
            _this.al7 = _this.add.sprite(607, 124, 'lightApple');
            _this.al7.frame = 0;


            _this.lightAppleCount7 = 0;//7+applelight
            //_this.Q6_enablingSign();


        }
    },


    Q6_eightApple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.apple1 = _this.add.image(130, 220, 'apple');
            _this.apple2 = _this.add.image(160, 220, 'apple');
            _this.apple3 = _this.add.image(190, 220, 'apple');
            _this.apple4 = _this.add.image(220, 220, 'apple');

            _this.apple5 = _this.add.image(130, 250, 'apple');
            _this.apple6 = _this.add.image(160, 250, 'apple');
            _this.apple7 = _this.add.image(190, 250, 'apple');
            _this.apple8 = _this.add.image(220, 250, 'apple');
            _this.Q6_options_1();


        }
        else if (_this.Q6_options[_this.flag1] == 3) {
            _this.al1 = _this.add.sprite(537, 84, 'lightApple');
            _this.al1.frame = 0;
            _this.al2 = _this.add.sprite(572, 84, 'lightApple');
            _this.al2.frame = 0;
            _this.al3 = _this.add.sprite(607, 84, 'lightApple');
            _this.al3.frame = 0;
            _this.al4 = _this.add.sprite(642, 84, 'lightApple');
            _this.al4.frame = 0;

            _this.al5 = _this.add.sprite(537, 124, 'lightApple');
            _this.al5.frame = 0;
            _this.al6 = _this.add.sprite(572, 124, 'lightApple');
            _this.al6.frame = 0;
            _this.al7 = _this.add.sprite(607, 124, 'lightApple');
            _this.al7.frame = 0;
            _this.al8 = _this.add.sprite(642, 124, 'lightApple');
            _this.al8.frame = 0;

            _this.lightAppleCount8 = 0;//8+applelight

        }
    },


    Q6_AppleInTray: function () {
        _this.objGroup1 = _this.add.group();

        if (_this.NoOfApple[_this.flag2] == 1) {
            _this.apple1.visible = false;

            _this.a1 = _this.add.image(_this.apple1.x, _this.apple1.y, 'apple');

            _this.tween_a1 = _this.add.tween(_this.a1);
            _this.tween_a1.to({ x: 303, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a1.start();

            _this.plusAppleCount1 = 0;//1apple
            //_this.Q6_enablingSign();


        }

        else if (_this.NoOfApple[_this.flag2] == 2) {

            _this.apple1.visible = false;
            _this.apple2.visible = false;

            _this.a1 = _this.add.image(_this.apple1.x, _this.apple1.y, 'apple');

            _this.tween_a1 = _this.add.tween(_this.a1);
            _this.tween_a1.to({ x: 303, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a1.start();

            _this.a2 = _this.add.image(_this.apple2.x, _this.apple2.y, 'apple');

            _this.tween_a2 = _this.add.tween(_this.a2);
            _this.tween_a2.to({ x: 333, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a2.start();

            //            _this.a1=_this.add.image(313,230,'apple');            
            //            _this.a2=_this.add.image(343,230,'apple');

            _this.plusAppleCount2 = 0;//2aaple
            //_this.Q6_enablingSign();


        }

        else if (_this.NoOfApple[_this.flag2] == 3) {
            _this.apple1.visible = false;
            _this.apple2.visible = false;
            _this.apple3.visible = false;

            //            _this.a1=_this.add.image(313,230,'apple');
            //            _this.a2=_this.add.image(343,230,'apple');
            //            _this.a3=_this.add.image(373,230,'apple');

            _this.a1 = _this.add.image(_this.apple1.x, _this.apple1.y, 'apple');

            _this.tween_a1 = _this.add.tween(_this.a1);
            _this.tween_a1.to({ x: 303, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a1.start();

            _this.a2 = _this.add.image(_this.apple2.x, _this.apple2.y, 'apple');

            _this.tween_a2 = _this.add.tween(_this.a2);
            _this.tween_a2.to({ x: 333, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a2.start();

            _this.a3 = _this.add.image(_this.apple3.x, _this.apple3.y, 'apple');

            _this.tween_a3 = _this.add.tween(_this.a3);
            _this.tween_a3.to({ x: 363, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a3.start();

            _this.plusAppleCount3 = 0;//3apple
            //_this.Q6_enablingSign();

        }

        else if (_this.NoOfApple[_this.flag2] == 4) {
            _this.apple1.visible = false;
            _this.apple2.visible = false;
            _this.apple3.visible = false;
            _this.apple4.visible = false;

            //            _this.a1=_this.add.image(313,230,'apple');
            //            _this.a2=_this.add.image(343,230,'apple');
            //            _this.a3=_this.add.image(373,230,'apple');
            //            _this.a4=_this.add.image(403,230,'apple');

            _this.a1 = _this.add.image(_this.apple1.x, _this.apple1.y, 'apple');

            _this.tween_a1 = _this.add.tween(_this.a1);
            _this.tween_a1.to({ x: 303, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a1.start();

            _this.a2 = _this.add.image(_this.apple2.x, _this.apple2.y, 'apple');

            _this.tween_a2 = _this.add.tween(_this.a2);
            _this.tween_a2.to({ x: 333, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a2.start();

            _this.a3 = _this.add.image(_this.apple3.x, _this.apple3.y, 'apple');

            _this.tween_a3 = _this.add.tween(_this.a3);
            _this.tween_a3.to({ x: 363, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a3.start();

            _this.a4 = _this.add.image(_this.apple4.x, _this.apple4.y, 'apple');

            _this.tween_a4 = _this.add.tween(_this.a4);
            _this.tween_a4.to({ x: 393, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a4.start();

            _this.plusAppleCount4 = 0;//4apple
            //_this.Q6_enablingSign();



        }

        else if (_this.NoOfApple[_this.flag2] == 5) {


            _this.apple1.visible = false;
            _this.apple2.visible = false;
            _this.apple3.visible = false;
            _this.apple4.visible = false;
            _this.apple5.visible = false;


            //            _this.a1=_this.add.image(313,230,'apple');
            //            _this.a2=_this.add.image(343,230,'apple');
            //            _this.a3=_this.add.image(373,230,'apple');
            //            _this.a4=_this.add.image(403,230,'apple');
            //            _this.a5=_this.add.image(313,260,'apple');


            _this.a1 = _this.add.image(_this.apple1.x, _this.apple1.y, 'apple');

            _this.tween_a1 = _this.add.tween(_this.a1);
            _this.tween_a1.to({ x: 303, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a1.start();

            _this.a2 = _this.add.image(_this.apple2.x, _this.apple2.y, 'apple');

            _this.tween_a2 = _this.add.tween(_this.a2);
            _this.tween_a2.to({ x: 333, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a2.start();

            _this.a3 = _this.add.image(_this.apple3.x, _this.apple3.y, 'apple');

            _this.tween_a3 = _this.add.tween(_this.a3);
            _this.tween_a3.to({ x: 363, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a3.start();

            _this.a4 = _this.add.image(_this.apple4.x, _this.apple4.y, 'apple');

            _this.tween_a4 = _this.add.tween(_this.a4);
            _this.tween_a4.to({ x: 393, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a4.start();

            _this.a5 = _this.add.image(_this.apple5.x, _this.apple5.y, 'apple');

            _this.tween_a5 = _this.add.tween(_this.a5);
            _this.tween_a5.to({ x: 303, y: 250 }, 700, 'Linear', false, 0);
            _this.tween_a5.start();

            _this.plusAppleCount5 = 0;//5apple
            //_this.Q6_enablingSign();



        }

        else if (_this.NoOfApple[_this.flag2] == 6) {
            _this.apple1.visible = false;
            _this.apple2.visible = false;
            _this.apple3.visible = false;
            _this.apple4.visible = false;
            _this.apple5.visible = false;
            _this.apple6.visible = false;


            //            _this.a1=_this.add.image(313,230,'apple');
            //            _this.a2=_this.add.image(343,230,'apple');
            //            _this.a3=_this.add.image(373,230,'apple');
            //            _this.a4=_this.add.image(403,230,'apple');
            //            _this.a5=_this.add.image(313,260,'apple');
            //            _this.a6=_this.add.image(343,260,'apple');


            _this.a1 = _this.add.image(_this.apple1.x, _this.apple1.y, 'apple');

            _this.tween_a1 = _this.add.tween(_this.a1);
            _this.tween_a1.to({ x: 303, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a1.start();

            _this.a2 = _this.add.image(_this.apple2.x, _this.apple2.y, 'apple');

            _this.tween_a2 = _this.add.tween(_this.a2);
            _this.tween_a2.to({ x: 333, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a2.start();

            _this.a3 = _this.add.image(_this.apple3.x, _this.apple3.y, 'apple');

            _this.tween_a3 = _this.add.tween(_this.a3);
            _this.tween_a3.to({ x: 363, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a3.start();

            _this.a4 = _this.add.image(_this.apple4.x, _this.apple4.y, 'apple');

            _this.tween_a4 = _this.add.tween(_this.a4);
            _this.tween_a4.to({ x: 393, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a4.start();

            _this.a5 = _this.add.image(_this.apple5.x, _this.apple5.y, 'apple');

            _this.tween_a5 = _this.add.tween(_this.a5);
            _this.tween_a5.to({ x: 303, y: 250 }, 700, 'Linear', false, 0);
            _this.tween_a5.start();

            _this.a6 = _this.add.image(_this.apple6.x, _this.apple6.y, 'apple');

            _this.tween_a6 = _this.add.tween(_this.a6);
            _this.tween_a6.to({ x: 333, y: 250 }, 700, 'Linear', false, 0);
            _this.tween_a6.start();

            _this.plusAppleCount6 = 0;//
            //_this.Q6_enablingSign();




        }
        else if (_this.NoOfApple[_this.flag2] == 7) {

            _this.apple1.visible = false;
            _this.apple2.visible = false;
            _this.apple3.visible = false;
            _this.apple4.visible = false;
            _this.apple5.visible = false;
            _this.apple6.visible = false;
            _this.apple7.visible = false;


            //                _this.a1=_this.add.image(313,230,'apple');
            //                _this.a2=_this.add.image(343,230,'apple');
            //                _this.a3=_this.add.image(373,230,'apple');
            //                _this.a4=_this.add.image(403,230,'apple');
            //                _this.a5=_this.add.image(313,260,'apple');
            //                _this.a6=_this.add.image(343,260,'apple');
            //                _this.a7=_this.add.image(373,260,'apple');

            _this.a1 = _this.add.image(_this.apple1.x, _this.apple1.y, 'apple');

            _this.tween_a1 = _this.add.tween(_this.a1);
            _this.tween_a1.to({ x: 303, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a1.start();

            _this.a2 = _this.add.image(_this.apple2.x, _this.apple2.y, 'apple');

            _this.tween_a2 = _this.add.tween(_this.a2);
            _this.tween_a2.to({ x: 333, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a2.start();

            _this.a3 = _this.add.image(_this.apple3.x, _this.apple3.y, 'apple');

            _this.tween_a3 = _this.add.tween(_this.a3);
            _this.tween_a3.to({ x: 363, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a3.start();

            _this.a4 = _this.add.image(_this.apple4.x, _this.apple4.y, 'apple');

            _this.tween_a4 = _this.add.tween(_this.a4);
            _this.tween_a4.to({ x: 393, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a4.start();

            _this.a5 = _this.add.image(_this.apple5.x, _this.apple5.y, 'apple');

            _this.tween_a5 = _this.add.tween(_this.a5);
            _this.tween_a5.to({ x: 303, y: 250 }, 700, 'Linear', false, 0);
            _this.tween_a5.start();

            _this.a6 = _this.add.image(_this.apple6.x, _this.apple6.y, 'apple');

            _this.tween_a6 = _this.add.tween(_this.a6);
            _this.tween_a6.to({ x: 333, y: 250 }, 700, 'Linear', false, 0);
            _this.tween_a6.start();

            _this.a7 = _this.add.image(_this.apple7.x, _this.apple7.y, 'apple');

            _this.tween_a7 = _this.add.tween(_this.a7);
            _this.tween_a7.to({ x: 363, y: 250 }, 700, 'Linear', false, 0);
            _this.tween_a7.start();


            _this.plusAppleCount7 = 0;//
            //_this.Q6_enablingSign();


        }
        else if (_this.NoOfApple[_this.flag2] == 8) {
            _this.apple1.visible = false;
            _this.apple2.visible = false;
            _this.apple3.visible = false;
            _this.apple4.visible = false;
            _this.apple5.visible = false;
            _this.apple6.visible = false;
            _this.apple7.visible = false;
            _this.apple8.visible = false;


            //            _this.a1=_this.add.image(313,230,'apple');            
            //            _this.a2=_this.add.image(343,230,'apple');
            //            _this.a3=_this.add.image(373,230,'apple');
            //            _this.a4=_this.add.image(403,230,'apple');
            //            _this.a5=_this.add.image(313,260,'apple');
            //            _this.a6=_this.add.image(343,260,'apple');
            //            _this.a7=_this.add.image(373,260,'apple');
            //            _this.a8=_this.add.image(403,260,'apple');

            _this.a1 = _this.add.image(_this.apple1.x, _this.apple1.y, 'apple');

            _this.tween_a1 = _this.add.tween(_this.a1);
            _this.tween_a1.to({ x: 303, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a1.start();

            _this.a2 = _this.add.image(_this.apple2.x, _this.apple2.y, 'apple');

            _this.tween_a2 = _this.add.tween(_this.a2);
            _this.tween_a2.to({ x: 333, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a2.start();

            _this.a3 = _this.add.image(_this.apple3.x, _this.apple3.y, 'apple');

            _this.tween_a3 = _this.add.tween(_this.a3);
            _this.tween_a3.to({ x: 363, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a3.start();

            _this.a4 = _this.add.image(_this.apple4.x, _this.apple4.y, 'apple');

            _this.tween_a4 = _this.add.tween(_this.a4);
            _this.tween_a4.to({ x: 393, y: 220 }, 700, 'Linear', false, 0);
            _this.tween_a4.start();

            _this.a5 = _this.add.image(_this.apple5.x, _this.apple5.y, 'apple');

            _this.tween_a5 = _this.add.tween(_this.a5);
            _this.tween_a5.to({ x: 303, y: 250 }, 700, 'Linear', false, 0);
            _this.tween_a5.start();

            _this.a6 = _this.add.image(_this.apple6.x, _this.apple6.y, 'apple');

            _this.tween_a6 = _this.add.tween(_this.a6);
            _this.tween_a6.to({ x: 333, y: 250 }, 700, 'Linear', false, 0);
            _this.tween_a6.start();

            _this.a7 = _this.add.image(_this.apple7.x, _this.apple7.y, 'apple');

            _this.tween_a7 = _this.add.tween(_this.a7);
            _this.tween_a7.to({ x: 363, y: 250 }, 700, 'Linear', false, 0);
            _this.tween_a7.start();

            _this.a8 = _this.add.image(_this.apple8.x, _this.apple8.y, 'apple');

            _this.tween_a8 = _this.add.tween(_this.a8);
            _this.tween_a8.to({ x: 393, y: 250 }, 700, 'Linear', false, 0);
            _this.tween_a8.start();

            _this.plusAppleCount8 = 0;//
            //_this.Q6_enablingSign();




        }

    },

    BoyGirlAsking: function () {
        _this.stopVoice();
        ////console.log("fffffff"+_this.qArrays[_this.no11]);
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
            "/NS-INT-4-G6-a.mp3");

        //    
        //    
        //      //* the voice is unisex now. So need to separate girl/boy voice here.
        //        switch(_this.bgarray[0])
        //        {
        //            case 0: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/boy_please_give_me.mp3");
        //                    break;
        //            case 1: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/girl_please_give_me.mp3");
        //                    break;
        //
        //        }
        //        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },


    Apple_no: function () {
        _this.stopVoice();
        ////console.log("fffffff"+_this.qArrays[_this.no11]);
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch (_this.NoOfApple[_this.flag2]) {
            case 1: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                "/one-frt.mp3");
                break;
            case 2: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                "/two-frt.mp3");
                break;
            case 3: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                "/three-frt.mp3");
                break;
            case 4: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                "/four-frt.mp3");
                break;
            case 5: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                "/five-frt.mp3");
                break;
            case 6: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                "/six-frt.mp3");
                break;
            case 7: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                "/seven-frt.mp3");
                break;
            case 8: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                "/eight-frt.mp3");
                break;

        }


        //    if (_this.bgarray[0] == 0)
        //    {
        //        switch(_this.NoOfApple[_this.flag2])
        //        {
        //            case 1: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/boy_one_fruit.mp3");
        //                    break;
        //            case 2: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/boy_two_fruits.mp3");
        //                    break;
        //            case 3: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/boy_three_fruits.mp3");
        //                    break;  
        //            case 4: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/boy_four_fruits.mp3");
        //                    break;
        //            case 5: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/boy_five_fruits.mp3");
        //                    break;
        //            case 6: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/boy_six_fruits.mp3");
        //                    break;
        //            case 7: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/boy_seven_fruits.mp3");
        //                    break;
        //            case 8: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/boy_eight_fruits.mp3");
        //                    break;
        //
        //        }
        //    }
        //    else if (_this.bgarray[0] == 1)
        //    {
        //        switch(_this.NoOfApple[_this.flag2])
        //        {
        //            case 1: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/one_fruit.mp3");
        //                    break;
        //            case 2: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/two_fruits.mp3");
        //                    break;
        //            case 3: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/three_fruits.mp3");
        //                    break;
        //            case 4: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/four_fruits.mp3");
        //                    break;
        //            case 5: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/five_fruits.mp3");
        //                    break;
        //            case 6: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/six_fruits.mp3");
        //                    break;
        //            case 7: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/seven_fruits.mp3");
        //                    break;
        //            case 8: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/eight_fruits.mp3");
        //                    break;
        //
        //        }        
        //        
        //    }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },


    Q6_SellerVoice: function () {
        _this.stopVoice();
        ////console.log("fffffff"+_this.qArrays[_this.no11]);
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch (_this.Q6_options[_this.flag1]) {
            case 1: if (_this.NoOfApple[_this.flag2] > 1) {
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                    "/NS-INT-4-G6-b.mp3");
            }
            else if (_this.NoOfApple[_this.flag2] == 1) {
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                    "/NS-INT-4-G6-b.mp3");
            }

                break;
            case 2: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                "/NS-INT-4-G6-d.mp3");
                break;
            case 3: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                "/NS-INT-4-G6-c.mp3");
                break;

        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },

    Q6_Question: function () {
        _this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch (1) {
            case 1: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
                "/NS-INT-4-G6-e.mp3");
                break;

        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        _this.Q6_glowcounter();
    },

    Q6_options_2: function () {
        //        console.log("pleas give me fruits");

        _this.BoyGirlAsking();
        _this.time.events.add(1300, _this.BoyGirlAsking_2);
        //i_dont_have_any_fruits

        //        console.log("i dont have any fruits");

        _this.time.events.add(3500, _this.Q6_SellerVoice);
        _this.time.events.add(7500, _this.Q6_Question);

        _this.manAnim = _this.man.animations.add('Store_man', [3, 4, 5, 6, 7, 8, 9, 10, 11, 3, 4, 5, 6, 7, 8, 9, 10, 11], true);
        _this.time.events.add(3200, function () { _this.man.animations.play('Store_man', 28, false, false) });


        _this.time.events.add(7500, _this.Q6_addNumberPad);

    },

    Q6_options_3: function (target) {
        //        console.log("please give me");
        _this.time.events.add(1000, _this.BoyGirlAsking);
        //        console.log(_this.NoOfApple[_this.flag2]+"fruits");
        _this.time.events.add(3000, _this.Apple_no);
        //                console.log("boy give money");
        //        console.log("seller takes money");
        //        console.log("i dont have any today i will give you tommarow");
        if (_this.bgarray[0] == 0) {
            _this.time.events.add(1000, function () {
                _this.BoyGirl.visible = false;
                _this.BoyGirl.frame = 0;
                _this.BoyGirl.visible = true;
            });

            _this.time.events.add(4000, function () {
                _this.BoyGirl.visible = false;
                _this.BoyGirl.frame = 1;
                _this.BoyGirl.visible = true;
                _this.man.frame = 1;
            });

            _this.time.events.add(5000, function () {
                _this.man.frame = 2;
            });

        }

        else if (_this.bgarray[0] == 1) {
            _this.time.events.add(1000, function () {
                _this.BoyGirl.visible = false;
                _this.BoyGirl.frame = 2;
                _this.BoyGirl.visible = true;
            });

            _this.time.events.add(4000, function () {
                _this.BoyGirl.visible = false;
                _this.BoyGirl.frame = 3;
                _this.BoyGirl.visible = true;
                _this.man.frame = 1;
            });

            _this.time.events.add(5000, function () {
                _this.man.frame = 2;

            });
        }

        _this.time.events.add(5000, _this.Q6_SellerVoice);
        _this.time.events.add(10000, _this.Q6_Question);
        _this.time.events.add(8000, _this.Q6_thoughtBubble);
        _this.time.events.add(14000, _this.Q6_enablingSign);
        _this.time.events.add(8000, _this.Q6_options_1_3);



    },

    Q6_enablingSign: function (target) {
        _this.plus2.inputEnabled = true;
        _this.plus2.input.useHandCursor = true;
        _this.plus2.events.onInputDown.add(_this.Q6_plusClicked, _this.plus2);


        _this.minus2.inputEnabled = true;
        _this.minus2.input.useHandCursor = true;
        _this.minus2.events.onInputDown.add(_this.Q6_minusClicked, _this.minus2);

    },

    Q6_thoughtBubble: function () {
        //        console.log("inside cloud");
        _this.cloud = _this.add.image(470, 50, 'thoughtBubble');
        //_this.cloud.visible=false;
        _this.numGroupA = _this.add.group();


    },


    BoyGirlAsking_2: function () {
        _this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" + _this.languageSelected +
            "/zr-frt.mp3");

        //* we hve single voice file for boy and girl..so no need of switch stmt below.
        //        switch(_this.bgarray[0])
        //        {
        //            case 0: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/boy_please_give_me_fruits.mp3");
        //            break;
        //            case 1: _this.src.setAttribute("src", "questionSounds/NS-INT-6-G6/English/girl_please_give_me_fruits.mp3");
        //                    break;
        //        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },

    Q6_plusClicked: function (target) {
        //        console.log(target.name);
        target.bringToTop();
        _this.vx = target.x;
        _this.vy = target.y;
        //        console.log(_this.vx);
        //        console.log(_this.vy);
        target.input.enableDrag(true);

        if (_this.signplus == 1) {
            _this.signplus = 2;
        }
        _this.signminus++;


        _this.clickSound.play();
        _this.plus2.events.onDragStop.add(_this.Q6_counter1, _this.plus2);




    },

    Q6_minusClicked: function (target) {
        target.bringToTop();
        _this.vx = target.x;
        _this.vy = target.y;
        //        console.log(_this.vx);
        //        console.log(_this.vy);
        target.input.enableDrag(true);


        if (_this.signminus == 1) {
            _this.signminus = 2;
        }
        _this.signplus++;

        _this.clickSound.play();
        _this.minus2.events.onDragStop.add(_this.Q6_counter2, _this.minus2);

    },


    Q6_counter1: function (target) {

        if (_this.Q6_options[_this.flag1] == 1) {
            if (_this.Q6_checkOverlap(target, _this.tray_base)) {
                //console.log("insider");
                target.visible = false;
                _this.Q6_plusCounterPlace(_this.spot2X, _this.spot2Y);
                _this.spot2X += 30;
                _this.plusAppleCount1++;
                _this.plusAppleCount2++;
                _this.plusAppleCount3++;
                _this.plusAppleCount4++;
                _this.plusAppleCount5++;
                _this.plusAppleCount6++;
                _this.plusAppleCount7++;
                _this.plusAppleCount8++;

            }


        }
        else if (_this.Q6_options[_this.flag1] == 3) {
            if (_this.Q6_checkOverlap(target, _this.cloud)) {
                //                            console.log("overlap");

                target.visible = false;


                _this.Q6_plusCounterPlace(_this.plusAppleX, _this.plusAppleY);


                _this.plusAppleX += 35;
                _this.lightAppleCount1++;//1+applelight
                _this.lightAppleCount2++;//2+applelight
                _this.lightAppleCount3++;//3+applelight
                _this.lightAppleCount4++;//4+applelight
                _this.lightAppleCount5++;//5+applelight
                _this.lightAppleCount6++;
                _this.lightAppleCount7++;
                _this.lightAppleCount8++;
                //                            console.log(_this.lightAppleCount1+'1');
                //                            console.log(_this.lightAppleCount2+'2');
                //                            console.log(_this.lightAppleCount3+'3');
                //                            console.log(_this.lightAppleCount4+'4');
                //                            console.log(_this.lightAppleCount5+'5');
                //                            console.log(_this.lightAppleCount6+'6');
                //                            console.log(_this.lightAppleCount7+'7');
                //                            console.log(_this.lightAppleCount8+'8');
            }


        }


        target.x = _this.vx;
        target.y = _this.vy;


        //                    console.log(target.x);
        //                    console.log(target.y);
    },
    Q6_counter2: function (target) {

        if (_this.Q6_options[_this.flag1] == 1) {
            if (_this.Q6_checkOverlap(target, _this.tray_base)) {
                target.visible = false;

                _this.Q6_minusCounterPlace(_this.spot2X, _this.spot2Y);
                _this.spot2X += 30;
                _this.plusAppleCount1++;
                _this.plusAppleCount2++;
                _this.plusAppleCount3++;
                _this.plusAppleCount4++;
                _this.plusAppleCount5++;
                _this.plusAppleCount6++;
                _this.plusAppleCount7++;
                _this.plusAppleCount8++;
            }

        }
        if (_this.Q6_options[_this.flag1] == 3) {
            if (_this.Q6_checkOverlap(target, _this.tray_base1)) {
                //                            console.log("overlap");
                target.visible = false;

                _this.Q6_minusCounterPlace(_this.plusAppleX, _this.plusAppleY);


                _this.plusAppleX += 35;
                _this.lightAppleCount1++;//1+applelight
                _this.lightAppleCount2++;//2+applelight
                _this.lightAppleCount3++;//3+applelight
                _this.lightAppleCount4++;//4+applelight
                _this.lightAppleCount5++;//5+applelight
                _this.lightAppleCount6++;
                _this.lightAppleCount7++;
                _this.lightAppleCount8++;

            }

        }
        target.x = _this.vx;
        target.y = _this.vy;
        //                    console.log(target.x);
        //                    console.log(target.y);                           
    },


    Q6_checkOverlap: function (spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },

    removingapple: function (positionX, positionY) {
        //        console.log("inside removingapple");
        if (_this.Q6_options[_this.flag1] == 1) {
            if (_this.plusAppleCount1 == 0 || _this.plusAppleCount2 == 0 || _this.plusAppleCount3 == 0 || _this.plusAppleCount4 == 0 || _this.plusAppleCount5 == 0 || _this.plusAppleCount6 == 0 || _this.plusAppleCount7 == 0 || _this.plusAppleCount8 == 0) {
                _this.a1.visible = false;

            }

            if (_this.plusAppleCount2 == 1 || _this.plusAppleCount3 == 1 || _this.plusAppleCount4 == 1 || _this.plusAppleCount5 == 1 || _this.plusAppleCount6 == 1 || _this.plusAppleCount7 == 1 || _this.plusAppleCount8 == 1) {

                _this.a2.visible = false;

            }

            if (_this.plusAppleCount3 == 2 || _this.plusAppleCount4 == 2 || _this.plusAppleCount5 == 2 || _this.plusAppleCount6 == 2 || _this.plusAppleCount7 == 2 || _this.plusAppleCount8 == 2) {
                _this.a3.visible = false;

            }
            if (_this.plusAppleCount4 == 3 || _this.plusAppleCount5 == 3 || _this.plusAppleCount6 == 3 || _this.plusAppleCount7 == 3 || _this.plusAppleCount8 == 3) {
                _this.a4.visible = false;

            }
            if (_this.plusAppleCount5 == 4 || _this.plusAppleCount6 == 4 || _this.plusAppleCount7 == 4 || _this.plusAppleCount8 == 4) {
                _this.a5.visible = false;

            }

            if (_this.plusAppleCount6 == 5 || _this.plusAppleCount7 == 5 || _this.plusAppleCount8 == 5) {
                _this.a6.visible = false;

            }
            if (_this.plusAppleCount7 == 6 || _this.plusAppleCount8 == 6) {
                _this.a7.visible = false;

            }

            if (_this.plusAppleCount8 == 7) {
                _this.a8.visible = false;

            }

        }

        if (_this.Q6_options[_this.flag1] == 3) {
            if (_this.lightAppleCount1 == 0 || _this.lightAppleCount2 == 0 || _this.lightAppleCount3 == 0 || _this.lightAppleCount4 == 0 || _this.lightAppleCount5 == 0 || _this.lightAppleCount6 == 0 || _this.lightAppleCount7 == 0 || _this.lightAppleCount8 == 0) {
                _this.al1.visible = false;

            }

            if (_this.lightAppleCount2 == 1 || _this.lightAppleCount3 == 1 || _this.lightAppleCount4 == 1 || _this.lightAppleCount5 == 1 || _this.lightAppleCount6 == 1 || _this.lightAppleCount7 == 1 || _this.lightAppleCount8 == 1) {

                _this.al2.visible = false;
            }

            if (_this.lightAppleCount3 == 2 || _this.lightAppleCount4 == 2 || _this.lightAppleCount5 == 2 || _this.lightAppleCount6 == 2 || _this.lightAppleCount7 == 2 || _this.lightAppleCount8 == 2) {
                _this.al3.visible = false;

            }

            if (_this.lightAppleCount4 == 3 || _this.lightAppleCount5 == 3 || _this.lightAppleCount6 == 3 || _this.lightAppleCount7 == 3 || _this.lightAppleCount8 == 3) {
                _this.al4.visible = false;
            }

            if (_this.lightAppleCount5 == 4 || _this.lightAppleCount6 == 4 || _this.lightAppleCount7 == 4 || _this.lightAppleCount8 == 4) {
                _this.al5.visible = false;
            }

            if (_this.lightAppleCount6 == 5 || _this.lightAppleCount7 == 5 || _this.lightAppleCount8 == 5) {
                _this.al6.visible = false;
            }

            if (_this.lightAppleCount7 == 6 || _this.lightAppleCount8 == 6) {
                _this.al7.visible = false;

            }
            if (_this.lightAppleCount8 == 7) {
                _this.al8.visible = false;

            }

        }



    },

    removingapple1: function () {
        if (_this.lightAppleCount1 == 0 || _this.lightAppleCount2 == 0 || _this.lightAppleCount3 == 0 || _this.lightAppleCount4 == 0 || _this.lightAppleCount5 == 0 || _this.lightAppleCount6 == 0 || _this.lightAppleCount7 == 0 || _this.lightAppleCount8 == 0) {
            _this.al1.visible = false;
        }

        if (_this.lightAppleCount2 == 1 || _this.lightAppleCount3 == 1 || _this.lightAppleCount4 == 1 || _this.lightAppleCount5 == 1 || _this.lightAppleCount6 == 1 || _this.lightAppleCount7 == 1 || _this.lightAppleCount8 == 1) {

            _this.al2.visible = false;
        }

        if (_this.lightAppleCount3 == 2 || _this.lightAppleCount4 == 2 || _this.lightAppleCount5 == 2 || _this.lightAppleCount6 == 2 || _this.lightAppleCount7 == 2 || _this.lightAppleCount8 == 2) {
            _this.al3.visible = false;

        }

        if (_this.lightAppleCount4 == 3 || _this.lightAppleCount5 == 3 || _this.lightAppleCount6 == 3 || _this.lightAppleCount7 == 3 || _this.lightAppleCount8 == 3) {
            _this.al4.visible = false;

        }

        if (_this.lightAppleCount5 == 4 || _this.lightAppleCount6 == 4 || _this.lightAppleCount7 == 4 || _this.lightAppleCount8 == 4) {
            _this.al5.visible = false;

        }

        if (_this.lightAppleCount6 == 5 || _this.lightAppleCount7 == 5 || _this.lightAppleCount8 == 5) {
            _this.al6.visible = false;

        }

        if (_this.lightAppleCount7 == 6 || _this.lightAppleCount8 == 6) {
            _this.al7.visible = false;

        }

        if (_this.lightAppleCount8 == 7) {
            _this.al8.visible = false;

        }


    },


    Q6_plusCounterPlace: function (positionX, positionY) {

        if (_this.Q6_options[_this.flag1] == 1) {

            _this.plusApple = _this.add.image(_this.spot2X, _this.spot2Y, 'plusApple');
            _this.plusApple.frame = 0;
            _this.plusApple.anchor.setTo(0.5);
            _this.apcount++;
            //            console.log(_this.spot2X);
            //            console.log(_this.spot2Y);

            _this.removingapple();
            _this.objGroup1.add(_this.plusApple);

            _this.plus2 = _this.add.image(749, 67, 'plusGlow');
            _this.plus2.frame = 0;
            _this.plus2.scale.setTo(1.2, 1.2);

            _this.Q6_enablingSign();

            if (_this.plusAppleCount5 == 3 || _this.plusAppleCount6 == 3 || _this.plusAppleCount7 == 3 || _this.plusAppleCount8 == 3) {

                _this.spot2Y += 30;
                _this.spot2X = 288;
            }

            if (_this.plusAppleCount1 == 0 || _this.plusAppleCount2 == 1 || _this.plusAppleCount3 == 2 || _this.plusAppleCount4 == 3 || _this.plusAppleCount5 == 4 || _this.plusAppleCount6 == 5 || _this.plusAppleCount7 == 6 || _this.plusAppleCount8 == 7) {
                //                console.log(_this.plusAppleCount1);console.log(_this.plusAppleCount2);console.log(_this.plusAppleCount3);
                //                console.log(_this.plusAppleCount4);console.log(_this.plusAppleCount5);console.log(_this.plusAppleCount6);
                //                console.log(_this.plusAppleCount7);console.log(_this.plusAppleCount8);
                _this.plus2.inputEnabled = false;
                _this.plus2.input.useHandCursor = false;

                _this.minus2.inputEnabled = false;
                _this.minus2.input.useHandCursor = false;
                //_this.time.events.add(1000, _this.Q6_Question);

                _this.Q6_addNumberPad();
            }

        }

        else if (_this.Q6_options[_this.flag1] == 3) {


            _this.lightplusApple = _this.add.image(_this.plusAppleX, _this.plusAppleY, 'papple');
            _this.lightplusApple.anchor.setTo(0.49);
            _this.lightplusApple.scale.setTo(1.1, 1.1);

            _this.Q6_removing_wrong_plus_apple();
            //_this.removingapple();

            //_this.numGroupA.add(_this.lightplusApple);

            _this.plus2 = _this.add.image(749, 67, 'plusGlow');
            _this.plus2.frame = 0;
            _this.plus2.scale.setTo(1.2, 1.2);
            _this.time.events.add(1000, function () {
                _this.Q6_enablingSign();

            });

            //_this.plusAppleY=98;

            /*if(_this.lightAppleCount5==3|| _this.lightAppleCount6==3||_this.lightAppleCount7==3||_this.lightAppleCount8==3 ){
                _this.plusAppleY+=40;
                //lightplusApple.anchor.set(0.5);
                _this.plusAppleX=519;//554;
                
            }*/
            /*if(_this.lightAppleCount1==0 || _this.lightAppleCount2==1 || _this.lightAppleCount3==2|| _this.lightAppleCount4==3 || _this.lightAppleCount5==4||_this.lightAppleCount6==5||_this.lightAppleCount7==6||_this.lightAppleCount8==7){
//                console.log(_this.lightAppleCount1);console.log(_this.lightAppleCount2);console.log(_this.lightAppleCount3);
//                console.log(_this.lightAppleCount4);console.log(_this.lightAppleCount5);console.log(_this.lightAppleCount6);
//                console.log(_this.lightAppleCount7);console.log(_this.lightAppleCount8);
                _this.plus2.inputEnabled = false;
                _this.plus2.input.useHandCursor = false;

                _this.minus2.inputEnabled = false;
                _this.minus2.input.useHandCursor = false;
                
                _this.Q6_addNumberPad();
                
            }*/


        }
    },


    Q6_minusCounterPlace: function (positionX, positionY) {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.minusApple = _this.add.image(_this.spot2X, _this.spot2Y, 'mapple');
            _this.minusApple.anchor.setTo(0.5);

            _this.Q6_removing_wrong_minus_apple();
            //_this.removingapple();

            //_this.objGroup1.add(_this.minusApple);

            _this.minus2 = _this.add.image(821, 67, 'minusGlow');
            _this.minus2.scale.setTo(1.2, 1.2);

            _this.time.events.add(1000, function () {
                _this.Q6_enablingSign();

            });

            /*if(_this.plusAppleCount1==3 || _this.plusAppleCount2==3 || _this.plusAppleCount3==3 || _this.plusAppleCount4==3 || _this.plusAppleCount5==3||_this.plusAppleCount6==3||_this.plusAppleCount7==3||_this.plusAppleCount8==3){
                
                _this.spot2Y += 30;
                _this.spot2X=288;
            }
            if(_this.plusAppleCount1==0 || _this.plusAppleCount2==1 || _this.plusAppleCount3==2 || _this.plusAppleCount4==3 || _this.plusAppleCount5==4||_this.plusAppleCount6==5||_this.plusAppleCount7==6||_this.plusAppleCount8==7){

                _this.plus2.inputEnabled = false;
                _this.plus2.input.useHandCursor = false;

                _this.minus2.inputEnabled = false;
                _this.minus2.input.useHandCursor = false;

                _this.Q6_addNumberPad();
            }*/
            //_this.Q6_addNumberPad();


        }

        else if (_this.Q6_options[_this.flag1] == 3) {

            _this.lightminusApple = _this.add.image(_this.plusAppleX, _this.plusAppleY, 'minusApple');
            _this.lightminusApple.frame = 0;
            _this.lightminusApple.anchor.setTo(0.59);
            _this.lightminusApple.scale.setTo(1.1, 1.1);
            _this.amcount++;
            //            console.log(_this.plusAppleX);
            //            console.log(_this.plusAppleY);
            _this.removingapple();

            _this.numGroupA.add(_this.lightminusApple);
            _this.minus2 = _this.add.image(821, 67, 'minusGlow');
            _this.minus2.scale.setTo(1.2, 1.2);


            _this.Q6_enablingSign();


            //            console.log(_this.lightAppleCount5);
            //            console.log(_this.lightAppleCount6);
            //            console.log(_this.lightAppleCount7);
            //            console.log(_this.lightAppleCount8);
            if (_this.lightAppleCount5 == 3 || _this.lightAppleCount6 == 3 || _this.lightAppleCount7 == 3 || _this.lightAppleCount8 == 3) {
                _this.plusAppleY += 40;
                _this.plusAppleX = 519;
                //                console.log(_this.plusAppleX);
                //                console.log(_this.plusAppleY);

            }
            if (_this.lightAppleCount1 == 0 || _this.lightAppleCount2 == 1 || _this.lightAppleCount3 == 2 || _this.lightAppleCount4 == 3 || _this.lightAppleCount5 == 4 || _this.lightAppleCount6 == 5 || _this.lightAppleCount7 == 6 || _this.lightAppleCount8 == 7) {
                _this.minus2.inputEnabled = false;
                _this.minus2.input.useHandCursor = false;
                _this.plus2.inputEnabled = false;
                _this.plus2.input.useHandCursor = false;
                //_this.time.events.add(1000,_this.Q6_Question);

                _this.Q6_addNumberPad();

            }

        }

    },

    Q6_removing_wrong_plus_apple: function () {
        //    console.log(_this.plusAppleX);
        //        console.log(_this.plusAppleY);
        _this.plus2.inputEnabled = false;
        _this.minus2.inputEnabled = false;


        if (_this.lightplusApple.visible == true) {
            _this.wrongSound.play();

            _this.shake.shake(2, _this.lightplusApple);

            _this.time.events.add(1000, function () {
                _this.lightplusApple.destroy();//visible=false;
                //         console.log("distroy");

            })
            _this.plusAppleX -= 35;

            _this.lightAppleCount1--;
            _this.lightAppleCount2--;
            _this.lightAppleCount3--;
            _this.lightAppleCount4--;
            _this.lightAppleCount5--;
            _this.lightAppleCount6--;
            _this.lightAppleCount7--;
            _this.lightAppleCount8--;


        }

    },

    Q6_removing_wrong_minus_apple: function () {
        _this.plus2.inputEnabled = false;
        _this.minus2.inputEnaled = false;

        if (_this.minusApple.visible == true) {
            _this.wrongSound.play();


            _this.shake.shake(2, _this.minusApple);

            _this.time.events.add(1000, function () {
                _this.minusApple.destroy();//visible=false;


            })
            _this.spot2X -= 30
            _this.plusAppleCount1--;
            _this.plusAppleCount2--;
            _this.plusAppleCount3--;
            _this.plusAppleCount4--;
            _this.plusAppleCount5--;
            _this.plusAppleCount6--;
            _this.plusAppleCount7--;
            _this.plusAppleCount8--;
        }
    },


    Q6_addNumberPad: function () {
        //        console.log("inside numberpad");

        _this.objGroup = _this.add.group();
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
            _this.numbg.name = i;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.Q6_numClicked, _this);

            _this.x += 63;

        }

        _this.minusbtn = _this.numGroup.create(_this.x, 552, 'Numberpad');
        _this.minusbtn.frame = 10;
        _this.minusbtn.anchor.setTo(0.5);
        _this.minusbtn.scale.setTo(0.8, 0.8);
        _this.minusbtn.inputEnabled = true;
        _this.minusbtn.name = "-";
        _this.minusbtn.input.useHandCursor = true;
        _this.minusbtn.events.onInputDown.add(_this.Q6_signbtnClicked, _this);



        _this.plusbtn = _this.numGroup.create(_this.x + 63, 552, 'Numberpad');
        _this.plusbtn.frame = 11;
        _this.plusbtn.anchor.setTo(0.5);
        _this.plusbtn.scale.setTo(0.8, 0.8);
        _this.plusbtn.inputEnabled = true;
        _this.plusbtn.name = "+";
        //_this.validateBtn=_this.plusbtn;


        _this.plusbtn.input.useHandCursor = true;
        _this.plusbtn.events.onInputDown.add(_this.Q6_signbtnClicked, _this);

        _this.wrongbtn = _this.numGroup.create(_this.x + 126, 552, 'Numberpad');
        _this.wrongbtn.frame = 12;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8, 0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.Q6_wrongbtnClicked, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 189, 552, 'Numberpad');
        _this.rightbtn.frame = 13;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8, 0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.Q6_rightbtnClicked, _this);

        _this.ScreenTextBox = _this.add.sprite(870, 490, 'ScreenTextBox');
        _this.ScreenTextBox.anchor.setTo(0.5);
        _this.ScreenTextBox.visible = false;
        _this.ScreenTextBox.scale.set(0.6, 0.8);
        _this.ScreenTextBox.inputEnabled = true;
        _this.ScreenTextBox.frame = 0;

        _this.enterTxt = _this.add.text(0, 0, "");
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.scale.setTo(1.3, 1.3);
        _this.enterTxt.align = 'center';
        //        _this.enterTxt.font = 'myfont';
        _this.enterTxt.font = 'Akzidenz-Grotesk BQ';
        _this.enterTxt.fontSize = 40;
        _this.enterTxt.fontWeight = 250;
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.setShadow(0, 0, 'Level43A_rgba(0, 0, 0, 0)', 0);
        _this.ScreenTextBox.addChild(_this.enterTxt);

        _this.objGroup.add(_this.ScreenTextBox);
        _this.numpadTween = _this.add.tween(_this.numGroup);

        _this.ScreenTextTween = _this.add.tween(_this.ScreenTextBox);

        //tween in the number pad after a second.
        _this.time.events.add(1000, _this.Q6_tweenNumPad);
        //        console.log("inside numberpad4");

        //after 2 seconds, show the screen text box as enabled
        _this.time.events.add(2000, _this.Q6_enableScreenText);

    },

    Q6_tweenNumPad: function () {

        // now set the number pad visible and tween it to correct position on screen.
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

        _this.ScreenTextBox.visible = true;
        _this.ScreenTextTween.to({ x: 870, y: 430 }, 1000, 'Linear', true, 0);

    },

    Q6_enableScreenText: function () {
        _this.ScreenTextBox.frame = 1;
    },


    Q6_numClicked: function (target) {

        //console.log(target.name);

        _this.clickSound.play();
        _this.selectedAns1 = target.name;
        _this.enterTxt.text = "" + _this.selectedAns2 + _this.selectedAns1;




    },


    Q6_signbtnClicked: function (target) {
        _this.clickSound.play();
        _this.selectedAns2 = target.name;
        _this.enterTxt.text = "" + _this.selectedAns2 + _this.selectedAns1;
    },


    Q6_wrongbtnClicked: function (target) {


        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.enterTxt.text = "";
    },

    Q6_rightbtnClicked: function () {

        _this.noofAttempts++;
        _this.clickSound.play();
        if (_this.Q6_options[_this.flag1] == 1) {
            if (_this.plusAppleCount1 == 1 || _this.plusAppleCount2 == 2 || _this.plusAppleCount3 == 3 || _this.plusAppleCount4 == 4 || _this.plusAppleCount5 == 5 || _this.plusAppleCount6 == 6 || _this.plusAppleCount7 == 7 || _this.plusAppleCount8 == 8) {
                if (_this.NoOfApple[_this.flag2] == _this.selectedAns1 && (_this.selectedAns2 == "+" || _this.selectedAns2 == "")) {
                    //                console.log(_this.selectedAns1);

                    _this.celebrationSound.play();
                    _this.objGroup1.destroy();//plus apple by droping

                    _this.Q6_celebration_anm();

                    telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                    _this.starActions();
                    //                    _this.time.events.add(1000,function(){
                    //                        _this.bitesound.play();});

                    _this.time.events.add(1000, function () {
                        _this.numGroupB.destroy();//animation apple
                        _this.numGroup.destroy();//numberpad
                        _this.objGroup.destroy();
                        _this.Q6_wrongbtnClicked();//delete text 

                    });
                    //                    console.log("in option 1");

                    if (_this.count1 < 5) {
                        _this.Q6_reshuffle();
                        //                        console.log("////////////////////the count is: "+ _this.count1);
                        _this.count1++;
                        _this.flag1++;
                        _this.flag2++;
                        _this.Q6_equatingzero();


                        _this.apcount = 0;
                        //_this.signplus=1;
                        //                        console.log(_this.plusAppleCount1);console.log(_this.plusAppleCount2);console.log(_this.plusAppleCount3);
                        //                        console.log(_this.plusAppleCount4);console.log(_this.plusAppleCount5);console.log(_this.plusAppleCount6);
                        //                        console.log(_this.plusAppleCount7);console.log(_this.plusAppleCount8);


                        _this.time.events.add(3000, _this.gotoSixthQuestion);

                    }
                    else {
                        _this.timer1.stop();
                        _this.timer1 = null;
                        //_this.time.events.add(3000,function(){ window.parent.location.reload();});
                        _this.time.events.add(1900, function () {
                            //* transition to score. Score App version will show score menu - home/replay/next.
                            //* Score Diksha version will end the session and show the score.
                            //* appropriate version of the score should be present in commonjsfiles folder.
                            // _this.state.start('score');
                            _this.state.start('score', true, false,gameID,_this.microConcepts);
                        });
                    }
                }
                else {
                    _this.wrongSound.play();
                    _this.removingapple();
                    _this.objGroup1.destroy();
                    _this.numGroup.destroy();
                    _this.objGroup.destroy();

                    _this.objGroup1 = _this.add.group();
                    _this.Q6_wrongbtnClicked();
                    _this.spot2X = 318//313;
                    _this.spot2Y = 234//225;

                    //_this.spot1X=313;
                    //_this.spot1Y=225;
                    _this.apcount = 0;

                    _this.signplus = 1;
                    _this.Q6_equatingzero();



                    _this.Q6_AppleInTray();
                    _this.Q6_enablingSign();
                }
            }
        }

        else if (_this.Q6_options[_this.flag1] == 2) {
            if (_this.selectedAns2 == "+" || _this.selectedAns2 == "-" || _this.selectedAns1 != "0") {
                //            console.log(_this.selectedAns1);
                //            console.log(_this.selectedAns2);
                _this.wrongSound.play();
                _this.Q6_wrongbtnClicked();
                //            console.log("in option 2");
            }
            else if (_this.selectedAns1 == "0") {
                _this.celebrationSound.play();
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.starActions();

                _this.time.events.add(2000, function () {
                    _this.numGroup.destroy();
                    _this.Q6_wrongbtnClicked();
                    _this.objGroup.destroy();
                });
                if (_this.count1 < 5) {
                    _this.Q6_reshuffle();
                    //                    console.log("////////////////////the count is: "+ _this.count1);
                    _this.count1++;
                    _this.flag1++;
                    _this.flag2++;
                    _this.time.events.add(3000, _this.gotoSixthQuestion);
                }
                else {
                    //                    console.log("\\\\\\\\\\\\\\\\\\\\\\the count is: "+ _this.count1);
                    //                    console.log("stopping Q6");
                    _this.timer1.stop();
                    _this.timer1 = null;
                    _this.time.events.add(3000, function () {
                        //* transition to score. Score App version will show score menu - home/replay/next.
                        //* Score Diksha version will end the session and show the score.
                        //* appropriate version of the score should be present in commonjsfiles folder.
                        //_this.state.start('score');
                        _this.state.start('score', true, false,gameID,_this.microConcepts);
                    });
                }
            }

        }
        else if (_this.Q6_options[_this.flag1] == 3) {
            if (_this.lightAppleCount1 == 1 || _this.lightAppleCount2 == 2 || _this.lightAppleCount3 == 3 || _this.lightAppleCount4 == 4 || _this.lightAppleCount5 == 5 || _this.lightAppleCount6 == 6 || _this.lightAppleCount7 == 7 || _this.lightAppleCount8 == 8) {
                if (_this.selectedAns2 == "-" && _this.NoOfApple[_this.flag2] == _this.selectedAns1) {
                    //_this.selectedAns2 == "-" && _this.signminus== 2&&_this.amcount==_this.selectedAns1
                    //                console.log(_this.selectedAns2);

                    //                console.log(_this.signminus);
                    //                console.log(_this.amcount);
                    //                console.log(_this.selectedAns1);
                    _this.celebrationSound.play();
                    _this.numGroupA.destroy();

                    telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);


                    _this.Q6_celebration_anm();
                    _this.starActions();
                    //                _this.time.events.add(1000,function(){
                    //                        _this.bitesound.play();});



                    _this.time.events.add(1000, function () {
                        _this.numGroupB.destroy();
                        _this.cloud.destroy();
                        _this.Q6_wrongbtnClicked();
                        _this.numGroup.destroy();//visible=false;
                        _this.objGroup.destroy();


                    });

                    if (_this.count1 < 5) {
                        _this.Q6_reshuffle();
                        //                    console.log("////////////////////the count is: "+ _this.count1);
                        _this.count1++;
                        _this.flag1++;
                        _this.flag2++;
                        _this.Q6_equatingzero();

                        _this.amcount = 0;
                        _this.signminus = 1;
                        //                    console.log(_this.lightAppleCount1);console.log(_this.lightAppleCount2);console.log(_this.lightAppleCount3);
                        //                    console.log(_this.lightAppleCount4);console.log(_this.lightAppleCount5);console.log(_this.lightAppleCount6);
                        //                    console.log(_this.lightAppleCount7);console.log(_this.lightAppleCount8);

                        _this.time.events.add(3000, _this.gotoSixthQuestion);

                    }
                    else {
                        //                    console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\the count is: "+ _this.count1);
                        //                    console.log("stopping Q6");
                        _this.timer1.stop();
                        _this.timer1 = null;
                        _this.time.events.add(3000, function () {
                            //* transition to score. Score App version will show score menu - home/replay/next.
                            //* Score Diksha version will end the session and show the score.
                            //* appropriate version of the score should be present in commonjsfiles folder.
                            //_this.state.start('score');
                            _this.state.start('score', true, false,gameID,_this.microConcepts);
                        });

                    }

                }
                else {
                    //            console.log("in option3");
                    _this.wrongSound.play();
                    _this.shake.shake(5, _this.cloud);
                    _this.numGroupA.destroy();
                    _this.numGroup.destroy();
                    _this.objGroup.destroy();
                    _this.numGroupA = _this.add.group();
                    //_this.plusAppleX=537;
                    //_this.plusAppleY=75;
                    _this.plusAppleX = 554;
                    _this.plusAppleY = 98;
                    _this.amcount = 0;
                    _this.signminus = 1;
                    _this.Q6_equatingzero();
                    _this.Q6_wrongbtnClicked();
                    _this.time.events.add(1000, _this.Q6_options_1_3);
                    _this.Q6_enablingSign();
                    //            console.log(_this.signminus);


                }
            }

        }

    },

    Q6_reshuffle: function () {
        /*if(_this.flag1==2){
            _this.Q6_options=[1,2,3];
            _this.Q6_options=_this.shuffle(_this.Q6_options);
            console.log(_this.flag1+"reshuffle");
    
            _this.flag1=0;
        }*/


    },
    Q6_equatingzero: function () {
        //    console.log("hi");
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.plusAppleCount1 = undefined;
            _this.plusAppleCount2 = undefined;
            _this.plusAppleCount3 = undefined;
            _this.plusAppleCount4 = undefined;
            _this.plusAppleCount5 = undefined;
            _this.plusAppleCount6 = undefined;
            _this.plusAppleCount7 = undefined;
            _this.plusAppleCount8 = undefined;



        }
        else if (_this.Q6_options[_this.flag1] == 3) {
            _this.lightAppleCount1 = undefined;
            _this.lightAppleCount2 = undefined;
            _this.lightAppleCount3 = undefined;
            _this.lightAppleCount4 = undefined;
            _this.lightAppleCount5 = undefined;
            _this.lightAppleCount6 = undefined;
            _this.lightAppleCount7 = undefined;
            _this.lightAppleCount8 = undefined;


        }

    },

    Q6_celebration_anm: function () {
        _this.numGroupB = _this.add.group();

        switch (_this.NoOfApple[_this.flag2]) {
            case 1: _this.firstapple();
                break;
            case 2: _this.firstapple();
                _this.secondapple();

                break;
            case 3: _this.firstapple();
                _this.secondapple();
                _this.thirdapple();
                break;
            case 4: _this.firstapple();
                _this.secondapple();
                _this.thirdapple();
                _this.fourthapple();
                break;
            case 5: _this.firstapple();
                _this.secondapple();
                _this.thirdapple();
                _this.fourthapple();
                _this.fifthapple();
                break;
            case 6: _this.firstapple();
                _this.secondapple();
                _this.thirdapple();
                _this.fourthapple();
                _this.fifthapple();
                _this.sixthapple();
                break;
            case 7: _this.firstapple();
                _this.secondapple();
                _this.thirdapple();
                _this.fourthapple();
                _this.fifthapple();
                _this.sixthapple();
                _this.seventhapple();

                break;
            case 8: _this.firstapple();
                _this.secondapple();
                _this.thirdapple();
                _this.fourthapple();
                _this.fifthapple();
                _this.sixthapple();
                _this.seventhapple();
                _this.eightapple();

                break;
        }

    },

    firstapple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.plusApple1 = _this.add.sprite(301, 219, 'plusApple');//313,223
            _this.plusApple1.name = "plusApple";
            _this.plusApple2 = _this.plusApple1.animations.add('plusApple');
            _this.plusApple1.animations.play('plusApple', 30, true);
            _this.numGroupB.add(_this.plusApple1);
        }
        if (_this.Q6_options[_this.flag1] == 3) {
            _this.minusApple1 = _this.add.sprite(537, 84, 'minusApple');
            _this.minusApple1.name = "minusApple";
            _this.minusApple2 = _this.minusApple1.animations.add('minusApple');
            _this.minusApple1.animations.play('minusApple', 30, true);
            _this.numGroupB.add(_this.minusApple1);
        }



    },
    secondapple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.plusApple1 = _this.add.sprite(331, 219, 'plusApple');
            _this.plusApple1.name = "plusApple";
            _this.plusApple2 = _this.plusApple1.animations.add('plusApple');
            _this.plusApple1.animations.play('plusApple', 30, true);
            _this.numGroupB.add(_this.plusApple1);

        }
        if (_this.Q6_options[_this.flag1] == 3) {
            _this.minusApple1 = _this.add.sprite(572, 84, 'minusApple');
            _this.minusApple1.name = "minusApple";
            _this.minusApple2 = _this.minusApple1.animations.add('minusApple');
            _this.minusApple1.animations.play('minusApple', 30, true);
            _this.numGroupB.add(_this.minusApple1);
        }


    },
    thirdapple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.plusApple1 = _this.add.sprite(361, 219, 'plusApple');
            _this.plusApple1.name = "plusApple";
            _this.plusApple2 = _this.plusApple1.animations.add('plusApple');
            _this.plusApple1.animations.play('plusApple', 30, true);
            _this.numGroupB.add(_this.plusApple1);


        }
        if (_this.Q6_options[_this.flag1] == 3) {
            _this.minusApple1 = _this.add.sprite(607, 84, 'minusApple');
            _this.minusApple1.name = "minusApple";
            _this.minusApple2 = _this.minusApple1.animations.add('minusApple');
            _this.minusApple1.animations.play('minusApple', 30, true);
            _this.numGroupB.add(_this.minusApple1);
        }


    },
    fourthapple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.plusApple1 = _this.add.sprite(391, 219, 'plusApple');
            _this.plusApple1.name = "plusApple";
            _this.plusApple2 = _this.plusApple1.animations.add('plusApple');
            _this.plusApple1.animations.play('plusApple', 30, true);
            _this.numGroupB.add(_this.plusApple1);

        }
        if (_this.Q6_options[_this.flag1] == 3) {
            _this.minusApple1 = _this.add.sprite(642, 84, 'minusApple');
            _this.minusApple1.name = "minusApple";
            _this.minusApple2 = _this.minusApple1.animations.add('minusApple');
            _this.minusApple1.animations.play('minusApple', 30, true);
            _this.numGroupB.add(_this.minusApple1);
        }


    },


    fifthapple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.plusApple1 = _this.add.sprite(301, 249, 'plusApple');
            _this.plusApple1.name = "plusApple";
            _this.plusApple2 = _this.plusApple1.animations.add('plusApple');
            _this.plusApple1.animations.play('plusApple', 30, true);

            _this.numGroupB.add(_this.plusApple1);
        }
        if (_this.Q6_options[_this.flag1] == 3) {
            _this.minusApple1 = _this.add.sprite(537, 119, 'minusApple');
            _this.minusApple1.name = "minusApple";
            _this.minusApple2 = _this.minusApple1.animations.add('minusApple');
            _this.minusApple1.animations.play('minusApple', 30, true);
            _this.numGroupB.add(_this.minusApple1);

        }


    },


    sixthapple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.plusApple1 = _this.add.sprite(331, 249, 'plusApple');
            _this.plusApple1.name = "plusApple";
            _this.plusApple2 = _this.plusApple1.animations.add('plusApple');
            _this.plusApple1.animations.play('plusApple', 30, true);
            _this.numGroupB.add(_this.plusApple1);

        }
        if (_this.Q6_options[_this.flag1] == 3) {
            _this.minusApple1 = _this.add.sprite(572, 119, 'minusApple');
            _this.minusApple1.name = "minusApple";
            _this.minusApple2 = _this.minusApple1.animations.add('minusApple');
            _this.minusApple1.animations.play('minusApple', 30, true);
            _this.numGroupB.add(_this.minusApple1);
        }


    },


    seventhapple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.plusApple1 = _this.add.sprite(361, 249, 'plusApple');
            _this.plusApple1.name = "plusApple";
            _this.plusApple2 = _this.plusApple1.animations.add('plusApple');
            _this.plusApple1.animations.play('plusApple', 30, true);
            _this.numGroupB.add(_this.plusApple1);

        }
        if (_this.Q6_options[_this.flag1] == 3) {
            _this.minusApple1 = _this.add.sprite(607, 119, 'minusApple');
            _this.minusApple1.name = "minusApple";
            _this.minusApple2 = _this.minusApple1.animations.add('minusApple');
            _this.minusApple1.animations.play('minusApple', 30, true);
            _this.numGroupB.add(_this.minusApple1);
        }

    },

    eightapple: function () {
        if (_this.Q6_options[_this.flag1] == 1) {
            _this.plusApple1 = _this.add.sprite(391, 249, 'plusApple');
            _this.plusApple1.name = "plusApple";
            _this.plusApple2 = _this.plusApple1.animations.add('plusApple');
            _this.plusApple1.animations.play('plusApple', 30, true);
            _this.numGroupB.add(_this.plusApple1);


        }
        if (_this.Q6_options[_this.flag1] == 3) {
            _this.minusApple1 = _this.add.sprite(642, 119, 'minusApple');
            _this.minusApple1.name = "minusApple";
            _this.minusApple2 = _this.minusApple1.animations.add('minusApple');
            _this.minusApple1.animations.play('minusApple', 30, true);
            _this.numGroupB.add(_this.minusApple1);
        }

    },


    amplifyMedia: function (mediaElem, multiplier) {
        var context = new (window.AudioContext || window.webkitAudioContext),
            result = {
                context: context,
                source: context.createMediaElementSource(mediaElem),
                gain: context.createGain(),
                media: mediaElem,
                amplify: function (multiplier) { result.gain.gain.value = multiplier; },
                getAmpLevel: function () { return result.gain.gain.value; }
            };
        result.source.connect(result.gain);
        result.gain.connect(context.destination);
        result.amplify(multiplier);

        return result;
    },


    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },



    starActions: function () {

        _this.score++;
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim = _this.starAnim.animations.add('star');
        // _this.userHasPlayed = 1;
        // _this.game_id = 'NS_INT_6_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Integers";
         _this.microConcepts = "Number Systems";
        _this.anim.play();

    },

    Q6_glowcounter() {
        if (_this.Q6_options[_this.flag1] != 2) {
            _this.plus_glow = _this.plus2.animations.add('plusGlow', [1, 0, 1, 0, 1, 0], true);
            _this.plus2.animations.play('plusGlow', 2, false, false);

            _this.minus_glow = _this.minus2.animations.add('minusGlow', [1, 0, 1, 0, 1, 0], true);
            _this.minus2.animations.play('minusGlow', 2, false, false);
        }


    }

}