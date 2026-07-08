Game.NS_INT_5H_G6level1 = function () { };

Game.NS_INT_5H_G6level1.prototype =
{
    init: function (game) {
        _this = this;

        //* language is passed as parameter.
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

        telInitializerbbpp.gameIdInit("NS_INT_5H_G6", gradeSelected);
        console.log(gameID, "gameID...");
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

        _this.counterForTimer = 0;

        // //*BB++ variables
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        _this.microConcepts;
        // _this.grade;

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;
        _this.qn_flag = -1;
        _this.yArray = [83, 195, 307, 419]

        //** include the background file, navigation bar, stars, timer objects.

        _this.background = _this.add.tileSprite(0, 40, _this.world.width, _this.world.height, 'bg');
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
        _this.Q3again = true
        _this.Q4again = true

        if (_this.skipped == true) {
            _this.skipped = false;
            _this.count1 = 0;
            _this.getQuestion();
        }
        else {
            _this.DemoFunction();
        }

        _this.askedDenominators = [-1, -1, -1, -1, -1, -1];

        //* start the game with first question
        // _this.time.events.add(2000, _this.getQuestion);
    },
    displayFrog: function () {
        if (_this.count1 > 0)
            _this.greenbox = _this.add.sprite(_this.currentxpos, _this.currentypos, 'greenbox');

        if (_this.count1 <= 0) {


            _this.frog = _this.add.sprite(790, 170 - 10, 'frog');
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
                _this.time.events.add(3000, () => {
                    _this.tweenFixed();

                })


            }


        }
        else {

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
            _this.time.events.add(700, () => {
                _this.hand.scale.setTo(0.75);

                _this.frog.scale.setTo(0.71);
                _this.hand.bringToTop();
                _this.time.events.add(700, () => {

                    _this.frog.scale.setTo(0.7);
                    _this.hand.scale.setTo(0.7);
                    _this.hand.bringToTop();


                })

            })

        })
        _this.time.events.add(2200, () => {

            _this.frog.inputEnabled = true;
            _this.hand.destroy();

        })


    },
    tempFrogtweens: function (type) {



        if (type == 'positive') {
            var X = (333 + 573) / 2
            var Y = 251 - 30
            var Z = 573;

        }
        else if (type == 'negative') {
            var X = (93 + 333) / 2
            var Y = 251 - 30
            var Z = 93;

        }
        else {
            return;
        }

        _this.tween2 = _this.add.tween(_this.tempFrog);
        _this.tween2.to({ x: X, y: Y }, 400, 'Linear', true, 0);
        _this.tween2.start();


        _this.time.events.add(400, () => {

            _this.tween = _this.add.tween(_this.tempFrog);
            _this.tween.to({ x: Z - 3, y: 251 - 3 }, 500, 'Linear', true, 0);
            _this.frog.bringToTop();

            _this.tween.start();
            _this.frog.bringToTop();


        })



    },
    demotweens: function () {


        _this.hand = _this.add.sprite(960, 560, 'hand');

        _this.time.events.add(2900, () => {

            _this.time.events.add(0, () => {
                _this.hand.destroy();
                // For positive movement
                _this.hand = _this.add.sprite(415, 270, 'hand');
                _this.hand.scale.setTo(0.7)
                _this.tween = _this.add.tween(_this.hand);
                _this.tween.to({ x: _this.hand.x + 250, y: _this.hand.y }, 1000, 'Linear', true, 0)
                _this.tween.start();
                _this.time.events.add(1000, () => {
                    _this.tween = _this.add.tween(_this.hand);
                    _this.tween.to({ x: _this.hand.x, y: _this.hand.y - 70 }, 800, 'Linear', true, 0)
                    _this.tween.start();
                })


                _this.time.events.add(1600, () => {
                    _this.tempFrog = _this.add.sprite(333, 251, 'frog')
                    _this.tempFrog.scale.setTo(0.6);

                    _this.tween = _this.add.tween(_this.hand);
                    _this.tween.to({ x: 350, y: 280 }, 800, 'Linear', true, 0)
                    _this.tween.start();
                    _this.hand.bringToTop();

                    _this.time.events.add(1200, () => {

                        _this.tween = _this.add.tween(_this.hand);
                        _this.tween.to({ x: 600, y: 290 }, 1000, 'Linear', true, 0)
                        _this.tween.start();
                        _this.time.events.add(900, () => {
                            _this.tempFrogtweens('positive');


                        })

                    })
                })
                _this.time.events.add(5000, () => {
                    _this.hand.destroy();

                })

                // For negative
                _this.time.events.add(5500, () => {
                    _this.tempFrog.destroy();
                    _this.hand = _this.add.sprite(340, 270, 'hand');
                    _this.hand.scale.setTo(0.7)
                    _this.tween = _this.add.tween(_this.hand);
                    _this.tween.to({ x: _this.hand.x - 300, y: _this.hand.y }, 1000, 'Linear', true, 0)
                    _this.tween.start();
                    _this.time.events.add(1000, () => {
                        _this.tween = _this.add.tween(_this.hand);
                        _this.tween.to({ x: _this.hand.x, y: _this.hand.y + 70 }, 800, 'Linear', true, 0)
                        _this.tween.start();
                    })

                    _this.time.events.add(1600, () => {
                        _this.tempFrog = _this.add.sprite(333, 251, 'frog')
                        _this.tempFrog.scale.setTo(0.6);
                        _this.tween = _this.add.tween(_this.hand);
                        _this.tween.to({ x: 350, y: 280 }, 800, 'Linear', true, 0)
                        _this.tween.start();
                        _this.hand.bringToTop();

                        _this.time.events.add(1200, () => {
                            _this.tween = _this.add.tween(_this.hand);
                            _this.tween.to({ x: 100, y: 290 }, 800, 'Linear', true, 0)
                            _this.tween.start();
                            _this.time.events.add(700, () => {
                                _this.tempFrogtweens('negative');
                                // _this.hand.destroy();

                            })


                        })

                    })
                })
                // For Zero
                _this.time.events.add(11000, () => {
                    _this.hand.destroy();
                    _this.tempFrog.destroy();
                    _this.hand = _this.add.sprite(350, 270, 'hand');
                    _this.hand.scale.setTo(0.7)
                    _this.tween = _this.add.tween(_this.hand);
                    _this.tween.to({ x: _this.hand.x + 15, y: _this.hand.y + 5 }, 800, 'Linear', true, 0)
                    _this.tween.start();
                    _this.time.events.add(1000, () => {
                        _this.tempFrog = _this.add.sprite(333, 251, 'frog')
                        _this.tempFrog.scale.setTo(0.6);
                        _this.hand.bringToTop();
                    })

                })
                _this.time.events.add(13000, () => {
                    _this.tempFrog.destroy();
                    _this.hand.destroy();
                })


            })
        })

    },
    demoanimation: function () {
        _this.time.events.add(400, () => {
            _this.hand = _this.add.sprite(825, 215 - 35, 'hand');
            _this.hand.scale.setTo(0.7)
            _this.time.events.add(700, () => {
                _this.hand.scale.setTo(0.65);
                _this.jump.play();

                _this.frog.scale.setTo(0.74);
                _this.hand.bringToTop();
                _this.time.events.add(700, () => {

                    _this.frog.scale.setTo(0.7);
                    _this.hand.scale.setTo(0.7);
                    _this.hand.bringToTop();


                })

            })

        })
        _this.time.events.add(2400, () => {

            _this.hand.destroy();
            _this.time.events.add(200, () => {
                _this.FrogjumpDemo();
                _this.frog.scale.setTo(0.6);

                _this.time.events.add(500, _this.showDicehand)

            })

        })
    },
    showDicehand: function () {
        _this.hand = _this.add.sprite(860, 340 - 35, 'hand');
        _this.hand.scale.setTo(0.7);
        if (_this.languageSelected == 'Odiya') {
            _this.time.events.add(700, () => {//500
                console.log("Odiya");
                _this.askQn2();
            });
        } else {
            _this.askQn2();
        }

        console.log("ask Q2 ?");
        _this.time.events.add(700, () => {
            _this.hand.scale.setTo(0.65);

            _this.signDice.scale.setTo(0.68);
            _this.numberDice.scale.setTo(0.53);

            _this.hand.bringToTop();
            _this.time.events.add(700, () => {

                _this.signDice.scale.setTo(0.65);
                _this.numberDice.scale.setTo(0.5);

                _this.hand.scale.setTo(0.7);
                _this.hand.bringToTop();

            })

        })
        _this.time.events.add(2200, () => {

            _this.hand.destroy();
            _this.time.events.add(500, () => {
                _this.rollDice();

                _this.time.events.add(1000, _this.showTilehand)

            })

        })
    },
    showTilehand: function () {
        _this.askQn3();

        _this.gridObj.forEach((element) => {
            element.inputEnabled = false;
        })

        _this.time.events.add(4100, () => {//1900
            console.log("second demo")
            _this.askdemo2();
            _this.time.events.add(1200, _this.showDiceHandAnim)
            _this.time.events.add(2500, () => {
                _this.hand.destroy();
                _this.hand = _this.add.sprite(350, 265, 'hand');
                _this.hand.scale.setTo(0.6)

            })

            _this.time.events.add(4000, () => {
                _this.icount = 0
                _this.loopId = _this.time.events.loop(300, _this.showCountAnim, _this);
            })

        });

        _this.time.events.add(13000, () => {//10000
            _this.askdemo3();
            _this.time.events.add(1400, _this.showCorrectHandAnim)

        });

    },
    showDiceHandAnim: function () {
        _this.hand = _this.add.sprite(760, 320, 'hand');
        _this.hand.scale.setTo(0.6)

        _this.tween = _this.add.tween(_this.hand);
        _this.tween.to({ x: _this.hand.x + 130, y: _this.hand.y }, 1200, 'Linear', true, 0)
        _this.tween.start();
    },
    showCountAnim: function () {
        // To show arrows animation 
        if (_this.icount == _this.randnum - 1) {
            _this.time.events.remove(_this.loopId);
        }
        if (_this.sign == '+')
            _this.inc = 10;
        else
            _this.inc = 40;

        if (_this.sign == '+') {
            _this.arrow = _this.add.sprite(_this.gridObj[38 - _this.icount].x + _this.inc, _this.gridObj[38 - _this.icount].y - 16, 'arrow2');
            _this.arrow.scale.setTo(0.35);
            _this.Arrows.push(_this.arrow);
            _this.inc += 4;
            _this.lastArrow = _this.arrow;
        }
        else {

            _this.arrow = _this.add.sprite(_this.gridObj[38 + _this.icount].x - _this.inc, _this.gridObj[38 + _this.icount].y - 16, 'arrow2Flipped');
            _this.arrow.scale.setTo(0.35);
            _this.Arrows.push(_this.arrow);

            _this.inc += 4;
            _this.lastArrow = _this.arrow;

        }
        _this.icount += 1;

    },
    showCorrectHandAnim: function () {
        _this.hand.destroy();
        // _this.currentxpos and currentypos holds the correct result which we can use to position hands
        _this.hand = _this.add.sprite(_this.currentxpos + 17, _this.currentypos + 14, 'hand');
        _this.hand.scale.setTo(0.6)
        _this.time.events.add(700, () => {
            _this.hand.scale.setTo(0.55);

            _this.ChangeTileColour();

            _this.hand.bringToTop();
            _this.lastArrow.bringToTop();

            _this.time.events.add(700, () => {

                _this.hand.scale.setTo(0.6);
                _this.hand.bringToTop();
                // Need to un comment this
                _this.time.events.add(1200, _this.showTickhand)

            })

        })


    },
    showTickhand: function () {
        _this.hand.destroy();
        _this.demoQues = false;
        _this.hand = _this.add.sprite(810, 455 - 35, 'hand');
        _this.hand.scale.setTo(0.7)
        _this.askQn4();
        _this.time.events.add(700, () => {
            _this.hand.scale.setTo(0.65);

            _this.tickSign.scale.setTo(0.95);

            _this.hand.bringToTop();

            _this.time.events.add(700, () => {

                _this.tickSign.scale.setTo(0.9);

                _this.hand.scale.setTo(0.7);
                _this.hand.bringToTop();


            })

        })
        _this.time.events.add(2200, () => {

            _this.hand.destroy();
            _this.time.events.add(500, () => {
                _this.Arrows.forEach((element) => {
                    element.destroy();
                })
                // _this.jump.play();
                _this.Frogjump();
                _this.correctans.play();
                _this.time.events.add(1000, _this.tweenFixed2);
                _this.time.events.add(3000, () => {
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

            _this.frog = _this.add.sprite(_this.currentxpos - 6, _this.currentypos - 13, 'flipfrog');
            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.frog.x, y: _this.frog.y + 13 }, 600, 'Linear', true, 0)
            _this.tween.start();

        }
        else {
            _this.frog = _this.add.sprite(_this.currentxpos - 5, _this.currentypos - 3, 'frog');

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
        _this.showdice();
        _this.displayTick();


    },
    initialScreen: function () {
        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

        if (_this.count1 <= 0) {

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
                _this.FrogjumpDemo();

                _this.time.events.add(1000, () => {//500
                    // Enable time input
                    _this.askQn2();
                    _this.qn_flag = 2;
                    _this.signDice.inputEnabled = true;
                    _this.numberDice.inputEnabled = true;


                });

            }, _this);
        }
        else if (_this.count > 0) {
            _this.qn_flag = 2;
        }
    },
    ChangeTileColour: function () {

        if (_this.count1 == -1) {
            _this.userSelectedX = _this.currentxpos;
            _this.userSelectedY = _this.currentypos;
            _this.count = _this.gridObj[_this.previndex].getChildAt(0)._text;
        }

        var xCordinate = _this.userSelectedX;
        var yCordinate = _this.userSelectedY;

        if (_this.greenbox) {
            _this.greenbox.destroy();
            _this.textg.destroy();
        }
        _this.greenbox = _this.add.sprite(xCordinate, yCordinate, 'greenbox');
        _this.frog.bringToTop();

        if (_this.count >= 10)
            xPos = 12
        else if (_this.count >= 0) {
            xPos = 18;
        }
        else if (_this.count >= -5) {
            xPos = 12;
        }
        else
            xPos = 8;

        _this.textg = _this.add.text(xCordinate + xPos, yCordinate + 13, _this.count);
        _this.frog.bringToTop();

        _this.textg.anchor.setTo(0.1);
        _this.textg.align = 'center';
        _this.textg.font = "Akzidenz-Grotesk BQ";
        _this.textg.fontSize = "24px";
        _this.textg.fontWeight = 'normal';
        _this.textg.fill = '#FF0000';


    },
    displayCorrectGreenbox: function () {

        if (_this.count1 == 0) {
            _this.currentxpos = _this.gridObj[38].x;
            _this.currentypos = _this.gridObj[38].y;
            _this.previousX = _this.currentxpos;
            _this.previousY = _this.currentypos;

        }
        _this.greenbox = _this.add.sprite(_this.currentxpos, _this.currentypos, 'greenbox');
        count = 0;
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

        _this.textg = _this.add.text(_this.currentxpos + xPos, _this.currentypos + 13, count);
        _this.textg.anchor.setTo(0.1);
        _this.textg.align = 'center';
        _this.textg.font = "Akzidenz-Grotesk BQ";
        _this.textg.fontSize = "24px";
        _this.textg.fontWeight = 'normal';
        _this.textg.fill = '#FF0000';

    },
    showdice: function () {
        // _this.displayCorrectGreenbox();
        _this.signDice = _this.add.sprite(780, 300, 'dicesign');
        _this.signDice.scale.setTo(0.65);
        _this.signDice.anchor.setTo(0.5);
        _this.signDice.inputEnabled = false; //need to make false initially

        _this.numberDice = _this.add.sprite(870, 300, 'dicenumber')
        _this.numberDice.scale.setTo(0.5);
        _this.numberDice.anchor.setTo(0.5);
        _this.numberDice.inputEnabled = false;
        if (_this.count1 == 0) {
            // _this.askQn2();
            // _this.qn_flag = 2;
            // _this.time.events.add(1000, () => {
            //     _this.signDice.inputEnabled = true;
            //     _this.numberDice.inputEnabled = true;

            // })
        }
        else if (_this.count1 > 0) {
            _this.qn_flag = 2;

            _this.signDice.inputEnabled = true;
            _this.numberDice.inputEnabled = true;
        }
        _this.timer = _this.time.create(false);
        _this.signDice.events.onInputDown.add(function () {
            //console.log("dice clicked")
            _this.signDice.inputEnabled = false;
            _this.numberDice.inputEnabled = false;
            _this.rollDice();

        }, _this);


        _this.numberDice.events.onInputDown.add(function () {
            //console.log("dice clicked")
            _this.signDice.inputEnabled = false;
            _this.numberDice.inputEnabled = false;

            _this.rollDice();

        }, _this);
    },
    rollDice: function () {

        _this.diceroll.play();
        if (_this.timer) {
            _this.timer.stop();
            _this.timer = null;
        }
        _this.timer = _this.time.create(false);
        // Play an audio
        _this.timer.loop(60, function () {

            _this.signDice.rotation -= 0.523599
            _this.signDice.scale.setTo(0.65)
            //    //console.log(_this.signDice.rotation*(180/Math.PI))

            _this.numberDice.rotation -= 0.523599
            _this.numberDice.scale.setTo(0.5)

        }, _this);

        _this.timer.start();
        _this.time.events.add(750, function () {
            // Stopping Timer after dice roll
            //console.log("stop dice roll")
            _this.timer.stop();

            // function to show randomized integer boxes
            _this.showInteger();

        });

    },
    displayTick: function () {

        _this.tickSign = _this.add.sprite(790, 380, 'tick')
        _this.tickSign.scale.setTo(0.9);


        _this.tickSign.inputEnabled = false;
        _this.tickSign.events.onInputDown.add(_this.rightbtnClicked, _this);
    },
    showInteger: function () {


        _this.randsign = Math.floor(Math.random() * 2);
        if (_this.randsign == 0) {
            _this.sign = '+';
        }
        else {
            _this.sign = '-';
        }

        // Genrating unique random number

        _this.randnum = Math.floor(Math.random() * 6) + 1;
        for (var i = _this.count1 - 1; i >= 0; i--) {
            if (_this.sign + _this.randnum == _this.askedDenominators[i]) {
                _this.randnum = Math.floor(Math.random() * 6) + 1;
                i = _this.count1 - 1;
            }
        }
        if (_this.demoQues == true && _this.randnum == 6)
            _this.randnum = 5;
        _this.askedDenominators[_this.count1] = _this.sign + _this.randnum;
        _this.signBox = _this.add.sprite(790, 300, 'dicebox');
        _this.signBox.anchor.setTo(0.5);
        _this.signBox.scale.setTo(0.85);
        _this.signDice.destroy();
        _this.signText = _this.add.text(8, 25, _this.sign);
        _this.signText.anchor.setTo(1);
        _this.signText.align = 'center';
        _this.signText.font = "Akzidenz-Grotesk BQ";
        _this.signText.fontSize = "40px";
        _this.signText.fontWeight = 'bold';
        _this.signBox.addChild(_this.signText);


        _this.numBox = _this.add.sprite(870, 300, 'dicebox');
        _this.numBox.anchor.setTo(0.5);
        _this.numBox.scale.setTo(0.85);
        _this.numberDice.destroy();
        _this.numText = _this.add.text(15, 25, _this.randnum);
        _this.numText.anchor.setTo(1);
        _this.numText.align = 'center';
        _this.numText.font = "Akzidenz-Grotesk BQ";
        _this.numText.fontSize = "40px";
        _this.numText.fontWeight = 'bold';
        _this.numBox.addChild(_this.numText);

        _this.evaluateCorrectPos();

        if (_this.count1 == 0 && _this.Q3again == true) {
            _this.Q3again = false;
            _this.askQn3();

        }
        _this.qn_flag = 3;

        _this.gridObj.forEach(element => {
            element.inputEnabled = true;
            element.events.onInputDown.add((event) => {
                _this.userSelectedX = event.x;
                _this.userSelectedY = event.y;
                _this.count = event.getChildAt(0)._text;

                _this.selecttile.play();
                _this.ChangeTileColour();

                // To click tick event
                // MAKE selected box green

                _this.time.events.add(500, () => {
                    if (_this.count1 == 0 && _this.Q4again == true) {
                        _this.Q4again = false;
                        _this.askQn4();

                    }
                    _this.qn_flag = 4;

                    _this.tickSign.inputEnabled = true;

                })

            }, _this);
        });



    },
    Frogjump: function () {
        if (_this.count1 == -1) {
            _this.userSelectedX = _this.currentxpos;
            _this.userSelectedY = _this.currentypos;
        }
        if (_this.count1 <= 0) {
            _this.previousX = 333;
            _this.previousY = 251;
        }
        var X = (Math.abs(_this.previousX + _this.userSelectedX)) / 2;
        if (_this.userSelectedY < _this.previousY)
            var Y = _this.previousY - 30
        else if (_this.userSelectedY > _this.previousY)
            var Y = _this.previousY + 30
        else {
            var Y = _this.previousY - 30

            var X = (Math.abs(_this.previousX + _this.userSelectedX)) / 2 - 10;

        }

        _this.tween2 = _this.add.tween(_this.frog);
        _this.tween2.to({ x: X, y: Y }, 400, 'Linear', true, 0);
        _this.tween2.start();


        _this.time.events.add(400, () => {

            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.userSelectedX - 3, y: _this.userSelectedY - 3 }, 500, 'Linear', true, 0);
            _this.frog.bringToTop();

            _this.tween.start();
            _this.frog.bringToTop();

        })


    },
    FrogjumpDemo: function () {

        _this.frog.scale.setTo(0.6);

        //console.log("isnide demo jump")
        // _this.time.events.add(2500, () => {
        _this.tween = _this.add.tween(_this.frog);
        _this.tween.to({ x: _this.frog.x - 155, y: _this.frog.y + 20 }, 500, 'Linear', true, 0)
        _this.tween.start();
        // // })
        _this.time.events.add(550, () => {

            _this.tween2 = _this.add.tween(_this.frog);
            _this.tween2.to({ x: _this.gridObj[38].x - 3, y: _this.gridObj[38].y - 3 }, 750, 'Linear', true, 0);
            _this.tween2.start();
            _this.frog.bringToTop();

            _this.time.events.add(920, () => {
                // _this.frog0 = true;
                // _this.ChangeTileColour();
                _this.frog.bringToTop();

            })

        })
        _this.frog.bringToTop();


    },
    resetFrog: function () {

        // Resets frog positio n if selected tile is wrong
        _this.time.events.add(500, () => {

            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.frog.x, y: _this.frog.y }, 600, 'Linear', true, 0);
            _this.tween.start();
            _this.frog.bringToTop();
        })
        _this.greenbox = _this.add.sprite(_this.previousX, _this.previousY, 'greenbox');
        _this.frog.bringToTop();



    },
    evaluateCorrectPos: function () {
        // To store correct position of jumping 

        if (!_this.currentxpos) {
            _this.previousX = _this.gridObj[38].x
            _this.previousY = _this.gridObj[38].y;
        }
        else {
            _this.previousX = _this.currentxpos;
            _this.previousY = _this.currentypos;
        }

        if (_this.sign == '+' && _this.count1 <= 0) {

            _this.currentxpos = _this.gridObj[38 - _this.randnum].x;
            _this.currentypos = _this.gridObj[38 - _this.randnum].y;
            _this.previndex = 38 - _this.randnum;
        }
        else if (_this.sign == '-' && _this.count1 <= 0) {

            _this.currentxpos = _this.gridObj[38 + _this.randnum].x;
            _this.currentypos = _this.gridObj[38 + _this.randnum].y;
            _this.previndex = 38 + _this.randnum;

        }
        else if (_this.sign == '+') {
            _this.currentxpos = _this.gridObj[_this.previndex - _this.randnum].x;
            _this.currentypos = _this.gridObj[_this.previndex - _this.randnum].y;
            _this.previndex = _this.previndex - _this.randnum;
        }
        else if (_this.sign == '-') {

            _this.currentxpos = _this.gridObj[_this.previndex + _this.randnum].x;
            _this.currentypos = _this.gridObj[_this.previndex + _this.randnum].y;
            _this.previndex = _this.previndex + _this.randnum;

        }
        // To check next position for flipping
        // For odd line

        if (_this.yArray.includes(_this.currentypos)) {
            _this.nextIndex = _this.previndex + 1;

        }
        else {
            _this.nextIndex = _this.previndex - 1;
        }
        if (Number(_this.gridObj[_this.nextIndex].getChildAt(0)._text) < Number(_this.gridObj[_this.previndex].getChildAt(0)._text)) {

            _this.flip = true;
        }
        else {

            _this.flip = false;
        }


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
        // _this.demoQ=true;
        _this.demoQues = true;
        _this.skipbtn = _this.add.sprite(840, 480, 'skip');
        _this.skipbtn.inputEnabled = true;
        _this.skipbtn.events.onInputDown.add(() => {

            _this.stopAllVoices();
            _this.skipbtn.events.onInputDown.removeAll();
            // 
            _this.skipped = true;
            // _this.backbtn.visible = true;
            _this.state.start('NS_INT_5H_G6level1', true, false);


        }, _this)

        _this.askdemo1();
        _this.time.events.add(2000, _this.demotweens)
        _this.time.events.add(25000, () => {//19000
            console.log("ask ques 1")
            _this.askQn1();
            _this.initialScreen();

            _this.demoanimation();

            _this.time.events.add(400, () => {

            });
        })
        _this.generateGrid();
    },


    enableDemo: function () {

        _this.askQn1();
        _this.qn_flag = 1;
        _this.demoQ = true;


        _this.frogoutlay = _this.add.sprite(0, 0, 'frogoutlay')
        _this.frog.inputEnabled = true;

        _this.frog.events.onInputDown.add(function () {
            //console.log("frog clicked")
            _this.jump.play();
            _this.frog.inputEnabled = false;
            _this.FrogjumpDemo();
            _this.frogoutlay.destroy();
            _this.diceoutlay = _this.add.sprite(0, 0, 'diceoutlay')
            _this.diceoutlay.bringToTop();
            _this.time.events.add(930, () => {

                _this.diceoutlay.bringToTop();
            })


            //    Show frog jumping
            // if (_this.languageSelected == 'Odiya') {
            //     _this.time.events.add(1500, () => {//500
            //         // Enable time input
            //         console.log("Q222");
            //         _this.askQn2();
            //         _this.qn_flag = 2;
            //         _this.signDice.inputEnabled = true;
            //         _this.numberDice.inputEnabled = true;


            //     });
            // } else {
            //     _this.time.events.add(1000, () => {//500
            //         // Enable time input
            //         _this.askQn2();
            //         _this.qn_flag = 2;
            //         _this.signDice.inputEnabled = true;
            //         _this.numberDice.inputEnabled = true;


            //     });
            // }
            _this.time.events.add(1000, () => {//500
                // Enable time input
                _this.askQn2();
                _this.qn_flag = 2;
                _this.signDice.inputEnabled = true;
                _this.numberDice.inputEnabled = true;


            });

        }, _this);

    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () {
        if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.speakerbtnClicked = false;
        }
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
        _this.sceneCount++;

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

    //    stopVoice: function () {
    //        if(_this.Question1)
    //        {
    //            if(_this.Question1.contains(_this.Question1src))
    //            {
    //                _this.Question1.removeChild(_this.Question1src);
    //                _this.Question1src = null;
    //            }
    //            
    //            if(!_this.Question1.paused)
    //            {
    //                _this.Question1.pause();
    //                _this.Question1.currentTime = 0.0;
    //            }
    //            _this.Question1 = null;
    //            _this.Question1src = null;
    //        }
    //        
    //        if(_this.Question2)
    //        {
    //            if(_this.Question2.contains(_this.Question2src))
    //            {
    //                _this.Question2.removeChild(_this.Question2src);
    //                _this.Question2src = null;
    //            }
    //            
    //            if(!_this.Question2.paused)
    //            {
    //                _this.Question2.pause();
    //                _this.Question2.currentTime = 0.0;
    //            }
    //            _this.Question2 = null;
    //            _this.Question2src = null;
    //        }
    //
    //
    //        if (_this.correctans) {
    //            if (_this.correctans.isPlaying) {
    //                _this.correctans.stop();
    //                _this.correctans = null;
    //            }
    //        }
    //    },

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
        _this.demoVo1 = document.createElement('audio');
        _this.demoVo1src = document.createElement('source');
        _this.demoVo1src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-5H-G6/" +
            _this.languageSelected + "/NS-INT-5-G6 demo 1.mp3");
        _this.demoVo1.appendChild(_this.demoVo1src);
        _this.demoVo1.play();
    },
    askdemo2: function () {
        _this.demoVo2 = document.createElement('audio');
        _this.demoVo2src = document.createElement('source');
        _this.demoVo2src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-5H-G6/" +
            _this.languageSelected + "/NS-INT-5-G6 demo 2.mp3");
        _this.demoVo2.appendChild(_this.demoVo2src);
        _this.demoVo2.play();
    },
    askdemo3: function () {
        _this.demoVo3 = document.createElement('audio');
        _this.demoVo3src = document.createElement('source');
        _this.demoVo3src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-5H-G6/" +
            _this.languageSelected + "/NS-INT-5-G6 demo 3.mp3");
        _this.demoVo3.appendChild(_this.demoVo3src);
        _this.demoVo3.play();
    },
    askQn1: function () {
        // //console.log("What are the fractions shown here?");
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-5H-G6/" +
            _this.languageSelected + "/ClickFrogVO.mp3");
        _this.Question1.appendChild(_this.Question1src);
        _this.Question1.play();
    },

    askQn2: function () {
        // //console.log('Add the fractions by dragging them to the whole.');
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-5H-G6/" +
            _this.languageSelected + "/RollDiceVO.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
    },
    askQn3: function () {
        // //console.log('Enter the answer.');
        _this.Question3 = document.createElement('audio');
        _this.Question3src = document.createElement('source');
        _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-5H-G6/" +
            _this.languageSelected + "/SelectTileVO.mp3");
        _this.Question3.appendChild(_this.Question3src);
        _this.Question3.play();
    },
    askQn4: function () {
        // //console.log('Enter the answer.');
        _this.Question4 = document.createElement('audio');
        _this.Question4src = document.createElement('source');
        _this.Question4src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-5H-G6/" +
            _this.languageSelected + "/ClickCheckVO.mp3");
        _this.Question4.appendChild(_this.Question4src);
        _this.Question4.play();
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
        if (_this.greenbox) {
            _this.greenbox.destroy();
            _this.textg.destroy();
        }
        if (_this.hand)
            _this.hand.destroy();
        if (_this.tempFrog)
            _this.tempFrog.destroy();
        // Destroying numerator n denominators  

    },
    //* This is called when Right btn on the numberpad is clicked to enter numerator and denominator        
    rightbtnClicked: function () {

        _this.tickSign.inputEnabled = false;

        // Show jump regardless of correct or not
        // Here show frog jumping
        if (_this.demoQ == true) {
            _this.demoQ = false;
            // _this.FrogjumpDemo();

        }
        // elsse
        _this.jump.play();
        _this.Frogjump();

        _this.gridObj.forEach((element) => {
            element.inputEnabled = false;
        })
        _this.time.events.add(1500, () => {
            if (_this.userSelectedX == _this.currentxpos && _this.userSelectedY == _this.currentypos) {
                // Answer is correct
                _this.qn_flag = -1;

                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);


                _this.tweenFixed2();
                _this.correctans.play();
                _this.frog.scale.setTo(0.65);
                _this.time.events.add(1000, () => {
                    _this.frog.scale.setTo(0.6);

                    _this.celebration();

                })

            }
            else {
                _this.noofAttempts++;

                _this.wrongans.play();
                // Jump frog back to original

                _this.time.events.add(100, () => {
                    _this.shakeright();
                    _this.time.events.add(350, _this.shakeleft);
                })

                _this.time.events.add(1500, () => {
                    if (_this.count1 == 0) {
                        _this.previousX = _this.gridObj[38].x
                        _this.previousY = _this.gridObj[38].y
                    }
                    _this.frog.x = _this.previousX - 5;
                    _this.frog.y = _this.previousY;
                    _this.greenbox.destroy();

                    _this.textg.destroy();

                    _this.resetFrog();

                    _this.gridObj.forEach((element) => {
                        element.inputEnabled = true;
                    })
                    _this.qn_flag = 3;

                })

            }
        });

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
                //_this.state.start('score');
                _this.state.start('score', true, false, gameID, _this.microConcepts);
            });
        }
    },
    starActions: function (target) {

        _this.score++;
        // _this.userHasPlayed = 1;
        // _this.game_id = 'NS_INT_5H_G6';
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