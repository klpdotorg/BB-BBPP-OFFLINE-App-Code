Game.sg11_1_3level1=function(){};

Game.sg11_1_3level1.prototype={
    init:function(game)
    {
        _this = this;
        telInitializer.gameIdInit("SG11_1_3",gradeSelected);
        

    },

    preload:function(game){
        if(!window.grade3SG1){

            window.grade3SG1 = true;

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

            this.load.image('SG11_1_3backg',window.baseUrl+'assets/gradeAssets/sg11.1.3/backg.png');
        this.load.image('SG11_1_3ball1',window.baseUrl+'assets/gradeAssets/sg11.1.3/ball1.png');
        this.load.image('SG11_1_3ball2',window.baseUrl+'assets/gradeAssets/sg11.1.3/ball2.png');
        this.load.image('SG11_1_3ball3',window.baseUrl+'assets/gradeAssets/sg11.1.3/ball3.png');
        this.load.image('SG11_1_3ball4',window.baseUrl+'assets/gradeAssets/sg11.1.3/ball4.png');
        this.load.image('SG11_1_3ball5',window.baseUrl+'assets/gradeAssets/sg11.1.3/ball5.png');
        this.load.image('SG11_1_3ball6',window.baseUrl+'assets/gradeAssets/sg11.1.3/ball6.png');
        this.load.image('SG11_1_3cone1',window.baseUrl+'assets/gradeAssets/sg11.1.3/cone1.png');
        this.load.image('SG11_1_3cone2',window.baseUrl+'assets/gradeAssets/sg11.1.3/cone2.png');
        this.load.image('SG11_1_3cone3',window.baseUrl+'assets/gradeAssets/sg11.1.3/cone3.png');
        this.load.image('SG11_1_3cone4',window.baseUrl+'assets/gradeAssets/sg11.1.3/cone4.png');
        this.load.image('SG11_1_3cone5',window.baseUrl+'assets/gradeAssets/sg11.1.3/cone5.png');
        this.load.image('SG11_1_3drum1',window.baseUrl+'assets/gradeAssets/sg11.1.3/drum1.png');
        this.load.image('SG11_1_3rectangle1',window.baseUrl+'assets/gradeAssets/sg11.1.3/rectangle1.png');
        this.load.image('SG11_1_3square1',window.baseUrl+'assets/gradeAssets/sg11.1.3/square1.png');  
        this.load.atlas('SG11_1_3ballanim',window.baseUrl+'assets/gradeAssets/sg11.1.3/ballanim.png',window.baseUrl+'json/gradeJson/sg11.1.3/ballanim.json');
        this.load.atlas('SG11_1_3coneanim',window.baseUrl+'assets/gradeAssets/sg11.1.3/coneanim.png',window.baseUrl+'json/gradeJson/sg11.1.3/coneanim.json');
        this.load.atlas('SG11_1_3drumanim',window.baseUrl+'assets/gradeAssets/sg11.1.3/drumanim.png',window.baseUrl+'json/gradeJson/sg11.1.3/drumanim.json');
        this.load.atlas('SG11_1_3squareanim',window.baseUrl+'assets/gradeAssets/sg11.1.3/squareanim.png',window.baseUrl+'json/gradeJson/sg11.1.3/squareanim.json');
        this.load.atlas('SG11_1_3rectangleanim',window.baseUrl+'assets/gradeAssets/sg11.1.3/rectangleanim.png',window.baseUrl+'json/gradeJson/sg11.1.3/rectangleanim.json');
        this.load.image('SG11_1_3hand',window.baseUrl+'assets/gradeAssets/sg11.1.3/hand.png');


    }

    },

    create:function(game)
    {
        _this.amplify = null;

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;

        _this.qArrays;
        _this.speaker;
        _this.celebration;
        _this.timerDisplay;
        _this.background;
        _this.click3;
        _this.click2
        _this.click1;
        _this.wmusic;
        _this.clickSound;
        _this.starsGroup;
        _this.questioNo = 0;
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
        _this.number=0;
        _this.counterForTimer=0;
        _this.correctflag=0;
        _this.celebration= false;

        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5];
        _this.qArrays = _this.shuffle(_this.qArrays);

        console.log(_this.qArrays);

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'SG11_1_3backg');

        _this.topbar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.topbar.scale.setTo(1,1);

        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){ 
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopvoice();
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade2levelSelectionScreen',true,false); 
        },_this,0,1,2);

        _this.speaker = _this.add.button(600,6,'grade11_speaker');
        _this.speaker.events.onInputDown.add(function()
                                             {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();

        },_this);

        _this.timerbg=_this.add.sprite(305,6,'Level42C_timer');
        _this.timerbg.scale.setTo(1,1);

        _this.timerDisplay = _this.add.text(330,22,_this.minutes + ' : '+_this.seconds);
        _this.timerDisplay.anchor.setTo(0.5);
        _this.timerDisplay.align = 'center';
        _this.timerDisplay.font = 'myfont';
        _this.timerDisplay.fontSize = 20;
        _this.timerDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(5);
        _this.getQuestion(); 
        _this.getVoice();

    },

    updateTimer:function() 
    {
        _this.counterForTimer++;
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;

            if(_this.minutes<10){
                _this.minutes =  _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes = _this.minutes+1;
            }
        }
        else
        {
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }

        _this.timerDisplay.setText(_this.minutes+':' +_this.seconds);

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
        _this.stopvoice();

        if(!_this.timer)
        {


        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
                         {
            _this.AnsTimerCount++;
        }, _this);


        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();
    }

        /*******************For Navigation Bar*********************/
        _this.timer1 = _this.time.create(false);

        _this.timer1.loop(1000, function()
                          {
            _this.updateTimer();
        }, _this);
        _this.timer1.start();
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.

        //console.log("get"+_this.no11);
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

        }

    },



    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {

            _this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim1');
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=15;
                    _this.starsGroup.getChildAt(i).x+=15;
                }
            }
        }						
    },


    gotoFirstQuestion:function()
    {
        _this.questioNo = 1;

        _this.shape = _this.add.sprite(480,-44,'SG11_1_3coneanim');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(1,1);
        _this.shape.name = "cone";
        _this.shape.frame=0;
        _this.shape.visible=false;

        _this.shapeGrp=_this.add.group();

        _this.shape1 = _this.add.sprite(480,385,'SG11_1_3cone5');
        _this.shape1.anchor.setTo(0.5);
        _this.shape1.scale.setTo(1,1); 
        _this.shape1.name = "shape1";
        _this.shape1.visible=false;

        _this.shape2 = _this.add.sprite(480,330,'SG11_1_3cone4');
        _this.shape2.anchor.setTo(0.5);
        _this.shape2.scale.setTo(1.03,1.03); 
        _this.shape2.name = "shape2";
        _this.shape2.visible=false;

        _this.shape3 = _this.add.sprite(480,260,'SG11_1_3cone3');
        _this.shape3.anchor.setTo(0.5);
        _this.shape3.scale.setTo(1.05,1.048); 
        _this.shape3.name = "shape3";
        _this.shape3.visible=false;

        _this.shape4 = _this.add.sprite(479,190,'SG11_1_3cone2');
        _this.shape4.anchor.setTo(0.5);
        _this.shape4.scale.setTo(1.08,1.08); 
        _this.shape4.name = "shape4";
        _this.shape4.visible=false;

        _this.shape5 = _this.add.sprite(479,118,'SG11_1_3cone1');
        _this.shape5.anchor.setTo(0.5);
        _this.shape5.scale.setTo(1.15,1.15); 
        _this.shape5.name = "shape5";
        _this.shape5.visible=false;

        _this.shapeGrp.add(_this.shape1);
        _this.shapeGrp.add(_this.shape2);
        _this.shapeGrp.add(_this.shape3);
        _this.shapeGrp.add(_this.shape4);
        _this.shapeGrp.add(_this.shape5);

        _this.dragGrp=_this.add.group();

        _this.dragshape1 = _this.add.sprite(800,400,'SG11_1_3cone5');
        _this.dragshape1.anchor.setTo(0.5);
        _this.dragshape1.scale.setTo(0.8,0.8); 
        _this.dragshape1.name = "dragshape1";
        _this.dragshape1.y = -1000;
        var tween = _this.add.tween(_this.dragshape1);
        tween.to({ y: 400 }, 2000,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape1);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape1);
                tween2.to({ y:400 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape1.inputEnabled = true;
        _this.dragshape1.input.useHandCursor = true;
        _this.dragshape1.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape2 = _this.add.sprite(700,480,'SG11_1_3cone4');
        _this.dragshape2.anchor.setTo(0.5);
        _this.dragshape2.scale.setTo(0.8,0.8); 
        _this.dragshape2.name = "dragshape2";
        _this.dragshape2.y = -1000;
        var tween = _this.add.tween(_this.dragshape2);
        tween.to({ y: 480 }, 2500,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape2);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape2);
                tween2.to({ y:480 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape2.inputEnabled = true;
        _this.dragshape2.input.useHandCursor = true;
        _this.dragshape2.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape3 = _this.add.sprite(120,450,'SG11_1_3cone3');
        _this.dragshape3.anchor.setTo(0.5);
        _this.dragshape3.scale.setTo(0.8,0.8); 
        _this.dragshape3.name = "dragshape3";
        _this.dragshape3.y = -1000;
        var tween = _this.add.tween(_this.dragshape3);
        tween.to({ y: 450 }, 2000,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape3);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape3);
                tween2.to({ y:450 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape3.inputEnabled = true;
        _this.dragshape3.input.useHandCursor = true;
        _this.dragshape3.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape4 = _this.add.sprite(240,400,'SG11_1_3cone2');
        _this.dragshape4.anchor.setTo(0.5);
        _this.dragshape4.scale.setTo(0.8,0.8);  
        _this.dragshape4.name = "dragshape4";
        _this.dragshape4.y = -1000;
        var tween = _this.add.tween(_this.dragshape4);
        tween.to({ y: 400 }, 2800,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape4);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape4);
                tween2.to({ y:400 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape4.inputEnabled = true;
        _this.dragshape4.input.useHandCursor = true;
        _this.dragshape4.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape5 = _this.add.sprite(270,480,'SG11_1_3cone1');
        _this.dragshape5.anchor.setTo(0.5);
        _this.dragshape5.scale.setTo(0.8,0.8); 
        _this.dragshape5.name = "dragshape5";
        _this.dragshape5.y = -1000;
        var tween = _this.add.tween(_this.dragshape5);
        tween.to({ y: 480 }, 2500,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape5);
            tween1.to({ y:250 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape5);
                tween2.to({ y:480 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape5.inputEnabled = true;
        _this.dragshape5.input.useHandCursor = true;
        _this.dragshape5.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragGrp.add(_this.dragshape1);
        _this.dragGrp.add(_this.dragshape2);
        _this.dragGrp.add(_this.dragshape3);
        _this.dragGrp.add(_this.dragshape4);
        _this.dragGrp.add(_this.dragshape5);

        _this.graphicsGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(300,10, 200, 500);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "graphics1";

        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(300,10, 200, 500);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "graphics2";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(300,10, 200, 500);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "graphics3";

        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(300,10, 200, 500);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "graphics4";

        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(300,10, 200, 500);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "graphics5";

        _this.graphicsGrp.add(_this.graphics1);
        _this.graphicsGrp.add(_this.graphics2);
        _this.graphicsGrp.add(_this.graphics3);
        _this.graphicsGrp.add(_this.graphics4);
        _this.graphicsGrp.add(_this.graphics5);

        _this.number=5;

        _this.dragshape1hand = _this.add.sprite(800,400,'SG11_1_3cone5');
        _this.dragshape1hand.anchor.setTo(0.5);
        _this.dragshape1hand.scale.setTo(0.8,0.8);
        _this.dragshape1hand.y = -1000;
        var tween = _this.add.tween(_this.dragshape1hand);
        tween.to({ y: 400 }, 2000,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape1hand);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape1hand);
                tween2.to({ y:400 }, 1000,'Linear', true, 0);
            },_this);
        },_this);

        _this.time.events.add(5000, function(){  
            _this.hand = _this.add.sprite(750,400,'SG11_1_3hand');
            _this.time.events.add(500, function(){  
                var tween1 = _this.add.tween(_this.dragshape1hand);
                tween1.to({ x:480 , y:385}, 1500, 'Linear', true, 0);
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:480 , y:385}, 1500, 'Linear', true, 0);
                tween1.onComplete.add(function(){
                    var tween2 = _this.add.tween(_this.dragshape1hand);
                    tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                    var tween2 = _this.add.tween(_this.hand);
                    tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                    tween2.onComplete.add(function(){
                        _this.hand.visible = false;
                        _this.dragshape1hand.destroy();
                    },_this);
                },_this);
            },_this);
        },_this);

    },



    onDragStart:function(target){


        //_this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
            { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level11.1.3_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

        _this.vx = target.x;    
        _this.vy = target.y; 

        target.input.enableDrag();
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
        target.events.onDragStop.add(function(target)
                                     {

            _this.click2 = this.add.audio('snapSound');
            _this.click2.play();
            // for(var i=0;i<_this.graphicsGrp.length;i++)
            //   console.log("dragboxGr :"+target.name);
            // console.log("dragboxGr :"+target.key);
            //  {
            if(_this.questioNo==1)
            {

                if((_this.checkOverlap(target,_this.graphics1))&& target.name == "dragshape1")
                {
                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape1.visible=true;
                    target.destroy();
                }

                else if((_this.checkOverlap(target,_this.graphics2))&& target.name == "dragshape2" && _this.shape1.visible==true)
                {
                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape2.visible=true;
                    target.destroy();

                }
                else if((_this.checkOverlap(target,_this.graphics3))&& target.name == "dragshape3" && _this.shape2.visible==true)
                {
                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape3.visible=true;
                    target.destroy();

                }
                else if((_this.checkOverlap(target,_this.graphics4))&& target.name == "dragshape4" && _this.shape3.visible==true)
                {

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape4.visible=true;
                    target.destroy();

                }
                else if((_this.checkOverlap(target,_this.graphics5))&& target.name == "dragshape5" && _this.shape4.visible==true)
                {

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape5.visible=true;
                    target.destroy();

                }
                else
                {
                    _this.shake.shake(10, target);
                    _this.wmusic = _this.add.audio('waudio');
                    _this.wmusic.play();
                }
            }
            else if(_this.questioNo==2)
            {

                if(_this.checkOverlap(target,_this.graphics1) && _this.drag1 == true && _this.drag == 0)
                {
                    _this.drag++;
                    _this.drag1 = false;
                    //                    _this.correct++;
                    //                    console.log("matched "+_this.correct);
                    console.log(_this.drag);
                    console.log(target.name);
                    //                    if(target.name=="dragshape1")
                    //                    {
                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape1.visible=true;
                    target.destroy();

                    //                    }
                }
                else if(_this.checkOverlap(target,_this.graphics2)&& _this.drag2 == true && _this.drag == 1)
                {
                    _this.drag++;
                    _this.drag2 = false;

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape2.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics3)&& _this.drag3 == true && _this.drag == 2)
                {
                    _this.drag++;
                    _this.drag3 = false;

                    console.log(_this.drag);
                    console.log(target.name);

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape3.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics4)&& _this.drag4 == true && _this.drag == 3)
                {
                    _this.drag++;
                    _this.drag4 = false;

                    console.log(target.name);

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape4.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics5)&& _this.drag5 == true && _this.drag == 4)
                {
                    _this.drag++;
                    _this.drag5 = false;

                    console.log(target.name);

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape5.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics6)&& _this.drag6 == true && _this.drag == 5)
                {
                    _this.drag++;
                    _this.drag6 = false;

                    console.log(target.name);

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape6.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics7)&& _this.drag7 == true && _this.drag == 6)
                {
                    _this.drag++;
                    _this.drag7 = false;

                    console.log(target.name);

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape7.visible=true;
                    target.destroy();
                }
                else
                {
                    _this.shake.shake(10, target);
                    _this.wmusic = _this.add.audio('waudio');
                    _this.wmusic.play();
                }
            }
            else if(_this.questioNo==3)
            {

                if((_this.checkOverlap(target,_this.graphics1))&& target.name == "dragshape6")
                {
                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape1.visible=true;
                    target.destroy();
                }

                else if((_this.checkOverlap(target,_this.graphics2))&& target.name == "dragshape4" && _this.shape1.visible==true)
                {
                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape2.visible=true;
                    target.destroy();

                }
                else if((_this.checkOverlap(target,_this.graphics3))&& target.name == "dragshape5" && _this.shape2.visible==true)
                {
                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape3.visible=true;
                    target.destroy();

                }
                else if((_this.checkOverlap(target,_this.graphics4))&& target.name == "dragshape1" && _this.shape3.visible==true)
                {

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape4.visible=true;
                    target.destroy();

                }
                else if((_this.checkOverlap(target,_this.graphics5))&& target.name == "dragshape2" && _this.shape4.visible==true)
                {

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape5.visible=true;
                    target.destroy();

                }
                else if((_this.checkOverlap(target,_this.graphics6))&& target.name == "dragshape3" && _this.shape5.visible==true)
                {

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape6.visible=true;
                    target.destroy();

                }
                else
                {
                    _this.shake.shake(10, target);
                    _this.wmusic = _this.add.audio('waudio');
                    _this.wmusic.play();
                }
            }
            else if(_this.questioNo==4)
            {

                if(_this.checkOverlap(target,_this.graphics1) && _this.drag1 == true && _this.drag == 0)
                {
                    _this.drag++;
                    _this.drag1 = false;
                    _this.correct++;
                    
                    console.log(target.name);
                    
                    console.log("matched "+_this.correct);
                    _this.shape5.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics2)&& _this.drag2 == true && _this.drag == 1)
                {
                    _this.drag++;
                    _this.drag2 = false;
                    _this.correct++;
                    
                    console.log(target.name);
                    
                    console.log("matched "+_this.correct);
                    _this.shape4.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics3)&& _this.drag3 == true && _this.drag == 2)
                {
                    _this.drag++;
                    _this.drag3 = false;

                    console.log(target.name);

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape3.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics4)&& _this.drag4 == true && _this.drag == 3)
                {
                    _this.drag++;
                    _this.drag4 = false;

                    console.log(target.name);

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape2.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics5)&& _this.drag5 == true && _this.drag == 4)
                {
                    _this.drag++;
                    _this.drag5 = false;

                    console.log(target.name);

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape1.visible=true;
                    target.destroy();
                }

                else
                {
                    _this.shake.shake(10, target);
                    _this.wmusic = _this.add.audio('waudio');
                    _this.wmusic.play();
                }
            }
            else if(_this.questioNo==5)
            {

                if(_this.checkOverlap(target,_this.graphics1) && _this.drag1 == true && _this.drag == 0)
                {
                    _this.drag++;
                    _this.drag1 = false;
                    _this.correct++;
                    
                    console.log(target.name);
                    
                    console.log("matched "+_this.correct);
                    _this.shape1.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics2)&& _this.drag2 == true && _this.drag == 1)
                {
                    _this.drag++;
                    _this.drag2 = false;
                    _this.correct++;
                    
                    console.log(target.name);
                    
                    console.log("matched "+_this.correct);
                    _this.shape2.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics3)&& _this.drag3 == true && _this.drag == 2)
                {
                    _this.drag++;
                    _this.drag3 = false;

                    console.log(target.name);

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape3.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics4)&& _this.drag4 == true && _this.drag == 3)
                {
                    _this.drag++;
                    _this.drag4 = false;

                    console.log(target.name);

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape4.visible=true;
                    target.destroy();
                }
                else if(_this.checkOverlap(target,_this.graphics5)&& _this.drag5 == true && _this.drag == 4)
                {
                    _this.drag++;
                    _this.drag5 = false;

                    console.log(target.name);

                    _this.correct++;
                    console.log("matched "+_this.correct);
                    _this.shape5.visible=true;
                    target.destroy();
                }

                else
                {
                    _this.shake.shake(10, target);
                    _this.wmusic = _this.add.audio('waudio');
                    _this.wmusic.play();
                }
            }
            if(_this.correct == _this.number)
            {
                console.log("dddd" +_this.correct);
                _this.shapeGrp.visible=false;
                _this.shape.visible=true;
                _this.shape.frame=1;
                _this.time.events.add(2000,function(){
                    var tween = _this.add.tween(_this.shape);
                    tween.to({ y:-900 }, 4500,'Linear', true, 0);
                },_this);
                _this.correctAns();

            }  

            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy; 


        },_this);


    },

    gotoSecondQuestion:function()
    {
        _this.questioNo = 2;

        _this.drag = 0;

        _this.drag1 = true;
        _this.drag2 = true;
        _this.drag3 = true;
        _this.drag4 = true;
        _this.drag5 = true;
        _this.drag6 = true;
        _this.drag7 = true;

        _this.shape = _this.add.sprite(480,55,'SG11_1_3drumanim');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(0.9,0.9);
        _this.shape.name = "drum";
        _this.shape.visible=false;

        _this.shapeGrp=_this.add.group();

        _this.shape1 = _this.add.sprite(480,385,'SG11_1_3drum1');
        _this.shape1.anchor.setTo(0.5);
        _this.shape1.scale.setTo(0.9,0.9); 
        _this.shape1.name = "shape1";
        _this.shape1.visible=false;

        _this.shape2 = _this.add.sprite(480,353,'SG11_1_3drum1');
        _this.shape2.anchor.setTo(0.5);
        _this.shape2.scale.setTo(0.9,0.9); 
        _this.shape2.name = "shape2";
        _this.shape2.visible=false;

        _this.shape3 = _this.add.sprite(480,321,'SG11_1_3drum1');
        _this.shape3.anchor.setTo(0.5);
        _this.shape3.scale.setTo(0.9,0.9); 
        _this.shape3.name = "shape3";
        _this.shape3.visible=false;

        _this.shape4 = _this.add.sprite(480,289,'SG11_1_3drum1');
        _this.shape4.anchor.setTo(0.5);
        _this.shape4.scale.setTo(0.9,0.9); 
        _this.shape4.name = "shape4";
        _this.shape4.visible=false;

        _this.shape5 = _this.add.sprite(480,257,'SG11_1_3drum1');
        _this.shape5.anchor.setTo(0.5);
        _this.shape5.scale.setTo(0.9,0.9); 
        _this.shape5.name = "shape5";
        _this.shape5.visible=false;

        _this.shape6 = _this.add.sprite(480,225,'SG11_1_3drum1');
        _this.shape6.anchor.setTo(0.5);
        _this.shape6.scale.setTo(0.9,0.9); 
        _this.shape5.name = "shape6";
        _this.shape6.visible=false;

        _this.shape7 = _this.add.sprite(480,193,'SG11_1_3drum1');
        _this.shape7.anchor.setTo(0.5);
        _this.shape7.scale.setTo(0.9,0.9); 
        _this.shape7.name = "shape7";
        _this.shape7.visible=false;

        _this.shapeGrp.add(_this.shape1);
        _this.shapeGrp.add(_this.shape2);
        _this.shapeGrp.add(_this.shape3);
        _this.shapeGrp.add(_this.shape4);
        _this.shapeGrp.add(_this.shape5);
        _this.shapeGrp.add(_this.shape6);
        _this.shapeGrp.add(_this.shape7);

        _this.dragGrp=_this.add.group();

        _this.dragshape1 = _this.add.sprite(720,400,'SG11_1_3drum1');
        _this.dragshape1.anchor.setTo(0.5);
        _this.dragshape1.scale.setTo(0.8,0.8); 
        _this.dragshape1.name = "dragshape1";
        _this.dragshape1.y = -1000;
        var tween = _this.add.tween(_this.dragshape1);
        tween.to({ y: 400 }, 2000,'Linear', true, 0);
        _this.dragshape1.inputEnabled = true;
        _this.dragshape1.input.useHandCursor = true;
        _this.dragshape1.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape2 = _this.add.sprite(800,460,'SG11_1_3drum1');
        _this.dragshape2.anchor.setTo(0.5);
        _this.dragshape2.scale.setTo(0.8,0.8); 
        _this.dragshape2.name = "dragshape2";
        _this.dragshape2.y = -1000;
        var tween = _this.add.tween(_this.dragshape2);
        tween.to({ y: 460 }, 2000,'Linear', true, 0);
        _this.dragshape2.inputEnabled = true;
        _this.dragshape2.input.useHandCursor = true;
        _this.dragshape2.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape3 = _this.add.sprite(770,400,'SG11_1_3drum1');
        _this.dragshape3.anchor.setTo(0.5);
        _this.dragshape3.scale.setTo(0.8,0.8); 
        _this.dragshape3.name = "dragshape3";
        _this.dragshape3.y = -1000;
        var tween = _this.add.tween(_this.dragshape3);
        tween.to({ y: 400 }, 2300,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape3);
            tween1.to({ y:200 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape3);
                tween2.to({ y:400 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape3.inputEnabled = true;
        _this.dragshape3.input.useHandCursor = true;
        _this.dragshape3.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape4 = _this.add.sprite(120,460,'SG11_1_3drum1');
        _this.dragshape4.anchor.setTo(0.5);
        _this.dragshape4.scale.setTo(0.8,0.8);  
        _this.dragshape4.name = "dragshape4";
        _this.dragshape4.y = -1000;
        var tween = _this.add.tween(_this.dragshape4);
        tween.to({ y: 460 }, 2000,'Linear', true, 0);
        _this.dragshape4.inputEnabled = true;
        _this.dragshape4.input.useHandCursor = true;
        _this.dragshape4.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape5 = _this.add.sprite(280,410,'SG11_1_3drum1');
        _this.dragshape5.anchor.setTo(0.5);
        _this.dragshape5.scale.setTo(0.8,0.8); 
        _this.dragshape5.name = "dragshape5";
        _this.dragshape5.y = -1000;
        var tween = _this.add.tween(_this.dragshape5);
        tween.to({ y: 410 }, 2000,'Linear', true, 0);
        _this.dragshape5.inputEnabled = true;
        _this.dragshape5.input.useHandCursor = true;
        _this.dragshape5.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape6 = _this.add.sprite(200,400,'SG11_1_3drum1');
        _this.dragshape6.anchor.setTo(0.5);
        _this.dragshape6.scale.setTo(0.8,0.8); 
        _this.dragshape6.name = "dragshape6";
        _this.dragshape6.y = -1000;
        var tween = _this.add.tween(_this.dragshape6);
        tween.to({ y: 400 }, 2300,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape6);
            tween1.to({ y:200 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape6);
                tween2.to({ y:400 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape6.inputEnabled = true;
        _this.dragshape6.input.useHandCursor = true;
        _this.dragshape6.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape7 = _this.add.sprite(230,350,'SG11_1_3drum1');
        _this.dragshape7.anchor.setTo(0.5);
        _this.dragshape7.scale.setTo(0.8,0.8); 
        _this.dragshape7.name = "dragshape7";
        _this.dragshape7.y = -1000;
        var tween = _this.add.tween(_this.dragshape7);
        tween.to({ y: 350 }, 4500,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape7);
            tween1.to({ y:250 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape7);
                tween2.to({ y:350 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape7.inputEnabled = true;
        _this.dragshape7.input.useHandCursor = true;
        _this.dragshape7.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragGrp.add(_this.dragshape1);
        _this.dragGrp.add(_this.dragshape2);
        _this.dragGrp.add(_this.dragshape3);
        _this.dragGrp.add(_this.dragshape4);
        _this.dragGrp.add(_this.dragshape5);
        _this.dragGrp.add(_this.dragshape6);
        _this.dragGrp.add(_this.dragshape7);

        _this.graphicsGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(300,10, 200, 500);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "graphics1";

        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(300,10, 200, 500);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "graphics2";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(300,10, 200, 500);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "graphics3";

        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(300,10, 200, 500);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "graphics4";

        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(300,10, 200, 500);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "graphics5";

        _this.graphics6 = _this.add.graphics(100, 100);       
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawRect(300,10, 200, 500);
        _this.graphics6.alpha=0;
        _this.graphics6.name = "graphics6";

        _this.graphics7 = _this.add.graphics(100, 100);       
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawRect(300,100, 200, 500);
        _this.graphics7.alpha=0;
        _this.graphics7.name = "graphics7";

        _this.graphicsGrp.add(_this.graphics1);
        _this.graphicsGrp.add(_this.graphics2);
        _this.graphicsGrp.add(_this.graphics3);
        _this.graphicsGrp.add(_this.graphics4);
        _this.graphicsGrp.add(_this.graphics5);
        _this.graphicsGrp.add(_this.graphics6);
        _this.graphicsGrp.add(_this.graphics7);

        _this.number=7;

        _this.dragshape1hand = _this.add.sprite(230,350,'SG11_1_3drum1');
        _this.dragshape1hand.anchor.setTo(0.5);
        _this.dragshape1hand.scale.setTo(0.8,0.8);
        _this.dragshape1hand.y = -1000;
        var tween = _this.add.tween(_this.dragshape1hand);
        tween.to({ y: 350 }, 4500,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape1hand);
            tween1.to({ y:250 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape1hand);
                tween2.to({ y:350 }, 1000,'Linear', true, 0);
            },_this);
        },_this);

        _this.time.events.add(6500, function(){  
            _this.hand = _this.add.sprite(230,350,'SG11_1_3hand');
            _this.time.events.add(500, function(){  
                var tween1 = _this.add.tween(_this.dragshape1hand);
                tween1.to({ x:480 , y:385}, 1500, 'Linear', true, 0);
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:480 , y:385}, 1500, 'Linear', true, 0);
                tween1.onComplete.add(function(){
                    var tween2 = _this.add.tween(_this.dragshape1hand);
                    tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                    var tween2 = _this.add.tween(_this.hand);
                    tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                    tween2.onComplete.add(function(){
                        _this.hand.visible = false;
                        _this.dragshape1hand.destroy();
                    },_this);
                },_this);
            },_this);
        },_this);

    },

    gotoThirdQuestion:function()
    { 
        _this.questioNo = 3;

        _this.shape = _this.add.sprite(480,25,'SG11_1_3ballanim');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(0.8,0.8);
        _this.shape.name = "ball";
        _this.shape.visible=false;

        _this.shapeGrp=_this.add.group();

        _this.shape1 = _this.add.sprite(478,369,'SG11_1_3ball6');
        _this.shape1.anchor.setTo(0.5);
        _this.shape1.scale.setTo(0.8,0.8); 
        _this.shape1.name = "shape1";
        _this.shape1.visible=false;

        _this.shape2 = _this.add.sprite(480,331,'SG11_1_3ball5');
        _this.shape2.anchor.setTo(0.5);
        _this.shape2.scale.setTo(0.8,0.8); 
        _this.shape2.name = "shape2";
        _this.shape2.visible=false;

        _this.shape3 = _this.add.sprite(480,283,'SG11_1_3ball4');
        _this.shape3.anchor.setTo(0.5);
        _this.shape3.scale.setTo(0.8,0.8); 
        _this.shape3.name = "shape3";
        _this.shape3.visible=false;

        _this.shape4 = _this.add.sprite(480,238,'SG11_1_3ball3');
        _this.shape4.anchor.setTo(0.5);
        _this.shape4.scale.setTo(0.8,0.8); 
        _this.shape4.name = "shape4";
        _this.shape4.visible=false;

        _this.shape5 = _this.add.sprite(480,189,'SG11_1_3ball2');
        _this.shape5.anchor.setTo(0.5);
        _this.shape5.scale.setTo(0.8,0.8); 
        _this.shape5.name = "shape5";
        _this.shape5.visible=false;

        _this.shape6 = _this.add.sprite(480,154,'SG11_1_3ball1');
        _this.shape6.anchor.setTo(0.5);
        _this.shape6.scale.setTo(0.8,0.8); 
        _this.shape6.name = "shape6";
        _this.shape6.visible=false;

        _this.shapeGrp.add(_this.shape1);
        _this.shapeGrp.add(_this.shape2);
        _this.shapeGrp.add(_this.shape3);
        _this.shapeGrp.add(_this.shape4);
        _this.shapeGrp.add(_this.shape5);
        _this.shapeGrp.add(_this.shape6);

        _this.dragGrp=_this.add.group();

        _this.dragshape1 = _this.add.sprite(800,380,'SG11_1_3ball3');
        _this.dragshape1.anchor.setTo(0.5);
        _this.dragshape1.scale.setTo(0.7,0.7); 
        _this.dragshape1.name = "dragshape1";
        _this.dragshape1.y = -1000;
        var tween = _this.add.tween(_this.dragshape1);
        tween.to({ y: 380 }, 2000,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape1);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape1);
                tween2.to({ y:380 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape1.inputEnabled = true;
        _this.dragshape1.input.useHandCursor = true;
        _this.dragshape1.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape2 = _this.add.sprite(800,430,'SG11_1_3ball2');
        _this.dragshape2.anchor.setTo(0.5);
        _this.dragshape2.scale.setTo(0.7,0.7); 
        _this.dragshape2.name = "dragshape2";
        _this.dragshape2.y = -1000;
        var tween = _this.add.tween(_this.dragshape2);
        tween.to({ y: 430 }, 2500,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape2);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape2);
                tween2.to({ y:430 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape2.inputEnabled = true;
        _this.dragshape2.input.useHandCursor = true;
        _this.dragshape2.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape3 = _this.add.sprite(800,480,'SG11_1_3ball1');
        _this.dragshape3.anchor.setTo(0.5);
        _this.dragshape3.scale.setTo(0.7,0.7); 
        _this.dragshape3.name = "dragshape3";
        _this.dragshape3.y = -1000;
        var tween = _this.add.tween(_this.dragshape3);
        tween.to({ y: 480 }, 2800,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape3);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape3);
                tween2.to({ y:480 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape3.inputEnabled = true;
        _this.dragshape3.input.useHandCursor = true;
        _this.dragshape3.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape4 = _this.add.sprite(160,380,'SG11_1_3ball5');
        _this.dragshape4.anchor.setTo(0.5);
        _this.dragshape4.scale.setTo(0.7,0.7);  
        _this.dragshape4.name = "dragshape4";
        _this.dragshape4.y = -1000;
        var tween = _this.add.tween(_this.dragshape4);
        tween.to({ y: 380 }, 2000,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape4);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape4);
                tween2.to({ y:380 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape4.inputEnabled = true;
        _this.dragshape4.input.useHandCursor = true;
        _this.dragshape4.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape5 = _this.add.sprite(160,430,'SG11_1_3ball4');
        _this.dragshape5.anchor.setTo(0.5);
        _this.dragshape5.scale.setTo(0.7,0.7); 
        _this.dragshape5.name = "dragshape5";
        _this.dragshape5.y = -1000;
        var tween = _this.add.tween(_this.dragshape5);
        tween.to({ y: 430 }, 2500,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape5);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape5);
                tween2.to({ y:430 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape5.inputEnabled = true;
        _this.dragshape5.input.useHandCursor = true;
        _this.dragshape5.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape6 = _this.add.sprite(160,470,'SG11_1_3ball6');
        _this.dragshape6.anchor.setTo(0.5);
        _this.dragshape6.scale.setTo(0.7,0.7); 
        _this.dragshape6.name = "dragshape6";
        _this.dragshape6.y = -1000;
        var tween = _this.add.tween(_this.dragshape6);
        tween.to({ y: 470 }, 2800,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape6);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape6);
                tween2.to({ y:470 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape6.inputEnabled = true;
        _this.dragshape6.input.useHandCursor = true;
        _this.dragshape6.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragGrp.add(_this.dragshape1);
        _this.dragGrp.add(_this.dragshape2);
        _this.dragGrp.add(_this.dragshape3);
        _this.dragGrp.add(_this.dragshape4);
        _this.dragGrp.add(_this.dragshape5);
        _this.dragGrp.add(_this.dragshape6);

        _this.graphicsGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(300,10, 200, 500);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "graphics1";

        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(300,10, 200, 500);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "graphics2";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(300,10, 200, 500);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "graphics3";

        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(300,10, 200, 500);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "graphics4";

        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(300,10, 200, 500);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "graphics5";

        _this.graphics6 = _this.add.graphics(100, 100);       
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawRect(300,10, 200, 500);
        _this.graphics6.alpha=0;
        _this.graphics6.name = "graphics6";

        _this.graphicsGrp.add(_this.graphics1);
        _this.graphicsGrp.add(_this.graphics2);
        _this.graphicsGrp.add(_this.graphics3);
        _this.graphicsGrp.add(_this.graphics4);
        _this.graphicsGrp.add(_this.graphics5);
        _this.graphicsGrp.add(_this.graphics6);

        _this.number=6;


        _this.dragshape1hand = _this.add.sprite(160,470,'SG11_1_3ball6');
        _this.dragshape1hand.anchor.setTo(0.5);
        _this.dragshape1hand.scale.setTo(0.7,0.7);
        _this.dragshape1hand.y = -1000;
        var tween = _this.add.tween(_this.dragshape1hand);
        tween.to({ y: 470 }, 2800,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape1hand);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape1hand);
                tween2.to({ y:470 }, 1000,'Linear', true, 0);
            },_this);
        },_this);

        _this.time.events.add(5000, function(){  
            _this.hand = _this.add.sprite(160,470,'SG11_1_3hand');
            _this.time.events.add(500, function(){  
                var tween1 = _this.add.tween(_this.dragshape1hand);
                tween1.to({ x:480 , y:385}, 1500, 'Linear', true, 0);
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:480 , y:385}, 1500, 'Linear', true, 0);
                tween1.onComplete.add(function(){
                    var tween2 = _this.add.tween(_this.dragshape1hand);
                    tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                    var tween2 = _this.add.tween(_this.hand);
                    tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                    tween2.onComplete.add(function(){
                        _this.hand.visible = false;
                        _this.dragshape1hand.destroy();
                    },_this);
                },_this);
            },_this);
        },_this);
    },

    gotoFourthQuestion:function()
    {
        _this.questioNo = 4;

        _this.drag = 0;

        _this.drag1 = true;
        _this.drag2 = true;
        _this.drag3 = true;
        _this.drag4 = true;
        _this.drag5 = true;

        _this.shape = _this.add.sprite(460,50,'SG11_1_3rectangleanim');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(0.9,0.9);
        _this.shape.name = "rectangle";
        _this.shape.visible=false;

        _this.shapeGrp=_this.add.group();

        _this.shape1 = _this.add.sprite(370,300,'SG11_1_3rectangle1');
        _this.shape1.anchor.setTo(0.5);
        _this.shape1.scale.setTo(0.9,0.9); 
        _this.shape1.name = "shape1";
        _this.shape1.visible=false;

        _this.shape2 = _this.add.sprite(414,317,'SG11_1_3rectangle1');
        _this.shape2.anchor.setTo(0.5);
        _this.shape2.scale.setTo(0.9,0.9); 
        _this.shape2.name = "shape2";
        _this.shape2.visible=false;

        _this.shape3 = _this.add.sprite(458,334,'SG11_1_3rectangle1');
        _this.shape3.anchor.setTo(0.5);
        _this.shape3.scale.setTo(0.9,0.9); 
        _this.shape3.name = "shape3";
        _this.shape3.visible=false;

        _this.shape4 = _this.add.sprite(502,351,'SG11_1_3rectangle1');
        _this.shape4.anchor.setTo(0.5);
        _this.shape4.scale.setTo(0.9,0.9); 
        _this.shape4.name = "shape4";
        _this.shape4.visible=false;

        _this.shape5 = _this.add.sprite(546,368,'SG11_1_3rectangle1');
        _this.shape5.anchor.setTo(0.5);
        _this.shape5.scale.setTo(0.9,0.9); 
        _this.shape5.name = "shape5";
        _this.shape5.visible=false;

        _this.shapeGrp.add(_this.shape1);
        _this.shapeGrp.add(_this.shape2);
        _this.shapeGrp.add(_this.shape3);
        _this.shapeGrp.add(_this.shape4);
        _this.shapeGrp.add(_this.shape5);

        _this.dragGrp=_this.add.group();

        _this.dragshape1 = _this.add.sprite(810,380,'SG11_1_3rectangle1');
        _this.dragshape1.anchor.setTo(0.5);
        _this.dragshape1.scale.setTo(0.7,0.7); 
        _this.dragshape1.name = "dragshape1";
        _this.dragshape1.y = -1000;
        var tween = _this.add.tween(_this.dragshape1);
        tween.to({ y: 380 }, 2000,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape1);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape1);
                tween2.to({ y:380 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape1.inputEnabled = true;
        _this.dragshape1.input.useHandCursor = true;
        _this.dragshape1.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape2 = _this.add.sprite(770,430,'SG11_1_3rectangle1');
        _this.dragshape2.anchor.setTo(0.5);
        _this.dragshape2.scale.setTo(0.7,0.7); 
        _this.dragshape2.name = "dragshape2";
        _this.dragshape2.y = -1000;
        var tween = _this.add.tween(_this.dragshape2);
        tween.to({ y: 430 }, 2500,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape2);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape2);
                tween2.to({ y:430 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape2.inputEnabled = true;
        _this.dragshape2.input.useHandCursor = true;
        _this.dragshape2.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape3 = _this.add.sprite(850,450,'SG11_1_3rectangle1');
        _this.dragshape3.anchor.setTo(0.5);
        _this.dragshape3.scale.setTo(0.7,0.7); 
        _this.dragshape3.name = "dragshape3";
        _this.dragshape3.y = -1000;
        var tween = _this.add.tween(_this.dragshape3);
        tween.to({ y: 450 }, 2800,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape3);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape3);
                tween2.to({ y:450 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape3.inputEnabled = true;
        _this.dragshape3.input.useHandCursor = true;
        _this.dragshape3.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape4 = _this.add.sprite(120,400,'SG11_1_3rectangle1');
        _this.dragshape4.anchor.setTo(0.5);
        _this.dragshape4.scale.setTo(0.7,0.7);  
        _this.dragshape4.name = "dragshape4";
        _this.dragshape4.y = -1000;
        var tween = _this.add.tween(_this.dragshape4);
        tween.to({ y: 400 }, 2000,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape4);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape4);
                tween2.to({ y:400 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape4.inputEnabled = true;
        _this.dragshape4.input.useHandCursor = true;
        _this.dragshape4.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape5 = _this.add.sprite(210,440,'SG11_1_3rectangle1');
        _this.dragshape5.anchor.setTo(0.5);
        _this.dragshape5.scale.setTo(0.7,0.7); 
        _this.dragshape5.name = "dragshape5";
        _this.dragshape5.y = -1000;
        var tween = _this.add.tween(_this.dragshape5);
        tween.to({ y: 440 }, 2500,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape5);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape5);
                tween2.to({ y:440 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape5.inputEnabled = true;
        _this.dragshape5.input.useHandCursor = true;
        _this.dragshape5.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragGrp.add(_this.dragshape1);
        _this.dragGrp.add(_this.dragshape2);
        _this.dragGrp.add(_this.dragshape3);
        _this.dragGrp.add(_this.dragshape4);
        _this.dragGrp.add(_this.dragshape5);

        _this.graphicsGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(300,10, 200, 500);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "graphics1";

        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(300,10, 200, 500);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "graphics2";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(300,10, 200, 500);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "graphics3";
        
        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(300,10, 200, 500);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "graphics4";
        
        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(300,10, 200, 500);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "graphics5";

        _this.graphicsGrp.add(_this.graphics1);
        _this.graphicsGrp.add(_this.graphics2);
        _this.graphicsGrp.add(_this.graphics3);
        _this.graphicsGrp.add(_this.graphics4);
        _this.graphicsGrp.add(_this.graphics5);

        _this.number=5;

        _this.dragshape1hand = _this.add.sprite(210,440,'SG11_1_3rectangle1');
        _this.dragshape1hand.anchor.setTo(0.5);
        _this.dragshape1hand.scale.setTo(0.8,0.8);
        _this.dragshape1hand.y = -1000;
        var tween = _this.add.tween(_this.dragshape1hand);
        tween.to({ y: 440 }, 2500,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape1hand);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape1hand);
                tween2.to({ y:440 }, 1000,'Linear', true, 0);
            },_this);
        },_this);

        _this.time.events.add(5000, function(){  
            _this.hand = _this.add.sprite(210,440,'SG11_1_3hand');
            _this.time.events.add(500, function(){  
                var tween1 = _this.add.tween(_this.dragshape1hand);
                tween1.to({ x:460 , y:340}, 1500, 'Linear', true, 0);
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:460 , y:340}, 1500, 'Linear', true, 0);
                tween1.onComplete.add(function(){
                    var tween2 = _this.add.tween(_this.dragshape1hand);
                    tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                    var tween2 = _this.add.tween(_this.hand);
                    tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                    tween2.onComplete.add(function(){
                        _this.hand.visible = false;
                        _this.dragshape1hand.destroy();
                    },_this);
                },_this);
            },_this);
        },_this);


    },

    gotoFifthQuestion:function()
    {
        _this.questioNo = 5;

        _this.drag = 0;

        _this.drag1 = true;
        _this.drag2 = true;
        _this.drag3 = true;
        _this.drag4 = true;
        _this.drag5 = true;
        
        _this.shape = _this.add.sprite(480,20,'SG11_1_3squareanim');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(0.9,0.9);
        _this.shape.name = "square";
        _this.shape.visible=false;

        _this.shapeGrp=_this.add.group();

        _this.shape1 = _this.add.sprite(480,380,'SG11_1_3square1');
        _this.shape1.anchor.setTo(0.5);
        _this.shape1.scale.setTo(0.9,0.9); 
        _this.shape1.name = "shape1";
        _this.shape1.visible=false;

        _this.shape2 = _this.add.sprite(480,353,'SG11_1_3square1');
        _this.shape2.anchor.setTo(0.5);
        _this.shape2.scale.setTo(0.9,0.9); 
        _this.shape2.name = "shape2";
        _this.shape2.visible=false;

        _this.shape3 = _this.add.sprite(480,326,'SG11_1_3square1');
        _this.shape3.anchor.setTo(0.5);
        _this.shape3.scale.setTo(0.9,0.9); 
        _this.shape3.name = "shape3";
        _this.shape3.visible=false;

        _this.shape4 = _this.add.sprite(480,299,'SG11_1_3square1');
        _this.shape4.anchor.setTo(0.5);
        _this.shape4.scale.setTo(0.9,0.9); 
        _this.shape4.name = "shape4";
        _this.shape4.visible=false;

        _this.shape5 = _this.add.sprite(480,272,'SG11_1_3square1');
        _this.shape5.anchor.setTo(0.5);
        _this.shape5.scale.setTo(0.9,0.9); 
        _this.shape5.name = "shape5";
        _this.shape5.visible=false;

        _this.shapeGrp.add(_this.shape1);
        _this.shapeGrp.add(_this.shape2);
        _this.shapeGrp.add(_this.shape3);
        _this.shapeGrp.add(_this.shape4);
        _this.shapeGrp.add(_this.shape5);

        _this.dragGrp=_this.add.group();

        _this.dragshape1 = _this.add.sprite(800,460,'SG11_1_3square1');
        _this.dragshape1.anchor.setTo(0.5);
        _this.dragshape1.scale.setTo(0.8,0.8); 
        _this.dragshape1.name = "dragshape1";
        _this.dragshape1.y = -1000;
        var tween = _this.add.tween(_this.dragshape1);
        tween.to({ y: 460 }, 2000,'Linear', true, 0);
        _this.dragshape1.inputEnabled = true;
        _this.dragshape1.input.useHandCursor = true;
        _this.dragshape1.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape2 = _this.add.sprite(820,425,'SG11_1_3square1');
        _this.dragshape2.anchor.setTo(0.5);
        _this.dragshape2.scale.setTo(0.8,0.8); 
        _this.dragshape2.name = "dragshape2";
        _this.dragshape2.y = -1000;
        var tween = _this.add.tween(_this.dragshape2);
        tween.to({ y: 425 }, 2500,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape2);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape2);
                tween2.to({ y:425 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape2.inputEnabled = true;
        _this.dragshape2.input.useHandCursor = true;
        _this.dragshape2.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape3 = _this.add.sprite(140,460,'SG11_1_3square1');
        _this.dragshape3.anchor.setTo(0.5);
        _this.dragshape3.scale.setTo(0.8,0.8); 
        _this.dragshape3.name = "dragshape3";
        _this.dragshape3.y = -1000;
        var tween = _this.add.tween(_this.dragshape3);
        tween.to({ y: 460 }, 2000,'Linear', true, 0);
        _this.dragshape3.inputEnabled = true;
        _this.dragshape3.input.useHandCursor = true;
        _this.dragshape3.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape4 = _this.add.sprite(130,425,'SG11_1_3square1');
        _this.dragshape4.anchor.setTo(0.5);
        _this.dragshape4.scale.setTo(0.8,0.8);  
        _this.dragshape4.name = "dragshape4";
        _this.dragshape4.y = -1000;
        var tween = _this.add.tween(_this.dragshape4);
        tween.to({ y: 425 }, 2500,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape4);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape4);
                tween2.to({ y:425 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape4.inputEnabled = true;
        _this.dragshape4.input.useHandCursor = true;
        _this.dragshape4.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragshape5 = _this.add.sprite(160,400,'SG11_1_3square1');
        _this.dragshape5.anchor.setTo(0.5);
        _this.dragshape5.scale.setTo(0.8,0.8); 
        _this.dragshape5.name = "dragshape5";
        _this.dragshape5.y = -1000;
        var tween = _this.add.tween(_this.dragshape5);
        tween.to({ y: 400 }, 5000,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape5);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape5);
                tween2.to({ y:400 }, 1000,'Linear', true, 0);
            },_this);
        },_this);
        _this.dragshape5.inputEnabled = true;
        _this.dragshape5.input.useHandCursor = true;
        _this.dragshape5.events.onInputDown.add(_this.onDragStart,_this);

        _this.dragGrp.add(_this.dragshape1);
        _this.dragGrp.add(_this.dragshape2);
        _this.dragGrp.add(_this.dragshape3);
        _this.dragGrp.add(_this.dragshape4);
        _this.dragGrp.add(_this.dragshape5);

        _this.graphicsGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(300,10, 200, 500);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "graphics1";

        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(300,10, 200, 500);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "graphics2";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(300,10, 200, 500);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "graphics3";

        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(300,10, 200, 500);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "graphics4";

        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(300,10, 200, 500);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "graphics5";

        _this.graphicsGrp.add(_this.graphics1);
        _this.graphicsGrp.add(_this.graphics2);
        _this.graphicsGrp.add(_this.graphics3);
        _this.graphicsGrp.add(_this.graphics4);
        _this.graphicsGrp.add(_this.graphics5);

        _this.number=5;

        _this.dragshape1hand = _this.add.sprite(820,425,'SG11_1_3square1');
        _this.dragshape1hand.anchor.setTo(0.5);
        _this.dragshape1hand.scale.setTo(0.8,0.8);
        _this.dragshape1hand.y = -1000;
        var tween = _this.add.tween(_this.dragshape1hand);
        tween.to({ y: 425 }, 2500,'Linear', true, 0);
        tween.onComplete.add(function(){
            var tween1 = _this.add.tween(_this.dragshape1hand);
            tween1.to({ y:300 }, 1000,'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(_this.dragshape1hand);
                tween2.to({ y:425 }, 1000,'Linear', true, 0);
            },_this);
        },_this);

        _this.time.events.add(6500, function(){  
            _this.hand = _this.add.sprite(820,425,'SG11_1_3hand');
            _this.time.events.add(500, function(){  
                var tween1 = _this.add.tween(_this.dragshape1hand);
                tween1.to({ x:460 , y:340}, 1500, 'Linear', true, 0);
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:460 , y:340}, 1500, 'Linear', true, 0);
                tween1.onComplete.add(function(){
                    var tween2 = _this.add.tween(_this.dragshape1hand);
                    tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                    var tween2 = _this.add.tween(_this.hand);
                    tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                    tween2.onComplete.add(function(){
                        _this.hand.visible = false;
                        _this.dragshape1hand.destroy();
                    },_this);
                },_this);
            },_this);
        },_this);

    },


    checkOverlap:function(spriteA, spriteB) 
    {

        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);

    },  


    removeCelebration:function()
    {
        //console.log("removeCeleb");
        celebration = false;
        //console.log("no"+_this.no11);
        _this.correct=0;
        _this.count=0;
        _this.correctflag=0;
        _this.no11++;

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        _this.graphicsGrp.destroy();

        if(_this.no11<5)
        {

            _this.shape.destroy();
            _this.getQuestion();

        }

        else
        {

            _this.stopvoice();
            _this.state.start('sg11_1_3Score');
        }
    },

    correctAns:function(target)
    {


        _this.stopvoice();
        // target.events.onInputDown.removeAll();
        _this.speaker.inputEnabled=false;
        // _this.rightmark.inputEnabled=false;

        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
            { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "Click", 
            res_id: target,
            access_token: window.acctkn 
        } 

        // absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }

        if(_this.timer1)
        {
            _this.timer1.stop();
            _this.timer1 = null;
        }
        _this.currentTime = window.timeSaveFunc();
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
        //_this.sceneCount++;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);


        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        //console.log(_this.starAnim);

        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();
        _this.count1++;

        _this.speaker.inputEnabled=false;
        _this.celebration = true;
        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();

        //        
        //                 _this.tween5 = this.add.tween(_this.grid.scale);
        //                 _this.tween5.to({ x:1.1, y:1.1}, 300,'Linear', true, 0);
        //                 _this.time.events.add(1300, function(){
        //                  var killTween = this.add.tween(_this.grid.scale);
        //                  killTween.to({x:0,y:0}, 600, Phaser.Easing.Linear.None);
        //                  killTween.onComplete.addOnce(function(){
        //                 _this.grid.kill();
        //                 }, this);
        //                 killTween.start();
        //                },_this);


        _this.time.events.add(4000, _this.removeCelebration, _this);	

    },



    wrongAns:function(target)
    {
         _this.noofAttempts++;
        _this.stopvoice();

        _this.wmusic = _this.add.audio('waudio');
        _this.wmusic.play();


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
            case 5: if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg11.1.3/English/sg11.1.3E.mp3");
            }
                else if(window.languageSelected=="Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg11.1.3/Hindi/sg11.1.3H.mp3");
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg11.1.3/Kannada/sg11.1.3K.mp3");
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg11.1.3/Gujrati/sg11.1.3.mp3");
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg11.1.3/Marathi/sg11.1.3.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg11.1.3/Telugu/sg11.1.3.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg11.1.3/Tamil/sg11.1.3.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg11.1.3/Urdu/sg11.1.3.mp3");
                    }
                else
                {
                     _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg11.1.3/Odiya/sg11.1.3O.mp3");
                }
                break;


        }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
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
    }         


};






















