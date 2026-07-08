Game.NS_DIN_G8level1 = function () { };

Game.NS_DIN_G8level1.prototype = {
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
      _this.languageSelected = "Hindi";
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

    _this.wrongans = document.createElement("audio");
    _this.wronganssrc = document.createElement("source");
    _this.wronganssrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
    _this.wrongans.appendChild(_this.wronganssrc);

    _this.wrongSound = document.createElement("audio");
    _this.wrongSoundsrc = document.createElement("source");
    _this.wrongSoundsrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
    _this.wrongSound.appendChild(_this.wrongSoundsrc);

    _this.snapSound = document.createElement("audio");
    _this.snapSoundsrc = document.createElement("source");
    _this.snapSoundsrc.setAttribute("src", window.baseUrl + "sounds/snapSound.mp3");
    _this.snapSound.appendChild(_this.snapSoundsrc);

    _this.framechange = document.createElement("audio");
    _this.framechangesrc = document.createElement("source");
    _this.framechangesrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
    _this.framechange.appendChild(_this.framechangesrc);

    _this.tweening = document.createElement("audio");
    _this.tweeningsrc = document.createElement("source");
    _this.tweeningsrc.setAttribute("src", window.baseUrl + "sounds/Unlock Skill.mp3");
    _this.tweening.appendChild(_this.tweeningsrc);

    _this.Ask_Question2 = _this.createAudio("NS_DIN_G8_a1");
    _this.Ask_Question3 = _this.createAudio("NS_DIN_G8_a2");

    _this.Ask_Question4 = _this.createAudio("NS_DIN_G8_a3");

    _this.Ask_Question5 = _this.createAudio("NS_DIN_G8_a4");
    _this.Ask_Question6 = _this.createAudio("NS_DIN_G8_a5");

    _this.Ask_Question7 = _this.createAudio("NS_DIN_G8_a6");
    _this.Ask_Question8 = _this.createAudio("NS_DIN_G8_a7");

    telInitializerbbpp.gameIdInit("NSN_DIN_G8", gradeSelected);
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
    _this.totalValue = 0;

    _this.dragCount = 0;
    _this.dragCount2 = 0;

    _this.itemCount = 0;
    _this.measureMent = false;

    _this.handX = 150;
    _this.handY = 230;

    _this.QuestionCount = 0;
    _this.DirectFlag = false;
    _this.InverseFlag = false;

    _this.right = false;
    _this.wrong = false;

    _this.destroyObj1 = false;
    _this.destroyObj2 = false;
    _this.destroyObj3 = false;
    _this.destroyObj4 = false;
    _this.destroyObj5 = false;

    _this.startO = 230;
    _this.EndO = 438;
    _this.EndO2 = 415;
    _this.EndA = 445; // for both apple and pear
    _this.EndA2 = 415;

    _this.EndP = 465; //Potato
    _this.EndP2 = 440;

    _this.EndT = 465; // Tomato
    _this.EndT2 = 445; // Tomato

    _this.countHalf = 0;

    _this.countAll = 0;

    _this.weightCount = 0;

    _this.orangePositions = [];
    _this.applePositions = [];
    _this.pearPositions = [];
    _this.onionPositions = [];
    _this.tomatoPositions = [];
    _this.potatoPositions = [];

    _this.tweenedObjects1 = [];
    _this.tweenedObjects2 = [];
    _this.tweenedObjects3 = [];
    _this.tweenedObjects4 = [];
    _this.tweenedObjects5 = [];
    _this.tweenedObjects6 = [];

    _this.counttween = [];
    _this.counterForTimer = 0;

    _this.tickClicked = false;

    _this.speakerbtnClicked = false;
    _this.rightbtn_Clicked = false;

    _this.background = _this.add.tileSprite(
      0,
      0,
      _this.world.width,
      _this.world.height,
      "Bg"
    );
    //** include the background file, navigation bar, stars, timer objects.
    _this.navBar = _this.add.sprite(0, 0, "navBar");

    _this.backbtn = _this.add.sprite(5, 6, "backbtn");
    _this.backbtn.inputEnabled = true;
    _this.backbtn.input.useHandCursor = true;
    _this.backbtn.events.onInputDown.add(function () {
      _this.state.start('grade8NumberSystems', true, false);
    });

    _this.speakerbtn = _this.add.sprite(600, 6, "CommonSpeakerBtn");

    _this.speakerbtn.events.onInputDown.add(function () {
      telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
      if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
        _this.speakerbtn.inputEnabled = false;
        _this.speakerbtn.input.useHandCursor = false;
        _this.clickSound.play();

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

    //* start the game with first question
    _this.time.events.add(1000, _this.getQuestion);
  },
  createAudio: function (src) {
    audio = document.createElement("audio");
    audiosrc = document.createElement("source");
    audiosrc.setAttribute(
      "src",
      window.baseUrl + "questionSounds/NS_DIN_G8/" + _this.languageSelected + "/" + src + ".mp3"
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

    _this.totalDenomination = [100, 125, 170, 200];
    Phaser.ArrayUtils.shuffle(_this.totalDenomination);
    _this.randomizeDenomination();

    _this.questionid = 1;
  },
  stopVoice: function () {
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

    _this.Ask_Question8.pause();
    _this.Ask_Question8 = null;

    if (_this.celebrationSound) {
      if (_this.celebrationSound.isPlaying) {
        _this.celebrationSound.stop();
        _this.celebrationSound = null;
      }
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

  randomizeDenomination: function () {
    if (_this.totalDenomination[0] === 100) {
      _this.DenominationScreen_100();
    }
    if (_this.totalDenomination[0] === 125) {
      _this.DenominationScreen_125();
    }
    if (_this.totalDenomination[0] === 170) {
      _this.DenominationScreen_170();
    }
    if (_this.totalDenomination[0] === 200) {
      _this.DenominationScreen_200();
    }
  },

  DenominationScreen_100: function () {
    console.log("total denom 100");

    _this.totalDenominationInWallet = 100;

    _this.Wallet = _this.add.sprite(360, 90, "wallet");

    _this.rupee20 = _this.add.sprite(100, 50, "20Rupee");
    _this.rupee20_2 = _this.add.sprite(100, 105, "20Rupee");
    _this.rupee20_3 = _this.add.sprite(100, 160, "20Rupee");

    _this.rupee10 = _this.add.sprite(100, 217, "10Rupee");
    _this.rupee10_2 = _this.add.sprite(100, 275, "10Rupee");
    _this.rupee10_3 = _this.add.sprite(100, 332, "10Rupee");

    _this.rupee5 = _this.add.sprite(100, 390, "5Rupee");
    _this.rupee5_2 = _this.add.sprite(100, 446, "5Rupee");

    _this.rupee20.name = "20";
    _this.rupee20_2.name = "20_2";
    _this.rupee20_3.name = "20_3";
    _this.rupee20.value = 20;
    _this.rupee20_2.value = 20;
    _this.rupee20_3.value = 20;

    _this.rupee10.name = "10";
    _this.rupee10_2.name = "10_2";
    _this.rupee10_3.name = "10_3";
    _this.rupee10.value = 10;
    _this.rupee10_2.value = 10;
    _this.rupee10_3.value = 10;

    _this.rupee5.name = "5";
    _this.rupee5_2.name = "5_2";
    _this.rupee5.value = 5;
    _this.rupee5_2.value = 5;

    _this.rupee20_3.inputEnabled = true;
    _this.rupee20_3.input.enableDrag();
    _this.rupee20_3.input.useHandCursor = true;
    _this.rupee20_3.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee20_2.inputEnabled = true;
    _this.rupee20_2.input.enableDrag();
    _this.rupee20_2.input.useHandCursor = true;
    _this.rupee20_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee20.inputEnabled = true;
    _this.rupee20.input.enableDrag();
    _this.rupee20.input.useHandCursor = true;
    _this.rupee20.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee10.inputEnabled = true;
    _this.rupee10.input.enableDrag();
    _this.rupee10.input.useHandCursor = true;
    _this.rupee10.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee10_2.inputEnabled = true;
    _this.rupee10_2.input.enableDrag();
    _this.rupee10_2.input.useHandCursor = true;
    _this.rupee10_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee10_3.inputEnabled = true;
    _this.rupee10_3.input.enableDrag();
    _this.rupee10_3.input.useHandCursor = true;
    _this.rupee10_3.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee5.inputEnabled = true;
    _this.rupee5.input.enableDrag();
    _this.rupee5.input.useHandCursor = true;
    _this.rupee5.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee5_2.inputEnabled = true;
    _this.rupee5_2.input.enableDrag();
    _this.rupee5_2.input.useHandCursor = true;
    _this.rupee5_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.time.events.add(1000, function () {
      let hand = _this.add.image(150, 500, "hand");
      let rupee = _this.add.sprite(100, 446, "5Rupee");
      _this.world.bringToTop(hand);
      _this.handTween = _this.add.tween(hand);
      _this.rupeeTween = _this.add.tween(rupee);
      _this.handTween.to({ x: 660, y: 400 }, 2000, "Linear", true, 0);
      _this.rupeeTween.to({ x: 660, y: 350 }, 2100, "Linear", true, 0);
      _this.handTween.onComplete.add(function () {
        _this.clickSound.play();
        hand.destroy();
      });
      _this.rupeeTween.onComplete.add(function () {
        let wallet = _this.add.sprite(660, 350, "5Wallet");
        rupee.destroy();
        _this.walletTween1 = _this.add.tween(wallet);
        _this.walletTween1.to({ alpha: 0 }, 300, "Linear", true, 0);

        _this.time.events.add(200, function () {
          wallet.destroy();
        });
      });
    });

    _this.walletMoney = _this.add.group();

    _this.randomizeItems();
  },

  DenominationScreen_125: function () {
    console.log("total denom 125");

    _this.totalDenominationInWallet = 125;

    _this.Wallet = _this.add.sprite(360, 90, "wallet");

    _this.rupee50 = _this.add.sprite(100, 50, "50Rupee");

    _this.rupee20 = _this.add.sprite(100, 105, "20Rupee");
    _this.rupee20_2 = _this.add.sprite(100, 160, "20Rupee");

    _this.rupee10 = _this.add.sprite(100, 217, "10Rupee");
    _this.rupee10_2 = _this.add.sprite(100, 275, "10Rupee");

    _this.rupee5 = _this.add.sprite(100, 332, "5Rupee");
    _this.rupee5_2 = _this.add.sprite(100, 390, "5Rupee");
    _this.rupee5_3 = _this.add.sprite(100, 446, "5Rupee");

    _this.rupee50.name = "50";

    _this.rupee20.name = "20";
    _this.rupee20_2.name = "20_2";
    _this.rupee20.value = 20;
    _this.rupee20_2.value = 20;

    _this.rupee10.name = "10";
    _this.rupee10_2.name = "10_2";
    _this.rupee10.value = 10;
    _this.rupee10_2.value = 10;

    _this.rupee5.name = "5";
    _this.rupee5_2.name = "5_2";
    _this.rupee5_3.name = "5_3";
    _this.rupee5.value = 5;
    _this.rupee5_2.value = 5;
    _this.rupee5_3.value = 5;

    _this.rupee50.inputEnabled = true;
    _this.rupee50.input.enableDrag();
    _this.rupee50.input.useHandCursor = true;
    _this.rupee50.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee20.inputEnabled = true;
    _this.rupee20.input.enableDrag();
    _this.rupee20.input.useHandCursor = true;
    _this.rupee20.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee20_2.inputEnabled = true;
    _this.rupee20_2.input.enableDrag();
    _this.rupee20_2.input.useHandCursor = true;
    _this.rupee20_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee10.inputEnabled = true;
    _this.rupee10.input.enableDrag();
    _this.rupee10.input.useHandCursor = true;
    _this.rupee10.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee10_2.inputEnabled = true;
    _this.rupee10_2.input.enableDrag();
    _this.rupee10_2.input.useHandCursor = true;
    _this.rupee10_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee5.inputEnabled = true;
    _this.rupee5.input.enableDrag();
    _this.rupee5.input.useHandCursor = true;
    _this.rupee5.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee5_2.inputEnabled = true;
    _this.rupee5_2.input.enableDrag();
    _this.rupee5_2.input.useHandCursor = true;
    _this.rupee5_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee5_3.inputEnabled = true;
    _this.rupee5_3.input.enableDrag();
    _this.rupee5_3.input.useHandCursor = true;
    _this.rupee5_3.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.time.events.add(1000, function () {
      let hand = _this.add.image(150, 500, "hand");
      let rupee = _this.add.sprite(100, 446, "5Rupee");
      _this.world.bringToTop(hand);
      _this.handTween = _this.add.tween(hand);
      _this.rupeeTween = _this.add.tween(rupee);
      _this.handTween.to({ x: 660, y: 400 }, 2000, "Linear", true, 0);
      _this.rupeeTween.to({ x: 660, y: 350 }, 2100, "Linear", true, 0);
      _this.handTween.onComplete.add(function () {
        _this.clickSound.play();
        hand.destroy();
      });
      _this.rupeeTween.onComplete.add(function () {
        let wallet = _this.add.sprite(660, 350, "5Wallet");
        rupee.destroy();
        _this.walletTween1 = _this.add.tween(wallet);
        _this.walletTween1.to({ alpha: 0 }, 300, "Linear", true, 0);

        _this.time.events.add(200, function () {
          wallet.destroy();
        });
      });
    });

    _this.walletMoney = _this.add.group();

    _this.randomizeItems();
  },

  DenominationScreen_170: function () {
    console.log("total denom 170");

    _this.totalDenominationInWallet = 170;

    _this.Wallet = _this.add.sprite(360, 90, "wallet");

    _this.rupee50 = _this.add.sprite(100, 50, "50Rupee");
    _this.rupee50_2 = _this.add.sprite(100, 105, "50Rupee");

    _this.rupee20 = _this.add.sprite(100, 160, "20Rupee");
    _this.rupee20_2 = _this.add.sprite(100, 217, "20Rupee");

    _this.rupee10 = _this.add.sprite(100, 275, "10Rupee");
    _this.rupee10_2 = _this.add.sprite(100, 332, "10Rupee");

    _this.rupee5 = _this.add.sprite(100, 390, "5Rupee");
    _this.rupee5_2 = _this.add.sprite(100, 446, "5Rupee");

    _this.rupee50.name = "50";
    _this.rupee50_2.name = "50_2";
    _this.rupee50.value = 50;
    _this.rupee50_2.value = 50;

    _this.rupee20.name = "20";
    _this.rupee20_2.name = "20_2";
    _this.rupee20.value = 20;
    _this.rupee20_2.value = 20;

    _this.rupee10.name = "10";
    _this.rupee10_2.name = "10_2";
    _this.rupee10.value = 10;
    _this.rupee10_2.value = 10;

    _this.rupee5.name = "5";
    _this.rupee5_2.name = "5_2";
    _this.rupee5.value = 5;
    _this.rupee5_2.value = 5;

    _this.rupee50.inputEnabled = true;
    _this.rupee50.input.enableDrag();
    _this.rupee50.input.useHandCursor = true;
    _this.rupee50.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee50_2.inputEnabled = true;
    _this.rupee50_2.input.enableDrag();
    _this.rupee50_2.input.useHandCursor = true;
    _this.rupee50_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee20.inputEnabled = true;
    _this.rupee20.input.enableDrag();
    _this.rupee20.input.useHandCursor = true;
    _this.rupee20.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee20_2.inputEnabled = true;
    _this.rupee20_2.input.enableDrag();
    _this.rupee20_2.input.useHandCursor = true;
    _this.rupee20_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee10.inputEnabled = true;
    _this.rupee10.input.enableDrag();
    _this.rupee10.input.useHandCursor = true;
    _this.rupee10.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee10_2.inputEnabled = true;
    _this.rupee10_2.input.enableDrag();
    _this.rupee10_2.input.useHandCursor = true;
    _this.rupee10_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee5.inputEnabled = true;
    _this.rupee5.input.enableDrag();
    _this.rupee5.input.useHandCursor = true;
    _this.rupee5.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee5_2.inputEnabled = true;
    _this.rupee5_2.input.enableDrag();
    _this.rupee5_2.input.useHandCursor = true;
    _this.rupee5_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.time.events.add(1000, function () {
      let hand = _this.add.image(150, 500, "hand");
      let rupee = _this.add.sprite(100, 446, "5Rupee");
      _this.world.bringToTop(hand);
      _this.handTween = _this.add.tween(hand);
      _this.rupeeTween = _this.add.tween(rupee);
      _this.handTween.to({ x: 660, y: 400 }, 2000, "Linear", true, 0);
      _this.rupeeTween.to({ x: 660, y: 350 }, 2100, "Linear", true, 0);
      _this.handTween.onComplete.add(function () {
        _this.clickSound.play();
        hand.destroy();
      });
      _this.rupeeTween.onComplete.add(function () {
        let wallet = _this.add.sprite(660, 350, "5Wallet");
        rupee.destroy();
        _this.walletTween1 = _this.add.tween(wallet);
        _this.walletTween1.to({ alpha: 0 }, 300, "Linear", true, 0);

        _this.time.events.add(200, function () {
          wallet.destroy();
        });
      });
    });

    _this.walletMoney = _this.add.group();

    _this.randomizeItems();
  },

  DenominationScreen_200: function () {
    console.log("total denom 200");

    _this.totalDenominationInWallet = 200;

    _this.Wallet = _this.add.sprite(360, 90, "wallet");

    _this.rupee50 = _this.add.sprite(100, 50, "50Rupee");
    _this.rupee50_2 = _this.add.sprite(100, 105, "50Rupee");
    _this.rupee50_3 = _this.add.sprite(100, 160, "50Rupee");

    _this.rupee20 = _this.add.sprite(100, 217, "20Rupee");

    _this.rupee10 = _this.add.sprite(100, 275, "10Rupee");
    _this.rupee10_2 = _this.add.sprite(100, 332, "10Rupee");

    _this.rupee5 = _this.add.sprite(100, 390, "5Rupee");
    _this.rupee5_2 = _this.add.sprite(100, 446, "5Rupee");

    _this.rupee50.name = "50";
    _this.rupee50_2.name = "50_2";
    _this.rupee50_3.name = "50_3";
    _this.rupee50.value = 50;
    _this.rupee50_2.value = 50;
    _this.rupee50_3.value = 50;

    _this.rupee20.name = "20";
    _this.rupee20.value = 20;

    _this.rupee10.name = "10";
    _this.rupee10_2.name = "10_2";
    _this.rupee10.value = 10;
    _this.rupee10_2.value = 10;

    _this.rupee5.name = "5";
    _this.rupee5_2.name = "5_2";
    _this.rupee5.value = 5;
    _this.rupee5_2.value = 5;

    _this.rupee50.inputEnabled = true;
    _this.rupee50.input.enableDrag();
    _this.rupee50.input.useHandCursor = true;
    _this.rupee50.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee50_2.inputEnabled = true;
    _this.rupee50_2.input.enableDrag();
    _this.rupee50_2.input.useHandCursor = true;
    _this.rupee50_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee50_3.inputEnabled = true;
    _this.rupee50_3.input.enableDrag();
    _this.rupee50_3.input.useHandCursor = true;
    _this.rupee50_3.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee20.inputEnabled = true;
    _this.rupee20.input.enableDrag();
    _this.rupee20.input.useHandCursor = true;
    _this.rupee20.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee10.inputEnabled = true;
    _this.rupee10.input.enableDrag();
    _this.rupee10.input.useHandCursor = true;
    _this.rupee10.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee10_2.inputEnabled = true;
    _this.rupee10_2.input.enableDrag();
    _this.rupee10_2.input.useHandCursor = true;
    _this.rupee10_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee5.inputEnabled = true;
    _this.rupee5.input.enableDrag();
    _this.rupee5.input.useHandCursor = true;
    _this.rupee5.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.rupee5_2.inputEnabled = true;
    _this.rupee5_2.input.enableDrag();
    _this.rupee5_2.input.useHandCursor = true;
    _this.rupee5_2.events.onDragStop.add(_this.DragMoneyToWallet, _this);

    _this.time.events.add(1000, function () {
      let hand = _this.add.image(150, 500, "hand");
      let rupee = _this.add.sprite(100, 446, "5Rupee");
      _this.world.bringToTop(hand);
      _this.handTween = _this.add.tween(hand);
      _this.rupeeTween = _this.add.tween(rupee);
      _this.handTween.to({ x: 660, y: 400 }, 2000, "Linear", true, 0);
      _this.rupeeTween.to({ x: 660, y: 350 }, 2100, "Linear", true, 0);
      _this.handTween.onComplete.add(function () {
        _this.clickSound.play();
        hand.destroy();
      });
      _this.rupeeTween.onComplete.add(function () {
        let wallet = _this.add.sprite(660, 350, "5Wallet");
        rupee.destroy();
        _this.walletTween1 = _this.add.tween(wallet);
        _this.walletTween1.to({ alpha: 0 }, 300, "Linear", true, 0);

        _this.time.events.add(200, function () {
          wallet.destroy();
        });
      });
    });

    _this.walletMoney = _this.add.group();

    _this.randomizeItems();
  },

  randomizeItems: function () {
    _this.ItemsArray = [1, 2, 3, 4, 5, 6]; // 6 items
    Phaser.ArrayUtils.shuffle(_this.ItemsArray);

    _this.ItemValues = [1, 2, 3];
    Phaser.ArrayUtils.shuffle(_this.ItemValues);

    _this.DirectORInverseQuestion = [1, 2];
    Phaser.ArrayUtils.shuffle(_this.DirectORInverseQuestion);
  },

  DragMoneyToWallet: function (target) {
    _this.dragCount++;
    _this.snapSound.play();

    //extra for denomination 100
    if (_this.totalDenomination[0] === 100) {
      if (target.name === "20") {
        _this.rupee20.destroy();
        _this.wallet20 = _this.add.sprite(400, 150, "20Wallet");
        _this.walletMoney.addChild(_this.wallet20);
      }
      if (target.name === "20_2") {
        _this.rupee20_2.destroy();
        _this.wallet20_2 = _this.add.sprite(400, 210, "20Wallet");
        _this.walletMoney.addChild(_this.wallet20_2);
      }
      if (target.name === "20_3") {
        _this.rupee20_3.destroy();
        _this.wallet20_3 = _this.add.sprite(400, 280, "20Wallet");
        _this.walletMoney.addChild(_this.wallet20_3);
      }
      if (target.name === "10") {
        _this.rupee10.destroy();
        _this.wallet10 = _this.add.sprite(400, 350, "10Wallet");
        _this.walletMoney.addChild(_this.wallet10);
      }
      if (target.name === "10_2") {
        _this.rupee10_2.destroy();
        _this.wallet10_2 = _this.add.sprite(640, 150, "10Wallet");
        _this.walletMoney.addChild(_this.wallet10_2);
      }
      if (target.name === "10_3") {
        _this.rupee10_3.destroy();
        _this.wallet10_3 = _this.add.sprite(640, 210, "10Wallet");
        _this.walletMoney.addChild(_this.wallet10_3);
      }
      if (target.name === "5") {
        _this.rupee5.destroy();
        _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
        _this.walletMoney.addChild(_this.wallet5);
      }
      if (target.name === "5_2") {
        _this.rupee5_2.destroy();
        _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
        _this.walletMoney.addChild(_this.wallet5_2);
      }
    }
    if (_this.totalDenomination[0] === 125) {
      if (target.name === "5") {
        _this.rupee5.destroy();
        _this.wallet5 = _this.add.sprite(640, 210, "5Wallet");
        _this.walletMoney.addChild(_this.wallet5);
      }
      if (target.name === "5_2") {
        _this.rupee5_2.destroy();
        _this.wallet5_2 = _this.add.sprite(640, 280, "5Wallet");
        _this.walletMoney.addChild(_this.wallet5_2);
      }
      if (target.name === "5_3") {
        _this.rupee5_3.destroy();
        _this.wallet5_3 = _this.add.sprite(640, 350, "5Wallet");
        _this.walletMoney.addChild(_this.wallet5_3);
      }
      if (target.name === "10_2") {
        _this.rupee10_2.destroy();
        _this.wallet10_2 = _this.add.sprite(640, 150, "10Wallet");
        _this.walletMoney.addChild(_this.wallet10_2);
      }
      if (target.name === "10") {
        _this.rupee10.destroy();
        _this.wallet10 = _this.add.sprite(400, 350, "10Wallet");
        _this.walletMoney.addChild(_this.wallet10);
      }
      if (target.name === "20_2") {
        _this.rupee20_2.destroy();
        _this.wallet20_2 = _this.add.sprite(400, 280, "20Wallet");
        _this.walletMoney.addChild(_this.wallet20_2);
      }
      if (target.name === "20") {
        _this.rupee20.destroy();
        _this.wallet20 = _this.add.sprite(400, 210, "20Wallet");
        _this.walletMoney.addChild(_this.wallet20);
      }
      if (target.name === "50") {
        _this.rupee50.destroy();
        _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");
        _this.walletMoney.addChild(_this.wallet50);
      }
    }
    if (_this.totalDenomination[0] === 170) {
      if (target.name === "5_2") {
        _this.rupee5_2.destroy();
        _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
        _this.walletMoney.addChild(_this.wallet5_2);
      }
      if (target.name === "5") {
        _this.rupee5.destroy();
        _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
        _this.walletMoney.addChild(_this.wallet5);
      }
      if (target.name === "10_2") {
        _this.rupee10_2.destroy();
        _this.wallet10_2 = _this.add.sprite(640, 210, "10Wallet");
        _this.walletMoney.addChild(_this.wallet10_2);
      }
      if (target.name === "10") {
        _this.rupee10.destroy();
        _this.wallet10 = _this.add.sprite(640, 150, "10Wallet");
        _this.walletMoney.addChild(_this.wallet10);
      }
      if (target.name === "20_2") {
        _this.rupee20_2.destroy();
        _this.wallet20_2 = _this.add.sprite(400, 350, "20Wallet");
        _this.walletMoney.addChild(_this.wallet20_2);
      }
      if (target.name === "20") {
        _this.rupee20.destroy();
        _this.wallet20 = _this.add.sprite(400, 280, "20Wallet");
        _this.walletMoney.addChild(_this.wallet20);
      }
      if (target.name === "50_2") {
        _this.rupee50_2.destroy();
        _this.wallet50_2 = _this.add.sprite(400, 210, "50Wallet");
        _this.walletMoney.addChild(_this.wallet50_2);
      }
      if (target.name === "50") {
        _this.rupee50.destroy();
        _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");
        _this.walletMoney.addChild(_this.wallet50);
      }
    }
    if (_this.totalDenomination[0] === 200) {
      if (target.name === "5_2") {
        _this.rupee5_2.destroy();
        _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
        _this.walletMoney.addChild(_this.wallet5_2);
      }
      if (target.name === "5") {
        _this.rupee5.destroy();
        _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
        _this.walletMoney.addChild(_this.wallet5);
      }
      if (target.name === "10_2") {
        _this.rupee10_2.destroy();
        _this.wallet10_2 = _this.add.sprite(640, 210, "10Wallet");
        _this.walletMoney.addChild(_this.wallet10_2);
      }
      if (target.name === "10") {
        _this.rupee10.destroy();
        _this.wallet10 = _this.add.sprite(640, 150, "10Wallet");
        _this.walletMoney.addChild(_this.wallet10);
      }
      if (target.name === "20") {
        _this.rupee20.destroy();
        _this.wallet20 = _this.add.sprite(400, 350, "20Wallet");
        _this.walletMoney.addChild(_this.wallet20);
      }
      if (target.name === "50_3") {
        _this.rupee50_3.destroy();
        _this.wallet50_3 = _this.add.sprite(400, 280, "50Wallet");
        _this.walletMoney.addChild(_this.wallet50_3);
      }
      if (target.name === "50_2") {
        _this.rupee50_2.destroy();
        _this.wallet50_2 = _this.add.sprite(400, 210, "50Wallet");
        _this.walletMoney.addChild(_this.wallet50_2);
      }
      if (target.name === "50") {
        _this.rupee50.destroy();
        _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");
        _this.walletMoney.addChild(_this.wallet50);
      }
    }

    if (_this.dragCount === 8) {
      _this.time.events.add(500, function () {
        _this.Ask_Question2.play();
        _this.Question_flag = 2;
      });
      _this.addNumberPad();
    }
  },

  WeightMachine: function () {
    _this.Box1 = _this.add.sprite(30, 73, "Box1");
    _this.weightMachine = _this.add.sprite(120, 16, "weightMachine");
    _this.Box1.addChild(_this.weightMachine);

    _this.Box3 = _this.add.sprite(2, 277, "Box3");
    _this.Box4 = _this.add.sprite(20, 300, "Box4");
    _this.Box1.addChild(_this.Box3);
    _this.Box1.addChild(_this.Box4);

    if (_this.itemCount === 0) {
      _this.Table1 = _this.add.sprite(175, 150, "Table1");
      _this.Box1.addChild(_this.Table1);
    } else if (_this.itemCount === 1) {
      _this.Table2 = _this.add.sprite(175, 150, "Table2");
      _this.Box1.addChild(_this.Table2);
    } else if (_this.itemCount === 2) {
      _this.Table3 = _this.add.sprite(175, 150, "Table3");
      _this.Box1.addChild(_this.Table3);
    }

    _this.dragCount2 = 0;

    if (_this.totalDenomination[0] === 100) {
      _this.RandomisePriceAndWeight_100();
    }
    if (_this.totalDenomination[0] === 125) {
      _this.RandomisePriceAndWeight_125();
    }
    if (_this.totalDenomination[0] === 170) {
      _this.RandomisePriceAndWeight_170();
    }
    if (_this.totalDenomination[0] === 200) {
      _this.RandomisePriceAndWeight_200();
    }

    if (_this.QuestionCount === 0 && _this.itemCount === 0) {
      _this.time.events.add(1500, function () {
        _this.Ask_Question3.play();
      });
    }

    _this.Question_flag = 3;

    if (_this.QuestionCount === 0 && _this.itemCount === 0) {
      _this.time.events.add(1000, function () {
        let hand = _this.add.image(0, 500, "hand");
        _this.handTween = _this.add.tween(hand);
        _this.handTween.to({ x: 80, y: 400 }, 1200, "Linear", true, 0);
        _this.handTween.onComplete.add(function () {
          _this.clickSound.play();
          hand.destroy();
        });
      });
    }
  },

  RandomisePriceAndWeight_100: function () {
    _this.OrangeGroup = _this.add.group();
    _this.AppleGroup = _this.add.group();
    _this.PearGroup = _this.add.group();
    _this.PotatoGroup = _this.add.group();
    _this.TomatoGroup = _this.add.group();
    _this.OnionGroup = _this.add.group();

    if (_this.ItemsArray[_this.QuestionCount] == 1) {
      // Orange
      _this.Orange = _this.add.sprite(5, 10, "Orange");
      _this.Orange.scale.setTo(0.78, 0.8);
      _this.Box4.addChild(_this.Orange);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 15;
          _this.itemWeight = 0.5;
        } else if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        } else if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 60;
          _this.itemWeight = 2;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 15;
          _this.itemWeight = 0.5;
        } else if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        } else if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 60;
          _this.itemWeight = 2;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 15;
          _this.itemWeight = 0.5;
        } else if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        } else if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 60;
          _this.itemWeight = 2;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Orange.inputEnabled = true;
      _this.Orange.input.useHandCursor = true;
      _this.Orange.events.onInputDown.add(_this.tweenOrangeToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 2) {
      //Apple
      _this.Apple = _this.add.sprite(5, 6, "Apple");
      _this.Apple.scale.setTo(0.75, 0.75);
      _this.Box4.addChild(_this.Apple);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 20;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 40;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 60;
          _this.itemWeight = 1.5;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 20;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 40;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 60;
          _this.itemWeight = 1.5;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 20;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 40;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 60;
          _this.itemWeight = 1.5;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Apple.inputEnabled = true;
      _this.Apple.input.useHandCursor = true;
      _this.Apple.events.onInputDown.add(_this.tweenAppleToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 3) {
      //Pear
      _this.Pear = _this.add.sprite(7, 6, "Pear");
      _this.Pear.scale.setTo(0.8, 0.77);
      _this.Box4.addChild(_this.Pear);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 10;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 20;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 30;
          _this.itemWeight = 1.5;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 10;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 20;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 30;
          _this.itemWeight = 1.5;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 10;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 20;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 30;
          _this.itemWeight = 1.5;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Pear.inputEnabled = true;
      _this.Pear.input.useHandCursor = true;
      _this.Pear.events.onInputDown.add(_this.tweenPearToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 4) {
      //potato
      _this.Potato = _this.add.sprite(7, 12, "Potato");
      _this.Potato.scale.setTo(0.67, 0.75);
      _this.Box4.addChild(_this.Potato);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 45;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 60;
          _this.itemWeight = 2;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 45;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 60;
          _this.itemWeight = 2;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 45;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 60;
          _this.itemWeight = 2;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Potato.inputEnabled = true;
      _this.Potato.input.useHandCursor = true;
      _this.Potato.events.onInputDown.add(_this.tweenPotatoToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 5) {
      //tomato
      _this.Tomato = _this.add.sprite(12, 12, "Tomato");
      _this.Box4.addChild(_this.Tomato);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 20;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 30;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 40;
          _this.itemWeight = 2;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 20;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 30;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 40;
          _this.itemWeight = 2;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 20;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 30;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 40;
          _this.itemWeight = 2;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Tomato.inputEnabled = true;
      _this.Tomato.input.useHandCursor = true;
      _this.Tomato.events.onInputDown.add(_this.tweenTomatoToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 6) {
      //onion
      _this.Onion = _this.add.sprite(12, 7, "Onion");
      _this.Onion.scale.setTo(0.75, 0.72);
      _this.Box4.addChild(_this.Onion);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 15;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 45;
          _this.itemWeight = 1.5;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 15;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 45;
          _this.itemWeight = 1.5;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 15;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 45;
          _this.itemWeight = 1.5;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Onion.inputEnabled = true;
      _this.Onion.input.useHandCursor = true;
      _this.Onion.events.onInputDown.add(_this.tweenOnionToMachine, _this);
    }

    if (_this.itemCount === 0) {
      _this.Rs_Kg = _this.add.text(100, 60, _this.itemPrice);
      _this.applyingStyleRed(_this.Rs_Kg);
      _this.Table1.addChild(_this.Rs_Kg);

      if (
        _this.itemWeight === 1 ||
        _this.itemWeight === 2 ||
        _this.itemWeight === 3
      ) {
        _this.Kg = _this.add.text(100, 100, _this.itemWeight + ".0");
      } else {
        _this.Kg = _this.add.text(100, 100, _this.itemWeight);
      }
      _this.applyingStyleRed(_this.Kg);
      _this.Table1.addChild(_this.Kg);
    } else if (_this.itemCount === 1) {
      var firstPrice = _this.add.text(100, 60, _this.firstItemPrice);
      _this.applyingStyleBlue(firstPrice);
      firstPrice.fontSize = "26px";
      _this.Table2.addChild(firstPrice);

      _this.firstRemaning = _this.remainingMoney;

      var firstRemaning = _this.add.text(100, 25, _this.remainingMoney);
      _this.applyingStyleBlue(firstRemaning);
      firstRemaning.fontSize = "26px";
      _this.Table2.addChild(firstRemaning);

      if (
        _this.firstItemWeight === 1 ||
        _this.firstItemWeight === 2 ||
        _this.firstItemWeight === 3
      ) {
        var firstWeight = _this.add.text(
          100,
          100,
          _this.firstItemWeight + ".0"
        );
      } else {
        var firstWeight = _this.add.text(100, 100, _this.firstItemWeight);
      }

      _this.applyingStyleBlue(firstWeight);
      firstWeight.fontSize = "26px";
      _this.Table2.addChild(firstWeight);

      if (
        _this.itemWeight === 1 ||
        _this.itemWeight === 2 ||
        _this.itemWeight === 3
      ) {
        _this.Kg = _this.add.text(175, 100, _this.itemWeight + ".0");
      } else {
        _this.Kg = _this.add.text(175, 100, _this.itemWeight);
      }
      _this.applyingStyleRed(_this.Kg);
      _this.Table2.addChild(_this.Kg);

      _this.secondItemPrice = _this.itemPrice;
      _this.secondItemWeight = _this.itemWeight;
    } else if (_this.itemCount === 2) {
      var firstPrice = _this.add.text(100, 60, _this.firstItemPrice);
      _this.applyingStyleBlue(firstPrice);
      firstPrice.fontSize = "26px";
      _this.Table3.addChild(firstPrice);

      var firstRemaning = _this.add.text(100, 25, _this.firstRemaning);
      _this.applyingStyleBlue(firstRemaning);
      firstRemaning.fontSize = "26px";
      _this.Table3.addChild(firstRemaning);

      var secondPrice = _this.add.text(175, 60, _this.secondItemPrice);
      _this.applyingStyleBlue(secondPrice);
      secondPrice.fontSize = "26px";
      _this.Table3.addChild(secondPrice);

      var secondRemaning = _this.add.text(175, 25, _this.remainingMoney);
      _this.applyingStyleBlue(secondRemaning);
      secondRemaning.fontSize = "26px";
      _this.Table3.addChild(secondRemaning);

      if (
        _this.firstItemWeight === 1 ||
        _this.firstItemWeight === 2 ||
        _this.firstItemWeight === 3
      ) {
        var firstWeight = _this.add.text(
          100,
          100,
          _this.firstItemWeight + ".0"
        );
      } else {
        var firstWeight = _this.add.text(100, 100, _this.firstItemWeight);
      }

      _this.applyingStyleBlue(firstWeight);
      firstWeight.fontSize = "26px";
      _this.Table3.addChild(firstWeight);

      if (
        _this.secondItemWeight === 1 ||
        _this.secondItemWeight === 2 ||
        _this.secondItemWeight === 3
      ) {
        var secondWeight = _this.add.text(
          175,
          100,
          _this.secondItemWeight + ".0"
        );
      } else {
        var secondWeight = _this.add.text(175, 100, _this.secondItemWeight);
      }

      _this.applyingStyleBlue(secondWeight);
      secondWeight.fontSize = "26px";
      _this.Table3.addChild(secondWeight);

      _this.thirdItemPrice = _this.itemPrice;
      _this.secondRemaning = _this.remainingMoney;
      _this.thirdItemWeight = _this.itemWeight;

      if (
        _this.itemWeight === 1 ||
        _this.itemWeight === 2 ||
        _this.itemWeight === 3
      ) {
        _this.Kg = _this.add.text(245, 100, _this.itemWeight + ".0");
      } else {
        _this.Kg = _this.add.text(245, 100, _this.itemWeight);
      }
      _this.applyingStyleRed(_this.Kg);
      _this.Table3.addChild(_this.Kg);
    }

    _this.weightInKg = _this.add.text(520, 210, "0.0 kg");
    _this.applyingWhite(_this.weightInKg);
    _this.weightMachine.addChild(_this.weightInKg);

    // _this.startO = 230;
    // _this.EndO = 438;
    // _this.EndA = 445; // for both apple and pear

    // _this.EndP = 465; //Potato

    // _this.EndT = 465; // Tomato
    // _this.EndT2 = 445; // Tomato

    // _this.countHalf = 0;

    // _this.weightCount = 0;

    _this.tick = _this.add.sprite(860, 470, "TickBtn");
    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
  },

  RandomisePriceAndWeight_125: function () {
    _this.OrangeGroup = _this.add.group();
    _this.AppleGroup = _this.add.group();
    _this.PearGroup = _this.add.group();
    _this.PotatoGroup = _this.add.group();
    _this.TomatoGroup = _this.add.group();
    _this.OnionGroup = _this.add.group();

    if (_this.ItemsArray[_this.QuestionCount] == 1) {
      // Orange
      _this.Orange = _this.add.sprite(5, 10, "Orange");
      _this.Orange.scale.setTo(0.78, 0.8);
      _this.Box4.addChild(_this.Orange);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 0.5;
        } else if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 60;
          _this.itemWeight = 1;
        } else if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 90;
          _this.itemWeight = 1.5;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 0.5;
        } else if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 60;
          _this.itemWeight = 1;
        } else if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 90;
          _this.itemWeight = 1.5;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 0.5;
        } else if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 60;
          _this.itemWeight = 1;
        } else if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 90;
          _this.itemWeight = 1.5;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Orange.inputEnabled = true;
      _this.Orange.input.useHandCursor = true;
      _this.Orange.events.onInputDown.add(_this.tweenOrangeToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 2) {
      //Apple
      _this.Apple = _this.add.sprite(5, 6, "Apple");
      _this.Apple.scale.setTo(0.75, 0.75);
      _this.Box4.addChild(_this.Apple);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 60;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 90;
          _this.itemWeight = 1.5;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 60;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 90;
          _this.itemWeight = 1.5;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 60;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 90;
          _this.itemWeight = 1.5;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Apple.inputEnabled = true;
      _this.Apple.input.useHandCursor = true;
      _this.Apple.events.onInputDown.add(_this.tweenAppleToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 3) {
      //Pear
      _this.Pear = _this.add.sprite(7, 6, "Pear");
      _this.Pear.scale.setTo(0.8, 0.77);
      _this.Box4.addChild(_this.Pear);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 40;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 80;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 100;
          _this.itemWeight = 2.5;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 40;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 80;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 100;
          _this.itemWeight = 2.5;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 40;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 80;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 100;
          _this.itemWeight = 2.5;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Pear.inputEnabled = true;
      _this.Pear.input.useHandCursor = true;
      _this.Pear.events.onInputDown.add(_this.tweenPearToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 4) {
      //potato
      _this.Potato = _this.add.sprite(7, 12, "Potato");
      _this.Potato.scale.setTo(0.67, 0.75);
      _this.Box4.addChild(_this.Potato);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 20;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 60;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 100;
          _this.itemWeight = 2.5;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 20;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 60;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 100;
          _this.itemWeight = 2.5;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 20;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 60;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 100;
          _this.itemWeight = 2.5;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Potato.inputEnabled = true;
      _this.Potato.input.useHandCursor = true;
      _this.Potato.events.onInputDown.add(_this.tweenPotatoToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 5) {
      //tomato
      _this.Tomato = _this.add.sprite(12, 12, "Tomato");
      _this.Box4.addChild(_this.Tomato);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 100;
          _this.itemWeight = 2;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 100;
          _this.itemWeight = 2;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 100;
          _this.itemWeight = 2;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Tomato.inputEnabled = true;
      _this.Tomato.input.useHandCursor = true;
      _this.Tomato.events.onInputDown.add(_this.tweenTomatoToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 6) {
      //onion
      _this.Onion = _this.add.sprite(12, 7, "Onion");
      _this.Onion.scale.setTo(0.75, 0.72);
      _this.Box4.addChild(_this.Onion);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 60;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 90;
          _this.itemWeight = 3;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 60;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 90;
          _this.itemWeight = 3;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 60;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 90;
          _this.itemWeight = 3;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Onion.inputEnabled = true;
      _this.Onion.input.useHandCursor = true;
      _this.Onion.events.onInputDown.add(_this.tweenOnionToMachine, _this);
    }

    if (_this.itemCount === 0) {
      _this.Rs_Kg = _this.add.text(100, 60, _this.itemPrice);
      _this.applyingStyleRed(_this.Rs_Kg);
      _this.Table1.addChild(_this.Rs_Kg);

      if (
        _this.itemWeight === 1 ||
        _this.itemWeight === 2 ||
        _this.itemWeight === 3
      ) {
        _this.Kg = _this.add.text(100, 100, _this.itemWeight + ".0");
      } else {
        _this.Kg = _this.add.text(100, 100, _this.itemWeight);
      }
      _this.applyingStyleRed(_this.Kg);
      _this.Table1.addChild(_this.Kg);
    } else if (_this.itemCount === 1) {
      var firstPrice = _this.add.text(100, 60, _this.firstItemPrice);
      _this.applyingStyleBlue(firstPrice);
      firstPrice.fontSize = "26px";
      _this.Table2.addChild(firstPrice);

      _this.firstRemaning = _this.remainingMoney;

      var firstRemaning = _this.add.text(100, 25, _this.remainingMoney);
      _this.applyingStyleBlue(firstRemaning);
      firstRemaning.fontSize = "26px";
      _this.Table2.addChild(firstRemaning);

      if (
        _this.firstItemWeight === 1 ||
        _this.firstItemWeight === 2 ||
        _this.firstItemWeight === 3
      ) {
        var firstWeight = _this.add.text(
          100,
          100,
          _this.firstItemWeight + ".0"
        );
      } else {
        var firstWeight = _this.add.text(100, 100, _this.firstItemWeight);
      }

      _this.applyingStyleBlue(firstWeight);
      firstWeight.fontSize = "26px";
      _this.Table2.addChild(firstWeight);

      if (
        _this.itemWeight === 1 ||
        _this.itemWeight === 2 ||
        _this.itemWeight === 3
      ) {
        _this.Kg = _this.add.text(175, 100, _this.itemWeight + ".0");
      } else {
        _this.Kg = _this.add.text(175, 100, _this.itemWeight);
      }
      _this.applyingStyleRed(_this.Kg);
      _this.Table2.addChild(_this.Kg);

      _this.secondItemPrice = _this.itemPrice;
      _this.secondItemWeight = _this.itemWeight;
    } else if (_this.itemCount === 2) {
      var firstPrice = _this.add.text(100, 60, _this.firstItemPrice);
      _this.applyingStyleBlue(firstPrice);
      firstPrice.fontSize = "26px";
      _this.Table3.addChild(firstPrice);

      var firstRemaning = _this.add.text(100, 25, _this.firstRemaning);
      _this.applyingStyleBlue(firstRemaning);
      firstRemaning.fontSize = "26px";
      _this.Table3.addChild(firstRemaning);

      var secondPrice = _this.add.text(175, 60, _this.secondItemPrice);
      _this.applyingStyleBlue(secondPrice);
      secondPrice.fontSize = "26px";
      _this.Table3.addChild(secondPrice);

      var secondRemaning = _this.add.text(175, 25, _this.remainingMoney);
      _this.applyingStyleBlue(secondRemaning);
      secondRemaning.fontSize = "26px";
      _this.Table3.addChild(secondRemaning);

      if (
        _this.firstItemWeight === 1 ||
        _this.firstItemWeight === 2 ||
        _this.firstItemWeight === 3
      ) {
        var firstWeight = _this.add.text(
          100,
          100,
          _this.firstItemWeight + ".0"
        );
      } else {
        var firstWeight = _this.add.text(100, 100, _this.firstItemWeight);
      }

      _this.applyingStyleBlue(firstWeight);
      firstWeight.fontSize = "26px";
      _this.Table3.addChild(firstWeight);

      if (
        _this.secondItemWeight === 1 ||
        _this.secondItemWeight === 2 ||
        _this.secondItemWeight === 3
      ) {
        var secondWeight = _this.add.text(
          175,
          100,
          _this.secondItemWeight + ".0"
        );
      } else {
        var secondWeight = _this.add.text(175, 100, _this.secondItemWeight);
      }

      _this.applyingStyleBlue(secondWeight);
      secondWeight.fontSize = "26px";
      _this.Table3.addChild(secondWeight);

      _this.thirdItemPrice = _this.itemPrice;
      _this.secondRemaning = _this.remainingMoney;
      _this.thirdItemWeight = _this.itemWeight;

      if (
        _this.itemWeight === 1 ||
        _this.itemWeight === 2 ||
        _this.itemWeight === 3
      ) {
        _this.Kg = _this.add.text(245, 100, _this.itemWeight + ".0");
      } else {
        _this.Kg = _this.add.text(245, 100, _this.itemWeight);
      }
      _this.applyingStyleRed(_this.Kg);
      _this.Table3.addChild(_this.Kg);
    }

    _this.weightInKg = _this.add.text(520, 210, "0.0 kg");
    _this.applyingWhite(_this.weightInKg);
    _this.weightMachine.addChild(_this.weightInKg);

    _this.tick = _this.add.sprite(860, 470, "TickBtn");
    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
  },

  RandomisePriceAndWeight_170: function () {
    _this.OrangeGroup = _this.add.group();
    _this.AppleGroup = _this.add.group();
    _this.PearGroup = _this.add.group();
    _this.PotatoGroup = _this.add.group();
    _this.TomatoGroup = _this.add.group();
    _this.OnionGroup = _this.add.group();

    if (_this.ItemsArray[_this.QuestionCount] == 1) {
      // Orange
      _this.Orange = _this.add.sprite(5, 10, "Orange");
      _this.Orange.scale.setTo(0.78, 0.8);
      _this.Box4.addChild(_this.Orange);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 0.5;
        } else if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 50;
          _this.itemWeight = 1;
        } else if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 0.5;
        } else if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 50;
          _this.itemWeight = 1;
        } else if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 0.5;
        } else if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 50;
          _this.itemWeight = 1;
        } else if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Orange.inputEnabled = true;
      _this.Orange.input.useHandCursor = true;
      _this.Orange.events.onInputDown.add(_this.tweenOrangeToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 2) {
      //Apple
      _this.Apple = _this.add.sprite(5, 6, "Apple");
      _this.Apple.scale.setTo(0.75, 0.75);
      _this.Box4.addChild(_this.Apple);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 50;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 50;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 50;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Apple.inputEnabled = true;
      _this.Apple.input.useHandCursor = true;
      _this.Apple.events.onInputDown.add(_this.tweenAppleToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 3) {
      //Pear
      _this.Pear = _this.add.sprite(7, 6, "Pear");
      _this.Pear.scale.setTo(0.8, 0.77);
      _this.Box4.addChild(_this.Pear);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 50;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 50;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 50;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Pear.inputEnabled = true;
      _this.Pear.input.useHandCursor = true;
      _this.Pear.events.onInputDown.add(_this.tweenPearToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 4) {
      //potato
      _this.Potato = _this.add.sprite(7, 12, "Potato");
      _this.Potato.scale.setTo(0.67, 0.75);
      _this.Box4.addChild(_this.Potato);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 45;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 60;
          _this.itemWeight = 2;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 45;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 60;
          _this.itemWeight = 2;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 30;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 45;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 60;
          _this.itemWeight = 2;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Potato.inputEnabled = true;
      _this.Potato.input.useHandCursor = true;
      _this.Potato.events.onInputDown.add(_this.tweenPotatoToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 5) {
      //tomato
      _this.Tomato = _this.add.sprite(12, 12, "Tomato");
      _this.Box4.addChild(_this.Tomato);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 20;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 40;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 80;
          _this.itemWeight = 2;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 20;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 40;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 80;
          _this.itemWeight = 2;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 20;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 40;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 80;
          _this.itemWeight = 2;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Tomato.inputEnabled = true;
      _this.Tomato.input.useHandCursor = true;
      _this.Tomato.events.onInputDown.add(_this.tweenTomatoToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 6) {
      //onion
      _this.Onion = _this.add.sprite(12, 7, "Onion");
      _this.Onion.scale.setTo(0.75, 0.72);
      _this.Box4.addChild(_this.Onion);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 50;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 75;
          _this.itemWeight = 3;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 50;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 75;
          _this.itemWeight = 3;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 25;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 50;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 75;
          _this.itemWeight = 3;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Onion.inputEnabled = true;
      _this.Onion.input.useHandCursor = true;
      _this.Onion.events.onInputDown.add(_this.tweenOnionToMachine, _this);
    }

    if (_this.itemCount === 0) {
      _this.Rs_Kg = _this.add.text(100, 60, _this.itemPrice);
      _this.applyingStyleRed(_this.Rs_Kg);
      _this.Table1.addChild(_this.Rs_Kg);

      if (
        _this.itemWeight === 1 ||
        _this.itemWeight === 2 ||
        _this.itemWeight === 3
      ) {
        _this.Kg = _this.add.text(100, 100, _this.itemWeight + ".0");
      } else {
        _this.Kg = _this.add.text(100, 100, _this.itemWeight);
      }
      _this.applyingStyleRed(_this.Kg);
      _this.Table1.addChild(_this.Kg);
    } else if (_this.itemCount === 1) {
      var firstPrice = _this.add.text(100, 60, _this.firstItemPrice);
      _this.applyingStyleBlue(firstPrice);
      firstPrice.fontSize = "26px";
      _this.Table2.addChild(firstPrice);

      _this.firstRemaning = _this.remainingMoney;

      var firstRemaning = _this.add.text(100, 25, _this.remainingMoney);
      _this.applyingStyleBlue(firstRemaning);
      firstRemaning.fontSize = "26px";
      _this.Table2.addChild(firstRemaning);

      if (
        _this.firstItemWeight === 1 ||
        _this.firstItemWeight === 2 ||
        _this.firstItemWeight === 3
      ) {
        var firstWeight = _this.add.text(
          100,
          100,
          _this.firstItemWeight + ".0"
        );
      } else {
        var firstWeight = _this.add.text(100, 100, _this.firstItemWeight);
      }

      _this.applyingStyleBlue(firstWeight);
      firstWeight.fontSize = "26px";
      _this.Table2.addChild(firstWeight);

      if (
        _this.itemWeight === 1 ||
        _this.itemWeight === 2 ||
        _this.itemWeight === 3
      ) {
        _this.Kg = _this.add.text(175, 100, _this.itemWeight + ".0");
      } else {
        _this.Kg = _this.add.text(175, 100, _this.itemWeight);
      }
      _this.applyingStyleRed(_this.Kg);
      _this.Table2.addChild(_this.Kg);

      _this.secondItemPrice = _this.itemPrice;
      _this.secondItemWeight = _this.itemWeight;
    } else if (_this.itemCount === 2) {
      var firstPrice = _this.add.text(100, 60, _this.firstItemPrice);
      _this.applyingStyleBlue(firstPrice);
      firstPrice.fontSize = "26px";
      _this.Table3.addChild(firstPrice);

      var firstRemaning = _this.add.text(100, 25, _this.firstRemaning);
      _this.applyingStyleBlue(firstRemaning);
      firstRemaning.fontSize = "26px";
      _this.Table3.addChild(firstRemaning);

      var secondPrice = _this.add.text(175, 60, _this.secondItemPrice);
      _this.applyingStyleBlue(secondPrice);
      secondPrice.fontSize = "26px";
      _this.Table3.addChild(secondPrice);

      var secondRemaning = _this.add.text(175, 25, _this.remainingMoney);
      _this.applyingStyleBlue(secondRemaning);
      secondRemaning.fontSize = "26px";
      _this.Table3.addChild(secondRemaning);

      if (
        _this.firstItemWeight === 1 ||
        _this.firstItemWeight === 2 ||
        _this.firstItemWeight === 3
      ) {
        var firstWeight = _this.add.text(
          100,
          100,
          _this.firstItemWeight + ".0"
        );
      } else {
        var firstWeight = _this.add.text(100, 100, _this.firstItemWeight);
      }

      _this.applyingStyleBlue(firstWeight);
      firstWeight.fontSize = "26px";
      _this.Table3.addChild(firstWeight);

      if (
        _this.secondItemWeight === 1 ||
        _this.secondItemWeight === 2 ||
        _this.secondItemWeight === 3
      ) {
        var secondWeight = _this.add.text(
          175,
          100,
          _this.secondItemWeight + ".0"
        );
      } else {
        var secondWeight = _this.add.text(175, 100, _this.secondItemWeight);
      }

      _this.applyingStyleBlue(secondWeight);
      secondWeight.fontSize = "26px";
      _this.Table3.addChild(secondWeight);

      _this.thirdItemPrice = _this.itemPrice;
      _this.secondRemaning = _this.remainingMoney;
      _this.thirdItemWeight = _this.itemWeight;

      if (
        _this.itemWeight === 1 ||
        _this.itemWeight === 2 ||
        _this.itemWeight === 3
      ) {
        _this.Kg = _this.add.text(245, 100, _this.itemWeight + ".0");
      } else {
        _this.Kg = _this.add.text(245, 100, _this.itemWeight);
      }
      _this.applyingStyleRed(_this.Kg);
      _this.Table3.addChild(_this.Kg);
    }

    _this.weightInKg = _this.add.text(520, 210, "0.0 kg");
    _this.applyingWhite(_this.weightInKg);
    _this.weightMachine.addChild(_this.weightInKg);

    // _this.startO = 230;
    // _this.EndO = 438;
    // _this.EndA = 445; // for both apple and pear

    // _this.EndP = 465; //Potato

    // _this.EndT = 465; // Tomato
    // _this.EndT2 = 445; // Tomato

    // _this.countHalf = 0;

    // _this.weightCount = 0;

    _this.tick = _this.add.sprite(860, 470, "TickBtn");
    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
  },

  RandomisePriceAndWeight_200: function () {
    _this.OrangeGroup = _this.add.group();
    _this.AppleGroup = _this.add.group();
    _this.PearGroup = _this.add.group();
    _this.PotatoGroup = _this.add.group();
    _this.TomatoGroup = _this.add.group();
    _this.OnionGroup = _this.add.group();

    if (_this.ItemsArray[_this.QuestionCount] == 1) {
      // Orange
      _this.Orange = _this.add.sprite(5, 10, "Orange");
      _this.Orange.scale.setTo(0.78, 0.8);
      _this.Box4.addChild(_this.Orange);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 60;
          _this.itemWeight = 1;
        } else if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 90;
          _this.itemWeight = 1.5;
        } else if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 120;
          _this.itemWeight = 2;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 60;
          _this.itemWeight = 1;
        } else if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 90;
          _this.itemWeight = 1.5;
        } else if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 120;
          _this.itemWeight = 2;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 60;
          _this.itemWeight = 1;
        } else if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 90;
          _this.itemWeight = 1.5;
        } else if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 120;
          _this.itemWeight = 2;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Orange.inputEnabled = true;
      _this.Orange.input.useHandCursor = true;
      _this.Orange.events.onInputDown.add(_this.tweenOrangeToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 2) {
      //Apple
      _this.Apple = _this.add.sprite(5, 6, "Apple");
      _this.Apple.scale.setTo(0.75, 0.75);
      _this.Box4.addChild(_this.Apple);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 40;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 80;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 160;
          _this.itemWeight = 2;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 40;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 80;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 160;
          _this.itemWeight = 2;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 40;
          _this.itemWeight = 0.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 80;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 160;
          _this.itemWeight = 2;
        }
      }
      _this.posX = 100;
      _this.posY = 200;
      _this.Apple.inputEnabled = true;
      _this.Apple.input.useHandCursor = true;
      _this.Apple.events.onInputDown.add(_this.tweenAppleToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 3) {
      //Pear
      _this.Pear = _this.add.sprite(7, 6, "Pear");
      _this.Pear.scale.setTo(0.8, 0.77);
      _this.Box4.addChild(_this.Pear);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 50;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 100;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 125;
          _this.itemWeight = 2.5;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 50;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 100;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 125;
          _this.itemWeight = 2.5;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 50;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 100;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 125;
          _this.itemWeight = 2.5;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Pear.inputEnabled = true;
      _this.Pear.input.useHandCursor = true;
      _this.Pear.events.onInputDown.add(_this.tweenPearToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 4) {
      //potato
      _this.Potato = _this.add.sprite(7, 12, "Potato");
      _this.Potato.scale.setTo(0.67, 0.75);
      _this.Box4.addChild(_this.Potato);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 100;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 125;
          _this.itemWeight = 2.5;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 100;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 125;
          _this.itemWeight = 2.5;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 75;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 100;
          _this.itemWeight = 2;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 125;
          _this.itemWeight = 2.5;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Potato.inputEnabled = true;
      _this.Potato.input.useHandCursor = true;
      _this.Potato.events.onInputDown.add(_this.tweenPotatoToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 5) {
      //tomato
      _this.Tomato = _this.add.sprite(12, 12, "Tomato");
      _this.Box4.addChild(_this.Tomato);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 80;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 120;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 160;
          _this.itemWeight = 2;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 80;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 120;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 160;
          _this.itemWeight = 2;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 80;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 120;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 160;
          _this.itemWeight = 2;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Tomato.inputEnabled = true;
      _this.Tomato.input.useHandCursor = true;
      _this.Tomato.events.onInputDown.add(_this.tweenTomatoToMachine, _this);
    }
    if (_this.ItemsArray[_this.QuestionCount] == 6) {
      //onion
      _this.Onion = _this.add.sprite(12, 7, "Onion");
      _this.Onion.scale.setTo(0.75, 0.72);
      _this.Box4.addChild(_this.Onion);

      if (_this.itemCount === 0) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 60;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 90;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 120;
          _this.itemWeight = 2;
        }

        _this.firstItemPrice = _this.itemPrice;
        _this.firstItemWeight = _this.itemWeight;
      } else if (_this.itemCount === 1) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 60;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 90;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 120;
          _this.itemWeight = 2;
        }
      } else if (_this.itemCount === 2) {
        if (_this.ItemValues[_this.itemCount] === 1) {
          _this.itemPrice = 60;
          _this.itemWeight = 1;
        }
        if (_this.ItemValues[_this.itemCount] === 2) {
          _this.itemPrice = 90;
          _this.itemWeight = 1.5;
        }
        if (_this.ItemValues[_this.itemCount] === 3) {
          _this.itemPrice = 120;
          _this.itemWeight = 2;
        }
      }

      _this.posX = 100;
      _this.posY = 200;
      _this.Onion.inputEnabled = true;
      _this.Onion.input.useHandCursor = true;
      _this.Onion.events.onInputDown.add(_this.tweenOnionToMachine, _this);
    }

    if (_this.itemCount === 0) {
      _this.Rs_Kg = _this.add.text(95, 60, _this.itemPrice);
      _this.applyingStyleRed(_this.Rs_Kg);
      _this.Table1.addChild(_this.Rs_Kg);

      if (
        _this.itemWeight === 1 ||
        _this.itemWeight === 2 ||
        _this.itemWeight === 3
      ) {
        _this.Kg = _this.add.text(100, 100, _this.itemWeight + ".0");
      } else {
        _this.Kg = _this.add.text(100, 100, _this.itemWeight);
      }
      _this.applyingStyleRed(_this.Kg);
      _this.Table1.addChild(_this.Kg);
    } else if (_this.itemCount === 1) {
      var firstPrice = _this.add.text(95, 60, _this.firstItemPrice);
      _this.applyingStyleBlue(firstPrice);
      firstPrice.fontSize = "26px";
      _this.Table2.addChild(firstPrice);

      _this.firstRemaning = _this.remainingMoney;

      var firstRemaning = _this.add.text(95, 25, _this.remainingMoney);
      _this.applyingStyleBlue(firstRemaning);
      firstRemaning.fontSize = "26px";
      _this.Table2.addChild(firstRemaning);

      if (
        _this.firstItemWeight === 1 ||
        _this.firstItemWeight === 2 ||
        _this.firstItemWeight === 3
      ) {
        var firstWeight = _this.add.text(
          100,
          100,
          _this.firstItemWeight + ".0"
        );
      } else {
        var firstWeight = _this.add.text(100, 100, _this.firstItemWeight);
      }

      _this.applyingStyleBlue(firstWeight);
      firstWeight.fontSize = "26px";
      _this.Table2.addChild(firstWeight);

      if (
        _this.itemWeight === 1 ||
        _this.itemWeight === 2 ||
        _this.itemWeight === 3
      ) {
        _this.Kg = _this.add.text(175, 100, _this.itemWeight + ".0");
      } else {
        _this.Kg = _this.add.text(175, 100, _this.itemWeight);
      }
      _this.applyingStyleRed(_this.Kg);
      _this.Table2.addChild(_this.Kg);

      _this.secondItemPrice = _this.itemPrice;
      _this.secondItemWeight = _this.itemWeight;
    } else if (_this.itemCount === 2) {
      var firstPrice = _this.add.text(95, 60, _this.firstItemPrice);
      _this.applyingStyleBlue(firstPrice);
      firstPrice.fontSize = "26px";
      _this.Table3.addChild(firstPrice);

      var firstRemaning = _this.add.text(95, 25, _this.firstRemaning);
      _this.applyingStyleBlue(firstRemaning);
      firstRemaning.fontSize = "26px";
      _this.Table3.addChild(firstRemaning);

      var secondPrice = _this.add.text(170, 60, _this.secondItemPrice);
      _this.applyingStyleBlue(secondPrice);
      secondPrice.fontSize = "26px";
      _this.Table3.addChild(secondPrice);

      var secondRemaning = _this.add.text(170, 25, _this.remainingMoney);
      _this.applyingStyleBlue(secondRemaning);
      secondRemaning.fontSize = "26px";
      _this.Table3.addChild(secondRemaning);

      if (
        _this.firstItemWeight === 1 ||
        _this.firstItemWeight === 2 ||
        _this.firstItemWeight === 3
      ) {
        var firstWeight = _this.add.text(
          100,
          100,
          _this.firstItemWeight + ".0"
        );
      } else {
        var firstWeight = _this.add.text(100, 100, _this.firstItemWeight);
      }

      _this.applyingStyleBlue(firstWeight);
      firstWeight.fontSize = "26px";
      _this.Table3.addChild(firstWeight);

      if (
        _this.secondItemWeight === 1 ||
        _this.secondItemWeight === 2 ||
        _this.secondItemWeight === 3
      ) {
        var secondWeight = _this.add.text(
          175,
          100,
          _this.secondItemWeight + ".0"
        );
      } else {
        var secondWeight = _this.add.text(175, 100, _this.secondItemWeight);
      }

      _this.applyingStyleBlue(secondWeight);
      secondWeight.fontSize = "26px";
      _this.Table3.addChild(secondWeight);

      _this.thirdItemPrice = _this.itemPrice;
      _this.secondRemaning = _this.remainingMoney;
      _this.thirdItemWeight = _this.itemWeight;

      if (
        _this.itemWeight === 1 ||
        _this.itemWeight === 2 ||
        _this.itemWeight === 3
      ) {
        _this.Kg = _this.add.text(245, 100, _this.itemWeight + ".0");
      } else {
        _this.Kg = _this.add.text(245, 100, _this.itemWeight);
      }
      _this.applyingStyleRed(_this.Kg);
      _this.Table3.addChild(_this.Kg);
    }

    // _this.weightInKg = _this.add.text(520, 210, '0.0 kg');
    // _this.applyingWhite(_this.weightInKg);
    // _this.weightMachine.addChild(_this.weightInKg);

    _this.tick = _this.add.sprite(860, 470, "TickBtn");

    if (_this.ItemsArray[_this.QuestionCount] === 5) {
      _this.showWeight2();
    } else {
      _this.showWeight();
    }
  },

  tweenOrangeToMachine: function () {
    _this.Orange.inputEnabled = false;

    if (
      _this.destroyObj1 === true ||
      _this.destroyObj2 === true ||
      _this.destroyObj3 === true ||
      _this.destroyObj4 === true ||
      _this.destroyObj5 === true
    ) {
      _this.countHalf = 0;
      _this.OrangeTween.destroy();
      _this.destroyObj1 = false;
      _this.destroyObj2 = false;
      _this.destroyObj3 = false;
      _this.destroyObj4 = false;
      _this.destroyObj5 = false;
    }

    _this.OrangeTween = _this.add.sprite(55, 350, "Orange");
    _this.OrangeTween.scale.setTo(0.78, 0.8);

    _this.OrangeTween.inputEnabled = true;
    _this.OrangeTween.input.useHandCursor = true;
    _this.OrangeTween.input.enableDrag();
    _this.OrangeTween.events.onDragStop.add(_this.destroyOrange, _this);

    _this.OrangeGroup.addChild(_this.OrangeTween);

    var totalTweens = 3;
    var delay = 500; // Delay between each tween in milliseconds
    var duration = 1000; // Duration of each tween in milliseconds
    var i = 0;

    // Set the initial position of the object
    _this.OrangeTween.y = 380;

    _this.showWeight();

    if (_this.countHalf === 3) {
      _this.tweening.currentTime = 0;
      _this.tweening.play();
      _this.countAll++;
      _this.time.events.add(1500, function () {
        var blinkTween = _this.add
          .tween(_this.weightInKg)
          .to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, false, 0, 0, true);
        blinkTween.start();
      });
    }

    var tweenStart = function () {
      var delayTime = i * delay;

      // Create a new tween for the OrangeTween object
      _this.tween = _this.add.tween(_this.OrangeTween);
      if (_this.OrangeGroup.length <= 6) {
        addToMyArray(_this.startO);
        _this.tween.to({ y: 160 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.startO },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.startO += 48;
      } else if (_this.OrangeGroup.length <= 11) {
        addToMyArray(_this.EndO);
        _this.tween.to({ y: 122 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.EndO },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.EndO -= 48;
      } else {
        addToMyArray(_this.EndO2);
        _this.tween.to({ y: 82 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.EndO2 },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.EndO2 -= 48;
      }

      // Start the tween with the specified delay
      _this.time.events.add(delayTime, function () {
        _this.tween.start();
      });

      _this.time.events.add(800, function () {
        i++;
        _this.weightCount++;
        _this.tweenOrangeToMachine();
      });
      _this.countHalf++;
    };

    function addToMyArray(value) {
      if (!_this.orangePositions.includes(value)) {
        _this.orangePositions.push(value);
      }
    }

    if (_this.tickClicked === false) {
      if (_this.OrangeGroup.length <= 15) {
        if (_this.countHalf == totalTweens) {
          _this.time.events.remove(_this.tween);
          _this.OrangeGroup.getChildAt(_this.OrangeGroup.length - 1).destroy();
          _this.time.events.add(1700, function () {
            console.log("drag enabled");
            for (let i = 0; i < _this.OrangeGroup.length; i++) {
              _this.OrangeGroup.getChildAt(i).inputEnabled = true;
              _this.OrangeGroup.getChildAt(i).input.useHandCursor = true;
              _this.OrangeGroup.getChildAt(i).events.onDragStop.add(
                _this.destroyOrange,
                _this
              );
            }
            _this.countHalf = 0;
            _this.Orange.inputEnabled = true;
            _this.Orange.input.useHandCursor = true;
            _this.Orange.events.onInputDown.add(
              _this.tweenOrangeToMachine,
              _this
            );
          });
        } else {
          console.log("drag disabled");
          for (let i = 0; i < _this.OrangeGroup.length; i++) {
            _this.OrangeGroup.getChildAt(i).events.onDragStop.removeAll();
            _this.OrangeGroup.getChildAt(i).inputEnabled = false;
          }
          tweenStart();
        }
      } else {
        _this.time.events.add(1700, function () {
          console.log("drag enabled last");
          for (let i = 0; i < _this.OrangeGroup.length; i++) {
            _this.OrangeGroup.getChildAt(i).inputEnabled = true;
            _this.OrangeGroup.getChildAt(i).input.useHandCursor = true;
            _this.OrangeGroup.getChildAt(i).events.onDragStop.add(
              _this.destroyOrange,
              _this
            );
          }
        });
        _this.time.events.remove(_this.tween);
        _this.OrangeGroup.getChildAt(_this.OrangeGroup.length - 1).destroy();
      }
    } else if (_this.tickClicked === true) {
      _this.Orange.inputEnabled = false;
      _this.Orange.events.onInputDown.removeAll();
      console.log("drag disabled");
      for (let i = 0; i < _this.OrangeGroup.length; i++) {
        _this.OrangeGroup.getChildAt(i).events.onDragStop.removeAll();
        _this.OrangeGroup.getChildAt(i).inputEnabled = false;
      }
    }

    if (
      _this.countAll === 1 &&
      _this.tweenedObjects1.length < 1 &&
      _this.OrangeGroup.length === 3
    ) {
      for (let i = 0; i < 3; i++) {
        _this.tweenedObjects1.push(_this.OrangeGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 2 &&
      _this.tweenedObjects2.length < 1 &&
      _this.OrangeGroup.length === 6
    ) {
      for (let i = 3; i < 6; i++) {
        _this.tweenedObjects2.push(_this.OrangeGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 3 &&
      _this.tweenedObjects3.length < 1 &&
      _this.OrangeGroup.length === 9
    ) {
      for (let i = 6; i < 9; i++) {
        _this.tweenedObjects3.push(_this.OrangeGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 4 &&
      _this.tweenedObjects4.length < 1 &&
      _this.OrangeGroup.length === 12
    ) {
      for (let i = 9; i < 12; i++) {
        _this.tweenedObjects4.push(_this.OrangeGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 5 &&
      _this.tweenedObjects5.length < 1 &&
      _this.OrangeGroup.length === 15
    ) {
      for (let i = 12; i < 15; i++) {
        _this.tweenedObjects5.push(_this.OrangeGroup.getChildAt(i));
      }
    }
  },

  tweenAppleToMachine: function () {
    _this.Apple.inputEnabled = false;

    if (
      _this.destroyObj1 === true ||
      _this.destroyObj2 === true ||
      _this.destroyObj3 === true ||
      _this.destroyObj4 === true ||
      _this.destroyObj5 === true
    ) {
      _this.countHalf = 0;
      _this.AppleTween.destroy();
      _this.destroyObj1 = false;
      _this.destroyObj2 = false;
      _this.destroyObj3 = false;
      _this.destroyObj4 = false;
      _this.destroyObj5 = false;
    }

    _this.AppleTween = _this.add.sprite(55, 350, "Apple");
    _this.AppleTween.scale.setTo(0.75, 0.75);

    _this.AppleTween.inputEnabled = true;
    _this.AppleTween.input.useHandCursor = true;
    _this.AppleTween.input.enableDrag();
    _this.AppleTween.events.onDragStop.add(_this.destroyApple, _this);

    _this.AppleGroup.addChild(_this.AppleTween);

    var totalTweens = 3;
    var delay = 500; // Delay between each tween in milliseconds
    var duration = 1000; // Duration of each tween in milliseconds

    // Set the initial position of the object
    _this.AppleTween.y = 380;

    var i = 0;

    _this.showWeight();

    if (_this.countHalf === 3) {
      _this.tweening.currentTime = 0;
      _this.tweening.play();
      _this.countAll++;
      _this.time.events.add(1500, function () {
        var blinkTween = _this.add
          .tween(_this.weightInKg)
          .to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, false, 0, 0, true);
        blinkTween.start();
      });
    }

    var tweenStart = function () {
      var delayTime = i * delay;

      // Create a new tween for the OrangeTween object
      _this.tween = _this.add.tween(_this.AppleTween);
      if (_this.AppleGroup.length <= 6) {
        addToMyArray(_this.startO);
        _this.tween.to({ y: 160 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.startO },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.startO += 48;
      } else if (_this.AppleGroup.length <= 11) {
        addToMyArray(_this.EndA);
        _this.tween.to({ y: 119 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.EndA },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.EndA -= 48;
      } else {
        addToMyArray(_this.EndA2);
        _this.tween.to({ y: 78 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.EndA2 },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.EndA2 -= 48;
      }

      // Start the tween with the specified delay
      _this.time.events.add(delayTime, function () {
        _this.tween.start();
      });

      _this.time.events.add(800, function () {
        i++;
        _this.weightCount++;
        _this.tweenAppleToMachine();
      });
      _this.countHalf++;
    };

    function addToMyArray(value) {
      if (!_this.applePositions.includes(value)) {
        _this.applePositions.push(value);
      }
    }

    if (_this.AppleGroup.length <= 15 && _this.tickClicked === false) {
      if (_this.countHalf == totalTweens) {
        _this.time.events.remove(_this.tween);
        _this.AppleGroup.getChildAt(_this.AppleGroup.length - 1).destroy();

        _this.time.events.add(1700, function () {
          console.log("drag enabled");
          for (let i = 0; i < _this.AppleGroup.length; i++) {
            _this.AppleGroup.getChildAt(i).inputEnabled = true;
            _this.AppleGroup.getChildAt(i).input.useHandCursor = true;
            _this.AppleGroup.getChildAt(i).events.onDragStop.add(
              _this.destroyApple,
              _this
            );
          }

          _this.countHalf = 0;
          _this.Apple.inputEnabled = true;
          _this.Apple.input.useHandCursor = true;
          _this.Apple.events.onInputDown.add(_this.tweenAppleToMachine, _this);
        });
      } else {
        console.log("drag disabled");
        for (let i = 0; i < _this.AppleGroup.length; i++) {
          _this.AppleGroup.getChildAt(i).events.onDragStop.removeAll();
          _this.AppleGroup.getChildAt(i).inputEnabled = false;
        }

        tweenStart();
      }
    } else if (_this.tickClicked === true) {
      _this.Orange.inputEnabled = false;
      _this.Orange.events.onInputDown.removeAll();

      console.log("drag disabled");
      for (let i = 0; i < _this.AppleGroup.length; i++) {
        _this.AppleGroup.getChildAt(i).events.onDragStop.removeAll();
        _this.AppleGroup.getChildAt(i).inputEnabled = false;
      }
    } else {
      _this.time.events.add(1700, function () {
        console.log("drag enabled last");
        for (let i = 0; i < _this.AppleGroup.length; i++) {
          _this.AppleGroup.getChildAt(i).inputEnabled = true;
          _this.AppleGroup.getChildAt(i).input.useHandCursor = true;
          _this.AppleGroup.getChildAt(i).events.onDragStop.add(
            _this.destroyApple,
            _this
          );
        }
      });

      _this.time.events.remove(_this.tween);
      _this.AppleGroup.getChildAt(_this.AppleGroup.length - 1).destroy();
    }

    if (
      _this.countAll === 1 &&
      _this.tweenedObjects1.length < 1 &&
      _this.AppleGroup.length === 3
    ) {
      for (let i = 0; i < 3; i++) {
        _this.tweenedObjects1.push(_this.AppleGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 2 &&
      _this.tweenedObjects2.length < 1 &&
      _this.AppleGroup.length === 6
    ) {
      for (let i = 3; i < 6; i++) {
        _this.tweenedObjects2.push(_this.AppleGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 3 &&
      _this.tweenedObjects3.length < 1 &&
      _this.AppleGroup.length === 9
    ) {
      for (let i = 6; i < 9; i++) {
        _this.tweenedObjects3.push(_this.AppleGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 4 &&
      _this.tweenedObjects4.length < 1 &&
      _this.AppleGroup.length === 12
    ) {
      for (let i = 9; i < 12; i++) {
        _this.tweenedObjects4.push(_this.AppleGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 5 &&
      _this.tweenedObjects5.length < 1 &&
      _this.AppleGroup.length === 15
    ) {
      for (let i = 12; i < 15; i++) {
        _this.tweenedObjects5.push(_this.AppleGroup.getChildAt(i));
      }
    }
  },

  tweenPearToMachine: function () {
    _this.Pear.inputEnabled = false;

    if (
      _this.destroyObj1 === true ||
      _this.destroyObj2 === true ||
      _this.destroyObj3 === true ||
      _this.destroyObj4 === true ||
      _this.destroyObj5 === true
    ) {
      _this.countHalf = 0;
      _this.PearTween.destroy();
      _this.destroyObj1 = false;
      _this.destroyObj2 = false;
      _this.destroyObj3 = false;
      _this.destroyObj4 = false;
      _this.destroyObj5 = false;
    }

    _this.PearTween = _this.add.sprite(55, 350, "Pear");
    _this.PearTween.scale.setTo(0.8, 0.77);

    _this.PearTween.inputEnabled = true;
    _this.PearTween.input.useHandCursor = true;
    _this.PearTween.input.enableDrag();
    _this.PearTween.events.onDragStop.add(_this.destroyPear, _this);

    _this.PearGroup.addChild(_this.PearTween);

    var totalTweens = 3;
    var delay = 500; // Delay between each tween in milliseconds
    var duration = 1000; // Duration of each tween in milliseconds

    // Set the initial position of the object
    _this.PearTween.y = 380;

    var i = 0;

    _this.showWeight();

    if (_this.countHalf === 3) {
      _this.tweening.currentTime = 0;
      _this.tweening.play();
      _this.countAll++;
      _this.time.events.add(1500, function () {
        var blinkTween = _this.add
          .tween(_this.weightInKg)
          .to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, false, 0, 0, true);
        blinkTween.start();
      });
    }

    var tweenStart = function () {
      var delayTime = i * delay;

      // Create a new tween for the OrangeTween object
      _this.tween = _this.add.tween(_this.PearTween);
      if (_this.PearGroup.length <= 6) {
        addToMyArray(_this.startO);
        _this.tween.to({ y: 160 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.startO },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.startO += 48;
      } else if (_this.PearGroup.length <= 11) {
        addToMyArray(_this.EndO);
        _this.tween.to({ y: 122 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.EndO },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.EndO -= 48;
      } else {
        addToMyArray(_this.EndO2);
        _this.tween.to({ y: 82 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.EndO2 },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.EndO2 -= 48;
      }

      // Start the tween with the specified delay
      _this.time.events.add(delayTime, function () {
        _this.tween.start();
      });

      _this.time.events.add(800, function () {
        i++;
        _this.weightCount++;
        _this.tweenPearToMachine();
      });
      _this.countHalf++;
    };

    function addToMyArray(value) {
      if (!_this.pearPositions.includes(value)) {
        _this.pearPositions.push(value);
      }
    }

    if (_this.PearGroup.length <= 15 && _this.tickClicked === false) {
      if (_this.countHalf == totalTweens) {
        _this.time.events.remove(_this.tween);
        _this.PearGroup.getChildAt(_this.PearGroup.length - 1).destroy();

        _this.time.events.add(1700, function () {
          console.log("drag enabled");
          for (let i = 0; i < _this.PearGroup.length; i++) {
            _this.PearGroup.getChildAt(i).inputEnabled = true;
            _this.PearGroup.getChildAt(i).input.useHandCursor = true;
            _this.PearGroup.getChildAt(i).events.onDragStop.add(
              _this.destroyPear,
              _this
            );
          }

          _this.countHalf = 0;
          _this.Pear.inputEnabled = true;
          _this.Pear.input.useHandCursor = true;
          _this.Pear.events.onInputDown.add(_this.tweenPearToMachine, _this);
        });
      } else {
        console.log("drag disabled");
        for (let i = 0; i < _this.PearGroup.length; i++) {
          _this.PearGroup.getChildAt(i).events.onDragStop.removeAll();
          _this.PearGroup.getChildAt(i).inputEnabled = false;
        }

        tweenStart();
      }
    } else if (_this.tickClicked === true) {
      console.log("drag disabled");
      for (let i = 0; i < _this.PearGroup.length; i++) {
        _this.PearGroup.getChildAt(i).events.onDragStop.removeAll();
        _this.PearGroup.getChildAt(i).inputEnabled = false;
      }
    } else {
      _this.time.events.add(1700, function () {
        console.log("drag enabled last");
        for (let i = 0; i < _this.PearGroup.length; i++) {
          _this.PearGroup.getChildAt(i).inputEnabled = true;
          _this.PearGroup.getChildAt(i).input.useHandCursor = true;
          _this.PearGroup.getChildAt(i).events.onDragStop.add(
            _this.destroyPear,
            _this
          );
        }
      });
      _this.time.events.remove(_this.tween);
      _this.PearGroup.getChildAt(_this.PearGroup.length - 1).destroy();
    }

    if (
      _this.countAll === 1 &&
      _this.tweenedObjects1.length < 1 &&
      _this.PearGroup.length === 3
    ) {
      for (let i = 0; i < 3; i++) {
        _this.tweenedObjects1.push(_this.PearGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 2 &&
      _this.tweenedObjects2.length < 1 &&
      _this.PearGroup.length === 6
    ) {
      for (let i = 3; i < 6; i++) {
        _this.tweenedObjects2.push(_this.PearGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 3 &&
      _this.tweenedObjects3.length < 1 &&
      _this.PearGroup.length === 9
    ) {
      for (let i = 6; i < 9; i++) {
        _this.tweenedObjects3.push(_this.PearGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 4 &&
      _this.tweenedObjects4.length < 1 &&
      _this.PearGroup.length === 12
    ) {
      for (let i = 9; i < 12; i++) {
        _this.tweenedObjects4.push(_this.PearGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 5 &&
      _this.tweenedObjects5.length < 1 &&
      _this.PearGroup.length === 15
    ) {
      for (let i = 12; i < 15; i++) {
        _this.tweenedObjects5.push(_this.PearGroup.getChildAt(i));
      }
    }
  },

  tweenPotatoToMachine: function () {
    _this.Potato.inputEnabled = false;

    if (_this.tickClicked === true) {
      console.log("tick potato tween");
    }

    if (
      _this.destroyObj1 === true ||
      _this.destroyObj2 === true ||
      _this.destroyObj3 === true ||
      _this.destroyObj4 === true ||
      _this.destroyObj5 === true
    ) {
      _this.countHalf = 0;
      _this.PotatoTween.destroy();
      _this.destroyObj1 = false;
      _this.destroyObj2 = false;
      _this.destroyObj3 = false;
      _this.destroyObj4 = false;
      _this.destroyObj5 = false;
    }

    _this.PotatoTween = _this.add.sprite(55, 350, "Potato");
    _this.PotatoTween.scale.setTo(0.67, 0.75);

    _this.PotatoTween.inputEnabled = true;
    _this.PotatoTween.input.useHandCursor = true;
    _this.PotatoTween.input.enableDrag();
    _this.PotatoTween.events.onDragStop.add(_this.destroyPotato, _this);

    _this.PotatoGroup.addChild(_this.PotatoTween);

    var totalTweens = 3;
    var delay = 500; // Delay between each tween in milliseconds
    var duration = 1000; // Duration of each tween in milliseconds

    // Set the initial position of the object
    _this.PotatoTween.y = 380;

    var i = 0;

    _this.showWeight();

    if (_this.countHalf === 3) {
      _this.tweening.currentTime = 0;
      _this.tweening.play();
      _this.countAll++;
      _this.time.events.add(1500, function () {
        var blinkTween = _this.add
          .tween(_this.weightInKg)
          .to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, false, 0, 0, true);
        blinkTween.start();
      });
    }

    var tweenStart = function () {
      var delayTime = i * delay;

      // Create a new tween for the OrangeTween object
      _this.tween = _this.add.tween(_this.PotatoTween);
      if (_this.PotatoGroup.length <= 6) {
        addToMyArray(_this.startO);
        _this.tween.to({ y: 150 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.startO },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.startO += 53;
      } else if (_this.PotatoGroup.length <= 11) {
        addToMyArray(_this.EndP);
        _this.tween.to({ y: 116 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.EndP },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.EndP -= 53;
      } else {
        addToMyArray(_this.EndP2);
        _this.tween.to({ y: 82 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.EndP2 },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.EndP2 -= 53;
      }

      // Start the tween with the specified delay
      _this.time.events.add(delayTime, function () {
        _this.tween.start();
      });

      _this.time.events.add(800, function () {
        i++;
        _this.weightCount++;
        _this.tweenPotatoToMachine();
      });
      _this.countHalf++;
    };

    function addToMyArray(value) {
      if (!_this.potatoPositions.includes(value)) {
        _this.potatoPositions.push(value);
      }
    }

    if (_this.PotatoGroup.length <= 15 && _this.tickClicked === false) {
      if (_this.countHalf == totalTweens) {
        _this.time.events.remove(_this.tween);
        _this.PotatoGroup.getChildAt(_this.PotatoGroup.length - 1).destroy();

        _this.time.events.add(1700, function () {
          if (_this.tickClicked === false) {
            console.log("drag enabled");
            for (let i = 0; i < _this.PotatoGroup.length; i++) {
              _this.PotatoGroup.getChildAt(i).inputEnabled = true;
              _this.PotatoGroup.getChildAt(i).input.useHandCursor = true;
              _this.PotatoGroup.getChildAt(i).events.onDragStop.add(
                _this.destroyPotato,
                _this
              );
            }
          } else {
            _this.Potato.inputEnabled = false;
            _this.Potato.events.onInputDown.removeAll();

            console.log("drag disabled");
            for (let i = 0; i < _this.PotatoGroup.length; i++) {
              _this.PotatoGroup.getChildAt(i).events.onDragStop.removeAll();
              _this.PotatoGroup.getChildAt(i).inputEnabled = false;
            }
          }

          _this.countHalf = 0;
          _this.Potato.inputEnabled = true;
          _this.Potato.input.useHandCursor = true;
          _this.Potato.events.onInputDown.add(
            _this.tweenPotatoToMachine,
            _this
          );
        });
      } else {
        console.log("drag disabled");
        for (let i = 0; i < _this.PotatoGroup.length; i++) {
          _this.PotatoGroup.getChildAt(i).events.onDragStop.removeAll();
          _this.PotatoGroup.getChildAt(i).inputEnabled = false;
        }

        tweenStart();
      }
    } else if (_this.tickClicked === true) {
      _this.Potato.inputEnabled = false;
      _this.Potato.events.onInputDown.removeAll();

      _this.Potato.destroy();

      console.log("drag disabled");
      for (let i = 0; i < _this.PotatoGroup.length; i++) {
        _this.PotatoGroup.getChildAt(i).events.onDragStop.removeAll();
        _this.PotatoGroup.getChildAt(i).inputEnabled = false;
      }
    } else {
      _this.time.events.add(1700, function () {
        console.log("drag enabled last");
        for (let i = 0; i < _this.PotatoGroup.length; i++) {
          _this.PotatoGroup.getChildAt(i).inputEnabled = true;
          _this.PotatoGroup.getChildAt(i).input.useHandCursor = true;
          _this.PotatoGroup.getChildAt(i).events.onDragStop.add(
            _this.destroyPotato,
            _this
          );
        }
      });

      _this.time.events.remove(_this.tween);
      _this.PotatoGroup.getChildAt(_this.PotatoGroup.length - 1).destroy();
    }

    if (
      _this.countAll === 1 &&
      _this.tweenedObjects1.length < 1 &&
      _this.PotatoGroup.length === 3
    ) {
      for (let i = 0; i < 3; i++) {
        _this.tweenedObjects1.push(_this.PotatoGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 2 &&
      _this.tweenedObjects2.length < 1 &&
      _this.PotatoGroup.length === 6
    ) {
      for (let i = 3; i < 6; i++) {
        _this.tweenedObjects2.push(_this.PotatoGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 3 &&
      _this.tweenedObjects3.length < 1 &&
      _this.PotatoGroup.length === 9
    ) {
      for (let i = 6; i < 9; i++) {
        _this.tweenedObjects3.push(_this.PotatoGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 4 &&
      _this.tweenedObjects4.length < 1 &&
      _this.PotatoGroup.length === 12
    ) {
      for (let i = 9; i < 12; i++) {
        _this.tweenedObjects4.push(_this.PotatoGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 5 &&
      _this.tweenedObjects5.length < 1 &&
      _this.PotatoGroup.length === 15
    ) {
      for (let i = 12; i < 15; i++) {
        _this.tweenedObjects5.push(_this.PotatoGroup.getChildAt(i));
      }
    }
  },

  tweenTomatoToMachine: function () {
    _this.Tomato.inputEnabled = false;

    if (
      _this.destroyObj1 === true ||
      _this.destroyObj2 === true ||
      _this.destroyObj3 === true ||
      _this.destroyObj4 === true ||
      _this.destroyObj5 === true
    ) {
      _this.countHalf = 0;
      _this.TomatoTween.destroy();
      _this.destroyObj1 = false;
      _this.destroyObj2 = false;
      _this.destroyObj3 = false;
      _this.destroyObj4 = false;
      _this.destroyObj5 = false;
    }

    _this.TomatoTween = _this.add.sprite(58, 350, "Tomato");

    _this.TomatoTween.inputEnabled = true;
    _this.TomatoTween.input.useHandCursor = true;
    _this.TomatoTween.input.enableDrag();
    _this.TomatoTween.events.onDragStop.add(_this.destroyTomato, _this);

    _this.TomatoGroup.addChild(_this.TomatoTween);

    var totalTweens = 4;
    var delay = 500; // Delay between each tween in milliseconds
    var duration = 1000; // Duration of each tween in milliseconds

    // Set the initial position of the object
    _this.TomatoTween.y = 380;

    var i = 0;

    _this.showWeight2();

    if (_this.countHalf === 4) {
      _this.tweening.currentTime = 0;
      _this.tweening.play();
      _this.countAll++;
      _this.time.events.add(1500, function () {
        var blinkTween = _this.add
          .tween(_this.weightInKg)
          .to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, false, 0, 0, true);
        blinkTween.start();
      });
    }

    var tweenStart = function () {
      var delayTime = i * delay;

      // Create a new tween for the OrangeTween object
      _this.tween = _this.add.tween(_this.TomatoTween);
      if (_this.TomatoGroup.length <= 7) {
        addToMyArray(_this.startO);
        _this.tween.to({ y: 150 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.startO },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.startO += 43;
      } else if (_this.TomatoGroup.length <= 13) {
        addToMyArray(_this.EndT);
        _this.tween.to({ y: 116 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.EndT },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.EndT -= 43;
      } else {
        addToMyArray(_this.EndT2);
        _this.tween.to({ y: 82 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.EndT2 },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.EndT2 -= 43;
      }

      // Start the tween with the specified delay
      _this.time.events.add(delayTime, function () {
        _this.tween.start();
      });

      _this.time.events.add(800, function () {
        i++;
        _this.weightCount++;
        _this.tweenTomatoToMachine();
      });
      _this.countHalf++;
    };

    function addToMyArray(value) {
      if (!_this.tomatoPositions.includes(value)) {
        _this.tomatoPositions.push(value);
      }
    }

    if (_this.TomatoGroup.length <= 16 && _this.tickClicked === false) {
      if (_this.countHalf == totalTweens) {
        _this.time.events.remove(_this.tween);
        _this.TomatoGroup.getChildAt(_this.TomatoGroup.length - 1).destroy();
        _this.time.events.add(1700, function () {
          console.log("drag enabled");
          for (let i = 0; i < _this.TomatoGroup.length; i++) {
            _this.TomatoGroup.getChildAt(i).inputEnabled = true;
            _this.TomatoGroup.getChildAt(i).input.useHandCursor = true;
            _this.TomatoGroup.getChildAt(i).events.onDragStop.add(
              _this.destroyTomato,
              _this
            );
          }

          _this.countHalf = 0;
          _this.Tomato.inputEnabled = true;
          _this.Tomato.input.useHandCursor = true;
          _this.Tomato.events.onInputDown.add(
            _this.tweenTomatoToMachine,
            _this
          );
        });
      } else {
        console.log("drag disabled");
        for (let i = 0; i < _this.TomatoGroup.length; i++) {
          _this.TomatoGroup.getChildAt(i).events.onDragStop.removeAll();
          _this.TomatoGroup.getChildAt(i).inputEnabled = false;
        }

        tweenStart();
      }
    } else if (_this.tickClicked === true) {
      console.log("drag disabled");
      for (let i = 0; i < _this.TomatoGroup.length; i++) {
        _this.TomatoGroup.getChildAt(i).events.onDragStop.removeAll();
        _this.TomatoGroup.getChildAt(i).inputEnabled = false;
      }
    } else {
      _this.time.events.add(1700, function () {
        console.log("drag enabled last");
        for (let i = 0; i < _this.TomatoGroup.length; i++) {
          _this.TomatoGroup.getChildAt(i).inputEnabled = true;
          _this.TomatoGroup.getChildAt(i).input.useHandCursor = true;
          _this.TomatoGroup.getChildAt(i).events.onDragStop.add(
            _this.destroyTomato,
            _this
          );
        }
      });

      _this.time.events.remove(_this.tween);
      _this.TomatoGroup.getChildAt(_this.TomatoGroup.length - 1).destroy();
    }

    if (
      _this.countAll === 1 &&
      _this.tweenedObjects1.length < 1 &&
      _this.TomatoGroup.length === 4
    ) {
      for (let i = 0; i < 4; i++) {
        _this.tweenedObjects1.push(_this.TomatoGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 2 &&
      _this.tweenedObjects2.length < 1 &&
      _this.TomatoGroup.length === 8
    ) {
      for (let i = 4; i < 8; i++) {
        _this.tweenedObjects2.push(_this.TomatoGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 3 &&
      _this.tweenedObjects3.length < 1 &&
      _this.TomatoGroup.length === 12
    ) {
      for (let i = 8; i < 12; i++) {
        _this.tweenedObjects3.push(_this.TomatoGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 4 &&
      _this.tweenedObjects4.length < 1 &&
      _this.TomatoGroup.length === 16
    ) {
      for (let i = 12; i < 16; i++) {
        _this.tweenedObjects4.push(_this.TomatoGroup.getChildAt(i));
      }
    }
  },

  tweenOnionToMachine: function () {
    _this.Onion.inputEnabled = false;

    if (
      _this.destroyObj1 === true ||
      _this.destroyObj2 === true ||
      _this.destroyObj3 === true ||
      _this.destroyObj4 === true ||
      _this.destroyObj5 === true
    ) {
      _this.countHalf = 0;
      _this.OnionTween.destroy();
      _this.destroyObj1 = false;
      _this.destroyObj2 = false;
      _this.destroyObj3 = false;
      _this.destroyObj4 = false;
      _this.destroyObj5 = false;
    }

    _this.OnionTween = _this.add.sprite(58, 350, "Onion");
    _this.OnionTween.scale.setTo(0.75, 0.72);

    _this.OnionTween.inputEnabled = true;
    _this.OnionTween.input.useHandCursor = true;
    _this.OnionTween.input.enableDrag();
    _this.OnionTween.events.onDragStop.add(_this.destroyOnion, _this);

    _this.OnionGroup.addChild(_this.OnionTween);

    var totalTweens = 3;
    var delay = 500; // Delay between each tween in milliseconds
    var duration = 1000; // Duration of each tween in milliseconds

    // Set the initial position of the object
    _this.OnionTween.y = 380;

    var i = 0;

    _this.showWeight();

    if (_this.countHalf === totalTweens) {
      _this.tweening.currentTime = 0;
      _this.tweening.play();
      _this.countAll++;
      _this.time.events.add(1500, function () {
        var blinkTween = _this.add
          .tween(_this.weightInKg)
          .to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, false, 0, 0, true);
        blinkTween.start();
      });
    }

    var tweenStart = function () {
      var delayTime = i * delay;

      // Create a new tween for the OrangeTween object
      _this.tween = _this.add.tween(_this.OnionTween);
      if (_this.OnionGroup.length <= 7) {
        addToMyArray(_this.startO);
        _this.tween.to({ y: 150 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.startO },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.startO += 43;
      } else if (_this.OnionGroup.length <= 13) {
        addToMyArray(_this.EndT);
        _this.tween.to({ y: 116 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.EndT },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.EndT -= 43;
      } else if (_this.OnionGroup.length <= 18) {
        addToMyArray(_this.EndT2);
        _this.tween.to({ y: 82 }, duration, Phaser.Easing.Quadratic.Out);
        _this.tween.to(
          { x: _this.EndT2 },
          duration,
          Phaser.Easing.Quadratic.Out
        );
        _this.EndT2 -= 43;
      }

      // Start the tween with the specified delay
      _this.time.events.add(delayTime, function () {
        _this.tween.start();
      });

      _this.time.events.add(800, function () {
        i++;
        _this.weightCount++;
        _this.tweenOnionToMachine();
      });
      _this.countHalf++;
    };

    function addToMyArray(value) {
      // if (!_this.onionPositions.includes(value)) {
      _this.onionPositions.push(value);
      // }
    }

    if (_this.OnionGroup.length <= 18 && _this.tickClicked === false) {
      if (_this.countHalf == totalTweens) {
        _this.time.events.remove(_this.tween);
        _this.OnionGroup.getChildAt(_this.OnionGroup.length - 1).destroy();
        _this.time.events.add(1700, function () {
          console.log("drag enabled");
          for (let i = 0; i < _this.OnionGroup.length; i++) {
            _this.OnionGroup.getChildAt(i).inputEnabled = true;
            _this.OnionGroup.getChildAt(i).input.useHandCursor = true;
            _this.OnionGroup.getChildAt(i).events.onDragStop.add(
              _this.destroyOnion,
              _this
            );
          }

          _this.countHalf = 0;
          _this.Onion.inputEnabled = true;
          _this.Onion.input.useHandCursor = true;
          _this.Onion.events.onInputDown.add(_this.tweenOnionToMachine, _this);
        });
      } else {
        console.log("drag disabled");
        for (let i = 0; i < _this.OnionGroup.length; i++) {
          _this.OnionGroup.getChildAt(i).events.onDragStop.removeAll();
          _this.OnionGroup.getChildAt(i).inputEnabled = false;
        }

        tweenStart();
      }
    } else if (_this.tickClicked === true) {
      console.log("drag disabled");
      for (let i = 0; i < _this.OnionGroup.length; i++) {
        _this.OnionGroup.getChildAt(i).events.onDragStop.removeAll();
        _this.OnionGroup.getChildAt(i).inputEnabled = false;
      }
    } else {
      _this.time.events.add(1700, function () {
        console.log("drag enabled last");
        for (let i = 0; i < _this.OnionGroup.length; i++) {
          _this.OnionGroup.getChildAt(i).inputEnabled = true;
          _this.OnionGroup.getChildAt(i).input.useHandCursor = true;
          _this.OnionGroup.getChildAt(i).events.onDragStop.add(
            _this.destroyOnion,
            _this
          );
        }
      });

      _this.time.events.remove(_this.tween);
      _this.OnionGroup.getChildAt(_this.OnionGroup.length - 1).destroy();
    }

    if (
      _this.countAll === 1 &&
      _this.tweenedObjects1.length < 1 &&
      _this.OnionGroup.length === 3
    ) {
      for (let i = 0; i < 3; i++) {
        _this.tweenedObjects1.push(_this.OnionGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 2 &&
      _this.tweenedObjects2.length < 1 &&
      _this.OnionGroup.length === 6
    ) {
      for (let i = 3; i < 6; i++) {
        _this.tweenedObjects2.push(_this.OnionGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 3 &&
      _this.tweenedObjects3.length < 1 &&
      _this.OnionGroup.length === 9
    ) {
      for (let i = 6; i < 9; i++) {
        _this.tweenedObjects3.push(_this.OnionGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 4 &&
      _this.tweenedObjects4.length < 1 &&
      _this.OnionGroup.length === 12
    ) {
      for (let i = 9; i < 12; i++) {
        _this.tweenedObjects4.push(_this.OnionGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 5 &&
      _this.tweenedObjects5.length < 1 &&
      _this.OnionGroup.length === 15
    ) {
      for (let i = 12; i < 15; i++) {
        _this.tweenedObjects5.push(_this.OnionGroup.getChildAt(i));
      }
    } else if (
      _this.countAll === 6 &&
      _this.tweenedObjects6.length < 1 &&
      _this.OnionGroup.length === 18
    ) {
      for (let i = 15; i < 18; i++) {
        _this.tweenedObjects6.push(_this.OnionGroup.getChildAt(i));
      }
    }
  },

  showWeight: function () {
    if (_this.weightCount === 0) {
      _this.weightMachine.removeChild(_this.weightInKg);
      _this.weightInKg = _this.add.text(520, 210, "0.0 kg");
      _this.applyingWhite(_this.weightInKg);
      _this.weightMachine.addChild(_this.weightInKg);

      _this.tick.inputEnabled = true;
      _this.tick.input.useHandCursor = true;
      _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
    } else if (_this.weightCount === 3) {
      _this.time.events.add(1500, function () {
        _this.weightMachine.removeChild(_this.weightInKg);
        _this.weightInKg = _this.add.text(520, 210, "0.5 kg");
        _this.applyingWhite(_this.weightInKg);
        _this.weightMachine.addChild(_this.weightInKg);

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
      });
    } else if (_this.weightCount == 6) {
      _this.time.events.add(1500, function () {
        _this.weightMachine.removeChild(_this.weightInKg);
        _this.weightInKg = _this.add.text(520, 210, "1.0 kg");
        _this.applyingWhite(_this.weightInKg);
        _this.weightMachine.addChild(_this.weightInKg);

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
      });
    } else if (_this.weightCount == 9) {
      _this.time.events.add(1500, function () {
        _this.weightMachine.removeChild(_this.weightInKg);
        _this.weightInKg = _this.add.text(520, 210, "1.5 kg");
        _this.applyingWhite(_this.weightInKg);
        _this.weightMachine.addChild(_this.weightInKg);

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
      });
    } else if (_this.weightCount == 12) {
      _this.time.events.add(1500, function () {
        _this.weightMachine.removeChild(_this.weightInKg);
        _this.weightInKg = _this.add.text(520, 210, "2.0 kg");
        _this.applyingWhite(_this.weightInKg);
        _this.weightMachine.addChild(_this.weightInKg);

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
      });
    } else if (_this.weightCount == 15) {
      _this.time.events.add(1500, function () {
        _this.weightMachine.removeChild(_this.weightInKg);
        _this.weightInKg = _this.add.text(520, 210, "2.5 kg");
        _this.applyingWhite(_this.weightInKg);
        _this.weightMachine.addChild(_this.weightInKg);

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
      });
    } else if (_this.weightCount == 18) {
      _this.time.events.add(1500, function () {
        _this.weightMachine.removeChild(_this.weightInKg);
        _this.weightInKg = _this.add.text(520, 210, "3.0 kg");
        _this.applyingWhite(_this.weightInKg);
        _this.weightMachine.addChild(_this.weightInKg);

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
      });
    } else {
      _this.tick.inputEnabled = false;
      _this.tick.events.onInputDown.removeAll();
    }
  },

  showWeight2: function () {
    if (_this.weightCount === 0) {
      _this.weightMachine.removeChild(_this.weightInKg);
      _this.weightInKg = _this.add.text(520, 210, "0.0 kg");
      _this.applyingWhite(_this.weightInKg);
      _this.weightMachine.addChild(_this.weightInKg);

      _this.tick.inputEnabled = true;
      _this.tick.input.useHandCursor = true;
      _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
    } else if (_this.weightCount === 4) {
      _this.time.events.add(1500, function () {
        _this.weightMachine.removeChild(_this.weightInKg);
        _this.weightInKg = _this.add.text(520, 210, "0.5 kg");
        _this.applyingWhite(_this.weightInKg);
        _this.weightMachine.addChild(_this.weightInKg);

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
      });
    } else if (_this.weightCount == 8) {
      _this.time.events.add(1500, function () {
        _this.weightMachine.removeChild(_this.weightInKg);
        _this.weightInKg = _this.add.text(520, 210, "1.0 kg");
        _this.applyingWhite(_this.weightInKg);
        _this.weightMachine.addChild(_this.weightInKg);

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
      });
    } else if (_this.weightCount == 12) {
      _this.time.events.add(1500, function () {
        _this.weightMachine.removeChild(_this.weightInKg);
        _this.weightInKg = _this.add.text(520, 210, "1.5 kg");
        _this.applyingWhite(_this.weightInKg);
        _this.weightMachine.addChild(_this.weightInKg);

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
      });
    } else if (_this.weightCount == 16) {
      _this.time.events.add(1500, function () {
        _this.weightMachine.removeChild(_this.weightInKg);
        _this.weightInKg = _this.add.text(520, 210, "2.0 kg");
        _this.applyingWhite(_this.weightInKg);
        _this.weightMachine.addChild(_this.weightInKg);

        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.tickFirstEvaluation, _this);
      });
    } else {
      _this.tick.inputEnabled = false;
      _this.tick.events.onInputDown.removeAll();
    }
  },

  destroyOrange: function (target) {
    _this.clickSound.play();
    target.destroy();
    _this.Orange.inputEnabled = false;
    _this.Orange.events.onInputDown.removeAll();

    for (let i = 0; i < _this.tweenedObjects1.length; i++) {
      if (!_this.tweenedObjects1[i].exists) {
        _this.destroyObj1 = true;
        console.log("group 1");
        _this.tweenedObjects1.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects1.length = 0;
        _this.weightCount = 0;
        _this.startO = 230 + 48 * 3;
      } else {
        _this.destroyObj1 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects2.length; i++) {
      if (!_this.tweenedObjects2[i].exists) {
        _this.destroyObj2 = true;
        console.log("group 2");
        _this.tweenedObjects2.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects2.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj2 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects3.length; i++) {
      if (!_this.tweenedObjects3[i].exists) {
        _this.destroyObj3 = true;
        console.log("group 3");
        _this.tweenedObjects3.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects3.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj3 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects4.length; i++) {
      if (!_this.tweenedObjects4[i].exists) {
        _this.destroyObj4 = true;
        console.log("group 4");
        _this.tweenedObjects4.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects4.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj4 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects5.length; i++) {
      if (!_this.tweenedObjects5[i].exists) {
        _this.destroyObj5 = true;
        console.log("group 5");
        _this.tweenedObjects5.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects5.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj5 = false;
      }
    }

    if (_this.destroyObj1 === true) {
      if (_this.tweenedObjects2.length > 0) {
        for (let i = 0; i < 3; i++) {
          console.log("tweene 2");
          var tween = _this.add.tween(_this.tweenedObjects2[i]);
          tween.to(
            { x: _this.orangePositions[i], y: 160 },
            1500,
            "Linear",
            true,
            0
          );
          _this.startO -= 48;
        }

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects1.push(_this.tweenedObjects2[i]);
        }
        _this.tweenedObjects2.length = 0;
        _this.countAll = 1;
        _this.startO = 230 + 48 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          tween.to(
            { x: _this.orangePositions[i], y: 160 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.EndO = 438;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.orangePositions[i], y: 122 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.EndO2 = 415;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.orangePositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.orangePositions[i], y: 122 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndO2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndO2 = 415 - 48;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj2 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.startO = 230 + 48 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          tween.to(
            { x: _this.orangePositions[i], y: 160 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.EndO = 438;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.orangePositions[i], y: 122 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.EndO2 = 415;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.orangePositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.orangePositions[i], y: 122 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndO2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndO2 = 415 - 48;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj3 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 48 * 6;
        _this.weightCount = 6;
        _this.EndO = 438;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          tween.to(
            { x: _this.orangePositions[i], y: 160 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 1;
        _this.EndO = 438;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.orangePositions[i], y: 122 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 2;
        _this.EndO2 = 415;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.orangePositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.orangePositions[i], y: 122 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndO2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 3;
        _this.EndO2 = 415 - 48;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj4 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 48 * 6;
        _this.weightCount = 6;
        _this.EndO = 438;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        _this.weightCount = 9;
        _this.countAll = 2;
        _this.EndO = 438 - 48 * 3;
        _this.EndO2 = 415;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.orangePositions[i], y: 122 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 2;
        _this.EndO2 = 415;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.orangePositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.orangePositions[i], y: 122 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndO2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 3;
        _this.EndO2 = 415 - 48;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj5 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 48 * 6;
        _this.weightCount = 6;
        _this.EndO = 438;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        _this.weightCount = 9;
        _this.countAll = 2;
        _this.EndO = 438 - 48 * 3;
        _this.EndO2 = 415;
      }
      if (_this.tweenedObjects4.length > 0) {
        _this.countAll = 4;
        _this.EndO2 = 415 - 48;
        _this.weightCount = 12;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.orangePositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.orangePositions[i], y: 122 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndO2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 3;
        _this.EndO2 = 415 - 48;
        _this.weightCount = 12;
      }
    }

    if (_this.Orange.inputEnabled === false) {
      _this.time.events.add(1800, function () {
        _this.Orange.inputEnabled = true;
        _this.Orange.input.useHandCursor = true;
        _this.Orange.events.onInputDown.add(_this.tweenOrangeToMachine, _this);
      });
    }

    if (_this.OrangeGroup.length === 0) {
      _this.startO = 230;
      _this.EndO = 438;
      _this.EndO2 = 415;
      _this.countAll = 0;
      _this.weightCount = 0;
      _this.OrangeTween.destroy();
      _this.countHalf = 0;
    } else if (_this.OrangeGroup.length === 3) {
      _this.countAll = 1;
      _this.OrangeTween.destroy();
      _this.countHalf = 0;
    } else if (_this.OrangeGroup.length === 6) {
      _this.countAll = 2;
      _this.OrangeTween.destroy();
      _this.countHalf = 0;
    } else if (_this.OrangeGroup.length === 9) {
      _this.countAll = 3;
      _this.OrangeTween.destroy();
      _this.countHalf = 0;
    } else if (_this.OrangeGroup.length === 12) {
      _this.countAll = 4;
      _this.OrangeTween.destroy();
      _this.countHalf = 0;
    }

    _this.showWeight();
  },

  destroyApple: function (target) {
    _this.clickSound.play();
    target.destroy();
    _this.Apple.inputEnabled = false;
    _this.Apple.events.onInputDown.removeAll();

    for (let i = 0; i < _this.tweenedObjects1.length; i++) {
      if (!_this.tweenedObjects1[i].exists) {
        _this.destroyObj1 = true;
        console.log("group 1");
        _this.tweenedObjects1.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects1.length = 0;
        _this.weightCount = 0;
        _this.startO = 230 + 48 * 3;
      } else {
        _this.destroyObj1 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects2.length; i++) {
      if (!_this.tweenedObjects2[i].exists) {
        _this.destroyObj2 = true;
        console.log("group 2");
        _this.tweenedObjects2.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects2.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj2 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects3.length; i++) {
      if (!_this.tweenedObjects3[i].exists) {
        _this.destroyObj3 = true;
        console.log("group 3");
        _this.tweenedObjects3.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects3.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj3 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects4.length; i++) {
      if (!_this.tweenedObjects4[i].exists) {
        _this.destroyObj4 = true;
        console.log("group 4");
        _this.tweenedObjects4.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects4.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj4 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects5.length; i++) {
      if (!_this.tweenedObjects5[i].exists) {
        _this.destroyObj5 = true;
        console.log("group 5");
        _this.tweenedObjects5.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects5.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj5 = false;
      }
    }

    if (_this.destroyObj1 === true) {
      if (_this.tweenedObjects2.length > 0) {
        for (let i = 0; i < 3; i++) {
          console.log("tweene 2");
          var tween = _this.add.tween(_this.tweenedObjects2[i]);
          tween.to(
            { x: _this.applePositions[i], y: 160 },
            1500,
            "Linear",
            true,
            0
          );
          _this.startO -= 48;
        }

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects1.push(_this.tweenedObjects2[i]);
        }
        _this.tweenedObjects2.length = 0;
        _this.countAll = 1;
        _this.startO = 230 + 48 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          tween.to(
            { x: _this.applePositions[i], y: 160 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndA = 445 - 48 * 3;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.EndA = 445;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.applePositions[i], y: 119 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndA = 445 - 48 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.EndA2 = 415;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.applePositions[i], y: 78 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.applePositions[i], y: 119 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndA2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndA2 = 415 - 48;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj2 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.startO = 230 + 48 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          tween.to(
            { x: _this.applePositions[i], y: 160 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndA = 445 - 48 * 3;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.EndA = 445;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.applePositions[i], y: 119 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndA = 445 - 48 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.EndA2 = 415;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.applePositions[i], y: 78 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.applePositions[i], y: 119 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndA2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndA2 = 415 - 48;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj3 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 48 * 6;
        _this.weightCount = 6;
        _this.EndA = 445;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          tween.to(
            { x: _this.applePositions[i], y: 160 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndA = 445 - 48 * 3;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 1;
        _this.EndA = 445;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.applePositions[i], y: 119 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndA = 445 - 48 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 2;
        _this.EndA2 = 415;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.applePositions[i], y: 78 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.applePositions[i], y: 119 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndA2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 3;
        _this.EndA2 = 415 - 48;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj4 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 48 * 6;
        _this.weightCount = 6;
        _this.EndA = 445;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        _this.weightCount = 9;
        _this.countAll = 2;
        _this.EndA = 445 - 48 * 3;
        _this.EndA2 = 415;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.applePositions[i], y: 119 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndA = 445 - 48 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 2;
        _this.EndA2 = 415;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.applePositions[i], y: 78 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.applePositions[i], y: 119 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndA2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 3;
        _this.EndA2 = 415 - 48;
        _this.weightCount = 12;
      }
    }

    if (_this.destroyObj5 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 48 * 6;
        _this.weightCount = 6;
        _this.EndA = 445;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        _this.weightCount = 9;
        _this.countAll = 2;
        _this.EndA = 445 - 48 * 3;
        _this.EndA2 = 415;
      }
      if (_this.tweenedObjects4.length > 0) {
        _this.countAll = 4;
        _this.EndA2 = 415 - 48;
        _this.weightCount = 12;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.applePositions[i], y: 78 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.applePositions[i], y: 119 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndA2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 3;
        _this.EndA2 = 415 - 48;
        _this.weightCount = 12;
      }
    }

    if (_this.Apple.inputEnabled === false) {
      _this.time.events.add(1800, function () {
        _this.Apple.inputEnabled = true;
        _this.Apple.input.useHandCursor = true;
        _this.Apple.events.onInputDown.add(_this.tweenAppleToMachine, _this);
      });
    }

    if (_this.AppleGroup.length === 0) {
      _this.startO = 230;
      _this.EndA = 445;
      _this.EndA2 = 415;
      _this.countAll = 0;
      _this.weightCount = 0;
      _this.AppleTween.destroy();
      _this.countHalf = 0;
    } else if (_this.AppleGroup.length === 3) {
      _this.countAll = 1;
      _this.AppleTween.destroy();
      _this.countHalf = 0;
    } else if (_this.AppleGroup.length === 6) {
      _this.countAll = 2;
      _this.AppleTween.destroy();
      _this.countHalf = 0;
    } else if (_this.AppleGroup.length === 9) {
      _this.countAll = 3;
      _this.AppleTween.destroy();
      _this.countHalf = 0;
    } else if (_this.AppleGroup.length === 12) {
      _this.countAll = 4;
      _this.AppleTween.destroy();
      _this.countHalf = 0;
    }

    _this.showWeight();
  },

  destroyPear: function (target) {
    _this.clickSound.play();
    target.destroy();
    _this.Pear.inputEnabled = false;
    _this.Pear.events.onInputDown.removeAll();

    for (let i = 0; i < _this.tweenedObjects1.length; i++) {
      if (!_this.tweenedObjects1[i].exists) {
        _this.destroyObj1 = true;
        console.log("group 1");
        _this.tweenedObjects1.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects1.length = 0;
        _this.weightCount = 0;
        _this.startO = 230 + 48 * 3;
      } else {
        _this.destroyObj1 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects2.length; i++) {
      if (!_this.tweenedObjects2[i].exists) {
        _this.destroyObj2 = true;
        console.log("group 2");
        _this.tweenedObjects2.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects2.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj2 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects3.length; i++) {
      if (!_this.tweenedObjects3[i].exists) {
        _this.destroyObj3 = true;
        console.log("group 3");
        _this.tweenedObjects3.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects3.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj3 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects4.length; i++) {
      if (!_this.tweenedObjects4[i].exists) {
        _this.destroyObj4 = true;
        console.log("group 4");
        _this.tweenedObjects4.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects4.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj4 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects5.length; i++) {
      if (!_this.tweenedObjects5[i].exists) {
        _this.destroyObj5 = true;
        console.log("group 5");
        _this.tweenedObjects5.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects5.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj5 = false;
      }
    }

    if (_this.destroyObj1 === true) {
      if (_this.tweenedObjects2.length > 0) {
        for (let i = 0; i < 3; i++) {
          console.log("tweene 2");
          var tween = _this.add.tween(_this.tweenedObjects2[i]);
          tween.to(
            { x: _this.pearPositions[i], y: 160 },
            1500,
            "Linear",
            true,
            0
          );
          _this.startO -= 48;
        }

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects1.push(_this.tweenedObjects2[i]);
        }
        _this.tweenedObjects2.length = 0;
        _this.countAll = 1;
        _this.startO = 230 + 48 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          tween.to(
            { x: _this.pearPositions[i], y: 160 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.EndO = 438;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.pearPositions[i], y: 122 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.EndO2 = 415;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.pearPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.pearPositions[i], y: 122 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndO2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndO2 = 415 - 48;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj2 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.startO = 230 + 48 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          tween.to(
            { x: _this.pearPositions[i], y: 160 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.EndO = 438;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.pearPositions[i], y: 122 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.EndO2 = 415;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.pearPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.pearPositions[i], y: 122 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndO2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndO2 = 415 - 48;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj3 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 48 * 6;
        _this.weightCount = 6;
        _this.EndO = 438;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          tween.to(
            { x: _this.pearPositions[i], y: 160 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 1;
        _this.EndO = 438;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.pearPositions[i], y: 122 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 2;
        _this.EndO2 = 415;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.pearPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.pearPositions[i], y: 122 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndO2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 3;
        _this.EndO2 = 415 - 48;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj4 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 48 * 6;
        _this.weightCount = 6;
        _this.EndO = 438;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        _this.weightCount = 9;
        _this.countAll = 2;
        _this.EndO = 438 - 48 * 3;
        _this.EndO2 = 415;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.pearPositions[i], y: 122 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndO = 438 - 48 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 2;
        _this.EndO2 = 415;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.pearPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.pearPositions[i], y: 122 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndO2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 3;
        _this.EndO2 = 415 - 48;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj5 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 48 * 6;
        _this.weightCount = 6;
        _this.EndO = 438;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        _this.weightCount = 9;
        _this.countAll = 2;
        _this.EndO = 438 - 48 * 3;
        _this.EndO2 = 415;
      }
      if (_this.tweenedObjects4.length > 0) {
        _this.countAll = 4;
        _this.EndO2 = 415 - 48;
        _this.weightCount = 12;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.pearPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.pearPositions[i], y: 122 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndO2 = 415 - 48;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 3;
        _this.EndO2 = 415 - 48;
        _this.weightCount = 12;
      }
    }

    if (_this.Pear.inputEnabled === false) {
      _this.time.events.add(1800, function () {
        _this.Pear.inputEnabled = true;
        _this.Pear.input.useHandCursor = true;
        _this.Pear.events.onInputDown.add(_this.tweenPearToMachine, _this);
      });
    }

    if (_this.PearGroup.length === 0) {
      _this.startO = 230;
      _this.EndO = 438;
      _this.EndO2 = 415;
      _this.countAll = 0;
      _this.weightCount = 0;
      _this.PearTween.destroy();
      _this.countHalf = 0;
    } else if (_this.PearGroup.length === 3) {
      _this.countAll = 1;
      _this.PearTween.destroy();
      _this.countHalf = 0;
    } else if (_this.PearGroup.length === 6) {
      _this.countAll = 2;
      _this.PearTween.destroy();
      _this.countHalf = 0;
    } else if (_this.PearGroup.length === 9) {
      _this.countAll = 3;
      _this.PearTween.destroy();
      _this.countHalf = 0;
    } else if (_this.PearGroup.length === 12) {
      _this.countAll = 4;
      _this.PearTween.destroy();
      _this.countHalf = 0;
    }

    _this.showWeight();
  },

  destroyPotato: function (target) {
    _this.clickSound.play();
    target.destroy();
    _this.Potato.inputEnabled = false;
    _this.Potato.events.onInputDown.removeAll();

    for (let i = 0; i < _this.tweenedObjects1.length; i++) {
      if (!_this.tweenedObjects1[i].exists) {
        _this.destroyObj1 = true;
        console.log("group 1");
        _this.tweenedObjects1.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects1.length = 0;
        _this.weightCount = 0;
        _this.startO = 230 + 48 * 3;
      } else {
        _this.destroyObj1 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects2.length; i++) {
      if (!_this.tweenedObjects2[i].exists) {
        _this.destroyObj2 = true;
        console.log("group 2");
        _this.tweenedObjects2.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects2.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj2 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects3.length; i++) {
      if (!_this.tweenedObjects3[i].exists) {
        _this.destroyObj3 = true;
        console.log("group 3");
        _this.tweenedObjects3.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects3.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj3 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects4.length; i++) {
      if (!_this.tweenedObjects4[i].exists) {
        _this.destroyObj4 = true;
        console.log("group 4");
        _this.tweenedObjects4.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects4.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj4 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects5.length; i++) {
      if (!_this.tweenedObjects5[i].exists) {
        _this.destroyObj5 = true;
        console.log("group 5");
        _this.tweenedObjects5.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects5.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj5 = false;
      }
    }

    if (_this.destroyObj1 === true) {
      if (_this.tweenedObjects2.length > 0) {
        for (let i = 0; i < 3; i++) {
          console.log("tweene 2");
          var tween = _this.add.tween(_this.tweenedObjects2[i]);
          tween.to(
            { x: _this.potatoPositions[i], y: 150 },
            1500,
            "Linear",
            true,
            0
          );
          _this.startO -= 53;
        }

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects1.push(_this.tweenedObjects2[i]);
        }
        _this.tweenedObjects2.length = 0;
        _this.countAll = 1;
        _this.startO = 230 + 53 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          tween.to(
            { x: _this.potatoPositions[i], y: 150 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndP = 465 - 53 * 3;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.EndP = 465;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.potatoPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndP = 465 - 53 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.EndP2 = 440;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.potatoPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.potatoPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndP2 = 440 - 53;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndP2 = 440 - 53;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj2 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.startO = 230 + 53 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          tween.to(
            { x: _this.potatoPositions[i], y: 150 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndP = 465 - 53 * 3;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.EndP = 465;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.potatoPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndP = 465 - 53 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.EndP2 = 440;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.potatoPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.potatoPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndP2 = 440 - 53;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndP2 = 440 - 53;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj3 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 53 * 6;
        _this.weightCount = 6;
        _this.EndP = 465;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          tween.to(
            { x: _this.potatoPositions[i], y: 150 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndP = 465 - 53 * 3;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 1;
        _this.EndP = 465;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.potatoPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndP = 465 - 53 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 2;
        _this.EndP2 = 440;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.potatoPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.potatoPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndP2 = 440 - 53;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 3;
        _this.EndP2 = 440 - 53;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj4 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 53 * 6;
        _this.weightCount = 6;
        _this.EndP = 465;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        _this.weightCount = 9;
        _this.countAll = 2;
        _this.EndP = 465 - 53 * 3;
        _this.EndP2 = 440;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.potatoPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndP = 465 - 53 * 3;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 2;
        _this.EndP2 = 440;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.potatoPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.potatoPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndP2 = 440 - 53;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 3;
        _this.EndP2 = 440 - 53;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj5 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 53 * 6;
        _this.weightCount = 6;
        _this.EndP = 465;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        _this.weightCount = 9;
        _this.countAll = 2;
        _this.EndP = 465 - 53 * 3;
        _this.EndP2 = 440;
      }
      if (_this.tweenedObjects4.length > 0) {
        _this.countAll = 4;
        _this.EndP2 = 440 - 53;
        _this.weightCount = 12;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          if (i == 11) {
            tween.to(
              { x: _this.potatoPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.potatoPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndP2 = 440 - 53;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 3;
        _this.EndP2 = 440 - 53;
        _this.weightCount = 12;
      }
    }

    if (_this.Potato.inputEnabled === false) {
      _this.time.events.add(1800, function () {
        _this.Potato.inputEnabled = true;
        _this.Potato.input.useHandCursor = true;
        _this.Potato.events.onInputDown.add(_this.tweenPotatoToMachine, _this);
      });
    }

    if (_this.tickClicked == true) {
      _this.Potato.inputEnabled = false;
      _this.Potato.events.onInputDown.removeAll();

      for (let i = 0; i < _this.PotatoGroup.length; i++) {
        _this.PotatoGroup.getChildAt(i).events.onDragStop.removeAll();
        _this.PotatoGroup.getChildAt(i).inputEnabled = false;
      }
    }

    if (_this.PotatoGroup.length === 0) {
      _this.startO = 230;
      _this.EndP = 465;
      _this.EndP2 = 440;
      _this.countAll = 0;
      _this.weightCount = 0;
      _this.PotatoTween.destroy();
      _this.countHalf = 0;
    } else if (_this.PotatoGroup.length === 3) {
      _this.countAll = 1;
      _this.PotatoTween.destroy();
      _this.countHalf = 0;
    } else if (_this.PotatoGroup.length === 6) {
      _this.countAll = 2;
      _this.PotatoTween.destroy();
      _this.countHalf = 0;
    } else if (_this.PotatoGroup.length === 9) {
      _this.countAll = 3;
      _this.PotatoTween.destroy();
      _this.countHalf = 0;
    } else if (_this.PotatoGroup.length === 12) {
      _this.countAll = 4;
      _this.PotatoTween.destroy();
      _this.countHalf = 0;
    }

    _this.showWeight();
  },

  destroyTomato: function (target) {
    _this.clickSound.play();
    target.destroy();
    _this.Tomato.inputEnabled = false;
    _this.Tomato.events.onInputDown.removeAll();

    for (let i = 0; i < _this.tweenedObjects1.length; i++) {
      if (!_this.tweenedObjects1[i].exists) {
        _this.destroyObj1 = true;
        console.log("group 1");
        _this.tweenedObjects1.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects1.length = 0;
        _this.weightCount = 0;
        _this.startO = 230 + 48 * 3;
      } else {
        _this.destroyObj1 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects2.length; i++) {
      if (!_this.tweenedObjects2[i].exists) {
        _this.destroyObj2 = true;
        console.log("group 2");
        _this.tweenedObjects2.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects2.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj2 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects3.length; i++) {
      if (!_this.tweenedObjects3[i].exists) {
        _this.destroyObj3 = true;
        console.log("group 3");
        _this.tweenedObjects3.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects3.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj3 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects4.length; i++) {
      if (!_this.tweenedObjects4[i].exists) {
        _this.destroyObj4 = true;
        console.log("group 4");
        _this.tweenedObjects4.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects4.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj4 = false;
      }
    }
    if (_this.destroyObj1 === true) {
      if (_this.tweenedObjects2.length > 0) {
        for (let i = 0; i < 4; i++) {
          console.log("tweene 2");
          var tween = _this.add.tween(_this.tweenedObjects2[i]);
          tween.to(
            { x: _this.tomatoPositions[i], y: 150 },
            1500,
            "Linear",
            true,
            0
          );
          _this.startO -= 43;
        }

        for (let i = 0; i < 4; i++) {
          _this.tweenedObjects1.push(_this.tweenedObjects2[i]);
        }
        _this.tweenedObjects2.length = 0;
        _this.countAll = 1;
        _this.startO = 230 + 43 * 4;
        _this.EndT = 465;
        _this.weightCount = 4;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 4; i < 8; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          if (i == 7) {
            tween.to(
              { x: _this.tomatoPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.tomatoPositions[i], y: 150 },
              1500,
              "Linear",
              true,
              0
            );
          }

          j++;
        }
        _this.EndT = 465 - 43 * 5;
        for (let i = 0; i < 4; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.EndT = 465 - 43;
        _this.weightCount = 8;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 8; i < 12; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.tomatoPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndT = 465 - 43 * 5;

        for (let i = 0; i < 4; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.EndT2 = 445;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj2 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.startO = 230 + 43 * 4;
        _this.weightCount = 4;
        _this.EndT = 465;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.weightCount = 8;
        _this.EndT = 465 - 43;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 4; i < 8; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          if (i == 7) {
            tween.to(
              { x: _this.tomatoPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.tomatoPositions[i], y: 150 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }
        _this.EndT = 465 - 43 * 5;
        for (let i = 0; i < 4; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.EndT = 465;
        _this.weightCount = 8;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 8; i < 12; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.tomatoPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndT = 465 - 43 * 5;

        for (let i = 0; i < 4; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.EndT2 = 445;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj3 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 4;
        _this.EndT = 465;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 43 * 4;
        _this.weightCount = 8;
        _this.EndT = 465 - 43;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 4; i < 8; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          if (i == 7) {
            tween.to(
              { x: _this.tomatoPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.tomatoPositions[i], y: 150 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }
        _this.EndT = 465 - 43 * 5;
        for (let i = 0; i < 4; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 1;
        _this.EndT = 465;
        _this.weightCount = 8;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 8; i < 12; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.tomatoPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndT = 465 - 43 * 5;

        for (let i = 0; i < 4; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 2;
        _this.EndT2 = 445;
        _this.weightCount = 12;
      }
    }
    if (_this.destroyObj4 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.weightCount = 4;
        _this.EndT = 465;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 43 * 4;
        _this.weightCount = 8;
        _this.EndT = 465 - 43;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        _this.weightCount = 12;
        _this.countAll = 2;
        _this.EndT = 465 - 43 * 5;
        _this.EndT2 = 445;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 12; i < 16; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          tween.to(
            { x: _this.tomatoPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }
        _this.EndT = 465 - 43 * 5;

        for (let i = 0; i < 4; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 2;
        _this.EndT2 = 445;
        _this.weightCount = 16;
      }
    }

    if (_this.Tomato.inputEnabled === false) {
      _this.time.events.add(1800, function () {
        _this.Tomato.inputEnabled = true;
        _this.Tomato.input.useHandCursor = true;
        _this.Tomato.events.onInputDown.add(_this.tweenTomatoToMachine, _this);
      });
    }

    if (_this.TomatoGroup.length === 0) {
      _this.startO = 230;
      _this.EndT = 465;
      _this.EndT2 = 445;
      _this.countAll = 0;
      _this.weightCount = 0;
      _this.TomatoTween.destroy();
      _this.countHalf = 0;
    } else if (_this.TomatoGroup.length === 4) {
      _this.countAll = 1;
      _this.TomatoTween.destroy();
      _this.countHalf = 0;
    } else if (_this.TomatoGroup.length === 8) {
      _this.countAll = 2;
      _this.TomatoTween.destroy();
      _this.countHalf = 0;
    } else if (_this.TomatoGroup.length === 12) {
      _this.countAll = 3;
      _this.TomatoTween.destroy();
      _this.countHalf = 0;
    } else if (_this.TomatoGroup.length === 16) {
      _this.countAll = 4;
      _this.TomatoTween.destroy();
      _this.countHalf = 0;
    }

    _this.showWeight2();
  },

  destroyOnion: function (target) {
    _this.clickSound.play();
    target.destroy();
    _this.Onion.inputEnabled = false;
    _this.Onion.events.onInputDown.removeAll();

    for (let i = 0; i < _this.tweenedObjects1.length; i++) {
      if (!_this.tweenedObjects1[i].exists) {
        _this.destroyObj1 = true;
        console.log("group 1");
        _this.tweenedObjects1.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects1.length = 0;
        _this.weightCount = 0;
        _this.startO = 230 + 48 * 3;
      } else {
        _this.destroyObj1 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects2.length; i++) {
      if (!_this.tweenedObjects2[i].exists) {
        _this.destroyObj2 = true;
        console.log("group 2");
        _this.tweenedObjects2.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects2.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj2 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects3.length; i++) {
      if (!_this.tweenedObjects3[i].exists) {
        _this.destroyObj3 = true;
        console.log("group 3");
        _this.tweenedObjects3.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects3.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj3 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects4.length; i++) {
      if (!_this.tweenedObjects4[i].exists) {
        _this.destroyObj4 = true;
        console.log("group 4");
        _this.tweenedObjects4.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects4.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj4 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects5.length; i++) {
      if (!_this.tweenedObjects5[i].exists) {
        _this.destroyObj5 = true;
        console.log("group 5");
        _this.tweenedObjects5.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects5.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj5 = false;
      }
    }

    for (let i = 0; i < _this.tweenedObjects6.length; i++) {
      if (!_this.tweenedObjects6[i].exists) {
        _this.destroyObj6 = true;
        console.log("group 6");
        _this.tweenedObjects6.forEach(function (obj) {
          obj.destroy();
        });
        _this.tweenedObjects6.length = 0;
        _this.weightCount = 0;
      } else {
        _this.destroyObj6 = false;
      }
    }

    if (_this.destroyObj1 === true) {
      if (_this.tweenedObjects2.length > 0) {
        for (let i = 0; i < 3; i++) {
          console.log("tweene 2");
          var tween = _this.add.tween(_this.tweenedObjects2[i]);
          tween.to(
            { x: _this.onionPositions[i], y: 150 },
            1500,
            "Linear",
            true,
            0
          );
          _this.startO -= 43;
        }

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects1.push(_this.tweenedObjects2[i]);
        }
        _this.tweenedObjects2.length = 0;
        _this.countAll = 1;
        _this.startO = 230 + 43 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          // if (i === 7) {
          //     tween.to({ x: _this.onionPositions[i], y: 116 }, 1500, 'Linear', true, 0);
          // } else {
          tween.to(
            { x: _this.onionPositions[i], y: 150 },
            1500,
            "Linear",
            true,
            0
          );
          // }

          j++;
        }
        _this.EndT = 465 - 43 * 2;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.startO = 230 + 43 * 6;
        _this.EndT = 465;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          if (i === 6) {
            tween.to(
              { x: _this.onionPositions[i], y: 150 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.onionPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndT = 465 - 43 * 2;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.startO = 230 + 43 * 6;
        _this.EndT2 = 445;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          tween.to(
            { x: _this.onionPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }

        _this.EndT = 465 - 43 * 5;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndT = 465 - 43 * 5;
        _this.EndT2 = 445;
        _this.weightCount = 12;
      }
      if (_this.tweenedObjects6.length > 0) {
        var j = 0;
        for (let i = 12; i < 15; i++) {
          console.log("tweene 6");
          var tween = _this.add.tween(_this.tweenedObjects6[j]);
          if (i === 12) {
            tween.to(
              { x: _this.onionPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.onionPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndT2 = 445;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects5.push(_this.tweenedObjects6[i]);
        }

        _this.tweenedObjects6.length = 0;
        _this.countAll = 5;
        _this.EndT2 = 445 - 43 * 2;
        _this.weightCount = 15;
      }
    }
    if (_this.destroyObj2 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.startO = 230 + 43 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 43 * 6;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          // if (i === 7) {
          //     tween.to({ x: _this.onionPositions[i], y: 116 }, 1500, 'Linear', true, 0);
          // } else {
          tween.to(
            { x: _this.onionPositions[i], y: 150 },
            1500,
            "Linear",
            true,
            0
          );
          // }

          j++;
        }
        _this.EndT = 465 - 43 * 2;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.startO = 230 + 43 * 6;
        _this.EndT = 465;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          if (i === 6) {
            tween.to(
              { x: _this.onionPositions[i], y: 150 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.onionPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndT = 465 - 43 * 2;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.startO = 230 + 43 * 6;
        _this.EndT2 = 445;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          tween.to(
            { x: _this.onionPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }

        _this.EndT = 465 - 43 * 5;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndT = 465 - 43 * 5;
        _this.EndT2 = 445;
        _this.weightCount = 12;
      }
      if (_this.tweenedObjects6.length > 0) {
        var j = 0;
        for (let i = 12; i < 15; i++) {
          console.log("tweene 6");
          var tween = _this.add.tween(_this.tweenedObjects6[j]);
          if (i === 12) {
            tween.to(
              { x: _this.onionPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.onionPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndT2 = 445;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects5.push(_this.tweenedObjects6[i]);
        }

        _this.tweenedObjects6.length = 0;
        _this.countAll = 5;
        _this.EndT2 = 445 - 43 * 2;
        _this.weightCount = 15;
      }
    }
    if (_this.destroyObj3 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.startO = 230 + 43 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 43 * 6;
        _this.weightCount = 6;
        _this.EndT = 465;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        var j = 0;
        for (let i = 3; i < 6; i++) {
          console.log("tweene 3");
          var tween = _this.add.tween(_this.tweenedObjects3[j]);
          // if (i === 7) {
          //     tween.to({ x: _this.onionPositions[i], y: 116 }, 1500, 'Linear', true, 0);
          // } else {
          tween.to(
            { x: _this.onionPositions[i], y: 150 },
            1500,
            "Linear",
            true,
            0
          );
          // }

          j++;
        }
        _this.EndT = 465 - 43 * 2;
        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects2.push(_this.tweenedObjects3[i]);
        }

        _this.tweenedObjects3.length = 0;
        _this.countAll = 2;
        _this.startO = 230 + 43 * 6;
        _this.EndT = 465;
        _this.weightCount = 6;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          if (i === 6) {
            tween.to(
              { x: _this.onionPositions[i], y: 150 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.onionPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndT = 465 - 43 * 2;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.startO = 230 + 43 * 6;
        _this.EndT = 465 - 43 * 2;
        _this.EndT2 = 445;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          tween.to(
            { x: _this.onionPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }

        _this.EndT = 465 - 43 * 5;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndT = 465 - 43 * 5;
        _this.EndT2 = 445;
        _this.weightCount = 12;
      }
      if (_this.tweenedObjects6.length > 0) {
        var j = 0;
        for (let i = 12; i < 15; i++) {
          console.log("tweene 6");
          var tween = _this.add.tween(_this.tweenedObjects6[j]);
          if (i === 12) {
            tween.to(
              { x: _this.onionPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.onionPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndT2 = 445;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects5.push(_this.tweenedObjects6[i]);
        }

        _this.tweenedObjects6.length = 0;
        _this.countAll = 5;
        _this.EndT2 = 445 - 43 * 2;
        _this.weightCount = 15;
      }
    }
    if (_this.destroyObj4 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.startO = 230 + 43 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 43 * 6;
        _this.weightCount = 6;
        _this.EndT = 465;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        _this.countAll = 2;
        _this.EndT = 465 - 43 * 2;
        _this.EndT2 = 445;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects4.length > 0) {
        var j = 0;
        for (let i = 6; i < 9; i++) {
          console.log("tweene 4");
          var tween = _this.add.tween(_this.tweenedObjects4[j]);
          if (i === 6) {
            tween.to(
              { x: _this.onionPositions[i], y: 150 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.onionPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndT = 465 - 43 * 2;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects3.push(_this.tweenedObjects4[i]);
        }

        _this.tweenedObjects4.length = 0;
        _this.countAll = 3;
        _this.startO = 230 + 43 * 6;
        _this.EndT = 465 - 43 * 2;
        _this.EndT2 = 445;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          tween.to(
            { x: _this.onionPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }

        _this.EndT = 465 - 43 * 5;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndT = 465 - 43 * 5;
        _this.EndT2 = 445;
        _this.weightCount = 12;
      }
      if (_this.tweenedObjects6.length > 0) {
        var j = 0;
        for (let i = 12; i < 15; i++) {
          console.log("tweene 6");
          var tween = _this.add.tween(_this.tweenedObjects6[j]);
          if (i === 12) {
            tween.to(
              { x: _this.onionPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.onionPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndT2 = 445;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects5.push(_this.tweenedObjects6[i]);
        }

        _this.tweenedObjects6.length = 0;
        _this.countAll = 5;
        _this.EndT2 = 445 - 43 * 2;
        _this.weightCount = 15;
      }
    }
    if (_this.destroyObj5 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.startO = 230 + 43 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 43 * 6;
        _this.weightCount = 6;
        _this.EndT = 465;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        _this.countAll = 2;
        _this.EndT = 465 - 43 * 2;
        _this.EndT2 = 445;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects4.length > 0) {
        _this.countAll = 3;
        _this.EndT = 465 - 43 * 5;
        _this.EndT2 = 445;
        _this.weightCount = 12;
      }
      if (_this.tweenedObjects5.length > 0) {
        var j = 0;
        for (let i = 9; i < 12; i++) {
          console.log("tweene 5");
          var tween = _this.add.tween(_this.tweenedObjects5[j]);
          tween.to(
            { x: _this.onionPositions[i], y: 116 },
            1500,
            "Linear",
            true,
            0
          );
          j++;
        }

        _this.EndT = 465 - 43 * 5;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects4.push(_this.tweenedObjects5[i]);
        }

        _this.tweenedObjects5.length = 0;
        _this.countAll = 4;
        _this.EndT = 465 - 43 * 5;
        _this.EndT2 = 445;
        _this.weightCount = 12;
      }
      if (_this.tweenedObjects6.length > 0) {
        var j = 0;
        for (let i = 12; i < 15; i++) {
          console.log("tweene 6");
          var tween = _this.add.tween(_this.tweenedObjects6[j]);
          if (i === 12) {
            tween.to(
              { x: _this.onionPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.onionPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndT2 = 445;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects5.push(_this.tweenedObjects6[i]);
        }

        _this.tweenedObjects6.length = 0;
        _this.countAll = 5;
        _this.EndT2 = 445 - 43 * 2;
        _this.weightCount = 15;
      }
    }
    if (_this.destroyObj6 === true) {
      if (_this.tweenedObjects1.length > 0) {
        _this.startO = 230 + 43 * 3;
        _this.weightCount = 3;
      }
      if (_this.tweenedObjects2.length > 0) {
        _this.startO = 230 + 43 * 6;
        _this.weightCount = 6;
        _this.EndT = 465;
        _this.countAll = 1;
      }
      if (_this.tweenedObjects3.length > 0) {
        _this.countAll = 2;
        _this.EndT = 465 - 43 * 2;
        _this.EndT2 = 445;
        _this.weightCount = 9;
      }
      if (_this.tweenedObjects4.length > 0) {
        _this.countAll = 3;
        _this.EndT = 465 - 43 * 5;
        _this.EndT2 = 445;
        _this.weightCount = 12;
      }
      if (_this.tweenedObjects5.length > 0) {
        _this.countAll = 4;
        _this.EndT2 = 445 - 43 * 2;
        _this.weightCount = 15;
      }
      if (_this.tweenedObjects6.length > 0) {
        var j = 0;
        for (let i = 12; i < 15; i++) {
          console.log("tweene 6");
          var tween = _this.add.tween(_this.tweenedObjects6[j]);
          if (i === 12) {
            tween.to(
              { x: _this.onionPositions[i], y: 116 },
              1500,
              "Linear",
              true,
              0
            );
          } else {
            tween.to(
              { x: _this.onionPositions[i], y: 82 },
              1500,
              "Linear",
              true,
              0
            );
          }
          j++;
        }

        _this.EndT2 = 445;

        for (let i = 0; i < 3; i++) {
          _this.tweenedObjects5.push(_this.tweenedObjects6[i]);
        }

        _this.tweenedObjects6.length = 0;
        _this.countAll = 5;
        _this.EndT2 = 445 - 43 * 2;
        _this.weightCount = 15;
      }
    }

    if (_this.Onion.inputEnabled === false) {
      _this.time.events.add(1800, function () {
        _this.Onion.inputEnabled = true;
        _this.Onion.input.useHandCursor = true;
        _this.Onion.events.onInputDown.add(_this.tweenOnionToMachine, _this);
      });
    }

    if (_this.OnionGroup.length === 0) {
      _this.startO = 230;
      _this.EndP = 465;
      _this.EndP2 = 440;
      _this.countAll = 0;
      _this.weightCount = 0;
      _this.OnionTween.destroy();
      _this.countHalf = 0;
    } else if (_this.OnionGroup.length === 3) {
      _this.countAll = 1;
      _this.OnionTween.destroy();
      _this.countHalf = 0;
    } else if (_this.OnionGroup.length === 6) {
      _this.countAll = 2;
      _this.OnionTween.destroy();
      _this.countHalf = 0;
    } else if (_this.OnionGroup.length === 9) {
      _this.countAll = 3;
      _this.OnionTween.destroy();
      _this.countHalf = 0;
    } else if (_this.OnionGroup.length === 12) {
      _this.countAll = 4;
      _this.OnionTween.destroy();
      _this.countHalf = 0;
    } else if (_this.OnionGroup.length === 15) {
      _this.countAll = 5;
      _this.OnionTween.destroy();
      _this.countHalf = 0;
    }

    _this.showWeight();
  },

  tickFirstEvaluation: function (target) {
    console.log("tick first evaluation");
    _this.clickSound.play();

    if (_this.ItemsArray[_this.QuestionCount] === 1) {
      if (
        (_this.itemWeight === 0.5 && _this.OrangeGroup.length === 3) ||
        (_this.itemWeight === 1.0 && _this.OrangeGroup.length === 6) ||
        (_this.itemWeight === 1.5 && _this.OrangeGroup.length === 9) ||
        (_this.itemWeight === 2 && _this.OrangeGroup.length === 12) ||
        (_this.itemWeight === 2.5 && _this.OrangeGroup.length === 15)
      ) {
        _this.measureMent = true;
        _this.time.events.add(2000, function () {
          _this.weightMachine.removeChild(_this.weightInKg);
          if (
            _this.itemWeight === 1 ||
            _this.itemWeight === 2 ||
            _this.itemWeight === 3
          ) {
            _this.weightInKg = _this.add.text(
              520,
              210,
              _this.itemWeight + ".0 kg"
            );
          } else {
            _this.weightInKg = _this.add.text(
              520,
              210,
              _this.itemWeight + " kg"
            );
          }

          _this.applyingWhite(_this.weightInKg);
          _this.weightMachine.addChild(_this.weightInKg);
        });
      } else {
        _this.measureMent = false;
      }
    } else if (_this.ItemsArray[_this.QuestionCount] === 2) {
      if (
        (_this.itemWeight === 0.5 && _this.AppleGroup.length === 3) ||
        (_this.itemWeight === 1.0 && _this.AppleGroup.length === 6) ||
        (_this.itemWeight === 1.5 && _this.AppleGroup.length === 9) ||
        (_this.itemWeight === 2 && _this.AppleGroup.length === 12) ||
        (_this.itemWeight === 2.5 && _this.AppleGroup.length === 15)
      ) {
        _this.measureMent = true;

        _this.time.events.add(2000, function () {
          _this.weightMachine.removeChild(_this.weightInKg);
          if (
            _this.itemWeight === 1 ||
            _this.itemWeight === 2 ||
            _this.itemWeight === 3
          ) {
            _this.weightInKg = _this.add.text(
              520,
              210,
              _this.itemWeight + ".0 kg"
            );
          } else {
            _this.weightInKg = _this.add.text(
              520,
              210,
              _this.itemWeight + " kg"
            );
          }

          _this.applyingWhite(_this.weightInKg);
          _this.weightMachine.addChild(_this.weightInKg);
        });
      } else {
        _this.measureMent = false;
      }
    } else if (_this.ItemsArray[_this.QuestionCount] === 3) {
      if (
        (_this.itemWeight === 0.5 && _this.PearGroup.length === 3) ||
        (_this.itemWeight === 1.0 && _this.PearGroup.length === 6) ||
        (_this.itemWeight === 1.5 && _this.PearGroup.length === 9) ||
        (_this.itemWeight === 2 && _this.PearGroup.length === 12) ||
        (_this.itemWeight === 2.5 && _this.PearGroup.length === 15)
      ) {
        _this.measureMent = true;

        _this.time.events.add(2000, function () {
          _this.weightMachine.removeChild(_this.weightInKg);
          if (
            _this.itemWeight === 1 ||
            _this.itemWeight === 2 ||
            _this.itemWeight === 3
          ) {
            _this.weightInKg = _this.add.text(
              520,
              210,
              _this.itemWeight + ".0 kg"
            );
          } else {
            _this.weightInKg = _this.add.text(
              520,
              210,
              _this.itemWeight + " kg"
            );
          }

          _this.applyingWhite(_this.weightInKg);
          _this.weightMachine.addChild(_this.weightInKg);
        });
      } else {
        _this.measureMent = false;
      }
    } else if (_this.ItemsArray[_this.QuestionCount] === 4) {
      if (
        (_this.itemWeight === 0.5 && _this.PotatoGroup.length === 3) ||
        (_this.itemWeight === 1 && _this.PotatoGroup.length === 6) ||
        (_this.itemWeight === 1.5 && _this.PotatoGroup.length === 9) ||
        (_this.itemWeight === 2 && _this.PotatoGroup.length === 12) ||
        (_this.itemWeight === 2.5 && _this.PotatoGroup.length === 15)
      ) {
        _this.measureMent = true;

        _this.time.events.add(2000, function () {
          _this.weightMachine.removeChild(_this.weightInKg);
          if (
            _this.itemWeight === 1 ||
            _this.itemWeight === 2 ||
            _this.itemWeight === 3
          ) {
            _this.weightInKg = _this.add.text(
              520,
              210,
              _this.itemWeight + ".0 kg"
            );
          } else {
            _this.weightInKg = _this.add.text(
              520,
              210,
              _this.itemWeight + " kg"
            );
          }

          _this.applyingWhite(_this.weightInKg);
          _this.weightMachine.addChild(_this.weightInKg);
        });
      } else {
        _this.measureMent = false;
      }
    } else if (_this.ItemsArray[_this.QuestionCount] === 5) {
      if (
        (_this.itemWeight === 0.5 && _this.TomatoGroup.length === 4) ||
        (_this.itemWeight === 1 && _this.TomatoGroup.length === 8) ||
        (_this.itemWeight === 1.5 && _this.TomatoGroup.length === 12) ||
        (_this.itemWeight === 2 && _this.TomatoGroup.length === 16)
      ) {
        _this.measureMent = true;

        _this.time.events.add(2000, function () {
          _this.weightMachine.removeChild(_this.weightInKg);
          if (
            _this.itemWeight === 1 ||
            _this.itemWeight === 2 ||
            _this.itemWeight === 3
          ) {
            _this.weightInKg = _this.add.text(
              520,
              210,
              _this.itemWeight + ".0 kg"
            );
          } else {
            _this.weightInKg = _this.add.text(
              520,
              210,
              _this.itemWeight + " kg"
            );
          }

          _this.applyingWhite(_this.weightInKg);
          _this.weightMachine.addChild(_this.weightInKg);
        });
      } else {
        _this.measureMent = false;
      }
    } else if (_this.ItemsArray[_this.QuestionCount] === 6) {
      if (
        (_this.itemWeight === 0.5 && _this.OnionGroup.length === 3) ||
        (_this.itemWeight === 1 && _this.OnionGroup.length === 6) ||
        (_this.itemWeight === 1.5 && _this.OnionGroup.length === 9) ||
        (_this.itemWeight === 2 && _this.OnionGroup.length === 12) ||
        (_this.itemWeight === 2.5 && _this.OnionGroup.length === 15) ||
        (_this.itemWeight === 3 && _this.OnionGroup.length === 18)
      ) {
        _this.measureMent = true;

        _this.time.events.add(2000, function () {
          _this.weightMachine.removeChild(_this.weightInKg);
          if (
            _this.itemWeight === 1 ||
            _this.itemWeight === 2 ||
            _this.itemWeight === 3
          ) {
            _this.weightInKg = _this.add.text(
              520,
              210,
              _this.itemWeight + ".0 kg"
            );
          } else {
            _this.weightInKg = _this.add.text(
              520,
              210,
              _this.itemWeight + " kg"
            );
          }

          _this.applyingWhite(_this.weightInKg);
          _this.weightMachine.addChild(_this.weightInKg);
        });
      } else {
        _this.measureMent = false;
      }
    }

    if (_this.measureMent === true) {
      _this.tick.alpha = 0;
      _this.time.events.add(1500, function () {
        target.events.onInputDown.removeAll();
        _this.tick.destroy();
      });
      _this.counterCelebrationSound.play();

      if (_this.ItemsArray[_this.QuestionCount] === 1) {
        _this.tickClicked = true;
        _this.Orange.inputEnabled = false;
        _this.Orange.events.onInputDown.removeAll();

        for (let i = 0; i < _this.OrangeGroup.length; i++) {
          _this.OrangeGroup.getChildAt(i).events.onDragStop.removeAll();
          _this.OrangeGroup.getChildAt(i).inputEnabled = false;
        }
      } else if (_this.ItemsArray[_this.QuestionCount] === 2) {
        _this.tickClicked = true;
        _this.Apple.inputEnabled = false;
        _this.Apple.events.onInputDown.removeAll();

        for (let i = 0; i < _this.AppleGroup.length; i++) {
          _this.AppleGroup.getChildAt(i).events.onDragStop.removeAll();
          _this.AppleGroup.getChildAt(i).inputEnabled = false;
        }
      } else if (_this.ItemsArray[_this.QuestionCount] === 3) {
        _this.tickClicked = true;
        _this.Pear.inputEnabled = false;
        _this.Pear.events.onInputDown.removeAll();

        for (let i = 0; i < _this.PearGroup.length; i++) {
          _this.PearGroup.getChildAt(i).events.onDragStop.removeAll();
          _this.PearGroup.getChildAt(i).inputEnabled = false;
        }
      } else if (_this.ItemsArray[_this.QuestionCount] === 4) {
        _this.tickClicked = true;
        _this.Potato.inputEnabled = false;
        _this.Potato.events.onInputDown.removeAll();

        for (let i = 0; i < _this.PotatoGroup.length; i++) {
          _this.PotatoGroup.getChildAt(i).events.onDragStop.removeAll();
          _this.PotatoGroup.getChildAt(i).inputEnabled = false;
        }
      } else if (_this.ItemsArray[_this.QuestionCount] === 5) {
        _this.tickClicked = true;
        _this.Tomato.inputEnabled = false;
        _this.Tomato.events.onInputDown.removeAll();

        for (let i = 0; i < _this.TomatoGroup.length; i++) {
          _this.TomatoGroup.getChildAt(i).events.onDragStop.removeAll();
          _this.TomatoGroup.getChildAt(i).inputEnabled = false;
        }
      } else if (_this.ItemsArray[_this.QuestionCount] === 6) {
        _this.tickClicked = true;
        _this.Onion.inputEnabled = false;
        _this.Onion.events.onInputDown.removeAll();
        for (let i = 0; i < _this.OnionGroup.length; i++) {
          _this.OnionGroup.getChildAt(i).events.onDragStop.removeAll();
          _this.OnionGroup.getChildAt(i).inputEnabled = false;
        }
      }
      var rupeeSymbol = "\u20B9";

      _this.symbol = _this.add.text(520, 30, rupeeSymbol);
      _this.applyingStyleBlue(_this.symbol);
      _this.symbol.fontSize = "40px";
      _this.symbol.fontWeight = "bold";
      _this.weightMachine.addChild(_this.symbol);

      if (_this.QuestionCount === 0 && _this.itemCount === 0) {
        _this.time.events.add(1000, function () {
          _this.Ask_Question4.play();
        });
      }

      _this.Question_flag = 4;

      _this.weightCount = 0;

      _this.time.events.add(500, function () {
        _this.addNumberPad2();
      });
    } else {
      _this.noofAttempts++;
      _this.wrongSound.play();
      _this.countHalf = 0;
      _this.weightCount = 0;
      _this.countAll = 0;

      _this.time.events.add(500, function () {
        _this.weightMachine.removeChild(_this.weightInKg);
        _this.weightInKg = _this.add.text(520, 210, "0.0 kg");
        _this.applyingWhite(_this.weightInKg);
        _this.weightMachine.addChild(_this.weightInKg);
      });

      if (_this.OrangeGroup.length > 0) {
        _this.OrangeGroup.destroy();

        _this.OrangeGroup = _this.add.group();
        _this.tweenedObjects1.length = 0;
        _this.tweenedObjects2.length = 0;
        _this.tweenedObjects3.length = 0;
        _this.tweenedObjects4.length = 0;
        _this.tweenedObjects5.length = 0;

        _this.startO = 230;
        _this.EndO = 438;
        _this.EndO2 = 415;

        _this.Orange.inputEnabled = true;
        _this.Orange.input.useHandCursor = true;
        _this.Orange.events.onInputDown.add(_this.tweenOrangeToMachine, _this);
      } else if (_this.AppleGroup.length > 0) {
        _this.AppleGroup.destroy();

        _this.AppleGroup = _this.add.group();
        _this.tweenedObjects1.length = 0;
        _this.tweenedObjects2.length = 0;
        _this.tweenedObjects3.length = 0;
        _this.tweenedObjects4.length = 0;
        _this.tweenedObjects5.length = 0;

        _this.startO = 230;
        _this.EndA = 445;
        _this.EndA2 = 415;

        _this.Apple.inputEnabled = true;
        _this.Apple.input.useHandCursor = true;
        _this.Apple.events.onInputDown.add(_this.tweenAppleToMachine, _this);
      } else if (_this.PearGroup.length > 0) {
        _this.PearGroup.destroy();

        _this.PearGroup = _this.add.group();
        _this.tweenedObjects1.length = 0;
        _this.tweenedObjects2.length = 0;
        _this.tweenedObjects3.length = 0;
        _this.tweenedObjects4.length = 0;
        _this.tweenedObjects5.length = 0;

        _this.startO = 230;
        _this.EndO = 438;
        _this.EndO2 = 415;

        _this.Pear.inputEnabled = true;
        _this.Pear.input.useHandCursor = true;
        _this.Pear.events.onInputDown.add(_this.tweenPearToMachine, _this);
      } else if (_this.PotatoGroup.length > 0) {
        _this.PotatoGroup.destroy();

        _this.PotatoGroup = _this.add.group();
        _this.tweenedObjects1.length = 0;
        _this.tweenedObjects2.length = 0;
        _this.tweenedObjects3.length = 0;
        _this.tweenedObjects4.length = 0;
        _this.tweenedObjects5.length = 0;

        _this.startO = 230;
        _this.EndP = 465;
        _this.EndP2 = 440;

        _this.Potato.inputEnabled = true;
        _this.Potato.input.useHandCursor = true;
        _this.Potato.events.onInputDown.add(_this.tweenPotatoToMachine, _this);
      } else if (_this.TomatoGroup.length > 0) {
        _this.TomatoGroup.destroy();

        _this.TomatoGroup = _this.add.group();
        _this.tweenedObjects1.length = 0;
        _this.tweenedObjects2.length = 0;
        _this.tweenedObjects3.length = 0;
        _this.tweenedObjects4.length = 0;
        _this.tweenedObjects5.length = 0;

        _this.startO = 230;
        _this.EndT = 465;
        _this.EndT2 = 445;

        _this.Tomato.inputEnabled = true;
        _this.Tomato.input.useHandCursor = true;
        _this.Tomato.events.onInputDown.add(_this.tweenTomatoToMachine, _this);
      } else if (_this.OnionGroup.length > 0) {
        _this.OnionGroup.destroy();

        _this.OnionGroup = _this.add.group();
        _this.tweenedObjects1.length = 0;
        _this.tweenedObjects2.length = 0;
        _this.tweenedObjects3.length = 0;
        _this.tweenedObjects4.length = 0;
        _this.tweenedObjects5.length = 0;

        _this.startO = 230;
        _this.EndT = 465;
        _this.EndT2 = 445;

        _this.Onion.inputEnabled = true;
        _this.Onion.input.useHandCursor = true;
        _this.Onion.events.onInputDown.add(_this.tweenOnionToMachine, _this);
      }
    }
  },

  GiveMoneyToVendor: function () {
    _this.tickClicked = false;

    if (_this.QuestionCount === 0 && _this.itemCount === 0) {
      _this.time.events.add(1000, function () {
        _this.Ask_Question5.play();
      });
    }
    _this.Question_flag = 5;

    _this.valueMachine = _this.add.image(70, 600, "valueMachine");
    _this.valueTween = _this.add.tween(_this.valueMachine);
    _this.valueTween.to({ x: 70, y: 370 }, 1000, "Linear", true, 0);

    _this.showPrice = _this.add.text(77, 28, _this.itemPrice);
    _this.applyingStyleBlue(_this.showPrice);
    _this.showPrice.fontSize = "34px";
    _this.valueMachine.addChild(_this.showPrice);

    _this.Wallet = _this.add.sprite(360, 90, "wallet");

    _this.vendorHand = _this.add.image(-20, -150, "vendorHand");
    _this.vendorHandTween = _this.add.tween(_this.vendorHand);
    _this.vendorHandTween.to({ x: -60, y: -10 }, 1000, "Linear", true, 0);

    if (_this.totalDenominationInWallet === 100) {
      _this.requiredForDragObjects100();
    }
    if (_this.totalDenominationInWallet === 125) {
      _this.requiredForDragObjects125();
    }
    if (_this.totalDenominationInWallet === 170) {
      _this.requiredForDragObjects170();
    }
    if (_this.totalDenominationInWallet === 200) {
      _this.requiredForDragObjects200();
    }

    _this.tick = _this.add.sprite(880, 410, "TickBtn");
    _this.tick.inputEnabled = true;
    _this.tick.input.useHandCursor = true;
    _this.tick.events.onInputDown.add(_this.tickSecondEvaluation, _this);
  },

  requiredForDragObjects100: function () {
    _this.DragGroup = _this.add.group();
    _this.DragGroup2 = _this.add.group();

    console.log("requiredForDragObjects 100");

    _this.vendorGroup = [];

    _this.remainingGroup = _this.add.group();

    _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
    _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
    _this.wallet10_3 = _this.add.sprite(640, 210, "10Wallet");
    _this.wallet10_2 = _this.add.sprite(640, 150, "10Wallet");
    _this.wallet10 = _this.add.sprite(400, 350, "10Wallet");
    _this.wallet20_3 = _this.add.sprite(400, 280, "20Wallet");
    _this.wallet20_2 = _this.add.sprite(400, 210, "20Wallet");
    _this.wallet20 = _this.add.sprite(400, 150, "20Wallet");

    _this.remainingGroup.addChild(_this.wallet5_2);
    _this.remainingGroup.addChild(_this.wallet5);
    _this.remainingGroup.addChild(_this.wallet10_3);
    _this.remainingGroup.addChild(_this.wallet10_2);
    _this.remainingGroup.addChild(_this.wallet10);
    _this.remainingGroup.addChild(_this.wallet20_3);
    _this.remainingGroup.addChild(_this.wallet20_2);
    _this.remainingGroup.addChild(_this.wallet20);

    _this.rupee5_2 = _this.add.sprite(640, 350, "5Rupee");
    _this.DragGroup.addChild(_this.rupee5_2);
    _this.rupee5 = _this.add.sprite(640, 280, "5Rupee");
    _this.DragGroup.addChild(_this.rupee5);
    _this.rupee10_3 = _this.add.sprite(640, 210, "10Rupee");
    _this.DragGroup.addChild(_this.rupee10_3);
    _this.rupee10_2 = _this.add.sprite(640, 150, "10Rupee");
    _this.DragGroup.addChild(_this.rupee10_2);
    _this.rupee10 = _this.add.sprite(400, 350, "10Rupee");
    _this.DragGroup.addChild(_this.rupee10);
    _this.rupee20_3 = _this.add.sprite(400, 280, "20Rupee");
    _this.DragGroup.addChild(_this.rupee20_3);
    _this.rupee20_2 = _this.add.sprite(400, 210, "20Rupee");
    _this.DragGroup.addChild(_this.rupee20_2);
    _this.rupee20 = _this.add.sprite(400, 150, "20Rupee");
    _this.DragGroup.addChild(_this.rupee20);

    _this.rupee5_2.alpha = 0;
    _this.rupee5.alpha = 0;
    _this.rupee10_3.alpha = 0;
    _this.rupee10_2.alpha = 0;
    _this.rupee10.alpha = 0;
    _this.rupee20_3.alpha = 0;
    _this.rupee20_2.alpha = 0;
    _this.rupee20.alpha = 0;

    _this.rupee5_2.name = "5_2";
    _this.rupee5.name = "5";
    _this.rupee10_3.name = "10_3";
    _this.rupee10_2.name = "10_2";
    _this.rupee10.name = "10";
    _this.rupee20_3.name = "20_3";
    _this.rupee20_2.name = "20_2";
    _this.rupee20.name = "20";

    _this.rupee20.inputEnabled = true;
    _this.rupee20.input.enableDrag();
    _this.rupee20.input.useHandCursor = true;
    _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney100, _this);
    _this.rupee20.events.onDragStop.add(_this.TakeMoneyFromWallet100, _this);

    _this.rupee20_2.inputEnabled = true;
    _this.rupee20_2.input.enableDrag();
    _this.rupee20_2.input.useHandCursor = true;
    _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
    _this.rupee20_2.events.onDragStop.add(_this.TakeMoneyFromWallet100, _this);

    _this.rupee20_3.inputEnabled = true;
    _this.rupee20_3.input.enableDrag();
    _this.rupee20_3.input.useHandCursor = true;
    _this.rupee20_3.events.onDragUpdate.add(_this.UpdateMoney100, _this);
    _this.rupee20_3.events.onDragStop.add(_this.TakeMoneyFromWallet100, _this);

    _this.rupee10.inputEnabled = true;
    _this.rupee10.input.enableDrag();
    _this.rupee10.input.useHandCursor = true;
    _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney100, _this);
    _this.rupee10.events.onDragStop.add(_this.TakeMoneyFromWallet100, _this);

    _this.rupee10_2.inputEnabled = true;
    _this.rupee10_2.input.enableDrag();
    _this.rupee10_2.input.useHandCursor = true;
    _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
    _this.rupee10_2.events.onDragStop.add(_this.TakeMoneyFromWallet100, _this);

    _this.rupee10_3.inputEnabled = true;
    _this.rupee10_3.input.enableDrag();
    _this.rupee10_3.input.useHandCursor = true;
    _this.rupee10_3.events.onDragUpdate.add(_this.UpdateMoney100, _this);
    _this.rupee10_3.events.onDragStop.add(_this.TakeMoneyFromWallet100, _this);

    _this.rupee5.inputEnabled = true;
    _this.rupee5.input.enableDrag();
    _this.rupee5.input.useHandCursor = true;
    _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney100, _this);
    _this.rupee5.events.onDragStop.add(_this.TakeMoneyFromWallet100, _this);

    _this.rupee5_2.inputEnabled = true;
    _this.rupee5_2.input.enableDrag();
    _this.rupee5_2.input.useHandCursor = true;
    _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
    _this.rupee5_2.events.onDragStop.add(_this.TakeMoneyFromWallet100, _this);
  },

  UpdateMoney100: function (target) {
    _this.world.bringToTop(target);

    if (target.name === "5_2") {
      _this.wallet5_2.destroy();
    }
    if (target.name === "5") {
      _this.wallet5.destroy();
    }
    if (target.name === "10_3") {
      _this.wallet10_3.destroy();
    }
    if (target.name === "10_2") {
      _this.wallet10_2.destroy();
    }
    if (target.name === "10") {
      _this.wallet10.destroy();
    }
    if (target.name === "20_3") {
      _this.wallet20_3.destroy();
    }
    if (target.name === "20_2") {
      _this.wallet20_2.destroy();
    }
    if (target.name === "20") {
      _this.wallet20.destroy();
    }

    target.alpha = 1;
    _this.world.bringToTop(target);
  },

  TakeMoneyFromWallet100: function (target) {
    _this.world.bringToTop(target);
    _this.dragCount2++;

    if (_this.dragCount2 > 4) {
      _this.noofAttempts++;
      _this.wrongSound.play();

      _this.dragCount2 -= 1;

      if (target.name === "5_2") {
        _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
        _this.remainingGroup.addChild(_this.wallet5_2);
        _this.rupee5_2 = _this.add.sprite(640, 350, "5Rupee");
        _this.rupee5_2.name = "5_2";
        _this.DragGroup.addChild(_this.rupee5_2);

        _this.rupee5_2.alpha = 0;

        _this.rupee5_2.inputEnabled = true;
        _this.rupee5_2.input.enableDrag();
        _this.rupee5_2.input.useHandCursor = true;
        _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee5_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );
      }
      if (target.name === "5") {
        _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
        _this.remainingGroup.addChild(_this.wallet5);
        _this.rupee5 = _this.add.sprite(640, 280, "5Rupee");
        _this.rupee5.name = "5";
        _this.DragGroup.addChild(_this.rupee5);

        _this.rupee5.alpha = 0;

        _this.rupee5.inputEnabled = true;
        _this.rupee5.input.enableDrag();
        _this.rupee5.input.useHandCursor = true;
        _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee5.events.onDragStop.add(_this.TakeMoneyFromWallet100, _this);
      }
      if (target.name === "10_3") {
        _this.wallet10_3 = _this.add.sprite(640, 210, "10Wallet");
        _this.remainingGroup.addChild(_this.wallet10_3);
        _this.rupee10_3 = _this.add.sprite(640, 210, "10Rupee");
        _this.rupee10_3.name = "10_3";
        _this.DragGroup.addChild(_this.rupee10_3);

        _this.rupee10_3.alpha = 0;

        _this.rupee10_3.inputEnabled = true;
        _this.rupee10_3.input.enableDrag();
        _this.rupee10_3.input.useHandCursor = true;
        _this.rupee10_3.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee10_3.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );
      }
      if (target.name === "10_2") {
        _this.wallet10_2 = _this.add.sprite(640, 150, "10Wallet");
        _this.remainingGroup.addChild(_this.wallet10_2);
        _this.rupee10_2 = _this.add.sprite(640, 150, "10Rupee");
        _this.rupee10_2.name = "10_2";
        _this.DragGroup.addChild(_this.rupee10_2);

        _this.rupee10_2.alpha = 0;

        _this.rupee10_2.inputEnabled = true;
        _this.rupee10_2.input.enableDrag();
        _this.rupee10_2.input.useHandCursor = true;
        _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee10_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );
      }
      if (target.name === "10") {
        _this.wallet10 = _this.add.sprite(400, 350, "10Wallet");
        _this.remainingGroup.addChild(_this.wallet10);
        _this.rupee10 = _this.add.sprite(400, 350, "10Rupee");
        _this.rupee10.name = "10";
        _this.DragGroup.addChild(_this.rupee10);

        _this.rupee10.alpha = 0;

        _this.rupee10.inputEnabled = true;
        _this.rupee10.input.enableDrag();
        _this.rupee10.input.useHandCursor = true;
        _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee10.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );
      }
      if (target.name === "20_3") {
        _this.wallet20_2 = _this.add.sprite(400, 280, "20Wallet");
        _this.remainingGroup.addChild(_this.wallet20_2);
        _this.rupee20_2 = _this.add.sprite(400, 280, "20Rupee");
        _this.rupee20_2.name = "20_2";
        _this.DragGroup.addChild(_this.rupee20_2);

        _this.rupee20_2.alpha = 0;

        _this.rupee20_2.inputEnabled = true;
        _this.rupee20_2.input.enableDrag();
        _this.rupee20_2.input.useHandCursor = true;
        _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee20_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );
      }
      if (target.name === "20_2") {
        _this.wallet20_2 = _this.add.sprite(400, 210, "20Wallet");
        _this.remainingGroup.addChild(_this.wallet20_2);
        _this.rupee20_2 = _this.add.sprite(400, 210, "20Rupee");
        _this.rupee20_2.name = "20_2";
        _this.DragGroup.addChild(_this.rupee20_2);

        _this.rupee20_2.alpha = 0;

        _this.rupee20_2.inputEnabled = true;
        _this.rupee20_2.input.enableDrag();
        _this.rupee20_2.input.useHandCursor = true;
        _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee20_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );
      }
      if (target.name === "20") {
        _this.wallet20 = _this.add.sprite(400, 150, "20Wallet");
        _this.remainingGroup.addChild(_this.wallet20);
        _this.rupee20 = _this.add.sprite(400, 150, "20Rupee");
        _this.rupee20.name = "20";
        _this.DragGroup.addChild(_this.rupee20);

        _this.rupee20.alpha = 0;

        _this.rupee20.inputEnabled = true;
        _this.rupee20.input.enableDrag();
        _this.rupee20.input.useHandCursor = true;
        _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee20.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );
      }
      target.destroy();
    } else {
      _this.snapSound.play();
      if (target.name === "5_2") {
        _this.rupee5_2.destroy();
        _this.rupee5_2 = _this.add.sprite(_this.handX, _this.handY, "5Rupee");
        _this.rupee5_2.name = "5R2";
        _this.vendorGroup.push(_this.rupee5_2.name);
        _this.vendorHand.addChild(_this.rupee5_2);

        _this.rupee5_2.inputEnabled = true;
        _this.rupee5_2.input.enableDrag();
        _this.rupee5_2.input.useHandCursor = true;
        _this.rupee5_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_100,
          _this
        );
      }
      if (target.name === "5") {
        _this.rupee5.destroy();
        _this.rupee5 = _this.add.sprite(_this.handX, _this.handY, "5Rupee");
        _this.rupee5.name = "5R";
        _this.vendorGroup.push(_this.rupee5.name);
        _this.vendorHand.addChild(_this.rupee5);

        _this.rupee5.inputEnabled = true;
        _this.rupee5.input.enableDrag();
        _this.rupee5.input.useHandCursor = true;
        _this.rupee5.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_100,
          _this
        );
      }
      if (target.name === "10_3") {
        _this.rupee10_3.destroy();
        _this.rupee10_3 = _this.add.sprite(_this.handX, _this.handY, "10Rupee");
        _this.rupee10_3.name = "10R3";
        _this.vendorGroup.push(_this.rupee10_3.name);
        _this.vendorHand.addChild(_this.rupee10_3);

        _this.rupee10_3.inputEnabled = true;
        _this.rupee10_3.input.enableDrag();
        _this.rupee10_3.input.useHandCursor = true;
        _this.rupee10_3.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_100,
          _this
        );
      }
      if (target.name === "10_2") {
        _this.rupee10_2.destroy();
        _this.rupee10_2 = _this.add.sprite(_this.handX, _this.handY, "10Rupee");
        _this.rupee10_2.name = "10R2";
        _this.vendorGroup.push(_this.rupee10_2.name);
        _this.vendorHand.addChild(_this.rupee10_2);

        _this.rupee10_2.inputEnabled = true;
        _this.rupee10_2.input.enableDrag();
        _this.rupee10_2.input.useHandCursor = true;
        _this.rupee10_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_100,
          _this
        );
      }
      if (target.name === "10") {
        _this.rupee10.destroy();
        _this.rupee10 = _this.add.sprite(_this.handX, _this.handY, "10Rupee");
        _this.rupee10.name = "10R";
        _this.vendorGroup.push(_this.rupee10.name);
        _this.vendorHand.addChild(_this.rupee10);

        _this.rupee10.inputEnabled = true;
        _this.rupee10.input.enableDrag();
        _this.rupee10.input.useHandCursor = true;
        _this.rupee10.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_100,
          _this
        );
      }
      if (target.name === "20_3") {
        _this.rupee20_3.destroy();
        _this.rupee20_3 = _this.add.sprite(_this.handX, _this.handY, "20Rupee");
        _this.rupee20_3.name = "20R3";
        _this.vendorGroup.push(_this.rupee20_3.name);
        _this.vendorHand.addChild(_this.rupee20_3);

        _this.rupee20_3.inputEnabled = true;
        _this.rupee20_3.input.enableDrag();
        _this.rupee20_3.input.useHandCursor = true;
        _this.rupee20_3.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_100,
          _this
        );
      }
      if (target.name === "20_2") {
        _this.rupee20_2.destroy();
        _this.rupee20_2 = _this.add.sprite(_this.handX, _this.handY, "20Rupee");
        _this.rupee20_2.name = "20R2";
        _this.vendorGroup.push(_this.rupee20_2.name);
        _this.vendorHand.addChild(_this.rupee20_2);

        _this.rupee20_2.inputEnabled = true;
        _this.rupee20_2.input.enableDrag();
        _this.rupee20_2.input.useHandCursor = true;
        _this.rupee20_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_100,
          _this
        );
      }
      if (target.name === "20") {
        _this.rupee20.destroy();
        _this.rupee20 = _this.add.sprite(_this.handX, _this.handY, "20Rupee");
        _this.rupee20.name = "20R";
        _this.vendorGroup.push(_this.rupee20.name);
        _this.vendorHand.addChild(_this.rupee20);

        _this.rupee20.inputEnabled = true;
        _this.rupee20.input.enableDrag();
        _this.rupee20.input.useHandCursor = true;
        _this.rupee20.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_100,
          _this
        );
      }
      _this.handY -= 55;
    }
  },

  TakeBackMoneyFromVendor_100: function (target) {
    console.log("take money from vendor hand");
    for (let i = 0; i < _this.dragCount2; i++) {
      if (_this.vendorHand.getChildAt(i).name === target.name) {
        console.log(target.name);
        console.log(i);
        _this.tweeenPos = i;
      }
    }
    _this.dragCount2 -= 1;

    if (_this.vendorGroup.length > 0) {
      if (target.name == "5R2") {
        _this.MoneyInHand = target;
        _this.rupee5_2.destroy();
        _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
        _this.rupee5_2 = _this.add.sprite(640, 350, "5Rupee");
        _this.rupee5_2.alpha = 0;
        _this.rupee5_2.name = "5_2";
        _this.DragGroup2.addChild(_this.rupee5_2);

        _this.rupee5_2.inputEnabled = true;
        _this.rupee5_2.input.enableDrag();
        _this.rupee5_2.input.useHandCursor = true;
        _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee5_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );
        _this.remainingGroup.addChild(_this.wallet5_2);
      }
      if (target.name == "5R") {
        _this.MoneyInHand = target;
        _this.rupee5.destroy();
        _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
        _this.rupee5 = _this.add.sprite(640, 280, "5Rupee");
        _this.rupee5.alpha = 0;
        _this.rupee5.name = "5";
        _this.DragGroup2.addChild(_this.rupee5);

        _this.rupee5.inputEnabled = true;
        _this.rupee5.input.enableDrag();
        _this.rupee5.input.useHandCursor = true;
        _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee5.events.onDragStop.add(_this.TakeMoneyFromWallet100, _this);

        _this.remainingGroup.addChild(_this.wallet5);
      }
      if (target.name == "10R3") {
        _this.MoneyInHand = target;
        _this.rupee10_3.destroy();
        _this.wallet10_3 = _this.add.sprite(640, 210, "10Wallet");
        _this.rupee10_3 = _this.add.sprite(640, 210, "10Rupee");
        _this.rupee10_3.alpha = 0;
        _this.rupee10_3.name = "10_3";
        _this.DragGroup2.addChild(_this.rupee10_3);

        _this.rupee10_3.inputEnabled = true;
        _this.rupee10_3.input.enableDrag();
        _this.rupee10_3.input.useHandCursor = true;
        _this.rupee10_3.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee10_3.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );

        _this.remainingGroup.addChild(_this.wallet10_3);
      }
      if (target.name == "10R2") {
        _this.MoneyInHand = target;
        _this.rupee10_2.destroy();
        _this.wallet10_2 = _this.add.sprite(640, 150, "10Wallet");
        _this.rupee10_2 = _this.add.sprite(640, 150, "10Rupee");
        _this.rupee10_2.alpha = 0;
        _this.rupee10_2.name = "10_2";
        _this.DragGroup2.addChild(_this.rupee10_2);

        _this.rupee10_2.inputEnabled = true;
        _this.rupee10_2.input.enableDrag();
        _this.rupee10_2.input.useHandCursor = true;
        _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee10_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );

        _this.remainingGroup.addChild(_this.wallet10_2);
      }
      if (target.name == "10R") {
        _this.MoneyInHand = target;
        _this.rupee10.destroy();
        _this.wallet10 = _this.add.sprite(400, 350, "10Wallet");
        _this.rupee10 = _this.add.sprite(400, 350, "10Rupee");
        _this.rupee10.alpha = 0;
        _this.rupee10.name = "10";
        _this.DragGroup2.addChild(_this.rupee10);

        _this.rupee10.inputEnabled = true;
        _this.rupee10.input.enableDrag();
        _this.rupee10.input.useHandCursor = true;
        _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee10.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );

        _this.remainingGroup.addChild(_this.wallet10);
      }
      if (target.name == "20R3") {
        _this.MoneyInHand = target;
        _this.rupee20_3.destroy();
        _this.wallet20_3 = _this.add.sprite(400, 280, "20Wallet");
        _this.rupee20_3 = _this.add.sprite(400, 280, "20Rupee");
        _this.rupee20_3.alpha = 0;
        _this.rupee20_3.name = "20_3";
        _this.DragGroup2.addChild(_this.rupee20_3);

        _this.rupee20_3.inputEnabled = true;
        _this.rupee20_3.input.enableDrag();
        _this.rupee20_3.input.useHandCursor = true;
        _this.rupee20_3.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee20_3.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );

        _this.remainingGroup.addChild(_this.wallet20_3);
      }
      if (target.name == "20R2") {
        _this.MoneyInHand = target;
        _this.rupee20_2.destroy();
        _this.wallet20_2 = _this.add.sprite(400, 210, "20Wallet");
        _this.rupee20_2 = _this.add.sprite(400, 210, "20Rupee");
        _this.rupee20_2.alpha = 0;
        _this.rupee20_2.name = "20_2";
        _this.DragGroup2.addChild(_this.rupee20_2);

        _this.rupee20_2.inputEnabled = true;
        _this.rupee20_2.input.enableDrag();
        _this.rupee20_2.input.useHandCursor = true;
        _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee20_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );

        _this.remainingGroup.addChild(_this.wallet20_2);
      }
      if (target.name == "20R") {
        _this.MoneyInHand = target;
        _this.rupee20.destroy();
        _this.wallet20 = _this.add.sprite(400, 150, "20Wallet");
        _this.rupee20 = _this.add.sprite(400, 150, "20Rupee");
        _this.rupee20.alpha = 0;
        _this.rupee20.name = "20";
        _this.DragGroup2.addChild(_this.rupee20);

        _this.rupee20.inputEnabled = true;
        _this.rupee20.input.enableDrag();
        _this.rupee20.input.useHandCursor = true;
        _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney100, _this);
        _this.rupee20.events.onDragStop.add(
          _this.TakeMoneyFromWallet100,
          _this
        );

        _this.remainingGroup.addChild(_this.wallet20);
      }
    }

    var children = _this.vendorHand.children;
    var lastChild = children[children.length - 1];

    for (let i = _this.tweeenPos; i < _this.dragCount2; i++) {
      // if (_this.vendorHand.getChildAt(i).y === 230) {
      //     console.log('no tween 1st one')
      //     console.log('lastChild')
      // } else if (_this.vendorHand.getChildAt(i).y < _this.vendorHand.getChildAt(i - 1).y) {
      //     var tween = _this.add.tween(_this.vendorHand.getChildAt(i + 1));
      //     tween.to({ x: 150, y: _this.vendorHand.getChildAt(i).y + 55 }, 500, 'Linear', true, 0);
      // } else {
      //     console.log('no tweeen')
      // }

      var tween = _this.add.tween(_this.vendorHand.getChildAt(i));
      tween.to(
        { x: 150, y: _this.vendorHand.getChildAt(i).y + 55 },
        500,
        "Linear",
        true,
        0
      );
    }

    // // Assuming you have an array
    // var myArray = [1, 2, 3, 4];

    // Function to remove the ith position element from the array
    function removeElementAtIndex(arr, index) {
      if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
      }
    }

    // Example usage
    var indexToRemove = _this.tweeenPos; // Remove the element at index 2 (3rd element)
    removeElementAtIndex(_this.vendorGroup, indexToRemove);
    console.log(_this.vendorGroup, "_this.vendorGroup"); // Output: [1, 2, 4]

    _this.handY += 55;
  },

  requiredForDragObjects125: function () {
    _this.DragGroup = _this.add.group();
    _this.DragGroup2 = _this.add.group();

    console.log("requiredForDragObjects");

    _this.vendorGroup = [];

    _this.remainingGroup = _this.add.group();

    _this.wallet5_3 = _this.add.sprite(640, 350, "5Wallet");
    _this.wallet5_2 = _this.add.sprite(640, 280, "5Wallet");
    _this.wallet5 = _this.add.sprite(640, 210, "5Wallet");
    _this.wallet10_2 = _this.add.sprite(640, 150, "10Wallet");
    _this.wallet10 = _this.add.sprite(400, 350, "10Wallet");
    _this.wallet20_2 = _this.add.sprite(400, 280, "20Wallet");
    _this.wallet20 = _this.add.sprite(400, 210, "20Wallet");
    _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");

    _this.remainingGroup.addChild(_this.wallet5_3);
    _this.remainingGroup.addChild(_this.wallet5_2);
    _this.remainingGroup.addChild(_this.wallet5);
    _this.remainingGroup.addChild(_this.wallet10_2);
    _this.remainingGroup.addChild(_this.wallet10);
    _this.remainingGroup.addChild(_this.wallet20_2);
    _this.remainingGroup.addChild(_this.wallet20);
    _this.remainingGroup.addChild(_this.wallet50);

    _this.rupee5_3 = _this.add.sprite(640, 350, "5Rupee");
    _this.DragGroup.addChild(_this.rupee5_3);
    _this.rupee5_2 = _this.add.sprite(640, 280, "5Rupee");
    _this.DragGroup.addChild(_this.rupee5_2);
    _this.rupee5 = _this.add.sprite(640, 210, "5Rupee");
    _this.DragGroup.addChild(_this.rupee5);
    _this.rupee10_2 = _this.add.sprite(640, 150, "10Rupee");
    _this.DragGroup.addChild(_this.rupee10_2);
    _this.rupee10 = _this.add.sprite(400, 350, "10Rupee");
    _this.DragGroup.addChild(_this.rupee10);
    _this.rupee20_2 = _this.add.sprite(400, 280, "20Rupee");
    _this.DragGroup.addChild(_this.rupee20_2);
    _this.rupee20 = _this.add.sprite(400, 210, "20Rupee");
    _this.DragGroup.addChild(_this.rupee20);
    _this.rupee50 = _this.add.sprite(400, 150, "50Rupee");
    _this.DragGroup.addChild(_this.rupee50);

    _this.rupee5_3.alpha = 0;
    _this.rupee5_2.alpha = 0;
    _this.rupee5.alpha = 0;
    _this.rupee10_2.alpha = 0;
    _this.rupee10.alpha = 0;
    _this.rupee20_2.alpha = 0;
    _this.rupee20.alpha = 0;
    _this.rupee50.alpha = 0;

    _this.rupee5_3.name = "5_3";
    _this.rupee5_2.name = "5_2";
    _this.rupee5.name = "5";
    _this.rupee10_2.name = "10_2";
    _this.rupee10.name = "10";
    _this.rupee20_2.name = "20_2";
    _this.rupee20.name = "20";
    _this.rupee50.name = "50";

    _this.rupee50.inputEnabled = true;
    _this.rupee50.input.enableDrag();
    _this.rupee50.input.useHandCursor = true;
    _this.rupee50.events.onDragUpdate.add(_this.UpdateMoney125, _this);
    _this.rupee50.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);

    _this.rupee20.inputEnabled = true;
    _this.rupee20.input.enableDrag();
    _this.rupee20.input.useHandCursor = true;
    _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney125, _this);
    _this.rupee20.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);

    _this.rupee20_2.inputEnabled = true;
    _this.rupee20_2.input.enableDrag();
    _this.rupee20_2.input.useHandCursor = true;
    _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney125, _this);
    _this.rupee20_2.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);

    _this.rupee10.inputEnabled = true;
    _this.rupee10.input.enableDrag();
    _this.rupee10.input.useHandCursor = true;
    _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney125, _this);
    _this.rupee10.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);

    _this.rupee10_2.inputEnabled = true;
    _this.rupee10_2.input.enableDrag();
    _this.rupee10_2.input.useHandCursor = true;
    _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney125, _this);
    _this.rupee10_2.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);

    _this.rupee5.inputEnabled = true;
    _this.rupee5.input.enableDrag();
    _this.rupee5.input.useHandCursor = true;
    _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney125, _this);
    _this.rupee5.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);

    _this.rupee5_2.inputEnabled = true;
    _this.rupee5_2.input.enableDrag();
    _this.rupee5_2.input.useHandCursor = true;
    _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney125, _this);
    _this.rupee5_2.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);

    _this.rupee5_3.inputEnabled = true;
    _this.rupee5_3.input.enableDrag();
    _this.rupee5_3.input.useHandCursor = true;
    _this.rupee5_3.events.onDragUpdate.add(_this.UpdateMoney125, _this);
    _this.rupee5_3.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);
  },

  UpdateMoney125: function (target) {
    _this.world.bringToTop(target);

    if (target.name === "5_3") {
      _this.wallet5_3.destroy();
    }
    if (target.name === "5_2") {
      _this.wallet5_2.destroy();
    }
    if (target.name === "5") {
      _this.wallet5.destroy();
    }
    if (target.name === "10_2") {
      _this.wallet10_2.destroy();
    }
    if (target.name === "10") {
      _this.wallet10.destroy();
    }
    if (target.name === "20_2") {
      _this.wallet20_2.destroy();
    }
    if (target.name === "20") {
      _this.wallet20.destroy();
    }
    if (target.name === "50") {
      _this.wallet50.destroy();
    }

    _this.world.bringToTop(target);
    target.alpha = 1;
  },

  TakeMoneyFromWallet125: function (target) {
    _this.dragCount2++;

    if (_this.dragCount2 > 4) {
      _this.noofAttempts++;
      _this.wrongSound.play();

      _this.dragCount2 -= 1;

      if (target.name === "5_3") {
        _this.wallet5_3 = _this.add.sprite(640, 350, "5Wallet");
        _this.remainingGroup.addChild(_this.wallet5_3);
        _this.rupee5_3 = _this.add.sprite(640, 350, "5Rupee");
        _this.rupee5_3.name = "5_3";
        _this.DragGroup.addChild(_this.rupee5_3);

        _this.rupee5_3.alpha = 0;

        _this.rupee5_3.inputEnabled = true;
        _this.rupee5_3.input.enableDrag();
        _this.rupee5_3.input.useHandCursor = true;
        _this.rupee5_3.events.onDragUpdate.add(_this.UpdateMoney125, _this);
        _this.rupee5_3.events.onDragStop.add(
          _this.TakeMoneyFromWallet125,
          _this
        );
      }
      if (target.name === "5_2") {
        _this.wallet5_2 = _this.add.sprite(640, 280, "5Wallet");
        _this.remainingGroup.addChild(_this.wallet5_2);
        _this.rupee5_2 = _this.add.sprite(640, 280, "5Rupee");
        _this.rupee5_2.name = "5_2";
        _this.DragGroup.addChild(_this.rupee5_2);

        _this.rupee5_2.alpha = 0;

        _this.rupee5_2.inputEnabled = true;
        _this.rupee5_2.input.enableDrag();
        _this.rupee5_2.input.useHandCursor = true;
        _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney125, _this);
        _this.rupee5_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet125,
          _this
        );
      }
      if (target.name === "5") {
        _this.wallet5 = _this.add.sprite(640, 210, "5Wallet");
        _this.remainingGroup.addChild(_this.wallet5);
        _this.rupee5 = _this.add.sprite(640, 210, "5Rupee");
        _this.rupee5.name = "5";
        _this.DragGroup.addChild(_this.rupee5);

        _this.rupee5.alpha = 0;

        _this.rupee5.inputEnabled = true;
        _this.rupee5.input.enableDrag();
        _this.rupee5.input.useHandCursor = true;
        _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney125, _this);
        _this.rupee5.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);
      }
      if (target.name === "10_2") {
        _this.wallet10_2 = _this.add.sprite(640, 150, "10Wallet");
        _this.remainingGroup.addChild(_this.wallet10_2);
        _this.rupee10_2 = _this.add.sprite(640, 150, "10Rupee");
        _this.rupee10_2.name = "10_2";
        _this.DragGroup.addChild(_this.rupee10_2);

        _this.rupee10_2.alpha = 0;

        _this.rupee10_2.inputEnabled = true;
        _this.rupee10_2.input.enableDrag();
        _this.rupee10_2.input.useHandCursor = true;
        _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney125, _this);
        _this.rupee10_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet125,
          _this
        );
      }
      if (target.name === "10") {
        _this.wallet10 = _this.add.sprite(400, 350, "10Wallet");
        _this.remainingGroup.addChild(_this.wallet10);
        _this.rupee10 = _this.add.sprite(400, 350, "10Rupee");
        _this.rupee10.name = "10";
        _this.DragGroup.addChild(_this.rupee10);

        _this.rupee10.alpha = 0;

        _this.rupee10.inputEnabled = true;
        _this.rupee10.input.enableDrag();
        _this.rupee10.input.useHandCursor = true;
        _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney125, _this);
        _this.rupee10.events.onDragStop.add(
          _this.TakeMoneyFromWallet125,
          _this
        );
      }
      if (target.name === "20_2") {
        _this.wallet20_2 = _this.add.sprite(400, 280, "20Wallet");
        _this.remainingGroup.addChild(_this.wallet20_2);
        _this.rupee20_2 = _this.add.sprite(400, 280, "20Rupee");
        _this.rupee20_2.name = "20_2";
        _this.DragGroup.addChild(_this.rupee20_2);

        _this.rupee20_2.alpha = 0;

        _this.rupee20_2.inputEnabled = true;
        _this.rupee20_2.input.enableDrag();
        _this.rupee20_2.input.useHandCursor = true;
        _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney125, _this);
        _this.rupee20_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet125,
          _this
        );
      }
      if (target.name === "20") {
        _this.wallet20 = _this.add.sprite(400, 210, "20Wallet");
        _this.remainingGroup.addChild(_this.wallet20);
        _this.rupee20 = _this.add.sprite(400, 210, "20Rupee");
        _this.rupee20.name = "20";
        _this.DragGroup.addChild(_this.rupee20);

        _this.rupee20.alpha = 0;

        _this.rupee20.inputEnabled = true;
        _this.rupee20.input.enableDrag();
        _this.rupee20.input.useHandCursor = true;
        _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney125, _this);
        _this.rupee20.events.onDragStop.add(
          _this.TakeMoneyFromWallet125,
          _this
        );
      }
      if (target.name === "50") {
        _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");
        _this.remainingGroup.addChild(_this.wallet50);
        _this.rupee50 = _this.add.sprite(400, 150, "50Rupee");
        _this.rupee50.name = "50";
        _this.DragGroup.addChild(_this.rupee50);

        _this.rupee50.alpha = 0;

        _this.rupee50.inputEnabled = true;
        _this.rupee50.input.enableDrag();
        _this.rupee50.input.useHandCursor = true;
        _this.rupee50.events.onDragUpdate.add(_this.UpdateMoney125, _this);
        _this.rupee50.events.onDragStop.add(
          _this.TakeMoneyFromWallet125,
          _this
        );
      }
      target.destroy();
    } else {
      _this.snapSound.play();
      if (target.name === "5_3") {
        _this.rupee5_3.destroy();
        _this.rupee5_3 = _this.add.sprite(_this.handX, _this.handY, "5Rupee");
        _this.rupee5_3.name = "5R3";
        _this.vendorGroup.push(_this.rupee5_3.name);
        _this.vendorHand.addChild(_this.rupee5_3);

        _this.rupee5_3.inputEnabled = true;
        _this.rupee5_3.input.enableDrag();
        _this.rupee5_3.input.useHandCursor = true;
        _this.rupee5_3.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_125,
          _this
        );
      }
      if (target.name === "5_2") {
        _this.rupee5_2.destroy();
        _this.rupee5_2 = _this.add.sprite(_this.handX, _this.handY, "5Rupee");
        _this.rupee5_2.name = "5R2";
        _this.vendorGroup.push(_this.rupee5_2.name);
        _this.vendorHand.addChild(_this.rupee5_2);

        _this.rupee5_2.inputEnabled = true;
        _this.rupee5_2.input.enableDrag();
        _this.rupee5_2.input.useHandCursor = true;
        _this.rupee5_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_125,
          _this
        );
      }
      if (target.name === "5") {
        _this.rupee5.destroy();
        _this.rupee5 = _this.add.sprite(_this.handX, _this.handY, "5Rupee");
        _this.rupee5.name = "5R";
        _this.vendorGroup.push(_this.rupee5.name);
        _this.vendorHand.addChild(_this.rupee5);

        _this.rupee5.inputEnabled = true;
        _this.rupee5.input.enableDrag();
        _this.rupee5.input.useHandCursor = true;
        _this.rupee5.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_125,
          _this
        );
      }
      if (target.name === "10_2") {
        _this.rupee10_2.destroy();
        _this.rupee10_2 = _this.add.sprite(_this.handX, _this.handY, "10Rupee");
        _this.rupee10_2.name = "10R2";
        _this.vendorGroup.push(_this.rupee10_2.name);
        _this.vendorHand.addChild(_this.rupee10_2);

        _this.rupee10_2.inputEnabled = true;
        _this.rupee10_2.input.enableDrag();
        _this.rupee10_2.input.useHandCursor = true;
        _this.rupee10_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_125,
          _this
        );
      }
      if (target.name === "10") {
        _this.rupee10.destroy();
        _this.rupee10 = _this.add.sprite(_this.handX, _this.handY, "10Rupee");
        _this.rupee10.name = "10R";
        _this.vendorGroup.push(_this.rupee10.name);
        _this.vendorHand.addChild(_this.rupee10);

        _this.rupee10.inputEnabled = true;
        _this.rupee10.input.enableDrag();
        _this.rupee10.input.useHandCursor = true;
        _this.rupee10.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_125,
          _this
        );
      }
      if (target.name === "20_2") {
        _this.rupee20_2.destroy();
        _this.rupee20_2 = _this.add.sprite(_this.handX, _this.handY, "20Rupee");
        _this.rupee20_2.name = "20R2";
        _this.vendorGroup.push(_this.rupee20_2.name);
        _this.vendorHand.addChild(_this.rupee20_2);

        _this.rupee20_2.inputEnabled = true;
        _this.rupee20_2.input.enableDrag();
        _this.rupee20_2.input.useHandCursor = true;
        _this.rupee20_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_125,
          _this
        );
      }
      if (target.name === "20") {
        _this.rupee20.destroy();
        _this.rupee20 = _this.add.sprite(_this.handX, _this.handY, "20Rupee");
        _this.rupee20.name = "20R";
        _this.vendorGroup.push(_this.rupee20.name);
        _this.vendorHand.addChild(_this.rupee20);

        _this.rupee20.inputEnabled = true;
        _this.rupee20.input.enableDrag();
        _this.rupee20.input.useHandCursor = true;
        _this.rupee20.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_125,
          _this
        );
      }
      if (target.name === "50") {
        _this.rupee50.destroy();
        _this.rupee50 = _this.add.sprite(_this.handX, _this.handY, "50Rupee");
        _this.rupee50.name = "50R";
        _this.vendorGroup.push(_this.rupee50.name);
        _this.vendorHand.addChild(_this.rupee50);

        _this.rupee50.inputEnabled = true;
        _this.rupee50.input.enableDrag();
        _this.rupee50.input.useHandCursor = true;
        _this.rupee50.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_125,
          _this
        );
      }
      _this.handY -= 55;
    }
  },

  TakeBackMoneyFromVendor_125: function (target) {
    console.log("take money from vendor hand");
    for (let i = 0; i < _this.dragCount2; i++) {
      if (_this.vendorHand.getChildAt(i).name === target.name) {
        console.log(target.name);
        console.log(i);
        _this.tweeenPos = i;
      }
    }
    _this.dragCount2 -= 1;

    if (target.name == "5R3") {
      _this.MoneyInHand = target;
      _this.rupee5_3.destroy();
      _this.wallet5_3 = _this.add.sprite(640, 350, "5Wallet");
      _this.rupee5_3 = _this.add.sprite(640, 350, "5Rupee");
      _this.rupee5_3.alpha = 0;
      _this.rupee5_3.name = "5_3";
      _this.DragGroup2.addChild(_this.rupee5_3);

      _this.rupee5_3.inputEnabled = true;
      _this.rupee5_3.input.enableDrag();
      _this.rupee5_3.input.useHandCursor = true;
      _this.rupee5_3.events.onDragUpdate.add(_this.UpdateMoney125, _this);
      _this.rupee5_3.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);
      _this.remainingGroup.addChild(_this.wallet5_3);
    }
    if (target.name == "5R2") {
      _this.MoneyInHand = target;
      _this.rupee5_2.destroy();
      _this.wallet5_2 = _this.add.sprite(640, 280, "5Wallet");
      _this.rupee5_2 = _this.add.sprite(640, 280, "5Rupee");
      _this.rupee5_2.alpha = 0;
      _this.rupee5_2.name = "5_2";
      _this.DragGroup2.addChild(_this.rupee5_2);

      _this.rupee5_2.inputEnabled = true;
      _this.rupee5_2.input.enableDrag();
      _this.rupee5_2.input.useHandCursor = true;
      _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney125, _this);
      _this.rupee5_2.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);
      _this.remainingGroup.addChild(_this.wallet5_2);
    }
    if (target.name == "5R") {
      _this.MoneyInHand = target;
      _this.rupee5.destroy();
      _this.wallet5 = _this.add.sprite(640, 210, "5Wallet");
      _this.rupee5 = _this.add.sprite(640, 210, "5Rupee");
      _this.rupee5.alpha = 0;
      _this.rupee5.name = "5";
      _this.DragGroup2.addChild(_this.rupee5);

      _this.rupee5.inputEnabled = true;
      _this.rupee5.input.enableDrag();
      _this.rupee5.input.useHandCursor = true;
      _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney125, _this);
      _this.rupee5.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);

      _this.remainingGroup.addChild(_this.wallet5);
    }
    if (target.name == "10R2") {
      _this.MoneyInHand = target;
      _this.rupee10_2.destroy();
      _this.wallet10_2 = _this.add.sprite(640, 150, "10Wallet");
      _this.rupee10_2 = _this.add.sprite(640, 150, "10Rupee");
      _this.rupee10_2.alpha = 0;
      _this.rupee10_2.name = "10_2";
      _this.DragGroup2.addChild(_this.rupee10_2);

      _this.rupee10_2.inputEnabled = true;
      _this.rupee10_2.input.enableDrag();
      _this.rupee10_2.input.useHandCursor = true;
      _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney125, _this);
      _this.rupee10_2.events.onDragStop.add(
        _this.TakeMoneyFromWallet125,
        _this
      );

      _this.remainingGroup.addChild(_this.wallet10_2);
    }
    if (target.name == "10R") {
      _this.MoneyInHand = target;
      _this.rupee10.destroy();
      _this.wallet10 = _this.add.sprite(400, 350, "10Wallet");
      _this.rupee10 = _this.add.sprite(400, 350, "10Rupee");
      _this.rupee10.alpha = 0;
      _this.rupee10.name = "10";
      _this.DragGroup2.addChild(_this.rupee10);

      _this.rupee10.inputEnabled = true;
      _this.rupee10.input.enableDrag();
      _this.rupee10.input.useHandCursor = true;
      _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney125, _this);
      _this.rupee10.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);

      _this.remainingGroup.addChild(_this.wallet10);
    }
    if (target.name == "20R2") {
      _this.MoneyInHand = target;
      _this.rupee20_2.destroy();
      _this.wallet20_2 = _this.add.sprite(400, 280, "20Wallet");
      _this.rupee20_2 = _this.add.sprite(400, 280, "20Rupee");
      _this.rupee20_2.alpha = 0;
      _this.rupee20_2.name = "20_2";
      _this.DragGroup2.addChild(_this.rupee20_2);

      _this.rupee20_2.inputEnabled = true;
      _this.rupee20_2.input.enableDrag();
      _this.rupee20_2.input.useHandCursor = true;
      _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney125, _this);
      _this.rupee20_2.events.onDragStop.add(
        _this.TakeMoneyFromWallet125,
        _this
      );

      _this.remainingGroup.addChild(_this.wallet20_2);
    }
    if (target.name == "20R") {
      _this.MoneyInHand = target;
      _this.rupee20.destroy();
      _this.wallet20 = _this.add.sprite(400, 210, "20Wallet");
      _this.rupee20 = _this.add.sprite(400, 210, "20Rupee");
      _this.rupee20.alpha = 0;
      _this.rupee20.name = "20";
      _this.DragGroup2.addChild(_this.rupee20);

      _this.rupee20.inputEnabled = true;
      _this.rupee20.input.enableDrag();
      _this.rupee20.input.useHandCursor = true;
      _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney125, _this);
      _this.rupee20.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);

      _this.remainingGroup.addChild(_this.wallet20);
    }
    if (target.name == "50R") {
      _this.MoneyInHand = target;
      _this.rupee50.destroy();
      _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");
      _this.rupee50 = _this.add.sprite(400, 150, "50Rupee");
      _this.rupee50.alpha = 0;
      _this.rupee50.name = "50";
      _this.DragGroup2.addChild(_this.rupee50);

      _this.rupee50.inputEnabled = true;
      _this.rupee50.input.enableDrag();
      _this.rupee50.input.useHandCursor = true;
      _this.rupee50.events.onDragUpdate.add(_this.UpdateMoney125, _this);
      _this.rupee50.events.onDragStop.add(_this.TakeMoneyFromWallet125, _this);

      _this.remainingGroup.addChild(_this.wallet50);
    }

    var children = _this.vendorHand.children;
    var lastChild = children[children.length - 1];

    for (let i = _this.tweeenPos; i < _this.dragCount2; i++) {
      // if (_this.vendorHand.getChildAt(i).y === 230) {
      //     console.log('no tween 1st one')
      //     console.log('lastChild')
      // } else if (_this.vendorHand.getChildAt(i).y < _this.vendorHand.getChildAt(i - 1).y) {
      //     var tween = _this.add.tween(_this.vendorHand.getChildAt(i + 1));
      //     tween.to({ x: 150, y: _this.vendorHand.getChildAt(i).y + 55 }, 500, 'Linear', true, 0);
      // } else {
      //     console.log('no tweeen')
      // }

      var tween = _this.add.tween(_this.vendorHand.getChildAt(i));
      tween.to(
        { x: 150, y: _this.vendorHand.getChildAt(i).y + 55 },
        500,
        "Linear",
        true,
        0
      );
    }

    // // Assuming you have an array
    // var myArray = [1, 2, 3, 4];

    // Function to remove the ith position element from the array
    function removeElementAtIndex(arr, index) {
      if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
      }
    }

    // Example usage
    var indexToRemove = _this.tweeenPos; // Remove the element at index 2 (3rd element)
    removeElementAtIndex(_this.vendorGroup, indexToRemove);
    console.log(_this.vendorGroup, "_this.vendorGroup"); // Output: [1, 2, 4]

    _this.handY += 55;
  },

  requiredForDragObjects170: function () {
    _this.DragGroup = _this.add.group();
    _this.DragGroup2 = _this.add.group();

    console.log("requiredForDragObjects");

    _this.vendorGroup = [];

    _this.remainingGroup = _this.add.group();

    _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
    _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
    _this.wallet10_2 = _this.add.sprite(640, 210, "10Wallet");
    _this.wallet10 = _this.add.sprite(640, 150, "10Wallet");
    _this.wallet20_2 = _this.add.sprite(400, 350, "20Wallet");
    _this.wallet20 = _this.add.sprite(400, 280, "20Wallet");
    _this.wallet50_2 = _this.add.sprite(400, 210, "50Wallet");
    _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");

    _this.remainingGroup.addChild(_this.wallet5_2);
    _this.remainingGroup.addChild(_this.wallet5);
    _this.remainingGroup.addChild(_this.wallet10_2);
    _this.remainingGroup.addChild(_this.wallet10);
    _this.remainingGroup.addChild(_this.wallet20_2);
    _this.remainingGroup.addChild(_this.wallet20);
    _this.remainingGroup.addChild(_this.wallet50_2);
    _this.remainingGroup.addChild(_this.wallet50);

    _this.rupee5_2 = _this.add.sprite(640, 350, "5Rupee");
    _this.DragGroup.addChild(_this.rupee5_2);
    _this.rupee5 = _this.add.sprite(640, 280, "5Rupee");
    _this.DragGroup.addChild(_this.rupee5);
    _this.rupee10_2 = _this.add.sprite(640, 210, "10Rupee");
    _this.DragGroup.addChild(_this.rupee10_2);
    _this.rupee10 = _this.add.sprite(640, 150, "10Rupee");
    _this.DragGroup.addChild(_this.rupee10);
    _this.rupee20_2 = _this.add.sprite(400, 350, "20Rupee");
    _this.DragGroup.addChild(_this.rupee20_2);
    _this.rupee20 = _this.add.sprite(400, 280, "20Rupee");
    _this.DragGroup.addChild(_this.rupee20);
    _this.rupee50_2 = _this.add.sprite(400, 210, "50Rupee");
    _this.DragGroup.addChild(_this.rupee50_2);
    _this.rupee50 = _this.add.sprite(400, 150, "50Rupee");
    _this.DragGroup.addChild(_this.rupee50);

    _this.rupee5_2.alpha = 0;
    _this.rupee5.alpha = 0;
    _this.rupee10_2.alpha = 0;
    _this.rupee10.alpha = 0;
    _this.rupee20_2.alpha = 0;
    _this.rupee20.alpha = 0;
    _this.rupee50_2.alpha = 0;
    _this.rupee50.alpha = 0;

    _this.rupee5_2.name = "5_2";
    _this.rupee5.name = "5";
    _this.rupee10_2.name = "10_2";
    _this.rupee10.name = "10";
    _this.rupee20_2.name = "20_2";
    _this.rupee20.name = "20";
    _this.rupee50_2.name = "50_2";
    _this.rupee50.name = "50";

    _this.rupee50.inputEnabled = true;
    _this.rupee50.input.enableDrag();
    _this.rupee50.input.useHandCursor = true;
    _this.rupee50.events.onDragUpdate.add(_this.UpdateMoney170, _this);
    _this.rupee50.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);

    _this.rupee50_2.inputEnabled = true;
    _this.rupee50_2.input.enableDrag();
    _this.rupee50_2.input.useHandCursor = true;
    _this.rupee50_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
    _this.rupee50_2.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);

    _this.rupee20.inputEnabled = true;
    _this.rupee20.input.enableDrag();
    _this.rupee20.input.useHandCursor = true;
    _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney170, _this);
    _this.rupee20.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);

    _this.rupee20_2.inputEnabled = true;
    _this.rupee20_2.input.enableDrag();
    _this.rupee20_2.input.useHandCursor = true;
    _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
    _this.rupee20_2.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);

    _this.rupee10.inputEnabled = true;
    _this.rupee10.input.enableDrag();
    _this.rupee10.input.useHandCursor = true;
    _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney170, _this);
    _this.rupee10.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);

    _this.rupee10_2.inputEnabled = true;
    _this.rupee10_2.input.enableDrag();
    _this.rupee10_2.input.useHandCursor = true;
    _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
    _this.rupee10_2.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);

    _this.rupee5.inputEnabled = true;
    _this.rupee5.input.enableDrag();
    _this.rupee5.input.useHandCursor = true;
    _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney170, _this);
    _this.rupee5.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);

    _this.rupee5_2.inputEnabled = true;
    _this.rupee5_2.input.enableDrag();
    _this.rupee5_2.input.useHandCursor = true;
    _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
    _this.rupee5_2.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);
  },

  UpdateMoney170: function (target) {
    if (target.name === "5_2") {
      _this.wallet5_2.destroy();
    }
    if (target.name === "5") {
      _this.wallet5.destroy();
    }
    if (target.name === "10_2") {
      _this.wallet10_2.destroy();
    }
    if (target.name === "10") {
      _this.wallet10.destroy();
    }
    if (target.name === "20_2") {
      _this.wallet20_2.destroy();
    }
    if (target.name === "20") {
      _this.wallet20.destroy();
    }
    if (target.name === "50_2") {
      _this.wallet50_2.destroy();
    }
    if (target.name === "50") {
      _this.wallet50.destroy();
    }
    _this.world.bringToTop(target);
    target.alpha = 1;
  },

  TakeMoneyFromWallet170: function (target) {
    _this.dragCount2++;

    if (_this.dragCount2 > 4) {
      _this.noofAttempts++;
      _this.wrongSound.play();

      _this.dragCount2 -= 1;

      if (target.name === "5_2") {
        _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
        _this.remainingGroup.addChild(_this.wallet5_2);
        _this.rupee5_2 = _this.add.sprite(640, 350, "5Rupee");
        _this.rupee5_2.name = "5_2";
        _this.DragGroup.addChild(_this.rupee5_2);

        _this.rupee5_2.alpha = 0;

        _this.rupee5_2.inputEnabled = true;
        _this.rupee5_2.input.enableDrag();
        _this.rupee5_2.input.useHandCursor = true;
        _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee5_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      if (target.name === "5") {
        _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
        _this.remainingGroup.addChild(_this.wallet5);
        _this.rupee5 = _this.add.sprite(640, 280, "5Rupee");
        _this.rupee5.name = "5";
        _this.DragGroup.addChild(_this.rupee5);

        _this.rupee5.alpha = 0;

        _this.rupee5.inputEnabled = true;
        _this.rupee5.input.enableDrag();
        _this.rupee5.input.useHandCursor = true;
        _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee5.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);
      }
      if (target.name === "10_2") {
        _this.wallet10_2 = _this.add.sprite(640, 210, "10Wallet");
        _this.remainingGroup.addChild(_this.wallet10_2);
        _this.rupee10_2 = _this.add.sprite(640, 210, "10Rupee");
        _this.rupee10_2.name = "10_2";
        _this.DragGroup.addChild(_this.rupee10_2);

        _this.rupee10_2.alpha = 0;

        _this.rupee10_2.inputEnabled = true;
        _this.rupee10_2.input.enableDrag();
        _this.rupee10_2.input.useHandCursor = true;
        _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee10_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      if (target.name === "10") {
        _this.wallet10 = _this.add.sprite(640, 150, "10Wallet");
        _this.remainingGroup.addChild(_this.wallet10);
        _this.rupee10 = _this.add.sprite(640, 150, "10Rupee");
        _this.rupee10.name = "10";
        _this.DragGroup.addChild(_this.rupee10);

        _this.rupee10.alpha = 0;

        _this.rupee10.inputEnabled = true;
        _this.rupee10.input.enableDrag();
        _this.rupee10.input.useHandCursor = true;
        _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee10.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      if (target.name === "20_2") {
        _this.wallet20_2 = _this.add.sprite(400, 350, "20Wallet");
        _this.remainingGroup.addChild(_this.wallet20_2);
        _this.rupee20_2 = _this.add.sprite(400, 350, "20Rupee");
        _this.rupee20_2.name = "20_2";
        _this.DragGroup.addChild(_this.rupee20_2);

        _this.rupee20_2.alpha = 0;

        _this.rupee20_2.inputEnabled = true;
        _this.rupee20_2.input.enableDrag();
        _this.rupee20_2.input.useHandCursor = true;
        _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee20_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      if (target.name === "20") {
        _this.wallet20 = _this.add.sprite(400, 280, "20Wallet");
        _this.remainingGroup.addChild(_this.wallet20);
        _this.rupee20 = _this.add.sprite(400, 280, "20Rupee");
        _this.rupee20.name = "20";
        _this.DragGroup.addChild(_this.rupee20);

        _this.rupee20.alpha = 0;

        _this.rupee20.inputEnabled = true;
        _this.rupee20.input.enableDrag();
        _this.rupee20.input.useHandCursor = true;
        _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee20.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      if (target.name === "50_2") {
        _this.wallet50_2 = _this.add.sprite(400, 210, "50Wallet");
        _this.remainingGroup.addChild(_this.wallet50_2);
        _this.rupee50_2 = _this.add.sprite(400, 210, "50Rupee");
        _this.rupee50_2.name = "50_2";
        _this.DragGroup.addChild(_this.rupee50_2);

        _this.rupee50_2.alpha = 0;

        _this.rupee50_2.inputEnabled = true;
        _this.rupee50_2.input.enableDrag();
        _this.rupee50_2.input.useHandCursor = true;
        _this.rupee50_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee50_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      if (target.name === "50") {
        _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");
        _this.remainingGroup.addChild(_this.wallet50);
        _this.rupee50 = _this.add.sprite(400, 150, "50Rupee");
        _this.rupee50.name = "50";
        _this.DragGroup.addChild(_this.rupee50);

        _this.rupee50.alpha = 0;

        _this.rupee50.inputEnabled = true;
        _this.rupee50.input.enableDrag();
        _this.rupee50.input.useHandCursor = true;
        _this.rupee50.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee50.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      target.destroy();
    } else {
      _this.snapSound.play();
      if (target.name === "5_2") {
        _this.rupee5_2.destroy();
        _this.rupee5_2 = _this.add.sprite(_this.handX, _this.handY, "5Rupee");
        _this.rupee5_2.name = "5R2";
        _this.vendorGroup.push(_this.rupee5_2.name);
        _this.vendorHand.addChild(_this.rupee5_2);

        _this.rupee5_2.inputEnabled = true;
        _this.rupee5_2.input.enableDrag();
        _this.rupee5_2.input.useHandCursor = true;
        _this.rupee5_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_170,
          _this
        );
      }
      if (target.name === "5") {
        _this.rupee5.destroy();
        _this.rupee5 = _this.add.sprite(_this.handX, _this.handY, "5Rupee");
        _this.rupee5.name = "5R";
        _this.vendorGroup.push(_this.rupee5.name);
        _this.vendorHand.addChild(_this.rupee5);

        _this.rupee5.inputEnabled = true;
        _this.rupee5.input.enableDrag();
        _this.rupee5.input.useHandCursor = true;
        _this.rupee5.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_170,
          _this
        );
      }
      if (target.name === "10_2") {
        _this.rupee10_2.destroy();
        _this.rupee10_2 = _this.add.sprite(_this.handX, _this.handY, "10Rupee");
        _this.rupee10_2.name = "10R2";
        _this.vendorGroup.push(_this.rupee10_2.name);
        _this.vendorHand.addChild(_this.rupee10_2);

        _this.rupee10_2.inputEnabled = true;
        _this.rupee10_2.input.enableDrag();
        _this.rupee10_2.input.useHandCursor = true;
        _this.rupee10_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_170,
          _this
        );
      }
      if (target.name === "10") {
        _this.rupee10.destroy();
        _this.rupee10 = _this.add.sprite(_this.handX, _this.handY, "10Rupee");
        _this.rupee10.name = "10R";
        _this.vendorGroup.push(_this.rupee10.name);
        _this.vendorHand.addChild(_this.rupee10);

        _this.rupee10.inputEnabled = true;
        _this.rupee10.input.enableDrag();
        _this.rupee10.input.useHandCursor = true;
        _this.rupee10.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_170,
          _this
        );
      }
      if (target.name === "20_2") {
        _this.rupee20_2.destroy();
        _this.rupee20_2 = _this.add.sprite(_this.handX, _this.handY, "20Rupee");
        _this.rupee20_2.name = "20R2";
        _this.vendorGroup.push(_this.rupee20_2.name);
        _this.vendorHand.addChild(_this.rupee20_2);

        _this.rupee20_2.inputEnabled = true;
        _this.rupee20_2.input.enableDrag();
        _this.rupee20_2.input.useHandCursor = true;
        _this.rupee20_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_170,
          _this
        );
      }
      if (target.name === "20") {
        _this.rupee20.destroy();
        _this.rupee20 = _this.add.sprite(_this.handX, _this.handY, "20Rupee");
        _this.rupee20.name = "20R";
        _this.vendorGroup.push(_this.rupee20.name);
        _this.vendorHand.addChild(_this.rupee20);

        _this.rupee20.inputEnabled = true;
        _this.rupee20.input.enableDrag();
        _this.rupee20.input.useHandCursor = true;
        _this.rupee20.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_170,
          _this
        );
      }
      if (target.name === "50_2") {
        _this.rupee50_2.destroy();
        _this.rupee50_2 = _this.add.sprite(_this.handX, _this.handY, "50Rupee");
        _this.rupee50_2.name = "50R2";
        _this.vendorGroup.push(_this.rupee50_2.name);
        _this.vendorHand.addChild(_this.rupee50_2);

        _this.rupee50_2.inputEnabled = true;
        _this.rupee50_2.input.enableDrag();
        _this.rupee50_2.input.useHandCursor = true;
        _this.rupee50_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_170,
          _this
        );
      }
      if (target.name === "50") {
        _this.rupee50.destroy();
        _this.rupee50 = _this.add.sprite(_this.handX, _this.handY, "50Rupee");
        _this.rupee50.name = "50R";
        _this.vendorGroup.push(_this.rupee50.name);
        _this.vendorHand.addChild(_this.rupee50);

        _this.rupee50.inputEnabled = true;
        _this.rupee50.input.enableDrag();
        _this.rupee50.input.useHandCursor = true;
        _this.rupee50.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_170,
          _this
        );
      }
      _this.handY -= 55;
    }
  },

  TakeBackMoneyFromVendor_170: function (target) {
    console.log("take money from vendor hand");
    for (let i = 0; i < _this.dragCount2; i++) {
      if (_this.vendorHand.getChildAt(i).name === target.name) {
        console.log(target.name);
        console.log(i);
        _this.tweeenPos = i;
      }
    }
    _this.dragCount2 -= 1;

    if (target.name == "5R2") {
      _this.MoneyInHand = target;
      _this.rupee5_2.destroy();
      _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
      _this.rupee5_2 = _this.add.sprite(640, 350, "5Rupee");
      _this.rupee5_2.alpha = 0;
      _this.rupee5_2.name = "5_2";
      _this.DragGroup2.addChild(_this.rupee5_2);

      _this.rupee5_2.inputEnabled = true;
      _this.rupee5_2.input.enableDrag();
      _this.rupee5_2.input.useHandCursor = true;
      _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
      _this.rupee5_2.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);
      _this.remainingGroup.addChild(_this.wallet5_2);
    }
    if (target.name == "5R") {
      _this.MoneyInHand = target;
      _this.rupee5.destroy();
      _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
      _this.rupee5 = _this.add.sprite(640, 280, "5Rupee");
      _this.rupee5.alpha = 0;
      _this.rupee5.name = "5";
      _this.DragGroup2.addChild(_this.rupee5);

      _this.rupee5.inputEnabled = true;
      _this.rupee5.input.enableDrag();
      _this.rupee5.input.useHandCursor = true;
      _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney170, _this);
      _this.rupee5.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);

      _this.remainingGroup.addChild(_this.wallet5);
    }
    if (target.name == "10R2") {
      _this.MoneyInHand = target;
      _this.rupee10_2.destroy();
      _this.wallet10_2 = _this.add.sprite(640, 210, "10Wallet");
      _this.rupee10_2 = _this.add.sprite(640, 210, "10Rupee");
      _this.rupee10_2.alpha = 0;
      _this.rupee10_2.name = "10_2";
      _this.DragGroup2.addChild(_this.rupee10_2);

      _this.rupee10_2.inputEnabled = true;
      _this.rupee10_2.input.enableDrag();
      _this.rupee10_2.input.useHandCursor = true;
      _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
      _this.rupee10_2.events.onDragStop.add(
        _this.TakeMoneyFromWallet170,
        _this
      );

      _this.remainingGroup.addChild(_this.wallet10_2);
    }
    if (target.name == "10R") {
      _this.MoneyInHand = target;
      _this.rupee10.destroy();
      _this.wallet10 = _this.add.sprite(640, 150, "10Wallet");
      _this.rupee10 = _this.add.sprite(640, 150, "10Rupee");
      _this.rupee10.alpha = 0;
      _this.rupee10.name = "10";
      _this.DragGroup2.addChild(_this.rupee10);

      _this.rupee10.inputEnabled = true;
      _this.rupee10.input.enableDrag();
      _this.rupee10.input.useHandCursor = true;
      _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney170, _this);
      _this.rupee10.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);

      _this.remainingGroup.addChild(_this.wallet10);
    }
    if (target.name == "20R2") {
      _this.MoneyInHand = target;
      _this.rupee20_2.destroy();
      _this.wallet20_2 = _this.add.sprite(400, 350, "20Wallet");
      _this.rupee20_2 = _this.add.sprite(400, 350, "20Rupee");
      _this.rupee20_2.alpha = 0;
      _this.rupee20_2.name = "20_2";
      _this.DragGroup2.addChild(_this.rupee20_2);

      _this.rupee20_2.inputEnabled = true;
      _this.rupee20_2.input.enableDrag();
      _this.rupee20_2.input.useHandCursor = true;
      _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
      _this.rupee20_2.events.onDragStop.add(
        _this.TakeMoneyFromWallet170,
        _this
      );

      _this.remainingGroup.addChild(_this.wallet20_2);
    }
    if (target.name == "20R") {
      _this.MoneyInHand = target;
      _this.rupee20.destroy();
      _this.wallet20 = _this.add.sprite(400, 280, "20Wallet");
      _this.rupee20 = _this.add.sprite(400, 280, "20Rupee");
      _this.rupee20.alpha = 0;
      _this.rupee20.name = "20";
      _this.DragGroup2.addChild(_this.rupee20);

      _this.rupee20.inputEnabled = true;
      _this.rupee20.input.enableDrag();
      _this.rupee20.input.useHandCursor = true;
      _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney170, _this);
      _this.rupee20.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);

      _this.remainingGroup.addChild(_this.wallet20);
    }
    if (target.name == "50R2") {
      _this.MoneyInHand = target;
      _this.rupee50_2.destroy();
      _this.wallet50_2 = _this.add.sprite(400, 210, "50Wallet");
      _this.rupee50_2 = _this.add.sprite(400, 210, "50Rupee");
      _this.rupee50_2.alpha = 0;
      _this.rupee50_2.name = "50_2";
      _this.DragGroup2.addChild(_this.rupee50_2);

      _this.rupee50_2.inputEnabled = true;
      _this.rupee50_2.input.enableDrag();
      _this.rupee50_2.input.useHandCursor = true;
      _this.rupee50_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
      _this.rupee50_2.events.onDragStop.add(
        _this.TakeMoneyFromWallet170,
        _this
      );
      _this.remainingGroup.addChild(_this.wallet50_2);
    }
    if (target.name == "50R") {
      _this.MoneyInHand = target;
      _this.rupee50.destroy();
      _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");
      _this.rupee50 = _this.add.sprite(400, 150, "50Rupee");
      _this.rupee50.alpha = 0;
      _this.rupee50.name = "50";
      _this.DragGroup2.addChild(_this.rupee50);

      _this.rupee50.inputEnabled = true;
      _this.rupee50.input.enableDrag();
      _this.rupee50.input.useHandCursor = true;
      _this.rupee50.events.onDragUpdate.add(_this.UpdateMoney170, _this);
      _this.rupee50.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);

      _this.remainingGroup.addChild(_this.wallet50);
    }

    var children = _this.vendorHand.children;
    var lastChild = children[children.length - 1];

    for (let i = _this.tweeenPos; i < _this.dragCount2; i++) {
      // if (_this.vendorHand.getChildAt(i).y === 230) {
      //     console.log('no tween 1st one')
      //     console.log('lastChild')
      // } else if (_this.vendorHand.getChildAt(i).y < _this.vendorHand.getChildAt(i - 1).y) {
      //     var tween = _this.add.tween(_this.vendorHand.getChildAt(i + 1));
      //     tween.to({ x: 150, y: _this.vendorHand.getChildAt(i).y + 55 }, 500, 'Linear', true, 0);
      // } else {
      //     console.log('no tweeen')
      // }

      var tween = _this.add.tween(_this.vendorHand.getChildAt(i));
      tween.to(
        { x: 150, y: _this.vendorHand.getChildAt(i).y + 55 },
        500,
        "Linear",
        true,
        0
      );
    }

    // // Assuming you have an array
    // var myArray = [1, 2, 3, 4];

    // Function to remove the ith position element from the array
    function removeElementAtIndex(arr, index) {
      if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
      }
    }

    // Example usage
    var indexToRemove = _this.tweeenPos; // Remove the element at index 2 (3rd element)
    removeElementAtIndex(_this.vendorGroup, indexToRemove);
    console.log(_this.vendorGroup, "_this.vendorGroup"); // Output: [1, 2, 4]

    _this.handY += 55;
  },

  requiredForDragObjects200: function () {
    _this.DragGroup = _this.add.group();
    _this.DragGroup2 = _this.add.group();

    console.log("requiredForDragObjects");

    _this.vendorGroup = [];

    _this.remainingGroup = _this.add.group();

    _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
    _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
    _this.wallet10_2 = _this.add.sprite(640, 210, "10Wallet");
    _this.wallet10 = _this.add.sprite(640, 150, "10Wallet");
    _this.wallet20 = _this.add.sprite(400, 350, "20Wallet");
    _this.wallet50_3 = _this.add.sprite(400, 280, "50Wallet");
    _this.wallet50_2 = _this.add.sprite(400, 210, "50Wallet");
    _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");

    _this.remainingGroup.addChild(_this.wallet5_2);
    _this.remainingGroup.addChild(_this.wallet5);
    _this.remainingGroup.addChild(_this.wallet10_2);
    _this.remainingGroup.addChild(_this.wallet10);
    _this.remainingGroup.addChild(_this.wallet20);
    _this.remainingGroup.addChild(_this.wallet50_3);
    _this.remainingGroup.addChild(_this.wallet50_2);
    _this.remainingGroup.addChild(_this.wallet50);

    _this.rupee5_2 = _this.add.sprite(640, 350, "5Rupee");
    _this.DragGroup.addChild(_this.rupee5_2);
    _this.rupee5 = _this.add.sprite(640, 280, "5Rupee");
    _this.DragGroup.addChild(_this.rupee5);
    _this.rupee10_2 = _this.add.sprite(640, 210, "10Rupee");
    _this.DragGroup.addChild(_this.rupee10_2);
    _this.rupee10 = _this.add.sprite(640, 150, "10Rupee");
    _this.DragGroup.addChild(_this.rupee10);
    _this.rupee20 = _this.add.sprite(400, 350, "20Rupee");
    _this.DragGroup.addChild(_this.rupee20);
    _this.rupee50_3 = _this.add.sprite(400, 280, "20Rupee");
    _this.DragGroup.addChild(_this.rupee50_3);
    _this.rupee50_2 = _this.add.sprite(400, 210, "50Rupee");
    _this.DragGroup.addChild(_this.rupee50_2);
    _this.rupee50 = _this.add.sprite(400, 150, "50Rupee");
    _this.DragGroup.addChild(_this.rupee50);

    _this.rupee5_2.alpha = 0;
    _this.rupee5.alpha = 0;
    _this.rupee10_2.alpha = 0;
    _this.rupee10.alpha = 0;
    _this.rupee20.alpha = 0;
    _this.rupee50_3.alpha = 0;
    _this.rupee50_2.alpha = 0;
    _this.rupee50.alpha = 0;

    _this.rupee5_2.name = "5_2";
    _this.rupee5.name = "5";
    _this.rupee10_2.name = "10_2";
    _this.rupee10.name = "10";
    _this.rupee20.name = "20";
    _this.rupee50_3.name = "50_3";
    _this.rupee50_2.name = "50_2";
    _this.rupee50.name = "50";

    _this.rupee50.inputEnabled = true;
    _this.rupee50.input.enableDrag();
    _this.rupee50.input.useHandCursor = true;
    _this.rupee50.events.onDragUpdate.add(_this.UpdateMoney200, _this);
    _this.rupee50.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);

    _this.rupee50_2.inputEnabled = true;
    _this.rupee50_2.input.enableDrag();
    _this.rupee50_2.input.useHandCursor = true;
    _this.rupee50_2.events.onDragUpdate.add(_this.UpdateMoney200, _this);
    _this.rupee50_2.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);

    _this.rupee50_3.inputEnabled = true;
    _this.rupee50_3.input.enableDrag();
    _this.rupee50_3.input.useHandCursor = true;
    _this.rupee50_3.events.onDragUpdate.add(_this.UpdateMoney200, _this);
    _this.rupee50_3.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);

    _this.rupee20.inputEnabled = true;
    _this.rupee20.input.enableDrag();
    _this.rupee20.input.useHandCursor = true;
    _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney200, _this);
    _this.rupee20.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);

    _this.rupee10.inputEnabled = true;
    _this.rupee10.input.enableDrag();
    _this.rupee10.input.useHandCursor = true;
    _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney200, _this);
    _this.rupee10.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);

    _this.rupee10_2.inputEnabled = true;
    _this.rupee10_2.input.enableDrag();
    _this.rupee10_2.input.useHandCursor = true;
    _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney200, _this);
    _this.rupee10_2.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);

    _this.rupee5.inputEnabled = true;
    _this.rupee5.input.enableDrag();
    _this.rupee5.input.useHandCursor = true;
    _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney200, _this);
    _this.rupee5.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);

    _this.rupee5_2.inputEnabled = true;
    _this.rupee5_2.input.enableDrag();
    _this.rupee5_2.input.useHandCursor = true;
    _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney200, _this);
    _this.rupee5_2.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);
  },

  UpdateMoney200: function (target) {
    _this.world.bringToTop(target);
    if (target.name === "5_2") {
      _this.wallet5_2.destroy();
    }
    if (target.name === "5") {
      _this.wallet5.destroy();
    }
    if (target.name === "10_2") {
      _this.wallet10_2.destroy();
    }
    if (target.name === "10") {
      _this.wallet10.destroy();
    }
    if (target.name === "20") {
      _this.wallet20.destroy();
    }
    if (target.name === "50_3") {
      _this.wallet50_3.destroy();
    }
    if (target.name === "50_2") {
      _this.wallet50_2.destroy();
    }
    if (target.name === "50") {
      _this.wallet50.destroy();
    }
    _this.world.bringToTop(target);
    target.alpha = 1;
  },

  TakeMoneyFromWallet200: function (target) {
    _this.world.bringToTop(target);
    _this.dragCount2++;

    if (_this.dragCount2 > 4) {
      _this.noofAttempts++;
      _this.wrongSound.play();

      _this.dragCount2 -= 1;

      if (target.name === "5_2") {
        _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
        _this.remainingGroup.addChild(_this.wallet5_2);
        _this.rupee5_2 = _this.add.sprite(640, 350, "5Rupee");
        _this.rupee5_2.name = "5_2";
        _this.DragGroup.addChild(_this.rupee5_2);

        _this.rupee5_2.alpha = 0;

        _this.rupee5_2.inputEnabled = true;
        _this.rupee5_2.input.enableDrag();
        _this.rupee5_2.input.useHandCursor = true;
        _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee5_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      if (target.name === "5") {
        _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
        _this.remainingGroup.addChild(_this.wallet5);
        _this.rupee5 = _this.add.sprite(640, 280, "5Rupee");
        _this.rupee5.name = "5";
        _this.DragGroup.addChild(_this.rupee5);

        _this.rupee5.alpha = 0;

        _this.rupee5.inputEnabled = true;
        _this.rupee5.input.enableDrag();
        _this.rupee5.input.useHandCursor = true;
        _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee5.events.onDragStop.add(_this.TakeMoneyFromWallet170, _this);
      }
      if (target.name === "10_2") {
        _this.wallet10_2 = _this.add.sprite(640, 210, "10Wallet");
        _this.remainingGroup.addChild(_this.wallet10_2);
        _this.rupee10_2 = _this.add.sprite(640, 210, "10Rupee");
        _this.rupee10_2.name = "10_2";
        _this.DragGroup.addChild(_this.rupee10_2);

        _this.rupee10_2.alpha = 0;

        _this.rupee10_2.inputEnabled = true;
        _this.rupee10_2.input.enableDrag();
        _this.rupee10_2.input.useHandCursor = true;
        _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee10_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      if (target.name === "10") {
        _this.wallet10 = _this.add.sprite(640, 150, "10Wallet");
        _this.remainingGroup.addChild(_this.wallet10);
        _this.rupee10 = _this.add.sprite(640, 150, "10Rupee");
        _this.rupee10.name = "10";
        _this.DragGroup.addChild(_this.rupee10);

        _this.rupee10.alpha = 0;

        _this.rupee10.inputEnabled = true;
        _this.rupee10.input.enableDrag();
        _this.rupee10.input.useHandCursor = true;
        _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee10.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      if (target.name === "20") {
        _this.wallet20 = _this.add.sprite(400, 350, "20Wallet");
        _this.remainingGroup.addChild(_this.wallet20);
        _this.rupee20 = _this.add.sprite(400, 350, "20Rupee");
        _this.rupee20.name = "20";
        _this.DragGroup.addChild(_this.rupee20);

        _this.rupee20.alpha = 0;

        _this.rupee20.inputEnabled = true;
        _this.rupee20.input.enableDrag();
        _this.rupee20.input.useHandCursor = true;
        _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee20.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      if (target.name === "50_3") {
        _this.wallet50_3 = _this.add.sprite(400, 280, "50Wallet");
        _this.remainingGroup.addChild(_this.wallet50_3);
        _this.rupee50_3 = _this.add.sprite(400, 280, "50Rupee");
        _this.rupee50_3.name = "50_3";
        _this.DragGroup.addChild(_this.rupee50_3);

        _this.rupee50_3.alpha = 0;

        _this.rupee50_3.inputEnabled = true;
        _this.rupee50_3.input.enableDrag();
        _this.rupee50_3.input.useHandCursor = true;
        _this.rupee50_3.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee50_3.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      if (target.name === "50_2") {
        _this.wallet50_2 = _this.add.sprite(400, 210, "50Wallet");
        _this.remainingGroup.addChild(_this.wallet50_2);
        _this.rupee50_2 = _this.add.sprite(400, 210, "50Rupee");
        _this.rupee50_2.name = "50_2";
        _this.DragGroup.addChild(_this.rupee50_2);

        _this.rupee50_2.alpha = 0;

        _this.rupee50_2.inputEnabled = true;
        _this.rupee50_2.input.enableDrag();
        _this.rupee50_2.input.useHandCursor = true;
        _this.rupee50_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee50_2.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      if (target.name === "50") {
        _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");
        _this.remainingGroup.addChild(_this.wallet50);
        _this.rupee50 = _this.add.sprite(400, 150, "50Rupee");
        _this.rupee50.name = "50";
        _this.DragGroup.addChild(_this.rupee50);

        _this.rupee50.alpha = 0;

        _this.rupee50.inputEnabled = true;
        _this.rupee50.input.enableDrag();
        _this.rupee50.input.useHandCursor = true;
        _this.rupee50.events.onDragUpdate.add(_this.UpdateMoney170, _this);
        _this.rupee50.events.onDragStop.add(
          _this.TakeMoneyFromWallet170,
          _this
        );
      }
      target.destroy();
    } else {
      _this.snapSound.play();
      if (target.name === "5_2") {
        _this.rupee5_2.destroy();
        _this.rupee5_2 = _this.add.sprite(_this.handX, _this.handY, "5Rupee");
        _this.rupee5_2.name = "5R2";
        _this.vendorGroup.push(_this.rupee5_2.name);
        _this.vendorHand.addChild(_this.rupee5_2);

        _this.rupee5_2.inputEnabled = true;
        _this.rupee5_2.input.enableDrag();
        _this.rupee5_2.input.useHandCursor = true;
        _this.rupee5_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_200,
          _this
        );
      }
      if (target.name === "5") {
        _this.rupee5.destroy();
        _this.rupee5 = _this.add.sprite(_this.handX, _this.handY, "5Rupee");
        _this.rupee5.name = "5R";
        _this.vendorGroup.push(_this.rupee5.name);
        _this.vendorHand.addChild(_this.rupee5);

        _this.rupee5.inputEnabled = true;
        _this.rupee5.input.enableDrag();
        _this.rupee5.input.useHandCursor = true;
        _this.rupee5.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_200,
          _this
        );
      }
      if (target.name === "10_2") {
        _this.rupee10_2.destroy();
        _this.rupee10_2 = _this.add.sprite(_this.handX, _this.handY, "10Rupee");
        _this.rupee10_2.name = "10R2";
        _this.vendorGroup.push(_this.rupee10_2.name);
        _this.vendorHand.addChild(_this.rupee10_2);

        _this.rupee10_2.inputEnabled = true;
        _this.rupee10_2.input.enableDrag();
        _this.rupee10_2.input.useHandCursor = true;
        _this.rupee10_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_200,
          _this
        );
      }
      if (target.name === "10") {
        _this.rupee10.destroy();
        _this.rupee10 = _this.add.sprite(_this.handX, _this.handY, "10Rupee");
        _this.rupee10.name = "10R";
        _this.vendorGroup.push(_this.rupee10.name);
        _this.vendorHand.addChild(_this.rupee10);

        _this.rupee10.inputEnabled = true;
        _this.rupee10.input.enableDrag();
        _this.rupee10.input.useHandCursor = true;
        _this.rupee10.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_200,
          _this
        );
      }
      if (target.name === "20") {
        _this.rupee20.destroy();
        _this.rupee20 = _this.add.sprite(_this.handX, _this.handY, "20Rupee");
        _this.rupee20.name = "20R";
        _this.vendorGroup.push(_this.rupee20.name);
        _this.vendorHand.addChild(_this.rupee20);

        _this.rupee20.inputEnabled = true;
        _this.rupee20.input.enableDrag();
        _this.rupee20.input.useHandCursor = true;
        _this.rupee20.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_170,
          _this
        );
      }
      if (target.name === "50_3") {
        _this.rupee50_3.destroy();
        _this.rupee50_3 = _this.add.sprite(_this.handX, _this.handY, "50Rupee");
        _this.rupee50_3.name = "50R3";
        _this.vendorGroup.push(_this.rupee50_3.name);
        _this.vendorHand.addChild(_this.rupee50_3);

        _this.rupee50_3.inputEnabled = true;
        _this.rupee50_3.input.enableDrag();
        _this.rupee50_3.input.useHandCursor = true;
        _this.rupee50_3.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_200,
          _this
        );
      }
      if (target.name === "50_2") {
        _this.rupee50_2.destroy();
        _this.rupee50_2 = _this.add.sprite(_this.handX, _this.handY, "50Rupee");
        _this.rupee50_2.name = "50R2";
        _this.vendorGroup.push(_this.rupee50_2.name);
        _this.vendorHand.addChild(_this.rupee50_2);

        _this.rupee50_2.inputEnabled = true;
        _this.rupee50_2.input.enableDrag();
        _this.rupee50_2.input.useHandCursor = true;
        _this.rupee50_2.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_200,
          _this
        );
      }
      if (target.name === "50") {
        _this.rupee50.destroy();
        _this.rupee50 = _this.add.sprite(_this.handX, _this.handY, "50Rupee");
        _this.rupee50.name = "50R";
        _this.vendorGroup.push(_this.rupee50.name);
        _this.vendorHand.addChild(_this.rupee50);

        _this.rupee50.inputEnabled = true;
        _this.rupee50.input.enableDrag();
        _this.rupee50.input.useHandCursor = true;
        _this.rupee50.events.onDragStop.add(
          _this.TakeBackMoneyFromVendor_200,
          _this
        );
      }
      _this.handY -= 55;
    }
  },

  TakeBackMoneyFromVendor_200: function (target) {
    console.log("take money from vendor hand");
    for (let i = 0; i < _this.dragCount2; i++) {
      if (_this.vendorHand.getChildAt(i).name === target.name) {
        console.log(target.name);
        console.log(i);
        _this.tweeenPos = i;
      }
    }
    _this.dragCount2 -= 1;

    if (target.name == "5R2") {
      _this.MoneyInHand = target;
      _this.rupee5_2.destroy();
      _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
      _this.rupee5_2 = _this.add.sprite(640, 350, "5Rupee");
      _this.rupee5_2.alpha = 0;
      _this.rupee5_2.name = "5_2";
      _this.DragGroup2.addChild(_this.rupee5_2);

      _this.rupee5_2.inputEnabled = true;
      _this.rupee5_2.input.enableDrag();
      _this.rupee5_2.input.useHandCursor = true;
      _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney200, _this);
      _this.rupee5_2.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);
      _this.remainingGroup.addChild(_this.wallet5_2);
    }
    if (target.name == "5R") {
      _this.MoneyInHand = target;
      _this.rupee5.destroy();
      _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
      _this.rupee5 = _this.add.sprite(640, 280, "5Rupee");
      _this.rupee5.alpha = 0;
      _this.rupee5.name = "5";
      _this.DragGroup2.addChild(_this.rupee5);

      _this.rupee5.inputEnabled = true;
      _this.rupee5.input.enableDrag();
      _this.rupee5.input.useHandCursor = true;
      _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney200, _this);
      _this.rupee5.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);

      _this.remainingGroup.addChild(_this.wallet5);
    }
    if (target.name == "10R2") {
      _this.MoneyInHand = target;
      _this.rupee10_2.destroy();
      _this.wallet10_2 = _this.add.sprite(640, 210, "10Wallet");
      _this.rupee10_2 = _this.add.sprite(640, 210, "10Rupee");
      _this.rupee10_2.alpha = 0;
      _this.rupee10_2.name = "10_2";
      _this.DragGroup2.addChild(_this.rupee10_2);

      _this.rupee10_2.inputEnabled = true;
      _this.rupee10_2.input.enableDrag();
      _this.rupee10_2.input.useHandCursor = true;
      _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney200, _this);
      _this.rupee10_2.events.onDragStop.add(
        _this.TakeMoneyFromWallet200,
        _this
      );

      _this.remainingGroup.addChild(_this.wallet10_2);
    }
    if (target.name == "10R") {
      _this.MoneyInHand = target;
      _this.rupee10.destroy();
      _this.wallet10 = _this.add.sprite(640, 150, "10Wallet");
      _this.rupee10 = _this.add.sprite(640, 150, "10Rupee");
      _this.rupee10.alpha = 0;
      _this.rupee10.name = "10";
      _this.DragGroup2.addChild(_this.rupee10);

      _this.rupee10.inputEnabled = true;
      _this.rupee10.input.enableDrag();
      _this.rupee10.input.useHandCursor = true;
      _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney200, _this);
      _this.rupee10.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);

      _this.remainingGroup.addChild(_this.wallet10);
    }
    if (target.name == "20R") {
      _this.MoneyInHand = target;
      _this.rupee20.destroy();
      _this.wallet20 = _this.add.sprite(400, 350, "20Wallet");
      _this.rupee20 = _this.add.sprite(400, 350, "20Rupee");
      _this.rupee20.alpha = 0;
      _this.rupee20.name = "20";
      _this.DragGroup2.addChild(_this.rupee20);

      _this.rupee20.inputEnabled = true;
      _this.rupee20.input.enableDrag();
      _this.rupee20.input.useHandCursor = true;
      _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney200, _this);
      _this.rupee20.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);

      _this.remainingGroup.addChild(_this.wallet20);
    }
    if (target.name == "50R3") {
      _this.MoneyInHand = target;
      _this.rupee50_3.destroy();
      _this.wallet50_3 = _this.add.sprite(400, 280, "50Wallet");
      _this.rupee50_3 = _this.add.sprite(400, 280, "50Rupee");
      _this.rupee50_3.alpha = 0;
      _this.rupee50_3.name = "50_3";
      _this.DragGroup2.addChild(_this.rupee50_3);

      _this.rupee50_3.inputEnabled = true;
      _this.rupee50_3.input.enableDrag();
      _this.rupee50_3.input.useHandCursor = true;
      _this.rupee50_3.events.onDragUpdate.add(_this.UpdateMoney200, _this);
      _this.rupee50_3.events.onDragStop.add(
        _this.TakeMoneyFromWallet200,
        _this
      );
      _this.remainingGroup.addChild(_this.wallet50_3);
    }
    if (target.name == "50R2") {
      _this.MoneyInHand = target;
      _this.rupee50_2.destroy();
      _this.wallet50_2 = _this.add.sprite(400, 210, "50Wallet");
      _this.rupee50_2 = _this.add.sprite(400, 210, "50Rupee");
      _this.rupee50_2.alpha = 0;
      _this.rupee50_2.name = "50_2";
      _this.DragGroup2.addChild(_this.rupee50_2);

      _this.rupee50_2.inputEnabled = true;
      _this.rupee50_2.input.enableDrag();
      _this.rupee50_2.input.useHandCursor = true;
      _this.rupee50_2.events.onDragUpdate.add(_this.UpdateMoney200, _this);
      _this.rupee50_2.events.onDragStop.add(
        _this.TakeMoneyFromWallet200,
        _this
      );
      _this.remainingGroup.addChild(_this.wallet50_2);
    }
    if (target.name == "50R") {
      _this.MoneyInHand = target;
      _this.rupee50.destroy();
      _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");
      _this.rupee50 = _this.add.sprite(400, 150, "50Rupee");
      _this.rupee50.alpha = 0;
      _this.rupee50.name = "50";
      _this.DragGroup2.addChild(_this.rupee50);

      _this.rupee50.inputEnabled = true;
      _this.rupee50.input.enableDrag();
      _this.rupee50.input.useHandCursor = true;
      _this.rupee50.events.onDragUpdate.add(_this.UpdateMoney200, _this);
      _this.rupee50.events.onDragStop.add(_this.TakeMoneyFromWallet200, _this);

      _this.remainingGroup.addChild(_this.wallet50);
    }

    var children = _this.vendorHand.children;
    var lastChild = children[children.length - 1];

    for (let i = _this.tweeenPos; i < _this.dragCount2; i++) {
      // if (_this.vendorHand.getChildAt(i).y === 230) {
      //     console.log('no tween 1st one')
      //     console.log('lastChild')
      // } else if (_this.vendorHand.getChildAt(i).y < _this.vendorHand.getChildAt(i - 1).y) {
      //     var tween = _this.add.tween(_this.vendorHand.getChildAt(i + 1));
      //     tween.to({ x: 150, y: _this.vendorHand.getChildAt(i).y + 55 }, 500, 'Linear', true, 0);
      // } else {
      //     console.log('no tweeen')
      // }

      var tween = _this.add.tween(_this.vendorHand.getChildAt(i));
      tween.to(
        { x: 150, y: _this.vendorHand.getChildAt(i).y + 55 },
        500,
        "Linear",
        true,
        0
      );
    }

    // // Assuming you have an array
    // var myArray = [1, 2, 3, 4];

    // Function to remove the ith position element from the array
    function removeElementAtIndex(arr, index) {
      if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
      }
    }

    // Example usage
    var indexToRemove = _this.tweeenPos; // Remove the element at index 2 (3rd element)
    removeElementAtIndex(_this.vendorGroup, indexToRemove);
    console.log(_this.vendorGroup, "_this.vendorGroup"); // Output: [1, 2, 4]

    _this.handY += 55;
  },

  tickSecondEvaluation: function (target) {
    console.log("tick second");
    _this.clickSound.play();

    _this.payedValue = 0;
    _this.totalPayed = 0;

    for (let i = 0; i < _this.vendorGroup.length; i++) {
      if (
        _this.vendorGroup[i] == "5R" ||
        _this.vendorGroup[i] == "5R2" ||
        _this.vendorGroup[i] == "5R3"
      ) {
        _this.payedValue = 5;
      }
      if (
        _this.vendorGroup[i] == "10R" ||
        _this.vendorGroup[i] == "10R2" ||
        _this.vendorGroup[i] == "10R3"
      ) {
        _this.payedValue = 10;
      }
      if (
        _this.vendorGroup[i] == "20R" ||
        _this.vendorGroup[i] == "20R2" ||
        _this.vendorGroup[i] == "20R3"
      ) {
        _this.payedValue = 20;
      }
      if (
        _this.vendorGroup[i] == "50R" ||
        _this.vendorGroup[i] == "50R2" ||
        _this.vendorGroup[i] == "50R3"
      ) {
        _this.payedValue = 50;
      }

      _this.totalPayed = _this.totalPayed + _this.payedValue;
    }

    console.log(_this.totalPayed);

    if (_this.totalPayed === _this.itemPrice) {
      target.events.onInputDown.removeAll();
      target.destroy();
      _this.counterCelebrationSound.currentTime = 0;
      _this.counterCelebrationSound.play();

      _this.vendorHandTween = _this.add.tween(_this.vendorHand);
      _this.vendorHandTween.to({ x: -400, y: -230 }, 1500, "Linear", true, 0);

      _this.valueTween = _this.add.tween(_this.valueMachine);
      _this.valueTween.to({ x: 70, y: 680 }, 1500, "Linear", true, 0);

      _this.DragGroup.destroy();
      _this.DragGroup2.destroy();

      _this.AnswerBox1 = _this.add.sprite(380, 10, "TextBox");
      _this.AnswerBox1.scale.setTo(0.85, 0.88);
      _this.Wallet.addChild(_this.AnswerBox1);

      _this.AnswerBox1.inputEnabled = true;

      _this.AnswerBox1.input.useHandCursor = true;
      _this.time.events.add(800, function () {
        _this.addNumberPad3();
      });

      _this.AnswerBox1.events.onInputDown.add(function () {
        _this.clickSound.play();
        _this.AnswerBox1.frame = 1;
        _this.wrongbtn.events.onInputDown.removeAll();
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked3, _this);
        for (let i = 1; i <= 12; i++) {
          _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
          _this.numGroup
            .getChildAt(i)
            .events.onInputDown.add(_this.numClicked3, _this);
        }
      });

      if (_this.QuestionCount === 0 && _this.itemCount === 0) {
        _this.time.events.add(1000, function () {
          _this.Ask_Question6.play();
        });
      }

      _this.Question_flag = 6;

      _this.handX = 150;
      _this.handY = 230;
    } else {
      // if (_this.DragGroup2.length > 0) {
      //     _this.DragGroup2.destroy();
      //     _this.DragGroup2 = _this.add.group();
      // }
      _this.handX = 150;
      _this.handY = 230;
      _this.dragCount2 = 0;
      _this.totalPayed = 0;
      _this.payedValue = 0;
      _this.noofAttempts++;
      _this.wrongSound.play();

      if (_this.totalDenominationInWallet === 100) {
        _this.resetWallet100();
      }
      if (_this.totalDenominationInWallet === 125) {
        _this.resetWallet125();
      }
      if (_this.totalDenominationInWallet === 170) {
        _this.resetWallet170();
      }
      if (_this.totalDenominationInWallet === 200) {
        _this.resetWallet200();
      }
    }
  },

  resetWallet100: function () {
    console.log("reset for 100");
    for (let i = 0; i < _this.vendorGroup.length; i++) {
      if (_this.vendorHand.getChildAt(i).name == "5R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 350 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee5_2.destroy();
          _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
          _this.rupee5_2 = _this.add.sprite(640, 350, "5Rupee");
          _this.rupee5_2.alpha = 0;
          _this.rupee5_2.name = "5_2";
          _this.DragGroup2.addChild(_this.rupee5_2);

          _this.rupee5_2.inputEnabled = true;
          _this.rupee5_2.input.enableDrag();
          _this.rupee5_2.input.useHandCursor = true;
          _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
          _this.rupee5_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet100,
            _this
          );
          _this.remainingGroup.addChild(_this.wallet5_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "5R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 280 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee5.destroy();
          _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
          _this.rupee5 = _this.add.sprite(640, 280, "5Rupee");
          _this.rupee5.alpha = 0;
          _this.rupee5.name = "5";
          _this.DragGroup2.addChild(_this.rupee5);

          _this.rupee5.inputEnabled = true;
          _this.rupee5.input.enableDrag();
          _this.rupee5.input.useHandCursor = true;
          _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney100, _this);
          _this.rupee5.events.onDragStop.add(
            _this.TakeMoneyFromWallet100,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet5);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "10R3") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 210 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee10_3.destroy();
          _this.wallet10_3 = _this.add.sprite(640, 210, "10Wallet");
          _this.rupee10_3 = _this.add.sprite(640, 210, "10Rupee");
          _this.rupee10_3.alpha = 0;
          _this.rupee10_3.name = "10_3";
          _this.DragGroup2.addChild(_this.rupee10_3);

          _this.rupee10_3.inputEnabled = true;
          _this.rupee10_3.input.enableDrag();
          _this.rupee10_3.input.useHandCursor = true;
          _this.rupee10_3.events.onDragUpdate.add(_this.UpdateMoney100, _this);
          _this.rupee10_3.events.onDragStop.add(
            _this.TakeMoneyFromWallet100,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet10_3);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "10R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 150 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee10_2.destroy();
          _this.wallet10_2 = _this.add.sprite(640, 150, "10Wallet");
          _this.rupee10_2 = _this.add.sprite(640, 150, "10Rupee");
          _this.rupee10_2.alpha = 0;
          _this.rupee10_2.name = "10_2";
          _this.DragGroup2.addChild(_this.rupee10_2);

          _this.rupee10_2.inputEnabled = true;
          _this.rupee10_2.input.enableDrag();
          _this.rupee10_2.input.useHandCursor = true;
          _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
          _this.rupee10_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet100,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet10_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "10R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 350 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee10.destroy();
          _this.wallet10 = _this.add.sprite(400, 350, "10Wallet");
          _this.rupee10 = _this.add.sprite(400, 350, "10Rupee");
          _this.rupee10.alpha = 0;
          _this.rupee10.name = "10";
          _this.DragGroup2.addChild(_this.rupee10);

          _this.rupee10.inputEnabled = true;
          _this.rupee10.input.enableDrag();
          _this.rupee10.input.useHandCursor = true;
          _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney100, _this);
          _this.rupee10.events.onDragStop.add(
            _this.TakeMoneyFromWallet100,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet10);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "20R3") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 280 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee20_3.destroy();
          _this.wallet20_3 = _this.add.sprite(400, 280, "20Wallet");
          _this.rupee20_3 = _this.add.sprite(400, 280, "20Rupee");
          _this.rupee20_3.alpha = 0;
          _this.rupee20_3.name = "20_3";
          _this.DragGroup2.addChild(_this.rupee20_3);

          _this.rupee20_3.inputEnabled = true;
          _this.rupee20_3.input.enableDrag();
          _this.rupee20_3.input.useHandCursor = true;
          _this.rupee20_3.events.onDragUpdate.add(_this.UpdateMoney100, _this);
          _this.rupee20_3.events.onDragStop.add(
            _this.TakeMoneyFromWallet100,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet20_3);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "20R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 210 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee20_2.destroy();
          _this.wallet20_2 = _this.add.sprite(400, 210, "20Wallet");
          _this.rupee20_2 = _this.add.sprite(400, 210, "20Rupee");
          _this.rupee20_2.alpha = 0;
          _this.rupee20_2.name = "20_2";
          _this.DragGroup2.addChild(_this.rupee20_2);

          _this.rupee20_2.inputEnabled = true;
          _this.rupee20_2.input.enableDrag();
          _this.rupee20_2.input.useHandCursor = true;
          _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney100, _this);
          _this.rupee20_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet100,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet20_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "20R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 150 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee20.destroy();
          _this.wallet20 = _this.add.sprite(400, 150, "20Wallet");
          _this.rupee20 = _this.add.sprite(400, 150, "20Rupee");
          _this.rupee20.alpha = 0;
          _this.rupee20.name = "20";
          _this.DragGroup2.addChild(_this.rupee20);

          _this.rupee20.inputEnabled = true;
          _this.rupee20.input.enableDrag();
          _this.rupee20.input.useHandCursor = true;
          _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney100, _this);
          _this.rupee20.events.onDragStop.add(
            _this.TakeMoneyFromWallet100,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet20);
        });
      }
    }
    _this.vendorGroup.length = 0;
  },

  resetWallet125: function () {
    console.log("reset for 125");
    for (let i = 0; i < _this.vendorGroup.length; i++) {
      if (_this.vendorHand.getChildAt(i).name == "5R3") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 350 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee5_3.destroy();
          _this.wallet5_3 = _this.add.sprite(640, 350, "5Wallet");
          _this.rupee5_3 = _this.add.sprite(640, 350, "5Rupee");
          _this.rupee5_3.alpha = 0;
          _this.rupee5_3.name = "5_3";
          _this.DragGroup2.addChild(_this.rupee5_3);

          _this.rupee5_3.inputEnabled = true;
          _this.rupee5_3.input.enableDrag();
          _this.rupee5_3.input.useHandCursor = true;
          _this.rupee5_3.events.onDragUpdate.add(_this.UpdateMoney125, _this);
          _this.rupee5_3.events.onDragStop.add(
            _this.TakeMoneyFromWallet125,
            _this
          );
          _this.remainingGroup.addChild(_this.wallet5_3);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "5R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 280 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee5_2.destroy();
          _this.wallet5_2 = _this.add.sprite(640, 280, "5Wallet");
          _this.rupee5_2 = _this.add.sprite(640, 280, "5Rupee");
          _this.rupee5_2.alpha = 0;
          _this.rupee5_2.name = "5_2";
          _this.DragGroup2.addChild(_this.rupee5_2);

          _this.rupee5_2.inputEnabled = true;
          _this.rupee5_2.input.enableDrag();
          _this.rupee5_2.input.useHandCursor = true;
          _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney125, _this);
          _this.rupee5_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet125,
            _this
          );
          _this.remainingGroup.addChild(_this.wallet5_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "5R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 210 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee5.destroy();
          _this.wallet5 = _this.add.sprite(640, 210, "5Wallet");
          _this.rupee5 = _this.add.sprite(640, 210, "5Rupee");
          _this.rupee5.alpha = 0;
          _this.rupee5.name = "5";
          _this.DragGroup2.addChild(_this.rupee5);

          _this.rupee5.inputEnabled = true;
          _this.rupee5.input.enableDrag();
          _this.rupee5.input.useHandCursor = true;
          _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney125, _this);
          _this.rupee5.events.onDragStop.add(
            _this.TakeMoneyFromWallet125,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet5);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "10R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 150 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee10_2.destroy();
          _this.wallet10_2 = _this.add.sprite(640, 150, "10Wallet");
          _this.rupee10_2 = _this.add.sprite(640, 150, "10Rupee");
          _this.rupee10_2.alpha = 0;
          _this.rupee10_2.name = "10_2";
          _this.DragGroup2.addChild(_this.rupee10_2);

          _this.rupee10_2.inputEnabled = true;
          _this.rupee10_2.input.enableDrag();
          _this.rupee10_2.input.useHandCursor = true;
          _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney125, _this);
          _this.rupee10_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet125,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet10_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "10R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 350 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee10.destroy();
          _this.wallet10 = _this.add.sprite(400, 350, "10Wallet");
          _this.rupee10 = _this.add.sprite(400, 350, "10Rupee");
          _this.rupee10.alpha = 0;
          _this.rupee10.name = "10";
          _this.DragGroup2.addChild(_this.rupee10);

          _this.rupee10.inputEnabled = true;
          _this.rupee10.input.enableDrag();
          _this.rupee10.input.useHandCursor = true;
          _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney125, _this);
          _this.rupee10.events.onDragStop.add(
            _this.TakeMoneyFromWallet125,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet10);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "20R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 280 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee20_2.destroy();
          _this.wallet20_2 = _this.add.sprite(400, 280, "20Wallet");
          _this.rupee20_2 = _this.add.sprite(400, 280, "20Rupee");
          _this.rupee20_2.alpha = 0;
          _this.rupee20_2.name = "20_2";
          _this.DragGroup2.addChild(_this.rupee20_2);

          _this.rupee20_2.inputEnabled = true;
          _this.rupee20_2.input.enableDrag();
          _this.rupee20_2.input.useHandCursor = true;
          _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney125, _this);
          _this.rupee20_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet125,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet20_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "20R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 210 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee20.destroy();
          _this.wallet20 = _this.add.sprite(400, 210, "20Wallet");
          _this.rupee20 = _this.add.sprite(400, 210, "20Rupee");
          _this.rupee20.alpha = 0;
          _this.rupee20.name = "20";
          _this.DragGroup2.addChild(_this.rupee20);

          _this.rupee20.inputEnabled = true;
          _this.rupee20.input.enableDrag();
          _this.rupee20.input.useHandCursor = true;
          _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney125, _this);
          _this.rupee20.events.onDragStop.add(
            _this.TakeMoneyFromWallet125,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet20);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "50R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 150 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee50.destroy();
          _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");
          _this.rupee50 = _this.add.sprite(400, 150, "50Rupee");
          _this.rupee50.alpha = 0;
          _this.rupee50.name = "50";
          _this.DragGroup2.addChild(_this.rupee50);

          _this.rupee50.inputEnabled = true;
          _this.rupee50.input.enableDrag();
          _this.rupee50.input.useHandCursor = true;
          _this.rupee50.events.onDragUpdate.add(_this.UpdateMoney125, _this);
          _this.rupee50.events.onDragStop.add(
            _this.TakeMoneyFromWallet125,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet50);
        });
      }
    }
    _this.vendorGroup.length = 0;
  },

  resetWallet170: function () {
    console.log("reset for 170");
    for (let i = 0; i < _this.vendorGroup.length; i++) {
      if (_this.vendorHand.getChildAt(i).name == "5R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 350 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee5_2.destroy();
          _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
          _this.rupee5_2 = _this.add.sprite(640, 350, "5Rupee");
          _this.rupee5_2.alpha = 0;
          _this.rupee5_2.name = "5_2";
          _this.DragGroup2.addChild(_this.rupee5_2);

          _this.rupee5_2.inputEnabled = true;
          _this.rupee5_2.input.enableDrag();
          _this.rupee5_2.input.useHandCursor = true;
          _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
          _this.rupee5_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet170,
            _this
          );
          _this.remainingGroup.addChild(_this.wallet5_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "5R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 280 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee5.destroy();
          _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
          _this.rupee5 = _this.add.sprite(640, 280, "5Rupee");
          _this.rupee5.alpha = 0;
          _this.rupee5.name = "5";
          _this.DragGroup2.addChild(_this.rupee5);

          _this.rupee5.inputEnabled = true;
          _this.rupee5.input.enableDrag();
          _this.rupee5.input.useHandCursor = true;
          _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney170, _this);
          _this.rupee5.events.onDragStop.add(
            _this.TakeMoneyFromWallet170,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet5);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "10R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 210 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee10_2.destroy();
          _this.wallet10_2 = _this.add.sprite(640, 210, "10Wallet");
          _this.rupee10_2 = _this.add.sprite(640, 210, "10Rupee");
          _this.rupee10_2.alpha = 0;
          _this.rupee10_2.name = "10_2";
          _this.DragGroup2.addChild(_this.rupee10_2);

          _this.rupee10_2.inputEnabled = true;
          _this.rupee10_2.input.enableDrag();
          _this.rupee10_2.input.useHandCursor = true;
          _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
          _this.rupee10_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet170,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet10_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "10R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 150 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee10.destroy();
          _this.wallet10 = _this.add.sprite(640, 150, "10Wallet");
          _this.rupee10 = _this.add.sprite(640, 150, "10Rupee");
          _this.rupee10.alpha = 0;
          _this.rupee10.name = "10";
          _this.DragGroup2.addChild(_this.rupee10);

          _this.rupee10.inputEnabled = true;
          _this.rupee10.input.enableDrag();
          _this.rupee10.input.useHandCursor = true;
          _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney170, _this);
          _this.rupee10.events.onDragStop.add(
            _this.TakeMoneyFromWallet170,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet10);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "20R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 350 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee20_2.destroy();
          _this.wallet20_2 = _this.add.sprite(400, 350, "20Wallet");
          _this.rupee20_2 = _this.add.sprite(400, 350, "20Rupee");
          _this.rupee20_2.alpha = 0;
          _this.rupee20_2.name = "20_2";
          _this.DragGroup2.addChild(_this.rupee20_2);

          _this.rupee20_2.inputEnabled = true;
          _this.rupee20_2.input.enableDrag();
          _this.rupee20_2.input.useHandCursor = true;
          _this.rupee20_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
          _this.rupee20_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet170,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet20_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "20R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 280 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee20.destroy();
          _this.wallet20 = _this.add.sprite(400, 280, "20Wallet");
          _this.rupee20 = _this.add.sprite(400, 280, "20Rupee");
          _this.rupee20.alpha = 0;
          _this.rupee20.name = "20";
          _this.DragGroup2.addChild(_this.rupee20);

          _this.rupee20.inputEnabled = true;
          _this.rupee20.input.enableDrag();
          _this.rupee20.input.useHandCursor = true;
          _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney170, _this);
          _this.rupee20.events.onDragStop.add(
            _this.TakeMoneyFromWallet170,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet20);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "50R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 210 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee50_2.destroy();
          _this.wallet50_2 = _this.add.sprite(400, 210, "50Wallet");
          _this.rupee50_2 = _this.add.sprite(400, 210, "50Rupee");
          _this.rupee50_2.alpha = 0;
          _this.rupee50_2.name = "50_2";
          _this.DragGroup2.addChild(_this.rupee50_2);

          _this.rupee50_2.inputEnabled = true;
          _this.rupee50_2.input.enableDrag();
          _this.rupee50_2.input.useHandCursor = true;
          _this.rupee50_2.events.onDragUpdate.add(_this.UpdateMoney170, _this);
          _this.rupee50_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet170,
            _this
          );
          _this.remainingGroup.addChild(_this.wallet50_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "50R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 150 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee50.destroy();
          _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");
          _this.rupee50 = _this.add.sprite(400, 150, "50Rupee");
          _this.rupee50.alpha = 0;
          _this.rupee50.name = "50";
          _this.DragGroup2.addChild(_this.rupee50);

          _this.rupee50.inputEnabled = true;
          _this.rupee50.input.enableDrag();
          _this.rupee50.input.useHandCursor = true;
          _this.rupee50.events.onDragUpdate.add(_this.UpdateMoney170, _this);
          _this.rupee50.events.onDragStop.add(
            _this.TakeMoneyFromWallet170,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet50);
        });
      }
    }
    _this.vendorGroup.length = 0;
  },

  resetWallet200: function () {
    console.log("reset for 200");
    for (let i = 0; i < _this.vendorGroup.length; i++) {
      if (_this.vendorHand.getChildAt(i).name == "5R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 350 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee5_2.destroy();
          _this.wallet5_2 = _this.add.sprite(640, 350, "5Wallet");
          _this.rupee5_2 = _this.add.sprite(640, 350, "5Rupee");
          _this.rupee5_2.alpha = 0;
          _this.rupee5_2.name = "5_2";
          _this.DragGroup2.addChild(_this.rupee5_2);

          _this.rupee5_2.inputEnabled = true;
          _this.rupee5_2.input.enableDrag();
          _this.rupee5_2.input.useHandCursor = true;
          _this.rupee5_2.events.onDragUpdate.add(_this.UpdateMoney200, _this);
          _this.rupee5_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet200,
            _this
          );
          _this.remainingGroup.addChild(_this.wallet5_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "5R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 280 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee5.destroy();
          _this.wallet5 = _this.add.sprite(640, 280, "5Wallet");
          _this.rupee5 = _this.add.sprite(640, 280, "5Rupee");
          _this.rupee5.alpha = 0;
          _this.rupee5.name = "5";
          _this.DragGroup2.addChild(_this.rupee5);

          _this.rupee5.inputEnabled = true;
          _this.rupee5.input.enableDrag();
          _this.rupee5.input.useHandCursor = true;
          _this.rupee5.events.onDragUpdate.add(_this.UpdateMoney200, _this);
          _this.rupee5.events.onDragStop.add(
            _this.TakeMoneyFromWallet200,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet5);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "10R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 210 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee10_2.destroy();
          _this.wallet10_2 = _this.add.sprite(640, 210, "10Wallet");
          _this.rupee10_2 = _this.add.sprite(640, 210, "10Rupee");
          _this.rupee10_2.alpha = 0;
          _this.rupee10_2.name = "10_2";
          _this.DragGroup2.addChild(_this.rupee10_2);

          _this.rupee10_2.inputEnabled = true;
          _this.rupee10_2.input.enableDrag();
          _this.rupee10_2.input.useHandCursor = true;
          _this.rupee10_2.events.onDragUpdate.add(_this.UpdateMoney200, _this);
          _this.rupee10_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet200,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet10_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "10R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 700, y: 150 }, 1000, "Linear", true, 0);
        _this.time.events.add(1400, function () {
          _this.rupee10.destroy();
          _this.wallet10 = _this.add.sprite(640, 150, "10Wallet");
          _this.rupee10 = _this.add.sprite(640, 150, "10Rupee");
          _this.rupee10.alpha = 0;
          _this.rupee10.name = "10";
          _this.DragGroup2.addChild(_this.rupee10);

          _this.rupee10.inputEnabled = true;
          _this.rupee10.input.enableDrag();
          _this.rupee10.input.useHandCursor = true;
          _this.rupee10.events.onDragUpdate.add(_this.UpdateMoney200, _this);
          _this.rupee10.events.onDragStop.add(
            _this.TakeMoneyFromWallet200,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet10);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "20R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 350 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee20.destroy();
          _this.wallet20 = _this.add.sprite(400, 350, "20Wallet");
          _this.rupee20 = _this.add.sprite(400, 350, "20Rupee");
          _this.rupee20.alpha = 0;
          _this.rupee20.name = "20";
          _this.DragGroup2.addChild(_this.rupee20);

          _this.rupee20.inputEnabled = true;
          _this.rupee20.input.enableDrag();
          _this.rupee20.input.useHandCursor = true;
          _this.rupee20.events.onDragUpdate.add(_this.UpdateMoney200, _this);
          _this.rupee20.events.onDragStop.add(
            _this.TakeMoneyFromWallet200,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet20);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "50R3") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 280 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee50_3.destroy();
          _this.wallet50_3 = _this.add.sprite(400, 280, "50Wallet");
          _this.rupee50_3 = _this.add.sprite(400, 280, "50Rupee");
          _this.rupee50_3.alpha = 0;
          _this.rupee50_3.name = "50_3";
          _this.DragGroup2.addChild(_this.rupee50_3);

          _this.rupee50_3.inputEnabled = true;
          _this.rupee50_3.input.enableDrag();
          _this.rupee50_3.input.useHandCursor = true;
          _this.rupee50_3.events.onDragUpdate.add(_this.UpdateMoney200, _this);
          _this.rupee50_3.events.onDragStop.add(
            _this.TakeMoneyFromWallet200,
            _this
          );
          _this.remainingGroup.addChild(_this.wallet50_3);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "50R2") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 210 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee50_2.destroy();
          _this.wallet50_2 = _this.add.sprite(400, 210, "50Wallet");
          _this.rupee50_2 = _this.add.sprite(400, 210, "50Rupee");
          _this.rupee50_2.alpha = 0;
          _this.rupee50_2.name = "50_2";
          _this.DragGroup2.addChild(_this.rupee50_2);

          _this.rupee50_2.inputEnabled = true;
          _this.rupee50_2.input.enableDrag();
          _this.rupee50_2.input.useHandCursor = true;
          _this.rupee50_2.events.onDragUpdate.add(_this.UpdateMoney200, _this);
          _this.rupee50_2.events.onDragStop.add(
            _this.TakeMoneyFromWallet200,
            _this
          );
          _this.remainingGroup.addChild(_this.wallet50_2);
        });
      }
      if (_this.vendorHand.getChildAt(i).name == "50R") {
        _this.MoneyInHand = _this.vendorHand.getChildAt(i);
        _this.TweenBack = _this.add.tween(_this.MoneyInHand);
        _this.TweenBack.to({ x: 460, y: 150 }, 1000, "Linear", true, 0);
        _this.time.events.add(1100, function () {
          _this.rupee50.destroy();
          _this.wallet50 = _this.add.sprite(400, 150, "50Wallet");
          _this.rupee50 = _this.add.sprite(400, 150, "50Rupee");
          _this.rupee50.alpha = 0;
          _this.rupee50.name = "50";
          _this.DragGroup2.addChild(_this.rupee50);

          _this.rupee50.inputEnabled = true;
          _this.rupee50.input.enableDrag();
          _this.rupee50.input.useHandCursor = true;
          _this.rupee50.events.onDragUpdate.add(_this.UpdateMoney200, _this);
          _this.rupee50.events.onDragStop.add(
            _this.TakeMoneyFromWallet200,
            _this
          );

          _this.remainingGroup.addChild(_this.wallet50);
        });
      }
    }
    _this.vendorGroup.length = 0;
  },

  FinalScreen: function () {
    _this.Box1 = _this.add.sprite(20, 90, "Box1");
    _this.Box1.scale.setTo(0.95, 1);
    _this.weightMachine = _this.add.sprite(70, 16, "weightMachine");
    _this.Box1.addChild(_this.weightMachine);

    _this.Table3 = _this.add.sprite(120, 130, "Table3");
    _this.Box1.addChild(_this.Table3);

    var firstPrice = _this.add.text(100, 60, _this.firstItemPrice);
    _this.applyingStyleBlue(firstPrice);
    firstPrice.fontSize = "26px";
    _this.Table3.addChild(firstPrice);

    var firstRemaning = _this.add.text(100, 25, _this.firstRemaning);
    _this.applyingStyleBlue(firstRemaning);
    firstRemaning.fontSize = "26px";
    _this.Table3.addChild(firstRemaning);

    var secondPrice = _this.add.text(175, 60, _this.secondItemPrice);
    _this.applyingStyleBlue(secondPrice);
    secondPrice.fontSize = "26px";
    _this.Table3.addChild(secondPrice);

    var secondRemaning = _this.add.text(175, 25, _this.secondRemaning);
    _this.applyingStyleBlue(secondRemaning);
    secondRemaning.fontSize = "26px";
    _this.Table3.addChild(secondRemaning);

    if (
      _this.firstItemWeight === 1 ||
      _this.firstItemWeight === 2 ||
      _this.firstItemWeight === 3
    ) {
      var firstWeight = _this.add.text(100, 100, _this.firstItemWeight + ".0");
    } else {
      var firstWeight = _this.add.text(100, 100, _this.firstItemWeight);
    }

    _this.applyingStyleBlue(firstWeight);
    firstWeight.fontSize = "26px";
    _this.Table3.addChild(firstWeight);

    if (
      _this.secondItemWeight === 1 ||
      _this.secondItemWeight === 2 ||
      _this.secondItemWeight === 3
    ) {
      var secondWeight = _this.add.text(
        175,
        100,
        _this.secondItemWeight + ".0"
      );
    } else {
      var secondWeight = _this.add.text(175, 100, _this.secondItemWeight);
    }

    _this.applyingStyleBlue(secondWeight);
    secondWeight.fontSize = "26px";
    _this.Table3.addChild(secondWeight);

    var thirdPrice = _this.add.text(245, 60, _this.thirdItemPrice);
    _this.applyingStyleRed(thirdPrice);
    _this.Table3.addChild(thirdPrice);

    var thirdRemaining = _this.add.text(245, 25, _this.remainingMoney);
    _this.applyingStyleRed(thirdRemaining);
    _this.Table3.addChild(thirdRemaining);

    if (
      _this.thirdItemWeight === 1 ||
      _this.thirdItemWeight === 2 ||
      _this.thirdItemWeight === 3
    ) {
      var thirdWeight = _this.add.text(245, 100, _this.thirdItemWeight + ".0");
    } else {
      var thirdWeight = _this.add.text(245, 100, _this.thirdItemWeight);
    }

    _this.applyingStyleRed(thirdWeight);
    _this.Table3.addChild(thirdWeight);

    _this.QuestionScreen();
  },

  QuestionScreen: function () {
    if (_this.DirectORInverseQuestion[_this.QuestionCount] === 1) {
      _this.time.events.add(5600, function () {
        _this.Ask_Question7.play();
        _this.Question_flag = 7;
      });
    } else if (_this.DirectORInverseQuestion[_this.QuestionCount] === 2) {
      _this.time.events.add(5600, function () {
        _this.Ask_Question8.play();
        _this.Question_flag = 8;
      });
    }

    _this.DirectORInverse = [1, 2];
    Phaser.ArrayUtils.shuffle(_this.DirectORInverse);
    _this.time.events.add(2000, function () {
      _this.table_3Tween = _this.add.tween(_this.Table3);
      _this.table_3Tween.to({ alpha: 0 }, 1500, "Linear", true, 0);
    });

    if (_this.DirectORInverse[_this.QuestionCount] === 1) {
      var sortArray = [
        _this.firstItemWeight,
        _this.secondItemWeight,
        _this.thirdItemWeight,
      ];
      console.log(sortArray);

      sortArray.sort(function (a, b) {
        return a - b;
      });

      console.log(sortArray);

      var sortPriceArray = [
        _this.firstItemPrice,
        _this.secondItemPrice,
        _this.thirdItemPrice,
      ];
      console.log(sortPriceArray);

      sortPriceArray.sort(function (a, b) {
        return a - b;
      });

      console.log(sortPriceArray);

      console.log("Direct Proportion");
      _this.Table5 = _this.add.sprite(125, 130, "Table5");
      _this.Table5.scale.setTo(0.23, 0.23);
      _this.Box1.addChild(_this.Table5);

      var firstPrice = _this.add.text(220, 175, sortPriceArray[0]);
      _this.applyingStyleRed(firstPrice);
      firstPrice.alpha = 0;
      _this.Box1.addChild(firstPrice);

      if (sortArray[0] === 1 || sortArray[0] === 2 || sortArray[0] === 3) {
        var firstWeight = _this.add.text(220, 215, sortArray[0] + ".0");
      } else {
        var firstWeight = _this.add.text(220, 215, sortArray[0]);
      }

      _this.applyingStyleBlue(firstWeight);
      firstWeight.fontSize = "26px";
      firstWeight.alpha = 0;
      _this.Box1.addChild(firstWeight);

      var secondPrice = _this.add.text(290, 175, sortPriceArray[1]);
      _this.applyingStyleRed(secondPrice);
      secondPrice.alpha = 0;
      _this.Box1.addChild(secondPrice);

      if (sortArray[1] === 1 || sortArray[1] === 2 || sortArray[1] === 3) {
        var secondWeight = _this.add.text(290, 215, sortArray[1] + ".0");
      } else {
        var secondWeight = _this.add.text(290, 215, sortArray[1]);
      }

      _this.applyingStyleBlue(secondWeight);
      secondWeight.fontSize = "26px";
      secondWeight.alpha = 0;
      _this.Box1.addChild(secondWeight);

      var thirdPrice = _this.add.text(360, 175, sortPriceArray[2]);
      _this.applyingStyleRed(thirdPrice);
      thirdPrice.alpha = 0;
      _this.Box1.addChild(thirdPrice);

      if (sortArray[2] === 1 || sortArray[2] === 2 || sortArray[2] === 3) {
        var thirdWeight = _this.add.text(360, 215, sortArray[2] + ".0");
      } else {
        var thirdWeight = _this.add.text(360, 215, sortArray[2]);
      }

      _this.applyingStyleBlue(thirdWeight);
      thirdWeight.fontSize = "26px";
      thirdWeight.alpha = 0;
      _this.Box1.addChild(thirdWeight);

      _this.Table5.alpha = 0;

      _this.time.events.add(4000, function () {
        var price1 = _this.add.tween(firstPrice);
        price1.to({ alpha: 1 }, 1500, "Linear", true, 0);
        var price2 = _this.add.tween(secondPrice);
        price2.to({ alpha: 1 }, 1500, "Linear", true, 0);
        var price3 = _this.add.tween(thirdPrice);
        price3.to({ alpha: 1 }, 1500, "Linear", true, 0);

        var weight1 = _this.add.tween(firstWeight);
        weight1.to({ alpha: 1 }, 1500, "Linear", true, 0);
        var weight2 = _this.add.tween(secondWeight);
        weight2.to({ alpha: 1 }, 1500, "Linear", true, 0);
        var weight3 = _this.add.tween(thirdWeight);
        weight3.to({ alpha: 1 }, 1500, "Linear", true, 0);

        _this.table_5Tween = _this.add.tween(_this.Table5);
        _this.table_5Tween.to({ alpha: 1 }, 1500, "Linear", true, 0);
      });
    } else if (_this.DirectORInverse[_this.QuestionCount] === 2) {
      console.log("Inverse Proportion");
      _this.Table4 = _this.add.sprite(120, 130, "Table4");
      _this.Box1.addChild(_this.Table4);

      var sortArray = [
        _this.firstItemWeight,
        _this.secondItemWeight,
        _this.thirdItemWeight,
      ];
      console.log(sortArray);

      sortArray.sort(function (a, b) {
        return a - b;
      });

      console.log(sortArray);

      var sortRemainingArray = [
        _this.firstRemaning,
        _this.secondRemaning,
        _this.remainingMoney,
      ];
      console.log(sortRemainingArray);

      sortRemainingArray.sort(function (a, b) {
        return a - b;
      });

      console.log(sortRemainingArray);

      var firstRemaning = _this.add.text(100, 50, sortRemainingArray[2]);
      _this.applyingStyleRed(firstRemaning);
      _this.Table4.addChild(firstRemaning);

      if (sortArray[0] === 1 || sortArray[0] === 2 || sortArray[0] === 3) {
        var firstWeight = _this.add.text(100, 90, sortArray[0] + ".0");
      } else {
        var firstWeight = _this.add.text(100, 90, sortArray[0]);
      }

      _this.applyingStyleBlue(firstWeight);
      firstWeight.fontSize = "26px";
      _this.Table4.addChild(firstWeight);

      var secondRemaning = _this.add.text(175, 50, sortRemainingArray[1]);
      _this.applyingStyleRed(secondRemaning);
      _this.Table4.addChild(secondRemaning);

      if (sortArray[1] === 1 || sortArray[1] === 2 || sortArray[1] === 3) {
        var secondWeight = _this.add.text(175, 90, sortArray[1] + ".0");
      } else {
        var secondWeight = _this.add.text(175, 90, sortArray[1]);
      }

      _this.applyingStyleBlue(secondWeight);
      secondWeight.fontSize = "26px";
      _this.Table4.addChild(secondWeight);

      var thirdRemaining = _this.add.text(245, 50, sortRemainingArray[0]);
      _this.applyingStyleRed(thirdRemaining);
      _this.Table4.addChild(thirdRemaining);

      if (sortArray[2] === 1 || sortArray[2] === 2 || sortArray[2] === 3) {
        var thirdWeight = _this.add.text(250, 90, sortArray[2] + ".0");
      } else {
        var thirdWeight = _this.add.text(250, 90, sortArray[2]);
      }

      _this.applyingStyleBlue(thirdWeight);
      thirdWeight.fontSize = "26px";
      _this.Table4.addChild(thirdWeight);

      _this.Table4.alpha = 0;

      _this.time.events.add(4000, function () {
        _this.table_4Tween = _this.add.tween(_this.Table4);
        _this.table_4Tween.to({ alpha: 1 }, 1500, "Linear", true, 0);
      });
    }

    _this.thumbsUp = _this.add.sprite(880, 85, "thumbsUp");
    _this.thumbsDown = _this.add.sprite(880, 160, "thumbsDown");

    _this.thumbsUp.alpha = 0;
    _this.thumbsDown.alpha = 0;

    _this.time.events.add(4000, function () {
      _this.thumbsUpTween = _this.add.tween(_this.thumbsUp);
      _this.thumbsUpTween.to({ alpha: 1 }, 1500, "Linear", true, 0);

      _this.thumbsDownTween = _this.add.tween(_this.thumbsDown);
      _this.thumbsDownTween.to({ alpha: 1 }, 1500, "Linear", true, 0);
    });

    _this.thumbsUp.inputEnabled = true;
    _this.thumbsUp.input.useHandCursor = true;
    _this.thumbsUp.events.onInputDown.add(_this.thumbsUpEvaluation, _this);

    _this.thumbsDown.inputEnabled = true;
    _this.thumbsDown.input.useHandCursor = true;
    _this.thumbsDown.events.onInputDown.add(_this.thumbsDownEvaluation, _this);
  },

  thumbsUpEvaluation: function (target) {
    console.log("thumbs Up evaluation");
    _this.clickSound.play();
    _this.thumbsUp.frame = 1;
    _this.thumbsDown.frame = 0;

    if (
      (_this.DirectORInverseQuestion[_this.QuestionCount] === 1 &&
        _this.DirectORInverse[_this.QuestionCount] === 1) ||
      (_this.DirectORInverseQuestion[_this.QuestionCount] === 2 &&
        _this.DirectORInverse[_this.QuestionCount] === 2)
    ) {
      _this.right = true;
    } else {
      _this.right = false;
    }

    if (_this.right) {
      _this.QuestionCount++;
      _this.itemCount = 0;
      _this.thumbsUp.events.onInputDown.removeAll();
      _this.thumbsDown.events.onInputDown.removeAll();

      _this.celebrationSound.play();
      _this.clearAll();
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      _this.starActions();
      _this.noofAttempts = 0;
      _this.AnsTimerCount = 0;
      _this.time.events.add(3000, () => {
        if (_this.numberOfQuestions == 6) {
          _this.state.start('score', true, false, gameID, _this.microConcepts);
        } else {
          _this.Box1.destroy();
          _this.thumbsUp.destroy();
          _this.thumbsDown.destroy();
          _this.WeightMachine();
        }
      });
    } else {
      _this.noofAttempts++;
      _this.wrongSound.play();
      _this.time.events.add(1000, function () {
        _this.thumbsUp.frame = 0;
      });
    }
  },

  thumbsDownEvaluation: function (target) {
    console.log("thumbs Down evaluation");
    _this.clickSound.play();
    _this.thumbsUp.frame = 0;
    _this.thumbsDown.frame = 1;

    if (
      (_this.DirectORInverseQuestion[_this.QuestionCount] === 1 &&
        _this.DirectORInverse[_this.QuestionCount] === 1) ||
      (_this.DirectORInverseQuestion[_this.QuestionCount] === 2 &&
        _this.DirectORInverse[_this.QuestionCount] === 2)
    ) {
      _this.wrong = false;
    } else {
      _this.wrong = true;
    }

    if (_this.wrong) {
      _this.QuestionCount++;
      _this.itemCount = 0;
      _this.thumbsUp.events.onInputDown.removeAll();
      _this.thumbsDown.events.onInputDown.removeAll();
      _this.noofAttempts++;
      telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
      _this.celebrationSound.play();
      _this.clearAll();
      _this.starActions();
      _this.time.events.add(3000, () => {
        if (_this.numberOfQuestions == 6) {
          _this.state.start('score', true, false, gameID, _this.microConcepts);
        } else {
          _this.Box1.destroy();
          _this.thumbsUp.destroy();
          _this.thumbsDown.destroy();
          _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.WeightMachine();
        }
      });
    } else if (_this.wrong === false) {
      _this.noofAttempts++;
      _this.wrongSound.play();

      _this.time.events.add(1000, function () {
        _this.thumbsDown.frame = 0;
      });
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
    target.fontSize = "30px";
  },
  applyingStyle1: function (target) {
    target.align = "right";
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#32CD32"; //green color
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "26px";
  },
  applyingStyleRed: function (target) {
    target.align = "right";
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#FF0000"; //pink color
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
    _this.totalValue = 0;

    _this.dragCount = 0;
    _this.dragCount2 = 0;

    _this.measureMent = false;

    _this.handX = 150;
    _this.handY = 230;

    _this.startO = 230;
    _this.EndO = 438;
    _this.EndO2 = 415;
    _this.EndA = 445; // for both apple and pear
    _this.EndA2 = 415;

    _this.EndP = 465; //Potato
    _this.EndP2 = 440;

    _this.EndT = 465; // Tomato
    _this.EndT2 = 445; // Tomato

    _this.countHalf = 0;

    _this.countAll = 0;

    _this.weightCount = 0;

    _this.orangePositions = [];
    _this.applePositions = [];
    _this.pearPositions = [];
    _this.onionPositions = [];
    _this.tomatoPositions = [];
    _this.potatoPositions = [];

    _this.tweenedObjects1 = [];
    _this.tweenedObjects2 = [];
    _this.tweenedObjects3 = [];
    _this.tweenedObjects4 = [];
    _this.tweenedObjects5 = [];
    _this.tweenedObjects6 = [];

    _this.destroyObj1 = false;
    _this.destroyObj2 = false;
    _this.destroyObj3 = false;
    _this.destroyObj4 = false;
    _this.destroyObj5 = false;
  },

  clearAll2: function () {
    _this.AnswerBox3.destroy();

    if (_this.pinkObjects.length > 0) {
      for (var i = 0; i < _this.pinkObjects.length; i++) {
        _this.pinkObjects[i].destroy();
      }
      _this.pinkObjects = [];
    }

    _this.rootCube = false;

    _this.perfectSquareFlag = false;
    _this.perfectCubeFlag = false;

    _this.rootSquare = false;

    _this.squareFlag = false;
    _this.cubeFlag = false;

    _this.squarePanel.destroy();
  },

  rightbtnClicked: function () {
    console.log("right btn clicked");
    _this.clickSound.play();
    _this.rightbtn.inputEnabled = false;
    _this.rightbtn.input.useHandCursor = false;

    if (_this.totalDenominationInWallet !== Number(_this.finalval1)) {
      _this.noofAttempts++;
      _this.wrongSound.play();
      _this.disableInputs1();
      _this.wrongbtn.events.onInputDown.removeAll();
      _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);
      for (let i = 1; i <= 10; i++) {
        _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
        _this.numGroup
          .getChildAt(i)
          .events.onInputDown.add(_this.numClicked1, _this);
      }
      _this.rightbtn.inputEnabled = true;
      _this.rightbtn.input.useHandCursor = true;
      return;
    } else {
      _this.counterCelebrationSound.play();
      _this.numGroup.destroy();

      _this.enterTxt1.visible = false;

      _this.Wallet.destroy();
      _this.walletMoney.destroy();
      _this.WeightMachine();
    }
  },

  rightbtnClicked2: function () {
    console.log("right btn clicked 2");
    _this.clickSound.play();
    _this.rightbtn.inputEnabled = false;
    _this.rightbtn.input.useHandCursor = false;

    if (_this.itemPrice !== Number(_this.finalval2)) {
      _this.noofAttempts++;
      _this.wrongSound.play();
      _this.disableInputs2();
      _this.wrongbtn.events.onInputDown.removeAll();
      _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);
      for (let i = 1; i <= 10; i++) {
        _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
        _this.numGroup
          .getChildAt(i)
          .events.onInputDown.add(_this.numClicked2, _this);
      }
      _this.rightbtn.inputEnabled = true;
      _this.rightbtn.input.useHandCursor = true;
      return;
    } else {
      _this.numGroup.destroy();
      _this.counterCelebrationSound.currentTime = 0;
      _this.counterCelebrationSound.play();

      if (_this.itemCount > 0) {
        if (_this.itemCount === 1) {
          var secondPrice = _this.add.text(175, 60, _this.secondItemPrice);
          _this.applyingStyleRed(secondPrice);
          _this.Table2.addChild(secondPrice);
          _this.time.events.add(1700, function () {
            _this.Box1.destroy();
            _this.enterTxt2.visible = false;
            _this.OrangeGroup.destroy();
            _this.AppleGroup.destroy();
            _this.PearGroup.destroy();
            _this.PotatoGroup.destroy();
            _this.TomatoGroup.destroy();
            _this.OnionGroup.destroy();

            _this.measureMent = false;
            _this.GiveMoneyToVendor();
          });
        } else {
          var thirdPrice = _this.add.text(245, 60, _this.thirdItemPrice);
          _this.applyingStyleRed(thirdPrice);
          _this.Table3.addChild(thirdPrice);
          _this.time.events.add(1700, function () {
            _this.Box1.destroy();
            _this.enterTxt2.visible = false;
            _this.OrangeGroup.destroy();
            _this.AppleGroup.destroy();
            _this.PearGroup.destroy();
            _this.PotatoGroup.destroy();
            _this.TomatoGroup.destroy();
            _this.OnionGroup.destroy();

            _this.measureMent = false;
            _this.GiveMoneyToVendor();
          });
        }
      } else {
        _this.time.events.add(1000, function () {
          _this.Box1.destroy();
          _this.enterTxt2.visible = false;
          _this.OrangeGroup.destroy();
          _this.AppleGroup.destroy();
          _this.PearGroup.destroy();
          _this.PotatoGroup.destroy();
          _this.TomatoGroup.destroy();
          _this.OnionGroup.destroy();

          _this.measureMent = false;
          _this.GiveMoneyToVendor();
        });
      }
    }
  },
  rightbtnClicked3: function () {
    console.log("right btn clicked 3");
    _this.clickSound.play();
    _this.rightbtn.inputEnabled = false;
    _this.rightbtn.input.useHandCursor = false;

    _this.remainingMoney = _this.totalDenominationInWallet - _this.totalPayed;
    console.log(_this.remainingMoney);

    if (_this.remainingMoney !== Number(_this.finalval3)) {
      _this.noofAttempts++;
      _this.wrongSound.play();
      _this.disableInputs3();
      _this.wrongbtn.events.onInputDown.removeAll();
      _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked3, _this);
      for (let i = 1; i <= 10; i++) {
        _this.numGroup.getChildAt(i).events.onInputDown.removeAll();
        _this.numGroup
          .getChildAt(i)
          .events.onInputDown.add(_this.numClicked3, _this);
      }
      _this.rightbtn.inputEnabled = true;
      _this.rightbtn.input.useHandCursor = true;
      return;
    } else {
      _this.itemCount++;
      _this.numGroup.destroy();
      if (_this.itemCount > 2) {
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.time.events.add(1000, function () {
          _this.remainingGroup.destroy();
          _this.FinalScreen();
        });
      } else {
        _this.celebrationSound.play();
        _this.noofAttempts++;
        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
        _this.clearAll();
        _this.starActions();
        _this.time.events.add(3000, () => {
          if (_this.numberOfQuestions == 6) {
            _this.state.start('score', true, false, gameID, _this.microConcepts);
          } else {
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;
            _this.remainingGroup.destroy();
            _this.WeightMachine();
          }
        });
      }
    }
  },

  addNumberPad: function () {
    _this.objGroup = _this.add.group();
    _this.numGroup = _this.add.group();

    _this.selectedAns11 = "";
    _this.selectedAns21 = "";
    _this.selectedAns31 = "";

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
  addNumberPad2: function () {
    _this.objGroup = _this.add.group();
    _this.numGroup = _this.add.group();

    _this.selectedAns11 = "";
    _this.selectedAns21 = "";
    _this.selectedAns31 = "";

    _this.fourNotEntered2 = false;

    _this.signNotselected1 = false;
    _this.signNotselected2 = false;

    _this.finalval2 = "";
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
      _this.numbg.events.onInputDown.add(_this.numClicked2, _this);

      _this.x += 65;
    }

    _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, "Numberpad");
    _this.wrongbtn.frame = 12;
    _this.wrongbtn.anchor.setTo(0.5);
    _this.wrongbtn.scale.setTo(0.8);
    _this.wrongbtn.name = "wrongbtn";
    _this.wrongbtn.inputEnabled = true;
    _this.wrongbtn.input.useHandCursor = true;
    _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked2, _this);

    _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, "Numberpad");
    _this.rightbtn.frame = 13;
    _this.rightbtn.anchor.setTo(0.5);
    _this.rightbtn.scale.setTo(0.8);
    _this.rightbtn.name = "rightbtn";
    _this.rightbtn.inputEnabled = true;
    _this.rightbtn.input.useHandCursor = true;
    _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked2, _this);

    _this.enterTxt1 = "";
    _this.enterTxt2 = "";
    _this.enterTxt3 = "";

    _this.numpadTween = _this.add.tween(_this.numGroup);
    _this.tweenNumPad();
  },

  addNumberPad3: function () {
    _this.objGroup = _this.add.group();
    _this.numGroup = _this.add.group();

    _this.AnswerBox1.removeChild(_this.enterTxt3);

    _this.selectedAns11 = "";
    _this.selectedAns21 = "";
    _this.selectedAns31 = "";

    _this.AnswerBox1.name = "";

    _this.fourNotEntered3 = false;

    _this.signNotselected1 = false;
    _this.signNotselected2 = false;

    _this.finalval3 = "";
    _this.signVal3 = "";

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
      _this.numbg.events.onInputDown.add(_this.numClicked3, _this);

      _this.x += 65;
    }

    _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, "Numberpad");
    _this.wrongbtn.frame = 12;
    _this.wrongbtn.anchor.setTo(0.5);
    _this.wrongbtn.scale.setTo(0.8);
    _this.wrongbtn.name = "wrongbtn";
    _this.wrongbtn.inputEnabled = true;
    _this.wrongbtn.input.useHandCursor = true;
    _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked3, _this);

    _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, "Numberpad");
    _this.rightbtn.frame = 13;
    _this.rightbtn.anchor.setTo(0.5);
    _this.rightbtn.scale.setTo(0.8);
    _this.rightbtn.name = "rightbtn";
    _this.rightbtn.inputEnabled = true;
    _this.rightbtn.input.useHandCursor = true;
    _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked3, _this);

    _this.enterTxt1 = "";
    _this.enterTxt2 = "";
    _this.enterTxt3 = "";

    _this.numpadTween = _this.add.tween(_this.numGroup);
    _this.tweenNumPad();
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
  wrongbtnClicked2: function (target) {
    _this.clickSound.play();
    _this.disableInputs2();
  },
  wrongbtnClicked3: function (target) {
    _this.clickSound.play();
    _this.disableInputs3();
  },
  wrongbtnClicked4: function (target) {
    _this.clickSound.play();
    _this.disableInputs4();
  },
  //for clearing the answer box.
  disableInputs1: function () {
    _this.selectedAns11 = "";
    _this.selectedAns21 = "";
    _this.selectedAns31 = "";
    _this.finalval1 = "";
    _this.enterTxt1.visible = false;
    _this.fourNotEntered1 = false;
  },
  disableInputs2: function () {
    _this.selectedAns11 = "";
    _this.selectedAns21 = "";
    _this.selectedAns31 = "";
    _this.finalval2 = "";
    _this.enterTxt2.visible = false;
    _this.fourNotEntered2 = false;
  },
  disableInputs3: function () {
    _this.AnswerBox1.removeChild(_this.enterTxt3);
    _this.selectedAns11 = "";
    _this.selectedAns21 = "";
    _this.selectedAns31 = "";
    _this.AnswerBox1.name = "";
    _this.fourNotEntered3 = false;
    _this.finalval3 = "";
    _this.signVal3 = "";
  },

  disableInputs4: function () {
    _this.selectedAns11 = "";
    _this.selectedAns21 = "";
    _this.selectedAns31 = "";
    _this.finalval4 = "";
    _this.enterTxt4.visible = false;
    _this.fourNotEntered1 = false;
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
      _this.enterTxt1.visible = false;
      _this.enterTxt1 = _this.add.text(
        740,
        112,
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
        _this.finalval1.length == 3 &&
        (target.name != 11 || target.name != 10)
      ) {
        _this.fourNotEntered1 = true;
      } else if (_this.finalval1.length == 4) {
        _this.fourNotEntered1 = true;
      }
      _this.enterTxt1.scale.setTo(0.8, 1);
      _this.applyingStyleBlue(_this.enterTxt1);
      _this.enterTxt1.fontSize = "32px";
      _this.enterTxt1.visible = true;
    }
  },
  numClicked2: function (target) {
    _this.clickSound.play();
    var_selectedAns21 = " ";

    if (_this.selectedAns21 === "") {
      _this.selectedAns21 = target.name;
      var_selectedAns11 = _this.selectedAns11;
    }
    if (target.name == "+" || target.name == "-") {
      newstr = target.name + _this.finalval1;
      _this.signVal12 = target.name;
    } else if (_this.fourNotEntered2 == false) {
      _this.finalval2 += target.name;
    }

    if (target.name == "+") target.name = 11;
    if (target.name == "-") target.name = 10;

    if (
      _this.fourNotEntered2 == false ||
      target.name == 11 ||
      target.name == 10
    ) {
      _this.enterTxt2.visible = false;
      _this.enterTxt2 = _this.add.text(690, 122, "" + _this.finalval2, {
        fontSize: "18",
      });

      if (_this.signVal2 == "+") {
        if (_this.finalval2.length == 2) {
          _this.enterTxt2.x += 1;
        } else if (_this.finalval2.length == 1) {
          _this.enterTxt2.x += 8;
        } else {
          _this.enterTxt2.x += 13;
        }
      } else if (_this.signVal2 == "-") {
        if (_this.finalval2.length == 2) {
          _this.enterTxt2.x += 5;
        } else if (_this.finalval2.length == 1) {
          _this.enterTxt2.x += 8;
        } else {
          _this.enterTxt2.x += 13;
        }
      } else {
        if (_this.finalval2.length == 3) {
          _this.enterTxt2.x += 8;
        } else if (_this.finalval2.length == 2) {
          _this.enterTxt2.x += 12;
        } else if (_this.finalval2.length == 1) {
          _this.enterTxt2.x += 13;
        }
      }
      if (
        _this.finalval2.length == 3 &&
        (target.name != 11 || target.name != 10)
      ) {
        _this.fourNotEntered2 = true;
      } else if (_this.finalval2.length == 4) {
        _this.fourNotEntered2 = true;
      }
      _this.enterTxt2.scale.setTo(0.8, 1);
      _this.applyingStyleBlue(_this.enterTxt2);
      _this.enterTxt2.fontSize = "38px";
      _this.enterTxt2.visible = true;
    }
  },

  numClicked3: function (target) {
    _this.clickSound.play();
    var_selectedAns31 = " ";

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
    if (_this.selectedAns31 === "") {
      _this.selectedAns31 = target.name;
      var_selectedAns31 = _this.selectedAns31;
    }

    if (target.name == "+" || target.name == "-") {
      newstr = target.name + _this.finalval3;
      _this.signVal1 = target.name;
    } else if (_this.fourNotEntered3 == false) {
      _this.finalval3 += target.name;
    }

    if (target.name == "+") target.name = 11;
    if (target.name == "-") target.name = 10;

    if (
      _this.fourNotEntered3 == false ||
      target.name == 11 ||
      target.name == 10
    ) {
      _this.AnswerBox1.removeChild(_this.enterTxt3);
      _this.enterTxt3.visible = false;
      _this.enterTxt3 = _this.add.text(20, 11, "" + _this.finalval3, {
        fontSize: "32px",
      });

      if (_this.signVal1 == "+") {
        if (_this.finalval3.length == 2) {
          _this.enterTxt3.x += 1;
        } else if (_this.finalval3.length == 1) {
          _this.enterTxt3.x += 8;
        } else {
          _this.enterTxt3.x += 13;
        }
      } else if (_this.signVal1 == "-") {
        if (_this.finalval3.length == 2) {
          _this.enterTxt3.x += 5;
        } else if (_this.finalval3.length == 1) {
          _this.enterTxt3.x += 8;
        } else {
          _this.enterTxt3.x += 13;
        }
      } else {
        if (_this.finalval3.length == 2) {
          _this.enterTxt3.x += 13;
        } else if (_this.finalval3.length == 1) {
          _this.enterTxt3.x += 18;
        }
      }
      if (
        _this.finalval3.length == 3 &&
        (target.name != 11 || target.name != 10)
      ) {
        _this.fourNotEntered3 = true;
      } else if (_this.finalval3.length == 4) {
        _this.fourNotEntered3 = true;
      }
      _this.enterTxt3.scale.setTo(0.8, 1);
      _this.applyingStyleBlue(_this.enterTxt3);
      _this.AnswerBox1.addChild(_this.enterTxt3);
      _this.AnswerBox1.name = Number(_this.signVal1 + _this.finalval3);
      _this.enterTxt3.visible = true;
    }
  },

  addNumberPad4: function () {
    _this.objGroup = _this.add.group();
    _this.numGroup = _this.add.group();

    _this.selectedAns11 = "";
    _this.selectedAns21 = "";
    _this.selectedAns31 = "";

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
      _this.numbg.events.onInputDown.add(_this.numClicked4, _this);

      _this.x += 65;
    }

    _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, "Numberpad");
    _this.wrongbtn.frame = 12;
    _this.wrongbtn.anchor.setTo(0.5);
    _this.wrongbtn.scale.setTo(0.8);
    _this.wrongbtn.name = "wrongbtn";
    _this.wrongbtn.inputEnabled = true;
    _this.wrongbtn.input.useHandCursor = true;
    _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked4, _this);

    _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, "Numberpad");
    _this.rightbtn.frame = 13;
    _this.rightbtn.anchor.setTo(0.5);
    _this.rightbtn.scale.setTo(0.8);
    _this.rightbtn.name = "rightbtn";
    _this.rightbtn.inputEnabled = true;
    _this.rightbtn.input.useHandCursor = true;
    // _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked4, _this);

    _this.enterTxt1 = "";
    _this.enterTxt2 = "";
    _this.enterTxt3 = "";
    _this.enterTxt4 = "";

    _this.numpadTween = _this.add.tween(_this.numGroup);
    _this.tweenNumPad();
  },
  numClicked4: function (target) {
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
      newstr = target.name + _this.finalval4;
      _this.signVal1 = target.name;
    } else if (_this.fourNotEntered1 == false) {
      _this.finalval4 += target.name;
    }

    if (target.name == "+") target.name = 11;
    if (target.name == "-") target.name = 10;

    if (
      _this.fourNotEntered1 == false ||
      target.name == 11 ||
      target.name == 10
    ) {
      _this.enterTxt4.visible = false;
      _this.enterTxt4 = _this.add.text(740, 108, "" + _this.finalval4, {
        fontSize: "18",
      });

      if (_this.signVal1 == "+") {
        if (_this.finalval4.length == 2) {
          _this.enterTxt4.x += 1;
        } else if (_this.finalval4.length == 1) {
          _this.enterTxt4.x += 8;
        } else {
          _this.enterTxt4.x += 13;
        }
      } else if (_this.signVal1 == "-") {
        if (_this.finalval4.length == 2) {
          _this.enterTxt4.x += 5;
        } else if (_this.finalval4.length == 1) {
          _this.enterTxt4.x += 8;
        } else {
          _this.enterTxt4.x += 13;
        }
      } else {
        if (_this.finalval4.length == 2) {
          _this.enterTxt4.x += 8;
        } else if (_this.finalval4.length == 1) {
          _this.enterTxt4.x += 13;
        }
      }
      if (
        _this.finalval4.length == 3 &&
        (target.name != 11 || target.name != 10)
      ) {
        _this.fourNotEntered1 = true;
      } else if (_this.finalval4.length == 4) {
        _this.fourNotEntered1 = true;
      }
      _this.enterTxt4.scale.setTo(0.8, 1);
      _this.applyingStyleBlue(_this.enterTxt4);
      _this.enterTxt4.fontSize = "30px";
      _this.enterTxt4.visible = true;
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
    console.log("starActions");
    _this.sceneCount++;
    starAnim = _this.starsGroup.getChildAt(_this.numberOfQuestions);
    starAnim.smoothed = false;
    anim = starAnim.animations.add("star");
    _this.numberOfQuestions++;
    _this.microConcepts = "Number SystemsG8";
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
