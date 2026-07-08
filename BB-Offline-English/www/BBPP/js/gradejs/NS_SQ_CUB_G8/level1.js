Game.NS_SQ_CUB_G8level1 = function () { };


Game.NS_SQ_CUB_G8level1.prototype =
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
        _this.wronganssrc.setAttribute("src", window.baseUrl + "sounds/wrongans.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        // _this.snapSound = document.createElement('audio');
        // _this.snapSoundsrc = document.createElement('source');
        // _this.snapSoundsrc.setAttribute("src", window.baseUrl+ "sounds/snapSound.mp3");
        // _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.framechange = document.createElement('audio');
        _this.framechangesrc = document.createElement('source');
        _this.framechangesrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);

        _this.tweening = document.createElement('audio');
        _this.tweeningsrc = document.createElement('source');
        _this.tweeningsrc.setAttribute("src", window.baseUrl + "sounds/Unlock Skill.mp3");
        _this.tweening.appendChild(_this.tweeningsrc);

        // square of number
        _this.Ask_Question1 = _this.createAudio("NS_SQ_CUB_G8_a1");
        _this.Ask_Question2 = _this.createAudio("NS_SQ_CUB_G8_a4");
        _this.Ask_Question3 = _this.createAudio("NS_SQ_CUB_G8_a3");
        _this.Ask_Question16 = _this.createAudio("NS_SQ_CUB_G8_a5");//a2
        _this.Ask_Question17 = _this.createAudio("NS_SQ_CUB_G8_a2");//a5
        _this.Ask_Question18 = _this.createAudio("NS_SQ_CUB_G8_a6");

        _this.Ask_Question4 = _this.createAudio("NS_SQ_CUB_G8_a6");//enter the ans

        //sqroot of number
        _this.Ask_Question5 = _this.createAudio("NS_SQ_CUB_G8_a7");
        _this.Ask_Question6 = _this.createAudio("NS_SQ_CUB_G8_a9");
        _this.Ask_Question12 = _this.createAudio("NS_SQ_CUB_G8_a11");
        _this.Ask_Question14 = _this.createAudio("NS_SQ_CUB_G8_a10");
        _this.Ask_Question19 = _this.createAudio("NS_SQ_CUB_G8_a18");

        // cube of number
        _this.Ask_Question7 = _this.createAudio("NS_SQ_CUB_G8_a12");
        _this.Ask_Question8 = _this.createAudio("NS_SQ_CUB_G8_a13");
        _this.Ask_Question9 = _this.createAudio("NS_SQ_CUB_G8_a14");
        _this.Ask_Question20 = _this.createAudio("NS_SQ_CUB_G8_a15");
        _this.Ask_Question21 = _this.createAudio("NS_SQ_CUB_G8_a16");

        //cuberoot of number
        _this.Ask_Question10 = _this.createAudio("NS_SQ_CUB_G8_a17");
        _this.Ask_Question11 = _this.createAudio("NS_SQ_CUB_G8_a19");
        _this.Ask_Question13 = _this.createAudio("NS_SQ_CUB_G8_a21");
        _this.Ask_Question15 = _this.createAudio("NS_SQ_CUB_G8_a20");

        //edited for baseurl online apk
        telInitializerbbpp.gameIdInit("NSN_SQ_CUB_G8", gradeSelected);
        console.log(gameID, "gameID...");
    },
    create: function (game) {

        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(1500, function () {
            _this.gameCreate(game);
        });
    },
    ViewDemoVideo: function () {
        //* pause the game before going to the demovideo 
        _this.game.paused = true;
        _this.DemoVideo();
        //* at the end of demo video/skip pressed, it will unpause the game.
    },
    gameCreate: function (game) {
        //edited for baseurl apk
        //*add these  variables
        _this.noofAttempts = 0;//total attempt to answer q question
        _this.AnsTimerCount = 0;//total time
        _this.sceneCount = 0;//no of screen
        _this.questionid = null;//always 1
        //............

        _this.AnsTimerCount = 0;
        _this.numberOfQuestions = 0;
        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        _this.starsGroup;
        _this.AnswerBox;
        _this.seconds = 0;
        _this.minutes = 0;

        _this.Question_flag = 0;

        _this.count1 = 0;
        _this.count2 = 0;

        _this.rootScreen = 0;

        _this.counterForTimer = 0;

        _this.objectX = 0;
        _this.objectY = 0;

        _this.row = false;
        _this.col = false;

        _this.dragCount = 0;

        _this.blueObjects = [];
        _this.pinkObjects = [];

        _this.perfectSquareFlag = false;
        _this.perfectCubeFlag = false;

        _this.right = false;
        _this.wrong = false;

        _this.squareFlag = false;

        _this.cubeFlag = false;

        _this.rootSquare = false;
        _this.rootCube = false;

        _this.cubeRow = false;
        _this.cubeCol = false;

        _this.firstQ = 0;

        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'BG1');
        //** include the background file, navigation bar, stars, timer objects.
        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.state.start('grade8NumberSystems', true, false);
            // _this.state.start('NS_SQ_CUB_G8Score');
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if (_this.Question_flag == 1) {
                    _this.pauseVoice();
                    _this.Ask_Question1.play();
                }
                if (_this.Question_flag == 2) {
                    _this.pauseVoice();
                    _this.Ask_Question2.play();
                }
                if (_this.Question_flag == 3) {
                    _this.pauseVoice();
                    _this.Ask_Question3.play();
                }
                if (_this.Question_flag == 4) {
                    _this.pauseVoice();
                    _this.Ask_Question4.play();
                }
                if (_this.Question_flag == 5) {
                    _this.pauseVoice();
                    _this.Ask_Question5.play();
                }
                if (_this.Question_flag == 6) {
                    _this.pauseVoice();
                    _this.Ask_Question6.play();
                }
                if (_this.Question_flag == 4) {
                    _this.pauseVoice();
                    _this.Ask_Question4.play();
                }
                if (_this.Question_flag == 7) {
                    _this.pauseVoice();
                    _this.Ask_Question7.play();
                }
                if (_this.Question_flag == 8) {
                    _this.pauseVoice();
                    _this.Ask_Question8.play();
                }
                if (_this.Question_flag == 9) {
                    _this.pauseVoice();
                    _this.Ask_Question9.play();
                }
                if (_this.Question_flag == 10) {
                    _this.pauseVoice();
                    _this.Ask_Question10.play();
                }
                if (_this.Question_flag == 11) {
                    _this.pauseVoice();
                    _this.Ask_Question11.play();
                }
                if (_this.Question_flag == 12) {
                    _this.pauseVoice();
                    _this.Ask_Question12.play();
                }
                if (_this.Question_flag == 13) {
                    _this.pauseVoice();
                    _this.Ask_Question13.play();
                }
                if (_this.Question_flag == 14) {
                    _this.pauseVoice();
                    _this.Ask_Question14.play();
                }
                if (_this.Question_flag == 15) {
                    _this.pauseVoice();
                    _this.Ask_Question15.play();
                }
                if (_this.Question_flag == 16) {
                    _this.pauseVoice();
                    _this.Ask_Question16.play();
                }
                if (_this.Question_flag == 17) {
                    _this.pauseVoice();
                    _this.Ask_Question17.play();
                }
                if (_this.Question_flag == 18) {
                    _this.pauseVoice();
                    _this.Ask_Question18.play();
                }
                if (_this.Question_flag == 19) {
                    _this.pauseVoice();
                    _this.Ask_Question19.play();
                }
                if (_this.Question_flag == 20) {
                    _this.pauseVoice();
                    _this.Ask_Question20.play();
                }
                if (_this.Question_flag == 21) {
                    _this.pauseVoice();
                    _this.Ask_Question21.play();
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

        //bulb 
        // _this.hintBtn = _this.add.sprite(670, 6, 'bulb');
        // _this.hintBtn.scale.setTo(0.5, 0.6);
        // _this.hintBtn.smoothed = false;
        // _this.hintBtnAnim = _this.hintBtn.animations.add('hint');
        // _this.hintBtnAnim.play(15);
        // _this.hintBtnAnim.onComplete.add(function () {
        //     _this.hintBtnAnim.play(15);
        // }, _this);
        // _this.hintBtn.inputEnabled = true;
        // _this.hintBtn.input.useHandCursor = true;

        // _this.hintBtn.events.onInputDown.add(function () {
        //     //console.log("inside hintbutton function");
        //     //* show the demo video
        //     _this.hintBtn.inputEnabled = false;
        //     _this.hintBtn.input.useHandCursor = false;
        //     _this.time.events.add(1, function () {
        //         //console.log(_this.hintBtn.inputEnabled, "status of hintBtn");
        //         _this.ViewDemoVideo();
        //     });

        // });

        _this.generateStarsForTheScene(6);

        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);

    },
    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NS_SQ_CUB_G8/" + _this.languageSelected + "/" + src + ".mp3");
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
                _this.seconds = 0;
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

        _this.questionid = 1; //for api

        _this.QuestionArray = [1, 2, 3, 4];
        _this.QuestionArray2 = [5, 6];
        Phaser.ArrayUtils.shuffle(_this.QuestionArray);
        Phaser.ArrayUtils.shuffle(_this.QuestionArray2);

        console.log(_this.QuestionArray);

        _this.DecideScreen();
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

        _this.Ask_Question8.pause();
        _this.Ask_Question8 = null;

        _this.Ask_Question9.pause();
        _this.Ask_Question9 = null;

        _this.Ask_Question10.pause();
        _this.Ask_Question10 = null;

        _this.Ask_Question11.pause();
        _this.Ask_Question11 = null;

        _this.Ask_Question12.pause();
        _this.Ask_Question12 = null;

        _this.Ask_Question13.pause();
        _this.Ask_Question13 = null;

        _this.Ask_Question14.pause();
        _this.Ask_Question14 = null;

        _this.Ask_Question15.pause();
        _this.Ask_Question15 = null;

        _this.Ask_Question16.pause();
        _this.Ask_Question16 = null;

        _this.Ask_Question17.pause();
        _this.Ask_Question17 = null;

        _this.Ask_Question18.pause();
        _this.Ask_Question18 = null;

        _this.Ask_Question19.pause();
        _this.Ask_Question19 = null;

        _this.Ask_Question20.pause();
        _this.Ask_Question20 = null;

        _this.Ask_Question21.pause();
        _this.Ask_Question21 = null;

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
        if (_this.Ask_Question8) {
            _this.Ask_Question8.pause();
            _this.Ask_Question8.currentTime = 0.0;
        }
        if (_this.Ask_Question9) {
            _this.Ask_Question9.pause();
            _this.Ask_Question9.currentTime = 0.0;
        }
        if (_this.Ask_Question10) {
            _this.Ask_Question10.pause();
            _this.Ask_Question10.currentTime = 0.0;
        }
        if (_this.Ask_Question11) {
            _this.Ask_Question11.pause();
            _this.Ask_Question11.currentTime = 0.0;
        }
        if (_this.Ask_Question12) {
            _this.Ask_Question12.pause();
            _this.Ask_Question12.currentTime = 0.0;
        }
        if (_this.Ask_Question13) {
            _this.Ask_Question13.pause();
            _this.Ask_Question13.currentTime = 0.0;
        }
        if (_this.Ask_Question14) {
            _this.Ask_Question14.pause();
            _this.Ask_Question14.currentTime = 0.0;
        }
        if (_this.Ask_Question15) {
            _this.Ask_Question15.pause();
            _this.Ask_Question15.currentTime = 0.0;
        }
        if (_this.Ask_Question16) {
            _this.Ask_Question16.pause();
            _this.Ask_Question16.currentTime = 0.0;
        }
        if (_this.Ask_Question17) {
            _this.Ask_Question17.pause();
            _this.Ask_Question17.currentTime = 0.0;
        }
        if (_this.Ask_Question18) {
            _this.Ask_Question18.pause();
            _this.Ask_Question18.currentTime = 0.0;
        }
        if (_this.Ask_Question19) {
            _this.Ask_Question19.pause();
            _this.Ask_Question19.currentTime = 0.0;
        }
        if (_this.Ask_Question20) {
            _this.Ask_Question20.pause();
            _this.Ask_Question20.currentTime = 0.0;
        }
        if (_this.Ask_Question21) {
            _this.Ask_Question21.pause();
            _this.Ask_Question21.currentTime = 0.0;
        }
    },

    DecideScreen: function () {
        //for api
        //edited for baseurl apk
        _this.sceneCount++;
        _this.noofAttempts = 0;
        //....

        switch (_this.QuestionArray[_this.count1]) {
            case 1: _this.SquareScreen();
                break;
            case 2: _this.SquareRootScreen();
                break;
            case 3: _this.CubeScreen();
                break;
            case 4: _this.CubeRootScreen();
                break;
        }
    },

    DecideScreen2: function () {
        //for api
        //edited for baseurl apk
        _this.sceneCount++;
        _this.noofAttempts = 0;
        //....

        switch (_this.QuestionArray2[_this.count2]) {
            case 5: _this.SquareRootScreen();
                break;
            case 6: _this.CubeRootScreen();
                break;
        }
    },
    NextQuestion: function () {
        console.log('next question.......')
        _this.count1++;

        if (_this.count1 < 6) {
            if (_this.count1 < 4) {
                _this.DecideScreen();
            } else if (_this.count1 >= 4) {
                _this.DecideScreen2();
                _this.count2++;
            }
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.state.start('score', true, false, gameID, _this.microConcepts);
            // _this.time.events.add(1000, function () { _this.state.start('score') });
        }
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
    SquareScreen: function () {
        _this.power = "\u{00B2}";

        _this.pauseVoice();

        _this.time.events.add(1200, function () {
            console.log('Ask_Question1');
            _this.Ask_Question1.play();
            _this.Question_flag = 1;
        });

        _this.Ask_Question1.addEventListener('ended', () => {
            _this.Ask_Question17.play();
            _this.Question_flag = 17;
        });

        _this.Ask_Question17.addEventListener('ended', () => {
            _this.Ask_Question2.play();
            _this.Question_flag = 2;
        });

        // _this.time.events.add(2800, function () {
        //     console.log('Ask_Question17');
        //     _this.Ask_Question17.play();
        //     _this.Question_flag = 17;
        // });

        // _this.time.events.add(4800, function () {
        //     console.log('Ask_Question2');
        //     _this.Ask_Question2.play();
        //     _this.Question_flag = 2;
        // });

        _this.time.events.add(4800, function () {
            _this.addNumberPad();
        });

        console.log("AskingQuestion square")

        _this.squareFlag = true;

        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        // Generate a random number between 2 and 17 (inclusive)
        _this.randomNumber = generateRandomNumber(2, 10);

        console.log("Random Number: " + _this.randomNumber);

        // Calculate the square of the random number
        _this.squareNumber = _this.randomNumber * _this.randomNumber;

        console.log("Square: " + _this.squareNumber);


        _this.QuestionBox = _this.add.sprite(410, 55, 'textBox1');
        if (_this.randomNumber.toString().length === 1) {
            _this.questionText = _this.add.text(55, 20, _this.randomNumber);
        } else {
            _this.questionText = _this.add.text(45, 20, _this.randomNumber);
        }

        _this.applyingStyleBlue(_this.questionText);
        _this.QuestionBox.addChild(_this.questionText);

        _this.Box2 = _this.add.sprite(60, 60, 'Box2');
        _this.blueBox = _this.add.sprite(75, 75, 'blueBox');
        _this.blueBox.scale.setTo(1.3, 1.3);

        _this.blueObjects.push(_this.blueBox);

        _this.panel1 = _this.add.sprite(50, 155, 'panel1');

        _this.AnswerBox1 = _this.add.sprite(780, 55, 'textBox3');
        _this.AnswerBox1.inputEnabled = true;
        _this.AnswerBox1.input.useHandCursor = true;

        _this.AnswerBox1.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.AnswerBox1.frame = 1;
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
            for (let i = 1; i <= 10; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
            }
        });
    },

    displayRowGrid: function () {
        console.log('display row grid')

        _this.objectX = 300;
        _this.objectY = 140;

        if (_this.randomNumber == 2) { _this.objectX += 80; }
        if (_this.randomNumber == 3) { _this.objectX += 70; }
        if (_this.randomNumber == 4) { _this.objectX += 60; }
        if (_this.randomNumber == 5) { _this.objectX += 40; }
        if (_this.randomNumber == 6) { _this.objectX += 30; }
        if (_this.randomNumber == 7) { _this.objectX += 20; }
        if (_this.randomNumber == 8) { _this.objectX += 10; }
        if (_this.randomNumber == 10) { _this.objectX -= 10; }

        for (var i = 0; i < _this.randomNumber; i++) {
            _this.gridBox = _this.add.sprite(_this.objectX, _this.objectY, 'blueBox');
            _this.gridBox.frame = 1;
            _this.panel1.addChild(_this.gridBox);

            _this.objectX += 29;
        }

        _this.pauseVoice();
        _this.time.events.add(1000, function () {
            _this.Ask_Question3.play();
            _this.Question_flag = 3;
            _this.addNumberPad();
        });

        _this.AnswerBox1.inputEnabled = true;
        _this.AnswerBox1.input.useHandCursor = true;

        _this.AnswerBox1.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.AnswerBox1.frame = 1;
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
            for (let i = 1; i <= 10; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
            }
        });

        _this.row = true;
    },

    displayColumnGrid: function () {
        console.log('display col grid')

        _this.objectX = 300; // Initial X position of the object
        _this.objectY = 100; // Y position of the object

        if (_this.randomNumber == 2) { _this.objectX += 80; _this.objectY += 15; }
        if (_this.randomNumber == 3) { _this.objectX += 70; _this.objectY += 5; }
        if (_this.randomNumber == 4) { _this.objectX += 60; _this.objectY -= 5; }
        if (_this.randomNumber == 5) { _this.objectX += 40; _this.objectY -= 15; }
        if (_this.randomNumber == 6) { _this.objectX += 30; _this.objectY -= 25; }
        if (_this.randomNumber == 7) { _this.objectX += 20; _this.objectY -= 45; }
        if (_this.randomNumber == 8) { _this.objectX += 10; _this.objectY -= 60; }
        if (_this.randomNumber == 9) { _this.objectY -= 75; }
        if (_this.randomNumber == 10) { _this.objectX -= 10; _this.objectY -= 90; }

        _this.squareBoxArray = [];

        for (var row = 0; row < _this.randomNumber; row++) {
            for (var col = 0; col < _this.randomNumber; col++) {
                _this.gridBox = _this.add.sprite(_this.objectX, _this.objectY, 'blueBox');
                _this.gridBox.frame = 1;
                _this.panel1.addChild(_this.gridBox);

                _this.pair = { x: _this.objectX, y: _this.objectY };

                // Push the pair into the pairedValues array
                _this.squareBoxArray.push(_this.pair);

                _this.objectX += 29;
            }
            _this.objectY += 29;
            _this.objectX = _this.panel1.getChildAt(0).x;
        }

        _this.col = true;
    },

    DragObject: function () {
        _this.tick = _this.add.sprite(840, 70, 'TickBtn');
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);

        _this.blueBox.inputEnabled = true;
        _this.blueBox.events.onInputDown.add(_this.dragBlueBox, _this);
        _this.blueBox.events.onDragStop.add(_this.dragBlueBox, _this);

        _this.pauseVoice();
        _this.time.events.add(500, function () {
            _this.Ask_Question16.play();
            _this.Question_flag = 16;
            let hand = _this.add.image(0, 150, 'hand');
            _this.handTween = _this.add.tween(hand);
            _this.handTween.to({ x: 70, y: 90 }, 1000, 'Linear', true, 0);
            _this.handTween.onComplete.add(function () {
                _this.clickSound.play();
                hand.destroy();
            });
        });

        _this.storeFirstPosition = [];
        _this.storeFirstPosition = _this.squareBoxArray[0];

    },

    dragBlueBox: function () {
        console.log('dragggggg')
        _this.dragCount++;

        if (_this.randomNumber == 2) {
            if (_this.dragCount < 2) {
                _this.clickSound.play();
                _this.draggingBlueBox();
            }
            else {
                _this.blueBox.events.onDragStop.removeAll();
                _this.blueBox.destroy();
                _this.blueBox = _this.add.sprite(75, 75, 'blueBox');
                _this.blueBox.scale.setTo(1.3, 1.3);
                _this.blueObjects.push(_this.blueBox);
                _this.tweenRemainingPositions();
                _this.time.events.add(200, function () {
                    _this.tweening.play();
                });
                return;
            }
        }
        else if (_this.randomNumber == 3) {
            if (_this.dragCount < 3) {
                _this.clickSound.play();
                _this.draggingBlueBox();
            }
            else {
                _this.blueBox.events.onDragStop.removeAll();
                _this.blueBox.destroy();
                _this.blueBox = _this.add.sprite(75, 75, 'blueBox');
                _this.blueBox.scale.setTo(1.3, 1.3);
                _this.blueObjects.push(_this.blueBox);
                _this.tweenRemainingPositions();
                _this.time.events.add(200, function () {
                    _this.tweening.play();
                });
                return;
            }
        }
        else if (_this.randomNumber == 4) {
            if (_this.dragCount < 4) {
                _this.clickSound.play();
                _this.draggingBlueBox();
            }
            else {
                _this.blueBox.events.onDragStop.removeAll();
                _this.blueBox.destroy();
                _this.blueBox = _this.add.sprite(75, 75, 'blueBox');
                _this.blueBox.scale.setTo(1.3, 1.3);
                _this.blueObjects.push(_this.blueBox);
                _this.tweenRemainingPositions();
                _this.time.events.add(500, function () {
                    _this.tweening.play();
                });
                return;
            }
        } else if (_this.randomNumber > 4) {
            if (_this.dragCount < 3) {
                _this.clickSound.play();
                _this.draggingBlueBox();
            }
            else {
                _this.blueBox.events.onDragStop.removeAll();
                _this.blueBox.destroy();
                _this.blueBox = _this.add.sprite(75, 75, 'blueBox');
                _this.blueBox.scale.setTo(1.3, 1.3);
                _this.blueObjects.push(_this.blueBox);
                _this.tweenRemainingPositions();
                _this.time.events.add(1000, function () {
                    _this.tweening.play();
                });
                return;
            }
        }
        _this.blueBox = _this.add.sprite(75, 75, 'blueBox');
        _this.blueBox.scale.setTo(1.3, 1.3);

        _this.blueObjects.push(_this.blueBox);

        _this.blueBox.inputEnabled = true;
        _this.blueBox.input.enableDrag();
        _this.blueBox.events.onDragStop.add(_this.dragBlueBox, _this);
    },

    draggingBlueBox: function () {
        _this.counterCelebrationSound.currentTime = 0;

        if (_this.squareBoxArray.length > 0) {
            var pos = _this.squareBoxArray[0];
            _this.blueBox.position.x = pos.x;
            _this.blueBox.position.y = pos.y;

            _this.blueBox.destroy();
            _this.blueBox = _this.add.sprite(pos.x, pos.y, 'blueBox');
            _this.blueBox.frame = 0;

            _this.counterCelebrationSound.play();

            _this.blueObjects.push(_this.blueBox);
            _this.panel1.addChild(_this.blueBox);
            _this.squareBoxArray.shift();
        }
    },

    tweenRemainingPositions: function () {
        _this.blueBox = _this.add.sprite(75, 75, 'blueBox');
        _this.blueBox.scale.setTo(1.3, 1.3);

        _this.blueObjects.push(_this.blueBox);

        if (_this.squareBoxArray.length > 0) {
            var pos = _this.squareBoxArray[0];
            _this.blueBox.position.x = pos.x;
            _this.blueBox.position.y = pos.y;

            _this.blueBox.destroy();
            _this.blueBox = _this.add.sprite(pos.x, pos.y, 'blueBox');
            _this.blueBox.frame = 0;
            _this.panel1.addChild(_this.blueBox);

            _this.squareBoxArray.shift();

            var tween = _this.add.tween(_this.blueBox);
            tween.to(pos, 100, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(function () {
                _this.tweenRemainingPositions();
            }, _this);
        }
    },

    //Tick button in the question screen and the evaluation of the top box or workspace.
    tickFirstEvaluation: function (target) {
        console.log("tick first evaluation");

        if (_this.squareBoxArray.length === 0) {
            _this.counterCelebrationSound.play();
            target.events.onInputDown.removeAll();
            _this.tick.destroy();
            _this.blueBox.destroy();

            _this.time.events.add(1500, function () {
                let hand = _this.add.image(_this.storeFirstPosition.x, _this.storeFirstPosition.y + 10, 'hand');

                let tweenX = _this.storeFirstPosition.x + 35;
                let duration = 1000;
                if (_this.randomNumber == 3) { tweenX = _this.storeFirstPosition.x + (30 * 2); duration = 1000; }
                if (_this.randomNumber == 4) { tweenX = _this.storeFirstPosition.x + (30 * 3); duration = 1500; }
                if (_this.randomNumber == 5) { tweenX = _this.storeFirstPosition.x + (30 * 4); duration = 1800; }
                if (_this.randomNumber == 6) { tweenX = _this.storeFirstPosition.x + (30 * 5); duration = 2000; }
                if (_this.randomNumber == 7) { tweenX = _this.storeFirstPosition.x + (30 * 6); duration = 2000; }
                if (_this.randomNumber == 8) { tweenX = _this.storeFirstPosition.x + (30 * 7); duration = 2200; }
                if (_this.randomNumber == 9) { tweenX = _this.storeFirstPosition.x + (30 * 8); duration = 2500; }
                if (_this.randomNumber == 10) { tweenX = _this.storeFirstPosition.x + (30 * 9); duration = 2800; }

                hand.scale.setTo(0.9, 0.8);
                _this.panel1.addChild(hand);
                _this.handTween = _this.add.tween(hand);

                _this.handTween.to({ x: _this.storeFirstPosition.x, x: tweenX }, duration, 'Linear', true, 0);

                _this.handTween.onComplete.add(function () {
                    _this.clickSound.play();
                    hand.destroy();
                });
            });

            _this.AnswerBox2 = _this.add.sprite(680, 65, 'textBox2');
            if (_this.randomNumber.toString().length === 1) {
                _this.questionText = _this.add.text(35, 20, _this.randomNumber + '   =');
                _this.questionText1 = _this.add.text(55, 15, '²');
            } else {
                _this.questionText = _this.add.text(25, 20, _this.randomNumber + '   =');
                _this.questionText1 = _this.add.text(55, 15, ' ²');

            }
            _this.applyingStyleBlue(_this.questionText);
            _this.applyingStyleBlue(_this.questionText1);

            _this.AnswerBox2.addChild(_this.questionText);
            _this.AnswerBox2.addChild(_this.questionText1);

            _this.AnswerBox2.events.onInputDown.add(function () {
                _this.clickSound.play();
                _this.AnswerBox2.frame = 1;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
                for (let i = 1; i <= 10; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
                }
            });

            _this.pauseVoice();
            _this.time.events.add(1300, function () {
                _this.Ask_Question18.play();
            });

            _this.Question_flag = 18;
            _this.addNumberPad2();
        } else {
            _this.wrongSound.play();
        }

    },

    SquareRootScreen: function () {
        _this.power = "\u{00B2}";

        _this.rootScreen++;

        _this.pauseVoice();
        // _this.time.events.add(1200, function () {
        _this.Ask_Question5.play();
        // });


        _this.Question_flag = 5;

        console.log("AskingQuestion squareRoot")

        _this.rootSquare = true;

        _this.perfectSquares = [4, 9, 16, 25, 36, 49];

        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        if (_this.rootScreen > 1) {
            console.log('secondddddddddddddddddd')
            if (_this.perfectSquares.includes(_this.storeFirst)) {
                console.log("The number is a perfect square.");
                var select = [5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
                Phaser.ArrayUtils.shuffle(select);

                _this.sqRootNumber = select[0];
            }
            else if (!_this.perfectSquares.includes(_this.storeFirst)) {
                console.log("The number is not a perfect square.");
                var select = [4, 9, 16, 25, 36, 49];
                Phaser.ArrayUtils.shuffle(select);

                _this.sqRootNumber = select[0];
            }
        } else {

            console.log('firstttttttttttttttt')
            _this.sqRootNumber = generateRandomNumber(4, 60);
            console.log("Random Number: " + _this.sqRootNumber);

            _this.storeFirst = _this.sqRootNumber;

            if (_this.firstQ == 0) {
                _this.pauseVoice();
                // _this.time.events.add(2800, function () {
                _this.Ask_Question19.play();
                _this.Question_flag = 19;
                let hand = _this.add.image(900, 100, 'hand');
                _this.handTween = _this.add.tween(hand);
                _this.handTween.to({ x: 850, y: 80 }, 800, 'Linear', true, 0);
                _this.handTween.onComplete.add(function () {
                    _this.clickSound.play();
                    hand.destroy();
                });
                // });
                _this.firstQ++;
            }
        }

        _this.sqRoot = Math.sqrt(_this.sqRootNumber);

        _this.squareRoot = Math.round(Math.sqrt(_this.sqRootNumber));
        console.log("Square Root: " + _this.squareRoot);

        _this.QuestionBox = _this.add.sprite(50, 55, 'textBox1');
        if (_this.sqRootNumber.toString().length === 1) {
            _this.questionText = _this.add.text(25, 20, '√ ');
            _this.questionText1 = _this.add.text(42, -6, '___');
            _this.questionText2 = _this.add.text(55, 23, _this.sqRootNumber);
        } else {
            _this.questionText = _this.add.text(20, 20, '√ ');
            _this.questionText1 = _this.add.text(37, -6, '___');
            _this.questionText2 = _this.add.text(45, 23, _this.sqRootNumber);
        }

        _this.applyingStyleBlue(_this.questionText);
        _this.applyingStyleBlue(_this.questionText1);
        _this.applyingStyleBlue(_this.questionText2);
        _this.questionText.fontSize = '36px';
        _this.questionText.fontWeight = 'bold';
        _this.QuestionBox.addChild(_this.questionText);
        _this.QuestionBox.addChild(_this.questionText1);
        _this.QuestionBox.addChild(_this.questionText2);


        _this.panel2 = _this.add.sprite(40, 155, 'panel2');
        _this.panel3 = _this.add.sprite(420, 155, 'panel3');

        _this.displayGridQ();

        _this.squareBox = _this.add.sprite(830, 58, 'squareBox');
        _this.squareBox.inputEnabled = true;
        _this.squareBox.input.useHandCursor = true;

        _this.squareBox.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.squareBox.frame = 1;
            _this.panel2.destroy();
            _this.panel3.destroy();
            _this.squarePanel = _this.add.sprite(50, 155, 'panel1');
            _this.FormSquare();
        });

        _this.gridGroup = _this.add.group();



    },

    displayGridQ: function () {
        console.log('display row question')

        _this.objectX = 20;
        _this.objectY = 6;

        for (var i = 0; i < _this.sqRootNumber; i++) {
            _this.Qgrid = _this.add.sprite(_this.objectX, _this.objectY, 'blueBox');
            _this.panel2.addChild(_this.Qgrid);

            _this.objectX += 33;

            if (_this.objectX >= 350) {
                _this.objectY += 30;
                _this.objectX = 20;
            }
        }

    },

    FormSquare: function () {

        _this.pauseVoice();
        // _this.time.events.add(1000, function () {
        _this.Ask_Question6.play();
        // });

        _this.Question_flag = 6;

        _this.squareBox.destroy();

        _this.thumbsUp = _this.add.sprite(770, 65, 'thumbsUp');
        _this.thumbsUp.inputEnabled = true;
        _this.thumbsUp.input.useHandCursor = true;
        _this.thumbsUp.events.onInputDown.add(_this.thumbsUpEvaluation, _this);

        _this.thumbsDown = _this.add.sprite(840, 65, 'thumbsDown');
        _this.thumbsDown.inputEnabled = true;
        _this.thumbsDown.input.useHandCursor = true;
        _this.thumbsDown.events.onInputDown.add(_this.thumbsDownEvaluation, _this);


        _this.objectX = 300; // Initial X position of the object
        _this.objectY = 100; // Y position of the object

        if (_this.squareRoot == 2) { _this.objectX += 80; _this.objectY += 15; }
        if (_this.squareRoot == 3) { _this.objectX += 70; _this.objectY += 5; }
        if (_this.squareRoot == 4) { _this.objectX += 60; _this.objectY -= 5; }
        if (_this.squareRoot == 5) { _this.objectX += 40; _this.objectY -= 15; }
        if (_this.squareRoot == 6) { _this.objectX += 30; _this.objectY -= 25; }
        if (_this.squareRoot == 7) { _this.objectX += 20; _this.objectY -= 45; }
        if (_this.squareRoot == 8) { _this.objectX += 10; _this.objectY -= 60; }
        if (_this.squareRoot == 9) { _this.objectY -= 75; }
        if (_this.squareRoot == 10) { _this.objectX -= 10; _this.objectY -= 90; }

        _this.squareShapeArray = [];

        for (var row = 0; row < _this.squareRoot; row++) {
            for (var col = 0; col < _this.squareRoot; col++) {
                _this.gridBox = _this.add.sprite(_this.objectX, _this.objectY, 'blueBox');

                _this.squarePanel.addChild(_this.gridBox);

                _this.pair = { x: _this.objectX, y: _this.objectY };

                // Push the pair into the squareShapeArray array
                _this.squareShapeArray.push(_this.pair);

                _this.objectX += 29;
            }
            _this.objectY += 29;
            _this.objectX = _this.squarePanel.getChildAt(0).x;
        }

        if (_this.squareShapeArray.length === _this.sqRootNumber) {
            console.log('yess')
            _this.perfectSquareFlag = true;
        } else {
            console.log('noooo')
            _this.perfectSquareFlag = false;
            var extra = _this.squareShapeArray.length - _this.sqRootNumber;
            console.log(extra)
            if (extra > 0) {
                console.log('+ve')
                for (let i = 1; i <= extra; i++) {
                    _this.squarePanel.removeChildAt(_this.squareShapeArray.length - i);
                }
            } else {
                console.log('-ve')
                for (let i = -1; i >= extra; i--) {
                    _this.gridBox = _this.add.sprite(_this.objectX, _this.objectY, 'blueBox');
                    _this.squarePanel.addChild(_this.gridBox);

                    _this.pair = { x: _this.objectX, y: _this.objectY };

                    // Push the pair into the squareShapeArray array
                    _this.squareShapeArray.push(_this.pair);

                    _this.objectX += 29;

                }
            }
        }
    },

    thumbsUpEvaluation: function (target) {
        console.log("thumbs Up evaluation");
        _this.clickSound.play();
        _this.thumbsUp.frame = 1;
        _this.thumbsDown.frame = 0;

        if (_this.perfectSquareFlag === true) { _this.right = true; }
        else { _this.right = false; }


        if (_this.right) {
            _this.thumbsUp.events.onInputDown.removeAll();
            _this.thumbsDown.events.onInputDown.removeAll();

            _this.counterCelebrationSound.play();

            _this.QuestionBox.destroy();
            _this.thumbsUp.destroy();
            _this.thumbsDown.destroy();

            _this.pauseVoice();
            // _this.time.events.add(1000, function () {
            _this.Ask_Question12.play();
            _this.Question_flag = 12;
            // });

            _this.AnswerBox3 = _this.add.sprite(60, 65, 'textBox2');
            if (_this.sqRootNumber.toString().length === 1) {
                _this.questionText = _this.add.text(25, 20, '√ ');
                _this.questionText1 = _this.add.text(42, -6, '___');
                _this.questionText2 = _this.add.text(55, 23, _this.sqRootNumber + ' =');
            } else {
                _this.questionText = _this.add.text(20, 20, '√ ');
                _this.questionText1 = _this.add.text(37, -6, '___');
                _this.questionText2 = _this.add.text(45, 23, _this.sqRootNumber + ' =');
            }
            _this.applyingStyleBlue(_this.questionText);
            _this.applyingStyleBlue(_this.questionText1);
            _this.applyingStyleBlue(_this.questionText2);
            _this.questionText.fontSize = '34px';
            _this.questionText.fontWeight = 'bold';

            _this.AnswerBox3.addChild(_this.questionText);
            _this.AnswerBox3.addChild(_this.questionText1);
            _this.AnswerBox3.addChild(_this.questionText2);

            _this.AnswerBox3.events.onInputDown.add(function () {
                _this.clickSound.play();
                _this.AnswerBox3.frame = 1;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
                for (let i = 1; i <= 10; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
                }
            });

            _this.addNumberPad3();
        } else if (_this.right === false) {
            _this.wrongSound.play();

            _this.time.events.add(500, function () {
                _this.thumbsUp.frame = 0;
            });
        }


    },

    thumbsDownEvaluation: function (target) {
        console.log("thumbs Down evaluation");
        _this.clickSound.play();
        _this.thumbsUp.frame = 0;
        _this.thumbsDown.frame = 1;



        if (_this.perfectSquareFlag === false) { _this.wrong = true; }
        else { _this.wrong = false; }

        if (_this.wrong) {
            _this.thumbsUp.events.onInputDown.removeAll();
            _this.thumbsDown.events.onInputDown.removeAll();

            _this.pauseVoice();
            // _this.time.events.add(500, function () {
            _this.Ask_Question14.play();
            _this.Question_flag = 14;
            // });

            _this.counterCelebrationSound.play();

            _this.time.events.add(2500, () => {
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
                if (_this.numberOfQuestions == 6) {
                    _this.time.events.add(3000, () => {
                        _this.state.start('score', true, false, gameID, _this.microConcepts);
                        // _this.state.start('NS_SQ_CUB_G8Score');
                    });
                }
                else {
                    _this.time.events.add(3000, () => {
                        _this.QuestionBox.destroy();
                        _this.thumbsUp.destroy();
                        _this.thumbsDown.destroy();
                        _this.squarePanel.destroy();
                        _this.NextQuestion();
                    });
                }
            });


        } else if (_this.wrong === false) {
            _this.wrongSound.play();

            _this.time.events.add(500, function () {
                _this.thumbsDown.frame = 0;
            });
        }
    },

    CubeScreen: function () {
        _this.power = "\u{00B2}";

        _this.pauseVoice();
        _this.time.events.add(1200, function () {
            _this.Ask_Question7.play();
        });

        _this.Ask_Question7.addEventListener('ended', () => {
            _this.Ask_Question8.play();
        });

        // _this.time.events.add(3400, function () {
        //     _this.Ask_Question8.play();

        // });

        _this.Question_flag = 7;
        _this.Question_flag = 8;

        _this.pauseVoice();
        _this.time.events.add(3000, function () {
            _this.addNumberPad();
        });
        console.log("AskingQuestion square")

        _this.cubeFlag = true;

        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        // Generate a random number between 2 and 17 (inclusive)
        _this.NumberC = generateRandomNumber(2, 3);
        console.log("Random Number: " + _this.NumberC);

        // Calculate the square of the random number
        _this.CubeNumber = Math.pow(_this.NumberC, 3);

        console.log("Cube: " + _this.CubeNumber);

        _this.QuestionBox = _this.add.sprite(55, 55, 'textBox1');

        _this.questionText = _this.add.text(40, 20, _this.NumberC);
        _this.questionText1 = _this.add.text(60, 13, '3');

        _this.applyingStyleBlue(_this.questionText);
        _this.applyingStyleBlue(_this.questionText1);
        _this.questionText.fontSize = '32px';
        _this.questionText1.fontSize = '22px';
        _this.QuestionBox.addChild(_this.questionText);
        _this.QuestionBox.addChild(_this.questionText1);


        _this.panel1 = _this.add.sprite(50, 155, 'panel1');

        _this.AnswerBox1 = _this.add.sprite(780, 55, 'textBox3');
        _this.AnswerBox1.inputEnabled = true;
        _this.AnswerBox1.input.useHandCursor = true;

        _this.AnswerBox1.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.AnswerBox1.frame = 1;
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
            for (let i = 1; i <= 10; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
            }
        });

    },

    CubeRowGrid: function () {
        console.log('display cube row grid')

        _this.pauseVoice();
        _this.time.events.add(1200, function () {
            _this.Ask_Question9.play();
        });

        _this.Question_flag = 9;

        _this.objectX = 300;
        _this.objectY = 140;

        if (_this.NumberC == 2) { _this.objectX += 80; }
        if (_this.NumberC == 3) { _this.objectX += 70; }
        if (_this.NumberC == 4) { _this.objectX += 60; }

        for (var i = 0; i < _this.NumberC; i++) {
            _this.pinkBox = _this.add.sprite(_this.objectX, _this.objectY, 'pinkBox');
            _this.pinkBox.frame = 1;
            _this.panel1.addChild(_this.pinkBox);

            _this.objectX += 34;
        }

        _this.drawLineL();

        _this.time.events.add(1000, function () {
            _this.addNumberPad();
        });

        _this.AnswerBox1.inputEnabled = true;
        _this.AnswerBox1.input.useHandCursor = true;

        _this.AnswerBox1.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.AnswerBox1.frame = 1;
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
            for (let i = 1; i <= 10; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
            }
        });

        _this.cubeRow = true;
    },

    CubeColumnGrid: function () {
        _this.destroyL();
        console.log('display col grid')

        var cubeHeight = 30; // Height of each cube
        var cubeWidth = 52; // Width of each cube
        var rowCount = _this.NumberC; // Number of rows

        // Calculate the total height of the cube structure
        var totalHeight = cubeHeight * rowCount;

        // Calculate the starting position for the cube structure
        var startX = _this.world.centerX - cubeWidth / 2;
        var startY = _this.world.centerY - totalHeight / 2;

        var startX = _this.world.centerX - cubeWidth / 2;
        var startYBack = 250;
        var startYFront = 265;

        // // for (var i = 0; i < _this.NumberC; i++) {
        //     for (var row = rowCount - 1; row >= 0; row--) {
        //         var posY = startY + cubeHeight * row;
        //         var cube = _this.add.sprite(startX - 40, posY + 20, 'pinkBox');
        //         _this.pinkObjects.push(cube);
        //     }
        //     // startX += 34;
        // // }
        if (_this.NumberC === 2) {
            var numRows = 1; var numCol = 2;

            var cubeGroup = _this.add.group();
            for (var i = 0; i < numCol; i++) {//2
                for (var row = numRows - 1; row >= 0; row--) {// breadth 2
                    // Calculate the position of the current row in the back
                    var posYBack = startYBack + cubeHeight * row;

                    // Create a cube in the current row at the back
                    var cubeBack = _this.add.sprite(startX - 50, posYBack + 20, 'pinkBox');

                    // Set any additional properties or animations for the cubeBack
                    _this.pinkObjects.push(cubeBack);
                    // Add the cubeBack to the cube group
                    cubeGroup.add(cubeBack);
                }
                startX += 34;
            }

            // // // Create the back column and rows
            for (var i = 0; i < numCol; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the front
                    var posYFront = startYFront + cubeHeight * row;

                    // Create a cube in the current row at the front
                    var cubeFront = _this.add.sprite(startX - 135, posYFront + 20, 'pinkBox');

                    // Set any additional properties or animations for the cubeFront
                    _this.pinkObjects.push(cubeFront);
                    // Add the cubeFront to the cube group
                    cubeGroup.add(cubeFront);
                }
                startX += 34;
            }
        }

        if (_this.NumberC === 3) {
            var numRows = 1; var numCol = 3;

            var cubeGroup = _this.add.group();
            for (var i = 0; i < numCol; i++) {//2
                for (var row = numRows - 1; row >= 0; row--) {// breadth 2
                    // Calculate the position of the current row in the back
                    var posYBack = startYBack + cubeHeight * row;

                    // Create a cube in the current row at the back

                    var cubeBack = _this.add.sprite(startX - 50, posYBack, 'pinkBox');

                    // Set any additional properties or animations for the cubeBack
                    _this.pinkObjects.push(cubeBack);
                    // Add the cubeBack to the cube group
                    cubeGroup.add(cubeBack);
                }
                startX += 34;
            }

            // // // Create the back column and rows
            for (var i = 0; i < numCol; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the front
                    var posYFront = startYFront + cubeHeight * row;

                    // Create a cube in the current row at the front
                    var cubeFront = _this.add.sprite(startX - 170, posYFront, 'pinkBox');
                    // Set any additional properties or animations for the cubeFront
                    _this.pinkObjects.push(cubeFront);
                    // Add the cubeFront to the cube group
                    cubeGroup.add(cubeFront);
                }
                startX += 34;
            }

            for (var i = 0; i < numCol; i++) {//3
                for (var row = numRows - 1; row >= 0; row--) {//1
                    // Calculate the position of the current row in the front
                    var posYFront = startYFront + cubeHeight * row;

                    // Create a cube in the current row at the front
                    var cubeFront = _this.add.sprite(startX - 290, posYFront + 15, 'pinkBox');
                    // Set any additional properties or animations for the cubeFront
                    _this.pinkObjects.push(cubeFront);
                    // Add the cubeFront to the cube group
                    cubeGroup.add(cubeFront);
                }
                startX += 34;
            }
        }

        _this.drawLineB();

        _this.pauseVoice();
        _this.time.events.add(1200, function () {
            _this.Ask_Question20.play();
            _this.Question_flag = 20;
            _this.addNumberPad();
        });

        _this.AnswerBox1.inputEnabled = true;
        _this.AnswerBox1.input.useHandCursor = true;

        _this.AnswerBox1.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.AnswerBox1.frame = 1;
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
            for (let i = 1; i <= 10; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
            }
        });

        _this.cubeCol = true;
    },

    CubeHeightGrid: function () {

        _this.destroyB();

        if (_this.NumberC === 2) {
            var cubeHeight = 30; // Height of each cube
            var cubeWidth = 52; // Width of each cube
            var numRows = _this.NumberC; // Number of rows

            // Calculate the total height of the cube structure
            var totalHeight = cubeHeight * numRows;

            // Calculate the starting position for the cube structure
            var startX = _this.world.centerX - cubeWidth / 2;
            var startYBack = _this.world.centerY - totalHeight / 2;
            var startYFront = _this.world.centerY + totalHeight / 2;

            // Create a group to hold the cube objects
            var cubeGroup = _this.add.group();

            for (var i = 0; i < _this.NumberC; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the back
                    var posYBack = startYBack + cubeHeight * row;

                    // Create a cube in the current row at the back
                    var cubeBack = _this.add.sprite(startX - 50, posYBack, 'pinkBox');
                    // Set any additional properties or animations for the cubeBack
                    _this.pinkObjects.push(cubeBack);
                    // Add the cubeBack to the cube group
                    cubeGroup.add(cubeBack);
                }
                startX += 34;
            }

            // Create the back column and rows
            for (var i = 0; i < _this.NumberC; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the front
                    var posYFront = startYFront + cubeHeight * row;

                    // Create a cube in the current row at the front
                    var cubeFront = _this.add.sprite(startX - 135, posYFront - 45, 'pinkBox');
                    // Set any additional properties or animations for the cubeFront
                    _this.pinkObjects.push(cubeFront);
                    // Add the cubeFront to the cube group
                    cubeGroup.add(cubeFront);
                }
                startX += 34;
            }

        }

        if (_this.NumberC === 3) {
            var cubeHeight = 30; // Height of each cube
            var cubeWidth = 52; // Width of each cube
            var numRows = _this.NumberC; // Number of rows

            // Calculate the total height of the cube structure
            var totalHeight = cubeHeight * numRows;

            // Calculate the starting position for the cube structure
            var startX = _this.world.centerX - cubeWidth / 2;
            var startYBack = _this.world.centerY - totalHeight;
            var startYMiddle = _this.world.centerY - totalHeight / 2;
            var startYFront = _this.world.centerY;

            // Create a group to hold the cube objects
            var cubeGroup = _this.add.group();

            // Create the back column and rows
            for (var i = 0; i < _this.NumberC; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the back
                    var posYBack = startYBack + cubeHeight * row;

                    // Create a cube in the current row at the back
                    var cubeBack = _this.add.sprite(startX - 45, posYBack + 35, 'pinkBox');
                    // Set any additional properties or animations for the cubeBack
                    _this.pinkObjects.push(cubeBack);
                    // Add the cubeBack to the cube group
                    cubeGroup.add(cubeBack);
                }
                startX += 34;
            }

            // Create the middle column and rows
            for (var i = 0; i < _this.NumberC; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the middle
                    var posYMiddle = startYMiddle + cubeHeight * row;

                    // Create a cube in the current row in the middle
                    var cubeMiddle = _this.add.sprite(startX - 165, posYMiddle + 5, 'pinkBox');
                    // Set any additional properties or animations for the cubeMiddle
                    _this.pinkObjects.push(cubeMiddle);
                    // Add the cubeMiddle to the cube group
                    cubeGroup.add(cubeMiddle);
                }
                startX += 34;
            }

            // Create the front column and rows
            for (var i = 0; i < _this.NumberC; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row at the front
                    var posYFront = startYFront + cubeHeight * row;

                    // Create a cube in the current row at the front
                    var cubeFront = _this.add.sprite(startX - 285, posYFront - 25, 'pinkBox');
                    // Set any additional properties or animations for the cubeFront
                    _this.pinkObjects.push(cubeFront);
                    // Add the cubeFront to the cube group
                    cubeGroup.add(cubeFront);
                }
                startX += 34;
            }

        }

        _this.drawLineH();

        _this.time.events.add(2500, function () {
            cubeGroup.destroy();
            _this.CubeLayerGrid();
        });
    },

    drawLineL: function () {
        if (_this.NumberC == 2) {
            var x = 430; // Replace with your desired x position
            var y = 360; // Replace with your desired y position
            var length = 70; // Replace with the desired length in pixels
        }
        if (_this.NumberC == 3) {
            var x = 420; // Replace with your desired x position
            var y = 360; // Replace with your desired y position
            var length = 100; // Replace with the desired length in pixels
        }


        _this.graphics = _this.add.graphics(0, 0);

        // Draw the line
        _this.graphics.lineStyle(4, 0xFF0000, 1); // 2px thick, red color
        _this.graphics.moveTo(x, y);
        _this.graphics.lineTo(x + length, y);

        // Add the text
        _this.text = _this.add.text(x + length / 2, y + 5, "l", {
            font: "24px Arial",
            fill: "#FF0000"  // Red color "#FF0000"
        });
        _this.text.anchor.setTo(0.5, 0);


    },

    drawLineB: function () {
        if (_this.NumberC == 2) {
            var x = 385;
            var y = 350;

            var x1 = 465;
            var y1 = 310;

            var length = 70;
            var length2 = 35;
            var breadth = 40;
        }
        if (_this.NumberC == 3) {
            var x = 365;
            var y = 345;

            var x1 = 485;
            var y1 = 295;

            var length = 100;
            var length2 = 45;
            var breadth = 50;
        }



        _this.graphics2 = _this.add.graphics(0, 0);
        _this.graphics3 = _this.add.graphics(0, 0);

        // Draw the line
        _this.graphics2.lineStyle(4, 0xFF0000, 1); // 2px thick, red color
        _this.graphics2.moveTo(x, y);
        _this.graphics2.lineTo(x + length, y);

        // Draw slanting line (diagonal)
        drawLine(x1 + breadth, y1, x1, y1 + length2);

        function drawLine(x1, y1, x2, y2) {
            _this.graphics3.lineStyle(4, 0xFF0000, 1); // 2px thick, green color
            _this.graphics3.moveTo(x1, y1);
            _this.graphics3.lineTo(x2, y2);
        }

        // Add the text for length
        _this.text1 = _this.add.text(x + length / 2, y + 5, "l", {
            font: "24px Arial",
            fill: "#FF0000"  // Red color "#FF0000"
        });
        // Add the text for breadth
        _this.text2 = _this.add.text(x1 + length / 2, y1 + 15, "b", {
            font: "24px Arial",
            fill: "#FF0000"  // Red color "#FF0000"
        });

        _this.text1.anchor.setTo(0.5, 0);
        _this.text2.anchor.setTo(0.5, 0);


    },

    drawLineH: function () {
        if (_this.NumberC == 2) {
            var x = 385; // length x 
            var y = 350; // length y 

            var x1 = 465; // breadth x 
            var y1 = 310; // breadth y 

            var x2 = 505; // height x 
            var y2 = 240; // height y 
            var y3 = 300; // height y

            var length = 70;
            var length2 = 35;
            var breadth = 40;


        }
        if (_this.NumberC == 3) {
            var x = 370;
            var y = 370;

            var x1 = 490; // breadth x 
            var y1 = 323; // breadth y 

            var x2 = 545; // height x 
            var y2 = 215; // height y 
            var y3 = 305; // height y

            var length = 100;
            var length2 = 45;
            var breadth = 50;
        }

        var graphics;

        graphics = _this.add.graphics(0, 0);

        // Draw the line
        graphics.lineStyle(3, 0xFF0000, 1); // 2px thick, red color
        graphics.moveTo(x, y);
        graphics.lineTo(x + length, y);

        // Draw slanting line (diagonal)
        drawLineforBreadth(x1 + breadth, y1, x1, y1 + length2);

        function drawLineforBreadth(x1, y1, x2, y2) {
            graphics.lineStyle(3, 0xFF0000, 1); // 2px thick, green color
            graphics.moveTo(x1, y1);
            graphics.lineTo(x2, y2);
        }

        drawLineforHeight(x2, y2, y3);

        function drawLineforHeight(x2, y2, y3) {
            graphics.lineStyle(3, 0xFF0000, 1); // Customize thickness and color here
            graphics.moveTo(x2, y2);
            graphics.lineTo(x2, y3);
        }


        // Add the text for length
        var text1 = _this.add.text(x + length / 2, y + 5, "l", {
            font: "24px Arial",
            fill: "#FF0000"  // Red color "#FF0000"
        });

        // Add the text for breadth
        var text2 = _this.add.text(x1 + length / 2, y1 + 15, "b", {
            font: "24px Arial",
            fill: "#FF0000"  // Red color "#FF0000"
        });
        // Add the text for height
        var text3 = _this.add.text(x2 + length2 / 2, y2 + 30, "h", {
            font: "24px Arial",
            fill: "#FF0000"  // Red color "#FF0000"
        });

        text1.anchor.setTo(0.5, 0);
        text2.anchor.setTo(0.5, 0);
        text3.anchor.setTo(0.5, 0);

        _this.destroyGraphicsAndText(graphics, text1, text2, text3);

    },

    destroyL: function () {
        _this.graphics.destroy();
        _this.text.destroy();
    },

    destroyB: function () {
        _this.graphics2.destroy();
        _this.graphics3.destroy();
        _this.text1.destroy();
        _this.text2.destroy();
    },

    destroyGraphicsAndText: function (graphics, text1, text2, text3) {
        _this.time.events.add(2500, function () {
            graphics.destroy();
            text1.destroy();
            text2.destroy();
            text3.destroy();
        });
    },

    CubeLayerGrid: function () {
        console.log('display layer grid')

        if (_this.NumberC === 2) {
            var cubeHeight = 30; // Height of each cube
            var cubeWidth = 52; // Width of each cube
            var numRows = _this.NumberC; // Number of rows

            // Calculate the total height of the cube structure
            var totalHeight = cubeHeight * numRows;

            // Calculate the starting position for the cube structure
            var startX = _this.world.centerX - cubeWidth / 2;
            var startYBack = _this.world.centerY - totalHeight / 2;
            var startYFront = _this.world.centerY + totalHeight / 2;

            // Create a group to hold the cube objects
            var cubeGroup = _this.add.group();

            for (var i = 0; i < _this.NumberC; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the back
                    var posYBack = startYBack + cubeHeight * row;

                    // Create a cube in the current row at the back
                    var cubeBack = _this.add.sprite(startX - 150, posYBack, 'pinkBox');
                    // Set any additional properties or animations for the cubeBack
                    _this.pinkObjects.push(cubeBack);
                    // Add the cubeBack to the cube group
                    cubeGroup.add(cubeBack);
                }
                startX += 34;
            }

            // Create the back column and rows
            for (var i = 0; i < _this.NumberC; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the front
                    var posYFront = startYFront + cubeHeight * row;

                    // Create a cube in the current row at the front
                    var cubeFront = _this.add.sprite(startX - 235, posYFront - 45, 'pinkBox');
                    // Set any additional properties or animations for the cubeFront
                    _this.pinkObjects.push(cubeFront);
                    // Add the cubeFront to the cube group
                    cubeGroup.add(cubeFront);
                }
                startX += 34;
            }

            _this.EqualSign = _this.add.text(380, 100, '=');
            _this.applyingStyleBlue(_this.EqualSign);
            _this.EqualSign.fontSize = '50px';
            _this.panel1.addChild(_this.EqualSign)

        }

        if (_this.NumberC === 3) {
            var cubeHeight = 30; // Height of each cube
            var cubeWidth = 52; // Width of each cube
            var numRows = _this.NumberC; // Number of rows

            // Calculate the total height of the cube structure
            var totalHeight = cubeHeight * numRows;

            // Calculate the starting position for the cube structure
            var startX = _this.world.centerX - cubeWidth / 2;
            var startYBack = _this.world.centerY - totalHeight;
            var startYMiddle = _this.world.centerY - totalHeight / 2;
            var startYFront = _this.world.centerY;

            // Create a group to hold the cube objects
            var cubeGroup = _this.add.group();

            // Create the back column and rows
            for (var i = 0; i < _this.NumberC; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the back
                    var posYBack = startYBack + cubeHeight * row;

                    // Create a cube in the current row at the back
                    var cubeBack = _this.add.sprite(startX - 245, posYBack + 35, 'pinkBox');
                    // Set any additional properties or animations for the cubeBack
                    _this.pinkObjects.push(cubeBack);
                    // Add the cubeBack to the cube group
                    cubeGroup.add(cubeBack);
                }
                startX += 34;
            }

            // Create the middle column and rows
            for (var i = 0; i < _this.NumberC; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the middle
                    var posYMiddle = startYMiddle + cubeHeight * row;

                    // Create a cube in the current row in the middle
                    var cubeMiddle = _this.add.sprite(startX - 365, posYMiddle + 5, 'pinkBox');
                    // Set any additional properties or animations for the cubeMiddle
                    _this.pinkObjects.push(cubeMiddle);
                    // Add the cubeMiddle to the cube group
                    cubeGroup.add(cubeMiddle);
                }
                startX += 34;
            }

            // Create the front column and rows
            for (var i = 0; i < _this.NumberC; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row at the front
                    var posYFront = startYFront + cubeHeight * row;

                    // Create a cube in the current row at the front
                    var cubeFront = _this.add.sprite(startX - 485, posYFront - 25, 'pinkBox');
                    // Set any additional properties or animations for the cubeFront
                    _this.pinkObjects.push(cubeFront);
                    // Add the cubeFront to the cube group
                    cubeGroup.add(cubeFront);
                }
                startX += 34; 1
            }

            _this.EqualSign = _this.add.text(310, 100, '=');
            _this.applyingStyleBlue(_this.EqualSign);
            _this.EqualSign.fontSize = '50px';
            _this.panel1.addChild(_this.EqualSign)

        }

        // if (_this.NumberC === 4) {
        //     var cubeHeight = 30; // Height of each cube
        //     var cubeWidth = 52; // Width of each cube
        //     var numRows = _this.NumberC; // Number of rows

        //     // Calculate the total height of the cube structure
        //     var totalHeight = cubeHeight * numRows;

        //     // Calculate the starting position for the cube structure
        //     var startX = _this.world.centerX - cubeWidth / 2;
        //     var startYBack = _this.world.centerY - totalHeight * 1.5;
        //     var startYMiddleBack = _this.world.centerY - totalHeight / 2;
        //     var startYMiddleFront = _this.world.centerY + totalHeight / 2;
        //     var startYFront = _this.world.centerY + totalHeight * 1.5;

        //     // Create a group to hold the cube objects
        //     var cubeGroup = _this.add.group();

        //     // Create the back column and rows
        //     for (var i = 0; i < _this.NumberC; i++) {
        //         for (var row = numRows - 1; row >= 0; row--) {
        //             // Calculate the position of the current row in the back
        //             var posYBack = startYBack + cubeHeight * row;

        //             // Create a cube in the current row at the back
        //             var cubeBack = _this.add.sprite(startX - 350, posYBack + 120, 'pinkBox');
        //             // Set any additional properties or animations for the cubeBack

        //             // Add the cubeBack to the cube group
        //             cubeGroup.add(cubeBack);
        //         }
        //         startX += 34;
        //     }

        //     // Create the middle back column and rows
        //     for (var i = 0; i < _this.NumberC; i++) {
        //         for (var row = numRows - 1; row >= 0; row--) {
        //             // Calculate the position of the current row in the middle back
        //             var posYMiddleBack = startYMiddleBack + cubeHeight * row;

        //             // Create a cube in the current row in the middle back
        //             var cubeMiddleBack = _this.add.sprite(startX - 503, posYMiddleBack + 15.5, 'pinkBox');
        //             // Set any additional properties or animations for the cubeMiddleBack

        //             // Add the cubeMiddleBack to the cube group
        //             cubeGroup.add(cubeMiddleBack);
        //         }
        //         startX += 34;
        //     }

        //     // Create the middle front column and rows
        //     for (var i = 0; i < _this.NumberC; i++) {
        //         for (var row = numRows - 1; row >= 0; row--) {
        //             // Calculate the position of the current row in the middle front
        //             var posYMiddleFront = startYMiddleFront + cubeHeight * row;

        //             // Create a cube in the current row in the middle front
        //             var cubeMiddleFront = _this.add.sprite(startX - 657, posYMiddleFront - 89, 'pinkBox');
        //             // Set any additional properties or animations for the cubeMiddleFront

        //             // Add the cubeMiddleFront to the cube group
        //             cubeGroup.add(cubeMiddleFront);
        //         }
        //         startX += 34;
        //     }

        //     // Create the front column and rows
        //     for (var i = 0; i < _this.NumberC; i++) {
        //         for (var row = numRows - 1; row >= 0; row--) {
        //             // Calculate the position of the current row at the front
        //             var posYFront = startYFront + cubeHeight * row;

        //             // Create a cube in the current row at the front
        //             var cubeFront = _this.add.sprite(startX - 811, posYFront - 193, 'pinkBox');
        //             // Set any additional properties or animations for the cubeFront

        //             // Add the cubeFront to the cube group
        //             cubeGroup.add(cubeFront);
        //         }
        //         startX += 34;
        //     }
        //     _this.EqualSign = _this.add.text(280, 100, '=');
        //     _this.applyingStyleBlue(_this.EqualSign);
        //     _this.EqualSign.fontSize = '50px';
        //     _this.panel1.addChild(_this.EqualSign)
        // }

        _this.displayCubeSeperately();

        _this.cubeCol = true;
    },

    displayCubeSeperately: function () {
        console.log('display layers seperately and enter ans')

        var cubeHeight = 40; // Height of each cube
        var cubeWidth = 52; // Width of each cube
        var rowCount = _this.NumberC; // Number of rows

        // Calculate the total height of the cube structure
        var totalHeight = cubeHeight * rowCount;

        // Calculate the starting position for the cube structure
        var startX = _this.world.centerX - cubeWidth / 2;
        var startY = _this.world.centerY - totalHeight / 2;

        if (_this.NumberC == 2) {
            var divide = _this.CubeNumber / 2;
            for (var i = 0; i < divide; i++) {
                for (var row = rowCount - 1; row >= 0; row--) {
                    var posY = startY + cubeHeight * row;
                    var cube = _this.add.sprite(startX + 60, posY + 15, 'pinkBox');
                    _this.pinkObjects.push(cube);
                }
                startX += 50;
            }
        }
        if (_this.NumberC == 3) {
            var divide = _this.CubeNumber / 3;
            for (var i = 0; i < divide; i++) {
                for (var row = rowCount - 1; row >= 0; row--) {
                    var posY = startY + cubeHeight * row;
                    var cube = _this.add.sprite(startX - 30, posY + 15, 'pinkBox');
                    _this.pinkObjects.push(cube);
                }
                startX += 50;
            }
        }
        // if (_this.NumberC == 4) {
        //     var divide = _this.CubeNumber / 4;
        //     for (var i = 0; i < divide; i++) {
        //         for (var row = rowCount - 1; row >= 0; row--) {
        //             var posY = startY + (cubeHeight + 5) * row;
        //             var cube = _this.add.sprite(startX - 185, posY, 'pinkBox');
        //         }
        //         startX += 39;
        //     }
        // }

        _this.time.events.add(1500, function () {

            if (_this.NumberC === 2) {
                let hand = _this.add.image(_this.pinkObjects[0].x + 80, _this.pinkObjects[0].y + 10, 'hand');
                let duration = 2000;
                hand.scale.setTo(0.9, 0.8);
                _this.handTween = _this.add.tween(hand);
                _this.handTween.to({ x: _this.pinkObjects[0].x + 80, x: _this.pinkObjects[0].x + 260 }, duration, 'Linear', true, 0);

                _this.handTween.onComplete.add(function () {
                    _this.clickSound.play();
                    hand.destroy();
                });
            } else {
                let hand = _this.add.image(_this.pinkObjects[0].x + 40, _this.pinkObjects[0].y, 'hand');
                let duration = 2000;
                hand.scale.setTo(0.9, 0.8);
                _this.handTween = _this.add.tween(hand);
                _this.handTween.to({ x: _this.pinkObjects[0].x + 40, x: _this.pinkObjects[0].x + 300 }, duration, 'Linear', true, 0);

                _this.handTween.onComplete.add(function () {
                    _this.clickSound.play();
                    hand.destroy();
                });
            }



        });

        _this.AnswerBox1.destroy();
        _this.QuestionBox.destroy();

        _this.AnswerBox2 = _this.add.sprite(60, 65, 'textBox2');
        _this.questionText = _this.add.text(40, 20, _this.NumberC + '  =');
        _this.questionText1 = _this.add.text(60, 13, '3');

        _this.applyingStyleBlue(_this.questionText);
        _this.applyingStyleBlue(_this.questionText1);
        _this.questionText.fontSize = '32px';
        _this.questionText1.fontSize = '22px';
        _this.QuestionBox.addChild(_this.questionText);
        _this.QuestionBox.addChild(_this.questionText1);

        _this.AnswerBox2.addChild(_this.questionText);
        _this.AnswerBox2.addChild(_this.questionText1);

        _this.AnswerBox2.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.AnswerBox2.frame = 1;
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
            for (let i = 1; i <= 10; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
            }
        });

        _this.pauseVoice();
        _this.time.events.add(1300, function () {
            _this.Ask_Question21.play();
        });

        _this.Question_flag = 21;
        _this.addNumberPad2();


    },

    CubeRootScreen: function () {
        _this.power = "\u{00B2}";

        _this.rootSquare = false;

        _this.pauseVoice();
        // _this.time.events.add(1200, function () {
        _this.Ask_Question10.play();
        // });

        _this.Question_flag = 10;

        console.log("AskingQuestion cubeRoot")

        _this.rootCube = true;

        if (_this.rootScreen > 1) {
            if (_this.storeCube === 8 || _this.storeCube === 27) {
                console.log('perfect cube')
                var select = [9, 12, 16, 18, 20];
                Phaser.ArrayUtils.shuffle(select);

                _this.CubeRootNumber = select[0];
            } else {
                console.log('not a perfect cube')
                var select = [8, 27];
                Phaser.ArrayUtils.shuffle(select);

                _this.CubeRootNumber = select[0];
            }
        } else {
            var CubeNum = [8, 9, 12, 16, 18, 20, 27];
            Phaser.ArrayUtils.shuffle(CubeNum);

            _this.CubeRootNumber = CubeNum[0];

            if (_this.firstQ == 0) {
                _this.pauseVoice();
                // _this.time.events.add(3000, function () {
                _this.Ask_Question19.play();
                _this.Question_flag = 19;
                let hand = _this.add.image(900, 100, 'hand');
                _this.handTween = _this.add.tween(hand);
                _this.handTween.to({ x: 850, y: 80 }, 800, 'Linear', true, 0);
                _this.handTween.onComplete.add(function () {
                    _this.clickSound.play();
                    hand.destroy();
                });
                // });
                _this.firstQ++;
            }
        }

        _this.storeCube = _this.CubeRootNumber;
        console.log("Random Number: " + _this.CubeRootNumber);

        _this.cube = Math.cbrt(_this.CubeRootNumber);

        _this.cubeRoot = Math.round(Math.cbrt(_this.CubeRootNumber));

        console.log("Cube Root: " + _this.cubeRoot);

        _this.QuestionBox = _this.add.sprite(50, 55, 'textBox1');
        if (_this.CubeRootNumber.toString().length === 1) {
            _this.questionText0 = _this.add.text(24, 12, '3');
            _this.questionText = _this.add.text(25, 22, '√ ');
            _this.questionText1 = _this.add.text(41, -6, '___');
            _this.questionText2 = _this.add.text(55, 23, _this.CubeRootNumber);
        } else {
            _this.questionText0 = _this.add.text(21, 12, '3');
            _this.questionText = _this.add.text(20, 22, '√ ');
            _this.questionText1 = _this.add.text(36, -6, '___');
            _this.questionText2 = _this.add.text(45, 23, _this.CubeRootNumber);
        }

        _this.applyingStyleBlue(_this.questionText0);
        _this.applyingStyleBlue(_this.questionText);
        _this.applyingStyleBlue(_this.questionText1);
        _this.applyingStyleBlue(_this.questionText2);
        _this.questionText0.fontSize = '22px';
        _this.questionText.fontSize = '34px';
        _this.questionText.fontWeight = 'bold';
        _this.QuestionBox.addChild(_this.questionText0);
        _this.QuestionBox.addChild(_this.questionText);
        _this.QuestionBox.addChild(_this.questionText1);
        _this.QuestionBox.addChild(_this.questionText2);


        _this.panel2 = _this.add.sprite(40, 155, 'panel2');
        _this.panel3 = _this.add.sprite(420, 155, 'panel3');

        _this.displayGridCube();

        _this.squareBox = _this.add.sprite(830, 58, 'squareBox');
        _this.squareBox.inputEnabled = true;
        _this.squareBox.input.useHandCursor = true;

        _this.squareBox.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.squareBox.frame = 1;
            _this.panel2.destroy();
            _this.panel3.destroy();
            _this.squarePanel = _this.add.sprite(50, 155, 'panel1');

            if (_this.CubeRootNumber === 8 || _this.CubeRootNumber === 27) {
                _this.FormCube();
            } else {
                _this.FormCuboid();
            }
        });

        _this.gridGroup = _this.add.group();

    },

    displayGridCube: function () {
        console.log('display row question')

        _this.objectX = 30;
        _this.objectY = 20;

        for (var i = 0; i < _this.CubeRootNumber; i++) {
            _this.cubeGrid = _this.add.sprite(_this.objectX, _this.objectY, 'pinkBox');
            _this.panel2.addChild(_this.cubeGrid);

            _this.objectX += 45;

            if (_this.objectX >= 270) {
                _this.objectY += 50;
                _this.objectX = _this.panel2.getChildAt(0).x;
            }
        }

    },

    FormCube: function () {
        _this.pauseVoice();
        // _this.time.events.add(1000, function () {
        _this.Ask_Question11.play();
        // });
        _this.Question_flag = 11;

        _this.squareBox.destroy();

        _this.thumbsUp = _this.add.sprite(770, 65, 'thumbsUp');
        _this.thumbsUp.inputEnabled = true;
        _this.thumbsUp.input.useHandCursor = true;
        _this.thumbsUp.events.onInputDown.add(_this.thumbsUpEvaluation2, _this);

        _this.thumbsDown = _this.add.sprite(840, 65, 'thumbsDown');
        _this.thumbsDown.inputEnabled = true;
        _this.thumbsDown.input.useHandCursor = true;
        _this.thumbsDown.events.onInputDown.add(_this.thumbsDownEvaluation2, _this);


        if (_this.CubeRootNumber === 8) {
            var cubeHeight = 30; // Height of each cube
            var cubeWidth = 52; // Width of each cube
            var numRows = _this.cubeRoot; // Number of rows

            // Calculate the total height of the cube structure
            var totalHeight = cubeHeight * numRows;

            // Calculate the starting position for the cube structure
            var startX = _this.world.centerX - cubeWidth / 2;
            var startYBack = _this.world.centerY - totalHeight / 2;
            var startYFront = _this.world.centerY + totalHeight / 2;

            // Create a group to hold the cube objects
            var cubeGroup = _this.add.group();

            for (var i = 0; i < _this.cubeRoot; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the back
                    var posYBack = startYBack + cubeHeight * row;

                    // Create a cube in the current row at the back
                    var cubeBack = _this.add.sprite(startX - 50, posYBack, 'pinkBox');
                    // Set any additional properties or animations for the cubeBack
                    _this.pinkObjects.push(cubeBack);
                    // Add the cubeBack to the cube group
                    cubeGroup.add(cubeBack);
                }
                startX += 34;
            }

            // Create the back column and rows
            for (var i = 0; i < _this.cubeRoot; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the front
                    var posYFront = startYFront + cubeHeight * row;

                    // Create a cube in the current row at the front
                    var cubeFront = _this.add.sprite(startX - 135, posYFront - 45, 'pinkBox');
                    // Set any additional properties or animations for the cubeFront
                    _this.pinkObjects.push(cubeFront);
                    // Add the cubeFront to the cube group
                    cubeGroup.add(cubeFront);
                }
                startX += 34;
            }
        }

        if (_this.CubeRootNumber === 27) {
            var cubeHeight = 30; // Height of each cube
            var cubeWidth = 52; // Width of each cube
            var numRows = _this.cubeRoot; // Number of rows

            // Calculate the total height of the cube structure
            var totalHeight = cubeHeight * numRows;

            // Calculate the starting position for the cube structure
            var startX = _this.world.centerX - cubeWidth / 2;
            var startYBack = _this.world.centerY - totalHeight;
            var startYMiddle = _this.world.centerY - totalHeight / 2;
            var startYFront = _this.world.centerY;

            // Create a group to hold the cube objects
            var cubeGroup = _this.add.group();

            // Create the back column and rows
            for (var i = 0; i < _this.cubeRoot; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the back
                    var posYBack = startYBack + cubeHeight * row;

                    // Create a cube in the current row at the back
                    var cubeBack = _this.add.sprite(startX - 45, posYBack + 35, 'pinkBox');
                    // Set any additional properties or animations for the cubeBack
                    _this.pinkObjects.push(cubeBack);
                    // Add the cubeBack to the cube group
                    cubeGroup.add(cubeBack);
                }
                startX += 34;
            }

            // Create the middle column and rows
            for (var i = 0; i < _this.cubeRoot; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row in the middle
                    var posYMiddle = startYMiddle + cubeHeight * row;

                    // Create a cube in the current row in the middle
                    var cubeMiddle = _this.add.sprite(startX - 165, posYMiddle + 5, 'pinkBox');
                    // Set any additional properties or animations for the cubeMiddle
                    _this.pinkObjects.push(cubeMiddle);
                    // Add the cubeMiddle to the cube group
                    cubeGroup.add(cubeMiddle);
                }
                startX += 34;
            }

            // Create the front column and rows
            for (var i = 0; i < _this.cubeRoot; i++) {
                for (var row = numRows - 1; row >= 0; row--) {
                    // Calculate the position of the current row at the front
                    var posYFront = startYFront + cubeHeight * row;

                    // Create a cube in the current row at the front
                    var cubeFront = _this.add.sprite(startX - 285, posYFront - 25, 'pinkBox');
                    // Set any additional properties or animations for the cubeFront
                    _this.pinkObjects.push(cubeFront);
                    // Add the cubeFront to the cube group
                    cubeGroup.add(cubeFront);
                }
                startX += 34; 1
            }
        }

        _this.perfectCubeFlag = true;
    },

    FormCuboid: function () {
        console.log('cuboid')

        _this.pauseVoice();
        // _this.time.events.add(1000, function () {
        _this.Ask_Question11.play();
        // });

        _this.Question_flag = 11;

        _this.squareBox.destroy();

        _this.thumbsUp = _this.add.sprite(770, 65, 'thumbsUp');
        _this.thumbsUp.inputEnabled = true;
        _this.thumbsUp.input.useHandCursor = true;
        _this.thumbsUp.events.onInputDown.add(_this.thumbsUpEvaluation2, _this);

        _this.thumbsDown = _this.add.sprite(840, 65, 'thumbsDown');
        _this.thumbsDown.inputEnabled = true;
        _this.thumbsDown.input.useHandCursor = true;
        _this.thumbsDown.events.onInputDown.add(_this.thumbsDownEvaluation2, _this);

        var cubeHeight = 30; // Height of each cube
        var cubeWidth = 52; // Width of each cube


        // Calculate the total height of the cube structure
        var totalHeight = cubeHeight * numRows;

        // Calculate the starting position for the cube structure
        var startX = _this.world.centerX - cubeWidth / 2;
        var startYBack = 250;
        var startYFront = 265;

        // Create a group to hold the cube objects
        var cubeGroup = _this.add.group();

        if (_this.CubeRootNumber === 9) { var numRows = 1; var numCol = 3; }
        if (_this.CubeRootNumber === 12) { var numRows = 2; var numCol = 3; }
        if (_this.CubeRootNumber === 16) { var numRows = 2; var numCol = 4; }
        if (_this.CubeRootNumber === 18) { var numRows = 2; var numCol = 3; }
        if (_this.CubeRootNumber === 20) { var numRows = 5; var numCol = 2; }

        for (var i = 0; i < numCol; i++) {//2
            for (var row = numRows - 1; row >= 0; row--) {// breadth 2
                // Calculate the position of the current row in the back
                var posYBack = startYBack + cubeHeight * row;

                // Create a cube in the current row at the back
                if (_this.CubeRootNumber === 20) {
                    var cubeBack = _this.add.sprite(startX - 50, posYBack - 30, 'pinkBox');
                } else {
                    var cubeBack = _this.add.sprite(startX - 50, posYBack, 'pinkBox');
                }

                // Set any additional properties or animations for the cubeBack
                _this.pinkObjects.push(cubeBack);
                // Add the cubeBack to the cube group
                cubeGroup.add(cubeBack);
            }
            startX += 34;
        }

        // // // Create the back column and rows
        for (var i = 0; i < numCol; i++) {
            for (var row = numRows - 1; row >= 0; row--) {
                // Calculate the position of the current row in the front
                var posYFront = startYFront + cubeHeight * row;

                // Create a cube in the current row at the front
                if (_this.CubeRootNumber === 16) {
                    var cubeFront = _this.add.sprite(startX - 203, posYFront, 'pinkBox');
                } else if (_this.CubeRootNumber === 20) {
                    var cubeFront = _this.add.sprite(startX - 135, posYFront - 30, 'pinkBox');
                } else {
                    var cubeFront = _this.add.sprite(startX - 170, posYFront, 'pinkBox');
                }

                // Set any additional properties or animations for the cubeFront
                _this.pinkObjects.push(cubeFront);
                // Add the cubeFront to the cube group
                cubeGroup.add(cubeFront);
            }
            startX += 34;
        }

        if (_this.CubeRootNumber === 9 || _this.CubeRootNumber === 18) {
            // Create the back column and rows
            for (var i = 0; i < numCol; i++) {//3
                for (var row = numRows - 1; row >= 0; row--) {//1
                    // Calculate the position of the current row in the front
                    var posYFront = startYFront + cubeHeight * row;

                    // Create a cube in the current row at the front
                    var cubeFront = _this.add.sprite(startX - 290, posYFront + 15, 'pinkBox');
                    // Set any additional properties or animations for the cubeFront
                    _this.pinkObjects.push(cubeFront);
                    // Add the cubeFront to the cube group
                    cubeGroup.add(cubeFront);
                }
                startX += 34;
            }
        }

        _this.perfectCubeFlag = false;
    },

    thumbsUpEvaluation2: function (target) {
        console.log("thumbs Up evaluation 2");
        _this.clickSound.play();
        _this.thumbsUp.frame = 1;
        _this.thumbsDown.frame = 0;

        if (_this.perfectCubeFlag === true) { _this.right = true; }
        else { _this.right = false; }


        if (_this.right) {

            _this.counterCelebrationSound.play();

            _this.QuestionBox.destroy();
            _this.thumbsUp.destroy();
            _this.thumbsDown.destroy();

            _this.pauseVoice();
            // _this.time.events.add(1000, function () {
            _this.Ask_Question13.play();
            _this.Question_flag = 13;
            // });

            _this.AnswerBox3 = _this.add.sprite(60, 65, 'textBox2');
            if (_this.CubeRootNumber.toString().length === 1) {
                _this.questionText0 = _this.add.text(24, 12, '3');
                _this.questionText = _this.add.text(25, 22, '√ ');
                _this.questionText1 = _this.add.text(41, -6, '___');
                _this.questionText2 = _this.add.text(55, 23, _this.CubeRootNumber);
            } else {
                _this.questionText0 = _this.add.text(21, 12, '3');
                _this.questionText = _this.add.text(20, 22, '√ ');
                _this.questionText1 = _this.add.text(36, -6, '___');
                _this.questionText2 = _this.add.text(45, 23, _this.CubeRootNumber);
            }



            _this.applyingStyleBlue(_this.questionText0);
            _this.applyingStyleBlue(_this.questionText);
            _this.applyingStyleBlue(_this.questionText1);
            _this.applyingStyleBlue(_this.questionText2);
            _this.questionText0.fontSize = '22px';
            _this.questionText.fontSize = '34px';
            _this.questionText.fontWeight = 'bold';

            _this.AnswerBox3.addChild(_this.questionText0);
            _this.AnswerBox3.addChild(_this.questionText);
            _this.AnswerBox3.addChild(_this.questionText1);
            _this.AnswerBox3.addChild(_this.questionText2);

            _this.AnswerBox3.events.onInputDown.add(function () {
                _this.clickSound.play();
                _this.AnswerBox3.frame = 1;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
                for (let i = 1; i <= 10; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
                }
            });

            _this.thumbsUp.events.onInputDown.removeAll();
            _this.thumbsDown.events.onInputDown.removeAll();

            _this.addNumberPad3();
        } else if (_this.right === false) {
            _this.wrongSound.play();

            _this.time.events.add(500, function () {
                _this.thumbsUp.frame = 0;
            });
        }


    },

    thumbsDownEvaluation2: function (target) {
        console.log("thumbs Down evaluation");
        _this.clickSound.play();
        _this.thumbsUp.frame = 0;
        _this.thumbsDown.frame = 1;

        if (_this.perfectCubeFlag === false) { _this.wrong = true; }
        else { _this.wrong = false; }

        if (_this.wrong) {
            _this.thumbsUp.events.onInputDown.removeAll();
            _this.thumbsDown.events.onInputDown.removeAll();

            _this.counterCelebrationSound.play();

            _this.pauseVoice();
            // _this.time.events.add(500, function () {
            _this.Ask_Question15.play();
            _this.Question_flag = 15;
            // });

            _this.time.events.add(2500, () => {
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
                if (_this.numberOfQuestions == 6) {
                    _this.time.events.add(3000, () => {
                        _this.state.start('score', true, false, gameID, _this.microConcepts);
                        // _this.state.start('NS_SQ_CUB_G8Score');
                    });
                }
                else {
                    _this.time.events.add(3000, () => {
                        _this.QuestionBox.destroy();
                        _this.thumbsUp.destroy();
                        _this.thumbsDown.destroy();
                        _this.squarePanel.destroy();

                        for (var i = 0; i < _this.pinkObjects.length; i++) {
                            _this.pinkObjects[i].destroy();
                        }
                        _this.pinkObjects = [];
                        _this.NextQuestion();
                    });
                }
            });

        } else if (_this.wrong === false) {
            _this.wrongSound.play();

            _this.time.events.add(500, function () {
                _this.thumbsDown.frame = 0;
            });
        }
    },

    removeStyle: function (target) {
        target.visible = false;
    },
    //applying the style to the text in the answerbox.
    applyingStyle: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#FFFFFF'; //white color
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '22px';
    },
    applyingWhite: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#FFFFFF'; //white color
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '24px';
    },
    applyingStyle1: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#32CD32'; //green color
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '26px';
    },
    applyingStyle2: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#E0115F'; //pink color
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '26px';
    },
    plusSignBlue: function (x, y) {
        console.log("plusSignBlue");
        _this.pSign1 = _this.add.graphics();
        _this.pSign1.lineStyle(4, 0x65B4C3);
        _this.pSign1.moveTo(x, y);
        _this.pSign1.lineTo(x + 12, y);
    },

    applyingStyleBlue: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '30px';
    },
    //clearing the screen (seconf scene).
    clearAll: function () {
        if (_this.squareFlag) {
            _this.Box2.destroy();
            _this.blueBox.destroy();

            for (var i = 0; i < _this.blueObjects.length; i++) {
                _this.blueObjects[i].destroy();
            }
            _this.blueObjects = [];
        }

        if (_this.pinkObjects.length > 0) {
            for (var i = 0; i < _this.pinkObjects.length; i++) {
                _this.pinkObjects[i].destroy();
            }
            _this.pinkObjects = [];
        }

        _this.AnswerBox2.destroy();
        _this.panel1.destroy();

        _this.squareFlag = false;
        _this.cubeFlag = false;

        _this.rootSquare = false;
        _this.rootCube = false;

        _this.perfectSquareFlag = false;
        _this.perfectCubeFlag = false;

    },

    clearAll2: function () {
        _this.AnswerBox3.destroy();

        if (_this.pinkObjects.length > 0) {
            for (var i = 0; i < _this.pinkObjects.length; i++) {
                _this.pinkObjects[i].destroy();
            }
            _this.pinkObjects = [];
        }

        _this.rootCube = false;

        _this.right = false;
        _this.wrong = false;

        _this.perfectSquareFlag = false;
        _this.perfectCubeFlag = false;

        _this.rootSquare = false;

        _this.squareFlag = false;
        _this.cubeFlag = false;

        _this.squarePanel.destroy();

    },

    rightbtnClicked: function () {
        console.log('right btn clicked')
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        if (_this.squareFlag) {
            if (_this.randomNumber !== Number(_this.finalval1)) {
                _this.wrongSound.play();
                _this.disableInputs1();
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
                for (let i = 1; i <= 10; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
                }
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.input.useHandCursor = true;
                return;
            }
            else {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.AnswerBox1.events.onInputDown.removeAll();
            }

            if (_this.row == false) {
                _this.displayRowGrid();
            } else {
                _this.panel1.destroy();
                _this.panel1 = _this.add.sprite(50, 155, 'panel1');
                _this.displayColumnGrid();
            }

            if (_this.col == true) {
                _this.AnswerBox1.destroy();
                _this.QuestionBox.destroy();
                _this.DragObject();

            }
        }
        else if (_this.cubeFlag) {
            if (_this.NumberC !== Number(_this.finalval1)) {
                _this.wrongSound.play();
                _this.disableInputs1();
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
                for (let i = 1; i <= 10; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
                }
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.input.useHandCursor = true;
                return;
            }
            else {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.AnswerBox1.events.onInputDown.removeAll();
            }

            if (_this.cubeRow == false) {
                _this.CubeRowGrid();
            } else if (_this.cubeCol == true) {
                _this.panel1.destroy();
                _this.panel1 = _this.add.sprite(50, 155, 'panel1');
                _this.CubeHeightGrid();
            }
            else {
                _this.panel1.destroy();
                _this.panel1 = _this.add.sprite(50, 155, 'panel1');
                _this.CubeColumnGrid();
            }


        }

    },

    rightbtnClicked2: function () {
        console.log('right btn clicked 2')
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        if (_this.squareFlag) {
            if (_this.squareNumber !== Number(_this.finalval2)) {
                _this.wrongSound.play();
                _this.disableInputs2();
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
                for (let i = 1; i <= 10; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
                }
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.input.useHandCursor = true;
                return;
            }
            else {
                _this.numGroup.destroy();
                _this.celebrationSound.play();
                _this.AnswerBox2.events.onInputDown.removeAll();

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
                _this.time.events.add(3000, () => {
                    _this.clearAll();
                    if (_this.numberOfQuestions == 6) {
                        _this.state.start('score', true, false,gameID,_this.microConcepts);
                        // _this.state.start('NS_SQ_CUB_G8Score');
                    }
                    else {
                        _this.NextQuestion();
                    }
                });
            }
            _this.cubeFlag = false;
        }
        if (_this.cubeFlag) {
            if (_this.CubeNumber !== Number(_this.finalval2)) {
                _this.wrongSound.play();
                _this.disableInputs2();
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
                for (let i = 1; i <= 10; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
                }
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.input.useHandCursor = true;
                return;
            }
            else {
                _this.numGroup.destroy();
                _this.celebrationSound.play();
                _this.AnswerBox2.events.onInputDown.removeAll();

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
                _this.time.events.add(3000, () => {
                    _this.clearAll();
                    if (_this.numberOfQuestions == 6) {
                        _this.state.start('score', true, false,gameID,_this.microConcepts);

                        // _this.state.start('NS_SQ_CUB_G8Score');
                    }
                    else {
                        _this.NextQuestion();
                    }
                });
            }
            _this.squareFlag = false;

        }
    },
    rightbtnClicked3: function () {
        console.log('right btn clicked 3')
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        if (_this.rootSquare === true) {
            if (_this.sqRoot !== Number(_this.finalval3)) {
                _this.wrongSound.play();
                _this.disableInputs3();
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked3, _this);
                for (let i = 1; i <= 10; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked3, _this);
                }
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.input.useHandCursor = true;
                return;
            } else {
                _this.numGroup.destroy();
                _this.celebrationSound.play();
                _this.AnswerBox3.events.onInputDown.removeAll();

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
                _this.time.events.add(3000, () => {
                    _this.clearAll2();
                    if (_this.numberOfQuestions == 6) {
                        _this.state.start('score', true, false,gameID,_this.microConcepts);

                        // _this.state.start('NS_SQ_CUB_G8Score');
                    }
                    else {
                        _this.NextQuestion();
                    }
                });
                _this.rootCube = false;
            }
        }
        if (_this.rootCube === true) {
            if (_this.cubeRoot !== Number(_this.finalval3)) {
                _this.wrongSound.play();
                _this.disableInputs3();
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked3, _this);
                for (let i = 1; i <= 10; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked3, _this);
                }
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.input.useHandCursor = true;
                return;
            } else {
                _this.numGroup.destroy();
                _this.celebrationSound.play();
                _this.AnswerBox3.events.onInputDown.removeAll();

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
                _this.time.events.add(3000, () => {
                    _this.clearAll2();
                    if (_this.numberOfQuestions == 6) {
                        _this.state.start('score', true, false,gameID,_this.microConcepts);

                        // _this.state.start('NS_SQ_CUB_G8Score');
                    }
                    else {
                        _this.NextQuestion();
                    }
                });
                _this.rootSquare = false;
            }
        }
    },

    addNumberPad: function () {
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        _this.AnswerBox1.removeChild(_this.enterTxt1);

        _this.selectedAns11 = '';
        _this.selectedAns21 = '';
        _this.selectedAns31 = '';

        _this.AnswerBox1.name = '';

        _this.fourNotEntered1 = false;

        _this.signNotselected1 = false;
        _this.signNotselected2 = false;

        _this.finalval1 = '';
        _this.signVal1 = '';

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);
        _this.x = 100;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;
        for (var i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.8);
            _this.numbg.name = i;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked1, _this);

            _this.x += 65;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 12;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.rightbtn.frame = 13;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);

        _this.enterTxt1 = '';
        _this.enterTxt2 = '';
        _this.enterTxt3 = '';

        _this.numpadTween = _this.add.tween(_this.numGroup);
        _this.tweenNumPad();
    },
    addNumberPad2: function () {
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        _this.AnswerBox2.removeChild(_this.enterTxt2);

        _this.selectedAns11 = '';
        _this.selectedAns21 = '';
        _this.selectedAns31 = '';

        _this.AnswerBox2.name = '';

        _this.fourNotEntered2 = false;

        _this.signNotselected1 = false;
        _this.signNotselected2 = false;

        _this.finalval2 = '';
        _this.signVal2 = '';

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);
        _this.x = 100;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;
        for (var i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.8);
            _this.numbg.name = i;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked2, _this);

            _this.x += 65;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 12;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.rightbtn.frame = 13;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked2, _this);

        _this.enterTxt1 = '';
        _this.enterTxt2 = '';
        _this.enterTxt3 = '';

        _this.numpadTween = _this.add.tween(_this.numGroup);
        _this.tweenNumPad();
    },

    addNumberPad3: function () {
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();


        _this.AnswerBox3.removeChild(_this.enterTxt3);

        _this.selectedAns11 = '';
        _this.selectedAns21 = '';
        _this.selectedAns31 = '';

        _this.AnswerBox3.name = '';

        _this.fourNotEntered3 = false;

        _this.signNotselected1 = false;
        _this.signNotselected2 = false;

        _this.finalval3 = '';
        _this.signVal3 = '';

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);
        _this.x = 100;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;
        for (var i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.8);
            _this.numbg.name = i;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked3, _this);

            _this.x += 65;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 12;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked3, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.rightbtn.frame = 13;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked3, _this);

        _this.enterTxt1 = '';
        _this.enterTxt2 = '';
        _this.enterTxt3 = '';

        _this.numpadTween = _this.add.tween(_this.numGroup);
        _this.tweenNumPad();
    },

    //Tween  the numberpad.
    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);
    },

    wrongbtnClicked1: function (target) {
        _this.clickSound.play();
        _this.disableInputs1();
    },
    wrongbtnClicked2: function (target) {
        _this.clickSound.play();
        _this.disableInputs2();
    },
    wrongbtnClicked3: function (target) {
        _this.clickSound.play();
        _this.disableInputs3();
    },
    //for clearing the answer box.
    disableInputs1: function () {
        _this.AnswerBox1.removeChild(_this.enterTxt1);
        _this.selectedAns11 = '';
        _this.selectedAns21 = '';
        _this.selectedAns31 = '';
        _this.AnswerBox1.name = '';
        _this.fourNotEntered1 = false;
        _this.signNotselected1 = false;
        _this.finalval1 = '';
        _this.signVal1 = '';
    },
    disableInputs2: function () {
        _this.AnswerBox2.removeChild(_this.enterTxt2);
        _this.selectedAns11 = '';
        _this.selectedAns21 = '';
        _this.selectedAns31 = '';
        _this.AnswerBox2.name = '';
        _this.fourNotEntered2 = false;
        _this.signNotselected2 = false;
        _this.finalval2 = '';
        _this.signVal2 = '';
    },
    disableInputs3: function () {
        _this.AnswerBox3.removeChild(_this.enterTxt3);
        _this.selectedAns11 = '';
        _this.selectedAns21 = '';
        _this.selectedAns31 = '';
        _this.AnswerBox3.name = '';
        _this.fourNotEntered3 = false;
        _this.finalval3 = '';
        _this.signVal3 = '';
    },
    numClicked1: function (target) {
        _this.clickSound.play();
        var_selectedAns11 = " "
        if (target.name == 10) {
            target.name = '-'
            _this.signNotselected1 = true;
            _this.signNotselected2 = false;
        }
        if (target.name == 11) {
            target.name = '+';
            _this.signNotselected2 = true;
            _this.signNotselected1 = false;
        }

        if (_this.selectedAns11 === '') {
            _this.selectedAns11 = target.name;
            var_selectedAns11 = _this.selectedAns11;
        }


        if (target.name == '+' || target.name == '-') {
            newstr = target.name + _this.finalval1;
            _this.signVal1 = target.name;
        }
        else if (_this.fourNotEntered1 == false) {
            _this.finalval1 += target.name;
        }

        if (target.name == '+')
            target.name = 11;
        if (target.name == '-')
            target.name = 10;

        if (_this.fourNotEntered1 == false || (target.name == 11 || target.name == 10)) {
            _this.AnswerBox1.removeChild(_this.enterTxt1);
            _this.enterTxt1.visible = false;
            _this.enterTxt1 = _this.add.text(40, 20, "" + _this.signVal1 + _this.finalval1, { fontSize: '18' });

            if (_this.signVal1 == '+') {
                if (_this.finalval1.length == 2) {
                    _this.enterTxt1.x += 1;
                }
                else if (_this.finalval1.length == 1) {
                    _this.enterTxt1.x += 8;
                }
                else {
                    _this.enterTxt1.x += 13;
                }
            }
            else if (_this.signVal1 == '-') {
                if (_this.finalval1.length == 2) {
                    _this.enterTxt1.x += 5;
                }
                else if (_this.finalval1.length == 1) {
                    _this.enterTxt1.x += 8;
                }
                else {
                    _this.enterTxt1.x += 13;
                }
            }
            else {
                if (_this.finalval1.length == 2) {
                    _this.enterTxt1.x += 8;
                }
                else if (_this.finalval1.length == 1) {
                    _this.enterTxt1.x += 13;
                }
            }
            if (_this.finalval1.length == 2 && (target.name != 11 || target.name != 10)) {
                _this.fourNotEntered1 = true;
            }
            else if (_this.finalval1.length == 4) {
                _this.fourNotEntered1 = true;
            }
            _this.enterTxt1.scale.setTo(0.8, 1)
            _this.applyingStyleBlue(_this.enterTxt1);
            _this.enterTxt1.fontSize = '28px';
            _this.AnswerBox1.addChild(_this.enterTxt1);
            _this.AnswerBox1.name = Number(_this.signVal1 + _this.finalval1);
            _this.enterTxt1.visible = true;
        }


    },
    numClicked2: function (target) {
        _this.clickSound.play();
        var_selectedAns21 = " "

        if (_this.selectedAns21 === '') {
            _this.selectedAns21 = target.name;
            var_selectedAns11 = _this.selectedAns11;
        }
        if (target.name == '+' || target.name == '-') {
            newstr = target.name + _this.finalval1;
            _this.signVal12 = target.name;
        }
        else if (_this.fourNotEntered2 == false) {
            _this.finalval2 += target.name;
        }

        if (target.name == '+')
            target.name = 11;
        if (target.name == '-')
            target.name = 10;

        if (_this.fourNotEntered2 == false || (target.name == 11 || target.name == 10)) {
            _this.AnswerBox2.removeChild(_this.enterTxt2);
            _this.enterTxt2.visible = false;
            _this.enterTxt2 = _this.add.text(130, 20, "" + _this.signVal2 + _this.finalval2, { fontSize: '18' });

            if (_this.signVal2 == '+') {
                if (_this.finalval2.length == 2) {
                    _this.enterTxt2.x += 1;
                }
                else if (_this.finalval2.length == 1) {
                    _this.enterTxt2.x += 8;
                }
                else {
                    _this.enterTxt2.x += 13;
                }
            }
            else if (_this.signVal2 == '-') {
                if (_this.finalval2.length == 2) {
                    _this.enterTxt2.x += 5;
                }
                else if (_this.finalval2.length == 1) {
                    _this.enterTxt2.x += 8;
                }
                else {
                    _this.enterTxt2.x += 13;
                }
            }
            else {
                if (_this.finalval2.length == 3) {
                    _this.enterTxt2.x += 8;
                }
                else if (_this.finalval2.length == 2) {
                    _this.enterTxt2.x += 12;
                }
                else if (_this.finalval2.length == 1) {
                    _this.enterTxt2.x += 13;
                }
            }
            if (_this.finalval2.length == 3 && (target.name != 11 || target.name != 10)) {
                _this.fourNotEntered2 = true;
            }
            else if (_this.finalval2.length == 4) {
                _this.fourNotEntered2 = true;
            }
            _this.enterTxt2.scale.setTo(0.8, 1)
            _this.applyingStyleBlue(_this.enterTxt2);
            _this.enterTxt2.fontSize = '28px';
            _this.AnswerBox2.addChild(_this.enterTxt2);
            _this.AnswerBox2.name = Number(_this.signVal2 + _this.finalval2);
            _this.enterTxt2.visible = true;
        }


    },

    numClicked3: function (target) {
        _this.clickSound.play();
        var_selectedAns31 = " "

        if (target.name == 10) {
            target.name = '-'
            _this.signNotselected1 = true;
            _this.signNotselected2 = false;
        }
        if (target.name == 11) {
            target.name = '+';
            _this.signNotselected2 = true;
            _this.signNotselected1 = false;
        }
        if (_this.selectedAns31 === '') {
            _this.selectedAns31 = target.name;
            var_selectedAns31 = _this.selectedAns31;
        }

        if (target.name == '+' || target.name == '-') {
            newstr = target.name + _this.finalval3;
            _this.signVal1 = target.name;
        }
        else if (_this.fourNotEntered3 == false) {
            _this.finalval3 += target.name;
        }

        if (target.name == '+')
            target.name = 11;
        if (target.name == '-')
            target.name = 10;

        if (_this.fourNotEntered3 == false || (target.name == 11 || target.name == 10)) {
            _this.AnswerBox3.removeChild(_this.enterTxt3);
            _this.enterTxt3.visible = false;
            _this.enterTxt3 = _this.add.text(130, 20, "" + _this.finalval3, { fontSize: '18' });

            if (_this.signVal1 == '+') {
                if (_this.finalval3.length == 2) {
                    _this.enterTxt3.x += 1;
                }
                else if (_this.finalval3.length == 1) {
                    _this.enterTxt3.x += 8;
                }
                else {
                    _this.enterTxt3.x += 13;
                }
            }
            else if (_this.signVal1 == '-') {
                if (_this.finalval3.length == 2) {
                    _this.enterTxt3.x += 5;
                }
                else if (_this.finalval3.length == 1) {
                    _this.enterTxt3.x += 8;
                }
                else {
                    _this.enterTxt3.x += 13;
                }
            }
            else {
                if (_this.finalval3.length == 2) {
                    _this.enterTxt3.x += 13;
                }
                else if (_this.finalval3.length == 1) {
                    _this.enterTxt3.x += 18;
                }
            }
            if (_this.finalval3.length == 2 && (target.name != 11 || target.name != 10)) {
                _this.fourNotEntered3 = true;
            }
            else if (_this.finalval3.length == 4) {
                _this.fourNotEntered3 = true;
            }
            _this.enterTxt3.scale.setTo(0.8, 1)
            _this.applyingStyleBlue(_this.enterTxt3);
            _this.enterTxt3.fontSize = '28px';
            _this.AnswerBox3.addChild(_this.enterTxt3);
            _this.AnswerBox3.name = Number(_this.signVal1 + _this.finalval3);
            _this.enterTxt3.visible = true;
        }


    },

    //checking if two sprites overlap.
    checkOverlap: function (spriteA, spriteB) {
        console.log("checkOverlap")
        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },
    //Adding a star to the above created six stars.
    starActions: function (target) {
        //for api
        //edited for baseurl apk
        _this.AnsTimerCount = 0;

        console.log("starActions")
        starAnim = _this.starsGroup.getChildAt(_this.numberOfQuestions);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        _this.numberOfQuestions++;
        anim.play();

        //edited for baseurl apk //for api
        _this.microConcepts = "Number SystemsG8";
    },
    shutdown: function () {
        _this.stopVoice();
    },
    stopAudio: function () {
        //* clear all the timers first
        if (_this.demoAudio1Timer) clearTimeout(_this.demoAudio1Timer);
        if (_this.demoVideo1PauseTimer) clearTimeout(_this.demoVideo1PauseTimer);
        if (_this.q1Timer) clearTimeout(_this.q1Timer);
        if (_this.demoAudio2Timer) clearTimeout(_this.demoAudio2Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer);

        if (_this.demoAudio1) {
            //console.log("removing the demo audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.demoAudio2) {
            //console.log("removing the demo audio1");
            _this.demoAudio2.pause();
            _this.demoAudio2 = null;
            _this.demoAudio2src = null;
        }


        if (_this.q1Sound) {
            //console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }

        if (_this.q2Sound) {
            //console.log("removing the q2");
            _this.q2Sound.pause();
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }

        if (_this.q3Sound) {
            //console.log("removing the q3");
            _this.q3Sound.pause();
            _this.q3Sound = null;
            _this.q3Soundsrc = null;
        }

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },
    DemoVideo: function () {


        // DEMO AUDIOS
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/INT-DL3-G7/" + _this.languageSelected + "/V1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/INT-DL3-G7/" + _this.languageSelected + "/V2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        // QUESTION AUDIOS
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/INT-DL3-G7/" +
            _this.languageSelected + "/V1.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video


        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.stopAudio();

            if (_this.demoVideo_2)
                _this.demoVideo_2.stop(false);
            if (_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if (_this.videoWorld_1)
                _this.videoWorld_1.destroy();
            if (_this.videoWorld_2)
                _this.videoWorld_2.destroy();

            _this.game.paused = false;  //* restart the game
        });
    },
    showDemoVideo: function () {


        // _this.demoVideo_1 = _this.add.video('ML2_1');
        // _this.demoVideo_1.play(false);
        // _this.demoVideo_1.changeSource("demoVideos/ML2-G7_1.mp4");
        // _this.video_playing = 1;
        // _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        // //* play the demo audio1 after 4 sec delay
        // _this.demoAudio1Timer = setTimeout(function ()    //* demoAudio1 js timer to play demoAudio1Timer after 4 seconds.
        // {
        //     console.log("inside demoAudio1sound.....")
        //     _this.demoVideo_1.playbackRate = 0;     //* pausing the video after 4sec
        //     clearTimeout(_this.demoAudio1Timer);         //* clear the time once its used.
        //     _this.demoAudio1.play();
        // }, 4000);

        // _this.demoVideo1PauseTimer = setTimeout(function () {
        //     console.log("inside demoAudio1sound.....")
        //     _this.demoVideo_1.playbackRate = 1;  //* resuming the video after 9 sec
        //     clearTimeout(_this.demoVideo1PauseTimer);
        // }, 9000);

        // _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1 after 11 seconds.
        // {
        //     console.log("inside q1sound.....")
        //     clearTimeout(_this.q1Timer);         //* clear the time once its used.
        //     _this.q1Sound.play();
        // }, 11000);

        // _this.demoAudio2Timer = setTimeout(function ()    //* demo audio2 js timer to play demo audio2 after 10 seconds.
        // {
        //     console.log("inside demoau2sound.....")
        //     clearTimeout(_this.demoAudio2Timer);         //* clear the time once its used.
        //     _this.demoAudio2.play();
        // }, 19000);

        // _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2 after 15 seconds.
        // {
        //     console.log("inside q2sound.....")
        //     clearTimeout(_this.q2Timer);         //* clear the time once its used.
        //     _this.q2Sound.play();
        // }, 24000);

        // _this.demoVideo_1.onComplete.add(function () {
        //     console.log("audio2 ended - pause video1");
        //     _this.demoVideo_2 = _this.add.video('ML2_2');
        //     _this.demoVideo_2.play(false);
        //     _this.demoVideo_2.changeSource("demoVideos/ML2-G7_2.mp4");  //* phaser needs this.to run in mobile
        //     _this.video_playing = 2;
        //     _this.videoWorld_2 = _this.demoVideo_2.addToWorld();

        //     _this.skip.bringToTop();
        //     _this.q3Sound.play();
        //     _this.demoVideo_2.onComplete.add(function () {
        //         console.log("demovideo 2 completed......!!!1")
        //         _this.stopAudio();
        //         _this.demoVideo_2.stop(false);
        //         _this.demoVideo_1.stop(false);
        //         _this.videoWorld_1.destroy();
        //         _this.videoWorld_2.destroy();
        //         _this.game.paused = false;

        //     });
        // });
    }
}