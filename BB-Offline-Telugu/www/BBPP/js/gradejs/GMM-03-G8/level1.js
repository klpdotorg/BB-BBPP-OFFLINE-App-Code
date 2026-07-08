Game.GMM_03_G8level1 = function () { };


Game.GMM_03_G8level1.prototype =
{
    init: function (param, score) {
        _this = this;

        this.Stararr = param;
        this.score = score;
        _this = this;
        //* language is passed as parameter.
        _this.languageSelected = window.languageSelected;
        // _this.languageSelected = document.getElementById("LANGUAGE").innerHTML;

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

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        _this.tileSound = document.createElement('audio');
        _this.tileSoundsrc = document.createElement('source');
        _this.tileSoundsrc.setAttribute("src", window.baseUrl + "sounds/selecttile.mp3");
        _this.tileSound.appendChild(_this.tileSoundsrc);

        _this.openSound = document.createElement('audio');
        _this.openSoundsrc = document.createElement('source');
        _this.openSoundsrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.openSound.appendChild(_this.openSoundsrc);

        _this.tapSound = document.createElement('audio');
        _this.tapSoundsrc = document.createElement('source');
        _this.tapSoundsrc.setAttribute("src", window.baseUrl + "sounds/Tap.mp3");
        _this.tapSound.appendChild(_this.tapSoundsrc);

        _this.clungSound = document.createElement('audio');
        _this.clungSoundsrc = document.createElement('source');
        _this.clungSoundsrc.setAttribute("src", window.baseUrl + "sounds/clung.mp3");
        _this.clungSound.appendChild(_this.clungSoundsrc);

        _this.Ask_Question1 = _this.createAudio("GMM_03_G8_d1");
        _this.Ask_Question2 = _this.createAudio("GMM_03_G8_a1");
        _this.Ask_Question3 = _this.createAudio("GMM_03_G8_a4");
        _this.Ask_Question4 = _this.createAudio("GMM_03_G8_a2");//V4
        _this.Ask_Question5 = _this.createAudio("GMM_03_G8_a5");//V5
        _this.Ask_Question6 = _this.createAudio("GMM_03_G8_a3");
        _this.Ask_Question7 = _this.createAudio("GMM_03_G8_a6");
        // _this.Ask_Question8 = _this.createAudio("V8");
        // _this.Ask_Question9 = _this.createAudio("V9");

        //edited for baseurl online apk
        telInitializerbbpp.gameIdInit("GMM_03_G8", gradeSelected);
        console.log(gameID, "gameID...");
    },

    create: function (game) {
        //for api
        _this.hintBtn = _this.add.sprite(670, 6, 'bulb');
        _this.hintBtn.scale.setTo(0.5, 0.6);
        _this.hintBtn.visible = false;

        //* show the demo video
        // _this.time.events.add(1, function () {

        //     _this.ViewDemoVideo();
        // });

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
        //edited for baseurl apk
        //*add these  variables
        _this.noofAttempts = 0;//total attempt to answer q question
        _this.AnsTimerCount = 0;//total time
        _this.sceneCount = 0;//no of screen
        _this.questionid = null;//always 1
        //............

        currentlyPlayingAudio = null;//for audio

        _this.AnsTimerCount = 0;
        _this.count1 = 0;//0
        _this.trackCount = 0;
        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        _this.starsGroup;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';
        _this.AnswerBox;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.answer = 0;
        _this.stage = 0;
        _this.Question_flag = 0;
        _this.starting = 0;
        _this.objectCounter = 0;
        _this.i = 0;
        _this.j = 0;
        _this.limit = 0;
        _this.denom_flag = -1;

        _this.numberOfQuestions = 0;
        _this.rightbtnFlag = 0;

        _this.numbers = _this.add.group();


        valuesCombinationsNum = []
        valuesCombinationsDenom = []

        valuesCombinationsNum2 = []
        valuesCombinationsDenom2 = []



        _this.counterForTimer = 0;

        _this.arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        //option order radomising for cube and cuboid
        _this.optionOrder = [2, 1];//2, 1, 2//1 for cube and 2 for cuboid
        //Math.floor(Math.random() * 2) + 1
        _this.shuffleArray(_this.optionOrder);
        console.log(_this.optionOrder, "optionorder");
        _this.questionCount = 0;//for counting the option order//for second set question
        _this.qOption = 0;//0//for counting the 2+2 question in one set

        _this.cubeGenerate = [2, 3, 4];//either 2 or 3 will be first for cube
        _this.shuffleArray(_this.cubeGenerate);
        console.log(_this.cubeGenerate, "cubeGenerate");

        _this.objectX = 150;
        _this.objectY = 300;

        _this.selectedBox1 = false;
        _this.selectedBox2 = false;
        _this.selectedBox3 = false;

        // Keep track of the number of cubes added
        _this.totalCubes = 0;

        _this.cbdLengthArray = [];
        _this.cbdBreadthArray = [];
        _this.cbdHeightArray = [];
        _this.totalVolumeArray = [];
        _this.cbeLengthArray = [];
        _this.totalVolumeArrayCube = [];

        _this.cubeGroupArrayB = [];
        _this.cubeGroupB = _this.add.group();

        _this.hint_flag = 0;
        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.ans4Grp2 = _this.add.group();

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'BG1');
        //** include the background file, navigation bar, stars, timer objects.

        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.state.start("grade8Geometry", true, false);
            // _this.state.start('GMM_03_G8Score');
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if (_this.Question_flag == 0) {
                    _this.stopAudio_QV();
                    // _this.pauseVoice();
                    // _this.Ask_Question1.play();
                    if (_this.languageSelected == "English")
                        _this.Ask_Question1 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_d1.mp3');
                    else if (_this.languageSelected == "Hindi") _this.Ask_Question1 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_d1.mp3');
                    else if (_this.languageSelected == "Kannada") _this.Ask_Question1 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_d1.mp3');
                    else if (_this.languageSelected == "Tamil") _this.Ask_Question1 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_d1.mp3');
                    else if (_this.languageSelected == "Odiya") _this.Ask_Question1 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_d1.mp3');
                    else if (_this.languageSelected == "Marathi") _this.Ask_Question1 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_d1.mp3');
                }
                if (_this.Question_flag == 1) {
                    _this.stopAudio_QV();
                    // _this.pauseVoice();
                    // _this.Ask_Question2.play();
                    if (_this.languageSelected == "English")
                        _this.Ask_Question2 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_a1.mp3');
                    else if (_this.languageSelected == "Hindi") _this.Ask_Question2 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_a1.mp3');
                    else if (_this.languageSelected == "Kannada") _this.Ask_Question2 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_a1.mp3');
                    else if (_this.languageSelected == "Marathi") _this.Ask_Question2 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_a1.mp3');
                    else if (_this.languageSelected == "Tamil") _this.Ask_Question2 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_a1.mp3');
                    else if (_this.languageSelected == "Odiya") _this.Ask_Question2 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_a1.mp3');

                }
                if (_this.Question_flag == 2) {
                    _this.stopAudio_QV();
                    // _this.pauseVoice();
                    // _this.Ask_Question3.play();
                    if (_this.languageSelected == "English")
                        _this.Ask_Question3 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_a4.mp3');
                    else if (_this.languageSelected == "Hindi") _this.Ask_Question3 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_a4.mp3');
                    else if (_this.languageSelected == "Kannada") _this.Ask_Question3 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_a4.mp3');
                    else if (_this.languageSelected == "Marathi") _this.Ask_Question3 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_a4.mp3');
                    else if (_this.languageSelected == "Tamil") _this.Ask_Question3 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_a4.mp3');
                    else if (_this.languageSelected == "Odiya") _this.Ask_Question3 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_a4.mp3');
                }
                if (_this.Question_flag == 3) {
                    _this.stopAudio_QV();
                    // _this.pauseVoice();
                    // _this.Ask_Question4.play();
                    // _this.Ask_Question4.addEventListener('ended', () => {
                    //     _this.Ask_Question8.play();
                    // });
                    if (_this.languageSelected == "English")
                        _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_a2.mp3');
                    else if (_this.languageSelected == "Hindi") _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_a2.mp3');
                    else if (_this.languageSelected == "Kannada") _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_a2.mp3');
                    else if (_this.languageSelected == "Marathi") _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_a2.mp3');
                    else if (_this.languageSelected == "Odiya") _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_a2.mp3');
                    else if (_this.languageSelected == "Tamil") _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_a2.mp3');
                }
                if (_this.Question_flag == 4) {
                    _this.stopAudio_QV();
                    // _this.pauseVoice();
                    // _this.Ask_Question5.play();
                    // _this.Ask_Question5.addEventListener('ended', () => {
                    //     _this.Ask_Question9.play();
                    // });
                    if (_this.languageSelected == "English")
                        _this.Ask_Question5 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_a5.mp3');
                    else if (_this.languageSelected == "Hindi") _this.Ask_Question5 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_a5.mp3');
                    else if (_this.languageSelected == "Kannada") _this.Ask_Question5 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_a5.mp3');
                    else if (_this.languageSelected == "Marathi") _this.Ask_Question5 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_a5.mp3');
                    else if (_this.languageSelected == "Odiya") _this.Ask_Question5 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_a5.mp3');
                    else if (_this.languageSelected == "Tamil") _this.Ask_Question5 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_a5.mp3');
                }
                if (_this.Question_flag == 5) {
                    _this.stopAudio_QV();
                    // _this.pauseVoice();
                    // _this.Ask_Question6.play();
                    if (_this.languageSelected == "English")
                        _this.Ask_Question6 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_a3.mp3');
                    else if (_this.languageSelected == "Hindi") _this.Ask_Question6 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_a3.mp3');
                    else if (_this.languageSelected == "Kannada") _this.Ask_Question6 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_a3.mp3');
                    else if (_this.languageSelected == "Tamil") _this.Ask_Question6 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_a3.mp3');
                    else if (_this.languageSelected == "Odiya") _this.Ask_Question6 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_a3.mp3');
                    else if (_this.languageSelected == "Marathi") _this.Ask_Question6 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_a3.mp3');
                }
                if (_this.Question_flag == 6) {
                    _this.stopAudio_QV();
                    // _this.pauseVoice();
                    // _this.Ask_Question7.play();
                    if (_this.languageSelected == "English")
                        _this.Ask_Question7 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_a6.mp3');
                    else if (_this.languageSelected == "Hindi") _this.Ask_Question7 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_a6.mp3');
                    else if (_this.languageSelected == "Kannada") _this.Ask_Question7 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_a6.mp3');
                    else if (_this.languageSelected == "Marathi") _this.Ask_Question7 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_a6.mp3');
                    else if (_this.languageSelected == "Odiya") _this.Ask_Question7 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_a6.mp3');
                    else if (_this.languageSelected == "Tamil") _this.Ask_Question7 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_a6.mp3');
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
        // _this.hintBtn = _this.add.sprite(670, 6, 'bulb');
        // _this.hintBtn.scale.setTo(0.5, 0.6);
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
            //// console.log("inside hintbutton function");
            //* show the demo video
            _this.hintBtn.inputEnabled = false;
            _this.hintBtn.input.useHandCursor = false;
            _this.time.events.add(1, function () {
                //// console.log(_this.hintBtn.inputEnabled, "status of hintBtn");
                _this.ViewDemoVideo();
            });

        });

        _this.generateStarsForTheScene(6);

        //* include variables for use - objGroup (where egg objects can be added)
        _this.objGroup;
        _this.numGroup;

        _this.greenObjectArray = [];

        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);
    },

    playAudio: function (src) {

        // Pause and reset the currently playing audio
        if (currentlyPlayingAudio) {
            currentlyPlayingAudio.pause();
            currentlyPlayingAudio.currentTime = 0;
        }

        var audio = new Audio();
        var source = document.createElement('source');
        source.setAttribute('src', src);
        audio.appendChild(source);
        audio.play();

        // Set the currently playing audio
        currentlyPlayingAudio = audio;

        // Remove the reference to the audio element when it finishes playing
        audio.addEventListener('ended', function () {
            currentlyPlayingAudio = null;
        });

        return audio;
    },
    // Function to stop the currently playing audio
    stopAudio_QV: function () {
        console.log("currently playing audio stop");
        if (currentlyPlayingAudio) {
            currentlyPlayingAudio.pause();
            currentlyPlayingAudio.currentTime = 0;
            currentlyPlayingAudio = null;
        }
    },

    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/GMM-03-G8/" + _this.languageSelected + "/" + src + ".mp3");
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
        //timer.setText(minutes + ':'+ seconds );
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

    getQuestion: function (target) {
        _this.color_flag = 0;
        _this.tick1Flag = false;
        _this.numberpadFlag = false;

        _this.completed = 0;
        _this.current = 0;
        _this.choice = _this.arr[_this.starting++];

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

        _this.Question_flag = 0;

        //for api
        //* hintbtn will be true when the game is playing
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1; //for api

        _this.Initial_randomizing();


        console.log("inside get question.....");
        // _this.hintBtn.inputEnabled = true;
        // _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;
    },

    stopVoice: function () {
        _this.Ask_Question1.pause();
        _this.Ask_Question1 = null;

        _this.Ask_Question2.pause();
        _this.Ask_Question2 = null;

        _this.Ask_Question3.pause();
        _this.Ask_Question3 = null;

        _this.Ask_Question4.pause();
        _this.Ask_Question4 = null;

        _this.Ask_Question5.pause();
        _this.Ask_Question5 = null;

        _this.Ask_Question6.pause();
        _this.Ask_Question6 = null;

        _this.Ask_Question7.pause();
        _this.Ask_Question7 = null;

        // _this.Ask_Question8.pause();
        // _this.Ask_Question8 = null;

        // _this.Ask_Question9.pause();
        // _this.Ask_Question9 = null;


        if (_this.celebrationSound) {
            if (_this.celebrationSound.isPlaying) {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }

    },
    pauseVoice: function () {
        if (_this.Ask_Question1) {
            _this.Ask_Question1.pause();
            _this.Ask_Question1.currentTime = 0.0;
        }
        if (_this.Ask_Question2) {
            _this.Ask_Question2.pause();
            _this.Ask_Question2.currentTime = 0.0;
        }
        if (_this.Ask_Question3) {
            _this.Ask_Question3.pause();
            _this.Ask_Question3.currentTime = 0.0;
        }
        if (_this.Ask_Question4) {
            _this.Ask_Question4.pause();
            _this.Ask_Question4.currentTime = 0.0;
        }
        if (_this.Ask_Question5) {
            _this.Ask_Question5.pause();
            _this.Ask_Question5.currentTime = 0.0;
        }
        if (_this.Ask_Question6) {
            _this.Ask_Question6.pause();
            _this.Ask_Question6.currentTime = 0.0;
        }
        if (_this.Ask_Question7) {
            _this.Ask_Question7.pause();
            _this.Ask_Question7.currentTime = 0.0;
        }
        // if (_this.Ask_Question8) {
        //     _this.Ask_Question8.pause();
        //     _this.Ask_Question8.currentTime = 0.0;
        // }
        // if (_this.Ask_Question9) {
        //     _this.Ask_Question9.pause();
        //     _this.Ask_Question9.currentTime = 0.0;
        // }
    },
    //Shuffling the array
    shuffleArray: function (array) {
        let len = array.length,
            currentIndex;
        for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
            let randIndex = Math.floor(Math.random() * (currentIndex + 1));
            var temp = array[currentIndex];
            array[currentIndex] = array[randIndex];
            array[randIndex] = temp;
        }

    },


    Initial_randomizing: function () {
        console.log("Initial_randomizing");

        /*       
         Volume of a cube is l^3
        Volume of a cuboid is l x b x h    
        the question will ask like 2 question and one equation question. so total 3 star.
        */


        //...............for cube and cuboid randomising...........................//
        //only length
        // _this.cubeGenerate = Math.floor(Math.random() * (4 - 2)) + 2;//2 to 3
        for (let j = 0; j < 2; j++) {
            if (_this.optionOrder[j] == 1) {

                for (var i = 0; i < 2; i++) {
                    if (_this.cubeGenerate[i] == 2) {
                        _this.totalVolumeCube = 8;//2*2*2
                        _this.lengthOfCube = 2;
                    }
                    if (_this.cubeGenerate[i] == 3) {
                        _this.totalVolumeCube = 27;//3*3*3
                        _this.lengthOfCube = 3;
                    }
                    if (_this.cubeGenerate[i] == 4) {
                        _this.totalVolumeCube = 64;//4*4*4
                        _this.lengthOfCube = 4;
                    }
                    _this.cbeLengthArray.push(_this.lengthOfCube);
                    _this.totalVolumeArrayCube.push(_this.totalVolumeCube);

                }

                console.log(_this.totalVolumeArrayCube, "totalVolumeArrayCube");
                console.log(_this.cbeLengthArray, "cbeLengthArray");
            }

            //.................................for cuboid...............................//
            //l,b,h we have to find. and we have to store two questions at a time
            if (_this.optionOrder[j] == 2) {
                for (var i = 0; i < 2; i++) {
                    _this.lengthOfCuboid = Math.floor(Math.random() * (7 - 2)) + 2;
                    _this.breadthOfCuboid = Math.floor(Math.random() * (7 - 2)) + 2;
                    _this.heightOfCuboid = Math.floor(Math.random() * (6 - 2)) + 2;

                    _this.totalVolume = _this.lengthOfCuboid * _this.breadthOfCuboid * _this.heightOfCuboid;

                    while (_this.totalVolume > 42 || (_this.totalVolumeArray.includes(_this.totalVolume)) || ((_this.lengthOfCuboid == _this.breadthOfCuboid) && (_this.lengthOfCuboid == _this.heightOfCuboid))) {
                        // || _this.cbdLengthArray.includes(_this.lengthOfCuboid)|| ((_this.lengthOfCuboid == _this.breadthOfCuboid) && (_this.lengthOfCuboid == _this.heightOfCuboid))
                        console.log("more than 42");
                        _this.lengthOfCuboid = Math.floor(Math.random() * (7 - 2)) + 2;
                        _this.breadthOfCuboid = Math.floor(Math.random() * (7 - 2)) + 2;
                        _this.heightOfCuboid = Math.floor(Math.random() * (6 - 2)) + 2;

                        _this.totalVolume = _this.lengthOfCuboid * _this.breadthOfCuboid * _this.heightOfCuboid
                    }

                    _this.cbdLengthArray.push(_this.lengthOfCuboid);
                    _this.cbdBreadthArray.push(_this.breadthOfCuboid);
                    _this.cbdHeightArray.push(_this.heightOfCuboid);
                    _this.totalVolumeArray.push(_this.totalVolume);

                }

            }
        }
        console.log(_this.totalVolumeArray, "totalVolumeArray");
        console.log(_this.cbdLengthArray, "cbdLengthArray");
        console.log(_this.cbdBreadthArray, "cbdBreadthArray");
        console.log(_this.cbdHeightArray, "cbdHeightArray");
        //.............................................................//

        if (_this.count1 == 0)
            _this.firstScreenAnim();
        else
            _this.initialScreenLoad();

        // _this.equationDisplayScreen();//for test
    },
    //for displaying unit cube with audio
    firstScreenAnim: function () {
        _this.hintBtn.inputEnabled = false;
        _this.hintBtn.input.useHandCursor = false;
        _this.speakerbtn.inputEnabled = false;
        if (_this.count1 == 0) {
            // _this.Ask_Question1.play();
            //  _this.Question_flag = 1;
            if (_this.languageSelected == "English")
                _this.Ask_Question1 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_d1.mp3');
            else if (_this.languageSelected == "Hindi") _this.Ask_Question1 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_d1.mp3');
            else if (_this.languageSelected == "Kannada") _this.Ask_Question1 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_d1.mp3');
            else if (_this.languageSelected == "Tamil") _this.Ask_Question1 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_d1.mp3');
            else if (_this.languageSelected == "Odiya") _this.Ask_Question1 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_d1.mp3');
            else if (_this.languageSelected == "Marathi") _this.Ask_Question1 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_d1.mp3');
        }
        _this.Question_flag = 0;

        _this.bigCube = _this.add.image(320, 120, 'pink_box_big');

        _this.line_1 = _this.add.image(310, 80, 'orenge_line_1');
        _this.addL1 = _this.add.text(360, 100, "1");
        _this.addL1.fill = '#FF0000';
        _this.line_2 = _this.add.image(285, 220, 'orenge_line_2');
        _this.addL2 = _this.add.text(270, 310, "1");
        _this.addL2.fill = '#FF0000';
        _this.line_3 = _this.add.image(320, 450, 'orenge_line_3');
        _this.addL3 = _this.add.text(420, 470, "1");
        _this.addL3.fill = '#FF0000';

        switch (_this.languageSelected) {
            case 'English': _this.time.events.add(5000, function () {
                _this.initialScreenLoad();
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
                _this.speakerbtn.inputEnabled = true;
                _this.bigCube.destroy();
                _this.line_1.destroy();
                _this.line_2.destroy();
                _this.line_3.destroy();
                _this.addL1.destroy();
                _this.addL2.destroy();
                _this.addL3.destroy();
            });
                break;
            case 'Hindi': _this.time.events.add(7000, function () {
                _this.initialScreenLoad();
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
                _this.speakerbtn.inputEnabled = true;
                _this.bigCube.destroy();
                _this.line_1.destroy();
                _this.line_2.destroy();
                _this.line_3.destroy();
                _this.addL1.destroy();
                _this.addL2.destroy();
                _this.addL3.destroy();
            });
                break;
            case 'Kannada': _this.time.events.add(8000, function () {
                _this.initialScreenLoad();
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
                _this.speakerbtn.inputEnabled = true;
                _this.bigCube.destroy();
                _this.line_1.destroy();
                _this.line_2.destroy();
                _this.line_3.destroy();
                _this.addL1.destroy();
                _this.addL2.destroy();
                _this.addL3.destroy();
            });
                break;

            case 'Marathi': _this.time.events.add(9000, function () {
                _this.initialScreenLoad();
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
                _this.speakerbtn.inputEnabled = true;
                _this.bigCube.destroy();
                _this.line_1.destroy();
                _this.line_2.destroy();
                _this.line_3.destroy();
                _this.addL1.destroy();
                _this.addL2.destroy();
                _this.addL3.destroy();
            });
                break;

            case 'Tamil': _this.time.events.add(9000, function () {
                _this.initialScreenLoad();
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
                _this.speakerbtn.inputEnabled = true;
                _this.bigCube.destroy();
                _this.line_1.destroy();
                _this.line_2.destroy();
                _this.line_3.destroy();
                _this.addL1.destroy();
                _this.addL2.destroy();
                _this.addL3.destroy();
            });
                break;
            case 'Odiya': _this.time.events.add(8000, function () {
                _this.initialScreenLoad();
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
                _this.speakerbtn.inputEnabled = true;
                _this.bigCube.destroy();
                _this.line_1.destroy();
                _this.line_2.destroy();
                _this.line_3.destroy();
                _this.addL1.destroy();
                _this.addL2.destroy();
                _this.addL3.destroy();
            });
                break;
        }


    },
    //initial screen for both cube and cuboid
    initialScreenLoad: function () {
        //for api
        //edited for baseurl apk
        _this.sceneCount++;
        _this.noofAttempts = 0;
        //....

        _this.openSound.play();
        _this.panel_1 = _this.add.image(40, 60, 'panle_1');

        _this.tick = _this.add.sprite(875, 460, 'TickBtn');
        // _this.tick.scale.setTo(0.9, 0.9);
        _this.tick.frame = 1;
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickEvaluationLength);
        _this.panel_2 = _this.add.image(40, 280, 'panle_2');
        _this.cubeBlock = _this.add.sprite(20, 20, 'btn_1');

        _this.eraser = _this.add.sprite(20, 90, 'btn_2');
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;

        _this.panel_2.addChild(_this.cubeBlock);
        _this.panel_2.addChild(_this.eraser);

        _this.cubeBlock.inputEnabled = true;
        _this.cubeBlock.input.useHandCursor = true;
        _this.cubeBlock.frame = 0;
        _this.cubeBlock.events.onInputDown.add(_this.cubeLength);//_this.cubeLength//cubeBreadth//cubeHeight
        // Add a listener for the mouseover event
        _this.cubeBlock.events.onInputOver.add(_this.cubeBlockMouseOver, _this);
        // Add a listener for the mouseout event
        _this.cubeBlock.events.onInputOut.add(_this.cubeBlockMouseOut, _this);

        _this.eraser.events.onInputDown.add(_this.eraserLength);//_this.cubeLength//cubeBreadth//cubeHeight
        // Add a listener for the mouseover event
        _this.eraser.events.onInputOver.add(_this.cubeBlockMouseOver, _this);
        // Add a listener for the mouseout event
        _this.eraser.events.onInputOut.add(_this.cubeBlockMouseOut, _this);

        _this.LValueArray_y = [100, 175];

        //.....................for cube........................//
        if (_this.optionOrder[_this.questionCount] == 1) {
            _this.stopAudio_QV();
            // _this.pauseVoice();
            if (_this.count1 == 0) {
                // _this.Ask_Question3.play();
                // _this.Ask_Question3 = _this.playAudio(window.baseUrl +'questionSounds/GMM-03-G8/ENG/GMM_03_G8_a4.mp3');
                //  _this.Question_flag = 1;
                if (_this.languageSelected == "English")
                    _this.Ask_Question3 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_a4.mp3');
                else if (_this.languageSelected == "Hindi") _this.Ask_Question3 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_a4.mp3');
                else if (_this.languageSelected == "Kannada") _this.Ask_Question3 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_a4.mp3');
                else if (_this.languageSelected == "Marathi") _this.Ask_Question3 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_a4.mp3');
                else if (_this.languageSelected == "Tamil") _this.Ask_Question3 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_a4.mp3');
                else if (_this.languageSelected == "Odiya") _this.Ask_Question3 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_a4.mp3');

            }
            _this.Question_flag = 2;
            // _this.qOption
            // _this.cbeLengthArray[_this.qOption]
            if (_this.qOption == 0) {
                _this.box_1 = _this.add.sprite(790, 20, 'all_box');
                _this.box_1.frame = 0;
            }
            else {
                _this.box_1 = _this.add.sprite(790, 20, 'all_box');
                _this.box_1_1 = _this.add.sprite(790, 100, 'all_box');
                _this.panel_1.addChild(_this.box_1_1);
                _this.box_1.frame = 0;
            }
            _this.addL = _this.add.text(35, 25, "L");
            _this.applyingStyleRed(_this.addL);
            _this.box_1.addChild(_this.addL);

            for (let i = 0; i <= _this.qOption; i++) {
                _this.addLValue = _this.add.text(35, _this.LValueArray_y[i], _this.cbeLengthArray[i]);
                _this.applyingStyle2(_this.addLValue);
                _this.box_1.addChild(_this.addLValue);
            }

            if (_this.count1 == 0) {
                let hand = _this.add.image(880, 215, 'hand');
                hand.scale.setTo(0.7);
                _this.time.events.add(500, function () {
                    _this.handTween = _this.add.tween(hand);
                    _this.handTween.to({ x: 70, y: 320 }, 3000, 'Linear', true, 0);
                    _this.handTween.onComplete.add(function () {
                        _this.clickSound.play();
                        _this.cubeBlock.frame = 1;
                        _this.time.events.add(500, function () {
                            hand.destroy();
                            _this.cubeBlock.frame = 0;
                        });
                    });
                });
            }

            //for second question new box and want to display both the values 2,3

        }
        //.......................................................//

        //.....................for cuboid........................//
        if (_this.optionOrder[_this.questionCount] == 2) {
            _this.stopAudio_QV();
            // _this.pauseVoice();
            if (_this.count1 == 0) {
                // _this.Ask_Question2.play();
                //  _this.Question_flag = 1;
                if (_this.languageSelected == "English")
                    _this.Ask_Question2 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_a1.mp3');
                else if (_this.languageSelected == "Hindi") _this.Ask_Question2 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_a1.mp3');
                else if (_this.languageSelected == "Kannada") _this.Ask_Question2 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_a1.mp3');
                else if (_this.languageSelected == "Marathi") _this.Ask_Question2 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_a1.mp3');
                else if (_this.languageSelected == "Tamil") _this.Ask_Question2 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_a1.mp3');
                else if (_this.languageSelected == "Odiya") _this.Ask_Question2 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_a1.mp3');

            }
            _this.Question_flag = 1;

            _this.box_1 = _this.add.sprite(635, 20, 'all_box');
            // _this.box_1.frame = 4;
            _this.addL = _this.add.text(35, 25, "L");
            _this.applyingStyleRed(_this.addL);
            _this.box_1.addChild(_this.addL);
            _this.addB = _this.add.text(110, 25, "B");
            _this.applyingStyleRed(_this.addB);
            _this.box_1.addChild(_this.addB);
            _this.addH = _this.add.text(185, 25, "H");
            _this.applyingStyleRed(_this.addH);
            _this.box_1.addChild(_this.addH);

            if (_this.count1 == 0) {
                let hand = _this.add.image(720, 215, 'hand');
                hand.scale.setTo(0.7);
                _this.time.events.add(500, function () {
                    _this.handTween = _this.add.tween(hand);
                    _this.handTween.to({ x: 70, y: 320 }, 3000, 'Linear', true, 0);
                    _this.handTween.onComplete.add(function () {
                        _this.clickSound.play();
                        _this.cubeBlock.frame = 1;
                        _this.time.events.add(500, function () {
                            hand.destroy();
                            _this.cubeBlock.frame = 0;
                        });
                    });
                });
            }

            _this.LValueArray_y = [100, 175];

            if (_this.qOption == 1) {
                _this.box_1.frame = 5;
                addBValue = _this.add.text(110, _this.LValueArray_y[0], _this.cbdBreadthArray[0]);
                _this.applyingStyle2(addBValue);
                _this.box_1.addChild(addBValue);
                addHValue = _this.add.text(185, _this.LValueArray_y[0], _this.cbdHeightArray[0]);
                _this.applyingStyle2(addHValue);
                _this.box_1.addChild(addHValue);

            } else {
                _this.box_1.frame = 4;
            }

            for (let i = 0; i <= _this.qOption; i++) {
                console.log("1.................")
                addLValue = _this.add.text(35, _this.LValueArray_y[i], _this.cbdLengthArray[i]);
                _this.applyingStyle2(addLValue);
                _this.box_1.addChild(addLValue);
            }

        }
        _this.panel_1.addChild(_this.box_1);
        _this.cubeGroupB = _this.add.group();
        _this.cubeGroupL = _this.add.group();
        _this.cubeGroupH = _this.add.group();

        _this.objectX = 150;
        _this.objectY = 300;
        //.......................................................//

        // _this.cuboidBuilding(_this.cbdLengthArray[_this.qOption], _this.cbdBreadthArray[_this.qOption], _this.cbdHeightArray[_this.qOption]);
    },
    cubeBlockMouseOver: function (target) {
        // console.log("Mouse pointer is over the button!");
        target.frame = 1;
    },
    cubeBlockMouseOut: function (target) {
        // console.log("Mouse pointer is out the button!");
        target.frame = 0;
    },
    eraserLength: function () {
        _this.clickSound.play();
        if (_this.cubeGroupL.length > 0) {
            _this.cubeGroupL.getChildAt(_this.cubeGroupL.length - 1).destroy();
            _this.objectX -= 34;
        }
        if (_this.cubeGroupL.length == 0) {
            // _this.wrongSound.play();
            _this.objectX = 150;
            _this.objectY = 300;
        }
    },
    eraserBreadth: function () {
        _this.clickSound.play();
        if (_this.cubeGroupB.length > 0) {
            _this.cubeGroupB.getChildAt(0).destroy();
            _this.objectX -= 17;
            _this.objectY += 16;
        }
        if (_this.cubeGroupB.length == 0) {
            // _this.wrongSound.play();
            _this.objectX = _this.objXB;
            _this.objectY = _this.objYB;
        }
    },
    eraserHeight: function () {
        _this.clickSound.play();
        if (_this.cubeGroupH.length > 0) {
            _this.cubeGroupH.getChildAt(_this.cubeGroupH.length - 1).destroy();
            _this.objectY += 34;
        }
        if (_this.cubeGroupH.length == 0) {
            _this.objectX = _this.objX - 34;
            _this.objectY = _this.objy - 34;
        }
    },

    cuboidBuilding: function (length, breadth, height) {

        //build by length add x+33 
        //build by breadth add x+17  y-15
        //build by height add x-33
        //x = ===>150,183,183.....
        //y = ===>300,300,268.....
        // cube_1 = _this.add.image(150, 300, 'pink_box_small');
        // cube_2 = _this.add.image(200, 285, 'pink_box_small');
        // cube_3 = _this.add.image(183, 300, 'pink_box_small');
        // cube_4 = _this.add.image(133, 285, 'pink_box_small');

        // _this.panel_1.addChild(cube_2);
        // _this.panel_1.addChild(cube_3);
        // _this.panel_1.addChild(cube_4);
        // _this.panel_1.addChild(cube_1);

        //................................................//
        // //for building line by line
        // // Create a group to hold the cube objects
        // var cubeGroup = _this.add.group();

        // var cubeSize = 30; // Size of each cube
        // var cubeHeight = 30; // Height of each cube

        // var numRows = _this.cbdBreadthArray[_this.qOption];
        // var numCols = _this.cbdLengthArray[_this.qOption];

        // var startX = 150; // Starting X position for the cubes
        // var startYFront = 300; // Starting Y position for the front row of cubes
        // var startZ = 280; // Starting Z position for the cubes in depth direction (back row)

        // // Function to build the 3D object using unit cubes
        // function build3DObject() {
        //     for (var y = 0; y < numRows; y++) {
        //         for (var x = 0; x < numCols; x++) {
        //             for (var z = 0; z < cubeHeight; z++) {
        //                 // Calculate the position for the current cube
        //                 var posX = startX + (x * cubeSize);
        //                 var posY = startYFront + (y * cubeSize) + 15; // Adjusted to add 15 units to posY
        //                 var posZ = startZ + (z * cubeSize);

        //                 // Create a cube sprite at the calculated position
        //                 var cube = _this.add.sprite(posX, posY, 'pink_box_small');
        //                 cube.scale.setTo(cubeSize / cube.width); // Scale the sprite to the cube size

        //                 // Add the cube to the cubeGroup
        //                 cubeGroup.add(cube);
        //             }
        //         }
        //     }
        // }

        // build3DObject();
        //................................................//
        // _this.pinkBox = _this.add.image(133, 300, 'pink_box_small');
        // _this.pinkBox_2 = _this.add.image(167, 300, 'pink_box_small');
        // _this.pinkBox_3 = _this.add.image(201, 300, 'pink_box_small');
        // _this.pinkBox_4 = _this.add.image(150, 284, 'pink_box_small');//-16
        // _this.pinkBox_5 = _this.add.image(184, 284, 'pink_box_small');
        // _this.pinkBox_6 = _this.add.image(218, 284, 'pink_box_small');
        // _this.pinkBox_7 = _this.add.image(167, 268, 'pink_box_small');
        // _this.pinkBox_8 = _this.add.image(201, 268, 'pink_box_small');
        // _this.pinkBox_9 = _this.add.image(235, 268, 'pink_box_small');

        // //.................

        // _this.pinkBox_10 = _this.add.image(133, 266, 'pink_box_small');//-34
        // _this.pinkBox_11 = _this.add.image(167, 266, 'pink_box_small');
        // _this.pinkBox_12 = _this.add.image(201, 266, 'pink_box_small');
        // _this.pinkBox_13 = _this.add.image(150, 250, 'pink_box_small');
        // _this.pinkBox_14 = _this.add.image(184, 250, 'pink_box_small');
        // _this.pinkBox_15 = _this.add.image(218, 250, 'pink_box_small');
        // _this.pinkBox_16 = _this.add.image(167, 234, 'pink_box_small');
        // _this.pinkBox_17 = _this.add.image(201, 234, 'pink_box_small');
        // _this.pinkBox_18 = _this.add.image(235, 234, 'pink_box_small');

        // _this.panel_1.addChild(_this.pinkBox_7);
        // _this.panel_1.addChild(_this.pinkBox_8);
        // _this.panel_1.addChild(_this.pinkBox_9);
        // _this.panel_1.addChild(_this.pinkBox_4);
        // _this.panel_1.addChild(_this.pinkBox_5);
        // _this.panel_1.addChild(_this.pinkBox_6);
        // _this.panel_1.addChild(_this.pinkBox);
        // _this.panel_1.addChild(_this.pinkBox_2);
        // _this.panel_1.addChild(_this.pinkBox_3);

        // _this.panel_1.addChild(_this.pinkBox_16);
        // _this.panel_1.addChild(_this.pinkBox_17);
        // _this.panel_1.addChild(_this.pinkBox_18);
        // _this.panel_1.addChild(_this.pinkBox_13);
        // _this.panel_1.addChild(_this.pinkBox_14);
        // _this.panel_1.addChild(_this.pinkBox_15);
        // _this.panel_1.addChild(_this.pinkBox_10);
        // _this.panel_1.addChild(_this.pinkBox_11);
        // _this.panel_1.addChild(_this.pinkBox_12);

        // _this.Xx = 235;
        // _this.Yy = 268;

        // for (let h = 0; h < height; h++) {
        //     for (let j = 0; j < breadth; j++) {
        //         for (let i = 0; i < length; i++) {//length
        //             pinkBox = _this.add.image(_this.Xx, _this.Yy, 'pink_box_small');
        //             _this.panel_1.addChild(pinkBox);
        //             _this.Xx += 34;
        //         }
        //         _this.Yy += 16;
        //         _this.Xx -= 34 * (length + 0.5);
        //     }
        //     console.log(_this.Yy, "_this.Yy");
        //     _this.Xx = 235;
        //     _this.Yy -= 34;

        // }

        // _this.Xx1 = 235;
        // _this.Yy1 = 234;//-34
        // for (let m = 0; m < breadth; m++) {//breadth         
        //     for (let n = 0; n < length; n++) {//length
        //         pinkBox = _this.add.image(_this.Xx1, _this.Yy1, 'pink_box_small');
        //         _this.panel_1.addChild(pinkBox);
        //         _this.Xx1 += 34;
        //     }
        //     _this.Yy1 += 16;
        //     _this.Xx1 -= 34 * (3 + 0.5);
        // }

        // Assuming you have already initialized Phaser and _this refers to the current scene.

        _this.Xx = 235;
        _this.Yy = 268;
        const spacingX = 34; // Define the spacing between cubes in the x-axis
        const spacingY = 16; // Define the spacing between cubes in the y-axis


        for (let h = 0; h < height; h++) {
            for (let j = 0; j < breadth; j++) {
                for (let i = 0; i < length; i++) {
                    pinkBox = _this.add.image(_this.Xx, _this.Yy, 'pink_box_small');
                    _this.panel_1.addChild(pinkBox);
                    _this.Xx += spacingX;
                }
                _this.Xx = 34 * (length + 0.5); // Reset the Xx for the next row of cubes
                _this.Yy += 16; // Move to the next row
            }
            _this.Xx = 235; // Reset the Xx for each new level of cubes
            _this.Yy = 268 + (spacingY * 0.5 * (breadth - 1)) + (spacingY * h); // Move to the next level of cubes
        }



    },
    //building the length for cuboid and cube
    cubeLength: function () {
        // _this.cubeBlock.frame = 1;
        console.log("build length");
        _this.tileSound.play();
        if (_this.objectX > 524) {
            _this.wrongSound.play();
            return;
        } else {
            _this.pinkBox = _this.add.image(_this.objectX, _this.objectY, 'pink_box_small');
            _this.cubeGroupL.addChild(_this.pinkBox);
            _this.panel_1.addChild(_this.cubeGroupL);
            _this.objectX += 34;

        }

    },
    //building the breadth for cuboid
    cubeBreadth: function () {
        // _this.cubeBlock.frame = 1;
        _this.tileSound.play();
        if (_this.objectY < 100) {
            _this.wrongSound.play();
            return;
        } else {

            if (_this.cubeGroupB.length == 0) {
                _this.pinkBox = _this.add.image(_this.objectX, _this.objectY, 'pink_box_small');
                _this.pinkBox.anchor.setTo(0.5);
                _this.pinkBox.yDepth = _this.objectY;
                _this.cubeGroupB.addChild(_this.pinkBox);
                _this.objectX += 17;
                _this.objectY -= 16;
            }
            _this.pinkBox = _this.add.image(_this.objectX, _this.objectY, 'pink_box_small');
            _this.pinkBox.anchor.setTo(0.5);
            // Set the y-coordinate as the depth (used to determine the order of rendering)
            _this.pinkBox.yDepth = _this.objectY;
            console.log(_this.pinkBox.yDepth, "yDepth");

            _this.cubeGroupB.addChild(_this.pinkBox);
            // Sort the group based on the y-coordinate in ascending order
            _this.cubeGroupB.sort('yDepth', Phaser.Group.SORT_ASCENDING);

            _this.objectX += 17;
            _this.objectY -= 16;

            _this.panel_1.addChild(_this.cubeGroupB);

        }

    },
    //building the height for cuboid
    cubeHeight: function () {
        // _this.cubeBlock.frame = 1;
        _this.tileSound.play();
        if (_this.objectY < 28) {
            _this.wrongSound.play();
            return;
        } else {
            _this.pinkBox = _this.add.image(_this.objectX, _this.objectY, 'pink_box_small');
            _this.cubeGroupH.addChild(_this.pinkBox);
            _this.panel_1.addChild(_this.cubeGroupH);
            _this.objectY -= 34;
        }
    },

    //validation for length for cube and cuboid
    tickEvaluationLength: function () {
        //for cuboid
        if (_this.optionOrder[_this.questionCount] == 2) {
            if (_this.cubeGroupL.length == _this.cbdLengthArray[_this.qOption]) {
                _this.counterCelebrationSound.play();
                _this.cubeBlock.frame = 0;
                _this.cubeBlock.events.onInputDown.removeAll();
                _this.eraser.events.onInputDown.removeAll();
                _this.cubeBlock.events.onInputDown.add(_this.cubeBreadth);//_this.cubeLength//cubeBreadth//cubeHeight
                _this.eraser.events.onInputDown.add(_this.eraserBreadth);//_this.cubeLength//cubeBreadth//cubeHeight

                // Add a listener for the mouseover event
                _this.cubeBlock.events.onInputOver.add(_this.cubeBlockMouseOver, _this);
                // Add a listener for the mouseout event
                _this.cubeBlock.events.onInputOut.add(_this.cubeBlockMouseOut, _this);
                if (_this.qOption == 1) {
                    addBValue = _this.add.text(110, _this.LValueArray_y[1], _this.cbdBreadthArray[1]);
                    _this.applyingStyle2(addBValue);
                    _this.box_1.addChild(addBValue);
                }
                else {
                    addBValue = _this.add.text(110, _this.LValueArray_y[0], _this.cbdBreadthArray[0]);
                    _this.applyingStyle2(addBValue);
                    _this.box_1.addChild(addBValue);
                }

                _this.tick.events.onInputDown.removeAll();
                _this.tick.events.onInputDown.add(_this.tickEvaluationBreadth);
                _this.objX = _this.objectX;
                _this.objy = _this.objectY;
                // _this.pinkBox.yDepth = _this.objectY;
                _this.objectX -= 8;
                _this.objectY += 25;
                _this.objXB = _this.objectX;
                _this.objYB = _this.objectY;

                // _this.cubeLB.addChild(_this.cubeGroupL.length - 1);
            }
            else {
                _this.wrongSound.play();
                _this.cubeGroupL.destroy();
                _this.cubeGroupL = _this.add.group();
                _this.objectX = 150;
                _this.objectY = 300;
            }
        }
        //for cube
        if (_this.optionOrder[_this.questionCount] == 1) {
            if (_this.cubeGroupL.length == _this.cbeLengthArray[_this.qOption]) {
                _this.counterCelebrationSound.play();
                _this.cubeBlock.events.onInputDown.removeAll();
                _this.eraser.events.onInputDown.removeAll();
                _this.tick.events.onInputDown.removeAll();
                _this.cubeBlock.events.onInputOver.removeAll();
                _this.cubeBlock.events.onInputOut.removeAll();
                _this.eraser.events.onInputOver.removeAll();
                _this.eraser.events.onInputOut.removeAll();
                _this.cubeBlock.frame = 0;

                _this.cubeGroup2 = _this.add.group();
                var numRows = _this.cbeLengthArray[_this.qOption];
                var numCol = _this.cbeLengthArray[_this.qOption];
                var numHght = _this.cbeLengthArray[_this.qOption];

                var startX = 150;//150 + (16 * (numRows));
                var startYFront = 300;//300 - (16 * (numCol));

                _this.tapSound.play();
                for (let h = 0; h < numHght; h++) {
                    for (let y = 0; y < numRows; y++) {
                        for (let x = 0; x < numCol; x++) {
                            var cubeFront = _this.add.sprite(startX, startYFront, 'pink_box_small');
                            _this.cubeGroup2.add(cubeFront);
                            startX += 34;
                        }
                        startX -= 34 * (numCol + 0.5);//120  34 * numCol
                        startYFront += 16;
                    }
                    startX = 150;
                    startYFront = 300 - (34 * (h + 1));
                }

                _this.cubeGroup2.x = 17 * (numRows - 1);
                _this.cubeGroup2.y = -16 * (numRows - 1);

                _this.panel_1.addChild(_this.cubeGroup2);

                _this.time.events.add(1500, function () {
                    _this.tick.destroy();
                    _this.box_1.destroy()
                    _this.panel_1.destroy();
                    _this.panel_2.destroy();
                    _this.cubeGroup2.destroy();
                    _this.secondScreenCube();
                });

            }
            else {
                _this.wrongSound.play();
                _this.cubeGroupL.destroy();
                _this.cubeGroupL = _this.add.group();
                _this.objectX = 150;
                _this.objectY = 300;
            }
        }
    },
    //validation for breadth for cuboid
    tickEvaluationBreadth: function () {
        if (_this.cubeGroupB.length == _this.cbdBreadthArray[_this.qOption]) {
            _this.counterCelebrationSound.play();
            _this.cubeBlock.events.onInputDown.removeAll();
            _this.eraser.events.onInputDown.removeAll();

            _this.cubeBlock.frame = 0;

            _this.tick.events.onInputDown.removeAll();

            _this.cubeGroupB.alpha = 0;
            _this.cubeGroupL.alpha = 0;

            _this.cubeGroup = _this.add.group();
            var numRows = _this.cbdBreadthArray[_this.qOption];
            var numCol = _this.cbdLengthArray[_this.qOption];

            var startX = 150;
            var startYFront = 300;
            _this.tapSound.play();
            for (let y = 0; y < numRows; y++) {
                for (let x = 0; x < numCol; x++) {
                    var cubeFront = _this.add.sprite(startX, startYFront, 'pink_box_small');
                    _this.cubeGroup.add(cubeFront);
                    startX += 34;
                }
                startX -= 34 * (numCol + 0.5);//120  34 * numCol
                startYFront += 16;
            }

            _this.cubeGroup.x = 17 * (numRows - 1);
            _this.cubeGroup.y = -16 * (numRows - 1);
            _this.panel_1.addChild(_this.cubeGroup);


            _this.time.events.add(500, function () {
                if (_this.qOption == 1) {
                    addHValue = _this.add.text(185, _this.LValueArray_y[1], _this.cbdHeightArray[1]);
                    _this.applyingStyle2(addHValue);
                    _this.box_1.addChild(addHValue);
                }
                else {
                    addHValue = _this.add.text(185, _this.LValueArray_y[0], _this.cbdHeightArray[0]);
                    _this.applyingStyle2(addHValue);
                    _this.box_1.addChild(addHValue);
                }
                _this.cubeBlock.events.onInputDown.add(_this.cubeHeight);//_this.cubeLength//cubeBreadth//cubeHeight
                _this.eraser.events.onInputDown.add(_this.eraserHeight);//_this.cubeLength//cubeBreadth//cubeHeight

                _this.tick.events.onInputDown.add(_this.tickEvaluationHeight);
                // Add a listener for the mouseover event
                _this.cubeBlock.events.onInputOver.add(_this.cubeBlockMouseOver, _this);
                // Add a listener for the mouseout event
                _this.cubeBlock.events.onInputOut.add(_this.cubeBlockMouseOut, _this);
                // for height building
                _this.objectX = _this.objX;
                _this.objectY = _this.objy;
                _this.objectY -= 34;
                _this.objectX -= 34;
            });

        }
        else {
            _this.wrongSound.play();
            _this.cubeGroupB.destroy();
            _this.cubeGroupB = _this.add.group();
            _this.objectX = _this.objXB;
            _this.objectY = _this.objYB;
        }
    },
    //validation for height for cuboid
    tickEvaluationHeight: function () {
        if (_this.cubeGroupH.length + 1 == _this.cbdHeightArray[_this.qOption]) {
            _this.counterCelebrationSound.play();
            _this.cubeBlock.events.onInputDown.removeAll();
            _this.eraser.events.onInputDown.removeAll();
            _this.tick.events.onInputDown.removeAll();
            _this.cubeBlock.events.onInputOver.removeAll();
            _this.cubeBlock.events.onInputOut.removeAll();
            _this.eraser.events.onInputOver.removeAll();
            _this.eraser.events.onInputOut.removeAll();
            _this.cubeBlock.frame = 0;

            _this.cubeGroup.alpha = 0;
            _this.cubeGroupH.alpha = 0;

            _this.cubeGroup2 = _this.add.group();
            var numRows = _this.cbdBreadthArray[_this.qOption];
            var numCol = _this.cbdLengthArray[_this.qOption];
            var numHght = _this.cbdHeightArray[_this.qOption];
            var cubeHeight = 30; // Height of each cube

            var startX = 150;//150 + (16 * (numRows));
            var startYFront = 300;//300 - (16 * (numCol));
            _this.tapSound.play();
            for (let h = 0; h < numHght; h++) {
                for (let y = 0; y < numRows; y++) {
                    for (let x = 0; x < numCol; x++) {
                        var cubeFront = _this.add.sprite(startX, startYFront, 'pink_box_small');
                        _this.cubeGroup2.add(cubeFront);
                        startX += 34;
                    }
                    startX -= 34 * (numCol + 0.5);//120  34 * numCol
                    startYFront += 16;
                }
                startX = 150;
                startYFront = 300 - (34 * (h + 1));
            }

            _this.cubeGroup2.x = 17 * (numRows - 1);
            _this.cubeGroup2.y = -16 * (numRows - 1);

            _this.panel_1.addChild(_this.cubeGroup2);

            _this.time.events.add(1500, function () {
                _this.tick.destroy();
                _this.box_1.destroy()
                _this.panel_1.destroy();
                _this.panel_2.destroy();
                _this.cubeGroup2.destroy();
                _this.secondScreen();
            });

        }
        else {
            _this.wrongSound.play();
            _this.cubeGroupH.destroy();
            _this.cubeGroupH = _this.add.group();
            _this.objectX = _this.objX - 34;
            _this.objectY = _this.objy - 34;
        }
    },

    //second screen for cuboid the screen with grid cubes
    secondScreen: function () {
        //for cuboid
        _this.stopAudio_QV();
        // _this.pauseVoice();
        if (_this.count1 == 0) {
            // _this.Ask_Question4.play();
            if (_this.languageSelected == "English")
                _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_a2.mp3');
            else if (_this.languageSelected == "Hindi") _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_a2.mp3');
            else if (_this.languageSelected == "Kannada") _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_a2.mp3');
            else if (_this.languageSelected == "Marathi") _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_a2.mp3');
            else if (_this.languageSelected == "Odiya") _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_a2.mp3');
            else if (_this.languageSelected == "Tamil") _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_a2.mp3');

        }
        // if (_this.count1 == 0) {
        //     _this.Ask_Question4.addEventListener('ended', () => {
        //         _this.Ask_Question8.play();
        //     });

        // }
        _this.Question_flag = 3;

        _this.openSound.play();
        _this.addNumberPad();
        _this.panel_2 = _this.add.image(40, 60, 'panle_1');
        if (_this.qOption == 0) {
            _this.box_2 = _this.add.sprite(535, 20, 'text_box_2');
        }
        else {
            _this.box_2 = _this.add.sprite(535, 20, 'text_box_4');
            addVValue = _this.add.text(275, _this.LValueArray_y[0], _this.totalVolumeArray[0]);
            _this.applyingStyle2(addVValue);
            _this.box_2.addChild(addVValue);
        }
        addL = _this.add.text(35, 25, "L");
        _this.applyingStyleRed(addL);
        _this.box_2.addChild(addL);
        addB = _this.add.text(110, 25, "B");
        _this.applyingStyleRed(addB);
        _this.box_2.addChild(addB);
        addH = _this.add.text(185, 25, "H");
        _this.applyingStyleRed(addH);
        _this.box_2.addChild(addH);
        addV = _this.add.text(280, 25, "V");
        _this.applyingStyleRed(addV);
        _this.box_2.addChild(addV);

        LValueArray_y = [100, 175];

        for (let i = 0; i <= _this.qOption; i++) {
            addLValue = _this.add.text(35, LValueArray_y[i], _this.cbdLengthArray[i]);
            _this.applyingStyle2(addLValue);
            _this.box_2.addChild(addLValue);
            addBValue = _this.add.text(110, LValueArray_y[i], _this.cbdBreadthArray[i]);
            _this.applyingStyle2(addBValue);
            _this.box_2.addChild(addBValue);
            addHValue = _this.add.text(185, LValueArray_y[i], _this.cbdHeightArray[i]);
            _this.applyingStyle2(addHValue);
            _this.box_2.addChild(addHValue);
        }
        if (_this.qOption == 1) {
            _this.AnswerBox = _this.add.sprite(255, LValueArray_y[1] - 5, 'text_box_5');
            _this.AnswerBox.inputEnabled = true;
            _this.AnswerBox.input.useHandCursor = true;
            _this.box_2.addChild(_this.AnswerBox);
        }
        else {
            _this.AnswerBox = _this.add.sprite(255, LValueArray_y[0] - 5, 'text_box_5');
            _this.AnswerBox.inputEnabled = true;
            _this.AnswerBox.input.useHandCursor = true;
            _this.box_2.addChild(_this.AnswerBox);
        }


        _this.panel_2.addChild(_this.box_2);

        _this.displayGridCube();

    },
    //displaying grid cubes for cuboid
    displayGridCube: function () {
        //for cuboid
        //.....................cube displaying part.................................//
        _this.objectX = 30;
        _this.objectY = 20;

        _this.cubeIndex = 0;
        // Maximum number of rows and columns in the grid
        var maxRows = 6;
        var maxColumns = 7;

        var numRows = Math.min(maxRows, Math.ceil(Math.sqrt(_this.totalVolumeArray[_this.qOption])));
        var numColumns = Math.ceil(_this.totalVolumeArray[_this.qOption] / numRows);
        console.log(numRows, "numRows...........");
        console.log(numColumns, "numColumns...........");

        // for (var i = 0; i < _this.totalVolumeArray[_this.qOption]; i++) {//_this.totalVolumeArray[_this.qOption]
        for (let r = 0; r < numRows; r++) {
            for (let l = 0; l < numColumns; l++) {
                if (_this.cubeIndex >= _this.totalVolumeArray[_this.qOption]) {
                    return;
                }
                else {
                    _this.cubeGrid = _this.add.sprite(_this.objectX, _this.objectY, 'pink_box_small');
                    _this.panel_2.addChild(_this.cubeGrid);
                    _this.objectX += 65;
                    _this.cubeIndex++;
                    // console.log(_this.cubeIndex,"cubes.................");
                }

            }
            console.log(_this.cubeIndex, "cubes.................");
            _this.objectY += 60;
            _this.objectX = 30;
        }
    },
    //second screen for cube the screen with grid cubes
    secondScreenCube: function () {
        _this.stopAudio_QV();
        // _this.pauseVoice();
        if (_this.count1 == 0) {
            // _this.Ask_Question5.play();
            if (_this.languageSelected == "English")
                _this.Ask_Question5 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_a5.mp3');
            else if (_this.languageSelected == "Hindi") _this.Ask_Question5 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_a5.mp3');
            else if (_this.languageSelected == "Kannada") _this.Ask_Question5 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_a5.mp3');
            else if (_this.languageSelected == "Marathi") _this.Ask_Question5 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_a5.mp3');
            else if (_this.languageSelected == "Odiya") _this.Ask_Question5 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_a5.mp3');
            else if (_this.languageSelected == "Tamil") _this.Ask_Question5 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_a5.mp3');
        }
        // if (_this.count1 == 0) {
        //     _this.Ask_Question5.addEventListener('ended', () => {
        //         _this.Ask_Question9.play();
        //     });

        // }
        _this.Question_flag = 4;

        _this.openSound.play();
        _this.addNumberPad();
        _this.LValueArray_y = [100, 175];
        _this.panel_2 = _this.add.image(40, 60, 'panle_1');
        if (_this.qOption == 0) {
            _this.box_2 = _this.add.sprite(710, 20, 'all_box');
            _this.box_2.frame = 1;
        }
        else {
            _this.box_2 = _this.add.sprite(710, 20, 'all_box');
            _this.box_2.frame = 2;
            if (_this.cubeGenerate[0] == 2)
                addVValue = _this.add.text(113, _this.LValueArray_y[0], _this.totalVolumeArrayCube[0]);
            else addVValue = _this.add.text(105, _this.LValueArray_y[0], _this.totalVolumeArrayCube[0]);
            _this.applyingStyle2(addVValue);
            _this.box_2.addChild(addVValue);
        }
        addL = _this.add.text(35, 25, "L");
        _this.applyingStyleRed(addL);
        _this.box_2.addChild(addL);
        addV = _this.add.text(110, 25, "V");
        _this.applyingStyleRed(addV);
        _this.box_2.addChild(addV);

        LValueArray_y = [100, 175];

        for (let i = 0; i <= _this.qOption; i++) {
            addLValue = _this.add.text(35, _this.LValueArray_y[i], _this.cbeLengthArray[i]);
            _this.applyingStyle2(addLValue);
            _this.box_2.addChild(addLValue);
        }
        if (_this.qOption == 1) _this.AnswerBox = _this.add.sprite(88, _this.LValueArray_y[1], 'text_box_5');
        else _this.AnswerBox = _this.add.sprite(88, _this.LValueArray_y[0], 'text_box_5');

        _this.AnswerBox.scale.setTo(0.9, 1);
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.input.useHandCursor = true;
        _this.box_2.addChild(_this.AnswerBox);

        _this.panel_2.addChild(_this.box_2);

        _this.displayGridCubeCB();

    },
    //displaying grid cubes for cube
    displayGridCubeCB: function () {
        //for cube
        //.....................cube displaying part.................................//
        _this.objectX = 30;
        _this.objectY = 20;

        _this.cubeIndex = 0;
        // Maximum number of rows and columns in the grid
        var maxRows = 6;
        var maxColumns = 11;

        // var numRows = Math.min(maxRows, Math.ceil(Math.sqrt(_this.totalVolumeArrayCube[_this.qOption])));
        // var numColumns = Math.ceil(_this.totalVolumeArrayCube[_this.qOption] / numRows);
        // numColumns = Math.min(maxColumns, numColumns);
        // console.log(numRows, "numRows...........");
        // console.log(numColumns, "numColumns...........");/

        if (_this.totalVolumeArrayCube[_this.qOption] === 27) {
            // return { rows: 3, columns: 9 };
            var numRows = 3;
            var numColumns = 9;
        } else if (_this.totalVolumeArrayCube[_this.qOption] === 8) {
            // return { rows: 4, columns: 2 };
            var numRows = 4;
            var numColumns = 2;
        } else {
            var numRows = Math.min(maxRows, Math.ceil(Math.sqrt(_this.totalVolumeArrayCube[_this.qOption])));
            var numColumns = Math.ceil(_this.totalVolumeArrayCube[_this.qOption] / numRows);
            numColumns = Math.min(maxColumns, numColumns);
        }

        for (let r = 0; r < numRows; r++) {
            for (let l = 0; l < numColumns; l++) {
                if (_this.cubeIndex >= _this.totalVolumeArrayCube[_this.qOption]) {
                    return;
                }
                else {
                    _this.cubeGrid = _this.add.sprite(_this.objectX, _this.objectY, 'pink_box_small');
                    _this.panel_2.addChild(_this.cubeGrid);
                    _this.objectX += 60;//65
                    _this.cubeIndex++;
                    // console.log(_this.cubeIndex,"cubes.................");
                }

            }
            console.log(_this.cubeIndex, "cubes.................");
            _this.objectY += 60;
            _this.objectX = 30;
        }

        ////max number of cube we can keep is 66.
        // for (let r = 0; r < 6; r++) {
        //     for (let l = 0; l < 11; l++) {
        //         _this.cubeGrid = _this.add.sprite(_this.objectX, _this.objectY, 'pink_box_small');
        //         _this.panel_2.addChild(_this.cubeGrid);
        //         _this.objectX += 60;//65
        //     }
        //     _this.objectY += 60;
        //     _this.objectX = 30;
        // }
    },

    //last screen equation displaying for both cube and cuboid
    equationDisplayScreen: function () {
        //for api
        //edited for baseurl apk
        _this.sceneCount++;
        _this.noofAttempts = 0;
        //....

        _this.openSound.play();

        _this.optionShuffle = [1, 2, 3];
        _this.shuffleArray(_this.optionShuffle);
        _this.boxPosition_x_b = [];
        _this.boxPosition_y_b = [];

        _this.tick = _this.add.sprite(555, 350, 'TickBtn');
        // _this.tick.scale.setTo(0.9, 0.9);
        _this.tick.frame = 1;
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickEvaluationEquation);

        _this.blue_box = _this.add.image(20, 80, 'blue_box');

        _this.text_box = _this.add.image(190, 140, 'text_box_8');
        _this.blue_box.addChild(_this.text_box);

        addV = _this.add.text(25, 25, "V");
        _this.applyingStyle2(addV);
        addV.fontSize = '25px';
        _this.text_box.addChild(addV);

        addeq = _this.add.text(40, 25, " = ");
        _this.applyingStyle2(addeq);
        addeq.fontSize = '25px';
        _this.text_box.addChild(addeq);

        addq = _this.add.text(70, 25, "?");
        _this.applyingStyleRed(addq);
        addq.fontSize = '25px';
        _this.text_box.addChild(addq);

        switch (_this.optionShuffle[0]) {
            case 1:
                _this.Box2_1 = _this.add.sprite(15, 270, 'text_box_6');
                _this.Box2_1.frame = 0;
                _this.Box2_1.inputEnabled = true;
                _this.Box2_1.input.useHandCursor = true;
                _this.Box2_1.events.onInputDown.add(_this.changeFrame1, _this);
                _this.blue_box.addChild(_this.Box2_1);
                break;
            case 2:
                _this.Box2_2 = _this.add.sprite(15, 270, 'text_box_7');
                _this.Box2_2.frame = 0;
                _this.Box2_2.inputEnabled = true;
                _this.Box2_2.input.useHandCursor = true;
                _this.Box2_2.events.onInputDown.add(_this.changeFrame2, _this);
                _this.blue_box.addChild(_this.Box2_2);
                break;
            case 3:
                _this.Box2_3 = _this.add.sprite(15, 270, 'text_box_6');
                _this.Box2_3.frame = 0;
                _this.Box2_3.inputEnabled = true;
                _this.Box2_3.input.useHandCursor = true;
                _this.Box2_3.events.onInputDown.add(_this.changeFrame3, _this);
                _this.blue_box.addChild(_this.Box2_3);
                break;
        }
        switch (_this.optionShuffle[1]) {
            case 1:
                if (_this.optionShuffle[0] == 2)
                    _this.Box2_1 = _this.add.sprite(200, 270, 'text_box_6');
                else _this.Box2_1 = _this.add.sprite(160, 270, 'text_box_6');
                _this.Box2_1.frame = 0;
                _this.Box2_1.inputEnabled = true;
                _this.Box2_1.input.useHandCursor = true;
                _this.Box2_1.events.onInputDown.add(_this.changeFrame1, _this);
                _this.blue_box.addChild(_this.Box2_1);
                break;
            case 2:
                _this.Box2_2 = _this.add.sprite(160, 270, 'text_box_7');
                _this.Box2_2.frame = 0;
                _this.Box2_2.inputEnabled = true;
                _this.Box2_2.input.useHandCursor = true;
                _this.Box2_2.events.onInputDown.add(_this.changeFrame2, _this);
                _this.blue_box.addChild(_this.Box2_2);
                break;
            case 3:
                if (_this.optionShuffle[0] == 2)
                    _this.Box2_3 = _this.add.sprite(200, 270, 'text_box_6');
                else _this.Box2_3 = _this.add.sprite(160, 270, 'text_box_6');
                _this.Box2_3.frame = 0;
                _this.Box2_3.inputEnabled = true;
                _this.Box2_3.input.useHandCursor = true;
                _this.Box2_3.events.onInputDown.add(_this.changeFrame3, _this);
                _this.blue_box.addChild(_this.Box2_3);
                break;
        }
        switch (_this.optionShuffle[2]) {
            case 1:
                _this.Box2_1 = _this.add.sprite(350, 270, 'text_box_6');
                _this.Box2_1.frame = 0;
                _this.Box2_1.inputEnabled = true;
                _this.Box2_1.input.useHandCursor = true;
                _this.Box2_1.events.onInputDown.add(_this.changeFrame1, _this);
                _this.blue_box.addChild(_this.Box2_1);
                break;
            case 2:
                _this.Box2_2 = _this.add.sprite(310, 270, 'text_box_7');
                _this.Box2_2.frame = 0;
                _this.Box2_2.inputEnabled = true;
                _this.Box2_2.input.useHandCursor = true;
                _this.Box2_2.events.onInputDown.add(_this.changeFrame2, _this);
                _this.blue_box.addChild(_this.Box2_2);
                break;
            case 3:
                _this.Box2_3 = _this.add.sprite(350, 270, 'text_box_6');
                _this.Box2_3.frame = 0;
                _this.Box2_3.inputEnabled = true;
                _this.Box2_3.input.useHandCursor = true;
                _this.Box2_3.events.onInputDown.add(_this.changeFrame3, _this);
                _this.blue_box.addChild(_this.Box2_3);
                break;
        }


        //for cuboid
        _this.LValueArray_y = [100, 175];
        if (_this.optionOrder[_this.questionCount] == 2) {

            _this.stopAudio_QV();
            // _this.pauseVoice();
            if (_this.count1 == 2) {
                // _this.Ask_Question6.play();
                if (_this.languageSelected == "English")
                    _this.Ask_Question6 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_a3.mp3');
                else if (_this.languageSelected == "Hindi") _this.Ask_Question6 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_a3.mp3');
                else if (_this.languageSelected == "Kannada") _this.Ask_Question6 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_a3.mp3');
                else if (_this.languageSelected == "Tamil") _this.Ask_Question6 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_a3.mp3');
                else if (_this.languageSelected == "Odiya") _this.Ask_Question6 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_a3.mp3');
                else if (_this.languageSelected == "Marathi") _this.Ask_Question6 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_a3.mp3');
            }
            _this.Question_flag = 5;

            _this.box_2 = _this.add.sprite(555, 80, 'text_box_4');
            addVValue = _this.add.text(275, _this.LValueArray_y[0], _this.totalVolumeArray[0]);
            _this.applyingStyle2(addVValue);
            _this.box_2.addChild(addVValue);

            addVValue = _this.add.text(275, _this.LValueArray_y[1], _this.totalVolumeArray[1]);
            _this.applyingStyle2(addVValue);
            _this.box_2.addChild(addVValue);

            addL = _this.add.text(35, 25, "L");
            _this.applyingStyleRed(addL);
            _this.box_2.addChild(addL);
            addB = _this.add.text(110, 25, "B");
            _this.applyingStyleRed(addB);
            _this.box_2.addChild(addB);
            addH = _this.add.text(185, 25, "H");
            _this.applyingStyleRed(addH);
            _this.box_2.addChild(addH);
            addV = _this.add.text(280, 25, "V");
            _this.applyingStyleRed(addV);
            _this.box_2.addChild(addV);

            for (let i = 0; i < 2; i++) {
                addLValue = _this.add.text(35, _this.LValueArray_y[i], _this.cbdLengthArray[i]);
                _this.applyingStyle2(addLValue);
                _this.box_2.addChild(addLValue);
                addBValue = _this.add.text(110, _this.LValueArray_y[i], _this.cbdBreadthArray[i]);
                _this.applyingStyle2(addBValue);
                _this.box_2.addChild(addBValue);
                addHValue = _this.add.text(185, _this.LValueArray_y[i], _this.cbdHeightArray[i]);
                _this.applyingStyle2(addHValue);
                _this.box_2.addChild(addHValue);
            }

            _this.correctEQ = _this.add.text(20, 25, 'L x B x H');
            _this.applyingStyleRed(_this.correctEQ);
            _this.correctEQ.fontSize = '25px';
            _this.Box2_1.addChild(_this.correctEQ);

            _this.wrongEQ1 = _this.add.text(20, 25, '2 x (L+B+H)');
            _this.applyingStyleRed(_this.wrongEQ1);
            _this.wrongEQ1.fontSize = '25px';
            _this.Box2_2.addChild(_this.wrongEQ1);

            _this.wrongEQ2 = _this.add.text(25, 25, 'L+B+H');
            _this.applyingStyleRed(_this.wrongEQ2);
            _this.wrongEQ2.fontSize = '25px';
            _this.Box2_3.addChild(_this.wrongEQ2);

        }

        //for cube
        if (_this.optionOrder[_this.questionCount] == 1) {
            _this.pauseVoice();
            if (_this.count1 == 2) {
                // _this.Ask_Question7.play();
                if (_this.languageSelected == "English")
                    _this.Ask_Question7 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/English/GMM_03_G8_a6.mp3');
                else if (_this.languageSelected == "Hindi") _this.Ask_Question7 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Hindi/GMM_03_G8_a6.mp3');
                else if (_this.languageSelected == "Kannada") _this.Ask_Question7 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Kannada/GMM_03_G8_a6.mp3');
                else if (_this.languageSelected == "Marathi") _this.Ask_Question7 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Marathi/GMM_03_G8_a6.mp3');
                else if (_this.languageSelected == "Odiya") _this.Ask_Question7 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Odiya/GMM_03_G8_a6.mp3');
                else if (_this.languageSelected == "Tamil") _this.Ask_Question7 = _this.playAudio(window.baseUrl + 'questionSounds/GMM-03-G8/Tamil/GMM_03_G8_a6.mp3');
            }
            _this.Question_flag = 6;

            _this.box_2 = _this.add.sprite(555, 80, 'all_box');
            _this.box_2.frame = 2;
            if (_this.totalVolumeArrayCube[0] == 8)
                addVValue = _this.add.text(113, _this.LValueArray_y[0], _this.totalVolumeArrayCube[0]);
            else
                addVValue = _this.add.text(105, _this.LValueArray_y[0], _this.totalVolumeArrayCube[0]);
            _this.applyingStyle2(addVValue);
            _this.box_2.addChild(addVValue);

            if (_this.totalVolumeArrayCube[1] == 8)
                addVValue = _this.add.text(113, _this.LValueArray_y[1], _this.totalVolumeArrayCube[1]);
            else
                addVValue = _this.add.text(105, _this.LValueArray_y[1], _this.totalVolumeArrayCube[1]);
            _this.applyingStyle2(addVValue);
            _this.box_2.addChild(addVValue);

            addL = _this.add.text(35, 25, "L");
            _this.applyingStyleRed(addL);
            _this.box_2.addChild(addL);
            addV = _this.add.text(110, 25, "V");
            _this.applyingStyleRed(addV);
            _this.box_2.addChild(addV);

            for (let i = 0; i < 2; i++) {
                addLValue = _this.add.text(35, _this.LValueArray_y[i], _this.cbeLengthArray[i]);
                _this.applyingStyle2(addLValue);
                _this.box_2.addChild(addLValue);
            }

            _this.correctEQ = _this.add.text(20, 25, 'L x L x L');
            _this.applyingStyleRed(_this.correctEQ);
            _this.correctEQ.fontSize = '25px';
            _this.Box2_1.addChild(_this.correctEQ);

            _this.wrongEQ1 = _this.add.text(20, 25, '2 x (L+L+L)');
            _this.applyingStyleRed(_this.wrongEQ1);
            _this.wrongEQ1.fontSize = '25px';
            _this.Box2_2.addChild(_this.wrongEQ1);

            _this.wrongEQ2 = _this.add.text(25, 25, '2L+B+H');//L+B+H
            _this.applyingStyleRed(_this.wrongEQ2);
            _this.wrongEQ2.fontSize = '25px';
            _this.Box2_3.addChild(_this.wrongEQ2);


        }
    },

    //validation for equation
    tickEvaluationEquation: function () {
        if (_this.Box2_1.frame == 1) {
            _this.counterCelebrationSound.play();
            _this.tick.inputEnabled = false;
            _this.tick.events.onInputDown.removeAll();
            _this.Box2_1.inputEnabled = false;
            _this.Box2_1.input.useHandCursor = false;
            _this.Box2_2.inputEnabled = false;
            _this.Box2_2.input.useHandCursor = false;
            _this.Box2_3.inputEnabled = false;
            _this.Box2_3.input.useHandCursor = false;
            _this.lastScreenCelebration();
        }
        else {
            _this.wrongSound.play();
            _this.Box2_1.frame = 0;
            _this.Box2_2.frame = 0;
            _this.Box2_3.frame = 0;
        }
    },

    lastScreenCelebration: function () {
        console.log("lastScreenCelebration");
        _this.celebrationSound.play();
        //for api
        //edited for baseurl apk
        _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
        //..............

        console.log(_this.noofAttempts, "_this.noofAttempts.................");
        console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
        console.log(_this.sceneCount, "_this.sceneCount.................");
        console.log(_this.questionid, "_this.questionid.................");


        _this.starActions();
        _this.stopAudio_QV();
        // _this.pauseVoice();
        _this.time.events.add(3000, () => {
            _this.clearAll();
            if (_this.count1 == 6) {
                _this.state.start('score', true, false, gameID, _this.microConcepts);
                // _this.state.start('GMM_03_G8Score');
                console.log("score");
            }
            else {
                _this.time.events.add(800, () => {
                    if (_this.count1 == 2 || _this.count1 == 5) {
                        //only for equation displaying
                        _this.equationDisplayScreen();
                    }
                    else {
                        _this.initialScreenLoad();
                    }

                });

            }
        });
    },

    changeFrame1: function () {
        _this.Box2_1.frame = 1;
        _this.Box2_2.frame = 0;
        _this.Box2_3.frame = 0;

        _this.selectedBox1 = true;
        _this.selectedBox2 = false;
        _this.selectedBox3 = false;
    },
    changeFrame2: function () {
        _this.Box2_2.frame = 1;
        _this.Box2_1.frame = 0;
        _this.Box2_3.frame = 0;

        _this.selectedBox2 = true;
        _this.selectedBox1 = false;
        _this.selectedBox3 = false;
    },
    changeFrame3: function () {
        _this.Box2_3.frame = 1;
        _this.Box2_1.frame = 0;
        _this.Box2_2.frame = 0;

        _this.selectedBox3 = true;
        _this.selectedBox1 = false;
        _this.selectedBox2 = false;
    },

    //validating the value of vloume
    rightbtnClicked: function () {
        console.log("rightbtnClicked");
        _this.clickSound.play();

        if (_this.optionOrder[_this.questionCount] == 2) {
            if (_this.AnswerBox.name == _this.totalVolumeArray[_this.qOption]) {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.time.events.add(1500, function () {
                    _this.eraseScreen();
                    _this.AnswerBox.destroy();
                    addVValue = _this.add.text(275, _this.LValueArray_y[_this.qOption], _this.totalVolumeArray[_this.qOption]);
                    _this.applyingStyle2(addVValue);
                    _this.box_2.addChild(addVValue);
                    _this.clungSound.play();
                    // _this.time.events.add(2500, function () {
                    _this.lastScreenCelebration();
                    // });

                });
            }
            else {
                _this.wrong++;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }
        if (_this.optionOrder[_this.questionCount] == 1) {
            if (_this.AnswerBox.name == _this.totalVolumeArrayCube[_this.qOption]) {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.time.events.add(1500, function () {
                    _this.eraseScreen();
                    _this.AnswerBox.destroy();
                    if (_this.totalVolumeArrayCube[_this.qOption] == 8)
                        addVValue = _this.add.text(113, _this.LValueArray_y[_this.qOption], _this.totalVolumeArrayCube[_this.qOption]);
                    else addVValue = _this.add.text(105, _this.LValueArray_y[_this.qOption], _this.totalVolumeArrayCube[_this.qOption]);

                    _this.applyingStyle2(addVValue);
                    _this.box_2.addChild(addVValue);
                    _this.clungSound.play();
                    // _this.time.events.add(2500, function () {
                    _this.lastScreenCelebration();
                    // });

                });
            }
            else {
                _this.wrong++;
                _this.wrongSound.play();
                _this.eraseScreen();
            }
        }





    },


    //* Change this function to show small number pad as given in GDD. (no signs)
    addNumberPad: function () {
        _this.numberpadFlag = true;
        _this.Choice = 1;
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

        _this.enterTxt = _this.add.text(120, 20, "");//75, 100
        // _this.enterTxt.bringToTop();

        _this.numpadTween = _this.add.tween(_this.numGroup);
        //_this.AnswerBox.visible=true;
        //tween in the number pad after a second.
        _this.tweenNumPad();
    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.eraseScreen();
    },

    eraseScreen: function (target) {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';
        _this.AnswerBox.removeChild(_this.enterTxt);

        //if(_this.flag==0)
        //{
        //_this.enterTxt.destroy();
        //_this.enterTxt;
        //_this.enterTxt.text = "";
        _this.AnswerBox.name = '';
        //}
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);
    },

    numClicked: function (target) {
        console.log(target.name)
        _this.clickSound.play();
        var_selectedAns1 = " ";
        var_selectedAns2 = " ";
        var_selectedAns3 = " ";

        if (_this.selectedAns3 === '' && _this.selectedAns2 !== '' && _this.selectedAns1 !== '') {
            console.log("1");
            if (_this.selectedAns2 === 0 && target.name !== 0) {
                _this.selectedAns3 = target.name;
            }
            else if (_this.selectedAns2 !== '' && _this.selectedAns2 !== 0) {
                _this.selectedAns3 = target.name;
            }
            else if (_this.selectedAns2 !== 0 && target.name == 10) {
                _this.selectedAns2 = 0;
            }
            else {
                _this.selectedAns2 = target.name;
            }
        }

        if (_this.selectedAns2 === '') {
            console.log("2");
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
        if (_this.selectedAns3 === 10) _this.selectedAns3 = 0;
        else var_selectedAns3 = _this.selectedAns3;


        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;

        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;

        if (_this.selectedAns3 === "") var_selectedAns3 = " ";
        else var_selectedAns3 = _this.selectedAns3;

        //type0-scene1  type1-scene2  type2-scene3
        if (_this.selectedAns2 === "" && _this.selectedAns3 === "") {
            console.log("1");
            _this.enterTxt = _this.add.text(30, 5, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '25px' });//47, 8//120,20
        }
        else if (_this.selectedAns3 === "") {
            console.log("12");
            _this.enterTxt = _this.add.text(20, 5, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '25px' });//42, 8
        }
        else {
            console.log("13");
            _this.enterTxt = _this.add.text(10, 5, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '25px' });//38, 8
        }

        _this.enterTxt.align = 'right';
        _this.applyingStyle2(_this.enterTxt);
        _this.AnswerBox.addChild(_this.enterTxt);
        _this.enterTxt.visible = true;
        console.log(_this.selectedAns1, _this.selectedAns2, _this.selectedAns3);
        _this.AnswerBox.name = Number('' + var_selectedAns1 + var_selectedAns2 + var_selectedAns3);
        //_this.AnswerBox.name = Number('' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3);
        console.log(_this.AnswerBox.name);
    },


    clearAll: function () {
        console.log("ClearAll");

        if (_this.count1 == 2 || _this.count1 == 5) {
            _this.blue_box.destroy();
            _this.box_2.destroy();
            _this.tick.destroy();
        }
        else {
            _this.panel_2.destroy();

        }

        if (_this.count1 == 2) {//2
            //equation question
            _this.qOption = 0;
            _this.questionCount = 1;
            if (_this.optionOrder[0] == 2 && _this.optionOrder[1] == 2) {
                // Removing elements at index 0 and 1
                _this.cbdLengthArray.splice(0, 2);
                _this.cbdBreadthArray.splice(0, 2);
                _this.cbdHeightArray.splice(0, 2);
                _this.totalVolumeArray.splice(0, 2);

                console.log("_this.cbdLengthArray:", _this.cbdLengthArray);
                console.log("_this.cbdBreadthArray:", _this.cbdBreadthArray);
                console.log("_this.cbdHeightArray:", _this.cbdHeightArray);
                console.log("_this.totalVolumeArray:", _this.totalVolumeArray);
            }
        }
        else {
            _this.qOption++;
        }


        _this.count1++;
    },


    applyingStyle: function (target) {//pink
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#E11584';
        target.fontWeight = 'normal';
        target.visible = true;
    },
    applyingStyleRed: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#FF0000';
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '35px';
    },
    applyingStyle2: function (target) {//blue
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '35px';
    },

    applyingStyle1: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '20px';
    },
    checkOverlap: function (spriteA, spriteB) {
        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },


    starActions: function (target) {
        //for api
        //edited for baseurl apk
        _this.AnsTimerCount = 0;

        console.log("starActions")
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        // _this.count1++;
        anim.play();

        //edited for baseurl apk //for api
        _this.microConcepts = "GeometryG8";
    },


    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },

    DemoVideo: function () {


        //* Drag the strips and square pieces onto the grid to represent the given decimal number.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/GMM-03-G8/" +
            _this.languageSelected + "/GMM_03_G8_d1.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video


        _this.skip = _this.add.image(870, 350, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.stopAudio();

            if (_this.hintBtn) {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;  //* restart the game
        });
    },
    stopAudio: function () {
        //* clear all the timers first

        if (_this.squareTimer) clearTimeout(_this.squareTimer);

        if (_this.q1Sound) {
            //console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }

        if (_this.bigCube_1) _this.bigCube_1.destroy();
        if (_this.line_1_1) _this.line_1_1.destroy();
        if (_this.line_2_1) _this.line_2_1.destroy();
        if (_this.line_3_1) _this.line_3_1.destroy();
        if (_this.addL1_1) _this.addL1_1.destroy();
        if (_this.addL2_1) _this.addL2_1.destroy();
        if (_this.addL3_1) _this.addL3_1.destroy();
        if (_this.background_demo) _this.background_demo.destroy();

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },

    showDemoVideo: function () {

        _this.pauseVoice();

        _this.background_demo = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'BG1');

        _this.q1Sound.play();
        // _this.speakerbtn.inputEnabled = false;

        _this.bigCube_1 = _this.add.image(320, 120, 'pink_box_big');
        _this.line_1_1 = _this.add.image(310, 80, 'orenge_line_1');
        _this.addL1_1 = _this.add.text(360, 100, "1");
        _this.addL1_1.fill = '#FF0000';
        _this.line_2_1 = _this.add.image(285, 220, 'orenge_line_2');
        _this.addL2_1 = _this.add.text(270, 310, "1");
        _this.addL2_1.fill = '#FF0000';
        _this.line_3_1 = _this.add.image(320, 450, 'orenge_line_3');
        _this.addL3_1 = _this.add.text(420, 470, "1");
        _this.addL3_1.fill = '#FF0000';

        switch (_this.languageSelected) {
            case 'English':
                timer = 5000;
                break;
            case 'Hindi': timer = 7000;
                break;
            case 'Kannada': timer = 8000;
                break;
            case 'Marathi': timer = 9000;
                break;
            case 'Odiya': timer = 8000;
                break;
            case 'Tamil': timer = 9000;
                break;
        }


        _this.squareTimer = setTimeout(function ()    //* q3 js timer to play square3Timer after 47 seconds.
        {
            _this.bigCube_1.destroy();
            _this.line_1_1.destroy();
            _this.line_2_1.destroy();
            _this.line_3_1.destroy();
            _this.addL1_1.destroy();
            _this.addL2_1.destroy();
            _this.addL3_1.destroy();
            _this.background_demo.destroy();
            // _this.Question_flag = 2;
            // _this.speakerbtn.inputEnabled = true;

            _this.stopAudio();

            if (_this.hintBtn) {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;
        }, timer);

    }
}