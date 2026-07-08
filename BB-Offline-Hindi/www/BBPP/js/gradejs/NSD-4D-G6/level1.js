Game.NSD_4D_G6level1 = function () { };


Game.NSD_4D_G6level1.prototype =
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
        _this.clickSoundsrc.setAttribute("src", window.baseUrl+ "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src", window.baseUrl+ "sounds/celebration.mp3");
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl+ "sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

        _this.wrongans = document.createElement('audio');
        _this.wronganssrc = document.createElement('source');
        _this.wronganssrc.setAttribute("src", window.baseUrl+ "sounds/WrongCelebrationSound.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.framechange = document.createElement('audio');
        _this.framechangesrc = document.createElement('source');
        _this.framechangesrc.setAttribute("src", window.baseUrl+ "sounds/Frame_change_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);

        _this.snapSound = document.createElement('audio');
        _this.snapSoundsrc = document.createElement('source');
        _this.snapSoundsrc.setAttribute("src", window.baseUrl+ "sounds/snapSound.mp3");
        _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.Ask_Question1 = _this.createAudio("NSD-4D-G6A");
        _this.Ask_Question2 = _this.createAudio("NSD-4D-G6B");

        
        telInitializerbbpp.gameIdInit("NSD_4D_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },

    create: function (game) {


        _this.hintBtn = _this.add.sprite(670,6,'bulb');
        _this.hintBtn.scale.setTo(0.5,0.6);
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

        _this.hint_flag = 0;
        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.Question_flag = -1;
        valuesCombinations = []
        valuesCombinations2 = []
        valueArrayBool = []
        valuesArr = []
        for (i = 0; i <= 30; i++) {
            valueArrayBool[i] = true;
        }



        // To keep track of decimal point
        _this.fourNotEntered = false

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        //** include the background file, navigation bar, stars, timer objects.

        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function ()
        {   
            _this.stopVoice();
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
            console.log("inside hintbutton function");
            //* show the demo video
            _this.hintBtn.inputEnabled = false;
            _this.hintBtn.input.useHandCursor = false;
            _this.time.events.add(1, function () {
                console.log(_this.hintBtn.inputEnabled, "status of hintBtn");
                _this.ViewDemoVideo();
            });
        });

        _this.generateStarsForTheScene(6);

        //* include variables for use - objGroup (where egg objects can be added)
        _this.objGroup;
        _this.numGroup;

        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);
    },


    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl+ "questionSounds/NSD-4D-G6/" + _this.languageSelected + "/" + src + ".mp3");
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
        _this.StoreArrayValues();

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
    StoreArrayValues: function () {
        Value1Array = [];
        Value10thArray = [];
        valuesCombinations = []

        Value1Array2 = [];
        Value10thArray2 = [];
        valuesCombinations2 = []

        quesChoice = []
        firstComb = true;
        secondComb = true;


        var getSameIdx = Math.floor(Math.random() * (6 - 0) + 0);
        var getRevIdx = Math.floor(Math.random() * (6 - 0) + 0);
        while (getRevIdx == getSameIdx) {
            var getRevIdx = Math.floor(Math.random() * (6 - 0) + 0);

        }

        for (i = 0; i < 6; i++) {
            valuesArr = []
            for (j = 1; j <= 30; j++) {
                if (valueArrayBool[j] == true) {
                    // Contains all available random indexes
                    valuesArr.push(j);
                }
            }
            if (i == getSameIdx) {

                var num = valuesArr[Math.floor(Math.random() * valuesArr.length)]
                valueArrayBool[num] = false;

                Value1Array[i] = Math.floor(num / 10)
                Value10thArray[i] = num % 10;
                value = (Value1Array[i] + "." + Value10thArray[i])

                Value1Array2[i] = Value1Array[i]
                Value10thArray2[i] = Value10thArray[i]
                var value1 = (Value1Array2[i] + "." + Value10thArray2[i])

                // valuesCombinations[i] = value;
                // valuesCombinations2[i] = value1;

            }
            else if (i == getRevIdx) {
                valuesArr = []
                options = [1, 2, 3, 12]
                for (j = 0; j < 5; j++) {
                    if (valueArrayBool[options[j]] == true) {
                        // Contains all available random indexes
                        valuesArr.push(options[j]);
                    }
                }
                if (valuesArr.length == 0) {
                    valuesArr = [1, 2, 3, 12]
                }
                var num = valuesArr[Math.floor(Math.random() * valuesArr.length)]
                valueArrayBool[num] = false;

                Value1Array[i] = Math.floor(num / 10)
                Value10thArray[i] = num % 10;
                value = (Value1Array[i] + "." + Value10thArray[i])

                Value1Array2[i] = Value10thArray[i]
                Value10thArray2[i] = Value1Array[i]
                num2 = (Value1Array2[i] + "." + Value10thArray2[i]) * 10
                var value1 = (Value1Array2[i] + "." + Value10thArray2[i])
                valueArrayBool[num2] = false;

                // valuesCombinations[i] = value;
                // valuesCombinations2[i] = value1;
            }
            else {

                var num1 = valuesArr[Math.floor(Math.random() * valuesArr.length)]
                valueArrayBool[num1] = false;

                Value1Array[i] = Math.floor(num1 / 10)
                Value10thArray[i] = num1 % 10;
                value = (Value1Array[i] + "." + Value10thArray[i])

                num2Options = []
                for (k = num1 - 3; k <= num1 + 3; k++) {
                    if (k != num1 && k > 0 && k < 31)
                        num2Options.push(k)
                }
                var num2 = num2Options[Math.floor(Math.random() * num2Options.length)]
                valueArrayBool[num2] = false;

                Value1Array2[i] = Math.floor(num2 / 10)
                Value10thArray2[i] = num2 % 10;

                var value1 = (Value1Array2[i] + "." + Value10thArray2[i])

            }
            var ch = Math.floor(Math.random() * 2)
            if ((ch == 0 && firstComb != false) || secondComb == false) {
                // Smallest on up
                if (value < value1) {
                    valuesCombinations[i] = value;
                    valuesCombinations2[i] = value1;
                }
                else {
                    valuesCombinations[i] = value1;
                    valuesCombinations2[i] = value;
                }
                quesChoice[i] = 1
                if (i > 0 && quesChoice[i - 1] == 1) {
                    firstComb = false;
                    secondComb = true
                }
            }
            else {
                // samllest down

                if (value < value1) {
                    valuesCombinations[i] = value1;
                    valuesCombinations2[i] = value;
                }
                else {
                    valuesCombinations[i] = value;
                    valuesCombinations2[i] = value1;
                }
                quesChoice[i] = 2
                if (i > 0 && quesChoice[i - 1] == 2)
                    secondComb = false;

            }

        }
        console.log(valuesCombinations)
        console.log(valuesCombinations2)
        _this.ArrangeObjects()

    },
    ArrangeObjects: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.userselectedBox = ''
        _this.part1 = true;
        _this.textTable = _this.add.sprite(25, 80, 'Table');
        _this.textTable.scale.setTo(1, 1)
        _this.maketable();
        _this.scale = _this.add.sprite(20, 200, 'scale')

        _this.showAnswerBox();
        _this.showOptions(260);
        _this.rightbtn = _this.add.sprite(830, 440, 'TickBtn')
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this)

        if (_this.count1 == 0) {
            _this.Ask_Question1.play();
        }
        _this.Question_flag = 1;
    },
    showAnswerBox: function () {
        _this.questionBox = _this.add.sprite(810, 80, 'Text box_2')
        if (_this.part1 == true)
            var text = _this.add.text(20, 20, valuesCombinations[_this.count1])
        else {

            var text = _this.add.text(20, 20, valuesCombinations2[_this.count1])
        }


        _this.applyingStyle(text)
        _this.questionBox.addChild(text)
    },
    showScale2: function () {
        _this.scale2 = _this.add.sprite(20, 320, 'scale')
        _this.showAnswerBox();
        _this.showOptions(380);
        _this.questionBox.visible = true;
        _this.yellowBox.inputEnabled = true;
        _this.redBox.inputEnabled = true
        _this.allowyellow = true;
        _this.allowred = true;
        _this.scaleArr = []
        _this.boxes = []
        for (i = 0; i < 30; i++) {
            _this.scaleArr[i] = false
        }

    },
    showOptions: function (y) {
        _this.zeroBox = _this.add.sprite(20, y, 'Text box_1')
        _this.zeroBox.scale.setTo(0.8)
        var zero = _this.add.text(22, 10, '0');
        zero.scale.setTo(1.3)
        zero.fill = '#FF0000'
        _this.zeroBox.addChild(zero)

        _this.oneBox = _this.add.sprite(303, y, 'Text box_1')
        _this.oneBox.scale.setTo(0.8)
        var one = _this.add.text(22, 10, '1');
        one.scale.setTo(1.3)
        one.fill = '#FF0000'
        _this.oneBox.addChild(one)

        _this.twoBox = _this.add.sprite(603, y, 'Text box_1')
        _this.twoBox.scale.setTo(0.8)
        var two = _this.add.text(22, 10, '2');
        two.scale.setTo(1.3)
        two.fill = '#FF0000'
        _this.twoBox.addChild(two)

        _this.threeBox = _this.add.sprite(900, y, 'Text box_1')
        _this.threeBox.scale.setTo(0.8)
        var three = _this.add.text(22, 10, '3');
        three.scale.setTo(1.3)
        three.fill = '#FF0000'
        _this.threeBox.addChild(three)

    },
    storeQnbox: function (y) {
        if (_this.part2 == true) {
            valuearr = valuesCombinations[_this.count1]
        }
        else {
            valuearr = valuesCombinations2[_this.count1]

        }

        if (valuearr < 0.5)
            var xcor = _this.scale.width / 30 - 3 + 29.2 * valuearr * 10;
        else if (valuearr < 0.7)
            var xcor = _this.scale.width / 30 - 3 + 29.5 * valuearr * 10;
        else if (valuearr == 1.0 || (valuearr >= 0.7))
            var xcor = _this.scale.width / 30 - 3 + 29.8 * valuearr * 10;
        else {
            var xcor = _this.scale.width / 30 - 3 + 29.9 * valuearr * 10;

        }
        _this.qnbox = _this.add.sprite(xcor - 20, y, 'Text box_3')
        if (valuearr * 10 >= 20)
            _this.text = _this.add.text(12, 8, valuearr)
        else
            _this.text = _this.add.text(11.5, 8, valuearr)

        _this.qnbox.addChild(_this.text)
        _this.applyingStyle(_this.text)
        // _this.text.fill = '#FF0000'

        if (_this.qnbox.x >= 20 && _this.qnbox.x <= 65) {
            _this.overlappedbox = _this.zeroBox
        }
        if (_this.qnbox.x >= 267 && _this.qnbox.x <= 350) {
            _this.overlappedbox = _this.oneBox
        }
        if (_this.qnbox.x >= 567 && _this.qnbox.x <= 650) {
            _this.overlappedbox = _this.twoBox
        }
        if (_this.qnbox.x >= 865 && _this.qnbox.x <= 950) {
            _this.overlappedbox = _this.threeBox
        }

        _this.boxtravlex = xcor;
        return _this.qnbox
    },

    storeSignAns: function () {
        box1name = valuesCombinations[_this.count1] * 10
        box2name = valuesCombinations2[_this.count1] * 10
        if (box1name == box2name) {
            _this.correctSign = _this.equalsSign
        }
        else if (box1name > box2name) {
            _this.correctSign = _this.greaterSign
        }
        else {
            _this.correctSign = _this.lesserSign
        }
    },
    signDragUpdate(target) {
        target.bringToTop();

    },
    signDrag: function (target) {
        target.bringToTop();
        if (_this.checkOverlap(target, _this.dropBox) && _this.grayBoxEmpty == true) {
            target.frame = 1;
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
            target.x = 598;
            target.y = 453;
            _this.grayBoxEmpty = false;
            _this.userSeelectedSign = target;

        }
        else if (_this.checkOverlap(target, _this.dropBox) && _this.grayBoxEmpty == false) {
            if (_this.userSeelectedSign == _this.lesserSign) {
                _this.userSeelectedSign.x = 120
            }
            else if (_this.userSeelectedSign == _this.greaterSign)
                _this.userSeelectedSign.x = 280
            else
                _this.userSeelectedSign.x = 200
            _this.userSeelectedSign.y = 450;
            _this.userSeelectedSign.frame = 0;
            _this.userSeelectedSign = ''
            target.frame = 1;
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();

            target.x = 598;
            target.y = 453;
            _this.grayBoxEmpty = false;
            _this.userSeelectedSign = target;

        }
        else {
            if (target.name == 'greatersign') {
                target.x = 280
            }
            else if (target.name == 'lessersign')
                target.x = 120
            else
                target.x = 200
            target.y = 450;
            target.frame = 0;
            if (_this.lesserSign.x == 120 && _this.equalsSign.x == 200 && _this.greaterSign.x == 280) {
                _this.grayBoxEmpty = true;
            }

        }
    },
    reArrangeYellowCubes: function () {

        var count = 0;
        _this.convertA = []
        _this.convertR = []

        for (i = 0; i < _this.boxes.length; i++) {

            if (_this.boxes[i].key == 'red-box') {
                count = 0;
            }
            else if (_this.boxes[i].key == 'yellow-box') {
                count++;
            }
            if (count == 10) {
                count = 0;
                var currentx = _this.boxes[i - 9].x
                for (j = i - 9; j <= i; j++) {
                    _this.convertA.push(_this.boxes[j])
                }
                var redobj = _this.add.sprite(currentx, 6, 'red-box')
                redobj.alpha = 0.4
                redobj.visible = false;
                _this.convertR.push(redobj)
                if (_this.part2 == true)
                    _this.scale.addChild(redobj)
                else {
                    _this.scale2.addChild(redobj)
                }
            }

        }
        if (_this.convertA.length > 1)

            _this.framechange.play()

        for (let i = 0; i < 6; i++) {
            _this.time.events.add(300 * i, function () {
                _this.convertA.forEach(element => {
                    element.alpha -= 0.1
                });
            });
        }
        _this.time.events.add(400, () => {
            for (let i = 0; i < 6; i++) {
                _this.time.events.add(300 * i, function () {
                    _this.convertR.forEach(element => {
                        element.visible = true;
                        element.alpha += 0.1
                    });
                });
            }
        })

    },

    rightbtnClicked: function () {
       
        _this.userselected = 0;
        _this.clickSound.play();
        _this.rightbtn.frame = 1;
        _this.lightOverlappedBox = 0;
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        _this.rightbtn_is_Clicked = true;

        if (_this.part1 == true) {
            for (i = 0; i < _this.scaleArr.length; i++) {
                if (_this.scaleArr[i] == true) {
                    _this.userselected++;
                }
            }
            if (_this.userselected == valuesCombinations[_this.count1] * 10) {
                // _this.reArrangeYellowCubes();

                _this.part1 = false;
                _this.part2 = true;
                _this.onebox1 = _this.oneBox
                _this.zerobox1 = _this.zeroBox;
                _this.twoBox1 = _this.twoBox;
                _this.threeBox1 = _this.threeBox;
                _this.celebrate();

                _this.time.events.add(1000, () => {

                    _this.qnbox1 = _this.storeQnbox(260)
                    _this.qnbox1.visible = false
                    _this.questionBox.bringToTop();
                    var dist = Phaser.Math.distance(_this.questionBox.x, _this.questionBox.y, _this.qnbox.x, _this.qnbox.y);
                    // console.log(dist)
                    // console.log(_this.boxtravlex)

                    var tween = _this.add.tween(_this.questionBox);
                    tween.to({ x: _this.boxtravlex - 25, y: 260 - 3 }, dist + 200, 'Linear', true, 0);

                    tween.onComplete.add(() => {
                        if (_this.overlappedbox) {       //if any box is overlapped 
                            // _this.overlappedbox.visible = false
                            _this.hidetween = _this.add.tween(_this.overlappedbox).to({ alpha: 0.0 }, 600, 'Linear', true, 0);
                            _this.lightOverlappedBox = 700;
                        }
                        _this.time.events.add(500, () => {

                            _this.questionBox.visible = false
                            _this.qnbox1.visible = true
                            _this.text.fill = '#FF0000'
                            _this.snapSound.play()

                        })
                        _this.time.events.add(1000 + _this.lightOverlappedBox, () => {

                            _this.reArrangeYellowCubes();          //10 yellow cubes = 1 red

                            if (_this.convertA.length >= 1) {
                                var tweenTime = 1500;
                            }
                            else {
                                var tweenTime = 0;

                            }
                            _this.time.events.add(tweenTime, () => {
                                _this.rightbtn.frame = 0;
                                _this.showScale2();

                                _this.time.events.add(1000, () => {
                                    _this.rightbtn.inputEnabled = true;

                                })
                            })


                        })


                    })

                })
            }
            else {
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                })
                _this.wrongSelected();
            }
        }
        else if (_this.part2 == true) {
            for (i = 0; i < _this.scaleArr.length; i++) {
                if (_this.scaleArr[i] == true) {
                    _this.userselected++;
                }
            }
            if (_this.userselected == valuesCombinations2[_this.count1] * 10) {
                _this.part2 = false;
                _this.part3 = true;
                _this.celebrate();
                _this.time.events.add(1000, () => {
                    _this.qnbox2 = _this.storeQnbox(380)
                    _this.qnbox2.visible = false
                    _this.questionBox.bringToTop();
                    var dist = Phaser.Math.distance(_this.questionBox.x, _this.questionBox.y, _this.qnbox.x, _this.qnbox.y);
                    // console.log(dist)
                    // console.log(_this.boxtravlex)


                    var tween = _this.add.tween(_this.questionBox);
                    tween.to({ x: _this.boxtravlex - 23, y: 380 - 3 }, dist + 200, 'Linear', true, 0);

                    tween.onComplete.add(() => {
                        if (_this.overlappedbox) {
                            // _this.overlappedbox.visible = false
                            _this.add.tween(_this.overlappedbox).to({ alpha: 0.0 }, 600, 'Linear', true, 0);
                            _this.lightOverlappedBox = 700;


                        }
                        _this.time.events.add(500, () => {
                            _this.questionBox.visible = false
                            _this.qnbox2.visible = true
                            _this.text.fill = '#FF0000'
                            _this.snapSound.currentTime = 0

                            _this.snapSound.play()

                        })
                        _this.time.events.add(1100 + _this.lightOverlappedBox, () => {

                            _this.rightbtn.frame = 0;

                            _this.reArrangeYellowCubes();
                            if (_this.convertA.length > 1) {
                                var tweenTime = 1700;
                            }
                            else {
                                var tweenTime = 0;

                            }

                            _this.time.events.add(tweenTime, () => {
                                _this.rightbtn.inputEnabled = true;


                                _this.showComparisonQues();

                            })
                        })
                    })

                })
                _this.Question_flag = -1;
            }
            else {
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                })
                _this.wrongSelected();
            }

        }
        else if (_this.part3 == true) {
            _this.noofAttempts++;
            if (_this.userSeelectedSign == _this.correctSign) {
                _this.part3 = false;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.correctAns();
            }
            else {
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                })
                _this.userSeelectedSign.frame = 0;
                _this.wrongSelected();
            }
        }
    },
    showComparisonQues: function () {
        _this.textTable.destroy();
        _this.questionBox.destroy();
        _this.rightbtn.destroy();

        _this.slideGrp = _this.add.group();

        _this.framechange.play()

        // _this.slideGrp.x = -1000;

        _this.slideGrp.add(_this.scale);
        _this.slideGrp.add(_this.scale2);
        _this.slideGrp.add(_this.onebox1);
        _this.slideGrp.add(_this.zerobox1);
        _this.slideGrp.add(_this.twoBox1);
        _this.slideGrp.add(_this.threeBox1);
        _this.slideGrp.add(_this.oneBox);
        _this.slideGrp.add(_this.zeroBox);
        _this.slideGrp.add(_this.twoBox);
        _this.slideGrp.add(_this.threeBox);
        _this.slideGrp.add(_this.qnbox1);
        _this.slideGrp.add(_this.qnbox2);

        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ y: -80 }, 1000, 'Linear', true, 0);


        _this.slideGrp2 = _this.add.group();

        _this.bluebg = _this.add.sprite(0, 400, 'blueBox')
        _this.makeSignObjects();

        _this.slideGrp2.add(_this.bluebg);
        _this.slideGrp2.add(_this.lesserSign);
        _this.slideGrp2.add(_this.equalsSign);
        _this.slideGrp2.add(_this.greaterSign);
        _this.slideGrp2.add(_this.dropBox);
        _this.slideGrp2.add(_this.qnbox3);
        _this.slideGrp2.add(_this.qnbox4);
        _this.slideGrp2.add(_this.rightbtn);

        _this.lesserSign.inputEnabled = false
        _this.equalsSign.inputEnabled = false
        _this.greaterSign.inputEnabled = false

        _this.slideGrp2.add(_this.bluebg);


        _this.slideGrp2.x = -1000
        tween.onComplete.add(() => {
            var tween2 = _this.add.tween(_this.slideGrp2);
            tween2.to({ x: 0 }, 2000, 'Linear', true, 0);

            if (_this.count1 == 0)
                _this.Ask_Question2.play();

            _this.Question_flag = 2;
            tween2.onComplete.add(() => {


                _this.lesserSign.inputEnabled = true
                _this.equalsSign.inputEnabled = true
                _this.greaterSign.inputEnabled = true

            }, _this)
        }, _this)




    },
    makeSignObjects: function () {

        // _this.time.events.add(100, () => {

        _this.lesserSign = _this.add.sprite(120, 450, 'lesser-sign')
        _this.lesserSign.inputEnabled = true
        _this.lesserSign.input.enableDrag(true)
        _this.lesserSign.name = 'lessersign'
        _this.lesserSign.events.onDragStop.add(_this.signDrag, _this)
        _this.lesserSign.events.onDragUpdate.add(_this.signDragUpdate, _this)

        _this.equalsSign = _this.add.sprite(200, 450, 'equal-sign')
        _this.equalsSign.inputEnabled = true
        _this.equalsSign.input.enableDrag(true)
        _this.equalsSign.name = 'equalsign'
        _this.equalsSign.events.onDragStop.add(_this.signDrag, _this)
        _this.equalsSign.events.onDragUpdate.add(_this.signDragUpdate, _this)

        _this.greaterSign = _this.add.sprite(280, 450, 'greater-sign')
        _this.greaterSign.inputEnabled = true
        _this.greaterSign.input.enableDrag(true)
        _this.greaterSign.name = 'greatersign'
        _this.greaterSign.events.onDragStop.add(_this.signDrag, _this)
        _this.greaterSign.events.onDragUpdate.add(_this.signDragUpdate, _this)

        _this.dropBox = _this.add.sprite(600, 454, 'grayBox')
        _this.grayBoxEmpty = true
        _this.storeSignAns();

        _this.qnbox3 = _this.add.sprite(500, 452, 'Text box_3')
        var text = _this.add.text(10, 8, valuesCombinations[_this.count1])
        _this.qnbox3.addChild(text)
        _this.applyingStyle(text)

        _this.qnbox4 = _this.add.sprite(700, 452, 'Text box_3')
        var text = _this.add.text(10, 8, valuesCombinations2[_this.count1])
        _this.qnbox4.addChild(text)
        _this.applyingStyle(text)

        _this.rightbtn = _this.add.sprite(800, 442, 'TickBtn')
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this)

        // })

    },
    celebrate: function () {
        _this.counterCelebrationSound.pause();
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.yellowBox.inputEnabled = false;
        _this.redBox.inputEnabled = false;
        _this.boxes.forEach(element => {
            element.inputEnabled = false
        });
        if (_this.newboxes) {
            _this.newboxes.forEach(element => {
                element.inputEnabled = false
            });
        }

    },
    wrongSelected: function () {
        _this.wrongans.play();

        _this.rightbtn.inputEnabled = true;
        if (_this.part1 == true) {
            _this.removepartA();
        }
        else if (_this.part2 == true) {
            _this.removepartA();

        }
        else {
            _this.removepartB();
        }

    },
    removepartA: function () {
        _this.time.events.add(300, () => {
            if (_this.part1 == true) {
                for (i = 0; i < _this.scale.children.length; i++) {
                    _this.scale.getChildAt(i).visible = false;

                }
            }
            else {
                for (i = 0; i < _this.scale2.children.length; i++) {
                    _this.scale2.getChildAt(i).visible = false;

                }
            }
            for (i = 0; i < 30; i++) {
                _this.scaleArr[i] = false;
            }
            _this.allowyellow = true;
            _this.allowred = true;
            _this.userselected = 0;
        })
    },
    removepartB: function () {
        _this.lesserSign.x = 120;
        _this.equalsSign.x = 200;
        _this.greaterSign.x = 280
        _this.lesserSign.y = 450;
        _this.equalsSign.y = 450;
        _this.greaterSign.y = 450
        _this.grayBoxEmpty = true;
    },
    maketable: function () {
        _this.scaleArr = []
        _this.boxes = []
        for (i = 0; i < 30; i++) {
            _this.scaleArr[i] = false
        }
        _this.yellowBoxtext = _this.add.text(10, 30, '0.1')
        _this.textTable.addChild(_this.yellowBoxtext)

        _this.eq1 = _this.add.graphics();
        _this.eq1.lineStyle(4, 0x000000);
        _this.eq1.moveTo(58, 40);
        _this.eq1.lineTo(73, 40);
        _this.textTable.addChild(_this.eq1)

        _this.eq2 = _this.add.graphics();
        _this.eq2.lineStyle(4, 0x000000);
        _this.eq2.moveTo(58, 50);
        _this.eq2.lineTo(73, 50);
        _this.textTable.addChild(_this.eq2)

        _this.yellowBox = _this.add.sprite(86, 24, 'yellow-box')
        _this.textTable.addChild(_this.yellowBox)
        _this.yellowBox.inputEnabled = true;
        _this.yellowBox.input.enableDrag(true);
        _this.yellowBox.events.onDragStop.add(_this.yellowdragStop, _this.yellowBox);
        _this.yellowBox.events.onDragUpdate.add(_this.yellowdragUpdate, _this.yellowBox);


        _this.redBoxtext = _this.add.text(138, 30, '1')
        _this.textTable.addChild(_this.redBoxtext)

        _this.eq11 = _this.add.graphics();
        _this.eq11.lineStyle(4, 0x000000);
        _this.eq11.moveTo(163, 40);
        _this.eq11.lineTo(178, 40);
        _this.textTable.addChild(_this.eq11)

        _this.eq21 = _this.add.graphics();
        _this.eq21.lineStyle(4, 0x000000);
        _this.eq21.moveTo(163, 50);
        _this.eq21.lineTo(178, 50);
        _this.textTable.addChild(_this.eq21)

        _this.redBox = _this.add.sprite(190, 20, 'red-box')
        _this.textTable.addChild(_this.redBox)
        _this.redBox.inputEnabled = true;
        _this.redBox.input.enableDrag(true);
        _this.redBox.events.onDragStop.add(_this.ReddragStop, _this.redBox);
        _this.redBox.events.onDragUpdate.add(_this.ReddragUpdate, _this.redBox);

        _this.allowred = true;
        _this.allowyellow = true;

    },
    revStop: function (target) {
        if (_this.checkOverlap(target, _this.textTable)) {
            target.scale.setTo()
            target.visible = false
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
            for (i = target.pointx; i < target.pointy; i++) {
                _this.scaleArr[i] = false;
            }
            _this.rearrangeCubes(target);
        }
        else {
            target.x = target.initialX
            target.y = target.initialY

        }
    },
    revUpdate: function (target) {
        target.bringToTop();
    },
    rearrangeCubes: function (target) {
        for (i = 0; i < 30; i++) {
            _this.scaleArr[i] = false
        }
        _this.allowred = true;
        _this.allowyellow = true;

        _this.newboxes = []
        for (x = 0; x < _this.boxes.length; x++) {
            if (_this.boxes[x].pointy - _this.boxes[x].pointx > 2 && _this.boxes[x].visible == true) {

                for (i = 0; i < _this.scaleArr.length; i++) {
                    if (i == 29 && _this.scaleArr[i] == true) {
                        // all filled nothing can be entered
                        _this.allowyellow = false
                    }
                    if (i == 20 && _this.scaleArr[i] == true) {
                        // all filled nothing can be entered
                        _this.allowred = false
                        break;
                    }
                    if (_this.scaleArr[i] == false && _this.allowred == true) {

                        var redobj = _this.add.sprite(i * 30 + 8, 6, 'red-box')
                        redobj.inputEnabled = true
                        redobj.input.enableDrag(true)
                        redobj.events.onDragStop.add(_this.revStop, _this)
                        redobj.events.onDragUpdate.add(_this.revUpdate, _this)

                        redobj.initialX = redobj.x
                        redobj.initialY = redobj.y

                        redobj.pointx = i
                        redobj.pointy = i + 10
                        _this.newboxes.push(redobj)
                        if (_this.part1 == true)
                            _this.scale.addChild(redobj)
                        else
                            _this.scale2.addChild(redobj)



                        for (k = i; k < i + 10; k++)
                            _this.scaleArr[k] = true
                        break;
                    }

                }
            }
            else if (_this.boxes[x].visible == true) {

                for (i = 0; i < _this.scaleArr.length; i++) {
                    if (i == 20 && _this.scaleArr[i] == true) {
                        _this.allowred = false
                    }
                    if (i == 29 && _this.scaleArr[i] == true) {
                        _this.allowyellow = false
                        break;
                    }
                    if (_this.scaleArr[i] == false && _this.allowyellow == true) {

                        var yellowobj = _this.add.sprite(i * 30 + 8, 6, 'yellow-box')
                        yellowobj.inputEnabled = true
                        yellowobj.input.enableDrag(true)
                        yellowobj.events.onDragStop.add(_this.revStop, _this)
                        yellowobj.events.onDragUpdate.add(_this.revUpdate, _this)
                        yellowobj.initialX = yellowobj.x
                        yellowobj.initialY = yellowobj.y

                        yellowobj.pointx = i
                        yellowobj.pointy = i + 1
                        _this.newboxes.push(yellowobj)
                        if (_this.part1 == true)
                            _this.scale.addChild(yellowobj)
                        else
                            _this.scale2.addChild(yellowobj)
                        // _this.scale.addChild(yellowobj)
                        _this.scaleArr[i] = true
                        break;
                    }


                }
            }
        }
        _this.boxes.forEach(element => {
            element.destroy();
        });
        _this.boxes = _this.newboxes
    },
    ReddragUpdate: function () {
        _this.redBox.bringToTop();
    },
    yellowdragUpdate: function () {
        _this.yellowBox.bringToTop();

    },
    ReddragStop: function (target) {
        var currentScale = _this.part1 == true ? _this.scale : _this.scale2

        if (_this.checkOverlap(target, currentScale)) {
            _this.redBox.x = 190;
            _this.redBox.y = 20;
            for (i = 0; i < _this.scaleArr.length; i++) {
                if (i == 29 && _this.scaleArr[i] == true) {
                    // all filled nothing can be entered
                    _this.allowyellow = false
                }
                if (i == 20 && _this.scaleArr[i] == true) {
                    // all filled nothing can be entered
                    _this.allowred = false
                    break;
                }
                if (_this.scaleArr[i] == false && _this.allowred == true) {
                    _this.snapSound.currentTime = 0;
                    _this.snapSound.play();
                    var redobj = _this.add.sprite(i * 30 + 8, 6, 'red-box')
                    redobj.inputEnabled = true
                    redobj.input.enableDrag(true)
                    redobj.events.onDragStop.add(_this.revStop, _this)
                    redobj.events.onDragUpdate.add(_this.revUpdate, _this)

                    redobj.initialX = redobj.x
                    redobj.initialY = redobj.y

                    redobj.pointx = i
                    redobj.pointy = i + 10
                    _this.boxes.push(redobj)
                    if (_this.part1 == true)
                        _this.scale.addChild(redobj)
                    else
                        _this.scale2.addChild(redobj)
                    // _this.scale.addChild(redobj)

                    for (k = i; k < i + 10; k++)
                        _this.scaleArr[k] = true
                    break;
                }


            }
        }
        else {

            _this.redBox.x = 190;
            _this.redBox.y = 20;
        }

    },
    yellowdragStop: function (target) {
        var currentScale = _this.part1 == true ? _this.scale : _this.scale2
        if (_this.checkOverlap(target, currentScale)) {
            _this.yellowBox.x = 86;
            _this.yellowBox.y = 24;

            for (i = 0; i < _this.scaleArr.length; i++) {
                if (i == 20 && _this.scaleArr[i] == true) {
                    // all filled nothing can be entered
                    _this.allowred = false
                }
                if (i == 29 && _this.scaleArr[i] == true) {
                    // all filled nothing can be entered
                    _this.allowyellow = false
                    break;
                }
                if (_this.scaleArr[i] == false && _this.allowyellow == true) {
                    _this.snapSound.currentTime = 0;
                    _this.snapSound.play();
                    var yellowobj = _this.add.sprite(i * 30 + 8, 6, 'yellow-box')
                    yellowobj.inputEnabled = true
                    yellowobj.input.enableDrag(true)
                    yellowobj.events.onDragStop.add(_this.revStop, _this)
                    yellowobj.events.onDragUpdate.add(_this.revUpdate, _this)
                    yellowobj.initialX = yellowobj.x
                    yellowobj.initialY = yellowobj.y

                    yellowobj.pointx = i
                    yellowobj.pointy = i + 1
                    _this.boxes.push(yellowobj)
                    if (_this.part1 == true)
                        _this.scale.addChild(yellowobj)
                    else
                        _this.scale2.addChild(yellowobj)
                    // _this.scale.addChild(yellowobj)
                    _this.scaleArr[i] = true
                    break;
                }
            }
        }
        else {
            _this.yellowBox.x = 86;
            _this.yellowBox.y = 24;
        }

    },
    ClearAll: function () {
        _this.scale.destroy();
        _this.scale2.destroy();
        if (_this.textTable)
            _this.textTable.destroy();
        _this.rightbtn.destroy();
        if (_this.questionBox)
            _this.questionBox.destroy();
        if (_this.zeroBox.destroy());
        if (_this.oneBox.destroy());
        if (_this.twoBox.destroy());
        if (_this.threeBox.destroy());

        if (_this.zerobox1.destroy());
        if (_this.onebox1.destroy());
        if (_this.twoBox1.destroy());
        if (_this.threeBox1.destroy());

        _this.qnbox1.destroy();
        _this.qnbox2.destroy();
        _this.qnbox3.destroy();
        _this.qnbox4.destroy();

        _this.lesserSign.destroy();
        _this.equalsSign.destroy();
        _this.greaterSign.destroy();
        _this.dropBox.destroy();
        _this.rightbtn.destroy();
        _this.bluebg.destroy();
    },
    applyingStyle: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
    },
    checkOverlap: function (spriteA, spriteB) {
        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },
    correctAns: function () {

        if (_this.count1 < 5) {

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
                this.state.start('score',true,false,gameID,_this.microConcepts);

            })
        }
    },
    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');

        // //*star action changes
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NSD_4D_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Decimals";
       _this.microConcepts = "Number Systems";

        _this.count1++;
        anim.play();
    },


    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },

    DemoVideo: function () {
        //*  complete the picture for the given line of symmetry
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl+ "questionSounds/NSD-4D-G6/" +
            _this.languageSelected + "/DV-NSD-4D-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl+ "questionSounds/NSD-4D-G6/" +
            _this.languageSelected + "/NSD-4D-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl+ "questionSounds/NSD-4D-G6/" +
            _this.languageSelected + "/NSD-4D-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(880, 320, 'skipArrow');       //* skip button shown at the bottom
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
        _this.q1Sound.play();
        console.log("Q1 SOUND")
        _this.demoVideo_1.playbackRate = 1.3;
    },

    stopAudio: function () {
        //* clear all the timers first
        if (_this.q1Timer) clearTimeout(_this.q1Timer);

        if (_this.demoAudio1) {
            console.log("removing the dv1");
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
            console.log("removing the q1");
            _this.q2Sound.pause();
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed
    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsd4d_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl+ "assets/demoVideos/NSD-4D-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.play();

        _this.demoAudio1.addEventListener('ended', _this.dA1);

        _this.q1Timer = setTimeout(function ()    //* q1Sound js timer to play q1Timer after 56 seconds.
        {
            console.log("inside Q2sound.....")
            _this.demoVideo_1.playbackRate = 1;
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 45000);

        _this.demoVideo_1.onComplete.add(function () {
            _this.stopAudio();
            _this.demoVideo_1.stop(false);
            _this.videoWorld_1.destroy();


            if (_this.hintBtn) {
                console.log('inside show demo video..............');
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;
        });
    }
}