Game.NSD_3A_G6level1 = function () { };


Game.NSD_3A_G6level1.prototype =
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

        _this.Ask_Question1 = _this.createAudio("NSD-3A-G6A");
        _this.Ask_Question2 = _this.createAudio("NSD-3A-G6B");

        telInitializerbbpp.gameIdInit("NSD_3A_G6", gradeSelected);
        console.log(gameID, "gameID...");
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

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

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
        _this.selectedAns4 = '';

        // To keep track of decimal point
        _this.fourNotEntered = false

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
        _this.time.events.add(1000, _this.getQuestion);
    },


    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-3A-G6/" + _this.languageSelected + "/" + src + ".mp3");
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

        _this.Randomize();

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

        if (_this.Ask_Question1) {
            _this.Ask_Question1.pause();
            _this.Ask_Question1 = null;
        }
        else if (_this.Ask_Question2) {
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
    showfractionbox: function (addvar, yvalue) {
        _this.onebox = true
        _this.AnswerBox = _this.add.image(addvar, 380 + yvalue, 'white-box');
        _this.AnswerBox.scale.setTo(1, 1)
        _this.AnswerBox.frame = 1;
        _this.twofractionboxes = false;

    },
    StoreArrayValues: function () {

        Value1Array = [];
        Value10Array = [];
        Value100Array = [];
        Value10thArray = [];
        Value100thArray = [];
        valuesCombinations = []
        _this.wholenumasked = false;
        _this.ZeroAtOnes = false;
        _this.ZeroAtenth = false;
        _this.type1 = 0;
        foundBoundary = false;


        //    1-for 10.01 types where dont need to show 100 notes
        //    2 for 909.9  types where dont need to show 1/100th coins
        _this.typearr = [1, 2]

        for (i = 0; i < 6; i++) {

            var typech = _this.typearr[Math.floor(Math.random() * _this.typearr.length)]
            if (i < 2)
                _this.typearr[i] = typech
            else {
                if (_this.typearr[i - 1] && _this.typearr[i - 1] == 1) {
                    _this.typearr[i] = 2

                }
                else if (_this.typearr[i - 1] && _this.typearr[i - 1] == 2) {
                    _this.typearr[i] = 1

                }
            }
            if (_this.typearr[i] == 1)
                _this.type1++;

        }
        console.log(_this.typearr)

        _this.got = false;
        for (let i = 0; i < 6; i++) {
            foundBoundary = false;

            if (_this.typearr[i] == 1) {
                Value100Array[i] = 0;
                Value10Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                if (_this.ZeroAtOnes == true) {
                    Value1Array[i] = Math.floor(Math.random() * (9 - 1) + 1);

                } else
                    Value1Array[i] = Math.floor(Math.random() * (9 - 0) + 0);

                if (_this.ZeroAtenth == true) {
                    Value10thArray[i] = Math.floor(Math.random() * (9 - 1) + 1);
                } else
                    Value10thArray[i] = Math.floor(Math.random() * (9 - 0) + 0);
                if (_this.wholenumasked == false && Value10thArray[i] == 0)
                    Value100thArray[i] = Math.floor(Math.random() * (9 - 0) + 0);
                else
                    Value100thArray[i] = Math.floor(Math.random() * (9 - 1) + 1);
                var value = (Value100Array[i] + "" + Value10Array[i] + "" + Value1Array[i] + "" + Value10thArray[i] + "" + Value100thArray[i])
                for (k = 0; k < i; k++) {
                    if (valuesCombinations[k] == value) {
                        Value10Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                        if (_this.ZeroAtOnes == true) {
                            Value1Array[i] = Math.floor(Math.random() * (9 - 1) + 1);

                        }
                        else
                            Value1Array[i] = Math.floor(Math.random() * (9 - 0) + 0);
                        if (_this.ZeroAtenth == true) {
                            Value10thArray[i] = Math.floor(Math.random() * (9 - 1) + 1);
                        }
                        else
                            Value10thArray[i] = Math.floor(Math.random() * (9 - 0) + 0);
                        if (_this.wholenumasked == false && Value10thArray[i] == 0)
                            Value100thArray[i] = Math.floor(Math.random() * (9 - 0) + 0);
                        else
                            Value100thArray[i] = Math.floor(Math.random() * (9 - 1) + 1);

                        value = (Value100Array[i] + "" + Value10Array[i] + "" + Value1Array[i] + "" + Value10thArray[i] + "" + Value100thArray[i])

                        k = 0;
                    }
                }
                if (Value1Array[i] == 0) {
                    _this.ZeroAtOnes = true
                    foundBoundary = true;
                }
                else if (Value10thArray[i] == 0 && Value100thArray[i] == 0) {
                    _this.wholenumasked = true;
                    foundBoundary = true;

                }
                else if (Value10thArray[i] == 0) {
                    _this.ZeroAtenth = true;
                    foundBoundary = true;

                }

            }
            else if (_this.typearr[i] == 2) {
                Value100thArray[i] = 0;
                Value100Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                if (Value10Array.includes(0)) {
                    Value10Array[i] = Math.floor(Math.random() * (9 - 1) + 1);

                }
                else
                    Value10Array[i] = Math.floor(Math.random() * (9 - 0) + 0);
                if (_this.ZeroAtOnes == true) {
                    Value1Array[i] = Math.floor(Math.random() * (9 - 1) + 1);

                } else
                    Value1Array[i] = Math.floor(Math.random() * (9 - 0) + 0);
                if (_this.wholenumasked == true)
                    Value10thArray[i] = Math.floor(Math.random() * (9 - 1) + 1);
                else
                    Value10thArray[i] = Math.floor(Math.random() * (9 - 0) + 0);
                var value = (Value100Array[i] + "" + Value10Array[i] + "" + Value1Array[i] + "" + Value10thArray[i] + "" + Value100thArray[i])
                for (k = 0; k < i; k++) {
                    if (valuesCombinations[k] == value) {
                        Value100Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                        if (Value10Array.includes(0)) {
                            Value10Array[i] = Math.floor(Math.random() * (9 - 1) + 1);

                        } else
                            Value10Array[i] = Math.floor(Math.random() * (9 - 0) + 0);
                        if (_this.ZeroAtOnes == true) {
                            Value1Array[i] = Math.floor(Math.random() * (9 - 1) + 1);

                        } else
                            Value1Array[i] = Math.floor(Math.random() * (9 - 0) + 0);
                        if (_this.wholenumasked == true)
                            Value10thArray[i] = Math.floor(Math.random() * (9 - 1) + 1);
                        else
                            Value10thArray[i] = Math.floor(Math.random() * (9 - 0) + 0);
                        value = (Value100Array[i] + "" + Value10Array[i] + "" + Value1Array[i] + "" + Value10thArray[i] + "" + Value100thArray[i])

                        k = 0;
                    }
                }
                if (Value1Array[i] == 0) {
                    _this.ZeroAtOnes = true
                    foundBoundary = true;

                }
                else if (Value10thArray[i] == 0) {
                    _this.wholenumasked = true;
                    foundBoundary = true;

                }

            }
            if (i >= 3 && foundBoundary == false) {
                var randArr = [];
                if (_this.ZeroAtOnes == false)
                    randArr.push(1)
                if (_this.wholenumasked == false)
                    randArr.push(2)
                if (_this.ZeroAtenth == false)
                    randArr.push(3)
                randArr = _this.shuffle(randArr)

                if (_this.typearr[i] == 1 && _this.ZeroAtenth == false) {
                    Value10thArray[i] = 0;
                    _this.ZeroAtenth = true;
                }
                else if (randArr[0] == 1) {
                    Value1Array[i] = 0;
                    _this.ZeroAtOnes = true;
                }
                else if (randArr[0] == 2) {
                    if (_this.typearr[i] == 1) {
                        Value10thArray[i] = 0;
                        Value100thArray[i] = 0;
                    }
                    else
                        Value10thArray[i] = 0;

                    _this.wholenumasked = true;
                }
                if (randArr[0] == 3 && _this.typearr[i] == 2) {
                    if (randArr.length > 1) {
                        if (randArr[1] == 1) {
                            Value1Array[i] = 0;
                            _this.ZeroAtOnes = true;
                        }
                        else if (randArr[1] == 2) {
                            if (_this.typearr[i] == 1) {
                                Value10thArray[i] = 0;
                                Value100thArray[i] = 0;
                            }
                            else
                                Value10thArray[i] = 0;
                            _this.wholenumasked = true;
                        }
                    }
                }

            }

            value = (Value100Array[i] + "" + Value10Array[i] + "" + Value1Array[i] + "" + Value10thArray[i] + "" + Value100thArray[i])

            valuesCombinations[i] = value;

        }

        console.log(valuesCombinations)


    },
    Randomize: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.notes100 = [];
        _this.notes10 = [];
        _this.notes1 = [];
        _this.notes10th = [];
        _this.notes100th = [];
        _this.tableNotshown = true;
        _this.secondPartNotShown = true;
        // _this.typearr[_this.count1]=1;
        if (_this.typearr[_this.count1] == 1) {
            for (i = 0; i < Value10Array[_this.count1]; i++) {
                var note10 = _this.add.sprite(60, 200 - Value10Array[_this.count1] * 13 + i * 13, 'note10')
                _this.notes10.push(note10)
            }
            for (i = 0; i < Value1Array[_this.count1]; i++) {
                var note1 = _this.add.sprite(280, 200 - Value1Array[_this.count1] * 13 + i * 13, 'note1')
                _this.notes1.push(note1)
            }
            for (i = 0; i < Value10thArray[_this.count1]; i++) {
                var coin10th = _this.add.sprite(490, 230 - i * 20, 'coin10th')
                _this.notes10th.push(coin10th)
            }
            for (i = 0; i < Value100thArray[_this.count1]; i++) {
                var coin100th = _this.add.sprite(610, 230 - i * 20, 'coin100th')
                _this.notes100th.push(coin100th)
            }
        }
        else {
            for (i = 0; i < Value100Array[_this.count1]; i++) {
                var note100 = _this.add.sprite(60, 200 - Value100Array[_this.count1] * 13 + i * 13, 'note100')
                _this.notes100.push(note100)
            }
            for (i = 0; i < Value10Array[_this.count1]; i++) {
                var note10 = _this.add.sprite(260, 200 - Value10Array[_this.count1] * 13 + i * 13, 'note10')
                _this.notes10.push(note10)
            }
            for (i = 0; i < Value1Array[_this.count1]; i++) {
                var note1 = _this.add.sprite(460, 200 - Value1Array[_this.count1] * 13 + i * 13, 'note1')
                _this.notes1.push(note1)
                note1.scale.setTo(0.9, 1)
            }
            for (i = 0; i < Value10thArray[_this.count1]; i++) {
                var coin10th = _this.add.sprite(640, 230 - i * 20, 'coin10th')
                _this.notes10th.push(coin10th)
            }
        }
        _this.maketable();
        // _this.table1 = _this.add.sprite(50, 305, 'Table1')

        if (_this.count1 == 0) {
            _this.Ask_Question1.play();
        }
        _this.Question_flag = 1;

    },
    rightbtnClicked: function () {
        _this.noofAttempts++;
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        _this.rightbtn_is_Clicked = true;
        // if (_this.tableNotshown == false) {
        if (_this.part1 == true) {
            // whole number part entered evaluate
            if (_this.typearr[_this.count1] == 1) {
                var corrretans = Value10Array[_this.count1]
            }
            else {
                var corrretans = Value100Array[_this.count1]

            }
            if (_this.AnswerBox.name === corrretans) {
                _this.part1 = false;
                _this.part2 = true;
                _this.box1 = _this.AnswerBox
                _this.AnswerBox.frame = 0;
                _this.celebrate();
                if (_this.typearr[_this.count1] == 2)
                    _this.showfractionbox(310, 4);
                else
                    _this.showfractionbox(340, 4);

                _this.fourNotEntered = false;
                _this.rightbtn.inputEnabled = true;

            }
            else {
                _this.removeboth = false;
                _this.wrongSelected();

            }
        }
        else if (_this.part2 == true) {

            if (_this.typearr[_this.count1] == 1) {
                var corrretans = Value1Array[_this.count1]
            }
            else {
                var corrretans = Value10Array[_this.count1]

            }
            if (_this.AnswerBox.name === corrretans) {
                _this.part2 = false;
                _this.part3 = true;
                _this.box2 = _this.AnswerBox
                _this.AnswerBox.frame = 0;
                _this.celebrate();
                _this.fourNotEntered = false;
                _this.showfractionbox(520, 4);
                _this.rightbtn.inputEnabled = true;

            }
            else {
                _this.removeboth = false;
                _this.wrongSelected();
            }
        }
        else if (_this.part3 == true) {
            if (_this.typearr[_this.count1] == 1) {
                var corrretans = Value10thArray[_this.count1]
            }
            else {
                var corrretans = Value1Array[_this.count1]

            }
            if (_this.AnswerBox.name === corrretans) {
                _this.part3 = false;
                _this.part4 = true;
                _this.box3 = _this.AnswerBox
                _this.AnswerBox.frame = 0;
                _this.celebrate();
                _this.fourNotEntered = false;
                if (_this.typearr[_this.count1] == 2)
                    _this.showfractionbox(665, 4);
                else
                    _this.showfractionbox(625, 4);

                _this.rightbtn.inputEnabled = true;

            }
            else {
                _this.removeboth = false;
                _this.wrongSelected();
            }
            // 1/100th enetered evaluate and show box for final answer
        }
        else if (_this.part4 == true) {
            if (_this.typearr[_this.count1] == 1) {
                var corrretans = Value100thArray[_this.count1]
            }
            else {
                var corrretans = Value10thArray[_this.count1]

            }
            if (_this.AnswerBox.name === corrretans) {
                _this.part4 = false;

                _this.finalAns = true;
                _this.box4 = _this.AnswerBox
                _this.AnswerBox.frame = 0;
                _this.celebrate();
                _this.showfinalAnswer();
                _this.rightbtn.inputEnabled = true;
                _this.fourNotEntered = false;

            }
            else {
                _this.removeboth = false;
                _this.wrongSelected();
            }
        }
        else if (_this.finalAns == true) {
            // final answer is entered
            if (_this.typearr[_this.count1] == 1) {
                var correctans = Value10Array[_this.count1] + "" + Value1Array[_this.count1] + "." + Value10thArray[_this.count1] + "" + Value100thArray[_this.count1]
            }
            else {
                var correctans = Value100Array[_this.count1] + "" + Value10Array[_this.count1] + "" + Value1Array[_this.count1] + "." + Value10thArray[_this.count1]
            }
            console.log("CorrectAns is ", correctans)
            if (_this.finalval === correctans || Number(_this.finalval) == Number(correctans)) {
                if (_this.finalval !== correctans) {
                    // Add zero
                    if (_this.dotselected == true) {
                        _this.finalval += "0";
                        _this.fouransLen += 1;




                        _this.AnswerBox.removeChild(_this.enterTxt)
                        _this.enterTxt.visible = false;
                        if (_this.fouransLen == 4)

                            _this.enterTxt = _this.add.text(16, 8, "" + _this.finalval, { fontSize: '30px' });

                        else
                            _this.enterTxt = _this.add.text(11, 8, "" + _this.finalval, { fontSize: '30px' });
                        _this.fourNotEntered = true

                        _this.applyingStyle(_this.enterTxt);
                        _this.AnswerBox.addChild(_this.enterTxt);
                        _this.enterTxt.visible = true
                    }

                }
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.correctAns();
                _this.finalAns = false;
                _this.AnswerBox.frame = 0;
                _this.AnswerBox.name = ''
                _this.selectedAns1 = ''
                _this.selectedAns2 = ''
                _this.selectedAns3 = ''
                _this.enterTxt = ''
                _this.rightbtn.inputEnabled = true;
                _this.fourNotEntered = false;
            }
            else {
                _this.removeboth = false;
                _this.dotselected = false
                _this.wrongSelected();

            }

        }
    },
    celebrate: function () {
        _this.counterCelebrationSound.pause();
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();

        _this.AnswerBox.name = ''
        _this.AnswerBox = null;
        _this.selectedAns1 = ''
        _this.selectedAns2 = ''
        _this.selectedAns3 = ''

        _this.enterTxt = ''

    },
    wrongSelected: function () {
        _this.wrongans.play();
        _this.wrongbtnClicked();
        _this.rightbtn.inputEnabled = true;


    },
    makeTableHeader: function () {
        _this.tens = _this.add.text(80, 15, '10')
        _this.tens.fill = '#808080'
        _this.table1.addChild(_this.tens)

        _this.ones = _this.add.text(280, 15, '1')
        _this.ones.fill = '#808080'

        _this.table1.addChild(_this.ones)

        _this.tenth1 = _this.add.text(438, 6, '1')
        _this.tenth1.scale.setTo(0.9)
        _this.tenth1.fill = '#808080'


        _this.table1.addChild(_this.tenth1)

        _this.tenth2 = _this.add.graphics();
        _this.tenth2.lineStyle(3, 0x808080);
        _this.tenth2.moveTo(430, 33);
        _this.tenth2.lineTo(468, 33);
        _this.tenth2.fill = '#808080'

        _this.table1.addChild(_this.tenth2)

        _this.tenth3 = _this.add.text(434, 33, '10')
        _this.tenth3.scale.setTo(0.8)
        _this.tenth3.fill = '#808080'

        _this.table1.addChild(_this.tenth3)

        _this.hundreth1 = _this.add.text(437 + 102, 6, '1')
        _this.hundreth1.fill = '#808080'

        _this.hundreth1.scale.setTo(0.9)

        _this.table1.addChild(_this.hundreth1)
        _this.hundreth2 = _this.add.graphics();
        _this.hundreth2.lineStyle(3, 0x808080);
        _this.hundreth2.moveTo(430 + 98, 33);
        _this.hundreth2.lineTo(468 + 102, 33);
        _this.hundreth2.fill = '#808080'

        _this.table1.addChild(_this.hundreth2)

        _this.hundreth3 = _this.add.text(430 + 100, 33, '100')
        _this.hundreth3.scale.setTo(0.8)
        _this.hundreth3.fill = '#808080'


        _this.table1.addChild(_this.hundreth3)
    },
    makeTableHeader2: function () {
        _this.hundred = _this.add.text(80, 15, '100')
        _this.table2.addChild(_this.hundred)
        _this.hundred.fill = '#808080'

        _this.tens = _this.add.text(270, 15, '10')
        _this.tens.fill = '#808080'
        _this.table2.addChild(_this.tens)

        _this.ones = _this.add.text(480, 15, '1')
        _this.ones.fill = '#808080'
        _this.table2.addChild(_this.ones)

        _this.tenth1 = _this.add.text(630, 6, '1')
        _this.tenth1.scale.setTo(0.9)
        _this.tenth1.fill = '#808080'
        _this.table2.addChild(_this.tenth1)

        _this.tenth2 = _this.add.graphics();
        _this.tenth2.lineStyle(3, 0x808080);
        _this.tenth2.moveTo(625, 33);
        _this.tenth2.lineTo(654, 33);
        _this.tenth2.fill = '#808080'
        _this.table2.addChild(_this.tenth2)

        _this.tenth3 = _this.add.text(625, 33, '10')
        _this.tenth3.scale.setTo(0.9)
        _this.tenth3.fill = '#808080'
        _this.table2.addChild(_this.tenth3)


    },
    maketable: function () {
        if (_this.typearr[_this.count1] == 2) {
            _this.table2 = _this.add.sprite(50, 305, 'Table1')
            _this.makeTableHeader2();

        }
        else {
            _this.table1 = _this.add.sprite(50, 305, 'Table2')
            _this.table1.scale.setTo(1.1, 1)
            _this.makeTableHeader();


        }
        _this.part1 = true;
        _this.showfractionbox(130, 4)
        _this.addNumberPad();

    },

    showfinalAnswer: function (x) {
        if (_this.count1 == 0) {

            _this.Ask_Question2.play();
        }
        _this.Question_flag = 2;

        if (_this.typearr[_this.count1] == 1)
            _this.AnswerBox = _this.add.sprite(800, 390, 'Text box_2')
        else
            _this.AnswerBox = _this.add.sprite(820, 390, 'Text box_2')

        //    Equals sign with red 
        if (_this.typearr[_this.count1] == 1)

            _this.eq1 = _this.add.text(746, 380, '__')
        else
            _this.eq1 = _this.add.text(746 + 20, 380, '__')

        _this.eq1.fill = '#FF0000';
        _this.eq1.scale.setTo(1, 1.3)


        if (_this.typearr[_this.count1] == 1)

            _this.eq2 = _this.add.text(746, 390, '__')
        else
            _this.eq2 = _this.add.text(746 + 20, 390, '__')

        _this.eq2.fill = '#FF0000';
        _this.eq2.scale.setTo(1, 1.3)

        _this.finalAns = true;
        _this.finalval = "";
        _this.fouransLen = 0;
        _this.dotselected = false;


    },
    //* Change this function to show small number pad as given in GDD. (no signs)
    addNumberPad: function () {

        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 512, 'numpadbg');
        //bottomnumpadbg.anchor.setTo(0.5);
        bottomnumpadbg.scale.setTo(1, 1);

        // bottomnumpadbg.name = "numpadbg";

        _this.x = 40;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;

        for (var i = 0; i < 11; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 548, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            // _this.numbg.scale.setTo(0.9);
            _this.numbg.name = i + 1;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked, _this);

            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 548, 'Numberpad');
        _this.wrongbtn.frame = 11;
        _this.wrongbtn.anchor.setTo(0.5);
        // _this.wrongbtn.scale.setTo(0.8, 0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 548, 'Numberpad');
        _this.rightbtn.frame = 12;
        _this.rightbtn.anchor.setTo(0.5);
        // _this.rightbtn.scale.setTo(0.8, 0.8);
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
        var_selectedAns4 = " "


        if (target.name == 10)
            target.name = 0;
        if (target.name == 11 && _this.finalAns != true) {
            return
        }
        else if ((target.name == 11 || target.name == '.') && _this.finalAns == true && _this.dotselected == true) {
            return

        }
        else if (target.name == 11 && _this.finalAns == true) {
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
        else if ((_this.selectedAns4 === '')) {

            _this.selectedAns4 = target.name;
            var_selectedAns1 = _this.selectedAns1;
            var_selectedAns2 = _this.selectedAns2;
            var_selectedAns3 = _this.selectedAns3;
            var_selectedAns4 = _this.selectedAns4;

        }

        if (_this.finalAns == true && _this.fouransLen != 5) {
            _this.finalval += target.name
            if (target.name == '.')
                target.name = 11;
            _this.fouransLen += 1;
        }

        if (_this.finalAns == true && _this.fourNotEntered == false) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.enterTxt.visible = false;

            if ((_this.fouransLen == 1))

                _this.enterTxt = _this.add.text(37, 8, "" + _this.finalval, { fontSize: '30px' });
            else if (_this.fouransLen == 2)

                _this.enterTxt = _this.add.text(28, 8, "" + _this.finalval, { fontSize: '30px' });
            else if (_this.fouransLen == 3)

                _this.enterTxt = _this.add.text(21, 8, "" + _this.finalval, { fontSize: '30px' });
            else if (_this.fouransLen == 4)

                _this.enterTxt = _this.add.text(16, 8, "" + _this.finalval, { fontSize: '30px' });

            else {
                _this.enterTxt = _this.add.text(11, 8, "" + _this.finalval, { fontSize: '30px' });
                _this.fourNotEntered = true

            }
            _this.applyingStyle(_this.enterTxt);
            _this.AnswerBox.addChild(_this.enterTxt);
            _this.AnswerBox.name = Number(_this.finalval);
            _this.enterTxt.visible = true
        }
        else if (_this.fourNotEntered == false) {

            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.enterTxt.visible = false;

            if ((var_selectedAns2 === " ")) {

                _this.enterTxt = _this.add.text(16, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                _this.fourNotEntered = true;
            }
            // else if ((var_selectedAns3 === " "))

            //     _this.enterTxt = _this.add.text(10, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '28px' });

            // else if (var_selectedAns4 === " ") {
            //     _this.enterTxt = _this.add.text(9, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '28px' });
            //     _this.enterTxt.scale.setTo(0.7, 1)

            // }
            // else {
            //     _this.enterTxt = _this.add.text(7, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3 + var_selectedAns4, { fontSize: '28px' });
            //     _this.enterTxt.scale.setTo(0.6, 1)
            //     _this.fourNotEntered = true

            // }
            _this.applyingStyle(_this.enterTxt);
            _this.AnswerBox.addChild(_this.enterTxt);
            _this.AnswerBox.name = Number("" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3);
            _this.enterTxt.visible = true

        }
    },
    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.fourNotEntered = false;
        _this.fouransLen = 0;
        _this.finalval = "";
        _this.dotselected = false;

        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.AnswerBox.frame = 1;

        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';
        _this.selectedAns4 = '';

        _this.AnswerBox.name = ''

    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },

    ClearAll: function () {
        _this.numGroup.destroy()
        if (_this.table1)
            _this.table1.destroy()
        if (_this.table2)
            _this.table2.destroy()
        _this.eq1.destroy();
        _this.eq2.destroy();
        _this.AnswerBox.destroy();
        _this.box1.destroy();
        _this.box2.destroy();
        _this.box3.destroy();
        _this.box4.destroy();

        _this.notes100.forEach(element => {
            element.destroy();
        });

        _this.notes10.forEach(element => {
            element.destroy();
        });
        _this.notes1.forEach(element => {
            element.destroy();
        });

        _this.notes10th.forEach(element => {
            element.destroy();
        });

        _this.notes100th.forEach(element => {
            element.destroy();
        });


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
            _this.celebrationSound.play();
            _this.starActions(_this.count1);
            _this.time.events.add(2000, _this.ClearAll);
            _this.time.events.add(2500, () => {
                // _this.state.start('score', true, false);
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            })
        }

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
        // _this.game_id = "NSD_3A_G6";
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
}