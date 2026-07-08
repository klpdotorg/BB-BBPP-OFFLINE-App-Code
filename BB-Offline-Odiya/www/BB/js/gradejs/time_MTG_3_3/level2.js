Game.time_MTG_3_3level2=function(){};

Game.time_MTG_3_3level2.prototype={


    init:function(param,score,timerStopVar)
    {
        _this = this;

        //        _this.gameid = "7.2";
        //        telInitializer.gameIdInit("time7_2",gradeSelected);

        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;

    },

    create:function(game){

        _this.amplify = null;

        this.playedwithHint = false;
        this.completelyplayed = false;

        _this.questionid = null;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 1;

        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;

        _this.selectedAns = "";
        _this.rightAns = "";
        _this.rightAns1 = "";
        _this.rightAns2 = "";
        _this.rightAns3 = "";
        _this.rightAns4 = "";

        _this.theta = 0;
        _this.radius = 25;
        _this.radius1 = 50;
        _this.cX = 0;
        _this.cX1 =0;
        _this.cY =0;
        _this.cY1 =0;
        _this.arrow = 0;
        _this.target = 0;
        _this.circle =0 ;
        _this.circle1 = 0;

//        _this.clockTick = _this.add.audio('clocktick');
//        _this.clockTick.play();
//        _this.clockTick.loopFull(1);
        
        _this.clockTick = new Audio('sounds/clocktick.mp3');
        _this.clockTick.play();

        _this.wrong = true;
        _this.no1=0;
        // _this.qArrays = [1,3,5,7,9,11];
        //_this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
        _this.qArrays = [1,2,3,4,5,6];
        _this.qArrays1 = [7,8,9,10,11,12];

        _this.qArrays = _this.shuffle(_this.qArrays);
        _this.qArrays1 = _this.shuffle(_this.qArrays1);

        _this.count=0;0
        _this.count1=4;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height, 'Level72_bg1');
        _this.bg2 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height, 'Level72_bg2');

        commonNavBar.addNavBar(game,_this.soundurl,"measurement3");
        commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['MTG3.3','level2',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);

        _this.generateStarsForTheScene(9);
        // _this.no1++;
        _this.getQuestion();

    },

    updateTimer:function() {        
        _this.counterForTimer++;
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            if(_this.minutes<10){
                _this.minutes =  _this.minutes+1;
                _this.seconds = 00;
            }
            else{
                _this.minutes =  _this.minutes+1;

            }
        }
        else{
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
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

    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {
            _this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');

            for(var j =0;j<i;j++)
            {
                if( _this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=10;
                    _this.starsGroup.getChildAt(i).x+=10;
                }
            }
            if(this.Stararr[i])
            {  
                _this.starsGroup.getChildAt(i).frame = this.Stararr[i];
            }
        }
        _this.starsGroup.getChildAt(4).frame = 2;	               
    },

    getQuestion:function(target)
    {   
        _this.noofAttempts = 0;
        _this.AnsTimerCount=0;

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function(){
            _this.AnsTimerCount++;
        }, _this);

        //  Start the _this.timer running - _this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
        _this.timer1.loop(1000, function(){
            //            _this.updateTimer();
        }, _this);
        _this.timer1.start();
        /**************************************************************************/ 

        //        _this.speakerbtn.inputEnabled=true;
        //        _this.speakerbtn.input.useHandCursor = true;

        _this.temp = 0;
        if(_this.no1<3)
        {
            _this.temp =  _this.qArrays[_this.no1];    
        }
        else
        {
            _this.temp =  _this.qArrays1[_this.no1];
        }

        switch(_this.temp)      
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
            case 11: _this.gotoEleventhQuestion();
                break;
            case 12: _this.gotoTwevelvethQuestion();
                break;
        }
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },

    gotoFirstQuestion:function(){
        _this.questionid = 1;
        _this.stopVoice();
        _this.bg1.visible = false;
        _this.bg2.visible = true;
        _this.questionNo = 1;
        //console.log("Question number "+_this.questionNo);
        if(_this.no1==0)
        {
            _this.getVoice();
        }

        _this.eqnum = 0;
        _this.objGroup = _this.add.group();
        _this.shakeObjectGroup = _this.add.group();

        _this.crocsGroup = _this.add.group();
        _this.addNumberPad();
        _this.b1 = _this.add.sprite(230,429,'Level72_clock');
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = "clock";

        _this.b2 = _this.add.sprite(600,270,'Level72_inputBox');
        _this.b2.anchor.setTo(0.5);
        _this.b2.name = "inputBox";

        _this.b3 = _this.add.sprite(236,272,'Level72_minHand');
        _this.b3.anchor.setTo(1,0.5);
        _this.b3.name = "minHand";
        _this.b3.angle = 360;

        _this.b4 = _this.add.sprite(224,273,'Level72_hourHand');
        _this.b4.anchor.setTo(0,0.5);
        _this.b4.name = "hourHand";
        _this.b4.angle = 355;

        _this.b7 = _this.add.sprite(230,269,'Level72_circleToCover');
        _this.b7.scale.setTo(1.1,1.1);
        _this.b7.anchor.setTo(0.5, 0.5);
        //_this.b7.inputEnabled = true;
        //_this.b7.input.useHandCursor = true;
        _this.b7.name = "circleToCover";
        _this.b7.angle = 270;

        _this.shakeObjectGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.shakeObjectGroup.add(_this.b3);
        _this.shakeObjectGroup.add(_this.b4);
        _this.shakeObjectGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.tickMark);

        _this.x = 500;
        _this.y = 276;

        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }

        _this.shakeObjectGroup.x = 1000;
        _this.objGroup.x = 1000;
        _this.numGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        _this.Maintween1 = _this.add.tween(_this.objGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        _this.Maintween2 = _this.add.tween(_this.numGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        //_this.counterText.setText("0");

        _this.rightAns = "0245";
        _this.rightAns1 = "blank245";
        _this.rightAns2 = "2blank45";
    },    

    gotoSecondQuestion:function(){ 
        _this.questionid = 1;
        _this.stopVoice();
        _this.bg1.visible = false;
        _this.bg2.visible = true;
        _this.questionNo = 2;
        //console.log("Question number "+_this.questionNo);
        if(_this.no1==0)
        {
            _this.getVoice();
        }

        _this.shakeObjectGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.crocsGroup = _this.add.group();
        _this.addNumberPad();
        _this.b1 = _this.add.sprite(230,429,'Level72_clock');
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = "clock";

        _this.b2 = _this.add.sprite(600,270,'Level72_inputBox');
        _this.b2.anchor.setTo(0.5);
        _this.b2.name = "inputBox";

        _this.b3 = _this.add.sprite(222,270,'Level72_minHand');
        _this.b3.anchor.setTo(1,0.5);
        _this.b3.name = "minHand";
        _this.b3.angle = 180;

        _this.b4 = _this.add.sprite(229,275,'Level72_hourHand');
        _this.b4.anchor.setTo(0,0.5);
        _this.b4.name = "hourHand";
        _this.b4.angle = 270;

        _this.b7 = _this.add.sprite(230,269,'Level72_circleToCover');
        _this.b7.scale.setTo(1.1,1.1);
        _this.b7.anchor.setTo(0.5, 0.5);
        //_this.b7.inputEnabled = true;
        //_this.b7.input.useHandCursor = true;
        _this.b7.name = "circleToCover";
        _this.b7.angle = 270;

        _this.shakeObjectGroup.add( _this.b1);
        _this.objGroup.add( _this.b2);
        _this.shakeObjectGroup.add(_this.b3);
        _this.shakeObjectGroup.add(_this.b4);
        _this.shakeObjectGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.tickMark);

        _this.x = 500;
        _this.y = 276;

        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create( _this.x, _this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }

        _this.shakeObjectGroup.x = 1000;
        _this.objGroup.x = 1000;
        _this.numGroup.x = 1000;
        _this.Maintween =  _this.add.tween(_this.shakeObjectGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        _this.Maintween1 =  _this.add.tween(_this.objGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        _this.Maintween2 =  _this.add.tween(_this.numGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        //_this.counterText.setText("0");

        _this.rightAns = "1215";

    },

    gotoThirdQuestion:function(){
        _this.questionid = 1;
        _this.stopVoice();
        _this.bg1.visible = false;
        _this.bg2.visible = true;
        _this.questionNo = 3;
        //console.log("Question number "+_this.questionNo);
        if(_this.no1==0)
        {
            _this.getVoice();
        }

        _this.shakeObjectGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.crocsGroup = _this.add.group();
        _this.addNumberPad();
        _this.b1 = _this.add.sprite(230,429,'Level72_clock');
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = "clock";

        _this.b2 = _this.add.sprite(600,270,'Level72_inputBox');
        _this.b2.anchor.setTo(0.5);
        _this.b2.name = "inputBox";

        _this.b3 = _this.add.sprite(230,264,'Level72_minHand');
        _this.b3.anchor.setTo(1,0.5);
        _this.b3.name = "minHand";
        _this.b3.angle = 270;

        _this.b4 = _this.add.sprite(236,269,'Level72_hourHand');
        _this.b4.anchor.setTo(0,0.5);
        _this.b4.name = "hourHand";
        _this.b4.angle = 180;

        _this.b7 = _this.add.sprite(231,269,'Level72_circleToCover');
        _this.b7.scale.setTo(1.1,1.1);
        _this.b7.anchor.setTo(0.5, 0.5);
        //_this.b7.inputEnabled = true;
        //_this.b7.input.useHandCursor = true;
        _this.b7.name = "circleToCover";
        _this.b7.angle = 270;

        _this.shakeObjectGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.shakeObjectGroup.add(_this.b3);
        _this.shakeObjectGroup.add(_this.b4);
        _this.shakeObjectGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.tickMark);

        _this.x = 500;
        _this.y = 276;

        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }

        _this.shakeObjectGroup.x = 1000;
        _this.objGroup.x = 1000;
        _this.numGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        _this.Maintween1 = _this.add.tween(_this.objGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        _this.Maintween2 = _this.add.tween(_this.numGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        //_this.counterText.setText("0");

        _this.rightAns = "0930";
        _this.rightAns1 = "blank930";
        _this.rightAns2 = "9blank30";

    },

    gotoFourthQuestion:function(){
        _this.questionid = 1;
        _this.stopVoice();
        _this.bg1.visible = false;
        _this.bg2.visible = true;
        _this.questionNo = 4;
        //console.log("Question number "+_this.questionNo);
        if(_this.no1==0)
        {
            _this.getVoice();
        }

        _this.shakeObjectGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.crocsGroup = _this.add.group();
        _this.addNumberPad();
        _this.b1 = _this.add.sprite(230,429,'Level72_clock');
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = "clock";

        _this.b2 = _this.add.sprite(600,270,'Level72_inputBox');
        _this.b2.anchor.setTo(0.5);
        _this.b2.name = "inputBox";

        _this.b3 = _this.add.sprite(230,278,'Level72_minHand');
        _this.b3.anchor.setTo(1,0.5);
        _this.b3.name = "minHand";
        _this.b3.angle = 90;

        _this.b4 = _this.add.sprite(229,265,'Level72_hourHand');
        _this.b4.anchor.setTo(0,0.5);
        _this.b4.name = "hourHand";
        _this.b4.angle = 90;

        _this.b7 = _this.add.sprite(235,268,'Level72_circleToCover');
        _this.b7.scale.setTo(1.1,1.1);
        _this.b7.anchor.setTo(0.5, 0.5);
        //_this.b7.inputEnabled = true;
        //_this.b7.input.useHandCursor = true;
        _this.b7.name = "circleToCover";
        _this.b7.angle = 270;

        _this.shakeObjectGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.shakeObjectGroup.add(_this.b3);
        _this.shakeObjectGroup.add(_this.b4);
        _this.shakeObjectGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.tickMark);

        _this.x = 500;
        _this.y = 276;

        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }

        _this.shakeObjectGroup.x = 1000;
        _this.objGroup.x = 1000;
        _this.numGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        _this.Maintween1 = _this.add.tween(_this.objGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        _this.Maintween2 = _this.add.tween(_this.numGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        //_this.counterText.setText("0");

        _this.rightAns = "0600";
        _this.rightAns1 = "blank600";
        _this.rightAns2 = "6blank00";
        _this.rightAns3 = "6blankblankblank";
        _this.rightAns4 = "blank6blankblank";
        _this.rightAns5 = "06blankblank";

    }, 

    gotoFifthQuestion:function(){
        _this.questionid = 1;
        _this.stopVoice();
        _this.bg1.visible = false;
        _this.bg2.visible = true;
        _this.questionNo = 5;
        //console.log("Question number "+_this.questionNo);
        if(_this.no1==0)
        {
            _this.getVoice();
        }

        _this.shakeObjectGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.crocsGroup = _this.add.group();
        _this.addNumberPad();
        _this.b1 = _this.add.sprite(230,429,'Level72_clock');
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = "clock";

        _this.b2 = _this.add.sprite(600,270,'Level72_inputBox');
        _this.b2.anchor.setTo(0.5);
        _this.b2.name = "inputBox";

        _this.b3 = _this.add.sprite(230,278,'Level72_minHand');
        _this.b3.anchor.setTo(1,0.5);
        _this.b3.name = "minHand";
        _this.b3.angle = 120;

        _this.b4 = _this.add.sprite(230,280,'Level72_hourHand');
        _this.b4.anchor.setTo(0,0.5);
        _this.b4.name = "hourHand";
        _this.b4.angle = 300;

        _this.b7 = _this.add.sprite(235,268,'Level72_circleToCover');
        _this.b7.scale.setTo(1.1,1.1);
        _this.b7.anchor.setTo(0.5, 0.5);
        //_this.b7.inputEnabled = true;
        //_this.b7.input.useHandCursor = true;
        _this.b7.name = "circleToCover";
        _this.b7.angle = 270;

        _this.shakeObjectGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.shakeObjectGroup.add(_this.b3);
        _this.shakeObjectGroup.add(_this.b4);
        _this.shakeObjectGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.tickMark);

        _this.x = 500;
        _this.y = 276;

        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
        /*  _this.objGroup.x = this.world.centerX;
        _this.objGroup.y= this.world.centerY; 
        _this.objGroup.pivot.x = this.world.centerX;
        _this.objGroup.pivot.y= this.world.centerY;*/

        _this.shakeObjectGroup.x = 1000;
        _this.objGroup.x = 1000;
        _this.numGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        _this.Maintween1 = _this.add.tween(_this.objGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        _this.Maintween2 = _this.add.tween(_this.numGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        //_this.counterText.setText("0");

        _this.rightAns = "0105";
        _this.rightAns1 = "blank105";
        _this.rightAns2 = "015blank";
        _this.rightAns3 = "blank15blank";
        _this.rightAns4 = "blank1blank5";

    },

    gotoSixthQuestion:function(){
        _this.questionid = 1;
        _this.stopVoice();
        _this.bg1.visible = false;
        _this.bg2.visible = true;
        _this.questionNo = 6;
        //console.log("Question number "+_this.questionNo);
        if(_this.no1==0)
        {
            _this.getVoice();
        }

        _this.objGroup = _this.add.group();
        _this.shakeObjectGroup = this.add.group();

        _this.crocsGroup = _this.add.group();
        _this.addNumberPad();
        _this.b1 = _this.add.sprite(230,429,'Level72_clock');
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = "clock";

        _this.b2 = _this.add.sprite(600,270,'Level72_inputBox');
        _this.b2.anchor.setTo(0.5);
        _this.b2.name = "inputBox";

        _this.b3 = _this.add.sprite(229,261,'Level72_minHand');
        _this.b3.anchor.setTo(1,0.5);
        _this.b3.name = "minHand";
        _this.b3.angle = 300;

        _this.b4 = _this.add.sprite(222,269,'Level72_hourHand');
        _this.b4.anchor.setTo(0,0.5);
        _this.b4.name = "hourHand";
        _this.b4.angle = 325;

        _this.b7 = _this.add.sprite(228,265,'Level72_circleToCover');
        _this.b7.scale.setTo(1.1,1.1);
        _this.b7.anchor.setTo(0.5, 0.5);
        // _this.b7.inputEnabled = true;
        //_this.b7.input.useHandCursor = true;
        _this.b7.name = "circleToCover";
        _this.b7.angle = 270;

        _this.shakeObjectGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.shakeObjectGroup.add(_this.b3);
        _this.shakeObjectGroup.add(_this.b4);
        _this.shakeObjectGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.tickMark);

        _this.x = 500;
        _this.y = 276;

        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
        /*  _this.objGroup.x = this.world.centerX;
        _this.objGroup.y= this.world.centerY; 
        _this.objGroup.pivot.x = this.world.centerX;
        _this.objGroup.pivot.y= this.world.centerY;*/

        _this.shakeObjectGroup.x = 1000;
        _this.objGroup.x = 1000;
        _this.numGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        _this.Maintween1 = _this.add.tween(_this.objGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0); 
        _this.Maintween2 = _this.add.tween(_this.numGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        //_this.counterText.setText("0");

        _this.rightAns = "0135";
        _this.rightAns1 = "blank135";
        _this.rightAns2 = "1blank35";

    },

    gotoSeventhQuestion:function(){
        _this.questionid = 1;
        _this.stopVoice();
        if(_this.no1==3)
        {
            _this.getVoice();
        }
        _this.bg2.visible = false;
        _this.bg1.visible = true;
        _this.questionNo = 7;
        //console.log("Question number "+_this.questionNo);

        _this.shakeObjectGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.crocsGroup = _this.add.group();
        _this.b1 = _this.add.sprite(580,454,'Level72_clock');
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = "clock";

        _this.b2 = _this.add.sprite(225,280,'Level72_inputBox');
        _this.b2.anchor.setTo(0.5);
        _this.b2.name = "inputBox";

        _this.b3 = _this.add.sprite(579,298,'Level72_minHand');
        _this.b3.anchor.setTo(0.95, 0.5);
        _this.b3.name = "minHand";
        _this.b3.inputEnabled = true;
        _this.b3.input.useHandCursor = true;
        _this.b3.angle = 90;

        _this.b5 = _this.add.sprite(580,300,'Level72_mn');
        _this.b5.anchor.setTo(0.5, 0.5);
        _this.b5.name = "mn";
        _this.b5.inputEnabled = true;
        _this.b5.input.useHandCursor = true;
        _this.b5.input.enableDrag(true);
        _this.b5.angle = 270;
        _this.b5.alpha = 0;

        _this.b4 = _this.add.sprite(581,299,'Level72_hourHand');
        _this.b4.anchor.setTo(0.1, 0.45);
        _this.b4.inputEnabled = true;
        _this.b4.input.useHandCursor = true;
        //_this.b4.input.enableDrag(true);
        _this.b4.name = "hourHand";
        _this.b4.angle = 270;

        _this.b6 = _this.add.sprite(500,300,'Level72_hr');
        _this.b6.anchor.setTo(0.5, 0.5);
        _this.b6.inputEnabled = true;
        _this.b6.input.useHandCursor = true;
        _this.b6.input.enableDrag(true);
        _this.b6.name = "hr";
        _this.b6.angle = 270;
        _this.b6.alpha= 0;

        _this.b7 = _this.add.sprite(583,298,'Level72_circleToCover');
        _this.b7.scale.setTo(1.1,1.1);
        _this.b7.anchor.setTo(0.5, 0.5);
        _this.b7.inputEnabled = true;
        _this.b7.input.useHandCursor = true;
        _this.b7.name = "circleToCover";
        _this.b7.angle = 270;


        _this.cX = _this.b1.centerX;
        _this.cY = _this.b1.centerY+20;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2,0xFF0000);
        _this.circle.drawCircle(_this.cX,_this.cY,_this.radius*2);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2,0xFF0000);
        _this.circle1.drawCircle(_this.cX,_this.cY,_this.radius1*2);
        _this.circle1.alpha=0;
        _this.b5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
        _this.b6.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.moveSpriteOnCircle(_this.cX,0);
        _this.moveSpriteOnCircle1(_this.cX,0);

        //_this.b3.rotation = this.physics.arcade.angleBetween(b3,b4);
        _this.tickMark = _this.add.sprite(800,240,'Level72_tickMark');
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);

        _this.crocsGroup.add(_this.b1);
        _this.shakeObjectGroup.add(_this.b2);
        _this.crocsGroup.add(_this.b3);
        _this.crocsGroup.add(_this.b4);
        _this.crocsGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.circle);
        _this.shakeObjectGroup.add(_this.circle1);
        _this.crocsGroup.add(_this.b5);
        _this.crocsGroup.add(_this.b6);
        _this.shakeObjectGroup.add(_this.tickMark);

        _this.x = 124;
        _this.y = 285;

        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
        _this.objGroup.getByName("box0").frame = 1;
        _this.objGroup.getByName("box1").frame = 10;
        _this.objGroup.getByName("box2").frame = 1;
        _this.objGroup.getByName("box3").frame = 1;
        if(_this.wrong){
            _this.shakeObjectGroup.x = 1000;
            _this.objGroup.x = 1000;
            _this.crocsGroup.x = 1000;
            _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
            _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            _this.Maintween1 = _this.add.tween(_this.objGroup);
            _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
            _this.Maintween2 = _this.add.tween(_this.crocsGroup);
            _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);  
        }
    },

    gotoEighthQuestion:function(){
        _this.questionid = 1;
        _this.stopVoice();
        if(_this.no1==3)
        {
            _this.getVoice();
        }
        _this.bg2.visible = false;
        _this.bg1.visible = true;
        _this.questionNo = 8;
        //console.log("Question number "+_this.questionNo);
        _this.shakeObjectGroup = _this.add.group();
        _this.crocsGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.b1 = _this.add.sprite(580,454,'Level72_clock');
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = "clock";

        _this.b2 = _this.add.sprite(225,280,'Level72_inputBox');
        _this.b2.anchor.setTo(0.5);
        _this.b2.name = "inputBox";

        _this.b3 = _this.add.sprite(581,298,'Level72_minHand');
        _this.b3.anchor.setTo(0.95, 0.5);
        _this.b3.name = "minHand";
        _this.b3.inputEnabled = true;
        _this.b3.input.useHandCursor = true;
        _this.b3.angle = 90;

        _this.b5 = _this.add.sprite(580,300,'Level72_mn');
        _this.b5.anchor.setTo(0.5, 0.5);
        _this.b5.name = "mn";
        _this.b5.inputEnabled = true;
        _this.b5.input.useHandCursor = true;
        _this.b5.input.enableDrag(true);
        _this.b5.angle = 270;
        _this.b5.alpha = 0;

        _this.b4 = _this.add.sprite(581,299,'Level72_hourHand');
        _this.b4.anchor.setTo(0.1, 0.45);
        _this.b4.inputEnabled = true;
        _this.b4.input.useHandCursor = true;
        //_this.b4.input.enableDrag(true);
        _this.b4.name = "hourHand";
        _this.b4.angle = 270;

        _this.b6 = _this.add.sprite(500,300,'Level72_hr');
        _this.b6.anchor.setTo(0.5, 0.5);
        _this.b6.inputEnabled = true;
        _this.b6.input.useHandCursor = true;
        _this.b6.input.enableDrag(true);
        _this.b6.name = "hr";
        _this.b6.angle = 270;
        _this.b6.alpha= 0;

        _this.b7 = _this.add.sprite(583,298,'Level72_circleToCover');
        _this.b7.scale.setTo(1.1,1.1);
        _this.b7.anchor.setTo(0.5, 0.5);
        _this.b7.inputEnabled = true;
        _this.b7.input.useHandCursor = true;
        _this.b7.name = "circleToCover";
        _this.b7.angle = 270;

        _this.cX = _this.b1.centerX;
        _this.cY = _this.b1.centerY+20;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2,0xFF0000);
        _this.circle.drawCircle(_this.cX,_this.cY,_this.radius*2);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2,0xFF0000);
        _this.circle1.drawCircle(_this.cX,_this.cY,_this.radius1*2);
        _this.circle1.alpha=0;
        _this.b5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
        _this.b6.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.moveSpriteOnCircle(_this.cX,0);
        _this.moveSpriteOnCircle1(_this.cX,0);

        //_this.b3.rotation = this.physics.arcade.angleBetween(b3,b4);
        _this.tickMark = _this.add.sprite(800,240,'Level72_tickMark');
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);

        _this.crocsGroup.add(_this.b1);
        _this.shakeObjectGroup.add(_this.b2);
        _this.crocsGroup.add(_this.b3);
        _this.crocsGroup.add(_this.b4);
        _this.crocsGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.circle);
        _this.shakeObjectGroup.add(_this.circle1);
        _this.crocsGroup.add(_this.b5);
        _this.crocsGroup.add(_this.b6);
        _this.shakeObjectGroup.add(_this.tickMark);

        _this.x = 124;
        _this.y = 285;

        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
        _this.objGroup.getByName("box0").frame = 2;
        _this.objGroup.getByName("box1").frame = 3;
        _this.objGroup.getByName("box2").frame = 4;
        _this.objGroup.getByName("box3").frame = 1;
        if(_this.wrong){
            _this.shakeObjectGroup.x = 1000;
            _this.crocsGroup.x = 1000;
            _this.objGroup.x = 1000;
            _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
            _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            _this.Maintween1 = _this.add.tween(_this.objGroup);
            _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);  
            _this.Maintween2 = _this.add.tween(_this.crocsGroup);
            _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);  
        }

    },

    gotoNinthQuestion:function(){
        _this.questionid = 1;
        this.stopVoice();
        if(_this.no1==3)
        {
            _this.getVoice();
        }
        _this.bg2.visible = false;
        _this.bg1.visible = true;
        _this.questionNo = 9;
        //console.log("Question number "+_this.questionNo);
        _this.shakeObjectGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.crocsGroup = _this.add.group();
        _this.b1 = _this.add.sprite(580,454,'Level72_clock');
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = "clock";

        _this.b2 = _this.add.sprite(225,280,'Level72_inputBox');
        _this.b2.anchor.setTo(0.5);
        _this.b2.name = "inputBox";

        _this.b3 = _this.add.sprite(579,299,'Level72_minHand');
        _this.b3.anchor.setTo(0.95, 0.5);
        _this.b3.name = "minHand";
        _this.b3.inputEnabled = true;
        _this.b3.input.useHandCursor = true;
        _this.b3.angle = 90;

        _this.b5 = _this.add.sprite(580,300,'Level72_mn');
        _this.b5.anchor.setTo(0.5, 0.5);
        _this.b5.name = "mn";
        _this.b5.inputEnabled = true;
        _this.b5.input.useHandCursor = true;
        _this.b5.input.enableDrag(true);
        _this.b5.angle = 270;
        _this.b5.alpha = 0;

        _this.b4 = _this.add.sprite(581,299,'Level72_hourHand');
        _this.b4.anchor.setTo(0.1, 0.45);
        _this.b4.inputEnabled = true;
        _this.b4.input.useHandCursor = true;
        //_this.b4.input.enableDrag(true);
        _this.b4.name = "hourHand";
        _this.b4.angle = 270;

        _this.b6 = _this.add.sprite(500,300,'Level72_hr');
        _this.b6.anchor.setTo(0.5, 0.5);
        _this.b6.inputEnabled = true;
        _this.b6.input.useHandCursor = true;
        _this.b6.input.enableDrag(true);
        _this.b6.name = "hr";
        _this.b6.angle = 270;
        _this.b6.alpha= 0;

        _this.b7 = _this.add.sprite(583,298,'Level72_circleToCover');
        _this.b7.scale.setTo(1.1,1.1);
        _this.b7.anchor.setTo(0.5, 0.5);
        _this.b7.inputEnabled = true;
        _this.b7.input.useHandCursor = true;
        _this.b7.name = "circleToCover";
        _this.b7.angle = 270;

        _this.cX = _this.b1.centerX;
        _this.cY = _this.b1.centerY+20;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2,0xFF0000);
        _this.circle.drawCircle(_this.cX,_this.cY,_this.radius*2);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2,0xFF0000);
        _this.circle1.drawCircle(_this.cX,_this.cY,_this.radius1*2);
        _this.circle1.alpha=0;
        _this.b5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
        _this.b6.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.moveSpriteOnCircle(_this.cX,0);
        _this.moveSpriteOnCircle1(_this.cX,0);

        //_this.b3.rotation = this.physics.arcade.angleBetween(b3,b4);
        _this.tickMark = _this.add.sprite(800,240,'Level72_tickMark');
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);

        _this.crocsGroup.add(_this.b1);
        _this.shakeObjectGroup.add(_this.b2);
        _this.crocsGroup.add(_this.b3);
        _this.crocsGroup.add(_this.b4);
        _this.crocsGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.circle);
        _this.shakeObjectGroup.add(_this.circle1);
        _this.crocsGroup.add(_this.b5);
        _this.crocsGroup.add(_this.b6);
        _this.shakeObjectGroup.add(_this.tickMark);

        _this.x = 124;
        _this.y = 285;

        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
        _this.objGroup.getByName("box0").frame = 1;
        _this.objGroup.getByName("box1").frame = 8;
        _this.objGroup.getByName("box2").frame = 2;
        _this.objGroup.getByName("box3").frame = 6;
        if(_this.wrong){
            _this.shakeObjectGroup.x = 1000;
            _this.objGroup.x = 1000;
            _this.crocsGroup.x = 1000;
            _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
            _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            _this.Maintween1 = _this.add.tween(_this.objGroup);
            _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);  
            _this.Maintween2 = _this.add.tween(_this.crocsGroup);
            _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);  
        }
    },

    gotoTenthQuestion:function(){
        _this.questionid = 1;
        _this.stopVoice();
        if(_this.no1==3)
        {
            _this.getVoice();
        }
        _this.bg2.visible = false;
        _this.bg1.visible = true;
        _this.questionNo = 10;
        //console.log("Question number "+_this.questionNo);
        _this.shakeObjectGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.crocsGroup = _this.add.group();
        _this.b1 = _this.add.sprite(580,454,'Level72_clock');
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = "clock";

        _this.b2 = _this.add.sprite(225,280,'Level72_inputBox');
        _this.b2.anchor.setTo(0.5);
        _this.b2.name = "inputBox";

        _this.b3 = _this.add.sprite(580,299,'Level72_minHand');
        _this.b3.anchor.setTo(0.95, 0.5);
        _this.b3.name = "minHand";
        _this.b3.inputEnabled = true;
        _this.b3.input.useHandCursor = true;
        _this.b3.angle = 90;

        _this.b5 = _this.add.sprite(580,300,'Level72_mn');
        _this.b5.anchor.setTo(0.5, 0.5);
        _this.b5.name = "mn";
        _this.b5.inputEnabled = true;
        _this.b5.input.useHandCursor = true;
        _this.b5.input.enableDrag(true);
        _this.b5.angle = 270;
        _this.b5.alpha = 0;

        _this.b4 = _this.add.sprite(581,299,'Level72_hourHand');
        _this.b4.anchor.setTo(0.1, 0.45);
        _this.b4.inputEnabled = true;
        _this.b4.input.useHandCursor = true;
        //_this.b4.input.enableDrag(true);
        _this.b4.name = "hourHand";
        _this.b4.angle = 270;

        _this.b6 = _this.add.sprite(500,300,'Level72_hr');
        _this.b6.anchor.setTo(0.5, 0.5);
        _this.b6.inputEnabled = true;
        _this.b6.input.useHandCursor = true;
        _this.b6.input.enableDrag(true);
        _this.b6.name = "hr";
        _this.b6.angle = 270;
        _this.b6.alpha= 0;

        _this.b7 = _this.add.sprite(583,298,'Level72_circleToCover');
        _this.b7.scale.setTo(1.1,1.1);
        _this.b7.anchor.setTo(0.5, 0.5);
        _this.b7.inputEnabled = true;
        _this.b7.input.useHandCursor = true;
        _this.b7.name = "circleToCover";
        _this.b7.angle = 270;

        _this.cX = _this.b1.centerX;
        _this.cY = _this.b1.centerY+20;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2,0xFF0000);
        _this.circle.drawCircle(_this.cX,_this.cY,_this.radius*2);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2,0xFF0000);
        _this.circle1.drawCircle(_this.cX,_this.cY,_this.radius1*2);
        _this.circle1.alpha=0;
        _this.b5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
        _this.b6.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.moveSpriteOnCircle(_this.cX,0);
        _this.moveSpriteOnCircle1(_this.cX,0);

        //_this.b3.rotation = this.physics.arcade.angleBetween(b3,b4);
        _this.tickMark = _this.add.sprite(800,240,'Level72_tickMark');
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);

        _this.crocsGroup.add(_this.b1);
        _this.shakeObjectGroup.add(_this.b2);
        _this.crocsGroup.add(_this.b3);
        _this.crocsGroup.add(_this.b4);
        _this.crocsGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.circle);
        _this.shakeObjectGroup.add(_this.circle1);
        _this.crocsGroup.add(_this.b5);
        _this.crocsGroup.add(_this.b6);
        _this.shakeObjectGroup.add(_this.tickMark);

        _this.x = 124;
        _this.y = 285;

        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
        _this.objGroup.getByName("box0").frame = 1;
        _this.objGroup.getByName("box1").frame = 5;
        _this.objGroup.getByName("box2").frame = 5;
        _this.objGroup.getByName("box3").frame = 6;
        if(_this.wrong){
            _this.shakeObjectGroup.x = 1000;
            _this.objGroup.x = 1000;
            _this.crocsGroup.x = 1000;
            _this.Maintween = this.add.tween(_this.shakeObjectGroup);
            _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            _this.Maintween1 = this.add.tween(_this.objGroup);
            _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0); 
            _this.Maintween2 = this.add.tween(_this.crocsGroup);
            _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);  
        }

    },

    gotoEleventhQuestion:function(){
        _this.questionid = 1;
        _this.stopVoice();
        if(_this.no1==3)
        {
            _this.getVoice();
        }
        _this.bg2.visible = false;
        _this.bg1.visible = true;
        _this.questionNo = 11;
        //console.log("Question number "+_this.questionNo);
        _this.shakeObjectGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.crocsGroup = _this.add.group();
        _this.b1 = _this.add.sprite(580,454,'Level72_clock');
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = "clock";

        _this.b2 = _this.add.sprite(225,280,'Level72_inputBox');
        _this.b2.anchor.setTo(0.5);
        _this.b2.name = "inputBox";

        _this.b3 = _this.add.sprite(580,299,'Level72_minHand');
        _this.b3.anchor.setTo(0.95, 0.5);
        _this.b3.name = "minHand";
        _this.b3.inputEnabled = true;
        _this.b3.input.useHandCursor = true;
        _this.b3.angle = 90;

        _this.b5 = _this.add.sprite(580,300,'Level72_mn');
        _this.b5.anchor.setTo(0.5, 0.5);
        _this.b5.name = "mn";
        _this.b5.inputEnabled = true;
        _this.b5.input.useHandCursor = true;
        _this.b5.input.enableDrag(true);
        _this.b5.angle = 270;
        _this.b5.alpha = 0;

        _this.b4 = _this.add.sprite(581,300,'Level72_hourHand');
        _this.b4.anchor.setTo(0.1, 0.45);
        _this.b4.inputEnabled = true;
        _this.b4.input.useHandCursor = true;
        //_this.b4.input.enableDrag(true);
        _this.b4.name = "hourHand";
        _this.b4.angle = 270;

        _this.b6 = _this.add.sprite(500,300,'Level72_hr');
        _this.b6.anchor.setTo(0.5, 0.5);
        _this.b6.inputEnabled = true;
        _this.b6.input.useHandCursor = true;
        _this.b6.input.enableDrag(true);
        _this.b6.name = "hr";
        _this.b6.angle = 270;
        _this.b6.alpha= 0;

        _this.b7 = _this.add.sprite(583,298,'Level72_circleToCover');
        _this.b7.scale.setTo(1.1,1.1);
        _this.b7.anchor.setTo(0.5, 0.5);
        _this.b7.inputEnabled = true;
        _this.b7.input.useHandCursor = true;
        _this.b7.name = "circleToCover";
        _this.b7.angle = 270;

        _this.cX = _this.b1.centerX;
        _this.cY = _this.b1.centerY+20;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2,0xFF0000);
        _this.circle.drawCircle(_this.cX,_this.cY,_this.radius*2);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2,0xFF0000);
        _this.circle1.drawCircle(_this.cX,_this.cY,_this.radius1*2);
        _this.circle1.alpha=0;
        _this.b5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
        _this.b6.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.moveSpriteOnCircle(_this.cX,0);
        _this.moveSpriteOnCircle1(_this.cX,0);

        //_this.b3.rotation = this.physics.arcade.angleBetween(b3,b4);
        _this.tickMark = _this.add.sprite(800,240,'Level72_tickMark');
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);

        _this.crocsGroup.add(_this.b1);
        _this.shakeObjectGroup.add(_this.b2);
        _this.crocsGroup.add(_this.b3);
        _this.crocsGroup.add(_this.b4);
        _this.crocsGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.circle);
        _this.shakeObjectGroup.add(_this.circle1);
        _this.crocsGroup.add(_this.b5);
        _this.crocsGroup.add(_this.b6);
        _this.shakeObjectGroup.add(_this.tickMark);

        _this.x = 124;
        _this.y = 285;

        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
        _this.objGroup.getByName("box0").frame = 1;
        _this.objGroup.getByName("box1").frame = 6;
        _this.objGroup.getByName("box2").frame = 5;
        _this.objGroup.getByName("box3").frame = 1;
        if(_this.wrong){
            _this.shakeObjectGroup.x = 1000;
            _this.objGroup.x = 1000;
            _this.crocsGroup.x = 1000;
            _this.Maintween = this.add.tween(_this.shakeObjectGroup);
            _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            _this.Maintween1 = this.add.tween(_this.objGroup);
            _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0); 
            _this.Maintween2 = this.add.tween(_this.crocsGroup);
            _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);  
        } 
    },

    gotoTwevelvethQuestion:function(){
        _this.questionid = 1;
        _this.stopVoice();
        if(_this.no1==3)
        {
            _this.getVoice();
        }
        _this.bg2.visible = false;
        _this.bg1.visible = true;
        _this.questionNo = 12;
        //console.log("Question number "+_this.questionNo);
        _this.shakeObjectGroup = _this.add.group();
        _this.crocsGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.b1 = _this.add.sprite(580,454,'Level72_clock');
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = "clock";

        _this.b2 = _this.add.sprite(225,280,'Level72_inputBox');
        _this.b2.anchor.setTo(0.5);
        _this.b2.name = "inputBox";

        _this.b3 = _this.add.sprite(580,300,'Level72_minHand');
        //_this.b3.anchor.setTo(0.95, 0.5);
        _this.b3.anchor.setTo(0.95, 0.5);
        _this.b3.name = "minHand";
        _this.b3.inputEnabled = true;
        _this.b3.input.useHandCursor = true;
        _this.b3.angle = 90;

        _this.b5 = _this.add.sprite(580,300,'Level72_mn');
        _this.b5.anchor.setTo(0.5, 0.5);
        _this.b5.name = "mn";
        _this.b5.inputEnabled = true;
        _this.b5.input.useHandCursor = true;
        _this.b5.input.enableDrag(true);
        _this.b5.angle = 270;
        _this.b5.alpha = 0;

        _this.b4 = _this.add.sprite(581,300,'Level72_hourHand');
        //_this.b4.anchor.setTo(0.1, 0.45);
        _this.b4.anchor.setTo(0.1, 0.45);
        _this.b4.inputEnabled = true;
        _this.b4.input.useHandCursor = true;
        //_this.b4.input.enableDrag(true);
        _this.b4.name = "hourHand";
        _this.b4.angle = 270;

        _this.b6 = _this.add.sprite(500,300,'Level72_hr');
        _this.b6.anchor.setTo(0.5, 0.5);
        _this.b6.inputEnabled = true;
        _this.b6.input.useHandCursor = true;
        _this.b6.input.enableDrag(true);
        _this.b6.name = "hr";
        _this.b6.angle = 270;
        _this.b6.alpha= 0; 

        _this.b7 = _this.add.sprite(583,298,'Level72_circleToCover');
        _this.b7.scale.setTo(1.1,1.1);
        _this.b7.anchor.setTo(0.5, 0.5);
        _this.b7.inputEnabled = true;
        _this.b7.input.useHandCursor = true;
        _this.b7.name = "circleToCover";
        _this.b7.angle = 270;

        _this.cX = _this.b1.centerX;
        _this.cY = _this.b1.centerY+20;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2,0xFF0000);
        _this.circle.drawCircle(_this.cX,_this.cY,_this.radius*2);
        _this.circle.alpha = 0;

        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2,0xFF0000);
        _this.circle1.drawCircle(_this.cX,_this.cY,_this.radius1*2);
        _this.circle1.alpha=0;
        _this.b5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
        _this.b6.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.moveSpriteOnCircle(_this.cX,0);
        _this.moveSpriteOnCircle1(_this.cX,0);

        //_this.b3.rotation = this.physics.arcade.angleBetween(b3,b4);
        _this.tickMark = _this.add.sprite(800,240,'Level72_tickMark');
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);

        _this.crocsGroup.add(_this.b1);
        _this.shakeObjectGroup.add(_this.b2);
        _this.crocsGroup.add(_this.b3);
        _this.crocsGroup.add(_this.b4);
        _this.crocsGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.circle);
        _this.shakeObjectGroup.add(_this.circle1);
        _this.crocsGroup.add(_this.b5);
        _this.crocsGroup.add(_this.b6);
        _this.shakeObjectGroup.add(_this.tickMark);

        _this.x = 124;
        _this.y = 285;

        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
        _this.objGroup.getByName("box0").frame = 1;
        _this.objGroup.getByName("box1").frame = 5;
        _this.objGroup.getByName("box2").frame = 6;
        _this.objGroup.getByName("box3").frame = 6;
        if(_this.wrong){
            _this.shakeObjectGroup.x = 1000;
            _this.objGroup.x = 1000;
            _this.crocsGroup.x = 1000;
            _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
            _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            _this.Maintween1 = _this.add.tween(_this.objGroup);
            _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);  
            _this.Maintween2 = _this.add.tween(_this.crocsGroup);
            _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);  
        } 
    },

    onDragUpdate:function() {
        _this.b6.events.onDragStart.add(
            function(target){

                /*  var currentTime = window.timeSaveFunc();
                var interactEvent = 
                    { 
                        id_game_play: _this.savedVar, 
                        id_question: _this.questionid,  
                        date_time_event: _this.currentTime, 
                        event_type: "drag", 
                        res_id: "Level7.2_hourHand", 
                        access_token: window.acctkn 
                    } */

                //absdsjsapi.saveInteractEvent(interactEvent);
                },_this);

        _this.b6.events.onDragStop.add(
            function(target){

                /*  var currentTime = window.timeSaveFunc();
                var interactEvent = 
                    { 
                        id_game_play: _this.savedVar, 
                        id_question: _this.questionid,  
                        date_time_event: _this.currentTime, 
                        event_type: "drop", 
                        res_id: "Level7.2_hourHand", 
                        access_token: window.acctkn 
                    } */
                },_this);
        //absdsjsapi.saveInteractEvent(interactEvent);
        var mouseX = _this.input.x;
        var mouseY = _this.input.y;
        _this.moveSpriteOnCircle(mouseX, mouseY);
        _this.b4.rotation = _this.physics.arcade.angleBetween(_this.b4,_this.b6);
        _this.b6.rotation = _this.physics.arcade.angleBetween(_this.b6,_this.b4);   
        //console.log("Hour "+_this.b4.angle);
        _this.b6.events.onDragStop.removeAll(); 
    },

    onDragUpdate1:function() {

        _this.b5.events.onDragStart.add(
            function(target){

                /*  var currentTime = window.timeSaveFunc();
                var interactEvent = 
                    { 
                        id_game_play: _this.savedVar, 
                        id_question: _this.questionid,  
                        date_time_event: _this.currentTime, 
                        event_type: "drag", 
                        res_id: "Level7.2_minHand", 
                        access_token: window.acctkn 
                    } 

                //absdsjsapi.saveInteractEvent(interactEvent);*/
                },_this);

        _this.b5.events.onDragStop.add(
            function(target){

                /*  var currentTime = window.timeSaveFunc();
                var interactEvent = 
                    { 
                        id_game_play: _this.savedVar, 
                        id_question: _this.questionid,  
                        date_time_event: _this.currentTime, 
                        event_type: "drop", 
                        res_id: "Level7.2_minHand",  
                        access_token: window.acctkn 
                    } */

                //absdsjsapi.saveInteractEvent(interactEvent);
                },_this);

        var mouseX = _this.input.x;
        var mouseY = _this.input.y;
        this.moveSpriteOnCircle1(mouseX, mouseY)

        _this.b3.rotation = _this.physics.arcade.angleBetween(_this.b5,_this.b3);
        _this.b5.rotation = _this.physics.arcade.angleBetween(_this.b5,_this.b3);
        //console.log("Min :"+_this.b5.angle);
        _this.b5.events.onDragStop.removeAll(); 
    },

    moveSpriteOnCircle:function(x,y) {

        _this.theta = Math.atan2(x-_this.cX, y-_this.cY)

        var newX = Math.sin(_this.theta) * _this.radius;
        var newY = Math.cos(_this.theta) * _this.radius;

        _this.b6.x=_this.cX + newX;
        _this.b6.y=_this.cY + newY;

    }, 

    moveSpriteOnCircle1:function(x,y) {

        _this.theta = Math.atan2(x-_this.cX, y-_this.cY)

        var newX = Math.sin(_this.theta) * _this.radius1;
        var newY = Math.cos(_this.theta) * _this.radius1;

        _this.b5.x=_this.cX + newX;
        _this.b5.y=_this.cY + newY;
    },

    toCheckangle :function (target){

        _this.noofAttempts++;
        /*var currentTime = window.timeSaveFunc();
        var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "Level7.2_TickButton", 
                access_token: window.acctkn 
            } */

        //absdsjsapi.saveInteractEvent(interactEvent);

        target.events.onInputDown.removeAll();
        //console.log("Tick");
        //console.log(_this.b3.angle);
        //console.log(_this.b4.angle);
        _this.tickMark.frame=1;
        if(_this.questionNo ==7){
            if((_this.b3.angle>75 && _this.b3.angle<105)&&(_this.b4.angle>-180 && _this.b4.angle<-165 || _this.b4.angle>165 && _this.b4.angle<180))
            {
                //console.log("owow");
                _this.correctAns();
            }
            else
                _this.wrongAns();
        } 
        if(_this.questionNo ==8){
            if((_this.b3.angle>-107 && _this.b3.angle<-73)&&(_this.b4.angle>-110 && _this.b4.angle<-75 ))//|| _this.b4.angle>175 && _this.b4.angle<180))
            {
                //console.log("owow");
                _this.correctAns();
            }
            else
                _this.wrongAns();
        }
        if(_this.questionNo ==9){
            if((_this.b4.angle>102 && _this.b4.angle<134)&&(_this.b3.angle>-180 && _this.b3.angle<-165 || _this.b3.angle>165 && _this.b3.angle<180))
            {
                //console.log("owow");
                _this.correctAns();
            }
            else
                _this.wrongAns();
        }  
        if(_this.questionNo ==10){
            if((_this.b4.angle>13 && _this.b4.angle<44)&&(_this.b3.angle>-18 && _this.b3.angle<-0 || _this.b3.angle>0 && _this.b3.angle<15))
            {
                //console.log("owow");
                _this.correctAns();
            }
            else
                _this.wrongAns();
        } 
        if(_this.questionNo ==11){
            if((_this.b4.angle>44 && _this.b4.angle<78)&&(_this.b3.angle>-47 && _this.b3.angle<-12 ))//|| _this.b3.angle>0 && _this.b3.angle<10))
            {
                //console.log("owow");
                _this.correctAns();
            }
            else
                _this.wrongAns();
        } if(_this.questionNo ==12){
            if((_this.b4.angle>13 && _this.b4.angle<46)&&(_this.b3.angle>40 && _this.b3.angle<75 ))
            {
                //console.log("owow");
                _this.correctAns();
            }
            else
                _this.wrongAns();
        } 
    },

    addNumberPad:function(){

        _this.numGroup = this.add.group();
        //_this.objGroup = this.add.group();
        _this.x = 230;
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,500,'numbg');  
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.name = i;

            _this.numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Alte Haas Grotesk';
            _this.numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#C21626';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);

            _this.numbg.addChild(_this.numTxt);

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);

            _this.x+=50;
        }

        //  _this.wrongbtn.events.onInputDown.add(function(){ClickSound.play();enterTxt.setText("");_this.selectedAns="";},this);
        _this.tickMark = _this.add.sprite(800,230,'Level72_tickMark');
        _this.tickMark.inputEnabled = true; 
        _this.tickMark.input.useHandCursor = true; 
        _this.tickMark.events.onInputDown.add(function(target){
            target.events.onInputDown.removeAll();
            /* var currentTime = window.timeSaveFunc();
            var interactEvent = 
                { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,  
                    date_time_event: _this.currentTime, 
                    event_type: "Click", 
                    res_id: "Level7.2_TickButton", 
                    access_token: window.acctkn 
                } */

            //absdsjsapi.saveInteractEvent(interactEvent);


            //console.log("1"+_this.objGroup.getByName("box0").frameName);
            //console.log("2"+_this.objGroup.getByName("box1").frameName);
            _this.selectedAns+=_this.objGroup.getByName("box0").frameName
            _this.selectedAns+=_this.objGroup.getByName("box1").frameName
            _this.selectedAns+=_this.objGroup.getByName("box2").frameName
            _this.selectedAns+=_this.objGroup.getByName("box3").frameName
            _this.stopVoice();
            //            _this.speakerbtn.inputEnabled=false;
            _this.tickMark.frame = 1;

            commonNavBar.playClickSound();

            //if(_this.selectedAns==_this.rightAns||_this.selectedAns=="0"+_this.rightAns||_this.selectedAns=="00"+_this.rightAns)  
            if(_this.selectedAns==_this.rightAns||_this.selectedAns==_this.rightAns1||_this.selectedAns==_this.rightAns2||_this.selectedAns==_this.rightAns3||_this.selectedAns==_this.rightAns4)  
            {
                telInitializer2.gameCorrectAns();
                commonNavBar.chimeSound();
                //console.log("correct");
                target.events.onInputDown.removeAll();
                /*_this.objGroup.getByName('tape15cm').frame = 1;
                    _this.objGroup.getByName('tape15cm').frameName = _this.rightAns;*/
                //mainSprite.frame = 1;
                //console.log("wrong");
                _this.noofAttempts++;
                if(_this.timer)
                {
                    _this.timer.stop();
                    _this.timer = null;
                }
                /*_this.currentTime = window.timeSaveFunc();
                var saveAsment = 
                    { 
                        id_game_play: _this.savedVar,
                        id_question: _this.questionid,   
                        pass: "Yes",
                        time2answer: _this.AnsTimerCount,
                        attempts: _this.noofAttempts,
                        date_time_submission: _this.currentTime, 
                        access_token: window.acctkn 
                    }*/

                // absdsjsapi.saveAssessment(saveAsment);

                //                telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

                commonNavBar.buzzSound();

                //var anim = equation.animations.add('equation');
                //anim.play(1);
                this.time.events.add(500, function(){

                    commonNavBar.playCelebrationSound();
					_this.Stararr.push(3);
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                    // //console.log(starAnim);
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
                    _this.anim4.play();
                    //anim.onComplete.add(function(){this.removeEverthing();},this);
                    // this.time.events.add(3000, function(){this.removeEverthing();},this);
                    //                    _this.count1++;
                    //equation.frame = eqnum+1;
                    // txtbox.frame = 1;
                    /*  _this.tween = this.add.tween(equation.scale);
                    _this.tween.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);*/
                    _this.b2.frame = 1;
                    _this.tween1 = this.add.tween(_this.b2.scale);
                    _this.tween1.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                    _this.tween2 = this.add.tween(_this.objGroup.getByName("box0").scale);
                    _this.tween2.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                    _this.tween3 = this.add.tween(_this.objGroup.getByName("box1").scale);
                    _this.tween3.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                    _this.tween4 = this.add.tween(_this.objGroup.getByName("box2").scale);
                    _this.tween4.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                    _this.tween5 = this.add.tween(_this.objGroup.getByName("box3").scale);
                    _this.tween5.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                    _this.tween1.onComplete.add(function(){

                        // equation.frame = eqnum;
                        //txtbox.frame = 0;

                        /*_this.tween1 = this.add.tween(equation.scale);
                        tween1.to({ x:1 , y:1}, 300, 'Linear', true, 0);*/

                        _this.tween2 = this.add.tween(_this.b2.scale);
                        _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween1 = this.add.tween(_this.objGroup.getByName("box0").scale);
                        _this.tween1.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween3 = this.add.tween(_this.objGroup.getByName("box1").scale);
                        _this.tween3.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween4 = this.add.tween(_this.objGroup.getByName("box2").scale);
                        _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween5 = this.add.tween(_this.objGroup.getByName("box3").scale);
                        _this.tween5.to({ x:1 , y:1}, 300, 'Linear', true, 0);

                        _this.tween2.onComplete.add(function(){
                            _this.tween1 = this.add.tween(_this.b2.scale);
                            _this.tween1.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                            _this.tween2 = this.add.tween(_this.objGroup.getByName("box0").scale);
                            _this.tween2.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0); 
                            _this.tween3 = this.add.tween(_this.objGroup.getByName("box1").scale);
                            _this.tween3.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                            _this.tween4 = this.add.tween(_this.objGroup.getByName("box2").scale);
                            _this.tween4.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                            _this.tween5 = this.add.tween(_this.objGroup.getByName("box3").scale);
                            _this.tween5.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                            _this.tween1.onComplete.add(function(){
                                _this.tween2 = this.add.tween(_this.b2.scale);
                                _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                                _this.tween1 = this.add.tween(_this.objGroup.getByName("box0").scale);
                                _this.tween1.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                                _this.tween5 = this.add.tween(_this.objGroup.getByName("box1").scale);
                                _this.tween5.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                                _this.tween3 = this.add.tween(_this.objGroup.getByName("box2").scale);
                                _this.tween3.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                                _this.tween4 = this.add.tween(_this.objGroup.getByName("box3").scale);
                                _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                            },_this);
                        },_this);
                    },_this);
                },_this);
                _this.time.events.add(2000, function(){_this.removeEverthing();},_this);
            }
            else
            {
                telInitializer2.gameWrongAns();
                _this.noofAttempts++;
                _this.selectedAns = "";
                // enterTxt.setText("");
                _this.shake.shake(10, _this.objGroup);
                commonNavBar.playWrongCelebrationSound();
                
                _this.Stararr.push(1);
                _this.starsGroup.getChildAt(_this.count1).frame = 1;
                
                _this.time.events.add(2000, function(){
                    _this.backToOriginalPosition();
                    _this.removeEverthing();
                },_this);

            }
        },_this);
    },

    numClicked:function(target){
        //console.log(target.name);
        //console.log("l " +_this.selectedAns.length);
        //console.log("ll " +_this.objGroup.children.length);

        _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag(true);

        /*var currentTime = window.timeSaveFunc();
        var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drag", 
                res_id: "Level7.2_"+target.name, 
                access_token: window.acctkn 
            } */

        //absdsjsapi.saveInteractEvent(interactEvent);

        //target.frame = 1;
        commonNavBar.playClickSound();

        target.events.onDragStop.add(
            function(target){

                /*  var currentTime = window.timeSaveFunc();
                var interactEvent = 
                    { 
                        id_game_play: _this.savedVar, 
                        id_question: _this.questionid,  
                        date_time_event: _this.currentTime, 
                        event_type: "drop", 
                        res_id: "Level7.2_"+target.name, 
                        access_token: window.acctkn 
                    } */


                for(var i=0;i<4;i++)
                {

                    if(_this.checkOverlap(target,_this.objGroup.getByName("box0")))
                    {

                        _this.objGroup.getByName("box0").frame = target.name+1;
                        break;
                    }

                    if(_this.checkOverlap(target,_this.objGroup.getByName("box1")))
                    {

                        _this.objGroup.getByName("box1").frame = target.name+1;
                        break;
                    }

                    if(_this.checkOverlap(target,_this.objGroup.getByName("box2")))
                    {
                        _this.objGroup.getByName("box2").frame = target.name+1;
                        break;
                    }

                    if(_this.checkOverlap(target,_this.objGroup.getByName("box3")))
                    {
                        _this.objGroup.getByName("box3").frame = target.name+1;
                        break;
                    }
                }
                target.events.onDragStop.removeAll(); 
                target.x = _this.vx;   
                target.y = _this.vy;

            },_this);
    },

    checkOverlap:function(spriteA, spriteB) 
    {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },

    removeEverthing:function() 
    {
        _this.timer1.stop();
        //  gameBoxGroup.destroy();
        //  _this.crocsGroup.destroy();
        //  _this.objGroup.destroy();
        _this.no1++;
        _this.MaintweenDestroy = this.add.tween(_this.shakeObjectGroup);
        _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);

        _this.MaintweenDestroy1 = this.add.tween(_this.objGroup);
        _this.MaintweenDestroy1.to({ x: -1000}, 0, 'Linear', true, 0);

        _this.MaintweenDestroy2 = this.add.tween(_this.crocsGroup);
        _this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);
        
        if(_this.questionNo<=6){
            _this.MaintweenDestroy2 = this.add.tween(_this.numGroup);
            _this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);
        }        
        
        if(_this.no1 < 5)
        {
            _this.sceneCount++;
            _this.wrong = true;
        
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                _this.shakeObjectGroup.destroy();
                _this.objGroup.destroy();
                _this.crocsGroup.destroy();
                _this.countIncrement = 0;
                _this.selectedAns='';

                _this.getQuestion();

                _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
                _this.count1++;

            },_this);

        }
        else
        {
            _this.timer1.stop();
            _this.timer1 = null;
            // ////console.log("gameover");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.selectedAns = '';
                _this.countIncrement = 0;
                _this.stopVoice();
                _this.stopVoice();
                commonNavBar.stopTimer();
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
             },_this);
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

        this.generateStarsForScoreScene(this,9);
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

        _this.state.start('measurement3',true,false);
        
    },

    generateStarsForScoreScene:function(game,count)
    {
        //console.log("star");
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
        console.log(this.scoreSceneScore);
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

        this.time.events.add(3500, function()
                             { 
            commonNavBar.soundVar=null,
                commonNavBar.questionArray=null,
                commonNavBar.questionCount=null,
                commonNavBar.soundUrl=null,
                commonNavBar.hint1=true,
                commonNavBar.hint2=true,
                commonNavBar.hint3=true,
                commonNavBar.speakerbtn=null;
				this.backgroundtransp.visible=false; //Remove BackGround Opacity
            _this.state.start('time_MTG_3_3level1',true,false);
        }, this);
    },
    
    backToOriginalPosition:function(){
        _this.tickMark.frame = 0;
       
        _this.objGroup.getByName("box0").frame = 0;
        _this.objGroup.getByName("box1").frame = 0;
        _this.objGroup.getByName("box2").frame = 0;
        _this.objGroup.getByName("box3").frame = 0;
        _this.selectedAns = "";
        _this.countIncrement = 0;
    },

    correctAns:function(target)
    {
        telInitializer2.gameCorrectAns();
        _this.noofAttempts++;
        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        /*_this.currentTime = window.timeSaveFunc();
        var saveAsment = 
            { 
                id_game_play: _this.savedVar,
                id_question: _this.questionid,   
                pass: "Yes",
                time2answer: _this.AnsTimerCount,
                attempts: _this.noofAttempts,
                date_time_submission: _this.currentTime, 
                access_token: window.acctkn 
            }*/

        //   absdsjsapi.saveAssessment(saveAsment);

//        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

        //////console.log("correct");
        _this.stopVoice();
//        _this.speakerbtn.inputEnabled=false;

        /* _this.chime = _this.add.audio('buzzSound');
                    _this.chime.play();*/
//        _this.sound = _this.add.audio('click');
//        _this.sound.play();
        
        commonNavBar.playClickSound();
        
        commonNavBar.chimeSound();

        _this.time.events.add(300, function(){

            commonNavBar.playCelebrationSound();
			_this.Stararr.push(3);
            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            // //console.log(starAnim);
            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');

            _this.anim4.play();
//            _this.count1++;
            _this.b1.frame = 1;
            _this.b3.frame = 1;
            _this.b4.frame = 1;
            _this.tween1 = this.add.tween(_this.b1.scale);
            _this.tween1.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
            _this.tween2 = this.add.tween(_this.b3.scale);
            _this.tween2.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0); 
            _this.tween3 = this.add.tween(_this.b4.scale);
            _this.tween3.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0); 
            _this.tween4 = this.add.tween(_this.b7.scale);
            _this.tween4.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
            _this.tween2.onComplete.add(function(){

                _this.tween1 = this.add.tween(_this.b3.scale);
                _this.tween1.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                _this.tween2 = this.add.tween(_this.b1.scale);
                _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                _this.tween3 = this.add.tween(_this.b4.scale);
                _this.tween3.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                _this.tween4 = this.add.tween(_this.b7.scale);
                _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                _this.tween2.onComplete.add(function(){
                    _this.tween1 = this.add.tween(_this.b1.scale);
                    _this.tween1.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                    _this.tween2 = this.add.tween(_this.b3.scale);
                    _this.tween2.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                    _this.tween3 = this.add.tween(_this.b4.scale);
                    _this.tween3.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                    _this.tween4 = this.add.tween(_this.b7.scale);
                    _this.tween4.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                    _this.tween1.onComplete.add(function(){
                        _this.tween1 = this.add.tween(_this.b3.scale);
                        _this.tween1.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                        _this.tween2 = this.add.tween(_this.b1.scale);
                        _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween3 = this.add.tween(_this.b4.scale);
                        _this.tween3.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                        _this.tween4 = this.add.tween(_this.b7.scale);
                        _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                    },_this);
                },_this);
            },_this);
        },_this);
        _this.time.events.add(2000, function(){_this.removeEverthing();},_this);
    },

    wrongAns:function(target)
    {
        // ////console.log("_this.wrong");
        telInitializer2.gameWrongAns();
        _this.wrong = false;
        //scoretext.setText(selctedLang.score+' : '+score);
        // ////console.log(target);
        //target.tint = 0xA9A9A9;

        _this.shake.shake(10, _this.crocsGroup);
        commonNavBar.playWrongCelebrationSound();

        _this.Stararr.push(1);
        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        
        _this.time.events.add(1000, function(){
            _this.crocsGroup.destroy();
            _this.objGroup.destroy();
            _this.shakeObjectGroup.destroy();
            _this.timer1.stop();
//            _this.getQuestion();
            _this.removeEverthing();
        },_this);
        
    },

    update:function(){

    },

    getVoice:function(){
        this.stopVoice();

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(_this.temp)
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:if(window.languageSelected=="English"){
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/English/7.2_2.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/7.2/English/7.2_2.mp3";
                    }
                    else if(window.languageSelected=="Hindi"){
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Hindi/7.2_2.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/7.2/Hindi/7.2_2.mp3";
                    }

                    else if(window.languageSelected=="Kannada"){
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Kannada/7.2_2.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/7.2/Kannada/7.2_2.mp3";
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/7.2/7.2_2.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/7.2/7.2_2.mp3";
                    }
					else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Marathi/7.2_2.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/7.2/Marathi/7.2_2.mp3";
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Telugu/7.2_2.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/7.2/Telugu/7.2_2.mp3";
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Tamil/7.2_2.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/7.2/Tamil/7.2_2.mp3";
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Urdu/7.2_2.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/7.2/Urdu/7.2_2.mp3";
                      } 
                    else
                    {
                        this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Odiya/7.2_2.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/7.2/Odiya/7.2_2.mp3";
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                break;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:if(window.languageSelected=="English"){
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/English/7.2_3.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/7.2/English/7.2_3.mp3";
                    }
                    else if(window.languageSelected=="Hindi"){
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Hindi/7.2_3.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/7.2/Hindi/7.2_3.mp3";
                    }
                    else if(window.languageSelected=="Kannada"){
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Kannada/7.2_3.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/7.2/Kannada/7.2_3.mp3";
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/7.2/7.2_3.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/7.2/7.2_3.mp3";
                    }
					else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Marathi/7.2_3.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/7.2/Marathi/7.2_3.mp3";
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Telugu/7.2_3.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/7.2/Telugu/7.2_3.mp3";
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Tamil/7.2_3.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/7.2/Tamil/7.2_3.mp3";
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Urdu/7.2_3.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/7.2/Urdu/7.2_3.mp3";
                      } 
                    else
                    {
                        _this.src.setAttribute("src", "sounds/7.3_3.mp3");
                        _this.soundurl =  "sounds/7.3_3.mp3";
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                break;
        }
        commonNavBar.addNavBar(this,_this.soundurl,"measurement3");
        commonNavBar.getVoice(_this.soundurl);
        
        
        //_this.playQuestionSound.appendChild(_this.src);
        //_this.playQuestionSound.play();
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

    stopVoice:function(){
        if(_this.playQuestionSound)
        {
            if(_this.playQuestionSound.contains(_this.src))
            {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if(!_this.playQuestionSound.paused)
            {
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
//        _this.clockTick.stop();
        _this.stopVoice();

        window.score = this.score;
        localStorage.setItem(window.avatarName+"Score", window.score);

        if(this.playedwithHint&&this.completelyplayed)
        {
             telInitializer2.syncToServer();
            localStorage.setItem(window.avatarName+"time_MTG_3_3state", "playedwithhint");
            localStorage.setItem(window.avatarName+"measurementPlayed", "played");
        }
        else if(!this.playedwithHint&&this.completelyplayed)
        {
             telInitializer2.syncToServer();
            localStorage.setItem(window.avatarName+"time_MTG_3_3state", "fullycomplete");
            localStorage.setItem(window.avatarName+"measurementPlayed", "played");
        }
    }

};