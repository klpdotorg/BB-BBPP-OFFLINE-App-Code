Game.NSRP_01_G6level1 = function () { };


Game.NSRP_01_G6level1.prototype =
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
        _this.clickSoundsrc.setAttribute("src", window.baseUrl+"sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src", window.baseUrl+"sounds/celebration.mp3");
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl+"sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

        _this.wrongans = document.createElement('audio');
        _this.wronganssrc = document.createElement('source');
        _this.wronganssrc.setAttribute("src", window.baseUrl+"sounds/WrongCelebrationSound.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.framechange = document.createElement('audio');
        _this.framechangesrc = document.createElement('source');
        _this.framechangesrc.setAttribute("src", window.baseUrl+"sounds/Frame_change_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);

        _this.snapSound = document.createElement('audio');
        _this.snapSoundsrc = document.createElement('source');
        _this.snapSoundsrc.setAttribute("src", window.baseUrl+"sounds/snapSound.mp3");
        _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.Ask_Question1 = _this.createAudio("NSRP-01-G6A");
        _this.Ask_Question2 = _this.createAudio("NSRP-01-G6B");
        _this.Ask_Question3 = _this.createAudio("NSRP-01-G6C");
        _this.Ask_Question4 = _this.createAudio("NSRP-01-G6D");
        _this.Ask_Question5 = _this.createAudio("NSRP-01-G6E");

        telInitializerbbpp.gameIdInit("NSRP_1_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },
    preload: function (game) {

        var preloadGrp = _this.add.group();
        _this.preloadBarOutline = _this.add.sprite(_this.world.centerX - 120, _this.world.centerY, 'prgressbarOutLine');
        _this.preloadBars = _this.add.sprite(_this.world.centerX - 120, _this.world.centerY, 'preloadBar');

        _this.time.advanceTiming = true;
        _this.load.setPreloadSprite(_this.preloadBars);

        preloadGrp.add(_this.preloadBarOutline);
        preloadGrp.add(_this.preloadBars);


    },

    create: function (game) {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.count1 = 0;
        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        // //* User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
         _this.microConcepts;
        // _this.grade;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.Question_flag = -1;


        // To keep track of decimal point
        _this.fourNotEntered = false

        _this.time.events.add(40, () => {

            _this.background2 = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg2');

            _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');

            //** include the background file, navigation bar, stars, timer objects.

            _this.navBar = _this.add.sprite(0, 0, 'navBar');

            _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
            _this.backbtn.inputEnabled = true;
            _this.backbtn.input.useHandCursor = true;
            _this.backbtn.events.onInputDown.add(function () {
                //_this.state.start('NSRP_02_G6Score');
              //  _this.stopVoice();
                _this.time.events.removeAll();
                _this.backbtn.events.onInputDown.removeAll();
                _this.time.events.add(50,function()
                {
                    _this.state.start('grade6NumberSystems',true,false);
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
                    else if (_this.Question_flag == 4) {
                        _this.Ask_Question4.play();
                    }
                    else if (_this.Question_flag == 5) {
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

            _this.generateStarsForTheScene(6);

            //* include variables for use - objGroup (where egg objects can be added)
            _this.objGroup;
            _this.numGroup;

            //* start the game with first question
            _this.time.events.add(500, _this.getQuestion);

            // _this.add.sprite(10,100,'image4')
            // _this.add.sprite(260,100,'image41').scale.setTo(1.2)
            // _this.add.sprite(460,100,'image2_13')

            ques = [1, 2, 3, 4]
            ques = _this.shuffle(ques);

            _this.questions = [];
            _this.questions[0] = ques[0];
            _this.questions[1] = ques[1];
            _this.questions[2] = ques[2];
            _this.questions[3] = ques[3];
            _this.questions[4] = 5;
            _this.questions[5] = 6;
        })


    },


    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl+"questionSounds/NSRP-01-G6/" + _this.languageSelected + "/" + src + ".mp3");
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
        _this.StoreRandomisedValues();

        _this.questionid = 1;

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
    stopVoice: function () {
        console.log("ehyello")
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
    StoreRandomisedValues: function () {
        // image4_12
        valuesCombinations = []
        picture = [];
        picture2 = [];
        for (i = 0; i < 6; i++) {

            if (_this.questions[i] <= 4) {
                var getRandIdx = Math.floor(Math.random() * (9 - 1) + 1);
                for (k = 0; k < i; k++) {
                    if (picture[k] == getRandIdx) {
                        var getRandIdx = Math.floor(Math.random() * (9 - 1) + 1);
                        k = 0;
                    }
                }
                picture[i] = getRandIdx;
                valuesCombinations[i] = _this.questions[i] + "_" + getRandIdx;


            }
            else {
                var getRandIdx = Math.floor(Math.random() * (6 - 1) + 1);
                for (k = 0; k < i; k++) {
                    if (picture2[k] == getRandIdx) {
                        var getRandIdx = Math.floor(Math.random() * (6 - 1) + 1);
                        k = 0;
                    }
                }
                picture2[i] = getRandIdx;
                valuesCombinations[i] = getRandIdx;

            }

        }

        console.log(_this.questions)
        // 1_1 means questionof type1.1 with picture 1
        console.log(valuesCombinations)

        _this.ArrangeObjects()

    },
    findCorrectImageNumber: function () {
        if (_this.questions[_this.count1] == 1) {
            _this.correctImgNo = 1
        }
        if (_this.questions[_this.count1] == 2) {
            _this.correctImgNo = 1
        }
        if (_this.questions[_this.count1] == 3) {
            _this.correctImgNo = 1
        }
        if (_this.questions[_this.count1] == 4) {
            _this.correctImgNo = 1
        }

    },

    ArrangeObjects: function () {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount ++;
        
        if (_this.questions[_this.count1] <= 4) {
            // First image is correct
            _this.findCorrectImageNumber();
            _this.InitialImage = _this.add.sprite(40, 60, `image${valuesCombinations[_this.count1]}${_this.correctImgNo}`);
            if (_this.questions[_this.count1] < 4)
                _this.InitialImage.scale.setTo(1.8)
            else {
                _this.InitialImage.scale.setTo(2)
                _this.InitialImage.width = 412
                _this.InitialImage.height = 436

            }

            var scale = 1.8;
            // After some time reduce size and animate to top
            // _this.add.tween(_this.InitialImage).to({ scale: 1 }, 2000, 'Linear', true)

            _this.time.events.add(1000, () => {
                _this.timerl = _this.time.create(false);

                //  Set a TimerEvent to occur after 2 seconds
                _this.timerl.loop(50, function () {
                    _this.InitialImage.scale.setTo(scale - 0.1)
                    scale = scale - 0.1
                    if (_this.questions[_this.count1] < 4 && Math.floor(scale * 10) == 5) {
                        _this.time.events.add(500, _this.showImages, _this)

                        _this.timerl.destroy()

                    }
                    else if (_this.questions[_this.count1] == 4 && Math.floor(scale * 10) == 7) {
                        _this.time.events.add(500, _this.showImages, _this)

                        _this.timerl.destroy()

                    }
                }, _this);
                _this.timerl.start()


            })


            if (_this.questions[_this.count1] == 1) {
                _this.Ask_Question1.play();
                _this.Question_flag = 1;
            }
            if (_this.questions[_this.count1] == 2) {
                _this.Ask_Question2.play();
                _this.Question_flag = 2;
            }
            if (_this.questions[_this.count1] == 3) {
                _this.Ask_Question3.play();
                _this.Question_flag = 3;
            }
            if (_this.questions[_this.count1] == 4) {
                _this.Ask_Question4.play();
                _this.Question_flag = 4;
            }


        }
        else {

            // if (_this.background.visible == true) {
            //     _this.background.visible = false;
            // }
            _this.InitialImage = _this.add.sprite(120, 110, `image${valuesCombinations[_this.count1]}`);
            // To select image size based on given ratio
            _this.chooseImageWidth()

            _this.slideGrp = _this.add.group();
            _this.slideGrp.add(_this.ratioBox);
            _this.slideGrp.add(_this.optionImg1);
            _this.slideGrp.add(_this.optionImg2);
            _this.slideGrp.add(_this.optionImg3);
            // _this.slideGrp.add(_this.rightbtn);

            _this.slideGrp.x = -1000;

            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);

            tween.onComplete.add(() => {
                _this.rightbtn = _this.add.sprite(850, 425, 'TickBtn');
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.input.useHandCursor = true;
                _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this)

            }, _this)

            _this.Ask_Question5.play();
            _this.Question_flag = 5;
        }

    },
    showImages: function () {

        _this.optionImg1 = _this.add.sprite(40, 250, `image${valuesCombinations[_this.count1]}1`);
        _this.optionImg1.visible = false;
        _this.optionImg1.inputEnabled = true;
        _this.optionImg1.events.onInputDown.add(_this.imgSelected, _this)

        if (_this.questions[_this.count1] == 3 || _this.questions[_this.count1] == 2) {
            _this.optionImg2 = _this.add.sprite(320, 250, `image${valuesCombinations[_this.count1]}2`);
            _this.optionImg2.width = 180;
            _this.optionImg2.height = 190;

        }
        else if (_this.questions[_this.count1] == 4) {
            _this.optionImg2 = _this.add.sprite(280, 250, `image${valuesCombinations[_this.count1]}2`);
            _this.optionImg1.width = 206;
            _this.optionImg1.height = 218;
        }

        else
            _this.optionImg2 = _this.add.sprite(310, 250, `image${valuesCombinations[_this.count1]}2`);

        _this.optionImg1.visible = false;
        _this.optionImg2.inputEnabled = true;
        _this.optionImg2.events.onInputDown.add(_this.imgSelected, _this)


        if (_this.optionImg2.x = 320)
            _this.optionImg3 = _this.add.sprite(535, 250, `image${valuesCombinations[_this.count1]}3`);
        else if (_this.optionImg2.x = 280)
            _this.optionImg3 = _this.add.sprite(555, 250, `image${valuesCombinations[_this.count1]}3`);
        else
            _this.optionImg3 = _this.add.sprite(580, 250, `image${valuesCombinations[_this.count1]}3`);
        _this.optionImg1.visible = false;
        _this.optionImg3.inputEnabled = true;
        _this.optionImg3.events.onInputDown.add(_this.imgSelected, _this)

        _this.reArrangeOptions();
        _this.storeCorrectAns()


        _this.slideGrp = _this.add.group();
        // _this.slideGrp.add(_this.ratioBox);
        _this.slideGrp.add(_this.optionImg1);
        _this.slideGrp.add(_this.optionImg2);
        _this.slideGrp.add(_this.optionImg3);
        // _this.slideGrp.add(_this.rightbtn);

        _this.slideGrp.x = -1000;

        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0)
        tween.onComplete.add(() => {
            _this.rightbtn = _this.add.sprite(850, 430, 'TickBtn');
            _this.rightbtn.inputEnabled = true;
            _this.rightbtn.input.useHandCursor = true;
            _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this)


        }, _this)


    },
    storeCorrectAns: function () {
        if (_this.questions[_this.count1] == 1) {
            _this.correctImage = _this.optionImg1
        }
        if (_this.questions[_this.count1] == 2) {
            _this.correctImage = _this.optionImg3
        }
        if (_this.questions[_this.count1] == 3) {
            _this.correctImage = _this.optionImg3

        }
        if (_this.questions[_this.count1] == 4) {
            _this.correctImage = _this.optionImg1

        }

    },
    imgSelected: function (target) {
        _this.clickSound.play();
        _this.optionImg1.frame = 0;
        _this.optionImg2.frame = 0;
        _this.optionImg3.frame = 0;
        target.frame = 1;
        _this.userselectedBox = target;

    },
    chooseImageWidth: function () {

        // 1:1
        if (valuesCombinations[_this.count1] == 1) {
            // Image1 size options
            var getRandIdx = 5;
            //  6 5 4 3
            getRandIdx = Math.floor(Math.random() * (4 - 0) + 0);
            console.log(getRandIdx)

            let num = 0 + "." + getRandIdx
            if (getRandIdx == 3) {
                num = 0.305

            }
            if (getRandIdx == 2) {
                num = 0.205

            }
            _this.correctXcor = 6 - getRandIdx;
            _this.correctYcor = 6 - getRandIdx;

            _this.InitialImage.scale.setTo(0.615 - num, 0.61 - num)
        }
        // 1:3
        else if (valuesCombinations[_this.count1] == 2) {
            // Image1 size options  14 diff
            console.log("here")
            var getRandIdx = Math.floor(Math.random() * (4 - 0) + 0);
            let num = getRandIdx * 14 / 100
            let num1 = getRandIdx * 14 / 100

            if (num == 0.42) {
                num = 0.425
                num1 = 0.422
            }
            _this.InitialImage.scale.setTo(0.85 - num1, 0.85 - num)

            _this.correctYcor = 1 * (6 - getRandIdx);
            _this.correctXcor = 3 * (6 - getRandIdx);
        }
        // 2:1
        else if (valuesCombinations[_this.count1] == 3) {
            // Image1 size options  14 diff
            var getRandIdx = Math.floor(Math.random() * (2 - 0) + 0);
            let num = 0;
            let num1 = 0;
            if (getRandIdx == 1) {
                num = 0.29
                num1 = 0.291
            }
            _this.InitialImage.scale.setTo(0.87 - num, 0.86 - num1)

            _this.correctYcor = 2 * (3 - getRandIdx);
            _this.correctXcor = 4 * (3 - getRandIdx);
        }
        // 2:3
        else if (valuesCombinations[_this.count1] == 4) {
            var getRandIdx = Math.floor(Math.random() * (2 - 0) + 0);
            let num = 0;
            let num1 = 0;
            if (getRandIdx == 1) {
                num = 0.14
                num1 = 0.141;
            }
            _this.InitialImage.scale.setTo(0.426 - num1, 0.42 - num)

            _this.correctYcor = 2 * (3 - getRandIdx);
            _this.correctXcor = 3 * (3 - getRandIdx);
        }
        // 2:5
        else if (valuesCombinations[_this.count1] == 5) {
            var getRandIdx = Math.floor(Math.random() * (2 - 0) + 0);
            let num = 0, num1 = 0;
            if (getRandIdx == 1) {
                num = 0.22
                num1 = 0.215
            }
            _this.InitialImage.scale.setTo(0.65 - num1, 0.65 - num)

            _this.correctYcor = 2 * (3 - getRandIdx);
            _this.correctXcor = 5 * (3 - getRandIdx);
        }

        _this.makeCordinates()

        _this.makeRatioBox();

        _this.showDimensions();
    },
    makeCordinates: function () {
        _this.graphics1 = _this.add.graphics();
        _this.graphics1.lineStyle(1, 0xff0000, 1);
        _this.graphics1.moveTo(121, 95);
        _this.graphics1.lineTo(_this.InitialImage.width + 119, 95)

        _this.graphics2 = _this.add.graphics();
        _this.graphics2.lineStyle(1, 0xff0000, 1);
        _this.graphics2.moveTo(121, _this.InitialImage.height + 125);
        _this.graphics2.lineTo(_this.InitialImage.width + 119, _this.InitialImage.height + 125)

        _this.graphics3 = _this.add.graphics();
        _this.graphics3.lineStyle(1, 0xff0000, 1);
        _this.graphics3.moveTo(105, 110);
        _this.graphics3.lineTo(105, _this.InitialImage.height + 109)

        _this.graphics4 = _this.add.graphics();
        _this.graphics4.lineStyle(1, 0xff0000, 1);
        _this.graphics4.moveTo(_this.InitialImage.width + 136, 110);
        _this.graphics4.lineTo(_this.InitialImage.width + 136, _this.InitialImage.height + 109)


        // Small Lines at corner
        _this.line1 = _this.makeVrCornerLines(121, 85)
        _this.line2 = _this.makeVrCornerLines(_this.InitialImage.width + 119, 85)
        _this.line3 = _this.makeVrCornerLines(121, _this.InitialImage.height + 115)
        _this.line4 = _this.makeVrCornerLines(_this.InitialImage.width + 119, _this.InitialImage.height + 115)

        _this.line5 = _this.makeHrCornerLines(96, 110)
        _this.line6 = _this.makeHrCornerLines(_this.InitialImage.width + 126, 110)
        _this.line7 = _this.makeHrCornerLines(96, _this.InitialImage.height + 109)
        _this.line8 = _this.makeHrCornerLines(_this.InitialImage.width + 126, _this.InitialImage.height + 109)

    },
    makeVrCornerLines: function (x, y) {
        graphics = _this.add.graphics();
        graphics.lineStyle(1, 0xff0000, 1);
        graphics.moveTo(x, y);
        graphics.lineTo(x, y + 20)
        return graphics;
    },
    makeHrCornerLines: function (x, y) {
        graphics = _this.add.graphics();
        graphics.lineStyle(1, 0xff0000, 1);
        graphics.moveTo(x, y);
        graphics.lineTo(x + 20, y)
        return graphics;
    },
    makeRatioBox: function () {

        _this.ratioBox = _this.add.sprite(116, 422, 'Text box_1')

        if (_this.questions[_this.count1] == 5) {
            _this.text = _this.add.text(30, 20, 'x  :  y');
            _this.type1 = true;

        }
        else {
            var getRandIdx = Math.floor(Math.random() * (2 - 0) + 0);
            if (getRandIdx == 0) {
                _this.text = _this.add.text(30, 20, 'x  :  y');
                _this.type1 = true;
            }
            else {
                _this.text = _this.add.text(30, 20, 'y  :  x');
                _this.type1 = false;
                _this.type2 = true;
            }

        }

        _this.text2 = _this.add.text(115, 20, '=');
        _this.text3 = _this.add.text(150, 20, '?  :  ?');

        _this.applyingStyle(_this.text)
        _this.ratioBox.addChild(_this.text)

        _this.applyingStyle(_this.text2)
        _this.ratioBox.addChild(_this.text2)

        _this.applyingStyle(_this.text3)
        _this.ratioBox.addChild(_this.text3)


        _this.RatioOptions();




    },
    RatioOptions: function () {

        if (_this.questions[_this.count1] == 5) {
            _this.optionImg1 = _this.optionBox(394, _this.correctXcor, _this.correctYcor);

            if (valuesCombinations[_this.count1] == 1) {
                max = _this.correctXcor - 1
                console.log(max)
                var getRandIdx = Math.floor(Math.random() * (max - 1) + 1);
                console.log(getRandIdx)

                _this.optionImg2 = _this.optionBox(534, _this.correctYcor, getRandIdx);
            }
            else
                _this.optionImg2 = _this.optionBox(534, _this.correctYcor, _this.correctXcor);
            var x, y;
            y = _this.correctYcor;
            x = _this.correctXcor;
            for (i = 6; i >= 2; i--) {
                if (y % i == 0 && x % i == 0) {
                    x = _this.correctYcor / i;
                    y = _this.correctXcor / i;
                }
            }
            if (valuesCombinations[_this.count1] == 1) {
                max = _this.correctXcor - 1
                console.log(max)
                var getRandIdx = Math.floor(Math.random() * (max - 1) + 1);
                console.log(getRandIdx)

                _this.optionImg3 = _this.optionBox(674, getRandIdx, _this.correctXcor);

            }
            else
                _this.optionImg3 = _this.optionBox(674, x, y);
            _this.optionImg1.visible = false;
            _this.optionImg2.visible = false;
            _this.optionImg3.visible = false;

            _this.reArrangeOptions2();
            _this.correctAnsBox = _this.optionImg1;


        }
        else {
            var x, y;

            y = _this.correctYcor;
            x = _this.correctXcor;
            for (i = 6; i >= 2; i--) {
                if (y % i == 0 && x % i == 0) {
                    x = _this.correctXcor / i;
                    y = _this.correctYcor / i;
                }
            }
            if (_this.type1 == true) {
                _this.optionImg1 = _this.optionBox(394, x, y);
                if (valuesCombinations[_this.count1] == 1) {
                    max = _this.correctXcor - 1
                    console.log(max)
                    var getRandIdx = Math.floor(Math.random() * (max - 1) + 1);
                    console.log(getRandIdx)

                    _this.optionImg2 = _this.optionBox(534, _this.correctYcor, getRandIdx);
                }
                else
                    _this.optionImg2 = _this.optionBox(534, y, x);


                if (valuesCombinations[_this.count1] == 1) {
                    max = _this.correctXcor - 1
                    console.log(max)
                    var getRandIdx = Math.floor(Math.random() * (max - 1) + 1);
                    console.log(getRandIdx)

                    _this.optionImg3 = _this.optionBox(674, getRandIdx, _this.correctXcor);

                }
                else
                    _this.optionImg3 = _this.optionBox(674, _this.correctYcor, _this.correctXcor);

                _this.correctAnsBox = _this.optionImg1;

            }
            else {
                _this.optionImg1 = _this.optionBox(394, y, x);

                if (valuesCombinations[_this.count1] == 1) {
                    max = _this.correctXcor - 1
                    console.log(max)
                    var getRandIdx = Math.floor(Math.random() * (max - 1) + 1);
                    console.log(getRandIdx)

                    _this.optionImg2 = _this.optionBox(534, _this.correctYcor, getRandIdx);
                }
                else
                    _this.optionImg2 = _this.optionBox(534, x, y);


                if (valuesCombinations[_this.count1] == 1) {
                    max = _this.correctXcor - 1
                    console.log(max)
                    var getRandIdx = Math.floor(Math.random() * (max - 1) + 1);
                    console.log(getRandIdx)

                    _this.optionImg3 = _this.optionBox(674, getRandIdx, _this.correctXcor);

                }
                else
                    _this.optionImg3 = _this.optionBox(674, _this.correctXcor, _this.correctYcor);

                _this.correctAnsBox = _this.optionImg1;

            }

            _this.optionImg1.visible = false;
            _this.optionImg2.visible = false;
            _this.optionImg3.visible = false;

            _this.reArrangeOptions2();

        }
    },
    optionBox: function (x, xval, yval) {
        box = _this.add.sprite(x, 422, 'Text box_2')
        if (xval > 9 && yval > 9)
            _this.text = _this.add.text(20, 23, `${xval} : ${yval}`);
        else if (xval > 9 || yval > 9) {
            _this.text = _this.add.text(27, 23, `${xval} : ${yval}`);
        }
        else
            _this.text = _this.add.text(37, 23, `${xval} : ${yval}`);
        _this.applyingStyle(_this.text)
        box.addChild(_this.text)


        box.inputEnabled = true;
        box.events.onInputDown.add(_this.imgSelected, _this)
        return box
    },
    showDimensions: function () {

        if (_this.type1 == true) {

            _this.YDimen = _this.add.text(85, _this.InitialImage.height / 2 + 90, 'y')
            _this.applyingStyle(_this.YDimen);
            _this.YDimen.fill = '#ff0000';

            _this.XDimen = _this.add.text(_this.InitialImage.width / 2 + 113, 65, 'x')
            _this.applyingStyle(_this.XDimen);
            _this.XDimen.fill = '#ff0000';

            _this.ycor = _this.add.text(_this.InitialImage.width + 140, _this.InitialImage.height / 2 + 95, `${_this.correctYcor} cm`)
            _this.applyingStyle(_this.ycor);
            _this.ycor.fill = '#ff0000';

            _this.xcor = _this.add.text(_this.InitialImage.width / 2 + 90, _this.InitialImage.height + 125, `${_this.correctXcor} cm`)
            _this.applyingStyle(_this.xcor);
            _this.xcor.fill = '#ff0000';


        }
        else if (_this.type2 == true) {

            _this.YDimen = _this.add.text(85, _this.InitialImage.height / 2 + 90, 'y')
            _this.applyingStyle(_this.YDimen);
            _this.YDimen.fill = '#ff0000';

            _this.XDimen = _this.add.text(_this.InitialImage.width / 2 + 113, 65, 'x')
            _this.applyingStyle(_this.XDimen);
            _this.XDimen.fill = '#ff0000';

            _this.ycor = _this.add.text(_this.InitialImage.width + 140, _this.InitialImage.height / 2 + 95, `${_this.correctYcor} cm`)
            _this.applyingStyle(_this.ycor);
            _this.ycor.fill = '#ff0000';

            _this.xcor = _this.add.text(_this.InitialImage.width / 2 + 90, _this.InitialImage.height + 125, `${_this.correctXcor} cm`)
            _this.applyingStyle(_this.xcor);
            _this.xcor.fill = '#ff0000';


        }

    },
    rightbtnClicked: function () {

        _this.noofAttempts++;
        _this.userselected = 0;
        _this.clickSound.play();
        _this.rightbtn.frame = 1;
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        _this.rightbtn_is_Clicked = true;
        if (_this.questions[_this.count1] <= 4) {
            // whole number part entered evaluate

            if (_this.userselectedBox == _this.correctImage) {
                _this.correctAns();

            }
            else {
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                })
                _this.wrongSelected();
                _this.optionImg1.frame = 0;
                _this.optionImg2.frame = 0;
                _this.optionImg3.frame = 0;
                _this.optionImg1.visible = false;
                _this.optionImg2.visible = false;
                _this.optionImg3.visible = false;


            }
        }
        else {

            if (_this.correctAnsBox == _this.userselectedBox) {
                _this.correctAns();

            }
            else {
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                })
                _this.wrongSelected();
                _this.optionImg1.frame = 0;
                _this.optionImg2.frame = 0;
                _this.optionImg3.frame = 0;
                _this.optionImg1.visible = false;
                _this.optionImg2.visible = false;
                _this.optionImg3.visible = false;


            }
        }
    },
    celebrate: function () {
        _this.counterCelebrationSound.pause();
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();


    },
    wrongSelected: function () {
        _this.wrongans.play();
        _this.rightbtn.inputEnabled = true;
        if (_this.questions[_this.count1] <= 4)
            _this.time.events.add(500, _this.reArrangeOptions, _this)

        else {
            _this.time.events.add(500, _this.reArrangeOptions2, _this)

        }
    },
    reArrangeOptions2: function () {
        options = [_this.optionImg1, _this.optionImg2, _this.optionImg3];
        options = _this.shuffle(options);
        options[0].x = 394;
        options[1].x = 534;
        options[2].x = 674;

        _this.optionImg1.visible = true;
        _this.optionImg2.visible = true;
        _this.optionImg3.visible = true;

    },
    reArrangeOptions: function () {
        options = [_this.optionImg1, _this.optionImg2, _this.optionImg3];
        options = _this.shuffle(options);
        options[0].x = 40;

        if (_this.questions[_this.count1] == 4) {
            if (options[0] == _this.optionImg1) {
                options[1].x = 280;
                options[2].x = 555;
            }
            else if (options[1] == _this.optionImg1) {
                options[1].x = 320;
                options[2].x = 555;
            }
            else {
                options[1].x = 310;
                options[2].x = 580;
            }
        }
        else if ((_this.questions[_this.count1] == 3 || _this.questions[_this.count1] == 2) && options[0] == _this.optionImg2) {
            options[1].x = 246;
            options[2].x = 518;
        }

        else {
            if ((_this.questions[_this.count1] == 3 || _this.questions[_this.count1] == 2) && options[1] == _this.optionImg2) {
                options[1].x = 320;
                options[2].x = 535;

            }

            else {
                options[1].x = 310;
                options[2].x = 580;
            }

        }

        _this.optionImg1.visible = true;
        _this.optionImg2.visible = true;
        _this.optionImg3.visible = true;

    },

    ClearAll: function () {

        _this.rightbtn.destroy();
        if (_this.InitialImage)
            _this.InitialImage.destroy();
        if (_this.optionImg1)
            _this.optionImg1.destroy();
        if (_this.optionImg2)
            _this.optionImg2.destroy();
        if (_this.optionImg3)
            _this.optionImg3.destroy();
        if (_this.count1 == 4) {
            if (_this.background.visible == true) {
                _this.background.visible = false;
            }
        }

        if (_this.count1 > 4) {
            _this.graphics1.destroy();
            _this.graphics2.destroy();
            _this.graphics3.destroy();
            _this.graphics4.destroy();

            _this.line1.destroy();
            _this.line2.destroy();
            _this.line3.destroy();
            _this.line4.destroy();
            _this.line5.destroy();
            _this.line6.destroy();
            _this.line7.destroy();
            _this.line8.destroy();

            _this.ratioBox.destroy();

            _this.XDimen.destroy();
            _this.YDimen.destroy();
            _this.xcor.destroy();
            _this.ycor.destroy();
        }


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

            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.celebrationSound.play();
            _this.starActions(_this.count1);
            _this.time.events.add(2000, _this.ClearAll);
            _this.time.events.add(3000, _this.ArrangeObjects);

        }

        else {
            _this.celebrationSound.play();
            _this.starActions(_this.count1);
            _this.time.events.add(2000, _this.ClearAll);
            _this.time.events.add(2500, () => {
                //_this.state.start('score', true, false);
                _this.state.start('score',true,false,gameID,_this.microConcepts);
            })
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
        // _this.game_id = "NSRP_1_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Ratio and Proportion";
         _this.microConcepts = "Number Systems";
        
        _this.count1++;
        anim.play();
    },


    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },
}