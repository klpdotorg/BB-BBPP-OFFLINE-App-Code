Game.unity1_3level1=function(){};

Game.unity1_3level1.prototype={

    init:function(game)
    {
       _this = this;
       
       _this.gameid = "1.3";
       
      /* //_this.currentTime = window.timeSaveFunc();
       _this.saveGameplay = 
       {
          id_game:_this.gameid, 
          access_token:window.acctkn, 
          start_time:_this.currentTime
       } 
     //  _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);
     */

     telInitializer.gameIdInit("unity1_3",gradeSelected);

       
    },

    preload:function(game){
        if(!window.grade1NSN3){

            window.grade1NSN3 = true;

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

            this.load.atlas('unity13_NumberKey',window.baseUrl+'assets/gradeAssets/unity/1.3/NumberKeyN.png' ,window.baseUrl+'json/gradeJson/unity/1.3/NumberKeyN.json');
           // this.load.atlas('NumberKey',window.baseUrl+'assets/gradeAssets/unity/NumberKey.png' ,window.baseUrl+'json/gradeJson/unity/1.3/NumberKey.json');
            this.load.image('unity13_practice',window.baseUrl+'assets/gradeAssets/unity/1.3/practice.png');
            this.load.image('unity13_topic',window.baseUrl+'assets/gradeAssets/unity/1.3/topic.png');
            this.load.atlas('unity13_fish',window.baseUrl+'assets/gradeAssets/unity/1.3/fish.png' ,window.baseUrl+'json/gradeJson/unity/1.3/fish.json');
            this.load.atlas('unity13_fishCeleb',window.baseUrl+'assets/gradeAssets/unity/1.3/fishCeleb.png' ,window.baseUrl+'json/gradeJson/unity/1.3/fishCeleb.json');
            
            this.load.atlas('unity13_fish1',window.baseUrl+'assets/gradeAssets/unity/1.3/fish1.png' ,window.baseUrl+'json/gradeJson/unity/1.3/fish1.json');
            this.load.atlas('unity13_fish1Celeb',window.baseUrl+'assets/gradeAssets/unity/1.3/fish1Celeb.png' ,window.baseUrl+'json/gradeJson/unity/1.3/fish1Celeb.json');
            
            this.load.atlas('unity13_fish2',window.baseUrl+'assets/gradeAssets/unity/1.3/fish2.png' ,window.baseUrl+'json/gradeJson/unity/1.3/fish2.json');
            this.load.atlas('unity13_fish2Celeb',window.baseUrl+'assets/gradeAssets/unity/1.3/fish2Celeb.png' ,window.baseUrl+'json/gradeJson/unity/1.3/fish2Celeb.json');
        }

    },

	create:function(game){
    
		_this.amplify = null;
         _this.noofAttempts=0;
         _this.AnsTimercount=0;
         _this.sceneCount = 0;
        
         _this.fishGroup = null;
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        
        /*_this.baudio = _this.add.audio('baudio');
        _this.baudio.play();
        _this.baudio.loopFull(1);*/
        
        _this.wrong = true;
        _this.no1=0;
        //_this.yArray = [80,100,140,180,220,240,260,280,300];
        _this.yArray = [80,120,160,200,240,280,320,360,400];
        //_this.xArray = [50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850];
        _this.xArray = [50,150,250,350,450,550,650,750,850];
        //yArray = yArray[Math.floor(Math.random()*yArray.length)];
        ////console.log("yArray"+yArray);
       // qArrays = [1,3,5,7,9,11];
        //qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
        _this.qArrays = [1,2,3,4,5,6,7,8,9];
        _this.qArrays = _this.shuffle(_this.qArrays);
       _this.xArray = _this.shuffle(_this.xArray);
       _this.yArray = _this.shuffle(_this.yArray);
        _this.count=0;
        _this.count1=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.bg1 = this.add.tileSprite(0,0,this.world.width,this.world.height, 'unity13_bg1');
        _this.navBar = this.add.sprite(0,0,'unity13_navBar');
        _this.navBar.scale.setTo(1,1);
        _this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){ 
                
               _this.backbtn.events.onInputDown.removeAll();
              // _this.stopVoice();
               _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
               _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this,0,1,2);
        
        _this.speakerbtn = _this.add.sprite(600,6,'unity13_CommonSpeakerBtn');
          // _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.events.onInputDown.add(function()
            {
               
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
               
               _this.getVoice();
               
            },_this);
        
        _this.timebg = this.add.sprite(305,6,'unity13_timebg');
       /* _this.topicOutline = this.add.sprite(70,5,'unity13_topicOutline');
        _this.practice = this.add.sprite(78,10,'unity13_practice');
        _this.topic = this.add.sprite(165,10,'unity13_topic');*/
        _this.numbg = this.add.sprite(0,472,'unity13_numbg');
        _this.numbg.scale.setTo(1,1)
    
        
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
       
        _this.getQuestion();
         _this.getVoice();


    },
    createBall:function()
    {
        _this.bubble = _this.add.audio('bubble');
        _this.bubble.play();
    },
 updateTimer:function() {
     _this.counterForTimer++;
     ////console.log("lololil"+counterForTimer);
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
             //console.log("here 11" +_this.qArrays[_this.no1]);
        //_this.no1 = 8;
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

    },
    
  update :function(){
      
         for (var i = 0; i <_this.fishGroup.length; i++)
         {
            if(_this.fishGroup.getChildAt(i).x > 875)
            {
              _this.fishGroup.getChildAt(i).scale.setTo(-1.3, 1.3);
                //fishGroup.getChildAt(i).body.velocity.x = -50;
            }
            if (_this.fishGroup.getChildAt(i).x <=90) 
            {
                _this.fishGroup.getChildAt(i).scale.setTo(1.3, 1.3);
                //fishGroup.getChildAt(i).body.velocity.x = +50;
            }
         }
      
    },    
 gotoFirstQuestion:function(){
      //this.stopVoice();
       _this.questionid = 1;
         _this.fishGroup = _this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 1; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'unity13_fish');
        _this.s = _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'unity13_fish');
       // _this.s = _this.fishGroup.create(_this.xArray[Math.floor(_this.xArray.length)],_this.yArray[Math.floor(_this.yArray.length)], 'unity13_fish');
        _this.s.name = 'unity13_fish' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        _this.s.scale.setTo(1.3,1.3);
        _this.s.anchor.setTo(0.5,0.5);
        _this.s.body.bounce.setTo(0.8, 0.8);
        _this.s.animations.add('unity13_fish');
        _this.s.animations.play('unity13_fish', 10, true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        _this.s.body.velocity.setTo(10 + 0.5 * 100,00);   
        }

        _this.addNumberPad();
        _this.rightAns = "1";
},
   
    gotoSecondQuestion:function(){ 
        //this.stopVoice();
        _this.questionid = 1;
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 2; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'unity13_fish');
        _this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'unity13_fish');
        _this.s.name = 'unity13_fish' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        _this.s.anchor.setTo(1,0.5);
        _this.s.scale.setTo(1.3,1.3);
        _this.s.body.bounce.setTo(0.8, 0.8);
        _this.s.animations.add('unity13_fish');
        _this.s.animations.play('unity13_fish', 10, true);
		_this.s.animations.currentAnim.setFrame(Math.floor((Math.random() * 17) + 5), true);
        // s.scale.x *= -1;
        //s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        //_this.s.body.velocity.setTo(10 + 0.5 * 100,00); 
         _this.s.body.velocity.setTo(15 + Math.random() * 50,00);
        }
        _this.addNumberPad();
        _this.rightAns = "2";
        
     },
    gotoThirdQuestion:function(){
       // this.stopVoice();
        _this.questionid = 1;
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 3; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'unity13_fish');
        _this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'unity13_fish');
        _this.s.name = 'unity13_fish' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        _this.s.scale.setTo(1.3,1.3);
        _this.s.anchor.setTo(1,0.5);
        _this.s.body.bounce.setTo(0.8, 0.8);
        _this.s.animations.add('unity13_fish');
        _this.s.animations.play('unity13_fish', 10, true);
        _this.s.animations.currentAnim.setFrame(Math.floor((Math.random() * 17) + 6), true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        //_this.s.body.velocity.setTo(10 + 0.5 * 100,00);
             _this.s.body.velocity.setTo(15 + Math.random() * 50,00);
        }
        _this.addNumberPad();
     _this.rightAns = "3";
        
     },
    gotoFourthQuestion:function(){
      // this.stopVoice();
        _this.questionid = 1;
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 4; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'unity13_fish');
       // _this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'unity13_fish1');
        _this.s =  _this.fishGroup.create( _this.xArray[i], _this.yArray[i], 'unity13_fish1');
        _this.s.name = 'unity13_fish1' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
         _this.s.scale.setTo(1.3,1.3);
        _this.s.anchor.setTo(1,0.5);
        _this.s.body.bounce.setTo(0.8, 0.8);
        _this.s.animations.add('unity13_fish1');
        _this.s.animations.play('unity13_fish1', 10, true);
		_this.s.animations.currentAnim.setFrame(Math.floor((Math.random() * 17) + 5), true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        //_this.s.body.velocity.setTo(10 + 0.3 * 100,00);   
         _this.s.body.velocity.setTo(15 + Math.random() * 40,00);
        }

                /*fishGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0, 'Linear', true, 0);*/
        _this.addNumberPad();
        _this.rightAns = "4";
        
     }, 
    gotoFifthQuestion:function(){
       //  this.stopVoice();
        _this.questionid = 1;
        _this.questionNo = 1;
        ////console.log("Question number "+questionNo);
        
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 5; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'unity13_fish');
        //_this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'unity13_fish1');
        _this.s =  _this.fishGroup.create( _this.xArray[i], _this.yArray[i], 'unity13_fish1');
        _this.s.name = 'unity13_fish1' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        _this.s.scale.setTo(1.3,1.3);
        _this.s.anchor.setTo(1,0.5);
        _this.s.body.bounce.setTo(0.8, 0.8);
        _this.s.animations.add('unity13_fish1');
        _this.s.animations.play('unity13_fish1', 10, true);
		_this.s.animations.currentAnim.setFrame(Math.floor((Math.random() * 17) + 5), true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        //_this.s.body.velocity.setTo(15 + 0.3 * 100,00);  
         _this.s.body.velocity.setTo(15 + Math.random() * 40,00);
        }

        _this.addNumberPad();
     _this.rightAns = "5";
     },
    gotoSixthQuestion:function(){
        // this.stopVoice();
        _this.questionNo = 1;
        ////console.log("Question number "+questionNo);
        _this.questionid = 1;
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 6; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'unity13_fish');
        //_this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'unity13_fish1');
        _this.s =  _this.fishGroup.create( _this.xArray[i], _this.yArray[i], 'unity13_fish1');
        _this.s.name = 'unity13_fish1' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
         _this.s.scale.setTo(1.3,1.3);
        _this.s.anchor.setTo(1,0.5);
        _this.s.body.bounce.setTo(0.8, 0.8);
        _this.s.animations.add('unity13_fish1');
        _this.s.animations.play('unity13_fish1', 10, true);
		_this.s.animations.currentAnim.setFrame(Math.floor((Math.random() * 17) + 4), true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        //_this.s.body.velocity.setTo(15 + 0.3 * 100,00);   
        _this.s.body.velocity.setTo(10 + Math.random() * 30,00);
        }

        _this.addNumberPad();
     _this.rightAns = "6";
        
     },
    
    gotoSeventhQuestion:function(){
    //    this.stopVoice();
        questionNo = 1;
        ////console.log("Question number "+questionNo);
        _this.questionid = 1;
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 7; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'unity13_fish');
        //_this.s = _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'unity13_fish2');
        _this.s =  _this.fishGroup.create( _this.xArray[i], _this.yArray[i], 'unity13_fish2');
        _this.s.name = 'unity13_fish2' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        _this.s.scale.setTo(1.3,1.3);
        _this.s.anchor.setTo(1,0.5);
        _this.s.body.bounce.setTo(0.8, 0.8);
        _this.s.animations.add('unity13_fish2');
        _this.s.animations.play('unity13_fish2', 10, true);
		_this.s.animations.currentAnim.setFrame(Math.floor((Math.random() * 17) + 5), true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        //_this.s.body.velocity.setTo(15 + Math.random() * 100,00);   
       // _this.s.body.velocity.setTo(15 + 0.3 * 100,00);
         _this.s.body.velocity.setTo(15 + Math.random() * 50,00);
        }

        _this.addNumberPad();
     _this.rightAns = "7";
     },
    gotoEighthQuestion:function(){
      //   this.stopVoice();
        _this.questionNo = 1;
        ////console.log("Question number "+questionNo);
        _this.questionid = 1;
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 8; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'unity13_fish');
        //_this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'unity13_fish2');
        _this.s =  _this.fishGroup.create( _this.xArray[i], _this.yArray[i], 'unity13_fish2');
        _this.s.name = 'unity13_fish2' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        _this.s.scale.setTo(1.3,1.3);
        _this.s.anchor.setTo(1,0.5);
        _this.s.body.bounce.setTo(0.8, 0.8);
        _this.s.animations.add('unity13_fish2');
        _this.s.animations.play('unity13_fish2', 10, true);
		_this.s.animations.currentAnim.setFrame(Math.floor((Math.random() * 17) + 4), true);
        // s.scale.x *= -1;
       // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
       // _this.s.body.velocity.setTo(15 + Math.random() * 100,00);  
       // _this.s.body.velocity.setTo(15 + 0.3 * 100,00);
         _this.s.body.velocity.setTo(15 + Math.random() * 40,00);
        }

                /*fishGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0, 'Linear', true, 0);*/
        _this.addNumberPad();
     _this.rightAns = "8";
        
     },
    gotoNinthQuestion:function(){
    //this.stopVoice();
        _this.questionid = 1;
        _this.questionNo =9;
        //console.log("Question number "+_this.questionNo);
        
         _this.fishGroup = this.add.group();
         _this.fishGroup.enableBody = true;
       
         for (var i = 0; i < 9; i++)
         {
       // var s = fishGroup.create(this.world.randomX, this.world.randomY, 'unity13_fish');
       // _this.s =  _this.fishGroup.create(_this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'unity13_fish2');
        _this.s =  _this.fishGroup.create( _this.xArray[i], _this.yArray[i], 'unity13_fish2');
        _this.s.name = 'unity13_fish2' + i;
        //s.tint = 0xff00ff;
        _this.s.body.collideWorldBounds = true;
        _this.s.anchor.setTo(1,0.5);
        _this.s.body.bounce.setTo(0.8, 0.8);
        _this.s.scale.setTo(1.3,1.3);
        _this.s.animations.add('unity13_fish2');
        _this.s.animations.play('unity13_fish2', 10, true);
		_this.s.animations.currentAnim.setFrame(Math.floor((Math.random() * 17) + 4), true);
        // s.scale.x *= -1;
        //_this.s.body.velocity.setTo(15 + Math.random() * 100,00);   
        //_this.s.body.velocity.setTo(15 + 0.3 * 100,00); 
            _this.s.body.velocity.setTo(15 + Math.random() * 40,00);
        }
        _this.addNumberPad();
     _this.rightAns = "9";
      
        
     },
 
    
    addNumberPad:function(){
        
        _this.numGroup = _this.add.group();
        _this.someArray = [190,260,330,400,470,540,610,680,750];
        _this.someArray = _this.shuffle(_this.someArray);
        //objGroup = this.add.group();
        _this.x = 100;
        for(var i=0;i<9;i++)
        {
            _this.numbg = _this.numGroup.create(_this.someArray[i],508,'unity13_NumberKey');  
            _this.numbg.scale.setTo(0.9,0.9);
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.name = i+1;
            _this.numbg.frame = i;
            
            _this.numTxt = this.add.text(-2,1,'');
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
            
            //x+=95;
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
		  
        ////console.log(target.name);
        _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
         
         if(_this.rightAns == target.name)
             {
                 target.frame = target.frame +9;
                 _this.correctAns(target);
             }
         else
            {
             //target.visible = false;
                target.frame = target.frame +9;
             _this.wrongAns(target);
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
            //console.log("removeEverthing");
      //  gameBoxGroup.destroy();
      //  crocsGroup.destroy();
      //  objGroup.destroy();
        _this.no1++;
        ////console.log("--------------------------"+no1);
        if(_this.no1<6)
        {
            //no1++;
             _this.wrong = true;
            //console.log("here its");
           
            _this.fishGroup.destroy();
            _this.numGroup.destroy();
        
            _this.count =0;
            ////console.log("here its");
            _this.timer1.stop();
             _this.getQuestion();
            
               
           // tweenCount=0;
           // this.getQuestion(); 
               
        }
        else
        {
            countIncrement = 0;
             _this.stopVoice();
            _this.timer1.stop();
            _this.timer1 = null;
            _this.state.start('unity1_3Score');
        }
    },
  
     
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		
		for (var i = 0; i <  count; i++)
		{
	
			_this.starsGroup.create(_this.world.centerX-15, 10, 'unity13_starAnim');
            
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
        
        target.events.onInputDown.removeAll();
		//console.log("correct");
             //_this.stopVoice();
                 for (var i = 0; i <_this.fishGroup.length; i++)
                 {
                    if (_this.fishGroup.getChildAt(i).key === 'unity13_fish')
                    {
                        _this.fishGroup.getChildAt(i).loadTexture('unity13_fishCeleb', 0, false);
                    }
                    if (_this.fishGroup.getChildAt(i).key === 'unity13_fish1')
                    {
                        _this.fishGroup.getChildAt(i).loadTexture('unity13_fish1Celeb', 0, false);
                    } 
                    if (_this.fishGroup.getChildAt(i).key === 'unity13_fish2')
                    {
                        _this.fishGroup.getChildAt(i).loadTexture('unity13_fish2Celeb', 0, false);
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
        //console.log("voice");
            _this.stopVoice();
        
            _this.playQuestionSound = document.createElement('audio');
            _this.src = document.createElement('source');
        
            switch(_this.qArrays[_this.no1])
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
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.3/English/Game1_3.mp3");
                            }
                        else if(window.languageSelected=="Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.3/Hindi/Game1_3.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.3/Kannada/Game1_3.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/1.3/Game1_3.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.3/Marathi/Game1_3.mp3");
                            }
							else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.3/Telugu/Game1_3.mp3");
                            }
							else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.3/Tamil/Game1_3.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.3/Urdu/Game1_3.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.3/Odiya/1.3.mp3");
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
            if(_this.bubble)
                _this.bubble.stop();

            _this.stopVoice();
        }

    
};