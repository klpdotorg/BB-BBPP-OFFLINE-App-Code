Game.unity15_1level1=function(){};

Game.unity15_1level1.prototype={

      init:function(game)
	{
		_this = this;

		telInitializer.gameIdInit("unity15_1",gradeSelected);
	},

    preload:function(game){
        if(!window.grade1NOD1){

            window.grade1NOD1 = true;

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

        this.load.image('Level15_1_bg1',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('Level15_1_numbg',window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.atlas('Level15_1_NumberKey',window.baseUrl+'assets/gradeAssets/15.1/numbers.png' ,window.baseUrl+'json/gradeJson/15.1/numbers.json');
        this.load.atlas('Level15_1_NumberSmall',window.baseUrl+'assets/gradeAssets/15.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/15.1/numberSmall.json');
        /*this.load.image('practice',window.baseUrl+'assets/gradeAssets/15.1/practice.png');
        this.load.image('topic',window.baseUrl+'assets/gradeAssets/15.1/topic.png');
        this.load.image('topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');*/
        this.load.image('Level15_1_fishBigBox',window.baseUrl+'assets/gradeAssets/15.1/Fish bigg box.png');
        this.load.image('Level15_1_fishSmallBox',window.baseUrl+'assets/gradeAssets/15.1/Fish small box.png');
        this.load.image('Level15_1_base',window.baseUrl+'assets/gradeAssets/15.1/base.png');
        
        this.load.atlas('Level15_1_fish1',window.baseUrl+'assets/gradeAssets/15.1/fish1.png' ,window.baseUrl+'json/gradeJson/15.1/fish1.json');
        this.load.atlas('Level15_1_fish1Celeb',window.baseUrl+'assets/gradeAssets/15.1/fish1Celeb.png' ,window.baseUrl+'json/gradeJson/15.1/fish1Celeb.json');
        
       this.load.atlas('Level15_1_erase',window.baseUrl+'assets/gradeAssets/15.1/erase.png' ,window.baseUrl+'json/gradeJson/15.1/erase.json');
        this.load.atlas('Level15_1_rightmark',window.baseUrl+'assets/gradeAssets/15.1/rightmark.png' ,window.baseUrl+'json/gradeJson/15.1/rightmark.json');
    
        this.load.atlas('Level15_1_inputBox',window.baseUrl+'assets/gradeAssets/15.1/inputBox.png' ,window.baseUrl+'json/gradeJson/15.1/inputBox.json');


    }

    },

	create:function(game){
        _this.amplify=null;
    
         _this.noofAttempts=0;
         _this.AnsTimercount=0;
         _this.sceneCount = 0;
        
         _this.fishGroup = null;
        _this.seconds = 0;
        _this.minutes = 0;
         _this.rightAns1 = null;
         _this.rightAns = null;
        _this.counterForTimer = 0;
        _this.selectedAns = null;
        _this.selectedAns1 = null;
        _this.checkFish1 = null;
        _this.checkFish2 = null;
        _this.checkFish3 = null;
        /*_this.baudio = _this.add.audio('baudio');
        _this.baudio.play();
        _this.baudio.loopFull(1);*/
        
        _this.wrong = true;
        _this.no1=0;
        //_this.yArray = [80,100,140,180,220,240,260,280,300];
        _this.yArray = [170,130,140,160,150,180,200,220,240,260];
        _this.xArray = [200,250,300,350,400,450,500,550,600,650,700];
        
        _this.yArraySmall = [380,388,396,404,412,420,428,436,441,445];
        _this.xArraySmall = [190,200,210,220,230,240,250,260,270,280];
        _this.xArraySmall = _this.shuffle(_this.xArraySmall);
       _this.yArraySmall = _this.shuffle(_this.yArraySmall);
        
       _this.yArraySmall1 = [380,388,396,404,412,420,428,436,441,445];
        _this.xArraySmall1 = [410,420,430,440,450,460,470,480,490,510];
        _this.xArraySmall1 = _this.shuffle(_this.xArraySmall1);
       _this.yArraySmall1 = _this.shuffle(_this.yArraySmall1);
        
        _this.yArraySmall2 = [380,388,396,404,412,420,428,436,441,445];
        _this.xArraySmall2 = [650,660,670,680,690,700,710,720,730,750];
        _this.xArraySmall2 = _this.shuffle(_this.xArraySmall2);
       _this.yArraySmall2 = _this.shuffle(_this.yArraySmall2);
        
        //yArray = yArray[Math.floor(Math.random()*yArray.length)];
        //////console.log("yArray"+yArray);
       // qArrays = [1,3,5,7,9,11];
        //qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
        _this.qArrays = [1,2,3,4,5,6];
        _this.qArrays = _this.shuffle(_this.qArrays);
        
        _this.xArray = _this.shuffle(_this.xArray);
       _this.yArray = _this.shuffle(_this.yArray);
        _this.count=0;
        _this.count1=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.bg1 = this.add.tileSprite(0,0,this.world.width,this.world.height, 'Level15_1_bg1');
        _this.navBar = this.add.sprite(0,0,'Level42A_Topbar');
        _this.navBar.scale.setTo(1,1);
        _this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){
                
               _this.backbtn.events.onInputDown.removeAll();
               _this.stopVoice();
               _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
               _this.state.start('grade2levelSelectionScreen',true,false);
        },_this,0,1,2);
        
        _this.speakerbtn = _this.add.sprite(600,6,'Level42A_CommonSpeakerBtn');
          // _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.events.onInputDown.add(function()
            {
               
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
               
               _this.getVoice();
               
            },_this);
        
        _this.timebg = this.add.sprite(305,6,'Level42B_timer');
      //  _this.topicOutline = this.add.sprite(70,5,'topicOutline');
       // _this.practice = this.add.sprite(78,10,'practice');
        //_this.topic = this.add.sprite(165,10,'topic');
        _this.bigBox = this.add.sprite(80,45,'Level15_1_fishBigBox');
        _this.bigBox.scale.setTo(1.5,1.2);
        _this.base = this.add.sprite(55,304,'Level15_1_base');
         _this.base.scale.setTo(1.2,1);
        _this.smallBox1 = this.add.sprite(90,330,'Level15_1_fishSmallBox');
        _this.smallBox1.scale.setTo(1.5,1.8);
        _this.smallBox2 = this.add.sprite(340,330,'Level15_1_fishSmallBox');
        _this.smallBox2.scale.setTo(1.5,1.8);
        _this.smallBox3 = this.add.sprite(590,330,'Level15_1_fishSmallBox');
        _this.smallBox3.scale.setTo(1.5,1.8);
         _this.base2 = this.add.sprite(55,462,'Level15_1_base');
         _this.base2.scale.setTo(1.2,1);
        _this.shakeGroup = _this.add.group();
         _this.inputBox = this.add.sprite(850,390,'Level15_1_inputBox');
        _this.inputBox.name = "box";
         _this.inputBox1 = this.add.sprite(850,220,'Level15_1_inputBox');
        _this.inputBox1.name = "box1";
        _this.numBoxNum1 = _this.add.sprite(858,390,'Level15_1_NumberSmall');
        _this.numBoxNum2= _this.add.sprite(858,220,'Level15_1_NumberSmall');
        _this.shakeGroup.add(_this.inputBox);
        _this.shakeGroup.add(_this.inputBox1);
       // _this.numBoxNum2.frame = 3;
        /*_this.numbg = this.add.sprite(0,472,'numbg');
        _this.numbg.scale.setTo(1,1);*/
    
        
           _this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ _this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
           _this.timeDisplay.fontWeight = 'normal';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';
        
       // timer = this.add.text(250, 250, '00:00:00');
        
        _this.graphics = this.add.graphics(0, 400);
		_this.graphics.lineStyle(1, 0xFFFFFF, 0.8);
		_this.graphics.beginFill(0xFF700B, 1);
		_this.graphics.drawRect(0,0,960,120);
		_this.graphics.boundsPadding = 0;
		_this.graphics.alpha=0;

        _this.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.createBall, _this);
        
        _this.generateStarsForTheScene(6);
       // no1++;
	   _this.bubble = _this.add.audio('bubble');
       _this.bubble.play();
        _this.getQuestion();
         //_this.getVoice();


    },
    createBall:function()
    {
        _this.bubble = _this.add.audio('bubble');
        _this.bubble.play();
    },
 updateTimer:function() {
     _this.counterForTimer++;
     //////console.log("lololil"+counterForTimer);
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
 
//timer.setText(minutes + ':'+ seconds );
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
        _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.sceneCount++;
            _this.displayNopad = true;
          _this.timer = _this.time.create(false);

          //  Set a TimerEvent to occur after 2 seconds
          _this.timer.loop(1000, function(){
               _this.AnsTimerCount++;
          }, this);

          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
          _this.timer.start();
        
        /*******************For Navigation Bar*********************/
            _this.timer1 = this.time.create(false);

		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /************************$$$$$$$$$$**********************/
             
		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
       
       // _this.no1 = 5;
        // //console.log("here 11" +_this.qArrays[_this.no1]);
    	switch(_this.qArrays[_this.no1])      
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
    
  update :function(){
      
         for (var i = 0; i <_this.fishGroup.length; i++)
         {
            if(_this.fishGroup.getChildAt(i).x > 780)
            {
              _this.fishGroup.getChildAt(i).scale.setTo(-1, 1);
                 _this.fishGroup.getChildAt(i).body.velocity.x = -(10 + Math.random() * 50);
            }
            if (_this.fishGroup.getChildAt(i).x <=150) 
                {
                    _this.fishGroup.getChildAt(i).scale.setTo(1, 1);
                     _this.fishGroup.getChildAt(i).body.velocity.x = +(10 + Math.random() * 50);
                }
             
            if(_this.fishGroupSmall1.getChildAt(i).x > 300)
            {
              _this.fishGroupSmall1.getChildAt(i).scale.setTo(-0.5, 0.5);
                 _this.fishGroupSmall1.getChildAt(i).body.velocity.x = -20;
            }
            if (_this.fishGroupSmall1.getChildAt(i).x <=130) 
                {
                    _this.fishGroupSmall1.getChildAt(i).scale.setTo(0.5, 0.5);
                     _this.fishGroupSmall1.getChildAt(i).body.velocity.x = +20;
                }
             
            if(_this.fishGroupSmall2.getChildAt(i).x > 560)
            {
              _this.fishGroupSmall2.getChildAt(i).scale.setTo(-0.5, 0.5);
                 _this.fishGroupSmall2.getChildAt(i).body.velocity.x = -20;
            }
            if (_this.fishGroupSmall2.getChildAt(i).x <=380) 
                {
                    _this.fishGroupSmall2.getChildAt(i).scale.setTo(0.5, 0.5);
                     _this.fishGroupSmall2.getChildAt(i).body.velocity.x = +20;
                }
             
             if(_this.fishGroupSmall3.getChildAt(i).x > 800)
            {
              _this.fishGroupSmall3.getChildAt(i).scale.setTo(-0.5, 0.5);
                 _this.fishGroupSmall3.getChildAt(i).body.velocity.x = -20;
            }
            if (_this.fishGroupSmall3.getChildAt(i).x <=630) 
                {
                    _this.fishGroupSmall3.getChildAt(i).scale.setTo(0.5, 0.5);
                     _this.fishGroupSmall3.getChildAt(i).body.velocity.x = +20;
                }
         }
      
    },    
    
    addingFishToBox:function(){
        
         _this.fishGroupSmall1 = this.add.group();
         _this.fishGroupSmall2 = this.add.group();
         _this.fishGroupSmall3 = this.add.group();
         _this.fishGroupSmall1.enableBody = true;
         _this.fishGroupSmall2.enableBody = true;
         _this.fishGroupSmall3.enableBody = true;
        
        for (var j = 0; j < 10; j++)
         {
      
        _this.s1 =  _this.fishGroupSmall1.create( _this.xArraySmall[j], _this.yArraySmall[j], 'Level15_1_fish1');
        _this.s1.name = 'Level15_1_fish1' + j;
        //s.tint = 0xff00ff;
        _this.s1.body.collideWorldBounds = true;
         _this.s1.scale.setTo(0.5,0.5);
        _this.s1.anchor.setTo(0.5,0.5);
        _this.s1.body.bounce.setTo(0.5, 0.5);
        _this.s1.animations.add('Level15_1_fish1');
        _this.s1.animations.play('Level15_1_fish1', 10, true);
        _this.s1.body.velocity.setTo(10 + Math.random() * 20,00);
         _this.s1.visible = false;
             
        _this.s1.inputEnabled = true;
        _this.s1.input.useHandCursor = true;
        _this.s1.events.onInputDown.add(_this.dragFishToSmallBox,_this);
             
        _this.s2 =  _this.fishGroupSmall2.create( _this.xArraySmall1[j], _this.yArraySmall1[j], 'Level15_1_fish1');
        _this.s2.name = 'Level15_1_fish1' + j;
        //s.tint = 0xff00ff;
        _this.s2.body.collideWorldBounds = true;
         _this.s2.scale.setTo(0.5,0.5);
        _this.s2.anchor.setTo(0.5,0.5);
        _this.s2.body.bounce.setTo(0.5, 0.5);
        _this.s2.animations.add('Level15_1_fish1');
        _this.s2.animations.play('Level15_1_fish1', 10, true);
        _this.s2.body.velocity.setTo(10 + Math.random() * 20,00);
         _this.s2.visible = false;
        
        _this.s2.inputEnabled = true;
        _this.s2.input.useHandCursor = true;
        _this.s2.events.onInputDown.add(_this.dragFishToSmallBox,_this);
             
        _this.s3 =  _this.fishGroupSmall3.create( _this.xArraySmall2[j], _this.yArraySmall2[j], 'Level15_1_fish1');
        _this.s3.name = 'Level15_1_fish1' + j;
        //s.tint = 0xff00ff;
        _this.s3.body.collideWorldBounds = true;
         _this.s3.scale.setTo(0.5,0.5);
        _this.s3.anchor.setTo(0.5,0.5);
        _this.s3.body.bounce.setTo(0.5, 0.5);
        _this.s3.animations.add('Level15_1_fish1');
        _this.s3.animations.play('Level15_1_fish1', 10, true);
        _this.s3.body.velocity.setTo(10 + Math.random() * 20,00);
         _this.s3.visible = false;
             
        _this.s3.inputEnabled = true;
        _this.s3.input.useHandCursor = true;
        _this.s3.events.onInputDown.add(_this.dragFishToSmallBox,_this);
        }
    },
 gotoFirstQuestion:function(){
      _this.xArray = _this.shuffle(_this.xArray);
       _this.yArray = _this.shuffle(_this.yArray);
      _this.inputBox1.visible = false;
       _this.getVoice();
        _this.questionNo = 1;
        //////console.log("Question number "+questionNo);
        _this.questionid = 1;
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 6; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'Level15_1_fish');
        //_this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'Level15_1_fish1');
        _this.s =  _this.fishGroup.create( _this.xArray[i], _this.yArray[i], 'Level15_1_fish1');
        _this.s.name = 'Level15_1_fish1' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        // _this.s.scale.setTo(1.3,1.3);
         _this.s.anchor.setTo(0.5,0.5);
        _this.s.body.bounce.setTo(1, 1);
        _this.s.animations.add('Level15_1_fish1');
        _this.s.animations.play('Level15_1_fish1', 10, true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        //_this.s.body.velocity.setTo(15 + 0.3 * 100,00);   
        _this.s.body.velocity.setTo(10 + Math.random() * 30,00);
             
        _this.s.inputEnabled = true;
        _this.s.input.useHandCursor = true;
        _this.s.events.onInputDown.add(_this.dragFishToSmallBox,_this);
             
        }
       
     _this.addingFishToBox();

        //_this.addNumberPad();
     _this.rightAns = "2";
     
    _this.inputBox.inputEnabled = true;
    _this.inputBox.input.useHandCursor = true;
    _this.inputBox.events.onInputDown.add(_this.addNumberPad,_this);
},
     
    gotoSecondQuestion:function(){ 
        
        _this.yArray = [260,180,140,200,100,240,150,120,160,220];
        _this.xArray = [180,250,300,350,400,450,530,600,650,700,750];
        
         _this.inputBox1.visible = false;
        _this.getVoice();
        _this.questionNo = 1;
        //////console.log("Question number "+questionNo);
        _this.questionid = 1;
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 9; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'Level15_1_fish');
        //_this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'Level15_1_fish1');
        _this.s =  _this.fishGroup.create( _this.xArray[i], _this.yArray[i], 'Level15_1_fish1');
        _this.s.name = 'Level15_1_fish1' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        // _this.s.scale.setTo(1.3,1.3);
        _this.s.anchor.setTo(0.5,0.5);
        _this.s.body.bounce.setTo(1, 1);
        _this.s.animations.add('Level15_1_fish1');
        _this.s.animations.play('Level15_1_fish1', 10, true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        //_this.s.body.velocity.setTo(15 + 0.3 * 100,00);   
        _this.s.body.velocity.setTo(10 + Math.random() * 30,00);
             
        _this.s.inputEnabled = true;
        _this.s.input.useHandCursor = true;
        _this.s.events.onInputDown.add(_this.dragFishToSmallBox,_this);
             
        }
       
     _this.addingFishToBox();

        //_this.addNumberPad();
     _this.rightAns = "3";
     
    _this.inputBox.inputEnabled = true;
    _this.inputBox.input.useHandCursor = true;
    _this.inputBox.events.onInputDown.add(_this.addNumberPad,_this);
},
        
    gotoThirdQuestion:function(){
         _this.xArray = _this.shuffle(_this.xArray);
       _this.yArray = _this.shuffle(_this.yArray);
         _this.inputBox1.visible = false;
        _this.getVoice();
        _this.questionNo = 1;
        //////console.log("Question number "+questionNo);
        _this.questionid = 1;
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 3; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'Level15_1_fish');
        //_this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'Level15_1_fish1');
        _this.s =  _this.fishGroup.create( _this.xArray[i], _this.yArray[i], 'Level15_1_fish1');
        _this.s.name = 'Level15_1_fish1' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        // _this.s.scale.setTo(1.3,1.3);
         _this.s.anchor.setTo(0.5,0.5);
        _this.s.body.bounce.setTo(1, 1);
        _this.s.animations.add('Level15_1_fish1');
        _this.s.animations.play('Level15_1_fish1', 10, true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        //_this.s.body.velocity.setTo(15 + 0.3 * 100,00);   
        _this.s.body.velocity.setTo(10 + Math.random() * 30,00);
             
        _this.s.inputEnabled = true;
        _this.s.input.useHandCursor = true;
        _this.s.events.onInputDown.add(_this.dragFishToSmallBox,_this);
             
        }
       
     _this.addingFishToBox();

        //_this.addNumberPad();
     _this.rightAns = "1";
     
    _this.inputBox.inputEnabled = true;
    _this.inputBox.input.useHandCursor = true;
    _this.inputBox.events.onInputDown.add(_this.addNumberPad,_this);
},
    gotoFourthQuestion:function(){
         _this.xArray = _this.shuffle(_this.xArray);
       _this.yArray = _this.shuffle(_this.yArray);
        _this.getVoice();
        _this.inputBox1.visible = true;
     _this.questionNo = 1;
        //////console.log("Question number "+questionNo);
        _this.questionid = 1;
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 5; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'Level15_1_fish');
        //_this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'Level15_1_fish1');
        _this.s =  _this.fishGroup.create( _this.xArray[i], _this.yArray[i], 'Level15_1_fish1');
        _this.s.name = 'Level15_1_fish1' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        // _this.s.scale.setTo(1.3,1.3);
         _this.s.anchor.setTo(0.5,0.5);
        _this.s.body.bounce.setTo(1, 1);
        _this.s.animations.add('Level15_1_fish1');
        _this.s.animations.play('Level15_1_fish1', 10, true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        //_this.s.body.velocity.setTo(15 + 0.3 * 100,00);   
        _this.s.body.velocity.setTo(10 + Math.random() * 30,00);
             
        _this.s.inputEnabled = true;
        _this.s.input.useHandCursor = true;
        _this.s.events.onInputDown.add(_this.dragFishToSmallBox,_this);
             
        }
       
     _this.addingFishToBox();

        //_this.addNumberPad();
     _this.rightAns = "1";
     _this.rightAns1 = "2";
     
    _this.inputBox.inputEnabled = true;
    _this.inputBox.input.useHandCursor = true;
    _this.inputBox.events.onInputDown.add(_this.addNumberPad,_this); 
    _this.inputBox1.inputEnabled = true;
    _this.inputBox1.input.useHandCursor = true;
    _this.inputBox1.events.onInputDown.add(_this.addNumberPad,_this);
},
    gotoFifthQuestion:function(){
         _this.xArray = _this.shuffle(_this.xArray);
       _this.yArray = _this.shuffle(_this.yArray);
        _this.getVoice();
       _this.inputBox1.visible = true;
     _this.questionNo = 1;
        //////console.log("Question number "+questionNo);
        _this.questionid = 1;
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 8; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'Level15_1_fish');
        //_this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'Level15_1_fish1');
        _this.s =  _this.fishGroup.create( _this.xArray[i], _this.yArray[i], 'Level15_1_fish1');
        _this.s.name = 'Level15_1_fish1' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        // _this.s.scale.setTo(1.3,1.3);
         _this.s.anchor.setTo(0.5,0.5);
        _this.s.body.bounce.setTo(1, 1);
        _this.s.animations.add('Level15_1_fish1');
        _this.s.animations.play('Level15_1_fish1', 10, true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        //_this.s.body.velocity.setTo(15 + 0.3 * 100,00);   
        _this.s.body.velocity.setTo(10 + Math.random() * 30,00);
             
        _this.s.inputEnabled = true;
        _this.s.input.useHandCursor = true;
        _this.s.events.onInputDown.add(_this.dragFishToSmallBox,_this);
             
        }
       
     _this.addingFishToBox();

        //_this.addNumberPad();
     _this.rightAns = "2";
     _this.rightAns1 = "2";
     
    _this.inputBox.inputEnabled = true;
    _this.inputBox.input.useHandCursor = true;
    _this.inputBox.events.onInputDown.add(_this.addNumberPad,_this); 
    _this.inputBox1.inputEnabled = true;
    _this.inputBox1.input.useHandCursor = true;
    _this.inputBox1.events.onInputDown.add(_this.addNumberPad,_this);
},
    gotoSixthQuestion:function(){
        
        _this.yArray = [260,180,140,200,100,240,150,120,160,220];
        _this.xArray = [180,250,300,350,400,450,530,600,650,700,750];
        
        _this.getVoice();
       _this.inputBox1.visible = true;
     _this.questionNo = 1;
        //////console.log("Question number "+questionNo);
        _this.questionid = 1;
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 10; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'Level15_1_fish');
        //_this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'Level15_1_fish1');
        _this.s =  _this.fishGroup.create( _this.xArray[i], _this.yArray[i], 'Level15_1_fish1');
        _this.s.name = 'Level15_1_fish1' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        // _this.s.scale.setTo(1.3,1.3);
        _this.s.anchor.setTo(0.5,0.5);
        _this.s.body.bounce.setTo(1, 1);
        _this.s.animations.add('Level15_1_fish1');
        _this.s.animations.play('Level15_1_fish1', 10, true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
       // _this.s.body.velocity.setTo(15 + 0.3 * 30,00);   
        _this.s.body.velocity.setTo(10 + Math.random() * 50,00);
             
        _this.s.inputEnabled = true;
        _this.s.input.useHandCursor = true;
        _this.s.events.onInputDown.add(_this.dragFishToSmallBox,_this);
             
        }
       
     _this.addingFishToBox();

        //_this.addNumberPad();
     _this.rightAns = "3";
     _this.rightAns1 = "1";
     
    _this.inputBox.inputEnabled = true;
    _this.inputBox.input.useHandCursor = true;
    _this.inputBox.events.onInputDown.add(_this.addNumberPad,_this); 
    _this.inputBox1.inputEnabled = true;
    _this.inputBox1.input.useHandCursor = true;
    _this.inputBox1.events.onInputDown.add(_this.addNumberPad,_this);
        
     },
 
   dragFishToSmallBox:function(target){
        //console.log("target"+target.name);
        _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag(true);
         _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
       
        target.events.onDragStop.add(
            function(target){
                
                 //console.log("drop");
                if(_this.checkOverlap(target,_this.smallBox1)){
                    _this.clickSound = _this.add.audio('WaterDropSplash');
                   _this.clickSound.play();
                    target.visible = false;
                    //console.log("WOW");
                     for (var j = 0; j < _this.fishGroup.length; j++)
                        {
                        if( _this.fishGroupSmall1.getChildAt(j).visible == false)
                            {
                                _this.fishGroupSmall1.getChildAt(j).visible = true;
                                break;
                            }
                    }
                }
                else if(_this.checkOverlap(target,_this.smallBox2)){
                    _this.clickSound = _this.add.audio('WaterDropSplash');
                    _this.clickSound.play();
                    target.visible = false;
                    //console.log("WOW");
                     for (var j = 0; j <_this.fishGroup.length; j++)
                        {
                        if( _this.fishGroupSmall2.getChildAt(j).visible == false)
                            {
                                _this.fishGroupSmall2.getChildAt(j).visible = true;
                                break;
                            }
                    }
                }
                else if(_this.checkOverlap(target,_this.smallBox3)){
                     _this.clickSound = _this.add.audio('WaterDropSplash');
                    _this.clickSound.play();
                    target.visible = false;
                    //console.log("WOW");
                     for (var j = 0; j <_this.fishGroup.length; j++)
                        {
                        if( _this.fishGroupSmall3.getChildAt(j).visible == false)
                            {
                                _this.fishGroupSmall3.getChildAt(j).visible = true;
                                break;
                            }
                    }
                }
                else if(_this.checkOverlap(target,_this.bigBox)){
                    _this.clickSound = _this.add.audio('WaterDropSplash');
                    _this.clickSound.play();
                    target.visible = false;
                    //console.log("WOW");
                     for (var j = 0; j <_this.fishGroup.length; j++)
                        {
                        if( _this.fishGroup.getChildAt(j).visible == false)
                            {
                                _this.fishGroup.getChildAt(j).visible = true;
                                break;
                            }
                    }
                }
                
                 target.x = _this.vx;   
                 target.y = _this.vy;
                 target.events.onDragStop.removeAll(); 
            },_this);
        
    }, 
    addNumberPad:function(target){
        
         _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
        
        if(_this.displayNopad == false)
            {
                _this.numGroup.destroy();
            }
        if(target.name == "box")
            {
                _this.inputBox.frame = 1;
                _this.inputBox1.frame = 0;
                _this.inputBoxDown = true;
                _this.inputBoxUp = false;
            }
        else
            {
                _this.inputBox.frame = 0;
                _this.inputBox1.frame = 1;
                _this.inputBoxDown = false;
                _this.inputBoxUp = true;
            }
        _this.numBackground = this.add.sprite(480,505,'Level15_1_numbg');
        _this.numBackground.anchor.setTo(0.5);
        _this.numGroup = _this.add.group();
         _this.numGroup.add(_this.numBackground);
        _this.x = 100;
        for(var i=0;i<10;i++)
        {
           _this.numbg = _this.numGroup.create(_this.x,505,'Level15_1_NumberKey');  
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.anchor.setTo(0.5);
            if(i<9)
                _this.numbg.name = i+1;
            else
                 _this.numbg.name = 0;
            _this.numbg.frame = i;
            
            _this.numTxt = this.add.text(-2,1);
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Oh Whale';
            _this.numTxt.fontSize = 45;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#000000';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild( _this.numTxt);
            
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
        _this.eraser = _this.numGroup.create(_this.x+30,505,'Level15_1_erase');
        _this.eraser.anchor.setTo(0.5);
        //_this.eraser.scale.setTo(0.5);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+90,505,'Level15_1_rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "eraser";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
      _this.eraser.events.onInputDown.add(function(){
             _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
             _this.eraser.frame = 1;
          if(_this.inputBoxDown){
                _this.selectedAns1 = "";
                _this.numBoxNum1.visible = false;
            }
          if(_this.inputBoxUp){
               _this.selectedAns2 = "";
               _this.numBoxNum2.visible = false;
             }
             //_this.numBoxNum1.visible = false;
            _this.checkFish1 = "";
            _this.checkFish2 = "";
            _this.checkFish3 = "";
            _this.time.events.add(500, function(){  _this.eraser.frame = 0}, _this);  
         },this);
        
          _this.rightbtn.events.onInputDown.add(function(target){
              
                for (var j = 0; j < _this.fishGroup.length; j++)
                        {
                        if( _this.fishGroupSmall3.getChildAt(j).visible == true)
                            {
                                //console.log("iiiiiiiiiiiiiiiiiiiii"+j);
                                _this.checkFish3++;
                                if(_this.fishGroupSmall3.getChildAt(j).visible == false)
                                    break;
                            }
                    } 
              for (var j = 0; j < _this.fishGroup.length; j++)
                        {
                        if( _this.fishGroupSmall2.getChildAt(j).visible == true)
                            {
                                //console.log("iiiiiiiiiiiiiiiiiiiii"+j);
                                _this.checkFish2++;
                                if(_this.fishGroupSmall2.getChildAt(j).visible == false)
                                    break;
                            }
                    }
              for (var j = 0; j < _this.fishGroup.length; j++)
                        {
                        if( _this.fishGroupSmall1.getChildAt(j).visible == true)
                            {
                                //console.log("iiiiiiiiiiiiiiiiiiiii"+j);
                                _this.checkFish1++;
                                if(_this.fishGroupSmall1.getChildAt(j).visible == false)
                                    break;
                            }
                    }
            if(_this.checkFish3 == null)
                {
                    _this.checkFish3 = 0;
                }
              else if (_this.checkFish2 == null)
                  {
                      _this.checkFish2 = 0;
                  }
              else if(_this.checkFish1 == null)
                 {
                    _this.checkFish1 = 0;
                 }
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
             _this.rightbtn.frame = 1;
              //console.log("1111 "+_this.selectedAns1,_this.rightAns,_this.checkFish3,_this.checkFish2,_this.checkFish1);
              if(_this.qArrays[_this.no1]<4){
                  if( (_this.selectedAns1== _this.rightAns))//&&(_this.checkFish1.toString() ==_this.rightAns)&&(_this.checkFish2.toString() ==_this.rightAns)&&( _this.checkFish3.toString() == _this.rightAns))
                      {


                        _this.correctAns(target);
                        _this.numGroup.y = 00;
                        _this.tween1 = _this.add.tween(_this.numGroup);
                        _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);

                      }
                  else
                      {
                          _this.checkFish1 = "";
                          _this.checkFish2 = "";
                          _this.checkFish3 = "";
                          _this.inputBox.frame = 0;
                          _this.shake.shake(10, _this.shakeGroup);
                        _this.selectedAns =  "";
                        _this.selectedAns1 = "";
                        _this.selectedAns2 = "";
                        _this.waudio = _this.add.audio('waudio');
                        _this.waudio.play();
                         _this.numBoxNum1.visible = false;
                          if(_this.inputBoxDown){
                             _this.inputBox.frame = 1;
                            }
                        _this.time.events.add(500, function(){  _this.rightbtn.frame = 0}, _this);  
                      }
               }
              else{
                  //console.log("ELSE");
                   if( (_this.selectedAns1== _this.rightAns))//&&(_this.selectedAns2== _this.rightAns1)&&(_this.checkFish1.toString() ==_this.rightAns)&&(_this.checkFish2.toString() ==_this.rightAns)&&( _this.checkFish3.toString() == _this.rightAns))
                      {
                        _this.correctAns(target);
                        _this.numGroup.y = 00;
                        _this.tween1 = _this.add.tween(_this.numGroup);
                        _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);

                      }
                  else
                      {
                          _this.checkFish1 = "";
                          _this.checkFish2 = "";
                          _this.checkFish3 = "";
                          _this.inputBox.frame = 0;
                          _this.inputBox1.frame = 0;
                          _this.shake.shake(10, _this.shakeGroup);
                        _this.selectedAns =  "";
                        _this.selectedAns1 = "";
                        _this.selectedAns2 = "";
                        _this.waudio = _this.add.audio('waudio');
                        _this.waudio.play();
                         _this.numBoxNum1.visible = false;
                         _this.numBoxNum2.visible = false;
                          
                           if(_this.inputBoxDown){
                             _this.inputBox.frame = 1;
                             _this.inputBox1.frame = 0;
                            }
                        if(_this.inputBoxUp){
                            _this.inputBox.frame = 0;
                            _this.inputBox1.frame = 1;
                         }
                        _this.time.events.add(500, function(){  _this.rightbtn.frame = 0}, _this);  
                      }
              }
               },this);
       
        if(_this.displayNopad){
            ////console.log("llllllllllllllllllllllll");
            _this.numGroup.y = 50;
             _this.displayNopad = false;
            _this.tween = _this.add.tween(_this.numGroup);
            _this.tween.to({ y: 0 }, 0, 'Linear', true, 0); 
        }
    },
    
     numClicked:function(target){
		 
		 //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: "level11_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);
		  
        //////console.log(target.name);
        _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
         if(_this.inputBoxDown){
         _this.numBoxNum1.visible = true;
            _this.selectedAns1 = target.name;
         //console.log("sssssssssssssssssssssssssssssss"+_this.selectedAns1);
             _this.numBoxNum1.frame = target.name+1;
         }
         if(_this.inputBoxUp){
         _this.numBoxNum2.visible = true;
            _this.selectedAns2 = target.name;
         //console.log("sssssssssssssssssssssssssssssss"+_this.selectedAns2);
             _this.numBoxNum2.frame = target.name+1;
         }
             
    },
checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);

	},
    
    removeEverthing:function() 
    {
        _this.stopVoice();
            ////console.log("removeEverthing");
      //  gameBoxGroup.destroy();
      //  crocsGroup.destroy();
      //  objGroup.destroy();
        _this.no1++;
        //////console.log("--------------------------"+no1);
        if(_this.no1<6)
        {
            //no1++;
             _this.wrong = true;
            ////console.log("here its");
           
            _this.fishGroup.destroy();
            _this.fishGroupSmall1.destroy();
            _this.fishGroupSmall2.destroy();
            _this.fishGroupSmall3.destroy();
            _this.numGroup.destroy();
        
            _this.count =0;
            //////console.log("here its");
            _this.timer1.stop();
            _this.checkFish1 = "";
            _this.checkFish2 = "";
            _this.checkFish3 = "";
            _this.selectedAns1 = "";
            _this.selectedAns2 = "";
             _this.inputBox.frame = 0;
             _this.inputBox1.frame = 0;
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
             _this.getQuestion();
            
               
           // tweenCount=0;
           // this.getQuestion(); 
               
        }
        else
        {
            countIncrement = 0;
             //_this.stopVoice();
            _this.timer1.stop();
            _this.timer1 = null;
            _this.state.start('unity15_1Score');
        }
    },
  
     
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		
		for (var i = 0; i <  count; i++)
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
	correctAns:function(target)
	{
        _this.noofAttempts++;
          
           
           if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }
        
         telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        target.events.onInputDown.removeAll();
		////console.log("correct");
             //_this.stopVoice();
                 for (var i = 0; i <_this.fishGroup.length; i++)
                 {
                    if (_this.fishGroup.getChildAt(i).key === 'Level15_1_fish1')
                    {
                        _this.fishGroup.getChildAt(i).loadTexture('Level15_1_fish1Celeb', 0, false);
                    }
                    if (_this.fishGroupSmall1.getChildAt(i).key === 'Level15_1_fish1')
                    {
                        _this.fishGroupSmall1.getChildAt(i).loadTexture('Level15_1_fish1Celeb', 0, false);
                    }
                    if (_this.fishGroupSmall2.getChildAt(i).key === 'Level15_1_fish1')
                    {
                        _this.fishGroupSmall2.getChildAt(i).loadTexture('Level15_1_fish1Celeb', 0, false);
                    } 
                    if (_this.fishGroupSmall3.getChildAt(i).key === 'Level15_1_fish1')
                    {
                        _this.fishGroupSmall3.getChildAt(i).loadTexture('Level15_1_fish1Celeb', 0, false);
                    }
                 }
        	       _this.speakerbtn.inputEnabled=false;
                    _this.celebration = true;
                    _this.cmusic = _this.add.audio('celebr');
                    _this.cmusic.play();
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                  
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
        
                    _this.anim4.play();
                    _this.count1++;
                    _this.time.events.add(2000,_this.removeEverthing,_this);
                                   
	},

    wrongAns:function(target)
	{

         _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);
        
        	
        _this.wrong = false;
        
		_this.shake.shake(10, _this.fishGroup);
		_this.wmusic = this.add.audio('waudio');
		_this.wmusic.play();
        _this.time.events.add(500, function(){ target.frame = target.frame -9}, _this);
         _this.speakerbtn.inputEnabled=true;
         _this.speakerbtn.input.useHandCursor=true;
        target.events.onInputDown.removeAll();
	},
    
    
    getVoice:function(){
        ////console.log("voice");
            _this.stopVoice();
        
            _this.playQuestionSound = document.createElement('audio');
            _this.src = document.createElement('source');
        
            switch(_this.qArrays[_this.no1])
            {
                case 1:
                case 2:
                case 3:if(window.languageSelected=="English")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/English/Game15.1.mp3");
                            }
                        else if(window.languageSelected=="Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Hindi/Game15.1.mp3");
                            }
                        else if(window.languageSelected=="Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Kannada/Game15.1.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/15.1/Game15.1.mp3");
                    }
					else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Marathi/Game15.1.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Telugu/Game15.1.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Tamil/Game15.1.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Urdu/Game15.1.mp3");
                            }
							
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Odiya/15.1.mp3");
                                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                        break;
                case 4:
                case 5:
                case 6:if(window.languageSelected=="English")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/English/Game15.2.mp3");
                            }
                        else if(window.languageSelected=="Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Hindi/Game15.2.mp3");
                            }
                        else if(window.languageSelected=="Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Kannada/Game15.2.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/15.1/Game15.2.mp3");
                    }
					else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Marathi/Game15.2.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Telugu/Game15.2.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Tamil/Game15.2.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Urdu/Game15.2.mp3");
                            }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/15.1/Odiya/15.2.mp3");
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
                   ////console.log("here");
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
            if(this.bubble)
            {
                if(this.bubble.isPlaying)
                {
                    this.bubble.stop();
                    this.bubble = null;
                }
            }
        }

    
};