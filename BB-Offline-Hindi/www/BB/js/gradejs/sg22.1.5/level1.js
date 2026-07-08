Game.sg22_1_5level1=function(){};

Game.sg22_1_5level1.prototype={
    init:function(game)
    {
        _this = this;

        telInitializer.gameIdInit("SG22_1_5",gradeSelected);
        
       

    },

    preload:function(game){
  if(!window.grade5SG4){

            window.grade5SG4 = true;

            var preloadGrp = _this.add.group();
            _this.preloadBarOutline = _this.add.sprite(_this.world.centerX,_this.world.centerY,'prgressbarOutLine');
            //_this.preloadBarOutline.anchor.setTo(0.5,0.5);
            _this.preloadBars = _this.add.sprite(_this.world.centerX,_this.world.centerY,'preloadBar');

            //_this.preloadBar.anchor.setTo(0.5,0.5);
            _this.time.advanceTiming=true;
            _this.load.setPreloadSprite(_this.preloadBars);

            preloadGrp.add(_this.preloadBarOutline);
            preloadGrp.add(_this.preloadBars);

            preloadGrp.x -= 105;

            //GAME ASSETS         

            this.load.image('SG22_1_5clock',window.baseUrl+'assets/gradeAssets/sg22.1.5/clock.png');
        this.load.image('SG22_1_5anticlock',window.baseUrl+'assets/gradeAssets/sg22.1.5/anticlock.png');
        this.load.image('SG22_1_5bottombar',window.baseUrl+'assets/gradeAssets/sg22.1.5/bottombar.png');
        this.load.image('SG22_1_5box',window.baseUrl+'assets/gradeAssets/sg22.1.5/box.png');
        this.load.atlas('SG22_1_5ansbox',window.baseUrl+'assets/gradeAssets/sg22.1.5/ansbox.png',window.baseUrl+'json/gradeJson/sg22.1.5/ansbox.json');
        this.load.atlas('SG22_1_5erase',window.baseUrl+'assets/gradeAssets/sg22.1.5/erase.png',window.baseUrl+'json/gradeJson/sg22.1.5/erase.json');
        this.load.atlas('SG22_1_5rightmark',window.baseUrl+'assets/gradeAssets/sg22.1.5/rightmark.png',window.baseUrl+'json/gradeJson/sg22.1.5/rightmark.json');
        this.load.atlas('SG22_1_5numberpad',window.baseUrl+'assets/gradeAssets/sg22.1.5/numberpad.png',window.baseUrl+'json/gradeJson/sg22.1.5/numberpad.json');
        
        this.load.atlas('SG22_1_5shape1',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape1.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape1.json');
        this.load.atlas('SG22_1_5shape1Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape1Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape1Anim.json');
        this.load.atlas('SG22_1_5shape2',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape2.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape2.json');
        this.load.atlas('SG22_1_5shape2Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape2Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape2Anim.json');
        this.load.atlas('SG22_1_5shape3',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape3.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape3.json');
        this.load.atlas('SG22_1_5shape3Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape3Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape3Anim.json');
        this.load.atlas('SG22_1_5shape4',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape4.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape4.json');
        this.load.atlas('SG22_1_5shape4Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape4Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape4Anim.json');
        this.load.atlas('SG22_1_5shape5',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape5.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape5.json');
        this.load.atlas('SG22_1_5shape5Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape5Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape5Anim.json');
        this.load.atlas('SG22_1_5shape6',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape6.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape6.json');
        this.load.atlas('SG22_1_5shape6Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape6Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape6Anim.json');
        this.load.atlas('SG22_1_5shape7',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape7.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape7.json');
        this.load.atlas('SG22_1_5shape7Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape7Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape7Anim.json');
        this.load.atlas('SG22_1_5shape8',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape8.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape8.json');
        this.load.atlas('SG22_1_5shape8Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape8Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape8Anim.json');
        this.load.atlas('SG22_1_5shape9',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape9.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape9.json');
        this.load.atlas('SG22_1_5shape9Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape9Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape9Anim.json');
        this.load.atlas('SG22_1_5shape10',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape10.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape10.json');
        this.load.atlas('SG22_1_5shape10Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape10Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape10Anim.json');
        this.load.atlas('SG22_1_5shape11',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape11.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape11.json');
        this.load.atlas('SG22_1_5shape11Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape11Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape11Anim.json');
        this.load.atlas('SG22_1_5shape12',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape12.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape12.json');
        this.load.atlas('SG22_1_5shape12Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape12Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape12Anim.json');
        this.load.atlas('SG22_1_5shape13',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape13.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape13.json');
        this.load.atlas('SG22_1_5shape13Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/shape13Anim.png',window.baseUrl+'json/gradeJson/sg22.1.5/shape13Anim.json');
        
        //Final Glow Shapes
        this.load.atlas('SG22_1_5Glowshape1',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape1.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape1.json');
        this.load.atlas('SG22_1_5Glowshape2',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape2.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape2.json');
        this.load.atlas('SG22_1_5Glowshape3',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape3.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape3.json');
        this.load.atlas('SG22_1_5Glowshape4',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape4.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape4.json');
        this.load.atlas('SG22_1_5Glowshape5',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape5.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape5.json');
        this.load.atlas('SG22_1_5Glowshape6',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape6.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape6.json');
        this.load.atlas('SG22_1_5Glowshape7',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape7.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape7.json');
        this.load.atlas('SG22_1_5Glowshape8',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape8.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape8.json');
        this.load.atlas('SG22_1_5Glowshape9',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape9.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape9.json');
        this.load.atlas('SG22_1_5Glowshape10',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape10.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape10.json');
        this.load.atlas('SG22_1_5Glowshape11',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape11.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape11.json');
        this.load.atlas('SG22_1_5Glowshape12',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape12.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape12.json');
        this.load.atlas('SG22_1_5Glowshape13',window.baseUrl+'assets/gradeAssets/sg22.1.5/finalShape13.png',window.baseUrl+'json/gradeJson/sg22.1.5/finalShape13.json');
        
        //Anti-ClockWise Assets
        this.load.atlas('SG22_1_5_AntiCW_shape1Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/1.png',window.baseUrl+'json/gradeJson/sg22.1.5/1.json');
        this.load.atlas('SG22_1_5_AntiCW_shape2Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/2.png',window.baseUrl+'json/gradeJson/sg22.1.5/2.json');
        this.load.atlas('SG22_1_5_AntiCW_shape3Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/3.png',window.baseUrl+'json/gradeJson/sg22.1.5/3.json');
        this.load.atlas('SG22_1_5_AntiCW_shape4Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/4.png',window.baseUrl+'json/gradeJson/sg22.1.5/4.json');
        this.load.atlas('SG22_1_5_AntiCW_shape5Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/5.png',window.baseUrl+'json/gradeJson/sg22.1.5/5.json');
        this.load.atlas('SG22_1_5_AntiCW_shape6Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/6.png',window.baseUrl+'json/gradeJson/sg22.1.5/6.json');
        this.load.atlas('SG22_1_5_AntiCW_shape7Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/7.png',window.baseUrl+'json/gradeJson/sg22.1.5/7.json');
        this.load.atlas('SG22_1_5_AntiCW_shape8Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/8.png',window.baseUrl+'json/gradeJson/sg22.1.5/8.json');
        this.load.atlas('SG22_1_5_AntiCW_shape9Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/9.png',window.baseUrl+'json/gradeJson/sg22.1.5/9.json');
        this.load.atlas('SG22_1_5_AntiCW_shape10Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/10.png',window.baseUrl+'json/gradeJson/sg22.1.5/10.json');
        this.load.atlas('SG22_1_5_AntiCW_shape11Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/11.png',window.baseUrl+'json/gradeJson/sg22.1.5/11.json');
        this.load.atlas('SG22_1_5_AntiCW_shape12Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/12.png',window.baseUrl+'json/gradeJson/sg22.1.5/12.json');
        this.load.atlas('SG22_1_5_AntiCW_shape13Anim',window.baseUrl+'assets/gradeAssets/sg22.1.5/13.png',window.baseUrl+'json/gradeJson/sg22.1.5/13.json');
       }

    },

    create:function(game)
    {

        _this.amplify = null;
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;   
        _this.sceneCount=0;
        _this.wrong = true;
        _this.qArrays;
        _this.speaker;
        _this.celebration;
        _this.timerDisplay;
        _this.rightmark;
        _this.background;
        _this.click3;
        _this.anim4;
        _this.wmusic;
        _this.clickSound;
        _this.starsGroup;
        _this.snapsound;
        _this.questioNo = 0;
        _this.toCheckNumberPad = false;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
        _this.sceneCount = 0;
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;

        _this.temp=0;
        _this.temp1=0;
        _this.incr=0;

        _this.count1=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.correct=0;
        _this.celebration= false;
        _this.enterTxt = null;
        _this.selectedAns = "";

        _this.qArrays = new Array();

        _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
        _this.qArrays = _this.shuffle(_this.qArrays);

        _this.wrongAnswer = false;

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'commonBg2');

        _this.topbar=_this.add.sprite(0,0,'Level42C_Topbar');
//        _this.topbar.scale.setTo(1,1.1);

        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade1levelSelectionScreen',true,false);
            console.log("here");
        },_this);

        _this.speaker = _this.add.button(610,5,'grade11_speaker',function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();
        },_this);

        _this.timebg=_this.add.sprite(game.world.centerX-150,6,'Level42C_timer');
//        _this.timebg.scale.setTo(1.2,1);

        _this.timeDisplay = _this.add.text(game.world.centerX-124,22,_this.minutes + ':' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'myfont';
//        _this.timeDisplay.fontWeight = 'normal';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);
        _this.getQuestion();  
        
        _this.getVoice();

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

    shuffle: function(array) 
    {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        {
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
        if(!_this.timer)
        {
            _this.timer = _this.time.create(false);

            _this.timer.loop(1000, function(){
                _this.AnsTimerCount++;
            }, this);
           
            _this.timer.start();
        }

        /**************************************************************************/ 

        if(!_this.timer1)
        {
            _this.timer1 = _this.time.create(false);
            _this.timer1.loop(1000, function(){
                _this.updateTimer();
            }, _this);
            _this.timer1.start();
        }

        _this.speaker.inputEnabled=true;
        _this.speaker.input.useHandCursor = true;
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

    },

    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {
            _this.starsGroup.create(_this.world.centerX, 10, 'starAnim1');
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=12;
                    _this.starsGroup.getChildAt(i).x+=12;
                }
            }
        } 
        _this.starsGroup.getChildAt(0).frame = 2;
    },

    loadobject:function()
    {

        _this.box1 = _this.add.sprite(40,100,'SG22_1_5box');

        _this.box2 = _this.add.sprite(420,100,'SG22_1_5box');

        _this.clock = _this.add.sprite(50,110,'SG22_1_5clock');
        _this.clock.name="clock"; 
        _this.clock.inputEnabled = true;
        _this.clock.input.useHandCursor = true;

        _this.anticlock = _this.add.sprite(50,180,'SG22_1_5anticlock');
        _this.anticlock.name="anticlock"; 
        _this.anticlock.inputEnabled = true;
        _this.anticlock.input.useHandCursor = true;

        _this.txtbox = _this.add.sprite(880,280,'SG22_1_5ansbox');
        _this.txtbox.anchor.setTo(0.5);
        _this.txtbox.scale.setTo(1.5,1.5);
//        _this.txtbox.inputEnabled = true;
//        _this.txtbox.input.useHandCursor = true;
//        _this.txtbox.events.onInputDown.add(function(target)
//                                            {
//            if(_this.toCheckNumberPad == false)
//            {
//                _this.toCheckNumberPad =true;
//                _this.addNumberPad();
//            }
//        },_this); 

    },

    gotoFirstQuestion:function(){

        _this.questioNo = 1;

        _this.loadobject();

        _this.slideGrp = _this.add.group();

        _this.CW_shape3 = _this.add.sprite(307,370,'SG22_1_5shape5Anim');
        _this.CW_shape3.angle=180;
        _this.CW_shape3.visible=false;

        _this.AntiCW_shape3 = _this.add.sprite(307,370,'SG22_1_5_AntiCW_shape5Anim');
        _this.AntiCW_shape3.angle=180;
        _this.AntiCW_shape3.visible=false;

        _this.shape1 = _this.add.sprite(120,185,'SG22_1_5shape5');
        _this.shape1.frame=4;

        _this.shape2 = _this.add.sprite(500,185,'SG22_1_5shape5');

        _this.GlowShape = _this.add.sprite(125,211,'SG22_1_5Glowshape5');
        _this.GlowShape.visible=false;

        _this.slideGrp.add(_this.box1);
        _this.slideGrp.add(_this.box2);
        _this.slideGrp.add(_this.clock);
        _this.slideGrp.add(_this.anticlock);
        _this.slideGrp.add(_this.txtbox);
        _this.slideGrp.add(_this.CW_shape3);
        _this.slideGrp.add(_this.AntiCW_shape3);
        _this.slideGrp.add(_this.shape1);
        _this.slideGrp.add(_this.shape2);
        _this.slideGrp.add(_this.GlowShape);

        if(_this.wrongAnswer == false){
            _this.slideGrp.x = 1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 1000,'Linear', true, 0);
        }

        _this.clock.events.onInputDown.add(_this.clicked,_this);
        _this.anticlock.events.onInputDown.add(_this.clicked,_this);

        _this.rightAns=4;

    },

    gotoSecondQuestion:function(){

        _this.questioNo = 2;

        _this.loadobject();

        _this.slideGrp = _this.add.group();

        _this.CW_shape3 = _this.add.sprite(301,347,'SG22_1_5shape1Anim');
        _this.CW_shape3.angle=180;
        _this.CW_shape3.visible=false;

        _this.AntiCW_shape3 = _this.add.sprite(301,347,'SG22_1_5_AntiCW_shape1Anim');
        _this.AntiCW_shape3.angle=180;
        _this.AntiCW_shape3.visible=false;

        _this.shape1 = _this.add.sprite(140,185,'SG22_1_5shape1');
        _this.shape1.frame=7;

        _this.shape2 = _this.add.sprite(520,185,'SG22_1_5shape1');

        _this.GlowShape = _this.add.sprite(143,194,'SG22_1_5Glowshape1');
        _this.GlowShape.visible=false;

        _this.slideGrp.add(_this.box1);
        _this.slideGrp.add(_this.box2);
        _this.slideGrp.add(_this.clock);
        _this.slideGrp.add(_this.anticlock);
        _this.slideGrp.add(_this.txtbox);
        _this.slideGrp.add(_this.CW_shape3);
        _this.slideGrp.add(_this.AntiCW_shape3);
        _this.slideGrp.add(_this.shape1);
        _this.slideGrp.add(_this.shape2);
        _this.slideGrp.add(_this.GlowShape);

        if(_this.wrongAnswer == false){
            _this.slideGrp.x = 1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 1000,'Linear', true, 0);
        }

        _this.clock.events.onInputDown.add(_this.clicked,_this);
        _this.anticlock.events.onInputDown.add(_this.clicked,_this);

        _this.rightAns= 7;
        _this.rightAns1= 8;

    },

    gotoThirdQuestion:function(){

        _this.questioNo = 3;

        _this.loadobject();

        _this.slideGrp = _this.add.group();

        _this.CW_shape3 = _this.add.sprite(336,400,'SG22_1_5shape9Anim');
        _this.CW_shape3.angle=180;
        _this.CW_shape3.scale.setTo(0.8,0.8);
        _this.CW_shape3.visible=false;

        _this.AntiCW_shape3 = _this.add.sprite(336,400,'SG22_1_5_AntiCW_shape9Anim');
        _this.AntiCW_shape3.angle=180;
        _this.AntiCW_shape3.scale.setTo(0.8,0.8);
        _this.AntiCW_shape3.visible=false;

        //        _this.shape1 = _this.add.sprite(70,155,'SG22_1_5shape9');
        //        _this.shape1.scale.setTo(0.8,0.8);
        //        _this.shape1.frame=4;

        _this.shape1 = _this.add.sprite(110,165,'SG22_1_5shape9');
        _this.shape1.scale.setTo(0.8,0.8);
        _this.shape1.frame=4;

        _this.shape2 = _this.add.sprite(490,165,'SG22_1_5shape9');
        _this.shape2.scale.setTo(0.8,0.8);

        _this.GlowShape = _this.add.sprite(105,238,'SG22_1_5Glowshape9');
        _this.GlowShape.scale.setTo(0.8,0.8);
        _this.GlowShape.visible=false;

        _this.slideGrp.add(_this.box1);
        _this.slideGrp.add(_this.box2);
        _this.slideGrp.add(_this.clock);
        _this.slideGrp.add(_this.anticlock);
        _this.slideGrp.add(_this.txtbox);
        _this.slideGrp.add(_this.CW_shape3);
        _this.slideGrp.add(_this.AntiCW_shape3);
        _this.slideGrp.add(_this.shape1);
        _this.slideGrp.add(_this.shape2);
        _this.slideGrp.add(_this.GlowShape);

        if(_this.wrongAnswer == false){
            _this.slideGrp.x = 1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 1000,'Linear', true, 0);
        }

        _this.clock.events.onInputDown.add(_this.clicked,_this);
        _this.anticlock.events.onInputDown.add(_this.clicked,_this);

        _this.rightAns= 4;

    },

    gotoFourthQuestion:function(){

        _this.questioNo = 4;

        _this.loadobject();

        _this.slideGrp = _this.add.group();

        _this.CW_shape3 = _this.add.sprite(294,334,'SG22_1_5shape2Anim');
        _this.CW_shape3.angle=180;
        _this.CW_shape3.visible=false;

        _this.AntiCW_shape3 = _this.add.sprite(294,334,'SG22_1_5_AntiCW_shape2Anim');
        _this.AntiCW_shape3.angle=180;
        _this.AntiCW_shape3.visible=false;

        _this.shape1 = _this.add.sprite(150,185,'SG22_1_5shape2');
        _this.shape1.frame=1;

        _this.shape2 = _this.add.sprite(530,185,'SG22_1_5shape2');

        _this.GlowShape = _this.add.sprite(145,180,'SG22_1_5Glowshape2');
        _this.GlowShape.visible=false;

        _this.slideGrp.add(_this.box1);
        _this.slideGrp.add(_this.box2);
        _this.slideGrp.add(_this.clock);
        _this.slideGrp.add(_this.anticlock);
        _this.slideGrp.add(_this.txtbox);
        _this.slideGrp.add(_this.CW_shape3);
        _this.slideGrp.add(_this.AntiCW_shape3);
        _this.slideGrp.add(_this.shape1);
        _this.slideGrp.add(_this.shape2);
        _this.slideGrp.add(_this.GlowShape);

        if(_this.wrongAnswer == false){
            _this.slideGrp.x = 1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 1000,'Linear', true, 0);
        }

        _this.clock.events.onInputDown.add(_this.clicked,_this);
        _this.anticlock.events.onInputDown.add(_this.clicked,_this);

        _this.rightAns= 1;

    },

    gotoFifthQuestion:function(){

        _this.questioNo = 5;

        _this.loadobject();

        _this.slideGrp = _this.add.group();

        _this.CW_shape3 = _this.add.sprite(304,341,'SG22_1_5shape4Anim');
        _this.CW_shape3.angle=180;
        _this.CW_shape3.visible=false;

        _this.AntiCW_shape3 = _this.add.sprite(304,340,'SG22_1_5_AntiCW_shape4Anim');
        _this.AntiCW_shape3.angle=180;
        _this.AntiCW_shape3.visible=false;

        _this.shape1 = _this.add.sprite(145,185,'SG22_1_5shape4');
        _this.shape1.frame=2;

        _this.shape2 = _this.add.sprite(525,185,'SG22_1_5shape4');

        _this.GlowShape = _this.add.sprite(138,187,'SG22_1_5Glowshape4');
        _this.GlowShape.visible=false;

        _this.slideGrp.add(_this.box1);
        _this.slideGrp.add(_this.box2);
        _this.slideGrp.add(_this.clock);
        _this.slideGrp.add(_this.anticlock);
        _this.slideGrp.add(_this.txtbox);
        _this.slideGrp.add(_this.CW_shape3);
        _this.slideGrp.add(_this.AntiCW_shape3);
        _this.slideGrp.add(_this.shape1);
        _this.slideGrp.add(_this.shape2);
        _this.slideGrp.add(_this.GlowShape);

        if(_this.wrongAnswer == false){
            _this.slideGrp.x = 1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 1000,'Linear', true, 0);
        }

        _this.clock.events.onInputDown.add(_this.clicked,_this);
        _this.anticlock.events.onInputDown.add(_this.clicked,_this);

        _this.rightAns= 2;

    },

    gotoSixthQuestion:function(){

        _this.questioNo = 6;

        _this.loadobject();

        _this.slideGrp = _this.add.group();

        _this.CW_shape3 = _this.add.sprite(308,353,'SG22_1_5shape11Anim');
        _this.CW_shape3.angle=180;
        _this.CW_shape3.visible=false;

        _this.AntiCW_shape3 = _this.add.sprite(308,353,'SG22_1_5_AntiCW_shape11Anim');
        _this.AntiCW_shape3.angle=180;
        _this.AntiCW_shape3.visible=false;

        _this.shape1 = _this.add.sprite(140,185,'SG22_1_5shape11');
        _this.shape1.frame=2;

        _this.shape2 = _this.add.sprite(520,185,'SG22_1_5shape11');

        _this.GlowShape = _this.add.sprite(148,180,'SG22_1_5Glowshape11');
        _this.GlowShape.visible=false;

        _this.slideGrp.add(_this.box1);
        _this.slideGrp.add(_this.box2);
        _this.slideGrp.add(_this.clock);
        _this.slideGrp.add(_this.anticlock);
        _this.slideGrp.add(_this.txtbox);
        _this.slideGrp.add(_this.CW_shape3);
        _this.slideGrp.add(_this.AntiCW_shape3);
        _this.slideGrp.add(_this.shape1);
        _this.slideGrp.add(_this.shape2);
        _this.slideGrp.add(_this.GlowShape);

        if(_this.wrongAnswer == false){
            _this.slideGrp.x = 1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 1000,'Linear', true, 0);
        }

        _this.clock.events.onInputDown.add(_this.clicked,_this);
        _this.anticlock.events.onInputDown.add(_this.clicked,_this);

        _this.rightAns= 2;

    },

    gotoSeventhQuestion:function(){

        _this.questioNo = 7;

        _this.loadobject();

        _this.slideGrp = _this.add.group();

        _this.CW_shape3 = _this.add.sprite(303,360,'SG22_1_5shape3Anim');
        _this.CW_shape3.angle=180;
        _this.CW_shape3.visible=false;

        _this.AntiCW_shape3 = _this.add.sprite(303,360,'SG22_1_5_AntiCW_shape3Anim');
        _this.AntiCW_shape3.angle=180;
        _this.AntiCW_shape3.visible=false;

        _this.shape1 = _this.add.sprite(130,185,'SG22_1_5shape3');
        _this.shape1.frame=4;

        _this.shape2 = _this.add.sprite(510,185,'SG22_1_5shape3');

        _this.GlowShape = _this.add.sprite(123,205,'SG22_1_5Glowshape3');
        _this.GlowShape.visible=false;

        _this.slideGrp.add(_this.box1);
        _this.slideGrp.add(_this.box2);
        _this.slideGrp.add(_this.clock);
        _this.slideGrp.add(_this.anticlock);
        _this.slideGrp.add(_this.txtbox);
        _this.slideGrp.add(_this.CW_shape3);
        _this.slideGrp.add(_this.AntiCW_shape3);
        _this.slideGrp.add(_this.shape1);
        _this.slideGrp.add(_this.shape2);
        _this.slideGrp.add(_this.GlowShape);

        if(_this.wrongAnswer == false){
            _this.slideGrp.x = 1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 1000,'Linear', true, 0);
        }

        _this.clock.events.onInputDown.add(_this.clicked,_this);
        _this.anticlock.events.onInputDown.add(_this.clicked,_this);

        _this.rightAns=4;

    },

    gotoEighthQuestion:function(){

        _this.questioNo = 8;

        _this.loadobject();

        _this.slideGrp = _this.add.group();

        _this.CW_shape3 = _this.add.sprite(273,325,'SG22_1_5shape10Anim');
        _this.CW_shape3.angle=180;
        _this.CW_shape3.visible=false;

        _this.AntiCW_shape3 = _this.add.sprite(273,325,'SG22_1_5_AntiCW_shape10Anim');
        _this.AntiCW_shape3.angle=180;
        _this.AntiCW_shape3.visible=false;

        _this.shape1 = _this.add.sprite(150,200,'SG22_1_5shape10');
        _this.shape1.frame=2;

        _this.shape2 = _this.add.sprite(530,200,'SG22_1_5shape10');

        _this.GlowShape = _this.add.sprite(163,194,'SG22_1_5Glowshape10');
        _this.GlowShape.visible=false;

        _this.slideGrp.add(_this.box1);
        _this.slideGrp.add(_this.box2);
        _this.slideGrp.add(_this.clock);
        _this.slideGrp.add(_this.anticlock);
        _this.slideGrp.add(_this.txtbox);
        _this.slideGrp.add(_this.CW_shape3);
        _this.slideGrp.add(_this.AntiCW_shape3);
        _this.slideGrp.add(_this.shape1);
        _this.slideGrp.add(_this.shape2);
        _this.slideGrp.add(_this.GlowShape);

        if(_this.wrongAnswer == false){
            _this.slideGrp.x = 1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 1000,'Linear', true, 0);
        }

        _this.clock.events.onInputDown.add(_this.clicked,_this);
        _this.anticlock.events.onInputDown.add(_this.clicked,_this);

        _this.rightAns= 2;

    },

    gotoNinthQuestion:function(){

        _this.questioNo = 9;

        _this.loadobject();

        _this.slideGrp = _this.add.group();

        _this.CW_shape3 = _this.add.sprite(334,389,'SG22_1_5shape8Anim');
        _this.CW_shape3.angle=180;
        _this.CW_shape3.visible=false;

        _this.AntiCW_shape3 = _this.add.sprite(334,389,'SG22_1_5_AntiCW_shape8Anim');
        _this.AntiCW_shape3.angle=180;
        _this.AntiCW_shape3.visible=false;

        _this.shape1 = _this.add.sprite(110,165,'SG22_1_5shape8');
        _this.shape1.frame=4;

        _this.shape2 = _this.add.sprite(490,165,'SG22_1_5shape8');

        _this.GlowShape = _this.add.sprite(105,248,'SG22_1_5Glowshape8');
        _this.GlowShape.visible=false;

        _this.slideGrp.add(_this.box1);
        _this.slideGrp.add(_this.box2);
        _this.slideGrp.add(_this.clock);
        _this.slideGrp.add(_this.anticlock);
        _this.slideGrp.add(_this.txtbox);
        _this.slideGrp.add(_this.CW_shape3);
        _this.slideGrp.add(_this.AntiCW_shape3);
        _this.slideGrp.add(_this.shape1);
        _this.slideGrp.add(_this.shape2);
        _this.slideGrp.add(_this.GlowShape);

        if(_this.wrongAnswer == false){
            _this.slideGrp.x = 1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 1000,'Linear', true, 0);
        }

        _this.clock.events.onInputDown.add(_this.clicked,_this);
        _this.anticlock.events.onInputDown.add(_this.clicked,_this);

        _this.rightAns=4;

    },

    gotoTenthQuestion:function(){

        _this.questioNo = 10;

        _this.loadobject();

        _this.slideGrp = _this.add.group();

        _this.CW_shape3 = _this.add.sprite(324,367,'SG22_1_5shape13Anim');
        _this.CW_shape3.angle=180;
        _this.CW_shape3.visible=false;

        _this.AntiCW_shape3 = _this.add.sprite(324,367,'SG22_1_5_AntiCW_shape13Anim');
        _this.AntiCW_shape3.angle=180;
        _this.AntiCW_shape3.visible=false;

        _this.shape1 = _this.add.sprite(120,165,'SG22_1_5shape13');
        _this.shape1.frame=4;

        _this.shape2 = _this.add.sprite(500,165,'SG22_1_5shape13');

        _this.GlowShape = _this.add.sprite(145,187,'SG22_1_5Glowshape13');
        _this.GlowShape.visible=false;

        _this.slideGrp.add(_this.box1);
        _this.slideGrp.add(_this.box2);
        _this.slideGrp.add(_this.clock);
        _this.slideGrp.add(_this.anticlock);
        _this.slideGrp.add(_this.txtbox);
        _this.slideGrp.add(_this.CW_shape3);
        _this.slideGrp.add(_this.AntiCW_shape3);
        _this.slideGrp.add(_this.shape1);
        _this.slideGrp.add(_this.shape2);
        _this.slideGrp.add(_this.GlowShape);

        if(_this.wrongAnswer == false){
            _this.slideGrp.x = 1000;
            var tween = _this.add.tween(_this.slideGrp);
            tween.to({ x: 0 }, 1000,'Linear', true, 0);
        }

        _this.clock.events.onInputDown.add(_this.clicked,_this);
        _this.anticlock.events.onInputDown.add(_this.clicked,_this);

        _this.rightAns=4;

    },

    clicked:function(target){

        console.log(target.name);

        //        target.events.onInputDown.removeAll();

        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 

        target.frame=1;

        if(_this.questioNo==1 || _this.questioNo==3 || _this.questioNo==7 || _this.questioNo==9 || _this.questioNo==10 ){

            if(target.name == "clock"){
                if(_this.temp1 == 1 || _this.temp1 == 2 || _this.temp1 == 3 || _this.temp1 == 4){
                    _this.temp = 0;
                }else{
                    _this.CW_shape3.visible=true;
                    _this.temp++;
                }
                
                if(_this.temp1 > 0)
                    _this.temp1--;

                //=========================================
                // To Restrict to only actual final shape
                if(_this.shape1.frame == 0){
                    _this.shape1.frame = 0;
                    _this.clickSound.pause();
                    _this.clock.inputEnabled = false;
                    _this.anticlock.inputEnabled = false;
                }else{
                    _this.shape1.frame++;
                    _this.AntiCW_shape3.frame--;
                }
                //============================================

                if(_this.temp==1)
                {
                    _this.CW_shape3.frame=0;
                }
                if(_this.temp==2)
                {
                    _this.CW_shape3.frame=1;
                }
                if(_this.temp==3)
                {
                    _this.CW_shape3.frame=2;
                }
                if(_this.temp==4)
                {
                    _this.CW_shape3.frame=3;
                    if( _this.toCheckNumberPad == false)
                    {
                        _this.toCheckNumberPad =true;
                        _this.addNumberPad();
                    }
                }

                if(_this.shape1.frame == 4){
                    _this.CW_shape3.visible=false;
                    _this.AntiCW_shape3.visible=false;
                    _this.temp = 0;
                    _this.temp1 = 0;
                }
                //            if(_this.temp == 1 ){
                //                _this.CW_shape3.frame = 0;
                //            }else if( _this.temp <= 4){
                //                _this.CW_shape3.frame++;
                //            }

            }

            if(target.name == "anticlock"){

                if(_this.temp == 1 || _this.temp == 2 || _this.temp == 3 || _this.temp == 4){
                    _this.temp1 = 0;
                }else{
                    _this.AntiCW_shape3.visible=true;
                    _this.temp1++;
                }
                
                if(_this.temp > 0)
                    _this.temp--;

                //=========================================
                // To Restrict to only actual final shape
                if(_this.shape1.frame == 0){
                    _this.shape1.frame = 0;
                    _this.clickSound.pause();
                    _this.clock.inputEnabled = false;
                    _this.anticlock.inputEnabled = false;
                }else{
                    _this.shape1.frame--;
                    _this.CW_shape3.frame--;
                }
                //============================================

                //=========================================
                // To add more frames while anti-clockwise
                //            if(_this.shape1.frame == 0)
                //                _this.incr++;
                //             
                //            if(_this.incr == 2){
                //                _this.shape1.frame = 7;
                //                _this.incr = 0;
                //            }
                //============================================

                if(_this.temp1==1)
                {
                    _this.AntiCW_shape3.frame=0;
                }
                if(_this.temp1==2)
                {
                    _this.AntiCW_shape3.frame=1;
                }
                if(_this.temp1==3)
                {
                    _this.AntiCW_shape3.frame=2;
                }
                if(_this.temp1==4)
                {
                    _this.AntiCW_shape3.frame=3;
                    if( _this.toCheckNumberPad == false)
                    {
                        _this.toCheckNumberPad =true;
                        _this.addNumberPad();
                    }
                }

                if(_this.shape1.frame == 4){
                    _this.CW_shape3.visible=false;
                    _this.AntiCW_shape3.visible=false;
                    _this.temp = 0;
                    _this.temp1 = 0;
                }

                //            if(_this.temp1 == 1){
                //                _this.AntiCW_shape3.frame = 0;
                //            }else if( _this.temp1 <= 4){
                //                _this.AntiCW_shape3.frame++;
                //            }
            }
        }

        if(_this.questioNo == 2){

            if(target.name == "clock"){
                
                if(_this.temp1 == 1 || _this.temp1 == 2 || _this.temp1 == 3 || _this.temp1 == 4 || _this.temp1 == 5 || _this.temp1 == 6 || _this.temp1 == 7){
                    _this.temp = 0;
                }else{
                    _this.CW_shape3.visible=true;
                    _this.temp++;
                    
                }
                if(_this.temp1 > 0)
                    _this.temp1--;

                if(_this.shape1.frame == 0){
                    _this.shape1.frame = 0;
                    _this.clickSound.pause();
                    _this.clock.inputEnabled = false;
                    _this.anticlock.inputEnabled = false;
                }else{
                    _this.shape1.frame++;
                    _this.AntiCW_shape3.frame--;
                }

                if(_this.temp==1)
                {
                    _this.CW_shape3.frame=0;
                }
                if(_this.temp==2)
                {
                    _this.CW_shape3.frame=1;
                }
                if(_this.temp==3)
                {
                    _this.CW_shape3.frame=2;
                }
                if(_this.temp==4)
                {
                    _this.CW_shape3.frame=3;
                }
                if(_this.temp==5)
                {
                    _this.CW_shape3.frame=4;
                }
                if(_this.temp==6)
                {
                    _this.CW_shape3.frame=5;
                }
                if(_this.temp==7)
                {
                    _this.CW_shape3.frame=6;
                }
                if(_this.temp==8)
                {
                    _this.CW_shape3.frame=7;
                    if( _this.toCheckNumberPad == false)
                    {
                        _this.toCheckNumberPad =true;
                        _this.addNumberPad();
                    }
                }

                if(_this.shape1.frame == 7){
                    _this.CW_shape3.visible=false;
                    _this.AntiCW_shape3.visible=false;
                    _this.temp = 0;
                    _this.temp1 = 0;
                }

            }

            if(target.name == "anticlock"){

                if(_this.temp == 1 || _this.temp == 2 || _this.temp == 3 || _this.temp == 4 || _this.temp == 5 ||
                   _this.temp == 6 || _this.temp == 7 || _this.temp == 8){
                    _this.temp1 = 0;
                }else{
                    _this.AntiCW_shape3.visible=true;
                    _this.temp1++;
                }
                if(_this.temp > 0)
                    _this.temp--;

                if(_this.shape1.frame == 0){
                    _this.shape1.frame = 0;
                    _this.clickSound.pause();
                    _this.clock.inputEnabled = false;
                    _this.anticlock.inputEnabled = false;
                }else{
                    _this.shape1.frame--;
                    _this.CW_shape3.frame--;
                }

                if(_this.temp1==1)
                {
                    _this.AntiCW_shape3.frame=0;
                }
                if(_this.temp1==2)
                {
                    _this.AntiCW_shape3.frame=1;
                }
                if(_this.temp1==3)
                {
                    _this.AntiCW_shape3.frame=2;
                }
                if(_this.temp1==4)
                {
                    _this.AntiCW_shape3.frame=3;
                }
                if(_this.temp1==5)
                {
                    _this.AntiCW_shape3.frame=4;
                }
                if(_this.temp1==6)
                {
                    _this.AntiCW_shape3.frame=5;
                }
                if(_this.temp1==7)
                {
                    _this.AntiCW_shape3.frame=6;
                    if( _this.toCheckNumberPad == false)
                    {
                        _this.toCheckNumberPad =true;
                        _this.addNumberPad();
                    }
                }

                if(_this.shape1.frame == 7){
                    _this.CW_shape3.visible=false;
                    _this.AntiCW_shape3.visible=false;
                    _this.temp = 0;
                    _this.temp1 = 0;
                }
            }
        }

        if(_this.questioNo == 4 ){

            if(target.name == "clock"){
                if(_this.temp1 == 1){
                    _this.temp = 0;
                }else{
                    _this.CW_shape3.visible=true;
                    _this.temp++;
                }
                
                if(_this.temp1 > 0)
                    _this.temp1--;

                //=========================================
                // To Restrict to only actual final shape
                if(_this.shape1.frame == 0){
                    _this.shape1.frame = 0;
                    _this.clickSound.pause();
                    _this.clock.inputEnabled = false;
                    _this.anticlock.inputEnabled = false;
                }else{
                    _this.shape1.frame++;
                    _this.AntiCW_shape3.frame--;
                }
                //============================================

                if(_this.temp==1)
                {
                    _this.CW_shape3.frame=1;
                    if( _this.toCheckNumberPad == false)
                    {
                        _this.toCheckNumberPad =true;
                        _this.addNumberPad();
                    }
                }

                if(_this.shape1.frame == 1){
                    _this.CW_shape3.visible=false;
                    _this.AntiCW_shape3.visible=false;
                    _this.temp = 0;
                    _this.temp1 = 0;
                }
                //            if(_this.temp == 1 ){
                //                _this.CW_shape3.frame = 0;
                //            }else if( _this.temp <= 4){
                //                _this.CW_shape3.frame++;
                //            }

            }

            if(target.name == "anticlock"){

                if(_this.temp == 1){
                    _this.temp1 = 0;
                }else{
                    _this.AntiCW_shape3.visible=true;
                    _this.temp1++;
                }
                
                if(_this.temp > 0)
                    _this.temp--;

                // To Restrict to only actual final shape
                if(_this.shape1.frame == 0){
                    _this.shape1.frame = 0;
                    _this.clickSound.pause();
                    _this.clock.inputEnabled = false;
                    _this.anticlock.inputEnabled = false;
                }else{
                    _this.shape1.frame--;
                    _this.CW_shape3.frame--;
                }

                if(_this.temp1==1)
                {
                    _this.AntiCW_shape3.frame=1;
                    if( _this.toCheckNumberPad == false)
                    {
                        _this.toCheckNumberPad =true;
                        _this.addNumberPad();
                    }
                }

                if(_this.shape1.frame == 1){
                    _this.CW_shape3.visible=false;
                    _this.AntiCW_shape3.visible=false;
                    _this.temp = 0;
                    _this.temp1 = 0;
                }

            }
        }

        if(_this.questioNo == 5 || _this.questioNo == 6 || _this.questioNo == 8){

            if(target.name == "clock"){
                if(_this.temp1 == 1 || _this.temp1 == 2){
                    _this.temp = 0;
                }else{
                    _this.CW_shape3.visible=true;
                    _this.temp++;
                }
                
                if(_this.temp1 > 0)
                    _this.temp1--;

                //=========================================
                // To Restrict to only actual final shape
                if(_this.shape1.frame == 0){
                    _this.shape1.frame = 0;
                    _this.clickSound.pause();
                    _this.clock.inputEnabled = false;
                    _this.anticlock.inputEnabled = false;
                }else{
                    _this.shape1.frame++;
                    _this.AntiCW_shape3.frame--;
                }
                //============================================

                if(_this.temp==1)
                {
                    _this.CW_shape3.frame=0;
                }
                if(_this.temp==2)
                {
                    _this.CW_shape3.frame=1;
                    if( _this.toCheckNumberPad == false)
                    {
                        _this.toCheckNumberPad =true;
                        _this.addNumberPad();
                    }
                }

                if(_this.shape1.frame == 2){
                    _this.CW_shape3.visible=false;
                    _this.AntiCW_shape3.visible=false;
                    _this.temp = 0;
                    _this.temp1 = 0;
                }
                //            if(_this.temp == 1 ){
                //                _this.CW_shape3.frame = 0;
                //            }else if( _this.temp <= 4){
                //                _this.CW_shape3.frame++;
                //            }

            }

            if(target.name == "anticlock"){

                if(_this.temp == 1 || _this.temp == 2){
                    _this.temp1 = 0;
                }else{
                    _this.AntiCW_shape3.visible=true;
                    _this.temp1++;
                }
                
                if(_this.temp > 0)
                    _this.temp--;

                //=========================================
                // To Restrict to only actual final shape
                if(_this.shape1.frame == 0){
                    _this.shape1.frame = 0;
                    _this.clickSound.pause();
                    _this.clock.inputEnabled = false;
                    _this.anticlock.inputEnabled = false;
                }else{
                    _this.shape1.frame--;
                    _this.CW_shape3.frame--;
                }
                //============================================


                if(_this.temp1==1)
                {
                    _this.AntiCW_shape3.frame=0;
                }
                if(_this.temp1==2)
                {
                    _this.AntiCW_shape3.frame=1;
                    if( _this.toCheckNumberPad == false)
                    {
                        _this.toCheckNumberPad =true;
                        _this.addNumberPad();
                    }
                }

                if(_this.shape1.frame == 2){
                    _this.CW_shape3.visible=false;
                    _this.AntiCW_shape3.visible=false;
                    _this.temp = 0;
                    _this.temp1 = 0;
                }

                //            if(_this.temp1 == 1){
                //                _this.AntiCW_shape3.frame = 0;
                //            }else if( _this.temp1 <= 4){
                //                _this.AntiCW_shape3.frame++;
                //            }
            }
        }

    },

    addNumberPad:function(target){

        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.box = _this.numGroup.create(480,505,'SG22_1_5bottombar');
        _this.box.anchor.setTo(0.5);
        _this.x = 80;

        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,508,'SG22_1_5numberpad');  
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.name =i;
            _this.numbg.frame=i;

            _this.numTxt = _this.add.text(-2,1);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Alte Haas Grotesk';
            _this.numTxt.fontSize = 24;
            _this.numTxt.fill = '#FFFFFF';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);

            _this.numbg.addChild(_this.numTxt);

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);

            _this.x+=70;
        }

        _this.txtbox.name = "AnswerBox";
        _this.objGroup.add(_this.txtbox);

        _this.eraserbtn = _this.numGroup.create(_this.x+30,508,'SG22_1_5erase');
        _this.eraserbtn.anchor.setTo(0.5);
        _this.eraserbtn.scale.setTo(1.1,1.1);
        _this.eraserbtn.name = "Eraser";
        _this.eraserbtn.inputEnabled = true;
        _this.eraserbtn.input.useHandCursor = true;

        _this.rightbtn = _this.numGroup.create(_this.x+100,508,'SG22_1_5rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.1,1.1);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;

        _this.enterTxt = _this.add.text(-2,1, _this.selectedAns);
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';

        _this.enterTxt.font = 'myfont';
        _this.enterTxt.name = "enterTxt";
        _this.enterTxt.fontSize = 40;
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fill = '#00C4EB';

        _this.enterTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.txtbox.addChild(_this.enterTxt);
//                _this.txtbox.name = "txtbox";

        _this.eraserbtn.events.onInputDown.add(function(){
            _this.clickSound.play();
            _this.eraserbtn.frame=1;
            _this.time.events.add(500, function(){    
                _this.eraserbtn.frame=0;
            },_this);
            _this.enterTxt.setText("");
            _this.selectedAns="";
        },_this);

        _this.rightbtn.events.onInputDown.add(function(target){

            _this.noofAttempts++;
            _this.clickSound.play();

            if(_this.selectedAns==_this.rightAns||_this.selectedAns==""+_this.rightAns||_this.selectedAns==""+_this.rightAns ||
               _this.selectedAns==_this.rightAns1||_this.selectedAns==""+_this.rightAns1||_this.selectedAns==""+_this.rightAns1)  
            {
                console.log("correct");

                _this.wrongAnswer = false;

                target.events.onInputDown.removeAll();
                _this.rightbtn.frame=1;

                _this.txtbox.frame=1;

                _this.GlowShape.visible = true;
                _this.GlowShape.frame=1;

                _this.celebr = _this.add.audio('celebr');
                _this.celebr.play();

                _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                _this.starAnim.smoothed = false;
                _this.anim4 = _this.starAnim.animations.add('star');
                _this.anim4.play();
                _this.count1++;
                _this.time.events.add(1000, function(){    
                    _this.rightbtn.frame=0;
                },_this);

                _this.time.events.add(2000, function(){_this.removeCelebration();},_this);

                if(_this.timer)
                {
                    _this.timer.stop();
                    _this.timer = null;
                }
                _this.sceneCount++;
                    _this.questionid=1;
                telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                _this.AnsTimerCount = 0;
                _this.noofAttempts = 0;
            }
            else
            {
                console.log("wrong");

                _this.wrongAnswer = true;

                _this.rightbtn.frame=1;
                _this.selectedAns = "";
                _this.enterTxt.setText("");
                _this.shake.shake(10, _this.txtbox);
                _this.wmusic = _this.add.audio('waudio');
                _this.wmusic.play(); 

                _this.temp = 0;
                _this.temp1 = 0;

                _this.time.events.add(500, function(){    
                    _this.rightbtn.frame=0;
                    _this.numGroup.visible=false;
                    _this.shape1.destroy();
                    _this.shape2.destroy();
                    _this.CW_shape3.destroy();
                    _this.AntiCW_shape3.destroy();
                    _this.box1.destroy();
                    _this.box2.destroy();
                    _this.clock.destroy();
                    _this.anticlock.destroy();
                    _this.txtbox.destroy();

                    _this.toCheckNumberPad=false;

                    _this.getQuestion();
                },_this);
            }

        },_this);

        _this.numGroup.visible=false;
        _this.time.events.add(200, function(){
            _this.numGroup.visible=true;
            _this.numGroup.y=100;
            _this.Maintween = _this.add.tween(_this.numGroup);
            _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
            _this.txtbox.events.onInputDown.removeAll();    
        },_this);

    },

    numClicked:function(target){
        console.log(target.name);
        console.log(_this.objGroup.getByName("AnswerBox").getChildAt(0).name);

        _this.tapsound = _this.add.audio('tap');
        _this.tapsound.play();

        if(_this.selectedAns.length < 3)
        {
            _this.selectedAns += target.name;
            _this.txtbox.getChildAt(0).setText(_this.selectedAns);
        }

    },

    removeCelebration:function()
    {
        console.log("removeCeleb");

        console.log("no"+_this.no11);
        _this.correct=0;
        // _this.count=0;

        _this.temp = 0;
        _this.temp1 = 0;

        _this.no11++;

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

        if(_this.no11 < 6)
        {
            _this.wrong = true;

            if(_this.timer1)
            {
                _this.timer1.stop();
                _this.timer1 = null;
            }

            _this.box1.destroy();
            _this.box2.destroy();
            _this.clock.destroy();
            _this.anticlock.destroy();
            _this.numGroup.destroy();
            _this.objGroup.destroy();
            _this.slideGrp.destroy();
            _this.enterTxt.destroy();
            _this.selectedAns = '';

            _this.toCheckNumberPad=false;

            _this.time.events.add(500, function(){  
                _this.getQuestion();
            },_this);

        }
        else
        {
            _this.stopvoice();

           if(_this.timer1)
            {
                _this.timer1.stop();
                _this.timer1 = null;
            }
            
            _this.countIncrement = 0;
            _this.counterForTimer = null;
            _this.state.start('sg22_1_5Score',true,false);
        }

    },

    getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg22.1.5/English/sg22.1.5.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg22.1.5/Hindi/sg22.1.5.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg22.1.5/Kannada/sg22.1.5.mp3");
        }
        else if(window.languageSelected == "Gujarati")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg22.1.5/Gujarati/sg22.1.5.mp3");
        }
		else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg22.1.5/Marathi/sg22.1.5.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg22.1.5/Telugu/sg22.1.5.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg22.1.5/Tamil/sg22.1.5.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg22.1.5/Urdu/sg22.1.5.mp3");
                    }
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg22.1.5/Odiya/sg22.1.5.mp3");
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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
                console.log("here");
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
    },


    shutdown:function()
    {
        this.stopvoice();
    }   


};






















