Game.GMM_02_G8level1 = function () { };

Game.GMM_02_G8level1.prototype = {
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
      _this.languageSelected = "Tamil";
    } //  
    else
      console.log("Language selected: " + _this.languageSelected);
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
    _this.framechangesrc.setAttribute(
      "src",
      window.baseUrl + "sounds/Frame_change_sound.mp3"
    );
    _this.framechange.appendChild(_this.framechangesrc);

    _this.snapSound = document.createElement("audio");
    _this.snapSoundsrc = document.createElement("source");
    _this.snapSoundsrc.setAttribute(
      "src",
      window.baseUrl + "sounds/snapSound.mp3"
    );
    _this.snapSound.appendChild(_this.snapSoundsrc);

    _this.Ask_Question1 = _this.createAudio("GMM_02_G8_a1");
    _this.Ask_Question21 = _this.createAudio("GMM_02_G8_a2");
    _this.Ask_Question22 = _this.createAudio("GMM_02_G8_a2");
    _this.Ask_Question3 = _this.createAudio("GMM_02_G8_a4");
    _this.Ask_Question4 = _this.createAudio("GMM_02_G8_a8");
    _this.Ask_Question5 = _this.createAudio("GMM_02_G8_a8");
    _this.Ask_Question6 = _this.createAudio("GMM_02_G8_a3");
    _this.Ask_Question71 = _this.createAudio("GMM_02_G8_a6");
    _this.Ask_Question72 = _this.createAudio("GMM_02_G8_a6");
    _this.Ask_Question8 = _this.createAudio("GMM_02_G8_a6");

    telInitializerbbpp.gameIdInit("GMM_02_G8", gradeSelected);
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
      //  console.log("//////////////////")
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

    _this.micrpConcepts;
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

    _this.part1 = true;
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
          _this.Ask_Question21.currentTime = 0;
          _this.Ask_Question22.currentTime = 0;
          if (_this.decideTheMainShape[0] == 0) _this.Ask_Question21.play();
          else _this.Ask_Question22.play();
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
          _this.Ask_Question71.currentTime = 0;
          _this.Ask_Question72.currentTime = 0;
          if (_this.decideTheMainShape[0] == 0) _this.Ask_Question71.play();
          else _this.Ask_Question72.play();
        }
        if (_this.Question_flag == 8) {
          _this.Ask_Question8.currentTime = 0;
          _this.Ask_Question8.play();
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
    //   //  console.log("inside hintbutton function");
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
      window.baseUrl +
      "questionSounds/GMM-02-G8/" +
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
    _this.totalSurf = true;
    _this.StoreArrayValues();
    _this.InitialScreen();

    // _this.showscreen();

    // Stores Random Question values in Array

    // _this.add.image(100,100,'img').frame=1
    _this.questionid = 1;
  },

  // showscreen:function(){
  //     _this.panle1 = _this.add.sprite(20, 70, 'yellowBox3cp');
  //     // _this.panle1.scale.setTo(1.62, 1.09);
  //     _this.panle2 = _this.add.sprite(100, 70, 'yellowBox3')
  //     _this.panle2.scale.setTo(1.62, 1.09);

  // },
  stopVoice: function () {
    _this.Ask_Question1.pause();
    _this.Ask_Question1 = null;

    _this.Ask_Question21.pause();
    _this.Ask_Question21 = null;
    _this.Ask_Question22.pause();
    _this.Ask_Question22 = null;

    _this.Ask_Question3.pause();
    _this.Ask_Question3 = null;

    _this.Ask_Question4.pause();
    _this.Ask_Question4 = null;

    _this.Ask_Question5.pause();
    _this.Ask_Question5 = null;

    _this.Ask_Question6.pause();
    _this.Ask_Question6 = null;

    _this.Ask_Question71.pause();
    _this.Ask_Question71 = null;
    _this.Ask_Question72.pause();
    _this.Ask_Question72 = null;

    _this.Ask_Question8.pause();
    _this.Ask_Question8 = null;

    if (_this.celebrationSound) {
      if (_this.celebrationSound.isPlaying) {
        _this.celebrationSound.stop();
        _this.celebrationSound = null;
      }
    }
  },

  stopAllSounds: function () {
    _this.Ask_Question1.pause();
    _this.Ask_Question21.pause();
    _this.Ask_Question22.pause();
    _this.Ask_Question71.pause();
    _this.Ask_Question72.pause();
    _this.Ask_Question3.pause();
    _this.Ask_Question4.pause();
    _this.Ask_Question5.pause();
    _this.Ask_Question6.pause();
    _this.Ask_Question8.pause();

    _this.Ask_Question1.currentTime = 0;
    _this.Ask_Question21.currentTime = 0;
    _this.Ask_Question22.currentTime = 0;
    _this.Ask_Question3.currentTime = 0;
    _this.Ask_Question4.currentTime = 0;
    _this.Ask_Question5.currentTime = 0;
    _this.Ask_Question6.currentTime = 0;
    _this.Ask_Question71.currentTime = 0;
    _this.Ask_Question72.currentTime = 0;
    _this.Ask_Question8.currentTime = 0;
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
    //  console.log("InitialScreen");
    _this.panle1 = _this.add.sprite(20, 70, "panle1");

    _this.optionPanel1 = _this.add.sprite(385 + 40, 70, "panle3");
    _this.optionPanel2 = _this.add.sprite(645, 70, "panle3");
    _this.optionPanel3 = _this.add.sprite(385 + 40, 295, "panle3");
    _this.optionPanel4 = _this.add.sprite(645, 295, "panle3");

    _this.mainShapesprite = _this.add.sprite(20, 70, _this.mainShape);
    y = _this.panle1.height / 2 - _this.mainShapesprite.height / 2;
    x = _this.panle1.width / 2 - _this.mainShapesprite.width / 2;
    _this.mainShapesprite.x += x;
    _this.mainShapesprite.y += y;

    _this.stopAllSounds();
    _this.Question_flag = 1;
    _this.Ask_Question1.play();
    _this.placeOptions();

    _this.tickBtn = _this.add.sprite(880, 450, "TickBtn");
    _this.tickBtn.inputEnabled = true;
    _this.tickBtn.useHandCursor = true;
    _this.tickBtn.events.onInputDown.add(_this.rightbtnClicked, _this);

    // _this.showBiggerNet()
  },

  StoreArrayValues: function () {
    //  console.log("StoreArrayValues");
    _this.cubeshapes = ["shape2", "box1", "box2", "box3", "box4"];
    _this.cuboidshapes = ["shape1", "trunk"];
    _this.cuboidshapes = _this.shuffle(_this.cuboidshapes);
    _this.decideTheMainShape = [0, 1]; //[0, 1];//* cube cuboid
    _this.shuffle(_this.decideTheMainShape);

    if (_this.totalSurf == true) {
      _this.area1 = Math.floor(Math.random() * (9 - 2) + 2);

      if (_this.decideTheMainShape[0] == 1) {
        _this.mainShape = _this.cuboidshapes[0];
        _this.shapeno = Math.floor(Math.random() * (19 - 1) + 1);
        _this.shapeName = `cuboidRight${_this.shapeno}`;
        _this.area2 = Math.floor(Math.random() * (_this.area1 - 2) + 2);
        _this.area3 = _this.area2 - 1; //Math.floor(Math.random() * (_this.area1 - 2) + 2)
        while (
          (_this.area2 == _this.area3 && _this.area2 == _this.area1) ||
          _this.area2 == 2
        ) {
          _this.area1 = Math.floor(Math.random() * (9 - 2) + 2);
          _this.area2 = Math.floor(Math.random() * (_this.area1 - 2) + 2);
          _this.area3 = _this.area2 - 1; //Math.floor(Math.random() * (_this.area2 - 1) + 1)//Math.floor(Math.random() * (_this.area1 - 2) + 2)
          //  console.log(_this.area1, "area1....");
          //  console.log(_this.area2, "area2....");
          //  console.log(_this.area3, "area3....");
        }
      } else {
        _this.mainShape = _this.cubeshapes[0];
        _this.shapeno = Math.floor(Math.random() * (19 - 1) + 1); //1 to 18
        _this.shapeName = `cubeRight${_this.shapeno}`;
        _this.area2 = _this.area3 = _this.area1;
      }
    } else {
      while (
        _this.prevtype == _this.decideTheMainShape[0] &&
        ((_this.prevAns == _this.cuboidshapes[0] && _this.prevtype == 1) ||
          (_this.prevAns == _this.cubeshapes[0] && _this.prevtype == 0))
      ) {
        _this.cubeshapes = ["shape2", "box1", "box2", "box3", "box4"];
        _this.cuboidshapes = ["shape1", "trunk"];
        _this.cuboidshapes = _this.shuffle(_this.cuboidshapes);
        _this.decideTheMainShape = [0, 1]; //* cube cuboid
        _this.shuffle(_this.decideTheMainShape);
      }
      _this.area1 = Math.floor(Math.random() * (9 - 2) + 2);

      if (_this.decideTheMainShape[0] == 1) {
        _this.mainShape = _this.cuboidshapes[0];
        _this.shapeno = Math.floor(Math.random() * (19 - 1) + 1);
        _this.shapeName = `cuboidRight${_this.shapeno}`;
        _this.area2 = Math.floor(Math.random() * (_this.area1 - 2) + 2);
        _this.area3 = _this.area2 - 1; //Math.floor(Math.random() * (_this.area1 - 2) + 2)
        while (
          (_this.area2 == _this.area3 && _this.area2 == _this.area1) ||
          _this.area2 == 2
        ) {
          _this.area1 = Math.floor(Math.random() * (9 - 2) + 2);
          _this.area2 = Math.floor(Math.random() * (_this.area1 - 2) + 2);
          _this.area3 = _this.area2 - 1; //Math.floor(Math.random() * (_this.area1 - 2) + 2)
          //  console.log(_this.area1, "area1....");
          //  console.log(_this.area2, "area2....");
          //  console.log(_this.area3, "area3....");
        }
      } else {
        _this.mainShape = _this.cubeshapes[0];
        _this.shapeno = Math.floor(Math.random() * (19 - 1) + 1);
        _this.shapeName = `cubeRight${_this.shapeno}`;
        _this.area2 = _this.area3 = _this.area1;
      }
    }
  },
  placeOptions: function () {
    //  console.log("placeOptions");
    if (_this.decideTheMainShape[0] == 1)
      wrongOptions = [
        "cuboidWrng1",
        "cuboidWrng2",
        "cuboidWrng3",
        "cuboidWrng4",
        "cuboidWrng5",
        "cuboidWrng6",
      ];
    else
      wrongOptions = [
        "cubeWrng1",
        "cubeWrng2",
        "cubeWrng3",
        "cubeWrng4",
        "cubeWrng5",
        "cubeWrng6",
      ];

    _this.nets = _this.add.group();
    wrongOptions = _this.shuffle(wrongOptions);
    decideCorrectpos = Math.floor(Math.random() * 4);
    for (i = 0; i < 4; i++) {
      if (i == 0 || i == 2) {
        x = 385 + 40;
      } else {
        x = 645;
      }
      if (i == 0 || i == 1) {
        y = 70;
      } else {
        y = 295;
      }
      if (decideCorrectpos == i) {
        net = _this.add.sprite(x, y, _this.shapeName);
      } else {
        net = _this.add.sprite(x, y, wrongOptions[i]);
      }
      if (_this.decideTheMainShape[0] == 0) net.scale.setTo(0.47);
      else net.scale.setTo(0.55);

      x = _this.optionPanel1.width / 2 - net.width / 2;
      y = _this.optionPanel1.height / 2 - net.height / 2;
      net.x += x;
      net.y += y;

      _this.nets.add(net);
      if (i == 0) {
        box = _this.optionPanel1;
        _this.optionPanel1.name = net.key;
      } else if (i == 1) {
        box = _this.optionPanel2;
        _this.optionPanel2.name = net.key;
      } else if (i == 2) {
        box = _this.optionPanel3;
        _this.optionPanel3.name = net.key;
      } else if (i == 3) {
        box = _this.optionPanel4;
        _this.optionPanel4.name = net.key;
      }

      box.inputEnabled = true;
      box.input.useHandCursor = true;
      box.events.onInputDown.add(_this.netOptionClicked, _this);
    }
  },
  netOptionClicked: function (box) {
    //  console.log("netOptionClicked");
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();
    _this.optionPanel1.frame = 0;
    _this.optionPanel2.frame = 0;
    _this.optionPanel3.frame = 0;
    _this.optionPanel4.frame = 0;

    box.frame = 1;
    _this.selectedNet = box;
  },

  showBiggerNet: function () {
    //  console.log("showBiggerNet");
    _this.optionPanel1.destroy();
    _this.optionPanel2.destroy();
    _this.optionPanel3.destroy();
    _this.optionPanel4.destroy();
    _this.nets.destroy();

    _this.panle1.scale.setTo(1, 0.865);
    _this.panle2 = _this.add.sprite(385 + 40, 70, "panle2");
    _this.tickBtn.x -= 20;

    _this.biggerNetShape = _this.add.sprite(385 + 40, 70, _this.shapeName);
    x = _this.panle2.width / 2 - _this.biggerNetShape.width / 2;
    y = _this.panle2.height / 2 - _this.biggerNetShape.height / 2;
    _this.biggerNetShape.x += x;
    _this.biggerNetShape.y += y;
    _this.stopAllSounds();
    if (_this.totalSurf == true) {
      if (_this.decideTheMainShape[0] == 0) _this.Ask_Question21.play();
      else _this.Ask_Question22.play();

      _this.Question_flag = 2;
    } else {
      if (_this.decideTheMainShape[0] == 0) _this.Ask_Question71.play();
      else _this.Ask_Question72.play();

      _this.Question_flag = 7;
    }
    if (_this.decideTheMainShape[0] == 0) {
      _this.makeCubeBoxes();
    } else {
      _this.makeCuboidBoxes();
    }
  },
  makeCubeBoxes: function () {
    //  console.log("makeCubeBoxes");
    _this.yellowBoxGrp = _this.add.group();
    if (_this.shapeno == 1) {
      posx = [524 + 143, 524, 524 + 71.5, 524 + 143, 524 + 71.5 * 3, 524 + 143]; //524 + 143, 524, 524 + 71.5, 524 + 143, 524 + 71.5 * 3, 524 + 143
      posy = [224 - 71, 224, 224, 224, 224, 224 + 71];
      _this.top = 1;
      _this.bottom = 3;
      scalex = [0.98, 0.99, 0.99, 0.99, 0.99, 0.98];
      scaley = [1, 1, 1, 1, 1, 1];
    }
    if (_this.shapeno == 2) {
      posx = [524 + 71.5, 524, 524 + 71.5, 524 + 143, 524 + 71.5 * 3, 524];
      posy = [224 - 73, 224, 224, 224, 224, 223.5 + 71];
      _this.top = 1;
      _this.bottom = 3;
      scalex = [0.98, 0.99, 0.99, 0.99, 0.99, 0.98];
      scaley = [1, 1, 1, 1, 1, 1.01];
    }
    if (_this.shapeno == 3) {
      posx = [524 + 71.5 * 3, 524, 524 + 71.5, 524 + 143, 524 + 71.5 * 3, 524];
      posy = [224 - 73, 224.5, 224.5, 224.5, 224.5, 223.5 + 71];
      _this.top = 1;
      _this.bottom = 3;
      scalex = [0.98, 0.99, 0.99, 0.99, 0.99, 0.98];
      scaley = [1, 1, 1, 1, 1, 1.01];
    }
    if (_this.shapeno == 4) {
      posx = [524 + 71.5 * 2, 524, 524 + 71.5, 524 + 143, 524 + 71.5 * 3, 524];
      posy = [224 - 71, 224, 224, 224, 224, 223.5 + 71];
      _this.top = 1;
      _this.bottom = 3;
      scalex = [0.98, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [1, 1, 1, 1, 1, 1.01];
    }
    if (_this.shapeno == 5) {
      posx = [
        524,
        524 + 71.5,
        524 + 71.5,
        524 + 143,
        524 + 71.5 * 3,
        524 + 143,
      ];
      posy = [223 - 73, 223 - 73, 224, 224, 224, 224 + 71];
      _this.top = 0;
      _this.bottom = 3;
      scalex = [0.98, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [1, 1, 1, 1, 1, 1];
    }
    if (_this.shapeno == 6) {
      posx = [
        524,
        524 + 71.5,
        524 + 71.5,
        524 + 143,
        524 + 71.5 * 3,
        524 + 71.5 * 3,
      ];
      posy = [222 - 71, 222 - 71, 224, 224, 224, 224 + 73];
      _this.top = 0;
      _this.bottom = 3;
      scalex = [0.98, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [1, 1, 1, 1, 1, 1];
    }
    if (_this.shapeno == 7) {
      // posx = [524, 524 + 71.5, 524 + 71.5, 524 + 143, 524 + 71.5 * 3, 524 + 71.5]
      // posy = [224 - 71.5 - 3, 224 - 71.5 - 3, 224, 224, 224, 224 + 71.5 + 3]
      posx = [
        524,
        524 + 71.5,
        524 + 71.5,
        524 + 143,
        524 + 71.5 * 3,
        524 + 71.5,
      ];
      posy = [
        224 - 71.5 - 1.5,
        224 - 71.5 - 1.5,
        224,
        224,
        224,
        224 + 71.5 + 1.5,
      ];
      _this.top = 0;
      _this.bottom = 4;
      scalex = [0.98, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [1, 1, 1, 1, 1, 1];
    }
    if (_this.shapeno == 8) {
      posx = [
        523,
        523 + 71.5,
        522 + 71.5,
        522 + 143,
        522 + 143,
        527 + 71.5 * 3,
      ];
      posy = [224 - 71.5 - 1, 224 - 71.5 - 1, 225, 225, 224 + 71, 224.5 + 71];
      // posx = [523, 523 + 71.5, 524 + 71.5, 524 + 143, 524 + 143, 525 + 71 * 3]
      // posy = [224 - 71.5 - 1, 224 - 71.5 - 1, 224, 224, 226 + 71, 224 + 71.5 + 2]
      _this.top = 0;
      _this.bottom = 3;
      scalex = [0.98, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [0.99, 0.99, 0.99, 0.99, 1.01, 1.01];
    }
    if (_this.shapeno == 9) {
      posx = [
        485,
        485 + 72,
        485 + 72 * 2,
        485 + 72 * 2,
        485.5 + 72 * 3 + 2,
        485.5 + 72 * 4 + 4,
      ];
      posy = [187, 187, 187, 190 + 71, 190 + 71, 190 + 71];
      // posx = [485.5, 485.5 + 72, 485.5 + 72 * 2, 485.5 + 72 * 2, 485.5 + 72 * 3, 485.5 + 72 * 4 ]
      // posy = [187, 187, 187, 190 + 70, 190 + 70, 190 + 70]
      _this.top = 0;
      _this.bottom = 2;
      scalex = [0.99, 0.985, 0.98, 0.97, 0.97, 0.97];
      scaley = [1, 1, 1, 1, 1, 1];
    }
    if (_this.shapeno == 10) {
      posx = [
        524 + 71.5 * 2,
        524 + 71.5 * 2,
        523 + 71.5 * 1,
        523 + 71.5 * 2,
        523 + 71.5,
        523 + 71.5,
      ];
      posy = [
        221 - 71 * 2,
        224 - 71 * 1,
        225.5,
        226,
        225.5 + 71.5,
        223.5 + 71.5 * 2 + 2,
      ];
      _this.top = 2;
      _this.bottom = 5;
      scalex = [0.98, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [1, 1, 1.02, 1.02, 1.02, 1.02];
    }
    if (_this.shapeno == 11) {
      posx = [
        558.5 + 144,
        559.5,
        559.5 + 71.5,
        558.5 + 144,
        560.5 + 71.5,
        560.5 + 71.5,
      ];
      posy = [
        258 - 71 * 2,
        257 - 71.5 * 1,
        211 - 25,
        211 - 25,
        211 - 23 + 71.5,
        209 - 19 + 71.5 * 2,
      ];
      _this.top = 1;
      _this.bottom = 3;
      scalex = [0.98, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [1.01, 1, 1, 1, 1, 1];
    }
    if (_this.shapeno == 12) {
      posx = [
        561.5 + 71.5,
        557,
        561.5 + 71.5,
        561.5 + 71.5,
        560.5 + 143,
        561.5 + 71.5,
      ];
      posy = [
        260 - 71.5 * 2,
        260 - 71.5,
        260 - 71.5,
        212 - 24 + 71.5,
        211 - 23 + 71.5,
        209 - 21 + 71.5 * 2,
      ];
      _this.top = 0;
      _this.bottom = 3;
      scalex = [0.97, 0.98, 0.97, 0.97, 0.97, 0.97];
      scaley = [1.02, 1, 1.01, 1.01, 1.01, 1.01];
    }
    if (_this.shapeno == 13) {
      posx = [560 + 71.5, 560 + 71.5, 560, 560 + 71.5, 560 + 143, 560 + 71.5];
      posy = [260 - 71.5 * 2, 260 - 71.5, 260, 260, 260, 260 + 71.5];
      _this.top = 0;
      _this.bottom = 3;
      scalex = [0.98, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [1.02, 1.02, 1.02, 1.02, 1.02, 1.02];
    }
    if (_this.shapeno == 14) {
      posx = [
        561.5 + 71.5 * 2,
        560.5 + 71.5,
        560.5 + 71.5 * 2,
        560.5 + 71.5,
        560.5,
        560.5 + 71.5,
      ];
      posy = [
        259 - 71.5 * 2,
        261 - 71.5,
        261 - 71.5,
        261,
        261 + 71.5,
        261 + 71.5,
      ];
      _this.top = 1;
      _this.bottom = 5;
      scalex = [0.975, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [1, 1.02, 1.02, 1.02, 1, 1];
    }
    if (_this.shapeno == 15) {
      posx = [
        561 + 71.5 * 2,
        560.5 + 71.5,
        560.5 + 71.5 * 2,
        557.5,
        561.5 + 71.5,
        557.5,
      ];
      posy = [258 - 71.5 * 2, 258 - 71.5, 258 - 71.5, 261, 261, 261 + 71.5]; //[258 - 71.5 * 2, 258 - 71.5, 258 - 71.5, 261, 261, 261 + 71.5]
      _this.top = 2;
      _this.bottom = 3;
      scalex = [0.98, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [1.01, 1.01, 1.01, 1.01, 1.01, 1.01];
    }
    if (_this.shapeno == 16) {
      posx = [
        563 + 71.5 * 2,
        559.5 + 71.5,
        563 + 71.5 * 2,
        556,
        559.5 + 71.5,
        559.5 + 71.5,
      ];
      posy = [258 - 71.5 * 2, 261.5 - 71.5, 261 - 71.5, 261, 261, 261 + 71];
      _this.top = 1;
      _this.bottom = 5;
      scalex = [0.98, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [1, 1, 1, 1, 1, 1];
    }
    if (_this.shapeno == 17) {
      posx = [
        558,
        558 + 71.5,
        558 + 71.5,
        562 + 71.5 * 2,
        558 + 71.5,
        558 + 71.5,
      ];
      posy = [
        260 - 71.5 * 2,
        260 - 71.5 * 2,
        260 - 71.5,
        260 - 71.5,
        259.5,
        259.5 + 71,
      ];
      _this.top = 1;
      _this.bottom = 4;
      scalex = [0.98, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [1.02, 1.02, 1.01, 1, 1.01, 1];
    }
    if (_this.shapeno == 18) {
      posx = [
        558,
        558 + 71.5,
        558 + 71.5,
        558 + 71.5,
        558 + 71.5,
        562 + 71.5 * 2,
      ];
      posy = [
        260 - 71.5 * 2,
        260 - 71.5 * 2,
        260 - 71.5,
        260,
        260 + 71.5,
        260 + 71.5,
      ];
      _this.top = 1;
      _this.bottom = 3;
      scalex = [0.98, 0.98, 0.98, 0.98, 0.98, 0.98];
      scaley = [1.01, 1.01, 1.01, 1.01, 1.01, 1.01];
    }

    for (i = 0; i < 6; i++) {
      yellowBox = _this.add.sprite(posx[i], posy[i], "yellowBox3B");
      yellowBox.scale.setTo(scalex[i], scaley[i]); //1.55,1.09//1.62, 1.12
      _this.yellowBoxGrp.addChild(yellowBox);
      // enable input and make visible false initally
      yellowBox.alpha = 0;
      yellowBox.inputEnabled = true;
      yellowBox.input.useHandCursor = true;
      yellowBox.events.onInputDown.add(_this.shapeClicked1, _this);
    }
  },
  makeCuboidBoxes: function () {
    //  console.log("makeCuboidBoxes");
    _this.yellowBoxGrp = _this.add.group();

    // _this.shapeno = 18;
    if (_this.shapeno == 1) {
      posx = [622, 559, 559 + 63, 559 + 63 + 44, 559 + 63 * 2 + 45, 559 + 63];
      posy = [128, 192, 192, 192, 192, 327];
      shape = [
        "yellowBox3",
        "yellowBox1",
        "yellowBox2",
        "yellowBox1",
        "yellowBox2",
        "yellowBox3",
      ];
      scalex = [1, 1, 1, 1, 1, 1];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 1;
      _this.bottom = 3;
    }
    if (_this.shapeno == 2) {
      posx = [622, 559, 559 + 63, 559 + 63 + 44, 559 + 63 * 2 + 45, 559];
      posy = [128 + 9, 192 + 9, 192 + 9, 192 + 9, 192 + 9, 327 + 9];
      shape = [
        "yellowBox3",
        "yellowBox1",
        "yellowBox2",
        "yellowBox1",
        "yellowBox2",
        "yellowBox3A",
      ];
      scalex = [1, 1, 1, 1, 1, 0.98];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 1;
      _this.bottom = 3;
    }
    if (_this.shapeno == 3) {
      posx = [666, 559, 559 + 63, 559 + 63 + 44, 559 + 63 * 2 + 45, 559];
      posy = [149, 192, 192, 192, 192, 327];
      shape = [
        "yellowBox3A",
        "yellowBox1",
        "yellowBox2",
        "yellowBox1",
        "yellowBox2",
        "yellowBox3A",
      ];
      scalex = [1, 1, 1, 1, 1, 0.98];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 1;
      _this.bottom = 3;
    }
    if (_this.shapeno == 4) {
      posx = [523.5, 559 + 63 + 35, 559 + 63 + 35, 701, 765, 765];
      posy = [128, 128, 192, 192, 192, 327];
      shape = [
        "yellowBox1hr",
        "yellowBox3",
        "yellowBox2",
        "yellowBox1",
        "yellowBox2",
        "yellowBox3",
      ];
      scalex = [1, 1, 1, 1, 1, 1];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 0;
      _this.bottom = 3;
    }
    if (_this.shapeno == 5) {
      posx = [513.5, 513.5 + 44, 513.5 + 44, 621, 755.5, 513.5 + 44];
      posy = [103, 103, 238, 238, 238, 282];
      shape = [
        "yellowBox2",
        "yellowBox1",
        "yellowBox3A",
        "yellowBox2hr",
        "yellowBox3A",
        "yellowBox1",
      ]; //
      scalex = [1, 1, 1, 1, 1, 1];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 1;
      _this.bottom = 5;
    }
    if (_this.shapeno == 6) {
      posx = [513.5, 513.5 + 135, 513.8 + 135, 713, 755, 513.5 + 135];
      posy = [148.5, 148.5, 191.5, 191.5, 191.5, 327];
      shape = [
        "yellowBox2hr",
        "yellowBox3A",
        "yellowBox1",
        "yellowBox2",
        "yellowBox1",
        "yellowBox3A",
      ];
      scalex = [1, 1, 1, 1, 1, 1];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 2;
      _this.bottom = 4;
    }
    if (_this.shapeno == 7) {
      posx = [
        489,
        551,
        551 + 128,
        551 + 128,
        551 + 128 + 63,
        551 + 128 + 63 + 42,
      ];
      posy = [174, 174, 174, 217, 217, 217];
      shape = [
        "yellowBox3A",
        "yellowBox2hr",
        "yellowBox3A",
        "yellowBox1",
        "yellowBox2",
        "yellowBox1",
      ];
      scalex = [1, 0.95, 0.98, 0.98, 1, 1];
      scaley = [1, 1, 1, 0.95, 0.95, 0.95];
      _this.top = 3;
      _this.bottom = 5;
    }
    if (_this.shapeno == 8) {
      posx = [
        478.5,
        478.5 + 135,
        478.5 + 135,
        478.5 + 135 + 44,
        478.5 + 135 + 44,
        721,
      ];
      posy = [138.5, 138.5, 203, 203, 338, 337.8];
      shape = [
        "yellowBox1hr",
        "yellowBox3",
        "yellowBox2",
        "yellowBox1",
        "yellowBox3A",
        "yellowBox2hr",
      ];
      scalex = [1, 0.98, 1, 1, 1, 1];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 0;
      _this.bottom = 3;
    }
    if (_this.shapeno == 9) {
      posx = [
        501,
        545,
        545 + 135,
        545 + 135,
        545 + 135 + 44,
        545 + 135 + 64 + 44,
      ];
      posy = [161, 161, 161, 222, 222, 222];
      shape = [
        "yellowBox3",
        "yellowBox1hr",
        "yellowBox3",
        "yellowBox2",
        "yellowBox1",
        "yellowBox2",
      ];
      scalex = [1, 1, 1, 1, 1, 1];
      scaley = [0.95, 0.95, 0.95, 1, 1, 1];
      _this.top = 1;
      _this.bottom = 4;
    }
    if (_this.shapeno == 10) {
      posx = [556, 556 + 44, 556 + 44, 556 + 44, 556 + 135 + 44, 556 + 44];
      posy = [151.5, 151.5, 214.5, 259, 260, 324];
      shape = [
        "yellowBox3",
        "yellowBox1hr",
        "yellowBox2hr",
        "yellowBox1hr",
        "yellowBox3",
        "yellowBox2hr",
      ];
      scalex = [1, 1, 1, 1, 1, 1];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 1;
      _this.bottom = 3;
    }
    if (_this.shapeno == 11) {
      posx = [578 + 135, 578 + 135, 578, 578 + 135, 578, 578];
      posy = [
        74.5,
        137.5,
        136 + 137,
        136 + 137,
        136 + 135 + 64,
        136 + 135 + 64 + 44,
      ];
      shape = [
        "yellowBox3",
        "yellowBox2",
        "yellowBox1hr",
        "yellowBox3",
        "yellowBox2hr",
        "yellowBox1hr",
      ];
      scalex = [0.95, 0.95, 1, 0.95, 1, 1];
      scaley = [0.98, 1, 1, 0.97, 1, 1];
      _this.top = 2;
      _this.bottom = 5;
    }
    if (_this.shapeno == 12) {
      posx = [546 + 44 + 135, 546 + 44, 546 + 44 + 135, 546, 546 + 44, 546];
      posy = [71, 71 + 135, 71 + 135, 71 + 135 + 44, 71 + 135 + 44, 312];
      shape = [
        "yellowBox1",
        "yellowBox2hr",
        "yellowBox3A",
        "yellowBox3",
        "yellowBox1hr",
        "yellowBox2",
      ];
      scalex = [0.97, 1, 0.97, 1, 1, 1];
      scaley = [1, 1, 1, 1, 0.97, 1];
      _this.top = 0;
      _this.bottom = 4;
    }
    if (_this.shapeno == 13) {
      posx = [
        535.5 + 44 + 155,
        535.5 + 64,
        546 + 44 + 145,
        535.5 + 64,
        535.5,
        535.5 + 64,
      ];
      posy = [116, 116 + 135, 116 + 135, 116 + 135 + 44, 312 + 47, 312 + 47];
      shape = [
        "yellowBox1",
        "yellowBox2hr",
        "yellowBox3A",
        "yellowBox1hr",
        "yellowBox3A",
        "yellowBox2hr",
      ];
      scalex = [0.97, 1, 0.97, 1, 1, 1];
      scaley = [1, 1, 1, 1, 0.97, 0.97];
      _this.top = 0;
      _this.bottom = 3;
    }
    if (_this.shapeno == 14) {
      posx = [
        535.5 + 64,
        535.5,
        535.5 + 64,
        535.5 + 64 + 135,
        535.5 + 64,
        535.5 + 64,
      ];
      posy = [151.5, 215.5, 215.5, 215.5, 260, 324];
      shape = [
        "yellowBox1hr",
        "yellowBox3A",
        "yellowBox2hr",
        "yellowBox3A",
        "yellowBox1hr",
        "yellowBox2hr",
      ];
      scalex = [1, 1, 1, 1, 1, 1];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 0;
      _this.bottom = 4;
    }
    if (_this.shapeno == 15) {
      posx = [
        510.5 + 135,
        510.5 + 135,
        510.5,
        510.5 + 135,
        510.5 + 135 + 44,
        510.5,
      ];
      posy = [
        106,
        106 + 64,
        106 + 64 + 135,
        106 + 64 + 135,
        106 + 64 + 135,
        106 + 64 + 135 + 63,
      ];
      shape = [
        "yellowBox3",
        "yellowBox2",
        "yellowBox1hr",
        "yellowBox3",
        "yellowBox1hr",
        "yellowBox2hr",
      ];
      scalex = [1, 1, 1, 1, 1, 1];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 2;
      _this.bottom = 4;
    }
    if (_this.shapeno == 16) {
      posx = [568 + 134, 568 + 134, 567, 568 + 134, 567, 567];
      posy = [94, 137.5, 136 + 137, 136 + 137, 317, 381];
      shape = [
        "yellowBox3A",
        "yellowBox1",
        "yellowBox2hr",
        "yellowBox3A",
        "yellowBox1hr",
        "yellowBox2hr",
      ];
      scalex = [1, 0.99, 1, 1, 1, 1];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 1;
      _this.bottom = 4;
    }
    if (_this.shapeno == 17) {
      posx = [
        546 + 44 + 145,
        556,
        546 + 54,
        546 + 44 + 145,
        546 + 54,
        546 + 54,
      ];
      posy = [
        106,
        106 + 135,
        106 + 135,
        106 + 135,
        106 + 135 + 64,
        106 + 135 + 64 + 44,
      ];
      shape = [
        "yellowBox2",
        "yellowBox3",
        "yellowBox1hr",
        "yellowBox3",
        "yellowBox2hr",
        "yellowBox1hr",
      ];
      scalex = [0.95, 0.99, 1, 0.95, 1, 1];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 2;
      _this.bottom = 5;
    }
    if (_this.shapeno == 18) {
      posx = [546, 546 + 44, 546 + 44, 546 + 44 + 135, 546 + 44, 546 + 44];
      posy = [151.5, 151.5, 215.5, 215.5, 260, 324];
      shape = [
        "yellowBox3",
        "yellowBox1hr",
        "yellowBox2hr",
        "yellowBox3A",
        "yellowBox1hr",
        "yellowBox2hr",
      ];
      scalex = [1, 1, 1, 1, 1, 1];
      scaley = [1, 1, 1, 1, 1, 1];
      _this.top = 1;
      _this.bottom = 4;
    }
    for (i = 0; i < 6; i++) {
      yellowBox = _this.add.sprite(posx[i], posy[i], shape[i]);
      yellowBox.scale.setTo(scalex[i], scaley[i]);
      _this.yellowBoxGrp.addChild(yellowBox);
      yellowBox.alpha = 0;
      yellowBox.inputEnabled = true;
      yellowBox.input.useHandCursor = true;
      yellowBox.events.onInputDown.add(_this.shapeClicked1, _this);
      // enable input and make visible false initally
    }
  },
  shapeClicked1: function (target) {
    //  console.log("shapeClicked1");
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();
    target.visible = true;
    if (target.alpha == 0) target.alpha = 1;
    else target.alpha = 0;
  },
  shapeClicked2: function (target) {
    //  console.log("shapeClicked2");
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();
    x = target.x + target.width / 2;
    y = target.y + target.height / 2;
    if (_this.decideTheMainShape[0] == 0) val = _this.area1;
    else {
      if (
        target.key.includes("yellowBox3") ||
        target.key.includes("yellowBox3A")
      )
        val = _this.area3;
      else if (target.key.includes("yellowBox2")) val = _this.area2;
      else val = _this.area1;
    }
    //  console.log(_this.area1, "area1");
    //  console.log(_this.area2, "area2");
    //  console.log(_this.area3, "area3");
    if (!target.textSelected) {
      textBox = _this.add.text(x, y, val);
      textBox.x -= textBox.width / 2;
      textBox.y -= textBox.height / 2;
      target.textSelected = true;
      _this.applyingStyleGn(textBox);
      _this.textgroup.addChild(textBox);
    }
  },
  countColoredBoxes: function () {
    //  console.log("countColoredBoxes");
    count = 0;
    _this.yellowBoxGrp.forEach((element) => {
      if (element.alpha == 1) count++;
    });
    if (_this.totalSurf == true) {
      return count == 6;
    } else
      return (
        count == 4 &&
        _this.yellowBoxGrp.getChildAt(_this.top).alpha != 1 &&
        _this.yellowBoxGrp.getChildAt(_this.bottom).alpha != 1
      );
  },
  countTappedBoxes: function () {
    //  console.log("countTappedBoxes");
    if (_this.totalSurf == true) {
      return _this.textgroup.children.length == 6;
    } else return _this.textgroup.children.length == 4;
  },
  rightbtnClicked: function () {
    //  console.log("rightbtnClicked");
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();
    _this.tickBtn.frame = 1;

    if (_this.part1 == true) {
      //  console.log("_this.part1 == true");
      if (
        _this.selectedNet &&
        _this.selectedNet.name &&
        _this.selectedNet.name == _this.shapeName
      ) {
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
        _this.showBiggerNet();
        _this.part1 = false;
        _this.part2 = true;
      } else {
        _this.noofAttempts++;
        _this.wrongans.play();
        _this.optionPanel1.frame = 0;
        _this.optionPanel2.frame = 0;
        _this.optionPanel3.frame = 0;
        _this.optionPanel4.frame = 0;
        _this.selectedNet = "";
      }
    } else if (_this.part2 == true) {
      //  console.log("_this.part2 == true");
      if (_this.countColoredBoxes()) {
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
        _this.part2 = false;
        _this.part3 = true;
        _this.stopAllSounds();
        _this.Question_flag = 6;
        _this.Ask_Question6.play();
        _this.textgroup = _this.add.group();
        _this.yellowBoxGrp.forEach((element) => {
          element.events.onInputDown.removeAll();
          element.input.useHandCursor = false;
          if (element.alpha == 1) {
            element.inputEnabled = true;
            element.input.useHandCursor = true;
            element.events.onInputDown.add(_this.shapeClicked2, _this);
          }
        });
      } else {
        _this.noofAttempts++;
        _this.wrongans.play();
        _this.yellowBoxGrp.forEach((element) => {
          element.alpha = 0;
        });
      }
    } else if (_this.part3 == true) {
      //  console.log("_this.part3 == true");
      if (_this.countTappedBoxes()) {
        _this.counterCelebrationSound.play();
        _this.part3 = false;
        _this.part4 = true;
        _this.tickBtn.destroy();
        _this.stopAllSounds();
        if (_this.totalSurf == true) {
          _this.Question_flag = 3;
          _this.Ask_Question3.play();
        } else {
          _this.Question_flag = 8;
          _this.Ask_Question8.play();
        }
        _this.yellowBoxGrp.forEach((element) => {
          element.events.onInputDown.removeAll();
        });
        _this.AnswerBox = _this.add.image(30, 82, "answerBox");
        _this.AnswerBox.scale.setTo(0.8, 1);
        _this.PText = _this.add.text(55, 100, " A  = ");
        _this.applyingStyle(_this.PText);
        _this.addNumberPad();
      } else {
        _this.noofAttempts++;
        _this.wrongans.play();
        _this.textgroup.destroy();
        _this.textgroup = _this.add.group();
        _this.yellowBoxGrp.forEach((element) => {
          element.textSelected = false;
        });
      }
    }
    _this.time.events.add(500, () => {
      _this.tickBtn.frame = 0;
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
        142,
        20,
        "" + var_selectedAns1 + var_selectedAns2,
        { fontSize: "30px" }
      );
    else
      _this.enterTxt = _this.add.text(
        137,
        20,
        "" + var_selectedAns1 + var_selectedAns2,
        { fontSize: "30px" }
      );
    _this.enterTxt.align = "right";
    _this.enterTxt.font = "Akzidenz-Grotesk BQ";
    _this.enterTxt.fill = "#65B4C3";
    _this.enterTxt.fontWeight = "normal";
    _this.AnswerBox.addChild(_this.enterTxt);
    _this.enterTxt.scale.setTo(1.1, 1);
    _this.enterTxt.visible = true;
    _this.AnswerBox.name = Number("" + var_selectedAns1 + var_selectedAns2);
  },
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
    _this.AnswerBox.removeChild(_this.enterTxt);

    _this.enterTxt.destroy();
    _this.enterTxt;
    _this.enterTxt.text = "";
    // _this.AnswerBox.name = '';
  },
  rightbtnClicked1: function (target) {
    //  console.log("rightbtnClicked1");
    _this.clickSound.currentTime = 0;
    _this.clickSound.play();

    if (_this.part4 == true) {
      //  console.log("_this.part4 == true");
      if (
        (Number("" + _this.selectedAns1 + _this.selectedAns2) ==
          2 * _this.area1 + 2 * _this.area2 + 2 * _this.area3 &&
          _this.totalSurf == true) ||
        (Number("" + _this.selectedAns1 + _this.selectedAns2) ==
          2 * _this.area2 + 2 * _this.area3 &&
          _this.totalSurf != true)
      ) {
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
        _this.numGroup.destroy();
        _this.numpad = 0;
        _this.part4 = false;
        _this.stopAllSounds();
        if (_this.totalSurf == true) {
          _this.eraseScreen();
          _this.totalSurf = false;
          _this.prevAns = _this.mainShape;
          _this.prevtype = _this.decideTheMainShape[0];
          _this.prevShape = _this.shapeName;
          _this.clearTotalSurf();
          _this.part1 = true;
          _this.StoreArrayValues();
          _this.InitialScreen();
        } else {
          _this.correctAns();
        }
      } else {
        _this.noofAttempts++;
        _this.wrongans.play();
        _this.eraseScreen();
      }
    }
  },

  clearTotalSurf: function () {
    _this.numGroup.destroy();
    _this.numpad = 0;
    _this.mainShapesprite.destroy();
    _this.panle1.destroy();
    _this.panle2.destroy();
    _this.yellowBoxGrp.destroy();
    _this.textgroup.destroy();
    _this.AnswerBox.destroy();
    _this.biggerNetShape.destroy();
    _this.PText.destroy();
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
    target.fontSize = "24px";
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
    } else {
      // _this.celebrationSound.play();
      // _this.starActions(_this.count1);
      _this.time.events.add(2000, _this.clearTotalSurf);
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
      "questionSounds/GMM-02-G8/" +
      _this.languageSelected +
      "/GMM_02_G8_a1.mp3"
    );
    _this.demoAudio1.appendChild(_this.demoAudio1src);

    _this.demoAudio2 = document.createElement("audio");
    _this.demoAudio2src = document.createElement("source");
    _this.demoAudio2src.setAttribute(
      "src",
      window.baseUrl +
      "questionSounds/GMM-02-G8/" +
      _this.languageSelected +
      "/GMM_02_G8_a1.mp3"
    );
    _this.demoAudio2.appendChild(_this.demoAudio2src);

    // QUESTION AUDIOS
    _this.q1Sound = document.createElement("audio");
    _this.q1Soundsrc = document.createElement("source");
    _this.q1Soundsrc.setAttribute(
      "src",
      window.baseUrl +
      "questionSounds/GMM-02-G8/" +
      _this.languageSelected +
      "/GMM_02_G8_a1.mp3"
    );
    _this.q1Sound.appendChild(_this.q1Soundsrc);

    _this.q2Sound = document.createElement("audio");
    _this.q2Soundsrc = document.createElement("source");
    _this.q2Soundsrc.setAttribute(
      "src",
      window.baseUrl +
      "questionSounds/GMM-02-G8/" +
      _this.languageSelected +
      "/GMM_02_G8_a1.mp3"
    );
    _this.q2Sound.appendChild(_this.q2Soundsrc);

    _this.q3Sound = document.createElement("audio");
    _this.q3Soundsrc = document.createElement("source");
    _this.q3Soundsrc.setAttribute(
      "src",
      window.baseUrl +
      "questionSounds/GMM-02-G8/" +
      _this.languageSelected +
      "/GMM_02_G8_a1.mp3"
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
      //  console.log("removing the demo audio1");
      _this.demoAudio1.pause();
      _this.demoAudio1 = null;
      _this.demoAudio1src = null;
    }

    if (_this.demoAudio2) {
      //  console.log("removing the demo audio1");
      _this.demoAudio2.pause();
      _this.demoAudio2 = null;
      _this.demoAudio2src = null;
    }

    if (_this.q1Sound) {
      //  console.log("removing the q1");
      _this.q1Sound.pause();
      _this.q1Sound = null;
      _this.q1Soundsrc = null;
    }

    if (_this.q2Sound) {
      //  console.log("removing the q2");
      _this.q2Sound.pause();
      _this.q2Sound = null;
      _this.q2Soundsrc = null;
    }

    if (_this.q3Sound) {
      //  console.log("removing the q3");
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
    //     //  console.log("inside demoAudio1sound.....")
    //     _this.demoVideo_1.playbackRate = 0;     //* pausing the video after 4sec
    //     clearTimeout(_this.demoAudio1Timer);         //* clear the time once its used.
    //     _this.demoAudio1.play();
    // }, 4000);
    // _this.demoVideo1PauseTimer = setTimeout(function () {
    //     //  console.log("inside demoAudio1sound.....")
    //     _this.demoVideo_1.playbackRate = 1;  //* resuming the video after 9 sec
    //     clearTimeout(_this.demoVideo1PauseTimer);
    // }, 9000);
    // _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1 after 11 seconds.
    // {
    //     //  console.log("inside q1sound.....")
    //     clearTimeout(_this.q1Timer);         //* clear the time once its used.
    //     _this.q1Sound.play();
    // }, 11000);
    // _this.demoAudio2Timer = setTimeout(function ()    //* demo audio2 js timer to play demo audio2 after 10 seconds.
    // {
    //     //  console.log("inside demoau2sound.....")
    //     clearTimeout(_this.demoAudio2Timer);         //* clear the time once its used.
    //     _this.demoAudio2.play();
    // }, 19000);
    // _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2 after 15 seconds.
    // {
    //     //  console.log("inside q2sound.....")
    //     clearTimeout(_this.q2Timer);         //* clear the time once its used.
    //     _this.q2Sound.play();
    // }, 24000);
    // _this.demoVideo_1.onComplete.add(function () {
    //     //  console.log("audio2 ended - pause video1");
    //     _this.demoVideo_2 = _this.add.video('ML1_2');
    //     _this.demoVideo_2.play(false);
    //     _this.demoVideo_2.changeSource("demoVideos/ML1-G7_2.mp4");  //* phaser needs this.to run in mobile
    //     _this.video_playing = 2;
    //     _this.videoWorld_2 = _this.demoVideo_2.addToWorld();
    //     _this.skip.bringToTop();
    //     _this.q3Sound.play();
    //     _this.demoVideo_2.onComplete.add(function () {
    //         //  console.log("demovideo 2 completed......!!!1")
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
