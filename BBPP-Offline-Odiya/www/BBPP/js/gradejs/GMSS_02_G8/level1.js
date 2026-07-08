Game.GMSS_02_G8level1 = function () { };

Game.GMSS_02_G8level1.prototype = {
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
    } //
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

    _this.wrongans = document.createElement("audio");
    _this.wronganssrc = document.createElement("source");
    _this.wronganssrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
    _this.wrongans.appendChild(_this.wronganssrc);

    _this.wrongSound = document.createElement("audio");
    _this.wrongSoundsrc = document.createElement("source");
    _this.wrongSoundsrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
    _this.wrongSound.appendChild(_this.wrongSoundsrc);

    // _this.snapSound = document.createElement('audio');
    // _this.snapSoundsrc = document.createElement('source');
    // _this.snapSoundsrc.setAttribute("src", window.baseUrl + "sounds/snapSound.mp3");
    // _this.snapSound.appendChild(_this.snapSoundsrc);

    _this.framechange = document.createElement("audio");
    _this.framechangesrc = document.createElement("source");
    _this.framechangesrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
    _this.framechange.appendChild(_this.framechangesrc);

    _this.Ask_Question1 = _this.createAudio("GMSS_02_G8_a1");
    _this.Ask_Question2 = _this.createAudio("GMSS_02_G8_a2");
    _this.Ask_Question3 = _this.createAudio("GMSS_02_G8_a3");
    _this.Ask_Question4 = _this.createAudio("GMSS_02_G8_a4");

    _this.Ask_Question5 = _this.createAudio("GMSS_02_G8_a11"); // 3rd question
    _this.Ask_Question28 = _this.createAudio("GMSS_02_G8_a9"); // 3rd question
    _this.Ask_Question29 = _this.createAudio("GMSS_02_G8_a12"); // 3rd question
    _this.Ask_Question30 = _this.createAudio("GMSS_02_G8_a41"); // 3rd question 2p

    _this.Ask_Question39 = _this.createAudio("GMSS_02_G8_a10"); // 3rd question
    _this.Ask_Question40 = _this.createAudio("GMSS_02_G8_a42"); // 3rd question
    _this.Ask_Question41 = _this.createAudio("GMSS_02_G8_a43"); // 3rd question
    _this.Ask_Question42 = _this.createAudio("GMSS_02_G8_a44"); // 3rd question 1p

    _this.Ask_Question6 = _this.createAudio("GMSS_02_G8_a5"); // 2nd question
    _this.Ask_Question7 = _this.createAudio("GMSS_02_G8_a6"); // 2nd question

    _this.Ask_Question8 = _this.createAudio("GMSS_02_G8_a71"); // 4th question
    _this.Ask_Question21 = _this.createAudio("GMSS_02_G8_a7"); // 4th question
    _this.Ask_Question22 = _this.createAudio("GMSS_02_G8_a72"); // 4th question
    _this.Ask_Question23 = _this.createAudio("GMSS_02_G8_a73"); // 4th question //1p

    _this.Ask_Question24 = _this.createAudio("GMSS_02_G8_a74"); // 4th question
    _this.Ask_Question25 = _this.createAudio("GMSS_02_G8_a75"); // 4th question
    _this.Ask_Question26 = _this.createAudio("GMSS_02_G8_a76"); // 4th question
    _this.Ask_Question27 = _this.createAudio("GMSS_02_G8_a77"); // 4th question//2p

    _this.Ask_Question10 = _this.createAudio("GMSS_02_G8_a52"); // 2ndth question //map3
    _this.Ask_Question11 = _this.createAudio("GMSS_02_G8_a51"); // 2ndth question //map2
    _this.Ask_Question12 = _this.createAudio("GMSS_02_G8_a53"); // 2ndth question //map4 // 1st p

    _this.Ask_Question13 = _this.createAudio("GMSS_02_G8_a54"); // 2ndth question //map1
    _this.Ask_Question14 = _this.createAudio("GMSS_02_G8_a55"); // 2ndth question //map2
    _this.Ask_Question15 = _this.createAudio("GMSS_02_G8_a56"); // 2ndth question //map3
    _this.Ask_Question16 = _this.createAudio("GMSS_02_G8_a57"); // 2ndth question //map4 //2nd p

    _this.Ask_Question17 = _this.createAudio("GMSS_02_G8_a58"); // 2ndth question //map1
    _this.Ask_Question18 = _this.createAudio("GMSS_02_G8_a59"); // 2ndth question //map2
    _this.Ask_Question19 = _this.createAudio("GMSS_02_G8_a59(A)"); // 2ndth question //map3
    _this.Ask_Question20 = _this.createAudio("GMSS_02_G8_a510"); // 2ndth question //map4 //3rd p

    //last question
    _this.Ask_Question31 = _this.createAudio("GMSS_02_G8_a13");
    _this.Ask_Question32 = _this.createAudio("GMSS_02_G8_a131");
    _this.Ask_Question33 = _this.createAudio("GMSS_02_G8_a132");
    _this.Ask_Question34 = _this.createAudio("GMSS_02_G8_a133");

    _this.Ask_Question35 = _this.createAudio("GMSS_02_G8_a138");
    _this.Ask_Question36 = _this.createAudio("GMSS_02_G8_a139");
    _this.Ask_Question37 = _this.createAudio("GMSS_02_G8_a140");
    _this.Ask_Question38 = _this.createAudio("GMSS_02_G8_a141");

    _this.Ask_Question43 = _this.createAudio("GMSS_02_G8_a134");
    _this.Ask_Question44 = _this.createAudio("GMSS_02_G8_a135");
    _this.Ask_Question45 = _this.createAudio("GMSS_02_G8_a136");
    _this.Ask_Question46 = _this.createAudio("GMSS_02_G8_a137");

    _this.Ask_Question47 = _this.createAudio("GMSS_02_G8_a142"); //try another route

    telInitializerbbpp.gameIdInit("GMSS_02_G8", gradeSelected);
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

    _this.IsKeyPressed = false;

    _this.selectedAns11 = "";
    _this.selectedAns21 = "";
    _this.selectedAns31 = "";

    _this.count1 = 0;
    _this.nearestPlace = 0;

    _this.place1 = false;
    _this.place2 = false;
    _this.place3 = false;
    _this.place4 = false;
    _this.place5 = false;
    _this.place6 = false;
    _this.place7 = false;

    _this.canClickUp = false;
    _this.canClickDown = false;
    _this.canClickRight = true;
    _this.canClickLeft = true;

    _this.downClicked = false;

    _this.moveCount = 0;

    _this.distanceTravelled = 0;

    _this.placeCounter = 0;

    _this.pointArray = [];

    _this.counterArray = [];

    _this.unNecessary = _this.add.group();

    _this.reachedDestination = false;

    _this.firstValidation = false;

    _this.counterForTimer = 0;

    _this.speakerbtnClicked = false;
    _this.rightbtn_Clicked = false;

    _this.background = _this.add.tileSprite(
      0,
      0,
      _this.world.width,
      _this.world.height,
      "BG1"
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
        if (_this.Question_flag == 5) {
          _this.Ask_Question5.play();
        }
        if (_this.Question_flag == 6) {
          _this.Ask_Question6.play();
        }
        if (_this.Question_flag == 7) {
          _this.Ask_Question7.play();
        }
        if (_this.Question_flag == 8) {
          _this.Ask_Question8.play();
        }
        if (_this.Question_flag == 9) {
          _this.Ask_Question9.play();
        }
        if (_this.Question_flag == 10) {
          _this.Ask_Question10.play();
        }
        if (_this.Question_flag == 11) {
          _this.Ask_Question11.play();
        }
        if (_this.Question_flag == 12) {
          _this.Ask_Question12.play();
        }
        if (_this.Question_flag == 13) {
          _this.Ask_Question13.play();
        }
        if (_this.Question_flag == 14) {
          _this.Ask_Question14.play();
        }
        if (_this.Question_flag == 15) {
          _this.Ask_Question15.play();
        }
        if (_this.Question_flag == 16) {
          _this.Ask_Question16.play();
        }
        if (_this.Question_flag == 17) {
          _this.Ask_Question17.play();
        }
        if (_this.Question_flag == 18) {
          _this.Ask_Question18.play();
        }
        if (_this.Question_flag == 19) {
          _this.Ask_Question19.play();
        }
        if (_this.Question_flag == 20) {
          _this.Ask_Question20.play();
        }
        if (_this.Question_flag == 21) {
          _this.Ask_Question21.play();
        }
        if (_this.Question_flag == 22) {
          _this.Ask_Question22.play();
        }
        if (_this.Question_flag == 23) {
          _this.Ask_Question23.play();
        }
        if (_this.Question_flag == 24) {
          _this.Ask_Question24.play();
        }
        if (_this.Question_flag == 25) {
          _this.Ask_Question25.play();
        }
        if (_this.Question_flag == 26) {
          _this.Ask_Question26.play();
        }
        if (_this.Question_flag == 27) {
          _this.Ask_Question27.play();
        }
        if (_this.Question_flag == 28) {
          _this.Ask_Question28.play();
        }
        if (_this.Question_flag == 29) {
          _this.Ask_Question29.play();
        }
        if (_this.Question_flag == 30) {
          _this.Ask_Question30.play();
        }
        if (_this.Question_flag == 31) {
          _this.Ask_Question31.play();
        }
        if (_this.Question_flag == 32) {
          _this.Ask_Question32.play();
        }
        if (_this.Question_flag == 33) {
          _this.Ask_Question33.play();
        }
        if (_this.Question_flag == 34) {
          _this.Ask_Question34.play();
        }
        if (_this.Question_flag == 35) {
          _this.Ask_Question35.play();
        }
        if (_this.Question_flag == 36) {
          _this.Ask_Question36.play();
        }
        if (_this.Question_flag == 37) {
          _this.Ask_Question37.play();
        }
        if (_this.Question_flag == 38) {
          _this.Ask_Question38.play();
        }
        if (_this.Question_flag == 39) {
          _this.Ask_Question39.play();
        }
        if (_this.Question_flag == 40) {
          _this.Ask_Question40.play();
        }
        if (_this.Question_flag == 41) {
          _this.Ask_Question41.play();
        }
        if (_this.Question_flag == 42) {
          _this.Ask_Question42.play();
        }
        if (_this.Question_flag == 43) {
          _this.Ask_Question43.play();
        }
        if (_this.Question_flag == 44) {
          _this.Ask_Question44.play();
        }
        if (_this.Question_flag == 45) {
          _this.Ask_Question45.play();
        }
        if (_this.Question_flag == 46) {
          _this.Ask_Question46.play();
        }
        if (_this.Question_flag == 36) {
          _this.Ask_Question36.play();
        }
        if (_this.Question_flag == 37) {
          _this.Ask_Question37.play();
        }
        if (_this.Question_flag == 38) {
          _this.Ask_Question38.play();
        }
        if (_this.Question_flag == 39) {
          _this.Ask_Question39.play();
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

    // //bulb
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
    //     // _this.ViewDemoVideo();
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
      window.baseUrl + "questionSounds/GMSS_02_G8/" + _this.languageSelected + "/" + src + ".mp3"
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

    _this.mapArray = [1, 2, 3, 4];
    Phaser.ArrayUtils.shuffle(_this.mapArray);

    _this.findDirection = [1, 2, 4]; // 1 northern most // 2 western  most // 3 eastern most// 4 southern most
    Phaser.ArrayUtils.shuffle(_this.findDirection);

    _this.InitialScreen();
    _this.questionid = 1;
  },
  stopVoice: function () {
    _this.Ask_Question1.pause();
    _this.Ask_Question1 = null;

    _this.Ask_Question2.pause();
    _this.Ask_Question2 = null;

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
    if (_this.Ask_Question4) {
      _this.Ask_Question4.pause();
      _this.Ask_Question4.currentTime = 0.0;
    }
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
    if (_this.Ask_Question8) {
      _this.Ask_Question8.pause();
      _this.Ask_Question8.currentTime = 0.0;
    }
    if (_this.Ask_Question9) {
      _this.Ask_Question9.pause();
      _this.Ask_Question9.currentTime = 0.0;
    }
    if (_this.Ask_Question10) {
      _this.Ask_Question10.pause();
      _this.Ask_Question10.currentTime = 0.0;
    }
    if (_this.Ask_Question11) {
      _this.Ask_Question11.pause();
      _this.Ask_Question11.currentTime = 0.0;
    }
    if (_this.Ask_Question12) {
      _this.Ask_Question12.pause();
      _this.Ask_Question12.currentTime = 0.0;
    }
    if (_this.Ask_Question13) {
      _this.Ask_Question13.pause();
      _this.Ask_Question13.currentTime = 0.0;
    }
    if (_this.Ask_Question14) {
      _this.Ask_Question14.pause();
      _this.Ask_Question14.currentTime = 0.0;
    }
    if (_this.Ask_Question15) {
      _this.Ask_Question15.pause();
      _this.Ask_Question15.currentTime = 0.0;
    }
    if (_this.Ask_Question16) {
      _this.Ask_Question16.pause();
      _this.Ask_Question16.currentTime = 0.0;
    }
    if (_this.Ask_Question17) {
      _this.Ask_Question17.pause();
      _this.Ask_Question17.currentTime = 0.0;
    }
    if (_this.Ask_Question18) {
      _this.Ask_Question18.pause();
      _this.Ask_Question18.currentTime = 0.0;
    }
    if (_this.Ask_Question19) {
      _this.Ask_Question19.pause();
      _this.Ask_Question19.currentTime = 0.0;
    }
    if (_this.Ask_Question20) {
      _this.Ask_Question20.pause();
      _this.Ask_Question20.currentTime = 0.0;
    }
    if (_this.Ask_Question21) {
      _this.Ask_Question21.pause();
      _this.Ask_Question21.currentTime = 0.0;
    }
    if (_this.Question_flag == 22) {
      _this.Ask_Question22.pause();
      _this.Ask_Question22.currentTime = 0.0;
    }
    if (_this.Question_flag == 23) {
      _this.Ask_Question23.pause();
      _this.Ask_Question23.currentTime = 0.0;
    }
    if (_this.Question_flag == 24) {
      _this.Ask_Question24.pause();
      _this.Ask_Question24.currentTime = 0.0;
    }
    if (_this.Question_flag == 25) {
      _this.Ask_Question25.pause();
      _this.Ask_Question25.currentTime = 0.0;
    }
    if (_this.Question_flag == 26) {
      _this.Ask_Question26.pause();
      _this.Ask_Question26.currentTime = 0.0;
    }
    if (_this.Question_flag == 27) {
      _this.Ask_Question27.pause();
      _this.Ask_Question27.currentTime = 0.0;
    }
    if (_this.Question_flag == 28) {
      _this.Ask_Question28.pause();
      _this.Ask_Question28.currentTime = 0.0;
    }
    if (_this.Question_flag == 29) {
      _this.Ask_Question29.pause();
      _this.Ask_Question29.currentTime = 0.0;
    }
    if (_this.Question_flag == 30) {
      _this.Ask_Question30.pause();
      _this.Ask_Question30.currentTime = 0.0;
    }
    if (_this.Question_flag == 31) {
      _this.Ask_Question31.pause();
      _this.Ask_Question31.currentTime = 0.0;
    }
    if (_this.Question_flag == 32) {
      _this.Ask_Question32.pause();
      _this.Ask_Question32.currentTime = 0.0;
    }
    if (_this.Question_flag == 33) {
      _this.Ask_Question33.pause();
      _this.Ask_Question33.currentTime = 0.0;
    }
    if (_this.Question_flag == 34) {
      _this.Ask_Question34.pause();
      _this.Ask_Question34.currentTime = 0.0;
    }
    if (_this.Question_flag == 35) {
      _this.Ask_Question35.pause();
      _this.Ask_Question35.currentTime = 0.0;
    }
    if (_this.Question_flag == 36) {
      _this.Ask_Question36.pause();
      _this.Ask_Question36.currentTime = 0.0;
    }
    if (_this.Question_flag == 37) {
      _this.Ask_Question37.pause();
      _this.Ask_Question37.currentTime = 0.0;
    }
    if (_this.Question_flag == 38) {
      _this.Ask_Question38.pause();
      _this.Ask_Question38.currentTime = 0.0;
    }
    if (_this.Question_flag == 39) {
      _this.Ask_Question39.pause();
      _this.Ask_Question39.currentTime = 0.0;
    }
    if (_this.Question_flag == 40) {
      _this.Ask_Question40.pause();
      _this.Ask_Question40.currentTime = 0.0;
    }
    if (_this.Question_flag == 41) {
      _this.Ask_Question41.pause();
      _this.Ask_Question41.currentTime = 0.0;
    }
    if (_this.Question_flag == 42) {
      _this.Ask_Question42.pause();
      _this.Ask_Question42.currentTime = 0.0;
    }
    if (_this.Question_flag == 36) {
      _this.Ask_Question36.pause();
      _this.Ask_Question36.currentTime = 0.0;
    }
    if (_this.Question_flag == 37) {
      _this.Ask_Question37.pause();
      _this.Ask_Question37.currentTime = 0.0;
    }
    if (_this.Question_flag == 38) {
      _this.Ask_Question38.pause();
      _this.Ask_Question38.currentTime = 0.0;
    }
    if (_this.Question_flag == 39) {
      _this.Ask_Question39.pause();
      _this.Ask_Question39.currentTime = 0.0;
    }
    if (_this.Question_flag == 43) {
      _this.Ask_Question43.pause();
      _this.Ask_Question43.currentTime = 0.0;
    }
    if (_this.Question_flag == 44) {
      _this.Ask_Question44.pause();
      _this.Ask_Question44.currentTime = 0.0;
    }
    if (_this.Question_flag == 45) {
      _this.Ask_Question45.pause();
      _this.Ask_Question45.currentTime = 0.0;
    }
    if (_this.Question_flag == 46) {
      _this.Ask_Question46.pause();
      _this.Ask_Question46.currentTime = 0.0;
    }
  },

  NextQuestion: function () {
    console.log("next question.......");

    _this.count1++;
    if (_this.QuestionArray[_this.count1] === 1) {
      _this.InitialScreen(); //PartA
    } else if (_this.QuestionArray[_this.count1] === 2) {
      _this.InitialScreen2(); //PartA
    } else {
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
  //this function is used for showing the question.

  InitialScreen: function () {
    _this.power = "\u{00B2}";
    // if (_this.count1 === 0) {
    //     _this.Ask_Question1.play();
    //     _this.Question_flag = 1;
    // }
    console.log("Initial Screen");

    _this.tick = _this.add.sprite(850, 470, "TickBtn");

    if (_this.findDirection[0] === 1 && _this.count1 === 0) {
      _this.Ask_Question1.play();
      _this.Question_flag = 1;
    }
    if (_this.findDirection[0] === 2 && _this.count1 === 0) {
      _this.Ask_Question4.play();
      _this.Question_flag = 4;
    }
    if (_this.findDirection[0] === 3 && _this.count1 === 0) {
      _this.Ask_Question3.play();
      _this.Question_flag = 3;
    }
    if (_this.findDirection[0] === 4 && _this.count1 === 0) {
      _this.Ask_Question2.play();
      _this.Question_flag = 2;
    }

    switch (_this.mapArray[_this.count1]) {
      case 1:
        _this.firstMap();
        break;
      case 2:
        _this.secondMap();
        break;
      case 3:
        _this.thirdMap();
        break;
      case 4:
        _this.fourthMap();
        break;
    }
  },

  firstMap: function () {
    console.log("Map 1");
    _this.Map1 = _this.add.group();

    _this.road = _this.add.sprite(33, 62, "road");
    _this.road.scale.setTo(0.242, 0.257);
    _this.Map1.addChild(_this.road);

    _this.place1_M1 = _this.add.sprite(381, 62, "place1_M1");
    _this.place1_M1.scale.setTo(1, 1.1);
    _this.Map1.addChild(_this.place1_M1);

    _this.place2_M1 = _this.add.sprite(119, 80, "place2_M1");
    _this.Map1.addChild(_this.place2_M1);

    _this.water_1 = _this.add.sprite(31, 85, "water_1");
    _this.Map1.addChild(_this.water_1);

    _this.water_2 = _this.add.sprite(30, 403, "water_2");
    _this.Map1.addChild(_this.water_2);

    _this.bridge = _this.add.sprite(45, 370, "bridge");
    _this.Map1.addChild(_this.bridge);

    _this.distanceBox = _this.add.sprite(25, 55, "distanceBox");
    _this.Map1.addChild(_this.distanceBox);

    var text = _this.add.text(175, 15, "1" + "      " + "5" + "      " + "10", {
      font: "26px Arial",
      fontWeight: "bold",
      fill: "0x000000",
    });

    var text2 = _this.add.text(30, 25, "1" + " : 100", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FF0000", // Red color "#FF0000"
    });

    _this.distanceBox.addChild(text);
    _this.distanceBox.addChild(text2);

    _this.extra1_M1 = _this.add.sprite(140, 505, "extra1_M1");
    _this.extra1_M1.scale.setTo(0.983, 0.85);
    _this.Map1.addChild(_this.extra1_M1);

    _this.place3_M1 = _this.add.sprite(381, 204, "place3_M1");
    _this.Map1.addChild(_this.place3_M1);

    _this.place4_M1 = _this.add.sprite(140, 309, "place4_M1");
    _this.place4_M1.scale.setTo(0.983, 1.03);
    _this.Map1.addChild(_this.place4_M1);

    _this.place5_M1 = _this.add.sprite(448, 400, "place5_M1");
    _this.Map1.addChild(_this.place5_M1);

    _this.place6_M1 = _this.add.sprite(760, 62, "place6_M1");
    _this.place6_M1.scale.setTo(0.96, 1.063);
    _this.Map1.addChild(_this.place6_M1);

    _this.directionSymbol = _this.add.sprite(767, 57, "directionSymbol");
    _this.Map1.addChild(_this.directionSymbol);

    _this.place1_M1.inputEnabled = true;
    _this.place1_M1.input.useHandCursor = true;
    _this.place1_M1.events.onInputDown.add(function () {
      console.log("place 1 clicked");
      _this.place1 = true;

      _this.place2_M1.inputEnabled = false;
      _this.place2_M1.frame = 1;

      _this.place3_M1.inputEnabled = false;
      _this.place3_M1.frame = 1;

      _this.place4_M1.inputEnabled = false;
      _this.place4_M1.frame = 1;

      _this.place5_M1.inputEnabled = false;
      _this.place5_M1.frame = 1;

      _this.place6_M1.inputEnabled = false;
      _this.place6_M1.frame = 1;

      _this.water_1.frame = 1;
      _this.water_2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place2_M1.inputEnabled = true;
    _this.place2_M1.input.useHandCursor = true;
    _this.place2_M1.events.onInputDown.add(function () {
      console.log("place 2 clicked");
      _this.place2 = true;

      _this.place1_M1.inputEnabled = false;
      _this.place1_M1.frame = 1;

      _this.place3_M1.inputEnabled = false;
      _this.place3_M1.frame = 1;

      _this.place4_M1.inputEnabled = false;
      _this.place4_M1.frame = 1;

      _this.place5_M1.inputEnabled = false;
      _this.place5_M1.frame = 1;

      _this.place6_M1.inputEnabled = false;
      _this.place6_M1.frame = 1;

      _this.water_1.frame = 1;
      _this.water_2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place3_M1.inputEnabled = true;
    _this.place3_M1.input.useHandCursor = true;
    _this.place3_M1.events.onInputDown.add(function () {
      console.log("place 3 clicked");
      _this.place3 = true;

      _this.place1_M1.inputEnabled = false;
      _this.place1_M1.frame = 1;

      _this.place2_M1.inputEnabled = false;
      _this.place2_M1.frame = 1;

      _this.place4_M1.inputEnabled = false;
      _this.place4_M1.frame = 1;

      _this.place5_M1.inputEnabled = false;
      _this.place5_M1.frame = 1;

      _this.place6_M1.inputEnabled = false;
      _this.place6_M1.frame = 1;

      _this.water_1.frame = 1;
      _this.water_2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place4_M1.inputEnabled = true;
    _this.place4_M1.input.useHandCursor = true;
    _this.place4_M1.events.onInputDown.add(function () {
      console.log("place 4 clicked");
      _this.place4 = true;

      _this.place1_M1.inputEnabled = false;
      _this.place1_M1.frame = 1;

      _this.place2_M1.inputEnabled = false;
      _this.place2_M1.frame = 1;

      _this.place3_M1.inputEnabled = false;
      _this.place3_M1.frame = 1;

      _this.place5_M1.inputEnabled = false;
      _this.place5_M1.frame = 1;

      _this.place6_M1.inputEnabled = false;
      _this.place6_M1.frame = 1;

      _this.water_1.frame = 1;
      _this.water_2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place5_M1.inputEnabled = true;
    _this.place5_M1.input.useHandCursor = true;
    _this.place5_M1.events.onInputDown.add(function () {
      console.log("place 5 clicked");
      _this.place5 = true;

      _this.place1_M1.inputEnabled = false;
      _this.place1_M1.frame = 1;

      _this.place2_M1.inputEnabled = false;
      _this.place2_M1.frame = 1;

      _this.place3_M1.inputEnabled = false;
      _this.place3_M1.frame = 1;

      _this.place4_M1.inputEnabled = false;
      _this.place4_M1.frame = 1;

      _this.place6_M1.inputEnabled = false;
      _this.place6_M1.frame = 1;

      _this.water_1.frame = 1;
      _this.water_2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place6_M1.inputEnabled = true;
    _this.place6_M1.input.useHandCursor = true;
    _this.place6_M1.events.onInputDown.add(function () {
      console.log("place 6 clicked");
      _this.place6 = true;

      _this.place1_M1.inputEnabled = false;
      _this.place1_M1.frame = 1;

      _this.place2_M1.inputEnabled = false;
      _this.place2_M1.frame = 1;

      _this.place3_M1.inputEnabled = false;
      _this.place3_M1.frame = 1;

      _this.place4_M1.inputEnabled = false;
      _this.place4_M1.frame = 1;

      _this.place5_M1.inputEnabled = false;
      _this.place5_M1.frame = 1;

      _this.water_1.frame = 1;
      _this.water_2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.water_1.inputEnabled = true;
    _this.water_1.input.useHandCursor = true;
    _this.water_1.events.onInputDown.add(function () {
      console.log("place 7 clicked");
      _this.place7 = true;

      _this.place1_M1.inputEnabled = false;
      _this.place1_M1.frame = 1;

      _this.place2_M1.inputEnabled = false;
      _this.place2_M1.frame = 1;

      _this.place3_M1.inputEnabled = false;
      _this.place3_M1.frame = 1;

      _this.place4_M1.inputEnabled = false;
      _this.place4_M1.frame = 1;

      _this.place5_M1.inputEnabled = false;
      _this.place5_M1.frame = 1;

      _this.place6_M1.inputEnabled = false;
      _this.place6_M1.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.water_2.inputEnabled = true;
    _this.water_2.input.useHandCursor = true;
    _this.water_2.events.onInputDown.add(function () {
      console.log("place 7 clicked");
      _this.place7 = true;

      _this.place1_M1.inputEnabled = false;
      _this.place1_M1.frame = 1;

      _this.place2_M1.inputEnabled = false;
      _this.place2_M1.frame = 1;

      _this.place3_M1.inputEnabled = false;
      _this.place3_M1.frame = 1;

      _this.place4_M1.inputEnabled = false;
      _this.place4_M1.frame = 1;

      _this.place5_M1.inputEnabled = false;
      _this.place5_M1.frame = 1;

      _this.place6_M1.inputEnabled = false;
      _this.place6_M1.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    if (_this.count1 === 1) {
      _this.randomizeMapQuestion();
    }
    // else if (_this.count1 === 2) {
    //     _this.FindShortestPath();
    // }
    else {
      _this.tick.inputEnabled = true;
      _this.tick.input.useHandCursor = true;
      _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
    }
  },
  secondMap: function () {
    console.log("Map 2");
    _this.Map2 = _this.add.group();

    _this.road = _this.add.sprite(33, 62, "road");
    _this.road.scale.setTo(0.242, 0.257);
    _this.Map2.addChild(_this.road);

    _this.place1_M2 = _this.add.sprite(381, 62, "place1_M2");
    _this.place1_M2.scale.setTo(1, 1.1);
    _this.Map2.addChild(_this.place1_M2);

    _this.place2_M2 = _this.add.sprite(118, 80, "place2_M2");
    _this.Map2.addChild(_this.place2_M2);

    _this.track_1 = _this.add.sprite(31, 85, "track_1");
    _this.Map2.addChild(_this.track_1);

    _this.track_2 = _this.add.sprite(30, 403, "track_2");
    _this.Map2.addChild(_this.track_2);

    _this.distanceBox = _this.add.sprite(23, 55, "distanceBox");
    _this.Map2.addChild(_this.distanceBox);

    var text = _this.add.text(175, 15, "1" + "      " + "5" + "      " + "10", {
      font: "26px Arial",
      fontWeight: "bold",
      fill: "0x000000",
    });

    var text2 = _this.add.text(30, 25, "1" + " : 100", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FF0000", // Red color "#FF0000"
    });

    _this.distanceBox.addChild(text);
    _this.distanceBox.addChild(text2);

    _this.extra1_M1 = _this.add.sprite(140, 505, "extra1_M1");
    _this.extra1_M1.scale.setTo(0.983, 0.85);
    _this.Map2.addChild(_this.extra1_M1);

    _this.place3_M2 = _this.add.sprite(381, 204, "place3_M2");
    _this.Map2.addChild(_this.place3_M2);

    _this.place4_M2 = _this.add.sprite(140, 309, "place4_M2");
    _this.place4_M2.scale.setTo(0.983, 1.03);
    _this.Map2.addChild(_this.place4_M2);

    _this.place5_M2 = _this.add.sprite(448, 400, "place5_M2");
    _this.Map2.addChild(_this.place5_M2);

    _this.place6_M2 = _this.add.sprite(760, 62, "place6_M2");
    _this.place6_M2.scale.setTo(0.96, 1.063);
    _this.Map2.addChild(_this.place6_M2);

    _this.directionSymbol = _this.add.sprite(767, 57, "directionSymbol");
    _this.Map2.addChild(_this.directionSymbol);

    _this.place1_M2.inputEnabled = true;
    _this.place1_M2.input.useHandCursor = true;
    _this.place1_M2.events.onInputDown.add(function () {
      console.log("place 1 clicked");
      _this.place1 = true;

      _this.place2_M2.inputEnabled = false;
      _this.place2_M2.frame = 1;

      _this.place3_M2.inputEnabled = false;
      _this.place3_M2.frame = 1;

      _this.place4_M2.inputEnabled = false;
      _this.place4_M2.frame = 1;

      _this.place5_M2.inputEnabled = false;
      _this.place5_M2.frame = 1;

      _this.place6_M2.inputEnabled = false;
      _this.place6_M2.frame = 1;

      _this.track_1.frame = 1;
      _this.track_2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place2_M2.inputEnabled = true;
    _this.place2_M2.input.useHandCursor = true;
    _this.place2_M2.events.onInputDown.add(function () {
      console.log("place 2 clicked");
      _this.place2 = true;

      _this.place1_M2.inputEnabled = false;
      _this.place1_M2.frame = 1;

      _this.place3_M2.inputEnabled = false;
      _this.place3_M2.frame = 1;

      _this.place4_M2.inputEnabled = false;
      _this.place4_M2.frame = 1;

      _this.place5_M2.inputEnabled = false;
      _this.place5_M2.frame = 1;

      _this.place6_M2.inputEnabled = false;
      _this.place6_M2.frame = 1;

      _this.track_1.frame = 1;
      _this.track_2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place3_M2.inputEnabled = true;
    _this.place3_M2.input.useHandCursor = true;
    _this.place3_M2.events.onInputDown.add(function () {
      console.log("place 3 clicked");
      _this.place3 = true;

      _this.place1_M2.inputEnabled = false;
      _this.place1_M2.frame = 1;

      _this.place2_M2.inputEnabled = false;
      _this.place2_M2.frame = 1;

      _this.place4_M2.inputEnabled = false;
      _this.place4_M2.frame = 1;

      _this.place5_M2.inputEnabled = false;
      _this.place5_M2.frame = 1;

      _this.place6_M2.inputEnabled = false;
      _this.place6_M2.frame = 1;

      _this.track_1.frame = 1;
      _this.track_2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place4_M2.inputEnabled = true;
    _this.place4_M2.input.useHandCursor = true;
    _this.place4_M2.events.onInputDown.add(function () {
      console.log("place 4 clicked");
      _this.place4 = true;

      _this.place1_M2.inputEnabled = false;
      _this.place1_M2.frame = 1;

      _this.place2_M2.inputEnabled = false;
      _this.place2_M2.frame = 1;

      _this.place3_M2.inputEnabled = false;
      _this.place3_M2.frame = 1;

      _this.place5_M2.inputEnabled = false;
      _this.place5_M2.frame = 1;

      _this.place6_M2.inputEnabled = false;
      _this.place6_M2.frame = 1;

      _this.track_1.frame = 1;
      _this.track_2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place5_M2.inputEnabled = true;
    _this.place5_M2.input.useHandCursor = true;
    _this.place5_M2.events.onInputDown.add(function () {
      console.log("place 5 clicked");
      _this.place5 = true;

      _this.place1_M2.inputEnabled = false;
      _this.place1_M2.frame = 1;

      _this.place2_M2.inputEnabled = false;
      _this.place2_M2.frame = 1;

      _this.place3_M2.inputEnabled = false;
      _this.place3_M2.frame = 1;

      _this.place4_M2.inputEnabled = false;
      _this.place4_M2.frame = 1;

      _this.place6_M2.inputEnabled = false;
      _this.place6_M2.frame = 1;

      _this.track_1.frame = 1;
      _this.track_2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place6_M2.inputEnabled = true;
    _this.place6_M2.input.useHandCursor = true;
    _this.place6_M2.events.onInputDown.add(function () {
      console.log("place 6 clicked");
      _this.place6 = true;

      _this.place1_M2.inputEnabled = false;
      _this.place1_M2.frame = 1;

      _this.place2_M2.inputEnabled = false;
      _this.place2_M2.frame = 1;

      _this.place3_M2.inputEnabled = false;
      _this.place3_M2.frame = 1;

      _this.place4_M2.inputEnabled = false;
      _this.place4_M2.frame = 1;

      _this.place5_M2.inputEnabled = false;
      _this.place5_M2.frame = 1;

      _this.track_1.frame = 1;
      _this.track_2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.track_1.inputEnabled = true;
    _this.track_1.input.useHandCursor = true;
    _this.track_1.events.onInputDown.add(function () {
      console.log("place 7 clicked");
      _this.place7 = true;

      _this.place1_M2.inputEnabled = false;
      _this.place1_M2.frame = 1;

      _this.place2_M2.inputEnabled = false;
      _this.place2_M2.frame = 1;

      _this.place3_M2.inputEnabled = false;
      _this.place3_M2.frame = 1;

      _this.place4_M2.inputEnabled = false;
      _this.place4_M2.frame = 1;

      _this.place5_M2.inputEnabled = false;
      _this.place5_M2.frame = 1;

      _this.place6_M2.inputEnabled = false;
      _this.place6_M2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.track_2.inputEnabled = true;
    _this.track_2.input.useHandCursor = true;
    _this.track_2.events.onInputDown.add(function () {
      console.log("place 7 clicked");
      _this.place7 = true;

      _this.place1_M2.inputEnabled = false;
      _this.place1_M2.frame = 1;

      _this.place2_M2.inputEnabled = false;
      _this.place2_M2.frame = 1;

      _this.place3_M2.inputEnabled = false;
      _this.place3_M2.frame = 1;

      _this.place4_M2.inputEnabled = false;
      _this.place4_M2.frame = 1;

      _this.place5_M2.inputEnabled = false;
      _this.place5_M2.frame = 1;

      _this.place6_M2.inputEnabled = false;
      _this.place6_M2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    if (_this.count1 === 1) {
      _this.randomizeMapQuestion();
    }
    // else if (_this.count1 === 2) {
    //     _this.FindShortestPath();
    // }
    else {
      _this.tick.inputEnabled = true;
      _this.tick.input.useHandCursor = true;
      _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
    }
  },
  thirdMap: function () {
    console.log("Map 3");
    _this.Map3 = _this.add.group();

    _this.road = _this.add.sprite(33, 62, "road");
    _this.road.scale.setTo(0.242, 0.257);
    _this.Map3.addChild(_this.road);

    _this.place1_M3 = _this.add.sprite(381, 62, "place1_M3");
    _this.place1_M3.scale.setTo(1, 1.1);
    _this.Map3.addChild(_this.place1_M3);

    _this.place2_M3 = _this.add.sprite(119, 80, "place2_M3");
    // _this.place2_M1.scale.setTo(1.1, 1)
    _this.Map3.addChild(_this.place2_M3);

    // _this.extra2_M1 = _this.add.sprite(33, 401, 'extra2_M1');
    // _this.Map1.addChild(_this.extra2_M1);

    _this.water_1 = _this.add.sprite(31, 85, "water_1");
    _this.Map3.addChild(_this.water_1);

    _this.water_2 = _this.add.sprite(30, 403, "water_2");
    _this.Map3.addChild(_this.water_2);

    _this.bridge = _this.add.sprite(45, 370, "bridge");
    _this.Map3.addChild(_this.bridge);

    // _this.track_1 = _this.add.sprite(31, 85, 'water_1');
    // _this.Map1.addChild(_this.track_1);

    // _this.track_2 = _this.add.sprite(30, 403, 'water_2');
    // _this.Map1.addChild(_this.track_2);

    _this.distanceBox = _this.add.sprite(25, 55, "distanceBox");
    _this.Map3.addChild(_this.distanceBox);

    var text = _this.add.text(175, 15, "1" + "      " + "5" + "      " + "10", {
      font: "26px Arial",
      fontWeight: "bold",
      fill: "0x000000",
    });

    var text2 = _this.add.text(30, 25, "1" + " : 100", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FF0000", // Red color "#FF0000"
    });

    _this.distanceBox.addChild(text);
    _this.distanceBox.addChild(text2);

    _this.extra1_M1 = _this.add.sprite(140, 505, "extra1_M1");
    _this.extra1_M1.scale.setTo(0.983, 0.85);
    _this.Map3.addChild(_this.extra1_M1);

    _this.place3_M3 = _this.add.sprite(381, 204, "place3_M3");
    _this.Map3.addChild(_this.place3_M3);

    _this.place4_M3 = _this.add.sprite(140, 309, "place4_M3");
    _this.place4_M3.scale.setTo(0.983, 1.03);
    _this.Map3.addChild(_this.place4_M3);

    _this.place5_M3 = _this.add.sprite(448, 400, "place5_M3");
    _this.Map3.addChild(_this.place5_M3);

    _this.place6_M3 = _this.add.sprite(760, 62, "place6_M3");
    _this.place6_M3.scale.setTo(0.96, 1.063);
    _this.Map3.addChild(_this.place6_M3);

    _this.directionSymbol = _this.add.sprite(767, 57, "directionSymbol");
    _this.Map3.addChild(_this.directionSymbol);

    _this.place1_M3.inputEnabled = true;
    _this.place1_M3.input.useHandCursor = true;
    _this.place1_M3.events.onInputDown.add(function () {
      console.log("place 1 clicked");
      _this.place1 = true;

      _this.place2_M3.inputEnabled = false;
      _this.place2_M3.frame = 1;

      _this.place3_M3.inputEnabled = false;
      _this.place3_M3.frame = 1;

      _this.place4_M3.inputEnabled = false;
      _this.place4_M3.frame = 1;

      _this.place5_M3.inputEnabled = false;
      _this.place5_M3.frame = 1;

      _this.place6_M3.inputEnabled = false;
      _this.place6_M3.frame = 1;

      _this.water_1.frame = 1;
      _this.water_2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place2_M3.inputEnabled = true;
    _this.place2_M3.input.useHandCursor = true;
    _this.place2_M3.events.onInputDown.add(function () {
      console.log("place 2 clicked");
      _this.place2 = true;

      _this.place1_M3.inputEnabled = false;
      _this.place1_M3.frame = 1;

      _this.place3_M3.inputEnabled = false;
      _this.place3_M3.frame = 1;

      _this.place4_M3.inputEnabled = false;
      _this.place4_M3.frame = 1;

      _this.place5_M3.inputEnabled = false;
      _this.place5_M3.frame = 1;

      _this.place6_M3.inputEnabled = false;
      _this.place6_M3.frame = 1;

      _this.water_1.frame = 1;
      _this.water_2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place3_M3.inputEnabled = true;
    _this.place3_M3.input.useHandCursor = true;
    _this.place3_M3.events.onInputDown.add(function () {
      console.log("place 3 clicked");
      _this.place3 = true;

      _this.place1_M3.inputEnabled = false;
      _this.place1_M3.frame = 1;

      _this.place2_M3.inputEnabled = false;
      _this.place2_M3.frame = 1;

      _this.place4_M3.inputEnabled = false;
      _this.place4_M3.frame = 1;

      _this.place5_M3.inputEnabled = false;
      _this.place5_M3.frame = 1;

      _this.place6_M3.inputEnabled = false;
      _this.place6_M3.frame = 1;

      _this.water_1.frame = 1;
      _this.water_2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place4_M3.inputEnabled = true;
    _this.place4_M3.input.useHandCursor = true;
    _this.place4_M3.events.onInputDown.add(function () {
      console.log("place 4 clicked");
      _this.place4 = true;

      _this.place1_M3.inputEnabled = false;
      _this.place1_M3.frame = 1;

      _this.place2_M3.inputEnabled = false;
      _this.place2_M3.frame = 1;

      _this.place3_M3.inputEnabled = false;
      _this.place3_M3.frame = 1;

      _this.place5_M3.inputEnabled = false;
      _this.place5_M3.frame = 1;

      _this.place6_M3.inputEnabled = false;
      _this.place6_M3.frame = 1;

      _this.water_1.frame = 1;
      _this.water_2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place5_M3.inputEnabled = true;
    _this.place5_M3.input.useHandCursor = true;
    _this.place5_M3.events.onInputDown.add(function () {
      console.log("place 5 clicked");
      _this.place5 = true;

      _this.place1_M3.inputEnabled = false;
      _this.place1_M3.frame = 1;

      _this.place2_M3.inputEnabled = false;
      _this.place2_M3.frame = 1;

      _this.place3_M3.inputEnabled = false;
      _this.place3_M3.frame = 1;

      _this.place4_M3.inputEnabled = false;
      _this.place4_M3.frame = 1;

      _this.place6_M3.inputEnabled = false;
      _this.place6_M3.frame = 1;

      _this.water_1.frame = 1;
      _this.water_2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place6_M3.inputEnabled = true;
    _this.place6_M3.input.useHandCursor = true;
    _this.place6_M3.events.onInputDown.add(function () {
      console.log("place 6 clicked");
      _this.place6 = true;

      _this.place1_M3.inputEnabled = false;
      _this.place1_M3.frame = 1;

      _this.place2_M3.inputEnabled = false;
      _this.place2_M3.frame = 1;

      _this.place3_M3.inputEnabled = false;
      _this.place3_M3.frame = 1;

      _this.place4_M3.inputEnabled = false;
      _this.place4_M3.frame = 1;

      _this.place5_M3.inputEnabled = false;
      _this.place5_M3.frame = 1;

      _this.water_1.frame = 1;
      _this.water_2.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.water_1.inputEnabled = true;
    _this.water_1.input.useHandCursor = true;
    _this.water_1.events.onInputDown.add(function () {
      console.log("place 7 clicked");
      _this.place7 = true;

      _this.place1_M3.inputEnabled = false;
      _this.place1_M3.frame = 1;

      _this.place2_M3.inputEnabled = false;
      _this.place2_M3.frame = 1;

      _this.place3_M3.inputEnabled = false;
      _this.place3_M3.frame = 1;

      _this.place4_M3.inputEnabled = false;
      _this.place4_M3.frame = 1;

      _this.place5_M3.inputEnabled = false;
      _this.place5_M3.frame = 1;

      _this.place6_M3.inputEnabled = false;
      _this.place6_M3.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.water_2.inputEnabled = true;
    _this.water_2.input.useHandCursor = true;
    _this.water_2.events.onInputDown.add(function () {
      console.log("place 7 clicked");
      _this.place7 = true;

      _this.place1_M3.inputEnabled = false;
      _this.place1_M3.frame = 1;

      _this.place2_M3.inputEnabled = false;
      _this.place2_M3.frame = 1;

      _this.place3_M3.inputEnabled = false;
      _this.place3_M3.frame = 1;

      _this.place4_M3.inputEnabled = false;
      _this.place4_M3.frame = 1;

      _this.place5_M3.inputEnabled = false;
      _this.place5_M3.frame = 1;

      _this.place6_M3.inputEnabled = false;
      _this.place6_M3.frame = 1;

      _this.bridge.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    if (_this.count1 === 1) {
      _this.randomizeMapQuestion();
    }
    // else if (_this.count1 === 2) {
    //     _this.FindShortestPath();
    // }
    else {
      _this.tick.inputEnabled = true;
      _this.tick.input.useHandCursor = true;
      _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
    }
  },
  fourthMap: function () {
    console.log("Map 4");
    _this.Map4 = _this.add.group();

    _this.road = _this.add.sprite(33, 62, "road");
    _this.road.scale.setTo(0.242, 0.257);
    _this.Map4.addChild(_this.road);

    _this.place1_M4 = _this.add.sprite(381, 62, "place1_M4");
    _this.place1_M4.scale.setTo(1, 1.1);
    _this.Map4.addChild(_this.place1_M4);

    _this.place2_M4 = _this.add.sprite(118, 80, "place2_M4");
    _this.Map4.addChild(_this.place2_M4);

    _this.track_1 = _this.add.sprite(31, 85, "track_1");
    _this.Map4.addChild(_this.track_1);

    _this.track_2 = _this.add.sprite(30, 403, "track_2");
    _this.Map4.addChild(_this.track_2);

    _this.distanceBox = _this.add.sprite(23, 55, "distanceBox");
    _this.Map4.addChild(_this.distanceBox);

    var text = _this.add.text(175, 15, "1" + "      " + "5" + "      " + "10", {
      font: "26px Arial",
      fontWeight: "bold",
      fill: "0x000000",
    });

    var text2 = _this.add.text(30, 25, "1" + " : 100", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FF0000", // Red color "#FF0000"
    });

    _this.distanceBox.addChild(text);
    _this.distanceBox.addChild(text2);

    _this.extra1_M1 = _this.add.sprite(140, 505, "extra1_M1");
    _this.extra1_M1.scale.setTo(0.983, 0.85);
    _this.Map4.addChild(_this.extra1_M1);

    _this.place3_M4 = _this.add.sprite(381, 204, "place3_M4");
    _this.Map4.addChild(_this.place3_M4);

    _this.place4_M4 = _this.add.sprite(140, 309, "place4_M4");
    _this.place4_M4.scale.setTo(0.983, 1.03);
    _this.Map4.addChild(_this.place4_M4);

    _this.place5_M4 = _this.add.sprite(448, 400, "place5_M4");
    _this.Map4.addChild(_this.place5_M4);

    _this.place6_M4 = _this.add.sprite(760, 62, "place6_M4");
    _this.place6_M4.scale.setTo(0.96, 1.063);
    _this.Map4.addChild(_this.place6_M4);

    _this.directionSymbol = _this.add.sprite(767, 57, "directionSymbol");
    _this.Map4.addChild(_this.directionSymbol);

    _this.place1_M4.inputEnabled = true;
    _this.place1_M4.input.useHandCursor = true;
    _this.place1_M4.events.onInputDown.add(function () {
      console.log("place 1 clicked");
      _this.place1 = true;

      _this.place2_M4.inputEnabled = false;
      _this.place2_M4.frame = 1;

      _this.place3_M4.inputEnabled = false;
      _this.place3_M4.frame = 1;

      _this.place4_M4.inputEnabled = false;
      _this.place4_M4.frame = 1;

      _this.place5_M4.inputEnabled = false;
      _this.place5_M4.frame = 1;

      _this.place6_M4.inputEnabled = false;
      _this.place6_M4.frame = 1;

      _this.track_1.frame = 1;
      _this.track_2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place2_M4.inputEnabled = true;
    _this.place2_M4.input.useHandCursor = true;
    _this.place2_M4.events.onInputDown.add(function () {
      console.log("place 2 clicked");
      _this.place2 = true;

      _this.place1_M4.inputEnabled = false;
      _this.place1_M4.frame = 1;

      _this.place3_M4.inputEnabled = false;
      _this.place3_M4.frame = 1;

      _this.place4_M4.inputEnabled = false;
      _this.place4_M4.frame = 1;

      _this.place5_M4.inputEnabled = false;
      _this.place5_M4.frame = 1;

      _this.place6_M4.inputEnabled = false;
      _this.place6_M4.frame = 1;

      _this.track_1.frame = 1;
      _this.track_2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place3_M4.inputEnabled = true;
    _this.place3_M4.input.useHandCursor = true;
    _this.place3_M4.events.onInputDown.add(function () {
      console.log("place 3 clicked");
      _this.place3 = true;

      _this.place1_M4.inputEnabled = false;
      _this.place1_M4.frame = 1;

      _this.place2_M4.inputEnabled = false;
      _this.place2_M4.frame = 1;

      _this.place4_M4.inputEnabled = false;
      _this.place4_M4.frame = 1;

      _this.place5_M4.inputEnabled = false;
      _this.place5_M4.frame = 1;

      _this.place6_M4.inputEnabled = false;
      _this.place6_M4.frame = 1;

      _this.track_1.frame = 1;
      _this.track_2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place4_M4.inputEnabled = true;
    _this.place4_M4.input.useHandCursor = true;
    _this.place4_M4.events.onInputDown.add(function () {
      console.log("place 4 clicked");
      _this.place4 = true;

      _this.place1_M4.inputEnabled = false;
      _this.place1_M4.frame = 1;

      _this.place2_M4.inputEnabled = false;
      _this.place2_M4.frame = 1;

      _this.place3_M4.inputEnabled = false;
      _this.place3_M4.frame = 1;

      _this.place5_M4.inputEnabled = false;
      _this.place5_M4.frame = 1;

      _this.place6_M4.inputEnabled = false;
      _this.place6_M4.frame = 1;

      _this.track_1.frame = 1;
      _this.track_2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place5_M4.inputEnabled = true;
    _this.place5_M4.input.useHandCursor = true;
    _this.place5_M4.events.onInputDown.add(function () {
      console.log("place 5 clicked");
      _this.place5 = true;

      _this.place1_M4.inputEnabled = false;
      _this.place1_M4.frame = 1;

      _this.place2_M4.inputEnabled = false;
      _this.place2_M4.frame = 1;

      _this.place3_M4.inputEnabled = false;
      _this.place3_M4.frame = 1;

      _this.place4_M4.inputEnabled = false;
      _this.place4_M4.frame = 1;

      _this.place6_M4.inputEnabled = false;
      _this.place6_M4.frame = 1;

      _this.track_1.frame = 1;
      _this.track_2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.place6_M4.inputEnabled = true;
    _this.place6_M4.input.useHandCursor = true;
    _this.place6_M4.events.onInputDown.add(function () {
      console.log("place 6 clicked");
      _this.place6 = true;

      _this.place1_M4.inputEnabled = false;
      _this.place1_M4.frame = 1;

      _this.place2_M4.inputEnabled = false;
      _this.place2_M4.frame = 1;

      _this.place3_M4.inputEnabled = false;
      _this.place3_M4.frame = 1;

      _this.place4_M4.inputEnabled = false;
      _this.place4_M4.frame = 1;

      _this.place5_M4.inputEnabled = false;
      _this.place5_M4.frame = 1;

      _this.track_1.frame = 1;
      _this.track_2.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.track_1.inputEnabled = true;
    _this.track_1.input.useHandCursor = true;
    _this.track_1.events.onInputDown.add(function () {
      console.log("place 7 clicked");
      _this.place7 = true;

      _this.place1_M4.inputEnabled = false;
      _this.place1_M4.frame = 1;

      _this.place2_M4.inputEnabled = false;
      _this.place2_M4.frame = 1;

      _this.place3_M4.inputEnabled = false;
      _this.place3_M4.frame = 1;

      _this.place4_M4.inputEnabled = false;
      _this.place4_M4.frame = 1;

      _this.place5_M4.inputEnabled = false;
      _this.place5_M4.frame = 1;

      _this.place6_M4.inputEnabled = false;
      _this.place6_M4.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    _this.track_2.inputEnabled = true;
    _this.track_2.input.useHandCursor = true;
    _this.track_2.events.onInputDown.add(function () {
      console.log("place 7 clicked");
      _this.place7 = true;

      _this.place1_M4.inputEnabled = false;
      _this.place1_M4.frame = 1;

      _this.place2_M4.inputEnabled = false;
      _this.place2_M4.frame = 1;

      _this.place3_M4.inputEnabled = false;
      _this.place3_M4.frame = 1;

      _this.place4_M4.inputEnabled = false;
      _this.place4_M4.frame = 1;

      _this.place5_M4.inputEnabled = false;
      _this.place5_M4.frame = 1;

      _this.place6_M4.inputEnabled = false;
      _this.place6_M4.frame = 1;

      _this.extra1_M1.frame = 1;
    });

    if (_this.count1 === 1) {
      _this.randomizeMapQuestion();
    }
    // else if (_this.count1 === 2) {
    //     _this.FindShortestPath();
    // }
    else {
      _this.tick.inputEnabled = true;
      _this.tick.input.useHandCursor = true;
      _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
    }
  },

  tickFirstEvaluation: function (target) {
    if (_this.findDirection[0] === 1 && _this.place1 === true) {
      _this.firstValidation = true;
    } else if (_this.findDirection[0] === 2 && _this.place7 === true) {
      _this.firstValidation = true;
    } else if (_this.findDirection[0] === 3 && _this.place6 === true) {
      _this.firstValidation = true;
    } else if (
      _this.findDirection[0] === 4 &&
      (_this.place4 === true || _this.place5 === true)
    ) {
      _this.firstValidation = true;
    } else {
      _this.noofAttempts++;
      _this.wrongSound.play();
      _this.firstValidation = false;
      if (_this.mapArray[_this.count1] === 1) {
        _this.place1_M1.inputEnabled = true;
        _this.place1_M1.input.useHandCursor = true;
        _this.place1_M1.frame = 0;

        _this.place2_M1.inputEnabled = true;
        _this.place2_M1.input.useHandCursor = true;
        _this.place2_M1.frame = 0;

        _this.place3_M1.inputEnabled = true;
        _this.place3_M1.input.useHandCursor = true;
        _this.place3_M1.frame = 0;

        _this.place4_M1.inputEnabled = true;
        _this.place4_M1.input.useHandCursor = true;
        _this.place4_M1.frame = 0;

        _this.place5_M1.inputEnabled = true;
        _this.place5_M1.input.useHandCursor = true;
        _this.place5_M1.frame = 0;

        _this.place6_M1.inputEnabled = true;
        _this.place6_M1.input.useHandCursor = true;
        _this.place6_M1.frame = 0;

        _this.water_1.inputEnabled = true;
        _this.water_1.input.useHandCursor = true;
        _this.water_1.frame = 0;

        _this.water_2.inputEnabled = true;
        _this.water_2.input.useHandCursor = true;
        _this.water_2.frame = 0;

        _this.bridge.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      if (_this.mapArray[_this.count1] === 2) {
        _this.place1_M2.inputEnabled = true;
        _this.place1_M2.input.useHandCursor = true;
        _this.place1_M2.frame = 0;

        _this.place2_M2.inputEnabled = true;
        _this.place2_M2.input.useHandCursor = true;
        _this.place2_M2.frame = 0;

        _this.place3_M2.inputEnabled = true;
        _this.place3_M2.input.useHandCursor = true;
        _this.place3_M2.frame = 0;

        _this.place4_M2.inputEnabled = true;
        _this.place4_M2.input.useHandCursor = true;
        _this.place4_M2.frame = 0;

        _this.place5_M2.inputEnabled = true;
        _this.place5_M2.input.useHandCursor = true;
        _this.place5_M2.frame = 0;

        _this.place6_M2.inputEnabled = true;
        _this.place6_M2.input.useHandCursor = true;
        _this.place6_M2.frame = 0;

        _this.track_1.inputEnabled = true;
        _this.track_1.input.useHandCursor = true;
        _this.track_1.frame = 0;

        _this.track_2.inputEnabled = true;
        _this.track_2.input.useHandCursor = true;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      if (_this.mapArray[_this.count1] === 3) {
        _this.place1_M3.inputEnabled = true;
        _this.place1_M3.input.useHandCursor = true;
        _this.place1_M3.frame = 0;

        _this.place2_M3.inputEnabled = true;
        _this.place2_M3.input.useHandCursor = true;
        _this.place2_M3.frame = 0;

        _this.place3_M3.inputEnabled = true;
        _this.place3_M3.input.useHandCursor = true;
        _this.place3_M3.frame = 0;

        _this.place4_M3.inputEnabled = true;
        _this.place4_M3.input.useHandCursor = true;
        _this.place4_M3.frame = 0;

        _this.place5_M3.inputEnabled = true;
        _this.place5_M3.input.useHandCursor = true;
        _this.place5_M3.frame = 0;

        _this.place6_M3.inputEnabled = true;
        _this.place6_M3.input.useHandCursor = true;
        _this.place6_M3.frame = 0;

        _this.water_1.inputEnabled = true;
        _this.water_1.input.useHandCursor = true;
        _this.water_1.frame = 0;

        _this.water_2.inputEnabled = true;
        _this.water_2.input.useHandCursor = true;
        _this.water_2.frame = 0;

        _this.bridge.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      if (_this.mapArray[_this.count1] === 4) {
        _this.place1_M4.inputEnabled = true;
        _this.place1_M4.input.useHandCursor = true;
        _this.place1_M4.frame = 0;

        _this.place2_M4.inputEnabled = true;
        _this.place2_M4.input.useHandCursor = true;
        _this.place2_M4.frame = 0;

        _this.place3_M4.inputEnabled = true;
        _this.place3_M4.input.useHandCursor = true;
        _this.place3_M4.frame = 0;

        _this.place4_M4.inputEnabled = true;
        _this.place4_M4.input.useHandCursor = true;
        _this.place4_M4.frame = 0;

        _this.place5_M4.inputEnabled = true;
        _this.place5_M4.input.useHandCursor = true;
        _this.place5_M4.frame = 0;

        _this.place6_M4.inputEnabled = true;
        _this.place6_M4.input.useHandCursor = true;
        _this.place6_M4.frame = 0;

        _this.track_1.inputEnabled = true;
        _this.track_1.input.useHandCursor = true;
        _this.track_1.frame = 0;

        _this.track_2.inputEnabled = true;
        _this.track_2.input.useHandCursor = true;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      }
    }

    if (_this.firstValidation === true) {
      _this.celebrationSound.play();
      if (_this.mapArray[_this.count1] === 1) {
        _this.place1_M1.inputEnabled = false;
        _this.place1_M1.frame = 0;

        _this.place2_M1.inputEnabled = false;
        _this.place2_M1.frame = 0;

        _this.place3_M1.inputEnabled = false;
        _this.place3_M1.frame = 0;

        _this.place4_M1.inputEnabled = false;
        _this.place4_M1.frame = 0;

        _this.place5_M1.inputEnabled = false;
        _this.place5_M1.frame = 0;

        _this.place6_M1.inputEnabled = false;
        _this.place6_M1.frame = 0;

        _this.water_1.inputEnabled = false;
        _this.water_1.frame = 0;

        _this.water_2.inputEnabled = false;
        _this.water_2.frame = 0;

        _this.bridge.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      if (_this.mapArray[_this.count1] === 2) {
        _this.place1_M2.inputEnabled = false;
        _this.place1_M2.frame = 0;

        _this.place2_M2.inputEnabled = false;
        _this.place2_M2.frame = 0;

        _this.place3_M2.inputEnabled = false;
        _this.place3_M2.frame = 0;

        _this.place4_M2.inputEnabled = false;
        _this.place4_M2.frame = 0;

        _this.place5_M2.inputEnabled = false;
        _this.place5_M2.frame = 0;

        _this.place6_M2.inputEnabled = false;
        _this.place6_M2.frame = 0;

        _this.track_1.inputEnabled = false;
        _this.track_1.frame = 0;

        _this.track_2.inputEnabled = false;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      if (_this.mapArray[_this.count1] === 3) {
        _this.place1_M3.inputEnabled = false;
        _this.place1_M3.frame = 0;

        _this.place2_M3.inputEnabled = false;
        _this.place2_M3.frame = 0;

        _this.place3_M3.inputEnabled = false;
        _this.place3_M3.frame = 0;

        _this.place4_M3.inputEnabled = false;
        _this.place4_M3.frame = 0;

        _this.place5_M3.inputEnabled = false;
        _this.place5_M3.frame = 0;

        _this.place6_M3.inputEnabled = false;
        _this.place6_M3.frame = 0;

        _this.water_1.inputEnabled = false;
        _this.water_1.frame = 0;

        _this.water_2.inputEnabled = false;
        _this.water_2.frame = 0;

        _this.bridge.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      if (_this.mapArray[_this.count1] === 4) {
        _this.place1_M4.inputEnabled = false;
        _this.place1_M4.frame = 0;

        _this.place2_M4.inputEnabled = false;
        _this.place2_M4.frame = 0;

        _this.place3_M4.inputEnabled = false;
        _this.place3_M4.frame = 0;

        _this.place4_M4.inputEnabled = false;
        _this.place4_M4.frame = 0;

        _this.place5_M4.inputEnabled = false;
        _this.place5_M4.frame = 0;

        _this.place6_M4.inputEnabled = false;
        _this.place6_M4.frame = 0;

        _this.track_1.inputEnabled = false;
        _this.track_1.frame = 0;

        _this.track_2.inputEnabled = false;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      _this.starActions();

      target.destroy();

      _this.tick = _this.add.sprite(850, 470, "TickBtn");

      _this.tick.inputEnabled = true;
      _this.tick.input.useHandCursor = true;
      _this.tick.events.onInputDown.add(_this.tickSecondEvaluation, _this);

      _this.noofAttempts = 0;
      _this.AnsTimerCount = 0;
      _this.time.events.add(2000, function () {
        _this.travelToDestination();
      });
    }
  },

  travelToDestination: function () {
    _this.Up = _this.add.sprite(850, 60, "Up");
    _this.Up.inputEnabled = true;
    _this.Up.input.useHandCursor = true;
    _this.Up.events.onInputDown.add(_this.moveUp, _this);

    _this.Down = _this.add.sprite(850, 150, "Down");
    _this.Down.inputEnabled = true;
    _this.Down.input.useHandCursor = true;
    _this.Down.events.onInputDown.add(_this.moveDown, _this);

    _this.Right = _this.add.sprite(850, 240, "Right");
    _this.Right.inputEnabled = true;
    _this.Right.input.useHandCursor = true;
    _this.Right.events.onInputDown.add(_this.moveRight, _this);

    _this.Left = _this.add.sprite(850, 330, "Left");
    _this.Left.inputEnabled = true;
    _this.Left.input.useHandCursor = true;
    _this.Left.events.onInputDown.add(_this.moveLeft, _this);

    _this.eraser = _this.add.sprite(860, 410, "eraser");
    _this.eraser.inputEnabled = true;
    _this.eraser.input.useHandCursor = true;
    _this.eraser.frame = 0;

    _this.pauseVoice();
    if (_this.count1 === 2) {
      if (_this.Ask_Question9) {
        _this.Ask_Question9.pause();
        _this.Ask_Question9.currentTime = 0.0;
      }
      _this.findDirection = [1, 2]; // 1 northern most // 2 western  most // 3 eastern most// 4 southern most
      Phaser.ArrayUtils.shuffle(_this.findDirection);
      if (_this.findDirection[0] === 1) {
        if (_this.mapArray[_this.count1] === 1) {
          _this.Ask_Question6.play();
          _this.Question_flag = 6;
        }
        if (_this.mapArray[_this.count1] === 2) {
          _this.Ask_Question11.play();
          _this.Question_flag = 11;
        }
        if (_this.mapArray[_this.count1] === 3) {
          _this.Ask_Question10.play();
          _this.Question_flag = 10;
        }
        if (_this.mapArray[_this.count1] === 4) {
          _this.Ask_Question12.play();
          _this.Question_flag = 12;
        }

        _this.firstLeft = false;
        _this.firstRight = false;
        _this.firstPlace();
        _this.eraser.events.onInputDown.add(_this.UndoLastStep, _this);
      }
      if (_this.findDirection[0] === 2) {
        if (_this.mapArray[_this.count1] === 1) {
          _this.Ask_Question17.play();
          _this.Question_flag = 17;
        }
        if (_this.mapArray[_this.count1] === 2) {
          _this.Ask_Question18.play();
          _this.Question_flag = 18;
        }
        if (_this.mapArray[_this.count1] === 3) {
          _this.Ask_Question19.play();
          _this.Question_flag = 19;
        }
        if (_this.mapArray[_this.count1] === 4) {
          _this.Ask_Question20.play();
          _this.Question_flag = 20;
        }

        _this.firstUp = false;
        _this.firstDown = false;
        _this.canClickDown = true;
        _this.canClickUp = true;
        _this.canClickRight = false;
        _this.canClickLeft = false;
        _this.thirdPlace();
        _this.eraser.events.onInputDown.add(_this.UndoLastStep3, _this);
      }
    } else {
      if (_this.findDirection[_this.count1] === 1) {
        if (_this.mapArray[_this.count1] === 1) {
          _this.Ask_Question6.play();
          _this.Question_flag = 6;
        }
        if (_this.mapArray[_this.count1] === 2) {
          _this.Ask_Question11.play();
          _this.Question_flag = 11;
        }
        if (_this.mapArray[_this.count1] === 3) {
          _this.Ask_Question10.play();
          _this.Question_flag = 10;
        }
        if (_this.mapArray[_this.count1] === 4) {
          _this.Ask_Question12.play();
          _this.Question_flag = 12;
        }

        _this.firstLeft = false;
        _this.firstRight = false;
        _this.firstPlace();
        _this.eraser.events.onInputDown.add(_this.UndoLastStep, _this);
      }
      if (_this.findDirection[_this.count1] === 4) {
        if (_this.mapArray[_this.count1] === 1) {
          _this.Ask_Question13.play();
          _this.Question_flag = 13;
        }
        if (_this.mapArray[_this.count1] === 2) {
          _this.Ask_Question14.play();
          _this.Question_flag = 14;
        }
        if (_this.mapArray[_this.count1] === 3) {
          _this.Ask_Question15.play();
          _this.Question_flag = 15;
        }
        if (_this.mapArray[_this.count1] === 4) {
          _this.Ask_Question16.play();
          _this.Question_flag = 16;
        }

        _this.firstLeft = false;
        _this.firstRight = false;
        _this.secondPlace();
        _this.eraser.events.onInputDown.add(_this.UndoLastStep2, _this);
      }
      if (_this.findDirection[_this.count1] === 2) {
        if (_this.mapArray[_this.count1] === 1) {
          _this.Ask_Question17.play();
          _this.Question_flag = 17;
        }
        if (_this.mapArray[_this.count1] === 2) {
          _this.Ask_Question18.play();
          _this.Question_flag = 18;
        }
        if (_this.mapArray[_this.count1] === 3) {
          _this.Ask_Question19.play();
          _this.Question_flag = 19;
        }
        if (_this.mapArray[_this.count1] === 4) {
          _this.Ask_Question20.play();
          _this.Question_flag = 20;
        }

        _this.firstUp = false;
        _this.firstDown = false;
        _this.canClickDown = true;
        _this.canClickUp = true;
        _this.canClickRight = false;
        _this.canClickLeft = false;
        _this.thirdPlace();
        _this.eraser.events.onInputDown.add(_this.UndoLastStep3, _this);
      }
    }
  },

  showHandtween: function () {
    _this.hand = _this.add.image(1000, 130, "hand");
    _this.hand.scale.setTo(0.55);
    _this.handTween = _this.add.tween(_this.hand);
    _this.handTween.to({ x: 880, y: 110 }, 800, "Linear", true, 0);

    _this.time.events.add(1000, () => {
      _this.clickSound.play();
      _this.hand.scale.setTo(0.5);
      _this.Up.frame = 1;
      _this.time.events.add(800, () => {
        _this.hand.scale.setTo(0.55);
      });
    });

    _this.time.events.add(3200, () => {
      _this.Up.frame = 0;
      _this.hand.destroy();
    });
  },

  firstPlace: function () {
    _this.placeCounter = 1;

    _this.counterArray.push(_this.placeCounter);

    if (_this.count1 === 0) {
      _this.time.events.add(3000, function () {
        _this.showHandtween();
      });
    }

    _this.canClickUp = false;
    _this.canClickDown = false;
    _this.canClickRight = true;
    _this.canClickLeft = true;

    _this.downClicked = false;

    _this.UndoGrp = _this.add.group();
    _this.UndoGrp2 = _this.add.group();
    _this.UndoGrp3 = _this.add.group();
    _this.UndoGrp4 = _this.add.group();
    _this.UndoGrp5 = _this.add.group();
    _this.UndoGrp6 = _this.add.group();
    _this.UndoGrp7 = _this.add.group();
    _this.UndoGrp8 = _this.add.group();

    _this.UndoArray = _this.add.group();
    _this.UndoArray2 = _this.add.group();
    _this.UndoArray3 = _this.add.group();
    _this.UndoArray4 = _this.add.group();
    _this.UndoArray5 = _this.add.group();
    _this.UndoArray6 = _this.add.group();
    _this.UndoArray7 = _this.add.group();
    _this.UndoArray8 = _this.add.group();

    _this.point1 = [];
    _this.point2 = [
      { x: 140, y: 287 },
      { x: 118, y: 385 },
      { x: 122, y: 465 },
      { x: 410, y: 482 },
      { x: 428, y: 395 },
    ];

    _this.extraGrp = _this.add.group();

    var startPoint = [{ x: 445, y: 175 }];

    var blackCircle = _this.add.image(
      startPoint[0].x,
      startPoint[0].y,
      "blackCircle"
    );

    if (_this.mapArray[_this.count1] === 1) {
      _this.Map1.addChild(blackCircle);
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Map2.addChild(blackCircle);
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Map3.addChild(blackCircle);
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Map4.addChild(blackCircle);
    }

    // Start blinking the object after a delay (e.g., 2 seconds)
    _this.time.events.add(1000, blinkObject, this);

    function blinkObject() {
      console.log("blink....blink");
      var blinkCount = 0;

      // Create a timer to handle blinking
      var blinkTimer = _this.time.create(false);
      blinkTimer.loop(
        500,
        function () {
          blackCircle.visible = !blackCircle.visible; // Toggle visibility
          blinkCount++;

          if (_this.IsKeyPressed === true) {
            blackCircle.visible = true; // Ensure the object is visible at the end
            blinkTimer.stop(); // Stop the timer after 2 blinks
          }
        },
        this
      );

      blinkTimer.start();
    }

    var endPoint = [{ x: 570, y: 370 }];

    var pinkCircle = _this.add.image(
      endPoint[0].x,
      endPoint[0].y,
      "pinkCircle"
    );
    if (_this.mapArray[_this.count1] === 1) {
      _this.Map1.addChild(pinkCircle);
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Map2.addChild(pinkCircle);
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Map3.addChild(pinkCircle);
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Map4.addChild(pinkCircle);
    }
  },

  secondPlace: function () {
    _this.placeCounter = 2;
    _this.counterArray.push(_this.placeCounter);

    if (_this.count1 === 0) {
      _this.time.events.add(3000, function () {
        _this.showHandtween();
      });
    }

    _this.canClickUp = false;
    _this.canClickDown = false;
    _this.canClickRight = true;
    _this.canClickLeft = true;

    _this.downClicked = false;

    _this.divideLeft = false;
    _this.divideRight = false;

    _this.divideUp = false;
    _this.divideDown = false;

    _this.point1 = [];
    _this.point2 = [];

    _this.point3 = [];
    _this.point4 = [];

    _this.distanceArray = [];
    _this.distance1 = [];
    _this.distance2 = [];

    _this.UndoGrp = _this.add.group();
    _this.UndoGrp2 = _this.add.group();
    _this.UndoGrp3 = _this.add.group();
    _this.UndoGrp4 = _this.add.group();
    _this.UndoGrp5 = _this.add.group();
    _this.UndoGrp6 = _this.add.group();
    _this.UndoGrp7 = _this.add.group();
    _this.UndoGrp8 = _this.add.group();

    _this.UndoArray = _this.add.group();
    _this.UndoArray2 = _this.add.group();
    _this.UndoArray3 = _this.add.group();
    _this.UndoArray4 = _this.add.group();
    _this.UndoArray5 = _this.add.group();
    _this.UndoArray6 = _this.add.group();
    _this.UndoArray7 = _this.add.group();
    _this.UndoArray8 = _this.add.group();

    _this.extraGrp = _this.add.group();

    var startPoint = [{ x: 200, y: 475 }];

    var blackCircle = _this.add.image(
      startPoint[0].x,
      startPoint[0].y,
      "blackCircle"
    );
    if (_this.mapArray[_this.count1] === 1) {
      _this.Map1.addChild(blackCircle);
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Map2.addChild(blackCircle);
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Map3.addChild(blackCircle);
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Map4.addChild(blackCircle);
    }

    // Start blinking the object after a delay (e.g., 2 seconds)

    _this.time.events.add(1000, blinkObject, this);

    function blinkObject() {
      console.log("blink....blink");
      var blinkCount = 0;

      // Create a timer to handle blinking
      var blinkTimer = _this.time.create(false);
      blinkTimer.loop(
        500,
        function () {
          blackCircle.visible = !blackCircle.visible; // Toggle visibility
          blinkCount++;

          if (_this.IsKeyPressed === true) {
            blackCircle.visible = true; // Ensure the object is visible at the end
            blinkTimer.stop(); // Stop the timer after 2 blinks
          }
        },
        this
      );

      blinkTimer.start();
    }

    var endPoint = [{ x: 600, y: 175 }];

    var pinkCircle = _this.add.image(
      endPoint[0].x,
      endPoint[0].y,
      "pinkCircle"
    );
    if (_this.mapArray[_this.count1] === 1) {
      _this.Map1.addChild(pinkCircle);
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Map2.addChild(pinkCircle);
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Map3.addChild(pinkCircle);
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Map4.addChild(pinkCircle);
    }
  },

  thirdPlace: function () {
    _this.placeCounter = 3;
    _this.counterArray.push(_this.placeCounter);

    if (_this.count1 === 0) {
      _this.time.events.add(3000, function () {
        _this.showHandtween();
      });
    }

    _this.canClickUp = true;
    _this.canClickDown = true;
    _this.canClickRight = false;
    _this.canClickLeft = false;

    _this.divideLeft = false;
    _this.divideRight = false;

    _this.point1 = [];

    _this.UndoGrp = _this.add.group();
    _this.UndoGrp2 = _this.add.group();
    _this.UndoGrp3 = _this.add.group();
    _this.UndoGrp4 = _this.add.group();
    _this.UndoGrp5 = _this.add.group();
    _this.UndoGrp6 = _this.add.group();
    _this.UndoGrp7 = _this.add.group();
    _this.UndoGrp8 = _this.add.group();

    _this.UndoArray = _this.add.group();
    _this.UndoArray2 = _this.add.group();
    _this.UndoArray3 = _this.add.group();
    _this.UndoArray4 = _this.add.group();
    _this.UndoArray5 = _this.add.group();
    _this.UndoArray6 = _this.add.group();
    _this.UndoArray7 = _this.add.group();
    _this.UndoArray8 = _this.add.group();

    _this.delete = _this.add.group();
    _this.delete2 = _this.add.group();

    var startPoint = [{ x: 105, y: 373 }];

    var blackCircle = _this.add.image(
      startPoint[0].x,
      startPoint[0].y,
      "blackCircle"
    );
    if (_this.mapArray[_this.count1] === 1) {
      _this.Map1.addChild(blackCircle);
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Map2.addChild(blackCircle);
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Map3.addChild(blackCircle);
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Map4.addChild(blackCircle);
    }

    // Start blinking the object after a delay (e.g., 2 seconds)

    _this.time.events.add(1000, blinkObject, this);

    function blinkObject() {
      console.log("blink....blink");
      var blinkCount = 0;

      // Create a timer to handle blinking
      var blinkTimer = _this.time.create(false);
      blinkTimer.loop(
        500,
        function () {
          blackCircle.visible = !blackCircle.visible; // Toggle visibility
          blinkCount++;

          if (_this.IsKeyPressed === true) {
            blackCircle.visible = true; // Ensure the object is visible at the end
            blinkTimer.stop(); // Stop the timer after 2 blinks
          }
        },
        this
      );

      blinkTimer.start();
    }

    var endPoint = [{ x: 345, y: 280 }];

    var pinkCircle = _this.add.image(
      endPoint[0].x,
      endPoint[0].y,
      "pinkCircle"
    );
    if (_this.mapArray[_this.count1] === 1) {
      _this.Map1.addChild(pinkCircle);
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Map2.addChild(pinkCircle);
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Map3.addChild(pinkCircle);
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Map4.addChild(pinkCircle);
    }
  },

  moveUp: function () {
    _this.IsKeyPressed = true;

    _this.Up.frame = 1;
    _this.Down.frame = 0;
    _this.Right.frame = 0;
    _this.Left.frame = 0;

    _this.Up.inputEnabled = false;
    _this.Down.inputEnabled = false;
    _this.Right.inputEnabled = false;
    _this.Left.inputEnabled = false;

    if (_this.placeCounter === 1) {
      if (_this.canClickUp === true && _this.reachedDestination === false) {
        _this.RockToBusStop();
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        setTimeout(_this.changeFrame, 500);
      }
    } else if (_this.placeCounter === 2) {
      if (_this.canClickUp === true && _this.reachedDestination === false) {
        if (_this.moveCount === 4) {
          _this.divideUp = true;
        }
        _this.PlayGroundToHouses();
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        setTimeout(_this.changeFrame, 500);
      }
    } else if (_this.placeCounter === 3) {
      if (_this.canClickUp === true && _this.reachedDestination === false) {
        if (_this.firstDown === true) _this.firstUp = false;
        else _this.firstUp = true;
        _this.canClickDown = false;
        // if (_this.moveCount === 2) { _this.divideRight = true; }
        _this.RiverToFarm();
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        setTimeout(_this.changeFrame, 500);
      }
    }
  },
  moveDown: function () {
    _this.IsKeyPressed = true;

    _this.Down.frame = 1;
    _this.Up.frame = 0;
    _this.Right.frame = 0;
    _this.Left.frame = 0;

    _this.Up.inputEnabled = false;
    _this.Down.inputEnabled = false;
    _this.Right.inputEnabled = false;
    _this.Left.inputEnabled = false;

    if (_this.placeCounter === 1) {
      if (_this.firstLeft === true && _this.moveCount === 2) {
        _this.downClicked = true;
      }
      if (_this.canClickDown === true && _this.reachedDestination === false) {
        _this.RockToBusStop();
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        setTimeout(_this.changeFrame, 500);
      }
    } else if (_this.placeCounter === 2) {
      if (_this.canClickDown === true && _this.reachedDestination === false) {
        if (_this.moveCount === 4) {
          _this.divideDown = true;
        }
        _this.PlayGroundToHouses();
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        setTimeout(_this.changeFrame, 500);
      }
    } else if (_this.placeCounter === 3) {
      if (_this.canClickDown === true && _this.reachedDestination === false) {
        if (_this.firstUp === true) _this.firstDown = false;
        else _this.firstDown = true;
        _this.canClickDown = false;
        // if (_this.moveCount === 2) { _this.divideRight = true; }
        _this.RiverToFarm();
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        setTimeout(_this.changeFrame, 500);
      }
    }

    // if (_this.placeCounter === 1) {
    //     if (_this.moveCount === 1 || _this.moveCount === 3 || _this.moveCount === 4) {
    //         _this.whiteCircle.destroy();
    //         _this.RockToBusStop();
    //     } else if (_this.moveCount === 2) {
    //         _this.downClicked = true;
    //         _this.whiteCircle.destroy();
    //         _this.RockToBusStop();
    //     }
    //     else {
    //         _this.wrongSound.play();
    //         setTimeout(_this.changeFrame, 500);
    //     }
    // }
  },
  moveRight: function () {
    _this.IsKeyPressed = true;

    _this.Right.frame = 1;
    _this.Up.frame = 0;
    _this.Down.frame = 0;
    _this.Left.frame = 0;

    _this.Up.inputEnabled = false;
    _this.Down.inputEnabled = false;
    _this.Right.inputEnabled = false;
    _this.Left.inputEnabled = false;

    if (_this.placeCounter === 1) {
      if (
        _this.moveCount === 0 &&
        _this.canClickRight === true &&
        _this.reachedDestination === false
      ) {
        if (_this.firstLeft === true) _this.firstRight = false;
        else _this.firstRight = true;
        _this.canClickLeft = false;
        _this.RockToBusStop();
      } else if (
        _this.moveCount != 0 &&
        _this.canClickRight === true &&
        _this.reachedDestination === false
      ) {
        _this.RockToBusStop();
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        setTimeout(_this.changeFrame, 500);
      }
    } else if (_this.placeCounter === 2) {
      if (_this.canClickRight === true && _this.reachedDestination === false) {
        if (_this.firstLeft === true) _this.firstRight = false;
        else _this.firstRight = true;
        _this.canClickLeft = false;
        if (_this.moveCount === 2) {
          _this.divideRight = true;
        }
        _this.PlayGroundToHouses();
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        setTimeout(_this.changeFrame, 500);
      }
    } else if (_this.placeCounter === 3) {
      if (_this.canClickRight === true && _this.reachedDestination === false) {
        if (_this.moveCount === 3) _this.divideRight = true;
        _this.RiverToFarm();
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        setTimeout(_this.changeFrame, 500);
      }
    }

    // if (_this.placeCounter === 1) {
    //     if (_this.moveCount === 0) {
    //         _this.firstRight = true;
    //         _this.RockToBusStop();
    //     } else if (_this.moveCount === 3 || _this.moveCount === 4 || _this.moveCount === 5 || _this.moveCount === 7) {
    //         _this.firstLeft = true;
    //         _this.RockToBusStop();
    //     } else {
    //         _this.wrongSound.play();
    //         setTimeout(_this.changeFrame, 500);
    //     }
    // } else {
    //     _this.wrongSound.play();
    //     setTimeout(_this.changeFrame, 500);
    // }
  },
  moveLeft: function () {
    _this.IsKeyPressed = true;

    _this.Left.frame = 1;
    _this.Up.frame = 0;
    _this.Down.frame = 0;
    _this.Right.frame = 0;

    _this.Up.inputEnabled = false;
    _this.Down.inputEnabled = false;
    _this.Right.inputEnabled = false;
    _this.Left.inputEnabled = false;

    if (_this.placeCounter === 1) {
      if (_this.canClickLeft === true && _this.reachedDestination === false) {
        _this.canClickRight = false;
        if (_this.firstRight === true) _this.firstLeft = false;
        else _this.firstLeft = true;
        _this.RockToBusStop();
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        setTimeout(_this.changeFrame, 500);
      }
    } else if (_this.placeCounter === 2) {
      if (_this.canClickLeft === true && _this.reachedDestination === false) {
        _this.canClickRight = false;
        if (_this.firstRight === true) _this.firstLeft = false;
        else _this.firstLeft = true;
        if (_this.moveCount === 2) {
          _this.divideLeft = true;
        }
        _this.PlayGroundToHouses();
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        setTimeout(_this.changeFrame, 500);
      }
    } else if (_this.placeCounter === 3) {
      if (_this.canClickLeft === true && _this.reachedDestination === false) {
        if (_this.moveCount === 3) {
          _this.divideLeft = true;
        }
        _this.RiverToFarm();
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        setTimeout(_this.changeFrame, 500);
      }
    }

    // if (_this.placeCounter === 1) {
    //     if (_this.moveCount === 0 || _this.moveCount === 3) {
    //         _this.firstLeft = true;
    //         _this.RockToBusStop();
    //     }
    //     else if (_this.moveCount === 2) {
    //         _this.whiteCircle.alpha = 0;
    //         _this.RockToBusStop();
    //     } else {
    //         _this.wrongSound.play();
    //         setTimeout(_this.changeFrame, 500);
    //     }
    // }
    // else {
    //     _this.wrongSound.play();
    //     setTimeout(_this.changeFrame, 500);
    // }
  },

  UndoLastStep: function () {
    _this.reachedDestination = false;

    if (_this.firstRight === true) {
      if (_this.moveCount === 1) {
        _this.moveCount -= 1;
        _this.whiteCircle.destroy();
        _this.UndoGrp.removeAll(true);
      }
      if (_this.moveCount === 2) {
        _this.moveCount -= 1;

        _this.whiteCircle.alpha = 0;
        var tween = _this.add
          .tween(_this.whiteCircle)
          .to(
            { x: _this.pointArray[0].x, y: _this.pointArray[0].y },
            400,
            Phaser.Easing.Linear.None,
            true
          );
        tween.onComplete.add(function () {
          _this.whiteCircle.alpha = 1;
        });

        _this.UndoGrp2.removeAll(true);

        _this.canClickDown = true;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = false;
      }
      if (_this.moveCount === 3) {
        _this.moveCount -= 1;

        _this.whiteCircle.alpha = 0;
        var tween = _this.add
          .tween(_this.whiteCircle)
          .to(
            { x: _this.pointArray[1].x, y: _this.pointArray[1].y },
            400,
            Phaser.Easing.Linear.None,
            true
          );
        tween.onComplete.add(function () {
          _this.whiteCircle.alpha = 1;
        });

        _this.UndoGrp3.removeAll(true);

        _this.canClickUp = false;
        _this.canClickDown = false;
        _this.canClickLeft = true;
        _this.canClickRight = false;
      }

      if (_this.pinkSquare) _this.pinkSquare.destroy();
    } else if (_this.firstLeft === true) {
      if (_this.moveCount === 1) {
        _this.moveCount -= 1;
        _this.UndoArray.removeAll(true);
      }
      if (_this.moveCount === 2) {
        _this.moveCount -= 1;
        _this.UndoArray2.removeAll(true);
        _this.canClickDown = true;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = false;

        _this.whiteCircle.alpha = 0;
        var tween = _this.add
          .tween(_this.whiteCircle)
          .to(
            { x: _this.pointArray[0].x, y: _this.pointArray[0].y },
            400,
            Phaser.Easing.Linear.None,
            true
          );
        tween.onComplete.add(function () {
          _this.whiteCircle.alpha = 1;
        });
      }
      if (_this.moveCount === 3) {
        _this.moveCount -= 1;
        _this.UndoArray3.removeAll(true);
        _this.canClickDown = true;
        _this.canClickLeft = true;
        _this.canClickRight = false;
        _this.canClickUp = false;

        _this.downClicked = false;

        _this.whiteCircle.alpha = 0;
        var tween = _this.add
          .tween(_this.whiteCircle)
          .to(
            { x: _this.pointArray[1].x, y: _this.pointArray[1].y },
            400,
            Phaser.Easing.Linear.None,
            true
          );
        tween.onComplete.add(function () {
          _this.whiteCircle.alpha = 1;
        });
      }
      if (_this.moveCount === 4) {
        _this.moveCount -= 1;
        _this.UndoArray4.removeAll(true);
        if (_this.downClicked === true) {
          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = true;
          _this.canClickUp = false;

          _this.whiteCircle.alpha = 0;
          var tween = _this.add
            .tween(_this.whiteCircle)
            .to(
              { x: _this.point1[0].x, y: _this.point1[0].y },
              400,
              Phaser.Easing.Linear.None,
              true
            );
          tween.onComplete.add(function () {
            _this.whiteCircle.alpha = 1;
          });
        } else {
          _this.canClickDown = true;
          _this.canClickLeft = false;
          _this.canClickRight = false;
          _this.canClickUp = false;

          _this.whiteCircle.alpha = 0;
          var tween = _this.add
            .tween(_this.whiteCircle)
            .to(
              { x: _this.point2[0].x, y: _this.point2[0].y },
              400,
              Phaser.Easing.Linear.None,
              true
            );
          tween.onComplete.add(function () {
            _this.whiteCircle.alpha = 1;
          });
        }
      }
      if (_this.moveCount === 5) {
        _this.moveCount -= 1;
        _this.UndoArray5.removeAll(true);
        _this.canClickDown = true;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = false;

        _this.whiteCircle.alpha = 0;
        var tween = _this.add
          .tween(_this.whiteCircle)
          .to(
            { x: _this.point2[1].x, y: _this.point2[1].y },
            400,
            Phaser.Easing.Linear.None,
            true
          );
        tween.onComplete.add(function () {
          _this.whiteCircle.alpha = 1;
        });
      }
      if (_this.moveCount === 6) {
        _this.moveCount -= 1;
        _this.UndoArray6.removeAll(true);
        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = true;
        _this.canClickUp = false;

        _this.whiteCircle.alpha = 0;
        var tween = _this.add
          .tween(_this.whiteCircle)
          .to(
            { x: _this.point2[2].x, y: _this.point2[2].y },
            400,
            Phaser.Easing.Linear.None,
            true
          );
        tween.onComplete.add(function () {
          _this.whiteCircle.alpha = 1;
        });
      }
      if (_this.moveCount === 7) {
        _this.moveCount -= 1;
        _this.UndoArray7.removeAll(true);
        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = true;

        _this.whiteCircle.alpha = 0;
        var tween = _this.add
          .tween(_this.whiteCircle)
          .to(
            { x: _this.point2[3].x, y: _this.point2[3].y },
            400,
            Phaser.Easing.Linear.None,
            true
          );
        tween.onComplete.add(function () {
          _this.whiteCircle.alpha = 1;
        });
      }
      if (_this.moveCount === 8) {
        _this.moveCount -= 1;
        _this.UndoArray8.removeAll(true);
        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = true;
        _this.canClickUp = false;

        _this.whiteCircle.alpha = 0;
        var tween = _this.add
          .tween(_this.whiteCircle)
          .to(
            { x: _this.point2[4].x, y: _this.point2[4].y },
            400,
            Phaser.Easing.Linear.None,
            true
          );
        tween.onComplete.add(function () {
          _this.whiteCircle.alpha = 1;
        });
      }

      if (_this.pinkSquare) _this.pinkSquare.destroy();
    }

    if (_this.moveCount === 0) {
      if (_this.whiteCircle) _this.whiteCircle.destroy();
      _this.canClickUp = false;
      _this.canClickDown = false;
      _this.canClickRight = true;
      _this.canClickLeft = true;
      _this.downClicked = false;
      _this.firstLeft = false;
      _this.firstRight = false;
      _this.reachedDestination = false;
      _this.pointArray = [];
      _this.point1 = [];
      _this.point2 = [];
    }

    _this.updateDistance();
  },

  updateDistance: function () {
    if (_this.firstRight === true) {
      if (_this.moveCount === 1) {
        _this.distanceTravelled = 3;
        _this.pinkSquare = _this.add.image(560, 165, "pinkSquare");
      } else if (_this.moveCount === 2) {
        _this.distanceTravelled = 5;
        _this.pinkSquare = _this.add.image(710, 250, "pinkSquare");
      } else if (_this.moveCount === 3) {
        _this.distanceTravelled = 6;
        _this.pinkSquare = _this.add.image(640, 360, "pinkSquare");
      }
    }

    if (_this.firstLeft === true) {
      if (_this.moveCount === 2) {
        _this.distanceTravelled = 1;
        _this.pinkSquare = _this.add.image(335, 210, "pinkSquare");
      } else if (_this.moveCount === 3) {
        if (_this.downClicked === true) {
          _this.distanceTravelled = 2;
          _this.pinkSquare = _this.add.image(345, 320, "pinkSquare");
        } else {
          _this.distanceTravelled = 4;
          _this.pinkSquare = _this.add.image(235, 270, "pinkSquare");
        }
      } else if (_this.moveCount === 4) {
        if (_this.downClicked === true) {
          _this.pinkSquare = _this.add.image(450, 360, "pinkSquare");
        } else {
          _this.distanceTravelled = 5;
          _this.pinkSquare = _this.add.image(100, 315, "pinkSquare");
        }
      } else if (_this.moveCount === 5) {
        _this.distanceTravelled = 7;
        _this.pinkSquare = _this.add.image(100, 400, "pinkSquare");
      } else if (_this.moveCount === 6) {
        _this.distanceTravelled = 8;
        _this.pinkSquare = _this.add.image(280, 465, "pinkSquare");
      } else if (_this.moveCount === 7) {
        _this.distanceTravelled = 9;
        _this.pinkSquare = _this.add.image(400, 420, "pinkSquare");
      } else if (_this.moveCount === 8) {
        _this.pinkSquare = _this.add.image(470, 360, "pinkSquare");
      }
    }

    var text = _this.add.text(30, 7, _this.distanceTravelled, {
      font: "30px Arial",
      fontWeight: "bold",
      fill: "#663399", // purple color "#E6E6FAs"
    });

    _this.pinkSquare.addChild(text);

    // _this.extraGrp.addChild(_this.pinkSquare);
    // Create a tween to change alpha from 0 to 1 and back
    var blinkTween = _this.add.tween(_this.pinkSquare);
    blinkTween.to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out
  },

  UndoLastStep2: function () {
    _this.reachedDestination = false;
    if (_this.firstRight === true) {
      _this.point1 = [
        { x: 358, y: 288 },
        { x: 361, y: 210 },
      ];

      _this.point2 = [
        { x: 720, y: 375 },
        { x: 738, y: 200 },
      ];
      if (_this.moveCount == 1) {
        _this.moveCount -= 1;
        _this.whiteCircle.destroy();
        _this.UndoGrp.removeAll(true);
      }
      if (_this.moveCount == 2) {
        _this.moveCount -= 1;

        _this.whiteCircle.alpha = 0;
        var tween = _this.add
          .tween(_this.whiteCircle)
          .to(
            { x: _this.pointArray[0].x, y: _this.pointArray[0].y },
            400,
            Phaser.Easing.Linear.None,
            true
          );
        tween.onComplete.add(function () {
          _this.whiteCircle.alpha = 1;
        });

        _this.UndoGrp2.removeAll(true);

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = true;
      }
      if (_this.moveCount == 3) {
        _this.divideLeft = false;
        _this.divideRight = false;
        _this.canClickLeft = true;
        _this.canClickRight = true;
        _this.moveCount -= 1;

        _this.whiteCircle.alpha = 0;
        var tween = _this.add
          .tween(_this.whiteCircle)
          .to(
            { x: _this.pointArray[1].x, y: _this.pointArray[1].y },
            400,
            Phaser.Easing.Linear.None,
            true
          );
        tween.onComplete.add(function () {
          _this.whiteCircle.alpha = 1;
        });

        _this.UndoGrp3.removeAll(true);
        _this.canClickUp = false;
        _this.canClickDown = false;
        _this.canClickLeft = true;
        _this.canClickRight = true;
      }
      if (_this.moveCount == 4) {
        _this.moveCount -= 1;

        _this.whiteCircle.alpha = 0;
        if (_this.divideLeft === true) {
          var tween = _this.add
            .tween(_this.whiteCircle)
            .to(
              { x: _this.point1[0].x, y: _this.point1[0].y },
              400,
              Phaser.Easing.Linear.None,
              true
            );
          tween.onComplete.add(function () {
            _this.whiteCircle.alpha = 1;
          });
        }
        if (_this.divideRight === true) {
          var tween = _this.add
            .tween(_this.whiteCircle)
            .to(
              { x: _this.point2[0].x, y: _this.point2[0].y },
              400,
              Phaser.Easing.Linear.None,
              true
            );
          tween.onComplete.add(function () {
            _this.whiteCircle.alpha = 1;
          });
        }

        _this.UndoGrp4.removeAll(true);

        _this.canClickUp = true;
        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
      }
      if (_this.moveCount == 5) {
        _this.moveCount -= 1;

        _this.whiteCircle.alpha = 0;
        if (_this.divideLeft === true) {
          var tween = _this.add
            .tween(_this.whiteCircle)
            .to(
              { x: _this.point1[1].x, y: _this.point1[1].y },
              400,
              Phaser.Easing.Linear.None,
              true
            );
          tween.onComplete.add(function () {
            _this.whiteCircle.alpha = 1;
          });
        }
        if (_this.divideRight === true) {
          var tween = _this.add
            .tween(_this.whiteCircle)
            .to(
              { x: _this.point2[1].x, y: _this.point2[1].y },
              400,
              Phaser.Easing.Linear.None,
              true
            );
          tween.onComplete.add(function () {
            _this.whiteCircle.alpha = 1;
          });
        }

        _this.UndoGrp5.removeAll(true);

        if (_this.divideLeft === true) {
          _this.canClickUp = false;
          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = true;
        }
        if (_this.divideRight === true) {
          _this.canClickUp = false;
          _this.canClickDown = false;
          _this.canClickLeft = true;
          _this.canClickRight = false;
        }
      }

      if (_this.pinkSquare) _this.pinkSquare.destroy();
    } else if (_this.firstLeft === true) {
      _this.pointArray = [
        { x: 145, y: 483 },
        { x: 117, y: 385 },
        { x: 121, y: 315 },
        { x: 344, y: 288 },
      ];

      _this.point3 = [{ x: 364, y: 185 }];

      _this.point4 = [
        { x: 420, y: 380 },
        { x: 725, y: 375 },
        { x: 738, y: 200 },
      ];

      if (_this.moveCount === 1) {
        _this.moveCount -= 1;
        _this.UndoGrp.removeAll(true);
      }
      if (_this.moveCount === 2) {
        _this.moveCount -= 1;
        _this.UndoGrp2.removeAll(true);

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = true;
      }
      if (_this.moveCount === 3) {
        _this.moveCount -= 1;
        _this.UndoGrp3.removeAll(true);

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = true;
      }
      if (_this.moveCount === 4) {
        _this.moveCount -= 1;
        _this.UndoGrp4.removeAll(true);

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = true;
        _this.canClickUp = false;
      }
      if (_this.moveCount === 5) {
        _this.moveCount -= 1;
        _this.UndoGrp5.removeAll(true);
        _this.canClickDown = true;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = true;

        _this.divideDown = false;
        _this.divideUp = false;
      }
      if (_this.moveCount === 6) {
        _this.moveCount -= 1;
        _this.UndoGrp6.removeAll(true);
        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = true;
        _this.canClickUp = false;
      }
      if (_this.moveCount === 7) {
        _this.moveCount -= 1;
        _this.UndoGrp7.removeAll(true);
        if (_this.divideUp) {
          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = false;
          _this.canClickUp = false;
        }
        if (_this.divideDown === true) {
          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = false;
          _this.canClickUp = true;
        }
        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = true;
        _this.canClickUp = false;
      }
      if (_this.moveCount === 8) {
        _this.moveCount -= 1;
        _this.UndoGrp8.removeAll(true);
        _this.canClickDown = false;
        _this.canClickLeft = true;
        _this.canClickRight = false;
        _this.canClickUp = false;
      }

      if (_this.moveCount > 0) {
        _this.whiteCircle.alpha = 0;
        if (_this.divideUp === true) {
          var tween = _this.add
            .tween(_this.whiteCircle)
            .to(
              { x: _this.point3[0].x, y: _this.point3[0].y },
              400,
              Phaser.Easing.Linear.None,
              true
            );
        } else if (_this.divideDown === true) {
          if (_this.moveCount === 5) {
            var tween = _this.add
              .tween(_this.whiteCircle)
              .to(
                { x: _this.point4[0].x, y: _this.point4[0].y },
                400,
                Phaser.Easing.Linear.None,
                true
              );
          }
          if (_this.moveCount === 6) {
            var tween = _this.add
              .tween(_this.whiteCircle)
              .to(
                { x: _this.point4[1].x, y: _this.point4[1].y },
                400,
                Phaser.Easing.Linear.None,
                true
              );
          }
          if (_this.moveCount === 7) {
            var tween = _this.add
              .tween(_this.whiteCircle)
              .to(
                { x: _this.point4[2].x, y: _this.point4[2].y },
                400,
                Phaser.Easing.Linear.None,
                true
              );
          }
        } else {
          var tween = _this.add.tween(_this.whiteCircle).to(
            {
              x: _this.pointArray[_this.moveCount - 1].x,
              y: _this.pointArray[_this.moveCount - 1].y,
            },
            400,
            Phaser.Easing.Linear.None,
            true
          );
        }

        tween.onComplete.add(function () {
          _this.whiteCircle.alpha = 1;
        });
      }

      if (_this.pinkSquare) _this.pinkSquare.destroy();
    }
    if (_this.moveCount === 0) {
      if (_this.whiteCircle) _this.whiteCircle.destroy();
      _this.canClickUp = false;
      _this.canClickDown = false;
      _this.canClickRight = true;
      _this.canClickLeft = true;
      _this.firstLeft = false;
      _this.firstRight = false;
      _this.reachedDestination = false;
      _this.divideLeft = false;
      _this.divideRight = false;
      _this.point1 = [];
      _this.point2 = [];
      _this.point3 = [];
      _this.point4 = [];
      _this.pointArray = [];
    }

    _this.updateDistance2();
  },

  updateDistance2: function () {
    var x = 30;
    y = 7;
    if (_this.firstRight === true) {
      if (_this.moveCount === 1) {
        _this.distanceTravelled = 2;
        _this.pinkSquare = _this.add.image(300, 465, "pinkSquare");
      }
      if (_this.moveCount === 2) {
        _this.distanceTravelled = 3;
        _this.pinkSquare = _this.add.image(400, 430, "pinkSquare");
      }
      if (_this.moveCount === 3) {
        if (_this.divideLeft === true) {
          _this.distanceTravelled = 4;
          _this.pinkSquare = _this.add.image(340, 330, "pinkSquare");
        } else {
          _this.distanceTravelled = 6;
          _this.pinkSquare = _this.add.image(620, 360, "pinkSquare");
        }
      }
      if (_this.moveCount === 4) {
        if (_this.divideLeft === true) {
          _this.distanceTravelled = 4;
          _this.pinkSquare = _this.add.image(340, 330, "pinkSquare");
        } else {
          _this.distanceTravelled = 7;
          _this.pinkSquare = _this.add.image(710, 270, "pinkSquare");
        }
      }
      if (_this.moveCount === 5) {
        if (_this.divideLeft === true) {
          _this.distanceTravelled = 6;
          _this.pinkSquare = _this.add.image(470, 170, "pinkSquare");
        } else {
          _this.distanceTravelled = 8;
          _this.pinkSquare = _this.add.image(650, 170, "pinkSquare");
        }
      }
    }

    if (_this.firstLeft === true) {
      if (_this.moveCount === 3) {
        _this.distanceTravelled = 2;
        _this.pinkSquare = _this.add.image(100, 370, "pinkSquare");
      } else if (_this.moveCount === 4) {
        _this.distanceTravelled = 4;
        _this.pinkSquare = _this.add.image(180, 275, "pinkSquare");
      } else if (_this.moveCount === 5) {
        _this.distanceTravelled = 5;
        if (_this.divideUp === true) {
          _this.pinkSquare = _this.add.image(340, 230, "pinkSquare");
        }
        if (_this.divideDown === true) {
          _this.pinkSquare = _this.add.image(340, 330, "pinkSquare");
        }
      } else if (_this.moveCount === 6) {
        if (_this.divideUp === true) {
          _this.distanceTravelled = 7;
          _this.pinkSquare = _this.add.image(450, 170, "pinkSquare");
        }
        if (_this.divideDown === true) {
          _this.distanceTravelled = 8;
          _this.pinkSquare = _this.add.image(570, 360, "pinkSquare");
        }
      } else if (_this.moveCount === 7) {
        var x = 20;
        y = 7;
        _this.distanceTravelled = 10;
        _this.pinkSquare = _this.add.image(720, 250, "pinkSquare");
      } else if (_this.moveCount === 8) {
        var x = 20;
        y = 7;
        _this.distanceTravelled = 11;
        _this.pinkSquare = _this.add.image(650, 165, "pinkSquare");
      }
    }
    var text = _this.add.text(x, y, _this.distanceTravelled, {
      font: "30px Arial",
      fontWeight: "bold",
      fill: "#663399", // purple color "#E6E6FAs"
    });

    if (_this.pinkSquare) {
      _this.pinkSquare.addChild(text);
      // Create a tween to change alpha from 0 to 1 and back
      var blinkTween = _this.add.tween(_this.pinkSquare);
      blinkTween.to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out
    }

    // _this.extraGrp.addChild(_this.pinkSquare);
  },

  changeFrame: function () {
    _this.Up.frame = 0;
    _this.Down.frame = 0;
    _this.Right.frame = 0;
    _this.Left.frame = 0;

    _this.time.events.add(500, function () {
      if (_this.Up) {
        _this.Up.inputEnabled = true;
        _this.Up.input.useHandCursor = true;
      }
      if (_this.Down) {
        _this.Down.inputEnabled = true;
        _this.Down.input.useHandCursor = true;
      }
      if (_this.Right) {
        _this.Right.inputEnabled = true;
        _this.Right.input.useHandCursor = true;
      }
      if (_this.Left) {
        _this.Left.inputEnabled = true;
        _this.Left.input.useHandCursor = true;
      }
    });
  },

  showDistance: function () {
    if (_this.firstRight === true) {
      if (_this.moveCount === 1) {
        _this.pinkSquare = _this.add.image(560, 165, "pinkSquare");
      } else if (_this.moveCount === 2) {
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(710, 250, "pinkSquare");
      } else if (_this.moveCount === 3) {
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(640, 360, "pinkSquare");
      }
    } else if (_this.firstLeft === true) {
      if (_this.moveCount === 2) {
        _this.pinkSquare = _this.add.image(335, 210, "pinkSquare");
      } else if (_this.moveCount === 3) {
        _this.pinkSquare.destroy();
        if (_this.downClicked === true) {
          _this.pinkSquare = _this.add.image(345, 320, "pinkSquare");
        } else {
          _this.pinkSquare = _this.add.image(235, 270, "pinkSquare");
        }
      } else if (_this.moveCount === 4) {
        _this.pinkSquare.destroy();
        if (_this.downClicked === true) {
          _this.pinkSquare = _this.add.image(450, 360, "pinkSquare");
        } else {
          _this.pinkSquare = _this.add.image(100, 315, "pinkSquare");
        }
      } else if (_this.moveCount === 5) {
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(100, 400, "pinkSquare");
      } else if (_this.moveCount === 6) {
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(280, 465, "pinkSquare");
      } else if (_this.moveCount === 7) {
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(400, 420, "pinkSquare");
      } else if (_this.moveCount === 8) {
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(470, 360, "pinkSquare");
      }
    }

    var text = _this.add.text(30, 7, _this.distanceTravelled, {
      font: "30px Arial",
      fontWeight: "bold",
      fill: "#663399", // purple color "#E6E6FAs"
    });

    _this.pinkSquare.addChild(text);

    // _this.extraGrp.addChild(_this.pinkSquare);
    // Create a tween to change alpha from 0 to 1 and back
    var blinkTween = _this.add.tween(_this.pinkSquare);
    blinkTween.to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out
  },

  RockToBusStop: function () {
    setTimeout(_this.changeFrame, 100);
    if (_this.firstRight === true) {
      if (_this.moveCount === 0) {
        var x = 483;
        y = 190;

        for (let i = 0; i < 3; i++) {
          _this.dottedLine5 = _this.add.image(x, y, "dottedLine5");
          x += 75;

          _this.UndoGrp.addChild(_this.dottedLine5);
        }
        _this.distanceTravelled = 3;
        setTimeout(_this.showDistance, 300);

        _this.whiteCircle = _this.add.image(x, y - 7, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        _this.pointArray.push({ x: x, y: y - 7 });

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

        _this.moveCount = 1;

        _this.canClickDown = true;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = false;
      } else if (_this.moveCount === 1) {
        _this.whiteCircle.destroy();
        var x = 750;
        y = 235;
        _this.RightDown = _this.add.image(712 + 5, 190, "RightDown");
        _this.UndoGrp2.addChild(_this.RightDown);

        _this.dottedLine5 = _this.add.image(x, y, "dottedLine5");
        _this.dottedLine5.angle = 90;
        _this.UndoGrp2.addChild(_this.dottedLine5);

        _this.dottedLine3 = _this.add.image(x, y + 75, "dottedLine3");
        _this.dottedLine3.angle = 90;
        _this.UndoGrp2.addChild(_this.dottedLine3);

        _this.distanceTravelled = 5;
        setTimeout(_this.showDistance, 300);

        _this.whiteCircle = _this.add.image(x - 11, y + 105, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        _this.pointArray.push({ x: x - 11, y: y + 105 });

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

        _this.moveCount = 2;

        _this.canClickUp = false;
        _this.canClickDown = false;
        _this.canClickLeft = true;
        _this.canClickRight = false;
      } else if (_this.moveCount === 2) {
        _this.whiteCircle.alpha = 0;
        _this.RightUp = _this.add.image(712 + 5, y + 120, "RightUp");
        _this.UndoGrp3.addChild(_this.RightUp);
        _this.RightUp.visible = true;

        var x = 610;
        y = 385;

        for (let i = 0; i < 2; i++) {
          _this.dottedLine3 = _this.add.image(x, y, "dottedLine3");
          _this.UndoGrp3.addChild(_this.dottedLine3);
          x += 45;
        }

        _this.dottedLine1 = _this.add.image(x, y, "dottedLine1");
        _this.UndoGrp3.addChild(_this.dottedLine1);

        _this.distanceTravelled = 6;
        setTimeout(_this.showDistance, 300);

        _this.moveCount = 3;
        _this.reachedDestination = true;

        _this.canClickUp = false;
        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
      }
    } else if (_this.firstLeft === true) {
      setTimeout(_this.changeFrame, 100);
      if (_this.downClicked === true) {
        if (_this.moveCount === 2) {
          _this.whiteCircle.destroy();

          var x = 372;
          y = 285;

          var dottedLine3 = _this.add.image(x, y, "dottedLine3");
          dottedLine3.angle = 90;
          _this.UndoArray3.addChild(dottedLine3);

          var dottedLine1 = _this.add.image(x, y + 45, "dottedLine1");
          dottedLine1.angle = 90;
          _this.UndoArray3.addChild(dottedLine1);

          var LeftUp = _this.add.image(370, 355, "LeftUp");
          _this.UndoArray3.addChild(LeftUp);

          _this.distanceTravelled = 2;
          setTimeout(_this.showDistance, 300);

          _this.whiteCircle = _this.add.image(x + 40, y + 93, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          _this.point1.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = true;
          _this.canClickUp = false;

          _this.moveCount = 3;
        } else if (_this.moveCount === 3) {
          _this.whiteCircle.alpha = 0;

          var x = 427;
          y = 387;

          var dottedLine1 = _this.add.image(412, y, "dottedLine1");
          _this.UndoArray4.addChild(dottedLine1);

          for (let i = 0; i < 2; i++) {
            var dottedLine5 = _this.add.image(x, y, "dottedLine5");
            _this.UndoArray4.addChild(dottedLine5);
            x += 75;
          }
          _this.distanceTravelled = 3;
          setTimeout(_this.showDistance, 300);

          _this.moveCount = 4;
          _this.reachedDestination = true;
        }
      } else {
        if (_this.moveCount === 0) {
          var x = 405;
          y = 190;

          var dottedLine3 = _this.add.image(x, y, "dottedLine3");

          _this.UndoArray.addChild(dottedLine3);

          _this.whiteCircle = _this.add.image(x - 25, y - 7, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          _this.pointArray.push({
            x: _this.whiteCircle.x,
            y: _this.whiteCircle.y,
          });

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

          _this.moveCount = 1;

          _this.canClickDown = true;
          _this.canClickLeft = false;
          _this.canClickRight = false;
          _this.canClickUp = false;
        } else if (_this.moveCount === 1) {
          _this.whiteCircle.destroy();

          var x = 372;
          y = 235;
          var RightDown = _this.add.image(368, 190, "LeftDown");
          _this.UndoArray2.addChild(RightDown);

          var dottedLine3 = _this.add.image(x, y, "dottedLine3");
          dottedLine3.angle = 90;
          _this.UndoArray2.addChild(dottedLine3);

          _this.distanceTravelled = 1;
          setTimeout(_this.showDistance, 300);

          _this.whiteCircle = _this.add.image(x - 11, y + 50, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          _this.pointArray.push({
            x: _this.whiteCircle.x,
            y: _this.whiteCircle.y,
          });

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.moveCount = 2;

          _this.canClickDown = true;
          _this.canClickLeft = true;
          _this.canClickRight = false;
          _this.canClickUp = false;
        } else if (_this.moveCount === 2) {
          _this.whiteCircle.destroy();

          var x = 290;
          y = 295;

          var RightUp = _this.add.image(340, 265, "RightUp");
          _this.UndoArray3.addChild(RightUp);

          for (let i = 0; i < 3; i++) {
            var dottedLine3 = _this.add.image(x, y, "dottedLine3");
            _this.UndoArray3.addChild(dottedLine3);
            x -= 45;
          }
          var dottedLine1 = _this.add.image(x + 25, y, "dottedLine1");
          _this.UndoArray3.addChild(dottedLine1);

          var dottedLine1 = _this.add.image(x + 10, y, "dottedLine1");
          _this.UndoArray3.addChild(dottedLine1);

          _this.distanceTravelled = 2;
          setTimeout(_this.showDistance, 300);

          _this.whiteCircle = _this.add.image(140, y - 8, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.point2.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

          _this.moveCount = 3;

          _this.canClickDown = true;
          _this.canClickLeft = false;
          _this.canClickRight = false;
          _this.canClickUp = false;
        } else if (_this.moveCount === 3) {
          _this.whiteCircle.destroy();

          var x = 128;
          y = 295;

          var LeftDown = _this.add.image(x, y, "LeftDown");
          _this.UndoArray4.addChild(LeftDown);

          var dottedLine3 = _this.add.image(x + 3, y + 43, "dottedLine3");
          dottedLine3.angle = 90;
          _this.UndoArray4.addChild(dottedLine3);

          _this.distanceTravelled = 4;
          setTimeout(_this.showDistance, 300);

          _this.whiteCircle = _this.add.image(118, 385, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.point2.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

          _this.moveCount = 4;

          _this.canClickDown = true;
          _this.canClickLeft = false;
          _this.canClickRight = false;
          _this.canClickUp = false;
        } else if (_this.moveCount === 4) {
          _this.whiteCircle.destroy();

          var x = 128;
          y = 340;

          var dottedLine5 = _this.add.image(x + 3, y + 43, "dottedLine5");
          dottedLine5.angle = 90;
          _this.UndoArray5.addChild(dottedLine5);

          _this.distanceTravelled = 5;
          setTimeout(_this.showDistance, 300);

          _this.whiteCircle = _this.add.image(122, 465, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.point2.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

          _this.moveCount = 5;

          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = true;
          _this.canClickUp = false;
        } else if (_this.moveCount === 5) {
          _this.whiteCircle.destroy();

          var x = 165;
          y = 490;

          var LeftUp = _this.add.image(128, 460, "LeftUp");
          _this.UndoArray6.addChild(LeftUp);

          for (let i = 0; i < 3; i++) {
            var dottedLine5 = _this.add.image(x, y, "dottedLine5");
            _this.UndoArray6.addChild(dottedLine5);
            x += 75;
          }

          var dottedLine1 = _this.add.image(x, y, "dottedLine1");
          _this.UndoArray6.addChild(dottedLine1);

          _this.distanceTravelled = 7;
          setTimeout(_this.showDistance, 300);

          _this.whiteCircle = _this.add.image(x + 20, y - 8, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.point2.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

          _this.moveCount = 6;

          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = false;
          _this.canClickUp = true;
        } else if (_this.moveCount === 6) {
          _this.whiteCircle.destroy();

          var x = 438;
          y = 440;

          var RightUp = _this.add.image(407, 460, "RightUp");
          _this.UndoArray7.addChild(RightUp);

          for (let i = 0; i < 1; i++) {
            var dottedLine1 = _this.add.image(x, y, "dottedLine1");
            dottedLine1.angle = 90;
            _this.UndoArray7.addChild(dottedLine1);
          }

          _this.distanceTravelled = 8;
          setTimeout(_this.showDistance, 300);

          _this.whiteCircle = _this.add.image(x - 10, y - 45, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.point2.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

          _this.moveCount = 7;

          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = true;
          _this.canClickUp = false;
        } else if (_this.moveCount === 7) {
          _this.whiteCircle.alpha = 0;

          var x = 475;
          y = 385;

          var LeftDown = _this.add.image(435, 385, "LeftDown");
          _this.UndoArray8.addChild(LeftDown);

          var dottedLine5 = _this.add.image(x, y, "dottedLine5");
          _this.UndoArray8.addChild(dottedLine5);

          var dottedLine1 = _this.add.image(x + 75, y, "dottedLine1");
          _this.UndoArray8.addChild(dottedLine1);

          _this.distanceTravelled = 9;
          setTimeout(_this.showDistance, 300);

          _this.moveCount = 8;
          _this.reachedDestination = true;
        }
      }
    }
  },

  PlayGroundToHouses: function () {
    setTimeout(_this.changeFrame, 100);
    if (_this.firstRight === true) {
      if (_this.moveCount === 0) {
        var x = 240;
        y = 490;

        for (let i = 0; i < 2; i++) {
          _this.dottedLine5 = _this.add.image(x, y, "dottedLine5");
          x += 75;

          _this.UndoGrp.addChild(_this.dottedLine5);
        }
        _this.dottedLine1 = _this.add.image(x, y, "dottedLine1");
        _this.UndoGrp.addChild(_this.dottedLine1);

        _this.distanceTravelled = 2;
        setTimeout(_this.showDistance2, 300);

        _this.whiteCircle = _this.add.image(x + 15, y - 7, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        _this.pointArray.push({
          x: _this.whiteCircle.x,
          y: _this.whiteCircle.y,
        });

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

        _this.moveCount = 1;

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = true;
      } else if (_this.moveCount === 1) {
        _this.whiteCircle.destroy();
        var x = 400;
        y = 490;
        _this.RightUp = _this.add.image(x + 6, y - 30, "RightUp");
        _this.UndoGrp2.addChild(_this.RightUp);

        for (let i = 0; i < 2; i++) {
          _this.dottedLine1 = _this.add.image(x + 37, y - 47, "dottedLine1");
          _this.dottedLine1.angle = 90;
          _this.UndoGrp2.addChild(_this.dottedLine1);
          y -= 15;
        }

        _this.distanceTravelled = 3;
        setTimeout(_this.showDistance2, 300);

        _this.whiteCircle = _this.add.image(x + 25, y - 60, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        _this.pointArray.push({
          x: _this.whiteCircle.x,
          y: _this.whiteCircle.y,
        });

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

        _this.moveCount = 2;

        _this.canClickUp = false;
        _this.canClickDown = false;
        _this.canClickLeft = true;
        _this.canClickRight = true;
      } else if (_this.moveCount === 2) {
        if (_this.divideLeft === true) {
          _this.whiteCircle.destroy();

          var x = 406;
          y = 383;
          _this.RightDown = _this.add.image(x, y, "RightDown");
          _this.UndoGrp3.addChild(_this.RightDown);

          _this.LeftUp = _this.add.image(x - 38, y - 32, "LeftUp");
          _this.UndoGrp3.addChild(_this.LeftUp);

          for (let i = 0; i < 2; i++) {
            _this.dottedLine1 = _this.add.image(x - 35, y - 50, "dottedLine1");
            _this.dottedLine1.angle = 90;
            y -= 15;
            _this.UndoGrp3.addChild(_this.dottedLine1);
          }

          _this.distanceTravelled = 4;
          setTimeout(this.showDistance2, 300);

          _this.whiteCircle = _this.add.image(x - 48, y - 65, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // _this.point1.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.moveCount = 3;

          _this.canClickUp = true;
          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = false;
        } else if (_this.divideRight === true) {
          _this.whiteCircle.destroy();
          var x = 435;
          y = 385;

          _this.LeftDown = _this.add.image(x, y, "LeftDown");

          _this.UndoGrp3.addChild(_this.LeftDown);

          for (let i = 0; i < 3; i++) {
            _this.dottedLine5 = _this.add.image(x + 38, y, "dottedLine5");
            x += 75;

            _this.UndoGrp3.addChild(_this.dottedLine5);
          }
          _this.dottedLine1 = _this.add.image(x + 38, y, "dottedLine1");
          _this.UndoGrp3.addChild(_this.dottedLine1);

          _this.distanceTravelled = 6;
          setTimeout(_this.showDistance2, 300);

          _this.whiteCircle = _this.add.image(x + 60, y - 10, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // _this.point2.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.moveCount = 3;

          _this.canClickUp = true;
          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = false;
        }
      } else if (_this.moveCount === 3) {
        if (_this.divideLeft === true) {
          _this.whiteCircle.destroy();

          var x = 371;
          y = 240;
          _this.dottedLine5 = _this.add.image(x, y, "dottedLine5");
          _this.dottedLine5.angle = 90;
          _this.UndoGrp4.addChild(_this.dottedLine5);

          _this.distanceTravelled = 4;
          setTimeout(this.showDistance2, 300);

          _this.whiteCircle = _this.add.image(x - 10, y - 30, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // _this.point1.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.moveCount = 4;

          _this.canClickUp = false;
          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = true;
        }
        if (_this.divideRight === true) {
          _this.whiteCircle.destroy();

          var x = 718;
          y = 355;

          _this.RightUp = _this.add.image(x, y, "RightUp");
          _this.UndoGrp4.addChild(_this.RightUp);

          _this.dottedLine5 = _this.add.image(x + 32, y - 80, "dottedLine5");
          _this.dottedLine5.angle = 90;
          _this.UndoGrp4.addChild(_this.dottedLine5);

          _this.dottedLine3 = _this.add.image(x + 32, y - 125, "dottedLine3");
          _this.dottedLine3.angle = 90;
          _this.UndoGrp4.addChild(_this.dottedLine3);

          _this.distanceTravelled = 8;
          setTimeout(_this.showDistance2, 300);

          _this.whiteCircle = _this.add.image(x + 20, y - 155, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // _this.point2.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.moveCount = 4;

          _this.canClickUp = false;
          _this.canClickDown = false;
          _this.canClickLeft = true;
          _this.canClickRight = false;
        }
      } else if (_this.moveCount === 4) {
        if (_this.divideLeft === true) {
          _this.whiteCircle.alpha = 0;

          var x = 367;
          y = 190;

          _this.LeftDown = _this.add.image(x, y, "LeftDown");
          _this.UndoGrp5.addChild(_this.LeftDown);

          for (let i = 0; i < 2; i++) {
            _this.dottedLine5 = _this.add.image(x + 40, y, "dottedLine5");
            _this.UndoGrp5.addChild(_this.dottedLine5);
            x += 75;
          }

          _this.dottedLine3 = _this.add.image(x + 40, y, "dottedLine3");
          _this.UndoGrp5.addChild(_this.dottedLine3);

          _this.distanceTravelled = 8;
          setTimeout(_this.showDistance2, 300);

          _this.moveCount = 5;

          _this.canClickUp = false;
          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = false;

          _this.reachedDestination = true;
        }
        if (_this.divideRight === true) {
          _this.whiteCircle.alpha = 0;

          var x = 718;
          y = 190;

          _this.RightDown = _this.add.image(x, y, "RightDown");
          _this.UndoGrp5.addChild(_this.RightDown);

          _this.dottedLine5 = _this.add.image(x - 75, y, "dottedLine5");
          _this.UndoGrp5.addChild(_this.dottedLine5);

          _this.distanceTravelled = 9;
          setTimeout(_this.showDistance2, 300);

          _this.moveCount = 5;

          _this.canClickUp = false;
          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = false;

          _this.reachedDestination = true;
        }
      }
    }
    if (_this.firstLeft === true) {
      if (_this.moveCount === 0) {
        var x = 185;
        y = 490;

        for (let i = 0; i < 2; i++) {
          _this.dottedLine1 = _this.add.image(x, y, "dottedLine1");
          _this.UndoGrp.addChild(_this.dottedLine1);
          x -= 15;
        }

        _this.whiteCircle = _this.add.image(x - 10, y - 7, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        // _this.pointArray.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

        _this.moveCount = 1;

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = true;
      } else if (_this.moveCount === 1) {
        _this.whiteCircle.destroy();

        var x = 127;
        y = 460;

        _this.LeftUp = _this.add.image(x, y, "LeftUp");
        _this.UndoGrp2.addChild(_this.LeftUp);

        _this.dottedLine3 = _this.add.image(x + 4, y - 45, "dottedLine3");
        _this.dottedLine3.angle = 90;
        _this.UndoGrp2.addChild(_this.dottedLine3);

        _this.whiteCircle = _this.add.image(x - 10, y - 75, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        // _this.pointArray.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

        _this.moveCount = 2;

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = true;
      } else if (_this.moveCount === 2) {
        _this.whiteCircle.destroy();

        var x = 127;
        y = 340;

        // _this.LeftDown = _this.add.image(x + 2, y - 45, 'LeftDown');
        // _this.UndoGrp3.addChild(_this.LeftDown)

        _this.dottedLine5 = _this.add.image(x + 4, y, "dottedLine5");
        _this.dottedLine5.angle = 90;
        _this.UndoGrp3.addChild(_this.dottedLine5);

        _this.distanceTravelled = 2;
        setTimeout(_this.showDistance2, 300);

        _this.whiteCircle = _this.add.image(x - 6, y - 25, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        // _this.pointArray.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

        _this.moveCount = 3;

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = true;
        _this.canClickUp = false;
      } else if (_this.moveCount === 3) {
        _this.whiteCircle.destroy();

        var x = 129;
        y = 295;

        _this.LeftDown = _this.add.image(x, y, "LeftDown");
        _this.UndoGrp4.addChild(_this.LeftDown);

        for (let i = 0; i < 2; i++) {
          _this.dottedLine5 = _this.add.image(x + 40, y, "dottedLine5");
          _this.UndoGrp4.addChild(_this.dottedLine5);
          x += 75;
        }

        _this.dottedLine1 = _this.add.image(x + 40, y, "dottedLine1");
        _this.UndoGrp4.addChild(_this.dottedLine1);

        _this.distanceTravelled = 4;
        setTimeout(_this.showDistance2, 300);

        _this.whiteCircle = _this.add.image(x + 65, y - 7, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        // _this.pointArray.push({ x: _this.whiteCircle.x, y: _this.whiteCircle.y });

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

        _this.moveCount = 4;

        _this.canClickDown = true;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = true;
      } else if (_this.moveCount === 4) {
        _this.whiteCircle.destroy();

        if (_this.divideUp === true) {
          var x = 340;
          y = 265;

          _this.RightUp = _this.add.image(x, y, "RightUp");
          _this.UndoGrp5.addChild(_this.RightUp);

          _this.dottedLine3 = _this.add.image(x + 31, y - 48, "dottedLine3");
          _this.dottedLine3.angle = 90;
          _this.UndoGrp5.addChild(_this.dottedLine3);

          _this.distanceTravelled = 5;
          setTimeout(_this.showDistance2, 300);

          _this.whiteCircle = _this.add.image(x + 24, y - 80, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out
        }

        if (_this.divideDown === true) {
          var x = 340;
          y = 295;

          _this.RightDown = _this.add.image(x, y, "RightDown");
          _this.UndoGrp5.addChild(_this.RightDown);

          _this.dottedLine1 = _this.add.image(x + 30, y + 43, "dottedLine1");
          _this.dottedLine1.angle = 90;
          _this.UndoGrp5.addChild(_this.dottedLine1);

          _this.LeftUp = _this.add.image(x + 26, y + 60, "LeftUp");
          _this.UndoGrp5.addChild(_this.LeftUp);

          _this.dottedLine1 = _this.add.image(x + 65, y + 90, "dottedLine1");
          _this.UndoGrp5.addChild(_this.dottedLine1);

          _this.distanceTravelled = 5;
          setTimeout(_this.showDistance2, 300);

          _this.whiteCircle = _this.add.image(x + 80, y + 85, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out
        }

        _this.moveCount = 5;

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = true;
        _this.canClickUp = false;
      } else if (_this.moveCount === 5) {
        if (_this.divideUp === true) {
          _this.whiteCircle.alpha = 0;

          var x = 367;
          y = 190;

          _this.LeftDown = _this.add.image(367, 190, "LeftDown");
          _this.UndoGrp6.addChild(_this.LeftDown);

          for (let i = 0; i < 2; i++) {
            _this.dottedLine5 = _this.add.image(x + 40, y, "dottedLine5");
            _this.UndoGrp6.addChild(_this.dottedLine5);
            x += 75;
          }

          _this.dottedLine3 = _this.add.image(x + 40, y, "dottedLine3");
          _this.UndoGrp6.addChild(_this.dottedLine3);

          _this.distanceTravelled = 7;
          setTimeout(_this.showDistance2, 300);

          _this.moveCount = 6;

          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = false;
          _this.canClickUp = false;

          _this.reachedDestination = true;
        }

        if (_this.divideDown === true) {
          _this.whiteCircle.destroy();

          var x = 380;
          y = 385;

          for (let i = 0; i < 4; i++) {
            _this.dottedLine5 = _this.add.image(x + 40, y, "dottedLine5");
            _this.UndoGrp6.addChild(_this.dottedLine5);
            x += 75;
          }

          _this.distanceTravelled = 8;
          setTimeout(_this.showDistance2, 300);

          _this.whiteCircle = _this.add.image(725, y - 10, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = false;
          _this.canClickUp = true;

          _this.reachedDestination = false;
        }
        _this.moveCount = 6;
      } else if (_this.moveCount === 6) {
        _this.whiteCircle.destroy();
        var x = 718;
        y = 355;

        _this.RightUp = _this.add.image(x, y, "RightUp");
        _this.UndoGrp7.addChild(_this.RightUp);

        _this.dottedLine5 = _this.add.image(x + 32, y - 80, "dottedLine5");
        _this.dottedLine5.angle = 90;
        _this.UndoGrp7.addChild(_this.dottedLine5);

        _this.dottedLine3 = _this.add.image(x + 32, y - 125, "dottedLine3");
        _this.dottedLine3.angle = 90;
        _this.UndoGrp7.addChild(_this.dottedLine3);

        _this.distanceTravelled = 10;
        setTimeout(_this.showDistance2, 300);

        _this.whiteCircle = _this.add.image(x + 20, y - 155, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

        _this.moveCount = 7;

        _this.canClickDown = false;
        _this.canClickLeft = true;
        _this.canClickRight = false;
        _this.canClickUp = false;

        _this.reachedDestination = false;
      } else if (_this.moveCount === 7) {
        _this.whiteCircle.alpha = 0;

        var x = 718;
        y = 190;

        _this.RightDown = _this.add.image(x, y, "RightDown");
        _this.UndoGrp8.addChild(_this.RightDown);

        _this.dottedLine5 = _this.add.image(x - 75, y, "dottedLine5");
        _this.UndoGrp8.addChild(_this.dottedLine5);

        _this.distanceTravelled = 11;
        setTimeout(_this.showDistance2, 300);

        _this.moveCount = 8;

        _this.canClickUp = false;
        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;

        _this.reachedDestination = true;
      }
    }
  },

  showDistance2: function () {
    var x = 30;
    y = 7;
    if (_this.firstRight === true) {
      if (_this.moveCount === 1) {
        _this.pinkSquare = _this.add.image(300, 465, "pinkSquare");
        _this.distanceArray.push({
          x: _this.pinkSquare.x,
          y: _this.pinkSquare.y,
        });
      } else if (_this.moveCount === 2) {
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(400, 430, "pinkSquare");
        _this.distanceArray.push({
          x: _this.pinkSquare.x,
          y: _this.pinkSquare.y,
        });
      } else if (_this.moveCount === 3) {
        _this.pinkSquare.destroy();
        if (_this.divideLeft === true) {
          _this.pinkSquare = _this.add.image(340, 330, "pinkSquare");
          _this.distanceArray.push({
            x: _this.pinkSquare.x,
            y: _this.pinkSquare.y,
          });
        } else {
          _this.pinkSquare = _this.add.image(620, 360, "pinkSquare");
          _this.distanceArray.push({
            x: _this.pinkSquare.x,
            y: _this.pinkSquare.y,
          });
        }
      } else if (_this.moveCount === 4) {
        _this.pinkSquare.destroy();
        if (_this.divideLeft === true) {
          _this.pinkSquare = _this.add.image(340, 330, "pinkSquare");
          _this.distanceArray.push({
            x: _this.pinkSquare.x,
            y: _this.pinkSquare.y,
          });
        } else {
          _this.pinkSquare = _this.add.image(710, 270, "pinkSquare");
          _this.distanceArray.push({
            x: _this.pinkSquare.x,
            y: _this.pinkSquare.y,
          });
        }
      } else if (_this.moveCount === 5) {
        _this.pinkSquare.destroy();
        if (_this.divideLeft === true) {
          _this.pinkSquare = _this.add.image(470, 170, "pinkSquare");
          _this.distanceArray.push({
            x: _this.pinkSquare.x,
            y: _this.pinkSquare.y,
          });
        } else {
          _this.pinkSquare = _this.add.image(650, 170, "pinkSquare");
          _this.distanceArray.push({
            x: _this.pinkSquare.x,
            y: _this.pinkSquare.y,
          });
        }
      }
    } else if (_this.firstLeft === true) {
      if (_this.moveCount === 3) {
        _this.pinkSquare = _this.add.image(100, 370, "pinkSquare");
      } else if (_this.moveCount === 4) {
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(180, 275, "pinkSquare");
      } else if (_this.moveCount === 5) {
        _this.pinkSquare.destroy();
        if (_this.divideUp === true) {
          _this.pinkSquare = _this.add.image(340, 230, "pinkSquare");
        }
        if (_this.divideDown === true) {
          _this.pinkSquare = _this.add.image(340, 330, "pinkSquare");
        }
      } else if (_this.moveCount === 6) {
        _this.pinkSquare.destroy();
        if (_this.divideUp === true) {
          _this.pinkSquare = _this.add.image(450, 170, "pinkSquare");
        }
        if (_this.divideDown === true) {
          _this.pinkSquare = _this.add.image(570, 360, "pinkSquare");
        }
      } else if (_this.moveCount === 7) {
        var x = 20;
        y = 7;
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(720, 250, "pinkSquare");
      } else if (_this.moveCount === 8) {
        var x = 20;
        y = 7;
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(650, 165, "pinkSquare");
      }
    }

    var text = _this.add.text(x, y, _this.distanceTravelled, {
      font: "30px Arial",
      fontWeight: "bold",
      fill: "#663399", // purple color "#E6E6FAs"
    });

    _this.pinkSquare.addChild(text);

    // _this.extraGrp.addChild(_this.pinkSquare);
    // Create a tween to change alpha from 0 to 1 and back
    var blinkTween = _this.add.tween(_this.pinkSquare);
    blinkTween.to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out
  },

  RiverToFarm: function () {
    setTimeout(_this.changeFrame, 100);
    if (_this.firstUp === true) {
      if (_this.moveCount === 0) {
        var x = 130;
        y = 353;

        for (let i = 0; i < 2; i++) {
          _this.dottedLine1 = _this.add.image(x, y, "dottedLine1");
          _this.dottedLine1.angle = 90;
          _this.UndoGrp.addChild(_this.dottedLine1);
          y -= 15;
        }

        _this.whiteCircle = _this.add.image(x - 8, y - 15, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        _this.pointArray.push({
          x: _this.whiteCircle.x,
          y: _this.whiteCircle.y,
        });

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

        _this.moveCount = 1;

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = true;
        _this.canClickUp = false;
      } else if (_this.moveCount === 1) {
        _this.whiteCircle.alpha = 0;

        var x = 127;
        y = 297;

        _this.LeftDown = _this.add.image(x, y, "LeftDown");
        _this.UndoGrp2.addChild(_this.LeftDown);

        for (let i = 0; i < 2; i++) {
          _this.dottedLine5 = _this.add.image(x + 38, y, "dottedLine5");
          _this.UndoGrp2.addChild(_this.dottedLine5);

          x += 75;
        }
        for (let i = 0; i < 2; i++) {
          _this.dottedLine1 = _this.add.image(x + 38, y, "dottedLine1");
          _this.UndoGrp2.addChild(_this.dottedLine1);

          x += 15;
        }
        _this.distanceTravelled = 2;
        setTimeout(_this.showDistance3, 300);

        _this.moveCount = 2;

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = false;

        _this.reachedDestination = true;
      }
    }
    if (_this.firstDown === true) {
      if (_this.moveCount === 0) {
        var x = 130;
        y = 420;

        _this.dottedLine3 = _this.add.image(x, y - 8, "dottedLine3");
        _this.dottedLine3.angle = 90;
        _this.UndoGrp.addChild(_this.dottedLine3);

        _this.dottedLine1 = _this.add.image(x, y + 37, "dottedLine1");
        _this.dottedLine1.angle = 90;
        _this.delete.addChild(_this.dottedLine1);

        _this.whiteCircle = _this.add.image(x - 8, y + 60, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

        _this.moveCount = 1;

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = true;
        _this.canClickUp = false;
      } else if (_this.moveCount === 1) {
        _this.delete.alpha = 0;
        _this.whiteCircle.destroy();

        var x = 130;
        y = 460;

        _this.LeftUp = _this.add.image(x - 3, y, "LeftUp");
        _this.UndoGrp2.addChild(_this.LeftUp);

        for (let i = 0; i < 3; i++) {
          _this.dottedLine5 = _this.add.image(x + 38, y + 30, "dottedLine5");
          _this.UndoGrp2.addChild(_this.dottedLine5);

          x += 75;
        }
        for (let i = 0; i < 2; i++) {
          _this.dottedLine1 = _this.add.image(x + 38, y + 30, "dottedLine1");
          if (i === 0) {
            _this.UndoGrp2.addChild(_this.dottedLine1);
          } else {
            _this.delete2.addChild(_this.dottedLine1);
          }
          x += 15;
        }
        _this.distanceTravelled = 2;
        setTimeout(_this.showDistance3, 300);

        _this.whiteCircle = _this.add.image(x + 37, y + 23, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

        _this.moveCount = 2;

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = true;
      } else if (_this.moveCount === 2) {
        _this.whiteCircle.destroy();
        _this.delete2.alpha = 0;
        var x = 407;
        y = 468;

        _this.RightUp = _this.add.image(x, y - 8, "RightUp");
        _this.UndoGrp3.addChild(_this.RightUp);

        for (let i = 0; i < 2; i++) {
          _this.dottedLine1 = _this.add.image(x + 32, y - 26, "dottedLine1");
          _this.dottedLine1.angle = 90;
          _this.UndoGrp3.addChild(_this.dottedLine1);

          y -= 15;
        }

        _this.whiteCircle = _this.add.image(x + 18, y - 45, "whiteCircle");
        _this.whiteCircle.alpha = 0;

        // Create a tween to change alpha from 0 to 1 and back
        var blinkTween = _this.add.tween(_this.whiteCircle);
        blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out

        _this.moveCount = 3;

        _this.canClickDown = false;
        _this.canClickLeft = true;
        _this.canClickRight = true;
        _this.canClickUp = false;
      } else if (_this.moveCount === 3) {
        if (_this.divideLeft === true) {
          _this.whiteCircle.alpha = 0;
          var x = 406;
          y = 383;
          _this.RightDown = _this.add.image(x, y, "RightDown");
          _this.UndoGrp4.addChild(_this.RightDown);

          _this.LeftUp = _this.add.image(x - 38, y - 32, "LeftUp");
          _this.UndoGrp4.addChild(_this.LeftUp);

          for (let i = 0; i < 2; i++) {
            _this.dottedLine1 = _this.add.image(x - 35, y - 50, "dottedLine1");
            _this.dottedLine1.angle = 90;
            y -= 15;
            _this.UndoGrp4.addChild(_this.dottedLine1);
          }

          _this.distanceTravelled = 4;
          setTimeout(_this.showDistance3, 300);

          _this.moveCount = 4;

          _this.canClickUp = false;
          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = false;

          _this.reachedDestination = true;
        } else if (_this.divideRight === true) {
          _this.whiteCircle.destroy();
          var x = 435;
          y = 385;

          _this.LeftDown = _this.add.image(x, y, "LeftDown");

          _this.UndoGrp4.addChild(_this.LeftDown);

          for (let i = 0; i < 3; i++) {
            _this.dottedLine5 = _this.add.image(x + 38, y, "dottedLine5");
            x += 75;

            _this.UndoGrp4.addChild(_this.dottedLine5);
          }
          _this.dottedLine1 = _this.add.image(x + 38, y, "dottedLine1");
          _this.UndoGrp4.addChild(_this.dottedLine1);

          _this.distanceTravelled = 6;
          setTimeout(_this.showDistance3, 300);

          _this.whiteCircle = _this.add.image(x + 60, y - 10, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.moveCount = 4;

          _this.canClickUp = true;
          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = false;
        }
      } else if (_this.moveCount === 4) {
        if (_this.divideRight === true) {
          _this.whiteCircle.destroy();

          var x = 718;
          y = 355;

          _this.RightUp = _this.add.image(x, y, "RightUp");
          _this.UndoGrp5.addChild(_this.RightUp);

          _this.dottedLine5 = _this.add.image(x + 32, y - 80, "dottedLine5");
          _this.dottedLine5.angle = 90;
          _this.UndoGrp5.addChild(_this.dottedLine5);

          _this.dottedLine3 = _this.add.image(x + 32, y - 125, "dottedLine3");
          _this.dottedLine3.angle = 90;
          _this.UndoGrp5.addChild(_this.dottedLine3);

          _this.distanceTravelled = 8;
          setTimeout(this.showDistance3, 300);

          _this.whiteCircle = _this.add.image(x + 20, y - 155, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.moveCount = 5;

          _this.canClickUp = false;
          _this.canClickDown = false;
          _this.canClickLeft = true;
          _this.canClickRight = false;
        }
      } else if (_this.moveCount === 5) {
        if (_this.divideRight === true) {
          _this.whiteCircle.destroy();

          var x = 718;
          y = 190;

          _this.RightDown = _this.add.image(x, y, "RightDown");
          _this.UndoGrp6.addChild(_this.RightDown);

          for (let i = 0; i < 4; i++) {
            _this.dottedLine5 = _this.add.image(x - 75, y, "dottedLine5");
            _this.UndoGrp6.addChild(_this.dottedLine5);

            x -= 75;
          }

          _this.distanceTravelled = 10;
          setTimeout(_this.showDistance3, 300);

          _this.whiteCircle = _this.add.image(x - 30, y - 5, "whiteCircle");
          _this.whiteCircle.alpha = 0;

          // Create a tween to change alpha from 0 to 1 and back
          var blinkTween = _this.add.tween(_this.whiteCircle);
          blinkTween.to({ alpha: 1 }, 9, Phaser.Easing.Linear.None, true, 500);

          _this.moveCount = 6;

          _this.canClickUp = false;
          _this.canClickDown = true;
          _this.canClickLeft = false;
          _this.canClickRight = false;
        }
      } else if (_this.moveCount === 6) {
        if (_this.divideRight === true) {
          _this.whiteCircle.alpha = 0;

          var x = 368;
          y = 190;

          _this.dottedLine1 = _this.add.image(x + 35, y, "dottedLine1");
          _this.UndoGrp7.addChild(_this.dottedLine1);

          _this.LeftDown = _this.add.image(x, y, "LeftDown");
          _this.UndoGrp7.addChild(_this.LeftDown);

          _this.dottedLine3 = _this.add.image(x + 3, y + 43, "dottedLine3");
          _this.dottedLine3.angle = 90;
          _this.UndoGrp7.addChild(_this.dottedLine3);

          _this.distanceTravelled = 11;
          setTimeout(_this.showDistance3, 300);

          _this.moveCount = 7;

          _this.canClickUp = false;
          _this.canClickDown = false;
          _this.canClickLeft = false;
          _this.canClickRight = false;

          _this.reachedDestination = true;
        }
      }
    }
  },

  UndoLastStep3: function () {
    _this.reachedDestination = false;
    if (_this.firstUp === true) {
      if (_this.moveCount == 1) {
        _this.moveCount -= 1;
        _this.whiteCircle.destroy();
        _this.UndoGrp.removeAll(true);
      }
      if (_this.moveCount == 2) {
        _this.moveCount -= 1;

        _this.whiteCircle.alpha = 0;
        var tween = _this.add
          .tween(_this.whiteCircle)
          .to(
            { x: _this.pointArray[0].x, y: _this.pointArray[0].y },
            400,
            Phaser.Easing.Linear.None,
            true
          );
        tween.onComplete.add(function () {
          _this.whiteCircle.alpha = 1;
        });

        _this.UndoGrp2.removeAll(true);

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = true;
        _this.canClickUp = false;
      }

      if (_this.pinkSquare) _this.pinkSquare.destroy();
    } else if (_this.firstDown === true) {
      _this.pointArray = [
        { x: 122, y: 480 },
        { x: 422, y: 483 },
        { x: 425, y: 393 },
      ];

      _this.point1 = [
        { x: 720, y: 375 },
        { x: 738, y: 200 },
        { x: 388, y: 185 },
      ];

      if (_this.moveCount === 1) {
        _this.moveCount -= 1;
        _this.UndoGrp.removeAll(true);
      }
      if (_this.moveCount === 2) {
        _this.moveCount -= 1;
        _this.UndoGrp2.removeAll(true);
        _this.delete.alpha = 1;
        _this.delete2.alpha = 0;

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = true;
        _this.canClickUp = false;
      }
      if (_this.moveCount === 3) {
        _this.moveCount -= 1;
        _this.UndoGrp3.removeAll(true);
        _this.delete2.alpha = 1;

        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = true;
      }
      if (_this.moveCount === 4) {
        _this.moveCount -= 1;
        _this.UndoGrp4.removeAll(true);

        _this.divideLeft = false;
        _this.divideRight = false;

        _this.canClickDown = false;
        _this.canClickLeft = true;
        _this.canClickRight = true;
        _this.canClickUp = false;
      }
      if (_this.moveCount === 5) {
        _this.moveCount -= 1;
        _this.UndoGrp5.removeAll(true);
        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = true;
        _this.canClickUp = false;
      }
      if (_this.moveCount === 6) {
        _this.moveCount -= 1;
        _this.UndoGrp6.removeAll(true);
        _this.canClickDown = false;
        _this.canClickLeft = true;
        _this.canClickRight = false;
        _this.canClickUp = false;
      }
      if (_this.moveCount === 7) {
        _this.moveCount -= 1;
        _this.UndoGrp7.removeAll(true);
        _this.canClickDown = false;
        _this.canClickLeft = false;
        _this.canClickRight = false;
        _this.canClickUp = false;
      }

      if (_this.moveCount > 0) {
        _this.whiteCircle.alpha = 0;
        if (_this.divideRight === true) {
          if (_this.moveCount === 4) {
            var tween = _this.add
              .tween(_this.whiteCircle)
              .to(
                { x: _this.point1[0].x, y: _this.point1[0].y },
                400,
                Phaser.Easing.Linear.None,
                true
              );
          }
          if (_this.moveCount === 5) {
            var tween = _this.add
              .tween(_this.whiteCircle)
              .to(
                { x: _this.point1[1].x, y: _this.point1[1].y },
                400,
                Phaser.Easing.Linear.None,
                true
              );
          }
          if (_this.moveCount === 6) {
            var tween = _this.add
              .tween(_this.whiteCircle)
              .to(
                { x: _this.point1[2].x, y: _this.point1[2].y },
                400,
                Phaser.Easing.Linear.None,
                true
              );
          }

          tween.onComplete.add(function () {
            _this.whiteCircle.alpha = 1;
          });
        } else {
          var tween = _this.add.tween(_this.whiteCircle).to(
            {
              x: _this.pointArray[_this.moveCount - 1].x,
              y: _this.pointArray[_this.moveCount - 1].y,
            },
            400,
            Phaser.Easing.Linear.None,
            true
          );
          tween.onComplete.add(function () {
            _this.whiteCircle.alpha = 1;
          });
        }
      }

      if (_this.pinkSquare) _this.pinkSquare.destroy();
    }
    if (_this.moveCount === 0) {
      if (_this.whiteCircle) _this.whiteCircle.destroy();
      _this.canClickUp = true;
      _this.canClickDown = true;
      _this.canClickRight = false;
      _this.canClickLeft = false;
      _this.firstUp = false;
      _this.firstDown = false;
      _this.reachedDestination = false;
      _this.delete.removeAll(true);
      _this.delete2.removeAll(true);
      // _this.divideLeft = false;
      // _this.divideRight = false;
      _this.point1 = [];
      _this.point2 = [];
      _this.pointArray = [];
      _this.distanceTravelled = 0;
    }
    _this.updateDistance3();
  },

  updateDistance3: function () {
    var x = 30;
    y = 7;
    if (_this.firstUp === true) {
      if (_this.moveCount === 2) {
        _this.distanceTravelled = 2;
        _this.pinkSquare = _this.add.image(300, 465, "pinkSquare");
      }
    }

    if (_this.firstDown === true) {
      if (_this.moveCount === 2) {
        _this.pinkSquare = _this.add.image(280, 470, "pinkSquare");
      } else if (_this.moveCount === 4) {
        if (_this.divideLeft === true) {
          _this.distanceTravelled = 4;
          _this.pinkSquare = _this.add.image(340, 330, "pinkSquare");
        } else {
          _this.distanceTravelled = 6;
          _this.pinkSquare = _this.add.image(620, 360, "pinkSquare");
        }
      } else if (_this.moveCount === 5) {
        _this.distanceTravelled = 8;
        _this.pinkSquare = _this.add.image(710, 270, "pinkSquare");
      } else if (_this.moveCount === 6) {
        var x = 20;
        y = 7;
        _this.distanceTravelled = 10;
        _this.pinkSquare = _this.add.image(450, 170, "pinkSquare");
      } else if (_this.moveCount === 7) {
        var x = 20;
        y = 7;
        _this.distanceTravelled = 11;
        _this.pinkSquare = _this.add.image(340, 210, "pinkSquare");
      }
    }

    if (_this.pinkSquare) {
      var text = _this.add.text(x, y, _this.distanceTravelled, {
        font: "30px Arial",
        fontWeight: "bold",
        fill: "#663399", // purple color "#E6E6FAs"
      });
      _this.pinkSquare.addChild(text);
      // Create a tween to change alpha from 0 to 1 and back
      var blinkTween = _this.add.tween(_this.pinkSquare);
      blinkTween.to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out
    }

    // _this.extraGrp.addChild(_this.pinkSquare);
  },

  showDistance3: function () {
    var x = 30;
    y = 7;
    if (_this.firstUp === true) {
      if (_this.moveCount === 2) {
        _this.pinkSquare = _this.add.image(230, 275, "pinkSquare");
      }
    } else if (_this.firstDown === true) {
      if (_this.moveCount === 2) {
        _this.pinkSquare = _this.add.image(280, 470, "pinkSquare");
      } else if (_this.moveCount === 4) {
        _this.pinkSquare.destroy();
        if (_this.divideLeft === true) {
          _this.pinkSquare = _this.add.image(340, 330, "pinkSquare");
        } else if (_this.divideRight === true) {
          _this.pinkSquare = _this.add.image(620, 360, "pinkSquare");
        }
      } else if (_this.moveCount === 5) {
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(710, 270, "pinkSquare");
      } else if (_this.moveCount === 6) {
        var x = 20;
        y = 7;
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(510, 170, "pinkSquare");
      } else if (_this.moveCount === 7) {
        var x = 20;
        y = 7;
        _this.pinkSquare.destroy();
        _this.pinkSquare = _this.add.image(340, 210, "pinkSquare");
      }
    }

    var text = _this.add.text(x, y, _this.distanceTravelled, {
      font: "30px Arial",
      fontWeight: "bold",
      fill: "#663399", // purple color "#E6E6FAs"
    });

    if (_this.pinkSquare) {
      _this.pinkSquare.addChild(text);
      // Create a tween to change alpha from 0 to 1 and back
      var blinkTween = _this.add.tween(_this.pinkSquare);
      blinkTween.to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 500); // Delay 1000ms (1 second) before fading out
    }
  },

  //Tick button in the question screen and the evaluation of the top box or workspace.
  tickSecondEvaluation: function (target) {
    console.log("tick evaluation 2");
    _this.clickSound.play();

    if (_this.reachedDestination === true) {
      _this.pauseVoice();
      _this.counterCelebrationSound.play();
      target.destroy();
      _this.IsKeyPressed = false;

      var tween = _this.add
        .tween(_this.Up)
        .to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true);

      tween.onComplete.add(function () {
        _this.Up.destroy();
      }, this);

      var tween2 = _this.add
        .tween(_this.Down)
        .to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true);

      tween2.onComplete.add(function () {
        _this.Down.destroy();
      }, this);

      var tween3 = _this.add
        .tween(_this.Left)
        .to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true);

      tween3.onComplete.add(function () {
        _this.Left.destroy();
      }, this);

      var tween4 = _this.add
        .tween(_this.Right)
        .to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true);

      tween4.onComplete.add(function () {
        _this.Right.destroy();
      }, this);

      // _this.time.events.add(1000, function () {
      //     _this.Up.destroy();
      //     _this.Down.destroy();
      //     _this.Left.destroy();
      //     _this.Right.destroy();
      // });

      _this.eraser.destroy();
      _this.whiteCircle.destroy();

      _this.distanceBox.destroy();

      _this.distanceBox2 = _this.add.sprite(25, 55, "distanceBox2");
      if (_this.mapArray[_this.count1] === 1) {
        _this.Map1.addChild(_this.distanceBox2);
      }
      if (_this.mapArray[_this.count1] === 2) {
        _this.Map2.addChild(_this.distanceBox2);
      }
      if (_this.mapArray[_this.count1] === 3) {
        _this.Map3.addChild(_this.distanceBox2);
      }
      if (_this.mapArray[_this.count1] === 4) {
        _this.Map4.addChild(_this.distanceBox2);
      }

      var text = _this.add.text(
        175,
        15,
        "1" + "      " + "5" + "      " + "10",
        {
          font: "26px Arial",
          fontWeight: "bold",
          fill: "0x000000",
        }
      );

      var text2 = _this.add.text(30, 25, "1" + " : 100", {
        font: "34px Arial",
        fontWeight: "bold",
        fill: "#FF0000", // Red color "#FF0000"
      });

      var text3 = _this.add.text(30, 85, _this.distanceTravelled + " :", {
        font: "34px Arial",
        fontWeight: "bold",
        fill: "#65B4C3", // blue color "#FF0000"
      });

      _this.distanceBox2.addChild(text);
      _this.distanceBox2.addChild(text2);
      _this.distanceBox2.addChild(text3);

      _this.AnswerBox1 = _this.add.sprite(80, 77, "Text box_5");
      _this.AnswerBox1.scale.setTo(1.6, 1.4);
      _this.distanceBox2.addChild(_this.AnswerBox1);

      _this.AnswerBox1.inputEnabled = true;
      _this.AnswerBox1.input.useHandCursor = true;

      _this.addNumberPad();

      _this.AnswerBox1.events.onInputDown.add(function () {
        _this.clickSound.play();
        _this.wrongbtn.events.onInputDown.removeAll();
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
        for (let i = 1; i <= 10; i++) {
          _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
          _this.numGroup
            .getChildAt(i)
            .events.onInputDown.add(_this.numClicked1, _this);
        }
      });

      _this.Ask_Question7.play();
      _this.Question_flag = 7;
    } else {
      _this.noofAttempts++;
      _this.wrongSound.play();
    }
  },

  randomizeMapQuestion: function () {
    console.log("ask direction question");
    _this.pauseVoice();

    _this.place1 = false;
    _this.place2 = false;
    _this.place3 = false;
    _this.place4 = false;
    _this.place5 = false;
    _this.place6 = false;

    _this.askfurther = [1, 2];
    Phaser.ArrayUtils.shuffle(_this.askfurther);

    if (_this.mapArray[_this.count1] === 1) {
      if (_this.askfurther[0] === 1) {
        _this.Ask_Question39.play();
        _this.Question_flag = 39;
      } else {
        _this.Ask_Question28.play();
        _this.Question_flag = 28;
      }
    }
    if (_this.mapArray[_this.count1] === 2) {
      if (_this.askfurther[0] === 1) {
        _this.Ask_Question40.play();
        _this.Question_flag = 40;
      } else {
        _this.Ask_Question5.play();
        _this.Question_flag = 5;
      }
    }
    if (_this.mapArray[_this.count1] === 3) {
      if (_this.askfurther[0] === 1) {
        _this.Ask_Question41.play();
        _this.Question_flag = 41;
      } else {
        _this.Ask_Question29.play();
        _this.Question_flag = 29;
      }
    }
    if (_this.mapArray[_this.count1] === 4) {
      if (_this.askfurther[0] === 1) {
        _this.Ask_Question42.play();
        _this.Question_flag = 42;
      } else {
        _this.Ask_Question30.play();
        _this.Question_flag = 30;
      }
    }

    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(_this.tickThirdEvaluation, _this);
  },

  tickThirdEvaluation: function (target) {
    if (
      (_this.askfurther[0] === 2 && _this.place6 === true) ||
      (_this.askfurther[0] === 1 && _this.place1 === true)
    ) {
      target.destroy();
      _this.celebrationSound.play();
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      _this.starActions();

      _this.tick = _this.add.sprite(850, 470, "TickBtn");

      _this.tick.inputEnabled = true;
      _this.tick.input.useHandCursor = true;
      _this.tick.events.onInputDown.add(_this.tickFourthEvaluation, _this);

      if (_this.mapArray[_this.count1] === 1) {
        _this.place1_M1.inputEnabled = false;
        _this.place1_M1.frame = 0;

        _this.place2_M1.inputEnabled = false;
        _this.place2_M1.frame = 0;

        _this.place3_M1.inputEnabled = false;
        _this.place3_M1.frame = 0;

        _this.place4_M1.inputEnabled = false;
        _this.place4_M1.frame = 0;

        _this.place5_M1.inputEnabled = false;
        _this.place5_M1.frame = 0;

        _this.place6_M1.inputEnabled = false;
        _this.place6_M1.frame = 0;

        _this.water_1.inputEnabled = false;
        _this.water_1.frame = 0;

        _this.water_2.inputEnabled = false;
        _this.water_2.frame = 0;

        _this.bridge.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      if (_this.mapArray[_this.count1] === 2) {
        _this.place1_M2.inputEnabled = false;
        _this.place1_M2.frame = 0;

        _this.place2_M2.inputEnabled = false;
        _this.place2_M2.frame = 0;

        _this.place3_M2.inputEnabled = false;
        _this.place3_M2.frame = 0;

        _this.place4_M2.inputEnabled = false;
        _this.place4_M2.frame = 0;

        _this.place5_M2.inputEnabled = false;
        _this.place5_M2.frame = 0;

        _this.place6_M2.inputEnabled = false;
        _this.place6_M2.frame = 0;

        _this.track_1.inputEnabled = false;
        _this.track_1.frame = 0;

        _this.track_2.inputEnabled = false;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      if (_this.mapArray[_this.count1] === 3) {
        _this.place1_M3.inputEnabled = false;
        _this.place1_M3.frame = 0;

        _this.place2_M3.inputEnabled = false;
        _this.place2_M3.frame = 0;

        _this.place3_M3.inputEnabled = false;
        _this.place3_M3.frame = 0;

        _this.place4_M3.inputEnabled = false;
        _this.place4_M3.frame = 0;

        _this.place5_M3.inputEnabled = false;
        _this.place5_M3.frame = 0;

        _this.place6_M3.inputEnabled = false;
        _this.place6_M3.frame = 0;

        _this.water_1.inputEnabled = false;
        _this.water_1.frame = 0;

        _this.water_2.inputEnabled = false;
        _this.water_2.frame = 0;

        _this.bridge.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      if (_this.mapArray[_this.count1] === 4) {
        _this.place1_M4.inputEnabled = false;
        _this.place1_M4.frame = 0;

        _this.place2_M4.inputEnabled = false;
        _this.place2_M4.frame = 0;

        _this.place3_M4.inputEnabled = false;
        _this.place3_M4.frame = 0;

        _this.place4_M4.inputEnabled = false;
        _this.place4_M4.frame = 0;

        _this.place5_M4.inputEnabled = false;
        _this.place5_M4.frame = 0;

        _this.place6_M4.inputEnabled = false;
        _this.place6_M4.frame = 0;

        _this.track_1.inputEnabled = false;
        _this.track_1.frame = 0;

        _this.track_2.inputEnabled = false;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      _this.noofAttempts = 0;
      _this.AnsTimerCount = 0;
      _this.time.events.add(2000, function () {
        _this.FindWhichPlaceIsCloser();
      });
      // _this.FindWhichPlaceIsCloser();
    } else {
      _this.noofAttempts++;
      _this.wrongSound.play();
      if (_this.mapArray[_this.count1] === 1) {
        _this.place1_M1.inputEnabled = true;
        _this.place1_M1.input.useHandCursor = true;
        _this.place1_M1.frame = 0;

        _this.place2_M1.inputEnabled = true;
        _this.place2_M1.input.useHandCursor = true;
        _this.place2_M1.frame = 0;

        _this.place3_M1.inputEnabled = true;
        _this.place3_M1.input.useHandCursor = true;
        _this.place3_M1.frame = 0;

        _this.place4_M1.inputEnabled = true;
        _this.place4_M1.input.useHandCursor = true;
        _this.place4_M1.frame = 0;

        _this.place5_M1.inputEnabled = true;
        _this.place5_M1.input.useHandCursor = true;
        _this.place5_M1.frame = 0;

        _this.place6_M1.inputEnabled = true;
        _this.place6_M1.input.useHandCursor = true;
        _this.place6_M1.frame = 0;

        _this.water_1.inputEnabled = false;
        _this.water_1.input.useHandCursor = true;
        _this.water_1.frame = 0;

        _this.water_2.inputEnabled = false;
        _this.water_2.input.useHandCursor = true;
        _this.water_2.frame = 0;

        _this.bridge.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      if (_this.mapArray[_this.count1] === 2) {
        _this.place1_M2.inputEnabled = true;
        _this.place1_M2.input.useHandCursor = true;
        _this.place1_M2.frame = 0;

        _this.place2_M2.inputEnabled = true;
        _this.place2_M2.input.useHandCursor = true;
        _this.place2_M2.frame = 0;

        _this.place3_M2.inputEnabled = true;
        _this.place3_M2.input.useHandCursor = true;
        _this.place3_M2.frame = 0;

        _this.place4_M2.inputEnabled = true;
        _this.place4_M2.input.useHandCursor = true;
        _this.place4_M2.frame = 0;

        _this.place5_M2.inputEnabled = true;
        _this.place5_M2.input.useHandCursor = true;
        _this.place5_M2.frame = 0;

        _this.place6_M2.inputEnabled = true;
        _this.place6_M2.input.useHandCursor = true;
        _this.place6_M2.frame = 0;

        _this.track_1.inputEnabled = false;
        _this.track_1.input.useHandCursor = true;
        _this.track_1.frame = 0;

        _this.track_2.inputEnabled = false;
        _this.track_2.input.useHandCursor = true;
        _this.track_2.frame = 0;
        _this.extra1_M1.frame = 0;
      }
      if (_this.mapArray[_this.count1] === 3) {
        _this.place1_M3.inputEnabled = true;
        _this.place1_M3.input.useHandCursor = true;
        _this.place1_M3.frame = 0;

        _this.place2_M3.inputEnabled = true;
        _this.place2_M3.input.useHandCursor = true;
        _this.place2_M3.frame = 0;

        _this.place3_M3.inputEnabled = true;
        _this.place3_M3.input.useHandCursor = true;
        _this.place3_M3.frame = 0;

        _this.place4_M3.inputEnabled = true;
        _this.place4_M3.input.useHandCursor = true;
        _this.place4_M3.frame = 0;

        _this.place5_M3.inputEnabled = true;
        _this.place5_M3.input.useHandCursor = true;
        _this.place5_M3.frame = 0;

        _this.place6_M3.inputEnabled = true;
        _this.place6_M3.input.useHandCursor = true;
        _this.place6_M3.frame = 0;

        _this.water_1.inputEnabled = false;
        _this.water_1.input.useHandCursor = true;
        _this.water_1.frame = 0;

        _this.water_2.inputEnabled = false;
        _this.water_2.input.useHandCursor = true;
        _this.water_2.frame = 0;

        _this.bridge.frame = 0;

        _this.extra1_M1.frame = 0;
      }
      if (_this.mapArray[_this.count1] === 4) {
        _this.place1_M4.inputEnabled = true;
        _this.place1_M4.input.useHandCursor = true;
        _this.place1_M4.frame = 0;

        _this.place2_M4.inputEnabled = true;
        _this.place2_M4.input.useHandCursor = true;
        _this.place2_M4.frame = 0;

        _this.place3_M4.inputEnabled = true;
        _this.place3_M4.input.useHandCursor = true;
        _this.place3_M4.frame = 0;

        _this.place4_M4.inputEnabled = true;
        _this.place4_M4.input.useHandCursor = true;
        _this.place4_M4.frame = 0;

        _this.place5_M4.inputEnabled = true;
        _this.place5_M4.input.useHandCursor = true;
        _this.place5_M4.frame = 0;

        _this.place6_M4.inputEnabled = true;
        _this.place6_M4.input.useHandCursor = true;
        _this.place6_M4.frame = 0;

        _this.track_1.inputEnabled = false;
        _this.track_1.input.useHandCursor = true;
        _this.track_1.frame = 0;

        _this.track_2.inputEnabled = false;
        _this.track_2.input.useHandCursor = true;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      }
    }
  },

  FindWhichPlaceIsCloser: function () {
    _this.chooseNearPlace = [1, 2];
    Phaser.ArrayUtils.shuffle(_this.chooseNearPlace);
    if (_this.chooseNearPlace[0] === 2) {
      if (_this.mapArray[_this.count1] === 1) {
        _this.place4_M1.inputEnabled = true;
        _this.place5_M1.inputEnabled = true;
        _this.place4_M1.input.useHandCursor = true;
        _this.place5_M1.input.useHandCursor = true;
        _this.place6_M1.inputEnabled = false;
      }
      if (_this.mapArray[_this.count1] === 2) {
        _this.place4_M2.inputEnabled = true;
        _this.place5_M2.inputEnabled = true;
        _this.place4_M2.input.useHandCursor = true;
        _this.place5_M2.input.useHandCursor = true;
        _this.place6_M2.inputEnabled = false;
      }
      if (_this.mapArray[_this.count1] === 3) {
        _this.place4_M3.inputEnabled = true;
        _this.place5_M3.inputEnabled = true;
        _this.place4_M3.input.useHandCursor = true;
        _this.place5_M3.input.useHandCursor = true;
        _this.place6_M3.inputEnabled = false;
      }
      if (_this.mapArray[_this.count1] === 4) {
        _this.place4_M4.inputEnabled = true;
        _this.place5_M4.inputEnabled = true;
        _this.place4_M4.input.useHandCursor = true;
        _this.place5_M4.input.useHandCursor = true;
        _this.place6_M4.inputEnabled = false;
      }
    } else {
      if (_this.mapArray[_this.count1] === 1) {
        _this.place5_M1.inputEnabled = false;
        _this.place4_M1.inputEnabled = true;
        _this.place6_M1.inputEnabled = true;
        _this.place4_M1.input.useHandCursor = true;
        _this.place6_M1.input.useHandCursor = true;
      }
      if (_this.mapArray[_this.count1] === 2) {
        _this.place5_M2.inputEnabled = false;
        _this.place4_M2.inputEnabled = true;
        _this.place6_M2.inputEnabled = true;
        _this.place4_M2.input.useHandCursor = true;
        _this.place6_M2.input.useHandCursor = true;
      }
      if (_this.mapArray[_this.count1] === 3) {
        _this.place5_M3.inputEnabled = false;
        _this.place4_M3.inputEnabled = true;
        _this.place6_M3.inputEnabled = true;
        _this.place4_M3.input.useHandCursor = true;
        _this.place6_M3.input.useHandCursor = true;
      }
      if (_this.mapArray[_this.count1] === 4) {
        _this.place5_M4.inputEnabled = false;
        _this.place4_M4.inputEnabled = true;
        _this.place6_M4.inputEnabled = true;
        _this.place4_M4.input.useHandCursor = true;
        _this.place6_M4.input.useHandCursor = true;
      }
    }
    if (_this.chooseNearPlace[0] === 1) {
      _this.firstNear();
    }
    if (_this.chooseNearPlace[0] === 2) {
      _this.secondNear();
    }
    if (_this.chooseNearPlace[0] === 3) {
      _this.thirdNear();
    }
    if (_this.chooseNearPlace[0] === 4) {
      _this.fourthNear();
    }
  },

  firstNear: function () {
    _this.pauseVoice();

    if (_this.mapArray[_this.count1] === 1) {
      _this.Ask_Question21.play();
      _this.Question_flag = 21;

      _this.place4_M1.inputEnabled = true;
      _this.place5_M1.inputEnabled = true;
      _this.place6_M1.inputEnabled = false;
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Ask_Question8.play();
      _this.Question_flag = 8;

      _this.place4_M2.inputEnabled = true;
      _this.place5_M2.inputEnabled = true;
      _this.place6_M2.inputEnabled = false;
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Ask_Question22.play();
      _this.Question_flag = 22;

      _this.place4_M3.inputEnabled = true;
      _this.place5_M3.inputEnabled = true;
      _this.place6_M3.inputEnabled = false;
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Ask_Question23.play();
      _this.Question_flag = 23;

      _this.place4_M4.inputEnabled = true;
      _this.place5_M4.inputEnabled = true;
      _this.place6_M4.inputEnabled = false;
    }

    _this.nearestGroup = _this.add.group();

    var startPoint = [{ x: 445, y: 175 }];

    _this.blackCircle = _this.add.image(
      startPoint[0].x,
      startPoint[0].y,
      "blackCircle"
    );
    if (_this.mapArray[_this.count1] === 1) {
      _this.Map1.addChild(_this.blackCircle);
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Map2.addChild(_this.blackCircle);
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Map3.addChild(_this.blackCircle);
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Map4.addChild(_this.blackCircle);
    }

    var endPoint = [{ x: 570, y: 370 }];

    _this.pinkCircle = _this.add.image(
      endPoint[0].x,
      endPoint[0].y,
      "pinkCircle"
    );
    if (_this.mapArray[_this.count1] === 1) {
      _this.Map1.addChild(_this.pinkCircle);
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Map2.addChild(_this.pinkCircle);
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Map3.addChild(_this.pinkCircle);
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Map4.addChild(_this.pinkCircle);
    }

    var endPoint2 = [{ x: 210, y: 280 }];
    _this.blueCircle = _this.add.image(
      endPoint2[0].x,
      endPoint2[0].y,
      "blueCircle"
    );

    if (_this.mapArray[_this.count1] === 1) {
      _this.Map1.addChild(_this.blueCircle);
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Map2.addChild(_this.blueCircle);
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Map3.addChild(_this.blueCircle);
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Map4.addChild(_this.blueCircle);
    }

    var x1 = 483;
    y1 = 190;

    for (let i = 0; i < 3; i++) {
      var dottedLine5 = _this.add.image(x1, y1, "dottedLine5");
      _this.nearestGroup.addChild(dottedLine5);
      x1 += 75;
    }

    var x2 = 750;
    y2 = 235;
    var RightDown = _this.add.image(712 + 5, 190, "RightDown");
    _this.nearestGroup.addChild(RightDown);

    var dottedLine5 = _this.add.image(x2, y2, "dottedLine5");
    dottedLine5.angle = 90;
    _this.nearestGroup.addChild(dottedLine5);
    var dottedLine3 = _this.add.image(x2, y2 + 75, "dottedLine3");
    dottedLine3.angle = 90;
    _this.nearestGroup.addChild(dottedLine3);

    var x3 = 610;
    y3 = 385;

    var RightUp = _this.add.image(712 + 5, y3 - 30, "RightUp");
    _this.nearestGroup.addChild(RightUp);

    for (let i = 0; i < 2; i++) {
      var dottedLine3 = _this.add.image(x3, y3, "dottedLine3");
      _this.nearestGroup.addChild(dottedLine3);
      x3 += 45;
    }

    var dottedLine1 = _this.add.image(x3, y3, "dottedLine1");
    _this.nearestGroup.addChild(dottedLine1);

    _this.pinkSquare = _this.add.image(640, 360, "pinkSquare");

    var text = _this.add.text(30, 7, "6", {
      font: "30px Arial",
      fontWeight: "bold",
      fill: "#663399", // purple color "#E6E6FAs"
    });

    _this.pinkSquare.addChild(text);

    var a = 405;
    b = 190;

    var dottedLine3 = _this.add.image(a, b, "dottedLine3");
    _this.nearestGroup.addChild(dottedLine3);

    var a1 = 372;
    b1 = 235;
    var RightDown = _this.add.image(368, 190, "LeftDown");
    _this.nearestGroup.addChild(RightDown);

    var dottedLine3 = _this.add.image(a1, b1, "dottedLine3");
    dottedLine3.angle = 90;
    _this.nearestGroup.addChild(RightDown);

    var a2 = 290;
    b2 = 295;

    var RightUp = _this.add.image(340, 265, "RightUp");
    _this.nearestGroup.addChild(RightUp);

    var dottedLine3 = _this.add.image(a2, b2, "dottedLine3");
    _this.nearestGroup.addChild(dottedLine3);

    var dottedLine3 = _this.add.image(a2 - 45, b2, "dottedLine3");
    _this.nearestGroup.addChild(dottedLine3);

    _this.blueSquare = _this.add.image(270, 270, "blueSquare");

    var text2 = _this.add.text(30, 7, "3", {
      font: "30px Arial",
      fontWeight: "bold",
      fill: "#65B4C3", // blue color
    });

    _this.blueSquare.addChild(text2);

    _this.redCircle = _this.add.image(
      endPoint2[0].x,
      endPoint2[0].y,
      "redCircle"
    );
    _this.redSquare = _this.add.image(270, 270, "redSquare");

    var text = _this.add.text(23, 3, "3", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FFFFFF", // white color
    });
    _this.redSquare.addChild(text);

    _this.redCircle2 = _this.add.image(
      endPoint[0].x,
      endPoint[0].y,
      "redCircle"
    );
    _this.redSquare2 = _this.add.image(640, 360, "redSquare");

    var text2 = _this.add.text(23, 3, "6", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FFFFFF", // white color
    });
    _this.redSquare2.addChild(text2);

    _this.redCircle.alpha = 0;
    _this.redSquare.alpha = 0;

    _this.redCircle2.alpha = 0;
    _this.redSquare2.alpha = 0;

    if (_this.mapArray[_this.count1] === 1) {
      _this.place4_M1.inputEnabled = true;
      _this.place4_M1.input.useHandCursor = true;
      _this.place4_M1.events.onInputDown.add(function () {
        _this.nearestPlace = 1;

        _this.blueSquare.alpha = 0;
        _this.blueCircle.alpha = 0;

        _this.redCircle2.alpha = 0;
        _this.redSquare2.alpha = 0;

        _this.redCircle.alpha = 1;
        _this.redSquare.alpha = 1;

        _this.pinkSquare.alpha = 1;
        _this.pinkSquare.alpha = 1;

        _this.place1_M1.inputEnabled = false;
        _this.place1_M1.frame = 0;

        _this.place2_M1.inputEnabled = false;
        _this.place2_M1.frame = 0;

        _this.place3_M1.inputEnabled = false;
        _this.place3_M1.frame = 0;

        _this.place5_M1.inputEnabled = true;
        _this.place5_M1.input.useHandCursor = true;
        _this.place5_M1.frame = 0;

        _this.place6_M1.inputEnabled = false;
        _this.place6_M1.frame = 0;

        _this.water_1.frame = 0;
        _this.water_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });

      _this.place5_M1.inputEnabled = true;
      _this.place5_M1.input.useHandCursor = true;
      _this.place5_M1.events.onInputDown.add(function () {
        _this.nearestPlace = 0;

        _this.blueSquare.alpha = 1;
        _this.blueCircle.alpha = 1;

        _this.pinkSquare.alpha = 0;
        _this.pinkSquare.alpha = 0;

        _this.redCircle.alpha = 0;
        _this.redSquare.alpha = 0;

        _this.redCircle2.alpha = 1;
        _this.redSquare2.alpha = 1;

        _this.place1_M1.inputEnabled = false;
        _this.place1_M1.frame = 0;

        _this.place2_M1.inputEnabled = false;
        _this.place2_M1.frame = 0;

        _this.place3_M1.inputEnabled = false;
        _this.place3_M1.frame = 0;

        _this.place4_M1.inputEnabled = true;
        _this.place4_M1.input.useHandCursor = true;
        _this.place4_M1.frame = 0;

        _this.place6_M1.inputEnabled = false;
        _this.place6_M1.frame = 0;

        _this.water_1.frame = 0;
        _this.water_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.place4_M2.inputEnabled = true;
      _this.place4_M2.input.useHandCursor = true;
      _this.place4_M2.events.onInputDown.add(function () {
        _this.nearestPlace = 1;

        _this.blueSquare.alpha = 0;
        _this.blueCircle.alpha = 0;

        _this.redCircle2.alpha = 0;
        _this.redSquare2.alpha = 0;

        _this.redCircle.alpha = 1;
        _this.redSquare.alpha = 1;

        _this.pinkSquare.alpha = 1;
        _this.pinkSquare.alpha = 1;

        _this.place1_M2.inputEnabled = false;
        _this.place1_M2.frame = 0;

        _this.place2_M2.inputEnabled = false;
        _this.place2_M2.frame = 0;

        _this.place3_M2.inputEnabled = false;
        _this.place3_M2.frame = 0;

        _this.place5_M2.inputEnabled = true;
        _this.place5_M2.input.useHandCursor = true;
        _this.place5_M2.frame = 0;

        _this.place6_M2.inputEnabled = false;
        _this.place6_M2.frame = 0;

        _this.track_1.frame = 0;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });

      _this.place5_M2.inputEnabled = true;
      _this.place5_M2.input.useHandCursor = true;
      _this.place5_M2.events.onInputDown.add(function () {
        _this.nearestPlace = 0;

        _this.blueSquare.alpha = 1;
        _this.blueCircle.alpha = 1;

        _this.pinkSquare.alpha = 0;
        _this.pinkSquare.alpha = 0;

        _this.redCircle.alpha = 0;
        _this.redSquare.alpha = 0;

        _this.redCircle2.alpha = 1;
        _this.redSquare2.alpha = 1;

        _this.place1_M2.inputEnabled = false;
        _this.place1_M2.frame = 0;

        _this.place2_M2.inputEnabled = false;
        _this.place2_M2.frame = 0;

        _this.place3_M2.inputEnabled = false;
        _this.place3_M2.frame = 0;

        _this.place4_M2.inputEnabled = true;
        _this.place4_M2.input.useHandCursor = true;
        _this.place4_M2.frame = 0;

        _this.place6_M2.inputEnabled = false;
        _this.place6_M2.frame = 0;

        _this.track_1.frame = 0;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.place4_M3.inputEnabled = true;
      _this.place4_M3.input.useHandCursor = true;
      _this.place4_M3.events.onInputDown.add(function () {
        _this.nearestPlace = 1;

        _this.blueSquare.alpha = 0;
        _this.blueCircle.alpha = 0;

        _this.redCircle2.alpha = 0;
        _this.redSquare2.alpha = 0;

        _this.redCircle.alpha = 1;
        _this.redSquare.alpha = 1;

        _this.pinkSquare.alpha = 1;
        _this.pinkSquare.alpha = 1;

        _this.place1_M3.inputEnabled = false;
        _this.place1_M3.frame = 0;

        _this.place2_M3.inputEnabled = false;
        _this.place2_M3.frame = 0;

        _this.place3_M3.inputEnabled = false;
        _this.place3_M3.frame = 0;

        _this.place5_M3.inputEnabled = true;
        _this.place5_M3.input.useHandCursor = true;
        _this.place5_M3.frame = 0;

        _this.place6_M3.inputEnabled = false;
        _this.place6_M3.frame = 0;

        _this.water_1.frame = 0;
        _this.water_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });

      _this.place5_M3.inputEnabled = true;
      _this.place5_M3.input.useHandCursor = true;
      _this.place5_M3.events.onInputDown.add(function () {
        _this.nearestPlace = 0;

        _this.blueSquare.alpha = 1;
        _this.blueCircle.alpha = 1;

        _this.pinkSquare.alpha = 0;
        _this.pinkSquare.alpha = 0;

        _this.redCircle.alpha = 0;
        _this.redSquare.alpha = 0;

        _this.redCircle2.alpha = 1;
        _this.redSquare2.alpha = 1;

        _this.place1_M3.inputEnabled = false;
        _this.place1_M3.frame = 0;

        _this.place2_M3.inputEnabled = false;
        _this.place2_M3.frame = 0;

        _this.place3_M3.inputEnabled = false;
        _this.place3_M3.frame = 0;

        _this.place4_M3.inputEnabled = true;
        _this.place4_M3.input.useHandCursor = true;
        _this.place4_M3.frame = 0;

        _this.place6_M3.inputEnabled = false;
        _this.place6_M3.frame = 0;

        _this.water_1.frame = 0;
        _this.water_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.place4_M4.inputEnabled = true;
      _this.place4_M4.input.useHandCursor = true;
      _this.place4_M4.events.onInputDown.add(function () {
        _this.nearestPlace = 1;

        _this.blueSquare.alpha = 0;
        _this.blueCircle.alpha = 0;

        _this.redCircle2.alpha = 0;
        _this.redSquare2.alpha = 0;

        _this.redCircle.alpha = 1;
        _this.redSquare.alpha = 1;

        _this.pinkSquare.alpha = 1;
        _this.pinkSquare.alpha = 1;

        _this.place1_M4.inputEnabled = false;
        _this.place1_M4.frame = 0;

        _this.place2_M4.inputEnabled = false;
        _this.place2_M4.frame = 0;

        _this.place3_M4.inputEnabled = false;
        _this.place3_M4.frame = 0;

        _this.place5_M4.inputEnabled = true;
        _this.place5_M4.input.useHandCursor = true;
        _this.place5_M4.frame = 0;

        _this.place6_M4.inputEnabled = false;
        _this.place6_M4.frame = 0;

        _this.track_1.frame = 0;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });

      _this.place5_M4.inputEnabled = true;
      _this.place5_M4.input.useHandCursor = true;
      _this.place5_M4.events.onInputDown.add(function () {
        _this.nearestPlace = 0;

        _this.pinkSquare.alpha = 0;
        _this.blueSquare.alpha = 1;
        _this.blueCircle.alpha = 1;

        _this.pinkSquare.alpha = 0;
        _this.pinkSquare.alpha = 0;

        _this.redCircle.alpha = 0;
        _this.redSquare.alpha = 0;

        _this.redCircle2.alpha = 1;
        _this.redSquare2.alpha = 1;

        _this.place1_M4.inputEnabled = false;
        _this.place1_M4.frame = 0;

        _this.place2_M4.inputEnabled = false;
        _this.place2_M4.frame = 0;

        _this.place3_M4.inputEnabled = false;
        _this.place3_M4.frame = 0;

        _this.place4_M4.inputEnabled = true;
        _this.place4_M4.input.useHandCursor = true;
        _this.place4_M4.frame = 0;

        _this.place6_M4.inputEnabled = false;
        _this.place6_M4.frame = 0;

        _this.track_1.frame = 0;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });
    }
  },

  secondNear: function () {
    _this.pauseVoice();

    if (_this.mapArray[_this.count1] === 1) {
      _this.Ask_Question24.play();
      _this.Question_flag = 24;

      _this.place4_M1.inputEnabled = true;
      _this.place6_M1.inputEnabled = true;
      _this.place5_M1.inputEnabled = false;
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Ask_Question25.play();
      _this.Question_flag = 25;

      _this.place4_M2.inputEnabled = true;
      _this.place6_M2.inputEnabled = true;
      _this.place5_M2.inputEnabled = false;
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Ask_Question26.play();
      _this.Question_flag = 26;

      _this.place4_M3.inputEnabled = true;
      _this.place6_M3.inputEnabled = true;
      _this.place5_M3.inputEnabled = false;
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Ask_Question27.play();
      _this.Question_flag = 27;

      _this.place4_M4.inputEnabled = true;
      _this.place6_M4.inputEnabled = true;
      _this.place5_M4.inputEnabled = false;
    }
    _this.nearestGroup = _this.add.group();

    var startPoint = [{ x: 620, y: 370 }];

    _this.blackCircle = _this.add.image(
      startPoint[0].x,
      startPoint[0].y,
      "blackCircle"
    );

    var endPoint = [{ x: 340, y: 475 }];

    _this.pinkCircle = _this.add.image(
      endPoint[0].x,
      endPoint[0].y,
      "pinkCircle"
    );

    var endPoint2 = [{ x: 730, y: 280 }];
    _this.blueCircle = _this.add.image(
      endPoint2[0].x,
      endPoint2[0].y,
      "blueCircle"
    );

    if (_this.mapArray[_this.count1] === 1) {
      _this.Map1.addChild(_this.blackCircle);
      _this.Map1.addChild(_this.pinkCircle);
      _this.Map1.addChild(_this.blueCircle);
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Map2.addChild(_this.blackCircle);
      _this.Map2.addChild(_this.pinkCircle);
      _this.Map2.addChild(_this.blueCircle);
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Map3.addChild(_this.blackCircle);
      _this.Map3.addChild(_this.pinkCircle);
      _this.Map3.addChild(_this.blueCircle);
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Map4.addChild(_this.blackCircle);
      _this.Map4.addChild(_this.pinkCircle);
      _this.Map4.addChild(_this.blueCircle);
    }

    var x1 = 550;
    y1 = 385;

    for (let i = 0; i < 2; i++) {
      var dottedLine5 = _this.add.image(x1, y1, "dottedLine5");
      _this.nearestGroup.addChild(dottedLine5);
      x1 -= 75;
    }

    var x2 = 435;
    y2 = 385;
    var LeftDown = _this.add.image(x2, y2, "LeftDown");
    _this.nearestGroup.addChild(LeftDown);

    var x3 = 439;
    y3 = 430;
    var dottedLine3 = _this.add.image(x3, y3, "dottedLine3");
    dottedLine3.angle = 90;
    _this.nearestGroup.addChild(dottedLine3);

    var x4 = 409;
    y4 = 460;
    var RightUp = _this.add.image(x4, y4, "RightUp");
    _this.nearestGroup.addChild(RightUp);

    var x5 = 395;
    y5 = 490;
    for (let i = 0; i < 2; i++) {
      var dottedLine1 = _this.add.image(x5, y5, "dottedLine1");
      _this.nearestGroup.addChild(dottedLine1);

      x5 -= 15;
    }
    ///

    var a1 = 660;
    b1 = 385;
    var dottedLine5 = _this.add.image(a1, b1, "dottedLine5");
    _this.nearestGroup.addChild(dottedLine5);

    var a2 = 720;
    b2 = 355;
    var RightUp = _this.add.image(a2, b2, "RightUp");
    _this.nearestGroup.addChild(RightUp);

    var a3 = 751;
    b3 = 339;
    for (let i = 0; i < 2; i++) {
      var dottedLine1 = _this.add.image(a3, b3, "dottedLine1");
      dottedLine1.angle = 90;
      _this.nearestGroup.addChild(dottedLine1);

      b3 -= 15;
    }

    _this.pinkSquare = _this.add.image(390, 440, "pinkSquare");

    var text2 = _this.add.text(30, 7, "3", {
      font: "30px Arial",
      fontWeight: "bold",
      fill: "#663399", // pink color
    });

    _this.pinkSquare.addChild(text2);

    _this.blueSquare = _this.add.image(710, 355, "blueSquare");

    var text2 = _this.add.text(30, 7, "1", {
      font: "30px Arial",
      fontWeight: "bold",
      fill: "#65B4C3", // blue color
    });

    _this.blueSquare.addChild(text2);

    _this.redCircle = _this.add.image(
      endPoint[0].x,
      endPoint[0].y,
      "redCircle"
    );
    _this.redSquare = _this.add.image(400, 440, "redSquare");

    var text = _this.add.text(23, 3, "3", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FFFFFF", // white color
    });
    _this.redSquare.addChild(text);

    _this.redCircle2 = _this.add.image(
      endPoint2[0].x,
      endPoint2[0].y,
      "redCircle"
    );
    _this.redSquare2 = _this.add.image(710, 355, "redSquare");

    var text2 = _this.add.text(23, 3, "1", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FFFFFF", // white color
    });
    _this.redSquare2.addChild(text2);

    _this.redCircle.alpha = 0;
    _this.redSquare.alpha = 0;

    _this.redCircle2.alpha = 0;
    _this.redSquare2.alpha = 0;

    if (_this.mapArray[_this.count1] === 1) {
      _this.place4_M1.inputEnabled = true;
      _this.place4_M1.input.useHandCursor = true;
      _this.place4_M1.events.onInputDown.add(function () {
        _this.nearestPlace = 0;

        _this.blueSquare.alpha = 1;
        _this.blueCircle.alpha = 1;

        _this.redCircle2.alpha = 0;
        _this.redSquare2.alpha = 0;

        _this.redCircle.alpha = 1;
        _this.redSquare.alpha = 1;

        _this.pinkSquare.alpha = 0;
        _this.pinkCircle.alpha = 0;

        _this.place1_M1.inputEnabled = false;
        _this.place1_M1.frame = 0;

        _this.place2_M1.inputEnabled = false;
        _this.place2_M1.frame = 0;

        _this.place3_M1.inputEnabled = false;
        _this.place3_M1.frame = 0;

        _this.place5_M1.inputEnabled = false;
        _this.place5_M1.frame = 0;

        _this.place6_M1.inputEnabled = true;
        _this.place6_M1.input.useHandCursor = true;
        _this.place6_M1.frame = 0;

        _this.water_1.frame = 0;
        _this.water_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });

      _this.place6_M1.inputEnabled = true;
      _this.place6_M1.input.useHandCursor = true;
      _this.place6_M1.events.onInputDown.add(function () {
        _this.nearestPlace = 1;

        _this.blueSquare.alpha = 0;
        _this.blueCircle.alpha = 0;

        _this.pinkSquare.alpha = 1;
        _this.pinkCircle.alpha = 1;

        _this.redCircle.alpha = 0;
        _this.redSquare.alpha = 0;

        _this.redCircle2.alpha = 1;
        _this.redSquare2.alpha = 1;

        _this.place1_M1.inputEnabled = false;
        _this.place1_M1.frame = 0;

        _this.place2_M1.inputEnabled = false;
        _this.place2_M1.frame = 0;

        _this.place3_M1.inputEnabled = false;
        _this.place3_M1.frame = 0;

        _this.place4_M1.inputEnabled = true;
        _this.place4_M1.input.useHandCursor = true;
        _this.place4_M1.frame = 0;

        _this.place5_M1.inputEnabled = false;
        _this.place5_M1.frame = 0;

        _this.water_1.frame = 0;
        _this.water_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.place4_M2.inputEnabled = true;
      _this.place4_M2.input.useHandCursor = true;
      _this.place4_M2.events.onInputDown.add(function () {
        _this.nearestPlace = 0;

        _this.blueSquare.alpha = 1;
        _this.blueCircle.alpha = 1;

        _this.redCircle2.alpha = 0;
        _this.redSquare2.alpha = 0;

        _this.redCircle.alpha = 1;
        _this.redSquare.alpha = 1;

        _this.pinkSquare.alpha = 0;
        _this.pinkCircle.alpha = 0;

        _this.place1_M2.inputEnabled = false;
        _this.place1_M2.frame = 0;

        _this.place2_M2.inputEnabled = false;
        _this.place2_M2.frame = 0;

        _this.place3_M2.inputEnabled = false;
        _this.place3_M2.frame = 0;

        _this.place5_M2.inputEnabled = false;
        _this.place5_M2.frame = 0;

        _this.place6_M2.inputEnabled = true;
        _this.place6_M2.input.useHandCursor = true;
        _this.place6_M2.frame = 0;

        _this.track_1.frame = 0;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });

      _this.place6_M2.inputEnabled = true;
      _this.place6_M2.input.useHandCursor = true;
      _this.place6_M2.events.onInputDown.add(function () {
        _this.nearestPlace = 1;

        _this.blueSquare.alpha = 0;
        _this.blueCircle.alpha = 0;

        _this.pinkSquare.alpha = 1;
        _this.pinkCircle.alpha = 1;

        _this.redCircle.alpha = 0;
        _this.redSquare.alpha = 0;

        _this.redCircle2.alpha = 1;
        _this.redSquare2.alpha = 1;

        _this.place1_M2.inputEnabled = false;
        _this.place1_M2.frame = 0;

        _this.place2_M2.inputEnabled = false;
        _this.place2_M2.frame = 0;

        _this.place3_M2.inputEnabled = false;
        _this.place3_M2.frame = 0;

        _this.place4_M2.inputEnabled = true;
        _this.place4_M2.input.useHandCursor = true;
        _this.place4_M2.frame = 0;

        _this.place5_M2.inputEnabled = false;
        _this.place5_M2.frame = 0;

        _this.track_1.frame = 0;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.place4_M3.inputEnabled = true;
      _this.place4_M3.input.useHandCursor = true;
      _this.place4_M3.events.onInputDown.add(function () {
        _this.nearestPlace = 0;

        _this.blueSquare.alpha = 1;
        _this.blueCircle.alpha = 1;

        _this.redCircle2.alpha = 0;
        _this.redSquare2.alpha = 0;

        _this.redCircle.alpha = 1;
        _this.redSquare.alpha = 1;

        _this.pinkSquare.alpha = 0;
        _this.pinkCircle.alpha = 0;

        _this.place1_M3.inputEnabled = false;
        _this.place1_M3.frame = 0;

        _this.place2_M3.inputEnabled = false;
        _this.place2_M3.frame = 0;

        _this.place3_M3.inputEnabled = false;
        _this.place3_M3.frame = 0;

        _this.place5_M3.inputEnabled = false;
        _this.place5_M3.frame = 0;

        _this.place6_M3.inputEnabled = true;
        _this.place6_M3.input.useHandCursor = true;
        _this.place6_M3.frame = 0;

        _this.water_1.frame = 0;
        _this.water_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });

      _this.place6_M3.inputEnabled = true;
      _this.place6_M3.input.useHandCursor = true;
      _this.place6_M3.events.onInputDown.add(function () {
        _this.nearestPlace = 1;

        _this.blueSquare.alpha = 0;
        _this.blueCircle.alpha = 0;

        _this.pinkSquare.alpha = 1;
        _this.pinkCircle.alpha = 1;

        _this.redCircle.alpha = 0;
        _this.redSquare.alpha = 0;

        _this.redCircle2.alpha = 1;
        _this.redSquare2.alpha = 1;

        _this.place1_M3.inputEnabled = false;
        _this.place1_M3.frame = 0;

        _this.place2_M3.inputEnabled = false;
        _this.place2_M3.frame = 0;

        _this.place3_M3.inputEnabled = false;
        _this.place3_M3.frame = 0;

        _this.place4_M3.inputEnabled = true;
        _this.place4_M3.input.useHandCursor = true;
        _this.place4_M3.frame = 0;

        _this.place5_M3.inputEnabled = false;
        _this.place5_M3.frame = 0;

        _this.water_1.frame = 0;
        _this.water_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.place4_M4.inputEnabled = true;
      _this.place4_M4.input.useHandCursor = true;
      _this.place4_M4.events.onInputDown.add(function () {
        _this.nearestPlace = 0;

        _this.blueSquare.alpha = 1;
        _this.blueCircle.alpha = 1;

        _this.redCircle2.alpha = 0;
        _this.redSquare2.alpha = 0;

        _this.redCircle.alpha = 1;
        _this.redSquare.alpha = 1;

        _this.pinkSquare.alpha = 0;
        _this.pinkCircle.alpha = 0;

        _this.place1_M4.inputEnabled = false;
        _this.place1_M4.frame = 0;

        _this.place2_M4.inputEnabled = false;
        _this.place2_M4.frame = 0;

        _this.place3_M4.inputEnabled = false;
        _this.place3_M4.frame = 0;

        _this.place5_M4.inputEnabled = false;
        _this.place5_M4.frame = 0;

        _this.place6_M4.inputEnabled = true;
        _this.place6_M4.input.useHandCursor = true;
        _this.place6_M4.frame = 0;

        _this.track_1.frame = 0;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });

      _this.place6_M4.inputEnabled = true;
      _this.place6_M4.input.useHandCursor = true;
      _this.place6_M4.events.onInputDown.add(function () {
        _this.nearestPlace = 1;

        _this.blueSquare.alpha = 0;
        _this.blueCircle.alpha = 0;

        _this.pinkSquare.alpha = 1;
        _this.pinkCircle.alpha = 1;

        _this.redCircle.alpha = 0;
        _this.redSquare.alpha = 0;

        _this.redCircle2.alpha = 1;
        _this.redSquare2.alpha = 1;

        _this.place1_M4.inputEnabled = false;
        _this.place1_M4.frame = 0;

        _this.place2_M4.inputEnabled = false;
        _this.place2_M4.frame = 0;

        _this.place3_M4.inputEnabled = false;
        _this.place3_M4.frame = 0;

        _this.place4_M4.inputEnabled = true;
        _this.place4_M4.input.useHandCursor = true;
        _this.place4_M4.frame = 0;

        _this.place5_M4.inputEnabled = false;
        _this.place5_M4.frame = 0;

        _this.track_1.frame = 0;
        _this.track_2.frame = 0;

        _this.extra1_M1.frame = 0;
      });
    }
  },

  tickFourthEvaluation: function (target) {
    if (_this.nearestPlace === 1) {
      _this.pauseVoice();
      target.destroy();
      _this.IsKeyPressed = false;
      _this.celebrationSound.currentTime = 0.0;
      _this.celebrationSound.play();

      _this.canClickUp = false;
      _this.canClickDown = false;
      _this.canClickRight = true;
      _this.canClickLeft = false;

      _this.firstLeft = false;
      _this.firstRight = false;
      _this.firstDown = false;
      _this.firstUp = false;

      _this.downClicked = false;
      _this.reachedDestination = false;

      _this.moveCount = 0;

      _this.distanceTravelled = 0;

      _this.tick = _this.add.sprite(850, 470, "TickBtn");

      _this.blackCircle.destroy();
      _this.pinkCircle.destroy();

      if (_this.mapArray[_this.count1] === 1) _this.Map1.destroy();
      if (_this.mapArray[_this.count1] === 2) _this.Map2.destroy();
      if (_this.mapArray[_this.count1] === 3) _this.Map3.destroy();
      if (_this.mapArray[_this.count1] === 4) _this.Map4.destroy();
      _this.count1++;
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      _this.starActions();
      _this.noofAttempts = 0;
      _this.AnsTimerCount = 0;
      _this.time.events.add(2000, function () {
        _this.NextMap();
      });
      // _this.NextMap();
    } else {
      _this.noofAttempts++;
      _this.nearestPlace = 0;
      _this.wrongSound.play();
      _this.redCircle.alpha = 0;
      _this.redSquare.alpha = 0;
      _this.redCircle2.alpha = 0;
      _this.redSquare2.alpha = 0;
      _this.blueCircle.alpha = 1;
      _this.blueSquare.alpha = 1;
      _this.pinkCircle.alpha = 1;
      _this.pinkSquare.alpha = 1;

      if (_this.chooseNearPlace[0] === 2) {
        if (_this.mapArray[_this.count1] === 1) {
          _this.place4_M1.inputEnabled = true;
          _this.place6_M1.inputEnabled = true;
        }
        if (_this.mapArray[_this.count1] === 2) {
          _this.place4_M2.inputEnabled = true;
          _this.place6_M2.inputEnabled = true;
        }
        if (_this.mapArray[_this.count1] === 3) {
          _this.place4_M3.inputEnabled = true;
          _this.place6_M3.inputEnabled = true;
        }
        if (_this.mapArray[_this.count1] === 4) {
          _this.place4_M4.inputEnabled = true;
          _this.place6_M4.inputEnabled = true;
        }
      } else {
        if (_this.mapArray[_this.count1] === 1) {
          _this.place4_M1.inputEnabled = true;
          _this.place5_M1.inputEnabled = true;
        }
        if (_this.mapArray[_this.count1] === 2) {
          _this.place4_M2.inputEnabled = true;
          _this.place5_M2.inputEnabled = true;
        }
        if (_this.mapArray[_this.count1] === 3) {
          _this.place4_M3.inputEnabled = true;
          _this.place5_M3.inputEnabled = true;
        }
        if (_this.mapArray[_this.count1] === 4) {
          _this.place4_M4.inputEnabled = true;
          _this.place5_M4.inputEnabled = true;
        }
      }
    }
  },

  NextMap: function () {
    switch (_this.mapArray[_this.count1]) {
      case 1:
        _this.gotoMap1();
        break;
      case 2:
        _this.gotoMap2();
        break;
      case 3:
        _this.gotoMap3();
        break;
      case 4:
        _this.gotoMap4();
        break;
    }

    _this.travelToDestination();

    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(_this.tickSecondEvaluation, _this);
  },

  gotoMap1: function () {
    console.log("Map 1");
    _this.Map1 = _this.add.group();

    _this.road = _this.add.sprite(33, 62, "road");
    _this.road.scale.setTo(0.242, 0.257);
    _this.Map1.addChild(_this.road);

    _this.place1_M1 = _this.add.sprite(381, 62, "place1_M1");
    _this.place1_M1.scale.setTo(1, 1.1);
    _this.Map1.addChild(_this.place1_M1);

    _this.place2_M1 = _this.add.sprite(119, 80, "place2_M1");
    // _this.place2_M1.scale.setTo(1.1, 1)
    _this.Map1.addChild(_this.place2_M1);

    // _this.extra2_M1 = _this.add.sprite(33, 401, 'extra2_M1');
    // _this.Map1.addChild(_this.extra2_M1);

    _this.water_1 = _this.add.sprite(31, 85, "water_1");
    _this.Map1.addChild(_this.water_1);

    _this.water_2 = _this.add.sprite(30, 403, "water_2");
    _this.Map1.addChild(_this.water_2);

    _this.bridge = _this.add.sprite(45, 370, "bridge");
    _this.Map1.addChild(_this.bridge);

    // _this.track_1 = _this.add.sprite(31, 85, 'water_1');
    // _this.Map1.addChild(_this.track_1);

    // _this.track_2 = _this.add.sprite(30, 403, 'water_2');
    // _this.Map1.addChild(_this.track_2);

    _this.distanceBox = _this.add.sprite(25, 55, "distanceBox");
    _this.Map1.addChild(_this.distanceBox);

    var text = _this.add.text(175, 15, "1" + "      " + "5" + "      " + "10", {
      font: "26px Arial",
      fontWeight: "bold",
      fill: "0x000000",
    });

    var text2 = _this.add.text(30, 25, "1" + " : 100", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FF0000", // Red color "#FF0000"
    });

    _this.distanceBox.addChild(text);
    _this.distanceBox.addChild(text2);

    _this.extra1_M1 = _this.add.sprite(140, 505, "extra1_M1");
    _this.extra1_M1.scale.setTo(0.983, 0.85);
    _this.Map1.addChild(_this.extra1_M1);

    _this.place3_M1 = _this.add.sprite(381, 204, "place3_M1");
    _this.Map1.addChild(_this.place3_M1);

    _this.place4_M1 = _this.add.sprite(140, 309, "place4_M1");
    _this.place4_M1.scale.setTo(0.983, 1.03);
    _this.Map1.addChild(_this.place4_M1);

    _this.place5_M1 = _this.add.sprite(448, 400, "place5_M1");
    _this.Map1.addChild(_this.place5_M1);

    _this.place6_M1 = _this.add.sprite(760, 62, "place6_M1");
    _this.place6_M1.scale.setTo(0.96, 1.063);
    _this.Map1.addChild(_this.place6_M1);

    _this.directionSymbol = _this.add.sprite(767, 57, "directionSymbol");
    _this.Map1.addChild(_this.directionSymbol);
  },
  gotoMap2: function () {
    console.log("Map 2");
    _this.Map2 = _this.add.group();

    _this.road = _this.add.sprite(33, 62, "road");
    _this.road.scale.setTo(0.242, 0.257);
    _this.Map2.addChild(_this.road);

    _this.place1_M2 = _this.add.sprite(381, 62, "place1_M2");
    _this.place1_M2.scale.setTo(1, 1.1);
    _this.Map2.addChild(_this.place1_M2);

    _this.place2_M2 = _this.add.sprite(118, 80, "place2_M2");
    _this.Map2.addChild(_this.place2_M2);

    _this.track_1 = _this.add.sprite(31, 85, "track_1");
    _this.Map2.addChild(_this.track_1);

    _this.track_2 = _this.add.sprite(30, 403, "track_2");
    _this.Map2.addChild(_this.track_2);

    _this.distanceBox = _this.add.sprite(23, 55, "distanceBox");
    _this.Map2.addChild(_this.distanceBox);

    var text = _this.add.text(175, 15, "1" + "      " + "5" + "      " + "10", {
      font: "26px Arial",
      fontWeight: "bold",
      fill: "0x000000",
    });

    var text2 = _this.add.text(30, 25, "1" + " : 100", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FF0000", // Red color "#FF0000"
    });

    _this.distanceBox.addChild(text);
    _this.distanceBox.addChild(text2);

    _this.extra1_M1 = _this.add.sprite(140, 505, "extra1_M1");
    _this.extra1_M1.scale.setTo(0.983, 0.85);
    _this.Map2.addChild(_this.extra1_M1);

    _this.place3_M2 = _this.add.sprite(381, 204, "place3_M2");
    _this.Map2.addChild(_this.place3_M2);

    _this.place4_M2 = _this.add.sprite(140, 309, "place4_M2");
    _this.place4_M2.scale.setTo(0.983, 1.03);
    _this.Map2.addChild(_this.place4_M2);

    _this.place5_M2 = _this.add.sprite(448, 400, "place5_M2");
    _this.Map2.addChild(_this.place5_M2);

    _this.place6_M2 = _this.add.sprite(760, 62, "place6_M2");
    _this.place6_M2.scale.setTo(0.96, 1.063);
    _this.Map2.addChild(_this.place6_M2);

    _this.directionSymbol = _this.add.sprite(767, 57, "directionSymbol");
    _this.Map2.addChild(_this.directionSymbol);
  },
  gotoMap3: function () {
    console.log("Map 3");
    _this.Map3 = _this.add.group();

    _this.road = _this.add.sprite(33, 62, "road");
    _this.road.scale.setTo(0.242, 0.257);
    _this.Map3.addChild(_this.road);

    _this.place1_M3 = _this.add.sprite(381, 62, "place1_M3");
    _this.place1_M3.scale.setTo(1, 1.1);
    _this.Map3.addChild(_this.place1_M3);

    _this.place2_M3 = _this.add.sprite(119, 80, "place2_M3");
    // _this.place2_M1.scale.setTo(1.1, 1)
    _this.Map3.addChild(_this.place2_M3);

    // _this.extra2_M1 = _this.add.sprite(33, 401, 'extra2_M1');
    // _this.Map1.addChild(_this.extra2_M1);

    _this.water_1 = _this.add.sprite(31, 85, "water_1");
    _this.Map3.addChild(_this.water_1);

    _this.water_2 = _this.add.sprite(30, 403, "water_2");
    _this.Map3.addChild(_this.water_2);

    _this.bridge = _this.add.sprite(45, 370, "bridge");
    _this.Map3.addChild(_this.bridge);

    // _this.track_1 = _this.add.sprite(31, 85, 'water_1');
    // _this.Map1.addChild(_this.track_1);

    // _this.track_2 = _this.add.sprite(30, 403, 'water_2');
    // _this.Map1.addChild(_this.track_2);

    _this.distanceBox = _this.add.sprite(25, 55, "distanceBox");
    _this.Map3.addChild(_this.distanceBox);

    var text = _this.add.text(175, 15, "1" + "      " + "5" + "      " + "10", {
      font: "26px Arial",
      fontWeight: "bold",
      fill: "0x000000",
    });

    var text2 = _this.add.text(30, 25, "1" + " : 100", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FF0000", // Red color "#FF0000"
    });

    _this.distanceBox.addChild(text);
    _this.distanceBox.addChild(text2);

    _this.extra1_M1 = _this.add.sprite(140, 505, "extra1_M1");
    _this.extra1_M1.scale.setTo(0.983, 0.85);
    _this.Map3.addChild(_this.extra1_M1);

    _this.place3_M3 = _this.add.sprite(381, 204, "place3_M3");
    _this.Map3.addChild(_this.place3_M3);

    _this.place4_M3 = _this.add.sprite(140, 309, "place4_M3");
    _this.place4_M3.scale.setTo(0.983, 1.03);
    _this.Map3.addChild(_this.place4_M3);

    _this.place5_M3 = _this.add.sprite(448, 400, "place5_M3");
    _this.Map3.addChild(_this.place5_M3);

    _this.place6_M3 = _this.add.sprite(760, 62, "place6_M3");
    _this.place6_M3.scale.setTo(0.96, 1.063);
    _this.Map3.addChild(_this.place6_M3);

    _this.directionSymbol = _this.add.sprite(767, 57, "directionSymbol");
    _this.Map3.addChild(_this.directionSymbol);
  },
  gotoMap4: function () {
    console.log("Map 4");
    _this.Map4 = _this.add.group();

    _this.road = _this.add.sprite(33, 62, "road");
    _this.road.scale.setTo(0.242, 0.257);
    _this.Map4.addChild(_this.road);

    _this.place1_M4 = _this.add.sprite(381, 62, "place1_M4");
    _this.place1_M4.scale.setTo(1, 1.1);
    _this.Map4.addChild(_this.place1_M4);

    _this.place2_M4 = _this.add.sprite(118, 80, "place2_M4");
    _this.Map4.addChild(_this.place2_M4);

    _this.track_1 = _this.add.sprite(31, 85, "track_1");
    _this.Map4.addChild(_this.track_1);

    _this.track_2 = _this.add.sprite(30, 403, "track_2");
    _this.Map4.addChild(_this.track_2);

    _this.distanceBox = _this.add.sprite(23, 55, "distanceBox");
    _this.Map4.addChild(_this.distanceBox);

    var text = _this.add.text(175, 15, "1" + "      " + "5" + "      " + "10", {
      font: "26px Arial",
      fontWeight: "bold",
      fill: "0x000000",
    });

    var text2 = _this.add.text(30, 25, "1" + " : 100", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FF0000", // Red color "#FF0000"
    });

    _this.distanceBox.addChild(text);
    _this.distanceBox.addChild(text2);

    _this.extra1_M1 = _this.add.sprite(140, 505, "extra1_M1");
    _this.extra1_M1.scale.setTo(0.983, 0.85);
    _this.Map4.addChild(_this.extra1_M1);

    _this.place3_M4 = _this.add.sprite(381, 204, "place3_M4");
    _this.Map4.addChild(_this.place3_M4);

    _this.place4_M4 = _this.add.sprite(140, 309, "place4_M4");
    _this.place4_M4.scale.setTo(0.983, 1.03);
    _this.Map4.addChild(_this.place4_M4);

    _this.place5_M4 = _this.add.sprite(448, 400, "place5_M4");
    _this.Map4.addChild(_this.place5_M4);

    _this.place6_M4 = _this.add.sprite(760, 62, "place6_M4");
    _this.place6_M4.scale.setTo(0.96, 1.063);
    _this.Map4.addChild(_this.place6_M4);

    _this.directionSymbol = _this.add.sprite(767, 57, "directionSymbol");
    _this.Map4.addChild(_this.directionSymbol);
  },

  FindShortestPath: function () {
    _this.chooseBox = 0;
    _this.distanceBox2.destroy();
    _this.tick = _this.add.sprite(850, 470, "TickBtn");

    _this.canClickUp = false;
    _this.canClickDown = false;
    _this.canClickRight = true;
    _this.canClickLeft = true;

    _this.downClicked = false;
    _this.reachedDestination = false;
    _this.pointArray = [];
    _this.moveCount = 0;

    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(_this.tickSixEvaluation, _this);

    if (_this.mapArray[_this.count1] === 1) {
      _this.mapFirst();
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.mapSecond();
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.maptThird();
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.mapFourth();
    }

    if (_this.counterArray[0] != 1 && _this.counterArray[1] != 1) {
      if (_this.mapArray[_this.count1] === 1) {
        _this.Ask_Question31.play();
        _this.Question_flag = 31;
      }
      if (_this.mapArray[_this.count1] === 2) {
        _this.Ask_Question32.play();
        _this.Question_flag = 32;
      }
      if (_this.mapArray[_this.count1] === 3) {
        _this.Ask_Question33.play();
        _this.Question_flag = 33;
      }
      if (_this.mapArray[_this.count1] === 4) {
        _this.Ask_Question34.play();
        _this.Question_flag = 34;
      }
      _this.firstPlace();
    } else if (_this.counterArray[0] != 2 && _this.counterArray[1] != 2) {
      if (_this.mapArray[_this.count1] === 1) {
        _this.Ask_Question43.play();
        _this.Question_flag = 43;
      }
      if (_this.mapArray[_this.count1] === 2) {
        _this.Ask_Question44.play();
        _this.Question_flag = 44;
      }
      if (_this.mapArray[_this.count1] === 3) {
        _this.Ask_Question45.play();
        _this.Question_flag = 45;
      }
      if (_this.mapArray[_this.count1] === 4) {
        _this.Ask_Question46.play();
        _this.Question_flag = 46;
      }
      _this.secondPlace();
    } else if (_this.counterArray[0] != 3 && _this.counterArray[1] != 3) {
      if (_this.mapArray[_this.count1] === 1) {
        _this.Ask_Question35.play();
        _this.Question_flag = 35;
      }
      if (_this.mapArray[_this.count1] === 2) {
        _this.Ask_Question36.play();
        _this.Question_flag = 36;
      }
      if (_this.mapArray[_this.count1] === 3) {
        _this.Ask_Question37.play();
        _this.Question_flag = 37;
      }
      if (_this.mapArray[_this.count1] === 4) {
        _this.Ask_Question38.play();
        _this.Question_flag = 38;
      }
      _this.thirdPlace();
    }

    _this.Up = _this.add.sprite(850, 60, "Up");
    _this.Up.inputEnabled = true;
    _this.Up.input.useHandCursor = true;
    _this.Up.events.onInputDown.add(_this.moveUp, _this);

    _this.Down = _this.add.sprite(850, 150, "Down");
    _this.Down.inputEnabled = true;
    _this.Down.input.useHandCursor = true;
    _this.Down.events.onInputDown.add(_this.moveDown, _this);

    _this.Right = _this.add.sprite(850, 240, "Right");
    _this.Right.inputEnabled = true;
    _this.Right.input.useHandCursor = true;
    _this.Right.events.onInputDown.add(_this.moveRight, _this);

    _this.Left = _this.add.sprite(850, 330, "Left");
    _this.Left.inputEnabled = true;
    _this.Left.input.useHandCursor = true;
    _this.Left.events.onInputDown.add(_this.moveLeft, _this);

    _this.eraser = _this.add.sprite(860, 410, "eraser");
    _this.eraser.inputEnabled = true;
    _this.eraser.input.useHandCursor = true;
    _this.eraser.frame = 0;

    if (_this.placeCounter === 1) {
      _this.eraser.events.onInputDown.add(_this.UndoLastStep, _this);
    }
    if (_this.placeCounter === 2) {
      _this.eraser.events.onInputDown.add(_this.UndoLastStep2, _this);
    }
    if (_this.placeCounter === 3) {
      _this.eraser.events.onInputDown.add(_this.UndoLastStep3, _this);
    }

    // if (_this.placeCounter === 1) {
    //
    //     if (_this.firstLeft === true && _this.downClicked === true) {
    //         _this.chooseBox = 1;
    //         var x = 483; y = 190;

    //         for (let i = 0; i < 3; i++) {
    //             var dottedLine5 = _this.add.image(x, y, 'dottedLine5');
    //             x += 75;
    //         }

    //         var x2 = 750; y2 = 235;
    //         var RightDown = _this.add.image(712 + 5, 190, 'RightDown');

    //         var dottedLine5 = _this.add.image(x2, y2, 'dottedLine5');
    //         dottedLine5.angle = 90;

    //         var dottedLine3 = _this.add.image(x2, y2 + 75, 'dottedLine3');
    //         dottedLine3.angle = 90;

    //         var RightUp = _this.add.image(712 + 5, y2 + 120, 'RightUp');
    //         var x3 = 610; y3 = 385;

    //         for (let i = 0; i < 2; i++) {
    //             var dottedLine3 = _this.add.image(x3, y3, 'dottedLine3');
    //             x3 += 45;
    //         }

    //         var dottedLine1 = _this.add.image(x3, y3, 'dottedLine1');

    //         _this.blueSquare = _this.add.image(650, 360, 'blueSquare');
    //         var text3 = _this.add.text(30, 7, "6", {
    //             font: "30px Arial",
    //             fontWeight: "bold",
    //             fill: "#65B4C3"  // blue color
    //         });

    //         _this.blueSquare.addChild(text3)

    //         var endPoint = [
    //             { x: 570, y: 370 },
    //         ];

    //         _this.blackCircle = _this.add.image(endPoint[0].x, endPoint[0].y, 'blackCircle');

    //         _this.redCircle = _this.add.image(endPoint[0].x, endPoint[0].y, 'redCircle');
    //         _this.redCircle.alpha = 0;
    //         _this.redSquare = _this.add.image(_this.blueSquare.x, _this.blueSquare.y, 'redSquare');
    //         _this.redSquare.alpha = 0;

    //         _this.redSquare2 = _this.add.image(_this.pinkSquare.x, _this.pinkSquare.y, 'redSquare');
    //         _this.redSquare2.alpha = 0;

    //         var text = _this.add.text(23, 3, "6", {
    //             font: "34px Arial",
    //             fontWeight: "bold",
    //             fill: "#FFFFFF"  // white color
    //         });

    //         _this.redSquare.addChild(text)

    //         var text = _this.add.text(23, 3, "3", {
    //             font: "34px Arial",
    //             fontWeight: "bold",
    //             fill: "#FFFFFF"  // white color
    //         });

    //         _this.redSquare2.addChild(text)
    //     }
    //     else if (_this.firstLeft === true && _this.downClicked === false) {
    //         _this.chooseBox = 2;
    //         var x = 483; y = 190;

    //         for (let i = 0; i < 3; i++) {
    //             var dottedLine5 = _this.add.image(x, y, 'dottedLine5');
    //             x += 75;
    //         }

    //         var x2 = 750; y2 = 235;
    //         var RightDown = _this.add.image(712 + 5, 190, 'RightDown');

    //         var dottedLine5 = _this.add.image(x2, y2, 'dottedLine5');
    //         dottedLine5.angle = 90;

    //         var dottedLine3 = _this.add.image(x2, y2 + 75, 'dottedLine3');
    //         dottedLine3.angle = 90;

    //         var RightUp = _this.add.image(712 + 5, y2 + 120, 'RightUp');
    //         var x3 = 610; y3 = 385;

    //         for (let i = 0; i < 2; i++) {
    //             var dottedLine3 = _this.add.image(x3, y3, 'dottedLine3');
    //             x3 += 45;
    //         }

    //         var dottedLine1 = _this.add.image(x3, y3, 'dottedLine1');

    //         _this.blueSquare = _this.add.image(640, 360, 'blueSquare');
    //         var text3 = _this.add.text(30, 7, "6", {
    //             font: "30px Arial",
    //             fontWeight: "bold",
    //             fill: "#65B4C3"  // blue color
    //         });

    //         _this.blueSquare.addChild(text3)

    //         var endPoint = [
    //             { x: 570, y: 370 },
    //         ];

    //         _this.blackCircle = _this.add.image(endPoint[0].x, endPoint[0].y, 'blackCircle');

    //         _this.redCircle = _this.add.image(endPoint[0].x, endPoint[0].y, 'redCircle');
    //         _this.redCircle.alpha = 0;
    //         _this.redSquare = _this.add.image(_this.blueSquare.x, _this.blueSquare.y, 'redSquare');
    //         _this.redSquare.alpha = 0;

    //         _this.redSquare2 = _this.add.image(_this.pinkSquare.x, _this.pinkSquare.y, 'redSquare');
    //         _this.redSquare2.alpha = 0;

    //         var text = _this.add.text(23, 3, "6", {
    //             font: "34px Arial",
    //             fontWeight: "bold",
    //             fill: "#FFFFFF"  // white color
    //         });

    //         _this.redSquare.addChild(text)

    //         var text = _this.add.text(23, 3, "9", {
    //             font: "34px Arial",
    //             fontWeight: "bold",
    //             fill: "#FFFFFF"  // white color
    //         });

    //         _this.redSquare2.addChild(text)
    //     }
    //     else if (_this.firstRight === true) {
    //         _this.chooseBox = 3;
    //         var a = 405; b = 190;

    //         var dottedLine3 = _this.add.image(a, b, 'dottedLine3');

    //         var a1 = 372; b1 = 235;
    //         var RightDown = _this.add.image(368, 190, 'LeftDown');

    //         var dottedLine3 = _this.add.image(a1, b1, 'dottedLine3');
    //         dottedLine3.angle = 90;

    //         var a2 = 372; b2 = 285;

    //         var dottedLine3 = _this.add.image(a2, b2 - 5, 'dottedLine3');
    //         dottedLine3.angle = 90;
    //         var dottedLine1 = _this.add.image(a2, b2 + 40, 'dottedLine1');
    //         dottedLine1.angle = 90;
    //         var dottedLine1 = _this.add.image(a2, b2 + 55, 'dottedLine1');
    //         dottedLine1.angle = 90;

    //         var LeftUp = _this.add.image(370, 355, 'LeftUp');

    //         var a3 = 427; b3 = 387;

    //         var dottedLine1 = _this.add.image(412, y, 'dottedLine1');

    //         for (let i = 0; i < 2; i++) {
    //             var dottedLine5 = _this.add.image(a3, b3, 'dottedLine5');
    //             a3 += 75;
    //         }

    //         _this.blueSquare = _this.add.image(450, 360, 'blueSquare');
    //         var text3 = _this.add.text(30, 7, "3", {
    //             font: "30px Arial",
    //             fontWeight: "bold",
    //             fill: "#65B4C3"  // blue color
    //         });

    //         _this.blueSquare.addChild(text3)

    //         var endPoint = [
    //             { x: 570, y: 370 },
    //         ];

    //         _this.blackCircle = _this.add.image(endPoint[0].x, endPoint[0].y, 'blackCircle');

    //         _this.redCircle = _this.add.image(endPoint[0].x, endPoint[0].y, 'redCircle');
    //         _this.redCircle.alpha = 0;
    //         _this.redSquare = _this.add.image(450, 360, 'redSquare');
    //         _this.redSquare.alpha = 0;

    //         _this.redSquare2 = _this.add.image(640, 360, 'redSquare');
    //         _this.redSquare2.alpha = 0;

    //         var text = _this.add.text(23, 3, "3", {
    //             font: "34px Arial",
    //             fontWeight: "bold",
    //             fill: "#FFFFFF"  // white color
    //         });

    //         _this.redSquare.addChild(text)

    //         var text = _this.add.text(23, 3, "6", {
    //             font: "34px Arial",
    //             fontWeight: "bold",
    //             fill: "#FFFFFF"  // white color
    //         });

    //         _this.redSquare2.addChild(text)
    //     }
    // }
    // else if (_this.placeCounter === 2) {

    // }
    // else if (_this.placeCounter === 3) {

    //     if (_this.firstDown === true) {
    //         var x = 130; y = 353;

    //         for (let i = 0; i < 2; i++) {
    //             var dottedLine1 = _this.add.image(x, y, 'dottedLine1');
    //             dottedLine1.angle = 90;
    //             y -= 15;
    //         }

    //         var x2 = 127; y2 = 297;

    //         var LeftDown = _this.add.image(x2, y2, 'LeftDown');

    //         for (let i = 0; i < 2; i++) {
    //             var dottedLine5 = _this.add.image(x2 + 38, y2, 'dottedLine5');
    //             x2 += 75;
    //         }
    //         for (let i = 0; i < 2; i++) {
    //             var dottedLine1 = _this.add.image(x2 + 38, y2, 'dottedLine1');
    //             x2 += 15;
    //         }

    //         _this.blueSquare = _this.add.image(230, 275, 'blueSquare');
    //         var text3 = _this.add.text(30, 7, "2", {
    //             font: "30px Arial",
    //             fontWeight: "bold",
    //             fill: "#65B4C3"  // blue color
    //         });

    //         _this.blueSquare.addChild(text3)

    //         var endPoint = [
    //             { x: 345, y: 280 },
    //         ];

    //         _this.blackCircle = _this.add.image(endPoint[0].x, endPoint[0].y, 'blackCircle');

    //         _this.redCircle = _this.add.image(endPoint[0].x, endPoint[0].y, 'redCircle');
    //         _this.redCircle.alpha = 0;
    //         _this.redSquare = _this.add.image(_this.blueSquare.x, _this.blueSquare.y, 'redSquare');
    //         _this.redSquare.alpha = 0;

    //         _this.redSquare2 = _this.add.image(_this.pinkSquare.x, _this.pinkSquare.y, 'redSquare');
    //         _this.redSquare2.alpha = 0;

    //         var text = _this.add.text(23, 3, "2", {
    //             font: "34px Arial",
    //             fontWeight: "bold",
    //             fill: "#FFFFFF"  // white color
    //         });

    //         _this.redSquare.addChild(text)

    //         if (_this.divideLeft === true) {
    //             var text = _this.add.text(23, 3, "4", {
    //                 font: "34px Arial",
    //                 fontWeight: "bold",
    //                 fill: "#FFFFFF"  // white color
    //             });

    //             _this.redSquare2.addChild(text)
    //         } else if (_this.divideRight === true) {
    //             var text = _this.add.text(18, 3, "11", {
    //                 font: "34px Arial",
    //                 fontWeight: "bold",
    //                 fill: "#FFFFFF"  // white color
    //             });

    //             _this.redSquare2.addChild(text)
    //         }

    //     } else {
    //         _this.chooseBox = 1;
    //         var x = 130; y = 420;

    //         var dottedLine3 = _this.add.image(x, y - 8, 'dottedLine3');
    //         dottedLine3.angle = 90;

    //         var dottedLine1 = _this.add.image(x, y + 37, 'dottedLine1');
    //         dottedLine1.angle = 90;

    //         var x1 = 130; y1 = 460;

    //         var LeftUp = _this.add.image(x1 - 3, y1, 'LeftUp');

    //         for (let i = 0; i < 3; i++) {
    //             var dottedLine5 = _this.add.image(x1 + 38, y1 + 30, 'dottedLine5');

    //             x1 += 75;
    //         }
    //         for (let i = 0; i < 1; i++) {
    //             var dottedLine1 = _this.add.image(x1 + 38, y1 + 30, 'dottedLine1');
    //         }

    //         var x3 = 407; y3 = 468;

    //         var RightUp = _this.add.image(x3, y3 - 8, 'RightUp');

    //         for (let i = 0; i < 2; i++) {
    //             var dottedLine1 = _this.add.image(x3 + 32, y3 - 26, 'dottedLine1');
    //             dottedLine1.angle = 90;
    //             y3 -= 15;
    //         }

    //         var x4 = 435; y4 = 385;

    //         var LeftDown = _this.add.image(x4, y4, 'LeftDown');

    //         for (let i = 0; i < 3; i++) {
    //             var dottedLine5 = _this.add.image(x4 + 38, y4, 'dottedLine5');
    //             x4 += 75;
    //         }
    //         var dottedLine1 = _this.add.image(x4 + 38, y4, 'dottedLine1');

    //         var x5 = 718; y5 = 355;

    //         var RightUp = _this.add.image(x5, y5, 'RightUp');

    //         var dottedLine5 = _this.add.image(x5 + 32, y5 - 80, 'dottedLine5');
    //         dottedLine5.angle = 90

    //         var dottedLine3 = _this.add.image(x5 + 32, y5 - 125, 'dottedLine3');
    //         dottedLine3.angle = 90

    //         var x6 = 718; y6 = 190;

    //         var RightDown = _this.add.image(x6, y6, 'RightDown');

    //         for (let i = 0; i < 4; i++) {
    //             var dottedLine5 = _this.add.image(x6 - 75, y6, 'dottedLine5');
    //             x6 -= 75;
    //         }

    //         var x7 = 368; y7 = 190;

    //         var dottedLine1 = _this.add.image(x7 + 35, y7, 'dottedLine1');

    //         var LeftDown = _this.add.image(x7, y7, 'LeftDown');

    //         var dottedLine3 = _this.add.image(x7 + 3, y7 + 43, 'dottedLine3');
    //         dottedLine3.angle = 90;

    //         _this.blueSquare = _this.add.image(340, 210, 'blueSquare');
    //         var text3 = _this.add.text(23, 7, "11", {
    //             font: "30px Arial",
    //             fontWeight: "bold",
    //             fill: "#65B4C3"  // blue color
    //         });

    //         _this.blueSquare.addChild(text3)

    //         var endPoint = [
    //             { x: 345, y: 280 },
    //         ];

    //         _this.blackCircle = _this.add.image(endPoint[0].x, endPoint[0].y, 'blackCircle');

    //         _this.redCircle = _this.add.image(endPoint[0].x, endPoint[0].y, 'redCircle');
    //         _this.redCircle.alpha = 0;
    //         _this.redSquare = _this.add.image(_this.blueSquare.x, _this.blueSquare.y, 'redSquare');
    //         _this.redSquare.alpha = 0;

    //         _this.redSquare2 = _this.add.image(_this.pinkSquare.x, _this.pinkSquare.y, 'redSquare');
    //         _this.redSquare2.alpha = 0;

    //         var text = _this.add.text(18, 3, "11", {
    //             font: "34px Arial",
    //             fontWeight: "bold",
    //             fill: "#FFFFFF"  // white color
    //         });

    //         _this.redSquare.addChild(text)

    //         var text = _this.add.text(23, 3, "2", {
    //             font: "34px Arial",
    //             fontWeight: "bold",
    //             fill: "#FFFFFF"  // white color
    //         });

    //         _this.redSquare2.addChild(text)
    //     }

    // }

    // _this.blueSquare.inputEnabled = true;
    // _this.blueSquare.input.useHandCursor = true;
    // _this.blueSquare.events.onInputDown.add(function () {
    //     if (_this.chooseBox === 1) _this.shortestPlace = 0;
    //     else _this.shortestPlace = 1;

    //     _this.blueSquare.alpha = 0;
    //     _this.pinkSquare.alpha = 1;

    //     _this.redCircle.alpha = 1;
    //     _this.redSquare.alpha = 1;
    //     _this.redSquare2.alpha = 0;
    // });

    // _this.pinkSquare.inputEnabled = true;
    // _this.pinkSquare.input.useHandCursor = true;
    // _this.pinkSquare.events.onInputDown.add(function () {
    //     if (_this.chooseBox === 1) _this.shortestPlace = 1;
    //     else _this.shortestPlace = 0;

    //     _this.pinkSquare.alpha = 0;
    //     _this.blueSquare.alpha = 1;

    //     _this.redCircle.alpha = 1;
    //     _this.redSquare.alpha = 0;
    //     _this.redSquare2.alpha = 1;
    // });
  },

  mapFirst: function () {
    console.log("Map 1");
    _this.Map1 = _this.add.group();

    _this.road = _this.add.sprite(33, 62, "road");
    _this.road.scale.setTo(0.242, 0.257);
    _this.Map1.addChild(_this.road);

    _this.place1_M1 = _this.add.sprite(381, 62, "place1_M1");
    _this.place1_M1.scale.setTo(1, 1.1);
    _this.Map1.addChild(_this.place1_M1);

    _this.place2_M1 = _this.add.sprite(119, 80, "place2_M1");
    // _this.place2_M1.scale.setTo(1.1, 1)
    _this.Map1.addChild(_this.place2_M1);

    // _this.extra2_M1 = _this.add.sprite(33, 401, 'extra2_M1');
    // _this.Map1.addChild(_this.extra2_M1);

    _this.water_1 = _this.add.sprite(31, 85, "water_1");
    _this.Map1.addChild(_this.water_1);

    _this.water_2 = _this.add.sprite(30, 403, "water_2");
    _this.Map1.addChild(_this.water_2);

    _this.bridge = _this.add.sprite(45, 370, "bridge");
    _this.Map1.addChild(_this.bridge);

    // _this.track_1 = _this.add.sprite(31, 85, 'water_1');
    // _this.Map1.addChild(_this.track_1);

    // _this.track_2 = _this.add.sprite(30, 403, 'water_2');
    // _this.Map1.addChild(_this.track_2);

    _this.distanceBox = _this.add.sprite(25, 55, "distanceBox");
    _this.Map1.addChild(_this.distanceBox);

    var text = _this.add.text(175, 15, "1" + "      " + "5" + "      " + "10", {
      font: "26px Arial",
      fontWeight: "bold",
      fill: "0x000000",
    });

    var text2 = _this.add.text(30, 25, "1" + " : 100", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FF0000", // Red color "#FF0000"
    });

    _this.distanceBox.addChild(text);
    _this.distanceBox.addChild(text2);

    _this.extra1_M1 = _this.add.sprite(140, 505, "extra1_M1");
    _this.extra1_M1.scale.setTo(0.983, 0.85);
    _this.Map1.addChild(_this.extra1_M1);

    _this.place3_M1 = _this.add.sprite(381, 204, "place3_M1");
    _this.Map1.addChild(_this.place3_M1);

    _this.place4_M1 = _this.add.sprite(140, 309, "place4_M1");
    _this.place4_M1.scale.setTo(0.983, 1.03);
    _this.Map1.addChild(_this.place4_M1);

    _this.place5_M1 = _this.add.sprite(448, 400, "place5_M1");
    _this.Map1.addChild(_this.place5_M1);

    _this.place6_M1 = _this.add.sprite(760, 62, "place6_M1");
    _this.place6_M1.scale.setTo(0.96, 1.063);
    _this.Map1.addChild(_this.place6_M1);

    _this.directionSymbol = _this.add.sprite(767, 57, "directionSymbol");
    _this.Map1.addChild(_this.directionSymbol);
  },
  mapSecond: function () {
    console.log("Map 2");
    _this.Map2 = _this.add.group();

    _this.road = _this.add.sprite(33, 62, "road");
    _this.road.scale.setTo(0.242, 0.257);
    _this.Map2.addChild(_this.road);

    _this.place1_M2 = _this.add.sprite(381, 62, "place1_M2");
    _this.place1_M2.scale.setTo(1, 1.1);
    _this.Map2.addChild(_this.place1_M2);

    _this.place2_M2 = _this.add.sprite(118, 80, "place2_M2");
    _this.Map2.addChild(_this.place2_M2);

    _this.track_1 = _this.add.sprite(31, 85, "track_1");
    _this.Map2.addChild(_this.track_1);

    _this.track_2 = _this.add.sprite(30, 403, "track_2");
    _this.Map2.addChild(_this.track_2);

    _this.distanceBox = _this.add.sprite(23, 55, "distanceBox");
    _this.Map2.addChild(_this.distanceBox);

    var text = _this.add.text(175, 15, "1" + "      " + "5" + "      " + "10", {
      font: "26px Arial",
      fontWeight: "bold",
      fill: "0x000000",
    });

    var text2 = _this.add.text(30, 25, "1" + " : 100", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FF0000", // Red color "#FF0000"
    });

    _this.distanceBox.addChild(text);
    _this.distanceBox.addChild(text2);

    _this.extra1_M1 = _this.add.sprite(140, 505, "extra1_M1");
    _this.extra1_M1.scale.setTo(0.983, 0.85);
    _this.Map2.addChild(_this.extra1_M1);

    _this.place3_M2 = _this.add.sprite(381, 204, "place3_M2");
    _this.Map2.addChild(_this.place3_M2);

    _this.place4_M2 = _this.add.sprite(140, 309, "place4_M2");
    _this.place4_M2.scale.setTo(0.983, 1.03);
    _this.Map2.addChild(_this.place4_M2);

    _this.place5_M2 = _this.add.sprite(448, 400, "place5_M2");
    _this.Map2.addChild(_this.place5_M2);

    _this.place6_M2 = _this.add.sprite(760, 62, "place6_M2");
    _this.place6_M2.scale.setTo(0.96, 1.063);
    _this.Map2.addChild(_this.place6_M2);

    _this.directionSymbol = _this.add.sprite(767, 57, "directionSymbol");
    _this.Map2.addChild(_this.directionSymbol);
  },
  maptThird: function () {
    console.log("Map 3");
    _this.Map3 = _this.add.group();

    _this.road = _this.add.sprite(33, 62, "road");
    _this.road.scale.setTo(0.242, 0.257);
    _this.Map3.addChild(_this.road);

    _this.place1_M3 = _this.add.sprite(381, 62, "place1_M3");
    _this.place1_M3.scale.setTo(1, 1.1);
    _this.Map3.addChild(_this.place1_M3);

    _this.place2_M3 = _this.add.sprite(119, 80, "place2_M3");
    // _this.place2_M1.scale.setTo(1.1, 1)
    _this.Map3.addChild(_this.place2_M3);

    // _this.extra2_M1 = _this.add.sprite(33, 401, 'extra2_M1');
    // _this.Map1.addChild(_this.extra2_M1);

    _this.water_1 = _this.add.sprite(31, 85, "water_1");
    _this.Map3.addChild(_this.water_1);

    _this.water_2 = _this.add.sprite(30, 403, "water_2");
    _this.Map3.addChild(_this.water_2);

    _this.bridge = _this.add.sprite(45, 370, "bridge");
    _this.Map3.addChild(_this.bridge);

    // _this.track_1 = _this.add.sprite(31, 85, 'water_1');
    // _this.Map1.addChild(_this.track_1);

    // _this.track_2 = _this.add.sprite(30, 403, 'water_2');
    // _this.Map1.addChild(_this.track_2);

    _this.distanceBox = _this.add.sprite(25, 55, "distanceBox");
    _this.Map3.addChild(_this.distanceBox);

    var text = _this.add.text(175, 15, "1" + "      " + "5" + "      " + "10", {
      font: "26px Arial",
      fontWeight: "bold",
      fill: "0x000000",
    });

    var text2 = _this.add.text(30, 25, "1" + " : 100", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FF0000", // Red color "#FF0000"
    });

    _this.distanceBox.addChild(text);
    _this.distanceBox.addChild(text2);

    _this.extra1_M1 = _this.add.sprite(140, 505, "extra1_M1");
    _this.extra1_M1.scale.setTo(0.983, 0.85);
    _this.Map3.addChild(_this.extra1_M1);

    _this.place3_M3 = _this.add.sprite(381, 204, "place3_M3");
    _this.Map3.addChild(_this.place3_M3);

    _this.place4_M3 = _this.add.sprite(140, 309, "place4_M3");
    _this.place4_M3.scale.setTo(0.983, 1.03);
    _this.Map3.addChild(_this.place4_M3);

    _this.place5_M3 = _this.add.sprite(448, 400, "place5_M3");
    _this.Map3.addChild(_this.place5_M3);

    _this.place6_M3 = _this.add.sprite(760, 62, "place6_M3");
    _this.place6_M3.scale.setTo(0.96, 1.063);
    _this.Map3.addChild(_this.place6_M3);

    _this.directionSymbol = _this.add.sprite(767, 57, "directionSymbol");
    _this.Map3.addChild(_this.directionSymbol);
  },
  mapFourth: function () {
    console.log("Map 4");
    _this.Map4 = _this.add.group();

    _this.road = _this.add.sprite(33, 62, "road");
    _this.road.scale.setTo(0.242, 0.257);
    _this.Map4.addChild(_this.road);

    _this.place1_M4 = _this.add.sprite(381, 62, "place1_M4");
    _this.place1_M4.scale.setTo(1, 1.1);
    _this.Map4.addChild(_this.place1_M4);

    _this.place2_M4 = _this.add.sprite(118, 80, "place2_M4");
    _this.Map4.addChild(_this.place2_M4);

    _this.track_1 = _this.add.sprite(31, 85, "track_1");
    _this.Map4.addChild(_this.track_1);

    _this.track_2 = _this.add.sprite(30, 403, "track_2");
    _this.Map4.addChild(_this.track_2);

    _this.distanceBox = _this.add.sprite(23, 55, "distanceBox");
    _this.Map4.addChild(_this.distanceBox);

    var text = _this.add.text(175, 15, "1" + "      " + "5" + "      " + "10", {
      font: "26px Arial",
      fontWeight: "bold",
      fill: "0x000000",
    });

    var text2 = _this.add.text(30, 25, "1" + " : 100", {
      font: "34px Arial",
      fontWeight: "bold",
      fill: "#FF0000", // Red color "#FF0000"
    });

    _this.distanceBox.addChild(text);
    _this.distanceBox.addChild(text2);

    _this.extra1_M1 = _this.add.sprite(140, 505, "extra1_M1");
    _this.extra1_M1.scale.setTo(0.983, 0.85);
    _this.Map4.addChild(_this.extra1_M1);

    _this.place3_M4 = _this.add.sprite(381, 204, "place3_M4");
    _this.Map4.addChild(_this.place3_M4);

    _this.place4_M4 = _this.add.sprite(140, 309, "place4_M4");
    _this.place4_M4.scale.setTo(0.983, 1.03);
    _this.Map4.addChild(_this.place4_M4);

    _this.place5_M4 = _this.add.sprite(448, 400, "place5_M4");
    _this.Map4.addChild(_this.place5_M4);

    _this.place6_M4 = _this.add.sprite(760, 62, "place6_M4");
    _this.place6_M4.scale.setTo(0.96, 1.063);
    _this.Map4.addChild(_this.place6_M4);

    _this.directionSymbol = _this.add.sprite(767, 57, "directionSymbol");
    _this.Map4.addChild(_this.directionSymbol);
  },

  tickSixEvaluation: function (target) {
    // if (_this.shortestPlace === 1) {
    //     _this.blueSquare.inputEnabled = false;
    //     _this.pinkSquare.inputEnabled = false;
    //     _this.celebrationSound.play();
    //     _this.starActions();

    //     _this.time.events.add(3000, function () {
    //         if (_this.mapArray[_this.count1] === 1) _this.Map1.destroy();
    //         if (_this.mapArray[_this.count1] === 2) _this.Map2.destroy();
    //         if (_this.mapArray[_this.count1] === 3) _this.Map3.destroy();
    //         if (_this.mapArray[_this.count1] === 4) _this.Map4.destroy();

    //         target.destroy();
    //         _this.state.start('GMSS_02_G8Score');
    //     });

    // } else {
    //     _this.wrongSound.play();
    //     _this.redCircle.alpha = 0;
    //     _this.redSquare.alpha = 0;
    //     _this.redSquare2.alpha = 0;
    //     _this.blackCircle.alpha = 1;
    //     _this.blueSquare.alpha = 1;
    //     _this.pinkSquare.alpha = 1;
    // }

    if (
      _this.placeCounter === 1 &&
      _this.distanceTravelled === 3 &&
      _this.reachedDestination === true
    ) {
      target.inputEnabled = false;
      _this.eraser.inputEnabled = false;
      _this.Up.inputEnabled = false;
      _this.Down.inputEnabled = false;
      _this.Left.inputEnabled = false;
      _this.Right.inputEnabled = false;
      _this.celebrationSound.play();
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      _this.starActions();
      _this.noofAttempts = 0;
      _this.AnsTimerCount = 0;
      _this.time.events.add(2000, function () {
        target.destroy();
        _this.state.start('score', true, false, gameID, _this.microConcepts);
        _this.clearAll();
      });
    } else if (
      _this.placeCounter === 2 &&
      _this.distanceTravelled === 7 &&
      _this.reachedDestination === true
    ) {
      target.inputEnabled = false;
      _this.eraser.inputEnabled = false;
      _this.Up.inputEnabled = false;
      _this.Down.inputEnabled = false;
      _this.Left.inputEnabled = false;
      _this.Right.inputEnabled = false;
      _this.celebrationSound.play();
      telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      //_this.starActions(_this.count1);
      _this.starActions();
      _this.noofAttempts = 0;
      _this.AnsTimerCount = 0;
      _this.time.events.add(2000, function () {
        target.destroy();
        _this.state.start('score', true, false, gameID, _this.microConcepts);
        _this.clearAll();
      });
    } else if (
      _this.placeCounter === 3 &&
      _this.distanceTravelled === 2 &&
      _this.reachedDestination === true
    ) {
      target.inputEnabled = false;
      _this.eraser.inputEnabled = false;
      _this.Up.inputEnabled = false;
      _this.Down.inputEnabled = false;
      _this.Left.inputEnabled = false;
      _this.Right.inputEnabled = false;
      _this.celebrationSound.play();
      telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      //_this.starActions(_this.count1);
      _this.starActions();
      _this.noofAttempts = 0;
      _this.AnsTimerCount = 0;
      _this.time.events.add(2000, function () {
        target.destroy();
        _this.state.start('score', true, false, gameID, _this.microConcepts);
        _this.clearAll();
      });
    } else {
      _this.noofAttempts++;
      _this.wrongSound.play();
      if (_this.reachedDestination === true) {
        _this.IsKeyPressed = false;
        _this.time.events.add(500, function () {
          _this.Ask_Question47.play();
        });
        _this.moveCount = 0;
        _this.distanceTravelled = 0;
        if (_this.whiteCircle) _this.whiteCircle.destroy();
        if (_this.pinkSquare) _this.pinkSquare.destroy();
        if (_this.placeCounter === 1) {
          _this.canClickUp = false;
          _this.canClickDown = false;
          _this.canClickRight = true;
          _this.canClickLeft = true;
          _this.downClicked = false;
          _this.firstLeft = false;
          _this.firstRight = false;
          _this.reachedDestination = false;
          _this.divideLeft = false;
          _this.divideRight = false;
          _this.pointArray = [];
          _this.point1 = [];
          _this.point2 = [];
        }
        if (_this.placeCounter === 2) {
          _this.canClickUp = false;
          _this.canClickDown = false;
          _this.canClickRight = true;
          _this.canClickLeft = true;
          _this.firstLeft = false;
          _this.firstRight = false;
          _this.reachedDestination = false;
          _this.divideLeft = false;
          _this.divideRight = false;
          _this.divideUp = false;
          _this.divideDown = false;
          _this.point1 = [];
          _this.point2 = [];
          _this.pointArray = [];
          _this.point3 = [];
          _this.point4 = [];
        }
        if (_this.placeCounter === 3) {
          _this.canClickUp = true;
          _this.canClickDown = true;
          _this.canClickRight = false;
          _this.canClickLeft = false;
          _this.firstUp = false;
          _this.firstDown = false;
          _this.reachedDestination = false;
          _this.delete.removeAll(true);
          _this.delete2.removeAll(true);
          // _this.divideLeft = false;
          // _this.divideRight = false;
          _this.point1 = [];
          _this.point2 = [];
          _this.pointArray = [];
        }

        if (_this.UndoArray.length > 0) _this.UndoArray.removeAll(true);
        if (_this.UndoArray2.length > 0) _this.UndoArray2.removeAll(true);
        if (_this.UndoArray3.length > 0) _this.UndoArray3.removeAll(true);
        if (_this.UndoArray4.length > 0) _this.UndoArray4.removeAll(true);
        if (_this.UndoArray5.length > 0) _this.UndoArray5.removeAll(true);
        if (_this.UndoArray6.length > 0) _this.UndoArray6.removeAll(true);
        if (_this.UndoArray7.length > 0) _this.UndoArray7.removeAll(true);
        if (_this.UndoArray8.length > 0) _this.UndoArray8.removeAll(true);

        if (_this.UndoGrp.length > 0) _this.UndoGrp.removeAll(true);
        if (_this.UndoGrp2.length > 0) _this.UndoGrp2.removeAll(true);
        if (_this.UndoGrp3.length > 0) _this.UndoGrp3.removeAll(true);
        if (_this.UndoGrp4.length > 0) _this.UndoGrp4.removeAll(true);
        if (_this.UndoGrp5.length > 0) _this.UndoGrp5.removeAll(true);
        if (_this.UndoGrp6.length > 0) _this.UndoGrp6.removeAll(true);
        if (_this.UndoGrp7.length > 0) _this.UndoGrp7.removeAll(true);
        if (_this.UndoGrp8.length > 0) _this.UndoGrp8.removeAll(true);
      }
    }
  },

  addNumberPad: function () {
    _this.objGroup = _this.add.group();
    _this.numGroup = _this.add.group();

    _this.AnswerBox1.removeChild(_this.enterTxt1);

    // _this.selectedAns11 = '';
    // _this.selectedAns21 = '';
    // _this.selectedAns31 = '';

    _this.AnswerBox1.name = "";

    _this.fourNotEntered1 = false;

    _this.signNotselected1 = false;
    _this.signNotselected2 = false;

    _this.finalval1 = "";
    _this.signVal1 = "";

    var bottomnumpadbg = _this.numGroup.create(0, 515, "numpadbg");
    bottomnumpadbg.scale.setTo(1, 1);
    _this.x = 100;
    // set the number pad invisible initially. only after tweening it is made visible
    _this.numGroup.visible = false;
    for (var i = 0; i < 10; i++) {
      _this.numbg = _this.numGroup.create(_this.x, 552, "Numberpad");
      _this.numbg.anchor.setTo(0.5);
      _this.numbg.scale.setTo(0.8);
      _this.numbg.name = i;
      _this.numbg.frame = i;

      _this.numbg.inputEnabled = true;
      _this.numbg.input.useHandCursor = true;
      _this.numbg.events.onInputDown.add(_this.numClicked1, _this);

      _this.x += 65;
    }

    _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, "Numberpad");
    _this.wrongbtn.frame = 12;
    _this.wrongbtn.anchor.setTo(0.5);
    _this.wrongbtn.scale.setTo(0.8);
    _this.wrongbtn.name = "wrongbtn";
    _this.wrongbtn.inputEnabled = true;
    _this.wrongbtn.input.useHandCursor = true;
    _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);

    _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, "Numberpad");
    _this.rightbtn.frame = 13;
    _this.rightbtn.anchor.setTo(0.5);
    _this.rightbtn.scale.setTo(0.8);
    _this.rightbtn.name = "rightbtn";
    _this.rightbtn.inputEnabled = true;
    _this.rightbtn.input.useHandCursor = true;
    _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);

    _this.enterTxt1 = "";
    _this.enterTxt2 = "";
    _this.enterTxt3 = "";

    _this.numpadTween = _this.add.tween(_this.numGroup);
    _this.tweenNumPad();
  },

  numClicked1: function (target) {
    _this.clickSound.play();
    var_selectedAns11 = " ";

    if (target.name == 10) {
      target.name = "-";
      _this.signNotselected1 = true;
      _this.signNotselected2 = false;
    }
    if (target.name == 11) {
      target.name = "+";
      _this.signNotselected2 = true;
      _this.signNotselected1 = false;
    }

    if (_this.selectedAns11 === "") {
      _this.selectedAns11 = target.name;
      var_selectedAns11 = _this.selectedAns11;
    }

    if (target.name == "+" || target.name == "-") {
      newstr = target.name + _this.finalval1;
      _this.signVal1 = target.name;
    } else if (_this.fourNotEntered1 == false) {
      _this.finalval1 += target.name;
    }

    if (target.name == "+") target.name = 11;
    if (target.name == "-") target.name = 10;

    if (
      _this.fourNotEntered1 == false ||
      target.name == 11 ||
      target.name == 10
    ) {
      _this.AnswerBox1.removeChild(_this.enterTxt1);
      _this.enterTxt1.visible = false;
      _this.enterTxt1 = _this.add.text(
        10,
        7,
        "" + _this.signVal1 + _this.finalval1,
        { fontSize: "18" }
      );

      if (_this.signVal1 == "+") {
        if (_this.finalval1.length == 2) {
          _this.enterTxt1.x += 1;
        } else if (_this.finalval1.length == 1) {
          _this.enterTxt1.x += 8;
        } else {
          _this.enterTxt1.x += 13;
        }
      } else if (_this.signVal1 == "-") {
        if (_this.finalval1.length == 2) {
          _this.enterTxt1.x += 5;
        } else if (_this.finalval1.length == 1) {
          _this.enterTxt1.x += 8;
        } else {
          _this.enterTxt1.x += 13;
        }
      } else {
        if (_this.finalval1.length == 2) {
          _this.enterTxt1.x += 8;
        } else if (_this.finalval1.length == 1) {
          _this.enterTxt1.x += 13;
        }
      }
      if (
        _this.finalval1.length == 4 &&
        (target.name != 11 || target.name != 10)
      ) {
        _this.fourNotEntered1 = true;
      } else if (_this.finalval1.length == 4) {
        _this.fourNotEntered1 = true;
      }
      _this.enterTxt1.scale.setTo(0.8, 1);
      _this.applyingStyleBlue(_this.enterTxt1);
      if (_this.finalval1.length === 4) {
        _this.enterTxt1.fontSize = "22px";
      } else {
        _this.enterTxt1.fontSize = "24px";
      }

      _this.AnswerBox1.addChild(_this.enterTxt1);
      _this.AnswerBox1.name = Number(_this.signVal1 + _this.finalval1);
      _this.enterTxt1.visible = true;
    }
  },

  rightbtnClicked: function () {
    console.log("right btn clicked");
    _this.clickSound.play();
    _this.rightbtn.inputEnabled = false;
    _this.rightbtn.input.useHandCursor = false;
    _this.rightbtn_is_Clicked = true;

    if (Number(_this.finalval1) === _this.distanceTravelled * 100) {
      console.log("coreect");
      _this.numGroup.destroy();
      _this.celebrationSound.play();
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      _this.starActions();
      _this.noofAttempts = 0;
      _this.AnsTimerCount = 0;
      if (_this.count1 < 2) {
        _this.clearAll();
        _this.InitialScreen();
      } else {
        _this.clearAll();
        _this.FindShortestPath();
      }
    } else {
      _this.noofAttempts++;
      _this.wrongSound.play();
      _this.disableInputs1();
      _this.wrongbtn.events.onInputDown.removeAll();
      _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
      // for (let i = 1; i <= 12; i++) {
      //     _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
      //     _this.numGroup.getChildAt(i).events.onInputDown.add(_this.numClicked1, _this);
      // }
      _this.rightbtn.inputEnabled = true;
      _this.rightbtn.input.useHandCursor = true;
      return;
    }
  },

  //Tween  the numberpad.
  tweenNumPad: function () {
    _this.numGroup.visible = true;
    _this.numpadTween.to({ x: 0, y: -43 }, 1000, "Linear", true, 0);
  },

  wrongbtnClicked1: function (target) {
    _this.clickSound.play();
    _this.disableInputs1();
  },

  disableInputs1: function () {
    console.log("eraseee text");
    _this.AnswerBox1.removeChild(_this.enterTxt1);
    _this.selectedAns11 = "";
    _this.selectedAns21 = "";
    _this.selectedAns31 = "";
    _this.AnswerBox1.name = "";
    _this.fourNotEntered1 = false;
    _this.signNotselected1 = false;
    _this.finalval1 = "";
    _this.signVal1 = "";
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
  //applying the style to the text in the answerbox.
  applyingStyle: function (target) {
    target.align = "right";
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#FFFFFF"; //white color
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "22px";
  },
  applyingWhite: function (target) {
    target.align = "right";
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#FFFFFF"; //white color
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "24px";
  },
  applyingStyle1: function (target) {
    target.align = "right";
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#32CD32"; //green color
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "26px";
  },
  applyingStyle2: function (target) {
    target.align = "right";
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#E0115F"; //pink color
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "26px";
  },
  plusSignBlue: function (x, y) {
    console.log("plusSignBlue");
    _this.pSign1 = _this.add.graphics();
    _this.pSign1.lineStyle(4, 0x65b4c3);
    _this.pSign1.moveTo(x, y);
    _this.pSign1.lineTo(x + 12, y);
  },

  applyingStyleBlue: function (target) {
    target.align = "right";
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#65B4C3";
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "30px";
  },
  //clearing the screen (seconf scene).
  clearAll: function () {
    _this.Up.destroy();
    _this.Down.destroy();
    _this.Left.destroy();
    _this.Right.destroy();
    _this.eraser.destroy();

    // _this.nearestPlace = 0;

    if (_this.pinkSquare) _this.pinkSquare.destroy();
    if (_this.UndoArray) _this.UndoArray.destroy();
    if (_this.UndoArray2) _this.UndoArray2.destroy();
    if (_this.UndoArray3) _this.UndoArray3.destroy();
    if (_this.UndoArray4) _this.UndoArray4.destroy();
    if (_this.UndoArray5) _this.UndoArray5.destroy();
    if (_this.UndoArray6) _this.UndoArray6.destroy();
    if (_this.UndoArray7) _this.UndoArray7.destroy();
    if (_this.UndoArray8) _this.UndoArray8.destroy();

    if (_this.UndoGrp) _this.UndoGrp.destroy();
    if (_this.UndoGrp2) _this.UndoGrp2.destroy();
    if (_this.UndoGrp3) _this.UndoGrp3.destroy();
    if (_this.UndoGrp4) _this.UndoGrp4.destroy();
    if (_this.UndoGrp5) _this.UndoGrp5.destroy();
    if (_this.UndoGrp6) _this.UndoGrp6.destroy();
    if (_this.UndoGrp7) _this.UndoGrp7.destroy();
    if (_this.UndoGrp8) _this.UndoGrp8.destroy();

    if (_this.mapArray[_this.count1] === 1) _this.Map1.destroy();
    if (_this.mapArray[_this.count1] === 2) _this.Map2.destroy();
    if (_this.mapArray[_this.count1] === 3) _this.Map3.destroy();
    if (_this.mapArray[_this.count1] === 4) _this.Map4.destroy();

    _this.count1++;
  },
  clearAll2: function () {
    if (_this.mapArray[_this.count1] === 1) {
      _this.Map1.destroy();
    }
    if (_this.mapArray[_this.count1] === 2) {
      _this.Map2.destroy();
    }
    if (_this.mapArray[_this.count1] === 3) {
      _this.Map3.destroy();
    }
    if (_this.mapArray[_this.count1] === 4) {
      _this.Map4.destroy();
    }
  },

  //checking if two sprites overlap.
  checkOverlap: function (spriteA, spriteB) {
    console.log("checkOverlap");
    _this.boundsA = spriteA.getBounds();
    _this.boundsB = spriteB.getBounds();
    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
  },
  //Adding a star to the above created six stars.
  starActions: function (target) {
    _this.sceneCount++;
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
