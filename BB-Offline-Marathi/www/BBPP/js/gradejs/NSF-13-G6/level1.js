Game.NSF_13_G6level1 = function () { };


Game.NSF_13_G6level1.prototype =
{

    init: function (game) {
        _this = this;

        //* language is passed as parameter.
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

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl + "sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);


        _this.nextoptionSound = document.createElement('audio');
        _this.nextoptionSoundsrc = document.createElement('source');
        _this.nextoptionSoundsrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.nextoptionSound.appendChild(_this.nextoptionSoundsrc);

        telInitializerbbpp.gameIdInit("NSF_13_G6", gradeSelected);
        console.log(gameID, "gameID...");

    },
    create: function (game) {

        //* show the demo video
        _this.time.events.add(1, function () {
            _this.ViewDemoVideo();
        });

        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(1500, function () {
            _this.gameCreate();
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
        _this.wholeNoQues = -1;
        //* play the audio only once.( when answer is wrong, it does not repeat the audio)
        _this.audio_Q1_Played = false;
        _this.audio_Q2_Played = false;
        _this.audio_Q3_Played = false;
        //* show the drag action demo only once. dont repeat when answer given is wrong
        _this.dragActionShown = false;

        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.number;
        _this.selectedAns1 = '';

        _this.qn_flag = -1;
        _this.index2 = 0;

        _this.numValues1 = [];
        _this.numValues2 = [];
        _this.numValues3 = [];
        _this.numCount1 = 0;
        _this.numCount2 = 0;
        _this.numCount3 = 0;

        // //* BB plus variables
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
         _this.microConcepts;
        // _this.grade;


        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        _this.tickbtn = _this.add.sprite(660, 440, 'tickbtn');
        _this.tickbtn.visible = false;


        _this.navBar = _this.add.sprite(0, 0, 'navBar');

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
            ////console.log("Hello");
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();


                console.log(_this.qn_flag);
                if (_this.qn_flag == 1) {
                    console.log("first voice note");
                    if (_this.Question11) {
                        _this.Question11.pause();
                        _this.Question11 = null;
                        _this.Question11src = null;
                    }
                    if (_this.Question1) {
                        _this.Question1.pause();
                        _this.Question1 = null;
                        _this.Question1src = null;
                    }
                    _this.askQn1();
                    //                    _this.delayq2(); 
                    // _this.delayAnim(); 
                }

                if (_this.qn_flag == 2) {
                    if (_this.Question11) {
                        _this.Question11.pause();
                        _this.Question11 = null;
                        _this.Question11src = null;
                    }
                    if (_this.Question1) {
                        _this.Question1.pause();
                        _this.Question1 = null;
                        _this.Question1src = null;
                    }
                    _this.askQn2();
                }
                if (_this.qn_flag == 3) {
                    if (_this.Question2) {
                        _this.Question2.pause();
                        _this.Question2 = null;
                        _this.Question2src = null;
                    }
                    _this.askQn3();
                }

                _this.time.events.add(4000, function () {
                    _this.speakerbtnClicked = false;
                    _this.EnableVoice();
                });
            }


        }, _this);

        _this.enterTxt1 = null;
        _this.enterTxt2 = null;
        _this.enterTxt3 = null;
        _this.numGroup = _this.add.group();

        _this.boxesObj = [];
        _this.grayboxesObj = [];
        _this.grayboxes2Obj = [];

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);
        _this.mybox3 = _this.add.image(655, 350, 'yellowtextbox');
        _this.mybox3.scale.setTo(1.0);
        _this.mybox3.visible = false;


        _this.enterFractionBox1 = _this.add.sprite(660, 350, 'SquareBox');//825 230
        _this.enterFractionBox1.scale.setTo(0.8);
        _this.enterFractionBox1.visible = false;
        _this.enterFractionBox1.frame = 1;

        _this.graphics3 = _this.add.graphics();
        _this.graphics3.lineStyle(4, 0x65B4C3);
        _this.graphics3.moveTo(698, 395);
        _this.graphics3.lineTo(664, 395);
        _this.graphics3.visible = false;

        _this.enterFractionBox2 = _this.add.sprite(660, 400, 'SquareBox');//660 400
        _this.enterFractionBox2.scale.setTo(0.8);
        _this.enterFractionBox2.visible = false;
        _this.enterFractionBox2.frame = 0;

        _this.time.events.add(2000, _this.getQuestion);

        _this.fractionX = [70, 160];
        _this.fraction2X = [285, 370];
        _this.fractionY = [90, 150, 210, 270];
        _this.fraction2Y = [90, 150, 210, 270];

        _this.denominator = false;
        _this.numerator = false;
        _this.numpad = 0;
        _this.wholeCnt = 0; //use for evaluation for whole ans
        _this.wrongAns = 0; //used for wrong answer for 1/4 to ask same 1/4 qn //we have to asset for 1/4 

    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () {
        ////console.log("SBtn: " + _this.speakerbtnClicked + " RBtn: " + _this.rightbtnClicked);
        if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
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

    askQn1: function () {
        //console.log("Subtract the second fraction from the first fraction");
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-13-G6/" + _this.languageSelected + "/NSF-13-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);
        _this.Question1.play();
        _this.Question1.addEventListener('ended', _this.askQn11);
    },

    askQn11: function () {
        //console.log("Remove the fraction pieces and drag to the second tray");
        _this.Question1.removeEventListener('ended', _this.askQn11);
        _this.Question11 = document.createElement('audio');
        _this.Question11src = document.createElement('source');
        _this.Question11src.setAttribute("src", window.baseUrl + "questionSounds/NSF-13-G6/" + _this.languageSelected + "/NSF-13-G6-b.mp3");
        _this.Question11.appendChild(_this.Question11src);
        _this.Question11.play();
    },

    //question 2
    askQn2: function () {
        //console.log('Drag the remaining fraction pieces to the whole');
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NSF-13-G6/" + _this.languageSelected + "/NSF-13-G6-c.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
    },
    askQn3: function () {
        //console.log('Enter the answer');
        _this.Question3 = document.createElement('audio');
        _this.Question3src = document.createElement('source');
        _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NSF-13-G6/" + _this.languageSelected + "/NSF-13-G6-d.mp3");
        _this.Question3.appendChild(_this.Question3src);
        _this.Question3.play();
    },

    //    delayq2 : function()
    //    {
    //        setTimeout(function(){
    //            _this.askQn11();
    //          }, 4200)
    //    },

    delayq3: function () {
        setTimeout(function () {
            _this.askQn3();
            //document.getElementById( _this.Question11).play();
            //console.log('your audio is started just now');
        }, 1000)


    },

    getQuestion: function () {
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
        _this.Initial_randomizing();

        _this.questionid = 1;
    },


    stopVoice: function () {
        if (_this.Question1) {
            if (_this.Question1.contains(_this.Question1src)) {
                _this.Question1.removeChild(_this.Question1src);
                _this.Question1src = null;
            }

            if (!_this.Question1.paused) {
                _this.Question1.pause();
                _this.Question1.currentTime = 0.0;
            }
            _this.Question1 = null;
            _this.Question1src = null;
        }

        if (_this.Question11) {
            if (_this.Question11.contains(_this.Question11src)) {
                _this.Question11.removeChild(_this.Question11src);
                _this.Question11src = null;
            }

            if (!_this.Question11.paused) {
                _this.Question11.pause();
                _this.Question11.currentTime = 0.0;
            }
            _this.Question11 = null;
            _this.Question11src = null;
        }

        if (_this.Question2) {
            if (_this.Question2.contains(_this.Question2src)) {
                _this.Question2.removeChild(_this.Question2src);
                _this.Question2src = null;
            }

            if (!_this.Question2.paused) {
                _this.Question2.pause();
                _this.Question2.currentTime = 0.0;
            }
            _this.Question2 = null;
            _this.Question2src = null;
        }

        if (_this.Question3) {
            if (_this.Question3.contains(_this.Question3src)) {
                _this.Question3.removeChild(_this.Question3src);
                _this.Question3src = null;
            }

            if (!_this.Question3.paused) {
                _this.Question3.pause();
                _this.Question3.currentTime = 0.0;
            }
            _this.Question3 = null;
            _this.Question3src = null;
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
        for (let i = 0; i < count; i++) {
            _this.starsGroup.create(_this.world.centerX - 15, 10, 'starAnim');
            for (let j = 0; j < i; j++) {
                if (_this.starsGroup.getChildAt(j)) {
                    _this.starsGroup.getChildAt(j).x -= 15;
                    _this.starsGroup.getChildAt(i).x += 15;
                }
            }
        }

    },

    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NSF_13_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Fractions";
         _this.microConcepts = "Number Systems";
        _this.count1++;
        anim.play();
    },

    celebration1: function () {
        _this.counterCelebrationSound.play();
        // _this.starActions(_this.count1);
    },

    celebration: function () {
        //_this.numGroup.destroy();
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },

    Initial_randomizing: function () {
        let min = 1;
        _this.numeratorIndexArray = [0, 1, 2, 3, 4, 5];
        _this.numeratorIndexArray = _this.shuffle(_this.numeratorIndexArray);
        let DenomiatorsArray = [3, 4, 5, 6, 7, 8, 9];
        _this.DenomiatorsArray = _this.shuffle(DenomiatorsArray);
        _this.NumeratorValue1Array = [];
        _this.NumeratorValue2Array = [];
        _this.PossibleDenomiators = [];

        // _this.NumeratorValue1 = Math.floor(Math.random() * (max - min) + min);
        // let admax = _this.NumeratorValue1 + 1;
        // _this.NumeratorValue2 = Math.floor(Math.random() * (admax - min) + min);    

        for (let i = 0; i < 6; i++) {
            _this.NumValue1 = Math.floor(Math.random() * (_this.DenomiatorsArray[i] - 2) + 2);// - min) + min);
            _this.PossibleDenomiators.push(_this.DenomiatorsArray[i]);
            // console.log(_this.NumeratorValue1 );
            _this.NumeratorValue1Array.push(_this.NumValue1);
            if (i == 0) {
                _this.NumValue2 = _this.NumValue1;
                _this.NumeratorValue2Array.push(_this.NumValue2);
            }
            else {
                console.log("here");
                _this.NumValue2 = Math.floor(Math.random() * (_this.NumValue1 - 1) + 1); //- min) + min);
                console.log(_this.NumValue2);
                _this.NumeratorValue2Array.push(_this.NumValue2);
            }
        }
        console.log(_this.NumeratorValue1Array.length, _this.NumeratorValue2Array.length);
        for (var i = 0; i < _this.NumeratorValue1Array.length; i++) {
            console.log(_this.NumeratorValue1Array[i] + "/" + _this.PossibleDenomiators[i], _this.NumeratorValue2Array[i] + "/" + _this.PossibleDenomiators[i]);
        }
        _this.randomizing_elements();
        _this.displayTickmark();
    },

    randomizing_elements: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
        //let PossibleDenomiators = [3, 4, 5, 6, 7, 8 , 9];
        //_this.DenominatorValue = Math.floor(Math.random() * (9 - 3 + 1) + 3);
        _this.numeratorIndex = _this.numeratorIndexArray[_this.count1];
        console.log("index" + _this.numeratorIndex);
        console.log("for loo in randomizing fn");
        for (var i = 0; i < _this.NumeratorValue1Array.length; i++) {
            console.log(_this.NumeratorValue1Array[i] + "/" + _this.PossibleDenomiators[i], _this.NumeratorValue2Array[i] + "/" + _this.PossibleDenomiators[i]);
        }
        console.log(_this.PossibleDenomiators[_this.numeratorIndex]);
        _this.DenominatorValue = _this.PossibleDenomiators[_this.numeratorIndex];
        console.log(_this.NumeratorValue1Array[_this.count1], _this.NumeratorValue2Array[_this.count1])
        console.log(_this.numeratorIndex, _this.DenominatorValue, _this.NumeratorValue1, _this.NumeratorValue2);

        if (_this.count1 < 1 && _this.audio_Q1_Played == false) {
            _this.audio_Q1_Played = true;
            _this.askQn1();
            //            _this.delayq2(); 

        }
        _this.qn_flag = 1;

        if (_this.wrongAns == 1) {
            _this.displayfractionsOnScreen(_this.trayRepeat, 4); // asking same 1/4 when given wrong drag
        }
        else {
            _this.DecideFractionBox();
        }
        console.log(_this.DenominatorValue);
    },

    DecideFractionBox: function () {
        switch (_this.DenominatorValue) {
            case 3: _this.displayfractionsOnScreen('1x3pieces', 3);
                break;
            case 4: let trayPiecesArray = ['1x4traypiecespink', '1X4traypieces1'];
                let trayPiece = trayPiecesArray[Math.floor(Math.random() * trayPiecesArray.length)];
                _this.trayRepeat = trayPiece;
                _this.displayfractionsOnScreen(trayPiece, 4);
                break;
            case 5: _this.displayfractionsOnScreen('1x5pieces', 5);
                break;
            case 6: _this.displayfractionsOnScreen('1x6traypiecesblue', 6);
                break;
            case 7: _this.displayfractionsOnScreen('1x7pieces', 7);
                break;
            case 8: _this.displayfractionsOnScreen('1x8pieces', 8);
                break;
            case 9: _this.displayfractionsOnScreen('1x9rectangle', 9);
                break;
        }
    },

    getBaseDisplayed: function (baseName1) {
        _this.emptyBox1 = _this.add.image(680, 200, baseName1);
        _this.emptyBox1.anchor.setTo(0.5);
        _this.emptyBox1.scale.setTo(1.0);
        _this.emptyBox1.visible = true;
    },

    dragtoBottomTween: function () {
        // _this.handGroup = _this.add.group();
        //console.log("hand");
        _this.time.events.add(500, function () {
            _this.hand = _this.add.image(620, 440, 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
        });
        _this.time.events.add(1000, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.hand);
            tempDragAction.to({ x: 700, y: 460 }, 500, 'Linear', true, 0);
            tempDragAction.start();
        });
        // _this.handGroup.destroy();

        _this.time.events.add(1500, function () {
            _this.hand.destroy();
        });


    },

    onScreenDisplay: function (fractioName) {

        _this.trayBox1 = _this.add.image(40, 60, 'Tray');
        _this.trayBox1.scale.setTo(1.0);

        _this.trayBox2 = _this.add.image(255, 60, 'Tray');
        _this.trayBox2.scale.setTo(1.0);

        switch (fractioName) {
            case '1x4traypiecespink': _this.getBaseDisplayed('1x4squarebase');
                break;

            case '1X4traypieces1': _this.getBaseDisplayed('1x4circlebase');
                break;

            case '1x6traypiecesblue': _this.getBaseDisplayed('1x6rectanglebase');
                break;

            case '1x9rectangle': _this.getBaseDisplayed('1x9rectanglebase');
                break;

            case '1x3pieces': _this.getBaseDisplayed('1x3Base');
                break;

            case '1x5pieces': _this.getBaseDisplayed('1x5Base');
                break;

            case '1x7pieces': _this.getBaseDisplayed('1x7Base');
                break;

            case '1x8pieces': _this.getBaseDisplayed('1x8Base');
                break;
        }
    },

    displayfraction: function (denominator, numerator) {

        ////console.log("hey im here");
        _this.box_flag = 1;
        console.log(denominator, numerator)
        // for Yellobox
        _this.mybox1 = _this.add.image(95, 350, 'yellowtextbox');
        _this.mybox1.scale.setTo(1.0);
        _this.mybox1.visible = true;
        //for  nume
        _this.displaynumerator1 = _this.add.text(113, 360, numerator, { fontSize: '26px' });
        _this.displaynumerator1.align = 'right';
        _this.displaynumerator1.font = "Akzidenz-Grotesk BQ";
        _this.displaynumerator1.fill = '#FF0000';
        _this.displaynumerator1.fontWeight = 'Normal';
        _this.displaynumerator1.visible = true;
        //for line
        _this.graphics1 = _this.add.graphics();
        _this.graphics1.lineStyle(4, 0xff0000);
        _this.graphics1.moveTo(138, 392);
        _this.graphics1.lineTo(104, 392);

        //for denom
        _this.displaydenominator1 = _this.add.text(112, 396, denominator, { fontSize: '26px' });
        _this.displaydenominator1.align = 'right';
        _this.displaydenominator1.font = "Akzidenz-Grotesk BQ";
        _this.displaydenominator1.fill = '#FF0000';
        _this.displaydenominator1.fontWeight = 'Normal';
        _this.displaydenominator1.visible = true;


    },
    displayfraction2: function (denominator, numerator) {
        _this.box_flag = 2;
        console.log(denominator, numerator)
        //for yellobox
        _this.mybox2 = _this.add.image(310, 350, 'yellowtextbox');
        _this.mybox2.scale.setTo(1.0);
        _this.mybox2.visible = true;
        //for line
        _this.graphics2 = _this.add.graphics();
        _this.graphics2.lineStyle(4, 0xff0000);
        _this.graphics2.moveTo(353, 392);
        _this.graphics2.lineTo(319, 392);
        //for  nume
        _this.displaynumerator2 = _this.add.text(328, 360, numerator, { fontSize: '26px' });
        _this.displaynumerator2.align = 'right';
        _this.displaynumerator2.font = "Akzidenz-Grotesk BQ";
        _this.displaynumerator2.fill = '#FF0000';
        _this.displaynumerator2.fontWeight = 'Normal';
        _this.displaynumerator2.visible = true;
        //for denom
        _this.displaydenominator2 = _this.add.text(328, 396, denominator, { fontSize: '26px' });
        _this.displaydenominator2.align = 'right';
        _this.displaydenominator2.font = "Akzidenz-Grotesk BQ";
        _this.displaydenominator2.fill = '#FF0000';
        _this.displaydenominator2.fontWeight = 'Normal';
        _this.displaydenominator2.visible = true;
    },

    displayfractionsOnScreen: function (fractionName, denominator) {
        _this.fractionName = fractionName;
        ////console.log( _this.fractionName, "inside displayfracton");
        _this.onScreenDisplay(_this.fractionName);
        _this.fractionGroup = _this.add.group();
        _this.grayfractiongroup = _this.add.group();
        _this.fractionBoxGroup = _this.add.group();
        _this.DenominatorValue = denominator;
        _this.Counter = 0;

        ////console.log(_this.DenominatorValue);
        let row = 0;
        let col = 0;

        _this.NumeratorValue1 = _this.NumeratorValue1Array[_this.numeratorIndex];
        _this.NumeratorValue2 = _this.NumeratorValue2Array[_this.numeratorIndex];

        console.log(_this.NumeratorValue1, _this.NumeratorValue2);
        for (let i = 1; i <= _this.NumeratorValue1; i++) {
            ////console.log("numerator1 =", _this.NumeratorValue1);
            if (_this.fractionboxName == '1X4traypieces1') {
                _this.grayfractionbox = _this.add.sprite(_this.fractionX[row], _this.fractionY[col], '1X4traypieces1');
                _this.grayfractionbox.frame = 1;
                _this.grayfractionbox.width = 36;
                _this.grayfractionbox.height = 42;
                _this.grayboxes2Obj.push(_this.grayfractionbox);

                _this.fractionbox = _this.add.sprite(_this.fractionX[row], _this.fractionY[col], '1X4traypieces1');
                _this.fractionbox.frame = 0;
                _this.fractionbox.width = 36;
                _this.fractionbox.height = 42;

            }
            else {
                _this.grayfractionbox = _this.add.sprite(_this.fractionX[row], _this.fractionY[col], _this.fractionName);
                _this.grayfractionbox.frame = 1;
                _this.grayfractionbox.width = 36;
                _this.grayfractionbox.height = 42;

                _this.fractionbox = _this.add.sprite(_this.fractionX[row], _this.fractionY[col], _this.fractionName);
                _this.fractionbox.frame = 0;
                _this.fractionbox.width = 36;
                _this.fractionbox.height = 42;
            }
            _this.fractionBoxGroup.addChild(_this.fractionbox);
            _this.grayfractiongroup.addChild(_this.grayfractionbox);
            _this.fractionbox.inputEnabled = true;
            _this.fractionbox.input.useHandCursor = true;
            _this.fractionbox.visible = true;
            _this.fractionbox.input.enableDrag(true);
            if (_this.NumeratorValue1 == _this.NumeratorValue2) {
                _this.wholeCnt = _this.NumeratorValue2;
            }

            _this.fractionbox.events.onDragStop.add(_this.dragStop2, _this);
            row += 1;
            if (row >= 2) {
                row = 0;
                col = col + 1;
            }

        }
        _this.displayMinusSign();

        _this.displayfraction(_this.DenominatorValue, _this.NumeratorValue1);
        _this.displayfraction2(_this.DenominatorValue, _this.NumeratorValue2);
        if (_this.count1 == 0 && _this.dragActionShown == false) {
            _this.drag_cubesAction_Ver();
            _this.dragActionShown = true;
        }

    },

    drag_cubesAction_Ver: function () {
        _this.tempCubeGroup = _this.add.group();
        _this.tempCube = _this.add.sprite(_this.fractionX[0], _this.fractionY[0], _this.fractionName);
        _this.tempCube.scale.setTo(0.8, 0.6);

        if (_this.fractionName == '1X4traypieces1' || _this.fractionName == '1x4traypiecespink') {
            _this.tempCube.scale.setTo(0.6, 0.7);
        }
        if (_this.fractionName == '1x9rectangle') {
            _this.tempCube.scale.setTo(1.0, 0.6);
        }
        if (_this.fractionName == '1x3pieces' || _this.fractionName == '1x5pieces' || _this.fractionName == '1x7pieces' || _this.fractionName == '1x8pieces') {
            _this.tempCube.x = _this.fractionX[0] - 1;
            _this.tempCube.scale.setTo(1.0, 0.8);
        }
        // if( ||)
        // {
        //     //_this.tempCube.x = _this.fractionX[0]-1;
        //     _this.tempCube.scale.setTo(1.0,0.8);
        // }
        _this.tempCubeGroup.addChild(_this.tempCube);

        _this.time.events.add(1000, function () {
            _this.hand = _this.add.image(_this.fractionX[0] + 20, _this.fractionY[0], 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.tempCubeGroup.addChild(_this.hand);
        });

        switch (_this.fractionName) {

            case '1x4traypiecespink': _this.positionX = 285.5;
                _this.positionY = 90;
                break;

            case '1X4traypieces1': _this.positionX = 285.5;
                _this.positionY = 90;
                break;

            case '1x6traypiecesblue': _this.positionX = 285.5;
                _this.positionY = 90;
                break;

            case '1x9rectangle': _this.positionX = 285.5;
                _this.positionY = 90;
                break;

            case '1x3pieces': _this.positionX = 285.5;
                _this.positionY = 90;
                break;

            case '1x5pieces': _this.positionX = 285.5;
                _this.positionY = 90;
                break;

            case '1x7pieces': _this.positionX = 285.5;
                _this.positionY = 90;
                break;

            case '1x8pieces': _this.positionX = 285.5;
                _this.positionY = 90;
                break;
        }

        _this.time.events.add(1500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.tempCubeGroup);
            tempDragAction.to({ x: _this.positionX - _this.fractionX[0], y: _this.positionY - _this.fractionY[0] }, 1600, 'Linear', true, 0);
            tempDragAction.start();
        });

        _this.time.events.add(3000, function () {

            switch (_this.fractionName) {

                case '1x4traypiecespink':
                    _this.tempBox = _this.add.sprite(285.5, 90, '1x4traypiecespink');
                    _this.tempBox.scale.setTo(0.70, 0.60);
                    break;

                case '1X4traypieces1': _this.tempBox = _this.add.sprite(285.5, 90, '1X4traypieces1');
                    _this.tempBox.scale.setTo(0.70, 0.60);
                    break;

                case '1x6traypiecesblue':
                    _this.tempBox = _this.add.sprite(285.5, 90, '1x6traypiecesblue');
                    _this.tempBox.scale.setTo(0.70, 0.60);
                    break;

                case '1x9rectangle':
                    _this.tempBox = _this.add.sprite(285.5, 90, '1x9rectangle');
                    _this.tempBox.scale.setTo(0.70, 0.60);
                    break;
                case '1x3pieces':
                    _this.tempBox = _this.add.sprite(285.5, 90, '1x9rectangle');
                    _this.tempBox.scale.setTo(0.70, 0.60);
                    break;

                case '1x5pieces':
                    _this.tempBox = _this.add.sprite(285.5, 90, '1x9rectangle');
                    _this.tempBox.scale.setTo(0.70, 0.60);
                    break;

                case '1x7pieces':
                    _this.tempBox = _this.add.sprite(285.5, 90, '1x9rectangle');
                    _this.tempBox.scale.setTo(0.70, 0.60);
                    break;

                case '1x8pieces':
                    _this.tempBox = _this.add.sprite(285.5, 90, '1x9rectangle');
                    _this.tempBox.scale.setTo(0.70, 0.60);
                    break;

            }
            _this.tempCubeGroup.destroy();
            _this.tempBox.destroy();

        });

    },

    getRectangularBase1x6Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x6box = _this.add.sprite(545, 65.4, '1x6piecesblue');
                _this.rectangleBase1x6box.scale.setTo(1.008);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x6box = _this.add.sprite(589.8, 65.4, '1x6piecesblue');
                _this.rectangleBase1x6box.scale.setTo(1.008);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x6box = _this.add.sprite(634.6, 65.4, '1x6piecesblue');
                _this.rectangleBase1x6box.scale.setTo(1);
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x6box = _this.add.sprite(679.4, 65.4, '1x6piecesblue');
                _this.rectangleBase1x6box.scale.setTo(1);
                break;

            case 5: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x6box = _this.add.sprite(724.2, 65.4, '1x6piecesblue');
                _this.rectangleBase1x6box.scale.setTo(1);
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x6box = _this.add.sprite(769, 65.2, '1x6piecesblue');
                _this.rectangleBase1x6box.scale.setTo(1);
                break;

        }
        _this.boxesObj.push(_this.rectangleBase1x6box);

    },

    getRectangularBase1x9Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(468.5, 115, '1x9pieces1');
                _this.rectangleBase1x9box.scale.setTo(1.05, 1.02);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(514, 115, '1x9pieces1');
                _this.rectangleBase1x9box.scale.setTo(1.08, 1.02);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(561, 115, '1x9pieces1');
                _this.rectangleBase1x9box.scale.setTo(1.08, 1.02);
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(608, 115, '1x9pieces1');
                _this.rectangleBase1x9box.scale.setTo(1.08, 1.02);
                break;

            case 5: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(655, 115, '1x9pieces1');
                _this.rectangleBase1x9box.scale.setTo(1.08, 1.02);
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(702, 115, '1x9pieces1');
                _this.rectangleBase1x9box.scale.setTo(1.07, 1.02);
                break;

            case 7: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(748.5, 115, '1x9pieces1');
                _this.rectangleBase1x9box.scale.setTo(1.07, 1.02);
                break;

            case 8: sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(794.5, 115, '1x9pieces1');
                _this.rectangleBase1x9box.scale.setTo(1.07, 1.02);
                break;

            case 9: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(840, 115, '1x9pieces1');
                _this.rectangleBase1x9box.scale.setTo(1.08, 1.02);
                break;

        }
        _this.boxesObj.push(_this.rectangleBase1x9box);

    },

    getRectangularBase1x3Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x3box = _this.add.sprite(553, 73, '1x3rectangle');
                _this.rectangleBase1x3box.scale.setTo(1.6, 1.71);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x3box = _this.add.sprite(633, 73, '1x3rectangle');
                _this.rectangleBase1x3box.scale.setTo(1.7, 1.71);
                break;

            case 3:
                sprite.destroy();
                _this.rectangleBase1x3box = _this.add.sprite(718, 73, '1x3rectangle');
                _this.rectangleBase1x3box.scale.setTo(1.8, 1.71);
                break;
        }
        _this.boxesObj.push(_this.rectangleBase1x3box);
    },

    getRectangularBase1x5Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x5box = _this.add.sprite(545, 64, '1x5rectangle');
                _this.rectangleBase1x5box.scale.setTo(1.7, 1.81);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x5box = _this.add.sprite(594, 64, '1x5rectangle');
                _this.rectangleBase1x5box.scale.setTo(1.9, 1.81);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x5box = _this.add.sprite(649, 64, '1x5rectangle');
                _this.rectangleBase1x5box.scale.setTo(1.9, 1.81);
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x5box = _this.add.sprite(704, 64, '1x5rectangle');
                _this.rectangleBase1x5box.scale.setTo(1.9, 1.81);
                break;

            case 5: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x5box = _this.add.sprite(759, 64, '1x5rectangle');
                _this.rectangleBase1x5box.scale.setTo(1.9, 1.81);
                break;

        }
        _this.boxesObj.push(_this.rectangleBase1x5box);

    },

    getRectangularBase1x7Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(468, 115, '1x7rectangle');
                _this.rectangleBase1x7box.scale.setTo(1.02, 1.02);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(525, 115, '1x7rectangle');
                _this.rectangleBase1x7box.scale.setTo(1.1, 1.02);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(586, 115, '1x7rectangle');
                _this.rectangleBase1x7box.scale.setTo(1.1, 1.02);
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(647, 115, '1x7rectangle');
                _this.rectangleBase1x7box.scale.setTo(1.1, 1.02);
                break;

            case 5: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(707, 115, '1x7rectangle');
                _this.rectangleBase1x7box.scale.setTo(1.1, 1.02);
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(767, 115, '1x7rectangle');
                _this.rectangleBase1x7box.scale.setTo(1.1, 1.02);
                break;

            case 7: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(828, 115, '1x7rectangle');
                _this.rectangleBase1x7box.scale.setTo(1.1, 1.02);
                break;

        }
        _this.boxesObj.push(_this.rectangleBase1x7box);

    },

    getRectangularBase1x8Filled: function (counter, sprite) {
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(469, 115, '1x8rectangle');
                _this.rectangleBase1x8box.scale.setTo(1.03, 1.01);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(519, 115, '1x8rectangle');
                _this.rectangleBase1x8box.scale.setTo(1.1, 1.01);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(572, 115, '1x8rectangle');
                _this.rectangleBase1x8box.scale.setTo(1.1, 1.01);
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(625, 115, '1x8rectangle');
                _this.rectangleBase1x8box.scale.setTo(1.11, 1.01);
                break;

            case 5: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(678, 115, '1x8rectangle');
                _this.rectangleBase1x8box.scale.setTo(1.1, 1.01);
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(731, 115, '1x8rectangle');
                _this.rectangleBase1x8box.scale.setTo(1.1, 1.01);
                break;

            case 7: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(783, 115, '1x8rectangle');
                _this.rectangleBase1x8box.scale.setTo(1.1, 1.01);
                break;

            case 8: sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(835, 115, '1x8rectangle');
                _this.rectangleBase1x8box.scale.setTo(1.1, 1.01);
                break;
        }
        _this.boxesObj.push(_this.rectangleBase1x8box);

    },

    getCircleBase1x4Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.circleBase1x4box = _this.add.sprite(542, 64, '1X4traypieces1');
                _this.circleBase1x4box.scale.setTo(2.26);
                break;

            case 2: sprite.destroy();
                _this.circleBase1x4box = _this.add.sprite(676, 64, '1X4traypieces2');
                _this.circleBase1x4box.scale.setTo(2.26);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.circleBase1x4box = _this.add.sprite(542, 200, '1X4traypieces3');
                _this.circleBase1x4box.scale.setTo(2.26);
                break;

            case 4: sprite.destroy();
                _this.circleBase1x4box = _this.add.sprite(676, 200, '1X4traypieces4');
                _this.circleBase1x4box.scale.setTo(2.26);
                break;

        }
        _this.boxesObj.push(_this.circleBase1x4box);

    },

    getSquareBase1x4Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.squareBase1x4box = _this.add.sprite(543.5, 63.5, '1X4piecespink');
                _this.squareBase1x4box.scale.setTo(1);
                break;

            case 2: sprite.destroy();
                _this.squareBase1x4box = _this.add.sprite(678, 63.5, '1X4piecespink');
                _this.squareBase1x4box.scale.setTo(1);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.squareBase1x4box = _this.add.sprite(543.5, 200, '1X4piecespink');
                _this.squareBase1x4box.scale.setTo(1);
                break;

            case 4: sprite.destroy();
                _this.squareBase1x4box = _this.add.sprite(678, 200, '1X4piecespink');
                _this.squareBase1x4box.scale.setTo(1);
                break;

        }
        _this.boxesObj.push(_this.squareBase1x4box);

    },

    //for pink to be filled in tray 2
    gettray2Filled1: function (counter, sprite) {
        //console.log(counter,_this.index2);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.traypiecespink1box2 = _this.add.sprite(285.5, 90, '1x4traypiecespink');
                _this.traypiecespink1box2.scale.setTo(0.65, 0.70);
                _this.grayboxesObj.push(_this.traypiecespink1box2);
                break;
            case 2: sprite.destroy();
                _this.traypiecespink2box2 = _this.add.sprite(350, 90, '1x4traypiecespink');
                _this.traypiecespink2box2.scale.setTo(0.65, 0.70);
                _this.grayboxesObj.push(_this.traypiecespink2box2);
                break;
            case 3: sprite.destroy();
                _this.traypiecespink3box2 = _this.add.sprite(285.5, 150, '1x4traypiecespink');
                _this.traypiecespink3box2.scale.setTo(0.65, 0.70);
                _this.grayboxesObj.push(_this.traypiecespink3box2);
                break;
            case 4: sprite.destroy();
                _this.traypiecespink4box2 = _this.add.sprite(350, 150, '1x4traypiecespink');
                _this.traypiecespink4box2.scale.setTo(0.65, 0.70);
                _this.grayboxesObj.push(_this.traypiecespink4box2);
                break;
        }

    },

    //for green tpieces to be filled in tray2
    gettray2Filled2: function (counter, sprite) {
        //console.log(counter,_this.index2);
        //  _this.add.sprite(285.5, 90, '1X4traypieces1');
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.traypiecesgreen1box2 = _this.add.sprite(285.5, 90, '1X4traypieces1');
                _this.traypiecesgreen1box2.scale.setTo(0.65, 0.68);
                _this.grayboxesObj.push(_this.traypiecesgreen1box2);
                break;

            case 2: sprite.destroy();
                _this.traypiecesgreen2box2 = _this.add.sprite(350, 90, '1X4traypieces1');
                _this.traypiecesgreen2box2.scale.setTo(0.65, 0.68);
                _this.grayboxesObj.push(_this.traypiecesgreen2box2);
                break;
            case 3: sprite.destroy();
                _this.traypiecesgreen3box2 = _this.add.sprite(285.5, 150, '1X4traypieces1');
                _this.traypiecesgreen3box2.scale.setTo(0.65, 0.68);
                _this.grayboxesObj.push(_this.traypiecesgreen3box2);
                break;
            case 4: sprite.destroy();
                _this.traypiecesgreen4box2 = _this.add.sprite(350, 150, '1X4traypieces1');
                _this.traypiecesgreen4box2.scale.setTo(0.65, 0.68);
                _this.grayboxesObj.push(_this.traypiecesgreen4box2);
                break;

        }

    },

    //for 1/6 blue tpieces to be filled in tray2
    gettray2Filled3: function (counter, sprite) {
        //console.log(counter,_this.index2);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.traypiecesblue1box2 = _this.add.sprite(285.5, 90, '1x6traypiecesblue');
                _this.traypiecesblue1box2.scale.setTo(0.85, 0.63);
                _this.grayboxesObj.push(_this.traypiecesblue1box2);
                break;

            case 2: sprite.destroy();
                _this.traypiecesblue2box2 = _this.add.sprite(350, 90, '1x6traypiecesblue');
                _this.traypiecesblue2box2.scale.setTo(0.85, 0.63);
                _this.grayboxesObj.push(_this.traypiecesblue2box2);
                break;
            case 3: sprite.destroy();
                _this.traypiecesblue3box2 = _this.add.sprite(285.5, 150, '1x6traypiecesblue');
                _this.traypiecesblue3box2.scale.setTo(0.85, 0.63);
                _this.grayboxesObj.push(_this.traypiecesblue3box2);
                break;
            case 4: sprite.destroy();
                _this.traypiecesblue4box2 = _this.add.sprite(350, 150, '1x6traypiecesblue');
                _this.traypiecesblue4box2.scale.setTo(0.85, 0.63);
                _this.grayboxesObj.push(_this.traypiecesblue4box2);

                break;
            case 5: sprite.destroy();
                _this.traypiecesblue5box2 = _this.add.sprite(285.5, 210, '1x6traypiecesblue');
                _this.traypiecesblue5box2.scale.setTo(0.85, 0.63);
                _this.grayboxesObj.push(_this.traypiecesblue5box2);

                break;
            case 6: sprite.destroy();
                _this.traypiecesblue6box2 = _this.add.sprite(350, 210, '1x6traypiecesblue');
                _this.traypiecesblue6box2.scale.setTo(0.85, 0.63);
                _this.grayboxesObj.push(_this.traypiecesblue6box2);
                break;

        }

    },

    //for 1/9rectangle pieces to be filled in tray2
    gettray2Filled4: function (counter, sprite) {
        //console.log(counter, _this.index2);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.traypiecesrectangle1box2 = _this.add.sprite(285.5, 90, '1x9rectangle');
                _this.traypiecesrectangle1box2.scale.setTo(1, 0.59);
                _this.grayboxesObj.push(_this.traypiecesrectangle1box2);
                break;
            case 2: sprite.destroy();
                _this.traypiecesrectangle2box2 = _this.add.sprite(350, 90, '1x9rectangle');
                _this.traypiecesrectangle2box2.scale.setTo(1, 0.59);
                _this.grayboxesObj.push(_this.traypiecesrectangle2box2);
                break;
            case 3: sprite.destroy();
                _this.traypiecesrectangle3box2 = _this.add.sprite(285.5, 150, '1x9rectangle');
                _this.traypiecesrectangle3box2.scale.setTo(1, 0.58);
                _this.grayboxesObj.push(_this.traypiecesrectangle3box2);
                break;
            case 4: sprite.destroy();
                _this.traypiecesrectangle4box2 = _this.add.sprite(350, 150, '1x9rectangle');
                _this.traypiecesrectangle4box2.scale.setTo(1, 0.58);
                _this.grayboxesObj.push(_this.traypiecesrectangle4box2);
                break;
            case 5: sprite.destroy();
                _this.traypiecesrectangle5box2 = _this.add.sprite(285.5, 210, '1x9rectangle');
                _this.traypiecesrectangle5box2.scale.setTo(1, 0.58);
                _this.grayboxesObj.push(_this.traypiecesrectangle5box2);
                break;
            case 6: sprite.destroy();
                _this.traypiecesrectangle6box2 = _this.add.sprite(350, 210, '1x9rectangle');
                _this.traypiecesrectangle6box2.scale.setTo(1, 0.58);
                _this.grayboxesObj.push(_this.traypiecesrectangle6box2);
                break;
            case 7: sprite.destroy();
                _this.traypiecesrectangle7box2 = _this.add.sprite(285.5, 270, '1x9rectangle');
                _this.traypiecesrectangle7box2.scale.setTo(1, 0.58);
                _this.grayboxesObj.push(_this.traypiecesrectangle7box2);
                break;
            case 8: sprite.destroy();
                _this.traypiecesrectangle8box2 = _this.add.sprite(350, 270, '1x9rectangle');
                _this.traypiecesrectangle8box2.scale.setTo(1, 0.58);
                _this.grayboxesObj.push(_this.traypiecesrectangle8box2);
                break;
            case 9: sprite.destroy();
                _this.traypiecesrectangle9box2 = _this.add.sprite(285.5, 320, '1x9rectangle');
                _this.traypiecesrectangle9box2.scale.setTo(1, 0.58);
                _this.grayboxesObj.push(_this.traypiecesrectangle9box2);
                break;

        }

    },

    //for 1/3rectangle pieces to be filled in tray2
    gettray2Filled5: function (counter, sprite) {
        //console.log(counter, _this.index2);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.traypiecesrectangle1box2 = _this.add.sprite(285.5, 90, '1x3pieces');
                _this.traypiecesrectangle1box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle1box2);
                break;
            case 2: sprite.destroy();
                _this.traypiecesrectangle2box2 = _this.add.sprite(350, 90, '1x3pieces');
                _this.traypiecesrectangle2box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle2box2);
                break;
            case 3: sprite.destroy();
                _this.traypiecesrectangle3box2 = _this.add.sprite(285.5, 150, '1x3pieces');
                _this.traypiecesrectangle3box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle3box2);
                break;
        }

    },

    //for 1/5rectangle pieces to be filled in tray2
    gettray2Filled6: function (counter, sprite) {
        //console.log(counter, _this.index2);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.traypiecesrectangle1box2 = _this.add.sprite(285.5, 90, '1x5pieces');
                _this.traypiecesrectangle1box2.scale.setTo(1.05, 0.75);
                _this.grayboxesObj.push(_this.traypiecesrectangle1box2);
                break;
            case 2: sprite.destroy();
                _this.traypiecesrectangle2box2 = _this.add.sprite(350, 90, '1x5pieces');
                _this.traypiecesrectangle2box2.scale.setTo(1.05, 0.75);
                _this.grayboxesObj.push(_this.traypiecesrectangle2box2);
                break;
            case 3: sprite.destroy();
                _this.traypiecesrectangle3box2 = _this.add.sprite(285.5, 150, '1x5pieces');
                _this.traypiecesrectangle3box2.scale.setTo(1.05, 0.75);
                _this.grayboxesObj.push(_this.traypiecesrectangle3box2);
                break;
            case 4: sprite.destroy();
                _this.traypiecesrectangle4box2 = _this.add.sprite(350, 150, '1x5pieces');
                _this.traypiecesrectangle4box2.scale.setTo(1.05, 0.75);
                _this.grayboxesObj.push(_this.traypiecesrectangle4box2);
                break;
            case 5: sprite.destroy();
                _this.traypiecesrectangle5box2 = _this.add.sprite(285.5, 210, '1x5pieces');
                _this.traypiecesrectangle5box2.scale.setTo(1.05, 0.75);
                _this.grayboxesObj.push(_this.traypiecesrectangle5box2);
                break;
        }

    },

    //for 1/7rectangle pieces to be filled in tray2
    gettray2Filled7: function (counter, sprite) {
        //console.log(counter, _this.index2);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.traypiecesrectangle1box2 = _this.add.sprite(285.5, 90, '1x7pieces');
                _this.traypiecesrectangle1box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle1box2);
                break;
            case 2: sprite.destroy();
                _this.traypiecesrectangle2box2 = _this.add.sprite(350, 90, '1x7pieces');
                _this.traypiecesrectangle2box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle2box2);
                break;
            case 3: sprite.destroy();
                _this.traypiecesrectangle3box2 = _this.add.sprite(285.5, 150, '1x7pieces');
                _this.traypiecesrectangle3box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle3box2);
                break;
            case 4: sprite.destroy();
                _this.traypiecesrectangle4box2 = _this.add.sprite(350, 150, '1x7pieces');
                _this.traypiecesrectangle4box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle4box2);
                break;
            case 5: sprite.destroy();
                _this.traypiecesrectangle5box2 = _this.add.sprite(285.5, 210, '1x7pieces');
                _this.traypiecesrectangle5box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle5box2);
                break;
            case 6: sprite.destroy();
                _this.traypiecesrectangle6box2 = _this.add.sprite(350, 210, '1x7pieces');
                _this.traypiecesrectangle6box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle6box2);
                break;
            case 7: sprite.destroy();
                _this.traypiecesrectangle7box2 = _this.add.sprite(285.5, 270, '1x7pieces');
                _this.traypiecesrectangle7box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle7box2);
                break;
        }

    },

    //for 1/8 rectangle pieces to be filled in tray2
    gettray2Filled8: function (counter, sprite) {
        //console.log(counter, _this.index2);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.traypiecesrectangle1box2 = _this.add.sprite(285.5, 90, '1x8pieces');
                _this.traypiecesrectangle1box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle1box2);
                break;
            case 2: sprite.destroy();
                _this.traypiecesrectangle2box2 = _this.add.sprite(350, 90, '1x8pieces');
                _this.traypiecesrectangle2box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle2box2);
                break;
            case 3: sprite.destroy();
                _this.traypiecesrectangle3box2 = _this.add.sprite(285.5, 150, '1x8pieces');
                _this.traypiecesrectangle3box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle3box2);
                break;
            case 4: sprite.destroy();
                _this.traypiecesrectangle4box2 = _this.add.sprite(350, 150, '1x8pieces');
                _this.traypiecesrectangle4box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle4box2);
                break;
            case 5: sprite.destroy();
                _this.traypiecesrectangle5box2 = _this.add.sprite(285.5, 210, '1x8pieces');
                _this.traypiecesrectangle5box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle5box2);
                break;
            case 6: sprite.destroy();
                _this.traypiecesrectangle6box2 = _this.add.sprite(350, 210, '1x8pieces');
                _this.traypiecesrectangle6box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle6box2);
                break;
            case 7: sprite.destroy();
                _this.traypiecesrectangle7box2 = _this.add.sprite(285.5, 270, '1x8pieces');
                _this.traypiecesrectangle7box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle7box2);
                break;
            case 8: sprite.destroy();
                _this.traypiecesrectangle8box2 = _this.add.sprite(350, 270, '1x8pieces');
                _this.traypiecesrectangle8box2.scale.setTo(1.01, 0.74);
                _this.grayboxesObj.push(_this.traypiecesrectangle8box2);
                break;
        }
    },

    dragStop2: function (sprite) {
        _this.index2 += 1;
        if (_this.tickbtn.visible == false) {
            for (let i = _this.fractionBoxGroup.length - 1; i >= 0; i--) {
                _this.fractionBoxGroup.getChildAt(i).inputEnabled = false;
                _this.fractionBoxGroup.getChildAt(i).events.onInputDown.removeAll();
            }
        }
        else//if(_this.index2 <= _this.NumeratorValue2)
        {
            switch (_this.fractionName) {
                case '1x4traypiecespink': _this.gettray2Filled1(_this.index2, sprite);
                    break;

                case '1X4traypieces1': _this.gettray2Filled2(_this.index2, sprite);
                    break;

                case '1x6traypiecesblue': _this.gettray2Filled3(_this.index2, sprite);
                    break;

                case '1x9rectangle': _this.gettray2Filled4(_this.index2, sprite);
                    break;

                case '1x3pieces': _this.gettray2Filled5(_this.index2, sprite);
                    break;

                case '1x5pieces': _this.gettray2Filled6(_this.index2, sprite);
                    break;

                case '1x7pieces': _this.gettray2Filled7(_this.index2, sprite);
                    break;

                case '1x8pieces': _this.gettray2Filled8(_this.index2, sprite);
                    break;
            }

            if (_this.index2 == _this.NumeratorValue2) {
                if (_this.count1 == 0)//&& _this.dragActionShown == false
                {
                    _this.dragtoBottomTween();
                    // _this.dragActionShown = true;
                }
            }
        }
    },

    dragStop1: function (sprite) {
        _this.answer = _this.NumeratorValue1 - _this.NumeratorValue2;
        _this.index += 1;

        switch (_this.fractionName) {


            case '1x4traypiecespink': _this.getSquareBase1x4Filled(_this.index, sprite);
                break;

            case '1X4traypieces1': _this.getCircleBase1x4Filled(_this.index, sprite);
                break;

            case '1x6traypiecesblue': _this.getRectangularBase1x6Filled(_this.index, sprite);
                break;

            case '1x9rectangle': _this.getRectangularBase1x9Filled(_this.index, sprite);
                break;

            case '1x3pieces': _this.getRectangularBase1x3Filled(_this.index, sprite);
                break;

            case '1x5pieces': _this.getRectangularBase1x5Filled(_this.index, sprite);
                break;

            case '1x7pieces': _this.getRectangularBase1x7Filled(_this.index, sprite);
                break;

            case '1x8pieces': _this.getRectangularBase1x8Filled(_this.index, sprite);
                break;
        }
        if (_this.index == _this.answer) {
            _this.getProperFraction();
        }

    },
    displayTickmark: function () {
        console.log(_this.grayboxesObj.length);
        _this.tickbtn.events.onInputDown.removeAll();
        _this.tickbtn.visible = true;
        _this.tickbtn.inputEnabled = true;
        _this.tickbtn.input.useHandCursor = true;
        _this.tickbtn.events.onInputDown.add(_this.fractionInput);
    },

    fractionInput: function () {
        console.log(_this.fractionBoxGroup.length);
        console.log(_this.NumeratorValue1, _this.NumeratorValue2);
        _this.hand.visible = false;
        if (_this.hand) {
            _this.hand.visible = false;
        }
        if (_this.grayboxesObj.length == 0) {
            _this.wrongSound.play();
        }
        else if (_this.NumeratorValue1 == _this.NumeratorValue2) {
            if (_this.grayboxesObj.length == _this.NumeratorValue2) {
                _this.counterCelebrationSound.play();
                _this.displayEqualsSign();
                _this.mybox3.visible = false;

                _this.enterFractionBox1.visible = true;
                _this.graphics3.visible = true;
                _this.enterFractionBox2.visible = true;
                _this.enableBoxes();
                _this.qn_flag = -1;
                if (_this.count1 < 1 && _this.audio_Q3_Played == false) {
                    if (_this.Question11) {
                        _this.Question11.pause();
                        _this.Question11 = null;
                        _this.Question11src = null;
                    }
                    if (_this.Question1) {
                        _this.Question1.pause();
                        _this.Question1 = null;
                        _this.Question1src = null;
                    }
                    _this.delayq3();
                    _this.audio_Q3_Played = true;
                }

                _this.time.events.add(1000, function () { _this.qn_flag = 3 });
                _this.numberPad1();
                _this.tickbtn.visible = false;
            }
            else {
                _this.repeatQn();
            }
        }
        else if (_this.grayboxesObj.length == _this.NumeratorValue2) {
            _this.counterCelebrationSound.play();
            _this.tickbtn.visible = false;
            _this.qn_flag = -1;
            if (_this.count1 < 1 && _this.audio_Q2_Played == false) {
                if (_this.Question11) {
                    _this.Question11.pause();
                    _this.Question11 = null;
                    _this.Question11src = null;
                }
                if (_this.Question1) {
                    _this.Question1.pause();
                    _this.Question1 = null;
                    _this.Question1src = null;
                }
                console.log("here");
                _this.time.events.add(300, function () { _this.askQn2(); });
                _this.audio_Q2_Played = true;
            }
            _this.time.events.add(2000, function () { _this.qn_flag = 2 });

            _this.placingBoxesonhole();
        }
        else {
            _this.repeatQn();
        }
    },

    repeatQn() {
        _this.wrongSound.play();

        // Destryoying each sprite in the whole
        _this.boxesObj.forEach(element => {
            element.destroy();
        });
        // Destroying each sprite in the tray 2
        _this.grayboxesObj.forEach(element => {
            element.destroy();
        });
        _this.grayboxesObj.forEach(element => {
            _this.grayboxesObj.splice(0, _this.grayboxesObj.length);
        });
        _this.grayboxes2Obj.forEach(element => {
            element.destroy();
        });

        _this.grayboxes2Obj.forEach(element => {
            _this.grayboxes2Obj.splice(0, _this.grayboxes2Obj.length);
        });

        console.log(_this.grayboxesObj.length);
        _this.fractionBoxGroup.destroy();
        _this.grayfractiongroup.destroy();
        _this.trayBox1.destroy();
        _this.trayBox2.destroy();
        _this.emptyBox1.destroy();
        _this.graphicsAddHr.destroy();

        _this.mybox1.visible = false;
        _this.displaynumerator1.visible = false;
        _this.graphics1.visible = false;
        _this.displaydenominator1.visible = false;

        _this.mybox2.visible = false;
        _this.displaynumerator2.visible = false;
        _this.graphics2.visible = false;
        _this.displaydenominator2.visible = false;

        _this.fractionGroup = _this.add.group();
        _this.grayfractiongroup = _this.add.group();
        _this.fractionBoxGroup = _this.add.group();

        if (_this.DenominatorValue == 4)//here we have two option so 
        {
            _this.wrongAns = 1;
        }
        _this.randomizing_elements();
        _this.index2 = 0;
    },

    placingBoxesonhole: function () {
        _this.remainingBoxGroup = _this.add.group();

        for (let i = _this.fractionBoxGroup.length - 1; i >= 0; i--) {
            _this.remainingBoxGroup.addChild(_this.fractionBoxGroup.getChildAt(i));
            console.log("placing to hole");
        }

        _this.remainingBoxGroup.forEach(element => {
            element.inputEnabled = true;
            element.input.useHandCursor = true;
            element.visible = true;
            element.input.enableDrag(true);
            _this.index = 0;
            element.events.onDragStop.add(_this.dragStop1, _this);
        });
    },

    displayNumberbox1: function () {
        _this.enterFractionBox1.visible = true;
        _this.graphics3.visible = true;
        _this.enterFractionBox2.visible = true;
        _this.numerator = true;

        _this.enableBoxes();
        _this.enterTxt1 = null;
        _this.enterTxt2 = null;
    },

    enablebox: function () {
        if (_this.numpad == 0) {
            console.log("hjhjjjj");
            _this.numberPad1();
        }

        _this.enterFractionBox3.events.onInputDown.removeAll();

        _this.wholeAnswer = true;
        _this.selectedAns1 = '';
        _this.enterFractionBox3.frame = 1;
        _this.denominator = false;
        _this.numerator = false;

        _this.enterFractionBox3.inputEnabled = true;
        _this.enterFractionBox3.input.useHandCursor = true;
        _this.enterFractionBox3.events.onInputDown.add(function () {
            _this.denominator = false;
            _this.numerator = false;

        })
    },

    enableBoxes: function () {
        _this.enterFractionBox1.events.onInputDown.removeAll();
        _this.enterFractionBox2.events.onInputDown.removeAll();

        _this.denominator = undefined;
        _this.numerator = true;
        _this.selectedAns1 = '';

        _this.enterFractionBox1.inputEnabled = true;
        _this.enterFractionBox1.input.useHandCursor = true;

        _this.enterFractionBox1.events.onInputDown.add(function () {
            if (_this.enterTxt1 == null || _this.enterTxt1.name == null) {
                _this.numerator = true;

                _this.selectedAns1 = '';
            }
            _this.denominator = false;

            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;

        });

        _this.enterFractionBox2.visible = true;
        _this.enterFractionBox2.inputEnabled = true;
        _this.enterFractionBox2.input.useHandCursor = true;

        _this.enterFractionBox2.events.onInputDown.add(function () {
            if (_this.enterTxt2 == null) {
                _this.denominator = true;
                _this.selectedAns1 = '';
            }
            _this.numerator = false;

            _this.enterFractionBox2.frame = 1;
            _this.enterFractionBox1.frame = 0;

        });

    },

    getProperFraction: function () {
        _this.displayEqualsSign();
        _this.displayNumberbox1();
        _this.qn_flag = -1;

        if (_this.count1 < 1 && _this.audio_Q3_Played == false) {
            if (_this.Question11) {
                _this.Question11.pause();
                _this.Question11 = null;
                _this.Question11src = null;
            }
            if (_this.Question1) {
                _this.Question1.pause();
                _this.Question1 = null;
                _this.Question1src = null;
            }
            _this.delayq3();
            _this.audio_Q3_Played = true;

        }

        _this.time.events.add(1500, function () { _this.qn_flag = 3; });
        console.log(_this.qn_flag);
        _this.numberPad1();
    },

    nextquestion: function () {
        _this.grayfractiongroup.destroy();
        _this.wrongAns = 0;
        if (_this.count1 < 6) {
            _this.denominator = false;
            _this.numerator = false;
            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;
            _this.qn_flag = 1;
            _this.randomizing_elements();
            _this.displayTickmark();
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(1000, function () {
                //_this.state.start('score');
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            });
        }
    },

    numberPad1: function () {
        _this.numGroup = _this.add.group();
        _this.numpad = 1;

        let bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);

        bottomnumpadbg.name = "numpadbg";

        _this.x = 60;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;

        for (let i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.7, 0.7);
            _this.numbg.name = i + 1;
            _this.numbg.frame = i;
            if (_this.numbg.name == 10)
                _this.numbg.name = 0;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked, _this);

            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 10;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.7, 0.7);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.rightbtn.frame = 11;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.7, 0.7);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);

        _this.numpadTween = _this.add.tween(_this.numGroup);
        //tween in the number pad after a second.
        _this.tweenNumPad();

    },

    wrongbtnClicked: function (target) {

        _this.clickSound.play();

        _this.selectedAns1 = '';
        // if whole number box is to be erased
        if (_this.whole == 0) {
            console.log("hwre in whole");
            _this.enterFractionBox3.removeChild(_this.enterTxt3);

            _this.enterTxt3 = null;
            _this.enablebox();
        }
        else if (_this.enterFractionBox1.frame == 1) {
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            console.log("wrng");
            _this.enterTxt1 = null;
            _this.enableBoxes();
        }
        else if (_this.enterFractionBox2.frame == 1) {

            _this.enterFractionBox2.removeChild(_this.enterTxt2);

            _this.enterTxt2 = null;

            _this.numerator = undefined;

            _this.denominator = true;
            _this.selectedAns1 = '';
            _this.enterFractionBox2.frame = 1;

            _this.enterFractionBox2.inputEnabled = true;
            _this.enterFractionBox2.input.useHandCursor = true;
        }
    },

    wrongAnsClicked: function (target) {

        _this.wrongSound.play();

        _this.selectedAns1 = '';
        _this.enterFractionBox1.removeChild(_this.enterTxt1);
        _this.enterFractionBox3.removeChild(_this.enterTxt3);
        _this.enterTxt1 = null;
        _this.enterTxt3 = null;
        _this.enablebox();

    },


    eraseScreen: function (target) {

        _this.selectedAns1 = '';
        _this.numGroup.destroy();
        _this.numpad = 0;


        // Destroying Tray objects
        _this.trayBox1.destroy();
        _this.trayBox2.destroy();

        // Destroying Graphics Object
        _this.graphics.destroy();
        _this.graphics1.destroy();
        _this.graphics2.destroy();

        _this.graphics3.visible = false;
        _this.graphicsAddHr.destroy();

        _this.graphicsEq1.destroy();
        _this.graphicsEq2.destroy();

        if (_this.graphicsEq12) _this.graphicsEq12.destroy();
        if (_this.graphicsEq22) _this.graphicsEq22.destroy();

        _this.emptyBox1.destroy();

        // Destroying Numerators and Denominators texts
        _this.displaynumerator.destroy();
        _this.displaydenominator.destroy();
        _this.displaynumerator1.destroy();
        _this.displaynumerator2.destroy();
        _this.displaydenominator1.destroy();
        _this.displaydenominator2.destroy();

        _this.index2 = 0;
        _this.whole = 1;

        // Destroying Yellow boxes
        _this.mybox1.destroy();
        _this.mybox2.destroy();
        _this.mybox3.visible = false;//destroy();


        _this.enterFractionBox1.visible = false;//destroy();
        _this.enterFractionBox2.visible = false;//destroy();
        _this.enterFractionBox1.removeChild(_this.enterTxt1);
        _this.enterFractionBox2.removeChild(_this.enterTxt2);


        if (_this.enterFractionBox3) {
            _this.enterFractionBox3.destroy();
            _this.enterTxt3 = null;
        }



        // Destryoying each sprite in the whole
        _this.boxesObj.forEach(element => {
            element.destroy();
        });
        // Destroying each sprite in the tray 2
        _this.grayboxesObj.forEach(element => {
            element.destroy();
        });
        _this.grayboxesObj.forEach(element => {
            _this.grayboxesObj.splice(0, _this.grayboxesObj.length);
        });
        _this.grayboxes2Obj.forEach(element => {
            element.destroy();
        });
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);
    },

    numClicked: function (target) {
        _this.clickSound.play();

        console.log("Number clicked is: " + _this.denominator, _this.numerator);
        _this.selectedAns1 = target.name;
        let var_selectedAns1 = _this.selectedAns1;

        if (_this.denominator == true) {
            _this.denominator = false;

            _this.enterFractionBox2.removeChild(_this.enterTxt2);
            _this.enterTxt2 = _this.add.text(18, 10, "" + var_selectedAns1, { fontSize: '30px' });//43 88
            _this.enterTxt2.name = Number('' + var_selectedAns1);
            //console.log(_this.enterTxt2.name);
            //console.log(Number('' + var_selectedAns1));
            _this.enterFractionBox2.addChild(_this.enterTxt2);
            _this.enterFractionBox2.name = _this.enterTxt2.name;
            _this.enterTxt2.align = 'right';
            _this.enterTxt2.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt2.fill = '#65B4C3';
            _this.enterTxt2.fontWeight = 'Normal';
            _this.enterTxt2.visible = true;

        }
        else if (_this.numerator == true) {
            //console.log("numer")
            _this.numerator = false;
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.enterTxt1 = _this.add.text(18, 10, "" + var_selectedAns1, { fontSize: '30px' });//36 23
            _this.enterTxt1.name = Number('' + var_selectedAns1);
            _this.enterFractionBox1.addChild(_this.enterTxt1);
            _this.enterFractionBox1.name = _this.enterTxt1.name;
            _this.enterTxt1.align = 'right';
            _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt1.fill = '#65B4C3';
            _this.enterTxt1.fontWeight = 'Normal';
            _this.enterTxt1.visible = true;
        }
        else if (_this.wholeAnswer == true) {
            _this.numerator = false;
            _this.denominator = false;
            _this.wholeAnswer = false;

            _this.enterTxt3 = _this.add.text(18, 10, "" + var_selectedAns1, { fontSize: '30px' });//43 88
            _this.enterTxt3.name = Number('' + var_selectedAns1);

            _this.enterFractionBox3.addChild(_this.enterTxt3);
            _this.enterFractionBox3.name = _this.enterTxt3.name;
            //_this.enterTxt3.font = "Akzidenz-Grotesk BQ";

            _this.enterTxt3.align = 'right';
            _this.enterTxt3.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt3.fill = '#65B4C3';
            _this.enterTxt3.fontWeight = 'Normal';
            _this.enterTxt3.visible = true;
        }

    },

    wholeNumberAnswer: function () {
        _this.displayEqualsSign2();
        _this.enterFractionBox3 = _this.add.sprite(820, 380, 'SquareBox');//825 230
        _this.enterFractionBox3.scale.setTo(0.8);
        _this.enterFractionBox3.visible = true;

        _this.enablebox();
    },

    displayMinusSign: function () {

        _this.graphicsAddHr = _this.add.graphics();
        _this.graphicsAddHr.lineStyle(6, 0x65B4C3);
        _this.graphicsAddHr.moveTo(250, 400);
        _this.graphicsAddHr.lineTo(230, 400);

    },

    displayEqualsSign: function () {
        _this.graphicsEq1 = _this.add.graphics();
        _this.graphicsEq1.lineStyle(6, 0x65B4C3);
        _this.graphicsEq1.moveTo(460, 400);
        _this.graphicsEq1.lineTo(484, 400);

        _this.graphicsEq2 = _this.add.graphics();
        _this.graphicsEq2.lineStyle(6, 0x65B4C3);
        _this.graphicsEq2.moveTo(460, 410);
        _this.graphicsEq2.lineTo(484, 410);

    },

    displayEqualsSign2: function () {
        _this.graphicsEq12 = _this.add.graphics();
        _this.graphicsEq12.lineStyle(6, 0x65B4C3);
        _this.graphicsEq12.moveTo(760, 400);
        _this.graphicsEq12.lineTo(784, 400);

        _this.graphicsEq22 = _this.add.graphics();
        _this.graphicsEq22.lineStyle(6, 0x65B4C3);
        _this.graphicsEq22.moveTo(760, 410);
        _this.graphicsEq22.lineTo(784, 410);

    },

    rightbtnClicked: function (target) {
        console.log("here right btn");
        _this.noofAttempts++;
        _this.clickSound.play();
        if (_this.whole == 0) {
            console.log(_this.whole);
            //console.log("entered whole if ");
            //console.log(_this.enterTxt1);
            if (_this.enterTxt3 == null) {
                _this.wrongSound.play();
                //_this.wrongAnsClicked();
            }
            else if (Number(_this.enterTxt3.name) == 0) {
                // console.log ( "VVVVVVVVValue of entertxt1 and 3: " + _this.enterTxt1.name + " " + _this.enterTxt3.name);

                _this.enterFractionBox3.frame = 0;
                //_this.whole = 0;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);


                _this.celebration();
                _this.numGroup.destroy();
                _this.numpad = 0;

                _this.time.events.add(1000, () => {
                    _this.graphicsEq12.destroy();
                    _this.graphicsEq22.destroy();
                    _this.numGroup.visible = false;
                    _this.enterFractionBox1.removeChild(_this.enterTxt1);
                    _this.enterFractionBox2.removeChild(_this.enterTxt2);
                    _this.enterFractionBox1.visible = false;//destroy();
                    _this.enterFractionBox2.visible = false;//destroy();
                    _this.graphics3.visible = false;
                });

                //_this.time.events.add(1000, _this.eraseScreen);
                _this.time.events.add(1800, function () {
                    _this.eraseScreen();
                    //_this.;numGroup.destroy()
                    _this.nextquestion();
                });

            }
            else {
                console.log("wrng in whole");
                _this.wrongSound.play();
                // _this.numGroup.destroy();
                // _this.numpad = 0;
                _this.wrongAnsClicked();
            }

        }
        else if (_this.enterTxt1 == null && _this.enterTxt2 != null) {
            // console.log("Entered first if");
            _this.wrongSound.play();
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.enterFractionBox2.removeChild(_this.enterTxt2);
            _this.enterFractionBox2.frame = 0;
            _this.enterFractionBox1.frame = 1;

            _this.enterTxt1 = null;
            _this.enterTxt2 = null;
            _this.numerator = true;
            _this.enableBoxes();
        }
        else if (_this.enterTxt1 == null && _this.denominator == true) {
            console.log("entered 2nd if");
            _this.wrongSound.play();
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.enterFractionBox2.removeChild(_this.enterTxt1);
            _this.enterTxt1 = null;
            _this.enterTxt2 = null;
            _this.numerator = true;

            _this.enterFractionBox2.frame = 0;
            _this.enterFractionBox1.frame = 1;
            _this.enableBoxes();
        }
        else if (_this.enterTxt1 == null) {
            console.log("entered 3rd if");
            _this.wrongSound.play();
            _this.numerator = true;

            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.enterFractionBox2.frame = 0;
            _this.enterFractionBox1.frame = 1;
            _this.enableBoxes();
        }
        else {
            console.log("after whole if this is a else");
            _this.box_flag = -1;
            //console.log(_this.NumeratorValue1 + " " + _this.NumeratorValue2);
            _this.NumeratorValue = _this.NumeratorValue1 - _this.NumeratorValue2;
            if (_this.enterTxt2 == null) {
                console.log(" this is 4th if");
                _this.wrongSound.play();
                _this.selectedAns1 = '';
                _this.enterFractionBox1.removeChild(_this.enterTxt1);
                _this.enterFractionBox2.removeChild(_this.enterTxt2);
                _this.enterTxt1 = null;
                //console.log("else value");
                _this.numerator = true;
                _this.enterFractionBox2.frame = 0;
                _this.enterFractionBox1.frame = 1;
                _this.enableBoxes();

                //  _this.placingBoxesonhole();

            }
            else if (Number(_this.enterTxt2.name) > 0)//(Number(_this.enterTxt1.name) == _this.NumeratorValue && Number(_this.enterTxt2.name) == _this.DenominatorValue) 
            {

                // if(Number(_this.enterTxt2.name) >0)
                // {
                console.log(" this if");
                if (_this.NumeratorValue / _this.DenominatorValue == Number(_this.enterTxt1.name) / Number(_this.enterTxt2.name) && _this.DenominatorValue >= Number(_this.enterTxt2.name)) {
                    console.log("this is 5th else if");
                    //console.log(_this.DenominatorValue);
                    if ((_this.NumeratorValue % _this.DenominatorValue) == 0) {
                        _this.counterCelebrationSound.play();
                        _this.wholefraction();
                    }
                    // _this.celebrationSound.play();
                    else {

                        //                            console.log("This is else when remainder is zero. celebrating....");
                        _this.selectedAns1 = '';
                        _this.enterFractionBox1.removeChild(_this.enterTxt1);
                        _this.enterFractionBox2.removeChild(_this.enterTxt2);
                        _this.enterFractionBox1.visible = false;//destroy();
                        _this.enterFractionBox2.visible = false;//destroy();
                        _this.graphics3.visible = false;

                        _this.displaynumerator = _this.add.text(672, 356, Number(_this.enterTxt1.name), { fontSize: '26px' });
                        _this.displaydenominator = _this.add.text(672, 396, Number(_this.enterTxt2.name), { fontSize: '26px' });

                        _this.graphics = _this.add.graphics();
                        _this.graphics.lineStyle(4, 0xff0000);
                        _this.graphics.moveTo(698, 390);
                        _this.graphics.lineTo(664, 390);

                        _this.displaynumerator.fill = '#FF0000';
                        _this.displaydenominator.fill = '#FF0000';

                        _this.mybox3.visible = true;

                        _this.enterTxt1 = null;
                        _this.enterTxt2 = null;

                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);


                        _this.celebration();
                        _this.numGroup.destroy();
                        _this.numpad = 0;
                        //_this.time.events.add(1000, _this.eraseScreen);
                        _this.time.events.add(1800, function () {
                            //console.log("whole");
                            _this.eraseScreen();
                            //_this.numGroup.destroy();
                            _this.nextquestion();
                        });
                        // }
                    }
                }
                else {
                    _this.wrongSound.play();
                    _this.selectedAns1 = '';
                    _this.enterFractionBox1.removeChild(_this.enterTxt1);
                    _this.enterFractionBox2.removeChild(_this.enterTxt2);
                    _this.enterTxt1 = null;
                    _this.enterTxt2 = null;
                    //console.log("else value");
                    _this.numerator = true;
                    _this.enterFractionBox2.frame = 0;
                    _this.enterFractionBox1.frame = 1;
                    _this.enableBoxes();
                }

                // }
            }
            else {
                console.log("end else");
                _this.wrongSound.play();
                _this.selectedAns1 = '';

                _this.enterFractionBox1.removeChild(_this.enterTxt1);
                _this.enterFractionBox2.removeChild(_this.enterTxt2);
                _this.enterFractionBox2.frame = 0;
                _this.enterFractionBox1.frame = 1;

                _this.enterTxt1 = null;
                _this.enterTxt2 = null;
                _this.numerator = true;
                _this.enableBoxes();
            }
        }
    },

    wholefraction: function () {
        console.log("box wholefraction");
        _this.numGroup.destroy();
        _this.numpad = 0;
        _this.enterFractionBox1.removeChild(_this.enterTxt1);
        _this.enterFractionBox2.removeChild(_this.enterTxt2);
        _this.enterFractionBox1.visible = false;//destroy();
        _this.enterFractionBox2.visible = false;//destroy();
        _this.graphics3.visible = false;

        _this.displaynumerator = _this.add.text(672, 356, Number(_this.enterTxt1.name), { fontSize: '26px' });
        _this.displaydenominator = _this.add.text(672, 396, Number(_this.enterTxt2.name), { fontSize: '26px' });

        _this.graphics = _this.add.graphics();
        _this.graphics.lineStyle(4, 0xff0000);
        _this.graphics.moveTo(698, 390);
        _this.graphics.lineTo(664, 390);

        _this.displaynumerator.fill = '#FF0000';
        _this.displaydenominator.fill = '#FF0000';
        _this.mybox3.visible = true;
        _this.whole = 0;

        _this.wholeNumberAnswer();
    },
    //* functions related to showing the demo video. 
    //* the game is paused before calling this. Once the demo video 
    //* completes or skip button is pressed, it makes _this.game.paused = false.

    DemoVideo: function () {
        //* In this game, we subtract the two like fractions by ‘the method of removal’.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-13-G6/" +
            _this.languageSelected + "/NSF-13-G6-demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        // //* Subtract the second fraction from the first fraction.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-13-G6/" +
            _this.languageSelected + "/NSF-13-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //  //* Remove the fraction pieces and drag to the second tray
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-13-G6/" +
            _this.languageSelected + "/NSF-13-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //  //*Drag the remaining fraction pieces to the whole.
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-13-G6/" +
            _this.languageSelected + "/NSF-13-G6-c.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);
        //  //Enter your answer.
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-13-G6/" +
            _this.languageSelected + "/NSF-13-G6-d.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.showDemoVideo();  //* call the function to show the video

        // _this.backbtn1 = _this.add.sprite(10, 6, 'backbtn');
        // _this.backbtn1.inputEnabled = true;
        // _this.backbtn1.input.useHandCursor = true;
        // _this.backbtn1.events.onInputDown.add(function ()
        // {   
        //    // _this.stopVideo();
        //     _this.stopAudio();
        //     _this.game.paused = false;
        //     _this.state.start('grade6NumberSystems',true,false);
        // });

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            //_this.clickSound.play();
            //_this.stopVideo();
            _this.stopAudio();
            _this.videoWorld.destroy();
            _this.skip.destroy();
            _this.game.paused = false;  //* restart the game
        });
    },

    //* function to stop the video and audio if they are playing.
    stopVideo: function () {
        console.log("inside stop video");
        if (_this.demoVideo_1) {
            console.log("removing the video");
            _this.demoVideo_1.destroy();
            _this.videoWorld.destroy();
        }
    },
    stopAudio: function () {
        //* clear all the timers first

        if (_this.dvTimer1) clearTimeout(_this.dvTimer1);
        if (_this.dvTimer2) clearTimeout(_this.dvTimer2);

        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.q1Sound) {
            console.log("removing the q1");
            _this.q1Sound.removeEventListener('ended', _this.qA1);
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
            console.log("removing the q4");
            _this.q4Sound.pause();
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }

        // _this.backbtn1.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                   //* skip button destroyed
        // _this.backbtn1.destroy();               //* backbutton button destroyed
    },

    //* event functions for demo audio and question audios. 
    //* do the action as required for synching with video. See showVideo
    // * function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        console.log("inside dA1.");
        _this.q1Sound.play();    //* play the first question after demo audio is done playing
    },

    qA1: function () {
        console.log("inside qA1.");
        _this.q2Sound.play();    //* play the second question after demo audio is done playing
    },

    showDemoVideo: function () {
        //* As _this.game is paused, phaser time events cannot be used since its timer is stopped.
        //* so we have to use js timers as required

        _this.demoAudio1.play();
        _this.demoVideo_1 = _this.add.video('nsf13_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSF-13-G6_1.mp4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* after demoAudio is played, start q1

        _this.q1Sound.addEventListener('ended', _this.qA1);  //* after q1 is played, start q2


        _this.dvTimer1 = setTimeout(function ()    //* play the third question after 20 seconds of playing video
        {
            clearTimeout(_this.dvTimer1);
            _this.q3Sound.play();
        }, 20000);

        _this.dvTimer2 = setTimeout(function ()    //* play the second question after  27 seconds of playing video
        {
            clearTimeout(_this.dvTimer2);
            _this.q4Sound.play();
        }, 27000);

        _this.demoVideo_1.onComplete.add(function ()   //* on completion of demovideo close the video
        {
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop video.
            _this.videoWorld.destroy();         //* destroy the video, gets removed from screen.
            _this.game.paused = false;          //* now, unpause the game, so that it continues.
        });
    }
}

//* video related commands
//        _this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        _this.videoWorld = this.video.addToWorld();
//        _this.video2.stop(false);
//        _this.video2.onComplete.add(function() {})
//        _this.video3.playbackRate = 1;
//        _this.game.paused = true; //* pauses the game.
//        _this.videoWorld.destroy(); //* removes video from screen   



