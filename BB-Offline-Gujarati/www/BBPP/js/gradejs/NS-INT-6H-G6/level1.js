Game.NS_INT_6H_G6level1 = function () { };

Game.NS_INT_6H_G6level1.prototype =
{
    init: function (game) {
        _this = this;
        _this.languageSelected = window.languageSelected;

        if (_this.languageSelected == null
            || _this.languageSelected == " "
            || _this.languageSelected == "") {
            _this.languageSelected = "English";
        }
        else console.log("Language selected: " + _this.languageSelected);


        _this.diceroll = document.createElement('audio');
        _this.dicerollsrc = document.createElement('source');
        _this.dicerollsrc.setAttribute("src", window.baseUrl + "sounds/diceroll.mp3");
        _this.diceroll.appendChild(_this.dicerollsrc);

        _this.correctans = document.createElement('audio');
        _this.correctanssrc = document.createElement('source');
        _this.correctanssrc.setAttribute("src", window.baseUrl + "sounds/correctans.mp3");
        _this.correctans.appendChild(_this.correctanssrc);

        _this.wrongans = document.createElement('audio');
        _this.wronganssrc = document.createElement('source');
        _this.wronganssrc.setAttribute("src", window.baseUrl + "sounds/wrongans.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.selecttile = document.createElement('audio');
        _this.selecttilesrc = document.createElement('source');
        _this.selecttilesrc.setAttribute("src", window.baseUrl + "sounds/selecttile.mp3");
        _this.selecttile.appendChild(_this.selecttilesrc);

        _this.jump = document.createElement('audio');
        _this.jumpsrc = document.createElement('source');
        _this.jumpsrc.setAttribute("src", window.baseUrl + "sounds/jump.mp3");
        _this.jump.appendChild(_this.jumpsrc);


        telInitializerbbpp.gameIdInit("NS_INT_6H_G6", gradeSelected);
        console.log(gameID,"gameID...");
    },

    create: function (game) {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.count1 = -1;
        _this.graphicsObj = [];

        _this.speakerbtn;
        _this.background;
        _this.countHrVerRept = [-1, -1, -1, -1, -1, -1];
        _this.WholeQues = 0;
        _this.Arrows = [];

        //_this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;


        // //*BB++ variables
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
         _this.microConcepts;
        // _this.grade;

        _this.counterForTimer = 0;

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;
        _this.qn_flag = -1;
        _this.yArray = [83, 195, 307, 419]

        //** include the background file, navigation bar, stars, timer objects.

        _this.background = _this.add.tileSprite(0, 20, _this.world.width, _this.world.height, 'bg');
        _this.header = _this.add.sprite(0, 0, 'header').scale.setTo(1, 0.6);
        _this.footer = _this.add.sprite(0, 498, 'footer').scale.setTo(1, 0.3);


        // _this.backbtn = _this.add.sprite(10, 6, 'backbtn');

        // _this.backbtn.inputEnabled = true;
        // _this.backbtn.input.useHandCursor = true;
        // _this.backbtn.events.onInputDown.add(function () {
        //     _this.stopAllVoices();
        //     _this.backbtn.events.onInputDown.removeAll();

        //     _this.time.events.add(50,function()
        //     {
        //         _this.state.start('grade6NumberSystems',true,false,_this.game_id,_this.userHasPlayed,_this.timeinMinutes,_this.timeinSeconds,_this.score,_this.gradeTopics,
        //         _this.grade,_this.microConcepts);
        //     }); 
        // });

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
                    _this.askQn1();
                }
                if (_this.qn_flag == 2) {
                    if (_this.Question2) {
                        _this.Question2.pause();
                        _this.Question2.currentTime = 0;
                    }
                    _this.askQn2();
                }
                if (_this.qn_flag == 3) {
                    // _this.stopVoice();
                    if (_this.Question3) {
                        _this.Question3.pause();
                        _this.Question3.currentTime = 0;
                    }
                    _this.askQn3();
                }
                if (_this.qn_flag == 4) {
                    // _this.stopVoice();
                    if (_this.Question4) {
                        _this.Question4.pause();
                        _this.Question4.currentTime = 0;
                    }
                    _this.askQn4();
                }
                if (_this.qn_flag == 5) {
                    // _this.stopVoice();
                    if (_this.Question5) {
                        _this.Question5.pause();
                        _this.Question5.currentTime = 0;
                    }
                    _this.askQn5();
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
        // _this.generateGrid();

        // For playign audio 2nd time but only once
        _this.repeatQues = true;

        if (_this.skipped == true) {
            _this.skipped = false;
            _this.count1 = 0;
            _this.getQuestion();
        }
        else {
            _this.DemoFunction();
        }

        _this.askednumber1 = [-1, -1, -1, -1, -1, -1];
        _this.askednumber2 = [-1, -1, -1, -1, -1, -1];

        //* start the game with first question
        // _this.time.events.add(2000, _this.getQuestion);
    },
    displayFrog: function () {

        if (_this.count1 <= 0) {


            _this.frog = _this.add.sprite(790, 160 - 10, 'frog');
            // _this.frog.scale.setTo(0.6)
            _this.frog.scale.setTo(0.7);
            _this.playaudio = true
            if (_this.count1 == 0) {
                _this.time.events.add(100, () => {
                    _this.tweenFixed();

                })
                _this.time.events.add(1100, _this.handanimation);
            }
            if (_this.count1 == -1) {
                _this.time.events.add(800, () => {
                    _this.tweenFixed();
                    _this.jump.play();

                })
            }
        }
        else {
            // show tween of moving from previous position to origin
            _this.flipfrogDirections();

        }
        _this.frog.bringToTop();
        if (_this.count1 > 0)
            _this.frog.scale.setTo(0.6)

    },

    tweenFixed: function () {
        _this.tween = _this.add.tween(_this.frog);
        _this.tween.to({ x: _this.frog.x, y: _this.frog.y - 30 }, 300, 'Bounce', true, 0)
        _this.tween.start();
        _this.time.events.add(300, () => {
            if (_this.playaudio && _this.count1 == 0)
                _this.jump.play();

            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.frog.x, y: _this.frog.y + 30 }, 200, 'Bounce', true, 0)
            _this.tween.start();
            _this.playaudio = false;


            // if (_this.frog.inputEnabled == true)
            //     _this.jump.play();

        })

    },
    // For celebration anim
    tweenFixed2: function () {

        _this.tween = _this.add.tween(_this.frog);
        _this.tween.to({ x: _this.frog.x, y: _this.frog.y - 15 }, 400, 'Bounce', true, 0)
        _this.tween.start();
        _this.time.events.add(400, () => {

            // _this.jump.play();

            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.frog.x, y: _this.frog.y + 15 }, 400, 'Bounce', true, 0)
            _this.tween.start();

        })
        _this.time.events.add(1000, () => {
            _this.shakeright();
            _this.time.events.add(350, _this.shakeleft);
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
            // if (_this.frog.inputEnabled == true)
            //     _this.jump.play();

        })
    },
    shakeleft: function () {
        // _this.frog.x +=10 
        _this.tween = _this.add.tween(_this.frog);
        _this.tween.to({ x: _this.frog.x - 10, y: _this.frog.y }, 400, 'Bounce', true, 0)
        _this.tween.start();
        _this.time.events.add(400, () => {

            // _this.jump.play();

            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.frog.x + 10, y: _this.frog.y }, 400, 'Bounce', true, 0)
            _this.tween.start();
            // _this.jump.play();

        })
    },
    handanimation: function () {
        _this.askQn1();
        _this.qn_flag = 1;
        _this.time.events.add(400, () => {
            _this.hand = _this.add.sprite(825, 215 - 35, 'hand');
            _this.hand.scale.setTo(0.7)
            _this.time.events.add(600, () => {
                _this.hand.scale.setTo(0.75);

                _this.frog.scale.setTo(0.71);
                _this.hand.bringToTop();
                _this.time.events.add(600, () => {

                    _this.frog.scale.setTo(0.7);
                    _this.hand.scale.setTo(0.7);
                    _this.hand.bringToTop();


                })

            })

        })
        _this.time.events.add(1500, () => {

            _this.frog.inputEnabled = true;
            _this.hand.destroy();

        })


    },

    demoanimation: function () {
        console.log("denoooo");
        _this.time.events.add(400, () => {
            _this.hand = _this.add.sprite(825, 215 - 35, 'hand');
            _this.hand.scale.setTo(0.7)
            _this.time.events.add(600, () => {
                _this.hand.scale.setTo(0.65);
                _this.jump.play();

                _this.frog.scale.setTo(0.74);
                _this.hand.bringToTop();
                _this.time.events.add(600, () => {

                    _this.frog.scale.setTo(0.7);
                    _this.hand.scale.setTo(0.7);
                    _this.hand.bringToTop();


                })

            })

        })
        _this.time.events.add(2300, () => {

            _this.hand.destroy();
            _this.time.events.add(200, () => {
                _this.FrogjumpDemo();
                _this.frog.scale.setTo(0.6);
                _this.selectQues();

                _this.showInteger();

                _this.box1.inputEnabled = false;
                _this.box2.inputEnabled = false;

                _this.time.events.add(1500, _this.showBoxSelection)

            })

        })
    },
    showBoxSelection: function () {
        _this.box1.inputEnabled = false;
        _this.box2.inputEnabled = false;
        _this.hand = _this.add.sprite(_this.correctposX + 30, _this.correctposY + 40, 'hand');
        _this.hand.scale.setTo(0.6)
        _this.time.events.add(500, () => {
            _this.hand.scale.setTo(0.55);
            _this.time.events.add(500, () => {
                _this.hand.scale.setTo(0.6);
                _this.time.events.add(600, () => {

                    if (_this.box1.text > _this.box2.text && _this.selectedQues == 1) {
                        _this.JumpBox(_this.box1);
                    }
                    else if (_this.box1.text < _this.box2.text && _this.selectedQues == 0) {
                        _this.JumpBox(_this.box1);
                    }
                    else {
                        _this.JumpBox(_this.box2);
                    }
                    _this.selecttile.play();
                })

            })

        })

        _this.box1.bringToTop();
        _this.box2.bringToTop();

        _this.hand.bringToTop();

        _this.time.events.add(2300, () => {
            _this.askQn4();
            _this.time.events.add(1000, _this.showDrag)
            // _this.showDrag();
        })



    },
    showDrag: function () {
        _this.hand.destroy();

        if (_this.correctSign == '<') {
            // Tween for lesser integer drag
            _this.hand = _this.add.sprite(_this.lesserSign.x + 30, _this.lesserSign.y + 40, 'hand');
            _this.hand.scale.setTo(0.6)

            _this.time.events.add(1000, () => {
                _this.tween = _this.add.tween(_this.lesserSign);
                _this.tween.to({ x: _this.numberplate.x + 82, y: _this.numberplate.y + 5 }, 800, 'Linear', true, 0)
                _this.tween.start();
            })


            _this.lesserSign.scale.setTo(0.9);

        }
        else {
            _this.hand = _this.add.sprite(_this.greaterSign.x + 30, _this.greaterSign.y + 40, 'hand');
            _this.hand.scale.setTo(0.6)
            _this.time.events.add(1000, () => {

                _this.tween = _this.add.tween(_this.greaterSign);
                _this.tween.to({ x: _this.numberplate.x + 82, y: _this.numberplate.y + 5 }, 800, 'Linear', true, 0)
                _this.tween.start();
                _this.greaterSign.scale.setTo(0.9);
            })


        }
        _this.time.events.add(1000, () => {

            _this.tween2 = _this.add.tween(_this.hand);
            _this.tween2.to({ x: _this.numberplate.x + 115, y: _this.numberplate.y + 30 }, 800, 'Linear', true, 0)
            _this.tween2.start();
            _this.hand.bringToTop();
        })
        // Ques to click tick btn
        _this.time.events.add(2500, () => {
            _this.selecttile.play();

            _this.hand.destroy();

            _this.askQn5();
            _this.time.events.add(1000, _this.showTickhand);
        })


    },

    showTickhand: function () {
        _this.demoQues = false;
        _this.hand = _this.add.sprite(850, 470 - 35, 'hand');
        _this.hand.scale.setTo(0.6)
        // _this.askQn4();
        _this.time.events.add(700, () => {
            _this.hand.scale.setTo(0.55);

            _this.tickSign.scale.setTo(0.83);

            _this.hand.bringToTop();

            _this.time.events.add(700, () => {

                _this.tickSign.scale.setTo(0.8);

                _this.hand.scale.setTo(0.6);
                _this.hand.bringToTop();
                _this.selecttile.play();



            })

        })
        _this.time.events.add(2000, () => {

            _this.hand.destroy();
            _this.time.events.add(500, () => {

                // _this.jump.play();
                // _this.Frogjump();
                _this.correctans.play();
                _this.tweenFixed2();
                // _this.time.events.add(1000, _this.tweenFixed2);
                _this.time.events.add(2000, () => {
                    _this.count1 = 0;
                    _this.eraseAll();
                    _this.skipbtn.destroy();
                    _this.time.events.add(100, _this.getQuestion);

                })

            })

        })
    },
    flipfrogDirections: function () {
        if (_this.flip == true) {

            _this.frog = _this.add.sprite(_this.correctposX, _this.correctposY, 'flipfrog');
            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: 330, y: 250 }, 600, 'Linear', true, 0)
            _this.tween.start();
            _this.jump.play();

        }
        else {
            _this.frog = _this.add.sprite(_this.correctposX, _this.correctposY, 'frog');
            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: 330, y: 250 }, 600, 'Linear', true, 0)
            _this.tween.start();
            _this.jump.play();


        }

    },
    generateGrid: function () {
        _this.Outerbox = _this.add.sprite(20, 70, 'outerbox');
        _this.Outerbox.scale.setTo(1.03, 1);
        var count = 38;
        var xPos = 0;
        _this.gridObj = [];

        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 11; j++) {

                var xc = (i % 2 == 0) ? j * 60 + 33 : -j * 60 + 633;
                _this.integerbox = _this.add.sprite(xc, i * 56 + 83, 'box');
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
        // Show frog
        _this.displayFrog();
        // _this.showdice();
        // if(_this.count1>0)
        // _this.initialScreen();
        _this.shownumberplate();
        _this.displayTick();


    },
    shownumberplate: function () {
        _this.numberplate = _this.add.sprite(727, 245, 'numberplate')
        _this.numberplate.scale.setTo(0.45, 0.4);
        _this.lesserSign = _this.add.sprite(750, 332, 'lesser')
        _this.lesserSign.scale.setTo(0.85);
        _this.lesserSign.text = '<'
        _this.greaterSign = _this.add.sprite(868, 332, 'greater')
        _this.greaterSign.scale.setTo(0.85);
        _this.greaterSign.text = '>'




    },
    selectQues: function () {
        console.log("select QQQ");
        _this.selectedQues = Math.floor(Math.random() * 2);
        if (_this.selectedQues == 0) {
            // smaller integer
            _this.time.events.add(1000, () => {
                _this.askQn2();
            });
            _this.qn_flag = 2;
        }
        else {
            _this.time.events.add(1000, () => {
                _this.askQn3();
            });
            _this.qn_flag = 3;
        }
    },
    initialScreen: function () {

        _this.sceneCount++;
        _this.AnsTimerCount = 0;
        _this.noofAttempts = 0;

        if (_this.count1 <= 0) {
            console.log("screnn..!!!");
            if (_this.skipped == true) {
                _this.frog.inputEnabled = true;
                _this.askQn1();
                _this.qn_flag = 1;
            }
            _this.frog.events.onInputDown.add(function () {
                _this.playaudio = false;
                if (_this.count1 == 0)
                    _this.jump.play();
                _this.frog.inputEnabled = false;
                //    Show frog jumping

                _this.FrogjumpDemo();

                _this.time.events.add(500, () => {
                    // Ask question
                    _this.selectQues();
                    //    Need to uncomment these
                    _this.showInteger();


                });

            }, _this);
        }
        else if (_this.count1 > 0) {
            console.log("Elseeeee")
            // _this.qn_flag = 2;
            _this.selectQues();
            _this.showInteger();

        }
    },

    displayTick: function () {

        _this.tickSign = _this.add.sprite(810, 400, 'tick')
        _this.tickSign.scale.setTo(0.8);

        _this.tickSign.inputEnabled = false;
        _this.tickSign.events.onInputDown.add(_this.rightbtnClicked, _this);
        // _this.showInteger();
    },
    randomNumGenerator: function (num) {
        _this.randsign = Math.floor(Math.random() * 2);
        if (_this.randsign == 0) {
            _this.sign = '+';
        }
        else {
            _this.sign = '-';
        }
        // Genrating unique random number
        _this.randnum = Math.floor(Math.random() * 38) + 1;
        for (var i = _this.count1 - 1; i >= 0; i--) {
            if ((_this.sign + _this.randnum == _this.askednumber1[i]) || (_this.sign + _this.randnum == _this.askednumber2[i])) {
                _this.randnum = Math.floor(Math.random() * 38) + 1;
                i = _this.count1 - 1;
            }
        }
        if (_this.count1 >= 0) {
            if (num == 1)
                _this.askednumber1[_this.count1] = _this.sign + _this.randnum;
            else if (num == 2)
                _this.askednumber2[_this.count1] = _this.sign + _this.randnum;
        }
        if (num == 2 && Number(_this.number1) == Number(_this.sign + _this.randnum)) {
            // Same question
            if (_this.randnum >= 30) {
                _this.randnum = _this.randnum - 5;
            }
            else if (_this.randnum < -30) {
                _this.randnum = _this.randnum + 5;

            }
            else {
                _this.randnum = _this.randnum + 5;

            }
            if (_this.count1 >= 0)
                _this.askednumber2[_this.count1] = _this.sign + _this.randnum;


        }

        // _this.askedDenominators[_this.count1] = _this.sign + _this.randnum;
        if (_this.sign == '+')
            return _this.randnum;
        else {
            return _this.sign + _this.randnum;
        }
    },
    numberposition: function (pos) {
        if (_this.randnum < 10) {
            _this.numpos = pos
        }
        else {
            _this.numpos = pos - 7

        }
        if (_this.sign == '-') {
            _this.numpos = _this.numpos - 6;
        }

        return _this.numpos;

    },
    makeBlueBoxes: function () {
        if (_this.sign == '+') {
            var box = _this.add.sprite(_this.gridObj[38 - _this.randnum].x - 9, _this.gridObj[38 - _this.randnum].y - 7, 'blueBox')
            box.scale.setTo(0.65)

        }
        else {
            var box = _this.add.sprite(_this.gridObj[38 + _this.randnum].x - 9, _this.gridObj[38 + _this.randnum].y - 7, 'blueBox')
            box.scale.setTo(0.65)
        }
        return box;
    },
    showInteger: function () {

        // Displaying two random numbers in numberplate

        _this.number1 = _this.randomNumGenerator(1);

        _this.num1text = _this.add.text(_this.numberposition(764), 265, _this.number1);
        _this.num1text.fill = '#FFFFFF'
        _this.num1text.font = "Akzidenz-Grotesk BQ";
        _this.box1 = _this.makeBlueBoxes();
        _this.box1.inputEnabled = true;


        _this.number2 = _this.randomNumGenerator(2);
        if (_this.number1 == _this.number2) {
            // console.log("conditom to check for same values so change")
            if (Number(_this.number2) <= 30) {
                Number(_this.number2) += 5;
                _this.randnum += 5;

            }
            else {
                Number(_this.number2) -= 5;

                _this.randnum -= 5;

            }
        }
        _this.num2text = _this.add.text(_this.numberposition(890), 265, _this.number2);
        _this.num2text.fill = '#FFFFFF'
        _this.num2text.font = "Akzidenz-Grotesk BQ";
        _this.box2 = _this.makeBlueBoxes();
        _this.box2.inputEnabled = true;




        _this.evaluateAns();
        _this.box1.events.onInputDown.add(() => {
            _this.selecttile.play();

            if (_this.correctNum == Number(_this.number1)) {
                _this.box1.inputEnabled = false;
                _this.box2.inputEnabled = false;
                // Jump frog
                _this.correctans.play();
                _this.JumpBox(_this.box1);
                _this.time.events.add(600, () => {
                    if (_this.count1 < 1)
                        _this.askQn4();
                    _this.qn_flag = 4;
                    _this.makeSignBoxesDrag();
                })

            }
            else {

                _this.JumpWrong(_this.box1)
                // Wrong selected
            }
        }, _this);


        _this.box2.events.onInputDown.add(() => {
            _this.selecttile.play();


            if (_this.correctNum == Number(_this.number2)) {
                _this.box1.inputEnabled = false;
                _this.box2.inputEnabled = false;
                // Jump frog
                _this.correctans.play();
                _this.JumpBox(_this.box2);
                _this.time.events.add(600, () => {
                    if (_this.count1 <= 0)
                        _this.askQn4();
                    _this.qn_flag = 4;
                    _this.makeSignBoxesDrag();

                })

            }
            else {
                // Wrong selected
                _this.JumpWrong(_this.box2)


            }
        }, _this);



    },
    makeSignBoxesDrag: function () {
        _this.lesserSign.inputEnabled = true;
        _this.lesserSign.input.useHandCursor = false;
        _this.lesserSign.input.enableDrag(true);
        _this.lesserSign.events.onDragStop.add(_this.dropFunc, _this.lesserSign);


        _this.greaterSign.inputEnabled = true;
        _this.greaterSign.input.useHandCursor = false;
        _this.greaterSign.input.enableDrag(true);
        _this.greaterSign.events.onDragStop.add(_this.dropFunc, _this.greaterSign);


    },
    dropFunc: function (sign) {
        _this.result = false;

        // Correct when _this.correctSign == sign.text

        // if already one is dragged and then try to drag other swap/put them in their previous positions 
        if ((sign.text != _this.lesserSign.text) && _this.lesserSign.x != 750) {
            _this.lesserSign.x = 750;
            _this.lesserSign.y = 332;
        }
        else if ((sign.text != _this.greaterSign.text) && _this.greaterSign.x != 868) {
            _this.greaterSign.x = 868;
            _this.greaterSign.y = 332;


        }
        if ((sign.x >= 740 && sign.x <= 870) && (sign.y >= 240 && sign.y <= 335)) {
            if (_this.correctSign == sign.text) {
                _this.result = true;
            }
            _this.selecttile.play();
            sign.x = _this.numberplate.x + 82;
            sign.y = _this.numberplate.y + 5;
            sign.scale.setTo(0.9)
            if (_this.count1 <= 0 && _this.repeatQues == true) {
                _this.repeatQues = false;
                _this.askQn5();
            }
            _this.qn_flag = 5;
            _this.tickSign.inputEnabled = true
        }
        else {
            if (sign.text == '<') {
                sign.x = 750;
                sign.y = 332;

            }
            else {
                sign.x = 868;
                sign.y = 332;
            }
            _this.lesserSign.inputEnabled = true;
            _this.greaterSign.inputEnabled = true;
            _this.qn_flag = 4;


            // Wrong answer
        }


    },
    // Function to store the correct answers
    evaluateAns: function () {

        if (_this.selectedQues == 0) {
            // Conditons for lesser integer
            if (Number(_this.number2) < Number(_this.number1)) {
                _this.correctNum = Number(_this.number2);
                _this.correctposX = _this.box2.x;
                _this.correctposY = _this.box2.y;
                _this.correctSign = '>'

            }
            else {
                _this.correctNum = Number(_this.number1);
                _this.correctposX = _this.box1.x;
                _this.correctposY = _this.box1.y;
                _this.correctSign = '<'


            }
        }
        else {
            if (Number(_this.number2) > Number(_this.number1)) {
                _this.correctNum = Number(_this.number2);
                _this.correctposX = _this.box2.x;
                _this.correctposY = _this.box2.y;
                _this.correctSign = '<'

            }
            else {
                _this.correctNum = Number(_this.number1);
                _this.correctposX = _this.box1.x;
                _this.correctposY = _this.box1.y;
                _this.correctSign = '>'


            }
        }

    },
    JumpBox: function (box) {

        _this.Frogjump();

        if (_this.correctNum >= 0) {
            if (Number(_this.correctNum) < 10) {
                var numpos = 25;
            }
            else {
                var numpos = 17;
            }
        }
        else {
            if (Number(_this.correctNum) <= -10) {

                var numpos = 14;
            }
            else {
                var numpos = 19;

            }
        }
        _this.greenbox = _this.add.sprite(_this.correctposX + 5, _this.correctposY + 5, 'greenbox');
        _this.textg = _this.add.text(_this.correctposX + numpos, _this.correctposY + 17, _this.correctNum);
        _this.textg.fontSize = '24px'
        _this.textg.fill = '#FF0000'
        _this.textg.font = "Akzidenz-Grotesk BQ";
        // _this.textg = _this.makeBlueBoxes();
        box.bringToTop();
        _this.box1.bringToTop();
        _this.box2.bringToTop();
        _this.frog.bringToTop();
        _this.hand.bringToTop();


    },
    JumpWrong: function (box) {

        _this.time.events.add(0, () => {
            _this.tween2 = _this.add.tween(_this.frog);
            _this.tween2.to({ x: box.x, y: box.y }, 750, 'Linear', true, 0);
            _this.tween2.start();

        })
        // _this.Frogjump()
        _this.time.events.add(700, () => {
            _this.tween2.pause();
            _this.wrongans.play();
            _this.JumpToOrigin();
        })
        _this.frog.bringToTop();
    },
    JumpToOrigin: function () {
        _this.tween2 = _this.add.tween(_this.frog);
        _this.tween2.to({ x: 333 - 3, y: 251 - 5 }, 500, 'Linear', true, 0);
        _this.tween2.start();
    },
    Frogjump: function () {
        if (_this.count1 <= 0) {
            _this.previousX = 333;
            _this.previousY = 251;
        }
        var X = (Math.abs(_this.previousX + _this.correctposX)) / 2;
        if (_this.correctposY < _this.previousY)
            var Y = _this.previousY - 30
        else if (_this.correctposY > _this.previousY)
            var Y = _this.previousY + 30
        else {
            var Y = _this.previousY - 30

            var X = (Math.abs(_this.previousX + _this.correctposX)) / 2 - 10;

        }

        _this.tween2 = _this.add.tween(_this.frog);
        _this.tween2.to({ x: X, y: Y }, 400, 'Linear', true, 0);
        _this.tween2.start();


        _this.time.events.add(400, () => {

            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.correctposX + 4, y: _this.correctposY + 2 }, 500, 'Linear', true, 0);
            _this.frog.bringToTop();

            _this.tween.start();
            _this.frog.bringToTop();

        })


    },
    FrogjumpDemo: function () {

        _this.frog.scale.setTo(0.6);

        _this.tween = _this.add.tween(_this.frog);
        _this.tween.to({ x: _this.frog.x - 155, y: _this.frog.y + 20 }, 500, 'Linear', true, 0)
        _this.tween.start();
        _this.time.events.add(550, () => {

            _this.tween2 = _this.add.tween(_this.frog);
            _this.tween2.to({ x: _this.gridObj[38].x - 3, y: _this.gridObj[38].y - 3 }, 750, 'Linear', true, 0);
            _this.tween2.start();
            _this.frog.bringToTop();

            _this.time.events.add(920, () => {
                _this.frog.bringToTop();

            })

        })
        _this.frog.bringToTop();


    },

    stopAllVoices: function () {
        if (_this.demoVo1)
            _this.demoVo1.pause();

        if (_this.demoVo2)
            _this.demoVo2.pause();

        if (_this.demoVo3)
            _this.demoVo3.pause();

        if (_this.Question1)
            _this.Question1.pause();

        if (_this.Question2)
            _this.Question2.pause();

        if (_this.Question3)
            _this.Question3.pause();

        if (_this.Question4)
            _this.Question4.pause();

    },
    DemoFunction: function () {
        _this.demoQues = true;
        _this.skipbtn = _this.add.sprite(850, 480, 'skip');
        _this.skipbtn.inputEnabled = true;
        _this.skipbtn.events.onInputDown.add(() => {

            _this.stopAllVoices();
            _this.skipbtn.events.onInputDown.removeAll();
            _this.skipped = true;
            _this.state.start('NS_INT_6H_G6level1', true, false);


        }, _this)

        _this.askdemo1();
        _this.time.events.add(3600, () => {
            //console.log("ask ques 1 to click frog and the show demo")
            _this.askQn1();
            _this.initialScreen();
            _this.demoanimation();

            _this.time.events.add(400, () => {

            });


        })
        _this.generateGrid();

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

        //* Adding bact button here since this same  back button is used in the demo vedio 
        //* we are removing it in the demo vedio adding only when the game is played.
        _this.backbtn = _this.add.sprite(10, 6, 'backbtn');

        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.stopAllVoices();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50, function () {
                _this.state.start('grade6NumberSystems', true, false);
            });
        });
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


        //* randomize the numbers, horizontal or vertical box and decide numerator and denominator
        // _this.randomizing_elements();
        // _this.gotoFractions();
        _this.generateGrid();
        _this.initialScreen();
        // _this.initialScreen();

        _this.questionid = 1;

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
    askdemo1: function () {
        console.log("Q1...........");
        _this.demoVo1 = document.createElement('audio');
        _this.demoVo1src = document.createElement('source');

        _this.demoVo1src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6H-G6/" + _this.languageSelected + "/NS-INT-6-G6 demo 1_2.mp3");
        _this.demoVo1.appendChild(_this.demoVo1src);
        _this.demoVo1.play();//NS-INT-6-G6 demo 1_2
    },
    askQn1: function () {

        console.log("Q2...........");
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6H-G6/" + _this.languageSelected + "/ClickFrogVO.mp3");
        _this.Question1.appendChild(_this.Question1src);
        _this.Question1.play();
    },

    askQn2: function () {

        console.log("Q3...........");
        // smaller integer
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6H-G6/" + _this.languageSelected + "/NS-INT-6-G6 a_2.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
    },
    askQn3: function () {

        console.log("Q4...........");
        // drag symbol
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6H-G6/" + _this.languageSelected + "/NS-INT-6-G6 c_2.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
    },
    askQn4: function () {

        console.log("Q5...........");
        // Larger integer
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6H-G6/" + _this.languageSelected + "/NS-INT-6-G6 b_2.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
    },
    askQn5: function () {

        console.log("Q6...........");
        // Tick
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6H-G6/" + _this.languageSelected + "/ClickCheckVO.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
    },
    eraseAll: function () {
        if (_this.tween)
            _this.tween.stop();
        if (_this.tween2)
            _this.tween2.stop();

        _this.gridObj.forEach((element) => {
            element.destroy();
        })
        _this.tickSign.destroy();
        if (_this.signBox) {
            _this.signBox.destroy();
            _this.numBox.destroy();
        }
        _this.Outerbox.destroy();
        _this.frog.destroy();

        _this.box1.destroy();
        _this.box2.destroy();
        _this.lesserSign.destroy();
        _this.greaterSign.destroy();
        _this.numberplate.destroy();


        if (_this.greenbox) {
            _this.greenbox.destroy();
        }
        // if (_this.textg)
        _this.textg.destroy();

        // _this.box.destroy();
        if (_this.hand)
            _this.hand.destroy();
        if (_this.tempFrog)
            _this.tempFrog.destroy();

        _this.num1text.destroy();
        _this.num2text.destroy();


    },
    //* This is called when Right btn on the numberpad is clicked to enter numerator and denominator        
    rightbtnClicked: function () {

        _this.noofAttempts++;

        _this.tickSign.inputEnabled = false;
        _this.selecttile.play();
        _this.lesserSign.inputEnabled = false;
        _this.greaterSign.inputEnabled = false;


        if (_this.demoQ == true) {
            _this.demoQ = false;

        }

        _this.gridObj.forEach((element) => {
            element.inputEnabled = false;
        })
        if (_this.result == true) {

            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            // Answer is correct
            _this.qn_flag = -1;

            _this.tweenFixed2();
            _this.correctans.play();
            _this.frog.scale.setTo(0.65);
            _this.time.events.add(1000, () => {
                _this.frog.scale.setTo(0.6);

                _this.celebration();

            })

        }
        else {
            _this.wrongans.play();

            _this.time.events.add(100, () => {
                _this.shakeright();
                _this.time.events.add(350, _this.shakeleft);
            })

            // make signs place back to original
            _this.lesserSign.x = 750;
            _this.lesserSign.y = 332;

            _this.greaterSign.x = 868;
            _this.greaterSign.y = 332;
            _this.lesserSign.inputEnabled = true;
            _this.greaterSign.inputEnabled = true;
            _this.qn_flag = 4;

        }

    },
    celebration: function () {

        _this.correctans.play();
        _this.starActions(_this.count1);
        _this.time.events.add(2000, _this.eraseAll);
        _this.time.events.add(2000, _this.nextquestion);

    },

    nextquestion: function () {
        if (_this.count1 == 0) {
            _this.getQuestion();
        }
        else if (_this.count1 < 6) {

            _this.generateGrid();
            _this.initialScreen();
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(2000, function () {
                // _this.state.start('score');
                _this.state.start('score', true, false, gameID,_this.microConcepts);
            });

        }
    },
    starActions: function (target) {

        _this.score++;
        _this.userHasPlayed = 1;
        // _this.game_id = 'NS_INT_6H_G6';
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
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },
}
