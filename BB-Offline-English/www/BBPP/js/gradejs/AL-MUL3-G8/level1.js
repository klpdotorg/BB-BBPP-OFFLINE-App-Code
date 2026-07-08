Game.AL_MUL3_G8level1 = function () { };


Game.AL_MUL3_G8level1.prototype =
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
        // _this.snapSoundsrc.setAttribute("src", "sounds/snapSound.mp3");
        // _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.framechange = document.createElement('audio');
        _this.framechangesrc = document.createElement('source');
        _this.framechangesrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);

        _this.pairing = document.createElement('audio');
        _this.pairingsrc = document.createElement('source');
        _this.pairingsrc.setAttribute("src", window.baseUrl + "sounds/Power Up.mp3");
        _this.pairing.appendChild(_this.pairingsrc);

        _this.tweening = document.createElement('audio');
        _this.tweeningsrc = document.createElement('source');
        _this.tweeningsrc.setAttribute("src", window.baseUrl + "sounds/Unlock Skill.mp3");
        _this.tweening.appendChild(_this.tweeningsrc);


        _this.Ask_Question1 = _this.createAudio("AL_MUL3_G8_a1");
        _this.Ask_Question2 = _this.createAudio("AL_MUL3_G8_a2");
        _this.Ask_Question3 = _this.createAudio("AL_MUL3_G8_a3");
        _this.Ask_Question4 = _this.createAudio("AL_MUL3_G8_a4");
        _this.Ask_Question5 = _this.createAudio("AL_MUL3_G8_a5");
        _this.Ask_Question6 = _this.createAudio("AL_MUL3_G8_a6");

        //edited for baseurl online apk
        telInitializerbbpp.gameIdInit("AL_MUL3_G8", gradeSelected);
        console.log(gameID, "gameID...");
    },
    create: function (game) {
        //for api
        _this.hintBtn = _this.add.sprite(670, 6, 'bulb');
        _this.hintBtn.scale.setTo(0.5, 0.6);
        _this.hintBtn.visible = false;

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
        _this.Flag1 = 0;
        _this.Flag2 = 0;

        _this.count1 = 0;

        _this.erasedPositions = [];
        _this.erasedObjectInitialPosition = [];

        _this.erasedPos1 = [];
        _this.erasedPos2 = [];
        _this.erasedPos3 = [];
        _this.erasedPos4 = [];

        _this.erasedPos5 = [];
        _this.erasedPos6 = [];
        _this.erasedPos7 = [];
        _this.erasedPos8 = [];

        _this.erasedPos9 = [];
        _this.erasedPos10 = [];
        _this.erasedPos11 = [];
        _this.erasedPos12 = [];
        _this.erasedPos13 = [];

        _this.destroyedPositions = [];
        _this.destroyedPositions2 = [];
        _this.destroyedPositions3 = [];
        _this.destroyedPositions4 = [];
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

        _this.destroyWrongPos = [];
        _this.destroyWrongPos2 = [];
        _this.destroyWrongPos3 = [];
        _this.destroyWrongPos4 = [];
        _this.toDestroyObj = [];

        // no zero pairing but destroy wrong

        _this.destroyWrongObj = [];
        _this.destroyWrongObj2 = [];
        _this.destroyWrongObj3 = [];
        _this.destroyWrongObj4 = [];

        _this.destroyWrongObj5 = [];
        _this.destroyWrongObj6 = [];
        _this.destroyWrongObj7 = [];
        _this.destroyWrongObj8 = [];

        _this.destroyWrongObj9 = [];
        _this.destroyWrongObj10 = [];
        _this.destroyWrongObj11 = [];
        _this.destroyWrongObj12 = [];

        _this.destroyWrongObj13 = [];
        _this.destroyWrongObj14 = [];
        _this.destroyWrongObj15 = [];
        _this.destroyWrongObj16 = [];

        _this.toDestroyWrong = [];

        _this.reArrange = false;
        _this.reArrangePos = [];

        _this.reArrange2 = false;
        _this.reArrangePos2 = [];

        _this.multiplyValue2;
        _this.multiplyValue;

        //part b variables
        _this.ValidationFlag1 = 0;
        _this.ValidationFlag2 = 0;
        _this.ValidationFlag3 = 0;
        _this.ValidationFlag4 = 0;

        _this.counterForTimer = 0;

        _this.namesArray = [];

        // Store obj to drag vertical or horizontal
        _this.storeObjPositions1 = [];
        _this.storeObjPositions3 = [];
        _this.storeObjects1 = [];
        _this.Dragvertical = 0;

        _this.storeObjPositions2 = [];
        _this.storeObjPositions4 = [];
        _this.storeObjects2 = [];
        _this.Draghorizontal = 0;

        _this.storeObjPositions5 = [];

        _this.objPositions = []; // y2
        _this.objPositions2 = []; // x2
        _this.objPositions3 = []; // x ver
        _this.objPositions4 = []; // x hor
        _this.objPositions5 = []; // const
        _this.objPositions6 = []; // const
        _this.objPositions7 = []; // y ver
        _this.objPositions8 = []; // y hor
        _this.objPositions9 = [];
        _this.objPositions10 = [];
        _this.objPositions11 = [];
        _this.objPositions12 = [];

        _this.objPositions13 = [];
        _this.objPositions14 = [];

        _this.objPositions15 = [];
        _this.objPositions16 = [];


        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'BG1');
        //** include the background file, navigation bar, stars, timer objects.
        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            // _this.state.start('AL_MUL3_G8Score');

            _this.state.start('grade8Algebra', true, false);
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if (_this.Question_flag == 0) {
                    _this.pauseVoice();
                    _this.Ask_Question1.play();
                }
                if (_this.Question_flag == 1) {
                    _this.pauseVoice();
                    _this.Ask_Question2.play();
                }
                if (_this.Question_flag == 2) {
                    _this.pauseVoice();
                    _this.Ask_Question3.play();
                }
                if (_this.Question_flag == 3) {
                    _this.pauseVoice();
                    _this.Ask_Question4.play();
                }
                if (_this.Question_flag == 4) {
                    _this.pauseVoice();
                    _this.Ask_Question5.play();
                }
                if (_this.Question_flag == 5) {
                    _this.pauseVoice();
                    _this.Ask_Question6.play();
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
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/AL_MUL3_G8/" + _this.languageSelected + "/" + src + ".mp3");
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

        //for api
        //* hintbtn will be true when the game is playing
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1; //for api


        _this.DecideQuestion();

    },
    stopVoice: function () {
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
    },

    DecideQuestion: function () {

        _this.pauseVoice();
        if (_this.count1 == 0) {
            _this.Ask_Question1.play();
        }
        _this.Question_flag = 0;
        if (_this.count1 == 0) {
            _this.Ask_Question1.addEventListener('ended', () => {
                _this.Ask_Question2.play();
                _this.Question_flag = 1;
            });

        }
        _this.Question_flag = 1;

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
            _this.state.start('score', true, false, gameID, _this.microConcepts);
            // _this.time.events.add(1000, function () { _this.state.start('score') });
        }
    },

    //Creating the question.
    QuestionFormation: function () {
        _this.sign = ['+', '-'];
        Phaser.ArrayUtils.shuffle(_this.sign);

        _this.EqSign1 = _this.sign[0];
        _this.EqSign2 = _this.sign[1];
        // Array to store generated equations
        _this.generatedEquations = [];
        // Loop to generate the desired number of equations
        _this.a = getRandomNumber(1, 1); // Random coefficient for x term
        _this.b = getRandomNumber(1, 3); // Random constant term

        _this.c = getRandomNumber(2, 3); // Random coefficient for x term
        _this.d = getRandomNumber(1, 3); // Random constant term

        _this.equation = '(' + 'x ' + _this.EqSign1 + ' ' + _this.b + ')' + '  ' + '*' + ' ' + '(' + _this.c + 'x ' + _this.EqSign2 + ' ' + (_this.d) + ')';

        _this.generatedEquations.push(_this.equation);

        // Function to generate random number within a range
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Output the generated equations
        console.log(_this.generatedEquations);
        console.log(_this.generatedEquations[0]);

        //multiplied in the form (ax+b) * (cx + d) = ax*cx + ax*d + b*cx + b*d;
        _this.simplified = (_this.a * _this.c) + 'x²' + (_this.EqSign2 + (_this.a * _this.d)) + 'x ' + (_this.EqSign1 + (_this.b * _this.c)) + 'x ' + (parseInt(_this.EqSign1 + _this.b) * parseInt(_this.EqSign2 + _this.d));
        console.log(_this.simplified, 'step 1');

        _this.first = (_this.a * _this.c) //ax*cx
        _this.second = parseInt(((_this.a * _this.d) - (_this.b * _this.c))); // ax*d + b*cx
        _this.third = (parseInt(_this.EqSign1 + _this.b) * parseInt(_this.EqSign2 + _this.d)); //b*d

        // further simplied into acx² + axd+/-bcx + bd;
        _this.simplified2 = _this.first + 'x²' + _this.second + 'x' + _this.third;

        console.log(_this.simplified2, 'step 2');
        console.log(_this.first, _this.second, _this.third);

        console.log(_this.a)
        console.log(parseInt(_this.EqSign1 + _this.b));
        console.log(_this.c)
        console.log(parseInt(_this.EqSign2 + _this.d))

        if (_this.EqSign1 === '-') {
            _this.b = -_this.b;
        } else {
            _this.b = +_this.b;
        }

        if (_this.EqSign2 === '-') {
            _this.d = -_this.d;
        } else {
            _this.d = +_this.d;
        }

        _this.splitSecond_1 = parseInt(_this.a * _this.d);
        _this.splitSecond_2 = parseInt(_this.b * _this.c);

        _this.varResult = _this.splitSecond_1 + _this.splitSecond_2;

        console.log(_this.splitSecond_1, _this.splitSecond_2, 'spliting');
        console.log(_this.varResult, '_this.varResult')

    },

    QuestionFormation2: function () {
        console.log('QuestionFormation2')
        //** A monomial equation is an algebraic equation that contains only one term. The term is a product of a constant and one or more variables raised to non-negative integer exponents.  */
        //** Example: (3x) * (2) ,  (2) * (4x) , (3) * (2)  as both positve and negative terms*/
        //** To form a monomial equation we need degree(3) coefficient(x or y) and constant (2) = (3x) * (2) */

        //* First term of Monomial Equation //
        _this.sign = ['+', '-'];

        _this.EqSign1 = _this.sign[0];
        _this.EqSign2 = _this.sign[1];

        //zero pairing part///
        _this.signSelect = ['+', '-'];
        Phaser.ArrayUtils.shuffle(_this.signSelect);

        _this.EqSign3 = _this.signSelect[0];
        _this.EqSign4 = _this.signSelect[1];
        //zero pairing part end///

        // Array to store generated equations
        _this.generatedEquations = [];

        _this.decideSign = [1, 2, 3, 4]; // decide 1 + or 2 - or + and 3 -
        shuffleArray(_this.decideSign);
        console.log(_this.decideSign, 'decide')

        _this.zeroPair = [1, 2]; // if 1 no zero pairing equation, if 2 then zeropairing with y values
        shuffleArray(_this.zeroPair);
        console.log(_this.zeroPair, 'zeroPair')

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Loop to generate the desired number of equations
        _this.a = getRandomNumber(1, 1); // Random coefficient for x term

        _this.a1 = getRandomNumber(1, 1);

        _this.b = getRandomNumber(1, 3); // Random coefficient for y term
        _this.c = getRandomNumber(1, 4); // Random const term

        _this.d = getRandomNumber(2, 2); // Random coefficient for x term
        _this.e = getRandomNumber(2, 3); // Random coefficient for y term
        _this.f = getRandomNumber(2, 4); // Random const term

        _this.e1 = getRandomNumber(2, 4); // for decide 1 y value

        // zero pairing // 
        _this.p = getRandomNumber(1, 1); // Random coefficient for x term
        _this.q = getRandomNumber(2, 4); // Random constant term

        _this.r = getRandomNumber(2, 3); // Random coefficient for x term
        _this.s = getRandomNumber(2, 4); // Random constant term


        if (_this.zeroPair[0] == 1) {
            if (_this.decideSign[0] === 1) {
                _this.equation = '(' + 'x ' + _this.EqSign1 + ' ' + 'y' + ')' + '  ' + '*' + ' ' + '(' + _this.e1 + 'y ' + _this.EqSign1 + ' ' + (_this.f) + ')';
                _this.generatedEquations.push(_this.equation); // generate positive equations
            } else if (_this.decideSign[0] === 2) {
                _this.equation = '(' + 'y ' + _this.EqSign2 + ' ' + _this.c + ')' + '   ' + '*' + ' ' + '(' + _this.d + 'x ' + _this.EqSign2 + ' ' + _this.e + 'y' + ')';
                _this.generatedEquations.push(_this.equation);
            } else if (_this.decideSign[0] === 3) {
                _this.equation = '(' + 'x ' + _this.EqSign1 + ' ' + _this.b + ')' + '  ' + '*' + '' + '(' + _this.d + 'x ' + _this.EqSign1 + ' ' + _this.e + 'y' + ')';
                _this.generatedEquations.push(_this.equation);
            } else if (_this.decideSign[0] === 4) {
                _this.equation = '(' + _this.EqSign2 + 'y ' + _this.EqSign2 + ' ' + _this.f + ')' + '  ' + '*' + '  ' + '(' + 'x ' + _this.EqSign2 + ' ' + 'y' + ')';
                _this.generatedEquations.push(_this.equation);
            }

        }
        else if (_this.zeroPair[0] == 2) {
            _this.equation = '(' + 'y ' + _this.EqSign3 + ' ' + _this.q + ')' + '  ' + '*' + '  ' + '(' + _this.r + 'y ' + _this.EqSign4 + ' ' + (_this.s) + ')';
            _this.generatedEquations.push(_this.equation);

        }


        // Function to generate random number within a range
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Output the generated equations
        console.log(_this.generatedEquations);
        console.log(_this.generatedEquations[0]);

        if (_this.zeroPair[0] == 1) {
            console.log('No pairing')
            if (_this.EqSign2 == '-') {
                _this.c = -_this.c;
            }
            if (_this.decideSign[0] == 1) { // (a + a1) * (e1 + f)
                _this.pair1 = (_this.a * _this.e1)
                _this.pair2 = (_this.a * _this.f)
                _this.pair3 = (_this.a1 * _this.e1)
                _this.pair4 = (_this.a1 * _this.f)

                // further simplied into acx² + axd+/-bcx + bd;
                _this.simplified2 = _this.pair1 + 'xy' + _this.pair2 + 'x' + _this.pair3 + 'y²' + _this.pair4 + 'y';

                console.log(_this.simplified2, 'step 2');
                console.log(_this.pair1, _this.pair2, _this.pair3, _this.pair4);
            }
            else if (_this.decideSign[0] == 2) { // (a1 + c) * (d + e)
                _this.e = -_this.e;

                _this.pair1 = (_this.a1 * _this.d)
                _this.pair2 = (_this.a1 * _this.e)
                _this.pair3 = (_this.c * _this.d)
                _this.pair4 = (_this.c * _this.e)

                // further simplied into acx² + axd+/-bcx + bd;
                _this.simplified2 = _this.pair1 + 'xy' + _this.pair2 + 'y²' + _this.pair3 + 'x' + _this.pair4 + 'y';

                console.log(_this.simplified2, 'step 2');
                console.log(_this.pair1, _this.pair2, _this.pair3, _this.pair4);
            }
            else if (_this.decideSign[0] == 3) { // (a + b) * (d + e)
                _this.pair1 = (_this.a * _this.d)
                _this.pair2 = (_this.a * _this.e)
                _this.pair3 = (_this.b * _this.d)
                _this.pair4 = (_this.b * _this.e)

                // further simplied into acx² + axd+/-bcx + bd;
                _this.simplified2 = _this.pair1 + 'x²' + _this.pair2 + 'xy' + _this.pair3 + 'x' + _this.pair4 + 'y';

                console.log(_this.simplified2, 'step 2');
                console.log(_this.pair1, _this.pair2, _this.pair3, _this.pair4);
            }
            else if (_this.decideSign[0] === 4) { // (a1 - f) * (a * a1)
                _this.a1 = -_this.a1;
                _this.f = -_this.f;
                _this.pair1 = (_this.a1 * _this.a)
                _this.pair2 = (_this.a1 * _this.a1)
                _this.pair3 = (_this.f * _this.a)
                _this.pair4 = (_this.f * _this.a1)

                // further simplied into acx² + axd+/-bcx + bd;
                _this.simplified2 = _this.pair1 + 'yx' + _this.pair2 + 'y²' + _this.pair3 + 'x' + _this.pair4 + 'y';

                console.log(_this.simplified2, 'step 2');
                console.log(_this.pair1, _this.pair2, _this.pair3, _this.pair4);
            }


        } else {
            console.log('pairing +ve and -ve')
            _this.four = (_this.p * _this.r) //ax*cx
            _this.five = parseInt(((_this.p * _this.s) - (_this.q * _this.r))); // ax*d + b*cx
            _this.six = (parseInt(_this.EqSign3 + _this.q) * parseInt(_this.EqSign4 + _this.s)); //b*d

            _this.simplified3 = _this.four + 'y²' + _this.five + 'y' + _this.six;

            console.log(_this.simplified3, 'step 2');
            console.log(_this.four, _this.five, _this.six);

            console.log(_this.p)
            console.log(parseInt(_this.EqSign3 + _this.b));
            console.log(_this.r)
            console.log(parseInt(_this.EqSign4 + _this.d))

            if (_this.EqSign3 === '-') {
                _this.q = -_this.q;
            } else {
                _this.q = +_this.q;
            }

            if (_this.EqSign4 === '-') {
                _this.s = -_this.s;
            } else {
                _this.s = +_this.s;
            }

            _this.splitSecond_3 = parseInt(_this.p * _this.s);
            _this.splitSecond_4 = parseInt(_this.q * _this.r);

            console.log(_this.splitSecond_3, _this.splitSecond_4, 'spliting');

            _this.resultVar = _this.splitSecond_3 + _this.splitSecond_4;
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
    //this function is used for showing the question.

    InitialScreen: function () {
        //for api
        //edited for baseurl apk
        _this.sceneCount++;
        _this.noofAttempts = 0;
        //....

        _this.power = "\u{00B2}";

        console.log("AskingQuestion")

        _this.textBox = _this.add.sprite(235, 80, 'Text box_1');
        _this.textBox.frame = 0;

        _this.DisplayEquation = _this.add.text(45, 19, _this.equation);
        _this.applyingStyleBlue(_this.DisplayEquation);
        _this.textBox.addChild(_this.DisplayEquation);

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
        _this.greenXSqX = 301;
        _this.greenXSqY = 200;

        _this.greenX = 301;
        _this.greenY = 203;

        _this.greenConstX = 300;
        _this.greenConstY = 200;

        _this.greenXSq_Dup = _this.add.image(45, 280, 'greenSmall1');
        _this.letterA.bringToTop();

        _this.pinkYSq_Dup = _this.add.image(155, 280, 'pinkSmall1');
        _this.letterB.bringToTop();

        _this.Group1 = [];
        _this.Group2 = [];

    },

    InitialScreen2: function () {
        //for api
        //edited for baseurl apk
        _this.sceneCount++;
        _this.noofAttempts = 0;
        //....

        _this.power = "\u{00B2}";

        console.log("AskingQuestion 2")
        _this.textBox = _this.add.sprite(250, 80, 'Text box_1');
        _this.textBox.scale.setTo(1.07, 1);
        _this.textBox.frame = 0;

        _this.DisplayEquation = _this.add.text(295, 100, _this.generatedEquations);
        _this.applyingStyleBlue(_this.DisplayEquation);
        // _this.textBox.addChild(_this.DisplayEquation);

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

        _this.Group3 = [];
        _this.Group4 = [];
    },

    //Tick button in the question screen and the evaluation of the top box or workspace.
    tickEvaluation: function (target) {
        console.log("tick first evaluation");
        _this.clickSound.play();

        let a = [];
        let b = [];
        a.push(0);
        a.push(0);

        b.push(0);
        b.push(0);

        var CorrectCount = 0;
        _this.orderC = 0;

        for (let i = 0; i < _this.space1Boxes.length; i++) {
            if (_this.space1Boxes.getChildAt(i).name == '21') {
                a[0] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '22') {
                b[0] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '31') {
                a[1] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '32') {
                b[1] += 1;
            }
        }

        _this.Array1 = [];
        _this.Array2 = [];

        _this.Array1.push(0); _this.Array1.push(0);
        _this.Array2.push(0); _this.Array2.push(0);

        if ((a[0] == 0 && b[0] == _this.a) && (a[1] == _this.b && b[1] == 0) || (a[0] == 0 && b[0] == _this.a) && (a[1] == 0 && b[1] == _this.b)) {
            // _this.orderC = 1;
            // for (let i = 0; i < _this.a; i++) {
            //     if (_this.space1Boxes.getChildAt(i).name == '22') CorrectCount++;
            // }
            // console.log(CorrectCount, 'CorrectCount')
            // if (CorrectCount === _this.a && _this.orderC === 1) _this.Flag1 = 1;
            // else _this.Flag1 = 0;
            _this.Flag1 = 1;
            console.log('correct', a[0], b[0], a[1], b[1])
            _this.Array1[0] = a[0];
            _this.Array1[1] = b[0];
            _this.Array2[0] = a[1];
            _this.Array2[1] = b[1];
        } else {
            _this.Flag1 = 0;
            console.log('wrong', a[0], b[0], a[1], b[1])
        }


        if (_this.Flag1 === 1) {
            // _this.framechange.play();
            _this.counterCelebrationSound.play();
            target.events.onInputDown.removeAll();
            _this.eraser.events.onDragStop.removeAll();
            _this.eraser.events.onDragStop.add(_this.eraserDrop2, _this);

            for (let i = 0; i < _this.space1Boxes.length; i++) {
                let pair = { x: _this.space1Boxes.getChildAt(i).x, y: _this.space1Boxes.getChildAt(i).y }
                _this.reArrangePos.push(pair);
            }

            for (let i = 0; i < _this.a; i++) {
                if (_this.space1Boxes.getChildAt(i).name == '22') CorrectCount++;
            }
            console.log(CorrectCount, 'CorrectCount')
            if (CorrectCount === _this.a) _this.reArrange = false;
            else _this.reArrange = true;

            if (_this.reArrange === true) {
                for (let i = 0; i < _this.space1Boxes.length; i++) {
                    if (_this.space1Boxes.getChildAt(i).name == '22') {
                        _this.firstPos = i;
                        let tween1 = _this.add.tween(_this.space1Boxes.getChildAt(_this.firstPos));
                        tween1.to({ x: 267, y: _this.space1Boxes.getChildAt(0).y }, 800, 'Linear', true, 0);
                        _this.Group1.push(_this.space1Boxes.getChildAt(_this.firstPos));
                    }
                }

                _this.increeY = _this.space1Boxes.getChildAt(0).y + 125
                for (let i = 0; i < _this.firstPos; i++) {
                    let tween2 = _this.add.tween(_this.space1Boxes.getChildAt(i));
                    tween2.to({ x: 267, y: _this.increeY }, 800, 'Linear', true, 0);
                    _this.Group1.push(_this.space1Boxes.getChildAt(i));
                    _this.increeY += 35;
                }

                // _this.space1Boxes.removeAll(true);

                var sortArray = [];

                _this.Group1.forEach(function (obj) {
                    _this.space1Boxes.addChild(obj);
                });

                _this.space1Boxes.forEach(function (obj) {
                    sortArray.push(obj);
                });

                sortArray.sort(function (a, b) {
                    return a.y - b.y;
                });

                sortArray.forEach(function (obj) {
                    _this.space1Boxes.addChild(obj);
                });
            }

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
            _this.Flag1 = 0;

            //add 3rd audio
            _this.pauseVoice();
            if (_this.count1 == 0) {
                _this.Ask_Question3.play();
            }
            _this.Question_flag = 2;

        }
        else {
            _this.wrongans.play();
            _this.space1Boxes.removeAll(true);
            _this.verticalY = 200;
        }

    },
    //Evaluation of the bottom box or the workspace.
    tickSecondEvaluation: function (target) {
        console.log("tick second evaluation");
        _this.clickSound.play();

        _this.reArrange = false;
        _this.reArrangePos.length = 0;

        let a = [];
        let b = [];
        a.push(0);
        a.push(0);
        a.push(0);

        b.push(0);
        b.push(0);
        b.push(0);

        var CorrectCount = 0;
        _this.orderC2 = 0;

        for (let i = 0; i < _this.space2Boxes.length; i++) {
            if (_this.space2Boxes.getChildAt(i).name == '21') {
                a[0] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '22') {
                b[0] += 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '31') {
                a[1] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '32') {
                b[1] += 1;
            }
        }

        _this.Array3 = [];
        _this.Array4 = [];

        _this.Array3.push(0); _this.Array3.push(0);
        _this.Array4.push(0); _this.Array4.push(0);

        if ((a[0] == 0 && b[0] == _this.c) && (a[1] == _this.d && b[1] == 0) || (a[0] == 0 && b[0] == _this.c) && (a[1] == 0 && b[1] == _this.d)) {
            // _this.orderC2 = 1;
            // for (let i = 0; i < _this.c; i++) {
            //     if (_this.space2Boxes.getChildAt(i).name == '22') CorrectCount++;
            // }
            // console.log(CorrectCount, 'CorrectCount')
            // if (CorrectCount === _this.c && _this.orderC2 === 1) _this.Flag2 = 1;
            // else _this.Flag2 = 0;
            _this.Flag2 = 1;
            console.log('correct', a[0], b[0], a[1], b[1])
            _this.Array3[0] = a[0];
            _this.Array3[1] = b[0];
            _this.Array4[0] = a[1];
            _this.Array4[1] = b[1];
        } else {
            _this.Flag2 = 0;
            console.log('wrong', a[0], b[0], a[1], b[1])
        }

        if (_this.Flag2 === 1) {
            _this.counterCelebrationSound.currentTime = 0;
            _this.counterCelebrationSound.play();
            target.events.onInputDown.removeAll();
            console.log('second validation pass')
            _this.eraser.events.onDragStop.removeAll();
            _this.eraser.inputEnabled = true;
            _this.eraser.events.onDragStop.add(_this.eraserDrop3, _this);

            for (let i = 0; i < _this.space2Boxes.length; i++) {
                let pair = { x: _this.space2Boxes.getChildAt(i).x, y: _this.space2Boxes.getChildAt(i).y }
                _this.reArrangePos.push(pair);
            }

            for (let i = 0; i < _this.c; i++) {
                if (_this.space2Boxes.getChildAt(i).name == '22') CorrectCount++;
            }
            console.log(CorrectCount, 'CorrectCount')
            if (CorrectCount === _this.c) _this.reArrange = false;
            else _this.reArrange = true;

            _this.secondPos = [];
            _this.secondPos2 = [];

            if (_this.reArrange === true) {
                for (let i = 0; i < _this.space2Boxes.length; i++) {
                    if (_this.space2Boxes.getChildAt(i).name == '22') {
                        _this.secondPos.push(i);
                    }
                }

                for (let i = 0; i < _this.space2Boxes.length; i++) {
                    if (_this.space2Boxes.getChildAt(i).name == '31' || _this.space2Boxes.getChildAt(i).name == '32') {
                        _this.secondPos2.push(i);
                    }
                }

                _this.increeX = _this.space2Boxes.getChildAt(0).x;
                for (let i = 0; i < _this.secondPos.length; i++) {
                    let tween1 = _this.add.tween(_this.space2Boxes.getChildAt(_this.secondPos[i]));
                    tween1.to({ x: _this.increeX, y: 170 }, 800, 'Linear', true, 0);
                    _this.Group2.push(_this.space2Boxes.getChildAt(_this.secondPos[i]))
                    _this.increeX += 125;
                }

                for (let i = 0; i < _this.secondPos2.length; i++) {
                    let tween2 = _this.add.tween(_this.space2Boxes.getChildAt(_this.secondPos2[i]));
                    tween2.to({ x: _this.increeX, y: 170 }, 800, 'Linear', true, 0);
                    _this.Group2.push(_this.space2Boxes.getChildAt(_this.secondPos2[i]))
                    _this.increeX += 35;
                }

                _this.Group2.forEach(function (obj) {
                    _this.space2Boxes.addChild(obj);
                });

            }

            _this.time.events.add(1200, function () {


                for (let i = 0; i < _this.space1Boxes.length; i++) {
                    console.log('inside change frame....')
                    _this.space1Boxes.getChildAt(i).frame = 1;
                }

                for (let j = 0; j < _this.space2Boxes.length; j++) {
                    console.log('inside change frame....')
                    _this.space2Boxes.getChildAt(j).frame = 1;
                }

                _this.StoringXYValues();
            });

            _this.textBox.destroy();

            _this.textBox = _this.add.sprite(240, 80, 'Text box_4');
            _this.textBox.scale.setTo(1.6, 1.2);

            _this.DisplayEquation = _this.add.text(280, 98, _this.equation);
            _this.applyingStyleBlue(_this.DisplayEquation);

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


            //4th audio
            _this.pauseVoice();
            if (_this.count1 == 0) {
                // _this.time.events.add(1500, function () {
                _this.Ask_Question4.play();
                // });
            }
            _this.Question_flag = 3;

            _this.Flag2 = 0;

            target.events.onInputDown.add(_this.tickThirdEvaluation, _this);

        }
        else {
            _this.wrongans.play();

            _this.space2Boxes.removeAll(true);
            _this.horizontalX = 300;
        }

    },

    StoringXYValues: function () {
        // storeObjectPositions 2 and 3 is a pair for dragging X Horizontally
        // storeObjectPositions 1 and 4 is a pair for dragging constants

        // vertically x
        _this.space2Boxes.forEach(function (obj) {
            if (obj.name === '31' || obj.name === '32') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions1.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects1.push(obj);
                _this.Dragvertical = 1;
            }
        });

        // horizontally x
        _this.space1Boxes.forEach(function (obj) {
            if (obj.name === '31' || obj.name === '32') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions2.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects2.push(obj);
            }
        });

        _this.space2Boxes.forEach(function (obj) {
            if (obj.name === '21' || obj.name === '22') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions3.push({ x: obj.position.x, y: obj.position.y });
            }
        });

        _this.space1Boxes.forEach(function (obj) {
            if (obj.name === '31' || obj.name === '32') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions4.push({ x: obj.position.x, y: obj.position.y });
            }
        });



        // pairing to drag horizontally
        _this.pairedValues = [];

        for (var i = 0; i < _this.storeObjPositions3.length; i++) {
            var xValue = _this.storeObjPositions3[i].x;

            // Iterate over the second array
            for (var j = 0; j < _this.storeObjPositions2.length; j++) {
                var yValue = _this.storeObjPositions2[j].y;

                // Create a pair of X and Y values
                _this.pair = { x: xValue, y: yValue };

                // Push the pair into the pairedValues array
                _this.pairedValues.push(_this.pair);
            }
        }

        // pairing for constants dragging

        _this.pairedConstValues = [];

        for (var i = 0; i < _this.storeObjPositions1.length; i++) {
            var xValue = _this.storeObjPositions1[i].x;

            // Iterate over the second array
            for (var j = 0; j < _this.storeObjPositions4.length; j++) {
                var yValue = _this.storeObjPositions4[j].y;

                // Create a pair of X and Y values
                _this.pairConst = { x: xValue, y: yValue };

                // Push the pair into the pairedValues array
                _this.pairedConstValues.push(_this.pairConst);
            }
        }

        //x2 dragging
        _this.space2Boxes.forEach(function (obj) {
            if (obj.name === '21' || obj.name === '22') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions5.push({ x: obj.position.x, y: obj.position.y });
            }
        });
    },

    greenXSqDrag: function () {

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
        else if (_this.erasedPos1.length > 0) {
            console.log('eraser parttttttttttttt')
            var post = _this.erasedPos1[0];

            _this.green_1.position.x = post.x;
            _this.green_1.position.y = post.y;

            _this.green_1.destroy();
            _this.green_1 = _this.add.sprite(post.x, post.y, 'all_2');
            _this.green_1.frame = 2;
            _this.green_1.name = 'G1';

            _this.space3Boxes.addChild(_this.green_1);

            // Remove the destroyed position from the array
            _this.erasedPos1.shift();

            console.log(_this.erasedPos1, '_this.erasedPos1,shift()')
        }
        else if (_this.storeObjPositions5.length > 0) {

            var pos = _this.storeObjPositions5[0];
            _this.green_1.position.x = pos.x;
            _this.green_1.position.y = pos.y;

            _this.green_1.destroy();
            _this.green_1 = _this.add.sprite(pos.x, 203, 'all_2');
            _this.green_1.frame = 2;
            _this.green_1.name = 'G1';

            _this.space3Boxes.addChild(_this.green_1);

            // Remove the destroyed position from the array
            _this.storeObjPositions5.shift();
        }
        else {
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
        else if (_this.erasedPos1.length > 0) {
            console.log('eraser parttttttttttttt')
            var post = _this.erasedPos1[0];

            _this.pink_1.position.x = post.x;
            _this.pink_1.position.y = post.y;

            _this.pink_1.destroy();
            _this.pink_1 = _this.add.sprite(post.x, post.y, 'all_2');
            _this.pink_1.frame = 0;
            _this.pink_1.name = 'P1';

            _this.space3Boxes.addChild(_this.pink_1);

            // Remove the destroyed position from the array
            _this.erasedPos1.shift();

            console.log(_this.erasedPos1, '_this.erasedPos1,shift()')
        }
        else if (_this.storeObjPositions5.length > 0) {

            var pos = _this.storeObjPositions5[0];

            _this.pink_1.position.x = pos.x;
            _this.pink_1.position.y = pos.y;

            _this.pink_1.destroy();
            _this.pink_1 = _this.add.sprite(pos.x, 203, 'all_2');
            _this.pink_1.frame = 0;
            _this.pink_1.name = 'P1';

            _this.space3Boxes.addChild(_this.pink_1);
            // Remove the destroyed position from the array
            _this.storeObjPositions5.shift();
        }
        else {
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
        if (_this.destroyedPositions2.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyedPositions2[0];

            // Set the position of the p1 object to the destroyed position
            _this.green_2.position.x = pos.x;
            _this.green_2.position.y = pos.y;

            _this.green_2Dup.destroy();
            _this.green_2.destroy();
            _this.green_2 = _this.add.image(pos.x, pos.y, 'green1');
            _this.green_2.name = 'G2';

            _this.space3Boxes.addChild(_this.green_2);

            // Remove the destroyed position from the array
            _this.destroyedPositions2.shift();

            console.log(_this.destroyedPositions2, '_this.destroyedPositions,shift()')
        }
        else if (_this.destroyedPositions3.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyedPositions3[0];

            // Set the position of the p1 object to the destroyed position
            _this.green_2.position.x = pos.x;
            _this.green_2.position.y = pos.y;

            _this.green_2Dup.destroy();
            _this.green_2.destroy();
            _this.green_2 = _this.add.image(pos.x, pos.y, 'green2');
            _this.green_2.name = 'G2_1';

            _this.space3Boxes.addChild(_this.green_2);

            // Remove the destroyed position from the array
            _this.destroyedPositions3.shift();

            console.log(_this.destroyedPositions3, '_this.destroyedPositions3,shift()')
        }
        else if (_this.erasedPos2.length > 0) {
            console.log('eraser parttttttttttttt')
            var post = _this.erasedPos2[0];

            _this.green_2.position.x = post.x;
            _this.green_2.position.y = post.y;

            _this.green_2Dup.destroy();
            _this.green_2.destroy();
            _this.green_2 = _this.add.image(post.x, post.y, 'green1');
            _this.green_2.name = 'G2';

            _this.space3Boxes.addChild(_this.green_2);

            // Remove the destroyed position from the array
            _this.erasedPos2.shift();

            console.log(_this.erasedPos2, '_this.erasedPos2,shift()')
        }
        else if (_this.erasedPos3.length > 0) {
            console.log('eraser parttttttttttttt')
            var post = _this.erasedPos3[0];

            _this.green_2.position.x = post.x;
            _this.green_2.position.y = post.y;

            _this.green_2Dup.destroy();
            _this.green_2.destroy();
            _this.green_2 = _this.add.image(post.x, post.y, 'green2');
            _this.green_2.name = 'G2_1';

            _this.space3Boxes.addChild(_this.green_2);

            // Remove the destroyed position from the array
            _this.erasedPos3.shift();

            console.log(_this.erasedPos3, '_this.erasedPos3,shift()')
        }
        else {
            if (_this.storeObjPositions1.length > 0) {
                console.log('Drag vertically')
                var pos = _this.storeObjPositions1[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_2.position.x = pos.x;
                _this.green_2.position.y = pos.y;

                _this.green_2Dup.destroy();
                _this.green_2.destroy();
                _this.green_2 = _this.add.image(pos.x, 203, 'green1');
                _this.green_2.name = 'G2';

                _this.space3Boxes.addChild(_this.green_2);

                _this.storeObjPositions1.shift();
            }

            else if (_this.pairedValues.length > 0) {
                console.log('Drag horizontally')
                var pos = _this.pairedValues[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_2.position.x = pos.x;
                _this.green_2.position.y = pos.y;

                _this.green_2Dup.destroy();
                _this.green_2.destroy();
                _this.green_2 = _this.add.image(pos.x, pos.y, 'green2');
                _this.green_2.name = 'G2_1';

                _this.space3Boxes.addChild(_this.green_2);

                _this.pairedValues.shift();

            }
            else {
                _this.wrongSound.play();
                _this.green_2.destroy();
                _this.green_2Dup.destroy();
            }

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
        if (_this.destroyedPositions2.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyedPositions2[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink_2.position.x = pos.x;
            _this.pink_2.position.y = pos.y;

            _this.pink_2Dup.destroy();
            _this.pink_2.destroy();
            _this.pink_2 = _this.add.image(pos.x, pos.y, 'pink1');
            _this.pink_2.name = 'P2';

            _this.space3Boxes.addChild(_this.pink_2);

            // Remove the destroyed position from the array
            _this.destroyedPositions2.shift();

            console.log(_this.destroyedPositions2, '_this.destroyedPositions2,shift()')
        }
        else if (_this.destroyedPositions3.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyedPositions3[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink_2.position.x = pos.x;
            _this.pink_2.position.y = pos.y;

            _this.pink_2Dup.destroy();
            _this.pink_2.destroy();
            _this.pink_2 = _this.add.image(pos.x, pos.y, 'pink2');
            _this.pink_2.name = 'P2_1';

            _this.space3Boxes.addChild(_this.pink_2);

            // Remove the destroyed position from the array
            _this.destroyedPositions3.shift();

            console.log(_this.destroyedPositions3, '_this.destroyedPositions3,shift()')
        }
        else if (_this.erasedPos2.length > 0) {
            console.log('eraser parttttttttttttt')
            var post = _this.erasedPos2[0];

            _this.pink_2.position.x = post.x;
            _this.pink_2.position.y = post.y;

            _this.pink_2Dup.destroy();
            _this.pink_2.destroy();
            _this.pink_2 = _this.add.image(post.x, post.y, 'pink1');
            _this.pink_2.name = 'P2';

            _this.space3Boxes.addChild(_this.pink_2);

            // Remove the destroyed position from the array
            _this.erasedPos2.shift();

            console.log(_this.erasedPos2, '_this.erasedPos2,shift()')
        }
        else if (_this.erasedPos3.length > 0) {
            console.log('eraser parttttttttttttt')
            var post = _this.erasedPos3[0];

            _this.pink_2.position.x = post.x;
            _this.pink_2.position.y = post.y;

            _this.pink_2Dup.destroy();
            _this.pink_2.destroy();
            _this.pink_2 = _this.add.image(post.x, post.y, 'pink2');
            _this.pink_2.name = 'P2_1';

            _this.space3Boxes.addChild(_this.pink_2);

            // Remove the destroyed position from the array
            _this.erasedPos3.shift();

            console.log(_this.erasedPos3, '_this.erasedPos3,shift()')
        }
        else {
            if (_this.storeObjPositions1.length > 0) {
                console.log('Drag vertically')
                var pos = _this.storeObjPositions1[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_2.position.x = pos.x;
                _this.pink_2.position.y = pos.y;

                _this.pink_2Dup.destroy();
                _this.pink_2.destroy();
                _this.pink_2 = _this.add.image(pos.x + 1.5, 203, 'pink1');
                _this.pink_2.name = 'P2';

                _this.space3Boxes.addChild(_this.pink_2);

                _this.storeObjPositions1.shift();
            }

            else if (_this.pairedValues.length > 0) {
                console.log('Drag horizontally')
                var pos = _this.pairedValues[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_2.position.x = pos.x;
                _this.pink_2.position.y = pos.y;

                _this.pink_2Dup.destroy();
                _this.pink_2.destroy();
                _this.pink_2 = _this.add.image(pos.x, pos.y, 'pink2');
                _this.pink_2.name = 'P2_1';

                _this.space3Boxes.addChild(_this.pink_2);

                _this.pairedValues.shift();

            }
            else {
                _this.wrongSound.play();
                _this.pink_2.destroy();
                _this.pink_2Dup.destroy();
            }
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
        if (_this.destroyedPositions4.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyedPositions4[0];

            // Set the position of the p1 object to the destroyed position
            _this.green_3.position.x = pos.x;
            _this.green_3.position.y = pos.y;

            _this.green_3Dup.destroy();
            _this.green_3.destroy();
            _this.green_3 = _this.add.sprite(pos.x, pos.y, 'greenBig3');
            _this.green_3.name = 'G3';

            _this.space3Boxes.addChild(_this.green_3);

            // Remove the destroyed position from the array
            _this.destroyedPositions4.shift();

            console.log(_this.destroyedPositions4, '_this.destroyedPositions4,shift()')
        }
        else if (_this.erasedPos4.length > 0) {
            console.log('eraser parttttttttttttt')
            var post = _this.erasedPos4[0];

            _this.green_3.position.x = post.x;
            _this.green_3.position.y = post.y;

            _this.green_3Dup.destroy();
            _this.green_3.destroy();
            _this.green_3 = _this.add.sprite(post.x, post.y, 'greenBig3');
            _this.green_3.name = 'G3';

            _this.space3Boxes.addChild(_this.green_3);

            // Remove the destroyed position from the array
            _this.erasedPos4.shift();

            console.log(_this.erasedPos4, '_this.erasedPos4,shift()')
        }
        else if (_this.pairedConstValues.length > 0) {
            var pos = _this.pairedConstValues[0];
            _this.green_3.position.x = pos.x;
            _this.green_3.position.y = pos.y;

            _this.green_3Dup.destroy();
            _this.green_3.destroy();
            _this.green_3 = _this.add.sprite(pos.x, pos.y, 'greenBig3');
            _this.green_3.name = 'G3';

            _this.space3Boxes.addChild(_this.green_3);

            // Remove the dragged position from the array
            _this.pairedConstValues.shift();
        }
        else {
            _this.green_3.destroy();
            _this.green_3Dup.destroy();
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

        if (_this.destroyedPositions4.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyedPositions4[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink_3.position.x = pos.x;
            _this.pink_3.position.y = pos.y;

            _this.pink_3Dup.destroy();
            _this.pink_3.destroy();
            _this.pink_3 = _this.add.image(pos.x, pos.y, 'pinkBig3');
            _this.pink_3.name = 'P3';

            _this.space3Boxes.addChild(_this.pink_3);

            // Remove the destroyed position from the array
            _this.destroyedPositions4.shift();
            console.log(_this.destroyedPositions4, '_this.destroyedPositions4,shift()')
        }
        else if (_this.erasedPos4.length > 0) {
            console.log('eraser parttttttttttttt')
            var post = _this.erasedPos4[0];

            _this.pink_3.position.x = post.x;
            _this.pink_3.position.y = post.y;

            _this.pink_3Dup.destroy();
            _this.pink_3.destroy();
            _this.pink_3 = _this.add.image(post.x, post.y, 'pinkBig3');
            _this.pink_3.name = 'P3';

            _this.space3Boxes.addChild(_this.pink_3);
            // Remove the destroyed position from the array
            _this.erasedPos4.shift();
            console.log(_this.erasedPos4, '_this.erasedPos4,shift()')
        }

        else if (_this.pairedConstValues.length > 0) {

            var pos = _this.pairedConstValues[0];
            _this.pink_3.position.x = pos.x;
            _this.pink_3.position.y = pos.y;

            _this.pink_3Dup.destroy();
            _this.pink_3.destroy();
            _this.pink_3 = _this.add.image(pos.x, pos.y, 'pinkBig3');
            _this.pink_3.name = 'P3';

            _this.space3Boxes.addChild(_this.pink_3);

            // Remove the dragged position from the array
            _this.pairedConstValues.shift();

        }
        else {
            _this.pink_3Dup.destroy();
            _this.pink_3.destroy();
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
        let a = [];
        let b = [];
        a.push(0);
        a.push(0);
        a.push(0);
        a.push(0);

        b.push(0);
        b.push(0);
        b.push(0);
        b.push(0);

        for (let i = 0; i < _this.space3Boxes.length; i++) {
            if (_this.space3Boxes.getChildAt(i).name == 'G1') {
                a[0] -= 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'P1') {
                b[0] += 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'G2') {
                a[1] -= 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'P2') {
                b[1] += 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'G2_1') {
                a[2] -= 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'P2_1') {
                b[2] += 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'G3') {
                a[3] -= 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'P3') {
                b[3] += 1;
            }
        }

        if ((a[0] == 0 && b[0] == _this.first) && (a[1] == _this.splitSecond_1 && b[1] == 0 && a[2] == 0 && b[2] == _this.splitSecond_2) && (a[3] == _this.third && b[3] == 0) || (a[0] == 0 && b[0] == _this.first) && (a[1] == 0 && b[1] == _this.splitSecond_1 && a[2] == _this.splitSecond_2 && b[2] == 0) && (a[3] == _this.third && b[3] == 0)) {
            console.log('correct', a[0], b[0], a[1], b[1], a[2], b[2], a[3], b[3])
            _this.ValidationFlag1 = 1;
            _this.counterCelebrationSound.play();

            _this.green_2Dup.events.onDragStop.removeAll();
            _this.green_3Dup.events.onDragStop.removeAll();
            _this.pink_2Dup.events.onDragStop.removeAll();
            _this.pink_3Dup.events.onDragStop.removeAll();

            _this.green_2Dup.destroy();
            _this.green_3Dup.destroy();

            _this.pink_3Dup.destroy();
            _this.pink_2Dup.destroy();

            _this.removeObj_1 = [];
            _this.removeObj_2 = [];

            _this.space3Boxes.forEach(function (obj) {
                if (obj.name == 'G2' || obj.name == 'P2') _this.removeObj_1.push(obj);
                else if (obj.name == 'G2_1' || obj.name == 'P2_1') _this.removeObj_2.push(obj);
            });

            _this.removeObj_1.sort(function (a, b) {
                if (a.y === b.y) {
                    return a.x - b.x; // Sort by x position if y positions are equal
                } else {
                    return a.y - b.y; // Sort by y position
                }
            });

            // Sort _this.removeObj_2 array based on x and y positions
            _this.removeObj_2.sort(function (a, b) {
                if (a.y === b.y) {
                    return a.x - b.x; // Sort by x position if y positions are equal
                } else {
                    return a.y - b.y; // Sort by y position
                }
            });

            console.log(_this.removeObj_1.length, 'Xv');
            console.log(_this.removeObj_2.length, 'Xh');

            _this.Zeropairing();
        } else {
            _this.ValidationFlag1 = 0;
            _this.wrongSound.play();
            console.log('wrong', a[0], b[0],)
            console.log('wrong', a[1], b[1],)
            console.log('wrong', a[2], b[2],)
            console.log('wrong', a[3], b[3],)

            // here result 1 for horizontal x and result2 for const

            if (_this.Array2[0] === 0) {
                _this.result1 = _this.Array2[1] * _this.Array3[1];
                _this.result2 = _this.Array2[1] * _this.Array4[0];
            } else if (_this.Array2[1] === 0) {
                _this.result1 = _this.Array2[0] * _this.Array3[1];
                _this.result2 = _this.Array2[0] * _this.Array4[1];
            }

            let square_Array = [];
            let verticalX_Array = [];
            let horizontalX_Array = [];
            let constant_Array = [];


            _this.space3Boxes.forEach(function (obj) {
                if (obj.name == 'G1' || obj.name == 'P1') square_Array.push(obj);
                else if (obj.name == 'G2' || obj.name == 'P2') verticalX_Array.push(obj);
                else if (obj.name == 'G2_1' || obj.name == 'P2_1') horizontalX_Array.push(obj);
                else if (obj.name == 'G3' || obj.name == 'P3') constant_Array.push(obj);
            });

            console.log(square_Array.length, 'X²');
            console.log(verticalX_Array.length, 'Xv');
            console.log(horizontalX_Array.length, 'Xh');
            console.log(constant_Array.length, '1');


            if (_this.Array3[1] > 0) {
                square_Array.forEach(function (obj) {
                    if (obj.name == 'G1') {
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
            }
            if (_this.Array4[0] < 0) {
                verticalX_Array.forEach(function (obj) {
                    if (obj.name == 'P2') {
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions2.length; i++) {
                            var pos = _this.destroyedPositions2[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions2.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });
            }
            else if (_this.Array4[1] > 0) {
                verticalX_Array.forEach(function (obj) {
                    if (obj.name == 'G2') {
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions2.length; i++) {
                            var pos = _this.destroyedPositions2[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions2.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });
            }

            if (_this.result1 < 0) {
                horizontalX_Array.forEach(function (obj) {
                    if (obj.name == 'P2_1') {
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions3.length; i++) {
                            var pos = _this.destroyedPositions3[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions3.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });
            } else if (_this.result1 > 0) {
                horizontalX_Array.forEach(function (obj) {
                    if (obj.name == 'G2_1') {
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions3.length; i++) {
                            var pos = _this.destroyedPositions3[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions3.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });
            }

            if (_this.result2 < 0) {
                constant_Array.forEach(function (obj) {
                    if (obj.name == 'P3') {
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions4.length; i++) {
                            var pos = _this.destroyedPositions4[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions4.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });
            } else if (_this.result2 > 0) {
                constant_Array.forEach(function (obj) {
                    if (obj.name == 'G3') {
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions4.length; i++) {
                            var pos = _this.destroyedPositions4[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        // If position does not exist, add it to the array and add object to destroy list
                        if (!posExists) {
                            _this.destroyedPositions4.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });
            }

            _this.toDestroy.forEach(function (obj) {
                obj.destroy();
            });
        }

    },

    Zeropairing: function () {
        //5th audio
        _this.pauseVoice();
        if (_this.count1 == 0) {
            _this.Ask_Question5.play();
        }
        _this.Question_flag = 4;

        _this.tick.destroy();
        _this.eraser.destroy();
        _this.sideGray1.destroy();
        _this.sideGray2.destroy();

        _this.green_2Dup.events.onDragStop.removeAll();
        _this.green_3Dup.events.onDragStop.removeAll();
        _this.pink_2Dup.events.onDragStop.removeAll();
        _this.pink_3Dup.events.onDragStop.removeAll();

        _this.green_2Dup.destroy();
        _this.green_3Dup.destroy();

        _this.pink_3Dup.destroy();
        _this.pink_2Dup.destroy();

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

        _this.removeStyle(_this.letterA);
        _this.removeStyle(_this.letterB);
        _this.removeStyle(_this.letterC);

        _this.removeStyle(_this.letterD);
        _this.removeStyle(_this.letterE);
        _this.removeStyle(_this.letterF);

        _this.group1 = _this.add.group();
        _this.group2 = _this.add.group();

        _this.removeObj_1.forEach(function (obj) {
            _this.group1.addChild(obj);
        });

        _this.removeObj_2.forEach(function (obj) {
            _this.group2.addChild(obj);
        });

        _this.zeroPairSymbol = _this.add.sprite(790, 85, 'Symbol');
        _this.zeroPairSymbol.scale.setTo(0.73);
        _this.zeroPairSymbol.frame = 1;
        _this.zeroPairSymbol.inputEnabled = true;
        _this.zeroPairSymbol.input.useHandCursor = true;

        _this.zeroPairSymbol.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.zeroPairSymbol.events.onInputDown.removeAll();
            _this.zeroPairSymbol.frame = 0;

            const delay = 2000; // Delay of 2 seconds (2000 milliseconds)

            var children1 = _this.group1.children.slice(); // Create a shallow copy of the children array of group1
            var children2 = _this.group2.children.slice(); // Create a shallow copy of the children array of group2

            children1.reverse(); // Reverse the order of the children1 array
            children2.reverse(); // Reverse the order of the children2 array

            if ((children1.length < children2.length) || (children1.length === children2.length)) {
                children1.forEach(function (child, index) {
                    _this.time.events.add(delay * (index + 1), function () {
                        _this.pairing.currentTime = 0;
                        _this.pairing.play();
                        child.destroy();
                        children2[index].destroy();

                        if (_this.group1.length === 0) {
                            _this.ValidationComplete();
                        }
                    });
                });

            }

            else if (children1.length > children2.length) {
                children2.forEach(function (child, index) {
                    _this.time.events.add(delay * (index + 1), function () {
                        _this.pairing.currentTime = 0;
                        _this.pairing.play();
                        child.destroy();
                        children1[index].destroy();

                        if (_this.group2.length === 0) {
                            _this.ValidationComplete();
                        }
                    });
                });
            }
        });

    },

    ValidationComplete: function () {
        //6th audio
        _this.pauseVoice();
        if (_this.count1 == 0) {
            _this.Ask_Question6.play();
        }
        _this.Question_flag = 5;

        _this.zeroPairSymbol.destroy();
        _this.textBox.destroy();
        _this.removeStyle(_this.DisplayEquation);

        _this.pairedValues.length = 0;
        _this.pairedConstValues.length = 0;

        _this.storeObjPositions1.length = 0;
        _this.storeObjPositions2.length = 0;
        _this.storeObjPositions3.length = 0;
        _this.storeObjPositions4.length = 0;
        _this.storeObjPositions5.length = 0;

        _this.textBox = _this.add.sprite(240, 70, 'Text box_6');
        _this.textBox.scale.setTo(0.82, 1);

        _this.space1.y = 150;

        _this.DisplayEquation = _this.add.text(30, 20, _this.equation);
        _this.applyingStyleBlue(_this.DisplayEquation);
        _this.textBox.addChild(_this.DisplayEquation);

        _this.equalSign = _this.add.text(290, 20, '=');
        _this.applyingStyleBlue(_this.equalSign);
        _this.textBox.addChild(_this.equalSign);

        _this.addAnswerBoxAndHighlight();

        // if (_this.count1 == 0) {
        //     _this.time.events.add(1000, function () {
        //         _this.Ask_Question3.play();
        //     });
        // }
        // _this.Question_flag = 3;
    },

    tickEvaluationFour: function (target) {
        _this.clickSound.play();
        console.log('tick four validation....')
        _this.reArrange2 = false;

        if (_this.zeroPair[0] == 2) {
            let a = [];
            let b = [];
            a.push(0);
            a.push(0);

            b.push(0);
            b.push(0);

            _this.order2 = 0;
            var CorrectCount = 0;

            for (let i = 0; i < _this.space5Boxes.length; i++) {
                if (_this.space5Boxes.getChildAt(i).name == '40') {
                    a[0] -= 1;
                }
                else if (_this.space5Boxes.getChildAt(i).name == '45') {
                    b[0] += 1;
                }
                else if (_this.space5Boxes.getChildAt(i).name == '60') {
                    a[1] -= 1;
                }
                else if (_this.space5Boxes.getChildAt(i).name == '65') {
                    b[1] += 1;
                }
            }

            _this.Assign1 = [];
            _this.Assign2 = [];

            _this.Assign1.push(0); _this.Assign1.push(0);
            _this.Assign2.push(0); _this.Assign2.push(0);

            if ((a[0] == 0 && b[0] == _this.p) && (a[1] == _this.q && b[1] == 0) || (a[0] == 0 && b[0] == _this.p) && (a[1] == 0 && b[1] == _this.q)) {
                // _this.order2 = 1;
                // for (let i = 0; i < _this.p; i++) {
                //     if (_this.space5Boxes.getChildAt(i).name == '45') CorrectCount++;
                // }
                // console.log(CorrectCount, 'CorrectCount')
                // if (CorrectCount === _this.p && _this.order2 === 1) _this.ValidationFlag3 = 1;
                // else _this.ValidationFlag3 = 0;
                _this.ValidationFlag3 = 1;
                console.log('correct', a[0], b[0], a[1], b[1])
                _this.Assign1[0] = a[0];
                _this.Assign1[1] = b[0];
                _this.Assign2[0] = a[1];
                _this.Assign2[1] = b[1];
            } else {
                _this.ValidationFlag3 = 0;
                console.log('wrong', a[0], b[0], a[1], b[1])
            }
        }

        else if (_this.zeroPair[0] == 1) {
            let a = [];
            let b = [];
            a.push(0);
            a.push(0);
            a.push(0);

            b.push(0);
            b.push(0);
            b.push(0);

            for (let i = 0; i < _this.space5Boxes.length; i++) {
                if (_this.space5Boxes.getChildAt(i).name == '20') {
                    a[0] -= 1;
                }
                else if (_this.space5Boxes.getChildAt(i).name == '25') {
                    b[0] += 1;
                }
                else if (_this.space5Boxes.getChildAt(i).name == '40') {
                    a[1] -= 1;
                }
                else if (_this.space5Boxes.getChildAt(i).name == '45') {
                    b[1] += 1;
                }
                else if (_this.space5Boxes.getChildAt(i).name == '60') {
                    a[2] -= 1;
                }
                else if (_this.space5Boxes.getChildAt(i).name == '65') {
                    b[2] += 1;
                }
            }
            if (_this.decideSign[0] === 1) {
                if ((a[0] == 0 && b[0] == 1) && (a[1] == 0 && b[1] == 1) && (a[2] == 0 && b[2] == 0)) {
                    // if (_this.space5Boxes.getChildAt(0).name == '25') 
                    _this.ValidationFlag3 = 1;
                    console.log('correct', a[0], b[0], a[1], b[1], a[2], b[2])
                } else {
                    console.log('wrong', a[0], b[0], a[1], b[1], a[2], b[2])
                    _this.ValidationFlag3 = 0;
                }
            }
            else if (_this.decideSign[0] === 2) {
                if ((a[0] == 0 && b[0] == 0) && (a[1] == 0 && b[1] == 1) && (a[2] == _this.c && b[2] == 0)) {
                    // if (_this.space5Boxes.getChildAt(0).name == '45') 
                    _this.ValidationFlag3 = 1;
                    console.log('correct', a[0], b[0], a[1], b[1], a[2], b[2])
                } else {
                    console.log('wrong', a[0], b[0], a[1], b[1], a[2], b[2])
                    _this.ValidationFlag3 = 0;
                }
            }
            else if (_this.decideSign[0] === 3) {
                if ((a[0] == 0 && b[0] == _this.a) && (a[1] == 0 && b[1] == 0) && (a[2] == 0 && b[2] == _this.b)) {
                    // if (_this.space5Boxes.getChildAt(0).name == '25') _this.ValidationFlag3 = 1;
                    _this.ValidationFlag3 = 1;
                    console.log('correct', a[0], b[0], a[1], b[1], a[2], b[2])
                } else {
                    console.log('wrong', a[0], b[0], a[1], b[1], a[2], b[2])
                    _this.ValidationFlag3 = 0;
                }
            }
            else if (_this.decideSign[0] === 4) {
                if ((a[0] == 0 && b[0] == 0) && (a[1] == -_this.a && b[1] == 0) && (a[2] == _this.f && b[2] == 0)) {
                    // if (_this.space5Boxes.getChildAt(0).name == '40') _this.ValidationFlag3 = 1;
                    _this.ValidationFlag3 = 1;
                    console.log('correct', a[0], b[0], a[1], b[1], a[2], b[2])
                } else {
                    console.log('wrong', a[0], b[0], a[1], b[1], a[2], b[2])
                    _this.ValidationFlag3 = 0;
                }
            }
        }

        if (_this.ValidationFlag3 === 1) {
            // _this.framechange.play();
            _this.counterCelebrationSound.currentTime = 0;
            _this.counterCelebrationSound.play();
            target.events.onInputDown.removeAll();
            _this.eraser.events.onDragStop.removeAll();
            _this.eraser.events.onDragStop.add(_this.eraserDrop5, _this);

            _this.textBox.frame = 1;

            if (_this.zeroPair[0] === 2) {
                for (let i = 0; i < _this.space5Boxes.length; i++) {
                    let pair = { x: _this.space5Boxes.getChildAt(i).x, y: _this.space5Boxes.getChildAt(i).y }
                    _this.reArrangePos2.push(pair);
                }

                for (let i = 0; i < _this.p; i++) {
                    if (_this.space5Boxes.getChildAt(i).name == '45') CorrectCount++;
                }
                console.log(CorrectCount, 'CorrectCount')
                if (CorrectCount === _this.p) _this.reArrange2 = false;
                else _this.reArrange2 = true;

                if (_this.reArrange2 === true) {
                    for (let i = 0; i < _this.space5Boxes.length; i++) {
                        if (_this.space5Boxes.getChildAt(i).name == '45') {
                            _this.firstPos = i;
                            let tween1 = _this.add.tween(_this.space5Boxes.getChildAt(_this.firstPos));
                            tween1.to({ x: 267, y: _this.space5Boxes.getChildAt(0).y }, 600, 'Linear', true, 0);
                            _this.Group3.push(_this.space5Boxes.getChildAt(_this.firstPos));

                        }
                    }

                    _this.increeY = _this.space5Boxes.getChildAt(0).y + 85
                    for (let i = 0; i < _this.firstPos; i++) {
                        let tween2 = _this.add.tween(_this.space5Boxes.getChildAt(i));
                        if (_this.space5Boxes.getChildAt(i).name === '65') {
                            tween2.to({ x: 265, y: _this.increeY }, 600, 'Linear', true, 0);
                        } else {
                            tween2.to({ x: 267, y: _this.increeY }, 600, 'Linear', true, 0);
                        }

                        _this.Group3.push(_this.space5Boxes.getChildAt(i));
                        _this.increeY += 35;
                    }

                    var sortArray = [];

                    _this.Group3.forEach(function (obj) {
                        _this.space5Boxes.addChild(obj);
                    });

                    _this.space5Boxes.forEach(function (obj) {
                        sortArray.push(obj);
                    });

                    sortArray.sort(function (a, b) {
                        return a.y - b.y;
                    });

                    sortArray.forEach(function (obj) {
                        _this.space5Boxes.addChild(obj);
                    });
                }

            } else if (_this.zeroPair[0] === 1) {
                if (_this.decideSign[0] === 1) {
                    if (_this.space5Boxes.getChildAt(0).name == '25') { _this.reArrange2 = false; }
                    else { _this.reArrange2 = true; }

                    if (_this.reArrange2 === true) {
                        let tween1 = _this.add.tween(_this.space5Boxes.getChildAt(0));
                        tween1.to({ x: 267, y: 325 }, 600, 'Linear', true, 0);

                        let tween2 = _this.add.tween(_this.space5Boxes.getChildAt(1));
                        tween2.to({ x: 267, y: 200 }, 600, 'Linear', true, 0);
                    }
                }
                else if (_this.decideSign[0] === 2) {
                    for (let i = 0; i < _this.space5Boxes.length; i++) {
                        let pair = { x: _this.space5Boxes.getChildAt(i).x, y: _this.space5Boxes.getChildAt(i).y }
                        _this.reArrangePos2.push(pair);
                    }

                    if (_this.space5Boxes.getChildAt(0).name == '45') _this.reArrange2 = false;
                    else _this.reArrange2 = true;


                    if (_this.reArrange2 === true) {
                        for (let i = 0; i < _this.space5Boxes.length; i++) {
                            if (_this.space5Boxes.getChildAt(i).name == '45') {
                                _this.firstPos = i;
                                let tween1 = _this.add.tween(_this.space5Boxes.getChildAt(_this.firstPos));
                                tween1.to({ x: 267, y: _this.space5Boxes.getChildAt(0).y }, 600, 'Linear', true, 0);
                            }
                        }

                        _this.increeY = _this.space5Boxes.getChildAt(0).y + 85
                        for (let i = 0; i < _this.firstPos; i++) {
                            let tween2 = _this.add.tween(_this.space5Boxes.getChildAt(i));
                            tween2.to({ x: 267, y: _this.increeY }, 600, 'Linear', true, 0);
                            _this.increeY += 35;
                        }
                    }
                }
                else if (_this.decideSign[0] === 3) {
                    for (let i = 0; i < _this.space5Boxes.length; i++) {
                        let pair = { x: _this.space5Boxes.getChildAt(i).x, y: _this.space5Boxes.getChildAt(i).y }
                        _this.reArrangePos2.push(pair);
                    }

                    if (_this.space5Boxes.getChildAt(0).name == '25') _this.reArrange2 = false;
                    else _this.reArrange2 = true;

                    console.log(CorrectCount, 'CorrectCount')


                    if (_this.reArrange2 === true) {
                        for (let i = 0; i < _this.space5Boxes.length; i++) {
                            if (_this.space5Boxes.getChildAt(i).name == '25') {
                                _this.firstPos = i;
                                let tween1 = _this.add.tween(_this.space5Boxes.getChildAt(_this.firstPos));
                                tween1.to({ x: 267, y: _this.space5Boxes.getChildAt(0).y }, 600, 'Linear', true, 0);
                            }
                        }

                        _this.increeY = _this.space5Boxes.getChildAt(0).y + 125
                        for (let i = 0; i < _this.firstPos; i++) {
                            let tween2 = _this.add.tween(_this.space5Boxes.getChildAt(i));
                            tween2.to({ x: 265, y: _this.increeY }, 600, 'Linear', true, 0);
                            _this.increeY += 35;
                        }
                    }
                }
                else if (_this.decideSign[0] === 4) {
                    for (let i = 0; i < _this.space5Boxes.length; i++) {
                        let pair = { x: _this.space5Boxes.getChildAt(i).x, y: _this.space5Boxes.getChildAt(i).y }
                        _this.reArrangePos2.push(pair);
                    }

                    if (_this.space5Boxes.getChildAt(0).name == '40') { _this.reArrange2 = false; }
                    else { _this.reArrange2 = true; }

                    console.log(CorrectCount, 'CorrectCount')

                    if (_this.reArrange2 === true) {
                        for (let i = 0; i < _this.space5Boxes.length; i++) {
                            if (_this.space5Boxes.getChildAt(i).name == '40') {
                                _this.firstPos = i;
                                let tween1 = _this.add.tween(_this.space5Boxes.getChildAt(_this.firstPos));
                                tween1.to({ x: 267, y: _this.space5Boxes.getChildAt(0).y }, 600, 'Linear', true, 0);
                            }
                        }

                        _this.increeY = _this.space5Boxes.getChildAt(0).y + 85;
                        for (let i = 0; i < _this.firstPos; i++) {
                            let tween2 = _this.add.tween(_this.space5Boxes.getChildAt(i));
                            tween2.to({ x: 267, y: _this.increeY }, 600, 'Linear', true, 0);
                            _this.increeY += 35;
                        }
                    }
                }
            }


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

            //add 3rd audio
            _this.pauseVoice();
            if (_this.count1 == 0) {
                _this.Ask_Question3.play();
            }
            _this.Question_flag = 2;

            target.events.onInputDown.add(_this.tickEvaluationFive, _this);
            _this.ValidationFlag3 = 0;

        } else {
            _this.space5Boxes.removeAll(true);
            _this.wrongSound.play();
            _this.Yincrease = 200;

        }

    },

    tickEvaluationFive: function (target) {
        _this.clickSound.play();
        console.log('tick five validation....')

        _this.reArrange2 = false;
        _this.reArrangePos2.length = 0;

        if (_this.zeroPair[0] == 2) {
            let a = [];
            let b = [];
            a.push(0);
            a.push(0);
            a.push(0);

            b.push(0);
            b.push(0);
            b.push(0);

            var CorrectCount = 0;
            _this.order = 0;

            for (let i = 0; i < _this.space6Boxes.length; i++) {
                if (_this.space6Boxes.getChildAt(i).name == '40') {
                    a[0] -= 1;
                }
                else if (_this.space6Boxes.getChildAt(i).name == '45') {
                    b[0] += 1;
                }
                else if (_this.space6Boxes.getChildAt(i).name == '60') {
                    a[1] -= 1;
                }
                else if (_this.space6Boxes.getChildAt(i).name == '65') {
                    b[1] += 1;
                }
            }

            _this.Assign3 = [];
            _this.Assign4 = [];

            _this.Assign3.push(0); _this.Assign3.push(0);
            _this.Assign4.push(0); _this.Assign4.push(0);

            if ((a[0] == 0 && b[0] == _this.r) && (a[1] == _this.s && b[1] == 0) || (a[0] == 0 && b[0] == _this.r) && (a[1] == 0 && b[1] == _this.s)) {
                // _this.order = 1;
                // for (let i = 0; i < _this.r; i++) {
                //     if (_this.space6Boxes.getChildAt(i).name == '45') CorrectCount++;
                // }
                // console.log(CorrectCount, 'CorrectCount')
                // if (CorrectCount === _this.r && _this.order === 1) _this.ValidationFlag4 = 1;
                // else _this.ValidationFlag4 = 0;
                _this.ValidationFlag4 = 1;
                console.log('correct', a[0], b[0], a[1], b[1])
                _this.Assign3[0] = a[0];
                _this.Assign3[1] = b[0];
                _this.Assign4[0] = a[1];
                _this.Assign4[1] = b[1];
            } else {
                _this.ValidationFlag4 = 0;
                console.log('wrong', a[0], b[0], a[1], b[1])
            }
        }

        else if (_this.zeroPair[0] == 1) {
            let a = [];
            let b = [];
            a.push(0);
            a.push(0);
            a.push(0);

            b.push(0);
            b.push(0);
            b.push(0);

            var CorrectCount = 0;
            _this.orderFlag = 0;

            for (let i = 0; i < _this.space6Boxes.length; i++) {
                if (_this.space6Boxes.getChildAt(i).name == '20') {
                    a[0] -= 1;
                }
                else if (_this.space6Boxes.getChildAt(i).name == '25') {
                    b[0] += 1;
                }
                else if (_this.space6Boxes.getChildAt(i).name == '40') {
                    a[1] -= 1;
                }
                else if (_this.space6Boxes.getChildAt(i).name == '45') {
                    b[1] += 1;
                }
                else if (_this.space6Boxes.getChildAt(i).name == '60') {
                    a[2] -= 1;
                }
                else if (_this.space6Boxes.getChildAt(i).name == '65') {
                    b[2] += 1;
                }
            }
            if (_this.decideSign[0] === 1) {
                if ((a[0] == 0 && b[0] == 0) && (a[1] == 0 && b[1] == _this.e1) && (a[2] == 0 && b[2] == _this.f)) {
                    // _this.orderFlag = 1;
                    // for (let i = 0; i < _this.e1; i++) {
                    //     if (_this.space6Boxes.getChildAt(i).name == '45') CorrectCount++;
                    // }
                    // console.log(CorrectCount, 'CorrectCount')
                    // if (CorrectCount === _this.e1 && _this.orderFlag === 1) _this.ValidationFlag4 = 1;
                    // else _this.ValidationFlag4 = 0;
                    _this.ValidationFlag4 = 1;
                    console.log('correct', a[0], b[0], a[1], b[1], a[2], b[2])

                } else {
                    console.log('wrong', a[0], b[0], a[1], b[1], a[2], b[2])
                    _this.wrongSound.play();
                    _this.ValidationFlag4 = 0;
                }
            } else if (_this.decideSign[0] === 2) {
                if ((a[0] == 0 && b[0] == _this.d) && (a[1] == _this.e && b[1] == 0) && (a[2] == 0 && b[2] == 0)) {
                    // _this.orderFlag = 1;
                    // for (let i = 0; i < _this.d; i++) {
                    //     if (_this.space6Boxes.getChildAt(i).name == '25') CorrectCount++;
                    // }
                    // console.log(CorrectCount, 'CorrectCount')
                    // if (CorrectCount === _this.d && _this.orderFlag === 1) _this.ValidationFlag4 = 1;
                    // else _this.ValidationFlag4 = 0;
                    _this.ValidationFlag4 = 1;
                    console.log('correct', a[0], b[0], a[1], b[1], a[2], b[2])
                } else {
                    console.log('wrong', a[0], b[0], a[1], b[1], a[2], b[2])
                    _this.ValidationFlag4 = 0;
                }
            }
            else if (_this.decideSign[0] === 3) {
                if ((a[0] == 0 && b[0] == _this.d) && (a[1] == 0 && b[1] == _this.e) && (a[2] == 0 && b[2] == 0)) {
                    // _this.orderFlag = 1;
                    // for (let i = 0; i < _this.d; i++) {
                    //     if (_this.space6Boxes.getChildAt(i).name == '25') CorrectCount++;
                    // }
                    // console.log(CorrectCount, 'CorrectCount')
                    // if (CorrectCount === _this.d && _this.orderFlag === 1) _this.ValidationFlag4 = 1;
                    // else _this.ValidationFlag4 = 0;
                    _this.ValidationFlag4 = 1;
                    console.log('correct', a[0], b[0], a[1], b[1], a[2], b[2])
                } else {
                    console.log('wrong', a[0], b[0], a[1], b[1], a[2], b[2])
                    _this.ValidationFlag4 = 0;
                }
            } else if (_this.decideSign[0] === 4) {
                if ((a[0] == 0 && b[0] == _this.a) && (a[1] == -_this.a && b[1] == 0) && (a[2] == 0 && b[2] == 0)) {
                    // if (_this.space6Boxes.getChildAt(0).name == '25') _this.ValidationFlag4 = 1;
                    _this.ValidationFlag4 = 1;
                    console.log('correct', a[0], b[0], a[1], b[1], a[2], b[2])
                } else {
                    console.log('wrong', a[0], b[0], a[1], b[1], a[2], b[2])
                    _this.ValidationFlag4 = 0;
                }
            }
        }

        if (_this.ValidationFlag4 === 1) {
            _this.counterCelebrationSound.play();

            target.events.onInputDown.removeAll();
            _this.eraser.events.onDragStop.removeAll();
            _this.eraser.events.onDragStop.add(_this.eraserDrop6, _this);

            if (_this.zeroPair[0] === 2) {
                for (let i = 0; i < _this.space6Boxes.length; i++) {
                    let pair = { x: _this.space6Boxes.getChildAt(i).x, y: _this.space6Boxes.getChildAt(i).y }
                    _this.reArrangePos2.push(pair);
                }

                for (let i = 0; i < _this.r; i++) {
                    if (_this.space6Boxes.getChildAt(i).name == '45') CorrectCount++;
                }
                console.log(CorrectCount, 'CorrectCount')
                if (CorrectCount === _this.r && _this.order === 1) _this.reArrange2 = false;
                else _this.reArrange2 = true;

                _this.secondPos = [];
                _this.secondPos2 = [];

                if (_this.reArrange2 === true) {
                    for (let i = 0; i < _this.space6Boxes.length; i++) {
                        if (_this.space6Boxes.getChildAt(i).name == '45') {
                            _this.secondPos.push(i);
                        }
                    }

                    for (let i = 0; i < _this.space6Boxes.length; i++) {
                        if (_this.space6Boxes.getChildAt(i).name == '60' || _this.space6Boxes.getChildAt(i).name == '65') {
                            _this.secondPos2.push(i);
                        }
                    }

                    _this.increeX = _this.space6Boxes.getChildAt(0).x;
                    for (let i = 0; i < _this.secondPos.length; i++) {
                        let tween1 = _this.add.tween(_this.space6Boxes.getChildAt(_this.secondPos[i]));
                        tween1.to({ x: _this.increeX, y: 170 }, 800, 'Linear', true, 0);
                        _this.Group4.push(_this.space6Boxes.getChildAt(_this.secondPos[i]))
                        _this.increeX += 85;
                    }

                    for (let i = 0; i < _this.secondPos2.length; i++) {
                        let tween2 = _this.add.tween(_this.space6Boxes.getChildAt(_this.secondPos2[i]));
                        tween2.to({ x: _this.increeX, y: 168 }, 800, 'Linear', true, 0);
                        _this.Group4.push(_this.space6Boxes.getChildAt(_this.secondPos2[i]))
                        _this.increeX += 35;
                    }

                    _this.Group4.forEach(function (obj) {
                        _this.space6Boxes.addChild(obj);
                    });

                }
            } else if (_this.zeroPair[0] === 1) {
                if (_this.decideSign[0] === 1) {
                    for (let i = 0; i < _this.e1; i++) {
                        if (_this.space6Boxes.getChildAt(i).name == '45') CorrectCount++;
                    }
                    console.log(CorrectCount, 'CorrectCount')
                    if (CorrectCount === _this.e1 && _this.orderFlag === 1) _this.reArrange2 = false;
                    else _this.reArrange2 = true;

                    _this.secondPos = [];
                    _this.secondPos2 = [];

                    if (_this.reArrange2 === true) {
                        for (let i = 0; i < _this.space6Boxes.length; i++) {
                            if (_this.space6Boxes.getChildAt(i).name == '45') {
                                _this.secondPos.push(i);
                            }
                        }

                        for (let i = 0; i < _this.space6Boxes.length; i++) {
                            if (_this.space6Boxes.getChildAt(i).name == '65' || _this.space6Boxes.getChildAt(i).name == '60') {
                                _this.secondPos2.push(i);
                            }
                        }

                        _this.increeX = _this.space6Boxes.getChildAt(0).x;
                        for (let i = 0; i < _this.secondPos.length; i++) {
                            let tween1 = _this.add.tween(_this.space6Boxes.getChildAt(_this.secondPos[i]));
                            tween1.to({ x: _this.increeX, y: 170 }, 800, 'Linear', true, 0);
                            _this.increeX += 85;
                        }

                        for (let i = 0; i < _this.secondPos2.length; i++) {
                            let tween2 = _this.add.tween(_this.space6Boxes.getChildAt(_this.secondPos2[i]));
                            tween2.to({ x: _this.increeX, y: 168 }, 800, 'Linear', true, 0);
                            _this.increeX += 35;
                        }
                    }
                }
                else if (_this.decideSign[0] === 2) {
                    for (let i = 0; i < _this.d; i++) {
                        if (_this.space6Boxes.getChildAt(i).name == '25') CorrectCount++;
                    }
                    console.log(CorrectCount, 'CorrectCount')
                    if (CorrectCount === _this.d) _this.reArrange2 = false;
                    else _this.reArrange2 = true;

                    _this.secondPos = [];
                    _this.secondPos2 = [];

                    if (_this.reArrange2 === true) {
                        for (let i = 0; i < _this.space6Boxes.length; i++) {
                            if (_this.space6Boxes.getChildAt(i).name == '25') {
                                _this.secondPos.push(i);
                            }
                        }

                        for (let i = 0; i < _this.space6Boxes.length; i++) {
                            if (_this.space6Boxes.getChildAt(i).name == '45' || _this.space6Boxes.getChildAt(i).name == '40') {
                                _this.secondPos2.push(i);
                            }
                        }

                        _this.increeX = _this.space6Boxes.getChildAt(0).x;
                        for (let i = 0; i < _this.secondPos.length; i++) {
                            let tween1 = _this.add.tween(_this.space6Boxes.getChildAt(_this.secondPos[i]));
                            tween1.to({ x: _this.increeX, y: 170 }, 800, 'Linear', true, 0);
                            _this.increeX += 125;
                        }

                        for (let i = 0; i < _this.secondPos2.length; i++) {
                            let tween2 = _this.add.tween(_this.space6Boxes.getChildAt(_this.secondPos2[i]));
                            tween2.to({ x: _this.increeX, y: 170 }, 800, 'Linear', true, 0);
                            _this.increeX += 85;
                        }
                    }
                }
                else if (_this.decideSign[0] === 3) {
                    for (let i = 0; i < _this.d; i++) {
                        if (_this.space6Boxes.getChildAt(i).name == '25') CorrectCount++;
                    }
                    console.log(CorrectCount, 'CorrectCount')
                    if (CorrectCount === _this.d) _this.reArrange2 = false;
                    else _this.reArrange2 = true;

                    _this.secondPos = [];
                    _this.secondPos2 = [];

                    if (_this.reArrange2 === true) {
                        for (let i = 0; i < _this.space6Boxes.length; i++) {
                            if (_this.space6Boxes.getChildAt(i).name == '25') {
                                _this.secondPos.push(i);
                            }
                        }

                        for (let i = 0; i < _this.space6Boxes.length; i++) {
                            if (_this.space6Boxes.getChildAt(i).name == '45' || _this.space6Boxes.getChildAt(i).name == '40') {
                                _this.secondPos2.push(i);
                            }
                        }

                        _this.increeX = _this.space6Boxes.getChildAt(0).x;
                        for (let i = 0; i < _this.secondPos.length; i++) {
                            let tween1 = _this.add.tween(_this.space6Boxes.getChildAt(_this.secondPos[i]));
                            tween1.to({ x: _this.increeX, y: 170 }, 800, 'Linear', true, 0);
                            _this.increeX += 125;
                        }

                        for (let i = 0; i < _this.secondPos2.length; i++) {
                            let tween2 = _this.add.tween(_this.space6Boxes.getChildAt(_this.secondPos2[i]));
                            tween2.to({ x: _this.increeX, y: 170 }, 800, 'Linear', true, 0);
                            _this.increeX += 85;
                        }
                    }
                }
                else if (_this.decideSign[0] === 4) {
                    if (_this.space6Boxes.getChildAt(0).name == '25') { _this.reArrange2 = false; }
                    else { _this.reArrange2 = true; }

                    if (_this.reArrange2 === true) {
                        let tween1 = _this.add.tween(_this.space6Boxes.getChildAt(0));
                        tween1.to({ x: 425, y: 170 }, 600, 'Linear', true, 0);

                        let tween2 = _this.add.tween(_this.space6Boxes.getChildAt(1));
                        tween2.to({ x: 300, y: 170 }, 600, 'Linear', true, 0);
                    }
                }
            }

            _this.time.events.add(1500, function () {
                for (let i = 0; i < _this.space5Boxes.length; i++) {
                    console.log('inside change frame....')
                    _this.space5Boxes.getChildAt(i).frame = 1;
                }

                for (let j = 0; j < _this.space6Boxes.length; j++) {
                    console.log('inside change frame....')
                    _this.space6Boxes.getChildAt(j).frame = 1;
                }

                _this.StoringXYValues2();
            });

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


            _this.orderFlag = 0;

            _this.textBox.destroy();
            _this.removeStyle(_this.DisplayEquation);

            _this.textBox = _this.add.sprite(240, 80, 'Text box_4');
            _this.textBox.scale.setTo(1.6, 1.2);

            _this.DisplayEquation = _this.add.text(280, 98, _this.equation);
            _this.applyingStyleBlue(_this.DisplayEquation);

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

            //4th audio
            _this.pauseVoice();
            if (_this.count1 == 0) {
                // _this.time.events.add(1500, function () {
                _this.Ask_Question4.play();
                // });
            }

            _this.Question_flag = 3;

            // if (_this.count1 == 0) {
            //     _this.time.events.add(1700, function () {
            //         _this.Ask_Question2.play();
            //     });
            // }

            // _this.Question_flag = 2;
            target.events.onInputDown.add(_this.tickEvaluationSix, _this);
            _this.ValidationFlag4 = 0;
        } else {
            _this.space6Boxes.removeAll(true);
            _this.wrongSound.play();
            _this.Xincrease2 = 300;
        }

    },

    StoringXYValues2: function () {

        // objPositions 3 and 4 is a pair for dragging X Horizontally
        // objPositions 5 and 6 is a pair for dragging constants
        // objPositions 9 and 10 is a pair for dragging Y Horizontally

        if (_this.zeroPair[0] === 2) {
            //y2 dragging
            _this.space6Boxes.forEach(function (obj) {
                if (obj.name === '40' || obj.name === '45') {
                    // Check if current destroyed position already exists in array
                    _this.objPositions.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            // vertically y
            _this.space6Boxes.forEach(function (obj) {
                if (obj.name === '60' || obj.name === '65') {
                    // Check if current destroyed position already exists in array
                    _this.objPositions8.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            // horizontally y
            _this.space6Boxes.forEach(function (obj) {
                if (obj.name === '40' || obj.name === '45') {
                    // Check if current destroyed position already exists in array
                    _this.objPositions9.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            _this.space5Boxes.forEach(function (obj) {
                if (obj.name === '60' || obj.name === '65') {
                    // Check if current destroyed position already exists in array
                    _this.objPositions10.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            //const
            _this.space6Boxes.forEach(function (obj) {
                if (obj.name === '60' || obj.name === '65') {
                    // Check if current destroyed position already exists in array
                    _this.objPositions5.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            //const
            _this.space5Boxes.forEach(function (obj) {
                if (obj.name === '60' || obj.name === '65') {
                    // Check if current destroyed position already exists in array
                    _this.objPositions6.push({ x: obj.position.x, y: obj.position.y });
                }
            });


            // pairing to drag Y horizontally
            _this.pairedValuesforY = [];

            for (var i = 0; i < _this.objPositions9.length; i++) {
                var xValue = _this.objPositions9[i].x;

                // Iterate over the second array
                for (var j = 0; j < _this.objPositions10.length; j++) {
                    var yValue = _this.objPositions10[j].y;

                    // Create a pair of X and Y values
                    _this.pairY = { x: xValue, y: yValue };

                    // Push the pair into the pairedValues array
                    _this.pairedValuesforY.push(_this.pairY);
                }
            }

            // pairing for constants dragging

            _this.pairedConst = [];

            for (var i = 0; i < _this.objPositions5.length; i++) {
                var xValue = _this.objPositions5[i].x;

                // Iterate over the second array
                for (var j = 0; j < _this.objPositions6.length; j++) {
                    var yValue = _this.objPositions6[j].y;

                    // Create a pair of X and Y values
                    _this.pairConstValues = { x: xValue, y: yValue };

                    // Push the pair into the pairedValues array
                    _this.pairedConst.push(_this.pairConstValues);
                }
            }

            _this.pairedValuesforX = [];
            _this.pairedValuesforYSq = [];
            _this.pairedValuesforY2 = [];

        }
        else if (_this.zeroPair[0] === 1) {
            _this.dragX_Tile = 0;
            _this.dragXY_Tile = 0;
            _this.dragXY_Tile2 = 0;
            _this.dragY_Tile = 0;
            _this.dragY2_Tile = 0;
            _this.dragX2_Tile = 0;
            //x2 dragging

            _this.space5Boxes.forEach(function (obj) {
                if (obj.name === '20' || obj.name === '25') {
                    _this.dragX2_Tile = 1;
                }
            });

            _this.space6Boxes.forEach(function (obj) {
                if ((obj.name === '20' || obj.name === '25') && (_this.dragX2_Tile === 1)) {
                    // Check if current destroyed position already exists in array
                    _this.objPositions2.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            //y2 dragging
            _this.space5Boxes.forEach(function (obj) {
                if (obj.name === '40' || obj.name === '45') {
                    _this.dragY2_Tile = 1;
                    _this.objPositions13.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            _this.space6Boxes.forEach(function (obj) {
                if ((obj.name === '40' || obj.name === '45') && (_this.dragY2_Tile === 1)) {
                    // Check if current destroyed position already exists in array
                    _this.objPositions14.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            // pairing to drag Y2 
            _this.pairedValuesforYSq = [];

            for (var i = 0; i < _this.objPositions14.length; i++) {
                var xValue = _this.objPositions14[i].x;

                // Iterate over the second array
                for (var j = 0; j < _this.objPositions13.length; j++) {
                    var yValue = _this.objPositions13[j].y;

                    // Create a pair of X and Y values
                    _this.pairY2 = { x: xValue, y: yValue };

                    // Push the pair into the pairedValues array
                    _this.pairedValuesforYSq.push(_this.pairY2);
                }
            }

            // vertically x

            _this.space5Boxes.forEach(function (obj) {
                if (obj.name === '20' || obj.name === '25') {
                    // Check it should drag x or y
                    _this.dragX_Tile = 1;
                }
            });

            _this.space6Boxes.forEach(function (obj) {
                if ((obj.name === '60' || obj.name === '65') && _this.dragX_Tile === 1) {
                    // Check if current destroyed position already exists in array
                    _this.objPositions7.push({ x: obj.position.x, y: obj.position.y });
                }
            });


            // horizontally x
            _this.space6Boxes.forEach(function (obj) {
                if (obj.name === '20' || obj.name === '25') {
                    // Check if current destroyed position already exists in array
                    _this.objPositions3.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            _this.space5Boxes.forEach(function (obj) {
                if (obj.name === '60' || obj.name === '65') {
                    // Check if current destroyed position already exists in array
                    _this.objPositions4.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            // pairing to drag X horizontally
            _this.pairedValuesforX = [];

            for (var i = 0; i < _this.objPositions3.length; i++) {
                var xValue = _this.objPositions3[i].x;

                // Iterate over the second array
                for (var j = 0; j < _this.objPositions4.length; j++) {
                    var yValue = _this.objPositions4[j].y;

                    // Create a pair of X and Y values
                    _this.pairX = { x: xValue, y: yValue };

                    // Push the pair into the pairedValues array
                    _this.pairedValuesforX.push(_this.pairX);
                }
            }

            // vertically y
            _this.space5Boxes.forEach(function (obj) {
                if (obj.name === '40' || obj.name === '45') {
                    _this.dragY_Tile = 1;
                    _this.objPositions15.push({ x: obj.position.x, y: obj.position.y });
                }
            });
            _this.space6Boxes.forEach(function (obj) {
                if ((obj.name === '60' || obj.name === '65') && (_this.dragY_Tile === 1)) {
                    // Check if current destroyed position already exists in array
                    _this.objPositions16.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            // pairing to drag Y horizontally
            _this.pairedValuesforY2 = [];

            for (var i = 0; i < _this.objPositions16.length; i++) {
                var xValue = _this.objPositions16[i].x;

                // Iterate over the second array
                for (var j = 0; j < _this.objPositions15.length; j++) {
                    var yValue = _this.objPositions15[j].y;

                    // Create a pair of X and Y values
                    _this.pairY2 = { x: xValue, y: yValue };

                    // Push the pair into the pairedValues array
                    _this.pairedValuesforY2.push(_this.pairY2);
                }
            }

            // horizontally y
            _this.space6Boxes.forEach(function (obj) {
                if (obj.name === '40' || obj.name === '45') {
                    // Check if current destroyed position already exists in array
                    _this.objPositions9.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            _this.space5Boxes.forEach(function (obj) {
                if (obj.name === '60' || obj.name === '65') {
                    // Check if current destroyed position already exists in array
                    _this.objPositions10.push({ x: obj.position.x, y: obj.position.y });
                }
            });



            // pairing to drag Y horizontally
            _this.pairedValuesforY = [];

            for (var i = 0; i < _this.objPositions9.length; i++) {
                var xValue = _this.objPositions9[i].x;

                // Iterate over the second array
                for (var j = 0; j < _this.objPositions10.length; j++) {
                    var yValue = _this.objPositions10[j].y;

                    // Create a pair of X and Y values
                    _this.pairY = { x: xValue, y: yValue };

                    // Push the pair into the pairedValues array
                    _this.pairedValuesforY.push(_this.pairY);
                }
            }

            // vertically xy
            _this.space5Boxes.forEach(function (obj) {
                if (obj.name === '20' || obj.name === '25') {
                    _this.dragXY_Tile = 1;
                }
            });

            _this.space6Boxes.forEach(function (obj) {
                if ((obj.name === '40' || obj.name === '45') && (_this.dragXY_Tile === 1)) {
                    // Check if current destroyed position already exists in array
                    _this.objPositions11.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            // horizontally xy
            _this.space5Boxes.forEach(function (obj) {
                if (obj.name === '40' || obj.name === '45') {
                    _this.dragXY_Tile2 = 1;
                }
            });

            _this.space6Boxes.forEach(function (obj) {
                if ((obj.name === '20' || obj.name === '25') && (_this.dragXY_Tile2 === 1)) {
                    // Check if current destroyed position already exists in array
                    _this.objPositions12.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            //const
            _this.space6Boxes.forEach(function (obj) {
                if (obj.name === '60' || obj.name === '65') {
                    // Check if current destroyed position already exists in array
                    _this.objPositions5.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            //const
            _this.space5Boxes.forEach(function (obj) {
                if (obj.name === '60' || obj.name === '65') {
                    // Check if current destroyed position already exists in array
                    _this.objPositions6.push({ x: obj.position.x, y: obj.position.y });
                }
            });

            _this.pairedConst = [];

            for (var i = 0; i < _this.objPositions5.length; i++) {
                var xValue = _this.objPositions5[i].x;

                // Iterate over the second array
                for (var j = 0; j < _this.objPositions6.length; j++) {
                    var yValue = _this.objPositions6[j].y;

                    // Create a pair of X and Y values
                    _this.pairConstValues = { x: xValue, y: yValue };

                    // Push the pair into the pairedValues array
                    _this.pairedConst.push(_this.pairConstValues);
                }
            }

        }


    },

    DragGreenXSq: function () {
        if (_this.destroyWrongObj9.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj9[0];

            // Set the position of the p1 object to the destroyed position
            _this.green_4.position.x = pos.x;
            _this.green_4.position.y = pos.y;

            _this.green_4.destroy();
            _this.green_4 = _this.add.sprite(pos.x, pos.y, 'all_2');
            _this.green_4.frame = 2;
            _this.green_4.name = '1';

            _this.space7Boxes.addChild(_this.green_4);

            // Remove the destroyed position from the array
            _this.destroyWrongObj9.shift();

            console.log(_this.destroyWrongObj9, '_this.destroyWrongObj9,shift()')
        }
        else if (_this.erasedPos5.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos5[0];

            _this.green_4.position.x = post.x;
            _this.green_4.position.y = post.y;

            _this.green_4.destroy();
            _this.green_4 = _this.add.sprite(post.x, post.y, 'all_2');
            _this.green_4.frame = 2;
            _this.green_4.name = '1';

            _this.space7Boxes.addChild(_this.green_4);

            // Remove the destroyed position from the array
            _this.erasedPos5.shift();

            console.log(_this.erasedPos5, '_this.erasedPos5,shift()')
        }
        else if (_this.objPositions2.length > 0) {

            var pos = _this.objPositions2[0];
            _this.green_4.position.x = pos.x;
            _this.green_4.position.y = pos.y;

            _this.green_4.destroy();
            _this.green_4 = _this.add.sprite(pos.x, 201, 'all_2');
            _this.green_4.frame = 2;
            _this.green_4.name = '1';
            _this.space7Boxes.addChild(_this.green_4);

            // Remove the destroyed position from the array
            _this.objPositions2.shift();
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
        if (_this.destroyWrongObj9.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj9[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink_4.position.x = pos.x;
            _this.pink_4.position.y = pos.y;

            _this.pink_4.destroy();
            _this.pink_4 = _this.add.sprite(pos.x, pos.y, 'all_2');
            _this.pink_4.frame = 0;
            _this.pink_4.name = '2';

            _this.space7Boxes.addChild(_this.pink_4);

            // Remove the destroyed position from the array
            _this.destroyWrongObj9.shift();

            console.log(_this.destroyWrongObj9, '_this.destroyWrongObj9,shift()')
        }
        else if (_this.erasedPos5.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos5[0];

            _this.pink_4.position.x = post.x;
            _this.pink_4.position.y = post.y;

            _this.pink_4.destroy();
            _this.pink_4 = _this.add.sprite(post.x, post.y, 'all_2');
            _this.pink_4.frame = 0;
            _this.pink_4.name = '2';

            _this.space7Boxes.addChild(_this.pink_4);

            // Remove the destroyed position from the array
            _this.erasedPos5.shift();

            console.log(_this.erasedPos5, '_this.erasedPos5,shift()')
        }
        else if (_this.objPositions2.length > 0) {

            var pos = _this.objPositions2[0];
            _this.pink_4.position.x = pos.x;
            _this.pink_4.position.y = pos.y;

            _this.pink_4.destroy();
            _this.pink_4 = _this.add.sprite(pos.x, 201, 'all_2');
            _this.pink_4.frame = 0;
            _this.pink_4.name = '2';
            _this.space7Boxes.addChild(_this.pink_4);

            // Remove the destroyed position from the array
            _this.objPositions2.shift();
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
        if (_this.destroyWrongObj2.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj2[0];

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
            _this.destroyWrongObj2.shift();

            console.log(_this.destroyWrongObj2, '_this.destroyWrongObj2,shift()')
        }
        if (_this.destroyWrongObj6.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj6[0];

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
            _this.destroyWrongObj6.shift();

            console.log(_this.destroyWrongObj6, '_this.destroyWrongObj6,shift()')
        }
        else if (_this.erasedPos6.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos6[0];

            _this.green_5.position.x = post.x;
            _this.green_5.position.y = post.y;

            _this.green_5Dup.destroy();
            _this.green_5.destroy();
            _this.green_5 = _this.add.sprite(post.x, post.y, 'green1');
            _this.green_5.frame = 0;
            _this.green_5.name = '3';

            _this.space7Boxes.addChild(_this.green_5);

            // Remove the destroyed position from the array
            _this.erasedPos6.shift();

            console.log(_this.erasedPos6, '_this.erasedPos6,shift()')
        }
        else if (_this.erasedPos7.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos7[0];

            _this.green_5.position.x = post.x;
            _this.green_5.position.y = post.y;

            _this.green_5Dup.destroy();
            _this.green_5.destroy();
            _this.green_5 = _this.add.image(post.x, post.y, 'green2');
            _this.green_5.name = '4';

            _this.space7Boxes.addChild(_this.green_5);

            // Remove the destroyed position from the array
            _this.erasedPos7.shift();

            console.log(_this.erasedPos7, '_this.erasedPos7,shift()')
        }
        else {
            if (_this.objPositions7.length > 0) {
                console.log('Drag vertically')
                var pos = _this.objPositions7[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_5.position.x = pos.x;
                _this.green_5.position.y = pos.y;

                _this.green_5Dup.destroy();
                _this.green_5.destroy();
                _this.green_5 = _this.add.image(pos.x + 2, 201, 'green1');
                _this.green_5.name = '3';

                _this.space7Boxes.addChild(_this.green_5);

                _this.objPositions7.shift();
            }

            else if (_this.pairedValuesforX.length > 0) {
                console.log('Drag horizontally')
                var pos = _this.pairedValuesforX[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_5.position.x = pos.x;
                _this.green_5.position.y = pos.y;

                _this.green_5Dup.destroy();
                _this.green_5.destroy();
                _this.green_5 = _this.add.image(pos.x, pos.y, 'green2');
                _this.green_5.name = '4';

                _this.space7Boxes.addChild(_this.green_5);

                _this.pairedValuesforX.shift();

            }
            else {
                _this.wrongSound.play();
                _this.green_5.destroy();
                _this.green_5Dup.destroy();
            }
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
        if (_this.destroyWrongObj2.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj2[0];

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
            _this.destroyWrongObj2.shift();

            console.log(_this.destroyWrongObj2, '_this.destroyWrongObj2,shift()')
        }
        else if (_this.destroyWrongObj6.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj6[0];

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
            _this.destroyWrongObj6.shift();

            console.log(_this.destroyWrongObj6, '_this.destroyWrongObj6,shift()')
        }
        else if (_this.erasedPos6.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos6[0];

            _this.pink_5.position.x = post.x;
            _this.pink_5.position.y = post.y;

            _this.pink_5Dup.destroy();
            _this.pink_5.destroy();
            _this.pink_5 = _this.add.sprite(post.x, post.y, 'pink1');
            _this.pink_5.frame = 0;
            _this.pink_5.name = '5';

            _this.space7Boxes.addChild(_this.pink_5);

            // Remove the destroyed position from the array
            _this.erasedPos6.shift();

            console.log(_this.erasedPos6, '_this.erasedPos6,shift()')
        }
        else if (_this.erasedPos7.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos7[0];

            _this.pink_5.position.x = post.x;
            _this.pink_5.position.y = post.y;

            _this.pink_5Dup.destroy();
            _this.pink_5.destroy();
            _this.pink_5 = _this.add.sprite(post.x, post.y, 'pink2');
            _this.pink_5.frame = 0;
            _this.pink_5.name = '6';

            _this.space7Boxes.addChild(_this.pink_5);

            // Remove the destroyed position from the array
            _this.erasedPos7.shift();

            console.log(_this.erasedPos7, '_this.erasedPos7,shift()')
        }
        else {
            if (_this.objPositions7.length > 0) {
                console.log('Drag vertically')
                var pos = _this.objPositions7[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_5.position.x = pos.x;
                _this.pink_5.position.y = pos.y;

                _this.pink_5Dup.destroy();
                _this.pink_5.destroy();
                _this.pink_5 = _this.add.image(pos.x + 2, 201, 'pink1');
                _this.pink_5.name = '5';

                _this.space7Boxes.addChild(_this.pink_5);

                _this.objPositions7.shift();
            }

            else if (_this.pairedValuesforX.length > 0) {
                console.log('Drag horizontally')
                var pos = _this.pairedValuesforX[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_5.position.x = pos.x;
                _this.pink_5.position.y = pos.y;

                _this.pink_5Dup.destroy();
                _this.pink_5.destroy();
                _this.pink_5 = _this.add.image(pos.x, pos.y, 'pink2');
                _this.pink_5.name = '6';

                _this.space7Boxes.addChild(_this.pink_5);

                _this.pairedValuesforX.shift();

            }
            else {
                _this.wrongSound.play();
                _this.pink_5.destroy();
                _this.pink_5Dup.destroy();
            }
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
        if (_this.destroyWrongObj.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj[0];

            // Set the position of the p1 object to the destroyed position
            _this.greenXY.position.x = pos.x;
            _this.greenXY.position.y = pos.y;

            _this.greenXY.destroy();
            _this.greenXY = _this.add.sprite(pos.x, pos.y, 'all_3');
            _this.greenXY.frame = 2;
            _this.greenXY.name = '8';

            _this.space7Boxes.addChild(_this.greenXY);

            // Remove the destroyed position from the array
            _this.destroyWrongObj.shift();

            console.log(_this.destroyWrongObj, '_this.destroyWrongObj,shift()')
        }
        else if (_this.destroyWrongObj5.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj5[0];

            // Set the position of the p1 object to the destroyed position
            _this.greenXY.position.x = pos.x;
            _this.greenXY.position.y = pos.y;

            _this.greenXY.destroy();
            _this.greenXY = _this.add.sprite(pos.x, pos.y, 'all_1');
            _this.greenXY.frame = 2;
            _this.greenXY.name = '7';

            _this.space7Boxes.addChild(_this.greenXY);

            // Remove the destroyed position from the array
            _this.destroyWrongObj5.shift();

            console.log(_this.destroyWrongObj5, '_this.destroyWrongObj5,shift()')
        }
        else if (_this.erasedPos8.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos8[0];

            _this.greenXY.position.x = post.x;
            _this.greenXY.position.y = post.y;

            _this.greenXY.destroy();
            _this.greenXY = _this.add.sprite(post.x, post.y, 'all_1');
            _this.greenXY.frame = 2;
            _this.greenXY.name = '7';

            _this.space7Boxes.addChild(_this.greenXY);

            // Remove the destroyed position from the array
            _this.erasedPos8.shift();

            console.log(_this.erasedPos8, '_this.erasedPos8,shift()')
        }
        else if (_this.erasedPos9.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos9[0];

            _this.greenXY.position.x = post.x;
            _this.greenXY.position.y = post.y;

            _this.greenXY.destroy();
            _this.greenXY = _this.add.sprite(post.x, post.y, 'all_3');
            _this.greenXY.frame = 2;
            _this.greenXY.name = '8';

            _this.space7Boxes.addChild(_this.greenXY);

            // Remove the destroyed position from the array
            _this.erasedPos9.shift();

            console.log(_this.erasedPos9, '_this.erasedPos9,shift()')
        }
        else {
            if (_this.objPositions12.length > 0) {
                // Get the first destroyed position
                var pos = _this.objPositions12[0];

                // Set the position of the p1 object to the destroyed position
                _this.greenXY.position.x = pos.x;
                _this.greenXY.position.y = pos.y;

                _this.greenXY.destroy();
                _this.greenXY = _this.add.sprite(pos.x, 201, 'all_1');
                _this.greenXY.frame = 2;
                _this.greenXY.name = '7';

                _this.space7Boxes.addChild(_this.greenXY);

                // Remove the destroyed position from the array
                _this.objPositions12.shift();

                console.log(_this.objPositions12, '_this.objPositions12,shift()')
            }
            else if (_this.objPositions11.length > 0) {
                // Get the first destroyed position
                var pos = _this.objPositions11[0];

                // Set the position of the p1 object to the destroyed position
                _this.greenXY.position.x = pos.x;
                _this.greenXY.position.y = pos.y;

                _this.greenXY.destroy();
                _this.greenXY = _this.add.sprite(pos.x, 201, 'all_3');
                _this.greenXY.frame = 2;
                _this.greenXY.name = '8';

                _this.space7Boxes.addChild(_this.greenXY);

                // Remove the destroyed position from the array
                _this.objPositions11.shift();

                console.log(_this.objPositions11, '_this.objPositions11,shift()')
            }
            else {
                _this.greenXY.destroy();
                _this.wrongSound.play();
            }
        }

        _this.greenXY = _this.add.image(42, 265, 'greenXY');
        _this.letter5.bringToTop();

        _this.greenXY.inputEnabled = true;
        _this.greenXY.input.enableDrag();
        _this.greenXY.input.useHandCursor = true;
        _this.greenXY.events.onDragStop.add(_this.DragGreenXY, _this);
    },

    DragPinkXY: function () {
        if (_this.destroyWrongObj.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj[0];

            // Set the position of the p1 object to the destroyed position
            _this.pinkXY.position.x = pos.x;
            _this.pinkXY.position.y = pos.y;

            _this.pinkXY.destroy();
            _this.pinkXY = _this.add.sprite(pos.x, pos.y, 'all_3');
            _this.pinkXY.frame = 0;
            _this.pinkXY.name = '10';

            _this.space7Boxes.addChild(_this.pinkXY);

            // Remove the destroyed position from the array
            _this.destroyWrongObj.shift();

            console.log(_this.destroyWrongObj, '_this.destroyWrongObj,shift()')
        }
        else if (_this.destroyWrongObj5.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj5[0];

            // Set the position of the p1 object to the destroyed position
            _this.pinkXY.position.x = pos.x;
            _this.pinkXY.position.y = pos.y;

            _this.pinkXY.destroy();
            _this.pinkXY = _this.add.sprite(pos.x, pos.y, 'all_1');
            _this.pinkXY.frame = 0;
            _this.pinkXY.name = '9';

            _this.space7Boxes.addChild(_this.pinkXY);

            // Remove the destroyed position from the array
            _this.destroyWrongObj5.shift();

            console.log(_this.destroyWrongObj5, '_this.destroyWrongObj5,shift()')
        }
        else if (_this.erasedPos8.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos8[0];

            _this.pinkXY.position.x = post.x;
            _this.pinkXY.position.y = post.y;

            _this.pinkXY.destroy();
            _this.pinkXY = _this.add.sprite(post.x, post.y, 'all_1');
            _this.pinkXY.frame = 0;
            _this.pinkXY.name = '9';

            _this.space7Boxes.addChild(_this.pinkXY);

            // Remove the destroyed position from the array
            _this.erasedPos8.shift();

            console.log(_this.erasedPos8, '_this.erasedPos8,shift()')
        }
        else if (_this.erasedPos9.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos9[0];

            _this.pinkXY.position.x = post.x;
            _this.pinkXY.position.y = post.y;

            _this.pinkXY.destroy();
            _this.pinkXY = _this.add.sprite(post.x, post.y, 'all_3');
            _this.pinkXY.frame = 0;
            _this.pinkXY.name = '10';

            _this.space7Boxes.addChild(_this.pinkXY);

            // Remove the destroyed position from the array
            _this.erasedPos9.shift();

            console.log(_this.erasedPos9, '_this.erasedPos9,shift()')
        }
        else {
            if (_this.objPositions12.length > 0) {
                // Get the first destroyed position
                var pos = _this.objPositions12[0];

                // Set the position of the p1 object to the destroyed position
                _this.pinkXY.position.x = pos.x;
                _this.pinkXY.position.y = pos.y;

                _this.pinkXY.destroy();
                _this.pinkXY = _this.add.sprite(pos.x, 201, 'all_1');
                _this.pinkXY.frame = 0;
                _this.pinkXY.name = '9';

                _this.space7Boxes.addChild(_this.pinkXY);

                // Remove the destroyed position from the array
                _this.objPositions12.shift();

                console.log(_this.objPositions12, '_this.objPositions12,shift()')
            }
            else if (_this.objPositions11.length > 0) {
                // Get the first destroyed position
                var pos = _this.objPositions11[0];

                // Set the position of the p1 object to the destroyed position
                _this.pinkXY.position.x = pos.x;
                _this.pinkXY.position.y = pos.y;

                _this.pinkXY.destroy();
                _this.pinkXY = _this.add.sprite(pos.x, 201, 'all_3');
                _this.pinkXY.frame = 0;
                _this.pinkXY.name = '10';

                _this.space7Boxes.addChild(_this.pinkXY);

                // Remove the destroyed position from the array
                _this.objPositions11.shift();

                console.log(_this.objPositions11, '_this.objPositions11,shift()')
            }
            else {
                _this.pinkXY.destroy();
                _this.wrongSound.play();
            }
        }

        _this.pinkXY = _this.add.image(155, 265, 'pinkXY');
        _this.letter6.bringToTop();

        _this.pinkXY.inputEnabled = true;
        _this.pinkXY.input.enableDrag();
        _this.pinkXY.input.useHandCursor = true;
        _this.pinkXY.events.onDragStop.add(_this.DragPinkXY, _this);
    },

    DragGreenY: function () {
        if (_this.destroyWrongPos2.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongPos2[0];

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
            _this.destroyWrongPos2.shift();

            console.log(_this.destroyWrongPos2, '_this.destroyWrongPos2,shift()')
        } else if (_this.destroyWrongPos3.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongPos3[0];

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
            _this.destroyWrongPos3.shift();

            console.log(_this.destroyWrongPos3, '_this.destroyWrongPos3,shift()')
        }
        else if (_this.destroyWrongObj4.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj4[0];

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
            _this.destroyWrongObj4.shift();

            console.log(_this.destroyWrongObj4, '_this.destroyWrongObj4,shift()')
        }
        else if (_this.destroyWrongObj8.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj8[0];

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
            _this.destroyWrongObj8.shift();

            console.log(_this.destroyWrongObj8, '_this.destroyWrongObj8,shift()')
        }
        else if (_this.erasedPos10.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos10[0];

            _this.green_Y.position.x = post.x;
            _this.green_Y.position.y = post.y;

            _this.green_YDup.destroy();
            _this.green_Y.destroy();
            _this.green_Y = _this.add.sprite(post.x, post.y, 'green4');
            _this.green_Y.frame = 0;
            _this.green_Y.name = '11';

            _this.space7Boxes.addChild(_this.green_Y);

            // Remove the destroyed position from the array
            _this.erasedPos10.shift();

            console.log(_this.erasedPos10, '_this.erasedPos10,shift()')
        }
        else if (_this.erasedPos11.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos11[0];

            _this.green_Y.position.x = post.x;
            _this.green_Y.position.y = post.y;

            _this.green_YDup.destroy();
            _this.green_Y.destroy();
            _this.green_Y = _this.add.sprite(post.x, post.y, 'green3');
            _this.green_Y.frame = 0;
            _this.green_Y.name = '12';

            _this.space7Boxes.addChild(_this.green_Y);

            // Remove the destroyed position from the array
            _this.erasedPos11.shift();

            console.log(_this.erasedPos11, '_this.erasedPos11,shift()')
        }
        else {
            if (_this.objPositions8.length > 0) {
                console.log('Drag vertically')
                var pos = _this.objPositions8[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_Y.position.x = pos.x;
                _this.green_Y.position.y = pos.y;

                _this.green_YDup.destroy();
                _this.green_Y.destroy();
                _this.green_Y = _this.add.sprite(pos.x, 201, 'green4');
                _this.green_Y.frame = 0;
                _this.green_Y.name = '11';

                _this.space7Boxes.addChild(_this.green_Y);

                _this.objPositions8.shift();
            }

            else if (_this.pairedValuesforY.length > 0) {
                console.log('Drag horizontally')
                var pos = _this.pairedValuesforY[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_Y.position.x = pos.x;
                _this.green_Y.position.y = pos.y;

                _this.green_YDup.destroy();
                _this.green_Y.destroy();
                _this.green_Y = _this.add.sprite(pos.x, pos.y, 'green3');
                _this.green_Y.frame = 0;
                _this.green_Y.name = '12';

                _this.space7Boxes.addChild(_this.green_Y);

                _this.pairedValuesforY.shift();

            }
            else if (_this.pairedValuesforY2.length > 0) {
                console.log('Drag horizontally')
                var pos = _this.pairedValuesforY2[0];

                // Set the position of the p1 object to the destroyed position
                _this.green_Y.position.x = pos.x;
                _this.green_Y.position.y = pos.y;

                _this.green_YDup.destroy();
                _this.green_Y.destroy();
                _this.green_Y = _this.add.sprite(pos.x + 2, pos.y, 'green4');
                _this.green_Y.frame = 0;
                _this.green_Y.name = '11';

                _this.space7Boxes.addChild(_this.green_Y);

                _this.pairedValuesforY2.shift();

            }
            else {
                _this.wrongSound.play();
                _this.green_Y.destroy();
                _this.green_YDup.destroy();
            }

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
        if (_this.destroyWrongPos2.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongPos2[0];

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
            _this.destroyWrongPos2.shift();

            console.log(_this.destroyWrongPos2, '_this.destroyWrongPos2,shift()')
        }
        else if (_this.destroyWrongPos3.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongPos3[0];

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
            _this.destroyWrongPos3.shift();

            console.log(_this.destroyWrongPos3, '_this.destroyWrongPos3,shift()')
        }
        else if (_this.destroyWrongObj4.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj4[0];

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
            _this.destroyWrongObj4.shift();

            console.log(_this.destroyWrongObj4, '_this.destroyWrongObj4,shift()')
        }

        else if (_this.destroyWrongObj8.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj8[0];

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
            _this.destroyWrongObj8.shift();

            console.log(_this.destroyWrongObj8, '_this.destroyWrongObj8,shift()')
        }
        else if (_this.erasedPos10.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos10[0];

            _this.pink_Y.position.x = post.x;
            _this.pink_Y.position.y = post.y;

            _this.pink_YDup.destroy();
            _this.pink_Y.destroy();
            _this.pink_Y = _this.add.sprite(post.x, post.y, 'pink4');
            _this.pink_Y.frame = 0;
            _this.pink_Y.name = '13';

            _this.space7Boxes.addChild(_this.pink_Y);

            // Remove the destroyed position from the array
            _this.erasedPos10.shift();

            console.log(_this.erasedPos10, '_this.erasedPos10,shift()')
        }
        else if (_this.erasedPos11.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos11[0];

            _this.pink_Y.position.x = post.x;
            _this.pink_Y.position.y = post.y;

            _this.pink_YDup.destroy();
            _this.pink_Y.destroy();
            _this.pink_Y = _this.add.sprite(post.x, post.y, 'pink3');
            _this.pink_Y.frame = 0;
            _this.pink_Y.name = '14';

            _this.space7Boxes.addChild(_this.pink_Y);

            // Remove the destroyed position from the array
            _this.erasedPos11.shift();

            console.log(_this.erasedPos11, '_this.erasedPos11,shift()')
        }
        else {
            if (_this.objPositions8.length > 0) {
                console.log('Drag vertically')
                var pos = _this.objPositions8[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_Y.position.x = pos.x;
                _this.pink_Y.position.y = pos.y;

                _this.pink_YDup.destroy();
                _this.pink_Y.destroy();
                _this.pink_Y = _this.add.sprite(pos.x + 1.5, 201, 'pink4');
                _this.pink_Y.frame = 0;
                _this.pink_Y.name = '13';

                _this.space7Boxes.addChild(_this.pink_Y);

                _this.objPositions8.shift();
            }

            else if (_this.pairedValuesforY.length > 0) {
                console.log('Drag horizontally')
                var pos = _this.pairedValuesforY[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_Y.position.x = pos.x;
                _this.pink_Y.position.y = pos.y;

                _this.pink_YDup.destroy();
                _this.pink_Y.destroy();
                _this.pink_Y = _this.add.sprite(pos.x, pos.y, 'pink3');
                _this.pink_Y.frame = 0;
                _this.pink_Y.name = '14';

                _this.space7Boxes.addChild(_this.pink_Y);

                _this.pairedValuesforY.shift();

            }
            else if (_this.pairedValuesforY2.length > 0) {
                console.log('Drag horizontally')
                var pos = _this.pairedValuesforY2[0];

                // Set the position of the p1 object to the destroyed position
                _this.pink_Y.position.x = pos.x;
                _this.pink_Y.position.y = pos.y;

                _this.pink_YDup.destroy();
                _this.pink_Y.destroy();
                _this.pink_Y = _this.add.sprite(pos.x + 2, pos.y, 'pink4');
                _this.pink_Y.frame = 0;
                _this.pink_Y.name = '13';

                _this.space7Boxes.addChild(_this.pink_Y);

                _this.pairedValuesforY2.shift();

            }
            else {
                _this.wrongSound.play();
                _this.pink_Y.destroy();
                _this.pink_YDup.destroy();
            }

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
        if (_this.destroyWrongPos.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongPos[0];

            // Set the position of the p1 object to the destroyed position
            _this.greenY2.position.x = pos.x;
            _this.greenY2.position.y = pos.y;

            _this.greenY2.destroy();
            _this.greenY2 = _this.add.sprite(pos.x, pos.y, 'all_4');
            _this.greenY2.frame = 2;
            _this.greenY2.name = '15';

            _this.space7Boxes.addChild(_this.greenY2);

            // Remove the destroyed position from the array
            _this.destroyWrongPos.shift();

            console.log(_this.destroyWrongPos, '_this.destroyWrongPos,shift()')
        }
        else if (_this.destroyWrongObj3.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj3[0];

            // Set the position of the p1 object to the destroyed position
            _this.greenY2.position.x = pos.x;
            _this.greenY2.position.y = pos.y;

            _this.greenY2.destroy();
            _this.greenY2 = _this.add.sprite(pos.x, pos.y, 'all_4');
            _this.greenY2.frame = 2;
            _this.greenY2.name = '15';

            _this.space7Boxes.addChild(_this.greenY2);

            // Remove the destroyed position from the array
            _this.destroyWrongObj3.shift();

            console.log(_this.destroyWrongObj3, '_this.destroyWrongObj3,shift()')
        }
        else if (_this.erasedPos12.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos12[0];

            _this.greenY2.position.x = post.x;
            _this.greenY2.position.y = post.y;

            _this.greenY2.destroy();
            _this.greenY2 = _this.add.sprite(post.x, post.y, 'all_4');
            _this.greenY2.frame = 2;
            _this.greenY2.name = '15';

            _this.space7Boxes.addChild(_this.greenY2);

            // Remove the destroyed position from the array
            _this.erasedPos12.shift();

            console.log(_this.erasedPos12, '_this.erasedPos12,shift()')
        }
        else if (_this.objPositions.length > 0) {
            var pos = _this.objPositions[0];
            _this.greenY2.position.x = pos.x;
            _this.greenY2.position.y = pos.y;

            _this.greenY2.destroy();
            _this.greenY2 = _this.add.sprite(pos.x, 201, 'all_4');
            _this.greenY2.frame = 2;
            _this.greenY2.name = '15';

            _this.space7Boxes.addChild(_this.greenY2);
            // Remove the destroyed position from the array
            _this.objPositions.shift();

        }
        else if (_this.pairedValuesforYSq.length > 0) {
            var pos = _this.pairedValuesforYSq[0];
            _this.greenY2.position.x = pos.x;
            _this.greenY2.position.y = pos.y;

            _this.greenY2.destroy();
            _this.greenY2 = _this.add.sprite(pos.x, pos.y, 'all_4');
            _this.greenY2.frame = 2;
            _this.greenY2.name = '15';

            _this.space7Boxes.addChild(_this.greenY2);
            // Remove the destroyed position from the array
            _this.pairedValuesforYSq.shift();

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
        if (_this.destroyWrongPos.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongPos[0];

            // Set the position of the p1 object to the destroyed position
            _this.pinkY2.position.x = pos.x;
            _this.pinkY2.position.y = pos.y;

            _this.pinkY2.destroy();
            _this.pinkY2 = _this.add.sprite(pos.x, pos.y, 'all_4');
            _this.pinkY2.frame = 0;
            _this.pinkY2.name = '16';

            _this.space7Boxes.addChild(_this.pinkY2);

            // Remove the destroyed position from the array
            _this.destroyWrongPos.shift();

            console.log(_this.destroyWrongPos, '_this.destroyWrongPos,shift()')
        }
        else if (_this.destroyWrongObj3.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongObj3[0];

            // Set the position of the p1 object to the destroyed position
            _this.pinkY2.position.x = pos.x;
            _this.pinkY2.position.y = pos.y;

            _this.pinkY2.destroy();
            _this.pinkY2 = _this.add.sprite(pos.x, pos.y, 'all_4');
            _this.pinkY2.frame = 0;
            _this.pinkY2.name = '16';

            _this.space7Boxes.addChild(_this.pinkY2);

            // Remove the destroyed position from the array
            _this.destroyWrongObj3.shift();

            console.log(_this.destroyWrongObj3, '_this.destroyWrongObj3,shift()')
        }
        else if (_this.erasedPos12.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos12[0];

            _this.pinkY2.position.x = post.x;
            _this.pinkY2.position.y = post.y;

            _this.pinkY2.destroy();
            _this.pinkY2 = _this.add.sprite(post.x, post.y, 'all_4');
            _this.pinkY2.frame = 0;
            _this.pinkY2.name = '16';

            _this.space7Boxes.addChild(_this.pinkY2);

            // Remove the destroyed position from the array
            _this.erasedPos12.shift();

            console.log(_this.erasedPos12, '_this.erasedPos12,shift()')
        }
        else if (_this.objPositions.length > 0) {
            var pos = _this.objPositions[0];
            _this.pinkY2.position.x = pos.x;
            _this.pinkY2.position.y = pos.y;

            _this.pinkY2.destroy();
            _this.pinkY2 = _this.add.sprite(pos.x, 201, 'all_4');
            _this.pinkY2.frame = 0;
            _this.pinkY2.name = '16';

            _this.space7Boxes.addChild(_this.pinkY2);
            // Remove the destroyed position from the array
            _this.objPositions.shift();

        }
        else if (_this.pairedValuesforYSq.length > 0) {
            var pos = _this.pairedValuesforYSq[0];
            _this.pinkY2.position.x = pos.x;
            _this.pinkY2.position.y = pos.y;

            _this.pinkY2.destroy();
            _this.pinkY2 = _this.add.sprite(pos.x, pos.y, 'all_4');
            _this.pinkY2.frame = 0;
            _this.pinkY2.name = '16';

            _this.space7Boxes.addChild(_this.pinkY2);
            // Remove the destroyed position from the array
            _this.pairedValuesforYSq.shift();

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
        if (_this.destroyWrongPos4.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongPos4[0];

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
            _this.destroyWrongPos4.shift();

            console.log(_this.destroyWrongPos4, '_this.destroyWrongPos4,shift()')
        }
        else if (_this.erasedPos13.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos13[0];

            _this.green_6.position.x = post.x;
            _this.green_6.position.y = post.y;

            _this.green_6Dup.destroy();
            _this.green_6.destroy();
            _this.green_6 = _this.add.sprite(post.x, post.y, 'greenBig3');
            _this.green_6.frame = 0;
            _this.green_6.name = '17';

            _this.space7Boxes.addChild(_this.green_6);

            // Remove the destroyed position from the array
            _this.erasedPos13.shift();

            console.log(_this.erasedPos13, '_this.erasedPos13,shift()')
        }
        else if (_this.pairedConst.length > 0) {

            var pos = _this.pairedConst[0];
            _this.green_6.position.x = pos.x;
            _this.green_6.position.y = pos.y;

            _this.green_6Dup.destroy();
            _this.green_6.destroy();
            _this.green_6 = _this.add.sprite(pos.x, pos.y, 'greenBig3');
            _this.green_6.frame = 0;
            _this.green_6.name = '17';

            _this.space7Boxes.addChild(_this.green_6);

            // Remove the dragged position from the array
            _this.pairedConst.shift();

        }
        else {
            _this.green_6.destroy();
            _this.green_6Dup.destroy();
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
        if (_this.destroyWrongPos4.length > 0) {
            // Get the first destroyed position
            var pos = _this.destroyWrongPos4[0];

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
            _this.destroyWrongPos4.shift();

            console.log(_this.destroyWrongPos4, '_this.destroyWrongPos4,shift()')
        }
        else if (_this.erasedPos13.length > 0) {
            console.log('eraser parttttttttttttt 2')
            var post = _this.erasedPos13[0];

            _this.pink_6.position.x = post.x;
            _this.pink_6.position.y = post.y;

            _this.pink_6Dup.destroy();
            _this.pink_6.destroy();
            _this.pink_6 = _this.add.sprite(post.x, post.y, 'pinkBig3');
            _this.pink_6.frame = 0;
            _this.pink_6.name = '18';

            _this.space7Boxes.addChild(_this.pink_6);

            // Remove the destroyed position from the array
            _this.erasedPos13.shift();

            console.log(_this.erasedPos13, '_this.erasedPos13,shift()')
        }
        else if (_this.pairedConst.length > 0) {

            var pos = _this.pairedConst[0];
            _this.pink_6.position.x = pos.x;
            _this.pink_6.position.y = pos.y;

            _this.pink_6Dup.destroy();
            _this.pink_6.destroy();
            _this.pink_6 = _this.add.sprite(pos.x, pos.y, 'pinkBig3');
            _this.pink_6.frame = 0;
            _this.pink_6.name = '18';

            _this.space7Boxes.addChild(_this.pink_6);

            // Remove the dragged position from the array
            _this.pairedConst.shift();

        }
        else {
            _this.pink_6.destroy();
            _this.pink_6Dup.destroy();
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
        if (_this.zeroPair[0] == 2) {

            let a = [];
            let b = [];
            a.push(0);
            a.push(0);
            a.push(0);
            a.push(0);

            b.push(0);
            b.push(0);
            b.push(0);
            b.push(0);

            for (let i = 0; i < _this.space7Boxes.length; i++) {
                if (_this.space7Boxes.getChildAt(i).name == '15') {
                    a[0] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '16') {
                    b[0] += 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '11') {
                    a[1] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '13') {
                    b[1] += 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '12') {
                    a[2] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '14') {
                    b[2] += 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '17') {
                    a[3] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '18') {
                    b[3] += 1;
                }
            }

            if ((a[0] == 0 && b[0] == _this.four) && (a[1] == _this.splitSecond_3 && b[1] == 0 && a[2] == 0 && b[2] == _this.splitSecond_4) && (a[3] == _this.six && b[3] == 0) || (a[0] == 0 && b[0] == _this.four) && (a[1] == 0 && b[1] == _this.splitSecond_3 && a[2] == _this.splitSecond_4 && b[2] == 0) && (a[3] == _this.six && b[3] == 0)) {
                console.log('correct', a[0], b[0], a[1], b[1], a[2], b[2], a[3], b[3])
                _this.ValidationFlag2 = 1;
                _this.counterCelebrationSound.play();



                _this.removeObj_3 = [];
                _this.removeObj_4 = [];

                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name == '11' || obj.name == '13') _this.removeObj_3.push(obj);
                    else if (obj.name == '12' || obj.name == '14') _this.removeObj_4.push(obj);
                });

                _this.removeObj_3.sort(function (a, b) {
                    if (a.y === b.y) {
                        return a.x - b.x; // Sort by x position if y positions are equal
                    } else {
                        return a.y - b.y; // Sort by y position
                    }
                });

                // Sort _this.removeObj_2 array based on x and y positions
                _this.removeObj_4.sort(function (a, b) {
                    if (a.y === b.y) {
                        return a.x - b.x; // Sort by x position if y positions are equal
                    } else {
                        return a.y - b.y; // Sort by y position
                    }
                });

                _this.Zeropairing2();
            } else {
                _this.ValidationFlag2 = 0;
                _this.wrongSound.play();
                console.log('wrong', a[0], b[0],)
                console.log('wrong', a[1], b[1],)
                console.log('wrong', a[2], b[2],)
                console.log('wrong', a[3], b[3],)

                // here result 1 for horizontal x and result2 for const

                if (_this.Assign2[0] === 0) {
                    _this.resultA = _this.Assign2[1] * _this.Assign3[1];
                    _this.resultB = _this.Assign2[1] * _this.Assign4[0];
                } else if (_this.Assign2[1] === 0) {
                    _this.resultA = _this.Assign2[0] * _this.Assign3[1];
                    _this.resultB = _this.Assign2[0] * _this.Assign4[1];
                }

                let square_Array = [];
                let verticalX_Array = [];
                let horizontalX_Array = [];
                let constant_Array = [];


                _this.space7Boxes.forEach(function (obj) {
                    if (obj.name == '15' || obj.name == '16') square_Array.push(obj);
                    else if (obj.name == '11' || obj.name == '13') verticalX_Array.push(obj);
                    else if (obj.name == '12' || obj.name == '14') horizontalX_Array.push(obj);
                    else if (obj.name == '17' || obj.name == '18') constant_Array.push(obj);
                });

                console.log(square_Array.length, 'y²');
                console.log(verticalX_Array.length, 'Yv');
                console.log(horizontalX_Array.length, 'Yh');
                console.log(constant_Array.length, '1');


                if (_this.Assign3[1] > 0) {
                    square_Array.forEach(function (obj) {
                        if (obj.name == '15') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongPos.length; i++) {
                                var pos = _this.destroyWrongPos[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongPos.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyObj.push(obj);
                            }
                        }
                    });
                }
                if (_this.Assign4[0] < 0) {
                    verticalX_Array.forEach(function (obj) {
                        if (obj.name == '13') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongPos2.length; i++) {
                                var pos = _this.destroyWrongPos2[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongPos2.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyObj.push(obj);
                            }
                        }
                    });
                }
                else if (_this.Assign4[1] > 0) {
                    verticalX_Array.forEach(function (obj) {
                        if (obj.name == '11') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongPos2.length; i++) {
                                var pos = _this.destroyWrongPos2[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongPos2.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyObj.push(obj);
                            }
                        }
                    });
                }

                if (_this.resultA < 0) {
                    horizontalX_Array.forEach(function (obj) {
                        if (obj.name == '14') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongPos3.length; i++) {
                                var pos = _this.destroyWrongPos3[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongPos3.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyObj.push(obj);
                            }
                        }
                    });
                } else if (_this.resultA > 0) {
                    horizontalX_Array.forEach(function (obj) {
                        if (obj.name == '12') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongPos3.length; i++) {
                                var pos = _this.destroyWrongPos3[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongPos3.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyObj.push(obj);
                            }
                        }
                    });
                }

                if (_this.resultB < 0) {
                    constant_Array.forEach(function (obj) {
                        if (obj.name == '18') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongPos4.length; i++) {
                                var pos = _this.destroyWrongPos4[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongPos4.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyObj.push(obj);
                            }
                        }
                    });
                } else if (_this.resultB > 0) {
                    constant_Array.forEach(function (obj) {
                        if (obj.name == '17') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongPos4.length; i++) {
                                var pos = _this.destroyWrongPos4[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongPos4.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyObj.push(obj);
                            }
                        }
                    });
                }

                _this.toDestroyObj.forEach(function (obj) {
                    obj.destroy();
                });
            }
        }

        else if (_this.zeroPair[0] == 1) {
            let a = [];
            let b = [];
            a.push(0);
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
            b.push(0);

            for (let i = 0; i < _this.space7Boxes.length; i++) {
                if (_this.space7Boxes.getChildAt(i).name == '1') { // x2
                    a[0] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '2') {
                    b[0] += 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '3') { // vertical x
                    a[1] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '5') {
                    b[1] += 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '4') { // horizontal x
                    a[2] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '6') {
                    b[2] += 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '7') { // horizontal xy
                    a[3] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '9') {
                    b[3] += 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '8') { // vertical xy
                    a[4] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '10') {
                    b[4] += 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '11') { // vertical y
                    a[5] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '13') {
                    b[5] += 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '12') { // horizontal y
                    a[6] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '14') {
                    b[6] += 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '15') { //y2
                    a[7] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '16') {
                    b[7] += 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '17') { //+1
                    a[8] -= 1;
                }
                else if (_this.space7Boxes.getChildAt(i).name == '18') {
                    b[8] += 1;
                }
            }

            if (_this.decideSign[0] === 1) {
                if ((a[4] == 0 && b[4] == _this.pair1) && (a[1] == 0 && b[1] == _this.pair2) && (a[7] == 0 && b[7] == _this.pair3) && (a[5] == 0 && b[5] == _this.pair4)) {
                    console.log('correct', a[4], b[4], a[1], b[1], a[7], b[7], a[5], b[5])
                    _this.ValidationFlag2 = 1;
                    _this.counterCelebrationSound.play();
                    _this.Zeropairing2();
                } else {
                    console.log('wrong', a[4], b[4], a[1], b[1], a[7], b[7], a[5], b[5])
                    _this.ValidationFlag2 = 0;
                    _this.wrongSound.play();

                    let XY_Array = []; // vertical
                    let verticalX_Array = [];
                    let verticalY_Array = [];
                    let Ysquare_Array = [];


                    _this.space7Boxes.forEach(function (obj) {
                        if (obj.name == '8' || obj.name == '10') XY_Array.push(obj);
                        else if (obj.name == '3' || obj.name == '5') verticalX_Array.push(obj);
                        else if (obj.name == '15' || obj.name == '16') Ysquare_Array.push(obj);
                        else if (obj.name == '11' || obj.name == '13') verticalY_Array.push(obj);
                    });

                    XY_Array.forEach(function (obj) {
                        if (obj.name == '8') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj.length; i++) {
                                var pos = _this.destroyWrongObj[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    verticalX_Array.forEach(function (obj) {
                        if (obj.name == '3') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj2.length; i++) {
                                var pos = _this.destroyWrongObj2[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj2.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    Ysquare_Array.forEach(function (obj) {
                        if (obj.name == '15') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj3.length; i++) {
                                var pos = _this.destroyWrongObj3[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj3.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    verticalY_Array.forEach(function (obj) {
                        if (obj.name == '11') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj4.length; i++) {
                                var pos = _this.destroyWrongObj4[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj4.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    _this.toDestroyWrong.forEach(function (obj) {
                        obj.destroy();
                    });
                }
            }
            if (_this.decideSign[0] === 2) {
                if ((a[3] == 0 && b[3] == _this.pair1) && (a[7] == _this.pair2 && b[7] == 0) && (a[2] == _this.pair3 && b[2] == 0) && (a[6] == 0 && b[6] == _this.pair4)) {
                    console.log('correct', a[3], b[3], a[7], b[7], a[2], b[2], a[6], b[6])
                    _this.ValidationFlag2 = 1;
                    _this.counterCelebrationSound.play();
                    _this.Zeropairing2();
                } else {
                    console.log('wrong', a[3], b[3], a[7], b[7], a[2], b[2], a[6], b[6])
                    _this.ValidationFlag2 = 0;
                    _this.wrongSound.play();

                    let XY_Array = []; //  horizontal
                    let horizontalX_Array = [];
                    let horizontalY_Array = [];
                    let Ysquare_Array = [];


                    _this.space7Boxes.forEach(function (obj) {
                        if (obj.name == '7' || obj.name == '9') XY_Array.push(obj);
                        else if (obj.name == '4' || obj.name == '6') horizontalX_Array.push(obj);
                        else if (obj.name == '15' || obj.name == '16') Ysquare_Array.push(obj);
                        else if (obj.name == '12' || obj.name == '14') horizontalY_Array.push(obj);
                    });

                    XY_Array.forEach(function (obj) {
                        if (obj.name == '7') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj5.length; i++) {
                                var pos = _this.destroyWrongObj5[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj5.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    horizontalX_Array.forEach(function (obj) {
                        if (obj.name == '6') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj6.length; i++) {
                                var pos = _this.destroyWrongObj6[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj6.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    Ysquare_Array.forEach(function (obj) {
                        if (obj.name == '16') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj3.length; i++) {
                                var pos = _this.destroyWrongObj3[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj3.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    horizontalY_Array.forEach(function (obj) {
                        if (obj.name == '12') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj8.length; i++) {
                                var pos = _this.destroyWrongObj8[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj8.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    _this.toDestroyWrong.forEach(function (obj) {
                        obj.destroy();
                    });
                }
            }
            else if (_this.decideSign[0] === 3) {
                if ((a[0] == 0 && b[0] == _this.pair1) && (a[4] == 0 && b[4] == _this.pair2) && (a[2] == 0 && b[2] == _this.pair3) && (a[6] == 0 && b[6] == _this.pair4)) {
                    console.log('correct', a[0], b[0], a[4], b[4], a[2], b[2], a[6], b[6])
                    _this.ValidationFlag2 = 1;
                    _this.counterCelebrationSound.play();
                    _this.Zeropairing2();
                } else {
                    console.log('wrong', a[0], b[0], a[4], b[4], a[2], b[2], a[6], b[6])
                    _this.ValidationFlag2 = 0;
                    _this.wrongSound.play();

                    let XY_Array = []; // vertical
                    let horizontalX_Array = [];
                    let horizontalY_Array = [];
                    let Xsquare_Array = [];


                    _this.space7Boxes.forEach(function (obj) {
                        if (obj.name == '8' || obj.name == '10') XY_Array.push(obj);
                        else if (obj.name == '4' || obj.name == '6') horizontalX_Array.push(obj);
                        else if (obj.name == '1' || obj.name == '2') Xsquare_Array.push(obj);
                        else if (obj.name == '12' || obj.name == '14') horizontalY_Array.push(obj);
                    });

                    XY_Array.forEach(function (obj) {
                        if (obj.name == '8') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj.length; i++) {
                                var pos = _this.destroyWrongObj[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    horizontalX_Array.forEach(function (obj) {
                        if (obj.name == '4') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj6.length; i++) {
                                var pos = _this.destroyWrongObj6[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj6.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    Xsquare_Array.forEach(function (obj) {
                        if (obj.name == '1') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj9.length; i++) {
                                var pos = _this.destroyWrongObj9[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj9.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    horizontalY_Array.forEach(function (obj) {
                        if (obj.name == '12') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj8.length; i++) {
                                var pos = _this.destroyWrongObj8[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj8.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    _this.toDestroyWrong.forEach(function (obj) {
                        obj.destroy();
                    });
                }
            }
            else if (_this.decideSign[0] === 4) {
                if ((a[3] == _this.pair1 && b[3] == 0) && (a[7] == 0 && b[7] == _this.pair2) && (a[2] == _this.pair3 && b[2] == 0) && (a[6] == 0 && b[6] == _this.pair4)) {
                    console.log('correct', a[3], b[3], a[7], b[7], a[2], b[2], a[6], b[6])
                    _this.ValidationFlag2 = 1;
                    _this.counterCelebrationSound.play();
                    _this.Zeropairing2();
                } else {
                    console.log('wrong', a[3], b[3], a[7], b[7], a[2], b[2], a[6], b[6])
                    _this.ValidationFlag2 = 0;
                    _this.wrongSound.play();

                    let XY_Array = []; //  horizontal
                    let horizontalX_Array = [];
                    let horizontalY_Array = [];
                    let Ysquare_Array = [];


                    _this.space7Boxes.forEach(function (obj) {
                        if (obj.name == '7' || obj.name == '9') XY_Array.push(obj);
                        else if (obj.name == '4' || obj.name == '6') horizontalX_Array.push(obj);
                        else if (obj.name == '15' || obj.name == '16') Ysquare_Array.push(obj);
                        else if (obj.name == '12' || obj.name == '14') horizontalY_Array.push(obj);
                    });

                    XY_Array.forEach(function (obj) {
                        if (obj.name == '9') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj5.length; i++) {
                                var pos = _this.destroyWrongObj5[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj5.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    horizontalX_Array.forEach(function (obj) {
                        if (obj.name == '6') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj6.length; i++) {
                                var pos = _this.destroyWrongObj6[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj6.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    Ysquare_Array.forEach(function (obj) {
                        if (obj.name == '15') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj3.length; i++) {
                                var pos = _this.destroyWrongObj3[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj3.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    horizontalY_Array.forEach(function (obj) {
                        if (obj.name == '12') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyWrongObj8.length; i++) {
                                var pos = _this.destroyWrongObj8[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            // If position does not exist, add it to the array and add object to destroy list
                            if (!posExists) {
                                _this.destroyWrongObj8.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroyWrong.push(obj);
                            }
                        }
                    });

                    _this.toDestroyWrong.forEach(function (obj) {
                        obj.destroy();
                    });
                }
            }
        }



    },

    Zeropairing2: function () {
        //5th audio
        _this.pauseVoice();
        if (_this.count1 == 0) {
            _this.Ask_Question5.play();
        }
        _this.Question_flag = 4;

        _this.sideGray1.destroy();
        _this.sideGray2.destroy();

        _this.tick.destroy();

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





        _this.zeroPairSymbol = _this.add.sprite(790, 85, 'Symbol');
        _this.zeroPairSymbol.scale.setTo(0.73);
        _this.zeroPairSymbol.frame = 1;
        _this.zeroPairSymbol.inputEnabled = true;
        _this.zeroPairSymbol.input.useHandCursor = true;

        _this.zeroPairSymbol.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.zeroPairSymbol.events.onInputDown.removeAll();
            _this.zeroPairSymbol.frame = 0;

            if (_this.zeroPair[0] == 2) {
                _this.group3 = _this.add.group();
                _this.group4 = _this.add.group();

                _this.removeObj_3.forEach(function (obj) {
                    _this.group3.addChild(obj);
                });

                _this.removeObj_4.forEach(function (obj) {
                    _this.group4.addChild(obj);
                });

                const delay = 2000; // Delay of 2 seconds (2000 milliseconds)

                var children1 = _this.group3.children.slice(); // Create a shallow copy of the children array of group1
                var children2 = _this.group4.children.slice(); // Create a shallow copy of the children array of group2

                children1.reverse(); // Reverse the order of the children1 array
                children2.reverse(); // Reverse the order of the children2 array

                if ((children1.length < children2.length) || (children1.length === children2.length)) {
                    children1.forEach(function (child, index) {
                        _this.time.events.add(delay * (index + 1), function () {
                            _this.pairing.currentTime = 0;
                            _this.pairing.play();
                            child.destroy();
                            children2[index].destroy();

                            if (_this.group3.length === 0) {
                                _this.IfCorrectThen();
                            }
                        });
                    });
                }
                else if (children1.length > children2.length) {
                    children2.forEach(function (child, index) {
                        _this.time.events.add(delay * (index + 1), function () {
                            _this.pairing.currentTime = 0;
                            _this.pairing.play();
                            child.destroy();
                            children1[index].destroy();

                            if (_this.group4.length === 0) {
                                _this.IfCorrectThen();
                            }
                        });
                    });
                }
            }
            else if (_this.zeroPair[0] == 1) {
                _this.IfCorrectThen();
            }


        });
    },

    IfCorrectThen: function () {
        //6th audio
        _this.pauseVoice();
        if (_this.count1 == 0) {
            _this.Ask_Question6.play();
        }
        _this.Question_flag = 5;

        _this.zeroPairSymbol.destroy();
        _this.textBox.destroy();
        _this.removeStyle(_this.DisplayEquation);

        _this.pairedValuesforY.length = 0;
        _this.pairedConst.length = 0;
        _this.pairedValuesforX.length = 0;
        _this.pairedValuesforYSq.length = 0;
        _this.pairedValuesforY2.length = 0;
        _this.pairedValuesforY.length = 0;
        _this.pairedConst.length = 0;

        _this.objPositions.length = 0;
        _this.objPositions2.length = 0;
        _this.objPositions3.length = 0;
        _this.objPositions4.length = 0;
        _this.objPositions5.length = 0;
        _this.objPositions6.length = 0;
        _this.objPositions7.length = 0;
        _this.objPositions8.length = 0;
        _this.objPositions9.length = 0;
        _this.objPositions10.length = 0;
        _this.objPositions11.length = 0;
        _this.objPositions12.length = 0;
        _this.objPositions13.length = 0;
        _this.objPositions14.length = 0;
        _this.objPositions15.length = 0;
        _this.objPositions16.length = 0;

        _this.textBox = _this.add.sprite(220, 70, 'Text box_6');
        _this.textBox.scale.setTo(0.86, 1);

        _this.space1.y = 150;

        _this.DisplayEquation = _this.add.text(30, 20, _this.equation);
        _this.applyingStyleBlue(_this.DisplayEquation);
        _this.textBox.addChild(_this.DisplayEquation);

        _this.equalSign = _this.add.text(275, 20, '=');
        _this.applyingStyleBlue(_this.equalSign);
        _this.textBox.addChild(_this.equalSign);

        _this.addAnswerBoxAndHighlight2();

        // if (_this.count1 == 0) {
        //     _this.time.events.add(1000, function () {
        //         _this.Ask_Question3.play();
        //     });
        // }
        // _this.Question_flag = 3;
    },

    addAnswerBoxAndHighlight: function () {
        console.log("answerbox....");

        _this.AnswerBox1 = _this.add.sprite(330, 19, 'Text box_5');
        _this.AnswerBox1.scale.setTo(1.3, 1);

        _this.answerText1 = _this.add.text(420, 19, 'x²  +');
        _this.applyingStyleBlue(_this.answerText1);
        _this.textBox.addChild(_this.answerText1);

        _this.AnswerBox2 = _this.add.sprite(490, 19, 'Text box_5');
        _this.AnswerBox2.scale.setTo(1.3, 1);

        _this.answerText2 = _this.add.text(570, 19, 'x +');
        _this.applyingStyleBlue(_this.answerText2);
        _this.textBox.addChild(_this.answerText2);

        _this.AnswerBox3 = _this.add.sprite(620, 19, 'Text box_5');
        _this.AnswerBox3.scale.setTo(1.3, 1);


        _this.AnswerBox1.inputEnabled = true;
        _this.AnswerBox2.inputEnabled = true;
        _this.AnswerBox3.inputEnabled = true;

        _this.AnswerBox1.frame = 1;

        _this.AnswerBox1.input.useHandCursor = true;
        _this.AnswerBox2.input.useHandCursor = true;
        _this.AnswerBox3.input.useHandCursor = true;
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
        _this.AnswerBox2.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.AnswerBox1.frame = 0;
            _this.AnswerBox2.frame = 1;
            _this.AnswerBox3.frame = 0;
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
            for (let i = 1; i <= 12; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
            }
        });
        _this.AnswerBox3.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.AnswerBox1.frame = 0;
            _this.AnswerBox2.frame = 0;
            _this.AnswerBox3.frame = 1;
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked3, _this);
            for (let i = 1; i <= 12; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked3, _this);
            }
        });
        _this.textBox.addChild(_this.AnswerBox1);
        _this.textBox.addChild(_this.AnswerBox2);
        _this.textBox.addChild(_this.AnswerBox3);

    },

    addAnswerBoxAndHighlight2: function () {
        console.log("answerbox....");

        if (_this.zeroPair[0] === 2) {
            _this.AnswerBox1 = _this.add.sprite(330, 19, 'Text box_5');
            _this.AnswerBox1.scale.setTo(1.3, 1);

            _this.answerText1 = _this.add.text(420, 19, 'y²  +');
            _this.applyingStyleBlue(_this.answerText1);
            _this.textBox.addChild(_this.answerText1);

            _this.AnswerBox2 = _this.add.sprite(490, 19, 'Text box_5');
            _this.AnswerBox2.scale.setTo(1.3, 1);

            _this.answerText2 = _this.add.text(570, 19, 'y +');
            _this.applyingStyleBlue(_this.answerText2);
            _this.textBox.addChild(_this.answerText2);

            _this.AnswerBox3 = _this.add.sprite(620, 19, 'Text box_5');
            _this.AnswerBox3.scale.setTo(1.3, 1);


            _this.AnswerBox1.inputEnabled = true;
            _this.AnswerBox2.inputEnabled = true;
            _this.AnswerBox3.inputEnabled = true;

            _this.AnswerBox1.frame = 1;

            _this.AnswerBox1.input.useHandCursor = true;
            _this.AnswerBox2.input.useHandCursor = true;
            _this.AnswerBox3.input.useHandCursor = true;
            _this.addNumberPad3();

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
            _this.AnswerBox2.events.onInputDown.add(function () {
                _this.clickSound.play();
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox2.frame = 1;
                _this.AnswerBox3.frame = 0;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
                for (let i = 1; i <= 12; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
                }
            });
            _this.AnswerBox3.events.onInputDown.add(function () {
                _this.clickSound.play();
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox2.frame = 0;
                _this.AnswerBox3.frame = 1;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked3, _this);
                for (let i = 1; i <= 12; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked3, _this);
                }
            });
            _this.textBox.addChild(_this.AnswerBox1);
            _this.textBox.addChild(_this.AnswerBox2);
            _this.textBox.addChild(_this.AnswerBox3);
        }
        else if (_this.decideSign[0] == 1 || _this.decideSign[0] == 2 || _this.decideSign[0] == 4) {
            _this.AnswerBox1 = _this.add.sprite(300, 19, 'Text box_5');
            _this.AnswerBox1.scale.setTo(1.3, 1);

            _this.answerText1 = _this.add.text(380, 19, 'xy +');
            _this.applyingStyleBlue(_this.answerText1);
            _this.textBox.addChild(_this.answerText1);

            _this.AnswerBox2 = _this.add.sprite(445, 19, 'Text box_5');
            _this.AnswerBox2.scale.setTo(1.3, 1);

            _this.answerText2 = _this.add.text(525, 19, 'x +');
            _this.applyingStyleBlue(_this.answerText2);
            _this.textBox.addChild(_this.answerText2);

            _this.AnswerBox3 = _this.add.sprite(575, 19, 'Text box_5');
            _this.AnswerBox3.scale.setTo(1.3, 1);

            _this.answerText3 = _this.add.text(660, 19, 'y² +');
            _this.applyingStyleBlue(_this.answerText3);
            _this.textBox.addChild(_this.answerText3);

            _this.AnswerBox4 = _this.add.sprite(715, 19, 'Text box_5');
            _this.AnswerBox4.scale.setTo(1.3, 1);

            _this.answerText4 = _this.add.text(790, 19, 'y');
            _this.applyingStyleBlue(_this.answerText4);
            _this.textBox.addChild(_this.answerText4);


            _this.AnswerBox1.inputEnabled = true;
            _this.AnswerBox2.inputEnabled = true;
            _this.AnswerBox3.inputEnabled = true;
            _this.AnswerBox4.inputEnabled = true;

            _this.AnswerBox1.frame = 1;

            _this.AnswerBox1.input.useHandCursor = true;
            _this.AnswerBox2.input.useHandCursor = true;
            _this.AnswerBox3.input.useHandCursor = true;
            _this.AnswerBox4.input.useHandCursor = true;
            _this.addNumberPad2();

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
            _this.AnswerBox2.events.onInputDown.add(function () {
                _this.clickSound.play();
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox2.frame = 1;
                _this.AnswerBox3.frame = 0;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
                for (let i = 1; i <= 12; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
                }
            });
            _this.AnswerBox3.events.onInputDown.add(function () {
                _this.clickSound.play();
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox2.frame = 0;
                _this.AnswerBox3.frame = 1;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked3, _this);
                for (let i = 1; i <= 12; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked3, _this);
                }
            });
            _this.AnswerBox4.events.onInputDown.add(function () {
                _this.clickSound.play();
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox2.frame = 0;
                _this.AnswerBox3.frame = 0;
                _this.AnswerBox4.frame = 1;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked4, _this);
                for (let i = 1; i <= 12; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked4, _this);
                }
            });
            _this.textBox.addChild(_this.AnswerBox1);
            _this.textBox.addChild(_this.AnswerBox2);
            _this.textBox.addChild(_this.AnswerBox3);
            _this.textBox.addChild(_this.AnswerBox4);
        }
        else if (_this.decideSign[0] == 3) {
            _this.AnswerBox1 = _this.add.sprite(300, 19, 'Text box_5');
            _this.AnswerBox1.scale.setTo(1.3, 1);

            _this.answerText1 = _this.add.text(380, 19, 'x² +');
            _this.applyingStyleBlue(_this.answerText1);
            _this.textBox.addChild(_this.answerText1);

            _this.AnswerBox2 = _this.add.sprite(440, 19, 'Text box_5');
            _this.AnswerBox2.scale.setTo(1.3, 1);

            _this.answerText2 = _this.add.text(520, 19, 'xy +');
            _this.applyingStyleBlue(_this.answerText2);
            _this.textBox.addChild(_this.answerText2);

            _this.AnswerBox3 = _this.add.sprite(585, 19, 'Text box_5');
            _this.AnswerBox3.scale.setTo(1.3, 1);

            _this.answerText3 = _this.add.text(665, 19, 'x +');
            _this.applyingStyleBlue(_this.answerText3);
            _this.textBox.addChild(_this.answerText3);

            _this.AnswerBox4 = _this.add.sprite(715, 19, 'Text box_5');
            _this.AnswerBox4.scale.setTo(1.3, 1);

            _this.answerText4 = _this.add.text(790, 19, 'y');
            _this.applyingStyleBlue(_this.answerText4);
            _this.textBox.addChild(_this.answerText4);


            _this.AnswerBox1.inputEnabled = true;
            _this.AnswerBox2.inputEnabled = true;
            _this.AnswerBox3.inputEnabled = true;
            _this.AnswerBox4.inputEnabled = true;

            _this.AnswerBox1.frame = 1;

            _this.AnswerBox1.input.useHandCursor = true;
            _this.AnswerBox2.input.useHandCursor = true;
            _this.AnswerBox3.input.useHandCursor = true;
            _this.AnswerBox4.input.useHandCursor = true;
            _this.addNumberPad2();

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
            _this.AnswerBox2.events.onInputDown.add(function () {
                _this.clickSound.play();
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox2.frame = 1;
                _this.AnswerBox3.frame = 0;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
                for (let i = 1; i <= 12; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
                }
            });
            _this.AnswerBox3.events.onInputDown.add(function () {
                _this.clickSound.play();
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox2.frame = 0;
                _this.AnswerBox3.frame = 1;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked3, _this);
                for (let i = 1; i <= 12; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked3, _this);
                }
            });
            _this.AnswerBox4.events.onInputDown.add(function () {
                _this.clickSound.play();
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox2.frame = 0;
                _this.AnswerBox3.frame = 0;
                _this.AnswerBox4.frame = 1;
                _this.wrongbtn.events.onInputDown.removeAll();
                _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked4, _this);
                for (let i = 1; i <= 12; i++) {
                    _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                    _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked4, _this);
                }
            });
            _this.textBox.addChild(_this.AnswerBox1);
            _this.textBox.addChild(_this.AnswerBox2);
            _this.textBox.addChild(_this.AnswerBox3);
            _this.textBox.addChild(_this.AnswerBox4);
        }






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

        ssquare = _this.add.image(_this.horizontalX + 3, _this.horizontalY, 'greenBig3');
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

        NegConst = _this.add.image(_this.Xincrease2 + 2, _this.Yincrease2, 'greenBig3');
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

        PosConst = _this.add.image(_this.Xincrease2, _this.Yincrease2 - 2, 'pinkBig3');
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

                if (_this.lastObject.name == 'G1' || _this.lastObject.name == 'P1') {
                    _this.erasedPos1.push(erasedPos);
                }
                else if (_this.lastObject.name == 'G2' || _this.lastObject.name == 'P2') {
                    _this.erasedPos2.push(erasedPos);
                }
                else if (_this.lastObject.name == 'G2_1' || _this.lastObject.name == 'P2_1') {
                    _this.erasedPos3.push(erasedPos);
                }
                else if (_this.lastObject.name == 'G3' || _this.lastObject.name == 'P3') {
                    _this.erasedPos4.push(erasedPos);
                }

            }
        }

        // Sort the erased objects based on their x positions
        _this.erasedPos1.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });
        _this.erasedPos2.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });
        _this.erasedPos3.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });
        _this.erasedPos4.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });

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
                    _this.Xincrease2 -= 85;
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

                if (_this.lastObject.name === '1' || _this.lastObject.name === '2') {
                    _this.erasedPos5.push(erasedPos);
                }
                else if (_this.lastObject.name === '3' || _this.lastObject.name === '5') {
                    _this.erasedPos6.push(erasedPos);
                }
                else if (_this.lastObject.name === '4' || _this.lastObject.name === '6') {
                    _this.erasedPos7.push(erasedPos);
                }
                else if (_this.lastObject.name === '7' || _this.lastObject.name === '9') {
                    _this.erasedPos8.push(erasedPos);
                }
                else if (_this.lastObject.name === '8' || _this.lastObject.name === '10') {
                    _this.erasedPos9.push(erasedPos);
                }
                else if (_this.lastObject.name === '11' || _this.lastObject.name === '13') {
                    _this.erasedPos10.push(erasedPos);
                }
                else if (_this.lastObject.name === '12' || _this.lastObject.name === '14') {
                    _this.erasedPos11.push(erasedPos);
                }
                else if (_this.lastObject.name === '15' || _this.lastObject.name === '16') {
                    _this.erasedPos12.push(erasedPos);
                }
                else if (_this.lastObject.name === '17' || _this.lastObject.name === '18') {
                    _this.erasedPos13.push(erasedPos);
                }
            }
        }

        // Sort the erased objects based on their x positions
        _this.erasedPos5.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });
        _this.erasedPos6.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });
        _this.erasedPos7.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });
        _this.erasedPos8.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });
        _this.erasedPos9.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });
        _this.erasedPos10.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });
        _this.erasedPos11.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });
        _this.erasedPos12.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });
        _this.erasedPos13.sort(function (a, b) {
            if (a.y === b.y) {
                return a.x - b.x; // Sort by x if y values are equal
            } else {
                return a.y - b.y; // Sort by y otherwise
            }
        });

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

        var second = _this.varResult;
        var third = _this.third;
        second = Math.abs(second);
        third = Math.abs(third);


        if (_this.varResult === 0) {
            if ((Number(_this.finalval1) === _this.first && (_this.signNotselected1 == false)) && ((Number(_this.finalval2) === second) && _this.signNotselected3 == false && _this.signNotselected4 == false && (_this.finalval2 != '')) && ((Number(_this.finalval3) === third && _this.signNotselected5 == true && _this.signNotselected6 == false))) {
                console.log('correct')
            } else {
                _this.wrongSound.play();
                _this.disableInputs1();
                _this.disableInputs2();
                _this.disableInputs3();
                _this.AnswerBox1.frame = 1;
                _this.AnswerBox2.frame = 0;
                _this.AnswerBox3.frame = 0;
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
        else if (_this.varResult < 0 && _this.third < 0) {
            if ((_this.signNotselected3 == true) && (_this.finalval2 === '')) {
                console.log('entering -1 or - valueeeeeeeeeeee')
                _this.finalval2 = '1';
            }
            if ((Number(_this.finalval1) === _this.first && _this.signNotselected1 == false) && (Number(_this.finalval2) === second && _this.signNotselected3 == true) && (Number(_this.finalval3) === third && _this.signNotselected5 == true)) {
                console.log('correct')
            } else {
                _this.wrongSound.play();
                _this.disableInputs1();
                _this.disableInputs2();
                _this.disableInputs3();
                _this.AnswerBox1.frame = 1;
                _this.AnswerBox2.frame = 0;
                _this.AnswerBox3.frame = 0;
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
        } else if (_this.varResult > 0 && _this.third < 0) {
            if (_this.finalval2 === '+1' || _this.finalval2 === '') {
                console.log('entering -1 or - valueeeeeeeeeeee')
                _this.finalval2 = Number('1');
            }
            if (((Number(_this.finalval1) === _this.first && _this.signNotselected1 == false)) && ((Number(_this.finalval2) === second) && _this.signNotselected3 == false) && ((Number(_this.finalval3) === third) && _this.signNotselected5 == true)) {
                console.log('correct')
            } else {
                _this.wrongSound.play();
                _this.disableInputs1();
                _this.disableInputs2();
                _this.disableInputs3();
                _this.AnswerBox1.frame = 1;
                _this.AnswerBox2.frame = 0;
                _this.AnswerBox3.frame = 0;
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


        _this.numGroup.destroy();
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
        _this.time.events.add(4000, () => {
            _this.clearAll();

            if (_this.numberOfQuestions == 6) {
                _this.state.start('score', true, false, gameID, _this.microConcepts);
                // _this.state.start('AL_MUL3_G8Score');
            }
            else {
                _this.NextQuestion();
            }
        });
    },

    rightbtnClicked2: function () {
        console.log('right btn clicked 22')
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        _this.rightbtn_is_Clicked = true;
        // Evaluating negative numbers.

        if (_this.zeroPair[0] == 2) {
            var second = _this.resultVar;
            var third = _this.six;
            second = Math.abs(second);
            third = Math.abs(third);

            if (_this.resultVar === 0) {
                if ((Number(_this.finalval1) === _this.four && (_this.signNotselected1 == false)) && ((Number(_this.finalval2) === second) && _this.signNotselected3 == false && _this.signNotselected4 == false && (_this.finalval2 != '')) && ((Number(_this.finalval3) === third && _this.signNotselected5 == true && _this.signNotselected6 == false))) {
                    console.log('correct')
                } else {
                    _this.wrongSound.play();
                    _this.disableInputs1();
                    _this.disableInputs2();
                    _this.disableInputs3();
                    _this.AnswerBox1.frame = 1;
                    _this.AnswerBox2.frame = 0;
                    _this.AnswerBox3.frame = 0;
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
            else if (_this.resultVar < 0 && _this.six < 0) {
                if ((_this.signNotselected3 == true) && (_this.finalval2 === '')) {
                    console.log('entering -1 or - valueeeeeeeeeeee')
                    _this.finalval2 = '1';
                }
                if ((Number(_this.finalval1) === _this.four && _this.signNotselected1 == false) && (Number(_this.finalval2) === second && _this.signNotselected3 == true) && (Number(_this.finalval3) === third && _this.signNotselected5 == true)) {
                    console.log('correct')
                } else {
                    _this.wrongSound.play();
                    _this.disableInputs1();
                    _this.disableInputs2();
                    _this.disableInputs3();
                    _this.AnswerBox1.frame = 1;
                    _this.AnswerBox2.frame = 0;
                    _this.AnswerBox3.frame = 0;
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

            else if (_this.resultVar > 0 && _this.six < 0) {
                if (_this.finalval2 === '+1' || _this.finalval2 === '') {
                    console.log('entering -1 or - valueeeeeeeeeeee')
                    _this.finalval2 = Number('1');
                }
                if (((Number(_this.finalval1) === _this.four && _this.signNotselected1 == false)) && ((Number(_this.finalval2) === second) && _this.signNotselected3 == false) && ((Number(_this.finalval3) === third) && _this.signNotselected5 == true)) {
                    console.log('correct')
                } else {
                    _this.wrongSound.play();
                    _this.disableInputs1();
                    _this.disableInputs2();
                    _this.disableInputs3();
                    _this.AnswerBox1.frame = 1;
                    _this.AnswerBox2.frame = 0;
                    _this.AnswerBox3.frame = 0;
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
        }
        else if (_this.zeroPair[0] == 1) {
            var first = _this.pair1;
            var second = _this.pair2;
            var third = _this.pair3;
            var four = _this.pair4;

            Math.abs(first)
            Math.abs(second)
            Math.abs(third)
            Math.abs(four)

            if (_this.decideSign[0] === 1) {
                if (_this.finalval1 === '+1' || _this.finalval1 === '') {
                    console.log('entering -1 or - valueeeeeeeeeeee')
                    _this.finalval1 = Number('1');
                }
                if (_this.finalval2 === '+1' || _this.finalval2 === '') {
                    console.log('entering -1 or - valueeeeeeeeeeee')
                    _this.finalval2 = Number('1');
                }
                if (_this.finalval3 === '+1' || _this.finalval3 === '') {
                    console.log('entering -1 or - valueeeeeeeeeeee')
                    _this.finalval3 = Number('1');
                }
                if (_this.finalval4 === '+1' || _this.finalval4 === '') {
                    console.log('entering -1 or - valueeeeeeeeeeee')
                    _this.finalval4 = Number('1');
                }
                if (((Number(_this.finalval1) === _this.pair1) && _this.signNotselected1 === false) && ((Number(_this.finalval2) === _this.pair2) && _this.signNotselected3 === false) && ((Number(_this.finalval3) === _this.pair3) && _this.signNotselected5 === false) && ((Number(_this.finalval4) === _this.pair4) && _this.signNotselected7 === false)) {
                    console.log('correct')
                } else {
                    _this.wrongSound.play();
                    _this.disableInputs1();
                    _this.disableInputs2();
                    _this.disableInputs3();
                    _this.disableInputs4();
                    _this.AnswerBox1.frame = 1;
                    _this.AnswerBox2.frame = 0;
                    _this.AnswerBox3.frame = 0;
                    _this.AnswerBox4.frame = 0;
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
            else if (_this.decideSign[0] === 2) {
                console.log('22222222222')
                if (((Number(_this.finalval1) === Math.abs(_this.pair1)) && _this.signNotselected1 === false) && ((Number(_this.finalval2) === Math.abs(_this.pair3)) && _this.signNotselected3 === true) && ((Number(_this.finalval3) === Math.abs(_this.pair2)) && _this.signNotselected5 === true) && ((Number(_this.finalval4) === Math.abs(_this.pair4)) && _this.signNotselected7 === false)) {
                    console.log('correct')
                }
                else {
                    console.log('wrong', _this.finalval1, _this.finalval2, _this.finalval3, _this.finalval4, _this.signNotselected3, _this.signNotselected5)
                    _this.wrongSound.play();
                    _this.disableInputs1();
                    _this.disableInputs2();
                    _this.disableInputs3();
                    _this.disableInputs4();
                    _this.AnswerBox1.frame = 1;
                    _this.AnswerBox2.frame = 0;
                    _this.AnswerBox3.frame = 0;
                    _this.AnswerBox4.frame = 0;
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
            else if (_this.decideSign[0] === 4) {
                console.log('444444444')
                if ((_this.finalval1 === '') && (_this.signNotselected1 === true)) {
                    console.log('entering -1 or - valueeeeeeeeeeee')
                    _this.finalval1 = Number('1');
                }
                if (_this.finalval3 === '+1' || _this.finalval3 === '') {
                    console.log('entering +++++++')
                    _this.finalval3 = Number('1');
                }
                if (((Number(_this.finalval1) === Math.abs(_this.pair1)) && _this.signNotselected1 === true) && (Number(_this.finalval2) === Math.abs(_this.pair3) && _this.signNotselected3 === true) && ((Number(_this.finalval3) === Math.abs(_this.pair2)) && _this.signNotselected5 === false) && ((Number(_this.finalval4) === Math.abs(_this.pair4)) && _this.signNotselected7 === false)) {
                    console.log('correct')
                }
                else {
                    console.log('wrong', _this.finalval1, _this.finalval2, _this.finalval3, _this.finalval4, _this.signNotselected2, _this.signNotselected3)
                    _this.wrongSound.play();
                    _this.disableInputs1();
                    _this.disableInputs2();
                    _this.disableInputs3();
                    _this.disableInputs4();
                    _this.AnswerBox1.frame = 1;
                    _this.AnswerBox2.frame = 0;
                    _this.AnswerBox3.frame = 0;
                    _this.AnswerBox4.frame = 0;
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
            else if (_this.decideSign[0] === 3) {
                if (((Number(_this.finalval1) === first) && _this.signNotselected1 === false) && ((Number(_this.finalval2) === second) && _this.signNotselected3 === false) && ((Number(_this.finalval3) === third) && _this.signNotselected5 === false) && ((Number(_this.finalval4) === four) && _this.signNotselected7 === false)) {
                    console.log('correct')
                } else {
                    _this.wrongSound.play();
                    _this.disableInputs1();
                    _this.disableInputs2();
                    _this.disableInputs3();
                    _this.disableInputs4();
                    _this.AnswerBox1.frame = 1;
                    _this.AnswerBox2.frame = 0;
                    _this.AnswerBox3.frame = 0;
                    _this.AnswerBox4.frame = 0;
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
        }

        _this.numGroup.destroy();
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
        _this.time.events.add(4000, () => {
            _this.clearAll2();
            if (_this.numberOfQuestions == 6) {
                _this.state.start('score', true, false, gameID, _this.microConcepts);
                // _this.state.start('AL_MUL3_G8Score');
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
        _this.AnswerBox2.removeChild(_this.enterTxt2);
        _this.AnswerBox3.removeChild(_this.enterTxt3);

        _this.selectedAns11 = '';
        _this.selectedAns21 = '';
        _this.selectedAns31 = '';

        _this.selectedAns12 = '';
        _this.selectedAns22 = '';
        _this.selectedAns32 = '';

        _this.selectedAns13 = '';
        _this.selectedAns23 = '';
        _this.selectedAns33 = '';

        _this.AnswerBox1.name = '';
        _this.AnswerBox2.name = '';
        _this.AnswerBox3.name = '';

        _this.fourNotEntered1 = false;
        _this.fourNotEntered2 = false;
        _this.fourNotEntered3 = false;

        _this.signNotselected1 = false;
        _this.signNotselected2 = false;
        _this.signNotselected3 = false;
        _this.signNotselected4 = false;
        _this.signNotselected5 = false;
        _this.signNotselected6 = false;

        _this.finalval1 = '';
        _this.signVal1 = '';
        _this.finalval2 = '';
        _this.signVal2 = '';
        _this.finalval3 = '';
        _this.signVal3 = '';

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

    //Adding the numberpad.
    addNumberPad2: function () {
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        _this.AnswerBox1.removeChild(_this.enterTxt1);
        _this.AnswerBox2.removeChild(_this.enterTxt2);
        _this.AnswerBox3.removeChild(_this.enterTxt3);

        if (_this.zeroPair[0] == 1) {
            _this.AnswerBox4.removeChild(_this.enterTxt4);
        }

        _this.selectedAns11 = '';
        _this.selectedAns21 = '';
        _this.selectedAns31 = '';
        _this.selectedAns41 = '';

        _this.selectedAns12 = '';
        _this.selectedAns22 = '';
        _this.selectedAns32 = '';
        _this.selectedAns42 = '';

        _this.selectedAns13 = '';
        _this.selectedAns23 = '';
        _this.selectedAns33 = '';
        _this.selectedAns43 = '';

        _this.selectedAns14 = '';
        _this.selectedAns24 = '';
        _this.selectedAns34 = '';
        _this.selectedAns44 = '';

        _this.AnswerBox1.name = '';
        _this.AnswerBox2.name = '';
        _this.AnswerBox3.name = '';
        _this.AnswerBox4.name = '';

        _this.fourNotEntered1 = false;
        _this.fourNotEntered2 = false;
        _this.fourNotEntered3 = false;
        _this.fourNotEntered4 = false;

        _this.signNotselected1 = false;
        _this.signNotselected2 = false;
        _this.signNotselected3 = false;
        _this.signNotselected4 = false;
        _this.signNotselected5 = false;
        _this.signNotselected6 = false;
        _this.signNotselected7 = false;
        _this.signNotselected8 = false;

        _this.finalval1 = '';
        _this.signVal1 = '';
        _this.finalval2 = '';
        _this.signVal2 = '';
        _this.finalval3 = '';
        _this.signVal3 = '';
        _this.finalval4 = '';
        _this.signVal4 = '';

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
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked2, _this);

        _this.enterTxt1 = '';
        _this.enterTxt2 = '';
        _this.enterTxt3 = '';
        _this.enterTxt4 = '';

        _this.numpadTween = _this.add.tween(_this.numGroup);
        _this.tweenNumPad();
    },

    addNumberPad3: function () {
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        _this.AnswerBox1.removeChild(_this.enterTxt1);
        _this.AnswerBox2.removeChild(_this.enterTxt2);
        _this.AnswerBox3.removeChild(_this.enterTxt3);

        _this.selectedAns11 = '';
        _this.selectedAns21 = '';
        _this.selectedAns31 = '';

        _this.selectedAns12 = '';
        _this.selectedAns22 = '';
        _this.selectedAns32 = '';

        _this.selectedAns13 = '';
        _this.selectedAns23 = '';
        _this.selectedAns33 = '';

        _this.AnswerBox1.name = '';
        _this.AnswerBox2.name = '';
        _this.AnswerBox3.name = '';

        _this.fourNotEntered1 = false;
        _this.fourNotEntered2 = false;
        _this.fourNotEntered3 = false;

        _this.signNotselected1 = false;
        _this.signNotselected2 = false;
        _this.signNotselected3 = false;
        _this.signNotselected4 = false;
        _this.signNotselected5 = false;
        _this.signNotselected6 = false;

        _this.finalval1 = '';
        _this.signVal1 = '';
        _this.finalval2 = '';
        _this.signVal2 = '';
        _this.finalval3 = '';
        _this.signVal3 = '';

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
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked2, _this);

        _this.enterTxt1 = '';
        _this.enterTxt2 = '';
        _this.enterTxt3 = '';

        _this.numpadTween = _this.add.tween(_this.numGroup);
        _this.tweenNumPad();
    },

    //Displaying the clicked number.
    numClicked1: function (target) {
        _this.clickSound.play();
        var_selectedAns11 = " "
        var_selectedAns21 = " "
        var_selectedAns31 = " "
        var_selectedAns41 = " "
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
        else if (_this.selectedAns21 === '') {
            _this.selectedAns21 = target.name;
            var_selectedAns11 = _this.selectedAns11;
            var_selectedAns21 = _this.selectedAns21;
        }
        else if (_this.selectedAns31 === '') {
            _this.selectedAns31 = target.name;
            var_selectedAns11 = _this.selectedAns11;
            var_selectedAns21 = _this.selectedAns21;
            var_selectedAns31 = _this.selectedAns31;
        }
        else if (_this.selectedAns41 === '') {
            _this.selectedAns41 = target.name;
            var_selectedAns11 = _this.selectedAns11;
            var_selectedAns21 = _this.selectedAns21;
            var_selectedAns31 = _this.selectedAns31;
            var_selectedAns41 = _this.selectedAns41;
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
            _this.enterTxt1 = _this.add.text(14, 7, "" + _this.signVal1 + _this.finalval1, { fontSize: '20px' });

            if (_this.signVal1 == '+' || _this.signVal1 == '-') {
                if (_this.finalval1.length == 2) {
                    _this.enterTxt1.x -= 5;
                }
                else if (_this.finalval1.length == 1) {
                    _this.enterTxt1.x += 3;
                }
                else {
                    _this.enterTxt1.x += 8;
                }
            }
            else {
                if (_this.finalval1.length == 2) {
                    _this.enterTxt1.x += 3;
                }
                else if (_this.finalval1.length == 1) {
                    _this.enterTxt1.x += 10;
                }
            }
            if (_this.finalval1.length == 2 && (target.name != 11 || target.name != 10)) {
                _this.fourNotEntered1 = true;
            }
            else if (_this.finalval1.length == 3) {
                _this.fourNotEntered1 = true;
            }
            _this.enterTxt1.scale.setTo(0.8, 0.8)
            _this.applyingStyleBlue(_this.enterTxt1);
            _this.AnswerBox1.addChild(_this.enterTxt1);
            _this.AnswerBox1.name = Number(_this.signVal1 + _this.finalval1);
            _this.enterTxt1.visible = true;
        }
    },
    numClicked2: function (target) {
        _this.clickSound.play();
        var_selectedAns12 = " "
        var_selectedAns22 = " "
        var_selectedAns32 = " "
        var_selectedAns42 = " "
        if (target.name == 10) {
            target.name = '-'
            _this.signNotselected3 = true;
            _this.signNotselected4 = false;
        }
        if (target.name == 11) {
            target.name = '+';
            _this.signNotselected4 = true;
            _this.signNotselected3 = false;
        }

        if (_this.selectedAns12 === '') {
            _this.selectedAns12 = target.name;
            var_selectedAns12 = _this.selectedAns12;
        }
        else if (_this.selectedAns22 === '') {
            _this.selectedAns22 = target.name;
            var_selectedAns12 = _this.selectedAns12;
            var_selectedAns22 = _this.selectedAns22;
        }
        else if (_this.selectedAns32 === '') {
            _this.selectedAns32 = target.name;
            var_selectedAns12 = _this.selectedAns12;
            var_selectedAns22 = _this.selectedAns22;
            var_selectedAns32 = _this.selectedAns32;
        }
        else if (_this.selectedAns42 === '') {
            _this.selectedAns42 = target.name;
            var_selectedAns12 = _this.selectedAns12;
            var_selectedAns22 = _this.selectedAns22;
            var_selectedAns32 = _this.selectedAns32;
            var_selectedAns42 = _this.selectedAns42;
        }

        if (target.name == '+' || target.name == '-') {
            newstr = target.name + _this.finalval2;
            _this.signVal2 = target.name;
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
            _this.enterTxt2 = _this.add.text(14, 7, "" + _this.signVal2 + _this.finalval2, { fontSize: '20px' });

            if (_this.signVal2 == '+' || _this.signVal2 == '-') {
                if (_this.finalval2.length == 2) {
                    _this.enterTxt2.x -= 5;
                }
                else if (_this.finalval2.length == 1) {
                    _this.enterTxt2.x += 3;
                }
                else {
                    _this.enterTxt2.x += 8;
                }
            }
            else {
                if (_this.finalval2.length == 2) {
                    _this.enterTxt2.x += 3;
                }
                else if (_this.finalval2.length == 1) {
                    _this.enterTxt2.x += 10;
                }
            }
            if (_this.finalval2.length == 2 && (target.name != 11 || target.name != 10)) {
                _this.fourNotEntered2 = true;
            }
            else if (_this.finalval2.length == 3) {
                _this.fourNotEntered2 = true;
            }
            _this.enterTxt2.scale.setTo(0.8, 0.8)
            _this.applyingStyleBlue(_this.enterTxt2);
            _this.AnswerBox2.addChild(_this.enterTxt2);
            _this.AnswerBox2.name = Number(_this.signVal2 + _this.finalval2);
            _this.enterTxt2.visible = true;
        }
    },
    numClicked3: function (target) {
        _this.clickSound.play();
        var_selectedAns13 = " "
        var_selectedAns23 = " "
        var_selectedAns33 = " "
        var_selectedAns43 = " "
        if (target.name == 10) {
            target.name = '-'
            _this.signNotselected5 = true;
            _this.signNotselected6 = false;
        }
        if (target.name == 11) {
            target.name = '+';
            _this.signNotselected6 = true;
            _this.signNotselected5 = false;
        }

        if (_this.selectedAns13 === '') {
            _this.selectedAns13 = target.name;
            var_selectedAns13 = _this.selectedAns13;
        }
        else if (_this.selectedAns23 === '') {
            _this.selectedAns23 = target.name;
            var_selectedAns13 = _this.selectedAns13;
            var_selectedAns23 = _this.selectedAns23;
        }
        else if (_this.selectedAns33 === '') {
            _this.selectedAns33 = target.name;
            var_selectedAns13 = _this.selectedAns13;
            var_selectedAns23 = _this.selectedAns23;
            var_selectedAns33 = _this.selectedAns33;
        }
        else if (_this.selectedAns43 === '') {
            _this.selectedAns43 = target.name;
            var_selectedAns13 = _this.selectedAns13;
            var_selectedAns23 = _this.selectedAns23;
            var_selectedAns33 = _this.selectedAns33;
            var_selectedAns43 = _this.selectedAns43;
        }

        if (target.name == '+' || target.name == '-') {
            newstr = target.name + _this.finalval3;
            _this.signVal3 = target.name;
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
            _this.enterTxt3 = _this.add.text(14, 7, "" + _this.signVal3 + _this.finalval3, { fontSize: '20px' });

            if (_this.signVal3 == '+' || _this.signVal3 == '-') {
                if (_this.finalval3.length == 2) {
                    _this.enterTxt3.x -= 5;
                }
                else if (_this.finalval3.length == 1) {
                    _this.enterTxt3.x += 3;
                }
                else {
                    _this.enterTxt3.x += 8;
                }
            }
            else {
                if (_this.finalval3.length == 2) {
                    _this.enterTxt3.x += 3;
                }
                else if (_this.finalval3.length == 1) {
                    _this.enterTxt3.x += 10;
                }
            }
            if (_this.finalval3.length == 2 && (target.name != 11 || target.name != 10)) {
                _this.fourNotEntered3 = true;
            }
            else if (_this.finalval3.length == 3) {
                _this.fourNotEntered3 = true;
            }
            _this.enterTxt3.scale.setTo(0.8, 0.8)
            _this.applyingStyleBlue(_this.enterTxt3);
            _this.AnswerBox3.addChild(_this.enterTxt3);
            _this.AnswerBox3.name = Number(_this.signVal3 + _this.finalval3);
            _this.enterTxt3.visible = true;
        }
    },
    numClicked4: function (target) {
        _this.clickSound.play();
        var_selectedAns14 = " "
        var_selectedAns24 = " "
        var_selectedAns34 = " "
        var_selectedAns44 = " "

        if (target.name == 10) {
            target.name = '-'
            _this.signNotselected7 = true;
            _this.signNotselected8 = false;
        }
        if (target.name == 11) {
            target.name = '+';
            _this.signNotselected8 = true;
            _this.signNotselected7 = false;
        }

        if (_this.var_selectedAns14 === '') {
            _this.selectedAns14 = target.name;
            var_selectedAns14 = _this.selectedAns14;
        }
        else if (_this.selectedAns24 === '') {
            _this.selectedAns24 = target.name;
            var_selectedAns14 = _this.selectedAns14;
            var_selectedAns24 = _this.selectedAns24;
        }
        else if (_this.selectedAns34 === '') {
            _this.selectedAns34 = target.name;
            var_selectedAns14 = _this.selectedAns14;
            var_selectedAns24 = _this.selectedAns24;
            var_selectedAns34 = _this.selectedAns34;
        }
        else if (_this.selectedAns44 === '') {
            _this.selectedAns44 = target.name;
            var_selectedAns14 = _this.selectedAns14;
            var_selectedAns24 = _this.selectedAns24;
            var_selectedAns34 = _this.selectedAns34;
            var_selectedAns44 = _this.selectedAns44;
        }

        if (target.name == '+' || target.name == '-') {
            newstr = target.name + _this.finalval3;
            _this.signVal4 = target.name;
        }
        else if (_this.fourNotEntered3 == false) {
            _this.finalval4 += target.name;
        }

        if (target.name == '+')
            target.name = 11;
        if (target.name == '-')
            target.name = 10;

        if (_this.fourNotEntered4 == false || (target.name == 11 || target.name == 10)) {
            _this.AnswerBox4.removeChild(_this.enterTxt4);
            _this.enterTxt4.visible = false;
            _this.enterTxt4 = _this.add.text(14, 7, "" + _this.signVal4 + _this.finalval4, { fontSize: '20px' });

            if (_this.signVal4 == '+' || _this.signVal4 == '-') {
                if (_this.finalval4.length == 2) {
                    _this.enterTxt4.x -= 5;
                }
                else if (_this.finalval4.length == 1) {
                    _this.enterTxt4.x += 3;
                }
                else {
                    _this.enterTxt4.x += 8;
                }
            }
            else {
                if (_this.finalval4.length == 2) {
                    _this.enterTxt4.x += 3;
                }
                else if (_this.finalval4.length == 1) {
                    _this.enterTxt4.x += 10;
                }
            }
            if (_this.finalval4.length == 2 && (target.name != 11 || target.name != 10)) {
                _this.fourNotEntered4 = true;
            }
            else if (_this.finalval4.length == 3) {
                _this.fourNotEntered4 = true;
            }
            _this.enterTxt4.scale.setTo(0.8, 0.8)
            _this.applyingStyleBlue(_this.enterTxt4);
            _this.AnswerBox4.addChild(_this.enterTxt4);
            _this.AnswerBox4.name = Number(_this.signVal4 + _this.finalval4);
            _this.enterTxt4.visible = true;
        }
    },
    //for clearing the answer box.
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
    wrongbtnClicked4: function (target) {
        _this.clickSound.play();
        _this.disableInputs4();
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
        _this.signNotselected2 = false;
        _this.finalval1 = '';
        _this.signVal1 = '';
    },
    //for clearing the answer box.
    disableInputs2: function () {
        _this.AnswerBox2.removeChild(_this.enterTxt2);
        _this.selectedAns12 = '';
        _this.selectedAns22 = '';
        _this.selectedAns32 = '';
        _this.AnswerBox2.name = '';
        _this.fourNotEntered2 = false;
        _this.signNotselected3 = false;
        _this.signNotselected4 = false;
        _this.finalval2 = '';
        _this.signVal2 = '';
    },
    //for clearing the answer box.
    disableInputs3: function () {
        _this.AnswerBox3.removeChild(_this.enterTxt3);
        _this.selectedAns13 = '';
        _this.selectedAns23 = '';
        _this.selectedAns33 = '';
        _this.AnswerBox3.name = '';
        _this.fourNotEntered3 = false;
        _this.signNotselected5 = false;
        _this.signNotselected6 = false;
        _this.finalval3 = '';
        _this.signVal3 = '';
    },
    disableInputs4: function () {
        _this.AnswerBox4.removeChild(_this.enterTxt4);
        _this.selectedAns14 = '';
        _this.selectedAns24 = '';
        _this.selectedAns34 = '';
        _this.selectedAns44 = '';
        _this.AnswerBox4.name = '';
        _this.fourNotEntered4 = false;
        _this.signNotselected7 = false;
        _this.signNotselected8 = false;
        _this.finalval4 = '';
        _this.signVal4 = '';
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
        _this.pauseVoice();
        _this.space1Boxes.destroy();
        _this.space2Boxes.destroy();
        _this.space3Boxes.destroy();
        _this.numGroup.destroy();

        // _this.green_2Dup.events.onDragStop.removeAll();
        // _this.green_3Dup.events.onDragStop.removeAll();
        // _this.pink_2Dup.events.onDragStop.removeAll();
        // _this.pink_3Dup.events.onDragStop.removeAll();

        // _this.green_2Dup.destroy();
        // _this.green_3Dup.destroy();

        // _this.pink_3Dup.destroy();
        // _this.pink_2Dup.destroy();

        _this.textBox.destroy();

        _this.group1.destroy();
        _this.group2.destroy();

        _this.AnswerBox1.destroy();
        _this.AnswerBox2.destroy();
        _this.AnswerBox3.destroy();

        _this.Question_flag = 1;

        _this.space1.destroy();
    },

    clearAll2: function () {
        _this.pauseVoice();
        if (_this.zeroPair[0] == 2) {
            _this.group3.destroy();
            _this.group4.destroy();
        }

        // _this.green_5Dup.events.onDragStop.removeAll();
        // _this.green_6Dup.events.onDragStop.removeAll();
        // _this.pink_5Dup.events.onDragStop.removeAll();
        // _this.pink_6Dup.events.onDragStop.removeAll();
        // _this.green_YDup.events.onDragStop.removeAll();
        // _this.pink_YDup.events.onDragStop.removeAll();

        // _this.green_5Dup.destroy();
        // _this.green_6Dup.destroy();

        // _this.pink_5Dup.destroy();
        // _this.pink_6Dup.destroy();

        // _this.green_YDup.destroy();
        // _this.pink_YDup.destroy();

        _this.space5Boxes.destroy();
        _this.space6Boxes.destroy();
        _this.space7Boxes.destroy();
        _this.numGroup.destroy();

        _this.textBox.destroy();

        _this.AnswerBox1.destroy();
        _this.AnswerBox2.destroy();
        _this.AnswerBox3.destroy();
        _this.space1.destroy();

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
        //for api
        //edited for baseurl apk
        _this.AnsTimerCount = 0;

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
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/AL_MUL3_G8/" + _this.languageSelected + "/AL_MUL3_G8_d1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/AL_MUL3_G8/" + _this.languageSelected + "/AL_MUL3_G8_d2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/AL_MUL3_G8/" + _this.languageSelected + "/AL_MUL3_G8_d3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        // QUESTION AUDIOS
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL_MUL3_G8/" +
            _this.languageSelected + "/AL_MUL3_G8_a1.mp3");//multyplay algeb expre
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL_MUL3_G8/" +
            _this.languageSelected + "/AL_MUL3_G8_a2.mp3");//place any one side
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL_MUL3_G8/" +
            _this.languageSelected + "/AL_MUL3_G8_a3.mp3");//place other side
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL_MUL3_G8/" +
            _this.languageSelected + "/AL_MUL3_G8_a4.mp3");//fill the area
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL_MUL3_G8/" +
            _this.languageSelected + "/AL_MUL3_G8_a5.mp3");//zero pair
        _this.q5Sound.appendChild(_this.q5Soundsrc);

        _this.q6Sound = document.createElement('audio');
        _this.q6Soundsrc = document.createElement('source');
        _this.q6Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL_MUL3_G8/" +
            _this.languageSelected + "/AL_MUL3_G8_a6.mp3");//enter ans
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