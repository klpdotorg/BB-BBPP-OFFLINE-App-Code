Game.sg8_2_2level1=function(){};

Game.sg8_2_2level1.prototype ={
    
    init:function(game)
    {
        _this= this;
        telInitializer.gameIdInit("SG8_2_2",gradeSelected);
        
    },

    preload:function(game){
        if(!window.grade2SG6){

            window.grade2SG6 = true;

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

            this.load.atlas('SG3_1_1rightmark',window.baseUrl+'assets/gradeAssets/sg3.1.1/rightmark.png',window.baseUrl+'json/gradeJson/sg3.1.1/rightmark.json');
        

            //game assets.
        this.load.atlas('8_2_2angle1',window.baseUrl+'assets/gradeAssets/sg8.2.2/angle1.png',window.baseUrl+'json/gradeJson/sg8.2.2/angle1.json');
        this.load.atlas('8_2_2angle2',window.baseUrl+'assets/gradeAssets/sg8.2.2/angle2.png',window.baseUrl+'json/gradeJson/sg8.2.2/angle2.json');
        this.load.atlas('8_2_2angle3',window.baseUrl+'assets/gradeAssets/sg8.2.2/angle3.png',window.baseUrl+'json/gradeJson/sg8.2.2/angle3.json');
        this.load.atlas('8_2_2angle4',window.baseUrl+'assets/gradeAssets/sg8.2.2/angle4.png',window.baseUrl+'json/gradeJson/sg8.2.2/angle4.json');
        this.load.atlas('8_2_2angle5',window.baseUrl+'assets/gradeAssets/sg8.2.2/angle5.png',window.baseUrl+'json/gradeJson/sg8.2.2/angle5.json');
        this.load.atlas('8_2_2angle6',window.baseUrl+'assets/gradeAssets/sg8.2.2/angle6.png',window.baseUrl+'json/gradeJson/sg8.2.2/angle6.json');
        this.load.atlas('8_2_2angle7',window.baseUrl+'assets/gradeAssets/sg8.2.2/angle7.png',window.baseUrl+'json/gradeJson/sg8.2.2/angle7.json');
        this.load.atlas('8_2_2angle8',window.baseUrl+'assets/gradeAssets/sg8.2.2/angle8.png',window.baseUrl+'json/gradeJson/sg8.2.2/angle8.json');
        this.load.image('8_2_2eraser',window.baseUrl+'assets/gradeAssets/sg8.2.2/eraser.png');
        this.load.image('8_2_2white',window.baseUrl+'assets/gradeAssets/sg8.2.2/white box.png');
        this.load.atlas('8_2_2box',window.baseUrl+'assets/gradeAssets/sg8.2.2/box.png',window.baseUrl+'json/gradeJson/sg8.2.2/box.json');
        this.load.atlas('8_2_2tick',window.baseUrl+'assets/gradeAssets/sg8.2.2/tickMark.png',window.baseUrl+'json/gradeJson/sg8.2.2/tickMark.json');
        this.load.image('sg8_2_2dot',window.baseUrl+'assets/gradeAssets/sg8.2.2/dot.png');
        this.load.image('8_2_2dot1',window.baseUrl+'assets/gradeAssets/sg8.2.2/dot1.png');
        this.load.image('8_2_2dot2',window.baseUrl+'assets/gradeAssets/sg8.2.2/dot2.png');
        this.load.image('8_2_2dot3',window.baseUrl+'assets/gradeAssets/sg8.2.2/dot3.png');
        this.load.image('8_2_2dot4',window.baseUrl+'assets/gradeAssets/sg8.2.2/dot4.png');
        this.load.image('8_2_2dot5',window.baseUrl+'assets/gradeAssets/sg8.2.2/dot5.png');
        this.load.image('8_2_2dot6',window.baseUrl+'assets/gradeAssets/sg8.2.2/dot6.png');
        this.load.image('8_2_2shape1',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape1.png');
        this.load.image('8_2_2shape2',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape2.png');
        this.load.image('8_2_2shape3',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape3.png');
        this.load.image('8_2_2shape4',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape4.png');
        this.load.image('8_2_2shape5',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape5.png');
        this.load.image('8_2_2shape6',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape6.png');
        this.load.image('8_2_2shape7',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape7.png');
        this.load.image('8_2_2shape8',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape8.png');
        this.load.image('8_2_2shape9',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape9.png');
        this.load.image('sg8_2_2shape10',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape10.png');
        this.load.image('sg8_2_2shape11',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape11.png');
        this.load.image('sg8_2_2shape12',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape12.png');
        this.load.image('sg8_2_2shape13',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape13.png');
        this.load.image('sg8_2_2shape14',window.baseUrl+'assets/gradeAssets/sg8.2.2/shape14.png');
        this.load.atlas('8_2_2yellow',window.baseUrl+'assets/gradeAssets/sg8.2.2/yellow dot.png',window.baseUrl+'json/gradeJson/sg8.2.2/yellow dot.json'); 



    }

    },
    
	create:function(game)
    {
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.correctans=0;
        _this.questionNo = 0;
        _this.background;
        _this.wmusic;
        _this.wrong = true;
        _this.count;
        _this.clickSound;
        _this.change = 0;
        _this.starsGroup;
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        _this.no11 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;

        _this.sceneCount = 0;

        _this.a1 = true;
        
        _this.qArrays = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays2 = new Array();
        
        _this.qArrays1 = [1,2,3,4,5];
        _this.qArrays2 = [6,7,8,9];
        
        //_this.qArrays1 = _this.shuffle(_this.qArrays1);
        _this.qArrays2 = _this.shuffle(_this.qArrays2);
        
        for(var i=0;i<3;i++)
        {
            _this.qArrays.push(_this.qArrays1[i]);
        }
        for(var j=0;j<3;j++)
        {
            _this.qArrays.push(_this.qArrays2[j]);
        }
        
       // _this.qArrays = new Array();
        
        //_this.qArrays = [9,1,2,3,4,5,6,7,8,9];
        
       // _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'commonBg2');
        
        _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
        _this.navBar.scale.setTo(1,1);
        
        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){ 
               _this.backbtn.events.onInputDown.removeAll();
               _this.stopVoice();
               _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
               _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this,0,1,2);
        
        _this.speakerbtn = _this.add.sprite(600,5,'grade11_speaker');
        _this.speakerbtn.events.onInputDown.add(function()
        {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

            _this.getVoice();

        },_this);
        
        _this.timebg = _this.add.sprite(305,6,'Level42C_timer');
       // _this.topicOutline = _this.add.sprite(70,5,'topicOutline');
       // _this.practice = _this.add.sprite(78,10,'practice');
        //_this.topic = _this.add.sprite(165,10,'topic');
        
        _this.timeDisplay = _this.add.text(331,22,_this.minutes + ' : '+ _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'myfont';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';
        
        _this.generateStarsForTheScene(6);
        _this.getQuestion();
        _this.getVoice();
       
    },
    
    
    updateTimer:function() 
    {
        _this.counterForTimer++;
        //console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes = _this.minutes+1;
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
        _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
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
    	console.log("getQuestion :"+_this.no11);
        console.log("getQuestion :"+_this.qArrays[_this.no11]);
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        _this.sceneCount++;

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
        {
            _this.AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function()
        {
            _this.updateTimer();
        }, _this);
        
        _this.timer1.start();
        
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
       
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        _this.questionid = 1;
        
        //_this.no11 = 0;
        
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
            case 9: _this.gotoNinethQuestion();
                    break;
            
    	}
        
    },
    
     allboxes:function(target){ 
        
        _this.white = _this.add.sprite(360,270,'8_2_2white');
        _this.white.anchor.setTo(0.5);
        
        _this.white1 = _this.add.sprite(690,270,'8_2_2white');
        _this.white1.anchor.setTo(0.5);
        
        _this.objGrp = _this.add.group();
        
        _this.box1 = _this.add.sprite(70,163,'8_2_2box');
        _this.box1.anchor.setTo(0.5);
        _this.box1.scale.setTo(1.1,0.98);
        _this.box1.name = 'box1';
        _this.box1.frame = 1;
       //_this.box1.inputEnabled = true;
       // _this.box1.events.onInputDown.add(_this.selected,_this);
        
        _this.box2 = _this.add.sprite(150,163,'8_2_2box');
        _this.box2.anchor.setTo(0.5);
        _this.box2.scale.setTo(1.1,0.98);
        _this.box2.name = 'box2';
        _this.box2.frame = 1;
        //_this.box2.inputEnabled = true;
       // _this.box2.events.onInputDown.add(_this.selected,_this);
        
        _this.box3 = _this.add.sprite(70,235,'8_2_2box');
        _this.box3.anchor.setTo(0.5);
        _this.box3.scale.setTo(1.1,0.98);
        _this.box3.name = 'box3';
        _this.box3.frame = 1;
        //_this.box3.inputEnabled = true;
       // _this.box3.events.onInputDown.add(_this.selected,_this);
     
        _this.box4 = _this.add.sprite(150,235,'8_2_2box');
        _this.box4.anchor.setTo(0.5);
        _this.box4.scale.setTo(1.1,0.98);
        _this.box4.name = 'box4';
        _this.box4.frame = 1;
        //_this.box4.inputEnabled = true;
       // _this.box4.events.onInputDown.add(_this.selected,_this);
        
        _this.box5 = _this.add.sprite(70,307,'8_2_2box');
        _this.box5.anchor.setTo(0.5);
        _this.box5.scale.setTo(1.1,0.98);
        _this.box5.name = 'box5';
        _this.box5.frame = 1;
       // _this.box5.inputEnabled = true;
       // _this.box5.events.onInputDown.add(_this.selected,_this);
     
        _this.box6 = _this.add.sprite(150,307,'8_2_2box');
        _this.box6.anchor.setTo(0.5);
        _this.box6.scale.setTo(1.1,0.98);
        _this.box6.name = 'box6';
        _this.box6.frame = 1;
       // _this.box6.inputEnabled = true;
       // _this.box6.events.onInputDown.add(_this.selected,this);
      
        _this.box7 = _this.add.sprite(70,380,'8_2_2box');
        _this.box7.anchor.setTo(0.5);
        _this.box7.scale.setTo(1.1,0.98);
        _this.box7.name = 'box7';
        _this.box7.frame = 1;
       // _this.box7.inputEnabled = true;
       // _this.box7.events.onInputDown.add(_this.selected,this);
  
        _this.box8 = _this.add.sprite(150,380,'8_2_2box');
        _this.box8.anchor.setTo(0.5);
        _this.box8.scale.setTo(1.1,0.98);
        _this.box8.name = 'box8';
        _this.box8.frame = 1;
      //  _this.box8.inputEnabled = true;
       // _this.box8.events.onInputDown.add(_this.selected,_this);
  
        /*_this.box9 = _this.add.sprite(70,462,'8_2_2box');
        _this.box9.anchor.setTo(0.5);
        _this.box9.name = 'box9';
        _this.box9.frame = 1;*/
       // _this.box9.inputEnabled = true;
       // _this.box9.events.onInputDown.add(_this.selected,_this);
        
        _this.objGrp.add(_this.white);
        _this.objGrp.add(_this.white1);
        _this.objGrp.add(_this.box1);
        _this.objGrp.add(_this.box2);
        _this.objGrp.add(_this.box3);
        _this.objGrp.add(_this.box4);
        _this.objGrp.add(_this.box5);
        _this.objGrp.add(_this.box6);
        _this.objGrp.add(_this.box7);
        _this.objGrp.add(_this.box8);
        //_this.objGrp.add(_this.box9);
        
    },

    visiblebox:function()
    {
        _this.boxGrp = _this.add.group();
        
        _this.a1 = _this.add.sprite(75,167,'8_2_2angle1');
        _this.a1.anchor.setTo(0.5);
        _this.a1.scale.setTo(1.1,0.9);

        _this.a2 = _this.add.sprite(150,165,'8_2_2angle2');
        _this.a2.anchor.setTo(0.5);
        _this.a2.scale.setTo(1.2,1.2);
        
        _this.a3 = _this.add.sprite(70,237,'8_2_2angle3');
        _this.a3.anchor.setTo(0.5);
        _this.a3.scale.setTo(1.2,1.2);
       
        _this.a4 = _this.add.sprite(150,237,'8_2_2angle4');
        _this.a4.anchor.setTo(0.5);
        _this.a4.scale.setTo(1.2,1.2);
       
        _this.a5 = _this.add.sprite(70,309,'8_2_2angle5');
        _this.a5.anchor.setTo(0.5);
        _this.a5.scale.setTo(1.2,1.2);
       
        _this.a6 = _this.add.sprite(150,308,'8_2_2angle6');
        _this.a6.anchor.setTo(0.5);
        _this.a6.scale.setTo(1.2,1.2);
        
        _this.a7 = _this.add.sprite(75,385,'8_2_2angle7');
        _this.a7.anchor.setTo(0.5);
        _this.a7.scale.setTo(1.1,1);
        
        _this.a8 = _this.add.sprite(148,380,'8_2_2angle8');
        _this.a8.anchor.setTo(0.5);
        _this.a8.scale.setTo(1.2,1.2);
        
       // _this.eraser = _this.add.sprite(70,460,'8_2_2eraser');
       // _this.eraser.anchor.setTo(0.5);
        
        _this.boxGrp.add(_this.a1);
        _this.boxGrp.add(_this.a2);
        _this.boxGrp.add(_this.a3);
        _this.boxGrp.add(_this.a4);
        _this.boxGrp.add(_this.a5);
        _this.boxGrp.add(_this.a6);
        _this.boxGrp.add(_this.a7);
        _this.boxGrp.add(_this.a8);
       // _this.boxGrp.add(_this.eraser);
        
    },
    
    gotoFirstQuestion:function()
    {
       console.log("gotoFirstQuestion");
       //_this.getVoice();
       _this.questionNo=1;
       _this.graphicsGrp = _this.add.group();
        
        _this.allboxes(); 
        _this.visiblebox();
    
        _this.shape = _this.add.sprite(360,270,'8_2_2shape1');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(1.2,1.2);
        
        _this.dot = _this.add.sprite(690,270,'8_2_2dot1');
        _this.dot.anchor.setTo(0.5);
        _this.dot.scale.setTo(1.2,1.2);
        
        //_this.tick = _this.add.sprite(905,280,'8_2_2tick');
       // _this.tick.anchor.setTo(0.5);
       // _this.tick.inputEnabled = true;
      //  _this.tick.input.useHandCursor = true;
       
        
        _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
        _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
        //_this.targetchild3.visible = false;
        
        _this.targetchild4 = _this.add.graphics(-10, -10);
        _this.targetchild4.lineStyle(2, 0x0000FF, 0);
        _this.targetchild4.drawRect(0, 0, 20, 20);
        //_this.targetchild4.visible = false;
        
        _this.targetchild5 = _this.add.graphics(-10, -10);
        _this.targetchild5.lineStyle(2, 0x0000FF, 0);
        _this.targetchild5.drawRect(0, 0, 20, 20);
        //_this.targetchild5.visible = false;
        
        _this.targetchild6 = _this.add.graphics(-10, -10);
        _this.targetchild6.lineStyle(2, 0x0000FF, 0);
        _this.targetchild6.drawRect(0, 0, 20, 20);
        //_this.targetchild6.visible = false;
        
        _this.targetchild7 = _this.add.graphics(-10, -10);
        _this.targetchild7.lineStyle(2, 0x0000FF, 0);
        _this.targetchild7.drawRect(0, 0, 20, 20);
        //_this.targetchild7.visible = false;
        
        _this.targetchild8 = _this.add.graphics(-10, -10);
        _this.targetchild8.lineStyle(2, 0x0000FF, 0);
        _this.targetchild8.drawRect(0, 0, 20, 20);
       // _this.targetchild8.visible = false;
        
       /* _this.targetchild9 = _this.add.graphics(-10, -10);
        _this.targetchild9.lineStyle(2, 0x0000FF, 0);
        _this.targetchild9.drawRect(0, 0, 20, 20);
       // _this.targetchild9.visible = false;*/
        
        _this.angle1 = _this.add.sprite(75,167,'8_2_2angle1');
        _this.angle1.anchor.setTo(0.5);
        _this.angle1.scale.setTo(1.1,0.9);
        _this.angle1.xpos = 75;
        _this.angle1.ypos = 167;
        _this.angle1.name = 'wrongAns';
        _this.angle1.inputEnabled = true;
        _this.angle1.addChild(_this.targetchild1);
        _this.angle1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle2 = _this.add.sprite(150,165,'8_2_2angle2');
        _this.angle2.anchor.setTo(0.5);
        _this.angle2.scale.setTo(1.2,1.2);
        _this.angle2.xpos = 150;
        _this.angle2.ypos = 165;
        _this.angle2.name = 'angle2';
        _this.angle2.inputEnabled = true;
        _this.angle2.addChild(_this.targetchild2);
        _this.angle2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle3 = _this.add.sprite(70,237,'8_2_2angle3');
        _this.angle3.anchor.setTo(0.5);
        _this.angle3.scale.setTo(1.2,1.2);
        _this.angle3.xpos = 70;
        _this.angle3.ypos = 237;
        _this.angle3.name = 'angle3';
        _this.angle3.inputEnabled = true;
        _this.angle3.addChild(_this.targetchild3);
        _this.angle3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle4 = _this.add.sprite(150,237,'8_2_2angle4');
        _this.angle4.anchor.setTo(0.5);
        _this.angle4.scale.setTo(1.2,1.2);
        _this.angle4.xpos = 150;
        _this.angle4.ypos = 237;
        _this.angle4.name = 'angle4';
        _this.angle4.inputEnabled = true;
        _this.angle4.addChild(_this.targetchild4);
        _this.angle4.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle5 = _this.add.sprite(70,309,'8_2_2angle5');
        _this.angle5.anchor.setTo(0.5);
        _this.angle5.scale.setTo(1.2,1.2);
        _this.angle5.xpos = 70;
        _this.angle5.ypos = 309;
        _this.angle5.name = 'angle5';
        _this.angle5.inputEnabled = true;
        _this.angle5.addChild(_this.targetchild5);
        _this.angle5.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle6 = _this.add.sprite(150,308,'8_2_2angle6');
        _this.angle6.anchor.setTo(0.5);
        _this.angle6.scale.setTo(1.2,1.2);
        _this.angle6.xpos = 150;
        _this.angle6.ypos = 308;
        _this.angle6.name = 'angle6';
        _this.angle6.inputEnabled = true;
        _this.angle6.addChild(_this.targetchild6);
        _this.angle6.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle7 = _this.add.sprite(75,385,'8_2_2angle7');
        _this.angle7.anchor.setTo(0.5);
        _this.angle7.scale.setTo(1.1,1);
        _this.angle7.xpos = 75;
        _this.angle7.ypos = 385;
        _this.angle7.name = 'angle7';
        _this.angle7.inputEnabled = true;
        _this.angle7.addChild(_this.targetchild7);
        _this.angle7.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle8 = _this.add.sprite(148,380,'8_2_2angle8');
        _this.angle8.anchor.setTo(0.5);
        _this.angle8.scale.setTo(1.2,1.2);
        _this.angle8.xpos = 148;
        _this.angle8.ypos = 380;
        _this.angle8.name = 'angle8';
        _this.angle8.inputEnabled = true;
        _this.angle8.addChild(_this.targetchild8);
        _this.angle8.events.onInputDown.add(_this.onDragstart,_this);
        
       /* _this.eraser = _this.add.sprite(70,460,'8_2_2eraser');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.name = 'eraser';
        _this.eraser.xpos = 70;
        _this.eraser.ypos = 460;
        _this.eraser.inputEnabled = true;
        _this.eraser.addChild(_this.targetchild9);
        _this.eraser.events.onInputDown.add(_this.onDragstart,_this);*/
        
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(10, 10, 10, 10);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(10, 10, 10, 10);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(10, 10, 10, 10);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(10, 10, 10, 10);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(10, 10, 10, 10);
        _this.child5.visible = false;
        
        _this.child6 = _this.add.graphics(-10, -10);
        _this.child6.lineStyle(2, 0x0000FF, 1);
        _this.child6.drawRect(10, 10, 10, 10);
        _this.child6.visible = false;
        
        _this.child7 = _this.add.graphics(-10, -10);
        _this.child7.lineStyle(2, 0x0000FF, 1);
        _this.child7.drawRect(10, 10, 10, 10);
        _this.child7.visible = false;
        
        _this.child8 = _this.add.graphics(-10, -10);
        _this.child8.lineStyle(2, 0x0000FF, 1);
        _this.child8.drawRect(10, 10, 10, 10);
        _this.child8.visible = false;
        
        _this.child9 = _this.add.graphics(-10, -10);
        _this.child9.lineStyle(2, 0x0000FF, 1);
        _this.child9.drawRect(10, 10, 10, 10);
        _this.child9.visible = false;
        
        _this.child10 = _this.add.graphics(-10, -10);
        _this.child10.lineStyle(2, 0x0000FF, 1);
        _this.child10.drawRect(10, 10, 10, 10);
        _this.child10.visible = false;
        
        _this.child11 = _this.add.graphics(-10, -10);
        _this.child11.lineStyle(2, 0x0000FF, 1);
        _this.child11.drawRect(10, 10, 10, 10);
        _this.child11.visible = false;
        
        _this.child12 = _this.add.graphics(-10, -10);
        _this.child12.lineStyle(2, 0x0000FF, 1);
        _this.child12.drawRect(10, 10, 10, 10);
        _this.child12.visible = false;
        
        _this.child13 = _this.add.graphics(-10, -10);
        _this.child13.lineStyle(2, 0x0000FF, 1);
        _this.child13.drawRect(10, 10, 10, 10);
        _this.child13.visible = false;
        
        _this.child14 = _this.add.graphics(-10, -10);
        _this.child14.lineStyle(2, 0x0000FF, 1);
        _this.child14.drawRect(10, 10, 10, 10);
        _this.child14.visible = false;
        
        _this.child15 = _this.add.graphics(-10, -10);
        _this.child15.lineStyle(2, 0x0000FF, 1);
        _this.child15.drawRect(10, 10, 10, 10);
        _this.child15.visible = false;
        
        _this.child16 = _this.add.graphics(-10, -10);
        _this.child16.lineStyle(2, 0x0000FF, 1);
        _this.child16.drawRect(10, 10, 10, 10);
        _this.child16.visible = false;
        
        _this.child17 = _this.add.graphics(-10, -10);
        _this.child17.lineStyle(2, 0x0000FF, 1);
        _this.child17.drawRect(10, 10, 10, 10);
        _this.child17.visible = false;
        
        _this.child18 = _this.add.graphics(-10, -10);
        _this.child18.lineStyle(2, 0x0000FF, 1);
        _this.child18.drawRect(10, 10, 10, 10);
        _this.child18.visible = false;
        
        _this.child19 = _this.add.graphics(-10, -10);
        _this.child19.lineStyle(2, 0x0000FF, 1);
        _this.child19.drawRect(10, 10, 10, 10);
        _this.child19.visible = false;
        
        _this.child20 = _this.add.graphics(-10, -10);
        _this.child20.lineStyle(2, 0x0000FF, 1);
        _this.child20.drawRect(10, 10, 10, 10);
        _this.child20.visible = false;
        
        _this.angles21 = _this.add.sprite(712,176,'8_2_2angle2');
        _this.angles21.anchor.setTo(0.5);
        _this.angles21.scale.setTo(1.2,1.2);
        _this.angles21.name = 'angle2';
        _this.angles21.inputEnabled = true;
        _this.angles21.addChild(_this.child1);
        _this.angles21.visible = false;
        
        _this.angles22 = _this.add.sprite(789,252,'8_2_2angle2');
        _this.angles22.anchor.setTo(0.5);
        _this.angles22.scale.setTo(1.2,1.2);
        _this.angles22.name = 'angle2';
        _this.angles22.inputEnabled = true;
        _this.angles22.addChild(_this.child2);
        _this.angles22.visible = false;
        
        _this.angles31 = _this.add.sprite(673,215,'8_2_2angle3');
        _this.angles31.anchor.setTo(0.5);
        _this.angles31.scale.setTo(1.2,1.2);
        _this.angles31.name = 'angle3';
        _this.angles31.inputEnabled = true;
        _this.angles31.addChild(_this.child3);
        _this.angles31.visible = false;
        
        _this.angles32 = _this.add.sprite(712,253,'8_2_2angle3');
        _this.angles32.anchor.setTo(0.5);
        _this.angles32.scale.setTo(1.2,1.2);
        _this.angles32.name = 'angle3';
        _this.angles32.inputEnabled = true;
        _this.angles32.addChild(_this.child4);
        _this.angles32.visible = false;
        
        _this.angles33 = _this.add.sprite(749,290,'8_2_2angle3');
        _this.angles33.anchor.setTo(0.5);
        _this.angles33.scale.setTo(1.2,1.2);
        _this.angles33.name = 'angle3';
        _this.angles33.inputEnabled = true;
        _this.angles33.addChild(_this.child5);
        _this.angles33.visible = false;
        
        _this.angles34 = _this.add.sprite(712,330,'8_2_2angle3');
        _this.angles34.anchor.setTo(0.5);
        _this.angles34.scale.setTo(1.2,1.2);
        _this.angles34.name = 'angle3';
        _this.angles34.inputEnabled = true;
        _this.angles34.addChild(_this.child6);
        _this.angles34.visible = false;
        
        _this.angles35 = _this.add.sprite(674,292,'8_2_2angle3');
        _this.angles35.anchor.setTo(0.5);
        _this.angles35.scale.setTo(1.2,1.2);
        _this.angles35.name = 'angle3';
        _this.angles35.inputEnabled = true;
        _this.angles35.addChild(_this.child7);
        _this.angles35.visible = false;
        
        _this.angles36 = _this.add.sprite(637,255,'8_2_2angle3');
        _this.angles36.anchor.setTo(0.5);
        _this.angles36.scale.setTo(1.2,1.2);
        _this.angles36.name = 'angle3';
        _this.angles36.inputEnabled = true;
        _this.angles36.addChild(_this.child8);
        _this.angles36.visible = false;
        
        _this.angles41 = _this.add.sprite(673,176,'8_2_2angle4');
        _this.angles41.anchor.setTo(0.5);
        _this.angles41.scale.setTo(1.2,1.2);
        _this.angles41.name = 'angle4';
        _this.angles41.inputEnabled = true;
        _this.angles41.addChild(_this.child9);
        _this.angles41.visible = false;
        
        _this.angles42 = _this.add.sprite(595,253,'8_2_2angle4');
        _this.angles42.anchor.setTo(0.5);
        _this.angles42.scale.setTo(1.2,1.2);
        _this.angles42.name = 'angle4';
        _this.angles42.inputEnabled = true;
        _this.angles42.addChild(_this.child10);
        _this.angles42.visible = false;
        
        _this.angles51 = _this.add.sprite(636,290,'8_2_2angle5');
        _this.angles51.anchor.setTo(0.5);
        _this.angles51.scale.setTo(1.2,1.2);
        _this.angles51.name = 'angle5';
        _this.angles51.inputEnabled = true;
        _this.angles51.addChild(_this.child11);
        _this.angles51.visible = false;
        
        _this.angles52 = _this.add.sprite(673,253,'8_2_2angle5');
        _this.angles52.anchor.setTo(0.5);
        _this.angles52.scale.setTo(1.2,1.2);
        _this.angles52.name = 'angle5';
        _this.angles52.inputEnabled = true;
        _this.angles52.addChild(_this.child12);
        _this.angles52.visible = false;
        
        _this.angles53 = _this.add.sprite(712,214,'8_2_2angle5');
        _this.angles53.anchor.setTo(0.5);
        _this.angles53.scale.setTo(1.2,1.2);
        _this.angles53.name = 'angle5';
        _this.angles53.inputEnabled = true;
        _this.angles53.addChild(_this.child13);
        _this.angles53.visible = false;
        
        _this.angles54 = _this.add.sprite(672,330,'8_2_2angle5');
        _this.angles54.anchor.setTo(0.5);
        _this.angles54.scale.setTo(1.2,1.2);
        _this.angles54.name = 'angle5';
        _this.angles54.inputEnabled = true;
        _this.angles54.addChild(_this.child14);
        _this.angles54.visible = false;
        
        _this.angles55 = _this.add.sprite(712,290,'8_2_2angle5');
        _this.angles55.anchor.setTo(0.5);
        _this.angles55.scale.setTo(1.2,1.2);
        _this.angles55.name = 'angle5';
        _this.angles55.inputEnabled = true;
        _this.angles55.addChild(_this.child15);
        _this.angles55.visible = false;
        
        _this.angles56 = _this.add.sprite(750,253,'8_2_2angle5');
        _this.angles56.anchor.setTo(0.5);
        _this.angles56.scale.setTo(1.2,1.2);
        _this.angles56.name = 'angle5';
        _this.angles56.inputEnabled = true;
        _this.angles56.addChild(_this.child16);
        _this.angles56.visible = false;
        
        _this.angles61 = _this.add.sprite(595,292,'8_2_2angle6');
        _this.angles61.anchor.setTo(0.5);
        _this.angles61.scale.setTo(1.2,1.2);
        _this.angles61.name = 'angle6';
        _this.angles61.inputEnabled = true;
        _this.angles61.addChild(_this.child17);
        _this.angles61.visible = false;
        
        _this.angles62 = _this.add.sprite(672,368,'8_2_2angle6');
        _this.angles62.anchor.setTo(0.5);
        _this.angles62.scale.setTo(1.2,1.2);
        _this.angles62.name = 'angle6';
        _this.angles62.inputEnabled = true;
        _this.angles62.addChild(_this.child18);
        _this.angles62.visible = false;
        
        _this.angles81 = _this.add.sprite(789,291,'8_2_2angle8'); 
        _this.angles81.anchor.setTo(0.5);
        _this.angles81.scale.setTo(1.2,1.2);
        _this.angles81.name = 'angle8';
        _this.angles81.inputEnabled = true;
        _this.angles81.addChild(_this.child19);
        _this.angles81.visible = false;
        
        _this.angles82 = _this.add.sprite(712,369,'8_2_2angle8');
        _this.angles82.anchor.setTo(0.5);
        _this.angles82.scale.setTo(1.2,1.2);
        _this.angles82.name = 'angle8';
        _this.angles82.inputEnabled = true;
        _this.angles82.addChild(_this.child20);
        _this.angles82.visible = false;
        
        _this.objGrp1.add(_this.angle1);
        _this.objGrp1.add(_this.angle2);
        _this.objGrp1.add(_this.angle3);
        _this.objGrp1.add(_this.angle4);
        _this.objGrp1.add(_this.angle5);
        _this.objGrp1.add(_this.angle6);
        _this.objGrp1.add(_this.angle7);
        _this.objGrp1.add(_this.angle8);
        //_this.objGrp1.add(_this.eraser);
        
        _this.objGrp2.add(_this.angles21);
        _this.objGrp2.add(_this.angles22);
        _this.objGrp2.add(_this.angles31);
        _this.objGrp2.add(_this.angles32);
        _this.objGrp2.add(_this.angles33);
        _this.objGrp2.add(_this.angles34);
        _this.objGrp2.add(_this.angles35);
        _this.objGrp2.add(_this.angles36);
        _this.objGrp2.add(_this.angles41);
        _this.objGrp2.add(_this.angles42);
        _this.objGrp2.add(_this.angles51);
        _this.objGrp2.add(_this.angles52);
        _this.objGrp2.add(_this.angles53);
        _this.objGrp2.add(_this.angles54);
        _this.objGrp2.add(_this.angles55);
        _this.objGrp2.add(_this.angles56);
        _this.objGrp2.add(_this.angles61);
        _this.objGrp2.add(_this.angles62);
        _this.objGrp2.add(_this.angles81);
        _this.objGrp2.add(_this.angles82);
    
       /* _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        _this.graphics5 = _this.add.graphics(100, 100);
        _this.graphics6 = _this.add.graphics(100, 100);
        _this.graphics7 = _this.add.graphics(100, 100);
        _this.graphics8 = _this.add.graphics(100, 100);
        /*_this.graphics9 = _this.add.graphics(100, 100);
        _this.graphics10 = _this.add.graphics(100, 100);
        _this.graphics11 = _this.add.graphics(100, 100);
        _this.graphics12 = _this.add.graphics(100, 100);
        _this.graphics13 = _this.add.graphics(100, 100);
        _this.graphics14 = _this.add.graphics(100, 100);
        _this.graphics15 = _this.add.graphics(100, 100);
        _this.graphics16 = _this.add.graphics(100, 100);
        _this.graphics = _this.add.graphics(100, 100);*/
        
        // draw a circle
        /*_this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawCircle(590, 55, 12, 0);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawCircle(629, 93, 12, 0);
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawCircle(551, 93, 12, 0);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawCircle(590, 132, 12, 0);
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawCircle(628, 170, 12, 0);
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawCircle(667, 132, 12, 0);
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawCircle(706, 170, 12, 0);
        _this.graphics8.lineStyle(2, 0x0000FF, 1);
        _this.graphics8.drawCircle(667, 208, 12, 0);
        _this.graphics9.lineStyle(2, 0x0000FF, 1);
        _this.graphics9.drawCircle(513, 132, 12, 0);
        _this.graphics10.lineStyle(2, 0x0000FF, 1);
        _this.graphics10.drawCircle(552, 170, 12, 0);
        _this.graphics11.lineStyle(2, 0x0000FF, 1);
        _this.graphics11.drawCircle(589, 208, 12, 0);
        _this.graphics12.lineStyle(2, 0x0000FF, 1);
        _this.graphics12.drawCircle(628, 246, 12, 0);
        _this.graphics13.lineStyle(2, 0x0000FF, 1);
        _this.graphics13.drawCircle(589, 285, 12, 0);
        _this.graphics14.lineStyle(2, 0x0000FF, 1);
        _this.graphics14.drawCircle(552, 246, 12, 0);
        _this.graphics15.lineStyle(2, 0x0000FF, 1);
        _this.graphics15.drawCircle(513, 208, 12, 0);
        _this.graphics16.lineStyle(2, 0x0000FF, 1);
        _this.graphics16.drawCircle(473, 170, 12, 0);
        _this.graphics.lineStyle(2, 0x0000FF, 1);
        _this.graphics.drawRect(-90, 20, 180, 380);*/
        
        /*_this.graphics1.name = "g1";
        _this.graphics1.attachValue = 1;
        _this.graphics2.name = "g2";
        _this.graphics2.attachValue = 2;
        _this.graphics3.name = "g3";
        _this.graphics3.attachValue = 3;
        _this.graphics4.name = "g4";
        _this.graphics4.attachValue = 4;
        _this.graphics5.name = "g5";
        _this.graphics5.attachValue = 5;
        _this.graphics6.name = "g6";
        _this.graphics6.attachValue = 6;
        _this.graphics7.name = "g7";
        _this.graphics7.attachValue = 7;
        _this.graphics8.name = "g8";
        _this.graphics8.attachValue = 8;
            
        _this.graphicsGrp.add(_this.graphics1); // _this.graphicsGrp.add(_this.graphics10);
        _this.graphicsGrp.add(_this.graphics2);  //_this.graphicsGrp.add(_this.graphics11);
        _this.graphicsGrp.add(_this.graphics3); // _this.graphicsGrp.add(_this.graphics12);
        _this.graphicsGrp.add(_this.graphics4); // _this.graphicsGrp.add(_this.graphics13);
        _this.graphicsGrp.add(_this.graphics5); // _this.graphicsGrp.add(_this.graphics14);
        _this.graphicsGrp.add(_this.graphics6);  //_this.graphicsGrp.add(_this.graphics15);
        _this.graphicsGrp.add(_this.graphics7);  //_this.graphicsGrp.add(_this.graphics16);
        _this.graphicsGrp.add(_this.graphics8); // _this.graphicsGrp.add(_this.graphics);
        //_this.graphicsGrp.add(_this.graphics9);
        _this.graphicsGrp.alpha = 0;*/
        
        
    },
    
     gotoSecondQuestion:function()
    {
       console.log("gotoSecondQuestion");
        //_this.getVoice();
       _this.questionNo=2;
       _this.graphicsGrp = _this.add.group();
        
        _this.allboxes();
        _this.visiblebox();
        
        _this.shape = _this.add.sprite(360,270,'8_2_2shape2');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(1.2,1.2);
        
        _this.dot = _this.add.sprite(690,270,'8_2_2dot2');
        _this.dot.anchor.setTo(0.5);
        _this.dot.scale.setTo(1.2,1.2);
        
        //_this.tick = _this.add.sprite(905,280,'8_2_2tick');
        //_this.tick.anchor.setTo(0.5);
        
        _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
          _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
       // _this.targetchild3.visible = false;
        
        _this.targetchild4 = _this.add.graphics(-10, -10);
        _this.targetchild4.lineStyle(2, 0x0000FF, 0);
        _this.targetchild4.drawRect(0, 0, 20, 20);
       // _this.targetchild4.visible = false;
        
        _this.targetchild5 = _this.add.graphics(-10, -10);
        _this.targetchild5.lineStyle(2, 0x0000FF, 0);
        _this.targetchild5.drawRect(0, 0, 20, 20);
        //_this.targetchild5.visible = false;
        
        _this.targetchild6 = _this.add.graphics(-10, -10);
        _this.targetchild6.lineStyle(2, 0x0000FF, 0);
        _this.targetchild6.drawRect(0, 0, 20, 20);
       // _this.targetchild6.visible = false;
        
        _this.targetchild7 = _this.add.graphics(-10, -10);
        _this.targetchild7.lineStyle(2, 0x0000FF, 0);
        _this.targetchild7.drawRect(0, 0, 20, 20);
       // _this.targetchild7.visible = false;
        
        _this.targetchild8 = _this.add.graphics(-10, -10);
        _this.targetchild8.lineStyle(2, 0x0000FF, 0);
        _this.targetchild8.drawRect(0, 0, 20, 20);
        //_this.targetchild8.visible = false;
        
        /*_this.targetchild9 = _this.add.graphics(-10, -10);
        _this.targetchild9.lineStyle(2, 0x0000FF, 0);
        _this.targetchild9.drawRect(0, 0, 20, 20);
        //_this.targetchild9.visible = false;*/
        
        _this.angle1 = _this.add.sprite(75,167,'8_2_2angle1');
        _this.angle1.anchor.setTo(0.5);
        _this.angle1.scale.setTo(1.1,0.9);
        _this.angle1.xpos = 75;
        _this.angle1.ypos = 167;
        _this.angle1.name = 'angle1';
        _this.angle1.inputEnabled = true;
        _this.angle1.addChild(_this.targetchild1);
        _this.angle1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle2 = _this.add.sprite(150,165,'8_2_2angle2');
        _this.angle2.anchor.setTo(0.5);
        _this.angle2.scale.setTo(1.2,1.2);
        _this.angle2.xpos = 150;
        _this.angle2.ypos = 165;
        _this.angle2.name = 'angle2';
        _this.angle2.inputEnabled = true;
        _this.angle2.addChild(_this.targetchild2);
        _this.angle2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle3 = _this.add.sprite(70,237,'8_2_2angle3');
        _this.angle3.anchor.setTo(0.5);
        _this.angle3.scale.setTo(1.2,1.2);
        _this.angle3.xpos = 70;
        _this.angle3.ypos = 237;
        _this.angle3.name = 'wrongAns';
        _this.angle3.inputEnabled = true;
        _this.angle3.addChild(_this.targetchild3);
        _this.angle3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle4 = _this.add.sprite(150,237,'8_2_2angle4');
        _this.angle4.anchor.setTo(0.5);
        _this.angle4.scale.setTo(1.2,1.2);
        _this.angle4.xpos = 150;
        _this.angle4.ypos = 237;
        _this.angle4.name = 'angle4';
        _this.angle4.inputEnabled = true;
        _this.angle4.addChild(_this.targetchild4);
        _this.angle4.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle5 = _this.add.sprite(70,309,'8_2_2angle5');
        _this.angle5.anchor.setTo(0.5);
        _this.angle5.scale.setTo(1.2,1.2);
        _this.angle5.xpos = 70;
        _this.angle5.ypos = 309;
        _this.angle5.name = 'wrongAns';
        _this.angle5.inputEnabled = true;
        _this.angle5.addChild(_this.targetchild5);
        _this.angle5.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle6 = _this.add.sprite(150,308,'8_2_2angle6');
        _this.angle6.anchor.setTo(0.5);
        _this.angle6.scale.setTo(1.2,1.2);
        _this.angle6.xpos = 150;
        _this.angle6.ypos = 308;
        _this.angle6.name = 'angle6';
        _this.angle6.inputEnabled = true;
        _this.angle6.addChild(_this.targetchild6);
        _this.angle6.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle7 = _this.add.sprite(75,385,'8_2_2angle7');
        _this.angle7.anchor.setTo(0.5);
        _this.angle7.scale.setTo(1.1,1);
        _this.angle7.xpos = 75;
        _this.angle7.ypos = 385;
        _this.angle7.name = 'angle7';
        _this.angle7.inputEnabled = true;
        _this.angle7.addChild(_this.targetchild7);
        _this.angle7.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle8 = _this.add.sprite(148,380,'8_2_2angle8');
        _this.angle8.anchor.setTo(0.5);
        _this.angle8.scale.setTo(1.2,1.2);
        _this.angle8.xpos = 148;
        _this.angle8.ypos = 380;
        _this.angle8.name = 'angle8';
        _this.angle8.inputEnabled = true;
        _this.angle8.addChild(_this.targetchild8);
        _this.angle8.events.onInputDown.add(_this.onDragstart,_this);
        
        /*_this.eraser = _this.add.sprite(70,460,'8_2_2eraser');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.name = 'eraser';
        _this.eraser.xpos = 70;
        _this.eraser.ypos = 460;
        _this.eraser.inputEnabled = true;
        _this.eraser.addChild(_this.targetchild9);
        _this.eraser.events.onInputDown.add(_this.onDragstart,_this);*/
        
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(10, 10, 10, 10);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(10, 10, 10, 10);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(10, 10, 10, 10);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(10, 10, 10, 10);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(10, 10, 10, 10);
        _this.child5.visible = false;
        
        _this.child6 = _this.add.graphics(-10, -10);
        _this.child6.lineStyle(2, 0x0000FF, 1);
        _this.child6.drawRect(10, 10, 10, 10);
        _this.child6.visible = false;
        
        _this.child7 = _this.add.graphics(-10, -10);
        _this.child7.lineStyle(2, 0x0000FF, 1);
        _this.child7.drawRect(10, 10, 10, 10);
        _this.child7.visible = false;
        
        _this.child8 = _this.add.graphics(-10, -10);
        _this.child8.lineStyle(2, 0x0000FF, 1);
        _this.child8.drawRect(10, 10, 10, 10);
        _this.child8.visible = false;
        
        _this.child9 = _this.add.graphics(-10, -10);
        _this.child9.lineStyle(2, 0x0000FF, 1);
        _this.child9.drawRect(10, 10, 10, 10);
        _this.child9.visible = false;
        
        _this.child10 = _this.add.graphics(-10, -10);
        _this.child10.lineStyle(2, 0x0000FF, 1);
        _this.child10.drawRect(10, 10, 10, 10);
        _this.child10.visible = false;
        
        _this.child11 = _this.add.graphics(-10, -10);
        _this.child11.lineStyle(2, 0x0000FF, 1);
        _this.child11.drawRect(10, 10, 10, 10);
        _this.child11.visible = false;
        
        _this.child12 = _this.add.graphics(-10, -10);
        _this.child12.lineStyle(2, 0x0000FF, 1);
        _this.child12.drawRect(10, 10, 10, 10);
        _this.child12.visible = false;
        
        _this.child13 = _this.add.graphics(-10, -10);
        _this.child13.lineStyle(2, 0x0000FF, 1);
        _this.child13.drawRect(10, 10, 10, 10);
        _this.child13.visible = false;
        
        _this.child14 = _this.add.graphics(-10, -10);
        _this.child14.lineStyle(2, 0x0000FF, 1);
        _this.child14.drawRect(10, 10, 10, 10);
        _this.child14.visible = false;
        
        _this.child15 = _this.add.graphics(-10, -10);
        _this.child15.lineStyle(2, 0x0000FF, 1);
        _this.child15.drawRect(10, 10, 10, 10);
        _this.child15.visible = false;
        
        _this.child16 = _this.add.graphics(-10, -10);
        _this.child16.lineStyle(2, 0x0000FF, 1);
        _this.child16.drawRect(10, 10, 10, 10);
        _this.child16.visible = false;
        
        _this.child17 = _this.add.graphics(-10, -10);
        _this.child17.lineStyle(2, 0x0000FF, 1);
        _this.child17.drawRect(10, 10, 10, 10);
        _this.child17.visible = false;
        
        _this.child18 = _this.add.graphics(-10, -10);
        _this.child18.lineStyle(2, 0x0000FF, 1);
        _this.child18.drawRect(10, 10, 10, 10);
        _this.child18.visible = false;
        
        _this.child19 = _this.add.graphics(-10, -10);
        _this.child19.lineStyle(2, 0x0000FF, 1);
        _this.child19.drawRect(10, 10, 10, 10);
        _this.child19.visible = false;
        
        _this.child20 = _this.add.graphics(-10, -10);
        _this.child20.lineStyle(2, 0x0000FF, 1);
        _this.child20.drawRect(10, 10, 10, 10);
        _this.child20.visible = false;
        
        _this.child21 = _this.add.graphics(-10, -10);
        _this.child21.lineStyle(2, 0x0000FF, 1);
        _this.child21.drawRect(10, 10, 10, 10);
        _this.child21.visible = false;
        
        _this.child22 = _this.add.graphics(-10, -10);
        _this.child22.lineStyle(2, 0x0000FF, 1);
        _this.child22.drawRect(10, 10, 10, 10);
        _this.child22.visible = false;
        
        _this.child23 = _this.add.graphics(-10, -10);
        _this.child23.lineStyle(2, 0x0000FF, 1);
        _this.child23.drawRect(10, 10, 10, 10);
        _this.child23.visible = false;
        
        _this.child24 = _this.add.graphics(-10, -10);
        _this.child24.lineStyle(2, 0x0000FF, 1);
        _this.child24.drawRect(10, 10, 10, 10);
        _this.child24.visible = false;
        
        _this.angles11 = _this.add.sprite(620,256,'8_2_2angle1');
        _this.angles11.anchor.setTo(0.5);
        _this.angles11.scale.setTo(1.1,0.9);
        _this.angles11.name = 'angle1';
        _this.angles11.inputEnabled = true;
        _this.angles11.addChild(_this.child1);
        _this.angles11.visible = false;
        
        _this.angles12 = _this.add.sprite(620,294,'8_2_2angle1');
        _this.angles12.anchor.setTo(0.5);
        _this.angles12.scale.setTo(1.1,0.9);
        _this.angles12.name = 'angle1';
        _this.angles12.inputEnabled = true;
        _this.angles12.addChild(_this.child2);
        _this.angles12.visible = false;
        
        _this.angles13 = _this.add.sprite(774,256,'8_2_2angle1');
        _this.angles13.anchor.setTo(0.5);
        _this.angles13.scale.setTo(1.1,0.9);
        _this.angles13.name = 'angle1';
        _this.angles13.inputEnabled = true;
        _this.angles13.addChild(_this.child3);
        _this.angles13.visible = false;
        
        _this.angles14 = _this.add.sprite(774,294,'8_2_2angle1');
        _this.angles14.anchor.setTo(0.5);
        _this.angles14.scale.setTo(1.1,0.9);
        _this.angles14.name = 'angle1';
        _this.angles14.inputEnabled = true;
        _this.angles14.addChild(_this.child4);
        _this.angles14.visible = false;
        
        _this.angles21 = _this.add.sprite(712,176,'8_2_2angle2');
        _this.angles21.anchor.setTo(0.5);
        _this.angles21.scale.setTo(1.2,1.2);
        _this.angles21.name = 'angle2';
        _this.angles21.inputEnabled = true;
        _this.angles21.addChild(_this.child5);
        _this.angles21.visible = false;
        
        _this.angles22 = _this.add.sprite(788,252,'8_2_2angle2');
        _this.angles22.anchor.setTo(0.5);
        _this.angles22.scale.setTo(1.2,1.2);
        _this.angles22.name = 'angle2';
        _this.angles22.inputEnabled = true;
        _this.angles22.addChild(_this.child6);
        _this.angles22.visible = false;
        
        _this.angles23 = _this.add.sprite(750,214,'8_2_2angle2');
        _this.angles23.anchor.setTo(0.5);
        _this.angles23.scale.setTo(1.2,1.2);
        _this.angles23.name = 'angle2';
        _this.angles23.inputEnabled = true;
        _this.angles23.addChild(_this.child7);
        _this.angles23.visible = false;
        
        _this.angles24 = _this.add.sprite(636,329,'8_2_2angle2');
        _this.angles24.anchor.setTo(0.5);
        _this.angles24.scale.setTo(1.2,1.2);
        _this.angles24.name = 'angle2';
        _this.angles24.inputEnabled = true;
        _this.angles24.addChild(_this.child8);
        _this.angles24.visible = false;
        
        _this.angles41 = _this.add.sprite(673,176,'8_2_2angle4');
        _this.angles41.anchor.setTo(0.5);
        _this.angles41.scale.setTo(1.2,1.2);
        _this.angles41.name = 'angle4';
        _this.angles41.inputEnabled = true;
        _this.angles41.addChild(_this.child9);
        _this.angles41.visible = false;
        
        _this.angles42 = _this.add.sprite(596,254,'8_2_2angle4');
        _this.angles42.anchor.setTo(0.5);
        _this.angles42.scale.setTo(1.2,1.2);
        _this.angles42.name = 'angle4';
        _this.angles42.inputEnabled = true;
        _this.angles42.addChild(_this.child10);
        _this.angles42.visible = false;
        
        _this.angles43 = _this.add.sprite(633,214,'8_2_2angle4');
        _this.angles43.anchor.setTo(0.5);
        _this.angles43.scale.setTo(1.2,1.2);
        _this.angles43.name = 'angle4';
        _this.angles43.inputEnabled = true;
        _this.angles43.addChild(_this.child11);
        _this.angles43.visible = false;
        
        _this.angles44 = _this.add.sprite(750,329,'8_2_2angle4');
        _this.angles44.anchor.setTo(0.5);
        _this.angles44.scale.setTo(1.2,1.2);
        _this.angles44.name = 'angle4';
        _this.angles44.inputEnabled = true;
        _this.angles44.addChild(_this.child12);
        _this.angles44.visible = false;
        
        _this.angles61 = _this.add.sprite(596,292,'8_2_2angle6');
        _this.angles61.anchor.setTo(0.5);
        _this.angles61.scale.setTo(1.2,1.2);
        _this.angles61.name = 'angle6';
        _this.angles61.inputEnabled = true;
        _this.angles61.addChild(_this.child13);
        _this.angles61.visible = false;
        
        _this.angles62 = _this.add.sprite(673,369,'8_2_2angle6');
        _this.angles62.anchor.setTo(0.5);
        _this.angles62.scale.setTo(1.2,1.2);
        _this.angles62.name = 'angle6';
        _this.angles62.inputEnabled = true;
        _this.angles62.addChild(_this.child14);
        _this.angles62.visible = false;
        
        _this.angles63 = _this.add.sprite(634,332,'8_2_2angle6');
        _this.angles63.anchor.setTo(0.5);
        _this.angles63.scale.setTo(1.2,1.2);
        _this.angles63.name = 'angle6';
        _this.angles63.inputEnabled = true;
        _this.angles63.addChild(_this.child15);
        _this.angles63.visible = false;
        
        _this.angles64 = _this.add.sprite(749,215,'8_2_2angle6');
        _this.angles64.anchor.setTo(0.5);
        _this.angles64.scale.setTo(1.2,1.2);
        _this.angles64.name = 'angle6';
        _this.angles64.inputEnabled = true;
        _this.angles64.addChild(_this.child16);
        _this.angles64.visible = false;
        
        _this.angles71 = _this.add.sprite(678,200,'8_2_2angle7');
        _this.angles71.anchor.setTo(0.5);
        _this.angles71.scale.setTo(1.1,1);
        _this.angles71.name = 'angle7';
        _this.angles71.inputEnabled = true;
        _this.angles71.addChild(_this.child17);
        _this.angles71.visible = false;
        
        _this.angles72 = _this.add.sprite(717,200,'8_2_2angle7');
        _this.angles72.anchor.setTo(0.5);
        _this.angles72.scale.setTo(1.1,1);
        _this.angles72.name = 'angle7';
        _this.angles72.inputEnabled = true;
        _this.angles72.addChild(_this.child18);
        _this.angles72.visible = false;
        
        _this.angles73 = _this.add.sprite(677,353,'8_2_2angle7');
        _this.angles73.anchor.setTo(0.5);
        _this.angles73.scale.setTo(1.1,1);
        _this.angles73.name = 'angle7';
        _this.angles73.inputEnabled = true;
        _this.angles73.addChild(_this.child19);
        _this.angles73.visible = false;
        
        _this.angles74 = _this.add.sprite(716,353,'8_2_2angle7');
        _this.angles74.anchor.setTo(0.5);
        _this.angles74.scale.setTo(1.1,1);
        _this.angles74.name = 'angle7';
        _this.angles74.inputEnabled = true;
        _this.angles74.addChild(_this.child20);
        _this.angles74.visible = false;
        
        _this.angles81 = _this.add.sprite(788,291,'8_2_2angle8'); 
        _this.angles81.anchor.setTo(0.5);
        _this.angles81.scale.setTo(1.2,1.2);
        _this.angles81.name = 'angle8';
        _this.angles81.inputEnabled = true;
        _this.angles81.addChild(_this.child21);
        _this.angles81.visible = false;
        
        _this.angles82 = _this.add.sprite(713,370,'8_2_2angle8');
        _this.angles82.anchor.setTo(0.5);
        _this.angles82.scale.setTo(1.2,1.2);
        _this.angles82.name = 'angle8';
        _this.angles82.inputEnabled = true;
        _this.angles82.addChild(_this.child22);
        _this.angles82.visible = false;
        
        _this.angles83 = _this.add.sprite(634,218,'8_2_2angle8'); 
        _this.angles83.anchor.setTo(0.5);
        _this.angles83.scale.setTo(1.2,1.2);
        _this.angles83.name = 'angle8';
        _this.angles83.inputEnabled = true;
        _this.angles83.addChild(_this.child23);
        _this.angles83.visible = false;
        
        _this.angles84 = _this.add.sprite(751,332,'8_2_2angle8');
        _this.angles84.anchor.setTo(0.5);
        _this.angles84.scale.setTo(1.2,1.2);
        _this.angles84.name = 'angle8';
        _this.angles84.inputEnabled = true;
        _this.angles84.addChild(_this.child24);
        _this.angles84.visible = false;
        
        _this.objGrp1.add(_this.angle1);
        _this.objGrp1.add(_this.angle2);
        _this.objGrp1.add(_this.angle3);
        _this.objGrp1.add(_this.angle4);
        _this.objGrp1.add(_this.angle5);
        _this.objGrp1.add(_this.angle6);
        _this.objGrp1.add(_this.angle7);
        _this.objGrp1.add(_this.angle8);
       // _this.objGrp1.add(_this.eraser);
        
        _this.objGrp2.add(_this.angles11);
        _this.objGrp2.add(_this.angles12);
        _this.objGrp2.add(_this.angles13);
        _this.objGrp2.add(_this.angles14);
        _this.objGrp2.add(_this.angles21);
        _this.objGrp2.add(_this.angles22);
        _this.objGrp2.add(_this.angles23);
        _this.objGrp2.add(_this.angles24);
        _this.objGrp2.add(_this.angles41);
        _this.objGrp2.add(_this.angles42);
        _this.objGrp2.add(_this.angles43);
        _this.objGrp2.add(_this.angles44);
        _this.objGrp2.add(_this.angles61);
        _this.objGrp2.add(_this.angles62);
        _this.objGrp2.add(_this.angles63);
        _this.objGrp2.add(_this.angles64);
        _this.objGrp2.add(_this.angles71);
        _this.objGrp2.add(_this.angles72);
        _this.objGrp2.add(_this.angles73);
        _this.objGrp2.add(_this.angles74);
        _this.objGrp2.add(_this.angles81);
        _this.objGrp2.add(_this.angles82);
        _this.objGrp2.add(_this.angles83);
        _this.objGrp2.add(_this.angles84);
        
        /*_this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        _this.graphics5 = _this.add.graphics(100, 100);
        _this.graphics6 = _this.add.graphics(100, 100);
        _this.graphics7 = _this.add.graphics(100, 100);
        _this.graphics8 = _this.add.graphics(100, 100);
        _this.graphics9 = _this.add.graphics(100, 100);
        _this.graphics10 = _this.add.graphics(100, 100);
        _this.graphics11 = _this.add.graphics(100, 100);
        _this.graphics12 = _this.add.graphics(100, 100);
        _this.graphics13 = _this.add.graphics(100, 100);
        _this.graphics14 = _this.add.graphics(100, 100);
        _this.graphics15 = _this.add.graphics(100, 100);
        _this.graphics16 = _this.add.graphics(100, 100);
        _this.graphics = _this.add.graphics(100, 100);
        
        // draw a circle
        /*_this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawCircle(590, 55, 12, 0);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawCircle(629, 93, 12, 0);
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawCircle(667, 132, 12, 0); 
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawCircle(706, 170, 12, 0); 
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawCircle(591, 94, 12, 0); 
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawCircle(668, 170, 12, 0); 
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawCircle(551,93, 12, 0);
        _this.graphics8.lineStyle(2, 0x0000FF, 1);
        _this.graphics8.drawCircle(667, 208, 12, 0);
        _this.graphics9.lineStyle(2, 0x0000FF, 1);
        _this.graphics9.drawCircle(513, 132, 12, 0);
        _this.graphics10.lineStyle(2, 0x0000FF, 1);
        _this.graphics10.drawCircle(628, 246, 12, 0);
        _this.graphics11.lineStyle(2, 0x0000FF, 1);
        _this.graphics11.drawCircle(512, 170, 12, 0);
        _this.graphics12.lineStyle(2, 0x0000FF, 1);
        _this.graphics12.drawCircle(590, 246, 12, 0);
        _this.graphics13.lineStyle(2, 0x0000FF, 1);
        _this.graphics13.drawCircle(473, 170, 12, 0);
        _this.graphics14.lineStyle(2, 0x0000FF, 1);
        _this.graphics14.drawCircle(513, 208, 12, 0);
        _this.graphics15.lineStyle(2, 0x0000FF, 1);
        _this.graphics15.drawCircle(552, 246, 12, 0);
        _this.graphics16.lineStyle(2, 0x0000FF, 1);
        _this.graphics16.drawCircle(589, 285, 12, 0);
        _this.graphics.lineStyle(2, 0x0000FF, 1);
        _this.graphics.drawRect(-90, 20, 180, 380);*/
        
        /*_this.graphics1.name = "g1";
        _this.graphics1.attachValue = 1;
        _this.graphics2.name = "g2";
        _this.graphics2.attachValue = 2;
        _this.graphics3.name = "g3";
        _this.graphics3.attachValue = 3;
        _this.graphics4.name = "g4";
        _this.graphics4.attachValue = 4;
        _this.graphics5.name = "g5";
        _this.graphics5.attachValue = 5;
        _this.graphics6.name = "g6";
        _this.graphics6.attachValue = 6;
        _this.graphics7.name = "g7";
        _this.graphics7.attachValue = 7;
        _this.graphics8.name = "g8";
        _this.graphics8.attachValue = 8;*/
            
        /*_this.graphicsGrp.add(_this.graphics1); // _this.graphicsGrp.add(_this.graphics10);
        _this.graphicsGrp.add(_this.graphics2); // _this.graphicsGrp.add(_this.graphics11);
        _this.graphicsGrp.add(_this.graphics3); // _this.graphicsGrp.add(_this.graphics12);
        _this.graphicsGrp.add(_this.graphics4); // _this.graphicsGrp.add(_this.graphics13);
        _this.graphicsGrp.add(_this.graphics5); // _this.graphicsGrp.add(_this.graphics14);
        _this.graphicsGrp.add(_this.graphics6); // _this.graphicsGrp.add(_this.graphics15);
        _this.graphicsGrp.add(_this.graphics7); // _this.graphicsGrp.add(_this.graphics16);
        _this.graphicsGrp.add(_this.graphics8);  //_this.graphicsGrp.add(_this.graphics);
        //_this.graphicsGrp.add(_this.graphics9);
        _this.graphicsGrp.alpha = 0;*/
        
        
    },
    
     gotoThirdQuestion:function()
    {
        console.log("gotoThirdQuestion");
       // _this.getVoice();
       _this.questionNo=3;
        _this.graphicsGrp = _this.add.group();
        
        _this.allboxes();
        _this.visiblebox();
        
        _this.shape = _this.add.sprite(360,270,'8_2_2shape3');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(1.2,1.2);
        
        _this.dot = _this.add.sprite(690,270,'8_2_2dot3');
        _this.dot.anchor.setTo(0.5);
        _this.dot.scale.setTo(1.2,1.2);
        
        _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
          _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
       // _this.targetchild3.visible = false;
        
        _this.targetchild4 = _this.add.graphics(-10, -10);
        _this.targetchild4.lineStyle(2, 0x0000FF, 0);
        _this.targetchild4.drawRect(0, 0, 20, 20);
       // _this.targetchild4.visible = false;
        
        _this.targetchild5 = _this.add.graphics(-10, -10);
        _this.targetchild5.lineStyle(2, 0x0000FF, 0);
        _this.targetchild5.drawRect(0, 0, 20, 20);
        //_this.targetchild5.visible = false;
        
        _this.targetchild6 = _this.add.graphics(-10, -10);
        _this.targetchild6.lineStyle(2, 0x0000FF, 0);
        _this.targetchild6.drawRect(0, 0, 20, 20);
       // _this.targetchild6.visible = false;
        
        _this.targetchild7 = _this.add.graphics(-10, -10);
        _this.targetchild7.lineStyle(2, 0x0000FF, 0);
        _this.targetchild7.drawRect(0, 0, 20, 20);
       // _this.targetchild7.visible = false;
        
        _this.targetchild8 = _this.add.graphics(-10, -10);
        _this.targetchild8.lineStyle(2, 0x0000FF, 0);
        _this.targetchild8.drawRect(0, 0, 20, 20);
        //_this.targetchild8.visible = false;
        
        /*_this.targetchild9 = _this.add.graphics(-10, -10);
        _this.targetchild9.lineStyle(2, 0x0000FF, 0);
        _this.targetchild9.drawRect(0, 0, 20, 20);
        //_this.targetchild9.visible = false;*/
        
        _this.angle1 = _this.add.sprite(75,167,'8_2_2angle1');
        _this.angle1.anchor.setTo(0.5);
        _this.angle1.scale.setTo(1.1,0.9);
        _this.angle1.xpos = 75;
        _this.angle1.ypos = 167;
        _this.angle1.name = 'wrongAns';
        _this.angle1.inputEnabled = true;
        _this.angle1.addChild(_this.targetchild1);
        _this.angle1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle2 = _this.add.sprite(150,165,'8_2_2angle2');
        _this.angle2.anchor.setTo(0.5);
        _this.angle2.scale.setTo(1.2,1.2);
        _this.angle2.xpos = 150;
        _this.angle2.ypos = 165;
        _this.angle2.name = 'wrongAns';
        _this.angle2.inputEnabled = true;
        _this.angle2.addChild(_this.targetchild2);
        _this.angle2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle3 = _this.add.sprite(70,237,'8_2_2angle3');
        _this.angle3.anchor.setTo(0.5);
        _this.angle3.scale.setTo(1.2,1.2);
        _this.angle3.xpos = 70;
        _this.angle3.ypos = 237;
        _this.angle3.name = 'angle3';
        _this.angle3.inputEnabled = true;
        _this.angle3.addChild(_this.targetchild3);
        _this.angle3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle4 = _this.add.sprite(150,237,'8_2_2angle4');
        _this.angle4.anchor.setTo(0.5);
        _this.angle4.scale.setTo(1.2,1.2);
        _this.angle4.xpos = 150;
        _this.angle4.ypos = 237;
        _this.angle4.name = 'wrongAns';
        _this.angle4.inputEnabled = true;
        _this.angle4.addChild(_this.targetchild4);
        _this.angle4.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle5 = _this.add.sprite(70,309,'8_2_2angle5');
        _this.angle5.anchor.setTo(0.5);
        _this.angle5.scale.setTo(1.2,1.2);
        _this.angle5.xpos = 70;
        _this.angle5.ypos = 309;
        _this.angle5.name = 'angle5';
        _this.angle5.inputEnabled = true;
        _this.angle5.addChild(_this.targetchild5);
        _this.angle5.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle6 = _this.add.sprite(150,308,'8_2_2angle6');
        _this.angle6.anchor.setTo(0.5);
        _this.angle6.scale.setTo(1.2,1.2);
        _this.angle6.xpos = 150;
        _this.angle6.ypos = 308;
        _this.angle6.name = 'wrongAns';
        _this.angle6.inputEnabled = true;
        _this.angle6.addChild(_this.targetchild6);
        _this.angle6.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle7 = _this.add.sprite(75,385,'8_2_2angle7');
        _this.angle7.anchor.setTo(0.5);
        _this.angle7.scale.setTo(1.1,1);
        _this.angle7.xpos = 75;
        _this.angle7.ypos = 385;
        _this.angle7.name = 'wrongAns';
        _this.angle7.inputEnabled = true;
        _this.angle7.addChild(_this.targetchild7);
        _this.angle7.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle8 = _this.add.sprite(148,380,'8_2_2angle8');
        _this.angle8.anchor.setTo(0.5);
        _this.angle8.scale.setTo(1.2,1.2);
        _this.angle8.xpos = 148;
        _this.angle8.ypos = 380;
        _this.angle8.name = 'wrongAns';
        _this.angle8.inputEnabled = true;
        _this.angle8.addChild(_this.targetchild8);
        _this.angle8.events.onInputDown.add(_this.onDragstart,_this);
        
        /*_this.eraser = _this.add.sprite(70,460,'8_2_2eraser');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.name = 'eraser';
        _this.eraser.xpos = 70;
        _this.eraser.ypos = 460;
        _this.eraser.inputEnabled = true;
        _this.eraser.addChild(_this.targetchild9);
        _this.eraser.events.onInputDown.add(_this.onDragstart,_this);*/
        
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(10, 10, 10, 10);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(10, 10, 10, 10);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(10, 10, 10, 10);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(10, 10, 10, 10);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(10, 10, 10, 10);
        _this.child5.visible = false;
        
        _this.child6 = _this.add.graphics(-10, -10);
        _this.child6.lineStyle(2, 0x0000FF, 1);
        _this.child6.drawRect(10, 10, 10, 10);
        _this.child6.visible = false;
        
        _this.child7 = _this.add.graphics(-10, -10);
        _this.child7.lineStyle(2, 0x0000FF, 1);
        _this.child7.drawRect(10, 10, 10, 10);
        _this.child7.visible = false;
        
        _this.child8 = _this.add.graphics(-10, -10);
        _this.child8.lineStyle(2, 0x0000FF, 1);
        _this.child8.drawRect(10, 10, 10, 10);
        _this.child8.visible = false;
        
        _this.child9 = _this.add.graphics(-10, -10);
        _this.child9.lineStyle(2, 0x0000FF, 1);
        _this.child9.drawRect(10, 10, 10, 10);
        _this.child9.visible = false;
        
        _this.child10 = _this.add.graphics(-10, -10);
        _this.child10.lineStyle(2, 0x0000FF, 1);
        _this.child10.drawRect(10, 10, 10, 10);
        _this.child10.visible = false;
        
        _this.child11 = _this.add.graphics(-10, -10);
        _this.child11.lineStyle(2, 0x0000FF, 1);
        _this.child11.drawRect(10, 10, 10, 10);
        _this.child11.visible = false;
        
        _this.child12 = _this.add.graphics(-10, -10);
        _this.child12.lineStyle(2, 0x0000FF, 1);
        _this.child12.drawRect(10, 10, 10, 10);
        _this.child12.visible = false;
        
        _this.child13 = _this.add.graphics(-10, -10);
        _this.child13.lineStyle(2, 0x0000FF, 1);
        _this.child13.drawRect(10, 10, 10, 10);
        _this.child13.visible = false;
        
        _this.child14 = _this.add.graphics(-10, -10);
        _this.child14.lineStyle(2, 0x0000FF, 1);
        _this.child14.drawRect(10, 10, 10, 10);
        _this.child14.visible = false;
        
        _this.child15 = _this.add.graphics(-10, -10);
        _this.child15.lineStyle(2, 0x0000FF, 1);
        _this.child15.drawRect(10, 10, 10, 10);
        _this.child15.visible = false;
        
        _this.child16 = _this.add.graphics(-10, -10);
        _this.child16.lineStyle(2, 0x0000FF, 1);
        _this.child16.drawRect(10, 10, 10, 10);
        _this.child16.visible = false;
        
        _this.child17 = _this.add.graphics(-10, -10);
        _this.child17.lineStyle(2, 0x0000FF, 1);
        _this.child17.drawRect(10, 10, 10, 10);
        _this.child17.visible = false;
        
        _this.child18 = _this.add.graphics(-10, -10);
        _this.child18.lineStyle(2, 0x0000FF, 1);
        _this.child18.drawRect(10, 10, 10, 10);
        _this.child18.visible = false;
        
        _this.child19 = _this.add.graphics(-10, -10);
        _this.child19.lineStyle(2, 0x0000FF, 1);
        _this.child19.drawRect(10, 10, 10, 10);
        _this.child19.visible = false;
        
        _this.child20 = _this.add.graphics(-10, -10);
        _this.child20.lineStyle(2, 0x0000FF, 1);
        _this.child20.drawRect(10, 10, 10, 10);
        _this.child20.visible = false;
        
        _this.child21 = _this.add.graphics(-10, -10);
        _this.child21.lineStyle(2, 0x0000FF, 1);
        _this.child21.drawRect(10, 10, 10, 10);
        _this.child21.visible = false;
        
        _this.child22 = _this.add.graphics(-10, -10);
        _this.child22.lineStyle(2, 0x0000FF, 1);
        _this.child22.drawRect(10, 10, 10, 10);
        _this.child22.visible = false;
        
        _this.child23 = _this.add.graphics(-10, -10);
        _this.child23.lineStyle(2, 0x0000FF, 1);
        _this.child23.drawRect(10, 10, 10, 10);
        _this.child23.visible = false;
        
        _this.child24 = _this.add.graphics(-10, -10);
        _this.child24.lineStyle(2, 0x0000FF, 1);
        _this.child24.drawRect(10, 10, 10, 10);
        _this.child24.visible = false;
        
        _this.child25 = _this.add.graphics(-10, -10);
        _this.child25.lineStyle(2, 0x0000FF, 1);
        _this.child25.drawRect(10, 10, 10, 10);
        _this.child25.visible = false;
        
        _this.child26 = _this.add.graphics(-10, -10);
        _this.child26.lineStyle(2, 0x0000FF, 1);
        _this.child26.drawRect(10, 10, 10, 10);
        _this.child26.visible = false;0
        
        _this.child27 = _this.add.graphics(-10, -10);
        _this.child27.lineStyle(2, 0x0000FF, 1);
        _this.child27.drawRect(10, 10, 10, 10);
        _this.child27.visible = false;
        
        _this.child28 = _this.add.graphics(-10, -10);
        _this.child28.lineStyle(2, 0x0000FF, 1);
        _this.child28.drawRect(10, 10, 10, 10);
        _this.child28.visible = false;
        
        _this.angles31 = _this.add.sprite(675,177,'8_2_2angle3');
        _this.angles31.anchor.setTo(0.5);
        _this.angles31.scale.setTo(1.2,1.2);
        _this.angles31.name = 'angle3';
        _this.angles31.inputEnabled = true;
        _this.angles31.addChild(_this.child1);
        _this.angles31.visible = false;
        
        _this.angles32 = _this.add.sprite(714,216,'8_2_2angle3');
        _this.angles32.anchor.setTo(0.5);
        _this.angles32.scale.setTo(1.2,1.2);
        _this.angles32.name = 'angle3';
        _this.angles32.inputEnabled = true;
        _this.angles32.addChild(_this.child2);
        _this.angles32.visible = false;
        
        _this.angles33 = _this.add.sprite(751,253,'8_2_2angle3');
        _this.angles33.anchor.setTo(0.5);
        _this.angles33.scale.setTo(1.2,1.2);
        _this.angles33.name = 'angle3';
        _this.angles33.inputEnabled = true;
        _this.angles33.addChild(_this.child3);
        _this.angles33.visible = false;
        
        _this.angles34 = _this.add.sprite(789,291,'8_2_2angle3');
        _this.angles34.anchor.setTo(0.5);
        _this.angles34.scale.setTo(1.2,1.2);
        _this.angles34.name = 'angle3';
        _this.angles34.inputEnabled = true;
        _this.angles34.addChild(_this.child4);
        _this.angles34.visible = false;
        
        _this.angles35 = _this.add.sprite(750,176,'8_2_2angle3');
        _this.angles35.anchor.setTo(0.5);
        _this.angles35.scale.setTo(1.2,1.2);
        _this.angles35.name = 'angle3';
        _this.angles35.inputEnabled = true;
        _this.angles35.addChild(_this.child5);
        _this.angles35.visible = false;
        
        _this.angles36 = _this.add.sprite(635,215,'8_2_2angle3');
        _this.angles36.anchor.setTo(0.5);
        _this.angles36.scale.setTo(1.2,1.2);
        _this.angles36.name = 'angle3';
        _this.angles36.inputEnabled = true;
        _this.angles36.addChild(_this.child6);
        _this.angles36.visible = false;
        
        _this.angles37 = _this.add.sprite(673,253,'8_2_2angle3');
        _this.angles37.anchor.setTo(0.5);
        _this.angles37.scale.setTo(1.2,1.2);
        _this.angles37.name = 'angle3';
        _this.angles37.inputEnabled = true;
        _this.angles37.addChild(_this.child7);
        _this.angles37.visible = false;
        
        _this.angles38 = _this.add.sprite(713,292,'8_2_2angle3');
        _this.angles38.anchor.setTo(0.5);
        _this.angles38.scale.setTo(1.2,1.2);
        _this.angles38.name = 'angle3';
        _this.angles38.inputEnabled = true;
        _this.angles38.addChild(_this.child8);
        _this.angles38.visible = false;
        
        _this.angles39 = _this.add.sprite(751,330,'8_2_2angle3');
        _this.angles39.anchor.setTo(0.5);
        _this.angles39.scale.setTo(1.2,1.2);
        _this.angles39.name = 'angle3';
        _this.angles39.inputEnabled = true;
        _this.angles39.addChild(_this.child9);
        _this.angles39.visible = false;
        
        _this.angles40 = _this.add.sprite(596,253,'8_2_2angle3');
        _this.angles40.anchor.setTo(0.5);
        _this.angles40.scale.setTo(1.2,1.2);
        _this.angles40.name = 'angle3';
        _this.angles40.inputEnabled = true;
        _this.angles40.addChild(_this.child10);
        _this.angles40.visible = false;
        
        _this.angles41 = _this.add.sprite(636,292,'8_2_2angle3');
        _this.angles41.anchor.setTo(0.5);
        _this.angles41.scale.setTo(1.2,1.2);
        _this.angles41.name = 'angle3';
        _this.angles41.inputEnabled = true;
        _this.angles41.addChild(_this.child11);
        _this.angles41.visible = false;
        
        _this.angles42 = _this.add.sprite(674,330,'8_2_2angle3');
        _this.angles42.anchor.setTo(0.5);
        _this.angles42.scale.setTo(1.2,1.2);
        _this.angles42.name = 'angle3';
        _this.angles42.inputEnabled = true;
        _this.angles42.addChild(_this.child12);
        _this.angles42.visible = false;
        
        _this.angles43 = _this.add.sprite(713,369,'8_2_2angle3');
        _this.angles43.anchor.setTo(0.5);
        _this.angles43.scale.setTo(1.2,1.2);
        _this.angles43.name = 'angle3';
        _this.angles43.inputEnabled = true;
        _this.angles43.addChild(_this.child13);
        _this.angles43.visible = false;
        
        _this.angles44 = _this.add.sprite(635,368,'8_2_2angle3');
        _this.angles44.anchor.setTo(0.5);
        _this.angles44.scale.setTo(1.2,1.2);
        _this.angles44.name = 'angle3';
        _this.angles44.inputEnabled = true;
        _this.angles44.addChild(_this.child14);
        _this.angles44.visible = false;
        
        _this.angles51 = _this.add.sprite(635,177,'8_2_2angle5');
        _this.angles51.anchor.setTo(0.5);
        _this.angles51.scale.setTo(1.2,1.2);
        _this.angles51.name = 'angle5';
        _this.angles51.inputEnabled = true;
        _this.angles51.addChild(_this.child15);
        _this.angles51.visible = false;
        
        _this.angles52 = _this.add.sprite(712,176,'8_2_2angle5');
        _this.angles52.anchor.setTo(0.5);
        _this.angles52.scale.setTo(1.2,1.2);
        _this.angles52.name = 'angle5';
        _this.angles52.inputEnabled = true;
        _this.angles52.addChild(_this.child16);
        _this.angles52.visible = false;
        
        _this.angles53 = _this.add.sprite(673,215,'8_2_2angle5');
        _this.angles53.anchor.setTo(0.5);
        _this.angles53.scale.setTo(1.2,1.2);
        _this.angles53.name = 'angle5';
        _this.angles53.inputEnabled = true;
        _this.angles53.addChild(_this.child17);
        _this.angles53.visible = false;
        
        _this.angles54 = _this.add.sprite(635,252,'8_2_2angle5');
        _this.angles54.anchor.setTo(0.5);
        _this.angles54.scale.setTo(1.2,1.2);
        _this.angles54.name = 'angle5';
        _this.angles54.inputEnabled = true;
        _this.angles54.addChild(_this.child18);
        _this.angles54.visible = false;
        
        _this.angles55 = _this.add.sprite(596,290,'8_2_2angle5');
        _this.angles55.anchor.setTo(0.5);
        _this.angles55.scale.setTo(1.2,1.2);
        _this.angles55.name = 'angle5';
        _this.angles55.inputEnabled = true;
        _this.angles55.addChild(_this.child19);
        _this.angles55.visible = false;
        
        _this.angles56 = _this.add.sprite(750,215,'8_2_2angle5');
        _this.angles56.anchor.setTo(0.5);
        _this.angles56.scale.setTo(1.2,1.2);
        _this.angles56.name = 'angle5';
        _this.angles56.inputEnabled = true;
        _this.angles56.addChild(_this.child20);
        _this.angles56.visible = false;
        
        _this.angles57 = _this.add.sprite(712,252,'8_2_2angle5'); 
        _this.angles57.anchor.setTo(0.5);
        _this.angles57.scale.setTo(1.2,1.2);
        _this.angles57.name = 'angle5';
        _this.angles57.inputEnabled = true;
        _this.angles57.addChild(_this.child21);
        _this.angles57.visible = false;
        
        _this.angles58 = _this.add.sprite(673,290,'8_2_2angle5');
        _this.angles58.anchor.setTo(0.5);
        _this.angles58.scale.setTo(1.2,1.2);
        _this.angles58.name = 'angle5';
        _this.angles58.inputEnabled = true;
        _this.angles58.addChild(_this.child22);
        _this.angles58.visible = false;
        
        _this.angles59 = _this.add.sprite(634,330,'8_2_2angle5'); 
        _this.angles59.anchor.setTo(0.5);
        _this.angles59.scale.setTo(1.2,1.2);
        _this.angles59.name = 'angle5';
        _this.angles59.inputEnabled = true;
        _this.angles59.addChild(_this.child23);
        _this.angles59.visible = false;
        
        _this.angles60 = _this.add.sprite(672,368,'8_2_2angle5');
        _this.angles60.anchor.setTo(0.5);
        _this.angles60.scale.setTo(1.2,1.2);
        _this.angles60.name = 'angle5';
        _this.angles60.inputEnabled = true;
        _this.angles60.addChild(_this.child24);
        _this.angles60.visible = false;
        
        _this.angles61 = _this.add.sprite(711,330,'8_2_2angle5');
        _this.angles61.anchor.setTo(0.5);
        _this.angles61.scale.setTo(1.2,1.2);
        _this.angles61.name = 'angle5';
        _this.angles61.inputEnabled = true;
        _this.angles61.addChild(_this.child25);
        _this.angles61.visible = false;
        
        _this.angles62 = _this.add.sprite(750,292,'8_2_2angle5');
        _this.angles62.anchor.setTo(0.5);
        _this.angles62.scale.setTo(1.2,1.2);
        _this.angles62.name = 'angle5';
        _this.angles62.inputEnabled = true;
        _this.angles62.addChild(_this.child26);
        _this.angles62.visible = false;
        
        _this.angles63 = _this.add.sprite(787,255,'8_2_2angle5');
        _this.angles63.anchor.setTo(0.5);
        _this.angles63.scale.setTo(1.2,1.2);
        _this.angles63.name = 'angle5';
        _this.angles63.inputEnabled = true;
        _this.angles63.addChild(_this.child27);
        _this.angles63.visible = false;
        
        _this.angles64 = _this.add.sprite(750,368,'8_2_2angle5');
        _this.angles64.anchor.setTo(0.5);
        _this.angles64.scale.setTo(1.2,1.2);
        _this.angles64.name = 'angle5';
        _this.angles64.inputEnabled = true;
        _this.angles64.addChild(_this.child28);
        _this.angles64.visible = false;
        
        _this.objGrp1.add(_this.angle1);
        _this.objGrp1.add(_this.angle2);
        _this.objGrp1.add(_this.angle3);
        _this.objGrp1.add(_this.angle4);
        _this.objGrp1.add(_this.angle5);
        _this.objGrp1.add(_this.angle6);
        _this.objGrp1.add(_this.angle7);
        _this.objGrp1.add(_this.angle8);
        //_this.objGrp1.add(_this.eraser);
        
        _this.objGrp2.add(_this.angles31);
        _this.objGrp2.add(_this.angles32);
        _this.objGrp2.add(_this.angles33);
        _this.objGrp2.add(_this.angles34);
        _this.objGrp2.add(_this.angles35);
        _this.objGrp2.add(_this.angles36);
        _this.objGrp2.add(_this.angles37);
        _this.objGrp2.add(_this.angles38);
        _this.objGrp2.add(_this.angles39);
        _this.objGrp2.add(_this.angles40);
        _this.objGrp2.add(_this.angles41);
        _this.objGrp2.add(_this.angles42);
        _this.objGrp2.add(_this.angles43);
        _this.objGrp2.add(_this.angles44);
        _this.objGrp2.add(_this.angles51);
        _this.objGrp2.add(_this.angles52);
        _this.objGrp2.add(_this.angles53);
        _this.objGrp2.add(_this.angles54);
        _this.objGrp2.add(_this.angles55);
        _this.objGrp2.add(_this.angles56);
        _this.objGrp2.add(_this.angles57);
        _this.objGrp2.add(_this.angles58);
        _this.objGrp2.add(_this.angles59);
        _this.objGrp2.add(_this.angles60);
        _this.objGrp2.add(_this.angles61);
        _this.objGrp2.add(_this.angles62);
        _this.objGrp2.add(_this.angles63);
        _this.objGrp2.add(_this.angles64);
        
    },
    
     gotoFourthQuestion:function()
    {
        console.log("gotoFourthQuestion");
        //_this.getVoice();
       _this.questionNo=4;
        
        _this.allboxes();
        _this.visiblebox();
        
        
        _this.shape = _this.add.sprite(360,270,'8_2_2shape4');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(1.2,1.2);
        
        _this.dot = _this.add.sprite(690,270,'8_2_2dot4');
        _this.dot.anchor.setTo(0.5);
        _this.dot.scale.setTo(1.2,1.2);
        
        _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
          _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
       // _this.targetchild3.visible = false;
        
        _this.targetchild4 = _this.add.graphics(-10, -10);
        _this.targetchild4.lineStyle(2, 0x0000FF, 0);
        _this.targetchild4.drawRect(0, 0, 20, 20);
       // _this.targetchild4.visible = false;
        
        _this.targetchild5 = _this.add.graphics(-10, -10);
        _this.targetchild5.lineStyle(2, 0x0000FF, 0);
        _this.targetchild5.drawRect(0, 0, 20, 20);
        //_this.targetchild5.visible = false;
        
        _this.targetchild6 = _this.add.graphics(-10, -10);
        _this.targetchild6.lineStyle(2, 0x0000FF, 0);
        _this.targetchild6.drawRect(0, 0, 20, 20);
       // _this.targetchild6.visible = false;
        
        _this.targetchild7 = _this.add.graphics(-10, -10);
        _this.targetchild7.lineStyle(2, 0x0000FF, 0);
        _this.targetchild7.drawRect(0, 0, 20, 20);
       // _this.targetchild7.visible = false;
        
        _this.targetchild8 = _this.add.graphics(-10, -10);
        _this.targetchild8.lineStyle(2, 0x0000FF, 0);
        _this.targetchild8.drawRect(0, 0, 20, 20);
        //_this.targetchild8.visible = false;
        
        /*_this.targetchild9 = _this.add.graphics(-10, -10);
        _this.targetchild9.lineStyle(2, 0x0000FF, 0);
        _this.targetchild9.drawRect(0, 0, 20, 20);
        //_this.targetchild9.visible = false;*/
        
        _this.angle1 = _this.add.sprite(75,167,'8_2_2angle1');
        _this.angle1.anchor.setTo(0.5);
        _this.angle1.scale.setTo(1.1,0.9);
        _this.angle1.xpos = 75;
        _this.angle1.ypos = 167;
        _this.angle1.name = 'angle1';
        _this.angle1.inputEnabled = true;
        _this.angle1.addChild(_this.targetchild1);
        _this.angle1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle2 = _this.add.sprite(150,165,'8_2_2angle2');
        _this.angle2.anchor.setTo(0.5);
        _this.angle2.scale.setTo(1.2,1.2);
        _this.angle2.xpos = 150;
        _this.angle2.ypos = 165;
        _this.angle2.name = 'wrongAns';
        _this.angle2.inputEnabled = true;
        _this.angle2.addChild(_this.targetchild2);
        _this.angle2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle3 = _this.add.sprite(70,237,'8_2_2angle3');
        _this.angle3.anchor.setTo(0.5);
        _this.angle3.scale.setTo(1.2,1.2);
        _this.angle3.xpos = 70;
        _this.angle3.ypos = 237;
        _this.angle3.name = 'angle3';
        _this.angle3.inputEnabled = true;
        _this.angle3.addChild(_this.targetchild3);
        _this.angle3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle4 = _this.add.sprite(150,237,'8_2_2angle4');
        _this.angle4.anchor.setTo(0.5);
        _this.angle4.scale.setTo(1.2,1.2);
        _this.angle4.xpos = 150;
        _this.angle4.ypos = 237;
        _this.angle4.name = 'wrongAns';
        _this.angle4.inputEnabled = true;
        _this.angle4.addChild(_this.targetchild4);
        _this.angle4.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle5 = _this.add.sprite(70,309,'8_2_2angle5');
        _this.angle5.anchor.setTo(0.5);
        _this.angle5.scale.setTo(1.2,1.2);
        _this.angle5.xpos = 70;
        _this.angle5.ypos = 309;
        _this.angle5.name = 'angle5';
        _this.angle5.inputEnabled = true;
        _this.angle5.addChild(_this.targetchild5);
        _this.angle5.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle6 = _this.add.sprite(150,308,'8_2_2angle6');
        _this.angle6.anchor.setTo(0.5);
        _this.angle6.scale.setTo(1.2,1.2);
        _this.angle6.xpos = 150;
        _this.angle6.ypos = 308;
        _this.angle6.name = 'wrongAns';
        _this.angle6.inputEnabled = true;
        _this.angle6.addChild(_this.targetchild6);
        _this.angle6.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle7 = _this.add.sprite(75,385,'8_2_2angle7');
        _this.angle7.anchor.setTo(0.5);
        _this.angle7.scale.setTo(1.1,1);
        _this.angle7.xpos = 75;
        _this.angle7.ypos = 385;
        _this.angle7.name = 'angle7';
        _this.angle7.inputEnabled = true;
        _this.angle7.addChild(_this.targetchild7);
        _this.angle7.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle8 = _this.add.sprite(148,380,'8_2_2angle8');
        _this.angle8.anchor.setTo(0.5);
        _this.angle8.scale.setTo(1.2,1.2);
        _this.angle8.xpos = 148;
        _this.angle8.ypos = 380;
        _this.angle8.name = 'wrongAns';
        _this.angle8.inputEnabled = true;
        _this.angle8.addChild(_this.targetchild8);
        _this.angle8.events.onInputDown.add(_this.onDragstart,_this);
        
        /*_this.eraser = _this.add.sprite(70,460,'8_2_2eraser');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.name = 'eraser';
        _this.eraser.xpos = 70;
        _this.eraser.ypos = 460;
        _this.eraser.inputEnabled = true;
        _this.eraser.addChild(_this.targetchild9);
        _this.eraser.events.onInputDown.add(_this.onDragstart,_this);*/
        
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(10, 10, 10, 10);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(10, 10, 10, 10);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(10, 10, 10, 10);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(10, 10, 10, 10);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(10, 10, 10, 10);
        _this.child5.visible = false;
        
        _this.child6 = _this.add.graphics(-10, -10);
        _this.child6.lineStyle(2, 0x0000FF, 1);
        _this.child6.drawRect(10, 10, 10, 10);
        _this.child6.visible = false;
        
        _this.child7 = _this.add.graphics(-10, -10);
        _this.child7.lineStyle(2, 0x0000FF, 1);
        _this.child7.drawRect(10, 10, 10, 10);
        _this.child7.visible = false;
        
        _this.child8 = _this.add.graphics(-10, -10);
        _this.child8.lineStyle(2, 0x0000FF, 1);
        _this.child8.drawRect(10, 10, 10, 10);
        _this.child8.visible = false;
        
        _this.child9 = _this.add.graphics(-10, -10);
        _this.child9.lineStyle(2, 0x0000FF, 1);
        _this.child9.drawRect(10, 10, 10, 10);
        _this.child9.visible = false;
        
        _this.child10 = _this.add.graphics(-10, -10);
        _this.child10.lineStyle(2, 0x0000FF, 1);
        _this.child10.drawRect(10, 10, 10, 10);
        _this.child10.visible = false;
        
        _this.child11 = _this.add.graphics(-10, -10);
        _this.child11.lineStyle(2, 0x0000FF, 1);
        _this.child11.drawRect(10, 10, 10, 10);
        _this.child11.visible = false;
        
        _this.child12 = _this.add.graphics(-10, -10);
        _this.child12.lineStyle(2, 0x0000FF, 1);
        _this.child12.drawRect(10, 10, 10, 10);
        _this.child12.visible = false;
        
        _this.child13 = _this.add.graphics(-10, -10);
        _this.child13.lineStyle(2, 0x0000FF, 1);
        _this.child13.drawRect(10, 10, 10, 10);
        _this.child13.visible = false;
        
        _this.child14 = _this.add.graphics(-10, -10);
        _this.child14.lineStyle(2, 0x0000FF, 1);
        _this.child14.drawRect(10, 10, 10, 10);
        _this.child14.visible = false;
        
        _this.child15 = _this.add.graphics(-10, -10);
        _this.child15.lineStyle(2, 0x0000FF, 1);
        _this.child15.drawRect(10, 10, 10, 10);
        _this.child15.visible = false;
        
        _this.child16 = _this.add.graphics(-10, -10);
        _this.child16.lineStyle(2, 0x0000FF, 1);
        _this.child16.drawRect(10, 10, 10, 10);
        _this.child16.visible = false;
        
        _this.child17 = _this.add.graphics(-10, -10);
        _this.child17.lineStyle(2, 0x0000FF, 1);
        _this.child17.drawRect(10, 10, 10, 10);
        _this.child17.visible = false;
        
        _this.child18 = _this.add.graphics(-10, -10);
        _this.child18.lineStyle(2, 0x0000FF, 1);
        _this.child18.drawRect(10, 10, 10, 10);
        _this.child18.visible = false;
        
        _this.child19 = _this.add.graphics(-10, -10);
        _this.child19.lineStyle(2, 0x0000FF, 1);
        _this.child19.drawRect(10, 10, 10, 10);
        _this.child19.visible = false;
        
        _this.child20 = _this.add.graphics(-10, -10);
        _this.child20.lineStyle(2, 0x0000FF, 1);
        _this.child20.drawRect(10, 10, 10, 10);
        _this.child20.visible = false;
        
        _this.child21 = _this.add.graphics(-10, -10);
        _this.child21.lineStyle(2, 0x0000FF, 1);
        _this.child21.drawRect(10, 10, 10, 10);
        _this.child21.visible = false;
        
        _this.child22 = _this.add.graphics(-10, -10);
        _this.child22.lineStyle(2, 0x0000FF, 1);
        _this.child22.drawRect(10, 10, 10, 10);
        _this.child22.visible = false;
        
        _this.child23 = _this.add.graphics(-10, -10);
        _this.child23.lineStyle(2, 0x0000FF, 1);
        _this.child23.drawRect(10, 10, 10, 10);
        _this.child23.visible = false;
        
        _this.child24 = _this.add.graphics(-10, -10);
        _this.child24.lineStyle(2, 0x0000FF, 1);
        _this.child24.drawRect(10, 10, 10, 10);
        _this.child24.visible = false;
        
        _this.child25 = _this.add.graphics(-10, -10);
        _this.child25.lineStyle(2, 0x0000FF, 1);
        _this.child25.drawRect(10, 10, 10, 10);
        _this.child25.visible = false;
        
        _this.child26 = _this.add.graphics(-10, -10);
        _this.child26.lineStyle(2, 0x0000FF, 1);
        _this.child26.drawRect(10, 10, 10, 10);
        _this.child26.visible = false;0
        
        _this.child27 = _this.add.graphics(-10, -10);
        _this.child27.lineStyle(2, 0x0000FF, 1);
        _this.child27.drawRect(10, 10, 10, 10);
        _this.child27.visible = false;
        
        _this.child28 = _this.add.graphics(-10, -10);
        _this.child28.lineStyle(2, 0x0000FF, 1);
        _this.child28.drawRect(10, 10, 10, 10);
        _this.child28.visible = false;
        
        _this.child29 = _this.add.graphics(-10, -10);
        _this.child29.lineStyle(2, 0x0000FF, 1);
        _this.child29.drawRect(10, 10, 10, 10);
        _this.child29.visible = false;
        
        _this.child30 = _this.add.graphics(-10, -10);
        _this.child30.lineStyle(2, 0x0000FF, 1);
        _this.child30.drawRect(10, 10, 10, 10);
        _this.child30.visible = false;
        
        _this.child31 = _this.add.graphics(-10, -10);
        _this.child31.lineStyle(2, 0x0000FF, 1);
        _this.child31.drawRect(10, 10, 10, 10);
        _this.child31.visible = false;
        
        _this.child32 = _this.add.graphics(-10, -10);
        _this.child32.lineStyle(2, 0x0000FF, 1);
        _this.child32.drawRect(10, 10, 10, 10);
        _this.child32.visible = false;
        
        _this.child33 = _this.add.graphics(-10, -10);
        _this.child33.lineStyle(2, 0x0000FF, 1);
        _this.child33.drawRect(10, 10, 10, 10);
        _this.child33.visible = false;
        
        _this.child34 = _this.add.graphics(-10, -10);
        _this.child34.lineStyle(2, 0x0000FF, 1);
        _this.child34.drawRect(10, 10, 10, 10);
        _this.child34.visible = false;
        
        _this.child35 = _this.add.graphics(-10, -10);
        _this.child35.lineStyle(2, 0x0000FF, 1);
        _this.child35.drawRect(10, 10, 10, 10);
        _this.child35.visible = false;
        
        _this.child36 = _this.add.graphics(-10, -10);
        _this.child36.lineStyle(2, 0x0000FF, 1);
        _this.child36.drawRect(10, 10, 10, 10);
        _this.child36.visible = false;
        
        _this.angles11 = _this.add.sprite(658,178,'8_2_2angle1');
        _this.angles11.anchor.setTo(0.5);
        _this.angles11.scale.setTo(1.1,0.9);
        _this.angles11.name = 'angle1';
        _this.angles11.inputEnabled = true;
        _this.angles11.addChild(_this.child1);
        _this.angles11.visible = false;
        
        _this.angles12 = _this.add.sprite(658,217,'8_2_2angle1');
        _this.angles12.anchor.setTo(0.5);
        _this.angles12.scale.setTo(1.1,0.9);
        _this.angles12.name = 'angle1';
        _this.angles12.inputEnabled = true;
        _this.angles12.addChild(_this.child2);
        _this.angles12.visible = false;
        
        _this.angles13 = _this.add.sprite(697,217,'8_2_2angle1');
        _this.angles13.anchor.setTo(0.5);
        _this.angles13.scale.setTo(1.1,0.9);
        _this.angles13.name = 'angle1';
        _this.angles13.inputEnabled = true;
        _this.angles13.addChild(_this.child3);
        _this.angles13.visible = false;
        
        _this.angles14 = _this.add.sprite(697,255,'8_2_2angle1');
        _this.angles14.anchor.setTo(0.5);
        _this.angles14.scale.setTo(1.1,0.9);
        _this.angles14.name = 'angle1';
        _this.angles14.inputEnabled = true;
        _this.angles14.addChild(_this.child4);
        _this.angles14.visible = false;
        
        _this.angles15 = _this.add.sprite(735,178,'8_2_2angle1');
        _this.angles15.anchor.setTo(0.5);
        _this.angles15.scale.setTo(1.1,0.9);
        _this.angles15.name = 'angle1';
        _this.angles15.inputEnabled = true;
        _this.angles15.addChild(_this.child5);
        _this.angles15.visible = false;
        
        _this.angles16 = _this.add.sprite(735,217,'8_2_2angle1');
        _this.angles16.anchor.setTo(0.5);
        _this.angles16.scale.setTo(1.1,0.9);
        _this.angles16.name = 'angle1';
        _this.angles16.inputEnabled = true;
        _this.angles16.addChild(_this.child6);
        _this.angles16.visible = false;
        
        _this.angles17 = _this.add.sprite(658,332,'8_2_2angle1');
        _this.angles17.anchor.setTo(0.5);
        _this.angles17.scale.setTo(1.1,0.9);
        _this.angles17.name = 'angle1';
        _this.angles17.inputEnabled = true;
        _this.angles17.addChild(_this.child7);
        _this.angles17.visible = false;
        
        _this.angles18 = _this.add.sprite(658,371,'8_2_2angle1');
        _this.angles18.anchor.setTo(0.5);
        _this.angles18.scale.setTo(1.1,0.9);
        _this.angles18.name = 'angle1';
        _this.angles18.inputEnabled = true;
        _this.angles18.addChild(_this.child8);
        _this.angles18.visible = false;
        
        _this.angles19 = _this.add.sprite(697,332,'8_2_2angle1');
        _this.angles19.anchor.setTo(0.5);
        _this.angles19.scale.setTo(1.1,0.9);
        _this.angles19.name = 'angle1';
        _this.angles19.inputEnabled = true;
        _this.angles19.addChild(_this.child9);
        _this.angles19.visible = false;
        
        _this.angles20 = _this.add.sprite(697,293,'8_2_2angle1');
        _this.angles20.anchor.setTo(0.5);
        _this.angles20.scale.setTo(1.1,0.9);
        _this.angles20.name = 'angle1';
        _this.angles20.inputEnabled = true;
        _this.angles20.addChild(_this.child10);
        _this.angles20.visible = false;
        
        _this.angles21 = _this.add.sprite(735,332,'8_2_2angle1');
        _this.angles21.anchor.setTo(0.5);
        _this.angles21.scale.setTo(1.1,0.9);
        _this.angles21.name = 'angle1';
        _this.angles21.inputEnabled = true;
        _this.angles21.addChild(_this.child11);
        _this.angles21.visible = false;
        
        _this.angles22 = _this.add.sprite(735,371,'8_2_2angle1');
        _this.angles22.anchor.setTo(0.5);
        _this.angles22.scale.setTo(1.1,0.9);
        _this.angles22.name = 'angle1';
        _this.angles22.inputEnabled = true;
        _this.angles22.addChild(_this.child12);
        _this.angles22.visible = false;
        
        _this.angles31 = _this.add.sprite(712,368,'8_2_2angle3');
        _this.angles31.anchor.setTo(0.5);
        _this.angles31.scale.setTo(1.2,1.2);
        _this.angles31.name = 'angle3';
        _this.angles31.inputEnabled = true;
        _this.angles31.addChild(_this.child13);
        _this.angles31.visible = false;
        
        _this.angles32 = _this.add.sprite(675,255,'8_2_2angle3');
        _this.angles32.anchor.setTo(0.5);
        _this.angles32.scale.setTo(1.2,1.2);
        _this.angles32.name = 'angle3';
        _this.angles32.inputEnabled = true;
        _this.angles32.addChild(_this.child14);
        _this.angles32.visible = false;
        
        _this.angles33 = _this.add.sprite(712,290,'8_2_2angle3');
        _this.angles33.anchor.setTo(0.5);
        _this.angles33.scale.setTo(1.2,1.2);
        _this.angles33.name = 'angle3';
        _this.angles33.inputEnabled = true;
        _this.angles33.addChild(_this.child15);
        _this.angles33.visible = false;
        
        _this.angles34 = _this.add.sprite(675,178,'8_2_2angle3');
        _this.angles34.anchor.setTo(0.5);
        _this.angles34.scale.setTo(1.2,1.2);
        _this.angles34.name = 'angle3';
        _this.angles34.inputEnabled = true;
        _this.angles34.addChild(_this.child16);
        _this.angles34.visible = false;
        
        _this.angles35 = _this.add.sprite(595,254,'8_2_2angle3');
        _this.angles35.anchor.setTo(0.5);
        _this.angles35.scale.setTo(1.2,1.2);
        _this.angles35.name = 'angle3';
        _this.angles35.inputEnabled = true;
        _this.angles35.addChild(_this.child17);
        _this.angles35.visible = false;
        
        _this.angles36 = _this.add.sprite(789,291,'8_2_2angle3');
        _this.angles36.anchor.setTo(0.5);
        _this.angles36.scale.setTo(1.2,1.2);
        _this.angles36.name = 'angle3';
        _this.angles36.inputEnabled = true;
        _this.angles36.addChild(_this.child18);
        _this.angles36.visible = false;
        
        _this.angles51 = _this.add.sprite(595,291,'8_2_2angle5');
        _this.angles51.anchor.setTo(0.5);
        _this.angles51.scale.setTo(1.2,1.2);
        _this.angles51.name = 'angle5';
        _this.angles51.inputEnabled = true;
        _this.angles51.addChild(_this.child19);
        _this.angles51.visible = false;
        
        _this.angles52 = _this.add.sprite(712,177,'8_2_2angle5');
        _this.angles52.anchor.setTo(0.5);
        _this.angles52.scale.setTo(1.2,1.2);
        _this.angles52.name = 'angle5';
        _this.angles52.inputEnabled = true;
        _this.angles52.addChild(_this.child20);
        _this.angles52.visible = false;
        
        _this.angles53 = _this.add.sprite(787,253,'8_2_2angle5'); 
        _this.angles53.anchor.setTo(0.5);
        _this.angles53.scale.setTo(1.2,1.2);
        _this.angles53.name = 'angle5';
        _this.angles53.inputEnabled = true;
        _this.angles53.addChild(_this.child21);
        _this.angles53.visible = false;
        
        _this.angles54 = _this.add.sprite(672,292,'8_2_2angle5');
        _this.angles54.anchor.setTo(0.5);
        _this.angles54.scale.setTo(1.2,1.2);
        _this.angles54.name = 'angle5';
        _this.angles54.inputEnabled = true;
        _this.angles54.addChild(_this.child22);
        _this.angles54.visible = false;
        
        _this.angles55 = _this.add.sprite(712,254,'8_2_2angle5'); 
        _this.angles55.anchor.setTo(0.5);
        _this.angles55.scale.setTo(1.2,1.2);
        _this.angles55.name = 'angle5';
        _this.angles55.inputEnabled = true;
        _this.angles55.addChild(_this.child23);
        _this.angles55.visible = false;
        
        _this.angles56 = _this.add.sprite(673,370,'8_2_2angle5');
        _this.angles56.anchor.setTo(0.5);
        _this.angles56.scale.setTo(1.2,1.2);
        _this.angles56.name = 'angle5';
        _this.angles56.inputEnabled = true;
        _this.angles56.addChild(_this.child24);
        _this.angles56.visible = false;
        
        _this.angles71 = _this.add.sprite(716,276,'8_2_2angle7');
        _this.angles71.anchor.setTo(0.5);
        _this.angles71.scale.setTo(1.1,1);
        _this.angles71.name = 'angle7';
        _this.angles71.inputEnabled = true;
        _this.angles71.addChild(_this.child25);
        _this.angles71.visible = false;
        
        _this.angles72 = _this.add.sprite(753,276,'8_2_2angle7');
        _this.angles72.anchor.setTo(0.5);
        _this.angles72.scale.setTo(1.1,1);
        _this.angles72.name = 'angle7';
        _this.angles72.inputEnabled = true;
        _this.angles72.addChild(_this.child26);
        _this.angles72.visible = false;
        
        _this.angles73 = _this.add.sprite(793,238,'8_2_2angle7');
        _this.angles73.anchor.setTo(0.5);
        _this.angles73.scale.setTo(1.1,1);
        _this.angles73.name = 'angle7';
        _this.angles73.inputEnabled = true;
        _this.angles73.addChild(_this.child27);
        _this.angles73.visible = false;
        
        _this.angles74 = _this.add.sprite(753,238,'8_2_2angle7');
        _this.angles74.anchor.setTo(0.5);
        _this.angles74.scale.setTo(1.1,1);
        _this.angles74.name = 'angle7';
        _this.angles74.inputEnabled = true;
        _this.angles74.addChild(_this.child28);
        _this.angles74.visible = false;
        
        _this.angles75 = _this.add.sprite(600,238,'8_2_2angle7');
        _this.angles75.anchor.setTo(0.5);
        _this.angles75.scale.setTo(1.1,1);
        _this.angles75.name = 'angle7';
        _this.angles75.inputEnabled = true;
        _this.angles75.addChild(_this.child29);
        _this.angles75.visible = false;
        
        _this.angles76 = _this.add.sprite(638,238,'8_2_2angle7');
        _this.angles76.anchor.setTo(0.5);
        _this.angles76.scale.setTo(1.1,1);
        _this.angles76.name = 'angle7';
        _this.angles76.inputEnabled = true;
        _this.angles76.addChild(_this.child30);
        _this.angles76.visible = false;
        
        _this.angles77 = _this.add.sprite(600,314,'8_2_2angle7');
        _this.angles77.anchor.setTo(0.5);
        _this.angles77.scale.setTo(1.1,1);
        _this.angles77.name = 'angle7';
        _this.angles77.inputEnabled = true;
        _this.angles77.addChild(_this.child31);
        _this.angles77.visible = false;
        
        _this.angles78 = _this.add.sprite(638,314,'8_2_2angle7');
        _this.angles78.anchor.setTo(0.5);
        _this.angles78.scale.setTo(1.1,1);
        _this.angles78.name = 'angle7';
        _this.angles78.inputEnabled = true;
        _this.angles78.addChild(_this.child32);
        _this.angles78.visible = false;
        
        _this.angles79 = _this.add.sprite(639,276,'8_2_2angle7');
        _this.angles79.anchor.setTo(0.5);
        _this.angles79.scale.setTo(1.1,1);
        _this.angles79.name = 'angle7';
        _this.angles79.inputEnabled = true;
        _this.angles79.addChild(_this.child33);
        _this.angles79.visible = false;
        
        _this.angles80 = _this.add.sprite(677,276,'8_2_2angle7');
        _this.angles80.anchor.setTo(0.5);
        _this.angles80.scale.setTo(1.1,1);
        _this.angles80.name = 'angle7';
        _this.angles80.inputEnabled = true;
        _this.angles80.addChild(_this.child34);
        _this.angles80.visible = false;
        
        _this.angles81 = _this.add.sprite(754,314,'8_2_2angle7');
        _this.angles81.anchor.setTo(0.5);
        _this.angles81.scale.setTo(1.1,1);
        _this.angles81.name = 'angle7';
        _this.angles81.inputEnabled = true;
        _this.angles81.addChild(_this.child35);
        _this.angles81.visible = false;
        
        _this.angles82 = _this.add.sprite(794,314,'8_2_2angle7');
        _this.angles82.anchor.setTo(0.5);
        _this.angles82.scale.setTo(1.1,1);
        _this.angles82.name = 'angle7';
        _this.angles82.inputEnabled = true;
        _this.angles82.addChild(_this.child36);
        _this.angles82.visible = false;
        
        _this.objGrp1.add(_this.angle1);
        _this.objGrp1.add(_this.angle2);
        _this.objGrp1.add(_this.angle3);
        _this.objGrp1.add(_this.angle4);
        _this.objGrp1.add(_this.angle5);
        _this.objGrp1.add(_this.angle6);
        _this.objGrp1.add(_this.angle7);
        _this.objGrp1.add(_this.angle8);
        //_this.objGrp1.add(_this.eraser);
        
        _this.objGrp2.add(_this.angles11);
        _this.objGrp2.add(_this.angles12);
        _this.objGrp2.add(_this.angles13);
        _this.objGrp2.add(_this.angles14);
        _this.objGrp2.add(_this.angles15);
        _this.objGrp2.add(_this.angles16);
        _this.objGrp2.add(_this.angles17);
        _this.objGrp2.add(_this.angles18);
        _this.objGrp2.add(_this.angles19);
        _this.objGrp2.add(_this.angles20);
        _this.objGrp2.add(_this.angles21);
        _this.objGrp2.add(_this.angles22);
        _this.objGrp2.add(_this.angles31);
        _this.objGrp2.add(_this.angles32);
        _this.objGrp2.add(_this.angles33);
        _this.objGrp2.add(_this.angles34);
        _this.objGrp2.add(_this.angles35);
        _this.objGrp2.add(_this.angles36);
        _this.objGrp2.add(_this.angles51);
        _this.objGrp2.add(_this.angles52);
        _this.objGrp2.add(_this.angles53);
        _this.objGrp2.add(_this.angles54);
        _this.objGrp2.add(_this.angles55);
        _this.objGrp2.add(_this.angles56);
        _this.objGrp2.add(_this.angles71);
        _this.objGrp2.add(_this.angles72);
        _this.objGrp2.add(_this.angles73);
        _this.objGrp2.add(_this.angles74);
        _this.objGrp2.add(_this.angles75);
        _this.objGrp2.add(_this.angles76);
        _this.objGrp2.add(_this.angles77);
        _this.objGrp2.add(_this.angles78);
        _this.objGrp2.add(_this.angles79);
        _this.objGrp2.add(_this.angles80);
        _this.objGrp2.add(_this.angles81);
        _this.objGrp2.add(_this.angles82);
        
        
    },
    
     gotoFifthQuestion:function()
    {
        console.log("gotoFifthQuestion");
        //_this.getVoice();
       _this.questionNo=5;
        
        _this.allboxes();
        _this.boxGrp = _this.add.group();
        
        _this.a1 = _this.add.sprite(75,167,'8_2_2angle1');
        _this.a1.anchor.setTo(0.5);
        _this.a1.scale.setTo(1,0.8);

        _this.a2 = _this.add.sprite(150,165,'8_2_2angle2');
        _this.a2.anchor.setTo(0.5);
        _this.a2.scale.setTo(1.1,1);
        
        _this.a3 = _this.add.sprite(70,237,'8_2_2angle3');
        _this.a3.anchor.setTo(0.5);
        //_this.a3.scale.setTo(1.2,1.1);
       
        _this.a4 = _this.add.sprite(150,237,'8_2_2angle4');
        _this.a4.anchor.setTo(0.5);
        _this.a4.scale.setTo(1.1,1);
       
        _this.a5 = _this.add.sprite(70,309,'8_2_2angle5');
        _this.a5.anchor.setTo(0.5);
        //_this.a5.scale.setTo(1.2,1.1);
       
        _this.a6 = _this.add.sprite(150,308,'8_2_2angle6');
        _this.a6.anchor.setTo(0.5);
        _this.a6.scale.setTo(1.1,1);
        
        _this.a7 = _this.add.sprite(75,385,'8_2_2angle7');
        _this.a7.anchor.setTo(0.5);
        _this.a7.scale.setTo(1.1,1);
        
        _this.a8 = _this.add.sprite(148,380,'8_2_2angle8');
        _this.a8.anchor.setTo(0.5);
        _this.a8.scale.setTo(1.1,1);
        
        _this.boxGrp.add(_this.a1);
        _this.boxGrp.add(_this.a2);
        _this.boxGrp.add(_this.a3);
        _this.boxGrp.add(_this.a4);
        _this.boxGrp.add(_this.a5);
        _this.boxGrp.add(_this.a6);
        _this.boxGrp.add(_this.a7);
        _this.boxGrp.add(_this.a8);
        
        _this.shape = _this.add.sprite(360,270,'8_2_2shape6');
        _this.shape.anchor.setTo(0.5);
        //_this.shape.scale.setTo(1.2,1.2);
        
        _this.dot = _this.add.sprite(690,270,'8_2_2dot6');
        _this.dot.anchor.setTo(0.5);
       // _this.dot.scale.setTo(1.2,1.2);
        
        _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        
       _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
          _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
       // _this.targetchild3.visible = false;
        
        _this.targetchild4 = _this.add.graphics(-10, -10);
        _this.targetchild4.lineStyle(2, 0x0000FF, 0);
        _this.targetchild4.drawRect(0, 0, 20, 20);
       // _this.targetchild4.visible = false;
        
        _this.targetchild5 = _this.add.graphics(-10, -10);
        _this.targetchild5.lineStyle(2, 0x0000FF, 0);
        _this.targetchild5.drawRect(0, 0, 20, 20);
        //_this.targetchild5.visible = false;
        
        _this.targetchild6 = _this.add.graphics(-10, -10);
        _this.targetchild6.lineStyle(2, 0x0000FF, 0);
        _this.targetchild6.drawRect(0, 0, 20, 20);
       // _this.targetchild6.visible = false;
        
        _this.targetchild7 = _this.add.graphics(-10, -10);
        _this.targetchild7.lineStyle(2, 0x0000FF, 0);
        _this.targetchild7.drawRect(0, 0, 20, 20);
       // _this.targetchild7.visible = false;
        
        _this.targetchild8 = _this.add.graphics(-10, -10);
        _this.targetchild8.lineStyle(2, 0x0000FF, 0);
        _this.targetchild8.drawRect(0, 0, 20, 20);
        //_this.targetchild8.visible = false;
        
       /* _this.targetchild9 = _this.add.graphics(-10, -10);
        _this.targetchild9.lineStyle(2, 0x0000FF, 0);
        _this.targetchild9.drawRect(0, 0, 20, 20);
        //_this.targetchild9.visible = false;*/
        
        _this.angle1 = _this.add.sprite(75,167,'8_2_2angle1');
        _this.angle1.anchor.setTo(0.5);
        _this.angle1.scale.setTo(1,0.8);
        _this.angle1.xpos = 75;
        _this.angle1.ypos = 167;
        _this.angle1.name = 'angle1';
        _this.angle1.inputEnabled = true;
        _this.angle1.addChild(_this.targetchild1);
        _this.angle1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle2 = _this.add.sprite(150,165,'8_2_2angle2');
        _this.angle2.anchor.setTo(0.5);
        _this.angle2.scale.setTo(1.1,1);
        _this.angle2.xpos = 150;
        _this.angle2.ypos = 165;
        _this.angle2.name = 'angle2';
        _this.angle2.inputEnabled = true;
        _this.angle2.addChild(_this.targetchild2);
        _this.angle2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle3 = _this.add.sprite(70,237,'8_2_2angle3');
        _this.angle3.anchor.setTo(0.5);
        //_this.angle3.scale.setTo(1.2,1.1);
        _this.angle3.xpos = 70;
        _this.angle3.ypos = 237;
        _this.angle3.name = 'angle3';
        _this.angle3.inputEnabled = true;
        _this.angle3.addChild(_this.targetchild3);
        _this.angle3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle4 = _this.add.sprite(150,237,'8_2_2angle4');
        _this.angle4.anchor.setTo(0.5);
        _this.angle4.scale.setTo(1.1,1);
        _this.angle4.xpos = 150;
        _this.angle4.ypos = 237;
        _this.angle4.name = 'angle4';
        _this.angle4.inputEnabled = true;
        _this.angle4.addChild(_this.targetchild4);
        _this.angle4.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle5 = _this.add.sprite(70,309,'8_2_2angle5');
        _this.angle5.anchor.setTo(0.5);
        //_this.angle5.scale.setTo(1.2,1.1);
        _this.angle5.xpos = 70;
        _this.angle5.ypos = 309;
        _this.angle5.name = 'angle5';
        _this.angle5.inputEnabled = true;
        _this.angle5.addChild(_this.targetchild5);
        _this.angle5.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle6 = _this.add.sprite(150,308,'8_2_2angle6');
        _this.angle6.anchor.setTo(0.5);
        _this.angle6.scale.setTo(1.1,1);
        _this.angle6.xpos = 150;
        _this.angle6.ypos = 308;
        _this.angle6.name = 'angle6';
        _this.angle6.inputEnabled = true;
        _this.angle6.addChild(_this.targetchild6);
        _this.angle6.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle7 = _this.add.sprite(75,385,'8_2_2angle7');
        _this.angle7.anchor.setTo(0.5);
        _this.angle7.scale.setTo(1.1,1);
        _this.angle7.xpos = 75;
        _this.angle7.ypos = 385;
        _this.angle7.name = 'wrongAns';
        _this.angle7.inputEnabled = true;
        _this.angle7.addChild(_this.targetchild7);
        _this.angle7.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle8 = _this.add.sprite(148,380,'8_2_2angle8');
        _this.angle8.anchor.setTo(0.5);
        _this.angle8.scale.setTo(1.1,1);
        _this.angle8.xpos = 148;
        _this.angle8.ypos = 380;
        _this.angle8.name = 'angle8';
        _this.angle8.inputEnabled = true;
        _this.angle8.addChild(_this.targetchild8);
        _this.angle8.events.onInputDown.add(_this.onDragstart,_this);
        
        /*_this.eraser = _this.add.sprite(70,460,'8_2_2eraser');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.name = 'eraser';
        _this.eraser.xpos = 70;
        _this.eraser.ypos = 460;
        _this.eraser.inputEnabled = true;
        _this.eraser.addChild(_this.targetchild9);
        _this.eraser.events.onInputDown.add(_this.onDragstart,_this);*/
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(10, 10, 10, 10);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(10, 10, 10, 10);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(10, 10, 10, 10);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(10, 10, 10, 10);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(10, 10, 10, 10);
        _this.child5.visible = false;
        
        _this.child6 = _this.add.graphics(-10, -10);
        _this.child6.lineStyle(2, 0x0000FF, 1);
        _this.child6.drawRect(10, 10, 10, 10);
        _this.child6.visible = false;
        
        _this.child7 = _this.add.graphics(-10, -10);
        _this.child7.lineStyle(2, 0x0000FF, 1);
        _this.child7.drawRect(10, 10, 10, 10);
        _this.child7.visible = false;
        
        _this.child8 = _this.add.graphics(-10, -10);
        _this.child8.lineStyle(2, 0x0000FF, 1);
        _this.child8.drawRect(10, 10, 10, 10);
        _this.child8.visible = false;
        
        _this.child9 = _this.add.graphics(-10, -10);
        _this.child9.lineStyle(2, 0x0000FF, 1);
        _this.child9.drawRect(10, 10, 10, 10);
        _this.child9.visible = false;
        
        _this.child10 = _this.add.graphics(-10, -10);
        _this.child10.lineStyle(2, 0x0000FF, 1);
        _this.child10.drawRect(10, 10, 10, 10);
        _this.child10.visible = false;
        
         _this.child11 = _this.add.graphics(-10, -10);
        _this.child11.lineStyle(2, 0x0000FF, 1);
        _this.child11.drawRect(10, 10, 10, 10);
        _this.child11.visible = false;
        
        _this.child12 = _this.add.graphics(-10, -10);
        _this.child12.lineStyle(2, 0x0000FF, 1);
        _this.child12.drawRect(10, 10, 10, 10);
        _this.child12.visible = false;
        
        _this.child13 = _this.add.graphics(-10, -10);
        _this.child13.lineStyle(2, 0x0000FF, 1);
        _this.child13.drawRect(10, 10, 10, 10);
        _this.child13.visible = false;
        
        _this.child14 = _this.add.graphics(-10, -10);
        _this.child14.lineStyle(2, 0x0000FF, 1);
        _this.child14.drawRect(10, 10, 10, 10);
        _this.child14.visible = false;
        
        _this.child15 = _this.add.graphics(-10, -10);
        _this.child15.lineStyle(2, 0x0000FF, 1);
        _this.child15.drawRect(10, 10, 10, 10);
        _this.child15.visible = false;
        
        _this.child16 = _this.add.graphics(-10, -10);
        _this.child16.lineStyle(2, 0x0000FF, 1);
        _this.child16.drawRect(10, 10, 10, 10);
        _this.child16.visible = false;
        
        _this.child17 = _this.add.graphics(-10, -10);
        _this.child17.lineStyle(2, 0x0000FF, 1);
        _this.child17.drawRect(10, 10, 10, 10);
        _this.child17.visible = false;
        
        _this.child18 = _this.add.graphics(-10, -10);
        _this.child18.lineStyle(2, 0x0000FF, 1);
        _this.child18.drawRect(10, 10, 10, 10);
        _this.child18.visible = false;
        
        _this.child19 = _this.add.graphics(-10, -10);
        _this.child19.lineStyle(2, 0x0000FF, 1);
        _this.child19.drawRect(10, 10, 10, 10);
        _this.child19.visible = false;
        
        _this.child20 = _this.add.graphics(-10, -10);
        _this.child20.lineStyle(2, 0x0000FF, 1);
        _this.child20.drawRect(10, 10, 10, 10);
        _this.child20.visible = false;
        
        _this.child21 = _this.add.graphics(-10, -10);
        _this.child21.lineStyle(2, 0x0000FF, 1);
        _this.child21.drawRect(10, 10, 10, 10);
        _this.child21.visible = false;
        
        _this.child22 = _this.add.graphics(-10, -10);
        _this.child22.lineStyle(2, 0x0000FF, 1);
        _this.child22.drawRect(10, 10, 10, 10);
        _this.child22.visible = false;
        
        _this.child23 = _this.add.graphics(-10, -10);
        _this.child23.lineStyle(2, 0x0000FF, 1);
        _this.child23.drawRect(10, 10, 10, 10);
        _this.child23.visible = false;
        
        _this.child24 = _this.add.graphics(-10, -10);
        _this.child24.lineStyle(2, 0x0000FF, 1);
        _this.child24.drawRect(10, 10, 10, 10);
        _this.child24.visible = false;
        
        _this.child25 = _this.add.graphics(-10, -10);
        _this.child25.lineStyle(2, 0x0000FF, 1);
        _this.child25.drawRect(10, 10, 10, 10);
        _this.child25.visible = false;
        
        _this.child26 = _this.add.graphics(-10, -10);
        _this.child26.lineStyle(2, 0x0000FF, 1);
        _this.child26.drawRect(10, 10, 10, 10);
        _this.child26.visible = false;0
        
        _this.child27 = _this.add.graphics(-10, -10);
        _this.child27.lineStyle(2, 0x0000FF, 1);
        _this.child27.drawRect(10, 10, 10, 10);
        _this.child27.visible = false;
        
        _this.child28 = _this.add.graphics(-10, -10);
        _this.child28.lineStyle(2, 0x0000FF, 1);
        _this.child28.drawRect(10, 10, 10, 10);
        _this.child28.visible = false;
        
        _this.angles11 = _this.add.sprite(600,259,'8_2_2angle1');
        _this.angles11.anchor.setTo(0.5);
        _this.angles11.scale.setTo(1,0.8);
        _this.angles11.name = 'angle1';
        _this.angles11.inputEnabled = true;
        _this.angles11.addChild(_this.child1);
        _this.angles11.visible = false;
        
        _this.angles12 = _this.add.sprite(600,291,'8_2_2angle1');
        _this.angles12.anchor.setTo(0.5);
        _this.angles12.scale.setTo(1,0.8);
        _this.angles12.name = 'angle1';
        _this.angles12.inputEnabled = true;
        _this.angles12.addChild(_this.child2);
        _this.angles12.visible = false;
        
        _this.angles13 = _this.add.sprite(792,259,'8_2_2angle1');
        _this.angles13.anchor.setTo(0.5);
        _this.angles13.scale.setTo(1,0.8);
        _this.angles13.name = 'angle1';
        _this.angles13.inputEnabled = true;
        _this.angles13.addChild(_this.child3);
        _this.angles13.visible = false;
        
        _this.angles14 = _this.add.sprite(792,291,'8_2_2angle1');
        _this.angles14.anchor.setTo(0.5);
        _this.angles14.scale.setTo(1,0.8);
        _this.angles14.name = 'angle1';
        _this.angles14.inputEnabled = true;
        _this.angles14.addChild(_this.child4);
        _this.angles14.visible = false;
        
        _this.angles21 = _this.add.sprite(741,191,'8_2_2angle2');
        _this.angles21.anchor.setTo(0.5);
        _this.angles21.scale.setTo(1.1,1);
        _this.angles21.name = 'angle2';
        _this.angles21.inputEnabled = true;
        _this.angles21.addChild(_this.child5);
        _this.angles21.visible = false;
        
        _this.angles22 = _this.add.sprite(772,224,'8_2_2angle2');
        _this.angles22.anchor.setTo(0.5);
        _this.angles22.scale.setTo(1.1,1);
        _this.angles22.name = 'angle2';
        _this.angles22.inputEnabled = true;
        _this.angles22.addChild(_this.child6);
        _this.angles22.visible = false;
        
        _this.angles23 = _this.add.sprite(805,256,'8_2_2angle2');
        _this.angles23.anchor.setTo(0.5);
        _this.angles23.scale.setTo(1.1,1);
        _this.angles23.name = 'angle2';
        _this.angles23.inputEnabled = true;
        _this.angles23.addChild(_this.child7);
        _this.angles23.visible = false;
        
        _this.angles24 = _this.add.sprite(610,320,'8_2_2angle2');
        _this.angles24.anchor.setTo(0.5);
        _this.angles24.scale.setTo(1.1,1.1);
        _this.angles24.name = 'angle2';
        _this.angles24.inputEnabled = true;
        _this.angles24.addChild(_this.child8);
        _this.angles24.visible = false;
        
        _this.angles31 = _this.add.sprite(708,160,'8_2_2angle3');
        _this.angles31.anchor.setTo(0.5);
        //_this.angles31.scale.setTo(1,1);
        _this.angles31.name = 'angle3';
        _this.angles31.inputEnabled = true;
        _this.angles31.addChild(_this.child9);
        _this.angles31.visible = false;
        
        _this.angles32 = _this.add.sprite(676,192,'8_2_2angle3');
        _this.angles32.anchor.setTo(0.5);
        //_this.angles32.scale.setTo(1.2,1.1);
        _this.angles32.name = 'angle3';
        _this.angles32.inputEnabled = true;
        _this.angles32.addChild(_this.child10);
        _this.angles32.visible = false;
        
        _this.angles33 = _this.add.sprite(676,384,'8_2_2angle3');
        _this.angles33.anchor.setTo(0.5);
        //_this.angles33.scale.setTo(1.2,1.1);
        _this.angles33.name = 'angle3';
        _this.angles33.inputEnabled = true;
        _this.angles33.addChild(_this.child11);
        _this.angles33.visible = false;
        
        _this.angles34 = _this.add.sprite(708,352,'8_2_2angle3');
        _this.angles34.anchor.setTo(0.5);
        //_this.angles34.scale.setTo(1.2,1.1);
        _this.angles34.name = 'angle3';
        _this.angles34.inputEnabled = true;
        _this.angles34.addChild(_this.child12);
        _this.angles34.visible = false;
        
        _this.angles41 = _this.add.sprite(580,256,'8_2_2angle4');
        _this.angles41.anchor.setTo(0.5);
        _this.angles41.scale.setTo(1.1,1);
        _this.angles41.name = 'angle4';
        _this.angles41.inputEnabled = true;
        _this.angles41.addChild(_this.child13);
        _this.angles41.visible = false;
        
        _this.angles42 = _this.add.sprite(612,223,'8_2_2angle4');
        _this.angles42.anchor.setTo(0.5);
        _this.angles42.scale.setTo(1.1,1);
        _this.angles42.name = 'angle4';
        _this.angles42.inputEnabled = true;
        _this.angles42.addChild(_this.child14);
        _this.angles42.visible = false;
        
        _this.angles43 = _this.add.sprite(642,191,'8_2_2angle4');
        _this.angles43.anchor.setTo(0.5);
        _this.angles43.scale.setTo(1.1,1);
        _this.angles43.name = 'angle4';
        _this.angles43.inputEnabled = true;
        _this.angles43.addChild(_this.child15);
        _this.angles43.visible = false;
        
        _this.angles44 = _this.add.sprite(774,319,'8_2_2angle4');
        _this.angles44.anchor.setTo(0.5);
        _this.angles44.scale.setTo(1.1,1);
        _this.angles44.name = 'angle4';
        _this.angles44.inputEnabled = true;
        _this.angles44.addChild(_this.child16);
        _this.angles44.visible = false;
        
        _this.angles51 = _this.add.sprite(676,159,'8_2_2angle5');
        _this.angles51.anchor.setTo(0.5);
        //_this.angles51.scale.setTo(1.2,1.1);
        _this.angles51.name = 'angle5';
        _this.angles51.inputEnabled = true;
        _this.angles51.addChild(_this.child17);
        _this.angles51.visible = false;
        
        _this.angles52 = _this.add.sprite(708,192,'8_2_2angle5');
        _this.angles52.anchor.setTo(0.5);
        //_this.angles52.scale.setTo(1.2,1.1);
        _this.angles52.name = 'angle5';
        _this.angles52.inputEnabled = true;
        _this.angles52.addChild(_this.child18);
        _this.angles52.visible = false;
        
        _this.angles53 = _this.add.sprite(676,352,'8_2_2angle5'); 
        _this.angles53.anchor.setTo(0.5);
        //_this.angles53.scale.setTo(1.2,1.1);
        _this.angles53.name = 'angle5';
        _this.angles53.inputEnabled = true;
        _this.angles53.addChild(_this.child19);
        _this.angles53.visible = false;
        
        _this.angles54 = _this.add.sprite(708,385,'8_2_2angle5');
        _this.angles54.anchor.setTo(0.5);
        //_this.angles54.scale.setTo(1.2,1.1);
        _this.angles54.name = 'angle5';
        _this.angles54.inputEnabled = true;
        _this.angles54.addChild(_this.child20);
        _this.angles54.visible = false;
        
        _this.angles61 = _this.add.sprite(580,288,'8_2_2angle6');
        _this.angles61.anchor.setTo(0.5);
        _this.angles61.scale.setTo(1.1,1);
        _this.angles61.name = 'angle6';
        _this.angles61.inputEnabled = true;
        _this.angles61.addChild(_this.child21);
        _this.angles61.visible = false;
        
        _this.angles62 = _this.add.sprite(613,321,'8_2_2angle6');
        _this.angles62.anchor.setTo(0.5);
        _this.angles62.scale.setTo(1.1,1);
        _this.angles62.name = 'angle6';
        _this.angles62.inputEnabled = true;
        _this.angles62.addChild(_this.child22);
        _this.angles62.visible = false;
        
        _this.angles63 = _this.add.sprite(645,352,'8_2_2angle6');
        _this.angles63.anchor.setTo(0.5);
        _this.angles63.scale.setTo(1.1,1);
        _this.angles63.name = 'angle6';
        _this.angles63.inputEnabled = true;
        _this.angles63.addChild(_this.child23);
        _this.angles63.visible = false;
        
        _this.angles64 = _this.add.sprite(774,225,'8_2_2angle6');
        _this.angles64.anchor.setTo(0.5);
        _this.angles64.scale.setTo(1.1,1);
        _this.angles64.name = 'angle6';
        _this.angles64.inputEnabled = true;
        _this.angles64.addChild(_this.child24);
        _this.angles64.visible = false;
        
        _this.angles81 = _this.add.sprite(740,353,'8_2_2angle8');
        _this.angles81.anchor.setTo(0.5);
        _this.angles81.scale.setTo(1.1,1);
        _this.angles81.name = 'angle8';
        _this.angles81.inputEnabled = true;
        _this.angles81.addChild(_this.child25);
        _this.angles81.visible = false;
        
        _this.angles82 = _this.add.sprite(772,322,'8_2_2angle8');
        _this.angles82.anchor.setTo(0.5);
        _this.angles82.scale.setTo(1.1,1);
        _this.angles82.name = 'angle8';
        _this.angles82.inputEnabled = true;
        _this.angles82.addChild(_this.child26);
        _this.angles82.visible = false;
        
        _this.angles83 = _this.add.sprite(805,288,'8_2_2angle8');
        _this.angles83.anchor.setTo(0.5);
        _this.angles83.scale.setTo(1.1,1);
        _this.angles83.name = 'angle8';
        _this.angles83.inputEnabled = true;
        _this.angles83.addChild(_this.child27);
        _this.angles83.visible = false;
        
        _this.angles84 = _this.add.sprite(609,225,'8_2_2angle8');
        _this.angles84.anchor.setTo(0.5);
        _this.angles84.scale.setTo(1.1,1);
        _this.angles84.name = 'angle8';
        _this.angles84.inputEnabled = true;
        _this.angles84.addChild(_this.child28);
        _this.angles84.visible = false;
        
        _this.objGrp1.add(_this.angle1);
        _this.objGrp1.add(_this.angle2);
        _this.objGrp1.add(_this.angle3);
        _this.objGrp1.add(_this.angle4);
        _this.objGrp1.add(_this.angle5);
        _this.objGrp1.add(_this.angle6);
        _this.objGrp1.add(_this.angle7);
        _this.objGrp1.add(_this.angle8);
        //_this.objGrp1.add(_this.eraser);
        
        _this.objGrp2.add(_this.angles11);
        _this.objGrp2.add(_this.angles12);
        _this.objGrp2.add(_this.angles13);
        _this.objGrp2.add(_this.angles14);
        _this.objGrp2.add(_this.angles21);
        _this.objGrp2.add(_this.angles22);
        _this.objGrp2.add(_this.angles23);
        _this.objGrp2.add(_this.angles24);
        _this.objGrp2.add(_this.angles31);
        _this.objGrp2.add(_this.angles32);
        _this.objGrp2.add(_this.angles33);
        _this.objGrp2.add(_this.angles34);
        _this.objGrp2.add(_this.angles41);
        _this.objGrp2.add(_this.angles42);
        _this.objGrp2.add(_this.angles43);
        _this.objGrp2.add(_this.angles44);
        _this.objGrp2.add(_this.angles51);
        _this.objGrp2.add(_this.angles52);
        _this.objGrp2.add(_this.angles53);
        _this.objGrp2.add(_this.angles54);
        _this.objGrp2.add(_this.angles61);
        _this.objGrp2.add(_this.angles62);
        _this.objGrp2.add(_this.angles63);
        _this.objGrp2.add(_this.angles64);
        _this.objGrp2.add(_this.angles81);
        _this.objGrp2.add(_this.angles82);
        _this.objGrp2.add(_this.angles83);
        _this.objGrp2.add(_this.angles84);
        
        
    },
    
     gotoSixthQuestion:function()
    {
        console.log("gotoSixthQuestion");
       _this.questionNo=6;
        if(_this.no11 == 3)
            {
                _this.getVoice();
            }
        
        _this.allboxes();
        _this.visiblebox();
        
        _this.shape = _this.add.sprite(360,270,'8_2_2shape7');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(1.3,1.3);
        
        _this.dot = _this.add.sprite(690,270,'sg8_2_2dot');
        _this.dot.anchor.setTo(0.5);
        _this.dot.scale.setTo(1.2,1.2);
        
        _this.dot1 = _this.add.sprite(693.5,196.5,'8_2_2yellow');
        _this.dot1.anchor.setTo(0.5);
        _this.dot1.scale.setTo(1.2,1.2);
        //_this.dot1.frame=5;
        _this.dot1.animations.add('8_2_2yellow',0);
        _this.dot1.animations.play('8_2_2yellow',1.5,true);
        
        _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
          _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
       // _this.targetchild3.visible = false;
        
        _this.targetchild4 = _this.add.graphics(-10, -10);
        _this.targetchild4.lineStyle(2, 0x0000FF, 0);
        _this.targetchild4.drawRect(0, 0, 20, 20);
       // _this.targetchild4.visible = false;
        
        _this.targetchild5 = _this.add.graphics(-10, -10);
        _this.targetchild5.lineStyle(2, 0x0000FF, 0);
        _this.targetchild5.drawRect(0, 0, 20, 20);
        //_this.targetchild5.visible = false;
        
        _this.targetchild6 = _this.add.graphics(-10, -10);
        _this.targetchild6.lineStyle(2, 0x0000FF, 0);
        _this.targetchild6.drawRect(0, 0, 20, 20);
       // _this.targetchild6.visible = false;
        
        _this.targetchild7 = _this.add.graphics(-10, -10);
        _this.targetchild7.lineStyle(2, 0x0000FF, 0);
        _this.targetchild7.drawRect(0, 0, 20, 20);
       // _this.targetchild7.visible = false;
        
        _this.targetchild8 = _this.add.graphics(-10, -10);
        _this.targetchild8.lineStyle(2, 0x0000FF, 0);
        _this.targetchild8.drawRect(0, 0, 20, 20);
        //_this.targetchild8.visible = false;
        
       /* _this.targetchild9 = _this.add.graphics(-10, -10);
        _this.targetchild9.lineStyle(2, 0x0000FF, 0);
        _this.targetchild9.drawRect(0, 0, 20, 20);
        //_this.targetchild9.visible = false;*/
        
        _this.angle1 = _this.add.sprite(75,167,'8_2_2angle1');
        _this.angle1.anchor.setTo(0.5);
        _this.angle1.scale.setTo(1.1,0.9);
        _this.angle1.xpos = 75;
        _this.angle1.ypos = 167;
        _this.angle1.name = 'angle1';
        _this.angle1.inputEnabled = true;
        _this.angle1.addChild(_this.targetchild1);
        _this.angle1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle2 = _this.add.sprite(150,165,'8_2_2angle2');
        _this.angle2.anchor.setTo(0.5);
        _this.angle2.scale.setTo(1.2,1.2);
        _this.angle2.xpos = 150;
        _this.angle2.ypos = 165;
        _this.angle2.name = 'angle2';
        _this.angle2.inputEnabled = true;
        _this.angle2.addChild(_this.targetchild2);
        _this.angle2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle3 = _this.add.sprite(70,237,'8_2_2angle3');
        _this.angle3.anchor.setTo(0.5);
        _this.angle3.scale.setTo(1.2,1.2);
        _this.angle3.xpos = 70;
        _this.angle3.ypos = 237;
        _this.angle3.name = 'angle3';
        _this.angle3.inputEnabled = true;
        _this.angle3.addChild(_this.targetchild3);
        _this.angle3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle4 = _this.add.sprite(150,237,'8_2_2angle4');
        _this.angle4.anchor.setTo(0.5);
        _this.angle4.scale.setTo(1.2,1.2);
        _this.angle4.xpos = 150;
        _this.angle4.ypos = 237;
        _this.angle4.name = 'angle4';
        _this.angle4.inputEnabled = true;
        _this.angle4.addChild(_this.targetchild4);
        _this.angle4.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle5 = _this.add.sprite(70,309,'8_2_2angle5');
        _this.angle5.anchor.setTo(0.5);
        _this.angle5.scale.setTo(1.2,1.2);
        _this.angle5.xpos = 70;
        _this.angle5.ypos = 309;
        _this.angle5.name = 'angle5';
        _this.angle5.inputEnabled = true;
        _this.angle5.addChild(_this.targetchild5);
        _this.angle5.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle6 = _this.add.sprite(150,308,'8_2_2angle6');
        _this.angle6.anchor.setTo(0.5);
        _this.angle6.scale.setTo(1.2,1.2);
        _this.angle6.xpos = 150;
        _this.angle6.ypos = 308;
        _this.angle6.name = 'angle6';
        _this.angle6.inputEnabled = true;
        _this.angle6.addChild(_this.targetchild6);
        _this.angle6.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle7 = _this.add.sprite(75,385,'8_2_2angle7');
        _this.angle7.anchor.setTo(0.5);
        _this.angle7.scale.setTo(1.1,1);
        _this.angle7.xpos = 75;
        _this.angle7.ypos = 385;
        _this.angle7.name = 'angle7';
        _this.angle7.inputEnabled = true;
        _this.angle7.addChild(_this.targetchild7);
        _this.angle7.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle8 = _this.add.sprite(148,380,'8_2_2angle8');
        _this.angle8.anchor.setTo(0.5);
        _this.angle8.scale.setTo(1.2,1.2);
        _this.angle8.xpos = 148;
        _this.angle8.ypos = 380;
        _this.angle8.name = 'angle8';
        _this.angle8.inputEnabled = true;
        _this.angle8.addChild(_this.targetchild8);
        _this.angle8.events.onInputDown.add(_this.onDragstart,_this);
        
        /*_this.eraser = _this.add.sprite(70,460,'8_2_2eraser');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.name = 'eraser';
        _this.eraser.xpos = 70;
        _this.eraser.ypos = 460;
        _this.eraser.inputEnabled = true;
        _this.eraser.addChild(_this.targetchild9);
        _this.eraser.events.onInputDown.add(_this.onDragstart,_this);*/
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(10, 10, 10, 10);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(10, 10, 10, 10);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(10, 10, 10, 10);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(10, 10, 10, 10);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(10, 10, 10, 10);
        _this.child5.visible = false;
        
        _this.child6 = _this.add.graphics(-10, -10);
        _this.child6.lineStyle(2, 0x0000FF, 1);
        _this.child6.drawRect(10, 10, 10, 10);
        _this.child6.visible = false;
        
        _this.child7 = _this.add.graphics(-10, -10);
        _this.child7.lineStyle(2, 0x0000FF, 1);
        _this.child7.drawRect(10, 10, 10, 10);
        _this.child7.visible = false;
        
        _this.child8 = _this.add.graphics(-10, -10);
        _this.child8.lineStyle(2, 0x0000FF, 1);
        _this.child8.drawRect(10, 10, 10, 10);
        _this.child8.visible = false;
        
        _this.child9 = _this.add.graphics(-10, -10);
        _this.child9.lineStyle(2, 0x0000FF, 1);
        _this.child9.drawRect(10, 10, 10, 10);
        _this.child9.visible = false;
        
        _this.child10 = _this.add.graphics(-10, -10);
        _this.child10.lineStyle(2, 0x0000FF, 1);
        _this.child10.drawRect(10, 10, 10, 10);
        _this.child10.visible = false;
        
        _this.child11 = _this.add.graphics(-10, -10);
        _this.child11.lineStyle(2, 0x0000FF, 1);
        _this.child11.drawRect(10, 10, 10, 10);
        _this.child11.visible = false;
        
        _this.child12 = _this.add.graphics(-10, -10);
        _this.child12.lineStyle(2, 0x0000FF, 1);
        _this.child12.drawRect(10, 10, 10, 10);
        _this.child12.visible = false;
        
        _this.child13 = _this.add.graphics(-10, -10);
        _this.child13.lineStyle(2, 0x0000FF, 1);
        _this.child13.drawRect(10, 10, 10, 10);
        _this.child13.visible = false;
        
        _this.child14 = _this.add.graphics(-10, -10);
        _this.child14.lineStyle(2, 0x0000FF, 1);
        _this.child14.drawRect(10, 10, 10, 10);
        _this.child14.visible = false;
        
        _this.child15 = _this.add.graphics(-10, -10);
        _this.child15.lineStyle(2, 0x0000FF, 1);
        _this.child15.drawRect(10, 10, 10, 10);
        _this.child15.visible = false;
        
        _this.child16 = _this.add.graphics(-10, -10);
        _this.child16.lineStyle(2, 0x0000FF, 1);
        _this.child16.drawRect(10, 10, 10, 10);
        _this.child16.visible = false;
        
        _this.child17 = _this.add.graphics(-10, -10);
        _this.child17.lineStyle(2, 0x0000FF, 1);
        _this.child17.drawRect(10, 10, 10, 10);
        _this.child17.visible = false;
        
        _this.child18 = _this.add.graphics(-10, -10);
        _this.child18.lineStyle(2, 0x0000FF, 1);
        _this.child18.drawRect(10, 10, 10, 10);
        _this.child18.visible = false;
        
        _this.child19 = _this.add.graphics(-10, -10);
        _this.child19.lineStyle(2, 0x0000FF, 1);
        _this.child19.drawRect(10, 10, 10, 10);
        _this.child19.visible = false;
        
        _this.child20 = _this.add.graphics(-10, -10);
        _this.child20.lineStyle(2, 0x0000FF, 1);
        _this.child20.drawRect(10, 10, 10, 10);
        _this.child20.visible = false;
        
        _this.child21 = _this.add.graphics(-10, -10);
        _this.child21.lineStyle(2, 0x0000FF, 1);
        _this.child21.drawRect(10, 10, 10, 10);
        _this.child21.visible = false;
        
        _this.child22 = _this.add.graphics(-10, -10);
        _this.child22.lineStyle(2, 0x0000FF, 1);
        _this.child22.drawRect(10, 10, 10, 10);
        _this.child22.visible = false;
        
        _this.child23 = _this.add.graphics(-10, -10);
        _this.child23.lineStyle(2, 0x0000FF, 1);
        _this.child23.drawRect(10, 10, 10, 10);
        _this.child23.visible = false;
        
        _this.child24 = _this.add.graphics(-10, -10);
        _this.child24.lineStyle(2, 0x0000FF, 1);
        _this.child24.drawRect(10, 10, 10, 10);
        _this.child24.visible = false;
        
        _this.angles11 = _this.add.sprite(619,255,'8_2_2angle1');
        _this.angles11.anchor.setTo(0.5);
        _this.angles11.scale.setTo(1.1,0.9);
        _this.angles11.name = 'angle1';
        _this.angles11.inputEnabled = true;
        _this.angles11.addChild(_this.child1);
        _this.angles11.visible = false;
        
        _this.angles12 = _this.add.sprite(619,294,'8_2_2angle1');
        _this.angles12.anchor.setTo(0.5);
        _this.angles12.scale.setTo(1.1,0.9);
        _this.angles12.name = 'angle1';
        _this.angles12.inputEnabled = true;
        _this.angles12.addChild(_this.child2);
        _this.angles12.visible = false;
        
        _this.angles13 = _this.add.sprite(774,255,'8_2_2angle1');
        _this.angles13.anchor.setTo(0.5);
        _this.angles13.scale.setTo(1.1,0.9);
        _this.angles13.name = 'angle1';
        _this.angles13.inputEnabled = true;
        _this.angles13.addChild(_this.child3);
        _this.angles13.visible = false;
        
        _this.angles14 = _this.add.sprite(774,292,'8_2_2angle1');
        _this.angles14.anchor.setTo(0.5);
        _this.angles14.scale.setTo(1.1,0.9);
        _this.angles14.name = 'angle1';
        _this.angles14.inputEnabled = true;
        _this.angles14.addChild(_this.child4);
        _this.angles14.visible = false;
        
        _this.angles21 = _this.add.sprite(712,214,'8_2_2angle2');
        _this.angles21.anchor.setTo(0.5);
        _this.angles21.scale.setTo(1.2,1.2);
        _this.angles21.name = 'angle2';
        _this.angles21.inputEnabled = true;
        _this.angles21.addChild(_this.child5);
        _this.angles21.visible = false;
        
        _this.angles22 = _this.add.sprite(597,175,'8_2_2angle2');
        _this.angles22.anchor.setTo(0.5);
        _this.angles22.scale.setTo(1.2,1.2);
        _this.angles22.name = 'angle2';
        _this.angles22.inputEnabled = true;
        _this.angles22.addChild(_this.child6);
        _this.angles22.visible = false;
        
        _this.angles23 = _this.add.sprite(790,368,'8_2_2angle2');
        _this.angles23.anchor.setTo(0.5);
        _this.angles23.scale.setTo(1.2,1.2);
        _this.angles23.name = 'angle2';
        _this.angles23.inputEnabled = true;
        _this.angles23.addChild(_this.child7);
        _this.angles23.visible = false;
        
        _this.angles31 = _this.add.sprite(636,215,'8_2_2angle3');
        _this.angles31.anchor.setTo(0.5);
        _this.angles31.scale.setTo(1.2,1.2);
        _this.angles31.name = 'angle3';
        _this.angles31.inputEnabled = true;
        _this.angles31.addChild(_this.child8);
        _this.angles31.visible = false;
        
        _this.angles32 = _this.add.sprite(752,331,'8_2_2angle3');
        _this.angles32.anchor.setTo(0.5);
        _this.angles32.scale.setTo(1.2,1.2);
        _this.angles32.name = 'angle3';
        _this.angles32.inputEnabled = true;
        _this.angles32.addChild(_this.child9);
        _this.angles32.visible = false;
        
        _this.angles41 = _this.add.sprite(673,214,'8_2_2angle4');
        _this.angles41.anchor.setTo(0.5);
        _this.angles41.scale.setTo(1.2,1.2);
        _this.angles41.name = 'angle4';
        _this.angles41.inputEnabled = true;
        _this.angles41.addChild(_this.child10);
        _this.angles41.visible = false;
        
        _this.angles42 = _this.add.sprite(789,175,'8_2_2angle4');
        _this.angles42.anchor.setTo(0.5);
        _this.angles42.scale.setTo(1.2,1.2);
        _this.angles42.name = 'angle4';
        _this.angles42.inputEnabled = true;
        _this.angles42.addChild(_this.child11);
        _this.angles42.visible = false;
        
        _this.angles43 = _this.add.sprite(592,367,'8_2_2angle4');
        _this.angles43.anchor.setTo(0.5);
        _this.angles43.scale.setTo(1.2,1.2);
        _this.angles43.name = 'angle4';
        _this.angles43.inputEnabled = true;
        _this.angles43.addChild(_this.child12);
        _this.angles43.visible = false;
        
        _this.angles51 = _this.add.sprite(752,215,'8_2_2angle5');
        _this.angles51.anchor.setTo(0.5);
        _this.angles51.scale.setTo(1.2,1.2);
        _this.angles51.name = 'angle5';
        _this.angles51.inputEnabled = true;
        _this.angles51.addChild(_this.child13);
        _this.angles51.visible = false;
        
        _this.angles52 = _this.add.sprite(633,330,'8_2_2angle5');
        _this.angles52.anchor.setTo(0.5);
        _this.angles52.scale.setTo(1.2,1.2);
        _this.angles52.name = 'angle5';
        _this.angles52.inputEnabled = true;
        _this.angles52.addChild(_this.child14);
        _this.angles52.visible = false;
        
        _this.angles61 = _this.add.sprite(596,177,'8_2_2angle6');
        _this.angles61.anchor.setTo(0.5);
        _this.angles61.scale.setTo(1.2,1.2);
        _this.angles61.name = 'angle6';
        _this.angles61.inputEnabled = true;
        _this.angles61.addChild(_this.child15);
        _this.angles61.visible = false;
        
        _this.angles62 = _this.add.sprite(673,330,'8_2_2angle6');
        _this.angles62.anchor.setTo(0.5);
        _this.angles62.scale.setTo(1.2,1.2);
        _this.angles62.name = 'angle6';
        _this.angles62.inputEnabled = true;
        _this.angles62.addChild(_this.child16);
        _this.angles62.visible = false;
        
        _this.angles63 = _this.add.sprite(788,370,'8_2_2angle6');
        _this.angles63.anchor.setTo(0.5);
        _this.angles63.scale.setTo(1.2,1.2);
        _this.angles63.name = 'angle6';
        _this.angles63.inputEnabled = true;
        _this.angles63.addChild(_this.child17);
        _this.angles63.visible = false;
        
        _this.angles71 = _this.add.sprite(755,237,'8_2_2angle7');
        _this.angles71.anchor.setTo(0.5);
        _this.angles71.scale.setTo(1.1,1);
        _this.angles71.name = 'angle7';
        _this.angles71.inputEnabled = true;
        _this.angles71.addChild(_this.child18);
        _this.angles71.visible = false;
        
        _this.angles72 = _this.add.sprite(639,237,'8_2_2angle7');
        _this.angles72.anchor.setTo(0.5);
        _this.angles72.scale.setTo(1.1,1);
        _this.angles72.name = 'angle7';
        _this.angles72.inputEnabled = true;
        _this.angles72.addChild(_this.child19);
        _this.angles72.visible = false;
        
        _this.angles73 = _this.add.sprite(756,314,'8_2_2angle7');
        _this.angles73.anchor.setTo(0.5);
        _this.angles73.scale.setTo(1.1,1);
        _this.angles73.name = 'angle7';
        _this.angles73.inputEnabled = true;
        _this.angles73.addChild(_this.child20);
        _this.angles73.visible = false;
        
        _this.angles74 = _this.add.sprite(638,314,'8_2_2angle7');
        _this.angles74.anchor.setTo(0.5);
        _this.angles74.scale.setTo(1.1,1);
        _this.angles74.name = 'angle7';
        _this.angles74.inputEnabled = true;
        _this.angles74.addChild(_this.child21);
        _this.angles74.visible = false;
        
        _this.angles81 = _this.add.sprite(711,331,'8_2_2angle8');
        _this.angles81.anchor.setTo(0.5);
        _this.angles81.scale.setTo(1.2,1.2);
        _this.angles81.name = 'angle8';
        _this.angles81.inputEnabled = true;
        _this.angles81.addChild(_this.child22);
        _this.angles81.visible = false;
        
        _this.angles82 = _this.add.sprite(789,178,'8_2_2angle8');
        _this.angles82.anchor.setTo(0.5);
        _this.angles82.scale.setTo(1.2,1.2);
        _this.angles82.name = 'angle8';
        _this.angles82.inputEnabled = true;
        _this.angles82.addChild(_this.child23);
        _this.angles82.visible = false;
        
        _this.angles83 = _this.add.sprite(594,368,'8_2_2angle8');
        _this.angles83.anchor.setTo(0.5);
        _this.angles83.scale.setTo(1.2,1.2);
        _this.angles83.name = 'angle8';
        _this.angles83.inputEnabled = true;
        _this.angles83.addChild(_this.child24);
        _this.angles83.visible = false;
        
        _this.objGrp1.add(_this.angle1);
        _this.objGrp1.add(_this.angle2);
        _this.objGrp1.add(_this.angle3);
        _this.objGrp1.add(_this.angle4);
        _this.objGrp1.add(_this.angle5);
        _this.objGrp1.add(_this.angle6);
        _this.objGrp1.add(_this.angle7);
        _this.objGrp1.add(_this.angle8);
        //_this.objGrp1.add(_this.eraser);
        
        _this.objGrp2.add(_this.angles11);
        _this.objGrp2.add(_this.angles12);
        _this.objGrp2.add(_this.angles13);
        _this.objGrp2.add(_this.angles14);
        _this.objGrp2.add(_this.angles21);
        _this.objGrp2.add(_this.angles22);
        _this.objGrp2.add(_this.angles23);
        _this.objGrp2.add(_this.angles31);
        _this.objGrp2.add(_this.angles32);
        _this.objGrp2.add(_this.angles41);
        _this.objGrp2.add(_this.angles42);
        _this.objGrp2.add(_this.angles43);
        _this.objGrp2.add(_this.angles51);
        _this.objGrp2.add(_this.angles52);
        _this.objGrp2.add(_this.angles61);
        _this.objGrp2.add(_this.angles62);
        _this.objGrp2.add(_this.angles63);
        _this.objGrp2.add(_this.angles71);
        _this.objGrp2.add(_this.angles72);
        _this.objGrp2.add(_this.angles73);
        _this.objGrp2.add(_this.angles74);
        _this.objGrp2.add(_this.angles81);
        _this.objGrp2.add(_this.angles82);
        _this.objGrp2.add(_this.angles83);
        
    },
    
     gotoSeventhQuestion:function()
    {
        console.log("gotoSeventhQuestion");
       _this.questionNo=7;
        
         if(_this.no11 == 3)
            {
                _this.getVoice();
            }
        
        _this.allboxes();
        _this.visiblebox();
        
        _this.shape = _this.add.sprite(360,270,'8_2_2shape8');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(1.2,1.2);
        
        _this.dot = _this.add.sprite(690,270,'sg8_2_2dot');
        _this.dot.anchor.setTo(0.5);
        _this.dot.scale.setTo(1.2,1.2);
        
        _this.dot1 = _this.add.sprite(693.5,196.5,'8_2_2yellow');
        _this.dot1.anchor.setTo(0.5);
        _this.dot1.scale.setTo(1.2,1.2);
        //_this.dot1.frame=5;
        _this.dot1.animations.add('8_2_2yellow',0);
        _this.dot1.animations.play('8_2_2yellow',1.5,true);
        
        _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
          _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
       // _this.targetchild3.visible = false;
        
        _this.targetchild4 = _this.add.graphics(-10, -10);
        _this.targetchild4.lineStyle(2, 0x0000FF, 0);
        _this.targetchild4.drawRect(0, 0, 20, 20);
       // _this.targetchild4.visible = false;
        
        _this.targetchild5 = _this.add.graphics(-10, -10);
        _this.targetchild5.lineStyle(2, 0x0000FF, 0);
        _this.targetchild5.drawRect(0, 0, 20, 20);
        //_this.targetchild5.visible = false;
        
        _this.targetchild6 = _this.add.graphics(-10, -10);
        _this.targetchild6.lineStyle(2, 0x0000FF, 0);
        _this.targetchild6.drawRect(0, 0, 20, 20);
       // _this.targetchild6.visible = false;
        
        _this.targetchild7 = _this.add.graphics(-10, -10);
        _this.targetchild7.lineStyle(2, 0x0000FF, 0);
        _this.targetchild7.drawRect(0, 0, 20, 20);
       // _this.targetchild7.visible = false;
        
        _this.targetchild8 = _this.add.graphics(-10, -10);
        _this.targetchild8.lineStyle(2, 0x0000FF, 0);
        _this.targetchild8.drawRect(0, 0, 20, 20);
        //_this.targetchild8.visible = false;
        
        /*_this.targetchild9 = _this.add.graphics(-10, -10);
        _this.targetchild9.lineStyle(2, 0x0000FF, 0);
        _this.targetchild9.drawRect(0, 0, 20, 20);
        //_this.targetchild9.visible = false;*/
        
        _this.angle1 = _this.add.sprite(75,167,'8_2_2angle1');
        _this.angle1.anchor.setTo(0.5);
        _this.angle1.scale.setTo(1.1,0.9);
        _this.angle1.xpos = 75;
        _this.angle1.ypos = 167;
        _this.angle1.name = 'angle1';
        _this.angle1.inputEnabled = true;
        _this.angle1.addChild(_this.targetchild1);
        _this.angle1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle2 = _this.add.sprite(150,165,'8_2_2angle2');
        _this.angle2.anchor.setTo(0.5);
        _this.angle2.scale.setTo(1.2,1.2);
        _this.angle2.xpos = 150;
        _this.angle2.ypos = 165;
        _this.angle2.name = 'angle2';
        _this.angle2.inputEnabled = true;
        _this.angle2.addChild(_this.targetchild2);
        _this.angle2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle3 = _this.add.sprite(70,237,'8_2_2angle3');
        _this.angle3.anchor.setTo(0.5);
        _this.angle3.scale.setTo(1.2,1.2);
        _this.angle3.xpos = 70;
        _this.angle3.ypos = 237;
        _this.angle3.name = 'angle3';
        _this.angle3.inputEnabled = true;
        _this.angle3.addChild(_this.targetchild3);
        _this.angle3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle4 = _this.add.sprite(150,237,'8_2_2angle4');
        _this.angle4.anchor.setTo(0.5);
        _this.angle4.scale.setTo(1.2,1.2);
        _this.angle4.xpos = 150;
        _this.angle4.ypos = 237;
        _this.angle4.name = 'angle4';
        _this.angle4.inputEnabled = true;
        _this.angle4.addChild(_this.targetchild4);
        _this.angle4.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle5 = _this.add.sprite(70,309,'8_2_2angle5');
        _this.angle5.anchor.setTo(0.5);
        _this.angle5.scale.setTo(1.2,1.2);
        _this.angle5.xpos = 70;
        _this.angle5.ypos = 309;
        _this.angle5.name = 'angle5';
        _this.angle5.inputEnabled = true;
        _this.angle5.addChild(_this.targetchild5);
        _this.angle5.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle6 = _this.add.sprite(150,308,'8_2_2angle6');
        _this.angle6.anchor.setTo(0.5);
        _this.angle6.scale.setTo(1.2,1.2);
        _this.angle6.xpos = 150;
        _this.angle6.ypos = 308;
        _this.angle6.name = 'angle6';
        _this.angle6.inputEnabled = true;
        _this.angle6.addChild(_this.targetchild6);
        _this.angle6.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle7 = _this.add.sprite(75,385,'8_2_2angle7');
        _this.angle7.anchor.setTo(0.5);
        _this.angle7.scale.setTo(1.1,1);
        _this.angle7.xpos = 75;
        _this.angle7.ypos = 385;
        _this.angle7.name = 'angle7';
        _this.angle7.inputEnabled = true;
        _this.angle7.addChild(_this.targetchild7);
        _this.angle7.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle8 = _this.add.sprite(148,380,'8_2_2angle8');
        _this.angle8.anchor.setTo(0.5);
        _this.angle8.scale.setTo(1.2,1.2);
        _this.angle8.xpos = 148;
        _this.angle8.ypos = 380;
        _this.angle8.name = 'angle8';
        _this.angle8.inputEnabled = true;
        _this.angle8.addChild(_this.targetchild8);
        _this.angle8.events.onInputDown.add(_this.onDragstart,_this);
        
        /*_this.eraser = _this.add.sprite(70,460,'8_2_2eraser');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.name = 'eraser';
        _this.eraser.xpos = 70;
        _this.eraser.ypos = 460;
        _this.eraser.inputEnabled = true;
        _this.eraser.addChild(_this.targetchild9);
        _this.eraser.events.onInputDown.add(_this.onDragstart,_this);*/
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(10, 10, 10, 10);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(10, 10, 10, 10);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(10, 10, 10, 10);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(10, 10, 10, 10);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(10, 10, 10, 10);
        _this.child5.visible = false;
        
        _this.child6 = _this.add.graphics(-10, -10);
        _this.child6.lineStyle(2, 0x0000FF, 1);
        _this.child6.drawRect(10, 10, 10, 10);
        _this.child6.visible = false;
        
        _this.child7 = _this.add.graphics(-10, -10);
        _this.child7.lineStyle(2, 0x0000FF, 1);
        _this.child7.drawRect(10, 10, 10, 10);
        _this.child7.visible = false;
        
        _this.child8 = _this.add.graphics(-10, -10);
        _this.child8.lineStyle(2, 0x0000FF, 1);
        _this.child8.drawRect(10, 10, 10, 10);
        _this.child8.visible = false;
        
        _this.child9 = _this.add.graphics(-10, -10);
        _this.child9.lineStyle(2, 0x0000FF, 1);
        _this.child9.drawRect(10, 10, 10, 10);
        _this.child9.visible = false;
        
        _this.child10 = _this.add.graphics(-10, -10);
        _this.child10.lineStyle(2, 0x0000FF, 1);
        _this.child10.drawRect(10, 10, 10, 10);
        _this.child10.visible = false;
        
        _this.child11 = _this.add.graphics(-10, -10);
        _this.child11.lineStyle(2, 0x0000FF, 1);
        _this.child11.drawRect(10, 10, 10, 10);
        _this.child11.visible = false;
        
        _this.child12 = _this.add.graphics(-10, -10);
        _this.child12.lineStyle(2, 0x0000FF, 1);
        _this.child12.drawRect(10, 10, 10, 10);
        _this.child12.visible = false;
        
        _this.child13 = _this.add.graphics(-10, -10);
        _this.child13.lineStyle(2, 0x0000FF, 1);
        _this.child13.drawRect(10, 10, 10, 10);
        _this.child13.visible = false;
        
        _this.child14 = _this.add.graphics(-10, -10);
        _this.child14.lineStyle(2, 0x0000FF, 1);
        _this.child14.drawRect(10, 10, 10, 10);
        _this.child14.visible = false;
        
        _this.child15 = _this.add.graphics(-10, -10);
        _this.child15.lineStyle(2, 0x0000FF, 1);
        _this.child15.drawRect(10, 10, 10, 10);
        _this.child15.visible = false;
        
        _this.child16 = _this.add.graphics(-10, -10);
        _this.child16.lineStyle(2, 0x0000FF, 1);
        _this.child16.drawRect(10, 10, 10, 10);
        _this.child16.visible = false;
        
        _this.child17 = _this.add.graphics(-10, -10);
        _this.child17.lineStyle(2, 0x0000FF, 1);
        _this.child17.drawRect(10, 10, 10, 10);
        _this.child17.visible = false;
        
        _this.child18 = _this.add.graphics(-10, -10);
        _this.child18.lineStyle(2, 0x0000FF, 1);
        _this.child18.drawRect(10, 10, 10, 10);
        _this.child18.visible = false;
        
        _this.child19 = _this.add.graphics(-10, -10);
        _this.child19.lineStyle(2, 0x0000FF, 1);
        _this.child19.drawRect(10, 10, 10, 10);
        _this.child19.visible = false;
        
        _this.child20 = _this.add.graphics(-10, -10);
        _this.child20.lineStyle(2, 0x0000FF, 1);
        _this.child20.drawRect(10, 10, 10, 10);
        _this.child20.visible = false;
        
        _this.child21 = _this.add.graphics(-10, -10);
        _this.child21.lineStyle(2, 0x0000FF, 1);
        _this.child21.drawRect(10, 10, 10, 10);
        _this.child21.visible = false;
        
        _this.child22 = _this.add.graphics(-10, -10);
        _this.child22.lineStyle(2, 0x0000FF, 1);
        _this.child22.drawRect(10, 10, 10, 10);
        _this.child22.visible = false;
        
        _this.child23 = _this.add.graphics(-10, -10);
        _this.child23.lineStyle(2, 0x0000FF, 1);
        _this.child23.drawRect(10, 10, 10, 10);
        _this.child23.visible = false;
        
        _this.child24 = _this.add.graphics(-10, -10);
        _this.child24.lineStyle(2, 0x0000FF, 1);
        _this.child24.drawRect(10, 10, 10, 10);
        _this.child24.visible = false;
        
        _this.angles21 = _this.add.sprite(713,214,'8_2_2angle2');
        _this.angles21.anchor.setTo(0.5);
        _this.angles21.scale.setTo(1.2,1.2);
        _this.angles21.name = 'angle2';
        _this.angles21.inputEnabled = true;
        _this.angles21.addChild(_this.child1);
        _this.angles21.visible = false;
        
        _this.angles22 = _this.add.sprite(596,175,'8_2_2angle2');
        _this.angles22.anchor.setTo(0.5);
        _this.angles22.scale.setTo(1.2,1.2);
        _this.angles22.name = 'angle2';
        _this.angles22.inputEnabled = true;
        _this.angles22.addChild(_this.child2);
        _this.angles22.visible = false;
        
        _this.angles23 = _this.add.sprite(790,367,'8_2_2angle2');
        _this.angles23.anchor.setTo(0.5);
        _this.angles23.scale.setTo(1.2,1.2);
        _this.angles23.name = 'angle2';
        _this.angles23.inputEnabled = true;
        _this.angles23.addChild(_this.child3);
        _this.angles23.visible = false;
        
        _this.angles24 = _this.add.sprite(674,252,'8_2_2angle2');
        _this.angles24.anchor.setTo(0.5);
        _this.angles24.scale.setTo(1.2,1.2);
        _this.angles24.name = 'angle2';
        _this.angles24.inputEnabled = true;
        _this.angles24.addChild(_this.child4);
        _this.angles24.visible = false;
        
        _this.angles31 = _this.add.sprite(633,214,'8_2_2angle3');
        _this.angles31.anchor.setTo(0.5);
        _this.angles31.scale.setTo(1.2,1.2);
        _this.angles31.name = 'angle3';
        _this.angles31.inputEnabled = true;
        _this.angles31.addChild(_this.child5);
        _this.angles31.visible = false;
        
        _this.angles32 = _this.add.sprite(752,330,'8_2_2angle3');
        _this.angles32.anchor.setTo(0.5);
        _this.angles32.scale.setTo(1.2,1.2);
        _this.angles32.name = 'angle3';
        _this.angles32.inputEnabled = true;
        _this.angles32.addChild(_this.child6);
        _this.angles32.visible = false;
        
        _this.angles33 = _this.add.sprite(635,291,'8_2_2angle3');
        _this.angles33.anchor.setTo(0.5);
        _this.angles33.scale.setTo(1.2,1.2);
        _this.angles33.name = 'angle3';
        _this.angles33.inputEnabled = true;
        _this.angles33.addChild(_this.child7);
        _this.angles33.visible = false;
        
        _this.angles34 = _this.add.sprite(750,252,'8_2_2angle3');
        _this.angles34.anchor.setTo(0.5);
        _this.angles34.scale.setTo(1.2,1.2);
        _this.angles34.name = 'angle3';
        _this.angles34.inputEnabled = true;
        _this.angles34.addChild(_this.child8);
        _this.angles34.visible = false;
        
        _this.angles41 = _this.add.sprite(672,214,'8_2_2angle4');
        _this.angles41.anchor.setTo(0.5);
        _this.angles41.scale.setTo(1.2,1.2);
        _this.angles41.name = 'angle4';
        _this.angles41.inputEnabled = true;
        _this.angles41.addChild(_this.child9);
        _this.angles41.visible = false;
        
        _this.angles42 = _this.add.sprite(788,175,'8_2_2angle4');
        _this.angles42.anchor.setTo(0.5);
        _this.angles42.scale.setTo(1.2,1.2);
        _this.angles42.name = 'angle4';
        _this.angles42.inputEnabled = true;
        _this.angles42.addChild(_this.child10);
        _this.angles42.visible = false;
        
        _this.angles43 = _this.add.sprite(595,366,'8_2_2angle4');
        _this.angles43.anchor.setTo(0.5);
        _this.angles43.scale.setTo(1.2,1.2);
        _this.angles43.name = 'angle4';
        _this.angles43.inputEnabled = true;
        _this.angles43.addChild(_this.child11);
        _this.angles43.visible = false;
        
        _this.angles44 = _this.add.sprite(712,251,'8_2_2angle4');
        _this.angles44.anchor.setTo(0.5);
        _this.angles44.scale.setTo(1.2,1.2);
        _this.angles44.name = 'angle4';
        _this.angles44.inputEnabled = true;
        _this.angles44.addChild(_this.child12);
        _this.angles44.visible = false;
        
        _this.angles51 = _this.add.sprite(752,214,'8_2_2angle5');
        _this.angles51.anchor.setTo(0.5);
        _this.angles51.scale.setTo(1.2,1.2);
        _this.angles51.name = 'angle5';
        _this.angles51.inputEnabled = true;
        _this.angles51.addChild(_this.child13);
        _this.angles51.visible = false;
        
        _this.angles52 = _this.add.sprite(633,330,'8_2_2angle5');
        _this.angles52.anchor.setTo(0.5);
        _this.angles52.scale.setTo(1.2,1.2);
        _this.angles52.name = 'angle5';
        _this.angles52.inputEnabled = true;
        _this.angles52.addChild(_this.child14);
        _this.angles52.visible = false;
        
        _this.angles53 = _this.add.sprite(634,252,'8_2_2angle5');
        _this.angles53.anchor.setTo(0.5);
        _this.angles53.scale.setTo(1.2,1.2);
        _this.angles53.name = 'angle5';
        _this.angles53.inputEnabled = true;
        _this.angles53.addChild(_this.child15);
        _this.angles53.visible = false;
        
        _this.angles54 = _this.add.sprite(750,290,'8_2_2angle5');
        _this.angles54.anchor.setTo(0.5);
        _this.angles54.scale.setTo(1.2,1.2);
        _this.angles54.name = 'angle5';
        _this.angles54.inputEnabled = true;
        _this.angles54.addChild(_this.child16);
        _this.angles54.visible = false;
        
        _this.angles61 = _this.add.sprite(596,177,'8_2_2angle6');
        _this.angles61.anchor.setTo(0.5);
        _this.angles61.scale.setTo(1.2,1.2);
        _this.angles61.name = 'angle6';
        _this.angles61.inputEnabled = true;
        _this.angles61.addChild(_this.child17);
        _this.angles61.visible = false;
        
        _this.angles62 = _this.add.sprite(674,330,'8_2_2angle6');
        _this.angles62.anchor.setTo(0.5);
        _this.angles62.scale.setTo(1.2,1.2);
        _this.angles62.name = 'angle6';
        _this.angles62.inputEnabled = true;
        _this.angles62.addChild(_this.child18);
        _this.angles62.visible = false;
        
        _this.angles63 = _this.add.sprite(788,368,'8_2_2angle6');
        _this.angles63.anchor.setTo(0.5);
        _this.angles63.scale.setTo(1.2,1.2);
        _this.angles63.name = 'angle6';
        _this.angles63.inputEnabled = true;
        _this.angles63.addChild(_this.child19);
        _this.angles63.visible = false;
        
        _this.angles64 = _this.add.sprite(713,290,'8_2_2angle6');
        _this.angles64.anchor.setTo(0.5);
        _this.angles64.scale.setTo(1.2,1.2);
        _this.angles64.name = 'angle6';
        _this.angles64.inputEnabled = true;
        _this.angles64.addChild(_this.child20);
        _this.angles64.visible = false;
        
        _this.angles81 = _this.add.sprite(710,330,'8_2_2angle8');
        _this.angles81.anchor.setTo(0.5);
        _this.angles81.scale.setTo(1.2,1.2);
        _this.angles81.name = 'angle8';
        _this.angles81.inputEnabled = true;
        _this.angles81.addChild(_this.child21);
        _this.angles81.visible = false;
        
        _this.angles82 = _this.add.sprite(789,178,'8_2_2angle8');
        _this.angles82.anchor.setTo(0.5);
        _this.angles82.scale.setTo(1.2,1.2);
        _this.angles82.name = 'angle8';
        _this.angles82.inputEnabled = true;
        _this.angles82.addChild(_this.child22);
        _this.angles82.visible = false;
        
        _this.angles83 = _this.add.sprite(596,368,'8_2_2angle8');
        _this.angles83.anchor.setTo(0.5);
        _this.angles83.scale.setTo(1.2,1.2);
        _this.angles83.name = 'angle8';
        _this.angles83.inputEnabled = true;
        _this.angles83.addChild(_this.child23);
        _this.angles83.visible = false;
        
        _this.angles84 = _this.add.sprite(675,292,'8_2_2angle8');
        _this.angles84.anchor.setTo(0.5);
        _this.angles84.scale.setTo(1.2,1.2);
        _this.angles84.name = 'angle8';
        _this.angles84.inputEnabled = true;
        _this.angles84.addChild(_this.child24);
        _this.angles84.visible = false;
        
        _this.objGrp1.add(_this.angle1);
        _this.objGrp1.add(_this.angle2);
        _this.objGrp1.add(_this.angle3);
        _this.objGrp1.add(_this.angle4);
        _this.objGrp1.add(_this.angle5);
        _this.objGrp1.add(_this.angle6);
        _this.objGrp1.add(_this.angle7);
        _this.objGrp1.add(_this.angle8);
        //_this.objGrp1.add(_this.eraser);
        
        _this.objGrp2.add(_this.angles21);
        _this.objGrp2.add(_this.angles22);
        _this.objGrp2.add(_this.angles23);
        _this.objGrp2.add(_this.angles24);
        _this.objGrp2.add(_this.angles31);
        _this.objGrp2.add(_this.angles32);
        _this.objGrp2.add(_this.angles33);
        _this.objGrp2.add(_this.angles34);
        _this.objGrp2.add(_this.angles41);
        _this.objGrp2.add(_this.angles42);
        _this.objGrp2.add(_this.angles43);
        _this.objGrp2.add(_this.angles44);
        _this.objGrp2.add(_this.angles51);
        _this.objGrp2.add(_this.angles52);
        _this.objGrp2.add(_this.angles53);
        _this.objGrp2.add(_this.angles54);
        _this.objGrp2.add(_this.angles61);
        _this.objGrp2.add(_this.angles62);
        _this.objGrp2.add(_this.angles63);
        _this.objGrp2.add(_this.angles64);
        _this.objGrp2.add(_this.angles81);
        _this.objGrp2.add(_this.angles82);
        _this.objGrp2.add(_this.angles83);
        _this.objGrp2.add(_this.angles84);
        
    },
    
     gotoEighthQuestion:function()
    {
        console.log("gotoEighthQuestion");
       _this.questionNo=8;
         if(_this.no11 == 3)
            {
                _this.getVoice();
            }
        
        _this.allboxes();
        _this.visiblebox();
        
        _this.shape = _this.add.sprite(360,270,'sg8_2_2shape10');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(1.2,1.3);
        
        _this.dot = _this.add.sprite(690,270,'sg8_2_2dot');
        _this.dot.anchor.setTo(0.5);
        _this.dot.scale.setTo(1.2,1.2);
        
        _this.dot1 = _this.add.sprite(693.5,157.5,'8_2_2yellow');
        _this.dot1.anchor.setTo(0.5);
        _this.dot1.scale.setTo(1.2,1.2);
        //_this.dot1.frame=5;
        _this.dot1.animations.add('8_2_2yellow',0);
        _this.dot1.animations.play('8_2_2yellow',1.5,true);
        
         _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
          _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
       // _this.targetchild3.visible = false;
        
        _this.targetchild4 = _this.add.graphics(-10, -10);
        _this.targetchild4.lineStyle(2, 0x0000FF, 0);
        _this.targetchild4.drawRect(0, 0, 20, 20);
       // _this.targetchild4.visible = false;
        
        _this.targetchild5 = _this.add.graphics(-10, -10);
        _this.targetchild5.lineStyle(2, 0x0000FF, 0);
        _this.targetchild5.drawRect(0, 0, 20, 20);
        //_this.targetchild5.visible = false;
        
        _this.targetchild6 = _this.add.graphics(-10, -10);
        _this.targetchild6.lineStyle(2, 0x0000FF, 0);
        _this.targetchild6.drawRect(0, 0, 20, 20);
       // _this.targetchild6.visible = false;
        
        _this.targetchild7 = _this.add.graphics(-10, -10);
        _this.targetchild7.lineStyle(2, 0x0000FF, 0);
        _this.targetchild7.drawRect(0, 0, 20, 20);
       // _this.targetchild7.visible = false;
        
        _this.targetchild8 = _this.add.graphics(-10, -10);
        _this.targetchild8.lineStyle(2, 0x0000FF, 0);
        _this.targetchild8.drawRect(0, 0, 20, 20);
        //_this.targetchild8.visible = false;
        
        /*_this.targetchild9 = _this.add.graphics(-10, -10);
        _this.targetchild9.lineStyle(2, 0x0000FF, 0);
        _this.targetchild9.drawRect(0, 0, 20, 20);
        //_this.targetchild9.visible = false;*/
        
        _this.angle1 = _this.add.sprite(75,167,'8_2_2angle1');
        _this.angle1.anchor.setTo(0.5);
        _this.angle1.scale.setTo(1.1,0.9);
        _this.angle1.xpos = 75;
        _this.angle1.ypos = 167;
        _this.angle1.name = 'angle1';
        _this.angle1.inputEnabled = true;
        _this.angle1.addChild(_this.targetchild1);
        _this.angle1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle2 = _this.add.sprite(150,165,'8_2_2angle2');
        _this.angle2.anchor.setTo(0.5);
        _this.angle2.scale.setTo(1.2,1.2);
        _this.angle2.xpos = 150;
        _this.angle2.ypos = 165;
        _this.angle2.name = 'angle2';
        _this.angle2.inputEnabled = true;
        _this.angle2.addChild(_this.targetchild2);
        _this.angle2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle3 = _this.add.sprite(70,237,'8_2_2angle3');
        _this.angle3.anchor.setTo(0.5);
        _this.angle3.scale.setTo(1.2,1.2);
        _this.angle3.xpos = 70;
        _this.angle3.ypos = 237;
        _this.angle3.name = 'angle3';
        _this.angle3.inputEnabled = true;
        _this.angle3.addChild(_this.targetchild3);
        _this.angle3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle4 = _this.add.sprite(150,237,'8_2_2angle4');
        _this.angle4.anchor.setTo(0.5);
        _this.angle4.scale.setTo(1.2,1.2);
        _this.angle4.xpos = 150;
        _this.angle4.ypos = 237;
        _this.angle4.name = 'angle4';
        _this.angle4.inputEnabled = true;
        _this.angle4.addChild(_this.targetchild4);
        _this.angle4.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle5 = _this.add.sprite(70,309,'8_2_2angle5');
        _this.angle5.anchor.setTo(0.5);
        _this.angle5.scale.setTo(1.2,1.2);
        _this.angle5.xpos = 70;
        _this.angle5.ypos = 309;
        _this.angle5.name = 'angle5';
        _this.angle5.inputEnabled = true;
        _this.angle5.addChild(_this.targetchild5);
        _this.angle5.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle6 = _this.add.sprite(150,308,'8_2_2angle6');
        _this.angle6.anchor.setTo(0.5);
        _this.angle6.scale.setTo(1.2,1.2);
        _this.angle6.xpos = 150;
        _this.angle6.ypos = 308;
        _this.angle6.name = 'angle6';
        _this.angle6.inputEnabled = true;
        _this.angle6.addChild(_this.targetchild6);
        _this.angle6.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle7 = _this.add.sprite(75,385,'8_2_2angle7');
        _this.angle7.anchor.setTo(0.5);
        _this.angle7.scale.setTo(1.1,1);
        _this.angle7.xpos = 75;
        _this.angle7.ypos = 385;
        _this.angle7.name = 'angle7';
        _this.angle7.inputEnabled = true;
        _this.angle7.addChild(_this.targetchild7);
        _this.angle7.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle8 = _this.add.sprite(148,380,'8_2_2angle8');
        _this.angle8.anchor.setTo(0.5);
        _this.angle8.scale.setTo(1.2,1.2);
        _this.angle8.xpos = 148;
        _this.angle8.ypos = 380;
        _this.angle8.name = 'angle8';
        _this.angle8.inputEnabled = true;
        _this.angle8.addChild(_this.targetchild8);
        _this.angle8.events.onInputDown.add(_this.onDragstart,_this);
        
        /*_this.eraser = _this.add.sprite(70,460,'8_2_2eraser');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.name = 'eraser';
        _this.eraser.xpos = 70;
        _this.eraser.ypos = 460;
        _this.eraser.inputEnabled = true;
        _this.eraser.addChild(_this.targetchild9);
        _this.eraser.events.onInputDown.add(_this.onDragstart,_this);*/
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(10, 10, 10, 10);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(10, 10, 10, 10);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(10, 10, 10, 10);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(10, 10, 10, 10);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(10, 10, 10, 10);
        _this.child5.visible = false;
        
        _this.child6 = _this.add.graphics(-10, -10);
        _this.child6.lineStyle(2, 0x0000FF, 1);
        _this.child6.drawRect(10, 10, 10, 10);
        _this.child6.visible = false;
        
        _this.child7 = _this.add.graphics(-10, -10);
        _this.child7.lineStyle(2, 0x0000FF, 1);
        _this.child7.drawRect(10, 10, 10, 10);
        _this.child7.visible = false;
        
        _this.child8 = _this.add.graphics(-10, -10);
        _this.child8.lineStyle(2, 0x0000FF, 1);
        _this.child8.drawRect(10, 10, 10, 10);
        _this.child8.visible = false;
        
        _this.child9 = _this.add.graphics(-10, -10);
        _this.child9.lineStyle(2, 0x0000FF, 1);
        _this.child9.drawRect(10, 10, 10, 10);
        _this.child9.visible = false;
        
        _this.child10 = _this.add.graphics(-10, -10);
        _this.child10.lineStyle(2, 0x0000FF, 1);
        _this.child10.drawRect(10, 10, 10, 10);
        _this.child10.visible = false;
        
         _this.child11 = _this.add.graphics(-10, -10);
        _this.child11.lineStyle(2, 0x0000FF, 1);
        _this.child11.drawRect(10, 10, 10, 10);
        _this.child11.visible = false;
        
        _this.child12 = _this.add.graphics(-10, -10);
        _this.child12.lineStyle(2, 0x0000FF, 1);
        _this.child12.drawRect(10, 10, 10, 10);
        _this.child12.visible = false;
        
        _this.child13 = _this.add.graphics(-10, -10);
        _this.child13.lineStyle(2, 0x0000FF, 1);
        _this.child13.drawRect(10, 10, 10, 10);
        _this.child13.visible = false;
        
        _this.child14 = _this.add.graphics(-10, -10);
        _this.child14.lineStyle(2, 0x0000FF, 1);
        _this.child14.drawRect(10, 10, 10, 10);
        _this.child14.visible = false;
        
        _this.child15 = _this.add.graphics(-10, -10);
        _this.child15.lineStyle(2, 0x0000FF, 1);
        _this.child15.drawRect(10, 10, 10, 10);
        _this.child15.visible = false;
        
        _this.child16 = _this.add.graphics(-10, -10);
        _this.child16.lineStyle(2, 0x0000FF, 1);
        _this.child16.drawRect(10, 10, 10, 10);
        _this.child16.visible = false;
        
        _this.child17 = _this.add.graphics(-10, -10);
        _this.child17.lineStyle(2, 0x0000FF, 1);
        _this.child17.drawRect(10, 10, 10, 10);
        _this.child17.visible = false;
        
        _this.child18 = _this.add.graphics(-10, -10);
        _this.child18.lineStyle(2, 0x0000FF, 1);
        _this.child18.drawRect(10, 10, 10, 10);
        _this.child18.visible = false;
        
        _this.child19 = _this.add.graphics(-10, -10);
        _this.child19.lineStyle(2, 0x0000FF, 1);
        _this.child19.drawRect(10, 10, 10, 10);
        _this.child19.visible = false;
        
        _this.child20 = _this.add.graphics(-10, -10);
        _this.child20.lineStyle(2, 0x0000FF, 1);
        _this.child20.drawRect(10, 10, 10, 10);
        _this.child20.visible = false;
        
        _this.child21 = _this.add.graphics(-10, -10);
        _this.child21.lineStyle(2, 0x0000FF, 1);
        _this.child21.drawRect(10, 10, 10, 10);
        _this.child21.visible = false;
        
        _this.child22 = _this.add.graphics(-10, -10);
        _this.child22.lineStyle(2, 0x0000FF, 1);
        _this.child22.drawRect(10, 10, 10, 10);
        _this.child22.visible = false;
        
        _this.angles11 = _this.add.sprite(697,179,'8_2_2angle1');
        _this.angles11.anchor.setTo(0.5);
        _this.angles11.scale.setTo(1.1,0.9);
        _this.angles11.name = 'angle1';
        _this.angles11.inputEnabled = true;
        _this.angles11.addChild(_this.child1);
        _this.angles11.visible = false;
        
        _this.angles12 = _this.add.sprite(697,371,'8_2_2angle1');
        _this.angles12.anchor.setTo(0.5);
        _this.angles12.scale.setTo(1.1,0.9);
        _this.angles12.name = 'angle1';
        _this.angles12.inputEnabled = true;
        _this.angles12.addChild(_this.child2);
        _this.angles12.visible = false;
        
        _this.angles21 = _this.add.sprite(596,214,'8_2_2angle2');
        _this.angles21.anchor.setTo(0.5);
        _this.angles21.scale.setTo(1.2,1.2);
        _this.angles21.name = 'angle2';
        _this.angles21.inputEnabled = true;
        _this.angles21.addChild(_this.child3);
        _this.angles21.visible = false;
        
        _this.angles22 = _this.add.sprite(789,329,'8_2_2angle2');
        _this.angles22.anchor.setTo(0.5);
        _this.angles22.scale.setTo(1.2,1.2);
        _this.angles22.name = 'angle2';
        _this.angles22.inputEnabled = true;
        _this.angles22.addChild(_this.child4);
        _this.angles22.visible = false;
        
        _this.angles31 = _this.add.sprite(675,253,'8_2_2angle3');
        _this.angles31.anchor.setTo(0.5);
        _this.angles31.scale.setTo(1.2,1.2);
        _this.angles31.name = 'angle3';
        _this.angles31.inputEnabled = true;
        _this.angles31.addChild(_this.child5);
        _this.angles31.visible = false;
        
        _this.angles32 = _this.add.sprite(712,215,'8_2_2angle3');
        _this.angles32.anchor.setTo(0.5);
        _this.angles32.scale.setTo(1.2,1.2);
        _this.angles32.name = 'angle3';
        _this.angles32.inputEnabled = true;
        _this.angles32.addChild(_this.child6);
        _this.angles32.visible = false;
        
        _this.angles33 = _this.add.sprite(674,330,'8_2_2angle3');
        _this.angles33.anchor.setTo(0.5);
        _this.angles33.scale.setTo(1.2,1.2);
        _this.angles33.name = 'angle3';
        _this.angles33.inputEnabled = true;
        _this.angles33.addChild(_this.child7);
        _this.angles33.visible = false;
        
        _this.angles34 = _this.add.sprite(712,290,'8_2_2angle3');
        _this.angles34.anchor.setTo(0.5);
        _this.angles34.scale.setTo(1.2,1.2);
        _this.angles34.name = 'angle3';
        _this.angles34.inputEnabled = true;
        _this.angles34.addChild(_this.child8);
        _this.angles34.visible = false;
        
        _this.angles41 = _this.add.sprite(787,215,'8_2_2angle4');
        _this.angles41.anchor.setTo(0.5);
        _this.angles41.scale.setTo(1.2,1.2);
        _this.angles41.name = 'angle4';
        _this.angles41.inputEnabled = true;
        _this.angles41.addChild(_this.child9);
        _this.angles41.visible = false;
        
        _this.angles42 = _this.add.sprite(595,329,'8_2_2angle4');
        _this.angles42.anchor.setTo(0.5);
        _this.angles42.scale.setTo(1.2,1.2);
        _this.angles42.name = 'angle4';
        _this.angles42.inputEnabled = true;
        _this.angles42.addChild(_this.child10);
        _this.angles42.visible = false;
        
        _this.angles51 = _this.add.sprite(672,213,'8_2_2angle5');
        _this.angles51.anchor.setTo(0.5);
        _this.angles51.scale.setTo(1.2,1.2);
        _this.angles51.name = 'angle5';
        _this.angles51.inputEnabled = true;
        _this.angles51.addChild(_this.child11);
        _this.angles51.visible = false;
        
        _this.angles52 = _this.add.sprite(712,252,'8_2_2angle5');
        _this.angles52.anchor.setTo(0.5);
        _this.angles52.scale.setTo(1.2,1.2);
        _this.angles52.name = 'angle5';
        _this.angles52.inputEnabled = true;
        _this.angles52.addChild(_this.child12);
        _this.angles52.visible = false;
        
        _this.angles53 = _this.add.sprite(672,290,'8_2_2angle5');
        _this.angles53.anchor.setTo(0.5);
        _this.angles53.scale.setTo(1.2,1.2);
        _this.angles53.name = 'angle5';
        _this.angles53.inputEnabled = true;
        _this.angles53.addChild(_this.child13);
        _this.angles53.visible = false;
        
        _this.angles54 = _this.add.sprite(711,330,'8_2_2angle5');
        _this.angles54.anchor.setTo(0.5);
        _this.angles54.scale.setTo(1.2,1.2);
        _this.angles54.name = 'angle5';
        _this.angles54.inputEnabled = true;
        _this.angles54.addChild(_this.child14);
        _this.angles54.visible = false;
        
        _this.angles61 = _this.add.sprite(594,215,'8_2_2angle6');
        _this.angles61.anchor.setTo(0.5);
        _this.angles61.scale.setTo(1.2,1.2);
        _this.angles61.name = 'angle6';
        _this.angles61.inputEnabled = true;
        _this.angles61.addChild(_this.child15);
        _this.angles61.visible = false;
        
        _this.angles62 = _this.add.sprite(788,331,'8_2_2angle6');
        _this.angles62.anchor.setTo(0.5);
        _this.angles62.scale.setTo(1.2,1.2);
        _this.angles62.name = 'angle6';
        _this.angles62.inputEnabled = true;
        _this.angles62.addChild(_this.child16);
        _this.angles62.visible = false;
        
        _this.angles71 = _this.add.sprite(755,237,'8_2_2angle7');
        _this.angles71.anchor.setTo(0.5);
        _this.angles71.scale.setTo(1.1,1);
        _this.angles71.name = 'angle7';
        _this.angles71.inputEnabled = true;
        _this.angles71.addChild(_this.child17);
        _this.angles71.visible = false;
        
        _this.angles72 = _this.add.sprite(638,237,'8_2_2angle7');
        _this.angles72.anchor.setTo(0.5);
        _this.angles72.scale.setTo(1.1,1);
        _this.angles72.name = 'angle7';
        _this.angles72.inputEnabled = true;
        _this.angles72.addChild(_this.child18);
        _this.angles72.visible = false;
        
        _this.angles73 = _this.add.sprite(754,314,'8_2_2angle7');
        _this.angles73.anchor.setTo(0.5);
        _this.angles73.scale.setTo(1.1,1);
        _this.angles73.name = 'angle7';
        _this.angles73.inputEnabled = true;
        _this.angles73.addChild(_this.child19);
        _this.angles73.visible = false;
        
        _this.angles74 = _this.add.sprite(639,314,'8_2_2angle7');
        _this.angles74.anchor.setTo(0.5);
        _this.angles74.scale.setTo(1.1,1);
        _this.angles74.name = 'angle7';
        _this.angles74.inputEnabled = true;
        _this.angles74.addChild(_this.child20);
        _this.angles74.visible = false;
        
        _this.angles81 = _this.add.sprite(790,215,'8_2_2angle8');
        _this.angles81.anchor.setTo(0.5);
        _this.angles81.scale.setTo(1.2,1.2);
        _this.angles81.name = 'angle8';
        _this.angles81.inputEnabled = true;
        _this.angles81.addChild(_this.child21);
        _this.angles81.visible = false;
        
        _this.angles82 = _this.add.sprite(596,331,'8_2_2angle8');
        _this.angles82.anchor.setTo(0.5);
        _this.angles82.scale.setTo(1.2,1.2);
        _this.angles82.name = 'angle8';
        _this.angles82.inputEnabled = true;
        _this.angles82.addChild(_this.child22);
        _this.angles82.visible = false;
        
        _this.objGrp1.add(_this.angle1);
        _this.objGrp1.add(_this.angle2);
        _this.objGrp1.add(_this.angle3);
        _this.objGrp1.add(_this.angle4);
        _this.objGrp1.add(_this.angle5);
        _this.objGrp1.add(_this.angle6);
        _this.objGrp1.add(_this.angle7);
        _this.objGrp1.add(_this.angle8);
        //_this.objGrp1.add(_this.eraser);
        
        _this.objGrp2.add(_this.angles11);
        _this.objGrp2.add(_this.angles12);
        _this.objGrp2.add(_this.angles21);
        _this.objGrp2.add(_this.angles22);
        _this.objGrp2.add(_this.angles31);
        _this.objGrp2.add(_this.angles32);
        _this.objGrp2.add(_this.angles33);
        _this.objGrp2.add(_this.angles34);
        _this.objGrp2.add(_this.angles41);
        _this.objGrp2.add(_this.angles42);
        _this.objGrp2.add(_this.angles51);
        _this.objGrp2.add(_this.angles52);
        _this.objGrp2.add(_this.angles53);
        _this.objGrp2.add(_this.angles54);
        _this.objGrp2.add(_this.angles61);
        _this.objGrp2.add(_this.angles62);
        _this.objGrp2.add(_this.angles71);
        _this.objGrp2.add(_this.angles72);
        _this.objGrp2.add(_this.angles73);
        _this.objGrp2.add(_this.angles74);
        _this.objGrp2.add(_this.angles81);
        _this.objGrp2.add(_this.angles82);
        
        
    },
    
     gotoNinethQuestion:function()
    {
        console.log("gotoNinethQuestion");
       _this.questionNo=9;
         if(_this.no11 == 3)
            {
                _this.getVoice();
            }
        
        _this.allboxes();
        _this.visiblebox();
        
        _this.shape = _this.add.sprite(360,270,'sg8_2_2shape13');
        _this.shape.anchor.setTo(0.5);
        _this.shape.scale.setTo(1.2,1.2);
        
        _this.dot = _this.add.sprite(690,270,'sg8_2_2dot');
        _this.dot.anchor.setTo(0.5);
        _this.dot.scale.setTo(1.2,1.2);
        
        _this.dot1 = _this.add.sprite(615.5,157.5,'8_2_2yellow');
        _this.dot1.anchor.setTo(0.5);
        _this.dot1.scale.setTo(1.2,1.2);
        //_this.dot1.frame=5;
        _this.dot1.animations.add('8_2_2yellow',0);
        _this.dot1.animations.play('8_2_2yellow',1.5,true);
        
        _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
          _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
       // _this.targetchild3.visible = false;
        
        _this.targetchild4 = _this.add.graphics(-10, -10);
        _this.targetchild4.lineStyle(2, 0x0000FF, 0);
        _this.targetchild4.drawRect(0, 0, 20, 20);
       // _this.targetchild4.visible = false;
        
        _this.targetchild5 = _this.add.graphics(-10, -10);
        _this.targetchild5.lineStyle(2, 0x0000FF, 0);
        _this.targetchild5.drawRect(0, 0, 20, 20);
        //_this.targetchild5.visible = false;
        
        _this.targetchild6 = _this.add.graphics(-10, -10);
        _this.targetchild6.lineStyle(2, 0x0000FF, 0);
        _this.targetchild6.drawRect(0, 0, 20, 20);
       // _this.targetchild6.visible = false;
        
        _this.targetchild7 = _this.add.graphics(-10, -10);
        _this.targetchild7.lineStyle(2, 0x0000FF, 0);
        _this.targetchild7.drawRect(0, 0, 20, 20);
       // _this.targetchild7.visible = false;
        
        _this.targetchild8 = _this.add.graphics(-10, -10);
        _this.targetchild8.lineStyle(2, 0x0000FF, 0);
        _this.targetchild8.drawRect(0, 0, 20, 20);
        //_this.targetchild8.visible = false;
        
        /*_this.targetchild9 = _this.add.graphics(-10, -10);
        _this.targetchild9.lineStyle(2, 0x0000FF, 0);
        _this.targetchild9.drawRect(0, 0, 20, 20);
        //_this.targetchild9.visible = false;*/
        
        _this.angle1 = _this.add.sprite(75,167,'8_2_2angle1');
        _this.angle1.anchor.setTo(0.5);
        _this.angle1.scale.setTo(1.1,0.9);
        _this.angle1.xpos = 75;
        _this.angle1.ypos = 167;
        _this.angle1.name = 'angle1';
        _this.angle1.inputEnabled = true;
        _this.angle1.addChild(_this.targetchild1);
        _this.angle1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle2 = _this.add.sprite(150,165,'8_2_2angle2');
        _this.angle2.anchor.setTo(0.5);
        _this.angle2.scale.setTo(1.2,1.2);
        _this.angle2.xpos = 150;
        _this.angle2.ypos = 165;
        _this.angle2.name = 'angle2';
        _this.angle2.inputEnabled = true;
        _this.angle2.addChild(_this.targetchild2);
        _this.angle2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle3 = _this.add.sprite(70,237,'8_2_2angle3');
        _this.angle3.anchor.setTo(0.5);
        _this.angle3.scale.setTo(1.2,1.2);
        _this.angle3.xpos = 70;
        _this.angle3.ypos = 237;
        _this.angle3.name = 'angle3';
        _this.angle3.inputEnabled = true;
        _this.angle3.addChild(_this.targetchild3);
        _this.angle3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle4 = _this.add.sprite(150,237,'8_2_2angle4');
        _this.angle4.anchor.setTo(0.5);
        _this.angle4.scale.setTo(1.2,1.2);
        _this.angle4.xpos = 150;
        _this.angle4.ypos = 237;
        _this.angle4.name = 'angle4';
        _this.angle4.inputEnabled = true;
        _this.angle4.addChild(_this.targetchild4);
        _this.angle4.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle5 = _this.add.sprite(70,309,'8_2_2angle5');
        _this.angle5.anchor.setTo(0.5);
        _this.angle5.scale.setTo(1.2,1.2);
        _this.angle5.xpos = 70;
        _this.angle5.ypos = 309;
        _this.angle5.name = 'angle5';
        _this.angle5.inputEnabled = true;
        _this.angle5.addChild(_this.targetchild5);
        _this.angle5.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle6 = _this.add.sprite(150,308,'8_2_2angle6');
        _this.angle6.anchor.setTo(0.5);
        _this.angle6.scale.setTo(1.2,1.2);
        _this.angle6.xpos = 150;
        _this.angle6.ypos = 308;
        _this.angle6.name = 'angle6';
        _this.angle6.inputEnabled = true;
        _this.angle6.addChild(_this.targetchild6);
        _this.angle6.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle7 = _this.add.sprite(75,385,'8_2_2angle7');
        _this.angle7.anchor.setTo(0.5);
        _this.angle7.scale.setTo(1.1,1);
        _this.angle7.xpos = 75;
        _this.angle7.ypos = 385;
        _this.angle7.name = 'angle7';
        _this.angle7.inputEnabled = true;
        _this.angle7.addChild(_this.targetchild7);
        _this.angle7.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.angle8 = _this.add.sprite(148,380,'8_2_2angle8');
        _this.angle8.anchor.setTo(0.5);
        _this.angle8.scale.setTo(1.2,1.2);
        _this.angle8.xpos = 148;
        _this.angle8.ypos = 380;
        _this.angle8.name = 'angle8';
        _this.angle8.inputEnabled = true;
        _this.angle8.addChild(_this.targetchild8);
        _this.angle8.events.onInputDown.add(_this.onDragstart,_this);
        
        /*_this.eraser = _this.add.sprite(70,460,'8_2_2eraser');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.name = 'eraser';
        _this.eraser.xpos = 70;
        _this.eraser.ypos = 460;
        _this.eraser.inputEnabled = true;
        _this.eraser.addChild(_this.targetchild9);
        _this.eraser.events.onInputDown.add(_this.onDragstart,_this);*/
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(10, 10, 10, 10);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(10, 10, 10, 10);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(10, 10, 10, 10);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(10, 10, 10, 10);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(10, 10, 10, 10);
        _this.child5.visible = false;
        
        _this.child6 = _this.add.graphics(-10, -10);
        _this.child6.lineStyle(2, 0x0000FF, 1);
        _this.child6.drawRect(10, 10, 10, 10);
        _this.child6.visible = false;
        
        _this.child7 = _this.add.graphics(-10, -10);
        _this.child7.lineStyle(2, 0x0000FF, 1);
        _this.child7.drawRect(10, 10, 10, 10);
        _this.child7.visible = false;
        
        _this.child8 = _this.add.graphics(-10, -10);
        _this.child8.lineStyle(2, 0x0000FF, 1);
        _this.child8.drawRect(10, 10, 10, 10);
        _this.child8.visible = false;
        
        _this.child9 = _this.add.graphics(-10, -10);
        _this.child9.lineStyle(2, 0x0000FF, 1);
        _this.child9.drawRect(10, 10, 10, 10);
        _this.child9.visible = false;
        
        _this.child10 = _this.add.graphics(-10, -10);
        _this.child10.lineStyle(2, 0x0000FF, 1);
        _this.child10.drawRect(10, 10, 10, 10);
        _this.child10.visible = false;
        
         _this.child11 = _this.add.graphics(-10, -10);
        _this.child11.lineStyle(2, 0x0000FF, 1);
        _this.child11.drawRect(10, 10, 10, 10);
        _this.child11.visible = false;
        
        _this.child12 = _this.add.graphics(-10, -10);
        _this.child12.lineStyle(2, 0x0000FF, 1);
        _this.child12.drawRect(10, 10, 10, 10);
        _this.child12.visible = false;
        
        _this.child13 = _this.add.graphics(-10, -10);
        _this.child13.lineStyle(2, 0x0000FF, 1);
        _this.child13.drawRect(10, 10, 10, 10);
        _this.child13.visible = false;
        
        _this.child14 = _this.add.graphics(-10, -10);
        _this.child14.lineStyle(2, 0x0000FF, 1);
        _this.child14.drawRect(10, 10, 10, 10);
        _this.child14.visible = false;
        
        _this.child15 = _this.add.graphics(-10, -10);
        _this.child15.lineStyle(2, 0x0000FF, 1);
        _this.child15.drawRect(10, 10, 10, 10);
        _this.child15.visible = false;
        
        _this.child16 = _this.add.graphics(-10, -10);
        _this.child16.lineStyle(2, 0x0000FF, 1);
        _this.child16.drawRect(10, 10, 10, 10);
        _this.child16.visible = false;
        
        _this.child17 = _this.add.graphics(-10, -10);
        _this.child17.lineStyle(2, 0x0000FF, 1);
        _this.child17.drawRect(10, 10, 10, 10);
        _this.child17.visible = false;
        
        _this.child18 = _this.add.graphics(-10, -10);
        _this.child18.lineStyle(2, 0x0000FF, 1);
        _this.child18.drawRect(10, 10, 10, 10);
        _this.child18.visible = false;
        
        _this.child19 = _this.add.graphics(-10, -10);
        _this.child19.lineStyle(2, 0x0000FF, 1);
        _this.child19.drawRect(10, 10, 10, 10);
        _this.child19.visible = false;
        
        _this.child20 = _this.add.graphics(-10, -10);
        _this.child20.lineStyle(2, 0x0000FF, 1);
        _this.child20.drawRect(10, 10, 10, 10);
        _this.child20.visible = false;
        
        _this.child21 = _this.add.graphics(-10, -10);
        _this.child21.lineStyle(2, 0x0000FF, 1);
        _this.child21.drawRect(10, 10, 10, 10);
        _this.child21.visible = false;
        
        _this.child22 = _this.add.graphics(-10, -10);
        _this.child22.lineStyle(2, 0x0000FF, 1);
        _this.child22.drawRect(10, 10, 10, 10);
        _this.child22.visible = false;
        
        _this.angles11 = _this.add.sprite(658,294,'8_2_2angle1');
        _this.angles11.anchor.setTo(0.5);
        _this.angles11.scale.setTo(1.1,0.9);
        _this.angles11.name = 'angle1';
        _this.angles11.inputEnabled = true;
        _this.angles11.addChild(_this.child1);
        _this.angles11.visible = false;
        
        _this.angles12 = _this.add.sprite(736,255,'8_2_2angle1');
        _this.angles12.anchor.setTo(0.5);
        _this.angles12.scale.setTo(1.1,0.9);
        _this.angles12.name = 'angle1';
        _this.angles12.inputEnabled = true;
        _this.angles12.addChild(_this.child2);
        _this.angles12.visible = false;
        
        _this.angles21 = _this.add.sprite(596,213,'8_2_2angle2');
        _this.angles21.anchor.setTo(0.5);
        _this.angles21.scale.setTo(1.2,1.2);
        _this.angles21.name = 'angle2';
        _this.angles21.inputEnabled = true;
        _this.angles21.addChild(_this.child3);
        _this.angles21.visible = false;
        
        _this.angles22 = _this.add.sprite(791,329,'8_2_2angle2');
        _this.angles22.anchor.setTo(0.5);
        _this.angles22.scale.setTo(1.2,1.2);
        _this.angles22.name = 'angle2';
        _this.angles22.inputEnabled = true;
        _this.angles22.addChild(_this.child4);
        _this.angles22.visible = false;
        
        _this.angles23 = _this.add.sprite(754,367,'8_2_2angle2');
        _this.angles23.anchor.setTo(0.5);
        _this.angles23.scale.setTo(1.2,1.2);
        _this.angles23.name = 'angle2';
        _this.angles23.inputEnabled = true;
        _this.angles23.addChild(_this.child5);
        _this.angles23.visible = false;
        
        _this.angles24 = _this.add.sprite(634,175,'8_2_2angle2');
        _this.angles24.anchor.setTo(0.5);
        _this.angles24.scale.setTo(1.2,1.2);
        _this.angles24.name = 'angle2';
        _this.angles24.inputEnabled = true;
        _this.angles24.addChild(_this.child6);
        _this.angles24.visible = false;
        
        _this.angles31 = _this.add.sprite(634,253,'8_2_2angle3');
        _this.angles31.anchor.setTo(0.5);
        _this.angles31.scale.setTo(1.2,1.2);
        _this.angles31.name = 'angle3';
        _this.angles31.inputEnabled = true;
        _this.angles31.addChild(_this.child7);
        _this.angles31.visible = false;
        
        _this.angles32 = _this.add.sprite(674,215,'8_2_2angle3');
        _this.angles32.anchor.setTo(0.5);
        _this.angles32.scale.setTo(1.2,1.2);
        _this.angles32.name = 'angle3';
        _this.angles32.inputEnabled = true;
        _this.angles32.addChild(_this.child8);
        _this.angles32.visible = false;
        
        _this.angles33 = _this.add.sprite(752,293,'8_2_2angle3');
        _this.angles33.anchor.setTo(0.5);
        _this.angles33.scale.setTo(1.2,1.2);
        _this.angles33.name = 'angle3';
        _this.angles33.inputEnabled = true;
        _this.angles33.addChild(_this.child9);
        _this.angles33.visible = false;
        
        _this.angles34 = _this.add.sprite(713,331,'8_2_2angle3');
        _this.angles34.anchor.setTo(0.5);
        _this.angles34.scale.setTo(1.2,1.2);
        _this.angles34.name = 'angle3';
        _this.angles34.inputEnabled = true;
        _this.angles34.addChild(_this.child10);
        _this.angles34.visible = false;
        
        _this.angles41 = _this.add.sprite(751,212,'8_2_2angle4');
        _this.angles41.anchor.setTo(0.5);
        _this.angles41.scale.setTo(1.2,1.2);
        _this.angles41.name = 'angle4';
        _this.angles41.inputEnabled = true;
        _this.angles41.addChild(_this.child11);
        _this.angles41.visible = false;
        
        _this.angles42 = _this.add.sprite(632,327,'8_2_2angle4');
        _this.angles42.anchor.setTo(0.5);
        _this.angles42.scale.setTo(1.2,1.2);
        _this.angles42.name = 'angle4';
        _this.angles42.inputEnabled = true;
        _this.angles42.addChild(_this.child12);
        _this.angles42.visible = false;
        
        _this.angles51 = _this.add.sprite(673,254,'8_2_2angle5');
        _this.angles51.anchor.setTo(0.5);
        _this.angles51.scale.setTo(1.2,1.2);
        _this.angles51.name = 'angle5';
        _this.angles51.inputEnabled = true;
        _this.angles51.addChild(_this.child13);
        _this.angles51.visible = false;
        
        _this.angles52 = _this.add.sprite(710,291,'8_2_2angle5');
        _this.angles52.anchor.setTo(0.5);
        _this.angles52.scale.setTo(1.2,1.2);
        _this.angles52.name = 'angle5';
        _this.angles52.inputEnabled = true;
        _this.angles52.addChild(_this.child14);
        _this.angles52.visible = false;
        
        _this.angles61 = _this.add.sprite(596,214,'8_2_2angle6');
        _this.angles61.anchor.setTo(0.5);
        _this.angles61.scale.setTo(1.2,1.2);
        _this.angles61.name = 'angle6';
        _this.angles61.inputEnabled = true;
        _this.angles61.addChild(_this.child15);
        _this.angles61.visible = false;
        
        _this.angles62 = _this.add.sprite(790,331,'8_2_2angle6');
        _this.angles62.anchor.setTo(0.5);
        _this.angles62.scale.setTo(1.2,1.2);
        _this.angles62.name = 'angle6';
        _this.angles62.inputEnabled = true;
        _this.angles62.addChild(_this.child16);
        _this.angles62.visible = false;
        
        _this.angles63 = _this.add.sprite(752,369,'8_2_2angle6');
        _this.angles63.anchor.setTo(0.5);
        _this.angles63.scale.setTo(1.2,1.2);
        _this.angles63.name = 'angle6';
        _this.angles63.inputEnabled = true;
        _this.angles63.addChild(_this.child17);
        _this.angles63.visible = false;
        
        _this.angles64 = _this.add.sprite(632,176,'8_2_2angle6');
        _this.angles64.anchor.setTo(0.5);
        _this.angles64.scale.setTo(1.2,1.2);
        _this.angles64.name = 'angle6';
        _this.angles64.inputEnabled = true;
        _this.angles64.addChild(_this.child18);
        _this.angles64.visible = false;
        
        _this.angles71 = _this.add.sprite(716,238,'8_2_2angle7');
        _this.angles71.anchor.setTo(0.5);
        _this.angles71.scale.setTo(1.1,1);
        _this.angles71.name = 'angle7';
        _this.angles71.inputEnabled = true;
        _this.angles71.addChild(_this.child19);
        _this.angles71.visible = false;
        
        _this.angles72 = _this.add.sprite(676,314,'8_2_2angle7');
        _this.angles72.anchor.setTo(0.5);
        _this.angles72.scale.setTo(1.1,1);
        _this.angles72.name = 'angle7';
        _this.angles72.inputEnabled = true;
        _this.angles72.addChild(_this.child20);
        _this.angles72.visible = false;
        
        _this.angles81 = _this.add.sprite(752,215,'8_2_2angle8');
        _this.angles81.anchor.setTo(0.5);
        _this.angles81.scale.setTo(1.2,1.2);
        _this.angles81.name = 'angle8';
        _this.angles81.inputEnabled = true;
        _this.angles81.addChild(_this.child21);
        _this.angles81.visible = false;
        
        _this.angles82 = _this.add.sprite(633,330,'8_2_2angle8');
        _this.angles82.anchor.setTo(0.5);
        _this.angles82.scale.setTo(1.2,1.2);
        _this.angles82.name = 'angle8';
        _this.angles82.inputEnabled = true;
        _this.angles82.addChild(_this.child22);
        _this.angles82.visible = false;
        
        _this.objGrp1.add(_this.angle1);
        _this.objGrp1.add(_this.angle2);
        _this.objGrp1.add(_this.angle3);
        _this.objGrp1.add(_this.angle4);
        _this.objGrp1.add(_this.angle5);
        _this.objGrp1.add(_this.angle6);
        _this.objGrp1.add(_this.angle7);
        _this.objGrp1.add(_this.angle8);
        //_this.objGrp1.add(_this.eraser);
        
        _this.objGrp2.add(_this.angles11);
        _this.objGrp2.add(_this.angles12);
        _this.objGrp2.add(_this.angles21);
        _this.objGrp2.add(_this.angles22);
        _this.objGrp2.add(_this.angles23);
        _this.objGrp2.add(_this.angles24);
        _this.objGrp2.add(_this.angles31);
        _this.objGrp2.add(_this.angles32);
        _this.objGrp2.add(_this.angles33);
        _this.objGrp2.add(_this.angles34);
        _this.objGrp2.add(_this.angles41);
        _this.objGrp2.add(_this.angles42);
        _this.objGrp2.add(_this.angles51);
        _this.objGrp2.add(_this.angles52);
        _this.objGrp2.add(_this.angles61);
        _this.objGrp2.add(_this.angles62);
        _this.objGrp2.add(_this.angles63);
        _this.objGrp2.add(_this.angles64);
        _this.objGrp2.add(_this.angles71);
        _this.objGrp2.add(_this.angles72);
        _this.objGrp2.add(_this.angles81);
        _this.objGrp2.add(_this.angles82);
    
    },
    
   checkForOverLap:function(target)
    {
          var shake = true;
          var ans = true;
        
        if((_this.questionNo==6) || (_this.questionNo==7) || (_this.questionNo==8) || (_this.questionNo==9))
          {
                //_this.dot1.animations.stop(null,true);
                   _this.dot1.destroy();
          }
        
       console.log("_______________________________"+target.xpos);
        for(var i=0;i<_this.objGrp2.length;i++)
        {
                    
        if(target.name != "eraser")
        {
                
            
           if(_this.checkOverlap(target.getChildAt(0),_this.objGrp2.getAt(i).getChildAt(0)) && target.name == this.objGrp2.getAt(i).name && this.objGrp2.getAt(i).visible == false)
            {
                 shake = false;
                _this.click = _this.add.audio('snapSound');
                _this.click.play();
                _this.objGrp2.getAt(i).visible = true;
                break;
            } 
        }
        else{
            
            
             shake = false;  
            if(_this.checkOverlap(target.getChildAt(0),_this.objGrp2.getAt(i).getChildAt(0)) && this.objGrp2.getAt(i).visible == true)
            {
                _this.objGrp2.getAt(i).visible = false;
                break;
            } 
        }
            
        }
        
        if(shake)
            {
                _this.shake.shake(10, target);
                _this.wrongAns();
              setTimeout(function(){
                    //_this.objGrp1.getByName(target.name).x = _this.objGrp1.getByName(target.name).xpos;
                    //_this.objGrp1.getByName(target.name).y = _this.objGrp1.getByName(target.name).ypos;
                  target.x = target.xpos;
                  target.y = target.ypos;
              },500);   
            }
        else{
            //_this.objGrp1.getByName(target.name).x = _this.objGrp1.getByName(target.name).xpos;
            //_this.objGrp1.getByName(target.name).y = _this.objGrp1.getByName(target.name).ypos;
            target.x = target.xpos;
                  target.y = target.ypos;
        }
        
        
        for(var i=0;i<_this.objGrp2.length;i++)
        {
            if(_this.objGrp2.getAt(i).visible == false)
            {
                ans = false;
            }
        }
        
        if(ans)
        {
            _this.objGrp2.setAll("frame",1);
            _this.correctAns();
        }
        //_this.time.events.add(100,function(){
        //_this.objGrp1.getByName(target.name).x = _this.objGrp1.getByName(target.name).xpos;
        //_this.objGrp1.getByName(target.name).y = _this.objGrp1.getByName(target.name).ypos;
        //    },this);
    },
    
    onDragstart:function(target)
    {
         // _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level8.2.2_"+target.name, 
                    access_token: window.acctkn 
               }  
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         
          target.inputEnabled =true;
         target.input.enableDrag();
        
        _this.click = _this.add.audio('ClickSound');
        _this.click.play();
        
        target.events.onDragStop.add(this.checkForOverLap,this);        
        
        
    },
                        
    stopVoice:function()
    {
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
        if(_this.amplify!=null)
		{
			_this.amplify.context.close();
			_this.amplify = null;
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
             
 
    
    
 	changeQuestion:function()
	{
		if(_this.no11<6)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
            console.log("gameEnd");
            _this.stopVoice();
            //_this.state.start('level2');
		}
	},
    
    checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  
   
	correctAns:function(target)
	{
        //target.events.onInputDown.removeAll();
        console.log("correct Answer");
        console.log("_this.questionNo :"+_this.questionNo);

       _this.noofAttempts++;
          
          _this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "click"+target, 
                    res_id: target, 
                    access_token: window.acctkn 
               } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;


        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        // _this.currentTime = window.timeSaveFunc();

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
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
           //target.frame=1;
           //_this.click1 = _this.add.audio('ClickSound');
           //_this.click1.play();
         
        _this.speakerbtn.inputEnabled=false;
        _this.celebration = true;

        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();
        
        _this.time.events.add(3000, _this.removeEverthing, _this);
        

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play(); 
    
	},

    wrongAns:function(target)
	{
        console.log("wrong function");
        _this.wrong = false;
      
        _this.noofAttempts++;
        
       //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level8.2.2_",  
            access_token: window.acctkn 
        }

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        _this.timer3 = _this.time.create(false);
        
        
            //_this.click2 = _this.add.audio('ClickSound');
            //_this.click2.play();
        
            // _this.shake.shake(10, target);
            
              _this.wmusic = _this.add.audio('waudio');
		      _this.wmusic.play(); 
               
        
        
		  //_this.timer1.stop();
        
        
	},
    
    removeEverthing:function() 
    {
        console.log("removeEverthing");
        console.log("Question Number :"+_this.no11);
        _this.no11++;
        _this.count1++;
        _this.wrong = true;
      
        if(_this.no11<6)
        {
           // wrong = true;
            _this.timer1.stop();
            
            /*_this.MaintweenDestroy = _this.add.tween(_this.objGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.objGrp1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.objGrp2);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy.onComplete.add(function()
            {*/
                _this.count =0;
                _this.objGrp.destroy();
                _this.boxGrp.destroy();
                _this.objGrp1.destroy();
                _this.objGrp2.destroy();
                _this.shape.destroy();
                _this.dot.destroy();
                _this.getQuestion();
           // },_this);  
        }
        else
        {
            _this.stopVoice();
            _this.timer1.stop();
            _this.timer1=null;
            _this.state.start('sg8_2_2Score');
        }
    },
    
    getVoice:function()
    {
        _this.stopVoice();
        console.log("voice"+_this.qArrays[_this.no11]);
        
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
            case 9:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2/English/8.2.2E.mp3");
                    }
                     else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2/Hindi/8.2.2H.mp3");
                    }
                     else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2/Kannada/8.2.2K.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2/Gujarati/8.2.2G.mp3");
				        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2/Marathi/sg8.2.2a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2/Telugu/sg8.2.2a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2/Tamil/sg8.2.2a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2/Urdu/sg8.2.2a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2/Odiya/sg8.2.2O.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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

};