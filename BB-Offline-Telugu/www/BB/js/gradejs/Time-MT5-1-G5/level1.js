Game.Time_MT5_1_G5level1 = function () { };

Game.Time_MT5_1_G5level1.prototype = {
  init: function (param, score) {
    _this = this;
    telInitializer.gameIdInit("MT5-1-Time",gradeSelected);
    this.Stararr = param;
    this.score = score;
    _this = this;

    _this.minuteTolerance = 3;
    _this.digitalminuteTolerance = 3;
    _this.hourTolerance = 20;
    _this.digitalDigits = [];
    _this.languageSelected = _this.getQuestionAudioLanguage();
    _this.clickSound = _this.createInlineAudio("sounds/ClickSound.mp3");
    _this.celebrationSound = _this.createInlineAudio("sounds/celebration.mp3");
    _this.counterCelebrationSound = _this.createInlineAudio(
      "sounds/counter_celebration.mp3",
    );
    _this.smallRewardSound = _this.createInlineAudio("sounds/Small Reward.mp3");
    _this.wrongans = _this.createInlineAudio("sounds/wrongans.mp3");
    _this.wrongSound = _this.createInlineAudio(
      "sounds/WrongCelebrationSound.mp3",
    );

    // Question audio files
    _this.Ask_Question1 = _this.createAudio("V1");
    _this.Ask_Question2 = _this.createAudio("V2");
    _this.Ask_Question3 = _this.createAudio("V3");
    _this.Ask_Question4 = _this.createAudio("V4");
    _this.Ask_AMPM = _this.createAudio("V5");
    _this.Ask_V6 = _this.createAudio("V6");
    _this.Ask_V7 = _this.createAudio("V7");
    _this.Ask_V8 = _this.createAudio("V8");
    _this.Ask_V9 = _this.createAudio("V9");
    _this.Ask_V10 = _this.createAudio("V10");
    _this.Ask_V11 = _this.createAudio("V11");
    _this.Ask_V12 = _this.createAudio("V12");
    _this.Ask_V13 = _this.createAudio("V13");
    _this.Ask_V14 = _this.createAudio("V14");
    _this.Ask_V15 = _this.createAudio("V15");
    _this.Ask_V16 = _this.createAudio("V16");
    _this.Ask_V17 = _this.createAudio("V17");
    _this.Ask_V18 = _this.createAudio("V18");

    _this.Ask_V19 = _this.createAudio("V19");
    _this.Ask_V20 = _this.createAudio("V20");
    _this.Ask_Question5_1 = _this.createAudio("V21");
    _this.Ask_Question5_2 = _this.createAudio("V22");
    _this.Ask_Question6_1 = _this.createAudio("V23");
    _this.Ask_Question6_2 = _this.createAudio("V24");
  },
  getQuestionAudioLanguage: function () {
    return window.languageSelected || "English";
  },
  getQuestionAudioBasePath: function () {
    var language = _this.languageSelected || _this.getQuestionAudioLanguage();

    if (language == "English") {
      return window.baseUrl + "questionSounds/Time-MT5-1-G5/English/";
    }
    else if (language == "Hindi") {
      return window.baseUrl + "questionSounds/Time-MT5-1-G5/Hindi/";
    }
    else if (language == "Kannada") {
      return window.baseUrl + "questionSounds/Time-MT5-1-G5/Kannada/";
    }
    else if (language == "Gujarati") {
      return window.baseUrl + "questionSounds/Time-MT5-1-G5/Gujarati/";
    }
    else if (language == "Marathi") {
      return window.baseUrl + "questionSounds/Time-MT5-1-G5/Marathi/";
    }
    else if (language == "Telugu") {
      return window.baseUrl + "questionSounds/Time-MT5-1-G5/Telugu/";
    }
    else if (language == "Tamil") {
      return window.baseUrl + "questionSounds/Time-MT5-1-G5/Tamil/";
    }
    else if (language == "Urdu") {
      return window.baseUrl + "questionSounds/Time-MT5-1-G5/Urdu/";
    }
    else {
      return window.baseUrl + "questionSounds/Time-MT5-1-G5/Odiya/";
    }
  },
  preload: function (game) {
    var preloadGrp = _this.add.group();
    _this.preloadBarOutline = _this.add.sprite(
      _this.world.centerX,
      _this.world.centerY,
      "prgressbarOutLine",
    );
    _this.preloadBars = _this.add.sprite(
      _this.world.centerX,
      _this.world.centerY,
      "preloadBar",
    );
    _this.time.advanceTiming = true;
    _this.load.setPreloadSprite(_this.preloadBars);

    preloadGrp.add(_this.preloadBarOutline);
    preloadGrp.add(_this.preloadBars);
    preloadGrp.x -= 105;
/*
    var assetBase = window.baseUrl + "assets/Time-MT5-1-G5/";
    var gradeAssetBase = assetBase + "gradeAssets/Time-MT5-1-G5/";
    var nestedGradeAssetBase = gradeAssetBase + "Time-MT5-1-G5/";
    var sharedAtlasBase = window.baseUrl + "assets/Time-MT5-2-G5/gradeAssets/Time-MT5-2-G5/";
    var questionSoundBase =
      window.baseUrl +
      "questionSounds/Time-MT5-1-G5/" +
      _this.languageSelected +
      "/";

    this.load.image("skipArrow", assetBase + "commonAssets/skipArrow.png");
    this.load.image("backg", assetBase + "commonAssets/backg.png");
    this.load.image("btn", assetBase + "commonAssets/btn.png");
    this.load.image("dotbox", assetBase + "commonAssets/dotbox.png");
    this.load.image("numbg", assetBase + "commonAssets/numbg.png");
    this.load.image("prgressbar", assetBase + "commonAssets/prgressbar.png");
    this.load.image(
      "prgressbarOutLine",
      assetBase + "commonAssets/prgressbarOutLine.png",
    );
    this.load.image("timer", assetBase + "commonAssets/timer.png");
    this.load.image("topicOutline", assetBase + "commonAssets/topicOutline.png");
    this.load.image("Bg", gradeAssetBase + "Bg.png");
    this.load.image("Background", gradeAssetBase + "Baground.png");
    this.load.image("navbar", assetBase + "commonAssets/navbar.png");
    this.load.image("hand", assetBase + "commonAssets/hand.png");
    this.load.image("timebg", assetBase + "commonAssets/timebg.png");
    this.load.image("glow", gradeAssetBase + "glow.png");
    this.load.image("AnalogClock", gradeAssetBase + "Analog clock.png");
    this.load.image("Box", gradeAssetBase + "Box.png");
    this.load.image("Box1", gradeAssetBase + "Box1.png");
    this.load.image("BgQ5", gradeAssetBase + "Baground.png");
    this.load.image("BoxQ5", gradeAssetBase + "Box.png");
    this.load.image("Character1Q5", gradeAssetBase + "Character 1.png");
    this.load.image("Character2Q5", gradeAssetBase + "Character 2.png");
    this.load.image("Character3Q5", gradeAssetBase + "Character 3.png");
    this.load.image("Character4Q5", gradeAssetBase + "Character 4.png");
    this.load.image("Character5Q5", gradeAssetBase + "Character 5.png");
    this.load.image("Character6Q5", gradeAssetBase + "Character 6.png");
    this.load.image("TrackQ5", gradeAssetBase + "Track.png");
    this.load.image("WhiteBoxQ5", gradeAssetBase + "Box.png");
    this.load.image("GreyBoxQ5", gradeAssetBase + "Grey box.png");
    this.load.image("GreenBoxQ5", gradeAssetBase + "Green box.png");
    this.load.image("PodiumQ5", gradeAssetBase + "Podium.png");
    this.load.image("Podium", gradeAssetBase + "Podium.png");
    this.load.image("BgQ6", gradeAssetBase + "Baground.png");
    this.load.image("BoxWithTrackQ6", gradeAssetBase + "Box with track.png");
    this.load.image("TimingGreyBoxQ6", gradeAssetBase + "Timing grey box.png");
    this.load.image("TimingBlackBoxQ6", gradeAssetBase + "Timing Black box.png");
    this.load.image("Train1Q6", gradeAssetBase + "Train 1 Png.png");
    this.load.image("Train2Q6", gradeAssetBase + "Train 2 Png.png");
    this.load.image("Train3Q6", gradeAssetBase + "Train 3 Png.png");
    this.load.image("Train4Q6", gradeAssetBase + "Train 4 Png.png");
    this.load.image("WhiteBoxQ6", gradeAssetBase + "White box.png");
    this.load.image("RedCircle", gradeAssetBase + "Red Circle.png");

    this.load.atlas(
      "allimg",
      gradeAssetBase + "allimg.png",
      gradeAssetBase + "allimg.json",
    );
    this.load.atlas(
      "CommonSpeakerBtn",
      assetBase + "commonAssets/speaker.png",
      assetBase + "commonAssets/speaker.json",
    );
    this.load.atlas(
      "backbtn",
      assetBase + "commonAssets/backbtn.png",
      assetBase + "commonAssets/backbtn.json",
    );
    this.load.atlas(
      "bulb",
      assetBase + "commonAssets/bulb.png",
      assetBase + "commonAssets/bulb.json",
    );
    this.load.atlas(
      "newBackBtn",
      assetBase + "commonAssets/newBackBtn.png",
      assetBase + "commonAssets/newBackBtn.json",
    );
    this.load.atlas(
      "starAnim",
      assetBase + "commonAssets/starAnim.png",
      assetBase + "commonAssets/starAnim.json",
    );
    this.load.atlas(
      "starAnim1",
      assetBase + "commonAssets/starAnim1.png",
      assetBase + "commonAssets/starAnim1.json",
    );
    this.load.atlas(
      "reply",
      assetBase + "commonAssets/reply.png",
      assetBase + "commonAssets/reply.json",
    );
    this.load.atlas(
      "CommonHomeBtn",
      assetBase + "commonAssets/homeBtn.png",
      assetBase + "commonAssets/homeBtn.json",
    );
    this.load.atlas(
      "CommonNextBtn",
      assetBase + "commonAssets/nextBtn.png",
      assetBase + "commonAssets/nextBtn.json",
    );
    this.load.atlas(
      "thumbsUp",
      gradeAssetBase + "thumbsUp.png",
      gradeAssetBase + "thumbsUp.json",
    );
    this.load.atlas(
      "thumbsDown",
      gradeAssetBase + "thumbsDown.png",
      gradeAssetBase + "thumbsDown.json",
    );
    this.load.atlas(
      "TimeMT5_1_RightClick",
      gradeAssetBase + "RightClick.png",
      gradeAssetBase + "RightClick.json",
    );
    this.load.atlas(
      "AM",
      nestedGradeAssetBase + "am.png",
      nestedGradeAssetBase + "am.json",
    );
    this.load.atlas(
      "PM",
      nestedGradeAssetBase + "pm.png",
      nestedGradeAssetBase + "pm.json",
    );
    this.load.atlas(
      "AM_Sprite",
      nestedGradeAssetBase + "am.png",
      nestedGradeAssetBase + "am.json",
    );
    this.load.atlas(
      "PM_Sprite",
      nestedGradeAssetBase + "pm.png",
      nestedGradeAssetBase + "pm.json",
    );
    this.load.atlas(
      "AM_Button",
      nestedGradeAssetBase + "am.png",
      nestedGradeAssetBase + "am.json",
    );
    this.load.atlas(
      "PM_Button",
      nestedGradeAssetBase + "pm.png",
      nestedGradeAssetBase + "pm.json",
    );
    this.load.atlas(
      "AnalogClocksprite",
      gradeAssetBase + "Analog clock 1.png",
      sharedAtlasBase + "Analog clock 1.json",
    );
    this.load.atlas(
      "TimeMT5_1_DigitalClock",
      gradeAssetBase + "Digital clock 1.png",
      gradeAssetBase + "Digital clock 1.json",
    );
    this.load.atlas(
      "TimeMT5_1_DigitalNum",
      gradeAssetBase + "Digital sprite.png",
      gradeAssetBase + "Digital sprite.json",
    );
    this.load.atlas(
      "TimeMT5_1_HourHand",
      gradeAssetBase + "HourHand.png",
      gradeAssetBase + "HourHand.json",
    );
    this.load.atlas(
      "TimeMT5_1_MinuteHand",
      gradeAssetBase + "MinuteHand.png",
      gradeAssetBase + "MinuteHand.json",
    );
    this.load.atlas(
      "TimeMT5_1_rightans",
      gradeAssetBase + "Right Answer.png",
      sharedAtlasBase + "Right Answer.json",
    );
    this.load.atlas(
      "TimeMT5_1_wrongans",
      gradeAssetBase + "Wrong Answer.png",
      sharedAtlasBase + "Wrong Answer.json",
    );

    for (var c = 1; c <= 22; c++) {
      this.load.image("C" + c, gradeAssetBase + "C" + c + ".png");
    }

    for (var clockFrame = 5; clockFrame <= 22; clockFrame++) {
      if (clockFrame === 14 || clockFrame === 15 || clockFrame === 16 || clockFrame === 17 || clockFrame === 18) {
        continue;
      }
      this.load.image(
        "C" + clockFrame + " Clock",
        gradeAssetBase + "C" + clockFrame + " Clock.png",
      );
    }

    for (var runner = 1; runner <= 6; runner++) {
      this.load.atlas(
        "Sprite " + runner,
        gradeAssetBase + "Sprite " + runner + ".png",
        gradeAssetBase + "Sprite " + runner + ".json",
      );
      this.load.atlas(
        "Sprite" + runner + "Q5",
        gradeAssetBase + "Sprite " + runner + ".png",
        gradeAssetBase + "Sprite " + runner + ".json",
      );
    }

    for (var train = 1; train <= 4; train++) {
      this.load.atlas(
        "Sprite" + train + "Q6",
        gradeAssetBase + "Train " + train + " sprite.png",
        gradeAssetBase + "Train " + train + " sprite.json",
      );
    }

    this.load.audio("clocktick", window.baseUrl + "sounds/clocktick.mp3");
    this.load.audio("dragSound", window.baseUrl + "sounds/Drag_Snap.mp3");
    this.load.audio("chime", window.baseUrl + "sounds/chime.mp3");
    this.load.audio("ClickSound", window.baseUrl + "sounds/ClickSound.mp3");
    this.load.audio("celebration", window.baseUrl + "sounds/celebration.mp3");
    this.load.audio(
      "counter_celebration",
      window.baseUrl + "sounds/counter_celebration.mp3",
    );
    this.load.audio("SmallReward", window.baseUrl + "sounds/Small Reward.mp3");
    this.load.audio("smallReward", window.baseUrl + "sounds/Small Reward.mp3");
    this.load.audio("wrongansSound", window.baseUrl + "sounds/wrongans.mp3");
    this.load.audio(
      "WrongCelebrationSound",
      window.baseUrl + "sounds/WrongCelebrationSound.mp3",
    );

    for (var v = 1; v <= 24; v++) {
      this.load.audio("Time_MT5_1_G5_V" + v, questionSoundBase + "V" + v + ".mp3");
    }*/
  },
  createInlineAudio: function (src) {
    var audio = document.createElement("audio");
    var audiosrc = document.createElement("source");
    var resolveAudioSrc = function (audioSrc) {
      if (/^(?:[a-z]+:)?\/\//i.test(audioSrc) || audioSrc.indexOf("file:") === 0) {
        return audioSrc;
      }

      return audioSrc;
    };

    audio.setAttribute("preload", "auto");
    audio.setAttribute("playsinline", "true");
    audio.setAttribute("webkit-playsinline", "true");
    audiosrc.setAttribute("src", resolveAudioSrc(src));
    audio.appendChild(audiosrc);
    audio._sourceCandidates = [src];
    audio._sourceCandidateIndex = 0;
    audio._sourceElement = audiosrc;

    audio.addEventListener("stalled", function () {
      try {
        audio.load();
      } catch (error) {
        console.warn("Audio reload skipped:", src, error);
      }
    });

    audio.addEventListener("error", function () {
      var nextIndex = audio._sourceCandidateIndex + 1;

      if (audio._sourceCandidates && nextIndex < audio._sourceCandidates.length) {
        audio._sourceCandidateIndex = nextIndex;
        src = audio._sourceCandidates[nextIndex];
        audio._sourceElement.setAttribute("src", resolveAudioSrc(src));
        audio.load();
        return;
      }

      console.warn("Audio failed to load:", src);
    });

    try {
      audio.load();
    } catch (error) {
      console.warn("Audio preload skipped:", src, error);
    }

    return audio;
  },
  create: function (game) {
    //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
    //* and then start after the game is unpaused and continues to call the gameCreate function.
    _this.time.events.add(1500, function () {
      _this.gameCreate(game);
    });
  },
  //  ViewDemoVideo: function () {
  //* pause the game before going to the demovideo
  //   _this.game.paused = true;
  //  _this.DemoVideo();
  //* at the end of demo video/skip pressed, it will unpause the game.
  // },

  //sets up the entire game UI
  gameCreate: function (game) {
    _this.noofAttempts = 0;//total attempt to answer q question
    _this.AnsTimerCount = 0;//total time
    _this.sceneCount = 0;//no of screen
    _this.questionid = 1 ;//always 1
    _this.activityImage = null;
    _this.yesBtn = null;
    _this.noBtn = null;
    _this.amBtn = null;
    _this.pmBtn = null;
    _this.isTransitioning = false;
    _this.audioUnlocked = false;
    _this.pendingQuestionAudio = null;
    _this.activeQuestionAudio = null;
    _this.questionAudioPlayToken = 0;

    _this.totalQuestions = 6; // Total number of mini games/questions
    _this.currentQuestion = 1; // Start from question 1
    _this.correctAnswers = 0; //  // Number of correct answers
    // Timer variables
    _this.seconds = 0;
    _this.minutes = 0;
    _this.counterForTimer = 0;

    // Button state flags
    _this.speakerbtnClicked = false;
    _this.rightbtn_Clicked = false;

    _this.shake = new Phaser.Plugin.Shake(game);
    game.plugins.add(_this.shake);

    // Background setup
    _this.background = _this.add.sprite(0, 0, "Bg");
    _this.background.width = _this.world.width;
    _this.background.height = _this.world.height;

    _this.Q3background = _this.add.sprite(0, 0, "Background");
    _this.Q3background.width = _this.world.width;
    _this.Q3background.height = _this.world.height;
    _this.Q3background.visible = false;

    // Navbar setup
    _this.navbar = _this.add.sprite(0, 0, "navbar");

    // Back button to go to score page
    _this.backbtn = _this.add.sprite(5, 6, "newCommonBackBtnForAll");
    _this.backbtn.inputEnabled = true;
    _this.backbtn.input.useHandCursor = true;
    // Ensure button stays above all objects
    _this.world.bringToTop(_this.backbtn);

    // On click → move to score state
    _this.backbtn.events.onInputDown.add(function () {
      _this.stopClockTick();
      this.state.start("grade5Measurement");
    }, _this);

    // Speaker button used to replay the current question audio
    _this.speakerbtn = _this.add.sprite(600, 6, "grade11_speaker");

    // Enable input interaction for the speaker button
    _this.speakerbtn.inputEnabled = true;
    _this.speakerbtn.input.useHandCursor = true;

    // When speaker button is clicked, replay the question audio
    _this.speakerbtn.events.onInputDown.add(function () {
      telInitializer.tele_interactEvent("TOUCH", "speaker");
      _this.clickSound.play();

      // Replay the current question audio from the beginning
      if (_this.currentQuestionAudio) {
        _this.stopQuestionAudio(_this.currentQuestionAudio);
        _this.playQuestionAudio(_this.currentQuestionAudio);
      }
    }, _this);

    // Timer background image displayed in the navigation bar
    _this.timebg = _this.add.sprite(305, 6, "timebg");
    // Text object used to display the running timer (minutes : seconds)
    _this.timeDisplay = _this.add.text(
      330,
      22,
      _this.minutes + " : " + _this.seconds,
    );
    _this.timeDisplay.anchor.setTo(0.5);
    _this.timeDisplay.align = "center";
    _this.timeDisplay.font = "Oh Whale";
    _this.timeDisplay.fontSize = 20;
    _this.timeDisplay.fill = "#ADFF2F";

    // Update the timer every second
    _this.time.events.loop(Phaser.Timer.SECOND, _this.updateTimer, _this);
    
   
    _this.game.input.onDown.addOnce(function () {
      _this.audioUnlocked = true;

      if (_this.pendingQuestionAudio) {
        _this.playQuestionAudio(_this.pendingQuestionAudio);
        _this.pendingQuestionAudio = null;
      }
    }, _this);
    _this.generateStarsForTheScene(6);
    _this.startMiniGame();
  },

  createAudio: function (src) {
    return _this.createInlineAudio(_this.getQuestionAudioBasePath() + src + ".mp3");
  },
  stopQuestionAudio: function (audioEl) {
    if (!audioEl) return;

    if (_this.activeQuestionAudio === audioEl) {
      _this.activeQuestionAudio = null;
    }

    audioEl.pause();
    audioEl.currentTime = 0;
  },
  stopClockTick: function () {
    if (!_this.clockTick) return;

    _this.clockTick.stop();
    if (typeof _this.clockTick.loopFull === "function") {
      _this.clockTick.loopFull(0);
    }
    if (typeof _this.clockTick.destroy === "function") {
      _this.clockTick.destroy();
    }
    _this.clockTick = null;
  },
  getAtlasFrameNames: function (atlasKey) {
    var frameData = _this.cache.getFrameData(atlasKey);
    if (!frameData || !frameData._frames || !frameData._frames.length) {
      return [];
    }

    return frameData._frames.map(function (frame) {
      return frame.name;
    });
  },
  getAtlasFirstFrame: function (atlasKey) {
    var frames = _this.getAtlasFrameNames(atlasKey);
    return frames.length ? frames[0] : null;
  },
  addAtlasLoopAnimation: function (sprite, animationKey, atlasKey, frameRate) {
    var frames = _this.getAtlasFrameNames(atlasKey);
    if (!frames.length) {
      return null;
    }

    return sprite.animations.add(animationKey, frames, frameRate || 12, true);
  },

  trimRightEdge: function (sprite, pixels) {
    if (
      !sprite ||
      !sprite.texture ||
      !sprite.texture.frame ||
      sprite.texture.frame === null ||
      typeof sprite.texture.frame.width !== "number" ||
      typeof sprite.texture.frame.height !== "number" ||
      typeof sprite.crop !== "function"
    ) {
      return;
    }

    var trimPixels = pixels || 1;
    var frameWidth = sprite.texture.frame.width;
    var frameHeight = sprite.texture.frame.height;

    try {
      sprite.crop(
        new Phaser.Rectangle(
          0,
          0,
          Math.max(1, frameWidth - trimPixels),
          frameHeight,
        ),
      );

      if (typeof sprite.updateCrop === "function") {
        sprite.updateCrop();
      }
    } catch (error) {
      console.warn(
        "trimRightEdge skipped:",
        error && error.message ? error.message : error,
      );
    }
  },
  safeDestroy: function (sprite) {
    if (sprite && typeof sprite.destroy === "function") {
      sprite.destroy();
    }
  },
  destroyQuestionOneAndTwoClock: function () {
    if (_this.activityClockTween) {
      _this.activityClockTween.stop();
      _this.activityClockTween = null;
    }

    if (_this.activityClockScaleTween) {
      _this.activityClockScaleTween.stop();
      _this.activityClockScaleTween = null;
    }

    _this.safeDestroy(_this.activityClock);
    _this.activityClock = null;
  },
  showActivityClockIfAvailable: function (
    frameNumber,
    imageX,
    imageY,
    imageWidth,
    imageHeight,
  ) {
    var clockKey = "C" + frameNumber + " Clock";

    _this.destroyQuestionOneAndTwoClock();

    if (!_this.cache.checkImageKey(clockKey)) {
      return;
    }

    _this.activityClock = _this.add.sprite(
      imageX + imageWidth / 2 - 62,
      imageY + imageHeight / 2 - 62,
      clockKey,
    );
    _this.activityClock.anchor.setTo(0.5);

    var maxClockWidth = Math.min(110, imageWidth * 0.24);
    var maxClockHeight = Math.min(110, imageHeight * 0.28);
    var scaleX = maxClockWidth / _this.activityClock.width;
    var scaleY = maxClockHeight / _this.activityClock.height;
    var clockScale = Math.min(scaleX, scaleY);

    _this.activityClock.scale.setTo(clockScale);
    _this.activityClock.angle = -6;
    _this.activityClock.alpha = 0;

    _this.add.tween(_this.activityClock).to(
      { alpha: 1 },
      250,
      Phaser.Easing.Cubic.Out,
      true,
    );

    _this.activityClockTween = _this.add.tween(_this.activityClock).to(
      { y: _this.activityClock.y - 10, angle: 6 },
      900,
      Phaser.Easing.Sinusoidal.InOut,
      true,
      0,
      -1,
      true,
    );

    _this.activityClockScaleTween = _this.add.tween(_this.activityClock.scale).to(
      {
        x: clockScale * 1.05,
        y: clockScale * 1.05,
      },
      900,
      Phaser.Easing.Sinusoidal.InOut,
      true,
      0,
      -1,
      true,
    );
  },
  clearQuestionOneAndTwoUI: function () {
    if (_this.glowTimer) {
      _this.time.events.remove(_this.glowTimer);
      _this.glowTimer = null;
    }

    _this.safeDestroy(_this.glow);
    _this.glow = null;

    _this.safeDestroy(_this.activityImage);
    _this.activityImage = null;

    _this.destroyQuestionOneAndTwoClock();

    _this.safeDestroy(_this.yesBtn);
    _this.yesBtn = null;

    _this.safeDestroy(_this.noBtn);
    _this.noBtn = null;

    _this.safeDestroy(_this.amBtn);
    _this.amBtn = null;

    _this.safeDestroy(_this.pmBtn);
    _this.pmBtn = null;
  },
  playCollectedStar: function (starIndex) {
    if (!_this.starsGroup) return;

    var star = _this.starsGroup.getChildAt(starIndex);
    if (!star || !star.animations) return;

    if (!star.animations.getAnimation("shine")) {
      star.animations.add("shine");
    }

    star.animations.play("shine", 24, false);
  },
  playQuestionAudio: function (audioEl, resetTime) {
    if (!audioEl) return;

    if (_this.activeQuestionAudio && _this.activeQuestionAudio !== audioEl) {
      _this.stopQuestionAudio(_this.activeQuestionAudio);
    }

    _this.activeQuestionAudio = audioEl;

    if (resetTime !== false) {
      audioEl.pause();
      audioEl.currentTime = 0;
    }

    var playToken = ++_this.questionAudioPlayToken;

    var startPlayback = function () {
      if (_this.questionAudioPlayToken !== playToken) {
        return;
      }

      var playPromise = audioEl.play();

      // Ignore benign play/pause races, but surface real playback errors.
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function (error) {
          if (error && error.name === "NotAllowedError") {
            _this.pendingQuestionAudio = audioEl;
            return;
          }

          if (
            !error ||
            (error.name !== "AbortError" && error.name !== "NotAllowedError")
          ) {
            console.error(error);
          }
        });
      }
    };

    audioEl.onended = function () {
      if (_this.activeQuestionAudio === audioEl) {
        _this.activeQuestionAudio = null;
      }
    };

    audioEl.onpause = function () {
      if (
        _this.activeQuestionAudio === audioEl &&
        !audioEl.ended &&
        !_this.isTransitioning
      ) {
        _this.activeQuestionAudio = audioEl;
      }
    };

    if (audioEl.readyState >= 3) {
      startPlayback();
      return;
    }

    audioEl.oncanplaythrough = function () {
      audioEl.oncanplaythrough = null;
      startPlayback();
    };

    audioEl.load();
  },
  setQuestionBackground: function (useClockBackground) {
    if (_this.background) {
      _this.background.visible = !useClockBackground;
    }

    if (_this.Q3background) {
      _this.Q3background.visible = useClockBackground;
    }
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
        _this.seconds = 0.0;
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

  // Creates star placeholders at top of screen
  generateStarsForTheScene: function (count) {

    _this.AnsTimerCount = 0;
    _this.starsGroup = _this.add.group();

    for (var i = 0; i < count; i++) {
      var star = _this.starsGroup.create(
        _this.world.centerX - 120 + i * 40,
        10,
        "unity1.2AstarAnim",
        0,
      );

      // slightly larger default size
      star.scale.setTo(0.9);
    }
  },
  // Called when a mini game starts

  startMiniGame: function () {
    _this.isTransitioning = false;
    _this.getQuestion();
  },

  // Determines which question/game should run

  getQuestion: function () {

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

    switch (_this.currentQuestion) {
      case 1:
        _this.Question1();
        break;

      case 2:
        _this.Question2();
        break;

      case 3:
        _this.Question3();
        break;

      case 4:
        _this.Question4();
        break;

      case 5:
        _this.Question5();
        break;

      case 6:
        _this.Question6();
        break;
    }
    
  },
  //---------------------------Question 1 Logic-----------------------------

  //Mini game 1 - Morning, Noon, Evening, Night
  Question1: function () {
    _this.sceneCount++;
    _this.questionid=1;
    _this.setQuestionBackground(false);

    _this.timeBuckets = {
      morning: [14, 15, 16, 17, 18],
      noon: [9, 10, 11, 12, 13],
      evening: [5, 6, 7, 8],
      night: [1, 2, 3, 4],
    };

    _this.questionTypes = ["morning", "noon", "evening", "night"];

    // Image in center of LEFT half
    var imageX = _this.world.width * 0.38;
    var imageY = _this.world.centerY;

    // Buttons in center of RIGHT half, positioned relative to the image Y
    var buttonX = _this.world.width * 0.78;
    var yesY = imageY - 70;
    var noY = imageY + 70;

    _this.yesBtn = _this.add.sprite(buttonX, yesY, "thumbsUp", "up");
    _this.noBtn = _this.add.sprite(buttonX, noY, "thumbsDown", "up");

    // center anchors so the coordinates refer to button centers
    _this.yesBtn.anchor.setTo(0.5);
    _this.noBtn.anchor.setTo(0.5);

    // Keep both feedback buttons visually identical even if atlas frame sizes differ slightly.
    var thumbButtonSize = 133;
    _this.yesBtn.width = thumbButtonSize;
    _this.yesBtn.height = thumbButtonSize;
    _this.noBtn.width = thumbButtonSize;
    _this.noBtn.height = thumbButtonSize;

    _this.yesBtn.inputEnabled = true;
    _this.noBtn.inputEnabled = true;

    _this.yesBtn.events.onInputDown.add(_this.checkAnswerYes, _this);
    _this.noBtn.events.onInputDown.add(_this.checkAnswerNo, _this);

    if (_this.game.sound.context) {
      _this.game.sound.context.resume();
    }

    // Question generation logic
    _this.currentQuestionType =
      _this.questionTypes[_this.rnd.integerInRange(0, 3)];

    _this.currentFrame = _this.rnd.integerInRange(1, 18);

    if (_this.activityImage) _this.activityImage.destroy();

    _this.activityImage = _this.add.sprite(
      imageX,
      imageY,
      "C" + _this.currentFrame,
    );

    _this.activityImage.anchor.setTo(0.5);

    // ✅ FIT IMAGE PROPERLY (NO DISTORTION)
    var maxWidth = 460;
    var maxHeight = 350;

    var scaleX = maxWidth / _this.activityImage.width;
    var scaleY = maxHeight / _this.activityImage.height;

    var scale = Math.min(scaleX, scaleY);

    _this.activityImage.scale.setTo(scale);
    _this.showActivityClockIfAvailable(
      _this.currentFrame,
      imageX,
      imageY,
      _this.activityImage.width,
      _this.activityImage.height,
    );

    if (_this.currentQuestionType == "morning")
      _this.currentQuestionAudio = _this.Ask_Question1;

    if (_this.currentQuestionType == "noon")
      _this.currentQuestionAudio = _this.Ask_Question2;

    if (_this.currentQuestionType == "evening")
      _this.currentQuestionAudio = _this.Ask_Question3;

    if (_this.currentQuestionType == "night")
      _this.currentQuestionAudio = _this.Ask_Question4;

    _this.playQuestionAudio(_this.currentQuestionAudio);
  },
  checkAnswerYes: function () {

     _this.noofAttempts++; 
    if (_this.isTransitioning) return;

    _this.yesBtn.inputEnabled = false;
    _this.noBtn.inputEnabled = false;

    _this.clickSound.play();
    _this.yesBtn.frameName = "down";
    _this.noBtn.frameName = "up";

    var isCorrect = _this.timeBuckets[_this.currentQuestionType].includes(
      _this.currentFrame,
    );

    if (isCorrect) {
      _this.correctAnswer();

      //for api
            //edited for baseurl apk
            
            telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //..............

            console.log(_this.noofAttempts, "_this.noofAttempts.................");
            console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
            console.log(_this.sceneCount, "_this.sceneCount.................");
            console.log(_this.questionid, "_this.questionid.................");
    } else {
      _this.wrongAnswer(_this.yesBtn);
    }

  
  },

  checkAnswerNo: function () {
     _this.noofAttempts++;
    if (_this.isTransitioning) return;

    _this.yesBtn.inputEnabled = false;
    _this.noBtn.inputEnabled = false;

    _this.clickSound.play();
    _this.noBtn.frameName = "down";
    _this.yesBtn.frameName = "up";

    var isCorrect = !_this.timeBuckets[_this.currentQuestionType].includes(
      _this.currentFrame,
    );

    if (isCorrect) {
      _this.correctAnswer();

      //for api
            //edited for baseurl apk
           telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //..............

            console.log(_this.noofAttempts, "_this.noofAttempts.................");
            console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
            console.log(_this.sceneCount, "_this.sceneCount.................");
            console.log(_this.questionid, "_this.questionid.................");
    } else {
      _this.wrongAnswer(_this.noBtn);
    }
  },
  addGlowtoTheSprite: function (target) {
    if (!target || !target.parent) return;

    if (_this.glowTimer) {
      _this.time.events.remove(_this.glowTimer);
      _this.glowTimer = null;
    }

    _this.safeDestroy(_this.glow);
    _this.glow = null;

    _this.glow = _this.add.sprite(target.x, target.y, "glow2");
    _this.glow.anchor.setTo(0.5);
    _this.glow.width = 500;
    _this.glow.height = 380;
    _this.glow.alpha = 0.8;

    var parent = target.parent;
    if (parent && typeof parent.getChildIndex === "function") {
      var targetIndex = parent.getChildIndex(target);
      parent.setChildIndex(_this.glow, Math.max(0, targetIndex));
      parent.setChildIndex(
        target,
        Math.min(parent.children.length - 1, targetIndex + 1),
      );
    }

    _this.glowTimer = _this.time.events.loop(250, function () {
      if (_this.glow) {
        _this.glow.alpha = _this.glow.alpha === 0.8 ? 1 : 0.8;
      }
    });
  },
  correctAnswer: function () {
    if (_this.isTransitioning) return;

    _this.isTransitioning = true;
    _this.celebrationSound.play();
    _this.stopQuestionAudio(_this.currentQuestionAudio);

    _this.correctAnswers++;
    _this.playCollectedStar(_this.correctAnswers - 1);

    // add glow
    _this.addGlowtoTheSprite(_this.activityImage);

    _this.currentQuestion++;

    _this.time.events.add(
      1500,
      function () {
        _this.clearQuestionOneAndTwoUI();
      },
      _this,
    );

    _this.time.events.add(
      2000,
      function () {
        if (_this.currentQuestion <= _this.totalQuestions) {
          _this.startMiniGame();
        } else {
          //_this.state.start("Score", _this.correctAnswers);
          _this.state.start('score', true, false, gameID);
        }
      },
      _this,
    );
  },
  wrongAnswer: function (selectedBtn, resetSelectedBtn) {
    _this.wrongans.play();

    if (_this.activityImage) {
      _this.shake.shake(10, _this.activityImage);
    }

    _this.time.events.add(1000, function () {
      if (typeof resetSelectedBtn === "function") {
        resetSelectedBtn();
      } else if (selectedBtn) {
        selectedBtn.frameName = "up";
      }

      if (_this.yesBtn) {
        _this.yesBtn.inputEnabled = true;
      }

      if (_this.noBtn) {
        _this.noBtn.inputEnabled = true;
      }

      if (_this.amBtn) {
        _this.amBtn.inputEnabled = true;
      }

      if (_this.pmBtn) {
        _this.pmBtn.inputEnabled = true;
      }
    });
  },
  //---------------------END OF QUESTION 1 LOGIC-----------------------
  Question2: function () {
    _this.questionid=2;
    _this.sceneCount++;
    _this.setQuestionBackground(false);

    console.log("Starting Game 2");
    // Randomly choose between Question Type 2A and 2B
    var type = _this.rnd.integerInRange(0, 1);

    // destroy previous objects
    if (_this.activityImage) {
      _this.activityImage.destroy();
      _this.activityImage = null;
    }

    if (_this.yesBtn) {
      _this.yesBtn.destroy();
      _this.yesBtn = null;
    }

    if (_this.noBtn) {
      _this.noBtn.destroy();
      _this.noBtn = null;
    }
    // ---------------- DATA SETUP ----------------
    // AM / PM buckets
    _this.timeBuckets = {
      am: [10, 14, 15, 16, 17, 18],
      pm: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13],
    };

    _this.questionTypes = ["am", "pm"];

    // positioning
    var imageX = _this.world.width * 0.36;
    var imageY = _this.world.centerY;
    var buttonX = _this.world.width * 0.77;

    // ---------------- QUESTION LOGIC ----------------
    if (type == 0) {
      // -------- Question Type 2A --------
      // Random activity → user decides AM or PM
      _this.currentFrame = _this.rnd.integerInRange(1, 18);
      _this.correctType = null;

      // Play generic question audio
      _this.currentQuestionAudio = _this.Ask_AMPM;
    } else {
      // Question 2B
      // Predefined question with correct answer
      var list = [
        { audio: _this.Ask_V6, frame: 14, ans: "am" },
        { audio: _this.Ask_V7, frame: 15, ans: "am" },
        { audio: _this.Ask_V8, frame: 16, ans: "am" },
        { audio: _this.Ask_V9, frame: 17, ans: "am" },
        { audio: _this.Ask_V10, frame: 18, ans: "am" },
        { audio: _this.Ask_V11, frame: 21, ans: "pm" },
        { audio: _this.Ask_V12, frame: 22, ans: "pm" },
        { audio: _this.Ask_V13, frame: 19, ans: "pm" },
        { audio: _this.Ask_V14, frame: 20, ans: "pm" },
        { audio: _this.Ask_V15, frame: 2, ans: "pm" },
        { audio: _this.Ask_V16, frame: 1, ans: "pm" },
        { audio: _this.Ask_V17, frame: 3, ans: "pm" },
        { audio: _this.Ask_V18, frame: 4, ans: "pm" },
      ];
      // Pick random question from list
      var q = list[_this.rnd.integerInRange(0, list.length - 1)];

      // Assign values
      _this.currentFrame = q.frame;
      _this.correctType = q.ans;
      _this.currentQuestionAudio = q.audio;
    }

    // ---------------- DISPLAY ACTIVITY IMAGE ----------------
    _this.activityImage = _this.add.sprite(
      imageX,
      imageY,
      "C" + _this.currentFrame,
    );

    _this.activityImage.anchor.setTo(0.5);

    // ✅ FIT IMAGE PROPERLY
    var maxWidth = 460;
    var maxHeight = 350;

    var scaleX = maxWidth / _this.activityImage.width;
    var scaleY = maxHeight / _this.activityImage.height;

    var scale = Math.min(scaleX, scaleY);

    _this.activityImage.scale.setTo(scale);
    _this.showActivityClockIfAvailable(
      _this.currentFrame,
      imageX,
      imageY,
      _this.activityImage.width,
      _this.activityImage.height,
    );

    // ---------------- BUTTON CREATION ----------------
    var targetButtonWidth = 150;
    var buttonScale = targetButtonWidth / 233;
    var buttonGap = 20;
    var scaledButtonHeight = 126 * buttonScale;
    var amY = imageY - (scaledButtonHeight / 2 + buttonGap);
    var pmY = imageY + (scaledButtonHeight / 2 + buttonGap);

    // AM button
    _this.amBtn = _this.add.sprite(
      buttonX,
      amY,
      "AM_Button",
      "Symbol 7 copy instance 10000",
    );
    _this.amBtn.anchor.setTo(0.5);
    _this.amBtn.smoothed = false;
    _this.amBtn.scale.setTo(buttonScale);
    _this.amBtn.inputEnabled = true;
    _this.amBtn.events.onInputDown.add(_this.checkAnswerAM, _this);

    // PM button
    _this.pmBtn = _this.add.sprite(
      buttonX,
      pmY,
      "PM_Button",
      "Symbol 8 copy instance 10000",
    );
    _this.pmBtn.anchor.setTo(0.5);
    _this.pmBtn.smoothed = false;
    _this.pmBtn.scale.setTo(buttonScale);
    _this.trimRightEdge(_this.pmBtn, 1);
    _this.pmBtn.inputEnabled = true;
    _this.pmBtn.events.onInputDown.add(_this.checkAnswerPM, _this);

    _this.playQuestionAudio(_this.currentQuestionAudio);
  },

  // When AM button is clicked
  checkAnswerAM: function () {
    _this.noofAttempts++;
    if (_this.isTransitioning) return;

    _this.amBtn.inputEnabled = false;
    _this.pmBtn.inputEnabled = false;

    _this.clickSound.play();
    _this.amBtn.frameName = "Symbol 7 copy instance 10001";
    _this.pmBtn.frameName = "Symbol 8 copy instance 10000";
    _this.trimRightEdge(_this.pmBtn, 1);

    // Check correctness
    var isCorrect =
      (_this.correctType && _this.correctType == "am") || // Type 2B
      (!_this.correctType &&
        _this.timeBuckets["am"].includes(_this.currentFrame)); // Type 2A

    if (isCorrect) {
      _this.correctAnswer();

      //for api
            //edited for baseurl apk
            telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //..............

            console.log(_this.noofAttempts, "_this.noofAttempts.................");
            console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
            console.log(_this.sceneCount, "_this.sceneCount.................");
            console.log(_this.questionid, "_this.questionid.................");
    } else {
      _this.wrongAnswer(_this.amBtn, function () {
        _this.amBtn.frameName = "Symbol 7 copy instance 10000";
      });
    }
  },

  // When PM button is clicked
  checkAnswerPM: function () {
     _this.noofAttempts++;
    if (_this.isTransitioning) return;

    _this.amBtn.inputEnabled = false;
    _this.pmBtn.inputEnabled = false;

    _this.clickSound.play();
    _this.pmBtn.frameName = "Symbol 8 copy instance 10001";
    _this.amBtn.frameName = "Symbol 7 copy instance 10000";
    _this.trimRightEdge(_this.pmBtn, 1);

    // Check correctness
    var isCorrect =
      (_this.correctType && _this.correctType == "pm") || // Type 2B
      (!_this.correctType &&
        _this.timeBuckets["pm"].includes(_this.currentFrame)); // Type 2A

    if (isCorrect) {
      _this.correctAnswer();

      //for api
            //edited for baseurl apk
            telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //..............

            console.log(_this.noofAttempts, "_this.noofAttempts.................");
            console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
            console.log(_this.sceneCount, "_this.sceneCount.................");
            console.log(_this.questionid, "_this.questionid.................");
    } else {
      _this.wrongAnswer(_this.pmBtn, function () {
        _this.pmBtn.frameName = "Symbol 8 copy instance 10000";
        _this.trimRightEdge(_this.pmBtn, 1);
      });
    }
  },
  //--------------------WRITE LOGIC OF OTHER GAMES LIKE QUESTION 3, 4 AND SO ON FROM HERE---------------
  Question3: function () {
    _this.questionid=3;
    _this.sceneCount++;
    _this.setQuestionBackground(true);

    // destroy previous objects
    if (_this.activityImage) {
      _this.activityImage.destroy();
      _this.activityImage = null;
    }

    if (_this.yesBtn) {
      _this.yesBtn.destroy();
      _this.yesBtn = null;
    }

    if (_this.noBtn) {
      _this.noBtn.destroy();
      _this.noBtn = null;
    }

    if (_this.amBtn) {
      _this.amBtn.destroy();
      _this.amBtn = null;
    }
    if (_this.pmBtn) {
      _this.pmBtn.destroy();
      _this.pmBtn = null;
    }
    _this.stopClockTick();
    _this.clockTick = _this.add.audio("clocktick");
    _this.clockTick.play();
    _this.clockTick.loopFull(1);

    _this.background.destroy();

    _this.createClockUI();

    _this.currentQuestionAudio = _this.Ask_V19;

    _this.playQuestionAudio(_this.currentQuestionAudio);


    _this.digitalClock.animations.add('glow2', [0, 1], 3, true);
    _this.digitalClock.animations.play('glow2');

    _this.currentQuestionAudio.onended = function () {

      _this.time.events.add(700, function () {

        _this.digitalClock.animations.stop('glow2');
        _this.digitalClock.frame = 0;

      }, _this);

    };
    _this.rightbtn = _this.add.sprite(860, 255, "TimeMT5_1_RightClick");
    _this.rightbtn.inputEnabled = true;
    _this.rightbtn.input.useHandCursor = true;
    _this.rightbtn.events.onInputDown.add(_this.checkDigitalAnswer, _this);

    _this.generateRandomTime();

    if (_this.randomAMPM == "AM") {
      _this.am.x = 177;
      _this.pm.visible = false;
      _this.am.frame = 1;
      _this.pm.frame = 0;
      _this.trimRightEdge(_this.pm, 1);
    } else {
      _this.pm.x = 177;
      _this.am.visible = false;
      _this.pm.frame = 1;
      _this.am.frame = 0;
      _this.trimRightEdge(_this.pm, 1);
    }

    //---------------- PLACE ANALOG HANDS ----------------//

    _this.minuteHandSprite.angle = _this.correctMinuteAngle - 90;
    _this.hourHandSprite.angle = _this.correctHourAngle - 90;

    //---------------- DIGITAL INPUT ----------------//

    _this.addScrollableDigitalClock();
  },

  Question4: function () {
    _this.questionid=4;
    _this.sceneCount++;
    _this.createClockUI();

    _this.stopClockTick();
    _this.clockTick = _this.add.audio("clocktick");
    _this.clockTick.play();
    _this.clockTick.loopFull(1);
    // _this.Ask_V20.play();

    _this.currentQuestionAudio = _this.Ask_V20;
    _this.playQuestionAudio(_this.currentQuestionAudio);

    _this.setupAMPMSelection();

    _this.analogClock.animations.add('glow2', [0, 1], 3, true);
    _this.analogClock.animations.play('glow2');

    _this.currentQuestionAudio.onended = function () {

      _this.time.events.add(700, function () {

        _this.analogClock.animations.stop('glow2');
        _this.analogClock.frame = 0;

      }, _this);

    };

    _this.rightbtn = _this.add.sprite(860, 255, "TimeMT5_1_RightClick");
    _this.rightbtn.inputEnabled = true;
    _this.rightbtn.input.useHandCursor = true;
    _this.rightbtn.events.onInputDown.add(_this.toCheckangle, _this);

    _this.am.input.useHandCursor = true;
    _this.pm.input.useHandCursor = true;

    _this.generateRandomTime();

    _this.enableClockDragging();

    _this.placeRandomStartTime();

    _this.addNumberPad();
  },

  showClockSuccessAnim: function () {

    _this.clockGroup = _this.add.group();

    _this.clockGroup.add(_this.analogClock);
    _this.clockGroup.add(_this.hourHandSprite);
    _this.clockGroup.add(_this.minuteHandSprite);
    _this.clockGroup.add(_this.redCircle);

    // glow start
    _this.analogClock.animations.add('glow2', [0, 1], 3, true);
    _this.analogClock.animations.play('glow2');

    let tween = _this.add
      .tween(_this.clockGroup.scale)
      .to(
        { x: 1.04, y: 1.04 },
        300,
        Phaser.Easing.Quadratic.Out,
        true,
        0,
        1,
        true
      );

    // stop glow after animation
    tween.onComplete.addOnce(function () {

      _this.time.events.add(200, function () {

        _this.analogClock.animations.stop('glow2');
        _this.analogClock.frame = 0;

      }, _this);


    });

  },

  showDigitalClockSuccessAnim: function () {

    _this.digitalClockGroup = _this.add.group();

    _this.digitalClockGroup.add(_this.digitalClock);

    for (var i = 0; i < _this.digitalDigits.length; i++) {
      _this.digitalClockGroup.add(_this.digitalDigits[i]);
    }

    // glow start
    _this.digitalClock.animations.add('glow2', [0, 1], 3, true);
    _this.digitalClock.animations.play('glow2');

    let tween = _this.add
      .tween(_this.digitalClockGroup.scale)
      .to(
        { x: 1.025, y: 1.025 },
        300,
        Phaser.Easing.Quadratic.Out,
        true,
        0,
        1,
        true
      );

    tween.onComplete.addOnce(function () {

      _this.time.events.add(200, function () {

        _this.digitalClock.animations.stop('glow2');
        _this.digitalClock.frame = 0;

      }, _this);

    }, _this);



  },
  createClockUI: function () {


    _this.box1 = _this.add.sprite(5, 80, "Box1");
    _this.box2 = _this.add.sprite(420, 80, "Box1");

    _this.analogClock = _this.add.sprite(70, 95, "AnalogClocksprite");
    _this.analogClock.scale.set(1, 1.05);

    //  _this.analogClock.animations.add('glow', [0, 1], 3, true);
    //   _this.analogClock.animations.play('glow');


    _this.am = _this.add.sprite(140, 450, "AM");
    _this.pm = _this.add.sprite(220, 450, "PM");

    _this.am.anchor.setTo(0.5);
    _this.pm.anchor.setTo(0.5);
    _this.am.smoothed = false;
    _this.pm.smoothed = false;
    _this.am.scale.setTo(0.25, 0.25);
    _this.pm.scale.setTo(0.25, 0.25);
    _this.trimRightEdge(_this.pm, 1);



    _this.digitalClock = _this.add.sprite(445, 110, "TimeMT5_1_DigitalClock");
    _this.digitalClock.scale.set(1, 1.1);

    //  _this.digitalClock.animations.add('glow', [0, 1], 3, true);
    // _this.digitalClock.animations.play('glow');


    //---------------- CLOCK CENTER ----------------//

    _this.clockCenterX = _this.analogClock.x + _this.analogClock.width / 2 - 38;
    _this.clockCenterY = _this.analogClock.y + _this.analogClock.height / 2 + 34;


    _this.hourHandSprite = _this.add.sprite(
      _this.clockCenterX,
      _this.clockCenterY,
      "TimeMT5_1_HourHand",
    );

    //---------------- MINUTE HAND ----------------//

    _this.minuteHandSprite = _this.add.sprite(
      _this.clockCenterX,
      _this.clockCenterY,
      "TimeMT5_1_MinuteHand",
    );

    // Hour hand frame is 20px tall, pin radius ≈ 10px
    _this.hourHandSprite.anchor.setTo(10 / 61, 20 / 40);  // = 0.164

    // Minute hand frame is 25px tall, pin radius ≈ 12px  
    _this.minuteHandSprite.anchor.setTo(10 / 80, 20 / 52); // = 0.15


    //---------------- CENTER PIN ----------------//

    _this.redCircle = _this.add.sprite(
      _this.clockCenterX - 1,
      _this.clockCenterY,
      "RedCircle"
    );

    _this.redCircle.anchor.setTo(0.5);


  },
  generateRandomTime: function () {
    do {
      _this.randomHour24 = _this.rnd.integerInRange(0, 23);

      // Only multiples of 5
      _this.randomMinute = _this.rnd.integerInRange(0, 11) * 5;
      _this.randomHour = _this.randomHour24 % 12;
      if (_this.randomHour === 0) _this.randomHour = 12;

      _this.correctMinuteAngle = _this.randomMinute * 6;
      _this.correctHourAngle = _this.randomHour * 30 + _this.randomMinute * 0.5;

      var diff = Math.abs(_this.correctMinuteAngle - _this.correctHourAngle);
      if (diff > 180) diff = 360 - diff;
    } while (diff < 20);

    _this.randomAMPM = _this.randomHour24 < 12 ? "AM" : "PM";

    var HH =
      _this.randomHour24 < 10 ? "0" + _this.randomHour24 : _this.randomHour24;
    var MM =
      _this.randomMinute < 10 ? "0" + _this.randomMinute : _this.randomMinute;

    _this.digitalTime = HH + ":" + MM;
  },
  shakeQuestion3: function () {
    var objectsToShake = [_this.digitalClock]; // Digital clock background
    if (_this.digitalDigits) {
      objectsToShake = objectsToShake.concat(_this.digitalDigits); // Add 4 digit inputs
    }
    _this.shakeObjects(objectsToShake);
  },
  shakeQuestion4: function () {
    if (_this.wrongval == "am/pm") {
      var objectsToShake = [_this.am, _this.pm];
      _this.shakeObjects(objectsToShake);
    } else if (_this.wrongval == "clock") {
      var objectsToShake = [
        _this.analogClock,
        _this.hourHandSprite,
        _this.minuteHandSprite,
        _this.redCircle,
      ];
      _this.shakeObjects(objectsToShake);
    } else {
      var objectsToShake = [
        _this.analogClock,
        _this.hourHandSprite,
        _this.minuteHandSprite,
        _this.redCircle,
        _this.am,
        _this.pm,
      ];
      _this.shakeObjects(objectsToShake);
    }
  },
  shakeObjects: function (objects) {
    objects.forEach(function (obj) {
      _this.add
        .tween(obj)
        .to({ x: obj.x + 5 }, 50, Phaser.Easing.Linear.None, true, 0, 3, true);
    });
  },

  setupAMPMSelection: function () {
    _this.selectedAMPM = null;

    _this.am.inputEnabled = true;
    _this.pm.inputEnabled = true;

    _this.am.events.onInputDown.add(function () {
      _this.clickSound.pause();
      _this.clickSound.currentTime = 0;
      _this.clickSound.play();
      _this.selectedAMPM = "AM";

      _this.am.frame = 1;
      _this.pm.frame = 0;
      _this.trimRightEdge(_this.pm, 1);
    });

    _this.pm.events.onInputDown.add(function () {
      _this.selectedAMPM = "PM";
      _this.clickSound.pause();
      _this.clickSound.currentTime = 0;
      _this.clickSound.play();

      _this.pm.frame = 1;
      _this.am.frame = 0;
      _this.trimRightEdge(_this.pm, 1);
    });
  },
  placeRandomStartTime: function () {

    var attempts = 0;

    do {
      attempts++;
      var startMinute = _this.rnd.integerInRange(0, 59);
      var startHour = _this.rnd.integerInRange(1, 12);

      var startMinuteAngle = startMinute * 6;                          // 0-354
      var startHourAngle = ((startHour % 12) * 30) + (startMinute * 0.5); // 0-359, never exceeds 360

      // Normalize to 0-360
      var normMinute = ((startMinuteAngle % 360) + 360) % 360;
      var normHour = ((startHourAngle % 360) + 360) % 360;

      // Shortest arc in DEGREES
      var startDiff = Math.abs(normMinute - normHour);
      if (startDiff > 180) startDiff = 360 - startDiff;

      // Convert degree diff to MINUTES on clock face (divide by 6)
      var diffInMinutes = startDiff / 6;

      var sameAsCorrect = (
        startMinute === _this.randomMinute &&
        startHour === _this.randomHour
      );
    } while (
      diffInMinutes < 25 ||   // less than 25 minutes apart visually
      sameAsCorrect
    );

    _this.minuteHandSprite.rotation = (startMinuteAngle - 90) * Math.PI / 180;
    _this.hourHandSprite.rotation = (startHourAngle - 90) * Math.PI / 180;


  },

  enableClockDragging: function () {
    _this.hourHandSprite.inputEnabled = true;
    _this.minuteHandSprite.inputEnabled = true;

    _this.minuteHandSprite.events.onInputDown.add(function () {
      _this.draggingMinute = true;
      _this.minuteHandSprite.frame = 1;
    });

    _this.hourHandSprite.events.onInputDown.add(function () {
      _this.draggingHour = true;
      _this.hourHandSprite.frame = 1;
    });

    _this.game.input.onUp.add(function () {
      _this.draggingMinute = false;
      _this.draggingHour = false;
      _this.minuteHandSprite.frame = 0;
      _this.hourHandSprite.frame = 0;
    });

    _this.game.input.addMoveCallback(function (pointer) {
      var dx = pointer.x - _this.clockCenterX;
      var dy = pointer.y - _this.clockCenterY;
      var angle = Math.atan2(dy, dx);

      if (_this.draggingMinute) {
        _this.minuteHandSprite.rotation = angle; // atan2 already in radians, consistent
      }
      if (_this.draggingHour) {
        _this.hourHandSprite.rotation = angle;
      }
    }, _this);
  },

  toCheckangle: function (target) {
     _this.noofAttempts++;
    _this.clickSound.play();
    _this.rightbtn.frame = 1;

    //-------------------------
    // GET HAND ANGLES
    //-------------------------

    var minuteAngle = (_this.minuteHandSprite.angle + 360) % 360;
    var hourAngle = (_this.hourHandSprite.angle + 360) % 360;

    // adjust because sprite 12 o'clock = -90
    minuteAngle = (minuteAngle + 90) % 360;
    hourAngle = (hourAngle + 90) % 360;

    //-------------------------
    // CONVERT USER MINUTE
    //-------------------------

    var userMinute = Math.round(minuteAngle / 6);
    if (userMinute === 60) userMinute = 0;

    //-------------------------
    // CONVERT USER HOUR
    //-------------------------

    var hourFloat = hourAngle / 30;
    var userHour = Math.floor(hourFloat);

    if (userHour === 0) userHour = 12;

    //-------------------------
    // PRINT USER ANSWER
    //-------------------------

    console.log(
      "User Selected:",
      userHour + ":" + (userMinute < 10 ? "0" + userMinute : userMinute),
    );

    console.log(
      "Correct Time:",
      _this.randomHour +
      ":" +
      (_this.randomMinute < 10
        ? "0" + _this.randomMinute
        : _this.randomMinute),
      _this.randomAMPM,
    );

    //---------------- AM PM CHECK ----------------//

    if (_this.selectedAMPM == null) {
      _this.wrongval = "am/pm";
      _this.wrongAns();
      return;
    }

    var ampmCorrect = _this.selectedAMPM === _this.randomAMPM;

    //-------------------------
    // MINUTE CHECK
    //-------------------------

    var minuteDiff = Math.abs(userMinute - _this.randomMinute);

    // wraparound fix (59→0 case)
    if (minuteDiff > 30) {
      minuteDiff = 60 - minuteDiff;
    }

    var minuteCorrect = minuteDiff <= _this.minuteTolerance;

    //-------------------------
    // HOUR CHECK (ANGLE BASED)

    var expectedHourAngle =
      (_this.randomHour % 12) * 30 + _this.randomMinute * 0.5;

    var hourDiff = Math.abs(hourAngle - expectedHourAngle);

    if (hourDiff > 180) {
      hourDiff = 360 - hourDiff;
    }

    // allow half hour sector tolerance
    var hourCorrect = hourDiff <= _this.hourTolerance;

    //-------------------------
    // RESULT
    //-------------------------

    if (minuteCorrect && hourCorrect && ampmCorrect) {
      target.events.onInputDown.removeAll();
      _this.hourHandSprite.inputEnabled = false;
      _this.minuteHandSprite.inputEnabled = false;

      // Disable AM/PM
      _this.am.inputEnabled = false;
      _this.pm.inputEnabled = false;

      _this.showClockSuccessAnim();
      _this.sound = _this.add.audio("chime");
      _this.sound.play();

      _this.time.events.add(500, function () {

        //for api
            //edited for baseurl apk
          telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //..............

            console.log(_this.noofAttempts, "_this.noofAttempts.................");
            console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
            console.log(_this.sceneCount, "_this.sceneCount.................");
            console.log(_this.questionid, "_this.questionid.................");
        _this.correctAns();
      });
    } else if (minuteCorrect && hourCorrect && !ampmCorrect) {
      _this.wrongval = "am/pm";
      _this.wrongAns();
    } else if (ampmCorrect) {
      _this.wrongval = "clock";
      _this.wrongAns();
    } else {
      _this.wrongval = "all";
      _this.wrongAns();
    }
  },

  correctAns: function () {
    _this.celebrationSound.play();

    _this.correctAnswers++;
    var isFinalQuestion = _this.currentQuestion === _this.totalQuestions;

    var star = _this.starsGroup.getChildAt(_this.correctAnswers - 1);

    // highlight the star by tinting yellow and pop it with a scale tween
    star.animations.add("shine");
    star.animations.play("shine", 24, false);

    // add glow to the activity image
    _this.currentQuestion++;


    _this.time.events.add(1500, function () {
      if (_this.currentQuestion == 6) {
        if (_this.rightans) {
        _this.rightans.destroy();
      }
        _this.clearScreenUpdated();
      }
      else if (_this.currentQuestion <= _this.totalQuestions) {
        _this.clearScreen();
      }
    });

    _this.time.events.add(isFinalQuestion ? 2600 : 2000, function () {
      if (_this.currentQuestion <= _this.totalQuestions) {
        _this.startMiniGame();
      } else {
        _this.state.start("Time_MT5_1_G5Score", _this.correctAnswers);
      }
    });
  },

  wrongAns: function () {
    _this.wrongans.play();
    _this.rightbtn.frame = 0;

    // Question3 wrong answer
    if (_this.currentQuestion === 3) {
      _this.shakeQuestion3();
    }

    // Question4 wrong answer
    if (_this.currentQuestion === 4) {
      _this.shakeQuestion4();
    }
  },

  clearScreen: function () {
    _this.analogClock.destroy();
    _this.digitalClock.destroy();
    _this.hourHandSprite.destroy();
    _this.minuteHandSprite.destroy();
    _this.am.destroy();
    _this.pm.destroy();
    for (i = 0; i < _this.digitalDigits.length; i++) {
      _this.digitalDigits[i].destroy();
    }
    _this.redCircle.destroy();
    _this.rightbtn.destroy();
    _this.box1.destroy();
    _this.box2.destroy();

    if (_this.digitalClockOverlay) {
      _this.digitalClockOverlay.destroy();
      _this.digitalClockOverlay = null;
    }

    _this.stopClockTick();
  },

  checkDigitalAnswer: function (target) {
     _this.noofAttempts++;
    _this.rightbtn.frame = 1;
    _this.clickSound.play();

    var h1 = _this.digitalDigits[0].frame;
    var h2 = _this.digitalDigits[1].frame;
    var m1 = _this.digitalDigits[2].frame;
    var m2 = _this.digitalDigits[3].frame;

    var userHour = h1 * 10 + h2;
    var userMinute = m1 * 10 + m2;

    console.log("User Selected:", userHour + ":" + userMinute);
    console.log("Correct:", _this.randomHour24 + ":" + _this.randomMinute);

    // minute difference
    var minuteDiff = Math.abs(userMinute - _this.randomMinute);

    // handle wrap-around (e.g. 58 vs 01)
    minuteDiff = Math.min(minuteDiff, 60 - minuteDiff);

    if (
      userHour === _this.randomHour24 &&
      minuteDiff <= _this.digitalminuteTolerance
    ) {
      target.events.onInputDown.removeAll();

      _this.showDigitalClockSuccessAnim();
      _this.sound = _this.add.audio("chime");
      _this.sound.play();

      _this.time.events.add(500, function () {
        _this.correctAns();

        //for api
            //edited for baseurl apk
            telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //..............

            console.log(_this.noofAttempts, "_this.noofAttempts.................");
            console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
            console.log(_this.sceneCount, "_this.sceneCount.................");
            console.log(_this.questionid, "_this.questionid.................");
      });
    } else {
      _this.wrongAns();
    }
  },

  addNumberPad: function () {

    //---------------- DIGITAL DISPLAY ----------------//

    _this.digitalDigits = [];


    var startX = 517;
    var y = 228;




    var timeStr = _this.digitalTime.replace(":", "");

    for (var i = 0; i < timeStr.length; i++) {

      var num = parseInt(timeStr[i]);

      var digit = _this.add.sprite(startX + i * 44 + Math.floor(i / 2) * 44, y, "TimeMT5_1_DigitalNum");
      digit.scale.setTo(1.1)

      digit.frame = num;

      _this.digitalDigits.push(digit);


    }

  },
  addScrollableDigitalClock: function () {

    _this.digitalDigits = [];
    _this.activeDigit = null;

    var startX = 517;
    var y = 228;

    _this.snapSound = _this.add.audio('dragSound');

    // ── Create 4 digit display sprites (display only, no input on them) ──
    for (var i = 0; i < 4; i++) {

      var digit = _this.add.sprite(
        startX + i * 44 + Math.floor(i / 2) * 44,
        y,
        "TimeMT5_1_DigitalNum"
      );
      digit.scale.setTo(1.1)

      digit.frame = 0;
      digit.lastPointerY = 0;
      digit.accumulatedDelta = 0;
      digit.lastChangeTime = 0;

      _this.digitalDigits.push(digit);

    }

    // ── Single large transparent overlay covering the entire clock display ──
    // This is the ONLY input target — fat-finger proof, works on desktop & touch.
    var padX = 15;
    var padY = 15;
    var firstDigit = _this.digitalDigits[0];
    var lastDigit = _this.digitalDigits[3];

    var zoneX = firstDigit.x - padX;
    var zoneY = y - padY;
    var zoneW = (lastDigit.x + lastDigit.width + padX) - zoneX;
    var zoneH = firstDigit.height + padY * 2;

    // Graphics fill must exist (even nearly invisible) for Phaser hit-testing
    _this.digitalClockOverlay = _this.add.graphics(0, 0);
    _this.digitalClockOverlay.beginFill(0xffffff, 0.01);
    _this.digitalClockOverlay.drawRect(zoneX, zoneY, zoneW, zoneH);
    _this.digitalClockOverlay.endFill();
    _this.digitalClockOverlay.inputEnabled = true;
    _this.digitalClockOverlay.input.useHandCursor = true;

    // Store digit x-ranges for column detection
    _this.digitColumns = _this.digitalDigits.map(function (d) {
      return { left: d.x - padX / 2, right: d.x + d.width + padX / 2, digit: d };
    });

    _this.digitalClockOverlay.events.onInputDown.add(function () {
      var px = _this.game.input.activePointer.x;
      var py = _this.game.input.activePointer.y;

      // Pick whichever column the finger landed in
      _this.activeDigit = null;
      for (var c = 0; c < _this.digitColumns.length; c++) {
        var col = _this.digitColumns[c];
        if (px >= col.left && px <= col.right) {
          _this.activeDigit = col.digit;
          break;
        }
      }
      // Fallback: nearest digit by x distance
      if (!_this.activeDigit) {
        var best = null, bestDist = Infinity;
        for (var c = 0; c < _this.digitalDigits.length; c++) {
          var d = _this.digitalDigits[c];
          var dist = Math.abs(px - (d.x + d.width / 2));
          if (dist < bestDist) { bestDist = dist; best = d; }
        }
        _this.activeDigit = best;
      }

      if (_this.activeDigit) {
        _this.activeDigit.lastPointerY = py;
        _this.activeDigit.accumulatedDelta = 0;
        _this.activeDigit.lastChangeTime = 0;
      }
    });

    // Release: use global onUp so drag outside overlay still clears state
    _this.game.input.onUp.add(function () {
      if (_this.activeDigit) {
        _this.activeDigit.accumulatedDelta = 0;
        _this.activeDigit = null;
      }
    }, _this);

  },
  update: function () {

    if (!_this.activeDigit) return;

    var now = _this.game.time.now;
    var digit = _this.activeDigit;
    var pointerY = _this.game.input.activePointer.y;

    var delta = pointerY - digit.lastPointerY;
    digit.lastPointerY = pointerY;
    digit.accumulatedDelta += delta;

    // STEP  — minimum drag distance before a change is even considered.
    // COOLDOWN — minimum time (ms) between two consecutive digit changes.
    // Together they make it impossible to skip digits accidentally on fast swipes.
    var STEP = 18;   // px of drag to register intent
    var COOLDOWN = 180;  // ms — max ~5 changes/sec even on fastest swipe

    if ((now - digit.lastChangeTime) < COOLDOWN) return;

    if (digit.accumulatedDelta >= STEP) {
      digit.frame = (digit.frame + 9) % 10; // swipe down → digit decreases
      digit.accumulatedDelta = 0;            // reset: need fresh drag for next step
      digit.lastChangeTime = now;
      if (_this.snapSound) { _this.snapSound.play(); }
    } else if (digit.accumulatedDelta <= -STEP) {
      digit.frame = (digit.frame + 1) % 10; // swipe up → digit increases
      digit.accumulatedDelta = 0;
      digit.lastChangeTime = now;
      if (_this.snapSound) { _this.snapSound.play(); }
    }

  },
  digitDragUpdate: function (target) {

    if (target.lastY === undefined) {
      target.lastY = target.y;
    }

    var delta = target.y - target.lastY;


    if (Math.abs(delta) > 2)   // very small movement triggers frame
    {
      if (delta > 0) {
        target.frame = (target.frame + 9) % 10; // down
      }
      else {
        target.frame = (target.frame + 1) % 10; // up
      }

      target.lastY = target.y;

      if (_this.clickSound) {
        _this.clickSound.play();
      }
    }
  },

  //----------

  Question5: function () {
    _this.questionid=5;
    _this.sceneCount++;
    _this.createQuestion5UI();
  },

  Question6: function () {
    _this.questionid=6;
    _this.sceneCount++;
    this.createQuestion6UI();
  },

  formatTwoDigits: function (value) {
    return (value < 10 ? "0" : "") + value;
  },

  formatMinutesSeconds: function (hour, minute, second) {
    return this.formatTwoDigits(hour) + ":" + this.formatTwoDigits(minute) + ":" + this.formatTwoDigits(second);
  },

  formatHoursMinutesSeconds: function (hour, minute, second) {
    return (
      this.formatTwoDigits(hour) +
      ":" +
      this.formatTwoDigits(minute) +
      ":" +
      this.formatTwoDigits(second)
    );
  },

  createQuestion6UI: function () {
    this.isAscendingQn = this.game.rnd.integerInRange(0, 1) === 0;

    if (this.isAscendingQn) {
      _this.currentQuestionAudio = _this.Ask_Question6_1;
      _this.playQuestionAudio(_this.currentQuestionAudio);
    } else {
      _this.currentQuestionAudio = _this.Ask_Question6_2;
      _this.playQuestionAudio(_this.currentQuestionAudio);
    }

    if (_this.background) {
      _this.background.destroy();
    }

    this.q6Hour = this.game.rnd.integerInRange(0, 23);
    this.dropBoxes = [];
    this.charData = [];

    let trainConfigs = [
      { spriteKey: "Sprite1Q6", x: 125 },
      { spriteKey: "Sprite2Q6", x: 355 },
      { spriteKey: "Sprite3Q6", x: 585 },
      { spriteKey: "Sprite4Q6", x: 815 },
    ];

    let usedTimes = {};
    let topBoxStartX = 20;
    let topBoxGap = 205;

    for (let i = 0; i < 4; i++) {
      let dropBox = this.add.image(
        topBoxStartX + i * topBoxGap,
        85,
        "WhiteBoxQ6",
      );
      dropBox.occupied = false;
      dropBox.currentChar = null;
      dropBox.scale.setTo(0.55);
      this.dropBoxes.push(dropBox);
    }
    _this.addRanks(4);

    for (let i = 0; i < trainConfigs.length; i++) {
      let cfg = trainConfigs[i];
      let minute;
      let second;
      let timeKey;

      do {
        minute = this.game.rnd.integerInRange(0, 59);
        second = this.game.rnd.integerInRange(0, 59);
        timeKey = minute + "_" + second;
      } while (usedTimes[timeKey]);

      usedTimes[timeKey] = true;

      let slotTrack = this.add.image(cfg.x, 412, "BoxWithTrackQ6");
      slotTrack.anchor.setTo(0.5);
      slotTrack.scale.setTo(0.55);

      let char = this.add.sprite(
        cfg.x,
        460,
        cfg.spriteKey,
        this.getAtlasFirstFrame(cfg.spriteKey),
      );
      char.anchor.setTo(0.5, 0.8);
      char.inputEnabled = true;
      char.input.enableDrag();

      let fullTime = this.formatHoursMinutesSeconds(
        this.q6Hour,
        minute,
        second,
      );

      char.data = {
        hour: this.q6Hour,
        minute: minute,
        second: second,
        totalSeconds: this.q6Hour * 3600 + minute * 60 + second,
        label: fullTime,
      };

      char.homeX = char.x;
      char.homeY = char.y;
      char.currentBox = null;
      char.boxText = null;
      char.greenBox = null;
      char.slotTrack = slotTrack;

      this.addAtlasLoopAnimation(char, "run", cfg.spriteKey, 12);

      char.events.onDragStart.add(this.onDragStartQ6, this);
      char.events.onDragStop.add(this.onDragStopQ6, this);

      this.charData.push(char);

      let greyBox = this.add.image(cfg.x, 340, "TimingGreyBoxQ6");
      greyBox.anchor.setTo(0.5);
      greyBox.scale.setTo(0.6);

      let timeText = this.add.text(greyBox.x, greyBox.y + 3, fullTime, {
        font: "18px Arial",
        fill: "#000000",
        align: "center",
      });
      timeText.anchor.setTo(0.5);

      char.timeText = timeText;
      char.greyBox = greyBox;
    }

    this.dropBoxes = this.dropBoxes;

    _this.rightbtn = _this.add.sprite(860, 190, "TimeMT5_1_RightClick");
    _this.rightbtn.inputEnabled = true;
    _this.rightbtn.input.useHandCursor = true;
    _this.rightbtn.events.onInputDown.add(function () {
      this.checkAnswerQ6();
    }, this);
  },
  checkAnswerQ6: function () {
    _this.noofAttempts++;

    let placed = [];

    _this.rightbtn.frame = 1;
    _this.clickSound.play();

    // -----------------------------
    // COLLECT PLACED VALUES
    // -----------------------------
    for (let i = 0; i < this.dropBoxes.length; i++) {

      if (this.dropBoxes[i].currentChar) {
        placed.push(this.dropBoxes[i].currentChar.data.totalSeconds);
      }
    }

    // -----------------------------
    // GET CORRECT ORDER
    // -----------------------------
    this.correctOrderQ6 = this.charData
      .slice()
      .sort((a, b) => this.isAscendingQn
        ? (a.data.totalSeconds - b.data.totalSeconds)
        : (b.data.totalSeconds - a.data.totalSeconds)
      )
      .map(char => char.data.totalSeconds);

    // -----------------------------
    // CHECK ANSWER
    // -----------------------------
    let correct = true;

    for (let i = 0; i < 4; i++) {

      if (placed[i] !== this.correctOrderQ6[i]) {
        correct = false;
        break;
      }
    }

    // =====================================================
    // CORRECT ANSWER
    // =====================================================
    if (correct) {

      // -----------------------------
      // DISABLE INPUT
      // -----------------------------
      _this.rightbtn.inputEnabled = false;

      for (let i = 0; i < this.charData.length; i++) {

        this.charData[i].inputEnabled = false;

        if (this.charData[i].input) {
          this.charData[i].input.draggable = false;
        }
      }

      // -----------------------------
      // SUCCESS SOUND
      // -----------------------------
      if (_this.smallRewardSound) {
        _this.smallRewardSound.currentTime = 0;
        _this.smallRewardSound.play();
      }

      // -----------------------------
      // REMOVE BOTTOM TRACKS
      // -----------------------------
      for (let i = 0; i < this.charData.length; i++) {

        let char = this.charData[i];

        if (char.slotTrack) {
          char.slotTrack.destroy();
          char.slotTrack = null;
        }

        if (char.greyBox) {
          char.greyBox.destroy();
          char.greyBox = null;
        }

        if (char.timeText) {
          char.timeText.destroy();
          char.timeText = null;
        }
      }


      // -----------------------------
      // START TRAIN ANIMATION
      // -----------------------------
      let gap = 600;
      let completedCount = 0;

      // -----------------------------
      // SHOW MR B SUCCESS IMMEDIATELY
      // -----------------------------
      _this.rightans = _this.add.sprite(
        this.world.centerX - 40,
        400,
        'TimeMT5_1_rightans'
      );

      _this.rightans.anchor.setTo(0.5);
      _this.rightans.scale.setTo(0.5);

      _this.rightans.animations.add('thumbsup');
      _this.rightans.animations.play('thumbsup', 12, true);

      this.world.bringToTop(_this.rightans);

      // -----------------------------
      // START TRAIN ANIMATIONS
      // -----------------------------
      _this.charData.forEach((char, i) => {

        let delay = i * gap;

        _this.time.events.add(delay, function () {

          this.world.bringToTop(char);

          if (char.greenBox) {
            this.world.bringToTop(char.greenBox);
          }

          if (char.boxText) {
            this.world.bringToTop(char.boxText);
          }

          char.animations.play('run', 50, true);

          // -----------------------------
          // STOP RUN ANIMATION
          // -----------------------------
          _this.time.events.add(1000, function () {

            char.animations.stop();

            completedCount++;

            // -----------------------------
            // ALL COMPLETED
            // -----------------------------
            if (completedCount === this.charData.length) {

              // -----------------------------
              // CLOSE GAME AFTER DELAY
              // -----------------------------
              this.time.events.add(300, function () {
                //for api
            //edited for baseurl apk
           telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //..............

            console.log(_this.noofAttempts, "_this.noofAttempts.................");
            console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
            console.log(_this.sceneCount, "_this.sceneCount.................");
            console.log(_this.questionid, "_this.questionid.................");

                _this.correctAns();

              }, this);
            }

          }, this);

        }, this);

      });

    }

    // =====================================================
    // WRONG ANSWER
    // =====================================================
    else {

      _this.wrongSound.play();

      _this.rightbtn.frame = 0;

      // -----------------------------
      // DISABLE INPUT TEMPORARILY
      // -----------------------------
      _this.rightbtn.inputEnabled = false;

      for (let i = 0; i < this.charData.length; i++) {

        this.charData[i].inputEnabled = false;

        if (this.charData[i].input) {
          this.charData[i].input.draggable = false;
        }
      }

      // -----------------------------
      // HIDE TOP BOXES
      // -----------------------------
      for (let i = 0; i < this.dropBoxes.length; i++) {

        this.dropBoxes[i].visible = false;
        this.dropBoxes[i].alpha = 0;
      }

      // ADDED → hide rank labels
      if (_this.dropBoxLabels) {

        for (let i = 0; i < _this.dropBoxLabels.length; i++) {

          if (_this.dropBoxLabels[i]) {
            _this.dropBoxLabels[i].visible = false;
          }
        }
      }

      // -----------------------------
      // RESET TRAINS TO TRACKS
      // -----------------------------
      for (let i = 0; i < this.charData.length; i++) {

        let char = this.charData[i];

        char.anchor.setTo(0.5, 0.8);

        char.x = char.homeX;
        char.y = char.homeY;

        char.currentBox = null;

        char.greyBox.visible = true;
        char.timeText.visible = true;

        if (char.boxText) {
          char.boxText.visible = false;
        }

        if (char.greenBox) {
          char.greenBox.visible = false;
        }
      }

      // -----------------------------
      // CLEAR BOXES
      // -----------------------------
      for (let i = 0; i < this.dropBoxes.length; i++) {

        this.dropBoxes[i].currentChar = null;
        this.dropBoxes[i].occupied = false;
      }

      // -----------------------------
      // SHOW WRONG MR B
      // -----------------------------
      _this.wrongans = _this.add.sprite(
        this.world.centerX - 10,
        170,
        'TimeMT5_1_wrongans'
      );

      _this.wrongans.anchor.setTo(0.5);
      _this.wrongans.scale.setTo(0.45);

      _this.wrongans.animations.add('thumbsdown');
      _this.wrongans.animations.play('thumbsdown', 12, true);

      this.world.bringToTop(_this.wrongans);

      // -----------------------------
      // REMOVE WRONG MR B
      // -----------------------------
      this.time.events.add(2500, function () {

        if (_this.wrongans) {
          _this.wrongans.destroy();
        }

        // -----------------------------
        // SHOW BOXES AGAIN
        // -----------------------------
        for (let i = 0; i < this.dropBoxes.length; i++) {

          this.dropBoxes[i].visible = true;
          this.dropBoxes[i].alpha = 1;
        }

        // ADDED → show rank labels again
        if (_this.dropBoxLabels) {

          for (let i = 0; i < _this.dropBoxLabels.length; i++) {

            if (_this.dropBoxLabels[i]) {
              _this.dropBoxLabels[i].visible = true;
            }
          }
        }
        // -----------------------------
        // ENABLE INPUT AGAIN
        // -----------------------------
        _this.rightbtn.inputEnabled = true;

        for (let i = 0; i < this.charData.length; i++) {

          this.charData[i].inputEnabled = true;

          if (this.charData[i].input) {
            this.charData[i].input.draggable = true;
          }
        }

      }, this);
    }
  },
  changeQ6SuccessScreen: function () {

    if (!this.charData) return;

    // center positions
    let targetX = [150, 360, 570, 780];
    let trainY = 330;
    let boxY = 250;

    for (let i = 0; i < this.charData.length; i++) {

      let char = this.charData[i];

      // destroy lower elements
      if (char.slotTrack) {
        char.slotTrack.destroy();
        char.slotTrack = null;
      }

      if (char.greyBox) {
        char.greyBox.destroy();
        char.greyBox = null;
      }

      if (char.timeText) {
        char.timeText.destroy();
        char.timeText = null;
      }

      // bring everything to top
      if (char.greenBox) _this.world.bringToTop(char.greenBox);
      if (char.boxText) _this.world.bringToTop(char.boxText);

      _this.world.bringToTop(char);

      // animate BLACK BOX
      if (char.greenBox) {

        this.add.tween(char.greenBox).to({
          // x: targetX[i],
          y: boxY
        }, 700, Phaser.Easing.Quadratic.Out, true);

      }

      // animate TEXT INSIDE BOX
      if (char.boxText) {

        this.add.tween(char.boxText).to({
          // x: targetX[i],
          y: boxY + 8
        }, 700, Phaser.Easing.Quadratic.Out, true);

      }

      // animate TRAIN
      this.add.tween(char).to({
        // x: targetX[i],
        y: trainY
      }, 700, Phaser.Easing.Quadratic.Out, true);

    }

    // animate TOP WHITE RANK BOXES ALSO
    for (let i = 0; i < this.dropBoxes.length; i++) {

      let box = this.dropBoxes[i];

      this.add.tween(box).to({
        // x: targetX[i] ,
        y: boxY - 30
      }, 700, Phaser.Easing.Quadratic.Out, true);

    }

  },
  onDragStartQ6: function (sprite) {
    _this.world.bringToTop(sprite);

    sprite.dragFromBox = sprite.currentBox;

    if (sprite.currentBox) {
      sprite.currentBox.currentChar = null;
      sprite.currentBox.occupied = false;
      sprite.currentBox = null;

      if (sprite.boxText) sprite.boxText.visible = false;
      if (sprite.greenBox) sprite.greenBox.visible = false;

      sprite.anchor.setTo(0.5, 0.8);
    }
    sprite.scale.setTo(0.9);
  },
  onDragStopQ6: function (sprite) {
    let targetBox = null;
    let bestDistance = Number.MAX_VALUE;
    let spriteBounds = sprite.getBounds();
    let spriteCenterX = spriteBounds.centerX;
    let spriteCenterY = spriteBounds.centerY;
    sprite.scale.setTo(1);

    for (let i = 0; i < this.dropBoxes.length; i++) {
      let box = this.dropBoxes[i];
      let boxCenterX = box.x + (box.width / 2);
      let boxCenterY = box.y + (box.height / 2);
      let dx = spriteCenterX - boxCenterX;
      let dy = spriteCenterY - boxCenterY;
      let distance = Math.sqrt((dx * dx) + (dy * dy));

      let inTopSnapZone =
        spriteCenterY <= 250 &&
        Math.abs(spriteCenterX - boxCenterX) <= 170;

      if (inTopSnapZone && distance < bestDistance) {
        bestDistance = distance;
        targetBox = box;
      }
    }

    if (targetBox) {
      if (targetBox.currentChar) {
        _this.wrongSound.pause();
        _this.wrongSound.currentTime = 0;
        _this.wrongSound.play();

        if (sprite.dragFromBox) {
          let box = sprite.dragFromBox;

          sprite.anchor.setTo(0.5, 0.5);
          sprite.x = box.x + (box.width / 2);
          sprite.y = box.y + (box.height / 2) + 22;

          box.currentChar = sprite;
          box.occupied = true;
          sprite.currentBox = box;

          if (sprite.greenBox) {
            sprite.greenBox.x = box.x + 100;
            sprite.greenBox.y = box.y + 30;
            sprite.greenBox.scale.setTo(0.6);
            sprite.greenBox.visible = true;
          }

          if (sprite.boxText) {
            sprite.boxText.x = sprite.greenBox.x;
            sprite.boxText.y = sprite.greenBox.y + 8;
            sprite.boxText.visible = true;
          }
        } else {
          sprite.anchor.setTo(0.5, 0.8);
          sprite.x = sprite.homeX;
          sprite.y = sprite.homeY;
          sprite.greyBox.visible = true;
          sprite.timeText.visible = true;
        }
      } else {
          _this.snapSound = _this.add.audio('dragSound');
          if (_this.snapSound) {
            _this.snapSound.play();
          }

        sprite.anchor.setTo(0.5, 0.5);
        sprite.x = targetBox.x + (targetBox.width / 2);
        sprite.y = targetBox.y + (targetBox.height / 2) + 22;

        targetBox.currentChar = sprite;
        targetBox.occupied = true;
        sprite.currentBox = targetBox;

        sprite.greyBox.visible = false;
        sprite.timeText.visible = false;

        if (!sprite.greenBox) {
          sprite.greenBox = this.add.image(targetBox.x + 100, targetBox.y + 30, 'TimingBlackBoxQ6');
          sprite.greenBox.anchor.setTo(0.5);
          sprite.greenBox.scale.setTo(0.6);

          sprite.boxText = this.add.text(sprite.greenBox.x, sprite.greenBox.y + 8, sprite.data.label, {
            font: "18px Arial",
            fill: "#FFFFFF",
            align: "center"
          });
          sprite.boxText.anchor.setTo(0.5);
        } else {
          sprite.greenBox.x = targetBox.x + 100;
          sprite.greenBox.y = targetBox.y + 30;
          sprite.greenBox.scale.setTo(0.6);
          sprite.greenBox.visible = true;

          sprite.boxText.x = sprite.greenBox.x;
          sprite.boxText.y = sprite.greenBox.y + 8;
          sprite.boxText.visible = true;
        }

        _this.world.bringToTop(sprite.greenBox);
        _this.world.bringToTop(sprite.boxText);
        _this.world.bringToTop(sprite);
      }
    } else {
      sprite.anchor.setTo(0.5, 0.8);
      sprite.x = sprite.homeX;
      sprite.y = sprite.homeY;
      sprite.currentBox = null;
      sprite.greyBox.visible = true;
      sprite.timeText.visible = true;
      if (_this.snapSound) {
        _this.snapSound.play();
      }

      if (sprite.boxText) sprite.boxText.visible = false;
      if (sprite.greenBox) sprite.greenBox.visible = false;
    }

    sprite.dragFromBox = null;
  },
  addRanks: function (count) {
    let labelsAsc = ["1st", "2nd", "3rd"];
    let labelsDesc = ["3rd", "2nd", "1st"];
    if (count == 4) {
      labelsAsc = ["1st", "2nd", "3rd", "4th"];
      labelsDesc = ["4th", "3rd", "2nd", "1st"];
    }


    // decide based on question
    let labels = this.isAscendingQn ? labelsAsc : labelsDesc;

    // 🎨 color map (by rank text)
    let colorMap = {
      "1st": "#3498db",
      "2nd": "#f39c12",
      "3rd": "#2ecc71",
      "4th": "#9b59b6"
    };

    this.dropBoxLabels = [];

    for (let i = 0; i < this.dropBoxes.length; i++) {
      let dropBox = this.dropBoxes[i];

      let label = labels[i];

      // 🔲 label background sprite
      // let labelBox = this.add.sprite(dropBox.x + 10, dropBox.y, "box");
      // labelBox.anchor.setTo(0.5);
      // labelBox.scale.setTo(0.7);

      console.log(colorMap[label])
      let labelText = this.add.text(dropBox.x + 25, dropBox.y + 25, label, {
        font: "bold 20px Arial",
        fill: colorMap[label],   // ✅ color applied here
        align: "center"
      });

      labelText.anchor.setTo(0.5);

      // store
      // dropBox.labelBox = labelBox;
      dropBox.labelText = labelText;

      this.dropBoxLabels.push(labelText);
    }

  },
  createQuestion5UI: function () {
    this.isAscendingQn = this.game.rnd.integerInRange(0, 1) === 0;

    if (this.isAscendingQn) {
      _this.currentQuestionAudio = _this.Ask_Question5_1;
    } else {
      _this.currentQuestionAudio = _this.Ask_Question5_2;
    }
    _this.playQuestionAudio(_this.currentQuestionAudio);

    if (_this.background) {
      _this.background.destroy();
    }

    // -----------------------------
    // TRACK
    // -----------------------------
    this.track = this.add.image(-15, 365, "TrackQ5");
    this.track.scale.setTo(1.05, 1.1);

    // -----------------------------
    // GENERATE TIME DATA
    // -----------------------------
    let hour = this.game.rnd.integerInRange(0, 23);
    let minute = this.game.rnd.integerInRange(0, 59);

    // generate 4 unique seconds
    let secondsArr = [];
    while (secondsArr.length < 4) {
      let sec = this.game.rnd.integerInRange(0, 59);
      if (secondsArr.indexOf(sec) === -1) {
        secondsArr.push(sec);
      }
    }

    // -----------------------------
    // CHARACTER CONFIG (ALL 6)
    // -----------------------------
    let charactersConfig = [
      { key: "Character4Q5", x: 80, offsetY: 10, box: 75 },
      { key: "Character5Q5", x: 270, offsetY: 5, box: 240 },
      { key: "Character2Q5", x: 410, offsetY: 5, box: 405 },
      { key: "Character3Q5", x: 550, offsetY: 5, box: 555 },
      { key: "Character1Q5", x: 690, offsetY: 5, box: 710 },
      { key: "Character6Q5", x: 870, offsetY: 5, box: 885 },
    ];
    let xPositions = [120, 370, 590, 830];   // evenly spaced for 4
    let boxPositions = [106, 360, 600, 840]; // align grey boxes

    // -----------------------------
    // PICK RANDOM 4 CHARACTERS
    // -----------------------------
    let selectedChars = [];
    let usedIndices = [];

    while (selectedChars.length < 4) {
      let index = _this.rnd.integerInRange(0, charactersConfig.length - 1);

      if (usedIndices.indexOf(index) === -1) {
        usedIndices.push(index);
        selectedChars.push(charactersConfig[index]);
      }
    }

    // -----------------------------
    // CREATE CHARACTERS
    // -----------------------------
    this.charData = [];
    let baseY = this.track.y + 80;

    for (let i = 0; i < selectedChars.length; i++) {
      let cfg = selectedChars[i];

      let spriteKey = cfg.key.replace("Character", "Sprite");

      let char = this.add.sprite(
        xPositions[i],
        baseY,
        spriteKey,
        this.getAtlasFirstFrame(spriteKey)
      );


      char.anchor.setTo(0.5, 0.5);
      char.scale.setTo(1.2, 0.95);

      // drag enable
      char.inputEnabled = true;
      char.input.enableDrag();

      // format HH:MM:SS
      let sec = secondsArr[i];
      let timeLabel =
        (hour < 10 ? "0" + hour : hour) + ":" +
        (minute < 10 ? "0" + minute : minute) + ":" +
        (sec < 10 ? "0" + sec : sec);

      // attach data
      char.data = {
        hour: hour,
        minute: minute,
        second: sec,
      };

      char.homeX = char.x;
      char.homeY = char.y;

      char.currentBox = null;
      char.boxText = null;
      char.greenBox = null;

      this.addAtlasLoopAnimation(char, "run", spriteKey, 12);

      char.events.onDragStart.add(this.onDragStartQ5, this);
      char.events.onDragStop.add(this.onDragStopQ5, this);

      this.charData.push(char);

      // -----------------------------
      // GREY BOX + TIME TEXT
      // -----------------------------
      let greyBox = this.add.image(boxPositions[i], 515, "GreyBoxQ5");
      greyBox.anchor.setTo(0.5);
      greyBox.scale.setTo(1.3, 1.1)

      let timeText = this.add.text(greyBox.x, greyBox.y + 2, timeLabel, {
        font: "18px Arial",
        fill: "#000000",
        align: "center",
      });
      timeText.anchor.setTo(0.5);

      char.timeText = timeText;
      char.greyBox = greyBox;
    }

    // -----------------------------
    // DROP BOXES (still 3)
    // -----------------------------
    this.dropBoxes = [];

    let boxStartX = 13;
    let boxGap = 280;

    for (let i = 0; i < 3; i++) {
      let box = this.add.image(boxStartX + i * boxGap, 80, "WhiteBoxQ5");
      box.occupied = false;
      box.currentChar = null;

      this.dropBoxes.push(box);
    }


    // 🎨 color map (by rank text)
    _this.addRanks(3)
    // -----------------------------
    // CHECK BUTTON
    // -----------------------------
    _this.rightbtn = _this.add.sprite(860, 190, "TimeMT5_1_RightClick");
    _this.rightbtn.inputEnabled = true;
    _this.rightbtn.input.useHandCursor = true;

    _this.rightbtn.events.onInputDown.add(function () {
      this.checkAnswerQ5();
    }, this);
  },
  checkAnswerQ5: function () {
    _this.noofAttempts++;

    let placed = [];
    _this.rightbtn.frame = 1;
    _this.clickSound.play();

    // -----------------------------
    // COLLECT PLACED VALUES
    // -----------------------------
    for (let i = 0; i < this.dropBoxes.length; i++) {
      if (this.dropBoxes[i].currentChar) {
        placed.push(this.dropBoxes[i].currentChar.data.second);
      }
    }

    // -----------------------------
    // GET SMALLEST 3 VALUES
    // -----------------------------
    let smallestThree = this.charData
      .slice()
      .sort((a, b) => a.data.second - b.data.second)
      .slice(0, 3)
      .map(char => char.data.second);

    // -----------------------------
    // SET CORRECT ORDER
    // -----------------------------
    this.correctOrderQ5 = this.isAscendingQn
      ? smallestThree
      : smallestThree.slice().reverse();

    // -----------------------------
    // CHECK ANSWER
    // -----------------------------
    let correct = true;

    for (let i = 0; i < 3; i++) {
      if (placed[i] !== this.correctOrderQ5[i]) {
        correct = false;
        break;
      }
    }

    // =====================================================
    // CORRECT ANSWER
    // =====================================================
    if (correct) {

      // Disable input
      for (let i = 0; i < this.charData.length; i++) {
        this.charData[i].inputEnabled = false;
      }

      _this.rightbtn.inputEnabled = false;
      // ADDED → disable dragging during success animation
      for (let i = 0; i < this.charData.length; i++) {

        this.charData[i].inputEnabled = false;

        // ADDED
        if (this.charData[i].input) {
          this.charData[i].input.draggable = false;
        }
      }




      // Celebration sound + star
      _this.time.events.add(300, function () {

        if (_this.smallRewardSound) {
          _this.smallRewardSound.currentTime = 0;
          _this.smallRewardSound.play();
        }


      });

      // -----------------------------
      // UPDATED: HIDE TOP BOXES + LABELS
      // -----------------------------
      for (let i = 0; i < this.dropBoxes.length; i++) {

        this.dropBoxes[i].visible = false;
        this.dropBoxes[i].alpha = 0;
      }

      if (_this.dropBoxLabels) {

        for (let i = 0; i < _this.dropBoxLabels.length; i++) {

          if (_this.dropBoxLabels[i]) {
            _this.dropBoxLabels[i].visible = false;
          }
        }
      }


      // -----------------------------
      // GET SORTED CHARS
      // -----------------------------
      let sortedChars = this.dropBoxes.map(box => box.currentChar);

      sortedChars.sort(function (a, b) {
        return a.data.second - b.data.second;
      });
      //for api
            //edited for baseurl apk
            telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //..............

            console.log(_this.noofAttempts, "_this.noofAttempts.................");
            console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
            console.log(_this.sceneCount, "_this.sceneCount.................");
            console.log(_this.questionid, "_this.questionid.................");

      this.showQuestion5PodiumAnimation(sortedChars);


    }

    // =====================================================
    // WRONG ANSWER
    // =====================================================
    else {

      _this.wrongSound.play();

      _this.rightbtn.frame = 0;

      // ADDED → temporarily disable interactions during wrong animation
      this.rightbtn.inputEnabled = false;

      for (let i = 0; i < this.charData.length; i++) {

        this.charData[i].inputEnabled = false;

        // ADDED
        if (this.charData[i].input) {
          this.charData[i].input.draggable = false;
        }
      }

      // -----------------------------
      // UPDATED: HIDE TOP BOXES + LABELS
      // -----------------------------
      for (let i = 0; i < this.dropBoxes.length; i++) {

        this.dropBoxes[i].visible = false;
        this.dropBoxes[i].alpha = 0;
      }

      if (_this.dropBoxLabels) {

        for (let i = 0; i < _this.dropBoxLabels.length; i++) {

          if (_this.dropBoxLabels[i]) {
            _this.dropBoxLabels[i].visible = false;
          }
        }
      }

      // -----------------------------
      // RESET CHARACTERS
      // -----------------------------
      for (let i = 0; i < this.charData.length; i++) {

        let char = this.charData[i];

        char.anchor.setTo(0.5, 0.5);

        char.scale.setTo(1.2, 0.95);

        char.x = char.homeX;
        char.y = char.homeY;

        char.currentBox = null;

        char.greyBox.visible = true;
        char.timeText.visible = true;

        if (char.boxText) char.boxText.visible = false;
        if (char.greenBox) char.greenBox.visible = false;
      }

      // -----------------------------
      // CLEAR DROP BOXES
      // -----------------------------
      for (let i = 0; i < this.dropBoxes.length; i++) {

        this.dropBoxes[i].currentChar = null;
        this.dropBoxes[i].occupied = false;
      }

      // -----------------------------
      // UPDATED: SHOW WRONG MR B
      // -----------------------------
      _this.wrongans = _this.add.sprite(
        this.world.centerX - 20,
        200,
        'TimeMT5_1_wrongans'
      );
      _this.wrongans.scale.setTo(0.5);

      _this.wrongans.anchor.setTo(0.5);

      // UPDATED
      _this.wrongans.animations.add('thumbsdown');

      // UPDATED
      _this.wrongans.animations.play('thumbsdown', 12, true);

      this.world.bringToTop(_this.wrongans);

      // -----------------------------
      // UPDATED: REMOVE MR B + SHOW BOXES AGAIN
      // -----------------------------
      this.time.events.add(2500, function () {

        if (_this.wrongans) {
          _this.wrongans.destroy();
        }

        // UPDATED
        for (let i = 0; i < this.dropBoxes.length; i++) {

          this.dropBoxes[i].visible = true;
          this.dropBoxes[i].alpha = 1;
        }

        // UPDATED
        if (_this.dropBoxLabels) {

          for (let i = 0; i < _this.dropBoxLabels.length; i++) {

            if (_this.dropBoxLabels[i]) {
              _this.dropBoxLabels[i].visible = true;
            }
          }
        }

        // ADDED → enable interactions again after wrong animation
        _this.rightbtn.inputEnabled = true;

        for (let i = 0; i < this.charData.length; i++) {

          this.charData[i].inputEnabled = true;

          // ADDED
          if (this.charData[i].input) {
            this.charData[i].input.draggable = true;
          }
        }

        // ADDED → enable interactions again after wrong animation
        this.rightbtn.inputEnabled = true;

        for (let i = 0; i < this.charData.length; i++) {

          this.charData[i].inputEnabled = true;

          // ADDED
          if (this.charData[i].input) {
            this.charData[i].input.draggable = true;
          }
        }
      }, this);
    }
  },
  showQuestion5PodiumAnimation: function (sortedChars) {

    let centerX = this.world.centerX;

    // -----------------------------
    // HIDE NON-SELECTED RUNNER
    // -----------------------------
    for (let i = 0; i < this.charData.length; i++) {

      let char = this.charData[i];

      // ADDED → hide ONLY runner not used in podium
      if (sortedChars.indexOf(char) === -1) {

        char.visible = false;

        if (char.boxText) {
          char.boxText.visible = false;
        }

        if (char.greenBox) {
          char.greenBox.visible = false;
        }

        if (char.greyBox) { char.greyBox.destroy(); char.greyBox = null; }
        if (char.timeText) { char.timeText.destroy(); char.timeText = null; }
      }
    }
    _this.track.visible = false;

    // -----------------------------
    // PREPARE CHARACTERS
    // -----------------------------
    for (let i = 0; i < sortedChars.length; i++) {

      let char = sortedChars[i];

      if (char.boxText) char.boxText.visible = false;
      if (char.greenBox) char.greenBox.visible = false;

      char.anchor.setTo(0.5, 0.5);
      char.scale.setTo(0.82);
      char.angle = 0;
    }

    // -----------------------------
    // SHOW PODIUM
    // -----------------------------
    this.podium = this.add.image(centerX, 340, 'PodiumQ5');

    this.podium.anchor.setTo(0.5);
    this.podium.alpha = 0;
    this.podium.scale.setTo(0.92);

    this.add.tween(this.podium).to(
      { y: 290-40, alpha: 1 },
      700,
      Phaser.Easing.Back.Out,
      true,
      200
    );

    this.add.tween(this.podium.scale).to(
      { x: 1, y: 1 },
      700,
      Phaser.Easing.Back.Out,
      true,
      200
    );

    // -----------------------------
    // PODIUM POSITIONS
    // -----------------------------
    let positions = [
      { x: centerX, y: 208-40, scale: 1.0 },
      { x: centerX - 180, y: 230-40, scale: 1 },
      { x: centerX + 180, y: 265-40, scale: 1 }
    ];

    let baseDelay = 900;
    let completedCount = 0;
    let totalChars = sortedChars.length;

    sortedChars.forEach((char, i) => {

      let target = positions[i];

      char.anchor.setTo(0.5, 0.8);

      let delay = baseDelay + (i * 900);

      this.world.bringToTop(char);

      this.time.events.add(delay, function () {

        this.world.bringToTop(char);

        char.animations.play('run', 10, true);

      }, this);

      this.add.tween(char).to({
        x: target.x,
        y: target.y
      }, 1400, Phaser.Easing.Quadratic.InOut, true, delay);

      this.add.tween(char.scale).to({
        x: target.scale,
        y: target.scale
      }, 1400, Phaser.Easing.Quadratic.InOut, true, delay);

      this.time.events.add(delay + 1400, function () {

        char.animations.stop();

        this.add.tween(char).to({
          y: char.y - 6
        }, 300, Phaser.Easing.Quadratic.InOut, true, 0, 0, true);

        completedCount++;

        // -----------------------------
        // SHOW MR B
        // -----------------------------
        if (completedCount === totalChars) {

          _this.rightans = _this.add.sprite(
            this.world.centerX - 10,
            427,
            'TimeMT5_1_rightans'
          );

          _this.rightans.scale.setTo(0.4);
          _this.rightans.anchor.setTo(0.5);

          _this.rightans.animations.add('thumbsup');
          _this.rightans.animations.play('thumbsup', 12, true);

          this.world.bringToTop(_this.rightans);

          this.time.events.add(1500, function () {
            _this.correctAns();

          }, this);
        }

      }, this);

    });
  },
  onDragStartQ5: function (sprite) {
    // Bring to front while dragging
    _this.world.bringToTop(sprite);

    // Remember which box (if any) this char came from
    sprite.dragFromBox = sprite.currentBox;

    if (sprite.currentBox) {
      // Lifting from a drop box — free it immediately
      sprite.currentBox.currentChar = null;
      sprite.currentBox.occupied = false;
      sprite.currentBox = null;
      if (sprite.boxText) sprite.boxText.visible = false;
      if (sprite.greenBox) sprite.greenBox.visible = false;
      // Restore drag scale while in motion
      sprite.scale.setTo(1.2, 0.95);
    }
  },

  onDragStopQ5: function (sprite) {
    let targetBox = null;

    for (let i = 0; i < this.dropBoxes.length; i++) {
      if (Phaser.Rectangle.intersects(sprite.getBounds(), this.dropBoxes[i].getBounds())) {
        targetBox = this.dropBoxes[i];
        break;
      }
    }

    if (targetBox) {

      if (targetBox.currentChar) {
        // Occupied by another char — error, restore to where it came from
        _this.wrongSound.pause();
        _this.wrongSound.currentTime = 0;
        _this.wrongSound.play();

        if (sprite.dragFromBox) {

          let box = sprite.dragFromBox;

          sprite.scale.setTo(1.5);
          sprite.anchor.setTo(0.5, 0.5);

          sprite.x = box.x + box.width / 2;
          sprite.y = box.y + box.height / 2 + 20;

          box.currentChar = sprite;
          box.occupied = true;
          sprite.currentBox = box;

          if (sprite.boxText) {
            sprite.boxText.x = box.x + 93;
            sprite.boxText.y = box.y + 22;
            sprite.boxText.visible = true;
          }

          if (sprite.greenBox) {
            sprite.greenBox.x = box.x + 80;
            sprite.greenBox.y = box.y + 20;
            sprite.greenBox.visible = true;
          }

        } else {
          // Return to track — restore track scale and grey box
          sprite.anchor.setTo(0.5, 0.5);
          sprite.scale.setTo(1.2, 0.95);
          sprite.x = sprite.homeX;
          sprite.y = sprite.homeY;
          sprite.greyBox.visible = true;
          sprite.timeText.visible = true;
        }

      } else {
        // Empty box — place sprite, scale up, show green box + time label
        _this.snapSound = _this.add.audio('dragSound');
        if (_this.snapSound) {
          _this.snapSound.play();
        }
        sprite.scale.setTo(1.5);
        sprite.anchor.setTo(0.5, 0.5);
        sprite.x = targetBox.x + targetBox.width / 2;
        sprite.y = targetBox.y + targetBox.height / 2 + 20;

        targetBox.currentChar = sprite;
        targetBox.occupied = true;
        sprite.currentBox = targetBox;

        // Hide grey box + its time label
        sprite.greyBox.visible = false;
        sprite.timeText.visible = false;

        let timeLabel = this.formatMinutesSeconds(sprite.data.hour, sprite.data.minute, sprite.data.second);

        if (!sprite.greenBox) {
          // First time placing — create green box and time text
          sprite.greenBox = this.add.image(targetBox.x + 80, targetBox.y + 20, 'GreenBoxQ5');
          sprite.boxText = this.add.text(targetBox.x + 93, targetBox.y + 23, timeLabel, {
            font: "18px Arial",
            fill: "#000000",
            align: "center"
          });
          sprite.greenBox.scale.setTo(1.3, 1);

        } else {
          // Re-placing — reposition and show existing green box + text
          sprite.greenBox.x = targetBox.x + 80;
          sprite.greenBox.y = targetBox.y + 20;
          sprite.greenBox.visible = true;
          sprite.boxText.x = targetBox.x + 93;
          sprite.boxText.y = targetBox.y + 22;
          sprite.boxText.visible = true;
        }
      }

    } else {
      // Dropped outside any box — return to home on track
      sprite.anchor.setTo(0.5, 0.5);
      sprite.scale.setTo(1.2, 0.95);

      if (_this.snapSound) {
        _this.snapSound.play();
      }

      sprite.x = sprite.homeX;
      sprite.y = sprite.homeY;
      sprite.currentBox = null;
      sprite.greyBox.visible = true;
      sprite.timeText.visible = true;
      if (sprite.boxText) sprite.boxText.visible = false;
      if (sprite.greenBox) sprite.greenBox.visible = false;
    }

    sprite.dragFromBox = null;
  },

  playQuestion5PodiumEndAnimation: function () {
    if (_this.smallRewardSound) {
      _this.smallRewardSound.currentTime = 0;
      _this.smallRewardSound.play();
    }

    _this.time.events.add(700, function () {
      _this.correctAns5_6();
    });
  },
  correctAns5_6: function () {
    _this.currentQuestion++;

    _this.time.events.add(700, function () {
      if (_this.currentQuestion <= _this.totalQuestions) {
        _this.clearScreenUpdated();
      } else {
        _this.state.start("Time_MT5_1_G5Score", _this.correctAnswers);
      }
    });

    _this.time.events.add(1000, function () {
      if (_this.currentQuestion <= _this.totalQuestions) {
        _this.startMiniGame();
      } else {
        _this.state.start("Time_MT5_1_G5Score", _this.correctAnswers);
      }
    });
  },

  clearScreenUpdated: function () {
    if (_this.rightbtn) {
      _this.rightbtn.destroy();
      _this.rightbtn = null;
    }

    if (_this.track) {
      _this.track.destroy();
      _this.track = null;
    }

    if (_this.podium) {
      _this.podium.destroy();
      _this.podium = null;
    }

    if (_this.q5FinishGroup) {
      _this.q5FinishGroup.destroy(true);
      _this.q5FinishGroup = null;
    }

    if (_this.dropBoxes) {
      for (let i = 0; i < _this.dropBoxes.length; i++) {
        if (_this.dropBoxes[i]) {
          _this.dropBoxes[i].destroy();
        }
      }
      _this.dropBoxes = [];
    }

    if (_this.dropBoxLabels) {
      for (let i = 0; i < _this.dropBoxLabels.length; i++) {
        if (_this.dropBoxLabels[i]) {
          _this.dropBoxLabels[i].destroy();
        }
      }
      _this.dropBoxLabels = [];
    }




    if (_this.charData) {
      for (let i = 0; i < _this.charData.length; i++) {
        let char = _this.charData[i];

        if (!char) continue;

        if (char.boxText) {
          char.boxText.destroy();
          char.boxText = null;
        }

        if (char.greenBox) {
          char.greenBox.destroy();
          char.greenBox = null;
        }

        if (char.timeText) {
          char.timeText.destroy();
          char.timeText = null;
        }

        if (char.greyBox) {
          char.greyBox.destroy();
          char.greyBox = null;
        }

        if (char.slotTrack) {
          char.slotTrack.destroy();
          char.slotTrack = null;
        }

        char.destroy();
      }
      _this.charData = [];
    }

    _this.correctOrderQ5 = null;
    _this.correctOrderQ6 = null;
    _this.isAscendingQn = null;
  },

  shutdown: function () {
    _this.stopClockTick();
    if (_this.currentQuestionAudio) {
      _this.stopQuestionAudio(_this.currentQuestionAudio);
    }
  },
};
