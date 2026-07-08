Game.NSD_2A_G6level1 = function () { };


Game.NSD_2A_G6level1.prototype =
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
        _this.clickSoundsrc.setAttribute("src", window.baseUrl + "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src", window.baseUrl + "sounds/celebration.mp3");
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl + "sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

        _this.wrongans = document.createElement('audio');
        _this.wronganssrc = document.createElement('source');
        _this.wronganssrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.framechange = document.createElement('audio');
        _this.framechangesrc = document.createElement('source');
        _this.framechangesrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);

        _this.snapSound = document.createElement('audio');
        _this.snapSoundsrc = document.createElement('source');
        _this.snapSoundsrc.setAttribute("src", window.baseUrl + "sounds/snapSound.mp3");
        _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.Ask_Question1 = _this.createAudio("NSD-2A-G6A");
        _this.Ask_Question2 = _this.createAudio("NSD-2A-G6B");
        _this.Ask_Question3 = _this.createAudio("NSD-2A-G6C");

        telInitializerbbpp.gameIdInit("NSD_2A_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },

    create: function (game) {


        _this.hintBtn = _this.add.sprite(670, 6, 'bulb');
        _this.hintBtn.scale.setTo(0.5, 0.6);
        _this.hintBtn.visible = false;
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

        _this.hint_flag = 0;// * hint flag zero

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
         _this.microConcepts;
        // _this.grade;


        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.Question_flag = -1;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';
        _this.fourNotEntered = false


        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        //** include the background file, navigation bar, stars, timer objects.

        _this.navBar = _this.add.sprite(0, 0, 'navBar');

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

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if (_this.Question_flag == 1) {
                    _this.Ask_Question1.play();
                }
                else if (_this.Question_flag == 2) {
                    _this.Ask_Question2.play();
                }
                else if (_this.Question_flag == 3) {
                    _this.Ask_Question3.play();
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

        //bulb 
        //   _this.hintBtn = _this.add.sprite(670,6,'bulb');
        //   _this.hintBtn.scale.setTo(0.5,0.6);
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

            //* hintbtn false
            _this.hintBtn.inputEnabled = false;
            _this.hintBtn.input.useHandCursor = false;

            //* show the demo video
            _this.time.events.add(1, function () {
                _this.ViewDemoVideo();
            });

        });

        _this.generateStarsForTheScene(6);

        //* include variables for use - objGroup (where egg objects can be added)
        _this.objGroup;
        _this.numGroup;
        // 1 - Type 1 ques  2- Type 2 ques 1st ques to be type 1

        _this.BlueFishPositionArray_X = [75 - 28, 145 - 35, 215 - 40, 285 - 45];
        // _this.FishPositionArray_y = [90, 130, 170, 210, 250];
        _this.FishPositionArray_y = [90 + 20, 130 + 20, 170 + 20, 210 + 20, 250 + 20];

        _this.RedFishPositionArray_X = [595 + 70, 665 + 65, 735 + 60, 805 + 60];

        _this.AnsFishPositionArray_X = [350, 418, 488, 558];
        _this.AnsFishPositionArray_Y = [250, 210, 170, 130, 90]


        _this.ValueZArray = [];
        _this.ValueYArray = [];
        _this.ValueXArray = [];

        _this.firstType1 = false
        _this.firstType2 = false

        _this.type21demoshown = false;
        _this.type22demoshown = false;
        _this.type1demoshown = false;



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
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-2A-G6/" + _this.languageSelected + "/" + src + ".mp3");
        audio.appendChild(audiosrc);
        // audio.play();

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


        // Stores Random Question values in Array
        _this.StoreArrayValues();

        _this.Randomize();

        //* hintbtn will be true when the game is playing
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1;
        // _this.CallingFIBFn()

    },

    stopVoice: function () {
        if (_this.Ask_Question1) {
            _this.Ask_Question1.pause();
            _this.Ask_Question1 = null;
        }
        else if (_this.Ask_Question2) {
            _this.Ask_Question2.pause();
            _this.Ask_Question2 = null;
        }
        else {
            if (_this.Ask_Question3) {
                _this.Ask_Question3.pause();
                _this.Ask_Question3 = null;
            }
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
    showfractionbox: function (addvar, yvalue) {
        _this.onebox = true

        _this.AnswerBox = _this.add.image(addvar, 380 + yvalue, 'white-box');
        _this.AnswerBox.scale.setTo(1, 1)
        _this.AnswerBox.frame = 1;
        _this.twofractionboxes = false;

    },
    showfraction2Boxes: function (addvar, y) {
        _this.twofractionboxes = true;
        _this.onebox = false;

        _this.AnswerBox = _this.add.image(addvar, y, 'box1');
        _this.AnswerBox.scale.setTo(1.3, 1)

        _this.AnswerBox.frame = 2;
        _this.q1 = true;

        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.input.useHandCursor = true;
        _this.AnswerBox.events.onInputDown.add(function () {
            _this.AnswerBox.frame = 2;
            _this.AnswerBox1.frame = 1;
            _this.q2 = false;
            _this.clickSound.play();

            if (_this.AnswerBox.name == '') {
                _this.fourNotEntered = false
                _this.q1 = true;
                _this.q2 = false;
                _this.selectedAns2 = '';
                _this.selectedAns1 = '';
                _this.selectedAns3 = '';

            }
        });

        _this.divideSign = _this.add.graphics();
        _this.divideSign.lineStyle(3, 0xFFFFFF);
        _this.divideSign.moveTo(addvar + 5, y + 61);
        _this.divideSign.lineTo(addvar + 60, y + 61);

        _this.AnswerBox1 = _this.add.image(addvar, y + 68, 'box1');
        _this.AnswerBox1.scale.setTo(1.3, 1)
        _this.AnswerBox1.frame = 1;

        _this.AnswerBox1.inputEnabled = true;
        _this.AnswerBox1.input.useHandCursor = true;
        _this.AnswerBox1.events.onInputDown.add(function () {
            _this.AnswerBox.frame = 1;
            _this.AnswerBox1.frame = 2;
            _this.q1 = false;

            _this.clickSound.play();

            if (_this.AnswerBox1.name == '') {
                _this.fourNotEntered = false
                _this.q2 = true;
                _this.q1 = false;
                _this.selectedAns2 = '';
                _this.selectedAns1 = '';
                _this.selectedAns3 = '';

            }
        });


    },

    StoreArrayValues: function () {
        // Generate 4even numbers and multiples of five and 2 odd
        _this.QnArray = []

        for (i = 0; i < 4; i++) {
            // 
            randomVal = Math.floor(Math.random() * (98 - 2) + 2);
            while (randomVal % 2 != 0) {
                randomVal = Math.floor(Math.random() * (98 - 2) + 2);

            }
            if (i > 0) {
                // Check if same or odd the remove

                for (j = 0; j < i; j++) {
                    if (randomVal == _this.QnArray[j]) {
                        randomVal = Math.floor(Math.random() * (98 - 2) + 2);
                        j = 0;
                    } while (randomVal % 2 != 0) {
                        randomVal = Math.floor(Math.random() * (98 - 2) + 2);

                    }
                }
            }
            _this.QnArray[i] = randomVal


        }
        for (i = 4; i < 6; i++) {
            // 
            randomVal = Math.floor(Math.random() * (99 - 1) + 1);
            while (randomVal % 2 == 0 || randomVal % 5 == 0) {
                randomVal = Math.floor(Math.random() * (99 - 1) + 1);

            }
            if (i > 4) {
                // Check if same or even then remove
                for (j = 4; j < i; j++) {
                    if (randomVal == _this.QnArray[j]) {
                        randomVal = Math.floor(Math.random() * (99 - 1) + 1);
                        j = 4;
                    }
                    while (randomVal % 2 == 0 || randomVal % 5 == 0) {
                        randomVal = Math.floor(Math.random() * (99 - 1) + 1);

                    }
                }
            }
            _this.QnArray[i] = randomVal


        }
        _this.QnArray = _this.shuffle(_this.QnArray);
        console.log(_this.QnArray)

    },
    Randomize: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
        // _this.tableNotshow = true;
        _this.secondPartNotShown = true;

        _this.grayBox = _this.add.sprite(240, 70, 'gray-box')
        _this.grayBox.scale.setTo(0.9)

        _this.sidebar = _this.add.sprite(100, 90, 'sidebox')
        _this.sidebar.scale.setTo(0.5, 1.2)
        _this.tensBar = _this.add.sprite(125, 102, 'tensbox');
        _this.tensBar.scale.setTo(0.8, 0.55)
        _this.tensBar.inputEnabled = true;
        _this.tensBar.input.enableDrag(true)
        _this.tensBar.events.onDragStop.add(_this.TensdragStop, _this.tensBar);
        _this.tensBar.events.onDragUpdate.add(_this.updateBoxes, _this)

        _this.onesBar = _this.add.sprite(125, 350, 'brownbox')
        _this.onesBar.scale.setTo(0.8)
        _this.onesBar.inputEnabled = true;
        _this.onesBar.input.enableDrag(true)
        _this.onesBar.events.onDragStop.add(_this.OnesdragStop, _this.onesBar);
        _this.onesBar.events.onDragUpdate.add(_this.updateBoxes, _this)

        if (_this.count1 == 0) {

            _this.Ask_Question1.play();
        }
        _this.Question_flag = 1;

        _this.makePart1Boxes();
        _this.gridArray = []
        for (i = 0; i < 100; i++)
            _this.gridArray[i] = false;

    },
    updateBoxes: function (target) {
        target.bringToTop();
    },
    RevdragUpdate: function (target) {
        target.bringToTop();

    },
    RevdragStop: function (target) {
        if (_this.checkOverlap(target, _this.sidebar)) {

            _this.snapSound.currentTime = 0
            _this.snapSound.play();
            for (i = target.posx; i < target.posy; i++) {
                _this.gridArray[i] = false;
                target.visible = false;
            }

            if (_this.tensBar.inputEnabled == false)
                _this.tensBar.inputEnabled = true;

            if (_this.onesBar.inputEnabled == false)
                _this.onesBar.inputEnabled = true;

        }
        else {
            // Move back to original
            target.x = target.X;
            target.y = target.Y;

        }
    },
    TensdragStop: function (target) {

        if (_this.checkOverlap(target, _this.grayBox)) {

            if (_this.tensBar) {
                _this.tensBar.x = 125;
                _this.tensBar.y = 102;
            }

            for (i = 0; i < _this.gridArray.length; i += 10) {
                if (_this.gridArray[i] % 10 == 0 && _this.gridArray[i] != true) {
                    //   We can store our tens box

                    var tensbox = _this.add.sprite(i / 10 * 39 + 15, 14, 'tensbox')
                    _this.snapSound.currentTime = 0
                    _this.snapSound.play();
                    tensbox.scale.setTo(1)
                    tensbox.name = "tens"
                    tensbox.X = tensbox.x;
                    tensbox.Y = 14

                    tensbox.posx = i;
                    tensbox.posy = i + 10;
                    for (j = tensbox.posx; j < tensbox.posy; j++) {
                        _this.gridArray[j] = true;
                    }

                    tensbox.inputEnabled = true;
                    tensbox.input.enableDrag(true);
                    tensbox.events.onDragStop.add(_this.RevdragStop, tensbox);
                    tensbox.events.onDragUpdate.add(_this.RevdragUpdate, tensbox);
                    tensbox.events.onDragUpdate.add(_this.updateBoxes, _this)


                    _this.grayBox.addChild(tensbox)
                    break;


                }
            }


        } else {
            if (_this.tensBar) {
                _this.tensBar.x = 125;
                _this.tensBar.y = 102;
            }

        }
    },
    OnesdragStop: function (target) {

        var cx = 0;
        var xpos = 0;
        if (_this.checkOverlap(target, _this.grayBox)) {

            if (_this.onesBar) {
                _this.onesBar.x = 125;
                _this.onesBar.y = 350;
            }
            for (i = 0; i < _this.gridArray.length; i++) {
                if (i % 10 == 0) {
                    for (k = i; k < i + 10; k++) {
                        if (_this.gridArray[k] == true) {
                            cx = k + 1;
                        }
                        else {

                            break
                        }
                    }

                    if (cx % 10 == 0 && k != 0 && cx != xpos) {
                        xpos = cx;

                    }
                    else {
                        break;
                    }
                }

            }
            for (i = 0; i < _this.gridArray.length; i++) {

                if (_this.gridArray[i] != true) {

                    var onesbox = _this.add.sprite((xpos / 10) * 39 + 15, i % 10 * 39 + 14, 'brownbox')
                    _this.snapSound.currentTime = 0
                    _this.snapSound.play();
                    onesbox.scale.setTo(1)
                    onesbox.X = onesbox.x
                    onesbox.Y = onesbox.y
                    onesbox.name = "ones"

                    onesbox.posx = i;
                    onesbox.posy = i + 1;
                    for (j = onesbox.posx; j < onesbox.posy; j++) {
                        _this.gridArray[j] = true;
                    }

                    onesbox.inputEnabled = true;
                    onesbox.input.enableDrag(true);
                    onesbox.events.onDragUpdate.add(_this.updateBoxes, _this)

                    onesbox.events.onDragStop.add(_this.RevdragStop, onesbox);

                    onesbox.events.onDragStop.add(_this.RevdragStop, onesbox);
                    _this.grayBox.addChild(onesbox)

                    break;


                }
            }

        }
        else {
            if (_this.onesBar) {
                _this.onesBar.x = 125;
                _this.onesBar.y = 350;
            }
        }

    },
    alinBoxes: function () {
        for (i = 0; i < _this.grayBox.children.length; i++) {
            _this.grayBox.getChildAt(i).visible = false;
        }
        for (i = 0; i < Math.floor(_this.QnArray[_this.count1] / 10); i++) {
            var tensbox = _this.add.sprite(i * 39 + 15, 14, 'tensbox')
            tensbox.name = "tens"
            tensbox.X = tensbox.x;
            tensbox.Y = 14
            tensbox.posx = i;
            tensbox.posy = i + 10;
            _this.grayBox.addChild(tensbox)
        }
        for (i = Math.floor(_this.QnArray[_this.count1] / 10) * 10; i < _this.QnArray[_this.count1]; i++) {
            var onesbox = _this.add.sprite((Math.floor(_this.QnArray[_this.count1] / 10) * 10 / 10) * 39 + 15, i % 10 * 39 + 14, 'brownbox')
            onesbox.X = onesbox.x
            onesbox.Y = onesbox.y
            onesbox.name = "ones"
            onesbox.posx = i;
            onesbox.posy = i + 1;
            _this.grayBox.addChild(onesbox)

        }

    },
    checkPart1: function () {
        _this.userBoxes = 0;
        for (i = 0; i < _this.gridArray.length; i++) {
            if (_this.gridArray[i] == true) {
                _this.userBoxes++;
            }
        }
        if (_this.userBoxes == _this.QnArray[_this.count1] && _this.AnswerBox.name == _this.QnArray[_this.count1] && _this.AnswerBox1.name == 100) {
            _this.counterCelebrationSound.pause();
            _this.counterCelebrationSound.currentTime = 0;
            _this.counterCelebrationSound.play();
            _this.AnswerBox.frame = 2
            _this.AnswerBox1.frame = 2
            _this.grayBox.frame = 1;
            for (i = 0; i < 100; i++) {
                _this.gridArray[i] = false;
            }
            for (i = 0; i < _this.QnArray[_this.count1]; i++) {
                _this.gridArray[i] = true;
            }
            for (i = 0; i < _this.grayBox.children.length; i++) {
                _this.grayBox.getChildAt(i).inputEnabled = false;
            }
            _this.time.events.add(1700, _this.alinBoxes);

            _this.time.events.add(1700, _this.destroryPart1);

        }

        else {
            if (_this.userBoxes != _this.QnArray[_this.count1])
                _this.shake.shake(10, _this.grayBox);

            else {
                _this.boxgrp = _this.add.group();
                _this.boxgrp.addChild(_this.AnswerBox)
                _this.boxgrp.addChild(_this.divideSign)
                _this.boxgrp.addChild(_this.AnswerBox1)
                _this.shake.shake(10, _this.boxgrp);
            }

            _this.removeboth = true;
            _this.wrongSelected();
        }
    },
    makePart1Boxes: function () {
        _this.DQBox = _this.add.sprite(680, 118, 'Scorebox1')
        _this.DQBox.scale.setTo(0.6)
        if (_this.QnArray[_this.count1] % 10 == 0) {
            var q = _this.QnArray[_this.count1] / 100 + "0"
        }
        else {
            var q = _this.QnArray[_this.count1] / 100
        }
        _this.qText = _this.add.text(23, 32, q)
        _this.DQBox.addChild(_this.qText)
        _this.qText.scale.setTo(1.2, 1.5)

        _this.qText.fontSize = "36px";
        _this.qText.fill = '#65B4C3';

        // Make tick button to validate boxes
        _this.tick = _this.add.sprite(690, 300, 'TickBtn')
        _this.tick.inputEnabled = true;
        _this.tick.events.onInputDown.add(_this.tickbtnclicked, _this)
    },
    tickbtnclicked: function () {
        _this.userBoxes = 0;
        _this.tick.frame = 1;
        for (i = 0; i < _this.gridArray.length; i++) {
            if (_this.gridArray[i] == true) {
                _this.userBoxes++;
            }
        }
        if (_this.userBoxes == _this.QnArray[_this.count1]) {
            _this.tick.inputEnabled = false;
            // _this.counterCelebrationSound.pause();
            // _this.counterCelebrationSound.currentTime = 0;
            // _this.counterCelebrationSound.play();
            _this.tensBar.inputEnabled = false;
            _this.onesBar.inputEnabled = false;
            for (i = 0; i < 100; i++) {
                _this.gridArray[i] = false;
            }
            for (i = 0; i < _this.QnArray[_this.count1]; i++) {
                _this.gridArray[i] = true;
            }
            for (i = 0; i < _this.grayBox.children.length; i++) {
                _this.grayBox.getChildAt(i).inputEnabled = false;
            }
            _this.framechange.play()
            _this.alinBoxes()
            // _this.time.events.add(1000, _this.alinBoxes);
            _this.Ask_Question1.pause();
            _this.Ask_Question1.currentTime = 0;
            _this.time.events.add(500, () => {
                _this.tick.destroy();
            })
            _this.time.events.add(1000, () => {

                _this.showfraction2Boxes(690, 280)
                _this.addNumberPad();
                _this.Question_flag = 2;
                if (_this.count1 == 0) {

                    _this.time.events.add(500, () => {
                        _this.Ask_Question2.play();
                    })
                }

            })
        }
        else {
            _this.wrongans.play();
            _this.time.events.add(500, () => {
                _this.tick.frame = 0;

            })

            _this.shake.shake(10, _this.grayBox);
        }
    },
    rightbtnClicked: function () {
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        _this.rightbtn_is_Clicked = true;

        _this.checkPart1();
    },
    alinCorrectly: function () {
        _this.framechange.play();
        _this.grayBox.x -= 180;
        _this.AnswerBox.x -= 180;
        _this.AnswerBox1.x -= 180;
        _this.divideSign.x -= 180;
        _this.AnswerBox.y -= 80;
        _this.AnswerBox1.y -= 80;
        _this.divideSign.y -= 80;
        _this.grayBox.frame = 0;


    },
    destroryPart1: function () {
        _this.numGroup.destroy();
        // _this.AnswerBox.destroy()
        _this.sidebar.destroy();
        _this.tensBar.destroy();
        _this.onesBar.destroy();
        _this.DQBox.destroy();
        _this.alinCorrectly();

        _this.makepart2Boxes();

    },
    MakeOpQues: function () {
        if (_this.QnArray[_this.count1] % 2 == 0 && _this.QnArray[_this.count1] % 5 != 0) {
            // Options for Even
            // Correct answer
            num = _this.QnArray[_this.count1]
            den = 100;
            while (num % 2 == 0 && den % 2 == 0) {
                num = num / 2;
                den = den / 2;
            }
            op11 = num;
            op12 = den;

            _this.addinQBox(op11, op12);

            var dOp = [op12, op12 + 1]
            den = dOp[Math.floor(Math.random() * dOp.length)]
            if (den == op12) {
                var dOp = [op12 + 1]
                if (op11 > 1)
                    var nOp = [op11 - 1, op11 + 1];
                else
                    var nOp = [op11 + 1];

                num = nOp[Math.floor(Math.random() * nOp.length)]
            }
            else {
                if (op11 > 1)
                    var nOp = [op11 - 1, op11 + 1, op11];
                else
                    var nOp = [op11 + 1, op11];

                num = nOp[Math.floor(Math.random() * nOp.length)]
            }
            op21 = num;
            op22 = den;
            if (op21 == op22) {
                // For same numbers
                if (op22 == op12) {
                    // Same deno
                    if (op21 - 1 != op12 && op12 > 1)
                        op21 = op21 - 1;
                    else
                        op21 = op21 + 1;


                }
                else {
                    // Differnent

                    op21 = op21 + 1;


                }
            }

            _this.addinQBox(op21, op22);

            den = dOp[Math.floor(Math.random() * dOp.length)]
            if (den == op12) {


                var dOp = [op12 + 1]
                if (op11 > 1) {

                    var nOp = [op11 - 1, op11 + 1];
                }
                else
                    var nOp = [op11 + 1]
                num = nOp[Math.floor(Math.random() * nOp.length)]
                while (num == op21 && den == op22) {
                    den = dOp[Math.floor(Math.random() * dOp.length)]
                    if (op11 > 1)
                        var nOp = [op11 - 1, op11 + 1];
                    else
                        var nOp = [op11 + 1];
                    num = nOp[Math.floor(Math.random() * nOp.length)]

                }
            }
            else {
                if (op11 > 1)
                    var nOp = [op11 - 1, op11 + 1, op11];
                else
                    var nOp = [op11 + 1, op11];
                num = nOp[Math.floor(Math.random() * nOp.length)]
                while (num == op21 && den == op22) {
                    // den = dOp[Math.floor(Math.random() * dOp.length)]
                    if (op11 > 1)
                        var nOp = [op11 - 1, op11 + 1, op11];
                    else
                        var nOp = [op11 + 1, op11];
                    num = nOp[Math.floor(Math.random() * nOp.length)]

                }
            }

            op31 = num;
            op32 = den;

            if (op31 == op32) {
                // For same numbers
                if (op32 == op12) {
                    // Same deno
                    if (op31 - 1 != op11 && op11 > 1)
                        op31 = op31 - 1;
                    else
                        op31 = op31 + 1;


                }
                else {
                    // Differnent

                    if (op32 != op22)
                        op31 += 1;
                    else if (op31 + 1 != op21)
                        op31 = op31 + 1;
                    else if (op11 > 1)
                        op31 = op31 - 1;
                    else
                        op32 += 1;

                }
            }

            _this.addinQBox(op31, op32);

        }
        else if (_this.QnArray[_this.count1] % 5 == 0) {
            num = _this.QnArray[_this.count1]
            den = 100;
            while ((num % 5 == 0 && den % 5 == 0) || (num % 2 == 0 && den % 2 == 0)) {
                if (num % 5 == 0) {
                    num = num / 5;
                    den = den / 5;
                }
                else {
                    num = num / 2;
                    den = den / 2
                }
            }
            op11 = num;
            op12 = den;
            _this.addinQBox(op11, op12);

            var dOp = [op12, op12 + 1, 10]
            den = dOp[Math.floor(Math.random() * dOp.length)]
            if (den == op12) {
                var dOp = [op12 + 1, 10]
                if (op11 > 1)
                    var nOp = [op11 - 1, op11 + 1];
                else
                    var nOp = [op11 + 1];

                num = nOp[Math.floor(Math.random() * nOp.length)]
            }
            else {
                if (op11 > 1)
                    var nOp = [op11 - 1, op11 + 1, op11];
                else
                    var nOp = [op11 + 1, op11];

                num = nOp[Math.floor(Math.random() * nOp.length)]
            }

            op21 = num;
            op22 = den;

            if (op21 == op22) {
                // For same numbers
                if (op22 == op12) {
                    // Same deno
                    if (op21 - 1 != op12 && op12 > 1)
                        op21 = op21 - 1;
                    else
                        op21 = op21 + 1;
                }
                else {
                    // Differnent
                    op21 = op21 + 1;
                }
            }
            _this.addinQBox(op21, op22);

            den = dOp[Math.floor(Math.random() * dOp.length)]
            if (den == op12) {
                var dOp = [op12 + 1, 10]
                if (op11 > 1)
                    var nOp = [op11 - 1, op11 + 1];
                else
                    var nOp = [op11 + 1]
                num = nOp[Math.floor(Math.random() * nOp.length)]
                while (num == op21 && den == op22) {
                    den = dOp[Math.floor(Math.random() * dOp.length)]
                    if (op11 > 1)
                        var nOp = [op11 - 1, op11 + 1];
                    else
                        var nOp = [op11 + 1];
                    num = nOp[Math.floor(Math.random() * nOp.length)]

                }
            }
            else {
                if (op11 > 1)
                    var nOp = [op11 - 1, op11 + 1, op11];
                else
                    var nOp = [op11 + 1, op11];
                num = nOp[Math.floor(Math.random() * nOp.length)]
                while (num == op21 && den == op22) {
                    // den = dOp[Math.floor(Math.random() * dOp.length)]
                    if (op11 > 1)
                        var nOp = [op11 - 1, op11 + 1, op11];
                    else
                        var nOp = [op11 + 1, op11];
                    num = nOp[Math.floor(Math.random() * nOp.length)]

                }
            }


            op31 = num;
            op32 = den;

            if (op31 == op32) {
                // For same numbers
                if (op32 == op12) {
                    // Same deno
                    if (op31 - 1 != op11 && op11 > 1)
                        op31 = op31 - 1;
                    else
                        op31 = op31 + 1;

                }
                else {
                    // Differnent
                    if (op32 != op22)
                        op31 += 1;
                    else if (op31 + 1 != op21)
                        op31 = op31 + 1;
                    else if (op11 > 1)
                        op31 = op31 - 1;
                    else
                        op32 += 1;

                }
            }
            _this.addinQBox(op31, op32);

        }
        else {
            // Options For odd
            num = _this.QnArray[_this.count1]
            dec = 100;
            op11 = num;
            op12 = dec;
            _this.addinQBox(op11, op12);

            var dOp = [op12, 10]
            den = dOp[Math.floor(Math.random() * dOp.length)]
            if (den == op12) {
                var dOp = [10]
                if (op11 > 9 && op11 % 10 == op11 / 10)
                    var nOp = [op11 % 10];
                else if (op11 > 1)
                    var nOp = [op11 + 1, op11 - 1];
                else
                    var nOp = [op11 + 1];


                num = nOp[Math.floor(Math.random() * nOp.length)]
            }
            else {
                if ((op11 > 9 && op11 % 10 == op11 / 10))
                    var nOp = [op11 % 10, op11];
                else if (op11 > 1)
                    var nOp = [op11 + 1, op11, op11 - 1];
                else
                    var nOp = [op11 + 1, op11];

                num = nOp[Math.floor(Math.random() * nOp.length)]
            }

            op21 = num;
            op22 = den;
            if (op21 == op22) {
                // For same numbers
                if (op22 == op12) {
                    // Same deno
                    if (op21 - 1 != op12 && op12 > 1)
                        op21 = op21 - 1;
                    else
                        op21 = op21 + 1;
                }
                else {
                    // Differnent
                    op21 = op21 + 1;

                }
            }
            _this.addinQBox(op21, op22);

            den = dOp[Math.floor(Math.random() * dOp.length)]
            if (den == op12) {
                var dOp = [10]
                if (op11 > 9 && op11 % 10 == op11 / 10)
                    var nOp = [op11 % 10];
                else if (op11 > 1)
                    var nOp = [op11 + 1, op11 - 1];
                else
                    var nOp = [op11 + 1];

                num = nOp[Math.floor(Math.random() * nOp.length)]


                while (num == op21 && den == op22) {
                    den = dOp[Math.floor(Math.random() * dOp.length)]
                    if (op11 > 9 && op11 % 10 == op11 / 10)
                        var nOp = [op11 % 10];
                    else if (op11 > 1)
                        var nOp = [op11 + 1, op11 - 1];
                    else
                        var nOp = [op11 + 1];
                    num = nOp[Math.floor(Math.random() * nOp.length)]

                }
            }
            else {
                if ((op11 > 9 && op11 % 10 == op11 / 10))
                    var nOp = [op11 % 10, op11];
                else if (op11 > 1)
                    var nOp = [op11 + 1, op11, op11 - 1];
                else
                    var nOp = [op11 + 1, op11];

                num = nOp[Math.floor(Math.random() * nOp.length)]

                while (num == op21 && den == op22) {
                    // den = dOp[Math.floor(Math.random() * dOp.length)]
                    if ((op11 > 9 && op11 % 10 == op11 / 10))
                        var nOp = [op11 % 10, op11];
                    else if (op11 > 1)
                        var nOp = [op11 + 1, op11, op11 - 1];
                    else
                        var nOp = [op11 + 1, op11];

                    num = nOp[Math.floor(Math.random() * nOp.length)]

                }
            }
            op31 = num;
            op32 = den;
            if (op31 == op32) {
                // For same numbers
                if (op32 == op12) {
                    // Same deno
                    if (op31 - 1 != op12 && op11 > 1)
                        op31 = op31 - 1;
                    else
                        op31 = op31 + 1;
                }
                else {
                    // Differnent
                    if (op32 != op22)
                        op31 += 1;
                    else if (op31 + 1 != op21)
                        op31 = op31 + 1;
                    else if (op11 > 1)
                        op31 = op31 - 1;
                    else
                        op32 += 1;
                }
            }

            _this.addinQBox(op31, op32);

        }

    },
    addinQBox: function (num, den) {
        if (num < 10)
            var n = _this.add.text(40, 25, num)
        else
            var n = _this.add.text(32, 25, num)
        if (den < 10)
            var d = _this.add.text(40, 70, den)
        else if (den < 100)
            var d = _this.add.text(32, 70, den)
        else
            var d = _this.add.text(25, 70, den)


        _this.applyingStyle(n)
        _this.applyingStyle(d)
        if (_this.option1.children.length == 0) {

            _this.option1.addChild(n)
            _this.option1.addChild(d)
            _this.correctAnsBox = _this.option1


        }
        else if (_this.option2.children.length == 0) {


            _this.option2.addChild(n)
            _this.option2.addChild(d)
        }
        else {


            _this.option3.addChild(n)
            _this.option3.addChild(d)
        }
    },
    makepart2Boxes: function () {
        _this.secondPartNotShown = false;
        _this.Question_flag = 3;
        if (_this.count1 == 0) {
            _this.time.events.add(1200, () => {
                _this.Ask_Question3.play();

            })
        }
        _this.option1 = _this.add.sprite(650, 85, 'fraction-score-box2')
        _this.option1.scale.setTo(0.9, 0.8)
        _this.option1.inputEnabled = true;
        _this.option1.input.useHandCursor = true
        _this.option1.name = 'op1'

        _this.option1.events.onInputDown.add(_this.optionselected, _this)
        _this.option2 = _this.add.sprite(650, 205, 'fraction-score-box2')
        _this.option2.scale.setTo(0.9, 0.8)
        _this.option2.inputEnabled = true;
        _this.option2.input.useHandCursor = true
        _this.option2.events.onInputDown.add(_this.optionselected, _this)
        _this.option2.name = 'op3'


        _this.option3 = _this.add.sprite(650, 325, 'fraction-score-box2')
        _this.option3.scale.setTo(0.9, 0.8)
        _this.option3.inputEnabled = true;
        _this.option3.input.useHandCursor = true
        _this.option3.events.onInputDown.add(_this.optionselected, _this)
        _this.option3.name = 'op3'

        _this.MakeOpQues();
        _this.options = [_this.option1, _this.option2, _this.option3]
        _this.options = _this.shuffle(_this.options)

        _this.options[0].y = 85;
        _this.options[1].y = 205;
        _this.options[2].y = 325;


    },
    showTickBtn: function () {
        _this.tickbtn = _this.add.sprite(820, 220, 'TickBtn')
        _this.tickbtn.inputEnabled = true;
        _this.tickbtn.events.onInputDown.add(_this.validate, _this);
    },
    optionselected: function (target) {
        if (_this.option1.frame == 0 && _this.option2.frame == 0 && _this.option3.frame == 0 && !_this.tickbtn) {
            _this.showTickBtn();
        }
        _this.option1.frame = 0;
        _this.option2.frame = 0;
        _this.option3.frame = 0;

        target.frame = 1;
        _this.usersSelectedBox = target;
        _this.usersSelectedBox.name = target.name;

    },
    validate: function () {
        _this.tickbtn.frame = 1;
        _this.noofAttempts++;
        if (_this.usersSelectedBox.name == _this.correctAnsBox.name) {

            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.celebrate();
            _this.secondPartNotShown = false;
            _this.tickbtn.inputEnabled = false;

        }
        else {
            _this.wrongans.play();
            _this.shake.shake(10, _this.usersSelectedBox);
            _this.time.events.add(500, () => {
                _this.tickbtn.frame = 0;

            })
            // Shuffle options
            _this.time.events.add(1000, () => {
                _this.option1.frame = 0;
                _this.option2.frame = 0;
                _this.option3.frame = 0;
                _this.usersSelectedBox = '';

                _this.options = [_this.option1, _this.option2, _this.option3]
                _this.options = _this.shuffle(_this.options)
                _this.option1.visible = false;
                _this.option2.visible = false;
                _this.option3.visible = false;

                _this.options[0].y = 85;
                _this.options[1].y = 205;
                _this.options[2].y = 325;
                _this.time.events.add(500, () => {
                    _this.tickbtn.inputEnabled = true;

                    _this.option1.visible = true;
                    _this.option2.visible = true;
                    _this.option3.visible = true;
                })

            })

        }
    },
    celebrate: function () {
        _this.counterCelebrationSound.pause();
        _this.counterCelebrationSound.currentTime = 0;
        _this.celebrationSound.play();
        _this.selectedAns1 = ''
        _this.selectedAns2 = ''
        _this.selectedAns3 = ''
        _this.usersSelectedBox = ''
        _this.enterTxt = ''
        _this.correctAns();

    },

    wrongSelected: function () {
        _this.wrongans.play();
        _this.wrongbtnClicked();
        _this.rightbtn.inputEnabled = true;

    },

    //* Change this function to show small number pad as given in GDD. (no signs)
    addNumberPad: function () {

        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        //bottomnumpadbg.anchor.setTo(0.5);
        bottomnumpadbg.scale.setTo(1, 1);

        // bottomnumpadbg.name = "numpadbg";

        _this.x = 70;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;

        for (var i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.8);
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

    numClicked: function (target) {
        _this.clickSound.play();
        var_selectedAns1 = " "
        var_selectedAns2 = " "
        var_selectedAns3 = " "

        if (target.name == 10)
            target.name = 0;
        if (target.name == 11 && _this.finalAns != true) {
            return
        }
        if ((target.name == 11 || target.name == '.') && _this.finalAns == true && _this.dotselected == true) {
            return

        }
        if (target.name == 11 && _this.finalAns == true) {
            target.name = "."
            _this.dotselected = true;
        }


        if (_this.selectedAns1 === '') {
            _this.selectedAns1 = target.name;
            var_selectedAns1 = _this.selectedAns1;
        }
        else if (_this.selectedAns2 === '') {

            _this.selectedAns2 = target.name;
            var_selectedAns1 = _this.selectedAns1;
            var_selectedAns2 = _this.selectedAns2;

        }
        else if ((_this.selectedAns3 === '')) {

            _this.selectedAns3 = target.name;
            var_selectedAns1 = _this.selectedAns1;
            var_selectedAns2 = _this.selectedAns2;
            var_selectedAns3 = _this.selectedAns3;
        }


        if (_this.fourNotEntered == false) {

            if (_this.q1 == true) {
                _this.enterTxt.visible = false;
                _this.AnswerBox.removeChild(_this.enterTxt);
                if ((var_selectedAns2 === " "))

                    _this.enterTxt = _this.add.text(19, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });

                else if ((var_selectedAns3 === " "))
                    _this.enterTxt = _this.add.text(14, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });

                else {
                    _this.enterTxt = _this.add.text(8, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '20px' });
                    // _this.enterTxt.scale.setTo(0.9, 1)
                    _this.q1 = false;
                    _this.fourNotEntered = true

                }
                _this.enterTxt.scale.setTo(1, 1.4)
                _this.applyingStyle(_this.enterTxt);
                _this.enterTxt.visible = true
                _this.AnswerBox.addChild(_this.enterTxt);
                _this.AnswerBox.name = Number('' + var_selectedAns1 + var_selectedAns2 + var_selectedAns3);
            }

            else if (_this.q2 == true) {
                _this.AnswerBox1.removeChild(_this.enterTxt1);
                if ((var_selectedAns2 === " "))

                    _this.enterTxt1 = _this.add.text(19, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });
                else if ((var_selectedAns3 === " "))
                    _this.enterTxt1 = _this.add.text(14, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });

                else {
                    _this.enterTxt1 = _this.add.text(8, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '20px' });
                    _this.q2 = false;
                    _this.fourNotEntered = true

                }
                _this.enterTxt1.scale.setTo(1, 1.4)

                _this.applyingStyle(_this.enterTxt1);
                _this.enterTxt1.visible = true

                _this.AnswerBox1.addChild(_this.enterTxt1);
                _this.AnswerBox1.name = Number('' + var_selectedAns1 + var_selectedAns2 + var_selectedAns3);
            }

        }
    },
    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.fourNotEntered = false;
        _this.fouransLen = 0;
        _this.finalval = "";
        _this.dotselected = false;
        if (_this.removeboth) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.AnswerBox.frame = 2;
            _this.q1 = true;
            _this.AnswerBox.name = "";

            _this.AnswerBox1.removeChild(_this.enterTxt1);
            _this.AnswerBox1.frame = 1;
            _this.AnswerBox1.name = "";

            _this.removeboth = false;
        }
        else if (_this.twofractionboxes) {
            if (_this.AnswerBox.frame == 2) {
                _this.AnswerBox.removeChild(_this.enterTxt);
                _this.q1 = true;
                _this.AnswerBox.name = "";

            }
            else {
                _this.AnswerBox1.removeChild(_this.enterTxt1);
                _this.q2 = true;
                _this.AnswerBox1.name = "";


            }
        }
        else {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.AnswerBox.frame = 2;
        }
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';

    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },

    ClearAll: function () {
        _this.numGroup.destroy()
        _this.numGroup = null;
        _this.grayBox.destroy();
        _this.option1.destroy();
        _this.option2.destroy();
        _this.option3.destroy();
        _this.AnswerBox.destroy();
        _this.AnswerBox1.destroy();
        _this.divideSign.destroy()
        _this.tickbtn.destroy();
        _this.tickbtn = null;
        _this.fourNotEntered = false;


    },
    applyingStyle: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
    },

    correctAns: function () {

        if (_this.count1 < 5) {

            _this.celebrationSound.play();
            _this.starActions(_this.count1);
            _this.time.events.add(2000, _this.ClearAll);

            _this.time.events.add(3000, _this.Randomize);


        }

        else {

            _this.starActions(_this.count1);
            _this.time.events.add(2000, _this.ClearAll);

            _this.time.events.add(2500, () => {
                // _this.state.start('score', true, false);
                _this.state.start('score', true, false,gameID,_this.microConcepts);

            })
        }

    },
    checkOverlap: function (spriteA, spriteB) {
        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },

    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');

        // //* star Actions changes
        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NSD_2A_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Decimals";
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

    DemoVideo: function () {
        //*  This game helps us convert decimals into lowest fractions
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSD-2A-G6/" + _this.languageSelected + "/DV-NSD-2A-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* Drag the strips and square pieces onto the grid to represent the given decimal number.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-2A-G6/" +
            _this.languageSelected + "/NSD-2A-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Write the corresponding fraction.
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-2A-G6/" +
            _this.languageSelected + "/NSD-2A-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Now, select the lowest form of the fraction.
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-2A-G6/" +
            _this.languageSelected + "/NSD-2A-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.stopAudio();
            if (_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if (_this.videoWorld_1)
                _this.videoWorld_1.destroy();

            if (_this.hintBtn) {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;  //* restart the game
        });
    },

    stopAudio: function () {
        //* clear all the timers first

        if (_this.q1Timer) clearTimeout(_this.q1Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.q3Timer) clearTimeout(_this.q3Timer);

        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
            _this.demoAudio1.pause();
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

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsd2a_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSD-2A-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        //* play the demo audio1 
        _this.demoAudio1.play();

        _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1Timer after 4 seconds.
        {
            console.log("inside q1sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 6500);

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 27 seconds.
        {
            console.log("inside q2sound.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 29000);

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3Timer after 47 seconds.
        {
            console.log("inside q3sound.....")
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 47000);

        _this.demoVideo_1.onComplete.add(function () {
            _this.stopAudio();
            _this.demoVideo_1.stop(false);
            _this.videoWorld_1.destroy();
            if (_this.hintBtn) {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;

        });
    }
}