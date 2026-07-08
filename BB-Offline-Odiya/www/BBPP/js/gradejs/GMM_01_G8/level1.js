Game.GMM_01_G8level1 = function () {};

Game.GMM_01_G8level1.prototype = {
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
      _this.languageSelected = "English";
    } else console.log("Language selected: " + _this.languageSelected);
    _this.clickSound = document.createElement("audio");
    _this.clickSoundsrc = document.createElement("source");
    _this.clickSoundsrc.setAttribute(
      "src",
      window.baseUrl + "sounds/ClickSound.mp3"
    );
    _this.clickSound.appendChild(_this.clickSoundsrc);

    _this.successSound = document.createElement("audio");
    _this.successSoundsrc = document.createElement("source");
    _this.successSoundsrc.setAttribute(
      "src",
      window.baseUrl + "sounds/Success.mp3"
    );
    _this.successSound.appendChild(_this.successSoundsrc);

    _this.celebrationSound = document.createElement("audio");
    _this.celebrationSoundsrc = document.createElement("source");
    _this.celebrationSoundsrc.setAttribute(
      "src",
      window.baseUrl + "sounds/celebration.mp3"
    );
    _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

    _this.counterCelebrationSound = document.createElement("audio");
    _this.counterCelebrationSoundsrc = document.createElement("source");
    _this.counterCelebrationSoundsrc.setAttribute(
      "src",
      window.baseUrl + "sounds/counter_celebration.mp3"
    );
    _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

    _this.wrongans = document.createElement("audio");
    _this.wronganssrc = document.createElement("source");
    _this.wronganssrc.setAttribute(
      "src",
      window.baseUrl + "sounds/WrongCelebrationSound.mp3"
    );
    _this.wrongans.appendChild(_this.wronganssrc);

    _this.framechange = document.createElement("audio");
    _this.framechangesrc = document.createElement("source");
    _this.framechangesrc.setAttribute("src",window.baseUrl + "sounds/Frame_change_sound.mp3"
    );
    _this.framechange.appendChild(_this.framechangesrc);

    _this.snapSound = document.createElement("audio");
    _this.snapSoundsrc = document.createElement("source");
    _this.snapSoundsrc.setAttribute(
      "src",
      window.baseUrl + "sounds/snapSound.mp3"
    );
    _this.snapSound.appendChild(_this.snapSoundsrc);

    _this.Ask_Question1 = _this.createAudio("GMM_01_G8_a1");
    _this.Ask_Question2 = _this.createAudio("GMM_01_G8_a2");
    _this.Ask_Question3 = _this.createAudio("GMM_01_G8_a4");
    _this.Ask_Question4 = _this.createAudio("GMM_01_G8_a5");
    _this.Ask_Question5 = _this.createAudio("GMM_01_G8_a6");
    _this.Ask_Question6 = _this.createAudio("GMM_01_G8_a8");
    _this.Ask_Question7 = _this.createAudio("GMM_01_G8_a9");
    // _this.Ask_Question8 = _this.createAudio("VO8");
    _this.Ask_Question81 = _this.createAudio("GMM_01_G8_a10");
    // _this.Ask_Question82 = _this.createAudio("V82");

    _this.Ask_Question91 = _this.createAudio("GMM_01_G8_a11");
    // _this.Ask_Question92 = _this.createAudio("V92");

    _this.Ask_Question10 = _this.createAudio("GMM_01_G8_a12");

    _this.Ask_Question11 = _this.createAudio("GMM_01_G8_a3");
    _this.Ask_Question12 = _this.createAudio("GMM_01_G8_a7");

    telInitializerbbpp.gameIdInit("GMM_01_G8", gradeSelected);
    console.log(gameID, "gameID...");
  },

  create: function (game) {
    //* show the demo video
    _this.time.events.add(1, function () {
      // _this.ViewDemoVideo();
    });

    //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
    //* and then start after the game is unpaused and continues to call the gameCreate function.
    _this.time.events.add(1500, function () {
      console.log("//////////////////");
      _this.gameCreate(game);
    });
  },

  ViewDemoVideo: function () {
    //* pause the game before going to the demovideo
    _this.game.paused = true;
    _this.DemoVideo(); //* at the end of demo video/skip pressed, it will unpause the game.
  },

  gameCreate: function (game) {
    _this.noofAttempts = 0;
    _this.AnsTimerCount = 0;
    _this.sceneCount = 0;
    _this.questionid = null;

    _this.microConcepts;

    _this.count1 = 0;
    _this.speakerbtn;
    _this.background;
    _this.starsGroup;

    _this.seconds = 0;
    _this.minutes = 0;
    _this.selectedAns1 = "";
    _this.selectedAns2 = "";
    _this.selectedAns3 = "";
    _this.reverseDemoShown = false;

    _this.part1 = false;
    _this.part2 = false;
    _this.part3 = false;
    _this.part4 = false;
    _this.finalAns = false;
    _this.signNotselected = false;

    _this.counterForTimer = 0;

    _this.speakerbtnClicked = false;
    _this.rightbtn_Clicked = false;

    _this.Question_flag = -1;
    valuesCombinations = [];

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.setBoundsToWorld();

    _this.background = _this.add.tileSprite(
      0,
      0,
      _this.world.width,
      _this.world.height,
      "bg"
    );
    //** include the background file, navigation bar, stars, timer objects.

    _this.navBar = _this.add.sprite(0, 0, "navBar");

    _this.backbtn = _this.add.sprite(5, 6, "backbtn");
    _this.backbtn.inputEnabled = true;
    _this.backbtn.input.useHandCursor = true;
    _this.backbtn.events.onInputDown.add(function () {
      _this.state.start("grade8Geometry");
    });

    _this.speakerbtn = _this.add.sprite(600, 6, "CommonSpeakerBtn");

    _this.speakerbtn.events.onInputDown.add(function () {
      telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
      if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
        _this.speakerbtn.inputEnabled = false;
        _this.speakerbtn.input.useHandCursor = false;
        _this.clickSound.play();
        _this.stopAllSounds();

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
        if (_this.Question_flag == 6) {
          _this.Ask_Question6.currentTime = 0;
          _this.Ask_Question6.play();
        }
        if (_this.Question_flag == 7) {
          _this.Ask_Question7.currentTime = 0;
          _this.Ask_Question7.play();
        }
        if (_this.Question_flag == 8) {
          _this.Ask_Question81.currentTime = 0;
          // _this.Ask_Question82.currentTime = 0
          _this.Ask_Question81.play();
          // _this.Ask_Question81.addEventListener('ended', () => {
          //     _this.Ask_Question82.play();
          // });
        }
        if (_this.Question_flag == 9) {
          _this.Ask_Question91.currentTime = 0;
          // _this.Ask_Question92.currentTime = 0
          _this.Ask_Question91.play();
          // _this.Ask_Question91.addEventListener('ended', () => {
          //     _this.Ask_Question92.play();
          // });
        }
        if (_this.Question_flag == 10) {
          _this.Ask_Question10.currentTime = 0;
          _this.Ask_Question10.play();
        }
        if (_this.Question_flag == 11) {
          _this.Ask_Question11.currentTime = 0;
          _this.Ask_Question11.play();
        }
        if (_this.Question_flag == 12) {
          _this.Ask_Question12.currentTime = 0;
          _this.Ask_Question12.play();
        }

        _this.time.events.add(3000, function () {
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

    _this.numGroup;

    // BULB
    // _this.hintBtn = _this.add.sprite(670, 6, 'bulb');
    // _this.hintBtn.scale.setTo(0.5, 0.6);
    // _this.hintBtn.smoothed = false;
    // _this.hintBtnAnim = _this.hintBtn.animations.add('hint');
    // _this.hintBtnAnim.play(15);
    // _this.hintBtnAnim.onComplete.add(function () {
    //     _this.hintBtnAnim.play(15);
    // }, _this);
    // _this.hintBtn.inputEnabled = true;
    // _this.hintBtn.input.useHandCursor = true;

    // _this.hintBtn.events.onInputDown.add(function () {
    //     console.log("inside hintbutton function");
    //     _this.hintBtn.inputEnabled = false;
    //     _this.hintBtn.input.useHandCursor = false;
    //     //* show the demo video
    //     _this.time.events.add(1, function () {
    //         _this.ViewDemoVideo();
    //     });

    // });

    _this.generateStarsForTheScene(6);

    //* start the game with first question
    _this.time.events.add(1000, _this.getQuestion);
  },

  createAudio: function (src) {
    audio = document.createElement("audio");
    audiosrc = document.createElement("source");
    audiosrc.setAttribute(
      "src",
      window.baseUrl +
        "questionSounds/GMM-01-G8/" +
        _this.languageSelected +
        "/" +
        src +
        ".mp3"
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
        // _this.hintBtn.inputEnabled = true;
        // _this.hintBtn.input.useHandCursor = true;
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
    _this.StoreArrayValues();
    _this.InitialScreen();
    // _this.Ask_Question2.play();

    // Stores Random Question values in Array

    // _this.add.image(100,100,'img').frame=1
    _this.questionid = 1;
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

    _this.Ask_Question5.pause();
    _this.Ask_Question5 = null;

    _this.Ask_Question6.pause();
    _this.Ask_Question6 = null;
    _this.Ask_Question7.pause();
    _this.Ask_Question7 = null;

    _this.Ask_Question81.pause();
    _this.Ask_Question81 = null;
    // _this.Ask_Question82.pause();
    // _this.Ask_Question82 = null;

    _this.Ask_Question91.pause();
    _this.Ask_Question91 = null;
    // _this.Ask_Question92.pause();
    // _this.Ask_Question92 = null;

    _this.Ask_Question10.pause();
    _this.Ask_Question10 = null;

    _this.Ask_Question11.pause();
    _this.Ask_Question11 = null;

    _this.Ask_Question12.pause();
    _this.Ask_Question12 = null;

    if (_this.celebrationSound) {
      if (_this.celebrationSound.isPlaying) {
        _this.celebrationSound.stop();
        _this.celebrationSound = null;
      }
    }
  },

  stopAllSounds: function () {
    _this.Ask_Question1.pause();
    _this.Ask_Question2.pause();
    _this.Ask_Question3.pause();
    _this.Ask_Question4.pause();
    _this.Ask_Question5.pause();
    _this.Ask_Question6.pause();
    _this.Ask_Question7.pause();
    _this.Ask_Question81.pause();
    // _this.Ask_Question82.pause();
    _this.Ask_Question91.pause();
    // _this.Ask_Question92.pause();
    _this.Ask_Question10.pause();
    _this.Ask_Question11.pause();
    _this.Ask_Question12.pause();

    _this.Ask_Question1.currentTime = 0;
    _this.Ask_Question2.currentTime = 0;
    _this.Ask_Question3.currentTime = 0;
    _this.Ask_Question4.currentTime = 0;
    _this.Ask_Question5.currentTime = 0;
    _this.Ask_Question6.currentTime = 0;
    _this.Ask_Question7.currentTime = 0;
    _this.Ask_Question81.currentTime = 0;
    // _this.Ask_Question82.currentTime = 0;
    _this.Ask_Question91.currentTime = 0;
    // _this.Ask_Question92.currentTime = 0;
    _this.Ask_Question10.currentTime = 0;
    _this.Ask_Question11.currentTime = 0;
    _this.Ask_Question12.currentTime = 0;
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
  shuffle: function (array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

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
  InitialScreen: function () {
    _this.power = "\u{00B2}";

    _this.clearArray = [];

    _this.bgBox = _this.add.sprite(40, 70, "Box2");
    _this.bgBox.visible = false;

    // _this.box_x = [450, 40];
    //this _this.box_x array is for storing the x value of the 2 boxes. and switching the position of the Box. right or left.
    _this.box_x = [40, 450];
    _this.shuffle(_this.box_x);
    console.log(" _this.box_x :", _this.box_x);

    _this.Box1 = _this.add.sprite(_this.box_x[0], 70, "box1");
    _this.clearArray.push(_this.Box1);

    _this.Box2 = _this.add.sprite(_this.box_x[1], 70, "box1");
    _this.clearArray.push(_this.Box2);

    // _this.Box1 = _this.add.sprite(40, 70, "box1");
    // _this.clearArray.push(_this.Box1);

    // _this.Box2 = _this.add.sprite(450, 70, "box1");
    // _this.clearArray.push(_this.Box2);

    _this.biggerShape = _this.add.sprite(70, 100, _this.mainshape);

    _this.biggerShape.scale.setTo(_this.sqx, _this.sqy);
    _this.clearArray.push(_this.biggerShape);

    x = _this.Box1.x + _this.Box1.width / 2 - _this.biggerShape.width / 2;
    y = _this.Box1.y + _this.Box1.height / 2 - _this.biggerShape.height / 2;
    _this.biggerShape.x = x;
    _this.biggerShape.y = y - 10;

    _this.smallerShape = _this.add.sprite(500, 150, _this.PairShape);
    _this.smallerShape.scale.setTo(_this.scaleX, _this.scaleY);
    _this.clearArray.push(_this.smallerShape);
    x = _this.Box2.x + _this.Box2.width / 2 - _this.smallerShape.width / 2;
    y = _this.Box2.y + _this.Box2.height / 2 - _this.smallerShape.height / 2;
    _this.smallerShape.x = x;
    _this.smallerShape.y = y;

    _this.biggerShape.inputEnabled = true;
    _this.biggerShape.input.useHandCursor = true;
    _this.biggerShape.events.onInputDown.add(_this.bigShapeClicked, _this);

    _this.smallerShape.inputEnabled = true;
    _this.smallerShape.input.useHandCursor = true;
    _this.smallerShape.events.onInputDown.add(_this.pairShapeClicked, _this);

    _this.Ask_Question1.play();
    _this.Question_flag = 1;
    _this.perimeterVar = 1;
    _this.BoxClicked1 = -1;
    _this.BoxClicked2 = -1;
    _this.area = -1;
    _this.biggerShape.bringToTop();

    _this.part1 = true;

    _this.createMaskedObject();
    // _this.world.bringToTop(_this.graphics)
  },
  createMaskedObject: function () {
    _this.maskGp = [];

    // for main shape

    _this.graphics = _this.add.graphics();
    _this.graphics2 = _this.add.graphics();
    _this.graphicscpy = _this.add.graphics();
    _this.graphicsCpy = _this.add.graphics();

    const thickness = 4;
    const color = 0x00ff00;
    const alpha = 1;
    xvar1 = 0;
    xvar2 = 0;
    yvar1 = 0;
    yvar2 = 0;

    // for rectangles and squares
    if (
      _this.mainShapeval <= 1 ||
      _this.smallerShapeval == 2 ||
      _this.smallerShapeval == 3
    ) {
      if (_this.side1 == 2 && _this.side2 == 4) {
        xvar1 = 2;
        yvar1 = 4;
      }
      if (_this.side1 == 2 && _this.side2 == 5) {
        xvar1 = 3;
        yvar1 = 6;
      }

      if (
        _this.side1 == 3 &&
        _this.side2 == 2 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar2 = 4;
        xvar2 = 1.5;
      }
      if (
        _this.side1 == 3 &&
        _this.side2 == 3 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar2 = 3;
        yvar1 = 1;
        xvar2 = 1;
        xvar1 = 1;
      }
      if (
        _this.side1 == 3 &&
        _this.side2 == 4 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar2 = 4;
        yvar1 = 4;
        xvar2 = 2;
        xvar1 = 2;
      }

      if (_this.side1 == 3 && _this.side2 == 5) {
        xvar1 = 1;
        yvar1 = 3;
        yvar2 = 1;
      }
      if (
        _this.side1 == 3 &&
        _this.side2 == 5 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar2 = 4;
        yvar1 = 6;
        xvar2 = 1.5;
        xvar1 = 3;
      }
      if (_this.side1 == 3 && _this.side2 >= 6) {
        xvar1 = 2;
        yvar1 = 5;
      }

      if (_this.side1 == 4 && _this.side2 == 2) {
        yvar2 = 5;
        xvar2 = 2;
      }
      if (_this.side1 == 4 && _this.side2 == 3) {
        yvar1 = 0.5;
        yvar2 = 1;
      }
      if (
        _this.side1 == 4 &&
        _this.side2 == 3 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar1 = 0.5;
        yvar2 = 5;
        xvar2 = 2;
      }
      if (_this.side1 == 4 && _this.side2 == 5) {
        yvar1 = 3;
        xvar1 = 1;
      }
      if (
        _this.side1 == 4 &&
        _this.side2 == 5 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar1 = 6;
        xvar1 = 3;
        xvar2 = 2;
        yvar2 = 5;
      }
      if (_this.side1 == 4 && _this.side2 == 6) {
        yvar1 = 3.5;
        xvar1 = 1;
      }
      if (_this.side1 == 4 && _this.side2 == 7) {
        yvar1 = 4.5;
        xvar1 = 1.5;
        yvar2 = 2;
      }
      if (_this.side1 == 4 && _this.side2 == 8) {
        yvar1 = 6.5;
        xvar1 = 2.5;
        yvar2 = 1;
      }

      if (_this.side1 == 5 && _this.side2 == 3) {
        yvar2 = 3;
        yvar1 = 0.5;
        xvar2 = 1;
      }
      if (_this.side1 == 5 && _this.side2 == 4) {
        yvar2 = 2;
        yvar1 = 1;
        xvar2 = 1;
        xvar1 = 0.2;
      }
      if (_this.side1 == 5 && _this.side2 == 6) {
        yvar2 = 0.5;
        yvar1 = 3;
        xvar1 = 1;
        xvar2 = 1;
      }
      if (_this.side1 == 5 && _this.side2 == 7) {
        yvar2 = 1;
        yvar1 = 4.5;
        xvar1 = 1.5;
      }
      if (_this.side1 == 5 && _this.side2 == 8) {
        yvar1 = 5;
        xvar1 = 2;
      }

      if (_this.side1 == 6 && _this.side2 == 3) {
        xvar2 = 1;
        yvar2 = 3;
        yvar1 = 0.5;
      }
      if (_this.side1 == 6 && _this.side2 == 4) {
        xvar2 = 1;
        yvar2 = 3;
        yvar1 = 1;
        xvar1 = 0.5;
      }
      if (_this.side1 == 6 && _this.side2 == 5) {
        yvar2 = 3;
        yvar1 = 2;
        xvar2 = 1;
        xvar1 = 0.5;
      }
      if (_this.side1 == 6 && _this.side2 == 7) {
        yvar1 = 4;
        xvar1 = 1.5;
        yvar2 = 3;
        xvar2 = 1;
      }
      if (_this.side1 == 6 && _this.side2 == 8) {
        yvar1 = 6;
        xvar1 = 2;
        yvar2 = 3;
        xvar2 = 1;
      }

      if (_this.side1 == 7 && _this.side2 == 3) {
        xvar2 = 3;
        yvar1 = 1;
        yvar2 = 6;
        xvar1 = 0.2;
      }
      if (_this.side1 == 7 && _this.side2 == 4) {
        xvar2 = 2;
        yvar1 = 1.8;
        yvar2 = 5;
        xvar1 = 0.5;
      }
      if (_this.side1 == 7 && _this.side2 == 5) {
        xvar2 = 2;
        yvar1 = 3;
        yvar2 = 5;
        xvar1 = 1;
      }
      if (_this.side1 == 7 && _this.side2 == 6) {
        xvar2 = 2.3;
        yvar1 = 3.5;
        yvar2 = 5;
        xvar1 = 1;
      }
      if (_this.side1 == 7 && _this.side2 == 8) {
        xvar2 = 2;
        yvar1 = 6.5;
        yvar2 = 5;
        xvar1 = 2.5;
      }

      if (_this.side1 == 8 && _this.side2 == 5) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 3;
        xvar1 = 1;
      }
      if (_this.side1 == 8 && _this.side2 == 6) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 4;
        xvar1 = 1.5;
      }
      if (_this.side1 == 8 && _this.side2 == 3) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 0.5;
      }
      if (_this.side1 == 8 && _this.side2 == 4) {
        xvar2 = 3;
        yvar2 = 7;
        xvar1 = 0.5;
        yvar1 = 1.5;
      }
      if (_this.side1 == 8 && _this.side2 == 7) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 5.5;
        xvar1 = 2;
      }

      if (_this.side1 == 8 && _this.side2 == 8) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 6;
        xvar1 = 2;
      }

      if (_this.side1 == 7 && _this.side2 == 7) {
        yvar2 = 4.5;
        yvar1 = 4.5;
        xvar1 = 1.5;
        xvar2 = 2;
      }
      if (_this.side1 == 6 && _this.side2 == 6) {
        xvar2 = 1;
        yvar2 = 3;
        yvar1 = 3.5;
        xvar1 = 1;
      }
      if (_this.side1 == 5 && _this.side2 == 5) {
        xvar2 = 1;
        yvar2 = 3;
        yvar1 = 3;
        xvar1 = 1;
      }
      if (_this.side1 == _this.side2 && _this.side1 == 4) {
        xvar1 = 1;
        yvar1 = 2.5;
        yvar2 = 2;
        xvar2 = 0.5;
      }

      if (
        _this.side1 == _this.side2 &&
        _this.side1 == 4 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        xvar1 = 2;
        yvar1 = 4;
        yvar2 = 6;
        xvar2 = 2;
      }

      if (_this.mainShapeval <= 1) {
        _this.graphics.lineStyle(thickness, color, alpha);
        _this.graphics.drawRect(
          _this.biggerShape.x + xvar1,
          _this.biggerShape.y + xvar2,
          _this.biggerShape.width - yvar1,
          _this.biggerShape.height - yvar2
        );
        _this.biggerShape.mask = _this.graphics;

        _this.bx1 = xvar1;
        _this.bx2 = xvar2;
        _this.by1 = yvar1;
        _this.by2 = yvar2;
      } else {
        _this.graphics2.lineStyle(thickness, color, alpha);
        _this.graphics2.drawRect(
          _this.smallerShape.x + xvar1,
          _this.smallerShape.y + xvar2,
          _this.smallerShape.width - yvar1,
          _this.smallerShape.height - yvar2
        );
        _this.smallerShape.mask = _this.graphics2;

        _this.sx1 = xvar1;
        _this.sx2 = xvar2;
        _this.sy1 = yvar1;
        _this.sy2 = yvar2;
      }
    }
    xvar1 = 0;
    xvar2 = 0;
    yvar1 = 0;
    yvar2 = 0;
    if (_this.mainShapeval == 2 || _this.smallerShapeval == 0) {
      if (_this.pL == 3) {
        _this.angle = 30;
      }
      if (_this.pL == 2) {
        _this.angle = 20;
      }
      if (_this.pL == 4) {
        _this.angle = 40;
      }
      if (_this.pL == 5) {
        _this.angle = 50;
      }
      if (_this.pL == 6) {
        _this.angle = 60;
      }

      if (_this.pL == 2 && _this.pB == 2) {
        xvar1 = 2;
        xvar2 = 1;
        yvar1 = 2;
        yvar2 = 2;
      }

      if (_this.pL == 2 && _this.pB == 3) {
        xvar1 = 2;
        xvar2 = 2;
        yvar1 = 1.5;
        yvar2 = 4;
      }
      if (_this.pL == 2 && _this.pB == 4) {
        xvar1 = 1.5;
        xvar2 = 4;
        yvar1 = 2;
        yvar2 = 6;
      }

      if (_this.pL == 3 && _this.pB == 1) {
        xvar1 = 2;
        yvar1 = 3;
        _this.angle = 32;
      }
      if (_this.pL == 3 && _this.pB == 2) {
        xvar1 = 3;
        yvar1 = 3;
        xvar2 = 1;
        yvar2 = 2;
        _this.angle = 30;
      }
      if (_this.pL == 3 && _this.pB == 3) {
        xvar1 = 2;
        yvar1 = 4;
        xvar2 = 2;
        yvar2 = 3;
        // _this.angle=30
      }
      if (_this.pL == 3 && _this.pB == 4) {
        xvar1 = 3;
        xvar2 = 3.8;
        yvar1 = 3;
        yvar2 = 6;
      }
      if (_this.pL == 3 && _this.pB == 5) {
        xvar1 = 3;
        xvar2 = 6;
        yvar1 = 3;
        yvar2 = 8;
      }
      if (_this.pL == 3 && _this.pB == 6) {
        xvar1 = 3;
        xvar2 = 7;
        yvar1 = 3;
        yvar2 = 9;
      }
      if (_this.pL == 3 && _this.pB == 7) {
        xvar1 = 3;
        xvar2 = 9;
        yvar1 = 3;
        yvar2 = 11;
      }
      if (_this.pL == 3 && _this.pB == 8) {
        xvar1 = 3;
        xvar2 = 11;
        yvar1 = 3;
        yvar2 = 13;
      }

      if (_this.pL == 4 && _this.pB == 1) {
        xvar1 = 3;
        yvar1 = 4;
        _this.angle = 43;
      }
      if (_this.pL == 4 && _this.pB == 2) {
        xvar1 = 3;
        yvar1 = 4;
        yvar2 = 1;
        _this.angle = 43;
      }
      if (_this.pL == 4 && _this.pB == 3) {
        xvar1 = 4;
        yvar1 = 5;
        yvar2 = 3;
        xvar2 = 2;
        // _this.angle = 43;
      }
      if (_this.pL == 4 && _this.pB == 4) {
        xvar1 = 4.6;
        xvar2 = 5;
        yvar1 = 5;
        yvar2 = 5.5;

        _this.angle = 40;
      }
      if (_this.pL == 4 && _this.pB == 5) {
        xvar1 = 4.6;
        xvar2 = 6;
        yvar1 = 5;
        yvar2 = 7;
        _this.angle = 40;
      }
      if (_this.pL == 4 && _this.pB == 6) {
        xvar1 = 4.6;
        xvar2 = 7.5;
        yvar1 = 5;
        yvar2 = 9;
        _this.angle = 40;
      }
      if (_this.pL == 4 && _this.pB == 7) {
        xvar1 = 4.6;
        xvar2 = 9;
        yvar1 = 5;
        yvar2 = 11;
        _this.angle = 40;
      }
      if (_this.pL == 4 && _this.pB == 8) {
        xvar1 = 4.6;
        xvar2 = 11;
        yvar1 = 5;
        yvar2 = 13;
        _this.angle = 40;
      }

      if (_this.pL == 5 && _this.pB == 1) {
        xvar1 = 4;
        yvar1 = 5;
        _this.angle = 52;
      }
      if (_this.pL == 5 && _this.pB == 2) {
        xvar1 = 4;
        yvar1 = 6;
        xvar2 = 1;
        yvar2 = 2;
        _this.angle = 52;
      }
      if (_this.pL == 5 && _this.pB == 3) {
        xvar1 = 4.5;
        yvar1 = 6;
        xvar2 = 2;
        yvar2 = 2.5;
        _this.angle = 52;
      }
      if (_this.pL == 5 && _this.pB == 4) {
        xvar1 = 6;
        xvar2 = 4;
        yvar1 = 6;
        yvar2 = 6;
        _this.angle = 50;
        console.log("yes");
      }
      if (_this.pL == 5 && _this.pB == 5) {
        xvar1 = 6;
        xvar2 = 6.2;
        yvar1 = 6;
        yvar2 = 8;
        _this.angle = 50;
      }
      if (_this.pL == 5 && _this.pB == 6) {
        xvar1 = 6;
        xvar2 = 7.2;
        yvar1 = 6;
        yvar2 = 9;
        _this.angle = 50;
      }
      if (_this.pL == 5 && _this.pB == 7) {
        xvar1 = 6;
        xvar2 = 9;
        yvar1 = 6;
        yvar2 = 11;
        _this.angle = 50;
      }
      if (_this.pL == 5 && _this.pB == 8) {
        xvar1 = 6;
        xvar2 = 10.5;
        yvar1 = 6;
        yvar2 = 12.5;
        _this.angle = 50;
      }

      if (_this.pL == 6 && _this.pB <= 3) {
        xvar1 = 3;
        yvar1 = 5;
        _this.angle = 65;
      }
      if (_this.pL == 6 && _this.pB == 4) {
        xvar1 = 7.2;
        xvar2 = 4.5;
        yvar1 = 7.2;
        yvar2 = 5;
        _this.angle = 60;
      }
      if (_this.pL == 6 && _this.pB == 5) {
        xvar1 = 7.2;
        xvar2 = 6;
        yvar1 = 7.2;
        yvar2 = 7;
        _this.angle = 60;
      }
      if (_this.pL == 6 && _this.pB == 6) {
        xvar1 = 7.2;
        xvar2 = 7.5;
        yvar1 = 7.2;
        yvar2 = 9;
        _this.angle = 60;
      }
      if (_this.pL == 6 && _this.pB == 7) {
        xvar1 = 7.2;
        xvar2 = 9;
        yvar1 = 7.2;
        yvar2 = 10.5;
        _this.angle = 60;
      }
      if (_this.pL == 6 && _this.pB == 8) {
        xvar1 = 7.2;
        xvar2 = 10.5;
        yvar1 = 7.2;
        yvar2 = 12.5;
        _this.angle = 60;
      }
      if (_this.pL == 7 && _this.pB <= 3) {
        xvar1 = 5;
        yvar1 = 6;
        _this.angle = 75;
      }

      if (_this.pL == 7 && _this.pB == 4) {
        xvar1 = 9;
        xvar2 = 4.5;
        yvar1 = 9.2;
        yvar2 = 5.5;
        _this.angle = 70;
      }
      if (_this.pL == 7 && _this.pB == 5) {
        xvar1 = 9;
        xvar2 = 6;
        yvar1 = 9.2;
        yvar2 = 7;
        _this.angle = 70;
      }
      if (_this.pL == 7 && _this.pB == 6) {
        xvar1 = 9;
        xvar2 = 7.5;
        yvar1 = 9.2;
        yvar2 = 8.5;
        _this.angle = 70;
      }
      if (_this.pL == 7 && _this.pB == 7) {
        xvar1 = 9;
        xvar2 = 9.5;
        yvar1 = 9.2;
        yvar2 = 11;
        _this.angle = 70;
      }
      if (_this.pL == 7 && _this.pB == 8) {
        xvar1 = 9;
        xvar2 = 11.5;
        yvar1 = 9.2;
        yvar2 = 13;
        _this.angle = 70;
      }

      if (_this.pL == 8 && _this.pB == 4) {
        xvar1 = 10.5;
        xvar2 = 4.5;
        yvar1 = 10.5;
        yvar2 = 5.5;
        _this.angle = 80;
      }
      if (_this.pL == 8 && _this.pB == 5) {
        xvar1 = 10.5;
        xvar2 = 6;
        yvar1 = 10.5;
        yvar2 = 7;
        _this.angle = 80;
      }
      if (_this.pL == 8 && _this.pB == 6) {
        xvar1 = 10.5;
        xvar2 = 7.5;
        yvar1 = 10.5;
        yvar2 = 8.5;
        _this.angle = 80;
      }
      if (_this.pL == 8 && _this.pB == 7) {
        xvar1 = 10.5;
        xvar2 = 9.5;
        yvar1 = 10.5;
        yvar2 = 11;
        _this.angle = 80;
      }
      if (_this.pL == 8 && _this.pB == 8) {
        xvar1 = 10.5;
        xvar2 = 11.5;
        yvar1 = 10.5;
        yvar2 = 13;
        _this.angle = 80;
      }

      _this.graphics.lineStyle(thickness, color, alpha);

      if (_this.mainShapeval == 2) {
        x = _this.biggerShape.x;
        y = _this.biggerShape.y + _this.biggerShape.height;
        _this.graphicscpy.moveTo(x + xvar1, y - yvar2); // Set the starting point of the triangle
        _this.graphicscpy.lineTo(
          x + _this.angle + xvar1,
          _this.biggerShape.y + xvar2
        ); // Draw the first line of the triangle
        _this.graphicscpy.lineTo(
          x + _this.biggerShape.width - yvar1,
          _this.biggerShape.y + xvar2
        ); // Draw the second line of the triangle
        _this.graphicscpy.lineTo(
          x + _this.biggerShape.width - _this.angle - yvar1,
          y - yvar2
        ); // Draw the third line of the triangle to close the shape
        _this.graphicscpy.lineTo(x + xvar1, y - yvar2);

        _this.graphics.moveTo(x + xvar1, y - yvar2); // Set the starting point of the triangle
        _this.graphics.lineTo(
          x + _this.angle + xvar1,
          _this.biggerShape.y + xvar2
        ); // Draw the first line of the triangle
        _this.graphics.lineTo(
          x + _this.biggerShape.width - yvar1,
          _this.biggerShape.y + xvar2
        ); // Draw the second line of the triangle
        _this.graphics.lineTo(
          x + _this.biggerShape.width - _this.angle - yvar1,
          y - yvar2
        ); // Draw the third line of the triangle to close the shape
        _this.graphics.lineTo(x + xvar1, y - yvar2); // Draw the third line of the triangle to close the shape
        _this.biggerShape.mask = _this.graphics;

        _this.bx1 = xvar1;
        _this.bx2 = xvar2;
        _this.by1 = yvar1;
        _this.by2 = yvar2;
      } else {
        _this.graphics2.lineStyle(thickness, color, alpha);

        x = _this.smallerShape.x;
        y = _this.smallerShape.y + _this.smallerShape.height;

        _this.graphics2.moveTo(x + xvar1, y - yvar2); // Set the starting point of the triangle
        _this.graphics2.lineTo(
          x + _this.angle + xvar1,
          _this.smallerShape.y + xvar2
        ); // Draw the first line of the triangle
        _this.graphics2.lineTo(
          x + _this.smallerShape.width - yvar1,
          _this.smallerShape.y + xvar2
        ); // Draw the second line of the triangle
        _this.graphics2.lineTo(
          x + _this.smallerShape.width - _this.angle - yvar1,
          y - yvar2
        ); // Draw the third line of the triangle to close the shape
        _this.graphics2.lineTo(x + xvar1, y - yvar2); // Draw the third line of the triangle to close the shape
        _this.smallerShape.mask = _this.graphics2;

        _this.sx1 = xvar1;
        _this.sx2 = xvar2;
        _this.sy1 = yvar1;
        _this.sy2 = yvar2;
      }
    }
    xvar1 = 0;
    xvar2 = 0;
    yvar1 = 0;
    yvar2 = 0;

    // for Triangle
    if (_this.smallerShapeval == 1 || _this.smallerShapeval == 4) {
      _this.graphics2.lineStyle(thickness, color, alpha);
      if (_this.smallerShapeval == 1) {
        _this.pB2 = _this.pB;
        _this.pL2 = _this.pL;
      }

      console.log(_this.pB2 + " " + _this.pL2);

      if (_this.pL2 == 2 && _this.pB2 == 1) {
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 3) {
        xvar1 = 0.5;
        yvar1 = 1;
        yvar2 = 1;
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 2) {
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 4) {
        xvar1 = 0.5;
        yvar1 = 1;
        yvar2 = 2;
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 5) {
        xvar1 = 0.5;
        yvar1 = 1;
        yvar2 = 2;
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 6) {
        yvar1 = 1;
        yvar2 = 3;
        _this.angle = 38;
      }

      if (_this.pL2 == 3 && _this.pB2 == 1) {
        xvar1 = 1;
        _this.angle = 57;
      }
      if (_this.pL2 == 3 && _this.pB2 == 2) {
        _this.angle = 57;
      }
      if (_this.pL2 == 3 && _this.pB2 == 3) {
        xvar1 = 0.5;
        yvar1 = 1.8;
        yvar2 = 1;
        _this.angle = 57.5;
      }
      if (_this.pL2 == 3 && _this.pB2 == 4) {
        xvar1 = 1;
        yvar1 = 2.5;
        yvar2 = 1.5;
        _this.angle = 57;
      }
      if (_this.pL2 == 3 && _this.pB2 == 5) {
        xvar1 = 3;
        yvar1 = 3;
        yvar2 = 3;
        _this.angle = 54;
      }
      if (_this.pL2 == 3 && _this.pB2 == 6) {
        xvar1 = 1.8;
        yvar1 = 3;
        yvar2 = 3;
        _this.angle = 56;
      }

      if (
        _this.pL2 == 4 &&
        _this.pB2 == 1 &&
        _this.smallerShape.key == "scalTr"
      ) {
        _this.angle = 30;
      }
      if (
        _this.pL2 == 4 &&
        _this.pB2 == 1 &&
        _this.smallerShape.key != "scalTr"
      ) {
        xvar1 = 0.3;
        yvar1 = 1;
        _this.angle = 75;
      }
      if (_this.pL2 == 4 && _this.pB2 == 2) {
        xvar1 = 2.5;
        yvar1 = 2;
        _this.angle = 73;
      }

      if (_this.pL2 == 4 && _this.pB2 == 3) {
        xvar1 = 2;
        yvar1 = 2;
        yvar2 = 1;
        _this.angle = 73;
      }
      if (_this.pL2 == 4 && _this.pB2 == 4) {
        xvar1 = 3;
        yvar1 = 3;
        yvar2 = 2;
        _this.angle = 73;
      }
      if (_this.pL2 == 4 && _this.pB2 == 5) {
        xvar1 = 3.8;
        yvar1 = 4.5;
        yvar2 = 3;
        _this.angle = 72;
      }
      if (_this.pL2 == 4 && _this.pB2 == 6) {
        xvar1 = 3.7;
        yvar1 = 4.5;
        yvar2 = 4;
        _this.angle = 72;
      }

      // for 5 and 6 -> 1 to 4

      if (_this.pL2 == 5 && _this.pB2 == 1) {
        xvar1 = 1;
        yvar1 = 1;
        _this.angle = 94;
      }
      if (_this.pL2 == 5 && _this.pB2 == 2) {
        xvar1 = 1.5;
        yvar1 = 1.5;
        _this.angle = 94;
      }
      if (_this.pL2 == 5 && _this.pB2 == 3) {
        xvar1 = 3.5;
        yvar1 = 4;
        yvar2 = 1;

        _this.angle = 91.5;
      }
      if (_this.pL2 == 5 && _this.pB2 == 4) {
        xvar1 = 2;
        yvar1 = 4;
        yvar2 = 2;
        _this.angle = 93;
      }

      if (
        _this.pL2 == 6 &&
        _this.pB2 == 1 &&
        _this.smallerShape.key != "scalTr"
      ) {
        xvar1 = 0.5;
        yvar1 = 0.6;
        _this.angle = 115;
      }
      if (
        _this.pL2 == 6 &&
        _this.pB2 == 1 &&
        _this.smallerShape.key == "scalTr"
      ) {
        // xvar1 = 1
        // yvar1 = 1
        _this.angle = 44;
      }
      if (_this.pL2 == 6 && _this.pB2 == 2) {
        xvar1 = 1;
        yvar1 = 2;
        _this.angle = 113;
      }
      if (_this.pL2 == 6 && _this.pB2 == 3) {
        xvar1 = 3;
        yvar1 = 5;
        yvar2 = 1;
        _this.angle = 113;
      }
      if (_this.pL2 == 6 && _this.pB2 == 4) {
        xvar1 = 4;
        yvar1 = 5;
        yvar2 = 2;
        _this.angle = 115;
      }

      x = _this.smallerShape.x;
      y = _this.smallerShape.y + _this.smallerShape.height;

      _this.graphics2.moveTo(x + xvar1, y - yvar2); // Set the starting point of the triangle
      if (_this.pL2 == 6 && _this.pB2 == 3)
        _this.graphics2.lineTo(
          x + _this.angle + xvar1 - 3,
          _this.smallerShape.y + yvar1
        );
      if (_this.pL2 == 6 && _this.pB2 == 4)
        _this.graphics2.lineTo(
          x + _this.angle + xvar1 - 5,
          _this.smallerShape.y + yvar1
        );
      // Draw the first line of the triangle
      else
        _this.graphics2.lineTo(
          x + _this.angle + xvar1,
          _this.smallerShape.y + yvar1
        ); // Draw the first line of the triangle

      _this.graphics2.lineTo(x + _this.smallerShape.width - yvar1, y - yvar2); // Draw the second line of the triangle
      _this.graphics2.lineTo(x + xvar1, y - yvar2); // Draw the third line of the triangle to close the shape

      _this.sx1 = xvar1;
      _this.sx2 = xvar2;
      _this.sy1 = yvar1;
      _this.sy2 = yvar2;
      _this.smallerShape.mask = _this.graphics2;
    }

    if (_this.mainShapeval == 2 && _this.pL == 8 && _this.pB == 5) {
      _this.bx1 += 9;
    }

    _this.smallerGraphicsWidth = _this.graphics2.width;
    console.log("value of its width = " + _this.smallerGraphicsWidth);
  },
  createMakedPairedObject: function () {
    _this.graphicsP = _this.add.graphics();

    const thickness = 4;
    const color = 0x00ff00;
    const alpha = 1;
    xvar1 = 0;
    xvar2 = 0;
    yvar1 = 0;
    yvar2 = 0;

    // for rectangles and squares
    if (_this.smallerShapeval == 2 || _this.smallerShapeval == 3) {
      if (_this.side1 == 2 && _this.side2 == 4) {
        xvar1 = 2;
        yvar1 = 4;
      }
      if (_this.side1 == 2 && _this.side2 == 5) {
        xvar1 = 3;
        yvar1 = 6;
      }

      if (
        _this.side1 == 3 &&
        _this.side2 == 2 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar2 = 4;
        xvar2 = 1.5;
      }
      if (
        _this.side1 == 3 &&
        _this.side2 == 3 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar2 = 3;
        yvar1 = 1;
        xvar2 = 1;
        xvar1 = 1;
      }
      if (
        _this.side1 == 3 &&
        _this.side2 == 4 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar2 = 4;
        yvar1 = 4;
        xvar2 = 2;
        xvar1 = 2;
      }

      if (_this.side1 == 3 && _this.side2 == 5) {
        xvar1 = 1;
        yvar1 = 3;
        yvar2 = 1;
      }
      if (
        _this.side1 == 3 &&
        _this.side2 == 5 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar2 = 4;
        yvar1 = 6;
        xvar2 = 1.5;
        xvar1 = 3;
      }
      if (_this.side1 == 3 && _this.side2 >= 6) {
        xvar1 = 2;
        yvar1 = 5;
      }

      if (_this.side1 == 4 && _this.side2 == 2) {
        yvar2 = 5;
        xvar2 = 2;
      }
      if (_this.side1 == 4 && _this.side2 == 3) {
        yvar1 = 0.5;
        yvar2 = 1;
      }
      if (
        _this.side1 == 4 &&
        _this.side2 == 3 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar1 = 0.5;
        yvar2 = 5;
        xvar2 = 2;
      }
      if (_this.side1 == 4 && _this.side2 == 5) {
        yvar1 = 3;
        xvar1 = 1;
      }
      if (
        _this.side1 == 4 &&
        _this.side2 == 5 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar1 = 6;
        xvar1 = 3;
        xvar2 = 2;
        yvar2 = 5;
      }
      if (_this.side1 == 4 && _this.side2 == 6) {
        yvar1 = 3.5;
        xvar1 = 1;
      }
      if (_this.side1 == 4 && _this.side2 == 7) {
        yvar1 = 4.5;
        xvar1 = 1.5;
        yvar2 = 2;
      }
      if (_this.side1 == 4 && _this.side2 == 8) {
        yvar1 = 6.5;
        xvar1 = 2.5;
        yvar2 = 1;
      }

      if (_this.side1 == 5 && _this.side2 == 3) {
        yvar2 = 3;
        yvar1 = 0.5;
        xvar2 = 1;
      }
      if (_this.side1 == 5 && _this.side2 == 4) {
        yvar2 = 2;
        yvar1 = 1;
        xvar2 = 1;
        xvar1 = 0.2;
      }
      if (_this.side1 == 5 && _this.side2 == 6) {
        yvar2 = 0.5;
        yvar1 = 3;
        xvar1 = 1;
        xvar2 = 1;
      }
      if (_this.side1 == 5 && _this.side2 == 7) {
        yvar2 = 1;
        yvar1 = 4.5;
        xvar1 = 1.5;
      }
      if (_this.side1 == 5 && _this.side2 == 8) {
        yvar1 = 5;
        xvar1 = 2;
      }

      if (_this.side1 == 6 && _this.side2 == 3) {
        xvar2 = 1;
        yvar2 = 3;
        yvar1 = 0.5;
      }
      if (_this.side1 == 6 && _this.side2 == 4) {
        xvar2 = 1;
        yvar2 = 3;
        yvar1 = 1;
        xvar1 = 0.5;
      }
      if (_this.side1 == 6 && _this.side2 == 5) {
        yvar2 = 3;
        yvar1 = 2;
        xvar2 = 1;
        xvar1 = 0.5;
      }
      if (_this.side1 == 6 && _this.side2 == 7) {
        yvar1 = 4;
        xvar1 = 1.5;
        yvar2 = 3;
        xvar2 = 1;
      }
      if (_this.side1 == 6 && _this.side2 == 8) {
        yvar1 = 6;
        xvar1 = 2;
        yvar2 = 3;
        xvar2 = 1;
      }

      if (_this.side1 == 7 && _this.side2 == 3) {
        xvar2 = 3;
        yvar1 = 1;
        yvar2 = 6;
        xvar1 = 0.2;
      }
      if (_this.side1 == 7 && _this.side2 == 4) {
        xvar2 = 2;
        yvar1 = 1.8;
        yvar2 = 5;
        xvar1 = 0.5;
      }
      if (_this.side1 == 7 && _this.side2 == 5) {
        xvar2 = 2;
        yvar1 = 3;
        yvar2 = 5;
        xvar1 = 1;
      }
      if (_this.side1 == 7 && _this.side2 == 6) {
        xvar2 = 2.3;
        yvar1 = 3.5;
        yvar2 = 5;
        xvar1 = 1;
      }
      if (_this.side1 == 7 && _this.side2 == 8) {
        xvar2 = 2;
        yvar1 = 6.5;
        yvar2 = 5;
        xvar1 = 2.5;
      }

      if (_this.side1 == 8 && _this.side2 == 5) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 3;
        xvar1 = 1;
      }
      if (_this.side1 == 8 && _this.side2 == 6) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 4;
        xvar1 = 1.5;
      }
      if (_this.side1 == 8 && _this.side2 == 3) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 0.5;
      }
      if (_this.side1 == 8 && _this.side2 == 4) {
        xvar2 = 3;
        yvar2 = 7;
        xvar1 = 0.5;
        yvar1 = 1.5;
      }
      if (_this.side1 == 8 && _this.side2 == 7) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 5.5;
        xvar1 = 2;
      }

      if (_this.side1 == 8 && _this.side2 == 8) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 6;
        xvar1 = 2;
      }

      if (_this.side1 == 7 && _this.side2 == 7) {
        yvar2 = 4.5;
        yvar1 = 4.5;
        xvar1 = 1.5;
        xvar2 = 2;
      }
      if (_this.side1 == 6 && _this.side2 == 6) {
        xvar2 = 1;
        yvar2 = 3;
        yvar1 = 3.5;
        xvar1 = 1;
      }
      if (_this.side1 == 5 && _this.side2 == 5) {
        xvar2 = 1;
        yvar2 = 3;
        yvar1 = 3;
        xvar1 = 1;
      }
      if (_this.side1 == _this.side2 && _this.side1 == 4) {
        xvar1 = 1;
        yvar1 = 2.5;
        yvar2 = 2;
        xvar2 = 0.5;
      }

      if (
        _this.side1 == _this.side2 &&
        _this.side1 == 4 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        xvar1 = 2;
        yvar1 = 4;
        yvar2 = 6;
        xvar2 = 2;
      }

      // if (_this.mainShapeval <= 1)
      {
        _this.graphicsP.lineStyle(thickness, color, alpha);
        _this.graphicsP.drawRect(
          _this.pairImage.x + xvar1,
          _this.pairImage.y + xvar2,
          _this.pairImage.width - yvar1,
          _this.pairImage.height - yvar2
        );
        _this.pairImage.mask = _this.graphicsP;
      }
    } else if (_this.smallerShapeval == 0) {
      if (_this.pL == 3) {
        _this.angle = 30;
      }
      if (_this.pL == 2) {
        _this.angle = 20;
      }
      if (_this.pL == 4) {
        _this.angle = 40;
      }
      if (_this.pL == 5) {
        _this.angle = 50;
      }
      if (_this.pL == 6) {
        _this.angle = 60;
      }

      if (_this.pL == 2 && _this.pB == 2) {
        xvar1 = 2;
        xvar2 = 1;
        yvar1 = 2;
        yvar2 = 2;
      }

      if (_this.pL == 2 && _this.pB == 3) {
        xvar1 = 2;
        xvar2 = 2;
        yvar1 = 1.5;
        yvar2 = 4;
      }
      if (_this.pL == 2 && _this.pB == 4) {
        xvar1 = 1.5;
        xvar2 = 4;
        yvar1 = 2;
        yvar2 = 6;
      }

      if (_this.pL == 3 && _this.pB == 1) {
        xvar1 = 2;
        yvar1 = 3;
        _this.angle = 32;
      }
      if (_this.pL == 3 && _this.pB == 2) {
        xvar1 = 3;
        yvar1 = 3;
        xvar2 = 1;
        yvar2 = 2;
        _this.angle = 30;
      }
      if (_this.pL == 3 && _this.pB == 3) {
        xvar1 = 2;
        yvar1 = 4;
        xvar2 = 2;
        yvar2 = 3;
        // _this.angle=30
      }
      if (_this.pL == 3 && _this.pB == 4) {
        xvar1 = 3;
        xvar2 = 3.8;
        yvar1 = 3;
        yvar2 = 6;
      }
      if (_this.pL == 3 && _this.pB == 5) {
        xvar1 = 3;
        xvar2 = 6;
        yvar1 = 3;
        yvar2 = 8;
      }
      if (_this.pL == 3 && _this.pB == 6) {
        xvar1 = 3;
        xvar2 = 7;
        yvar1 = 3;
        yvar2 = 9;
      }
      if (_this.pL == 3 && _this.pB == 7) {
        xvar1 = 3;
        xvar2 = 9;
        yvar1 = 3;
        yvar2 = 11;
      }
      if (_this.pL == 3 && _this.pB == 8) {
        xvar1 = 3;
        xvar2 = 11;
        yvar1 = 3;
        yvar2 = 13;
      }

      if (_this.pL == 4 && _this.pB == 1) {
        xvar1 = 3;
        yvar1 = 4;
        _this.angle = 43;
      }
      if (_this.pL == 4 && _this.pB == 2) {
        xvar1 = 3;
        yvar1 = 4;
        yvar2 = 1;
        _this.angle = 43;
      }
      if (_this.pL == 4 && _this.pB == 3) {
        xvar1 = 4;
        yvar1 = 5;
        yvar2 = 3;
        xvar2 = 2;
        // _this.angle = 43;
      }
      if (_this.pL == 4 && _this.pB == 4) {
        xvar1 = 4.6;
        xvar2 = 5;
        yvar1 = 5;
        yvar2 = 5.5;

        _this.angle = 40;
      }
      if (_this.pL == 4 && _this.pB == 5) {
        xvar1 = 4.6;
        xvar2 = 6;
        yvar1 = 5;
        yvar2 = 7;
        _this.angle = 40;
      }
      if (_this.pL == 4 && _this.pB == 6) {
        xvar1 = 4.6;
        xvar2 = 7.5;
        yvar1 = 5;
        yvar2 = 9;
        _this.angle = 40;
      }
      if (_this.pL == 4 && _this.pB == 7) {
        xvar1 = 4.6;
        xvar2 = 9;
        yvar1 = 5;
        yvar2 = 11;
        _this.angle = 40;
      }
      if (_this.pL == 4 && _this.pB == 8) {
        xvar1 = 4.6;
        xvar2 = 11;
        yvar1 = 5;
        yvar2 = 13;
        _this.angle = 40;
      }

      if (_this.pL == 5 && _this.pB == 1) {
        xvar1 = 4;
        yvar1 = 5;
        _this.angle = 52;
      }
      if (_this.pL == 5 && _this.pB == 2) {
        xvar1 = 4;
        yvar1 = 6;
        xvar2 = 1;
        yvar2 = 2;
        _this.angle = 52;
      }
      if (_this.pL == 5 && _this.pB == 3) {
        xvar1 = 4.5;
        yvar1 = 6;
        xvar2 = 2;
        yvar2 = 2.5;
        _this.angle = 52;
      }
      if (_this.pL == 5 && _this.pB == 4) {
        xvar1 = 6;
        xvar2 = 4;
        yvar1 = 6;
        yvar2 = 6;
        _this.angle = 50;
        console.log("yes");
      }
      if (_this.pL == 5 && _this.pB == 5) {
        xvar1 = 6;
        xvar2 = 6.2;
        yvar1 = 6;
        yvar2 = 8;
        _this.angle = 50;
      }
      if (_this.pL == 5 && _this.pB == 6) {
        xvar1 = 6;
        xvar2 = 7.2;
        yvar1 = 6;
        yvar2 = 9;
        _this.angle = 50;
      }
      if (_this.pL == 5 && _this.pB == 7) {
        xvar1 = 6;
        xvar2 = 9;
        yvar1 = 6;
        yvar2 = 11;
        _this.angle = 50;
      }
      if (_this.pL == 5 && _this.pB == 8) {
        xvar1 = 6;
        xvar2 = 10.5;
        yvar1 = 6;
        yvar2 = 12.5;
        _this.angle = 50;
      }

      if (_this.pL == 6 && _this.pB <= 3) {
        xvar1 = 3;
        yvar1 = 5;
        _this.angle = 65;
      }
      if (_this.pL == 6 && _this.pB == 4) {
        xvar1 = 7.2;
        xvar2 = 4.5;
        yvar1 = 7.2;
        yvar2 = 5;
        _this.angle = 60;
      }
      if (_this.pL == 6 && _this.pB == 5) {
        xvar1 = 7.2;
        xvar2 = 6;
        yvar1 = 7.2;
        yvar2 = 7;
        _this.angle = 60;
      }
      if (_this.pL == 6 && _this.pB == 6) {
        xvar1 = 7.2;
        xvar2 = 7.5;
        yvar1 = 7.2;
        yvar2 = 9;
        _this.angle = 60;
      }
      if (_this.pL == 6 && _this.pB == 7) {
        xvar1 = 7.2;
        xvar2 = 9;
        yvar1 = 7.2;
        yvar2 = 10.5;
        _this.angle = 60;
      }
      if (_this.pL == 6 && _this.pB == 8) {
        xvar1 = 7.2;
        xvar2 = 10.5;
        yvar1 = 7.2;
        yvar2 = 12.5;
        _this.angle = 60;
      }

      if (_this.pL == 7 && _this.pB == 4) {
        xvar1 = 9;
        xvar2 = 4.5;
        yvar1 = 9.2;
        yvar2 = 5.5;
        _this.angle = 70;
      }
      if (_this.pL == 7 && _this.pB == 5) {
        xvar1 = 9;
        xvar2 = 6;
        yvar1 = 9.2;
        yvar2 = 7;
        _this.angle = 70;
      }
      if (_this.pL == 7 && _this.pB == 6) {
        xvar1 = 9;
        xvar2 = 7.5;
        yvar1 = 9.2;
        yvar2 = 8.5;
        _this.angle = 70;
      }
      if (_this.pL == 7 && _this.pB == 7) {
        xvar1 = 9;
        xvar2 = 9.5;
        yvar1 = 9.2;
        yvar2 = 11;
        _this.angle = 70;
      }
      if (_this.pL == 7 && _this.pB == 8) {
        xvar1 = 9;
        xvar2 = 11.5;
        yvar1 = 9.2;
        yvar2 = 13;
        _this.angle = 70;
      }

      if (_this.pL == 8 && _this.pB == 4) {
        xvar1 = 10.5;
        xvar2 = 4.5;
        yvar1 = 10.5;
        yvar2 = 5.5;
        _this.angle = 80;
      }
      if (_this.pL == 8 && _this.pB == 5) {
        xvar1 = 10.5;
        xvar2 = 6;
        yvar1 = 10.5;
        yvar2 = 7;
        _this.angle = 80;
      }
      if (_this.pL == 8 && _this.pB == 6) {
        xvar1 = 10.5;
        xvar2 = 7.5;
        yvar1 = 10.5;
        yvar2 = 8.5;
        _this.angle = 80;
      }
      if (_this.pL == 8 && _this.pB == 7) {
        xvar1 = 10.5;
        xvar2 = 9.5;
        yvar1 = 10.5;
        yvar2 = 11;
        _this.angle = 80;
      }
      if (_this.pL == 8 && _this.pB == 8) {
        xvar1 = 10.5;
        xvar2 = 11.5;
        yvar1 = 10.5;
        yvar2 = 13;
        _this.angle = 80;
      }

      _this.graphicsP.lineStyle(thickness, color, alpha);

      x = _this.pairImage.x;
      y = _this.pairImage.y + _this.pairImage.height;
      _this.graphicsP.moveTo(x + xvar1, y - yvar2); // Set the starting point of the triangle
      _this.graphicsP.lineTo(
        x + _this.angle + xvar1,
        _this.pairImage.y + xvar2
      ); // Draw the first line of the triangle
      _this.graphicsP.lineTo(
        x + _this.pairImage.width - yvar1,
        _this.pairImage.y + xvar2
      ); // Draw the second line of the triangle
      _this.graphicsP.lineTo(
        x + _this.pairImage.width - _this.angle - yvar1,
        y - yvar2
      ); // Draw the third line of the triangle to close the shape
      _this.graphicsP.lineTo(x + xvar1, y - yvar2); // Draw the third line of the triangle to close the shape
      _this.pairImage.mask = _this.graphicsP;

      // }
    } else if (_this.smallerShapeval == 1 || _this.smallerShapeval == 4) {
      _this.graphicsP.lineStyle(thickness, color, alpha);
      if (_this.smallerShapeval == 1) {
        _this.pB2 = _this.pB;
        _this.pL2 = _this.pL;
      }

      console.log(_this.pB2 + " " + _this.pL2);

      if (_this.pL2 == 2 && _this.pB2 == 1) {
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 3) {
        xvar1 = 0.5;
        yvar1 = 1;
        yvar2 = 1;
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 2) {
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 4) {
        xvar1 = 0.5;
        yvar1 = 1;
        yvar2 = 2;
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 5) {
        xvar1 = 0.5;
        yvar1 = 1;
        yvar2 = 2;
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 6) {
        yvar1 = 1;
        yvar2 = 3;
        _this.angle = 38;
      }

      if (_this.pL2 == 3 && _this.pB2 == 1) {
        xvar1 = 1;
        _this.angle = 57;
      }
      if (_this.pL2 == 3 && _this.pB2 == 2) {
        _this.angle = 57;
      }
      if (_this.pL2 == 3 && _this.pB2 == 3) {
        xvar1 = 0.5;
        yvar1 = 1.8;
        yvar2 = 1;
        _this.angle = 57.5;
      }
      if (_this.pL2 == 3 && _this.pB2 == 4) {
        xvar1 = 1;
        yvar1 = 2.5;
        yvar2 = 1.5;
        _this.angle = 57;
      }
      if (_this.pL2 == 3 && _this.pB2 == 5) {
        xvar1 = 3;
        yvar1 = 3;
        yvar2 = 3;
        _this.angle = 54;
      }
      if (_this.pL2 == 3 && _this.pB2 == 6) {
        xvar1 = 1.8;
        yvar1 = 3;
        yvar2 = 3;
        _this.angle = 56;
      }

      if (
        _this.pL2 == 4 &&
        _this.pB2 == 1 &&
        _this.smallerShape.key == "scalTr"
      ) {
        _this.angle = 30;
      }
      if (
        _this.pL2 == 4 &&
        _this.pB2 == 1 &&
        _this.smallerShape.key != "scalTr"
      ) {
        xvar1 = 0.3;
        yvar1 = 1;
        _this.angle = 75;
      }
      if (_this.pL2 == 4 && _this.pB2 == 2) {
        xvar1 = 2.5;
        yvar1 = 2;
        _this.angle = 73;
      }

      if (_this.pL2 == 4 && _this.pB2 == 3) {
        xvar1 = 2;
        yvar1 = 2;
        yvar2 = 1;
        _this.angle = 73;
      }
      if (_this.pL2 == 4 && _this.pB2 == 4) {
        xvar1 = 3;
        yvar1 = 3;
        yvar2 = 2;
        _this.angle = 73;
      }
      if (_this.pL2 == 4 && _this.pB2 == 5) {
        xvar1 = 3.8;
        yvar1 = 4.5;
        yvar2 = 3;
        _this.angle = 72;
      }
      if (_this.pL2 == 4 && _this.pB2 == 6) {
        xvar1 = 3.7;
        yvar1 = 4.5;
        yvar2 = 4;
        _this.angle = 72;
      }

      // for 5 and 6 -> 1 to 4

      if (_this.pL2 == 5 && _this.pB2 == 1) {
        xvar1 = 1;
        yvar1 = 1;
        _this.angle = 94;
      }
      if (_this.pL2 == 5 && _this.pB2 == 2) {
        xvar1 = 1.5;
        yvar1 = 1.5;
        _this.angle = 94;
      }
      if (_this.pL2 == 5 && _this.pB2 == 3) {
        xvar1 = 3.5;
        yvar1 = 4;
        yvar2 = 1;

        _this.angle = 91.5;
      }
      if (_this.pL2 == 5 && _this.pB2 == 4) {
        xvar1 = 2;
        yvar1 = 4;
        yvar2 = 2;
        _this.angle = 93;
      }

      if (
        _this.pL2 == 6 &&
        _this.pB2 == 1 &&
        _this.smallerShape.key != "scalTr"
      ) {
        xvar1 = 0.5;
        yvar1 = 0.6;
        _this.angle = 115;
      }
      if (
        _this.pL2 == 6 &&
        _this.pB2 == 1 &&
        _this.smallerShape.key == "scalTr"
      ) {
        // xvar1 = 1
        // yvar1 = 1
        _this.angle = 44;
      }
      if (_this.pL2 == 6 && _this.pB2 == 2) {
        xvar1 = 1;
        yvar1 = 2;
        _this.angle = 113;
      }
      if (_this.pL2 == 6 && _this.pB2 == 3) {
        xvar1 = 3;
        yvar1 = 5;
        yvar2 = 1;
        _this.angle = 113;
      }
      if (_this.pL2 == 6 && _this.pB2 == 4) {
        xvar1 = 4;
        yvar1 = 5;
        yvar2 = 2;
        _this.angle = 115;
      }

      x = _this.pairImage.x;
      y = _this.pairImage.y + _this.pairImage.height;
      _this.graphics2.moveTo(x + xvar1, y - yvar2); // Set the starting point of the triangle
      if (_this.pL2 == 6 && _this.pB2 == 3)
        _this.graphicsP.lineTo(
          x + _this.angle + xvar1 - 3,
          _this.pairImage.y + yvar1
        );
      if (_this.pL2 == 6 && _this.pB2 == 4)
        _this.graphicsP.lineTo(
          x + _this.angle + xvar1 - 5,
          _this.pairImage.y + yvar1
        );
      // Draw the first line of the triangle
      else
        _this.graphicsP.lineTo(
          x + _this.angle + xvar1,
          _this.pairImage.y + yvar1
        ); // Draw the first line of the triangle

      _this.graphicsP.lineTo(x + _this.pairImage.width - yvar1, y - yvar2); // Draw the second line of the triangle
      _this.graphicsP.lineTo(x + xvar1, y - yvar2); // Draw the third line of the triangle to close the shape

      _this.pairImage.mask = _this.graphicsP;
    }
  },
  createMaskedObjectCpy: function (count) {
    const thickness = 4;
    const color = 0x00ff00;
    const alpha = 1;
    xvar1 = 0;
    xvar2 = 0;
    yvar1 = 0;
    yvar2 = 0;

    // for rectangles and squares
    if (_this.smallerShapeval == 2 || _this.smallerShapeval == 3) {
      if (_this.side1 == 2 && _this.side2 == 4) {
        xvar1 = 2;
        yvar1 = 4;
      }
      if (_this.side1 == 2 && _this.side2 == 5) {
        xvar1 = 3;
        yvar1 = 6;
      }

      if (
        _this.side1 == 3 &&
        _this.side2 == 2 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar2 = 4;
        xvar2 = 1.5;
      }
      if (
        _this.side1 == 3 &&
        _this.side2 == 3 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar2 = 3;
        yvar1 = 1;
        xvar2 = 1;
        xvar1 = 1;
      }
      if (
        _this.side1 == 3 &&
        _this.side2 == 4 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar2 = 4;
        yvar1 = 4;
        xvar2 = 2;
        xvar1 = 2;
      }

      if (_this.side1 == 3 && _this.side2 == 5) {
        xvar1 = 1;
        yvar1 = 3;
        yvar2 = 1;
      }
      if (
        _this.side1 == 3 &&
        _this.side2 == 5 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar2 = 4;
        yvar1 = 6;
        xvar2 = 1.5;
        xvar1 = 3;
      }
      if (_this.side1 == 3 && _this.side2 >= 6) {
        xvar1 = 2;
        yvar1 = 5;
      }

      if (_this.side1 == 4 && _this.side2 == 2) {
        yvar2 = 5;
        xvar2 = 2;
      }
      if (_this.side1 == 4 && _this.side2 == 3) {
        yvar1 = 0.5;
        yvar2 = 1;
      }
      if (
        _this.side1 == 4 &&
        _this.side2 == 3 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar1 = 0.5;
        yvar2 = 5;
        xvar2 = 2;
      }
      if (_this.side1 == 4 && _this.side2 == 5) {
        yvar1 = 3;
        xvar1 = 1;
      }
      if (
        _this.side1 == 4 &&
        _this.side2 == 5 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        yvar1 = 6;
        xvar1 = 3;
        xvar2 = 2;
        yvar2 = 5;
      }
      if (_this.side1 == 4 && _this.side2 == 6) {
        yvar1 = 3.5;
        xvar1 = 1;
      }
      if (_this.side1 == 4 && _this.side2 == 7) {
        yvar1 = 4.5;
        xvar1 = 1.5;
        yvar2 = 2;
      }
      if (_this.side1 == 4 && _this.side2 == 8) {
        yvar1 = 6.5;
        xvar1 = 2.5;
        yvar2 = 1;
      }

      if (_this.side1 == 5 && _this.side2 == 3) {
        yvar2 = 3;
        yvar1 = 0.5;
        xvar2 = 1;
      }
      if (_this.side1 == 5 && _this.side2 == 4) {
        yvar2 = 2;
        yvar1 = 1;
        xvar2 = 1;
        xvar1 = 0.2;
      }
      if (_this.side1 == 5 && _this.side2 == 6) {
        yvar2 = 0.5;
        yvar1 = 3;
        xvar1 = 1;
        xvar2 = 1;
      }
      if (_this.side1 == 5 && _this.side2 == 7) {
        yvar2 = 1;
        yvar1 = 4.5;
        xvar1 = 1.5;
      }
      if (_this.side1 == 5 && _this.side2 == 8) {
        yvar1 = 5;
        xvar1 = 2;
      }

      if (_this.side1 == 6 && _this.side2 == 3) {
        xvar2 = 1;
        yvar2 = 3;
        yvar1 = 0.5;
      }
      if (_this.side1 == 6 && _this.side2 == 4) {
        xvar2 = 1;
        yvar2 = 3;
        yvar1 = 1;
        xvar1 = 0.5;
      }
      if (_this.side1 == 6 && _this.side2 == 5) {
        yvar2 = 3;
        yvar1 = 2;
        xvar2 = 1;
        xvar1 = 0.5;
      }
      if (_this.side1 == 6 && _this.side2 == 7) {
        yvar1 = 4;
        xvar1 = 1.5;
        yvar2 = 3;
        xvar2 = 1;
      }
      if (_this.side1 == 6 && _this.side2 == 8) {
        yvar1 = 6;
        xvar1 = 2;
        yvar2 = 3;
        xvar2 = 1;
      }

      if (_this.side1 == 7 && _this.side2 == 3) {
        xvar2 = 3;
        yvar1 = 1;
        yvar2 = 6;
        xvar1 = 0.2;
      }
      if (_this.side1 == 7 && _this.side2 == 4) {
        xvar2 = 2;
        yvar1 = 1.8;
        yvar2 = 5;
        xvar1 = 0.5;
      }
      if (_this.side1 == 7 && _this.side2 == 5) {
        xvar2 = 2;
        yvar1 = 3;
        yvar2 = 5;
        xvar1 = 1;
      }
      if (_this.side1 == 7 && _this.side2 == 6) {
        xvar2 = 2.3;
        yvar1 = 3.5;
        yvar2 = 5;
        xvar1 = 1;
      }
      if (_this.side1 == 7 && _this.side2 == 8) {
        xvar2 = 2;
        yvar1 = 6.5;
        yvar2 = 5;
        xvar1 = 2.5;
      }

      if (_this.side1 == 8 && _this.side2 == 5) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 3;
        xvar1 = 1;
      }
      if (_this.side1 == 8 && _this.side2 == 6) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 4;
        xvar1 = 1.5;
      }
      if (_this.side1 == 8 && _this.side2 == 3) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 0.5;
      }
      if (_this.side1 == 8 && _this.side2 == 4) {
        xvar2 = 3;
        yvar2 = 7;
        xvar1 = 0.5;
        yvar1 = 1.5;
      }
      if (_this.side1 == 8 && _this.side2 == 7) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 5.5;
        xvar1 = 2;
      }

      if (_this.side1 == 8 && _this.side2 == 8) {
        xvar2 = 3;
        yvar2 = 7;
        yvar1 = 6;
        xvar1 = 2;
      }

      if (_this.side1 == 7 && _this.side2 == 7) {
        yvar2 = 4.5;
        yvar1 = 4.5;
        xvar1 = 1.5;
        xvar2 = 2;
      }
      if (_this.side1 == 6 && _this.side2 == 6) {
        xvar2 = 1;
        yvar2 = 3;
        yvar1 = 3.5;
        xvar1 = 1;
      }
      if (_this.side1 == 5 && _this.side2 == 5) {
        xvar2 = 1;
        yvar2 = 3;
        yvar1 = 3;
        xvar1 = 1;
      }
      if (_this.side1 == _this.side2 && _this.side1 == 4) {
        xvar1 = 1;
        yvar1 = 2.5;
        yvar2 = 2;
        xvar2 = 0.5;
      }

      if (
        _this.side1 == _this.side2 &&
        _this.side1 == 4 &&
        (_this.smallerShapeval == 3 || _this.smallerShapeval == 2)
      ) {
        xvar1 = 2;
        yvar1 = 4;
        yvar2 = 6;
        xvar2 = 2;
      }

      graphicsCpy = _this.add.graphics();
      graphicsCpy.lineStyle(thickness, color, alpha);
      shape = _this.smallerGrp.getChildAt(count);

      {
        graphicsCpy.lineStyle(thickness, color, alpha);
        graphicsCpy.drawRect(
          shape.x + xvar1,
          shape.y + xvar2,
          shape.width - yvar1,
          shape.height - yvar2
        );
        // smallergrpCpy.mask = _this.graphicsCpy
        // _this.maskGp.addChild(_this.graphicsCpy)

        _this.maskGp.push(graphicsCpy);
        shape.mask = _this.maskGp[_this.maskGp.length - 1];
        console.log("adding child");
      }
    }
    xvar1 = 0;
    xvar2 = 0;
    yvar1 = 0;
    yvar2 = 0;
    if (_this.smallerShapeval == 0) {
      if (_this.pL == 3) {
        _this.angle = 30;
      }
      if (_this.pL == 2) {
        _this.angle = 20;
      }
      if (_this.pL == 4) {
        _this.angle = 40;
      }
      if (_this.pL == 5) {
        _this.angle = 50;
      }
      if (_this.pL == 6) {
        _this.angle = 60;
      }

      if (_this.pL == 2 && _this.pB == 2) {
        xvar1 = 2;
        xvar2 = 1;
        yvar1 = 2;
        yvar2 = 2;
      }

      if (_this.pL == 2 && _this.pB == 3) {
        xvar1 = 2;
        xvar2 = 2;
        yvar1 = 1.5;
        yvar2 = 4;
      }
      if (_this.pL == 2 && _this.pB == 4) {
        xvar1 = 1.5;
        xvar2 = 4;
        yvar1 = 2;
        yvar2 = 6;
      }

      if (_this.pL == 3 && _this.pB == 1) {
        xvar1 = 2;
        yvar1 = 3;
        _this.angle = 32;
      }
      if (_this.pL == 3 && _this.pB == 2) {
        xvar1 = 3;
        yvar1 = 3;
        xvar2 = 1;
        yvar2 = 2;
        _this.angle = 30;
      }
      if (_this.pL == 3 && _this.pB == 3) {
        xvar1 = 2;
        yvar1 = 4;
        xvar2 = 2;
        yvar2 = 3;
        // _this.angle=30
      }
      if (_this.pL == 3 && _this.pB == 4) {
        xvar1 = 3;
        xvar2 = 3.8;
        yvar1 = 3;
        yvar2 = 6;
      }
      if (_this.pL == 3 && _this.pB == 5) {
        xvar1 = 3;
        xvar2 = 6;
        yvar1 = 3;
        yvar2 = 8;
      }
      if (_this.pL == 3 && _this.pB == 6) {
        xvar1 = 3;
        xvar2 = 7;
        yvar1 = 3;
        yvar2 = 9;
      }
      if (_this.pL == 3 && _this.pB == 7) {
        xvar1 = 3;
        xvar2 = 9;
        yvar1 = 3;
        yvar2 = 11;
      }
      if (_this.pL == 3 && _this.pB == 8) {
        xvar1 = 3;
        xvar2 = 11;
        yvar1 = 3;
        yvar2 = 13;
      }

      if (_this.pL == 4 && _this.pB == 1) {
        xvar1 = 3;
        yvar1 = 4;
        _this.angle = 43;
      }
      if (_this.pL == 4 && _this.pB == 2) {
        xvar1 = 3;
        yvar1 = 4;
        yvar2 = 1;
        _this.angle = 43;
      }
      if (_this.pL == 4 && _this.pB == 3) {
        xvar1 = 4;
        yvar1 = 5;
        yvar2 = 3;
        xvar2 = 2;
        // _this.angle = 43;
      }
      if (_this.pL == 4 && _this.pB == 4) {
        xvar1 = 4.6;
        xvar2 = 5;
        yvar1 = 5;
        yvar2 = 5.5;

        _this.angle = 40;
      }
      if (_this.pL == 4 && _this.pB == 5) {
        xvar1 = 4.6;
        xvar2 = 6;
        yvar1 = 5;
        yvar2 = 7;
        _this.angle = 40;
      }
      if (_this.pL == 4 && _this.pB == 6) {
        xvar1 = 4.6;
        xvar2 = 7.5;
        yvar1 = 5;
        yvar2 = 9;
        _this.angle = 40;
      }
      if (_this.pL == 4 && _this.pB == 7) {
        xvar1 = 4.6;
        xvar2 = 9;
        yvar1 = 5;
        yvar2 = 11;
        _this.angle = 40;
      }
      if (_this.pL == 4 && _this.pB == 8) {
        xvar1 = 4.6;
        xvar2 = 11;
        yvar1 = 5;
        yvar2 = 13;
        _this.angle = 40;
      }

      if (_this.pL == 5 && _this.pB == 1) {
        xvar1 = 4;
        yvar1 = 5;
        _this.angle = 52;
      }
      if (_this.pL == 5 && _this.pB == 2) {
        xvar1 = 4;
        yvar1 = 6;
        xvar2 = 1;
        yvar2 = 2;
        _this.angle = 52;
      }
      if (_this.pL == 5 && _this.pB == 3) {
        xvar1 = 4.5;
        yvar1 = 6;
        xvar2 = 2;
        yvar2 = 2.5;
        _this.angle = 52;
      }
      if (_this.pL == 5 && _this.pB == 4) {
        xvar1 = 6;
        xvar2 = 4;
        yvar1 = 6;
        yvar2 = 6;
        _this.angle = 50;
        console.log("yes");
      }
      if (_this.pL == 5 && _this.pB == 5) {
        xvar1 = 6;
        xvar2 = 6.2;
        yvar1 = 6;
        yvar2 = 8;
        _this.angle = 50;
      }
      if (_this.pL == 5 && _this.pB == 6) {
        xvar1 = 6;
        xvar2 = 7.2;
        yvar1 = 6;
        yvar2 = 9;
        _this.angle = 50;
      }
      if (_this.pL == 5 && _this.pB == 7) {
        xvar1 = 6;
        xvar2 = 9;
        yvar1 = 6;
        yvar2 = 11;
        _this.angle = 50;
      }
      if (_this.pL == 5 && _this.pB == 8) {
        xvar1 = 6;
        xvar2 = 10.5;
        yvar1 = 6;
        yvar2 = 12.5;
        _this.angle = 50;
      }

      if (_this.pL == 6 && _this.pB <= 3) {
        xvar1 = 3;
        yvar1 = 5;
        _this.angle = 65;
      }
      if (_this.pL == 6 && _this.pB == 4) {
        xvar1 = 7.2;
        xvar2 = 4.5;
        yvar1 = 7.2;
        yvar2 = 5;
        _this.angle = 60;
      }
      if (_this.pL == 6 && _this.pB == 5) {
        xvar1 = 7.2;
        xvar2 = 6;
        yvar1 = 7.2;
        yvar2 = 7;
        _this.angle = 60;
      }
      if (_this.pL == 6 && _this.pB == 6) {
        xvar1 = 7.2;
        xvar2 = 7.5;
        yvar1 = 7.2;
        yvar2 = 9;
        _this.angle = 60;
      }
      if (_this.pL == 6 && _this.pB == 7) {
        xvar1 = 7.2;
        xvar2 = 9;
        yvar1 = 7.2;
        yvar2 = 10.5;
        _this.angle = 60;
      }
      if (_this.pL == 6 && _this.pB == 8) {
        xvar1 = 7.2;
        xvar2 = 10.5;
        yvar1 = 7.2;
        yvar2 = 12.5;
        _this.angle = 60;
      }

      if (_this.pL == 7 && _this.pB == 4) {
        xvar1 = 9;
        xvar2 = 4.5;
        yvar1 = 9.2;
        yvar2 = 5.5;
        _this.angle = 70;
      }
      if (_this.pL == 7 && _this.pB == 5) {
        xvar1 = 9;
        xvar2 = 6;
        yvar1 = 9.2;
        yvar2 = 7;
        _this.angle = 70;
      }
      if (_this.pL == 7 && _this.pB == 6) {
        xvar1 = 9;
        xvar2 = 7.5;
        yvar1 = 9.2;
        yvar2 = 8.5;
        _this.angle = 70;
      }
      if (_this.pL == 7 && _this.pB == 7) {
        xvar1 = 9;
        xvar2 = 9.5;
        yvar1 = 9.2;
        yvar2 = 11;
        _this.angle = 70;
      }
      if (_this.pL == 7 && _this.pB == 8) {
        xvar1 = 9;
        xvar2 = 11.5;
        yvar1 = 9.2;
        yvar2 = 13;
        _this.angle = 70;
      }

      if (_this.pL == 8 && _this.pB == 4) {
        xvar1 = 10.5;
        xvar2 = 4.5;
        yvar1 = 10.5;
        yvar2 = 5.5;
        _this.angle = 80;
      }
      if (_this.pL == 8 && _this.pB == 5) {
        xvar1 = 10.5;
        xvar2 = 6;
        yvar1 = 10.5;
        yvar2 = 7;
        _this.angle = 80;
      }
      if (_this.pL == 8 && _this.pB == 6) {
        xvar1 = 10.5;
        xvar2 = 7.5;
        yvar1 = 10.5;
        yvar2 = 8.5;
        _this.angle = 80;
      }
      if (_this.pL == 8 && _this.pB == 7) {
        xvar1 = 10.5;
        xvar2 = 9.5;
        yvar1 = 10.5;
        yvar2 = 11;
        _this.angle = 80;
      }
      if (_this.pL == 8 && _this.pB == 8) {
        xvar1 = 10.5;
        xvar2 = 11.5;
        yvar1 = 10.5;
        yvar2 = 13;
        _this.angle = 80;
      }

      {
        // _this.graphics2.lineStyle(thickness, color, alpha);

        // x = _this.smallerShape.x
        // y = _this.smallerShape.y + _this.smallerShape.height
        // _this.graphics2.moveTo(x + xvar1, y - yvar2); // Set the starting point of the triangle
        // _this.graphics2.lineTo(x + _this.angle + xvar1, _this.smallerShape.y + xvar2); // Draw the first line of the triangle
        // _this.graphics2.lineTo(x + _this.smallerShape.width - yvar1, _this.smallerShape.y + xvar2); // Draw the second line of the triangle
        // _this.graphics2.lineTo(x + _this.smallerShape.width - _this.angle - yvar1, y - yvar2); // Draw the third line of the triangle to close the shape
        // _this.graphics2.lineTo(x + xvar1, y - yvar2); // Draw the third line of the triangle to close the shape
        // _this.smallergrpCpy.mask = _this.graphics2

        graphicsCpy = _this.add.graphics();
        graphicsCpy.lineStyle(thickness, color, alpha);
        shape = _this.smallerGrp.getChildAt(count);

        y = shape.y + shape.height;

        x = shape.x;
        graphicsCpy.moveTo(x + xvar1, y - yvar2); // Set the starting point of the triangle
        graphicsCpy.lineTo(x + _this.angle + xvar1, shape.y + xvar2); // Draw the first line of the triangle
        graphicsCpy.lineTo(x + shape.width - yvar1, shape.y + xvar2); // Draw the second line of the triangle
        graphicsCpy.lineTo(x + shape.width - _this.angle - yvar1, y - yvar2); // Draw the third line of the triangle to close the shape
        graphicsCpy.lineTo(x + xvar1, y - yvar2); // Draw the third line of the triangle to close the shape
        _this.maskGp.push(graphicsCpy);
        shape.mask = _this.maskGp[_this.maskGp.length - 1];
        console.log("adding child");
      }
    }
    xvar1 = 0;
    xvar2 = 0;
    yvar1 = 0;
    yvar2 = 0;

    // for Triangle
    if (_this.smallerShapeval == 1 || _this.smallerShapeval == 4) {
      // console.log('desiding shape x and y');

      if (_this.smallerShapeval == 1) {
        _this.pB2 = _this.pB;
        _this.pL2 = _this.pL;
      }

      console.log(_this.pB2 + " " + _this.pL2);

      if (_this.pL2 == 2 && _this.pB2 == 1) {
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 3) {
        xvar1 = 0.5;
        yvar1 = 1;
        yvar2 = 1;
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 2) {
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 4) {
        xvar1 = 0.5;
        yvar1 = 1;
        yvar2 = 2;
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 5) {
        xvar1 = 0.5;
        yvar1 = 1;
        yvar2 = 2;
        _this.angle = 38;
      }
      if (_this.pL2 == 2 && _this.pB2 == 6) {
        yvar1 = 1;
        yvar2 = 3;
        _this.angle = 38;
      }

      if (_this.pL2 == 3 && _this.pB2 == 1) {
        xvar1 = 1;
        _this.angle = 57;
      }
      if (_this.pL2 == 3 && _this.pB2 == 2) {
        _this.angle = 57;
      }
      if (_this.pL2 == 3 && _this.pB2 == 3) {
        xvar1 = 0.5;
        yvar1 = 1.8;
        yvar2 = 1;
        _this.angle = 57.5;
      }
      if (_this.pL2 == 3 && _this.pB2 == 4) {
        xvar1 = 1;
        yvar1 = 2.5;
        yvar2 = 1.5;
        _this.angle = 57;
      }
      if (_this.pL2 == 3 && _this.pB2 == 5) {
        xvar1 = 3;
        yvar1 = 3;
        yvar2 = 3;
        _this.angle = 54;
      }
      if (_this.pL2 == 3 && _this.pB2 == 6) {
        xvar1 = 1.8;
        yvar1 = 3;
        yvar2 = 3;
        _this.angle = 56;
      }

      if (
        _this.pL2 == 4 &&
        _this.pB2 == 1 &&
        _this.smallerShape.key == "scalTr"
      ) {
        _this.angle = 30;
      }
      if (
        _this.pL2 == 4 &&
        _this.pB2 == 1 &&
        _this.smallerShape.key != "scalTr"
      ) {
        xvar1 = 0.3;
        yvar1 = 1;
        _this.angle = 75;
      }
      if (_this.pL2 == 4 && _this.pB2 == 2) {
        xvar1 = 2.5;
        yvar1 = 2;
        _this.angle = 73;
      }

      if (_this.pL2 == 4 && _this.pB2 == 3) {
        xvar1 = 2;
        yvar1 = 2;
        yvar2 = 1;
        _this.angle = 73;
      }
      if (_this.pL2 == 4 && _this.pB2 == 4) {
        xvar1 = 3;
        yvar1 = 3;
        yvar2 = 2;
        _this.angle = 73;
      }
      if (_this.pL2 == 4 && _this.pB2 == 5) {
        xvar1 = 3.8;
        yvar1 = 4.5;
        yvar2 = 3;
        _this.angle = 72;
      }
      if (_this.pL2 == 4 && _this.pB2 == 6) {
        xvar1 = 3.7;
        yvar1 = 4.5;
        yvar2 = 4;
        _this.angle = 72;
      }

      // for 5 and 6 -> 1 to 4

      if (_this.pL2 == 5 && _this.pB2 == 1) {
        xvar1 = 1;
        yvar1 = 1;
        _this.angle = 94;
      }
      if (_this.pL2 == 5 && _this.pB2 == 2) {
        xvar1 = 1.5;
        yvar1 = 1.5;
        _this.angle = 94;
      }
      if (_this.pL2 == 5 && _this.pB2 == 3) {
        xvar1 = 3.5;
        yvar1 = 4;
        yvar2 = 1;

        _this.angle = 91.5;
      }
      if (_this.pL2 == 5 && _this.pB2 == 4) {
        xvar1 = 2;
        yvar1 = 4;
        yvar2 = 2;
        _this.angle = 93;
      }

      if (
        _this.pL2 == 6 &&
        _this.pB2 == 1 &&
        _this.smallerShape.key != "scalTr"
      ) {
        xvar1 = 0.5;
        yvar1 = 0.6;
        _this.angle = 115;
      }
      if (
        _this.pL2 == 6 &&
        _this.pB2 == 1 &&
        _this.smallerShape.key == "scalTr"
      ) {
        // xvar1 = 1
        // yvar1 = 1
        _this.angle = 44;
      }
      if (_this.pL2 == 6 && _this.pB2 == 2) {
        xvar1 = 1;
        yvar1 = 2;
        _this.angle = 113;
      }
      if (_this.pL2 == 6 && _this.pB2 == 3) {
        xvar1 = 3;
        yvar1 = 5;
        yvar2 = 1;
        _this.angle = 113;
      }
      if (_this.pL2 == 6 && _this.pB2 == 4) {
        xvar1 = 4;
        yvar1 = 5;
        yvar2 = 2;
        _this.angle = 115;
      }

      graphicsCpy = _this.add.graphics();
      graphicsCpy.lineStyle(thickness, color, alpha);
      shape = _this.smallerGrp.getChildAt(count);
      // console.log('_this.smallerGrp.getChildAt(count)', _this.smallerGrp.getChildAt(count));

      y = shape.y + shape.height;
      x = shape.x;
      // graphicsCpy.moveTo(x + xvar1, y - yvar2); // Set the starting point of the triangle
      // graphicsCpy.lineTo(x + _this.angle + xvar1, shape.y + xvar2); // Draw the first line of the triangle
      // graphicsCpy.lineTo(x + shape.width - yvar1, shape.y + xvar2); // Draw the second line of the triangle
      // graphicsCpy.lineTo(x + shape.width - _this.angle - yvar1, y - yvar2); // Draw the third line of the triangle to close the shape
      // graphicsCpy.lineTo(x + xvar1, y - yvar2); // Draw the third line of the triangle to close the shape

      // x = _this.smallerShape.x
      // y = _this.smallerShape.y + _this.smallerShape.height
      // _this.graphics2.moveTo(x + xvar1, y - yvar2); // Set the starting point of the triangle
      // if (_this.pL2 == 6 && _this.pB2 == 3)
      //     _this.graphics2.lineTo(x + _this.angle + xvar1 - 3, _this.smallerShape.y + yvar1);
      // if (_this.pL2 == 6 && _this.pB2 == 4)
      //     _this.graphics2.lineTo(x + _this.angle + xvar1 - 5, _this.smallerShape.y + yvar1); // Draw the first line of the triangle
      // else
      //     _this.graphics2.lineTo(x + _this.angle + xvar1, _this.smallerShape.y + yvar1); // Draw the first line of the triangle

      // _this.graphics2.lineTo(x + _this.smallerShape.width - yvar1, y - yvar2); // Draw the second line of the triangle
      // _this.graphics2.lineTo(x + xvar1, y - yvar2); // Draw the third line of the triangle to close the shape

      graphicsCpy.moveTo(x + xvar1, y - yvar2); // Set the starting point of the triangle
      if (_this.pL2 == 6 && _this.pB2 == 3)
        graphicsCpy.lineTo(x + _this.angle + xvar1 - 3, shape.y + yvar1);
      if (_this.pL2 == 6 && _this.pB2 == 4)
        graphicsCpy.lineTo(x + _this.angle + xvar1 - 5, shape.y + yvar1);
      // Draw the first line of the triangle
      else graphicsCpy.lineTo(x + _this.angle + xvar1, shape.y + yvar1); // Draw the first line of the triangle

      graphicsCpy.lineTo(x + shape.width - yvar1, y - yvar2); // Draw the second line of the triangle
      graphicsCpy.lineTo(x + xvar1, y - yvar2); // Draw the third line of the triangle to close the shape

      _this.maskGp.push(graphicsCpy);
      shape.mask = _this.maskGp[_this.maskGp.length - 1];
      console.log("adding child");
      // console.log('first if:', x + _this.angle + xvar1 - 3, shape.y + yvar1);
      // console.log('second if:', x + _this.angle + xvar1 - 5, shape.y + yvar1);
      // console.log('3rd else part:', x + _this.angle + xvar1, shape.y + yvar1);
      // console.log('2nd line',x + shape.width - yvar1, y - yvar2);
      // console.log('3rd line:',x + xvar1, y - yvar2);
    }
  },

  StoreArrayValues2: function () {
    //   length and height of main shape
    _this.pL = Math.floor(Math.random() * (9 - 3) + 3); //3,4,5,6,7,8
    _this.pB = Math.floor(Math.random() * (9 - 4) + 4); //4,5,6,7,8
    while (_this.pL == 3 && _this.pB > 5)
      _this.pB = Math.floor(Math.random() * (9 - 4) + 4); //4,5,6,7,8

    // _this.pL=3
    // _this.pB=8;
    _this.xd = _this.pL;
    _this.xy = _this.pB;

    _this.side1 = Math.floor(
      Math.random() * (Math.min(_this.pL - 1, _this.pB / 2 - 1) - 2) + 2
    ); //length

    if (_this.smallerShapeval == 2) {
      //square
      _this.side2 = _this.side1; //breadth=side2
    } else {
      _this.side2 = Math.floor(Math.random() * (_this.pL - 2 - 2) + 2);
      if (_this.pL - 2 <= 3) {
        _this.mainshape = 0;
      } else {
        while (_this.side2 == _this.side1 && _this.smallerShapeval == 3)
          _this.side2 = Math.floor(Math.random() * (_this.pL - 2 - 2) + 2);

        while (_this.smallerShapeval == 4 && _this.side2 % 2 != 0) {
          _this.side2 = Math.floor(Math.random() * (_this.pL - 2 - 2) + 2);
        }
      }
    }

    // _this.side2=2;
    // _this.side1=1;

    if (_this.side2 === 1) _this.side2 = 2;
    _this.pL2 = _this.side2;
    _this.pB2 = _this.side1;

    if (_this.side1 == _this.side2 && _this.smallerShapeval == 3) {
      _this.smallerShapeval = 2;
    }

    if (_this.side1 != _this.side2 && _this.smallerShapeval == 2) {
      _this.smallerShapeval = 3;
    }

    console.log("side = ", _this.side1);
    console.log("side = ", _this.side2);

    console.log("p length = ", _this.pL);
    console.log("b length = ", _this.pB);

    if (_this.smallerShapeval == 4) {
      _this.decideTriangle(_this.pL2, _this.pB2);
      _this.pL = _this.xd;
      _this.pB = _this.xy;
    }

    _this.findScaling2(
      _this.side1 >= _this.side2 ? _this.side1 : _this.side2,
      _this.side1 < _this.side2 ? _this.side1 : _this.side2,
      _this.pL
    );
  },
  findSlantValue: function (sideLength) {
    // height length 8 . 4*5 6*5 8*5  leng 5 4*3 lngt6,7 4*4  len3,4 4*2
    // height7 length7,8 4*5  len6 4*4 len4,5 4*3 len3 4*2
    // height 6 len3 4*2 len44*3  len5,6 4*4  len7 4*5 len8 4*6
    // height5 len7,8 4*6 ;en6 4*5 len5 4*4  len4 4*3  len3 4*2
    // height4 len8 4*7 len6,7 4*6  len5 4*5 len4 4*4 len3 4*3
    // retruning multiplication factor

    if (_this.pB == 6 && _this.pL == 5 && _this.smallerShapeval == 4) {
      return (4 + (sideLength - 1) * 2) * 3.7;
    }
    if (
      _this.pB == 4 &&
      _this.pL == 8 &&
      _this.smallerShapeval == 4 &&
      _this.pB2 == 1 &&
      _this.pL2 == 2
    ) {
      return (4 + (sideLength - 1) * 2) * 7.3;
    }
    if (_this.pB == 6 && _this.pL == 8 && _this.smallerShapeval == 4) {
      return (4 + (sideLength - 1) * 2) * 4.7;
    }
    if (_this.pB == 7 && _this.pL == 8 && _this.smallerShapeval != 4) {
      return (4 + (sideLength - 1) * 2) * 5.2;
    }
    if (
      _this.pB == 6 &&
      _this.pL == 7 &&
      _this.smallerShapeval != 4 &&
      _this.pB2 == 1
    ) {
      return (4 + (sideLength - 1) * 2) * 5.2;
    }

    if (_this.pB == 4 && _this.pL == 7) {
      return (4 + (sideLength - 1) * 2) * 7;
    }

    if (
      _this.pB == 4 &&
      _this.pL == 5 &&
      _this.smallerShapeval != 4 &&
      sideLength == 1
    ) {
      return (4 + (sideLength - 1) * 2) * 4;
    }
    if (
      _this.pB == 6 &&
      _this.pL == 6 &&
      _this.smallerShapeval != 4 &&
      _this.pB2 == 1
    ) {
      return (4 + (sideLength - 1) * 2) * 4.5;
    }
    if (_this.pB == 6 && _this.pL == 6 && _this.smallerShapeval != 4) {
      return (4 + (sideLength - 1) * 2) * 4.2;
    }

    if (
      _this.pB == 8 &&
      _this.pL == 5 &&
      _this.smallerShapeval == 4 &&
      _this.pB2 == 1
    ) {
      return (4 + (sideLength - 1) * 2) * 2.6;
    }

    if (
      _this.pB == 5 &&
      _this.pL == 8 &&
      _this.smallerShapeval == 4 &&
      _this.pB2 == 2
    ) {
      return (4 + (sideLength - 1) * 2) * 4;
    }
    if (_this.pB == 6 && _this.pL == 3) {
      return (4 + (sideLength - 1) * 2) * 2.2;
    }
    if (_this.pB == 7 && _this.pL == 5 && _this.smallerShapeval == 4) {
      return (4 + (sideLength - 1) * 2) * 2.5;
    }
    if (_this.pB == 5 && _this.pL == 5 && _this.smallerShapeval != 4) {
      return (4 + (sideLength - 1) * 2) * 4.1;
    }
    if (_this.pB == 5 && _this.pL == 5 && _this.smallerShapeval == 4) {
      return (4 + (sideLength - 1) * 2) * 3.7;
    }
    if (
      _this.pB == 8 &&
      _this.pL == 5 &&
      _this.smallerShapeval == 4 &&
      _this.pB2 == 2
    ) {
      return (4 + (sideLength - 1) * 2) * 2.3;
    }
    if (
      _this.pB == 4 &&
      _this.pL == 5 &&
      _this.smallerShapeval == 4 &&
      _this.pB2 == 1
    ) {
      return (4 + (sideLength - 1) * 2) * 4;
    }
    if (
      _this.pB == 8 &&
      _this.pL == 5 &&
      _this.smallerShapeval == 4 &&
      _this.pB2 == 1
    ) {
      return (4 + (sideLength - 1) * 2) * 3.5;
    } else if (_this.pB == 4 && _this.pL == 8 && sideLength >= 2) {
      return (6 + (sideLength - 1) * 2) * 7;
    } else if (_this.pB == 7 && _this.pL == 5 && sideLength == 5)
      return 12 * 3.8;
    else if (_this.pB == 7 && _this.pL == 5 && sideLength > 4) return 12 * 4;

    if (
      (_this.pB == 8 && _this.pL == 8) ||
      (_this.pB == 7 && _this.pL >= 7) ||
      (_this.pB == 6 && _this.pL == 7) ||
      (_this.pB == 5 && _this.pL == 6) ||
      (_this.pB == 4 && _this.pL == 5)
    )
      return (4 + (sideLength - 1) * 2) * 5;
    else if (_this.pB == 4 && _this.pL == 8)
      return (4 + (sideLength - 1) * 2) * 7;
    else if (
      (_this.pB == 6 && _this.pL == 8) ||
      (_this.pB == 5 && _this.pL >= 7) ||
      (_this.pB == 4 && _this.pL >= 6)
    )
      return (4 + (sideLength - 1) * 2) * 6;
    else if (
      (_this.pB == 8 && _this.pL >= 6) ||
      (_this.pB == 7 && _this.pL == 6) ||
      (_this.pB == 6 && (_this.pL == 6 || _this.pL == 5)) ||
      (_this.pB == 5 && _this.pL == 5) ||
      (_this.pB == 4 && _this.pL == 4) ||
      (_this.pB == 5 && _this.pL == 4)
    )
      return (4 + (sideLength - 1) * 2) * 4;
    else if (
      (_this.pB == 8 && _this.pL == 4) ||
      (_this.pB == 8 && _this.pL == 5) ||
      (_this.pB == 7 && (_this.pL == 4 || _this.pL == 5)) ||
      (_this.pB == 6 && _this.pL == 4) ||
      (_this.pB == 4 && _this.pL == 3) ||
      (_this.pB == 5 && _this.pL == 3)
    )
      return (4 + (sideLength - 1) * 2) * 3;
    else if (
      (_this.pB == 7 && _this.pL == 3) ||
      (_this.pB == 8 && (_this.pL == 4 || _this.pL == 3)) ||
      (_this.pB == 6 && _this.pL == 3)
    )
      return (4 + (sideLength - 1) * 2) * 2;
  },
  findScaling2(sides, side2, plength) {
    if (_this.smallerShapeval != 4) {
      _this.PairShape = "rect2";
      _this.scaleX = _this.side2 / 5.2;
      _this.scaleY = _this.side1 / 3.4;
    } else {
      if (
        _this.selectedTr == 0 &&
        _this.trside1 == _this.trside2 &&
        _this.trside2 == _this.trside3
      ) {
        _this.PairShape = "eqTr";
        _this.scaleX = _this.pL2 / 8.12;
        _this.scaleY = _this.pB2 / 7;
      } else {
        _this.PairShape = "isoTr";
        _this.scaleX = _this.pL2 / 6.13;
        _this.scaleY = _this.pB2 / 7.4;
      }
    }

    if (_this.mainShapeval == 2) {
      //paralogram
      _this.mainshape = "pinkParl";
      _this.sqx = _this.pL / 4;
      _this.sqy = _this.pB / 2.6;
    }
  },
  StoreArrayValues: function () {
    _this.decideTheMainShape = [0, 1, 2]; //* Square and rectangle and parallogram//[0, 1];
    _this.shuffle(_this.decideTheMainShape);
    if (_this.decideTheMainShape[0] == 2)
      _this.decideThePair = [2, 3, 4]; //* square and rectangle and triangle
    else _this.decideThePair = [0, 1]; //* Parellelogram and Triangle square and rectangle

    _this.shuffle(_this.decideThePair);

    _this.mainShapeval = _this.decideTheMainShape[0];
    _this.smallerShapeval = _this.decideThePair[0];

    if (_this.mainShapeval == 0 || _this.mainShapeval == 1) {
      // deciding length and bredth for main shape
      _this.side1 = Math.floor(Math.random() * (9 - 3) + 3); //length 3,4,5,6,7,8
      console.log(_this.side1, "_this.side1 -- ");

      if (_this.mainShapeval == 0) {
        _this.side2 = _this.side1; //breadth=side2
      } else {
        _this.side2 = Math.floor(Math.random() * (9 - 3) + 3); // 3,4,5,6,7,8
        while (_this.side2 == _this.side1)
          _this.side2 = Math.floor(Math.random() * (9 - 3) + 3);
        console.log(_this.side2, "_this.side2 --  ");
      }

      _this.pL = Math.floor(Math.random() * (_this.side2 - 2) + 2);

      while (
        (_this.side2 >= 5 &&
          _this.pL + 1 == _this.side2 &&
          _this.smallerShapeval == 0) ||
        (_this.smallerShapeval == 1 && _this.pL % 2 != 0)
      )
        _this.pL = Math.floor(Math.random() * (_this.side2 - 2) + 2);
      console.log(_this.pL, "_this.pL  --- ");
      // Randomization condition for pB: pB * 2 <= Sides
      // Maximum pB = Sides / 2.(don’t consider decimal part)
      _this.maxPB = Math.floor(_this.side1 / 2);
      _this.maxPB = _this.maxPB;

      _this.pB = Math.floor(Math.random() * (_this.maxPB - 1) + 1);
      console.log(_this.pB, "_this.pB -- ");

      _this.product = Math.floor(_this.side1 / _this.pB); //will change later on drawing shape
      console.log(_this.product, "_this.product  -- ");

      if (_this.smallerShapeval == 1) _this.decideTriangle();
      _this.findScaling(
        _this.side1 >= _this.side2 ? _this.side1 : _this.side2,
        _this.side1 < _this.side2 ? _this.side1 : _this.side2,
        _this.pL
      );
    } else {
      _this.StoreArrayValues2();
    }
  },
  decideTriangle(pl = _this.pL, pb = _this.pB) {
    // if (_this.smallerShapeval == 1)
    {
      if (_this.mainShapeval != 2)
        _this.decideTr = [0, 1, 2]; //* eq scalene or iso
      else _this.decideTr = [0, 2]; //* eq scalene or iso
      _this.shuffle(_this.decideTr);
      _this.selectedTr = _this.decideTr[0];
      _this.trside1 = pl;

      while (
        _this.selectedTr == 1 &&
        !((_this.trside1 == 6 && pb == 1) || (_this.trside1 == 4 && pb == 1))
      ) {
        _this.shuffle(_this.decideTr);
        _this.selectedTr = _this.decideTr[0];
      }

      if (_this.selectedTr == 0) {
        // _this.trside2 = _this.trside3 = _this.pL  //eq
        _this.trside2 = Math.round(
          Math.sqrt((_this.trside1 / 2) ** 2 + pb ** 2)
        );
        _this.trside3 = _this.trside2;
      } else if (_this.selectedTr == 1) {
        // scalene
        if (
          (_this.trside1 == 6 && pb == 1) ||
          (_this.trside1 == 4 && pb == 1)
        ) {
          _this.trside2 = _this.trside1 - 1;
          _this.trside3 = 1;
        }
      } else {
        // _this.side2 = Math.floor(Math.random() * (9 - 3) + 3);   //length
        _this.trside2 = Math.round(
          Math.sqrt((_this.trside1 / 2) ** 2 + pb ** 2)
        );
        _this.trside3 = _this.trside2;
      }

      console.log(_this.trside1 + " " + _this.trside2 + " " + _this.trside3);
    }
  },
  findScaling(sides, side2, plength) {
    if (_this.mainShapeval <= 1) {
      {
        console.log("small shape");
        _this.mainshape = "pinkBox";
        _this.sqx = _this.side2 / 6.8;
        _this.sqy = _this.side1 / 6.82;
      }
    } else {
      if (sides <= 4) {
        _this.mainshape = "pinkrect3";
        _this.sqx = _this.side2 / 4.3;
        _this.sqy = _this.side1 / 2.75;
      }
      if (sides > 4 && sides <= 6) {
        _this.mainshape = "pinkrect2";
        _this.sqx = _this.side2 / 5.2;
        _this.sqy = _this.side1 / 3.28;
      }
      if (sides > 6 && sides <= 9) {
        _this.mainshape = "pinkrect1";
        _this.sqx = _this.side2 / 6.2;
        _this.sqy = _this.side1 / 3.9;
      }
    }

    if (_this.smallerShapeval == 0) {
      // if (plength <= 4) {

      //     _this.PairShape = 'parl1';
      //     _this.scaleX = _this.pL / 3.5;
      //     _this.scaleY = _this.pB / 2.35;
      // }
      // if (plength > 4 && plength < 6) {
      //     _this.PairShape = 'parl2';
      //     _this.scaleX = _this.pL / 4;
      //     _this.scaleY = _this.pB / 2.6;
      // }
      // if (plength >= 6 && plength <= 9) {
      //     _this.PairShape = 'parl3';
      //     _this.scaleX = _this.pL / 4.5; //5.5
      //     _this.scaleY = _this.pB / 2.83;
      // }

      _this.PairShape = "parl2";
      _this.scaleX = _this.pL / 4;
      _this.scaleY = _this.pB / 2.6;
    } else {
      if (_this.trside1 == _this.trside2 && _this.trside2 == _this.trside3) {
        _this.PairShape = "eqTr";
        _this.scaleX = _this.pL / 8.12;
        _this.scaleY = _this.pB / 7;
      } else if (
        _this.trside1 != _this.trside2 &&
        _this.trside2 != _this.trside3 &&
        _this.trside1 != _this.trside3
      ) {
        _this.PairShape = "scalTr";
        _this.scaleX = _this.pL / 8.7;
        _this.scaleY = _this.pB / 3.12;
      } else {
        _this.PairShape = "isoTr";
        _this.scaleX = _this.pL / 6.13;
        _this.scaleY = _this.pB / 7;
      }
    }
  },

  bigShapeClicked: function () {
    _this.Ask_Question1.pause();
    _this.clickSound.pause();
    _this.clickSound.play();
    _this.biggerShape.inputEnabled = false;
    _this.clearArray.forEach((element) => {
      element.visible = false;
    });
    {
      if (_this.perimeterVar == 1) {
        _this.stopAllSounds();
        _this.Ask_Question2.play();
        _this.Question_flag = 2;
      } else {
        _this.stopAllSounds();
        _this.Ask_Question5.play();
        _this.Question_flag = 5;
      }
    }

    _this.mainclick = true;
    _this.BoxClicked1 = 1;

    _this.bigBox = _this.add.sprite(40, 70, "Box2");
    _this.biggerShape.visible = true;
    _this.biggerShape.bringToTop();

    //this condition is used for when the box_1 value is 450 ie. the bigger shape is in the right side, we have to move the bigger shape to left side in the other screen.
    //so fixing the x position here.(for moving right to the left side)
    if (_this.box_x[0] == 450) {
      if (_this.mainShapeval == 0) {
        if (_this.side1 == 3) {
          _this.biggerShape.x = 224;
          _this.graphics.x = -371;
        }
        if (_this.side1 == 4) {
          _this.biggerShape.x = 205;
          _this.graphics.x = -370.5;
        }
        if (_this.side1 == 5) {
          _this.biggerShape.x = 186;
          _this.graphics.x = -370.5;
        }
        if (_this.side1 == 6) {
          _this.biggerShape.x = 167;
          _this.graphics.x = -370;
        }
        if (_this.side1 == 7) {
          _this.biggerShape.x = 148;
          _this.graphics.x = -370.5;
        }
        if (_this.side1 == 8) {
          _this.biggerShape.x = 129;
          _this.graphics.x = -370.5;
        }
      }
      if (_this.mainShapeval == 1) {
        if (_this.side1 == 3) {
          _this.biggerShape.x = 186;
          if (_this.side2 == 7) _this.graphics.x = -332.5;
          else if (_this.side2 == 5) _this.graphics.x = -370;
          else if (_this.side2 == 6) _this.graphics.x = -351;
          else if (_this.side2 == 8) _this.graphics.x = -313.5;
          else _this.graphics.x = -390;
        }
        if (_this.side1 == 4) {
          _this.biggerShape.x = 186;
          if (_this.side2 == 7) _this.graphics.x = -332.5;
          else if (_this.side2 == 5) _this.graphics.x = -370.5;
          else if (_this.side2 == 6) _this.graphics.x = -351;
          else if (_this.side2 == 8) _this.graphics.x = -313.5;
          else _this.graphics.x = -408.5;
        }
        if (_this.side1 == 5) {
          if (_this.side2 == 4) {
            _this.graphics.x = -390;
            _this.biggerShape.x = 186;
          } else if (_this.side2 == 6) {
            _this.graphics.x = -351.5;
            _this.biggerShape.x = 186;
          } else if (_this.side2 == 7) {
            _this.graphics.x = -332;
            _this.biggerShape.x = 186;
          } else if (_this.side2 == 8) {
            _this.graphics.x = -355;
            _this.biggerShape.x = 145;
          } //{ _this.graphics.x = -370; _this.biggerShape.x = 129; }
          else {
            _this.graphics.x = -408.5;
            _this.biggerShape.x = 186;
          }
        }
        if (_this.side1 == 6) {
          _this.biggerShape.x = 186;
          if (_this.side2 == 4) _this.graphics.x = -390;
          else if (_this.side2 == 5) _this.graphics.x = -370;
          else if (_this.side2 == 7) _this.graphics.x = -332;
          else if (_this.side2 == 8) {
            _this.graphics.x = -354;
            _this.biggerShape.x = 145;
          } else _this.graphics.x = -408.5;
        }
        if (_this.side1 == 7) {
          _this.biggerShape.x = 186;
          if (_this.side2 == 4) _this.graphics.x = -389;
          else if (_this.side2 == 5) _this.graphics.x = -370;
          else if (_this.side2 == 6) _this.graphics.x = -351;
          else if (_this.side2 == 8) {
            _this.graphics.x = -354;
            _this.biggerShape.x = 145;
          } else _this.graphics.x = -408.5;
        }
        if (_this.side1 == 8) {
          _this.biggerShape.x = 205;
          if (_this.side2 == 4) _this.graphics.x = -370.5;
          else if (_this.side2 == 5) _this.graphics.x = -351.5;
          else if (_this.side2 == 6) _this.graphics.x = -332.5;
          else if (_this.side2 == 7) {
            _this.graphics.x = -338;
            _this.biggerShape.x = 180;
          } else _this.graphics.x = -389.5;
        }
      }
      if (_this.mainShapeval == 2) {
        if (_this.pL == 3) {
          _this.biggerShape.x = 171;
          _this.graphics.x = -410;
        }
        if (_this.pL == 4) {
          _this.biggerShape.x = 147.5;
          _this.graphics.x = -410;
        }
        if (_this.pL == 5) {
          _this.biggerShape.x = 124;
          _this.graphics.x = -410;
        }
        if (_this.pL == 6) {
          _this.biggerShape.x = 100.5;
          _this.graphics.x = -410;
        }
        if (_this.pL == 7) {
          _this.biggerShape.x = 77;
          _this.graphics.x = -410;
        }
        if (_this.pL == 8) {
          _this.biggerShape.x = 53.5;
          _this.graphics.x = -410;
        }

        // _this.biggerShape.x -= 40;
        // _this.graphics.x -= 40;

        _this.showDimensions2();
      } else _this.showDimensions();
    } else {
      _this.biggerShape.x += 40;
      _this.graphics.x += 40;

      if (_this.mainShapeval == 2) {
        _this.biggerShape.x -= 40;
        _this.graphics.x -= 40;

        _this.showDimensions2();
      } else _this.showDimensions();
    }

    _this.tick = _this.add.sprite(880, 405, "TickBtn");
    _this.tick.frame = 1;
    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(function () {
      if (_this.fmBox1.frame == 1 && _this.fmBox1.name == _this.fmstring) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.tick.destroy();
        _this.fmBox2.destroy();
        _this.fmBox3.destroy();
        _this.frm2.destroy();
        _this.frm3.destroy();
        _this.fmBox1.inputEnabled = false;
        _this.goTween(_this.fmBox1, _this.frm1);
      } else if (
        _this.fmBox2.frame == 1 &&
        _this.fmBox2.name == _this.fmstring
      ) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.tick.destroy();
        _this.fmBox1.destroy();
        _this.fmBox3.destroy();
        _this.frm1.destroy();
        _this.frm3.destroy();
        _this.fmBox2.inputEnabled = false;
        _this.goTween(_this.fmBox2, _this.frm2);
      } else if (
        _this.fmBox3.frame == 1 &&
        _this.fmBox3.name == _this.fmstring
      ) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.tick.destroy();
        _this.fmBox2.destroy();
        _this.fmBox1.destroy();
        _this.frm2.destroy();
        _this.frm1.destroy();
        _this.fmBox3.inputEnabled = false;
        _this.goTween(_this.fmBox3, _this.frm3);
      } else {
        _this.noofAttempts++;
        _this.wrongans.play();
      }
    });

    _this.fmBox1 = _this.add.image(650, 130, "textBox2");
    _this.fmBox1.scale.setTo(1.15, 1);

    _this.fmBox2 = _this.add.image(650, 230, "textBox2");
    _this.fmBox2.scale.setTo(1.15, 1);

    _this.fmBox3 = _this.add.image(650, 330, "textBox2");
    _this.fmBox3.scale.setTo(1.15, 1);
    _this.initialfrmval = 650;

    posOfX =
      (_this.biggerShape.x + _this.biggerShape.width + 820) / 2 -
      _this.fmBox1.width / 2;
    _this.fmBox1.x = posOfX;
    _this.fmBox2.x = posOfX;
    _this.fmBox3.x = posOfX;
    if (_this.perimeterVar == 1) {
      _this.fmstring1 = "P" + " " + "=" + " " + "L" + " " + "+" + " " + "B";
      if (_this.mainShapeval == 0) {
        _this.fmstring = "P" + " " + "=" + " " + 4 + " " + "x" + " " + "S"; //ans string
        _this.fmstring2 = "P" + " " + "=" + " " + 4 + " " + "+" + " " + "S";
      } else if (_this.mainShapeval == 1) {
        _this.fmstring = "P" + " " + "=" + " " + "2(L" + "+" + "B)";
        _this.fmstring2 = "P" + " " + "=" + " " + 4 + " " + "x" + " " + "S";
      } else if (_this.mainShapeval == 2) {
        _this.fmBox2.scale.setTo(1.35, 1);

        _this.fmBox1.scale.setTo(1.35, 1);
        _this.fmBox3.scale.setTo(1.35, 1);

        _this.fmstring =
          "P" + " " + "=" + " " + 2 + " ( " + "B" + " " + "+" + " " + "H )";
        _this.fmstring1 =
          "P" +
          " " +
          "=" +
          " " +
          2 +
          " " +
          "+" +
          " " +
          "B" +
          " " +
          "+" +
          " " +
          "H";
        _this.fmstring2 =
          "P" + " " + "=" + " " + 2 + " " + "X" + " " + "B" + " X " + "H";
      }
    } else {
      _this.fmstring1 = "A" + " " + "=" + " " + 4 + " " + "X" + " " + "S";
      if (_this.mainShapeval == 0) {
        _this.fmstring = "A" + " " + "=" + " " + "S" + " " + "x" + " " + "S"; //ans string
        _this.fmstring2 = "A" + " " + "=" + " " + 2 + " " + "X" + " " + "S";
      } else if (_this.mainShapeval == 1) {
        _this.fmstring = "A" + " " + "=" + " " + "L" + " X " + "B";
        _this.fmstring2 = "A" + " " + "=" + " " + "L" + " " + "+" + " " + "B";
      } else if (_this.mainShapeval == 2) {
        _this.fmBox2.scale.setTo(1.4, 1);
        _this.fmBox1.scale.setTo(1.4, 1);
        _this.fmBox3.scale.setTo(1.4, 1);
        _this.fmstring = "A" + " " + "=" + " " + "B" + " " + "X" + " " + "H";
        _this.fmstring2 = "A" + " " + "=" + " " + "B" + " " + "+" + " " + "H";
        _this.fmstring1 =
          "A" +
          " " +
          "=" +
          " " +
          2 +
          " " +
          "X" +
          " " +
          "B" +
          " " +
          "X" +
          " " +
          "H";
      }
    }

    _this.PershapeClicked();
  },
  pairShapeClicked: function () {
    _this.Ask_Question1.pause();
    _this.clickSound.pause();
    _this.clickSound.play();
    _this.smallerShape.inputEnabled = false;
    _this.clearArray.forEach((element) => {
      element.visible = false;
    });

    // if (_this.Question_flag != 2 && _this.Question_flag != 5)
    {
      if (_this.perimeterVar == 1) {
        _this.stopAllSounds();

        _this.Ask_Question2.play();
        _this.Question_flag = 2;
      } else {
        _this.stopAllSounds();
        _this.Ask_Question5.play();
        _this.Question_flag = 5;
      }
    }

    _this.BoxClicked2 = 2;
    _this.pairclick = true;

    _this.bigBox = _this.add.sprite(40, 70, "Box2");

    _this.pairImage = _this.add.sprite(115, 170, _this.PairShape);
    _this.pairImage.scale.setTo(_this.scaleX, _this.scaleY);
    //fixing the x position. when the bigger shape on the right side, we have to move the shape to left.
    if (_this.box_x[0] == 450) {
      // if (_this.decideTheMainShape[0] == 2)
      x = 203; //40 + _this.Box1.width / 2 - _this.biggerShape.width / 2;
      // else x = 40 + _this.Box1.width / 2 - _this.biggerShape.width / 2;
    } else
      x = _this.Box1.x + _this.Box1.width / 2 - _this.smallerShape.width / 2;
    y = _this.Box1.y + _this.Box1.height / 2 - _this.smallerShape.height / 2;
    _this.pairImage.x = x;
    _this.pairImage.y = y;

    _this.createMakedPairedObject();

    if (_this.perimeterVar == 1 && _this.smallerShapeval == 1)
      _this.showPerimeterDimensions();
    else if (_this.mainShapeval == 2) _this.showDimensions2();
    else _this.showDimensions();
    _this.tick = _this.add.sprite(880, 405, "TickBtn");
    _this.tick.frame = 1;
    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(function () {
      if (_this.fmBox1.frame == 1 && _this.fmBox1.name == _this.fmstring) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.tick.destroy();
        _this.fmBox2.destroy();
        _this.fmBox3.destroy();
        _this.frm2.destroy();
        _this.frm3.destroy();
        _this.fmBox1.inputEnabled = false;
        _this.goTween(_this.fmBox1, _this.frm1);
      } else if (
        _this.fmBox2.frame == 1 &&
        _this.fmBox2.name == _this.fmstring
      ) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.tick.destroy();
        _this.fmBox1.destroy();
        _this.fmBox3.destroy();
        _this.frm1.destroy();
        _this.frm3.destroy();
        _this.fmBox2.inputEnabled = false;
        _this.goTween(_this.fmBox2, _this.frm2);
      } else if (
        _this.fmBox3.frame == 1 &&
        _this.fmBox3.name == _this.fmstring
      ) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.tick.destroy();
        _this.fmBox2.destroy();
        _this.fmBox1.destroy();
        _this.frm2.destroy();
        _this.frm1.destroy();
        _this.fmBox3.inputEnabled = false;
        _this.goTween(_this.fmBox3, _this.frm3);
      } else {
        _this.noofAttempts++;
        _this.wrongans.play();
      }
    });

    _this.fmBox1 = _this.add.image(640, 130, "textBox2");
    _this.fmBox1.scale.setTo(1.4, 1);

    _this.fmBox2 = _this.add.image(640, 230, "textBox2");
    _this.fmBox2.scale.setTo(1.4, 1);

    _this.fmBox3 = _this.add.image(640, 330, "textBox2");
    _this.fmBox3.scale.setTo(1.4, 1);
    _this.initialfrmval = 640;

    posOfX =
      (_this.pairImage.x + _this.pairImage.width + 820) / 2 -
      _this.fmBox1.width / 2 +
      20;
    _this.fmBox1.x = posOfX;
    _this.fmBox2.x = posOfX;
    _this.fmBox3.x = posOfX;

    if (_this.perimeterVar == 1) {
      if (_this.smallerShapeval == 0) {
        _this.fmstring =
          "P" + " " + "=" + " " + 2 + " ( " + "B" + " " + "+" + " " + "H )";
        _this.fmstring1 =
          "P" +
          " " +
          "=" +
          " " +
          2 +
          " " +
          "+" +
          " " +
          "B" +
          " " +
          "+" +
          " " +
          "H";
        _this.fmstring2 =
          "P" + " " + "=" + " " + 2 + " " + "x" + " " + "B" + " X " + "H";
      } else if (_this.smallerShapeval == 1) {
        _this.fmstring1 =
          "P" +
          " " +
          "=" +
          " " +
          "A" +
          " " +
          "+" +
          " " +
          "B" +
          " " +
          "X" +
          " " +
          "C ";
        _this.fmstring =
          "P" +
          " " +
          "=" +
          " " +
          "A" +
          " " +
          "+" +
          " " +
          "B" +
          " " +
          "+" +
          " " +
          "C";
        _this.fmstring2 =
          "P" +
          " " +
          "=" +
          " " +
          2 +
          " " +
          "X" +
          " " +
          "B" +
          " " +
          "X" +
          " " +
          "H";
      } else {
        if (_this.smallerShapeval != 4) {
          _this.fmBox2.scale.setTo(1.2, 1);

          _this.fmBox1.scale.setTo(1.2, 1);
          _this.fmBox3.scale.setTo(1.2, 1);
        }
        _this.fmstring1 = "P" + " " + "=" + " " + "L" + " " + "+" + " " + "B";
        if (_this.smallerShapeval == 2) {
          _this.fmstring = "P" + " " + "=" + " " + 4 + " " + "x" + " " + "S"; //ans string
          _this.fmstring2 = "P" + " " + "=" + " " + 4 + " " + "+" + " " + "S";
        } else if (_this.smallerShapeval == 3) {
          _this.fmstring = "P" + " " + "=" + " " + "2(L" + "+" + "B)";
          _this.fmstring2 = "P" + " " + "=" + " " + 4 + " " + "x" + " " + "S";
        } else if (_this.smallerShapeval == 4) {
          _this.fmstring1 =
            "P" +
            " " +
            "=" +
            " " +
            "A" +
            " " +
            "+" +
            " " +
            "B" +
            " " +
            "X" +
            " " +
            "C ";
          _this.fmstring =
            "P" +
            " " +
            "=" +
            " " +
            "A" +
            " " +
            "+" +
            " " +
            "B" +
            " " +
            "+" +
            " " +
            "C";
          _this.fmstring2 =
            "P" +
            " " +
            "=" +
            " " +
            2 +
            " " +
            "X" +
            " " +
            "B" +
            " " +
            "X" +
            " " +
            "H";
        }
      }
    } else {
      if (_this.smallerShapeval == 0) {
        _this.fmstring = "A" + " " + "=" + " " + "B" + " " + "X" + " " + "H";
        _this.fmstring2 = "A" + " " + "=" + " " + "B" + " " + "+" + " " + "H";
        _this.fmstring1 =
          "A" +
          " " +
          "=" +
          " " +
          2 +
          " " +
          "X" +
          " " +
          "B" +
          " " +
          "X" +
          " " +
          "H";
      } else if (_this.smallerShapeval == 1) {
        _this.fmstring =
          "A" +
          " " +
          "=" +
          " " +
          "1" +
          "/" +
          "2" +
          " " +
          "B" +
          " " +
          "X" +
          " " +
          "H ";
        _this.fmstring1 = "A" + " " + "=" + " " + "B" + " " + "X" + " " + "H";
        _this.fmstring2 =
          "A" +
          " " +
          "=" +
          " " +
          2 +
          " " +
          "X" +
          " " +
          "B" +
          " " +
          "X" +
          " " +
          "H";
      } else {
        if (_this.smallerShapeval != 4) {
          _this.fmBox2.scale.setTo(1.2, 1);
          _this.fmBox1.scale.setTo(1.2, 1);
          _this.fmBox3.scale.setTo(1.2, 1);
        }
        _this.fmstring1 = "A" + " " + "=" + " " + 4 + " " + "X" + " " + "S";
        if (_this.smallerShapeval == 2) {
          _this.fmstring = "A" + " " + "=" + " " + "S" + " " + "x" + " " + "S"; //ans string
          _this.fmstring2 = "A" + " " + "=" + " " + 2 + " " + "X" + " " + "S";
        } else if (_this.smallerShapeval == 3) {
          _this.fmstring = "A" + " " + "=" + " " + "L" + " X " + "B";
          _this.fmstring2 = "A" + " " + "=" + " " + "L" + " " + "+" + " " + "B";
        } else if (_this.smallerShapeval == 4) {
          _this.fmstring =
            "A" +
            " " +
            "=" +
            " " +
            "1" +
            "/" +
            "2" +
            " " +
            "B" +
            " " +
            "X" +
            " " +
            "H ";
          _this.fmstring1 = "A" + " " + "=" + " " + "B" + " " + "X" + " " + "H";
          _this.fmstring2 =
            "A" +
            " " +
            "=" +
            " " +
            2 +
            " " +
            "X" +
            " " +
            "B" +
            " " +
            "X" +
            " " +
            "H";
        }
      }
    }

    _this.PershapeClicked();
  },
  PershapeClicked: function () {
    _this.fmBox1.inputEnabled = true;
    _this.fmBox1.input.useHandCursor = true;
    _this.fmBox1.events.onInputDown.add(function () {
      _this.makeFrames0();
      _this.fmBox1.frame = 1;
      _this.fmBox1.name = _this.frm1.name;
    });

    _this.fmBox2.inputEnabled = true;
    _this.fmBox2.input.useHandCursor = true;
    _this.fmBox2.events.onInputDown.add(function () {
      _this.makeFrames0();
      _this.fmBox2.frame = 1;
      _this.fmBox2.name = _this.frm2.name;
    });

    _this.fmBox3.inputEnabled = true;
    _this.fmBox3.input.useHandCursor = true;
    _this.fmBox3.events.onInputDown.add(function () {
      _this.makeFrames0();
      _this.fmBox3.frame = 1;
      _this.fmBox3.name = _this.frm3.name;
    });

    _this.obj = [_this.fmstring, _this.fmstring2, _this.fmstring1];
    _this.shuffle(_this.obj);

    _this.option1Val = _this.obj[0];
    _this.option2Val = _this.obj[1];
    _this.option3Val = _this.obj[2];

    _this.frm1 = _this.add.text(667, 155, _this.option1Val);
    _this.applyingStyle(_this.frm1);
    _this.frm1.name = _this.option1Val;

    _this.frm2 = _this.add.text(667, 255, _this.option2Val);
    _this.applyingStyle(_this.frm2);
    _this.frm2.name = _this.option2Val;

    _this.frm3 = _this.add.text(667, 355, _this.option3Val);
    _this.applyingStyle(_this.frm3);
    _this.frm3.name = _this.option3Val;

    _this.frm1.x = 667 + (_this.fmBox1.x - _this.initialfrmval); //change of this
    _this.frm2.x = 667 + (_this.fmBox1.x - _this.initialfrmval); //change of this
    _this.frm3.x = 667 + (_this.fmBox1.x - _this.initialfrmval); //change of this

    if (_this.BoxClicked2 == 2) {
      _this.frm1.x -= 8;
      _this.frm2.x -= 8;
      _this.frm3.x -= 8;
    }
  },

  showDimensions: function () {
    if (_this.BoxClicked1 == 1) {
      _this.hLine = _this.add.sprite(
        _this.biggerShape.x - 30,
        _this.biggerShape.y - 2,
        "line3"
      );
      _this.hLine.scale.setTo(1, _this.side1 / 4.3);

      _this.lLine = _this.add.sprite(
        _this.biggerShape.x,
        _this.biggerShape.y + 3 + _this.biggerShape.height,
        "line3hr"
      );
      _this.lLine.scale.setTo(_this.side2 / 4.3, 1);

      _this.llineText = _this.add.text(
        _this.biggerShape.x + _this.biggerShape.width / 2 - 10,
        _this.lLine.y + 20,
        `${_this.side2} m`
      );
      _this.applyingStyle(_this.llineText);

      _this.hlineText = _this.add.text(
        _this.hLine.x - 35,
        _this.hLine.y + _this.biggerShape.height / 2 - 10,
        `${_this.side1} m`
      );
      _this.applyingStyle(_this.hlineText);
    } else {
      _this.hLine = _this.add.sprite(
        _this.pairImage.x + _this.pairImage.width,
        _this.pairImage.y - 2,
        "lineTr"
      );
      _this.hLine.scale.setTo(1, _this.pB / 2.38);

      _this.lLine = _this.add.sprite(
        _this.pairImage.x,
        _this.pairImage.y + 3 + _this.pairImage.height,
        "line3hr"
      );
      _this.lLine.scale.setTo(_this.pL / 4.3, 1);

      _this.llineText = _this.add.text(
        _this.pairImage.x + _this.pairImage.width / 2 - 22,
        _this.lLine.y + 20,
        `${_this.pL} m`
      );
      _this.applyingStyle(_this.llineText);

      _this.hlineText = _this.add.text(
        _this.hLine.x + 35,
        _this.hLine.y + _this.pairImage.height / 2 - 10,
        `${_this.pB} m`
      );
      _this.applyingStyle(_this.hlineText);
    }
  },
  showDimensions2: function () {
    if (_this.BoxClicked1 == 1) {
      _this.hLine = _this.add.sprite(
        _this.biggerShape.x + _this.biggerShape.width - 5,
        _this.biggerShape.y - 2,
        "linetrBig"
      );
      _this.hLine.scale.setTo(1, _this.pB / 6.87); //to be chnage

      _this.lLine = _this.add.sprite(
        _this.biggerShape.x,
        _this.biggerShape.y + 3 + _this.biggerShape.height,
        "line3hr"
      );
      _this.lLine.scale.setTo(_this.pL / 4.3, 1);

      _this.llineText = _this.add.text(
        _this.biggerShape.x + _this.biggerShape.width / 2 - 22,
        _this.lLine.y + 20,
        `${_this.pL} m`
      );
      _this.applyingStyle(_this.llineText);

      _this.hlineText = _this.add.text(
        _this.hLine.x + 35,
        _this.hLine.y + _this.biggerShape.height / 2 - 10,
        `${_this.pB} m`
      );
      _this.applyingStyle(_this.hlineText);
    } else {
      if (_this.smallerShapeval != 4) {
        _this.hLine = _this.add.sprite(
          _this.pairImage.x - 30,
          _this.pairImage.y - 2,
          "line3"
        );
        _this.hLine.scale.setTo(1, _this.side1 / 4.3);

        _this.lLine = _this.add.sprite(
          _this.pairImage.x,
          _this.pairImage.y + 3 + _this.pairImage.height,
          "line3hr"
        );
        _this.lLine.scale.setTo(_this.side2 / 4.3, 1);

        _this.llineText = _this.add.text(
          _this.pairImage.x + _this.pairImage.width / 2 - 10,
          _this.lLine.y + 20,
          `${_this.side2} m`
        );
        _this.applyingStyle(_this.llineText);

        _this.hlineText = _this.add.text(
          _this.hLine.x - 35,
          _this.hLine.y + _this.pairImage.height / 2 - 10,
          `${_this.side1} m`
        );
        _this.applyingStyle(_this.hlineText);
      } else {
        if (_this.perimeterVar == 1)
          _this.showPerimeterDimensions(_this.pL2, _this.pB2);
        else {
          _this.hLine = _this.add.sprite(
            _this.pairImage.x + _this.pairImage.width,
            _this.pairImage.y - 2,
            "lineTr"
          );
          _this.hLine.scale.setTo(1, _this.pB2 / 2.38);

          _this.lLine = _this.add.sprite(
            _this.pairImage.x,
            _this.pairImage.y + 3 + _this.pairImage.height,
            "line3hr"
          );
          _this.lLine.scale.setTo(_this.pL2 / 4.3, 1);

          _this.llineText = _this.add.text(
            _this.pairImage.x + _this.pairImage.width / 2 - 22,
            _this.lLine.y + 20,
            `${_this.pL2} m`
          );
          _this.applyingStyle(_this.llineText);

          _this.hlineText = _this.add.text(
            _this.hLine.x + 35,
            _this.hLine.y + _this.pairImage.height / 2 - 10,
            `${_this.pB2} m`
          );
          _this.applyingStyle(_this.hlineText);
        }
      }
    }
  },
  showPerimeterDimensions: function (pl = _this.pL, pb = _this.pB) {
    xpos = 0;
    ypos = 0;
    xpos2 = 0;
    ypos2 = 0;
    textrotate = 0;
    _this.lLine = _this.add.sprite(
      _this.pairImage.x,
      _this.pairImage.y + 3 + _this.pairImage.height,
      "line3hr"
    );
    _this.lLine.scale.setTo(pl / 4.3, 1);

    _this.llineText = _this.add.text(
      _this.pairImage.x + _this.pairImage.width / 2 - 22,
      _this.lLine.y + 20,
      `${pl} m`
    );
    _this.applyingStyle(_this.llineText);

    _this.lLine2 = _this.add.sprite(
      _this.pairImage.x - 10,
      _this.pairImage.y - 10 + _this.pairImage.height,
      "line3"
    );
    _this.lLine2.scale.setTo(1, _this.trside3 / 4.3);
    _this.lLine2.anchor.setTo(0.5, 1); //anchor to bottom of line
    if (_this.selectedTr == 1) {
      _this.lLine2.y -= 3;
      _this.lLine2.angle = 40;
      _this.lLine2.scale.setTo(1, _this.trside3 / 4);

      textrotate = 45;
      xpos = -25;
      ypos = -5;
    }

    _this.lLine3 = _this.add.sprite(
      _this.pairImage.x + _this.pairImage.width + 10,
      _this.pairImage.y - 10 + _this.pairImage.height,
      "line3"
    );
    _this.lLine3.scale.setTo(1, _this.trside2 / 4.3);
    _this.lLine3.anchor.setTo(0.5, 1); //anchor to bottom of line
    if (_this.selectedTr == 1) {
      _this.lLine3.y -= 9;
      _this.lLine3.x -= 5;
      _this.lLine3.angle = -72;
      textrotate2 = 15;
      xpos2 = -60;
      ypos2 = -15;
    } else {
      {
        _this.lLine2.scale.setTo(
          1,
          Math.sqrt((_this.trside1 / 2) ** 2 + pb ** 2) / 4.3
        );
        _this.lLine3.scale.setTo(
          1,
          Math.sqrt((_this.trside1 / 2) ** 2 + pb ** 2) / 4.3
        );
      }
      rotatAngle = 0;
      xpos = 0;
      ypos = 0;
      if (_this.trside2 > _this.trside1) {
        _this.lLine2.x -= 5;
        _this.lLine2.y -= 5;

        _this.lLine3.x += 5;
        _this.lLine3.y -= 5;
      }

      if (pl == 4 && pb == 1) {
        rotatAngle = 60;
        textrotate = 30;
        ypos = -15;
        xpos = 0;

        xpos2 = -30;
        ypos2 = -20;
      }
      if (
        (pl == 4 && pb == 2) ||
        (pl == 2 && pb == 1) ||
        (pl == 6 && pb == 3)
      ) {
        rotatAngle = 45;
        textrotate = 45;
      }
      if (pl == 6 && pb == 1) {
        rotatAngle = 70;
        textrotate = 25;
        ypos = -15;
        xpos = 25;

        xpos2 = -55;
        ypos2 = -15;
      }
      if (pl == pb) {
        rotatAngle = 25;
        textrotate = 60;
        xpos = -20;
        ypos = 10;

        xpos2 = 10;
      }
      if (pl == 2 && pb == 3) {
        rotatAngle = 18;
        textrotate = 72;
        xpos = -15;
        ypos = 15;

        xpos2 = 15;
      }
      if ((pl == 4 && pb == 3) || (pl == 6 && pb == 4)) {
        rotatAngle = 35;
      }
      if (pl == 6 && pb == 2) {
        rotatAngle = 57;
      }
      if (pl == 2 && pb == 4) {
        rotatAngle = 15;
      }

      if (pl == 2 && pb == 1) {
        ypos = -5;
        xpos = -15;

        ypos2 = -15;
        xpos2 = -5;
      }
      if (pl == 6 && pb == 2) {
        xpos = 15;
        textrotate = 35;

        ypos2 = -15;
        xpos2 = -50;
      }
      if (pl == 4 && pb == 4) {
        xpos = -5;
        ypos = 15;
      }
      if (pl == 4 && pb == 3) {
        textrotate = 60;
        xpos = 5;
        xpos2 = 5;
        // ypos=15
      }
      if (pl == 6 && pb == 4) {
        textrotate = 60;
        xpos = 20;
        ypos = -5;

        xpos2 = -20;
        ypos2 = -10;
      }
      if (pl == 2 && pb == 4) {
        textrotate = 72;
        xpos = -15;
        ypos = 10;

        xpos2 = 15;
      }
      if (pl == 4 && pb == 2) {
        xpos2 = -20;
        ypos2 = -15;
      }
      if (pl == 6 && pb == 3) {
        xpos2 = -25;
        ypos2 = -15;
      }

      _this.lLine2.angle = rotatAngle;
      _this.lLine3.angle = -rotatAngle;
    }

    _this.llineText2 = _this.add.text(
      _this.lLine2.x - 5,
      _this.lLine2.y - _this.pairImage.height / 2,
      `${_this.trside3} m`
    );

    _this.applyingStyle(_this.llineText2);
    _this.llineText2.angle = -textrotate;
    _this.llineText2.x += xpos;
    _this.llineText2.y += ypos;

    _this.llineText3 = _this.add.text(
      _this.lLine3.x - 5,
      _this.lLine3.y - _this.pairImage.height / 2 - 20,
      `${_this.trside2} m`
    );

    _this.applyingStyle(_this.llineText3);
    _this.llineText3.angle = textrotate;
    if (_this.selectedTr == 1) _this.llineText3.angle = textrotate2;
    _this.llineText3.x += xpos2;
    _this.llineText3.y += ypos2;
  },
  makeFrames0: function () {
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();
    _this.fmBox1.name = "";
    _this.fmBox2.name = "";
    _this.fmBox3.name = "";

    if (_this.fmBox2.frame == 1) _this.fmBox2.frame = 0;
    if (_this.fmBox1.frame == 1) _this.fmBox1.frame = 0;
    if (_this.fmBox3.frame == 1) _this.fmBox3.frame = 0;
  },
  goTween: function (box_name, formla) {
    if (_this.perimeterVar == 1) {
      _this.tweenTop = _this.add.tween(box_name);

      if (_this.mainShapeval == 2 && _this.BoxClicked1 == 1) {
        _this.tweenTop.to({ x: 462, y: 100 }, 600, "Linear", true, 0);
      } else if (_this.BoxClicked1 == 1)
        _this.tweenTop.to({ x: 450, y: 100 }, 600, "Linear", true, 0);
      else {
        _this.tweenTop.to({ x: 440, y: 100 }, 600, "Linear", true, 0);
      }

      _this.tweenTop.start();

      _this.tweenTopFRM = _this.add.tween(formla);
      if (_this.mainShapeval == 2 && _this.BoxClicked1 == 1)
        _this.tweenTopFRM.to({ x: 467 + 12, y: 125 }, 600, "Linear", true, 0);
      else if (_this.BoxClicked1 == 1)
        _this.tweenTopFRM.to({ x: 467, y: 125 }, 600, "Linear", true, 0);
      else _this.tweenTopFRM.to({ x: 460, y: 125 }, 600, "Linear", true, 0);

      _this.tweenTopFRM.start();

      _this.tweenTopFRM.onComplete.add(function () {
        _this.AnswerBox = _this.add.image(620, 100, "answerBox");
        _this.perimeter = _this.add.text(640, 125, "P" + " " + "=");
        _this.applyingStyle(_this.perimeter);
        _this.perimeterM = _this.add.text(770, 125, "m");
        _this.applyingStyle(_this.perimeterM);

        _this.stopAllSounds();
        _this.time.events.add(400, () => {
          _this.Ask_Question11.play();
          _this.Question_flag = 11;
        });

        if (
          _this.BoxClicked2 == 2 ||
          (_this.mainShapeval == 2 && _this.BoxClicked1 == 1)
        ) {
          _this.perimeter.x += 20;
          _this.AnswerBox.x += 20;
          _this.perimeterM.x += 20;
        }
        if (_this.mainShapeval == 2 && _this.BoxClicked1 == 1) {
          _this.perimeter.x += 8;
          _this.AnswerBox.x += 8;
          _this.perimeterM.x += 8;
        }
        _this.addNumberPad();
      });
    } else if (_this.area == 1) {
      _this.power = "\u{00B2}";
      _this.tweenTop = _this.add.tween(box_name);
      if (_this.mainShapeval == 2 && _this.BoxClicked1 == 1) {
        _this.tweenTop.to({ x: 450 + 25, y: 100 }, 600, "Linear", true, 0);
        box_name.scale.setTo(1.15, 1);
      } else _this.tweenTop.to({ x: 450, y: 100 }, 600, "Linear", true, 0);
      _this.tweenTop.start();

      _this.tweenTopFRM = _this.add.tween(formla);
      if (_this.mainShapeval == 2 && _this.BoxClicked1 == 1) {
        _this.tweenTopFRM.to({ x: 467 + 25, y: 125 }, 600, "Linear", true, 0);
      } else _this.tweenTopFRM.to({ x: 467, y: 125 }, 600, "Linear", true, 0);
      _this.tweenTopFRM.start();

      _this.tweenTopFRM.onComplete.add(function () {
        //answerBox
        _this.AnswerBox = _this.add.image(620, 100, "answerBox");
        _this.perimeter = _this.add.text(640, 125, "A" + " " + "=");
        _this.applyingStyle(_this.perimeter);
        _this.perimeterM = _this.add.text(770, 125, "m" + _this.power);
        _this.applyingStyle(_this.perimeterM);

        _this.stopAllSounds();
        _this.time.events.add(400, () => {
          _this.Ask_Question12.play();
          _this.Question_flag = 12;
        });

        if (
          _this.BoxClicked2 == 2 ||
          (_this.mainShapeval == 2 && _this.BoxClicked1 == 1)
        ) {
          _this.perimeter.x += 20;
          _this.AnswerBox.x += 20;
          _this.perimeterM.x += 20;
        }
        _this.addNumberPad();
      });
    }
  },
  showImageJoining: function () {
    _this.bgBox.visible = true;

    //fixing the x position. when the bigger object is on right side. for joining screen we need to move the objec to right.
    if (_this.box_x[0] == 450) {
      if (_this.mainShapeval == 0) {
        if (_this.side1 == 3) {
          _this.biggerShape.x = 224;
          _this.graphics.x = -371;
        }
        if (_this.side1 == 4) {
          _this.biggerShape.x = 205;
          _this.graphics.x = -370.5;
        }
        if (_this.side1 == 5) {
          _this.biggerShape.x = 186;
          _this.graphics.x = -370.5;
        }
        if (_this.side1 == 6) {
          _this.biggerShape.x = 167;
          _this.graphics.x = -370;
        }
        if (_this.side1 == 7) {
          _this.biggerShape.x = 148;
          _this.graphics.x = -370.5;
        }
        if (_this.side1 == 8) {
          _this.biggerShape.x = 129;
          _this.graphics.x = -370.5;
        }
      }
      if (_this.mainShapeval == 1) {
        if (_this.side1 == 3) {
          _this.biggerShape.x = 186;
          if (_this.side2 == 7) _this.graphics.x = -332.5;
          else if (_this.side2 == 5) _this.graphics.x = -370;
          else if (_this.side2 == 6) _this.graphics.x = -351;
          else if (_this.side2 == 8) _this.graphics.x = -313.5;
          else _this.graphics.x = -390;
        }
        if (_this.side1 == 4) {
          _this.biggerShape.x = 186;
          if (_this.side2 == 7) _this.graphics.x = -332.5;
          else if (_this.side2 == 5) _this.graphics.x = -370.5;
          else if (_this.side2 == 6) _this.graphics.x = -351;
          else if (_this.side2 == 8) _this.graphics.x = -313.5;
          else _this.graphics.x = -408.5;
        }
        if (_this.side1 == 5) {
          if (_this.side2 == 4) {
            _this.graphics.x = -390;
            _this.biggerShape.x = 186;
          } else if (_this.side2 == 6) {
            _this.graphics.x = -351.5;
            _this.biggerShape.x = 186;
          } else if (_this.side2 == 7) {
            _this.graphics.x = -332;
            _this.biggerShape.x = 186;
          } else if (_this.side2 == 8) {
            _this.graphics.x = -355;
            _this.biggerShape.x = 145;
          } //{ _this.graphics.x = -370; _this.biggerShape.x = 129; }
          else {
            _this.graphics.x = -408.5;
            _this.biggerShape.x = 186;
          }
        }
        if (_this.side1 == 6) {
          _this.biggerShape.x = 186;
          if (_this.side2 == 4) _this.graphics.x = -390;
          else if (_this.side2 == 5) _this.graphics.x = -370;
          else if (_this.side2 == 7) _this.graphics.x = -332;
          else if (_this.side2 == 8) {
            _this.graphics.x = -354;
            _this.biggerShape.x = 145;
          } else _this.graphics.x = -408.5;
        }
        if (_this.side1 == 7) {
          _this.biggerShape.x = 186;
          if (_this.side2 == 4) _this.graphics.x = -389;
          else if (_this.side2 == 5) _this.graphics.x = -370;
          else if (_this.side2 == 6) _this.graphics.x = -351;
          else if (_this.side2 == 8) {
            _this.graphics.x = -354;
            _this.biggerShape.x = 145;
          } else _this.graphics.x = -408.5;
        }
        if (_this.side1 == 8) {
          _this.biggerShape.x = 205;
          if (_this.side2 == 4) _this.graphics.x = -370.5;
          else if (_this.side2 == 5) _this.graphics.x = -351.5;
          else if (_this.side2 == 6) _this.graphics.x = -332.5;
          else if (_this.side2 == 7) {
            _this.graphics.x = -338;
            _this.biggerShape.x = 180;
          } else _this.graphics.x = -389.5;
        }
      }
      if (_this.mainShapeval == 2) {
        if (_this.pL == 3) {
          _this.biggerShape.x = 171;
          _this.graphics.x = -410;
        }
        if (_this.pL == 4) {
          _this.biggerShape.x = 147.5;
          _this.graphics.x = -410;
        }
        if (_this.pL == 5) {
          _this.biggerShape.x = 124;
          _this.graphics.x = -410;
        }
        if (_this.pL == 6) {
          _this.biggerShape.x = 100.5;
          _this.graphics.x = -410;
        }
        if (_this.pL == 7) {
          _this.biggerShape.x = 77;
          _this.graphics.x = -410;
        }
        if (_this.pL == 8) {
          _this.biggerShape.x = 53.5;
          _this.graphics.x = -410;
        }
      }
    }

    _this.Box1.destroy();
    _this.Box2.destroy();
    _this.part3 = true;
    xvar = _this.mainShapeval == 2 ? _this.findSlantValue(_this.side1) : 0;
    yvar =
      _this.biggerShape.y -
      1 * _this.smallerShape.height +
      _this.biggerShape.height;

    var intialPosx = _this.smallerShape.x;
    var intialPosy = _this.smallerShape.y;

    _this.tweenSmall = _this.add.tween(_this.smallerShape);
    _this.tweenSmall2 = _this.add.tween(_this.graphics2);

    if (_this.mainShapeval != 2) {
      _this.tweenSmall.to(
        {
          x: _this.biggerShape.x + _this.biggerShape.width - _this.by1,
          y:
            _this.biggerShape.y +
            _this.biggerShape.height / 2 -
            _this.smallerShape.height / 2 -
            _this.by2,
        },
        600,
        "Linear",
        true,
        0
      );
      _this.tweenSmall2.to(
        {
          x:
            _this.biggerShape.x +
            _this.biggerShape.width -
            intialPosx -
            _this.by1,
          y:
            _this.biggerShape.y +
            _this.biggerShape.height / 2 -
            _this.smallerShape.height / 2 -
            intialPosy -
            _this.by2,
        },
        600,
        "Linear",
        true,
        0
      );
    } else if (_this.smallerShapeval != 4) {
      _this.tweenSmall.to(
        {
          x: _this.biggerShape.x + _this.pL * 35 + xvar - 2,
          y: yvar - _this.by2,
        },
        600,
        "Linear",
        true,
        0
      );
      _this.tweenSmall2.to(
        {
          x: _this.biggerShape.x + _this.pL * 35 + xvar - intialPosx - 2,
          y: yvar - intialPosy - _this.by2,
        },
        600,
        "Linear",
        true,
        0
      );
    } else {
      if (_this.pL == 7 || _this.pL == 8) {
        _this.tweenSmall.to(
          {
            x: _this.biggerShape.x + _this.pL * 35 + 13 - _this.by1,
            y: yvar - _this.by2,
          },
          600,
          "Linear",
          true,
          0
        );
        _this.tweenSmall2.to(
          {
            x:
              _this.biggerShape.x + _this.pL * 35 + 13 - intialPosx - _this.by1,
            y: yvar - intialPosy - _this.by2,
          },
          600,
          "Linear",
          true,
          0
        );
      } else if (_this.pL == 6) {
        _this.tweenSmall.to(
          {
            x: _this.biggerShape.x + _this.pL * 35 + 11 - _this.by1,
            y: yvar - _this.by2,
          },
          600,
          "Linear",
          true,
          0
        );
        _this.tweenSmall2.to(
          {
            x:
              _this.biggerShape.x + _this.pL * 35 + 11 - intialPosx - _this.by1,
            y: yvar - intialPosy - _this.by2,
          },
          600,
          "Linear",
          true,
          0
        );
      } else if (_this.pL == 5) {
        _this.tweenSmall.to(
          {
            x: _this.biggerShape.x + _this.pL * 35 + 9 - _this.by1,
            y: yvar - _this.by2,
          },
          600,
          "Linear",
          true,
          0
        );
        _this.tweenSmall2.to(
          {
            x: _this.biggerShape.x + _this.pL * 35 + 9 - intialPosx - _this.by1,
            y: yvar - intialPosy - _this.by2,
          },
          600,
          "Linear",
          true,
          0
        );
      } else {
        _this.tweenSmall.to(
          {
            x: _this.biggerShape.x + _this.pL * 35 + 5 - _this.by1,
            y: yvar - _this.by2,
          },
          600,
          "Linear",
          true,
          0
        );
        _this.tweenSmall2.to(
          {
            x: _this.biggerShape.x + _this.pL * 35 + 5 - intialPosx - _this.by1,
            y: yvar - intialPosy - _this.by2,
          },
          600,
          "Linear",
          true,
          0
        );
      }
    }

    _this.smallerShape.bringToTop();

    _this.tweenSmall.onComplete.add(() => {
      _this.dottedArea1 = _this.add.text(710, 200, `A = ${_this.areaAns1}`);
      _this.applyingStyleGn(_this.dottedArea1);
      _this.dottedArea1.fontSize = "20px";

      _this.dottedArea2 = _this.add.text(710, 340, `A = ${_this.areaAns2}`);
      _this.applyingStyleGn(_this.dottedArea2);
      _this.dottedArea2.fontSize = "20px";
      _this.stopAllSounds();

      _this.Ask_Question7.play();
      _this.Question_flag = 7;

      if (_this.mainShapeval == 0) {
        _this.dottedImg1 = _this.add.sprite(700, 230, "dotedSquare");
      }
      if (_this.mainShapeval == 1) {
        _this.dottedImg1 = _this.add.sprite(680, 230, "dotedRectangle");
        _this.dottedImg1.scale.setTo(0.8, 1);
      }
      if (_this.mainShapeval == 2) {
        _this.dottedImg1 = _this.add.sprite(690, 240, "dotedParallogram");
        _this.dottedImg1.scale.setTo(1);
      }
      if (_this.smallerShapeval == 0) {
        _this.dottedImg2 = _this.add.sprite(690, 370, "dotedParallogram");
      }
      if (_this.smallerShapeval == 1 || _this.smallerShapeval == 4) {
        // _this.dottedImg2 = _this.add.sprite(700, 370, 'dotedTriangle')
        // _this.dottedArea2.y+=10
        _this.dottedImg2 = _this.add.sprite(670, 360, "dotedTriangle");

        _this.dottedImg2.scale.setTo(1, 0.8);
        if (_this.smallerShapeval == 4) {
          _this.dottedImg2.y = 346;
          _this.dottedArea2.y -= 20;
        }
      }
      if (_this.smallerShapeval == 2) {
        _this.dottedArea2.y -= 20;

        _this.dottedImg2 = _this.add.sprite(695, 350, "dotedSquare");
        _this.dottedImg2.scale.setTo(1);
      }
      if (_this.smallerShapeval == 3) {
        _this.dottedArea2.y -= 20;
        _this.dottedImg2 = _this.add.sprite(675, 350, "dotedRectangle");
        _this.dottedImg2.scale.setTo(1);
      }
      _this.AnswerBox = _this.add.image(620, 100, "answerBox");
      _this.perimeter = _this.add.text(640, 125, "A" + " " + "=");
      _this.applyingStyle(_this.perimeter);

      _this.perimeterM = _this.add.text(770, 125, "m" + _this.power);
      _this.applyingStyle(_this.perimeterM);
      _this.addNumberPad();
    });
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
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();

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
        95,
        20,
        "" + var_selectedAns1 + var_selectedAns2,
        { fontSize: "30px" }
      );
    else
      _this.enterTxt = _this.add.text(
        90,
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
    _this.AnswerBox.name = Number("" + var_selectedAns1 + var_selectedAns2);
  },
  tweenNumPad: function () {
    _this.numGroup.visible = true;
    _this.numpadTween.to({ x: 0, y: -43 }, 1000, "Linear", true, 0);
  }, //
  wrongbtnClicked: function (target) {
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
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();
    if (_this.perimeterVar == 1) {
      if (_this.BoxClicked1 == 1) {
        if (
          (Number("" + _this.selectedAns1 + _this.selectedAns2) ==
            2 * (_this.side1 + _this.side2) &&
            _this.mainShapeval != 2) ||
          (Number("" + _this.selectedAns1 + _this.selectedAns2) ==
            2 * (_this.pL + _this.pB) &&
            _this.mainShapeval == 2)
        ) {
          _this.Box1.inputEnabled = false;
          _this.counterCelebrationSound.currentTime = 0;
          _this.counterCelebrationSound.play();
          _this.BoxClicked1 = 0;
          _this.biggerShape.inputEnabled = false;
          if (_this.mainShapeval != 2) {
            _this.biggerShape.x -= 40;
            _this.graphics.x -= 40;
          }

          _this.clearAreaPerOptions();

          ans = `P = ${_this.AnswerBox.name} m`;
          _this.perimterText = _this.add.text(
            _this.biggerShape.x + _this.biggerShape.width / 2 - ans.length * 4,
            _this.biggerShape.y + _this.biggerShape.height / 2 - 6,
            ans
          );
          _this.applyingStyleGn(_this.perimterText);
          _this.perimterText.y =
            _this.biggerShape.y + _this.biggerShape.height + 10;

          _this.perimterText.fontSize = "18px";
          _this.perimterText.y = 427;
          _this.AnswerBox.destroy();
          _this.eraseScreen();

          if (_this.BoxClicked2 != 0) {
            _this.stopAllSounds();
            _this.time.events.add(600, () => {
              _this.Question_flag = 1;
              _this.Ask_Question1.play();
            });
          }
        } else {
          _this.noofAttempts++;
          _this.wrongans.play();
          _this.eraseScreen();
        }
      } else if (_this.BoxClicked2 == 2) {
        if (_this.mainShapeval != 2)
          correctansval =
            _this.smallerShapeval == 0
              ? 2 * (_this.pL + _this.pB)
              : _this.trside1 + _this.trside2 + _this.trside3;
        else
          correctansval =
            _this.smallerShapeval != 4
              ? 2 * (_this.side1 + _this.side2)
              : _this.trside1 + _this.trside2 + _this.trside3;
        if (
          Number("" + _this.selectedAns1 + _this.selectedAns2) == correctansval
        ) {
          _this.Box2.inputEnabled = false;
          _this.counterCelebrationSound.currentTime = 0;
          _this.counterCelebrationSound.play();
          _this.BoxClicked2 = 0;
          _this.smallerShape.inputEnabled = false;

          _this.clearAreaPerOptions();
          _this.pairImage.destroy();
          _this.graphicsP.destroy();

          ans = `P = ${_this.AnswerBox.name} m`;
          _this.perimterText2 = _this.add.text(
            _this.smallerShape.x +
              _this.smallerShape.width / 2 -
              ans.length * 5,
            _this.smallerShape.y + _this.smallerShape.height / 2 - 6,
            ans
          );
          _this.applyingStyleGn(_this.perimterText2);
          _this.perimterText2.y =
            _this.smallerShape.y + _this.smallerShape.height + 10;
          _this.perimterText2.fontSize = "18px";
          _this.perimterText2.y = 427;

          if (_this.smallerShapeval == 1 || _this.smallerShapeval == 4) {
            _this.perimterText2.y += 10;
          }
          if (
            _this.smallerShapeval == 4 &&
            (_this.pB2 == 2 || _this.pL2 == 2)
          ) {
            _this.perimterText2.y += 15;
          }
          _this.perimterText2.y = 427;

          _this.AnswerBox.destroy();
          _this.eraseScreen();

          if (_this.BoxClicked1 != 0) {
            _this.stopAllSounds();
            _this.time.events.add(600, () => {
              _this.Question_flag = 1;
              _this.Ask_Question1.play();
            });
          }
        } else {
          _this.noofAttempts++;
          _this.wrongans.play();
          _this.eraseScreen();
        }
      }

      if (_this.BoxClicked1 == 0 && _this.BoxClicked2 == 0) {
        // enable boxes to select grater perimeter
        _this.enableBoxClick();
        _this.mainclick = false;
        _this.pairclick = false;
        _this.stopAllSounds();
        _this.time.events.add(500, () => {
          _this.Ask_Question3.play();
          _this.Question_flag = 3;
        });

        _this.BoxClicked1 = -1;
        _this.BoxClicked2 = -1;
      }
    } else if (_this.area == 1) {
      if (_this.BoxClicked1 == 1) {
        if (
          (Number("" + _this.selectedAns1 + _this.selectedAns2) ==
            _this.side1 * _this.side2 &&
            _this.mainShapeval != 2) ||
          (Number("" + _this.selectedAns1 + _this.selectedAns2) ==
            _this.pL * _this.pB &&
            _this.mainShapeval == 2)
        ) {
          _this.counterCelebrationSound.currentTime = 0;
          _this.counterCelebrationSound.play();
          _this.areaAns1 = Number("" + _this.selectedAns1 + _this.selectedAns2);

          _this.pairImage.destroy();
          _this.graphicsP.destroy();

          _this.clearAreaPerOptions();
          //this will only apply for  when the shepe is in the left side
          if (_this.box_x[0] == 40) {
            if (_this.mainShapeval != 2) {
              _this.biggerShape.x -= 40;
              _this.graphics.x -= 40;
            }
          }

          _this.BoxClicked1 = 0;
          _this.biggerShape.inputEnabled = false;

          ans = `A = ${_this.AnswerBox.name} m${_this.power}`;
          _this.perimterText = _this.add.text(
            _this.biggerShape.x + _this.biggerShape.width / 2 - ans.length * 4,
            _this.biggerShape.y + _this.biggerShape.height / 2 - 6,
            ans
          );
          _this.applyingStyleGn(_this.perimterText);
          _this.perimterText.y =
            _this.biggerShape.y + _this.biggerShape.height + 10;

          _this.perimterText.fontSize = "18px";
          _this.perimterText.y = 427;
          _this.AnswerBox.destroy();
          _this.eraseScreen();

          if (_this.BoxClicked2 != 0) {
            _this.stopAllSounds();
            _this.time.events.add(600, () => {
              _this.Ask_Question1.play();
              _this.Question_flag = 1;
            });
          }
        } else {
          _this.noofAttempts++;
          _this.wrongans.play();
          _this.eraseScreen();
        }
      } else if (_this.BoxClicked2 == 2) {
        console.log("small shape validation");
        if (
          (Number("" + _this.selectedAns1 + _this.selectedAns2) ==
            _this.pL * _this.pB &&
            _this.smallerShapeval == 0 &&
            _this.mainShapeval != 2) ||
          (Number("" + _this.selectedAns1 + _this.selectedAns2) ==
            (_this.pL * _this.pB) / 2 &&
            _this.smallerShapeval == 1 &&
            _this.mainShapeval != 2) ||
          (Number("" + _this.selectedAns1 + _this.selectedAns2) ==
            (_this.pL2 * _this.pB2) / 2 &&
            _this.smallerShapeval == 4) ||
          (Number("" + _this.selectedAns1 + _this.selectedAns2) ==
            _this.side1 * _this.side2 &&
            (_this.smallerShapeval == 2 || _this.smallerShapeval == 3))
        ) {
          _this.counterCelebrationSound.currentTime = 0;
          _this.counterCelebrationSound.play();

          _this.clearAreaPerOptions();
          _this.pairImage.destroy();
          _this.graphicsP.destroy();

          _this.areaAns2 = Number("" + _this.selectedAns1 + _this.selectedAns2);

          ans = `A = ${_this.AnswerBox.name} m${_this.power}`;
          _this.perimterText2 = _this.add.text(
            _this.smallerShape.x +
              _this.smallerShape.width / 2 -
              ans.length * 5,
            _this.smallerShape.y + _this.smallerShape.height / 2 - 6,
            ans
          );
          _this.applyingStyleGn(_this.perimterText2);

          _this.BoxClicked2 = 0;
          _this.smallerShape.inputEnabled = false;

          _this.perimterText2.y =
            _this.smallerShape.y + _this.smallerShape.height + 10;
          _this.perimterText2.fontSize = "18px";
          _this.perimterText2.y = 427;
          _this.AnswerBox.destroy();
          _this.eraseScreen();

          if (_this.BoxClicked1 != 0) {
            _this.stopAllSounds();
            _this.time.events.add(600, () => {
              _this.Ask_Question1.play();
              _this.Question_flag = 1;
            });
          }
        } else {
          _this.noofAttempts++;
          _this.wrongans.play();
          _this.eraseScreen();
        }
      }
      if (_this.BoxClicked1 == 0 && _this.BoxClicked2 == 0) {
        _this.enableBoxClick();
        _this.area = 0;
        _this.stopAllSounds();
        _this.time.events.add(500, () => {
          _this.Ask_Question6.play();
          _this.Question_flag = 6;
        });
      }
    } else if (_this.part3 == true) {
      if (
        Number("" + _this.selectedAns1 + _this.selectedAns2) ==
        _this.areaAns1 + _this.areaAns2
      ) {
        _this.noofAttempts++;
        _this.celebrationSound.play();
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
        _this.starActions();
        _this.numGroup.destroy();
        _this.numpad = 0;
        _this.part3 = false;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.eraseScreen();
        _this.occupyBiggr();
      } else {
        _this.noofAttempts++;
        _this.wrongans.play();
        _this.eraseScreen();
      }
    } else if (_this.part4 == true) {
      if (
        Number("" + _this.selectedAns1 + _this.selectedAns2) ==
        _this.areaAns1 - _this.areaAns2
      ) {
        _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
        _this.celebrationSound.play();
        _this.starActions();
        _this.numGroup.destroy();
        _this.numpad = 0;
        _this.part4 = false;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.eraseScreen();
        _this.stopAllSounds();
        // voice 5 show multiplying objects
        if (_this.mainShapeval != 2) _this.fillShape();
        else _this.fillShape2();
      } else {
        _this.noofAttempts++;
        _this.wrongans.play();
        _this.eraseScreen();
      }
    } else if (_this.part5 == true) {
      if (
        Number("" + _this.selectedAns1 + _this.selectedAns2) ==
        _this.areaAns2 * _this.smallerGrp.children.length
      ) {
        _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
        _this.celebrationSound.play();
        _this.starActions();
        _this.numGroup.destroy();
        _this.numpad = 0;
        _this.part5 = false;
        _this.eraseScreen();
        // voice 6
        _this.time.events.add(500, () => {
          _this.smallerGrp.forEach((element) => {
            element.frame = 0;
          });
          _this.biggerShape.frame = 1;
          _this.finalPart = true;
          _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
          _this.addNumberPad();
          _this.stopAllSounds();
          _this.Ask_Question10.play();
          _this.Question_flag = 10;
        });
      } else {
        _this.noofAttempts++;
        _this.wrongans.play();
        _this.eraseScreen();
      }
    } else if (_this.finalPart == true) {
      if (
        Number("" + _this.selectedAns1 + _this.selectedAns2) ==
        _this.areaAns1 - _this.areaAns2 * _this.smallerGrp.children.length
      ) {
        _this.noofAttempts++;
        _this.celebrationSound.play();
        _this.numGroup.destroy();
        _this.numpad = 0;
        _this.finalAns = false;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.correctAns();
      } else {
        _this.noofAttempts++;
        _this.wrongans.play();
        _this.eraseScreen();
      }
    }
  },
  occupyBiggr: function () {
    _this.noofAttempts = 0;
    _this.smallerShape.bringToTop();
    _this.tweenovrlp = _this.add.tween(_this.smallerShape);
    _this.tweenovrlp2 = _this.add.tween(_this.graphics2);

    if (_this.mainShapeval != 2) {
      var intialPosx = _this.smallerShape.x - _this.graphics2.x;
      var intialPosy = _this.smallerShape.y - _this.graphics2.y;

      _this.tweenovrlp.to(
        {
          x: _this.biggerShape.x + _this.bx1,
          y:
            _this.biggerShape.y +
            _this.biggerShape.height -
            _this.smallerShape.height -
            _this.by2 +
            _this.sy2,
        },
        600,
        "Linear",
        true,
        0
      );
      _this.tweenovrlp2.to(
        {
          x: _this.biggerShape.x - intialPosx + _this.bx1,
          y:
            _this.biggerShape.y +
            _this.biggerShape.height -
            _this.smallerShape.height -
            intialPosy -
            _this.by2 +
            _this.sy2,
        },
        600,
        "Linear",
        true,
        0
      );
    } else {
      xvar = _this.findSlantValue(_this.side1);
      console.log(xvar);

      var intialPosx = _this.smallerShape.x - _this.graphics2.x;
      var intialPosy = _this.smallerShape.y - _this.graphics2.y;

      yvar =
        _this.biggerShape.y -
        1 * _this.smallerShape.height +
        _this.biggerShape.height;

      // _this.tweenovrlp.to({ x: xvar + _this.biggerShape.x, y: yvar }, 600, 'Linear', true, 0)
      // _this.tweenovrlp2.to({ x: xvar + _this.biggerShape.x - intialPosx, y: yvar - intialPosy }, 600, 'Linear', true, 0)

      // _this.tweenovrlp2.to({ x: xvar + _this.biggerShape.x , y: yvar}, 600, 'Linear', true, 0)

      _this.tweenovrlp.to(
        {
          x: xvar + _this.biggerShape.x + _this.bx1,
          y: yvar - _this.by2 + _this.sy2,
        },
        600,
        "Linear",
        true,
        0
      );
      _this.tweenovrlp2.to(
        {
          x: xvar + _this.biggerShape.x - intialPosx + _this.bx1,
          y: yvar - intialPosy - _this.by2 + _this.sy2,
        },
        600,
        "Linear",
        true,
        0
      );
    }
    _this.tweenovrlp.onComplete.add(() => {
      _this.part4 = true;
      _this.addNumberPad();
      _this.stopAllSounds();

      _this.Ask_Question81.play();
      _this.Question_flag = 8;
      // _this.Ask_Question81.addEventListener('ended', () => {
      //     _this.Ask_Question82.play();
      // });
    });
  },
  fillShape2: function () {
    _this.noofAttempts = 0;
    console.log("fillShape2");

    _this.ansheight = Math.floor(
      _this.graphics.height / _this.graphics2.height
    );
    if (_this.ansheight <= 1) _this.ansheight = 2;
    _this.smallerGrp = _this.add.group();
    _this.smallerGrpHr = _this.add.group();

    _this.smallerGrp.addChild(_this.smallerShape);
    _this.multiplyLoop1 = _this.time.create(false);
    count = 1;

    //  Set a TimerEvent to occur after 2 seconds
    _this.multiplyLoop1.loop(
      800,
      function () {
        console.log("loop...................");

        _this.smallergrpCpy = _this.add.sprite(
          _this.smallerGrp.getChildAt(count - 1).x,
          _this.smallerGrp.getChildAt(count - 1).y,
          _this.smallerShape.key
        );
        _this.smallergrpCpy.scale.setTo(_this.scaleX, _this.scaleY);
        count++;
        yvar = 0;
        if (_this.smallerShapeval == 0 && _this.pL <= 4) {
          yvar = count * 0.5;
        }
        _this.smallerGrp.addChild(_this.smallergrpCpy);
        _this.createMaskedObjectCpy(count - 1);

        var intialPosx = _this.smallergrpCpy.x;
        var intialPosy = _this.smallergrpCpy.y;

        _this.tweenovrlp = _this.add.tween(_this.smallergrpCpy);
        xvarslant = _this.findSlantValue(_this.side1 * count);
        console.log("slant value" + xvarslant);
        _this.tweenovrlp.to(
          {
            x: _this.biggerShape.x + xvarslant + _this.bx1,
            y:
              _this.biggerShape.y -
              count * _this.smallerShape.height +
              _this.biggerShape.height -
              _this.by2 +
              _this.sy2,
          },
          500,
          "Linear",
          true,
          0
        );

        _this.tweenovrlp2 = _this.add.tween(_this.maskGp[count - 2]);
        _this.tweenovrlp2.to(
          {
            x: _this.biggerShape.x + xvarslant - intialPosx + _this.bx1,
            y:
              _this.biggerShape.y -
              count * _this.smallerShape.height +
              _this.biggerShape.height -
              intialPosy -
              _this.by2 +
              _this.sy2,
          },
          500,
          "Linear",
          true,
          0
        );

        if (count == _this.ansheight) {
          _this.multiplyLoop1.stop();
          _this.tweenovrlp.onComplete.add(() => {
            counthr = 1;
            objectWidth = _this.pL * 35; //needt= to find the overlapped one
            // objectWidth = _this.graphics.width;   //needt= to find the overlapped one

            currentHrWidth =
              _this.smallerShape.width + _this.findSlantValue(_this.side1);
            _this.initialWidth = currentHrWidth + _this.sx1;

            if (
              objectWidth - currentHrWidth >= _this.smallerShape.width &&
              !(
                _this.pL == 5 &&
                _this.pB == 7 &&
                _this.smallerShapeval != 4 &&
                _this.pB2 == 2
              )
            ) {
              _this.multiplyHorizontalShapes2(currentHrWidth);
            } else {
              // move to nect questions
              _this.smallerGrp.forEach((element) => {
                element.frame = 1;
              });
              // vo5
              _this.part5 = true;
              _this.addNumberPad();
              _this.stopAllSounds();

              _this.Ask_Question91.play();
              _this.Question_flag = 9;
              // _this.Ask_Question91.addEventListener('ended', () => {
              //     _this.Ask_Question92.play();
              // });

              _this.time.events.add(1500, function () {
                console.log("changing the alphaaaaa.....");
                _this.firstShapeTween = _this.add
                  .tween(_this.smallerGrp)
                  .to({ alpha: 0.3 }, 1000, "Linear", true, 0);
                _this.firstShapeTween.onComplete.add(function () {
                  _this.smallerGrp.alpha = 1;
                  _this.smallerGrp.forEach((element) => {
                    element.frame = 0;
                    // element.alpha = 1;
                  });
                });
              });
            }
          });
        }
      },
      _this
    );

    _this.multiplyLoop1.start();
  },
  multiplyHorizontalShapes2: function (currentHrWidth) {
    console.log("multiplyHorizontalShapes2");
    xvar = _this.smallerShape.x + currentHrWidth - _this.bx1;

    _this.multiplyLoop2 = _this.time.create(false);
    count = 0;
    grplength = _this.smallerGrp.children.length;
    //  Set a TimerEvent to occur after 2 seconds
    _this.multiplyLoop2.loop(
      0,
      function () {
        // ansheight = Math.floor(_this.pB / _this.side1)
        _this.smallergrpCpy = _this.add.sprite(
          _this.smallerGrp.getChildAt(grplength - _this.ansheight + count).x,
          _this.smallerGrp.getChildAt(grplength - _this.ansheight + count).y,
          _this.smallerShape.key
        );

        _this.smallergrpCpy.scale.setTo(_this.scaleX, _this.scaleY);
        count++;
        yvar = 0;
        if (_this.smallerShapeval == 0 && _this.pL <= 4 && count != 1) {
          yvar = count * 0.5;
        }
        _this.smallerGrp.addChild(_this.smallergrpCpy);
        _this.createMaskedObjectCpy(_this.smallerGrp.children.length - 1);

        var intialPosx = _this.smallergrpCpy.x;
        var intialPosy = _this.smallergrpCpy.y;

        _this.tweenovrlp = _this.add.tween(_this.smallergrpCpy);

        _this.tweenovrlp2 = _this.add.tween(_this.smallergrpCpy);
        _this.tweenovrlp2.to(
          {
            x:
              _this.smallerGrp.getChildAt(
                grplength - _this.ansheight + count - 1
              ).x + _this.smallerGraphicsWidth,
            y:
              _this.biggerShape.y -
              count * _this.smallerShape.height +
              _this.biggerShape.height -
              _this.by2 +
              _this.sy2,
          },
          500,
          "Linear",
          true,
          0
        );

        _this.tweenovrlp3 = _this.add.tween(
          _this.maskGp[_this.maskGp.length - 1]
        );
        _this.tweenovrlp3.to(
          {
            x:
              _this.smallerGrp.getChildAt(
                grplength - _this.ansheight + count - 1
              ).x +
              _this.smallerGraphicsWidth -
              intialPosx,
            y:
              _this.biggerShape.y -
              count * _this.smallerShape.height +
              _this.biggerShape.height -
              intialPosy -
              _this.by2 +
              _this.sy2,
          },
          500,
          "Linear",
          true,
          0
        );

        if (count == _this.ansheight) {
          _this.multiplyLoop2.stop();
          _this.tweenovrlp2.onComplete.add(() => {
            currentHrWidth += _this.smallerShape.width;
            objectWidth = _this.pL * 35; //needt= to find the overlapped one
            // objectWidth = _this.graphics.width
            if (
              objectWidth - currentHrWidth >= _this.smallerShape.width &&
              !(_this.pL == 7 && _this.pB == 8 && _this.pB2 == 1) &&
              !(
                _this.pL == 8 &&
                _this.pB == 5 &&
                _this.smallerShapeval != 4 &&
                _this.pB2 == 2 &&
                _this.pL2 == 2
              )
            ) {
              _this.multiplyHorizontalShapes2(currentHrWidth);
            } else {
              // move to nect questions
              _this.smallerGrp.forEach((element) => {
                element.frame = 1;
              });
              // vo5
              _this.part5 = true;
              _this.addNumberPad();
              _this.Ask_Question91.play();
              _this.Question_flag = 9;
              // _this.Ask_Question91.addEventListener('ended', () => {
              //     _this.Ask_Question92.play();
              // });

              _this.time.events.add(1500, function () {
                console.log("changing the alphaaaaa.....");
                _this.firstShapeTween = _this.add
                  .tween(_this.smallerGrp)
                  .to({ alpha: 0.3 }, 1000, "Linear", true, 0);
                _this.firstShapeTween.onComplete.add(function () {
                  _this.smallerGrp.alpha = 1;
                  _this.smallerGrp.forEach((element) => {
                    element.frame = 0;
                    // element.alpha = 1;
                  });
                });
              });
            }
          });
        }
      },
      _this
    );

    _this.multiplyLoop2.start();
  },
  fillShape: function () {
    _this.noofAttempts = 0;
    console.log("fillShape");
    _this.ansheight = Math.floor(
      _this.graphics.height / _this.graphics2.height
    );
    if (_this.ansheight <= 1) _this.ansheight = 2;

    _this.smallerGrp = _this.add.group();
    _this.smallerGrpHr = _this.add.group();

    _this.smallerGrp.addChild(_this.smallerShape);
    _this.multiplyLoop1 = _this.time.create(false);
    count = 1;

    //  Set a TimerEvent to occur after 2 seconds
    _this.multiplyLoop1.loop(
      800,
      function () {
        _this.smallergrpCpy = _this.add.sprite(
          _this.smallerGrp.getChildAt(count - 1).x,
          _this.smallerGrp.getChildAt(count - 1).y,
          _this.smallerShape.key
        );
        _this.smallergrpCpy.scale.setTo(_this.scaleX, _this.scaleY);

        count++;
        yvar = 0;
        if (_this.smallerShapeval == 0 && _this.pL <= 4) {
          yvar = count * 0.5;
        }
        _this.smallerGrp.addChild(_this.smallergrpCpy);
        _this.createMaskedObjectCpy(count - 1);

        var intialPosx = _this.smallergrpCpy.x;
        var intialPosy = _this.smallergrpCpy.y;

        _this.tweenovrlp = _this.add.tween(_this.smallergrpCpy);
        _this.tweenovrlp.to(
          {
            x: _this.biggerShape.x + _this.bx1,
            y:
              _this.biggerShape.y +
              _this.biggerShape.height -
              count * _this.smallerShape.height +
              yvar -
              _this.by2 +
              _this.sy2,
          },
          500,
          "Linear",
          true,
          0
        );

        _this.tweenovrlp2 = _this.add.tween(_this.maskGp[count - 2]);
        _this.tweenovrlp2.to(
          {
            x: _this.biggerShape.x - intialPosx + _this.bx1,
            y:
              _this.biggerShape.y +
              _this.biggerShape.height -
              count * _this.smallerShape.height +
              yvar -
              intialPosy -
              _this.by2 +
              _this.sy2,
          },
          500,
          "Linear",
          true,
          0
        );

        if (count == _this.ansheight) {
          // if (count == 2) {

          _this.multiplyLoop1.stop();
          _this.tweenovrlp.onComplete.add(() => {
            counthr = 1;
            currentHrWidth = _this.pL * 37; //needt= to find the overlapped one
            if (_this.smallerShapeval == 1) {
              currentHrWidth = _this.pL * 38; //needt= to find the overlapped one
              // currentHrWidth = _this.smallerShape.width
            }
            _this.initialWidth = currentHrWidth + _this.bx1;

            if (
              _this.graphics.width - currentHrWidth >=
              _this.smallerShape.width
            ) {
              _this.multiplyHorizontalShapes(currentHrWidth);
            } else {
              // move to nect questions
              _this.smallerGrp.forEach((element) => {
                element.frame = 1;
              });
              // vo5
              _this.part5 = true;
              _this.addNumberPad();
              _this.stopAllSounds();

              _this.Ask_Question91.play();
              _this.Question_flag = 9;
              // _this.Ask_Question91.addEventListener('ended', () => {
              //     _this.Ask_Question92.play();
              // });

              _this.time.events.add(1500, function () {
                console.log("changing the alphaaaaa.....");
                _this.firstShapeTween = _this.add
                  .tween(_this.smallerGrp)
                  .to({ alpha: 0.3 }, 1000, "Linear", true, 0);
                _this.firstShapeTween.onComplete.add(function () {
                  _this.smallerGrp.alpha = 1;
                  _this.smallerGrp.forEach((element) => {
                    element.frame = 0;
                    // element.alpha = 1;
                  });
                });
              });
            }
          });
        }
      },
      _this
    );

    _this.multiplyLoop1.start();
  },
  multiplyHorizontalShapes: function (currentHrWidth) {
    console.log("multiplyHorizontalShapes");
    xvar = _this.biggerShape.x + currentHrWidth;

    _this.multiplyLoop2 = _this.time.create(false);
    count = 0;
    grplength = _this.smallerGrp.children.length;
    //  Set a TimerEvent to occur after 2 seconds
    _this.multiplyLoop2.loop(
      0,
      function () {
        _this.smallergrpCpy = _this.add.sprite(
          xvar - _this.initialWidth,
          _this.smallerGrp.getChildAt(grplength - _this.ansheight + count).y,
          _this.smallerShape.key
        );
        _this.smallergrpCpy.scale.setTo(_this.scaleX, _this.scaleY);

        count++;
        yvar = 0;
        if (_this.smallerShapeval == 0 && _this.pL <= 4 && count != 1) {
          yvar = count * 0.5;
        }
        _this.smallerGrp.addChild(_this.smallergrpCpy);
        _this.createMaskedObjectCpy(_this.smallerGrp.children.length - 1);

        var intialPosx = _this.smallergrpCpy.x;
        var intialPosy = _this.smallergrpCpy.y;

        _this.tweenovrlp2 = _this.add.tween(_this.smallergrpCpy);
        _this.tweenovrlp2.to(
          {
            x: xvar + _this.bx1 - _this.sx1,
            y:
              _this.biggerShape.y +
              _this.biggerShape.height -
              count * _this.smallerShape.height +
              yvar -
              _this.by2 +
              _this.sy2,
          },
          500,
          "Linear",
          true,
          0
        );

        _this.tweenovrlp3 = _this.add.tween(
          _this.maskGp[_this.maskGp.length - 1]
        );
        _this.tweenovrlp3.to(
          {
            x: xvar - intialPosx + _this.bx1 - _this.sx1,
            y:
              _this.biggerShape.y +
              _this.biggerShape.height -
              count * _this.smallerShape.height +
              yvar -
              intialPosy -
              _this.by2 +
              _this.sy2,
          },
          500,
          "Linear",
          true,
          0
        );

        if (count == _this.ansheight) {
          _this.multiplyLoop2.stop();
          _this.tweenovrlp2.onComplete.add(() => {
            currentHrWidth += _this.initialWidth + _this.bx1;
            if (
              _this.graphics.width - currentHrWidth >=
              _this.smallerShape.width
            ) {
              _this.multiplyHorizontalShapes(currentHrWidth);
            } else {
              // move to nect questions
              _this.smallerGrp.forEach((element) => {
                element.frame = 1;
              });
              // vo5
              _this.part5 = true;
              _this.addNumberPad();
              _this.Ask_Question91.play();
              _this.Question_flag = 9;
              // _this.Ask_Question91.addEventListener('ended', () => {
              //     _this.Ask_Question92.play();
              // });

              _this.time.events.add(1500, function () {
                console.log("changing the alphaaaaa.....");
                _this.firstShapeTween = _this.add
                  .tween(_this.smallerGrp)
                  .to({ alpha: 0.3 }, 1000, "Linear", true, 0);
                _this.firstShapeTween.onComplete.add(function () {
                  _this.smallerGrp.alpha = 1;
                  _this.smallerGrp.forEach((element) => {
                    element.frame = 0;
                    // element.alpha = 1;
                  });
                });
              });
            }
          });
        }
      },
      _this
    );

    _this.multiplyLoop2.start();
  },
  enableBoxClick: function () {
    _this.Box1.inputEnabled = true;
    _this.Box1.input.useHandCursor = true;
    _this.Box1.events.onInputDown.add(function () {
      _this.clickSound.pause();
      _this.clickSound.play();
      _this.Box2.frame = 0;
      _this.Box1.frame = 1;
    });
    _this.Box2.inputEnabled = true;
    _this.Box2.input.useHandCursor = true;
    _this.Box2.events.onInputDown.add(function () {
      _this.clickSound.pause();
      _this.clickSound.play();
      _this.Box1.frame = 0;
      _this.Box2.frame = 1;
    });

    _this.tick = _this.add.sprite(880, 405, "TickBtn");
    _this.tick.frame = 1;
    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(_this.perimeterSelected, _this);

    _this.mainclick = false;
    _this.pairclick = false;
  },
  clearAreaPerOptions: function () {
    _this.numGroup.destroy();
    _this.numpad = 0;
    _this.perimeter.destroy();
    _this.perimeterM.destroy();

    _this.bigBox.destroy();
    // _this.mainShape.destroy();
    if (_this.fmBox1) _this.fmBox1.destroy();
    if (_this.fmBox2) _this.fmBox2.destroy();
    if (_this.fmBox3) _this.fmBox3.destroy();
    if (_this.frm1) _this.frm1.destroy();
    if (_this.frm2) _this.frm2.destroy();
    if (_this.frm3) _this.frm3.destroy();

    if (_this.hLine) _this.hLine.destroy();
    _this.llineText.destroy();
    _this.lLine.destroy();
    if (_this.hlineText) _this.hlineText.destroy();
    if (_this.lLine2) _this.lLine2.destroy();
    if (_this.lLine3) _this.lLine3.destroy();
    if (_this.llineText2) _this.llineText2.destroy();
    if (_this.llineText3) _this.llineText3.destroy();

    if (_this.box_x[0] == 450) {
      _this.biggerShape.x =
        _this.Box1.x + _this.Box1.width / 2 - _this.biggerShape.width / 2;
      _this.graphics.x = 0; //_this.Box1.x + _this.Box1.width / 2 - _this.biggerShape.width / 2;
    }

    _this.clearArray.forEach((element) => {
      element.visible = true;
    });
  },
  perimeterSelected: function () {
    if (_this.Box1.frame == 1 && _this.Box2.frame == 0) {
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      _this.celebrationSound.currentTime = 0;
      _this.celebrationSound.play();
      _this.starActions();
      _this.perimeterVar = 0;
      if (_this.area != 0) _this.area = 1;
      else _this.area = 0;
      _this.Box1.events.onInputDown.removeAll();
      _this.Box2.events.onInputDown.removeAll();
      _this.biggerShape.events.onInputDown.removeAll();
      _this.smallerShape.events.onInputDown.removeAll();

      _this.perimterText2.destroy();
      _this.perimterText.destroy();

      _this.Box1.frame = 0;
      _this.Box2.frame = 0;

      _this.tick.destroy();
      if (_this.area == 1) {
        _this.biggerShape.inputEnabled = true;
        _this.biggerShape.input.useHandCursor = true;
        _this.biggerShape.events.onInputDown.add(_this.bigShapeClicked, _this);
        _this.stopAllSounds();
        _this.time.events.add(400, () => {
          _this.Ask_Question4.play();
          _this.Question_flag = 4;
        });

        _this.smallerShape.inputEnabled = true;
        _this.smallerShape.input.useHandCursor = true;
        _this.smallerShape.events.onInputDown.add(
          _this.pairShapeClicked,
          _this
        );
      } else {
        _this.showImageJoining();
      }
    } else {
      _this.noofAttempts++;
      _this.wrongans.play();
      _this.Box1.frame = 0;
      _this.Box2.frame = 0;
    }
  },
  ClearAll: function () {
    _this.eraseScreen();

    _this.smallerGrp.destroy();
    _this.biggerShape.destroy();
    if (_this.Box1) _this.Box1.destroy();
    if (_this.Box2) _this.Box2.destroy();

    _this.AnswerBox.destroy();
    _this.dottedArea1.destroy();
    _this.dottedArea2.destroy();
    _this.dottedImg1.destroy();
    _this.dottedImg2.destroy();
    _this.perimeterM.destroy();
    _this.perimeter.destroy();
    _this.fmstring = null;
    _this.fmstring2 = null;
    _this.fmstring1 = null;

    _this.graphics.destroy();
    _this.graphics2.destroy();
    _this.graphicscpy.destroy();

    _this.maskGp.forEach((element) => {
      element.destroy();
    });

    _this.bgBox.destroy();
  },
  checkOverlap: function (spriteA, spriteB) {
    _this.boundsA = spriteA.getBounds();
    _this.boundsB = spriteB.getBounds();

    // console.log(Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB))
    if (
      _this.boundsA.x >= _this.boundsB.x &&
      _this.boundsA.y >= _this.boundsB.y &&
      _this.boundsA.x + _this.boundsA.width <=
        _this.boundsB.x + _this.boundsB.width &&
      _this.boundsA.y + _this.boundsA.height <=
        _this.boundsB.y + _this.boundsB.height
    ) {
      console.log("fhvbhfnv");
    }
    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
  },
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
    target.fill = "#FF0000";
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "24px";
  },

  applyingStyleGn: function (target) {
    target.align = "right";
    target.font = "Akzidenz-Grotesk BQ";
    // target.fill = '#FF0000';
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "16px";
  },

  correctAns: function () {
    _this.celebrationSound.currentTime = 0;
    if (_this.count1 < 5) {
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      _this.celebrationSound.play();
      _this.starActions(_this.count1);
      _this.noofAttempts = 0;
                    _this.AnsTimerCount = 0;
    } else {
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      _this.celebrationSound.play();
      _this.starActions(_this.count1);
      _this.noofAttempts = 0;
                    _this.AnsTimerCount = 0;
      _this.time.events.add(2000, _this.ClearAll);
      _this.time.events.add(2500, () => {
        _this.state.start("score", true, false, gameID, _this.microConcepts);
      });
    }
  },
  starActions: function (target) {
    starAnim = _this.starsGroup.getChildAt(_this.count1);
    starAnim.smoothed = false;
    anim = starAnim.animations.add("star");
    _this.microConcepts = "GeometryG8";
    _this.sceneCount++;
    _this.count1++;
    anim.play();
  },
  shutdown: function () {
    _this.stopVoice();
    //RI.gotoEndPage();
    //telInitializerbbpp.tele_end();
  },

  DemoVideo: function () {
    // DEMO AUDIOS
    _this.demoAudio1 = document.createElement("audio");
    _this.demoAudio1src = document.createElement("source");
    _this.demoAudio1src.setAttribute(
      "src",
      window.baseUrl +
        "questionSounds/GMM-01-G8/" +
        _this.languageSelected +
        "/V1.mp3"
    );
    _this.demoAudio1.appendChild(_this.demoAudio1src);

    _this.demoAudio2 = document.createElement("audio");
    _this.demoAudio2src = document.createElement("source");
    _this.demoAudio2src.setAttribute(
      "src",
      window.baseUrl +
        "questionSounds/GMM-01-G8/" +
        _this.languageSelected +
        "/V2.mp3"
    );
    _this.demoAudio2.appendChild(_this.demoAudio2src);

    // QUESTION AUDIOS
    _this.q1Sound = document.createElement("audio");
    _this.q1Soundsrc = document.createElement("source");
    _this.q1Soundsrc.setAttribute(
      "src",
      window.baseUrl +
        "questionSounds/GMM-01-G8/" +
        _this.languageSelected +
        "/V1.mp3"
    );
    _this.q1Sound.appendChild(_this.q1Soundsrc);

    _this.q2Sound = document.createElement("audio");
    _this.q2Soundsrc = document.createElement("source");
    _this.q2Soundsrc.setAttribute(
      "src",
      window.baseUrl +
        "questionSounds/GMM-01-G8/" +
        _this.languageSelected +
        "/V2.mp3"
    );
    _this.q2Sound.appendChild(_this.q2Soundsrc);

    _this.q3Sound = document.createElement("audio");
    _this.q3Soundsrc = document.createElement("source");
    _this.q3Soundsrc.setAttribute(
      "src",
      window.baseUrl +
        "questionSounds/GMM-01-G8/" +
        _this.languageSelected +
        "/V3.mp3"
    );
    _this.q3Sound.appendChild(_this.q3Soundsrc);

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
  stopAudio: function () {
    //* clear all the timers first

    if (_this.demoAudio1Timer) clearTimeout(_this.demoAudio1Timer);
    if (_this.demoVideo1PauseTimer) clearTimeout(_this.demoVideo1PauseTimer);
    if (_this.q1Timer) clearTimeout(_this.q1Timer);
    if (_this.demoAudio2Timer) clearTimeout(_this.demoAudio2Timer);
    if (_this.q2Timer) clearTimeout(_this.q2Timer);

    if (_this.demoAudio1) {
      console.log("removing the demo audio1");
      _this.demoAudio1.pause();
      _this.demoAudio1 = null;
      _this.demoAudio1src = null;
    }

    if (_this.demoAudio2) {
      console.log("removing the demo audio1");
      _this.demoAudio2.pause();
      _this.demoAudio2 = null;
      _this.demoAudio2src = null;
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

    _this.skip.events.onInputDown.removeAll();
    _this.skip.destroy(); //* skip button destroyed
  },

  showDemoVideo: function () {
    // _this.demoVideo_1 = _this.add.video('ML1_1');
    // _this.demoVideo_1.play(false);
    // _this.demoVideo_1.changeSource("demoVideos/ML1-G7_1.mp4");
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
    //     _this.demoVideo_2 = _this.add.video('ML1_2');
    //     _this.demoVideo_2.play(false);
    //     _this.demoVideo_2.changeSource("demoVideos/ML1-G7_2.mp4");  //* phaser needs this.to run in mobile
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
