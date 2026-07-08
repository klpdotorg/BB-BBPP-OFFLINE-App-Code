Game.GMSS_03_G8level1 = function () { };

Game.GMSS_03_G8level1.prototype = {
  init: function (param, score) {
    _this = this;
    this.Stararr = param;
    this.score = score;
    _this = this;
    _this.languageSelected = window.languageSelected;

    if (
      _this.languageSelected == null ||
      _this.languageSelected == " " ||
      _this.languageSelected == ""
    ) {
      _this.languageSelected = "Odiya";
    } 
    else console.log("Language selected: " + _this.languageSelected);
    _this.clickSound = document.createElement("audio");
    _this.clickSoundsrc = document.createElement("source");
    _this.clickSoundsrc.setAttribute("src", window.baseUrl + "sounds/ClickSound.mp3");
    _this.clickSound.appendChild(_this.clickSoundsrc);

    _this.celebrationSound = document.createElement("audio");
    _this.celebrationSoundsrc = document.createElement("source");
    _this.celebrationSoundsrc.setAttribute("src", window.baseUrl + "sounds/celebration.mp3");
    _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

    _this.counterCelebrationSound = document.createElement("audio");
    _this.counterCelebrationSoundsrc = document.createElement("source");
    _this.counterCelebrationSoundsrc.setAttribute(
      "src",
      window.baseUrl + "sounds/counter_celebration.mp3"
    );
    _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

    _this.wrongSound = document.createElement("audio");
    _this.wrongSoundsrc = document.createElement("source");
    _this.wrongSoundsrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
    _this.wrongSound.appendChild(_this.wrongSoundsrc);

    _this.Ask_Question1 = _this.createAudio("GMSS_03_G8_a1");
    _this.Ask_Question2 = _this.createAudio("GMSS_03_G8_a2");
    _this.Ask_Question3 = _this.createAudio("GMSS_03_G8_a3");
    _this.Ask_Question4 = _this.createAudio("GMSS_03_G8_a4");

    telInitializerbbpp.gameIdInit("GMSS_03_G8", gradeSelected);
    console.log(gameID, "gameID...");
  },

  create: function (game) {
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
    _this.noofAttempts = 0;
    _this.AnsTimerCount = 0;
    _this.sceneCount = 0;
    _this.questionid = null;
    _this.numberOfQuestions = 0;
    _this.speakerbtn;
    _this.background;
    _this.count = 0;
    _this.starsGroup;
    _this.AnswerBox;
    _this.seconds = 0;
    _this.minutes = 0;
    _this.Question_flag = 0;

    _this.count1 = 0;

    _this.counterForTimer = 0;

    _this.partACount = 0;

    _this.selectedAns1 = "";
    _this.selectedAns2 = "";

    _this.shapesArray = [];
    _this.shapeCount = 0;
    _this.goSet_flag1 = 0;
    _this.goSet_flag2 = 0;
    _this.goSet_flag3 = 0;
    _this.goSet_flag4 = 0;
    _this.goSet_flag5 = 0;
    _this.goSet_flag6 = 0;
    _this.Shape7_Flag = 0;

    //*part B variables
    _this.partBCount = 0;
    _this.setArray = [1, 2, 3, 4, 5, 6]; //,2,3,4,5,6
    _this.shuffleArray(_this.setArray);
    ///////////////////
    _this.selectedBox1 = false;
    _this.selectedBox2 = false;
    _this.selectedBox3 = false;
    _this.selectedBox4 = false;

    _this.right = false;
    _this.wrong = false;

    _this.speakerbtnClicked = false;
    _this.rightbtn_Clicked = false;

    //* GMSS-03 - part A
    _this.tdChoiceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    _this.shuffleArray(_this.tdChoiceArray);
    _this.tdShapesArray = [
      "VpinkTriangle",
      "HpinkTriangle",
      "Hprism",
      "Vprism",
      "Vcone",
      "Hcone",
      "cube",
      "VblueTriangle",
      "Vcylinder",
      "Hcylinder",
      "cuboid",
    ];
    _this.fArray = [5, 5, 5, 5, 2, 2, 6, 4, 3, 3, 6];
    _this.eArray = [8, 8, 9, 9, 1, 1, 12, 6, 2, 2, 12];
    _this.vArray = [5, 5, 6, 6, 1, 1, 8, 4, 0, 0, 8];

    _this.xPosArray = [100, 100, 150, 100, 130, 120, 130, 85, 155, 130, 100];
    _this.yPosArray = [175, 165, 175, 195, 175, 195, 200, 160, 180, 205, 220];

    // _this.xPosArray = [100, 100, 150, 100, 130, 120, 130, 110, 155, 130, 100];
    // _this.yPosArray = [175, 165, 175, 195, 175, 195, 200, 175, 180, 205, 220];

    _this.vertices = false;
    ///////////////////////////////////////////
    _this.background = _this.add.tileSprite(
      0,
      0,
      _this.world.width,
      _this.world.height,
      "BG1"
    );
    console.log(_this.world.width, " _this.world.width");
    console.log(_this.world.height, " _this.world.height");
    //** include the background file, navigation bar, stars, timer objects.
    _this.navBar = _this.add.sprite(0, 0, "navBar");

    _this.backbtn = _this.add.sprite(5, 6, "backbtn");
    _this.backbtn.inputEnabled = true;
    _this.backbtn.input.useHandCursor = true;
    _this.backbtn.events.onInputDown.add(function () {
      _this.state.start('grade8Geometry', true, false);
    });

    _this.speakerbtn = _this.add.sprite(600, 6, "CommonSpeakerBtn");

    _this.speakerbtn.events.onInputDown.add(function () {
      telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
      if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
        _this.speakerbtn.inputEnabled = false;
        _this.speakerbtn.input.useHandCursor = false;
        _this.clickSound.play();

        if (_this.Question_flag == 1) {
          _this.Ask_Question1.play();
        }
        if (_this.Question_flag == 2) {
          _this.Ask_Question2.play();
        }
        if (_this.Question_flag == 3) {
          _this.Ask_Question3.play();
        }
        if (_this.Question_flag == 4) {
          _this.Ask_Question4.play();
        }
        _this.time.events.add(4000, function () {
          _this.speakerbtnClicked = false;
          _this.EnableVoice();
        });
      }
    }, _this);

    _this.timebg = _this.add.sprite(305, 6, "timebg");
    _this.timeDisplay = _this.add.text(
      330,
      22,
      _this.minutes + " : " + _this.seconds
    );
    _this.timeDisplay.anchor.setTo(0.5);
    _this.timeDisplay.align = "center";
    _this.timeDisplay.font = "Oh Whale";
    _this.timeDisplay.fontSize = 20;
    _this.timeDisplay.fill = "#ADFF2F";

    //bulb
    // _this.hintBtn = _this.add.sprite(670, 6, "bulb");
    // _this.hintBtn.scale.setTo(0.5, 0.6);
    // _this.hintBtn.smoothed = false;
    // _this.hintBtnAnim = _this.hintBtn.animations.add("hint");
    // _this.hintBtnAnim.play(15);
    // _this.hintBtnAnim.onComplete.add(function () {
    //   _this.hintBtnAnim.play(15);
    // }, _this);
    // _this.hintBtn.inputEnabled = true;
    // _this.hintBtn.input.useHandCursor = true;

    // _this.hintBtn.events.onInputDown.add(function () {
    //   //console.log("inside hintbutton function");
    //   //* show the demo video
    //   _this.hintBtn.inputEnabled = false;
    //   _this.hintBtn.input.useHandCursor = false;
    //   _this.time.events.add(1, function () {
    //     //console.log(_this.hintBtn.inputEnabled, "status of hintBtn");
    //     _this.ViewDemoVideo();
    //   });
    // });

    _this.generateStarsForTheScene(6);

    //* include variables for use - objGroup (where egg objects can be added)
    _this.objGroup;
    _this.numGroup;

    //* start the game with first question
    _this.time.events.add(1000, _this.getQuestion);
  },
  createAudio: function (src) {
    audio = document.createElement("audio");
    audiosrc = document.createElement("source");
    audiosrc.setAttribute(
      "src",
      window.baseUrl + "questionSounds/GMSS-03-G8/" + _this.languageSelected + "/" + src + ".mp3"
    );
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
      } else {
        _this.minutes = _this.minutes + 1;
      }
    } else {
      if (_this.counterForTimer < 10)
        _this.seconds = "0" + _this.counterForTimer;
      else _this.seconds = _this.counterForTimer;
    }
    _this.timeDisplay.setText(_this.minutes + ":" + _this.seconds);
  },
  generateStarsForTheScene: function (count) {
    _this.starsGroup = _this.add.group();
    for (var i = 0; i < count; i++) {
      _this.starsGroup.create(_this.world.centerX - 15, 10, "starAnim");
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
    _this.timer.loop(
      1000,
      function () {
        _this.AnsTimerCount++;
      },
      _this
    );

    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    _this.timer.start();

    /*******************For Navigation Bar*********************/
    _this.timer1 = _this.time.create(false);

    _this.timer1.loop(
      1000,
      function () {
        _this.updateTimer();
      },
      _this
    );

    _this.timer1.start();

    /************************$$$$$$$$$$**********************/

    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.

    _this.speakerbtn.inputEnabled = true;
    _this.speakerbtn.input.useHandCursor = true;

    _this.QuestionArray = [1, 1, 1, 2, 2, 2];

    // _this.numbers = [1, 2, 3, 4, 5, 6, 7];//[1, 2, 3, 4, 5, 6, 7];
    // Phaser.ArrayUtils.shuffle(_this.numbers);
    // console.log(_this.numbers, "_this.numbers ");

    // _this.numbers1 = [1, 2, 3, 4, 5];//[1, 2, 3, 4, 5];//shape list
    // Phaser.ArrayUtils.shuffle(_this.numbers1);

    _this.correctOp_count = [1]; //correct answer count
    Phaser.ArrayUtils.shuffle(_this.correctOp_count);

    _this.InitialScreen();
    _this.questionid = 1;
    // _this.InitialScreenPart2();
  },
  stopVoice: function () {
    _this.Ask_Question1.pause();
    _this.Ask_Question1 = null;

    _this.Ask_Question2.pause();
    _this.Ask_Question2 = null;

    _this.Ask_Question3.pause();
    _this.Ask_Question3 = null;

    _this.Ask_Question4.pause();
    _this.Ask_Question4 = null;

    if (_this.celebrationSound) {
      if (_this.celebrationSound.isPlaying) {
        _this.celebrationSound.stop();
        _this.celebrationSound = null;
      }
    }
  },
  //*Chooses Part A and B according to the question count
  NextQuestion: function () {
    _this.sceneCount++;
    console.log("next question.......");
    _this.count1++;
    if (_this.numberOfQuestions == 3) _this.count1 = 0;
    if (_this.numberOfQuestions < 3) {
      _this.InitialScreen(); //PartA
    } else if (_this.numberOfQuestions < 6) {
      _this.partBCount++;
      _this.InitialScreenPart2(); //PartA
    } else {
      _this.partBCount = 0;
      _this.timer1.stop();
      _this.timer1 = null;
      _this.time.events.add(1000, function () {
        _this.state.start('score', true, false, gameID, _this.microConcepts);
      });
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
  //* this function displays the Part A inital screen
  InitialScreen: function () {
    _this.clearArray = [];
    console.log("InitialScreen ...");

    _this.Question_flag = 1;
    if (_this.count1 === 0) {
      _this.Ask_Question1.play();
    }
    console.log("AskingQuestion");

    _this.Box1 = _this.add.sprite(20, 70, "Box_3");
    _this.Box1.scale.setTo(1, 0.9);
    _this.clearArray.push(_this.Box1);

    _this.threeDShape = _this.add.image(
      _this.xPosArray[_this.tdChoiceArray[_this.count1]],
      _this.yPosArray[_this.tdChoiceArray[_this.count1]],
      _this.tdShapesArray[_this.tdChoiceArray[_this.count1]]
    );
    if (
      _this.tdShapesArray[_this.tdChoiceArray[_this.count1]] == "VblueTriangle"
    )
      _this.threeDShape.scale.setTo(0.6, 0.6);
    _this.addNumberPad();
    _this.clearArray.push(_this.threeDShape);

    console.log(
      _this.tdChoiceArray[_this.count1],
      "_this.tdChoiceArray[_this.count1]"
    );
    console.log(
      _this.tdShapesArray[_this.tdChoiceArray[_this.count1]],
      "Shape"
    );
    console.log(_this.fArray[_this.tdChoiceArray[_this.count1]], "fArray");
    console.log(_this.eArray[_this.tdChoiceArray[_this.count1]], "eArray");
    console.log(_this.vArray[_this.tdChoiceArray[_this.count1]], "vArray");

    _this.AnswerBox = _this.add.image(550, 100, "txt1");
    _this.clearArray.push(_this.AnswerBox);
    _this.txt2Bx = _this.add.image(550, 200, "txt2");
    _this.txt3Bx = _this.add.image(550, 300, "txt2");

    _this.txt1 = _this.add.text(600, 125, "F" + " " + "=");
    _this.applyingStyle(_this.txt1);
    _this.clearArray.push(_this.txt1);
    _this.txt2 = _this.add.text(600, 225, "E" + " " + "=");
    _this.applyingStyle(_this.txt2);
    _this.txt3 = _this.add.text(600, 325, "V" + " " + "=");
    _this.applyingStyle(_this.txt3);

    _this.f_flag = 1;
  },

  addNumberPad: function () {
    _this.Choice = 1;
    _this.objGroup = _this.add.group();
    _this.numGroup = _this.add.group();

    var bottomnumpadbg = _this.numGroup.create(0, 515, "numpadbg");
    bottomnumpadbg.scale.setTo(1, 1);

    bottomnumpadbg.name = "numpadbg";

    _this.x = 70;
    // set the number pad invisible initially. only after tweening it is made visible
    _this.numGroup.visible = false;

    for (var i = 0; i < 10; i++) {
      _this.numbg = _this.numGroup.create(_this.x, 552, "Numberpad");
      _this.numbg.anchor.setTo(0.5);
      _this.numbg.scale.setTo(0.8, 0.8);
      _this.numbg.name = i + 1;
      _this.numbg.frame = i;

      _this.numbg.inputEnabled = true;
      _this.numbg.input.useHandCursor = true;
      _this.numbg.events.onInputDown.add(_this.numClicked, _this);

      _this.x += 73;
    }
    _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, "Numberpad");
    _this.wrongbtn.frame = 10;
    _this.wrongbtn.anchor.setTo(0.5);
    _this.wrongbtn.scale.setTo(0.8, 0.8);
    _this.wrongbtn.name = "wrongbtn";
    _this.wrongbtn.inputEnabled = true;
    _this.wrongbtn.input.useHandCursor = true;
    _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

    _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, "Numberpad");
    _this.rightbtn.frame = 11;
    _this.rightbtn.anchor.setTo(0.5);
    _this.rightbtn.scale.setTo(0.8, 0.8);
    _this.rightbtn.name = "rightbtn";
    _this.rightbtn.inputEnabled = true;
    _this.rightbtn.input.useHandCursor = true;
    _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked1, _this);

    _this.enterTxt = _this.add.text(-100, 8, "");
    _this.enterTxt.anchor.setTo(0.5);
    _this.enterTxt.align = "center";
    _this.enterTxt.font = "Akzidenz-Grotesk BQ";
    _this.enterTxt.fontSize = "30px";
    _this.enterTxt.fontWeight = "normal";
    _this.enterTxt.fill = "#65B4C3";

    _this.numpadTween = _this.add.tween(_this.numGroup);
    //_this.AnswerBox.visible=true;
    //tween in the number pad after a second.
    _this.tweenNumPad();
  },

  numClicked: function (target) {
    console.log(target.name);
    if (
      _this.vArray[_this.tdChoiceArray[_this.count1]] == 0 &&
      _this.v_flag == 1
    )
      _this.vertices = true;

    if (_this.selectedAns2 === "") {
      if (_this.selectedAns1 === 0 && target.name !== 0) {
        _this.selectedAns2 = target.name;
      } else if (_this.selectedAns1 !== "" && _this.selectedAns1 !== 0) {
        _this.selectedAns2 = target.name;
      } else if (_this.selectedAns1 !== 0 && target.name == 10) {
        _this.selectedAns1 = 0;
      } else {
        _this.selectedAns1 = target.name;
      }
    }

    _this.AnswerBox.removeChild(_this.enterTxt);
    _this.enterTxt.visible = false;

    if (_this.selectedAns1 === 10) var_selectedAns1 = 0;
    else var_selectedAns1 = _this.selectedAns1;
    if (_this.selectedAns2 === 10) _this.selectedAns2 = 0;
    else var_selectedAns2 = _this.selectedAns2;

    if (_this.selectedAns1 === "") var_selectedAns1 = " ";
    else var_selectedAns1 = _this.selectedAns1;

    if (_this.selectedAns2 === "") var_selectedAns2 = " ";
    else var_selectedAns2 = _this.selectedAns2;

    if (_this.selectedAns2 === "")
      _this.enterTxt = _this.add.text(
        145,
        20,
        "" + var_selectedAns1 + var_selectedAns2,
        { fontSize: "30px" }
      );
    else
      _this.enterTxt = _this.add.text(
        140,
        20,
        "" + var_selectedAns1 + var_selectedAns2,
        { fontSize: "30px" }
      );
    _this.enterTxt.align = "right";
    _this.enterTxt.font = "Akzidenz-Grotesk BQ";
    _this.enterTxt.fill = "#65B4C3";
    _this.enterTxt.fontWeight = "normal";
    _this.AnswerBox.addChild(_this.enterTxt);
    _this.enterTxt.visible = true;
    console.log(_this.selectedAns1, _this.selectedAns2);
    _this.AnswerBox.name = Number("" + var_selectedAns1 + var_selectedAns2);
    console.log(_this.AnswerBox.name);
  },

  wrongbtnClicked: function (target) {
    if (
      _this.vArray[_this.tdChoiceArray[_this.count1]] == 0 &&
      _this.v_flag == 1
    )
      _this.vertices = false;
    _this.clickSound.play();
    _this.eraseScreen();
  },

  eraseScreen: function (target) {
    _this.selectedAns1 = "";
    _this.selectedAns2 = "";
    _this.AnswerBox.removeChild(_this.enterTxt);

    _this.enterTxt.destroy();
    _this.enterTxt;
    _this.enterTxt.text = "";
    // _this.AnswerBox.name = '';
  },
  //* Validation for part A
  rightbtnClicked1: function (target) {
    console.log(target.name);
    console.log("inside rightbtn");
    _this.clickSound.play();
    // _this.draggedPurpleGroup = _this.add.group();
    if (_this.f_flag == 1) {
      if (
        Number("" + _this.selectedAns1 + _this.selectedAns2) ==
        _this.fArray[_this.tdChoiceArray[_this.count1]]
      ) {
        // _this.celebrationSound.play();
        console.log("Faces");
        _this.counterCelebrationSound.play();
        _this.fAnswer = _this.add.text(
          695,
          120,
          _this.fArray[_this.tdChoiceArray[_this.count1]]
        );
        _this.applyingStyle1(_this.fAnswer);
        _this.clearArray.push(_this.fAnswer);
        _this.AnswerBox = _this.add.image(550, 200, "txt1");
        _this.clearArray.push(_this.AnswerBox);
        _this.txt21 = _this.add.text(600, 225, "E" + " " + "=");
        _this.clearArray.push(_this.txt21);
        _this.applyingStyle(_this.txt21);
        _this.txt2.destroy();
        _this.txt2Bx.destroy();
        _this.eraseScreen();

        _this.Question_flag = 2;
        _this.time.events.add(1500, function () {
          if (_this.count1 === 0) {
            _this.Ask_Question2.play();
          }
        });

        _this.f_flag = 0;
        _this.e_flag = 1;
      } else {
        _this.noofAttempts++;
        // _this.Question_flag = 0;
        _this.wrongSound.play();
        _this.eraseScreen();
      }
    } else if (_this.e_flag == 1) {
      //console.log("Edges");
      if (
        Number("" + _this.selectedAns1 + _this.selectedAns2) ==
        _this.eArray[_this.tdChoiceArray[_this.count1]]
      ) {
        console.log("Edges");
        _this.counterCelebrationSound.play();
        if (_this.eArray[_this.tdChoiceArray[_this.count1]] > 9) {
          _this.x = 690;
        } else {
          _this.x = 695;
        }
        _this.eAnswer = _this.add.text(
          _this.x,
          220,
          _this.eArray[_this.tdChoiceArray[_this.count1]]
        );
        _this.applyingStyle1(_this.eAnswer);
        _this.clearArray.push(_this.eAnswer);
        _this.AnswerBox = _this.add.image(550, 300, "txt1");
        _this.clearArray.push(_this.AnswerBox);
        _this.txt31 = _this.add.text(600, 325, "V" + " " + "=");
        _this.clearArray.push(_this.txt31);
        _this.applyingStyle(_this.txt31);
        _this.txt3.destroy();
        _this.txt3Bx.destroy();
        _this.eraseScreen();
        //   _this.clearScreen();
        _this.Question_flag = 3;
        _this.time.events.add(1500, function () {
          if (_this.count1 === 0) {
            _this.Ask_Question3.play();
          }
        });
        // _this.f_flag = 0;
        _this.e_flag = 0;
        if (_this.vArray[_this.tdChoiceArray[_this.count1]] == 0)
          _this.v_flag = 1;
      } else {
        _this.noofAttempts++;
        // _this.Question_flag = 0;
        _this.wrongSound.play();
        _this.eraseScreen();
      }
    } else {
      if (_this.vArray[_this.tdChoiceArray[_this.count1]] == 0) {
        console.log("Zero VVVV");
        if (
          Number("" + _this.selectedAns1 + _this.selectedAns2) ==
          _this.vArray[_this.tdChoiceArray[_this.count1]] &&
          _this.vertices == true
        ) {
          console.log("Vertices 0");
          _this.celebrationSound.play();
          _this.numGroup.destroy();
          _this.numpad = 0;
          _this.noofAttempts++;
          telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
          _this.starActions();
          _this.vertices = false;
          _this.v_flag = 0;
          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.time.events.add(2000, () => {
            _this.clearScreen();
            _this.eraseScreen();
            if (_this.AnswerBox) _this.AnswerBox.destroy();
            _this.NextQuestion();
          });
        } else {
          if (
            _this.vArray[_this.tdChoiceArray[_this.count1]] == 0 &&
            _this.v_flag == 1
          )
            _this.vertices = false;
          _this.noofAttempts++;
          _this.wrongSound.play();
          _this.eraseScreen();
        }
      } else if (
        Number("" + _this.selectedAns1 + _this.selectedAns2) ==
        _this.vArray[_this.tdChoiceArray[_this.count1]]
      ) {
        console.log("Vertices");
        _this.celebrationSound.play();
        _this.numGroup.destroy();
        _this.numpad = 0;
        _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
        _this.starActions();
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.time.events.add(2000, () => {
          _this.clearScreen();
          _this.eraseScreen();
          if (_this.AnswerBox) _this.AnswerBox.destroy();
          _this.NextQuestion();
        });
      } else {
        _this.noofAttempts++;
        // _this.Question_flag = 0;
        _this.wrongSound.play();
        _this.eraseScreen();
      }
    }
  },

  tweenNumPad: function () {
    _this.numGroup.visible = true;
    _this.numpadTween.to({ x: 0, y: -43 }, 1000, "Linear", true, 0);
  }, //fontSize: '30px'

  applyingStyle1: function (target) {
    target.align = "right";
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#65B4C3";
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "30px";
  },

  applyingStyle: function (target) {
    target.align = "right";
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#65B4C3";
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "21px";
  },

  clearScreen: function () {
    _this.clearArray.forEach((element) => {
      element.destroy();
    });
  },

  //*These functions are used to change the frame of the option boxes
  changeFrame1: function () {
    _this.box1.frame = 1;
    _this.box2.frame = 0;
    _this.box3.frame = 0;
    // _this.box4.frame = 0;

    _this.selectedBox1 = true;
    _this.selectedBox2 = false;
    _this.selectedBox3 = false;
    // _this.selectedBox4 = false;

    _this.box1.name = _this.option1.name;
    _this.box2.name = "";
    _this.box3.name = "";

    console.log(_this.box1.name, "  _this.box1.name");
  },

  changeFrame2: function () {
    _this.box2.frame = 1;
    _this.box1.frame = 0;
    _this.box3.frame = 0;
    // _this.Box2_4.frame = 0;

    _this.selectedBox2 = true;
    _this.selectedBox1 = false;
    _this.selectedBox3 = false;
    //  _this.selectedBox4 = false;

    _this.box1.name = "";
    _this.box2.name = _this.option2.name;
    _this.box3.name = "";
    console.log(_this.box2.name, "  _this.box2.name");
  },

  changeFrame3: function () {
    _this.box3.frame = 1;
    _this.box2.frame = 0;
    _this.box1.frame = 0;

    _this.selectedBox3 = true;
    _this.selectedBox1 = false;
    _this.selectedBox2 = false;

    _this.box1.name = "";
    _this.box2.name = "";
    _this.box3.name = _this.option3.name;
    console.log(_this.box3.name, "  _this.box3.name");
  },
  //* getThePositionValues1 this function is used to get the x,y value of the option objects in part B
  getThePositionValues1: function () {
    //* for First box
    switch (_this.theImage1) {
      case "obj1":
        _this.x1 = 465;
        _this.y1 = 125;
        break;
      case "obj2":
        _this.x1 = 470;
        _this.y1 = 130;
        break;
      case "obj3":
        _this.x1 = 485;
        _this.y1 = 125;
        break;
      case "obj4":
        _this.x1 = 500;
        _this.y1 = 140;
        break;
      case "obj5":
        _this.x1 = 510;
        _this.y1 = 130;
        break;
      case "obj6":
        _this.x1 = 510;
        _this.y1 = 115;
        break;
      case "obj7":
        _this.x1 = 450;
        _this.y1 = 155;
        break;
      case "obj8":
        _this.x1 = 455;
        _this.y1 = 110;
        break;
      case "obj9":
        _this.x1 = 510;
        _this.y1 = 115;
        break;
      case "obj10":
        _this.x1 = 470;
        _this.y1 = 135;
        break;
      case "obj11":
        _this.x1 = 455;
        _this.y1 = 130;
        break;
      case "obj12":
        _this.x1 = 485;
        _this.y1 = 120;
        break;
      case "obj13":
        _this.x1 = 505;
        _this.y1 = 100;
        break;
      case "obj14":
        _this.x1 = 490;
        _this.y1 = 110;
        break;
      case "obj15":
        _this.x1 = 490;
        _this.y1 = 130;
        break;
      case "obj16":
        _this.x1 = 500;
        _this.y1 = 125;
        break;
      case "obj17":
        _this.x1 = 495;
        _this.y1 = 130;
        break;
    }
  },

  getThePositionValues2: function () {
    //*Second box right top
    switch (_this.theImage2) {
      case "obj1":
        _this.x2 = 680;
        _this.y2 = 125;
        break;
      case "obj2":
        _this.x2 = 690;
        _this.y2 = 130;
        break;
      case "obj3":
        _this.x2 = 710;
        _this.y2 = 125;
        break;
      case "obj4":
        _this.x2 = 720;
        _this.y2 = 140;
        break;
      case "obj5":
        _this.x2 = 730;
        _this.y2 = 130;
        break;
      case "obj6":
        _this.x2 = 730;
        _this.y2 = 115;
        break;
      case "obj7":
        _this.x2 = 670;
        _this.y2 = 155;
        break;
      case "obj8":
        _this.x2 = 680;
        _this.y2 = 110;
        break;
      case "obj9":
        _this.x2 = 730;
        _this.y2 = 115;
        break;
      case "obj10":
        _this.x2 = 690;
        _this.y2 = 135;
        break;
      case "obj11":
        _this.x2 = 675;
        _this.y2 = 130;
        break;
      case "obj12":
        _this.x2 = 700;
        _this.y2 = 120;
        break;
      case "obj13":
        _this.x2 = 725;
        _this.y2 = 100;
        break;
      case "obj14":
        _this.x2 = 710;
        _this.y2 = 110;
        break;
      case "obj15":
        _this.x2 = 710;
        _this.y2 = 130;
        break;
      case "obj16":
        _this.x2 = 720;
        _this.y2 = 125;
        break;
      case "obj17":
        _this.x2 = 715;
        _this.y2 = 130;
        break;
    }
  },

  getThePositionValues3: function () {
    //* third box bottom left
    switch (_this.theImage3) {
      case "obj1":
        _this.x3 = 465;
        _this.y3 = 345;
        break;
      case "obj2":
        _this.x3 = 470;
        _this.y3 = 350;
        break;
      case "obj3":
        _this.x3 = 485;
        _this.y3 = 350;
        break;
      case "obj4":
        _this.x3 = 500;
        _this.y3 = 360;
        break;
      case "obj5":
        _this.x3 = 510;
        _this.y3 = 360;
        break;
      case "obj6":
        _this.x3 = 510;
        _this.y3 = 340;
        break;
      case "obj7":
        _this.x3 = 450;
        _this.y3 = 370;
        break;
      case "obj8":
        _this.x3 = 455;
        _this.y3 = 340;
        break;
      case "obj9":
        _this.x3 = 510;
        _this.y3 = 340;
        break;
      case "obj10":
        _this.x3 = 470;
        _this.y3 = 360;
        break;
      case "obj11":
        _this.x3 = 455;
        _this.y3 = 350;
        break;
      case "obj12":
        _this.x3 = 485;
        _this.y3 = 340;
        break;
      case "obj13":
        _this.x3 = 505;
        _this.y3 = 330;
        break;
      case "obj14":
        _this.x3 = 490;
        _this.y3 = 330;
        break;
      case "obj15":
        _this.x3 = 490;
        _this.y3 = 350;
        break;
      case "obj16":
        _this.x3 = 500;
        _this.y3 = 350;
        break;
      case "obj17":
        _this.x3 = 495;
        _this.y3 = 350;
        break;
    }
  },

  getThePositionValues4: function () {
    //*4th Box  bottom right
    switch (_this.theImage4) {
      case "obj1":
        _this.x4 = 680;
        _this.y4 = 345;
        break;
      case "obj2":
        _this.x4 = 690;
        _this.y4 = 350;
        break;
      case "obj3":
        _this.x4 = 710;
        _this.y4 = 350;
        break;
      case "obj4":
        _this.x4 = 720;
        _this.y4 = 360;
        break;
      case "obj5":
        _this.x4 = 730;
        _this.y4 = 360;
        break;
      case "obj6":
        _this.x4 = 730;
        _this.y4 = 340;
        break;
      case "obj7":
        _this.x4 = 670;
        _this.y4 = 370;
        break;
      case "obj8":
        _this.x4 = 680;
        _this.y4 = 340;
        break;
      case "obj9":
        _this.x4 = 730;
        _this.y4 = 340;
        break;
      case "obj10":
        _this.x4 = 690;
        _this.y4 = 360;
        break;
      case "obj11":
        _this.x4 = 675;
        _this.y4 = 350;
        break;
      case "obj12":
        _this.x4 = 700;
        _this.y4 = 340;
        break;
      case "obj13":
        _this.x4 = 725;
        _this.y4 = 330;
        break;
      case "obj14":
        _this.x4 = 710;
        _this.y4 = 330;
        break;
      case "obj15":
        _this.x4 = 710;
        _this.y4 = 350;
        break;
      case "obj16":
        _this.x4 = 720;
        _this.y4 = 350;
        break;
      case "obj17":
        _this.x4 = 715;
        _this.y4 = 350;
        break;
    }
  },
  //* This function displays the initial screen for part B
  InitialScreenPart2: function () {
    _this.clearArray = [];
    _this.Question_flag = 4;
    if (_this.numberOfQuestions === 3) {
      _this.Ask_Question4.play();
    }
    console.log("AskingQuestion 2");

    _this.tick = _this.add.sprite(880, 455, "TickBtn");
    _this.clearArray.push(_this.tick);

    _this.Box1 = _this.add.sprite(30, 70, "Box1");
    _this.clearArray.push(_this.Box1);

    _this.Box2_1 = _this.add.sprite(440, 70, "Box2");
    _this.clearArray.push(_this.Box2_1);
    _this.Box2_2 = _this.add.sprite(660, 70, "Box2");
    _this.clearArray.push(_this.Box2_2);
    _this.Box2_3 = _this.add.sprite(440, 295, "Box2");
    _this.clearArray.push(_this.Box2_3);
    _this.Box2_4 = _this.add.sprite(660, 295, "Box2");
    _this.clearArray.push(_this.Box2_4);

    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);

    _this.Box2_1.inputEnabled = true;
    _this.Box2_1.input.useHandCursor = true;
    _this.Box2_1.events.onInputDown.add(_this.changeFrame11, _this);

    _this.Box2_2.inputEnabled = true;
    _this.Box2_2.input.useHandCursor = true;
    _this.Box2_2.events.onInputDown.add(_this.changeFrame12, _this);

    _this.Box2_3.inputEnabled = true;
    _this.Box2_3.input.useHandCursor = true;
    _this.Box2_3.events.onInputDown.add(_this.changeFrame13, _this);

    _this.Box2_4.inputEnabled = true;
    _this.Box2_4.input.useHandCursor = true;
    _this.Box2_4.events.onInputDown.add(_this.changeFrame14, _this);

    _this.txt1Bx = _this.add.image(100, 160, "txt2");
    _this.clearArray.push(_this.txt1Bx);
    _this.txt2Bx = _this.add.image(100, 250, "txt2");
    _this.clearArray.push(_this.txt2Bx);
    _this.txt3Bx = _this.add.image(100, 340, "txt2");
    _this.clearArray.push(_this.txt3Bx);

    _this.fText = _this.add.text(140, 185, "F" + " " + "=");
    _this.applyingStyle(_this.fText);
    _this.clearArray.push(_this.fText);
    _this.eText = _this.add.text(140, 275, "E" + " " + "=");
    _this.applyingStyle(_this.eText);
    _this.clearArray.push(_this.eText);
    _this.vText = _this.add.text(140, 365, "V" + " " + "=");
    _this.applyingStyle(_this.vText);
    _this.clearArray.push(_this.vText);

    // _this.partBCount = 0;
    // _this.setArray = [1, 2, 3, 4, 5, 6];//,2,3,4,5,6
    // _this.shuffleArray(_this.setArray);
    switch (_this.setArray[_this.partBCount]) {
      case 1:
        _this.goSet1();
        break;
      case 2:
        _this.goSet2();
        break;
      case 3:
        _this.goSet3();
        break;
      case 4:
        _this.goSet4();
        break;
      case 5:
        _this.goSet5();
        break;
      case 6:
        _this.goSet6();
        break;
    }
  },
  //* Displays first set for the objects
  goSet1: function () {
    console.log("squareee");
    _this.QNo = 1; //Question number
    _this.goSet_flag1 = 1;

    _this.fNumber = _this.add.text(250, 185, 5);
    _this.applyingStyle(_this.fNumber);
    _this.clearArray.push(_this.fNumber);
    _this.eNumber = _this.add.text(250, 275, 8);
    _this.applyingStyle(_this.eNumber);
    _this.clearArray.push(_this.eNumber);
    _this.vNumber = _this.add.text(250, 365, 5);
    _this.applyingStyle(_this.vNumber);
    _this.clearArray.push(_this.vNumber);

    _this.dice = [1, 2];

    if (_this.dice[0] == 1) {
      //* first box = correct answr && //* rest wrong
      _this.numbers = [1, 2]; //1,2, 3,  // 4 wrong ans 1 2 3 right ans

      // Shuffle the array using Phaser.ArrayUtils.shuffle
      Phaser.ArrayUtils.shuffle(_this.numbers);
      console.log(_this.numbers[0], "_this.numbers[0].....");

      if (_this.numbers[0] === 1) {
        _this.choiceArray = ["obj1", "obj2"];
        _this.shuffleArray(_this.choiceArray);

        _this.wrongChoiceArray = [
          "obj3",
          "obj4",
          "obj5",
          "obj6",
          "obj7",
          "obj8",
          "obj9",
          "obj10",
          "obj11",
          "obj12",
          "obj13",
          "obj14",
          "obj15",
          "obj16",
          "obj17",
        ];
        _this.shuffleArray(_this.wrongChoiceArray);

        _this.theImage1 = _this.wrongChoiceArray[1];
        _this.getThePositionValues1();
        _this.right_shape1 = _this.add.image(
          _this.x1,
          _this.y1,
          _this.wrongChoiceArray[1]
        );
        if (_this.wrongChoiceArray[1] == "obj8")
          _this.right_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[1] == "obj7")
          _this.right_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape1); //_this.x1, _this.y1, _this.choiceArray[0]

        _this.theImage2 = _this.wrongChoiceArray[0];
        _this.getThePositionValues2();
        _this.wrong_shape1 = _this.add.image(
          _this.x2,
          _this.y2,
          _this.wrongChoiceArray[0]
        );
        if (_this.wrongChoiceArray[0] == "obj8")
          _this.wrong_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[0] == "obj7")
          _this.wrong_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape1);

        _this.theImage3 = _this.choiceArray[0];
        _this.getThePositionValues3();
        _this.wrong_shape2 = _this.add.image(
          _this.x3,
          _this.y3,
          _this.choiceArray[0]
        );
        if (_this.choiceArray[0] == "obj8")
          _this.wrong_shape2.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[0] == "obj7")
          _this.wrong_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape2);

        _this.theImage4 = _this.wrongChoiceArray[2];
        _this.getThePositionValues4();
        _this.wrong_shape3 = _this.add.image(
          _this.x4,
          _this.y4,
          _this.wrongChoiceArray[2]
        );
        if (_this.wrongChoiceArray[2] == "obj8")
          _this.wrong_shape3.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[2] == "obj7")
          _this.wrong_shape3.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape3);
      } else {
        _this.choiceArray = ["obj1", "obj2"];
        _this.shuffleArray(_this.choiceArray);

        _this.wrongChoiceArray = [
          "obj3",
          "obj4",
          "obj5",
          "obj6",
          "obj7",
          "obj8",
          "obj9",
          "obj10",
          "obj11",
          "obj12",
          "obj13",
          "obj14",
          "obj15",
          "obj16",
          "obj17",
        ];
        _this.shuffleArray(_this.wrongChoiceArray);

        _this.theImage1 = _this.choiceArray[0];
        _this.getThePositionValues1();
        _this.right_shape1 = _this.add.image(
          _this.x1,
          _this.y1,
          _this.choiceArray[0]
        );
        if (_this.choiceArray[0] == "obj8")
          _this.right_shape1.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[0] == "obj7")
          _this.right_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape1);

        _this.theImage2 = _this.wrongChoiceArray[0];
        _this.getThePositionValues2();
        _this.right_shape2 = _this.add.image(
          _this.x2,
          _this.y2,
          _this.wrongChoiceArray[0]
        );
        if (_this.wrongChoiceArray[0] == "obj8")
          _this.right_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[0] == "obj7")
          _this.right_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape2); //_this.x2, _this.y2, _this.choiceArray[1]

        _this.theImage3 = _this.choiceArray[1];
        _this.getThePositionValues3();
        _this.wrong_shape1 = _this.add.image(
          _this.x3,
          _this.y3,
          _this.choiceArray[1]
        );
        if (_this.choiceArray[1] == "obj8")
          _this.wrong_shape1.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[1] == "obj7")
          _this.wrong_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape1); //_this.x2, _this.y2

        _this.theImage4 = _this.wrongChoiceArray[1];
        _this.getThePositionValues4();
        _this.wrong_shape2 = _this.add.image(
          _this.x4,
          _this.y4,
          _this.wrongChoiceArray[1]
        );
        if (_this.wrongChoiceArray[1] == "obj8")
          _this.wrong_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[1] == "obj7")
          _this.wrong_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape2);
      }
    } else {
      //* first box = wrong answr && //* rest correct
      _this.numbers = [1, 2]; //1,2, 3,  // 4 wrong ans 1 2 3 right ans

      // Shuffle the array using Phaser.ArrayUtils.shuffle
      Phaser.ArrayUtils.shuffle(_this.numbers);
      console.log(_this.numbers[0], "_this.numbers[0].....");

      if (_this.numbers[0] === 1) {
        _this.choiceArray = ["obj1", "obj2"];
        _this.shuffleArray(_this.choiceArray);

        _this.wrongChoiceArray = [
          "obj3",
          "obj4",
          "obj5",
          "obj6",
          "obj7",
          "obj8",
          "obj9",
          "obj10",
          "obj11",
          "obj12",
          "obj13",
          "obj14",
          "obj15",
          "obj16",
          "obj17",
        ];
        _this.shuffleArray(_this.wrongChoiceArray);

        _this.theImage4 = _this.wrongChoiceArray[2];
        _this.getThePositionValues4();
        _this.right_shape1 = _this.add.image(
          _this.x4,
          _this.y4,
          _this.wrongChoiceArray[2]
        ); //_this.x1, _this.y1, _this.choiceArray[0]
        if (_this.wrongChoiceArray[2] == "obj8")
          _this.right_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[2] == "obj7")
          _this.right_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape1);

        _this.theImage1 = _this.wrongChoiceArray[0];
        _this.getThePositionValues1();
        _this.wrong_shape1 = _this.add.image(
          _this.x1,
          _this.y1,
          _this.wrongChoiceArray[0]
        );
        if (_this.wrongChoiceArray[0] == "obj8")
          _this.wrong_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[0] == "obj7")
          _this.wrong_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape1);

        _this.theImage3 = _this.wrongChoiceArray[1];
        _this.getThePositionValues3();
        _this.wrong_shape2 = _this.add.image(
          _this.x3,
          _this.y3,
          _this.wrongChoiceArray[1]
        );
        if (_this.wrongChoiceArray[1] == "obj8")
          _this.wrong_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[1] == "obj7")
          _this.wrong_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape2);

        _this.theImage2 = _this.choiceArray[0];
        _this.getThePositionValues2();
        _this.wrong_shape3 = _this.add.image(
          _this.x2,
          _this.y2,
          _this.choiceArray[0]
        ); //_this.x4, _this.y4, _this.wrongChoiceArray[2]
        if (_this.choiceArray[0] == "obj8")
          _this.wrong_shape3.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[0] == "obj7")
          _this.wrong_shape3.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape3);
      } else {
        _this.choiceArray = ["obj1", "obj2"];
        _this.shuffleArray(_this.choiceArray);

        _this.wrongChoiceArray = [
          "obj3",
          "obj4",
          "obj5",
          "obj6",
          "obj7",
          "obj8",
          "obj9",
          "obj10",
          "obj11",
          "obj12",
          "obj13",
          "obj14",
          "obj15",
          "obj16",
          "obj17",
        ];
        _this.shuffleArray(_this.wrongChoiceArray);

        _this.theImage4 = _this.choiceArray[1];
        _this.getThePositionValues4();
        _this.right_shape1 = _this.add.image(
          _this.x4,
          _this.y4,
          _this.choiceArray[1]
        );
        if (_this.choiceArray[1] == "obj8")
          _this.right_shape1.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[1] == "obj7")
          _this.right_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape1); //_this.x2, _this.y2, _this.choiceArray[0]

        _this.theImage2 = _this.wrongChoiceArray[1];
        _this.getThePositionValues2();
        _this.right_shape2 = _this.add.image(
          _this.x2,
          _this.y2,
          _this.wrongChoiceArray[1]
        );
        if (_this.wrongChoiceArray[1] == "obj8")
          _this.right_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[1] == "obj7")
          _this.right_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape2); //_this.x2, _this.y2, _this.choiceArray[1]

        _this.theImage1 = _this.choiceArray[0];
        _this.getThePositionValue1();
        _this.wrong_shape1 = _this.add.image(
          _this.x1,
          _this.y1,
          _this.choiceArray[0]
        );
        if (_this.choiceArray[0] == "obj8")
          _this.wrong_shape1.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[0] == "obj7")
          _this.wrong_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape1);

        _this.theImage3 = _this.wrongChoiceArray[0];
        _this.getThePositionValues3();
        _this.wrong_shape2 = _this.add.image(
          _this.x3,
          _this.y3,
          _this.wrongChoiceArray[0]
        );
        if (_this.wrongChoiceArray[0] == "obj8")
          _this.wrong_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[0] == "obj7")
          _this.wrong_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape2); //_this.x2, _this.y2, _this.choiceArray[1]
      }
    }
  },
  //* Displays 2nd set for the objects
  goSet2: function () {
    _this.QNo = 2; //Question number
    _this.goSet_flag2 = 1;

    // _this.triangle1 = _this.add.image(150, 230, 'shape7');
    // _this.triangle1.scale.setTo(1.2, 1.2);
    // _this.clearArray.push(_this.triangle1);

    _this.fNumber = _this.add.text(250, 185, 3);
    _this.applyingStyle(_this.fNumber);
    _this.clearArray.push(_this.fNumber);
    _this.eNumber = _this.add.text(250, 275, 2);
    _this.applyingStyle(_this.eNumber);
    _this.clearArray.push(_this.eNumber);
    _this.vNumber = _this.add.text(250, 365, 0);
    _this.applyingStyle(_this.vNumber);
    _this.clearArray.push(_this.vNumber);

    _this.numbersTri = [1, 2, 3]; // 4 wrong ans 1 2 3 right ans
    Phaser.ArrayUtils.shuffle(_this.numbersTri);

    if (_this.numbersTri[0] === 1) {
      _this.choiceArray = ["obj4", "obj5", "obj6"];
      _this.shuffleArray(_this.choiceArray);

      _this.wrongChoiceArray = [
        "obj3",
        "obj1",
        "obj2",
        "obj7",
        "obj8",
        "obj9",
        "obj10",
        "obj11",
        "obj12",
        "obj13",
        "obj14",
        "obj15",
        "obj16",
        "obj17",
      ];
      _this.shuffleArray(_this.wrongChoiceArray);

      _this.theImage4 = _this.choiceArray[0];
      _this.getThePositionValues4();
      _this.right_shape1 = _this.add.image(
        _this.x4,
        _this.y4,
        _this.choiceArray[0]
      );
      if (_this.choiceArray[0] == "obj8")
        _this.right_shape1.scale.setTo(0.9, 0.9);
      if (_this.choiceArray[0] == "obj7")
        _this.right_shape1.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.right_shape1); //_this.x1, _this.y1

      _this.theImage2 = _this.wrongChoiceArray[0];
      _this.getThePositionValues2();
      _this.wrong_shape1 = _this.add.image(
        _this.x2,
        _this.y2,
        _this.wrongChoiceArray[0]
      );
      if (_this.wrongChoiceArray[0] == "obj8")
        _this.wrong_shape1.scale.setTo(0.9, 0.9);
      if (_this.wrongChoiceArray[0] == "obj7")
        _this.wrong_shape1.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.wrong_shape1);

      _this.theImage3 = _this.wrongChoiceArray[1];
      _this.getThePositionValues3();
      _this.wrong_shape2 = _this.add.image(
        _this.x3,
        _this.y3,
        _this.wrongChoiceArray[1]
      );
      if (_this.wrongChoiceArray[1] == "obj8")
        _this.wrong_shape2.scale.setTo(0.9, 0.9);
      if (_this.wrongChoiceArray[1] == "obj7")
        _this.wrong_shape2.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.wrong_shape2);

      _this.theImage1 = _this.wrongChoiceArray[2];
      _this.getThePositionValues1();
      _this.wrong_shape3 = _this.add.image(
        _this.x1,
        _this.y1,
        _this.wrongChoiceArray[2]
      );
      if (_this.wrongChoiceArray[2] == "obj8")
        _this.wrong_shape3.scale.setTo(0.9, 0.9);
      if (_this.wrongChoiceArray[2] == "obj7")
        _this.wrong_shape3.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.wrong_shape3);
    } else if (_this.numbersTri[0] === 2) {
      _this.choiceArray = ["obj4", "obj5", "obj6"];
      _this.shuffleArray(_this.choiceArray);

      _this.wrongChoiceArray = [
        "obj3",
        "obj1",
        "obj2",
        "obj7",
        "obj8",
        "obj9",
        "obj10",
        "obj11",
        "obj12",
        "obj13",
        "obj14",
        "obj15",
        "obj16",
        "obj17",
      ];
      _this.shuffleArray(_this.wrongChoiceArray);

      _this.theImage4 = _this.choiceArray[0];
      _this.getThePositionValues4();
      _this.right_shape1 = _this.add.image(
        _this.x4,
        _this.y4,
        _this.choiceArray[0]
      );
      if (_this.choiceArray[0] == "obj8")
        _this.right_shape1.scale.setTo(0.9, 0.9);
      if (_this.choiceArray[0] == "obj7")
        _this.right_shape1.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.right_shape1);

      _this.theImage3 = _this.choiceArray[1];
      _this.getThePositionValues3();
      _this.right_shape2 = _this.add.image(
        _this.x3,
        _this.y3,
        _this.choiceArray[1]
      );
      if (_this.choiceArray[1] == "obj8")
        _this.right_shape2.scale.setTo(0.9, 0.9);
      if (_this.choiceArray[1] == "obj7")
        _this.right_shape2.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.right_shape2); //_this.x2, _this.y2

      _this.theImage2 = _this.wrongChoiceArray[0];
      _this.getThePositionValues2();
      _this.wrong_shape1 = _this.add.image(
        _this.x2,
        _this.y2,
        _this.wrongChoiceArray[0]
      );
      if (_this.wrongChoiceArray[0] == "obj8")
        _this.wrong_shape1.scale.setTo(0.9, 0.9);
      if (_this.wrongChoiceArray[0] == "obj7")
        _this.wrong_shape1.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.wrong_shape1);

      _this.theImage1 = _this.wrongChoiceArray[1];
      _this.getThePositionValues1();
      _this.wrong_shape2 = _this.add.image(
        _this.x1,
        _this.y1,
        _this.wrongChoiceArray[1]
      );
      if (_this.wrongChoiceArray[1] == "obj8")
        _this.wrong_shape2.scale.setTo(0.9, 0.9);
      if (_this.wrongChoiceArray[1] == "obj7")
        _this.wrong_shape2.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.wrong_shape2);
    } else if (_this.numbersTri[0] === 3) {
      _this.choiceArray = ["obj4", "obj5", "obj6"];
      _this.shuffleArray(_this.choiceArray);

      _this.wrongChoiceArray = [
        "obj3",
        "obj1",
        "obj2",
        "obj7",
        "obj8",
        "obj9",
        "obj10",
        "obj11",
        "obj12",
        "obj13",
        "obj14",
        "obj15",
        "obj16",
        "obj17",
      ];
      _this.shuffleArray(_this.wrongChoiceArray);

      _this.theImage1 = _this.choiceArray[0];
      _this.getThePositionValues1();
      _this.right_shape1 = _this.add.image(
        _this.x1,
        _this.y1,
        _this.choiceArray[0]
      );
      if (_this.choiceArray[0] == "obj8")
        _this.right_shape1.scale.setTo(0.9, 0.9);
      if (_this.choiceArray[0] == "obj7")
        _this.right_shape1.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.right_shape1);

      _this.theImage4 = _this.choiceArray[1];
      _this.getThePositionValues4();
      _this.right_shape2 = _this.add.image(
        _this.x4,
        _this.y4,
        _this.choiceArray[1]
      );
      if (_this.choiceArray[1] == "obj8")
        _this.right_shape2.scale.setTo(0.9, 0.9);
      if (_this.choiceArray[1] == "obj7")
        _this.right_shape2.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.right_shape2);

      _this.theImage3 = _this.choiceArray[2];
      _this.getThePositionValues3();
      _this.right_shape3 = _this.add.image(
        _this.x3,
        _this.y3,
        _this.choiceArray[2]
      );
      if (_this.choiceArray[1] == "obj8")
        _this.right_shape3.scale.setTo(0.9, 0.9);
      if (_this.choiceArray[1] == "obj7")
        _this.right_shape3.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.right_shape3);

      _this.theImage2 = _this.wrongChoiceArray[0];
      _this.getThePositionValues2();
      _this.wrong_shape1 = _this.add.image(
        _this.x2,
        _this.y2,
        _this.wrongChoiceArray[0]
      );
      if (_this.wrongChoiceArray[0] == "obj8")
        _this.wrong_shape1.scale.setTo(0.9, 0.9);
      if (_this.wrongChoiceArray[0] == "obj7")
        _this.wrong_shape1.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.wrong_shape1);
    }
  },
  //* Displays 3rd set for the objects
  goSet3: function () {
    _this.QNo = 1; //Question number
    _this.goSet_flag3 = 1;

    // _this.Cylinder1 = _this.add.image(175, 230, 'shape11');
    // _this.Cylinder1.scale.setTo(1.1, 1.1);
    // _this.clearArray.push(_this.Cylinder1);
    _this.fNumber = _this.add.text(250, 185, 6);
    _this.applyingStyle(_this.fNumber);
    _this.clearArray.push(_this.fNumber);
    _this.eNumber = _this.add.text(250, 275, 12);
    _this.applyingStyle(_this.eNumber);
    _this.clearArray.push(_this.eNumber);
    _this.vNumber = _this.add.text(250, 365, 8);
    _this.applyingStyle(_this.vNumber);
    _this.clearArray.push(_this.vNumber);

    _this.numbersCylinder = [1, 2, 3]; // 4 wrong ans 1 2 3 right ans
    Phaser.ArrayUtils.shuffle(_this.numbersCylinder);

    if (_this.numbersCylinder[0] === 1) {
      console.log("33333"); // 2nd box wrong ans
      _this.choiceArray = [
        "obj7",
        "obj12",
        "obj8",
        "obj11",
        "obj15",
        "obj16",
        "obj17",
      ];
      _this.shuffleArray(_this.choiceArray);
      _this.wrongChoiceArray = [
        "obj1",
        "obj2",
        "obj3",
        "obj9",
        "obj10",
        "obj13",
        "obj14",
      ];
      _this.shuffleArray(_this.wrongChoiceArray);

      _this.theImage1 = _this.wrongChoiceArray[0];
      _this.getThePositionValues1();
      _this.wrong_shape1 = _this.add.image(
        _this.x1,
        _this.y1,
        _this.wrongChoiceArray[0]
      );
      if (_this.wrongChoiceArray[0] == "obj8")
        _this.wrong_shape1.scale.setTo(0.9, 0.9);
      if (_this.wrongChoiceArray[0] == "obj7")
        _this.wrong_shape1.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.wrong_shape1);

      _this.theImage2 = _this.choiceArray[0];
      _this.getThePositionValues2();
      _this.right_shape1 = _this.add.image(
        _this.x2,
        _this.y2,
        _this.choiceArray[0]
      );
      if (_this.choiceArray[0] == "obj8")
        _this.right_shape1.scale.setTo(0.9, 0.9);
      if (_this.choiceArray[0] == "obj7")
        _this.right_shape1.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.right_shape1);

      _this.theImage3 = _this.wrongChoiceArray[1];
      _this.getThePositionValues3();
      _this.wrong_shape2 = _this.add.image(
        _this.x3,
        _this.y3,
        _this.wrongChoiceArray[1]
      );
      if (_this.wrongChoiceArray[1] == "obj8")
        _this.wrong_shape2.scale.setTo(0.9, 0.9);
      if (_this.wrongChoiceArray[1] == "obj7")
        _this.wrong_shape2.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.wrong_shape2);

      _this.theImage4 = _this.wrongChoiceArray[2];
      _this.getThePositionValues4();
      _this.wrong_shape3 = _this.add.image(
        _this.x4,
        _this.y4,
        _this.wrongChoiceArray[2]
      );
      if (_this.wrongChoiceArray[2] == "obj8")
        _this.wrong_shape3.scale.setTo(0.9, 0.9);
      if (_this.wrongChoiceArray[2] == "obj7")
        _this.wrong_shape3.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.wrong_shape3);
    } else if (_this.numbersCylinder[0] === 2) {
      console.log("222222"); // 3rd box wrong ans
      _this.choiceArray = [
        "obj7",
        "obj12",
        "obj8",
        "obj11",
        "obj15",
        "obj16",
        "obj17",
      ];
      _this.shuffleArray(_this.choiceArray);
      _this.wrongChoiceArray = [
        "obj1",
        "obj2",
        "obj3",
        "obj9",
        "obj10",
        "obj13",
        "obj14",
      ];
      _this.shuffleArray(_this.wrongChoiceArray);

      _this.theImage2 = _this.choiceArray[1];
      _this.getThePositionValues2();
      _this.right_shape2 = _this.add.image(
        _this.x2,
        _this.y2,
        _this.choiceArray[1]
      );
      if (_this.choiceArray[1] == "obj8")
        _this.right_shape2.scale.setTo(0.9, 0.9);
      if (_this.choiceArray[1] == "obj7")
        _this.right_shape2.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.right_shape2);

      _this.theImage3 = _this.choiceArray[0];
      _this.getThePositionValues3();
      _this.right_shape1 = _this.add.image(
        _this.x3,
        _this.y3,
        _this.choiceArray[0]
      );
      if (_this.choiceArray[0] == "obj8")
        _this.right_shape1.scale.setTo(0.9, 0.9);
      if (_this.choiceArray[0] == "obj7")
        _this.right_shape1.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.right_shape1); //_this.x1, _this.y1

      _this.theImage1 = _this.wrongChoiceArray[0];
      _this.getThePositionValues1();
      _this.wrong_shape1 = _this.add.image(
        _this.x1,
        _this.y1,
        _this.wrongChoiceArray[0]
      );
      if (_this.wrongChoiceArray[0] == "obj8")
        _this.wrong_shape1.scale.setTo(0.9, 0.9);
      if (_this.wrongChoiceArray[0] == "obj7")
        _this.wrong_shape1.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.wrong_shape1);

      _this.theImage4 = _this.wrongChoiceArray[1];
      _this.getThePositionValues4();
      _this.wrong_shape2 = _this.add.image(
        _this.x4,
        _this.y4,
        _this.wrongChoiceArray[1]
      );
      if (_this.wrongChoiceArray[1] == "obj8")
        _this.wrong_shape2.scale.setTo(0.9, 0.9);
      if (_this.wrongChoiceArray[1] == "obj7")
        _this.wrong_shape2.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.wrong_shape2);
    } else if (_this.numbersCylinder[0] === 3) {
      console.log("111111"); // 4th box wrong ans
      _this.choiceArray = [
        "obj7",
        "obj12",
        "obj8",
        "obj11",
        "obj15",
        "obj16",
        "obj17",
      ];
      _this.shuffleArray(_this.choiceArray);
      _this.wrongChoiceArray = [
        "obj1",
        "obj2",
        "obj3",
        "obj9",
        "obj10",
        "obj13",
        "obj14",
      ];
      _this.shuffleArray(_this.wrongChoiceArray);

      _this.theImage2 = _this.choiceArray[1];
      _this.getThePositionValues2();
      _this.right_shape2 = _this.add.image(
        _this.x2,
        _this.y2,
        _this.choiceArray[1]
      );
      if (_this.choiceArray[1] == "obj8")
        _this.right_shape2.scale.setTo(0.9, 0.9);
      if (_this.choiceArray[1] == "obj7")
        _this.right_shape2.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.right_shape2);

      _this.theImage4 = _this.choiceArray[0];
      _this.getThePositionValues4();
      _this.right_shape1 = _this.add.image(
        _this.x4,
        _this.y4,
        _this.choiceArray[0]
      );
      if (_this.choiceArray[0] == "obj8")
        _this.right_shape1.scale.setTo(0.9, 0.9);
      if (_this.choiceArray[0] == "obj7")
        _this.right_shape1.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.right_shape1);

      _this.theImage3 = _this.choiceArray[2];
      _this.getThePositionValues3();
      _this.right_shape3 = _this.add.image(
        _this.x3,
        _this.y3,
        _this.choiceArray[2]
      );
      if (_this.choiceArray[2] == "obj8")
        _this.right_shape3.scale.setTo(0.9, 0.9);
      if (_this.choiceArray[2] == "obj7")
        _this.right_shape3.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.right_shape3);

      _this.theImage1 = _this.wrongChoiceArray[0];
      _this.getThePositionValues1();
      _this.wrong_shape1 = _this.add.image(
        _this.x1,
        _this.y1,
        _this.wrongChoiceArray[0]
      );
      if (_this.wrongChoiceArray[0] == "obj8")
        _this.wrong_shape1.scale.setTo(0.9, 0.9);
      if (_this.wrongChoiceArray[0] == "obj7")
        _this.wrong_shape1.scale.setTo(0.85, 0.9);
      _this.clearArray.push(_this.wrong_shape1);
    }
  },
  //* Displays 4th set for the objects
  goSet4: function () {
    _this.QNo = 1; //Question number
    _this.goSet_flag4 = 1;

    // _this.rect1 = _this.add.image(135, 230, 'shape9');
    // _this.rect1.scale.setTo(1.5, 1.5);
    // _this.clearArray.push(_this.rect1);
    _this.fNumber = _this.add.text(250, 185, 5);
    _this.applyingStyle(_this.fNumber);
    _this.clearArray.push(_this.fNumber);
    _this.eNumber = _this.add.text(250, 275, 9);
    _this.applyingStyle(_this.eNumber);
    _this.clearArray.push(_this.eNumber);
    _this.vNumber = _this.add.text(250, 365, 6);
    _this.applyingStyle(_this.vNumber);
    _this.clearArray.push(_this.vNumber);

    _this.dice = [1, 2];

    if (_this.dice[0] == 1) {
      _this.numbersSet4 = [1, 2]; // 4 wrong ans 1 2 3 right ans
      Phaser.ArrayUtils.shuffle(_this.numbersSet4);

      if (_this.numbersSet4[0] === 1) {
        _this.choiceArray = ["obj10", "obj9"];
        _this.shuffleArray(_this.choiceArray);

        _this.wrongChoiceArray = [
          "obj3",
          "obj4",
          "obj5",
          "obj6",
          "obj7",
          "obj8",
          "obj2",
          "obj1",
          "obj11",
          "obj12",
          "obj13",
          "obj14",
          "obj15",
          "obj16",
          "obj17",
        ];
        _this.shuffleArray(_this.wrongChoiceArray);

        _this.theImage1 = _this.choiceArray[0];
        _this.getThePositionValues1();
        _this.right_shape1 = _this.add.image(
          _this.x1,
          _this.y1,
          _this.choiceArray[0]
        );
        if (_this.choiceArray[0] == "obj8")
          _this.right_shape1.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[0] == "obj7")
          _this.right_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape1);

        _this.theImage2 = _this.wrongChoiceArray[0];
        _this.getThePositionValues2();
        _this.wrong_shape1 = _this.add.image(
          _this.x2,
          _this.y2,
          _this.wrongChoiceArray[0]
        );
        if (_this.wrongChoiceArray[0] == "obj8")
          _this.wrong_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[0] == "obj7")
          _this.wrong_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape1);

        _this.theImage3 = _this.wrongChoiceArray[1];
        _this.getThePositionValues3();
        _this.wrong_shape2 = _this.add.image(
          _this.x3,
          _this.y3,
          _this.wrongChoiceArray[1]
        );
        if (_this.wrongChoiceArray[1] == "obj8")
          _this.wrong_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[1] == "obj7")
          _this.wrong_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape2);

        _this.theImage4 = _this.wrongChoiceArray[2];
        _this.getThePositionValues4();
        _this.wrong_shape3 = _this.add.image(
          _this.x4,
          _this.y4,
          _this.wrongChoiceArray[2]
        );
        if (_this.wrongChoiceArray[2] == "obj8")
          _this.wrong_shape3.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[2] == "obj7")
          _this.wrong_shape3.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape3);
      } else {
        _this.choiceArray = ["obj10", "obj9"];
        _this.shuffleArray(_this.choiceArray);

        _this.wrongChoiceArray = [
          "obj3",
          "obj4",
          "obj5",
          "obj6",
          "obj7",
          "obj8",
          "obj2",
          "obj1",
          "obj11",
          "obj12",
          "obj13",
          "obj14",
          "obj15",
          "obj16",
          "obj17",
        ];
        _this.shuffleArray(_this.wrongChoiceArray);

        _this.theImage3 = _this.choiceArray[0];
        _this.getThePositionValues3();
        _this.right_shape1 = _this.add.image(
          _this.x3,
          _this.y3,
          _this.choiceArray[0]
        );
        if (_this.choiceArray[0] == "obj8")
          _this.right_shape1.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[0] == "obj7")
          _this.right_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape1);

        _this.theImage2 = _this.choiceArray[1];
        _this.getThePositionValues2();
        _this.right_shape2 = _this.add.image(
          _this.x2,
          _this.y2,
          _this.choiceArray[1]
        );
        if (_this.choiceArray[1] == "obj8")
          _this.right_shape2.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[1] == "obj7")
          _this.right_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape2);

        _this.theImage1 = _this.wrongChoiceArray[0];
        _this.getThePositionValues1();
        _this.wrong_shape1 = _this.add.image(
          _this.x1,
          _this.y1,
          _this.wrongChoiceArray[0]
        );
        if (_this.wrongChoiceArray[0] == "obj8")
          _this.wrong_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[0] == "obj7")
          _this.wrong_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape1);

        _this.theImage4 = _this.wrongChoiceArray[1];
        _this.getThePositionValues4();
        _this.wrong_shape2 = _this.add.image(
          _this.x4,
          _this.y4,
          _this.wrongChoiceArray[1]
        );
        if (_this.wrongChoiceArray[1] == "obj8")
          _this.wrong_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[1] == "obj7")
          _this.wrong_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape2);
      }
    } else {
      _this.numbersSet4 = [1, 2]; // 4 wrong ans 1 2 3 right ans
      Phaser.ArrayUtils.shuffle(_this.numbersSet4);

      if (_this.numbersSet4[0] === 1) {
        _this.choiceArray = ["obj10", "obj9"];
        _this.shuffleArray(_this.choiceArray);

        _this.wrongChoiceArray = [
          "obj3",
          "obj4",
          "obj5",
          "obj6",
          "obj7",
          "obj8",
          "obj2",
          "obj1",
          "obj11",
          "obj12",
          "obj13",
          "obj14",
          "obj15",
          "obj16",
          "obj17",
        ];
        _this.shuffleArray(_this.wrongChoiceArray);

        _this.theImage4 = _this.wrongChoiceArray[2];
        _this.getThePositionValues4();
        _this.right_shape1 = _this.add.image(
          _this.x4,
          _this.y4,
          _this.wrongChoiceArray[2]
        );
        if (_this.wrongChoiceArray[2] == "obj8")
          _this.right_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[2] == "obj7")
          _this.right_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape1); //_this.x1, _this.y1, _this.choiceArray[0]

        _this.theImage2 = _this.wrongChoiceArray[0];
        _this.getThePositionValues2();
        _this.wrong_shape1 = _this.add.image(
          _this.x2,
          _this.y2,
          _this.wrongChoiceArray[0]
        );
        if (_this.wrongChoiceArray[0] == "obj8")
          _this.wrong_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[0] == "obj7")
          _this.wrong_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape1);

        _this.theImage1 = _this.wrongChoiceArray[1];
        _this.getThePositionValues1();
        _this.wrong_shape2 = _this.add.image(
          _this.x1,
          _this.y1,
          _this.wrongChoiceArray[1]
        );
        if (_this.wrongChoiceArray[1] == "obj8")
          _this.wrong_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[1] == "obj7")
          _this.wrong_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape2);

        _this.theImage3 = _this.choiceArray[0];
        _this.getThePositionValues3();
        _this.wrong_shape3 = _this.add.image(
          _this.x3,
          _this.y3,
          _this.choiceArray[0]
        );
        if (_this.choiceArray[0] == "obj8")
          _this.wrong_shape3.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[0] == "obj7")
          _this.wrong_shape3.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape3);
      } else {
        _this.choiceArray = ["obj10", "obj9"];
        _this.shuffleArray(_this.choiceArray);

        _this.wrongChoiceArray = [
          "obj3",
          "obj4",
          "obj5",
          "obj6",
          "obj7",
          "obj8",
          "obj2",
          "obj1",
          "obj11",
          "obj12",
          "obj13",
          "obj14",
          "obj15",
          "obj16",
          "obj17",
        ];
        _this.shuffleArray(_this.wrongChoiceArray);

        _this.theImage3 = _this.wrongChoiceArray[0];
        _this.getThePositionValues3();
        _this.right_shape1 = _this.add.image(
          _this.x3,
          _this.y3,
          _this.wrongChoiceArray[0]
        );
        if (_this.wrongChoiceArray[0] == "obj8")
          _this.right_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[0] == "obj7")
          _this.right_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape1); //_this.x1, _this.y1, _this.choiceArray[0]

        _this.theImage1 = _this.wrongChoiceArray[1];
        _this.getThePositionValues1();
        _this.right_shape2 = _this.add.image(
          _this.x1,
          _this.y1,
          _this.wrongChoiceArray[1]
        );
        if (_this.wrongChoiceArray[1] == "obj8")
          _this.right_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[1] == "obj7")
          _this.right_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape2); //_this.x2, _this.y2, _this.choiceArray[1]

        _this.theImage4 = _this.choiceArray[0];
        _this.getThePositionValues4();
        _this.wrong_shape1 = _this.add.image(
          _this.x4,
          _this.y4,
          _this.choiceArray[0]
        );
        if (_this.choiceArray[0] == "obj8")
          _this.wrong_shape1.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[0] == "obj7")
          _this.wrong_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape1);

        _this.theImage2 = _this.choiceArray[1];
        _this.getThePositionValues2();
        _this.wrong_shape2 = _this.add.image(
          _this.x2,
          _this.y2,
          _this.choiceArray[1]
        );
        if (_this.choiceArray[1] == "obj8")
          _this.wrong_shape2.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[1] == "obj7")
          _this.wrong_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape2);
      }
    }
  },
  //* Displays 5th set for the objects
  goSet5: function () {
    _this.QNo = 5; //Question number
    _this.goSet_flag5 = 1;

    _this.fNumber = _this.add.text(250, 185, 2);
    _this.applyingStyle(_this.fNumber);
    _this.clearArray.push(_this.fNumber);
    _this.eNumber = _this.add.text(250, 275, 1);
    _this.applyingStyle(_this.eNumber);
    _this.clearArray.push(_this.eNumber);
    _this.vNumber = _this.add.text(250, 365, 1);
    _this.applyingStyle(_this.vNumber);
    _this.clearArray.push(_this.vNumber);

    _this.dice = [1, 2];

    if (_this.dice[0] == 1) {
      _this.numberSet5 = [1, 2]; // 4 wrong ans 1 2 3 right ans
      Phaser.ArrayUtils.shuffle(_this.numberSet5);

      if (_this.numberSet5[0] === 1) {
        _this.choiceArray = ["obj13", "obj14"];
        _this.shuffleArray(_this.choiceArray);

        _this.wrongChoiceArray = [
          "obj3",
          "obj4",
          "obj5",
          "obj6",
          "obj7",
          "obj8",
          "obj2",
          "obj1",
          "obj11",
          "obj12",
          "obj10",
          "obj9",
          "obj15",
          "obj16",
          "obj17",
        ];
        _this.shuffleArray(_this.wrongChoiceArray);

        _this.theImage4 = _this.choiceArray[0];
        _this.getThePositionValues4();
        _this.right_shape1 = _this.add.image(
          _this.x4,
          _this.y4,
          _this.choiceArray[0]
        );
        if (_this.choiceArray[0] == "obj8")
          _this.right_shape1.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[0] == "obj7")
          _this.right_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape1);

        _this.theImage2 = _this.wrongChoiceArray[0];
        _this.getThePositionValues2();
        _this.wrong_shape1 = _this.add.image(
          _this.x2,
          _this.y2,
          _this.wrongChoiceArray[0]
        );
        if (_this.wrongChoiceArray[0] == "obj8")
          _this.wrong_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[0] == "obj7")
          _this.wrong_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape1);

        _this.theImage3 = _this.wrongChoiceArray[1];
        _this.getThePositionValues3();
        _this.wrong_shape2 = _this.add.image(
          _this.x3,
          _this.y3,
          _this.wrongChoiceArray[1]
        );
        if (_this.wrongChoiceArray[1] == "obj8")
          _this.wrong_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[1] == "obj7")
          _this.wrong_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape2);

        _this.theImage1 = _this.wrongChoiceArray[2];
        _this.getThePositionValues1();
        _this.wrong_shape3 = _this.add.image(
          _this.x1,
          _this.y1,
          _this.wrongChoiceArray[2]
        );
        if (_this.wrongChoiceArray[2] == "obj8")
          _this.wrong_shape3.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[2] == "obj7")
          _this.wrong_shape3.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape3);
      } else {
        _this.choiceArray = ["obj13", "obj14"];
        _this.shuffleArray(_this.choiceArray);

        _this.wrongChoiceArray = [
          "obj3",
          "obj4",
          "obj5",
          "obj6",
          "obj7",
          "obj8",
          "obj2",
          "obj1",
          "obj11",
          "obj12",
          "obj10",
          "obj9",
          "obj15",
          "obj16",
          "obj17",
        ];
        _this.shuffleArray(_this.wrongChoiceArray);

        _this.theImage3 = _this.choiceArray[0];
        _this.getThePositionValues3();
        _this.right_shape1 = _this.add.image(
          _this.x3,
          _this.y3,
          _this.choiceArray[0]
        );
        if (_this.choiceArray[0] == "obj8")
          _this.right_shape1.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[0] == "obj7")
          _this.right_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape1);

        _this.theImage2 = _this.choiceArray[1];
        _this.getThePositionValues2();
        _this.right_shape2 = _this.add.image(
          _this.x2,
          _this.y2,
          _this.choiceArray[1]
        );
        if (_this.choiceArray[1] == "obj8")
          _this.right_shape2.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[1] == "obj7")
          _this.right_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape2);

        _this.theImage1 = _this.wrongChoiceArray[0];
        _this.getThePositionValues1();
        _this.wrong_shape1 = _this.add.image(
          _this.x1,
          _this.y1,
          _this.wrongChoiceArray[0]
        );
        if (_this.wrongChoiceArray[0] == "obj8")
          _this.wrong_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[0] == "obj7")
          _this.wrong_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape1);

        _this.theImage4 = _this.wrongChoiceArray[1];
        _this.getThePositionValues4();
        _this.wrong_shape2 = _this.add.image(
          _this.x4,
          _this.y4,
          _this.wrongChoiceArray[1]
        );
        if (_this.wrongChoiceArray[1] == "obj8")
          _this.wrong_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[1] == "obj7")
          _this.wrong_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape2);
      }
    } else {
      _this.numberSet5 = [1, 2]; // 4 wrong ans 1 2 3 right ans
      Phaser.ArrayUtils.shuffle(_this.numberSet5);

      if (_this.numberSet5[0] === 1) {
        _this.choiceArray = ["obj13", "obj14"];
        _this.shuffleArray(_this.choiceArray);

        _this.wrongChoiceArray = [
          "obj3",
          "obj4",
          "obj5",
          "obj6",
          "obj7",
          "obj8",
          "obj2",
          "obj1",
          "obj11",
          "obj12",
          "obj10",
          "obj9",
          "obj15",
          "obj16",
          "obj17",
        ];
        _this.shuffleArray(_this.wrongChoiceArray);

        _this.theImage4 = _this.wrongChoiceArray[2];
        _this.getThePositionValues4();
        _this.right_shape1 = _this.add.image(
          _this.x4,
          _this.y4,
          _this.wrongChoiceArray[2]
        );
        if (_this.wrongChoiceArray[2] == "obj8")
          _this.right_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[2] == "obj7")
          _this.right_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape1); //_this.x1, _this.y1, _this.choiceArray[0])

        _this.theImage1 = _this.wrongChoiceArray[0];
        _this.getThePositionValues1();
        _this.wrong_shape1 = _this.add.image(
          _this.x1,
          _this.y1,
          _this.wrongChoiceArray[0]
        );
        if (_this.wrongChoiceArray[0] == "obj8")
          _this.wrong_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[0] == "obj7")
          _this.wrong_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape1);

        _this.theImage3 = _this.wrongChoiceArray[1];
        _this.getThePositionValues3();
        _this.wrong_shape2 = _this.add.image(
          _this.x3,
          _this.y3,
          _this.wrongChoiceArray[1]
        );
        if (_this.wrongChoiceArray[1] == "obj8")
          _this.wrong_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[1] == "obj7")
          _this.wrong_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape2);

        _this.theImage2 = _this.choiceArray[0];
        _this.getThePositionValues2();
        _this.wrong_shape3 = _this.add.image(
          _this.x2,
          _this.y2,
          _this.choiceArray[0]
        );
        if (_this.choiceArray[0] == "obj8")
          _this.wrong_shape3.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[0] == "obj7")
          _this.wrong_shape3.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape3);
      } else {
        _this.choiceArray = ["obj13", "obj14"];
        _this.shuffleArray(_this.choiceArray);

        _this.wrongChoiceArray = [
          "obj3",
          "obj4",
          "obj5",
          "obj6",
          "obj7",
          "obj8",
          "obj2",
          "obj1",
          "obj11",
          "obj12",
          "obj10",
          "obj9",
          "obj15",
          "obj16",
          "obj17",
        ];
        _this.shuffleArray(_this.wrongChoiceArray);

        _this.theImage3 = _this.wrongChoiceArray[0];
        _this.getThePositionValues3();
        _this.right_shape1 = _this.add.image(
          _this.x3,
          _this.y3,
          _this.wrongChoiceArray[0]
        );
        if (_this.wrongChoiceArray[0] == "obj8")
          _this.right_shape1.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[0] == "obj7")
          _this.right_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape1); //_this.x1, _this.y1, _this.choiceArray[0]

        _this.theImage2 = _this.wrongChoiceArray[1];
        _this.getThePositionValues2();
        _this.right_shape2 = _this.add.image(
          _this.x2,
          _this.y2,
          _this.wrongChoiceArray[1]
        );
        if (_this.wrongChoiceArray[1] == "obj8")
          _this.right_shape2.scale.setTo(0.9, 0.9);
        if (_this.wrongChoiceArray[1] == "obj7")
          _this.right_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.right_shape2); //_this.x2, _this.y2, _this.choiceArray[1]

        _this.theImage1 = _this.choiceArray[0];
        _this.getThePositionValues1();
        _this.wrong_shape1 = _this.add.image(
          _this.x1,
          _this.y1,
          _this.choiceArray[0]
        );
        if (_this.choiceArray[0] == "obj8")
          _this.wrong_shape1.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[0] == "obj7")
          _this.wrong_shape1.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape1);

        _this.theImage4 = _this.choiceArray[1];
        _this.getThePositionValues4();
        _this.wrong_shape2 = _this.add.image(
          _this.x4,
          _this.y4,
          _this.choiceArray[1]
        );
        if (_this.choiceArray[1] == "obj8")
          _this.wrong_shape2.scale.setTo(0.9, 0.9);
        if (_this.choiceArray[1] == "obj7")
          _this.wrong_shape2.scale.setTo(0.85, 0.9);
        _this.clearArray.push(_this.wrong_shape2);
      }
    }
  },
  //* Last set for samoosa
  goSet6: function () {
    _this.goSet_flag6 = 1;

    _this.fNumber = _this.add.text(250, 185, 4);
    _this.applyingStyle(_this.fNumber);
    _this.clearArray.push(_this.fNumber);
    _this.eNumber = _this.add.text(250, 275, 6);
    _this.applyingStyle(_this.eNumber);
    _this.clearArray.push(_this.eNumber);
    _this.vNumber = _this.add.text(250, 365, 4);
    _this.applyingStyle(_this.vNumber);
    _this.clearArray.push(_this.vNumber);

    _this.numbersRect = [1, 2, 3, 4]; // 4 wrong ans 1 2 3 right ans
    Phaser.ArrayUtils.shuffle(_this.numbersRect);

    _this.choiceArray = ["obj3"];
    _this.shuffleArray(_this.choiceArray);

    _this.wrongChoiceArray = [
      "obj4",
      "obj5",
      "obj6",
      "obj7",
      "obj13",
      "obj14",
      "obj8",
      "obj2",
      "obj1",
      "obj11",
      "obj12",
      "obj10",
      "obj9",
      "obj15",
      "obj16",
      "obj17",
    ];
    _this.shuffleArray(_this.wrongChoiceArray);

    if (_this.numbersRect[0] == 1) {
      _this.option1 = _this.choiceArray[0];
      _this.option2 = _this.wrongChoiceArray[0];
      _this.option3 = _this.wrongChoiceArray[1];
      _this.option4 = _this.wrongChoiceArray[2];
    } else if (_this.numbersRect[0] == 2) {
      _this.option2 = _this.choiceArray[0];
      _this.option1 = _this.wrongChoiceArray[0];
      _this.option3 = _this.wrongChoiceArray[1];
      _this.option4 = _this.wrongChoiceArray[2];
    } else if (_this.numbersRect[0] == 3) {
      _this.option3 = _this.choiceArray[0];
      _this.option1 = _this.wrongChoiceArray[0];
      _this.option2 = _this.wrongChoiceArray[1];
      _this.option4 = _this.wrongChoiceArray[2];
    } else if (_this.numbersRect[0] == 4) {
      _this.option4 = _this.choiceArray[0];
      _this.option1 = _this.wrongChoiceArray[0];
      _this.option2 = _this.wrongChoiceArray[1];
      _this.option3 = _this.wrongChoiceArray[2];
    }

    _this.theImage1 = _this.option1;
    _this.getThePositionValues1();
    _this.right_shape1 = _this.add.image(_this.x1, _this.y1, _this.option1);
    if (_this.option1 == "obj8") _this.right_shape1.scale.setTo(0.9, 0.9);
    if (_this.option1 == "obj7") _this.right_shape1.scale.setTo(0.85, 0.9);
    _this.clearArray.push(_this.right_shape1);

    _this.theImage2 = _this.option2;
    _this.getThePositionValues2();
    _this.wrong_shape1 = _this.add.image(_this.x2, _this.y2, _this.option2);
    if (_this.option2 == "obj8") _this.wrong_shape1.scale.setTo(0.9, 0.9);
    if (_this.option2 == "obj7") _this.wrong_shape1.scale.setTo(0.85, 0.9);
    _this.clearArray.push(_this.wrong_shape1);

    _this.theImage3 = _this.option3;
    _this.getThePositionValues3();
    _this.wrong_shape2 = _this.add.image(_this.x3, _this.y3, _this.option3);
    if (_this.option3 == "obj8") _this.wrong_shape2.scale.setTo(0.9, 0.9);
    if (_this.option3 == "obj7") _this.wrong_shape2.scale.setTo(0.85, 0.9);
    _this.clearArray.push(_this.wrong_shape2);

    _this.theImage4 = _this.option4;
    _this.getThePositionValues4();
    _this.wrong_shape3 = _this.add.image(_this.x4, _this.y4, _this.option4);
    if (_this.option4 == "obj8") _this.wrong_shape3.scale.setTo(0.9, 0.9);
    if (_this.option4 == "obj7") _this.wrong_shape3.scale.setTo(0.85, 0.9);
    _this.clearArray.push(_this.wrong_shape3);
  },
  //* used for frame change of the option boxes in part B
  changeFrame11: function () {
    if (_this.selectedBox1 === true) {
      _this.Box2_1.frame = 0;
      _this.selectedBox1 = false;
    } else {
      _this.Box2_1.frame = 1;
      _this.selectedBox1 = true;
    }
  },

  changeFrame12: function () {
    if (_this.selectedBox2 === true) {
      _this.Box2_2.frame = 0;
      _this.selectedBox2 = false;
    } else {
      _this.Box2_2.frame = 1;
      _this.selectedBox2 = true;
    }
  },

  changeFrame13: function () {
    if (_this.selectedBox3 === true) {
      _this.Box2_3.frame = 0;
      _this.selectedBox3 = false;
    } else {
      _this.Box2_3.frame = 1;
      _this.selectedBox3 = true;
    }
  },

  changeFrame14: function () {
    if (_this.selectedBox4 === true) {
      _this.Box2_4.frame = 0;
      _this.selectedBox4 = false;
    } else {
      _this.Box2_4.frame = 1;
      _this.selectedBox4 = true;
    }
  },
  //*Tick button in the question screen and the evaluation of the top box or workspace. Part B
  tickFirstEvaluation: function (target) {
    _this.tick.inputEnabled = false;
    console.log("tick evaluation");
    _this.clickSound.play();
    _this.tickFlag = 2;

    if (_this.goSet_flag1) {
      if (_this.dice[0] == 1) {
        console.log("Dice 1");
        if (_this.numbers[0] == 2) {
          console.log("2 >>");
          if (
            _this.selectedBox1 == true &&
            _this.selectedBox3 == true &&
            _this.selectedBox4 === false &&
            _this.selectedBox2 == false
          ) {
            _this.celebrationSound.play();
            //  _this.tick.inputEnabled = true;
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.disableBoxes();
            _this.starActions();
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.time.events.add(3000, () => {
              _this.clearAll();
              _this.NextQuestion();
            });
          } else if (_this.selectedBox4 == true || _this.selectedBox2 == true) {
            if (_this.selectedBox4 == true) {
              _this.handleSelectedBox(
                _this.Box2_4,
                _this.selectedBox4,
                _this.wrongSound
              );
              _this.selectedBox4 = false;
            }
            if (_this.selectedBox2 == true) {
              _this.handleSelectedBox(
                _this.Box2_2,
                _this.selectedBox2,
                _this.wrongSound
              );
              _this.selectedBox2 = false;
            }
            //_this.tick.inputEnabled = true;
          } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
          }
        } else if (_this.numbers[0] == 1) {
          console.log("1 >>");
          if (
            _this.selectedBox3 == true &&
            _this.selectedBox1 == false &&
            _this.selectedBox4 == false &&
            _this.selectedBox2 === false
          ) {
            _this.celebrationSound.play();
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //  _this.tick.inputEnabled = true;
            _this.disableBoxes();
            _this.starActions();
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.time.events.add(3000, () => {
              _this.clearAll();
              _this.NextQuestion();
            });
          } else if (
            _this.selectedBox1 == true ||
            _this.selectedBox2 == true ||
            _this.selectedBox4 == true
          ) {
            if (_this.selectedBox1 == true) {
              _this.handleSelectedBox(
                _this.Box2_1,
                _this.selectedBox1,
                _this.wrongSound
              );
              _this.selectedBox1 = false;
            }
            if (_this.selectedBox2 == true) {
              _this.handleSelectedBox(
                _this.Box2_2,
                _this.selectedBox2,
                _this.wrongSound
              );
              _this.selectedBox2 = false;
            }
            if (_this.selectedBox4 == true) {
              _this.handleSelectedBox(
                _this.Box2_4,
                _this.selectedBox4,
                _this.wrongSound
              );
              _this.selectedBox4 = false;
            }
            //  _this.tick.inputEnabled = true;
          } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
          }
        }
      } else {
        console.log("Dice 2");
        if (_this.numbers[0] == 2) {
          console.log("2 >>");
          if (
            _this.selectedBox1 == true &&
            _this.selectedBox4 == true &&
            _this.selectedBox3 === false &&
            _this.selectedBox2 == false
          ) {
            _this.celebrationSound.play();
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //  _this.tick.inputEnabled = true;
            _this.disableBoxes();
            _this.starActions();
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.time.events.add(3000, () => {
              _this.clearAll();
              _this.NextQuestion();
            });
          } else if (_this.selectedBox3 == true || _this.selectedBox2 == true) {
            if (_this.selectedBox3 == true) {
              _this.handleSelectedBox(
                _this.Box2_3,
                _this.selectedBox3,
                _this.wrongSound
              );
              _this.selectedBox3 = false;
            }
            if (_this.selectedBox2 == true) {
              _this.handleSelectedBox(
                _this.Box2_2,
                _this.selectedBox2,
                _this.wrongSound
              );
              _this.selectedBox2 = false;
            }
            // _this.tick.inputEnabled = true;
          } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
          }
        } else if (_this.numbers[0] == 1) {
          console.log("1 >>");
          if (
            _this.selectedBox2 == true &&
            _this.selectedBox3 == false &&
            _this.selectedBox1 == false &&
            _this.selectedBox4 === false
          ) {
            _this.celebrationSound.play();
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            //_this.tick.inputEnabled = true;
            _this.disableBoxes();
            _this.starActions();
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.time.events.add(3000, () => {
              _this.clearAll();
              _this.NextQuestion();
            });
            if (_this.selectedBox3 == true) {
              _this.handleSelectedBox(
                _this.Box2_3,
                _this.selectedBox3,
                _this.wrongSound
              );
              _this.selectedBox3 = false;
            }
            if (_this.selectedBox4 == true) {
              _this.handleSelectedBox(
                _this.Box2_4,
                _this.selectedBox4,
                _this.wrongSound
              );
              _this.selectedBox4 = false;
            }
            if (_this.selectedBox1 == true) {
              _this.handleSelectedBox(
                _this.Box2_1,
                _this.selectedBox1,
                _this.wrongSound
              );
              _this.selectedBox1 = false;
            }
            //_this.tick.inputEnabled = true;
          } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
          }
        }
      }
    } else if (_this.goSet_flag2) {
      if (_this.numbersTri[0] == 3) {
        console.log("3 >>");
        if (
          _this.selectedBox1 == true &&
          _this.selectedBox3 == true &&
          _this.selectedBox4 == true &&
          _this.selectedBox2 === false
        ) {
          _this.celebrationSound.play();
          _this.noofAttempts++;
          telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
          //  _this.tick.inputEnabled = true;
          _this.disableBoxes();
          _this.starActions();
          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.time.events.add(3000, () => {
            _this.clearAll();
            _this.NextQuestion();
          });
        } else if (_this.selectedBox2 == true) {
          _this.handleSelectedBox(
            _this.Box2_2,
            _this.selectedBox2,
            _this.wrongSound
          );
          _this.selectedBox2 = false;
          // _this.tick.inputEnabled = true;
        } else {
          _this.noofAttempts++;
          _this.wrongSound.play();
          _this.tick.inputEnabled = true;
        }
      } else if (_this.numbersTri[0] == 2) {
        console.log("2 >>");
        if (
          _this.selectedBox4 == true &&
          _this.selectedBox3 == true &&
          _this.selectedBox2 === false &&
          _this.selectedBox1 == false
        ) {
          _this.celebrationSound.play();
          _this.noofAttempts++;
          telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
          //_this.tick.inputEnabled = true;
          _this.disableBoxes();
          _this.starActions();
          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.time.events.add(3000, () => {
            _this.clearAll();
            _this.NextQuestion();
          });
        } else if (_this.selectedBox2 == true || _this.selectedBox1 == true) {
          if (_this.selectedBox2 == true) {
            _this.handleSelectedBox(
              _this.Box2_2,
              _this.selectedBox2,
              _this.wrongSound
            );
            _this.selectedBox2 = false;
          }
          if (_this.selectedBox1 == true) {
            _this.handleSelectedBox(
              _this.Box2_1,
              _this.selectedBox1,
              _this.wrongSound
            );
            _this.selectedBox1 = false;
          }
          //_this.tick.inputEnabled = true;
        } else {
          _this.noofAttempts++;
          _this.wrongSound.play();
          _this.tick.inputEnabled = true;
        }
      } else if (_this.numbersTri[0] == 1) {
        console.log("1 >>");
        if (
          _this.selectedBox4 == true &&
          _this.selectedBox2 == false &&
          _this.selectedBox1 == false &&
          _this.selectedBox3 === false
        ) {
          _this.celebrationSound.play();
          _this.noofAttempts++;
          telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
          //_this.tick.inputEnabled = true;
          _this.disableBoxes();
          _this.starActions();
          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.time.events.add(3000, () => {
            _this.clearAll();
            _this.NextQuestion();
          });
        } else if (
          _this.selectedBox3 == true ||
          _this.selectedBox2 == true ||
          _this.selectedBox1 == true
        ) {
          if (_this.selectedBox3 == true) {
            _this.handleSelectedBox(
              _this.Box2_3,
              _this.selectedBox3,
              _this.wrongSound
            );
            _this.selectedBox3 = false;
          }
          if (_this.selectedBox2 == true) {
            _this.handleSelectedBox(
              _this.Box2_2,
              _this.selectedBox2,
              _this.wrongSound
            );
            _this.selectedBox2 = false;
          }
          if (_this.selectedBox1 == true) {
            _this.handleSelectedBox(
              _this.Box2_1,
              _this.selectedBox1,
              _this.wrongSound
            );
            _this.selectedBox1 = false;
          }
          //_this.tick.inputEnabled = true;
        } else {
          _this.noofAttempts++;
          _this.wrongSound.play();
          _this.tick.inputEnabled = true;
        }
      }
    } else if (_this.goSet_flag3) {
      if (_this.numbersCylinder[0] == 3) {
        console.log("3 >>");
        if (
          _this.selectedBox4 == true &&
          _this.selectedBox3 == true &&
          _this.selectedBox2 == true &&
          _this.selectedBox1 === false
        ) {
          _this.celebrationSound.play();
          _this.noofAttempts++;
          telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
          //_//this.tick.inputEnabled = true;
          _this.disableBoxes();
          _this.starActions();
          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.time.events.add(3000, () => {
            _this.clearAll();
            _this.NextQuestion();
          });
        } else if (_this.selectedBox1 == true) {
          _this.handleSelectedBox(
            _this.Box2_1,
            _this.selectedBox1,
            _this.wrongSound
          );
          _this.selectedBox1 = false;
          //_this.tick.inputEnabled = true;
        } else {
          _this.noofAttempts++;
          _this.tick.inputEnabled = true;
          _this.wrongSound.play();
        }
      } else if (_this.numbersCylinder[0] == 2) {
        console.log("2 >>");
        if (
          _this.selectedBox3 == true &&
          _this.selectedBox2 == true &&
          _this.selectedBox1 === false &&
          _this.selectedBox4 == false
        ) {
          _this.celebrationSound.play();
          _this.noofAttempts++;
          telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
          // _this.tick.inputEnabled = true;
          _this.disableBoxes();
          _this.starActions();
          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.time.events.add(3000, () => {
            _this.clearAll();
            _this.NextQuestion();
          });
        } else if (_this.selectedBox4 == true || _this.selectedBox1 == true) {
          if (_this.selectedBox4 == true) {
            _this.handleSelectedBox(
              _this.Box2_4,
              _this.selectedBox4,
              _this.wrongSound
            );
            _this.selectedBox4 = false;
          }
          if (_this.selectedBox1 == true) {
            _this.handleSelectedBox(
              _this.Box2_1,
              _this.selectedBox1,
              _this.wrongSound
            );
            _this.selectedBox1 = false;
          }
          //_this.tick.inputEnabled = true;
        } else {
          _this.noofAttempts++;
          _this.wrongSound.play();
          _this.tick.inputEnabled = true;
        }
      } else if (_this.numbersCylinder[0] == 1) {
        console.log("1 >>");
        if (
          _this.selectedBox2 == true &&
          _this.selectedBox1 == false &&
          _this.selectedBox4 == false &&
          _this.selectedBox3 === false
        ) {
          _this.celebrationSound.play();
          _this.noofAttempts++;
          telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
          // _this.tick.inputEnabled = true;
          _this.disableBoxes();
          _this.starActions();
          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.time.events.add(3000, () => {
            _this.clearAll();
            _this.NextQuestion();
          });
        } else if (
          _this.selectedBox3 == true ||
          _this.selectedBox1 == true ||
          _this.selectedBox4 == true
        ) {
          if (_this.selectedBox3 == true) {
            _this.handleSelectedBox(
              _this.Box2_3,
              _this.selectedBox3,
              _this.wrongSound
            );
            _this.selectedBox3 = false;
          }
          if (_this.selectedBox1 == true) {
            _this.handleSelectedBox(
              _this.Box2_1,
              _this.selectedBox1,
              _this.wrongSound
            );
            _this.selectedBox1 = false;
          }
          if (_this.selectedBox4 == true) {
            _this.handleSelectedBox(
              _this.Box2_4,
              _this.selectedBox4,
              _this.wrongSound
            );
            _this.selectedBox4 = false;
          }
          // _this.tick.inputEnabled = true;
        } else {
          _this.noofAttempts++;
          _this.wrongSound.play();
          _this.tick.inputEnabled = true;
        }
      }
    } else if (_this.goSet_flag4) {
      if (_this.dice[0] == 1) {
        if (_this.numbersSet4[0] == 2) {
          console.log("2 >>");
          if (
            _this.selectedBox3 == true &&
            _this.selectedBox2 == true &&
            _this.selectedBox4 === false &&
            _this.selectedBox1 == false
          ) {
            _this.celebrationSound.play();
            //_this.tick.inputEnabled = true;
            _this.disableBoxes();
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.starActions();
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.time.events.add(3000, () => {
              _this.clearAll();
              _this.NextQuestion();
            });
          } else if (_this.selectedBox4 == true || _this.selectedBox1 == true) {
            if (_this.selectedBox4 == true) {
              _this.handleSelectedBox(
                _this.Box2_4,
                _this.selectedBox4,
                _this.wrongSound
              );
              _this.selectedBox4 = false;
            }
            if (_this.selectedBox1 == true) {
              _this.handleSelectedBox(
                _this.Box2_1,
                _this.selectedBox1,
                _this.wrongSound
              );
              _this.selectedBox1 = false;
            }
            // _this.tick.inputEnabled = true;
          } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
          }
        } else if (_this.numbersSet4[0] == 1) {
          console.log("1 >>");
          if (
            _this.selectedBox1 == true &&
            _this.selectedBox3 == false &&
            _this.selectedBox4 == false &&
            _this.selectedBox2 === false
          ) {
            _this.celebrationSound.play();
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //_this.tick.inputEnabled = true;
            _this.disableBoxes();
            _this.starActions();
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.time.events.add(3000, () => {
              _this.clearAll();
              _this.NextQuestion();
            });
          } else if (
            _this.selectedBox3 == true ||
            _this.selectedBox2 == true ||
            _this.selectedBox4 == true
          ) {
            if (_this.selectedBox3 == true) {
              _this.handleSelectedBox(
                _this.Box2_3,
                _this.selectedBox3,
                _this.wrongSound
              );
              _this.selectedBox3 = false;
            }
            if (_this.selectedBox2 == true) {
              _this.handleSelectedBox(
                _this.Box2_2,
                _this.selectedBox2,
                _this.wrongSound
              );
              _this.selectedBox2 = false;
            }
            if (_this.selectedBox4 == true) {
              _this.handleSelectedBox(
                _this.Box2_4,
                _this.selectedBox4,
                _this.wrongSound
              );
              _this.selectedBox4 = false;
            }
            // _this.tick.inputEnabled = true;
          } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
          }
        }
      } else {
        if (_this.numbersSet4[0] == 2) {
          console.log("2 >>");
          if (
            _this.selectedBox2 == true &&
            _this.selectedBox4 == true &&
            _this.selectedBox1 === false &&
            _this.selectedBox3 == false
          ) {
            _this.celebrationSound.play();
            //_this.tick.inputEnabled = true;
            _this.disableBoxes();
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.starActions();
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.time.events.add(3000, () => {
              _this.clearAll();
              _this.NextQuestion();
            });
          } else if (_this.selectedBox1 == true || _this.selectedBox3 == true) {
            if (_this.selectedBox1 == true) {
              _this.handleSelectedBox(
                _this.Box2_1,
                _this.selectedBox1,
                _this.wrongSound
              );
              _this.selectedBox1 = false;
            }
            if (_this.selectedBox3 == true) {
              _this.handleSelectedBox(
                _this.Box2_3,
                _this.selectedBox3,
                _this.wrongSound
              );
              _this.selectedBox3 = false;
            }
            //_this.tick.inputEnabled = true;
          } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
          }
        } else if (_this.numbersSet4[0] == 1) {
          console.log("1 >>");
          if (
            _this.selectedBox3 == true &&
            _this.selectedBox4 == false &&
            _this.selectedBox1 == false &&
            _this.selectedBox2 === false
          ) {
            _this.celebrationSound.play();
            // _this.tick.inputEnabled = true;
            _this.disableBoxes();
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.starActions();
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.time.events.add(3000, () => {
              _this.clearAll();
              _this.NextQuestion();
            });
            if (_this.selectedBox4 == true) {
              _this.handleSelectedBox(
                _this.Box2_4,
                _this.selectedBox4,
                _this.wrongSound
              );
              _this.selectedBox4 = false;
            }
            if (_this.selectedBox2 == true) {
              _this.handleSelectedBox(
                _this.Box2_2,
                _this.selectedBox2,
                _this.wrongSound
              );
              _this.selectedBox2 = false;
            }
            if (_this.selectedBox1 == true) {
              _this.handleSelectedBox(
                _this.Box2_1,
                _this.selectedBox1,
                _this.wrongSound
              );
              _this.selectedBox1 = false;
            }
            //_this.tick.inputEnabled = true;
          } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
          }
        }
      }
    } else if (_this.goSet_flag5) {
      if (_this.dice[0] == 1) {
        if (_this.numberSet5[0] == 2) {
          console.log("2 >>");
          if (
            _this.selectedBox3 == true &&
            _this.selectedBox2 == true &&
            _this.selectedBox4 === false &&
            _this.selectedBox1 == false
          ) {
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.celebrationSound.play();
            _this.disableBoxes();
            _this.starActions();
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.time.events.add(3000, () => {
              _this.clearAll();
              _this.NextQuestion();
            });
          } else if (_this.selectedBox4 == true || _this.selectedBox1 == true) {
            if (_this.selectedBox4 == true) {
              _this.handleSelectedBox(
                _this.Box2_4,
                _this.selectedBox4,
                _this.wrongSound
              );
              _this.selectedBox4 = false;
            }
            if (_this.selectedBox1 == true) {
              _this.handleSelectedBox(
                _this.Box2_1,
                _this.selectedBox1,
                _this.wrongSound
              );
              _this.selectedBox1 = false;
            }
            //_this.tick.inputEnabled = true;
          } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
          }
        } else if (_this.numberSet5[0] == 1) {
          console.log("1 >>");
          if (
            _this.selectedBox4 == true &&
            _this.selectedBox3 == false &&
            _this.selectedBox2 == false &&
            _this.selectedBox1 === false
          ) {
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.celebrationSound.play();
            _this.disableBoxes();
            _this.starActions();
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.time.events.add(3000, () => {
              _this.clearAll();
              _this.NextQuestion();
            });
          } else if (
            _this.selectedBox3 == true ||
            _this.selectedBox2 == true ||
            _this.selectedBox1 == true
          ) {
            if (_this.selectedBox3 == true) {
              _this.handleSelectedBox(
                _this.Box2_3,
                _this.selectedBox3,
                _this.wrongSound
              );
              _this.selectedBox3 = false;
            }
            if (_this.selectedBox2 == true) {
              _this.handleSelectedBox(
                _this.Box2_2,
                _this.selectedBox2,
                _this.wrongSound
              );
              _this.selectedBox2 = false;
            }
            if (_this.selectedBox1 == true) {
              _this.handleSelectedBox(
                _this.Box2_1,
                _this.selectedBox1,
                _this.wrongSound
              );
              _this.selectedBox1 = false;
            }
            // _this.tick.inputEnabled = true;
          } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
          }
        }
      } else {
        if (_this.numberSet5[0] == 2) {
          console.log("2 >>");
          if (
            _this.selectedBox1 == true &&
            _this.selectedBox4 == true &&
            _this.selectedBox3 === false &&
            _this.selectedBox2 == false
          ) {
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.celebrationSound.play();
            _this.disableBoxes();
            _this.starActions();
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.time.events.add(3000, () => {
              _this.clearAll();
              _this.NextQuestion();
            });
          } else if (_this.selectedBox3 == true || _this.selectedBox2 == true) {
            if (_this.selectedBox3 == true) {
              _this.handleSelectedBox(
                _this.Box2_3,
                _this.selectedBox3,
                _this.wrongSound
              );
              _this.selectedBox3 = false;
            }
            if (_this.selectedBox2 == true) {
              _this.handleSelectedBox(
                _this.Box2_2,
                _this.selectedBox2,
                _this.wrongSound
              );
              _this.selectedBox2 = false;
            }
            // _this.tick.inputEnabled = true;
          } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
          }
        } else if (_this.numberSet5[0] == 1) {
          console.log("1 >>");
          if (
            _this.selectedBox2 == true &&
            _this.selectedBox3 == false &&
            _this.selectedBox4 == false &&
            _this.selectedBox1 === false
          ) {
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.celebrationSound.play();
            _this.disableBoxes();
            _this.starActions();
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.time.events.add(3000, () => {
              _this.clearAll();
              _this.NextQuestion();
            });
          } else if (
            _this.selectedBox3 == true ||
            _this.selectedBox4 == true ||
            _this.selectedBox1 == true
          ) {
            if (_this.selectedBox3 == true) {
              _this.handleSelectedBox(
                _this.Box2_3,
                _this.selectedBox3,
                _this.wrongSound
              );
              _this.selectedBox3 = false;
            }
            if (_this.selectedBox4 == true) {
              _this.handleSelectedBox(
                _this.Box2_4,
                _this.selectedBox4,
                _this.wrongSound
              );
              _this.selectedBox4 = false;
            }
            if (_this.selectedBox1 == true) {
              _this.handleSelectedBox(
                _this.Box2_1,
                _this.selectedBox1,
                _this.wrongSound
              );
              _this.selectedBox1 = false;
            }
            //  _this.tick.inputEnabled = true;
          } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
          }
        }
      }
    } else if (_this.goSet_flag6) {
      if (_this.numbersRect[0] == 1) {
        if (
          _this.selectedBox1 == true &&
          _this.selectedBox3 == false &&
          _this.selectedBox4 == false &&
          _this.selectedBox2 === false
        ) {
          _this.noofAttempts++;
          telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
          _this.celebrationSound.play();
          _this.disableBoxes();
          _this.starActions();
          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.time.events.add(3000, () => {
            _this.clearAll();
            _this.NextQuestion();
          });
        } else if (
          _this.selectedBox3 == true ||
          _this.selectedBox2 == true ||
          _this.selectedBox4 == true
        ) {
          if (_this.selectedBox3 == true) {
            _this.handleSelectedBox(
              _this.Box2_3,
              _this.selectedBox3,
              _this.wrongSound
            );
            _this.selectedBox3 = false;
          }
          if (_this.selectedBox2 == true) {
            _this.handleSelectedBox(
              _this.Box2_2,
              _this.selectedBox2,
              _this.wrongSound
            );
            _this.selectedBox2 = false;
          }
          if (_this.selectedBox4 == true) {
            _this.handleSelectedBox(
              _this.Box2_4,
              _this.selectedBox4,
              _this.wrongSound
            );
            _this.selectedBox4 = false;
          }
          //_this.tick.inputEnabled = true;
        } else {
          _this.noofAttempts++;
          _this.wrongSound.play();
          _this.tick.inputEnabled = true;
        }
      } else if (_this.numbersRect[0] == 2) {
        if (
          _this.selectedBox2 == true &&
          _this.selectedBox3 == false &&
          _this.selectedBox4 == false &&
          _this.selectedBox1 === false
        ) {
          _this.noofAttempts++;
          telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
          _this.celebrationSound.play();
          _this.disableBoxes();
          _this.starActions();
          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.time.events.add(3000, () => {
            _this.clearAll();
            _this.NextQuestion();
          });
        } else if (
          _this.selectedBox3 == true ||
          _this.selectedBox1 == true ||
          _this.selectedBox4 == true
        ) {
          if (_this.selectedBox3 == true) {
            _this.handleSelectedBox(
              _this.Box2_3,
              _this.selectedBox3,
              _this.wrongSound
            );
            _this.selectedBox3 = false;
          }
          if (_this.selectedBox1 == true) {
            _this.handleSelectedBox(
              _this.Box2_1,
              _this.selectedBox1,
              _this.wrongSound
            );
            _this.selectedBox1 = false;
          }
          if (_this.selectedBox4 == true) {
            _this.handleSelectedBox(
              _this.Box2_4,
              _this.selectedBox4,
              _this.wrongSound
            );
            _this.selectedBox4 = false;
          }
          //_this.tick.inputEnabled = true;
        } else {
          _this.noofAttempts++;
          _this.wrongSound.play();
          _this.tick.inputEnabled = true;
        }
      } else if (_this.numbersRect[0] == 3) {
        if (
          _this.selectedBox3 == true &&
          _this.selectedBox1 == false &&
          _this.selectedBox4 == false &&
          _this.selectedBox2 === false
        ) {
          _this.noofAttempts++;
          telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
          _this.celebrationSound.play();
          _this.disableBoxes();
          _this.starActions();
          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.time.events.add(3000, () => {
            _this.clearAll();
            _this.NextQuestion();
          });
        } else if (
          _this.selectedBox1 == true ||
          _this.selectedBox2 == true ||
          _this.selectedBox4 == true
        ) {
          if (_this.selectedBox1 == true) {
            _this.handleSelectedBox(
              _this.Box2_1,
              _this.selectedBox1,
              _this.wrongSound
            );
            _this.selectedBox1 = false;
          }
          if (_this.selectedBox2 == true) {
            _this.handleSelectedBox(
              _this.Box2_2,
              _this.selectedBox2,
              _this.wrongSound
            );
            _this.selectedBox2 = false;
          }
          if (_this.selectedBox4 == true) {
            _this.handleSelectedBox(
              _this.Box2_4,
              _this.selectedBox4,
              _this.wrongSound
            );
            _this.selectedBox4 = false;
          }
          //_this.tick.inputEnabled = true;
        } else {
          _this.noofAttempts++;
          _this.wrongSound.play();
          _this.tick.inputEnabled = true;
        }
      } else if (_this.numbersRect[0] == 4) {
        if (
          _this.selectedBox4 == true &&
          _this.selectedBox3 == false &&
          _this.selectedBox1 == false &&
          _this.selectedBox2 === false
        ) {
          _this.noofAttempts++;
          telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
          _this.celebrationSound.play();
          _this.disableBoxes();
          _this.starActions();
          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.time.events.add(3000, () => {
            _this.clearAll();
            _this.NextQuestion();
          });
        } else if (
          _this.selectedBox3 == true ||
          _this.selectedBox2 == true ||
          _this.selectedBox1 == true
        ) {
          if (_this.selectedBox3 == true) {
            _this.handleSelectedBox(
              _this.Box2_3,
              _this.selectedBox3,
              _this.wrongSound
            );
            _this.selectedBox3 = false;
          }
          if (_this.selectedBox2 == true) {
            _this.handleSelectedBox(
              _this.Box2_2,
              _this.selectedBox2,
              _this.wrongSound
            );
            _this.selectedBox2 = false;
          }
          if (_this.selectedBox1 == true) {
            _this.handleSelectedBox(
              _this.Box2_1,
              _this.selectedBox1,
              _this.wrongSound
            );
            _this.selectedBox1 = false;
          }
          //_this.tick.inputEnabled = true;
        } else {
          _this.noofAttempts++;
          _this.wrongSound.play();
          _this.tick.inputEnabled = true;
        }
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        _this.tick.inputEnabled = true;
      }
    } else {
      _this.noofAttempts++;
      _this.wrongSound.play();
      _this.tick.inputEnabled = true;
    }
  },

  handleSelectedBox: function (box, selected, sound) {
    if (selected) {
      var blinkTween = _this.add
        .tween(box)
        .to(
          { tint: 0xff0000 },
          250,
          Phaser.Easing.Linear.None,
          true,
          0,
          1,
          true
        );
      _this.time.events.add(
        500,
        function () {
          blinkTween.stop();
          box.tint = 0xffffff;
          _this.tick.inputEnabled = true;
        },
        this
      );

      box.frame = 0;

      sound.play();
    }
  },

  removeStyle: function (target) {
    target.visible = false;
  },

  //clearing the screen after each question
  clearAll: function () {
    _this.clearArray.forEach((element) => {
      element.destroy();
    });

    if (_this.fText) _this.fText.destroy();

    _this.goSet_flag1 = 0;
    _this.goSet_flag2 = 0;
    _this.goSet_flag3 = 0;
    _this.goSet_flag4 = 0;
    _this.goSet_flag5 = 0;
    _this.goSet_flag6 = 0;

    _this.right = false;
    _this.wrong = false;

    _this.selectedBox1 = false;
    _this.selectedBox2 = false;
    _this.selectedBox3 = false;
    _this.selectedBox4 = false;
  },
  //* Disabling the boxes and tick button after the correct answer in part B
  disableBoxes: function () {
    if (_this.tickFlag == 1) {
      _this.tick.events.onInputDown.removeAll();

      _this.box1.events.onInputDown.removeAll();
      _this.box2.events.onInputDown.removeAll();
      _this.box3.events.onInputDown.removeAll();

      _this.box1.input.useHandCursor = false;
      _this.box2.input.useHandCursor = false;
      _this.box3.input.useHandCursor = false;
    } else if (_this.tickFlag == 2) {
      _this.tick.events.onInputDown.removeAll();

      _this.Box2_1.events.onInputDown.removeAll();
      _this.Box2_2.events.onInputDown.removeAll();
      _this.Box2_3.events.onInputDown.removeAll();
      _this.Box2_4.events.onInputDown.removeAll();

      _this.Box2_1.input.useHandCursor = false;
      _this.Box2_2.input.useHandCursor = false;
      _this.Box2_3.input.useHandCursor = false;
      _this.Box2_4.input.useHandCursor = false;
    }
  },

  //Adding a star to the above created six stars.
  starActions: function (target) {
    console.log("starActions");

    starAnim = _this.starsGroup.getChildAt(_this.numberOfQuestions);
    starAnim.smoothed = false;
    anim = starAnim.animations.add("star");
    _this.numberOfQuestions++;
    _this.microConcepts = "GeometryG8";
    anim.play();
  },

  shutdown: function () {
    _this.stopVoice();
  },

  stopAudio: function () {
    //* clear all the timers first
    if (_this.demoAudio1Timer) clearTimeout(_this.demoAudio1Timer);
    if (_this.demoVideo1PauseTimer) clearTimeout(_this.demoVideo1PauseTimer);
    if (_this.q1Timer) clearTimeout(_this.q1Timer);
    if (_this.demoAudio2Timer) clearTimeout(_this.demoAudio2Timer);
    if (_this.q2Timer) clearTimeout(_this.q2Timer);

    if (_this.demoAudio1) {
      //console.log("removing the demo audio1");
      _this.demoAudio1.pause();
      _this.demoAudio1 = null;
      _this.demoAudio1src = null;
    }

    if (_this.demoAudio2) {
      //console.log("removing the demo audio1");
      _this.demoAudio2.pause();
      _this.demoAudio2 = null;
      _this.demoAudio2src = null;
    }

    if (_this.q1Sound) {
      //console.log("removing the q1");
      _this.q1Sound.pause();
      _this.q1Sound = null;
      _this.q1Soundsrc = null;
    }

    if (_this.q2Sound) {
      //console.log("removing the q2");
      _this.q2Sound.pause();
      _this.q2Sound = null;
      _this.q2Soundsrc = null;
    }

    if (_this.q3Sound) {
      //console.log("removing the q3");
      _this.q3Sound.pause();
      _this.q3Sound = null;
      _this.q3Soundsrc = null;
    }

    _this.skip.events.onInputDown.removeAll();
    _this.skip.destroy(); //* skip button destroyed
  },
  DemoVideo: function () {
    // DEMO AUDIOS
    _this.demoAudio1 = document.createElement("audio");
    _this.demoAudio1src = document.createElement("source");
    _this.demoAudio1src.setAttribute(
      "src",
      window.baseUrl + "questionSounds/INT-DL3-G7/" + _this.languageSelected + "/V1.mp3"
    );
    _this.demoAudio1.appendChild(_this.demoAudio1src);

    _this.demoAudio2 = document.createElement("audio");
    _this.demoAudio2src = document.createElement("source");
    _this.demoAudio2src.setAttribute(
      "src",
      window.baseUrl + "questionSounds/INT-DL3-G7/" + _this.languageSelected + "/V2.mp3"
    );
    _this.demoAudio2.appendChild(_this.demoAudio2src);

    // QUESTION AUDIOS
    _this.q1Sound = document.createElement("audio");
    _this.q1Soundsrc = document.createElement("source");
    _this.q1Soundsrc.setAttribute(
      "src",
      window.baseUrl + "questionSounds/INT-DL3-G7/" + _this.languageSelected + "/V1.mp3"
    );
    _this.q1Sound.appendChild(_this.q1Soundsrc);

    _this.video_playing = 0;
    _this.showDemoVideo(); //* call the function to show the video

    _this.skip = _this.add.image(870, 390, "skipArrow"); //* skip button shown at the bottom
    _this.skip.inputEnabled = true;
    _this.skip.input.useHandCursor = true;
    _this.skip.events.onInputDown.add(function () {
      _this.stopAudio();

      if (_this.demoVideo_2) _this.demoVideo_2.stop(false);
      if (_this.demoVideo_1) _this.demoVideo_1.stop(false);
      if (_this.videoWorld_1) _this.videoWorld_1.destroy();
      if (_this.videoWorld_2) _this.videoWorld_2.destroy();

      _this.game.paused = false; //* restart the game
    });
  },
  showDemoVideo: function () {
    // _this.demoVideo_1 = _this.add.video('ML2_1');
    // _this.demoVideo_1.play(false);
    // _this.demoVideo_1.changeSource("demoVideos/ML2-G7_1.mp4");
    // _this.video_playing = 1;
    // _this.videoWorld_1 = _this.demoVideo_1.addToWorld();
    // //* play the demo audio1 after 4 sec delay
    // _this.demoAudio1Timer = setTimeout(function ()    //* demoAudio1 js timer to play demoAudio1Timer after 4 seconds.
    // {
    //     console.log("inside demoAudio1sound.....")
    //     _this.demoVideo_1.playbackRate = 0;     //* pausing the video after 4sec
    //     clearTimeout(_this.demoAudio1Timer);         //* clear the time once its used.
    //     _this.demoAudio1.play();
    // }, 4000);
    // _this.demoVideo1PauseTimer = setTimeout(function () {
    //     console.log("inside demoAudio1sound.....")
    //     _this.demoVideo_1.playbackRate = 1;  //* resuming the video after 9 sec
    //     clearTimeout(_this.demoVideo1PauseTimer);
    // }, 9000);
    // _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1 after 11 seconds.
    // {
    //     console.log("inside q1sound.....")
    //     clearTimeout(_this.q1Timer);         //* clear the time once its used.
    //     _this.q1Sound.play();
    // }, 11000);
    // _this.demoAudio2Timer = setTimeout(function ()    //* demo audio2 js timer to play demo audio2 after 10 seconds.
    // {
    //     console.log("inside demoau2sound.....")
    //     clearTimeout(_this.demoAudio2Timer);         //* clear the time once its used.
    //     _this.demoAudio2.play();
    // }, 19000);
    // _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2 after 15 seconds.
    // {
    //     console.log("inside q2sound.....")
    //     clearTimeout(_this.q2Timer);         //* clear the time once its used.
    //     _this.q2Sound.play();
    // }, 24000);
    // _this.demoVideo_1.onComplete.add(function () {
    //     console.log("audio2 ended - pause video1");
    //     _this.demoVideo_2 = _this.add.video('ML2_2');
    //     _this.demoVideo_2.play(false);
    //     _this.demoVideo_2.changeSource("demoVideos/ML2-G7_2.mp4");  //* phaser needs this.to run in mobile
    //     _this.video_playing = 2;
    //     _this.videoWorld_2 = _this.demoVideo_2.addToWorld();
    //     _this.skip.bringToTop();
    //     _this.q3Sound.play();
    //     _this.demoVideo_2.onComplete.add(function () {
    //         console.log("demovideo 2 completed......!!!1")
    //         _this.stopAudio();
    //         _this.demoVideo_2.stop(false);
    //         _this.demoVideo_1.stop(false);
    //         _this.videoWorld_1.destroy();
    //         _this.videoWorld_2.destroy();
    //         _this.game.paused = false;
    //     });
    // });
  },
};
