Game.AL_MUL1_G8level1 = function () { };


Game.AL_MUL1_G8level1.prototype =
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

        // _this.snapSound = document.createElement('audio');
        // _this.snapSoundsrc = document.createElement('source');
        // _this.snapSoundsrc.setAttribute("src", window.baseUrl +"sounds/snapSound.mp3");
        // _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.framechange = document.createElement('audio');
        _this.framechangesrc = document.createElement('source');
        _this.framechangesrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);


        _this.Ask_Question1 = _this.createAudio("AL_MUL1_G8_a1");
        _this.Ask_Question2 = _this.createAudio("AL_MUL1_G8_a4");
        _this.Ask_Question3 = _this.createAudio("AL_MUL1_G8_a6");
        _this.Ask_Question4 = _this.createAudio("AL_MUL1_G8_a2");
        _this.Ask_Question5 = _this.createAudio("AL_MUL1_G8_a3");

        //edited for baseurl online apk
        telInitializerbbpp.gameIdInit("AL_MUL1_G8", gradeSelected);
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
        _this.vertical_Flag;
        _this.horizontal_Flag;
        _this.Flag1 = false;
        _this.Flag2 = false;

        _this.count1 = 0;

        _this.askedTerm1 = [];
        _this.askedTerm2 = [];

        _this.erasedPositions = [];
        _this.erasedObjectInitialPosition = [];

        _this.destroyedPositions = [];
        _this.destroyedPositions2 = [];
        _this.destroyedPositions3 = [];
        _this.toDestroy = [];

        _this.DestroyAll = [];
        _this.CorrectAnsCount = [];

        // Part A
        _this.destroyFlag = 0;
        _this.destroyFlagV = 0;
        _this.destroyFlagH = 0;
        _this.destroyFlagC = 0;

        // Part B
        _this.destroyObjectX = 0;
        _this.destroyObjectY = 0;
        _this.destroyObjectC = 0;
        _this.destroyObjectXV = 0;
        _this.destroyObjectXH = 0;
        _this.destroyObjectXYV = 0;
        _this.destroyObjectXYH = 0;
        _this.destroyObjectYV = 0;
        _this.destroyObjectYH = 0;

        _this.numOfChildren = 0; // third validation

        _this.numOfObjects1 = 0; // first validation
        _this.numOfObjects2 = 0; // second validation

        _this.numOfObjects3 = 0; // fourth validation
        _this.numOfObjects4 = 0; // fifth validation

        _this.DragOrNotFlag = 0;

        _this.multiplyValue2;
        _this.multiplyValue;

        //part b variables
        _this.ValidationFlag1 = false;
        _this.ValidationFlag2 = false;
        _this.ValidationFlag3 = false;
        _this.ValidationFlag4 = false;

        _this.counterForTimer = 0;

        _this.namesArray = [];

        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'BG1');
        //** include the background file, navigation bar, stars, timer objects.
        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            // _this.state.start('AL_MUL1_G8Score');
            // _this.state.start('score');
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



        //* include variables for use - objGroup (where egg objects can be added)
        _this.objGroup;
        _this.numGroup;

        _this.greenObjectArray = [];

        _this.QuestionArray = [1, 2, 1, 2, 1, 2]; //1=patrA 2=PartB
        Phaser.ArrayUtils.shuffle(_this.QuestionArray);
        console.log(_this.QuestionArray, '_this.QuestionArray');

        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);

    },
    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL1-G8/" + _this.languageSelected + "/" + src + ".mp3");
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

        //* hintbtn will be true when the game is playing
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1;

        _this.DecideQuestion();

    },
    stopVoice: function () {
        _this.Ask_Question1.currentTime = 0;
        _this.Ask_Question2.currentTime = 0;
        _this.Ask_Question3.currentTime = 0;
        _this.Ask_Question4.currentTime = 0;
        _this.Ask_Question5.currentTime = 0;


        if (_this.Ask_Question1) {
            _this.Ask_Question1.pause();
            _this.Ask_Question1 = null;
        }

        if (_this.Ask_Question2) {
            _this.Ask_Question2.pause();
            _this.Ask_Question2 = null;
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

        // _this.Ask_Question1.pause();
        // _this.Ask_Question1 = null;

        // _this.Ask_Question2.pause();
        // _this.Ask_Question2 = null;

        if (_this.celebrationSound) {
            if (_this.celebrationSound.isPlaying) {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }

    },

    DecideQuestion: function () {
        // //edited for baseurl apk
        // _this.sceneCount++;
        // _this.noofAttempts = 0;
        // //....

        if (_this.count1 == 0) {
            _this.Ask_Question1.play();
            _this.Ask_Question1.addEventListener('ended', () => {
                _this.Ask_Question4.play();
                _this.Question_flag = 4;
            });

        }
        if (_this.QuestionArray[_this.count1] == 1) {
            console.log("partA");
            _this.QuestionFormation();
            _this.InitialScreen();

        }
        else if (_this.QuestionArray[_this.count1] == 2) {
            console.log("partB");
            _this.QuestionFormation2();
            _this.InitialScreen2();


        }
    },

    NextQuestion: function () {
        console.log('next question.......')
        _this.count1++;
        if (_this.count1 < 6) {

            if (_this.QuestionArray[_this.count1] == 1) {
                console.log("partA");
                _this.QuestionFormation();
                _this.InitialScreen();//PartA

            }
            else if (_this.QuestionArray[_this.count1] == 2) {
                console.log("partB");
                _this.QuestionFormation2();
                _this.InitialScreen2();
            }
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            // _this.time.events.add(1000, function () { _this.state.start('score') });
            _this.state.start('score', true, false, gameID, _this.microConcepts);

        }
    },

    //Creating the question.
    QuestionFormation: function () {

        //** A monomial equation is an algebraic equation that contains only one term. The term is a product of a constant and one or more variables raised to non-negative integer exponents.  */
        //** Example: (3x) * (2) ,  (2) * (4x) , (3) * (2)  as both positve and negative terms*/
        //** To form a monomial equation we need degree(3) coefficient(x or y) and constant (2) = (3x) * (2) */

        //* First term of Monomial Equation //
        _this.sign = Math.floor(Math.random() * (2)); // 0,1 0= +, 1 =-

        if (_this.sign == 0) {
            _this.equationSign1 = '';
        } else {
            _this.equationSign1 = '-';
        }

        _this.monoVariable = ['x'];

        _this.monoCoefficient = Math.floor(Math.random() * 2) + 1; //values it will generate are: -2x, -1x, 0, 1x, 2x

        console.log('first numberrrrrrrrr' + ' ' + _this.monoCoefficient);

        _this.monoConstant = Math.floor(Math.random() * 7) + 1; // values it will generate are:  -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9.


        _this.decideMonoEq = 0;
        // console.log(_this.decideMonoEq , '           ' , 'decide 0 or 1 or 2') // 0- 3x , 1- x, 2- 5
        _this.actualMonoValue = _this.monoCoefficient;

        if (_this.decideMonoEq == 0) {
            if (_this.monoCoefficient == 1) {// when coefficient is 0 regenerate values

                _this.monoCoefficient = '';
            }
            _this.equation = _this.equationSign1 + _this.actualMonoValue + _this.monoVariable[0];
        }
        else {
            _this.equation = _this.equationSign1 + _this.monoConstant;
            // console.log(_this.equation + '       ' + '_this.monoConstant ');
        }

        //* Second term of Monomial Equation //
        _this.sign = Math.floor(Math.random() * (2)); // 0,1 0= +, 1 =-

        if (_this.sign == 0) {
            _this.equationSign2 = '';
        } else {
            _this.equationSign2 = '-';
        }

        _this.monoVariable2 = ['x'];

        _this.monoCoefficient2 = Math.floor(Math.random() * 4) + 1; //values it will generate are:  -4x, -3x,-2x, -1x, 0, 1x, 2x, 3x, 4x

        _this.monoConstant2 = Math.floor(Math.random() * 7) + 1; // values it will generate are:  -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9.


        _this.decideMonoEq2 = Math.floor(Math.random() * (2));
        // console.log(_this.decideMonoEq2 + '           ' + 'decide 0 or 1 or 2') // 0- 3x , 1- x, 2- 5

        _this.actualMonoValue2 = _this.monoCoefficient2;

        if (_this.decideMonoEq2 == 0) {
            if (_this.monoCoefficient2 == 1) { // when coefficient is 0 regenerate values
                _this.monoCoefficient2 = '';
            }
            _this.equation2 = _this.equationSign2 + _this.actualMonoValue2 + _this.monoVariable2[0];
        } else {
            _this.equation2 = _this.equationSign2 + _this.monoConstant2
            // console.log(_this.equation2 + '       ' + '_this.monoConstant2 ');
        }

        if (_this.count1 > 0) {
            for (let i = 0; i < _this.askedTerm1.length; i++) {
                if (_this.askedTerm1[i] === _this.equation && _this.askedTerm2[i] === _this.equation2) {
                    console.log('repeated Q')
                    _this.DecideQuestion();
                } else {
                    console.log('diff Q')
                }
            }
        }

        _this.askedTerm1.push(_this.equation);
        _this.askedTerm2.push(_this.equation2);
    },

    QuestionFormation2: function () {
        console.log('QuestionFormation2')
        //** A monomial equation is an algebraic equation that contains only one term. The term is a product of a constant and one or more variables raised to non-negative integer exponents.  */
        //** Example: (3x) * (2) ,  (2) * (4x) , (3) * (2)  as both positve and negative terms*/
        //** To form a monomial equation we need degree(3) coefficient(x or y) and constant (2) = (3x) * (2) */

        //* First term of Monomial Equation //
        _this.sign = Math.floor(Math.random() * (2)); // 0,1 0= +, 1 =-

        if (_this.sign == 0) {
            _this.equationSign1 = '';
        } else {
            _this.equationSign1 = '-';
        }

        _this.monoVariable_1 = ['x', 'y'];
        Phaser.ArrayUtils.shuffle(_this.monoVariable_1);

        _this.monoVariable_2 = ['x', 'y'];
        Phaser.ArrayUtils.shuffle(_this.monoVariable_2);

        console.log(_this.monoVariable_1, '_this.monoVariable_1')
        console.log(_this.monoVariable_2, '_this.monoVariable_2')

        _this.monoCoefficient = Math.floor(Math.random() * 2) + 1; //values it will generate are: -2x, -1x, 0, 1x, 2x

        _this.monoConstant = Math.floor(Math.random() * 7) + 1; // values it will generate are:  -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9.


        _this.decideMonoEq = Math.floor(Math.random() * (2));

        _this.decideMonoEq2 = Math.floor(Math.random() * (2));

        while (_this.decideMonoEq === 1 && _this.decideMonoEq2 === 1) {
            _this.decideMonoEq = Math.floor(Math.random() * 2);
            _this.decideMonoEq2 = Math.floor(Math.random() * 2);
        }
        // console.log(_this.decideMonoEq , '           ' , 'decide 0 or 1 or 2') // 0- 3x , 1- x, 2- 5
        _this.actualMonoValue = _this.monoCoefficient;

        if (_this.decideMonoEq == 0) {
            if (_this.monoCoefficient == 1) {// when coefficient is 0 regenerate values

                _this.monoCoefficient = '';
            }
            _this.equation = _this.equationSign1 + _this.actualMonoValue + _this.monoVariable_1[0];
            // console.log(_this.equation + '       ' + '_this.equationSign1 + _this.monoCoefficient + _this.monoVariable;');
        }
        else {
            _this.equation = _this.equationSign1 + _this.monoConstant;
            // console.log(_this.equation + '       ' + '_this.monoConstant ');
        }



        // //* Second term of Monomial Equation //
        _this.sign = Math.floor(Math.random() * (2)); // 0,1 0= +, 1 =-

        if (_this.sign == 0) {
            _this.equationSign2 = '';
        } else {
            _this.equationSign2 = '-';
        }


        _this.monoCoefficient2 = Math.floor(Math.random() * 4) + 1; //values it will generate are: -5x, -4x, -3x,-2x, -1x, 0, 1x, 2x, 3x, 4x

        _this.monoConstant2 = Math.floor(Math.random() * 7) + 1; // values it will generate are:  -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9.



        // console.log(_this.decideMonoEq2 + '           ' + 'decide 0 or 1 or 2') // 0- 3x , 1- x, 2- 5

        _this.actualMonoValue2 = _this.monoCoefficient2;

        if (_this.decideMonoEq2 == 0) {
            if (_this.monoCoefficient2 == 1) { // when coefficient is 0 regenerate values
                _this.monoCoefficient2 = '';
            }
            _this.equation2 = _this.equationSign2 + _this.actualMonoValue2 + _this.monoVariable_2[0];
        } else {
            _this.equation2 = _this.equationSign2 + _this.monoConstant2
            // console.log(_this.equation2 + '       ' + '_this.monoConstant2 ');
        }

        if (_this.count1 > 0) {
            for (let i = 0; i < _this.askedTerm1.length; i++) {
                if (_this.askedTerm1[i] === _this.equation && _this.askedTerm2[i] === _this.equation2) {
                    console.log('repeated Q')
                    _this.DecideQuestion();
                } else {
                    console.log('diff Q')
                }
            }
        }

        _this.askedTerm1.push(_this.equation);
        _this.askedTerm2.push(_this.equation2);

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
    //this function is used for showing the question.

    InitialScreen: function () {
        //edited for baseurl apk
        _this.sceneCount++;
        _this.noofAttempts = 0;
        //....

        _this.power = "\u{00B2}";

        console.log("AskingQuestion")

        _this.textBox = _this.add.sprite(230, 80, 'Text box_1');
        _this.textBox.frame = 0;

        //displaying 2nd monomial equation//
        if (_this.decideMonoEq == 0) {
            _this.Finalequation = _this.equationSign1 + _this.monoCoefficient + _this.monoVariable[0];
            console.log(_this.Finalequation + '       ' + '_this.Finalequation 1');
        }
        else {
            _this.Finalequation = _this.equationSign1 + _this.monoConstant;
            console.log(_this.Finalequation + '       ' + '_this.Finalequation 3 ');
        }

        let stringEq = '( ';
        let multiply = '*';
        stringEq = stringEq + _this.Finalequation + ' )';

        // stringEq = stringEq + _this.multiplySign;


        _this.questionText = _this.add.text(50, 19, stringEq);
        _this.applyingStyleBlue(_this.questionText);
        _this.textBox.addChild(_this.questionText);

        _this.multiplySign = _this.add.text(145, 19, multiply);
        _this.applyingStyleBlue(_this.multiplySign);
        _this.textBox.addChild(_this.multiplySign);

        //displaying 2nd monomial equation//

        if (_this.decideMonoEq2 == 0) {
            _this.Finalequation2 = _this.equationSign2 + _this.monoCoefficient2 + _this.monoVariable2[0];
            console.log(_this.Finalequation + '       ' + '_this.Finalequation 4');
        }
        else {
            _this.Finalequation2 = _this.equationSign2 + _this.monoConstant2;
            console.log(_this.Finalequation2 + '       ' + '_this.Finalequation 6 ');
        }

        let stringEq2 = '( ';
        stringEq2 = stringEq2 + _this.Finalequation2 + ' )';

        _this.questionText2 = _this.add.text(160, 19, stringEq2);
        _this.applyingStyleBlue(_this.questionText2);
        _this.textBox.addChild(_this.questionText2);


        _this.eraser = _this.add.sprite(800, 85, 'eraser');
        _this.tick = _this.add.sprite(865, 85, 'TickBtn');

        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.input.useHandCursor = true;
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop1, _this);

        _this.space1 = _this.add.sprite(240, 160, 'panel1');

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickEvaluation, _this);

        _this.sideGray1 = _this.add.sprite(30, 270, 'panel2');
        _this.sideGray2 = _this.add.sprite(140, 270, 'panel2');

        _this.green_1 = _this.add.image(45, 280, 'greenSmall1');
        _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
        _this.green_3 = _this.add.image(65, 450, 'greenSmall3');

        _this.pink_1 = _this.add.image(155, 280, 'pinkSmall1');
        _this.pink_2 = _this.add.image(155, 385, 'pinkSmall2');
        _this.pink_3 = _this.add.image(175, 450, 'pinkSmall3');

        _this.greenBig_1 = _this.add.sprite('greenBig1');

        _this.letterA = _this.add.text(60, 295, '-x²');
        _this.applyingWhite(_this.letterA);
        _this.letterA.fontSize = '28px';

        _this.letterB = _this.add.text(165, 295, '+x²');
        _this.applyingWhite(_this.letterB);
        _this.letterB.fontSize = '28px';

        _this.letterC = _this.add.text(60, 352, '-x');
        _this.applyingStyle1(_this.letterC);
        _this.letterC.fontSize = '30px';

        _this.letterD = _this.add.text(165, 352, '+x');
        _this.applyingStyle2(_this.letterD);
        _this.letterD.fontSize = '30px';

        _this.letterE = _this.add.text(60, 417, '-1');
        _this.applyingStyle1(_this.letterE);

        _this.letterF = _this.add.text(165, 417, '+1');
        _this.applyingStyle2(_this.letterF);

        _this.green_1.inputEnabled = true;
        _this.green_2.inputEnabled = true;
        _this.green_3.inputEnabled = true;

        _this.pink_1.inputEnabled = true;
        _this.pink_2.inputEnabled = true;
        _this.pink_3.inputEnabled = true;

        _this.green_1.input.useHandCursor = true;
        _this.green_2.input.useHandCursor = true;
        _this.green_3.input.useHandCursor = true;

        _this.pink_1.input.useHandCursor = true;
        _this.pink_2.input.useHandCursor = true;
        _this.pink_3.input.useHandCursor = true;

        _this.green_1.events.onInputDown.add(_this.m2S1);
        _this.green_2.events.onInputDown.add(_this.mR1);
        _this.green_3.events.onInputDown.add(_this.mS1);

        _this.pink_1.events.onInputDown.add(_this.m2S2);
        _this.pink_2.events.onInputDown.add(_this.mR2);
        _this.pink_3.events.onInputDown.add(_this.mS2);

        _this.space1Boxes = _this.add.group();
        _this.space2Boxes = _this.add.group();

        _this.space3Boxes = _this.add.group();
        _this.space4Boxes = _this.add.group();

        _this.limit1 = 0;
        _this.limit2 = 0;

        _this.verticalX = 267;
        _this.verticalY = 200;

        _this.horizontalX = 300;
        _this.horizontalY = 170;

        // part A Drag 
        _this.greenXSqX = 300;
        _this.greenXSqY = 200;

        _this.greenX = 300;
        _this.greenY = 200;

        _this.greenConstX = 300;
        _this.greenConstY = 200;



        _this.greenXSq_Dup = _this.add.image(45, 280, 'greenSmall1');
        _this.letterA.bringToTop();

        _this.pinkYSq_Dup = _this.add.image(155, 280, 'pinkSmall1');
        _this.letterB.bringToTop();

    },

    InitialScreen2: function () {
        //edited for baseurl apk
        _this.sceneCount++;
        _this.noofAttempts = 0;
        //....

        _this.power = "\u{00B2}";

        console.log("AskingQuestion 2")
        _this.textBox = _this.add.sprite(230, 80, 'Text box_1');
        _this.textBox.frame = 0;

        if (_this.decideMonoEq === 1 && _this.decideMonoEq2 === 1) {
            console.log('both constants.........................change equation')
            _this.decideMonoEq = Math.floor(Math.random() * (2));
            _this.decideMonoEq2 = Math.floor(Math.random() * (2));
        }
        //displaying 2nd monomial equation//
        if (_this.decideMonoEq == 0) {
            _this.Finalequation = _this.equationSign1 + _this.monoCoefficient + _this.monoVariable_1[0];
            console.log(_this.Finalequation + '       ' + '_this.Finalequation 1');
        }
        else {
            _this.Finalequation = _this.equationSign1 + _this.monoConstant;
            console.log(_this.Finalequation + '       ' + '_this.Finalequation 3 ');
        }

        let stringEq = '( ';
        let multiply = '*';
        stringEq = stringEq + _this.Finalequation + ' )';

        _this.questionText = _this.add.text(50, 19, stringEq);
        _this.applyingStyleBlue(_this.questionText);
        _this.textBox.addChild(_this.questionText);

        _this.multiplySign = _this.add.text(145, 19, multiply);
        _this.applyingStyleBlue(_this.multiplySign);
        _this.textBox.addChild(_this.multiplySign);

        //displaying 2nd monomial equation//

        if (_this.decideMonoEq2 == 0) {
            _this.Finalequation2 = _this.equationSign2 + _this.monoCoefficient2 + _this.monoVariable_2[0];
            console.log(_this.Finalequation + '       ' + '_this.Finalequation 4');
        }
        else {
            _this.Finalequation2 = _this.equationSign2 + _this.monoConstant2;
            console.log(_this.Finalequation2 + '       ' + '_this.Finalequation 6 ');
        }

        let stringEq2 = '( ';
        stringEq2 = stringEq2 + _this.Finalequation2 + ' )';

        _this.questionText2 = _this.add.text(160, 19, stringEq2);
        _this.applyingStyleBlue(_this.questionText2);
        _this.textBox.addChild(_this.questionText2);


        _this.eraser = _this.add.sprite(800, 85, 'eraser');
        _this.tick = _this.add.sprite(865, 85, 'TickBtn');

        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.input.useHandCursor = true;
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop4, _this);

        _this.space1 = _this.add.sprite(240, 160, 'panel1');

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickEvaluationFour, _this);

        _this.sideGray1 = _this.add.sprite(30, 130, 'panel3');
        _this.sideGray2 = _this.add.sprite(140, 130, 'panel3');

        _this.green_4 = _this.add.image(42, 140, 'greenS1'); // X²
        _this.green_5 = _this.add.image(42, 235, 'greenSmall2');// X
        _this.green_6 = _this.add.image(65, 485, 'greenSmall3');// 1

        _this.pink_4 = _this.add.image(155, 140, 'pinkS1');// X²
        _this.pink_5 = _this.add.image(155, 235, 'pinkSmall2');// X
        _this.pink_6 = _this.add.image(175, 485, 'pinkSmall3');// 1

        _this.greenXY = _this.add.image(42, 265, 'greenXY');// XY
        _this.pinkXY = _this.add.image(155, 265, 'pinkXY');// XY

        _this.green_Y = _this.add.image(50, 345, 'greenY');// Y
        _this.pink_Y = _this.add.image(160, 345, 'pinkY');// Y

        _this.greenY2 = _this.add.image(50, 410, 'greenY2');// Y²
        _this.pinkY2 = _this.add.image(160, 410, 'pinkY2');// Y²

        _this.letter1 = _this.add.text(55, 155, '-x²');
        _this.applyingWhite(_this.letter1);

        _this.letter2 = _this.add.text(165, 155, '+x²');
        _this.applyingWhite(_this.letter2);

        _this.letter3 = _this.add.text(57, 205, '-x');
        _this.applyingStyle1(_this.letter3);

        _this.letter4 = _this.add.text(165, 205, '+x');
        _this.applyingStyle2(_this.letter4);

        _this.letter5 = _this.add.text(55, 270, '-xy');
        _this.applyingStyle(_this.letter5);

        _this.letter6 = _this.add.text(165, 270, '+xy');
        _this.applyingStyle(_this.letter6);

        _this.letter7 = _this.add.text(55, 315, '-y');
        _this.applyingStyle1(_this.letter7);

        _this.letter8 = _this.add.text(162, 315, '+y');
        _this.applyingStyle2(_this.letter8);

        _this.letter9 = _this.add.text(50, 375, '-y²');
        _this.applyingStyle1(_this.letter9);

        _this.letter10 = _this.add.text(165, 375, '+y²');
        _this.applyingStyle2(_this.letter10);

        _this.letter11 = _this.add.text(60, 455, '-1');
        _this.applyingStyle1(_this.letter11);

        _this.letter12 = _this.add.text(165, 455, '+1');
        _this.applyingStyle2(_this.letter12);

        _this.green_4.inputEnabled = true;
        _this.green_5.inputEnabled = true;
        _this.green_6.inputEnabled = true;
        _this.greenXY.inputEnabled = true;
        _this.green_Y.inputEnabled = true;
        _this.greenY2.inputEnabled = true;

        _this.pink_4.inputEnabled = true;
        _this.pink_5.inputEnabled = true;
        _this.pink_6.inputEnabled = true;
        _this.pinkXY.inputEnabled = true;
        _this.pink_Y.inputEnabled = true;
        _this.pinkY2.inputEnabled = true;

        _this.green_4.input.useHandCursor = true;
        _this.green_5.input.useHandCursor = true;
        _this.green_6.input.useHandCursor = true;
        _this.greenXY.input.useHandCursor = true;
        _this.green_Y.input.useHandCursor = true;
        _this.greenY2.input.useHandCursor = true;

        _this.pink_4.input.useHandCursor = true;
        _this.pink_5.input.useHandCursor = true;
        _this.pink_6.input.useHandCursor = true;
        _this.pinkXY.input.useHandCursor = true;
        _this.pink_Y.input.useHandCursor = true;
        _this.pinkY2.input.useHandCursor = true;

        _this.green_4.events.onInputDown.add(_this.NegXSq);
        _this.green_5.events.onInputDown.add(_this.NegX);
        _this.green_6.events.onInputDown.add(_this.NegConst);
        _this.greenXY.events.onInputDown.add(_this.NegXY);
        _this.green_Y.events.onInputDown.add(_this.NegY);
        _this.greenY2.events.onInputDown.add(_this.NegYSq);

        _this.pink_4.events.onInputDown.add(_this.PosXSq);
        _this.pink_5.events.onInputDown.add(_this.PosX);
        _this.pink_6.events.onInputDown.add(_this.PosConst);
        _this.pinkXY.events.onInputDown.add(_this.PosXY);
        _this.pink_Y.events.onInputDown.add(_this.PosY);
        _this.pinkY2.events.onInputDown.add(_this.PosYSq);

        _this.space5Boxes = _this.add.group();
        _this.space6Boxes = _this.add.group();

        _this.space7Boxes = _this.add.group();
        _this.space8Boxes = _this.add.group();

        _this.limit1 = 0;
        _this.limit2 = 0;

        _this.Yincrease = 200;
        _this.Xincrease = 267;

        _this.Yincrease2 = 170;
        _this.Xincrease2 = 300;

        // _this.verticalX = 267;
        // _this.verticalY = 200;

        // _this.horizontalX = 300;
        // _this.horizontalY = 170;

        // part B Drag
        _this.squareX = 300;
        _this.squareY = 200;

        _this.linearX = 300; // X object
        _this.linearY = 200;

        _this.linearX2 = 300; // Y object
        _this.linearY2 = 200;

        _this.squareX2 = 300;
        _this.squareY2 = 200;

        _this.ConstX = 300;
        _this.ConstY = 200;

        _this.greenXSq_Dup2 = _this.add.image(42, 140, 'greenS1');
        _this.letter1.bringToTop();

        _this.pinkYSq_Dup2 = _this.add.image(155, 140, 'pinkS1');
        _this.letter2.bringToTop();

        _this.greenXY_Dup = _this.add.image(42, 265, 'greenXY');
        _this.letter5.bringToTop();

        _this.pinkXY_Dup = _this.add.image(155, 265, 'pinkXY');
        _this.letter6.bringToTop();
    },



    //Tick button in the question screen and the evaluation of the top box or workspace.
    tickEvaluation: function (target) {
        console.log("tick first evaluation");
        _this.clickSound.play();

        var coefficientMatch = _this.equation.match(/^-?\d+/);
        var variableMatch = _this.equation.match(/[a-z]/i);

        // Extract the coefficient and variable
        _this.coefficient = coefficientMatch ? parseInt(coefficientMatch[0]) : 0;
        _this.variable = variableMatch ? variableMatch[0] : "";

        console.log(_this.coefficient)
        console.log(_this.variable)

        if (_this.coefficient && _this.variable) {
            if (_this.coefficient < 0) {
                _this.space1Boxes.forEach(function (obj) {
                    if (obj.name == '21') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            } else {
                _this.space1Boxes.forEach(function (obj) {
                    if (obj.name == '22') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            }
        } else {
            if (_this.coefficient < 0) {
                _this.space1Boxes.forEach(function (obj) {
                    if (obj.name == '31') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            } else {
                _this.space1Boxes.forEach(function (obj) {
                    if (obj.name == '32') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            }
        }
        console.log(_this.DestroyAll.length, '_this.DestroyAll')

        if (_this.DestroyAll.length > 0) {
            _this.wrongans.play();
            _this.space1Boxes.removeAll(true);
            _this.DestroyAll.length = 0;
            _this.CorrectAnsCount.length = 0;
            _this.verticalY = 200;
        } else if (_this.CorrectAnsCount.length === Math.abs(_this.coefficient)) {
            _this.Flag1 = true;
            _this.CorrectAnsCount.length = 0;
        } else {
            _this.Flag1 = false;
        }

        if (_this.Flag1) {
            _this.counterCelebrationSound.play();
            target.events.onInputDown.removeAll();
            _this.eraser.events.onDragStop.removeAll();
            _this.eraser.events.onDragStop.add(_this.eraserDrop2, _this);

            _this.textBox.frame = 1;
            _this.green_1.events.onInputDown.removeAll();
            _this.green_2.events.onInputDown.removeAll();
            _this.green_3.events.onInputDown.removeAll();

            _this.pink_1.events.onInputDown.removeAll();
            _this.pink_2.events.onInputDown.removeAll();
            _this.pink_3.events.onInputDown.removeAll();

            _this.green_1.events.onInputDown.add(_this.m2S3);
            _this.green_2.events.onInputDown.add(_this.mR3);
            _this.green_3.events.onInputDown.add(_this.mS3);

            _this.pink_1.events.onInputDown.add(_this.m2S4);
            _this.pink_2.events.onInputDown.add(_this.mR4);
            _this.pink_3.events.onInputDown.add(_this.mS4);

            target.events.onInputDown.add(_this.tickSecondEvaluation, _this);
            _this.Flag1 = false;
            // _this.framechange.play();

            if (_this.count1 == 0) _this.Ask_Question5.play();
            _this.Question_flag = 5;

        }
        else {
            _this.wrongans.play();
            _this.space1Boxes.removeAll(true);
            _this.DestroyAll.length = 0;
            _this.CorrectAnsCount.length = 0;
            _this.verticalY = 200;
        }

    },
    //Evaluation of the bottom box or the workspace.
    tickSecondEvaluation: function (target) {
        console.log("tick second evaluation");
        _this.clickSound.play();

        var coefficientMatch2 = _this.equation2.match(/^-?\d+/);
        var variableMatch2 = _this.equation2.match(/[a-z]/i);

        // Extract the coefficient and variable
        _this.coefficient_2 = coefficientMatch2 ? parseInt(coefficientMatch2[0]) : 0;
        _this.variable_2 = variableMatch2 ? variableMatch2[0] : "";

        console.log(_this.coefficient_2)
        console.log(_this.variable_2)

        if (_this.coefficient_2 && _this.variable_2) {
            if (_this.coefficient_2 < 0) {
                _this.space2Boxes.forEach(function (obj) {
                    if (obj.name == '21') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            } else {
                _this.space2Boxes.forEach(function (obj) {
                    if (obj.name == '22') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            }
        } else {
            if (_this.coefficient_2 < 0) {
                _this.space2Boxes.forEach(function (obj) {
                    if (obj.name == '31') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            } else {
                _this.space2Boxes.forEach(function (obj) {
                    if (obj.name == '32') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            }
        }
        console.log(_this.DestroyAll.length, '_this.DestroyAll')

        if (_this.DestroyAll.length > 0) {
            _this.wrongans.play();
            _this.space2Boxes.removeAll(true);
            _this.DestroyAll.length = 0;
            _this.CorrectAnsCount.length = 0;
            _this.horizontalX = 300;
        } else if (_this.CorrectAnsCount.length === Math.abs(_this.coefficient_2)) {
            _this.Flag2 = true;
            _this.CorrectAnsCount.length = 0;
        } else {
            _this.Flag2 = false;
        }

        if (_this.Flag2) {
            _this.counterCelebrationSound.currentTime = 0;
            target.events.onInputDown.removeAll();
            console.log('second validation pass')
            _this.counterCelebrationSound.play();
            _this.eraser.events.onDragStop.removeAll();
            _this.eraser.inputEnabled = true;
            _this.eraser.events.onDragStop.add(_this.eraserDrop3, _this);

            for (let i = 0; i < _this.space1Boxes.length; i++) {
                console.log('inside change frame....')
                _this.space1Boxes.getChildAt(i).frame = 1;
            }

            for (let j = 0; j < _this.space2Boxes.length; j++) {
                console.log('inside change frame....')
                _this.space2Boxes.getChildAt(j).frame = 1;
            }

            _this.green_1.events.onInputDown.removeAll();
            _this.green_2.events.onInputDown.removeAll();
            _this.green_3.events.onInputDown.removeAll();

            _this.pink_1.events.onInputDown.removeAll();
            _this.pink_2.events.onInputDown.removeAll();
            _this.pink_3.events.onInputDown.removeAll();


            _this.green_1.inputEnabled = true;
            _this.green_1.input.enableDrag();
            _this.green_1.input.useHandCursor = true;
            _this.green_1.events.onDragStop.add(_this.greenXSqDrag, _this);

            _this.pink_1.inputEnabled = true;
            _this.pink_1.input.enableDrag();
            _this.pink_1.input.useHandCursor = true;
            _this.pink_1.events.onDragStop.add(_this.pinkXSqDrag, _this);

            _this.green_2Dup = _this.add.image(35, 360, 'greenSmall2');
            _this.green_2Dup.scale.setTo(1.2, 2.5);

            _this.green_2Dup.inputEnabled = true;
            _this.green_2Dup.input.enableDrag();
            _this.green_2Dup.input.useHandCursor = true;
            _this.green_2Dup.events.onDragUpdate.add(_this.greenXDragDupUpdate, _this);
            _this.green_2Dup.events.onDragStop.add(_this.greenXDragVertical, _this);
            _this.green_2Dup.alpha = 0;

            _this.green_2.inputEnabled = true;
            _this.green_2.input.enableDrag();
            _this.green_2.input.useHandCursor = true;
            _this.green_2.events.onDragStop.add(_this.greenXDragVertical, _this);

            _this.pink_2Dup = _this.add.image(150, 360, 'pinkSmall2');
            _this.pink_2Dup.scale.setTo(1.2, 2.5);

            _this.pink_2Dup.inputEnabled = true;
            _this.pink_2Dup.input.enableDrag();
            _this.pink_2Dup.input.useHandCursor = true;
            _this.pink_2Dup.events.onDragUpdate.add(_this.pinkXDragDupUpdate, _this);
            _this.pink_2Dup.events.onDragStop.add(_this.pinkXDragVertical, _this);
            _this.pink_2Dup.alpha = 0;

            _this.pink_2.inputEnabled = true;
            _this.pink_2.input.enableDrag();
            _this.pink_2.input.useHandCursor = true;
            _this.pink_2.events.onDragStop.add(_this.pinkXDragVertical, _this);

            _this.green_3Dup = _this.add.image(35, 412, 'greenSmall3');
            _this.green_3Dup.scale.setTo(4.5, 3.5);

            _this.green_3Dup.inputEnabled = true;
            _this.green_3Dup.input.enableDrag();
            _this.green_3Dup.input.useHandCursor = true;
            _this.green_3Dup.events.onDragUpdate.add(_this.greenConstDupUpdate, _this);
            _this.green_3Dup.events.onDragStop.add(_this.greenConstDrag, _this);
            _this.green_3Dup.alpha = 0;

            _this.green_3.inputEnabled = true;
            _this.green_3.input.enableDrag();
            _this.green_3.input.useHandCursor = true;
            _this.green_3.events.onDragStop.add(_this.greenConstDrag, _this);


            _this.pink_3Dup = _this.add.image(150, 413, 'pinkSmall3');
            _this.pink_3Dup.scale.setTo(4.5, 3.5);

            _this.pink_3Dup.inputEnabled = true;
            _this.pink_3Dup.input.enableDrag();
            _this.pink_3Dup.input.useHandCursor = true;
            _this.pink_3Dup.events.onDragUpdate.add(_this.pinkConstDupUpdate, _this);
            _this.pink_3Dup.events.onDragStop.add(_this.pinkConstDrag, _this);
            _this.pink_3Dup.alpha = 0;


            _this.pink_3.inputEnabled = true;
            _this.pink_3.input.enableDrag();
            _this.pink_3.input.useHandCursor = true;
            _this.pink_3.events.onDragStop.add(_this.pinkConstDrag, _this);

            if (_this.count1 == 0) _this.Ask_Question2.play();


            _this.Question_flag = 2;
            _this.Flag2 = false;

            target.events.onInputDown.add(_this.tickThirdEvaluation, _this);

        }
        else {
            _this.space2Boxes.removeAll(true);
            _this.wrongans.play();
            _this.horizontalX = 300;
            _this.DestroyAll.length = 0;
            _this.CorrectAnsCount.length = 0;
        }

    },

    MultiplyOperation: function () {
        _this.monomial1 = _this.Finalequation;
        _this.monomial2 = _this.Finalequation2;

        if (_this.decideMonoEq == 1 && _this.decideMonoEq2 == 1) {
            _this.result = _this.monomial1 * _this.monomial2;
            console.log(_this.result, 'constant  result')
        } else if (_this.decideMonoEq == 0 && _this.decideMonoEq2 == 1) {

            _this.monomial3 = _this.equationSign1 + _this.actualMonoValue + _this.monoVariable[0];

            const [coeff1, variable1] = _this.monomial3.split('x').map(Number);

            console.log(coeff1, 'coeff1')
            console.log(_this.monoVariable[0], '_this.monoVariable[0]')

            _this.result = coeff1 * _this.monomial2 + _this.monoVariable[0];
            console.log(_this.result, 'result')

        } else if (_this.decideMonoEq == 1 && _this.decideMonoEq2 == 0) {
            _this.monomial3 = _this.equationSign2 + _this.actualMonoValue2 + _this.monoVariable2[0];

            const [coeff1, variable1] = _this.monomial3.split('x').map(Number);

            console.log(coeff1, 'coeff1')
            console.log(_this.monoVariable2[0], '_this.monoVariable[0]')

            _this.result = _this.monomial1 * coeff1 + _this.monoVariable2[0];
            console.log(_this.result, 'result')

        } else if (_this.decideMonoEq == 0 && _this.decideMonoEq2 == 0) {
            _this.monomial3 = _this.equationSign1 + _this.actualMonoValue + _this.monoVariable[0];
            _this.monomial4 = _this.equationSign2 + _this.actualMonoValue2 + _this.monoVariable2[0];

            const [coeff1, variable1] = _this.monomial3.split('x').map(Number);
            const [coeff2, variable2] = _this.monomial4.split('x').map(Number);

            _this.result = (coeff1 * coeff2) + _this.monoVariable[0] + _this.power;
            console.log(_this.result, 'result')
        }


    },

    fillEmptySpaces: function () {
        _this.matches = _this.equation.match(/^(-?\d*)([a-zA-Z]*)\^?(\d*)$/);

        _this.matches2 = _this.equation2.match(/^(-?\d*)([a-zA-Z]*)\^?(\d*)$/);

        // Extract the coefficient and variable parts
        _this.coefficientAns = _this.matches[1];
        _this.coefficientAns2 = _this.matches2[1];

        console.log(_this.matches[0], '_this.matches[0]')
        console.log(_this.matches2[0], '_this.matches2[0]')

        console.log(_this.matches[1], '_this.matches[1]')
        console.log(_this.matches2[1], '_this.matches2[1]')

        console.log(_this.matches[2], '_this.matches[2]')
        console.log(_this.matches2[2], '_this.matches2[2]')
    },

    greenXSqDrag: function () {
        if ((_this.space1Boxes.getChildAt(0).name == '21' || _this.space1Boxes.getChildAt(0).name == '22') && (_this.space2Boxes.getChildAt(0).name == '21' || _this.space2Boxes.getChildAt(0).name == '22')) {
            console.log(_this.destroyFlag, '_this.destroyFlag')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_1.position.x = pos.x;
                _this.green_1.position.y = pos.y;

                _this.green_1.destroy();
                _this.green_1 = _this.add.sprite(pos.x, pos.y, 'all_2');
                _this.green_1.frame = 2;
                _this.green_1.name = 'G1';

                _this.space3Boxes.addChild(_this.green_1);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt')
                var post = _this.erasedObjectInitialPosition[0];

                _this.green_1.position.x = post.x;
                _this.green_1.position.y = post.y;

                _this.green_1.destroy();
                _this.green_1 = _this.add.sprite(post.x, post.y, 'all_2');
                _this.green_1.frame = 2;
                _this.green_1.name = 'G1';

                _this.space3Boxes.addChild(_this.green_1);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                // _this.green_1.destroy();
                // _this.wrongSound.play();
                if (_this.space3Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }

                if (_this.DragOrNotFlag) {
                    _this.result = _this.actualMonoValue * _this.actualMonoValue2;
                    if (_this.checkOverlap(_this.space1, _this.green_1)) {
                        _this.green_1.x = _this.greenXSqX;
                        _this.green_1.y = _this.greenXSqY;

                    }

                    if (_this.space3Boxes.length >= _this.result) {
                        _this.green_1.destroy();
                        // _this.green_1 = _this.add.image(45, 280, 'greenSmall1');
                        _this.wrongSound.play();
                    }

                    _this.green_1.destroy();
                    _this.green_1 = _this.add.sprite(_this.greenXSqX, _this.greenXSqY, 'all_2');
                    _this.green_1.frame = 2;
                    _this.green_1.name = 'G1';
                    _this.space3Boxes.addChild(_this.green_1);

                    if (_this.actualMonoValue > _this.actualMonoValue2) {
                        _this.greenXSqY += 125;

                    } else if (_this.actualMonoValue < _this.actualMonoValue2) {
                        _this.greenXSqX += 125;
                        _this.space3Boxes.addChild(_this.green_1);

                        if (_this.space3Boxes.length == _this.actualMonoValue2) {
                            console.log('space box length')
                            for (let i = 0; i < _this.space3Boxes.length; i++) {
                                _this.greenXSqX -= 125;
                            }
                            _this.greenXSqY += 125;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                    else {
                        _this.green_1.destroy();
                        _this.green_1 = _this.add.sprite(_this.greenXSqX, _this.greenXSqY, 'all_2');
                        _this.green_1.frame = 2;
                        _this.green_1.name = 'G1';
                        _this.greenXSqX += 125;

                        _this.space3Boxes.addChild(_this.green_1);

                        if (_this.space3Boxes.length == _this.actualMonoValue2) {
                            for (let i = 0; i < _this.space3Boxes.length; i++) {
                                _this.greenXSqX -= 125;
                            }
                            _this.greenXSqY += 125;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                } else {
                    _this.green_1.destroy();
                    _this.wrongSound.play();
                }
            }
        } else {
            console.log('No Drag................')
            _this.green_1.destroy();
            _this.wrongSound.play();
        }

        _this.green_1 = _this.add.image(45, 280, 'greenSmall1');
        _this.letterA.bringToTop();

        _this.green_1.inputEnabled = true;
        _this.green_1.input.enableDrag();
        _this.green_1.input.useHandCursor = true;
        _this.green_1.events.onDragStop.add(_this.greenXSqDrag, _this);

    },
    pinkXSqDrag: function () {
        if ((_this.space1Boxes.getChildAt(0).name == '21' || _this.space1Boxes.getChildAt(0).name == '22') && (_this.space2Boxes.getChildAt(0).name == '21' || _this.space2Boxes.getChildAt(0).name == '22')) {
            console.log('Drag................')
            console.log(_this.destroyFlag, '_this.destroyFlag')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_1.position.x = pos.x;
                _this.pink_1.position.y = pos.y;

                _this.pink_1.destroy();
                _this.pink_1 = _this.add.sprite(pos.x, pos.y, 'all_2');
                _this.pink_1.frame = 0;
                _this.pink_1.name = 'P1';

                _this.space3Boxes.addChild(_this.pink_1);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pink_1.position.x = post.x;
                _this.pink_1.position.y = post.y;

                _this.pink_1.destroy();
                _this.pink_1 = _this.add.sprite(post.x, post.y, 'all_2');
                _this.pink_1.frame = 0;
                _this.pink_1.name = 'P1';

                _this.space3Boxes.addChild(_this.pink_1);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                if (_this.space3Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }
                // _this.pink_1.destroy();
                // _this.wrongSound.play();
                _this.result = _this.actualMonoValue * _this.actualMonoValue2;
                if (_this.DragOrNotFlag) {
                    if (_this.space3Boxes.length == _this.result) {
                        _this.pink_1.destroy();
                        _this.wrongSound.play();

                    }

                    if (_this.checkOverlap(_this.space1, _this.pink_1)) {
                        _this.pink_1.x = _this.greenXSqX;
                        _this.pink_1.y = _this.greenXSqY;

                    }

                    if (_this.actualMonoValue > _this.actualMonoValue2) {
                        _this.pink_1.destroy();
                        _this.pink_1 = _this.add.sprite(_this.greenXSqX, _this.greenXSqY, 'all_2');
                        _this.pink_1.frame = 0;
                        _this.pink_1.name = 'P1';
                        _this.greenXSqY += 125;

                        _this.space3Boxes.addChild(_this.pink_1);

                    } else if (_this.actualMonoValue < _this.actualMonoValue2) {
                        _this.pink_1.destroy();
                        _this.pink_1 = _this.add.sprite(_this.greenXSqX, _this.greenXSqY, 'all_2');
                        _this.pink_1.frame = 0;
                        _this.pink_1.name = 'P1';
                        _this.greenXSqX += 125;
                        if (_this.space3Boxes.length < _this.actualMonoValue2) {
                            _this.space3Boxes.add(_this.pink_1);
                        }
                        _this.space3Boxes.addChild(_this.pink_1);

                        if (_this.space3Boxes.length == _this.actualMonoValue2) {
                            console.log('space box length')
                            for (let i = 0; i < _this.space3Boxes.length; i++) {
                                _this.greenXSqX -= 125;
                            }
                            _this.greenXSqY += 125;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;


                        }
                    } else {
                        _this.pink_1.destroy();
                        _this.pink_1 = _this.add.sprite(_this.greenXSqX, _this.greenXSqY, 'all_2');
                        _this.pink_1.frame = 0;
                        _this.pink_1.name = 'P1';
                        _this.greenXSqX += 125;

                        _this.space3Boxes.addChild(_this.pink_1);

                        if (_this.space3Boxes.length == _this.actualMonoValue2) {
                            for (let i = 0; i < _this.space3Boxes.length; i++) {
                                _this.greenXSqX -= 125;
                            }
                            _this.greenXSqY += 125;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }

                }
                else {
                    _this.pink_1.destroy();
                    _this.wrongSound.play();
                }

            }

        } else {
            console.log('No Drag................')
            _this.pink_1.destroy();
            _this.wrongSound.play();
        }

        _this.pink_1 = _this.add.image(155, 280, 'pinkSmall1');
        _this.letterB.bringToTop();

        _this.pink_1.inputEnabled = true;
        _this.pink_1.input.enableDrag();
        _this.pink_1.input.useHandCursor = true;
        _this.pink_1.events.onDragStop.add(_this.pinkXSqDrag, _this);

    },

    greenXDragVertical: function () {

        if ((_this.space1Boxes.getChildAt(0).name == '21' || _this.space1Boxes.getChildAt(0).name == '22') && (_this.space2Boxes.getChildAt(0).name == '31' || _this.space2Boxes.getChildAt(0).name == '32')) {

            console.log(_this.destroyFlagV, '_this.destroyFlagV')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_2.position.x = pos.x;
                _this.green_2.position.y = pos.y;

                _this.green_2Dup.destroy();
                _this.green_2.destroy();
                _this.green_2 = _this.add.image(pos.x, pos.y, 'green1');
                _this.green_2.name = 'G2';

                _this.space3Boxes.addChild(_this.green_2);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt')
                var post = _this.erasedObjectInitialPosition[0];

                _this.green_2.position.x = post.x;
                _this.green_2.position.y = post.y;

                _this.green_2Dup.destroy();
                _this.green_2.destroy();
                _this.green_2 = _this.add.image(post.x, post.y, 'green1');
                _this.green_2.name = 'G2';

                _this.space3Boxes.addChild(_this.green_2);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {

                _this.result = (_this.actualMonoValue * _this.monoConstant2);
                if (_this.space3Boxes.length == _this.result) {
                    _this.green_2Dup.destroy();
                    _this.green_2.destroy();
                    _this.wrongSound.play();
                    // _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
                } else {
                    if (_this.checkOverlap(_this.space1, _this.green_2)) {
                        _this.green_2.x = _this.greenX;
                        _this.green_2.y = _this.greenY;
                    }

                    _this.green_2Dup.destroy();
                    _this.green_2.destroy();
                    _this.green_2 = _this.add.image(_this.greenX, _this.greenY, 'green1');
                    _this.green_2.name = 'G2';
                    _this.greenX += 35;

                    _this.space3Boxes.addChild(_this.green_2);

                    if (_this.space3Boxes.length == _this.monoConstant2) {
                        for (let i = 0; i < _this.space3Boxes.length; i++) {
                            _this.greenX -= 35;
                        }
                        _this.greenY += 125;
                        _this.space3Boxes.addChild(_this.green_2);
                    }

                    if (_this.space3Boxes.length == _this.monoConstant2 * 2) {
                        _this.greenY -= 125;
                    }
                }
            }
        }


        else if ((_this.space1Boxes.getChildAt(0).name == '31' || _this.space1Boxes.getChildAt(0).name == '32') && (_this.space2Boxes.getChildAt(0).name == '21' || _this.space2Boxes.getChildAt(0).name == '22')) {

            console.log(_this.destroyFlagH, '_this.destroyFlagH')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_2.position.x = pos.x;
                _this.green_2.position.y = pos.y;

                _this.green_2Dup.destroy();
                _this.green_2.destroy();
                _this.green_2 = _this.add.image(pos.x, pos.y, 'green2');
                _this.green_2.name = 'G2_1';

                _this.space3Boxes.addChild(_this.green_2);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt')
                var post = _this.erasedObjectInitialPosition[0];

                _this.green_2.position.x = post.x;
                _this.green_2.position.y = post.y;

                _this.green_2Dup.destroy();
                _this.green_2.destroy();
                _this.green_2 = _this.add.image(post.x, post.y, 'green2');
                _this.green_2.name = 'G2_1';

                _this.space3Boxes.addChild(_this.green_2);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }

            else {
                if (_this.checkOverlap(_this.space1, _this.green_2)) {
                    console.log('Drag Horizontal................')
                    _this.green_2.x = _this.greenX;
                    _this.green_2.y = _this.greenY;

                }
                _this.result = (_this.monoConstant * _this.actualMonoValue2);

                _this.green_2Dup.destroy();
                _this.green_2.destroy();
                _this.green_2 = _this.add.image(_this.greenX, _this.greenY, 'green2');
                _this.green_2.name = 'G2_1';
                _this.greenX += 125;

                _this.space3Boxes.addChild(_this.green_2);


                if (_this.space3Boxes.length <= _this.result) {
                    if (_this.space3Boxes.length == _this.actualMonoValue2 || _this.space3Boxes.length == _this.actualMonoValue2 * 2 || _this.space3Boxes.length == _this.actualMonoValue2 * 3 || _this.space3Boxes.length == _this.actualMonoValue2 * 4 || _this.space3Boxes.length == _this.actualMonoValue2 * 5 || _this.space3Boxes.length == _this.actualMonoValue2 * 6 || _this.space3Boxes.length == _this.actualMonoValue2 * 7) {
                        for (let i = 0; i < _this.space3Boxes.length; i++) {
                            _this.greenX -= 125;
                        }
                        _this.greenY += 35;
                        _this.space3Boxes.addChild(_this.green_2);
                        _this.greenX = 301;
                    }
                } else {
                    _this.green_2Dup.destroy();
                    _this.green_2.destroy();
                    _this.wrongSound.play();
                }
            }

        }

        else {
            console.log('No Drag................')
            _this.green_2Dup.destroy();
            _this.green_2.destroy();
            _this.wrongSound.play();
        }

        _this.green_2Dup = _this.add.image(35, 360, 'greenSmall2');
        _this.green_2Dup.scale.setTo(1, 1);

        _this.green_2Dup.inputEnabled = true;
        _this.green_2Dup.input.enableDrag();
        _this.green_2Dup.input.useHandCursor = true;
        _this.green_2Dup.events.onDragUpdate.add(_this.greenXDragDupUpdate, _this);
        _this.green_2Dup.events.onDragStop.add(_this.greenXDragVertical, _this);
        _this.green_2Dup.alpha = 0;

        _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
        _this.green_2.inputEnabled = true;
        _this.green_2.input.enableDrag();
        _this.green_2.input.useHandCursor = true;
        _this.green_2.events.onDragStop.add(_this.greenXDragVertical, _this);
    },

    greenXDragDupUpdate: function () {
        _this.world.bringToTop(_this.green_2Dup);
        _this.green_2Dup.scale.setTo(1, 1);
        _this.green_2Dup.alpha = 1;
    },

    pinkXDragVertical: function () {
        if ((_this.space1Boxes.getChildAt(0).name == '21' || _this.space1Boxes.getChildAt(0).name == '22') && (_this.space2Boxes.getChildAt(0).name == '31' || _this.space2Boxes.getChildAt(0).name == '32')) {
            console.log(_this.destroyFlagV, '_this.destroyFlagV')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_2.position.x = pos.x;
                _this.pink_2.position.y = pos.y;

                _this.pink_2Dup.destroy();
                _this.pink_2.destroy();
                _this.pink_2 = _this.add.image(pos.x, pos.y, 'pink1');
                _this.pink_2.name = 'P2';

                _this.space3Boxes.addChild(_this.pink_2);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pink_2.position.x = post.x;
                _this.pink_2.position.y = post.y;

                _this.pink_2Dup.destroy();
                _this.pink_2.destroy();
                _this.pink_2 = _this.add.image(post.x, post.y, 'pink1');
                _this.pink_2.name = 'P2';

                _this.space3Boxes.addChild(_this.pink_2);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                _this.result = (_this.actualMonoValue * _this.monoConstant2);
                if (_this.space3Boxes.length == _this.result) {
                    _this.pink_2Dup.destroy();
                    _this.pink_2.destroy();
                    _this.wrongSound.play();

                } else {
                    if (_this.space3Boxes.length == _this.result) {
                        _this.greenX = _this.StartPinkX;
                        _this.greenY = _this.StartPinkY;
                        return;
                    }

                    if (_this.checkOverlap(_this.space1, _this.pink_2)) {
                        _this.pink_2.x = _this.greenX;
                        _this.pink_2.y = _this.greenY;
                    }

                    _this.pink_2Dup.destroy();
                    _this.pink_2.destroy();
                    _this.pink_2 = _this.add.image(_this.greenX, _this.greenY, 'pink1');
                    _this.pink_2.name = 'P2';
                    _this.greenX += 35;

                    _this.space3Boxes.addChild(_this.pink_2);


                    if (_this.space3Boxes.length == _this.monoConstant2) {
                        for (let i = 0; i < _this.space3Boxes.length; i++) {
                            _this.greenX -= 35;
                        }
                        _this.greenY += 123;
                        _this.space3Boxes.addChild(_this.pink_2);
                    }
                    if (_this.space3Boxes.length == _this.monoConstant2 * 2) {
                        _this.greenY -= 123;
                    }
                }


            }

        } else if ((_this.space1Boxes.getChildAt(0).name == '31' || _this.space1Boxes.getChildAt(0).name == '32') && (_this.space2Boxes.getChildAt(0).name == '21' || _this.space2Boxes.getChildAt(0).name == '22')) {
            console.log('Drag Horizontal................')
            console.log(_this.destroyFlagH, '_this.destroyFlagH')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_2.position.x = pos.x;
                _this.pink_2.position.y = pos.y;

                _this.pink_2Dup.destroy();
                _this.pink_2.destroy();
                _this.pink_2 = _this.add.image(pos.x, pos.y, 'pink2');
                _this.pink_2.name = 'P2_1';

                _this.space3Boxes.addChild(_this.pink_2);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pink_2.position.x = post.x;
                _this.pink_2.position.y = post.y;

                _this.pink_2Dup.destroy();
                _this.pink_2.destroy();
                _this.pink_2 = _this.add.image(post.x, post.y, 'pink2');
                _this.pink_2.name = 'P2_1';

                _this.space3Boxes.addChild(_this.pink_2);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                // _this.pink_2.destroy();
                // _this.wrongSound.play();
                if (_this.checkOverlap(_this.space1, _this.pink_2)) {
                    _this.pink_2.x = _this.greenX;
                    _this.pink_2.y = _this.greenY;
                }
                _this.result = (_this.monoConstant * _this.actualMonoValue2);

                _this.pink_2Dup.destroy();
                _this.pink_2.destroy();
                _this.pink_2 = _this.add.image(_this.greenX, _this.greenY, 'pink2');
                _this.pink_2.name = 'P2_1';
                _this.greenX += 125;

                _this.space3Boxes.addChild(_this.pink_2);

                if (_this.space3Boxes.length <= _this.result) {
                    if (_this.space3Boxes.length == _this.actualMonoValue2 || _this.space3Boxes.length == _this.actualMonoValue2 * 2 || _this.space3Boxes.length == _this.actualMonoValue2 * 3 || _this.space3Boxes.length == _this.actualMonoValue2 * 4 || _this.space3Boxes.length == _this.actualMonoValue2 * 5 || _this.space3Boxes.length == _this.actualMonoValue2 * 6 || _this.space3Boxes.length == _this.actualMonoValue2 * 7) {
                        for (let i = 0; i < _this.space3Boxes.length; i++) {
                            _this.greenX -= 125;
                        }
                        _this.greenY += 35;
                        _this.space3Boxes.addChild(_this.pink_2);
                        _this.greenX = 301;
                    }
                } else {
                    _this.pink_2Dup.destroy();
                    _this.pink_2.destroy();
                    // _this.pink_2 = _this.add.image(155, 385, 'pinkSmall2');
                    _this.wrongSound.play();
                }
            }

        } else {
            console.log('No Drag................')
            _this.pink_2Dup.destroy();
            _this.pink_2.destroy();
            // _this.pink_2 = _this.add.image(155, 385, 'pinkSmall2');
            _this.wrongSound.play();
        }

        _this.pink_2Dup = _this.add.image(150, 360, 'pinkSmall2');
        _this.pink_2Dup.scale.setTo(1.2, 2.5);

        _this.pink_2Dup.inputEnabled = true;
        _this.pink_2Dup.input.enableDrag();
        _this.pink_2Dup.input.useHandCursor = true;
        _this.pink_2Dup.events.onDragUpdate.add(_this.pinkXDragDupUpdate, _this);
        _this.pink_2Dup.events.onDragStop.add(_this.pinkXDragVertical, _this);
        _this.pink_2Dup.alpha = 0;


        _this.pink_2 = _this.add.image(155, 385, 'pinkSmall2');

        _this.StartPinkX = _this.pink_2.x;
        _this.StartPinkY = _this.pink_2.y;

        _this.pink_2.inputEnabled = true;
        _this.pink_2.input.enableDrag();
        _this.pink_2.input.useHandCursor = true;
        _this.pink_2.events.onDragStop.add(_this.pinkXDragVertical, _this);

    },

    pinkXDragDupUpdate: function () {
        _this.world.bringToTop(_this.pink_2Dup);
        _this.pink_2Dup.scale.setTo(1, 1);
        _this.pink_2Dup.alpha = 1;
    },

    greenConstDrag: function () {
        if ((_this.space1Boxes.getChildAt(0).name == '31' || _this.space1Boxes.getChildAt(0).name == '32') && (_this.space2Boxes.getChildAt(0).name == '31' || _this.space2Boxes.getChildAt(0).name == '32')) {

            console.log(_this.destroyFlagC, '_this.destroyFlagC')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_3.position.x = pos.x;
                _this.green_3.position.y = pos.y;

                _this.green_3Dup.destroy();
                _this.green_3.destroy();
                _this.green_3 = _this.add.sprite(pos.x, pos.y, 'greenBig3');
                _this.green_3.name = 'G3';

                _this.space3Boxes.addChild(_this.green_3);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt')
                var post = _this.erasedObjectInitialPosition[0];

                _this.green_3.position.x = post.x;
                _this.green_3.position.y = post.y;

                _this.green_3Dup.destroy();
                _this.green_3.destroy();
                _this.green_3 = _this.add.sprite(post.x, post.y, 'greenBig3');
                _this.green_3.name = 'G3';

                _this.space3Boxes.addChild(_this.green_3);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                // _this.green_3.destroy();
                // _this.wrongSound.play();
                _this.result = _this.monoConstant * _this.monoConstant2;
                if (_this.checkOverlap(_this.space1, _this.green_3)) {
                    _this.green_3.x = _this.greenConstX;
                    _this.green_3.y = _this.greenConstY;
                }

                _this.green_3Dup.destroy();
                _this.green_3.destroy();
                _this.green_3 = _this.add.image(_this.greenConstX, _this.greenConstY, 'greenBig3');
                _this.greenConstX += 35;
                _this.green_3.name = 'G3';

                _this.space3Boxes.addChild(_this.green_3);

                if (_this.space3Boxes.length <= _this.result) {
                    if (_this.space3Boxes.length == _this.monoConstant2 || _this.space3Boxes.length == _this.monoConstant2 * 2 || _this.space3Boxes.length == _this.monoConstant2 * 3 || _this.space3Boxes.length == _this.monoConstant2 * 4 || _this.space3Boxes.length == _this.monoConstant2 * 5 || _this.space3Boxes.length == _this.monoConstant2 * 6 || _this.space3Boxes.length == _this.monoConstant2 * 7) {
                        for (let i = 0; i < _this.space3Boxes.length; i++) {
                            _this.greenConstX -= 35;
                        }
                        _this.greenConstY += 35;
                        _this.space3Boxes.addChild(_this.green_3);
                        _this.greenConstX = 301;
                    }
                } else {
                    _this.green_3.destroy();
                    _this.green_3Dup.destroy();
                    // _this.green_3 = _this.add.image(65, 450, 'greenSmall3');
                    _this.wrongSound.play();
                }
            }

        } else {
            console.log('No Drag................')
            _this.green_3.destroy();
            _this.green_3Dup.destroy();
            // _this.green_3 = _this.add.image(65, 450, 'greenSmall3');
            _this.wrongSound.play();
        }

        _this.green_3Dup = _this.add.image(35, 412, 'greenSmall3');
        _this.green_3Dup.scale.setTo(4.5, 3.5);

        _this.green_3Dup.inputEnabled = true;
        _this.green_3Dup.input.enableDrag();
        _this.green_3Dup.input.useHandCursor = true;
        _this.green_3Dup.events.onDragUpdate.add(_this.greenConstDupUpdate, _this);
        _this.green_3Dup.events.onDragStop.add(_this.greenConstDrag, _this);
        _this.green_3Dup.alpha = 0;


        _this.green_3 = _this.add.image(65, 450, 'greenSmall3');

        _this.green_3.inputEnabled = true;
        _this.green_3.input.enableDrag();
        _this.green_3.input.useHandCursor = true;
        _this.green_3.events.onDragStop.add(_this.greenConstDrag, _this);
    },

    greenConstDupUpdate: function () {
        _this.world.bringToTop(_this.green_3Dup);
        _this.green_3Dup.scale.setTo(1, 1);
        _this.green_3Dup.alpha = 1;
    },

    pinkConstDrag: function () {
        if ((_this.space1Boxes.getChildAt(0).name == '31' || _this.space1Boxes.getChildAt(0).name == '32') && (_this.space2Boxes.getChildAt(0).name == '31' || _this.space2Boxes.getChildAt(0).name == '32')) {

            console.log(_this.destroyFlagC, '_this.destroyFlagC')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_3.position.x = pos.x;
                _this.pink_3.position.y = pos.y;

                _this.pink_3Dup.destroy();
                _this.pink_3.destroy();
                _this.pink_3 = _this.add.image(pos.x, pos.y, 'pinkBig3');
                _this.pink_3.name = 'P3';

                _this.space3Boxes.addChild(_this.pink_3);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();
                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pink_3.position.x = post.x;
                _this.pink_3.position.y = post.y;

                _this.pink_3Dup.destroy();
                _this.pink_3.destroy();
                _this.pink_3 = _this.add.image(post.x, post.y, 'pinkBig3');
                _this.pink_3.name = 'P3';

                _this.space3Boxes.addChild(_this.pink_3);
                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();
                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }

            else {
                // _this.pink_3.destroy();
                // _this.wrongSound.play();
                _this.result = _this.monoConstant * _this.monoConstant2;

                if (_this.checkOverlap(_this.space1, _this.pink_3)) {
                    _this.pink_3.x = _this.greenConstX;
                    _this.pink_3.y = _this.greenConstY;
                }

                _this.pink_3Dup.destroy();
                _this.pink_3.destroy();
                _this.pink_3 = _this.add.image(_this.greenConstX, _this.greenConstY, 'pinkBig3');
                _this.greenConstX += 35;
                _this.pink_3.name = 'P3';

                _this.space3Boxes.addChild(_this.pink_3);

                if (_this.space3Boxes.length <= _this.result) {
                    if (_this.space3Boxes.length == _this.monoConstant2 || _this.space3Boxes.length == _this.monoConstant2 * 2 || _this.space3Boxes.length == _this.monoConstant2 * 3 || _this.space3Boxes.length == _this.monoConstant2 * 4 || _this.space3Boxes.length == _this.monoConstant2 * 5 || _this.space3Boxes.length == _this.monoConstant2 * 6 || _this.space3Boxes.length == _this.monoConstant2 * 7) {
                        for (let i = 0; i < _this.space3Boxes.length; i++) {
                            _this.greenConstX -= 35;
                        }
                        _this.greenConstY += 35;
                        _this.space3Boxes.addChild(_this.pink_3);
                        _this.greenConstX = 301;
                    }
                } else {
                    _this.pink_3.destroy();
                    _this.pink_3Dup.destroy();
                    // _this.pink_3 = _this.add.image(175, 450, 'pinkSmall3');
                    _this.wrongSound.play();
                }
            }
        }
        else {
            console.log('No Drag................')
            _this.pink_3.destroy();
            _this.pink_3Dup.destroy();
            // _this.pink_3 = _this.add.image(175, 450, 'pinkSmall3');
            _this.wrongSound.play();
        }

        _this.pink_3Dup = _this.add.image(150, 413, 'pinkSmall3');
        _this.pink_3Dup.scale.setTo(4.5, 3.5);

        _this.pink_3Dup.inputEnabled = true;
        _this.pink_3Dup.input.enableDrag();
        _this.pink_3Dup.input.useHandCursor = true;
        _this.pink_3Dup.events.onDragUpdate.add(_this.pinkConstDupUpdate, _this);
        _this.pink_3Dup.events.onDragStop.add(_this.pinkConstDrag, _this);
        _this.pink_3Dup.alpha = 0;

        _this.pink_3 = _this.add.image(175, 450, 'pinkSmall3');

        _this.pink_3.inputEnabled = true;
        _this.pink_3.input.enableDrag();
        _this.pink_3.input.useHandCursor = true;
        _this.pink_3.events.onDragStop.add(_this.pinkConstDrag, _this);
    },

    pinkConstDupUpdate: function () {
        _this.world.bringToTop(_this.pink_3Dup);
        _this.pink_3Dup.scale.setTo(1, 1);
        _this.pink_3Dup.alpha = 1;
    },


    tickThirdEvaluation: function () {
        console.log('third evaluation')
        // X and Y square validation

        if (_this.space1Boxes.getChildAt(0).name == '21' && _this.space2Boxes.getChildAt(0).name == '21') {
            console.log('both negative,  ans +ve')
            console.log(_this.space3Boxes.length, '(_this.space3Boxes.length');
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'G1') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlag = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "P1") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();

            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'G1') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlag = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "P1") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space1Boxes.getChildAt(0).name == '21' && _this.space2Boxes.getChildAt(0).name == '22') {
            console.log('first negative,  ans -ve')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'P1') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlag = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "G1") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'P1') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlag = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "G1") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space1Boxes.getChildAt(0).name == '22' && _this.space2Boxes.getChildAt(0).name == '21') {
            console.log('second negative,  ans -ve')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'P1') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlag = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "G1") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'P1') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlag = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "G1") {
                        // _this.numOfChildren++;
                    }
                });
            }
        }
        else if (_this.space1Boxes.getChildAt(0).name == '22' && _this.space2Boxes.getChildAt(0).name == '22') {
            console.log('both positive,  ans +ve')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'G1') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlag = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "P1") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'G1') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlag = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "P1") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }

        // X and constant validation

        else if (_this.space1Boxes.getChildAt(0).name == '21' && _this.space2Boxes.getChildAt(0).name == '31') {
            console.log('both negative,  ans +ve veritcal align')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'G2') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlagV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "P2") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'G2') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlagV = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "P2") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space1Boxes.getChildAt(0).name == '21' && _this.space2Boxes.getChildAt(0).name == '32') {
            console.log('first -ve second +ve,  ans -ve veritcal align')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'P2') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlagV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "G2") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'P2') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlagV = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "G2") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space1Boxes.getChildAt(0).name == '22' && _this.space2Boxes.getChildAt(0).name == '31') {
            console.log('first +ve second +-ve,  ans -ve veritcal align')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'P2') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlagV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "G2") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'P2') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlagV = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "G2") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space1Boxes.getChildAt(0).name == '22' && _this.space2Boxes.getChildAt(0).name == '32') {
            console.log('both positive,  ans +ve veritcal align')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'G2') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlagV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "P2") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'G2') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlagV = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "P2") {
                        // _this.numOfChildren++;
                    }
                });
            }
        }

        // const and X validation
        else if (_this.space1Boxes.getChildAt(0).name == '31' && _this.space2Boxes.getChildAt(0).name == '21') {
            console.log('both negative,  ans +ve horizontal align')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'G2_1') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlagH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "P2_1") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'G2_1') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlagH = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "P2_1") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space1Boxes.getChildAt(0).name == '31' && _this.space2Boxes.getChildAt(0).name == '22') {
            console.log('first -ve second +ve,  ans -ve horizontal align')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'P2_1') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlagH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "G2_1") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'P2_1') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlagH = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "G2_1") {
                        // _this.numOfChildren++;
                    }
                });
            }


        }
        else if (_this.space1Boxes.getChildAt(0).name == '32' && _this.space2Boxes.getChildAt(0).name == '21') {
            console.log('first +ve second +-ve,  ans -ve horizontal align')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'P2_1') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlagH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "G2_1") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'P2_1') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlagH = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "G2_1") {
                        // _this.numOfChildren++;
                    }
                });
            }


        }
        else if (_this.space1Boxes.getChildAt(0).name == '32' && _this.space2Boxes.getChildAt(0).name == '22') {
            console.log('both positive,  ans +ve horizontal align')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'G2_1') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlagH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "P2_1") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'G2_1') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlagH = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "P2_1") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }

        // both const validation

        else if (_this.space1Boxes.getChildAt(0).name == '31' && _this.space2Boxes.getChildAt(0).name == '31') {
            console.log('both negative,  ans +ve ')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'G3') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlagC = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "P3") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'G3') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlagC = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "P3") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space1Boxes.getChildAt(0).name == '31' && _this.space2Boxes.getChildAt(0).name == '32') {
            console.log('first -ve second +ve,  ')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'P3') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlagC = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "G3") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'P3') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlagC = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "G3") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space1Boxes.getChildAt(0).name == '32' && _this.space2Boxes.getChildAt(0).name == '31') {
            console.log('first +ve second +-ve,  ')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'P3') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlagC = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "G3") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'P3') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlagC = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "G3") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space1Boxes.getChildAt(0).name == '32' && _this.space2Boxes.getChildAt(0).name == '32') {
            console.log('both positive,  ')
            _this.space3Boxes.forEach(function (obj) {
                if (obj.name === 'G3') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyFlagC = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space3Boxes.forEach(function (child) {
                if (child.name === "P3") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.counterCelebrationSound.play();
                _this.ValidationComplete();
            } else {
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space3Boxes.forEach(function (obj) {
                    if (obj.name === 'G3') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyFlagC = 1;
                    obj.destroy();
                });

                _this.space3Boxes.forEach(function (child) {
                    if (child.name === "P3") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }

    },

    ValidationComplete: function () {
        _this.sideGray1.destroy();
        _this.sideGray2.destroy();

        _this.tick.destroy();

        _this.eraser.destroy();
        _this.green_1.destroy();
        _this.green_2.destroy();
        _this.green_3.destroy();

        _this.pink_1.destroy();
        _this.pink_2.destroy();
        _this.pink_3.destroy();

        _this.greenXSq_Dup.destroy();
        _this.pinkYSq_Dup.destroy();
        _this.green_2Dup.destroy();
        _this.pink_2Dup.destroy();
        _this.green_3Dup.destroy();
        _this.pink_3Dup.destroy();


        _this.string1 = '';

        _this.removeStyle(_this.letterA);
        _this.removeStyle(_this.letterB);
        _this.removeStyle(_this.letterC);

        _this.removeStyle(_this.letterD);
        _this.removeStyle(_this.letterE);
        _this.removeStyle(_this.letterF);

        _this.textBox.destroy();

        _this.textBox = _this.add.sprite(230, 80, 'Text box_4');
        let stringEq = '( ';
        let multiply = '*';
        stringEq = stringEq + _this.Finalequation + ' )';
        _this.questionText = _this.add.text(50, 19, stringEq);
        _this.applyingStyleBlue(_this.questionText);
        _this.textBox.addChild(_this.questionText);

        _this.multiplySign = _this.add.text(135, 19, multiply);
        _this.applyingStyleBlue(_this.multiplySign);
        _this.textBox.addChild(_this.multiplySign);
        let stringEq2 = '( ';
        stringEq2 = stringEq2 + _this.Finalequation2 + ' )';

        _this.questionText2 = _this.add.text(160, 19, stringEq2);
        _this.applyingStyleBlue(_this.questionText2);
        _this.textBox.addChild(_this.questionText2);

        _this.questionText3 = _this.add.text(250, 19, ' =');
        _this.applyingStyleBlue(_this.questionText3);
        _this.textBox.addChild(_this.questionText3);

        _this.addAnswerBoxAndHighlight();

        if (_this.count1 == 0) _this.Ask_Question3.play();

        _this.Question_flag = 3;
    },

    tickEvaluationFour: function (target) {
        _this.clickSound.play();
        console.log('tick four validation....')

        var coefficientMatch3 = _this.equation.match(/^-?\d+/);
        var variableMatch3 = _this.equation.match(/[a-z]/i);

        // Extract the coefficient and variable
        _this.coefficient3 = coefficientMatch3 ? parseInt(coefficientMatch3[0]) : 0;
        _this.variable3 = variableMatch3 ? variableMatch3[0] : "";

        console.log(_this.coefficient3)
        console.log(_this.variable3)

        if (_this.coefficient3 && _this.variable3) {
            if (_this.coefficient3 < 0 && _this.variable3 === 'x') {
                _this.space5Boxes.forEach(function (obj) {
                    if (obj.name == '20') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            } else if (_this.coefficient3 > 0 && _this.variable3 === 'x') {
                _this.space5Boxes.forEach(function (obj) {
                    if (obj.name == '25') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            } else if (_this.coefficient3 < 0 && _this.variable3 === 'y') {
                _this.space5Boxes.forEach(function (obj) {
                    if (obj.name == '40') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            } else if (_this.coefficient3 > 0 && _this.variable3 === 'y') {
                _this.space5Boxes.forEach(function (obj) {
                    if (obj.name == '45') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            }
        } else {
            if (_this.coefficient3 < 0) {
                _this.space5Boxes.forEach(function (obj) {
                    if (obj.name == '60') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            } else {
                _this.space5Boxes.forEach(function (obj) {
                    if (obj.name == '65') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            }
        }
        console.log(_this.DestroyAll.length, '_this.DestroyAll')

        if (_this.DestroyAll.length > 0) {
            _this.wrongans.play();
            _this.space5Boxes.removeAll(true);
            _this.DestroyAll.length = 0;
            _this.CorrectAnsCount.length = 0;
            _this.Yincrease = 200;
        } else if (_this.CorrectAnsCount.length === Math.abs(_this.coefficient3)) {
            _this.ValidationFlag3 = true;
            _this.CorrectAnsCount.length = 0;
        } else {
            _this.ValidationFlag3 = false;
        }

        if (_this.ValidationFlag3) {
            _this.counterCelebrationSound.play();
            target.events.onInputDown.removeAll();
            _this.eraser.events.onDragStop.removeAll();
            _this.eraser.events.onDragStop.add(_this.eraserDrop5, _this);

            _this.textBox.frame = 1;

            _this.green_4.events.onInputDown.removeAll();
            _this.green_5.events.onInputDown.removeAll();
            _this.green_6.events.onInputDown.removeAll();
            _this.greenXY.events.onInputDown.removeAll();
            _this.green_Y.events.onInputDown.removeAll();
            _this.greenY2.events.onInputDown.removeAll();

            _this.pink_4.events.onInputDown.removeAll();
            _this.pink_5.events.onInputDown.removeAll();
            _this.pink_6.events.onInputDown.removeAll();
            _this.pinkXY.events.onInputDown.removeAll();
            _this.pink_Y.events.onInputDown.removeAll();
            _this.pinkY2.events.onInputDown.removeAll();

            _this.green_4.events.onInputDown.add(_this.NegXSq2);
            _this.green_5.events.onInputDown.add(_this.NegX2);
            _this.green_6.events.onInputDown.add(_this.NegConst2);
            _this.greenXY.events.onInputDown.add(_this.NegXY2);
            _this.green_Y.events.onInputDown.add(_this.NegY2);
            _this.greenY2.events.onInputDown.add(_this.NegYSq2);

            _this.pink_4.events.onInputDown.add(_this.PosXSq2);
            _this.pink_5.events.onInputDown.add(_this.PosX2);
            _this.pink_6.events.onInputDown.add(_this.PosConst2);
            _this.pinkXY.events.onInputDown.add(_this.PosXY2);
            _this.pink_Y.events.onInputDown.add(_this.PosY2);
            _this.pinkY2.events.onInputDown.add(_this.PosYSq2);


            target.events.onInputDown.add(_this.tickEvaluationFive, _this);
            _this.ValidationFlag3 = false;
            // _this.framechange.play();

            if (_this.count1 == 0) _this.Ask_Question5.play();
            _this.Question_flag = 5;

        } else {
            _this.space5Boxes.removeAll(true);
            _this.DestroyAll.length = 0;
            _this.CorrectAnsCount.length = 0;
            _this.wrongSound.play();
            _this.Yincrease = 200;

        }

    },

    tickEvaluationFive: function (target) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.clickSound.play();
        console.log('tick five validation....')

        var coefficientMatch4 = _this.equation2.match(/^-?\d+/);
        var variableMatch4 = _this.equation2.match(/[a-z]/i);

        // Extract the coefficient and variable
        _this.coefficient4 = coefficientMatch4 ? parseInt(coefficientMatch4[0]) : 0;
        _this.variable4 = variableMatch4 ? variableMatch4[0] : "";

        console.log(_this.coefficient4)
        console.log(_this.variable4)

        if (_this.coefficient4 && _this.variable4) {
            if (_this.coefficient4 < 0 && _this.variable4 === 'x') {
                _this.space6Boxes.forEach(function (obj) {
                    if (obj.name == '20') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            } else if (_this.coefficient4 > 0 && _this.variable4 === 'x') {
                _this.space6Boxes.forEach(function (obj) {
                    if (obj.name == '25') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            } else if (_this.coefficient4 < 0 && _this.variable4 === 'y') {
                _this.space6Boxes.forEach(function (obj) {
                    if (obj.name == '40') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            } else if (_this.coefficient4 > 0 && _this.variable4 === 'y') {
                _this.space6Boxes.forEach(function (obj) {
                    if (obj.name == '45') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            }
        } else {
            if (_this.coefficient4 < 0) {
                _this.space6Boxes.forEach(function (obj) {
                    if (obj.name == '60') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            } else {
                _this.space6Boxes.forEach(function (obj) {
                    if (obj.name == '65') _this.CorrectAnsCount.push(obj);
                    else _this.DestroyAll.push(obj);
                });
            }
        }
        console.log(_this.DestroyAll.length, '_this.DestroyAll')

        if (_this.DestroyAll.length > 0) {
            _this.wrongans.play();
            _this.space6Boxes.removeAll(true);
            _this.DestroyAll.length = 0;
            _this.CorrectAnsCount.length = 0;
            _this.Xincrease2 = 300;
        } else if (_this.CorrectAnsCount.length === Math.abs(_this.coefficient4)) {
            _this.ValidationFlag4 = true;
            _this.CorrectAnsCount.length = 0;
        } else {
            _this.ValidationFlag4 = false;
        }

        if (_this.ValidationFlag4) {
            _this.counterCelebrationSound.play();
            target.events.onInputDown.removeAll();
            _this.eraser.events.onDragStop.removeAll();
            _this.eraser.events.onDragStop.add(_this.eraserDrop6, _this);

            _this.textBox.frame = 1;

            _this.green_4.events.onInputDown.removeAll();
            _this.green_5.events.onInputDown.removeAll();
            _this.green_6.events.onInputDown.removeAll();
            _this.greenXY.events.onInputDown.removeAll();
            _this.green_Y.events.onInputDown.removeAll();
            _this.greenY2.events.onInputDown.removeAll();

            _this.pink_4.events.onInputDown.removeAll();
            _this.pink_5.events.onInputDown.removeAll();
            _this.pink_6.events.onInputDown.removeAll();
            _this.pinkXY.events.onInputDown.removeAll();
            _this.pink_Y.events.onInputDown.removeAll();
            _this.pinkY2.events.onInputDown.removeAll();

            for (let i = 0; i < _this.space5Boxes.length; i++) {
                console.log('inside change frame....')
                _this.space5Boxes.getChildAt(i).frame = 1;
            }

            for (let j = 0; j < _this.space6Boxes.length; j++) {
                console.log('inside change frame....')
                _this.space6Boxes.getChildAt(j).frame = 1;
            }

            _this.green_4.input.enableDrag();
            _this.green_4.input.useHandCursor = true;
            _this.green_4.events.onDragStop.add(_this.DragGreenXSq, _this);

            _this.pink_4.input.enableDrag();
            _this.pink_4.input.useHandCursor = true;
            _this.pink_4.events.onDragStop.add(_this.DragPinkXSq, _this);

            _this.green_5Dup = _this.add.image(33, 212, 'greenSmall2');// X
            _this.green_5Dup.scale.setTo(1.2, 2.5);
            _this.green_5Dup.inputEnabled = true;
            _this.green_5Dup.input.enableDrag();
            _this.green_5Dup.input.useHandCursor = true;
            _this.green_5Dup.events.onDragUpdate.add(_this.DragGreenXDupUpdate, _this);
            _this.green_5Dup.events.onDragStop.add(_this.DragGreenX, _this);
            _this.green_5Dup.alpha = 0;

            _this.green_5.input.enableDrag();
            _this.green_5.input.useHandCursor = true;
            _this.green_5.events.onDragStop.add(_this.DragGreenX, _this);

            _this.pink_5Dup = _this.add.image(143, 212, 'pinkSmall2');// X
            _this.pink_5Dup.scale.setTo(1.2, 2.5);
            _this.pink_5Dup.inputEnabled = true;
            _this.pink_5Dup.input.enableDrag();
            _this.pink_5Dup.input.useHandCursor = true;
            _this.pink_5Dup.events.onDragUpdate.add(_this.DragPinkXDupUpdate, _this);
            _this.pink_5Dup.events.onDragStop.add(_this.DragPinkX, _this);
            _this.pink_5Dup.alpha = 0;

            _this.pink_5.input.enableDrag();
            _this.pink_5.input.useHandCursor = true;
            _this.pink_5.events.onDragStop.add(_this.DragPinkX, _this);

            _this.green_6Dup = _this.add.image(38, 460, 'greenSmall3');// 1
            _this.green_6Dup.scale.setTo(3.8, 2.5);
            _this.green_6Dup.inputEnabled = true;
            _this.green_6Dup.input.enableDrag();
            _this.green_6Dup.input.useHandCursor = true;
            _this.green_6Dup.events.onDragUpdate.add(_this.DragGreenConstDupUpdate, _this);
            _this.green_6Dup.events.onDragStop.add(_this.DragGreenConst, _this);
            _this.green_6Dup.alpha = 0;

            _this.green_6.input.enableDrag();
            _this.green_6.input.useHandCursor = true;
            _this.green_6.events.onDragStop.add(_this.DragGreenConst, _this);

            _this.pink_6Dup = _this.add.image(145, 460, 'pinkSmall3');// 1
            _this.pink_6Dup.scale.setTo(4.2, 2.6);
            _this.pink_6Dup.inputEnabled = true;
            _this.pink_6Dup.input.enableDrag();
            _this.pink_6Dup.input.useHandCursor = true;
            _this.pink_6Dup.events.onDragUpdate.add(_this.DragPinkConstDupUpdate, _this);
            _this.pink_6Dup.events.onDragStop.add(_this.DragPinkConst, _this);
            _this.pink_6Dup.alpha = 0;

            _this.pink_6.input.enableDrag();
            _this.pink_6.input.useHandCursor = true;
            _this.pink_6.events.onDragStop.add(_this.DragPinkConst, _this);

            _this.greenY2.input.enableDrag();
            _this.greenY2.input.useHandCursor = true;
            _this.greenY2.events.onDragStop.add(_this.DragGreenYSq, _this);

            _this.pinkY2.input.enableDrag();
            _this.pinkY2.input.useHandCursor = true;
            _this.pinkY2.events.onDragStop.add(_this.DragPinkYSq, _this);

            _this.green_YDup = _this.add.image(36, 322, 'greenY');// Y
            _this.green_YDup.scale.setTo(1.7, 2.5);
            _this.green_YDup.inputEnabled = true;
            _this.green_YDup.input.enableDrag();
            _this.green_YDup.input.useHandCursor = true;
            _this.green_YDup.events.onDragUpdate.add(_this.DragGreenYDupUpdate, _this);
            _this.green_YDup.events.onDragStop.add(_this.DragGreenY, _this);
            _this.green_YDup.alpha = 0;

            _this.green_Y.input.enableDrag();
            _this.green_Y.input.useHandCursor = true;
            _this.green_Y.events.onDragStop.add(_this.DragGreenY, _this);

            _this.pink_YDup = _this.add.image(148, 322, 'pinkY');// Y
            _this.pink_YDup.scale.setTo(1.7, 2.5);
            _this.pink_YDup.inputEnabled = true;
            _this.pink_YDup.input.enableDrag();
            _this.pink_YDup.input.useHandCursor = true;
            _this.pink_YDup.events.onDragUpdate.add(_this.DragPinkYDupUpdate, _this);
            _this.pink_YDup.events.onDragStop.add(_this.DragPinkY, _this);
            _this.pink_YDup.alpha = 0;

            _this.pink_Y.input.enableDrag();
            _this.pink_Y.input.useHandCursor = true;
            _this.pink_Y.events.onDragStop.add(_this.DragPinkY, _this);

            _this.greenXY.input.enableDrag();
            _this.greenXY.input.useHandCursor = true;
            _this.greenXY.events.onDragStop.add(_this.DragGreenXY, _this);

            _this.pinkXY.input.enableDrag();
            _this.pinkXY.input.useHandCursor = true;
            _this.pinkXY.events.onDragStop.add(_this.DragPinkXY, _this);

            if (_this.count1 == 0) _this.Ask_Question2.play();


            _this.Question_flag = 2;
            target.events.onInputDown.add(_this.tickEvaluationSix, _this);
            _this.ValidationFlag4 = false;
            // _this.framechange.play();
        } else {
            _this.space6Boxes.removeAll(true);
            _this.wrongSound.play();
            _this.Xincrease2 = 300;
            _this.DestroyAll.length = 0;
            _this.CorrectAnsCount.length = 0;
        }

    },

    DragGreenXSq: function () {
        if ((_this.space5Boxes.getChildAt(0).name == '20' || _this.space5Boxes.getChildAt(0).name == '25') && (_this.space6Boxes.getChildAt(0).name == '20' || _this.space6Boxes.getChildAt(0).name == '25')) {
            console.log(_this.destroyObjectX, '_this.destroyFlag')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_4.position.x = pos.x;
                _this.green_4.position.y = pos.y;

                _this.green_4.destroy();
                _this.green_4 = _this.add.sprite(pos.x, pos.y, 'all_2');
                _this.green_4.frame = 2;
                _this.green_4.name = '1';

                _this.space7Boxes.addChild(_this.green_4);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.green_4.position.x = post.x;
                _this.green_4.position.y = post.y;

                _this.green_4.destroy();
                _this.green_4 = _this.add.sprite(post.x, post.y, 'all_2');
                _this.green_4.frame = 2;
                _this.green_4.name = '1';

                _this.space7Boxes.addChild(_this.green_4);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }

            else {
                console.log('Drag...............')
                _this.result = _this.actualMonoValue * _this.actualMonoValue2;

                if (_this.space7Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }

                if (_this.DragOrNotFlag) {
                    if (_this.checkOverlap(_this.space1, _this.green_4)) {
                        _this.green_4.x = _this.squareX;
                        _this.green_4.y = _this.squareY;

                    }

                    _this.green_4.destroy();
                    _this.green_4 = _this.add.sprite(_this.squareX, _this.squareY, 'all_2');
                    _this.green_4.frame = 2;
                    _this.green_4.name = '1';
                    _this.space7Boxes.addChild(_this.green_4);

                    if (_this.actualMonoValue > _this.actualMonoValue2) {
                        _this.squareY += 125;

                    } else if (_this.actualMonoValue < _this.actualMonoValue2) {
                        _this.squareX += 125;
                        _this.space7Boxes.addChild(_this.green_4);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            console.log('space box length')
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX -= 125;
                            }
                            _this.squareY += 125;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                    else {
                        _this.green_4.destroy();
                        _this.green_4 = _this.add.sprite(_this.squareX, _this.squareY, 'all_2');
                        _this.green_4.frame = 2;
                        _this.green_4.name = '1';
                        _this.squareX += 125;

                        _this.space7Boxes.addChild(_this.green_4);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX -= 125;
                            }
                            _this.squareY += 125;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }


                } else {
                    _this.green_4.destroy();
                    _this.wrongSound.play();
                }
            }
        }

        else {
            _this.green_4.destroy();
            _this.wrongSound.play();
        }

        _this.green_4 = _this.add.image(42, 140, 'greenS1');
        _this.letter1.bringToTop();

        _this.green_4.inputEnabled = true;
        _this.green_4.input.enableDrag();
        _this.green_4.input.useHandCursor = true;
        _this.green_4.events.onDragStop.add(_this.DragGreenXSq, _this);
    },

    DragPinkXSq: function () {
        if ((_this.space5Boxes.getChildAt(0).name == '20' || _this.space5Boxes.getChildAt(0).name == '25') && (_this.space6Boxes.getChildAt(0).name == '20' || _this.space6Boxes.getChildAt(0).name == '25')) {
            console.log(_this.destroyObjectX, '_this.destroyFlag')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_4.position.x = pos.x;
                _this.pink_4.position.y = pos.y;

                _this.pink_4.destroy();
                _this.pink_4 = _this.add.sprite(pos.x, pos.y, 'all_2');
                _this.pink_4.frame = 0;
                _this.pink_4.name = '2';

                _this.space7Boxes.addChild(_this.pink_4);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pink_4.position.x = post.x;
                _this.pink_4.position.y = post.y;

                _this.pink_4.destroy();
                _this.pink_4 = _this.add.sprite(post.x, post.y, 'all_2');
                _this.pink_4.frame = 0;
                _this.pink_4.name = '2';

                _this.space7Boxes.addChild(_this.pink_4);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }

            else {
                console.log('Drag...............')
                _this.result = _this.actualMonoValue * _this.actualMonoValue2;

                if (_this.space7Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }

                if (_this.DragOrNotFlag) {
                    if (_this.checkOverlap(_this.space1, _this.pink_4)) {
                        _this.pink_4.x = _this.squareX;
                        _this.pink_4.y = _this.squareY;

                    }

                    _this.pink_4.destroy();
                    _this.pink_4 = _this.add.sprite(_this.squareX, _this.squareY, 'all_2');
                    _this.pink_4.frame = 0;
                    _this.pink_4.name = '2';
                    _this.space7Boxes.addChild(_this.pink_4);

                    if (_this.actualMonoValue > _this.actualMonoValue2) {
                        _this.squareY += 125;

                    } else if (_this.actualMonoValue < _this.actualMonoValue2) {
                        _this.squareX += 125;
                        _this.space7Boxes.addChild(_this.pink_4);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            console.log('space box length')
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX -= 125;
                            }
                            _this.squareY += 125;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                    else {
                        _this.pink_4.destroy();
                        _this.pink_4 = _this.add.sprite(_this.squareX, _this.squareY, 'all_2');
                        _this.pink_4.frame = 0;
                        _this.pink_4.name = '2';
                        _this.squareX += 125;

                        _this.space7Boxes.addChild(_this.pink_4);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX -= 125;
                            }
                            _this.squareY += 125;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }

                } else {
                    _this.pink_4.destroy();
                    _this.wrongSound.play();
                }
            }
        }

        else {
            _this.pink_4.destroy();
            _this.wrongSound.play();
        }

        _this.pink_4 = _this.add.image(155, 140, 'pinkS1');
        _this.letter2.bringToTop();

        _this.pink_4.inputEnabled = true;
        _this.pink_4.input.enableDrag();
        _this.pink_4.input.useHandCursor = true;
        _this.pink_4.events.onDragStop.add(_this.DragPinkXSq, _this);
    },

    DragGreenX: function () {
        if ((_this.space5Boxes.getChildAt(0).name == '20' || _this.space5Boxes.getChildAt(0).name == '25') && (_this.space6Boxes.getChildAt(0).name == '60' || _this.space6Boxes.getChildAt(0).name == '65')) {
            console.log(_this.destroyObjectXV, '_this.destroyObjectXV')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_5.position.x = pos.x;
                _this.green_5.position.y = pos.y;

                _this.green_5Dup.destroy();
                _this.green_5.destroy();
                _this.green_5 = _this.add.sprite(pos.x, pos.y, 'green1');
                _this.green_5.frame = 0;
                _this.green_5.name = '3';

                _this.space7Boxes.addChild(_this.green_5);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.green_5.position.x = post.x;
                _this.green_5.position.y = post.y;

                _this.green_5Dup.destroy();
                _this.green_5.destroy();
                _this.green_5 = _this.add.sprite(post.x, post.y, 'green1');
                _this.green_5.frame = 0;
                _this.green_5.name = '3';

                _this.space7Boxes.addChild(_this.green_5);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                console.log('Drag..........')
                if (_this.space7Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }
                _this.result = (_this.actualMonoValue * _this.monoConstant2);

                if (_this.DragOrNotFlag) {
                    if (_this.checkOverlap(_this.space1, _this.green_5)) {
                        _this.green_5.x = _this.linearX;
                        _this.green_5.y = _this.linearY;
                    }

                    _this.green_5Dup.destroy();
                    _this.green_5.destroy();
                    _this.green_5 = _this.add.image(_this.linearX, _this.linearY, 'green1');
                    _this.green_5.name = '3';
                    _this.linearX += 35;

                    _this.space7Boxes.addChild(_this.green_5);

                    if (_this.space7Boxes.length == _this.monoConstant2) {
                        for (let i = 0; i < _this.space7Boxes.length; i++) {
                            _this.linearX -= 35;
                        }
                        _this.linearY += 125;
                        _this.space7Boxes.addChild(_this.green_5);
                    }

                    if (_this.space7Boxes.length == _this.monoConstant2 * 2) {
                        _this.linearY -= 125;
                    }
                } else {
                    console.log('No Drag................')
                    _this.green_5Dup.destroy();
                    _this.green_5.destroy();
                    // _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
                    _this.wrongSound.play();
                }
            }

        }
        else if ((_this.space5Boxes.getChildAt(0).name == '60' || _this.space5Boxes.getChildAt(0).name == '65') && (_this.space6Boxes.getChildAt(0).name == '20' || _this.space6Boxes.getChildAt(0).name == '25')) {
            console.log(_this.destroyObjectXH, '_this.destroyObjectXH')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_5.position.x = pos.x;
                _this.green_5.position.y = pos.y;

                _this.green_5Dup.destroy();
                _this.green_5.destroy();
                _this.green_5 = _this.add.sprite(pos.x, pos.y, 'green2');
                _this.green_5.frame = 0;
                _this.green_5.name = '4';

                _this.space7Boxes.addChild(_this.green_5);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.green_5.position.x = post.x;
                _this.green_5.position.y = post.y;

                _this.green_5Dup.destroy();
                _this.green_5.destroy();
                _this.green_5 = _this.add.sprite(post.x, post.y, 'green2');
                _this.green_5.frame = 0;
                _this.green_5.name = '4';

                _this.space7Boxes.addChild(_this.green_5);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                _this.result = (_this.monoConstant * _this.actualMonoValue2);
                if (_this.checkOverlap(_this.space1, _this.green_5)) {
                    console.log('Drag Horizontal................')
                    _this.green_5.x = _this.linearX;
                    _this.green_5.y = _this.linearY;

                }

                _this.green_5Dup.destroy();
                _this.green_5.destroy();
                _this.green_5 = _this.add.image(_this.linearX, _this.linearY, 'green2');
                _this.green_5.name = '4';
                _this.linearX += 125;

                _this.space7Boxes.addChild(_this.green_5);


                if (_this.space7Boxes.length <= _this.result) {
                    if (_this.space7Boxes.length == _this.actualMonoValue2 || _this.space7Boxes.length == _this.actualMonoValue2 * 2 || _this.space7Boxes.length == _this.actualMonoValue2 * 3 || _this.space7Boxes.length == _this.actualMonoValue2 * 4 || _this.space7Boxes.length == _this.actualMonoValue2 * 5 || _this.space7Boxes.length == _this.actualMonoValue2 * 6 || _this.space7Boxes.length == _this.actualMonoValue2 * 7) {
                        for (let i = 0; i < _this.space7Boxes.length; i++) {
                            _this.linearX -= 125;
                        }
                        _this.linearY += 35;
                        _this.space7Boxes.addChild(_this.green_5);
                        _this.linearX = 301;
                    }
                } else {
                    _this.green_5Dup.destroy();
                    _this.green_5.destroy();
                    _this.wrongSound.play();
                }

            }
        }
        else {
            console.log('No Drag................')
            _this.green_5Dup.destroy();
            _this.green_5.destroy();
            // _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
            _this.wrongSound.play();
        }

        _this.green_5Dup = _this.add.image(33, 212, 'greenSmall2');// X
        _this.green_5Dup.scale.setTo(1.2, 2.5);

        _this.green_5Dup.inputEnabled = true;
        _this.green_5Dup.input.enableDrag();
        _this.green_5Dup.input.useHandCursor = true;
        _this.green_5Dup.events.onDragUpdate.add(_this.DragGreenXDupUpdate, _this);
        _this.green_5Dup.events.onDragStop.add(_this.DragGreenX, _this);
        _this.green_5Dup.alpha = 0;

        _this.green_5 = _this.add.image(42, 235, 'greenSmall2');

        _this.green_5.inputEnabled = true;
        _this.green_5.input.enableDrag();
        _this.green_5.input.useHandCursor = true;
        _this.green_5.events.onDragStop.add(_this.DragGreenX, _this);
    },

    DragGreenXDupUpdate: function () {
        _this.world.bringToTop(_this.green_5Dup);
        _this.green_5Dup.scale.setTo(1, 1);
        _this.green_5Dup.alpha = 1;
    },

    DragPinkX: function () {
        if ((_this.space5Boxes.getChildAt(0).name == '20' || _this.space5Boxes.getChildAt(0).name == '25') && (_this.space6Boxes.getChildAt(0).name == '60' || _this.space6Boxes.getChildAt(0).name == '65')) {

            console.log(_this.destroyObjectXV, '_this.destroyObjectXV')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_5.position.x = pos.x;
                _this.pink_5.position.y = pos.y;

                _this.pink_5Dup.destroy();
                _this.pink_5.destroy();
                _this.pink_5 = _this.add.sprite(pos.x, pos.y, 'pink1');
                _this.pink_5.frame = 0;
                _this.pink_5.name = '5';

                _this.space7Boxes.addChild(_this.pink_5);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pink_5.position.x = post.x;
                _this.pink_5.position.y = post.y;

                _this.pink_5Dup.destroy();
                _this.pink_5.destroy();
                _this.pink_5 = _this.add.sprite(post.x, post.y, 'pink1');
                _this.pink_5.frame = 0;
                _this.pink_5.name = '5';

                _this.space7Boxes.addChild(_this.pink_5);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                console.log('Drag..........')
                if (_this.space7Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }
                _this.result = (_this.actualMonoValue * _this.monoConstant2);

                if (_this.DragOrNotFlag) {
                    if (_this.checkOverlap(_this.space1, _this.pink_5)) {
                        _this.pink_5.x = _this.linearX;
                        _this.pink_5.y = _this.linearY;
                    }

                    _this.pink_5Dup.destroy();
                    _this.pink_5.destroy();
                    _this.pink_5 = _this.add.image(_this.linearX, _this.linearY, 'pink1');
                    _this.pink_5.name = '5';
                    _this.linearX += 35;

                    _this.space7Boxes.addChild(_this.pink_5);

                    if (_this.space7Boxes.length == _this.monoConstant2) {
                        for (let i = 0; i < _this.space7Boxes.length; i++) {
                            _this.linearX -= 35;
                        }
                        _this.linearY += 125;
                        _this.space7Boxes.addChild(_this.pink_5);
                    }

                    if (_this.space7Boxes.length == _this.monoConstant2 * 2) {
                        _this.linearY -= 125;
                    }
                } else {
                    console.log('No Drag................')
                    _this.pink_5Dup.destroy();
                    _this.pink_5.destroy();
                    // _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
                    _this.wrongSound.play();
                }
            }

        }

        else if ((_this.space5Boxes.getChildAt(0).name == '60' || _this.space5Boxes.getChildAt(0).name == '65') && (_this.space6Boxes.getChildAt(0).name == '20' || _this.space6Boxes.getChildAt(0).name == '25')) {

            console.log(_this.destroyObjectXV, '_this.destroyObjectXV')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_5.position.x = pos.x;
                _this.pink_5.position.y = pos.y;

                _this.pink_5Dup.destroy();
                _this.pink_5.destroy();
                _this.pink_5 = _this.add.sprite(pos.x, pos.y, 'pink2');
                _this.pink_5.frame = 0;
                _this.pink_5.name = '6';

                _this.space7Boxes.addChild(_this.pink_5);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pink_5.position.x = post.x;
                _this.pink_5.position.y = post.y;

                _this.pink_5Dup.destroy();
                _this.pink_5.destroy();
                _this.pink_5 = _this.add.sprite(post.x, post.y, 'pink2');
                _this.pink_5.frame = 0;
                _this.pink_5.name = '6';

                _this.space7Boxes.addChild(_this.pink_5);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                if (_this.checkOverlap(_this.space1, _this.pink_5)) {
                    console.log('Drag Horizontal................')
                    _this.pink_5.x = _this.linearX;
                    _this.pink_5.y = _this.linearY;

                }
                _this.result = (_this.monoConstant * _this.actualMonoValue2);

                _this.pink_5Dup.destroy();
                _this.pink_5.destroy();
                _this.pink_5 = _this.add.image(_this.linearX, _this.linearY, 'pink2');
                _this.pink_5.name = '6';
                _this.linearX += 125;

                _this.space7Boxes.addChild(_this.pink_5);


                if (_this.space7Boxes.length <= _this.result) {
                    if (_this.space7Boxes.length == _this.actualMonoValue2 || _this.space7Boxes.length == _this.actualMonoValue2 * 2 || _this.space7Boxes.length == _this.actualMonoValue2 * 3 || _this.space7Boxes.length == _this.actualMonoValue2 * 4 || _this.space7Boxes.length == _this.actualMonoValue2 * 5 || _this.space7Boxes.length == _this.actualMonoValue2 * 6 || _this.space7Boxes.length == _this.actualMonoValue2 * 7) {
                        for (let i = 0; i < _this.space7Boxes.length; i++) {
                            _this.linearX -= 125;
                        }
                        _this.linearY += 35;
                        _this.space7Boxes.addChild(_this.pink_5);
                        _this.linearX = 301;
                    }
                } else {
                    _this.pink_5.destroy();
                    _this.pink_5Dup.destroy();
                    _this.wrongSound.play();
                    // _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
                    // return;
                }
            }
        }
        else {
            console.log('No Drag................')
            _this.pink_5.destroy();
            _this.pink_5Dup.destroy();
            // _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
            _this.wrongSound.play();
        }


        _this.pink_5Dup = _this.add.image(143, 212, 'pinkSmall2');// X
        _this.pink_5Dup.scale.setTo(1.2, 2.5);
        _this.pink_5Dup.inputEnabled = true;
        _this.pink_5Dup.input.enableDrag();
        _this.pink_5Dup.input.useHandCursor = true;
        _this.pink_5Dup.events.onDragUpdate.add(_this.DragPinkXDupUpdate, _this);
        _this.pink_5Dup.events.onDragStop.add(_this.DragPinkX, _this);
        _this.pink_5Dup.alpha = 0;

        _this.pink_5 = _this.add.image(155, 235, 'pinkSmall2');

        _this.pink_5.inputEnabled = true;
        _this.pink_5.input.enableDrag();
        _this.pink_5.input.useHandCursor = true;
        _this.pink_5.events.onDragStop.add(_this.DragPinkX, _this);
    },

    DragPinkXDupUpdate: function () {
        _this.world.bringToTop(_this.pink_5Dup);
        _this.pink_5Dup.scale.setTo(1, 1);
        _this.pink_5Dup.alpha = 1;
    },

    DragGreenXY: function () {
        if ((_this.space5Boxes.getChildAt(0).name == '40' || _this.space5Boxes.getChildAt(0).name == '45') && (_this.space6Boxes.getChildAt(0).name == '20' || _this.space6Boxes.getChildAt(0).name == '25')) {
            console.log(_this.destroyObjectXYH, '_this.destroyObjectXYH')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.greenXY.position.x = pos.x;
                _this.greenXY.position.y = pos.y;

                _this.greenXY.destroy();
                _this.greenXY = _this.add.sprite(pos.x, pos.y, 'all_1');
                _this.greenXY.frame = 2;
                _this.greenXY.name = '7';

                _this.space7Boxes.addChild(_this.greenXY);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.greenXY.position.x = post.x;
                _this.greenXY.position.y = post.y;

                _this.greenXY.destroy();
                _this.greenXY = _this.add.sprite(post.x, post.y, 'all_1');
                _this.greenXY.frame = 2;
                _this.greenXY.name = '7';

                _this.space7Boxes.addChild(_this.greenXY);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                console.log('Drag...............')
                _this.result = _this.actualMonoValue * _this.actualMonoValue2;

                if (_this.space7Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }

                if (_this.DragOrNotFlag) {
                    if (_this.checkOverlap(_this.space1, _this.greenXY)) {
                        _this.greenXY.x = _this.squareX2;
                        _this.greenXY.y = _this.squareY2;

                    }

                    _this.greenXY.destroy();
                    _this.greenXY = _this.add.sprite(_this.squareX2, _this.squareY2, 'all_1');
                    _this.greenXY.frame = 2;
                    _this.greenXY.name = '7';
                    _this.space7Boxes.addChild(_this.greenXY);

                    if (_this.actualMonoValue > _this.actualMonoValue2) {
                        _this.squareY2 += 85;

                    } else if (_this.actualMonoValue < _this.actualMonoValue2) {
                        _this.squareX2 += 125;
                        _this.space7Boxes.addChild(_this.greenXY);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            console.log('space box length')
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX2 -= 125;
                            }
                            _this.squareY2 += 85;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                    else {
                        _this.greenXY.destroy();
                        _this.greenXY = _this.add.sprite(_this.squareX2, _this.squareY2, 'all_1');
                        _this.greenXY.frame = 2;
                        _this.greenXY.name = '7';
                        _this.squareX2 += 125;

                        _this.space7Boxes.addChild(_this.greenXY);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX2 -= 125;
                            }
                            _this.squareY2 += 85;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                } else {
                    _this.greenXY.destroy();
                    _this.wrongSound.play();
                }
            }
        }

        else if ((_this.space5Boxes.getChildAt(0).name == '20' || _this.space5Boxes.getChildAt(0).name == '25') && (_this.space6Boxes.getChildAt(0).name == '40' || _this.space6Boxes.getChildAt(0).name == '45')) {

            console.log(_this.destroyObjectXYV, '_this.destroyObjectXYV')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.greenXY.position.x = pos.x;
                _this.greenXY.position.y = pos.y;

                _this.greenXY.destroy();
                _this.greenXY = _this.add.sprite(pos.x, pos.y, 'all_3');
                _this.greenXY.frame = 2;
                _this.greenXY.name = '8';

                _this.space7Boxes.addChild(_this.greenXY);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.greenXY.position.x = post.x;
                _this.greenXY.position.y = post.y;

                _this.greenXY.destroy();
                _this.greenXY = _this.add.sprite(post.x, post.y, 'all_3');
                _this.greenXY.frame = 2;
                _this.greenXY.name = '8';

                _this.space7Boxes.addChild(_this.greenXY);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }

            else {
                console.log('Drag...............')
                _this.result = _this.actualMonoValue * _this.actualMonoValue2;

                if (_this.space7Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }

                if (_this.DragOrNotFlag) {
                    if (_this.checkOverlap(_this.space1, _this.greenXY)) {
                        _this.greenXY.x = _this.squareX2;
                        _this.greenXY.y = _this.squareY2;

                    }

                    _this.greenXY.destroy();
                    _this.greenXY = _this.add.sprite(_this.squareX2, _this.squareY2, 'all_3');
                    _this.greenXY.frame = 2;
                    _this.greenXY.name = '8';
                    _this.space7Boxes.addChild(_this.greenXY);

                    if (_this.actualMonoValue > _this.actualMonoValue2) {
                        _this.squareY2 += 125;

                    } else if (_this.actualMonoValue < _this.actualMonoValue2) {
                        _this.squareX2 += 85;
                        _this.space7Boxes.addChild(_this.greenXY);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            console.log('space box length')
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX2 -= 85;
                            }
                            _this.squareY2 += 125;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                    else {
                        _this.greenXY.destroy();
                        _this.greenXY = _this.add.sprite(_this.squareX2, _this.squareY2, 'all_3');
                        _this.greenXY.frame = 2;
                        _this.greenXY.name = '8';
                        _this.squareX2 += 85;

                        _this.space7Boxes.addChild(_this.greenXY);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX2 -= 85;
                            }
                            _this.squareY2 += 125;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                } else {
                    _this.greenXY.destroy();
                    _this.wrongSound.play();
                }
            }
        }
        else {
            _this.greenXY.destroy();
            _this.wrongSound.play();
        }


        _this.greenXY = _this.add.image(42, 265, 'greenXY');
        _this.letter5.bringToTop();

        _this.greenXY.inputEnabled = true;
        _this.greenXY.input.enableDrag();
        _this.greenXY.input.useHandCursor = true;
        _this.greenXY.events.onDragStop.add(_this.DragGreenXY, _this);
    },

    DragPinkXY: function () {
        if ((_this.space5Boxes.getChildAt(0).name == '40' || _this.space5Boxes.getChildAt(0).name == '45') && (_this.space6Boxes.getChildAt(0).name == '20' || _this.space6Boxes.getChildAt(0).name == '25')) {

            console.log(_this.destroyObjectXYH, '_this.destroyObjectXYH')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pinkXY.position.x = pos.x;
                _this.pinkXY.position.y = pos.y;

                _this.pinkXY.destroy();
                _this.pinkXY = _this.add.sprite(pos.x, pos.y, 'all_1');
                _this.pinkXY.frame = 0;
                _this.pinkXY.name = '9';

                _this.space7Boxes.addChild(_this.pinkXY);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pinkXY.position.x = post.x;
                _this.pinkXY.position.y = post.y;

                _this.pinkXY.destroy();
                _this.pinkXY = _this.add.sprite(post.x, post.y, 'all_1');
                _this.pinkXY.frame = 0;
                _this.pinkXY.name = '9';

                _this.space7Boxes.addChild(_this.pinkXY);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                console.log('Drag...............')
                _this.result = _this.actualMonoValue * _this.actualMonoValue2;

                if (_this.space7Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }

                if (_this.DragOrNotFlag) {

                    if (_this.checkOverlap(_this.space1, _this.pinkXY)) {
                        _this.pinkXY.x = _this.squareX2;
                        _this.pinkXY.y = _this.squareY2;

                    }

                    _this.pinkXY.destroy();
                    _this.pinkXY = _this.add.sprite(_this.squareX2, _this.squareY2, 'all_1');
                    _this.pinkXY.frame = 0;
                    _this.pinkXY.name = '9';
                    _this.space7Boxes.addChild(_this.pinkXY);

                    if (_this.actualMonoValue > _this.actualMonoValue2) {
                        _this.squareY2 += 85;

                    } else if (_this.actualMonoValue < _this.actualMonoValue2) {
                        _this.squareX2 += 125;
                        _this.space7Boxes.addChild(_this.pinkXY);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            console.log('space box length')
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX2 -= 125;
                            }
                            _this.squareY2 += 85;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                    else {
                        _this.pinkXY.destroy();
                        _this.pinkXY = _this.add.sprite(_this.squareX2, _this.squareY2, 'all_1');
                        _this.pinkXY.frame = 0;
                        _this.pinkXY.name = '9';
                        _this.squareX2 += 125;

                        _this.space7Boxes.addChild(_this.pinkXY);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX2 -= 125;
                            }
                            _this.squareY2 += 85;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                } else {
                    _this.pinkXY.destroy();
                    _this.wrongSound.play();
                }

            }
        }


        else if ((_this.space5Boxes.getChildAt(0).name == '20' || _this.space5Boxes.getChildAt(0).name == '25') && (_this.space6Boxes.getChildAt(0).name == '40' || _this.space6Boxes.getChildAt(0).name == '45')) {

            console.log(_this.destroyObjectXYV, '_this.destroyObjectXYV')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pinkXY.position.x = pos.x;
                _this.pinkXY.position.y = pos.y;

                _this.pinkXY.destroy();
                _this.pinkXY = _this.add.sprite(pos.x, pos.y, 'all_3');
                _this.pinkXY.frame = 0;
                _this.pinkXY.name = '10';

                _this.space7Boxes.addChild(_this.pinkXY);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pinkXY.position.x = post.x;
                _this.pinkXY.position.y = post.y;

                _this.pinkXY.destroy();
                _this.pinkXY = _this.add.sprite(post.x, post.y, 'all_3');
                _this.pinkXY.frame = 0;
                _this.pinkXY.name = '10';

                _this.space7Boxes.addChild(_this.pinkXY);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                console.log('Drag...............')
                _this.result = _this.actualMonoValue * _this.actualMonoValue2;

                if (_this.space7Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }

                if (_this.DragOrNotFlag) {
                    if (_this.checkOverlap(_this.space1, _this.pinkXY)) {
                        _this.pinkXY.x = _this.squareX2;
                        _this.pinkXY.y = _this.squareY2;

                    }

                    _this.pinkXY.destroy();
                    _this.pinkXY = _this.add.sprite(_this.squareX2, _this.squareY2, 'all_3');
                    _this.pinkXY.frame = 0;
                    _this.pinkXY.name = '10';
                    _this.space7Boxes.addChild(_this.pinkXY);

                    if (_this.actualMonoValue > _this.actualMonoValue2) {
                        _this.squareY2 += 125;

                    } else if (_this.actualMonoValue < _this.actualMonoValue2) {
                        _this.squareX2 += 85;
                        _this.space7Boxes.addChild(_this.pinkXY);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            console.log('space box length')
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX2 -= 85;
                            }
                            _this.squareY2 += 125;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                    else {
                        _this.pinkXY.destroy();
                        _this.pinkXY = _this.add.sprite(_this.squareX2, _this.squareY2, 'all_3');
                        _this.pinkXY.frame = 0;
                        _this.pinkXY.name = '10';
                        _this.squareX2 += 85;

                        _this.space7Boxes.addChild(_this.pinkXY);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX2 -= 85;
                            }
                            _this.squareY2 += 125;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                } else {
                    _this.pinkXY.destroy();
                    _this.wrongSound.play();
                }
            }
        }
        else {
            _this.pinkXY.destroy();
            _this.wrongSound.play();
        }

        _this.pinkXY = _this.add.image(155, 265, 'pinkXY');
        _this.letter6.bringToTop();

        _this.pinkXY.inputEnabled = true;
        _this.pinkXY.input.enableDrag();
        _this.pinkXY.input.useHandCursor = true;
        _this.pinkXY.events.onDragStop.add(_this.DragPinkXY, _this);
    },

    DragGreenY: function () {
        if ((_this.space5Boxes.getChildAt(0).name == '40' || _this.space5Boxes.getChildAt(0).name == '45') && (_this.space6Boxes.getChildAt(0).name == '60' || _this.space6Boxes.getChildAt(0).name == '65')) {

            console.log(_this.destroyObjectYV, '_this.destroyObjectYV')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_Y.position.x = pos.x;
                _this.green_Y.position.y = pos.y;

                _this.green_YDup.destroy();
                _this.green_Y.destroy();
                _this.green_Y = _this.add.sprite(pos.x, pos.y, 'green4');
                _this.green_Y.frame = 0;
                _this.green_Y.name = '11';

                _this.space7Boxes.addChild(_this.green_Y);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.green_Y.position.x = post.x;
                _this.green_Y.position.y = post.y;

                _this.green_YDup.destroy();
                _this.green_Y.destroy();
                _this.green_Y = _this.add.sprite(post.x, post.y, 'green4');
                _this.green_Y.frame = 0;
                _this.green_Y.name = '11';

                _this.space7Boxes.addChild(_this.green_Y);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                console.log('Drag..........')
                if (_this.space7Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }
                _this.result = (_this.actualMonoValue * _this.monoConstant2);

                if (_this.DragOrNotFlag) {
                    if (_this.checkOverlap(_this.space1, _this.green_Y)) {
                        _this.green_Y.x = _this.linearX2;
                        _this.green_Y.y = _this.linearY2;
                    }

                    _this.green_YDup.destroy();
                    _this.green_Y.destroy();
                    _this.green_Y = _this.add.image(_this.linearX2, _this.linearY2, 'green4');
                    _this.green_Y.name = '11';
                    _this.linearX2 += 35;

                    _this.space7Boxes.addChild(_this.green_Y);

                    if (_this.space7Boxes.length == _this.monoConstant2) {
                        for (let i = 0; i < _this.space7Boxes.length; i++) {
                            _this.linearX2 -= 35;
                        }
                        _this.linearY2 += 85;
                        _this.space7Boxes.addChild(_this.green_Y);
                    }

                    if (_this.space7Boxes.length == _this.monoConstant2 * 2) {
                        _this.linearY2 -= 85;
                    }

                } else {
                    console.log('No Drag................')
                    _this.green_Y.destroy();
                    _this.green_YDup.destroy();
                    // _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
                    _this.wrongSound.play();
                }
            }
        }

        else if ((_this.space5Boxes.getChildAt(0).name == '60' || _this.space5Boxes.getChildAt(0).name == '65') && (_this.space6Boxes.getChildAt(0).name == '40' || _this.space6Boxes.getChildAt(0).name == '45')) {

            console.log(_this.destroyObjectYH, '_this.destroyObjectYH')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_Y.position.x = pos.x;
                _this.green_Y.position.y = pos.y;

                _this.green_YDup.destroy();
                _this.green_Y.destroy();
                _this.green_Y = _this.add.sprite(pos.x, pos.y, 'green3');
                _this.green_Y.frame = 0;
                _this.green_Y.name = '12';

                _this.space7Boxes.addChild(_this.green_Y);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.green_Y.position.x = post.x;
                _this.green_Y.position.y = post.y;

                _this.green_YDup.destroy();
                _this.green_Y.destroy();
                _this.green_Y = _this.add.sprite(post.x, post.y, 'green3');
                _this.green_Y.frame = 0;
                _this.green_Y.name = '12';

                _this.space7Boxes.addChild(_this.green_Y);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                if (_this.checkOverlap(_this.space1, _this.green_Y)) {
                    console.log('Drag Horizontal................')
                    _this.green_Y.x = _this.linearX2;
                    _this.green_Y.y = _this.linearY2;

                }
                _this.result = (_this.monoConstant * _this.actualMonoValue2);

                _this.green_YDup.destroy();
                _this.green_Y.destroy();
                _this.green_Y = _this.add.image(_this.linearX2, _this.linearY2, 'green3');
                _this.green_Y.name = '12';
                _this.linearX2 += 85;

                _this.space7Boxes.addChild(_this.green_Y);


                if (_this.space7Boxes.length <= _this.result) {
                    if (_this.space7Boxes.length == _this.actualMonoValue2 || _this.space7Boxes.length == _this.actualMonoValue2 * 2 || _this.space7Boxes.length == _this.actualMonoValue2 * 3 || _this.space7Boxes.length == _this.actualMonoValue2 * 4 || _this.space7Boxes.length == _this.actualMonoValue2 * 5 || _this.space7Boxes.length == _this.actualMonoValue2 * 6 || _this.space7Boxes.length == _this.actualMonoValue2 * 7) {
                        for (let i = 0; i < _this.space7Boxes.length; i++) {
                            _this.linearX2 -= 85;
                        }
                        _this.linearY2 += 35;
                        _this.space7Boxes.addChild(_this.green_Y);
                        _this.linearX2 = 301;
                    }
                } else {
                    _this.green_Y.destroy();
                    _this.green_YDup.destroy();
                    _this.wrongSound.play();
                    // _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
                    // return;
                }
            }
        }
        else {
            console.log('No Drag................')
            _this.green_Y.destroy();
            _this.green_YDup.destroy();
            // _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
            _this.wrongSound.play();
        }

        _this.green_YDup = _this.add.image(36, 322, 'greenY');// Y
        _this.green_YDup.scale.setTo(1.7, 2.5);
        _this.green_YDup.inputEnabled = true;
        _this.green_YDup.input.enableDrag();
        _this.green_YDup.input.useHandCursor = true;
        _this.green_YDup.events.onDragUpdate.add(_this.DragGreenYDupUpdate, _this);
        _this.green_YDup.events.onDragStop.add(_this.DragGreenY, _this);
        _this.green_YDup.alpha = 0;

        _this.green_Y = _this.add.image(50, 345, 'greenY');

        _this.green_Y.inputEnabled = true;
        _this.green_Y.input.enableDrag();
        _this.green_Y.input.useHandCursor = true;
        _this.green_Y.events.onDragStop.add(_this.DragGreenY, _this);
    },

    DragGreenYDupUpdate: function () {
        _this.world.bringToTop(_this.green_YDup);
        _this.green_YDup.scale.setTo(1, 1);
        _this.green_YDup.alpha = 1;
    },

    DragPinkY: function () {
        if ((_this.space5Boxes.getChildAt(0).name == '40' || _this.space5Boxes.getChildAt(0).name == '45') && (_this.space6Boxes.getChildAt(0).name == '60' || _this.space6Boxes.getChildAt(0).name == '65')) {
            console.log(_this.destroyObjectYV, '_this.destroyObjectYV')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_Y.position.x = pos.x;
                _this.pink_Y.position.y = pos.y;

                _this.pink_YDup.destroy();
                _this.pink_Y.destroy();
                _this.pink_Y = _this.add.sprite(pos.x, pos.y, 'pink4');
                _this.pink_Y.frame = 0;
                _this.pink_Y.name = '13';

                _this.space7Boxes.addChild(_this.pink_Y);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pink_Y.position.x = post.x;
                _this.pink_Y.position.y = post.y;

                _this.pink_YDup.destroy();
                _this.pink_Y.destroy();
                _this.pink_Y = _this.add.sprite(post.x, post.y, 'pink4');
                _this.pink_Y.frame = 0;
                _this.pink_Y.name = '13';

                _this.space7Boxes.addChild(_this.pink_Y);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }

            else {
                console.log('Drag..........')
                if (_this.space7Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }
                _this.result = (_this.actualMonoValue * _this.monoConstant2);

                if (_this.DragOrNotFlag) {
                    if ((_this.space5Boxes.getChildAt(0).name == '40' || _this.space5Boxes.getChildAt(0).name == '45') && (_this.space6Boxes.getChildAt(0).name == '60' || _this.space6Boxes.getChildAt(0).name == '65')) {

                        if (_this.checkOverlap(_this.space1, _this.pink_Y)) {
                            _this.pink_Y.x = _this.linearX2;
                            _this.pink_Y.y = _this.linearY2;
                        }

                        _this.pink_YDup.destroy();
                        _this.pink_Y.destroy();
                        _this.pink_Y = _this.add.image(_this.linearX2, _this.linearY2, 'pink4');
                        _this.pink_Y.name = '13';
                        _this.linearX2 += 35;

                        _this.space7Boxes.addChild(_this.pink_Y);

                        if (_this.space7Boxes.length == _this.monoConstant2) {
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.linearX2 -= 35;
                            }
                            _this.linearY2 += 85;
                            _this.space7Boxes.addChild(_this.pink_Y);
                        }

                        if (_this.space7Boxes.length == _this.monoConstant2 * 2) {
                            _this.linearY2 -= 85;
                        }
                    }
                } else {
                    console.log('No Drag................')
                    _this.pink_YDup.destroy();
                    _this.pink_Y.destroy();
                    // _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
                    _this.wrongSound.play();
                }
            }
        }

        else if ((_this.space5Boxes.getChildAt(0).name == '60' || _this.space5Boxes.getChildAt(0).name == '65') && (_this.space6Boxes.getChildAt(0).name == '40' || _this.space6Boxes.getChildAt(0).name == '45')) {

            console.log(_this.destroyObjectYH, '_this.destroyObjectYH')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_Y.position.x = pos.x;
                _this.pink_Y.position.y = pos.y;

                _this.pink_YDup.destroy();
                _this.pink_Y.destroy();
                _this.pink_Y = _this.add.sprite(pos.x, pos.y, 'pink3');
                _this.pink_Y.frame = 0;
                _this.pink_Y.name = '14';

                _this.space7Boxes.addChild(_this.pink_Y);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pink_Y.position.x = post.x;
                _this.pink_Y.position.y = post.y;

                _this.pink_YDup.destroy();
                _this.pink_Y.destroy();
                _this.pink_Y = _this.add.sprite(post.x, post.y, 'pink3');
                _this.pink_Y.frame = 0;
                _this.pink_Y.name = '14';

                _this.space7Boxes.addChild(_this.pink_Y);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                if (_this.checkOverlap(_this.space1, _this.pink_Y)) {
                    console.log('Drag Horizontal................')
                    _this.pink_Y.x = _this.linearX2;
                    _this.pink_Y.y = _this.linearY2;

                }
                _this.result = (_this.monoConstant * _this.actualMonoValue2);

                _this.pink_YDup.destroy();
                _this.pink_Y.destroy();
                _this.pink_Y = _this.add.image(_this.linearX2, _this.linearY2, 'pink3');
                _this.pink_Y.name = '14';
                _this.linearX2 += 85;

                _this.space7Boxes.addChild(_this.pink_Y);


                if (_this.space7Boxes.length <= _this.result) {
                    if (_this.space7Boxes.length == _this.actualMonoValue2 || _this.space7Boxes.length == _this.actualMonoValue2 * 2 || _this.space7Boxes.length == _this.actualMonoValue2 * 3 || _this.space7Boxes.length == _this.actualMonoValue2 * 4 || _this.space7Boxes.length == _this.actualMonoValue2 * 5 || _this.space7Boxes.length == _this.actualMonoValue2 * 6 || _this.space7Boxes.length == _this.actualMonoValue2 * 7) {
                        for (let i = 0; i < _this.space7Boxes.length; i++) {
                            _this.linearX2 -= 85;
                        }
                        _this.linearY2 += 35;
                        _this.space7Boxes.addChild(_this.pink_Y);
                        _this.linearX2 = 301;
                    }
                } else {
                    _this.pink_Y.destroy();
                    _this.pink_YDup.destroy();
                    _this.wrongSound.play();
                    // _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
                    // return;
                }
            }
        }
        else {
            console.log('No Drag................')
            _this.pink_Y.destroy();
            _this.pink_YDup.destroy();
            // _this.green_2 = _this.add.image(45, 385, 'greenSmall2');
            _this.wrongSound.play();
        }

        _this.pink_YDup = _this.add.image(148, 322, 'pinkY');// Y
        _this.pink_YDup.scale.setTo(1.7, 2.5);
        _this.pink_YDup.inputEnabled = true;
        _this.pink_YDup.input.enableDrag();
        _this.pink_YDup.input.useHandCursor = true;
        _this.pink_YDup.events.onDragUpdate.add(_this.DragPinkYDupUpdate, _this);
        _this.pink_YDup.events.onDragStop.add(_this.DragPinkY, _this);
        _this.pink_YDup.alpha = 0;

        _this.pink_Y = _this.add.image(160, 345, 'pinkY');

        _this.pink_Y.inputEnabled = true;
        _this.pink_Y.input.enableDrag();
        _this.pink_Y.input.useHandCursor = true;
        _this.pink_Y.events.onDragStop.add(_this.DragPinkY, _this);
    },

    DragPinkYDupUpdate: function () {
        _this.world.bringToTop(_this.pink_YDup);
        _this.pink_YDup.scale.setTo(1, 1);
        _this.pink_YDup.alpha = 1;
    },

    DragGreenYSq: function () {
        if ((_this.space5Boxes.getChildAt(0).name == '40' || _this.space5Boxes.getChildAt(0).name == '45') && (_this.space6Boxes.getChildAt(0).name == '40' || _this.space6Boxes.getChildAt(0).name == '45')) {

            console.log(_this.destroyObjectY, '_this.destroyObjectY')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.greenY2.position.x = pos.x;
                _this.greenY2.position.y = pos.y;

                _this.greenY2.destroy();
                _this.greenY2 = _this.add.sprite(pos.x, pos.y, 'all_4');
                _this.greenY2.frame = 2;
                _this.greenY2.name = '15';

                _this.space7Boxes.addChild(_this.greenY2);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.greenY2.position.x = post.x;
                _this.greenY2.position.y = post.y;

                _this.greenY2.destroy();
                _this.greenY2 = _this.add.sprite(post.x, post.y, 'all_4');
                _this.greenY2.frame = 2;
                _this.greenY2.name = '15';

                _this.space7Boxes.addChild(_this.greenY2);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                console.log('Drag...............')
                _this.result = _this.actualMonoValue * _this.actualMonoValue2;

                if (_this.space7Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }


                if (_this.DragOrNotFlag) {
                    if (_this.checkOverlap(_this.space1, _this.greenY2)) {
                        _this.greenY2.x = _this.squareX;
                        _this.greenY2.y = _this.squareY;

                    }

                    _this.greenY2.destroy();
                    _this.greenY2 = _this.add.sprite(_this.squareX, _this.squareY, 'all_4');
                    _this.greenY2.frame = 2;
                    _this.greenY2.name = '15';
                    _this.space7Boxes.addChild(_this.greenY2);

                    if (_this.actualMonoValue > _this.actualMonoValue2) {
                        _this.squareY += 85;

                    } else if (_this.actualMonoValue < _this.actualMonoValue2) {
                        _this.squareX += 85;
                        _this.space7Boxes.addChild(_this.greenY2);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            console.log('space box length')
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX -= 85;
                            }
                            _this.squareY += 85;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                    else {
                        _this.greenY2.destroy();
                        _this.greenY2 = _this.add.sprite(_this.squareX, _this.squareY, 'all_4');
                        _this.greenY2.frame = 2;
                        _this.greenY2.name = '15';
                        _this.squareX += 85;

                        _this.space7Boxes.addChild(_this.greenY2);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX -= 85;
                            }
                            _this.squareY += 85;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                } else {
                    _this.greenY2.destroy();
                    _this.wrongSound.play();
                }
            }
        }
        else {
            _this.greenY2.destroy();
            _this.wrongSound.play();
        }

        _this.greenY2 = _this.add.image(50, 410, 'greenY2');

        _this.greenY2.inputEnabled = true;
        _this.greenY2.input.enableDrag();
        _this.greenY2.input.useHandCursor = true;
        _this.greenY2.events.onDragStop.add(_this.DragGreenYSq, _this);
    },

    DragPinkYSq: function () {

        if ((_this.space5Boxes.getChildAt(0).name == '40' || _this.space5Boxes.getChildAt(0).name == '45') && (_this.space6Boxes.getChildAt(0).name == '40' || _this.space6Boxes.getChildAt(0).name == '45')) {
            console.log(_this.destroyObjectY, '_this.destroyObjectY')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pinkY2.position.x = pos.x;
                _this.pinkY2.position.y = pos.y;

                _this.pinkY2.destroy();
                _this.pinkY2 = _this.add.sprite(pos.x, pos.y, 'all_4');
                _this.pinkY2.frame = 0;
                _this.pinkY2.name = '16';

                _this.space7Boxes.addChild(_this.pinkY2);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pinkY2.position.x = post.x;
                _this.pinkY2.position.y = post.y;

                _this.pinkY2.destroy();
                _this.pinkY2 = _this.add.sprite(post.x, post.y, 'all_4');
                _this.pinkY2.frame = 0;
                _this.pinkY2.name = '16';

                _this.space7Boxes.addChild(_this.pinkY2);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                console.log('Drag...............')
                _this.result = _this.actualMonoValue * _this.actualMonoValue2;

                if (_this.space7Boxes.length >= _this.result) {
                    _this.DragOrNotFlag = 0;
                } else {
                    _this.DragOrNotFlag = 1;
                }

                if (_this.DragOrNotFlag) {
                    if (_this.checkOverlap(_this.space1, _this.pinkY2)) {
                        _this.pinkY2.x = _this.squareX;
                        _this.pinkY2.y = _this.squareY;

                    }

                    _this.pinkY2.destroy();
                    _this.pinkY2 = _this.add.sprite(_this.squareX, _this.squareY, 'all_4');
                    _this.pinkY2.frame = 0;
                    _this.pinkY2.name = '16';
                    _this.space7Boxes.addChild(_this.pinkY2);

                    if (_this.actualMonoValue > _this.actualMonoValue2) {
                        _this.squareY += 85;

                    } else if (_this.actualMonoValue < _this.actualMonoValue2) {
                        _this.squareX += 85;
                        _this.space7Boxes.addChild(_this.pinkY2);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            console.log('space box length')
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX -= 85;
                            }
                            _this.squareY += 85;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }
                    else {
                        _this.pinkY2.destroy();
                        _this.pinkY2 = _this.add.sprite(_this.squareX, _this.squareY, 'all_4');
                        _this.pinkY2.frame = 0;
                        _this.pinkY2.name = '16';
                        _this.squareX += 85;

                        _this.space7Boxes.addChild(_this.pinkY2);

                        if (_this.space7Boxes.length == _this.actualMonoValue2) {
                            for (let i = 0; i < _this.space7Boxes.length; i++) {
                                _this.squareX -= 85;
                            }
                            _this.squareY += 85;
                            _this.totalValue = _this.actualMonoValue * _this.actualMonoValue2;
                        }
                    }

                } else {
                    _this.pinkY2.destroy();
                    _this.wrongSound.play();

                }
            }

        }
        else {
            _this.pinkY2.destroy();
            _this.wrongSound.play();
        }

        _this.pinkY2 = _this.add.image(160, 410, 'pinkY2');

        _this.pinkY2.inputEnabled = true;
        _this.pinkY2.input.enableDrag();
        _this.pinkY2.input.useHandCursor = true;
        _this.pinkY2.events.onDragStop.add(_this.DragPinkYSq, _this);
    },

    DragGreenConst: function () {
        if ((_this.space5Boxes.getChildAt(0).name == '60' || _this.space5Boxes.getChildAt(0).name == '65') && (_this.space6Boxes.getChildAt(0).name == '60' || _this.space6Boxes.getChildAt(0).name == '65')) {

            console.log(_this.destroyObjectC, '_this.destroyObjectC')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_6.position.x = pos.x;
                _this.green_6.position.y = pos.y;

                _this.green_6Dup.destroy();
                _this.green_6.destroy();
                _this.green_6 = _this.add.sprite(pos.x, pos.y, 'greenBig3');
                _this.green_6.frame = 0;
                _this.green_6.name = '17';

                _this.space7Boxes.addChild(_this.green_6);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.green_6.position.x = post.x;
                _this.green_6.position.y = post.y;

                _this.green_6Dup.destroy();
                _this.green_6.destroy();
                _this.green_6 = _this.add.sprite(post.x, post.y, 'greenBig3');
                _this.green_6.frame = 0;
                _this.green_6.name = '17';

                _this.space7Boxes.addChild(_this.green_6);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                console.log('Drag................')

                _this.result = _this.monoConstant * _this.monoConstant2;

                if (_this.checkOverlap(_this.space1, _this.green_6)) {
                    _this.green_6.x = _this.ConstX;
                    _this.green_6.y = _this.ConstY;
                }

                _this.green_6Dup.destroy();
                _this.green_6.destroy();
                _this.green_6 = _this.add.image(_this.ConstX, _this.ConstY, 'greenBig3');
                _this.ConstX += 35;
                _this.green_6.name = '17';

                _this.space7Boxes.addChild(_this.green_6);

                if (_this.space7Boxes.length <= _this.result) {
                    if (_this.space7Boxes.length == _this.monoConstant2 || _this.space7Boxes.length == _this.monoConstant2 * 2 || _this.space7Boxes.length == _this.monoConstant2 * 3 || _this.space7Boxes.length == _this.monoConstant2 * 4 || _this.space7Boxes.length == _this.monoConstant2 * 5 || _this.space7Boxes.length == _this.monoConstant2 * 6 || _this.space7Boxes.length == _this.monoConstant2 * 7) {
                        for (let i = 0; i < _this.space7Boxes.length; i++) {
                            _this.ConstX -= 35;
                        }
                        _this.ConstY += 35;
                        _this.space7Boxes.addChild(_this.green_6);
                        _this.ConstX = 301;
                    }
                } else {
                    _this.green_6.destroy();
                    _this.green_6Dup.destroy();
                    // _this.green_3 = _this.add.image(65, 450, 'greenSmall3');
                    _this.wrongSound.play();
                }
            }
        } else {
            _this.green_6.destroy();
            _this.green_6Dup.destroy();
            // _this.green_3 = _this.add.image(65, 450, 'greenSmall3');
            _this.wrongSound.play();
        }

        _this.green_6Dup = _this.add.image(38, 460, 'greenSmall3');// 1
        _this.green_6Dup.scale.setTo(3.8, 2.5);
        _this.green_6Dup.inputEnabled = true;
        _this.green_6Dup.input.enableDrag();
        _this.green_6Dup.input.useHandCursor = true;
        _this.green_6Dup.events.onDragUpdate.add(_this.DragGreenConstDupUpdate, _this);
        _this.green_6Dup.events.onDragStop.add(_this.DragGreenConst, _this);
        _this.green_6Dup.alpha = 0;


        _this.green_6 = _this.add.image(65, 485, 'greenSmall3');

        _this.green_6.inputEnabled = true;
        _this.green_6.input.enableDrag();
        _this.green_6.input.useHandCursor = true;
        _this.green_6.events.onDragStop.add(_this.DragGreenConst, _this);
    },

    DragGreenConstDupUpdate: function () {
        _this.world.bringToTop(_this.green_6Dup);
        _this.green_6Dup.scale.setTo(1, 1);
        _this.green_6Dup.alpha = 1;
    },

    DragPinkConst: function () {
        if ((_this.space5Boxes.getChildAt(0).name == '60' || _this.space5Boxes.getChildAt(0).name == '65') && (_this.space6Boxes.getChildAt(0).name == '60' || _this.space6Boxes.getChildAt(0).name == '65')) {
            console.log(_this.destroyObjectC, '_this.destroyObjectC')
            if (_this.destroyedPositions.length > 0) {
                // Get the first destroyed position
                var pos = _this.destroyedPositions[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_6.position.x = pos.x;
                _this.pink_6.position.y = pos.y;

                _this.pink_6Dup.destroy();
                _this.pink_6.destroy();
                _this.pink_6 = _this.add.sprite(pos.x, pos.y, 'pinkBig3');
                _this.pink_6.frame = 0;
                _this.pink_6.name = '18';

                _this.space7Boxes.addChild(_this.pink_6);

                // Remove the destroyed position from the array
                _this.destroyedPositions.shift();

                console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
            }
            else if (_this.erasedObjectInitialPosition.length > 0) {
                console.log('eraser parttttttttttttt 2')
                var post = _this.erasedObjectInitialPosition[0];

                _this.pink_6.position.x = post.x;
                _this.pink_6.position.y = post.y;

                _this.pink_6Dup.destroy();
                _this.pink_6.destroy();
                _this.pink_6 = _this.add.sprite(post.x, post.y, 'pinkBig3');
                _this.pink_6.frame = 0;
                _this.pink_6.name = '18';

                _this.space7Boxes.addChild(_this.pink_6);

                // Remove the destroyed position from the array
                _this.erasedObjectInitialPosition.shift();

                console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition,shift()')
            }
            else {
                console.log('Drag................')

                _this.result = _this.monoConstant * _this.monoConstant2;

                if (_this.checkOverlap(_this.space1, _this.pink_6)) {
                    _this.pink_6.x = _this.ConstX;
                    _this.pink_6.y = _this.ConstY;
                }

                _this.pink_6Dup.destroy();
                _this.pink_6.destroy();
                _this.pink_6 = _this.add.image(_this.ConstX, _this.ConstY, 'pinkBig3');
                _this.ConstX += 35;
                _this.pink_6.name = '18';

                _this.space7Boxes.addChild(_this.pink_6);

                if (_this.space7Boxes.length <= _this.result) {
                    if (_this.space7Boxes.length == _this.monoConstant2 || _this.space7Boxes.length == _this.monoConstant2 * 2 || _this.space7Boxes.length == _this.monoConstant2 * 3 || _this.space7Boxes.length == _this.monoConstant2 * 4 || _this.space7Boxes.length == _this.monoConstant2 * 5 || _this.space7Boxes.length == _this.monoConstant2 * 6 || _this.space7Boxes.length == _this.monoConstant2 * 7) {
                        for (let i = 0; i < _this.space7Boxes.length; i++) {
                            _this.ConstX -= 35;
                        }
                        _this.ConstY += 35;
                        _this.space7Boxes.addChild(_this.pink_6);
                        _this.ConstX = 301;
                    }
                } else {
                    _this.pink_6Dup.destroy();
                    _this.pink_6.destroy();
                    // _this.green_3 = _this.add.image(65, 450, 'greenSmall3');
                    _this.wrongSound.play();
                }
            }
        } else {
            _this.pink_6.destroy();
            _this.pink_6Dup.destroy();
            // _this.green_3 = _this.add.image(65, 450, 'greenSmall3');
            _this.wrongSound.play();
        }

        _this.pink_6Dup = _this.add.image(145, 460, 'pinkSmall3');// 1
        _this.pink_6Dup.scale.setTo(4.2, 2.6);
        _this.pink_6Dup.inputEnabled = true;
        _this.pink_6Dup.input.enableDrag();
        _this.pink_6Dup.input.useHandCursor = true;
        _this.pink_6Dup.events.onDragUpdate.add(_this.DragPinkConstDupUpdate, _this);
        _this.pink_6Dup.events.onDragStop.add(_this.DragPinkConst, _this);
        _this.pink_6Dup.alpha = 0;

        _this.pink_6 = _this.add.image(175, 485, 'pinkSmall3');

        _this.pink_6.inputEnabled = true;
        _this.pink_6.input.enableDrag();
        _this.pink_6.input.useHandCursor = true;
        _this.pink_6.events.onDragStop.add(_this.DragPinkConst, _this);
    },

    DragPinkConstDupUpdate: function () {
        _this.world.bringToTop(_this.pink_6Dup);
        _this.pink_6Dup.scale.setTo(1, 1);
        _this.pink_6Dup.alpha = 1;
    },


    tickEvaluationSix: function () {
        console.log('tick six evaluation')

        // X² validation

        if (_this.space5Boxes.getChildAt(0).name == '20' && _this.space6Boxes.getChildAt(0).name == '20') {
            console.log('both negative,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '1') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectX = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '2') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '1') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectX = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '2') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '20' && _this.space6Boxes.getChildAt(0).name == '25') {
            console.log('first negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '2') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectX = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "1") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '2') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectX = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "1") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '25' && _this.space6Boxes.getChildAt(0).name == '20') {
            console.log('second negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '2') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectX = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "1") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '2') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectX = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "1") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '25' && _this.space6Boxes.getChildAt(0).name == '25') {
            console.log('both positive,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '1') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectX = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '2') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '1') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectX = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '2') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }

        // Y² validation

        if (_this.space5Boxes.getChildAt(0).name == '40' && _this.space6Boxes.getChildAt(0).name == '40') {
            console.log('both negative,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '15') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectY = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '16') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '15') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectY = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '16') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '40' && _this.space6Boxes.getChildAt(0).name == '45') {
            console.log('first negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '16') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectY = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "15") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '16') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectY = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "15") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '45' && _this.space6Boxes.getChildAt(0).name == '40') {
            console.log('second negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '16') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectY = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "15") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '16') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectY = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "15") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '45' && _this.space6Boxes.getChildAt(0).name == '45') {
            console.log('both positive,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '15') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectY = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '16') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '15') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectY = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '16') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }

        // Both constant validation

        if (_this.space5Boxes.getChildAt(0).name == '60' && _this.space6Boxes.getChildAt(0).name == '60') {
            console.log('both negative,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '17') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectC = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '18') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '17') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectC = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '18') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '60' && _this.space6Boxes.getChildAt(0).name == '65') {
            console.log('first negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '18') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectC = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "17") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '18') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectC = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "17") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '65' && _this.space6Boxes.getChildAt(0).name == '60') {
            console.log('second negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '18') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectC = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "17") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '18') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectC = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "17") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '65' && _this.space6Boxes.getChildAt(0).name == '65') {
            console.log('both positive,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '17') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectC = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '18') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '17') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectC = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '18') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        // X vertical validation

        if (_this.space5Boxes.getChildAt(0).name == '20' && _this.space6Boxes.getChildAt(0).name == '60') {
            console.log('both negative,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '3') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '5') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '3') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXV = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '5') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '20' && _this.space6Boxes.getChildAt(0).name == '65') {
            console.log('first negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '5') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "3") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '5') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXV = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "3") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '25' && _this.space6Boxes.getChildAt(0).name == '60') {
            console.log('second negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '5') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "3") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '5') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXV = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "3") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '25' && _this.space6Boxes.getChildAt(0).name == '65') {
            console.log('both positive,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '3') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '5') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '3') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXV = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '5') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }

        // X horizontal validation

        if (_this.space5Boxes.getChildAt(0).name == '60' && _this.space6Boxes.getChildAt(0).name == '20') {
            console.log('both negative,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '4') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '6') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '4') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXH = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '6') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '60' && _this.space6Boxes.getChildAt(0).name == '25') {
            console.log('first negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '6') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "4") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '6') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXH = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "4") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '65' && _this.space6Boxes.getChildAt(0).name == '20') {
            console.log('second negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '6') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "4") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '6') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXH = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "4") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '65' && _this.space6Boxes.getChildAt(0).name == '25') {
            console.log('both positive,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '4') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '6') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '4') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXH = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '6') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }

        // Y vertical validation

        if (_this.space5Boxes.getChildAt(0).name == '40' && _this.space6Boxes.getChildAt(0).name == '60') {
            console.log('both negative,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '11') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectYV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '13') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '11') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectYV = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '13') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '40' && _this.space6Boxes.getChildAt(0).name == '65') {
            console.log('first negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '13') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectYV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "11") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '13') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectYV = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "11") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '45' && _this.space6Boxes.getChildAt(0).name == '60') {
            console.log('second negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '13') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectYV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "11") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '13') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectYV = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "11") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '45' && _this.space6Boxes.getChildAt(0).name == '65') {
            console.log('both positive,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '11') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectYV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '13') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '11') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectYV = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '13') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }

        // Y horizontal validation

        if (_this.space5Boxes.getChildAt(0).name == '60' && _this.space6Boxes.getChildAt(0).name == '40') {
            console.log('both negative,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '12') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectYH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '14') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '12') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectYH = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '14') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '60' && _this.space6Boxes.getChildAt(0).name == '45') {
            console.log('first negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '14') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectYH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "12") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '14') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectYH = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "12") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '65' && _this.space6Boxes.getChildAt(0).name == '40') {
            console.log('second negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '14') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectYH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === "12") {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '14') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectYH = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === "12") {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '65' && _this.space6Boxes.getChildAt(0).name == '45') {
            console.log('both positive,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '12') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectYH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '14') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '12') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectYH = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '14') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }

        // XY vertical validation

        if (_this.space5Boxes.getChildAt(0).name == '20' && _this.space6Boxes.getChildAt(0).name == '40') {
            console.log('both negative,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '8') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXYV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '10') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '8') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXYV = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '10') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '20' && _this.space6Boxes.getChildAt(0).name == '45') {
            console.log('first negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '10') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXYV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '8') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '10') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXYV = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '8') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '25' && _this.space6Boxes.getChildAt(0).name == '40') {
            console.log('second negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '10') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXYV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '8') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '10') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXYV = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '8') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '25' && _this.space6Boxes.getChildAt(0).name == '45') {
            console.log('both positive,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '8') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXYV = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '10') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '8') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXYV = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '10') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }

        // XY horizontal validation

        if (_this.space5Boxes.getChildAt(0).name == '40' && _this.space6Boxes.getChildAt(0).name == '20') {
            console.log('both negative,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '7') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXYH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '9') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '7') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXYH = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '9') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '40' && _this.space6Boxes.getChildAt(0).name == '25') {
            console.log('first negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '9') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXYH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '7') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '9') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXYH = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '7') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '45' && _this.space6Boxes.getChildAt(0).name == '20') {
            console.log('second negative,  ans -ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '9') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXYH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '7') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '9') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXYH = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '7') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }
        else if (_this.space5Boxes.getChildAt(0).name == '45' && _this.space6Boxes.getChildAt(0).name == '25') {
            console.log('both positive,  ans +ve')
            console.log(_this.space7Boxes.length, '(_this.space7Boxes.length');
            _this.space7Boxes.forEach(function (obj) {
                if (obj.name === '7') {
                    // Check if current destroyed position already exists in array
                    var posExists = false;
                    for (var i = 0; i < _this.destroyedPositions.length; i++) {
                        var pos = _this.destroyedPositions[i];
                        if (pos.x === obj.position.x && pos.y === obj.position.y) {
                            posExists = true;
                            break;
                        }
                    }
                    // If position does not exist, add it to the array and add object to destroy list
                    if (!posExists) {
                        _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                        _this.toDestroy.push(obj);
                    }
                }
            });

            _this.toDestroy.forEach(function (obj) {
                _this.destroyObjectXYH = 1;
                obj.destroy();
            });
            console.log(_this.destroyedPositions, 'destroyedPositions');
            console.log(_this.toDestroy, 'toDestroy');

            _this.numOfChildren = 0;
            _this.space7Boxes.forEach(function (child) {
                if (child.name === '9') {
                    _this.numOfChildren++;
                }
            });
            console.log('no of children', _this.numOfChildren);
            if (_this.numOfChildren == _this.result) {
                _this.AnswerCorrect = 1;
                _this.counterCelebrationSound.play();
                _this.IfCorrectThen();
            } else {
                _this.AnswerCorrect = 0;
                console.log('correct ans but not filled completely')
                _this.wrongSound.play();
                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name === '7') {
                        // Check if current destroyed position already exists in array
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });

                _this.toDestroy.forEach(function (obj) {
                    _this.destroyObjectXYH = 1;
                    obj.destroy();
                });

                _this.space7Boxes.forEach(function (child) {
                    if (child.name === '9') {
                        // _this.numOfChildren++;
                    }
                });
            }

        }

    },


    IfCorrectThen: function () {
        if (_this.AnswerCorrect) {
            _this.sideGray1.destroy();
            _this.sideGray2.destroy();

            _this.tick.destroy();

            _this.eraser.destroy();
            _this.green_4.destroy();
            _this.green_5.destroy();
            _this.green_6.destroy();
            _this.greenXY.destroy();
            _this.green_Y.destroy();
            _this.greenY2.destroy();

            _this.pink_4.destroy();
            _this.pink_5.destroy();
            _this.pink_6.destroy();
            _this.pinkXY.destroy();
            _this.pink_Y.destroy();
            _this.pinkY2.destroy();

            _this.greenXSq_Dup2.destroy();
            _this.pinkYSq_Dup2.destroy();
            _this.greenXY_Dup.destroy();
            _this.pinkXY_Dup.destroy();

            _this.string1 = '';

            _this.removeStyle(_this.letter1);
            _this.removeStyle(_this.letter2);
            _this.removeStyle(_this.letter3);
            _this.removeStyle(_this.letter4);
            _this.removeStyle(_this.letter5);
            _this.removeStyle(_this.letter6);
            _this.removeStyle(_this.letter7);
            _this.removeStyle(_this.letter8);
            _this.removeStyle(_this.letter9);
            _this.removeStyle(_this.letter10);
            _this.removeStyle(_this.letter11);
            _this.removeStyle(_this.letter12);

            _this.textBox.destroy();

            _this.textBox = _this.add.sprite(230, 80, 'Text box_4');
            let stringEq = '( ';
            let multiply = '*';
            stringEq = stringEq + _this.Finalequation + ' )';
            _this.questionText = _this.add.text(50, 19, stringEq);
            _this.applyingStyleBlue(_this.questionText);
            _this.textBox.addChild(_this.questionText);

            _this.multiplySign = _this.add.text(135, 19, multiply);
            _this.applyingStyleBlue(_this.multiplySign);
            _this.textBox.addChild(_this.multiplySign);
            let stringEq2 = '( ';
            stringEq2 = stringEq2 + _this.Finalequation2 + ' )';

            _this.questionText2 = _this.add.text(160, 19, stringEq2);
            _this.applyingStyleBlue(_this.questionText2);
            _this.textBox.addChild(_this.questionText2);

            _this.questionText3 = _this.add.text(250, 19, ' =');
            _this.applyingStyleBlue(_this.questionText3);
            _this.textBox.addChild(_this.questionText3);

            _this.addAnswerBoxAndHighlight2();

            if (_this.count1 == 0) _this.Ask_Question3.play();

            _this.Question_flag = 3;

        }
    },

    addAnswerBoxAndHighlight: function () {
        console.log("answerbox....");

        _this.AnswerBox1 = _this.add.sprite(300, 19, 'Text box_5');
        _this.AnswerBox1.scale.setTo(1.28, 1);

        if (_this.space3Boxes.getChildAt(0).name == 'G1' || _this.space3Boxes.getChildAt(0).name == 'P1') {
            _this.answerText1 = _this.add.text(375, 19, 'x' + _this.power);
            _this.applyingStyleBlue(_this.answerText1);
            _this.textBox.addChild(_this.answerText1);
        } else if (_this.space3Boxes.getChildAt(0).name == 'G2' || _this.space3Boxes.getChildAt(0).name == 'P2' || _this.space3Boxes.getChildAt(0).name == 'G2_1' || _this.space3Boxes.getChildAt(0).name == 'P2_1') {
            _this.answerText1 = _this.add.text(375, 19, 'x');
            _this.applyingStyleBlue(_this.answerText1);
            _this.textBox.addChild(_this.answerText1);
        }

        _this.AnswerBox1.inputEnabled = true;

        _this.AnswerBox1.frame = 1;

        _this.AnswerBox1.input.useHandCursor = true;
        _this.addNumberPad();

        _this.AnswerBox1.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.AnswerBox1.frame = 1;
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
            for (let i = 1; i <= 12; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
            }
        });
        _this.textBox.addChild(_this.AnswerBox1);

    },

    addAnswerBoxAndHighlight2: function () {
        console.log("answerbox....");

        _this.AnswerBox1 = _this.add.sprite(300, 18, 'Text box_5');

        if (_this.space7Boxes.getChildAt(0).name == '1' || _this.space7Boxes.getChildAt(0).name == '2') {
            _this.answerText1 = _this.add.text(360, 19, 'x' + _this.power);
            _this.applyingStyleBlue(_this.answerText1);
            _this.textBox.addChild(_this.answerText1);
        } else if (_this.space7Boxes.getChildAt(0).name == '3' || _this.space7Boxes.getChildAt(0).name == '5' || _this.space7Boxes.getChildAt(0).name == '4' || _this.space7Boxes.getChildAt(0).name == '6') {
            _this.answerText1 = _this.add.text(360, 19, 'x');
            _this.applyingStyleBlue(_this.answerText1);
            _this.textBox.addChild(_this.answerText1);
        } else if (_this.space7Boxes.getChildAt(0).name == '7' || _this.space7Boxes.getChildAt(0).name == '9' || _this.space7Boxes.getChildAt(0).name == '8' || _this.space7Boxes.getChildAt(0).name == '10') {
            _this.answerText1 = _this.add.text(360, 19, 'xy');
            _this.applyingStyleBlue(_this.answerText1);
            _this.textBox.addChild(_this.answerText1);
        } else if (_this.space7Boxes.getChildAt(0).name == '11' || _this.space7Boxes.getChildAt(0).name == '13' || _this.space7Boxes.getChildAt(0).name == '12' || _this.space7Boxes.getChildAt(0).name == '14') {
            _this.answerText1 = _this.add.text(360, 19, 'y');
            _this.applyingStyleBlue(_this.answerText1);
            _this.textBox.addChild(_this.answerText1);
        } else if (_this.space7Boxes.getChildAt(0).name == '15' || _this.space7Boxes.getChildAt(0).name == '16') {
            _this.answerText1 = _this.add.text(360, 19, 'y' + _this.power);
            _this.applyingStyleBlue(_this.answerText1);
            _this.textBox.addChild(_this.answerText1);
        }

        _this.AnswerBox1.inputEnabled = true;

        _this.AnswerBox1.frame = 1;

        _this.AnswerBox1.input.useHandCursor = true;
        _this.addNumberPad2();

        _this.AnswerBox1.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.AnswerBox1.frame = 1;
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
            for (let i = 1; i <= 12; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
            }
        });
        _this.textBox.addChild(_this.AnswerBox1);

    },

    // multiplyMonomials: function () {

    //     console.log('multiplyMonomials')

    //     const monomial1 = '2x^3';
    //     const monomial2 = '3x^2';


    //     // extract the coefficient and exponent of each monomial
    //     const [coeff1, exp1] = monomial1.split('x^').map(Number);
    //     const [coeff2, exp2] = monomial2.split('x^').map(Number);

    //     // multiply the coefficients and add the exponents
    //     const coeffResult = coeff1 * coeff2;
    //     const expResult = exp1 + exp2;

    //     // format the result as a monomial string
    //     const result = `${coeffResult}x^${expResult}`;
    //     console.log(result);
    //     return result;
    // },


    //Adding the green large square to the top space.
    m2S1: function () {
        _this.clickSound.play();

        if (_this.verticalY + 125 >= 485) {
            _this.wrongSound.play();
            return;
        }

        _this.square = _this.add.image(_this.verticalX, _this.verticalY, 'all_2');
        _this.square.frame = 2;
        _this.square.name = '11';
        _this.space1Boxes.addChild(_this.square);

        var nameText = _this.add.text(45, 50, '-x²');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        _this.square.addChild(nameText);

        _this.verticalY += 125;

    },
    //Adding the pink large square to the top space.
    mR1: function () {
        _this.clickSound.play();
        if (_this.verticalY + 125 >= 485) {
            _this.wrongSound.play();
            return;
        }

        _this.rectangle = _this.add.image(_this.verticalX, _this.verticalY, 'greenBig1');
        _this.rectangle.frame = 0;
        _this.rectangle.name = '21';

        _this.space1Boxes.addChild(_this.rectangle);

        var nameText = _this.add.text(0, 80, '-x');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        nameText.angle = -90;
        _this.rectangle.addChild(nameText);

        _this.verticalY += 125;


    },
    //Adding the green long strips to the top space.
    mS1: function () {
        _this.clickSound.play();

        if (_this.verticalY + 35 >= 480) {
            _this.wrongSound.play();
            return;
        }

        _this.ssquare = _this.add.image(_this.verticalX, _this.verticalY, 'greenBig3');
        _this.ssquare.frame = 0;
        _this.ssquare.name = '31';

        _this.space1Boxes.addChild(_this.ssquare);

        var nameText = _this.add.text(7, 7, '-1');
        _this.applyingWhite(nameText);
        nameText.fontSize = '18px';
        nameText.bringToTop();
        _this.ssquare.addChild(nameText);

        _this.verticalY += 35;


    },
    //Adding the pink long strips to the top space.
    m2S2: function () {
        _this.clickSound.play();
        let square;

        if (_this.verticalY + 125 >= 485) {
            _this.wrongSound.play();
            return;
        }

        square = _this.add.image(_this.verticalX, _this.verticalY, 'all_2');
        square.frame = 0;
        square.name = '12';

        _this.space1Boxes.addChild(square);

        var nameText = _this.add.text(45, 50, '+x²');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        square.addChild(nameText);

        _this.verticalY += 125;
    },
    //Adding the green small strips to the top space.
    mR2: function () {
        _this.clickSound.play();

        let rectangle;

        if (_this.verticalY + 125 >= 485) {
            _this.wrongSound.play();
            return;
        }

        rectangle = _this.add.image(_this.verticalX, _this.verticalY, 'pinkBig1');
        rectangle.frame = 0;
        rectangle.name = '22';

        _this.space1Boxes.addChild(rectangle);

        var nameText = _this.add.text(0, 80, '+x');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        nameText.angle = -90;
        rectangle.addChild(nameText);

        _this.verticalY += 125;
    },
    //Adding the pink small strips to the top space.
    mS2: function () {
        _this.clickSound.play();

        let ssquare;

        if (_this.verticalY + 35 >= 480) {
            _this.wrongSound.play();
            return;
        }

        ssquare = _this.add.image(_this.verticalX, _this.verticalY, 'pinkBig3');
        ssquare.frame = 0;
        ssquare.name = '32';

        _this.space1Boxes.addChild(ssquare);

        var nameText = _this.add.text(7, 7, '+1');
        _this.applyingWhite(nameText);
        nameText.fontSize = '18px';
        nameText.bringToTop();
        ssquare.addChild(nameText);

        _this.verticalY += 35;
    },
    //Adding the green large square to the bottom space.
    m2S3: function () {
        _this.clickSound.play();
        let square;

        if (_this.horizontalX + 125 >= 925) {
            _this.wrongSound.play();
            return;
        }

        square = _this.add.image(_this.horizontalX, _this.horizontalY, 'all_2');
        square.frame = 2;
        square.name = '11';

        _this.space2Boxes.addChild(square);

        var nameText = _this.add.text(45, 50, '-x²');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        square.addChild(nameText);

        _this.horizontalX += 125;
    },
    //Adding the pink large square to the bottom space.
    mR3: function () {
        _this.clickSound.play();

        let rectangle;

        if (_this.horizontalX + 125 >= 925) {
            _this.wrongSound.play();
            return;
        }

        rectangle = _this.add.image(_this.horizontalX, _this.horizontalY, 'greenBig2');
        rectangle.frame = 0;
        rectangle.name = '21';

        _this.space2Boxes.addChild(rectangle);

        var nameText = _this.add.text(45, 0, '-x');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        rectangle.addChild(nameText);

        _this.horizontalX += 125;
    },
    //Adding the green long strips to the bottom space.
    mS3: function () {
        _this.clickSound.play();

        let ssquare;

        if (_this.horizontalX + 35 >= 925) {
            _this.wrongSound.play();
            return;
        }

        ssquare = _this.add.image(_this.horizontalX, _this.horizontalY, 'greenBig3');
        ssquare.frame = 0;
        ssquare.name = '31';

        _this.space2Boxes.addChild(ssquare);


        var nameText = _this.add.text(7, 7, '-1');
        _this.applyingWhite(nameText);
        nameText.fontSize = '18px';
        nameText.bringToTop();
        ssquare.addChild(nameText);

        _this.horizontalX += 35;
    },
    //Adding the pink long strips to the bottom space.
    m2S4: function () {
        _this.clickSound.play();
        let square;

        if (_this.horizontalX + 125 >= 925) {
            _this.wrongSound.play();
            return;
        }

        square = _this.add.image(_this.horizontalX, _this.horizontalY, 'all_2');
        square.frame = 0;
        square.name = '12';

        _this.space2Boxes.addChild(square);

        var nameText = _this.add.text(45, 50, '+x²');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        square.addChild(nameText);

        _this.horizontalX += 125;
    },
    //Adding the green small strips to the bottom space.
    mR4: function () {
        _this.clickSound.play();

        let rectangle;

        if (_this.horizontalX + 125 >= 925) {
            _this.wrongSound.play();
            return;
        }

        rectangle = _this.add.image(_this.horizontalX, _this.horizontalY, 'pinkBig2');
        rectangle.frame = 0;
        rectangle.name = '22';

        _this.space2Boxes.addChild(rectangle);

        var nameText = _this.add.text(45, 0, '+x');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        rectangle.addChild(nameText);

        _this.horizontalX += 125;
    },
    //Adding the pink small strips to the bottom space.
    mS4: function () {
        _this.clickSound.play();

        let ssquare;

        if (_this.horizontalX + 35 >= 925) {
            _this.wrongSound.play();
            return;
        }

        ssquare = _this.add.image(_this.horizontalX, _this.horizontalY, 'pinkBig3');
        ssquare.frame = 0;
        ssquare.name = '32';

        _this.space2Boxes.addChild(ssquare);

        var nameText = _this.add.text(7, 7, '+1');
        _this.applyingWhite(nameText);
        nameText.fontSize = '18px';
        nameText.bringToTop();
        ssquare.addChild(nameText);

        _this.horizontalX += 35;
    },

    // part b vertical dragging

    NegXSq: function () {
        _this.clickSound.play();
        let Nsquare;

        if (_this.Yincrease + 125 >= 485) {
            _this.wrongSound.play();
            return;
        }

        Nsquare = _this.add.image(267, _this.Yincrease, 'all_2');
        Nsquare.frame = 2;
        Nsquare.name = '10';

        _this.space5Boxes.addChild(Nsquare);

        var nameText = _this.add.text(45, 50, '-x²');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        Nsquare.addChild(nameText);

        _this.Yincrease += 125;


    },
    NegX: function () {
        _this.clickSound.play();

        let NegX;

        if (_this.Yincrease + 125 >= 485) {
            _this.wrongSound.play();
            return;
        }

        NegX = _this.add.image(267, _this.Yincrease, 'green1');
        NegX.frame = 0;
        NegX.name = '20';

        _this.space5Boxes.addChild(NegX);

        var nameText = _this.add.text(0, 80, '-x');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        nameText.angle = -90;
        NegX.addChild(nameText);


        _this.Yincrease += 125;

    },

    NegXY: function () {
        _this.clickSound.play();

        let NegXY;

        if (_this.Yincrease + 85 >= 495) {
            _this.wrongSound.play();
            return;
        }

        NegXY = _this.add.image(267, _this.Yincrease, 'all_3');
        NegXY.frame = 2;
        NegXY.name = '30';

        _this.space5Boxes.addChild(NegXY);

        var nameText = _this.add.text(25, 85, '-xy');
        _this.applyingWhite(nameText);
        nameText.fontSize = '26px';
        nameText.bringToTop();
        nameText.angle = -90;
        NegXY.addChild(nameText);

        _this.Yincrease += 125;

    },

    NegY: function () {
        _this.clickSound.play();

        let NegY;

        if (_this.Yincrease + 85 >= 495) {
            _this.wrongSound.play();
            return;
        }

        NegY = _this.add.image(267, _this.Yincrease, 'green4');
        NegY.frame = 2;
        NegY.name = '40';

        _this.space5Boxes.addChild(NegY);

        var nameText = _this.add.text(0, 55, '-y');
        _this.applyingWhite(nameText);
        nameText.fontSize = '26px';
        nameText.bringToTop();
        nameText.angle = -90;
        NegY.addChild(nameText);


        _this.Yincrease += 85;

    },

    NegYSq: function () {
        _this.clickSound.play();

        let NegY2;

        if (_this.Yincrease + 85 >= 495) {
            _this.wrongSound.play();
            return;
        }

        NegY2 = _this.add.image(267, _this.Yincrease, 'all_4');
        NegY2.frame = 2;
        NegY2.name = '50';

        _this.space5Boxes.addChild(NegY2);

        var nameText = _this.add.text(25, 25, '-y²');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        NegY2.addChild(nameText);

        _this.Yincrease += 85;

    },

    NegConst: function () {
        _this.clickSound.play();

        let NegConst;

        if (_this.Yincrease + 35 >= 480) {
            _this.wrongSound.play();
            return;
        }

        NegConst = _this.add.image(267, _this.Yincrease, 'greenBig3');
        NegConst.frame = 2;
        NegConst.name = '60';
        _this.space5Boxes.addChild(NegConst);

        var nameText = _this.add.text(7, 7, '-1');
        _this.applyingWhite(nameText);
        nameText.fontSize = '18px';
        nameText.bringToTop();
        NegConst.addChild(nameText);

        _this.Yincrease += 35;
    },

    PosXSq: function () {
        _this.clickSound.play();

        let Psquare;

        if (_this.Yincrease + 125 >= 485) {
            _this.wrongSound.play();
            return;
        }

        Psquare = _this.add.image(267, _this.Yincrease, 'all_2');
        Psquare.frame = 0;
        Psquare.name = '15';

        _this.space5Boxes.addChild(Psquare);

        var nameText = _this.add.text(45, 50, '+x²');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        Psquare.addChild(nameText);

        _this.Yincrease += 125;

    },

    PosX: function () {
        _this.clickSound.play();

        let PosX;

        if (_this.Yincrease + 125 >= 485) {
            _this.wrongSound.play();
            return;
        }

        PosX = _this.add.image(267, _this.Yincrease, 'pink1');
        PosX.frame = 0;
        PosX.name = '25';

        _this.space5Boxes.addChild(PosX);

        var nameText = _this.add.text(0, 80, '+x');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        nameText.angle = -90;
        PosX.addChild(nameText);

        _this.Yincrease += 125;
    },

    PosXY: function () {
        _this.clickSound.play();

        let PosXY;

        if (_this.Yincrease + 85 >= 495) {
            _this.wrongSound.play();
            return;
        }

        PosXY = _this.add.image(267, _this.Yincrease, 'all_3');
        PosXY.frame = 0;
        PosXY.name = '35';

        _this.space5Boxes.addChild(PosXY);

        var nameText = _this.add.text(25, 85, '+xy');
        _this.applyingWhite(nameText);
        nameText.fontSize = '26px';
        nameText.bringToTop();
        nameText.angle = -90;
        PosXY.addChild(nameText);

        _this.Yincrease += 125;

    },

    PosY: function () {
        _this.clickSound.play();

        let PosY;

        if (_this.Yincrease + 85 >= 495) {
            _this.wrongSound.play();
            return;
        }

        PosY = _this.add.image(267, _this.Yincrease, 'pink4');
        PosY.frame = 2;
        PosY.name = '45';

        _this.space5Boxes.addChild(PosY);

        var nameText = _this.add.text(0, 55, '+y');
        _this.applyingWhite(nameText);
        nameText.fontSize = '26px';
        nameText.bringToTop();
        nameText.angle = -90;
        PosY.addChild(nameText);

        _this.Yincrease += 85;

    },

    PosYSq: function () {
        _this.clickSound.play();

        let PosY2;

        if (_this.Yincrease + 85 >= 495) {
            _this.wrongSound.play();
            return;
        }

        PosY2 = _this.add.image(267, _this.Yincrease, 'all_4');
        PosY2.frame = 0;
        PosY2.name = '55';

        _this.space5Boxes.addChild(PosY2);

        var nameText = _this.add.text(25, 25, '+y²');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        PosY2.addChild(nameText);

        _this.Yincrease += 85;
    },

    PosConst: function () {
        _this.clickSound.play();

        let PosConst;

        if (_this.Yincrease + 35 >= 480) {
            _this.wrongSound.play();
            return;
        }

        PosConst = _this.add.image(265, _this.Yincrease, 'pinkBig3');
        PosConst.frame = 2;
        PosConst.name = '65';


        _this.space5Boxes.addChild(PosConst);

        var nameText = _this.add.text(7, 7, '+1');
        _this.applyingWhite(nameText);
        nameText.fontSize = '18px';
        nameText.bringToTop();
        PosConst.addChild(nameText);

        _this.Yincrease += 35;

    },

    // part b horizontal dragging

    NegXSq2: function () {
        _this.clickSound.play();
        let Nsquare;

        if (_this.Xincrease2 + 125 >= 925) {
            _this.wrongSound.play();
            return;
        }

        Nsquare = _this.add.image(_this.Xincrease2, _this.Yincrease2, 'all_2');
        Nsquare.frame = 2;
        Nsquare.name = '10';

        _this.space6Boxes.addChild(Nsquare);

        var nameText = _this.add.text(45, 50, '-x²');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        Nsquare.addChild(nameText);

        _this.Xincrease2 += 125;


    },
    NegX2: function () {
        _this.clickSound.play();

        let NegX;

        if (_this.Xincrease2 + 125 >= 925) {
            _this.wrongSound.play();
            return;
        }

        NegX = _this.add.image(_this.Xincrease2, _this.Yincrease2, 'green2');
        NegX.frame = 0;
        NegX.name = '20';

        _this.space6Boxes.addChild(NegX);

        var nameText = _this.add.text(50, 0, '-x');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        NegX.addChild(nameText);

        _this.Xincrease2 += 125;

    },

    NegXY2: function () {
        _this.clickSound.play();

        let NegXY;

        if (_this.Xincrease2 + 125 >= 925) {
            _this.wrongSound.play();
            return;
        }

        NegXY = _this.add.image(_this.Xincrease2, _this.Yincrease2, 'all_1');
        NegXY.frame = 2;
        NegXY.name = '30';

        _this.space6Boxes.addChild(NegXY);

        var nameText = _this.add.text(45, 25, '-xy');
        _this.applyingWhite(nameText);
        nameText.fontSize = '26px';
        nameText.bringToTop();
        NegXY.addChild(nameText);

        _this.Xincrease2 += 125;

    },

    NegY2: function () {
        _this.clickSound.play();

        let NegY;

        if (_this.Xincrease2 + 85 >= 925) {
            _this.wrongSound.play();
            return;
        }

        NegY = _this.add.image(_this.Xincrease2, _this.Yincrease2, 'green3');
        NegY.frame = 2;
        NegY.name = '40';

        _this.space6Boxes.addChild(NegY);

        var nameText = _this.add.text(25, 0, '-y');
        _this.applyingWhite(nameText);
        nameText.fontSize = '26px';
        nameText.bringToTop();
        NegY.addChild(nameText);

        _this.Xincrease2 += 85;

    },

    NegYSq2: function () {
        _this.clickSound.play();

        let NegY2;

        if (_this.Xincrease2 + 85 >= 925) {
            _this.wrongSound.play();
            return;
        }

        NegY2 = _this.add.image(_this.Xincrease2, _this.Yincrease2, 'all_4');
        NegY2.frame = 2;
        NegY2.name = '50';

        _this.space6Boxes.addChild(NegY2);

        var nameText = _this.add.text(25, 25, '-y²');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        NegY2.addChild(nameText);

        _this.Xincrease2 += 85;

    },

    NegConst2: function () {
        _this.clickSound.play();

        let NegConst;

        if (_this.Xincrease2 + 35 >= 925) {
            _this.wrongSound.play();
            return;
        }

        NegConst = _this.add.image(_this.Xincrease2, _this.Yincrease2, 'greenBig3');
        NegConst.frame = 2;
        NegConst.name = '60';


        _this.space6Boxes.addChild(NegConst);

        var nameText = _this.add.text(7, 7, '-1');
        _this.applyingWhite(nameText);
        nameText.fontSize = '18px';
        nameText.bringToTop();
        NegConst.addChild(nameText);

        _this.Xincrease2 += 35;
    },

    PosXSq2: function () {
        _this.clickSound.play();

        let Psquare;

        if (_this.Xincrease2 + 125 >= 925) {
            _this.wrongSound.play();
            return;
        }

        Psquare = _this.add.image(_this.Xincrease2, _this.Yincrease2, 'all_2');
        Psquare.frame = 0;
        Psquare.name = '15';

        _this.space6Boxes.addChild(Psquare);

        var nameText = _this.add.text(45, 50, '+x²');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        Psquare.addChild(nameText);

        _this.Xincrease2 += 125;

    },

    PosX2: function () {
        _this.clickSound.play();

        let PosX;

        if (_this.Xincrease2 + 125 >= 925) {
            _this.wrongSound.play();
            return;
        }

        PosX = _this.add.image(_this.Xincrease2, _this.Yincrease2, 'pink2');
        PosX.frame = 0;
        PosX.name = '25';

        _this.space6Boxes.addChild(PosX);

        var nameText = _this.add.text(45, 0, '+x');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        PosX.addChild(nameText);

        _this.Xincrease2 += 125;
    },

    PosXY2: function () {
        _this.clickSound.play();

        let PosXY;

        if (_this.Xincrease2 + 125 >= 925) {
            _this.wrongSound.play();
            return;
        }

        PosXY = _this.add.image(_this.Xincrease2, _this.Yincrease2, 'all_1');
        PosXY.frame = 0;
        PosXY.name = '35';

        _this.space6Boxes.addChild(PosXY);

        var nameText = _this.add.text(45, 25, '+xy');
        _this.applyingWhite(nameText);
        nameText.fontSize = '26px';
        nameText.bringToTop();
        PosXY.addChild(nameText);

        _this.Xincrease2 += 125;

    },

    PosY2: function () {
        _this.clickSound.play();

        let PosY;

        if (_this.Xincrease2 + 85 >= 925) {
            _this.wrongSound.play();
            return;
        }

        PosY = _this.add.image(_this.Xincrease2, _this.Yincrease2, 'pink3');
        PosY.frame = 2;
        PosY.name = '45';

        _this.space6Boxes.addChild(PosY);

        var nameText = _this.add.text(25, 0, '+y');
        _this.applyingWhite(nameText);
        nameText.fontSize = '26px';
        nameText.bringToTop();
        PosY.addChild(nameText);

        _this.Xincrease2 += 85;

    },

    PosYSq2: function () {
        _this.clickSound.play();

        let PosY2;

        if (_this.Xincrease2 + 85 >= 925) {
            _this.wrongSound.play();
            return;
        }

        PosY2 = _this.add.image(_this.Xincrease2, _this.Yincrease2, 'all_4');
        PosY2.frame = 0;
        PosY2.name = '55';

        _this.space6Boxes.addChild(PosY2);

        var nameText = _this.add.text(25, 25, '+y²');
        _this.applyingWhite(nameText);
        nameText.fontSize = '28px';
        nameText.bringToTop();
        PosY2.addChild(nameText);

        _this.Xincrease2 += 85;
    },

    PosConst2: function () {
        _this.clickSound.play();

        let PosConst;

        if (_this.Xincrease2 + 35 >= 925) {
            _this.wrongSound.play();
            return;
        }

        PosConst = _this.add.image(_this.Xincrease2, _this.Yincrease2, 'pinkBig3');
        PosConst.frame = 2;
        PosConst.name = '65';


        _this.space6Boxes.addChild(PosConst);

        var nameText = _this.add.text(7, 7, '+1');
        _this.applyingWhite(nameText);
        nameText.fontSize = '18px';
        nameText.bringToTop();
        PosConst.addChild(nameText);

        _this.Xincrease2 += 35;

    },

    //Moving the eraser.
    eraserUpdate: function (target) {
        console.log("eraserUpdate")
        _this.world.bringToTop(_this.eraser)
        _this.eraser.scale.setTo(1)

    },
    //Erasing the top space objects. Part A
    eraserDrop1: function (target) {
        console.log("eraserDrop")
        for (let i = 0; i < _this.space1Boxes.length; i++) {
            if (_this.checkOverlap(target, _this.space1Boxes.getChildAt(i))) {
                if (_this.space1Boxes.getChildAt(i).name == '11' || _this.space1Boxes.getChildAt(i).name == '12' || _this.space1Boxes.getChildAt(i).name == '21' || _this.space1Boxes.getChildAt(i).name == '22') {
                    _this.verticalY -= 125;
                }
                else if (_this.space1Boxes.getChildAt(i).name == '31' || _this.space1Boxes.getChildAt(i).name == '32') {
                    _this.verticalY -= 35;
                }
                _this.space1Boxes.removeChild(_this.space1Boxes.getChildAt(i));
                // _this.space1Boxes.remove(_this.nameText, true);
                break;
            }
        }
        if (_this.space1Boxes.length == 0) {
            _this.verticalY = 200;
            _this.eraser.destroy();
            _this.eraser = _this.add.sprite(800, 85, 'eraser');
            _this.eraser.inputEnabled = true;
            _this.eraser.input.enableDrag(true);
            _this.eraser.input.useHandCursor = true;
            _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
            _this.eraser.events.onDragStop.add(_this.eraserDrop1, _this);
            return;
        }

        _this.space1Boxes.getChildAt(0).y = 200;
        console.log(_this.verticalY)
        for (let i = 1; i < _this.space1Boxes.length; i++) {
            if (_this.space1Boxes.getChildAt(i - 1).name == '11' || _this.space1Boxes.getChildAt(i - 1).name == '12')
                _this.space1Boxes.getChildAt(i).y = _this.space1Boxes.getChildAt(i - 1).y + 125;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '21' || _this.space1Boxes.getChildAt(i - 1).name == '22')
                _this.space1Boxes.getChildAt(i).y = _this.space1Boxes.getChildAt(i - 1).y + 125;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '31' || _this.space1Boxes.getChildAt(i - 1).name == '32')
                _this.space1Boxes.getChildAt(i).y = _this.space1Boxes.getChildAt(i - 1).y + 35;
        }

        _this.eraser.destroy();
        _this.eraser = _this.add.sprite(800, 85, 'eraser');
        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.input.useHandCursor = true;
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop1, _this);
    },
    //Erasing the bottom space objects.
    eraserDrop2: function (target) {
        console.log("eraserDrop")
        for (let i = 0; i < _this.space2Boxes.length; i++) {
            if (_this.checkOverlap(target, _this.space2Boxes.getChildAt(i))) {
                if (_this.space2Boxes.getChildAt(i).name == '11' || _this.space2Boxes.getChildAt(i).name == '12' || _this.space2Boxes.getChildAt(i).name == '21' || _this.space2Boxes.getChildAt(i).name == '22') {
                    _this.horizontalX -= 125;
                }
                else if (_this.space2Boxes.getChildAt(i).name == '31' || _this.space2Boxes.getChildAt(i).name == '32') {
                    _this.horizontalX -= 35;
                }
                _this.space2Boxes.removeChild(_this.space2Boxes.getChildAt(i));
                break;
            }
        }

        if (_this.space2Boxes.length == 0) {
            _this.eraser.destroy();
            _this.eraser = _this.add.sprite(800, 85, 'eraser');
            _this.eraser.inputEnabled = true;
            _this.eraser.input.enableDrag(true);
            _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
            _this.eraser.events.onDragStop.add(_this.eraserDrop2, _this);
            return;
        }

        _this.space2Boxes.getChildAt(0).x = 300;
        console.log(_this.horizontalX)
        for (let i = 1; i < _this.space2Boxes.length; i++) {
            if (_this.space2Boxes.getChildAt(i - 1).name == '11' || _this.space2Boxes.getChildAt(i - 1).name == '12')
                _this.space2Boxes.getChildAt(i).x = _this.space2Boxes.getChildAt(i - 1).x + 125;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '21' || _this.space2Boxes.getChildAt(i - 1).name == '22')
                _this.space2Boxes.getChildAt(i).x = _this.space2Boxes.getChildAt(i - 1).x + 125;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '31' || _this.space2Boxes.getChildAt(i - 1).name == '32')
                _this.space2Boxes.getChildAt(i).x = _this.space2Boxes.getChildAt(i - 1).x + 35;
        }


        _this.eraser.destroy();
        _this.eraser = _this.add.sprite(800, 85, 'eraser');
        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop2, _this);
    },
    eraserDrop3: function (target) {
        console.log('Eraser Drop 3')
        for (let i = 0; i < _this.space3Boxes.length; i++) {
            if (_this.checkOverlap(target, _this.space3Boxes.getChildAt(i))) {
                // Perform actions if overlap is detected

                _this.lastObject = _this.space3Boxes.getChildAt(i);
                _this.lastObject.destroy();

                var erasedPos = {
                    x: _this.lastObject.x,
                    y: _this.lastObject.y
                };

                _this.erasedObjectInitialPosition.push(erasedPos);
            }
        }

        // Sort the erased objects based on their x positions
        _this.erasedObjectInitialPosition.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });

        console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition after sorting')

        if (_this.space3Boxes.length == 0) {
            _this.eraser.destroy();
            _this.eraser = _this.add.sprite(800, 85, 'eraser');
            _this.eraser.inputEnabled = true;
            _this.eraser.input.enableDrag(true);
            _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
            _this.eraser.events.onDragStop.add(_this.eraserDrop3, _this);
            return;
        }

        _this.eraser.destroy();
        _this.eraser = _this.add.sprite(800, 85, 'eraser');
        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop3, _this);

    },

    // Erasing Part B Objects
    eraserDrop4: function (target) {
        console.log("eraserDrop")
        for (let i = 0; i < _this.space5Boxes.length; i++) {
            if (_this.checkOverlap(target, _this.space5Boxes.getChildAt(i))) {
                if (_this.space5Boxes.getChildAt(i).name == '10' || _this.space5Boxes.getChildAt(i).name == '15' || _this.space5Boxes.getChildAt(i).name == '20' || _this.space5Boxes.getChildAt(i).name == '25') {
                    _this.Yincrease -= 125;
                }
                if (_this.space5Boxes.getChildAt(i).name == '30' || _this.space5Boxes.getChildAt(i).name == '35' || _this.space5Boxes.getChildAt(i).name == '40' || _this.space5Boxes.getChildAt(i).name == '45' || _this.space5Boxes.getChildAt(i).name == '50' || _this.space5Boxes.getChildAt(i).name == '55') {
                    _this.Yincrease -= 85;
                }
                else if (_this.space5Boxes.getChildAt(i).name == '60' || _this.space5Boxes.getChildAt(i).name == '65') {
                    _this.Yincrease -= 35;
                }
                _this.space5Boxes.removeChild(_this.space5Boxes.getChildAt(i));
                break;
            }
        }
        if (_this.space5Boxes.length == 0) {
            _this.Yincrease = 200;
            _this.eraser.destroy();
            _this.eraser = _this.add.sprite(800, 85, 'eraser');
            _this.eraser.inputEnabled = true;
            _this.eraser.input.enableDrag(true);
            _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
            _this.eraser.events.onDragStop.add(_this.eraserDrop4, _this);
            return;
        }

        _this.space5Boxes.getChildAt(0).y = 200;
        for (let i = 1; i < _this.space5Boxes.length; i++) {
            if (_this.space5Boxes.getChildAt(i - 1).name == '10' || _this.space5Boxes.getChildAt(i - 1).name == '15') {
                _this.space5Boxes.getChildAt(i).y = _this.space5Boxes.getChildAt(i - 1).y + 125;
            }
            else if (_this.space5Boxes.getChildAt(i - 1).name == '20' || _this.space5Boxes.getChildAt(i - 1).name == '25') {
                _this.space5Boxes.getChildAt(i).y = _this.space5Boxes.getChildAt(i - 1).y + 125;
            }
            else if (_this.space5Boxes.getChildAt(i - 1).name == '30' || _this.space5Boxes.getChildAt(i - 1).name == '35') {
                _this.space5Boxes.getChildAt(i).y = _this.space5Boxes.getChildAt(i - 1).y + 85;
            }
            else if (_this.space5Boxes.getChildAt(i - 1).name == '40' || _this.space5Boxes.getChildAt(i - 1).name == '45') {
                _this.space5Boxes.getChildAt(i).y = _this.space5Boxes.getChildAt(i - 1).y + 85;
            }
            else if (_this.space5Boxes.getChildAt(i - 1).name == '50' || _this.space5Boxes.getChildAt(i - 1).name == '55') {
                _this.space5Boxes.getChildAt(i).y = _this.space5Boxes.getChildAt(i - 1).y + 85;
            }
            else if (_this.space5Boxes.getChildAt(i - 1).name == '60' || _this.space5Boxes.getChildAt(i - 1).name == '65') {
                _this.space5Boxes.getChildAt(i).y = _this.space5Boxes.getChildAt(i - 1).y + 35;
            }

        }


        _this.eraser.destroy();
        _this.eraser = _this.add.sprite(800, 85, 'eraser');
        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop4, _this);
    },

    eraserDrop5: function (target) {
        for (let i = 0; i < _this.space6Boxes.length; i++) {
            if (_this.checkOverlap(target, _this.space6Boxes.getChildAt(i))) {
                if (_this.space6Boxes.getChildAt(i).name == '10' || _this.space6Boxes.getChildAt(i).name == '15' || _this.space6Boxes.getChildAt(i).name == '20' || _this.space6Boxes.getChildAt(i).name == '25') {
                    _this.Xincrease2 -= 125;
                }
                if (_this.space6Boxes.getChildAt(i).name == '30' || _this.space6Boxes.getChildAt(i).name == '35' || _this.space6Boxes.getChildAt(i).name == '40' || _this.space6Boxes.getChildAt(i).name == '45' || _this.space6Boxes.getChildAt(i).name == '50' || _this.space6Boxes.getChildAt(i).name == '55') {
                    _this.Xincrease2 -= 125;
                }
                else if (_this.space6Boxes.getChildAt(i).name == '60' || _this.space6Boxes.getChildAt(i).name == '65') {
                    _this.Xincrease2 -= 35;
                }
                _this.space6Boxes.removeChild(_this.space6Boxes.getChildAt(i));
                break;
            }
        }

        console.log("eraserDrop")
        if (_this.space6Boxes.length == 0) {
            _this.Xincrease2 = 300;
            _this.eraser.destroy();
            _this.eraser = _this.add.sprite(800, 85, 'eraser');
            _this.eraser.inputEnabled = true;
            _this.eraser.input.enableDrag(true);
            _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
            _this.eraser.events.onDragStop.add(_this.eraserDrop5, _this);
            return;
        }

        _this.space6Boxes.getChildAt(0).x = 300;
        for (let i = 1; i < _this.space6Boxes.length; i++) {
            if (_this.space6Boxes.getChildAt(i - 1).name == '10' || _this.space6Boxes.getChildAt(i - 1).name == '15') {
                _this.space6Boxes.getChildAt(i).x = _this.space6Boxes.getChildAt(i - 1).x + 125;
            }
            else if (_this.space6Boxes.getChildAt(i - 1).name == '20' || _this.space6Boxes.getChildAt(i - 1).name == '25') {
                _this.space6Boxes.getChildAt(i).x = _this.space6Boxes.getChildAt(i - 1).x + 125;
            }
            else if (_this.space6Boxes.getChildAt(i - 1).name == '30' || _this.space6Boxes.getChildAt(i - 1).name == '35') {
                _this.space6Boxes.getChildAt(i).x = _this.space6Boxes.getChildAt(i - 1).x + 125;
            }
            else if (_this.space6Boxes.getChildAt(i - 1).name == '40' || _this.space6Boxes.getChildAt(i - 1).name == '45') {
                _this.space6Boxes.getChildAt(i).x = _this.space6Boxes.getChildAt(i - 1).x + 85;
            }
            else if (_this.space6Boxes.getChildAt(i - 1).name == '50' || _this.space6Boxes.getChildAt(i - 1).name == '55') {
                _this.space6Boxes.getChildAt(i).x = _this.space6Boxes.getChildAt(i - 1).x + 85;
            }
            else if (_this.space6Boxes.getChildAt(i - 1).name == '60' || _this.space6Boxes.getChildAt(i - 1).name == '65') {
                _this.space6Boxes.getChildAt(i).x = _this.space6Boxes.getChildAt(i - 1).x + 35;
            }

        }

        _this.eraser.destroy();
        _this.eraser = _this.add.sprite(800, 85, 'eraser');
        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop5, _this);
    },

    eraserDrop6: function (target) {
        console.log('Eraser Drop 6')
        for (let i = 0; i < _this.space7Boxes.length; i++) {
            if (_this.checkOverlap(target, _this.space7Boxes.getChildAt(i))) {
                // Perform actions if overlap is detected

                _this.lastObject = _this.space7Boxes.getChildAt(i);
                _this.lastObject.destroy();

                var erasedPos = {
                    x: _this.lastObject.x,
                    y: _this.lastObject.y
                };

                _this.erasedObjectInitialPosition.push(erasedPos);
            }
        }

        // Sort the erased objects based on their x positions
        _this.erasedObjectInitialPosition.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });

        console.log(_this.erasedObjectInitialPosition, '_this.erasedObjectInitialPosition after sorting')

        if (_this.space7Boxes.length == 0) {
            _this.eraser.destroy();
            _this.eraser = _this.add.sprite(800, 85, 'eraser');
            _this.eraser.inputEnabled = true;
            _this.eraser.input.enableDrag(true);
            _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
            _this.eraser.events.onDragStop.add(_this.eraserDrop6, _this);
            return;
        }



        _this.eraser.destroy();
        _this.eraser = _this.add.sprite(800, 85, 'eraser');
        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop6, _this);

    },
    //Clicking the right button from the number pad.
    rightbtnClicked: function () {
        console.log('right btn clicked')
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        // Evaluating negative numbers.

        _this.matches = _this.equation.match(/^(-?\d*)([a-zA-Z]*)\^?(\d*)$/);

        _this.matches2 = _this.equation2.match(/^(-?\d*)([a-zA-Z]*)\^?(\d*)$/);

        // Extract the coefficient and variable parts
        _this.coefficientAns = _this.matches[1];
        _this.coefficientAns2 = _this.matches2[1];

        // Output the coefficient and variable parts
        console.log("Coefficient: " + _this.coefficientAns); // Output: -8
        console.log("coefficient2: " + _this.coefficientAns2); // Output: x

        _this.FinalTerm = Number(_this.coefficientAns * _this.coefficientAns2);
        console.log(_this.FinalTerm, '_this.FinalTerm')
        console.log(_this.finalval1, '_this.finalval1')

        if (_this.FinalTerm < 0) {
            console.log('negative')
            if (_this.finalval1.length == 0 && _this.signNotselected1 == true) {
                console.log(' minus entered........................')
                _this.finalval1 = Number('-1');
            } else {
                _this.finalval1 = Number('-' + _this.finalval1)
            }
            if (_this.finalval1 == _this.FinalTerm && _this.signNotselected1 == true && _this.signNotselected2 == false) {
                console.log('negative sign entered')
                _this.numGroup.destroy();
                _this.celebrationSound.play();
                _this.AnswerBox1.frame = 0;
            }
            else {
                _this.wrongSound.play();
                _this.disableInputs1();

                _this.AnswerBox1.frame = 1;

                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
                for (let i = 1; i <= 12; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
                }
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.input.useHandCursor = true;
                return;
            }

        } else if (_this.FinalTerm > 0) {
            console.log('positive')
            if (_this.finalval1 === '+1' || _this.finalval1 === '') {
                console.log('entering -1 or - valueeeeeeeeeeee')
                _this.finalval1 = Number('1');
            }
            if (_this.finalval1 == _this.FinalTerm && _this.signNotselected1 == false) {
                _this.numGroup.destroy();
                _this.celebrationSound.play();
                _this.AnswerBox1.frame = 0;

            } else {
                _this.wrongSound.play();
                _this.disableInputs1();

                _this.AnswerBox1.frame = 1;

                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
                for (let i = 1; i <= 12; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
                }
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.input.useHandCursor = true;
                return;
            }
        }

        //edited for baseurl apk
        _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
        //..............

        console.log(_this.noofAttempts, "_this.noofAttempts.................");
        console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
        console.log(_this.sceneCount, "_this.sceneCount.................");
        console.log(_this.questionid, "_this.questionid.................");


        _this.starActions();
        _this.time.events.add(4000, () => {
            _this.clearAll();
            if (_this.numberOfQuestions == 6) {
                // _this.state.start('AL_MUL1_G8Score');
                // _this.state.start('score');
                _this.state.start('score', true, false, gameID, _this.microConcepts);
            }
            else {
                _this.NextQuestion();
            }
        });
    },

    rightbtnClicked2: function () {
        console.log('right btn clicked')
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        _this.rightbtn_is_Clicked = true;
        // Evaluating negative numbers.

        _this.matches = _this.equation.match(/^(-?\d*)([a-zA-Z]*)\^?(\d*)$/);

        _this.matches2 = _this.equation2.match(/^(-?\d*)([a-zA-Z]*)\^?(\d*)$/);

        // Extract the coefficient and variable parts
        _this.coefficientAns = _this.matches[1];
        _this.coefficientAns2 = _this.matches2[1];

        // Output the coefficient and variable parts
        console.log("Coefficient: " + _this.coefficientAns); // Output: -8
        console.log("coefficient2: " + _this.coefficientAns2); // Output: x

        _this.FinalTerm = Number(_this.coefficientAns * _this.coefficientAns2);
        console.log(_this.FinalTerm, '_this.FinalTerm')
        console.log(_this.finalval1, '_this.finalval1')


        if (_this.FinalTerm < 0) {
            console.log('negative')
            if (_this.finalval1.length == 0 && _this.signNotselected1 == true) {
                console.log(' minus entered........................')
                _this.finalval1 = Number('-1');
            } else {
                _this.finalval1 = Number('-' + _this.finalval1)
            }
            if (_this.finalval1 == _this.FinalTerm && _this.signNotselected1 == true && _this.signNotselected2 == false) {
                console.log('negative sign entered')
                _this.numGroup.destroy();
                _this.celebrationSound.play();
                _this.AnswerBox1.frame = 0;
            } else {
                _this.wrongSound.play();
                _this.disableInputs1();

                _this.AnswerBox1.frame = 1;

                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
                for (let i = 1; i <= 12; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
                }
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.input.useHandCursor = true;
                return;
            }


        } else if (_this.FinalTerm > 0) {
            console.log('positive')
            if (_this.finalval1 === '+1' || _this.finalval1 === '') {
                console.log('entering -1 or - valueeeeeeeeeeee')
                _this.finalval1 = Number('1');
            }
            if (_this.finalval1 == _this.FinalTerm && _this.signNotselected1 == false) {
                _this.numGroup.destroy();
                _this.celebrationSound.play();
                _this.AnswerBox1.frame = 0;
            } else {
                _this.wrongSound.play();
                _this.disableInputs1();

                _this.AnswerBox1.frame = 1;

                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
                for (let i = 1; i <= 12; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
                }
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.input.useHandCursor = true;
                return;
            }
        }

        //edited for baseurl apk
        _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
        //..............

        console.log(_this.noofAttempts, "_this.noofAttempts.................");
        console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
        console.log(_this.sceneCount, "_this.sceneCount.................");
        console.log(_this.questionid, "_this.questionid.................");


        _this.starActions();
        _this.time.events.add(4000, () => {
            _this.clearAll2();
            if (_this.numberOfQuestions == 6) {
                // _this.state.start('AL_MUL1_G8Score');
                // _this.state.start('score');
                _this.state.start('score', true, false, gameID, _this.microConcepts);
            }
            else {
                _this.NextQuestion();
            }
        });
    },

    //Adding the numberpad.
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
        _this.x = 40;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;
        for (var i = 0; i < 12; i++) {
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
        _this.x = 40;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;
        for (var i = 0; i < 12; i++) {
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
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);

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
    //for clearing the answer box.
    wrongbtnClicked1: function (target) {
        _this.clickSound.play();
        _this.disableInputs1();
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
    //for clearing the answer box.

    //Displaying the clicked number.
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
            _this.enterTxt1 = _this.add.text(10, 3, "" + _this.signVal1 + _this.finalval1, { fontSize: '18' });

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
            else if (_this.finalval1.length == 3) {
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
            _this.enterTxt1 = _this.add.text(10, 3, "" + _this.signVal1 + _this.finalval1, { fontSize: '18' });

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
            else if (_this.finalval1.length == 3) {
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

    //Tween  the numberpad.
    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);
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
        _this.space3Boxes.destroy();
        _this.numGroup.destroy();

        _this.textBox.destroy();

        _this.AnswerBox1.destroy();

        _this.Question_flag = 4;

        _this.space1.destroy();

        _this.green_2Dup.events.onDragStop.removeAll();
        _this.green_3Dup.events.onDragStop.removeAll();
        _this.pink_2Dup.events.onDragStop.removeAll();
        _this.pink_3Dup.events.onDragStop.removeAll();

        _this.green_2Dup.destroy();
        _this.green_3Dup.destroy();

        _this.pink_3Dup.destroy();
        _this.pink_2Dup.destroy();
    },

    clearAll2: function () {
        _this.space7Boxes.destroy();
        _this.numGroup.destroy();

        _this.textBox.destroy();

        _this.AnswerBox1.destroy();
        _this.space1.destroy();

        _this.green_5Dup.events.onDragStop.removeAll();
        _this.green_6Dup.events.onDragStop.removeAll();
        _this.pink_5Dup.events.onDragStop.removeAll();
        _this.pink_6Dup.events.onDragStop.removeAll();
        _this.green_YDup.events.onDragStop.removeAll();
        _this.pink_YDup.events.onDragStop.removeAll();

        _this.green_5Dup.destroy();
        _this.green_6Dup.destroy();

        _this.pink_5Dup.destroy();
        _this.pink_6Dup.destroy();

        _this.green_YDup.destroy();
        _this.pink_YDup.destroy();

        _this.Question_flag = 1;
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
        console.log("starActions")
        //edited for baseurl apk
        _this.AnsTimerCount = 0;

        starAnim = _this.starsGroup.getChildAt(_this.numberOfQuestions);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        _this.numberOfQuestions++;
        anim.play();

        //edited for baseurl apk
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
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL1-G8/" + _this.languageSelected + "/AL_MUL1_G8_d1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL1-G8/" + _this.languageSelected + "/AL_MUL1_G8_d2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL1-G8/" + _this.languageSelected + "/AL_MUL1_G8_d3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        // QUESTION AUDIOS
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL1-G8/" +
            _this.languageSelected + "/AL_MUL1_G8_a1.mp3");//multyplay algeb expre
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL1-G8/" +
            _this.languageSelected + "/AL_MUL1_G8_a2.mp3");//place any one side
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL1-G8/" +
            _this.languageSelected + "/AL_MUL1_G8_a3.mp3");//place other side
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL1-G8/" +
            _this.languageSelected + "/AL_MUL1_G8_a4.mp3");//fill the area
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL1-G8/" +
            _this.languageSelected + "/AL_MUL1_G8_a5.mp3");//zero pair
        _this.q5Sound.appendChild(_this.q5Soundsrc);

        _this.q6Sound = document.createElement('audio');
        _this.q6Soundsrc = document.createElement('source');
        _this.q6Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL1-G8/" +
            _this.languageSelected + "/AL_MUL1_G8_a6.mp3");//enter ans
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