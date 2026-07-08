Game.placevalue_NSPVG_5_2level1=function(){};

Game.placevalue_NSPVG_5_2level1.prototype={
    init:function(game)
    {
        _this = this;
        // telInitializer.gameIdInit("unity4_6_1",gradeSelected);
        this.score =parseInt(window.score);
        telInitializer2.gameIdInit2("NSPVG5.2");
    },

    create:function(game)
    {

        this.playedwithHint = false;
        this.completelyplayed = false;

        this.Stararr = [];
        _this.amplify = null;
        _this.arrpos = [];
        _this.sceneCount = 0;

        _this.drag=0;
        _this.Ans1=0;
        _this.Ans2=0;
        _this.qArrays;
        _this.speaker;
        _this.celebration;
        _this.timerDisplay;
        _this.rightmark;
        _this.background;
        _this.click1;
        _this.click2;
        _this.click4;
        _this.click5;
        _this.wmusic;
        _this.tapsound;
        _this.clickSound;
        _this.starsGroup;
        _this.questioNo = 0;
        _this.SquareGrp;
        _this.numGrp;
        _this.graphicGrp;
        _this.n1=0;
        _this.n2=0;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.minutes=0;
        _this.seconds=0;

        _this.correct=0;
        _this.counterForTimer=0;
        _this.correctflag=0;
        _this.celebration= false;

        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
        _this.qArrays = _this.shuffle(_this.qArrays);

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity4_6_1backg');

        if(window.languageSelected=="English")
                    {
                       _this.soundurl = window.baseUrl+"questionSounds/4.6.1/English/46.1E.mp3";
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                       _this.soundurl = window.baseUrl+"questionSounds/4.6.1/Hindi/46.1H.mp3";
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.6.1/Kannada/46.1K.mp3";
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.soundurl = window.baseUrl+"questionSounds/Gujarati/4.6.1/46.1E.mp3";
                    }
                    else
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.6.1/Odiya/4.6.1.mp3";
                        
                    }

        
        commonNavBar.addNavBar(game,_this.soundurl,"numbersense4");
        commonNavBar.addTimerToTheGame(game,0,0,0);

        commonNavBar.addScore(game,this.score);
        this.hintparams=['NSPVG5.2','level1',false,false,true,1];
        commonNavBar.addHint(game,this.hintparams);

        _this.generateStarsForTheScene(5);
        _this.getQuestion();  

        commonNavBar.getVoice(_this.soundurl);

    },

    shuffle: function(array) {
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

    getQuestion:function(target)
    {
        commonNavBar.startTimer(this);
        _this.stopvoice();
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
        //commonNavBar.speakerbtn.inputEnabled=true;
        commonNavBar.speakerbtn.events.onInputDown.add(function(){
            commonNavBar.speakerClicked(_this.soundurl);
        },this);

        _this.questionid =1;

        switch(_this.qArrays[_this.no11])
        {
            case 1: _this.gotoFirstQuestion();
                break; 
            case 2: _this.gotoSecondQuestion();
                break;
            case 3: _this.gotoThirdQuestion();
                break; 
            case 4: _this.gotoFourthQuestion();
                break;
            case 5: _this.gotoFifthQuestion();
                break;
            case 6: _this.gotoSixthQuestion();
                break;
            case 7: _this.gotoSeventhQuestion();
                break;
            case 8: _this.gotoEighthQuestion();
                break;
            case 9: _this.gotoNinthQuestion();
                break; 
            case 10: _this.gotoTenthQuestion();
                break;   


        }

         telInitializer2.gameQuestionStart(this,_this.questionid);

    },



    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {

            _this.starsGroup.create(_this.world.centerX, 8, 'cstarAnim');
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=10;
                    _this.starsGroup.getChildAt(i).x+=10;
                }
            }
        }	
        _this.starsGroup.getChildAt(0).frame = 2; 
    },


    gotoFirstQuestion:function()
    {
        // _this.getVoice();

        _this.optGrp=_this.add.group();

        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;

        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;

        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;

        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);

        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);


        _this.SquareGrp=_this.add.group();

        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95); 
        _this.square1.value = 0;
        _this.square1.canAdd = true;

        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;

        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;

        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;

        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);

        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";

        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";

        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(510, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";

        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);

        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=0;
        _this.number1.value=1;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);

        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=4;
        _this.number2.value=5;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);

        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=0;
        _this.number3.value=1;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);

        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=4;
        _this.number4.value=5;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);

        _this.Ans1 = String(_this.number3.value) + String(_this.number4.value);
        _this.Ans2 = String(_this.number2.value) + String(_this.number1.value);
        //console.log("ans1=="+_this.Ans1);
        //console.log("ans2=="+_this.Ans2);

        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);

        /*  _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        */

    },

    gotoSecondQuestion:function()
    {
        // _this.getVoice();

        _this.optGrp=_this.add.group();

        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;

        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;

        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;

        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);

        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);


        _this.SquareGrp=_this.add.group();

        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95); 
        _this.square1.value = 0;
        _this.square1.canAdd = true;

        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;

        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;

        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;

        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);

        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";

        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";

        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";

        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);

        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=1;
        _this.number1.value=2;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);

        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=6;
        _this.number2.value=7;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);

        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=1;
        _this.number3.value=2;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);

        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=6;
        _this.number4.value=7;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);

        _this.Ans1 = String(_this.number3.value) + String(_this.number4.value);
        _this.Ans2 = String(_this.number2.value) + String(_this.number1.value);
        //console.log("ans1=="+_this.Ans1);
        //console.log("ans2=="+_this.Ans2);


        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);

        /* _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        */

    },

    gotoThirdQuestion:function()
    {
        // _this.getVoice();

        _this.optGrp=_this.add.group();

        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;

        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;

        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;

        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);

        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);

        _this.SquareGrp=_this.add.group();

        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95);
        _this.square1.value = 0;
        _this.square1.canAdd = true;

        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;

        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;

        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;

        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);

        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";

        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";

        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";

        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);

        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=8;
        _this.number1.value=9;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);

        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=2;
        _this.number2.value=3;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);

        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=8;
        _this.number3.value=9;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);

        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=2;
        _this.number4.value=3;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);

        _this.Ans1 = String(_this.number2.value) + String(_this.number1.value);
        _this.Ans2 = String(_this.number3.value) + String(_this.number4.value);
        //console.log("ans1=="+_this.Ans1);
        //console.log("ans2=="+_this.Ans2);


        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);

        /* _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           */

    },

    gotoFourthQuestion:function()
    {
        // _this.getVoice();

        _this.optGrp=_this.add.group();

        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;

        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;

        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;

        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);

        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);

        _this.SquareGrp=_this.add.group();

        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95); 
        _this.square1.value = 0;
        _this.square1.canAdd = true;

        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;

        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95);
        _this.square3.value = 0;
        _this.square3.canAdd = true;

        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;

        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);

        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";

        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";

        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";

        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);

        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=5;
        _this.number1.value=6;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);

        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=6;
        _this.number2.value=7;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);

        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=5;
        _this.number3.value=6;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);

        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=6;
        _this.number4.value=7;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);

        _this.Ans1 = String(_this.number3.value) + String(_this.number4.value);
        _this.Ans2 = String(_this.number2.value) + String(_this.number1.value);
        //console.log("ans1=="+_this.Ans1);
        //console.log("ans2=="+_this.Ans2);


        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);

        /*  _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        */

    },

    gotoFifthQuestion:function()
    {
        // _this.getVoice();

        _this.optGrp=_this.add.group();

        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;

        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;

        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;

        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);

        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);


        _this.SquareGrp=_this.add.group();

        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95); 
        _this.square1.value = 0;
        _this.square1.canAdd = true;

        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;

        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;

        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;

        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);

        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";

        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";

        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";

        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);

        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=7;
        _this.number1.value=8;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);

        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=4;
        _this.number2.value=5;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);

        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=7;
        _this.number3.value=8;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);

        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=4;
        _this.number4.value=5;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);


        _this.Ans1 = String(_this.number2.value) + String(_this.number1.value);
        _this.Ans2 = String(_this.number3.value) + String(_this.number4.value);
        //console.log("ans1=="+_this.Ans1);
        //console.log("ans2=="+_this.Ans2);


        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);

        /*  _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        */

    },

    gotoSixthQuestion:function()
    {

        //_this.getVoice();

        _this.optGrp=_this.add.group();


        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;

        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;

        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;

        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);

        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);


        _this.SquareGrp=_this.add.group();

        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95);
        _this.square1.value = 0;
        _this.square1.canAdd = true;

        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;

        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;

        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;

        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);

        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";

        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";

        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";

        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);

        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=3;
        _this.number1.value=4;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);

        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=4;
        _this.number2.value=5;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);

        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=3;
        _this.number3.value=4;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);

        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=4;
        _this.number4.value=5;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);

        _this.Ans1 = String(_this.number3.value) + String(_this.number4.value);
        _this.Ans2 = String(_this.number2.value) + String(_this.number1.value);
        //console.log("ans1=="+_this.Ans1);
        //console.log("ans2=="+_this.Ans2);


        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);

        /*  _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

       */ 


    },

    gotoSeventhQuestion:function()
    {

        // _this.getVoice();

        _this.optGrp=_this.add.group();


        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;

        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;

        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;

        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);

        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);

        _this.SquareGrp=_this.add.group();

        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95);
        _this.square1.value = 0;
        _this.square1.canAdd = true;

        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;

        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;

        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;

        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);

        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";

        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";

        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";

        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);

        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=5;
        _this.number1.value=6;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);

        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=4;
        _this.number2.value=5;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);

        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=5;
        _this.number3.value=6;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);

        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=4;
        _this.number4.value=5;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);

        _this.Ans1 = String(_this.number2.value) + String(_this.number1.value);
        _this.Ans2 = String(_this.number3.value) + String(_this.number4.value);
        //console.log("ans1=="+_this.Ans1);
        //console.log("ans2=="+_this.Ans2);


        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);

        /* _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        */

    },

    gotoEighthQuestion:function()
    {
        // _this.getVoice();

        _this.optGrp=_this.add.group();


        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;

        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;

        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;

        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);

        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);


        _this.SquareGrp=_this.add.group();

        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95); 
        _this.square1.value = 0;
        _this.square1.canAdd = true;

        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;

        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95);
        _this.square3.value = 0;
        _this.square3.canAdd = true;

        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;

        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);

        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";

        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";

        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";

        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);

        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=1;
        _this.number1.value=2;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);

        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=2;
        _this.number2.value=3;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);

        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=1;
        _this.number3.value=2;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);

        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=2;
        _this.number4.value=3;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);

        _this.Ans1 = String(_this.number3.value) + String(_this.number4.value);
        _this.Ans2 = String(_this.number2.value) + String(_this.number1.value);
        //console.log("ans1=="+_this.Ans1);
        //console.log("ans2=="+_this.Ans2);

        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);

        /*  _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       */ 

    },

    gotoNinthQuestion:function()
    {
        // _this.getVoice();

        _this.optGrp=_this.add.group();


        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;

        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;

        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;

        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);

        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);

        _this.SquareGrp=_this.add.group();

        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95);
        _this.square1.value = 0;
        _this.square1.canAdd = true;

        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;

        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;

        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;

        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);

        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";

        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";

        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";

        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);

        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=7;
        _this.number1.value=8;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);

        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=6;
        _this.number2.value=7;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);

        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=7;
        _this.number3.value=8;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);

        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=6;
        _this.number4.value=7;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);

        _this.Ans1 = String(_this.number2.value) + String(_this.number1.value);
        _this.Ans2 = String(_this.number3.value) + String(_this.number4.value);
        //console.log("ans1=="+_this.Ans1);
        //console.log("ans2=="+_this.Ans2);

        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);

        /*  _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           */ 

    },


    gotoTenthQuestion:function()
    {
        //_this.getVoice();

        _this.optGrp=_this.add.group();

        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;

        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;

        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;

        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);

        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);


        _this.SquareGrp=_this.add.group();

        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95); 
        _this.square1.value = 0;
        _this.square1.canAdd = true;

        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;

        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95);
        _this.square3.value = 0;
        _this.square3.canAdd = true;

        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;

        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);

        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";

        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";

        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";

        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);

        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=7;
        _this.number1.value=8;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);

        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=2;
        _this.number2.value=3;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);

        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=7;
        _this.number3.value=8;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);

        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=2;
        _this.number4.value=3;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);

        _this.Ans1 = String(_this.number2.value) + String(_this.number1.value);
        _this.Ans2 = String(_this.number3.value) + String(_this.number4.value);
        //console.log("ans1=="+_this.Ans1);
        //console.log("ans2=="+_this.Ans2);

        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);

        /*   _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        */

    },


    onDragStart:function(target){

        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
            { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level4.6.1_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;


        _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag();
        commonNavBar.playClickSound();

        _this.SquareGrp.getChildAt(0).canAdd = true; 
        _this.SquareGrp.getChildAt(1).canAdd = true; 
        _this.SquareGrp.getChildAt(2).canAdd = true; 
        _this.SquareGrp.getChildAt(3).canAdd = true; 

        console.log(_this.SquareGrp.getChildAt(0).value,_this.SquareGrp.getChildAt(1).value,_this.SquareGrp.getChildAt(2).value,_this.SquareGrp.getChildAt(3).value)


        /*if(_this.SquareGrp.getChildAt(0).value==target.value)
        {
             _this.SquareGrp.getChildAt(1).canAdd = false;    
        }
        if(_this.SquareGrp.getChildAt(1).value==target.value)
        {
             _this.SquareGrp.getChildAt(0).canAdd = false;    
        }         
        if(_this.SquareGrp.getChildAt(2).value==target.value)
        {
             _this.SquareGrp.getChildAt(3).canAdd = false;    
        }
        if(_this.SquareGrp.getChildAt(3).value==target.value)
        {
             _this.SquareGrp.getChildAt(2).canAdd = false;    
        }*/

        target.events.onDragStop.add(_this.onDragStoped,_this);

    },

    onDragStoped:function(target){
        //console.log("fffffffffffffff"+_this.graphicGrp.length);
        /*  var allClear = true; 
         for(var j=0;j<_this.SquareGrp.length;j++)
         {
            for(var k=0;k<_this.numGrp.length;k++)
            {
                if(_this.SquareGrp.getChildAt(j).x==_this.numGrp.getChildAt(k).x && _this.SquareGrp.getChildAt(j).y==_this.numGrp.getChildAt(k).y)
                {
                    console.log("here1");
                    _this.SquareGrp.getChildAt(j).canAdd = false;
                    allClear = false;
                }
            }
         }

         if(allClear)
         {
            _this.SquareGrp.getChildAt(0).canAdd = true; 
            _this.SquareGrp.getChildAt(1).canAdd = true; 
            _this.SquareGrp.getChildAt(2).canAdd = true; 
            _this.SquareGrp.getChildAt(3).canAdd = true; 
         }*/

        //alert("here");

        for(var k=0;k<_this.numGrp.length;k++)
        {
            if(_this.SquareGrp.getChildAt(0).x==_this.numGrp.getChildAt(k).x)
            {
                _this.SquareGrp.getChildAt(0).canAdd = false;  
                if(_this.numGrp.getChildAt(k).value == target.value)
                {
                    _this.SquareGrp.getChildAt(1).canAdd = false;
                }                  
            }
            if(_this.SquareGrp.getChildAt(1).x==_this.numGrp.getChildAt(k).x)
            {
                _this.SquareGrp.getChildAt(1).canAdd = false;  
                if(_this.numGrp.getChildAt(k).value == target.value)
                {
                    _this.SquareGrp.getChildAt(0).canAdd = false;
                }                  
            }

            if(_this.SquareGrp.getChildAt(2).x==_this.numGrp.getChildAt(k).x)
            {
                _this.SquareGrp.getChildAt(2).canAdd = false;  
                if(_this.numGrp.getChildAt(k).value == target.value)
                {
                    _this.SquareGrp.getChildAt(3).canAdd = false;
                }                  
            }

            if(_this.SquareGrp.getChildAt(3).x==_this.numGrp.getChildAt(k).x)
            {
                _this.SquareGrp.getChildAt(3).canAdd = false;  
                if(_this.numGrp.getChildAt(k).value == target.value)
                {
                    _this.SquareGrp.getChildAt(2).canAdd = false;
                }                  
            }
        }
        var added = false;
        for(var i=0;i<_this.graphicGrp.length;i++)
        {

            // if(_this.checkOverlap(target,_this.graphicGrp.getChildAt(i)) && _this.SquareGrp.getChildAt(i).value==0 && _this.SquareGrp.getChildAt(i).canAdd)
            if(_this.checkOverlap(target,_this.SquareGrp.getChildAt(i)) && _this.SquareGrp.getChildAt(i).canAdd)
            {

                _this.correct++;
                //console.log("overlappedtrgt "+target.name);
                //console.log("overlappedgrp "+_this.graphicGrp.getChildAt(i).name);
                target.x=_this.SquareGrp.getChildAt(i).x;
                target.y=_this.SquareGrp.getChildAt(i).y;

                _this.click2 = _this.add.audio('snapSound');
                _this.click2.play();

                _this.SquareGrp.getChildAt(i).value = target.value;

                //target.value = 0;
                // target.events.onInputDown.removeAll();
                added = true;
                // target.inputEnabled = false;

                /*
                     if(target.name==_this.graphicGrp.getChildAt(i).name)
                    {
                        if(target.name ==_this.graphicGrp.getChildAt(0).name)
                            {
                               _this.correct++;
                                _this.number1 = target.value;
                                _this.click2 = _this.add.audio('snapSound');
                                _this.click2.play();
                                //console.log("fdsdfdfdfdfdf 0 "+_this.graphicGrp.getChildAt(0).name);
                            }
                        else if(target.name ==_this.graphicGrp.getChildAt(1).name)
                            {
                                _this.correct++;
                                _this.number2 = target.value;
                                _this.click2 = _this.add.audio('snapSound');
                                _this.click2.play();

                                 //console.log("fdsdfdfdfdfdf 1 "+_this.graphicGrp.getChildAt(1).name);
                            }
                        else if(target.name ==_this.graphicGrp.getChildAt(2).name)
                            {
                                _this.correct++;
                                _this.number3 = target.value;
                                _this.click2 = _this.add.audio('snapSound');
                                _this.click2.play();
                                 //console.log("fdsdfdfdfdfdf 2 "+_this.graphicGrp.getChildAt(2).name);
                            }
                        else if(target.name ==_this.graphicGrp.getChildAt(3).name)
                            {
                                _this.correct++;
                                 _this.number4= target.value;
                                _this.click2 = _this.add.audio('snapSound');
                                _this.click2.play();
                                //console.log("fdsdfdfdfdfdf 3 "+_this.graphicGrp.getChildAt(3).name);
                            }
                    }*/
                break;
            }
            /* else
             {
                 //_this.number1
                 target.x=_this.vx;
                 target.y=_this.vy;
                // target.y=450;
                //target.x=480;
                // target.y=450;

             }*/

        }

        if(!added)
        {
            // target.x=_this.vx;
            //  target.y=_this.vy;
            console.log("NOT ADDED");
            if(target.name == "number1"||target.name == "number3")
            {
                target.x = 400;
                target.y = 450;
            }
            else
            {
                target.x = 480;
                target.y = 450;
            }
        }


        if(_this.correct >= 4){
            _this.rightmark.inputEnabled=true;
            _this.rightmark.frame=1;
            _this.rightmark.events.onInputDown.add(_this.clickTickMark,_this);
        }
    },

    checkOverlap:function(spriteA, spriteB) 
    {

        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);

    },  

    clickTickMark:function(target){
        target.events.onInputDown.removeAll(); 
        //console.log("first answer=="+(String(_this.number3.value) + String(_this.number4.value)));
        //console.log("second answer=="+(String(_this.number2.value) + String(_this.number1.value)));
        //console.log("_this.Ans1=="+_this.Ans1);
        //console.log("_this.Ans2=="+_this.Ans2);
        //_this.checkans1 = (String(_this.number3.value) + String(_this.number4.value));
        //_this.checkans2 = (String(_this.number2.value) + String(_this.number1.value));
        _this.checkans1 = (String(_this.SquareGrp.getChildAt(0).value) + String(_this.SquareGrp.getChildAt(1).value));
        _this.checkans2 = (String(_this.SquareGrp.getChildAt(2).value) + String(_this.SquareGrp.getChildAt(3).value));

        //console.log(_this.checkans1,_this.checkans2);

        if( (_this.checkans1 == _this.Ans1 && _this.checkans2 == _this.Ans2) || (_this.checkans1 == _this.Ans1 && _this.checkans2 == _this.Ans2))
        {
            //console.log("correct");
            _this.mouse.loadTexture('unity4_6_1MouseHappy',0,false);
            _this.mouseanim=_this.mouse.animations.add('stay');
            _this.mouseanim.play(12,true);
            _this.click4 = _this.add.audio('anim1sound');
            _this.click4.play();

            _this.elephant.loadTexture('unity4_6_1ElephantHappy',0,false);
            _this.elephantanim=_this.elephant.animations.add('stay');
            _this.elephantanim.play(12,true);
            _this.click5 = _this.add.audio('anim2sound');
            _this.click5.play();

            _this.correctAns(target);
        }

        else{
            _this.wrongAns();
        }

    },


    removeCelebration:function()
    {
        //console.log("removeCeleb");
        _this.celebration = false;
        _this.rightmark.frame=0;
        //console.log("no"+_this.no11);
        // _this.counterForTimer=0;
        _this.drag=0;
        _this.correct=0;
        _this.count=0;
        _this.correctflag=0;
        _this.no11++;

        if(_this.no11<5)
        {
            var timerStopVar = commonNavBar.stopTimer();

            /*   _this.MaintweenDestroy = _this.add.tween(_this.SquareGrp);
                       _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);

                       _this.MaintweenDestroy = _this.add.tween(_this.optGrp);
                        _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);

                        _this.MaintweenDestroy = _this.add.tween(_this.numGrp);
                        _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);

                          _this.MaintweenDestroy.onComplete.add(function()
                          */
            //  {
            _this.graphicGrp.destroy();
            _this.SquareGrp.destroy();
            _this.numGrp.destroy();
            _this.mouse.destroy();
            _this.elephant.destroy();
            _this.rightmark.destroy();
            _this.time.events.add(500,function(){
                _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
                _this.count1++;
                _this.getQuestion();
            },_this);

        }

        else
        {
            _this.graphicGrp.destroy();
            _this.SquareGrp.destroy();
            _this.numGrp.destroy();
            _this.mouse.destroy();
            _this.elephant.destroy();
            _this.rightmark.destroy();
            var timerStopVar = commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.disableNavBar();
			commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
            this.createScoreScene();
        }
    },

    createScoreScene:function()
    {
        this.completelyplayed = true;
		
		this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);

        this.happyemoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.happyemoji.anchor.setTo(0.5);
        this.happyemoji.scale.setTo(0.7,0.7);
        this.happyemoji.frame=0;
        this.happyemoji.visible = false;

        this.sademoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.sademoji.anchor.setTo(0.5);
        this.sademoji.scale.setTo(0.7,0.7);
        this.sademoji.frame=4;
        this.sademoji.visible = false;

        this.HomeBtn = this.add.sprite(this.world.centerX+140,this.world.centerY+80,'HomeBtn');
        this.HomeBtn.anchor.setTo(0.5);
        this.HomeBtn.inputEnabled = true;
        this.HomeBtn.events.onInputDown.add(this.homeClicked,this);

        this.replayBtn = this.add.sprite(this.world.centerX-140,this.world.centerY+80,'replayBtn');
        this.replayBtn.anchor.setTo(0.5);
        this.replayBtn.inputEnabled = true;
        this.replayBtn.events.onInputDown.add(this.replayClicked,this);

        this.generateStarsForScoreScene(this,5);   //Stars based on the Game
    },


    homeClicked:function()
    {
        commonNavBar.playClickSound();

        this.HomeBtn.events.onInputDown.removeAll();
        
        commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
                commonNavBar.navBar=null;

        this.score += this.scoreSceneScore;

		this.backgroundtransp.visible=false; //Remove BackGround Opacity
		
        _this.state.start('numbersense4',true,false);
        
    },


    generateStarsForScoreScene:function(game,count)
    {
        this.starsGroup = this.add.group();
        this.scoreSceneScore = 0;
        this.maxscore = count * 5;
        console.log(this.maxscore);

        for (var i = 0; i < count; i++)
        {
            if(this.Stararr[i]!=1)
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'star5');
                this.scoreSceneScore+=5;
            }
            else
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'dot');
                this.playedwithHint = true;
            }

            for(var j =0;j<=i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).anchor.setTo(0.5);
                    this.starsGroup.getChildAt(j).x-=20;
                    this.starsGroup.getChildAt(i).x+=20;
                }
            }
        }    

        if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.sademoji.visible = true;
        }else{
            this.happyemoji.visible = true;
        }

        commonNavBar.playCelebrationSound();      
        commonNavBar.deductScore(this,this.scoreSceneScore,false,false);    

        if(!this.playedwithHint)
        {
            this.replayBtn.visible = false;
        }     
    },

    replayClicked:function()
    {
        commonNavBar.playClickSound();

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,true,false);

        this.score += this.scoreSceneScore;
        this.score -= 5;

        this.time.events.add(3000, function()
                             { 
            commonNavBar.soundVar=null,
                commonNavBar.questionArray=null,
                commonNavBar.questionCount=null,
                commonNavBar.soundUrl=null,
                commonNavBar.hint1=true,
                commonNavBar.hint2=true,
                commonNavBar.hint3=true,
				this.backgroundtransp.visible=false; //Remove BackGround Opacity
                _this.state.start('placevalue_NSPVG_5_2level1',true,false);
        }, this);
    },

    correctAns:function(target)
    {

        telInitializer2.gameCorrectAns();
        _this.stopvoice();
        target.events.onInputDown.removeAll();
        //commonNavBar.speakerbtn.inputEnabled=false;
        _this.rightmark.inputEnabled=false;
        _this.rightmark.events.onInputUp.removeAll();
        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
            { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "Click", 
            res_id: "level4.6.1_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;


        //_this.currentTime = window.timeSaveFunc();
        _this.saveAsment = 
            { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            pass: "yes",
            time2answer: _this.AnsTimerCount,
            attempts: _this.noofAttempts,
            date_time_submission: _this.currentTime, 
            access_token: window.acctkn 
        }

        //absdsjsapi.saveAssessment(_this.saveAsment);
        // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);


        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        //console.log(_this.starAnim);

        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();

        //console.log("correct11");
        //commonNavBar.speakerbtn.inputEnabled=false;


        _this.celebration = true;

        commonNavBar.playCelebrationSound();
        this.Stararr.push(3);
        _this.time.events.add(2000, _this.removeCelebration, _this);


    },



    wrongAns:function(target)
    {
        telInitializer2.gameWrongAns();
        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);
        _this.stopvoice();
        _this.rightmark.frame=1;
        commonNavBar.playWrongCelebrationSound();
        _this.shake.shake(10, _this.numGrp);
        _this.time.events.add(1000, function(){ 
            _this.drag=0;
            _this.correct=0;
            // _this.counterForTimer=0;
            _this.correctflag=0;
            _this.celebration= false;
            _this.graphicGrp.destroy();
            _this.SquareGrp.destroy();
            _this.numGrp.destroy();
            _this.optGrp.destroy();
            _this.mouse.destroy();
            _this.elephant.destroy();
            _this.rightmark.destroy();

            // _this.no11--;


            _this.getQuestion();
            /*  _this.number1.x=400;
        _this.number1.y=450;
        _this.number2.x=480;
        _this.number2.y=450;
        _this.number3.x=400;
        _this.number3.y=450;
        _this.number4.x=480;
        _this.number4.y=450;
        */

            _this.noofAttempts++;

            //_this.currentTime = window.timeSaveFunc();
            /*  _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
               } 


          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

        */
        }, _this);
        _this.time.events.add(1000, _this.removeCelebration, _this);
    },



    getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no11])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10: if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.6.1/English/46.1E.mp3");
            }
                else if(window.languageSelected=="Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.6.1/Hindi/46.1H.mp3");
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.6.1/Kannada/46.1K.mp3");
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.6.1/46.1E.mp3");
                }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.6.1/Odiya/4.6.1.mp3");
                    _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;


        }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },


    amplifyMedia:function(mediaElem, multiplier) {
        var context = new (window.AudioContext || window.webkitAudioContext),
            result = {
                context: context,
                source: context.createMediaElementSource(mediaElem),
                gain: context.createGain(),
                media: mediaElem,
                amplify: function(multiplier) { result.gain.gain.value = multiplier; },
                getAmpLevel: function() { return result.gain.gain.value; }
            };
        result.source.connect(result.gain);
        result.gain.connect(context.destination);
        result.amplify(multiplier);

        return result;
    },


    stopvoice:function(){

        if(_this.playQuestionSound)
        {
            if(_this.playQuestionSound.contains(_this.src))
            {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if(!_this.playQuestionSound.paused)
            {
                //console.log("here");
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
        }

        if(_this.celebrationSound)
        {
            if(_this.celebrationSound.isPlaying)
            {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }
        if(_this.amplify!=null)
        {
            _this.amplify.context.close();
            _this.amplify = null;
        }
    },


    shutdown:function()
    {
        this.stopvoice();

        window.score = this.score;
            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"placevalue_NSPVG_5_2state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"placevalue_NSPVG_5_2state", "fullycomplete");
                localStorage.setItem(window.avatarName+"placevalue_NSPVG_7_3state", "canplay");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            } 
    }       


};






















