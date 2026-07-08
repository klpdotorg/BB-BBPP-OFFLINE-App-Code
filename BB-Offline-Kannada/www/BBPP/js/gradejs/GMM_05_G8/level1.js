Game.GMM_05_G8level1 = function () {};

Game.GMM_05_G8level1.prototype = {
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

    _this.bellSound = document.createElement("audio");
    _this.bellSoundsrc = document.createElement("source");
    _this.bellSoundsrc.setAttribute("src", window.baseUrl + "sounds/bell.mp3");
    _this.bellSound.appendChild(_this.bellSoundsrc);

    _this.Ask_Question1 = _this.createAudio("GMM_05_G8_a1");
    _this.Ask_Question2 = _this.createAudio("GMM_05_G8_a2");
    _this.Ask_Question3 = _this.createAudio("GMM_05_G8_a3");
    _this.Ask_Question4 = _this.createAudio("GMM_05_G8_a4");
    _this.Ask_Question5 = _this.createAudio("GMM_05_G8_a5");
    _this.Ask_Question6 = _this.createAudio("GMM_05_G8_a6");

    telInitializerbbpp.gameIdInit("GMM_05_G8", gradeSelected);
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

    _this.partAFlag = 1; //1
    _this.partBFlag = 0; //0

    _this.part1 = false;
    _this.part2 = false;
    _this.part3 = false;
    _this.part4 = false;
    _this.finalAns = false;
    _this.signNotselected = false;

    _this.heightArray = [];
    _this.areaArray = [];
    _this.volumeArray = [];
    _this.radiusArray = [];
    _this.opArray_2 = [];

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
      _this.state.start("grade8Geometry", true, false);
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
        "questionSounds/GMM-05-G8/" +
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
    _this.showCylinderscreen();

    _this.questionid = 1;

    // _this.cylinderShow();
  },
  stopVoice: function () {
    _this.stopAllSounds();
    if (_this.Ask_Question1) _this.Ask_Question1 = null;
    if (_this.Ask_Question2) _this.Ask_Question2 = null;
    if (_this.Ask_Question3) _this.Ask_Question3 = null;
    if (_this.Ask_Question4) _this.Ask_Question4 = null;
    if (_this.Ask_Question5) _this.Ask_Question5 = null;
    if (_this.Ask_Question6) _this.Ask_Question6 = null;

    if (_this.celebrationSound) {
      if (_this.celebrationSound.isPlaying) {
        _this.celebrationSound.stop();
        _this.celebrationSound = null;
      }
    }
  },

  stopAllSounds: function () {
    if (_this.Ask_Question1) _this.Ask_Question1.pause();
    if (_this.Ask_Question2) _this.Ask_Question2.pause();
    if (_this.Ask_Question3) _this.Ask_Question3.pause();
    if (_this.Ask_Question4) _this.Ask_Question4.pause();
    if (_this.Ask_Question5) _this.Ask_Question5.pause();
    if (_this.Ask_Question6) _this.Ask_Question6.pause();

    if (_this.Ask_Question1) _this.Ask_Question1.currentTime = 0;
    if (_this.Ask_Question2) _this.Ask_Question2.currentTime = 0;
    if (_this.Ask_Question3) _this.Ask_Question3.currentTime = 0;
    if (_this.Ask_Question4) _this.Ask_Question4.currentTime = 0;
    if (_this.Ask_Question5) _this.Ask_Question5.currentTime = 0;
    if (_this.Ask_Question6) _this.Ask_Question6.currentTime = 0;
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

  cylinderShow: function () {
    // _this.cylinder = _this.add.sprite(350, 275, 'transCylinder');
    // _this.cylinder.scale.setTo(0.5,0.1);
    // circle = _this.add.sprite(70, 245, 'dottedCircle');
    // circle.scale.setTo(0.5)
    // circle_2 = _this.add.sprite(70, 215, 'dottedCircle');
    // circle_2.scale.setTo(0.5)
  },

  //show the biggining screen.
  showCylinderscreen: function () {
    console.log("showCylinderscreen");

    _this.Question_flag = 1;
    if (_this.count1 == 0) _this.Ask_Question1.play();

    _this.cylinder1 = true;
    _this.decideCylinderDimensions();
    _this.opArray = [];
    _this.bgmain = _this.add.sprite(40, 70, "Box2");
    _this.bgmain.visible = false;

    _this.bgBox = _this.add.sprite(40, 70, "panle4");
    _this.bgBox.visible = false;
    _this.Box1 = _this.add.sprite(40, 70, "panle3");
    _this.cylinder = _this.add.sprite(70, 100, "cylinder");
    _this.cylinder_2 = _this.add.sprite(70, 100, "transCylinder");
    console.log(" -- height = ", _this.height + " radius=  ", _this.radius);
    _this.cylinder.scale.setTo(_this.scalex, _this.scaley);
    _this.cylinder_2.scale.setTo(_this.scalex_1, _this.scaley_1);
    _this.cylinder.alpha = 0; //0

    x = _this.Box1.x + _this.Box1.width / 2 - _this.cylinder.width / 2;
    y = _this.Box1.y + _this.Box1.height / 2 - _this.cylinder.height / 2;
    _this.cylinder.x = x - 10;
    _this.cylinder.y = y - 10;

    _this.cylinder_2.x = x - 10;
    _this.cylinder_2.y = y - 10;

    if (_this.height == 10) {
      _this.cylinder.y += 12;
      _this.cylinder_2.y += 12;
    }
    _this.showCylindrDimensions();

    _this.op1 = _this.add.sprite(570, 70, "panle7");
    _this.opArray.push(_this.op1);
    _this.op2 = _this.add.sprite(570, 203, "panle7");
    _this.opArray.push(_this.op2);
    _this.op3 = _this.add.sprite(570, 335, "panle7");
    _this.opArray.push(_this.op3);

    _this.fmstring = "r = " + _this.radius + " m ";
    _this.fmstring1 = "r = " + _this.height + " m ";

    if (_this.height == _this.radius) {
      _this.fmstring1 = "r = " + _this.height / 2 + " m ";
    }

    _this.fmstring2 = "r = " + 2 * _this.radius + " m ";
    if (2 * _this.radius == _this.height) {
      _this.fmstring2 = "r = " + _this.height / 2 + " m ";
      if (_this.height == _this.radius || _this.height / 2 == _this.radius)
        _this.fmstring2 = "r = " + (_this.height / 2 - 1) + " m ";
    }

    _this.obj = [_this.fmstring, _this.fmstring2, _this.fmstring1];
    _this.shuffle(_this.obj);

    _this.option1Val = _this.obj[0];
    _this.option2Val = _this.obj[1];
    _this.option3Val = _this.obj[2];

    _this.frm1 = _this.add.text(677, 115, _this.option1Val);
    _this.applyingStyle(_this.frm1);
    _this.frm1.name = _this.option1Val;
    _this.op1.name = _this.option1Val;

    _this.frm2 = _this.add.text(677, 255, _this.option2Val);
    _this.applyingStyle(_this.frm2);
    _this.frm2.name = _this.option2Val;
    _this.op2.name = _this.option2Val;

    _this.frm3 = _this.add.text(677, 385, _this.option3Val);
    _this.applyingStyle(_this.frm3);
    _this.frm3.name = _this.option3Val;
    _this.op3.name = _this.option3Val;

    _this.opArray.forEach((element) => {
      element.inputEnabled = true;
      element.input.useHandCursor = true;
      element.events.onInputDown.add(_this.cylinderOpClicked);
    });

    _this.tick = _this.add.sprite(820, 465, "TickBtn");
    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(_this.selectRValidation, _this);
  },
  //here randomizing the dimentions of cylinder. width and height.
  decideCylinderDimensions: function () {
    console.log("decideCylinderDimensions");
    height = [6, 8, 10];
    height = _this.shuffle(height);
    _this.height = height[0];
    _this.radius = Math.floor(Math.random() * (6 - 2) + 2); //2,3,4,5
    while (_this.radiusArray[0] == _this.radius) {
      _this.radius = Math.floor(Math.random() * (6 - 2) + 2); //2,3,4,5
    }
    _this.scalex_1 = (2 * _this.radius) / 16.7; //15.6;//(2 * _this.radius) / 13.6;//scale of trans cylinder
    _this.scaley_1 = _this.height / 17.9; //8.59;//scale of trans cylinder

    _this.scalex = (2 * _this.radius) / 8; //7.5;//(2 * _this.radius) / 6.5;//scale of cylinder
    _this.scaley = _this.height / 8.59; //scale of cylinder
    _this.sx = (2 * _this.radius) / 16.7; //13.5;//(2 * _this.radius) / 6.5;//scale of circle
    if (_this.height == 8) _this.sy = 0.58; //1
    if (_this.height == 6) _this.sy = _this.height / 11.3; //0.51//(_this.height) / 12;//0.5//0.49//0.7
    // if (_this.height == 4)
    //     _this.sy = 0.5
    if (_this.height == 10) _this.sy = 0.56; //1.18

    _this.area = _this.radius * _this.radius * 3.14;
    _this.volume = (
      _this.height *
      (_this.radius * _this.radius * 3.14)
    ).toFixed(2);

    _this.heightArray.push(_this.height);
    _this.areaArray.push(_this.area);
    _this.volumeArray.push(_this.volume);
    _this.radiusArray.push(_this.radius);
    console.log(_this.heightArray, "_this.heightArray");
    console.log(_this.areaArray, "_this.areaArray");
    console.log(_this.volumeArray, "_this.volumeArray");
  },
  //displaying the dimention of height and width.
  showCylindrDimensions: function () {
    console.log("showCylindrDimensions");
    //width line
    _this.whiteArr = _this.add.sprite(
      _this.cylinder.x,
      _this.cylinder.y + 10,
      "orangeArrow"
    );
    _this.whiteArr.x += _this.cylinder.width / 2;
    // _this.whiteArr.y += _this.biggerShape.height / 2 - _this.whiteArr.height / 2;
    _this.whiteArr.scale.setTo(_this.radius / 4.1, 1); //3.8, 1//(_this.radius / 3.38, 1)
    if (_this.height == 10) _this.whiteArr.y += 10;
    if (_this.height == 4) _this.whiteArr.y -= 10;
    if (_this.height == 3) _this.whiteArr.y -= 10;
    _this.llineText = _this.add.text(
      _this.whiteArr.x + _this.whiteArr.width / 2 - 20,
      _this.whiteArr.y + 20,
      `${_this.radius} m`
    );
    _this.applyingStyle(_this.llineText);

    //height line
    _this.hLine = _this.add.sprite(
      _this.cylinder.x + _this.cylinder.width,
      _this.whiteArr.y + 10,
      "orangeTr"
    );
    _this.hLine.scale.setTo(1, _this.height / 8.2);

    _this.hlineText = _this.add.text(
      _this.hLine.x + 35,
      _this.hLine.y + _this.cylinder.height / 2 - 10,
      `${_this.height} m`
    );
    _this.applyingStyle(_this.hlineText);
  },
  //frame change for option
  cylinderOpClicked: function (target) {
    console.log("cylinderOpClicked");
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();

    _this.opArray.forEach((element) => {
      element.frame = 0;
    });
    target.frame = 1;
    _this.selectedradius = target;
  },
  selectRValidation: function () {
    console.log("selectrvalidation...........");
    if (_this.op1.frame == 1 && _this.op1.name == _this.fmstring) {
      _this.tick.inputEnabled = false;
      _this.tick.input.useHandCursor = false;
      _this.tick.destroy();
      _this.counterCelebrationSound.play();
      _this.celebrationSound.play();
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(
        _this.questionid,
        "yes",
        _this.AnsTimerCount,
        _this.noofAttempts,
        _this.sceneCount
      );
      _this.starActions();
      _this.cylinder1 = false;
      _this.time.events.add(500, () => {
        _this.opArray.forEach((element) => {
          element.destroy();
        });
        _this.frm1.destroy();
        _this.frm2.destroy();
        _this.frm3.destroy();

        _this.Box1.visible = false;
        _this.bgBox.visible = false;
        _this.bgmain.visible = true;
        _this.cylinder3 = true;
        _this.hLine.visible = false;
        _this.hlineText.visible = false;
        _this.tick = _this.add.sprite(820, 465, "TickBtn");
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.visible = false;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        if (_this.partAFlag == 1) {
          _this.circleAreaScreen();
        } else {
          // _this.Ask_QuestionV2.play();
          // _this.Question_flag = 12;
          _this.showAreatextscren();
          _this.tick_2 = _this.add.sprite(820, 465, "TickBtn");
          _this.tick_2.inputEnabled = true;
          _this.tick_2.input.useHandCursor = true;
          _this.tick_2.events.onInputDown.add(_this.tickClicked, _this);

          // _this.Ask_QuestionV2.addEventListener('ended', () => {
          // _this.time.events.add(2000, () => {
          //     _this.tick.visible = true;
          //     console.log("inside show fun.................");
          //     _this.showCylinderscreen2();
          //     // _this.Ask_QuestionV3.play();
          //     // _this.Question_flag = 13
          //     _this.cylinder2 = true;
          // })
          // });
        }
      });
    } else if (_this.op2.frame == 1 && _this.op2.name == _this.fmstring) {
      _this.tick.inputEnabled = false;
      _this.tick.input.useHandCursor = false;
      _this.tick.destroy();
      _this.counterCelebrationSound.play();
      _this.celebrationSound.play();
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(
        _this.questionid,
        "yes",
        _this.AnsTimerCount,
        _this.noofAttempts,
        _this.sceneCount
      );
      _this.starActions();
      _this.cylinder1 = false;
      _this.noofAttempts = 0;
      _this.AnsTimerCount = 0;
      _this.time.events.add(500, () => {
        _this.opArray.forEach((element) => {
          element.destroy();
        });
        _this.frm1.destroy();
        _this.frm2.destroy();
        _this.frm3.destroy();

        _this.Box1.visible = false;
        _this.bgBox.visible = false;
        _this.bgmain.visible = true;
        _this.cylinder3 = true;
        _this.hLine.visible = false;
        _this.hlineText.visible = false;
        _this.tick = _this.add.sprite(820, 465, "TickBtn");
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.visible = false;
        if (_this.partAFlag == 1) {
          _this.circleAreaScreen();
        } else {
          // _this.Ask_QuestionV2.play();
          // _this.Question_flag = 12;
          _this.showAreatextscren();
          _this.tick_2 = _this.add.sprite(820, 465, "TickBtn");
          _this.tick_2.inputEnabled = true;
          _this.tick_2.input.useHandCursor = true;
          _this.tick_2.events.onInputDown.add(_this.tickClicked, _this);

          // _this.Ask_QuestionV2.addEventListener('ended', () => {
          // _this.time.events.add(2000, () => {
          //     _this.tick.visible = true;
          //     console.log("inside show fun.................");
          //     _this.showCylinderscreen2();
          //     // _this.Ask_QuestionV3.play();
          //     // _this.Question_flag = 13
          //     _this.cylinder2 = true;
          // })
          // });
        }
      });
    } else if (_this.op3.frame == 1 && _this.op3.name == _this.fmstring) {
      _this.tick.inputEnabled = false;
      _this.tick.input.useHandCursor = false;
      _this.tick.destroy();
      _this.counterCelebrationSound.play();
      _this.celebrationSound.play();
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(
        _this.questionid,
        "yes",
        _this.AnsTimerCount,
        _this.noofAttempts,
        _this.sceneCount
      );
      _this.starActions();
      _this.cylinder1 = false;
      _this.time.events.add(500, () => {
        _this.opArray.forEach((element) => {
          element.destroy();
        });
        _this.frm1.destroy();
        _this.frm2.destroy();
        _this.frm3.destroy();

        _this.Box1.visible = false;
        _this.bgBox.visible = false;
        _this.bgmain.visible = true;
        _this.cylinder3 = true;
        _this.hLine.visible = false;
        _this.hlineText.visible = false;
        _this.tick = _this.add.sprite(820, 465, "TickBtn");
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.visible = false;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        if (_this.partAFlag == 1) {
          _this.circleAreaScreen();
        } else {
          // _this.Ask_QuestionV2.play();
          // _this.Question_flag = 12;
          _this.showAreatextscren();
          _this.tick_2 = _this.add.sprite(820, 465, "TickBtn");
          _this.tick_2.inputEnabled = true;
          _this.tick_2.input.useHandCursor = true;
          _this.tick_2.events.onInputDown.add(_this.tickClicked, _this);

          // _this.Ask_QuestionV2.addEventListener('ended', () => {
          // _this.time.events.add(2000, () => {
          //     _this.tick.visible = true;
          //     console.log("inside show fun.................");
          //     _this.showCylinderscreen2();
          //     // _this.Ask_QuestionV3.play();
          //     // _this.Question_flag = 13
          //     _this.cylinder2 = true;
          // })
          // });
        }
      });
    } else {
      console.log("errorrrrrrr1");
      _this.noofAttempts++;
      _this.wrongans.play();
      _this.opArray.forEach((element) => {
        element.frame = 0;
      });
    }
  },
  rightbtnClicked1: function (target) {
    console.log("rightbtnClicked1");
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();

    if (_this.cylinder2 == true) {
      console.log("_this.cylinder2");
      if (_this.circlefill.children.length == _this.height) {
        console.log("_this.cylinder2.............");
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.cylinder2 = false;
        _this.btn1.inputEnabled = false;
        _this.btn1.input.useHandCursor = false;
        _this.eraser.inputEnabled = false;
        _this.eraser.input.useHandCursor = false;
        _this.time.events.add(500, () => {
          _this.circlefill.destroy();
          _this.tick.destroy();
          _this.heightBox.destroy();
          _this.heightText.destroy();
          _this.eraserPanel.destroy();
          _this.eraser.destroy();
          _this.btn1.destroy();
          _this.bgBox.visible = false;
          _this.bgmain.visible = true;
          // _this.Ask_QuestionV4.play()
          // _this.Question_flag = 14;
          if (_this.partAFlag == 1) {
            _this.table1 = true;
          } else {
            _this.table2 = true;
          }
          console.log(_this.cylinder.x);
          _this.cylinder.x -= 90; //70
          console.log(_this.cylinder.x, "after...");
          _this.cylinder_2.x -= 90; //70
          _this.whiteArr.visible = true;
          _this.llineText.visible = true;
          _this.hLine.visible = true;
          _this.hlineText.visible = true;
          _this.whiteArr.x -= 50;
          _this.llineText.x -= 50;
          _this.hlineText.x -= 50;
          _this.hLine.x -= 50;
          // _this.whiteArr.x -= 30
          // _this.llineText.x -= 30
          // _this.hlineText.x -= 30
          // _this.hLine.x -= 30

          _this.showTable();
        });
      } else {
        console.log("errorrrrrrr2");
        _this.noofAttempts++;
        _this.wrongans.play();
      }
    }
  },

  circleAreaScreen: function () {
    _this.Question_flag = 2;
    if (_this.count1 == 1) _this.Ask_Question2.play();

    _this.fmBox1 = _this.add.image(650, 130, "textBox2");
    _this.fmBox1.scale.setTo(1.15, 1);

    _this.fmBox2 = _this.add.image(650, 230, "textBox2");
    _this.fmBox2.scale.setTo(1.15, 1);

    _this.fmBox3 = _this.add.image(650, 330, "textBox2");
    _this.fmBox3.scale.setTo(1.15, 1);

    _this.fmstring1 = "A" + " " + "=" + " " + "2" + " " + _this.pi + " " + "r";

    _this.fmstring2 =
      "A" + " " + "=" + " " + 2 + " " + _this.pi + " " + "r" + _this.power; //ans string
    _this.fmstring = "A" + " " + "=" + " " + _this.pi + " " + "r" + _this.power; //ans string

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

    _this.frm1 = _this.add.text(677, 155, _this.option1Val);
    _this.applyingStyle(_this.frm1);
    _this.frm1.name = _this.option1Val;

    _this.frm2 = _this.add.text(677, 255, _this.option2Val);
    _this.applyingStyle(_this.frm2);
    _this.frm2.name = _this.option2Val;

    _this.frm3 = _this.add.text(677, 355, _this.option3Val);
    _this.applyingStyle(_this.frm3);
    _this.frm3.name = _this.option3Val;

    _this.tick_1 = _this.add.sprite(820, 465, "TickBtn");
    _this.tick_1.frame = 1;
    _this.tick_1.inputEnabled = true;
    _this.tick_1.input.useHandCursor = true;
    _this.tick_1.events.onInputDown.add(function () {
      if (_this.fmBox1.frame == 1 && _this.fmBox1.name == _this.fmstring) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.celebrationSound.currentTime = 0;
        _this.celebrationSound.play();
        _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(
          _this.questionid,
          "yes",
          _this.AnsTimerCount,
          _this.noofAttempts,
          _this.sceneCount
        );
        _this.starActions();
        _this.tick_1.destroy();
        _this.fmBox2.destroy();
        _this.fmBox3.destroy();
        _this.frm2.destroy();
        _this.frm3.destroy();
        _this.fmBox1.inputEnabled = false;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.goTween(_this.fmBox1, _this.frm1);
      } else if (
        _this.fmBox2.frame == 1 &&
        _this.fmBox2.name == _this.fmstring
      ) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.celebrationSound.currentTime = 0;
        _this.celebrationSound.play();
        _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(
          _this.questionid,
          "yes",
          _this.AnsTimerCount,
          _this.noofAttempts,
          _this.sceneCount
        );
        _this.starActions();
        _this.tick_1.destroy();
        _this.fmBox1.destroy();
        _this.fmBox3.destroy();
        _this.frm1.destroy();
        _this.frm3.destroy();
        _this.fmBox2.inputEnabled = false;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.goTween(_this.fmBox2, _this.frm2);
      } else if (
        _this.fmBox3.frame == 1 &&
        _this.fmBox3.name == _this.fmstring
      ) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.celebrationSound.currentTime = 0;
        _this.celebrationSound.play();
        _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(
          _this.questionid,
          "yes",
          _this.AnsTimerCount,
          _this.noofAttempts,
          _this.sceneCount
        );
        _this.starActions();
        _this.tick_1.destroy();
        _this.fmBox2.destroy();
        _this.fmBox1.destroy();
        _this.frm2.destroy();
        _this.frm1.destroy();
        _this.fmBox3.inputEnabled = false;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.goTween(_this.fmBox3, _this.frm3);
      } else {
        console.log("errorrrrrrr3");
        _this.noofAttempts++;
        _this.wrongans.play();
      }
    });
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
    console.log("gotween.................");
    _this.tweenTop = _this.add.tween(box_name);
    _this.tweenTop.to({ x: 640, y: 100 }, 600, "Linear", true, 0);
    _this.tweenTop.start();

    _this.tweenTopFRM = _this.add.tween(formla);

    _this.tweenTopFRM.to({ x: 667, y: 125 }, 600, "Linear", true, 0);

    _this.tweenTopFRM.start();

    _this.tweenTopFRM.onComplete.add(function () {
      if (_this.fmBox1.frame == 1 && _this.fmBox1.name == _this.fmstring) {
        _this.fmBox1.destroy();
        _this.frm1.destroy();
      } else if (
        _this.fmBox2.frame == 1 &&
        _this.fmBox2.name == _this.fmstring
      ) {
        _this.fmBox2.destroy();
        _this.frm2.destroy();
      } else if (
        _this.fmBox3.frame == 1 &&
        _this.fmBox3.name == _this.fmstring
      ) {
        _this.fmBox3.destroy();
        _this.frm3.destroy();
      }
      _this.Question_flag = 3;
      if (_this.count1 == 2) _this.Ask_Question3.play();
      // _this.Question_flag = 3;
      // _this.Ask_Question3.play();
      _this.showAreatextscren();

      _this.tick_2 = _this.add.sprite(820, 465, "TickBtn");

      // _this.Ask_Question3.addEventListener('ended', () => {

      _this.time.events.add(1200, () => {
        _this.tick_2.inputEnabled = true;
        _this.tick_2.input.useHandCursor = true;
        _this.tick_2.events.onInputDown.add(_this.tickClicked, _this);
      });
      // });
    });
  },

  tickClicked: function () {
    console.log("tick cliked....");
    _this.clickSound.play();
    _this.tick.visible = true;
    _this.tick.events.onInputDown.add(_this.rightbtnClicked1, _this);
    _this.showCylinderscreen2();
    _this.Question_flag = 4;
    if (_this.count1 == 2) _this.Ask_Question4.play();
    // _this.Ask_QuestionV3.play();
    // _this.Question_flag = 13
    _this.cylinder2 = true;
    _this.tick_2.destroy();
  },
  showAreatextscren: function () {
    console.log("showAreatextscren");
    _this.Question_flag = 3;

    _this.piVal = _this.add.image(500, 100, "textBox2");
    _this.pivalstr = _this.add.text(530, 125, _this.pi + " = 3.14");
    _this.applyingStyle(_this.pivalstr);
    _this.piVal.frame = 1;

    _this.areaBox1 = _this.add.image(650, 100, "textBox2");
    _this.perimeter1 = _this.add.text(
      677,
      125,
      "A = " + _this.pi + " r " + _this.power
    );
    _this.applyingStyle(_this.perimeter1);
    _this.areaBox1.frame = 1;

    _this.areaBox = _this.add.image(620 - 90 - 50, 175, "textBox12Y");
    _this.areaBox.scale.setTo(0.9, 1);
    _this.perimeter = _this.add.text(
      640 - 130,
      200,
      "A" + " = 3.14 X " + _this.radius
    );
    _this.applyingStyle(_this.perimeter);
    _this.boxPower = _this.add.text(660, 190, _this.power);
    _this.applyingStyle(_this.boxPower);
    _this.perimeter2 = _this.add.text(
      670,
      200,
      " = " + _this.radius * _this.radius * 3.14
    );
    _this.applyingStyle(_this.perimeter2);
    _this.perimeterM = _this.add.text(830 - 50, 200, "m" + _this.power);
    _this.applyingStyle(_this.perimeterM);
  },

  showCylinderscreen2: function () {
    console.log("showCylinderscreen2");
    _this.bgBox.visible = true;
    _this.Box1.visible = false;
    _this.bgmain.visible = false;

    _this.tick.x = 620;
    _this.cylinder.x += 40;
    _this.cylinder_2.x += 40;
    _this.eraserPanel = _this.add.sprite(40, 280, "panle1");
    _this.btn1 = _this.add.sprite(60, 300, "btn1");
    _this.eraser = _this.add.sprite(60, 370, "eraser");

    _this.btn1.inputEnabled = true;
    _this.btn1.input.useHandCursor = true;
    _this.btn1.events.onInputOver.add(_this.eraserMouseOver, _this);
    _this.btn1.events.onInputOut.add(_this.eraserMouseOut, _this);

    _this.eraser.inputEnabled = true;
    _this.eraser.input.useHandCursor = true;
    // Add a listener for the mouseover event
    _this.eraser.events.onInputOver.add(_this.eraserMouseOver, _this);
    // Add a listener for the mouseout event
    _this.eraser.events.onInputOut.add(_this.eraserMouseOut, _this);

    if (_this.partAFlag == 1) {
      _this.hand = _this.add.image(100, 320, "hand");
      _this.hand.scale.setTo(0.55);

      _this.time.events.add(800, () => {
        _this.clickSound.play();
        _this.hand.scale.setTo(0.5);
        _this.btn1.frame = 1;
        _this.time.events.add(900, () => {
          _this.hand.scale.setTo(0.55);
          _this.time.events.add(600, () => {
            _this.hand.destroy();
            _this.btn1.frame = 0;
            _this.btn1.events.onInputDown.add(_this.fillCircle);
            _this.eraser.events.onInputDown.add(_this.eraseCircle);
          });
        });
      });
    } else {
      _this.btn1.events.onInputDown.add(_this.fillCircle);
      _this.eraser.events.onInputDown.add(_this.eraseCircle);
    }

    _this.circlefill = _this.add.group();
    _this.piVal.destroy();
    _this.pivalstr.destroy();
    _this.perimeter.destroy();
    _this.areaBox.destroy();
    _this.perimeter1.destroy();
    _this.areaBox1.destroy();
    _this.perimeter2.destroy();
    _this.perimeterM.destroy();
    _this.boxPower.destroy();

    _this.whiteArr.visible = false;
    _this.llineText.visible = false;
    _this.hLine.visible = false;
    _this.hlineText.visible = false;
  },

  eraserMouseOver: function (target) {
    target.frame = 1;
  },

  eraserMouseOut: function (target) {
    target.frame = 0;
  },
  fillCircle: function () {
    console.log("fillCircle");
    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    if (_this.height == 8) ypos = 29; //34.5
    if (_this.height == 6) ypos = 28; //37//28//36.3
    if (_this.height == 4) ypos = 40;
    if (_this.height == 10) ypos = 31; //33.5

    // _this.clickSound.currentTime = 0;
    // _this.clickSound.play();
    _this.bellSound.currentTime = 0;
    _this.bellSound.play();

    if (_this.circlefill.children.length < _this.height) {
      // circle = _this.add.sprite(_this.cylinder.x, _this.cylinder.y + _this.cylinder.height, 'blueCircle')
      circle = _this.add.sprite(
        _this.cylinder_2.x,
        _this.cylinder_2.y + _this.cylinder_2.height,
        "dottedCircle"
      );
      circle.scale.setTo(_this.sx, _this.sy);
      // circle.alpha = 0.5;
      if (_this.circlefill.children.length != 0) {
        circle.y =
          _this.circlefill.getChildAt(_this.circlefill.children.length - 1).y -
          ypos;
      } else {
        if (_this.height == 6)
          circle.y -=
            (_this.circlefill.children.length + 1) * circle.height - 5;
        //3.5
        else
          circle.y -=
            (_this.circlefill.children.length + 1) * circle.height - 3.5;

        _this.heightBox = _this.add.sprite(520, 90, "textBox3");
        _this.heightBox.frame = 1;
      }
      _this.circlefill.addChild(circle);
      if (_this.heightText) _this.heightText.destroy();
      _this.heightText = _this.add.text(
        555,
        110,
        "h = " + _this.circlefill.children.length
      );
      _this.applyingStyle(_this.heightText);

      _this.world.bringToTop(_this.cylinder_2);

      if (_this.circlefill.children.length == _this.height)
        _this.world.bringToTop(_this.circlefill);
    }
  },
  eraseCircle: function () {
    console.log("eraseCircle");
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();
    if (_this.circlefill.children.length > 0) {
      _this.world.bringToTop(_this.cylinder_2);
      _this.circlefill
        .getChildAt(_this.circlefill.children.length - 1)
        .destroy();
      if (_this.heightText) _this.heightText.destroy();
      _this.heightText = _this.add.text(
        555,
        110,
        "h = " + _this.circlefill.children.length
      );
      _this.applyingStyle(_this.heightText);

      if (_this.circlefill.children.length == 0) {
        _this.heightText.destroy();
        _this.heightBox.destroy();
      }
    }
  },
  showTable: function () {
    console.log("showTable");
    _this.cylinder.alpha = 1;
    _this.cylinder_2.destroy();
    _this.Question_flag = 5;
    if (_this.count1 == 2) _this.Ask_Question5.play();

    if (_this.table1 == true) {
      _this.box_1 = _this.add.sprite(480, 90, "textBox1table");
      _this.tableFirstrow(25);

      _this.questionM = _this.add.text(260, 25 + 70, "??");
      _this.box_1.addChild(_this.questionM);
      _this.applyingStyle1(_this.questionM);
    } else {
      //     _this.box_1.destroy()
      //     // _this.height = _this.height / 2
      //     newheight = Math.floor(Math.random() * (_this.height - 3) + 3);
      //     _this.prevheight = _this.height;
      // _this.height = newheight
      // _this.scaley = (_this.height) / 8.59
      // if (_this.height == 8)
      //     _this.sy = 1
      // if (_this.height == 6)
      //     _this.sy = 0.7
      // if (_this.height == 4)
      //     _this.sy = 0.5
      // if (_this.height == 10)
      //     _this.sy = 1.18

      //     _this.cylinder.scale.setTo(_this.scalex, _this.scaley);
      //     _this.whiteArr.destroy()
      //     _this.llineText.destroy()
      //     _this.hLine.destroy()
      //     _this.hlineText.destroy()
      //     x = _this.Box1.x + _this.Box1.width / 2 - _this.cylinder.width / 2
      //     y = _this.Box1.y + _this.Box1.height / 2 - _this.cylinder.height / 2
      //     _this.cylinder.x = x - 50;
      //     _this.cylinder.y = y - 10;

      //     _this.showCylindrDimensions()

      _this.box_1 = _this.add.sprite(480, 90, "textBox2table");
      _this.tableSecond(25);
      _this.areaAns = _this.add.text(235, 25 + 70, _this.volumeArray[0]);
      _this.box_1.addChild(_this.areaAns);
      _this.applyingStyle1(_this.areaAns);
      // _this.tableSecond(110)

      _this.questionM = _this.add.text(260, 25 + 150, "??");
      _this.box_1.addChild(_this.questionM);
      _this.applyingStyle1(_this.questionM);
    }
  },
  tableFirstrow: function (y) {
    console.log("tableFirstrow");
    if (y == 25) {
      _this.addA = _this.add.text(55, y, "A");
      _this.applyingStyle1(_this.addA);
      _this.box_1.addChild(_this.addA);
      _this.addA.fontSize = "30px";
      _this.addh = _this.add.text(155, y, "h");
      _this.addh.fontSize = "30px";
      _this.applyingStyle1(_this.addh);
      _this.box_1.addChild(_this.addh);
      _this.addV = _this.add.text(265, y, "V");
      _this.applyingStyle1(_this.addV);
      _this.box_1.addChild(_this.addV);
      _this.addV.fontSize = "30px";
    }

    _this.areaVal = _this.add.text(
      35,
      y + 70,
      (_this.radius * _this.radius * 3.14).toFixed(2)
    );
    _this.applyingStyle1(_this.areaVal);
    _this.box_1.addChild(_this.areaVal);

    if (_this.table2 == true && y == 25)
      _this.heightVal = _this.add.text(155, y + 70, _this.prevheight);
    else _this.heightVal = _this.add.text(155, y + 70, _this.height);

    _this.applyingStyle1(_this.heightVal);
    _this.box_1.addChild(_this.heightVal);

    _this.volumeOptionShow();
  },
  tableSecond: function (y) {
    console.log("tableSecond");
    if (y == 25) {
      _this.addA = _this.add.text(55, y, "A");
      _this.applyingStyle1(_this.addA);
      _this.box_1.addChild(_this.addA);
      _this.addA.fontSize = "30px";
      _this.addh = _this.add.text(155, y, "h");
      _this.addh.fontSize = "30px";
      _this.applyingStyle1(_this.addh);
      _this.box_1.addChild(_this.addh);
      _this.addV = _this.add.text(265, y, "V");
      _this.applyingStyle1(_this.addV);
      _this.box_1.addChild(_this.addV);
      _this.addV.fontSize = "30px";

      _this.area_1 = _this.add.text(35, 25 + 70, _this.areaArray[0]);
      _this.box_1.addChild(_this.area_1);
      _this.applyingStyle1(_this.area_1);

      _this.height_1 = _this.add.text(155, 25 + 70, _this.heightArray[0]);
      _this.box_1.addChild(_this.height_1);
      _this.applyingStyle1(_this.height_1);

      y = 110;
    }
    if (y == 110) {
      _this.area_2 = _this.add.text(35, y + 70, _this.areaArray[1]);
      _this.box_1.addChild(_this.area_2);
      _this.applyingStyle1(_this.area_2);

      _this.height_2 = _this.add.text(155, y + 70, _this.heightArray[1]);
      _this.box_1.addChild(_this.height_2);
      _this.applyingStyle1(_this.height_2);
    }
    _this.volumeOptionShow();
  },

  volumeOptionShow() {
    _this.fmBox1 = _this.add.image(480, 350, "textBox4");
    _this.finalValue =
      "V = " + (_this.height * (_this.radius * _this.radius * 3.14)).toFixed(2);

    _this.fmBox2 = _this.add.image(650, 350, "textBox4");
    _this.wrongValue =
      "V = " + (_this.height + _this.radius * _this.radius * 3.14).toFixed(2);

    _this.fmBox1.inputEnabled = true;
    _this.fmBox1.input.useHandCursor = true;
    _this.fmBox1.events.onInputDown.add(function () {
      _this.makeFrames0();
      _this.fmBox1.frame = 1;
      _this.fmBox1.name = _this.frm1.name;
      if (_this.fmBox1.frame == 1 && _this.fmBox1.name == _this.finalValue) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.fmBox1.inputEnabled = false;
        _this.fmBox1.input.useHandCursor = false;
        _this.fmBox2.inputEnabled = false;
        _this.fmBox2.input.useHandCursor = false;
        _this.answerDisplay();
        _this.time.events.add(1500, () => {
          // _this.celebrationSound.currentTime = 0;
          _this.celebrationSound.play();
          _this.noofAttempts++;
          telInitializerbbpp.tele_saveAssessment(
            _this.questionid,
            "yes",
            _this.AnsTimerCount,
            _this.noofAttempts,
            _this.sceneCount
          );
          _this.starActions();

          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          if (_this.partAFlag == 1) _this.partB();
          else _this.lastVolumFind();
        });
      } else {
        console.log("errorrrrrrr4");
        _this.noofAttempts++;
        _this.wrongans.play();
      }
    });

    _this.fmBox2.inputEnabled = true;
    _this.fmBox2.input.useHandCursor = true;
    _this.fmBox2.events.onInputDown.add(function () {
      _this.makeFrames0();
      _this.fmBox2.frame = 1;
      _this.fmBox2.name = _this.frm2.name;
      if (_this.fmBox2.frame == 1 && _this.fmBox2.name == _this.finalValue) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.fmBox1.inputEnabled = false;
        _this.fmBox1.input.useHandCursor = false;
        _this.fmBox2.inputEnabled = false;
        _this.fmBox2.input.useHandCursor = false;
        _this.answerDisplay();
        _this.time.events.add(1500, () => {
          // _this.celebrationSound.currentTime = 0;
          _this.celebrationSound.play();
          _this.starActions();
          if (_this.partAFlag == 1) _this.partB();
          else _this.lastVolumFind();
        });
      } else {
        console.log("errorrrrrrr5");
        _this.noofAttempts++;
        _this.wrongans.play();
      }
    });

    _this.obj = [_this.finalValue, _this.wrongValue];
    _this.shuffle(_this.obj);

    _this.option1Val = _this.obj[0];
    _this.option2Val = _this.obj[1];

    _this.frm1 = _this.add.text(500, 375, _this.option1Val);
    _this.applyingStyle(_this.frm1);
    _this.frm1.name = _this.option1Val;

    _this.frm2 = _this.add.text(670, 375, _this.option2Val);
    _this.applyingStyle(_this.frm2);
    _this.frm2.name = _this.option2Val;
  },
  answerDisplay: function () {
    console.log("ansdisplay...........");
    if (_this.partAFlag == 1) {
      _this.questionM.destroy();
      _this.areaAns = _this.add.text(235, 25 + 70, _this.volumeArray[0]);
      _this.box_1.addChild(_this.areaAns);
      _this.applyingStyle1(_this.areaAns);
    } else {
      _this.questionM.destroy();
      _this.areaAns_2 = _this.add.text(235, 180, _this.volumeArray[1]);
      _this.box_1.addChild(_this.areaAns_2);
      _this.applyingStyle1(_this.areaAns_2);
    }
  },

  partB: function () {
    _this.box_1.visible = false;
    _this.frm1.destroy();
    _this.frm2.destroy();
    _this.fmBox1.destroy();
    _this.fmBox2.destroy();
    _this.cylinder.destroy();
    // _this.cylinder_2.destroy();
    _this.whiteArr.destroy();
    _this.llineText.destroy();
    _this.hLine.destroy();
    _this.hlineText.destroy();
    _this.bgBox.visible = false;
    _this.Box1.visible = false;
    _this.bgmain.visible = false;
    _this.table1 = false;
    _this.partAFlag = 0;
    _this.partBFlag = 1;
    _this.ClearAll();

    _this.time.events.add(1500, _this.showCylinderscreen);
  },
  lastVolumFind: function () {
    _this.frm1.destroy();
    _this.frm2.destroy();
    _this.fmBox1.destroy();
    _this.fmBox2.destroy();
    _this.cylinder.destroy();
    _this.whiteArr.destroy();
    _this.llineText.destroy();
    _this.hLine.destroy();
    _this.hlineText.destroy();
    _this.opArray_2.forEach((element) => {
      element.destroy();
    });
    _this.table2 = false;
    _this.finalPart = true;
    _this.showVolumneOptions();
  },
  showVolumneOptions: function () {
    console.log("showVolumneOptions");
    if (_this.count1 == 5) _this.tableVolumeShow();

    _this.Question_flag = 6;
    if (_this.count1 == 5) _this.Ask_Question6.play();

    // _this.Question_flag = 15;
    // _this.Ask_QuestionV6.play();

    _this.cylinder.destroy();
    _this.whiteArr.destroy();
    _this.llineText.destroy();
    _this.hLine.destroy();
    _this.hlineText.destroy();

    _this.opArray_2 = [];
    _this.op1 = _this.add.sprite(150, 110, "textBox2");
    _this.opArray_2.push(_this.op1);
    _this.op2 = _this.add.sprite(150, 190, "textBox2");
    _this.opArray_2.push(_this.op2);
    _this.op3 = _this.add.sprite(150, 275, "textBox2");
    _this.opArray_2.push(_this.op3);
    _this.op1.scale.setTo(1.1, 1);
    _this.op3.scale.setTo(1.1, 1);
    _this.op2.scale.setTo(1.1, 1);

    _this.fmstring = "V = " + _this.pi + " r " + _this.power + " h";
    _this.fmstring1 = "V = " + 2 + " " + _this.pi + " r" + " h";
    _this.fmstring2 = "V = " + _this.pi + " r " + _this.power;

    _this.obj = [_this.fmstring, _this.fmstring2, _this.fmstring1];
    _this.shuffle(_this.obj);

    _this.option1Val = _this.obj[0];
    _this.option2Val = _this.obj[1];
    _this.option3Val = _this.obj[2];

    _this.frm1 = _this.add.text(170, 115 + 20, _this.option1Val);
    _this.applyingStyle(_this.frm1);
    _this.op1.name = _this.option1Val;

    _this.frm2 = _this.add.text(170, 195 + 20, _this.option2Val);
    _this.applyingStyle(_this.frm2);
    _this.op2.name = _this.option2Val;

    _this.frm3 = _this.add.text(170, 280 + 20, _this.option3Val);
    _this.applyingStyle(_this.frm3);
    _this.op3.name = _this.option3Val;

    _this.opArray_2.forEach((element) => {
      element.inputEnabled = true;
      element.input.useHandCursor = true;
      element.events.onInputDown.add(_this.volumneClicked);
    });
    _this.tick = _this.add.sprite(820, 465, "TickBtn");
    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(_this.volumeOptionValidation, _this);
  },
  tableVolumeShow: function () {
    console.log("table show......");
    _this.box_1.destroy();
    _this.box_1 = _this.add.sprite(480, 90, "text_box_15");
    _this.box_1.scale.setTo(0.48, 0.48);
    x1 = 480;
    y1 = 90;
    // _this.tableSecond(25)
    _this.areaAns = _this.add.text(
      x1 + 235,
      y1 + 25 + 70,
      _this.volumeArray[0]
    );
    // _this.box_1.addChild(_this.areaAns)
    _this.applyingStyle1(_this.areaAns);
    y = 25;
    if (y == 25) {
      _this.addA = _this.add.text(x1 + 55, y1 + y, "A");
      _this.applyingStyle1(_this.addA);
      // _this.box_1.addChild(_this.addA);
      _this.addA.fontSize = "30px";
      _this.addh = _this.add.text(x1 + 155, y1 + y, "h");
      _this.addh.fontSize = "30px";
      _this.applyingStyle1(_this.addh);
      // _this.box_1.addChild(_this.addh);
      _this.addV = _this.add.text(x1 + 265, y1 + y, "V");
      _this.applyingStyle1(_this.addV);
      // _this.box_1.addChild(_this.addV);
      _this.addV.fontSize = "30px";

      _this.area_1 = _this.add.text(x1 + 35, y1 + 25 + 70, _this.areaArray[0]);
      // _this.box_1.addChild(_this.area_1)
      _this.applyingStyle1(_this.area_1);

      _this.height_1 = _this.add.text(
        x1 + 155,
        y1 + 25 + 70,
        _this.heightArray[0]
      );
      // _this.box_1.addChild(_this.height_1)
      _this.applyingStyle1(_this.height_1);

      y = 110;
    }
    if (y == 110) {
      _this.area_2 = _this.add.text(x1 + 35, y1 + y + 70, _this.areaArray[1]);
      // _this.box_1.addChild(_this.area_2)
      _this.applyingStyle1(_this.area_2);

      _this.height_2 = _this.add.text(
        x1 + 155,
        y1 + y + 70,
        _this.heightArray[1]
      );
      // _this.box_1.addChild(_this.height_2)
      _this.applyingStyle1(_this.height_2);
    }

    _this.areaAns_2 = _this.add.text(x1 + 235, y1 + 180, _this.volumeArray[1]);
    // _this.box_1.addChild(_this.areaAns_2)
    _this.applyingStyle1(_this.areaAns_2);
  },

  volumneClicked: function (target) {
    console.log("volumneClicked");
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();
    _this.opArray_2.forEach((element) => {
      element.frame = 0;
    });
    target.frame = 1;
    _this.selectedVol = target;
  },

  volumeOptionValidation: function () {
    if (_this.op1.frame == 1 && _this.op1.name == _this.fmstring) {
      _this.celebrationSound.play();
      _this.finalPart = false;
      _this.tick.inputEnabled = false;
      _this.tick.input.useHandCursor = false;
      _this.correctAns();
      _this.op1.inputEnabled = false;
    } else if (_this.op2.frame == 1 && _this.op2.name == _this.fmstring) {
      _this.celebrationSound.play();
      _this.finalPart = false;
      _this.tick.inputEnabled = false;
      _this.tick.input.useHandCursor = false;
      _this.correctAns();
      _this.op2.inputEnabled = false;
    } else if (_this.op3.frame == 1 && _this.op3.name == _this.fmstring) {
      _this.celebrationSound.play();
      _this.finalPart = false;
      _this.tick.inputEnabled = false;
      _this.tick.input.useHandCursor = false;
      _this.correctAns();
      _this.op3.inputEnabled = false;
    } else {
      console.log("errorrrrrrr6");
      _this.noofAttempts++;
      _this.wrongans.play();
      _this.opArray_2.forEach((element) => {
        element.frame = 0;
      });
    }
  },
  destroyObj: function () {
    _this.areaAns.destroy();
    _this.addA.destroy();
    _this.addh.destroy();
    _this.addV.destroy();
    _this.area_1.destroy();
    _this.height_1.destroy();
    _this.area_2.destroy();
    _this.height_2.destroy();
    _this.areaAns_2.destroy();
  },

  ClearAll: function () {
    _this.finalPart = false;
    if (_this.Box1) _this.Box1.destroy();
    if (_this.Box2) _this.Box2.destroy();
    if (_this.box_1) _this.box_1.destroy();
    _this.bgmain.destroy();
    _this.bgBox.destroy();
    if (_this.AnswerBox) _this.AnswerBox.destroy();

    _this.perimeterM.destroy();
    _this.perimeter.destroy();
    if (_this.boxPower) _this.boxPower.destroy();
    _this.tick.destroy();
    _this.opArray.forEach((element) => {
      element.destroy();
    });
    _this.opArray_2.forEach((element) => {
      element.destroy();
    });
    _this.frm1.destroy();
    _this.frm2.destroy();
    _this.frm3.destroy();

    _this.fmstring = null;
    _this.fmstring2 = null;
    _this.fmstring1 = null;
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
      telInitializerbbpp.tele_saveAssessment(
        _this.questionid,
        "yes",
        _this.AnsTimerCount,
        _this.noofAttempts,
        _this.sceneCount
      );
      _this.starActions(_this.count1);

      _this.noofAttempts = 0;
      _this.AnsTimerCount = 0;
      _this.time.events.add(2000, _this.ClearAll);
      _this.time.events.add(2500, () => {
        // _this.state.start('GMM_05_G8Score', true, false);
        _this.showCylinderscreen();
      });
    } else {
      _this.celebrationSound.play();
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(
        _this.questionid,
        "yes",
        _this.AnsTimerCount,
        _this.noofAttempts,
        _this.sceneCount
      );
      _this.starActions(_this.count1);

      _this.noofAttempts = 0;
      _this.AnsTimerCount = 0;
      _this.time.events.add(2000, _this.destroyObj, _this.ClearAll);
      _this.time.events.add(2500, () => {
        _this.state.start("score", true, false, gameID, _this.microConcepts);
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
      window.baseUrl +
        "questionSounds/GMM-05-G8/" +
        _this.languageSelected +
        "/V1.mp3"
    );
    _this.demoAudio1.appendChild(_this.demoAudio1src);

    _this.demoAudio2 = document.createElement("audio");
    _this.demoAudio2src = document.createElement("source");
    _this.demoAudio2src.setAttribute(
      "src",
      window.baseUrl +
        "questionSounds/GMM-05-G8/" +
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
        "questionSounds/GMM-05-G8/" +
        _this.languageSelected +
        "/V1.mp3"
    );
    _this.q1Sound.appendChild(_this.q1Soundsrc);

    _this.q2Sound = document.createElement("audio");
    _this.q2Soundsrc = document.createElement("source");
    _this.q2Soundsrc.setAttribute(
      "src",
      window.baseUrl +
        "questionSounds/GMM-05-G8/" +
        _this.languageSelected +
        "/V2.mp3"
    );
    _this.q2Sound.appendChild(_this.q2Soundsrc);

    _this.q3Sound = document.createElement("audio");
    _this.q3Soundsrc = document.createElement("source");
    _this.q3Soundsrc.setAttribute(
      "src",
      window.baseUrl +
        "questionSounds/GMM-05-G8/" +
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
