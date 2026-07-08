Game.AL_IDE_G8level1 = function () { };


Game.AL_IDE_G8level1.prototype =
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

        _this.framechange = document.createElement('audio');
        _this.framechangesrc = document.createElement('source');
        _this.framechangesrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);


        _this.Ask_Question1 = _this.createAudio("AL_IDE_G8_a1");
        _this.Ask_Question2_1 = _this.createAudio("AL_IDE_G8_a2");
        _this.Ask_Question2_2 = _this.createAudio("AL_IDE_G8_a3");
        _this.Ask_Question2 = _this.createAudio("AL_IDE_G8_a4");
        _this.Ask_Question3 = _this.createAudio("AL_IDE_G8_a6");
        _this.Ask_Question4 = _this.createAudio("");//("V4");
        _this.Ask_Question5 = _this.createAudio("AL_IDE_G8_a6");
        _this.Ask_Question6 = _this.createAudio("AL_IDE_G8_a6");

        //edited for baseurl online apk
        telInitializerbbpp.gameIdInit("AL_IDE_G8", gradeSelected);
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
        _this.time.events.add(1, function () {
            _this.ViewDemoVideo();
        });

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
        _this.count = 0; //counter for partA
        _this.count1 = 0; //counter for partB
        _this.starsGroup;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.Question_flag = 0;

        _this.counterForTimer = 0;

        //flag set after clicking correct tiles and validating
        _this.flag1 = 0;
        _this.flag2 = 0;
        _this.flag3 = 0;
        _this.flag4 = 0;

        _this.flag5 = 0;
        _this.flag6 = 0;
        _this.flag7 = 0;
        _this.flag8 = 0;
        //starting tile position of vertical tiles
        _this.verticalY = 215;

        //flag to know if tiles are placed or no
        _this.aSquareflag = 0;
        _this.abHorflag = 0;
        _this.abVerflag = 0;
        _this.bSquareflag = 0;
        _this.xbflag = 0;
        _this.answercount = 0; //count for placing terms answer upto 6

        _this.arr = []; //for partB
        _this.power = "\u{00B2}";

        //few flags used to set answer boxes in partB
        _this.flag11cor = 0;
        _this.flag1cor = 0;
        _this.flag22cor = 0;
        _this.flag2cor = 0;
        _this.flag33cor = 0;
        _this.ifFlag = 0;
        _this.wrongFlag = 0;


        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'BG');
        //** include the background file, navigation bar, stars, timer objects.
        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.state.start('grade8Algebra', true, false);
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if (_this.Question_flag == 1) {
                    _this.Ask_Question1.currentTime = 0;
                    _this.Ask_Question1.play();
                }
                if (_this.Question_flag == 2) {
                    _this.Ask_Question2.currentTime = 0;
                    _this.Ask_Question2.play();
                }
                if (_this.Question_flag == 3) {
                    _this.Ask_Question3.currentTime = 0;
                    _this.Ask_Question3.play();
                }
                if (_this.Question_flag == 4) {
                    _this.Ask_Question4.currentTime = 0;
                    _this.Ask_Question4.play();
                }
                if (_this.Question_flag == 5) {
                    _this.Ask_Question5.currentTime = 0;
                    _this.Ask_Question5.play();
                }
                if (_this.Question_flag == 6) {
                    _this.Ask_Question6.currentTime = 0;
                    _this.Ask_Question6.play();
                }
                if (_this.Question_flag == 7) {
                    _this.Ask_Question2_1.currentTime = 0;
                    _this.Ask_Question2_1.play();
                }
                if (_this.Question_flag == 8) {
                    _this.Ask_Question2_2.currentTime = 0;
                    _this.Ask_Question2_2.play();
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
            //console.log("inside hintbutton function");
            //* show the demo video
            _this.hintBtn.inputEnabled = false;
            _this.hintBtn.input.useHandCursor = false;
            _this.time.events.add(1, function () {
                //console.log(_this.hintBtn.inputEnabled, "status of hintBtn");
                _this.ViewDemoVideo();
            });
        });

        _this.generateStarsForTheScene(6);

        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);
    },
    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/AL-IDE-G8/" + _this.languageSelected + "/" + src + ".mp3");
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
                _this.seconds = 0o0;
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

        _this.Question_flag = 0;

        //for api
        //* hintbtn will be true when the game is playing
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1; //for api


        _this.randomization();

        //_this.partB();
        _this.AskingQuestion(); //partA

    },
    stopVoice: function () {
        _this.Ask_Question1.currentTime = 0;
        _this.Ask_Question2_1.currentTime = 0;
        _this.Ask_Question2_2.currentTime = 0;
        _this.Ask_Question2.currentTime = 0;
        _this.Ask_Question3.currentTime = 0;
        _this.Ask_Question4.currentTime = 0;
        _this.Ask_Question5.currentTime = 0;
        _this.Ask_Question6.currentTime = 0;

        if (_this.Ask_Question1) {
            _this.Ask_Question1.pause();
            _this.Ask_Question1 = null;
        }

        if (_this.Ask_Question2) {
            _this.Ask_Question2.pause();
            _this.Ask_Question2 = null;
        }
        if (_this.Ask_Question2_1) {
            _this.Ask_Question2_1.pause();
            _this.Ask_Question2_1 = null;
        }
        if (_this.Ask_Question2_2) {
            _this.Ask_Question2_2.pause();
            _this.Ask_Question2_2 = null;
        }
        if (_this.Ask_Question3) {
            _this.Ask_Question3.pause();
            _this.Ask_Question3 = null;
        }
        if (_this.Ask_Question4) {
            _this.Ask_Question4.pause();
            _this.Ask_Question4 = null;
        }

        if (_this.Ask_Question5) {
            _this.Ask_Question5.pause();
            _this.Ask_Question5 = null;
        }
        if (_this.Ask_Question6) {
            _this.Ask_Question6.pause();
            _this.Ask_Question6 = null;
        }

        if (_this.celebrationSound) {
            if (_this.celebrationSound.isPlaying) {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
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

    randomization: function () {
        //1. (a + b)2 = a2 +2ab +b2
        //2. (a – b)2 = a2 - 2ab +b2
        //3.(a + b) (a – b) = a2 - b2
        //4.(x + a) (x + b) = x2 +xa+ab +xb

        _this.ques = [1, 2, 3, 4];  //[1, 2, 3, 4]; //for partA
        _this.shuffleArray(_this.ques);

        //for PartB
        _this.arr = [1, 2, 3]; //1. for first two formulas  2. (a+b)(a-b) 3. (x+a)(x+b)
        _this.shuffleArray(_this.arr);

    },

    //this function is used for showing the question.
    AskingQuestion: function () {
        //for api
        //edited for baseurl apk
        _this.sceneCount++;
        _this.noofAttempts = 0;
        //....

        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;

        if (_this.count == 0) {
            _this.Ask_Question1.play();
            _this.Ask_Question1.addEventListener('ended', () => {
                _this.Ask_Question2_1.play();

            });
        }
        // _this.Question_flag = 1;


        _this.string = "(";
        _this.string1 = "";


        //Forming the question string and adding to the text box. 
        if (_this.ques[_this.count] == 1) {
            _this.textBox = _this.add.sprite(240, 60, 'textbox1');
            _this.string = _this.string + 'a + b' + ')' + _this.power;
        }
        else if (_this.ques[_this.count] == 2) {
            _this.textBox = _this.add.sprite(240, 60, 'textbox1');
            _this.string = _this.string + 'a - b' + ')' + _this.power;
        }
        else if (_this.ques[_this.count] == 3) {
            _this.textBox = _this.add.sprite(240, 60, 'textbox2');
            _this.string = '  ' + _this.string + 'a + b' + ') * ' + _this.string + 'a - b' + ')';
        }
        else if (_this.ques[_this.count] == 4) {
            _this.textBox = _this.add.sprite(240, 60, 'textbox2');
            _this.string = '  ' + _this.string + 'x + a' + ') * ' + _this.string + 'x + b' + ')';
        }

        _this.textBox.frame = 1;
        _this.questionText = _this.add.text(25, 19, _this.string);
        _this.applyingStyle(_this.questionText);
        _this.textBox.addChild(_this.questionText);


        _this.eraser = _this.add.sprite(800, 68, 'eraser');
        _this.tick = _this.add.sprite(865, 65, 'TickBtn');

        _this.panel1 = _this.add.sprite(235, 140, 'panel2');
        _this.panel2 = _this.add.sprite(235, 140, 'panel4'); //these panels are for next stage so make them invisible
        _this.panel2.visible = false;
        _this.panel3 = _this.add.sprite(620, 140, 'panel3');
        _this.panel3.visible = false;

        if (_this.ques[_this.count] == 4)  //since they are x term tiles all panel and tiles position are different
        {
            _this.sideGray1 = _this.add.sprite(35, 135, 'panel5');
            _this.sideGray1.scale.setTo(1, 1.12);

            _this.sideGray2 = _this.add.sprite(135, 135, 'panel5');
            _this.sideGray2.scale.setTo(1, 1.12);

            _this.green1 = _this.add.sprite(13, 2, 'green1');
            _this.green1.scale.setTo(1, 0.8);
            _this.sideGray1.addChild(_this.green1);
            _this.green2 = _this.add.sprite(13, 85, 'green2');
            _this.sideGray1.addChild(_this.green2);
            _this.green3 = _this.add.sprite(13, 120, 'green3');
            _this.green3.scale.setTo(1, 0.8);
            _this.sideGray1.addChild(_this.green3);
            _this.green4 = _this.add.sprite(20, 190, 'green4');
            _this.sideGray1.addChild(_this.green4);
            _this.green5 = _this.add.sprite(20, 220, 'green5');
            _this.sideGray1.addChild(_this.green5);
            _this.green5.scale.setTo(1.08, 1);
            _this.green7 = _this.add.sprite(22, 305, 'green4');
            _this.green7.scale.setTo(1.08, 0.9);
            _this.sideGray1.addChild(_this.green7);
            _this.green6 = _this.add.sprite(13, 330, 'green3');
            _this.green6.scale.setTo(1.08, 0.75);
            _this.sideGray1.addChild(_this.green6);

            _this.pink1 = _this.add.sprite(13, 2, 'pink1');
            _this.pink1.scale.setTo(1, 0.8);
            _this.sideGray2.addChild(_this.pink1);
            _this.pink2 = _this.add.sprite(13, 85, 'pink2');
            _this.sideGray2.addChild(_this.pink2);
            _this.pink3 = _this.add.sprite(13, 120, 'pink3');
            _this.pink3.scale.setTo(1, 0.8);
            _this.sideGray2.addChild(_this.pink3);
            _this.pink4 = _this.add.sprite(20, 190, 'pink4');
            _this.sideGray2.addChild(_this.pink4);
            _this.pink5 = _this.add.sprite(20, 220, 'pink5');
            _this.pink5.scale.setTo(1.14, 1);
            _this.sideGray2.addChild(_this.pink5);
            _this.pink6 = _this.add.sprite(13, 330, 'pink3');
            _this.pink6.scale.setTo(1.08, 0.75);
            _this.sideGray2.addChild(_this.pink6);
            _this.pink7 = _this.add.sprite(22, 305, 'pink4');
            _this.pink7.scale.setTo(1.08, 0.9);
            _this.sideGray2.addChild(_this.pink7);

            _this.lett1 = _this.add.text(17, 10, ' -x' + _this.power);
            _this.lett1.fill = '#FFFFFF';
            _this.lett1.fontSize = '25px';
            _this.sideGray1.addChild(_this.lett1);
            _this.lett2 = _this.add.text(20, 54, ' -x');
            _this.lett2.fill = '#66BA6A';
            _this.sideGray1.addChild(_this.lett2);
            _this.lett3 = _this.add.text(15, 120, ' -xa');
            _this.lett3.fill = '#FFFFFF';
            _this.lett3.fontSize = '25px';
            _this.sideGray1.addChild(_this.lett3);
            _this.lett4 = _this.add.text(18, 160, ' -a');
            _this.lett4.fill = '#66BA6A';
            _this.sideGray1.addChild(_this.lett4);
            _this.lett5 = _this.add.text(15, 225, ' -ab');
            _this.lett5.fill = '#FFFFFF';
            _this.lett5.fontSize = '25px';
            _this.sideGray1.addChild(_this.lett5);
            _this.lett7 = _this.add.text(21, 274, ' -b');
            _this.lett7.fill = '#66BA6A';
            _this.lett7.fontSize = '25px';
            _this.sideGray1.addChild(_this.lett7);
            _this.lett6 = _this.add.text(15, 330, ' -xb');
            _this.lett6.fill = '#FFFFFF';
            _this.sideGray1.addChild(_this.lett6);

            _this.lett11 = _this.add.text(14, 10, ' +x' + _this.power);
            _this.lett11.fill = '#FFFFFF';
            _this.lett11.fontSize = '25px';
            _this.sideGray2.addChild(_this.lett11)
            _this.lett22 = _this.add.text(20, 54, ' +x');
            _this.lett22.fill = '#e60073';
            _this.sideGray2.addChild(_this.lett22);
            _this.lett33 = _this.add.text(13, 120, ' +xa');
            _this.lett33.fill = '#FFFFFF';
            _this.lett33.fontSize = '25px';
            _this.sideGray2.addChild(_this.lett33);
            _this.lett44 = _this.add.text(16, 160, ' +a');
            _this.lett44.fill = '#e60073';
            _this.sideGray2.addChild(_this.lett44);
            _this.lett55 = _this.add.text(20, 225, '+ab');
            _this.lett55.fill = '#FFFFFF';
            _this.lett55.fontSize = '25px';
            _this.sideGray2.addChild(_this.lett55);
            _this.lett66 = _this.add.text(15, 330, ' +xb');
            _this.lett66.fill = '#FFFFFF';
            _this.lett66.fontSize = '25px';
            _this.sideGray2.addChild(_this.lett66);
            _this.lett77 = _this.add.text(19, 274, ' +b');
            _this.lett77.fill = '#e60073';
            _this.sideGray2.addChild(_this.lett77);
        }
        else //else for first 3 formula same
        {
            _this.sideGray1 = _this.add.sprite(35, 140, 'panel1');
            _this.sideGray2 = _this.add.sprite(135, 140, 'panel1');

            _this.green1 = _this.add.sprite(13, 10, 'green1');
            _this.sideGray1.addChild(_this.green1);
            _this.green2 = _this.add.sprite(13, 105, 'green2');
            _this.sideGray1.addChild(_this.green2);
            _this.green3 = _this.add.sprite(13, 140, 'green3');
            _this.sideGray1.addChild(_this.green3);
            _this.green4 = _this.add.sprite(20, 215, 'green4');
            _this.sideGray1.addChild(_this.green4);
            _this.green5 = _this.add.sprite(20, 280, 'green5');
            _this.sideGray1.addChild(_this.green5);
            _this.green6 = _this.add.sprite(32, 360, 'green6');
            _this.sideGray1.addChild(_this.green6);

            _this.pink1 = _this.add.sprite(13, 10, 'pink1');
            _this.sideGray2.addChild(_this.pink1);
            _this.pink2 = _this.add.sprite(13, 105, 'pink2');
            _this.sideGray2.addChild(_this.pink2);
            _this.pink3 = _this.add.sprite(13, 140, 'pink3');
            _this.sideGray2.addChild(_this.pink3);
            _this.pink4 = _this.add.sprite(20, 215, 'pink4');
            _this.sideGray2.addChild(_this.pink4);
            _this.pink5 = _this.add.sprite(20, 280, 'pink5');
            _this.sideGray2.addChild(_this.pink5);
            _this.pink6 = _this.add.sprite(32, 360, 'pink6');
            _this.sideGray2.addChild(_this.pink6);

            _this.lett1 = _this.add.text(17, 24, ' -a' + _this.power);
            _this.lett1.fill = '#FFFFFF';
            _this.sideGray1.addChild(_this.lett1);
            _this.lett2 = _this.add.text(20, 74, ' -a');
            _this.lett2.fill = '#66BA6A';
            _this.sideGray1.addChild(_this.lett2);
            _this.lett3 = _this.add.text(15, 144, ' -ab');
            _this.lett3.fill = '#FFFFFF';
            _this.sideGray1.addChild(_this.lett3);
            _this.lett4 = _this.add.text(18, 187, ' -b');
            _this.lett4.fill = '#66BA6A';
            _this.sideGray1.addChild(_this.lett4);
            _this.lett5 = _this.add.text(17, 250, ' -b' + _this.power);
            _this.lett5.fill = '#66BA6A';
            _this.sideGray1.addChild(_this.lett5);
            _this.lett6 = _this.add.text(21, 330, ' -1');
            _this.lett6.fill = '#66BA6A';
            _this.sideGray1.addChild(_this.lett6);

            _this.lett11 = _this.add.text(14, 24, ' +a' + _this.power);
            _this.lett11.fill = '#FFFFFF';
            _this.sideGray2.addChild(_this.lett11)
            _this.lett22 = _this.add.text(20, 74, ' +a');
            _this.lett22.fill = '#e60073';
            _this.sideGray2.addChild(_this.lett22);
            _this.lett33 = _this.add.text(13, 144, ' +ab');
            _this.lett33.fill = '#FFFFFF';
            _this.sideGray2.addChild(_this.lett33);
            _this.lett44 = _this.add.text(16, 187, ' +b');
            _this.lett44.fill = '#e60073';
            _this.sideGray2.addChild(_this.lett44);
            _this.lett55 = _this.add.text(15, 250, ' +b' + _this.power);
            _this.lett55.fill = '#e60073';
            _this.sideGray2.addChild(_this.lett55);
            _this.lett66 = _this.add.text(19, 330, ' +1');
            _this.lett66.fill = '#e60073';
            _this.sideGray2.addChild(_this.lett66);

        }

        _this.time.events.add(1500, function () {
            _this.nextStage();  //changing frame 
        });

    },

    nextStage: function () {
        //display question in expanded form with textbox and frames changed for que 1 and 2
        if (_this.ques[_this.count] == 1) {
            _this.textBox.destroy();
            _this.textBox = _this.add.sprite(240, 60, 'textbox3');
            _this.textBox.frame = 1;
            _this.string = _this.string + '  =  (a + b) * (a + b)';
            _this.questionText = _this.add.text(25, 19, _this.string);
            _this.applyingStyle(_this.questionText);
            _this.textBox.addChild(_this.questionText);
        }
        else if (_this.ques[_this.count] == 2) {
            _this.textBox.destroy();
            _this.textBox = _this.add.sprite(240, 60, 'textbox3');
            _this.textBox.frame = 1;
            _this.string = _this.string + '   =  (a - b) * (a - b)';
            _this.questionText = _this.add.text(25, 19, _this.string);
            _this.applyingStyle(_this.questionText);
            _this.textBox.addChild(_this.questionText);
        }

        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop1, _this);

        _this.green1.inputEnabled = true;
        _this.green2.inputEnabled = true;
        _this.green3.inputEnabled = true;
        _this.green4.inputEnabled = true;
        _this.green5.inputEnabled = true;

        _this.pink1.inputEnabled = true;
        _this.pink2.inputEnabled = true;
        _this.pink3.inputEnabled = true;
        _this.pink4.inputEnabled = true;
        _this.pink5.inputEnabled = true;

        _this.green1.input.useHandCursor = true;
        _this.green2.input.useHandCursor = true;
        _this.green3.input.useHandCursor = true;
        _this.green4.input.useHandCursor = true;
        _this.green5.input.useHandCursor = true;

        _this.pink1.input.useHandCursor = true;
        _this.pink2.input.useHandCursor = true;
        _this.pink3.input.useHandCursor = true;
        _this.pink4.input.useHandCursor = true;
        _this.pink5.input.useHandCursor = true;

        //adding functions for horizontal tiles adding
        _this.green1.events.onInputDown.add(_this.maS2);
        _this.green2.events.onInputDown.add(_this.ma);
        _this.green3.events.onInputDown.add(_this.mab);
        _this.green4.events.onInputDown.add(_this.mb);
        _this.green5.events.onInputDown.add(_this.mbS2);

        _this.pink1.events.onInputDown.add(_this.paS2);
        _this.pink2.events.onInputDown.add(_this.pa);
        _this.pink3.events.onInputDown.add(_this.pab);
        _this.pink4.events.onInputDown.add(_this.pb);
        _this.pink5.events.onInputDown.add(_this.pbS2);


        if (_this.ques[_this.count] == 4)  //if 4th formula 2 tiles are extra
        {
            _this.green6.inputEnabled = true;
            _this.green7.inputEnabled = true;
            _this.pink6.inputEnabled = true;
            _this.pink7.inputEnabled = true;
            _this.green6.input.useHandCursor = true;
            _this.green7.input.useHandCursor = true;
            _this.pink6.input.useHandCursor = true;
            _this.pink7.input.useHandCursor = true;
            _this.green6.events.onInputDown.add(_this.mxb);
            _this.green7.events.onInputDown.add(_this.mbb);
            _this.pink6.events.onInputDown.add(_this.pxb);
            _this.pink7.events.onInputDown.add(_this.pbb);
        }

        _this.space1Boxes = _this.add.group();
        _this.space2Boxes = _this.add.group();
        _this.space3Boxes = _this.add.group();

        _this.limit1 = 0; // to keep count of tiles that can be accomodated

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickEvaluation, _this);

    },


    //Adding the minus a square to top of panel
    maS2: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 36) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 6;
        let square;
        square = _this.add.sprite(305, 160, 'green1');
        square.name = '10';
        if (_this.space1Boxes.length == 0) {
            if (_this.ques[_this.count] == 4)
                _this.let = _this.add.text(7, 20, ' -x' + _this.power);
            else
                _this.let = _this.add.text(7, 20, ' -a' + _this.power);
            square.addChild(_this.let);
            _this.space1Boxes.addChild(square);
        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("1");
                square.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(7, 20, ' -x' + _this.power);
                else
                    _this.let = _this.add.text(7, 20, ' -a' + _this.power);
                square.addChild(_this.let);
                _this.space1Boxes.addChild(square);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("2");
                square.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(7, 20, ' -x' + _this.power);
                else
                    _this.let = _this.add.text(7, 20, ' -a' + _this.power);
                square.addChild(_this.let);
                _this.space1Boxes.addChild(square);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("3");
                square.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(7, 20, ' -x' + _this.power);
                else
                    _this.let = _this.add.text(7, 20, ' -a' + _this.power);
                square.addChild(_this.let);
                _this.space1Boxes.addChild(square);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("4");
                square.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(7, 20, ' -x' + _this.power);
                else
                    _this.let = _this.add.text(7, 20, ' -a' + _this.power);
                square.addChild(_this.let);
                _this.space1Boxes.addChild(square);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("5");
                square.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(7, 20, ' -x' + _this.power);
                else
                    _this.let = _this.add.text(7, 20, ' -a' + _this.power);
                square.addChild(_this.let);
                _this.space1Boxes.addChild(square);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("51");
                square.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(7, 20, ' -x' + _this.power);
                square.addChild(_this.let);
                _this.space1Boxes.addChild(square);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("55");
                square.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(7, 20, ' -x' + _this.power);
                square.addChild(_this.let);
                _this.space1Boxes.addChild(square);
            }
        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';
    },

    //Adding the minus a to top of panel 
    ma: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 30) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 6;
        let rectangle;
        rectangle = _this.add.sprite(305, 186, 'green2.2');

        rectangle.name = '20';
        if (_this.space1Boxes.length == 0) {
            if (_this.ques[_this.count] == 4)
                _this.let = _this.add.text(40, 2, ' -x');
            else
                _this.let = _this.add.text(40, 2, ' -a');
            rectangle.addChild(_this.let);
            _this.space1Boxes.addChild(rectangle);

        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("6");
                rectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(40, 2, ' -x');
                else
                    _this.let = _this.add.text(40, 2, ' -a');
                rectangle.addChild(_this.let);
                _this.space1Boxes.addChild(rectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("7");
                rectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(40, 2, ' -x');
                else
                    _this.let = _this.add.text(40, 2, ' -a');
                rectangle.addChild(_this.let);
                _this.space1Boxes.addChild(rectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("8");
                rectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(40, 2, ' -x');
                else
                    _this.let = _this.add.text(40, 2, ' -a');
                rectangle.addChild(_this.let);
                _this.space1Boxes.addChild(rectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("9");
                rectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(40, 2, ' -x');
                else
                    _this.let = _this.add.text(40, 2, ' -a');
                rectangle.addChild(_this.let);
                _this.space1Boxes.addChild(rectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("10");
                rectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(40, 2, ' -x');
                else
                    _this.let = _this.add.text(40, 2, ' -a');
                rectangle.addChild(_this.let);
                _this.space1Boxes.addChild(rectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("100");
                rectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(40, 2, ' -x');
                rectangle.addChild(_this.let);
                _this.space1Boxes.addChild(rectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("110");
                rectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(40, 2, ' -x');
                rectangle.addChild(_this.let);
                _this.space1Boxes.addChild(rectangle);
            }
        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';
    },

    //Adding the minus ab to top of panel
    mab: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 30) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 6;
        let rectanglee;
        rectanglee = _this.add.sprite(305, 178, 'green3');

        rectanglee.name = '30';
        if (_this.space1Boxes.length == 0) {
            if (_this.ques[_this.count] == 4)
                _this.let = _this.add.text(5, 6, ' -xa');
            else
                _this.let = _this.add.text(5, 6, ' -ab');
            rectanglee.addChild(_this.let);
            _this.space1Boxes.addChild(rectanglee);

        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("11");
                rectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(5, 6, ' -xa');
                else
                    _this.let = _this.add.text(5, 6, ' -ab');
                rectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("12");
                rectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(5, 6, ' -xa');
                else
                    _this.let = _this.add.text(5, 6, ' -ab');
                rectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("13");
                rectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(5, 6, ' -xa');
                else
                    _this.let = _this.add.text(5, 6, ' -ab');
                rectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("14");
                rectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(5, 6, ' -xa');
                else
                    _this.let = _this.add.text(5, 6, ' -ab');
                rectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("15");
                rectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(5, 6, ' -xa');
                else
                    _this.let = _this.add.text(5, 6, ' -ab');
                rectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("115");
                rectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(5, 6, ' -xa');
                rectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("155");
                rectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(5, 6, ' -xa');
                rectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee);
            }

        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';
    },

    //Adding the minus b to top of panel
    mb: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 30) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 6;
        let reectangle;
        reectangle = _this.add.sprite(305, 186, 'green2.3');

        reectangle.name = '40';
        if (_this.space1Boxes.length == 0) {
            if (_this.ques[_this.count] == 4)
                _this.let = _this.add.text(18, 3, ' -a');
            else
                _this.let = _this.add.text(18, 3, ' -b');
            reectangle.addChild(_this.let);
            _this.space1Boxes.addChild(reectangle);
        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("16");
                reectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(18, 3, ' -a');
                else
                    _this.let = _this.add.text(18, 3, ' -b');
                reectangle.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("17");
                reectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(18, 3, ' -a');
                else
                    _this.let = _this.add.text(18, 3, ' -b');
                reectangle.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("18");
                reectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(18, 3, ' -a');
                else
                    _this.let = _this.add.text(18, 3, ' -b');
                reectangle.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("19");
                reectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(18, 3, ' -a');
                else
                    _this.let = _this.add.text(18, 3, ' -b');
                reectangle.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("20");
                reectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(18, 3, ' -a');
                else
                    _this.let = _this.add.text(18, 3, ' -b');
                reectangle.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("200");
                reectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(18, 3, ' -a');
                reectangle.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("220");
                reectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(18, 3, ' -a');
                reectangle.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle);
            }

        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';
    },

    //Adding the minus b square to top of panel
    mbS2: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 36) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 3;
        let squaree;
        squaree = _this.add.sprite(305, 178, 'green5');
        squaree.name = '50';
        if (_this.space1Boxes.length == 0) {
            if (_this.ques[_this.count] == 4)
                _this.let = _this.add.text(-5, 6, ' -ab');
            else
                _this.let = _this.add.text(-2, 9, ' -b' + _this.power);
            squaree.addChild(_this.let);
            _this.space1Boxes.addChild(squaree);
        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("21");
                squaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(-5, 6, ' -ab');
                else
                    _this.let = _this.add.text(-2, 9, ' -b' + _this.power);
                squaree.addChild(_this.let);
                _this.space1Boxes.addChild(squaree);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("22");
                squaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(-5, 6, ' -ab');
                else
                    _this.let = _this.add.text(-2, 9, ' -b' + _this.power);
                squaree.addChild(_this.let);
                _this.space1Boxes.addChild(squaree);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("23");
                squaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(-5, 6, ' -ab');
                else
                    _this.let = _this.add.text(-2, 9, ' -b' + _this.power);
                squaree.addChild(_this.let);
                _this.space1Boxes.addChild(squaree);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("24");
                squaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(-5, 6, ' -ab');
                else
                    _this.let = _this.add.text(-2, 9, ' -b' + _this.power);
                squaree.addChild(_this.let);
                _this.space1Boxes.addChild(squaree);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("25");
                squaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(-5, 6, ' -ab');
                else
                    _this.let = _this.add.text(-2, 9, ' -b' + _this.power);
                squaree.addChild(_this.let);
                _this.space1Boxes.addChild(squaree);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("255");
                squaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(-5, 6, ' -ab');
                squaree.addChild(_this.let);
                _this.space1Boxes.addChild(squaree);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("225");
                squaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(-5, 6, ' -ab');
                squaree.addChild(_this.let);
                _this.space1Boxes.addChild(squaree);
            }
        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '23px';
    },

    //Adding the minus xb to top of panel
    mxb: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 36) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 6;
        let rectanglee1;
        rectanglee1 = _this.add.sprite(305, 187, 'green3');
        rectanglee1.scale.setTo(1.08, 0.75);

        rectanglee1.name = '60';
        if (_this.space1Boxes.length == 0) {
            _this.let = _this.add.text(2, 6, ' -xb');
            rectanglee1.addChild(_this.let);
            _this.space1Boxes.addChild(rectanglee1);
        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("11");
                rectanglee1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                _this.let = _this.add.text(2, 6, ' -xb');
                rectanglee1.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee1);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("12");
                rectanglee1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                _this.let = _this.add.text(2, 6, ' -xb');
                rectanglee1.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee1);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("13");
                rectanglee1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                _this.let = _this.add.text(2, 6, ' -xb');
                rectanglee1.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee1);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("14");
                rectanglee1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                _this.let = _this.add.text(2, 6, ' -xb');
                rectanglee1.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee1);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("15");
                rectanglee1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                _this.let = _this.add.text(2, 6, ' -xb');
                rectanglee1.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee1);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("155");
                rectanglee1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(2, 6, ' -xb');
                rectanglee1.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee1);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("115");
                rectanglee1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(2, 6, ' -xb');
                rectanglee1.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee1);
            }

        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';
    },

    //Adding the minus b to top of panel
    mbb: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 36) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 6;
        let reectangle1;
        reectangle1 = _this.add.sprite(305, 189, 'green2.3');
        reectangle1.scale.setTo(1.08, 0.9);

        reectangle1.name = '70';
        if (_this.space1Boxes.length == 0) {
            _this.let = _this.add.text(20, 2, ' -b');
            reectangle1.addChild(_this.let);
            _this.space1Boxes.addChild(reectangle1);
        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("16");
                reectangle1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                _this.let = _this.add.text(20, 2, ' -b');
                reectangle1.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle1);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("17");
                reectangle1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                _this.let = _this.add.text(20, 2, ' -b');
                reectangle1.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle1);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("18");
                reectangle1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                _this.let = _this.add.text(20, 2, ' -b');
                reectangle1.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle1);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("19");
                reectangle1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                _this.let = _this.add.text(20, 2, ' -b');
                reectangle1.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle1);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("20");
                reectangle1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                _this.let = _this.add.text(20, 2, ' -b');
                reectangle1.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle1);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("201");
                reectangle1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(20, 2, ' -b');
                reectangle1.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle1);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("119");
                reectangle1.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(20, 2, ' -b');
                reectangle1.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle1);
            }

        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';
    },





    //Adding the plus a square to top of panel
    paS2: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 36) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 6;
        let psquare;
        psquare = _this.add.sprite(305, 160, 'pink1');
        psquare.name = '11';
        if (_this.space1Boxes.length == 0) {
            if (_this.ques[_this.count] == 4)
                _this.let = _this.add.text(4, 20, ' +x' + _this.power);
            else
                _this.let = _this.add.text(4, 20, ' +a' + _this.power);
            psquare.addChild(_this.let);
            _this.space1Boxes.addChild(psquare);
        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("1");
                psquare.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(4, 20, ' +x' + _this.power);
                else
                    _this.let = _this.add.text(4, 20, ' +a' + _this.power);
                psquare.addChild(_this.let);
                _this.space1Boxes.addChild(psquare);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("2");
                psquare.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(4, 20, ' +x' + _this.power);
                else
                    _this.let = _this.add.text(4, 20, ' +a' + _this.power);
                psquare.addChild(_this.let);
                _this.space1Boxes.addChild(psquare);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("3");
                psquare.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(4, 20, ' +x' + _this.power);
                else
                    _this.let = _this.add.text(4, 20, ' +a' + _this.power);
                psquare.addChild(_this.let);
                _this.space1Boxes.addChild(psquare);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("4");
                psquare.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(4, 20, ' +x' + _this.power);
                else
                    _this.let = _this.add.text(4, 20, ' +a' + _this.power);
                psquare.addChild(_this.let);
                _this.space1Boxes.addChild(psquare);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("5");
                psquare.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(4, 20, ' +x' + _this.power);
                else
                    _this.let = _this.add.text(4, 20, ' +a' + _this.power);
                psquare.addChild(_this.let);
                _this.space1Boxes.addChild(psquare);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("111");
                psquare.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(4, 20, ' +x' + _this.power);
                psquare.addChild(_this.let);
                _this.space1Boxes.addChild(psquare);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("511");
                psquare.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(4, 20, ' +x' + _this.power);
                psquare.addChild(_this.let);
                _this.space1Boxes.addChild(psquare);
            }
        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';
    },

    //Adding the plus a to top of panel.
    pa: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 30) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 6;
        let prectangle;
        prectangle = _this.add.sprite(305, 186, 'pink2.2');

        prectangle.name = '21';
        if (_this.space1Boxes.length == 0) {
            if (_this.ques[_this.count] == 4)
                _this.let = _this.add.text(35, 2, ' +x');
            else
                _this.let = _this.add.text(35, 2, ' +a');
            prectangle.addChild(_this.let);
            _this.space1Boxes.addChild(prectangle);
        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("6");
                prectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(35, 2, ' +x');
                else
                    _this.let = _this.add.text(35, 2, ' +a');
                prectangle.addChild(_this.let);
                _this.space1Boxes.addChild(prectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("7");
                prectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(35, 2, ' +x');
                else
                    _this.let = _this.add.text(35, 2, ' +a');
                prectangle.addChild(_this.let);
                _this.space1Boxes.addChild(prectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("8");
                prectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(35, 2, ' +x');
                else
                    _this.let = _this.add.text(35, 2, ' +a');
                prectangle.addChild(_this.let);
                _this.space1Boxes.addChild(prectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("9");
                prectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(35, 2, ' +x');
                else
                    _this.let = _this.add.text(35, 2, ' +a');
                prectangle.addChild(_this.let);
                _this.space1Boxes.addChild(prectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("10");
                prectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(35, 2, ' +x');
                else
                    _this.let = _this.add.text(35, 2, ' +a');
                prectangle.addChild(_this.let);
                _this.space1Boxes.addChild(prectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("119");
                prectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(35, 2, ' +x');
                prectangle.addChild(_this.let);
                _this.space1Boxes.addChild(prectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("1110");
                prectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(35, 2, ' +x');
                prectangle.addChild(_this.let);
                _this.space1Boxes.addChild(prectangle);
            }
        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';
    },

    //Adding the plus ab to top of panel
    pab: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 30) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 6;
        let prectanglee;
        prectanglee = _this.add.sprite(305, 178, 'pink3');

        prectanglee.name = '31';
        if (_this.space1Boxes.length == 0) {
            if (_this.ques[_this.count] == 4)
                _this.let = _this.add.text(1, 6, ' +xa');
            else
                _this.let = _this.add.text(1, 6, ' +ab');
            prectanglee.addChild(_this.let);
            _this.space1Boxes.addChild(prectanglee);
        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("11");
                prectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(1, 6, ' +xa');
                else
                    _this.let = _this.add.text(1, 6, ' +ab');
                prectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(prectanglee);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("12");
                prectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(1, 6, ' +xa');
                else
                    _this.let = _this.add.text(1, 6, ' +ab');
                prectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(prectanglee);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("13");
                prectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(1, 6, ' +xa');
                else
                    _this.let = _this.add.text(1, 6, ' +ab');
                prectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(prectanglee);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("14");
                prectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(1, 6, ' +xa');
                else
                    _this.let = _this.add.text(1, 6, ' +ab');
                prectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(prectanglee);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("15");
                prectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(1, 6, ' +xa');
                else
                    _this.let = _this.add.text(1, 6, ' +ab');
                prectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(prectanglee);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("147");
                prectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(1, 6, ' +xa');
                prectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(prectanglee);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("165");
                prectanglee.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(1, 6, ' +xa');
                prectanglee.addChild(_this.let);
                _this.space1Boxes.addChild(prectanglee);
            }

        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';
    },

    //Adding the plus b to top of panel
    pb: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 30) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 6;
        let preectangle;
        preectangle = _this.add.sprite(305, 186, 'pink2.3');

        preectangle.name = '41';
        if (_this.space1Boxes.length == 0) {
            if (_this.ques[_this.count] == 4)
                _this.let = _this.add.text(14, 3, ' +a');
            else
                _this.let = _this.add.text(14, 3, ' +b');
            preectangle.addChild(_this.let);
            _this.space1Boxes.addChild(preectangle);
        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("16");
                preectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(14, 3, ' +a');
                else
                    _this.let = _this.add.text(14, 3, ' +b');
                preectangle.addChild(_this.let);
                _this.space1Boxes.addChild(preectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("17");
                preectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(14, 3, ' +a');
                else
                    _this.let = _this.add.text(14, 3, ' +b');
                preectangle.addChild(_this.let);
                _this.space1Boxes.addChild(preectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("18");
                preectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(14, 3, ' +a');
                else
                    _this.let = _this.add.text(14, 3, ' +b');
                preectangle.addChild(_this.let);
                _this.space1Boxes.addChild(preectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("19");
                preectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(14, 3, ' +a');
                else
                    _this.let = _this.add.text(14, 3, ' +b');
                preectangle.addChild(_this.let);
                _this.space1Boxes.addChild(preectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("20");
                preectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(14, 3, ' +a');
                else
                    _this.let = _this.add.text(14, 3, ' +b');
                preectangle.addChild(_this.let);
                _this.space1Boxes.addChild(preectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("195");
                preectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(14, 3, ' +a');
                preectangle.addChild(_this.let);
                _this.space1Boxes.addChild(preectangle);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("260");
                preectangle.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(14, 3, ' +a');
                preectangle.addChild(_this.let);
                _this.space1Boxes.addChild(preectangle);
            }
        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';
    },

    //Adding the plus b square to top of panel
    pbS2: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 36) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 3;
        let psquaree;
        psquaree = _this.add.sprite(305, 178, 'pink5');
        psquaree.name = '51';
        if (_this.space1Boxes.length == 0) {
            if (_this.ques[_this.count] == 4)
                _this.let = _this.add.text(-6, 9, ' +ab');
            else
                _this.let = _this.add.text(-3, 9, ' +b' + _this.power);
            psquaree.addChild(_this.let);
            _this.space1Boxes.addChild(psquaree);
        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("21");
                psquaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(-6, 9, ' +ab');
                else
                    _this.let = _this.add.text(-3, 9, ' +b' + _this.power);
                psquaree.addChild(_this.let);
                _this.space1Boxes.addChild(psquaree);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("22");
                psquaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(-6, 9, ' +ab');
                else
                    _this.let = _this.add.text(-3, 9, ' +b' + _this.power);
                psquaree.addChild(_this.let);
                _this.space1Boxes.addChild(psquaree);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("23");
                psquaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(-6, 9, ' +ab');
                else
                    _this.let = _this.add.text(-3, 9, ' +b' + _this.power);
                psquaree.addChild(_this.let);
                _this.space1Boxes.addChild(psquaree);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("24");
                psquaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(-6, 9, ' +ab');
                else
                    _this.let = _this.add.text(-3, 9, ' +b' + _this.power);
                psquaree.addChild(_this.let);
                _this.space1Boxes.addChild(psquaree);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("25");
                psquaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                if (_this.ques[_this.count] == 4)
                    _this.let = _this.add.text(-6, 9, ' +ab');
                else
                    _this.let = _this.add.text(-3, 9, ' +b' + _this.power);
                psquaree.addChild(_this.let);
                _this.space1Boxes.addChild(psquaree);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("24");
                psquaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(-6, 9, ' +ab');
                psquaree.addChild(_this.let);
                _this.space1Boxes.addChild(psquaree);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("25");
                psquaree.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(-6, 9, ' +ab');
                psquaree.addChild(_this.let);
                _this.space1Boxes.addChild(psquaree);
            }
        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '21px';
    },

    //Adding the minus xb to top of panel
    pxb: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 36) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 6;
        let rectanglee2;
        rectanglee2 = _this.add.sprite(305, 187, 'pink3');
        rectanglee2.scale.setTo(1.08, 0.75);

        rectanglee2.name = '61';
        if (_this.space1Boxes.length == 0) {
            _this.let = _this.add.text(2, 6, ' +xb');
            rectanglee2.addChild(_this.let);
            _this.space1Boxes.addChild(rectanglee2);
        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("11");
                rectanglee2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                _this.let = _this.add.text(2, 6, ' +xb');
                rectanglee2.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee2);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("12");
                rectanglee2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                _this.let = _this.add.text(2, 6, ' +xb');
                rectanglee2.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee2);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("13");
                rectanglee2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                _this.let = _this.add.text(2, 6, ' +xb');
                rectanglee2.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee2);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("14");
                rectanglee2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                _this.let = _this.add.text(2, 6, ' +xb');
                rectanglee2.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee2);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("15");
                rectanglee2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                _this.let = _this.add.text(2, 6, ' +xb');
                rectanglee2.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee2);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("15");
                rectanglee2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(2, 6, ' +xb');
                rectanglee2.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee2);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("15");
                rectanglee2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(2, 6, ' +xb');
                rectanglee2.addChild(_this.let);
                _this.space1Boxes.addChild(rectanglee2);
            }

        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';
    },

    //Adding the minus b to top of panel
    pbb: function () {
        _this.clickSound.play();
        if (_this.limit1 + 6 > 36) {
            _this.wrongSound.play();
            return;
        }
        _this.limit1 += 6;
        let reectangle2;
        reectangle2 = _this.add.sprite(305, 189, 'pink2.3');
        reectangle2.scale.setTo(1.08, 0.9);

        reectangle2.name = '71';
        if (_this.space1Boxes.length == 0) {
            _this.let = _this.add.text(20, 2, ' +b');
            reectangle2.addChild(_this.let);
            _this.space1Boxes.addChild(reectangle2);
        }
        else {
            if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '1') {
                console.log("16");
                reectangle2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                _this.let = _this.add.text(20, 2, ' +b');
                reectangle2.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle2);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '2') {
                console.log("17");
                reectangle2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 125;
                _this.let = _this.add.text(20, 2, ' +b');
                reectangle2.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle2);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '3') {
                console.log("18");
                reectangle2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 56;
                _this.let = _this.add.text(20, 2, ' +b');
                reectangle2.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle2);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '4') {
                console.log("19");
                reectangle2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 86;
                _this.let = _this.add.text(20, 2, ' +b');
                reectangle2.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle2);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '5') {
                console.log("20");
                reectangle2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 40;
                _this.let = _this.add.text(20, 2, ' +b');
                reectangle2.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle2);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '6') {
                console.log("20");
                reectangle2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 60;
                _this.let = _this.add.text(20, 2, ' +b');
                reectangle2.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle2);
            }
            else if (_this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).name[0] == '7') {
                console.log("19");
                reectangle2.x = _this.space1Boxes.getChildAt(_this.space1Boxes.length - 1).x + 91;
                _this.let = _this.add.text(20, 2, ' +b');
                reectangle2.addChild(_this.let);
                _this.space1Boxes.addChild(reectangle2);
            }

        }
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';
    },

    //Tick button in the question screen and the evaluation of the top box or workspace.
    tickEvaluation: function (target) {
        _this.clickSound.play();
        _this.tick.inputEnabled = false;
        let a = [];
        let b = [];
        a.push(0);
        a.push(0);
        a.push(0);
        a.push(0);
        a.push(0);
        a.push(0);
        a.push(0);

        b.push(0);
        b.push(0);
        b.push(0);
        b.push(0);
        b.push(0);
        b.push(0);
        b.push(0);

        //Evaluating the number of blocks in the top space.
        for (let i = 0; i < _this.space1Boxes.length; i++) {
            if (_this.space1Boxes.getChildAt(i).name == '10') {
                a[0] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '20') {
                a[1] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '30') {
                a[2] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '40') {
                a[3] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '50') {
                a[4] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '60') {
                a[5] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '70') {
                a[6] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '11') {
                b[0] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '21') {
                b[1] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '31') {
                b[2] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '41') {
                b[3] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '51') {
                b[4] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '61') {
                b[5] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '71') {
                b[6] += 1;
            }
        }

        //check for tiles placed as well as their position
        if (_this.ques[_this.count] == 1 && a[1] == 0 && a[3] == 0 && a[0] == 0 && a[2] == 0 && a[4] == 0 && b[1] == 1 && b[3] == 1 && b[0] == 0 && b[2] == 0 && b[4] == 0)
            if (_this.space1Boxes.getChildAt(0).name == '21' && _this.space1Boxes.getChildAt(1).name == '41') // to check if they r in correct position
                _this.flag1 = 1;

        if (_this.ques[_this.count] == 2 && a[1] == 0 && a[3] == -1 && a[0] == 0 && a[2] == 0 && a[4] == 0 && b[1] == 1 && b[3] == 0 && b[0] == 0 && b[2] == 0 && b[4] == 0)
            if (_this.space1Boxes.getChildAt(0).name == '21' && _this.space1Boxes.getChildAt(1).name == '40')
                _this.flag2 = 1;

        if (_this.ques[_this.count] == 3 && a[1] == 0 && a[3] == 0 && a[0] == 0 && a[2] == 0 && a[4] == 0 && b[1] == 1 && b[3] == 1 && b[0] == 0 && b[2] == 0 && b[4] == 0)
            if (_this.space1Boxes.getChildAt(0).name == '21' && _this.space1Boxes.getChildAt(1).name == '41')
                _this.flag3 = 1;

        if (_this.ques[_this.count] == 4 && a[5] == 0 && a[6] == 0 && a[1] == 0 && a[3] == 0 && a[0] == 0 && a[2] == 0 && a[4] == 0 && b[1] == 1 && b[3] == 1 && b[0] == 0 && b[2] == 0 && b[4] == 0 && b[5] == 0 && b[6] == 0)
            if (_this.space1Boxes.getChildAt(0).name == '21' && _this.space1Boxes.getChildAt(1).name == '41')
                _this.flag4 = 1;

        if (_this.flag1 == 1 || _this.flag2 == 1 || _this.flag3 == 1 || _this.flag4 == 1) {
            target.events.onInputDown.removeAll();
            _this.eraser.events.onDragStop.removeAll();
            _this.eraser.events.onDragStop.add(_this.eraserDrop2, _this);

            _this.green1.events.onInputDown.removeAll();
            _this.green2.events.onInputDown.removeAll();
            _this.green3.events.onInputDown.removeAll();
            _this.green4.events.onInputDown.removeAll();
            _this.green5.events.onInputDown.removeAll();

            _this.pink1.events.onInputDown.removeAll();
            _this.pink2.events.onInputDown.removeAll();
            _this.pink3.events.onInputDown.removeAll();
            _this.pink4.events.onInputDown.removeAll();
            _this.pink5.events.onInputDown.removeAll();

            //add functions for vertical tiles adding now
            _this.green1.events.onInputDown.add(_this.mmaS2);
            _this.green2.events.onInputDown.add(_this.mma);
            _this.green3.events.onInputDown.add(_this.mmab);
            _this.green4.events.onInputDown.add(_this.mmb);
            _this.green5.events.onInputDown.add(_this.mmbS2);

            _this.pink1.events.onInputDown.add(_this.ppaS2);
            _this.pink2.events.onInputDown.add(_this.ppa);
            _this.pink3.events.onInputDown.add(_this.ppab);
            _this.pink4.events.onInputDown.add(_this.ppb);
            _this.pink5.events.onInputDown.add(_this.ppbS2);

            if (_this.ques[_this.count] == 4) //for 4th ques extra 2 tiles
            {
                _this.green6.events.onInputDown.removeAll();
                _this.green7.events.onInputDown.removeAll();
                _this.pink6.events.onInputDown.removeAll();
                _this.pink7.events.onInputDown.removeAll();
                _this.green6.events.onInputDown.add(_this.mmxb);
                _this.green7.events.onInputDown.add(_this.mmbb);
                _this.pink6.events.onInputDown.add(_this.ppxb);
                _this.pink7.events.onInputDown.add(_this.ppbb);
            }

            _this.tick.inputEnabled = true;
            target.events.onInputDown.add(_this.tickSecondEvaluation, _this);  //change tick to vertical tick evaluation

            _this.limit1 = 0; //reset limit value to 0
            _this.framechange.play();
            _this.textBox.frame = 2;

            if (_this.count == 0) _this.Ask_Question2_2.play();

            _this.Question_flag = 8;
        }
        else {
            _this.space1Boxes.destroy();
            _this.space1Boxes = _this.add.group();
            _this.limit1 = 0;
            _this.wrongans.play();
            _this.tick.inputEnabled = true;
        }
    },

    ChangeFrame1: function () {  //to change frames
        console.log('inside change frame....')
        for (let i = 0; i < _this.space1Boxes.length; i++) {
            _this.space1Boxes.getChildAt(i).frame = 1;
        }
    },

    ChangeFrame2: function () {
        console.log('inside change frame....')
        for (let i = 0; i < _this.space2Boxes.length; i++) {
            _this.space2Boxes.getChildAt(i).frame = 1;
        }
    },

    //adding minus a square tile to bottom
    mmaS2: function () {
        _this.clickSound.play();
        _this.ssquare1;

        if (_this.verticalY >= 460) {
            _this.wrongSound.play();
            return;

        }
        _this.ssquare1 = _this.add.image(250, _this.verticalY, 'green1');
        _this.verticalY += 60;
        _this.ssquare1.name = '10';
        if (_this.ques[_this.count] == 4)
            _this.let = _this.add.text(10, 50, ' -x' + _this.power);
        else
            _this.let = _this.add.text(10, 50, ' -a' + _this.power);
        _this.let.angle = -90;
        _this.ssquare1.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';

        _this.space2Boxes.addChild(_this.ssquare1);

    },

    //adding minus a  tile to bottom
    mma: function () {
        _this.clickSound.play();
        _this.rectangle1;
        if (_this.verticalY >= 400) {
            _this.wrongSound.play();
            return;
        }
        _this.rectangle1 = _this.add.image(275, _this.verticalY, 'green2.1');
        _this.rectangle1.name = '20';
        _this.verticalY += 126;
        if (_this.ques[_this.count] == 4)
            _this.let = _this.add.text(2, 78, ' -x');
        else
            _this.let = _this.add.text(5, 78, ' -a');
        _this.let.angle = -90;
        _this.rectangle1.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';

        _this.space2Boxes.addChild(_this.rectangle1);

    },

    //adding minus ab tile to bottom
    mmab: function () {
        _this.clickSound.play();
        _this.rectangle2;

        if (_this.verticalY >= 440) {
            _this.wrongSound.play();
            return;
        }

        _this.rectangle2 = _this.add.image(308, _this.verticalY, 'green3');
        _this.rectangle2.name = '30';
        _this.rectangle2.angle = 90;
        _this.verticalY += 60;
        if (_this.ques[_this.count] == 4)
            _this.let = _this.add.text(55, 35, ' -xa');
        else
            _this.let = _this.add.text(55, 35, ' -ab');
        _this.let.angle = 180;
        _this.rectangle2.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';

        _this.space2Boxes.addChild(_this.rectangle2);

    },

    //adding minus b tile to bottom
    mmb: function () {
        _this.clickSound.play();
        _this.rectangle3;

        if (_this.verticalY >= 440) {
            _this.wrongSound.play();
            return;
        }
        _this.rectangle3 = _this.add.image(274, _this.verticalY, 'green2.4');
        _this.rectangle3.name = '40';
        _this.verticalY += 87;
        if (_this.ques[_this.count] == 4)
            _this.let = _this.add.text(2, 65, ' -a');
        else
            _this.let = _this.add.text(5, 65, ' -b');
        _this.let.angle = -90;
        _this.rectangle3.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';


        _this.space2Boxes.addChild(_this.rectangle3);

    },

    //adding minus b square tile to bottom
    mmbS2: function () {
        _this.clickSound.play();
        _this.ssquare2;

        if (_this.verticalY >= 460) {
            _this.wrongSound.play();
            return;
        }
        _this.ssquare2 = _this.add.image(267, _this.verticalY, 'green5');
        _this.verticalY += 40;
        _this.ssquare2.name = '50';
        if (_this.ques[_this.count] == 4)
            _this.let = _this.add.text(10, 40, ' -ab');
        else
            _this.let = _this.add.text(10, 40, ' -b' + _this.power);
        _this.let.angle = -90;
        _this.ssquare2.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '21px';

        _this.space2Boxes.addChild(_this.ssquare2);

    },

    mmxb: function () {
        _this.clickSound.play();
        _this.rectangle22;

        if (_this.verticalY >= 440) {
            _this.wrongSound.play();
            return;
        }
        _this.rectangle22 = _this.add.image(307, _this.verticalY, 'green3');
        _this.rectangle22.scale.setTo(1.08, 0.75);
        _this.rectangle22.name = '60';
        _this.rectangle22.angle = 90;
        _this.verticalY += 62;
        _this.let = _this.add.text(55, 35, ' -xb');
        _this.let.angle = 180;
        _this.rectangle22.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';

        _this.space2Boxes.addChild(_this.rectangle22);

    },

    //adding minus a  tile to bottom
    mmbb: function () {
        _this.clickSound.play();
        _this.rectangle11;
        if (_this.verticalY >= 400) {
            _this.wrongSound.play();
            return;
        }
        _this.rectangle11 = _this.add.image(273, _this.verticalY, 'green2.1');
        _this.rectangle11.scale.setTo(1.08, 0.9);
        _this.rectangle11.name = '70';
        _this.verticalY += 113;
        _this.let = _this.add.text(2, 80, ' -b');
        _this.let.angle = -90;
        _this.rectangle11.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '22px';

        _this.space2Boxes.addChild(_this.rectangle11);

    },

    //adding plus a square tile to bottom
    ppaS2: function () {
        _this.clickSound.play();
        _this.ssquare3;

        if (_this.verticalY >= 460) {
            _this.wrongSound.play();
            return;
        }
        _this.ssquare3 = _this.add.image(250, _this.verticalY, 'pink1');
        _this.verticalY += 60;
        _this.ssquare3.name = '11';
        if (_this.ques[_this.count] == 4)
            _this.let = _this.add.text(10, 53, ' +x' + _this.power);
        else
            _this.let = _this.add.text(10, 50, ' +a' + _this.power);
        _this.let.angle = -90;
        _this.ssquare3.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';

        _this.space2Boxes.addChild(_this.ssquare3);

    },

    //adding plus a tile to bottom
    ppa: function () {
        _this.clickSound.play();
        _this.rectangle4;
        if (_this.verticalY >= 400) {
            _this.wrongSound.play();
            return;
        }

        _this.rectangle4 = _this.add.image(275, _this.verticalY, 'pink2.1');
        _this.rectangle4.name = '21';
        _this.verticalY += 126;
        if (_this.ques[_this.count] == 4)
            _this.let = _this.add.text(2, 77, ' +x');
        else
            _this.let = _this.add.text(5, 77, ' +a');
        _this.let.angle = -90;
        _this.rectangle4.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';

        _this.space2Boxes.addChild(_this.rectangle4);

    },

    //adding plus ab tile to bottom
    ppab: function () {
        _this.clickSound.play();
        _this.rectangle5;

        if (_this.verticalY >= 440) {
            _this.wrongSound.play();
            return;
        }
        _this.rectangle5 = _this.add.image(308, _this.verticalY, 'pink3');
        _this.rectangle5.name = '31';
        _this.rectangle5.angle = 90;
        _this.verticalY += 60;
        if (_this.ques[_this.count] == 4)
            _this.let = _this.add.text(55, 35, ' +xa');
        else
            _this.let = _this.add.text(55, 35, ' +ab');
        _this.let.angle = 180;
        _this.rectangle5.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';

        _this.space2Boxes.addChild(_this.rectangle5);

    },

    //adding plus ab tile to bottom
    ppb: function () {
        _this.clickSound.play();
        _this.rectangle6;

        if (_this.verticalY >= 440) {
            _this.wrongSound.play();
            return;
        }
        _this.rectangle6 = _this.add.image(275, _this.verticalY, 'pink2.4');
        _this.rectangle6.name = '41';
        _this.verticalY += 87;
        if (_this.ques[_this.count] == 4)
            _this.let = _this.add.text(2, 65, ' +a');
        else
            _this.let = _this.add.text(5, 65, ' +b');
        _this.let.angle = -90;
        _this.rectangle6.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';

        _this.space2Boxes.addChild(_this.rectangle6);

    },

    //adding plus b square tile to bottom
    ppbS2: function () {
        _this.clickSound.play();
        _this.ssquare4;

        if (_this.verticalY >= 460) {
            _this.wrongSound.play();
            return;
        }
        _this.ssquare4 = _this.add.image(267, _this.verticalY, 'pink5');
        _this.verticalY += 40;
        _this.ssquare4.name = '51';
        if (_this.ques[_this.count] == 4)
            _this.let = _this.add.text(10, 42, ' +ab');
        else
            _this.let = _this.add.text(10, 42, ' +b' + _this.power);
        _this.let.angle = -90;
        _this.ssquare4.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '21px';

        _this.space2Boxes.addChild(_this.ssquare4);

    },

    ppxb: function () {
        _this.clickSound.play();
        _this.rectangle222;

        if (_this.verticalY >= 440) {
            _this.wrongSound.play();
            return;
        }

        _this.rectangle222 = _this.add.image(307, _this.verticalY, 'pink3');
        _this.rectangle222.scale.setTo(1.08, 0.75);
        _this.rectangle222.name = '61';
        _this.rectangle222.angle = 90;
        _this.verticalY += 62;
        _this.let = _this.add.text(55, 37, ' +xb');
        _this.let.angle = 180;
        _this.rectangle222.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '25px';

        _this.space2Boxes.addChild(_this.rectangle222);

    },

    //adding minus a  tile to bottom
    ppbb: function () {
        _this.clickSound.play();
        _this.rectangle111;
        if (_this.verticalY >= 400) {
            _this.wrongSound.play();
            return;
        }

        _this.rectangle111 = _this.add.image(275, _this.verticalY, 'pink2.1');
        _this.rectangle111.scale.setTo(1.02, 0.9);
        _this.rectangle111.name = '71';
        _this.verticalY += 113;
        _this.let = _this.add.text(2, 80, ' +b');
        _this.let.angle = -90;
        _this.rectangle111.addChild(_this.let);
        _this.let.fill = '#ffffff';
        _this.let.fontSize = '22px';

        _this.space2Boxes.addChild(_this.rectangle111);

    },


    //Evaluation of the bottom box or the workspace.
    tickSecondEvaluation: function (target) {
        console.log("tick second evaluation");
        _this.clickSound.play();
        let a = [];
        let b = [];
        a.push(0);
        a.push(0);
        a.push(0);
        a.push(0);
        a.push(0);
        a.push(0);
        a.push(0);

        b.push(0);
        b.push(0);
        b.push(0);
        b.push(0);
        b.push(0);
        b.push(0);
        b.push(0);

        //Evaluating the number of blocks in the top space.
        for (let i = 0; i < _this.space2Boxes.length; i++) {
            if (_this.space2Boxes.getChildAt(i).name == '10') {
                a[0] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '20') {
                a[1] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '30') {
                a[2] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '40') {
                a[3] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '50') {
                a[4] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '60') {
                a[5] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '70') {
                a[6] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '11') {
                b[0] += 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '21') {
                b[1] += 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '31') {
                b[2] += 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '41') {
                b[3] += 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '51') {
                b[4] += 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '61') {
                b[5] += 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '71') {
                b[6] += 1;
            }
        }

        if (_this.ques[_this.count] == 1 && a[1] == 0 && a[3] == 0 && a[0] == 0 && a[2] == 0 && a[4] == 0 && b[1] == 1 && b[3] == 1 && b[0] == 0 && b[2] == 0 && b[4] == 0)
            if (_this.space2Boxes.getChildAt(0).name == '21' && _this.space2Boxes.getChildAt(1).name == '41')
                _this.flag5 = 1;

        if (_this.ques[_this.count] == 2 && a[1] == 0 && a[3] == -1 && a[0] == 0 && a[2] == 0 && a[4] == 0 && b[1] == 1 && b[3] == 0 && b[0] == 0 && b[2] == 0 && b[4] == 0)
            if (_this.space2Boxes.getChildAt(0).name == '21' && _this.space2Boxes.getChildAt(1).name == '40')
                _this.flag6 = 1;

        if (_this.ques[_this.count] == 3 && a[1] == 0 && a[3] == -1 && a[0] == 0 && a[2] == 0 && a[4] == 0 && b[1] == 1 && b[3] == 0 && b[0] == 0 && b[2] == 0 && b[4] == 0)
            if (_this.space2Boxes.getChildAt(0).name == '21' && _this.space2Boxes.getChildAt(1).name == '40')
                _this.flag7 = 1;

        if (_this.ques[_this.count] == 4 && a[5] == 0 && a[6] == 0 && a[1] == 0 && a[3] == 0 && a[0] == 0 && a[2] == 0 && a[4] == 0 && b[1] == 1 && b[3] == 0 && b[0] == 0 && b[2] == 0 && b[4] == 0 && b[5] == 0 && b[6] == 1)
            if (_this.space2Boxes.getChildAt(0).name == '21' && _this.space2Boxes.getChildAt(1).name == '71')
                _this.flag8 = 1;

        if (_this.flag5 == 1 || _this.flag6 == 1 || _this.flag7 == 1 || _this.flag8 == 1) {
            target.events.onInputDown.removeAll();

            _this.framechange.play();
            _this.ChangeFrame1();
            _this.ChangeFrame2();

            //    if(_this.ques[_this.count] ==1)
            //    {
            //     _this.letha = _this.add.text(330,155, ' +a');
            //     _this.letha.fill = '#ff80bf';
            //     _this.lethb = _this.add.text(440,155, ' +b');
            //     _this.lethb.fill = '#ff80bf';
            //     _this.letva = _this.add.text(235,260, ' +a');
            //     _this.letva.fill = '#ff80bf';
            //     _this.letvb = _this.add.text(235,370, ' +b');
            //     _this.letvb.fill = '#ff80bf';
            //    }
            //    else if(_this.ques[_this.count] ==2)
            //    {
            //     _this.letha = _this.add.text(330,155, ' +a');
            //     _this.letha.fill = '#ff80bf';
            //     _this.lethb = _this.add.text(440,155, ' -b');
            //     _this.lethb.fill = '#99ff99';
            //     _this.letva = _this.add.text(235,260, ' +a');
            //     _this.letva.fill = '#ff80bf';
            //     _this.letvb = _this.add.text(235,370, ' -b');
            //     _this.letvb.fill = '#99ff99';
            //    }
            //    else if(_this.ques[_this.count] ==3)
            //    {
            //     _this.letha = _this.add.text(330,155, ' +a');
            //     _this.letha.fill = '#ff80bf';
            //     _this.lethb = _this.add.text(440,155, ' +b');
            //     _this.lethb.fill = '#ff80bf';
            //     _this.letva = _this.add.text(235,260, ' +a');
            //     _this.letva.fill = '#ff80bf';
            //     _this.letvb = _this.add.text(235,370, ' -b');
            //     _this.letvb.fill = '#99ff99';
            //    }
            //    else if(_this.ques[_this.count] ==4)
            //    {
            //     _this.letha = _this.add.text(330,155, ' +x');
            //     _this.letha.fill = '#ff80bf';
            //     _this.lethb = _this.add.text(440,155, ' +a');
            //     _this.lethb.fill = '#ff80bf';
            //     _this.letva = _this.add.text(235,260, ' +x');
            //     _this.letva.fill = '#ff80bf';
            //     _this.letvb = _this.add.text(235,370, ' +b');
            //     _this.letvb.fill = '#ff80bf';
            //    }

            _this.eraser.events.onDragStop.removeAll();
            _this.eraser.events.onDragStop.add(_this.eraserDrop3, _this);

            _this.green1.events.onInputDown.removeAll();
            _this.green2.events.onInputDown.removeAll();
            _this.green3.events.onInputDown.removeAll();
            _this.green4.events.onInputDown.removeAll();
            _this.green5.events.onInputDown.removeAll();

            _this.pink1.events.onInputDown.removeAll();
            _this.pink2.events.onInputDown.removeAll();
            _this.pink3.events.onInputDown.removeAll();
            _this.pink4.events.onInputDown.removeAll();
            _this.pink5.events.onInputDown.removeAll();

            if (_this.ques[_this.count] == 4) {
                _this.green6.events.onInputDown.removeAll();
                _this.green7.events.onInputDown.removeAll();

                _this.pink6.events.onInputDown.removeAll();
                _this.pink7.events.onInputDown.removeAll();
            }

            if (_this.count == 0)
                _this.Ask_Question2.play();
            _this.Question_flag = 2;
            if (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 2) {
                _this.textBox.destroy();
                _this.textBox = _this.add.sprite(240, 60, 'textbox4');
                _this.textBox.frame = 1;
                _this.string = _this.string + '   = ';
                _this.questionText = _this.add.text(25, 19, _this.string);
            }
            else {
                _this.textBox.destroy();
                _this.textBox = _this.add.sprite(240, 60, 'textbox2');
                _this.textBox.frame = 2;
                if (_this.ques[_this.count] == 4)
                    _this.string = "(x+a)*(x+b)" + "  =";
                else
                    _this.string = "(a+b)*(a-b)" + "  =";
                _this.questionText = _this.add.text(5, 19, _this.string);
            }

            _this.applyingStyle(_this.questionText);
            _this.textBox.addChild(_this.questionText);



            // _this.yellowHigh.visible=false;

            target.events.onInputDown.add(_this.tickThirdEvaluation, _this);

            //add events for dragging og tiles
            _this.green1.input.enableDrag(true);
            _this.green1.events.onDragUpdate.add(_this.green1Update, _this);
            _this.green1.events.onDragStop.add(_this.green1Drop, _this);

            _this.green2.input.enableDrag(true);
            _this.green2.events.onDragUpdate.add(_this.green2Update, _this);
            _this.green2.events.onDragStop.add(_this.green2Drop, _this);

            _this.green3.input.enableDrag(true);
            _this.green3.events.onDragUpdate.add(_this.green3Update, _this);
            _this.green3.events.onDragStop.add(_this.green3Drop, _this);

            _this.green4.input.enableDrag(true);
            _this.green4.events.onDragUpdate.add(_this.green4Update, _this);
            _this.green4.events.onDragStop.add(_this.green4Drop, _this);

            _this.green5.input.enableDrag(true);
            _this.green5.events.onDragUpdate.add(_this.green5Update, _this);
            _this.green5.events.onDragStop.add(_this.green5Drop, _this);

            _this.pink1.input.enableDrag(true);
            _this.pink1.events.onDragUpdate.add(_this.pink1Update, _this);
            _this.pink1.events.onDragStop.add(_this.pink1Drop, _this);

            _this.pink2.input.enableDrag(true);
            _this.pink2.events.onDragUpdate.add(_this.pink2Update, _this);
            _this.pink2.events.onDragStop.add(_this.pink2Drop, _this);

            _this.pink3.input.enableDrag(true);
            _this.pink3.events.onDragUpdate.add(_this.pink3Update, _this);
            _this.pink3.events.onDragStop.add(_this.pink3Drop, _this);

            _this.pink4.input.enableDrag(true);
            _this.pink4.events.onDragUpdate.add(_this.pink4Update, _this);
            _this.pink4.events.onDragStop.add(_this.pink4Drop, _this);

            _this.pink5.input.enableDrag(true);
            _this.pink5.events.onDragUpdate.add(_this.pink5Update, _this);
            _this.pink5.events.onDragStop.add(_this.pink5Drop, _this);

            if (_this.ques[_this.count] == 4) {
                _this.green6.input.enableDrag(true);
                _this.green6.events.onDragUpdate.add(_this.green6Update, _this);
                _this.green6.events.onDragStop.add(_this.green6Drop, _this);

                _this.green7.input.enableDrag(true);
                _this.green7.events.onDragUpdate.add(_this.green7Update, _this);
                _this.green7.events.onDragStop.add(_this.green7Drop, _this);

                _this.pink6.input.enableDrag(true);
                _this.pink6.events.onDragUpdate.add(_this.pink6Update, _this);
                _this.pink6.events.onDragStop.add(_this.pink6Drop, _this);

                _this.pink7.input.enableDrag(true);
                _this.pink7.events.onDragUpdate.add(_this.pink7Update, _this);
                _this.pink7.events.onDragStop.add(_this.pink7Drop, _this);
            }
        }
        else {
            _this.space2Boxes.destroy();
            _this.space2Boxes = _this.add.group();
            _this.verticalY = 215;
            _this.wrongans.play();
        }

    },

    green1Update: function (target) {
        _this.green1.bringToTop();

    },

    green1Drop: function (target) {
        if (_this.checkOverlap(target, _this.panel1) && _this.aSquareflag == 0)
            _this.green1yes = 1;

        if (_this.green1yes == 1 && _this.aSquareflag == 0) //if there is no tile placed yet
        {
            _this.green11 = _this.add.sprite(305, 215, 'all2');
            _this.green11.frame = 2;
            _this.green11.name = '1';
            _this.space3Boxes.addChild(_this.green11);
            _this.aSquareflag = 1;  //flag set to tell that the tile is placed
        }
        else
            _this.wrongSound.play();

        _this.green1.x = 13;
        if (_this.ques[_this.count] == 4)
            _this.green1.y = 2;
        else
            _this.green1.y = 10;

    },

    green2Update: function () {
        _this.green2.bringToTop();

    },

    green2Drop: function () {
        _this.wrongSound.play();
        _this.green2.x = 13;
        if (_this.ques[_this.count] == 4)
            _this.green2.y = 85;
        else
            _this.green2.y = 105;
    },

    green3Update: function (target) {
        _this.green3.bringToTop();

    },

    green3Drop: function (target) {

        if (_this.checkOverlap(target, _this.panel1) && (_this.abHorflag == 0 || _this.abVerflag == 0))
            _this.green3yes = 1;

        if (_this.ques[_this.count] == 4)  //for fourth question
        {
            if (_this.green3yes == 1 && _this.abHorflag == 0) {
                console.log("2");
                _this.green44 = _this.add.sprite(430, 215, 'all3');
                _this.green44.frame = 2;
                _this.green44.name = '4';
                _this.abHorflag = 1;
                _this.green3yes = 0;
                _this.space3Boxes.addChild(_this.green44);
            }
            else
                _this.wrongSound.play();

        }
        else {
            if (_this.abHorflag == 1 && _this.abVerflag == 1)
                _this.wrongSound.play();

            if (_this.green3yes == 1 && _this.abHorflag == 1 && _this.abVerflag == 0) {
                console.log("1");
                _this.green33 = _this.add.sprite(305, 340, 'all1');
                _this.green33.frame = 2;
                _this.green33.name = '3';
                _this.abVerflag = 1;
                _this.green3yes = 0;
                _this.space3Boxes.addChild(_this.green33);
            }
            else if (_this.green3yes == 1 && _this.abHorflag == 0) {
                console.log("2");
                _this.green44 = _this.add.sprite(430, 215, 'all3');
                _this.green44.frame = 2;
                _this.green44.name = '4';
                _this.abHorflag = 1;
                _this.green3yes = 0;
                _this.space3Boxes.addChild(_this.green44);
            }
        }



        _this.green3.x = 13;
        if (_this.ques[_this.count] == 4)
            _this.green3.y = 120;
        else
            _this.green3.y = 140;

    },


    green4Update: function () {
        _this.green4.bringToTop();
    },

    green4Drop: function () {
        _this.wrongSound.play();
        _this.green4.x = 20;
        if (_this.ques[_this.count] == 4)
            _this.green4.y = 190;
        else
            _this.green4.y = 215;
    },

    green5Update: function (target) {
        _this.green5.bringToTop();
    },

    green5Drop: function (target) {
        if (_this.checkOverlap(target, _this.panel1) && _this.bSquareflag == 0)
            _this.green5yes = 1;


        if (_this.green5yes == 1 && _this.bSquareflag == 0) {
            _this.green55 = _this.add.sprite(430, 340, 'all4');
            if (_this.ques[_this.count] == 4)
                _this.green55.scale.setTo(1, 1.3);
            _this.green55.frame = 2;
            _this.green55.name = '5';
            _this.bSquareflag = 1;
            _this.space3Boxes.addChild(_this.green55);
        }
        else
            _this.wrongSound.play();

        _this.green5.x = 20;
        if (_this.ques[_this.count] == 4)
            _this.green5.y = 220;
        else
            _this.green5.y = 280;

    },

    green6Update: function (target) {
        _this.green6.bringToTop();
    },

    green6Drop: function (target) {

        if (_this.checkOverlap(target, _this.panel1) && _this.xbflag == 0)
            _this.green6yes = 1;

        if (_this.green6yes == 1 && _this.xbflag == 0) {
            _this.green33 = _this.add.sprite(305, 340, 'all1');
            _this.green33.scale.setTo(1, 1.3);
            _this.green33.frame = 2;
            _this.green33.name = '6';
            _this.xbflag = 1;
            _this.green6yes = 0;
            _this.space3Boxes.addChild(_this.green33);
        }
        else
            _this.wrongSound.play();

        _this.green6.x = 13;
        _this.green6.y = 330;

    },

    green7Update: function (target) {
        _this.green7.bringToTop();
    },

    green7Drop: function (target) {
        _this.wrongSound.play();
        _this.green7.x = 22;
        _this.green7.y = 305;

    },


    pink1Update: function (target) {
        _this.pink1.bringToTop();
    },

    pink1Drop: function (target) {
        if (_this.checkOverlap(target, _this.panel1) && _this.aSquareflag == 0)
            _this.pink1yes = 1;

        if (_this.pink1yes == 1 && _this.aSquareflag == 0) {
            _this.pink11 = _this.add.sprite(305, 215, 'all2');
            _this.pink11.frame = 0;
            _this.pink11.name = '11';
            _this.space3Boxes.addChild(_this.pink11);
            _this.aSquareflag = 1;
        }
        else
            _this.wrongSound.play();

        _this.pink1.x = 13;
        if (_this.ques[_this.count] == 4)
            _this.pink1.y = 2;
        else
            _this.pink1.y = 10;

    },

    pink2Update: function () {
        _this.pink2.bringToTop();
    },

    pink2Drop: function () {
        _this.wrongSound.play();
        _this.pink2.x = 13;
        if (_this.ques[_this.count] == 4)
            _this.pink2.y = 85;
        else
            _this.pink2.y = 105;
    },

    pink3Update: function (target) {
        _this.pink3.bringToTop();
    },

    pink3Drop: function (target) {
        if (_this.checkOverlap(target, _this.panel1) && (_this.abHorflag == 0 || _this.abVerflag == 0))
            _this.pink3yes = 1;

        if (_this.ques[_this.count] == 4) {
            if (_this.pink3yes == 1 && _this.abHorflag == 0) {
                _this.pink44 = _this.add.sprite(430, 215, 'all3');
                _this.pink44.frame = 0;
                _this.pink44.name = '44';
                _this.abHorflag = 1;
                _this.pink3yes = 0;
                _this.space3Boxes.addChild(_this.pink44);
            }
            else
                _this.wrongSound.play();
        }
        else {
            if (_this.abHorflag == 1 && _this.abVerflag == 1)
                _this.wrongSound.play();

            if (_this.pink3yes == 1 && _this.abHorflag == 1 && _this.abVerflag == 0) {
                _this.pink33 = _this.add.sprite(305, 340, 'all1');
                _this.pink33.frame = 0;
                _this.pink33.name = '33';
                _this.abVerflag = 1;
                _this.pink3yes = 0;
                _this.space3Boxes.addChild(_this.pink33);
            }
            else if (_this.pink3yes == 1 && _this.abHorflag == 0) {
                _this.pink44 = _this.add.sprite(430, 215, 'all3');
                _this.pink44.frame = 0;
                _this.pink44.name = '44';
                _this.abHorflag = 1;
                _this.pink3yes = 0;
                _this.space3Boxes.addChild(_this.pink44);
            }
        }


        _this.pink3.x = 13;
        if (_this.ques[_this.count] == 4)
            _this.pink3.y = 120;
        else
            _this.pink3.y = 140;

    },

    pink4Update: function () {
        _this.pink4.bringToTop();
    },

    pink4Drop: function () {
        _this.wrongSound.play();
        _this.pink4.x = 20;
        if (_this.ques[_this.count] == 4)
            _this.pink4.y = 190;
        else
            _this.pink4.y = 215;
    },

    pink5Update: function (target) {
        _this.pink5.bringToTop();
    },

    pink5Drop: function (target) {
        if (_this.checkOverlap(target, _this.panel1) && _this.bSquareflag == 0)
            _this.pink5yes = 1;


        if (_this.pink5yes == 1 && _this.bSquareflag == 0) {
            _this.pink55 = _this.add.sprite(430, 340, 'all4');
            if (_this.ques[_this.count] == 4)
                _this.pink55.scale.setTo(1, 1.3);
            _this.pink55.frame = 0;
            _this.pink55.name = '55';
            _this.bSquareflag = 1;
            _this.space3Boxes.addChild(_this.pink55);
        }
        else
            _this.wrongSound.play();

        _this.pink5.x = 20;
        if (_this.ques[_this.count] == 4)
            _this.pink5.y = 220;
        else
            _this.pink5.y = 280;

    },
    pink6Update: function (target) {
        _this.pink6.bringToTop();
    },

    pink6Drop: function (target) {
        if (_this.checkOverlap(target, _this.panel1) && _this.xbflag == 0)
            _this.pink6yes = 1;

        if (_this.pink6yes == 1 && _this.xbflag == 0) {
            _this.pink33 = _this.add.sprite(305, 340, 'all1');
            _this.pink33.scale.setTo(1, 1.3);
            _this.pink33.frame = 0;
            _this.pink33.name = '66';
            _this.xbflag = 1;
            _this.space3Boxes.addChild(_this.pink33);
        }
        else
            _this.wrongSound.play();


        _this.pink6.x = 13;
        _this.pink6.y = 330;

    },

    pink7Update: function (target) {
        _this.pink7.bringToTop();
    },

    pink7Drop: function (target) {
        _this.wrongSound.play();
        _this.pink7.x = 22;
        _this.pink7.y = 305;

    },

    tickThirdEvaluation: function ()  //to evaluate the dragged tiles by removing wrong tiles
    {
        for (let i = _this.space3Boxes.length - 1; i >= 0; i--) {

            if (_this.space3Boxes.getChildAt(i).name == '1')  //square.name =1 is coomon for all 4 formulas
            {
                _this.aSquareflag = 0;  //reset the flags
                _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i));
            }
            else if (_this.space3Boxes.getChildAt(i).name == '3' && _this.ques[_this.count] == 1) {
                _this.abVerflag = 0;
                _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i));
            }
            else if (_this.space3Boxes.getChildAt(i).name == '33' && (_this.ques[_this.count] == 2 || _this.ques[_this.count] == 3)) {
                _this.abVerflag = 0;
                _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i));
            }
            else if (_this.space3Boxes.getChildAt(i).name == '4' && (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 3 || _this.ques[_this.count] == 4)) {
                _this.abHorflag = 0;
                _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i));
            }
            else if (_this.space3Boxes.getChildAt(i).name == '44' && _this.ques[_this.count] == 2) {
                _this.abHorflag = 0;
                _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i));
            }
            else if (_this.space3Boxes.getChildAt(i).name == '55' && _this.ques[_this.count] == 3) {
                _this.bSquareflag = 0;
                _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i));
            }
            else if (_this.space3Boxes.getChildAt(i).name == '5' && (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 2 || _this.ques[_this.count] == 4)) {
                _this.bSquareflag = 0;
                _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i));
            }
            else if (_this.space3Boxes.getChildAt(i).name == '6' && _this.ques[_this.count] == 4) {
                _this.xbflag = 0;
                _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i));
            }

        }

        if (_this.space3Boxes.length == 4) //even after validation if length is 4 which means all tiles are placed correctly
        {
            _this.counterCelebrationSound.play();
            _this.tick.events.onInputDown.add(_this.tickThirdEvaluation, _this);
            _this.fillFormula();

        }
        else
            _this.wrongSound.play();

    },

    fillFormula: function ()  //add another panel with formula terms
    {

        if (_this.count == 0)
            _this.Ask_Question3.play();
        _this.Question_flag = 3;
        _this.tick.events.onInputDown.removeAll();
        _this.tick.events.onInputDown.add(_this.tickFourthEvaluation, _this);  //add next evaluation for tick
        _this.panel1.destroy();
        _this.panel2.visible = true;
        _this.panel3.visible = true;

        _this.green1.inputEnabled = false;
        _this.green2.inputEnabled = false;
        _this.green3.inputEnabled = false;
        _this.green4.inputEnabled = false;
        _this.green5.inputEnabled = false;

        _this.pink1.inputEnabled = false;
        _this.pink2.inputEnabled = false;
        _this.pink3.inputEnabled = false;
        _this.pink4.inputEnabled = false;
        _this.pink5.inputEnabled = false;

        if (_this.ques[_this.count] == 4) {
            _this.green6.inputEnabled = false;
            _this.green7.inputEnabled = false;

            _this.pink6.inputEnabled = false;
            _this.pink7.inputEnabled = false;
        }
        _this.eraser.destroy();

        //change textbox and frame
        _this.textBox.destroy();
        _this.textBox = _this.add.sprite(60, 60, 'textbox7');
        _this.textBox.frame = 3;
        if (_this.ques[_this.count] == 1) {
            _this.textBox.frame = 0;
            _this.yellowHigh = _this.add.sprite(379, 20, 'yellowHigh');
            _this.textBox.addChild(_this.yellowHigh) //.visible = true;
        }
        else if (_this.ques[_this.count] == 2) {
            _this.textBox.frame = 0;
            _this.yellowHigh = _this.add.sprite(367, 20, 'yellowHigh');
            _this.textBox.addChild(_this.yellowHigh) //.visible = true;
        }
        else if (_this.ques[_this.count] == 3) {
            _this.textBox.frame = 3;
            _this.string = '(' + 'a + b' + ') * ' + ' (' + 'a - b' + ')     =';
        }
        else {
            _this.textBox.frame = 3;
            _this.string = '(' + 'x + a' + ') * ' + ' (' + 'x + b' + ')     =';
        }

        _this.questionText = _this.add.text(25, 19, _this.string);
        _this.questionText.fill = '#65B4C3';
        _this.applyingStyle(_this.questionText);
        _this.textBox.addChild(_this.questionText);

        //add all 10 tiles with their text
        _this.textBox1 = _this.add.sprite(640, 160, 'textbox8');
        _this.paSquare = _this.add.text(18, 25, '+a' + _this.power);
        _this.applyingStyle1(_this.paSquare);
        _this.textBox1.addChild(_this.paSquare);
        _this.textBox1.inputEnabled = true;
        _this.textBox1.input.useHandCursor = true;
        _this.textBox1.events.onInputDown.add(_this.printASquare);

        _this.textBox2 = _this.add.sprite(740, 160, 'textbox8');
        _this.pabTxt = _this.add.text(15, 25, '+ab');
        _this.applyingStyle1(_this.pabTxt);
        _this.textBox2.addChild(_this.pabTxt);
        _this.textBox2.inputEnabled = true;
        _this.textBox2.input.useHandCursor = true;
        _this.textBox2.events.onInputDown.add(_this.printPab);

        _this.textBox3 = _this.add.sprite(840, 160, 'textbox8');
        _this.mbSquare = _this.add.text(20, 25, '-b' + _this.power);
        _this.applyingStyle1(_this.mbSquare);
        _this.textBox3.addChild(_this.mbSquare);
        _this.textBox3.inputEnabled = true;
        _this.textBox3.input.useHandCursor = true;
        _this.textBox3.events.onInputDown.add(_this.printMbSquare);


        _this.textBox4 = _this.add.sprite(640, 245, 'textbox8');
        _this.mabTxt = _this.add.text(17, 25, '-ab');
        _this.applyingStyle1(_this.mabTxt);
        _this.textBox4.addChild(_this.mabTxt);
        _this.textBox4.inputEnabled = true;
        _this.textBox4.input.useHandCursor = true;
        _this.textBox4.events.onInputDown.add(_this.printMab);

        _this.textBox5 = _this.add.sprite(740, 245, 'textbox8');
        _this.pab1 = _this.add.text(15, 25, '+ab');
        _this.applyingStyle1(_this.pab1);
        _this.textBox5.addChild(_this.pab1);
        _this.textBox5.inputEnabled = true;
        _this.textBox5.input.useHandCursor = true;
        _this.textBox5.events.onInputDown.add(_this.printPab1);

        _this.textBox6 = _this.add.sprite(840, 245, 'textbox8');
        _this.mab1 = _this.add.text(17, 25, '-ab');
        _this.applyingStyle1(_this.mab1);
        _this.textBox6.addChild(_this.mab1);
        _this.textBox6.inputEnabled = true;
        _this.textBox6.input.useHandCursor = true;
        _this.textBox6.events.onInputDown.add(_this.printMab1);

        _this.textBox7 = _this.add.sprite(640, 330, 'textbox8');
        _this.pxbb = _this.add.text(15, 25, '+xb');
        _this.applyingStyle1(_this.pxbb);
        _this.textBox7.addChild(_this.pxbb);
        _this.textBox7.inputEnabled = true;
        _this.textBox7.input.useHandCursor = true;
        _this.textBox7.events.onInputDown.add(_this.printPxbb);

        _this.textBox8 = _this.add.sprite(740, 330, 'textbox8');
        _this.pbSquare = _this.add.text(20, 25, '+b' + _this.power);
        _this.applyingStyle1(_this.pbSquare);
        _this.textBox8.addChild(_this.pbSquare);
        _this.textBox8.inputEnabled = true;
        _this.textBox8.input.useHandCursor = true;
        _this.textBox8.events.onInputDown.add(_this.printPbSquare);


        _this.textBox9 = _this.add.sprite(840, 330, 'textbox8');
        _this.pxa = _this.add.text(15, 25, '+xa');
        _this.applyingStyle1(_this.pxa);
        _this.textBox9.addChild(_this.pxa);
        _this.textBox9.inputEnabled = true;
        _this.textBox9.input.useHandCursor = true;
        _this.textBox9.events.onInputDown.add(_this.printPxa);


        _this.textBox10 = _this.add.sprite(740, 415, 'textbox8');
        _this.pxSquare = _this.add.text(18, 25, '+x' + _this.power);
        _this.applyingStyle1(_this.pxSquare);
        _this.textBox10.addChild(_this.pxSquare);
        _this.textBox10.inputEnabled = true;
        _this.textBox10.input.useHandCursor = true;
        _this.textBox10.events.onInputDown.add(_this.printPxSquare);


    },

    tickFourthEvaluation: function ()  // to check the formula filled
    {
        _this.textBox1.inputEnabled = false;
        _this.textBox2.inputEnabled = false;
        _this.textBox3.inputEnabled = false;
        _this.textBox4.inputEnabled = false;
        _this.textBox5.inputEnabled = false;
        _this.textBox6.inputEnabled = false;
        _this.textBox7.inputEnabled = false;
        _this.textBox8.inputEnabled = false;
        _this.textBox9.inputEnabled = false;
        _this.textBox10.inputEnabled = false;
        _this.tick.inputEnabled = false;
        _this.time.events.add(500, function () { //500 millisceonds for the answer tiles to change its frame

            if (_this.ques[_this.count] == 1) //select +a2,+b2,+ab,+ab
            {
                if (_this.textBox1.frame == 2 && _this.textBox2.frame == 2 && _this.textBox5.frame == 2 && _this.textBox8.frame == 2 &&
                    _this.textBox3.frame == 0 && _this.textBox4.frame == 0 && _this.textBox6.frame == 0 && _this.textBox7.frame == 0 && _this.textBox9.frame == 0 && _this.textBox10.frame == 0) {
                    _this.counterCelebrationSound.play();
                    _this.finalScreen();
                }
                else
                    _this.wrongFlag = 1;
            }
            else if (_this.ques[_this.count] == 2) //select +a2,+b2,-ab,-ab
            {
                if (_this.textBox1.frame == 2 && _this.textBox4.frame == 2 && _this.textBox6.frame == 2 && _this.textBox8.frame == 2 &&
                    _this.textBox3.frame == 0 && _this.textBox2.frame == 0 && _this.textBox5.frame == 0 && _this.textBox7.frame == 0 && _this.textBox9.frame == 0 && _this.textBox10.frame == 0) {
                    _this.counterCelebrationSound.play();
                    _this.finalScreen();
                }
                else
                    _this.wrongFlag = 1;
            }
            else if (_this.ques[_this.count] == 3)  //can select +a2,-b2,-ab,-ab,+ab,+ab
            {
                if (_this.textBox7.frame == 0 && _this.textBox9.frame == 0 && _this.textBox10.frame == 0 && _this.textBox8.frame == 0 &&
                    _this.textBox1.frame == 2 && _this.textBox3.frame == 2) {
                    _this.ifFlag = 1;
                    if ((_this.textBox4.frame == 2 && _this.textBox2.frame == 2 && _this.textBox5.frame == 2 && _this.textBox6.frame == 2) || (_this.textBox4.frame == 2 && _this.textBox2.frame == 2 && _this.textBox5.frame == 0 && _this.textBox6.frame == 0) || (_this.textBox2.frame == 2 && _this.textBox6.frame == 2 && _this.textBox4.frame == 0 && _this.textBox5.frame == 0)
                        || (_this.textBox4.frame == 2 && _this.textBox5.frame == 2 && _this.textBox2.frame == 0 && _this.textBox6.frame == 0) || (_this.textBox5.frame == 2 && _this.textBox6.frame == 2 && _this.textBox2.frame == 0 && _this.textBox2.frame == 0)) {
                        console.log("if1");
                        _this.counterCelebrationSound.play();
                        _this.finalScreen();

                    }
                    else if (_this.string1.length == 9 || _this.string1.length == 8) {
                        console.log("if1");
                        _this.counterCelebrationSound.play();
                        _this.finalScreen();

                    }
                    else
                        _this.wrongFlag = 1;
                }
                else
                    _this.wrongFlag = 1;
            }
            else if (_this.ques[_this.count] == 4) {
                if ((_this.textBox10.frame == 2 && _this.textBox7.frame == 2 && _this.textBox9.frame == 2 && _this.textBox2.frame == 2 &&
                    _this.textBox3.frame == 0 && _this.textBox4.frame == 0 && _this.textBox5.frame == 0 && _this.textBox1.frame == 0 && _this.textBox6.frame == 0 && _this.textBox8.frame == 0)
                    || (_this.textBox10.frame == 2 && _this.textBox7.frame == 2 && _this.textBox9.frame == 2 && _this.textBox5.frame == 2 &&
                        _this.textBox3.frame == 0 && _this.textBox4.frame == 0 && _this.textBox2.frame == 0 && _this.textBox1.frame == 0 && _this.textBox6.frame == 0 && _this.textBox8.frame == 0)) {
                    _this.counterCelebrationSound.play();
                    _this.finalScreen();
                }
                else
                    _this.wrongFlag = 1;
            }

            if (_this.wrongFlag == 1)  //if wrong answer entered reset all the answer tiles and empty answer space
            {
                _this.questionText1.destroy();
                _this.string1 = " ";
                _this.answercount = 0;
                _this.textBox1.inputEnabled = true;
                _this.textBox1.frame = 0;
                _this.textBox2.inputEnabled = true;
                _this.textBox2.frame = 0;
                _this.textBox3.inputEnabled = true;
                _this.textBox3.frame = 0;
                _this.textBox4.inputEnabled = true;
                _this.textBox4.frame = 0;
                _this.textBox5.inputEnabled = true;
                _this.textBox5.frame = 0;
                _this.textBox6.inputEnabled = true;
                _this.textBox6.frame = 0;
                _this.textBox7.inputEnabled = true;
                _this.textBox7.frame = 0;
                _this.textBox8.inputEnabled = true;
                _this.textBox8.frame = 0;
                _this.textBox9.inputEnabled = true;
                _this.textBox9.frame = 0;
                _this.textBox10.inputEnabled = true;
                _this.textBox10.frame = 0;
                _this.tick.inputEnabled = true;
                _this.wrongSound.play();
                _this.wrongFlag = 0;
                _this.ifFlag = 0;
            }
        });
    },

    finalScreen: function () {
        console.log("final scrn");
        _this.speakerbtn.inputEnabled = false;
        _this.speakerbtn.input.useHandCursor = false;
        _this.time.events.add(500, function () {
            //if correct destroy all screen objects and display final formula
            _this.sideGray1.destroy();
            _this.flag1 = 0;
            _this.flag2 = 0;
            _this.flag3 = 0;
            _this.flag4 = 0;
            _this.flag5 = 0;
            _this.flag6 = 0;
            _this.flag7 = 0;
            _this.flag8 = 0;
            _this.verticalY = 215;
            _this.sideGray2.destroy();
            _this.textBox.destroy();
            _this.space3Boxes.destroy();
            _this.space1Boxes.destroy();
            _this.space2Boxes.destroy();
            // _this.letha.destroy();
            // _this.lethb.destroy();
            // _this.letva.destroy();
            // _this.letvb.destroy();

            _this.panel2.destroy();
            _this.panel3.destroy();
            _this.textBox1.destroy();
            _this.textBox2.destroy();
            _this.textBox3.destroy();
            _this.textBox4.destroy();
            _this.textBox5.destroy();
            _this.textBox6.destroy();
            _this.textBox7.destroy();
            _this.textBox8.destroy();
            _this.textBox9.destroy();
            _this.textBox10.destroy();
            //reset back all flags to 0
            _this.aSquareflag = 0;
            _this.abHorflag = 0;
            _this.abVerflag = 0;
            _this.bSquareflag = 0;
            _this.xbflag = 0;
            _this.answercount = 0;
            _this.green1yes = 0;
            _this.green3yes = 0;
            _this.green5yes = 0;
            _this.green6yes = 0;
            _this.pink1yes = 0;
            _this.pink3yes = 0;
            _this.pink5yes = 0;
            _this.pink6yes = 0;
            _this.tick.destroy();
        });
        //display answers
        _this.time.events.add(1500, function () {
            if (_this.ques[_this.count] == 1) {
                _this.textBox11 = _this.add.sprite(230, 210, 'textbox5');
                _this.string2 = "(a + b)" + _this.power + "  =";
                _this.questionText3 = _this.add.text(20, 19, _this.string2);
                _this.applyingStyle(_this.questionText3);
                _this.textBox11.addChild(_this.questionText3);
                _this.string3 = "+a" + _this.power + " + 2ab" + " + b" + _this.power;
                _this.questionText4 = _this.add.text(160, 19, _this.string3);
                _this.applyingStyle1(_this.questionText4);
                _this.textBox11.addChild(_this.questionText4);
            }
            else if (_this.ques[_this.count] == 2) {
                _this.textBox11 = _this.add.sprite(230, 210, 'textbox5');
                _this.string2 = "(a - b)" + _this.power + "  =";
                _this.questionText3 = _this.add.text(20, 19, _this.string2);
                _this.applyingStyle(_this.questionText3);
                _this.textBox11.addChild(_this.questionText3);
                _this.string3 = "+a" + _this.power + " - 2ab" + " + b" + _this.power;
                _this.questionText4 = _this.add.text(160, 19, _this.string3);
                _this.applyingStyle1(_this.questionText4);
                _this.textBox11.addChild(_this.questionText4);
            }

            else if (_this.ques[_this.count] == 3) {
                if (_this.string1.length == 9 || _this.string1.length == 8)  //if entered answer was just a2 and b2
                {
                    _this.textBox11 = _this.add.sprite(230, 210, 'textbox5');
                    _this.string2 = "(a + b) * (a - b)  =";
                    _this.questionText3 = _this.add.text(20, 19, _this.string2);
                    _this.applyingStyle(_this.questionText3);
                    _this.textBox11.addChild(_this.questionText3);
                    _this.string3 = "+a" + _this.power + " - b" + _this.power;
                    _this.questionText4 = _this.add.text(250, 19, _this.string3);
                    _this.applyingStyle1(_this.questionText4);
                    _this.textBox11.addChild(_this.questionText4);
                }
                else  //if entered answer was a2,b2,ab,-ab
                {
                    _this.textBox12 = _this.add.sprite(230, 210, 'textbox5');
                    _this.string22 = "(a + b)*(a - b) =";
                    _this.questionText33 = _this.add.text(18, 19, _this.string22);
                    _this.applyingStyle(_this.questionText33);
                    _this.textBox12.addChild(_this.questionText33);
                    _this.string33 = "+a" + _this.power + " +ab -ab " + "-b" + _this.power;
                    _this.questionText44 = _this.add.text(230, 19, _this.string33);
                    _this.applyingStyle1(_this.questionText44);
                    _this.textBox12.addChild(_this.questionText44);
                    _this.cutLine1 = _this.add.image(520, 220, 'blueline');
                    _this.cutLine1.scale.setTo(0.7, 0.7);
                    _this.cutLine2 = _this.add.image(580, 220, 'blueline');
                    _this.cutLine2.scale.setTo(0.7, 0.7);

                    //use blue lines to cancel terms and show final answer
                    _this.time.events.add(1500, function () {
                        _this.textBox12.destroy();
                        _this.cutLine1.destroy();
                        _this.cutLine2.destroy();
                        _this.textBox11 = _this.add.sprite(230, 210, 'textbox5');
                        _this.string2 = "(a + b) * (a - b)  =";
                        _this.questionText3 = _this.add.text(20, 19, _this.string2);
                        _this.applyingStyle(_this.questionText3);
                        _this.textBox11.addChild(_this.questionText3);
                        _this.string3 = "+a" + _this.power + " - b" + _this.power;
                        _this.questionText4 = _this.add.text(250, 19, _this.string3);
                        _this.applyingStyle1(_this.questionText4);
                        _this.textBox11.addChild(_this.questionText4);
                    });

                }

            }
            else if (_this.ques[_this.count] == 4) {
                _this.textBox12 = _this.add.sprite(230, 210, 'textbox5');
                _this.textBox12.scale.setTo(1.1, 1);
                _this.string22 = "(x + a)*(x + b) =";
                _this.questionText33 = _this.add.text(14, 19, _this.string22);
                _this.applyingStyle(_this.questionText33);
                _this.textBox12.addChild(_this.questionText33);
                _this.string33 = "+x" + _this.power + " +xa +xb " + "+ab";
                _this.questionText44 = _this.add.text(222, 19, _this.string33);
                _this.applyingStyle1(_this.questionText44);
                _this.textBox12.addChild(_this.questionText44);
            }

        });
        _this.time.events.add(3500, function () {
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
            _this.celebrationSound.play();
            _this.time.events.add(1500, function () {
                _this.nextQues();
            });

        });

    },

    nextQues: function () {
        _this.count++;
        _this.Question_flag = 7;
        if (_this.textBox11) _this.textBox11.destroy();
        if (_this.textBox12) _this.textBox12.destroy();
        if (_this.count == 4)
            _this.partB();
        else
            _this.AskingQuestion();
    },

    printASquare: function () {
        if (_this.answercount < 6) {
            if (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 2)
                _this.x = 405;
            else _this.x = 305;
            _this.textBox1.inputEnabled = false;
            _this.answercount++;
            _this.textBox1.frame = 1;
            if (_this.questionText1) _this.questionText1.destroy();
            _this.string1 = _this.string1 + " " + _this.paSquare.text;
            _this.questionText1 = _this.add.text(_this.x, 19, _this.string1);
            _this.applyingStyle1(_this.questionText1);
            _this.textBox.addChild(_this.questionText1);
            _this.time.events.add(500, function () {
                _this.textBox1.frame = 2;
            });
        }
    },

    printPab: function () {
        if (_this.answercount < 6) {
            if (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 2)
                _this.x = 405;
            else _this.x = 305;
            _this.textBox2.inputEnabled = false;
            _this.answercount++;
            _this.textBox2.frame = 1;
            if (_this.questionText1) _this.questionText1.destroy();
            _this.string1 = _this.string1 + " " + _this.pabTxt.text;
            _this.questionText1 = _this.add.text(_this.x, 19, _this.string1);
            _this.applyingStyle1(_this.questionText1);
            _this.textBox.addChild(_this.questionText1);
            _this.time.events.add(500, function () {
                _this.textBox2.frame = 2;
            });
        }

    },

    printPab1: function () {
        if (_this.answercount < 6) {
            if (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 2)
                _this.x = 405;
            else _this.x = 305;
            _this.textBox5.inputEnabled = false;
            _this.answercount++;
            _this.textBox5.frame = 1;
            if (_this.questionText1) _this.questionText1.destroy();
            _this.string1 = _this.string1 + " " + _this.pab1.text;
            _this.questionText1 = _this.add.text(_this.x, 19, _this.string1);
            _this.applyingStyle1(_this.questionText1);
            _this.textBox.addChild(_this.questionText1);
            _this.time.events.add(500, function () {
                _this.textBox5.frame = 2;
            });
        }
    },

    printMab: function () {
        if (_this.answercount < 6) {
            if (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 2)
                _this.x = 405;
            else _this.x = 305;
            _this.textBox4.inputEnabled = false;
            _this.answercount++;
            _this.textBox4.frame = 1;
            if (_this.questionText1) _this.questionText1.destroy();
            _this.string1 = _this.string1 + " " + _this.mabTxt.text;
            _this.questionText1 = _this.add.text(_this.x, 19, _this.string1);
            _this.applyingStyle1(_this.questionText1);
            _this.textBox.addChild(_this.questionText1);
            _this.time.events.add(500, function () {
                _this.textBox4.frame = 2;
            });
        }
    },

    printMab1: function () {
        if (_this.answercount < 6) {
            if (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 2)
                _this.x = 405;
            else _this.x = 305;
            _this.textBox6.inputEnabled = false;
            _this.answercount++;
            _this.textBox6.frame = 1;
            if (_this.questionText1) _this.questionText1.destroy();
            _this.string1 = _this.string1 + " " + _this.mab1.text;
            _this.questionText1 = _this.add.text(_this.x, 19, _this.string1);
            _this.applyingStyle1(_this.questionText1);
            _this.textBox.addChild(_this.questionText1);
            _this.time.events.add(500, function () {
                _this.textBox6.frame = 2;
            });
        }
    },

    printMbSquare: function () {
        if (_this.answercount < 6) {
            if (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 2)
                _this.x = 405;
            else _this.x = 305;
            _this.textBox3.inputEnabled = false;
            _this.answercount++;
            _this.textBox3.frame = 1;
            if (_this.questionText1) _this.questionText1.destroy();
            _this.string1 = _this.string1 + " " + _this.mbSquare.text;
            _this.questionText1 = _this.add.text(_this.x, 19, _this.string1);
            _this.applyingStyle1(_this.questionText1);
            _this.textBox.addChild(_this.questionText1);
            _this.time.events.add(500, function () {
                _this.textBox3.frame = 2;
            });
        }
    },

    printPbSquare: function () {
        if (_this.answercount < 6) {
            if (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 2)
                _this.x = 405;
            else _this.x = 305;
            _this.textBox8.inputEnabled = false;
            _this.answercount++;
            _this.textBox8.frame = 1;
            if (_this.questionText1) _this.questionText1.destroy();
            _this.string1 = _this.string1 + " " + _this.pbSquare.text;
            _this.questionText1 = _this.add.text(_this.x, 19, _this.string1);
            _this.applyingStyle1(_this.questionText1);
            _this.textBox.addChild(_this.questionText1);
            _this.time.events.add(500, function () {
                _this.textBox8.frame = 2;
            });
        }
    },

    printPxbb: function () {
        if (_this.answercount < 6) {
            if (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 2)
                _this.x = 405;
            else _this.x = 305;
            _this.textBox7.inputEnabled = false;
            _this.answercount++;
            _this.textBox7.frame = 1;
            if (_this.questionText1) _this.questionText1.destroy();
            _this.string1 = _this.string1 + " " + _this.pxbb.text;
            _this.questionText1 = _this.add.text(_this.x, 19, _this.string1);
            _this.applyingStyle1(_this.questionText1);
            _this.textBox.addChild(_this.questionText1);
            _this.time.events.add(500, function () {
                _this.textBox7.frame = 2;
            });
        }
    },

    printPxa: function () {
        if (_this.answercount < 6) {
            if (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 2)
                _this.x = 405;
            else _this.x = 305;
            _this.textBox9.inputEnabled = false;
            _this.answercount++;
            _this.textBox9.frame = 1;
            if (_this.questionText1) _this.questionText1.destroy();
            _this.string1 = _this.string1 + " " + _this.pxa.text;
            _this.questionText1 = _this.add.text(_this.x, 19, _this.string1);
            _this.applyingStyle1(_this.questionText1);
            _this.textBox.addChild(_this.questionText1);
            _this.time.events.add(500, function () {
                _this.textBox9.frame = 2;
            });
        }
    },

    printPxSquare: function () {
        if (_this.answercount < 6) {
            if (_this.ques[_this.count] == 1 || _this.ques[_this.count] == 2)
                _this.x = 405;
            else _this.x = 305;
            _this.textBox10.inputEnabled = false;
            _this.answercount++;
            _this.textBox10.frame = 1;
            if (_this.questionText1) _this.questionText1.destroy();
            _this.string1 = _this.string1 + " " + _this.pxSquare.text;
            _this.questionText1 = _this.add.text(_this.x, 19, _this.string1);
            _this.applyingStyle1(_this.questionText1);
            _this.textBox.addChild(_this.questionText1);
            _this.time.events.add(500, function () {
                _this.textBox10.frame = 2;
            });
        }

    },

    //Moving the eraser.
    eraserUpdate: function (target) {
        _this.world.bringToTop(_this.eraser)
        _this.eraser.scale.setTo(0.6)
    },

    //Erasing the top space objects.
    eraserDrop1: function (target) {
        for (let i = 0; i < _this.space1Boxes.length; i++) {
            if (_this.checkOverlap(target, _this.space1Boxes.getChildAt(i))) {
                if (_this.space1Boxes.getChildAt(i).name == '50' || _this.space1Boxes.getChildAt(i).name == '51') {
                    _this.limit1 -= 3;
                }
                else {
                    _this.limit1 -= 6;
                }
                _this.space1Boxes.removeChild(_this.space1Boxes.getChildAt(i));
                break;
            }
        }
        if (_this.space1Boxes.length == 0) {
            _this.eraser.destroy();
            _this.eraser = _this.add.sprite(800, 68, 'eraser');
            _this.eraser.inputEnabled = true;
            _this.eraser.input.enableDrag(true);
            _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
            _this.eraser.events.onDragStop.add(_this.eraserDrop1, _this);
            return;
        }
        _this.space1Boxes.getChildAt(0).x = 305;
        for (let i = 1; i < _this.space1Boxes.length; i++) {
            if (_this.space1Boxes.getChildAt(i - 1).name == '10' || _this.space1Boxes.getChildAt(i - 1).name == '11')
                _this.space1Boxes.getChildAt(i).x = _this.space1Boxes.getChildAt(i - 1).x + 56;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '20' || _this.space1Boxes.getChildAt(i - 1).name == '21')
                _this.space1Boxes.getChildAt(i).x = _this.space1Boxes.getChildAt(i - 1).x + 125;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '30' || _this.space1Boxes.getChildAt(i - 1).name == '31')
                _this.space1Boxes.getChildAt(i).x = _this.space1Boxes.getChildAt(i - 1).x + 56;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '40' || _this.space1Boxes.getChildAt(i - 1).name == '41')
                _this.space1Boxes.getChildAt(i).x = _this.space1Boxes.getChildAt(i - 1).x + 86;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '50' || _this.space1Boxes.getChildAt(i - 1).name == '51')
                _this.space1Boxes.getChildAt(i).x = _this.space1Boxes.getChildAt(i - 1).x + 40;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '60' || _this.space1Boxes.getChildAt(i - 1).name == '61')
                _this.space1Boxes.getChildAt(i).x = _this.space1Boxes.getChildAt(i - 1).x + 60;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '70' || _this.space1Boxes.getChildAt(i - 1).name == '71')
                _this.space1Boxes.getChildAt(i).x = _this.space1Boxes.getChildAt(i - 1).x + 91;

        }

        _this.eraser.destroy();
        _this.eraser = _this.add.sprite(800, 68, 'eraser');
        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop1, _this);
    },

    //Erasing the vertical space objects.
    eraserDrop2: function (target) {
        console.log("eraserDrop2")
        for (let i = 0; i < _this.space2Boxes.length; i++) {
            if (_this.checkOverlap(target, _this.space2Boxes.getChildAt(i))) {
                if (_this.space2Boxes.getChildAt(i).name == '10' || _this.space2Boxes.getChildAt(i).name == '11' || _this.space2Boxes.getChildAt(i).name == '30' || _this.space2Boxes.getChildAt(i).name == '31') {
                    _this.verticalY -= 60;
                }
                else if (_this.space2Boxes.getChildAt(i).name == '20' || _this.space2Boxes.getChildAt(i).name == '21') {
                    _this.verticalY -= 126;
                }
                else if (_this.space2Boxes.getChildAt(i).name == '40' || _this.space2Boxes.getChildAt(i).name == '41') {
                    _this.verticalY -= 87;
                }
                else if (_this.space2Boxes.getChildAt(i).name == '60' || _this.space2Boxes.getChildAt(i).name == '61') {
                    _this.verticalY -= 62;
                }
                else if (_this.space2Boxes.getChildAt(i).name == '70' || _this.space2Boxes.getChildAt(i).name == '71') {
                    _this.verticalY -= 113;
                }
                else
                    _this.verticalY -= 40;
                _this.space2Boxes.removeChild(_this.space2Boxes.getChildAt(i));
                break;
            }
        }
        if (_this.space2Boxes.length == 0) {
            _this.eraser.destroy();
            _this.eraser = _this.add.sprite(800, 68, 'eraser');
            _this.eraser.inputEnabled = true;
            _this.eraser.input.enableDrag(true);
            _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
            _this.eraser.events.onDragStop.add(_this.eraserDrop2, _this);
            return;
        }
        _this.space2Boxes.getChildAt(0).y = 215;
        for (let i = 1; i < _this.space2Boxes.length; i++) {
            if (_this.space2Boxes.getChildAt(i - 1).name == '10' || _this.space2Boxes.getChildAt(i - 1).name == '11')
                _this.space2Boxes.getChildAt(i).y = _this.space2Boxes.getChildAt(i - 1).y + 60;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '20' || _this.space2Boxes.getChildAt(i - 1).name == '21')
                _this.space2Boxes.getChildAt(i).y = _this.space2Boxes.getChildAt(i - 1).y + 126;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '30' || _this.space2Boxes.getChildAt(i - 1).name == '31')
                _this.space2Boxes.getChildAt(i).y = _this.space2Boxes.getChildAt(i - 1).y + 60;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '40' || _this.space2Boxes.getChildAt(i - 1).name == '41')
                _this.space2Boxes.getChildAt(i).y = _this.space2Boxes.getChildAt(i - 1).y + 87;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '50' || _this.space2Boxes.getChildAt(i - 1).name == '51')
                _this.space2Boxes.getChildAt(i).y = _this.space2Boxes.getChildAt(i - 1).y + 40;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '60' || _this.space2Boxes.getChildAt(i - 1).name == '61')
                _this.space2Boxes.getChildAt(i).y = _this.space2Boxes.getChildAt(i - 1).y + 62;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '70' || _this.space2Boxes.getChildAt(i - 1).name == '71')
                _this.space2Boxes.getChildAt(i).y = _this.space2Boxes.getChildAt(i - 1).y + 113;

        }

        _this.eraser.destroy();
        _this.eraser = _this.add.sprite(800, 68, 'eraser');
        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop2, _this);
    },

    //eraser to erase dragged tiles
    eraserDrop3: function (target) {
        for (let i = 0; i < _this.space3Boxes.length; i++) {
            if (_this.checkOverlap(target, _this.space3Boxes.getChildAt(i))) {
                if (_this.space3Boxes.getChildAt(i).name[0] == '1') {
                    _this.aSquareflag = 0; //reset the flags also
                    _this.pink1yes = 0;
                    _this.green1yes = 0;
                    _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i));
                }
                else if (_this.space3Boxes.getChildAt(i).name[0] == '3') {
                    _this.abVerflag = 0;
                    _this.pink3yes = 0;
                    _this.green3yes = 0;
                    _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i))
                }
                else if (_this.space3Boxes.getChildAt(i).name[0] == '4') {
                    _this.abHorflag = 0;
                    _this.pink3yes = 0;
                    _this.green3yes = 0;
                    _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i))
                }
                else if (_this.space3Boxes.getChildAt(i).name[0] == '5') {
                    _this.bSquareflag = 0;
                    _this.pink5yes = 0;
                    _this.green5yes = 0;
                    _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i))
                }
                else if (_this.space3Boxes.getChildAt(i).name[0] == '6') {
                    _this.xbflag = 0;
                    _this.pink6yes = 0;
                    _this.green6yes = 0;
                    _this.space3Boxes.removeChild(_this.space3Boxes.getChildAt(i))
                }
            }
        }


        _this.eraser.destroy();
        _this.eraser = _this.add.sprite(800, 68, 'eraser');
        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop3, _this);
    },

    partB: function () {
        //for api
        //edited for baseurl apk
        _this.sceneCount++;
        _this.noofAttempts = 0;
        //....

        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;

        // _this.string11 = ["(a+b)"+_this.power+ " =  a"+_this.power+"+ 2ab + b"+_this.power , 
        // "(a-b)"+_this.power+ " = a"+_this.power+"- 2ab + b"+_this.power,
        // "a"+_this.power+" - b"+_this.power +" = (a+b)*(a-b) ", 
        // "(x+a)*(x+b) = x"+_this.power+"+xa+xb+ab"];
        // _this.shuffleArray(_this.string11);

        if (_this.arr[_this.count1] == 1)  //generating random number for first two formulas
        {
            _this.string11 = ["(a+b)" + _this.power + " =  a" + _this.power + "+ 2ab + b" + _this.power,
            "(a-b)" + _this.power + " = a" + _this.power + "- 2ab + b" + _this.power,
            "a" + _this.power + " - b" + _this.power + " = (a+b)*(a-b) "];
            _this.shuffleArray(_this.string11);

            _this.randomNumber = Math.floor(Math.random() * 20) + 11; //between 11 and 30 (inclusive)
            //console.log(_this.randomNumber);
        }
        else if (_this.arr[_this.count1] == 2)  //for (a+b)(a-b)
        {
            _this.string11 = ["(a+b)" + _this.power + " =  a" + _this.power + "+ 2ab + b" + _this.power,
            "a" + _this.power + " - b" + _this.power + " = (a+b)*(a-b) ",
            "(x+a)*(x+b) = x" + _this.power + "+xa+xb+ab"];
            _this.shuffleArray(_this.string11);

            _this.number2 = Math.floor(Math.random() * 99) + 1; //numbers inside 100
            _this.number1 = 100 - _this.number2;  //a+b should be 100
            //console.log(_this.number1,+" ",+_this.number2);
            while (_this.number1 < _this.number2 && _this.number1 != _this.number2) //number1 should be greater than number 2
            {
                _this.number2 = Math.floor(Math.random() * 99) + 1;
                _this.number1 = 100 - _this.number2;
                //console.log(_this.number1,_this.number2);
            }
        }
        else if (_this.arr[_this.count1] == 3)  //for (x+a)(x+b)
        {
            _this.string11 = ["(a+b)" + _this.power + " =  a" + _this.power + "+ 2ab + b" + _this.power,
            "a" + _this.power + " - b" + _this.power + " = (a+b)*(a-b) ",
            "(x+a)*(x+b) = x" + _this.power + "+xa+xb+ab"];
            _this.shuffleArray(_this.string11);

            _this.firstNumber1 = Math.floor(Math.random() * 5) + 1;  // Random number between 1 and 5 
            _this.secondNumber2 = Math.floor(Math.random() * 5) + 1;  // Random number between 1 and 9
            _this.thirdNumber3 = Math.floor(Math.random() * 5) + 1;   // Random number between 1 and 9
            while (_this.secondNumber2 == _this.thirdNumber3) {
                _this.secondNumber2 = Math.floor(Math.random() * 5) + 1;  // Random number between 1 and 9
                _this.thirdNumber3 = Math.floor(Math.random() * 5) + 1;

            }
            //console.log(_this.firstNumber1,_this.secondNumber2,_this.thirdNumber3);

            _this.firstNumber = _this.firstNumber1 * 100 + _this.secondNumber2;
            _this.secondNumber = _this.firstNumber1 * 100 + _this.thirdNumber3;
            // console.log(_this.firstNumber,_this.secondNumber);
        }
        _this.partBscreen();

    },

    partBscreen: function () {
        if (_this.count1 == 0)
            _this.Ask_Question4.play();
        _this.Question_flag = 4;
        //to display question
        _this.diplayNum = _this.add.sprite(100, 80, 'textbox1');
        _this.diplayNum.frame = 1;
        if (_this.arr[_this.count1] == 1)
            _this.displayTxt = _this.add.text(40, 20, "(" + _this.randomNumber + ")" + _this.power);

        else if (_this.arr[_this.count1] == 2)
            _this.displayTxt = _this.add.text(25, 20, + _this.number1 + _this.power + " - " + _this.number2 + _this.power);

        else if (_this.arr[_this.count1] == 3)
            _this.displayTxt = _this.add.text(25, 20, + _this.firstNumber + "*" + _this.secondNumber);
        _this.diplayNum.addChild(_this.displayTxt);


        //add 3 option boxes with shuffled formulas
        _this.opt1 = _this.add.sprite(290, 80, 'textbox7');
        _this.opt1.scale.setTo(0.6, 1);
        _this.for1 = _this.add.text(310, 100, "1.      " + _this.string11[0]);
        _this.applyingStyle(_this.for1);
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.opt1Click);

        _this.opt2 = _this.add.sprite(290, 160, 'textbox7');
        _this.opt2.scale.setTo(0.6, 1);
        _this.for2 = _this.add.text(310, 180, "2.      " + _this.string11[1]);
        _this.applyingStyle(_this.for2);
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.opt2Click);

        _this.opt3 = _this.add.sprite(290, 240, 'textbox7');
        _this.opt3.scale.setTo(0.6, 1);
        _this.for3 = _this.add.text(310, 260, "3.      " + _this.string11[2]);
        _this.applyingStyle(_this.for3);
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.opt3Click);


        _this.tickClick = _this.add.sprite(865, 85, 'TickBtn');
        _this.tickClick.inputEnabled = true;
        _this.tickClick.input.useHandCursor = true;
        _this.tickClick.events.onInputDown.add(_this.tickValidate);
    },

    opt1Click: function () {
        _this.opt1.frame = 1;
        _this.opt2.frame = 0;
        _this.opt3.frame = 0;

    },

    opt2Click: function () {
        _this.opt1.frame = 0;
        _this.opt2.frame = 1;
        _this.opt3.frame = 0;

    },

    opt3Click: function () {
        _this.opt1.frame = 0;
        _this.opt2.frame = 0;
        _this.opt3.frame = 1;

    },

    tickValidate: function () {
        if (_this.arr[_this.count1] == 1)  //since the student can select (a+b)2 and (a-b)2 
        {
            if (_this.opt1.frame == 1 && (_this.for1.text == "1.      (a+b)" + _this.power + " =  a" + _this.power + "+ 2ab + b" + _this.power
                || _this.for1.text == "1.      (a-b)" + _this.power + " = a" + _this.power + "- 2ab + b" + _this.power)) {
                _this.result = _this.for1.text.substring(2);
                _this.for11 = _this.add.text(310, 100, _this.result);
                _this.applyingStyle(_this.for11);
                _this.nextStep();

            }
            else if (_this.opt2.frame == 1 && (_this.for2.text == "2.      (a+b)" + _this.power + " =  a" + _this.power + "+ 2ab + b" + _this.power
                || _this.for2.text == "2.      (a-b)" + _this.power + " = a" + _this.power + "- 2ab + b" + _this.power)) {
                _this.result = _this.for2.text.substring(2);
                _this.for11 = _this.add.text(310, 100, _this.result);
                _this.applyingStyle(_this.for11);
                _this.nextStep();
            }
            else if (_this.opt3.frame == 1 && (_this.for3.text == "3.      (a+b)" + _this.power + " =  a" + _this.power + "+ 2ab + b" + _this.power
                || _this.for3.text == "3.      (a-b)" + _this.power + " = a" + _this.power + "- 2ab + b" + _this.power)) {
                _this.result = _this.for3.text.substring(2);
                _this.for11 = _this.add.text(310, 100, _this.result);
                _this.applyingStyle(_this.for11);
                _this.nextStep();
            }
            else
                _this.wrongSound.play();

        }
        else if (_this.arr[_this.count1] == 2) {
            if (_this.opt1.frame == 1 && _this.for1.text == '1.      a² - b² = (a+b)*(a-b) ') {
                _this.result = _this.for1.text.substring(2);
                _this.for11 = _this.add.text(310, 100, _this.result);
                _this.applyingStyle(_this.for11);
                _this.nextStep();
            }
            else if (_this.opt2.frame == 1 && _this.for2.text == '2.      a² - b² = (a+b)*(a-b) ') {
                _this.result = _this.for2.text.substring(2);
                _this.for11 = _this.add.text(310, 100, _this.result);
                _this.applyingStyle(_this.for11);
                _this.nextStep();
            }
            else if (_this.opt3.frame == 1 && _this.for3.text == '3.      a² - b² = (a+b)*(a-b) ') {
                _this.result = _this.for3.text.substring(2);
                _this.for11 = _this.add.text(310, 100, _this.result);
                _this.applyingStyle(_this.for11);
                _this.nextStep();
            }
            else
                _this.wrongSound.play();
        }
        else if (_this.arr[_this.count1] == 3) {
            if (_this.opt1.frame == 1 && _this.for1.text == '1.      (x+a)*(x+b) = x²+xa+xb+ab') {
                _this.result = _this.for1.text.substring(2);
                _this.for11 = _this.add.text(310, 100, _this.result);
                _this.applyingStyle(_this.for11);
                _this.nextStep();
            }
            else if (_this.opt2.frame == 1 && _this.for2.text == '2.      (x+a)*(x+b) = x²+xa+xb+ab') {
                _this.result = _this.for2.text.substring(2);
                _this.for11 = _this.add.text(310, 100, _this.result);
                _this.applyingStyle(_this.for11);
                _this.nextStep();
            }
            else if (_this.opt3.frame == 1 && _this.for3.text == '3.      (x+a)*(x+b) = x²+xa+xb+ab') {
                _this.result = _this.for3.text.substring(2);
                _this.for11 = _this.add.text(310, 100, _this.result);
                _this.applyingStyle(_this.for11);
                _this.nextStep();
            }
            else
                _this.wrongSound.play();
        }
    },

    nextStep: function () {
        if (_this.count1 == 0)
            _this.Ask_Question5.play();
        _this.Question_flag = 5;
        _this.opt2.destroy();  //destroy the option terms 
        _this.opt3.destroy();
        _this.for1.destroy();
        _this.for2.destroy();
        _this.for3.destroy();
        _this.tickClick.destroy();
        _this.opt1.frame = 0;
        _this.opt1.inputEnabled = false;
        //add text boxes to enter value of a b
        if (_this.arr[_this.count1] == 3) {
            _this.a = _this.add.text(320, 170, "x = ");
            _this.b = _this.add.text(490, 170, "a = ");
            _this.c = _this.add.text(645, 170, "b = ");
            _this.applyingStyle1(_this.c);
        }
        else {
            _this.a = _this.add.text(320, 170, "a = ");
            _this.b = _this.add.text(490, 170, "b = ");
        }
        _this.applyingStyle1(_this.a);
        _this.applyingStyle1(_this.b);
        _this.AnswerBox1 = _this.add.sprite(380, 170, 'textbox9');
        _this.AnswerBox2 = _this.add.sprite(550, 170, 'textbox9');
        if (_this.arr[_this.count1] == 3) {
            _this.AnswerBox4 = _this.add.sprite(710, 170, 'textbox9');
            _this.AnswerBox4.inputEnabled = true;
            _this.AnswerBox4.input.useHandCursor = true;

            _this.AnswerBox4.events.onInputDown.add(function () {
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox2.frame = 0;
                _this.AnswerBox4.frame = 1;

                _this.clickSound.play();
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked3, _this);
                for (let i = 0; i <= 10; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked3, _this);
                }
            });
        }

        _this.AnswerBox1.inputEnabled = true;
        _this.AnswerBox1.input.useHandCursor = true;
        _this.AnswerBox2.inputEnabled = true;
        _this.AnswerBox2.input.useHandCursor = true;
        _this.AnswerBox1.frame = 1;

        _this.addNumberPad();  //add number pad

        _this.AnswerBox1.events.onInputDown.add(function () {
            _this.AnswerBox1.frame = 1;
            _this.AnswerBox2.frame = 0;
            if (_this.arr[_this.count1] == 3)
                _this.AnswerBox4.frame = 0;

            _this.clickSound.play();
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this); //add wrong click event
            _this.rightbtn.events.onInputDown.removeAll();
            _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked1, _this); //add right click event
            for (let i = 0; i <= 10; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
            }
        });

        _this.AnswerBox2.events.onInputDown.add(function () {
            _this.AnswerBox1.frame = 0;
            _this.AnswerBox2.frame = 1;
            if (_this.arr[_this.count1] == 3)
                _this.AnswerBox4.frame = 0;

            _this.clickSound.play();
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
            for (let i = 0; i <= 10; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
            }
        });

    },

    //*add number pad
    addNumberPad: function () {
        _this.Choice = 1;
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        _this.selectedAns11 = '';
        _this.selectedAns21 = '';
        _this.selectedAns31 = '';

        _this.selectedAns12 = '';
        _this.selectedAns22 = '';
        _this.selectedAns32 = '';

        _this.selectedAns13 = '';
        _this.selectedAns23 = '';
        _this.selectedAns33 = '';

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'Numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);

        bottomnumpadbg.name = "Numpadbg";

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
            _this.numbg.events.onInputDown.add(_this.numClicked1, _this);

            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 10;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8, 0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.rightbtn.frame = 11;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8, 0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked1, _this);

        _this.enterTxt1 = '';
        _this.enterTxt2 = '';
        _this.enterTxt4 = '';

        _this.numpadTween = _this.add.tween(_this.numGroup);
        //tween in the number pad after a second.
        _this.tweenNumPad();
    },

    numClicked1: function (target) {  //for answer Box1
        console.log(target.name)
        _this.clickSound.play();
        var_selectedAns1 = " ";
        var_selectedAns2 = " ";
        var_selectedAns3 = " ";

        if (_this.selectedAns31 === '' && _this.selectedAns21 !== '' && _this.selectedAns11 !== '') {
            if (_this.selectedAns21 === 0 && target.name !== 0) {
                _this.selectedAns31 = target.name;
            }
            else if (_this.selectedAns21 !== '' && _this.selectedAns21 !== 0) {
                _this.selectedAns31 = target.name;
            }
            else if (_this.selectedAns21 !== 0 && target.name == 10) {
                _this.selectedAns21 = 0;
            }
            else {
                _this.selectedAns21 = target.name;
            }
        }

        if (_this.selectedAns21 === '') {
            if (_this.selectedAns11 === 0 && target.name !== 0) {
                _this.selectedAns21 = target.name;
            }
            else if (_this.selectedAns11 !== '' && _this.selectedAns11 !== 0) {
                _this.selectedAns21 = target.name;
            }
            else if (_this.selectedAns11 !== 0 && target.name == 10) {
                _this.selectedAns11 = 0;
            }
            else {
                _this.selectedAns11 = target.name;
            }
        }

        _this.AnswerBox1.removeChild(_this.enterTxt1);
        _this.enterTxt1.visible = false;

        if (_this.selectedAns11 === 10) var_selectedAns1 = 0;
        else var_selectedAns1 = _this.selectedAns11;
        if (_this.selectedAns21 === 10) _this.selectedAns21 = 0;
        else var_selectedAns2 = _this.selectedAns21;
        if (_this.selectedAns31 === 10) _this.selectedAns31 = 0;
        else var_selectedAns3 = _this.selectedAns31;


        if (_this.selectedAns11 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns11;

        if (_this.selectedAns21 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns21;

        if (_this.selectedAns31 === "") var_selectedAns3 = " ";
        else var_selectedAns3 = _this.selectedAns31;

        //type0-scene1  type1-scene2  type2-scene3
        if (_this.selectedAns21 === "" && _this.selectedAns31 === "")
            _this.enterTxt1 = _this.add.text(26, 4, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '25px' });

        else if (_this.selectedAns31 === "")
            _this.enterTxt1 = _this.add.text(20, 4, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '25px' });

        else
            _this.enterTxt1 = _this.add.text(10, 4, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '25px' });

        _this.enterTxt1.align = 'right';
        _this.enterTxt1.fill = '#65B4C3';
        _this.AnswerBox1.addChild(_this.enterTxt1);
        _this.enterTxt1.visible = true;
        console.log(_this.selectedAns11, _this.selectedAns21, _this.selectedAns31);
        _this.AnswerBox1.name = Number('' + var_selectedAns1 + var_selectedAns2 + var_selectedAns3);
        console.log(_this.AnswerBox1.name);
    },

    numClicked2: function (target) {  //for answer Box2
        console.log(target.name)
        _this.clickSound.play();
        var_selectedAns1 = " ";
        var_selectedAns2 = " ";
        var_selectedAns3 = " ";

        if (_this.selectedAns32 === '' && _this.selectedAns22 !== '' && _this.selectedAns12 !== '') {
            if (_this.selectedAns22 === 0 && target.name !== 0) {
                _this.selectedAns32 = target.name;
            }
            else if (_this.selectedAns22 !== '' && _this.selectedAns22 !== 0) {
                _this.selectedAns32 = target.name;
            }
            else if (_this.selectedAns22 !== 0 && target.name == 10) {
                _this.selectedAns22 = 0;
            }
            else {
                _this.selectedAns22 = target.name;
            }
        }

        if (_this.selectedAns22 === '') {
            if (_this.selectedAns12 === 0 && target.name !== 0) {
                _this.selectedAns22 = target.name;
            }
            else if (_this.selectedAns12 !== '' && _this.selectedAns12 !== 0) {
                _this.selectedAns22 = target.name;
            }
            else if (_this.selectedAns12 !== 0 && target.name == 10) {
                _this.selectedAns12 = 0;
            }
            else {
                _this.selectedAns12 = target.name;
            }
        }

        _this.AnswerBox1.removeChild(_this.enterTxt2);
        _this.enterTxt2.visible = false;

        if (_this.selectedAns12 === 10) var_selectedAns1 = 0;
        else var_selectedAns1 = _this.selectedAns12;
        if (_this.selectedAns22 === 10) _this.selectedAns22 = 0;
        else var_selectedAns2 = _this.selectedAns22;
        if (_this.selectedAns32 === 10) _this.selectedAns32 = 0;
        else var_selectedAns3 = _this.selectedAns32;


        if (_this.selectedAns12 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns12;

        if (_this.selectedAns22 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns22;

        if (_this.selectedAns32 === "") var_selectedAns3 = " ";
        else var_selectedAns3 = _this.selectedAns32;

        //type0-scene1  type1-scene2  type2-scene3
        if (_this.selectedAns22 === "" && _this.selectedAns32 === "")
            _this.enterTxt2 = _this.add.text(26, 4, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '25px' });

        else if (_this.selectedAns32 === "")
            _this.enterTxt2 = _this.add.text(20, 4, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '25px' });

        else
            _this.enterTxt2 = _this.add.text(10, 4, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '25px' });

        _this.enterTxt2.align = 'right';
        _this.enterTxt2.fill = '#65B4C3';
        _this.AnswerBox2.addChild(_this.enterTxt2);
        _this.enterTxt2.visible = true;
        console.log(_this.selectedAns12, _this.selectedAns22, _this.selectedAns32);
        _this.AnswerBox2.name = Number('' + var_selectedAns1 + var_selectedAns2 + var_selectedAns3);
        console.log(_this.AnswerBox2.name);
    },

    numClicked3: function (target) { //for answer Box4
        console.log(target.name)
        _this.clickSound.play();
        var_selectedAns1 = " ";
        var_selectedAns2 = " ";
        var_selectedAns3 = " ";

        if (_this.selectedAns33 === '' && _this.selectedAns23 !== '' && _this.selectedAns13 !== '') {
            if (_this.selectedAns23 === 0 && target.name !== 0) {
                _this.selectedAns33 = target.name;
            }
            else if (_this.selectedAns23 !== '' && _this.selectedAns23 !== 0) {
                _this.selectedAns33 = target.name;
            }
            else if (_this.selectedAns23 !== 0 && target.name == 10) {
                _this.selectedAns23 = 0;
            }
            else {
                _this.selectedAns23 = target.name;
            }
        }

        if (_this.selectedAns23 === '') {
            if (_this.selectedAns13 === 0 && target.name !== 0) {
                _this.selectedAns23 = target.name;
            }
            else if (_this.selectedAns13 !== '' && _this.selectedAns13 !== 0) {
                _this.selectedAns23 = target.name;
            }
            else if (_this.selectedAns13 !== 0 && target.name == 10) {
                _this.selectedAns13 = 0;
            }
            else {
                _this.selectedAns13 = target.name;
            }
        }

        _this.AnswerBox4.removeChild(_this.enterTxt4);
        _this.enterTxt4.visible = false;

        if (_this.selectedAns13 === 10) var_selectedAns1 = 0;
        else var_selectedAns1 = _this.selectedAns12;
        if (_this.selectedAns23 === 10) _this.selectedAns23 = 0;
        else var_selectedAns2 = _this.selectedAns23;
        if (_this.selectedAns33 === 10) _this.selectedAns33 = 0;
        else var_selectedAns3 = _this.selectedAns33;


        if (_this.selectedAns13 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns13;

        if (_this.selectedAns23 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns23;

        if (_this.selectedAns33 === "") var_selectedAns3 = " ";
        else var_selectedAns3 = _this.selectedAns33;

        //type0-scene1  type1-scene2  type2-scene3
        if (_this.selectedAns23 === "" && _this.selectedAns33 === "")
            _this.enterTxt4 = _this.add.text(26, 4, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '25px' });
        else if (_this.selectedAns33 === "")
            _this.enterTxt4 = _this.add.text(20, 4, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '25px' });
        else
            _this.enterTxt4 = _this.add.text(10, 4, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '25px' });


        _this.enterTxt4.align = 'right';
        _this.enterTxt4.fill = '#65B4C3';
        _this.AnswerBox4.addChild(_this.enterTxt4);
        _this.enterTxt4.visible = true;
        console.log(_this.selectedAns13, _this.selectedAns23, _this.selectedAns33);
        _this.AnswerBox4.name = Number('' + var_selectedAns1 + var_selectedAns2 + var_selectedAns3);
        console.log(_this.AnswerBox4.name);
    },

    rightbtnClicked1: function ()  //to validate answer
    {
        if (_this.for11.text == '      (a+b)² =  a²+ 2ab + b²') //if selected opt is (a+b)2
        {
            if (_this.AnswerBox1.name + _this.AnswerBox2.name == _this.randomNumber && _this.AnswerBox1.name != '' && _this.AnswerBox2.name != '')  //if sum value of a and b is equal to quest
            {
                _this.AnswerBox1.inputEnabled = false;
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox2.inputEnabled = false;
                _this.AnswerBox2.frame = 0;
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.fillFormula1();
            }
            else {
                _this.wrongSound.play();
                _this.wrongbtnClicked1();
                _this.wrongbtnClicked2();
                _this.AnswerBox1.frame = 1;
                _this.AnswerBox2.frame = 0;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this); //add wrong click event
                _this.rightbtn.events.onInputDown.removeAll();
                _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked1, _this); //add right click event
                for (let i = 0; i <= 10; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
                }
            }
        }
        else if (_this.for11.text == '      (a-b)² = a²- 2ab + b²')  //if selected opt is (a-b)2
        {
            if (_this.AnswerBox1.name - _this.AnswerBox2.name == _this.randomNumber && _this.AnswerBox1.name != '' && _this.AnswerBox2.name != '')  //if sub value of a and b is equal to quest
            {
                _this.AnswerBox1.inputEnabled = false;
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox2.inputEnabled = false;
                _this.AnswerBox2.frame = 0;
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.fillFormula1();
            }
            else {
                _this.wrongSound.play();
                _this.wrongbtnClicked1();
                _this.wrongbtnClicked2();
                _this.AnswerBox1.frame = 1;
                _this.AnswerBox2.frame = 0;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this); //add wrong click event
                _this.rightbtn.events.onInputDown.removeAll();
                _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked1, _this); //add right click event
                for (let i = 0; i <= 10; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
                }
            }
        }
        else if (_this.for11.text == '      a² - b² = (a+b)*(a-b) ') //if ques==2
        {
            if (_this.AnswerBox1.name == _this.number1)  //if correct value of a is given
            {
                _this.AnswerBox1.inputEnabled = false;
                _this.AnswerBox1.frame = 0;
                _this.flag1cor = 1;
            }
            else {
                _this.wrongbtnClicked1();
            }
            if (_this.AnswerBox2.name == _this.number2)  //if correct value of b is given
            {
                _this.AnswerBox2.inputEnabled = false;
                _this.AnswerBox2.frame = 0;
                _this.flag2cor = 1;
            }
            else {
                _this.wrongbtnClicked2();
            }

            if (_this.flag1cor == 1 && _this.flag2cor == 1)  //if all 2 are correct
            {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.fillFormula1();
            }
            else {
                if (_this.flag1cor == 1 && _this.flag2cor != 1) //if a is correct b is wrong highlight b
                {
                    _this.AnswerBox2.frame = 1;
                    _this.AnswerBox1.frame = 0;
                    _this.wrongbtn.events.onInputDown.removeAll();
                    _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this); //add wrong click event
                    for (let i = 0; i <= 10; i++) {
                        _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                        _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
                    }
                }
                else  //else highlight a
                {
                    _this.AnswerBox1.frame = 1;
                    _this.AnswerBox2.frame = 0;
                    _this.wrongbtn.events.onInputDown.removeAll();
                    _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this); //add wrong click event
                    for (let i = 0; i <= 10; i++) {
                        _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                        _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
                    }
                }
                _this.wrongSound.play();
            }
        }
        else if (_this.for11.text == '      (x+a)*(x+b) = x²+xa+xb+ab')  //if ques is 3
        {
            if (_this.AnswerBox1.name == _this.firstNumber1 * 100) //if correct value of x is given
            {
                _this.AnswerBox1.inputEnabled = false;
                _this.AnswerBox1.frame = 0;
                _this.flag11cor = 1;
            }
            else {
                _this.wrongbtnClicked1();
            }
            if (_this.AnswerBox2.name == _this.secondNumber2)  //if correct value of a is given
            {
                _this.AnswerBox2.inputEnabled = false;
                _this.AnswerBox2.frame = 0;
                _this.flag22cor = 1;
            }
            else {
                _this.wrongbtnClicked2();
            }
            if (_this.AnswerBox4.name == _this.thirdNumber3) //if correct value of b is given
            {
                _this.AnswerBox4.inputEnabled = false;
                _this.AnswerBox4.frame = 0;
                _this.flag33cor = 1;
            }
            else {
                _this.wrongbtnClicked3();
            }

            if (_this.flag11cor == 1 && _this.flag22cor == 1 && _this.flag33cor == 1)  //if all 3 are correct
            {
                _this.counterCelebrationSound.play();
                _this.numGroup.destroy();
                _this.fillFormula1();
            }
            else {
                if (_this.flag11cor == 1 && _this.flag22cor != 1) //if x is correct and a is wrong highlight a
                {
                    _this.AnswerBox2.frame = 1;
                    _this.AnswerBox1.frame = 0;
                    _this.AnswerBox4.frame = 0;
                    _this.wrongbtn.events.onInputDown.removeAll();
                    _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this); //add wrong click event
                    for (let i = 0; i <= 10; i++) {
                        _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                        _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
                    }
                }
                else if (_this.flag22cor == 1 && _this.flag11cor == 1 && _this.flag33cor != 1) //if x and a are correct and b is wrong highlight b
                {
                    _this.AnswerBox4.frame = 1;
                    _this.AnswerBox1.frame = 0;
                    _this.AnswerBox2.frame = 0;
                    _this.wrongbtn.events.onInputDown.removeAll();
                    _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked3, _this); //add wrong click event
                    for (let i = 0; i <= 10; i++) {
                        _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                        _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked3, _this);
                    }
                }
                else //else highlight x
                {
                    _this.AnswerBox1.frame = 1;
                    _this.AnswerBox2.frame = 0;
                    _this.AnswerBox4.frame = 0;
                    _this.wrongbtn.events.onInputDown.removeAll();
                    _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this); //add wrong click event
                    for (let i = 0; i <= 10; i++) {
                        _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                        _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
                    }
                }
                _this.wrongSound.play();
            }
        }
    },

    //once a b values are entered fill the formula with a b values
    fillFormula1: function () {
        if (_this.for11.text == '      (a+b)² =  a²+ 2ab + b²') {
            _this.fill = _this.add.text(310, 230, "(" + _this.AnswerBox1.name + " + " + _this.AnswerBox2.name + ")" + _this.power + " = " +
                _this.AnswerBox1.name + "*" + _this.AnswerBox1.name + " + 2*" + _this.AnswerBox1.name + "*" + _this.AnswerBox2.name + " + " + _this.AnswerBox2.name + "*" + _this.AnswerBox2.name);
            //_this.applyingStyle( _this.fill);
            _this.finalAns = (_this.AnswerBox1.name * _this.AnswerBox1.name) + (2 * _this.AnswerBox1.name * _this.AnswerBox2.name) + (_this.AnswerBox2.name * _this.AnswerBox2.name);
            _this.equal = _this.add.text(420, 280, "= ");
            _this.AnswerBox3 = _this.add.sprite(460, 280, 'textbox9');

        }
        else if (_this.for11.text == '      (a-b)² = a²- 2ab + b²') {
            _this.fill = _this.add.text(310, 230, "(" + _this.AnswerBox1.name + " - " + _this.AnswerBox2.name + ")" + _this.power + " = " +
                _this.AnswerBox1.name + "*" + _this.AnswerBox1.name + " - 2*" + _this.AnswerBox1.name + "*" + _this.AnswerBox2.name + " + " + _this.AnswerBox2.name + "*" + _this.AnswerBox2.name);
            //_this.applyingStyle( _this.fill);
            _this.finalAns = (_this.AnswerBox1.name * _this.AnswerBox1.name) - (2 * _this.AnswerBox1.name * _this.AnswerBox2.name) + (_this.AnswerBox2.name * _this.AnswerBox2.name);
            _this.equal = _this.add.text(415, 280, "= ");
            _this.AnswerBox3 = _this.add.sprite(445, 280, 'textbox9');

        }
        else if (_this.for11.text == '      a² - b² = (a+b)*(a-b) ') {
            _this.fill = _this.add.text(310, 230, _this.AnswerBox1.name + _this.power + " - " + _this.AnswerBox2.name + _this.power + " =  (" +
                _this.AnswerBox1.name + " + " + _this.AnswerBox2.name + ") * (" + _this.AnswerBox1.name + " - " + _this.AnswerBox2.name + ") ");
            //_this.applyingStyle( _this.fill);
            _this.finalAns = (_this.AnswerBox1.name + _this.AnswerBox2.name) * (_this.AnswerBox1.name - _this.AnswerBox2.name);
            _this.equal = _this.add.text(417, 280, "= ");
            _this.AnswerBox3 = _this.add.sprite(447, 270, 'textbox9');
            _this.AnswerBox3.scale.setTo(1.7, 1.2);

        }
        else if (_this.for11.text == '      (x+a)*(x+b) = x²+xa+xb+ab') {
            _this.fill = _this.add.text(250, 230, "(" + _this.AnswerBox1.name + "+" + _this.AnswerBox2.name + ") * (" + _this.AnswerBox1.name + "+" + _this.AnswerBox4.name + ") = " +
                _this.AnswerBox1.name + "*" + _this.AnswerBox1.name + " + " + _this.AnswerBox1.name + "*" + _this.AnswerBox2.name + " + " + _this.AnswerBox1.name + "*" + _this.AnswerBox4.name +
                " + " + _this.AnswerBox2.name + "*" + _this.AnswerBox4.name);
            //_this.applyingStyle( _this.fill);
            _this.finalAns = (_this.firstNumber * _this.secondNumber);
            _this.equal = _this.add.text(470, 280, "= ");
            _this.AnswerBox3 = _this.add.sprite(500, 270, 'textbox9');
            _this.AnswerBox3.scale.setTo(1.7, 1.2);
        }
        _this.AnswerBox3.inputEnabled = true;
        _this.AnswerBox3.input.useHandCursor = true;
        _this.AnswerBox3.frame = 1;

        if (_this.count1 == 0)
            _this.Ask_Question6.play();
        _this.Question_flag = 6;
        _this.addNumberPad2();  //add number pad

    },

    //* number pad two is to enter values upto 6 digit for answerBox3
    addNumberPad2: function () {
        _this.Choice = 1;
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';
        _this.selectedAns4 = '';
        _this.selectedAns5 = '';
        _this.selectedAns6 = '';

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'Numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);

        bottomnumpadbg.name = "Numpadbg";

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

        _this.enterTxt = '';

        _this.numpadTween = _this.add.tween(_this.numGroup);
        //tween in the number pad after a second.
        _this.tweenNumPad();
    },

    numClicked: function (target) {
        console.log(target.name)
        _this.clickSound.play();
        var_selectedAns1 = " ";
        var_selectedAns2 = " ";
        var_selectedAns3 = " ";
        var_selectedAns4 = " ";
        var_selectedAns5 = " ";
        var_selectedAns6 = " ";

        if (_this.selectedAns6 === '' && _this.selectedAns5 !== '' && _this.selectedAns4 !== '' && _this.selectedAns3 !== '' && _this.selectedAns2 !== '' && _this.selectedAns1 !== '') {
            if (_this.selectedAns5 === 0 && target.name !== 0) {
                console.log("1");
                _this.selectedAns6 = target.name;
            }
            else if (_this.selectedAns5 !== '' && _this.selectedAns5 !== 0) {
                console.log("2");
                _this.selectedAns6 = target.name;
            }
            else if (_this.selectedAns5 !== 0 && target.name == 10) {
                console.log("3");
                _this.selectedAns5 = 0;
            }
            else {
                console.log("4");
                _this.selectedAns5 = target.name;
            }
        }

        if (_this.selectedAns5 === '' && _this.selectedAns4 !== '' && _this.selectedAns3 !== '' && _this.selectedAns2 !== '' && _this.selectedAns1 !== '') {
            if (_this.selectedAns4 === 0 && target.name !== 0) {
                console.log("5");
                _this.selectedAns5 = target.name;
            }
            else if (_this.selectedAns4 !== '' && _this.selectedAns4 !== 0) {
                console.log("6");
                _this.selectedAns5 = target.name;
            }
            else if (_this.selectedAns4 !== 0 && target.name == 10) {
                console.log("7");
                _this.selectedAns4 = 0;
            }
            else {
                console.log("8");
                _this.selectedAns4 = target.name;
            }
        }

        if (_this.selectedAns4 === '' && _this.selectedAns3 !== '' && _this.selectedAns2 !== '' && _this.selectedAns1 !== '') {
            if (_this.selectedAns3 === 0 && target.name !== 0) {
                console.log("9");
                _this.selectedAns4 = target.name;
            }
            else if (_this.selectedAns3 !== '' && _this.selectedAns3 !== 0) {
                console.log("10");
                _this.selectedAns4 = target.name;
            }
            else if (_this.selectedAns3 !== 0 && target.name == 10) {
                console.log("11");
                _this.selectedAns3 = 0;
            }
            else {
                console.log("12");
                _this.selectedAns3 = target.name;
            }
        }


        if (_this.selectedAns3 === '' && _this.selectedAns2 !== '' && _this.selectedAns1 !== '') {
            if (_this.selectedAns2 === 0 && target.name !== 0) {
                console.log("13");
                _this.selectedAns3 = target.name;
            }
            else if (_this.selectedAns2 !== '' && _this.selectedAns2 !== 0) {
                console.log("14");
                _this.selectedAns3 = target.name;
            }
            else if (_this.selectedAns2 !== 0 && target.name == 10) {
                console.log("15");
                _this.selectedAns2 = 0;
            }
            else {
                console.log("16");
                _this.selectedAns2 = target.name;
            }
        }

        if (_this.selectedAns2 === '') {
            if (_this.selectedAns1 === 0 && target.name !== 0) {
                console.log("17");
                _this.selectedAns2 = target.name;
            }
            else if (_this.selectedAns1 !== '' && _this.selectedAns1 !== 0) {
                console.log("18");
                _this.selectedAns2 = target.name;
            }
            else if (_this.selectedAns1 !== 0 && target.name == 10) {
                console.log("19");
                _this.selectedAns1 = 0;
            }
            else {
                console.log("20");
                _this.selectedAns1 = target.name;
            }
        }

        _this.AnswerBox3.removeChild(_this.enterTxt);
        _this.enterTxt.visible = false;

        if (_this.selectedAns1 === 10) var_selectedAns1 = 0;
        else var_selectedAns1 = _this.selectedAns1;
        if (_this.selectedAns2 === 10) _this.selectedAns2 = 0;
        else var_selectedAns2 = _this.selectedAns2;
        if (_this.selectedAns3 === 10) _this.selectedAns3 = 0;
        else var_selectedAns3 = _this.selectedAns3;
        if (_this.selectedAns4 === 10) _this.selectedAns4 = 0;
        else var_selectedAns4 = _this.selectedAns4;
        if (_this.selectedAns5 === 10) _this.selectedAns5 = 0;
        else var_selectedAns5 = _this.selectedAns5;
        if (_this.selectedAns6 === 10) _this.selectedAns6 = 0;
        else var_selectedAns6 = _this.selectedAns6;


        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;

        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;

        if (_this.selectedAns3 === "") var_selectedAns3 = " ";
        else var_selectedAns3 = _this.selectedAns3;

        if (_this.selectedAns4 === "") var_selectedAns4 = " ";
        else var_selectedAns4 = _this.selectedAns4;

        if (_this.selectedAns5 === "") var_selectedAns5 = " ";
        else var_selectedAns5 = _this.selectedAns5;

        if (_this.selectedAns6 === "") var_selectedAns6 = " ";
        else var_selectedAns6 = _this.selectedAns6;

        //type0-scene1  type1-scene2  type2-scene3
        if (_this.selectedAns2 === "" && _this.selectedAns3 === "" && _this.selectedAns6 === "" && _this.selectedAns5 === "" && _this.selectedAns4 === "") {
            console.log("21");
            _this.enterTxt = _this.add.text(26, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3 + var_selectedAns4 + var_selectedAns5 + var_selectedAns6, { fontSize: '20px' });
        }
        else if (_this.selectedAns6 === "" && _this.selectedAns5 === "" && _this.selectedAns4 === "" && _this.selectedAns3 === "") {
            console.log("22");
            _this.enterTxt = _this.add.text(20, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3 + var_selectedAns4 + var_selectedAns5 + var_selectedAns6, { fontSize: '20px' });
        }
        else if (_this.selectedAns6 === "" && _this.selectedAns5 === "" && _this.selectedAns4 === "") {
            console.log("23");
            _this.enterTxt = _this.add.text(18, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3 + var_selectedAns4 + var_selectedAns5 + var_selectedAns6, { fontSize: '20px' });
        }
        else if (_this.selectedAns6 === "" && _this.selectedAns5 === "") {
            console.log("24");
            _this.enterTxt = _this.add.text(14, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3 + var_selectedAns4 + var_selectedAns5 + var_selectedAns6, { fontSize: '18px' });
        }
        else if (_this.selectedAns6 === "") {
            console.log("25");
            _this.enterTxt = _this.add.text(10, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3 + var_selectedAns4 + var_selectedAns5 + var_selectedAns6, { fontSize: '16px' });
        }
        else {
            console.log("26");
            _this.enterTxt = _this.add.text(7, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3 + var_selectedAns4 + var_selectedAns5 + var_selectedAns6, { fontSize: '16px' });
        }

        _this.enterTxt.align = 'right';
        // _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        // _this.enterTxt.fontWeight = 'normal';
        _this.AnswerBox3.addChild(_this.enterTxt);
        _this.enterTxt.visible = true;
        console.log(_this.selectedAns1, _this.selectedAns2, _this.selectedAns3, _this.selectedAns4, _this.selectedAns5, _this.selectedAns6);
        _this.AnswerBox3.name = Number('' + var_selectedAns1 + var_selectedAns2 + var_selectedAns3 + var_selectedAns4 + var_selectedAns5 + var_selectedAns6);
        console.log(_this.AnswerBox3.name);
    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.eraseScreen();
    },

    eraseScreen: function (target) {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';
        _this.selectedAns4 = '';
        _this.selectedAns5 = '';
        _this.selectedAns6 = '';
        _this.AnswerBox3.removeChild(_this.enterTxt);
        _this.AnswerBox3.name = '';

    },

    rightbtnClicked: function ()  //validate the final answer
    {
        if (_this.for11.text == '      (a+b)² =  a²+ 2ab + b²') {
            if (_this.AnswerBox3.name == _this.finalAns)  //if final value is correct
                _this.correctAns();
            else {
                _this.wrongSound.play();
                _this.wrongbtnClicked();
            }
        }
        else if (_this.for11.text == '      (a-b)² = a²- 2ab + b²') {
            if (_this.AnswerBox3.name == _this.finalAns)
                _this.correctAns();
            else {
                _this.wrongSound.play();
                _this.wrongbtnClicked();
            }
        }
        else if (_this.for11.text == '      a² - b² = (a+b)*(a-b) ') {
            if (_this.AnswerBox3.name == _this.finalAns)
                _this.correctAns();
            else {
                _this.wrongSound.play();
                _this.wrongbtnClicked();
            }
        }
        else if (_this.for11.text == '      (x+a)*(x+b) = x²+xa+xb+ab') {
            if (_this.AnswerBox3.name == _this.finalAns)  //if correct value of a is given
                _this.correctAns();
            else {
                _this.wrongSound.play();
                _this.wrongbtnClicked();
            }
        }
    },

    correctAns: function () {
        _this.AnswerBox3.frame = 0;
        _this.counterCelebrationSound.play();
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
        _this.destroyscreen();
        _this.numGroup.destroy();

    },

    destroyscreen: function () {
        _this.AnswerBox3.destroy();
        _this.AnswerBox1.destroy();
        _this.AnswerBox2.destroy();
        _this.for11.destroy();
        _this.opt1.destroy();
        _this.a.destroy();
        _this.b.destroy();
        _this.diplayNum.destroy();
        _this.fill.destroy();
        _this.equal.destroy();
        if (_this.arr[_this.count1] == 3) {
            _this.c.destroy();
            _this.AnswerBox4.destroy();


        }
        _this.count1++;
        _this.Question_flag = 7;
        _this.time.events.add(1500, function () {
            if (_this.count1 == 2) {
                _this.state.start('score', true, false, gameID, _this.microConcepts);
                // _this.state.start('AL_IDE_G8Score', true, false);
            }
            else
                _this.partB();
        });

    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);
    },

    wrongbtnClicked1: function (target) {
        _this.clickSound.play();
        _this.disableInputs1();
    },
    disableInputs1: function () {
        _this.AnswerBox1.removeChild(_this.enterTxt1);
        _this.AnswerBox1.name = '';
        _this.disablecommon1();
    },
    disablecommon1: function () {
        _this.selectedAns11 = '';
        _this.selectedAns21 = '';
        _this.selectedAns31 = '';
        _this.finalval1 = '';

    },
    wrongbtnClicked2: function (target) {
        _this.clickSound.play();
        _this.disableInputs2();
    },
    disableInputs2: function () {
        _this.AnswerBox2.removeChild(_this.enterTxt2);
        _this.AnswerBox2.name = '';
        _this.disablecommon2();
    },
    disablecommon2: function () {
        _this.selectedAns12 = '';
        _this.selectedAns22 = '';
        _this.selectedAns32 = '';
        _this.finalval2 = '';

    },
    wrongbtnClicked3: function (target) {
        _this.clickSound.play();
        _this.disableInputs3();
    },
    disableInputs3: function () {
        _this.AnswerBox4.removeChild(_this.enterTxt4);
        _this.AnswerBox4.name = '';
        _this.disablecommon3();
    },
    disablecommon3: function () {
        _this.selectedAns13 = '';
        _this.selectedAns23 = '';
        _this.selectedAns33 = '';
        _this.finalval3 = '';

    },

    //applying the style to the text in the answerbox.
    applyingStyle: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
    },
    applyingStyle1: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#D2042D';
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '30px';
    },

    //checking if two sprites overlap.
    checkOverlap: function (spriteA, spriteB) {
        // console.log("checkOverlap")
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
        _this.microConcepts = "AlgebraG8";
    },
    shutdown: function () {
        _this.stopVoice();
    },
    stopAudio: function () {
        //* clear all the timers first

        if (_this.q1Timer) clearTimeout(_this.q1Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.q3Timer) clearTimeout(_this.q3Timer);
        if (_this.q4Timer) clearTimeout(_this.q4Timer);
        if (_this.videoTimer) clearTimeout(_this.videoTimer);

        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }
        if (_this.demoAudio2) {
            console.log("removing the demo audio2");
            _this.demoAudio2.pause();
            _this.demoAudio2 = null;
            _this.demoAudio2src = null;
        }
        if (_this.demoAudio3) {
            console.log("removing the demo audio3");
            _this.demoAudio3.pause();
            _this.demoAudio3 = null;
            _this.demoAudio3src = null;
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

        if (_this.q4Sound) {
            console.log("removing the q3");
            _this.q4Sound.pause();
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },
    DemoVideo: function () {

        // DEMO AUDIOS
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/AL-IDE-G8/" + _this.languageSelected + "/AL_IDE_G8_d1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/AL-IDE-G8/" + _this.languageSelected + "/AL_IDE_G8_d2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/AL-IDE-G8/" + _this.languageSelected + "/AL_IDE_G8_d3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        // QUESTION AUDIOS
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-IDE-G8/" +
            _this.languageSelected + "/AL_IDE_G8_a1.mp3");//multyplay algeb expre
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-IDE-G8/" +
            _this.languageSelected + "/AL_IDE_G8_a2.mp3");//place any one side
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-IDE-G8/" +
            _this.languageSelected + "/AL_IDE_G8_a3.mp3");//place other side
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-IDE-G8/" +
            _this.languageSelected + "/AL_IDE_G8_a4.mp3");//fill the area
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-IDE-G8/" +
            _this.languageSelected + "/AL_IDE_G8_a5.mp3");//zero pair
        _this.q5Sound.appendChild(_this.q5Soundsrc);

        _this.q6Sound = document.createElement('audio');
        _this.q6Soundsrc = document.createElement('source');
        _this.q6Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-IDE-G8/" +
            _this.languageSelected + "/AL_IDE_G8_a6.mp3");//enter ans
        _this.q6Sound.appendChild(_this.q6Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video


        _this.skip = _this.add.image(870, 270, 'skipArrow');       //* skip button shown at the bottom
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
    dA1: function () {
        console.log('q1Sound');
        _this.q1Sound.play();
    },
    dA2: function () {
        console.log('q2Sound');
        // _this.demoVideo_1.playbackRate = 1;
        _this.q2Sound.play();
    },

    dA3: function () {
        console.log('q4Sound');
        _this.demoVideo_1.playbackRate = 1.5;
        _this.q4Sound.play();
    },

    showDemoVideo: function () {

        _this.demoVideo_1 = _this.add.video('ALMUL3G8');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/AL-MUL3-G8.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        _this.demoVideo_1.playbackRate = 0;
        _this.demoAudio1.play();

        _this.demoAudio1.addEventListener('ended', _this.dA1);

        _this.videoTimer = setTimeout(function ()    //* q1 js timer to play q1 after 5 seconds.
        {
            console.log("inside videoTimer.....")
            clearTimeout(_this.videoTimer);         //* clear the time once its used.
            _this.demoVideo_1.playbackRate = 1;
            // _this.q3Sound.play();
        }, 22000);

        _this.q1Sound.addEventListener('ended', _this.dA2);

        _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1 after 5 seconds.
        {
            console.log("inside q3sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 31000);//27000

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2 after 2 min.
        {
            console.log("inside demoAudio2.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.demoAudio2.play();
        }, 43000);

        _this.demoAudio2.addEventListener('ended', _this.dA3);

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3 after 3 min.
        {
            _this.demoVideo_1.playbackRate = 1;
            console.log("inside q5Sound.....")
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q5Sound.play();
        }, 75000);

        _this.q4Timer = setTimeout(function ()    //* q3 js timer to play q3 after 3 min.
        {
            console.log("inside q6Sound.....")
            clearTimeout(_this.q4Timer);         //* clear the time once its used.
            _this.q6Sound.play();
        }, 81000);

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
