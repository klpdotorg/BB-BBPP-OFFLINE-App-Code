Game.GMM_04_G8level1 = function () {};

Game.GMM_04_G8level1.prototype = {
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
    _this.clickSoundsrc.setAttribute("src", window.baseUrl + "sounds/ClickSound.mp3");
    _this.clickSound.appendChild(_this.clickSoundsrc);

    _this.successSound = document.createElement("audio");
    _this.successSoundsrc = document.createElement("source");
    _this.successSoundsrc.setAttribute("src", window.baseUrl + "sounds/Success.mp3");
    _this.successSound.appendChild(_this.successSoundsrc);

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

    _this.wrongans = document.createElement("audio");
    _this.wronganssrc = document.createElement("source");
    _this.wronganssrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
    _this.wrongans.appendChild(_this.wronganssrc);

    _this.framechange = document.createElement("audio");
    _this.framechangesrc = document.createElement("source");
    _this.framechangesrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
    _this.framechange.appendChild(_this.framechangesrc);

    _this.snapSound = document.createElement("audio");
    _this.snapSoundsrc = document.createElement("source");
    _this.snapSoundsrc.setAttribute("src", window.baseUrl + "sounds/snapSound.mp3");
    _this.snapSound.appendChild(_this.snapSoundsrc);

    _this.Ask_Question1 = _this.createAudio("GMM_04_G8_a1");
    _this.Ask_Question2 = _this.createAudio("GMM_04_G8_a2");
    _this.Ask_Question3 = _this.createAudio("GMM_04_G8_a4");
    _this.Ask_Question4 = _this.createAudio("GMM_04_G8_a5");
    _this.Ask_Question5 = _this.createAudio("GMM_04_G8_a6");
    _this.Ask_Question6 = _this.createAudio("GMM_04_G8_a8");
    _this.Ask_Question7 = _this.createAudio("GMM_04_G8_a9");
    _this.Ask_Question81 = _this.createAudio("GMM_04_G8_a10");
    _this.Ask_Question82 = _this.createAudio("V82");
    _this.Ask_Question91 = _this.createAudio("GMM_04_G8_a11");
    _this.Ask_Question92 = _this.createAudio("V92");
    _this.Ask_Question10 = _this.createAudio("GMM_04_G8_a12");
    _this.Ask_Question11 = _this.createAudio("GMM_04_G8_a13");
    _this.Ask_Question12 = _this.createAudio("GMM_04_G8_a14");
    _this.Ask_Question13 = _this.createAudio("GMM_04_G8_a15");
    _this.Ask_Question14 = _this.createAudio("GMM_04_G8_a3");
    _this.Ask_Question15 = _this.createAudio("GMM_04_G8_a7");
  
    telInitializerbbpp.gameIdInit("GMM_04_G8", gradeSelected);
    console.log(gameID,"gameID...");
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
    _this.power = "\u{00B2}";
    _this.pi = "\u03C0";

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
    _this.selectedAns1 = "";
    _this.selectedAns2 = "";
    _this.selectedAns3 = "";
    _this.selectedAns4 = "";
    _this.selectedAns5 = "";

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
      _this.state.start('grade8Geometry', true, false);
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
          _this.Ask_Question81.play();
        }
        if (_this.Question_flag == 9) {
          _this.Ask_Question91.currentTime = 0;
          //   _this.Ask_Question92.currentTime = 0;
          _this.Ask_Question91.play();
          //   _this.Ask_Question91.addEventListener("ended", () => {
          //     _this.Ask_Question92.play();
          //   });
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
        if (_this.Question_flag == 13) {
          _this.Ask_Question13.currentTime = 0;
          _this.Ask_Question13.play();
        }
        if (_this.Question_flag == 14) {
          _this.Ask_Question14.currentTime = 0;
          _this.Ask_Question14.play();
        }
        if (_this.Question_flag == 15) {
          _this.Ask_Question15.currentTime = 0;
          _this.Ask_Question15.play();
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
    //   console.log("inside hintbutton function");
    //   _this.hintBtn.inputEnabled = false;
    //   _this.hintBtn.input.useHandCursor = false;
    //   //* show the demo video
    //   _this.time.events.add(1, function () {
    //     _this.ViewDemoVideo();
    //   });
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
      window.baseUrl + "questionSounds/GMM-04-G8/" + _this.languageSelected + "/" + src + ".mp3"
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
    // _this.showCylinderscreen()

    _this.questionid = 1;
  },
  stopVoice: function () {
    _this.stopAllSounds();
    _this.Ask_Question1 = null;
    _this.Ask_Question2 = null;
    _this.Ask_Question3 = null;
    _this.Ask_Question4 = null;
    _this.Ask_Question5 = null;
    _this.Ask_Question6 = null;
    _this.Ask_Question7 = null;
    _this.Ask_Question81 = null;
    _this.Ask_Question82 = null;
    _this.Ask_Question91 = null;
    _this.Ask_Question92 = null;
    _this.Ask_Question10 = null;
    _this.Ask_Question11 = null;
    _this.Ask_Question12 = null;
    _this.Ask_Question13 = null;
    _this.Ask_Question14 = null;
    _this.Ask_Question15 = null;

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
    _this.Ask_Question82.pause();
    _this.Ask_Question91.pause();
    _this.Ask_Question92.pause();
    _this.Ask_Question10.pause();
    _this.Ask_Question11.pause();
    _this.Ask_Question12.pause();
    _this.Ask_Question13.pause();
    _this.Ask_Question14.pause();
    _this.Ask_Question15.pause();

    _this.Ask_Question1.currentTime = 0;
    _this.Ask_Question2.currentTime = 0;
    _this.Ask_Question3.currentTime = 0;
    _this.Ask_Question4.currentTime = 0;
    _this.Ask_Question5.currentTime = 0;
    _this.Ask_Question6.currentTime = 0;
    _this.Ask_Question7.currentTime = 0;
    _this.Ask_Question81.currentTime = 0;
    _this.Ask_Question82.currentTime = 0;
    _this.Ask_Question91.currentTime = 0;
    _this.Ask_Question92.currentTime = 0;
    _this.Ask_Question10.currentTime = 0;
    _this.Ask_Question11.currentTime = 0;
    _this.Ask_Question12.currentTime = 0;
    _this.Ask_Question13.currentTime = 0;
    _this.Ask_Question14.currentTime = 0;
    _this.Ask_Question15.currentTime = 0;
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
    console.log("InitialScreen");
    _this.clearArray = [];

    _this.bgBox = _this.add.sprite(40, 70, "Box2");
    _this.bgBox.visible = false;

    // _this.box_x = [450, 40];//[40, 450];
    _this.box_x = [40, 450];
    _this.shuffle(_this.box_x);
    console.log(" _this.box_x :", _this.box_x);

    _this.Box1 = _this.add.sprite(_this.box_x[0], 70, "box1");
    _this.clearArray.push(_this.Box1);

    _this.Box2 = _this.add.sprite(_this.box_x[1], 70, "box1");
    _this.clearArray.push(_this.Box2);

    // _this.Box1 = _this.add.sprite(40, 70, 'box1');
    // _this.clearArray.push(_this.Box1);

    // _this.Box2 = _this.add.sprite(450, 70, 'box1');
    // _this.clearArray.push(_this.Box2);

    _this.biggerShape = _this.add.sprite(70, 100, _this.mainshape);

    _this.biggerShape.scale.setTo(_this.sqx, _this.sqy);
    _this.clearArray.push(_this.biggerShape);

    if (_this.box_x[0] == 450) {
      x = 40 + _this.Box1.width / 2 - _this.biggerShape.width / 2 + 407; //40 + _this.Box1.width / 2 - _this.biggerShape.width / 2
      // if (_this.radius == 2) x = (40 + _this.Box1.width / 2 - _this.biggerShape.width / 2) + 410;//567.5;
      // else if (_this.radius == 3) x = (40 + _this.Box1.width / 2 - _this.biggerShape.width / 2) + 407;//539;
      // else x = (40 + _this.Box1.width / 2 - _this.biggerShape.width / 2) + 407;//502;
    } else
      x = _this.Box1.x + _this.Box1.width / 2 - _this.biggerShape.width / 2;

    y = _this.Box1.y + _this.Box1.height / 2 - _this.biggerShape.height / 2;
    _this.biggerShape.x = x;
    _this.biggerShape.y = y - 10;

    _this.smallerShape = _this.add.sprite(500, 150, _this.PairShape);
    _this.smallerShape.scale.setTo(_this.scaleX, _this.scaleY);
    _this.clearArray.push(_this.smallerShape);
    x = _this.Box2.x + _this.Box2.width / 2 - _this.smallerShape.width / 2; //450 + _this.Box2.width / 2 - _this.smallerShape.width / 2
    y = _this.Box2.y + _this.Box2.height / 2 - _this.smallerShape.height / 2;
    _this.smallerShape.x = x;
    _this.smallerShape.y = y;

    _this.biggerShape.inputEnabled = true;
    _this.biggerShape.input.useHandCursor = true;
    _this.biggerShape.events.onInputDown.add(_this.bigShapeClicked, _this);

    _this.smallerShape.inputEnabled = true;
    _this.smallerShape.input.useHandCursor = true;
    _this.smallerShape.events.onInputDown.add(_this.pairShapeClicked, _this);

    console.log("_this.Ask_Question1");
    _this.Ask_Question1.play();
    _this.Question_flag = 1;
    _this.perimeterVar = 1;
    _this.BoxClicked1 = -1;
    _this.BoxClicked2 = -1;
    _this.area = -1;
    _this.biggerShape.bringToTop();

    _this.part1 = true;
    _this.createMaskedObject();
  },
  findSlantValue: function (sideLength) {
    if (_this.pB == 4 && _this.pL == 8 && sideLength >= 2) {
      return (6 + (sideLength - 1) * 2) * 7;
    } else if (_this.pB == 7 && _this.pL == 5 && sideLength > 4) return 12 * 4;

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
  StoreArrayValues: function () {
    _this.decideTheMainShape = [0]; //* main shape is always a circle

    _this.radius = Math.floor(Math.random() * (5 - 2) + 2); //2,3,4

    _this.decideThePair = [0, 1, 2, 3]; //* sq, rect, Parellelogram and Triangle

    _this.shuffle(_this.decideThePair);

    _this.mainShapeval = _this.decideTheMainShape[0];
    _this.smallerShapeval = _this.decideThePair[0];

    {
      _this.pL = Math.floor(Math.random() * (_this.radius - 2) + 2);
      while (_this.pL % 2 != 0 && _this.decideThePair[0] == 3)
        _this.pL = Math.floor(Math.random() * (_this.radius - 2) + 2);
      console.log(_this.pL, "_this.pL  --- ");

      _this.maxPB = Math.floor(_this.radius) - 2;

      _this.pB = Math.floor(Math.random() * _this.maxPB + 1);
      console.log(_this.pB, "_this.pB -- ");

      _this.side1 = _this.pL;
      _this.side2 = _this.pB;

      if (_this.smallerShapeval == 0 && _this.pL != _this.pB)
        _this.smallerShapeval = 1;
      if (_this.smallerShapeval == 3) _this.decideTriangle();

      if (_this.smallerShapeval <= 1 && _this.pL == _this.pB)
        _this.smallerShapeval = 0;

      // _this.radius = 3;

      _this.findScaling(
        _this.side1 >= _this.side2 ? _this.side1 : _this.side2,
        _this.side1 < _this.side2 ? _this.side1 : _this.side2,
        _this.pL
      );
    }
  },
  decideTriangle(pl = _this.pL, pb = _this.pB) {
    {
      // if (_this.mainShapeval != 2)
      //     _this.decideTr = [0, 1, 2];//* eq scalene or iso
      // else
      _this.decideTr = [0, 2]; //* eq scalene or iso
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
    _this.mainshape = "circlenew";
    _this.sqx = (2 * _this.radius) / 7.1;
    _this.sqy = (2 * _this.radius) / 6.2;

    if (_this.smallerShapeval <= 1) {
      _this.PairShape = "rect2";
      _this.scaleX = _this.pL / 5.2;
      _this.scaleY = _this.pB / 3.4;
    } else if (_this.smallerShapeval == 2) {
      _this.PairShape = "parl2";
      _this.scaleX = _this.pL / 4;
      _this.scaleY = _this.pB / 2.6;
    } else {
      if (_this.selectedTr == 0) {
        _this.PairShape = "eqTr";
        _this.scaleX = _this.pL / 8.12;
        _this.scaleY = _this.pB / 7;
      }
      if (_this.selectedTr == 2) {
        _this.PairShape = "isoTr";
        _this.scaleX = _this.pL / 6.13;
        _this.scaleY = _this.pB / 7.4;
      }
    }
  },
  createMaskedObject: function () {
    _this.maskGp = [];

    _this.graphics = _this.add.graphics();
    _this.graphics2 = _this.add.graphics();
    _this.graphicscpy = _this.add.graphics();

    const thickness = 4;
    const color = 0x00ff00;
    const alpha = 1;
    xvar1 = 0;
    xvar2 = 0;
    yvar1 = 0;
    yvar2 = 0;

    // for main shape

    if (_this.mainShapeval == 0) {
      if (_this.radius == 2) {
        if (_this.box_x[0] == 450) {
          pos = 145; //145
          yvar1 = -29.5; //-29.5
          xvar1 = 6.5; //2.5
        } else {
          pos = 145;
          yvar1 = -29.5;
          xvar1 = 2.5;
        }
      }
      if (_this.radius == 3) {
        pos = 215;
        yvar1 = -31.5;
      }
      if (_this.radius == 4) {
        pos = 285;
        yvar1 = -32;
      }
    }

    _this.graphics.lineStyle(thickness, color, alpha);
    _this.graphics.drawCircle(
      _this.biggerShape.x + _this.biggerShape.width / 2 + xvar1,
      _this.biggerShape.y + _this.biggerShape.height / 2 + yvar1,
      pos
    );
    _this.biggerShape.mask = _this.graphics;
    if (_this.radius > 2) _this.graphics.scale.setTo(1, 1.14);
    if (_this.radius == 2) {
      _this.graphics.scale.setTo(0.99, 1.13);
    }

    _this.bx1 = xvar1;
    _this.bx2 = xvar2;
    _this.by1 = yvar1;
    _this.by2 = yvar2;
    xvar1 = 0;
    xvar2 = 0;
    yvar1 = 0;
    yvar2 = 0;

    // for rectangles and squares
    if (_this.smallerShapeval == 0 || _this.smallerShapeval == 1) {
      _this.side1 = _this.pL;
      _this.side2 = _this.pB;

      if (_this.side1 == 2 && _this.side2 == 1) {
        xvar1 = 0.7;
        yvar1 = 1.5;
        xvar2 = 0.4;
      }
      if (_this.side1 == 2 && _this.side2 == 1) {
        yvar2 = 1;
      }
      if (_this.side1 == 3 && _this.side2 == 1) {
        xvar1 = 1.5;
        yvar1 = 3;
      }
      if (_this.side1 == 2 && _this.side2 == 4) {
        xvar1 = 2;
        yvar1 = 4;
      }
      if (_this.side1 == 2 && _this.side2 == 5) {
        xvar1 = 3;
        yvar1 = 6;
      }

      if (_this.side1 == 3 && _this.side2 == 2) {
        yvar1 = 3;
        xvar1 = 1.5;
        yvar2 = 1;
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

      // if (_this.mainShapeval <= 1) {

      //     _this.graphics.lineStyle(thickness, color, alpha);
      //     _this.graphics.drawRect(_this.biggerShape.x + xvar1, _this.biggerShape.y + xvar2, _this.biggerShape.width - yvar1, _this.biggerShape.height - yvar2);
      //     _this.biggerShape.mask = _this.graphics

      //     _this.bx1 = xvar1
      //     _this.bx2 = xvar2
      //     _this.by1 = yvar1
      //     _this.by2 = yvar2
      // }

      // else
      {
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
    if (_this.smallerShapeval == 2) {
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

      if (_this.pL == 2 && _this.pB == 2) {
        xvar1 = 2;
        xvar2 = 1;
        yvar1 = 2;
        yvar2 = 2;
      }
      if (_this.pL == 2 && _this.pB == 1) {
        xvar1 = 1.5;
        xvar2 = 0.5;
        yvar1 = 2.5;
        yvar2 = 0.5;
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
        yvar1 = 4;
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

      _this.graphics.lineStyle(thickness, color, alpha);

      {
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
    if (_this.smallerShapeval == 3) {
      _this.graphics2.lineStyle(thickness, color, alpha);
      if (_this.smallerShapeval == 3) {
        _this.pB2 = _this.pB;
        _this.pL2 = _this.pL;
      }

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
  },

  bigShapeClicked: function () {
    console.log("_this.Ask_Question1");
    _this.Ask_Question1.pause();
    _this.clickSound.pause();
    _this.clickSound.play();
    _this.biggerShape.inputEnabled = false;
    _this.clearArray.forEach((element) => {
      element.visible = false;
    });
    // if (_this.Question_flag != 2 && _this.Question_flag != 5)
    {
      if (_this.perimeterVar == 1) {
        _this.stopAllSounds();
        console.log("_this.Ask_Question2");
        _this.Ask_Question2.play();
        _this.Question_flag = 2;
      } else {
        _this.stopAllSounds();
        console.log("_this.Ask_Question5");
        _this.Ask_Question5.play();
        _this.Question_flag = 5;
      }
    }

    _this.mainclick = true;
    _this.BoxClicked1 = 1;

    _this.bigBox = _this.add.sprite(40, 70, "Box2");
    _this.biggerShape.visible = true;
    _this.biggerShape.bringToTop();

    if (_this.box_x[0] == 450) {
      // _this.biggerShape.x -= 350 + _this.Box1.width / 2 - _this.biggerShape.width / 2;//+= 40
      if (_this.radius == 2) {
        _this.biggerShape.x = 208.5;
        _this.graphics.x = -367; //340 + _this.Box1.width / 2 - _this.biggerShape.width / 2;
        // _this.graphics.x = 40-367;
      }
      if (_this.radius == 3) {
        _this.biggerShape.x = 172;
        _this.graphics.x = -367; //340 + _this.Box1.width / 2 - _this.biggerShape.width / 2;
        // _this.graphics.x = 40-367;
      }
      if (_this.radius == 4) {
        _this.biggerShape.x = 135.5;
        _this.graphics.x = -367; //340 + _this.Box1.width / 2 - _this.biggerShape.width / 2;
        // _this.graphics.x = 40-367;
      }
    } else {
      _this.biggerShape.x += 40;
      _this.graphics.x += 40;
    }

    _this.showDimensions();
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

    _this.fmBox1 = _this.add.image(650, 130, "textbox13");

    _this.fmBox2 = _this.add.image(650, 230, "textbox13");

    _this.fmBox3 = _this.add.image(650, 330, "textbox13");
    _this.fmBox1.scale.setTo(1.15, 1);
    _this.fmBox2.scale.setTo(1.15, 1);
    _this.fmBox3.scale.setTo(1.15, 1);

    posOfX =
      (_this.biggerShape.x + _this.biggerShape.width + 820) / 2 -
      _this.fmBox1.width / 2;
    _this.fmBox1.x = posOfX;
    _this.fmBox2.x = posOfX;
    _this.fmBox3.x = posOfX;

    if (_this.perimeterVar == 1) {
      _this.fmstring = "P" + " " + "=" + " " + "2" + " " + _this.pi + " " + "r";
      if (_this.mainShapeval == 0) {
        _this.fmstring1 =
          "P" + " " + "=" + " " + 2 + " " + _this.pi + " " + "r" + _this.power; //ans string
        _this.fmstring2 = "P" + " " + "= " + _this.pi + " " + "r";
      }
    } else {
      _this.fmstring1 =
        "A" + " " + "=" + " " + "2" + " " + _this.pi + " " + "r";

      if (_this.mainShapeval == 0) {
        _this.fmstring2 =
          "A" + " " + "=" + " " + 2 + " " + _this.pi + " " + "r" + _this.power; //ans string
        _this.fmstring =
          "A" + " " + "=" + " " + _this.pi + " " + "r" + _this.power; //ans string
      }
    }

    _this.PershapeClicked();
  },
  pairShapeClicked: function () {
    console.log("_this.Ask_Question1");
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
        console.log("_this.Ask_Question2");
        _this.Ask_Question2.play();
        _this.Question_flag = 2;
      } else {
        _this.stopAllSounds();
        console.log("_this.Ask_Question5");
        _this.Ask_Question5.play();
        _this.Question_flag = 5;
      }
    }

    _this.BoxClicked2 = 2;
    _this.pairclick = true;

    _this.bigBox = _this.add.sprite(40, 70, "Box2");

    _this.pairImage = _this.add.sprite(115, 170, _this.PairShape);
    _this.pairImage.scale.setTo(_this.scaleX, _this.scaleY);
    if (_this.box_x[0] == 450)
      x = 40 + _this.Box1.width / 2 - _this.smallerShape.width / 2;
    //40 + _this.Box1.width / 2 - _this.smallerShape.width / 2//_this.Box1.x + _this.Box1.width / 2 - _this.smallerShape.width / 2
    else x = _this.Box1.x + _this.Box1.width / 2 - _this.smallerShape.width / 2;
    y = _this.Box1.y + _this.Box1.height / 2 - _this.smallerShape.height / 2;
    _this.pairImage.x = x;
    _this.pairImage.y = y;
    _this.createMakedPairedObject();

    if (_this.perimeterVar == 1 && _this.smallerShapeval == 3)
      _this.showPerimeterDimensions();
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

    // need to calculate a correct position of these boxes x pos
    posOfX =
      (_this.pairImage.x + _this.pairImage.width + 820) / 2 -
      _this.fmBox1.width / 2 +
      20;
    _this.fmBox1.x = posOfX;
    _this.fmBox2.x = posOfX;
    _this.fmBox3.x = posOfX;

    if (_this.perimeterVar == 1) {
      if (_this.smallerShapeval == 2) {
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
      } else if (_this.smallerShapeval == 3) {
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
        // if (_this.smallerShapeval != 4) {
        //     _this.fmBox2.scale.setTo(1.2, 1);

        //     _this.fmBox1.scale.setTo(1.2, 1);
        //     _this.fmBox3.scale.setTo(1.2, 1);
        // }
        _this.fmstring1 = "P" + " " + "=" + " " + "L" + " " + "+" + " " + "B";
        if (_this.smallerShapeval == 0) {
          _this.fmstring = "P" + " " + "=" + " " + 4 + " " + "x" + " " + "S"; //ans string
          _this.fmstring2 = "P" + " " + "=" + " " + 4 + " " + "+" + " " + "S";
        } else if (_this.smallerShapeval == 1) {
          _this.fmstring = "P" + " " + "=" + " " + "2 ( L" + " + " + "B )";
          _this.fmstring2 =
            "P" + " " + "=" + " " + 2 + " X " + "L" + " + " + "B";
        }
      }
    } else {
      if (_this.smallerShapeval == 2) {
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
      } else if (_this.smallerShapeval == 3) {
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
        {
          _this.fmBox2.scale.setTo(1.2, 1);
          _this.fmBox1.scale.setTo(1.2, 1);
          _this.fmBox3.scale.setTo(1.2, 1);
        }
        _this.fmstring1 = "A" + " " + "=" + " " + 4 + " " + "X" + " " + "S";
        if (_this.smallerShapeval == 0) {
          _this.fmstring = "A" + " " + "=" + " " + "S" + " " + "X" + " " + "S"; //ans string
          _this.fmstring2 = "A" + " " + "=" + " " + 2 + " " + "X" + " " + "S";
        } else if (_this.smallerShapeval == 1) {
          _this.fmstring = "A" + " " + "=" + " " + "L" + " X " + "B";
          _this.fmstring2 = "A" + " " + "=" + " " + "L" + " " + "+" + " " + "B";
        }
      }
    }

    _this.PershapeClicked("true");
  },
  PershapeClicked: function (small) {
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

    _this.frm1.x = 667 + (_this.fmBox1.x - 640); //change of this
    _this.frm2.x = 667 + (_this.fmBox1.x - 640); //change of this
    _this.frm3.x = 667 + (_this.fmBox1.x - 640); //change of this

    if (small) {
      _this.frm1.x -= 5;
      _this.frm2.x -= 5;
      _this.frm3.x -= 5;
    }
  },
  showDimensions: function () {
    if (_this.BoxClicked1 == 1) {
      _this.whiteArr = _this.add.sprite(
        _this.biggerShape.x,
        _this.biggerShape.y,
        "wtArrow"
      );
      _this.whiteArr.x += _this.biggerShape.width / 2;
      _this.whiteArr.y +=
        _this.biggerShape.height / 2 - _this.whiteArr.height / 2;
      _this.whiteArr.scale.setTo(_this.radius / 3.6, 1);

      _this.llineText = _this.add.text(
        _this.whiteArr.x + _this.whiteArr.width / 2 - 20,
        _this.whiteArr.y + 20,
        `${_this.radius} m`
      );
      _this.applyingStyle(_this.llineText);
      _this.llineText.fill = "#FFFFFF";
    } else {
      if (_this.pB == 1) {
        _this.hLine = _this.add.sprite(
          _this.pairImage.x + _this.pairImage.width,
          _this.pairImage.y - 2,
          "linear3"
        );
        _this.hLine.scale.setTo(0.4, _this.pB / 2.2);
      } else {
        _this.hLine = _this.add.sprite(
          _this.pairImage.x + _this.pairImage.width + 4,
          _this.pairImage.y - 2,
          "linear2"
        );
        _this.hLine.scale.setTo(0.4, _this.pB / 3);
      }

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
  makeframes2: function () {
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();
    _this.fmBox21.name = "";
    _this.fmBox11.name = "";
    if (_this.fmBox21.frame == 1) _this.fmBox21.frame = 0;
    if (_this.fmBox11.frame == 1) _this.fmBox11.frame = 0;
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

      if (_this.BoxClicked1 == 1)
        _this.tweenTop.to({ x: 650, y: 100 }, 600, "Linear", true, 0);
      else {
        _this.tweenTop.to({ x: 440, y: 100 }, 600, "Linear", true, 0);
      }

      _this.tweenTop.start();

      _this.tweenTopFRM = _this.add.tween(formla);

      if (_this.BoxClicked1 == 1)
        _this.tweenTopFRM.to({ x: 667, y: 125 }, 600, "Linear", true, 0);
      else _this.tweenTopFRM.to({ x: 460, y: 125 }, 600, "Linear", true, 0);

      _this.tweenTopFRM.start();

      _this.tweenTopFRM.onComplete.add(function () {
        _this.stopAllSounds();

        if (_this.BoxClicked1 == 1) {
          box_name.frame = 2;
          _this.piVal = _this.add.image(500, 100, "textbox13");
          _this.pivalstr = _this.add.text(525, 125, _this.pi + " = 3.14");
          _this.applyingStyle(_this.pivalstr);
          _this.pivalstr.fill = "#FFFFFF";
          formla.fill = "#FFFFFF";

          _this.piVal.frame = 2;

          _this.AnswerBox = _this.add.image(620 - 90 - 30, 182, "textBox8");
          _this.perimeter = _this.add.text(
            640 - 90 - 30,
            200 + 8,
            "P" + " " + "= 2 X 3.14 X"
          );
          _this.applyingStyle(_this.perimeter);
          _this.perimeterM = _this.add.text(800 - 30, 200 + 8, "m");
          _this.applyingStyle(_this.perimeterM);
          _this.circleRad = true;
          _this.stopAllSounds();
          console.log("_this.Ask_Question11");
          _this.Ask_Question11.play();
          _this.Question_flag = 11;
        } else {
          _this.AnswerBox = _this.add.image(620, 100, "answerBox");
          _this.perimeter = _this.add.text(640, 125, "P" + " " + "=");
          _this.applyingStyle(_this.perimeter);
          _this.perimeterM = _this.add.text(770, 125, "m");
          _this.applyingStyle(_this.perimeterM);

          _this.stopAllSounds();
          _this.time.events.add(400, () => {
            console.log("_this.Ask_Question14");
            _this.Ask_Question14.play();
          });
          _this.Question_flag = 14;
        }

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
      if (_this.BoxClicked1 == 1)
        _this.tweenTop.to({ x: 650, y: 100 }, 600, "Linear", true, 0);
      else {
        _this.tweenTop.to({ x: 440, y: 100 }, 600, "Linear", true, 0);
      }
      _this.tweenTop.start();

      _this.tweenTopFRM = _this.add.tween(formla);
      if (_this.BoxClicked1 == 1)
        _this.tweenTopFRM.to({ x: 667, y: 125 }, 600, "Linear", true, 0);
      else _this.tweenTopFRM.to({ x: 460, y: 125 }, 600, "Linear", true, 0);

      _this.tweenTopFRM.start();

      _this.tweenTopFRM.onComplete.add(function () {
        //answerBox
        if (_this.BoxClicked1 == 1) {
          box_name.frame = 2;
          _this.piVal = _this.add.image(500, 100, "textbox13");
          _this.pivalstr = _this.add.text(527, 125, _this.pi + " = 3.14");
          _this.applyingStyle(_this.pivalstr);
          _this.pivalstr.fill = "#FFFFFF";
          _this.piVal.frame = 2;
          formla.fill = "#FFFFFF";
          formla.x += 10;

          _this.AnswerBox = _this.add.image(620 - 120, 175 + 8, "textBox9");
          _this.perimeter = _this.add.text(
            640 - 120,
            200 + 8,
            "A" + " = 3.14 X "
          );
          _this.applyingStyle(_this.perimeter);
          _this.boxPower = _this.add.text(725, 180 + 8, _this.power);
          _this.applyingStyle(_this.boxPower);
          _this.perimeterM = _this.add.text(730, 200 + 8, " m" + _this.power);
          _this.applyingStyle(_this.perimeterM);
          _this.circleRad = true;
          _this.stopAllSounds();
          console.log("_this.Ask_Question11");
          _this.Ask_Question11.play();
          _this.Question_flag = 11;
        } else {
          _this.AnswerBox = _this.add.image(620, 100, "answerBox");
          _this.perimeter = _this.add.text(640, 125, "A" + " " + "=");
          _this.applyingStyle(_this.perimeter);
          _this.perimeterM = _this.add.text(770, 125, " m" + _this.power);
          _this.applyingStyle(_this.perimeterM);

          _this.stopAllSounds();
          _this.time.events.add(400, () => {
            console.log("_this.Ask_Question15");
            _this.Ask_Question15.play();
          });
          _this.Question_flag = 15;
        }

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

    if (_this.box_x[0] == 450) {
      // _this.biggerShape.x = 40 + _this.Box1.width / 2 - _this.biggerShape.width / 2;
      // _this.graphics.x -= 355 + _this.Box1.width / 2 - _this.biggerShape.width / 2;
      // _this.graphics.x = 0;
      if (_this.radius == 2) {
        _this.biggerShape.x = 202.5; //204;//208.5;
        _this.graphics.x = -373; //-375.5//-367;
      }
      if (_this.radius == 3) {
        _this.biggerShape.x = 167.5; //208.5;
        _this.graphics.x = -371.5; //-367;
      }
      if (_this.radius == 4) {
        _this.biggerShape.x = 130.5; //208.5;
        _this.graphics.x = -371.5; //-367;
      }
    }

    _this.Box1.destroy();
    _this.Box2.destroy();
    _this.part3 = true;

    if (_this.radius == 3) {
      _this.bx1 = 3;
    } else if (_this.radius == 4) {
      _this.bx1 = 4;
    } else if (_this.radius == 2 && _this.box_x[0] == 450) {
      _this.bx1 = 3;
    }

    if (_this.pL2 == 2 && _this.pB2 == 2 && _this.smallerShapeval == 3) {
      _this.sx1 = 3;
    }
    if (
      _this.pL == 2 &&
      _this.pB == 2 &&
      _this.smallerShapeval == 2 &&
      _this.radius == 4
    ) {
      _this.sx1 += 3;
    }
    if (
      _this.pL == 3 &&
      _this.pB == 2 &&
      _this.smallerShapeval == 2 &&
      _this.radius == 4
    ) {
      _this.sx1 += 3;
    }
    var intialPosx = _this.smallerShape.x;
    var intialPosy = _this.smallerShape.y;

    if (_this.choice[0] == 0) {
      xvar = _this.mainShapeval == 2 ? _this.findSlantValue(_this.side1) : 0;
      yvar =
        _this.biggerShape.y -
        1 * _this.smallerShape.height +
        _this.biggerShape.height;
      _this.tweenSmall = _this.add.tween(_this.smallerShape);
      _this.tweenSmall.to(
        {
          x:
            _this.biggerShape.x +
            _this.biggerShape.width -
            _this.bx1 -
            _this.sx1,
          y:
            _this.biggerShape.y +
            _this.biggerShape.height / 2 -
            _this.smallerShape.height / 2,
        },
        600,
        "Linear",
        true,
        0
      );
      _this.smallerShape.bringToTop();

      _this.tweenSmall2 = _this.add.tween(_this.graphics2);
      _this.tweenSmall2.to(
        {
          x:
            _this.biggerShape.x +
            _this.biggerShape.width -
            intialPosx -
            _this.bx1 -
            _this.sx1,
          y:
            _this.biggerShape.y +
            _this.biggerShape.height / 2 -
            _this.smallerShape.height / 2 -
            intialPosy,
        },
        600,
        "Linear",
        true,
        0
      );
    }
    _this.tweenSmall.onComplete.add(() => {
      _this.dottedArea1 = _this.add.text(692, 200, `A = ${_this.areaAns1}`);
      _this.applyingStyleGn(_this.dottedArea1);
      _this.dottedArea1.fontSize = "20px";

      _this.dottedArea2 = _this.add.text(710, 340, `A = ${_this.areaAns2}`);
      _this.applyingStyleGn(_this.dottedArea2);
      _this.dottedArea2.fontSize = "20px";
      _this.stopAllSounds();

      if (_this.choice[0] == 0) {
        console.log("_this.Ask_Question7");
        _this.Ask_Question7.play();
        _this.Question_flag = 7;
      } else {
        console.log("_this.Ask_Question8");
        _this.Ask_Question81.play();
        _this.Question_flag = 8;
      }

      if (_this.mainShapeval == 0) {
        _this.dottedImg1 = _this.add.sprite(690, 230, "circleDoted");

        _this.graphicsnew = _this.add.graphics();
        _this.graphicsnew.lineStyle(4, "#FF0000", 1);
        _this.graphicsnew.drawCircle(
          _this.dottedImg1.x + _this.dottedImg1.width / 2,
          _this.dottedImg1.y + _this.dottedImg1.height / 2,
          85
        );
        _this.dottedImg1.mask = _this.graphicsnew;
      }

      if (_this.smallerShapeval == 2) {
        _this.dottedImg2 = _this.add.sprite(700, 370, "dotedParallogram");
        _this.dottedImg2.scale.setTo(0.8, 1);
      }
      if (_this.smallerShapeval == 3) {
        _this.dottedImg2 = _this.add.sprite(685, 370, "dotedTriangle");
        _this.dottedImg2.scale.setTo(0.8, 0.7);
      }
      if (_this.smallerShapeval == 0) {
        _this.dottedImg2 = _this.add.sprite(700, 370, "dotedSquare");
        _this.dottedImg2.scale.setTo(0.8);
      }
      if (_this.smallerShapeval == 1) {
        _this.dottedImg2 = _this.add.sprite(680, 370, "dotedRectangle");
        _this.dottedImg2.scale.setTo(0.7);
      }

      _this.AnswerBox = _this.add.image(600, 100, "textBox12new");
      _this.perimeter = _this.add.text(620, 125, "A" + " " + "=");
      _this.applyingStyle(_this.perimeter);

      _this.perimeterM = _this.add.text(790, 125, "m" + _this.power);
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
    // if (
    //   _this.BoxClicked2 == 2 ||
    //   _this.circleRad == true ||
    //   _this.part4 == true
    // )
    //   cn = 10;
    // else cn = 11;
    cn = 11;
    for (var i = 0; i < cn; i++) {
      _this.numbg = _this.numGroup.create(_this.x, 552, "Numberpad");
      _this.numbg.anchor.setTo(0.5);
      // _this.numbg.scale.setTo(0.8, 0.8);
      _this.numbg.name = i + 1;
      _this.numbg.frame = i;

      _this.numbg.inputEnabled = true;
      _this.numbg.input.useHandCursor = true;
      // if (
      //   _this.BoxClicked2 == 2 ||
      //   _this.circleRad == true ||
      //   _this.part4 == true
      // ) {
      //   _this.numbg.events.onInputDown.add(_this.numClicked, _this);
      //   _this.x += 75;
      // } else {
      //   _this.numbg.events.onInputDown.add(_this.numClicked2, _this); //ans string one
      //   _this.x += 65;
      // }

      _this.numbg.events.onInputDown.add(_this.numClicked2, _this); //ans string one
      _this.x += 65;
    }
    _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, "Numberpad");
    _this.wrongbtn.frame = 11;
    _this.wrongbtn.anchor.setTo(0.5);
    // _this.wrongbtn.scale.setTo(0.8, 0.8);
    _this.wrongbtn.name = "wrongbtn";
    _this.wrongbtn.inputEnabled = true;
    _this.wrongbtn.input.useHandCursor = true;
    _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

    _this.rightbtn = _this.numGroup.create(_this.x + 72, 552, "Numberpad");
    _this.rightbtn.frame = 12;
    _this.rightbtn.anchor.setTo(0.5);
    // _this.rightbtn.scale.setTo(0.8, 0.8);
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
  // addNumberPad: function () {
  //   _this.Choice = 1;
  //   _this.objGroup = _this.add.group();
  //   _this.numGroup = _this.add.group();
  //   var bottomnumpadbg = _this.numGroup.create(0, 515, "numpadbg");
  //   bottomnumpadbg.scale.setTo(1, 1);

  //   bottomnumpadbg.name = "numpadbg";

  //   _this.x = 70;
  //   // set the number pad invisible initially. only after tweening it is made visible
  //   _this.numGroup.visible = false;
  //   if (
  //     _this.BoxClicked2 == 2 ||
  //     _this.circleRad == true ||
  //     _this.part4 == true
  //   )
  //     cn = 10;
  //   else cn = 11;
  //   for (var i = 0; i < cn; i++) {
  //     _this.numbg = _this.numGroup.create(_this.x, 552, "Numberpad");
  //     _this.numbg.anchor.setTo(0.5);
  //     // _this.numbg.scale.setTo(0.8, 0.8);
  //     _this.numbg.name = i + 1;
  //     _this.numbg.frame = i;

  //     _this.numbg.inputEnabled = true;
  //     _this.numbg.input.useHandCursor = true;
  //     if (
  //       _this.BoxClicked2 == 2 ||
  //       _this.circleRad == true ||
  //       _this.part4 == true
  //     ) {
  //       _this.numbg.events.onInputDown.add(_this.numClicked, _this);
  //       _this.x += 75;
  //     } else {
  //       _this.numbg.events.onInputDown.add(_this.numClicked2, _this); //ans string one
  //       _this.x += 65;
  //     }
  //   }
  //   _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, "Numberpad");
  //   _this.wrongbtn.frame = 11;
  //   _this.wrongbtn.anchor.setTo(0.5);
  //   // _this.wrongbtn.scale.setTo(0.8, 0.8);
  //   _this.wrongbtn.name = "wrongbtn";
  //   _this.wrongbtn.inputEnabled = true;
  //   _this.wrongbtn.input.useHandCursor = true;
  //   _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

  //   _this.rightbtn = _this.numGroup.create(_this.x + 72, 552, "Numberpad");
  //   _this.rightbtn.frame = 12;
  //   _this.rightbtn.anchor.setTo(0.5);
  //   // _this.rightbtn.scale.setTo(0.8, 0.8);
  //   _this.rightbtn.name = "rightbtn";
  //   _this.rightbtn.inputEnabled = true;
  //   _this.rightbtn.input.useHandCursor = true;
  //   _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked1, _this);

  //   _this.enterTxt = _this.add.text(-100, 8, "");
  //   _this.enterTxt.anchor.setTo(0.5);
  //   _this.enterTxt.align = "center";
  //   _this.enterTxt.font = "Akzidenz-Grotesk BQ";
  //   _this.enterTxt.fontSize = "30px";
  //   _this.enterTxt.fontWeight = "normal";
  //   _this.enterTxt.fill = "#65B4C3";

  //   _this.numpadTween = _this.add.tween(_this.numGroup);
  //   //_this.AnswerBox.visible=true;
  //   //tween in the number pad after a second.
  //   _this.tweenNumPad();
  // },
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

    if (_this.circleRad == true && _this.perimeterVar == 1)
      _this.enterTxt.x += 125;
    else if (_this.circleRad == true && _this.perimeterVar != 1)
      _this.enterTxt.x += 80;

    if (_this.part4 == true) {
      _this.enterTxt.x += 20;
    }
    _this.enterTxt.align = "right";
    _this.enterTxt.font = "Akzidenz-Grotesk BQ";
    _this.enterTxt.fill = "#65B4C3";
    _this.enterTxt.fontWeight = "normal";
    _this.AnswerBox.addChild(_this.enterTxt);
    _this.enterTxt.visible = true;
    _this.AnswerBox.name = Number("" + var_selectedAns1 + var_selectedAns2);
  },

  numClicked2: function (target) {
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();

    if (target.name == 11) var_selectedAns1 = ".";
    else if (target.name == 10) var_selectedAns1 = 0;
    else var_selectedAns1 = target.name;

    if (_this.circleRad == true || _this.BoxClicked2 == 2) {
      max = 3
    }
    else if (_this.table1 == true || _this.table2 == true) {
      max = 6;
      _this.box_1.removeChild(_this.enterTxt);
    } else {
      max = 5;
      _this.AnswerBox.removeChild(_this.enterTxt);
    }
    _this.enterTxt.visible = false;

    if (!_this.ansString || _this.ansString.length < max) {
      if (!_this.ansString) _this.ansString = "";
      _this.ansString += var_selectedAns1;
    }

    if (_this.ansString.length == 1)
      _this.enterTxt = _this.add.text(95, 20, "" + _this.ansString, {
        fontSize: "30px",
      });
    else if (_this.ansString.length == 2)
      _this.enterTxt = _this.add.text(90, 20, "" + _this.ansString, {
        fontSize: "30px",
      });
    else if (_this.ansString.length == 3)
      _this.enterTxt = _this.add.text(85, 20, "" + _this.ansString, {
        fontSize: "30px",
      });
    else if (_this.ansString.length == 4)
      _this.enterTxt = _this.add.text(80, 20, "" + _this.ansString, {
        fontSize: "30px",
      });
    else if (_this.ansString.length == 5)
      _this.enterTxt = _this.add.text(75, 20, "" + _this.ansString, {
        fontSize: "30px",
      });
    else if (_this.ansString.length == 6)
      _this.enterTxt = _this.add.text(70, 20, "" + _this.ansString, {
        fontSize: "30px",
      });

    _this.enterTxt.x += 170;
    _this.enterTxt.align = "right";
    _this.enterTxt.font = "Akzidenz-Grotesk BQ";
    _this.enterTxt.fill = "#65B4C3";
    _this.enterTxt.fontWeight = "normal";

    if (_this.circleRad == true || _this.part4 == true) {
      _this.enterTxt.x -= 46
    }
    if (_this.circleRad == true && _this.area == 1) {
      _this.enterTxt.x -= 46
    }
    if (_this.part4 == true) {
      _this.enterTxt.x -= 110
    }
    if (_this.BoxClicked2 == 2) {
      _this.enterTxt.x -= (180 - 12)
    }
    if (_this.part3 == true || _this.part31 == true || _this.part5 == true)
      _this.enterTxt.x -= 155;


    if (!_this.ansString.includes(".") && (_this.circleRad == true || _this.BoxClicked2 == 2) && _this.ansString.length > 2) {
      _this.enterTxt.x -= 4
    }
    else if (!_this.ansString.includes(".") && (_this.part4 == true) && _this.ansString.length > 2) {
      _this.enterTxt.x -= 6
    } else if (!_this.ansString.includes(".") && _this.ansString.length > 4) {
      _this.enterTxt.x -= 6
    }

    if (_this.table1 == true || _this.table2 == true) {
      _this.enterTxt.y = 94;
      _this.enterTxt.x -= 10;
      if (_this.table2 == true) _this.enterTxt.y = 177;

      _this.box_1.addChild(_this.enterTxt);
      _this.enterTxt.visible = true;
      _this.box_1.name = Number("" + _this.ansString);
    } else {
      _this.AnswerBox.addChild(_this.enterTxt);
      _this.enterTxt.visible = true;
      _this.AnswerBox.name = Number("" + _this.ansString);
    }
  },
  // numClicked2: function (target) {
  //   _this.clickSound.currentTime = 0;
  //   _this.clickSound.play();

  //   if (target.name == 11) var_selectedAns1 = ".";
  //   else if (target.name == 10) var_selectedAns1 = 0;
  //   else var_selectedAns1 = target.name;

  //   if (_this.table1 == true || _this.table2 == true) {
  //     max = 6;
  //     _this.box_1.removeChild(_this.enterTxt);
  //   } else {
  //     max = 5;
  //     _this.AnswerBox.removeChild(_this.enterTxt);
  //   }
  //   _this.enterTxt.visible = false;

  //   if (!_this.ansString || _this.ansString.length < max) {
  //     if (!_this.ansString) _this.ansString = "";
  //     _this.ansString += var_selectedAns1;
  //   }

  //   if (_this.ansString.length == 1)
  //     _this.enterTxt = _this.add.text(95, 20, "" + _this.ansString, {
  //       fontSize: "30px",
  //     });
  //   else if (_this.ansString.length == 2)
  //     _this.enterTxt = _this.add.text(90, 20, "" + _this.ansString, {
  //       fontSize: "30px",
  //     });
  //   else if (_this.ansString.length == 3)
  //     _this.enterTxt = _this.add.text(85, 20, "" + _this.ansString, {
  //       fontSize: "30px",
  //     });
  //   else if (_this.ansString.length == 4)
  //     _this.enterTxt = _this.add.text(80, 20, "" + _this.ansString, {
  //       fontSize: "30px",
  //     });
  //   else if (_this.ansString.length == 5)
  //     _this.enterTxt = _this.add.text(75, 20, "" + _this.ansString, {
  //       fontSize: "30px",
  //     });
  //   else if (_this.ansString.length == 6)
  //     _this.enterTxt = _this.add.text(70, 20, "" + _this.ansString, {
  //       fontSize: "30px",
  //     });

  //   _this.enterTxt.x += 170;
  //   _this.enterTxt.align = "right";
  //   _this.enterTxt.font = "Akzidenz-Grotesk BQ";
  //   _this.enterTxt.fill = "#65B4C3";
  //   _this.enterTxt.fontWeight = "normal";

  //   if (_this.part3 == true || _this.part31 == true || _this.part5 == true)
  //     _this.enterTxt.x -= 155;

  //   if (_this.table1 == true || _this.table2 == true) {
  //     _this.enterTxt.y = 94;
  //     _this.enterTxt.x -= 10;
  //     if (_this.table2 == true) _this.enterTxt.y = 177;

  //     _this.box_1.addChild(_this.enterTxt);
  //     _this.enterTxt.visible = true;
  //     _this.box_1.name = Number("" + _this.ansString);
  //   } else {
  //     _this.AnswerBox.addChild(_this.enterTxt);
  //     _this.enterTxt.visible = true;
  //     _this.AnswerBox.name = Number("" + _this.ansString);
  //   }
  // },
  tweenNumPad: function () {
    _this.numGroup.visible = true;
    _this.numpadTween.to({ x: 0, y: -43 }, 1000, "Linear", true, 0);
  },
  wrongbtnClicked: function (target) {
    _this.clickSound.play();
    _this.eraseScreen();
  },
  eraseScreen: function (target) {
    _this.selectedAns1 = "";
    _this.selectedAns2 = "";
    _this.ansString = "";
    if (_this.table1 == true || _this.table2 == true)
      _this.box_1.removeChild(_this.enterTxt);
    else _this.AnswerBox.removeChild(_this.enterTxt);

    _this.enterTxt.destroy();
    _this.enterTxt;
    _this.enterTxt.text = "";
  },
  findPerimetrValue() {
    if (_this.perimeterVar == 1) {
      if (_this.smallerShapeval == 3)
        return _this.trside1 + _this.trside2 + _this.trside3;
      if (_this.smallerShapeval < 3) return 2 * (_this.pL + _this.pB);
    } else {
      if (_this.smallerShapeval == 3) return (_this.pL * _this.pB) / 2;
      if (_this.smallerShapeval < 3) return _this.pL * _this.pB;
    }
  },
  geneatePerimeterAreaOptions: function () {
    _this.fmBox11 = _this.add.image(644, 264, "textBox2");
    _this.fmBox11.scale.setTo(1.15, 1);

    _this.fmBox21 = _this.add.image(650 - 6, 348, "textBox2");
    _this.fmBox21.scale.setTo(1.15, 1);

    if (_this.perimeterVar == 1) {
      if (_this.BoxClicked1 == true) {
        ans = (2 * 3.14 * _this.radius).toFixed(2);
        _this.fmstring1 = "P" + " " + "= " + (ans * 10).toFixed(2);
        _this.fmstring2 = "P" + " " + "= " + (ans / 10).toFixed(2);
        _this.fmstring = "P" + " " + "= " + ans;
      }
    } else {
      if (_this.BoxClicked1 == true) {
        ans = (3.14 * _this.radius * _this.radius).toFixed(2);
        // _this.fmstring1 = 'P' + ' ' + '= ' + (ans * 10).toFixed(2)
        // _this.fmstring2 = 'P' + ' ' + '= ' + (ans / 10).toFixed(2)
        // _this.fmstring = 'P' + ' ' + '= ' + ans
        _this.fmstring1 = "A" + " " + "= " + (ans * 10).toFixed(2);
        _this.fmstring2 = "A" + " " + "= " + (ans / 10).toFixed(2);
        _this.fmstring = "A" + " " + "= " + ans;
      }
    }

    ob = [_this.fmstring2, _this.fmstring1];
    ob = _this.shuffle(ob);
    _this.obj = [_this.fmstring, ob[0]];
    _this.shuffle(_this.obj);

    _this.option1Val = _this.obj[0];
    _this.option2Val = _this.obj[1];

    _this.frm11 = _this.add.text(672 - 6, 285 + 4, _this.option1Val);
    _this.applyingStyle(_this.frm11);
    _this.frm11.name = _this.option1Val;

    _this.frm21 = _this.add.text(672 - 6, 365 + 8, _this.option2Val);
    _this.applyingStyle(_this.frm21);
    _this.frm21.name = _this.option2Val;

    _this.fmBox11.inputEnabled = true;
    _this.fmBox11.input.useHandCursor = true;
    _this.fmBox11.events.onInputDown.add(function () {
      _this.makeframes2();
      _this.fmBox11.frame = 1;
      _this.fmBox11.name = _this.frm11.name;
      _this.ansString = _this.frm11.name;
    });

    _this.fmBox21.inputEnabled = true;
    _this.fmBox21.input.useHandCursor = true;
    _this.fmBox21.events.onInputDown.add(function () {
      _this.makeframes2();
      _this.fmBox21.frame = 1;
      _this.fmBox21.name = _this.frm21.name;
      _this.ansString = _this.frm21.name;
    });

    _this.tick = _this.add.sprite(880, 405, "TickBtn");
    _this.tick.frame = 1;
    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(_this.rightbtnClicked1, _this);
  },
  rightbtnClicked1: function (target) {
    console.log("rightbtnClicked1");
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();

    if (_this.circleRad == true) {
      console.log("rightbtnClicked1..");
      if (
        Number("" + _this.ansString) == _this.radius
      ) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.circleRad = false;
        _this.AnswerBox.destroy();
        _this.eraseScreen();
        _this.perimeterM.destroy();
        _this.perimeter.destroy();
        _this.numGroup.destroy();

        if (_this.perimeterVar == 1) {
          _this.stopAllSounds();
          _this.Question_flag = 12;
          _this.time.events.add(500, () => {
            console.log("_this.Ask_Question12");
            _this.Ask_Question12.play();
          });
          _this.AnswerBox = _this.add.image(532, 175 + 8, "redBox");
          _this.perimeter = _this.add.text(
            562,
            197 + 8,
            "P" + " " + "= 2 X 3.14 X " + _this.radius + " = "
          );
          _this.applyingStyle(_this.perimeter);
          _this.perimeter.fill = "#FFFFFF";
          _this.AnswerBox.scale.setTo(0.45);
          _this.geneatePerimeterAreaOptions();
        } else {
          _this.stopAllSounds();
          _this.Question_flag = 13;
          _this.time.events.add(500, () => {
            console.log("_this.Ask_Question13");
            _this.Ask_Question13.play();
          });

          _this.AnswerBox = _this.add.image(532, 175 + 8, "redBox");
          _this.perimeter = _this.add.text(
            562,
            197 + 8,
            "A" + " = 3.14 X " + _this.radius * _this.radius + " = "
          );
          _this.applyingStyle(_this.perimeter);
          _this.perimeter.fill = "#FFFFFF";
          _this.AnswerBox.scale.setTo(0.45);
          _this.geneatePerimeterAreaOptions();
        }
      } else {
        _this.wrongans.play();
        _this.eraseScreen();
      }
    } else if (_this.perimeterVar == 1) {
      if (_this.BoxClicked1 == 1) {
        // if (Number('' + _this.ansString) == (2 * 3.14 * _this.radius).toFixed(2)) {
        if (_this.ansString == _this.fmstring) {
          _this.Box1.inputEnabled = false;
          _this.counterCelebrationSound.currentTime = 0;
          _this.counterCelebrationSound.play();
          _this.BoxClicked1 = 0;
          _this.biggerShape.inputEnabled = false;
          if (_this.mainShapeval != 2) {
            _this.biggerShape.x -= 40;
            _this.graphics.x -= 40;
          }

          _this.frm11.destroy();
          _this.frm21.destroy();
          _this.fmBox11.destroy();
          _this.fmBox21.destroy();
          _this.tick.destroy();

          _this.clearAreaPerOptions();

          ans = `P = ${(2 * 3.14 * _this.radius).toFixed(2)} m`;
          _this.perimterText = _this.add.text(
            _this.biggerShape.x + _this.biggerShape.width / 2 - ans.length * 4,
            _this.biggerShape.y + _this.biggerShape.height / 2 - 6,
            ans
          );
          _this.applyingStyleGn(_this.perimterText);
          _this.perimterText.fontSize = "18px";

          _this.perimterText.y =
            _this.biggerShape.y + _this.biggerShape.height + 10;
          _this.perimterText.y = 427;

          _this.AnswerBox.destroy();
          _this.eraseScreen();

          if (_this.BoxClicked2 != 0) {
            _this.Question_flag = 1;
            _this.stopAllSounds();
            _this.time.events.add(600, () => {
              console.log("_this.Ask_Question1");
              _this.Ask_Question1.play();
            });
          }
        } else {
          _this.wrongans.play();
          _this.eraseScreen();
        }
      } else if (_this.BoxClicked2 == 2) {
        if (
          // Number("" + _this.selectedAns1 + _this.selectedAns2) ==
          Number("" + _this.ansString) ==

          _this.findPerimetrValue()
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
          _this.perimterText2.fontSize = "18px";

          if (_this.smallerShapeval == 3) {
            _this.perimterText2.y += 9;
          }
          if (
            _this.smallerShapeval == 3 &&
            (_this.pB2 == 2 || _this.pL2 == 2)
          ) {
            _this.perimterText2.y += 14;
          }
          _this.perimterText2.y =
            _this.smallerShape.y + _this.smallerShape.height + 10;
          _this.perimterText2.y = 427;

          _this.AnswerBox.destroy();
          _this.eraseScreen();

          if (_this.BoxClicked1 != 0) {
            _this.Question_flag = 1;
            _this.stopAllSounds();
            // _this.Ask_Question1.play();
            _this.time.events.add(600, () => {
              console.log("_this.Ask_Question1");
              _this.Ask_Question1.play();
            });
          }
        } else {
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
        _this.time.events.add(400, () => {
          console.log("_this.Ask_Question1");
          _this.Ask_Question3.play();
        });
        _this.Question_flag = 3;
        _this.BoxClicked1 = -1;
        _this.BoxClicked2 = -1;
      }
    } else if (_this.area == 1) {
      if (_this.BoxClicked1 == 1) {
        // if (Number('' + _this.ansString) == ((_this.radius * _this.radius) * 3.14).toFixed(2)) {
        if (_this.ansString == _this.fmstring) {
          _this.counterCelebrationSound.currentTime = 0;
          _this.counterCelebrationSound.play();
          _this.areaAns1 = Number(
            (_this.radius * _this.radius * 3.14).toFixed(2)
          );

          _this.pairImage.destroy();
          _this.graphicsP.destroy();

          _this.frm11.destroy();
          _this.frm21.destroy();
          _this.fmBox11.destroy();
          _this.fmBox21.destroy();
          _this.tick.destroy();
          _this.clearAreaPerOptions();

          if (_this.box_x[0] == 40) {
            if (_this.mainShapeval != 2) {
              _this.biggerShape.x -= 40;
              _this.graphics.x -= 40;
            }
          }

          _this.BoxClicked1 = 0;
          _this.biggerShape.inputEnabled = false;

          ans = `A = ${(3.14 * _this.radius * _this.radius).toFixed(2)} m${_this.power
            }`;
          _this.perimterText = _this.add.text(
            _this.biggerShape.x + _this.biggerShape.width / 2 - ans.length * 4,
            _this.biggerShape.y + _this.biggerShape.height / 2 - 6,
            ans
          );
          _this.applyingStyleGn(_this.perimterText);
          _this.perimterText.fontSize = "18px";

          _this.perimterText.y =
            _this.biggerShape.y + _this.biggerShape.height + 10;

          _this.perimterText.y = 427;

          _this.AnswerBox.destroy();
          _this.eraseScreen();

          if (_this.BoxClicked2 != 0) {
            _this.Question_flag = 1;
            _this.stopAllSounds();
            // _this.Ask_Question1.play();
            _this.time.events.add(600, () => {
              console.log("_this.Ask_Question1");
              _this.Ask_Question1.play();
            });
          }
        } else {
          _this.wrongans.play();
          _this.eraseScreen();
        }
      } else if (_this.BoxClicked2 == 2) {
        if (
          Number("" + _this.ansString) ==
          _this.findPerimetrValue()
        ) {
          _this.counterCelebrationSound.currentTime = 0;
          _this.counterCelebrationSound.play();
          _this.clearAreaPerOptions();
          _this.pairImage.destroy();
          _this.graphicsP.destroy();

          // _this.areaAns2 = Number("" + _this.selectedAns1 + _this.selectedAns2);
          _this.areaAns2 = Number("" + _this.ansString);


          ans = `A = ${_this.AnswerBox.name} m${_this.power}`;
          _this.perimterText2 = _this.add.text(
            _this.smallerShape.x +
            _this.smallerShape.width / 2 -
            ans.length * 5,
            _this.smallerShape.y + _this.smallerShape.height / 2 - 6,
            ans
          );
          _this.applyingStyleGn(_this.perimterText2);
          _this.perimterText2.fontSize = "18px";

          _this.BoxClicked2 = 0;
          _this.smallerShape.inputEnabled = false;

          if (_this.smallerShapeval == 3) {
            _this.perimterText2.y += 9;
            // _this.perimterText2.fontSize = "15px"
          }

          if (_this.smallerShapeval == 3 && _this.pB == 2) {
            _this.perimterText2.y += 4;
          }
          _this.perimterText2.y =
            _this.smallerShape.y + _this.smallerShape.height + 10;

          _this.perimterText2.y = 427;

          _this.AnswerBox.destroy();
          _this.eraseScreen();

          if (_this.BoxClicked1 != 0) {
            _this.Question_flag = 1;
            _this.stopAllSounds();
            // _this.Ask_Question1.play();
            _this.time.events.add(600, () => {
              console.log("_this.Ask_Question1");
              _this.Ask_Question1.play();
            });
          }
        } else {
          _this.wrongans.play();
          _this.eraseScreen();
        }
      }
      if (_this.BoxClicked1 == 0 && _this.BoxClicked2 == 0) {
        _this.enableBoxClick();
        _this.area = 0;
        _this.stopAllSounds();
        _this.time.events.add(400, () => {
          console.log("_this.Ask_Question6");
          _this.Ask_Question6.play();
        });
        _this.Question_flag = 6;
      }
    } else if (_this.part3 == true) {
      if (
        Number("" + _this.ansString) == _this.areaAns1 + _this.areaAns2 &&
        _this.choice[0] == 0
      ) {
        _this.celebrationSound.play();
        _this.starActions();
        _this.numGroup.destroy();
        _this.numpad = 0;
        _this.part3 = false;
        _this.part31 = true;
        _this.eraseScreen();
        _this.stopAllSounds();
        _this.choice = [1, 0];
        _this.occupyBiggr();
      } else {
        _this.wrongans.play();
        _this.eraseScreen();
      }
    } else if (_this.part31 == true) {
      if (
        Number("" + _this.ansString) == _this.areaAns1 - _this.areaAns2 &&
        _this.choice[0] == 1
      ) {
        _this.celebrationSound.play();
        _this.starActions();
        _this.numGroup.destroy();
        _this.numpad = 0;
        _this.part31 = false;
        _this.eraseScreen();
        _this.stopAllSounds();
        _this.fillShape();
      } else {
        _this.wrongans.play();
        _this.eraseScreen();
      }
    } else if (_this.part4 == true) {
      if (
        Number("" + _this.ansString) ==
        _this.smallerGrp.children.length * _this.areaAns2
      ) {
        _this.celebrationSound.play();
        _this.starActions();
        _this.numGroup.destroy();
        _this.numpad = 0;
        _this.part4 = false;
        _this.part5 = true;
        _this.eraseScreen();
        // voice 6
        _this.time.events.add(500, () => {
          _this.smallerGrp.forEach((element) => {
            element.frame = 0;
          });
          _this.biggerShape.frame = 1;
          _this.finalPart = true;
          _this.addNumberPad();
          _this.stopAllSounds();
          console.log("_this.Ask_Question10");
          _this.Ask_Question10.play();
          _this.Question_flag = 10;
        });
      } else {
        _this.wrongans.play();
        _this.eraseScreen();
      }
    } else if (_this.part5 == true) {
      if (
        Number("" + _this.ansString) ==
        (
          _this.areaAns1 -
          _this.smallerGrp.children.length * _this.areaAns2
        ).toFixed(2)
      ) {
        _this.numGroup.destroy();
        _this.numpad = 0;
        _this.part5 = false;
        _this.eraseScreen();
        _this.correctAns();
      } else {
        _this.wrongans.play();
        _this.eraseScreen();
      }
    }
  },
  // //* Validation for part A
  // rightbtnClicked1: function (target) {
  //   console.log("rightbtnClicked1");
  //   _this.clickSound.currentTime = 0;
  //   _this.clickSound.play();

  //   if (_this.circleRad == true) {
  //     console.log("rightbtnClicked1..");
  //     if (
  //       Number("" + _this.selectedAns1 + _this.selectedAns2) == _this.radius
  //     ) {
  //       _this.counterCelebrationSound.currentTime = 0;
  //       _this.counterCelebrationSound.play();
  //       _this.circleRad = false;
  //       _this.AnswerBox.destroy();
  //       _this.eraseScreen();
  //       _this.perimeterM.destroy();
  //       _this.perimeter.destroy();
  //       _this.numGroup.destroy();

  //       if (_this.perimeterVar == 1) {
  //         _this.stopAllSounds();
  //         _this.Question_flag = 12;
  //         _this.time.events.add(500, () => {
  //           console.log("_this.Ask_Question12");
  //           _this.Ask_Question12.play();
  //         });
  //         _this.AnswerBox = _this.add.image(532, 175 + 8, "redBox");
  //         _this.perimeter = _this.add.text(
  //           562,
  //           197 + 8,
  //           "P" + " " + "= 2 X 3.14 X " + _this.radius + " = "
  //         );
  //         _this.applyingStyle(_this.perimeter);
  //         _this.perimeter.fill = "#FFFFFF";
  //         _this.AnswerBox.scale.setTo(0.45);
  //         _this.geneatePerimeterAreaOptions();
  //       } else {
  //         _this.stopAllSounds();
  //         _this.Question_flag = 13;
  //         _this.time.events.add(500, () => {
  //           console.log("_this.Ask_Question13");
  //           _this.Ask_Question13.play();
  //         });

  //         _this.AnswerBox = _this.add.image(532, 175 + 8, "redBox");
  //         _this.perimeter = _this.add.text(
  //           562,
  //           197 + 8,
  //           "A" + " = 3.14 X " + _this.radius * _this.radius + " = "
  //         );
  //         _this.applyingStyle(_this.perimeter);
  //         _this.perimeter.fill = "#FFFFFF";
  //         _this.AnswerBox.scale.setTo(0.45);
  //         _this.geneatePerimeterAreaOptions();
  //       }
  //     } else {
  //       _this.noofAttempts++;
  //       _this.wrongans.play();
  //       _this.eraseScreen();
  //     }
  //   } else if (_this.perimeterVar == 1) {
  //     if (_this.BoxClicked1 == 1) {
  //       // if (Number('' + _this.ansString) == (2 * 3.14 * _this.radius).toFixed(2)) {
  //       if (_this.ansString == _this.fmstring) {
  //         _this.Box1.inputEnabled = false;
  //         _this.counterCelebrationSound.currentTime = 0;
  //         _this.counterCelebrationSound.play();
  //         _this.BoxClicked1 = 0;
  //         _this.biggerShape.inputEnabled = false;
  //         if (_this.mainShapeval != 2) {
  //           _this.biggerShape.x -= 40;
  //           _this.graphics.x -= 40;
  //         }

  //         _this.frm11.destroy();
  //         _this.frm21.destroy();
  //         _this.fmBox11.destroy();
  //         _this.fmBox21.destroy();
  //         _this.tick.destroy();

  //         _this.clearAreaPerOptions();

  //         ans = `P = ${(2 * 3.14 * _this.radius).toFixed(2)} m`;
  //         _this.perimterText = _this.add.text(
  //           _this.biggerShape.x + _this.biggerShape.width / 2 - ans.length * 4,
  //           _this.biggerShape.y + _this.biggerShape.height / 2 - 6,
  //           ans
  //         );
  //         _this.applyingStyleGn(_this.perimterText);
  //         _this.perimterText.fontSize = "18px";

  //         _this.perimterText.y =
  //           _this.biggerShape.y + _this.biggerShape.height + 10;
  //         _this.perimterText.y = 427;

  //         _this.AnswerBox.destroy();
  //         _this.eraseScreen();

  //         if (_this.BoxClicked2 != 0) {
  //           _this.Question_flag = 1;
  //           _this.stopAllSounds();
  //           _this.time.events.add(600, () => {
  //             console.log("_this.Ask_Question1");
  //             _this.Ask_Question1.play();
  //           });
  //         }
  //       } else {
  //         _this.noofAttempts++;
  //         _this.wrongans.play();
  //         _this.eraseScreen();
  //       }
  //     } else if (_this.BoxClicked2 == 2) {
  //       if (
  //         Number("" + _this.selectedAns1 + _this.selectedAns2) ==
  //         _this.findPerimetrValue()
  //       ) {
  //         _this.Box2.inputEnabled = false;
  //         _this.counterCelebrationSound.currentTime = 0;
  //         _this.counterCelebrationSound.play();
  //         _this.BoxClicked2 = 0;
  //         _this.smallerShape.inputEnabled = false;

  //         _this.clearAreaPerOptions();
  //         _this.pairImage.destroy();
  //         _this.graphicsP.destroy();

  //         ans = `P = ${_this.AnswerBox.name} m`;
  //         _this.perimterText2 = _this.add.text(
  //           _this.smallerShape.x +
  //             _this.smallerShape.width / 2 -
  //             ans.length * 5,
  //           _this.smallerShape.y + _this.smallerShape.height / 2 - 6,
  //           ans
  //         );
  //         _this.applyingStyleGn(_this.perimterText2);
  //         _this.perimterText2.fontSize = "18px";

  //         if (_this.smallerShapeval == 3) {
  //           _this.perimterText2.y += 9;
  //         }
  //         if (
  //           _this.smallerShapeval == 3 &&
  //           (_this.pB2 == 2 || _this.pL2 == 2)
  //         ) {
  //           _this.perimterText2.y += 14;
  //         }
  //         _this.perimterText2.y =
  //           _this.smallerShape.y + _this.smallerShape.height + 10;
  //         _this.perimterText2.y = 427;

  //         _this.AnswerBox.destroy();
  //         _this.eraseScreen();

  //         if (_this.BoxClicked1 != 0) {
  //           _this.Question_flag = 1;
  //           _this.stopAllSounds();
  //           // _this.Ask_Question1.play();
  //           _this.time.events.add(600, () => {
  //             console.log("_this.Ask_Question1");
  //             _this.Ask_Question1.play();
  //           });
  //         }
  //       } else {
  //         _this.noofAttempts++;
  //         _this.wrongans.play();
  //         _this.eraseScreen();
  //       }
  //     }

  //     if (_this.BoxClicked1 == 0 && _this.BoxClicked2 == 0) {
  //       // enable boxes to select grater perimeter
  //       _this.enableBoxClick();
  //       _this.mainclick = false;
  //       _this.pairclick = false;
  //       _this.stopAllSounds();
  //       _this.time.events.add(400, () => {
  //         console.log("_this.Ask_Question1");
  //         _this.Ask_Question3.play();
  //       });
  //       _this.Question_flag = 3;
  //       _this.BoxClicked1 = -1;
  //       _this.BoxClicked2 = -1;
  //     }
  //   } else if (_this.area == 1) {
  //     if (_this.BoxClicked1 == 1) {
  //       // if (Number('' + _this.ansString) == ((_this.radius * _this.radius) * 3.14).toFixed(2)) {
  //       if (_this.ansString == _this.fmstring) {
  //         _this.counterCelebrationSound.currentTime = 0;
  //         _this.counterCelebrationSound.play();
  //         _this.areaAns1 = Number(
  //           (_this.radius * _this.radius * 3.14).toFixed(2)
  //         );

  //         _this.pairImage.destroy();
  //         _this.graphicsP.destroy();

  //         _this.frm11.destroy();
  //         _this.frm21.destroy();
  //         _this.fmBox11.destroy();
  //         _this.fmBox21.destroy();
  //         _this.tick.destroy();
  //         _this.clearAreaPerOptions();

  //         if (_this.box_x[0] == 40) {
  //           if (_this.mainShapeval != 2) {
  //             _this.biggerShape.x -= 40;
  //             _this.graphics.x -= 40;
  //           }
  //         }

  //         _this.BoxClicked1 = 0;
  //         _this.biggerShape.inputEnabled = false;

  //         ans = `A = ${(3.14 * _this.radius * _this.radius).toFixed(2)} m${
  //           _this.power
  //         }`;
  //         _this.perimterText = _this.add.text(
  //           _this.biggerShape.x + _this.biggerShape.width / 2 - ans.length * 4,
  //           _this.biggerShape.y + _this.biggerShape.height / 2 - 6,
  //           ans
  //         );
  //         _this.applyingStyleGn(_this.perimterText);
  //         _this.perimterText.fontSize = "18px";

  //         _this.perimterText.y =
  //           _this.biggerShape.y + _this.biggerShape.height + 10;

  //         _this.perimterText.y = 427;

  //         _this.AnswerBox.destroy();
  //         _this.eraseScreen();

  //         if (_this.BoxClicked2 != 0) {
  //           _this.Question_flag = 1;
  //           _this.stopAllSounds();
  //           // _this.Ask_Question1.play();
  //           _this.time.events.add(600, () => {
  //             console.log("_this.Ask_Question1");
  //             _this.Ask_Question1.play();
  //           });
  //         }
  //       } else {
  //         _this.noofAttempts++;
  //         _this.wrongans.play();
  //         _this.eraseScreen();
  //       }
  //     } else if (_this.BoxClicked2 == 2) {
  //       if (
  //         Number("" + _this.selectedAns1 + _this.selectedAns2) ==
  //         _this.findPerimetrValue()
  //       ) {
  //         _this.counterCelebrationSound.currentTime = 0;
  //         _this.counterCelebrationSound.play();
  //         _this.clearAreaPerOptions();
  //         _this.pairImage.destroy();
  //         _this.graphicsP.destroy();

  //         _this.areaAns2 = Number("" + _this.selectedAns1 + _this.selectedAns2);

  //         ans = `A = ${_this.AnswerBox.name} m${_this.power}`;
  //         _this.perimterText2 = _this.add.text(
  //           _this.smallerShape.x +
  //             _this.smallerShape.width / 2 -
  //             ans.length * 5,
  //           _this.smallerShape.y + _this.smallerShape.height / 2 - 6,
  //           ans
  //         );
  //         _this.applyingStyleGn(_this.perimterText2);
  //         _this.perimterText2.fontSize = "18px";

  //         _this.BoxClicked2 = 0;
  //         _this.smallerShape.inputEnabled = false;

  //         if (_this.smallerShapeval == 3) {
  //           _this.perimterText2.y += 9;
  //           // _this.perimterText2.fontSize = "15px"
  //         }

  //         if (_this.smallerShapeval == 3 && _this.pB == 2) {
  //           _this.perimterText2.y += 4;
  //         }
  //         _this.perimterText2.y =
  //           _this.smallerShape.y + _this.smallerShape.height + 10;

  //         _this.perimterText2.y = 427;

  //         _this.AnswerBox.destroy();
  //         _this.eraseScreen();

  //         if (_this.BoxClicked1 != 0) {
  //           _this.Question_flag = 1;
  //           _this.stopAllSounds();
  //           // _this.Ask_Question1.play();
  //           _this.time.events.add(600, () => {
  //             console.log("_this.Ask_Question1");
  //             _this.Ask_Question1.play();
  //           });
  //         }
  //       } else {
  //         _this.noofAttempts++;
  //         _this.wrongans.play();
  //         _this.eraseScreen();
  //       }
  //     }
  //     if (_this.BoxClicked1 == 0 && _this.BoxClicked2 == 0) {
  //       _this.enableBoxClick();
  //       _this.area = 0;
  //       _this.stopAllSounds();
  //       _this.time.events.add(400, () => {
  //         console.log("_this.Ask_Question6");
  //         _this.Ask_Question6.play();
  //       });
  //       _this.Question_flag = 6;
  //     }
  //   } else if (_this.part3 == true) {
  //     if (
  //       Number("" + _this.ansString) == _this.areaAns1 + _this.areaAns2 &&
  //       _this.choice[0] == 0
  //     ) {
  //       _this.celebrationSound.play();
  //       _this.noofAttempts++;
  //       telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
  //       _this.starActions();
  //       _this.numGroup.destroy();
  //       _this.numpad = 0;
  //       _this.part3 = false;
  //       _this.part31 = true;
  //       _this.noofAttempts = 0;
  //       _this.AnsTimerCount = 0;
  //       _this.eraseScreen();
  //       _this.stopAllSounds();
  //       _this.choice = [1, 0];
  //       _this.occupyBiggr();
  //     } else {
  //       _this.noofAttempts++;
  //       _this.wrongans.play();
  //       _this.eraseScreen();
  //     }
  //   } else if (_this.part31 == true) {
  //     if (
  //       Number("" + _this.ansString) == _this.areaAns1 - _this.areaAns2 &&
  //       _this.choice[0] == 1
  //     ) {
  //       _this.celebrationSound.play();
  //       _this.noofAttempts++;
  //       telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
  //       _this.starActions();
  //       _this.numGroup.destroy();
  //       _this.numpad = 0;
  //       _this.part31 = false;
  //       _this.noofAttempts = 0;
  //       _this.AnsTimerCount = 0;
  //       _this.eraseScreen();
  //       _this.stopAllSounds();
  //       _this.fillShape();
  //     } else {
  //       _this.noofAttempts++;
  //       _this.wrongans.play();
  //       _this.eraseScreen();
  //     }
  //   } else if (_this.part4 == true) {
  //     if (
  //       Number("" + _this.selectedAns1 + _this.selectedAns2) ==
  //       _this.smallerGrp.children.length * _this.areaAns2
  //     ) {
  //       _this.celebrationSound.play();
  //       _this.noofAttempts++;
  //       telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
  //       _this.starActions();
  //       _this.numGroup.destroy();
  //       _this.numpad = 0;
  //       _this.part4 = false;
  //       _this.part5 = true;
  //       _this.eraseScreen();
  //       // voice 6
  //       _this.time.events.add(500, () => {
  //         _this.smallerGrp.forEach((element) => {
  //           element.frame = 0;
  //         });
  //         _this.biggerShape.frame = 1;
  //         _this.finalPart = true;
  //         _this.noofAttempts = 0;
  //       _this.AnsTimerCount = 0;
  //         _this.addNumberPad();
  //         _this.stopAllSounds();
  //         console.log("_this.Ask_Question10");
  //         _this.Ask_Question10.play();
  //         _this.Question_flag = 10;
  //       });
  //     } else {
  //       _this.noofAttempts++;
  //       _this.wrongans.play();
  //       _this.eraseScreen();
  //     }
  //   } else if (_this.part5 == true) {
  //     if (
  //       Number("" + _this.ansString) ==
  //       (
  //         _this.areaAns1 -
  //         _this.smallerGrp.children.length * _this.areaAns2
  //       ).toFixed(2)
  //     ) {
  //       _this.numGroup.destroy();
  //       _this.numpad = 0;
  //       _this.part5 = false;
  //       _this.eraseScreen();
  //       _this.correctAns();
  //     } else {
  //       _this.noofAttempts++;
  //       _this.wrongans.play();
  //       _this.eraseScreen();
  //     }
  //   }
  // },
  occupyBiggr: function () {
    _this.smallerShape.bringToTop();

    var intialPosx = _this.smallerShape.x - _this.graphics2.x;
    var intialPosy = _this.smallerShape.y - _this.graphics2.y;
    _this.yvarr = 0;
    _this.tweenovrlp = _this.add.tween(_this.smallerShape);
    _this.tweenovrlp2 = _this.add.tween(_this.graphics2);

    if (_this.radius == 4 && _this.pB == 1) xvar = 80;
    else if (_this.radius == 2) {
      xvar = 30;
    } else {
      xvar = 60;
    }

    if (_this.radius == 4 && _this.pL == 2 && _this.pB == 1) {
      _this.yvarr = 5;
    }
    if (_this.radius == 4 && _this.pL == 3 && _this.pB == 1) {
      _this.yvarr = 5;
    }
    if (
      _this.radius == 4 &&
      _this.pL == 3 &&
      _this.pB == 1 &&
      _this.smallerShapeval == 2
    ) {
      _this.yvarr = 2;
    }
    _this.tweenovrlp.to(
      {
        x: _this.biggerShape.x + xvar + _this.bx1,
        y:
          _this.biggerShape.y +
          _this.biggerShape.height -
          _this.smallerShape.height -
          _this.smallerShape.height / 2 -
          _this.yvarr,
      },
      600,
      "Linear",
      true,
      0
    );
    _this.tweenovrlp2.to(
      {
        x: _this.biggerShape.x + xvar - intialPosx + _this.bx1,
        y:
          _this.biggerShape.y +
          _this.biggerShape.height -
          _this.smallerShape.height -
          _this.smallerShape.height / 2 -
          intialPosy -
          _this.yvarr,
      },
      600,
      "Linear",
      true,
      0
    );

    _this.tweenovrlp2.onComplete.add(() => {
      console.log("_this.Ask_Question81");
      _this.Ask_Question81.play();
      _this.Question_flag = 8;
      //   _this.Ask_Question81.addEventListener("ended", () => {
      //     console.log("_this.Ask_Question82");
      //     _this.Ask_Question82.play();
      //   });
      _this.addNumberPad();
    });
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
    if (_this.smallerShapeval == 0 || _this.smallerShapeval == 1) {
      _this.side1 = _this.pL;
      _this.side2 = _this.pB;

      if (_this.side1 == 2 && _this.side2 == 1) {
        xvar1 = 0.7;
        yvar1 = 1.5;
      }
      if (_this.side1 == 2 && _this.side2 == 1) {
        yvar2 = 1;
      }
      if (_this.side1 == 3 && _this.side2 == 1) {
        xvar1 = 1.5;
        yvar1 = 3;
      }
      if (_this.side1 == 2 && _this.side2 == 4) {
        xvar1 = 2;
        yvar1 = 4;
      }
      if (_this.side1 == 2 && _this.side2 == 5) {
        xvar1 = 3;
        yvar1 = 6;
      }

      if (_this.side1 == 3 && _this.side2 == 2) {
        yvar1 = 3;
        xvar1 = 1.5;
        yvar2 = 1;
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

      graphicsCpy.lineStyle(thickness, color, alpha);
      graphicsCpy.drawRect(
        shape.x + xvar1,
        shape.y + xvar2,
        shape.width - yvar1,
        shape.height - yvar2
      );

      _this.maskGp.push(graphicsCpy);
      shape.mask = _this.maskGp[_this.maskGp.length - 1];
      _this.sx1 = xvar1;
      _this.sx2 = xvar2;
      _this.sy1 = yvar1;
      _this.sy2 = yvar2;
    }
    xvar1 = 0;
    xvar2 = 0;
    yvar1 = 0;
    yvar2 = 0;
    if (_this.smallerShapeval == 2) {
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

      if (_this.pL == 2 && _this.pB == 2) {
        xvar1 = 2;
        xvar2 = 1;
        yvar1 = 2;
        yvar2 = 2;
      }
      if (_this.pL == 2 && _this.pB == 1) {
        xvar1 = 1.5;
        xvar2 = 0.5;
        yvar1 = 2.5;
        yvar2 = 0.5;
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
        yvar1 = 4;
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
    }
    xvar1 = 0;
    xvar2 = 0;
    yvar1 = 0;
    yvar2 = 0;

    // for Triangle
    if (_this.smallerShapeval == 3) {
      _this.graphics2.lineStyle(thickness, color, alpha);
      if (_this.smallerShapeval == 3) {
        _this.pB2 = _this.pB;
        _this.pL2 = _this.pL;
      }

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

      y = shape.y + shape.height;
      x = shape.x;

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
    }
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
    if (_this.smallerShapeval == 0 || _this.smallerShapeval == 1) {
      _this.side1 = _this.pL;
      _this.side2 = _this.pB;

      if (_this.side1 == 2 && _this.side2 == 1) {
        xvar1 = 0.7;
        yvar1 = 1.5;
      }
      if (_this.side1 == 2 && _this.side2 == 1) {
        yvar2 = 1;
      }
      if (_this.side1 == 3 && _this.side2 == 1) {
        xvar1 = 1.5;
        yvar1 = 3;
      }
      if (_this.side1 == 2 && _this.side2 == 4) {
        xvar1 = 2;
        yvar1 = 4;
      }
      if (_this.side1 == 2 && _this.side2 == 5) {
        xvar1 = 3;
        yvar1 = 6;
      }

      if (_this.side1 == 3 && _this.side2 == 2) {
        yvar1 = 3;
        xvar1 = 1.5;
        yvar2 = 1;
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
    } else if (_this.smallerShapeval == 2) {
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

      if (_this.pL == 2 && _this.pB == 2) {
        xvar1 = 2;
        xvar2 = 1;
        yvar1 = 2;
        yvar2 = 2;
      }
      if (_this.pL == 2 && _this.pB == 1) {
        xvar1 = 1.5;
        xvar2 = 0.5;
        yvar1 = 2.5;
        yvar2 = 0.5;
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
    } else if (_this.smallerShapeval == 3) {
      _this.graphicsP.lineStyle(thickness, color, alpha);
      if (_this.smallerShapeval == 1) {
        _this.pB2 = _this.pB;
        _this.pL2 = _this.pL;
      }

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
  fillShape: function () {
    _this.smallerGrp = _this.add.group();
    _this.smallerGrpHr = _this.add.group();
    if (_this.choice[0] == 0) _this.occupyBiggr();
    _this.smallerGrp.addChild(_this.smallerShape);
    _this.multiplyLoop1 = _this.time.create(false);
    count = 1;
    if (_this.radius == 4 && _this.pB == 1) xvar = 80;
    else if (_this.radius == 2) {
      xvar = 30;
    } else {
      xvar = 60;
    }
    _this.total = Math.floor(
      (_this.biggerShape.height - _this.smallerShape.height / 2) /
        _this.smallerShape.height
    );
    _this.totalx = Math.floor(
      (_this.biggerShape.width - 2 * xvar) / _this.smallerShape.width
    );
    if (
      _this.radius == 2 &&
      _this.pL == 2 &&
      _this.pB == 1 &&
      _this.smallerShapeval == 2
    )
      _this.total = 2;
    if (
      _this.radius == 4 &&
      _this.pL == 3 &&
      _this.pB == 1 &&
      _this.smallerShapeval == 2
    )
      _this.total = _this.total - 1;

    if (
      (_this.radius == 4 && _this.pL == 2 && _this.pB == 2) ||
      (_this.pL == 2 && _this.pB == 1 && _this.smallerShapeval == 1) ||
      (_this.radius == 4 && _this.pL == 3 && _this.pB == 2)
    ) {
      _this.total -= 1;
    }

    if (
      _this.radius == 3 &&
      _this.pL == 2 &&
      _this.pB == 1 &&
      _this.smallerShapeval == 2
    )
      _this.total -= 1;

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
        _this.smallerGrp.addChild(_this.smallergrpCpy);

        _this.createMaskedObjectCpy(count - 1);
        intialPosx = _this.smallergrpCpy.x;
        intialPosy = _this.smallergrpCpy.y;

        _this.tweenovrlp = _this.add.tween(_this.smallergrpCpy);
        _this.tweenovrlp.to(
          {
            x: _this.biggerShape.x + xvar + _this.bx1,
            y:
              _this.biggerShape.y +
              _this.biggerShape.height -
              count * _this.smallerShape.height -
              _this.smallerShape.height / 2 -
              _this.yvarr,
          },
          500,
          "Linear",
          true,
          0
        );
        _this.tweenovrlp2 = _this.add.tween(_this.maskGp[count - 2]);
        _this.tweenovrlp2.to(
          {
            x: _this.biggerShape.x + xvar - intialPosx + _this.bx1,
            y:
              _this.biggerShape.y +
              _this.biggerShape.height -
              count * _this.smallerShape.height -
              _this.smallerShape.height / 2 -
              intialPosy -
              _this.yvarr,
          },
          500,
          "Linear",
          true,
          0
        );

        if (count == _this.total) {
          _this.multiplyLoop1.stop();
          _this.tweenovrlp.onComplete.add(() => {
            currentHrWidth = _this.smallerShape.x + _this.smallerShape.width;
            if (_this.smallerShapeval == 2) {
              currentHrWidth = _this.smallerShape.x + _this.pL * 37; //needt= to find the overlapped one
            }
            _this.initialWidth = currentHrWidth;

            istrue =
              _this.biggerShape.x +
                _this.biggerShape.width -
                (_this.smallerGrp.getChildAt(_this.total - 1).x +
                  _this.smallerGrp.getChildAt(_this.total - 1).width) -
                xvar / 2 >
              _this.smallerShape.width;
            if (
              _this.radius == 4 &&
              _this.smallerShapeval == 2 &&
              _this.pL == 2 &&
              _this.pB == 1
            ) {
              istrue = true;
            } else if (
              _this.radius == 3 &&
              _this.smallerShapeval == 3 &&
              _this.pL == 2 &&
              _this.pB == 1
            )
              istrue = true;
            if (istrue) {
              _this.multiplyHorizontalShapes(currentHrWidth);
            } else {
              _this.smallerGrp.forEach((element) => {
                element.frame = 1;
              });

              _this.part4 = true;
              _this.addNumberPad();
              _this.stopAllSounds();
              console.log("_this.Ask_Question91");
              _this.Ask_Question91.play();
              _this.Question_flag = 9;
              //   _this.Ask_Question91.addEventListener("ended", () => {
              //     console.log("_this.Ask_Question92");
              //     _this.Ask_Question92.play();
              //   });

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
    // xvar = _this.biggerShape.x + currentHrWidth
    xvar = currentHrWidth;
    _this.multiplyLoop2 = _this.time.create(false);
    count = 0;
    grplength = _this.smallerGrp.children.length;
    //  Set a TimerEvent to occur after 2 seconds
    _this.multiplyLoop2.loop(
      0,
      function () {
        if (
          (_this.radius == 4 && _this.pL == 2 && _this.pB == 1 && count == 0) ||
          (_this.radius == 3 &&
            _this.smallerShapeval == 3 &&
            _this.pL == 2 &&
            _this.pB == 1 &&
            count == 0)
        ) {
          count++;
        } else if (
          _this.radius == 4 &&
          _this.pL == 2 &&
          _this.pB == 1 &&
          _this.smallerShapeval == 2 &&
          (count < 1 || count == _this.total - 1 || count == _this.total - 2)
        ) {
          count++;
        } else if (
          _this.radius == 4 &&
          _this.pL == 3 &&
          _this.pB == 2 &&
          (count == 0 || count == _this.total - 1)
        )
          count++;
        else if (
          _this.radius == 3 &&
          _this.pL == 2 &&
          _this.pB == 1 &&
          (count == 0 || count == _this.total - 1 || count == 2)
        )
          count++;
        else if (
          _this.radius == 3 &&
          _this.pL == 2 &&
          _this.pB == 1 &&
          count == _this.total - 2
        )
          count++;
        else if (
          _this.radius == 3 &&
          _this.pL == 2 &&
          _this.pB == 1 &&
          _this.smallerShapeval == 3 &&
          count == 1
        )
          count++;
        else if (
          _this.pL == 2 &&
          _this.pB == 1 &&
          _this.smallerShapeval == 3 &&
          _this.selectedTr == 0 &&
          count == _this.total - 1
        )
          count++;
        else {
          ansheight = _this.total;
          _this.smallergrpCpy = _this.add.sprite(
            xvar - _this.smallerShape.width,
            _this.smallerGrp.getChildAt(grplength - ansheight + count).y,
            _this.smallerShape.key
          );
          _this.smallergrpCpy.scale.setTo(_this.scaleX, _this.scaleY);
          count++;
          _this.smallerGrp.addChild(_this.smallergrpCpy);
          _this.createMaskedObjectCpy(_this.smallerGrp.children.length - 1);

          var intialPosx = _this.smallergrpCpy.x;
          var intialPosy = _this.smallergrpCpy.y;

          _this.tweenovrlp2 = _this.add.tween(_this.smallergrpCpy);
          _this.tweenovrlp2.to(
            {
              x: xvar + _this.bx1,
              y:
                _this.biggerShape.y +
                _this.biggerShape.height -
                count * _this.smallerShape.height -
                _this.smallerShape.height / 2 -
                _this.yvarr,
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
              x: xvar - intialPosx + _this.bx1,
              y:
                _this.biggerShape.y +
                _this.biggerShape.height -
                count * _this.smallerShape.height -
                _this.smallerShape.height / 2 -
                intialPosy -
                _this.yvarr,
            },
            500,
            "Linear",
            true,
            0
          );
        }
        if (count == _this.total) {
          _this.multiplyLoop2.stop();
          _this.tweenovrlp2.onComplete.add(() => {
            {
              _this.smallerGrp.forEach((element) => {
                element.frame = 1;
              });
              _this.part4 = true;
              _this.addNumberPad();
              console.log("_this.Ask_Question91");
              _this.Ask_Question91.play();
              _this.Question_flag = 9;
              //   _this.Ask_Question91.addEventListener("ended", () => {
              //     console.log("_this.Ask_Question92");
              //     _this.Ask_Question92.play();
              //   });

              // array.forEach(element => {
              // _this.smallerGrp.alpha=1
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
                    element.alpha = 1;
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
    if (_this.llineText) _this.llineText.destroy();
    if (_this.lLine) _this.lLine.destroy();
    if (_this.whiteArr) _this.whiteArr.destroy();
    if (_this.piVal) _this.piVal.destroy();
    if (_this.pivalstr) _this.pivalstr.destroy();

    if (_this.hlineText) _this.hlineText.destroy();
    if (_this.lLine2) _this.lLine2.destroy();
    if (_this.lLine3) _this.lLine3.destroy();
    if (_this.llineText2) _this.llineText2.destroy();
    if (_this.llineText3) _this.llineText3.destroy();

    if (_this.boxPower) _this.boxPower.destroy();

    if (_this.box_x[0] == 450) {
      _this.biggerShape.x =
        40 + _this.Box1.width / 2 - _this.biggerShape.width / 2 + 407;
      _this.graphics.x = 0; //_this.Box1.x + _this.Box1.width / 2 - _this.biggerShape.width / 2;
    }
    // else{
    //     _this.biggerShape.x += 40
    //     _this.graphics.x += 40
    // }

    _this.clearArray.forEach((element) => {
      element.visible = true;
    });
  },
  perimeterSelected: function () {
    if (_this.Box1.frame == 1 && _this.Box2.frame == 0) {
      _this.celebrationSound.currentTime = 0;
      _this.celebrationSound.play();
      _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
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
      _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
      if (_this.area == 1) {
        _this.biggerShape.inputEnabled = true;
        _this.biggerShape.input.useHandCursor = true;
        _this.biggerShape.events.onInputDown.add(_this.bigShapeClicked, _this);
        _this.stopAllSounds();
        _this.time.events.add(600, () => {
          console.log("_this.Ask_Question4");
          _this.Ask_Question4.play();
        });
        _this.Question_flag = 4;

        _this.smallerShape.inputEnabled = true;
        _this.smallerShape.input.useHandCursor = true;
        _this.smallerShape.events.onInputDown.add(
          _this.pairShapeClicked,
          _this
        );
      } else {
        _this.choice = [0, 1]; //0=add 1-subtract Q/N
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

    _this.bgBox.destroy();

    _this.maskGp.forEach((element) => {
      element.destroy();
    });
    if (_this.graphicsnew) _this.graphicsnew.destroy();
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
    }
    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
  },
  applyingStyle1: function (target) {
    target.align = "right";
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#65B4C3";
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "28px";
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
      _this.celebrationSound.play();
      _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      _this.starActions(_this.count1);
      _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
    } else {
      _this.celebrationSound.play();
      _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      _this.starActions(_this.count1);
      _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
      _this.time.events.add(2000, _this.ClearAll);
      _this.time.events.add(2500, () => {
        _this.state.start('score', true, false,gameID,_this.microConcepts);
      });
    }
  },
  starActions: function (target) {
    _this.sceneCount++;
    starAnim = _this.starsGroup.getChildAt(_this.count1);
    starAnim.smoothed = false;
    anim = starAnim.animations.add("star");
    _this.microConcepts = "GeometryG8";
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
      window.baseUrl + "questionSounds/GMM-04-G8/" + _this.languageSelected + "/V1.mp3"
    );
    _this.demoAudio1.appendChild(_this.demoAudio1src);

    _this.demoAudio2 = document.createElement("audio");
    _this.demoAudio2src = document.createElement("source");
    _this.demoAudio2src.setAttribute(
      "src",
      window.baseUrl + "questionSounds/GMM-04-G8/" + _this.languageSelected + "/V2.mp3"
    );
    _this.demoAudio2.appendChild(_this.demoAudio2src);

    // QUESTION AUDIOS
    _this.q1Sound = document.createElement("audio");
    _this.q1Soundsrc = document.createElement("source");
    _this.q1Soundsrc.setAttribute(
      "src",
      window.baseUrl + "questionSounds/GMM-04-G8/" + _this.languageSelected + "/V1.mp3"
    );
    _this.q1Sound.appendChild(_this.q1Soundsrc);

    _this.q2Sound = document.createElement("audio");
    _this.q2Soundsrc = document.createElement("source");
    _this.q2Soundsrc.setAttribute(
      "src",
      window.baseUrl + "questionSounds/GMM-04-G8/" + _this.languageSelected + "/V2.mp3"
    );
    _this.q2Sound.appendChild(_this.q2Soundsrc);

    _this.q3Sound = document.createElement("audio");
    _this.q3Soundsrc = document.createElement("source");
    _this.q3Soundsrc.setAttribute(
      "src",
      window.baseUrl + "questionSounds/GMM-04-G8/" + _this.languageSelected + "/V3.mp3"
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
