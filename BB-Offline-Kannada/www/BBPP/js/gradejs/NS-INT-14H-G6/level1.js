Game.NS_INT_14H_G6level1 = function () { };

Game.NS_INT_14H_G6level1.prototype =
{
    init: function (game) {
        _this = this;
        _this.languageSelected = window.languageSelected;
        
        if (_this.languageSelected == null 
            || _this.languageSelected == " "
            || _this.languageSelected == "")
        {
            _this.languageSelected = "English";
        }
        else console.log("Language selected: " + _this.languageSelected);


        _this.diceroll = document.createElement('audio');
        _this.dicerollsrc = document.createElement('source');
        _this.dicerollsrc.setAttribute("src", window.baseUrl+"sounds/diceroll.mp3");
        _this.diceroll.appendChild(_this.dicerollsrc);

        _this.correctans = document.createElement('audio');
        _this.correctanssrc = document.createElement('source');
        _this.correctanssrc.setAttribute("src", window.baseUrl+"sounds/correctans.mp3");
        _this.correctans.appendChild(_this.correctanssrc);

        _this.wrongans = document.createElement('audio');
        _this.wronganssrc = document.createElement('source');
        _this.wronganssrc.setAttribute("src", window.baseUrl+"sounds/wrongans.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.selecttile = document.createElement('audio');
        _this.selecttilesrc = document.createElement('source');
        _this.selecttilesrc.setAttribute("src", window.baseUrl+"sounds/selecttile.mp3");
        _this.selecttile.appendChild(_this.selecttilesrc);

        _this.jump = document.createElement('audio');
        _this.jumpsrc = document.createElement('source');
        _this.jumpsrc.setAttribute("src", window.baseUrl+"sounds/jump.mp3");
        _this.jump.appendChild(_this.jumpsrc);


        _this.askQn1 = _this.createAudio("NS-INT-14-G6 a_2");
        _this.askQn2 = _this.createAudio("ClickCheckVO");

        telInitializerbbpp.gameIdInit("NS_INT_14H_G6", gradeSelected);
        console.log(gameID,"gameID...");
    },

    create: function (game) {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.count1 = 0;
        _this.speakerbtn;
        _this.background;
        _this.Arrows = [];
        _this.numbers=[];
        _this.firstnum = false;

        //_this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        //  //*BB++ variables
        //  _this.userHasPlayed = 0;
        //  _this.timeinMinutes;
        //  _this.timeinSeconds;
        //  _this.game_id;
        //  _this.score = 0;
        //  _this.gradeTopics;
         _this.microConcepts;
        //  _this.grade;

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;
        _this.qn_flag = -1;
        _this.yArray = [68, 180, 292, 404];

        //** include the background file, navigation bar, stars, timer objects.

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        _this.header = _this.add.sprite(0, 0, 'header').scale.setTo(1, 0.6);
        _this.footer = _this.add.sprite(0, 472, 'numpadbg')
        _this.footer.scale.setTo(1);
        _this.flip = false;



        _this.backbtn = _this.add.sprite(10, 6, 'backbtn');

        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.stopAllVoices();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50,function()
            {
                _this.state.start('grade6NumberSystems',true,false);
            }); 
        });

      
        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {

                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                if (_this.qn_flag == 1) {
                    if (_this.Question1) {
                        _this.Question1.pause();
                        _this.Question1.currentTime = 0;
                    }
                    _this.askQn1.play();

                }
                if (_this.qn_flag == 2) {
                    if (_this.Question2) {
                        _this.Question2.pause();
                        _this.Question2.currentTime = 0;
                    }
                    _this.askQn2.play();
                }
                _this.time.events.add(2000, function () {
                    _this.speakerbtnClicked = false;
                    _this.EnableVoice();
                });

            }

        }, _this);

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);

        // For playing audio 2nd time but only once
        _this.repeatQues = true;

        _this.getQuestion();


        _this.askedDenominators = [-1, -1, -1, -1, -1, -1];

        //* start the game with first question
        // _this.time.events.add(2000, _this.getQuestion);
    },
    // Creating audio sources
    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl+"questionSounds/NS-INT-14H-G6/"+_this.languageSelected +"/" + src + ".mp3");
        audio.appendChild(audiosrc);
        // audio.play();

        return audio;
    },

    // For celebration anim
    tweenFixed2: function () {

        _this.tween = _this.add.tween(_this.frog);
        _this.tween.to({ x: _this.frog.x, y: _this.frog.y - 15 }, 400, 'Bounce', true, 0)
        _this.tween.start();
        _this.time.events.add(400, () => {
            _this.jump.play();
            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.frog.x, y: _this.frog.y + 15 }, 400, 'Bounce', true, 0)
            _this.tween.start();

        })
    },
    shakeright: function () {
        _this.tween = _this.add.tween(_this.frog);
        _this.tween.to({ x: _this.frog.x + 10, y: _this.frog.y }, 200, 'Bounce', true, 0)
        _this.tween.start();
        _this.time.events.add(200, () => {

            _this.jump.play();

            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.frog.x - 10, y: _this.frog.y }, 200, 'Bounce', true, 0)
            _this.tween.start();

        })
    },
    shakeleft: function () {
        _this.tween = _this.add.tween(_this.frog);
        _this.tween.to({ x: _this.frog.x - 10, y: _this.frog.y }, 400, 'Bounce', true, 0)
        _this.tween.start();
        _this.time.events.add(400, () => {

            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.frog.x + 10, y: _this.frog.y }, 400, 'Bounce', true, 0)
            _this.tween.start();

        })
    },
    showCountAnim: function () {
        // To show arrows animation 
        _this.inc = 40;
        if (_this.icount == Math.abs(_this.correctAns) - 1) {
            _this.time.events.remove(_this.loopId);
        }
        if (_this.currentNum < _this.Ans) {
            _this.inc = 10;
        }
        else
            _this.inc = 40;

        if (_this.currentNum < _this.Ans) {
            _this.arrow = _this.add.sprite(_this.gridObj[38 - _this.currentNum - _this.icount].x + _this.inc, _this.gridObj[38 - _this.currentNum - _this.icount].y - 16, 'arrow2');
            _this.arrow.scale.setTo(0.35);
            _this.Arrows.push(_this.arrow);
            _this.inc += 4;
            _this.lastArrow = _this.arrow;
            _this.frog.bringToTop();

        }
        else {
            _this.arrow = _this.add.sprite(_this.gridObj[38 - _this.currentNum + _this.icount].x - _this.inc, _this.gridObj[38 - _this.currentNum + _this.icount].y - 16, 'arrow2Flipped');
            _this.arrow.scale.setTo(0.35);
            _this.Arrows.push(_this.arrow);

            _this.inc += 4;
            _this.lastArrow = _this.arrow;
            _this.frog.bringToTop();


        }
        _this.icount += 1;



    },
    showhandtween: function () {

        _this.time.events.add(500, () => {
            if (_this.qn_flag == 1) {
                _this.hand = _this.add.sprite(_this.previousX + 20, _this.previousY + 20, 'hand');
                _this.hand.scale.setTo(0.6);
                _this.time.events.add(1000, () => {
                    // Arrow animation
                    _this.icount = 0;
                    _this.loopId = _this.time.events.loop(250, _this.showCountAnim, _this);

                    _this.time.events.add(1000, () => {
                        _this.tween = _this.add.tween(_this.hand);
                        _this.tween.to({ x: _this.gridObj[38 - _this.Ans].x + 20, y: _this.gridObj[38 - _this.Ans].y + 20 }, 1000, 'Linear', true, 0)
                        _this.tween.start();
                    })

                    // Show numpad hand tween

                    _this.time.events.add(2000, () => {

                        _this.Arrows.forEach((element) => {
                            element.destroy();
                        })
                        _this.hand.destroy();

                        _this.hand = _this.add.sprite(100, 500, 'hand');
                        _this.hand.scale.setTo(0.6);
                        _this.tween = _this.add.tween(_this.hand);
                        _this.tween.to({ x: 820, y: 500 }, 3000, 'Linear', true, 0)
                        _this.tween.start();
                    })



                })

            }
            else
                _this.hand.destroy();
        })


    },
    generateGrid: function () {

        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        _this.Outerbox = _this.add.sprite(15, 58, 'outerbox');
        _this.Outerbox.scale.setTo(1.03, 0.99);
        var count = 38;
        var xPos = 0;
        _this.gridObj = [];

        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 11; j++) {

                var xc = (i % 2 == 0) ? j * 60 + 28 : -j * 60 + 628;
                _this.integerbox = _this.add.sprite(xc, i * 56 + 68, 'box');
                if (count >= 10)
                    xPos = 12
                else if (count >= 0) {
                    xPos = 18;
                }
                else if (count >= -5) {
                    xPos = 12;
                }
                else
                    xPos = 8;

                _this.text = _this.add.text(xPos, 13, count);

                _this.text.anchor.setTo(0.1);
                _this.text.align = 'center';
                _this.text.font = "Akzidenz-Grotesk BQ";
                _this.text.fontSize = "24px";
                _this.text.fontWeight = 'normal';
                _this.text.fill = '#FF0000';
                _this.integerbox.addChild(_this.text);

                // Count for text inside boxes
                _this.gridObj.push(_this.integerbox);
                count--;
            }
        }

        _this.shownumberplate();
        _this.displayAnsBox();
        _this.displayTick();
        _this.randomization();
        if (_this.count1 == 0) {
            _this.numbers.forEach((ele)=>{
                ele.inputEnabled=false;
            })
            // _this.numbg.inputEnabled = false;
            _this.minusbtn.inputEnabled=false;
            _this.plusbtn.inputEnabled=false;
            _this.wrongbtn.inputEnabled=false;


            _this.time.events.add(1000, _this.showhandtween);
            //  _this.showhandtween();
            _this.time.events.add(8000, () => {
                _this.numbers.forEach((ele)=>{
                    ele.inputEnabled=true;
                })
                // _this.numbg.inputEnabled = true;
                _this.minusbtn.inputEnabled=true;
                _this.plusbtn.inputEnabled=true;
                _this.wrongbtn.inputEnabled=true;
                if (_this.hand){
                    _this.hand.destroy();
                }
            })
        }


    },
    shownumberplate: function () {
        _this.numberplate = _this.add.sprite(690, 200, 'numberplate')
        _this.numberplate.scale.setTo(0.37, 0.4);

        _this.equalsSign = _this.add.sprite(862, 224, 'equal')
        _this.equalsSign.scale.setTo(0.27);

        _this.ansPlate = _this.add.sprite(865, 180, 'ansPlate')
        _this.ansPlate.scale.setTo(0.265);

    },
    displayTick: function () {

        _this.tickSign = _this.add.sprite(780, 370, 'tick')
        _this.tickSign.scale.setTo(1.3);

        _this.tickSign.inputEnabled = false;
        _this.tickSign.events.onInputDown.add(_this.rightbtnClicked, _this);
    },
    displayAnsBox: function () {

        _this.ansbox = _this.add.sprite(750, 290, 'ansbox');
        _this.ansbox.scale.setTo(0.35);
        _this.whiteline = _this.add.sprite(780, 336, 'whiteline')
        _this.whiteline.scale.setTo(0.35);
        _this.qmarkIn = _this.add.text(820, 310, "?");
        _this.settextProperties(_this.qmarkIn);
        _this.qmarkIn.fill = '#FFD500'
        _this.addNumberPad();

    },
    textProperties: function (text) {

        text.fontWeight = 'normal';
        text.align = 'center';
        text.fontSize = "30px";
        text.fill = '#f5fffa';
    },

    settextProperties: function (text) {
        text.align = 'center';
        text.fontSize = "30px";
        text.fill = '#FFFFFF';
    },

    randomQues: function () {
        var signOp = ['+', '-'];
        var randsign = signOp[Math.floor(Math.random() * signOp.length)];
        if (_this.count1 == 0){
            var randnum = Math.floor(Math.random() * 2) + 1;
            if(Math.abs(_this.q1)<3)
            var randnum = Math.floor(Math.random() * 3) + 1;

        }
        else
            var randnum = Math.floor(Math.random() * 6) + 1;
        return randsign + randnum;
    },
    randomization: function () {
        _this.sign = '+';
        _this.QSign = _this.add.text(772, 214, '+');
        _this.settextProperties(_this.QSign);

        // Selecting random answer to decide which Int will be hide
        _this.OptionSelected = Math.floor(Math.random() * 2 - 1 + 1) + 1;

        _this.q1 = _this.randomQues();
        _this.q2 = _this.randomQues();
        _this.Ans = Number(_this.q1) + Number(_this.q2);
        if (_this.Ans > 0) {
            _this.Ans = '+' + _this.Ans
        }

        if (_this.OptionSelected == 1) {
            // option 2 to hide
            if (_this.q1 == _this.Ans) {
                if (_this.Ans > 4) {
                    _this.q1 = _this.q1 - 1;
                }
                else {
                    _this.q1 = _this.q1 + 1;

                }
            }
            _this.QOp1 = _this.add.text(_this.q1 >= 0 ? 705 : 710, 214, _this.q1);
            _this.settextProperties(_this.QOp1);

            _this.qmark2 = _this.add.text(815, 214, "?");
            _this.textProperties(_this.qmark2);
            _this.qmark2.fill = '#FFD500'

            _this.currentNum = Number(_this.q1);
            _this.correctAns = Number(_this.q2)

        }
        else {
            if (_this.q2 == _this.Ans) {
                if (_this.Ans > 4) {
                    _this.q2 = _this.q2 - 1;
                }
                else {
                    _this.q2 = _this.q2 + 1;

                }
            }

            _this.QOp2 = _this.add.text(_this.q2 > 0 ? 810 : 814, 214, _this.q2);
            _this.settextProperties(_this.QOp2);

            _this.qmark1 = _this.add.text(720, 214, "?");
            _this.textProperties(_this.qmark1);
            _this.qmark1.fill = '#FFD500'

            _this.currentNum = Number(_this.q2);
            _this.correctAns = Number(_this.q1)

        }
        _this.previousX = _this.gridObj[38 - _this.currentNum].x;
        _this.previousY = _this.gridObj[38 - _this.currentNum].y;

        if (_this.Ans > 0) {
            if (_this.Ans > 9)
                var pos = 903;
            else
                var pos = 908;
        }
        else if (_this.Ans == 0)
            var pos = 917;
        else {
            if (_this.Ans < -9)
                var pos = 906;
            else
                var pos = 910;
        }

        _this.QAns = _this.add.text(pos, 214, _this.Ans);
        _this.settextProperties(_this.QAns);
        _this.makeBlueBoxes();
        _this.JumpBox();

    },
    JumpBox: function (box) {

        if (_this.Ans >= 0) {
            if (_this.Ans < 10) {
                var numpos = 16;
            }
            else {
                var numpos = 7;
            }
        }
        else {
            if (_this.Ans <= -10) {

                var numpos = 8;
            }
            else {
                var numpos = 13;

            }
        }
        if (_this.Ans == 0) {
            var numpos = 15;
        }
        if (_this.Ans > 0) {
            var number = _this.Ans.slice(1);
        }
        _this.greenbox = _this.add.sprite(_this.gridObj[38 - _this.Ans].x, _this.gridObj[38 - _this.Ans].y, 'greenbox');
        _this.textg = _this.add.text(_this.gridObj[38 - _this.Ans].x + numpos, _this.gridObj[38 - _this.Ans].y + 10, (_this.Ans) <= 0 ? _this.Ans : number);
        _this.textg.fontSize = '24px'
        _this.textg.fill = '#FF0000'
        _this.textg.font = "Akzidenz-Grotesk BQ";

        _this.frog.bringToTop();

    },
    makeBlueBoxes: function () {
        _this.bluebox = _this.add.sprite(_this.gridObj[38 - _this.currentNum].x - 9, _this.gridObj[38 - _this.currentNum].y - 7, 'blueBox')
        _this.bluebox.scale.setTo(0.65)
        _this.displayFrog();
    },
    displayFrog: function () {

        if (_this.yArray.includes(_this.gridObj[38 - _this.currentNum].y)) {

            if (_this.count1 == 0) {
                _this.frog = _this.add.sprite(_this.gridObj[38 - _this.currentNum].x - 3, _this.gridObj[38 - _this.currentNum].y - 8, 'flipfrog');
                _this.time.events.add(500, _this.tweenFixed2);
            }
            else {
                // show tweening frog from previous posn to current ques
                _this.frog = _this.add.sprite(_this.jumpX - 3, _this.jumpY - 8, 'flipfrog');
                _this.showFrogJump();

            }

        }
        else {
            if (_this.count1 == 0) {
                _this.frog = _this.add.sprite(_this.gridObj[38 - _this.currentNum].x - 3, _this.gridObj[38 - _this.currentNum].y - 8, 'frog');
                _this.time.events.add(500, _this.tweenFixed2);

            }
            else {
                _this.frog = _this.add.sprite(_this.jumpX - 3, _this.jumpY - 8, 'frog');
                _this.showFrogJump();
            }

        }
        _this.jump.play();

        if (_this.count1 == 0)
            _this.askQn1.play();
        _this.qn_flag = 1;
        _this.jumpX = _this.gridObj[38 - _this.Ans].x;
        _this.jumpY = _this.gridObj[38 - _this.Ans].y;

        _this.frog.scale.setTo(0.65);


    },


    JumpToOrigin: function () {
        _this.tween2 = _this.add.tween(_this.frog);
        _this.tween2.to({ x: _this.previousX - 3, y: _this.previousY - 5 }, 500, 'Linear', true, 0);
        _this.tween2.start();
    },
    showFrogJump: function () {

        // need to go to previousx which is the display number
        var X = (Math.abs(_this.previousX + _this.jumpX)) / 2;
        if (_this.previousY < _this.jumpY)
            var Y = _this.jumpY - 30
        else if (_this.previousY > _this.jumpY)
            var Y = _this.jumpY + 30
        else {
            var Y = _this.jumpY - 30

            var X = (Math.abs(_this.jumpX + _this.previousX)) / 2 - 10;

        }

        _this.tween2 = _this.add.tween(_this.frog);
        _this.tween2.to({ x: X, y: Y }, 400, 'Linear', true, 0);
        _this.tween2.start();


        _this.time.events.add(400, () => {

            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.previousX - 3, y: _this.previousY - 6 }, 500, 'Linear', true, 0);
            _this.frog.bringToTop();

            _this.tween.start();
            _this.frog.bringToTop();

        })
        _this.frog.bringToTop();

    },
    Frogjump: function () {
        var X = (Math.abs(_this.previousX + _this.userselectedx)) / 2;
        if (_this.userselectedy < _this.previousY)
            var Y = _this.previousY - 30
        else if (_this.userselectedy > _this.previousY)
            var Y = _this.previousY + 30
        else {
            var Y = _this.previousY - 30

            var X = (Math.abs(_this.previousX + _this.userselectedx)) / 2 - 10;

        }

        _this.tween2 = _this.add.tween(_this.frog);
        _this.tween2.to({ x: X, y: Y }, 400, 'Linear', true, 0);
        _this.tween2.start();


        _this.time.events.add(400, () => {

            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.userselectedx - 3, y: _this.userselectedy - 6 }, 500, 'Linear', true, 0);
            _this.frog.bringToTop();

            _this.tween.start();
            _this.frog.bringToTop();

        })
        // if answer is wrong jump back to origin
        if (_this.wrong == true) {
            _this.time.events.add(1200, () => {
                _this.wrong = false;
                _this.wrongans.play();
                _this.JumpToOrigin();
            })

        }
        _this.frog.bringToTop();

    },

    //* Change this function to show small number pad as given in GDD. (no signs) 
    addNumberPad: function () {
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";

        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        //bottomnumpadbg.anchor.setTo(0.5);
        bottomnumpadbg.scale.setTo(1, 1);
        bottomnumpadbg.name = "numpadbg";

        _this.x = 70;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;

        for (var i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.8, 0.8);
            _this.numbg.name = i;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbers.push(_this.numbg)
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked, _this);

            _this.x += 63;
        }
        _this.x += 40;
        _this.minusbtn = _this.numGroup.create(_this.x, 552, 'Numberpad');
        _this.minusbtn.frame = 10;
        _this.minusbtn.anchor.setTo(0.5);
        _this.minusbtn.scale.setTo(0.8, 0.8);
        _this.minusbtn.inputEnabled = true;
        _this.minusbtn.name = "-";
        _this.minusbtn.input.useHandCursor = true;
        _this.minusbtn.events.onInputDown.add(_this.signbtnClicked, _this);

        _this.plusbtn = _this.numGroup.create(_this.x + 63, 552, 'Numberpad');
        _this.plusbtn.frame = 11;
        _this.plusbtn.anchor.setTo(0.5);
        _this.plusbtn.scale.setTo(0.8, 0.8);
        _this.plusbtn.inputEnabled = true;
        _this.plusbtn.name = "+";

        _this.plusbtn.input.useHandCursor = true;
        _this.plusbtn.events.onInputDown.add(_this.signbtnClicked, _this);

        _this.wrongbtn = _this.numGroup.create(_this.x + 166, 552, 'Numberpad');
        _this.wrongbtn.frame = 12;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8, 0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

        _this.numpadTween = _this.add.tween(_this.numGroup);

        _this.tweenNumPad();
        //tween in the number pad after a second.

    },
    wrongbtnClicked: function () {
        _this.selecttile.play();
        if (_this.enterTxt)
            _this.enterTxt.destroy();
        if (_this.enterTxt2)
            _this.enterTxt2.destroy();
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.plusbtn.inputEnabled = true;
        _this.minusbtn.inputEnabled = true;
        _this.enterTxt = null;
        _this.enterTxt2 = null;
        if (_this.qmarkIn) {
            _this.qmarkIn.destroy();
        }
        _this.qmarkIn = _this.add.text(820, 310, "?");
        _this.settextProperties(_this.qmarkIn);
        _this.qmarkIn.fill = '#FFD500'

        _this.tickSign.inputEnabled = false;
        _this.qn_flag = 1;


    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1400, 'Linear', true, 0);

    },
    signbtnClicked: function (target) {

        if (_this.hand) {
            _this.hand.destroy();
        }
        if (_this.qmarkIn) {
            _this.qmarkIn.destroy();
        }
        _this.selecttile.play();

        if (_this.enterTxt) {
            _this.plusbtn.inputEnabled = false;
            _this.minusbtn.inputEnabled = false;

        }
        else if (!_this.enterTxt2) {
            _this.usersign = target.name;
            _this.enterTxt = _this.add.text(820, 305, target.name, { fontSize: '40px' });//43 88
            _this.enterTxt.fill = '#FFD500';

        }
        else {
            _this.usersign = target.name;
            if (target.name == '-')
                _this.enterTxt = _this.add.text(794, 305, target.name, { fontSize: '40px' });//43 88
            else
                _this.enterTxt = _this.add.text(791, 305, target.name, { fontSize: '40px' });//43 88

            _this.enterTxt.fill = '#FFD500';

        }

    },
    numClicked: function (target) {
        if (_this.hand) {
            _this.hand.destroy();
        }
        if (_this.qmarkIn) {
            _this.qmarkIn.destroy();
        }
        _this.selecttile.play();
        if (_this.enterTxt2) {
            _this.enterTxt2.destroy();
        }

        if (_this.selectedAns2 === '') {
            if (_this.selectedAns1 === 0 && target.name !== 0) {
                _this.selectedAns2 = target.name;
            }
            else if (_this.selectedAns1 !== '' && _this.selectedAns1 !== 0) {
                _this.selectedAns2 = target.name;
            }
            else if (_this.selectedAns1 !== 0 && target.name == 10) {
                _this.selectedAns1 = 0;
            }
            else {
                _this.selectedAns1 = target.name;
            }
        }

        if (_this.selectedAns1 === 10) var_selectedAns1 = 0;
        else var_selectedAns1 = _this.selectedAns1;
        if (_this.selectedAns2 === 10) _this.selectedAns2 = 0;
        else var_selectedAns2 = _this.selectedAns2;
        if (var_selectedAns1 === 0 && _this.selectedAns2 === 0) {
            _this.selectedAns2 = ''
        }

        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;

        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;


        if (Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) {
            if (_this.enterTxt) {
                _this.enterTxt.destroy();
                _this.enterTxt = null;
                if (_this.usersign == '+')
                    _this.enterTxt = _this.add.text(794, 305, _this.usersign, { fontSize: '40px' });//43 88
                else
                    _this.enterTxt = _this.add.text(797, 305, _this.usersign, { fontSize: '40px' });//43 88
                _this.enterTxt.fill = '#FFD500';

            }
            _this.enterTxt2 = _this.add.text(820, 305, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '36px' });//43 88
        }
        else {
            if (_this.enterTxt) {
                _this.enterTxt.destroy();
                _this.enterTxt = null;
                if (_this.usersign == '+')
                    _this.enterTxt = _this.add.text(791, 305, _this.usersign, { fontSize: '40px' });//43 88
                else
                    _this.enterTxt = _this.add.text(797, 305, _this.usersign, { fontSize: '40px' });//43 88

                _this.enterTxt.fill = '#FFD500';

            }
            _this.enterTxt2 = _this.add.text(813, 305, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '36px' });//36 88
        }

        _this.enterTxt2.align = 'right';
        _this.enterTxt2.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt2.fill = '#FFD500';
        _this.enterTxt2.fontWeight = 'normal';
        _this.tickSign.inputEnabled = true;
        if (_this.count1 == 0 && _this.repeatQues == true) {
            _this.repeatQues = false;
            _this.stopAllVoices();
            _this.askQn2.play();

            _this.hand = _this.add.sprite(848, 415, 'hand');
            _this.hand.scale.setTo(0.6);
            _this.tickSign.scale.setTo(1.28)
            _this.time.events.add(700, () => {
                _this.hand.scale.setTo(0.65);
                _this.tickSign.scale.setTo(1.3);
            })
            _this.time.events.add(1500, () => {
                _this.hand.destroy();
            });
        }
        _this.qn_flag = 2;

    },

    stopAllVoices: function () {

        if (_this.askQn1) {
            _this.askQn1.pause();
            _this.askQn1.currentTime = 0;
        }
        if (_this.askQn2) {
            _this.askQn2.pause();
            _this.askQn2.currentTime = 0;

        }

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


    getQuestion: function (target) {
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

        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.

        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;

        _this.generateGrid();

    },

    stopVoice: function () {
        if (_this.playQuestionSound) {
            if (_this.playQuestionSound.contains(_this.src)) {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }

            if (!_this.playQuestionSound.paused) {
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
        }

        if (_this.correctans) {
            if (_this.correctans.isPlaying) {
                _this.correctans.stop();
                _this.correctans = null;
            }
        }
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


    eraseAll: function () {


        _this.gridObj.forEach((element) => {
            element.destroy();
        })
        _this.tickSign.destroy();

        _this.numberplate.destroy();
        _this.frog.destroy();

        if (_this.greenbox) {
            _this.greenbox.destroy();
        }
        if (_this.textg)
            _this.textg.destroy();

        // _this.box.destroy();
        if (_this.hand)
            _this.hand.destroy();

        if (_this.enterTxt)
            _this.enterTxt.destroy();

        _this.enterTxt2.destroy();

        _this.ansPlate.destroy();
        _this.whiteline.destroy();
        _this.equalsSign.destroy();
        _this.ansbox.destroy();
        _this.numGroup.destroy();
        _this.enterTxt = null;
        _this.enterTxt2 = null;
        _this.Outerbox.destroy();
        _this.bluebox.destroy();
        _this.QOp1.destroy();
        _this.QOp2.destroy();
        _this.QSign.destroy();
        _this.QAns.destroy();




    },
    Selection: function () {
        // Store answer selected by user to make jump

        if (_this.enterTxt && _this.enterTxt._text == '-') {
            _this.userselectedx = _this.gridObj[38 + Number(_this.enterTxt2._text) - _this.currentNum].x;
            _this.userselectedy = _this.gridObj[38 + Number(_this.enterTxt2._text) - _this.currentNum].y;
            _this.selectedAns = Number(_this.enterTxt._text + _this.enterTxt2._text);
        }
        else {
            _this.userselectedx = _this.gridObj[38 - Number(_this.enterTxt2._text) - _this.currentNum].x;
            _this.userselectedy = _this.gridObj[38 - Number(_this.enterTxt2._text) - _this.currentNum].y;
            _this.selectedAns = '+' + _this.enterTxt2._text;

        }
    },
    showAns: function () {
        if (_this.OptionSelected == 1) {
            // Means integer 2 is missing
            _this.qmark2.destroy();
            _this.QOp2 = _this.add.text(_this.q2 >= 0 ? 810 : 814, 214, _this.selectedAns);
            _this.settextProperties(_this.QOp2);

        }
        else {
            // Means integer 1 is missing
            _this.qmark1.destroy();
            _this.QOp1 = _this.add.text(_this.q1 > 0 ? 705 : 710, 214, _this.selectedAns);
            _this.settextProperties(_this.QOp1);

        }

    },
    removeAns: function () {
        if (_this.OptionSelected == 1) {
            // Means integer 2 is missing
            _this.QOp2.destroy();
            _this.qmark2 = _this.add.text(815, 214, "?");
            _this.textProperties(_this.qmark2);
            _this.qmark2.fill = '#FFD500'

        }
        else {
            _this.QOp1.destroy();
            _this.qmark1 = _this.add.text(720, 214, "?");
            _this.textProperties(_this.qmark1);
            _this.qmark1.fill = '#FFD500'

        }

    },

    //* This is called when Right btn on the numberpad is clicked to enter numerator and denominator        
    rightbtnClicked: function () {

        _this.noofAttempts++;
        _this.tickSign.inputEnabled = false;
        _this.selecttile.play();

        if (_this.hand) {
            _this.hand.destroy();

        }


        if (_this.enterTxt == null && _this.enterTxt2 != null) {
            var inputans = Number(_this.enterTxt2._text);
        }
        else if (_this.enterTxt2 != null && _this.enterTxt2._text != 0) {
            var inputans = Number(_this.enterTxt._text + _this.enterTxt2._text)

        }
        else if (_this.enterTxt2 != null && _this.enterTxt2._text == 0) {
            var inputans = _this.enterTxt_text + _this.enterTxt2._text
        }
        if (_this.enterTxt2._text > Math.abs(_this.currentNum - 38) || (_this.enterTxt && _this.enterTxt._text + _this.enterTxt2._text < -Math.abs(_this.currentNum + 38))) {

                _this.wrongans.play();
                _this.time.events.add(100, () => {
                    _this.wrongbtnClicked();
                })
                _this.qn_flag = 1;
            
        }
        else {
            _this.Selection();
            _this.showAns();
            
        if (inputans === Number(_this.correctAns)) {
            _this.qn_flag = -1;
            _this.Frogjump();
            _this.time.events.add(1500, () => {
                _this.tweenFixed2();
                _this.time.events.add(1000, () => {
                    _this.shakeright();
                    _this.time.events.add(350, _this.shakeleft);

                })
                _this.correctans.play();
                _this.frog.scale.setTo(0.65);
                _this.questionid =1;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.time.events.add(1000, () => {
                    _this.frog.scale.setTo(0.6);
                    _this.celebration();

                })
            })

        }
        else {
            _this.wrong = true;
            _this.Frogjump();

            _this.time.events.add(2000, () => {
                _this.removeAns();

                _this.wrongans.play();
                _this.time.events.add(100, () => {
                    _this.shakeright();
                    _this.time.events.add(350, _this.shakeleft);
                    _this.wrongbtnClicked();
                })
                _this.qn_flag = 1;
            })

        }
        }

    },
    celebration: function () {

        
        _this.correctans.play();
        _this.starActions(_this.count1);
        _this.time.events.add(2000, _this.eraseAll);
        _this.time.events.add(2000, _this.nextquestion);

    },

    nextquestion: function () {

        if (_this.count1 < 6) {

            _this.generateGrid();
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(2000, function () {
                //_this.state.start('score');
                _this.state.start('score',true,false,gameID,_this.microConcepts);
            });
          
        }
    },
    starActions: function (target) {
        _this.score++; 
        // _this.userHasPlayed = 1;
        // _this.game_id='NS_INT_14H_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Integers";
         _this.microConcepts = "Number Systems";

        if (_this.count1 >= 0) {
            starAnim = _this.starsGroup.getChildAt(_this.count1);
            starAnim.smoothed = false;
            anim = starAnim.animations.add('star');
            _this.count1++;
            anim.play();

        }
        else
            _this.count1++;

    },
    shutdown: function () {
        _this.stopAllVoices();

    },
}
