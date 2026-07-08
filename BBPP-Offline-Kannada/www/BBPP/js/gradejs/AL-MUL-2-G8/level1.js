Game.AL_MUL_2_G8level1 = function () { };


Game.AL_MUL_2_G8level1.prototype =
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
            _this.languageSelected = "Kannada";
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

        _this.gameSound = document.createElement('audio');
        _this.gameSoundsrc = document.createElement('source');
        _this.gameSoundsrc.setAttribute("src", window.baseUrl + "sounds/Game Positive.mp3");
        _this.gameSound.appendChild(_this.gameSoundsrc);

        _this.snapSound = document.createElement('audio');
        _this.snapSoundsrc = document.createElement('source');
        _this.snapSoundsrc.setAttribute("src", window.baseUrl + "sounds/Drag_Snap.mp3");
        _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.framechange = document.createElement('audio');
        _this.framechangesrc = document.createElement('source');
        _this.framechangesrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);

        _this.Ask_Question1 = _this.createAudio("AL_MUL2_G8_a1");
        _this.Ask_Question2 = _this.createAudio("AL_MUL2_G8_a2");
        _this.Ask_Question3 = _this.createAudio("AL_MUL2_G8_a3");
        _this.Ask_Question4 = _this.createAudio("AL_MUL2_G8_a4");
        _this.Ask_Question5 = _this.createAudio("AL_MUL2_G8_a6");

        //edited for baseurl online apk
        telInitializerbbpp.gameIdInit("AL_MUL2_G8", gradeSelected);
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
        //edited for baseurl apk
        //*add these  variables
        _this.noofAttempts = 0;//total attempt to answer q question
        _this.AnsTimerCount = 0;//total time
        _this.sceneCount = 0;//no of screen
        _this.questionid = null;//always 1
        //............

        _this.AnsTimerCount = 0;
        _this.count1 = 0;//0
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
        _this.finalval = '';
        _this.fourNotEntered = false;
        _this.fouransLen = 0;

        _this.rightbtnFlag = 0;

        //starting tile position of vertical tiles
        _this.verticalY = 215;
        _this.horizontalX = 305;

        _this.x2Flag = 0;
        _this.xyFlag = 0;
        _this.xFlag = 0;
        _this.yFlag = 0;
        _this.constFlag = 0;
        _this.y2Flag = 0;

        _this.result_1xFlag = 0;
        _this.result_1xyFlag = 0;
        _this.result_1yFlag = 0;
        _this.result_1x2Flag = 0;
        _this.result_1conFlag = 0;

        _this.result_2xFlag = 0;
        _this.result_2xyFlag = 0;
        _this.result_2yFlag = 0;
        _this.result_2x2Flag = 0;
        _this.result_2conFlag = 0;

        _this.pairedValues_dup = [];//const
        _this.pairedValues_2_dup = [];//x horizontal
        _this.pairedValues_3_dup = [];//x vertical
        _this.pairedValues_4_dup = [];//x2
        _this.pairedValues_5_dup = [];//y horizontal        
        _this.pairedValues_6_dup = [];//y vertical
        _this.pairedValues_7_dup = [];//y2
        _this.pairedValues_8_dup = [];//yx horizontal
        _this.pairedValues_9_dup = [];//xy vertical

        _this.storeObjPositions1 = [];//const
        _this.storeObjects1 = [];//const

        _this.storeObjPositions2 = [];//const
        _this.storeObjects2 = [];//const

        _this.storeObjPositions3 = [];//x horizontal
        _this.storeObjects3 = [];//x horizontal

        _this.storeObjPositions4 = [];//x horizontal
        _this.storeObjects4 = [];//x horizontal

        _this.storeObjPositions5 = [];//x vertical
        _this.storeObjects5 = [];//x vertical

        _this.storeObjPositions6 = [];//x vertical
        _this.storeObjects6 = [];//x vertical

        _this.storeObjPositions7 = [];//x2 
        _this.storeObjects7 = [];//x2 
        _this.storeObjPositions8 = [];//x2 
        _this.storeObjects8 = [];//x2 

        _this.storeObjPositions9 = [];//y horizontal
        _this.storeObjects9 = [];//y horizontal

        _this.storeObjPositions10 = [];//y horizontal
        _this.storeObjects10 = [];//y horizontal

        _this.storeObjPositions11 = [];//y vertical
        _this.storeObjects11 = [];//y vertical

        _this.storeObjPositions12 = [];//y vertical
        _this.storeObjects12 = [];//y vertical

        _this.storeObjPositions13 = [];//y2 
        _this.storeObjects13 = [];//y2 
        _this.storeObjPositions14 = [];//y2 
        _this.storeObjects14 = [];//y2 

        _this.storeObjPositions15 = [];//xy horizontal
        _this.storeObjects15 = [];//xy horizontal

        _this.storeObjPositions16 = [];//xy horizontal
        _this.storeObjects16 = [];//xy horizontal

        _this.storeObjPositions17 = [];//xy vertical
        _this.storeObjects17 = [];//xy vertical

        _this.storeObjPositions18 = [];//xy vertical
        _this.storeObjects18 = [];//xy vertical

        _this.tickValuation_flag = 0;//this is used for onclick function. first row wise and column wise.

        _this.checkObject_1 = [];//cheking the object for dragging negative
        _this.checkObject_2 = [];//cheking the object for dragging positive

        _this.destroyedPositions = [];//x2
        _this.destroyedPositions_2_vr = [];//x
        _this.destroyedPositions_2_hr = [];//x
        _this.destroyedPositions_3_vr = [];//xy
        _this.destroyedPositions_3_hr = [];//xy
        _this.destroyedPositions_4_vr = [];//y
        _this.destroyedPositions_4_hr = [];//y
        _this.destroyedPositions_5 = [];//y2
        _this.destroyedPositions_6 = [];//constant

        _this.rearrange = false;

        _this.constQuestion = 0;

        _this.toDestroy = [];

        _this.erasedPositions = [];
        _this.erasedObjectInitialPosition = [];

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.counterForTimer = 0;

        _this.arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


        _this.hint_flag = 0;
        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'BG1');
        //** include the background file, navigation bar, stars, timer objects.

        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            // _this.state.start('AL_MUL_2_G8Score');
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

    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL-2-G8/" + _this.languageSelected + "/" + src + ".mp3");
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

        _this.Initial_randomizing();
        //  _this.addNextTextbox();

        console.log("inside get question.....");
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1;
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

    },
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

        //edited for baseurl apk
        _this.sceneCount++;
        _this.noofAttempts = 0;
        //....

        /**
         * monomial * binomial
            ●	These above algebraic tiles we can use for 2 variables only,
            ●	 (3x) × (2y + 2)- this type of questions we need to have tiles for term ‘x’ , ‘y’ and a ‘constant’
            ●	All tiles displayed  on the screen 
            ●	We need to apply rule ; if -ve * +ve we need to keep -ve tile and -ve * -ve  OR +ve *+ve we need to keep +ve tile
            ●	Arrange 3x tiles rowwise  and (2y+2 )tiles in column wise 
            ●	More example 
                a.	2m * ( 2m - 2)
                b.	3m * (2n - 3)
                c.	x * ( x+y)
                d.	(-x) * (x-2y)   
          */
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

        _this.monoCoefficient = Math.floor(Math.random() * 2) + 1; //values it will generate are: -2x, -1x, 0, 1x, 2x
        _this.monoConstant = Math.floor(Math.random() * (8 - 2)) + 2;// values it will generate are:  -5, -4, -3, -2, 2, 3, 4, 5, 6, 7

        _this.decideMonoEq = Math.floor(Math.random() * (2));// 0- 3x , 1- x, 2- 5
        if (_this.constQuestion >= 2) {
            _this.decideMonoEq = 0;
        }

        if (_this.decideMonoEq == 0) {
            _this.mLinear = _this.equationSign1 + _this.monoCoefficient;

            _this.monoVariable = ['x', 'y'];//'x','y'
            _this.shuffleArray(_this.monoVariable);
            console.log(_this.monoVariable, " _this.monoVariable");

            if (_this.monoVariable[0] == 'x') {
                _this.mLinear_x = _this.equationSign1 + _this.monoCoefficient;
            }
            if (_this.monoVariable[0] == 'y') {
                _this.mLinear_y = _this.equationSign1 + _this.monoCoefficient;
            }

            if (_this.monoCoefficient == 1) {// when coefficient is 0 regenerate values
                console.log("is 1")

                _this.monoCoefficient = '';
            }
            _this.equation1 = _this.equationSign1 + _this.monoCoefficient + _this.monoVariable[0];
            _this.monoVar = _this.monoVariable[0];

        }
        else {//_this.decideMonoEq = 1
            //count the costant question and increase the count by 1 if it is 2 then it won't come to this. it have to generate linear eq.
            _this.constQuestion += 1;
            _this.mLinear = _this.equationSign1 + _this.monoConstant;
            _this.equation1 = _this.equationSign1 + _this.monoConstant;
            _this.monoVar = "";
            _this.mConstant = _this.equationSign1 + _this.monoConstant;
        }
        console.log(_this.equation1, "_this.equation1");
        console.log(_this.mLinear, "_this.mLinear");
        console.log(_this.monoVar, "_this.monoVar");

        _this.copyEquation = _this.equation1;
        //_this.result = _this.result_1 + _this.result_2;
        // Regular expression pattern to match variables (alphanumeric characters)
        var variablePattern = /[a-zA-Z]/g;

        // Array to store the identified variables
        _this.variables_1_1 = [];
        // Remove any non-alphanumeric characters from the equation
        var cleanEquation = _this.copyEquation.replace(/[^a-zA-Z0-9]/g, "");

        // Iterate through the cleaned equation and identify variables
        var match;
        while ((match = variablePattern.exec(cleanEquation)) !== null) {
            _this.variable_1_1 = match[0];

            // Check if the variable is not already in the array before adding it
            if (!_this.variables_1_1.includes(_this.variable_1_1)) {
                _this.variables_1_1.push(_this.variable_1_1);
            }
            _this.variables_1_1.push(_this.variable_1_1);
        }

        // Print the identified variables
        console.log("variables_1_1:", _this.variables_1_1);
        //......

        //* second equation first term of binomial Equation 
        _this.sign2 = Math.floor(Math.random() * (2)); // 0,1 0= +, 1 =-

        if (_this.sign2 == 0) {
            _this.equationSign2 = '';
        } else {
            _this.equationSign2 = '-';
        }

        if (_this.decideMonoEq == 1 || _this.monoVar == 'y') _this.binoVariable = ['x', 'y'];// first term constant or y
        else _this.binoVariable = ['y', 'x']; //first term x

        _this.monoCoefficient_2 = Math.floor(Math.random() * 2) + 1; //values it will generate are: -2x, -1x, 0, 1x, 2x

        _this.monoConstant_2 = Math.floor(Math.random() * (8 - 2)) + 2; // values it will generate are:  -5, -4, -3, -2, 2, 3, 4, 5, 6, 7

        _this.decideMonoEq_ForBoth = [1, 2];
        _this.shuffleArray(_this.decideMonoEq_ForBoth);

        if (_this.decideMonoEq_ForBoth[0] == 1) {
            _this.decideMonoEq_2 = Math.floor(Math.random() * (2));// 0- 3x , 1- x, 2- 5
            if (_this.decideMonoEq_2 == 0) {
                _this.mLinear2 = _this.equationSign2 + _this.monoCoefficient_2;
                if (_this.binoVariable[0] == 'x') {
                    _this.mLinear_x2 = _this.equationSign2 + _this.monoCoefficient_2;
                }
                if (_this.binoVariable[0] == 'y') {
                    _this.mLinear_y2 = _this.equationSign2 + _this.monoCoefficient_2;
                }
                if (_this.monoCoefficient_2 == 1) {// when coefficient is 0 regenerate values

                    _this.monoCoefficient_2 = '';
                }
                _this.equation2_1_2 = _this.equationSign2 + _this.monoCoefficient_2 + _this.binoVariable[0];
                _this.equation2_1 = _this.equationSign2 + _this.monoCoefficient_2 + _this.binoVariable[0];
                _this.binomVar = _this.binoVariable[0];
            }
            else {
                _this.mLinear2 = _this.equationSign2 + _this.monoConstant_2;
                _this.equation2_1 = _this.equationSign2 + _this.monoConstant_2;
                _this.equation2_1_1 = _this.equationSign2 + _this.monoConstant_2;//test
                _this.binomVar = "";
                _this.mConstant2 = _this.equationSign2 + _this.monoConstant_2;
            }
        }
        else {
            _this.mLinear2 = _this.equationSign2 + _this.monoCoefficient_2;
            if (_this.binoVariable[0] == 'x') {
                _this.mLinear_x2 = _this.equationSign2 + _this.monoCoefficient_2;
            }
            if (_this.binoVariable[0] == 'y') {
                _this.mLinear_y2 = _this.equationSign2 + _this.monoCoefficient_2;
            }
            if (_this.monoCoefficient_2 == 1) {// when coefficient is 0 regenerate values

                _this.monoCoefficient_2 = '';
            }
            _this.equation2_1 = _this.equationSign2 + _this.monoCoefficient_2 + _this.binoVariable[0];
            _this.equation2_1_2 = _this.equationSign2 + _this.monoCoefficient_2 + _this.binoVariable[0];
            _this.binomVar = _this.binoVariable[0];
        }
        console.log(_this.equation2_1, "_this.equation2_1");
        console.log(_this.mLinear2, "_this.mLinear2");

        _this.copyEquation_2_1 = _this.equation2_1;
        //_this.result = _this.result_1 + _this.result_2;
        // Regular expression pattern to match variables (alphanumeric characters)
        var variablePattern = /[a-zA-Z]/g;

        // Array to store the identified variables
        _this.variables_2_1 = [];
        // Remove any non-alphanumeric characters from the equation
        var cleanEquation_2 = _this.copyEquation_2_1.replace(/[^a-zA-Z0-9]/g, "");

        // Iterate through the cleaned equation and identify variables
        var match;
        while ((match = variablePattern.exec(cleanEquation_2)) !== null) {
            _this.variable_2_1 = match[0];

            // Check if the variable is not already in the array before adding it
            if (!_this.variables_2_1.includes(_this.variable_2_1)) {
                _this.variables_2_1.push(_this.variable_2_1);
            }
            _this.variables_2_1.push(_this.variable_2_1);
        }

        // Print the identified variables
        console.log("Variables_2_1:", _this.variables_2_1);

        //.....+......
        //* second equation second term of binomial Equation 
        if ((_this.monoVar == 'y' && _this.binomVar == 'y') || (_this.monoVar == 'y' && _this.binomVar == '') || (_this.monoVar == '' && _this.binomVar == 'y') || (_this.monoVar == '' && _this.binomVar == ''))
            _this.binoVariable = ['x', 'x'];

        _this.sign3 = Math.floor(Math.random() * (2)); // 0,1 0= +, 1 =-

        if (_this.sign3 == 0) {
            _this.equationSign3 = '+';
        } else {
            _this.equationSign3 = '-';
        }

        _this.monoCoefficient_3 = Math.floor(Math.random() * 2) + 1; //values it will generate are: -2x, -1x, 0, 1x, 2x

        _this.monoConstant_3 = Math.floor(Math.random() * (8 - 2)) + 2; // values it will generate are:  -5, -4, -3, -2,  2, 3, 4, 5, 6, 7,

        if (_this.decideMonoEq_ForBoth[1] == 2) {
            _this.mLinear3 = _this.equationSign3 + _this.monoCoefficient_3;
            if (_this.binoVariable[1] == 'x') {
                _this.mLinear_x3 = _this.equationSign3 + _this.monoCoefficient_3;
            }
            if (_this.binoVariable[1] == 'y') {
                _this.mLinear_y3 = _this.equationSign3 + _this.monoCoefficient_3;
            }
            if (_this.monoCoefficient_3 == 1) {// when coefficient is 0 regenerate values

                _this.monoCoefficient_3 = '';
            }
            _this.equation2_2 = " " + _this.equationSign3 + " " + _this.monoCoefficient_3 + _this.binoVariable[1];
            _this.equation2_2_2 = _this.equationSign3 + _this.monoCoefficient_3 + _this.binoVariable[1];
        }
        else {
            _this.decideMonoEq_3 = Math.floor(Math.random() * (2));// 0- 3x , 1- x, 2- 5
            if (_this.decideMonoEq_3 == 0) {
                _this.mLinear3 = _this.equationSign3 + _this.monoCoefficient_3;
                if (_this.binoVariable[1] == 'x') {
                    _this.mLinear_x3 = _this.equationSign3 + _this.monoCoefficient_3;
                }
                if (_this.binoVariable[1] == 'y') {
                    _this.mLinear_y3 = _this.equationSign3 + _this.monoCoefficient_3;
                }
                if (_this.monoCoefficient_3 == 1) {// when coefficient is 0 regenerate values

                    _this.monoCoefficient_3 = '';
                }
                _this.equation2_2 = " " + _this.equationSign3 + " " + _this.monoCoefficient_3 + _this.binoVariable[1];
                _this.equation2_2_2 = _this.equationSign3 + _this.monoCoefficient_3 + _this.binoVariable[1];
            }
            else {
                _this.mLinear3 = _this.equationSign3 + _this.monoConstant_3;
                _this.equation2_2 = " " + _this.equationSign3 + " " + _this.monoConstant_3;
                _this.equation2_2_1 = _this.equationSign3 + _this.monoConstant_3;
                _this.mConstant3 = _this.equationSign3 + _this.monoConstant_3;
            }
        }

        console.log(_this.equation2_2, "_this.equation2_2");
        console.log(_this.mLinear3, "_this.mLinear3");

        _this.equation2 = _this.equation2_1 + _this.equation2_2;
        console.log(_this.equation2, "_this.equation2");

        console.log("(" + _this.equation1 + ")" + "*" + "(" + _this.equation2 + ")", "full equation");

        _this.result_1 = _this.mLinear * _this.mLinear2;
        _this.result_2 = _this.mLinear * _this.mLinear3;

        _this.copyEquation1 = _this.equation1;
        _this.copyEquation2 = _this.equation2;
        //_this.result = _this.result_1 + _this.result_2;
        // Regular expression pattern to match variables (alphanumeric characters)
        var variablePattern = /[a-zA-Z]/g;

        // Array to store the identified variables
        _this.variables = [];
        _this.variables_1 = [];
        _this.variables_2 = [];

        // Remove any non-alphanumeric characters from the equation
        var cleanEquation = _this.copyEquation1.replace(/[^a-zA-Z0-9]/g, "");
        var cleanEquation2 = _this.copyEquation2.replace(/[^a-zA-Z0-9]/g, "");

        // Iterate through the cleaned equation and identify variables
        var match;
        while ((match = variablePattern.exec(cleanEquation)) !== null) {
            _this.variable = match[0];

            // Check if the variable is not already in the array before adding it
            if (!_this.variables.includes(_this.variable)) {
                _this.variables.push(_this.variable);
            }
            _this.variables_1.push(_this.variable);
        }

        // Print the identified variables
        console.log("Variables:", _this.variables);
        console.log("variables_1:", _this.variables_1);

        while ((match = variablePattern.exec(cleanEquation2)) !== null) {
            _this.variable_2 = match[0];

            // Check if the variable is not already in the array before adding it
            if (!_this.variables.includes(_this.variable_2)) {
                _this.variables.push(_this.variable_2);
            }
            _this.variables_2.push(_this.variable_2);//only for pushing second equation variable
        }
        // Print the identified variables
        console.log("Variables:", _this.variables);
        console.log("Variables_2:", _this.variables_2);

        console.log("mLinear_x:", _this.mLinear_x);
        console.log("mLinear_y:", _this.mLinear_y);
        console.log("mConstant:", _this.mConstant);
        console.log("mLinear_x2:", _this.mLinear_x2);
        console.log("mLinear_y2:", _this.mLinear_y2);
        console.log("mConstant2:", _this.mConstant2);
        console.log("mLinear_x3:", _this.mLinear_x3);
        console.log("mLinear_y3:", _this.mLinear_y3);
        console.log("mConstant3:", _this.mConstant3);

        _this.initialScreenShow();
        _this.multiplyEquation();
    },

    initialScreenShow: function () {
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


        _this.power = "\u{00B2}";

        _this.textBox = _this.add.sprite(235, 80, 'Text box_1');//equation text box
        _this.textBox.frame = 0;//0

        let stringEq = '( ';
        let multiply = ' * ';

        stringEq = stringEq + _this.equation1 + " ) ";

        _this.questionText = _this.add.text(60, 22, stringEq);//50,22
        _this.applyingStyleBlue(_this.questionText);
        _this.textBox.addChild(_this.questionText);

        _this.multiplySign = _this.add.text(134, 22, multiply);
        _this.applyingStyleBlue(_this.multiplySign);
        _this.textBox.addChild(_this.multiplySign);

        let stringEq2 = '(' + _this.equation2 + ')';

        _this.questionText2 = _this.add.text(155, 22, stringEq2);
        _this.applyingStyleBlue(_this.questionText2);
        _this.textBox.addChild(_this.questionText2);

        _this.space1 = _this.add.sprite(240, 160, 'panel1');
        _this.space1.scale.setTo(0.97, 1.05);


        //we have to decide what variable will display there. 
        if (_this.variables.length == 1) {// only one variable x or y

            _this.sideGray1 = _this.add.sprite(30, 270, 'panel2');
            _this.sideGray2 = _this.add.sprite(140, 270, 'panel2');

            _this.green1_dup = _this.add.image(45, 280, 'green1');
            _this.green2_dup = _this.add.image(45, 385, 'green2');
            _this.green6_dup = _this.add.image(65, 450, 'green6');
            _this.pink1_dup = _this.add.image(155, 280, 'pink1');
            _this.pink2_dup = _this.add.image(155, 385, 'pink2');
            _this.pink6_dup = _this.add.image(175, 450, 'pink6');

            _this.green2_dup_2 = _this.add.image(30, 360, 'green2');
            _this.green2_dup_2.scale.setTo(1.5, 2.8);
            _this.green2_dup_2.alpha = 0;

            _this.pink2_dup_2 = _this.add.image(140, 360, 'pink2');
            _this.pink2_dup_2.scale.setTo(1.5, 2.8);
            _this.pink2_dup_2.alpha = 0;

            _this.green6_dup_2 = _this.add.image(30, 415, 'green6');
            _this.green6_dup_2.scale.setTo(5.5, 3.8);
            _this.green6_dup_2.alpha = 0;

            _this.pink6_dup_2 = _this.add.image(140, 415, 'pink6');
            _this.pink6_dup_2.scale.setTo(5.5, 3.8);
            _this.pink6_dup_2.alpha = 0;

            _this.green1 = _this.add.image(45, 280, 'green1');
            _this.green2 = _this.add.image(45, 385, 'green2');
            _this.green6 = _this.add.image(65, 450, 'green6');

            _this.pink1 = _this.add.image(155, 280, 'pink1');
            _this.pink2 = _this.add.image(155, 385, 'pink2');
            _this.pink6 = _this.add.image(175, 450, 'pink6');

            _this.letterA = _this.add.text(60, 295, '-' + _this.variables[0] + _this.power);//x²
            _this.applyingWhite(_this.letterA);
            _this.letterA.fontSize = '28px';
            _this.letterA.bringToTop();

            _this.letterB = _this.add.text(160, 295, '+' + _this.variables[0] + _this.power);//x²
            _this.applyingWhite(_this.letterB);
            _this.letterB.fontSize = '28px';
            _this.letterB.bringToTop();

            _this.letterC = _this.add.text(60, 352, '-' + _this.variables[0]);//x
            _this.applyingStyle1(_this.letterC);
            _this.letterC.fontSize = '30px';
            _this.letterC.bringToTop();

            _this.letterD = _this.add.text(165, 352, '+' + _this.variables[0]);//x
            _this.applyingStyle2(_this.letterD);
            _this.letterD.fontSize = '30px';

            _this.letterE = _this.add.text(60, 417, '-1');
            _this.applyingStyle1(_this.letterE);
            _this.letterE.bringToTop();

            _this.letterF = _this.add.text(165, 417, '+1');
            _this.applyingStyle2(_this.letterF);
            _this.letterF.bringToTop();

            //add functions for vertical tiles adding now
            _this.green1.inputEnabled = true;
            _this.green1.input.useHandCursor = true;
            _this.green1.events.onInputDown.add(_this.minx2);//-x2 box onclick function

            _this.green2.inputEnabled = true;
            _this.green2.input.useHandCursor = true;
            _this.green2.events.onInputDown.add(_this.minx);//-x

            _this.green6.inputEnabled = true;
            _this.green6.input.useHandCursor = true;
            _this.green6.events.onInputDown.add(_this.mincof);//-1

            _this.pink1.inputEnabled = true;
            _this.pink1.input.useHandCursor = true;
            _this.pink1.events.onInputDown.add(_this.posx2);

            _this.pink2.inputEnabled = true;
            _this.pink2.input.useHandCursor = true;
            _this.pink2.events.onInputDown.add(_this.posx);

            _this.pink6.inputEnabled = true;
            _this.pink6.input.useHandCursor = true;
            _this.pink6.events.onInputDown.add(_this.poscof);

        }
        else {//both x and y
            _this.textBox.scale.setTo(1.01, 1.01);

            _this.sideGray1 = _this.add.sprite(35, 140, 'panel3');
            _this.sideGray2 = _this.add.sprite(135, 140, 'panel3');

            _this.green1_dup = _this.add.image(13, 10, 'green1');
            _this.sideGray1.addChild(_this.green1_dup);
            _this.green2_dup = _this.add.sprite(13, 105, 'green2');
            _this.sideGray1.addChild(_this.green2_dup);
            _this.green3_dup = _this.add.image(13, 140, 'green3');
            _this.sideGray1.addChild(_this.green3_dup);
            _this.green4_dup = _this.add.sprite(20, 215, 'green4');
            _this.sideGray1.addChild(_this.green4_dup);
            _this.green5_dup = _this.add.sprite(20, 280, 'green5');
            _this.sideGray1.addChild(_this.green5_dup);
            _this.green6_dup = _this.add.sprite(32, 360, 'green6');
            _this.sideGray1.addChild(_this.green6_dup);

            _this.green2_dup_2 = _this.add.image(0, 80, 'green2');
            _this.green2_dup_2.scale.setTo(1.4, 2.8);
            _this.green2_dup_2.alpha = 0;
            _this.sideGray1.addChild(_this.green2_dup_2);

            _this.green4_dup_2 = _this.add.image(0, 190, 'green4');
            _this.green4_dup_2.scale.setTo(2, 2.8);
            _this.green4_dup_2.alpha = 0;
            _this.sideGray1.addChild(_this.green4_dup_2);

            _this.pink2_dup_2 = _this.add.image(0, 80, 'pink2');
            _this.pink2_dup_2.scale.setTo(1.4, 2.8);
            _this.pink2_dup_2.alpha = 0;
            _this.sideGray2.addChild(_this.pink2_dup_2);

            _this.pink4_dup_2 = _this.add.image(0, 190, 'pink4');
            _this.pink4_dup_2.scale.setTo(2, 2.8);
            _this.pink4_dup_2.alpha = 0;
            _this.sideGray2.addChild(_this.pink4_dup_2);

            _this.green6_dup_2 = _this.add.image(0, 330, 'green6');
            _this.green6_dup_2.scale.setTo(5.4, 3);
            _this.green6_dup_2.alpha = 0;
            _this.sideGray1.addChild(_this.green6_dup_2);

            _this.pink6_dup_2 = _this.add.image(0, 330, 'pink6');
            _this.pink6_dup_2.scale.setTo(5.4, 3);
            _this.pink6_dup_2.alpha = 0;
            _this.sideGray2.addChild(_this.pink6_dup_2);

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

            _this.pink1_dup = _this.add.sprite(13, 10, 'pink1');
            _this.sideGray2.addChild(_this.pink1_dup);
            _this.pink2_dup = _this.add.sprite(13, 105, 'pink2');
            _this.sideGray2.addChild(_this.pink2_dup);
            _this.pink3_dup = _this.add.sprite(13, 140, 'pink3');
            _this.sideGray2.addChild(_this.pink3_dup);
            _this.pink4_dup = _this.add.sprite(20, 215, 'pink4');
            _this.sideGray2.addChild(_this.pink4_dup);
            _this.pink5_dup = _this.add.sprite(20, 280, 'pink5');
            _this.sideGray2.addChild(_this.pink5_dup);
            _this.pink6_dup = _this.add.sprite(32, 360, 'pink6');
            _this.sideGray2.addChild(_this.pink6_dup);

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

            _this.lett1 = _this.add.text(17, 24, ' -' + 'x' + _this.power);//a
            _this.lett1.fill = '#FFFFFF';
            _this.sideGray1.addChild(_this.lett1);
            _this.lett1.bringToTop();

            _this.lett2 = _this.add.text(20, 74, ' -' + 'x');//a
            _this.lett2.fill = '#66BA6A';
            _this.sideGray1.addChild(_this.lett2);
            _this.lett2.bringToTop();

            _this.lett3 = _this.add.text(15, 144, ' -' + 'x' + 'y');//ab
            _this.lett3.fill = '#FFFFFF';
            _this.sideGray1.addChild(_this.lett3);
            _this.lett3.bringToTop();

            _this.lett4 = _this.add.text(18, 180, ' -' + 'y');//b
            _this.lett4.fill = '#66BA6A';
            _this.sideGray1.addChild(_this.lett4);
            _this.lett4.bringToTop();

            _this.lett5 = _this.add.text(17, 245, ' -' + 'y' + _this.power);//b
            _this.lett5.fill = '#66BA6A';
            _this.sideGray1.addChild(_this.lett5);
            _this.lett5.bringToTop();

            _this.lett6 = _this.add.text(21, 330, ' -1');
            _this.lett6.fill = '#66BA6A';
            _this.sideGray1.addChild(_this.lett6);
            _this.lett6.bringToTop();

            _this.lett11 = _this.add.text(14, 24, ' +' + 'x' + _this.power);//a
            _this.lett11.fill = '#FFFFFF';
            _this.sideGray2.addChild(_this.lett11);
            _this.lett11.bringToTop();

            _this.lett22 = _this.add.text(20, 74, ' +' + 'x');//a
            _this.lett22.fill = '#e60073';
            _this.sideGray2.addChild(_this.lett22);
            _this.lett22.bringToTop();

            _this.lett33 = _this.add.text(13, 144, ' +' + 'x' + 'y');//ab
            _this.lett33.fill = '#FFFFFF';
            _this.sideGray2.addChild(_this.lett33);
            _this.lett33.bringToTop();

            _this.lett44 = _this.add.text(16, 180, ' +' + 'y');//b
            _this.lett44.fill = '#e60073';
            _this.sideGray2.addChild(_this.lett44);
            _this.lett44.bringToTop();

            _this.lett55 = _this.add.text(15, 245, ' +' + 'y' + _this.power);//b
            _this.lett55.fill = '#e60073';
            _this.sideGray2.addChild(_this.lett55);
            _this.lett55.bringToTop();

            _this.lett66 = _this.add.text(19, 330, ' +1');
            _this.lett66.fill = '#e60073';
            _this.sideGray2.addChild(_this.lett66);
            _this.lett66.bringToTop();

            //add functions for vertical tiles adding now
            _this.green1.inputEnabled = true;
            _this.green1.input.useHandCursor = true;
            _this.green1.events.onInputDown.add(_this.minx2);

            _this.green2.inputEnabled = true;
            _this.green2.input.useHandCursor = true;
            _this.green2.events.onInputDown.add(_this.minx);

            _this.green3.inputEnabled = true;
            _this.green3.input.useHandCursor = true;
            _this.green3.events.onInputDown.add(_this.minxy);

            _this.green4.inputEnabled = true;
            _this.green4.input.useHandCursor = true;
            _this.green4.events.onInputDown.add(_this.miny);

            _this.green5.inputEnabled = true;
            _this.green5.input.useHandCursor = true;
            _this.green5.events.onInputDown.add(_this.miny2);

            _this.green6.inputEnabled = true;
            _this.green6.input.useHandCursor = true;
            _this.green6.events.onInputDown.add(_this.mincof);

            _this.pink1.inputEnabled = true;
            _this.pink1.input.useHandCursor = true;
            _this.pink1.events.onInputDown.add(_this.posx2);

            _this.pink2.inputEnabled = true;
            _this.pink2.input.useHandCursor = true;
            _this.pink2.events.onInputDown.add(_this.posx);

            _this.pink3.inputEnabled = true;
            _this.pink3.input.useHandCursor = true;
            _this.pink3.events.onInputDown.add(_this.posxy);

            _this.pink4.inputEnabled = true;
            _this.pink4.input.useHandCursor = true;
            _this.pink4.events.onInputDown.add(_this.posy);

            _this.pink5.inputEnabled = true;
            _this.pink5.input.useHandCursor = true;
            _this.pink5.events.onInputDown.add(_this.posy2);

            _this.pink6.inputEnabled = true;
            _this.pink6.input.useHandCursor = true;
            _this.pink6.events.onInputDown.add(_this.poscof);

        }


        _this.eraser = _this.add.sprite(800, 85, 'eraser');
        _this.tick = _this.add.sprite(865, 85, 'TickBtn');

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickEvaluation, _this);

        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.input.useHandCursor = true;
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop1, _this);

        _this.space1Boxes = _this.add.group();
        _this.space2Boxes = _this.add.group();
        _this.space3Boxes = _this.add.group();

        // part A Drag 
        _this.greenXSqX = 305;
        _this.greenXSqY = 213;//213
        _this.greenXYSqX = 305;
        _this.greenXYSqY = 213;//213
        _this.greenX2SqX = 305;
        _this.greenX2SqY = 213;//213
        _this.space1Box_y = [];
        _this.yCount = 0;//x2
        _this.yCount_2 = 0;//xy
        _this.yCount_3 = 0;//x
        _this.yCount_4 = 0;//y
        _this.yCount_5 = 0;//y2
        _this.yCount_6 = 0;//const
        _this.greenxFlag = 0;
        _this.greenxyFlag = 0;
        _this.greenx2Flag = 0;
        _this.greenyFlag = 0;
        _this.greeny2Flag = 0;
        _this.greenxconsFlag = 0;

    },

    //green in the vertically -x2
    minx2: function () {
        _this.clickSound.play();
        _this.ssquare1;//bigsquare x2
        if (_this.tickValuation_flag == 0) {
            if (_this.verticalY >= 440) {
                return;
            }
            _this.ssquare1 = _this.add.image(250, _this.verticalY, 'green1');
            _this.verticalY += 60;
            _this.ssquare1.name = '10';

            var nameText = _this.add.text(12, 12, '-x²');
            _this.applyingWhite(nameText);
            nameText.fontSize = '28px';
            nameText.bringToTop();
            _this.ssquare1.addChild(nameText);

            _this.space1Boxes.addChild(_this.ssquare1);
        }
        else {
            console.log("horizontal");
            if (_this.horizontalX >= 809) {
                return;
            }
            if (_this.space2Boxes.length == 0) _this.horizontalX + 15
            _this.ssquare1 = _this.add.image(_this.horizontalX, 165, 'green1');
            _this.horizontalX += 60;
            _this.ssquare1.name = '10';

            var nameText = _this.add.text(12, 12, '-x²');
            _this.applyingWhite(nameText);
            nameText.fontSize = '28px';
            nameText.bringToTop();
            _this.ssquare1.addChild(nameText);

            _this.space2Boxes.addChild(_this.ssquare1);
        }

    },
    //adding minus a  tile to bottom -x
    minx: function () {
        _this.clickSound.play();
        _this.rectangle1;
        if (_this.tickValuation_flag == 0) {
            if (_this.verticalY >= 400) {
                return;
            }
            _this.rectangle1 = _this.add.image(275, _this.verticalY, 'green2.1');
            _this.rectangle1.name = '20';

            var nameText = _this.add.text(0, 75, '-x');
            _this.applyingWhite(nameText);
            nameText.fontSize = '28px';
            nameText.bringToTop();
            nameText.angle = -90;
            _this.rectangle1.addChild(nameText);

            _this.verticalY += 125;

            _this.space1Boxes.addChild(_this.rectangle1);
        }
        else {
            console.log("horizontal");
            if (_this.horizontalX >= 685) {//809
                return;
            }
            _this.rectangle1 = _this.add.image(_this.horizontalX, 180, 'greenBig2');
            _this.rectangle1.name = '20';

            var nameText = _this.add.text(45, 0, '-x');
            _this.applyingWhite(nameText);
            nameText.fontSize = '28px';
            nameText.bringToTop();
            _this.rectangle1.addChild(nameText);

            _this.horizontalX += 125;

            _this.space2Boxes.addChild(_this.rectangle1);
        }

    },
    //adding minus ab tile to bottom
    minxy: function () {
        _this.clickSound.play();
        _this.rectangle2;
        if (_this.tickValuation_flag == 0) {
            if (_this.verticalY >= 440) {//440
                return;
            }

            _this.rectangle2 = _this.add.image(308, _this.verticalY, 'green3');
            _this.rectangle2.name = '30';
            _this.rectangle2.angle = 90;
            _this.verticalY += 60;

            var nameText = _this.add.text(15, 38, '-xy');
            _this.applyingWhite(nameText);
            nameText.fontSize = '25px';
            nameText.bringToTop();
            nameText.angle = -90;
            _this.rectangle2.addChild(nameText);

            _this.space1Boxes.addChild(_this.rectangle2);
        }
        else {
            console.log("horizontal");
            if (_this.horizontalX >= 809) {
                return;
            }
            _this.rectangle2 = _this.add.image(_this.horizontalX, 170, 'green3');
            _this.rectangle2.name = '30';

            var nameText = _this.add.text(12, 6, '-xy');
            _this.applyingWhite(nameText);
            nameText.fontSize = '25px';
            nameText.bringToTop();
            _this.rectangle2.addChild(nameText);

            _this.horizontalX += 60;

            _this.space2Boxes.addChild(_this.rectangle2);
        }
    },
    //adding minus b tile to bottom -y
    miny: function () {
        _this.clickSound.play();
        _this.rectangle3;
        if (_this.tickValuation_flag == 0) {
            if (_this.verticalY >= 420) {
                return;
            }
            _this.rectangle3 = _this.add.image(274, _this.verticalY, 'green2.4');
            _this.rectangle3.name = '40';

            var nameText = _this.add.text(0, 55, '-y');
            _this.applyingWhite(nameText);
            nameText.fontSize = '26px';
            nameText.bringToTop();
            nameText.angle = -90;
            _this.rectangle3.addChild(nameText);

            _this.verticalY += 85;

            _this.space1Boxes.addChild(_this.rectangle3);
        }
        else {
            console.log("horizontal");
            if (_this.horizontalX >= 809) {
                return;
            }
            _this.rectangle3 = _this.add.image(_this.horizontalX, 181.5, 'green2.3');//180
            _this.rectangle3.name = '40';

            var nameText = _this.add.text(30, 0, '-y');
            _this.applyingWhite(nameText);
            nameText.fontSize = '26px';
            nameText.bringToTop();
            _this.rectangle3.addChild(nameText);

            _this.horizontalX += 85;

            _this.space2Boxes.addChild(_this.rectangle3);
        }

    },
    //adding minus b square tile to bottom -y2
    miny2: function () {
        _this.clickSound.play();
        _this.ssquare2;
        if (_this.tickValuation_flag == 0) {
            if (_this.verticalY >= 440) {
                return;
            }
            _this.ssquare2 = _this.add.image(267, _this.verticalY, 'green5');
            _this.verticalY += 40;
            _this.ssquare2.name = '50';

            var nameText = _this.add.text(3, 0, '-y²');
            _this.applyingWhite(nameText);
            nameText.fontSize = '28px';
            nameText.bringToTop();
            _this.ssquare2.addChild(nameText);

            _this.space1Boxes.addChild(_this.ssquare2);
        }
        else {
            console.log("horizontal");
            if (_this.horizontalX >= 809) {
                return;
            }
            _this.ssquare2 = _this.add.image(_this.horizontalX, 170, 'green5');
            _this.ssquare2.name = '50';

            var nameText = _this.add.text(3, 0, '-y²');
            _this.applyingWhite(nameText);
            nameText.fontSize = '28px';
            nameText.bringToTop();
            _this.ssquare2.addChild(nameText);

            _this.horizontalX += 40;

            _this.space2Boxes.addChild(_this.ssquare2);
        }


    },
    //-1
    mincof: function () {
        _this.clickSound.play();
        _this.smallbox1;
        if (_this.tickValuation_flag == 0) {
            if (_this.verticalY >= 450) {
                return;
            }
            _this.smallbox1 = _this.add.image(274, _this.verticalY, 'greenBig3');
            _this.verticalY += 33;
            _this.smallbox1.name = '60';

            var nameText = _this.add.text(7, 7, '-1');
            _this.applyingWhite(nameText);
            nameText.fontSize = '18px';
            nameText.bringToTop();
            _this.smallbox1.addChild(nameText);

            _this.space1Boxes.addChild(_this.smallbox1);
        }
        else {
            console.log("horizontal");
            if (_this.horizontalX >= 809) {
                return;
            }
            _this.smallbox1 = _this.add.image(_this.horizontalX, 180, 'greenBig3');
            _this.smallbox1.name = '60';
            _this.horizontalX += 33;

            var nameText = _this.add.text(7, 7, '-1');
            _this.applyingWhite(nameText);
            nameText.fontSize = '18px';
            nameText.bringToTop();
            _this.smallbox1.addChild(nameText);

            _this.space2Boxes.addChild(_this.smallbox1);
        }
    },

    //pink vertically x2
    posx2: function () {
        _this.clickSound.play();
        _this.ssquare3;
        if (_this.tickValuation_flag == 0) {
            if (_this.verticalY >= 440) {
                return;
            }
            _this.ssquare3 = _this.add.image(250, _this.verticalY, 'pink1');
            _this.verticalY += 60;
            _this.ssquare3.name = '11';

            var nameText = _this.add.text(8, 12, '+x²');
            _this.applyingWhite(nameText);
            nameText.fontSize = '28px';
            nameText.bringToTop();
            _this.ssquare3.addChild(nameText);


            _this.space1Boxes.addChild(_this.ssquare3);
        }
        else {
            console.log("horizontal");
            if (_this.horizontalX >= 809) {
                return;
            }
            if (_this.space2Boxes.length == 0) _this.horizontalX + 15
            _this.ssquare1 = _this.add.image(_this.horizontalX, 165, 'pink1');
            _this.horizontalX += 60;
            _this.ssquare1.name = '11';

            var nameText = _this.add.text(8, 12, '+x²');
            _this.applyingWhite(nameText);
            nameText.fontSize = '28px';
            nameText.bringToTop();
            _this.ssquare1.addChild(nameText);

            _this.space2Boxes.addChild(_this.ssquare1);
        }

    },
    //adding plus a tile to bottom +x
    posx: function () {
        _this.clickSound.play();
        _this.rectangle4;
        if (_this.tickValuation_flag == 0) {
            if (_this.verticalY >= 400) {
                return;
            }

            _this.rectangle4 = _this.add.image(275, _this.verticalY, 'pink2.1');
            _this.rectangle4.name = '21';
            _this.verticalY += 125;

            var nameText = _this.add.text(0, 75, '+x');
            _this.applyingWhite(nameText);
            nameText.fontSize = '28px';
            nameText.bringToTop();
            nameText.angle = -90;
            _this.rectangle4.addChild(nameText);


            _this.space1Boxes.addChild(_this.rectangle4);
        }
        else {
            console.log("horizontal");
            if (_this.horizontalX >= 685) {//805
                return;
            }
            _this.rectangle4 = _this.add.image(_this.horizontalX, 180, 'pinkBig2');
            _this.rectangle4.name = '21';
            _this.horizontalX += 125;

            var nameText = _this.add.text(45, 0, '+x');
            _this.applyingWhite(nameText);
            nameText.fontSize = '28px';
            nameText.bringToTop();
            _this.rectangle4.addChild(nameText);

            _this.space2Boxes.addChild(_this.rectangle4);
        }

    },
    //adding plus ab tile to bottom
    posxy: function () {
        _this.clickSound.play();
        _this.rectangle5;
        if (_this.tickValuation_flag == 0) {
            if (_this.verticalY >= 440) { //|| _this.verticalY == 445
                return;
            }
            _this.rectangle5 = _this.add.image(308, _this.verticalY, 'pink3');
            _this.rectangle5.name = '31';
            _this.rectangle5.angle = 90;
            _this.verticalY += 60;

            var nameText = _this.add.text(15, 38, '+xy');
            _this.applyingWhite(nameText);
            nameText.fontSize = '20px';
            nameText.bringToTop();
            nameText.angle = -90;
            _this.rectangle5.addChild(nameText);

            _this.space1Boxes.addChild(_this.rectangle5);
        }
        else {
            console.log("horizontal");
            if (_this.horizontalX >= 809) {
                return;
            }
            _this.rectangle5 = _this.add.image(_this.horizontalX, 170, 'pink3');
            _this.rectangle5.name = '31';
            _this.horizontalX += 60;

            var nameText = _this.add.text(8, 6, '+xy');
            _this.applyingWhite(nameText);
            nameText.fontSize = '25px';
            nameText.bringToTop();
            _this.rectangle5.addChild(nameText);

            _this.space2Boxes.addChild(_this.rectangle5);
        }

    },
    //adding plus ab tile to bottom
    posy: function () {
        _this.clickSound.play();
        _this.rectangle6;
        if (_this.tickValuation_flag == 0) {
            if (_this.verticalY >= 420) {
                return;
            }
            _this.rectangle6 = _this.add.image(275, _this.verticalY, 'pink2.4');
            _this.rectangle6.name = '41';
            _this.verticalY += 85;

            var nameText = _this.add.text(0, 60, '+y');
            _this.applyingWhite(nameText);
            nameText.fontSize = '26px';
            nameText.bringToTop();
            nameText.angle = -90;
            _this.rectangle6.addChild(nameText);

            _this.space1Boxes.addChild(_this.rectangle6);
        }
        else {
            console.log("horizontal");
            if (_this.horizontalX >= 809) {
                return;
            }
            _this.rectangle6 = _this.add.image(_this.horizontalX, 181.5, 'pink2.3');//180
            _this.rectangle6.name = '41';
            _this.horizontalX += 85;

            var nameText = _this.add.text(25, 0, '+y');
            _this.applyingWhite(nameText);
            nameText.fontSize = '26px';
            nameText.bringToTop();
            _this.rectangle6.addChild(nameText);

            _this.space2Boxes.addChild(_this.rectangle6);
        }

    },
    //adding plus b square tile to bottom +y2
    posy2: function () {
        _this.clickSound.play();
        _this.ssquare4;
        if (_this.tickValuation_flag == 0) {
            if (_this.verticalY >= 440) {   //|| _this.verticalY >= 440
                return;
            }
            _this.ssquare4 = _this.add.image(267, _this.verticalY, 'pink5');
            _this.verticalY += 40;
            _this.ssquare4.name = '51';

            var nameText = _this.add.text(2, 5, '+y²');
            _this.applyingWhite(nameText);
            nameText.fontSize = '23px';
            nameText.bringToTop();
            _this.ssquare4.addChild(nameText);

            _this.space1Boxes.addChild(_this.ssquare4);
        }
        else {
            console.log("horizontal");
            if (_this.horizontalX >= 809) {
                return;
            }
            _this.ssquare4 = _this.add.image(_this.horizontalX, 170, 'pink5');
            _this.ssquare4.name = '51';
            _this.horizontalX += 40;

            var nameText = _this.add.text(2, 5, '+y²');
            _this.applyingWhite(nameText);
            nameText.fontSize = '23px';
            nameText.bringToTop();
            _this.ssquare4.addChild(nameText);

            _this.space2Boxes.addChild(_this.ssquare4);
        }

    },
    //+1
    poscof: function () {
        _this.clickSound.play();
        _this.smallbox2;
        if (_this.tickValuation_flag == 0) {
            if (_this.verticalY >= 450) {
                return;
            }
            _this.smallbox2 = _this.add.image(271, _this.verticalY, 'pinkBig3');
            _this.smallbox2.scale.setTo(1.05, 1);
            _this.verticalY += 33;
            _this.smallbox2.name = '61';

            var nameText = _this.add.text(7, 7, '+1');
            _this.applyingWhite(nameText);
            nameText.fontSize = '18px';
            nameText.bringToTop();
            _this.smallbox2.addChild(nameText);

            _this.space1Boxes.addChild(_this.smallbox2);
        }
        else {
            console.log("horizontal");
            if (_this.horizontalX >= 809) {
                return;
            }
            _this.smallbox2 = _this.add.image(_this.horizontalX, 180, 'pinkBig3');
            _this.smallbox2.name = '61';
            _this.horizontalX += 33;

            var nameText = _this.add.text(7, 7, '+1');
            _this.applyingWhite(nameText);
            nameText.fontSize = '18px';
            nameText.bringToTop();
            _this.smallbox2.addChild(nameText);

            _this.space2Boxes.addChild(_this.smallbox2);
        }
    },
    //Tick button in the question screen and the evaluation of the vertical box.row wise
    tickEvaluation_draft: function (target) {
        console.log("tick first evaluation");
        _this.clickSound.play();
        let a = [];
        let b = [];
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

        //Evaluating the number of blocks in the top space.
        for (let i = 0; i < _this.space1Boxes.length; i++) {
            if (_this.space1Boxes.getChildAt(i).name == '20') {//-x
                a[0] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '21') {//x
                b[0] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '60') {//-1
                a[1] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '61') {//1
                b[1] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '10') {//-x2
                a[2] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '11') {//x2
                b[2] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '30') {//-xy
                a[3] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '31') {//xy
                b[3] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '40') {//-y
                a[4] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '41') {//y
                b[4] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '50') {//-y2
                a[5] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '51') {//y2
                b[5] += 1;
            }
        }

        //-2x,2x,y,-y,3,-3......//-x,x,-1,1
        if (_this.variable == 'y' && _this.variables.length == 2) {
            if ((a[4] == _this.mLinear && b[4] == 0 && a[1] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[0] == 0 && b[0] == 0 && a[5] == 0 && b[5] == 0)) {
                console.log(a[4], ': a[4]');
                console.log(b[4], ': b[4]');
                console.log(a[1], ': a[1]');
                console.log(b[1], ': b[1]');
                console.log('inside ');

                _this.correctValidationFirst();
                _this.Array_1 = a;
                _this.Array_2 = b;
                _this.tick.inputEnabled = false;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    _this.tick.inputEnabled = true;
                    target.events.onInputDown.add(_this.tickSecondEvaluation, _this);
                });
            }
            else if ((b[4] == _this.mLinear && a[4] == 0 && a[1] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[0] == 0 && b[0] == 0 && a[5] == 0 && b[5] == 0)) {
                console.log(a[4], ': a[4]');
                console.log(b[4], ': b[4]');
                console.log(a[1], ': a[1]');
                console.log(b[1], ': b[1]');
                console.log('inside ');

                _this.correctValidationFirst();
                _this.Array_1 = a;
                _this.Array_2 = b;
                _this.tick.inputEnabled = false;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    _this.tick.inputEnabled = true;
                    target.events.onInputDown.add(_this.tickSecondEvaluation, _this);
                });
            }
            else if (((a[1] == _this.mLinear && b[1] == 0 && a[0] == 0 && b[0] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0))) {
                console.log(a[4], ': a[4]');
                console.log(b[4], ': b[4]');
                console.log(a[1], ': a[1]');
                console.log(b[1], ': b[1]');
                console.log('inside ');

                _this.correctValidationFirst();
                _this.Array_1 = a;
                _this.Array_2 = b;
                _this.tick.inputEnabled = false;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    _this.tick.inputEnabled = true;
                    target.events.onInputDown.add(_this.tickSecondEvaluation, _this);
                });
            }
            else if ((b[1] == _this.mLinear && a[1] == 0 && a[0] == 0 && b[0] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0)) {
                console.log(a[4], ': a[4]');
                console.log(b[4], ': b[4]');
                console.log(a[1], ': a[1]');
                console.log(b[1], ': b[1]');
                console.log('inside ');

                _this.correctValidationFirst();
                _this.Array_1 = a;
                _this.Array_2 = b;
                _this.tick.inputEnabled = false;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    _this.tick.inputEnabled = true;
                    target.events.onInputDown.add(_this.tickSecondEvaluation, _this);
                });
            }
            else {
                _this.space1Boxes.destroy();
                _this.space1Boxes = _this.add.group();
                _this.wrongans.play();
                _this.verticalY = 215;
            }
        }
        else {
            if (((a[0] == _this.mLinear && b[0] == 0 && a[1] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                (b[0] == _this.mLinear && a[0] == 0 && a[1] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0)) ||
                ((a[1] == _this.mLinear && b[1] == 0 && a[0] == 0 && b[0] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                    (b[1] == _this.mLinear && a[1] == 0 && a[0] == 0 && b[0] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0))) {
                console.log(a[0], ': a[0]');
                console.log(b[0], ': b[0]');
                console.log(a[1], ': a[1]');
                console.log(b[1], ': b[1]');
                console.log('inside ');

                _this.correctValidationFirst();
                _this.Array_1 = a;
                _this.Array_2 = b;
                _this.tick.inputEnabled = false;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    _this.tick.inputEnabled = true;
                    target.events.onInputDown.add(_this.tickSecondEvaluation, _this);
                });
            }
            else {
                _this.space1Boxes.destroy();
                _this.space1Boxes = _this.add.group();
                _this.wrongans.play();
                _this.verticalY = 215;
            }
        }


    },
    tickEvaluation: function (target) {
        console.log("tick first evaluation");
        _this.clickSound.play();
        let a = [];
        let b = [];
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

        //Evaluating the number of blocks in the top space.
        for (let i = 0; i < _this.space1Boxes.length; i++) {
            if (_this.space1Boxes.getChildAt(i).name == '20') {//-x
                a[0] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '21') {//x
                b[0] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '60') {//-1
                a[1] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '61') {//1
                b[1] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '10') {//-x2
                a[2] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '11') {//x2
                b[2] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '30') {//-xy
                a[3] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '31') {//xy
                b[3] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '40') {//-y
                a[4] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '41') {//y
                b[4] += 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '50') {//-y2
                a[5] -= 1;
            }
            else if (_this.space1Boxes.getChildAt(i).name == '51') {//y2
                b[5] += 1;
            }
        }

        //-2x,2x,y,-y,3,-3......//-x,x,-1,1
        //x,y,const
        // if (((a[0] == _this.mLinear_x && b[0] == 0) || (b[0] == _this.mLinear_x && a[0] == 0)) &&
        //  ((a[1] == _this.mConstant && b[1] == 0) || (b[1] == _this.mConstant && a[1] == 0)) && 
        //  ((a[4] == _this.mLinear_y && b[4] == 0) || (b[4] == _this.mLinear_y && a[4] == 0))) {

        // }
        if (_this.variables_1_1[0] == 'x') {
            if (((a[0] == _this.mLinear_x && b[0] == 0 && a[1] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                (b[0] == _this.mLinear_x && a[0] == 0 && a[1] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0))) {
                console.log(a[0], ': a[0]');
                console.log(b[0], ': b[0]');
                console.log('inside ');

                _this.correctValidationFirst();
                _this.Array_1 = a;
                _this.Array_2 = b;
                _this.tick.inputEnabled = false;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    _this.tick.inputEnabled = true;
                    target.events.onInputDown.add(_this.tickSecondEvaluation, _this);
                });
            }
            else {
                _this.space1Boxes.destroy();
                _this.space1Boxes = _this.add.group();
                _this.wrongans.play();
                _this.verticalY = 215;
            }

        }
        else if (_this.variables_1_1[0] == 'y') {
            if ((a[4] == _this.mLinear_y && b[4] == 0 && a[1] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[0] == 0 && b[0] == 0 && a[5] == 0 && b[5] == 0)) {
                console.log(a[4], ': a[4]');
                console.log(b[4], ': b[4]');
                console.log(a[1], ': a[1]');
                console.log(b[1], ': b[1]');
                console.log('inside ');

                _this.correctValidationFirst();
                _this.Array_1 = a;
                _this.Array_2 = b;
                _this.tick.inputEnabled = false;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    _this.tick.inputEnabled = true;
                    target.events.onInputDown.add(_this.tickSecondEvaluation, _this);
                });
            }
            else if ((b[4] == _this.mLinear_y && a[4] == 0 && a[1] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[0] == 0 && b[0] == 0 && a[5] == 0 && b[5] == 0)) {
                console.log(a[4], ': a[4]');
                console.log(b[4], ': b[4]');
                console.log(a[1], ': a[1]');
                console.log(b[1], ': b[1]');
                console.log('inside ');

                _this.correctValidationFirst();
                _this.Array_1 = a;
                _this.Array_2 = b;
                _this.tick.inputEnabled = false;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    _this.tick.inputEnabled = true;
                    target.events.onInputDown.add(_this.tickSecondEvaluation, _this);
                });
            }
            else {
                _this.space1Boxes.destroy();
                _this.space1Boxes = _this.add.group();
                _this.wrongans.play();
                _this.verticalY = 215;
            }
        }
        else {
            if (_this.variables_1_1.length == 0) {
                if (((a[1] == _this.mConstant && b[1] == 0 && a[0] == 0 && b[0] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                    (b[1] == _this.mConstant && a[1] == 0 && a[0] == 0 && b[0] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0))) {
                    console.log(a[0], ': a[0]');
                    console.log(b[0], ': b[0]');
                    console.log(a[1], ': a[1]');
                    console.log(b[1], ': b[1]');
                    console.log('inside ');

                    _this.correctValidationFirst();
                    _this.Array_1 = a;
                    _this.Array_2 = b;
                    _this.tick.inputEnabled = false;
                    target.events.onInputDown.removeAll();
                    _this.time.events.add(800, function () {
                        _this.tick.inputEnabled = true;
                        target.events.onInputDown.add(_this.tickSecondEvaluation, _this);
                    });
                }
                else {
                    _this.space1Boxes.destroy();
                    _this.space1Boxes = _this.add.group();
                    _this.wrongans.play();
                    _this.verticalY = 215;
                }
            }
        }



    },
    correctValidationFirst: function () {
        _this.pauseVoice();
        if (_this.count1 == 0) {

            _this.Ask_Question3.play();
            // _this.Question_flag = 2;
        }
        _this.Question_flag = 2;


        _this.tickValuation_flag = 1;
        _this.framechange.play();
        _this.eraser.events.onDragStop.removeAll();
        _this.eraser.events.onDragStop.add(_this.eraserDrop2, _this);

        _this.textBox.frame = 1;
        //_this.tick.inputEnabled = true;
        _this.green1.events.onInputDown.removeAll();
        _this.green2.events.onInputDown.removeAll();
        _this.green6.events.onInputDown.removeAll();

        _this.pink1.events.onInputDown.removeAll();
        _this.pink2.events.onInputDown.removeAll();
        _this.pink6.events.onInputDown.removeAll();
        if (_this.variables.length == 2) {
            _this.green3.events.onInputDown.removeAll();
            _this.green4.events.onInputDown.removeAll();
            _this.green5.events.onInputDown.removeAll();

            _this.pink3.events.onInputDown.removeAll();
            _this.pink4.events.onInputDown.removeAll();
            _this.pink5.events.onInputDown.removeAll();
        }

        _this.green1.events.onInputDown.add(_this.minx2);
        _this.green2.events.onInputDown.add(_this.minx);
        _this.green6.events.onInputDown.add(_this.mincof);

        _this.pink1.events.onInputDown.add(_this.posx2);
        _this.pink2.events.onInputDown.add(_this.posx);
        _this.pink6.events.onInputDown.add(_this.poscof);
        if (_this.variables.length == 2) {
            _this.green3.events.onInputDown.add(_this.minxy);
            _this.green4.events.onInputDown.add(_this.miny);
            _this.green5.events.onInputDown.add(_this.miny2);

            _this.pink3.events.onInputDown.add(_this.posxy);
            _this.pink4.events.onInputDown.add(_this.posy);
            _this.pink5.events.onInputDown.add(_this.posy2);
        }

        for (i = 0; i < _this.space1Boxes.length; i++) {
            _this.space1Box_y.push(_this.space1Boxes.getChildAt(i).y);//storing the y positions of vertical
        }

    },

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

        b.push(0);
        b.push(0);
        b.push(0);
        b.push(0);
        b.push(0);
        b.push(0);

        //Evaluating the number of blocks in the top space.
        for (let i = 0; i < _this.space2Boxes.length; i++) {
            if (_this.space2Boxes.getChildAt(i).name == '20') {//-x
                a[0] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '21') {//x
                b[0] += 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '60') {//-1
                a[1] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '61') {//1
                b[1] += 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '10') {//-x2
                a[2] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '11') {//x2
                b[2] += 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '30') {//-xy
                a[3] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '31') {//xy
                b[3] += 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '40') {//-y
                a[4] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '41') {//y
                b[4] += 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '50') {//-y2
                a[5] -= 1;
            }
            else if (_this.space2Boxes.getChildAt(i).name == '51') {//y2
                b[5] += 1;
            }
        }
        console.log(a, "a...");
        console.log(b, "b.....");

        _this.tiles_Flag = 0;

        // x, y   _this.mLinear_x2, _this.mLinear_y3    a[0],a[4] || a[0],b[4] || b[0],a[4] || b[0],b[4]
        //  y,x    _this.mLinear_y2 , _this.mLinear_x3   a[4],a[0] || a[4],b[0] || b[4],a[0] || b[4],b[0]
        //  1,x    _this.mConstant2 , _this.mLinear_x3  a[1],a[0] || a[1],b[0] || b[1],a[0] || b[1],b[0] 
        //  x,1    _this.mLinear_x2, _this.mConstant3   a[0],a[1] || a[0],b[1] || b[0],a[1] || b[0],b[1]
        //  1,y    _this.mConstant2 , _this.mLinear_y3  a[1],a[4] || a[1],b[4] || b[1],a[4] || b[1],b[4] 
        //  y,1     _this.mLinear_y2, _this.mConstant3  a[4],a[1] || a[4],b[1] || b[4],a[1] || b[4],b[1]

        if (_this.variables_2_1.length == 0) {
            //  1,x    _this.mConstant2 , _this.mLinear_x3  a[1],a[0] || a[1],b[0] || b[1],a[0] || b[1],b[0] 
            //  1,y    _this.mConstant2 , _this.mLinear_y3  a[1],a[4] || a[1],b[4] || b[1],a[4] || b[1],b[4] 
            if ((a[1] == _this.mConstant2 && b[0] == 0 && a[0] == _this.mLinear_x3 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[1] == _this.mConstant2 && b[0] == _this.mLinear_x3 && a[0] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[1] == _this.mConstant2 && b[0] == 0 && a[0] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == _this.mLinear_y3 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[1] == _this.mConstant2 && b[0] == 0 && a[0] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == _this.mLinear_y3 && a[5] == 0 && b[5] == 0)) {
                console.log('inside 3');
                // for (i = 0; i < Math.abs(_this.mLinear2); i++)
                //     if (_this.space2Boxes.getChildAt(i).name == '60') _this.tiles_Flag += 1;

                // if (_this.tiles_Flag == Math.abs(_this.mLinear2)) {
                _this.correctAnswer();
                _this.Array_3 = a;
                _this.Array_4 = b;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    target.events.onInputDown.add(_this.tickThirdEvaluation, _this);
                });
                // }
                // else {
                //     console.log("wrong");
                //     _this.tiles_Flag = 0;
                //     _this.space2Boxes.destroy();
                //     _this.space2Boxes = _this.add.group();
                //     _this.wrongans.play();
                //     _this.horizontalX = 305;
                // }
            }
            else if ((a[1] == 0 && b[0] == 0 && a[0] == 0 && b[1] == _this.mConstant2 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == _this.mLinear_y3 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[1] == 0 && b[0] == 0 && a[0] == 0 && b[1] == _this.mConstant2 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == _this.mLinear_y3 && a[5] == 0 && b[5] == 0) ||
                (a[1] == 0 && b[0] == 0 && a[0] == _this.mLinear_x3 && b[1] == _this.mConstant2 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[1] == 0 && b[0] == _this.mLinear_x3 && a[0] == 0 && b[1] == _this.mConstant2 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0)) {
                console.log('inside 4');
                // for (i = 0; i < Math.abs(_this.mLinear2); i++)
                //     if (_this.space2Boxes.getChildAt(i).name == '61') _this.tiles_Flag += 1;

                // if (_this.tiles_Flag == Math.abs(_this.mLinear2)) {
                _this.correctAnswer();
                _this.Array_3 = a;
                _this.Array_4 = b;
                target.events.onInputDown.removeAll();

                _this.time.events.add(800, function () {
                    target.events.onInputDown.add(_this.tickThirdEvaluation, _this);
                });
                // }
                // else {
                //     console.log("wrong");
                //     _this.tiles_Flag = 0;
                //     _this.space2Boxes.destroy();
                //     _this.space2Boxes = _this.add.group();
                //     _this.wrongans.play();
                //     _this.horizontalX = 305;
                // }
            }
            else {
                console.log("wrong");
                _this.space2Boxes.destroy();
                _this.space2Boxes = _this.add.group();
                _this.wrongans.play();
                _this.horizontalX = 305;
            }

        }
        else if (_this.variables_2_1[0] == 'x') {
            // x, y   _this.mLinear_x2, _this.mLinear_y3    a[0],a[4] || a[0],b[4] || b[0],a[4] || b[0],b[4]
            //  x,1    _this.mLinear_x2, _this.mConstant3   a[0],a[1] || a[0],b[1] || b[0],a[1] || b[0],b[1]
            if ((a[0] == _this.mLinear_x2 && b[0] == 0 && a[1] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == _this.mLinear_y3 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[0] == _this.mLinear_x2 && b[0] == 0 && a[1] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == _this.mLinear_y3 && a[5] == 0 && b[5] == 0) ||
                (a[0] == _this.mLinear_x2 && b[0] == 0 && a[1] == _this.mConstant3 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[0] == _this.mLinear_x2 && b[0] == 0 && a[1] == 0 && b[1] == _this.mConstant3 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0)) {
                console.log('inside 1');
                // for (i = 0; i < Math.abs(_this.mLinear2); i++)
                //     if (_this.space2Boxes.getChildAt(i).name == '20') _this.tiles_Flag += 1;

                // if (_this.tiles_Flag == Math.abs(_this.mLinear2)) {
                _this.correctAnswer();
                _this.Array_3 = a;
                _this.Array_4 = b;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    target.events.onInputDown.add(_this.tickThirdEvaluation, _this);
                });
                // }
                // else {
                //     console.log("wrong");
                //     _this.tiles_Flag = 0;
                //     _this.space2Boxes.destroy();
                //     _this.space2Boxes = _this.add.group();
                //     _this.wrongans.play();
                //     _this.horizontalX = 305;
                // }
            }
            else if ((a[0] == 0 && b[0] == _this.mLinear_x2 && a[1] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == _this.mLinear_y3 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[0] == 0 && b[0] == _this.mLinear_x2 && a[1] == 0 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == _this.mLinear_y3 && a[5] == 0 && b[5] == 0) ||
                (a[0] == 0 && b[0] == _this.mLinear_x2 && a[1] == _this.mConstant3 && b[1] == 0 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[0] == 0 && b[0] == _this.mLinear_x2 && a[1] == 0 && b[1] == _this.mConstant3 && b[2] == 0 && a[2] == 0 && a[3] == 0 && b[3] == 0 && a[4] == 0 && b[4] == 0 && a[5] == 0 && b[5] == 0)) {
                console.log('inside 2');
                // for (i = 0; i < Math.abs(_this.mLinear2); i++)
                //     if (_this.space2Boxes.getChildAt(i).name == '21') _this.tiles_Flag += 1;

                // if (_this.tiles_Flag == Math.abs(_this.mLinear2)) {
                _this.correctAnswer();
                _this.Array_3 = a;
                _this.Array_4 = b;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    target.events.onInputDown.add(_this.tickThirdEvaluation, _this);
                });
                // }
                // else {
                //     console.log("wrong");
                //     _this.tiles_Flag = 0;
                //     _this.space2Boxes.destroy();
                //     _this.space2Boxes = _this.add.group();
                //     _this.wrongans.play();
                //     _this.horizontalX = 305;
                // }

            }
            else {
                console.log("wrong");
                _this.space2Boxes.destroy();
                _this.space2Boxes = _this.add.group();
                _this.wrongans.play();
                _this.horizontalX = 305;
            }
        }
        else if (_this.variables_2_1[0] == 'y') {
            //  y,x    _this.mLinear_y2 , _this.mLinear_x3   a[4],a[0] || a[4],b[0] || b[4],a[0] || b[4],b[0]
            //  y,1     _this.mLinear_y2, _this.mConstant3  a[4],a[1] || a[4],b[1] || b[4],a[1] || b[4],b[1]
            if ((a[4] == _this.mLinear_y2 && b[4] == 0 && a[0] == _this.mLinear_x3 && b[0] == 0 && a[1] == 0 && b[1] == 0 && a[2] == 0 && b[2] == 0 && a[3] == 0 && b[3] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[4] == _this.mLinear_y2 && b[4] == 0 && a[0] == 0 && b[0] == _this.mLinear_x3 && a[1] == 0 && b[1] == 0 && a[2] == 0 && b[2] == 0 && a[3] == 0 && b[3] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[4] == _this.mLinear_y2 && b[4] == 0 && a[0] == 0 && b[0] == 0 && a[1] == _this.mConstant3 && b[1] == 0 && a[2] == 0 && b[2] == 0 && a[3] == 0 && b[3] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[4] == _this.mLinear_y2 && b[4] == 0 && a[0] == 0 && b[0] == 0 && a[1] == 0 && b[1] == _this.mConstant3 && a[2] == 0 && b[2] == 0 && a[3] == 0 && b[3] == 0 && a[5] == 0 && b[5] == 0)) {
                console.log('inside 5');
                // for (i = 0; i < Math.abs(_this.mLinear2); i++)
                //     if (_this.space2Boxes.getChildAt(i).name == '40') _this.tiles_Flag += 1;

                // if (_this.tiles_Flag == Math.abs(_this.mLinear2)) {
                _this.correctAnswer();
                _this.Array_3 = a;
                _this.Array_4 = b;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    target.events.onInputDown.add(_this.tickThirdEvaluation, _this);
                });
                // }
                // else {
                //     console.log("wrong");
                //     _this.tiles_Flag = 0;
                //     _this.space2Boxes.destroy();
                //     _this.space2Boxes = _this.add.group();
                //     _this.wrongans.play();
                //     _this.horizontalX = 305;
                // }
            }
            else if ((a[4] == 0 && b[4] == _this.mLinear_y2 && a[0] == _this.mLinear_x3 && b[0] == 0 && a[1] == 0 && b[1] == 0 && a[2] == 0 && b[2] == 0 && a[3] == 0 && b[3] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[4] == 0 && b[4] == _this.mLinear_y2 && a[0] == 0 && b[0] == _this.mLinear_x3 && a[1] == 0 && b[1] == 0 && a[2] == 0 && b[2] == 0 && a[3] == 0 && b[3] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[4] == 0 && b[4] == _this.mLinear_y2 && a[0] == 0 && b[0] == 0 && a[1] == _this.mConstant3 && b[1] == 0 && a[2] == 0 && b[2] == 0 && a[3] == 0 && b[3] == 0 && a[5] == 0 && b[5] == 0) ||
                (a[4] == 0 && b[4] == _this.mLinear_y2 && a[0] == 0 && b[0] == 0 && a[1] == 0 && b[1] == _this.mConstant3 && a[2] == 0 && b[2] == 0 && a[3] == 0 && b[3] == 0 && a[5] == 0 && b[5] == 0)) {
                console.log('inside 6');
                // for (i = 0; i < Math.abs(_this.mLinear2); i++)
                //     if (_this.space2Boxes.getChildAt(i).name == '41') _this.tiles_Flag += 1;

                // if (_this.tiles_Flag == Math.abs(_this.mLinear2)) {
                _this.correctAnswer();
                _this.Array_3 = a;
                _this.Array_4 = b;
                target.events.onInputDown.removeAll();
                _this.time.events.add(800, function () {
                    target.events.onInputDown.add(_this.tickThirdEvaluation, _this);
                });
                // }
                // else {
                //     console.log("wrong");
                //     _this.tiles_Flag = 0;
                //     _this.space2Boxes.destroy();
                //     _this.space2Boxes = _this.add.group();
                //     _this.wrongans.play();
                //     _this.horizontalX = 305;
                // }
            }
            else {
                console.log("wrong");
                _this.space2Boxes.destroy();
                _this.space2Boxes = _this.add.group();
                _this.wrongans.play();
                _this.horizontalX = 305;
            }
        }

    },
    correctAnswer: function () {
        _this.pauseVoice();
        if (_this.count1 == 0) {

            _this.Ask_Question4.play();

        }
        _this.Question_flag = 3;

        _this.counterCelebrationSound.play();
        _this.textBox.destroy();

        //checking the order.....................
        if (_this.variables_2_1.length == 0) {
            _this.constCount = 0;
            for (i = 0; i < Math.abs(_this.mLinear2); i++) {
                if (_this.space2Boxes.getChildAt(i).name == '60' || _this.space2Boxes.getChildAt(i).name == '61') _this.constCount += 1;
                console.log(_this.constCount, "_this.constCount");
            }
            if (_this.constCount == Math.abs(_this.mLinear2)) {
                _this.rearrange = false;
                console.log("_this.constCount is equal.........");
            }
            else {
                _this.rearrange = true;
                _this.rearrangingTilesConst();
            }
        }
        if (_this.variables_2_1[0] == 'x') {
            _this.xCount = 0;
            for (i = 0; i < Math.abs(_this.mLinear_x2); i++) {
                if (_this.space2Boxes.getChildAt(i).name == '20' || _this.space2Boxes.getChildAt(i).name == '21') _this.xCount += 1;
                console.log(_this.xCount, "_this.xCount");
            }
            if (_this.xCount == Math.abs(_this.mLinear_x2)) {
                _this.rearrange = false;
                console.log("_this.xCount is equal.........");
            }
            else {
                _this.rearrange = true;
                _this.rearrangingTilesX();
            }
        }
        if (_this.variables_2_1[0] == 'y') {
            _this.yCount = 0;
            for (i = 0; i < Math.abs(_this.mLinear_y2); i++) {
                if (_this.space2Boxes.getChildAt(i).name == '40' || _this.space2Boxes.getChildAt(i).name == '41') _this.yCount += 1;
                console.log(_this.xCount, "_this.xCount");
            }
            if (_this.yCount == Math.abs(_this.mLinear_y2)) {
                _this.rearrange = false;
                console.log("_this.xCount is equal.........");
            }
            else {
                _this.rearrange = true;
                _this.rearrangingTilesY();
            }
        }

        _this.textBox = _this.add.sprite(240, 80, 'Text box_4');
        _this.textBox.scale.setTo(1.6, 1.2);
        let stringEq = ' ( ';
        let multiply = '*';
        let stringEq2 = ' ( ' + _this.equation2 + ' ) ';

        stringEq = stringEq + _this.equation1 + " ) " + multiply + stringEq2;

        _this.questionText = _this.add.text(270, 98, stringEq);//50,22//100,19
        _this.applyingStyleBlue_2(_this.questionText);
        // _this.textBox.addChild(_this.questionText);

        // _this.multiplySign = _this.add.text(190, 19, multiply);
        // _this.applyingStyleBlue_2(_this.multiplySign);
        // _this.textBox.addChild(_this.multiplySign);



        // _this.questionText2 = _this.add.text(380, 98, stringEq2);
        // _this.applyingStyleBlue_2(_this.questionText2);
        // _this.textBox.addChild(_this.questionText2);

        _this.lastObject = _this.space2Boxes.getAt(_this.space2Boxes.length - 1);
        _this.lastObjectX = _this.lastObject.x;

        _this.eraser.events.onDragStop.removeAll();
        _this.eraser.events.onDragStop.add(_this.eraserDrop3, _this);

        _this.green1.events.onInputDown.removeAll();
        _this.green2.events.onInputDown.removeAll();
        _this.green6.events.onInputDown.removeAll();

        _this.pink1.events.onInputDown.removeAll();
        _this.pink2.events.onInputDown.removeAll();
        _this.pink6.events.onInputDown.removeAll();
        if (_this.variables.length == 2) {
            _this.green3.events.onInputDown.removeAll();
            _this.green4.events.onInputDown.removeAll();
            _this.green5.events.onInputDown.removeAll();

            _this.pink3.events.onInputDown.removeAll();
            _this.pink4.events.onInputDown.removeAll();
            _this.pink5.events.onInputDown.removeAll();
        }

        _this.green1.inputEnabled = true;
        _this.green1.input.enableDrag();
        _this.green1.input.useHandCursor = true;
        _this.green1.events.onDragStart.add(_this.dragStart);
        _this.green1.events.onDragStop.add(_this.greenX2Drag, _this);

        _this.pink1.inputEnabled = true;
        _this.pink1.input.enableDrag();
        _this.pink1.input.useHandCursor = true;
        _this.pink1.events.onDragStop.add(_this.pinkX2Drag, _this);

        _this.green2.inputEnabled = true;
        _this.green2.input.enableDrag();
        _this.green2.input.useHandCursor = true;
        _this.green2.events.onDragStop.add(_this.greenXDrag, _this);

        _this.green2_dup_2.inputEnabled = true;//for duplicate object big one
        _this.green2_dup_2.input.useHandCursor = true;
        _this.green2_dup_2.input.enableDrag(true);
        _this.green2_dup_2.events.onDragUpdate.add(_this.green2_duplicate_2Update, _this);
        _this.green2_dup_2.events.onDragStop.add(_this.greenXDrag, _this);

        _this.pink2.inputEnabled = true;
        _this.pink2.input.enableDrag();
        _this.pink2.input.useHandCursor = true;
        _this.pink2.events.onDragStop.add(_this.pinkXDrag, _this);

        _this.pink2_dup_2.inputEnabled = true;//for duplicate object big one
        _this.pink2_dup_2.input.useHandCursor = true;
        _this.pink2_dup_2.input.enableDrag(true);
        _this.pink2_dup_2.events.onDragUpdate.add(_this.pink2_duplicate_2Update, _this);
        _this.pink2_dup_2.events.onDragStop.add(_this.pinkXDrag, _this);

        _this.green6.inputEnabled = true;
        _this.green6.input.enableDrag();
        _this.green6.input.useHandCursor = true;
        _this.green6.events.onDragStop.add(_this.green1Drag, _this);

        _this.green6_dup_2.inputEnabled = true;//for duplicate object big one
        _this.green6_dup_2.input.useHandCursor = true;
        _this.green6_dup_2.input.enableDrag(true);
        _this.green6_dup_2.events.onDragUpdate.add(_this.green6_duplicate_2Update, _this);
        _this.green6_dup_2.events.onDragStop.add(_this.green1Drag, _this);

        _this.pink6.inputEnabled = true;
        _this.pink6.input.enableDrag();
        _this.pink6.input.useHandCursor = true;
        _this.pink6.events.onDragStop.add(_this.pink1Drag, _this);

        _this.pink6_dup_2.inputEnabled = true;//for duplicate object big one
        _this.pink6_dup_2.input.useHandCursor = true;
        _this.pink6_dup_2.input.enableDrag(true);
        _this.pink6_dup_2.events.onDragUpdate.add(_this.pink6_duplicate_2Update, _this);
        _this.pink6_dup_2.events.onDragStop.add(_this.pink1Drag, _this);

        if (_this.variables.length == 2) {
            _this.green3.inputEnabled = true;
            _this.green3.input.enableDrag();
            _this.green3.input.useHandCursor = true;
            _this.green3.events.onDragStop.add(_this.greenXYDrag, _this);

            _this.pink3.inputEnabled = true;
            _this.pink3.input.enableDrag();
            _this.pink3.input.useHandCursor = true;
            _this.pink3.events.onDragStop.add(_this.pinkXYDrag, _this);

            _this.green4.inputEnabled = true;
            _this.green4.input.enableDrag();
            _this.green4.input.useHandCursor = true;
            _this.green4.events.onDragStop.add(_this.greenYDrag, _this);

            _this.pink4.inputEnabled = true;
            _this.pink4.input.enableDrag();
            _this.pink4.input.useHandCursor = true;
            _this.pink4.events.onDragStop.add(_this.pinkYDrag, _this);

            _this.green5.inputEnabled = true;
            _this.green5.input.enableDrag();
            _this.green5.input.useHandCursor = true;
            _this.green5.events.onDragStop.add(_this.greenY2Drag, _this);

            _this.pink5.inputEnabled = true;
            _this.pink5.input.enableDrag();
            _this.pink5.input.useHandCursor = true;
            _this.pink5.events.onDragStop.add(_this.pinkY2Drag, _this);

            _this.green4_dup_2.inputEnabled = true;
            _this.green4_dup_2.input.useHandCursor = true;
            _this.green4_dup_2.input.enableDrag(true);
            _this.green4_dup_2.events.onDragUpdate.add(_this.green4_duplicate_2Update, _this);
            _this.green4_dup_2.events.onDragStop.add(_this.greenYDrag, _this);


            _this.pink4_dup_2.inputEnabled = true;//for duplicate object big one
            _this.pink4_dup_2.input.useHandCursor = true;
            _this.pink4_dup_2.input.enableDrag(true);
            _this.pink4_dup_2.events.onDragUpdate.add(_this.pink4_duplicate_2Update, _this);
            _this.pink4_dup_2.events.onDragStop.add(_this.pinkYDrag, _this);
        }

        _this.time.events.add(1000, function () {
            _this.storingXYValues();
            _this.decidingResultValues();

            for (let i = 0; i < _this.space1Boxes.length; i++) {
                console.log('inside change frame....')
                _this.space1Boxes.getChildAt(i).frame = 1;
            }

            for (let j = 0; j < _this.space2Boxes.length; j++) {
                console.log('inside change frame....')
                _this.space2Boxes.getChildAt(j).frame = 1;
            }
        });
    },

    rearrangingTilesConst: function () {
        _this.secondPos = [];
        _this.secondPos2 = [];
        _this.Group2 = [];

        for (let i = 0; i < _this.space2Boxes.length; i++) {
            if (_this.space2Boxes.getChildAt(i).name == '60' || _this.space2Boxes.getChildAt(i).name == '61') {
                _this.secondPos.push(i);
            }
        }

        for (let i = 0; i < _this.space2Boxes.length; i++) {
            if (_this.space2Boxes.getChildAt(i).name == '20' || _this.space2Boxes.getChildAt(i).name == '21' || _this.space2Boxes.getChildAt(i).name == '40' || _this.space2Boxes.getChildAt(i).name == '41') {
                _this.secondPos2.push(i);
            }
        }

        _this.increeX = _this.space2Boxes.getChildAt(0).x;
        for (let i = 0; i < _this.secondPos.length; i++) {
            let tween1 = _this.add.tween(_this.space2Boxes.getChildAt(_this.secondPos[i]));
            tween1.to({ x: _this.increeX, y: 180 }, 800, 'Linear', true, 0);
            _this.Group2.push(_this.space2Boxes.getChildAt(_this.secondPos[i]))
            _this.increeX += 33;
        }

        for (let i = 0; i < _this.secondPos2.length; i++) {
            let tween2 = _this.add.tween(_this.space2Boxes.getChildAt(_this.secondPos2[i]));

            if (_this.space2Boxes.getChildAt(_this.secondPos2[i]).name == '20' || _this.space2Boxes.getChildAt(_this.secondPos2[i]).name == '21') {
                tween2.to({ x: _this.increeX, y: 180 }, 800, 'Linear', true, 0);
                _this.increeX += 125;
            }
            if (_this.space2Boxes.getChildAt(_this.secondPos2[i]).name == '40' || _this.space2Boxes.getChildAt(_this.secondPos2[i]).name == '41') {
                // let tween2 = _this.add.tween(_this.space2Boxes.getChildAt(_this.secondPos2[i]));
                tween2.to({ x: _this.increeX, y: 181.5 }, 800, 'Linear', true, 0);
                // _this.Group2.push(_this.space2Boxes.getChildAt(_this.secondPos2[i]));
                _this.increeX += 85;
            }
            _this.Group2.push(_this.space2Boxes.getChildAt(_this.secondPos2[i]));
        }

        _this.Group2.forEach(function (obj) {
            _this.space2Boxes.addChild(obj);
        });




        // for (let i = 0; i < _this.space2Boxes.length; i++) {
        //     if (_this.space2Boxes.getChildAt(i).name == '20' || _this.space2Boxes.getChildAt(i).name == '21' || _this.space2Boxes.getChildAt(i).name == '40' || _this.space2Boxes.getChildAt(i).name == '41') {
        //         _this.firstPos = i;
        //         let tween1 = _this.add.tween(_this.space2Boxes.getChildAt(_this.firstPos));
        //         tween1.to({ x: _this.space2Boxes.getChildAt(0).x, y: 170 }, 800, 'Linear', true, 0);
        //         // _this.Group1.push(_this.space2Boxes.getChildAt(_this.firstPos));
        //     }
        // }

    },
    rearrangingTilesX: function () {
        _this.secondPos = [];
        _this.secondPos2 = [];
        _this.Group2 = [];

        for (let i = 0; i < _this.space2Boxes.length; i++) {
            if (_this.space2Boxes.getChildAt(i).name == '20' || _this.space2Boxes.getChildAt(i).name == '21') {
                _this.secondPos.push(i);
            }
        }

        for (let i = 0; i < _this.space2Boxes.length; i++) {
            if (_this.space2Boxes.getChildAt(i).name == '60' || _this.space2Boxes.getChildAt(i).name == '61' || _this.space2Boxes.getChildAt(i).name == '40' || _this.space2Boxes.getChildAt(i).name == '41') {
                _this.secondPos2.push(i);
            }
        }

        _this.increeX = _this.space2Boxes.getChildAt(0).x;
        for (let i = 0; i < _this.secondPos.length; i++) {
            let tween1 = _this.add.tween(_this.space2Boxes.getChildAt(_this.secondPos[i]));
            tween1.to({ x: _this.increeX, y: 180 }, 800, 'Linear', true, 0);
            _this.Group2.push(_this.space2Boxes.getChildAt(_this.secondPos[i]))
            _this.increeX += 125;//33
        }

        for (let i = 0; i < _this.secondPos2.length; i++) {
            let tween2 = _this.add.tween(_this.space2Boxes.getChildAt(_this.secondPos2[i]));

            if (_this.space2Boxes.getChildAt(_this.secondPos2[i]).name == '60' || _this.space2Boxes.getChildAt(_this.secondPos2[i]).name == '61') {
                tween2.to({ x: _this.increeX, y: 180 }, 800, 'Linear', true, 0);
                _this.increeX += 33;
            }
            if (_this.space2Boxes.getChildAt(_this.secondPos2[i]).name == '40' || _this.space2Boxes.getChildAt(_this.secondPos2[i]).name == '41') {
                // let tween2 = _this.add.tween(_this.space2Boxes.getChildAt(_this.secondPos2[i]));
                tween2.to({ x: _this.increeX, y: 181.5 }, 800, 'Linear', true, 0);
                // _this.Group2.push(_this.space2Boxes.getChildAt(_this.secondPos2[i]));
                _this.increeX += 85;
            }
            _this.Group2.push(_this.space2Boxes.getChildAt(_this.secondPos2[i]));
        }

        _this.Group2.forEach(function (obj) {
            _this.space2Boxes.addChild(obj);
        });

    },
    rearrangingTilesY: function () {
        _this.secondPos = [];
        _this.secondPos2 = [];
        _this.Group2 = [];

        for (let i = 0; i < _this.space2Boxes.length; i++) {
            if (_this.space2Boxes.getChildAt(i).name == '40' || _this.space2Boxes.getChildAt(i).name == '41') {
                _this.secondPos.push(i);
            }
        }

        for (let i = 0; i < _this.space2Boxes.length; i++) {
            if (_this.space2Boxes.getChildAt(i).name == '60' || _this.space2Boxes.getChildAt(i).name == '61' || _this.space2Boxes.getChildAt(i).name == '20' || _this.space2Boxes.getChildAt(i).name == '21') {
                _this.secondPos2.push(i);
            }
        }

        _this.increeX = _this.space2Boxes.getChildAt(0).x;
        for (let i = 0; i < _this.secondPos.length; i++) {
            let tween1 = _this.add.tween(_this.space2Boxes.getChildAt(_this.secondPos[i]));
            tween1.to({ x: _this.increeX, y: 180 }, 800, 'Linear', true, 0);
            _this.Group2.push(_this.space2Boxes.getChildAt(_this.secondPos[i]))
            _this.increeX += 85;//125
        }

        for (let i = 0; i < _this.secondPos2.length; i++) {
            let tween2 = _this.add.tween(_this.space2Boxes.getChildAt(_this.secondPos2[i]));

            if (_this.space2Boxes.getChildAt(_this.secondPos2[i]).name == '60' || _this.space2Boxes.getChildAt(_this.secondPos2[i]).name == '61') {
                tween2.to({ x: _this.increeX, y: 180 }, 800, 'Linear', true, 0);
                _this.increeX += 33;
            }
            if (_this.space2Boxes.getChildAt(_this.secondPos2[i]).name == '20' || _this.space2Boxes.getChildAt(_this.secondPos2[i]).name == '21') {
                // let tween2 = _this.add.tween(_this.space2Boxes.getChildAt(_this.secondPos2[i]));
                tween2.to({ x: _this.increeX, y: 180 }, 800, 'Linear', true, 0);
                // _this.Group2.push(_this.space2Boxes.getChildAt(_this.secondPos2[i]));
                _this.increeX += 125;
            }
            _this.Group2.push(_this.space2Boxes.getChildAt(_this.secondPos2[i]));
        }

        _this.Group2.forEach(function (obj) {
            _this.space2Boxes.addChild(obj);
        });
    },

    green2_duplicate_2Update: function () {
        _this.world.bringToTop(_this.green2_dup_2);
        _this.green2_dup_2.scale.setTo(1, 1);
        _this.green2_dup_2.alpha = 1;
    },
    pink2_duplicate_2Update: function () {
        _this.world.bringToTop(_this.pink2_dup_2);
        _this.pink2_dup_2.scale.setTo(1, 1);
        _this.pink2_dup_2.alpha = 1;
    },
    green6_duplicate_2Update: function () {
        _this.world.bringToTop(_this.green6_dup_2);
        _this.green6_dup_2.scale.setTo(1, 1);
        _this.green6_dup_2.alpha = 1;
    },
    pink6_duplicate_2Update: function () {
        _this.world.bringToTop(_this.pink6_dup_2);
        _this.pink6_dup_2.scale.setTo(1, 1);
        _this.pink6_dup_2.alpha = 1;
    },
    green4_duplicate_2Update: function () {
        _this.world.bringToTop(_this.green4_dup_2);
        _this.green4_dup_2.scale.setTo(1, 1);
        _this.green4_dup_2.alpha = 1;
    },
    pink4_duplicate_2Update: function () {
        _this.world.bringToTop(_this.pink4_dup_2);
        _this.pink4_dup_2.scale.setTo(1, 1);
        _this.pink4_dup_2.alpha = 1;
    },

    //minus x2 dragging part
    greenX2Drag: function () {
        if (_this.destroyedPositions.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions[0];

            // Set the position of the p1 object to the destroyed position
            _this.green1.position.x = pos.x;
            _this.green1.position.y = pos.y;

            _this.green1.destroy();
            _this.green1 = _this.add.sprite(pos.x, pos.y, 'x2');
            _this.green1.frame = 2;
            _this.green1.name = 'G1';

            _this.space3Boxes.addChild(_this.green1);

            // Remove the destroyed position from the array
            _this.destroyedPositions.shift();

            console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
        }
        else if (_this.pairedValues_4.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_4[0];
            _this.green1.position.x = pos.x;
            _this.green1.position.y = pos.y;

            _this.green1.destroy();
            _this.green1 = _this.add.image(pos.x, pos.y, 'x2');
            _this.green1.frame = 2;
            _this.green1.name = 'G1';

            _this.space3Boxes.addChild(_this.green1);

            // Remove the dragged position from the array
            _this.pairedValues_4.shift();

            // _this.searchPos = _this.searchEmptyPos1();
        }
        else {
            _this.green1.destroy();
            _this.wrongSound.play();
        }

        if (_this.variables.length == 1) {
            _this.green1 = _this.add.image(45, 280, 'green1');
            _this.letterA.bringToTop();
            _this.gx2tile_x = 45;
            _this.gx2tile_y = 280;
        }
        else {
            _this.lett1.destroy();
            _this.green1 = _this.add.image(13, 10, 'green1');
            _this.sideGray1.addChild(_this.green1);
            _this.lett1 = _this.add.text(17, 24, ' -' + 'x' + _this.power);//a
            _this.lett1.fill = '#FFFFFF';
            _this.sideGray1.addChild(_this.lett1);
        }

        _this.green1.inputEnabled = true;
        _this.green1.input.enableDrag();
        _this.green1.input.useHandCursor = true;
        _this.green1.events.onDragStop.add(_this.greenX2Drag, _this);

    },
    //green draging xy part
    greenXYDrag: function () {

        if (_this.destroyedPositions_3_hr.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_3_hr[0];

            // Set the position of the p1 object to the destroyed position
            _this.green3.position.x = pos.x;
            _this.green3.position.y = pos.y;

            _this.green3.destroy();
            _this.green3 = _this.add.sprite(pos.x, pos.y, 'xy');//horizontal
            _this.green3.frame = 2;
            _this.green3.name = 'G3';

            _this.space3Boxes.addChild(_this.green3);

            // Remove the destroyed position from the array
            _this.destroyedPositions_3_hr.shift();

            console.log(_this.destroyedPositions_3_hr, '_this.destroyedPositions_3_hr,shift()')
        }
        else if (_this.destroyedPositions_3_vr.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_3_vr[0];

            // Set the position of the p1 object to the destroyed position
            _this.green3.position.x = pos.x;
            _this.green3.position.y = pos.y;

            _this.green3.destroy();
            _this.green3 = _this.add.sprite(pos.x, pos.y, 'all_3');//vertical
            _this.green3.frame = 2;
            _this.green3.name = 'G3';

            _this.space3Boxes.addChild(_this.green3);

            // Remove the destroyed position from the array
            _this.destroyedPositions_3_vr.shift();

            console.log(_this.destroyedPositions_3_vr, '_this.destroyedPositions_3_vr,shift()')
        }
        else if (_this.pairedValues_8.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_8[0];
            _this.green3.position.x = pos.x;
            _this.green3.position.y = pos.y;

            _this.green3.destroy();
            _this.green3 = _this.add.image(pos.x, pos.y, 'xy');//horizontal
            _this.green3.frame = 2;
            _this.green3.name = 'G3';

            _this.space3Boxes.addChild(_this.green3);

            // Remove the dragged position from the array
            _this.pairedValues_8.shift();
        }
        else if (_this.pairedValues_9.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_9[0];
            _this.green3.position.x = pos.x;
            _this.green3.position.y = pos.y;

            _this.green3.destroy();
            _this.green3 = _this.add.image(pos.x, pos.y, 'all_3');//vertical
            _this.green3.frame = 2;
            _this.green3.name = 'G3';

            _this.space3Boxes.addChild(_this.green3);

            // Remove the dragged position from the array
            _this.pairedValues_9.shift();
        }
        else {
            _this.green3.destroy();
            _this.wrongSound.play();
        }

        _this.lett3.destroy();
        _this.green3 = _this.add.sprite(13, 140, 'green3');
        _this.sideGray1.addChild(_this.green3);
        _this.lett3 = _this.add.text(15, 144, ' -' + 'x' + 'y');//ab
        _this.lett3.fill = '#FFFFFF';
        _this.sideGray1.addChild(_this.lett3);

        _this.green3.inputEnabled = true;
        _this.green3.input.enableDrag();
        _this.green3.input.useHandCursor = true;
        _this.green3.events.onDragStop.add(_this.greenXYDrag, _this);
    },
    //green x dragging
    greenXDrag: function () {

        if (_this.destroyedPositions_2_hr.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_2_hr[0];

            // Set the position of the p1 object to the destroyed position
            _this.green2.position.x = pos.x;
            _this.green2.position.y = pos.y;

            _this.green2.destroy();
            _this.green2 = _this.add.sprite(pos.x, pos.y, 'greenBig2');
            _this.green2.name = 'G2';

            _this.space3Boxes.addChild(_this.green2);

            // Remove the destroyed position from the array
            _this.destroyedPositions_2_hr.shift();

            console.log(_this.destroyedPositions_2_hr, '_this.destroyedPositions_2_hr,shift()')
        }
        else if (_this.destroyedPositions_2_vr.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_2_vr[0];

            // Set the position of the p1 object to the destroyed position
            _this.green2.position.x = pos.x;
            _this.green2.position.y = pos.y;

            _this.green2.destroy();
            _this.green2 = _this.add.sprite(pos.x, pos.y, 'greenBig1');
            _this.green2.name = 'G2';

            _this.space3Boxes.addChild(_this.green2);

            // Remove the destroyed position from the array
            _this.destroyedPositions_2_vr.shift();

            console.log(_this.destroyedPositions_2_vr, '_this.destroyedPositions_2_vr,shift()')
        }
        else if (_this.pairedValues_2.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_2[0];
            _this.green2.position.x = pos.x;
            _this.green2.position.y = pos.y;

            _this.green2.destroy();
            _this.green2 = _this.add.image(pos.x, pos.y, 'greenBig2');//horizontal
            _this.green2.name = 'G2';

            _this.space3Boxes.addChild(_this.green2);

            // Remove the dragged position from the array
            _this.pairedValues_2.shift();
        }
        else if (_this.pairedValues_3.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_3[0];
            _this.green2.position.x = pos.x;
            _this.green2.position.y = pos.y;

            _this.green2.destroy();
            _this.green2 = _this.add.image(pos.x, pos.y, 'greenBig1');//vertical
            _this.green2.name = 'G2';

            _this.space3Boxes.addChild(_this.green2);

            // Remove the dragged position from the array
            _this.pairedValues_3.shift();
        }
        else {
            _this.green2.destroy();
            _this.wrongSound.play();
        }

        if (_this.variables.length == 1) {
            _this.green2_dup_2.destroy();
            _this.green2 = _this.add.image(45, 385, 'green2');

            _this.green2_dup_2 = _this.add.image(30, 360, 'green2');
            _this.green2_dup_2.scale.setTo(1.5, 2.8);
            _this.green2_dup_2.alpha = 0;

        }
        else {
            _this.green2_dup_2.destroy();
            _this.green2 = _this.add.sprite(13, 105, 'green2');
            _this.sideGray1.addChild(_this.green2);

            _this.green2_dup_2 = _this.add.image(0, 80, 'green2');
            _this.green2_dup_2.scale.setTo(1.4, 2.8);
            _this.green2_dup_2.alpha = 0;
            _this.sideGray1.addChild(_this.green2_dup_2);
        }

        _this.green2.inputEnabled = true;
        _this.green2.input.enableDrag();
        _this.green2.input.useHandCursor = true;
        _this.green2.events.onDragStop.add(_this.greenXDrag, _this);

        _this.green2_dup_2.inputEnabled = true;
        _this.green2_dup_2.input.useHandCursor = true;
        _this.green2_dup_2.input.enableDrag(true);
        _this.green2_dup_2.events.onDragUpdate.add(_this.green2_duplicate_2Update, _this);
        _this.green2_dup_2.events.onDragStop.add(_this.greenXDrag, _this);
    },
    //green y drag part
    greenYDrag: function () {

        if (_this.destroyedPositions_4_hr.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_4_hr[0];

            // Set the position of the p1 object to the destroyed position
            _this.green4.position.x = pos.x;
            _this.green4.position.y = pos.y;

            _this.green4.destroy();
            _this.green4 = _this.add.sprite(pos.x, pos.y, 'green2.3');//horizontal
            _this.green4.frame = 2;
            _this.green4.name = 'G4';

            _this.space3Boxes.addChild(_this.green4);

            // Remove the destroyed position from the array
            _this.destroyedPositions_4_hr.shift();

            console.log(_this.destroyedPositions_4_hr, '_this.destroyedPositions_4_hr,shift()')
        }
        else if (_this.destroyedPositions_4_vr.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_4_vr[0];

            // Set the position of the p1 object to the destroyed position
            _this.green4.position.x = pos.x;
            _this.green4.position.y = pos.y;

            _this.green4.destroy();
            _this.green4 = _this.add.sprite(pos.x, pos.y, 'green2.4');//vertical
            _this.green4.frame = 2;
            _this.green4.name = 'G4';

            _this.space3Boxes.addChild(_this.green4);

            // Remove the destroyed position from the array
            _this.destroyedPositions_4_vr.shift();

            console.log(_this.destroyedPositions_4_vr, '_this.destroyedPositions_4_vr,shift()')
        }
        else if (_this.pairedValues_5.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_5[0];
            _this.green4.position.x = pos.x;
            _this.green4.position.y = pos.y;

            _this.green4.destroy();
            _this.green4 = _this.add.image(pos.x, pos.y, 'green2.3');//horizontal
            _this.green4.frame = 2;
            _this.green4.name = 'G4';

            _this.space3Boxes.addChild(_this.green4);

            // Remove the dragged position from the array
            _this.pairedValues_5.shift();
        }
        else if (_this.pairedValues_6.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_6[0];
            _this.green4.position.x = pos.x;
            _this.green4.position.y = pos.y;

            _this.green4.destroy();
            _this.green4 = _this.add.image(pos.x, pos.y, 'green2.4');//vertical
            _this.green4.frame = 2;
            _this.green4.name = 'G4';

            _this.space3Boxes.addChild(_this.green4);

            // Remove the dragged position from the array
            _this.pairedValues_6.shift();
        }
        else {
            _this.green4.destroy();
            _this.wrongSound.play();
        }
        _this.green4_dup_2.destroy();

        _this.green4 = _this.add.sprite(20, 215, 'green4');
        _this.sideGray1.addChild(_this.green4);

        _this.green4_dup_2 = _this.add.image(0, 190, 'green4');
        _this.green4_dup_2.scale.setTo(2, 2.8);
        _this.green4_dup_2.alpha = 0;
        _this.sideGray1.addChild(_this.green4_dup_2);

        _this.green4.inputEnabled = true;
        _this.green4.input.enableDrag();
        _this.green4.input.useHandCursor = true;
        _this.green4.events.onDragStop.add(_this.greenYDrag, _this);

        _this.green4_dup_2.inputEnabled = true;
        _this.green4_dup_2.input.useHandCursor = true;
        _this.green4_dup_2.input.enableDrag(true);
        _this.green4_dup_2.events.onDragUpdate.add(_this.green4_duplicate_2Update, _this);
        _this.green4_dup_2.events.onDragStop.add(_this.greenYDrag, _this);
    },
    //minus y2 dragging part
    greenY2Drag: function () {

        if (_this.destroyedPositions_5.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_5[0];

            // Set the position of the p1 object to the destroyed position
            _this.green5.position.x = pos.x;
            _this.green5.position.y = pos.y;

            _this.green5.destroy();
            _this.green5 = _this.add.sprite(pos.x, pos.y, 'y2');
            _this.green5.frame = 2;
            _this.green5.name = 'G5';

            _this.space3Boxes.addChild(_this.green5);

            // Remove the destroyed position from the array
            _this.destroyedPositions_5.shift();

            console.log(_this.destroyedPositions_5, '_this.destroyedPositions_5,shift()')
        }
        else if (_this.pairedValues_7.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_7[0];
            _this.green5.position.x = pos.x;
            _this.green5.position.y = pos.y;

            _this.green5.destroy();
            _this.green5 = _this.add.image(pos.x, pos.y, 'y2');
            _this.green5.frame = 2;
            _this.green5.name = 'G5';

            _this.space3Boxes.addChild(_this.green5);

            // Remove the dragged position from the array
            _this.pairedValues_7.shift();
        }
        else {
            _this.green5.destroy();
            _this.wrongSound.play();
        }

        _this.green5 = _this.add.sprite(20, 280, 'green5');
        _this.sideGray1.addChild(_this.green5);

        _this.green5.inputEnabled = true;
        _this.green5.input.enableDrag();
        _this.green5.input.useHandCursor = true;
        _this.green5.events.onDragStop.add(_this.greenY2Drag, _this);

    },
    //green constant drag -1
    green1Drag: function () {

        if (_this.destroyedPositions_6.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_6[0];

            // Set the position of the p1 object to the destroyed position
            _this.green6.position.x = pos.x;
            _this.green6.position.y = pos.y;

            _this.green6.destroy();
            _this.green6 = _this.add.sprite(pos.x, pos.y, 'greenBig3');
            _this.green6.name = 'G6';

            _this.space3Boxes.addChild(_this.green6);

            // Remove the destroyed position from the array
            _this.destroyedPositions_6.shift();

            console.log(_this.destroyedPositions_6, '_this.destroyedPositions_6,shift()')
        }
        else if (_this.pairedValues.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues[0];
            _this.green6.position.x = pos.x;
            _this.green6.position.y = pos.y;

            _this.green6.destroy();
            _this.green6 = _this.add.sprite(pos.x, pos.y, 'greenBig3');
            _this.green6.name = 'G6';

            _this.space3Boxes.addChild(_this.green6);

            // Remove the dragged position from the array
            _this.pairedValues.shift();
        }
        else {
            _this.green6.destroy();
            _this.wrongSound.play();
        }

        if (_this.variables.length == 1) {
            _this.green6_dup_2.destroy();
            _this.green6 = _this.add.image(65, 450, 'green6');

            _this.green6_dup_2 = _this.add.image(30, 415, 'green6');
            _this.green6_dup_2.scale.setTo(5.5, 3.8);
            _this.green6_dup_2.alpha = 0;
        }
        else {
            _this.green6_dup_2.destroy();
            _this.green6 = _this.add.sprite(32, 360, 'green6');
            _this.sideGray1.addChild(_this.green6);

            _this.green6_dup_2 = _this.add.image(0, 330, 'green6');
            _this.green6_dup_2.scale.setTo(5.4, 3);
            _this.green6_dup_2.alpha = 0;
            _this.sideGray1.addChild(_this.green6_dup_2);
        }

        _this.green6.inputEnabled = true;
        _this.green6.input.enableDrag();
        _this.green6.input.useHandCursor = true;
        _this.green6.events.onDragStop.add(_this.green1Drag, _this);

        _this.green6_dup_2.inputEnabled = true;//for duplicate object big one
        _this.green6_dup_2.input.useHandCursor = true;
        _this.green6_dup_2.input.enableDrag(true);
        _this.green6_dup_2.events.onDragUpdate.add(_this.green6_duplicate_2Update, _this);
        _this.green6_dup_2.events.onDragStop.add(_this.green1Drag, _this);
    },
    //positive x2 dragging part
    pinkX2Drag: function (target) {
        if (_this.destroyedPositions.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink1.position.x = pos.x;
            _this.pink1.position.y = pos.y;

            _this.pink1.destroy();
            _this.pink1 = _this.add.sprite(pos.x, pos.y, 'x2');
            _this.pink1.frame = 0;
            _this.pink1.name = 'P1';

            _this.space3Boxes.addChild(_this.pink1);

            // Remove the destroyed position from the array
            _this.destroyedPositions.shift();

            console.log(_this.destroyedPositions, '_this.destroyedPositions,shift()')
        }
        else if (_this.pairedValues_4.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_4[0];
            _this.pink1.position.x = pos.x;
            _this.pink1.position.y = pos.y;

            _this.pink1.destroy();
            _this.pink1 = _this.add.image(pos.x, pos.y, 'x2');
            _this.pink1.frame = 0;
            _this.pink1.name = 'P1';

            _this.space3Boxes.addChild(_this.pink1);

            // Remove the dragged position from the array
            _this.pairedValues_4.shift();
        }
        else {
            _this.pink1.destroy();
            _this.wrongSound.play();
        }

        if (_this.variables.length == 1) {
            _this.pink1 = _this.add.image(155, 280, 'pink1');
            _this.letterB.bringToTop();
            // _this.gx2tile_x = 45;
            // _this.gx2tile_y = 280;
        }
        else {
            _this.lett11.destroy();
            _this.pink1 = _this.add.sprite(13, 10, 'pink1');
            _this.sideGray2.addChild(_this.pink1);
            _this.lett11 = _this.add.text(14, 24, ' +' + 'x' + _this.power);//a
            _this.lett11.fill = '#FFFFFF';
            _this.sideGray2.addChild(_this.lett11)
        }

        _this.pink1.inputEnabled = true;
        _this.pink1.input.enableDrag();
        _this.pink1.input.useHandCursor = true;
        _this.pink1.events.onDragStop.add(_this.pinkX2Drag, _this);

    },
    //pink draging xy part
    pinkXYDrag: function (target) {
        if (_this.destroyedPositions_3_hr.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_3_hr[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink3.position.x = pos.x;
            _this.pink3.position.y = pos.y;

            _this.pink3.destroy();
            _this.pink3 = _this.add.sprite(pos.x, pos.y, 'xy');//horizontal
            _this.pink3.frame = 0;
            _this.pink3.name = 'P3';

            _this.space3Boxes.addChild(_this.pink3);

            // Remove the destroyed position from the array
            _this.destroyedPositions_3_hr.shift();

            console.log(_this.destroyedPositions_3_hr, '_this.destroyedPositions_3_hr,shift()')
        }
        else if (_this.destroyedPositions_3_vr.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_3_vr[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink3.position.x = pos.x;
            _this.pink3.position.y = pos.y;

            _this.pink3.destroy();
            _this.pink3 = _this.add.sprite(pos.x, pos.y, 'all_3');//vertical
            _this.pink3.frame = 0;
            _this.pink3.name = 'P3';

            _this.space3Boxes.addChild(_this.pink3);

            // Remove the destroyed position from the array
            _this.destroyedPositions_3_vr.shift();

            console.log(_this.destroyedPositions_3_vr, '_this.destroyedPositions_3_vr,shift()')
        }
        else if (_this.pairedValues_8.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_8[0];
            _this.pink3.position.x = pos.x;
            _this.pink3.position.y = pos.y;

            _this.pink3.destroy();
            _this.pink3 = _this.add.image(pos.x, pos.y, 'xy');//horizontal
            _this.pink3.frame = 0;
            _this.pink3.name = 'P3';

            _this.space3Boxes.addChild(_this.pink3);

            // Remove the dragged position from the array
            _this.pairedValues_8.shift();
        }
        else if (_this.pairedValues_9.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_9[0];
            _this.pink3.position.x = pos.x;
            _this.pink3.position.y = pos.y;

            _this.pink3.destroy();
            _this.pink3 = _this.add.image(pos.x, pos.y, 'all_3');//vertical
            _this.pink3.frame = 0;
            _this.pink3.name = 'P3';

            _this.space3Boxes.addChild(_this.pink3);

            // Remove the dragged position from the array
            _this.pairedValues_9.shift();
        }
        else {
            _this.pink3.destroy();
            _this.wrongSound.play();
        }

        _this.lett33.destroy();
        _this.pink3 = _this.add.sprite(13, 140, 'pink3');
        _this.sideGray2.addChild(_this.pink3);
        _this.lett33 = _this.add.text(13, 144, ' +' + 'x' + 'y');//ab
        _this.lett33.fill = '#FFFFFF';
        _this.sideGray2.addChild(_this.lett33);

        _this.pink3.inputEnabled = true;
        _this.pink3.input.enableDrag();
        _this.pink3.input.useHandCursor = true;
        _this.pink3.events.onDragStop.add(_this.pinkXYDrag, _this);
    },
    //pink x dragging
    pinkXDrag: function () {
        if (_this.destroyedPositions_2_hr.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_2_hr[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink2.position.x = pos.x;
            _this.pink2.position.y = pos.y;

            _this.pink2.destroy();
            _this.pink2 = _this.add.sprite(pos.x, pos.y, 'pinkBig2');
            _this.pink2.name = 'P2';

            _this.space3Boxes.addChild(_this.pink2);

            // Remove the destroyed position from the array
            _this.destroyedPositions_2_hr.shift();

            console.log(_this.destroyedPositions_2_hr, '_this.destroyedPositions_2_hr,shift()')
        }
        else if (_this.destroyedPositions_2_vr.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_2_vr[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink2.position.x = pos.x;
            _this.pink2.position.y = pos.y;

            _this.pink2.destroy();
            _this.pink2 = _this.add.sprite(pos.x, pos.y, 'pinkBig1');
            _this.pink2.name = 'P2';

            _this.space3Boxes.addChild(_this.pink2);

            // Remove the destroyed position from the array
            _this.destroyedPositions_2_vr.shift();

            console.log(_this.destroyedPositions_2_vr, '_this.destroyedPositions_2_vr,shift()')
        }
        else if (_this.pairedValues_2.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_2[0];
            _this.pink2.position.x = pos.x;
            _this.pink2.position.y = pos.y;

            _this.pink2.destroy();
            _this.pink2 = _this.add.image(pos.x, pos.y, 'pinkBig2');//horizontal
            _this.pink2.name = 'P2';

            _this.space3Boxes.addChild(_this.pink2);

            // Remove the dragged position from the array
            _this.pairedValues_2.shift();
        }
        else if (_this.pairedValues_3.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_3[0];
            _this.pink2.position.x = pos.x;
            _this.pink2.position.y = pos.y;

            _this.pink2.destroy();
            _this.pink2 = _this.add.image(pos.x, pos.y, 'pinkBig1');//vertical
            _this.pink2.name = 'P2';

            _this.space3Boxes.addChild(_this.pink2);

            // Remove the dragged position from the array
            _this.pairedValues_3.shift();
        }
        else {
            _this.pink2.destroy();
            _this.wrongSound.play();
        }

        if (_this.variables.length == 1) {
            _this.pink2_dup_2.destroy();
            _this.pink2 = _this.add.image(155, 385, 'pink2');

            _this.pink2_dup_2 = _this.add.image(140, 360, 'pink2');
            _this.pink2_dup_2.scale.setTo(1.5, 2.8);
            _this.pink2_dup_2.alpha = 0;
        }
        else {
            _this.pink2_dup_2.destroy();
            _this.pink2 = _this.add.image(13, 105, 'pink2');
            _this.sideGray2.addChild(_this.pink2);

            _this.pink2_dup_2 = _this.add.image(0, 80, 'pink2');
            _this.pink2_dup_2.scale.setTo(1.4, 2.8);
            _this.pink2_dup_2.alpha = 0;
            _this.sideGray2.addChild(_this.pink2_dup_2);
        }
        _this.pink2_dup_2.inputEnabled = true;//for duplicate object big one
        _this.pink2_dup_2.input.useHandCursor = true;
        _this.pink2_dup_2.input.enableDrag(true);
        _this.pink2_dup_2.events.onDragUpdate.add(_this.pink2_duplicate_2Update, _this);
        _this.pink2_dup_2.events.onDragStop.add(_this.pinkXDrag, _this);

        _this.pink2.inputEnabled = true;
        _this.pink2.input.enableDrag();
        _this.pink2.input.useHandCursor = true;
        _this.pink2.events.onDragStop.add(_this.pinkXDrag, _this);


    },
    //pink y drag part
    pinkYDrag: function () {
        if (_this.destroyedPositions_4_hr.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_4_hr[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink4.position.x = pos.x;
            _this.pink4.position.y = pos.y;

            _this.pink4.destroy();
            _this.pink4 = _this.add.sprite(pos.x, pos.y, 'pink2.3');
            _this.pink4.frame = 2;
            _this.pink4.name = 'P4';

            _this.space3Boxes.addChild(_this.pink4);

            // Remove the destroyed position from the array
            _this.destroyedPositions_4_hr.shift();

            console.log(_this.destroyedPositions_4_hr, '_this.destroyedPositions_4_hr,shift()')
        }
        else if (_this.destroyedPositions_4_vr.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_4_vr[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink4.position.x = pos.x;
            _this.pink4.position.y = pos.y;

            _this.pink4.destroy();
            _this.pink4 = _this.add.sprite(pos.x, pos.y, 'pink2.4');
            _this.pink4.frame = 2;
            _this.pink4.name = 'P4';

            _this.space3Boxes.addChild(_this.pink4);

            // Remove the destroyed position from the array
            _this.destroyedPositions_4_vr.shift();

            console.log(_this.destroyedPositions_4_vr, '_this.destroyedPositions_4_vr,shift()')
        }
        else if (_this.pairedValues_5.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_5[0];
            _this.pink4.position.x = pos.x;
            _this.pink4.position.y = pos.y;

            _this.pink4.destroy();
            _this.pink4 = _this.add.image(pos.x, pos.y, 'pink2.3');//horizontal
            _this.pink4.frame = 2;
            _this.pink4.name = 'P4';

            _this.space3Boxes.addChild(_this.pink4);

            // Remove the dragged position from the array
            _this.pairedValues_5.shift();
        }
        else if (_this.pairedValues_6.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_6[0];
            _this.pink4.position.x = pos.x;
            _this.pink4.position.y = pos.y;

            _this.pink4.destroy();
            _this.pink4 = _this.add.image(pos.x, pos.y, 'pink2.4');//vertical
            _this.pink4.frame = 2;
            _this.pink4.name = 'P4';

            _this.space3Boxes.addChild(_this.pink4);

            // Remove the dragged position from the array
            _this.pairedValues_6.shift();
        }
        else {
            _this.pink4.destroy();
            _this.wrongSound.play();
        }
        _this.pink4_dup_2.destroy();
        _this.pink4 = _this.add.sprite(20, 215, 'pink4');
        _this.sideGray2.addChild(_this.pink4);

        _this.pink4_dup_2 = _this.add.image(0, 190, 'pink4');
        _this.pink4_dup_2.scale.setTo(2, 2.8);
        _this.pink4_dup_2.alpha = 0;
        _this.sideGray2.addChild(_this.pink4_dup_2);

        _this.pink4.inputEnabled = true;
        _this.pink4.input.enableDrag();
        _this.pink4.input.useHandCursor = true;
        _this.pink4.events.onDragStop.add(_this.pinkYDrag, _this);

        _this.pink4_dup_2.inputEnabled = true;//for duplicate object big one
        _this.pink4_dup_2.input.useHandCursor = true;
        _this.pink4_dup_2.input.enableDrag(true);
        _this.pink4_dup_2.events.onDragUpdate.add(_this.pink4_duplicate_2Update, _this);
        _this.pink4_dup_2.events.onDragStop.add(_this.pinkYDrag, _this);
    },
    //pink y2 dragging part
    pinkY2Drag: function () {
        if (_this.destroyedPositions_5.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_5[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink5.position.x = pos.x;
            _this.pink5.position.y = pos.y;

            _this.pink5.destroy();
            _this.pink5 = _this.add.sprite(pos.x, pos.y, 'y2');
            _this.pink5.frame = 0;
            _this.pink5.name = 'P5';

            _this.space3Boxes.addChild(_this.pink5);

            // Remove the destroyed position from the array
            _this.destroyedPositions_5.shift();

            console.log(_this.destroyedPositions_5, '_this.destroyedPositions_5,shift()')
        }
        else if (_this.pairedValues_7.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues_7[0];
            _this.pink5.position.x = pos.x;
            _this.pink5.position.y = pos.y;

            _this.pink5.destroy();
            _this.pink5 = _this.add.image(pos.x, pos.y, 'y2');
            _this.pink5.frame = 0;
            _this.pink5.name = 'P5';

            _this.space3Boxes.addChild(_this.pink5);

            // Remove the dragged position from the array
            _this.pairedValues_7.shift();
        }
        else {
            _this.pink5.destroy();
            _this.wrongSound.play();
        }

        _this.pink5 = _this.add.sprite(20, 280, 'pink5');
        _this.sideGray2.addChild(_this.pink5);

        _this.pink5.inputEnabled = true;
        _this.pink5.input.enableDrag();
        _this.pink5.input.useHandCursor = true;
        _this.pink5.events.onDragStop.add(_this.pinkY2Drag, _this);

    },
    //pink constant drag -1
    pink1Drag: function () {
        if (_this.destroyedPositions_6.length > 0) {
            _this.snapSound.play();
            // Get the first destroyed position
            var pos = _this.destroyedPositions_6[0];

            // Set the position of the p1 object to the destroyed position
            _this.pink6.position.x = pos.x;
            _this.pink6.position.y = pos.y;

            _this.pink6.destroy();
            _this.pink6 = _this.add.sprite(pos.x, pos.y, 'pinkBig3');
            _this.pink6.name = 'P6';

            _this.space3Boxes.addChild(_this.pink6);

            // Remove the destroyed position from the array
            _this.destroyedPositions_6.shift();

            console.log(_this.destroyedPositions_6, '_this.destroyedPositions_6,shift()')
        }
        else if (_this.pairedValues.length > 0) {
            _this.snapSound.play();
            var pos = _this.pairedValues[0];
            _this.pink6.position.x = pos.x;
            _this.pink6.position.y = pos.y;

            _this.pink6.destroy();
            _this.pink6 = _this.add.sprite(pos.x, pos.y, 'pinkBig3');
            _this.pink6.name = 'P6';

            _this.space3Boxes.addChild(_this.pink6);

            // Remove the dragged position from the array
            _this.pairedValues.shift();
        }
        else {
            _this.pink6.destroy();
            _this.wrongSound.play();
        }

        if (_this.variables.length == 1) {
            _this.pink6_dup_2.destroy();
            _this.pink6 = _this.add.image(175, 450, 'pink6');

            _this.pink6_dup_2 = _this.add.image(140, 415, 'pink6');
            _this.pink6_dup_2.scale.setTo(5.5, 3.8);
            _this.pink6_dup_2.alpha = 0;
        }
        else {
            _this.pink6_dup_2.destroy();
            _this.pink6 = _this.add.sprite(32, 360, 'pink6');
            _this.sideGray2.addChild(_this.pink6);

            _this.pink6_dup_2 = _this.add.image(0, 330, 'pink6');
            _this.pink6_dup_2.scale.setTo(5.4, 3);
            _this.pink6_dup_2.alpha = 0;
            _this.sideGray2.addChild(_this.pink6_dup_2);
        }

        _this.pink6.inputEnabled = true;
        _this.pink6.input.enableDrag();
        _this.pink6.input.useHandCursor = true;
        _this.pink6.events.onDragStop.add(_this.pink1Drag, _this);

        _this.pink6_dup_2.inputEnabled = true;//for duplicate object big one
        _this.pink6_dup_2.input.useHandCursor = true;
        _this.pink6_dup_2.input.enableDrag(true);
        _this.pink6_dup_2.events.onDragUpdate.add(_this.pink6_duplicate_2Update, _this);
        _this.pink6_dup_2.events.onDragStop.add(_this.pink1Drag, _this);
    },

    multiplyEquation: function () {
        console.log(_this.result_1, "_this.result_1");
        console.log(_this.result_2, "_this.result_2");

        if (_this.decideMonoEq == 0) {
            if (_this.decideMonoEq_ForBoth[0] == 1) {
                if (_this.decideMonoEq_2 == 0) {
                    if ((_this.monoVariable[0] == 'x' && _this.binoVariable[0] == 'x') || (_this.monoVariable[0] == 'y' && _this.binoVariable[0] == 'y')) {
                        _this.result = _this.result_1 + _this.monoVariable[0] + _this.power;
                        _this.result_var = _this.monoVariable[0] + _this.power;
                    }
                    else {
                        _this.result = _this.result_1 + _this.monoVariable[0] + _this.binoVariable[0];
                        if (_this.monoVariable[0] == 'y' && _this.binoVariable[0] == 'x') {
                            _this.result_var = _this.binoVariable[0] + _this.monoVariable[0];
                        }
                        else {
                            _this.result_var = _this.monoVariable[0] + _this.binoVariable[0];
                        }

                    }
                }
                else {
                    _this.result = _this.result_1 + _this.monoVariable[0];
                    _this.result_var = _this.monoVariable[0];
                }
            }
            else {
                if ((_this.monoVariable[0] == 'x' && _this.binoVariable[0] == 'x') || (_this.monoVariable[0] == 'y' && _this.binoVariable[0] == 'y')) {
                    _this.result = _this.result_1 + _this.monoVariable[0] + _this.power;
                    _this.result_var = _this.monoVariable[0] + _this.power;
                }
                else {
                    _this.result = _this.result_1 + _this.monoVariable[0] + _this.binoVariable[0];
                    if (_this.monoVariable[0] == 'y' && _this.binoVariable[0] == 'x') {
                        _this.result_var = _this.binoVariable[0] + _this.monoVariable[0];
                    }
                    else {
                        _this.result_var = _this.monoVariable[0] + _this.binoVariable[0];
                    }
                }
            }
        }
        else {
            if (_this.decideMonoEq_ForBoth[0] == 1) {
                if (_this.decideMonoEq_2 == 0) {
                    _this.result = _this.result_1 + _this.binoVariable[0];
                    _this.result_var = _this.binoVariable[0];
                }
                else {
                    _this.result = _this.result_1;
                    _this.result_var = "";
                }
            }
            else {
                _this.result = _this.result_1 + _this.binoVariable[0];
                _this.result_var = _this.binoVariable[0];
            }
        }
        _this.result_1_dup = _this.result;
        console.log(_this.result, "result......")
        console.log(_this.result_var, "result_var......")


        if (_this.decideMonoEq == 0) {
            if (_this.decideMonoEq_ForBoth[1] == 1) {
                if (_this.decideMonoEq_3 == 0) {

                    if ((_this.monoVariable[0] == 'x' && _this.binoVariable[1] == 'x') || (_this.monoVariable[0] == 'y' && _this.binoVariable[1] == 'y')) {
                        _this.resultSecond = _this.result_2 + _this.monoVariable[0] + _this.power;
                        _this.resultSecond_var = _this.monoVariable[0] + _this.power;
                    }
                    else {
                        _this.resultSecond = _this.result_2 + _this.monoVariable[0] + _this.binoVariable[1];
                        if (_this.monoVariable[0] == 'y' && _this.binoVariable[1] == 'x') {
                            _this.resultSecond_var = _this.binoVariable[1] + _this.monoVariable[0];
                        }
                        else {
                            _this.resultSecond_var = _this.monoVariable[0] + _this.binoVariable[1];
                        }
                    }
                }
                else {
                    _this.resultSecond = _this.result_2 + _this.monoVariable[0];
                    _this.resultSecond_var = _this.monoVariable[0];
                }
            }
            else {
                if ((_this.monoVariable[0] == 'x' && _this.binoVariable[1] == 'x') || (_this.monoVariable[0] == 'y' && _this.binoVariable[1] == 'y')) {
                    _this.resultSecond = _this.result_2 + _this.monoVariable[0] + _this.power;
                    _this.resultSecond_var = _this.monoVariable[0] + _this.power;
                }
                else {
                    _this.resultSecond = _this.result_2 + _this.monoVariable[0] + _this.binoVariable[1];
                    if (_this.monoVariable[0] == 'y' && _this.binoVariable[1] == 'x') {
                        _this.resultSecond_var = _this.binoVariable[1] + _this.monoVariable[0];
                    }
                    else {
                        _this.resultSecond_var = _this.monoVariable[0] + _this.binoVariable[1];
                    }
                }
            }
        }
        else {
            if (_this.decideMonoEq_ForBoth[1] == 1) {
                if (_this.decideMonoEq_3 == 0) {
                    _this.resultSecond = _this.result_2 + _this.binoVariable[1];
                    _this.resultSecond_var = _this.binoVariable[1];;
                }
                else {
                    _this.resultSecond = _this.result_2;
                    _this.resultSecond_var = "";
                }
            }
            else {
                _this.resultSecond = _this.result_2 + _this.binoVariable[1];
                _this.resultSecond_var = _this.binoVariable[1];
            }
        }
        console.log(_this.resultSecond, "resultSecond......")
        console.log(_this.resultSecond_var, "resultSecond_var......")

        if (_this.result_2 > 0) {
            _this.finalResult = _this.result + "+" + _this.resultSecond;
        }
        else
            _this.finalResult = _this.result + _this.resultSecond;
        console.log(_this.finalResult, "finalResult......")
        _this.resultSecond_dup = _this.resultSecond;

        if (_this.variables_1.length == 1) {
            if (_this.variables_2.length == 1) {
                if (_this.variables_2[0] == 'x') _this.x2Flag = 1;
                if (_this.variables_2[0] == 'y') _this.xyFlag = 1;
                _this.xFlag = 1;
            }
            if (_this.variables_2.length == 2) {
                _this.xyFlag = 1;
                if (_this.variables_2[0] == 'x' || _this.variables_2[1] == 'x') {
                    _this.x2Flag = 1;
                }

            }

        }
        if (_this.variables_1.length == 0) {
            if (_this.variables_2.length == 1) {
                if (_this.variables_2[0] == 'x') _this.xFlag = 1;
                if (_this.variables_2[0] == 'y') _this.yFlag = 1;
                _this.constFlag = 1;
            }
            if (_this.variables_2.length == 2) {
                if (_this.variables_2[0] == 'x') _this.xFlag = 1;
                if (_this.variables_2[0] == 'y') _this.yFlag = 1;
                if (_this.variables_2[1] == 'x') _this.xFlag = 1;
                if (_this.variables_2[1] == 'y') _this.yFlag = 1;
            }
        }
        console.log(_this.x2Flag, ":_this.x2Flag");
        console.log(_this.xyFlag, ":_this.xyFlag");
        console.log(_this.xFlag, ":_this.xFlag");
        console.log(_this.yFlag, ":_this.yFlag");
        console.log(_this.constFlag, ":_this.constFlag");


        var result = _this.result;
        var result_2 = _this.resultSecond;

        var variableRegex = /[a-zA-Z]+/;
        var match = variableRegex.exec(result);

        var variable = null;

        if (match !== null) {
            variable = match[0];
            if (variable == 'x') {
                if (_this.variables_1.length == 1 && ((_this.variables_2[0] == 'x') && _this.equation2_1_2)) {//2x*(2x-5),2x*(5-2x)
                    _this.result_1x2Flag = 1;
                } else {
                    _this.result_1xFlag = 1;
                }
            }
            else if (variable == 'xy') {
                _this.result_1xyFlag = 1;
            }
            else if (variable == 'y') {
                _this.result_1yFlag = 1;
            }
            console.log("Variable found:", variable);
        } else {
            console.log("No variable found.");
            _this.result_1conFlag = 1;
        }

        var variableRegex = /[a-zA-Z]+/;
        var match_2 = variableRegex.exec(result_2);

        var variable_2 = null;

        if (match_2 !== null) {
            variable_2 = match_2[0];
            if (variable_2 == 'x') {
                if (_this.variables_1.length == 1 && ((_this.variables_2[1] == 'x' || _this.variables_2[0] == 'x') && _this.equation2_2_2)) {//(_this.variables_2[0] == 'x')
                    _this.result_2x2Flag = 1;
                } else {
                    _this.result_2xFlag = 1;
                }
            }
            else if (variable_2 == 'xy') {
                _this.result_2xyFlag = 1;
            }
            else if (variable_2 == 'y') {
                _this.result_2yFlag = 1;
            }
            console.log("variable_2 found:", variable_2);
        } else {
            console.log("No variable found.");
            _this.result_2conFlag = 1;
        }


    },

    storingXYValues: function () {
        //...
        _this.space2Boxes.forEach(function (obj) {
            //constant * constant
            if (obj.name === '60' || obj.name === '61') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions1.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects1.push(obj);
                console.log("constant..");
            }
        });
        _this.space1Boxes.forEach(function (obj) {
            if (obj.name === '60' || obj.name === '61') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions2.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects2.push(obj);
            }
            console.log("constant..");
        });

        _this.pairedValues = [];//const

        for (var i = 0; i < _this.storeObjPositions2.length; i++) {
            var yValue = _this.storeObjPositions2[i].y;

            // Iterate over the second array
            for (var j = 0; j < _this.storeObjPositions1.length; j++) {
                var xValue = _this.storeObjPositions1[j].x;

                // Create a pair of X and Y values
                _this.pair = { x: xValue, y: yValue };

                // Push the pair into the pairedValues array
                _this.pairedValues.push(_this.pair);
                _this.pairedValues_dup.push(_this.pair);
            }
        }
        console.log(_this.pairedValues_dup, "_this.pairedValues_dup ")
        //...
        //horizontal //constant * x
        _this.space2Boxes.forEach(function (obj) {
            if (obj.name === '20' || obj.name === '21') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions3.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects3.push(obj);

            }
        });
        _this.space1Boxes.forEach(function (obj) {
            if (obj.name === '60' || obj.name === '61') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions4.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects4.push(obj);
            }
        });

        _this.pairedValues_2 = [];//x horizontal

        for (var i = 0; i < _this.storeObjPositions4.length; i++) {
            var yValue = _this.storeObjPositions4[i].y;

            // Iterate over the second array
            for (var j = 0; j < _this.storeObjPositions3.length; j++) {
                var xValue = _this.storeObjPositions3[j].x;

                // Create a pair of X and Y values
                _this.pair_2 = { x: xValue, y: yValue };

                // Push the pair into the pairedValues_2 array
                _this.pairedValues_2.push(_this.pair_2);
                _this.pairedValues_2_dup.push(_this.pair_2);
            }
        }
        //...
        //vertical  //x * constant
        _this.space2Boxes.forEach(function (obj) {
            if (obj.name === '60' || obj.name === '61') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions5.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects5.push(obj);

            }
        });
        _this.space1Boxes.forEach(function (obj) {
            if (obj.name === '20' || obj.name === '21') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions6.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects6.push(obj);
            }
        });

        _this.pairedValues_3 = [];//x vertical

        for (var i = 0; i < _this.storeObjPositions6.length; i++) {
            var yValue = _this.storeObjPositions6[i].y;

            // Iterate over the second array
            for (var j = 0; j < _this.storeObjPositions5.length; j++) {
                var xValue = _this.storeObjPositions5[j].x;

                // Create a pair of X and Y values
                _this.pair_3 = { x: xValue, y: yValue };

                // Push the pair into the pairedValues_2 array
                _this.pairedValues_3.push(_this.pair_3);
                _this.pairedValues_3_dup.push(_this.pair_3);
            }
        }

        //x * x = x^2
        _this.space2Boxes.forEach(function (obj) {
            if (obj.name === '20' || obj.name === '21') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions7.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects7.push(obj);

            }
        });
        _this.space1Boxes.forEach(function (obj) {
            if (obj.name === '20' || obj.name === '21') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions8.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects8.push(obj);
            }
        });

        _this.pairedValues_4 = [];//x2

        for (var i = 0; i < _this.storeObjPositions8.length; i++) {
            var yValue = _this.storeObjPositions8[i].y;

            // Iterate over the second array
            for (var j = 0; j < _this.storeObjPositions7.length; j++) {
                var xValue = _this.storeObjPositions7[j].x;

                // Create a pair of X and Y values
                _this.pair_4 = { x: xValue, y: yValue };

                // Push the pair into the pairedValues_2 array
                _this.pairedValues_4.push(_this.pair_4);
                _this.pairedValues_4_dup.push(_this.pair_4);
            }
        }

        //horizontal //constant * y
        _this.space2Boxes.forEach(function (obj) {
            if (obj.name === '40' || obj.name === '41') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions9.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects9.push(obj);

            }
        });
        _this.space1Boxes.forEach(function (obj) {
            if (obj.name === '60' || obj.name === '61') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions10.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects10.push(obj);
            }
        });

        _this.pairedValues_5 = [];//x horizontal

        for (var i = 0; i < _this.storeObjPositions10.length; i++) {
            var yValue = _this.storeObjPositions10[i].y;

            // Iterate over the second array
            for (var j = 0; j < _this.storeObjPositions9.length; j++) {
                var xValue = _this.storeObjPositions9[j].x;

                // Create a pair of X and Y values
                _this.pair_5 = { x: xValue, y: yValue };

                // Push the pair into the pairedValues_2 array
                _this.pairedValues_5.push(_this.pair_5);
                _this.pairedValues_5_dup.push(_this.pair_5);
            }
        }

        //vertical  //y * constant
        _this.space2Boxes.forEach(function (obj) {
            if (obj.name === '60' || obj.name === '61') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions11.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects11.push(obj);

            }
        });
        _this.space1Boxes.forEach(function (obj) {
            if (obj.name === '40' || obj.name === '41') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions12.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects12.push(obj);
            }
        });

        _this.pairedValues_6 = [];//x vertical

        for (var i = 0; i < _this.storeObjPositions12.length; i++) {
            var yValue = _this.storeObjPositions12[i].y;

            // Iterate over the second array
            for (var j = 0; j < _this.storeObjPositions11.length; j++) {
                var xValue = _this.storeObjPositions11[j].x;

                // Create a pair of X and Y values
                _this.pair_6 = { x: xValue, y: yValue };

                // Push the pair into the pairedValues_2 array
                _this.pairedValues_6.push(_this.pair_6);
                _this.pairedValues_6_dup.push(_this.pair_6);
            }
        }

        //y * y = y^2
        _this.space2Boxes.forEach(function (obj) {
            if (obj.name === '40' || obj.name === '41') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions13.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects13.push(obj);

            }
        });
        _this.space1Boxes.forEach(function (obj) {
            if (obj.name === '40' || obj.name === '41') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions14.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects14.push(obj);
            }
        });

        _this.pairedValues_7 = [];//x2

        for (var i = 0; i < _this.storeObjPositions14.length; i++) {
            var yValue = _this.storeObjPositions14[i].y;

            // Iterate over the second array
            for (var j = 0; j < _this.storeObjPositions13.length; j++) {
                var xValue = _this.storeObjPositions13[j].x;

                // Create a pair of X and Y values
                _this.pair_7 = { x: xValue, y: yValue };

                // Push the pair into the pairedValues_2 array
                _this.pairedValues_7.push(_this.pair_7);
                _this.pairedValues_7_dup.push(_this.pair_7);
            }
        }

        //horizontal //y * x
        _this.space2Boxes.forEach(function (obj) {
            if (obj.name === '20' || obj.name === '21') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions15.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects15.push(obj);

            }
        });
        _this.space1Boxes.forEach(function (obj) {
            if (obj.name === '40' || obj.name === '41') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions16.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects16.push(obj);
            }
        });

        _this.pairedValues_8 = [];//x horizontal

        for (var i = 0; i < _this.storeObjPositions16.length; i++) {
            var yValue = _this.storeObjPositions16[i].y;

            // Iterate over the second array
            for (var j = 0; j < _this.storeObjPositions15.length; j++) {
                var xValue = _this.storeObjPositions15[j].x;

                // Create a pair of X and Y values
                _this.pair_8 = { x: xValue, y: yValue };

                // Push the pair into the pairedValues_2 array
                _this.pairedValues_8.push(_this.pair_8);
                _this.pairedValues_8_dup.push(_this.pair_8);
            }
        }
        //...
        //vertical  //x * y
        _this.space2Boxes.forEach(function (obj) {
            if (obj.name === '40' || obj.name === '41') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions17.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects17.push(obj);

            }
        });
        _this.space1Boxes.forEach(function (obj) {
            if (obj.name === '20' || obj.name === '21') {
                // Check if current destroyed position already exists in array
                _this.storeObjPositions18.push({ x: obj.position.x, y: obj.position.y });
                _this.storeObjects18.push(obj);
            }
        });

        _this.pairedValues_9 = [];//x vertical

        for (var i = 0; i < _this.storeObjPositions18.length; i++) {
            var yValue = _this.storeObjPositions18[i].y;

            // Iterate over the second array
            for (var j = 0; j < _this.storeObjPositions17.length; j++) {
                var xValue = _this.storeObjPositions17[j].x;

                // Create a pair of X and Y values
                _this.pair_9 = { x: xValue, y: yValue };

                // Push the pair into the pairedValues_2 array
                _this.pairedValues_9.push(_this.pair_9);
                _this.pairedValues_9_dup.push(_this.pair_9);
            }
        }

    },
    tickThirdEvaluation: function () {
        console.log("tick third evaluation");
        _this.clickSound.play();

        let a = [];
        let b = [];
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

        //Evaluating the number of blocks in the top space.
        for (let i = 0; i < _this.space3Boxes.length; i++) {
            if (_this.space3Boxes.getChildAt(i).name == 'G1') {//-x2
                a[0] -= 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'P1') {//x2
                b[0] += 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'G2') {//-x
                a[1] -= 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'P2') {//x
                b[1] += 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'G3') {//-xy
                a[2] -= 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'P3') {//xy
                b[2] += 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'G4') {//-y
                a[3] -= 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'P4') {//y
                b[3] += 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'G5') {//-y2
                a[4] -= 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'P5') {//y2
                b[4] += 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'G6') {//-1
                a[5] -= 1;
            }
            else if (_this.space3Boxes.getChildAt(i).name == 'P6') {//1
                b[5] += 1;
            }
        }
        console.log(a, "a...");
        console.log(b, "b.....");
        if ((a[_this.variable_val] == _this.result_1 || b[_this.variable_val] == _this.result_1) && (a[_this.variable_val_2] == _this.result_2 || b[_this.variable_val_2] == _this.result_2)) {
            console.log("first result....");
            _this.counterCelebrationSound.play();
            _this.tick.destroy();
            _this.eraser.destroy();
            _this.sideGray1.destroy();
            _this.sideGray2.destroy();
            _this.textBox.destroy();
            _this.questionText.destroy();
            if (_this.variables.length == 1) {
                _this.green1.destroy();
                _this.green2.destroy();
                _this.green6.destroy();
                _this.pink1.destroy();
                _this.pink2.destroy();
                _this.pink6.destroy();
                _this.letterA.destroy();
                _this.letterB.destroy();
                _this.letterC.destroy();
                _this.letterD.destroy();
                _this.letterE.destroy();
                _this.letterF.destroy();
                _this.green1_dup.destroy();
                _this.green2_dup.destroy();
                _this.green6_dup.destroy();
                _this.pink1_dup.destroy();
                _this.pink2_dup.destroy();
                _this.pink6_dup.destroy();

                _this.green2_dup_2.destroy();
                _this.pink2_dup_2.destroy();
                _this.green6_dup_2.destroy();
                _this.pink6_dup_2.destroy();

            }
            _this.addNextTextbox();
        }
        else {
            console.log("wrong result....");
            _this.wrongSound.play();
            console.log('wrong', a[0], b[0]);
            console.log('wrong', a[1], b[1]);
            console.log('wrong', a[2], b[2]);
            console.log('wrong', a[3], b[3]);
            console.log('wrong', a[4], b[4]);
            console.log('wrong', a[5], b[5]);

            _this.xsquareArray = [];
            _this.ysquareArray = [];
            _this.xArray = [];
            _this.yArray = [];
            _this.xyArray = [];
            _this.ConstArray = [];

            _this.space3Boxes.forEach(function (obj) {
                if (obj.name == 'G1' || obj.name == 'P1') _this.xsquareArray.push(obj);
                else if (obj.name == 'G2' || obj.name == 'P2') _this.xArray.push(obj);
                else if (obj.name == 'G3' || obj.name == 'P3') _this.xyArray.push(obj);
                else if (obj.name == 'G4' || obj.name == 'P4') _this.yArray.push(obj);
                else if (obj.name == 'G5' || obj.name == 'P5') _this.ysquareArray.push(obj);
                else if (obj.name == 'G6' || obj.name == 'P6') _this.ConstArray.push(obj);
            });

            if ((_this.Array_1[0] < 0 && _this.Array_3[0] < 0) || (_this.Array_2[0] > 0 && _this.Array_4[0] > 0)) {//-x*-x +x*+x
                console.log("+x2");
                _this.xsquareArray.forEach(function (obj) {
                    if (obj.name == 'G1') {
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });
            }
            if ((_this.Array_2[0] > 0 && _this.Array_3[0] < 0) || (_this.Array_1[0] < 0 && _this.Array_4[0] > 0)) {//+x*-x -x*+x
                console.log("-x2");
                _this.xsquareArray.forEach(function (obj) {
                    if (obj.name == 'P1') {
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions.length; i++) {
                            var pos = _this.destroyedPositions[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        if (!posExists) {
                            _this.destroyedPositions.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });
            }
            if ((_this.Array_1[1] < 0 && _this.Array_3[1] < 0) || (_this.Array_2[1] > 0 && _this.Array_4[1] > 0)) {//-1*-1 +1*+1
                console.log("+1");
                _this.ConstArray.forEach(function (obj) {
                    if (obj.name == 'G6') {
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions_6.length; i++) {
                            var pos = _this.destroyedPositions_6[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        if (!posExists) {
                            _this.destroyedPositions_6.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });
            }
            if ((_this.Array_2[1] > 0 && _this.Array_3[1] < 0) || (_this.Array_1[1] < 0 && _this.Array_4[1] > 0)) {//+1*-1 -1*+1
                console.log("-1");
                _this.ConstArray.forEach(function (obj) {
                    if (obj.name == 'P6') {
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions_6.length; i++) {
                            var pos = _this.destroyedPositions_6[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        if (!posExists) {
                            _this.destroyedPositions_6.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });
            }
            if ((_this.Array_1[4] < 0 && _this.Array_3[4] < 0) || (_this.Array_2[4] > 0 && _this.Array_4[4] > 0)) {//-y*-y +y*+y
                console.log("+y2");
                _this.ysquareArray.forEach(function (obj) {
                    if (obj.name == 'G5') {
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions_5.length; i++) {
                            var pos = _this.destroyedPositions_5[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        if (!posExists) {
                            _this.destroyedPositions_5.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });
            }
            if ((_this.Array_2[4] > 0 && _this.Array_3[4] < 0) || (_this.Array_1[4] < 0 && _this.Array_4[4] > 0)) {//+y*-y -y*+y
                console.log("-y2");
                _this.ysquareArray.forEach(function (obj) {
                    if (obj.name == 'P5') {
                        var posExists = false;
                        for (var i = 0; i < _this.destroyedPositions_5.length; i++) {
                            var pos = _this.destroyedPositions_5[i];
                            if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                posExists = true;
                                break;
                            }
                        }
                        if (!posExists) {
                            _this.destroyedPositions_5.push({ x: obj.position.x, y: obj.position.y });
                            _this.toDestroy.push(obj);
                        }
                    }
                });
            }
            if (((_this.Array_1[0] < 0 && _this.Array_3[1] < 0) || (_this.Array_2[0] > 0 && _this.Array_4[1] > 0)) ||
                ((_this.Array_1[1] < 0 && _this.Array_3[0] < 0) || (_this.Array_2[1] > 0 && _this.Array_4[0] > 0))) {
                //-x*-1 +x*+1  vertical || -1*-x +1*+x horizontal
                console.log("+x");
                if ((_this.Array_1[0] < 0 && _this.Array_3[1] < 0) || (_this.Array_2[0] > 0 && _this.Array_4[1] > 0)) {//vertical
                    _this.xArray.forEach(function (obj) {
                        if (obj.name == 'G2') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyedPositions_2_vr.length; i++) {
                                var pos = _this.destroyedPositions_2_vr[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            if (!posExists) {
                                _this.destroyedPositions_2_vr.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroy.push(obj);
                            }
                        }
                    });
                }
                else {//horizontal
                    _this.xArray.forEach(function (obj) {
                        if (obj.name == 'G2') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyedPositions_2_hr.length; i++) {
                                var pos = _this.destroyedPositions_2_hr[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            if (!posExists) {
                                _this.destroyedPositions_2_hr.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroy.push(obj);
                            }
                        }
                    });
                }

            }
            if (((_this.Array_2[0] > 0 && _this.Array_3[1] < 0) || (_this.Array_1[0] < 0 && _this.Array_4[1] > 0)) ||
                (_this.Array_2[1] > 0 && _this.Array_3[0] < 0) || (_this.Array_1[1] < 0 && _this.Array_4[0] > 0)) {
                //+x*-1 -x*+1 || +1*-x -1*+x
                console.log("-x");
                if ((_this.Array_2[0] > 0 && _this.Array_3[1] < 0) || (_this.Array_1[0] < 0 && _this.Array_4[1] > 0)) {//vertical
                    _this.xArray.forEach(function (obj) {
                        if (obj.name == 'P2') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyedPositions_2_vr.length; i++) {
                                var pos = _this.destroyedPositions_2_vr[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            if (!posExists) {
                                _this.destroyedPositions_2_vr.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroy.push(obj);
                            }
                        }
                    });
                }
                else {//horizontal
                    _this.xArray.forEach(function (obj) {
                        if (obj.name == 'P2') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyedPositions_2_hr.length; i++) {
                                var pos = _this.destroyedPositions_2_hr[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            if (!posExists) {
                                _this.destroyedPositions_2_hr.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroy.push(obj);
                            }
                        }
                    });
                }
            }
            if (((_this.Array_1[4] < 0 && _this.Array_3[1] < 0) || (_this.Array_2[4] > 0 && _this.Array_4[1] > 0)) ||
                ((_this.Array_1[1] < 0 && _this.Array_3[4] < 0) || (_this.Array_2[1] > 0 && _this.Array_4[4] > 0))) {
                //-y*-1 +y*+1  vertical || -1*-y +1*+y horizontal
                console.log("+y");
                if ((_this.Array_1[4] < 0 && _this.Array_3[1] < 0) || (_this.Array_2[4] > 0 && _this.Array_4[1] > 0)) {//vertical
                    _this.yArray.forEach(function (obj) {
                        if (obj.name == 'G4') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyedPositions_4_vr.length; i++) {
                                var pos = _this.destroyedPositions_4_vr[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            if (!posExists) {
                                _this.destroyedPositions_4_vr.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroy.push(obj);
                            }
                        }
                    });
                }
                else {//horizontal
                    _this.yArray.forEach(function (obj) {
                        if (obj.name == 'G4') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyedPositions_4_hr.length; i++) {
                                var pos = _this.destroyedPositions_4_hr[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            if (!posExists) {
                                _this.destroyedPositions_4_hr.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroy.push(obj);
                            }
                        }
                    });
                }

            }
            if (((_this.Array_2[4] > 0 && _this.Array_3[1] < 0) || (_this.Array_1[4] < 0 && _this.Array_4[1] > 0)) ||
                (_this.Array_2[1] > 0 && _this.Array_3[4] < 0) || (_this.Array_1[1] < 0 && _this.Array_4[4] > 0)) {
                //+y*-1 -y*+1 || +1*-y -1*+y
                console.log("-y");
                if ((_this.Array_2[4] > 0 && _this.Array_3[1] < 0) || (_this.Array_1[4] < 0 && _this.Array_4[1] > 0)) {//vertical
                    _this.yArray.forEach(function (obj) {
                        if (obj.name == 'P4') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyedPositions_4_vr.length; i++) {
                                var pos = _this.destroyedPositions_4_vr[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            if (!posExists) {
                                _this.destroyedPositions_4_vr.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroy.push(obj);
                            }
                        }
                    });
                }
                else {//horizontal
                    _this.yArray.forEach(function (obj) {
                        if (obj.name == 'P4') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyedPositions_4_hr.length; i++) {
                                var pos = _this.destroyedPositions_4_hr[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            if (!posExists) {
                                _this.destroyedPositions_4_hr.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroy.push(obj);
                            }
                        }
                    });
                }
            }
            if (((_this.Array_1[0] < 0 && _this.Array_3[4] < 0) || (_this.Array_2[0] > 0 && _this.Array_4[4] > 0)) ||
                ((_this.Array_1[4] < 0 && _this.Array_3[0] < 0) || (_this.Array_2[4] > 0 && _this.Array_4[0] > 0))) {
                //-x*-y +x*+y  vertical || -y*-x +y*+x horizontal
                console.log("+xy");
                if ((_this.Array_1[0] < 0 && _this.Array_3[4] < 0) || (_this.Array_2[0] > 0 && _this.Array_4[4] > 0)) {//vertical
                    _this.xyArray.forEach(function (obj) {
                        if (obj.name == 'G3') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyedPositions_3_vr.length; i++) {
                                var pos = _this.destroyedPositions_3_vr[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            if (!posExists) {
                                _this.destroyedPositions_3_vr.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroy.push(obj);
                            }
                        }
                    });
                }
                else {//horizontal
                    _this.xyArray.forEach(function (obj) {
                        if (obj.name == 'G3') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyedPositions_3_hr.length; i++) {
                                var pos = _this.destroyedPositions_3_hr[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            if (!posExists) {
                                _this.destroyedPositions_3_hr.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroy.push(obj);
                            }
                        }
                    });
                }

            }
            if (((_this.Array_2[0] > 0 && _this.Array_3[4] < 0) || (_this.Array_1[0] < 0 && _this.Array_4[4] > 0)) ||
                (_this.Array_2[4] > 0 && _this.Array_3[0] < 0) || (_this.Array_1[4] < 0 && _this.Array_4[0] > 0)) {
                //+x*-y -x*+y || +y*-x -y*+x
                console.log("-xy");
                if ((_this.Array_2[0] > 0 && _this.Array_3[4] < 0) || (_this.Array_1[0] < 0 && _this.Array_4[4] > 0)) {//vertical
                    _this.xyArray.forEach(function (obj) {
                        if (obj.name == 'P3') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyedPositions_3_vr.length; i++) {
                                var pos = _this.destroyedPositions_3_vr[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            if (!posExists) {
                                _this.destroyedPositions_3_vr.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroy.push(obj);
                            }
                        }
                    });
                }
                else {//horizontal
                    _this.xyArray.forEach(function (obj) {
                        if (obj.name == 'P3') {
                            var posExists = false;
                            for (var i = 0; i < _this.destroyedPositions_3_hr.length; i++) {
                                var pos = _this.destroyedPositions_3_hr[i];
                                if (pos.x === obj.position.x && pos.y === obj.position.y) {
                                    posExists = true;
                                    break;
                                }
                            }
                            if (!posExists) {
                                _this.destroyedPositions_3_hr.push({ x: obj.position.x, y: obj.position.y });
                                _this.toDestroy.push(obj);
                            }
                        }
                    });
                }
            }



            _this.toDestroy.forEach(function (obj) {
                obj.destroy();
            });
            _this.rearrangeIndexPosition_tick();
            _this.rearrangeIndexPosition();
            if (_this.destroyedPositions.length > 0 && _this.pairedValues_4.length > 0) {
                console.log("both x2 have value");
            }
            if (_this.destroyedPositions_6.length > 0 && _this.pairedValues.length > 0) {
                console.log("both 1 have value");
                // var destroyedPositions = _this.destroyedPositions_6;
                // var pairedValues = _this.pairedValues;
                // var duplicateArray = _this.pairedValues_dup;

                // // Find the smallest and largest positions
                // var smallestPosition = duplicateArray.reduce(function (prev, curr) {
                //     return (prev.x < curr.x || (prev.x === curr.x && prev.y < curr.y)) ? prev : curr;
                // });
                // var largestPosition = duplicateArray.reduce(function (prev, curr) {
                //     return (prev.x > curr.x || (prev.x === curr.x && prev.y > curr.y)) ? prev : curr;
                // });

                // // Execute the positions in the desired order
                // executePosition(smallestPosition);
                // executePosition(largestPosition);

                // // Function to execute a position
                // function executePosition(position) {
                //     // Check if the position exists in the destroyedPositions or pairedValues arrays
                //     var existsInDestroyedPositions = destroyedPositions.some(function (destroyedPosition) {
                //         return destroyedPosition.x === position.x && destroyedPosition.y === position.y;
                //     });
                //     var existsInPairedValues = pairedValues.some(function (pairedValue) {
                //         return pairedValue.x === position.x && pairedValue.y === position.y;
                //     });

                //     // Perform the desired action based on the position's existence in the arrays
                //     if (existsInDestroyedPositions) {
                //         console.log("Executing position from destroyedPositions:", position);
                //         // Perform the action for position in destroyedPositions array
                //     } else if (existsInPairedValues) {
                //         console.log("Executing position from pairedValues:", position);
                //         // Perform the action for position in pairedValues array
                //     } else {
                //         console.log("Executing position:", position);
                //         // Perform the default action for position
                //     }
                // }

            }
            if (_this.destroyedPositions_5.length > 0 && _this.pairedValues_7.length > 0) {
                console.log("both y2 have value");
            }
            if (_this.destroyedPositions_2_vr.length > 0 && _this.pairedValues_3.length > 0) {
                console.log("both x have value");
            }
            if (_this.destroyedPositions_2_hr.length > 0 && _this.pairedValues_2.length > 0) {
                console.log("both x have value");
            }
            if (_this.destroyedPositions_4_vr.length > 0 && _this.pairedValues_6.length > 0) {
                console.log("both y have value");
            }
            if (_this.destroyedPositions_4_hr.length > 0 && _this.pairedValues_5.length > 0) {
                console.log("both y have value");
            }
            if (_this.destroyedPositions_3_vr.length > 0 && _this.pairedValues_9.length > 0) {
                console.log("both xy have value");
            }
            if (_this.destroyedPositions_3_hr.length > 0 && _this.pairedValues_8.length > 0) {
                console.log("both xy have value");
            }
        }

    },

    decidingResultValues: function () {
        //constant * constant a[5],b[5]
        if ((_this.space1Boxes.getChildAt(0).name == '60' || _this.space1Boxes.getChildAt(0).name == '61') && (_this.space2Boxes.getChildAt(0).name == '60' || _this.space2Boxes.getChildAt(0).name == '61')) {
            console.log("constant * constant");
            _this.variable_val = 5;
        }
        //constant*x          a[1],b[1]
        if ((_this.space1Boxes.getChildAt(0).name == '60' || _this.space1Boxes.getChildAt(0).name == '61') && (_this.space2Boxes.getChildAt(0).name == '20' || _this.space2Boxes.getChildAt(0).name == '21')) {
            console.log("constant * x");
            _this.variable_val = 1;
        }
        //x*constant          a[1],b[1]
        if ((_this.space1Boxes.getChildAt(0).name == '20' || _this.space1Boxes.getChildAt(0).name == '21') && (_this.space2Boxes.getChildAt(0).name == '60' || _this.space2Boxes.getChildAt(0).name == '61')) {
            console.log("x * constant");
            _this.variable_val = 1;
        }
        //constant * y        a[3],b[3]
        if ((_this.space1Boxes.getChildAt(0).name == '60' || _this.space1Boxes.getChildAt(0).name == '61') && (_this.space2Boxes.getChildAt(0).name == '40' || _this.space2Boxes.getChildAt(0).name == '41')) {
            console.log("constant * y");
            _this.variable_val = 3;
        }
        //y*constant          a[3],b[3]
        if ((_this.space1Boxes.getChildAt(0).name == '40' || _this.space1Boxes.getChildAt(0).name == '41') && (_this.space2Boxes.getChildAt(0).name == '60' || _this.space2Boxes.getChildAt(0).name == '61')) {
            console.log("y * constant");
            _this.variable_val = 3;
        }
        //x*x                 a[0],b[0]
        if ((_this.space1Boxes.getChildAt(0).name == '20' || _this.space1Boxes.getChildAt(0).name == '21') && (_this.space2Boxes.getChildAt(0).name == '20' || _this.space2Boxes.getChildAt(0).name == '21')) {
            console.log("x * x");
            _this.xxFlag = 1;
            _this.variable_val = 0;
        }
        //y*y                 a[4],b[4]
        if ((_this.space1Boxes.getChildAt(0).name == '40' || _this.space1Boxes.getChildAt(0).name == '41') && (_this.space2Boxes.getChildAt(0).name == '40' || _this.space2Boxes.getChildAt(0).name == '41')) {
            console.log("y * y");
            _this.variable_val = 4;
        }
        //x*y                 a[2],b[2]
        if ((_this.space1Boxes.getChildAt(0).name == '20' || _this.space1Boxes.getChildAt(0).name == '21') && (_this.space2Boxes.getChildAt(0).name == '40' || _this.space2Boxes.getChildAt(0).name == '41')) {
            console.log("x * y");
            _this.variable_val = 2;
        }
        //y*x                 a[2],b[2]
        if ((_this.space1Boxes.getChildAt(0).name == '40' || _this.space1Boxes.getChildAt(0).name == '41') && (_this.space2Boxes.getChildAt(0).name == '20' || _this.space2Boxes.getChildAt(0).name == '21')) {
            console.log("y*x  ");
            _this.variable_val = 2;
        }

        //for second one
        //constant * constant a[5],b[5]
        if ((_this.space1Boxes.getChildAt(0).name == '60' || _this.space1Boxes.getChildAt(0).name == '61') && (_this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '60' || _this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '61')) {
            console.log("constant * constant");
            _this.variable_val_2 = 5;
        }
        //constant*x          a[1],b[1]
        if ((_this.space1Boxes.getChildAt(0).name == '60' || _this.space1Boxes.getChildAt(0).name == '61') && (_this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '20' || _this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '21')) {
            console.log("constant * x");
            _this.variable_val_2 = 1;
        }
        //x*constant          a[1],b[1]
        if ((_this.space1Boxes.getChildAt(0).name == '20' || _this.space1Boxes.getChildAt(0).name == '21') && (_this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '60' || _this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '61')) {
            console.log("x * constant");
            _this.variable_val_2 = 1;
        }
        //constant * y        a[3],b[3]
        if ((_this.space1Boxes.getChildAt(0).name == '60' || _this.space1Boxes.getChildAt(0).name == '61') && (_this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '40' || _this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '41')) {
            console.log("constant * y");
            _this.variable_val_2 = 3;
        }
        //y*constant          a[3],b[3]
        if ((_this.space1Boxes.getChildAt(0).name == '40' || _this.space1Boxes.getChildAt(0).name == '41') && (_this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '60' || _this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '61')) {
            console.log("y * constant");
            _this.variable_val_2 = 3;
        }
        //x*x                 a[0],b[0]
        if ((_this.space1Boxes.getChildAt(0).name == '20' || _this.space1Boxes.getChildAt(0).name == '21') && (_this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '20' || _this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '21')) {
            console.log("x * x");
            _this.variable_val_2 = 0;
        }
        //y*y                 a[4],b[4]
        if ((_this.space1Boxes.getChildAt(0).name == '40' || _this.space1Boxes.getChildAt(0).name == '41') && (_this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '40' || _this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '41')) {
            console.log("y * y");
            _this.variable_val_2 = 4;
        }
        //x*y                 a[2],b[2]
        if ((_this.space1Boxes.getChildAt(0).name == '20' || _this.space1Boxes.getChildAt(0).name == '21') && (_this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '40' || _this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '41')) {
            console.log("x * y");
            _this.variable_val_2 = 2;
        }
        //y*x                 a[2],b[2]
        if ((_this.space1Boxes.getChildAt(0).name == '40' || _this.space1Boxes.getChildAt(0).name == '41') && (_this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '20' || _this.space2Boxes.getChildAt(_this.space2Boxes.length - 1).name == '21')) {
            console.log("y*x  ");
            _this.variable_val_2 = 2;
        }
    },

    //Moving the eraser.
    eraserUpdate: function (target) {
        _this.world.bringToTop(_this.eraser)
        _this.eraser.scale.setTo(0.6)
    },
    //Erasing the vertical space objects.
    eraserDrop1: function (target) {
        console.log("eraserDrop1")
        for (let i = 0; i < _this.space1Boxes.length; i++) {
            if (_this.checkOverlap(target, _this.space1Boxes.getChildAt(i))) {
                if (_this.space1Boxes.getChildAt(i).name == '10' || _this.space1Boxes.getChildAt(i).name == '11' || _this.space1Boxes.getChildAt(i).name == '30' || _this.space1Boxes.getChildAt(i).name == '31') {
                    _this.verticalY -= 60;
                }
                else if (_this.space1Boxes.getChildAt(i).name == '20' || _this.space1Boxes.getChildAt(i).name == '21') {
                    _this.verticalY -= 126;
                }
                else if (_this.space1Boxes.getChildAt(i).name == '40' || _this.space1Boxes.getChildAt(i).name == '41') {
                    _this.verticalY -= 87;
                }
                else if (_this.space1Boxes.getChildAt(i).name == '60' || _this.space1Boxes.getChildAt(i).name == '61') {
                    _this.verticalY -= 33;
                }
                else
                    _this.verticalY -= 40;
                _this.space1Boxes.removeChild(_this.space1Boxes.getChildAt(i));
                break;
            }
        }
        if (_this.space1Boxes.length == 0) {
            _this.eraser.destroy();
            _this.eraser = _this.add.sprite(800, 85, 'eraser');
            _this.eraser.inputEnabled = true;
            _this.eraser.input.enableDrag(true);
            _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
            _this.eraser.events.onDragStop.add(_this.eraserDrop1, _this);
            return;
        }
        _this.space1Boxes.getChildAt(0).y = 215;
        for (let i = 1; i < _this.space1Boxes.length; i++) {
            if (_this.space1Boxes.getChildAt(i - 1).name == '10' || _this.space1Boxes.getChildAt(i - 1).name == '11')
                _this.space1Boxes.getChildAt(i).y = _this.space1Boxes.getChildAt(i - 1).y + 60;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '20' || _this.space1Boxes.getChildAt(i - 1).name == '21')
                _this.space1Boxes.getChildAt(i).y = _this.space1Boxes.getChildAt(i - 1).y + 126;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '30' || _this.space1Boxes.getChildAt(i - 1).name == '31')
                _this.space1Boxes.getChildAt(i).y = _this.space1Boxes.getChildAt(i - 1).y + 60;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '40' || _this.space1Boxes.getChildAt(i - 1).name == '41')
                _this.space1Boxes.getChildAt(i).y = _this.space1Boxes.getChildAt(i - 1).y + 87;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '50' || _this.space1Boxes.getChildAt(i - 1).name == '51')
                _this.space1Boxes.getChildAt(i).y = _this.space1Boxes.getChildAt(i - 1).y + 40;
            else if (_this.space1Boxes.getChildAt(i - 1).name == '60' || _this.space1Boxes.getChildAt(i - 1).name == '61')
                _this.space1Boxes.getChildAt(i).y = _this.space1Boxes.getChildAt(i - 1).y + 33;


        }

        _this.eraser.destroy();
        _this.eraser = _this.add.sprite(800, 85, 'eraser');
        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop1, _this);
    },
    //Erasing the horizontal space objects.
    eraserDrop2: function (target) {
        console.log("eraserDrop2")
        for (let i = 0; i < _this.space2Boxes.length; i++) {
            if (_this.checkOverlap(target, _this.space2Boxes.getChildAt(i))) {
                if (_this.space2Boxes.getChildAt(i).name == '10' || _this.space2Boxes.getChildAt(i).name == '11' || _this.space2Boxes.getChildAt(i).name == '30' || _this.space2Boxes.getChildAt(i).name == '31') {
                    _this.horizontalX -= 60;
                }
                else if (_this.space2Boxes.getChildAt(i).name == '20' || _this.space2Boxes.getChildAt(i).name == '21') {
                    _this.horizontalX -= 126;
                }
                else if (_this.space2Boxes.getChildAt(i).name == '40' || _this.space2Boxes.getChildAt(i).name == '41') {
                    _this.horizontalX -= 87;
                }
                else if (_this.space2Boxes.getChildAt(i).name == '60' || _this.space2Boxes.getChildAt(i).name == '61') {
                    _this.horizontalX -= 33;
                }
                else
                    _this.horizontalX -= 40;
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
        _this.space2Boxes.getChildAt(0).x = 305;
        for (let i = 1; i < _this.space2Boxes.length; i++) {
            if (_this.space2Boxes.getChildAt(i - 1).name == '10' || _this.space2Boxes.getChildAt(i - 1).name == '11')
                _this.space2Boxes.getChildAt(i).x = _this.space2Boxes.getChildAt(i - 1).x + 60;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '20' || _this.space2Boxes.getChildAt(i - 1).name == '21')
                _this.space2Boxes.getChildAt(i).x = _this.space2Boxes.getChildAt(i - 1).x + 126;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '30' || _this.space2Boxes.getChildAt(i - 1).name == '31')
                _this.space2Boxes.getChildAt(i).x = _this.space2Boxes.getChildAt(i - 1).x + 60;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '40' || _this.space2Boxes.getChildAt(i - 1).name == '41')
                _this.space2Boxes.getChildAt(i).x = _this.space2Boxes.getChildAt(i - 1).x + 87;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '50' || _this.space2Boxes.getChildAt(i - 1).name == '51')
                _this.space2Boxes.getChildAt(i).x = _this.space2Boxes.getChildAt(i - 1).x + 40;
            else if (_this.space2Boxes.getChildAt(i - 1).name == '60' || _this.space2Boxes.getChildAt(i - 1).name == '61')
                _this.space2Boxes.getChildAt(i).x = _this.space2Boxes.getChildAt(i - 1).x + 33;

        }

        _this.eraser.destroy();
        _this.eraser = _this.add.sprite(800, 85, 'eraser');
        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop2, _this);
    },
    eraserDrop3: function (target) {
        console.log("eraserDrop3");
        _this.lastObject_nameArray = [];
        for (let i = 0; i < _this.space3Boxes.length; i++) {
            if (_this.checkOverlap(target, _this.space3Boxes.getChildAt(i))) {
                // Perform actions if overlap is detected
                _this.lastObject = _this.space3Boxes.getChildAt(i);
                _this.lastObject_name = _this.space3Boxes.getChildAt(i).name;
                _this.lastObject.destroy();

                var erasedPos = {
                    x: _this.lastObject.x,
                    y: _this.lastObject.y
                };

                _this.erasedObjectInitialPosition.push(erasedPos);
                _this.lastObject_nameArray.push(_this.lastObject_name);
                break;
            }
        }

        console.log(_this.erasedObjectInitialPosition, ";_this.erasedObjectInitialPosition");
        console.log(_this.lastObject_nameArray, ";_this.lastObject_nameArray");


        for (let j = 0; j < _this.lastObject_nameArray.length; j++) {
            console.log("for loop count")
            if (_this.lastObject_nameArray[j] == "G1") {//-x2
                _this.pairedValues_4.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "G2" && _this.pairedValues_2_dup.length > 0) {//-x horizontal
                _this.pairedValues_2.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "G2" && _this.pairedValues_3_dup.length > 0) {//-x vertical
                _this.pairedValues_3.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "G3" && _this.pairedValues_8_dup.length > 0) {//-xy horizontal
                _this.pairedValues_8.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "G3" && _this.pairedValues_9_dup.length > 0) {//-xy vertical
                _this.pairedValues_9.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "G4" && _this.pairedValues_5_dup.length > 0) {//-y horizontal
                _this.pairedValues_5.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "G4" && _this.pairedValues_6_dup.length > 0) {//-y vertical
                _this.pairedValues_6.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "G5") {//-y2 
                _this.pairedValues_7.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "G6") {//-1
                _this.pairedValues.push(erasedPos);
            }

            if (_this.lastObject_nameArray[j] == "P1") {//x2
                _this.pairedValues_4.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "P2" && _this.pairedValues_2_dup.length > 0) {//x horizontal
                _this.pairedValues_2.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "P2" && _this.pairedValues_3_dup.length > 0) {//x vertical
                _this.pairedValues_3.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "P3" && _this.pairedValues_8_dup.length > 0) {//xy horizontal
                _this.pairedValues_8.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "P3" && _this.pairedValues_9_dup.length > 0) {//xy vertical
                _this.pairedValues_9.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "P4" && _this.pairedValues_5_dup.length > 0) {//y horizontal
                _this.pairedValues_5.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "P4" && _this.pairedValues_6_dup.length > 0) {//y vertical
                _this.pairedValues_6.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "P5") {//y2 
                _this.pairedValues_7.push(erasedPos);
            }
            if (_this.lastObject_nameArray[j] == "P6") {//1
                _this.pairedValues.push(erasedPos);
            }


        }

        _this.rearrangeIndexPosition();
        _this.rearrangeIndexPosition_tick();

        console.log("eraserDrop");
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
    rearrangeIndexPosition: function () {
        //for constant*constant
        var originalArray = _this.pairedValues;
        var duplicateArray = _this.pairedValues_dup;

        var rearrangedArray = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray.length; i++) {
            var object = duplicateArray[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex = originalArray.findIndex(obj => obj.x === object.x && obj.y === object.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex !== -1) {
                rearrangedArray.push(originalArray[matchingIndex]);
            }
        }

        console.log(rearrangedArray, "rearranged");
        _this.pairedValues = rearrangedArray;

        //for c*x
        var originalArray_2 = _this.pairedValues_2;
        var duplicateArray_2 = _this.pairedValues_2_dup;

        var rearrangedArray_2 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_2.length; i++) {
            var object_2 = duplicateArray_2[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_2 = originalArray_2.findIndex(obj => obj.x === object_2.x && obj.y === object_2.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_2 !== -1) {
                rearrangedArray_2.push(originalArray_2[matchingIndex_2]);
            }
        }

        console.log(rearrangedArray_2, "rearranged");
        _this.pairedValues_2 = rearrangedArray_2;

        //for x*c
        var originalArray_3 = _this.pairedValues_3;
        var duplicateArray_3 = _this.pairedValues_3_dup;

        var rearrangedArray_3 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_3.length; i++) {
            var object_3 = duplicateArray_3[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_3 = originalArray_3.findIndex(obj => obj.x === object_3.x && obj.y === object_3.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_3 !== -1) {
                rearrangedArray_3.push(originalArray_3[matchingIndex_3]);
            }
        }

        console.log(rearrangedArray_3, "rearranged");
        _this.pairedValues_3 = rearrangedArray_3;

        //for x*x
        var originalArray_4 = _this.pairedValues_4;
        var duplicateArray_4 = _this.pairedValues_4_dup;

        var rearrangedArray_4 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_4.length; i++) {
            var object_4 = duplicateArray_4[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_4 = originalArray_4.findIndex(obj => obj.x === object_4.x && obj.y === object_4.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_4 !== -1) {
                rearrangedArray_4.push(originalArray_4[matchingIndex_4]);
            }
        }

        console.log(rearrangedArray_4, "rearranged");
        _this.pairedValues_4 = rearrangedArray_4;

        //for c*y
        var originalArray_5 = _this.pairedValues_5;
        var duplicateArray_5 = _this.pairedValues_5_dup;

        var rearrangedArray_5 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_5.length; i++) {
            var object_5 = duplicateArray_5[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_5 = originalArray_5.findIndex(obj => obj.x === object_5.x && obj.y === object_5.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_5 !== -1) {
                rearrangedArray_5.push(originalArray_5[matchingIndex_5]);
            }
        }

        console.log(rearrangedArray_5, "rearranged");
        _this.pairedValues_5 = rearrangedArray_5;

        //for y*c
        var originalArray_6 = _this.pairedValues_6;
        var duplicateArray_6 = _this.pairedValues_6_dup;

        var rearrangedArray_6 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_6.length; i++) {
            var object_6 = duplicateArray_6[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_6 = originalArray_6.findIndex(obj => obj.x === object_6.x && obj.y === object_6.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_6 !== -1) {
                rearrangedArray_6.push(originalArray_6[matchingIndex_6]);
            }
        }

        console.log(rearrangedArray_6, "rearranged");
        _this.pairedValues_6 = rearrangedArray_6;

        //for y*y
        var originalArray_7 = _this.pairedValues_7;
        var duplicateArray_7 = _this.pairedValues_7_dup;

        var rearrangedArray_7 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_7.length; i++) {
            var object_7 = duplicateArray_7[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_7 = originalArray_7.findIndex(obj => obj.x === object_7.x && obj.y === object_7.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_7 !== -1) {
                rearrangedArray_7.push(originalArray_7[matchingIndex_7]);
            }
        }

        console.log(rearrangedArray_7, "rearranged");
        _this.pairedValues_7 = rearrangedArray_7;

        //for x*y
        var originalArray_8 = _this.pairedValues_8;
        var duplicateArray_8 = _this.pairedValues_8_dup;

        var rearrangedArray_8 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_8.length; i++) {
            var object_8 = duplicateArray_8[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_8 = originalArray_8.findIndex(obj => obj.x === object_8.x && obj.y === object_8.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_8 !== -1) {
                rearrangedArray_8.push(originalArray_8[matchingIndex_8]);
            }
        }

        console.log(rearrangedArray_8, "rearranged");
        _this.pairedValues_8 = rearrangedArray_8;

        //for y*x
        var originalArray_9 = _this.pairedValues_9;
        var duplicateArray_9 = _this.pairedValues_9_dup;

        var rearrangedArray_9 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_9.length; i++) {
            var object_9 = duplicateArray_9[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_9 = originalArray_9.findIndex(obj => obj.x === object_9.x && obj.y === object_9.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_9 !== -1) {
                rearrangedArray_9.push(originalArray_9[matchingIndex_9]);
            }
        }

        console.log(rearrangedArray_9, "rearranged");
        _this.pairedValues_9 = rearrangedArray_9;
    },
    rearrangeIndexPosition_tick: function () {
        //for constant*constant
        var originalArray = _this.destroyedPositions_6;
        var duplicateArray = _this.pairedValues_dup;

        var rearrangedArray = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray.length; i++) {
            var object = duplicateArray[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex = originalArray.findIndex(obj => obj.x === object.x && obj.y === object.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex !== -1) {
                rearrangedArray.push(originalArray[matchingIndex]);
            }
        }

        console.log(rearrangedArray, "rearranged");
        _this.destroyedPositions_6 = rearrangedArray;

        //for c*x
        var originalArray_2 = _this.destroyedPositions_2_hr;
        var duplicateArray_2 = _this.pairedValues_2_dup;

        var rearrangedArray_2 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_2.length; i++) {
            var object_2 = duplicateArray_2[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_2 = originalArray_2.findIndex(obj => obj.x === object_2.x && obj.y === object_2.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_2 !== -1) {
                rearrangedArray_2.push(originalArray_2[matchingIndex_2]);
            }
        }

        console.log(rearrangedArray_2, "rearranged");
        _this.destroyedPositions_2_hr = rearrangedArray_2;

        //for x*x
        var originalArray_4 = _this.destroyedPositions;
        var duplicateArray_4 = _this.pairedValues_4_dup;

        var rearrangedArray_4 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_4.length; i++) {
            var object_4 = duplicateArray_4[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_4 = originalArray_4.findIndex(obj => obj.x === object_4.x && obj.y === object_4.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_4 !== -1) {
                rearrangedArray_4.push(originalArray_4[matchingIndex_4]);
            }
        }

        console.log(rearrangedArray_4, "rearranged");
        _this.destroyedPositions = rearrangedArray_4;

        //for c*y
        var originalArray_5 = _this.destroyedPositions_4_hr;
        var duplicateArray_5 = _this.pairedValues_5_dup;

        var rearrangedArray_5 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_5.length; i++) {
            var object_5 = duplicateArray_5[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_5 = originalArray_5.findIndex(obj => obj.x === object_5.x && obj.y === object_5.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_5 !== -1) {
                rearrangedArray_5.push(originalArray_5[matchingIndex_5]);
            }
        }

        console.log(rearrangedArray_5, "rearranged");
        _this.destroyedPositions_4_hr = rearrangedArray_5;

        //for y*y
        var originalArray_7 = _this.destroyedPositions_5;
        var duplicateArray_7 = _this.pairedValues_7_dup;

        var rearrangedArray_7 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_7.length; i++) {
            var object_7 = duplicateArray_7[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_7 = originalArray_7.findIndex(obj => obj.x === object_7.x && obj.y === object_7.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_7 !== -1) {
                rearrangedArray_7.push(originalArray_7[matchingIndex_7]);
            }
        }

        console.log(rearrangedArray_7, "rearranged");
        _this.destroyedPositions_5 = rearrangedArray_7;

        //for x*y
        var originalArray_8 = _this.destroyedPositions_3_hr;
        var duplicateArray_8 = _this.pairedValues_8_dup;

        var rearrangedArray_8 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_8.length; i++) {
            var object_8 = duplicateArray_8[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_8 = originalArray_8.findIndex(obj => obj.x === object_8.x && obj.y === object_8.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_8 !== -1) {
                rearrangedArray_8.push(originalArray_8[matchingIndex_8]);
            }
        }

        console.log(rearrangedArray_8, "rearranged");
        _this.destroyedPositions_3_hr = rearrangedArray_8;

        //for y*x
        var originalArray_10 = _this.destroyedPositions_3_vr;
        var duplicateArray_10 = _this.pairedValues_9_dup;

        var rearrangedArray_10 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_10.length; i++) {
            var object_10 = duplicateArray_10[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_10 = originalArray_10.findIndex(obj => obj.x === object_10.x && obj.y === object_10.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_10 !== -1) {
                rearrangedArray_10.push(originalArray_10[matchingIndex_10]);
            }
        }

        console.log(rearrangedArray_10, "rearranged");
        _this.destroyedPositions_3_vr = rearrangedArray_10;

        //for x*c
        var originalArray_11 = _this.destroyedPositions_2_vr;
        var duplicateArray_11 = _this.pairedValues_3_dup;

        var rearrangedArray_11 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_11.length; i++) {
            var object_11 = duplicateArray_11[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_11 = originalArray_11.findIndex(obj => obj.x === object_11.x && obj.y === object_11.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_11 !== -1) {
                rearrangedArray_11.push(originalArray_11[matchingIndex_11]);
            }
        }

        console.log(rearrangedArray_11, "rearranged");
        _this.destroyedPositions_2_vr = rearrangedArray_11;

        //for y*c
        var originalArray_12 = _this.destroyedPositions_4_vr;
        var duplicateArray_12 = _this.pairedValues_6_dup;

        var rearrangedArray_12 = [];
        // Iterate over the duplicate array
        for (var i = 0; i < duplicateArray_12.length; i++) {
            var object_12 = duplicateArray_12[i];

            // Find the matching index in the original array based on x and y values
            var matchingIndex_12 = originalArray_12.findIndex(obj => obj.x === object_12.x && obj.y === object_12.y);

            // If a matching index is found, push the corresponding object to the rearranged array
            if (matchingIndex_12 !== -1) {
                rearrangedArray_12.push(originalArray_12[matchingIndex_12]);
            }
        }

        console.log(rearrangedArray_12, "rearranged");
        _this.destroyedPositions_4_vr = rearrangedArray_12;


    },
    dragStart: function (target) {
        // target.bringToTop();
        _this.clickSound.play();
    },

    //Displaying the clicked number.
    numClicked1: function (target) {
        _this.clickSound.play();
        var_selectedAns11 = " "
        var_selectedAns21 = " "
        var_selectedAns31 = " "
        if (target.name == 10) {
            target.name = '-'
            _this.signNotselected1 = true;
        }
        if (target.name == 11) {
            target.name = '+';
            _this.signNotselected1 = true;
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
            _this.enterTxt1 = _this.add.text(15, 8, "" + _this.signVal1 + _this.finalval1, { fontSize: '20px' });

            if (_this.signVal1 == '+' || _this.signVal1 == '-') {
                if (_this.finalval1.length == 2) {
                    _this.enterTxt1.x -= 6;//3
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
            _this.enterTxt1.scale.setTo(1, 1.1)
            _this.applyingStyle(_this.enterTxt1);
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
        if (target.name == 10) {
            target.name = '-'
            _this.signNotselected2 = true;
        }
        if (target.name == 11) {
            target.name = '+';
            _this.signNotselected2 = true;
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
            _this.enterTxt2 = _this.add.text(15, 8, "" + _this.signVal2 + _this.finalval2, { fontSize: '20px' });

            if (_this.signVal2 == '+' || _this.signVal2 == '-') {
                if (_this.finalval2.length == 2) {
                    _this.enterTxt2.x -= 6;//3
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
            _this.enterTxt2.scale.setTo(1, 1.1)
            _this.applyingStyle(_this.enterTxt2);
            _this.AnswerBox2.addChild(_this.enterTxt2);
            _this.AnswerBox2.name = Number(_this.signVal2 + _this.finalval2);
            _this.enterTxt2.visible = true;
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

    //for clearing the answer box.
    disableInputs1: function () {
        _this.AnswerBox1.removeChild(_this.enterTxt1);
        _this.selectedAns11 = '';
        _this.selectedAns21 = '';
        _this.selectedAns31 = '';
        _this.AnswerBox1.name = '';
        _this.fourNotEntered1 = false;
        _this.signNotselected1 = false
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
        _this.signNotselected2 = false
        _this.finalval2 = '';
        _this.signVal2 = '';
    },

    addNextTextbox: function () {
        //Adding the numberpad and the answer box.
        //_this.time.events.add(1600, () => {//* (delay)
        _this.pauseVoice();
        if (_this.count1 == 0) {

            _this.Ask_Question5.play();

        }
        _this.Question_flag = 4;


        _this.textBox.destroy();

        _this.tempText = _this.add.text(0, 0, '=');
        _this.tempText.visible = false;
        _this.tempText.destroy();
        _this.textBox = _this.add.sprite(140, 60, 'Text box_2');
        _this.textBox.scale.setTo(0.8);//0.8

        let stringEq = ' ( ';
        let multiply = ' * ';
        let stringEq2 = ' ( ' + _this.equation2 + ' ) ';

        stringEq = stringEq + _this.equation1 + " ) " + multiply + stringEq2;

        _this.questionText = _this.add.text(160, 19, stringEq);//50,22
        _this.applyingStyleBlue_2(_this.questionText);
        _this.textBox.addChild(_this.questionText);

        // _this.multiplySign = _this.add.text(280, 19, multiply);
        // _this.applyingStyleBlue_2(_this.multiplySign);
        // _this.textBox.addChild(_this.multiplySign);

        // _this.questionText_2 = _this.add.text(280, 19, stringEq2);
        // _this.applyingStyleBlue_2(_this.questionText_2);
        // _this.textBox.addChild(_this.questionText_2);

        _this.questionText2 = _this.add.text(450, 19, ' =');//438
        _this.questionText3 = _this.add.text(560, 19, _this.result_var + ' + ');//555
        _this.questionText4 = _this.add.text(690, 19, _this.resultSecond_var);//675
        // _this.questionText1.fill='#65B4C3';
        _this.questionText2.fill = '#65B4C3';
        _this.questionText3.fill = '#65B4C3';
        _this.questionText4.fill = '#65B4C3';
        // _this.textBox.addChild(_this.questionText1);
        _this.textBox.addChild(_this.questionText2);
        _this.textBox.addChild(_this.questionText3);
        _this.textBox.addChild(_this.questionText4);

        _this.addAnswerBoxAndHighlight();

        // });
    },
    //Adds the three answer boxes and highlight them.
    addAnswerBoxAndHighlight: function () {
        _this.AnswerBox1 = _this.add.sprite(527, 68, 'Text box_5');//525
        _this.AnswerBox2 = _this.add.sprite(628, 68, 'Text box_5');//623
        // _this.AnswerBox3 = _this.add.sprite(731, 68, 'Text box_5');//726        

        _this.AnswerBox1.inputEnabled = true;
        _this.AnswerBox2.inputEnabled = true;
        //  _this.AnswerBox3.inputEnabled = true;

        _this.AnswerBox1.frame = 1;
        _this.AnswerBox2.frame = 0;
        // _this.AnswerBox3.frame = 0;

        _this.AnswerBox1.input.useHandCursor = true;
        _this.AnswerBox2.input.useHandCursor = true;
        //  _this.AnswerBox3.input.useHandCursor = true;
        _this.addNumberPad();

        _this.AnswerBox1.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.AnswerBox1.frame = 1;
            _this.AnswerBox2.frame = 0;
            // _this.AnswerBox3.frame = 0;
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
            // _this.AnswerBox3.frame = 0;
            _this.wrongbtn.events.onInputDown.removeAll();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
            for (let i = 1; i <= 12; i++) {
                _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
                _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked2, _this);
            }
        });

    },
    //Adding the numberpad.
    addNumberPad: function () {
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        _this.AnswerBox1.removeChild(_this.enterTxt1);
        _this.AnswerBox2.removeChild(_this.enterTxt2);
        //  _this.AnswerBox3.removeChild(_this.enterTxt3);

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
        //_this.AnswerBox3.name = '';

        _this.fourNotEntered1 = false;
        _this.fourNotEntered2 = false;
        _this.fourNotEntered3 = false;

        _this.signNotselected1 = false;
        _this.signNotselected2 = false;
        _this.signNotselected3 = false;

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

    //Tween  the numberpad.
    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);
    },

    //part b validation will do here.
    rightbtnClicked: function () {

        if (_this.finalval1.length == 0 && _this.result_1 != 1 && _this.result_1 != -1) {
            _this.wrongSound.play();
            _this.disableInputs1();
            _this.disableInputs2();
            _this.AnswerBox1.frame = 1;
            _this.AnswerBox2.frame = 0;
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
        if (_this.finalval2.length == 0 && _this.result_2 != 1 && _this.result_2 != -1) {
            _this.wrongSound.play();
            _this.disableInputs1();
            _this.disableInputs2();
            _this.AnswerBox1.frame = 1;
            _this.AnswerBox2.frame = 0;
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
        if (Number(_this.signVal1 + _this.finalval1) == 0 && (_this.signVal1 == '-' || _this.signVal1 == '+')) {
            _this.wrongSound.play();
            _this.disableInputs1();
            _this.disableInputs2();
            _this.AnswerBox1.frame = 1;
            _this.AnswerBox2.frame = 0;
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
        if (Number(_this.signVal2 + _this.finalval2) == 0 && (_this.signVal2 == '-' || _this.signVal2 == '+')) {
            _this.wrongSound.play();
            _this.disableInputs1();
            _this.disableInputs2();
            _this.AnswerBox1.frame = 1;
            _this.AnswerBox2.frame = 0;
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
        if (!(_this.signVal1 == '-' && _this.finalval1.length == 0 && _this.result_1 == -1 || _this.signVal1.length == 0 && _this.finalval1.length == 0 && _this.result_1 == 1 || Number(_this.signVal1 + _this.finalval1) == _this.result_1)) {
            _this.wrongSound.play();
            _this.disableInputs1();
            _this.disableInputs2();
            _this.AnswerBox1.frame = 1;
            _this.AnswerBox2.frame = 0;
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
        if (!(_this.signVal2 == '-' && _this.finalval2.length == 0 && _this.result_2 == -1 || _this.signVal2.length == 0 && _this.finalval2.length == 0 && _this.result_2 == 1 || Number(_this.signVal2 + _this.finalval2) == _this.result_2)) {
            _this.wrongSound.play();
            _this.disableInputs1();
            _this.disableInputs2();
            _this.AnswerBox1.frame = 1;
            _this.AnswerBox2.frame = 0;
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
        // else {
        _this.rightbtn.destroy();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        _this.celebrationSound.play();
        _this.lastScreenCelebration();
        _this.numGroup.destroy();
        //}

    },

    lastScreenCelebration: function () {
        _this.celebrationSound.play();
        //edited for baseurl apk
        _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
        //..............

        console.log(_this.noofAttempts, "_this.noofAttempts.................");
        console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
        console.log(_this.sceneCount, "_this.sceneCount.................");
        console.log(_this.questionid, "_this.questionid.................");

        _this.starActions();
        _this.pauseVoice();
        _this.time.events.add(2000, () => {
            _this.clearAll();
            if (_this.count1 == 6) {
                // _this.state.start('AL_MUL_2_G8Score');
                _this.state.start('score', true, false, gameID, _this.microConcepts);
                console.log("score");
            }
            else {
                _this.time.events.add(800, () => {
                    _this.Initial_randomizing();
                });
            }
        });
    },

    clearAll: function () {
        console.log("ClearAll");

        _this.textBox.destroy();

        _this.AnswerBox1.destroy();
        _this.AnswerBox2.destroy();

        _this.space1.destroy();
        _this.space1Boxes.destroy();
        _this.space2Boxes.destroy();
        _this.space3Boxes.destroy();

        _this.count1++;
        _this.verticalY = 215;
        _this.horizontalX = 305;

        _this.x2Flag = 0;
        _this.xyFlag = 0;
        _this.xFlag = 0;
        _this.yFlag = 0;
        _this.constFlag = 0;
        _this.y2Flag = 0;

        _this.result_1xFlag = 0;
        _this.result_1xyFlag = 0;
        _this.result_1yFlag = 0;
        _this.result_1x2Flag = 0;
        _this.result_1conFlag = 0;

        _this.result_2xFlag = 0;
        _this.result_2xyFlag = 0;
        _this.result_2yFlag = 0;
        _this.result_2x2Flag = 0;
        _this.result_2conFlag = 0;

        _this.pairedValues_dup = [];//const
        _this.pairedValues_2_dup = [];//x horizontal
        _this.pairedValues_3_dup = [];//x vertical
        _this.pairedValues_4_dup = [];//x2
        _this.pairedValues_5_dup = [];//y horizontal        
        _this.pairedValues_6_dup = [];//y vertical
        _this.pairedValues_7_dup = [];//y2
        _this.pairedValues_8_dup = [];//yx horizontal
        _this.pairedValues_9_dup = [];//xy vertical

        _this.storeObjPositions1 = [];//const
        _this.storeObjects1 = [];//const

        _this.storeObjPositions2 = [];//const
        _this.storeObjects2 = [];//const

        _this.storeObjPositions3 = [];//x horizontal
        _this.storeObjects3 = [];//x horizontal

        _this.storeObjPositions4 = [];//x horizontal
        _this.storeObjects4 = [];//x horizontal

        _this.storeObjPositions5 = [];//x vertical
        _this.storeObjects5 = [];//x vertical

        _this.storeObjPositions6 = [];//x vertical
        _this.storeObjects6 = [];//x vertical

        _this.storeObjPositions7 = [];//x2 
        _this.storeObjects7 = [];//x2 
        _this.storeObjPositions8 = [];//x2 
        _this.storeObjects8 = [];//x2 

        _this.storeObjPositions9 = [];//y horizontal
        _this.storeObjects9 = [];//y horizontal

        _this.storeObjPositions10 = [];//y horizontal
        _this.storeObjects10 = [];//y horizontal

        _this.storeObjPositions11 = [];//y vertical
        _this.storeObjects11 = [];//y vertical

        _this.storeObjPositions12 = [];//y vertical
        _this.storeObjects12 = [];//y vertical

        _this.storeObjPositions13 = [];//y2 
        _this.storeObjects13 = [];//y2 
        _this.storeObjPositions14 = [];//y2 
        _this.storeObjects14 = [];//y2 

        _this.storeObjPositions15 = [];//xy horizontal
        _this.storeObjects15 = [];//xy horizontal

        _this.storeObjPositions16 = [];//xy horizontal
        _this.storeObjects16 = [];//xy horizontal

        _this.storeObjPositions17 = [];//xy vertical
        _this.storeObjects17 = [];//xy vertical

        _this.storeObjPositions18 = [];//xy vertical
        _this.storeObjects18 = [];//xy vertical

        _this.tickValuation_flag = 0;//this is used for onclick function. first row wise and column wise.

        _this.checkObject_1 = [];//cheking the object for dragging negative
        _this.checkObject_2 = [];//cheking the object for dragging positive

        _this.destroyedPositions = [];//x2
        _this.destroyedPositions_2_vr = [];//x
        _this.destroyedPositions_2_hr = [];//x
        _this.destroyedPositions_3_vr = [];//xy
        _this.destroyedPositions_3_hr = [];//xy
        _this.destroyedPositions_4_vr = [];//y
        _this.destroyedPositions_4_hr = [];//y
        _this.destroyedPositions_5 = [];//y2
        _this.destroyedPositions_6 = [];//constant

        _this.toDestroy = [];

        _this.erasedPositions = [];
        _this.erasedObjectInitialPosition = [];

        // part A Drag 
        _this.greenXSqX = 305;
        _this.greenXSqY = 213;//213
        _this.greenXYSqX = 305;
        _this.greenXYSqY = 213;//213
        _this.greenX2SqX = 305;
        _this.greenX2SqY = 213;//213
        _this.space1Box_y = [];
        _this.yCount = 0;//x2
        _this.yCount_2 = 0;//xy
        _this.yCount_3 = 0;//x
        _this.yCount_4 = 0;//y
        _this.yCount_5 = 0;//y2
        _this.yCount_6 = 0;//const
        _this.greenxFlag = 0;
        _this.greenxyFlag = 0;
        _this.greenx2Flag = 0;
        _this.greenyFlag = 0;
        _this.greeny2Flag = 0;
        _this.greenxconsFlag = 0;

        _this.Question_flag = 0;
    },

    applyingStyleBlue_2: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '30px';
    },

    applyingStyle: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '23px';
    },
    applyingStyle_Pink: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#E11584';
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '18px';
    },
    applyingStyle_White: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#ffffff';
        target.fontWeight = 'normal';
        target.visible = true;
    },

    applyingStyle_Orange: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#ff8c00';
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '25px';
    },

    applyingStyle_blue: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '25px';
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
    applyingStyleBlue: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '26px';
    },

    checkOverlap: function (spriteA, spriteB) {
        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },


    starActions: function (target) {
        console.log("get a star")
        //edited for baseurl apk
        _this.AnsTimerCount = 0;

        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        //_this.anim.play();

        anim.play();

        //edited for baseurl apk
        _this.microConcepts = "AlgebraG8";
    },


    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },

    DemoVideo: function () {
        // DEMO AUDIOS
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL-2-G8/" + _this.languageSelected + "/AL_MUL2_G8_d1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL-2-G8/" + _this.languageSelected + "/AL_MUL2_G8_d2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL-2-G8/" + _this.languageSelected + "/AL_MUL2_G8_d3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        // QUESTION AUDIOS
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL-2-G8/" +
            _this.languageSelected + "/AL_MUL2_G8_a1.mp3");//multyplay algeb expre
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL-2-G8/" +
            _this.languageSelected + "/AL_MUL2_G8_a2.mp3");//place any one side
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL-2-G8/" +
            _this.languageSelected + "/AL_MUL2_G8_a3.mp3");//place other side
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL-2-G8/" +
            _this.languageSelected + "/AL_MUL2_G8_a4.mp3");//fill the area
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL-2-G8/" +
            _this.languageSelected + "/AL_MUL2_G8_a5.mp3");//zero pair
        _this.q5Sound.appendChild(_this.q5Soundsrc);

        _this.q6Sound = document.createElement('audio');
        _this.q6Soundsrc = document.createElement('source');
        _this.q6Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MUL-2-G8/" +
            _this.languageSelected + "/AL_MUL2_G8_a6.mp3");//enter ans
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