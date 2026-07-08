Game.Time_MT5_2_G5level1 = function () { };

Game.Time_MT5_2_G5level1.prototype = {
  init: function (param, score) {
    _this = this;
    telInitializer.gameIdInit("MT5-2-Time",gradeSelected);
    this.Stararr = param;
    this.score = score;

    _this.minuteTolerance = 3;
    _this.digitalminuteTolerance = 3;
    _this.hourTolerance = 20;
    _this.digitalDigits = [];
    _this.activeDigit = null;
    _this.activeAnalogClock = null;
    _this.activeAnalogHand = null;
    _this.selectedStartMeridiem = null;
    _this.currentAudioTimers = [];
    _this.currentPromptAudios = [];
    _this.audioUnlocked = false;
    _this.pendingAutoplayAudio = null;
    _this.pendingEffectAudio = null;
    _this.pendingAudioResumeTimer = null;
    _this.managedHtmlAudios = [];
    _this.audioVisibilityHandler = null;
    _this.audioFocusHandler = null;
    _this.audioPageShowHandler = null;
    _this.q56Timers = [];
    _this.q56QuestionAudioHandlers = [];
    _this.isStoppingManagedAudio = false;
    _this.activeManagedAudio = null;
    _this.activeQuestionAudioSequenceToken = 0;
    _this.currentQuestionAudioWatchdog = null;
    _this.currentQuestionAudio = null;
    _this.currentRoundData = null;
    _this.currentAnswerType = null;
    _this.currentClockMode = null;
    _this.syncElapsedStartClockWithAudio = false;
    _this.elapsedStartClockRevealed = false;
    _this.currentQuestion2Type = null;
    _this.q56CurrentQuestion = null;
    _this.q56SecondAudioTimer = null;
    _this.q56UsedCountries = [];
    _this.selectedAMPM = null;
    _this.q56Country = null;
    _this.lastUsedPromptRounds = _this.lastUsedPromptRounds || {};
    _this.analogClockAnimFrames = [
      "Symbol 15 instance 10000",
      "Symbol 15 instance 10001"
    ];
    _this.digitalClockAnimFrames = [
      "Symbol 16 instance 10000",
      "Symbol 16 instance 10001"
    ];
    _this.rightAnswerAnimFrames = [
      "Symbol 87 instance 10000",
      "Symbol 87 instance 10001",
      "Symbol 87 instance 10002",
      "Symbol 87 instance 10003",
      "Symbol 87 instance 10004",
      "Symbol 87 instance 10005",
      "Symbol 87 instance 10006",
      "Symbol 87 instance 10007",
      "Symbol 87 instance 10008",
      "Symbol 87 instance 10009"
    ];
    _this.wrongAnswerAnimFrames = [
      "Symbol 88 instance 10000",
      "Symbol 88 instance 10001",
      "Symbol 88 instance 10002",
      "Symbol 88 instance 10003",
      "Symbol 88 instance 10004",
      "Symbol 88 instance 10005",
      "Symbol 88 instance 10006",
      "Symbol 88 instance 10007",
      "Symbol 88 instance 10008",
      "Symbol 88 instance 10009"
    ];

    _this.languageSelected = _this.getQuestionAudioLanguage();

    _this.clickSound = _this.createSoundEffectAudio("sounds/ClickSound.mp3");
    _this.celebrationSound = _this.createSoundEffectAudio("sounds/celebration.mp3");
    _this.birdChirmSound = _this.createSoundEffectAudio("sounds/bird_chirm.mp3");
    _this.wrongans = _this.createSoundEffectAudio("sounds/wrongans.mp3");
    _this.wrongSound = _this.createSoundEffectAudio("sounds/WrongCelebrationSound.mp3");
    _this.framechange = _this.createSoundEffectAudio("sounds/Frame_change_sound.mp3");
    _this.commonQuestionAudio = _this.createAudio("V1");

    _this.counterCelebrationSound = _this.createSoundEffectAudio("sounds/counter_celebration.mp3");
    _this.Ask_Question5_1 = _this.createAudio("Q5");
    _this.Ask_Question5_2 = _this.createAudio("Q5_2");
    _this.question3PromptAudio = _this.createAudio("Q3");
    _this.question4PromptAudio = _this.createAudio("Q4");
    _this.bindGlobalAudioRecovery();
    _this.elapsedTimeRounds = [
      {
        imageKey: "C15",
        startAudio: _this.createAudio("V2"),
        endAudio: _this.createAudio("V3"),
        startHour24: 7,
        startMinute: 0,
        endHour24: 7,
        endMinute: 10,
      },
      {
        imageKey: "C16",
        startAudio: _this.createAudio("V4"),
        endAudio: _this.createAudio("V5"),
        startHour24: 7,
        startMinute: 30,
        endHour24: 7,
        endMinute: 50,
      },
      {
        imageKey: "C13",
        startAudio: _this.createAudio("V6"),
        endAudio: _this.createAudio("V7"),
        startHour24: 9,
        startMinute: 0,
        endHour24: 9,
        endMinute: 20,
      },
      {
        imageKey: "C6",
        startAudio: _this.createAudio("V8"),
        endAudio: _this.createAudio("V9"),
        startHour24: 17,
        startMinute: 30,
        endHour24: 17,
        endMinute: 55,
      },
      {
        imageKey: "C3",
        startAudio: _this.createAudio("V10"),
        endAudio: _this.createAudio("V11"),
        startHour24: 21,
        startMinute: 0,
        endHour24: 21,
        endMinute: 25,
      },
      {
        imageKey: "C8",
        startAudio: _this.createAudio("V12"),
        endAudio: _this.createAudio("V13"),
        startHour24: 17,
        startMinute: 5,
        endHour24: 17,
        endMinute: 25,
      },
      {
        imageKey: "C18",
        startAudio: _this.createAudio("V14"),
        endAudio: _this.createAudio("V15"),
        startHour24: 7,
        startMinute: 35,
        endHour24: 7,
        endMinute: 40,
      },
      {
        imageKey: "C10",
        startAudio: _this.createAudio("V16"),
        endAudio: _this.createAudio("V17"),
        startHour24: 9,
        startMinute: 0,
        endHour24: 9,
        endMinute: 40,
      },
    ];

    _this.question2Rounds = [
      {
        imageKey: "C1",
        promptAudio: _this.createAudio("V18"),
        startHour24: 20,
        startMinute: 10,
        endHour24: 20,
        endMinute: 40,
      },
      {
        imageKey: "C2",
        promptAudio: _this.createAudio("V19"),
        startHour24: 19,
        startMinute: 15,
        endHour24: 19,
        endMinute: 50,
      },
      {
        imageKey: "C3",
        promptAudio: _this.createAudio("V20"),
        startHour24: 18,
        startMinute: 20,
        endHour24: 19,
        endMinute: 5,
      },
      {
        imageKey: "C4",
        promptAudio: _this.createAudio("V21"),
        startHour24: 21,
        startMinute: 30,
        endHour24: 22,
        endMinute: 50,
      },
      {
        imageKey: "C5",
        promptAudio: _this.createAudio("V22"),
        startHour24: 8,
        startMinute: 0,
        endHour24: 8,
        endMinute: 25,
      },
      {
        imageKey: "C6",
        promptAudio: _this.createAudio("V23"),
        startHour24: 6,
        startMinute: 45,
        endHour24: 8,
        endMinute: 15,
      },
      {
        imageKey: "C7",
        promptAudio: _this.createAudio("V24"),
        startHour24: 16,
        startMinute: 30,
        endHour24: 17,
        endMinute: 5,
      },
      {
        imageKey: "C8",
        promptAudio: _this.createAudio("V25"),
        startHour24: 17,
        startMinute: 20,
        endHour24: 17,
        endMinute: 50,
      },
      {
        imageKey: "C9",
        promptAudio: _this.createAudio("V26"),
        startHour24: 9,
        startMinute: 40,
        endHour24: 11,
        endMinute: 10,
      },
      {
        imageKey: "C10",
        promptAudio: _this.createAudio("V27"),
        startHour24: 9,
        startMinute: 0,
        endHour24: 10,
        endMinute: 30,
      },
      {
        imageKey: "C11",
        promptAudio: _this.createAudio("V28"),
        startHour24: 13,
        startMinute: 0,
        endHour24: 13,
        endMinute: 25,
      },
      {
        imageKey: "C12",
        promptAudio: _this.createAudio("V29"),
        startHour24: 15,
        startMinute: 30,
        endHour24: 16,
        endMinute: 10,
      },
      {
        imageKey: "C13",
        promptAudio: _this.createAudio("V30"),
        startHour24: 15,
        startMinute: 30,
        endHour24: 16,
        endMinute: 15,
      },
      {
        imageKey: "C14",
        promptAudio: _this.createAudio("V31"),
        startHour24: 6,
        startMinute: 30,
        endHour24: 7,
        endMinute: 0,
      },
      {
        imageKey: "C15",
        promptAudio: _this.createAudio("V32"),
        startHour24: 6,
        startMinute: 10,
        endHour24: 6,
        endMinute: 20,
      },
      {
        imageKey: "C16",
        promptAudio: _this.createAudio("V33"),
        startHour24: 6,
        startMinute: 40,
        endHour24: 7,
        endMinute: 5,
      },
      {
        imageKey: "C17",
        promptAudio: _this.createAudio("V34"),
        startHour24: 7,
        startMinute: 0,
        endHour24: 7,
        endMinute: 15,
      },
      {
        imageKey: "C18",
        promptAudio: _this.createAudio("V35"),
        startHour24: 6,
        startMinute: 30,
        endHour24: 8,
        endMinute: 0,
      },
    ];

    _this.question2TypeARounds = [];
    _this.question2TypeBRounds = [];

    for (var i = 0; i < _this.question2Rounds.length; i++) {
      var question2Round = _this.question2Rounds[i];
      question2Round.elapsedMinutes =
        (_this.question2Rounds[i].endHour24 * 60 + _this.question2Rounds[i].endMinute) -
        (_this.question2Rounds[i].startHour24 * 60 + _this.question2Rounds[i].startMinute);

      if (question2Round.elapsedMinutes < 60) {
        question2Round.question2Type = "2a";
        _this.question2TypeARounds.push(question2Round);
      } else {
        question2Round.question2Type = "2b";
        _this.question2TypeBRounds.push(question2Round);
      }
    }

    _this.question3Rounds = [
      {
        imageKey: "C1",
        promptAudio: _this.question3PromptAudio,
        startHour24: 20,
        startMinute: 0,
        endHour24: 20,
        endMinute: 30,
        elapsedMinutes: 30,
      },
      {
        imageKey: "C2",
        promptAudio: _this.question3PromptAudio,
        startHour24: 19,
        startMinute: 0,
        endHour24: 20,
        endMinute: 0,
        elapsedMinutes: 60,
      },
      {
        imageKey: "C3",
        promptAudio: _this.question3PromptAudio,
        startHour24: 20,
        startMinute: 30,
        endHour24: 21,
        endMinute: 15,
        elapsedMinutes: 45,
      },
      {
        imageKey: "C4",
        promptAudio: _this.question3PromptAudio,
        startHour24: 21,
        startMinute: 30,
        endHour24: 5,
        endMinute: 30,
        elapsedMinutes: 480,
      },
      {
        imageKey: "C5",
        promptAudio: _this.question3PromptAudio,
        startHour24: 17,
        startMinute: 30,
        endHour24: 18,
        endMinute: 30,
        elapsedMinutes: 60,
      },
      {
        imageKey: "C6",
        promptAudio: _this.question3PromptAudio,
        startHour24: 17,
        startMinute: 30,
        endHour24: 18,
        endMinute: 10,
        elapsedMinutes: 40,
      },
      {
        imageKey: "C7",
        promptAudio: _this.question3PromptAudio,
        startHour24: 16,
        startMinute: 30,
        endHour24: 17,
        endMinute: 10,
        elapsedMinutes: 40,
      },
      {
        imageKey: "C8",
        promptAudio: _this.question3PromptAudio,
        startHour24: 17,
        startMinute: 0,
        endHour24: 18,
        endMinute: 10,
        elapsedMinutes: 70,
      },
      {
        imageKey: "C9",
        promptAudio: _this.question3PromptAudio,
        startHour24: 10,
        startMinute: 30,
        endHour24: 11,
        endMinute: 0,
        elapsedMinutes: 30,
      },
      {
        imageKey: "C10",
        promptAudio: _this.question3PromptAudio,
        startHour24: 11,
        startMinute: 15,
        endHour24: 12,
        endMinute: 30,
        elapsedMinutes: 75,
      },
      {
        imageKey: "C11",
        promptAudio: _this.question3PromptAudio,
        startHour24: 13,
        startMinute: 0,
        endHour24: 13,
        endMinute: 25,
        elapsedMinutes: 25,
      },
      {
        imageKey: "C12",
        promptAudio: _this.question3PromptAudio,
        startHour24: 16,
        startMinute: 0,
        endHour24: 16,
        endMinute: 30,
        elapsedMinutes: 30,
      },
      {
        imageKey: "C13",
        promptAudio: _this.question3PromptAudio,
        startHour24: 16,
        startMinute: 0,
        endHour24: 16,
        endMinute: 40,
        elapsedMinutes: 40,
      },
      {
        imageKey: "C14",
        promptAudio: _this.question3PromptAudio,
        startHour24: 6,
        startMinute: 30,
        endHour24: 6,
        endMinute: 45,
        elapsedMinutes: 15,
      },
      {
        imageKey: "C15",
        promptAudio: _this.question3PromptAudio,
        startHour24: 7,
        startMinute: 0,
        endHour24: 7,
        endMinute: 10,
        elapsedMinutes: 10,
      },
      {
        imageKey: "C16",
        promptAudio: _this.question3PromptAudio,
        startHour24: 7,
        startMinute: 10,
        endHour24: 7,
        endMinute: 30,
        elapsedMinutes: 20,
      },
      {
        imageKey: "C17",
        promptAudio: _this.question3PromptAudio,
        startHour24: 8,
        startMinute: 0,
        endHour24: 8,
        endMinute: 10,
        elapsedMinutes: 10,
      },
      {
        imageKey: "C18",
        promptAudio: _this.question3PromptAudio,
        startHour24: 7,
        startMinute: 30,
        endHour24: 8,
        endMinute: 0,
        elapsedMinutes: 30,
      },
    ];

    _this.question4Rounds = [
      {
        imageKey: "C19",
        promptAudio: _this.question4PromptAudio,
        startHour24: 11,
        startMinute: 45,
        endHour24: 12,
        endMinute: 5,
        elapsedMinutes: 20,
      },
      {
        imageKey: "C10",
        promptAudio: _this.question4PromptAudio,
        startHour24: 11,
        startMinute: 55,
        endHour24: 13,
        endMinute: 20,
        elapsedMinutes: 85,
      },
      {
        imageKey: "C20",
        promptAudio: _this.question4PromptAudio,
        startHour24: 10,
        startMinute: 50,
        endHour24: 12,
        endMinute: 20,
        elapsedMinutes: 90,
      },
      {
        imageKey: "C9",
        promptAudio: _this.question4PromptAudio,
        startHour24: 11,
        startMinute: 15,
        endHour24: 12,
        endMinute: 50,
        elapsedMinutes: 95,
      },
      {
        imageKey: "C21",
        promptAudio: _this.question4PromptAudio,
        startHour24: 7,
        startMinute: 0,
        endHour24: 21,
        endMinute: 0,
        elapsedMinutes: 840,
      },
      {
        imageKey: "C11",
        promptAudio: _this.question4PromptAudio,
        startHour24: 11,
        startMinute: 50,
        endHour24: 12,
        endMinute: 20,
        elapsedMinutes: 30,
      },
      
    ];

    _this.meridiemBadgeImages = {
      C15: true,
      C16: true,
      C13: true,
      C6: true,
      C3: true,
      C8: true,
      C18: true,
      C10: true
    };
  },

  getQuestionAudioLanguage: function () {
    return window.languageSelected || "English";
  },

  getQuestionAudioBasePath: function () {
    var language = _this.languageSelected || _this.getQuestionAudioLanguage();

    if (language == "English") {
      return window.baseUrl + "questionSounds/Time-MT5-2-G5/English/";
    }
    else if (language == "Hindi") {
      return window.baseUrl + "questionSounds/Time-MT5-2-G5/Hindi/";
    }
    else if (language == "Kannada") {
      return window.baseUrl + "questionSounds/Time-MT5-2-G5/Kannada/";
    }
    else if (language == "Gujarati") {
      return window.baseUrl + "questionSounds/Time-MT5-2-G5/Gujarati/";
    }
    else if (language == "Marathi") {
      return window.baseUrl + "questionSounds/Time-MT5-2-G5/Marathi/";
    }
    else if (language == "Telugu") {
      return window.baseUrl + "questionSounds/Time-MT5-2-G5/Telugu/";
    }
    else if (language == "Tamil") {
      return window.baseUrl + "questionSounds/Time-MT5-2-G5/Tamil/";
    }
    else if (language == "Urdu") {
      return window.baseUrl + "questionSounds/Time-MT5-2-G5/Urdu/";
    }
    else {
      return window.baseUrl + "questionSounds/Time-MT5-2-G5/Odiya/";
    }
  },

  preload: function () {
   /* var atlasJson = window["Time-MT5-2-G5_JSON"] || {};
    var assetBase = window.baseUrl + "assets/Time-MT5-2-G5/";
    var commonAssetBase = assetBase + "commonAssets/";
    var gradeAssetBase = assetBase + "gradeAssets/Time-MT5-2-G5/";

    this.load.image("skipArrow", commonAssetBase + "skipArrow.png");
    this.load.image("backg", commonAssetBase + "backg.png");
    this.load.image("btn", commonAssetBase + "btn.png");
    this.load.image("dotbox", commonAssetBase + "dotbox.png");
    this.load.image("numbg", commonAssetBase + "numbg.png");
    this.load.image("prgressbar", commonAssetBase + "prgressbar.png");
    this.load.image("prgressbarOutLine", commonAssetBase + "prgressbarOutLine.png");
    this.load.image("timer", commonAssetBase + "timer.png");
    this.load.image("topicOutline", commonAssetBase + "topicOutline.png");
    this.load.image("navbar", commonAssetBase + "navbar.png");
    this.load.image("timebg", commonAssetBase + "timebg.png");
    this.load.image("hand", commonAssetBase + "hand.png");

    this.load.atlasJSONArray("bulb", commonAssetBase + "bulb.png", commonAssetBase + "bulb.json");
    this.load.atlas("backbtn", commonAssetBase + "backbtn.png", null, atlasJson.backbtnJson);
    this.load.atlasJSONArray("newBackBtn", commonAssetBase + "newBackBtn.png", commonAssetBase + "newBackBtn.json");
    this.load.atlasJSONArray("CommonSpeakerBtn", commonAssetBase + "speaker.png", commonAssetBase + "speaker.json");
    this.load.atlasJSONArray("starAnim", commonAssetBase + "starAnim.png", commonAssetBase + "starAnim.json");
    this.load.atlasJSONArray("starAnim1", commonAssetBase + "starAnim1.png", commonAssetBase + "starAnim1.json");
    this.load.atlas("reply", commonAssetBase + "reply.png", null, atlasJson.replyJson);
    this.load.atlasJSONArray("CommonHomeBtn", commonAssetBase + "homeBtn.png", commonAssetBase + "homeBtn.json");
    this.load.atlasJSONArray("CommonNextBtn", commonAssetBase + "nextBtn.png", commonAssetBase + "nextBtn.json");

    this.load.image("Bg", gradeAssetBase + "Bg.png");
    this.load.image("C1", gradeAssetBase + "C1.png");
    this.load.image("C2", gradeAssetBase + "C2.png");
    this.load.image("C3", gradeAssetBase + "C3.png");
    this.load.image("C4", gradeAssetBase + "C4.png");
    this.load.image("C5", gradeAssetBase + "C5.png");
    this.load.image("C6", gradeAssetBase + "C6.png");
    this.load.image("C7", gradeAssetBase + "C7.png");
    this.load.image("C8", gradeAssetBase + "C8.png");
    this.load.image("C9", gradeAssetBase + "C9.png");
    this.load.image("C10", gradeAssetBase + "C10.png");
    this.load.image("C11", gradeAssetBase + "C11.png");
    this.load.image("C12", gradeAssetBase + "C12.png");
    this.load.image("C13", gradeAssetBase + "C13.png");
    this.load.image("C14", gradeAssetBase + "C14.png");
    this.load.image("C15", gradeAssetBase + "C15.png");
    this.load.image("C16", gradeAssetBase + "C16.png");
    this.load.image("C17", gradeAssetBase + "C17.png");
    this.load.image("C18", gradeAssetBase + "C18.png");
    this.load.image("C19", gradeAssetBase + "C19.png");
    this.load.image("C20", gradeAssetBase + "C20.png");
    this.load.image("C21", gradeAssetBase + "C21.png");
    this.load.image("C22", gradeAssetBase + "C22.png");
    this.load.image("C23", gradeAssetBase + "C23.png");
    this.load.image("glow", gradeAssetBase + "glow.png");

    this.load.image("Background", gradeAssetBase + "Bg.png");
    this.load.image("AnalogClock", gradeAssetBase + "Analog json.png");
    this.load.atlasJSONArray("ClockPink", gradeAssetBase + "Clock_pink.png", gradeAssetBase + "Clock_pink.json");
    this.load.image("DigitalClock", gradeAssetBase + "Digital clock.png");
    this.load.image("AnswerClock", gradeAssetBase + "answer.png");
    this.load.atlasJSONArray("AnalogClock1", gradeAssetBase + "Analog clock 1.png", gradeAssetBase + "Analog clock 1.json");
    this.load.atlasJSONArray("DigitalClock1", gradeAssetBase + "Digital clock 1.png", gradeAssetBase + "Digital clock 1.json");
    this.load.atlasJSONArray("DigitalClock2", gradeAssetBase + "Digital clock 2.png", gradeAssetBase + "Digital clock 2.json");
    this.load.atlasJSONArray("DigitalClock3", gradeAssetBase + "Digital clock 3.png", gradeAssetBase + "Digital clock 3.json");
    this.load.atlasJSONArray("PinkHeadedAnalogClock", gradeAssetBase + "Pink headed analog clock.png", gradeAssetBase + "Pink headed analog clock.json");
    this.load.atlasJSONArray("RightAnswerAnim", gradeAssetBase + "Right Answer.png", gradeAssetBase + "Right Answer.json");
    this.load.atlasJSONArray("WrongAnswerAnim", gradeAssetBase + "Wrong Answer.png", gradeAssetBase + "Wrong Answer.json");
    this.load.atlasJSONArray("AnalogClockAnim", gradeAssetBase + "Analog json.png", gradeAssetBase + "Analog json.json");
    this.load.atlasJSONArray("DigitalClockAnim", gradeAssetBase + "Digital json.png", gradeAssetBase + "Digital json.json");
    this.load.image("RedCircle", gradeAssetBase + "Red Circle.png");
    this.load.image("Box", gradeAssetBase + "Box.png");
    this.load.spritesheet("AMBadge", gradeAssetBase + "am.png", 233, 126, 2);
    this.load.spritesheet("PMBadge", gradeAssetBase + "pm.png", 232, 126, 2);
    this.load.atlas("DigitalNum", gradeAssetBase + "Digital sprite.png", null, atlasJson.DigittalSprite);
    this.load.atlas("HourHand", gradeAssetBase + "Hour hand.png", null, atlasJson.HourHand);
    this.load.atlas("MinuteHand", gradeAssetBase + "Minute hand.png", null, atlasJson.MinuteHand);
    this.load.atlas("RightClick", gradeAssetBase + "RightClick.png", null, atlasJson.rightClick);

    this.load.atlas("clock1", gradeAssetBase + "Pink headed analog clock.png", null, atlasJson.pinkHeadedClock);
    this.load.image("clock2", gradeAssetBase + "Clock 2.png");
    this.load.atlas("clock2sprite", gradeAssetBase + "Analog clock 2.png", null, atlasJson.analogClock);
    this.load.image("Location", gradeAssetBase + "Location.png");
    this.load.image("LightBlueBox", gradeAssetBase + "Light blue box.png");
    this.load.image("BlackBox", gradeAssetBase + "Black box.png");
    this.load.image("OrangeClockCircle", gradeAssetBase + "Orange clock circle.png");
    this.load.image("PinkClockCircle", gradeAssetBase + "Pink clock circle.png");
    this.load.atlasJSONArray("HourTime", gradeAssetBase + "Hour time.png", gradeAssetBase + "Hour time.json");
    this.load.atlasJSONArray("MinuteTime", gradeAssetBase + "Minute time.png", gradeAssetBase + "Minute time.json");

    this.load.image("AfghanistanFlag", gradeAssetBase + "Afghanistan flag.png");
    this.load.image("BangladeshFlag", gradeAssetBase + "Bangladesh flag.png");
    this.load.image("BhutanFlag", gradeAssetBase + "Bhutan flag.png");
    this.load.image("IndiaFlag", gradeAssetBase + "India flag.png");
    this.load.image("MaldivesFlag", gradeAssetBase + "Maldives flag.png");
    this.load.image("MyanmarFlag", gradeAssetBase + "Myanmar flag.png");
    this.load.image("NepalFlag", gradeAssetBase + "Nepal flag.png");
    this.load.image("PakistanFlag", gradeAssetBase + "Pakistan flag.png");
    this.load.image("SriLankaFlag", gradeAssetBase + "Sri Lanka flag.png");
    this.load.image("ThailandFlag", gradeAssetBase + "Thailand flag.png");

    this.load.atlasJSONArray("Map1", gradeAssetBase + "Map 1.png", gradeAssetBase + "Map 1.json");
    this.load.atlasJSONArray("Map2", gradeAssetBase + "Map 2.png", gradeAssetBase + "Map 2.json");
    this.load.atlasJSONArray("Map3", gradeAssetBase + "Map 3.png", gradeAssetBase + "Map 3.json");
    this.load.atlasJSONArray("Map4", gradeAssetBase + "Map 4.png", gradeAssetBase + "Map 4.json");
    this.load.atlasJSONArray("Map5", gradeAssetBase + "Map 5.png", gradeAssetBase + "Map 5.json");
    this.load.atlasJSONArray("Map6", gradeAssetBase + "Map 6.png", gradeAssetBase + "Map 6.json");
    this.load.atlasJSONArray("Map7", gradeAssetBase + "Map 7.png", gradeAssetBase + "Map 7.json");
    this.load.atlasJSONArray("Map8", gradeAssetBase + "Map 8.png", gradeAssetBase + "Map 8.json");
    this.load.atlasJSONArray("Map9", gradeAssetBase + "Map 9.png", gradeAssetBase + "Map 9.json");
    this.load.atlasJSONArray("AM", gradeAssetBase + "am.png", gradeAssetBase + "am.json");
    this.load.atlasJSONArray("PM", gradeAssetBase + "pm.png", gradeAssetBase + "pm.json");

    this.load.audio("clocktick", "sounds/clocktick.mp3");
    this.load.audio("clung", "sounds/clung.mp3");
    this.load.audio("dragSound", "sounds/Drag_Snap.mp3");
    this.load.audio("chime", "sounds/chime.mp3");
    this.load.audio("framechangeSound", "sounds/Frame_change_sound.mp3");
    this.load.audio("birdChirm", "sounds/bird_chirm.mp3");*/

    
  },

  create: function (game) {
    _this.gameCreate(game);
  },

  gameCreate: function (game) {
    _this.noofAttempts = 0;//total attempt to answer q question
    _this.AnsTimerCount = 0;//total time
    _this.sceneCount = 0;//no of screen
    _this.questionid = 1 ;//always 1
    _this.totalQuestions = 6;
    _this.currentQuestion =1;
    _this.correctAnswers = 0;
    _this.seconds = 0;
    _this.minutes = 0;
    _this.counterForTimer = 0;
    _this.speakerbtnClicked = false;
    _this.rightbtn_Clicked = false;
    _this.currentQuestionAudio = null;
    _this.currentRoundData = null;
    _this.q56CurrentQuestion = null;
    _this.selectedAMPM = null;

    _this.shake = new Phaser.Plugin.Shake(game);
    game.plugins.add(_this.shake);

    _this.Q3background = _this.add.sprite(0, 0, "Background");
    _this.Q3background.width = _this.world.width;
    _this.Q3background.height = _this.world.height;

    _this.questionOrder = _this.shuffleArray(_this.elapsedTimeRounds.slice());
    _this.question3Order = _this.shuffleArray(_this.question3Rounds.slice());
    _this.question4Order = _this.shuffleArray(_this.question4Rounds.slice());

    _this.background = _this.add.sprite(0, 0, "Background");
    _this.background.width = _this.world.width;
    _this.background.height = _this.world.height;

    _this.navbar = _this.add.sprite(0, 0, "navbar");

    // Back button to go to score page
    _this.backbtn = _this.add.sprite(5, 6, "newCommonBackBtnForAll");
    _this.backbtn.inputEnabled = true;
    _this.backbtn.input.useHandCursor = true;
    // Ensure button stays above all objects
    _this.world.bringToTop(_this.backbtn);

    // On click → move to score state
    _this.backbtn.events.onInputDown.add(function () {
      _this.stopAllGameAudio();
      _this.clearScreenUpdated();
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
      _this.playClickSound();
      _this.replaySpeakerPrompt();
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

    //bulb
    _this.game.input.onDown.addOnce(function () {
      _this.audioUnlocked = true;

      if (_this.pendingAutoplayAudio) {
        _this.playAudioClip(_this.pendingAutoplayAudio, true);
        _this.pendingAutoplayAudio = null;
      }
    }, _this);
  

    _this.generateStarsForTheScene(6);
    _this.startMiniGame();
  },

  createAudio: function (src) {
    var questionAudioMap = {
      V1: "1",
      V2: "2",
      V3: "2",
      V4: "3",
      V5: "3",
      V6: "4",
      V7: "4",
      V8: "5",
      V9: "5",
      V10: "6",
      V11: "6",
      V12: "7",
      V13: "7",
      V14: "8",
      V15: "8",
      V16: "9",
      V17: "9",
      V18: "10",
      V19: "11",
      V20: "12",
      V21: "13",
      V22: "14",
      V23: "15",
      V24: "16",
      V25: "17",
      V26: "18",
      V27: "19",
      V28: "20",
      V29: "21",
      V30: "22",
      V31: "23",
      V32: "24",
      V33: "25",
      V34: "26",
      V35: "27",
      Q3: "28",
      Q4: "29",
      Q5: "30",
      Q5_2: "31"
    };
    var audioFileName = questionAudioMap[src] || src;
    var audio = _this.createManagedHtmlAudio(
      _this.getQuestionAudioBasePath() + audioFileName + ".mp3"
    );
    audio._managedPauseHandler = function () {
      if (_this.isStoppingManagedAudio) {
        return;
      }

      if (_this.activeManagedAudio !== audio) {
        return;
      }

      if (audio.ended || audio.seeking) {
        return;
      }

      if (audio.currentTime <= 0) {
        return;
      }

      if (audio.duration && audio.currentTime >= Math.max(audio.duration - 0.2, 0)) {
        return;
      }

      var resumePromise = audio.play();
      if (resumePromise && typeof resumePromise.catch === "function") {
        resumePromise.catch(function () {
          _this.queuePendingAutoplayAudio(audio);
        });
      }
    };
    audio._managedRecoverHandler = function () {
      if (_this.isStoppingManagedAudio) {
        return;
      }

      if (_this.activeManagedAudio !== audio) {
        return;
      }

      _this.queuePendingAutoplayAudio(audio, 150);
    };
    audio._managedEndedHandler = function () {
      if (_this.activeManagedAudio === audio) {
        _this.activeManagedAudio = null;
      }
    };
    audio.addEventListener("pause", audio._managedPauseHandler);
    audio.addEventListener("stalled", audio._managedRecoverHandler);
    audio.addEventListener("waiting", audio._managedRecoverHandler);
    audio.addEventListener("suspend", audio._managedRecoverHandler);
    audio.addEventListener("ended", audio._managedEndedHandler);
    return audio;
  },
  createSoundEffectAudio: function (src) {
    return _this.createManagedHtmlAudio(src);
  },
  createManagedHtmlAudio: function (src) {
    var audio = document.createElement("audio");
    var sourceCandidates = _this.getAudioSourceCandidates(src);

    _this.configureHtmlAudio(audio);
    audio._sourceCandidates = sourceCandidates;
    audio._sourceCandidateIndex = 0;
    audio.src = sourceCandidates[0];
    audio.addEventListener("error", function () {
      var nextIndex = audio._sourceCandidateIndex + 1;
      if (!audio._sourceCandidates || nextIndex >= audio._sourceCandidates.length) {
        return;
      }

      audio._sourceCandidateIndex = nextIndex;
      audio.src = audio._sourceCandidates[nextIndex];
      audio.load();
    });
    audio.load();
    _this.managedHtmlAudios.push(audio);
    return audio;
  },
  getAudioSourceCandidates: function (src) {
    var candidates = [];
    var normalizedSrc = (src || "").replace(/\\/g, "/");
    var locationHref = window.location.href || "";
    var pathname = window.location.pathname || "";
    var currentDirectory = pathname;

    if (currentDirectory.indexOf("/") !== -1) {
      currentDirectory = currentDirectory.substring(0, currentDirectory.lastIndexOf("/") + 1);
    }

    function addCandidate(candidate) {
      if (!candidate) {
        return;
      }

      if (candidates.indexOf(candidate) === -1) {
        candidates.push(candidate);
      }
    }

    if (normalizedSrc.indexOf("sounds/") === 0) {
      addCandidate(normalizedSrc);
    }

    if (
      window.baseUrl &&
      normalizedSrc.indexOf("sounds/") !== 0 &&
      !/^(?:[a-z]+:)?\/\//i.test(normalizedSrc) &&
      normalizedSrc.indexOf("file:") !== 0
    ) {
      addCandidate(window.baseUrl + normalizedSrc);
    }

    addCandidate(normalizedSrc);

    try {
      addCandidate(new URL(normalizedSrc, document.baseURI || locationHref).href);
    } catch (e) { }

    try {
      addCandidate(new URL(normalizedSrc, locationHref).href);
    } catch (e) { }

    if (currentDirectory) {
      try {
        addCandidate(new URL(normalizedSrc, window.location.origin + currentDirectory).href);
      } catch (e) { }
    }

    return candidates.length ? candidates : [normalizedSrc];
  },
  configureHtmlAudio: function (audio) {
    audio.setAttribute("preload", "auto");
    audio.setAttribute("playsinline", "true");
    audio.setAttribute("webkit-playsinline", "true");
    audio.setAttribute("controlsList", "nodownload noplaybackrate");
    audio.preload = "auto";
  },
  resumeManagedAudioPlayback: function () {
    if (!_this.activeManagedAudio || _this.isStoppingManagedAudio || document.hidden) {
      return;
    }

    if (_this.activeManagedAudio.ended || _this.activeManagedAudio.seeking) {
      return;
    }

    if (_this.activeManagedAudio.currentTime <= 0 || !_this.activeManagedAudio.paused) {
      return;
    }

    _this.queuePendingAutoplayAudio(_this.activeManagedAudio, 100);
  },
  bindGlobalAudioRecovery: function () {
    if (_this.audioVisibilityHandler) {
      return;
    }

    _this.audioVisibilityHandler = function () {
      if (!document.hidden) {
        _this.resumeManagedAudioPlayback();
      }
    };
    _this.audioFocusHandler = function () {
      _this.resumeManagedAudioPlayback();
    };
    _this.audioPageShowHandler = function () {
      _this.resumeManagedAudioPlayback();
    };

    document.addEventListener("visibilitychange", _this.audioVisibilityHandler);
    window.addEventListener("focus", _this.audioFocusHandler);
    window.addEventListener("pageshow", _this.audioPageShowHandler);
  },
  unbindGlobalAudioRecovery: function () {
    if (_this.audioVisibilityHandler) {
      document.removeEventListener("visibilitychange", _this.audioVisibilityHandler);
      _this.audioVisibilityHandler = null;
    }

    if (_this.audioFocusHandler) {
      window.removeEventListener("focus", _this.audioFocusHandler);
      _this.audioFocusHandler = null;
    }

    if (_this.audioPageShowHandler) {
      window.removeEventListener("pageshow", _this.audioPageShowHandler);
      _this.audioPageShowHandler = null;
    }
  },
  clearPendingAudioResume: function () {
    if (_this.pendingAudioResumeTimer) {
      _this.time.events.remove(_this.pendingAudioResumeTimer);
      _this.pendingAudioResumeTimer = null;
    }
  },
  queuePendingAutoplayAudio: function (audio, delay) {
    if (!audio) {
      return;
    }

    _this.pendingAutoplayAudio = audio;
    _this.clearPendingAudioResume();

    if (_this.game && _this.time) {
      _this.pendingAudioResumeTimer = _this.time.events.add(delay || 250, function () {
        _this.pendingAudioResumeTimer = null;
        if (_this.pendingAutoplayAudio === audio && _this.activeManagedAudio === audio) {
          _this.playAudioClip(audio, true);
        }
      }, _this);
    }
  },
  replaySpeakerPrompt: function () {
    _this.setSpeakerButtonEnabled(false);

    if (_this.q56CurrentQuestion) {
      _this.stopQ56QuestionAudio();
      _this.currentQuestionAudio = _this.Ask_Question5_1;
      _this.playAudioClip(_this.currentQuestionAudio);
      _this.startQ56SecondAudioFlow();
      return;
    }

    _this.replayCurrentPromptSequence();
  },
  setSpeakerButtonEnabled: function (enabled) {
    if (!_this.speakerbtn) {
      return;
    }

    _this.speakerbtn.inputEnabled = enabled;
    if (_this.speakerbtn.input) {
      _this.speakerbtn.input.useHandCursor = enabled;
    }
    _this.speakerbtn.alpha = enabled ? 1 : 0.6;
    _this.speakerbtnClicked = !enabled;
  },
  EnableVoice: function () {
    if (_this.rightbtn_Clicked == false) {
      _this.setSpeakerButtonEnabled(true);
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
    _this.getQuestion();
  },

  startQuestionTimers: function () {
    if (!_this.displayTimerEvent) {
      _this.displayTimerEvent = _this.time.events.loop(Phaser.Timer.SECOND, _this.updateTimer, _this);
    }

    if (_this.timer) {
      _this.timer.stop();
      _this.timer = null;
    }
    _this.timer = _this.time.create(false);

    _this.timer.loop(1000, function () {
      _this.AnsTimerCount++;
    }, _this);

    _this.timer.start();
  },

  getQuestion: function () {
    var shouldSyncFirstQuestionTimers = _this.currentQuestion === 1;

    if (!shouldSyncFirstQuestionTimers) {
      _this.startQuestionTimers();
    }

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

      default:
        _this.Question1();
        break;
    }
  },

  //---------------------------Question 1 Logic-----------------------------
  Question1: function () {
    _this.questionid=1;
    _this.sceneCount++;
    _this.clearScreen();
    _this.hideMeridiemBadge = false;
    _this.currentAnswerType = "elapsed";
    _this.syncElapsedStartClockWithAudio = true;
    _this.elapsedStartClockRevealed = false;

    _this.currentRoundData = _this.pickRandomRound(_this.elapsedTimeRounds, "q1");
    _this.currentClockMode = _this.rnd.integerInRange(0, 1) === 0 ? "analog" : "digital";

    _this.currentRoundData.elapsedMinutes =
      (_this.currentRoundData.endHour24 * 60 + _this.currentRoundData.endMinute) -
      (_this.currentRoundData.startHour24 * 60 + _this.currentRoundData.startMinute);

    _this.createElapsedTimeLayout();
    _this.playCurrentPromptSequence();
  },
  //---------------------END OF QUESTION 1 LOGIC-----------------------

  //---------------------------Question 2 Logic-----------------------------
  Question2: function () {
    _this.questionid=2;
    _this.sceneCount++;
    _this.clearScreen();
    _this.hideMeridiemBadge = false;
    _this.currentAnswerType = "elapsed";
    _this.syncElapsedStartClockWithAudio = false;
    _this.elapsedStartClockRevealed = false;

    var typeBuckets = [
      { key: "2a", rounds: _this.question2TypeARounds },
      { key: "2b", rounds: _this.question2TypeBRounds }
    ];
    var selectedBucket = typeBuckets[_this.rnd.integerInRange(0, typeBuckets.length - 1)];

    _this.currentQuestion2Type = selectedBucket.key;
    _this.currentRoundData = _this.pickRandomRound(
      selectedBucket.rounds,
      "q2_" + selectedBucket.key
    );
    _this.currentClockMode = _this.rnd.integerInRange(0, 1) === 0 ? "analog" : "digital";

    _this.createElapsedTimeLayout();
    _this.playCurrentPromptSequence();
  },
  //---------------------END OF QUESTION 2 LOGIC-----------------------

  //---------------------------Question 3 Logic-----------------------------
  Question3: function () {
     _this.questionid=3;
    _this.sceneCount++;
    _this.clearScreen();
    _this.hideMeridiemBadge = false;
    _this.currentAnswerType = "endTime";
    _this.syncElapsedStartClockWithAudio = false;
    _this.elapsedStartClockRevealed = false;
    _this.currentRoundData = _this.pickRandomRound(_this.question3Rounds, "q3");
    _this.currentClockMode = _this.rnd.integerInRange(0, 1) === 0 ? "analog" : "digital";

    _this.createStartTimeLayout();
    _this.playCurrentPromptSequence();
  },
  //---------------------END OF QUESTION 3 LOGIC-----------------------

  //---------------------------Question 4 Logic-----------------------------
  Question4: function () {
     _this.questionid=4;
    _this.sceneCount++;
    _this.clearScreen();
    _this.hideMeridiemBadge = false;
    _this.currentAnswerType = "startTime";
    _this.syncElapsedStartClockWithAudio = false;
    _this.elapsedStartClockRevealed = false;
    _this.currentRoundData = _this.pickRandomRound(_this.question4Rounds, "q4");
    _this.currentClockMode = _this.rnd.integerInRange(0, 1) === 0 ? "analog" : "digital";

    _this.createStartTimeLayout();
    _this.playCurrentPromptSequence();
  },
  //---------------------END OF QUESTION 4 LOGIC-----------------------

  Question5: function () {
     _this.questionid=5;
    _this.sceneCount++;
    _this.startQ56CountryClockQuestion(5);

  },

  Question6: function () {
     _this.questionid=6;
    _this.sceneCount++;
    _this.startQ56CountryClockQuestion(6);

  },




  createElapsedTimeLayout: function () {
    var layout = _this.getElapsedLayoutConfig();
    var elapsedLayoutOffsetY = 26;
    var elapsedActivityRaiseY = 16;
    var question2AImageDropY = 20;
    var elapsedAnswerClockRaiseY = 90;
    var elapsedDigitalClockScale = 0.66;
    var elapsedDigitalClockLiftY = 20;
    var elapsedAnswerClockScale = 0.7;
    var elapsedAnswerRaiseY = -70;

    layout.activityImageY -= elapsedLayoutOffsetY + elapsedActivityRaiseY;
    if (_this.currentQuestion === 2 && _this.currentQuestion2Type === "2a") {
      layout.activityImageY += question2AImageDropY;
    }
    layout.answerHeaderY -= elapsedLayoutOffsetY + elapsedAnswerRaiseY;
    layout.answerClockY -= elapsedLayoutOffsetY + 6 + elapsedAnswerRaiseY + elapsedAnswerClockRaiseY;
    layout.submitButtonY += elapsedLayoutOffsetY + 4;

    _this.leftPanel = _this.createPanel(layout.leftPanelX, layout.panelY, layout.sidePanelWidth, layout.sidePanelHeight);
    _this.rightPanel = _this.createPanel(layout.rightPanelX, layout.panelY, layout.sidePanelWidth, layout.sidePanelHeight);

    _this.activityImage = _this.add.sprite(layout.activityImageX, layout.activityImageY, _this.currentRoundData.imageKey);
    _this.activityImage.anchor.setTo(0.5);
    _this.fitSpriteInside(_this.activityImage, layout.activityMaxWidth, layout.activityMaxHeight);

    _this.startLabel = _this.createStyledText(layout.leftPanelCenterX, layout.clockLabelY, "START TIME", _this.styleClockLabel);
    _this.endLabel = _this.createStyledText(layout.rightPanelCenterX, layout.clockLabelY, "END TIME", _this.styleClockLabel);

    _this.startClockDisplay = _this.createSideClockDisplay(
      layout.leftClockX,
      layout.analogClockY,
      layout.leftDigitalClockX,
      layout.digitalClockY,
      layout.clockScale,
      layout.meridiemBadgeY,
      _this.currentRoundData.startHour24,
      _this.currentRoundData.startMinute,
      "AnalogClock1",
      "DigitalClock1"
    );
    _this.endClockDisplay = _this.createSideClockDisplay(
      layout.rightClockX,
      layout.analogClockY,
      layout.rightDigitalClockX,
      layout.digitalClockY,
      layout.clockScale,
      layout.meridiemBadgeY,
      _this.currentRoundData.endHour24,
      _this.currentRoundData.endMinute,
      "PinkHeadedAnalogClock",
      "DigitalClock3"
    );

    if (_this.currentClockMode === "analog") {
      _this.startLabel.x = _this.startClockDisplay.centerX;
      _this.endLabel.x = _this.endClockDisplay.centerX;
      if (_this.startClockDisplay.meridiemBadge) {
        _this.startClockDisplay.meridiemBadge.x = _this.startClockDisplay.centerX;
      }
      if (_this.endClockDisplay.meridiemBadge) {
        _this.endClockDisplay.meridiemBadge.x = _this.endClockDisplay.centerX;
      }
    } else {
      _this.centerDigitalClockDisplay(_this.startClockDisplay, layout.leftPanelCenterX);
      _this.centerDigitalClockDisplay(_this.endClockDisplay, layout.rightPanelCenterX);
      _this.startClockDisplay.background.scale.setTo(elapsedDigitalClockScale);
      _this.endClockDisplay.background.scale.setTo(elapsedDigitalClockScale);
      _this.startClockDisplay.background.y -= elapsedDigitalClockLiftY;
      _this.endClockDisplay.background.y -= elapsedDigitalClockLiftY;
      _this.centerDigitalClockDisplay(_this.startClockDisplay, layout.leftPanelCenterX, {
        digitOffsetXs: [-1, 1, 3, 5],
        digitOffsetY: 1
      });
      _this.centerDigitalClockDisplay(_this.endClockDisplay, layout.rightPanelCenterX, {
        digitOffsetXs: [-1, 1, 3, 5],
        digitOffsetY: 1
      });
      _this.startLabel.x = layout.leftPanelCenterX;
      _this.endLabel.x = layout.rightPanelCenterX;
    }

    _this.setClockDisplayVisibility(_this.startClockDisplay, false);
    _this.setClockDisplayVisibility(_this.endClockDisplay, false);
    _this.startLabel.visible = false;
    _this.endLabel.visible = false;

    _this.elapsedStartClockRevealTimer = _this.time.events.add(500, function () {
      if (_this.syncElapsedStartClockWithAudio) {
        return;
      }
      _this.revealElapsedStartClock();
    });

    if (!_this.syncElapsedStartClockWithAudio) {
      _this.scheduleElapsedEndClockReveal();
    }

    _this.answerClock = _this.createAnswerClock(layout.answerClockX, layout.answerClockY, "DigitalClock2", elapsedAnswerClockScale);
    _this.answerClock.x = _this.world.centerX - (_this.answerClock.width / 2);
    var elapsedSubmitButtonX = _this.world.centerX - 38;
    var elapsedSubmitButtonY = layout.answerClockY + _this.answerClock.height + 12;
    _this.rightbtn = _this.createButton(elapsedSubmitButtonX, elapsedSubmitButtonY, "RightClick", _this.checkElapsedAnswer);
    _this.addScrollableDigitalClock(_this.answerClock);
    _this.centerDigitalClockDisplay(
      { background: _this.answerClock, digits: _this.digitalDigits },
      _this.world.centerX,
      { digitOffsetXs: [0, 0, 0, 0], digitOffsetY: 0 }
    );
    _this.setElapsedAnswerVisibility(false);
    _this.disableAnswerInput();
  },

  revealElapsedStartClock: function () {
    if (_this.elapsedStartClockRevealed || !_this.startClockDisplay || !_this.startLabel) {
      return;
    }

    _this.elapsedStartClockRevealed = true;
    _this.startQuestionTimers();
    _this.setClockDisplayVisibility(_this.startClockDisplay, true);
    _this.startLabel.visible = true;
    _this.playClockDisplaySpriteAnimation(_this.startClockDisplay);

    if (_this.syncElapsedStartClockWithAudio) {
      _this.scheduleElapsedEndClockReveal();
    }
  },

  scheduleElapsedEndClockReveal: function () {
    if (_this.elapsedEndClockRevealTimer) {
      _this.time.events.remove(_this.elapsedEndClockRevealTimer);
      _this.elapsedEndClockRevealTimer = null;
    }

    _this.elapsedEndClockRevealTimer = _this.time.events.add(5000, function () {
      _this.setClockDisplayVisibility(_this.endClockDisplay, true);
      _this.endLabel.visible = true;
      _this.playClockDisplaySpriteAnimation(_this.endClockDisplay);
      _this.elapsedEndGlowCompleteAt = _this.time.now + 3000;
    });
  },

  createStartTimeLayout: function () {
    var layout = _this.getElapsedLayoutConfig();
    var startTimeLayoutOffsetY = 48;
    var startTimePanelLiftY = 50;
    var startTimeActivityRaiseY = 50;
    var startTimeTitleBottomPadding = 38;
    var startTimeButtonOffsetY = 48;
    var startTimeAnswerLiftY = 30;
    var startTimePanelWidth = 320;
    var startTimePanelHeight = 400;
    var startTimeClockScale = 0.82;
    var startTimeDigitalClockOffsetY = 52;
    var startTimeLabelFontSize = 19;
    var startTimeMeridiemScale = 0.26;
    var startTimeBadgeScale = 0.32;
    var analogBadgeBelowClockOffsetY = 32;
    var startTimeDigitalClockScale = 0.88;

    layout.leftPanelX -= (startTimePanelWidth - layout.sidePanelWidth) / 2;
    layout.rightPanelX -= (startTimePanelWidth - layout.sidePanelWidth) / 2;
    layout.sidePanelWidth = startTimePanelWidth;
    layout.sidePanelHeight = startTimePanelHeight;
    layout.leftPanelCenterX = layout.leftPanelX + layout.sidePanelWidth / 2;
    layout.rightPanelCenterX = layout.rightPanelX + layout.sidePanelWidth / 2;
    layout.leftDigitalClockX = layout.leftPanelCenterX;
    layout.rightDigitalClockX = layout.rightPanelCenterX;
    layout.clockScale = startTimeClockScale;
    layout.startTimeDigitalClockScale = startTimeDigitalClockScale;
    _this.startTimeDigitalClockScale = startTimeDigitalClockScale;
    layout.leftClockX = _this.getAnalogClockFaceXForCenter("AnalogClock1", layout.clockScale, layout.leftPanelCenterX);
    layout.rightClockX = _this.getAnalogClockFaceXForCenter("PinkHeadedAnalogClock", layout.clockScale, layout.rightPanelCenterX);
    layout.startTimeMeridiemScale = startTimeMeridiemScale;
    layout.startTimeBadgeScale = startTimeBadgeScale;
    layout.startTimeButtonOffsetY = startTimeButtonOffsetY;
    layout.startTimeAnswerLiftY = startTimeAnswerLiftY;

    layout.panelY += startTimeLayoutOffsetY - startTimePanelLiftY;
    layout.analogClockY += startTimeLayoutOffsetY - startTimePanelLiftY;
    layout.digitalClockY = layout.panelY + startTimeDigitalClockOffsetY;
    layout.activityImageY -= startTimeActivityRaiseY;
    layout.meridiemBadgeY += startTimeLayoutOffsetY - startTimePanelLiftY;
    layout.clockLabelY = layout.panelY + layout.sidePanelHeight - startTimeTitleBottomPadding;
    layout.question3SubmitButtonY -= startTimeAnswerLiftY - 120;

    _this.leftPanel = _this.createPanel(layout.leftPanelX, layout.panelY, layout.sidePanelWidth, layout.sidePanelHeight);
    _this.rightPanel = _this.createPanel(layout.rightPanelX, layout.panelY, layout.sidePanelWidth, layout.sidePanelHeight);

    _this.activityImage = _this.add.sprite(layout.activityImageX, layout.activityImageY, _this.currentRoundData.imageKey);
    _this.activityImage.anchor.setTo(0.5);
    _this.fitSpriteInside(_this.activityImage, layout.activityMaxWidth, layout.activityMaxHeight);
    _this.createQuestion34ElapsedTimeDisplay(layout);

    _this.startLabel = _this.createStyledText(layout.leftPanelCenterX, layout.clockLabelY, "START TIME", _this.styleClockLabel);
    _this.endLabel = _this.createStyledText(layout.rightPanelCenterX, layout.clockLabelY, "END TIME", _this.styleClockLabel);
    _this.startLabel.fontSize = startTimeLabelFontSize;
    _this.endLabel.fontSize = startTimeLabelFontSize;

    if (_this.currentAnswerType === "endTime") {
      _this.startClockDisplay = _this.createSideClockDisplay(
        layout.leftClockX,
        layout.analogClockY,
        layout.leftDigitalClockX,
        layout.digitalClockY,
        layout.clockScale,
        layout.meridiemBadgeY + 15 + startTimeButtonOffsetY,
        _this.currentRoundData.startHour24,
        _this.currentRoundData.startMinute,
        "AnalogClock1",
        "DigitalClock1"
      );
      _this.createEndTimeAnswerClock(layout);
    } else {
      _this.createStartTimeAnswerClock(layout);
      _this.endClockDisplay = _this.createSideClockDisplay(
        layout.rightClockX,
        layout.analogClockY,
        layout.rightDigitalClockX,
        layout.digitalClockY,
        layout.clockScale,
        layout.meridiemBadgeY + 15 + startTimeButtonOffsetY,
        _this.currentRoundData.endHour24,
        _this.currentRoundData.endMinute,
        "PinkHeadedAnalogClock",
        "DigitalClock3"
      );
    }

    if (_this.currentClockMode === "analog") {
      _this.startLabel.x = _this.startClockDisplay.centerX;
      _this.endLabel.x = _this.endClockDisplay.centerX;
      _this.createStartMeridiemButtons(layout, _this.getTimeAnswerClockDisplay());
      if (_this.startClockDisplay.meridiemBadge) {
        _this.startClockDisplay.meridiemBadge.x = _this.startClockDisplay.centerX;
        _this.startClockDisplay.meridiemBadge.y = _this.startClockDisplay.face.y + _this.startClockDisplay.face.height + analogBadgeBelowClockOffsetY;
        _this.startClockDisplay.meridiemBadge.scale.setTo(
          _this.currentAnswerType === "endTime" ? layout.startTimeMeridiemScale : layout.startTimeBadgeScale,
          _this.currentAnswerType === "endTime" ? layout.startTimeMeridiemScale : layout.startTimeBadgeScale
        );
      }
      if (_this.endClockDisplay.meridiemBadge) {
        _this.endClockDisplay.meridiemBadge.x = _this.endClockDisplay.centerX;
        _this.endClockDisplay.meridiemBadge.y = _this.endClockDisplay.face.y + _this.endClockDisplay.face.height + analogBadgeBelowClockOffsetY;
        _this.endClockDisplay.meridiemBadge.scale.setTo(
          _this.currentAnswerType === "endTime" ? layout.startTimeBadgeScale : layout.startTimeMeridiemScale,
          _this.currentAnswerType === "endTime" ? layout.startTimeBadgeScale : layout.startTimeMeridiemScale
        );
      }
    } else {
      _this.centerDigitalClockDisplay(_this.startClockDisplay, layout.leftPanelCenterX, {
        digitOffsetXs: [-1, 1, 3, 5],
        digitOffsetY: 0
      });
      _this.centerDigitalClockDisplay(_this.endClockDisplay, layout.rightPanelCenterX, {
        digitOffsetXs: [-1, 1, 3, 5],
        digitOffsetY: 0
      });
      _this.startLabel.x = layout.leftPanelCenterX;
      _this.endLabel.x = layout.rightPanelCenterX;
    }

    _this.setClockDisplayVisibility(_this.startClockDisplay, false);
    _this.setClockDisplayVisibility(_this.endClockDisplay, false);
    _this.startLabel.visible = false;
    _this.endLabel.visible = false;
    if (_this.currentClockMode === "analog") {
      if (_this.currentAnswerType === "endTime" && _this.endClockDisplay) {
        _this.setClockDisplayVisibility(_this.endClockDisplay, false);
      }
      if (_this.currentAnswerType === "startTime" && _this.startClockDisplay) {
        _this.setClockDisplayVisibility(_this.startClockDisplay, false);
      }
      if (_this.startAMButton) {
        _this.startAMButton.visible = false;
      }
      if (_this.startPMButton) {
        _this.startPMButton.visible = false;
      }
    }

    if (_this.currentQuestion === 3) {
      _this.elapsedStartClockRevealTimer = _this.time.events.add(500, function () {
        _this.setClockDisplayVisibility(_this.startClockDisplay, true);
        _this.startLabel.visible = true;
        _this.playClockDisplaySpriteAnimation(_this.startClockDisplay);
      });

      _this.elapsedAnswerRevealTimer = _this.time.events.add(3500, function () {
        _this.showQuestion34ElapsedClockDisplay();
        _this.playClockDisplaySpriteAnimation(_this.question34ElapsedClockDisplay);
      });

      _this.elapsedEndClockRevealTimer = _this.time.events.add(6500, function () {
        _this.setClockDisplayVisibility(_this.endClockDisplay, true);
        _this.endLabel.visible = true;
        _this.playClockDisplaySpriteAnimation(_this.endClockDisplay, 2000);
        if (_this.startAMButton) {
          _this.startAMButton.visible = true;
        }
        if (_this.startPMButton) {
          _this.startPMButton.visible = true;
        }
      });
    } else if (_this.currentQuestion === 4) {
      _this.elapsedEndClockRevealTimer = _this.time.events.add(500, function () {
        _this.setClockDisplayVisibility(_this.endClockDisplay, true);
        _this.endLabel.visible = true;
        _this.playClockDisplaySpriteAnimation(_this.endClockDisplay);
      });

      _this.elapsedAnswerRevealTimer = _this.time.events.add(3500, function () {
        _this.showQuestion34ElapsedClockDisplay();
        _this.playClockDisplaySpriteAnimation(_this.question34ElapsedClockDisplay);
      });

      _this.elapsedStartClockRevealTimer = _this.time.events.add(6500, function () {
        _this.setClockDisplayVisibility(_this.startClockDisplay, true);
        _this.startLabel.visible = true;
        _this.playClockDisplaySpriteAnimation(_this.startClockDisplay, 2000);
        if (_this.startAMButton) {
          _this.startAMButton.visible = true;
        }
        if (_this.startPMButton) {
          _this.startPMButton.visible = true;
        }
      });
    } else if (_this.currentAnswerType === "endTime") {
      _this.elapsedStartClockRevealTimer = _this.time.events.add(1000, function () {
        _this.setClockDisplayVisibility(_this.startClockDisplay, true);
        _this.startLabel.visible = true;
        _this.playClockDisplaySpriteAnimation(_this.startClockDisplay);
      });

      _this.elapsedEndClockRevealTimer = _this.time.events.add(4000, function () {
        _this.setClockDisplayVisibility(_this.endClockDisplay, true);
        _this.endLabel.visible = true;
        _this.playClockDisplaySpriteAnimation(_this.endClockDisplay);
        if (_this.startAMButton) {
          _this.startAMButton.visible = true;
        }
        if (_this.startPMButton) {
          _this.startPMButton.visible = true;
        }
      });
    } else {
      _this.elapsedEndClockRevealTimer = _this.time.events.add(1000, function () {
        _this.setClockDisplayVisibility(_this.endClockDisplay, true);
        _this.endLabel.visible = true;
        _this.playClockDisplaySpriteAnimation(_this.endClockDisplay);
      });

      _this.elapsedStartClockRevealTimer = _this.time.events.add(4000, function () {
        _this.setClockDisplayVisibility(_this.startClockDisplay, true);
        _this.startLabel.visible = true;
        _this.playClockDisplaySpriteAnimation(_this.startClockDisplay);
        if (_this.startAMButton) {
          _this.startAMButton.visible = true;
        }
        if (_this.startPMButton) {
          _this.startPMButton.visible = true;
        }
      });
    }

    _this.rightbtn = _this.createButton(layout.question3SubmitButtonX, layout.question3SubmitButtonY, "RightClick", _this.checkStartTimeAnswer);
    _this.rightbtn.scale.setTo(1.2, 1.2);
    _this.disableAnswerInput();
  },

  createQuestion34ElapsedTimeDisplay: function (layout) {
    if ((_this.currentQuestion !== 3 && _this.currentQuestion !== 4) || !_this.currentRoundData || typeof _this.currentRoundData.elapsedMinutes !== "number") {
      return;
    }

    var elapsedHours = Math.floor(_this.currentRoundData.elapsedMinutes / 60);
    var elapsedMinutes = _this.currentRoundData.elapsedMinutes % 60;
    var elapsedClockY = _this.activityImage.y + (_this.activityImage.height / 2) + 12;

    _this.question34ElapsedClockDisplay = _this.createDigitalClockDisplay(
      _this.world.centerX - 120,
      elapsedClockY,
      elapsedHours,
      elapsedMinutes,
      0.56,
      "DigitalClock2"
    );
    _this.centerDigitalClockDisplay(_this.question34ElapsedClockDisplay, _this.world.centerX);
    if (_this.currentQuestion === 3 || _this.currentQuestion === 4) {
      _this.hideQuestion34ElapsedClockDisplay();
    } else {
      _this.playClockDisplaySpriteAnimation(_this.question34ElapsedClockDisplay);
    }
  },

  createStartTimeAnswerClock: function (layout) {
    if (_this.currentClockMode === "analog") {
      _this.startClockDisplay = _this.createAnalogClockDisplay(
        layout.leftClockX,
        layout.analogClockY,
        layout.clockScale,
        "AnalogClock1"
      );
      _this.startClockDisplay.answerHour12 = 12;
      _this.startClockDisplay.answerMinute = 0;
      _this.setAnalogClockTime(_this.startClockDisplay, 0, 0);
      _this.addDraggableAnalogClock(_this.startClockDisplay);
      return;
    }

    _this.startClockDisplay = {};
    _this.startClockDisplay.background = _this.createClockBackgroundSprite(
      layout.leftDigitalClockX,
      layout.digitalClockY,
      "DigitalClock1"
    );
    _this.startClockDisplay.background.scale.setTo(layout.startTimeDigitalClockScale || layout.clockScale);
    _this.addScrollableDigitalClock(_this.startClockDisplay.background);
    _this.startClockDisplay.digits = _this.digitalDigits;
    _this.centerDigitalClockDisplay(_this.startClockDisplay, layout.leftPanelCenterX, {
      digitOffsetXs: [6, 8, 11, 13],
      digitOffsetY: 2
    });
  },

  createEndTimeAnswerClock: function (layout) {
    if (_this.currentClockMode === "analog") {
      _this.endClockDisplay = _this.createAnalogClockDisplay(
        layout.rightClockX,
        layout.analogClockY,
        layout.clockScale,
        "PinkHeadedAnalogClock"
      );
      _this.endClockDisplay.answerHour12 = 12;
      _this.endClockDisplay.answerMinute = 0;
      _this.setAnalogClockTime(_this.endClockDisplay, 0, 0);
      _this.addDraggableAnalogClock(_this.endClockDisplay);
      return;
    }

    _this.endClockDisplay = {};
    _this.endClockDisplay.background = _this.createClockBackgroundSprite(
      layout.rightDigitalClockX,
      layout.digitalClockY,
      "DigitalClock3"
    );
    _this.endClockDisplay.background.scale.setTo(layout.startTimeDigitalClockScale || layout.clockScale);
    _this.addScrollableDigitalClock(_this.endClockDisplay.background);
    _this.endClockDisplay.digits = _this.digitalDigits;
    _this.centerDigitalClockDisplay(_this.endClockDisplay, layout.rightPanelCenterX, {
      digitOffsetXs: [6, 8, 11, 13],
      digitOffsetY: 2
    });
  },

  createStartMeridiemButtons: function (layout, targetClockDisplay) {
    _this.selectedStartMeridiem = null;
    var meridiemScale = layout.startTimeMeridiemScale || 0.18;
    var buttonCenterX =
      (targetClockDisplay && targetClockDisplay.centerX) || layout.leftPanelCenterX;
    var buttonY = layout.meridiemBadgeY + 15 + (layout.startTimeButtonOffsetY || 0);

    if (targetClockDisplay && targetClockDisplay.face) {
      buttonY = targetClockDisplay.face.y + targetClockDisplay.face.height + 32;
    }

    _this.startAMButton = _this.add.sprite(buttonCenterX, buttonY, "AMBadge");
    _this.startPMButton = _this.add.sprite(buttonCenterX, buttonY, "PMBadge");

    _this.startAMButton.anchor.setTo(0.5);
    _this.startPMButton.anchor.setTo(0.5);
    _this.startAMButton.scale.setTo(meridiemScale, meridiemScale);
    _this.startPMButton.scale.setTo(meridiemScale, meridiemScale);

    var buttonGap = 40;
    var halfSpacing =
      ((_this.startAMButton.width + _this.startPMButton.width) / 4) + (buttonGap / 2);
    _this.startAMButton.x = buttonCenterX - halfSpacing;
    _this.startPMButton.x = buttonCenterX + halfSpacing;

    _this.startAMButton.frame = 0;
    _this.startPMButton.frame = 0;

    _this.startAMButton.inputEnabled = true;
    _this.startPMButton.inputEnabled = true;
    _this.startAMButton.input.useHandCursor = true;
    _this.startPMButton.input.useHandCursor = true;

    _this.startAMButton.events.onInputDown.add(function () {
      _this.playClickSound();
      _this.selectedStartMeridiem = "AM";
      _this.startAMButton.frame = 1;
      _this.startPMButton.frame = 0;
    }, _this);

    _this.startPMButton.events.onInputDown.add(function () {
      _this.playClickSound();
      _this.selectedStartMeridiem = "PM";
      _this.startPMButton.frame = 1;
      _this.startAMButton.frame = 0;
    }, _this);

    _this.world.bringToTop(_this.startAMButton);
    _this.world.bringToTop(_this.startPMButton);
  },

  getElapsedLayoutConfig: function () {
    var worldWidth = _this.world.width;
    var centerX = _this.world.centerX;
    var sidePanelWidth = 225;
    var sidePanelHeight = 235;
    var centerPanelWidth = 275;
    var centerPanelHeight = 205;
    var sideMargin = 55;
    var panelGap = 25;
    var panelY = 96;
    var leftPanelX = sideMargin;
    var centerPanelX = Math.round(centerX - centerPanelWidth / 2);
    var rightPanelX = worldWidth - sideMargin - sidePanelWidth;
    var answerClockX = centerX - 134;
    var activityCenterY = panelY + sidePanelHeight / 2;
    var answerClockY = 332;

    return {
      panelY: panelY,
      sidePanelWidth: sidePanelWidth,
      sidePanelHeight: sidePanelHeight,
      centerPanelWidth: centerPanelWidth,
      centerPanelHeight: centerPanelHeight,
      leftPanelX: leftPanelX,
      centerPanelX: centerPanelX,
      rightPanelX: rightPanelX,
      leftPanelCenterX: leftPanelX + sidePanelWidth / 2,
      rightPanelCenterX: rightPanelX + sidePanelWidth / 2,
      activityImageX: centerX,
      activityImageY: activityCenterY,
      activityMaxWidth: centerPanelWidth - 10,
      activityMaxHeight: centerPanelHeight - 18,
      clockScale: 0.44,
      analogClockY: 108,
      leftClockX: leftPanelX + 64,
      rightClockX: rightPanelX + 64,
      digitalClockY: 118,
      leftDigitalClockX: leftPanelX + 28,
      rightDigitalClockX: rightPanelX + 28,
      meridiemBadgeY: 266,
      clockLabelY: 316,
      answerHeaderY: 366,
      answerHourLabelX: answerClockX + 75,
      answerMinLabelX: answerClockX + 195,
      answerClockX: answerClockX,
      answerClockY: answerClockY,
      submitButtonX: rightPanelX + 82,
      submitButtonY: 348,
      question3SubmitButtonX: centerX - 38,
      question3SubmitButtonY: 356
    };
  },

  styleClockLabel: function (label) {
    label.anchor.setTo(0.5);
    label.font = "Akzidenz-Grotesk BQ";
    label.fontSize = 16;
    label.fill = "#000000";
  },

  styleAnswerHeader: function (label) {
    label.anchor.setTo(0.5);
    label.font = "Akzidenz-Grotesk BQ";
    label.fontSize = 28;
    label.fill = "#000000";
  },

  createPanel: function (x, y, width, height) {
    var panel = _this.add.sprite(x, y, "Box");
    panel.width = width;
    panel.height = height;
    return panel;
  },

  createStyledText: function (x, y, text, styleFn) {
    var label = _this.add.text(x, y, text);
    styleFn.call(_this, label);
    return label;
  },

  createButton: function (x, y, key, handler) {
    var button = _this.add.sprite(x, y, key);
    button.inputEnabled = true;
    button.input.useHandCursor = true;
    button.events.onInputDown.add(handler, _this);
    return button;
  },

  setClockDisplayVisibility: function (clockDisplay, visible) {
    if (!clockDisplay) {
      return;
    }

    if (clockDisplay.face) {
      clockDisplay.face.visible = visible;
    }
    if (clockDisplay.background) {
      clockDisplay.background.visible = visible;
    }
    if (clockDisplay.hourHand) {
      clockDisplay.hourHand.visible = visible;
    }
    if (clockDisplay.minuteHand) {
      clockDisplay.minuteHand.visible = visible;
    }
    if (clockDisplay.redCircle) {
      clockDisplay.redCircle.visible = visible;
    }
    if (clockDisplay.meridiemBadge) {
      clockDisplay.meridiemBadge.visible = visible;
    }
    if (clockDisplay.digits && clockDisplay.digits.length) {
      for (var i = 0; i < clockDisplay.digits.length; i++) {
        clockDisplay.digits[i].visible = visible;
      }
    }
  },

  setElapsedAnswerVisibility: function (visible) {
    if (_this.answerClock) {
      _this.answerClock.visible = visible;
      if (visible) {
        _this.showClockGlow(_this.answerClock, 3000);
      }
    }
    if (_this.rightbtn) {
      _this.rightbtn.visible = visible;
    }
    if (_this.digitalClockOverlay) {
      _this.digitalClockOverlay.visible = visible;
    }
    for (var i = 0; i < _this.digitalDigits.length; i++) {
      if (_this.digitalDigits[i]) {
        _this.digitalDigits[i].visible = visible;
      }
    }
  },

  hideQuestion34ElapsedClockDisplay: function () {
    if (!_this.question34ElapsedClockDisplay) {
      return;
    }

    if (_this.question34ElapsedClockDisplay.background) {
      _this.question34ElapsedClockDisplay.background.visible = false;
    }
    if (_this.question34ElapsedClockDisplay.digits && _this.question34ElapsedClockDisplay.digits.length) {
      for (var i = 0; i < _this.question34ElapsedClockDisplay.digits.length; i++) {
        if (_this.question34ElapsedClockDisplay.digits[i]) {
          _this.question34ElapsedClockDisplay.digits[i].visible = false;
        }
      }
    }
  },

  showQuestion34ElapsedClockDisplay: function () {
    if (!_this.question34ElapsedClockDisplay) {
      return;
    }

    if (_this.question34ElapsedClockDisplay.background) {
      _this.question34ElapsedClockDisplay.background.visible = true;
    }
    if (_this.question34ElapsedClockDisplay.digits && _this.question34ElapsedClockDisplay.digits.length) {
      for (var i = 0; i < _this.question34ElapsedClockDisplay.digits.length; i++) {
        if (_this.question34ElapsedClockDisplay.digits[i]) {
          _this.question34ElapsedClockDisplay.digits[i].visible = true;
        }
      }
    }
  },

  createAnswerClock: function (x, y, backgroundKey, scaleX, scaleY) {
    var clock = _this.createClockBackgroundSprite(x, y, backgroundKey || "DigitalClock");
    clock.scale.setTo(scaleX || 0.8, scaleY || scaleX || 0.84);
    return clock;
  },

  createSideClockDisplay: function (
    analogX,
    analogY,
    digitalX,
    digitalY,
    clockScale,
    meridiemBadgeY,
    hour24,
    minute,
    analogFaceKey,
    digitalBackgroundKey
  ) {
    if (_this.currentClockMode === "analog") {
      var analogClock = _this.createAnalogClockDisplay(analogX, analogY, clockScale, analogFaceKey);
      _this.setAnalogClockTime(analogClock, hour24, minute);
      _this.attachMeridiemBadge(analogClock, hour24, meridiemBadgeY);
      return analogClock;
    }

    var digitalScale = clockScale;
    if (_this.currentAnswerType === "startTime" && _this.startTimeDigitalClockScale) {
      digitalScale = _this.startTimeDigitalClockScale;
    }

    return _this.createDigitalClockDisplay(
      digitalX,
      digitalY,
      hour24,
      minute,
      digitalScale,
      digitalBackgroundKey || "DigitalClock"
    );
  },

  fitSpriteInside: function (sprite, maxWidth, maxHeight) {
    var scale = Math.min(maxWidth / sprite.width, maxHeight / sprite.height);
    sprite.scale.setTo(scale);
  },

  createAnalogClockDisplay: function (x, y, faceScale, faceKey) {
    var clock = {};
    var handScaleX = faceScale || 0.5;
    var handScaleY = faceScale || 0.5;
    var faceScaleX = handScaleX;
    var faceScaleY = handScaleY;
    var handCenterOffset = _this.getAnalogClockHandCenter(faceKey);

    if (faceKey === "PinkHeadedAnalogClock") {
      faceScaleX = handScaleX * (273 / 253);
      faceScaleY = handScaleY * (295 / 275);
    } else if (faceKey === "ClockPink") {
      faceScaleX = handScaleX * (282 / 253);
      faceScaleY = handScaleY * (307 / 275);
    }

    clock.face = _this.createClockBackgroundSprite(x, y, faceKey || "AnalogClock");
    clock.face.scale.setTo(faceScaleX, faceScaleY);

    clock.centerX = clock.face.x + (handCenterOffset.x * faceScaleX);
    clock.centerY = clock.face.y + (handCenterOffset.y * faceScaleY);

    clock.hourHand = _this.add.sprite(clock.centerX, clock.centerY, "HourHand");
    clock.minuteHand = _this.add.sprite(clock.centerX, clock.centerY, "MinuteHand");

    clock.hourHand.scale.setTo(handScaleX, handScaleY);
    clock.minuteHand.scale.setTo(handScaleX, handScaleY);

    clock.hourHand.anchor.setTo(10 / 61, 20 / 40);
    clock.minuteHand.anchor.setTo(10 / 80, 20 / 52);

    clock.redCircle = _this.add.sprite(clock.centerX - 1, clock.centerY, "RedCircle");
    clock.redCircle.anchor.setTo(0.5);
    clock.redCircle.scale.setTo(handScaleX, handScaleY);

    return clock;
  },

  getAnalogClockHandCenter: function (faceKey) {
    if (faceKey === "PinkHeadedAnalogClock") {
      return {
        x: 99.7,
        y: 180.2
      };
    }

    if (faceKey === "ClockPink") {
      return {
        x: 92.4,
        y: 168
      };
    }

    // Match the working game's animated analog clock geometry.
    return {
      x: 106,
      y: 191
    };
  },

  getAnalogClockFaceXForCenter: function (faceKey, faceScale, centerX) {
    var scaleX = faceScale || 1;

    if (faceKey === "PinkHeadedAnalogClock") {
      scaleX = scaleX * (273 / 253);
    } else if (faceKey === "ClockPink") {
      scaleX = scaleX * (282 / 253);
    }

    return centerX - (_this.getAnalogClockHandCenter(faceKey).x * scaleX);
  },

  shouldShowMeridiemBadge: function () {
    return !_this.hideMeridiemBadge;
  },

  getMeridiemSpriteKey: function (hour24) {
    return hour24 >= 12 ? "PMBadge" : "AMBadge";
  },

  attachMeridiemBadge: function (clockDisplay, hour24, badgeY) {
    if (!clockDisplay || !clockDisplay.face || !_this.shouldShowMeridiemBadge()) {
      return;
    }

    var spriteKey = _this.getMeridiemSpriteKey(hour24);

    var badge = _this.add.sprite(
      clockDisplay.centerX,
      badgeY,
      spriteKey
    );
    badge.anchor.setTo(0.5);
    badge.frame = 1;
    badge.scale.setTo(0.24, 0.24);
    badge.inputEnabled = true;
    badge.input.useHandCursor = true;
    badge.events.onInputDown.add(function () {
      _this.playClickSound();
    }, _this);
    clockDisplay.meridiemBadge = badge;
    _this.world.bringToTop(badge);
  },

  setAnalogClockTime: function (clock, hour24, minute) {
    var hour12 = hour24 % 12;
    if (hour12 === 0) {
      hour12 = 12;
    }

    var minuteAngle = minute * 6;
    var hourAngle = (hour12 * 30) + (minute * 0.5);

    clock.minuteHand.angle = minuteAngle - 90;
    clock.hourHand.angle = hourAngle - 90;
  },

  addDraggableAnalogClock: function (clockDisplay) {
    clockDisplay.hourHand.inputEnabled = true;
    clockDisplay.minuteHand.inputEnabled = true;
    clockDisplay.hourHand.input.useHandCursor = true;
    clockDisplay.minuteHand.input.useHandCursor = true;

    clockDisplay.minuteHand.events.onInputDown.add(function () {
      _this.activeAnalogClock = clockDisplay;
      _this.activeAnalogHand = "minute";
      clockDisplay.minuteHand.frame = 1;
    }, _this);

    clockDisplay.hourHand.events.onInputDown.add(function () {
      _this.activeAnalogClock = clockDisplay;
      _this.activeAnalogHand = "hour";
      clockDisplay.hourHand.frame = 1;
    }, _this);

    _this.world.bringToTop(clockDisplay.hourHand);
    _this.world.bringToTop(clockDisplay.minuteHand);
    _this.world.bringToTop(clockDisplay.redCircle);
  },

  updateAnalogAnswerFromPointer: function (pointerX, pointerY) {
    if (!_this.activeAnalogClock) {
      return;
    }

    var clock = _this.activeAnalogClock;
    var radians = Math.atan2(pointerY - clock.centerY, pointerX - clock.centerX);

    if (_this.activeAnalogHand === "hour") {
      clock.hourHand.rotation = radians;
      return;
    }

    if (_this.activeAnalogHand === "minute") {
      clock.minuteHand.rotation = radians;
    }
  },

  getClockAngleFromPointer: function (centerX, centerY, pointerX, pointerY) {
    var degrees = Math.atan2(pointerY - centerY, pointerX - centerX) * 180 / Math.PI;
    return (degrees + 90 + 360) % 360;
  },

  setAnalogAnswerClockTime: function (clock) {
    var hour12 = clock.answerHour12 || 12;
    var minute = clock.answerMinute || 0;
    var hourAngle = ((hour12 % 12) * 30) + (minute * 0.5);
    var minuteAngle = minute * 6;

    clock.hourHand.angle = hourAngle - 90;
    clock.minuteHand.angle = minuteAngle - 90;
  },

  getAnalogHandClockAngle: function (handSprite) {
    return (handSprite.angle + 90 + 360) % 360;
  },

  getClockAngleDiff: function (angleA, angleB) {
    var diff = Math.abs(angleA - angleB);
    return diff > 180 ? 360 - diff : diff;
  },

  getTimeAnswerClockDisplay: function () {
    if (_this.currentAnswerType === "endTime") {
      return _this.endClockDisplay;
    }

    return _this.startClockDisplay;
  },

  createDigitalClockDisplay: function (x, y, hour24, minute, clockScale, backgroundKey) {
    var clock = {};
    var timeString = _this.getTwoDigitValue(hour24) + _this.getTwoDigitValue(minute);

    clock.background = _this.createClockBackgroundSprite(x, y, backgroundKey || "DigitalClock");
    clock.background.scale.setTo(clockScale || 0.5);
    clock.digits = [];

    var digitLayout = _this.getDigitalDigitLayout(clock.background, 1.1);

    for (var i = 0; i < timeString.length; i++) {
      var digit = _this.add.sprite(
        digitLayout.positions[i],
        digitLayout.y,
        "DigitalNum"
      );
      digit.anchor.setTo(0.5);
      digit.scale.setTo(digitLayout.scaleX, digitLayout.scaleY);
      digit.frame = parseInt(timeString.charAt(i), 10);
      clock.digits.push(digit);
    }

    return clock;
  },

  createClockBackgroundSprite: function (x, y, key) {
    var sprite = _this.add.sprite(x, y, key);

    if (key === "AnalogClockAnim" || key === "ClockPink") {
      sprite.animations.add("clockPulse", _this.analogClockAnimFrames, 3, false);
    } else if (key === "DigitalClockAnim") {
      sprite.animations.add("clockPulse", _this.digitalClockAnimFrames, 3, false);
    } else if (_this.isGlowFrameClockKey(key)) {
      sprite.frame = 0;
    }

    return sprite;
  },

  isGlowFrameClockKey: function (key) {
    return key === "AnalogClock1" ||
      key === "PinkHeadedAnalogClock" ||
      key === "DigitalClock1" ||
      key === "DigitalClock2" ||
      key === "DigitalClock3";
  },

  getGlowFrameBlinkConfig: function (key) {
    if (key === "PinkHeadedAnalogClock") {
      return {
        onDuration: 520,
        offDuration: 180
      };
    }

    return {
      onDuration: 420,
      offDuration: 220
    };
  },

  showClockGlow: function (clockSprite, duration) {
    if (!clockSprite || !_this.isGlowFrameClockKey(clockSprite.key)) {
      return;
    }

    if (!clockSprite.baseScaleX) {
      clockSprite.baseScaleX = clockSprite.scale.x;
      clockSprite.baseScaleY = clockSprite.scale.y;
    }

    if (clockSprite.glowResetTimer) {
      _this.time.events.remove(clockSprite.glowResetTimer);
      clockSprite.glowResetTimer = null;
    }

    if (clockSprite.glowFrameTimer) {
      _this.time.events.remove(clockSprite.glowFrameTimer);
      clockSprite.glowFrameTimer = null;
    }

    clockSprite.frame = 1;
    clockSprite.alpha = 1;
    clockSprite.scale.setTo(clockSprite.baseScaleX, clockSprite.baseScaleY);
    var blinkConfig = _this.getGlowFrameBlinkConfig(clockSprite.key);
    var nextDelay = blinkConfig.onDuration;
    var toggleGlowFrame = function () {
      if (!clockSprite || clockSprite.alive === false) {
        return;
      }

      clockSprite.frame = clockSprite.frame === 0 ? 1 : 0;
      nextDelay = clockSprite.frame === 1 ? blinkConfig.onDuration : blinkConfig.offDuration;
      clockSprite.glowFrameTimer = _this.time.events.add(nextDelay, toggleGlowFrame);
    };
    clockSprite.glowFrameTimer = _this.time.events.add(nextDelay, toggleGlowFrame);

    clockSprite.glowResetTimer = _this.time.events.add(duration || 3000, function () {
      if (clockSprite && clockSprite.alive !== false) {
        if (clockSprite.glowFrameTimer) {
          _this.time.events.remove(clockSprite.glowFrameTimer);
          clockSprite.glowFrameTimer = null;
        }
        clockSprite.frame = 0;
        clockSprite.alpha = 1;
        clockSprite.scale.setTo(clockSprite.baseScaleX, clockSprite.baseScaleY);
        clockSprite.glowResetTimer = null;
      }
    });
  },

  playClockSpriteAnimation: function (sprite, glowDuration) {
    if (_this.isGlowFrameClockKey(sprite && sprite.key)) {
      _this.showClockGlow(sprite, glowDuration || 3000);
      return;
    }

    if (sprite && sprite.animations && sprite.animations.getAnimation("clockPulse")) {
      sprite.animations.play("clockPulse", 2, true);
      _this.flashClockSprite(sprite);

      _this.time.events.add(4000, function () {
        if (sprite && sprite.animations) {
          sprite.animations.stop("clockPulse", true);
          sprite.alpha = 1;
        }
      });
    }
  },

  flashClockSprite: function (sprite) {
    if (!sprite) {
      return;
    }

    sprite.alpha = 1;
    _this.add.tween(sprite)
      .to(
        { alpha: 0.35 },
        180,
        Phaser.Easing.Linear.None,
        true,
        0,
        7,
        true
      );
  },

  playClockDisplaySpriteAnimation: function (clockDisplay, glowDuration) {
    if (!clockDisplay) {
      return;
    }

    _this.playClockSpriteAnimation(clockDisplay.face, glowDuration);
    _this.playClockSpriteAnimation(clockDisplay.background, glowDuration);
  },

  centerDigitalClockDisplay: function (clockDisplay, centerX, layoutOverrides) {
    if (!clockDisplay || !clockDisplay.background) {
      return;
    }

    clockDisplay.background.x = centerX - (clockDisplay.background.width / 2);

    var digitLayout = _this.getDigitalDigitLayout(clockDisplay.background, 1.1, layoutOverrides);
    for (var i = 0; i < clockDisplay.digits.length; i++) {
      clockDisplay.digits[i].x = digitLayout.positions[i];
      clockDisplay.digits[i].y = digitLayout.y;
      clockDisplay.digits[i].scale.setTo(digitLayout.scaleX, digitLayout.scaleY);
    }

    _this.updateScrollableDigitalClockHitArea(clockDisplay.digits, digitLayout);
  },

  getTwoDigitValue: function (value) {
    return value < 10 ? "0" + value : "" + value;
  },

  getDigitalDigitLayout: function (clockSprite, baseDigitScale, layoutOverrides) {
    var scaleX = clockSprite.scale.x || 1;
    var scaleY = clockSprite.scale.y || scaleX;
    var digitScaleBoost = 1.12;
    var defaultDigitOffsetX = 0;
    var defaultDigitOffsetY = 0;
    var defaultDigitOffsetXs = null;

    // The animated digital clock background is slightly wider than the static art.
    // Nudge its digit columns so the sprite atlas sits centered in the display window.
    if (clockSprite.key === "DigitalClockAnim") {
      defaultDigitOffsetXs = [3, 3, 3, 3];
    }

    if (clockSprite.key === "AnswerClock") {
      return {
        positions: [
          clockSprite.x + (121 * scaleX),
          clockSprite.x + (227 * scaleX),
          clockSprite.x + (441 * scaleX),
          clockSprite.x + (550 * scaleX)
        ],
        y: clockSprite.y + (224 * scaleY),
        scaleX: (baseDigitScale * 2.25 * digitScaleBoost) * scaleX,
        scaleY: (baseDigitScale * 2.25 * digitScaleBoost) * scaleY,
        padX: 18 * scaleX,
        padY: 20 * scaleY
      };
    }

    if (clockSprite.key === "DigitalClock2") {
      return {
        positions: [
          clockSprite.x + (58 * scaleX),
          clockSprite.x + (115 * scaleX),
          clockSprite.x + (231 * scaleX),
          clockSprite.x + (290 * scaleX)
        ],
        y: clockSprite.y + (125 * scaleY),
        scaleX: (baseDigitScale * 1.2) * scaleX,
        scaleY: (baseDigitScale * 1.2) * scaleY,
        padX: 18 * scaleX,
        padY: 18 * scaleY
      };
    }

    if (clockSprite.key === "DigitalClock1") {
      return {
        positions: [
          clockSprite.x + (88 * scaleX),
          clockSprite.x + (131 * scaleX),
          clockSprite.x + (219 * scaleX),
          clockSprite.x + (263 * scaleX)
        ],
        y: clockSprite.y + (123 * scaleY),
        scaleX: (baseDigitScale * 0.96) * scaleX,
        scaleY: (baseDigitScale * 0.96) * scaleY,
        padX: 16 * scaleX,
        padY: 16 * scaleY
      };
    }

    if (clockSprite.key === "DigitalClock3") {
      return {
        positions: [
          clockSprite.x + (90 * scaleX),
          clockSprite.x + (134 * scaleX),
          clockSprite.x + (221 * scaleX),
          clockSprite.x + (266 * scaleX)
        ],
        y: clockSprite.y + (125 * scaleY),
        scaleX: (baseDigitScale * 0.96) * scaleX,
        scaleY: (baseDigitScale * 0.96) * scaleY,
        padX: 16 * scaleX,
        padY: 16 * scaleY
      };
    }

    var digitOffsetX = layoutOverrides && layoutOverrides.digitOffsetX;
    if (typeof digitOffsetX !== "number") {
      digitOffsetX = defaultDigitOffsetX;
    }

    var digitOffsetY = layoutOverrides && layoutOverrides.digitOffsetY;
    if (typeof digitOffsetY !== "number") {
      digitOffsetY = defaultDigitOffsetY;
    }

    var digitOffsetXs = layoutOverrides && layoutOverrides.digitOffsetXs;
    if (!digitOffsetXs) {
      digitOffsetXs = defaultDigitOffsetXs;
    }

    var slotOffsets = digitOffsetXs || [digitOffsetX, digitOffsetX, digitOffsetX, digitOffsetX];

    return {
      positions: [
        clockSprite.x + ((84 + slotOffsets[0]) * scaleX),
        clockSprite.x + ((126 + slotOffsets[1]) * scaleX),
        clockSprite.x + ((212 + slotOffsets[2]) * scaleX),
        clockSprite.x + ((254 + slotOffsets[3]) * scaleX)
      ],
      y: clockSprite.y + ((115 + digitOffsetY) * scaleY),
      scaleX: (baseDigitScale * 0.92 * digitScaleBoost) * scaleX,
      scaleY: (baseDigitScale * 0.92 * digitScaleBoost) * scaleY,
      padX: 15 * scaleX,
      padY: 15 * scaleY
    };
  },

  getAnswerHeaderLayout: function (clockSprite) {
    var digitLayout = _this.getDigitalDigitLayout(clockSprite, 1.1);

    return {
      hourX: (digitLayout.positions[0] + digitLayout.positions[1]) / 2,
      minuteX: (digitLayout.positions[2] + digitLayout.positions[3]) / 2
    };
  },

  addScrollableDigitalClock: function (clockSprite) {
    _this.digitalDigits = [];
    _this.snapSound = _this.add.audio("dragSound");
    var digitLayout = _this.getDigitalDigitLayout(clockSprite, 1.1);

    for (var i = 0; i < 4; i++) {
      var digit = _this.add.sprite(
        digitLayout.positions[i],
        digitLayout.y,
        "DigitalNum"
      );

      digit.anchor.setTo(0.5);
      digit.scale.setTo(digitLayout.scaleX, digitLayout.scaleY);
      digit.frame = 0;
      digit.lastPointerY = 0;
      digit.accumulatedDelta = 0;
      digit.lastChangeTime = 0;
      digit.inputEnabled = true;
      digit.input.useHandCursor = true;
      digit.events.onInputDown.add(function (targetDigit) {
        var py = _this.game.input.activePointer.y;
        _this.activeDigit = targetDigit;
        _this.activeDigit.pointerDownY = py;
        _this.activeDigit.lastPointerY = py;
        _this.activeDigit.accumulatedDelta = 0;
        _this.activeDigit.lastChangeTime = 0;
      }, _this);

      _this.digitalDigits.push(digit);
    }

    var firstDigit = _this.digitalDigits[0];
    var lastDigit = _this.digitalDigits[3];
    var zoneX = firstDigit.x - (firstDigit.width / 2) - digitLayout.padX;
    var zoneY = digitLayout.y - (firstDigit.height / 2) - digitLayout.padY;
    var zoneW = (lastDigit.x + (lastDigit.width / 2) + digitLayout.padX) - zoneX;
    var zoneH = firstDigit.height + digitLayout.padY * 2;

    _this.digitalClockOverlay = _this.add.graphics(0, 0);
    _this.digitalClockOverlay.inputEnabled = true;
    _this.digitalClockOverlay.input.useHandCursor = true;
    _this.updateScrollableDigitalClockHitArea(_this.digitalDigits, digitLayout);

    _this.digitalClockOverlay.events.onInputDown.add(function () {
      var px = _this.game.input.activePointer.x;
      var py = _this.game.input.activePointer.y;

      _this.activeDigit = _this.getDigitalDigitForPointerX(px);

      if (_this.activeDigit) {
        _this.activeDigit.pointerDownY = py;
        _this.activeDigit.lastPointerY = py;
        _this.activeDigit.accumulatedDelta = 0;
        _this.activeDigit.lastChangeTime = 0;
      }
    });

    _this.game.input.onUp.add(function () {
      if (_this.activeDigit) {
        var releasedDigit = _this.activeDigit;
        var movedDistance = Math.abs((_this.game.input.activePointer.y || 0) - (releasedDigit.pointerDownY || 0));
        if (movedDistance < 6) {
          var direction = _this.game.input.activePointer.y <= releasedDigit.y ? 1 : -1;
          _this.stepDigitalDigit(releasedDigit, direction);
        }
        _this.activeDigit.accumulatedDelta = 0;
        _this.activeDigit = null;
      }
    }, _this);

    if (!_this.digitalMoveCbBound) {
      _this.digitalMoveCallback = function (pointer) {
        _this.updateScrollableDigitalDigitFromPointer(pointer);
      };
      _this.game.input.addMoveCallback(_this.digitalMoveCallback, _this);
      _this.digitalMoveCbBound = true;
    }
  },

  getDigitalDigitForPointerX: function (pointerX) {
    var best = null;
    var bestDist = Infinity;

    for (var c = 0; c < _this.digitColumns.length; c++) {
      var col = _this.digitColumns[c];
      if (pointerX >= col.left && pointerX <= col.right) {
        return col.digit;
      }
    }

    for (var j = 0; j < _this.digitalDigits.length; j++) {
      var candidate = _this.digitalDigits[j];
      var dist = Math.abs(pointerX - candidate.x);
      if (dist < bestDist) {
        bestDist = dist;
        best = candidate;
      }
    }

    return best;
  },

  stepDigitalDigit: function (digit, direction) {
    if (!digit || !direction) {
      return;
    }

    if (direction > 0) {
      digit.frame = (digit.frame + 1) % 10;
    } else {
      digit.frame = (digit.frame + 9) % 10;
    }

    digit.accumulatedDelta = 0;
    digit.lastChangeTime = _this.game.time.now;
    if (_this.snapSound) {
      _this.snapSound.play();
    }
  },

  updateScrollableDigitalDigitFromPointer: function (pointer) {
    if (!_this.activeDigit || !pointer || !pointer.isDown) {
      return;
    }

    var now = _this.game.time.now;
    var pointerY = pointer.y;
    var digit = _this.activeDigit;
    var delta = pointerY - digit.lastPointerY;
    digit.lastPointerY = pointerY;
    digit.accumulatedDelta += delta;

    var STEP = 18;
    var COOLDOWN = 180;

    if ((now - digit.lastChangeTime) < COOLDOWN) {
      return;
    }

    if (digit.accumulatedDelta >= STEP) {
      _this.stepDigitalDigit(digit, -1);
    } else if (digit.accumulatedDelta <= -STEP) {
      _this.stepDigitalDigit(digit, 1);
    }
  },

  updateScrollableDigitalClockHitArea: function (digits, digitLayout) {
    if (!_this.digitalClockOverlay || !digits || !digits.length || !digitLayout) {
      return;
    }

    var firstDigit = digits[0];
    var lastDigit = digits[digits.length - 1];
    var zoneX = firstDigit.x - (firstDigit.width / 2) - digitLayout.padX;
    var zoneY = digitLayout.y - (firstDigit.height / 2) - digitLayout.padY;
    var zoneW = (lastDigit.x + (lastDigit.width / 2) + digitLayout.padX) - zoneX;
    var zoneH = firstDigit.height + digitLayout.padY * 2;

    _this.digitalClockOverlay.clear();
    _this.digitalClockOverlay.beginFill(0xffffff, 0.01);
    _this.digitalClockOverlay.drawRect(zoneX, zoneY, zoneW, zoneH);
    _this.digitalClockOverlay.endFill();
    _this.world.bringToTop(_this.digitalClockOverlay);

    for (var i = 0; i < digits.length; i++) {
      _this.world.bringToTop(digits[i]);
    }

    _this.digitColumns = digits.map(function (digit) {
      return {
        left: digit.x - (digit.width / 2) - digitLayout.padX / 2,
        right: digit.x + (digit.width / 2) + digitLayout.padX / 2,
        digit: digit
      };
    });
  },

  playCurrentPromptSequence: function () {
    if (!_this.currentRoundData) {
      return;
    }

    _this.stopCurrentPromptAudio();
    _this.setSpeakerButtonEnabled(false);
    _this.disableAnswerInput();

    _this.currentPromptAudios = _this.getPromptAudioSequence(_this.currentRoundData);

    if (!_this.currentPromptAudios.length) {
      _this.setSpeakerButtonEnabled(true);
      _this.enableAnswerInput();
      return;
    }

    _this.playPromptAudioAtIndex(0);
  },

  replayCurrentPromptSequence: function () {
    if (!_this.currentRoundData) {
      return;
    }

    _this.playCurrentPromptSequence();
  },

  getPromptAudioSequence: function (roundData) {
    var sequence = [];

    if (!roundData) {
      return sequence;
    }

    if (roundData.promptAudio && roundData.question2Type) {
      sequence = [
        roundData.promptAudio,
        _this.commonQuestionAudio
      ];
    } else if (roundData.promptAudio) {
      sequence = [roundData.promptAudio];
    } else {
      sequence = [
        roundData.startAudio,
        roundData.endAudio,
        _this.commonQuestionAudio,
      ];
    }

    return sequence.filter(function (audio, index) {
      if (!audio) {
        return false;
      }

      if (index === 0) {
        return true;
      }

      var previousAudio = sequence[index - 1];
      return !previousAudio || audio.src !== previousAudio.src;
    });
  },

  playPromptAudioAtIndex: function (index) {
    if (!_this.currentPromptAudios || index >= _this.currentPromptAudios.length) {
      _this.clearQuestionAudioWatchdog();
      _this.setSpeakerButtonEnabled(true);
      _this.enableAnswerInput();
      return;
    }

    var audio = _this.currentPromptAudios[index];
    if (!audio) {
      _this.playPromptAudioAtIndex(index + 1);
      return;
    }

    if (
      _this.currentAnswerType === "elapsed" &&
      (_this.currentQuestion === 1 || _this.currentQuestion === 2) &&
      audio === _this.commonQuestionAudio &&
      _this.elapsedEndGlowCompleteAt &&
      _this.time.now < _this.elapsedEndGlowCompleteAt
    ) {
      var waitTime = _this.elapsedEndGlowCompleteAt - _this.time.now;
      _this.currentAudioTimers.push(
        _this.time.events.add(waitTime, function () {
          _this.playPromptAudioAtIndex(index);
        })
      );
      return;
    }

    if (_this.currentAnswerType === "elapsed" && audio === _this.commonQuestionAudio) {
      _this.setElapsedAnswerVisibility(true);
    }

    var sequenceToken = ++_this.activeQuestionAudioSequenceToken;

    audio._elapsedSequenceHandler = function () {
      if (!_this.isCurrentQuestionAudioSequence(sequenceToken)) {
        return;
      }

      _this.clearQuestionAudioWatchdog();
      audio.removeEventListener("ended", audio._elapsedSequenceHandler);
      audio._elapsedSequenceHandler = null;
      _this.playPromptAudioAtIndex(index + 1);
    };

    audio.addEventListener("ended", audio._elapsedSequenceHandler);
    _this.startQuestionAudioWatchdog(audio, audio._elapsedSequenceHandler, sequenceToken);

    if (
      _this.syncElapsedStartClockWithAudio &&
      _this.currentQuestion === 1 &&
      _this.currentAnswerType === "elapsed" &&
      index === 0
    ) {
      if (audio._elapsedStartClockPlayingHandler) {
        audio.removeEventListener("playing", audio._elapsedStartClockPlayingHandler);
      }

      audio._elapsedStartClockPlayingHandler = function () {
        audio.removeEventListener("playing", audio._elapsedStartClockPlayingHandler);
        audio._elapsedStartClockPlayingHandler = null;
        _this.revealElapsedStartClock();
      };
      audio.addEventListener("playing", audio._elapsedStartClockPlayingHandler);
    }

    _this.playAudioClip(audio);
  },

  stopCurrentPromptAudio: function () {
    _this.isStoppingManagedAudio = true;
    _this.activeQuestionAudioSequenceToken++;
    _this.clearQuestionAudioWatchdog();
    _this.clearPendingAudioResume();

    for (var i = 0; i < _this.currentAudioTimers.length; i++) {
      _this.time.events.remove(_this.currentAudioTimers[i]);
    }
    _this.currentAudioTimers = [];

    for (var j = 0; j < _this.currentPromptAudios.length; j++) {
      if (_this.currentPromptAudios[j]._elapsedSequenceHandler) {
        _this.currentPromptAudios[j].removeEventListener(
          "ended",
          _this.currentPromptAudios[j]._elapsedSequenceHandler
        );
        _this.currentPromptAudios[j]._elapsedSequenceHandler = null;
      }
      if (_this.currentPromptAudios[j]._elapsedStartClockPlayingHandler) {
        _this.currentPromptAudios[j].removeEventListener(
          "playing",
          _this.currentPromptAudios[j]._elapsedStartClockPlayingHandler
        );
        _this.currentPromptAudios[j]._elapsedStartClockPlayingHandler = null;
      }
      _this.currentPromptAudios[j].pause();
      _this.currentPromptAudios[j].currentTime = 0;
    }
    _this.currentPromptAudios = [];
    _this.activeManagedAudio = null;
    _this.isStoppingManagedAudio = false;
    _this.setSpeakerButtonEnabled(true);
  },

  stopAllGameAudio: function () {
    _this.stopCurrentPromptAudio();
    _this.pendingAutoplayAudio = null;
    _this.pendingEffectAudio = null;
    _this.clearPendingAudioResume();
    _this.clearQ56Timers();
    _this.cleanupQ56Interactions();
    _this.stopQ56QuestionAudio();

    if (_this.displayTimerEvent) {
      _this.time.events.remove(_this.displayTimerEvent);
      _this.displayTimerEvent = null;
    }

    var audiosToStop = [
      _this.currentQuestionAudio,
      _this.Ask_Question5_1,
      _this.Ask_Question5_2,
      _this.commonQuestionAudio,
      _this.clickSound,
      _this.celebrationSound,
      _this.birdChirmSound,
      _this.counterCelebrationSound,
      _this.wrongans,
      _this.wrongSound,
      _this.framechange
    ];

    for (var i = 0; i < audiosToStop.length; i++) {
      if (audiosToStop[i]) {
        audiosToStop[i].pause();
        audiosToStop[i].currentTime = 0;
      }
    }

    if (_this.clockTick) {
      _this.clockTick.stop();
      _this.clockTick.loopFull(0);
      _this.clockTick = null;
    }
    if (_this.snapSound) {
      _this.snapSound.stop();
      _this.snapSound.destroy();
      _this.snapSound = null;
    }

    if (_this.game && _this.game.sound) {
      _this.game.sound.stopAll();
    }

    if (_this.tweens) {
      _this.tweens.removeAll();
    }
  },

  addQ56Timer: function (delay, callback) {
    var timer = _this.time.events.add(delay, callback, _this);
    _this.q56Timers.push(timer);
    return timer;
  },

  clearQ56Timers: function () {
    if (!_this.q56Timers) {
      _this.q56Timers = [];
      return;
    }

    for (var i = 0; i < _this.q56Timers.length; i++) {
      if (_this.q56Timers[i]) {
        _this.time.events.remove(_this.q56Timers[i]);
      }
    }
    _this.q56Timers = [];
  },

  clearQ56QuestionAudioHandlers: function () {
    if (!_this.q56QuestionAudioHandlers) {
      _this.q56QuestionAudioHandlers = [];
      return;
    }

    for (var i = 0; i < _this.q56QuestionAudioHandlers.length; i++) {
      var handlerEntry = _this.q56QuestionAudioHandlers[i];
      if (handlerEntry && handlerEntry.audio && handlerEntry.handler) {
        handlerEntry.audio.removeEventListener(handlerEntry.eventName, handlerEntry.handler);
      }
    }
    _this.q56QuestionAudioHandlers = [];
  },

  stopQ56QuestionAudio: function () {
    _this.isStoppingManagedAudio = true;
    _this.activeQuestionAudioSequenceToken++;
    _this.clearQuestionAudioWatchdog();
    _this.clearQ56QuestionAudioHandlers();
    _this.clearPendingAudioResume();

    if (_this.q56SecondAudioTimer) {
      _this.time.events.remove(_this.q56SecondAudioTimer);
      _this.q56SecondAudioTimer = null;
    }

    if (_this.Ask_Question5_1) {
      _this.Ask_Question5_1.pause();
      _this.Ask_Question5_1.currentTime = 0;
    }

    if (_this.Ask_Question5_2) {
      _this.Ask_Question5_2.pause();
      _this.Ask_Question5_2.currentTime = 0;
    }

    if (_this.currentQuestionAudio === _this.Ask_Question5_1 ||
      _this.currentQuestionAudio === _this.Ask_Question5_2) {
      _this.currentQuestionAudio = null;
    }
    if (_this.activeManagedAudio === _this.Ask_Question5_1 ||
      _this.activeManagedAudio === _this.Ask_Question5_2) {
      _this.activeManagedAudio = null;
    }
    _this.isStoppingManagedAudio = false;
  },

  playAudioClip: function (audio, skipReset) {
    if (!audio) {
      return;
    }

    if (audio.readyState < 2) {
      audio.load();
    }

    _this.clearPendingAudioResume();
    if (_this.activeManagedAudio && _this.activeManagedAudio !== audio) {
      _this.isStoppingManagedAudio = true;
      _this.activeManagedAudio.pause();
      _this.activeManagedAudio.currentTime = 0;
      _this.isStoppingManagedAudio = false;
    }
    if (!skipReset) {
      _this.isStoppingManagedAudio = true;
      audio.pause();
      audio.currentTime = 0;
      _this.isStoppingManagedAudio = false;
    }
    _this.activeManagedAudio = audio;
    _this.currentQuestionAudio = audio;

    var playPromise = audio.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function (error) {
        if (error && error.name === "NotAllowedError") {
          _this.pendingAutoplayAudio = audio;
          return;
        }

        if (!error || error.name !== "AbortError") {
          console.error(error);
        }
      });
    }
  },

  playEffectAudio: function (audio) {
    if (!audio) {
      return;
    }

    if (audio.readyState < 2) {
      audio.load();
    }

    audio.pause();
    audio.currentTime = 0;

    var playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function (error) {
        _this.pendingEffectAudio = audio;
        audio.load();
        if (!error || error.name !== "AbortError") {
          console.error(error);
        }
      });
    }
  },

  isCurrentQuestionAudioSequence: function (sequenceToken) {
    return sequenceToken === _this.activeQuestionAudioSequenceToken;
  },

  clearQuestionAudioWatchdog: function () {
    if (_this.currentQuestionAudioWatchdog) {
      _this.time.events.remove(_this.currentQuestionAudioWatchdog);
      _this.currentQuestionAudioWatchdog = null;
    }
  },

  startQuestionAudioWatchdog: function (audio, onComplete, sequenceToken) {
    _this.clearQuestionAudioWatchdog();

    var pollForCompletion = function () {
      if (!_this.isCurrentQuestionAudioSequence(sequenceToken)) {
        _this.clearQuestionAudioWatchdog();
        return;
      }

      if (!audio) {
        _this.clearQuestionAudioWatchdog();
        return;
      }

      var duration = audio.duration;
      var reachedEnd = audio.ended;

      if (!reachedEnd && duration && isFinite(duration)) {
        reachedEnd = audio.currentTime >= Math.max(duration - 0.15, 0);
      }

      if (reachedEnd) {
        _this.clearQuestionAudioWatchdog();
        if (typeof onComplete === "function") {
          onComplete();
        }
        return;
      }

      if (
        _this.activeManagedAudio === audio &&
        audio.paused &&
        !audio.ended &&
        audio.currentTime > 0
      ) {
        _this.queuePendingAutoplayAudio(audio, 150);
      }

      _this.currentQuestionAudioWatchdog = _this.time.events.add(250, pollForCompletion, _this);
    };

    _this.currentQuestionAudioWatchdog = _this.time.events.add(250, pollForCompletion, _this);
  },

  playClickSound: function () {
    _this.playEffectAudio(_this.clickSound);
  },

  playCorrectClockSound: function (audio, onStop) {
    if (!audio) {
      if (onStop) {
        onStop();
      }
      return null;
    }

    if (audio._correctClockSoundEndedHandler) {
      audio.removeEventListener("ended", audio._correctClockSoundEndedHandler);
      audio._correctClockSoundEndedHandler = null;
    }

    if (onStop) {
      audio._correctClockSoundEndedHandler = function () {
        audio.removeEventListener("ended", audio._correctClockSoundEndedHandler);
        audio._correctClockSoundEndedHandler = null;
        onStop();
      };
      audio.addEventListener("ended", audio._correctClockSoundEndedHandler);
    }

    _this.playEffectAudio(audio);
    return audio;
  },

  setAnswerBlockVisibility: function (visible) {
    var shouldHideAnswerClock = _this.currentAnswerType === "elapsed";

    if (_this.answerClock) {
      _this.answerClock.visible = visible;
    }
    if (_this.question34ElapsedClockDisplay) {
      _this.hideQuestion34ElapsedClockDisplay();
      if (visible) {
        if (_this.question34ElapsedClockDisplay.background) {
          _this.question34ElapsedClockDisplay.background.visible = true;
        }
        if (_this.question34ElapsedClockDisplay.digits && _this.question34ElapsedClockDisplay.digits.length) {
          for (var q = 0; q < _this.question34ElapsedClockDisplay.digits.length; q++) {
            if (_this.question34ElapsedClockDisplay.digits[q]) {
              _this.question34ElapsedClockDisplay.digits[q].visible = true;
            }
          }
        }
      }
    }
    if (_this.rightbtn) {
      _this.rightbtn.visible = visible;
    }
    if (_this.digitalClockOverlay) {
      _this.digitalClockOverlay.visible = visible;
    }
    if (_this.answerTitleHour) {
      _this.answerTitleHour.visible = visible;
    }
    if (_this.answerTitleMin) {
      _this.answerTitleMin.visible = visible;
    }
    if (_this.startAMButton) {
      _this.startAMButton.visible = visible;
    }
    if (_this.startPMButton) {
      _this.startPMButton.visible = visible;
    }
    if (!shouldHideAnswerClock) {
      if (_this.startClockDisplay) {
        _this.setClockDisplayVisibility(_this.startClockDisplay, true);
      }
      if (_this.endClockDisplay) {
        _this.setClockDisplayVisibility(_this.endClockDisplay, true);
      }
      if (_this.startLabel) {
        _this.startLabel.visible = true;
      }
      if (_this.endLabel) {
        _this.endLabel.visible = true;
      }
    }
    if (shouldHideAnswerClock) {
      for (var i = 0; i < _this.digitalDigits.length; i++) {
        if (_this.digitalDigits[i]) {
          _this.digitalDigits[i].visible = visible;
        }
      }
    }
  },

  showAnswerFeedbackAnimation: function (isCorrect, onComplete, options) {
    options = options || {};
    var key = isCorrect ? "RightAnswerAnim" : "WrongAnswerAnim";
    var frames = isCorrect ? _this.rightAnswerAnimFrames : _this.wrongAnswerAnimFrames;
    var repeatedFrames = frames.concat(frames);
    var feedbackDropY = 80;
    var question34ExtraDropY = 75;
    var question3ExtraDropY = 24;
    var question4ExtraDropY = 24;
    var y = _this.world.centerY ;

    if (_this.answerClock) {
      y = _this.answerClock.y + (_this.answerClock.height / 2) - 40;
    } else {
      var answerClockDisplay = _this.getTimeAnswerClockDisplay();
      if (answerClockDisplay && answerClockDisplay.background) {
        y = answerClockDisplay.background.y + (answerClockDisplay.background.height / 2) - 40;
      } else if (answerClockDisplay && answerClockDisplay.face) {
        y = answerClockDisplay.face.y + (answerClockDisplay.face.height / 2) - 40;
      }
    }
    y += feedbackDropY;
    if (_this.currentQuestion === 3 || _this.currentQuestion === 4) {
      y += question34ExtraDropY;
    }
    if (_this.currentQuestion === 3) {
      y += question3ExtraDropY;
    }
    if (_this.currentQuestion === 4) {
      y += question4ExtraDropY;
    }

    _this.safeDestroy(_this.answerFeedbackSprite);
    _this.answerFeedbackSprite = _this.add.sprite(_this.world.centerX, y, key);
    _this.answerFeedbackSprite.anchor.setTo(0.5);
    _this.answerFeedbackSprite.scale.setTo(0.45);

    var feedbackAnim = _this.answerFeedbackSprite.animations.add("play", repeatedFrames, 10, false);
    feedbackAnim.onComplete.addOnce(function () {
      if (!options.keepVisibleOnComplete) {
        _this.safeDestroy(_this.answerFeedbackSprite);
        _this.answerFeedbackSprite = null;
      }
      if (onComplete) {
        onComplete();
      }
    });
    feedbackAnim.play();
  },

  handleCorrectAnswer: function () {
    _this.stopCurrentPromptAudio();
    if (_this.currentAnswerType === "elapsed") {
      _this.setAnswerBlockVisibility(false);
    } else {
      _this.hideQuestion34ElapsedClockDisplay();
      if (_this.rightbtn) {
        _this.rightbtn.visible = false;
      }
      if (_this.startAMButton) {
        _this.startAMButton.visible = false;
      }
      if (_this.startPMButton) {
        _this.startPMButton.visible = false;
      }
      if (_this.startClockDisplay) {
        _this.setClockDisplayVisibility(_this.startClockDisplay, true);
      }
      if (_this.endClockDisplay) {
        _this.setClockDisplayVisibility(_this.endClockDisplay, true);
      }
      if (_this.startLabel) {
        _this.startLabel.visible = true;
      }
      if (_this.endLabel) {
        _this.endLabel.visible = true;
      }
    }
    var finishCorrectAnswerFlow = function () {
      _this.playEffectAudio(_this.celebrationSound);
      _this.correctAns();
    };

    if (_this.currentClockMode === "analog") {
      _this.playCorrectClockSound(_this.birdChirmSound);
    }

    _this.showAnswerFeedbackAnimation(true, function () {
      if (_this.currentClockMode === "analog") {
        finishCorrectAnswerFlow();
        return;
      }

      finishCorrectAnswerFlow();
    }, {
      keepVisibleOnComplete: _this.currentQuestion >= 1 && _this.currentQuestion <= 4
    });
  },

  checkElapsedAnswer: function (target) {
    _this.noofAttempts++;
    _this.playClickSound();
    _this.rightbtn.frame = 1;

    var userHours = _this.digitalDigits[0].frame * 10 + _this.digitalDigits[1].frame;
    var userMinutes = _this.digitalDigits[2].frame * 10 + _this.digitalDigits[3].frame;
    var expectedHours = Math.floor(_this.currentRoundData.elapsedMinutes / 60);
    var expectedMinutes = _this.currentRoundData.elapsedMinutes % 60;

    if (userHours === expectedHours && userMinutes === expectedMinutes) {
      target.events.onInputDown.removeAll();
      _this.disableAnswerInput();
      _this.showElapsedSuccessAnim();
      _this.handleCorrectAnswer();
       //for api
            //edited for baseurl apk
            
            telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //..............

            console.log(_this.noofAttempts, "_this.noofAttempts.................");
            console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
            console.log(_this.sceneCount, "_this.sceneCount.................");
            console.log(_this.questionid, "_this.questionid.................");
    } else {
      _this.wrongAns();
    }
  },

  checkStartTimeAnswer: function (target) {
    _this.noofAttempts++;
    _this.playClickSound();
    _this.rightbtn.frame = 1;

    var isCorrect = false;
    var answerClockDisplay = _this.getTimeAnswerClockDisplay();
    var expectedHour24 =
      _this.currentAnswerType === "endTime" ? _this.currentRoundData.endHour24 : _this.currentRoundData.startHour24;
    var expectedMinute =
      _this.currentAnswerType === "endTime" ? _this.currentRoundData.endMinute : _this.currentRoundData.startMinute;

    if (_this.currentClockMode === "analog") {
      var expectedHour12 = expectedHour24 % 12;
      if (expectedHour12 === 0) {
        expectedHour12 = 12;
      }
      var expectedMinuteAngle = expectedMinute * 6;
      var expectedHourAngle =
        (expectedHour12 % 12) * 30 + expectedMinute * 0.5;
      var userMinuteAngle = _this.getAnalogHandClockAngle(answerClockDisplay.minuteHand);
      var userHourAngle = _this.getAnalogHandClockAngle(answerClockDisplay.hourHand);
      var userMinute = Math.round(userMinuteAngle / 6);
      if (userMinute === 60) {
        userMinute = 0;
      }
      var expectedMeridiem = expectedHour24 < 12 ? "AM" : "PM";
      var minuteDiff = Math.abs(userMinute - expectedMinute);
      if (minuteDiff > 30) {
        minuteDiff = 60 - minuteDiff;
      }
      var hourDiff = _this.getClockAngleDiff(userHourAngle, expectedHourAngle);

      isCorrect =
        minuteDiff <= 3 &&
        hourDiff <= 18 &&
        _this.getClockAngleDiff(userMinuteAngle, expectedMinuteAngle) <= 18 &&
        _this.selectedStartMeridiem === expectedMeridiem;
    } else {
      var userHours = _this.digitalDigits[0].frame * 10 + _this.digitalDigits[1].frame;
      var userMinutes = _this.digitalDigits[2].frame * 10 + _this.digitalDigits[3].frame;

      isCorrect =
        userHours === expectedHour24 &&
        userMinutes === expectedMinute;
    }

    if (isCorrect) {
      target.events.onInputDown.removeAll();
      _this.disableAnswerInput();
      _this.showStartTimeSuccessAnim();
      _this.handleCorrectAnswer();
       //for api
            //edited for baseurl apk
            
            telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //..............

            console.log(_this.noofAttempts, "_this.noofAttempts.................");
            console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
            console.log(_this.sceneCount, "_this.sceneCount.................");
            console.log(_this.questionid, "_this.questionid.................");
    } else {
      _this.wrongAns();
    }
  },

  disableAnswerInput: function () {
    var answerClockDisplay = _this.getTimeAnswerClockDisplay();
    if (_this.rightbtn) {
      _this.rightbtn.inputEnabled = false;
    }

    if (_this.digitalClockOverlay) {
      _this.digitalClockOverlay.inputEnabled = false;
    }

    if (answerClockDisplay && answerClockDisplay.inputOverlay) {
      answerClockDisplay.inputOverlay.inputEnabled = false;
    }
    if (answerClockDisplay && answerClockDisplay.hourHand) {
      answerClockDisplay.hourHand.inputEnabled = false;
    }
    if (answerClockDisplay && answerClockDisplay.minuteHand) {
      answerClockDisplay.minuteHand.inputEnabled = false;
    }
    if (
      (_this.currentAnswerType === "startTime" || _this.currentAnswerType === "endTime") &&
      _this.currentClockMode === "analog" &&
      _this.startAMButton
    ) {
      _this.startAMButton.inputEnabled = false;
    }
    if (
      (_this.currentAnswerType === "startTime" || _this.currentAnswerType === "endTime") &&
      _this.currentClockMode === "analog" &&
      _this.startPMButton
    ) {
      _this.startPMButton.inputEnabled = false;
    }
    for (var i = 0; i < _this.digitalDigits.length; i++) {
      if (_this.digitalDigits[i]) {
        _this.digitalDigits[i].inputEnabled = false;
      }
    }

    _this.activeDigit = null;
    _this.activeAnalogClock = null;
    _this.activeAnalogHand = null;
  },

  enableAnswerInput: function () {
    var answerClockDisplay = _this.getTimeAnswerClockDisplay();
    if (_this.rightbtn) {
      _this.rightbtn.inputEnabled = true;
      _this.rightbtn.input.useHandCursor = true;
    }

    if (_this.digitalClockOverlay) {
      _this.digitalClockOverlay.inputEnabled = true;
      _this.digitalClockOverlay.input.useHandCursor = true;
    }

    if (answerClockDisplay && answerClockDisplay.inputOverlay) {
      answerClockDisplay.inputOverlay.inputEnabled = true;
      answerClockDisplay.inputOverlay.input.useHandCursor = true;
    }
    if (answerClockDisplay && answerClockDisplay.hourHand) {
      answerClockDisplay.hourHand.inputEnabled = true;
      answerClockDisplay.hourHand.input.useHandCursor = true;
    }
    if (answerClockDisplay && answerClockDisplay.minuteHand) {
      answerClockDisplay.minuteHand.inputEnabled = true;
      answerClockDisplay.minuteHand.input.useHandCursor = true;
    }
    if (
      (_this.currentAnswerType === "startTime" || _this.currentAnswerType === "endTime") &&
      _this.currentClockMode === "analog" &&
      _this.startAMButton
    ) {
      _this.startAMButton.inputEnabled = true;
      _this.startAMButton.input.useHandCursor = true;
    }
    if (
      (_this.currentAnswerType === "startTime" || _this.currentAnswerType === "endTime") &&
      _this.currentClockMode === "analog" &&
      _this.startPMButton
    ) {
      _this.startPMButton.inputEnabled = true;
      _this.startPMButton.input.useHandCursor = true;
    }
    for (var i = 0; i < _this.digitalDigits.length; i++) {
      if (_this.digitalDigits[i]) {
        _this.digitalDigits[i].inputEnabled = true;
        _this.digitalDigits[i].input.useHandCursor = true;
      }
    }

  },

  pulseSpriteCollection: function (sprites, centerX, centerY, scaleFactor, duration) {
    if (!sprites || !sprites.length) {
      return;
    }

    for (var i = 0; i < sprites.length; i++) {
      var sprite = sprites[i];
      if (!sprite) {
        continue;
      }

      var baseScaleX = sprite.scale.x;
      var baseScaleY = sprite.scale.y;
      var baseX = sprite.x;
      var baseY = sprite.y;

      _this.add.tween(sprite.scale)
        .to(
          { x: baseScaleX * scaleFactor, y: baseScaleY * scaleFactor },
          duration,
          Phaser.Easing.Quadratic.Out,
          true,
          0,
          1,
          true
        );

      _this.add.tween(sprite)
        .to(
          {
            x: centerX + ((baseX - centerX) * scaleFactor),
            y: centerY + ((baseY - centerY) * scaleFactor)
          },
          duration,
          Phaser.Easing.Quadratic.Out,
          true,
          0,
          1,
          true
        );
    }
  },

  pulseAnalogClockDisplay: function (clockDisplay, scaleFactor, duration) {
    if (!clockDisplay || !clockDisplay.face) {
      return;
    }

    _this.pulseSpriteCollection(
      [
        clockDisplay.face,
        clockDisplay.hourHand,
        clockDisplay.minuteHand,
        clockDisplay.redCircle,
        clockDisplay.meridiemBadge
      ],
      clockDisplay.centerX,
      clockDisplay.centerY,
      scaleFactor,
      duration
    );
  },

  pulseDigitalClockDisplay: function (clockDisplay, scaleFactor, duration) {
    if (!clockDisplay || !clockDisplay.background) {
      return;
    }

    var sprites = [clockDisplay.background];
    if (clockDisplay.digits && clockDisplay.digits.length) {
      sprites = sprites.concat(clockDisplay.digits);
    }

    _this.pulseSpriteCollection(
      sprites,
      clockDisplay.background.x + (clockDisplay.background.width / 2),
      clockDisplay.background.y + (clockDisplay.background.height / 2),
      scaleFactor,
      duration
    );
  },

  shakeDigitalClockDisplay: function (clockDisplay) {
    if (!clockDisplay || !clockDisplay.background) {
      return;
    }

    var sprites = [clockDisplay.background];
    if (clockDisplay.digits && clockDisplay.digits.length) {
      sprites = sprites.concat(clockDisplay.digits);
    }

    _this.shakeObjects(sprites);
  },

  showElapsedSuccessAnim: function () {
    _this.playClockDisplaySpriteAnimation(_this.startClockDisplay);
    _this.playClockDisplaySpriteAnimation(_this.endClockDisplay);
    _this.playClockSpriteAnimation(_this.answerClock);
    _this.showClockGlow(_this.answerClock, 3000);

    _this.addGlowToSprite(_this.activityImage);
  },

  showStartTimeSuccessAnim: function () {
    _this.playClockDisplaySpriteAnimation(_this.startClockDisplay);
    _this.playClockDisplaySpriteAnimation(_this.endClockDisplay);

    _this.addGlowToSprite(_this.activityImage);
  },

  playStarShineAndThen: function (star, onComplete) {
    if (!star) {
      if (onComplete) {
        onComplete();
      }
      return;
    }

    var shineAnim = star.animations.getAnimation("shine");
    if (!shineAnim) {
      shineAnim = star.animations.add("shine");
    }

    shineAnim.onComplete.removeAll();
    shineAnim.onComplete.addOnce(function () {
      if (onComplete) {
        onComplete();
      }
    });
    shineAnim.play(24, false);
  },

  correctAns: function () {
    _this.correctAnswers++;

    var star = _this.starsGroup.getChildAt(_this.correctAnswers - 1);
    _this.currentQuestion++;
    _this.playStarShineAndThen(star, function () {
      _this.safeDestroy(_this.answerFeedbackSprite);
      _this.answerFeedbackSprite = null;
      _this.clearScreen();

      _this.time.events.add(1000, function () {
        if (_this.currentQuestion <= _this.totalQuestions) {
          _this.startMiniGame();
        } else {
          //_this.state.start("Time_MT5_2_G5Score", _this.correctAnswers);
          _this.state.start('score', true, false, gameID, _this.microConcepts);
        }
      });
    });
  },

  wrongAns: function () {
    _this.stopCurrentPromptAudio();
    _this.playEffectAudio(_this.wrongans);
    _this.rightbtn.frame = 0;
    _this.disableAnswerInput();
    _this.setAnswerBlockVisibility(false);
    _this.showAnswerFeedbackAnimation(false, function () {
      _this.setAnswerBlockVisibility(true);
      _this.enableAnswerInput();
      if (_this.rightbtn) {
        _this.rightbtn.frame = 0;
      }
    });
  },

  shakeObjects: function (objects) {
    objects.forEach(function (obj) {
      if (!obj) {
        return;
      }
      _this.add.tween(obj)
        .to(
          { x: obj.x + 12 },
          42,
          Phaser.Easing.Sinusoidal.InOut,
          true,
          0,
          5,
          true
        );
    });
  },

  safeDestroy: function (target) {
    if (target && typeof target.destroy === "function") {
      target.destroy();
    }
  },

  safeBringToTop: function (target) {
    if (target && target.parent) {
      _this.world.bringToTop(target);
    }
  },

  addGlowToSprite: function (target) {
    if (!target || !target.parent) {
      return;
    }

    if (_this.glowTimer) {
      _this.time.events.remove(_this.glowTimer);
      _this.glowTimer = null;
    }

    _this.safeDestroy(_this.glow);

    _this.glow = _this.add.sprite(target.x, target.y, "glow2");
    _this.glow.anchor.setTo(0.5);
    _this.glow.width = 272;
    _this.glow.height = 212;
    _this.glow.alpha = 0.8;

    var parent = target.parent;
    if (parent && typeof parent.getChildIndex === "function") {
      var targetIndex = parent.getChildIndex(target);
      parent.setChildIndex(_this.glow, Math.max(0, targetIndex));
      parent.setChildIndex(target, Math.min(parent.children.length - 1, targetIndex + 1));
    }

    _this.glowTimer = _this.time.events.loop(250, function () {
      if (_this.glow) {
        _this.glow.alpha = _this.glow.alpha === 0.8 ? 1 : 0.8;
      }
    });
  },

  clearScreen: function () {
    _this.stopCurrentPromptAudio();
    _this.activeDigit = null;
    _this.activeAnalogClock = null;
    _this.activeAnalogHand = null;
    _this.selectedStartMeridiem = null;
    _this.hideMeridiemBadge = false;
    _this.elapsedEndGlowCompleteAt = 0;

    if (_this.elapsedStartClockRevealTimer) {
      _this.time.events.remove(_this.elapsedStartClockRevealTimer);
      _this.elapsedStartClockRevealTimer = null;
    }

    if (_this.elapsedEndClockRevealTimer) {
      _this.time.events.remove(_this.elapsedEndClockRevealTimer);
      _this.elapsedEndClockRevealTimer = null;
    }
    if (_this.elapsedAnswerRevealTimer) {
      _this.time.events.remove(_this.elapsedAnswerRevealTimer);
      _this.elapsedAnswerRevealTimer = null;
    }

    var destroyList = [
      "leftPanel",
      "centerPanel",
      "rightPanel",
      "activityImage",
      "question3ElapsedLabel",
      "startLabel",
      "endLabel",
      "answerTitleHour",
      "answerTitleMin",
      "answerClock",
      "answerFeedbackSprite",
      "rightbtn",
      "glow",
      "startAMButton",
      "startPMButton",
    ];

    for (var i = 0; i < destroyList.length; i++) {
      if (_this[destroyList[i]]) {
        _this[destroyList[i]].destroy();
        _this[destroyList[i]] = null;
      }
    }

    _this.destroyClockDisplay(_this.startClockDisplay);
    _this.destroyClockDisplay(_this.endClockDisplay);
    _this.destroyClockDisplay(_this.question34ElapsedClockDisplay);
    _this.startClockDisplay = null;
    _this.endClockDisplay = null;
    _this.question34ElapsedClockDisplay = null;

    for (var j = 0; j < _this.digitalDigits.length; j++) {
      if (_this.digitalDigits[j]) {
        _this.digitalDigits[j].destroy();
      }
    }
    _this.digitalDigits = [];
    _this.digitColumns = null;

    if (_this.digitalClockOverlay) {
      _this.digitalClockOverlay.destroy();
      _this.digitalClockOverlay = null;
    }

    if (_this.glowTimer) {
      _this.time.events.remove(_this.glowTimer);
      _this.glowTimer = null;
    }

    if (_this.snapSound) {
      _this.snapSound.destroy();
      _this.snapSound = null;
    }
  },

  destroyClockDisplay: function (clockDisplay) {
    if (!clockDisplay) {
      return;
    }

    if (clockDisplay.face) {
      clockDisplay.face.destroy();
    }
    if (clockDisplay.hourHand) {
      clockDisplay.hourHand.destroy();
    }
    if (clockDisplay.minuteHand) {
      clockDisplay.minuteHand.destroy();
    }
    if (clockDisplay.redCircle) {
      clockDisplay.redCircle.destroy();
    }
    if (clockDisplay.inputOverlay) {
      clockDisplay.inputOverlay.destroy();
    }
    if (clockDisplay.meridiemBadge) {
      clockDisplay.meridiemBadge.destroy();
    }
    if (clockDisplay.background) {
      clockDisplay.background.destroy();
    }
    if (clockDisplay.digits) {
      for (var i = 0; i < clockDisplay.digits.length; i++) {
        clockDisplay.digits[i].destroy();
      }
    }
  },

  shuffleArray: function (array) {
    for (var i = array.length - 1; i > 0; i--) {
      var randomIndex = _this.rnd.integerInRange(0, i);
      var temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  },

  getRoundIdentity: function (round) {
    if (!round) {
      return "";
    }

    return [
      round.imageKey || "",
      round.startHour24,
      round.startMinute,
      round.endHour24,
      round.endMinute,
      round.question2Type || ""
    ].join("|");
  },

  pickRandomRound: function (rounds, memoryKey) {
    if (!rounds || !rounds.length) {
      return null;
    }

    var selectedRound = rounds[_this.rnd.integerInRange(0, rounds.length - 1)];
    if (rounds.length === 1) {
      _this.lastUsedPromptRounds[memoryKey] = _this.getRoundIdentity(selectedRound);
      return selectedRound;
    }

    var lastRoundId = _this.lastUsedPromptRounds[memoryKey];
    var attempts = 0;

    while (attempts < 10 && _this.getRoundIdentity(selectedRound) === lastRoundId) {
      selectedRound = rounds[_this.rnd.integerInRange(0, rounds.length - 1)];
      attempts++;
    }

    _this.lastUsedPromptRounds[memoryKey] = _this.getRoundIdentity(selectedRound);
    return selectedRound;
  },

  update: function () {
    if (_this.activeAnalogClock) {
      if (!_this.game.input.activePointer.isDown) {
        if (_this.activeAnalogClock.hourHand) {
          _this.activeAnalogClock.hourHand.frame = 0;
        }
        if (_this.activeAnalogClock.minuteHand) {
          _this.activeAnalogClock.minuteHand.frame = 0;
        }
        _this.activeAnalogClock = null;
        _this.activeAnalogHand = null;
      } else {
        _this.updateAnalogAnswerFromPointer(
          _this.game.input.activePointer.x,
          _this.game.input.activePointer.y
        );
      }
      return;
    }

    if (_this.activeDigit) {
      if (!_this.game.input.activePointer.isDown) {
        _this.activeDigit.accumulatedDelta = 0;
        _this.activeDigit = null;
        return;
      }

      _this.updateScrollableDigitalDigitFromPointer(_this.game.input.activePointer);
    }
  },
  // QUesion 5 and 6 functions 


  formatTwoDigits: function (value) {
    return (value < 10 ? "0" : "") + value;
  },

  formatMinutesSeconds: function (minute, second) {
    return this.formatTwoDigits(minute) + ":" + this.formatTwoDigits(second);
  },

  formatHoursMinutesSeconds: function (hour, minute, second) {
    return this.formatTwoDigits(hour) + ":" + this.formatTwoDigits(minute) + ":" + this.formatTwoDigits(second);
  },

  showClockSuccessAnim: function () {


    _this.clockGroup = _this.add.group();

    _this.clockGroup.add(_this.analogClock);
    _this.clockGroup.add(_this.hourHandSprite);
    _this.clockGroup.add(_this.minuteHandSprite);
    _this.clockGroup.add(_this.redCircle);

    _this.add.tween(_this.clockGroup.scale)
      .to({ x: 1.04, y: 1.04 }, 300, Phaser.Easing.Quadratic.Out, true, 0, 1, true);

  },

  shakeObjects: function (objects) {
    objects.forEach(function (obj) {
      _this.add.tween(obj)
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

    });

    _this.pm.events.onInputDown.add(function () {

      _this.selectedAMPM = "PM";
      _this.clickSound.pause();
      _this.clickSound.currentTime = 0;
      _this.clickSound.play();

      _this.pm.frame = 1;
      _this.am.frame = 0;

    });

  },

  correctAns5_6: function () {


    _this.currentQuestion++;

    _this.time.events.add(1500, function () {

      if (_this.currentQuestion <= _this.totalQuestions) {
        _this.clearScreenUpdated();
      }
      else {
        _this.state.start("Time_MT5_2_G5Score", _this.correctAnswers);
      }
    });


    _this.time.events.add(2000, function () {
      if (_this.currentQuestion <= _this.totalQuestions) {

        _this.startMiniGame();
      } else {
        _this.state.start("Time_MT5_2_G5Score", _this.correctAnswers);
      }
    });
  },

  clearScreenUpdated: function () {
    // Q5/Q6 cleanup
    _this.stopQ56QuestionAudio();
    if (_this.clockTick) {
      _this.clockTick.stop();
      _this.clockTick.destroy();
      _this.clockTick = null;
    }
    _this.clearQ56Timers();
    _this.cleanupQ56Interactions();
    _this.destroyQ56SceneObjects();

    // Explicit null reset for transient Q56 references
    _this.q56Map1 = null;
    _this.q56Map = null;
    _this.q56LocationIcon = null;
    _this.q56CountryMapLabel = null;
    _this.IndiaLabeltxt = null;
    _this.q56Clock1 = null;
    _this.q56Clock2 = null;
    _this.indiaName = null;
    _this.countryName = null;
    _this.q56IndiaFlag = null;
    _this.q56DynamicFlag = null;
    _this.q56IndiaCountryText = null;
    _this.q56DynamicCountryText = null;
    _this.q56IndiaTime = null;
    _this.q56IndiaLabel = null;
    _this.q56DiffBox = null;
    _this.q56DiffText = null;
    _this.q56RightLabel = null;
    _this.q56RightBtn = null;
    _this.q56LeftHourHand = null;
    _this.q56LeftMinuteHand = null;
    _this.q56RightHourHand = null;
    _this.q56RightMinuteHand = null;
    _this.q56LeftCenterCircle = null;
    _this.q56RightCenterCircle = null;
    _this.q56C1Center = null;
    _this.q56C2Center = null;
    _this.q56IndiaHourHandSprite = null;
    _this.q56IndiaMinuteHandSprite = null;
    _this.q56AnswerHourHand = null;
    _this.q56AnswerMinuteHand = null;
    _this.q56AnswerCenterCircle = null;
    _this.q56AnswerCenter = null;
    _this.q56AnswerClock = null;
    _this.q56IndiaClockConfig = null;
    _this.q56CountryClockConfig = null;
    _this.q56CurrentQuestion = null;
  },

  startQ56SecondAudioFlow: function () {
    _this.clearQ56QuestionAudioHandlers();
    var sequenceToken = ++_this.activeQuestionAudioSequenceToken;

    var firstAudioEndedHandler = function () {
      if (!_this.isCurrentQuestionAudioSequence(sequenceToken)) {
        return;
      }

      _this.clearQuestionAudioWatchdog();
      _this.clearQ56QuestionAudioHandlers();
      _this.currentQuestionAudio = _this.Ask_Question5_2;
      _this.q56Clock21.animations.add('glow2', [0, 1], 3, true);
      _this.q56Clock21.animations.play('glow2')

      // _this.q56Clock1.animations.add('glow', [0, 1], 3, true);
      //     _this.q56Clock1.animations.play('glow');

      var secondAudioEndedHandler = function () {
        if (!_this.isCurrentQuestionAudioSequence(sequenceToken)) {
          return;
        }

        _this.clearQuestionAudioWatchdog();
        _this.clearQ56QuestionAudioHandlers();
        _this.setSpeakerButtonEnabled(true);

        if (_this.snapSound) {
          _this.snapSound.play();
        } else {
          _this.playEffectAudio(_this.framechange);
        }
        _this.q56Map.frame = 2;

        //set country
        _this.countryName = _this.add.sprite(_this.q56CountryHeaderX, _this.q56CountryHeaderY, 'LightBlueBox');
        _this.q56DynamicFlag = _this.add.sprite(_this.countryName.x - 70, _this.countryName.y, _this.q56Country.flagKey);
        // _this.q56DynamicFlag.scale.setTo(0.42);
        _this.q56DynamicCountryText = _this.add.text(_this.countryName.x + 160, _this.countryName.y + 150, _this.q56Country.name, {
          font: "22px Arial",
          fill: "#000000",
          fontWeight: "bold"
        });
        _this.q56DynamicCountryText.anchor.setTo(0.5);
        _this.q56Group.add(_this.countryName);
        _this.q56Group.add(_this.q56DynamicFlag);
        _this.q56Group.add(_this.q56DynamicCountryText);

        _this.q56RightBtn.inputEnabled = true;
        _this.q56RightBtn.input.useHandCursor = true;
        _this.q56RightBtn.events.onInputDown.add(_this.checkAnswerQ56, _this);

        _this.addQ56Timer(800, function () {
          _this.q56Clock21.animations.stop('glow2');
          _this.q56Clock21.frame = 0;
          
        })

      };


      _this.q56QuestionAudioHandlers.push({
        audio: _this.Ask_Question5_2,
        eventName: "ended",
        handler: secondAudioEndedHandler
      });
      _this.Ask_Question5_2.addEventListener("ended", secondAudioEndedHandler);
      _this.startQuestionAudioWatchdog(_this.Ask_Question5_2, secondAudioEndedHandler, sequenceToken);
      _this.playAudioClip(_this.Ask_Question5_2);
    };

    _this.q56QuestionAudioHandlers.push({
      audio: _this.Ask_Question5_1,
      eventName: "ended",
      handler: firstAudioEndedHandler
    });
    _this.Ask_Question5_1.addEventListener("ended", firstAudioEndedHandler);

    _this.startQuestionAudioWatchdog(_this.Ask_Question5_1, firstAudioEndedHandler, sequenceToken);
  },
  startQ56CountryClockQuestion: function (questionNumber) {
    if (!_this.q56CountryPool) {
      _this.q56CountryPool = [
        { id: 1, key: "Map1", name: "Afghanistan", flagKey: "AfghanistanFlag", diffMin: -60, locX: 305, locY: 260, nameX: 295, nameY: 185 },
        { id: 2, key: "Map2", name: "Pakistan", flagKey: "PakistanFlag", diffMin: -30, locX: 320, locY: 330, nameX: 315, nameY: 255 },
        { id: 3, key: "Map3", name: "Maldives", flagKey: "MaldivesFlag", diffMin: -30, locX: 395, locY: 545, nameX: 365, nameY: 460 },
        { id: 4, key: "Map4", name: "Sri Lanka", flagKey: "SriLankaFlag", diffMin: 0, locX: 470, locY: 565, nameX: 520, nameY: 470 },
        { id: 5, key: "Map5", name: "Nepal", flagKey: "NepalFlag", diffMin: 15, locX: 470, locY: 345, nameX: 495, nameY: 252 },
        { id: 6, key: "Map6", name: "Bangladesh", flagKey: "BangladeshFlag", diffMin: 30, locX: 542, locY: 380, nameX: 570, nameY: 330 },
        { id: 7, key: "Map7", name: "Bhutan", flagKey: "BhutanFlag", diffMin: 30, locX: 545, locY: 360, nameX: 505, nameY: 225 },
        { id: 8, key: "Map8", name: "Myanmar", flagKey: "MyanmarFlag", diffMin: 60, locX: 625, locY: 365, nameX: 617, nameY: 325 },
        { id: 9, key: "Map9", name: "Thailand", flagKey: "ThailandFlag", diffMin: 90, locX: 685, locY: 475, nameX: 678, nameY: 385 }
      ];
    }

    _this.stopQ56QuestionAudio();
    if (_this.clockTick) {
      _this.clockTick.stop();
    }
    _this.clockTick = _this.add.audio('clocktick');
    _this.clockTick.play();
    _this.clockTick.loopFull(1);


    if (!_this.q56UsedCountries) {
      _this.q56UsedCountries = [];
    }

    _this.destroyQ56SceneObjects();
    _this.q56CurrentQuestion = questionNumber;

    var available = _this.q56CountryPool.filter(function (c) {
      return _this.q56UsedCountries.indexOf(c.id) === -1;
    });
    if (available.length === 0) {
      _this.q56UsedCountries = [];
      available = _this.q56CountryPool.slice();
    }

    _this.q56Country = available[_this.rnd.integerInRange(0, available.length - 1)];
    _this.q56UsedCountries.push(_this.q56Country.id);
    _this.q56IndiaOnLeft = _this.q56Country.diffMin >= 0;
    // Nudge the left-side dynamic country header a little up and left for better alignment.
    _this.q56CountryHeaderX = _this.q56IndiaOnLeft ? 680 : -20;
    _this.q56CountryHeaderY = _this.q56IndiaOnLeft ? -50 : -60;
    _this.q56IndiaHeaderX = _this.q56IndiaOnLeft ? -15 : 680;
    _this.q56IndiaClockConfig = _this.q56IndiaOnLeft ?
      { x: 5, y: 145, scaleX: 1, scaleY: 1, timeX: 130 } :
      { x: 675, y: 140, scaleX: 0.98, scaleY: 0.98, timeX: 820 };
    _this.q56CountryClockConfig = _this.q56IndiaOnLeft ?
      { x: 675, y: 140, scaleX: 0.98, scaleY: 0.98, timeX: 820, amX: 750, pmX: 820 } :
      // Left-side country clock is nudged slightly left/up for alignment.
      { x: 0, y: 130, scaleX: 0.96, scaleY: 0.98, timeX: 130, amX: 60, pmX: 130 };
    _this.q56Group = _this.add.group();
    _this.q56Map = _this.add.sprite(0, 0, _this.q56Country.key, 0);
    _this.q56Group.add(_this.q56Map);

    _this.currentQuestionAudio = _this.Ask_Question5_1;
    _this.playAudioClip(_this.Ask_Question5_1);

    _this.IndiaLabeltxt = _this.add.text(420, 300, "India", {
      font: "14px Arial",
      fill: "#000000",

    });

    // pin animation
    _this.addQ56Timer(3500, function () {

      _this.q56Map.frame = 1;

      _this.snapSound = _this.add.audio('framechangeSound');
      _this.snapSound.play();

      _this.q56LocationIcon = _this.add.sprite(
        Math.round(_this.q56Country.locX),
        Math.round(_this.q56Country.locY),
        "Location"
      );

      _this.q56LocationIcon.anchor.setTo(0.5, 0.5);
      _this.q56LocationIcon.y -= _this.q56LocationIcon.height / 2;
      _this.q56LocationIcon.y += 15;
      _this.q56LocationIcon.scale.setTo(0.81);

      _this.q56Group.add(_this.q56LocationIcon);

      // ✅ Pulse only few times (not infinite)
      var pulseTween = _this.add.tween(_this.q56LocationIcon.scale).to(
        { x: 0.95, y: 0.95 },
        600,                                // faster so 2–3 pulses fit in ~2 sec
        Phaser.Easing.Sinusoidal.InOut,
        true,
        0,
        3,                                  // 👈 repeat only 2 times (total ~3 cycles)
        true
      );

      // ✅ After animation ends → reset to normal size
      pulseTween.onComplete.add(function () {
        _this.q56LocationIcon.scale.setTo(0.9); // final stable size
      });

      // TEXT
      _this.q56CountryMapLabel = _this.add.text(
        Math.round(_this.q56Country.nameX),
        Math.round(_this.q56Country.nameY),
        _this.q56Country.name,
        {
          font: "14px Arial",
          fill: "#000000"
        }
      );

      _this.q56CountryMapLabel.anchor.setTo(0.5);
      _this.q56CountryMapLabel.alpha = 0;

      _this.q56Group.add(_this.q56CountryMapLabel);

      _this.add.tween(_this.q56CountryMapLabel).to(
        { alpha: 1 },
        300,
        Phaser.Easing.Linear.None,
        true
      );

    }, _this);


    _this.startQ56SecondAudioFlow();

    _this.q56Clock1 = _this.add.sprite(_this.q56IndiaClockConfig.x, _this.q56IndiaClockConfig.y, "clock1");
    _this.q56Clock1.scale.setTo(_this.q56IndiaClockConfig.scaleX, _this.q56IndiaClockConfig.scaleY);
    _this.q56Clock21 = _this.add.sprite(_this.q56CountryClockConfig.x, _this.q56CountryClockConfig.y, "clock2sprite");
    _this.q56Clock21.scale.setTo(_this.q56CountryClockConfig.scaleX, _this.q56CountryClockConfig.scaleY);


    _this.q56Clock2 = _this.add.sprite(_this.q56CountryClockConfig.x, _this.q56CountryClockConfig.y, "clock2sprite");
    _this.q56Clock2.scale.setTo(_this.q56CountryClockConfig.scaleX, _this.q56CountryClockConfig.scaleY);
    _this.indiaName = _this.add.sprite(_this.q56IndiaHeaderX, -50, 'LightBlueBox');
    _this.q56IndiaFlag = _this.add.sprite(_this.indiaName.x - 65, _this.indiaName.y, "IndiaFlag");
    _this.q56IndiaCountryText = _this.add.text(_this.indiaName.x + 160, _this.indiaName.y + 150, "India (IST)", {
      font: "22px Arial",
      fill: "#000000",
      fontWeight: "bold"
    });
    _this.q56IndiaCountryText.anchor.setTo(0.5);

    _this.q56IndiaTime = _this.add.sprite(_this.q56IndiaClockConfig.timeX, 490, "BlackBox");
    _this.q56IndiaTime.anchor.setTo(0.5);
    _this.q56IndiaTime.scale.setTo(0.9);


    _this.q56Group.add(_this.q56Clock1);
    _this.q56Group.add(_this.q56Clock21);
    _this.q56Group.add(_this.q56Clock2);
    _this.q56Group.add(_this.indiaName);
    _this.q56Group.add(_this.q56IndiaFlag);
    _this.q56Group.add(_this.q56IndiaCountryText);
    _this.q56Group.add(_this.q56IndiaTime);

    _this.q56C1Center = {
      x: _this.q56Clock1.x + _this.q56Clock1.width / 2,
      y: _this.q56Clock1.y + _this.q56Clock1.height / 2
    };
    _this.q56C2Center = {
      x: _this.q56Clock2.x + _this.q56Clock2.width / 2,
      y: _this.q56Clock2.y + _this.q56Clock2.height / 2
    };

    do {
      _this.q56IndiaHour24 = _this.rnd.integerInRange(0, 23);
      _this.q56IndiaMinute = _this.rnd.integerInRange(0, 11) * 5;

      // _this.q56IndiaHour24 = 11;
      // _this.q56IndiaMinute = 35;

      var indiaHourMark = _this.q56IndiaHour24 % 12;
      if (indiaHourMark === 0) indiaHourMark = 12;
      var indiaMinuteMark = _this.q56IndiaMinute / 5;
      if (indiaMinuteMark === 0) indiaMinuteMark = 12;
    } while (indiaHourMark === indiaMinuteMark);

    var indiaTotal = _this.q56IndiaHour24 * 60 + _this.q56IndiaMinute;
    var targetTotal = (indiaTotal + _this.q56Country.diffMin + 1440) % 1440;
    _this.q56TargetHour24 = Math.floor(targetTotal / 60);
    _this.q56TargetMinute = targetTotal % 60;

    _this.q56UserHour24 = (_this.q56IndiaHour24 + _this.rnd.integerInRange(1, 11)) % 24;
    _this.q56UserMinute = _this.rnd.integerInRange(0, 59);
    if (_this.q56UserHour24 === _this.q56TargetHour24 && _this.q56UserMinute === _this.q56TargetMinute) {
      _this.q56UserMinute = (_this.q56UserMinute + 20) % 60;
    }
    _this.q56UserHourAngle = (((_this.q56UserHour24 % 12) * 30) + (_this.q56UserMinute * 0.5)) % 360;
    _this.q56UserMinuteAngle = (_this.q56UserMinute * 6) % 360;


    //set for am/pm selection

    _this.am = _this.add.sprite(_this.q56CountryClockConfig.amX, 420, "AM");
    _this.am.scale.setTo(0.27);
    _this.pm = _this.add.sprite(_this.q56CountryClockConfig.pmX, 420, "PM");
    _this.pm.scale.setTo(0.27);

    _this.setupAMPMSelection();

    _this.q56DiffBox = _this.add.sprite(_this.q56CountryClockConfig.timeX, 490, "BlackBox");
    _this.q56DiffBox.anchor.setTo(0.5);
    _this.q56DiffBox.scale.setTo(0.9);
    _this.q56Group.add(_this.q56DiffBox);

    var textToDisplay = _this.getQ56DiffInstructionText(_this.q56Country.diffMin);

    _this.q56DiffText = _this.add.text(
      _this.q56DiffBox.x,
      _this.q56DiffBox.y,
      textToDisplay,
      {
        font: "24px Arial",
        fill: "#ffffff",
        stroke: "#000000",
        fontWeight: "bold"

      }
    );

    _this.q56DiffText.anchor.setTo(0.5);
    _this.q56Group.add(_this.q56DiffText);


    _this.expectedSuffix = _this.q56IndiaHour24 >= 12 ? "PM" : "AM";

    _this.q56IndiaLabel = _this.add.text(_this.q56IndiaTime.x, _this.q56IndiaTime.y, _this.formatQ56Time(_this.q56IndiaHour24, _this.q56IndiaMinute), {
      font: "26px Arial",
      fill: "#ffffff",
      stroke: "#000000",
      fontWeight: "bold"

    });
    _this.q56IndiaLabel.anchor.setTo(0.5);
    _this.q56Group.add(_this.q56IndiaLabel);
    _this.q56RightLabel = _this.add.text(_this.q56DiffBox.x, _this.q56DiffBox.y, _this.formatQ56Time(_this.q56TargetHour24, _this.q56TargetMinute), {
      font: "26px Arial",
      fill: "#ffffff",
      stroke: "#000000",
      fontWeight: "bold"
    });
    _this.q56RightLabel.alpha = 0;
    _this.q56RightLabel.anchor.setTo(0.5);
    _this.q56Group.add(_this.q56RightLabel);

    _this.q56RightBtn = _this.add.sprite(475, 70, "RightClick");
    _this.q56Group.add(_this.q56RightBtn);

    _this.q56LeftHourHand = _this.add.sprite(_this.q56C1Center.x, _this.q56C1Center.y, "HourTime");
    _this.q56LeftMinuteHand = _this.add.sprite(_this.q56C1Center.x, _this.q56C1Center.y, "MinuteTime");
    _this.q56RightHourHand = _this.add.sprite(_this.q56C2Center.x, _this.q56C2Center.y, "HourTime");
    _this.q56RightMinuteHand = _this.add.sprite(_this.q56C2Center.x, _this.q56C2Center.y, "MinuteTime");

    _this.q56LeftHourHand.anchor.setTo(10 / 61, 20 / 40);
    _this.q56LeftMinuteHand.anchor.setTo(10 / 80, 20 / 52);

    _this.q56RightHourHand.anchor.setTo(0.11, 20 / 40);
    _this.q56RightMinuteHand.anchor.setTo(10 / 70, 20 / 52);

    _this.q56Group.add(_this.q56LeftHourHand);
    _this.q56Group.add(_this.q56LeftMinuteHand);
    _this.q56Group.add(_this.q56RightHourHand);
    _this.q56Group.add(_this.q56RightMinuteHand);

    _this.q56LeftCenterCircle = _this.add.sprite(_this.q56C1Center.x - 30, _this.q56C1Center.y + 28, "PinkClockCircle");
    _this.q56RightCenterCircle = _this.add.sprite(_this.q56C2Center.x - 3, _this.q56C2Center.y - 10, "OrangeClockCircle");
    _this.q56RightCenterCircle.x = _this.q56IndiaOnLeft ? _this.q56RightCenterCircle.x : _this.q56RightCenterCircle.x - 3;
    _this.q56LeftCenterCircle.anchor.setTo(0.5);
    _this.q56RightCenterCircle.anchor.setTo(0.5);
    _this.q56Group.add(_this.q56LeftCenterCircle);
    _this.q56Group.add(_this.q56RightCenterCircle);

    _this.q56IndiaHourHandSprite = _this.q56LeftHourHand;
    _this.q56IndiaMinuteHandSprite = _this.q56LeftMinuteHand;
    _this.q56AnswerHourHand = _this.q56RightHourHand;
    _this.q56AnswerMinuteHand = _this.q56RightMinuteHand;
    _this.q56AnswerCenterCircle = _this.q56RightCenterCircle;
    _this.q56AnswerClock = _this.q56Clock2;

    // Final hand pivot must always follow circle centers (single source of truth).
    _this.q56C1Center = {
      x: _this.q56LeftCenterCircle.x,
      y: _this.q56LeftCenterCircle.y
    };
    _this.q56C2Center = {
      x: _this.q56RightCenterCircle.x,
      y: _this.q56RightCenterCircle.y
    };
    _this.q56LeftHourHand.x = _this.q56C1Center.x;
    _this.q56LeftHourHand.y = _this.q56C1Center.y;
    _this.q56LeftMinuteHand.x = _this.q56C1Center.x;
    _this.q56LeftMinuteHand.y = _this.q56C1Center.y;
    _this.q56RightHourHand.x = _this.q56C2Center.x;
    _this.q56RightHourHand.y = _this.q56C2Center.y;
    _this.q56RightMinuteHand.x = _this.q56C2Center.x;
    _this.q56RightMinuteHand.y = _this.q56C2Center.y;
    _this.q56AnswerCenter = _this.q56C2Center;

    _this.q56DraggingHour = false;
    _this.q56DraggingMinute = false;

    _this.q56AnswerHourHand.inputEnabled = true;
    _this.q56AnswerMinuteHand.inputEnabled = true;
    _this.q56AnswerHourHand.input.useHandCursor = true;
    _this.q56AnswerMinuteHand.input.useHandCursor = true;

    _this.q56AnswerMinuteHand.events.onInputDown.add(function () {
      _this.q56DraggingMinute = true;
      _this.q56AnswerMinuteHand.frame = 1;
    }, _this);

    _this.q56AnswerHourHand.events.onInputDown.add(function () {
      _this.q56DraggingHour = true;
      _this.q56AnswerHourHand.frame = 1;
    }, _this);

    _this.redrawQ56Hands();

    // Ensure shared header UI stays above map and clocks.
    _this.safeBringToTop(_this.navbar);
    _this.safeBringToTop(_this.backbtn);
    _this.safeBringToTop(_this.speakerbtn);
    _this.safeBringToTop(_this.timebg);
    _this.safeBringToTop(_this.timeDisplay);
    _this.safeBringToTop(_this.hintBtn);
    _this.safeBringToTop(_this.starsGroup);

    if (!_this.q56MoveCbBound) {
      _this.q56MoveCallback = function (pointer) {
        _this.updateQ56FromPointer(pointer);
      };
      _this.game.input.addMoveCallback(_this.q56MoveCallback, _this);
      _this.q56MoveCbBound = true;
    }

    if (!_this.q56UpBound) {
      _this.q56UpHandler = function () {
        _this.q56DraggingHour = false;
        _this.q56DraggingMinute = false;
        if (_this.q56AnswerHourHand) _this.q56AnswerHourHand.frame = 0;
        if (_this.q56AnswerMinuteHand) _this.q56AnswerMinuteHand.frame = 0;
      };
      _this.game.input.onUp.add(_this.q56UpHandler, _this);
      _this.q56UpBound = true;
    }
  },

  cleanupQ56Interactions: function () {
    _this.q56DraggingHour = false;
    _this.q56DraggingMinute = false;

    if (_this.game && _this.game.input) {
      if (
        _this.q56MoveCbBound &&
        _this.q56MoveCallback &&
        typeof _this.game.input.deleteMoveCallback === "function"
      ) {
        _this.game.input.deleteMoveCallback(_this.q56MoveCallback, _this);
      }

      if (_this.q56UpBound && _this.q56UpHandler && _this.game.input.onUp) {
        _this.game.input.onUp.remove(_this.q56UpHandler, _this);
      }
    }

    _this.q56MoveCbBound = false;
    _this.q56UpBound = false;
    _this.q56MoveCallback = null;
    _this.q56UpHandler = null;
  },

  updateQ56FromPointer: function (pointer) {
    if (!_this.q56DraggingHour && !_this.q56DraggingMinute) return;

    var dx = pointer.x - _this.q56AnswerCenter.x;
    var dy = pointer.y - _this.q56AnswerCenter.y;
    var angle = Math.atan2(dy, dx);
    var fromTop = (Phaser.Math.radToDeg(angle) + 90 + 360) % 360;

    if (_this.q56DraggingMinute) {
      _this.q56UserMinuteAngle = fromTop;
    }

    if (_this.q56DraggingHour) {
      _this.q56UserHourAngle = fromTop;
    }

    _this.redrawQ56Hands();
  },


  redrawQ56Hands: function () {
    _this.q56IndiaHourHandSprite.rotation = (((_this.q56IndiaHour24 % 12) * 30) + (_this.q56IndiaMinute * 0.5) - 90) * Math.PI / 180;
    _this.q56IndiaMinuteHandSprite.rotation = ((_this.q56IndiaMinute * 6) - 90) * Math.PI / 180;
    _this.q56AnswerHourHand.rotation = ((_this.q56UserHourAngle || 0) - 90) * Math.PI / 180;
    _this.q56AnswerMinuteHand.rotation = ((_this.q56UserMinuteAngle || 0) - 90) * Math.PI / 180;

    _this.q56IndiaLabel.setText(_this.formatQ56Time(_this.q56IndiaHour24, _this.q56IndiaMinute));
  },



  getQ56DiffInstructionText: function (diffMin) {
    var diffAbs = Math.abs(diffMin);
    var diffHour = Math.floor(diffAbs / 60);
    var diffMinute = diffAbs % 60;
    var diffSign = diffMin > 0 ? "+" : "-";
    var durationText = "";

    if (diffAbs === 0) {
      return "0 minutes";
    }

    if (diffHour > 0) {
      durationText = diffSign + " " + diffHour + " hour";

      if (diffMinute > 0) {
        durationText += " " + (diffMinute < 10 ? "0" + diffMinute : diffMinute) + " min";
      }
    } else {
      durationText = diffSign + " " + diffMinute + " minutes";
    }

    return durationText;
  },

  formatQ56Time: function (hour24, minute) {
    var h12 = hour24 % 12;
    if (h12 === 0) h12 = 12;
    var suffix = hour24 >= 12 ? "PM" : "AM";
    var mm = minute < 10 ? "0" + minute : minute;
    return h12 + ":" + mm + " " + suffix;
  },

  checkAnswerQ56: function () {
     _this.noofAttempts++;
    _this.playEffectAudio(_this.clickSound);
    _this.q56RightBtn.frame = 1;

    var minuteAngle = (_this.q56AnswerMinuteHand.angle + 360) % 360;
    var hourAngle = (_this.q56AnswerHourHand.angle + 360) % 360;
    minuteAngle = (minuteAngle + 90) % 360;
    hourAngle = (hourAngle + 90) % 360;

    var userMinute = Math.round(minuteAngle / 6);
    if (userMinute === 60) userMinute = 0;

    var expectedHourAngle = ((_this.q56TargetHour24 % 12) * 30) + (_this.q56TargetMinute * 0.5);
    var hourDiff = Math.abs(hourAngle - expectedHourAngle);
    if (hourDiff > 180) hourDiff = 360 - hourDiff;

    var minuteDiff = Math.abs(userMinute - _this.q56TargetMinute);
    if (minuteDiff > 30) minuteDiff = 60 - minuteDiff;

    var minuteCorrect = minuteDiff <= _this.minuteTolerance;
    var hourCorrect = hourDiff <= _this.hourTolerance;

    _this.expectedSuffix = (_this.q56TargetHour24 >= 12 && _this.q56TargetHour24 < 24) ? "PM" : "AM";

    if (minuteCorrect && hourCorrect && _this.selectedAMPM == _this.expectedSuffix) {
      _this.q56RightBtn.inputEnabled = false;
      _this.q56AnswerHourHand.inputEnabled = false;
      _this.q56AnswerMinuteHand.inputEnabled = false;
      _this.q56DraggingHour = false;
      _this.q56DraggingMinute = false;
      _this.am.inputEnabled = false;
      _this.pm.inputEnabled = false;

      if (_this.q56CountryMapLabel) {
        _this.q56CountryMapLabel.x = _this.q56Country.nameX;
        _this.q56CountryMapLabel.y = _this.q56Country.nameY;
        _this.q56CountryMapLabel.setText(_this.q56Country.name);
        _this.q56CountryMapLabel.alpha = 1;
      }
      if (_this.framechange) {
        _this.playEffectAudio(_this.framechange);
      }

      // 1) Counter celebration first.
      _this.playEffectAudio(_this.counterCelebrationSound);


      //add animations
      _this.q56Clock21.animations.add('glow2', [0, 1], 3, true);
      _this.q56Clock21.animations.play('glow2');

       _this.q56Clock1.animations.add('glow2', [0, 1], 3, true);
      _this.q56Clock1.animations.play('glow2');


      // 2) Show actual country time with reveal animation.
      _this.addQ56Timer(550, function () {
        _this.am.destroy();
        _this.pm.destroy();
        if (_this.q56DiffText) _this.q56DiffText.alpha = 0;
        if (_this.q56RightLabel) {
          _this.q56RightLabel.x = _this.q56DiffBox.x;
          _this.q56RightLabel.y = _this.q56DiffBox.y;
          _this.q56RightLabel.setText(_this.formatQ56Time(_this.q56TargetHour24, _this.q56TargetMinute));
          _this.q56RightLabel.alpha = 1;
          _this.add.tween(_this.q56RightLabel.scale).to({ x: 1.05, y: 1.05 }, 250, Phaser.Easing.Quadratic.Out, true, 0, 0, true);
        }
        _this.playCorrectClockSound(_this.birdChirmSound);

      }, _this);

      // 3) Then star/celebration sound and move next.
      _this.addQ56Timer(1100, function () {
        _this.playEffectAudio(_this.celebrationSound);
        _this.correctAnswers++;

        var star = _this.starsGroup.getChildAt(_this.correctAnswers - 1);
        star.animations.add("shine");
        star.animations.play("shine", 24, false);

        _this.clockTick.stop();
        _this.clockTick.loopFull(0);

      }, _this);

      _this.addQ56Timer(1800, function () {
        _this.correctAns5_6();
         //for api
            //edited for baseurl apk
            
            telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            //..............

            console.log(_this.noofAttempts, "_this.noofAttempts.................");
            console.log(_this.AnsTimerCount, "_this.AnsTimerCount.................");
            console.log(_this.sceneCount, "_this.sceneCount.................");
            console.log(_this.questionid, "_this.questionid.................");

         _this.q56Clock21.animations.stop('glow2');
        _this.q56Clock21.frame = 0;

         _this.q56Clock1.animations.stop('glow2');
        _this.q56Clock1.frame = 0;

      });
    } else if (_this.selectedAMPM == _this.expectedSuffix) {
      _this.stopQ56QuestionAudio();
      _this.playEffectAudio(_this.wrongans);
      _this.q56RightBtn.frame = 0;
      _this.shakeObjects([_this.q56AnswerClock, _this.q56Clock21, _this.q56AnswerHourHand, _this.q56AnswerMinuteHand, _this.q56AnswerCenterCircle]);
    } else if (minuteCorrect && hourCorrect) {
      _this.stopQ56QuestionAudio();
      _this.playEffectAudio(_this.wrongans);
      _this.q56RightBtn.frame = 0;
      _this.shakeObjects([_this.am, _this.pm]);
    } else {
      _this.stopQ56QuestionAudio();
      _this.playEffectAudio(_this.wrongans);
      _this.q56RightBtn.frame = 0;
      _this.shakeObjects([_this.am, _this.pm, _this.q56Clock21, _this.q56AnswerClock, _this.q56AnswerHourHand, _this.q56AnswerMinuteHand, _this.q56AnswerCenterCircle]);
    }
  },

  destroyQ56SceneObjects: function () {
    if (_this.q56Group) {
      _this.q56Group.destroy(true);
      _this.q56Group = null;
    }
    _this.safeDestroy(_this.q56Map1);
    _this.q56Map1 = null;
    _this.q56DraggingHour = false;
    _this.q56DraggingMinute = false;
  },

  shutdown: function () {
    _this.stopAllGameAudio();
    _this.unbindGlobalAudioRecovery();
  },

};
