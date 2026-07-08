Game.NS_INT_13H_G6level1 = function () { };

Game.NS_INT_13H_G6level1.prototype =
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

        _this.askdemo1 = _this.createAudio("NS-INT-13-G6-demo 1");
        _this.askdemo2 = _this.createAudio("NS-INT-13-G6-demo 2");
        _this.askdemo3 = _this.createAudio("NS-INT-13-G6-demo 3");
        _this.askdemo4 = _this.createAudio("NS-INT-13-G6-demo 4");
        _this.askdemo5 = _this.createAudio("NS-INT-13-G6-demo 5");
        _this.askdemo6 = _this.createAudio("NS-INT-13-G6-demo 6");
        _this.askQn1 = _this.createAudio("RollDiceVO");
        _this.askQn2 = _this.createAudio("NS-INT-13-G6 a");
        _this.askQn3 = _this.createAudio("NS-INT-13-G6 b");
        _this.askQn5 = _this.createAudio("ClickCheckVO");

        telInitializerbbpp.gameIdInit("NS_INT_13H_G6", gradeSelected);
        console.log(gameID,"gameID...");
    },

    create: function (game) {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.count1 = -1;
        _this.speakerbtn;
        _this.background;
        _this.Arrows = [];
        _this.firstnum = false;

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
        _this.yArray = [68, 180, 292, 404];

        //** include the background file, navigation bar, stars, timer objects.

        _this.background = _this.add.tileSprite(0, 20, _this.world.width, _this.world.height, 'bg');
        _this.header = _this.add.sprite(0, 0, 'header').scale.setTo(1, 0.6);
        _this.footer = _this.add.sprite(0, 472, 'numpadbg')
        _this.footer.scale.setTo(1);
        _this.flip = false;



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
                    _this.askQn1.play();
                    _this.time.events.add(2000, function () {
                        _this.speakerbtnClicked = false;
                        _this.EnableVoice();
                    });
                }
                if (_this.qn_flag == 2) {
                    if (_this.Question2) {
                        _this.Question2.pause();
                        _this.Question2.currentTime = 0;
                    }
                    _this.askQn2.play();
                    _this.time.events.add(6500, function () {
                        _this.speakerbtnClicked = false;
                        _this.EnableVoice();
                    });
                }
                if (_this.qn_flag == 3) {
                    // _this.stopVoice();
                    if (_this.Question3) {
                        _this.Question3.pause();
                        _this.Question3.currentTime = 0;
                    }
                    _this.askQn3.play();
                    _this.time.events.add(2000, function () {
                        _this.speakerbtnClicked = false;
                        _this.EnableVoice();
                    });
                }
                if (_this.qn_flag == -1) {
                    _this.time.events.add(2000, function () {
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

        _this.generateStarsForTheScene(6);

        // For playing audio 2nd time but only once
        _this.repeatQues = true;

        if (_this.skipped == true) {
            _this.skipped = false;
            _this.count1 = 0;
            _this.getQuestion();
        }
        else {
            _this.DemoFunction();
        }

        _this.int1 = '';
        _this.int2 = '';
        _this.flipleft = false;
        _this.askedDenominators = [-1, -1, -1, -1, -1, -1];

        //* start the game with first question
        // _this.time.events.add(2000, _this.getQuestion);
    },
    // Creating audio sources
    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-13H-G6/" + _this.languageSelected + "/" + src + ".mp3");
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

        })
    },
    shakeleft: function () {
        // _this.frog.x +=10 
        _this.tween = _this.add.tween(_this.frog);
        _this.tween.to({ x: _this.frog.x - 10, y: _this.frog.y }, 400, 'Bounce', true, 0)
        _this.tween.start();
        _this.time.events.add(400, () => {

            _this.tween = _this.add.tween(_this.frog);
            _this.tween.to({ x: _this.frog.x + 10, y: _this.frog.y }, 400, 'Bounce', true, 0)
            _this.tween.start();

        })
    },

    DemoFunction: function () {
        _this.demoQues = true;
        _this.skipbtn = _this.add.sprite(850, 480, 'skip');
        _this.skipbtn.inputEnabled = true;
        _this.skipbtn.events.onInputDown.add(() => {
            _this.demoQues = false;
            _this.stopAllVoices();
            _this.skipbtn.events.onInputDown.removeAll();
            _this.skipped = true;
            _this.state.start('NS_INT_13H_G6level1', true, false);


        }, _this)
        _this.askdemo1.play();


        _this.generateGrid();
        _this.qmark1.destroy();
        _this.demoQ1 = _this.add.text(708, 196, "+1");
        _this.settextProperties(_this.demoQ1);
        _this.time.events.add(3000, () => {
            _this.hand = _this.add.sprite(750, 240, 'hand');
            _this.hand.scale.setTo(0.6);
            _this.tween = _this.add.tween(_this.hand);
            _this.tween.to({ x: 910, y: 240 }, 400, 'Linear', true, 0)
            _this.tween.start();

        })
        _this.time.events.add(4500, () => {
            _this.hand.destroy();
        })
        _this.time.events.add(8550, () => {
            _this.showdemofrog();
            _this.askdemo2.play();

        })


        _this.flipbtn = _this.add.sprite(780, 280, 'flip');
        _this.flipbtn.scale.setTo(0.6);
        _this.tickSign = _this.add.sprite(775, 375, 'tick')
        _this.tickSign.scale.setTo(1.3);

    },
    showdemofrog: function () {
        _this.hand = _this.add.sprite(715, 240, 'hand');
        _this.hand.scale.setTo(0.6);
        _this.time.events.add(600, () => {
            _this.tween = _this.add.tween(_this.hand);
            _this.tween.to({ x: 395, y: 250 }, 600, 'Linear', true, 0)
            _this.tween.start();
            _this.time.events.add(700, () => {
                _this.tempfrog = _this.add.sprite(385, 236 - 3, 'frog');
                _this.tempfrog.scale.setTo(0.65);
                _this.jump.play();
                _this.hand.destroy();
                _this.time.events.add(2800, _this.showflipdemo);

            })
        })

    },
    showflipdemo: function () {
        _this.qmarkS.destroy();
        _this.demoop = _this.add.text(773, 195, "+");
        _this.settextProperties(_this.demoop);
        _this.askdemo3.play();
        _this.hand = _this.add.sprite(793, 220, 'hand');
        _this.hand.scale.setTo(0.6);
        _this.time.events.add(1700, () => {
            _this.tween = _this.add.tween(_this.hand);
            _this.tween.to({ x: 410, y: 260 }, 400, 'Linear', true, 0)
            _this.tween.start();
        })

        _this.time.events.add(5700, () => {
            _this.askdemo4.play();

            _this.hand.destroy();
            _this.demoop.destroy();
            _this.demoop = _this.add.text(775, 195, "-");
            _this.settextProperties(_this.demoop);
            _this.hand = _this.add.sprite(793, 220, 'hand');
            _this.hand.scale.setTo(0.6);
            _this.time.events.add(1200, () => {
                _this.hand.destroy();
                _this.time.events.add(500, () => {
                    _this.hand = _this.add.sprite(_this.flipbtn.x + 40, _this.flipbtn.y + 40, 'hand');
                    _this.hand.scale.setTo(0.6);
                    _this.time.events.add(700, () => {
                        _this.hand.scale.setTo(0.55);
                        _this.flipbtn.scale.setTo(0.65);
                        _this.time.events.add(750, () => {
                            _this.hand.scale.setTo(0.6);
                            _this.flipbtn.scale.setTo(0.6);
                        })
                    })
                })


            })
            _this.time.events.add(3300, () => {
                _this.tween = _this.add.tween(_this.hand);
                _this.tween.to({ x: 400, y: 260 }, 600, 'Linear', true, 0)
                _this.tween.start();

            })
            _this.time.events.add(5200, () => {
                _this.tempfrog.destroy();
                _this.tempfrog = _this.add.sprite(385, 236 - 3, 'flipfrog');
                _this.tempfrog.scale.setTo(0.65);
                _this.jump.play();
                _this.hand.destroy();

                _this.demoop.destroy();
                _this.demoop = _this.add.text(773, 195, "+");
                _this.settextProperties(_this.demoop);

                _this.qmark2.destroy();
                _this.demoQ2 = _this.add.text(811, 196, "+3");
                _this.settextProperties(_this.demoQ2);
                _this.time.events.add(500, _this.showDques2)

            })

        })

    },
    showCountAnim: function () {
        // To show arrows animation 
        _this.inc = 40;
        if (_this.icount == 2 + _this.arrowC) {
            _this.time.events.remove(_this.loopId);
        }
        if (_this.dsign == '+')
            _this.inc = 10;
        else
            _this.inc = 40;

        if (_this.dsign == '+') {
            _this.arrow = _this.add.sprite(_this.gridObj[38 - _this.icount].x + _this.inc, _this.gridObj[38 - _this.icount].y - 16, 'arrow2');
            _this.arrow.scale.setTo(0.35);
            _this.Arrows.push(_this.arrow);
            _this.inc += 4;
            _this.lastArrow = _this.arrow;
            _this.tempfrog.bringToTop();

        }
        else {

            _this.arrow = _this.add.sprite(_this.gridObj[38 + _this.icount].x - _this.inc, _this.gridObj[38 + _this.icount].y - 16, 'arrow2Flipped');
            _this.arrow.scale.setTo(0.35);
            _this.Arrows.push(_this.arrow);

            _this.inc += 4;
            _this.lastArrow = _this.arrow;
            _this.tempfrog.bringToTop();


        }
        _this.icount += 1;



    },

    showDques2: function () {
        _this.askdemo5.play();



        _this.hand = _this.add.sprite(808 + 30, 196 + 40, 'hand');
        _this.hand.scale.setTo(0.6);
        _this.time.events.add(500, () => {
            _this.tempfrog.destroy();
            _this.tempfrog = _this.add.sprite(385, 236 - 3, 'frog');
            _this.tempfrog.scale.setTo(0.65);
        })
        _this.time.events.add(1000, () => {
            // _this.hand.destroy();
            _this.tween = _this.add.tween(_this.hand);
            _this.tween.to({ x: _this.tempfrog.x + 40, y: _this.tempfrog.y + 40 }, 400, 'Linear', true, 0)
            _this.tween.start();

            _this.dsign = "+";
            _this.userselectedDX = 568;
            _this.time.events.add(500, () => {

                _this.arrowC = 1;
                _this.icount = 1
                _this.loopId = _this.time.events.loop(250, _this.showCountAnim, _this);


                _this.time.events.add(700, () => {
                    _this.hand.destroy();

                })
                _this.tempfrog.bringToTop();
            })
            _this.time.events.add(1000, _this.DemoFrogjump);


            _this.time.events.add(2500, () => {

                _this.tempfrog.destroy();
                _this.time.events.add(300, () => {
                    _this.tempfrog = _this.add.sprite(385, 236 - 3, 'frog');
                    _this.tempfrog.scale.setTo(0.65);
                    _this.tempfrog.bringToTop();

                })

            })
        })
        _this.time.events.add(5500, () => {


            _this.userselectedDX = 208;
            _this.askdemo6.play();
            _this.dsign = "-";
            _this.demoQ2.destroy();
            _this.demoQ2 = _this.add.text(815, 196, "-3");
            _this.settextProperties(_this.demoQ2);

            _this.hand = _this.add.sprite(808 + 30, 196 + 40, 'hand');
            _this.hand.scale.setTo(0.6);
            _this.time.events.add(1000, () => {
                _this.tween = _this.add.tween(_this.hand);
                _this.tween.to({ x: _this.tempfrog.x + 40, y: _this.tempfrog.y + 40 }, 400, 'Linear', true, 0)
                _this.tween.start();
                _this.time.events.add(500, () => {
                    // _this.icount = 1;
                    _this.arrowC = -1;

                    _this.icount = -1
                    _this.loopId = _this.time.events.loop(250, _this.showCountAnim, _this);
                    _this.tempfrog.bringToTop();

                    _this.time.events.add(700, () => {
                        _this.hand.destroy();

                    })

                })

                _this.time.events.add(1100, _this.DemoFrogjump);

                _this.time.events.add(3200, () => {

                    _this.hand = _this.add.sprite(_this.tempfrog.x + 40, _this.tempfrog.y + 40, 'hand')
                    _this.hand.scale.setTo(0.6);

                    _this.time.events.add(1600, () => {
                        _this.tween = _this.add.tween(_this.hand);
                        _this.tween.to({ x: 910, y: 220 }, 400, 'Linear', true, 0)
                        _this.tween.start();

                        _this.time.events.add(450, () => {
                            _this.qmarkA.destroy();
                            _this.demoA = _this.add.text(909, 195, "-2");
                            _this.settextProperties(_this.demoA);

                            _this.time.events.add(900, () => {
                                _this.tween = _this.add.tween(_this.hand);
                                _this.tween.to({ x: _this.tickSign.x + 50, y: _this.tickSign.y + 40 }, 400, 'Linear', true, 0)
                                _this.tween.start();
                                _this.time.events.add(400, () => {
                                    _this.tickSign.scale.setTo(1.25);
                                    _this.hand.scale.setTo(0.65);

                                })
                            })

                            _this.time.events.add(3400, () => {
                                _this.demoQues = false;
                                _this.stopAllVoices();
                                _this.skipped = true;
                                _this.state.start('NS_INT_13H_G6level1', true, false);

                            })

                        })
                    })
                })
            })
        })

    },
    DemoFrogjump: function () {

        var Y = 236 - 30
        var X = (Math.abs(388 + _this.userselectedDX)) / 2 - 10;

        _this.tween2 = _this.add.tween(_this.tempfrog);
        _this.tween2.to({ x: X, y: Y }, 400, 'Linear', true, 0);
        _this.tween2.start();


        _this.time.events.add(400, () => {

            _this.tween = _this.add.tween(_this.tempfrog);
            _this.tween.to({ x: _this.userselectedDX - 2, y: 236 - 2 }, 500, 'Linear', true, 0);
            _this.tempfrog.bringToTop();

            _this.tween.start();
            _this.tempfrog.bringToTop();
            _this.time.events.add(600, () => {
                _this.Arrows.forEach(element => {
                    element.destroy();
                });
            })

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

        if (_this.demoQues != true) {
            if (!_this.int1) {
                _this.askQn1.play();
                _this.qn_flag = 1;
                _this.showdice();
                _this.hand = _this.add.sprite(820, 400, 'hand');
                _this.hand.scale.setTo(0.6);

            }
            else {
                _this.qmark1.destroy();

                if (Math.abs(Number(_this.int1)) >= 10) {
                    var pos = 699.5;
                    var font = "28px";
                }

                else {
                    var pos = 707
                    var font = "30px";

                }
                if (Number(_this.int1) == 0) {
                    var pos = 717;
                }

                if (_this.sign == '-')
                    pos = pos + 5

                _this.qmark1 = _this.add.text(pos, 196, _this.int1);
                _this.qmark1.align = 'center';
                _this.qmark1.fontSize = font;
                _this.qmark1.fill = '#FFFFFF';

                _this.showFrog();

                if (_this.count1 < 1)

                    _this.askQn2.play();
                _this.qn_flag = 2;
                _this.showOpDice();
            }
        }
    },
    shownumberplate: function () {
        _this.numberplate = _this.add.sprite(690, 180, 'numberplate')
        _this.numberplate.scale.setTo(0.37, 0.4);

        _this.qmark1 = _this.add.text(720, 194, "?");
        _this.textProperties(_this.qmark1);

        _this.qmarkS = _this.add.text(770, 195, "?");
        _this.textProperties(_this.qmarkS);

        _this.qmark2 = _this.add.text(815, 194, "?");
        _this.textProperties(_this.qmark2);

        _this.equalsSign = _this.add.sprite(862, 204, 'equal')
        _this.equalsSign.scale.setTo(0.27);

        _this.ansPlate = _this.add.sprite(865, 160, 'ansPlate')
        _this.ansPlate.scale.setTo(0.265);

        _this.qmarkA = _this.add.text(915, 192, "?");
        _this.textProperties(_this.qmarkA);


    },
    textProperties: function (text) {
        text.fontWeight = 'normal';

        text.align = 'center';
        text.fontSize = "30px";
        text.fill = '#f5fffa';
    },
    showdice: function () {
        // _this.displayCorrectGreenbox();
        _this.signDice = _this.add.sprite(790, 400, 'dicesign');
        _this.signDice.scale.setTo(0.7);
        _this.signDice.anchor.setTo(0.5);
        _this.signDice.inputEnabled = true; //need to make false initially

        _this.numberDice = _this.add.sprite(880, 400, 'dicenumber')
        _this.numberDice.scale.setTo(0.55);
        _this.numberDice.anchor.setTo(0.5);
        _this.numberDice.inputEnabled = true;

        _this.timer = _this.time.create(false);
        _this.signDice.events.onInputDown.add(function () {
            if (_this.count1 == 0)
                _this.hand.destroy();
            if (_this.flip == true) {
                _this.wrongans.play();
            }
            else {
                _this.signDice.inputEnabled = false;
                _this.numberDice.inputEnabled = false;
                _this.rollDice();
            }

        }, _this);


        _this.numberDice.events.onInputDown.add(function () {
            //console.log("dice clicked")
            if (_this.count1 == 0)
                _this.hand.destroy();
            if (_this.flip == true) {
                _this.wrongans.play();
            }
            else {
                _this.signDice.inputEnabled = false;
                _this.numberDice.inputEnabled = false;

                _this.rollDice();
            }

        }, _this);
    },
    showOpDice: function () {
        _this.signDice = _this.add.sprite(820, 400, 'dicesign');
        _this.signDice.scale.setTo(0.7);
        _this.signDice.anchor.setTo(0.5);
        _this.signDice.inputEnabled = true;
        _this.timer = _this.time.create(false);

        _this.signDice.events.onInputDown.add(function () {
            //console.log("dice clicked")
            if (_this.hand)
                _this.hand.destroy();
            _this.signDice.inputEnabled = false;
            // _this.numberDice.inputEnabled = false;
            _this.rollOpDice();

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
    rollOpDice: function () {

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

        }, _this);


        _this.timer.start();
        _this.time.events.add(750, function () {
            // Stopping Timer after dice roll
            _this.timer.stop();
            _this.showOperator();

        });

    },
    showOperator: function () {
        _this.randsign = Math.floor(Math.random() * 2);
        if (_this.randsign == 0) {
            _this.sign = '+';
        }
        else {
            _this.sign = '-';
        }
        _this.signBox = _this.add.sprite(820, 400, 'dicebox');
        _this.signBox.anchor.setTo(0.5);
        _this.signBox.scale.setTo(0.85);
        _this.signDice.destroy();
        _this.signText = _this.add.text((_this.sign == "+") ? 14 : 8, 25, _this.sign);
        _this.signText.anchor.setTo(1);
        _this.signText.align = 'center';
        _this.signText.font = "Akzidenz-Grotesk BQ";
        _this.signText.fontSize = "40px";
        _this.signText.fontWeight = 'bold';
        _this.signBox.addChild(_this.signText);

        _this.qmarkS.destroy();
        _this.qmarkS = _this.add.text((_this.sign == "+") ? 773 : 775, 195, _this.sign);
        _this.settextProperties(_this.qmarkS);
        // to store operator to evaluate aanswer
        _this.op = _this.sign;

        _this.time.events.add(1000, () => {
            _this.signBox.destroy();
            _this.showflipbtn();
            _this.showdice();
            if (_this.op == '+' && _this.count1 == 0) {
                _this.hand = _this.add.sprite(820, 400, 'hand');
                _this.hand.scale.setTo(0.6);
            }


            if (_this.count1 < 1 && _this.askQn2.currentTime < 7.7) {
                _this.time.events.add((7.7 - _this.askQn2.currentTime) * 1300, () => {
                    if (_this.qn_flag == 1) {
                        if (_this.count1 < 1)
                            _this.askQn1.play();
                        _this.qn_flag = 1;
                    }
                })
            }
            else {
                _this.time.events.add(1900, () => {
                    if (_this.qn_flag == 1) {
                        if (_this.count1 < 1)
                            _this.askQn1.play();
                        _this.qn_flag = 1;
                    }
                })
            }
            _this.qn_flag = 1;

        })
    },

    showflipbtn: function () {
        _this.flipbtn = _this.add.sprite(780, 280, 'flip');
        _this.flipbtn.scale.setTo(0.6);

        if (_this.op == '-') {
            _this.flip = true;
        }


        if (_this.count1 == 0 && _this.op == '-') {
            // shown hand tween to flip the frog
            _this.hand = _this.add.sprite(770 + 53, 305, 'hand');
            _this.hand.scale.setTo(0.6);



        }

        _this.flipbtn.inputEnabled = true;

        _this.flipbtn.events.onInputDown.add(() => {
            var x = _this.frog.x;
            var y = _this.frog.y;
            _this.jump.play();
            if (_this.hand)
                _this.hand.destroy();

            if (_this.flipleft == true) {

                if (_this.op == '+') {
                    // no need to change direction so throw error if trying to flip
                    _this.wrongans.play();


                }
                else {
                    _this.frog.destroy();
                    _this.frog = _this.add.sprite(x, y, 'frog');
                    _this.flipleft = false;
                    _this.signDice.inputEnabled = true;
                    _this.numberDice.inputEnabled = true;
                    _this.flipbtn.inputEnabled = false;
                    _this.time.events.add(500, () => {

                        if (_this.count1 == 0) {
                            _this.hand = _this.add.sprite(820, 400, 'hand');
                            _this.hand.scale.setTo(0.6);
                        }

                    })
                    _this.flip = false;

                }
            }
            else {
                if (_this.op == '+') {
                    // no need to change direction so throw error if trying to flip
                    _this.wrongans.play();


                }
                else {

                    _this.frog.destroy();
                    _this.frog = _this.add.sprite(x, y, 'flipfrog');
                    _this.flipleft = true;
                    _this.signDice.inputEnabled = true;
                    _this.numberDice.inputEnabled = true;
                    _this.flipbtn.inputEnabled = false;
                    _this.time.events.add(500, () => {

                        if (_this.count1 == 0) {

                            _this.hand = _this.add.sprite(820, 400, 'hand');
                            _this.hand.scale.setTo(0.6);
                        }

                    })
                    _this.flip = false;
                }
            }

            _this.frog.scale.setTo(0.65);
        })





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

        _this.askedDenominators[_this.count1] = _this.sign + _this.randnum;
        _this.signBox = _this.add.sprite(790, 400, 'dicebox');
        _this.signBox.anchor.setTo(0.5);
        _this.signBox.scale.setTo(0.85);
        _this.signDice.destroy();
        _this.signText = _this.add.text((_this.sign == "+") ? 14 : 8, 25, _this.sign);
        _this.signText.anchor.setTo(1);
        _this.signText.align = 'center';
        _this.signText.font = "Akzidenz-Grotesk BQ";
        _this.signText.fontSize = "40px";
        _this.signText.fontWeight = 'bold';
        _this.signBox.addChild(_this.signText);


        _this.numBox = _this.add.sprite(870, 400, 'dicebox');
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
        if (_this.firstnum == false) {
            _this.displayFrog()
            _this.int1 = _this.sign + _this.randnum;
        }

        else if (_this.firstnum == true) {
            _this.int2 = _this.sign + _this.randnum;

            _this.showNumber2();
        }




    },
    settextProperties: function (text) {
        // text.fontWeight = "normal";
        text.align = 'center';
        text.fontSize = "30px";
        text.fill = '#FFFFFF';
    },
    showFrog: function () {
        _this.int1 = Number(_this.int1);
        if (_this.yArray.includes(_this.gridObj[38 - _this.int1].y)) {
            _this.frog = _this.add.sprite(_this.gridObj[38 - _this.int1].x - 3, _this.gridObj[38 - _this.int1].y - 8, 'flipfrog');
            _this.previousX = _this.gridObj[38 - _this.int1].x;
            _this.previousY = _this.gridObj[38 - _this.int1].y;
            _this.flipleft = true;
        }
        else {
            _this.frog = _this.add.sprite(_this.gridObj[38 - _this.int1].x - 3, _this.gridObj[38 - _this.int1].y - 8, 'frog');
            _this.previousX = _this.gridObj[38 - _this.int1].x;
            _this.previousY = _this.gridObj[38 - _this.int1].y;
            _this.flipleft = false;

        }


        _this.frog.scale.setTo(0.65);

    },
    displayFrog: function () {
        _this.firstnum = true;
        _this.qmark1.destroy();
        if (_this.sign == '+')
            pos = 708;
        else
            pos = 713;
        _this.qmark1 = _this.add.text(pos, 196, _this.sign + "" + _this.randnum);
        _this.settextProperties(_this.qmark1);
        if (_this.randnum < 6) {
            var frog = "frog"
        }
        else {
            var frog = "flipfrog";
            _this.flipleft = true;
        }
        if (_this.sign == '+') {

            _this.frog = _this.add.sprite(_this.gridObj[38 - _this.randnum].x - 3, _this.gridObj[38 - _this.randnum].y - 8, frog);
            _this.previousX = _this.gridObj[38 - _this.randnum].x;
            _this.previousY = _this.gridObj[38 - _this.randnum].y;


        }
        else {
            _this.frog = _this.add.sprite(_this.gridObj[38 + _this.randnum].x - 3, _this.gridObj[38 + _this.randnum].y - 8, frog);
            _this.previousX = _this.gridObj[38 + _this.randnum].x;
            _this.previousY = _this.gridObj[38 + _this.randnum].y;

        }

        _this.frog.scale.setTo(0.65);

        // Now roll another dice for opeartor
        _this.time.events.add(1000, () => {
            _this.numBox.destroy();
            _this.signBox.destroy();

            _this.askQn2.play();
            _this.qn_flag = 2;
            _this.showOpDice();

            _this.hand = _this.add.sprite(850, 400, 'hand');
            _this.hand.scale.setTo(0.6);
        })


    },
    showNumber2: function () {
        _this.time.events.add(800, () => {
            _this.qmark2.destroy();
            if (_this.sign == '+')
                pos = 811;
            else
                pos = 814;

            _this.qmark2 = _this.add.text(pos, 196, _this.sign + "" + _this.randnum);
            _this.settextProperties(_this.qmark2);
            _this.numBox.destroy();
            _this.signBox.destroy();
            _this.flipbtn.destroy();
            // evaluate correct answer
            _this.evaluateAns();
            if (_this.speakerbtn.inputEnabled == true)
                _this.stopAllVoices();

            if (_this.count1 < 1)
                _this.askQn3.play();
            _this.qn_flag = 3;


            _this.gridObj.forEach((element) => {
                element.inputEnabled = true;
                element.events.onInputDown.add((event) => {
                    // console.log(event)

                    if (_this.greenbox) {
                        _this.greenbox.destroy();
                        _this.textg.destroy();
                    }
                    _this.greenbox = _this.add.sprite(event.x, event.y, 'greenbox');
                    _this.textg = _this.add.text(event.x + event.getChildAt(0).x, event.y + event.getChildAt(0).y - 3, event.getChildAt(0)._text);
                    _this.textg.fontSize = '24px'
                    _this.textg.fill = '#FF0000';
                    // show frog jumping on each selection and jump back if wrong 
                    // if correct is choosen display answerboxes and numberpad
                    _this.userselectedx = event.x;
                    _this.userselectedy = event.y;
                    _this.userSelectedAns = event.getChildAt(0)._text;
                    _this.Frogjump();
                    _this.frog.bringToTop();

                    if (_this.correct == true) {
                        _this.gridObj.forEach((element) => {
                            element.inputEnabled = false;
                        });
                        // ask question 4 to enter the answer

                        _this.displayAnsBox();
                        _this.addNumberPad();
                        _this.displayTick();
                        _this.tickSign.inputEnabled = true;
                        _this.qn_flag = -1;

                        // if (_this.count1 < 1)
                        //     _this.askQn4.play();
                        // _this.qn_flag = 4;

                    }
                }, _this)
            })

        })

    },
    displayAnsBox: function () {
        _this.ansbox = _this.add.sprite(750, 270, 'ansbox');
        _this.ansbox.scale.setTo(0.35);
        _this.whiteline = _this.add.sprite(780, 316, 'whiteline')
        _this.whiteline.scale.setTo(0.35);
        _this.qmarkIn = _this.add.text(820, 290, "?");
        _this.settextProperties(_this.qmarkIn);
        _this.qmarkIn.fill = '#FFD500'

    },

    displayTick: function () {

        _this.tickSign = _this.add.sprite(788, 375, 'tick')
        _this.tickSign.scale.setTo(1.3);

        _this.tickSign.inputEnabled = false;
        _this.tickSign.events.onInputDown.add(_this.rightbtnClicked, _this);
    },

    // Function to store the correct answers
    evaluateAns: function () {

        if (_this.op == '+') {
            _this.correctAns = Number(_this.int1) + Number(_this.int2);
        }
        else {
            _this.correctAns = Number(_this.int1) - Number(_this.int2);

        }

    },
    evaluatewrong: function () {
        if (Number(_this.userSelectedAns) != Number(_this.correctAns)) {
            _this.correct = false;
            return true;
        }
        else {
            _this.correct = true;

            return false;
        }
    },


    JumpToOrigin: function () {
        _this.tween2 = _this.add.tween(_this.frog);
        _this.tween2.to({ x: _this.previousX - 3, y: _this.previousY - 5 }, 500, 'Linear', true, 0);
        _this.tween2.start();
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
            _this.tween.to({ x: _this.userselectedx - 2, y: _this.userselectedy - 2 }, 500, 'Linear', true, 0);
            _this.frog.bringToTop();

            _this.tween.start();
            _this.frog.bringToTop();

        })
        // if answer is wrong jump back to origin
        if (_this.evaluatewrong()) {
            _this.time.events.add(900, () => {
                // jump to initial positin again
                _this.wrongans.play();
                _this.JumpToOrigin();
                _this.greenbox.destroy();
                _this.textg.destroy();

            })

        }

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
        _this.qmarkIn = _this.add.text(820, 290, "?");
        _this.settextProperties(_this.qmarkIn);
        _this.qmarkIn.fill = '#FFD500'

        // _this.qn_flag = 4;


    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },
    signbtnClicked: function (target) {
        // console.log("sign clicked")
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
            _this.enterTxt = _this.add.text(820, 285, target.name, { fontSize: '40px' });//43 88
            _this.enterTxt.fill = '#FFD500';


        }
        else {
            _this.usersign = target.name;
            if (target.name == '-')
                _this.enterTxt = _this.add.text(794, 285, target.name, { fontSize: '40px' });//43 88
            else
                _this.enterTxt = _this.add.text(791, 285, target.name, { fontSize: '40px' });//43 88

            _this.enterTxt.fill = '#FFD500';

        }
        // _this.qn_flag = 5;

    },
    numClicked: function (target) {
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
                    _this.enterTxt = _this.add.text(794, 285, _this.usersign, { fontSize: '40px' });//43 88
                else
                    _this.enterTxt = _this.add.text(797, 285, _this.usersign, { fontSize: '40px' });//43 88
                _this.enterTxt.fill = '#FFD500';

            }
            _this.enterTxt2 = _this.add.text(820, 285, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '36px' });//43 88
        }
        else {
            if (_this.enterTxt) {
                _this.enterTxt.destroy();
                _this.enterTxt = null;
                if (_this.usersign == '+')
                    _this.enterTxt = _this.add.text(791, 285, _this.usersign, { fontSize: '40px' });//43 88
                else
                    _this.enterTxt = _this.add.text(797, 285, _this.usersign, { fontSize: '40px' });//43 88

                _this.enterTxt.fill = '#FFD500';

            }
            _this.enterTxt2 = _this.add.text(813, 285, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '36px' });//36 88
        }

        _this.enterTxt2.align = 'right';
        _this.enterTxt2.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt2.fill = '#FFD500';
        _this.enterTxt2.fontWeight = 'normal';
        if (_this.count1 == 0 && _this.repeatQues == true) {
            _this.repeatQues = false;
            // _this.askQn5.play();
            // _this.qn_flag = 5;
            _this.hand = _this.add.sprite(848, 415, 'hand');
            _this.hand.scale.setTo(0.6);
        }
        // _this.qn_flag = 5;

    },

    stopAllVoices: function () {
        if (_this.askdemo1) {
            _this.askdemo1.pause();
            _this.askdemo1.currentTime = 0;

        }
        if (_this.askdemo2) {
            _this.askdemo2.pause();
            _this.askdemo2.currentTime = 0;

        }
        if (_this.askdemo3) {
            _this.askdemo3.pause();
            _this.askdemo3.currentTime = 0;

        }
        if (_this.askdemo4) {
            _this.askdemo4.pause();
            _this.askdemo4.currentTime = 0;

        }
        if (_this.askdemo5) {
            _this.askdemo5.pause();
            _this.askdemo5.currentTime = 0;

        }
        if (_this.askdemo6) {
            _this.askdemo6.pause();
            _this.askdemo6.currentTime = 0;

        }

        if (_this.askQn1) {
            _this.askQn1.pause();
            _this.askQn1.currentTime = 0;
        }
        if (_this.askQn2) {
            _this.askQn2.pause();
            _this.askQn2.currentTime = 0;

        }
        if (_this.askQn3) {
            _this.askQn3.pause();
            _this.askQn3.currentTime = 0;

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

        _this.generateGrid();

        _this.questionid=1;
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
        _this.qmark1.destroy();
        _this.qmark2.destroy();
        _this.qmarkA.destroy();
        _this.qmarkS.destroy();



    },

    //* This is called when Right btn on the numberpad is clicked to enter numerator and denominator        
    rightbtnClicked: function () {

        _this.noofAttempts++;
        _this.tickSign.inputEnabled = false;
        //  _this.showAns();

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

        if ((_this.enterTxt2 == null && _this.enterTxt == null) || _this.enterTxt2 == null) {
            _this.wrongans.play();
            _this.tickSign.inputEnabled = true;
            _this.wrongans.play();
            _this.time.events.add(100, () => {
                _this.shakeright();
                _this.time.events.add(350, _this.shakeleft);
                _this.wrongbtnClicked();
            })

        }



        else if (inputans === Number(_this.correctAns)) {


            _this.qn_flag = -1;
            if (_this.enterTxt) {
                _this.int1 = _this.enterTxt._text + _this.enterTxt2._text;
                _this.sign = _this.enterTxt._text;
            }
            else if (_this.correctAns == 0) {
                _this.int1 = _this.enterTxt2._text;

            }
            else {
                _this.int1 = "+" + _this.enterTxt2._text;
                _this.sign = "+";


            }
            _this.qmarkA.destroy();
            if (Math.abs(Number(_this.int1)) >= 10) {
                var pos = 901;
                var font = "28px";
            }
            else {
                var pos = 907
                var font = "30px";

            }
            if (Number(_this.int1) == 0) {
                var pos = 915;
            }

            _this.qmarkA = _this.add.text((_this.sign == '+') ? pos : pos + 4, 195, _this.int1);
            // _this.settextProperties(_this.qmarkA);
            _this.qmarkA.align = 'center';
            _this.qmarkA.fontSize = font;
            _this.qmarkA.fill = '#FFFFFF';


            _this.tweenFixed2();
            _this.correctans.play();
            _this.frog.scale.setTo(0.65);
            _this.time.events.add(1000, () => {
                _this.frog.scale.setTo(0.6);

                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebration();

            })

        }
        else {
            _this.wrongans.play();
            _this.time.events.add(100, () => {
                _this.shakeright();
                _this.time.events.add(350, _this.shakeleft);
                _this.wrongbtnClicked();
            })
            _this.tickSign.inputEnabled = true;
            _this.qmarkA.destroy();
            _this.qmarkA = _this.add.text(915, 192, "?");
            _this.textProperties(_this.qmarkA);

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
                // _this.state.start('score');
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            });

        }
    },
    starActions: function (target) {

        _this.score++;
        _this.userHasPlayed = 1;
        // _this.game_id = 'NS_INT_13H_G6';
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
