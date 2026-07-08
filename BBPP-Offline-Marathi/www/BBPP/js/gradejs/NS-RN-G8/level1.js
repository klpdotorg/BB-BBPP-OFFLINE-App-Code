Game.NS_RN_G8level1 = function () { };

Game.NS_RN_G8level1.prototype = {
  init: function (param, score) {
    _this = this;

    this.Stararr = param;
    this.score = score;
    _this.languageSelected = window.languageSelected;

    if (
      _this.languageSelected == null ||
      _this.languageSelected == " " ||
      _this.languageSelected == ""
    ) {
      _this.languageSelected = "Marathi";
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

    _this.firecrack = document.createElement("audio");
    _this.firecracksrc = document.createElement("source");
    _this.firecracksrc.setAttribute("src", window.baseUrl + "sounds/firecracker_03.mp3");
    _this.firecrack.appendChild(_this.firecracksrc);

    _this.frame_change = document.createElement("audio");
    _this.frame_changesrc = document.createElement("source");
    _this.frame_changesrc.setAttribute("src", window.baseUrl + "sounds/Unlock Skill.mp3"); //unlock-skill_k9AY3CPU//Frame_change_sound
    _this.frame_change.appendChild(_this.frame_changesrc);
    //Frame_change_sound
    _this.Ask_Question1 = _this.createAudio("NS_RN_G8_a1");
    _this.Ask_Question2 = _this.createAudio("NS_RN_G8_a3");
    _this.Ask_Question3 = _this.createAudio("NS_RN_G8_a4");
    _this.Ask_Question4 = _this.createAudio("NS_RN_G8_a5");
    _this.Ask_Question5 = _this.createAudio("NS_RN_G8_a6");
    _this.Ask_Question6 = _this.createAudio("NS_RN_G8_a2");


    telInitializerbbpp.gameIdInit("NSN_RN_G8", gradeSelected);
    console.log(gameID, "gameID...");
  },

  create: function (game) {
    //* show the demo video
    // _this.time.events.add(1, function () {

    //     // _this.ViewDemoVideo();
    // });

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

    //_this.AnsTimerCount = 0;
    _this.count1 = 0;
    _this.trackCount = 0;
    _this.speakerbtn;
    _this.background;
    _this.count = 0;
    _this.starsGroup;

    _this.keepCount = 0;

    _this.seconds = 0;
    _this.minutes = 0;
    _this.numberOfQuestions = 0;

    _this.counterForTimer = 0;

    _this.greenposinc = 0; //counter for incrementing position of green ball position in array
    _this.yellowposinc = 0; //counter for incrementing position of yellow ball position in array
    _this.greentime = 2300; //tween time for first green ball
    _this.yellowtime = 2300; //tween time for first yellow ball

    _this.hint_flag = 0;
    _this.speakerbtnClicked = false;
    _this.rightbtn_Clicked = false;

    _this.background = _this.add.tileSprite(
      0,
      0,
      _this.world.width,
      _this.world.height,
      "BG"
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
        if (_this.Question_flag == 1) {
          _this.Ask_Question1.play();
        }
        if (_this.Question_flag == 2) {
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


    _this.generateStarsForTheScene(6);

    //* start the game with first question
    _this.time.events.add(1000, _this.getQuestion);
  },

  createAudio: function (src) {
    audio = document.createElement("audio");
    audiosrc = document.createElement("source");
    audiosrc.setAttribute(
      "src",
      window.baseUrl + "questionSounds/NS-RN-G8/" + _this.languageSelected + "/" + src + ".mp3"
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
        _this.seconds = 0o0;
      } else {
        _this.minutes = _this.minutes + 1;
      }
    } else {
      if (_this.counterForTimer < 10)
        _this.seconds = "0" + _this.counterForTimer;
      else _this.seconds = _this.counterForTimer;
    }
    _this.timeDisplay.setText(_this.minutes + ":" + _this.seconds);
    //timer.setText(minutes + ':'+ seconds );
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

    _this.Initial_randomizing();
    _this.DisplayQuestion();
    //_this.initialScreenDisplay();
    _this.questionid = 1;
    console.log("inside get question.....");
  },

  stopVoice: function () {
    _this.Ask_Question1.pause();
    _this.Ask_Question1 = null;

    _this.Ask_Question6.pause();
    _this.Ask_Question6 = null;

    // _this.Ask_Question2.pause();
    // _this.Ask_Question2 = null;

    if (_this.celebrationSound) {
      if (_this.celebrationSound.isPlaying) {
        _this.celebrationSound.stop();
        _this.celebrationSound = null;
      }
    }
  },

  Initial_randomizing: function () {
    //* Here we are generating the numbers for both part A & B
    //* Natural numbers,whole numbers , Integers and Rational numbers
    //* Generating number from each of the above concept for both part A & B

    _this.arrayRN = [];
    _this.arrayRN1 = [];

    _this.rnArray = [0, 1, 2]; //0, 1, 2]  // for 3 different types of possibility as mentioned in above
    _this.shuffleArray(_this.rnArray);
    //* NS-RN-G8
    //Part A
    //0 = Natural numbers & whole numbers ,  1 = Integers, 2 = rational numbers
    //First value
    for (i = 0; i < 3; i++) {
      if (_this.rnArray[i] == 0) {
        console.log("_this.rnArray[0] == 0");
        _this.fValue = Math.floor(Math.random() * 4) + 0;
        _this.arrayRN.push(_this.fValue);
      } else if (_this.rnArray[i] == 1) {
        console.log("_this.rnArray[0] == 1");
        _this.fValue = Math.floor(Math.random() * 3) + 1;
        _this.arrayRN.push("-" + _this.fValue);
      } else if (_this.rnArray[i] == 2) {
        console.log("_this.rnArray[0] == 2");
        //RN
        _this.availRN = ["5/2", "3/2", "1/2"]; //'3/1', '2/1', '2/2', '3/3', '4/2', '6/3'
        _this.shuffleArray(_this.availRN); //1/2 or 1/3, 2/3
        _this.availRNsign = ["-", "+"];
        _this.shuffleArray(_this.availRNsign);
        if (_this.availRNsign[0] == "-") {
          _this.fValue = _this.availRNsign[0] + _this.availRN[0];
          _this.rnRawAnswer = _this.fValue;
        } else {
          _this.fValue = _this.availRN[0];
          _this.rnRawAnswer = _this.fValue;
        }

        _this.arrayRN.push(_this.fValue);
        //
      }
    }

    _this.findrnAnswer(_this.rnRawAnswer);
    console.log(_this.rnArray, "_this.rnArray");
    console.log(_this.arrayRN, "_this.arrayRN");

    //* Part B
    //0 = Natural numbers, 1 = whole numbers , 2= Integers, 3 = rational numbers
    _this.rnArray1 = [0, 1, 2, 3]; //0, 1, 2]  // for 3 different types of possibility as mentioned in above
    _this.shuffleArray(_this.rnArray1);

    for (i = 0; i < 3; i++) {
      if (_this.rnArray1[i] == 0) {
        console.log("_this.rnArray[0] == 0");
        _this.fValue = Math.floor(Math.random() * 9) + 1;
        _this.arrayRN1.push(_this.fValue);
      } else if (_this.rnArray1[i] == 1) {
        console.log("_this.rnArray[0] == 1");
        _this.fValue = Math.floor(Math.random() * 9) + 0;
        while (_this.arrayRN1.includes(_this.fValue)) {
          console.log("culpa mia @@@@");
          _this.fValue = Math.floor(Math.random() * 9) + 0;
        }
        _this.arrayRN1.push(_this.fValue);
      } else if (_this.rnArray1[i] == 2) {
        console.log("_this.rnArray[0] == 2");
        //RN
        _this.availRN = Math.floor(Math.random() * 9) + 1;
        _this.shuffleArray(_this.availRN);
        _this.availRNsign = "-";
        _this.shuffleArray(_this.availRNsign);
        _this.fValue = _this.availRNsign + _this.availRN;
        //  _this.rnRawAnswer = _this.fValue;
        _this.arrayRN1.push(_this.fValue);
        //
      } else if (_this.rnArray1[i] == 3) {
        _this.availRN1 = Math.floor(Math.random() * 9) + 1;
        _this.availRN2 = Math.floor(Math.random() * 9) + 1;
        while (_this.availRN1 % _this.availRN2 == 0) {
          console.log("My Fault > Nick :)");
          _this.availRN1 = Math.floor(Math.random() * 9) + 1;
          _this.availRN2 = Math.floor(Math.random() * 9) + 1;
        }
        _this.availRNsign = ["-", "+"];
        _this.shuffleArray(_this.availRNsign);
        if (_this.availRNsign[0] == "-") {
          _this.fValue =
            _this.availRNsign[0] + _this.availRN1 + "/" + _this.availRN2;
        } else {
          _this.fValue = _this.availRN1 + "/" + _this.availRN2;
        }
        _this.arrayRN1.push(_this.fValue);
      }
    }
    console.log(
      _this.availRN1,
      _this.availRN2,
      " _this.availRN1, _this.availRN1"
    );

    console.log(_this.rnArray1, "_this.rnArray1 >>");
    console.log(_this.arrayRN1, "_this.arrayRN1 +++++++");
  },

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

  findrnAnswer: function () {
    //* This function will helps us to find the answer for part B
    if (_this.rnRawAnswer == "-5/2") {
      _this.rnFinalAnswer = -2.5;
    } else if (_this.rnRawAnswer == "5/2") {
      _this.rnFinalAnswer = 2.5;
    } else if (_this.rnRawAnswer == "-3/2") {
      _this.rnFinalAnswer = -1.5;
    } else if (_this.rnRawAnswer == "3/2") {
      _this.rnFinalAnswer = 1.5;
    } else if (_this.rnRawAnswer == "-1/2") {
      _this.rnFinalAnswer = -0.5;
    } else if (_this.rnRawAnswer == "1/2") {
      _this.rnFinalAnswer = 0.5;
    } else if (_this.rnRawAnswer == "-3/1") {
      _this.rnFinalAnswer = -3;
    } else if (_this.rnRawAnswer == "3/1") {
      _this.rnFinalAnswer = 3;
    } else if (
      _this.rnRawAnswer == "-2/1" ||
      _this.rnRawAnswer == "-4/2" ||
      _this.rnRawAnswer == "-6/3"
    ) {
      _this.rnFinalAnswer = -2;
    } else if (
      _this.rnRawAnswer == "2/1" ||
      _this.rnRawAnswer == "4/2" ||
      _this.rnRawAnswer == "6/3"
    ) {
      _this.rnFinalAnswer = 2;
    } else if (_this.rnRawAnswer == "-2/2" || _this.rnRawAnswer == "-3/3") {
      _this.rnFinalAnswer = -1;
    } else if (_this.rnRawAnswer == "2/2" || _this.rnRawAnswer == "3/3") {
      _this.rnFinalAnswer = 1;
    }

    console.log(_this.rnFinalAnswer, "_this.rnFinalAnswer .....");
  },

  calculateDistance: function (x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  },


  showtank1ClickigDemo: function () {
    console.log("hiiii")
    _this.hand_flag = 1;
    //* This will show the demo for clicking the bowl
    _this.hand = _this.add.image(470, 310, 'hand');
    _this.hand.scale.setTo(0.65);
    _this.time.events.add(400, () => {
      _this.hand.scale.setTo(0.6);
      _this.time.events.add(400, () => {
        _this.hand.scale.setTo(0.65);
        _this.time.events.add(450, () => {
          //_this.hand.destroy();
          _this.tweenHand = _this.add.tween(_this.hand).to({ x: 540, y: 310 }, 1260, Phaser.Easing.Linear.None, true);
          _this.tweenHand.onComplete.add(function () {
            _this.hand.scale.setTo(0.6);
            _this.time.events.add(400, () => {
              _this.hand.scale.setTo(0.65);
              _this.time.events.add(470, () => {
                _this.tweenHand1 = _this.add.tween(_this.hand).to({ x: 590, y: 310 }, 1260, Phaser.Easing.Linear.None, true);
                _this.tweenHand1.onComplete.add(function () {
                  _this.hand.scale.setTo(0.6);
                  _this.time.events.add(400, () => {
                    _this.hand.scale.setTo(0.65);
                    _this.time.events.add(470, () => {
                      _this.tweenHand2 = _this.add.tween(_this.hand).to({ x: 650, y: 310 }, 1260, Phaser.Easing.Linear.None, true);
                      _this.tweenHand2.onComplete.add(function () {
                        _this.hand.scale.setTo(0.6);
                        _this.time.events.add(400, () => {
                          _this.hand.scale.setTo(0.65);
                          _this.time.events.add(500, () => {
                            _this.hand.destroy();
                          })
                        })
                      })

                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  },

  initialScreenDisplay: function () {
    //* Part B initial screen
    _this.q_count = 0;
    _this.rnArray1.splice(3, 1);
    console.log(_this.rnArray1, " _this.rnArray1 ARRRR");
    _this.panel = _this.add.image(20, 65, "panel");

    _this.orangeCircle = _this.add.image(470, 284, "orangeCircle");
    _this.orangeCircle.anchor.setTo(0.5);
    // _this.orangeCircle.frame = 1;
    _this.greenCircle = _this.add.image(470, 284, "greenCircle");
    _this.greenCircle.anchor.setTo(0.5);
    // // // _this.greenCircle.frame = 1;
    _this.yellowCircle = _this.add.image(470, 284, "yellowCircle");
    _this.yellowCircle.anchor.setTo(0.5);
    // // //_this.yellowCircle.frame = 1;
    _this.blueCircle = _this.add.image(470, 284, "blueCircle");
    _this.blueCircle.anchor.setTo(0.5);
    // // _this.blueCircle.frame = 1;

    _this.allText = _this.add.image(260, 260, "text");

    // _this.showtank1ClickigDemo();

    if (_this.count1 == 3) {
      console.log("part bbbbbbbbbbbbbbbb");
      _this.Ask_Question6.play();
      _this.Question_flag = 2;
      _this.speakerbtn.inputEnabled = false;
      _this.Ask_Question6.addEventListener("ended", function () {
        if (_this.count1 == 3 && _this.hand_flag != 1)
          _this.showtank1ClickigDemo();
        if (_this.count1 == 3 && _this.q_count == 0) _this.Ask_Question2.play();
      });
      _this.Ask_Question2.addEventListener("ended", function () {
        if (_this.count1 == 3 && _this.q_count == 0) _this.Ask_Question3.play();
      });
      _this.Ask_Question3.addEventListener("ended", function () {
        if (_this.count1 == 3 && _this.q_count == 0) _this.Ask_Question4.play();
      });
      _this.Ask_Question4.addEventListener("ended", function () {
        if (_this.count1 == 3 && _this.q_count == 0) _this.Ask_Question5.play();
      });
    }

    _this.Ask_Question5.addEventListener("ended", function () {
      _this.speakerbtn.inputEnabled = true;
      if (_this.count1 == 3 && _this.fplayFlag != 1) {
        console.log("audio complted");
        _this.addTheBallScreen();
      }
    });
    // _this.addTheBallScreen();
  },

  addTheBallScreen: function () {
    //* Adding ball and displaying equation with it
    //* adding  tween and dragging property
    //* ading validation function
    _this.fplayFlag = 1;
    _this.q_count++;
    console.log(_this.keepCount, "_this.keepCount ^^^^^^^^");
    _this.addTheBall = _this.add.sprite(750, 45, "pinkBall");
    _this.addTheBall.anchor.setTo(0.5);
    _this.addTheBall.scale.setTo(0.9, 0.9);
    _this.addTheBall.inputEnabled = true;
    _this.addTheBall.input.enableDrag(true);

    // Create a new graphics object
    var bubbleMask = _this.add.graphics(0, 0);

    // Draw the triangle on the graphics object
    bubbleMask.beginFill(0x65b4c3); // Set the color of the triangle
    bubbleMask.moveTo(20, 65); // Set the starting point of the triangle
    bubbleMask.lineTo(910, 65); // Draw the first line of the triangle//376 + ((200 * _this.sinA) / _this.sinB)//430 + ((272 * _this.sinC) / _this.sinB), 300
    bubbleMask.lineTo(910, 505); // Draw the second line of the triangle
    bubbleMask.lineTo(20, 505);
    bubbleMask.lineTo(20, 65); // Draw the third line of the triangle to close the shape
    bubbleMask.endFill();

    bubbleMask.alpha = 0;
    _this.addTheBall.mask = bubbleMask;

    console.log(
      _this.rnArray1[_this.keepCount],
      " _this.rnArray1[_this.keepCount]"
    );
    if (_this.rnArray1[_this.keepCount] == 3) {
      console.log(_this.rnArray1[_this.keepCount], " is 3 ");
      _this.x = -23;
    } else if (_this.rnArray1[_this.keepCount] == 2) {
      _this.x = -15;
    } else {
      _this.x = -10;
    }
    _this.rnEquation = _this.add.text(
      _this.x,
      -4,
      _this.arrayRN1[_this.keepCount]
    ); //-10
    _this.applyingStyle1(_this.rnEquation);
    _this.addTheBall.addChild(_this.rnEquation);

    _this.tweenA = _this.add
      .tween(_this.addTheBall)
      .to({ x: 750, y: 530 }, 10000, Phaser.Easing.Linear.None, true);
    _this.tweenA.onComplete.add(function () {
      _this.addTheBall.destroy();
      //  _this.mask2.destroy();
      _this.keepCount++;
      if (_this.keepCount >= _this.arrayRN1.length) {
        console.log("Splice and check");
        _this.keepCount = 0;
      }
      _this.addTheBallScreen();
    });

    _this.addTheBall.events.onDragUpdate.add(function (target) {
      _this.tweenA.stop();
      _this.distance = Math.sqrt(
        Math.pow(_this.addTheBall.x - 470, 2) +
        Math.pow(_this.addTheBall.y - 284, 2)
      );
      console.log(_this.distance);
      if (_this.distance >= 180 && _this.distance <= 260) {
        console.log("orange balllllllll");
        _this.orangeCircle.frame = 1;
        if (_this.greenCircle.frame == 1) _this.greenCircle.frame = 0;
        if (_this.yellowCircle.frame == 1) _this.yellowCircle.frame = 0;
        if (_this.blueCircle.frame == 1) _this.blueCircle.frame = 0;
      } else if (_this.distance >= 120 && _this.distance <= 180) {
        console.log("green balllllllll");
        _this.greenCircle.frame = 1;
        if (_this.orangeCircle.frame == 1) _this.orangeCircle.frame = 0;
        if (_this.yellowCircle.frame == 1) _this.yellowCircle.frame = 0;
        if (_this.blueCircle.frame == 1) _this.blueCircle.frame = 0;
      } else if (_this.distance >= 75 && _this.distance <= 120) {
        console.log("yellow balllllllll");
        _this.yellowCircle.frame = 1;
        if (_this.orangeCircle.frame == 1) _this.orangeCircle.frame = 0;
        if (_this.greenCircle.frame == 1) _this.greenCircle.frame = 0;
        if (_this.blueCircle.frame == 1) _this.blueCircle.frame = 0;
      } else if (_this.distance < 75) {
        console.log("blue balllllllll");
        _this.blueCircle.frame = 1;
        if (_this.orangeCircle.frame == 1) _this.orangeCircle.frame = 0;
        if (_this.greenCircle.frame == 1) _this.greenCircle.frame = 0;
        if (_this.yellowCircle.frame == 1) _this.yellowCircle.frame = 0;
      } else {
        _this.orangeCircle.frame = 0;
        _this.greenCircle.frame = 0;
        _this.yellowCircle.frame = 0;
        _this.blueCircle.frame = 0;
      }
    });

    _this.addTheBall.events.onDragStop.add(function () {
      _this.distance = Math.sqrt(
        Math.pow(_this.addTheBall.x - 470, 2) +
        Math.pow(_this.addTheBall.y - 284, 2)
      );
      console.log(_this.distance);
      _this.validateTheBall2(_this.distance);
    });
  },

  chnageFrame: function () {
    //* used to change the frames of the circles.
    _this.time.events.add(1500, function () {
      if (_this.orangeCircle.frame == 2) _this.orangeCircle.frame = 0;
      if (_this.greenCircle.frame == 2) _this.greenCircle.frame = 0;
      if (_this.yellowCircle.frame == 2) _this.yellowCircle.frame = 0;
      if (_this.blueCircle.frame == 2) _this.blueCircle.frame = 0;
    });
  },

  chnageFrame1: function () {
    // _this.mask2.visible = false;
    //* used to change the frames of the circles.
    if (_this.orangeCircle.frame == 1) _this.orangeCircle.frame = 0;
    if (_this.greenCircle.frame == 1) _this.greenCircle.frame = 0;
    if (_this.yellowCircle.frame == 1) _this.yellowCircle.frame = 0;
    if (_this.blueCircle.frame == 1) _this.blueCircle.frame = 0;
  },

  checkOverlap: function (spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
  },

  validateTheBall2: function (distance) {
    //* Used to validate the position of the ball in part B
    // console.log(distance, " culpa miaa");
    if (_this.rnArray1[_this.keepCount] == 3) {
      //*rational nums
      if (distance >= 180 && distance <= 260) {
        console.log("orange balllllllll"); //0xFFD700 = golden
        _this.orangeCircle.frame = 1;
        _this.frame_change.play();
        _this.addTheBall.inputEnabled = false;

        _this.correctAnswerArray();
        //_this.mask2.visible = false;
        _this.time.events.add(2000, function () {
          _this.celebrationSound.play();
          _this.addTheBall.destroy();
          _this.chnageFrame1();
          _this.starActions(_this.count1);
        });
        _this.time.events.add(4000, function () {
          if (_this.addTheBall) _this.addTheBall.destroy();
          _this.NextQuestion1();
        });
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        // _this.mask2.visible = false;
        _this.chnageFrame1();
        _this.addTheBall.destroy();
        _this.keepCount++;

        if (_this.keepCount >= _this.arrayRN1.length) {
          console.log("Splice and check");
          _this.keepCount = 0;
        }
        _this.addTheBallScreen();
      }
    } else if (_this.rnArray1[_this.keepCount] == 2) {
      //*Integers
      if (
        (distance >= 120 && distance <= 180) ||
        (distance >= 180 && distance <= 260)
      ) {
        console.log("green balllllllll");
        _this.frame_change.play();
        _this.greenCircle.frame = 1;
        _this.orangeCircle.frame = 1;
        _this.addTheBall.inputEnabled = false;

        _this.correctAnswerArray();
        _this.time.events.add(2000, function () {
          _this.celebrationSound.play();
          _this.addTheBall.destroy();
          _this.chnageFrame1();
          _this.starActions(_this.count1);
        });
        _this.time.events.add(4000, function () {
          if (_this.addTheBall) _this.addTheBall.destroy();
          _this.NextQuestion1();
        });
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        _this.chnageFrame1();
        _this.addTheBall.destroy();
        _this.keepCount++;

        if (_this.keepCount >= _this.arrayRN1.length) {
          console.log("Splice and check");
          _this.keepCount = 0;
        }
        _this.addTheBallScreen();
      }
    } else if (
      _this.rnArray1[_this.keepCount] == 1 &&
      _this.arrayRN1[_this.keepCount] == 0
    ) {
      //* whole numbeers//0xffff00
      if (distance >= 75 && distance <= 120) {
        console.log("yellow balllllllll");
        _this.addTheBall.inputEnabled = false;
        _this.frame_change.play();
        _this.greenCircle.frame = 1;
        _this.orangeCircle.frame = 1;
        _this.yellowCircle.frame = 1;

        _this.correctAnswerArray();

        _this.time.events.add(2000, function () {
          _this.celebrationSound.play();
          _this.addTheBall.destroy();
          _this.chnageFrame1();
          _this.starActions(_this.count1);
        });
        _this.time.events.add(4000, function () {
          if (_this.addTheBall) _this.addTheBall.destroy();
          _this.NextQuestion1();
        });
      } else if (distance >= 120 && distance <= 180) {
        //*Integers
        console.log("green balllllllll");
        _this.addTheBall.inputEnabled = false;
        _this.frame_change.play();
        _this.greenCircle.frame = 1;
        _this.orangeCircle.frame = 1;
        _this.yellowCircle.frame = 1;

        _this.correctAnswerArray();

        _this.time.events.add(2000, function () {
          _this.celebrationSound.play();
          _this.addTheBall.destroy();
          _this.chnageFrame1();
          _this.starActions(_this.count1);
        });

        _this.time.events.add(4000, function () {
          if (_this.addTheBall) _this.addTheBall.destroy();
          _this.NextQuestion1();
        });
      } else if (distance >= 180 && distance <= 260) {
        console.log("orange balllllllll");
        _this.frame_change.play();
        _this.addTheBall.inputEnabled = false;
        _this.greenCircle.frame = 1;
        _this.orangeCircle.frame = 1;
        _this.yellowCircle.frame = 1;

        _this.correctAnswerArray();
        _this.time.events.add(2000, function () {
          _this.celebrationSound.play();
          _this.addTheBall.destroy();
          _this.chnageFrame1();
          _this.starActions(_this.count1);
        });
        _this.time.events.add(4000, function () {
          if (_this.addTheBall) _this.addTheBall.destroy();
          _this.NextQuestion1();
        });
      } else {
        _this.noofAttempts++;
        _this.wrongSound.play();
        _this.chnageFrame1();
        _this.addTheBall.destroy();
        _this.keepCount++;
        if (_this.keepCount >= _this.arrayRN1.length) {
          console.log("Splice and check");
          _this.keepCount = 0;
        }
        _this.addTheBallScreen();
      }
    } else if (
      (distance >= 180 && distance <= 260) ||
      (distance >= 120 && distance <= 180) ||
      (distance >= 75 && distance <= 120) ||
      distance < 75
    ) {
      //0x87ceeb - blue
      _this.addTheBall.inputEnabled = false;
      _this.frame_change.play();
      _this.greenCircle.frame = 1;
      _this.orangeCircle.frame = 1;
      _this.yellowCircle.frame = 1;
      _this.blueCircle.frame = 1;

      console.log("All Circle");

      _this.correctAnswerArray();
      _this.time.events.add(2000, function () {
        _this.celebrationSound.play();
        _this.addTheBall.destroy();
        _this.chnageFrame1();
        _this.starActions(_this.count1);
      });
      _this.time.events.add(4000, function () {
        if (_this.addTheBall) _this.addTheBall.destroy();
        _this.NextQuestion1();
      });
    } else {
      _this.noofAttempts++;
      _this.wrongSound.play();
      _this.chnageFrame1();
      _this.addTheBall.destroy();
      _this.keepCount++;
      if (_this.keepCount >= _this.arrayRN1.length) {
        console.log("Splice and check");
        _this.keepCount = 0;
      }
      _this.addTheBallScreen();
    }
  },

  correctAnswerArray: function () {
    //* Removing the equation from the array after correct answer
    //* so it will not repeat with the other

    _this.arrayRN1.splice(_this.keepCount, 1);
    console.log(_this.arrayRN1, " after slice");
    _this.rnArray1.splice(_this.keepCount, 1);
    console.log(_this.rnArray1, " after slice");

    if (_this.keepCount >= _this.arrayRN1.length) {
      console.log("Splice and check");
      _this.keepCount = 0;
    }
  },

  correctAnswerArray1: function () {
    //* Removing the equation from the array after correct answer
    //* so it will not repeat with the other
    _this.arrayRN.splice(_this.keepCount, 1);
    console.log(_this.arrayRN, " after slice");
    _this.rnArray.splice(_this.keepCount, 1);
    console.log(_this.rnArray, " after slice");

    if (_this.keepCount >= _this.arrayRN.length) {
      console.log("Splice and check");
      _this.keepCount = 0;
    }
  },

  DisplayQuestion: function () {
    //* Part A first screen
    _this.Question_flag = 1;

    if (_this.count1 == 0) _this.Ask_Question1.play();
    _this.panel = _this.add.image(20, 65, "panel"); //the blue panel
    _this.scale = _this.add.image(16, 410, "scale");

    // _this.addTheBallGroup = _this.add.group();
    _this.no3 = _this.add.text(860, 445, "+3");
    _this.applyingStyle2(_this.no3);
    _this.no2 = _this.add.text(720, 445, "+2");
    _this.applyingStyle2(_this.no2);
    _this.no1 = _this.add.text(580, 445, "+1");
    _this.applyingStyle2(_this.no1);
    _this.no0 = _this.add.text(458, 445, "0"); //374, 445,
    _this.applyingStyle2(_this.no0);
    _this.nominus1 = _this.add.text(312, 445, "-1");
    _this.applyingStyle2(_this.nominus1);
    _this.nominus2 = _this.add.text(172, 445, "-2");
    _this.applyingStyle2(_this.nominus2);
    _this.nominus3 = _this.add.text(32, 445, "-3");
    _this.applyingStyle2(_this.nominus3);

    _this.askQuestion();
  },

  askQuestion: function () {
    //* Adding then ball and tween to it
    //* adding drag property to it
    //* Decide the color of the ball
    // _this.addTheBallGroup = _this.add.group();
    if (_this.rnArray[_this.keepCount] == 0) {
      _this.colorBall = "RedBall";
    } else if (_this.rnArray[_this.keepCount] == 1) {
      _this.colorBall = "pinkBall";
    } else if (_this.rnArray[_this.keepCount] == 2) {
      _this.colorBall = "greenBall";
    }

    _this.addTheBall = _this.add.sprite(600, 10, _this.colorBall);
    // _this.addTheBallGroup.addChild(_this.addTheBall);
    _this.addTheBall.inputEnabled = true;
    _this.addTheBall.input.enableDrag(true);
    _this.addTheBall.events.onDragUpdate.add(function () {
      _this.tweenA.stop();
    });

    //* Add a mask in rectangle to cover the ball
    var numberLineMask = _this.add.graphics(0, 0);

    // Draw the triangle on the graphics object
    numberLineMask.beginFill(0x65b4c3);
    numberLineMask.moveTo(10, 65);
    numberLineMask.lineTo(920, 65);
    numberLineMask.lineTo(920, 505);
    numberLineMask.lineTo(10, 505);
    numberLineMask.lineTo(10, 65);
    numberLineMask.endFill();

    numberLineMask.alpha = 0;
    _this.addTheBall.mask = numberLineMask;

    if (_this.rnArray[_this.keepCount] == 0) {
      console.log(_this.rnArray1[_this.keepCount], " is 3 ");
      _this.x = 50;
    } else if (_this.rnArray[_this.keepCount] == 1) {
      _this.x = 45;
    } else {
      _this.x = 37;
    }
    _this.rnEquation = _this.add.text(
      _this.x,
      65,
      _this.arrayRN[_this.keepCount]
    ); //val1 in yellow ball
    _this.applyingStyle1(_this.rnEquation);
    //  _this.addTheBallGroup.addChild(_this.rnEquation);
    _this.addTheBall.addChild(_this.rnEquation);
    _this.tweenA = _this.add
      .tween(_this.addTheBall)
      .to({ x: 600, y: 200 }, 5000, Phaser.Easing.Linear.None, true);
    _this.tweenA.onComplete.add(function () {
      _this.time.events.add(1000, function () {
        _this.addTheBall.destroy();

        _this.rnEquation.destroy();
        _this.keepCount++;
        if (_this.keepCount >= _this.arrayRN.length) {
          console.log("Splice and check");
          _this.keepCount = 0;
        }
        _this.askQuestion();
      });
    });

    _this.addTheBall.events.onDragStop.add(function () {
      _this.validateTheBall();
    });
  },

  validateTheBall: function () {
    //* validating the positio of the ball in part A
    if (_this.rnArray[_this.keepCount] == 0) {
      if (_this.arrayRN[_this.keepCount] == 0) {
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 390 &&
          _this.addTheBall.x <= 430
        ) {
          // _this.celebrationSound.play();
          _this.applyingStyle(_this.no0);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation
          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            // _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("0 ???/", _this.addTheBall.y);
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.arrayRN[_this.keepCount] == 1) {
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 525 &&
          _this.addTheBall.x <= 565
        ) {
          //_this.celebrationSound.play();
          _this.applyingStyle(_this.no1);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation
          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            // _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("1 >>>>", _this.addTheBall.y);
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.arrayRN[_this.keepCount] == 2) {
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 665 &&
          _this.addTheBall.x <= 705
        ) {
          // _this.celebrationSound.play();
          _this.applyingStyle(_this.no2);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            // _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("2 }}}", _this.addTheBall.y);
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.arrayRN[_this.keepCount] == 3) {
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 800 &&
          _this.addTheBall.x <= 840
        ) {
          //  _this.celebrationSound.play();//< 850,370
          _this.applyingStyle(_this.no3);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            //_this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("3 .....", _this.addTheBall.y);
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      }
    } else if (_this.rnArray[_this.keepCount] == 1) {
      if (_this.arrayRN[_this.keepCount] == -1) {
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 245 &&
          _this.addTheBall.x <= 290
        ) {
          // _this.celebrationSound.play();
          _this.applyingStyle(_this.nominus1);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            //   _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("-1 >>>>");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.arrayRN[_this.keepCount] == -2) {
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 100 &&
          _this.addTheBall.x <= 155
        ) {
          //  _this.celebrationSound.play();
          _this.applyingStyle(_this.nominus2);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            //  _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log(_this.addTheBall.x, "-2 >>>>");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      }
      if (_this.arrayRN[_this.keepCount] == -3) {
        console.log("-3 >>>");
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= -15 &&
          _this.addTheBall.x <= 30
        ) {
          //  _this.celebrationSound.play();
          _this.applyingStyle(_this.nominus3);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            // _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("-3 >>>>");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      }
    } else if (_this.rnArray[_this.keepCount] == 2) {
      if (_this.rnFinalAnswer == -2.5) {
        //* -2.5

        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 46 &&
          _this.addTheBall.x <= 71
        ) {
          //  _this.celebrationSound.play();
          // _this.applyingStyle(_this.nominus2);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation
          _this.addText = _this.add.text(105, 445, "-5");
          _this.applyingStyle(_this.addText);
          _this.addText1 = _this.add.text(115, 447, "_");
          _this.applyingStyle(_this.addText1);
          _this.addText2 = _this.add.text(115, 475, "2");
          _this.applyingStyle(_this.addText2);

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            // _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("-1 >>>>");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.rnFinalAnswer == 2.5) {
        //* 2.5

        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 740 &&
          _this.addTheBall.x <= 773
        ) {
          //_this.celebrationSound.play();
          //_this.applyingStyle(_this.no2);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation
          _this.addText = _this.add.text(810, 445, "5");
          _this.applyingStyle(_this.addText);
          _this.addText1 = _this.add.text(810, 447, "_");
          _this.applyingStyle(_this.addText1);
          _this.addText2 = _this.add.text(810, 475, "2");
          _this.applyingStyle(_this.addText2);

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            //_this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("2 }}}");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.rnFinalAnswer == -1.5) {
        //* -1.5

        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 187 &&
          _this.addTheBall.x <= 220
        ) {
          //  _this.celebrationSound.play();
          //  _this.applyingStyle(_this.nominus1);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation

          _this.addText = _this.add.text(245, 445, "-3");
          _this.applyingStyle(_this.addText);
          _this.addText1 = _this.add.text(255, 447, "_");
          _this.applyingStyle(_this.addText1);
          _this.addText2 = _this.add.text(255, 475, "2");
          _this.applyingStyle(_this.addText2);

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            // _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("-1 >>>>");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.rnFinalAnswer == 1.5) {
        //* 1.5

        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 595 &&
          _this.addTheBall.x <= 630
        ) {
          // _this.celebrationSound.play();
          //  _this.applyingStyle(_this.no1);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation
          _this.addText = _this.add.text(670, 445, "3");
          _this.applyingStyle(_this.addText);
          _this.addText1 = _this.add.text(670, 447, "_");
          _this.applyingStyle(_this.addText1);
          _this.addText2 = _this.add.text(670, 475, "2");
          _this.applyingStyle(_this.addText2);

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            //_this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("1 >>>>");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.rnFinalAnswer == -0.5) {
        //* -0.5

        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 323 &&
          _this.addTheBall.x <= 349
        ) {
          //_this.celebrationSound.play();
          //  _this.applyingStyle(_this.no1);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation

          _this.addText = _this.add.text(380, 445, "-1");
          _this.applyingStyle(_this.addText);
          _this.addText1 = _this.add.text(390, 447, "_");
          _this.applyingStyle(_this.addText1);
          _this.addText2 = _this.add.text(390, 475, "2");
          _this.applyingStyle(_this.addText2);

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            // _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("1 >>>>");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.rnFinalAnswer == 0.5) {
        //* 0.5

        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 463 &&
          _this.addTheBall.x <= 488
        ) {
          // _this.celebrationSound.play();
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation
          _this.addText = _this.add.text(530, 445, "1");
          _this.applyingStyle(_this.addText);
          _this.addText1 = _this.add.text(530, 447, "_");
          _this.applyingStyle(_this.addText1);
          _this.addText2 = _this.add.text(530, 475, "2");
          _this.applyingStyle(_this.addText2);

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            //_this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("1 >>>>");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.rnFinalAnswer == -3) {
        //* -3
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= -15 &&
          _this.addTheBall.x <= 30
        ) {
          //_this.celebrationSound.play();
          _this.applyingStyle(_this.nominus3);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            //_this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("-1 >>>>");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.rnFinalAnswer == 3) {
        //* 3
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 800 &&
          _this.addTheBall.x <= 830
        ) {
          //_this.celebrationSound.play();//< 850,370
          _this.applyingStyle(_this.no3);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            // _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("3 .....");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.rnFinalAnswer == -2) {
        //* -2
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 100 &&
          _this.addTheBall.x <= 130
        ) {
          //  _this.celebrationSound.play();
          _this.applyingStyle(_this.nominus2);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            //_this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("-1 >>>>");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.rnFinalAnswer == 2) {
        //* 2
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 670 &&
          _this.addTheBall.x <= 700
        ) {
          //_this.celebrationSound.play();
          _this.applyingStyle(_this.no2);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            // _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("2 }}}");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.rnFinalAnswer == -1) {
        //* -1
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 250 &&
          _this.addTheBall.x <= 280
        ) {
          // _this.celebrationSound.play();
          _this.applyingStyle(_this.nominus1);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation
          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            //  _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("-1 >>>>");
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      } else if (_this.rnFinalAnswer == 1) {
        //* 1
        if (
          _this.addTheBall.y >= 280 &&
          _this.addTheBall.y <= 440 &&
          _this.addTheBall.x >= 520 &&
          _this.addTheBall.x <= 550
        ) {
          //  _this.celebrationSound.play();
          _this.applyingStyle(_this.no1);
          _this.greenanim = _this.addTheBall.animations.add(
            _this.colorBall,
            [1, 2, 3, 6, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 22, 23, 24],
            true
          ); //start the blast animation

          _this.greenanim.play(22);
          _this.firecrack.play();
          _this.rnEquation.destroy();
          _this.greenanim.onComplete.add(function () {
            // _this.rnEquation.destroy();
            _this.celebrationSound.play();
            _this.addTheBall.destroy();
          });

          _this.starActions(_this.count1);
          _this.correctAnswerArray1();
          _this.time.events.add(1500, function () {
            _this.NextQuestion();
          });
        } else {
          _this.noofAttempts++;
          console.log("1 >>>>");
          _this.noofAttempts++;
          _this.wrongSound.play();
          _this.addTheBall.destroy();
          _this.rnEquation.destroy();
          _this.keepCount++;

          if (_this.keepCount >= _this.arrayRN.length) {
            console.log("Splice and check");
            _this.keepCount = 0;
          }
          _this.askQuestion();
        }
      }
    }
  },

  NextQuestion: function () {
    console.log("next question.......");
    //* it will decide the next question to display
    // _this.count1++;
    //  if (_this.numberOfQuestions == 3) _this.count1 = 0;
    if (_this.numberOfQuestions < 3) {
      _this.askQuestion(); //PartA
    } else if (_this.numberOfQuestions < 6) {
      _this.keepCount = 0;
      _this.time.events.add(1300, function () {
        _this.initialScreenDisplay();
      });

      //_this.initialScreenDisplay();//PartA
    } else {
      _this.timer1.stop();
      _this.timer1 = null;
      _this.time.events.add(1000, function () {
        _this.state.start('score', true, false, gameID, _this.microConcepts);
      });
    }
  },

  NextQuestion1: function () {
    //* it will decide the next question to display in part B
    if (_this.numberOfQuestions < 6) {
      _this.addTheBallScreen(); //PartA
    } else {
      _this.keepCount = 0;
      _this.hand_flag = 0;
      _this.fplayFlag = 0;
      _this.q_count = 0;

      _this.timer1.stop();
      _this.timer1 = null;
      _this.time.events.add(1000, function () {
        _this.state.start('score', true, false, gameID, _this.microConcepts);
      });
    }
  },

  applyingStyle: function (target) {
    target.align = "right";
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#65B4C3";
    target.fontWeight = "normal";
    target.visible = true;
  },

  applyingStyle2: function (target) {
    //target.align = 'right';
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#FF4433"; //#FF4433//FF5733
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "25px";
  },
  applyingStyle1: function (target) {
    //target.align = 'right';
    target.font = "Akzidenz-Grotesk BQ";
    target.fill = "#FFFFFF";
    target.fontWeight = "normal";
    target.visible = true;
    target.fontSize = "25px";
  },

  starActions: function (target) {

    _this.microConcepts = "Number SystemsG8";
    _this.sceneCount++;
    _this.noofAttempts++;
    telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

    _this.noofAttempts = 0;
    _this.AnsTimerCount = 0;
    console.log("starActions");
    // _this.celebrationSound.play();
    starAnim = _this.starsGroup.getChildAt(_this.numberOfQuestions);
    starAnim.smoothed = false;
    anim = starAnim.animations.add(
      "star",
      [0, 3, 6, 9, 12, 15, 17, 19, 22, 23, 24, 26, 28, 30, 32, 35],
      true
    ); //start the blast
    // anim = starAnim.animations.add('star');
    _this.numberOfQuestions++;
    anim.play(20);
    _this.count1++;
    anim.onComplete.add(function () {
      //starAnim.y = 10;
      _this.starsGroup.getChildAt(_this.numberOfQuestions - 1).frame = 35;
      //_this.forTween();
    });
  },

  shutdown: function () {
    _this.stopVoice();
    //RI.gotoEndPage();
    //telInitializerbbpp.tele_end();
  },

};
