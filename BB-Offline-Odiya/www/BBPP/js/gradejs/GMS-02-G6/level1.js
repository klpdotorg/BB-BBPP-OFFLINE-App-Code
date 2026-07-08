Game.GMS_02_G6level1 = function () { };


Game.GMS_02_G6level1.prototype = {

    init: function (param, score) {
        _this = this;

        this.Stararr = param;
        this.score = score;
        _this = this;
        _this.languageSelected = window.languageSelected;

        if (_this.languageSelected == null
            || _this.languageSelected == " "
            || _this.languageSelected == "") {
            _this.languageSelected = "English";
        }
        else console.log("Language selected: " + _this.languageSelected);


        _this.correctans = document.createElement('audio');
        _this.correctanssrc = document.createElement('source');
        _this.correctanssrc.setAttribute("src", window.baseUrl+ "sounds/celebration.mp3");
        _this.correctans.appendChild(_this.correctanssrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl+ "sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

        _this.wrongans = document.createElement('audio');
        _this.wronganssrc = document.createElement('source');
        _this.wronganssrc.setAttribute("src", window.baseUrl+ "sounds/WrongCelebrationSound.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.selecttile = document.createElement('audio');
        _this.selecttilesrc = document.createElement('source');
        _this.selecttilesrc.setAttribute("src", window.baseUrl+ "sounds/ClickSound.mp3");
        _this.selecttile.appendChild(_this.selecttilesrc);


        _this.askQ1 = _this.createAudio("GMS-02-G6A");
        _this.askQ2 = _this.createAudio("GMS-02-G6B");

         telInitializerbbpp.gameIdInit("GMS_02_G6",gradeSelected);
         console.log(gameID,"gameID...");
    },
    
    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl+"questionSounds/GMS-02-G6/" + _this.languageSelected + "/" + src + ".mp3");
        audio.appendChild(audiosrc);
        // audio.play();

        return audio;
    },

    create:function(game)
    {
        
        _this.hintBtn = _this.add.sprite(670,6,'bulb');
        _this.hintBtn.scale.setTo(0.5,0.6);
        _this.hintBtn.visible = false;
        //* show the demo video
       _this.time.events.add(1, function()
        {
           
            _this.ViewDemoVideo(); 
        });
        
        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(1500, function()
        {
            console.log("//////////////////")
            _this.gameCreate(game);
        });
    },
    
    ViewDemoVideo: function()
    {
        //* pause the game before going to the demovideo 
        _this.game.paused = true;
        _this.DemoVideo();  //* at the end of demo video/skip pressed, it will unpause the game.
    },

    gameCreate: function (game) {
        _this = this;
        _this.Stararr = [];
        _this.amplify = null;

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
      _this.microConcepts;
        // _this.grade;

        _this.wrongAnswer = false;

        _this.dragStarted = false;

        _this.crayonFrame = 0;
        _this.xdotCordinates = [440, 517, 594, 671, 748, 825];
        _this.ydotCordinates = [72, 145, 218, 290, 362, 435, 508];


        _this.no11 = 0;
        _this.count = 0;


        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;
        _this.count1 = 0;

        _this.minutes = 0;
        _this.seconds = 0;
        _this.counterForTimer = 0;

        _this.prevTarget = null;
        _this.currentTarget = null;

        _this.prev = [];
        // Stores ques asked for randomization
        _this.visited = [];
        _this.qArray = new Array();
        _this.qArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        _this.qArray = _this.shuffle(_this.qArray);

        _this.bg1 = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');

        _this.navBar = game.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(10, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
          //  _this.stopVoice();
            _this.time.events.removeAll();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50, function () {
                _this.state.start('grade6Geometry', true, false);
            });
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                _this.selecttile.play();
                // console.log("speaker btn clicked")
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                if (_this.qn_flag == 1) {

                    _this.askQ1.play();
                    _this.time.events.add(2000, function () {
                        _this.speakerbtnClicked = false;
                        _this.EnableVoice();
                    });
                }
                if (_this.qn_flag == 2) {

                    _this.askQ2.play();
                    _this.time.events.add(6500, function () {
                        _this.speakerbtnClicked = false;
                        _this.EnableVoice();
                    });
                }



            }

        }, _this);

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

         //bulb 
        //  _this.hintBtn = _this.add.sprite(670,6,'bulb');
        //  _this.hintBtn.scale.setTo(0.5,0.6);
        _this.hintBtn.bringToTop();
        _this.hintBtn.visible = true;
         _this.hintBtn.smoothed = false;
         _this.hintBtnAnim = _this.hintBtn.animations.add('hint');
         _this.hintBtnAnim.play(15);
         _this.hintBtnAnim.onComplete.add(function () {
             _this.hintBtnAnim.play(15);
         }, _this);
         _this.hintBtn.inputEnabled = true;
         _this.hintBtn.input.useHandCursor = true;
 
         _this.hintBtn.events.onInputDown.add(function () {
             console.log("inside hintbutton function"); 
             //* show the demo video
             _this.hintBtn.inputEnabled = false;
             _this.hintBtn.input.useHandCursor = false; 
             _this.time.events.add(1, function()
             {
                 _this.ViewDemoVideo(); 
             });
            
         });

        _this.generateStarsForTheScene(6);

        _this.getQuestion();



    },
    //* function to enable the speaker button once pressed.
    EnableVoice: function () {
        if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
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
                _this.seconds = 00;
            }
            else {
                _this.minutes = _this.minutes + 1;
            }
        }
        else {
            if (_this.counterForTimer < 10)
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes + ':' + _this.seconds);
    },

    getQuestion: function (target1) {
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

        /*******************For Navigation Bar*********************/
        _this.timer1 = _this.time.create(false);

        _this.timer1.loop(1000, function () {
            _this.updateTimer();
        }, _this);

        _this.timer1.start();
        _this.randomization();

        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;

        _this.questionid = 1;

    },


    shuffle: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

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
    generateStarsForTheScene: function (count) {
        _this.starsGroup = _this.add.group();
        for (var i = 0; i < count; i++) {
            _this.starsGroup.create(_this.world.centerX - 15, 10, 'starAnim');
            for (var j = 0; j < i; j++) {
                if (_this.starsGroup.getChildAt(j)) {
                    _this.starsGroup.getChildAt(j).x -= 15;
                    _this.starsGroup.getChildAt(i).x += 15;
                }
            }
        }

    },
    // _this.xdotCordinates = [55, 132, 209, 286, 363, 440, 517, 594, 671, 748, 825];
    // _this.ydotCordinates = [72, 145, 218, 290, 362, 435, 508];
    RevIsoTriangle: function () {
        poly = new Phaser.Polygon();
        poly.setTo([new Phaser.Point(286, 72), new Phaser.Point(594, 72), new Phaser.Point(440, 435), new Phaser.Point(286, 72)]);

        _this.graphicsImg = _this.add.graphics();
        _this.graphicsImg.lineStyle(12, 0x65B4C3, 1);
        _this.graphicsImg.drawPolygon(poly.points);
        _this.graphicsImg.endFill();

        _this.CorrectAnsArr = ['44072440435', '44043544072'];
        _this.DisableAllDots();
        _this.enableRIsoEdges();
        _this.CorrectVal = 1;
        // _this.numm = 1

    },
    ScaleneTraingle: function () {
        poly = new Phaser.Polygon();
        // poly.setTo([new Phaser.Point(209, 362), new Phaser.Point(286, 145), new Phaser.Point(671, 362), new Phaser.Point(209, 362)]);

        poly.setTo([new Phaser.Point(209, 362), new Phaser.Point(363, 145), new Phaser.Point(671, 362), new Phaser.Point(209, 362)]);

        _this.graphicsImg = _this.add.graphics();
        _this.graphicsImg.lineStyle(12, 0x65B4C3, 1);
        _this.graphicsImg.drawPolygon(poly.points);
        _this.graphicsImg.endFill();

        _this.CorrectAnsArr = [''];
        _this.DisableAllDots();
        _this.enableScaEdges();
        _this.CorrectVal = 0;
    },
    BaseIsoTriangle: function () {
        poly = new Phaser.Polygon();

        poly.setTo([new Phaser.Point(671, 145), new Phaser.Point(671, 435), new Phaser.Point(209, 290), new Phaser.Point(671, 145)]);
        _this.graphicsImg = _this.add.graphics();
        _this.graphicsImg.lineStyle(12, 0x65B4C3, 1);
        _this.graphicsImg.drawPolygon(poly.points);
        _this.graphicsImg.endFill();

        _this.CorrectAnsArr = ['209290671290', '671290209290'];
        _this.DisableAllDots();
        _this.enableBIsoEdges();
        _this.CorrectVal = 1;

    },
    IsoTraingle: function () {

        poly = new Phaser.Polygon();
        // poly.setTo([new Phaser.Point(209, 362), new Phaser.Point(671, 362), new Phaser.Point(440, 145) , new Phaser.Point(209, 362)]);
        // poly.setTo([new Phaser.Point(286, 435), new Phaser.Point(594, 435), new Phaser.Point(440, 145) , new Phaser.Point(286, 435)]);

        poly.setTo([new Phaser.Point(286, 435), new Phaser.Point(594, 435), new Phaser.Point(440, 72), new Phaser.Point(286, 435)]);
        _this.graphicsImg = _this.add.graphics();
        _this.graphicsImg.lineStyle(12, 0x65B4C3, 1);
        _this.graphicsImg.drawPolygon(poly.points);
        _this.graphicsImg.endFill();

        _this.CorrectAnsArr = ['44072440435', '44043544072'];
        _this.DisableAllDots();
        _this.enableIsoEdges();
        _this.CorrectVal = 1;

    },
    EqTriangleImage: function () {
        poly = new Phaser.Polygon();
        poly.setTo([new Phaser.Point(286, 435), new Phaser.Point(594, 435), new Phaser.Point(440, 145), new Phaser.Point(286, 435)]);

        _this.graphicsImg = _this.add.graphics();
        _this.graphicsImg.lineStyle(12, 0x65B4C3, 1);
        _this.graphicsImg.drawPolygon(poly.points);
        _this.graphicsImg.endFill();

        _this.CorrectAnsArr = ['440145440435', '286435517290', '594435363290', '440435440145', '363290594435', '517290286435'];
        _this.DisableAllDots();
        _this.enableEqEdges();

        _this.CorrectVal = 3;  //Number of symmtery

    },
    HexagonImage: function () {
        poly = new Phaser.Polygon();
        poly.setTo([new Phaser.Point(363, 145), new Phaser.Point(209, 290), new Phaser.Point(363, 435), new Phaser.Point(517, 435), new Phaser.Point(671, 290), new Phaser.Point(517, 145), new Phaser.Point(363, 145)]);
        _this.graphicsImg = _this.add.graphics();
        _this.graphicsImg.lineStyle(12, 0x65B4C3, 1);
        _this.graphicsImg.drawPolygon(poly.points);
        _this.graphicsImg.endFill();
        _this.CorrectAnsArr = ['440145440435', '209290671290', '440435440145', '671290209290'];
        _this.DisableAllDots();
        _this.enableHexEdges();
        _this.CorrectVal = 2;
    },
    SquareImage: function () {
        _this.graphicsImg = _this.add.graphics();
        _this.graphicsImg.lineStyle(12, 0x65B4C3, 1);
        _this.graphicsImg.drawRect(286, 75 + 70, 77 * 4, 72 * 4);


        _this.DisableAllDots();
        _this.enableSqEdges();

        _this.CorrectAnsArr = ["286145594435", "286435594145", "286290594290", "440145440435", "594435286145", "440435440145", "594145286435", "594290286290"];

        _this.CorrectVal = 4;  //Number of symmtery

    },
    RhombusImage: function () {
        poly = new Phaser.Polygon();
        poly.setTo([new Phaser.Point(209, 435), new Phaser.Point(517, 435), new Phaser.Point(671, 145), new Phaser.Point(363, 145), new Phaser.Point(209, 435)]);
        _this.graphicsImg = _this.add.graphics();
        _this.graphicsImg.lineStyle(12, 0x65B4C3, 1);
        _this.graphicsImg.drawPolygon(poly.points);
        _this.graphicsImg.endFill();
        _this.CorrectAnsArr = ['363145517435', '209435671145', '517435363145', '671145209435'];
        _this.DisableAllDots();
        _this.enableRhEdges();
        _this.CorrectVal = 2;
    },
    KiteImage: function () {
        poly = new Phaser.Polygon();
        poly.setTo([new Phaser.Point(440, 435), new Phaser.Point(286, 145), new Phaser.Point(440, 72), new Phaser.Point(594, 145), new Phaser.Point(440, 435)]);

        _this.graphicsImg = _this.add.graphics();
        _this.graphicsImg.lineStyle(12, 0x65B4C3, 1);

        _this.graphicsImg.drawPolygon(poly.points);
        _this.graphicsImg.endFill();

        _this.CorrectAnsArr = ['44072440435', '44043544072']
        _this.DisableAllDots();
        _this.enableKiteEdges();


        _this.CorrectVal = 1;

    },
    PlusImage: function () {
        poly = new Phaser.Polygon();
        poly.setTo([new Phaser.Point(363, 435), new Phaser.Point(517, 435), new Phaser.Point(517, 362), new Phaser.Point(594, 362), new Phaser.Point(594, 218), new Phaser.Point(517, 218), new Phaser.Point(517, 145), new Phaser.Point(363, 145), new Phaser.Point(363, 218), new Phaser.Point(286, 218), new Phaser.Point(286, 362), new Phaser.Point(363, 362), new Phaser.Point(363, 435)]);

        _this.graphicsImg = _this.add.graphics();
        _this.graphicsImg.lineStyle(12, 0x65B4C3, 1);

        _this.graphicsImg.drawPolygon(poly.points);
        _this.graphicsImg.endFill();
        _this.CorrectAnsArr = ['440145440435', '286290594290', '363218517362', '363362517218', '517362363218', '517218363362', '594290286290', '440435440145'];
        _this.DisableAllDots();
        _this.enablePlusImage();
        _this.CorrectVal = 4;
    },
    FlowerImage: function () {
        _this.FlowerImg = _this.add.image(280, 135, 'flower1');
        _this.FlowerImg.scale.setTo(0.9)
        _this.DisableAllDots();
        _this.enableFlower();
        _this.CorrectAnsArr = ['440145440435', '286290594290', '440435440145', '594290286290', '286145594435', '594435286145', '594145286435', '286435594145'];
        _this.CorrectVal = 4

    },
    ButterflyImage: function () {
        //  _this.ButterflyImg = _this.add.image(240,118,'butterfly');
        _this.ButterflyImg = _this.add.image(260, 135, 'butterfly1');

        _this.ButterflyImg.scale.setTo(0.9)

        _this.DisableAllDots();
        _this.enableButterfly();
        _this.CorrectAnsArr = ['440362440218', '440218440362', '440435440145', '440145440435']

        _this.CorrectVal = 1;
        _this.bcorrect = false;
        _this.bindex = 0;;
        // if(_this.k==0){
        _this.row_graphics61.getChildAt(4).y += 3;
        _this.row_graphics61.getChildAt(4).alpha = 1;
        _this.row_graphics61.getChildAt(4).initialYvalue += 3;

        _this.row_graphics61.getChildAt(6).y += 3;
        _this.row_graphics61.getChildAt(6).alpha = 1;
        _this.row_graphics61.getChildAt(6).initialYvalue += 3;

        //    }


    },
    randomization: function () {
        _this.noofAttempts =0;
        _this.AnsTimerCount =0;
        _this.sceneCount ++;

        _this.qn_flag = 1;
        
        if (_this.no11 == 0)  _this.askQ1.play();   //* play audio for first question only
        // Unique colors for symmetry lines
        _this.colorsArr = [' 0x3CB371', '0xFF1493', '0xFF0000', '0x80080', '0xFFFF00', '0x808000', '0xFFA500'];
        _this.colorsArr = _this.shuffle(_this.colorsArr);
        _this.k = 0;

        _this.board = _this.add.sprite(_this.world.centerX - 40, _this.world.centerY + 20, 'GMS_02_G6_Board');
        _this.board.anchor.setTo(0.5);
        _this.greenSprites();
        _this.displayTick();
        _this.NullCount = 0;
        _this.noofDrops = 0;
        _this.objDelArray = [];
        _this.FselectedArr = [];
        _this.askedHrV2 = false;

        // _this.qArray[_this.no11] = 10
        switch (_this.qArray[_this.no11]) {
            case 1: {

                _this.FlowerImage();
                break;
            }
            case 2: _this.SquareImage();
                break;
            case 3: _this.RhombusImage();
                break;
            case 4: _this.HexagonImage();
                break;
            case 5: _this.IsoTraingle();
                break;
            case 6: _this.KiteImage();
                break;
            case 7: _this.PlusImage();
                break;
            case 8: _this.BaseIsoTriangle();
                break;
            case 9: _this.RevIsoTriangle();
                break;
            case 10: _this.ButterflyImage();
                break;
            case 11: _this.EqTriangleImage();
                break;
            case 12: _this.ScaleneTraingle();
                break;
        }

    },

    greenSprites: function () {

        _this.objDelGroup = _this.add.group();
        _this.currentGrp = _this.add.group();
        _this.selectedAns = _this.add.group();
        // _this.selectedAns1 = _this.add.group();
        _this.additionalGraphics = _this.add.group();
        // _this.additionaldots = _this.add.group();
        // _this.additionaldots1 = _this.add.group();


        _this.FselectedArr = [];
        _this.NullCount = 0;

        _this.row_graphics1 = _this.add.group();
        _this.row_graphics2 = _this.add.group();
        _this.row_graphics3 = _this.add.group();
        _this.row_graphics4 = _this.add.group();
        _this.row_graphics5 = _this.add.group();
        _this.row_graphics6 = _this.add.group();
        _this.row_graphics7 = _this.add.group();

        _this.row_graphics11 = _this.add.group();
        _this.row_graphics21 = _this.add.group();
        _this.row_graphics31 = _this.add.group();
        _this.row_graphics41 = _this.add.group();
        _this.row_graphics51 = _this.add.group();
        _this.row_graphics61 = _this.add.group();
        _this.row_graphics71 = _this.add.group();

        /*------------------------------------Row Sprites---------------------------------------*/
        //1st Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY - 198);
            _this.row_graphics.beginFill(0xFFFFFF, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;

            _this.row_graphics11.add(_this.row_graphics);


            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY - 198);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics1-" + i;
            _this.row_graphics.rowname = '1';
            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics1.add(_this.row_graphics);

            _this.row_graphics1.getChildAt(i).inputEnabled = true;
            _this.row_graphics1.getChildAt(i).useHandCursor = true;


            _this.row_graphics1.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics1.getChildAt(i).input.enableDrag(true)
            _this.row_graphics1.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics1.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);

            x += 76;
            graph1 += 76;
        }

        //2nd Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY - 125);
            _this.row_graphics.beginFill(0xFFFFFF, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;

            _this.row_graphics21.add(_this.row_graphics)

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY - 125);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics2-" + i;
            _this.row_graphics.rowname = '2';

            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics2.add(_this.row_graphics);

            _this.row_graphics2.getChildAt(i).inputEnabled = true;
            _this.row_graphics2.getChildAt(i).useHandCursor = true;
            _this.row_graphics2.getChildAt(i).input.enableDrag(true)


            _this.row_graphics2.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics2.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics2.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);

            x += 76;
            graph1 += 76;
        }

        //3rd Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY - 52);
            _this.row_graphics.beginFill(0xFFFFFF, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;



            _this.row_graphics31.add(_this.row_graphics)

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY - 52);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics3-" + i;
            _this.row_graphics.rowname = '3';

            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics3.add(_this.row_graphics);

            _this.row_graphics3.getChildAt(i).inputEnabled = true;
            _this.row_graphics3.getChildAt(i).useHandCursor = true;
            _this.row_graphics3.getChildAt(i).input.enableDrag(true)


            _this.row_graphics3.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics3.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics3.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);

            x += 76;
            graph1 += 76;
        }

        //4th Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 20);
            _this.row_graphics.beginFill(0xFFFFFF, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;


            _this.row_graphics41.add(_this.row_graphics)


            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 20);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics4-" + i;
            _this.row_graphics.rowname = '4';

            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics4.add(_this.row_graphics);

            _this.row_graphics4.getChildAt(i).inputEnabled = true;
            _this.row_graphics4.getChildAt(i).useHandCursor = true;
            _this.row_graphics4.getChildAt(i).input.enableDrag(true)


            _this.row_graphics4.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics4.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics4.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);

            x += 76;
            graph1 += 76;
        }

        //5th Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 92);
            _this.row_graphics.beginFill(0xFFFFFF, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;



            _this.row_graphics51.add(_this.row_graphics)

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 92);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics5-" + i;
            _this.row_graphics.rowname = '5';

            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics5.add(_this.row_graphics);

            _this.row_graphics5.getChildAt(i).inputEnabled = true;
            _this.row_graphics5.getChildAt(i).useHandCursor = true
            _this.row_graphics5.getChildAt(i).input.enableDrag(true);

            _this.row_graphics5.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics5.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics5.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);

            x += 76;
            graph1 += 76;
        }

        //6th Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 165);
            _this.row_graphics.beginFill(0xFFFFFF, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;


            _this.row_graphics61.add(_this.row_graphics)

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 165);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics6-" + i;
            _this.row_graphics.rowname = '6';

            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics6.add(_this.row_graphics);

            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics6.getChildAt(i).useHandCursor = true;
            _this.row_graphics6.getChildAt(i).input.enableDrag(true)

            _this.row_graphics6.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics6.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics6.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);


            x += 76;
            graph1 += 76;
        }

        //7th Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 11; i++) {

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 238);
            _this.row_graphics.beginFill(0xFFFFFF, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.allowDrag = true;



            _this.row_graphics71.add(_this.row_graphics)

            _this.row_graphics = _this.add.graphics(_this.world.centerX - 385 + graph1 + i, _this.world.centerY + 238);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 32);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics7-" + i;
            _this.row_graphics.rowname = '7';

            _this.row_graphics.initialXvalue = _this.row_graphics.x;
            _this.row_graphics.initialYvalue = _this.row_graphics.y;

            _this.row_graphics.boundsPadding = 0;
            _this.row_graphics7.add(_this.row_graphics);

            _this.row_graphics7.getChildAt(i).inputEnabled = true;
            _this.row_graphics7.getChildAt(i).useHandCursor = true;
            _this.row_graphics7.getChildAt(i).input.enableDrag(true)


            _this.row_graphics7.getChildAt(i).events.onInputDown.add(function (target) {
                console.log("IIIIIIIIIII inputdown..."); target.alpha = 1;
            });
            _this.row_graphics7.getChildAt(i).events.onDragUpdate.add(_this.dragupdate, _this);
            _this.row_graphics7.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);


            x += 76;
            graph1 += 76;
        }


    },

    enableTargetDots: function () {
        switch (_this.qArray[_this.no11]) {
            case 1: {
                _this.enableFlower();

                break;
            }
            case 2: _this.enableSqEdges();
                break;
            case 3: _this.enableRhEdges();
                break;
            case 4: _this.enableHexEdges();
                break;
            case 5: _this.enableIsoEdges();
                break;
            case 6: _this.enableKiteEdges();
                break;
            case 7: _this.enablePlusImage();
                break;
            case 8: _this.enableBIsoEdges();
                break;
            case 9: _this.enableRIsoEdges();
                break;
            case 10: _this.enableButterfly();
                break;
            case 11: _this.enableEqEdges();
                break;
            case 12: _this.enableScaEdges();
                break;
        }
    },
    displayTick: function () {

        // Adding Eraser
        // _this.eraser = _this.add.sprite(_this.world.centerX + 420, _this.world.centerY - 20, 'Eraser');
        // _this.eraser.scale.setTo(0.7);
        // // _this.eraser.rotation = 75;
        // _this.eraser.angle += 90;
        // _this.eraser.anchor.setTo(0.5);
        // _this.eraser.inputEnabled = true;
        // _this.eraser.input.enableDrag(true);
        // _this.eraser.input.useHandCursor = true;
        // // _this.row_graphics3.getChildAt(i).events.onDragStop.add(_this.dragstop, _this);

        // _this.eraser.events.onDragStop.add(_this.deleteLines, _this);
        // _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);


        _this.tickMark = _this.add.sprite(_this.world.centerX + 420, _this.world.centerY + 25, 'GMS_02_G6_TickMark');
        _this.tickMark.scale.setTo(0.8);
        _this.tickMark.anchor.setTo(0.5);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.tickMarkclicked, _this);

    },
    numberPad1: function () {
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);

        bottomnumpadbg.name = "numpadbg";

        _this.x = 60;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;

        for (var i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.7, 0.7);
            _this.numbg.name = i + 1;
            _this.numbg.frame = i;
            if (_this.numbg.name == 10)
                _this.numbg.name = 0;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked, _this);

            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 10;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.7, 0.7);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.erasebtnClicked, _this);

        _this.tickMark = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.tickMark.frame = 11;
        _this.tickMark.anchor.setTo(0.5);
        _this.tickMark.scale.setTo(0.7, 0.7);
        _this.tickMark.name = "rightbtn";
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.tickMarkclicked, _this);

        _this.numpadTween = _this.add.tween(_this.numGroup);
        //tween in the number pad after a second.
        _this.tweenNumPad();

    },

    erasebtnClicked: function (target) {

        _this.selecttile.play();

        if (_this.enterFractionBox1.frame == 1) {
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            // _this.enterFractionBox1.frame = 1;

            _this.enterTxt1 = null;
            _this.enablebox();
        }

    },
    enablebox: function () {

        _this.selectedAns1 = '';
        _this.enterFractionBox1.frame = 1;
        _this.numerator = true;
        _this.enterFractionBox1.inputEnabled = true;
        _this.enterFractionBox1.input.useHandCursor = true;

    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);
    },
    numClicked: function (target) {
        _this.selecttile.play();

        //console.log("Number clicked is ", target.name);
        if (!_this.selectedAns1 || _this.selectedAns == '')
            _this.selectedAns1 = target.name;
        var_selectedAns1 = _this.selectedAns1;

        if (_this.numerator == true) {
            //console.log("numer")
            _this.numerator = false;
            _this.enterFractionBox1.frame = 1;

            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.enterTxt1 = _this.add.text(18, 6, "" + var_selectedAns1, { fontSize: '32px' });//36 23
            _this.enterTxt1.name = Number('' + var_selectedAns1);
            _this.enterFractionBox1.addChild(_this.enterTxt1);
            _this.enterFractionBox1.name = _this.enterTxt1.name;
            _this.enterTxt1.align = 'right';
            _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt1.fill = '#65B4C3';
            _this.enterTxt1.fontWeight = 'Normal';
            _this.enterTxt1.visible = true;


        }

    },
    displayNumberbox1: function () {

        // To shift downwards
        _this.yellowbox = _this.add.image(_this.world.centerX + 385, _this.world.centerY - 25, 'yellowtextbox');

        // _this.yellowbox = _this.add.image(_this.world.centerX + 385, _this.world.centerY - 140, 'yellowtextbox');
        _this.yellowbox.scale.setTo(1.3, 0.9);
        _this.yellowbox.visible = true;
        _this.numerator = true;

        // To shift downwards
        _this.enterFractionBox1 = _this.add.sprite(_this.world.centerX + 394, _this.world.centerY - 10, 'SquareBox');//825 230

        // _this.enterFractionBox1 = _this.add.sprite(_this.world.centerX + 395, _this.world.centerY - 130, 'SquareBox');//825 230
        _this.enterFractionBox1.scale.setTo(0.95);
        _this.enterFractionBox1.visible = true;
        _this.enterFractionBox1.frame = 1;

    },
    tickMarkclicked: function () {

        _this.selecttile.play();
        _this.correct = true;
        _this.tickMark.inputEnabled = false;

        if (_this.part2 != true) {
            // disable edges
            _this.DisableAllDots();


            if ((_this.FselectedArr.length - _this.NullCount != (_this.CorrectVal))) {
                _this.enableTargetDots();  //Change depending on ques
                _this.correct = false;
                _this.wrongans.play();
                _this.tickMark.inputEnabled = true

            }
            else {
                for (var i = 0; i < _this.FselectedArr.length; i++) {

                    if (_this.FselectedArr[i] == null || _this.CorrectAnsArr.includes(_this.FselectedArr[i])) {

                    }
                    else {
                        console.log("i=", i, _this.FselectedArr[i])
                        _this.correct = false;
                        _this.enableTargetDots;  //Change depending on ques
                        _this.wrongans.play();
                        _this.tickMark.inputEnabled = true


                        break;
                    }
                }

            }
            if (_this.correct == true) {
                _this.counterCelebrationSound.pause();
                _this.counterCelebrationSound.currentTime = 0
                _this.wrongans.pause();
                _this.wrongans.currentTime = 0;


                _this.counterCelebrationSound.play();
                _this.tickMark.destroy();

                _this.numberPad1();
                _this.displayNumberbox1();
                _this.qn_flag = 2;
                _this.time.events.add(1500, () => {
                    _this.tickMark.inputEnabled = true;
                    if (_this.no11 == 0)  _this.askQ2.play();

                })
                _this.part2 = true;

            }
        }
        else if (_this.part2 == true) {
            if (_this.selectedAns1 == _this.CorrectVal) {
                // Correct Anwer;
                _this.noofAttempts ++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.part2 = false;
                _this.enterFractionBox1.frame = 0;
                _this.correctans.play();
                _this.correctAns();
            }
            else {
                _this.noofAttempts ++;
                _this.wrongans.play();
                _this.tickMark.inputEnabled = true;

                _this.erasebtnClicked();
            }
        }


    },

    starActions: function (target) {

        // if (_this.no11 >= 0) {
        _this.score ++;
        starAnim = _this.starsGroup.getChildAt(_this.no11);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');

        // //* star Actions changes
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "GMS_02_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Shapes";
        _this.microConcepts = "Geometry";
        
        anim.play();
        _this.no11++;

        // }
        // else
        //     _this.count1++;

    },
    correctAns: function () {

        if (_this.no11 < 5) {

            _this.starActions(_this.no11);
            _this.time.events.add(2000, _this.eraseAll);
            _this.time.events.add(3000, _this.randomization);

        }
        else {
            _this.starActions(_this.no11);

            _this.time.events.add(2000, _this.eraseAll);
            _this.time.events.add(2500, () => {
                //_this.state.start('score', true, false);
                _this.state.start('score', true, false,gameID,_this.microConcepts);

            })
        }

    },
    wrongAns: function () {

        for (i = 0; i < _this.objDelArray.length; i++) {
            if (_this.objDelArray[i] != null) {
                _this.objDelArray[i].destroy();

            }
        }
        _this.clearObjects();
        _this.tickMark.inputEnabled = true;

    },
    clearObjects: function () {
        _this.objDelArray = [];
        _this.FselectedArr = [];
        _this.NullCount = 0;
        _this.correct = true;
        _this.hasprevvalue = false;
        _this.repeatedline = false;
        _this.tickMark.inputEnabled = true;

    },
    enableScaEdges: function () {
        _this.row_graphics2.getChildAt(4).inputEnabled = true;
        _this.row_graphics21.getChildAt(4).allowDrag = true;
        for (i = 2; i < 9; i++) {

            _this.row_graphics5.getChildAt(i).inputEnabled = true;
            _this.row_graphics51.getChildAt(i).allowDrag = true;

        }
        _this.row_graphics3.getChildAt(3).inputEnabled = true;
        _this.row_graphics31.getChildAt(3).allowDrag = true;
        _this.row_graphics3.getChildAt(5).inputEnabled = true;
        _this.row_graphics31.getChildAt(5).allowDrag = true;

        _this.row_graphics4.getChildAt(3).inputEnabled = true;
        _this.row_graphics41.getChildAt(3).allowDrag = true;
        _this.row_graphics4.getChildAt(7).inputEnabled = true;
        _this.row_graphics41.getChildAt(7).allowDrag = true;



    },
    enableHexEdges: function () {
        _this.enableFlower();
        _this.row_graphics4.getChildAt(3).inputEnabled = false;
        _this.row_graphics41.getChildAt(3).allowDrag = false;
        _this.row_graphics4.getChildAt(7).inputEnabled = false
        _this.row_graphics41.getChildAt(7).allowDrag = false;

        _this.row_graphics4.getChildAt(2).inputEnabled = true;
        _this.row_graphics41.getChildAt(2).allowDrag = true;
        _this.row_graphics4.getChildAt(8).inputEnabled = true;
        _this.row_graphics41.getChildAt(8).allowDrag = true;


    },
    enableButterfly: function () {
        _this.row_graphics5.getChildAt(5).inputEnabled = true;
        _this.row_graphics51.getChildAt(5).allowDrag = true;

        _this.row_graphics3.getChildAt(5).inputEnabled = true;
        _this.row_graphics31.getChildAt(5).allowDrag = true;

        _this.row_graphics2.getChildAt(3).inputEnabled = true;
        _this.row_graphics21.getChildAt(3).allowDrag = true;
        _this.row_graphics2.getChildAt(7).inputEnabled = true;
        _this.row_graphics21.getChildAt(7).allowDrag = true;

        _this.row_graphics2.getChildAt(4).inputEnabled = true;
        _this.row_graphics21.getChildAt(4).allowDrag = true;
        _this.row_graphics2.getChildAt(6).inputEnabled = true;
        _this.row_graphics21.getChildAt(6).allowDrag = true;


        _this.row_graphics3.getChildAt(3).inputEnabled = true;
        _this.row_graphics31.getChildAt(3).allowDrag = true;

        _this.row_graphics3.getChildAt(7).inputEnabled = true;
        _this.row_graphics31.getChildAt(7).allowDrag = true;


        _this.row_graphics4.getChildAt(3).inputEnabled = true;
        _this.row_graphics41.getChildAt(3).allowDrag = true;


        _this.row_graphics41.getChildAt(7).allowDrag = true;


        _this.row_graphics6.getChildAt(4).inputEnabled = true;
        _this.row_graphics61.getChildAt(4).allowDrag = true;
        _this.row_graphics6.getChildAt(6).inputEnabled = true;
        _this.row_graphics61.getChildAt(6).allowDrag = true;
        _this.row_graphics2.getChildAt(5).inputEnabled = true;
        _this.row_graphics21.getChildAt(5).allowDrag = true;

        _this.row_graphics6.getChildAt(5).inputEnabled = true;
        _this.row_graphics61.getChildAt(5).allowDrag = true;



    },
    enableFlower: function () {
        for (i = 4; i < 7; i++) {

            _this.row_graphics2.getChildAt(i).inputEnabled = true;
            _this.row_graphics21.getChildAt(i).allowDrag = true;
            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics61.getChildAt(i).allowDrag = true;

        }
        _this.row_graphics3.getChildAt(3).inputEnabled = true;
        _this.row_graphics31.getChildAt(3).allowDrag = true;
        _this.row_graphics3.getChildAt(7).inputEnabled = true;
        _this.row_graphics31.getChildAt(7).allowDrag = true;

        _this.row_graphics4.getChildAt(3).inputEnabled = true;
        _this.row_graphics41.getChildAt(3).allowDrag = true;
        _this.row_graphics4.getChildAt(7).inputEnabled = true;
        _this.row_graphics41.getChildAt(7).allowDrag = true;

        _this.row_graphics5.getChildAt(3).inputEnabled = true;
        _this.row_graphics51.getChildAt(3).allowDrag = true;
        _this.row_graphics5.getChildAt(7).inputEnabled = true;
        _this.row_graphics51.getChildAt(7).allowDrag = true;

        if (_this.qArray[_this.no11] == 1) {
            _this.row_graphics2.getChildAt(3).inputEnabled = true;
            _this.row_graphics21.getChildAt(3).allowDrag = true;

            _this.row_graphics2.getChildAt(7).inputEnabled = true;
            _this.row_graphics21.getChildAt(7).allowDrag = true;

            _this.row_graphics6.getChildAt(3).inputEnabled = true;
            _this.row_graphics61.getChildAt(3).allowDrag = true;

            _this.row_graphics6.getChildAt(7).inputEnabled = true;
            _this.row_graphics61.getChildAt(7).allowDrag = true;

        }
    },
    enablePlusImage: function () {
        for (i = 4; i < 7; i++) {

            _this.row_graphics2.getChildAt(i).inputEnabled = true;
            _this.row_graphics21.getChildAt(i).allowDrag = true;
            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics61.getChildAt(i).allowDrag = true;

        }
        for (i = 3; i < 5; i++) {

            _this.row_graphics3.getChildAt(i).inputEnabled = true;
            _this.row_graphics31.getChildAt(i).allowDrag = true;
            _this.row_graphics5.getChildAt(i).inputEnabled = true;
            _this.row_graphics51.getChildAt(i).allowDrag = true;

        }
        for (i = 6; i < 8; i++) {

            _this.row_graphics3.getChildAt(i).inputEnabled = true;
            _this.row_graphics31.getChildAt(i).allowDrag = true;
            _this.row_graphics5.getChildAt(i).inputEnabled = true;
            _this.row_graphics51.getChildAt(i).allowDrag = true;

        }
        _this.row_graphics4.getChildAt(3).inputEnabled = true;
        _this.row_graphics41.getChildAt(3).allowDrag = true;
        _this.row_graphics4.getChildAt(7).inputEnabled = true;
        _this.row_graphics41.getChildAt(7).allowDrag = true;
    },
    enableRIsoEdges: function () {
        for (i = 3; i < 8; i++) {

            _this.row_graphics1.getChildAt(i).inputEnabled = true;
            _this.row_graphics11.getChildAt(i).allowDrag = true;

        }
        _this.row_graphics6.getChildAt(5).inputEnabled = true;
        _this.row_graphics61.getChildAt(5).allowDrag = true;

        _this.row_graphics3.getChildAt(4).inputEnabled = true;
        _this.row_graphics31.getChildAt(4).allowDrag = true;

        _this.row_graphics4.getChildAt(4).inputEnabled = true;
        _this.row_graphics41.getChildAt(4).allowDrag = true;

        _this.row_graphics3.getChildAt(6).inputEnabled = true;
        _this.row_graphics31.getChildAt(6).allowDrag = true;

        _this.row_graphics4.getChildAt(6).inputEnabled = true;
        _this.row_graphics41.getChildAt(6).allowDrag = true;
    },
    enablePEdges: function () {
        for (i = 4; i < 7; i++) {

            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics61.getChildAt(i).allowDrag = true;

        }
        _this.row_graphics1.getChildAt(5).inputEnabled = true;
        _this.row_graphics11.getChildAt(5).allowDrag = true;


        _this.row_graphics3.getChildAt(3).inputEnabled = true;
        _this.row_graphics31.getChildAt(3).allowDrag = true;



        _this.row_graphics3.getChildAt(7).inputEnabled = true;
        _this.row_graphics31.getChildAt(7).allowDrag = true;


        _this.row_graphics2.getChildAt(4).inputEnabled = true;
        _this.row_graphics21.getChildAt(4).allowDrag = true;

        _this.row_graphics2.getChildAt(6).inputEnabled = true;
        _this.row_graphics21.getChildAt(6).allowDrag = true;

        _this.row_graphics5.getChildAt(4).inputEnabled = true;
        _this.row_graphics51.getChildAt(4).allowDrag = true;

        _this.row_graphics5.getChildAt(6).inputEnabled = true;
        _this.row_graphics51.getChildAt(6).allowDrag = true;



    },
    enableBIsoEdges: function () {
        _this.row_graphics4.getChildAt(2).inputEnabled = true;
        _this.row_graphics41.getChildAt(2).allowDrag = true;

        _this.row_graphics3.getChildAt(5).inputEnabled = true;
        _this.row_graphics31.getChildAt(5).allowDrag = true;

        _this.row_graphics5.getChildAt(5).inputEnabled = true;
        _this.row_graphics51.getChildAt(5).allowDrag = true;

        _this.row_graphics2.getChildAt(8).inputEnabled = true;
        _this.row_graphics21.getChildAt(8).allowDrag = true;

        _this.row_graphics3.getChildAt(8).inputEnabled = true;
        _this.row_graphics31.getChildAt(8).allowDrag = true;

        _this.row_graphics4.getChildAt(8).inputEnabled = true;
        _this.row_graphics41.getChildAt(8).allowDrag = true;

        _this.row_graphics5.getChildAt(8).inputEnabled = true;
        _this.row_graphics51.getChildAt(8).allowDrag = true;

        _this.row_graphics6.getChildAt(8).inputEnabled = true;
        _this.row_graphics61.getChildAt(8).allowDrag = true;
    },
    enableIsoEdges: function () {
        for (i = 3; i < 8; i++) {

            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics61.getChildAt(i).allowDrag = true;

        }
        _this.row_graphics1.getChildAt(5).inputEnabled = true;
        _this.row_graphics11.getChildAt(5).allowDrag = true;

        _this.row_graphics3.getChildAt(4).inputEnabled = true;
        _this.row_graphics31.getChildAt(4).allowDrag = true;

        _this.row_graphics4.getChildAt(4).inputEnabled = true;
        _this.row_graphics41.getChildAt(4).allowDrag = true;

        _this.row_graphics3.getChildAt(6).inputEnabled = true;
        _this.row_graphics31.getChildAt(6).allowDrag = true;

        _this.row_graphics4.getChildAt(6).inputEnabled = true;
        _this.row_graphics41.getChildAt(6).allowDrag = true;


    },
    enableKiteEdges: function () {
        _this.row_graphics1.getChildAt(5).inputEnabled = true;
        _this.row_graphics11.getChildAt(5).allowDrag = true;

        _this.row_graphics2.getChildAt(3).inputEnabled = true;
        _this.row_graphics21.getChildAt(3).allowDrag = true;

        _this.row_graphics2.getChildAt(7).inputEnabled = true;
        _this.row_graphics21.getChildAt(7).allowDrag = true;

        _this.row_graphics6.getChildAt(5).inputEnabled = true;
        _this.row_graphics61.getChildAt(5).allowDrag = true;


        _this.row_graphics4.getChildAt(4).inputEnabled = true;
        _this.row_graphics41.getChildAt(4).allowDrag = true;

        _this.row_graphics4.getChildAt(6).inputEnabled = true;
        _this.row_graphics41.getChildAt(6).allowDrag = true;


    },
    enableEqEdges: function () {
        for (i = 3; i < 8; i++) {

            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics61.getChildAt(i).allowDrag = true;

        }
        _this.row_graphics2.getChildAt(5).inputEnabled = true;
        _this.row_graphics21.getChildAt(5).allowDrag = true;

        _this.row_graphics4.getChildAt(4).inputEnabled = true;
        _this.row_graphics41.getChildAt(4).allowDrag = true;

        _this.row_graphics4.getChildAt(6).inputEnabled = true;
        _this.row_graphics41.getChildAt(6).allowDrag = true;

    },
    enableRhEdges: function () {
        for (i = 4; i < 9; i++) {
            _this.row_graphics2.getChildAt(i).inputEnabled = true;
            _this.row_graphics21.getChildAt(i).allowDrag = true;
        }
        for (i = 2; i < 7; i++) {

            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics61.getChildAt(i).allowDrag = true;

        }
        _this.row_graphics4.getChildAt(3).inputEnabled = true;
        _this.row_graphics41.getChildAt(3).allowDrag = true;

        _this.row_graphics4.getChildAt(7).inputEnabled = true;
        _this.row_graphics41.getChildAt(7).allowDrag = true;
    },
    enableSqEdges: function () {
        for (i = 3; i < 8; i++) {
            _this.row_graphics2.getChildAt(i).inputEnabled = true;
            _this.row_graphics21.getChildAt(i).allowDrag = true;


            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics61.getChildAt(i).allowDrag = true;

        }

        _this.row_graphics3.getChildAt(3).inputEnabled = true;
        _this.row_graphics31.getChildAt(3).allowDrag = true;

        _this.row_graphics4.getChildAt(3).inputEnabled = true;
        _this.row_graphics41.getChildAt(3).allowDrag = true;

        _this.row_graphics5.getChildAt(3).inputEnabled = true;
        _this.row_graphics51.getChildAt(3).allowDrag = true;


        _this.row_graphics3.getChildAt(7).inputEnabled = true;
        _this.row_graphics31.getChildAt(7).allowDrag = true;

        _this.row_graphics4.getChildAt(7).inputEnabled = true;
        _this.row_graphics41.getChildAt(7).allowDrag = true;

        _this.row_graphics5.getChildAt(7).inputEnabled = true;
        _this.row_graphics51.getChildAt(7).allowDrag = true;


        _this.EnableAllDots();


    },
    DisableAllDots: function () {
        for (var i = 0; i < 11; i++) {
            _this.row_graphics1.getChildAt(i).inputEnabled = false;
            _this.row_graphics1.getChildAt(i).useHandCursor = false;
            _this.row_graphics2.getChildAt(i).inputEnabled = false;
            _this.row_graphics2.getChildAt(i).useHandCursor = false;
            _this.row_graphics3.getChildAt(i).inputEnabled = false;
            _this.row_graphics3.getChildAt(i).useHandCursor = false;
            _this.row_graphics4.getChildAt(i).inputEnabled = false;
            _this.row_graphics4.getChildAt(i).useHandCursor = false;
            _this.row_graphics5.getChildAt(i).inputEnabled = false;
            _this.row_graphics5.getChildAt(i).useHandCursor = false;
            _this.row_graphics6.getChildAt(i).inputEnabled = false;
            _this.row_graphics6.getChildAt(i).useHandCursor = false;
            _this.row_graphics7.getChildAt(i).inputEnabled = false;
            _this.row_graphics7.getChildAt(i).useHandCursor = false;

            _this.row_graphics11.getChildAt(i).allowDrag = false;
            _this.row_graphics21.getChildAt(i).allowDrag = false;
            _this.row_graphics31.getChildAt(i).allowDrag = false;
            _this.row_graphics41.getChildAt(i).allowDrag = false;
            _this.row_graphics51.getChildAt(i).allowDrag = false;
            _this.row_graphics61.getChildAt(i).allowDrag = false;
            _this.row_graphics71.getChildAt(i).allowDrag = false;

            // _this.enableSqEdges();

        }
    for(i=0;i<_this.additionalGraphics.length;i++){
        _this.additionalGraphics.getChildAt(i).inputEnabled=false;
    }

    },
    EnableAllDots: function () {
        // console.log("bringing every dot to top to easily drag")

        _this.game.world.bringToTop(_this.row_graphics1)

        _this.game.world.bringToTop(_this.row_graphics2)

        _this.game.world.bringToTop(_this.row_graphics3)

        _this.game.world.bringToTop(_this.row_graphics4)

        _this.game.world.bringToTop(_this.row_graphics5)

        _this.game.world.bringToTop(_this.row_graphics6)

        _this.game.world.bringToTop(_this.row_graphics7)


        _this.game.world.bringToTop(_this.additionalGraphics)
        // _this.game.world.bringToTop(_this.additionaldots)


    },
    dragupdate: function (target) {

        target.alpha = 1;

        _this.EnableAllDots();

        if (!_this.dotSelected) {


            _this.dotSelected = true;
            _this.dotSelectedX = target.initialXvalue;
            _this.dotSelectedY = target.initialYvalue;
            _this.dotSelectedName = target.name;
            // _this.starActions(_this.no11);

            _this.initialxPt = Math.ceil(target.initialXvalue)
            _this.initialyPt = Math.ceil(target.initialYvalue)


        }

        if (_this.linegraphics)
            _this.linegraphics.destroy();
        _this.linegraphics = _this.add.graphics();
        _this.linegraphics.lineStyle(8, _this.colorsArr[_this.k]);
        _this.linegraphics.moveTo(_this.initialxPt, _this.initialyPt);
        _this.linegraphics.lineTo(target.x, target.y);
        // drawing a straight line till target
        _this.hasprevvalue = true;
        _this.hasprevvaluex = _this.initialxPt;
        _this.hasprevvaluey = _this.initialyPt;
        // console.log(_this.hasprevvaluex + " " +_this.hasprevvaluey)



        for (i = 0; i < 11; i++) {
            if (_this.checkOverlap(target, _this.row_graphics11.getChildAt(i)) && (_this.row_graphics11.getChildAt(i).allowDrag == true)) {
                _this.gotx = true;
                _this.goty = true;

                _this.x = _this.row_graphics11.getChildAt(i).x;
                _this.y = _this.row_graphics11.getChildAt(i).y;

                break;

            }
            else if (_this.checkOverlap(target, _this.row_graphics21.getChildAt(i)) && (_this.row_graphics21.getChildAt(i).allowDrag == true)) {
                _this.gotx = true;
                _this.goty = true;
                _this.x = _this.row_graphics21.getChildAt(i).x;
                _this.y = _this.row_graphics21.getChildAt(i).y;

                break;

            }
            else if (_this.checkOverlap(target, _this.row_graphics31.getChildAt(i)) && (_this.row_graphics31.getChildAt(i).allowDrag == true)) {
                _this.gotx = true;
                _this.goty = true;
                _this.x = _this.row_graphics31.getChildAt(i).x;
                _this.y = _this.row_graphics31.getChildAt(i).y;

                break;

            }
            else if (_this.checkOverlap(target, _this.row_graphics41.getChildAt(i)) && (_this.row_graphics41.getChildAt(i).allowDrag == true)) {
                // console.log("yes oevrlapping2")
                _this.gotx = true;
                _this.goty = true;
                _this.x = _this.row_graphics41.getChildAt(i).x;
                _this.y = _this.row_graphics41.getChildAt(i).y;

                break;

            }
            else if (_this.checkOverlap(target, _this.row_graphics51.getChildAt(i)) && (_this.row_graphics51.getChildAt(i).allowDrag == true)) {
                _this.gotx = true;
                _this.goty = true;
                _this.x = _this.row_graphics51.getChildAt(i).x;
                _this.y = _this.row_graphics51.getChildAt(i).y;

                break;

            }
            else if (_this.checkOverlap(target, _this.row_graphics61.getChildAt(i)) && (_this.row_graphics61.getChildAt(i).allowDrag == true)) {
                _this.gotx = true;
                _this.goty = true;
                _this.x = _this.row_graphics61.getChildAt(i).x;
                _this.y = _this.row_graphics61.getChildAt(i).y;

                break;

            }
            else if (_this.checkOverlap(target, _this.row_graphics71.getChildAt(i)) && (_this.row_graphics71.getChildAt(i).allowDrag == true)) {
                _this.gotx = true;
                _this.goty = true;
                _this.x = _this.row_graphics71.getChildAt(i).x;
                _this.y = _this.row_graphics71.getChildAt(i).y;


                break;

            }


        }

    },
    checkRepetition: function () {
        if (_this.qArray[_this.no11] == 10) {

            // Butterfly
            if (_this.x == 440 && _this.initialxPt == 440) {
                // for central line change depending on scenarios
                if (Math.abs(_this.y - _this.initialyPt) == 144 && _this.bcorrect == true) {
                    return true;
                }

                if (_this.bcorrect == true) {
                    _this.linegraphicsS.destroy();
                    _this.FselectedArr[_this.bindex - 1] = null;
                    _this.NullCount += 1;
                }
                if (_this.initialyPt == 145 && _this.y == 362) {
                    _this.y = 435;

                    return false;
                }
                else if (_this.initialyPt == 218 && _this.y == 435) {
                    _this.initialyPt = 145;

    
                    return false;

                }
                else if (_this.y == 145 && _this.initialyPt == 362) {
                    _this.initialyPt = 435;
                   
                    return false;

                }
                else if (_this.y == 218 && _this.initialyPt == 435) {
                    _this.y = 145;
                   
                    return false;

                }


            }
        }
        for (i = 0; i < _this.FselectedArr.length; i++) {
            if (_this.FselectedArr.includes(_this.initialxPt + "" + _this.initialyPt + "" + _this.x + "" + _this.y) || _this.FselectedArr.includes(_this.x + "" + _this.y + "" + _this.initialxPt + "" + _this.initialyPt)) {
                return true;
            }
        }

        return false;
    },
    dragstop: function (target) {
        // if (_this.linegraphics) {
        _this.linegraphics.destroy();
        // }
        // && (Math.abs(_this.initialxPt - _this.x) > 80 * 2 || (Math.abs(_this.initialyPt - _this.y) > 80 * 2))
        if (_this.gotx && _this.goty && (_this.initialxPt != _this.x || _this.initialyPt != _this.y) && (Math.abs(_this.initialxPt - _this.x) > 80 || (Math.abs(_this.initialyPt - _this.y) > 80))) {
            // console.log("yes")
            if (!_this.checkRepetition()) {
                _this.linegraphicsS = _this.add.graphics();
                _this.linegraphicsS.lineStyle(8, _this.colorsArr[_this.k]);

                // To adjust these lines according to dots
                if (_this.qArray[_this.no11] == 5) {
                    // Extra logic for issolces traingle
                    if ((Math.abs(_this.x - _this.initialxPt) == 231 && Math.abs(_this.y - _this.initialyPt) == 217)) {
                        if (_this.initialxPt > _this.x && _this.initialyPt > _this.y) {
                            console.log("yup")
                            _this.x += 9;
                            _this.y -= 2;
                        }
                        else if (_this.initialxPt < _this.x && _this.initialyPt < _this.y) {
                            console.log("yup")

                            _this.initialxPt += 9;
                            _this.initialyPt -= 2;
                        }
                        else if (_this.initialxPt < _this.x && _this.initialyPt > _this.y) {
                            console.log("yup")

                            _this.x -= 9;
                            _this.y -= 2;
                        }
                        else {
                            _this.initialxPt -= 9;
                            _this.initialyPt -= 2;
                        }


                    }

                    else if (Math.abs(_this.x - _this.initialxPt) == 231 && Math.abs(_this.y - _this.initialyPt) == 145) {
                        if (_this.initialxPt < _this.x && _this.initialyPt > _this.y) {
                            console.log("yup")
                            _this.x += 9;
                            _this.y -= 2;
                        }
                        else if (_this.initialxPt > _this.x && _this.initialyPt < _this.y) {
                            console.log("yup")

                            _this.initialxPt += 9;
                            _this.initialyPt -= 2;
                        }
                        else if (_this.initialxPt > _this.x && _this.initialyPt > _this.y) {
                            console.log("yup")

                            _this.x -= 9;
                            _this.x -= 2;
                        }
                        else {
                            _this.initialxPt -= 9;
                            _this.initialyPt -= 2;
                        }

                    }
                }
                if (_this.qArray[_this.no11] == 12) {
                    if (_this.initialxPt == 286 && _this.initialyPt == 218) {
                        _this.initialxPt += 18;
                    }
                    if (_this.initialxPt == 594 && _this.initialyPt == 290) {
                        _this.initialxPt -= 18;

                    }
                    if (_this.x == 286 && _this.y == 218) {
                        _this.x += 18;
                    }
                    if (_this.x == 594 && _this.y == 290) {
                        _this.x -= 18;

                    }
                }
                if (_this.qArray[_this.no11] == 9) {
                    if (_this.initialxPt == 363 && _this.initialyPt == 290) {
                        _this.initialxPt += 12;
                    }
                    if (_this.initialxPt == 517 && _this.initialyPt == 290) {
                        _this.initialxPt -= 12;

                    }
                    if (_this.x == 362 && _this.y == 290) {
                        _this.x += 12;
                    }
                    if (_this.x == 517 && _this.y == 290) {
                        _this.x -= 12;

                    }
                }

                _this.linegraphicsS.moveTo(_this.initialxPt, _this.initialyPt);

                _this.linegraphicsS.lineTo(_this.x, _this.y);
                _this.linegraphicsS.colorIndex = _this.k;
                _this.k += 1;
                if (_this.graphicsImg) {
                    _this.world.bringToTop(_this.graphicsImg)
                }

                // _this.FselectedArr.push(_this.initialxPt + "" + _this.initialyPt + "" + _this.x + "" + _this.y)


                _this.linegraphicsS.inputEnabled = true;

                if (_this.CorrectAnsArr.includes(_this.initialxPt + "" + _this.initialyPt + "" + _this.x + "" + _this.y)) {
                    //    A correct symmetry line is drawn
                    _this.counterCelebrationSound.pause();
                    _this.counterCelebrationSound.currentTime = "";
                    _this.counterCelebrationSound.play();
                    _this.objDelArray.push(_this.linegraphicsS)
                    _this.FselectedArr.push(_this.initialxPt + "" + _this.initialyPt + "" + _this.x + "" + _this.y)
                    if (_this.qArray[_this.no11] == 10) {
                        _this.bcorrect = true;
                        _this.bindex += 1;
                    }
                }
                else {
                    // To make child know he has drawn incorrect symmtery line
                    _this.wrongans.play();
                    _this.colorsArr.push(_this.colorsArr[_this.linegraphicsS.colorIndex])

                    _this.time.events.add(1000, () => {
                        _this.linegraphicsS.destroy();
                    })
                }

            }
        }
        _this.EnableAllDots();


        target.alpha = 0;

        if (_this.dotSelected == true) {
            _this.dotSelected = false;

            target.inputEnabled = false;
            _this.graphics = _this.add.graphics(_this.dotSelectedX, _this.dotSelectedY);
            _this.graphics.beginFill(0xFF0000, 1);
            _this.graphics.drawCircle(0, 0, 32);
            _this.graphics.alpha = 0;
            _this.graphics.initialXvalue = target.initialXvalue;
            _this.graphics.initialYvalue = target.initialYvalue;
            _this.graphics.name = _this.dotSelectedName;
            _this.graphics.boundsPadding = 0;

            _this.graphics.inputEnabled = true;
            _this.graphics.useHandCursor = true;
            _this.graphics.input.enableDrag(true)


            _this.graphics.events.onDragUpdate.add(_this.dragupdate, _this);
            _this.graphics.events.onDragStop.add(_this.dragstop, _this);
            _this.additionalGraphics.add(_this.graphics);


        }
    },
    deleteLines: function (target) {

        _this.hasprevvalue = false;

        for (var i = _this.objDelArray.length - 1; i >= 0; i--) {
            // console.log("checking lines if any overlaps")
            if (_this.objDelArray[i] != null && _this.checkOverlap(_this.objDelArray[i], target)) {
                // We have found line to delete
                _this.colorsArr.push(_this.colorsArr[_this.objDelArray[i].colorIndex])

                _this.FselectedArr[i] = null;
                _this.objDelArray[i].destroy();
                _this.objDelArray[i] = null;
                _this.NullCount += 1;

                break;
            }

        }
        _this.time.events.add(100, () => {
            // Making eraser to got at inital position;
            target.x = _this.world.centerX + 420;
            target.y = _this.world.centerY - 20;
        })


    },
    eraserUpdate: function () {
        _this.world.bringToTop(_this.eraser)
    },
    eraseAll: function () {
        _this.qn_flag = -1;

        _this.wrongAns();
        _this.tickMark.destroy();
        _this.numGroup.destroy();
        // _this.numberPad1.destroy();
        if (_this.graphicsImg) {
            _this.graphicsImg.destroy();
        }
        if (_this.graphics) {
            _this.graphics.destroy();
        }
        if (_this.ButterflyImg) {
            _this.row_graphics61.getChildAt(4).y -= 3;
            _this.row_graphics61.getChildAt(4).alpha = 0;

            _this.row_graphics61.getChildAt(6).y -= 3;
            _this.row_graphics61.getChildAt(6).alpha = 0;

            _this.ButterflyImg.destroy();
        }
        if (_this.FlowerImg) {
            _this.FlowerImg.destroy();
        }

        if (_this.prevObjArr) {
            _this.prevObjArr.forEach(element => {
                element.destroy();
            });
        }
        _this.additionalGraphics.destroy();


        _this.row_graphics1.destroy();
        _this.row_graphics2.destroy();
        _this.row_graphics3.destroy();
        _this.row_graphics4.destroy();
        _this.row_graphics5.destroy();
        _this.row_graphics6.destroy();
        _this.row_graphics7.destroy();
        if (_this.yellowbox) {
            _this.yellowbox.destroy();
            _this.enterFractionBox1.destroy();
            _this.selectedAns1 = ''
        }

    },

    checkOverlap: function (spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    shutdown: function () {

        _this.askQ1.pause();
        _this.askQ2.pause();
        _this.correctans.pause();
        _this.wrongans.pause();
        _this.counterCelebrationSound.pause();

    },

    DemoVideo:function()
    {
        //*  complete the picture for the given line of symmetry
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl+"questionSounds/GMS-02-G6/" + 
                                        _this.languageSelected + "/GMS-02-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl+"questionSounds/GMS-02-G6/" + 
                                        _this.languageSelected + "/GMS-02-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function ()
        {
            _this.stopAudio();
            if(_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if(_this.videoWorld_1)
                _this.videoWorld_1.destroy();
            if(_this.hintBtn)
            {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true; 
            }
            _this.game.paused = false;  //* restart the game
        });
    },

    stopAudio: function()
    {    
        //* clear all the timers first
        if (_this.q1Timer) clearTimeout(_this.q1Timer);

        if (_this.q1Sound)
        {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }
        
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed
    },

    showDemoVideo:function()
    {
        _this.demoVideo_1 = _this.add.video('gms02_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl+ "assets/demoVideos/GMS-02-G6.mp4");
        _this.video_playing = 1;        
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        _this.q1Sound.play();
    
        //* play the demo audio1 after 1 sec delay
        _this.q1Timer = setTimeout(function()    //* q1Sound js timer to play q2Timer after 10 seconds.
        {
            console.log("inside demoAudio1sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 12000);
                 
        _this.demoVideo_1.onComplete.add(function()
        {
            _this.stopAudio(); 
            _this.demoVideo_1.stop(false);
            _this.videoWorld_1.destroy();
            if(_this.hintBtn)
            {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true; 
            }
            _this.game.paused = false;    
        });
    }

};