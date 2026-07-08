Game.GMSS_01_G8level1 = function () { };


Game.GMSS_01_G8level1.prototype =
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
        _this.framechangesrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);


        _this.Ask_Question1 = _this.createAudio("GMSS_01_G8_a1");//top
        _this.Ask_Question2 = _this.createAudio("GMSS_01_G8_a2");//side
        _this.Ask_Question3 = _this.createAudio("GMSS_01_G8_a3");//front
        // _this.Ask_Question4 = _this.createAudio("V4");
        _this.Ask_Question5 = _this.createAudio("GMSS_01_G8_a5");//top
        _this.Ask_Question6 = _this.createAudio("GMSS_01_G8_a4");//side
        _this.Ask_Question7 = _this.createAudio("GMSS_01_G8_a6");//front

        //edited for baseurl online apk
        telInitializerbbpp.gameIdInit("GMSS_01_G8", gradeSelected);
        console.log(gameID, "gameID...");
    },
    create: function (game) {
        //for api
        _this.hintBtn = _this.add.sprite(670, 6, 'bulb');
        _this.hintBtn.scale.setTo(0.5, 0.6);
        _this.hintBtn.visible = false;

        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        // _this.time.events.add(1500, function () {
        //     _this.gameCreate(game);
        // });
        // if (_this.count1 > 2) {
        //     //* show the demo video
        //     _this.time.events.add(1, function () {
        //         _this.ViewDemoVideo();
        //     });
        // }
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
        _this.count1 = 0;//0
        _this.AnswerBox;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.Question_flag = 0;


        _this.counterForTimer = 0;

        _this.selectedBox1 = false;
        _this.selectedBox2 = false;
        _this.selectedBox3 = false;
        _this.selectedBox4 = false;

        _this.right = false;
        _this.wrong = false;

        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        //part-a box object
        _this.boxPosition_x = [820, 820, 820, 820];
        _this.boxPosition_y = [70, 150, 230, 310];

        //part-b box object
        _this.boxPosition_x_b = [20, 231, 20, 231];
        _this.boxPosition_y_b = [80, 80, 295, 295];

        //part-a real object
        _this.optionObjectOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];//0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
        _this.shuffleArray(_this.optionObjectOrder);
        console.log(_this.optionObjectOrder, "_this.optionObjectOrder");
        _this.objectArray = ['canned', 'suitcase', 'bus', 'samoosa', 'coriour_box', 'bread', 'cone_ice', 'cone_sign', 'candle', 'cube',
            'dice', 'gift_box', 'pastry', 'cake', 'sandwich', 'wood_pice', 'drum'];
        //'canned', 'suitcase', 'bus', 'samoosa', 'coriour_box', 'bread', 'cone_ice', 'cone_sign', 'candle', 'cube','dice', 'gift_box', 'pastry', 'cake', 'sandwich', 'wood_pice', 'drum'

        _this.Cube_Positions = [[40, 100], [70, 117], [72, 82], [109, 99], [40, 63], [70, 80], [72, 45], [102, 62], [40, 26], [70, 43], [72, 8], [102, 25]];//[0][0]
        _this.Cube_Positions_x = [40, 70, 70, 100, 40, 70, 70, 100, 40, 70, 70, 100];//1to12
        _this.Cube_Positions_y = [100, 117, 83, 100, 65, 82, 48, 65, 29, 46, 12, 29];//1to12

        _this.frontSide_x = [125, 200, 125, 200, 125, 200];
        _this.frontSide_y = [250, 250, 175, 175, 100, 100];

        _this.topSide_x = [125, 200, 125, 200];
        _this.topSide_y = [210, 210, 135, 135];

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'BG1');
        //** include the background file, navigation bar, stars, timer objects.
        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.state.start('grade8Geometry', true, false);
            // _this.state.start('GMSS_01_G8Score');
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if (_this.Question_flag == 0) {
                    if (_this.viewOrder[0] == 1) {
                        _this.pauseVoice();
                        _this.Ask_Question1.play();
                    }
                    if (_this.viewOrder[0] == 2) {
                        _this.pauseVoice();
                        _this.Ask_Question2.play();
                    }
                    if (_this.viewOrder[0] == 3) {
                        _this.pauseVoice();
                        _this.Ask_Question3.play();
                    }
                }
                if (_this.Question_flag == 1) {
                    _this.pauseVoice();
                    // _this.Ask_Question4.play();
                    if (_this.languageSelected == "English")
                        _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMSS-01-G8/English/GMSS_01_G8_d1.mp3');
                    else if (_this.languageSelected == "Hindi")
                        _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMSS-01-G8/Hindi/GMSS_01_G8_d1.mp3');
                    else if (_this.languageSelected == "Kannada")
                        _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMSS-01-G8/Kannada/GMSS_01_G8_d1.mp3');
                    else if (_this.languageSelected == "Marathi")
                        _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMSS-01-G8/Marathi/GMSS_01_G8_d1.mp3');
                    else if (_this.languageSelected == "Tamil")
                        _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMSS-01-G8/Tamil/GMSS_01_G8_d1.mp3');
                    else if (_this.languageSelected == "Odiya")
                        _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMSS-01-G8/Odiya/GMSS_01_G8_d1.mp3');
                }
                if (_this.Question_flag == 2) {
                    if (_this.top_viewFlag == 1) {
                        _this.pauseVoice();
                        _this.Ask_Question5.play();
                    }
                    if (_this.side_viewFlag == 1) {
                        _this.pauseVoice();
                        _this.Ask_Question6.play();
                    }
                    if (_this.front_viewFlag == 1) {
                        _this.pauseVoice();
                        _this.Ask_Question7.play();
                    }
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
                if (_this.count1 >= 3) {
                    console.log(_this.hintBtn.inputEnabled, "status of hintBtn");
                    _this.ViewDemoVideo();
                }

            });

        });

        _this.hintBtn.alpha = 0;
        // _this.hintBtn.visible = false;

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
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/GMSS-01-G8/" + _this.languageSelected + "/" + src + ".mp3");
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
        // console.log("timer function...");
        // console.log('_this.counterForTimer:', _this.counterForTimer);
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
        // _this.choice = _this.arr[_this.starting++];

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

        // _this.Question_flag = 0;

        //for api
        //* hintbtn will be true when the game is playing
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1; //for api

        _this.InitialScreen();
        // _this.b_randomisation();

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
        if (_this.Ask_Question7) {
            _this.Ask_Question7.pause();
            _this.Ask_Question7 = null;
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
        // if (_this.Ask_Question4) {
        //     _this.Ask_Question4.pause();
        //     _this.Ask_Question4.currentTime = 0.0;
        // }
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
    },
    playAudio: function (src) {

        // Pause and reset the currently playing audio
        // if (currentlyPlayingAudio) {
        //     currentlyPlayingAudio.pause();
        //     currentlyPlayingAudio.currentTime = 0;
        // }

        var audio = new Audio();
        var source = document.createElement('source');
        source.setAttribute('src', src);
        audio.appendChild(source);
        audio.play();

        // Set the currently playing audio
        currentlyPlayingAudio = audio;

        // Remove the reference to the audio element when it finishes playing
        audio.addEventListener('ended', function () {
            currentlyPlayingAudio = null;
        });

        return audio;
    },
    // Fu

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

    b_randomisation: function () {
        //test
        /* we have 3 layer. let's say layer1, layer2, layer3.
        . layer1 = 1, 2, 3, 4
        . layer2 = 5,6,7,8
        . layer3 = 9,10,11,12

        _this.Cube_Positions = [[40, 100], [70, 117], [72, 82], [109, 99], [40, 63], [70, 80], [72, 45], [102, 62], [40, 26], [70, 43], [72, 8], [102, 25]];//[0][0]

        layer1 randomisation

        L1_Count = Randomly select a number from 1 to 3  (we can keep max 3 in first layer)
        Randomly select L1_Count of positions from L1 positions (1,2,3,4). Avoid duplicate selection by comparing with previous options selected (How? See last Slide)).
        Place the L1_Count of cubes in the selected L1 positions (based on their Cube_position X,Y)

        layer2 randomisation

        L2_Count = Randomly select a number from 1 to (4-L1_count)  (we can keep max 4 minus L1_Count which is remaining now after filling Layer 1)
        Randomly select L2_Count of positions from L2 positions (5,6,7,8). Avoid duplicate selection by comparing with previous options selected.
        Place the L2_Count of cubes in the selected L2 positions (based on their Cube_position X,Y)

         layer2 randomisation

        If L3_Count > 0 Randomly select a number from 1 to L3_Count 
        Randomly select L3_Count of positions from L3 positions (9,10,11,12). Avoid duplicate selection by comparing with previous options selected.
        Place the L3_Count of cubes in the selected L3 positions (based on their Cube_position X,Y)


        */
        //layer 1
        _this.L1_position = [];
        _this.L1_Group = _this.add.group();

        _this.L1_Count = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
        _this.L1_Count_pos = [1, 2, 3, 4];
        _this.shuffleArray(_this.L1_Count_pos);
        for (i = 0; i < _this.L1_Count; i++) {
            //taking the positions and pushing them to array
            _this.L1_position.push(_this.L1_Count_pos[i]);
        }
        console.log(_this.L1_Count, "_this.L1_Count");
        console.log(_this.L1_position, "_this.L1_position");

        // Desired order
        var desiredOrder = [3, 1, 4, 2];

        // Rearrange the array
        var rearrangedArray = [];
        for (var i = 0; i < desiredOrder.length; i++) {
            var value = desiredOrder[i];
            if (_this.L1_position.includes(value)) {
                rearrangedArray.push(value);
            }
        }

        // Output the rearranged array
        console.log(rearrangedArray, "rearranged");

        cubessarr = [];
        for (j = 0; j < _this.L1_Count; j++) {
            cube = _this.add.sprite(_this.Cube_Positions_x[rearrangedArray[j] - 1], _this.Cube_Positions_y[rearrangedArray[j] - 1], 'colorCube')
            cube.scale.setTo(0.4, 0.4);
            cubessarr.push(cube);
            _this.L1_Group.addChild(cube);
        }

        //layer2
        _this.L2_position = [];
        _this.L2_Group = _this.add.group();

        _this.L2_Count = Math.floor(Math.random() * (4 - _this.L1_Count)) + 1;//1 to 3
        _this.L2_Count_pos = [5, 6, 7, 8];
        _this.shuffleArray(_this.L2_Count_pos);
        for (i = 0; i < _this.L2_Count; i++) {

            _this.L2_position.push(_this.L2_Count_pos[i]);
        }
        console.log(_this.L2_Count, "_this.L2_Count");
        console.log(_this.L2_position, "_this.L2_position");

        // Desired order
        var desiredOrder_2 = [7, 5, 8, 6];

        // Rearrange the array
        var rearrangedArray_2 = [];
        for (var i = 0; i < desiredOrder_2.length; i++) {
            var value = desiredOrder_2[i];
            if (_this.L2_position.includes(value)) {
                rearrangedArray_2.push(value);
            }
        }

        // Output the rearranged array
        console.log(rearrangedArray_2, "rearranged..");

        cubessarr_2 = [];
        for (j = 0; j < _this.L2_Count; j++) {
            cube = _this.add.sprite(_this.Cube_Positions_x[rearrangedArray_2[j] - 1], _this.Cube_Positions_y[rearrangedArray_2[j] - 1], 'colorCube')
            cube.scale.setTo(0.4, 0.4);
            cubessarr_2.push(cube);
            _this.L2_Group.addChild(cube);
        }

        //layer3
        //L3_Count = 4 – (L1_Count+ L2_Count). 
        _this.L3_position = [];
        _this.L3_Group = _this.add.group();

        _this.L3_Count = 4 - (_this.L1_Count + _this.L2_Count);//1 to 3
        _this.L3_Count_pos = [9, 10, 11, 12];
        _this.shuffleArray(_this.L3_Count_pos);
        for (i = 0; i < _this.L3_Count; i++) {

            _this.L3_position.push(_this.L3_Count_pos[i]);
        }
        console.log(_this.L3_Count, "_this.L3_Count");
        console.log(_this.L3_position, "_this.L3_position");

        // Desired order
        var desiredOrder_3 = [11, 9, 12, 10];

        // Rearrange the array
        var rearrangedArray_3 = [];
        for (var i = 0; i < desiredOrder_3.length; i++) {
            var value = desiredOrder_3[i];
            if (_this.L3_position.includes(value)) {
                rearrangedArray_3.push(value);
            }
        }

        // Output the rearranged array
        console.log(rearrangedArray_3, "rearranged..");

        cubessarr_3 = [];
        for (j = 0; j < _this.L3_Count; j++) {
            cube = _this.add.sprite(_this.Cube_Positions_x[rearrangedArray_3[j] - 1], _this.Cube_Positions_y[rearrangedArray_3[j] - 1], 'colorCube')
            cube.scale.setTo(0.4, 0.4);
            cubessarr_3.push(cube);
            _this.L3_Group.addChild(cube);
        }

        //.....................................................//
        // //front view
        // _this.gray_1 = _this.add.sprite(125, 250, 'greyShade');//1,3
        // _this.gray_2 = _this.add.sprite(200, 250, 'greyShade');//2,4

        // _this.gray_3 = _this.add.sprite(125, 175, 'greyShade');//5,7
        // _this.gray_4 = _this.add.sprite(200, 175, 'greyShade');//6,8

        // _this.gray_5 = _this.add.sprite(125, 100, 'greyShade');//9,11
        // _this.gray_6 = _this.add.sprite(200, 100, 'greyShade');//10,12

        // _this.panel_1.addChild(_this.gray_1);
        // _this.panel_1.addChild(_this.gray_2);
        // _this.panel_1.addChild(_this.gray_3);
        // _this.panel_1.addChild(_this.gray_4);
        // _this.panel_1.addChild(_this.gray_5);
        // _this.panel_1.addChild(_this.gray_6);
        //.......................................................//
        //.....................................................//
        // //side view
        // _this.gray_1 = _this.add.sprite(125, 250, 'greyShade');//1,3
        // _this.gray_2 = _this.add.sprite(200, 250, 'greyShade');//2,4

        // _this.gray_3 = _this.add.sprite(125, 175, 'greyShade');//5,7
        // _this.gray_4 = _this.add.sprite(200, 175, 'greyShade');//6,8

        // _this.gray_5 = _this.add.sprite(125, 100, 'greyShade');//9,11
        // _this.gray_6 = _this.add.sprite(200, 100, 'greyShade');//10,12

        // _this.panel_1.addChild(_this.gray_1);
        // _this.panel_1.addChild(_this.gray_2);
        // _this.panel_1.addChild(_this.gray_3);
        // _this.panel_1.addChild(_this.gray_4);
        // _this.panel_1.addChild(_this.gray_5);
        // _this.panel_1.addChild(_this.gray_6);
        //.......................................................//
        // //top side view
        // _this.gray_1 = _this.add.sprite(125, 210, 'greyShade');//1,5,9
        // _this.gray_2 = _this.add.sprite(200, 210, 'greyShade');//2,6,10

        // _this.gray_3 = _this.add.sprite(125, 135, 'greyShade');//3,7,11
        // _this.gray_4 = _this.add.sprite(200, 135, 'greyShade');//4,8,12

        // _this.panel_1.addChild(_this.gray_1);
        // _this.panel_1.addChild(_this.gray_2);
        // _this.panel_1.addChild(_this.gray_3);
        // _this.panel_1.addChild(_this.gray_4);
        //.......................................................//



        _this.box = _this.add.sprite(200, 100, 'BoxFrame');
        //..............................................//
        // _this.cubeTestGroup = _this.add.group();
        // _this.L_Count = 8;
        // _this.Cube_Positions_x_test = [70, 40, 100, 70, 70, 40, 100, 70, 70, 40, 100, 70];
        // _this.Cube_Positions_y_test = [83, 100, 100, 117, 48, 65, 65, 82, 12, 29, 29, 46];
        //..............................................//

        // _this.cube_3 = _this.add.sprite(70, 83, 'colorCube');//+32, -18
        // _this.cube_3.scale.setTo(0.4, 0.4);
        // _this.cube_1 = _this.add.sprite(40, 100, 'colorCube');
        // _this.cube_1.scale.setTo(0.4, 0.4);

        // _this.cube_4 = _this.add.sprite(100, 100, 'colorCube');//+32,-18
        // _this.cube_4.scale.setTo(0.4, 0.4);
        // _this.cube_2 = _this.add.sprite(70, 117, 'colorCube');//30,54
        // _this.cube_2.scale.setTo(0.4, 0.4);

        // _this.cube_7 = _this.add.sprite(70, 48, 'colorCube');//
        // _this.cube_7.scale.setTo(0.4, 0.4);
        // _this.cube_5 = _this.add.sprite(40, 65, 'colorCube');//x+=30,y-=37
        // _this.cube_5.scale.setTo(0.4, 0.4);

        // _this.cube_8 = _this.add.sprite(100, 65, 'colorCube');//
        // _this.cube_8.scale.setTo(0.4, 0.4);
        // _this.cube_6 = _this.add.sprite(70, 82, 'colorCube');//x+=30,y-=37
        // _this.cube_6.scale.setTo(0.4, 0.4);

        // _this.cube_11 = _this.add.sprite(70, 12, 'colorCube');//
        // _this.cube_11.scale.setTo(0.4, 0.4);
        // _this.cube_9 = _this.add.sprite(40, 29, 'colorCube');//x+=30,y-=37
        // _this.cube_9.scale.setTo(0.4, 0.4);

        // _this.cube_12 = _this.add.sprite(100, 29, 'colorCube');//
        // _this.cube_12.scale.setTo(0.4, 0.4)
        // _this.cube_10 = _this.add.sprite(70, 46, 'colorCube');//x+=30,y-=37
        // _this.cube_10.scale.setTo(0.4, 0.4);


        // _this.box.addChild(_this.cube_3);
        // _this.box.addChild(_this.cube_1);
        // _this.box.addChild(_this.cube_4);
        // _this.box.addChild(_this.cube_2);
        // _this.box.addChild(_this.cube_7);
        // _this.box.addChild(_this.cube_5);
        // _this.box.addChild(_this.cube_8);
        // _this.box.addChild(_this.cube_6);
        // _this.box.addChild(_this.cube_11);
        // _this.box.addChild(_this.cube_9);
        // _this.box.addChild(_this.cube_12);
        // _this.box.addChild(_this.cube_10);

        //..............................................//
        // for (var j = 0; j < _this.L_Count; j++) {
        //     cube = _this.add.image(_this.Cube_Positions_x_test[j], _this.Cube_Positions_y_test[j], 'colorCube')
        //     cube.scale.setTo(0.4, 0.4);
        //     // cubessarr.push(cube);
        //     _this.cubeTestGroup.addChild(cube);
        //     _this.cubeTestGroup.getChildAt(_this.cubeTestGroup.length - 1).inputEnabled = true;
        //     _this.cubeTestGroup.getChildAt(_this.cubeTestGroup.length - 1).input.useHandCursor = true;
        //     _this.cubeTestGroup.getChildAt(_this.cubeTestGroup.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
        // }
        // _this.box.addChild(_this.cubeTestGroup);
        //..............................................//
    },
    firstOption_b_randomisation: function () {
        /* we have 3 layer. let's say layer1, layer2, layer3.
        . layer1 = 1, 2, 3, 4
        . layer2 = 5,6,7,8
        . layer3 = 9,10,11,12

        _this.Cube_Positions = [[40, 100], [70, 117], [72, 82], [109, 99], [40, 63], [70, 80], [72, 45], [102, 62], [40, 26], [70, 43], [72, 8], [102, 25]];//[0][0]

        layer1 randomisation

        L1_Count = Randomly select a number from 1 to 3  (we can keep max 3 in first layer)
        Randomly select L1_Count of positions from L1 positions (1,2,3,4). Avoid duplicate selection by comparing with previous options selected (How? See last Slide)).
        Place the L1_Count of cubes in the selected L1 positions (based on their Cube_position X,Y)

        layer2 randomisation

        L2_Count = Randomly select a number from 1 to (4-L1_count)  (we can keep max 4 minus L1_Count which is remaining now after filling Layer 1)
        Randomly select L2_Count of positions from L2 positions (5,6,7,8). Avoid duplicate selection by comparing with previous options selected.
        Place the L2_Count of cubes in the selected L2 positions (based on their Cube_position X,Y)

         layer2 randomisation

        If L3_Count > 0 Randomly select a number from 1 to L3_Count 
        Randomly select L3_Count of positions from L3 positions (9,10,11,12). Avoid duplicate selection by comparing with previous options selected.
        Place the L3_Count of cubes in the selected L3 positions (based on their Cube_position X,Y)


        */

        //randomizing the order of the 3 layer first
        //layer 1..................................................................
        _this.positionArray_1 = [];
        _this.L1_position = [];
        _this.L1_Group = _this.add.group();

        _this.L1_Count = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
        _this.L1_Count_pos = [1, 2, 3, 4];//1, 2, 3, 4
        _this.shuffleArray(_this.L1_Count_pos);
        for (var i = 0; i < _this.L1_Count; i++) {
            //taking the positions and pushing them to array
            _this.L1_position.push(_this.L1_Count_pos[i]);
        }
        console.log(_this.L1_Count, "_this.L1_Count");
        console.log(_this.L1_position, "_this.L1_position");

        //layer 2..................................................................
        _this.L2_position = [];
        _this.L2_Group = _this.add.group();

        _this.L2_Count = Math.floor(Math.random() * (4 - _this.L1_Count)) + 1;//1 to 3
        _this.L2_Count_pos = [5, 6, 7, 8];//5, 6, 7, 8
        _this.shuffleArray(_this.L2_Count_pos);
        for (var i = 0; i < _this.L2_Count; i++) {

            _this.L2_position.push(_this.L2_Count_pos[i]);
        }
        console.log(_this.L2_Count, "_this.L2_Count");
        console.log(_this.L2_position, "_this.L2_position");

        //layer 3..................................................................
        _this.L3_position = [];
        _this.L3_Group = _this.add.group();

        _this.L3_Count = 4 - (_this.L1_Count + _this.L2_Count);//1 to 3
        _this.L3_Count_pos = [9, 10, 11, 12];//9, 10, 11, 12
        _this.shuffleArray(_this.L3_Count_pos);
        for (var i = 0; i < _this.L3_Count; i++) {

            _this.L3_position.push(_this.L3_Count_pos[i]);
        }
        console.log(_this.L3_Count, "_this.L3_Count");
        console.log(_this.L3_position, "_this.L3_position");

        _this.positionArray_1 = [..._this.L1_position, ..._this.L2_position, ..._this.L3_position];
        console.log(_this.positionArray_1, "_this.positionArray_1 before checking ambiguous");

        //checking the ambiguous options. and change the option.............................................................//


        var ambiguousArray = {
            1: [3, 6],
            2: [3, 8],
            3: [7, 10]
        };

        // Function to check if any element in positionArray_1 matches any value in ambiguousArray
        function doesAnyElementMatch(array1, object2) {
            for (var i = 0; i < array1.length; i++) {
                var element = array1[i];
                for (var key in object2) {
                    if (object2.hasOwnProperty(key)) {
                        var valueArray = object2[key];
                        if (valueArray.indexOf(element) !== -1) {
                            return true; // Element found in ambiguousArray
                        }
                    }
                }
            }
            return false; // No match found
        }

        // Check if any element in _this.positionArray_1 matches any value in ambiguousArray.
        while (doesAnyElementMatch(_this.positionArray_1, ambiguousArray)) {
            // console.log("At least one element in _this.positionArray_1 matches a value in ambiguousArray.");
            //layer 1..................................................................
            _this.positionArray_1 = [];
            _this.L1_position = [];
            _this.L1_Group = _this.add.group();

            _this.L1_Count = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
            _this.L1_Count_pos = [1, 2, 3, 4];//1, 2, 3, 4
            _this.shuffleArray(_this.L1_Count_pos);
            for (var i = 0; i < _this.L1_Count; i++) {
                //taking the positions and pushing them to array
                _this.L1_position.push(_this.L1_Count_pos[i]);
            }
            console.log(_this.L1_Count, "_this.L1_Count");
            console.log(_this.L1_position, "_this.L1_position");

            //layer 2..................................................................
            _this.L2_position = [];
            _this.L2_Group = _this.add.group();

            _this.L2_Count = Math.floor(Math.random() * (4 - _this.L1_Count)) + 1;//1 to 3
            _this.L2_Count_pos = [5, 6, 7, 8];//5, 6, 7, 8
            _this.shuffleArray(_this.L2_Count_pos);
            for (var i = 0; i < _this.L2_Count; i++) {

                _this.L2_position.push(_this.L2_Count_pos[i]);
            }
            console.log(_this.L2_Count, "_this.L2_Count");
            console.log(_this.L2_position, "_this.L2_position");

            //layer 3..................................................................
            _this.L3_position = [];
            _this.L3_Group = _this.add.group();

            _this.L3_Count = 4 - (_this.L1_Count + _this.L2_Count);//1 to 3
            _this.L3_Count_pos = [9, 10, 11, 12];//9, 10, 11, 12
            _this.shuffleArray(_this.L3_Count_pos);
            for (var i = 0; i < _this.L3_Count; i++) {

                _this.L3_position.push(_this.L3_Count_pos[i]);
            }
            console.log(_this.L3_Count, "_this.L3_Count");
            console.log(_this.L3_position, "_this.L3_position");

            _this.positionArray_1 = [..._this.L1_position, ..._this.L2_position, ..._this.L3_position];
            console.log(_this.positionArray_1, "_this.positionArray_1 ");

        }


        //.......................................................................//

        //...........................gray box randomisation.......................//
        //for front view position

        // Define the transformation rules
        var transformationRules = {
            1: [1, 3],
            2: [2, 4],
            3: [5, 7],
            4: [6, 8],
            5: [9, 11],
            6: [10, 12]
        };

        // Create a new Set to store transformed values
        var transformedSet = new Set();

        // Iterate over the original array and add transformed values to the Set
        _this.positionArray_1.forEach(function (element) {
            for (var key in transformationRules) {
                if (transformationRules[key].includes(element)) {
                    transformedSet.add(parseInt(key));
                    break;
                }
            }
        });

        // Convert the Set back to an array
        _this.frontView_1 = Array.from(transformedSet);
        console.log(_this.frontView_1, "_this.frontView_1 .............");

        //............................................................................//
        //for side view position

        // Define the transformation rules
        var transformationSides = {
            1: [1, 2],
            2: [3, 4],
            3: [5, 6],
            4: [7, 8],
            5: [9, 10],
            6: [11, 12]
        };

        // Create a new Set to store transformed values
        var transformedSet_side = new Set();

        // Iterate over the original array and add transformed values to the Set
        _this.positionArray_1.forEach(function (element) {
            for (var key in transformationSides) {
                if (transformationSides[key].includes(element)) {
                    transformedSet_side.add(parseInt(key));
                    break;
                }
            }
        });

        // Convert the Set back to an array
        _this.sideView_1 = Array.from(transformedSet_side);
        console.log(_this.sideView_1, "_this.sideView_1 .............");
        //............................................................................//
        //for top view position

        // Define the transformation rules
        var transformationtop = {
            1: [1, 5, 9],
            2: [2, 6, 10],
            3: [3, 7, 11],
            4: [4, 8, 12]
        };

        // Create a new Set to store transformed values
        var transformedSet_top = new Set();

        // Iterate over the original array and add transformed values to the Set
        _this.positionArray_1.forEach(function (element) {
            for (var key in transformationtop) {
                if (transformationtop[key].includes(element)) {
                    transformedSet_top.add(parseInt(key));
                    break;
                }
            }
        });

        // Convert the Set back to an array
        _this.topView_1 = Array.from(transformedSet_top);
        console.log(_this.topView_1, "_this.topView_1 .............");


    },
    secondOption_b_randomisation: function () {

        //randomizing the order of the 3 layer first
        //layer 1..................................................................
        _this.L1_position_2 = [];
        _this.L1_Group_2 = _this.add.group();

        _this.L1_Count_2 = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
        _this.L1_Count_pos_2 = [1, 2, 3, 4];//1, 2, 3, 4
        _this.shuffleArray(_this.L1_Count_pos_2);
        for (var i = 0; i < _this.L1_Count_2; i++) {
            //taking the positions and pushing them to array
            _this.L1_position_2.push(_this.L1_Count_pos_2[i]);
        }
        console.log(_this.L1_Count_2, "_this.L1_Count_2");
        console.log(_this.L1_position_2, "_this.L1_position_2");

        //layer 2..................................................................
        _this.L2_position_2 = [];
        _this.L2_Group_2 = _this.add.group();

        _this.L2_Count_2 = Math.floor(Math.random() * (4 - _this.L1_Count_2)) + 1;//1 to 3
        _this.L2_Count_pos_2 = [5, 6, 7, 8];//5, 6, 7, 8
        _this.shuffleArray(_this.L2_Count_pos_2);
        for (var i = 0; i < _this.L2_Count_2; i++) {

            _this.L2_position_2.push(_this.L2_Count_pos_2[i]);
        }
        console.log(_this.L2_Count_2, "_this.L2_Count_2");
        console.log(_this.L2_position_2, "_this.L2_position_2");

        //layer 3..................................................................
        _this.L3_position_2 = [];
        _this.L3_Group_2 = _this.add.group();

        _this.L3_Count_2 = 4 - (_this.L1_Count_2 + _this.L2_Count_2);//1 to 3
        _this.L3_Count_pos_2 = [9, 10, 11, 12];//9, 10, 11, 12
        _this.shuffleArray(_this.L3_Count_pos_2);
        for (var i = 0; i < _this.L3_Count_2; i++) {

            _this.L3_position_2.push(_this.L3_Count_pos_2[i]);
        }
        console.log(_this.L3_Count_2, "_this.L3_Count_2");
        console.log(_this.L3_position_2, "_this.L3_position_2");

        _this.positionArray_2 = [..._this.L1_position_2, ..._this.L2_position_2, ..._this.L3_position_2];
        console.log(_this.positionArray_2, "_this.positionArray_2");
        // arr2 = _this.positionArray_2;
        // arr1 = _this.positionArray_1;

        var ambiguousArray = {
            1: [3, 6],
            2: [3, 8],
            3: [7, 10]
        };

        // Function to check if any element in positionArray_1 matches any value in ambiguousArray
        function doesAnyElementMatch(array1, object2) {
            for (var i = 0; i < array1.length; i++) {
                var element = array1[i];
                for (var key in object2) {
                    if (object2.hasOwnProperty(key)) {
                        var valueArray = object2[key];
                        if (valueArray.indexOf(element) !== -1) {
                            return true; // Element found in ambiguousArray
                        }
                    }
                }
            }
            return false; // No match found
        }

        // Check if any element in _this.positionArray_1 matches any value in ambiguousArray.
        while (doesAnyElementMatch(_this.positionArray_2, ambiguousArray)) {
            // console.log("At least one element in _this.positionArray_1 matches a value in ambiguousArray.");
            //layer 1..................................................................
            _this.L1_position_2 = [];
            _this.L1_Group_2 = _this.add.group();

            _this.L1_Count_2 = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
            _this.L1_Count_pos_2 = [1, 2, 3, 4];//1, 2, 3, 4
            _this.shuffleArray(_this.L1_Count_pos_2);
            for (var i = 0; i < _this.L1_Count_2; i++) {
                //taking the positions and pushing them to array
                _this.L1_position_2.push(_this.L1_Count_pos_2[i]);
            }
            console.log(_this.L1_Count_2, "_this.L1_Count_2");
            console.log(_this.L1_position_2, "_this.L1_position_2");

            //layer 2..................................................................
            _this.L2_position_2 = [];
            _this.L2_Group_2 = _this.add.group();

            _this.L2_Count_2 = Math.floor(Math.random() * (4 - _this.L1_Count_2)) + 1;//1 to 3
            _this.L2_Count_pos_2 = [5, 6, 7, 8];//5, 6, 7, 8
            _this.shuffleArray(_this.L2_Count_pos_2);
            for (var i = 0; i < _this.L2_Count_2; i++) {

                _this.L2_position_2.push(_this.L2_Count_pos_2[i]);
            }
            console.log(_this.L2_Count_2, "_this.L2_Count_2");
            console.log(_this.L2_position_2, "_this.L2_position_2");

            //layer 3..................................................................
            _this.L3_position_2 = [];
            _this.L3_Group_2 = _this.add.group();

            _this.L3_Count_2 = 4 - (_this.L1_Count_2 + _this.L2_Count_2);//1 to 3
            _this.L3_Count_pos_2 = [9, 10, 11, 12];//9, 10, 11, 12
            _this.shuffleArray(_this.L3_Count_pos_2);
            for (var i = 0; i < _this.L3_Count_2; i++) {

                _this.L3_position_2.push(_this.L3_Count_pos_2[i]);
            }
            console.log(_this.L3_Count_2, "_this.L3_Count_2");
            console.log(_this.L3_position_2, "_this.L3_position_2");

            _this.positionArray_2 = [..._this.L1_position_2, ..._this.L2_position_2, ..._this.L3_position_2];
            console.log(_this.positionArray_2, "_this.positionArray_2");
        }


        //.......................................................................//

        function arraysAreEqual(arr1, arr2) {
            // // Check if arrays have the same length
            // if (arr1.length !== arr2.length) {
            //     return false;
            // }

            // // Iterate over the elements of the arrays
            // for (var i = 0; i < arr1.length; i++) {
            //     // Compare the current elements
            //     if (arr1[i] !== arr2[i]) {
            //         return false;
            //     }
            // }

            // // If all elements match, return true
            // return true;

            // Sort the arrays in ascending order
            var sortedArr1 = arr1.sort();
            var sortedArr2 = arr2.sort();

            // Check if arrays have the same length
            if (sortedArr1.length !== sortedArr2.length) {
                return false;
            }

            // Iterate over the elements of the sorted arrays
            for (var i = 0; i < sortedArr1.length; i++) {
                // Compare the current elements
                if (sortedArr1[i] !== sortedArr2[i]) {
                    return false;
                }
            }

            // If all elements match, return true
            return true;
        }
        console.log(arraysAreEqual(_this.positionArray_1, _this.positionArray_2)); // Output: true
        while (arraysAreEqual(_this.positionArray_1, _this.positionArray_2) == true) {
            console.log("both are same array...................");
            _this.L1_position_2 = [];

            _this.L1_Count_2 = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
            _this.L1_Count_pos_2 = [1, 2, 3, 4];//1, 2, 3, 4
            _this.shuffleArray(_this.L1_Count_pos_2);
            for (var i = 0; i < _this.L1_Count_2; i++) {
                //taking the positions and pushing them to array
                _this.L1_position_2.push(_this.L1_Count_pos[i]);
            }
            console.log(_this.L1_Count_2, "_this.L1_Count_2");
            console.log(_this.L1_position_2, "_this.L1_position_2");

            //layer 2..................................................................
            _this.L2_position_2 = [];

            _this.L2_Count_2 = Math.floor(Math.random() * (4 - _this.L1_Count_2)) + 1;//1 to 3
            _this.L2_Count_pos_2 = [5, 6, 7, 8];//5, 6, 7, 8
            _this.shuffleArray(_this.L2_Count_pos_2);
            for (var i = 0; i < _this.L2_Count_2; i++) {

                _this.L2_position_2.push(_this.L2_Count_pos_2[i]);
            }
            console.log(_this.L2_Count_2, "_this.L2_Count_2");
            console.log(_this.L2_position_2, "_this.L2_position_2");

            //layer 3..................................................................
            _this.L3_position_2 = [];

            _this.L3_Count_2 = 4 - (_this.L1_Count_2 + _this.L2_Count_2);//1 to 3
            _this.L3_Count_pos_2 = [9, 10, 11, 12];//9, 10, 11, 12
            _this.shuffleArray(_this.L3_Count_pos_2);
            for (var i = 0; i < _this.L3_Count_2; i++) {

                _this.L3_position_2.push(_this.L3_Count_pos_2[i]);
            }
            console.log(_this.L3_Count_2, "_this.L3_Count_2");
            console.log(_this.L3_position_2, "_this.L3_position_2");

            _this.positionArray_2 = [..._this.L1_position_2, ..._this.L2_position_2, ..._this.L3_position_2];
            console.log(_this.positionArray_2, "_this.positionArray_2");

            var ambiguousArray = {
                1: [3, 6],
                2: [3, 8],
                3: [7, 10]
            };

            // Function to check if any element in positionArray_1 matches any value in ambiguousArray
            function doesAnyElementMatch(array1, object2) {
                for (var i = 0; i < array1.length; i++) {
                    var element = array1[i];
                    for (var key in object2) {
                        if (object2.hasOwnProperty(key)) {
                            var valueArray = object2[key];
                            if (valueArray.indexOf(element) !== -1) {
                                return true; // Element found in ambiguousArray
                            }
                        }
                    }
                }
                return false; // No match found
            }

            // Check if any element in _this.positionArray_1 matches any value in ambiguousArray.
            while (doesAnyElementMatch(_this.positionArray_2, ambiguousArray)) {
                // console.log("At least one element in _this.positionArray_1 matches a value in ambiguousArray.");
                //layer 1..................................................................
                _this.L1_position_2 = [];
                _this.L1_Group_2 = _this.add.group();

                _this.L1_Count_2 = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
                _this.L1_Count_pos_2 = [1, 2, 3, 4];//1, 2, 3, 4
                _this.shuffleArray(_this.L1_Count_pos_2);
                for (var i = 0; i < _this.L1_Count_2; i++) {
                    //taking the positions and pushing them to array
                    _this.L1_position_2.push(_this.L1_Count_pos_2[i]);
                }
                console.log(_this.L1_Count_2, "_this.L1_Count_2");
                console.log(_this.L1_position_2, "_this.L1_position_2");

                //layer 2..................................................................
                _this.L2_position_2 = [];
                _this.L2_Group_2 = _this.add.group();

                _this.L2_Count_2 = Math.floor(Math.random() * (4 - _this.L1_Count_2)) + 1;//1 to 3
                _this.L2_Count_pos_2 = [5, 6, 7, 8];//5, 6, 7, 8
                _this.shuffleArray(_this.L2_Count_pos_2);
                for (var i = 0; i < _this.L2_Count_2; i++) {

                    _this.L2_position_2.push(_this.L2_Count_pos_2[i]);
                }
                console.log(_this.L2_Count_2, "_this.L2_Count_2");
                console.log(_this.L2_position_2, "_this.L2_position_2");

                //layer 3..................................................................
                _this.L3_position_2 = [];
                _this.L3_Group_2 = _this.add.group();

                _this.L3_Count_2 = 4 - (_this.L1_Count_2 + _this.L2_Count_2);//1 to 3
                _this.L3_Count_pos_2 = [9, 10, 11, 12];//9, 10, 11, 12
                _this.shuffleArray(_this.L3_Count_pos_2);
                for (var i = 0; i < _this.L3_Count_2; i++) {

                    _this.L3_position_2.push(_this.L3_Count_pos_2[i]);
                }
                console.log(_this.L3_Count_2, "_this.L3_Count_2");
                console.log(_this.L3_position_2, "_this.L3_position_2");

                _this.positionArray_2 = [..._this.L1_position_2, ..._this.L2_position_2, ..._this.L3_position_2];
                console.log(_this.positionArray_2, "_this.positionArray_2");
            }
        }
        //   console.log(arraysAreEqual(array1, array3)); // Output: false

        //...........................gray box randomisation.......................//
        //for fron view position

        // Define the transformation rules
        var transformationRules = {
            1: [1, 3],
            2: [2, 4],
            3: [5, 7],
            4: [6, 8],
            5: [9, 11],
            6: [10, 12]
        };

        // Create a new Set to store transformed values
        var transformedSet = new Set();

        // Iterate over the original array and add transformed values to the Set
        _this.positionArray_2.forEach(function (element) {
            for (var key in transformationRules) {
                if (transformationRules[key].includes(element)) {
                    transformedSet.add(parseInt(key));
                    break;
                }
            }
        });

        // Convert the Set back to an array
        _this.frontView_2 = Array.from(transformedSet);
        console.log(_this.frontView_2, "_this.frontView_2 .............");

        //............................................................................//
        //for side view position

        // Define the transformation rules
        var transformationSides = {
            1: [1, 2],
            2: [3, 4],
            3: [5, 6],
            4: [7, 8],
            5: [9, 10],
            6: [11, 12]
        };

        // Create a new Set to store transformed values
        var transformedSet_side = new Set();

        // Iterate over the original array and add transformed values to the Set
        _this.positionArray_2.forEach(function (element) {
            for (var key in transformationSides) {
                if (transformationSides[key].includes(element)) {
                    transformedSet_side.add(parseInt(key));
                    break;
                }
            }
        });

        // Convert the Set back to an array
        _this.sideView_2 = Array.from(transformedSet_side);
        console.log(_this.sideView_2, "_this.sideView_2 .............");
        //............................................................................//
        //for top view position

        // Define the transformation rules
        var transformationtop = {
            1: [1, 5, 9],
            2: [2, 6, 10],
            3: [3, 7, 11],
            4: [4, 8, 12]
        };

        // Create a new Set to store transformed values
        var transformedSet_top = new Set();

        // Iterate over the original array and add transformed values to the Set
        _this.positionArray_2.forEach(function (element) {
            for (var key in transformationtop) {
                if (transformationtop[key].includes(element)) {
                    transformedSet_top.add(parseInt(key));
                    break;
                }
            }
        });

        // Convert the Set back to an array
        _this.topView_2 = Array.from(transformedSet_top);
        console.log(_this.topView_2, "_this.topView_2 .............");

    },
    thirdOption_b_randomisation: function () {

        //randomizing the order of the 3 layer first
        //layer 1..................................................................
        _this.L1_position_3 = [];
        _this.L1_Group_3 = _this.add.group();

        _this.L1_Count_3 = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
        _this.L1_Count_pos_3 = [1, 2, 3, 4];//1, 2, 3, 4
        _this.shuffleArray(_this.L1_Count_pos_3);
        for (var i = 0; i < _this.L1_Count_3; i++) {
            //taking the positions and pushing them to array
            _this.L1_position_3.push(_this.L1_Count_pos_3[i]);
        }
        console.log(_this.L1_Count_3, "_this.L1_Count_3");
        console.log(_this.L1_position_3, "_this.L1_position_3");

        //layer 2..................................................................
        _this.L2_position_3 = [];
        _this.L2_Group_3 = _this.add.group();

        _this.L2_Count_3 = Math.floor(Math.random() * (4 - _this.L1_Count_3)) + 1;//1 to 3
        _this.L2_Count_pos_3 = [5, 6, 7, 8];//5, 6, 7, 8
        _this.shuffleArray(_this.L2_Count_pos_3);
        for (var i = 0; i < _this.L2_Count_3; i++) {

            _this.L2_position_3.push(_this.L2_Count_pos_3[i]);
        }
        console.log(_this.L2_Count_3, "_this.L2_Count_3");
        console.log(_this.L2_position_3, "_this.L2_position_3");

        //layer 3..................................................................
        _this.L3_position_3 = [];
        _this.L3_Group_3 = _this.add.group();

        _this.L3_Count_3 = 4 - (_this.L1_Count_3 + _this.L2_Count_3);//1 to 3
        _this.L3_Count_pos_3 = [9, 10, 11, 12];//9, 10, 11, 12
        _this.shuffleArray(_this.L3_Count_pos_3);
        for (var i = 0; i < _this.L3_Count_3; i++) {

            _this.L3_position_3.push(_this.L3_Count_pos_3[i]);
        }
        console.log(_this.L3_Count_3, "_this.L3_Count_3");
        console.log(_this.L3_position_3, "_this.L3_position_3");

        _this.positionArray_3 = [..._this.L1_position_3, ..._this.L2_position_3, ..._this.L3_position_3];
        console.log(_this.positionArray_3, "_this.positionArray_3");

        //checking the ambiguous options. and change the option.............................................................//


        var ambiguousArray = {
            1: [3, 6],
            2: [3, 8],
            3: [7, 10]
        };

        // Function to check if any element in positionArray_1 matches any value in ambiguousArray
        function doesAnyElementMatch(array1, object2) {
            for (var i = 0; i < array1.length; i++) {
                var element = array1[i];
                for (var key in object2) {
                    if (object2.hasOwnProperty(key)) {
                        var valueArray = object2[key];
                        if (valueArray.indexOf(element) !== -1) {
                            return true; // Element found in ambiguousArray
                        }
                    }
                }
            }
            return false; // No match found
        }

        // Check if any element in _this.positionArray_1 matches any value in ambiguousArray.
        while (doesAnyElementMatch(_this.positionArray_3, ambiguousArray)) {
            // console.log("At least one element in _this.positionArray_1 matches a value in ambiguousArray.");
            //layer 1..................................................................
            _this.L1_position_3 = [];
            _this.L1_Group_3 = _this.add.group();

            _this.L1_Count_3 = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
            _this.L1_Count_pos_3 = [1, 2, 3, 4];//1, 2, 3, 4
            _this.shuffleArray(_this.L1_Count_pos_3);
            for (var i = 0; i < _this.L1_Count_3; i++) {
                //taking the positions and pushing them to array
                _this.L1_position_3.push(_this.L1_Count_pos_3[i]);
            }
            console.log(_this.L1_Count_3, "_this.L1_Count_3");
            console.log(_this.L1_position_3, "_this.L1_position_3");

            //layer 2..................................................................
            _this.L2_position_3 = [];
            _this.L2_Group_3 = _this.add.group();

            _this.L2_Count_3 = Math.floor(Math.random() * (4 - _this.L1_Count_3)) + 1;//1 to 3
            _this.L2_Count_pos_3 = [5, 6, 7, 8];//5, 6, 7, 8
            _this.shuffleArray(_this.L2_Count_pos_3);
            for (var i = 0; i < _this.L2_Count_3; i++) {

                _this.L2_position_3.push(_this.L2_Count_pos_3[i]);
            }
            console.log(_this.L2_Count_3, "_this.L2_Count_3");
            console.log(_this.L2_position_3, "_this.L2_position_3");

            //layer 3..................................................................
            _this.L3_position_3 = [];
            _this.L3_Group_3 = _this.add.group();

            _this.L3_Count_3 = 4 - (_this.L1_Count_3 + _this.L2_Count_3);//1 to 3
            _this.L3_Count_pos_3 = [9, 10, 11, 12];//9, 10, 11, 12
            _this.shuffleArray(_this.L3_Count_pos_3);
            for (var i = 0; i < _this.L3_Count_3; i++) {

                _this.L3_position_3.push(_this.L3_Count_pos_3[i]);
            }
            console.log(_this.L3_Count_3, "_this.L3_Count_3");
            console.log(_this.L3_position_3, "_this.L3_position_3");

            _this.positionArray_3 = [..._this.L1_position_3, ..._this.L2_position_3, ..._this.L3_position_3];
            console.log(_this.positionArray_3, "_this.positionArray_3");

        }

        //.......................................................................//

        function arraysAreEqual(arr1, arr2) {
            // Sort the arrays in ascending order
            var sortedArr1 = arr1.sort();
            var sortedArr2 = arr2.sort();

            // Check if arrays have the same length
            if (sortedArr1.length !== sortedArr2.length) {
                return false;
            }

            // Iterate over the elements of the sorted arrays
            for (var i = 0; i < sortedArr1.length; i++) {
                // Compare the current elements
                if (sortedArr1[i] !== sortedArr2[i]) {
                    return false;
                }
            }

            // If all elements match, return true
            return true;
        }
        console.log(arraysAreEqual(_this.positionArray_1, _this.positionArray_3)); // Output: true
        console.log(arraysAreEqual(_this.positionArray_2, _this.positionArray_3));
        while ((arraysAreEqual(_this.positionArray_1, _this.positionArray_3) == true) || (arraysAreEqual(_this.positionArray_2, _this.positionArray_3) == true)) {
            console.log("both are same array...................");
            _this.L1_position_3 = [];

            _this.L1_Count_3 = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
            _this.L1_Count_pos_3 = [1, 2, 3, 4];//1, 2, 3, 4
            _this.shuffleArray(_this.L1_Count_pos_3);
            for (var i = 0; i < _this.L1_Count_3; i++) {
                //taking the positions and pushing them to array
                _this.L1_position_3.push(_this.L1_Count_pos_3[i]);
            }
            console.log(_this.L1_Count_3, "_this.L1_Count_3");
            console.log(_this.L1_position_3, "_this.L1_position_3");

            //layer 2..................................................................
            _this.L2_position_3 = [];

            _this.L2_Count_3 = Math.floor(Math.random() * (4 - _this.L1_Count_3)) + 1;//1 to 3
            _this.L2_Count_pos_3 = [5, 6, 7, 8];//5, 6, 7, 8
            _this.shuffleArray(_this.L2_Count_pos_3);
            for (var i = 0; i < _this.L2_Count_3; i++) {

                _this.L2_position_3.push(_this.L2_Count_pos_3[i]);
            }
            console.log(_this.L2_Count_3, "_this.L2_Count_3");
            console.log(_this.L2_position_3, "_this.L2_position_3");

            //layer 3..................................................................
            _this.L3_position_3 = [];

            _this.L3_Count_3 = 4 - (_this.L1_Count_3 + _this.L2_Count_3);//1 to 3
            _this.L3_Count_pos_3 = [9, 10, 11, 12];//9, 10, 11, 12
            _this.shuffleArray(_this.L3_Count_pos_3);
            for (var i = 0; i < _this.L3_Count_3; i++) {

                _this.L3_position_3.push(_this.L3_Count_pos_3[i]);
            }
            console.log(_this.L3_Count_3, "_this.L3_Count_3");
            console.log(_this.L3_position_3, "_this.L3_position_3");

            _this.positionArray_3 = [..._this.L1_position_3, ..._this.L2_position_3, ..._this.L3_position_3];
            console.log(_this.positionArray_3, "_this.positionArray_3");

            //checking the ambiguous options. and change the option.............................................................//


            var ambiguousArray = {
                1: [3, 6],
                2: [3, 8],
                3: [7, 10]
            };

            // Function to check if any element in positionArray_1 matches any value in ambiguousArray
            function doesAnyElementMatch(array1, object2) {
                for (var i = 0; i < array1.length; i++) {
                    var element = array1[i];
                    for (var key in object2) {
                        if (object2.hasOwnProperty(key)) {
                            var valueArray = object2[key];
                            if (valueArray.indexOf(element) !== -1) {
                                return true; // Element found in ambiguousArray
                            }
                        }
                    }
                }
                return false; // No match found
            }

            // Check if any element in _this.positionArray_1 matches any value in ambiguousArray.
            while (doesAnyElementMatch(_this.positionArray_3, ambiguousArray)) {
                // console.log("At least one element in _this.positionArray_1 matches a value in ambiguousArray.");
                //layer 1..................................................................
                _this.L1_position_3 = [];
                _this.L1_Group_3 = _this.add.group();

                _this.L1_Count_3 = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
                _this.L1_Count_pos_3 = [1, 2, 3, 4];//1, 2, 3, 4
                _this.shuffleArray(_this.L1_Count_pos_3);
                for (var i = 0; i < _this.L1_Count_3; i++) {
                    //taking the positions and pushing them to array
                    _this.L1_position_3.push(_this.L1_Count_pos_3[i]);
                }
                console.log(_this.L1_Count_3, "_this.L1_Count_3");
                console.log(_this.L1_position_3, "_this.L1_position_3");

                //layer 2..................................................................
                _this.L2_position_3 = [];
                _this.L2_Group_3 = _this.add.group();

                _this.L2_Count_3 = Math.floor(Math.random() * (4 - _this.L1_Count_3)) + 1;//1 to 3
                _this.L2_Count_pos_3 = [5, 6, 7, 8];//5, 6, 7, 8
                _this.shuffleArray(_this.L2_Count_pos_3);
                for (var i = 0; i < _this.L2_Count_3; i++) {

                    _this.L2_position_3.push(_this.L2_Count_pos_3[i]);
                }
                console.log(_this.L2_Count_3, "_this.L2_Count_3");
                console.log(_this.L2_position_3, "_this.L2_position_3");

                //layer 3..................................................................
                _this.L3_position_3 = [];
                _this.L3_Group_3 = _this.add.group();

                _this.L3_Count_3 = 4 - (_this.L1_Count_3 + _this.L2_Count_3);//1 to 3
                _this.L3_Count_pos_3 = [9, 10, 11, 12];//9, 10, 11, 12
                _this.shuffleArray(_this.L3_Count_pos_3);
                for (var i = 0; i < _this.L3_Count_3; i++) {

                    _this.L3_position_3.push(_this.L3_Count_pos_3[i]);
                }
                console.log(_this.L3_Count_3, "_this.L3_Count_3");
                console.log(_this.L3_position_3, "_this.L3_position_3");

                _this.positionArray_3 = [..._this.L1_position_3, ..._this.L2_position_3, ..._this.L3_position_3];
                console.log(_this.positionArray_3, "_this.positionArray_3");

            }

        }
        //   console.log(arraysAreEqual(array1, array3)); // Output: false

        //...........................gray box randomisation.......................//
        //for fron view position

        // Define the transformation rules
        var transformationRules = {
            1: [1, 3],
            2: [2, 4],
            3: [5, 7],
            4: [6, 8],
            5: [9, 11],
            6: [10, 12]
        };

        // Create a new Set to store transformed values
        var transformedSet = new Set();

        // Iterate over the original array and add transformed values to the Set
        _this.positionArray_3.forEach(function (element) {
            for (var key in transformationRules) {
                if (transformationRules[key].includes(element)) {
                    transformedSet.add(parseInt(key));
                    break;
                }
            }
        });

        // Convert the Set back to an array
        _this.frontView_3 = Array.from(transformedSet);
        console.log(_this.frontView_3, "_this.frontView_3 .............");

        //............................................................................//
        //for side view position

        // Define the transformation rules
        var transformationSides = {
            1: [1, 2],
            2: [3, 4],
            3: [5, 6],
            4: [7, 8],
            5: [9, 10],
            6: [11, 12]
        };

        // Create a new Set to store transformed values
        var transformedSet_side = new Set();

        // Iterate over the original array and add transformed values to the Set
        _this.positionArray_3.forEach(function (element) {
            for (var key in transformationSides) {
                if (transformationSides[key].includes(element)) {
                    transformedSet_side.add(parseInt(key));
                    break;
                }
            }
        });

        // Convert the Set back to an array
        _this.sideView_3 = Array.from(transformedSet_side);
        console.log(_this.sideView_3, "_this.sideView_3 .............");
        //............................................................................//
        //for top view position

        // Define the transformation rules
        var transformationtop = {
            1: [1, 5, 9],
            2: [2, 6, 10],
            3: [3, 7, 11],
            4: [4, 8, 12]
        };

        // Create a new Set to store transformed values
        var transformedSet_top = new Set();

        // Iterate over the original array and add transformed values to the Set
        _this.positionArray_3.forEach(function (element) {
            for (var key in transformationtop) {
                if (transformationtop[key].includes(element)) {
                    transformedSet_top.add(parseInt(key));
                    break;
                }
            }
        });

        // Convert the Set back to an array
        _this.topView_3 = Array.from(transformedSet_top);
        console.log(_this.topView_3, "_this.topView_3 .............");

    },
    forthOption_b_randomisation: function () {

        //randomizing the order of the 3 layer first
        //layer 1..................................................................
        _this.L1_position_4 = [];
        _this.L1_Group_4 = _this.add.group();

        _this.L1_Count_4 = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
        _this.L1_Count_pos_4 = [1, 2, 3, 4];//1, 2, 3, 4
        _this.shuffleArray(_this.L1_Count_pos_4);
        for (var i = 0; i < _this.L1_Count_4; i++) {
            //taking the positions and pushing them to array
            _this.L1_position_4.push(_this.L1_Count_pos_4[i]);
        }
        console.log(_this.L1_Count_4, "_this.L1_Count_4");
        console.log(_this.L1_position_4, "_this.L1_position_4");

        //layer 2..................................................................
        _this.L2_position_4 = [];
        _this.L2_Group_4 = _this.add.group();

        _this.L2_Count_4 = Math.floor(Math.random() * (4 - _this.L1_Count_4)) + 1;//1 to 3
        _this.L2_Count_pos_4 = [5, 6, 7, 8];//5, 6, 7, 8
        _this.shuffleArray(_this.L2_Count_pos_4);
        for (var i = 0; i < _this.L2_Count_4; i++) {

            _this.L2_position_4.push(_this.L2_Count_pos_4[i]);
        }
        console.log(_this.L2_Count_4, "_this.L2_Count_4");
        console.log(_this.L2_position_4, "_this.L2_position_4");

        //layer 3..................................................................
        _this.L3_position_4 = [];
        _this.L3_Group_4 = _this.add.group();

        _this.L3_Count_4 = 4 - (_this.L1_Count_4 + _this.L2_Count_4);//1 to 3
        _this.L3_Count_pos_4 = [9, 10, 11, 12];//9, 10, 11, 12
        _this.shuffleArray(_this.L3_Count_pos_4);
        for (var i = 0; i < _this.L3_Count_4; i++) {

            _this.L3_position_4.push(_this.L3_Count_pos_4[i]);
        }
        console.log(_this.L3_Count_4, "_this.L3_Count_4");
        console.log(_this.L3_position_4, "_this.L3_position_4");

        _this.positionArray_4 = [..._this.L1_position_4, ..._this.L2_position_4, ..._this.L3_position_4];
        console.log(_this.positionArray_4, "_this.positionArray_4");


        //checking the ambiguous options. and change the option.............................................................//


        var ambiguousArray = {
            1: [3, 6],
            2: [3, 8],
            3: [7, 10]
        };

        // Function to check if any element in positionArray_4 matches any value in ambiguousArray
        function doesAnyElementMatch(array1, object2) {
            for (var i = 0; i < array1.length; i++) {
                var element = array1[i];
                for (var key in object2) {
                    if (object2.hasOwnProperty(key)) {
                        var valueArray = object2[key];
                        if (valueArray.indexOf(element) !== -1) {
                            return true; // Element found in ambiguousArray
                        }
                    }
                }
            }
            return false; // No match found
        }

        // Check if any element in _this.positionArray_4 matches any value in ambiguousArray.
        while (doesAnyElementMatch(_this.positionArray_4, ambiguousArray)) {
            // console.log("At least one element in _this.positionArray_1 matches a value in ambiguousArray.");
            //layer 1..................................................................
            _this.L1_position_4 = [];
            _this.L1_Group_4 = _this.add.group();

            _this.L1_Count_4 = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
            _this.L1_Count_pos_4 = [1, 2, 3, 4];//1, 2, 3, 4
            _this.shuffleArray(_this.L1_Count_pos_4);
            for (var i = 0; i < _this.L1_Count_4; i++) {
                //taking the positions and pushing them to array
                _this.L1_position_4.push(_this.L1_Count_pos_4[i]);
            }
            console.log(_this.L1_Count_4, "_this.L1_Count_4");
            console.log(_this.L1_position_4, "_this.L1_position_4");

            //layer 2..................................................................
            _this.L2_position_4 = [];
            _this.L2_Group_4 = _this.add.group();

            _this.L2_Count_4 = Math.floor(Math.random() * (4 - _this.L1_Count_4)) + 1;//1 to 3
            _this.L2_Count_pos_4 = [5, 6, 7, 8];//5, 6, 7, 8
            _this.shuffleArray(_this.L2_Count_pos_4);
            for (var i = 0; i < _this.L2_Count_4; i++) {

                _this.L2_position_4.push(_this.L2_Count_pos_4[i]);
            }
            console.log(_this.L2_Count_4, "_this.L2_Count_4");
            console.log(_this.L2_position_4, "_this.L2_position_4");

            //layer 3..................................................................
            _this.L3_position_4 = [];
            _this.L3_Group_4 = _this.add.group();

            _this.L3_Count_4 = 4 - (_this.L1_Count_4 + _this.L2_Count_4);//1 to 3
            _this.L3_Count_pos_4 = [9, 10, 11, 12];//9, 10, 11, 12
            _this.shuffleArray(_this.L3_Count_pos_4);
            for (var i = 0; i < _this.L3_Count_4; i++) {

                _this.L3_position_4.push(_this.L3_Count_pos_4[i]);
            }
            console.log(_this.L3_Count_4, "_this.L3_Count_4");
            console.log(_this.L3_position_4, "_this.L3_position_4");

            _this.positionArray_4 = [..._this.L1_position_4, ..._this.L2_position_4, ..._this.L3_position_4];
            console.log(_this.positionArray_4, "_this.positionArray_4");

        }

        //.......................................................................//

        function arraysAreEqual(arr1, arr2) {
            // Sort the arrays in ascending order
            var sortedArr1 = arr1.sort();
            var sortedArr2 = arr2.sort();

            // Check if arrays have the same length
            if (sortedArr1.length !== sortedArr2.length) {
                return false;
            }

            // Iterate over the elements of the sorted arrays
            for (var i = 0; i < sortedArr1.length; i++) {
                // Compare the current elements
                if (sortedArr1[i] !== sortedArr2[i]) {
                    return false;
                }
            }

            // If all elements match, return true
            return true;
        }
        console.log(arraysAreEqual(_this.positionArray_1, _this.positionArray_4)); // Output: true
        console.log(arraysAreEqual(_this.positionArray_2, _this.positionArray_4));
        console.log(arraysAreEqual(_this.positionArray_3, _this.positionArray_4));
        while ((arraysAreEqual(_this.positionArray_1, _this.positionArray_4) == true) || (arraysAreEqual(_this.positionArray_2, _this.positionArray_4) == true) || (arraysAreEqual(_this.positionArray_3, _this.positionArray_4) == true)) {
            console.log("both are same array...................");
            //layer 1..................................................................
            _this.L1_position_4 = [];

            _this.L1_Count_4 = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
            _this.L1_Count_pos_4 = [1, 2, 3, 4];//1, 2, 3, 4
            _this.shuffleArray(_this.L1_Count_pos_4);
            for (var i = 0; i < _this.L1_Count_4; i++) {
                //taking the positions and pushing them to array
                _this.L1_position_4.push(_this.L1_Count_pos_4[i]);
            }
            console.log(_this.L1_Count_4, "_this.L1_Count_4");
            console.log(_this.L1_position_4, "_this.L1_position_4");

            //layer 2..................................................................
            _this.L2_position_4 = [];

            _this.L2_Count_4 = Math.floor(Math.random() * (4 - _this.L1_Count_4)) + 1;//1 to 3
            _this.L2_Count_pos_4 = [5, 6, 7, 8];//5, 6, 7, 8
            _this.shuffleArray(_this.L2_Count_pos_4);
            for (var i = 0; i < _this.L2_Count_4; i++) {

                _this.L2_position_4.push(_this.L2_Count_pos_4[i]);
            }
            console.log(_this.L2_Count_4, "_this.L2_Count_4");
            console.log(_this.L2_position_4, "_this.L2_position_4");

            //layer 3..................................................................
            _this.L3_position_4 = [];

            _this.L3_Count_4 = 4 - (_this.L1_Count_4 + _this.L2_Count_4);//1 to 3
            _this.L3_Count_pos_4 = [9, 10, 11, 12];//9, 10, 11, 12
            _this.shuffleArray(_this.L3_Count_pos_4);
            for (var i = 0; i < _this.L3_Count_4; i++) {

                _this.L3_position_4.push(_this.L3_Count_pos_4[i]);
            }
            console.log(_this.L3_Count_4, "_this.L3_Count_4");
            console.log(_this.L3_position_4, "_this.L3_position_4");

            _this.positionArray_4 = [..._this.L1_position_4, ..._this.L2_position_4, ..._this.L3_position_4];
            console.log(_this.positionArray_4, "_this.positionArray_4");

            //checking the ambiguous options. and change the option.............................................................//


            var ambiguousArray = {
                1: [3, 6],
                2: [3, 8],
                3: [7, 10]
            };

            // Function to check if any element in positionArray_4 matches any value in ambiguousArray
            function doesAnyElementMatch(array1, object2) {
                for (var i = 0; i < array1.length; i++) {
                    var element = array1[i];
                    for (var key in object2) {
                        if (object2.hasOwnProperty(key)) {
                            var valueArray = object2[key];
                            if (valueArray.indexOf(element) !== -1) {
                                return true; // Element found in ambiguousArray
                            }
                        }
                    }
                }
                return false; // No match found
            }

            // Check if any element in _this.positionArray_4 matches any value in ambiguousArray.
            while (doesAnyElementMatch(_this.positionArray_4, ambiguousArray)) {
                // console.log("At least one element in _this.positionArray_1 matches a value in ambiguousArray.");
                //layer 1..................................................................
                _this.L1_position_4 = [];
                _this.L1_Group_4 = _this.add.group();

                _this.L1_Count_4 = Math.floor(Math.random() * 3) + 1;//1 to 3//desiding the count
                _this.L1_Count_pos_4 = [1, 2, 3, 4];//1, 2, 3, 4
                _this.shuffleArray(_this.L1_Count_pos_4);
                for (var i = 0; i < _this.L1_Count_4; i++) {
                    //taking the positions and pushing them to array
                    _this.L1_position_4.push(_this.L1_Count_pos_4[i]);
                }
                console.log(_this.L1_Count_4, "_this.L1_Count_4");
                console.log(_this.L1_position_4, "_this.L1_position_4");

                //layer 2..................................................................
                _this.L2_position_4 = [];
                _this.L2_Group_4 = _this.add.group();

                _this.L2_Count_4 = Math.floor(Math.random() * (4 - _this.L1_Count_4)) + 1;//1 to 3
                _this.L2_Count_pos_4 = [5, 6, 7, 8];//5, 6, 7, 8
                _this.shuffleArray(_this.L2_Count_pos_4);
                for (var i = 0; i < _this.L2_Count_4; i++) {

                    _this.L2_position_4.push(_this.L2_Count_pos_4[i]);
                }
                console.log(_this.L2_Count_4, "_this.L2_Count_4");
                console.log(_this.L2_position_4, "_this.L2_position_4");

                //layer 3..................................................................
                _this.L3_position_4 = [];
                _this.L3_Group_4 = _this.add.group();

                _this.L3_Count_4 = 4 - (_this.L1_Count_4 + _this.L2_Count_4);//1 to 3
                _this.L3_Count_pos_4 = [9, 10, 11, 12];//9, 10, 11, 12
                _this.shuffleArray(_this.L3_Count_pos_4);
                for (var i = 0; i < _this.L3_Count_4; i++) {

                    _this.L3_position_4.push(_this.L3_Count_pos_4[i]);
                }
                console.log(_this.L3_Count_4, "_this.L3_Count_4");
                console.log(_this.L3_position_4, "_this.L3_position_4");

                _this.positionArray_4 = [..._this.L1_position_4, ..._this.L2_position_4, ..._this.L3_position_4];
                console.log(_this.positionArray_4, "_this.positionArray_4");

            }

        }
        //   console.log(arraysAreEqual(array1, array3)); // Output: false

        //...........................gray box randomisation.......................//
        //for fron view position

        // Define the transformation rules
        var transformationRules = {
            1: [1, 3],
            2: [2, 4],
            3: [5, 7],
            4: [6, 8],
            5: [9, 11],
            6: [10, 12]
        };

        // Create a new Set to store transformed values
        var transformedSet = new Set();

        // Iterate over the original array and add transformed values to the Set
        _this.positionArray_4.forEach(function (element) {
            for (var key in transformationRules) {
                if (transformationRules[key].includes(element)) {
                    transformedSet.add(parseInt(key));
                    break;
                }
            }
        });

        // Convert the Set back to an array
        _this.frontView_4 = Array.from(transformedSet);
        console.log(_this.frontView_4, "_this.frontView_4 .............");

        //............................................................................//
        //for side view position

        // Define the transformation rules
        var transformationSides = {
            1: [1, 2],
            2: [3, 4],
            3: [5, 6],
            4: [7, 8],
            5: [9, 10],
            6: [11, 12]
        };

        // Create a new Set to store transformed values
        var transformedSet_side = new Set();

        // Iterate over the original array and add transformed values to the Set
        _this.positionArray_4.forEach(function (element) {
            for (var key in transformationSides) {
                if (transformationSides[key].includes(element)) {
                    transformedSet_side.add(parseInt(key));
                    break;
                }
            }
        });

        // Convert the Set back to an array
        _this.sideView_4 = Array.from(transformedSet_side);
        console.log(_this.sideView_4, "_this.sideView_4 .............");
        //............................................................................//
        //for top view position

        // Define the transformation rules
        var transformationtop = {
            1: [1, 5, 9],
            2: [2, 6, 10],
            3: [3, 7, 11],
            4: [4, 8, 12]
        };

        // Create a new Set to store transformed values
        var transformedSet_top = new Set();

        // Iterate over the original array and add transformed values to the Set
        _this.positionArray_4.forEach(function (element) {
            for (var key in transformationtop) {
                if (transformationtop[key].includes(element)) {
                    transformedSet_top.add(parseInt(key));
                    break;
                }
            }
        });

        // Convert the Set back to an array
        _this.topView_4 = Array.from(transformedSet_top);
        console.log(_this.topView_4, "_this.topView_4 .............");
    },

    //this function is used for showing the question.
    InitialScreen: function () {

        //for api
        //edited for baseurl apk
        _this.sceneCount++;
        _this.noofAttempts = 0;
        //....

        if (_this.count1 < 3) {
            _this.Question_flag = 0;
            _this.panel_1 = _this.add.image(30, 70, 'panle_1');
            _this.panel_1.scale.setTo(1.1, 1.1);

            _this.tick = _this.add.sprite(830, 400, 'TickBtn');

            _this.viewOrder = [1, 2, 3];//1-top view, 2- side view, 3- front view
            _this.shuffleArray(_this.viewOrder);
            // // console.log(_this.viewOrder, "1-top view, 2- side view, 3- front view");

            _this.tick.inputEnabled = true;
            _this.tick.input.useHandCursor = true;
            _this.tick.events.onInputDown.add(_this.tickValidation, _this);

            if (_this.viewOrder[0] == 1) {
                _this.pauseVoice();
                _this.Ask_Question1.play();
            }
            if (_this.viewOrder[0] == 2) {
                _this.pauseVoice();
                _this.Ask_Question2.play();
            }
            if (_this.viewOrder[0] == 3) {
                _this.pauseVoice();
                _this.Ask_Question3.play();
            }

            _this.optionOrder = [1, 2, 3, 4];//1,2,3,4//box option randomizing
            _this.shuffleArray(_this.optionOrder);
            // console.log(_this.optionOrder, "option order..");

            switch (_this.optionObjectOrder[_this.count1]) {
                case 0://canned
                    _this.panelObject = _this.add.sprite(310, 170, 'canned');
                    _this.panelObject.scale.setTo(1, 1.1);
                    break;
                case 1://suitcase
                    _this.panelObject = _this.add.sprite(230, 200, 'suitcase');
                    break;
                case 2://bus
                    _this.panelObject = _this.add.sprite(230, 120, 'bus');
                    _this.panelObject.scale.setTo(1, 1.1);
                    break;
                case 3://samoosa
                    _this.panelObject = _this.add.sprite(250, 150, 'samoosa');
                    break;
                case 4://coriour_box
                    _this.panelObject = _this.add.sprite(250, 180, 'coriour_box');
                    break;
                case 5://bread
                    _this.panelObject = _this.add.sprite(280, 170, 'bread');
                    break;
                case 6://cone_ice
                    _this.panelObject = _this.add.sprite(290, 120, 'cone_ice');
                    break;
                case 7://cone_sign
                    _this.panelObject = _this.add.sprite(290, 120, 'cone_sign');
                    break;
                case 8://candle
                    _this.panelObject = _this.add.sprite(300, 120, 'candle');
                    _this.panelObject.scale.setTo(1, 1.2);
                    break;
                case 9://cube
                    _this.panelObject = _this.add.sprite(300, 180, 'cube');
                    break;
                case 10://dice
                    _this.panelObject = _this.add.sprite(300, 180, 'dice');
                    break;
                case 11://gift_box
                    _this.panelObject = _this.add.sprite(300, 180, 'gift_box');
                    _this.panelObject.scale.setTo(1, 1.1);
                    break;
                case 12://pastry
                    _this.panelObject = _this.add.sprite(290, 180, 'pastry');
                    break;
                case 13://cake
                    _this.panelObject = _this.add.sprite(320, 160, 'cake');
                    break;
                case 14://sandwich
                    _this.panelObject = _this.add.sprite(250, 190, 'sandwich');
                    break;
                case 15://wood_pice
                    _this.panelObject = _this.add.sprite(240, 180, 'wood_pice');
                    break;
                case 16://drum
                    _this.panelObject = _this.add.sprite(300, 200, 'drum');
                    break;

            }

            _this.firstOption();
            _this.secondOptiont();
            _this.thirdOption();
            _this.forthOption();
        }
        else {

            _this.front_viewFlag = 0;
            _this.side_viewFlag = 0;
            _this.top_viewFlag = 0;

            _this.firstBox = 0;
            _this.secondBox = 0;
            _this.thirdBox = 0;
            _this.fourthBox = 0;

            _this.frontSide_Group = _this.add.group();
            _this.Side_Group = _this.add.group();
            _this.topSide_Group = _this.add.group();

            // _this.b_randomisation();
            _this.firstOption_b_randomisation();
            _this.secondOption_b_randomisation();
            _this.thirdOption_b_randomisation();
            _this.forthOption_b_randomisation();
            //......animation.......//
            if (_this.count1 == 3) {
                _this.hintBtn.inputEnabled = false;
                _this.Question_flag = 1;
                _this.speakerbtn.inputEnabled = false;
                _this.panel = _this.add.image(50, 75, 'box_panel');

                // _this.Ask_Question4.play();
                // _this.Ask_Question4 = _this.playAudio(window.baseUrl +'questionSounds/GMSS-01-G8/ENG/V4.mp3');
                if (_this.languageSelected == "English")
                    _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMSS-01-G8/English/GMSS_01_G8_d1.mp3');
                else if (_this.languageSelected == "Hindi")
                    _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMSS-01-G8/Hindi/GMSS_01_G8_d1.mp3');
                else if (_this.languageSelected == "Kannada")
                    _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMSS-01-G8/Kannada/GMSS_01_G8_d1.mp3');
                else if (_this.languageSelected == "Marathi")
                    _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMSS-01-G8/Marathi/GMSS_01_G8_d1.mp3');
                else if (_this.languageSelected == "Odiya")
                    _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMSS-01-G8/Odiya/GMSS_01_G8_d1.mp3');
                else if (_this.languageSelected == "Tamil")
                    _this.Ask_Question4 = _this.playAudio(window.baseUrl + 'questionSounds/GMSS-01-G8/Tamil/GMSS_01_G8_d1.mp3');

                _this.square_1 = _this.add.image(170, 200, 'square_box_1');
                _this.arrow_1 = _this.add.image(220, 130, 'arrow_1');

                _this.time.events.add(2500, function () {
                    _this.square_1.destroy();
                    _this.arrow_1.destroy();
                    _this.square_2 = _this.add.image(170, 200, 'square_box_2');
                    _this.arrow_2 = _this.add.image(290, 270, 'arrow_2');
                });
                _this.time.events.add(5000, function () {
                    _this.square_2.destroy();
                    _this.arrow_2.destroy();
                    _this.square_3 = _this.add.image(170, 200, 'square_box_3');
                    _this.arrow_3 = _this.add.image(90, 270, 'arrow_3');
                });
                _this.time.events.add(9000, function () {
                    _this.square_3.destroy();
                    _this.arrow_3.destroy();
                    _this.panel.destroy();
                    _this.grayDisplay();
                    _this.Question_flag = 2;
                    _this.speakerbtn.inputEnabled = true;
                    _this.cubeTween();
                    // _this.hintBtn.inputEnabled = true;
                });
            }
            else {
                _this.Question_flag = 2;
                _this.grayDisplay();
            }

        }

    },
    //tweening cube after demo.
    cubeTween: function () {
        _this.tweenCubeGrp = _this.add.group();
        if (_this.front_viewFlag == 1) {
            //for showing side cube with arrow.
            Cube = _this.add.image(170, 200, 'square_box_3');//front
            Arrow = _this.add.image(90, 270, 'arrow_3');

        }
        if (_this.side_viewFlag == 1) {
            //for showing side cube with arrow.
            Cube = _this.add.image(170, 200, 'square_box_2');//side
            Arrow = _this.add.image(290, 270, 'arrow_2');

        }
        if (_this.top_viewFlag == 1) {
            //for showing side cube with arrow.
            Cube = _this.add.image(170, 200, 'square_box_1');//top
            Arrow = _this.add.image(220, 130, 'arrow_1');
        }

        _this.tweenCubeGrp.addChild(Cube);
        _this.tweenCubeGrp.addChild(Arrow);

        var tween = _this.add.tween(_this.tweenCubeGrp.scale).to({ x: 0.4, y: 0.4 }, 1000, Phaser.Easing.Linear.None, true);// tween for scale increasing
        tween.start();

        tweenCube = _this.add.tween(_this.tweenCubeGrp);
        tweenCube.to({ x: 810, y: 340 }, 1000, 'Linear', true, 0);
        tweenCube.start();
        tweenCube.onComplete.add(function () {
            _this.tweenCubeGrp.destroy();
        }, _this);
    },

    grayDisplay: function () {
        _this.panel_1 = _this.add.image(460, 75, 'box_panel');

        _this.tick = _this.add.sprite(870, 75, 'TickBtn');

        _this.optionOrder = [1, 2, 3, 4];//1,2,3,4//box option randomizing
        _this.shuffleArray(_this.optionOrder);
        console.log(_this.optionOrder, "option order..");

        switch (_this.optionOrder[0]) {
            case 1:
                _this.firstOption_part_b();
                break;
            case 2:
                _this.secondOption_part_b();
                break;
            case 3:
                _this.thirdOption_part_b();
                break;
            case 4:
                _this.forthOption_part_b();
                break;

        }
        switch (_this.optionOrder[1]) {
            case 1:
                _this.time.events.add(1600, function () {
                    _this.firstOption_part_b();
                });
                break;
            case 2:
                _this.time.events.add(1600, function () {
                    _this.secondOption_part_b();
                });
                break;
            case 3:
                _this.time.events.add(1600, function () {
                    _this.thirdOption_part_b();
                });
                break;
            case 4:
                _this.time.events.add(1600, function () {
                    _this.forthOption_part_b();
                });
                break;

        }
        switch (_this.optionOrder[2]) {
            case 1:
                _this.time.events.add(3200, function () {
                    _this.firstOption_part_b();
                });
                break;
            case 2:
                _this.time.events.add(3200, function () {
                    _this.secondOption_part_b();
                });
                break;
            case 3:
                _this.time.events.add(3200, function () {
                    _this.thirdOption_part_b();
                });
                break;
            case 4:
                _this.time.events.add(3200, function () {
                    _this.forthOption_part_b();
                });
                break;
        }
        switch (_this.optionOrder[3]) {
            case 1:
                _this.time.events.add(4800, function () {
                    _this.firstOption_part_b();
                });
                break;
            case 2:
                _this.time.events.add(4800, function () {
                    _this.secondOption_part_b();
                });
                break;
            case 3:
                _this.time.events.add(4800, function () {
                    _this.thirdOption_part_b();
                });
                break;
            case 4:
                _this.time.events.add(4800, function () {
                    _this.forthOption_part_b();
                });
                break;
        }

        //gray box deciding..........
        function arraysAreEqual(arr1, arr2) {
            // Sort the arrays in ascending order
            var sortedArr1 = arr1.sort();
            var sortedArr2 = arr2.sort();

            // Check if arrays have the same length
            if (sortedArr1.length !== sortedArr2.length) {
                return false;
            }

            // Iterate over the elements of the sorted arrays
            for (var i = 0; i < sortedArr1.length; i++) {
                // Compare the current elements
                if (sortedArr1[i] !== sortedArr2[i]) {
                    return false;
                }
            }

            // If all elements match, return true
            return true;
        }
        // console.log(arraysAreEqual(_this.frontView_1, _this.frontView_2) || arraysAreEqual(_this.frontView_1, _this.frontView_3) || arraysAreEqual(_this.frontView_1, _this.frontView_4), "front view array are same or not................"); // Output: true
        // console.log(arraysAreEqual(_this.sideView_1, _this.sideView_2) || arraysAreEqual(_this.sideView_1, _this.sideView_3) || arraysAreEqual(_this.sideView_1, _this.sideView_4), "side view array are same or not................");
        // console.log(arraysAreEqual(_this.topView_1, _this.topView_2) || arraysAreEqual(_this.topView_1, _this.topView_3) || arraysAreEqual(_this.topView_1, _this.topView_4), "top view array are same or not................");

        var frontViewSame = arraysAreEqual(_this.frontView_1, _this.frontView_2) || arraysAreEqual(_this.frontView_1, _this.frontView_3) || arraysAreEqual(_this.frontView_1, _this.frontView_4);
        var sideViewSame = arraysAreEqual(_this.sideView_1, _this.sideView_2) || arraysAreEqual(_this.sideView_1, _this.sideView_3) || arraysAreEqual(_this.sideView_1, _this.sideView_4);
        var topViewSame = arraysAreEqual(_this.topView_1, _this.topView_2) || arraysAreEqual(_this.topView_1, _this.topView_3) || arraysAreEqual(_this.topView_1, _this.topView_4);

        var frontViewSame_2 = arraysAreEqual(_this.frontView_2, _this.frontView_1) || arraysAreEqual(_this.frontView_2, _this.frontView_3) || arraysAreEqual(_this.frontView_2, _this.frontView_4);
        var sideViewSame_2 = arraysAreEqual(_this.sideView_2, _this.sideView_1) || arraysAreEqual(_this.sideView_2, _this.sideView_3) || arraysAreEqual(_this.sideView_2, _this.sideView_4);
        var topViewSame_2 = arraysAreEqual(_this.topView_2, _this.topView_1) || arraysAreEqual(_this.topView_2, _this.topView_3) || arraysAreEqual(_this.topView_2, _this.topView_4);

        var frontViewSame_3 = arraysAreEqual(_this.frontView_3, _this.frontView_1) || arraysAreEqual(_this.frontView_2, _this.frontView_3) || arraysAreEqual(_this.frontView_3, _this.frontView_4);
        var sideViewSame_3 = arraysAreEqual(_this.sideView_3, _this.sideView_1) || arraysAreEqual(_this.sideView_2, _this.sideView_3) || arraysAreEqual(_this.sideView_3, _this.sideView_4);
        var topViewSame_3 = arraysAreEqual(_this.topView_3, _this.topView_1) || arraysAreEqual(_this.topView_2, _this.topView_3) || arraysAreEqual(_this.topView_3, _this.topView_4);

        var frontViewSame_4 = arraysAreEqual(_this.frontView_4, _this.frontView_1) || arraysAreEqual(_this.frontView_2, _this.frontView_4) || arraysAreEqual(_this.frontView_3, _this.frontView_4);
        var sideViewSame_4 = arraysAreEqual(_this.sideView_4, _this.sideView_1) || arraysAreEqual(_this.sideView_2, _this.sideView_4) || arraysAreEqual(_this.sideView_3, _this.sideView_4);
        var topViewSame_4 = arraysAreEqual(_this.topView_4, _this.topView_1) || arraysAreEqual(_this.topView_2, _this.topView_4) || arraysAreEqual(_this.topView_3, _this.topView_4);

        if (!frontViewSame && !sideViewSame && !topViewSame) {//all are false
            //frontViewSame && sideViewSame && topViewSame //in this all are true
            //for first box
            _this.firstBox = 1;
            console.log("all are different for first box......");
            _this.order_4_view = [1, 2, 3];
            _this.shuffleArray(_this.order_4_view);
            if (_this.order_4_view[0] == 1) _this.front_viewFlag = 1;
            if (_this.order_4_view[0] == 2) _this.side_viewFlag = 1;
            if (_this.order_4_view[0] == 3) _this.top_viewFlag = 1;
        }
        else if (!frontViewSame_2 && !sideViewSame_2 && !topViewSame_2) {
            //for second box
            _this.secondBox = 1;
            console.log("all are different  for second box......");
            _this.order_4_view = [1, 2, 3];
            _this.shuffleArray(_this.order_4_view);
            if (_this.order_4_view[0] == 1) _this.front_viewFlag = 1;
            if (_this.order_4_view[0] == 2) _this.side_viewFlag = 1;
            if (_this.order_4_view[0] == 3) _this.top_viewFlag = 1;
        }
        else if (!frontViewSame_3 && !sideViewSame_3 && !topViewSame_3) {
            //for third box
            _this.thirdBox = 1;
            console.log("all are different  for third box......");
            _this.order_4_view = [1, 2, 3];
            _this.shuffleArray(_this.order_4_view);
            if (_this.order_4_view[0] == 1) _this.front_viewFlag = 1;
            if (_this.order_4_view[0] == 2) _this.side_viewFlag = 1;
            if (_this.order_4_view[0] == 3) _this.top_viewFlag = 1;
        }
        else if (!frontViewSame_4 && !sideViewSame_4 && !topViewSame_4) {
            //for forth box
            _this.fourthBox = 1;
            console.log("all are different  for forth box......");
            _this.order_4_view = [1, 2, 3];
            _this.shuffleArray(_this.order_4_view);
            if (_this.order_4_view[0] == 1) _this.front_viewFlag = 1;
            if (_this.order_4_view[0] == 2) _this.side_viewFlag = 1;
            if (_this.order_4_view[0] == 3) _this.top_viewFlag = 1;
        }
        else {
            if (frontViewSame == false) {
                _this.front_viewFlag = 1;
                _this.firstBox = 1;
            }
            else if (sideViewSame == false) {
                _this.firstBox = 1;
                _this.side_viewFlag = 1;
            }
            else if (topViewSame == false) {
                _this.firstBox = 1;
                _this.top_viewFlag = 1;
            }
            else if (frontViewSame_2 == false) {
                _this.secondBox = 1;
                _this.front_viewFlag = 1;
            }
            else if (sideViewSame_2 == false) {
                _this.secondBox = 1;
                _this.side_viewFlag = 1;
            }
            else if (topViewSame_2 == false) {
                _this.secondBox = 1;
                _this.top_viewFlag = 1;
            }
            else if (frontViewSame_3 == false) {
                _this.thirdBox = 1;
                _this.front_viewFlag = 1;
            }
            else if (sideViewSame_3 == false) {
                _this.thirdBox = 1;
                _this.side_viewFlag = 1;
            }
            else if (topViewSame_3 == false) {
                _this.thirdBox = 1;
                _this.top_viewFlag = 1;
            }
            else if (frontViewSame_4 == false) {
                _this.fourthBox = 1;
                _this.front_viewFlag = 1;
            }
            else if (sideViewSame_4 == false) {
                _this.fourthBox = 1;
                _this.side_viewFlag = 1;
            }
            else if (topViewSame_4 == false) {
                _this.fourthBox = 1;
                _this.top_viewFlag = 1;
            }
            else console.log("no one.....");

        }

        if (_this.front_viewFlag == 1) {
            console.log("................front............");
            viewsarr = [];
            _this.Ask_Question7.play();
            if (_this.firstBox == 1) {
                for (var j = 0; j < _this.frontView_1.length; j++) {
                    gray = _this.add.image(_this.frontSide_x[_this.frontView_1[j] - 1], _this.frontSide_y[_this.frontView_1[j] - 1], 'greyShade')
                    viewsarr.push(gray);
                    _this.frontSide_Group.addChild(gray);
                }
                _this.panel_1.addChild(_this.frontSide_Group);
            }
            if (_this.secondBox == 1) {
                for (var j = 0; j < _this.frontView_2.length; j++) {
                    gray = _this.add.image(_this.frontSide_x[_this.frontView_2[j] - 1], _this.frontSide_y[_this.frontView_2[j] - 1], 'greyShade')
                    viewsarr.push(gray);
                    _this.frontSide_Group.addChild(gray);
                }
                _this.panel_1.addChild(_this.frontSide_Group);
            }
            if (_this.thirdBox == 1) {
                for (var j = 0; j < _this.frontView_3.length; j++) {
                    gray = _this.add.image(_this.frontSide_x[_this.frontView_3[j] - 1], _this.frontSide_y[_this.frontView_3[j] - 1], 'greyShade')
                    viewsarr.push(gray);
                    _this.frontSide_Group.addChild(gray);
                }
                _this.panel_1.addChild(_this.frontSide_Group);
            }
            if (_this.fourthBox == 1) {
                for (var j = 0; j < _this.frontView_4.length; j++) {
                    gray = _this.add.image(_this.frontSide_x[_this.frontView_4[j] - 1], _this.frontSide_y[_this.frontView_4[j] - 1], 'greyShade')
                    viewsarr.push(gray);
                    _this.frontSide_Group.addChild(gray);
                }
                _this.panel_1.addChild(_this.frontSide_Group);
            }

        }

        if (_this.side_viewFlag == 1) {
            console.log("................side............");
            viewsarr = [];
            _this.Ask_Question6.play();
            if (_this.firstBox == 1) {
                for (var j = 0; j < _this.sideView_1.length; j++) {
                    gray = _this.add.image(_this.frontSide_x[_this.sideView_1[j] - 1], _this.frontSide_y[_this.sideView_1[j] - 1], 'greyShade')
                    viewsarr.push(gray);
                    _this.Side_Group.addChild(gray);
                }
                _this.panel_1.addChild(_this.Side_Group);
            }
            if (_this.secondBox == 1) {
                for (var j = 0; j < _this.sideView_2.length; j++) {
                    gray = _this.add.image(_this.frontSide_x[_this.sideView_2[j] - 1], _this.frontSide_y[_this.sideView_2[j] - 1], 'greyShade')
                    viewsarr.push(gray);
                    _this.Side_Group.addChild(gray);
                }
                _this.panel_1.addChild(_this.Side_Group);
            }
            if (_this.thirdBox == 1) {
                for (var j = 0; j < _this.sideView_3.length; j++) {
                    gray = _this.add.image(_this.frontSide_x[_this.sideView_3[j] - 1], _this.frontSide_y[_this.sideView_3[j] - 1], 'greyShade')
                    viewsarr.push(gray);
                    _this.Side_Group.addChild(gray);
                }
                _this.panel_1.addChild(_this.Side_Group);
            }
            if (_this.fourthBox == 1) {
                for (var j = 0; j < _this.sideView_4.length; j++) {
                    gray = _this.add.image(_this.frontSide_x[_this.sideView_4[j] - 1], _this.frontSide_y[_this.sideView_4[j] - 1], 'greyShade')
                    viewsarr.push(gray);
                    _this.Side_Group.addChild(gray);
                }
                _this.panel_1.addChild(_this.Side_Group);
            }


        }

        if (_this.top_viewFlag == 1) {
            console.log("................top............");
            viewsarr = [];
            _this.Ask_Question5.play();
            if (_this.firstBox == 1) {
                for (var j = 0; j < _this.topView_1.length; j++) {
                    gray = _this.add.image(_this.topSide_x[_this.topView_1[j] - 1], _this.topSide_y[_this.topView_1[j] - 1], 'greyShade')
                    viewsarr.push(gray);
                    _this.topSide_Group.addChild(gray);
                }
                _this.panel_1.addChild(_this.topSide_Group);
            }
            if (_this.secondBox == 1) {
                for (var j = 0; j < _this.topView_2.length; j++) {
                    gray = _this.add.image(_this.topSide_x[_this.topView_2[j] - 1], _this.topSide_y[_this.topView_2[j] - 1], 'greyShade')
                    viewsarr.push(gray);
                    _this.topSide_Group.addChild(gray);
                }
                _this.panel_1.addChild(_this.topSide_Group);
            }
            if (_this.thirdBox == 1) {
                for (var j = 0; j < _this.topView_3.length; j++) {
                    gray = _this.add.image(_this.topSide_x[_this.topView_3[j] - 1], _this.topSide_y[_this.topView_3[j] - 1], 'greyShade')
                    viewsarr.push(gray);
                    _this.topSide_Group.addChild(gray);
                }
                _this.panel_1.addChild(_this.topSide_Group);
            }
            if (_this.fourthBox == 1) {
                for (var j = 0; j < _this.topView_4.length; j++) {
                    gray = _this.add.image(_this.topSide_x[_this.topView_4[j] - 1], _this.topSide_y[_this.topView_4[j] - 1], 'greyShade')
                    viewsarr.push(gray);
                    _this.topSide_Group.addChild(gray);
                }
                _this.panel_1.addChild(_this.topSide_Group);
            }


        }



        if (_this.count1 == 3) {
            _this.time.events.add(1000, function () {
                _this.sideCubeShow();
            });
        }
        else {
            _this.sideCubeShow();
        }

        _this.time.events.add(6400, function () {
            // if (_this.count1 == 3)
            //     _this.dragtoBottomTween();
            _this.tick.inputEnabled = true;
            _this.tick.input.useHandCursor = true;
            _this.tick.events.onInputDown.add(_this.tickValidation_partb, _this);
        });
    },

    sideCubeShow: function () {
        _this.hintBtn.alpha = 1;
        _this.hintBtn.inputEnabled = true;
        if (_this.front_viewFlag == 1) {
            //for showing side cube with arrow.
            Cube = _this.add.image(875, 420, 'square_box_3');//front
            Arrow = _this.add.image(858, 455, 'arrow_3');

        }
        if (_this.side_viewFlag == 1) {
            //for showing side cube with arrow.
            Cube = _this.add.image(875, 420, 'square_box_2');//side
            Arrow = _this.add.image(920, 455, 'arrow_2');

        }
        if (_this.top_viewFlag == 1) {
            //for showing side cube with arrow.
            Cube = _this.add.image(875, 420, 'square_box_1');//top
            Arrow = _this.add.image(897, 400, 'arrow_1');
        }
        Cube.scale.setTo(0.4);
        Arrow.scale.setTo(0.27);

    },


    //part b option part
    firstOption_part_b: function () {
        console.log("first option");
        if (_this.optionOrder[0] == 1) {
            _this.Box2_1 = _this.add.sprite(_this.boxPosition_x_b[0], _this.boxPosition_y_b[0], 'BoxFrame');
            _this.Box2_1.frame = 0;
        }
        else if (_this.optionOrder[1] == 1) {
            _this.Box2_1 = _this.add.sprite(_this.boxPosition_x_b[1], _this.boxPosition_y_b[1], 'BoxFrame');
            _this.Box2_1.frame = 0;
        }
        else if (_this.optionOrder[2] == 1) {
            _this.Box2_1 = _this.add.sprite(_this.boxPosition_x_b[2], _this.boxPosition_y_b[2], 'BoxFrame');
            _this.Box2_1.frame = 0;
        }
        else if (_this.optionOrder[3] == 1) {
            _this.Box2_1 = _this.add.sprite(_this.boxPosition_x_b[3], _this.boxPosition_y_b[3], 'BoxFrame');
            _this.Box2_1.frame = 0;
        }
        else {
            console.log(".....");
        }

        //....................arranging the cubes as disired ....................//
        //layer 1..................................................................
        // Desired order
        var desiredOrder = [3, 1, 4, 2];//3, 1, 4, 2
        _this.framechange.play();
        // Rearrange the array
        var rearrangedArray = [];
        for (var i = 0; i < desiredOrder.length; i++) {
            var value = desiredOrder[i];
            if (_this.L1_position.includes(value)) {
                rearrangedArray.push(value);
            }
        }

        // Output the rearranged array
        console.log(rearrangedArray, "rearranged");

        cubessarr = [];
        for (var j = 0; j < _this.L1_Count; j++) {
            cube = _this.add.image(_this.Cube_Positions_x[rearrangedArray[j] - 1], _this.Cube_Positions_y[rearrangedArray[j] - 1], 'colorCube')
            cube.scale.setTo(0.4, 0.4);
            cubessarr.push(cube);
            _this.L1_Group.addChild(cube);
            // _this.L1_Group.getChildAt(_this.L1_Group.length - 1).inputEnabled = true;
            // _this.L1_Group.getChildAt(_this.L1_Group.length - 1).input.useHandCursor = true;
            // _this.L1_Group.getChildAt(_this.L1_Group.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
        }
        _this.Box2_1.addChild(_this.L1_Group);


        //layer2...............................................................................
        _this.time.events.add(1000, function () {
            _this.framechange.play();
            // Desired order
            var desiredOrder_2 = [7, 5, 8, 6];//7, 5, 8, 6

            // Rearrange the array
            var rearrangedArray_2 = [];
            for (var i = 0; i < desiredOrder_2.length; i++) {
                var value = desiredOrder_2[i];
                if (_this.L2_position.includes(value)) {
                    rearrangedArray_2.push(value);
                }
            }

            // Output the rearranged array
            console.log(rearrangedArray_2, "rearranged..");

            cubessarr_2 = [];
            for (var j = 0; j < _this.L2_Count; j++) {
                cube_2 = _this.add.image(_this.Cube_Positions_x[rearrangedArray_2[j] - 1], _this.Cube_Positions_y[rearrangedArray_2[j] - 1], 'colorCube')
                cube_2.scale.setTo(0.4, 0.4);
                cubessarr_2.push(cube_2);
                _this.L2_Group.addChild(cube_2);
                // _this.L2_Group.getChildAt(_this.L2_Group.length - 1).inputEnabled = true;
                // _this.L2_Group.getChildAt(_this.L2_Group.length - 1).input.useHandCursor = true;
                // _this.L2_Group.getChildAt(_this.L2_Group.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
            }

            _this.Box2_1.addChild(_this.L2_Group);

        });

        //layer3.....................................................................................
        //L3_Count = 4 – (L1_Count+ L2_Count). 
        _this.time.events.add(1500, function () {
            _this.framechange.play();
            // Desired order
            var desiredOrder_3 = [11, 9, 12, 10];//11, 9, 12, 10

            // Rearrange the array
            var rearrangedArray_3 = [];
            for (var i = 0; i < desiredOrder_3.length; i++) {
                var value = desiredOrder_3[i];
                if (_this.L3_position.includes(value)) {
                    rearrangedArray_3.push(value);
                }
            }

            // Output the rearranged array
            console.log(rearrangedArray_3, "rearranged..");

            cubessarr_3 = [];
            for (var j = 0; j < _this.L3_Count; j++) {
                cube_3 = _this.add.image(_this.Cube_Positions_x[rearrangedArray_3[j] - 1], _this.Cube_Positions_y[rearrangedArray_3[j] - 1], 'colorCube')
                cube_3.scale.setTo(0.4, 0.4);
                cubessarr_3.push(cube_3);
                _this.L3_Group.addChild(cube_3);
                // _this.L3_Group.getChildAt(_this.L3_Group.length - 1).inputEnabled = true;
                // _this.L3_Group.getChildAt(_this.L3_Group.length - 1).input.useHandCursor = true;
                // _this.L3_Group.getChildAt(_this.L3_Group.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
            }
            _this.Box2_1.addChild(_this.L3_Group);
        });

        // _this.time.events.add(6400, function () {
        //     _this.Box2_1.inputEnabled = true;
        //     _this.Box2_1.input.useHandCursor = true;
        //     _this.Box2_1.events.onInputDown.add(_this.changeFrame1, _this);
        // });
        switch (_this.optionOrder[0]) {
            case 1:
                _this.time.events.add(6400, function () {
                    _this.Box2_1.inputEnabled = true;
                    _this.Box2_1.input.useHandCursor = true;
                    _this.Box2_1.events.onInputDown.add(_this.changeFrame1, _this);
                });
                break;
        }
        switch (_this.optionOrder[1]) {
            case 1:
                _this.time.events.add(4800, function () {
                    _this.Box2_1.inputEnabled = true;
                    _this.Box2_1.input.useHandCursor = true;
                    _this.Box2_1.events.onInputDown.add(_this.changeFrame1, _this);
                });
                break;
        }
        switch (_this.optionOrder[2]) {
            case 1:
                _this.time.events.add(3200, function () {
                    _this.Box2_1.inputEnabled = true;
                    _this.Box2_1.input.useHandCursor = true;
                    _this.Box2_1.events.onInputDown.add(_this.changeFrame1, _this);
                });
                break;
        }
        switch (_this.optionOrder[3]) {
            case 1:
                _this.time.events.add(1600, function () {
                    _this.Box2_1.inputEnabled = true;
                    _this.Box2_1.input.useHandCursor = true;
                    _this.Box2_1.events.onInputDown.add(_this.changeFrame1, _this);
                });
                break;
        }
        // _this.Box2_1.addChild(_this.L1_Group);
        // _this.Box2_1.addChild(_this.L2_Group);
        // _this.Box2_1.addChild(_this.L3_Group);
    },
    secondOption_part_b: function () {
        console.log("second option");
        if (_this.optionOrder[0] == 2) {
            _this.Box2_2 = _this.add.sprite(_this.boxPosition_x_b[0], _this.boxPosition_y_b[0], 'BoxFrame');
            _this.Box2_2.frame = 0;
        }
        else if (_this.optionOrder[1] == 2) {
            _this.Box2_2 = _this.add.sprite(_this.boxPosition_x_b[1], _this.boxPosition_y_b[1], 'BoxFrame');
            _this.Box2_2.frame = 0;
        }
        else if (_this.optionOrder[2] == 2) {
            _this.Box2_2 = _this.add.sprite(_this.boxPosition_x_b[2], _this.boxPosition_y_b[2], 'BoxFrame');
            _this.Box2_2.frame = 0;
        }
        else if (_this.optionOrder[3] == 2) {
            _this.Box2_2 = _this.add.sprite(_this.boxPosition_x_b[3], _this.boxPosition_y_b[3], 'BoxFrame');
            _this.Box2_2.frame = 0;
        }
        else {
            console.log(".....");
        }


        _this.framechange.play();
        //....................arranging the cubes as disired ....................//

        //layer 1..................................................................

        // Desired order
        var desiredOrder = [3, 1, 4, 2];//3, 1, 4, 2

        // Rearrange the array
        var rearrangedArray = [];
        for (var i = 0; i < desiredOrder.length; i++) {
            var value = desiredOrder[i];
            if (_this.L1_position_2.includes(value)) {
                rearrangedArray.push(value);
            }
        }

        // Output the rearranged array
        console.log(rearrangedArray, "rearranged");

        cubessarr_2_1 = [];
        for (var j = 0; j < _this.L1_Count_2; j++) {
            cube = _this.add.image(_this.Cube_Positions_x[rearrangedArray[j] - 1], _this.Cube_Positions_y[rearrangedArray[j] - 1], 'colorCube')
            cube.scale.setTo(0.4, 0.4);
            cubessarr_2_1.push(cube);
            _this.L1_Group_2.addChild(cube);
            // _this.L1_Group_2.getChildAt(_this.L1_Group_2.length - 1).inputEnabled = true;
            // _this.L1_Group_2.getChildAt(_this.L1_Group_2.length - 1).input.useHandCursor = true;
            // _this.L1_Group_2.getChildAt(_this.L1_Group_2.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
        }
        _this.Box2_2.addChild(_this.L1_Group_2);

        //layer2...............................................................................
        _this.time.events.add(1000, function () {


            // Desired order
            var desiredOrder_2 = [7, 5, 8, 6];//7, 5, 8, 6

            // Rearrange the array
            var rearrangedArray_2 = [];
            for (var i = 0; i < desiredOrder_2.length; i++) {
                var value = desiredOrder_2[i];
                if (_this.L2_position_2.includes(value)) {
                    rearrangedArray_2.push(value);
                }
            }

            // Output the rearranged array
            console.log(rearrangedArray_2, "rearranged..");

            cubessarr_2 = [];
            for (var j = 0; j < _this.L2_Count_2; j++) {
                cube_2 = _this.add.image(_this.Cube_Positions_x[rearrangedArray_2[j] - 1], _this.Cube_Positions_y[rearrangedArray_2[j] - 1], 'colorCube')
                cube_2.scale.setTo(0.4, 0.4);
                cubessarr_2.push(cube_2);
                _this.L2_Group_2.addChild(cube_2);
                // _this.L2_Group_2.getChildAt(_this.L2_Group_2.length - 1).inputEnabled = true;
                // _this.L2_Group_2.getChildAt(_this.L2_Group_2.length - 1).input.useHandCursor = true;
                // _this.L2_Group_2.getChildAt(_this.L2_Group_2.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
            }

            _this.Box2_2.addChild(_this.L2_Group_2);
        });

        //layer3.....................................................................................
        //L3_Count = 4 – (L1_Count+ L2_Count). 
        _this.time.events.add(1500, function () {


            // Desired order
            var desiredOrder_3 = [11, 9, 12, 10];//11, 9, 12, 10

            // Rearrange the array
            var rearrangedArray_3 = [];
            for (var i = 0; i < desiredOrder_3.length; i++) {
                var value = desiredOrder_3[i];
                if (_this.L3_position_2.includes(value)) {
                    rearrangedArray_3.push(value);
                }
            }

            // Output the rearranged array
            console.log(rearrangedArray_3, "rearranged..");

            cubessarr_3 = [];
            for (var j = 0; j < _this.L3_Count_2; j++) {
                cube_3 = _this.add.image(_this.Cube_Positions_x[rearrangedArray_3[j] - 1], _this.Cube_Positions_y[rearrangedArray_3[j] - 1], 'colorCube')
                cube_3.scale.setTo(0.4, 0.4);
                cubessarr_3.push(cube_3);
                _this.L3_Group_2.addChild(cube_3);
                // _this.L3_Group_2.getChildAt(_this.L3_Group_2.length - 1).inputEnabled = true;
                // _this.L3_Group_2.getChildAt(_this.L3_Group_2.length - 1).input.useHandCursor = true;
                // _this.L3_Group_2.getChildAt(_this.L3_Group_2.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
            }
            _this.Box2_2.addChild(_this.L3_Group_2);

        });
        // _this.time.events.add(6400, function () {
        //     _this.Box2_2.inputEnabled = true;
        //     _this.Box2_2.input.useHandCursor = true;
        //     _this.Box2_2.events.onInputDown.add(_this.changeFrame2, _this);
        // });
        switch (_this.optionOrder[0]) {
            case 2:
                _this.time.events.add(6400, function () {
                    _this.Box2_2.inputEnabled = true;
                    _this.Box2_2.input.useHandCursor = true;
                    _this.Box2_2.events.onInputDown.add(_this.changeFrame2, _this);
                });
                break;
        }
        switch (_this.optionOrder[1]) {
            case 2:
                _this.time.events.add(4800, function () {
                    _this.Box2_2.inputEnabled = true;
                    _this.Box2_2.input.useHandCursor = true;
                    _this.Box2_2.events.onInputDown.add(_this.changeFrame2, _this);
                });
                break;
        }
        switch (_this.optionOrder[2]) {
            case 2:
                _this.time.events.add(3200, function () {
                    _this.Box2_2.inputEnabled = true;
                    _this.Box2_2.input.useHandCursor = true;
                    _this.Box2_2.events.onInputDown.add(_this.changeFrame2, _this);
                });
                break;
        }
        switch (_this.optionOrder[3]) {
            case 2:
                _this.time.events.add(1600, function () {
                    _this.Box2_2.inputEnabled = true;
                    _this.Box2_2.input.useHandCursor = true;
                    _this.Box2_2.events.onInputDown.add(_this.changeFrame2, _this);
                });
                break;
        }
        // _this.Box2_2.addChild(_this.L1_Group_2);
        // _this.Box2_2.addChild(_this.L2_Group_2);
        // _this.Box2_2.addChild(_this.L3_Group_2);


    },
    thirdOption_part_b: function () {
        console.log("third option");
        if (_this.optionOrder[0] == 3) {
            _this.Box2_3 = _this.add.sprite(_this.boxPosition_x_b[0], _this.boxPosition_y_b[0], 'BoxFrame');
            _this.Box2_3.frame = 0;
        }
        else if (_this.optionOrder[1] == 3) {
            _this.Box2_3 = _this.add.sprite(_this.boxPosition_x_b[1], _this.boxPosition_y_b[1], 'BoxFrame');
            _this.Box2_3.frame = 0;
        }
        else if (_this.optionOrder[2] == 3) {
            _this.Box2_3 = _this.add.sprite(_this.boxPosition_x_b[2], _this.boxPosition_y_b[2], 'BoxFrame');
            _this.Box2_3.frame = 0;
        }
        else if (_this.optionOrder[3] == 3) {
            _this.Box2_3 = _this.add.sprite(_this.boxPosition_x_b[3], _this.boxPosition_y_b[3], 'BoxFrame');
            _this.Box2_3.frame = 0;
        }
        else {
            console.log(".....");
        }
        _this.framechange.play();
        //....................arranging the cubes as disired ....................//

        //layer 1..................................................................

        // Desired order
        var desiredOrder = [3, 1, 4, 2];//3, 1, 4, 2

        // Rearrange the array
        var rearrangedArray = [];
        for (var i = 0; i < desiredOrder.length; i++) {
            var value = desiredOrder[i];
            if (_this.L1_position_3.includes(value)) {
                rearrangedArray.push(value);
            }
        }

        // Output the rearranged array
        console.log(rearrangedArray, "rearranged");

        cubessarr_3_1 = [];
        for (var j = 0; j < _this.L1_Count_3; j++) {
            cube = _this.add.image(_this.Cube_Positions_x[rearrangedArray[j] - 1], _this.Cube_Positions_y[rearrangedArray[j] - 1], 'colorCube')
            cube.scale.setTo(0.4, 0.4);
            cubessarr_3_1.push(cube);
            _this.L1_Group_3.addChild(cube);
            // _this.L1_Group_3.getChildAt(_this.L1_Group_3.length - 1).inputEnabled = true;
            // _this.L1_Group_3.getChildAt(_this.L1_Group_3.length - 1).input.useHandCursor = true;
            // _this.L1_Group_3.getChildAt(_this.L1_Group_3.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
        }
        _this.Box2_3.addChild(_this.L1_Group_3);

        //layer2...............................................................................
        _this.time.events.add(1000, function () {


            // Desired order
            var desiredOrder_2 = [7, 5, 8, 6];//7, 5, 8, 6

            // Rearrange the array
            var rearrangedArray_2 = [];
            for (var i = 0; i < desiredOrder_2.length; i++) {
                var value = desiredOrder_2[i];
                if (_this.L2_position_3.includes(value)) {
                    rearrangedArray_2.push(value);
                }
            }

            // Output the rearranged array
            console.log(rearrangedArray_2, "rearranged..");

            cubessarr_2 = [];
            for (var j = 0; j < _this.L2_Count_3; j++) {
                cube_2 = _this.add.image(_this.Cube_Positions_x[rearrangedArray_2[j] - 1], _this.Cube_Positions_y[rearrangedArray_2[j] - 1], 'colorCube')
                cube_2.scale.setTo(0.4, 0.4);
                cubessarr_2.push(cube_2);
                _this.L2_Group_3.addChild(cube_2);
                // _this.L2_Group_3.getChildAt(_this.L2_Group_3.length - 1).inputEnabled = true;
                // _this.L2_Group_3.getChildAt(_this.L2_Group_3.length - 1).input.useHandCursor = true;
                // _this.L2_Group_3.getChildAt(_this.L2_Group_3.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
            }

            _this.Box2_3.addChild(_this.L2_Group_3);
        });

        //layer3.....................................................................................
        //L3_Count = 4 – (L1_Count+ L2_Count). 
        _this.time.events.add(1500, function () {


            // Desired order
            var desiredOrder_3 = [11, 9, 12, 10];//11, 9, 12, 10

            // Rearrange the array
            var rearrangedArray_3 = [];
            for (var i = 0; i < desiredOrder_3.length; i++) {
                var value = desiredOrder_3[i];
                if (_this.L3_position_3.includes(value)) {
                    rearrangedArray_3.push(value);
                }
            }

            // Output the rearranged array
            console.log(rearrangedArray_3, "rearranged..");

            cubessarr_3 = [];
            for (var j = 0; j < _this.L3_Count_3; j++) {
                cube_3 = _this.add.image(_this.Cube_Positions_x[rearrangedArray_3[j] - 1], _this.Cube_Positions_y[rearrangedArray_3[j] - 1], 'colorCube')
                cube_3.scale.setTo(0.4, 0.4);
                cubessarr_3.push(cube_3);
                _this.L3_Group_3.addChild(cube_3);
                // _this.L3_Group_3.getChildAt(_this.L3_Group_3.length - 1).inputEnabled = true;
                // _this.L3_Group_3.getChildAt(_this.L3_Group_3.length - 1).input.useHandCursor = true;
                // _this.L3_Group_3.getChildAt(_this.L3_Group_3.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
            }
            _this.Box2_3.addChild(_this.L3_Group_3);


        });
        // _this.time.events.add(6400, function () {
        // _this.Box2_3.inputEnabled = true;
        // _this.Box2_3.input.useHandCursor = true;
        // _this.Box2_3.events.onInputDown.add(_this.changeFrame3, _this);
        // });
        switch (_this.optionOrder[0]) {
            case 3:
                _this.time.events.add(6400, function () {
                    _this.Box2_3.inputEnabled = true;
                    _this.Box2_3.input.useHandCursor = true;
                    _this.Box2_3.events.onInputDown.add(_this.changeFrame3, _this);
                });
                break;
        }
        switch (_this.optionOrder[1]) {
            case 3:
                _this.time.events.add(4800, function () {
                    _this.Box2_3.inputEnabled = true;
                    _this.Box2_3.input.useHandCursor = true;
                    _this.Box2_3.events.onInputDown.add(_this.changeFrame3, _this);
                });
                break;
        }
        switch (_this.optionOrder[2]) {
            case 3:
                _this.time.events.add(3200, function () {
                    _this.Box2_3.inputEnabled = true;
                    _this.Box2_3.input.useHandCursor = true;
                    _this.Box2_3.events.onInputDown.add(_this.changeFrame3, _this);
                });
                break;
        }
        switch (_this.optionOrder[3]) {
            case 3:
                _this.time.events.add(1600, function () {
                    _this.Box2_3.inputEnabled = true;
                    _this.Box2_3.input.useHandCursor = true;
                    _this.Box2_3.events.onInputDown.add(_this.changeFrame3, _this);
                });
                break;
        }

    },
    forthOption_part_b: function () {
        console.log("forth option");
        if (_this.optionOrder[0] == 4) {
            _this.Box2_4 = _this.add.sprite(_this.boxPosition_x_b[0], _this.boxPosition_y_b[0], 'BoxFrame');
            _this.Box2_4.frame = 0;
        }
        else if (_this.optionOrder[1] == 4) {
            _this.Box2_4 = _this.add.sprite(_this.boxPosition_x_b[1], _this.boxPosition_y_b[1], 'BoxFrame');
            _this.Box2_4.frame = 0;
        }
        else if (_this.optionOrder[2] == 4) {
            _this.Box2_4 = _this.add.sprite(_this.boxPosition_x_b[2], _this.boxPosition_y_b[2], 'BoxFrame');
            _this.Box2_4.frame = 0;
        }
        else if (_this.optionOrder[3] == 4) {
            _this.Box2_4 = _this.add.sprite(_this.boxPosition_x_b[3], _this.boxPosition_y_b[3], 'BoxFrame');
            _this.Box2_4.frame = 0;
        }
        else {
            console.log(".....");
        }
        _this.framechange.play();
        //....................arranging the cubes as disired ....................//

        //layer 1..................................................................

        // Desired order
        var desiredOrder = [3, 1, 4, 2];//3, 1, 4, 2

        // Rearrange the array
        var rearrangedArray = [];
        for (var i = 0; i < desiredOrder.length; i++) {
            var value = desiredOrder[i];
            if (_this.L1_position_4.includes(value)) {
                rearrangedArray.push(value);
            }
        }

        // Output the rearranged array
        console.log(rearrangedArray, "rearranged");

        cubessarr_3_1 = [];
        for (var j = 0; j < _this.L1_Count_4; j++) {
            cube = _this.add.image(_this.Cube_Positions_x[rearrangedArray[j] - 1], _this.Cube_Positions_y[rearrangedArray[j] - 1], 'colorCube')
            cube.scale.setTo(0.4, 0.4);
            cubessarr_3_1.push(cube);
            _this.L1_Group_4.addChild(cube);
            // _this.L1_Group_4.getChildAt(_this.L1_Group_4.length - 1).inputEnabled = true;
            // _this.L1_Group_4.getChildAt(_this.L1_Group_4.length - 1).input.useHandCursor = true;
            // _this.L1_Group_4.getChildAt(_this.L1_Group_4.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
        }
        _this.Box2_4.addChild(_this.L1_Group_4);

        //layer2...............................................................................
        _this.time.events.add(1000, function () {


            // Desired order
            var desiredOrder_2 = [7, 5, 8, 6];//7, 5, 8, 6

            // Rearrange the array
            var rearrangedArray_2 = [];
            for (var i = 0; i < desiredOrder_2.length; i++) {
                var value = desiredOrder_2[i];
                if (_this.L2_position_4.includes(value)) {
                    rearrangedArray_2.push(value);
                }
            }

            // Output the rearranged array
            console.log(rearrangedArray_2, "rearranged..");

            cubessarr_2 = [];
            for (var j = 0; j < _this.L2_Count_4; j++) {
                cube_2 = _this.add.image(_this.Cube_Positions_x[rearrangedArray_2[j] - 1], _this.Cube_Positions_y[rearrangedArray_2[j] - 1], 'colorCube')
                cube_2.scale.setTo(0.4, 0.4);
                cubessarr_2.push(cube_2);
                _this.L2_Group_4.addChild(cube_2);
                // _this.L2_Group_4.getChildAt(_this.L2_Group_4.length - 1).inputEnabled = true;
                // _this.L2_Group_4.getChildAt(_this.L2_Group_4.length - 1).input.useHandCursor = true;
                // _this.L2_Group_4.getChildAt(_this.L2_Group_4.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
            }

            _this.Box2_4.addChild(_this.L2_Group_4);
        });

        //layer3.....................................................................................
        //L3_Count = 4 – (L1_Count+ L2_Count). 
        _this.time.events.add(1500, function () {


            // Desired order
            var desiredOrder_3 = [11, 9, 12, 10];//11, 9, 12, 10

            // Rearrange the array
            var rearrangedArray_3 = [];
            for (var i = 0; i < desiredOrder_3.length; i++) {
                var value = desiredOrder_3[i];
                if (_this.L3_position_4.includes(value)) {
                    rearrangedArray_3.push(value);
                }
            }

            // Output the rearranged array
            console.log(rearrangedArray_3, "rearranged..");

            cubessarr_3 = [];
            for (var j = 0; j < _this.L3_Count_4; j++) {
                cube_3 = _this.add.image(_this.Cube_Positions_x[rearrangedArray_3[j] - 1], _this.Cube_Positions_y[rearrangedArray_3[j] - 1], 'colorCube')
                cube_3.scale.setTo(0.4, 0.4);
                cubessarr_3.push(cube_3);
                _this.L3_Group_4.addChild(cube_3);
                // _this.L3_Group_4.getChildAt(_this.L3_Group_4.length - 1).inputEnabled = true;
                // _this.L3_Group_4.getChildAt(_this.L3_Group_4.length - 1).input.useHandCursor = true;
                // _this.L3_Group_4.getChildAt(_this.L3_Group_4.length - 1).events.onInputDown.add(_this.cubeClicked, _this);
            }
            _this.Box2_4.addChild(_this.L3_Group_4);


        });

        switch (_this.optionOrder[0]) {
            case 4:
                _this.time.events.add(6400, function () {
                    _this.Box2_4.inputEnabled = true;
                    _this.Box2_4.input.useHandCursor = true;
                    _this.Box2_4.events.onInputDown.add(_this.changeFrame4, _this);
                });
                break;
        }
        switch (_this.optionOrder[1]) {
            case 4:
                _this.time.events.add(4800, function () {
                    _this.Box2_4.inputEnabled = true;
                    _this.Box2_4.input.useHandCursor = true;
                    _this.Box2_4.events.onInputDown.add(_this.changeFrame4, _this);
                });
                break;
        }
        switch (_this.optionOrder[2]) {
            case 4:
                _this.time.events.add(3200, function () {
                    _this.Box2_4.inputEnabled = true;
                    _this.Box2_4.input.useHandCursor = true;
                    _this.Box2_4.events.onInputDown.add(_this.changeFrame4, _this);
                });
                break;
        }
        switch (_this.optionOrder[3]) {
            case 4:
                _this.time.events.add(1600, function () {
                    _this.Box2_4.inputEnabled = true;
                    _this.Box2_4.input.useHandCursor = true;
                    _this.Box2_4.events.onInputDown.add(_this.changeFrame4, _this);
                });
                break;
        }

    },

    dragtoBottomTween: function () {
        _this.handGroup = _this.add.group();

        //* show hand signs on the devide sign as wel as on flip button
        _this.time.events.add(500, function () {
            _this.clickSound.play();
            _this.dupObj = _this.add.image(_this.L1_Group.getChildAt(0).x, _this.L1_Group.getChildAt(0).y, 'colorCube');
            _this.dupObj.scale.setTo(0.4, 0.4);
            _this.hand = _this.add.image(_this.dupObj.x + 10, _this.dupObj.y + 10, 'hand');//620,110
            _this.hand.scale.setTo(0.5, 0.5);

            _this.L1_Group.getChildAt(0).alpha = 0;
            _this.handGroup.addChild(_this.dupObj);
            _this.handGroup.addChild(_this.hand);
            _this.Box2_1.addChild(_this.handGroup);
        });

        _this.time.events.add(1500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.handGroup);
            tempDragAction.to({ x: _this.L1_Group.getChildAt(0).x + 30, y: _this.L1_Group.getChildAt(0).y }, 1000, 'Linear', true, 0);
            tempDragAction.start();
        });

        _this.time.events.add(2500, function () {
            _this.L1_Group.getChildAt(0).alpha = 1;
            _this.handGroup.destroy();
        });
    },

    cubeClicked: function (target) {
        console.log("cubeClicked")
        target.input.enableDrag(true);
        console.log(target.x, target.y);
        _this.vx = target.x;
        _this.vy = target.y;
        _this.clickSound.play();
        target.events.onDragStop.add(_this.restCubeSpace, target);
    },
    restCubeSpace: function (target) {
        target.x = _this.vx;
        target.y = _this.vy;
        // _this.L1_Group.addChild(target);
        target.inputEnabled = true;
        target.input.useHandCursor = true;
        target.events.onInputDown.add(_this.cubeClicked, _this);
    },

    //part a option part
    firstOption: function () {
        console.log("first option");
        if (_this.optionOrder[0] == 1) {
            _this.Box2_1 = _this.add.sprite(_this.boxPosition_x[0], _this.boxPosition_y[0], 'box_1');
            _this.Box2_1.frame = 0;
        }
        else if (_this.optionOrder[1] == 1) {
            _this.Box2_1 = _this.add.sprite(_this.boxPosition_x[1], _this.boxPosition_y[1], 'box_1');
            _this.Box2_1.frame = 0;
        }
        else if (_this.optionOrder[2] == 1) {
            _this.Box2_1 = _this.add.sprite(_this.boxPosition_x[2], _this.boxPosition_y[2], 'box_1');
            _this.Box2_1.frame = 0;
        }
        else if (_this.optionOrder[3] == 1) {
            _this.Box2_1 = _this.add.sprite(_this.boxPosition_x[3], _this.boxPosition_y[3], 'box_1');
            _this.Box2_1.frame = 0;
        }
        else {
            console.log(".....");
        }

        switch (_this.optionObjectOrder[_this.count1]) {
            case 0://canned
                if (_this.viewOrder[0] == 1) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//cicle
                    _this.shape_1.frame = 0;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_1.frame = 2;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 1://suitcase
                if (_this.viewOrder[0] == 1 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_1.frame = 2;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                if (_this.viewOrder[0] == 2) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//square
                    _this.shape_1.frame = 1;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 2://bus
                if (_this.viewOrder[0] == 1 || _this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_1.frame = 2;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 3://samoosa
                if (_this.viewOrder[0] == 1 || _this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//triangle
                    _this.shape_1.frame = 3;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 4://coriour_box
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_1.frame = 2;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                if (_this.viewOrder[0] == 1) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//square
                    _this.shape_1.frame = 1;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 5://bread
                if (_this.viewOrder[0] == 1 || _this.viewOrder[0] == 2) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_1.frame = 2;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                if (_this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//square
                    _this.shape_1.frame = 1;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 6://cone_ice
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//triangle
                    _this.shape_1.frame = 3;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                if (_this.viewOrder[0] == 1) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//circle
                    _this.shape_1.frame = 0;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 7://cone_sign
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//triangle
                    _this.shape_1.frame = 3;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                if (_this.viewOrder[0] == 1) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//circle
                    _this.shape_1.frame = 0;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 8://candle
                if (_this.viewOrder[0] == 1) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//cicle
                    _this.shape_1.frame = 0;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_1.frame = 2;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 9://cube
                if (_this.viewOrder[0] == 1 || _this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//square
                    _this.shape_1.frame = 1;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 10://dice
                if (_this.viewOrder[0] == 1 || _this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//square
                    _this.shape_1.frame = 1;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 11://gift_box
                if (_this.viewOrder[0] == 1 || _this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//square
                    _this.shape_1.frame = 1;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 12://pastry
                if (_this.viewOrder[0] == 1 || _this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//square
                    _this.shape_1.frame = 1;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 13://cake
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_1.frame = 2;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                if (_this.viewOrder[0] == 1) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//triangle
                    _this.shape_1.frame = 3;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 14://sandwich
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_1.frame = 2;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                if (_this.viewOrder[0] == 1) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//triangle
                    _this.shape_1.frame = 3;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 15://wood_pice
                if (_this.viewOrder[0] == 1 || _this.viewOrder[0] == 2) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_1.frame = 2;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                if (_this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//circle
                    _this.shape_1.frame = 0;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;
            case 16://drum
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_1.frame = 2;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                if (_this.viewOrder[0] == 1) {
                    _this.shape_1 = _this.add.sprite(12, 10, 'all_shape');//circle
                    _this.shape_1.frame = 0;
                    _this.Box2_1.addChild(_this.shape_1);
                }
                break;

        }

        _this.Box2_1.inputEnabled = true;
        _this.Box2_1.input.useHandCursor = true;
        _this.Box2_1.events.onInputDown.add(_this.changeFrame1, _this);
    },

    secondOptiont: function () {
        console.log("second option");
        if (_this.optionOrder[0] == 2) {
            _this.Box2_2 = _this.add.sprite(_this.boxPosition_x[0], _this.boxPosition_y[0], 'box_1');
            _this.Box2_2.frame = 0;
        }
        else if (_this.optionOrder[1] == 2) {
            _this.Box2_2 = _this.add.sprite(_this.boxPosition_x[1], _this.boxPosition_y[1], 'box_1');
            _this.Box2_2.frame = 0;
        }
        else if (_this.optionOrder[2] == 2) {
            _this.Box2_2 = _this.add.sprite(_this.boxPosition_x[2], _this.boxPosition_y[2], 'box_1');
            _this.Box2_2.frame = 0;
        }
        else if (_this.optionOrder[3] == 2) {
            _this.Box2_2 = _this.add.sprite(_this.boxPosition_x[3], _this.boxPosition_y[3], 'box_1');
            _this.Box2_2.frame = 0;
        }
        else {
            console.log(".....");
        }
        switch (_this.optionObjectOrder[_this.count1]) {
            case 0://canned
                if (_this.viewOrder[0] == 1) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//cicle
                    _this.shape_2.frame = 2;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_2.frame = 0;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                break;
            case 1://suitcase
                if (_this.viewOrder[0] == 1 || _this.viewOrder[0] == 3) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_2.frame = 1;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                if (_this.viewOrder[0] == 2) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//square
                    _this.shape_2.frame = 2;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                break;
            case 2://bus
                _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_2.frame = 0;
                _this.Box2_2.addChild(_this.shape_2);
                break;
            case 3://samoosa
                _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//triangle
                _this.shape_2.frame = 0;
                _this.Box2_2.addChild(_this.shape_2);
                break;
            case 4://coriour_box
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_2.frame = 1;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                if (_this.viewOrder[0] == 1) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//square
                    _this.shape_2.frame = 2;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                break;
            case 5://bread
                if (_this.viewOrder[0] == 1 || _this.viewOrder[0] == 2) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_2.frame = 1;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                if (_this.viewOrder[0] == 3) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//square
                    _this.shape_2.frame = 2;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                break;
            case 6://cone_ice
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//triangle
                    _this.shape_2.frame = 0;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                if (_this.viewOrder[0] == 1) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//circle
                    _this.shape_2.frame = 3;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                break;
            case 7://cone_sign
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//triangle
                    _this.shape_2.frame = 0;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                if (_this.viewOrder[0] == 1) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//circle
                    _this.shape_2.frame = 3;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                break;
            case 8://candle
                if (_this.viewOrder[0] == 1) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//cicle
                    _this.shape_2.frame = 2;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_2.frame = 0;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                break;
            case 9://cube
                _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//square
                _this.shape_2.frame = 0;
                _this.Box2_2.addChild(_this.shape_2);
                break;
            case 10://dice
                _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//square
                _this.shape_2.frame = 0;
                _this.Box2_2.addChild(_this.shape_2);
                break;
            case 11://gift_box
                _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//square
                _this.shape_2.frame = 0;
                _this.Box2_2.addChild(_this.shape_2);
                break;
            case 12://pastry
                _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//square
                _this.shape_2.frame = 0;
                _this.Box2_2.addChild(_this.shape_2);
                break;
            case 13://cake
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_2.frame = 3;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                if (_this.viewOrder[0] == 1) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//triangle
                    _this.shape_2.frame = 2;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                break;
            case 14://sandwich
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_2.frame = 3;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                if (_this.viewOrder[0] == 1) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//triangle
                    _this.shape_2.frame = 2;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                break;
            case 15://wood_pice
                if (_this.viewOrder[0] == 1 || _this.viewOrder[0] == 2) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_2.frame = 0;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                if (_this.viewOrder[0] == 3) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//circle
                    _this.shape_2.frame = 2;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                break;
            case 16://drum
                if (_this.viewOrder[0] == 2 || _this.viewOrder[0] == 3) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//rect
                    _this.shape_2.frame = 0;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                if (_this.viewOrder[0] == 1) {
                    _this.shape_2 = _this.add.sprite(12, 10, 'all_shape');//circle
                    _this.shape_2.frame = 2;
                    _this.Box2_2.addChild(_this.shape_2);
                }
                break;

        }


        _this.Box2_2.inputEnabled = true;
        _this.Box2_2.input.useHandCursor = true;
        _this.Box2_2.events.onInputDown.add(_this.changeFrame2, _this);
    },

    thirdOption: function () {
        console.log("third option");
        if (_this.optionOrder[0] == 3) {
            _this.Box2_3 = _this.add.sprite(_this.boxPosition_x[0], _this.boxPosition_y[0], 'box_1');
            _this.Box2_3.frame = 0;
        }
        else if (_this.optionOrder[1] == 3) {
            _this.Box2_3 = _this.add.sprite(_this.boxPosition_x[1], _this.boxPosition_y[1], 'box_1');
            _this.Box2_3.frame = 0;
        }
        else if (_this.optionOrder[2] == 3) {
            _this.Box2_3 = _this.add.sprite(_this.boxPosition_x[2], _this.boxPosition_y[2], 'box_1');
            _this.Box2_3.frame = 0;
        }
        else if (_this.optionOrder[3] == 3) {
            _this.Box2_3 = _this.add.sprite(_this.boxPosition_x[3], _this.boxPosition_y[3], 'box_1');
            _this.Box2_3.frame = 0;
        }
        else {
            console.log(".....");
        }

        switch (_this.optionObjectOrder[_this.count1]) {
            case 0://canned
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_3.frame = 1;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 1://suitcase
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//square
                _this.shape_3.frame = 0;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 2://bus
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_3.frame = 1;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 3://samoosa
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//triangle
                _this.shape_3.frame = 1;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 4://coriour_box
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//square
                _this.shape_3.frame = 0;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 5://bread
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//square
                _this.shape_3.frame = 0;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 6://cone_ice
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//circle
                _this.shape_3.frame = 1;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 7://cone_sign
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//circle
                _this.shape_3.frame = 1;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 8://candle

                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_3.frame = 1;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 9://cube
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//square
                _this.shape_3.frame = 2;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 10://dice
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//square
                _this.shape_3.frame = 2;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 11://gift_box
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//square
                _this.shape_3.frame = 2;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 12://pastry
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//square
                _this.shape_3.frame = 2;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 13://cake
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//triangle
                _this.shape_3.frame = 0;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 14://sandwich
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//triangle
                _this.shape_3.frame = 0;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 15://wood_pice
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//circle
                _this.shape_3.frame = 1;
                _this.Box2_3.addChild(_this.shape_3);
                break;
            case 16://drum
                _this.shape_3 = _this.add.sprite(12, 10, 'all_shape');//circle
                _this.shape_3.frame = 1;
                _this.Box2_3.addChild(_this.shape_3);
                break;

        }

        _this.Box2_3.inputEnabled = true;
        _this.Box2_3.input.useHandCursor = true;
        _this.Box2_3.events.onInputDown.add(_this.changeFrame3, _this);
    },

    forthOption: function () {
        console.log("forth option");
        if (_this.optionOrder[0] == 4) {
            _this.Box2_4 = _this.add.sprite(_this.boxPosition_x[0], _this.boxPosition_y[0], 'box_1');
            _this.Box2_4.frame = 0;
        }
        else if (_this.optionOrder[1] == 4) {
            _this.Box2_4 = _this.add.sprite(_this.boxPosition_x[1], _this.boxPosition_y[1], 'box_1');
            _this.Box2_4.frame = 0;
        }
        else if (_this.optionOrder[2] == 4) {
            _this.Box2_4 = _this.add.sprite(_this.boxPosition_x[2], _this.boxPosition_y[2], 'box_1');
            _this.Box2_4.frame = 0;
        }
        else if (_this.optionOrder[3] == 4) {
            _this.Box2_4 = _this.add.sprite(_this.boxPosition_x[3], _this.boxPosition_y[3], 'box_1');
            _this.Box2_4.frame = 0;
        }
        else {
            console.log(".....");
        }

        switch (_this.optionObjectOrder[_this.count1]) {
            case 0://canned
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_4.frame = 3;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 1://canned
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_4.frame = 3;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 2://canned
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_4.frame = 3;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 3://samoosa
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//triangle
                _this.shape_4.frame = 2;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 4://canned
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_4.frame = 3;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 5://canned
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_4.frame = 3;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 6://samoosa
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//triangle
                _this.shape_4.frame = 2;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 7://samoosa
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//triangle
                _this.shape_4.frame = 2;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 8://canned
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_4.frame = 3;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 9://canned
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_4.frame = 3;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 10://canned
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_4.frame = 3;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 11://canned
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_4.frame = 3;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 12://canned
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_4.frame = 3;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 13://cake
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//triangle
                _this.shape_4.frame = 1;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 14://cake
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//triangle
                _this.shape_4.frame = 1;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 15://canned
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_4.frame = 3;
                _this.Box2_4.addChild(_this.shape_4);
                break;
            case 16://canned
                _this.shape_4 = _this.add.sprite(12, 10, 'all_shape');//rect
                _this.shape_4.frame = 3;
                _this.Box2_4.addChild(_this.shape_4);
                break;


        }


        _this.Box2_4.inputEnabled = true;
        _this.Box2_4.input.useHandCursor = true;
        _this.Box2_4.events.onInputDown.add(_this.changeFrame4, _this);
    },

    //option validation will do here part a
    tickValidation: function () {
        console.log("tick");
        if (_this.Box2_1.frame == 1) {
            console.log("tick correct");
            _this.counterCelebrationSound.play();
            _this.tick.inputEnabled = false;
            _this.tick.input.useHandCursor = false;
            _this.Box2_1.inputEnabled = false;
            _this.Box2_1.input.useHandCursor = false;
            _this.Box2_2.inputEnabled = false;
            _this.Box2_2.input.useHandCursor = false;
            _this.Box2_3.inputEnabled = false;
            _this.Box2_3.input.useHandCursor = false;
            _this.Box2_4.inputEnabled = false;
            _this.Box2_4.input.useHandCursor = false;

            _this.lastScreenCelebration();
        }
        else {
            console.log("tick wrong");
            _this.wrongSound.play();
            _this.boxgrp = _this.add.group();
            _this.boxgrp.addChild(_this.Box2_1);
            _this.boxgrp.addChild(_this.Box2_2);
            _this.boxgrp.addChild(_this.Box2_3);
            _this.boxgrp.addChild(_this.Box2_4);
            _this.shake.shake(10, _this.boxgrp);

            if (_this.Box2_2.frame == 1) _this.Box2_2.frame = 2;
            if (_this.Box2_3.frame == 1) _this.Box2_3.frame = 2;
            if (_this.Box2_4.frame == 1) _this.Box2_4.frame = 2;
            _this.time.events.add(500, () => {
                _this.Box2_1.frame = 0;
                _this.Box2_2.frame = 0;
                _this.Box2_3.frame = 0;
                _this.Box2_4.frame = 0;
            });
        }
    },
    tickValidation_partb: function () {
        // console.log("tick");

        if (_this.firstBox == 1) {
            if (_this.Box2_1.frame == 1) {
                // // console.log("tick correct");
                _this.L1_Group.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L1_Group_2.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group_2.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group_2.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L1_Group_3.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group_3.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group_3.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L1_Group_4.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group_4.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group_4.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);

                if (_this.hand) _this.handGroup.destroy();
                _this.L1_Group.getChildAt(0).alpha = 1;
                // target.events.onInputDown.removeAll();
                // target.input.enableDrag(false);
                // target.events.destroy();
                _this.counterCelebrationSound.play();
                _this.tick.inputEnabled = false;
                _this.tick.input.useHandCursor = false;
                _this.Box2_1.inputEnabled = false;
                _this.Box2_1.input.useHandCursor = false;
                _this.Box2_2.inputEnabled = false;
                _this.Box2_2.input.useHandCursor = false;
                _this.Box2_3.inputEnabled = false;
                _this.Box2_3.input.useHandCursor = false;
                _this.Box2_4.inputEnabled = false;
                _this.Box2_4.input.useHandCursor = false;

                if (Cube) Cube.destroy();
                if (Arrow) Arrow.destroy();

                _this.lastScreenCelebration();
            }
            else {
                // console.log("tick wrong");
                _this.wrongSound.play();
                _this.boxgrp = _this.add.group();
                _this.boxgrp.addChild(_this.Box2_1);
                _this.boxgrp.addChild(_this.Box2_2);
                _this.boxgrp.addChild(_this.Box2_3);
                _this.boxgrp.addChild(_this.Box2_4);
                _this.shake.shake(10, _this.boxgrp);

                if (_this.Box2_1.frame == 1) _this.Box2_1.frame = 2;
                if (_this.Box2_2.frame == 1) _this.Box2_2.frame = 2;
                if (_this.Box2_3.frame == 1) _this.Box2_3.frame = 2;
                if (_this.Box2_4.frame == 1) _this.Box2_4.frame = 2;
                _this.time.events.add(500, () => {
                    _this.Box2_1.frame = 0;
                    _this.Box2_2.frame = 0;
                    _this.Box2_3.frame = 0;
                    _this.Box2_4.frame = 0;
                });
            }
        }
        if (_this.secondBox == 1) {
            if (_this.Box2_2.frame == 1) {
                // console.log("tick correct");
                _this.L1_Group.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L1_Group_2.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group_2.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group_2.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L1_Group_3.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group_3.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group_3.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L1_Group_4.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group_4.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group_4.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);

                if (_this.hand) _this.handGroup.destroy();
                _this.L1_Group.getChildAt(0).alpha = 1;

                _this.counterCelebrationSound.play();
                _this.tick.inputEnabled = false;
                _this.tick.input.useHandCursor = false;
                _this.Box2_1.inputEnabled = false;
                _this.Box2_1.input.useHandCursor = false;
                _this.Box2_2.inputEnabled = false;
                _this.Box2_2.input.useHandCursor = false;
                _this.Box2_3.inputEnabled = false;
                _this.Box2_3.input.useHandCursor = false;
                _this.Box2_4.inputEnabled = false;
                _this.Box2_4.input.useHandCursor = false;

                if (Cube) Cube.destroy();
                if (Arrow) Arrow.destroy();

                _this.lastScreenCelebration();
            }
            else {
                // console.log("tick wrong");
                _this.wrongSound.play();
                _this.boxgrp = _this.add.group();
                _this.boxgrp.addChild(_this.Box2_1);
                _this.boxgrp.addChild(_this.Box2_2);
                _this.boxgrp.addChild(_this.Box2_3);
                _this.boxgrp.addChild(_this.Box2_4);
                _this.shake.shake(10, _this.boxgrp);

                if (_this.Box2_1.frame == 1) _this.Box2_1.frame = 2;
                if (_this.Box2_2.frame == 1) _this.Box2_2.frame = 2;
                if (_this.Box2_3.frame == 1) _this.Box2_3.frame = 2;
                if (_this.Box2_4.frame == 1) _this.Box2_4.frame = 2;
                _this.time.events.add(500, () => {
                    _this.Box2_1.frame = 0;
                    _this.Box2_2.frame = 0;
                    _this.Box2_3.frame = 0;
                    _this.Box2_4.frame = 0;
                });
            }
        }
        if (_this.thirdBox == 1) {
            if (_this.Box2_3.frame == 1) {
                // console.log("tick correct");
                _this.L1_Group.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L1_Group_2.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group_2.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group_2.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L1_Group_3.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group_3.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group_3.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L1_Group_4.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group_4.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group_4.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);

                if (_this.hand) _this.handGroup.destroy();
                _this.L1_Group.getChildAt(0).alpha = 1;

                _this.counterCelebrationSound.play();
                _this.tick.inputEnabled = false;
                _this.tick.input.useHandCursor = false;
                _this.Box2_1.inputEnabled = false;
                _this.Box2_1.input.useHandCursor = false;
                _this.Box2_2.inputEnabled = false;
                _this.Box2_2.input.useHandCursor = false;
                _this.Box2_3.inputEnabled = false;
                _this.Box2_3.input.useHandCursor = false;
                _this.Box2_4.inputEnabled = false;
                _this.Box2_4.input.useHandCursor = false;

                if (Cube) Cube.destroy();
                if (Arrow) Arrow.destroy();

                _this.lastScreenCelebration();
            }
            else {
                // console.log("tick wrong");
                _this.wrongSound.play();
                _this.boxgrp = _this.add.group();
                _this.boxgrp.addChild(_this.Box2_1);
                _this.boxgrp.addChild(_this.Box2_2);
                _this.boxgrp.addChild(_this.Box2_3);
                _this.boxgrp.addChild(_this.Box2_4);
                _this.shake.shake(10, _this.boxgrp);

                if (_this.Box2_1.frame == 1) _this.Box2_1.frame = 2;
                if (_this.Box2_2.frame == 1) _this.Box2_2.frame = 2;
                if (_this.Box2_3.frame == 1) _this.Box2_3.frame = 2;
                if (_this.Box2_4.frame == 1) _this.Box2_4.frame = 2;
                _this.time.events.add(500, () => {
                    _this.Box2_1.frame = 0;
                    _this.Box2_2.frame = 0;
                    _this.Box2_3.frame = 0;
                    _this.Box2_4.frame = 0;
                });
            }
        }
        if (_this.fourthBox == 1) {
            if (_this.Box2_4.frame == 1) {
                // // console.log("tick correct");
                _this.L1_Group.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L1_Group_2.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group_2.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group_2.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L1_Group_3.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group_3.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group_3.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L1_Group_4.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L2_Group_4.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);
                _this.L3_Group_4.forEach(function (element) {
                    element.inputEnabled = false;
                }, _this);

                if (_this.hand) _this.handGroup.destroy();
                _this.L1_Group.getChildAt(0).alpha = 1;

                _this.counterCelebrationSound.play();
                _this.tick.inputEnabled = false;
                _this.tick.input.useHandCursor = false;
                _this.Box2_1.inputEnabled = false;
                _this.Box2_1.input.useHandCursor = false;
                _this.Box2_2.inputEnabled = false;
                _this.Box2_2.input.useHandCursor = false;
                _this.Box2_3.inputEnabled = false;
                _this.Box2_3.input.useHandCursor = false;
                _this.Box2_4.inputEnabled = false;
                _this.Box2_4.input.useHandCursor = false;

                if (Cube) Cube.destroy();
                if (Arrow) Arrow.destroy();

                _this.lastScreenCelebration();
            }
            else {
                // // console.log("tick wrong");
                _this.wrongSound.play();
                _this.boxgrp = _this.add.group();
                _this.boxgrp.addChild(_this.Box2_1);
                _this.boxgrp.addChild(_this.Box2_2);
                _this.boxgrp.addChild(_this.Box2_3);
                _this.boxgrp.addChild(_this.Box2_4);
                _this.shake.shake(10, _this.boxgrp);

                if (_this.Box2_1.frame == 1) _this.Box2_1.frame = 2;
                if (_this.Box2_2.frame == 1) _this.Box2_2.frame = 2;
                if (_this.Box2_3.frame == 1) _this.Box2_3.frame = 2;
                if (_this.Box2_4.frame == 1) _this.Box2_4.frame = 2;
                _this.time.events.add(500, () => {
                    _this.Box2_1.frame = 0;
                    _this.Box2_2.frame = 0;
                    _this.Box2_3.frame = 0;
                    _this.Box2_4.frame = 0;
                });
            }
        }

    },

    lastScreenCelebration: function () {
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
        _this.pauseVoice();
      //  _this.speakerbtn.inputEnabled = false;
        _this.time.events.add(3000, () => {
            _this.clearAll();
            if (_this.count1 == 6) {
                _this.state.start('score', true, false, gameID, _this.microConcepts);
                // _this.state.start('GMSS_01_G8Score');
                // console.log("score");
            }
            else {
                _this.time.events.add(1000, () => {
                    _this.InitialScreen();
                });
            }
        });
    },


    changeFrame1: function () {
        _this.Box2_1.frame = 1;
        _this.Box2_2.frame = 0;
        _this.Box2_3.frame = 0;
        _this.Box2_4.frame = 0;

        _this.selectedBox1 = true;
        _this.selectedBox2 = false;
        _this.selectedBox3 = false;
        _this.selectedBox4 = false;
    },
    changeFrame2: function () {
        _this.Box2_2.frame = 1;
        _this.Box2_1.frame = 0;
        _this.Box2_3.frame = 0;
        _this.Box2_4.frame = 0;

        _this.selectedBox2 = true;
        _this.selectedBox1 = false;
        _this.selectedBox3 = false;
        _this.selectedBox4 = false;
    },
    changeFrame3: function () {
        _this.Box2_3.frame = 1;
        _this.Box2_1.frame = 0;
        _this.Box2_2.frame = 0;
        _this.Box2_4.frame = 0;

        _this.selectedBox3 = true;
        _this.selectedBox1 = false;
        _this.selectedBox2 = false;
        _this.selectedBox4 = false;
    },
    changeFrame4: function () {
        _this.Box2_4.frame = 1;
        _this.Box2_1.frame = 0;
        _this.Box2_2.frame = 0;
        _this.Box2_3.frame = 0;

        _this.selectedBox4 = true;
        _this.selectedBox1 = false;
        _this.selectedBox2 = false;
        _this.selectedBox3 = false;
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
        // console.log("plusSignBlue");
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
        // if (_this.count1 < 3) {
        _this.tick.destroy();
        _this.Box2_1.destroy();
        _this.Box2_2.destroy();
        _this.Box2_3.destroy();
        _this.Box2_4.destroy();
        _this.panel_1.destroy();
        if (_this.count1 < 3) {
            _this.panelObject.destroy();
        }
        _this.pauseVoice();
        // }

        _this.count1++;
        if (_this.count1 == 3) {
            _this.speakerbtn.inputEnabled = false;
        }
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
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        // _this.count1++;
        anim.play();

        //edited for baseurl apk //for api
        _this.microConcepts = "GeometryG8";
    },
    shutdown: function () {
        _this.stopVoice();
    },
    stopAudio: function () {
        //* clear all the timers first
        if (_this.square1Timer) clearTimeout(_this.square1Timer);
        if (_this.square2Timer) clearTimeout(_this.square2Timer);
        if (_this.square3Timer) clearTimeout(_this.square3Timer);
        if (_this.q1Timer) clearTimeout(_this.q1Timer);

        if (_this.q1Sound) {
            //console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }


        if (_this.panel) _this.panel.destroy();
        if (_this.square_1) _this.square_1.destroy();
        if (_this.square_2) _this.square_2.destroy();
        if (_this.square_3) _this.square_3.destroy();
        if (_this.arrow_1) _this.arrow_1.destroy();
        if (_this.arrow_2) _this.arrow_2.destroy();
        if (_this.arrow_3) _this.arrow_3.destroy();
        if (_this.panel) _this.panel.destroy();
        if (_this.background_demo) _this.background_demo.destroy();

        _this.Question_flag = 2;
        _this.speakerbtn.inputEnabled = true;

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },
    DemoVideo: function () {

        //* Drag the strips and square pieces onto the grid to represent the given decimal number.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/GMSS-01-G8/" +
            _this.languageSelected + "/GMSS_01_G8_d1.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 350, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.stopAudio();

            if (_this.hintBtn) {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;  //* restart the game
        });
    },
    showDemoVideo: function () {

        _this.pauseVoice();


        _this.background_demo = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'BG1');

        _this.q1Sound.play();
        _this.speakerbtn.inputEnabled = false;
        _this.panel = _this.add.image(50, 75, 'box_panel');
        _this.square_1 = _this.add.image(170, 200, 'square_box_1');
        _this.arrow_1 = _this.add.image(220, 130, 'arrow_1');

        _this.square1Timer = setTimeout(function ()    //* da1 js timer to play square1Timer after 4 seconds.
        {
            _this.square_1.destroy();
            _this.arrow_1.destroy();
            _this.square_2 = _this.add.image(170, 200, 'square_box_2');
            _this.arrow_2 = _this.add.image(290, 270, 'arrow_2');

        }, 2500);

        _this.square2Timer = setTimeout(function ()    //* q2 js timer to play square2Timer after 27 seconds.
        {
            _this.square_2.destroy();
            _this.arrow_2.destroy();
            _this.square_3 = _this.add.image(170, 200, 'square_box_3');
            _this.arrow_3 = _this.add.image(90, 270, 'arrow_3');
        }, 5000);

        _this.square3Timer = setTimeout(function ()    //* q3 js timer to play square3Timer after 47 seconds.
        {
            _this.square_3.destroy();
            _this.arrow_3.destroy();
            _this.panel.destroy();
            _this.background_demo.destroy();
            _this.Question_flag = 2;
            _this.speakerbtn.inputEnabled = true;

            _this.stopAudio();

            if (_this.hintBtn) {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;
        }, 9000);

    }
}