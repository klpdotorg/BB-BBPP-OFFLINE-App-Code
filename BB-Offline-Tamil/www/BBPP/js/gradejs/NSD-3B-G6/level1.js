Game.NSD_3B_G6level1 = function () { };


Game.NSD_3B_G6level1.prototype =
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

        _this.Ask_Question1 = _this.createAudio("NSD-3B-G6-A");
        _this.Ask_Question2 = _this.createAudio("NSD-3B-G6-B");

        telInitializerbbpp.gameIdInit("NSD_3B_G6", gradeSelected);
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
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-3B-G6/" + _this.languageSelected + "/" + src + ".mp3");
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
        Value10Array = [];
        Value100Array = [];
        Value10thArray = [];
        Value100thArray = [];
        valuesCombinations = []
        q2Places = [100, 10, 1, 0.1]
        q1Places = [10, 1, 0.1, 0.01]

        q1Places = _this.shuffle(q1Places)
        q2Places = _this.shuffle(q2Places)
        _this.placesAsked = []


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


        }

        _this.got = false;
        for (let i = 0; i < 6; i++) {
            foundBoundary = false;

            if (_this.typearr[i] == 1) {
                Value100Array[i] = 0;
                Value10Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                Value1Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                Value10thArray[i] = Math.floor(Math.random() * (9 - 1) + 1);
                Value100thArray[i] = Math.floor(Math.random() * (9 - 1) + 1);
                var value = (Value100Array[i] + "" + Value10Array[i] + "" + Value1Array[i] + "" + Value10thArray[i] + "" + Value100thArray[i])
                for (k = 0; k < i; k++) {
                    if (valuesCombinations[k] == value) {
                        Value10Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                        Value1Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                        Value10thArray[i] = Math.floor(Math.random() * (9 - 1) + 1);
                        Value100thArray[i] = Math.floor(Math.random() * (9 - 1) + 1);
                        value = (Value100Array[i] + "" + Value10Array[i] + "" + Value1Array[i] + "" + Value10thArray[i] + "" + Value100thArray[i])

                        k = 0;
                    }
                }

            }
            else if (_this.typearr[i] == 2) {
                Value100thArray[i] = 0;
                Value100Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                Value10Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                Value1Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                Value10thArray[i] = Math.floor(Math.random() * (9 - 1) + 1);
                var value = (Value100Array[i] + "" + Value10Array[i] + "" + Value1Array[i] + "" + Value10thArray[i] + "" + Value100thArray[i])
                for (k = 0; k < i; k++) {
                    if (valuesCombinations[k] == value) {
                        Value100Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                        Value10Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                        Value1Array[i] = Math.floor(Math.random() * (9 - 1) + 1);
                        Value10thArray[i] = Math.floor(Math.random() * (9 - 1) + 1);
                        value = (Value100Array[i] + "" + Value10Array[i] + "" + Value1Array[i] + "" + Value10thArray[i] + "" + Value100thArray[i])

                        k = 0;
                    }
                }
            }

            value = (Value100Array[i] + "" + Value10Array[i] + "" + Value1Array[i] + "" + Value10thArray[i] + "" + Value100thArray[i])
            valuesCombinations[i] = value;

        }

        // console.log(valuesCombinations)

        k = 0;
        j = 0;
        for (t = 0; t < 4; t++) {
            if (_this.typearr[t] == 1) {

                while (_this.placesAsked.includes(q1Places[k])) {
                    k++;
                }
                _this.placesAsked[t] = q1Places[k]
                k++;
            }
            else {
                while (_this.placesAsked.includes(q2Places[j])) {
                    j++;
                }
                _this.placesAsked[t] = q2Places[j]
                j++;
            }
        }
        if (_this.typearr[4] == 1) {
            _this.placesAsked[4] = q1Places[Math.floor(Math.random() * q1Places.length)]
            while (_this.placesAsked[4] == _this.placesAsked[3])
                _this.placesAsked[4] = q1Places[Math.floor(Math.random() * q1Places.length)]


        }
        else {
            _this.placesAsked[4] = q2Places[Math.floor(Math.random() * q2Places.length)]
            while (_this.placesAsked[4] == _this.placesAsked[3])
                _this.placesAsked[4] = q2Places[Math.floor(Math.random() * q2Places.length)]

        }
        if (_this.typearr[5] == 1) {
            _this.placesAsked[5] = q1Places[Math.floor(Math.random() * q1Places.length)]
        }
        else {
            _this.placesAsked[5] = q2Places[Math.floor(Math.random() * q2Places.length)]
        }
        console.log(_this.typearr)
        console.log(_this.placesAsked)

    },
    placeQuesBox: function () {
        _this.quesBox = _this.add.sprite(780, 80, 'QuesBox')
        _this.quesBox.scale.setTo(0.7, 0.7)

        if (_this.typearr[_this.count1] == 1) {
            var text1 = Value10Array[_this.count1]
            var text2 = Value1Array[_this.count1]
            var text3 = Value10thArray[_this.count1]
            var text4 = Value100thArray[_this.count1]

        }
        else {
            var text1 = Value100Array[_this.count1]
            var text4 = Value10thArray[_this.count1]
            var text2 = Value10Array[_this.count1]
            var text3 = Value1Array[_this.count1]

        }

        _this.text1 = _this.add.text(26, 25, text1);
        _this.text1.scale.setTo(1.6)
        _this.quesBox.addChild(_this.text1);
        _this.applyingStyle(_this.text1)

        _this.text2 = _this.add.text(51, 25, text2);
        _this.text2.scale.setTo(1.6)
        _this.quesBox.addChild(_this.text2);
        _this.applyingStyle(_this.text2)
        if (_this.typearr[_this.count1] == 1) {
            _this.point = _this.add.text(77, 25, '.')
            _this.point.scale.setTo(1.6)
            _this.quesBox.addChild(_this.point);
            _this.applyingStyle(_this.point)
            var x1 = 80 + 16 - 6;
            var x2 = 96 + 30 - 10;

        }
        else {
            var x1 = 80 - 3
            var x2 = 110 - 10

        }
        _this.text3 = _this.add.text(x1, 25, text3);
        _this.text3.scale.setTo(1.6)
        _this.quesBox.addChild(_this.text3);
        _this.applyingStyle(_this.text3)

        if (_this.typearr[_this.count1] == 2) {
            _this.point = _this.add.text(105, 25, '.')
            _this.point.scale.setTo(1.6)
            _this.quesBox.addChild(_this.point);
            _this.applyingStyle(_this.point)
            var x1 = 110 - 2
            var x2 = 110 + 14 - 4
        }


        _this.text4 = _this.add.text(x2, 25, text4);
        _this.text4.scale.setTo(1.6)
        _this.quesBox.addChild(_this.text4);
        _this.applyingStyle(_this.text4)

        _this.storeFrameToChange();

    },
    storeFrameToChange: function () {
        if (_this.typearr[_this.count1] == 1) {
            if (_this.placesAsked[_this.count1] == 10) {
                _this.FontChangeBox = _this.text1
            }
            else if (_this.placesAsked[_this.count1] == 1)
                _this.FontChangeBox = _this.text2
            else if (_this.placesAsked[_this.count1] == 0.1)
                _this.FontChangeBox = _this.text3
            else if (_this.placesAsked[_this.count1] == 0.01)
                _this.FontChangeBox = _this.text4
        }
        else {
            if (_this.placesAsked[_this.count1] == 100) {
                _this.FontChangeBox = _this.text1
            }
            else if (_this.placesAsked[_this.count1] == 10)
                _this.FontChangeBox = _this.text2
            else if (_this.placesAsked[_this.count1] == 1)
                _this.FontChangeBox = _this.text3
            else if (_this.placesAsked[_this.count1] == 0.1)
                _this.FontChangeBox = _this.text4
        }
        // _this.FontChangeBox.fill='#FF0000'
    },
    objBox: function () {
        _this.objextBox = _this.add.sprite(40, 70, 'box1')
        // if (_this.typearr[_this.count1] == 2)
        _this.objextBox.scale.setTo(1.2, 1)
        _this.hundred = [];
        _this.tens = [];
        _this.ones = [];
        _this.tenth = [];
        _this.hundredth = [];
        _this.reverseDrag = false;


        _this.obj1 = _this.add.sprite(15, 12, _this.typearr[_this.count1] == 1 ? 'note10' : 'note100')
        _this.obj1.scale.setTo(0.5, 0.6);
        _this.objextBox.addChild(_this.obj1)
        _this.obj1.inputEnabled = true;
        _this.obj1.input.enableDrag(true);

        _this.obj1.events.onDragStop.add(_this.obj1DragStop, _this)

        _this.obj2 = _this.add.sprite(115, 12, _this.typearr[_this.count1] == 1 ? 'note1' : 'note10')
        _this.obj2.scale.setTo(0.5, 0.6);
        _this.objextBox.addChild(_this.obj2)
        _this.obj2.inputEnabled = true;
        _this.obj2.input.enableDrag(true);
        _this.obj2.events.onDragStop.add(_this.obj2DragStop, _this)


        _this.obj3 = _this.add.sprite(215, 12, _this.typearr[_this.count1] == 1 ? 'coin10th' : 'note1')
        _this.obj3.scale.setTo(0.5, 0.6);
        _this.objextBox.addChild(_this.obj3)
        _this.obj3.inputEnabled = true;
        _this.obj3.input.enableDrag(true);
        if (_this.typearr[_this.count1] == 1) {
            _this.obj3.y += 10
            _this.obj3.x += 10
            _this.obj3.scale.setTo(0.6, 0.7);
        }
        _this.obj3.events.onDragStop.add(_this.obj3DragStop, _this)



        _this.obj4 = _this.add.sprite(295, 22, _this.typearr[_this.count1] == 1 ? 'coin100th' : 'coin10th')
        _this.obj4.scale.setTo(0.6, 0.7);
        _this.objextBox.addChild(_this.obj4)
        _this.obj4.inputEnabled = true;
        _this.obj4.input.enableDrag(true);

        if (_this.typearr[_this.count1] == 2) {
            _this.obj1.scale.setTo(0.45, 0.6)
            _this.obj2.scale.setTo(0.45, 0.6)
            _this.obj3.scale.setTo(0.45, 0.6)
            _this.obj2.x -= 8;
            _this.obj3.x -= 15;

        }
        _this.obj2.actualX = _this.obj2.x
        _this.obj2.actualY = _this.obj2.y

        _this.obj3.actualX = _this.obj3.x
        _this.obj3.actualY = _this.obj3.y

        _this.obj4.actualX = _this.obj4.x
        _this.obj4.actualY = _this.obj4.y
        _this.obj4.events.onDragStop.add(_this.obj4DragStop, _this)


    },
    showTickbtn: function () {
        _this.rightbtn = _this.add.sprite(815, 390, 'TickBtn')
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this)
    },
    obj1DragStop: function (target) {
        var isEmpty = false;
        var count = 0;
        if (_this.typearr[_this.count1] == 1) {

            for (i = 0; i < _this.tens.length; i++) {
                if (_this.tens[i].visible == true) {
                    count++;
                }
            }
        }
        else {
            for (i = 0; i < _this.hundred.length; i++) {
                if (_this.hundred[i].visible == true) {
                    count++;
                }
            }
        }
        if (target.x >= 30 && target.x <= 150 && target.y >= 120 && target.y <= 420 && count < 9) {
            if (_this.reverseDrag == false) {
                target.x = 15;
                target.y = 12
            }
            if (_this.typearr[_this.count1] == 1) {

                for (i = _this.tens.length - 1; i >= 0; i--) {
                    if (_this.tens[i].visible == true) {
                        isEmpty = true;
                        break
                    }
                }
                if (isEmpty == false) {
                    var y = 415
                }
                else {
                    for (i = _this.tens.length - 1; i >= 0; i--) {
                        if (_this.tens[i].visible == true) {
                            var y = _this.tens[i].y - 13;
                            break;
                        }
                    }
                }
            }
            else {
                for (i = _this.hundred.length - 1; i >= 0; i--) {
                    if (_this.hundred[i].visible == true) {
                        isEmpty = true;
                        break
                    }
                }
                if (isEmpty == false) {
                    var y = 415

                }
                else {
                    for (i = _this.hundred.length - 1; i >= 0; i--) {
                        if (_this.hundred[i].visible == true) {
                            var y = _this.hundred[i].y - 13;
                            break;
                        }
                    }
                }
            }
            if (!y) {
                var y = 415
            }
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
            var note = _this.add.sprite(60, y, _this.typearr[_this.count1] == 1 ? 'note10' : 'note100')
            note.scale.setTo(1, 0.85)
            note.inputEnabled = true
            note.input.enableDrag(true)
            note.events.onDragStart.add(_this.obj1DragStart, _this)
            note.events.onDragStop.add(_this.obj1reverseStop, _this)
            if (_this.typearr[_this.count1] == 1) {
                _this.tens.push(note)
                for (i = _this.tens.length - 1; i >= 0; i--) {
                    if (_this.tens[i]) {
                        _this.tens[i].bringToTop()
                    }
                }
            }
            else {
                _this.hundred.push(note)
                for (i = _this.hundred.length - 1; i >= 0; i--) {
                    if (_this.hundred[i]) {
                        _this.hundred[i].bringToTop()
                    }
                }
            }
        }
        else {
            if (_this.reverseDrag == false) {
                target.x = 15;
                target.y = 12
            }
        }
        _this.reverseDrag = false;
    },
    obj1DragStart: function (target) {
        if (_this.typearr[_this.count1] == 1) {
            for (i = 0; i < _this.tens.length; i++) {
                if (_this.tens[i] == target) {
                    var j = i;
                    break;
                }
            }
            for (i = _this.tens.length - 1; i >= j; i--) {
                if (_this.tens[i] && _this.tens[i].y < 415) {
                    _this.tens[i].y += 13;
                }
            }
        }
        else {
            for (i = 0; i < _this.hundred.length; i++) {
                if (_this.hundred[i] == target) {
                    var j = i;
                    break;
                }
            }
            for (i = _this.hundred.length - 1; i >= j; i--) {
                if (_this.hundred[i] && _this.hundred[i].y < 415)
                    _this.hundred[i].y += 13;
            }
        }

    },
    obj1reverseStop: function (target) {
        if (target.x >= 20 && target.x <= 140 && target.y >= 20 && target.y <= 150) {
            target.scale.setTo(0.5)
            target.visible = false
            target = null
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
        }
        else {
            target.visible = false
            _this.reverseDrag = true
            _this.obj1DragStop(target);
            target = null
        }
    },

    obj2DragStop: function (target) {
        var isEmpty = false;
        var count = 0;
        if (_this.typearr[_this.count1] == 2) {

            for (i = 0; i < _this.tens.length; i++) {
                if (_this.tens[i].visible == true) {
                    count++;
                }
            }
        }
        else {
            for (i = 0; i < _this.ones.length; i++) {
                if (_this.ones[i].visible == true) {
                    count++;
                }
            }
        }
        if (target.x >= 120 && target.x <= 350 && target.y >= 120 && target.y <= 420 && count < 9) {
            if (_this.reverseDrag == false) {
                target.x = target.actualX
                target.y = target.actualY
            }
            if (_this.typearr[_this.count1] == 2) {

                for (i = _this.tens.length - 1; i >= 0; i--) {
                    if (_this.tens[i].visible == true) {
                        isEmpty = true;
                        break
                    }
                }
                if (isEmpty == false) {
                    var y = 415
                }
                else {
                    for (i = _this.tens.length - 1; i >= 0; i--) {
                        if (_this.tens[i].visible == true) {
                            var y = _this.tens[i].y - 13;
                            break;
                        }
                    }
                }
            }
            else {
                for (i = _this.ones.length - 1; i >= 0; i--) {
                    if (_this.ones[i].visible == true) {
                        isEmpty = true;
                        break
                    }
                }
                if (isEmpty == false) {
                    var y = 415

                }
                else {
                    for (i = _this.ones.length - 1; i >= 0; i--) {
                        if (_this.ones[i].visible == true) {
                            var y = _this.ones[i].y - 13;
                            break;
                        }
                    }
                }
            }
            if (!y) {
                var y = 415

            }
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
            var note = _this.add.sprite(262, y, _this.typearr[_this.count1] == 1 ? 'note1' : 'note10')
            note.scale.setTo(1, 0.85)
            note.inputEnabled = true
            note.input.enableDrag(true)
            note.events.onDragStart.add(_this.obj2DragStart, _this)
            note.events.onDragStop.add(_this.obj2reverseStop, _this)
            if (_this.typearr[_this.count1] == 2) {
                _this.tens.push(note)
                for (i = _this.tens.length - 1; i >= 0; i--) {
                    if (_this.tens[i]) {
                        _this.tens[i].bringToTop()
                    }
                }
            }
            else {
                _this.ones.push(note)
                for (i = _this.ones.length - 1; i >= 0; i--) {
                    if (_this.ones[i]) {
                        _this.ones[i].bringToTop()
                    }
                }
            }
        }
        else {
            if (_this.reverseDrag == false) {
                target.x = target.actualX
                target.y = target.actualY
            }
        }
        _this.reverseDrag = false;
    },
    obj2DragStart: function (target) {
        if (_this.typearr[_this.count1] == 2) {
            for (i = 0; i < _this.tens.length; i++) {
                if (_this.tens[i] == target) {
                    var j = i;
                    break;
                }
            }
            for (i = _this.tens.length - 1; i >= j; i--) {
                if (_this.tens[i] && _this.tens[i].y < 415) {
                    _this.tens[i].y += 13;
                }
            }
        }
        else {
            for (i = 0; i < _this.ones.length; i++) {
                if (_this.ones[i] == target) {
                    var j = i;
                    break;
                }
            }
            for (i = _this.ones.length - 1; i >= j; i--) {
                if (_this.ones[i] && _this.ones[i].y < 415)
                    _this.ones[i].y += 13;
            }
        }

    },
    obj2reverseStop: function (target) {
        if (target.x >= 120 && target.x <= 240 && target.y >= 20 && target.y <= 150) {
            target.scale.setTo(0.5)
            target.visible = false
            target = null
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
        }
        else {
            target.visible = false
            _this.reverseDrag = true
            _this.obj2DragStop(target);
            target = null
        }
    },

    obj3DragStop: function (target) {

        var isEmpty = false;
        var count = 0;
        if (_this.typearr[_this.count1] == 1) {
            var x = 489
            for (i = 0; i < _this.tenth.length; i++) {
                if (_this.tenth[i].visible == true) {
                    count++;
                }
            }
        }
        else {
            var x = 467
            for (i = 0; i < _this.ones.length; i++) {
                if (_this.ones[i].visible == true) {
                    count++;
                }
            }
        }
        if ((target.x >= 320 && target.x <= 550 && target.y >= 120 && target.y <= 420 && count < 9) || _this.reverseDrag == true) {
            if (_this.reverseDrag == false) {
                target.x = target.actualX;
                target.y = target.actualY
            }
            if (_this.typearr[_this.count1] == 1) {

                for (i = _this.tenth.length - 1; i >= 0; i--) {
                    if (_this.tenth[i].visible == true) {
                        isEmpty = true;
                        break
                    }
                }
                if (isEmpty == false) {
                    var y = 440
                }
                else {
                    for (i = _this.tenth.length - 1; i >= 0; i--) {
                        if (_this.tenth[i].visible == true) {
                            var y = _this.tenth[i].y - 16;
                            break;
                        }
                    }
                }
            }
            else {
                for (i = _this.ones.length - 1; i >= 0; i--) {
                    if (_this.ones[i].visible == true) {
                        isEmpty = true;
                        break
                    }
                }
                if (isEmpty == false) {
                    var y = 415

                }
                else {
                    for (i = _this.ones.length - 1; i >= 0; i--) {
                        if (_this.ones[i].visible == true) {
                            var y = _this.ones[i].y - 13;
                            break;
                        }
                    }
                }
            }
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
            var note = _this.add.sprite(x, y, _this.typearr[_this.count1] == 1 ? 'coin10th' : 'note1')
            if (_this.typearr[_this.count1] == 1) {
                note.scale.setTo(1, 1)
            }
            else {
                note.scale.setTo(1, 0.85)
            }
            note.inputEnabled = true
            note.input.enableDrag(true)
            note.events.onDragStart.add(_this.obj3DragStart, _this)
            note.events.onDragStop.add(_this.obj3reverseStop, _this)
            if (_this.typearr[_this.count1] == 1) {
                _this.tenth.push(note)
            }
            else {
                _this.ones.push(note)
                for (i = _this.ones.length - 1; i >= 0; i--) {
                    if (_this.ones[i]) {
                        _this.ones[i].bringToTop()
                    }
                }
            }
        }
        else {
            if (_this.reverseDrag == false) {
                target.x = target.actualX;
                target.y = target.actualY
            }
        }
        _this.reverseDrag = false;
    },
    obj3DragStart: function (target) {
        if (_this.typearr[_this.count1] == 1) {
            for (i = 0; i < _this.tenth.length; i++) {
                if (_this.tenth[i] == target) {
                    var j = i;
                    break;
                }
            }
            for (i = _this.tenth.length - 1; i >= j; i--) {
                if (_this.tenth[i] && _this.tenth[i].y < 440) {
                    _this.tenth[i].y += 16;
                }
            }
        }
        else {
            for (i = 0; i < _this.ones.length; i++) {
                if (_this.ones[i] == target) {
                    var j = i;
                    break;
                }
            }
            for (i = _this.ones.length - 1; i >= j; i--) {
                if (_this.ones[i] && _this.ones[i].y < 415)
                    _this.ones[i].y += 13;
            }
        }

    },
    obj3reverseStop: function (target) {
        if (target.x >= 240 && target.x <= 350 && target.y >= 20 && target.y <= 150) {
            target.scale.setTo(0.5)
            target.visible = false
            target = null
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
        }
        else {
            target.visible = false
            _this.reverseDrag = true
            _this.obj3DragStop(target);
            target = null
        }
    },


    obj4DragStop: function (target) {
        var isEmpty = false;
        var count = 0;
        if (_this.typearr[_this.count1] == 2) {
            var x = 675;
            for (i = 0; i < _this.tenth.length; i++) {
                if (_this.tenth[i].visible == true) {
                    count++;
                }
            }
        }
        else {
            var x = 648;

            for (i = 0; i < _this.hundredth.length; i++) {
                if (_this.hundredth[i].visible == true) {
                    count++;
                }
            }
        }
        if ((target.x >= 450 && target.x <= 700 && target.y >= 120 && target.y <= 420 && count < 9) || _this.reverseDrag == true) {
            if (_this.reverseDrag == false) {
                target.x = target.actualX;
                target.y = target.actualY
            }
            if (_this.typearr[_this.count1] == 2) {

                for (i = _this.tenth.length - 1; i >= 0; i--) {
                    if (_this.tenth[i].visible == true) {
                        isEmpty = true;
                        break
                    }
                }
                if (isEmpty == false) {
                    var y = 440
                }
                else {
                    for (i = _this.tenth.length - 1; i >= 0; i--) {
                        if (_this.tenth[i].visible == true) {
                            var y = _this.tenth[i].y - 16;
                            break;
                        }
                    }
                }
            }
            else {
                for (i = _this.hundredth.length - 1; i >= 0; i--) {
                    if (_this.hundredth[i].visible == true) {
                        isEmpty = true;
                        break
                    }
                }
                if (isEmpty == false) {
                    var y = 440

                }
                else {
                    for (i = _this.hundredth.length - 1; i >= 0; i--) {
                        if (_this.hundredth[i].visible == true) {
                            var y = _this.hundredth[i].y - 16;
                            break;
                        }
                    }
                }
            }
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
            var note = _this.add.sprite(x, y, _this.typearr[_this.count1] == 1 ? 'coin100th' : 'coin10th')
            if (_this.typearr[_this.count1] == 2) {
                note.scale.setTo(0.9, 1)

            }
            else
                note.scale.setTo(1, 1)

            note.inputEnabled = true
            note.input.enableDrag(true)
            note.events.onDragStart.add(_this.obj4DragStart, _this)
            note.events.onDragStop.add(_this.obj4reverseStop, _this)
            if (_this.typearr[_this.count1] == 2) {
                _this.tenth.push(note)
            }
            else {
                _this.hundredth.push(note)
            }
        }
        else {
            if (_this.reverseDrag == false) {
                target.x = target.actualX;
                target.y = target.actualY
            }
        }
        _this.reverseDrag = false;
    },
    obj4DragStart: function (target) {
        if (_this.typearr[_this.count1] == 2) {
            for (i = 0; i < _this.tenth.length; i++) {
                if (_this.tenth[i] == target) {
                    var j = i;
                    break;
                }
            }
            for (i = _this.tenth.length - 1; i >= j; i--) {
                if (_this.tenth[i] && _this.tenth[i].y < 440) {
                    _this.tenth[i].y += 16;
                }
            }
        }
        else {
            for (i = 0; i < _this.hundredth.length; i++) {
                if (_this.hundredth[i] == target) {
                    var j = i;
                    break;
                }
            }
            for (i = _this.hundredth.length - 1; i >= j; i--) {
                if (_this.hundredth[i] && _this.hundredth[i].y < 440)
                    _this.hundredth[i].y += 16;
            }
        }

    },
    obj4reverseStop: function (target) {
        if (target.x >= 290 && target.x <= 400 && target.y >= 20 && target.y <= 150) {
            target.scale.setTo(0.5)
            target.visible = false
            target = null
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
        }
        else {
            target.visible = false
            _this.reverseDrag = true
            _this.obj4DragStop(target);
            target = null
        }
    },


    Randomize: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.placeQuesBox()
        _this.showTickbtn();
        _this.maketable();
        _this.objBox();

        // _this.Options();

        if (_this.count1 == 0) {
            _this.Ask_Question1.play();
        }
        _this.Question_flag = 1;

    },
    rightbtnClicked: function () {
        _this.noofAttempts++;
        _this.rightbtn.frame = 1
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        _this.rightbtn_is_Clicked = true;
        if (_this.part1 == true) {
            // ValidatePart1
            if (_this.validatePart1()) {
                _this.part1 = false;
                _this.part2 = true;

                _this.celebrate();
                _this.time.events.add(600, _this.callPart2)
                _this.time.events.add(1000, () => {
                    _this.rightbtn.inputEnabled = true
                    _this.rightbtn.frame = 0;
                });
            }
            else {
                // Destroy Part1
                _this.wrongSelected();
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0

                })
            }
        }
        else if (_this.part2 == true) {
            if (_this.AnswerBox == _this.userSelectedBox) {
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.correctAns();
                _this.part2 = false;
                _this.userSelectedBox = ''
                _this.time.events.add(1000, () => {
                    _this.rightbtn.inputEnabled = true
                });
            }
            else {
                _this.wrongSelected();

                _this.Ops.forEach(element => {
                    element.visible = false
                });
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0

                })

            }
        }
    },
    celebrate: function () {
        _this.counterCelebrationSound.pause();
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.userSelectedBox = ''

    },
    validatePart1: function () {
        countTens = 0;
        countHundred = 0;
        countOnes = 0;
        countTenth = 0;
        countHundreth = 0;
        _this.tens.forEach(element => {
            if (element.visible == true)
                countTens++;
        });
        _this.hundred.forEach(element => {
            if (element.visible == true)
                countHundred++;
        });
        _this.ones.forEach(element => {
            if (element.visible == true)
                countOnes++;
        });
        _this.tenth.forEach(element => {
            if (element.visible == true)
                countTenth++;
        });
        _this.hundredth.forEach(element => {
            if (element.visible == true)
                countHundreth++;
        });

        if (countHundred == Value100Array[_this.count1] && countTens == Value10Array[_this.count1] && countOnes == Value1Array[_this.count1] && countTenth == Value10thArray[_this.count1] && countHundreth == Value100thArray[_this.count1]) {
            return true
        }
        else {
            return false;
        }
        // return true

    },
    wrongSelected: function () {
        _this.wrongans.play();
        if (_this.part1 == true) {
            _this.removePart1();
        }
        else if (_this.part2 == true) {
            _this.userSelectedBox.frame = 0;
            _this.userSelectedBox = ''
            _this.time.events.add(500, () => {
                _this.shuffleOptions();

                _this.Ops.forEach(element => {
                    element.visible = true
                });
            })

        }
        _this.rightbtn.inputEnabled = true;

    },
    Options: function (x, xval, yval = 0) {
        // Places 160,270,370,480,580

        var option = _this.add.sprite(x, 420, 'Option-box')
        option.scale.setTo(1.4, 1.6)

        // option.scale.setTo(1.2, 1.4)
        if (xval != 0 && yval != 0) {

            var text = _this.add.text(27, 9, xval)

            _this.applyingStyle(text)
            text1 = _this.add.graphics();
            text1.lineStyle(3, 0x65B4C3);
            text1.moveTo(17, 30);
            text1.lineTo(48, 30);
            if (yval == 10)
                var text2 = _this.add.text(21, 30, yval)
            else
                var text2 = _this.add.text(17, 30, yval)

            _this.applyingStyle(text2)
            text.scale.setTo(0.7)
            text2.scale.setTo(0.7)

            option.addChild(text)
            option.addChild(text1)
            option.addChild(text2)

        }
        else if (xval != 0) {
            if (xval < 10)
                var text = _this.add.text(27 - 2, 20, xval)
            else if (xval < 99)
                var text = _this.add.text(22 - 2, 20, xval)
            else if (xval < 1000)
                var text = _this.add.text(17 - 2, 20, xval)
            else
                var text = _this.add.text(13 - 2, 20, xval)

            option.addChild(text)
            _this.applyingStyle(text)
            text.scale.setTo(0.7)
        }
        return option;

    },
    callPart2: function () {
        _this.slideGrp1 = _this.add.group();
        _this.slideGrp2 = _this.add.group();
        _this.slideGrp3 = _this.add.group();
        _this.slideGrp4 = _this.add.group();
        _this.slideGrp5 = _this.add.group();

        var tween = _this.add.tween(_this.objextBox);
        tween.to({ alpha: 0.10, alpha: 0 }, 500, 'Linear', true, 0)

        // _this.objextBox.destroy();
        _this.time.events.add(500, () => {
            if (_this.typearr[_this.count1] == 1) {
                var tween = _this.add.tween(_this.table1);
                tween.to({ y: _this.table1.y - 115 }, 800, 'Linear', true, 0);
            }
            else {
                var tween = _this.add.tween(_this.table2);
                tween.to({ y: _this.table2.y - 115 }, 800, 'Linear', true, 0);
            }

            for (i = _this.tens.length - 1; i >= 0; i--) {
                element = _this.tens[i]
                if (element.visible == true) {
                    _this.slideGrp1.add(element);
                    element.unique = 'true'
                }
                element.inputEnabled = false

            };

            for (i = _this.hundred.length - 1; i >= 0; i--) {
                element = _this.hundred[i]
                if (element.visible == true) {
                    _this.slideGrp2.add(element);
                    element.unique = 'true'
                }
                element.inputEnabled = false

            };

            for (i = _this.ones.length - 1; i >= 0; i--) {
                element = _this.ones[i]
                if (element.visible == true) {
                    element.unique = 'true'
                    _this.slideGrp3.add(element);

                }
                element.inputEnabled = false
            };


            _this.tenth.forEach(element => {

                if (element.visible == true) {
                    element.unique = 'true'
                    element.inputEnabled = false
                    _this.slideGrp4.add(element);

                }
            });

            _this.hundredth.forEach(element => {
                if (element.visible == true) {
                    element.unique = 'true'
                    element.inputEnabled = false
                    _this.slideGrp5.add(element);

                }
            });

            var tween = _this.add.tween(_this.slideGrp1);
            tween.to({ y: _this.slideGrp1.y - 120 }, 800, 'Linear', true, 0);

            var tween = _this.add.tween(_this.slideGrp2);
            tween.to({ y: _this.slideGrp2.y - 120 }, 800, 'Linear', true, 0);

            var tween = _this.add.tween(_this.slideGrp3);
            tween.to({ y: _this.slideGrp3.y - 120 }, 800, 'Linear', true, 0);

            var tween = _this.add.tween(_this.slideGrp4);
            tween.to({ y: _this.slideGrp4.y - 120 }, 800, 'Linear', true, 0);

            var tween = _this.add.tween(_this.slideGrp5);
            tween.to({ y: _this.slideGrp5.y - 120 }, 800, 'Linear', true, 0);

            _this.time.events.add(1500, () => {

                _this.Question_flag = 2;
                // _this.FontChangeBox.fill = '#FF0000'

                _this.FontChangeBox.scale.setTo(1.9)
                _this.FontChangeBox.y -= 4
                _this.time.events.add(600, () => {
                    _this.FontChangeBox.fill = '#FF0000'
                    _this.snapSound.play()
                    if (_this.count1 == 0) {
                        _this.Ask_Question2.play();
                    }

                })
                _this.time.events.add(1200, () => {
                    _this.FontChangeBox.scale.setTo(1.6)
                    _this.FontChangeBox.y += 4


                })


            })
            _this.number = Number(_this.FontChangeBox._text)


            _this.slideGrp = _this.add.group();
            _this.slideGrp.x = -1200;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 2000, 'Linear', true, 0);



            _this.op1 = _this.Options(60, _this.number, 100);
            _this.op1.inputEnabled = true;
            _this.op1.events.onInputDown.add(_this.OptionSelected)

            _this.op2 = _this.Options(160, _this.number, 10);
            _this.op2.inputEnabled = true;
            _this.op2.events.onInputDown.add(_this.OptionSelected)

            _this.op3 = _this.Options(270, _this.number);
            _this.op3.inputEnabled = true;
            _this.op3.events.onInputDown.add(_this.OptionSelected)

            _this.op4 = _this.Options(370, _this.number * 10);
            _this.op4.inputEnabled = true;
            _this.op4.events.onInputDown.add(_this.OptionSelected)

            _this.op5 = _this.Options(480, _this.number * 100);
            _this.op5.inputEnabled = true;
            _this.op5.events.onInputDown.add(_this.OptionSelected)

            _this.op6 = _this.Options(580, _this.number * 1000);
            _this.op6.inputEnabled = true;
            _this.op6.events.onInputDown.add(_this.OptionSelected)
            _this.Ops = [_this.op1, _this.op2, _this.op3, _this.op4, _this.op5, _this.op6]

            _this.slideGrp.add(_this.op1);
            _this.slideGrp.add(_this.op2);
            _this.slideGrp.add(_this.op3);
            _this.slideGrp.add(_this.op4);
            _this.slideGrp.add(_this.op5);
            _this.slideGrp.add(_this.op6);


            _this.Ops.forEach(element => {
                element.visible = false
            });
            _this.storeCorrectAnswer();
            _this.shuffleOptions();
            _this.Ops.forEach(element => {
                element.visible = true
            });

        })

    },
    storeCorrectAnswer: function () {
        if (_this.placesAsked[_this.count1] == '100') {
            _this.AnswerBox = _this.op5;
        }
        else if (_this.placesAsked[_this.count1] == '10') {
            _this.AnswerBox = _this.op4;
        }
        else if (_this.placesAsked[_this.count1] == '1') {
            _this.AnswerBox = _this.op3;
        }
        else if (_this.placesAsked[_this.count1] == '0.1') {
            _this.AnswerBox = _this.op2;
        }
        else if (_this.placesAsked[_this.count1] == '0.01') {
            _this.AnswerBox = _this.op1;
        }
    },
    shuffleOptions: function () {
        _this.Ops = _this.shuffle(_this.Ops)
        _this.Ops[0].x = 60;
        _this.Ops[1].x = 160;
        _this.Ops[2].x = 270;
        _this.Ops[3].x = 370;
        _this.Ops[4].x = 480;
        _this.Ops[5].x = 580;
    },
    OptionSelected: function (target) {
        _this.clickSound.currentTime = 0;
        _this.clickSound.play()
        _this.op1.frame = 0
        _this.op2.frame = 0
        _this.op3.frame = 0
        _this.op4.frame = 0
        _this.op5.frame = 0
        _this.op6.frame = 0
        target.frame = 1;
        _this.userSelectedBox = target;

    },
    makeTableHeader: function () {
        _this.tens = _this.add.text(90, 25, '10')
        _this.tens.fill = '#808080'
        _this.table1.addChild(_this.tens)
        _this.tens.scale.setTo(0.9)


        _this.ones = _this.add.text(305, 25, '1')
        _this.ones.fill = '#808080'
        _this.ones.scale.setTo(0.9)


        _this.table1.addChild(_this.ones)

        _this.tenth1 = _this.add.text(439 + 52, 6 + 7, '1')
        _this.tenth1.scale.setTo(0.9)
        _this.tenth1.fill = '#808080'

        _this.table1.addChild(_this.tenth1)

        _this.tenth2 = _this.add.graphics();
        _this.tenth2.lineStyle(3, 0x808080);
        _this.tenth2.moveTo(430 + 52, 33 + 7);
        _this.tenth2.lineTo(468 + 52, 33 + 7);
        _this.tenth2.fill = '#808080'

        _this.table1.addChild(_this.tenth2)

        _this.tenth3 = _this.add.text(434 + 52, 33 + 7, '10')
        _this.tenth3.scale.setTo(0.9)
        _this.tenth3.fill = '#808080'

        _this.table1.addChild(_this.tenth3)

        _this.hundreth1 = _this.add.text(438 + 102 + 102, 6 + 8, '1')
        _this.hundreth1.fill = '#808080'

        _this.hundreth1.scale.setTo(0.9)

        _this.table1.addChild(_this.hundreth1)
        _this.hundreth2 = _this.add.graphics();
        _this.hundreth2.lineStyle(3, 0x808080);
        _this.hundreth2.moveTo(430 + 98 + 102, 33 + 8);
        _this.hundreth2.lineTo(470 + 102 + 102, 33 + 8);
        _this.hundreth2.fill = '#808080'

        _this.table1.addChild(_this.hundreth2)

        _this.hundreth3 = _this.add.text(430 + 100 + 102, 33 + 8, '100')
        _this.hundreth3.scale.setTo(0.9)
        _this.hundreth3.fill = '#808080'


        _this.table1.addChild(_this.hundreth3)
    },
    makeTableHeader2: function () {
        _this.hundred = _this.add.text(80, 20, '100')
        _this.table2.addChild(_this.hundred)
        _this.hundred.fill = '#808080'
        _this.hundred.scale.setTo(0.9)


        _this.tens = _this.add.text(270, 20, '10')
        _this.tens.fill = '#808080'
        _this.table2.addChild(_this.tens)
        _this.tens.scale.setTo(0.9)


        _this.ones = _this.add.text(480, 20, '1')
        _this.ones.fill = '#808080'
        _this.ones.scale.setTo(0.9)

        _this.table2.addChild(_this.ones)

        _this.tenth1 = _this.add.text(631, 8, '1')
        _this.tenth1.scale.setTo(0.9)
        _this.tenth1.fill = '#808080'
        _this.table2.addChild(_this.tenth1)

        _this.tenth2 = _this.add.graphics();
        _this.tenth2.lineStyle(3, 0x808080);
        _this.tenth2.moveTo(626, 35);
        _this.tenth2.lineTo(655, 35);
        _this.tenth2.fill = '#808080'
        _this.table2.addChild(_this.tenth2)

        _this.tenth3 = _this.add.text(626, 35, '10')
        _this.tenth3.scale.setTo(0.9)
        _this.tenth3.fill = '#808080'
        _this.table2.addChild(_this.tenth3)


    },
    maketable: function () {
        if (_this.typearr[_this.count1] == 1) {
            _this.table1 = _this.add.sprite(40, 185, 'Table1')
            _this.table1.scale.setTo(1, 1.04)
            _this.makeTableHeader();
        }
        else {
            _this.table2 = _this.add.sprite(40, 185, 'Table2')
            _this.table2.scale.setTo(1.06, 0.92)
            _this.makeTableHeader2();
        }
        _this.part1 = true;
    },
    removePart1: function () {
        _this.tens.forEach(element => {
            element.destroy();
        });
        _this.hundred.forEach(element => {
            element.destroy();
        });
        _this.ones.forEach(element => {
            element.destroy();
        });
        _this.tenth.forEach(element => {
            element.destroy();
        });
        _this.hundredth.forEach(element => {
            element.destroy();
        });
        _this.hundred = [];
        _this.tens = [];
        _this.ones = [];
        _this.tenth = [];
        _this.hundredth = [];
        _this.reverseDrag = false;

    },
    ClearAll: function () {
        if (_this.table1)
            _this.table1.destroy()
        if (_this.table2)
            _this.table2.destroy()
        _this.op1.destroy();
        _this.op2.destroy();
        _this.op3.destroy();
        _this.op4.destroy();
        _this.op5.destroy();
        _this.op6.destroy();

        _this.removePart1();
        _this.quesBox.destroy();
        _this.rightbtn.destroy();

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
            // _this.counterCelebrationSound.play();
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
        // _this.game_id = "NSD_3B_G6";
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