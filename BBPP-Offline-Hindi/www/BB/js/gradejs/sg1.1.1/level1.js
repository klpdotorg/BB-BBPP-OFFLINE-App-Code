Game.sg1_1_1level1=function(){};
Game.sg1_1_1level1.prototype={
init:function(game)
    {
        _this = this;
        
        _this.gameid = "1.2";
        
       // _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
       // _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);
        telInitializer.gameIdInit("SG1_1_1",gradeSelected);

    },

    preload:function(game){
        if(!window.grade1SG1){

            window.grade1SG1 = true;

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

        this.load.image('sg1_1_1_background',window.baseUrl+'assets/gradeAssets/sg1.1.1/bg.png');
        this.load.image('sg1_1_1_yellowBox',window.baseUrl+'assets/gradeAssets/sg1.1.1/yellowbox.png');

    this.load.atlas('sg1_1_1_image1',window.baseUrl+'assets/gradeAssets/sg1.1.1/image1.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image1.json');
        this.load.atlas('sg1_1_1_image2',window.baseUrl+'assets/gradeAssets/sg1.1.1/image2.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image2.json');
        this.load.atlas('sg1_1_1_image3',window.baseUrl+'assets/gradeAssets/sg1.1.1/image3.png',window.baseUrl+'json/gradeJson/sg1.1.1/image3.json');
        this.load.atlas('sg1_1_1_image4',window.baseUrl+'assets/gradeAssets/sg1.1.1/image4.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image4.json');
        this.load.atlas('sg1_1_1_image5',window.baseUrl+'assets/gradeAssets/sg1.1.1/image5.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image5.json');
        this.load.atlas('sg1_1_1_image6',window.baseUrl+'assets/gradeAssets/sg1.1.1/image6.png',window.baseUrl+'json/gradeJson/sg1.1.1/image6.json');
        this.load.atlas('sg1_1_1_image7',window.baseUrl+'assets/gradeAssets/sg1.1.1/image7.png',window.baseUrl+'json/gradeJson/sg1.1.1/image7.json');
        this.load.atlas('sg1_1_1_image8',window.baseUrl+'assets/gradeAssets/sg1.1.1/image8.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image8.json');
        this.load.atlas('sg1_1_1_image9',window.baseUrl+'assets/gradeAssets/sg1.1.1/image9.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image9.json');
        this.load.atlas('sg1_1_1_image10',window.baseUrl+'assets/gradeAssets/sg1.1.1/image10.png',window.baseUrl+'json/gradeJson/sg1.1.1/image10.json');
        this.load.atlas('sg1_1_1_image11',window.baseUrl+'assets/gradeAssets/sg1.1.1/image11.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image11.json');
        this.load.atlas('sg1_1_1_image12',window.baseUrl+'assets/gradeAssets/sg1.1.1/image12.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image12.json');
        this.load.atlas('sg1_1_1_image13',window.baseUrl+'assets/gradeAssets/sg1.1.1/image13.png',window.baseUrl+'json/gradeJson/sg1.1.1/image13.json');
        this.load.atlas('sg1_1_1_image14',window.baseUrl+'assets/gradeAssets/sg1.1.1/image14.png',window.baseUrl+'json/gradeJson/sg1.1.1/image14.json');
        this.load.atlas('sg1_1_1_image15',window.baseUrl+'assets/gradeAssets/sg1.1.1/image15.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image15.json');
        this.load.atlas('sg1_1_1_image16',window.baseUrl+'assets/gradeAssets/sg1.1.1/image16.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image16.json');
        this.load.atlas('sg1_1_1_image17',window.baseUrl+'assets/gradeAssets/sg1.1.1/image17.png',window.baseUrl+'json/gradeJson/sg1.1.1/image17.json');
        this.load.atlas('sg1_1_1_image18',window.baseUrl+'assets/gradeAssets/sg1.1.1/image18.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image18.json');
        this.load.atlas('sg1_1_1_image19',window.baseUrl+'assets/gradeAssets/sg1.1.1/image19.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image19.json');
        this.load.atlas('sg1_1_1_image20',window.baseUrl+'assets/gradeAssets/sg1.1.1/image20.png',window.baseUrl+'json/gradeJson/sg1.1.1/image20.json');
        this.load.atlas('sg1_1_1_image21',window.baseUrl+'assets/gradeAssets/sg1.1.1/image21.png',window.baseUrl+'json/gradeJson/sg1.1.1/image21.json');
        this.load.atlas('sg1_1_1_image22',window.baseUrl+'assets/gradeAssets/sg1.1.1/image22.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image22.json');
        this.load.atlas('sg1_1_1_image23',window.baseUrl+'assets/gradeAssets/sg1.1.1/image23.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image23.json');
        this.load.atlas('sg1_1_1_image24',window.baseUrl+'assets/gradeAssets/sg1.1.1/image24.png',window.baseUrl+'json/gradeJson/sg1.1.1/image24.json');
        this.load.atlas('sg1_1_1_image25',window.baseUrl+'assets/gradeAssets/sg1.1.1/image25.png' ,window.baseUrl+'json/gradeJson/sg1.1.1/image25.json');


    }

    },
    
	create:function(game){
       _this.amplify = null;
       _this.done1 = 0;
       _this.done2 = 0;
       _this.done3 = 0;
       _this.done4 = 0;
       _this.a = null;
       _this.b = null;
       _this.c = null;
       _this.d = null;
       _this.qid=0;
       _this.noofAttempts=0;
       _this.sceneCount=0;
       _this.seconds = 0;
       _this.minutes = 0;
       _this.counterForTimer = 0;
       _this.wrong = true;
       _this.no1=0;
       _this.qArrays = [1,2,3,4,5,6];
       _this.qArrays = _this.shuffle( _this.qArrays);
       _this.count=0;
       _this.count1=0;
   		 _this.shake = new Phaser.Plugin.Shake(game);
	      game.plugins.add(_this.shake);
       _this.physics.startSystem(Phaser.Physics.ARCADE);
       _this.physics.setBoundsToWorld();

       _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'sg1_1_1_background');
       _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
       _this.navBar.scale.setTo(1,1);
       _this.timebg = _this.add.sprite(300,5,'Level42C_timer');
       _this.timeDisplay = _this.add.text(326,22, _this.minutes + ' : '+  _this.seconds);
       _this.timeDisplay.anchor.setTo(0.5);
       _this.timeDisplay.align = 'center';
    _this.timeDisplay.font = 'myfont';
       _this.timeDisplay.fontSize = 20;
       _this.timeDisplay.fill = '#ADFF2F';
       
       _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
       _this.backbtn.inputEnabled = true;
       _this.backbtn.events.onInputDown.add(function()
       {
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade1levelSelectionScreen',true,false); 
       },_this);

       _this.speakerbtn = _this.add.sprite(600,5,'grade11_speaker');
       _this.speakerbtn.inputEnabled = true;
       _this.speakerbtn.events.onInputDown.add(function()
        {     
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();            
            _this.getVoice();
        },_this);
         
        _this.generateStarsForTheScene(6);
         _this.getVoice();
        _this.getQuestion();
        
    

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
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        

        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
       


        _this.obj1Array = [];
        _this.obj2Array = [];
        _this.obj3Array = [];
        _this.obj4Array = [];
        _this.rightOrderArray = [];
        _this.glowOrderArray = [];
        _this.UserInputArray = [];
        _this.wrongArray = [];
     //   switch(2)
     switch(_this.qArrays[_this.no1])     
          {
            case 1: 
                    _this.questionid = 2;
                    _this.obj1Array = ['sg1_1_1_image11',150,487];
                    _this.obj2Array = ['sg1_1_1_image1',355,490];
                    _this.obj3Array = ['sg1_1_1_image17',545,500];
                    _this.obj4Array = ['sg1_1_1_image25',725,470];
                    _this.rightOrderArray = ["sg1_1_1_image1","sg1_1_1_image25","sg1_1_1_image11","sg1_1_1_image17"];
                    _this.glowOrderArray = [0,1,2,3];
                    _this.qid=1;
                   
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                    break;
            case 2: 
                    _this.questionid = 1;
                    _this.obj1Array = ['sg1_1_1_image2',150,485];
                    _this.obj2Array = ['sg1_1_1_image12',355,485];
                    _this.obj3Array = ['sg1_1_1_image18',545,485];
                    _this.obj4Array = ['sg1_1_1_image22',725,470];
                    _this.rightOrderArray = ["sg1_1_1_image12","sg1_1_1_image18","sg1_1_1_image22","sg1_1_1_image2"]; 
                    _this.glowOrderArray = [0,1,2,3];
                                       _this.qid=2;

                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                    break;
            case 3:
                    _this.questionid = 2;
                    _this.obj1Array = ['sg1_1_1_image8',125,485];
                    _this.obj2Array = ['sg1_1_1_image14',310,485];
                    _this.obj3Array = ['sg1_1_1_image19',510,495];
                    _this.obj4Array = ['sg1_1_1_image21',710,470];
                    _this.rightOrderArray = ["sg1_1_1_image8","sg1_1_1_image14","sg1_1_1_image19","sg1_1_1_image21"];
                    _this.glowOrderArray = [0,1,2,3];
                                        _this.qid=3;

                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                    break;
            case 4: 
                    _this.questionid = 1;
                    _this.obj1Array = ['sg1_1_1_image7',160,485];
                    _this.obj2Array = ['sg1_1_1_image15',350,485];
                    _this.obj3Array = ['sg1_1_1_image20',540,485];
                    _this.obj4Array = ['sg1_1_1_image23',720,485];
                    _this.rightOrderArray = ["sg1_1_1_image7","sg1_1_1_image15","sg1_1_1_image20","sg1_1_1_image23"]; 
                    _this.glowOrderArray = [0,1,2,3];
                    _this.qid=4;
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                    
                     break;
            case 5: 
                    _this.questionid = 8;
                    _this.obj1Array = ['sg1_1_1_image4',160,493];
                    _this.obj2Array = ['sg1_1_1_image10',365,470];
                    _this.obj3Array = ['sg1_1_1_image13',555,485];
                    _this.obj4Array = ['sg1_1_1_image24',720,485];
                    _this.rightOrderArray = ["sg1_1_1_Level22_BrownDog","sg1_1_1_Level22_BlackDog","sg1_1_1_Level22_WhiteDog","sg1_1_1_Level22_GreyDog"];
                    _this.glowOrderArray = [0,1,2,3];
                    _this.qid=5;
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                    
                     break;
            case 6: 
                    _this.questionid = 7;
                    
                    _this.obj1Array = ['sg1_1_1_image3',150,489];
                    _this.obj2Array = ['sg1_1_1_image17',335,500];
                    _this.obj3Array = ['sg1_1_1_image21',520,471];
                    _this.obj4Array = ['sg1_1_1_image16',720,465];
                    _this.rightOrderArray = ["sg1_1_1_Level22_GreyDog","sg1_1_1_Level22_WhiteDog","sg1_1_1_Level22_BlackDog","sg1_1_1_Level22_BrownDog"];
                    _this.glowOrderArray = [0,1,2,3];
                    _this.qid=6;
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                   
                    break;
           
        }
    
    },
    
gotoQuestion:function(obj1Array,obj2Array,obj3Array,obj4Array){

       // _this.getVoice();

        /*_this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
       */         
        _this.objGroup = _this.add.group();

         _this.yellowBox = _this.add.sprite(50,300, 'sg1_1_1_yellowBox');

        _this.b1 = _this.add.sprite(obj1Array[1],obj1Array[2],obj1Array[0]);
        
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = _this.obj1Array[0];
        _this.b1.inputEnabled = true;
        _this.b1.input.useHandCursor = true;
       // _this.b1.events.onInputDown.add(_this.addDragListener,_this);
       
        _this.b2 = _this.add.sprite(obj2Array[1],obj2Array[2],obj2Array[0]);
        _this.b2.anchor.setTo(0.5,1);
        _this.b2.name = _this.obj2Array[0];
        _this.b2.inputEnabled = true;
        _this.b2.input.useHandCursor = true;
        //_this.b2.events.onInputDown.add(_this.addDragListener,_this);
         
         
        _this.b3 = _this.add.sprite(obj3Array[1],obj3Array[2],obj3Array[0]);
        _this.b3.anchor.setTo(0.5,1);
        _this.b3.name = _this.obj3Array[0];
        _this.b3.inputEnabled = true;
        _this.b3.input.useHandCursor = true;
        //_this.b3.events.onInputDown.add(_this.addDragListener,_this);
        
         
        _this.b4 = _this.add.sprite(obj4Array[1],obj4Array[2],obj4Array[0]);
        _this.b4.anchor.setTo(0.5,1);
        _this.b4.name = _this.obj4Array[0];
        _this.b4.inputEnabled = true;
        _this.b4.input.useHandCursor = true;

            if(_this.qid==1){_this.addDragBoxes();}
       else if(_this.qid==2){_this.addDragBoxes2();}
       else if(_this.qid==3){_this.addDragBoxes3();}
       else if(_this.qid==4){_this.addDragBoxes4();}
       else if(_this.qid==5){_this.addDragBoxes5();}
       else if(_this.qid==6){_this.addDragBoxes6();}
       _this.objGroup.add(_this.yellowBox);

        _this.objGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.objGroup.add(_this.b3);
        _this.objGroup.add(_this.b4);
        
        _this.objGroup.x = 1000;
        //_this.gameBoxGroup.x = 1000;
        //_this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 50}, -300, 'Linear', true, -300);
            
       _this.Maintween.onComplete.add(function()
            {
                /*_this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
                _this.whiteGroup.add(_this.Caterpillar_head);*/
                 _this.graphicsGroup = _this.add.group();

                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(80, 50, 50, 50);
                 _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(270, 50, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(460, 50, 50, 50);
               
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(600, 50, 50, 50);
            
                _this.graphicsGroup.add(_this.graphics1);
                _this.graphicsGroup.add(_this.graphics2);
                _this.graphicsGroup.add(_this.graphics3);
                _this.graphicsGroup.add(_this.graphics4);
                _this.graphicsGroup.alpha = 0;
           
            },this);
            
     },
    
 addDragBoxes:function(){

        _this.crocsGroup = _this.add.group();
        _this.gameBoxGroup = _this.add.group();
        
        var x = 140;
        var x1 = 210;
        var y = 150;
        var y1 = 150;
        
   
        
           _this.box1 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image1');
           _this.box1.name = "box1";
            _this.box1.frame=1;
           _this.box1.anchor.setTo(0.435,0.42);
           x+=200;
         _this.box2 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image25');
           _this.box2.name = "box2";
            _this.box2.frame=1;
           _this.box2.anchor.setTo(0.435,0.42);
           x+=190;
            _this.box3 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image11');
           _this.box3.name = "box3";
           _this.box3.anchor.setTo(0.435,0.42);
            _this.box3.frame=1;
           x+=180;
            _this.box4 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image17');
           _this.box4.name = "box4";
            _this.box4.frame=1;
           _this.box4.anchor.setTo(0.435,0.42);
           x+=220;
         
          _this.gameBoxGroup.x = 1000;
_this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 50}, 0, 'Linear', true, 0);

      _this.box1.inputEnabled = true;
      _this.box2.inputEnabled = true;
      _this.box3.inputEnabled = true;
      _this.box4.inputEnabled = true;
      _this.box1.input.useHandCursor = true;
      _this.box2.input.useHandCursor = true;
      _this.box3.input.useHandCursor = true;
      _this.box4.input.useHandCursor = true;
      _this.box1.events.onInputDown.add(_this.addDragListener1,_this);
      _this.box2.events.onInputDown.add(_this.addDragListener1,_this);
      _this.box3.events.onInputDown.add(_this.addDragListener1,_this);
      _this.box4.events.onInputDown.add(_this.addDragListener1,_this);        
         
    },
    
  addDragBoxes2:function(){

        _this.crocsGroup = _this.add.group();
        _this.gameBoxGroup = _this.add.group();
        
        var x = 140;
        var x1 = 210;
        var y = 150;
        var y1 = 150;
        
   
        
           _this.box1 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image12');
           _this.box1.name = "box1";
            _this.box1.frame=1;
           _this.box1.anchor.setTo(0.435,0.42);
           x+=200;
         _this.box2 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image2');
           _this.box2.name = "box2";
            _this.box2.frame=1;
           _this.box2.anchor.setTo(0.435,0.42);
           x+=190;
            _this.box3 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image22');
           _this.box3.name = "box3";
           _this.box3.anchor.setTo(0.435,0.42);
            _this.box3.frame=1;
           x+=180;
            _this.box4 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image18');
           _this.box4.name = "box4";
            _this.box4.frame=1;
           _this.box4.anchor.setTo(0.435,0.42);
           x+=220;
          _this.gameBoxGroup.x = 1000;
_this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 50}, 0, 'Linear', true, 0);
          
         
      _this.box1.inputEnabled = true;
      _this.box2.inputEnabled = true;
      _this.box3.inputEnabled = true;
      _this.box4.inputEnabled = true;
      _this.box1.input.useHandCursor = true;
      _this.box2.input.useHandCursor = true;
      _this.box3.input.useHandCursor = true;
      _this.box4.input.useHandCursor = true;
      _this.box1.events.onInputDown.add(_this.addDragListener2,_this);
      _this.box2.events.onInputDown.add(_this.addDragListener2,_this);
      _this.box3.events.onInputDown.add(_this.addDragListener2,_this);
      _this.box4.events.onInputDown.add(_this.addDragListener2,_this);        
         
    },
    
    addDragBoxes3:function(){

        _this.crocsGroup = _this.add.group();
        _this.gameBoxGroup = _this.add.group();
        
        var x = 140;
        var x1 = 210;
        var y = 150;
        var y1 = 150;
        
   
        
           _this.box1 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image21');
           _this.box1.name = "box1";
            _this.box1.frame=1;
           _this.box1.anchor.setTo(0.435,0.42);
           x+=200;
         _this.box2 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image19');
           _this.box2.name = "box2";
            _this.box2.frame=1;
           _this.box2.anchor.setTo(0.435,0.42);
           x+=190;
            _this.box3 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image14');
           _this.box3.name = "box3";
           _this.box3.anchor.setTo(0.435,0.42);
            _this.box3.frame=1;
           x+=180;
            _this.box4 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image8');
           _this.box4.name = "box4";
            _this.box4.frame=1;
           _this.box4.anchor.setTo(0.435,0.42);
           x+=220;
          _this.gameBoxGroup.x = 1000;
_this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 50}, 0, 'Linear', true, 0);
          
         
      _this.box1.inputEnabled = true;
      _this.box2.inputEnabled = true;
      _this.box3.inputEnabled = true;
      _this.box4.inputEnabled = true;
      _this.box1.input.useHandCursor = true;
      _this.box2.input.useHandCursor = true;
      _this.box3.input.useHandCursor = true;
      _this.box4.input.useHandCursor = true;
      _this.box1.events.onInputDown.add(_this.addDragListener3,_this);
      _this.box2.events.onInputDown.add(_this.addDragListener3,_this);
      _this.box3.events.onInputDown.add(_this.addDragListener3,_this);
      _this.box4.events.onInputDown.add(_this.addDragListener3,_this);        
         
    },
  addDragBoxes4:function(){

        _this.crocsGroup = _this.add.group();
        _this.gameBoxGroup = _this.add.group();
        
        var x = 140;
        var x1 = 210;
        var y = 150;
        var y1 = 150;
        
   
        
           _this.box1 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image23');
           _this.box1.name = "box1";
            _this.box1.frame=1;
           _this.box1.anchor.setTo(0.435,0.42);
           x+=200;
         _this.box2 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image20');
           _this.box2.name = "box2";
            _this.box2.frame=1;
           _this.box2.anchor.setTo(0.435,0.42);
           x+=190;
            _this.box3 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image7');
           _this.box3.name = "box3";
           _this.box3.anchor.setTo(0.435,0.42);
            _this.box3.frame=1;
           x+=180;
            _this.box4 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image15');
           _this.box4.name = "box4";
            _this.box4.frame=1;
           _this.box4.anchor.setTo(0.435,0.42);
           x+=220;
          _this.gameBoxGroup.x = 1000;
_this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 50}, 0, 'Linear', true, 0);
          
         
      _this.box1.inputEnabled = true;
      _this.box2.inputEnabled = true;
      _this.box3.inputEnabled = true;
      _this.box4.inputEnabled = true;
      _this.box1.input.useHandCursor = true;
      _this.box2.input.useHandCursor = true;
      _this.box3.input.useHandCursor = true;
      _this.box4.input.useHandCursor = true;
      _this.box1.events.onInputDown.add(_this.addDragListener4,_this);
      _this.box2.events.onInputDown.add(_this.addDragListener4,_this);
      _this.box3.events.onInputDown.add(_this.addDragListener4,_this);
      _this.box4.events.onInputDown.add(_this.addDragListener4,_this);        
         
    },
  addDragBoxes5:function(){

        _this.crocsGroup = _this.add.group();
        _this.gameBoxGroup = _this.add.group();
        
        var x = 160;
        var x1 = 210;
        var y = 150;
        var y1 = 150;
        
   
        
           _this.box1 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image10');
           _this.box1.name = "box1";
            _this.box1.frame=1;
           _this.box1.anchor.setTo(0.435,0.42);
           x+=200;
         _this.box2 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image13');
           _this.box2.name = "box2";
            _this.box2.frame=1;
           _this.box2.anchor.setTo(0.435,0.42);
           x+=170;
            _this.box3 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image24');
           _this.box3.name = "box3";
           _this.box3.anchor.setTo(0.435,0.42);
            _this.box3.frame=1;
           x+=170;
            _this.box4 =  _this.gameBoxGroup.create(x,y+10,'sg1_1_1_image4');
           _this.box4.name = "box4";
            _this.box4.frame=1;
           _this.box4.anchor.setTo(0.435,0.42);
           x+=220;
          _this.gameBoxGroup.x = 1000;
_this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 50}, 0, 'Linear', true, 0);
          
         
      _this.box1.inputEnabled = true;
      _this.box2.inputEnabled = true;
      _this.box3.inputEnabled = true;
      _this.box4.inputEnabled = true;
      _this.box1.input.useHandCursor = true;
      _this.box2.input.useHandCursor = true;
      _this.box3.input.useHandCursor = true;
      _this.box4.input.useHandCursor = true;
      _this.box1.events.onInputDown.add(_this.addDragListener5,_this);
      _this.box2.events.onInputDown.add(_this.addDragListener5,_this);
      _this.box3.events.onInputDown.add(_this.addDragListener5,_this);
      _this.box4.events.onInputDown.add(_this.addDragListener5,_this);        
         
    },
  addDragBoxes6:function(){

        _this.crocsGroup = _this.add.group();
        _this.gameBoxGroup = _this.add.group();
        
        var x = 140;
        var x1 = 210;
        var y = 150;
        var y1 = 150;
        
   
        
           _this.box1 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image17');
           _this.box1.name = "box1";
            _this.box1.frame=1;
           _this.box1.anchor.setTo(0.435,0.42);
           x+=170;
         _this.box2 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image3');
           _this.box2.name = "box2";
            _this.box2.frame=1;
           _this.box2.anchor.setTo(0.435,0.42);
           x+=185;
            _this.box3 =  _this.gameBoxGroup.create(x,y,'sg1_1_1_image16');
           _this.box3.name = "box3";
           _this.box3.anchor.setTo(0.435,0.42);
            _this.box3.frame=1;
           x+=193;
            _this.box4 =  _this.gameBoxGroup.create(x,y+10,'sg1_1_1_image21');
           _this.box4.name = "box4";
            _this.box4.frame=1;
           _this.box4.anchor.setTo(0.435,0.42);
           x+=220;
          _this.gameBoxGroup.x = 1000;
_this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 50}, 0, 'Linear', true, 0);
          
         
      _this.box1.inputEnabled = true;
      _this.box2.inputEnabled = true;
      _this.box3.inputEnabled = true;
      _this.box4.inputEnabled = true;
      _this.box1.input.useHandCursor = true;
      _this.box2.input.useHandCursor = true;
      _this.box3.input.useHandCursor = true;
      _this.box4.input.useHandCursor = true;
      _this.box1.events.onInputDown.add(_this.addDragListener6,_this);
      _this.box2.events.onInputDown.add(_this.addDragListener6,_this);
      _this.box3.events.onInputDown.add(_this.addDragListener6,_this);
      _this.box4.events.onInputDown.add(_this.addDragListener6,_this);        
         
    },
  
    addDragListener1:function(target){
         
        var vx = target.x;   
        var vy = target.y; 
        target.input.enableDrag(true);
        target.frame=3;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(
        function(target){
        target.frame=1;
                                   
                    if((_this.checkOverlap(target,_this.b1))&&(target.name == "box3"))
                    {
                        target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x=140;
                        target.y=387;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b2)&&(target.name == "box1"))
                    {
                       target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x=343;
                        target.y=395;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b3)&&(target.name == "box4"))
                    {
                       target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                         target.x=538;
                        target.y=388;
                       _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b4)&&(target.name == "box2"))
                    {
                       target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x=715.5;
                        target.y=394;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                        
                    }
                    else
                    {
                      _this.noofAttempts++;
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                          target.events.onDragStop.removeAll(); 
                    }
                    
                    if((_this.checkOverlap(_this.b1,_this.box3))&&(_this.checkOverlap(_this.b2,_this.box1))&&(_this.checkOverlap(_this.b3,_this.box4))&&(_this.checkOverlap(_this.b4,_this.box2)))
                    {
                      _this.noofAttempts++;
                        _this.box1.frame=3;
                        _this.box2.frame=3;
                        _this.box3.frame=3;
                        _this.box4.frame=3;
                        _this.rightAnswer();
                    }                    
                   

            },_this);

     },

     addDragListener2:function(target){
         
        var vx = target.x;   
        var vy = target.y; 
        target.input.enableDrag(true);
        target.frame=3;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(
        function(target){
        target.frame=1;

                    if(_this.checkOverlap(target,_this.b1)&&(target.name == "box2"))
                    {
                       target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x =  140;
                        target.y =  395;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b2)&&(target.name == "box1"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x =  345;
                        target.y =  390;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b3)&&(target.name == "box4"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                         target.x =  538;
                         target.y =  386;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b4)&&(target.name == "box3"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        _this.done1+=1;
                        target.x =  714;
                        target.y =  394;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                   else
                    {
                      _this.noofAttempts++;
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                          target.events.onDragStop.removeAll(); 
                    }
                    
                    if((_this.checkOverlap(_this.b1,_this.box2))&&(_this.checkOverlap(_this.b2,_this.box1))&&(_this.checkOverlap(_this.b3,_this.box4))&&(_this.checkOverlap(_this.b4,_this.box3)))
                    {
                      _this.noofAttempts++;
                        _this.box1.frame=3;
                        _this.box2.frame=3;
                        _this.box3.frame=3;
                        _this.box4.frame=3;
                        _this.rightAnswer();
                    }                    
                   

                       },_this);
                              
     },
     addDragListener3:function(target){
         
        var vx = target.x;   
        var vy = target.y; 
        target.input.enableDrag(true);
        target.frame=3;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(
        function(target){
        target.frame=1;
                    if(_this.checkOverlap(target,_this.b1)&&(target.name == "box4"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x =  120;
                        target.y =  395;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b2)&&(target.name == "box3"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x =  300;
                        target.y =  392;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b3)&&(target.name == "box2"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                         target.x =  502;
                         target.y =  392;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                           
                    }
                    else if(_this.checkOverlap(target,_this.b4)&&(target.name == "box1"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                      target.x =  698;
                      target.y =  405;
                      _this.clickSound = _this.add.audio('snapSound');
                      _this.clickSound.play();
                      _this.UserInputArray.push(_this.d);
                           
                    }
                    else
                    {
                      _this.noofAttempts++;
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                          target.events.onDragStop.removeAll(); 
                    }
                    
                    if((_this.checkOverlap(_this.b1,_this.box4))&&(_this.checkOverlap(_this.b2,_this.box3))&&(_this.checkOverlap(_this.b3,_this.box2))&&(_this.checkOverlap(_this.b4,_this.box1)))
                    {
                      _this.noofAttempts++;
                        _this.box1.frame=3;
                        _this.box2.frame=3;
                        _this.box3.frame=3;
                        _this.box4.frame=3;
                        _this.rightAnswer();
                    }                    
                   
            },_this);
        
     },
    addDragListener4:function(target){
         
        var vx = target.x;   
        var vy = target.y; 

        target.input.enableDrag(true);
        target.frame=3;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(
            function(target){
                target.frame=1;
                    if(_this.checkOverlap(target,_this.b1)&&(target.name == "box3"))
                    {
                       target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x =  148;
                        target.y =  407;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b2)&&(target.name == "box4"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x =  341;
                        target.y =  400;
                        
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                             
                    }
                    else if(_this.checkOverlap(target,_this.b3)&&(target.name == "box2"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                      target.x =  530.5;
                         target.y =  406;
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                              
                    }
                    else if(_this.checkOverlap(target,_this.b4)&&(target.name == "box1"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x =  709;
                        target.y =  405;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                          
                    }
                   else
                    {
                      _this.noofAttempts++;
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                          target.events.onDragStop.removeAll(); 
                    }
                    
                    if((_this.checkOverlap(_this.b1,_this.box3))&&(_this.checkOverlap(_this.b2,_this.box4))&&(_this.checkOverlap(_this.b3,_this.box2))&&(_this.checkOverlap(_this.b4,_this.box1)))
                    {
                      _this.noofAttempts++;
                        _this.box1.frame=3;
                        _this.box2.frame=3;
                        _this.box3.frame=3;
                        _this.box4.frame=3;
                        _this.rightAnswer();
                    }                    
                   
            },_this);
       
     },
     addDragListener5:function(target){
         
        var vx = target.x;   
        var vy = target.y; 
        target.input.enableDrag(true);
        target.frame=3;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(
            function(target){
                target.frame=1;
               
                    if(_this.checkOverlap(target,_this.b1)&&(target.name == "box4"))
                    {
                        target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x =  148;
                        target.y =  391;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b2)&&(target.name == "box1"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x =  352;
                        target.y =  411;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b3)&&(target.name == "box2"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                         target.x =  545;
                         target.y =  378;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b4)&&(target.name == "box3"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x =  712;
                        target.y =  405;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                        
                    }
                    else
                    {
                      _this.noofAttempts++;
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                          target.events.onDragStop.removeAll(); 
                    }
                    
                    if((_this.checkOverlap(_this.b1,_this.box4))&&(_this.checkOverlap(_this.b2,_this.box1))&&(_this.checkOverlap(_this.b3,_this.box2))&&(_this.checkOverlap(_this.b4,_this.box3)))
                    {
                      _this.noofAttempts++
                        _this.box1.frame=3;
                        _this.box2.frame=3;
                        _this.box3.frame=3;
                        _this.box4.frame=3;
                        _this.rightAnswer();
                    }  
            },_this);
        
     },
    
    addDragListener6:function(target){
         
        var vx = target.x;   
        var vy = target.y; 

        target.input.enableDrag(true);
        target.frame=3;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(
            function(target){
                target.frame=1;
                    if(_this.checkOverlap(target,_this.b1)&&(target.name == "box2"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x =  138.7;
                        target.y =  388;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b2)&&(target.name == "box1"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                         target.x =  325.5;
                         target.y =  388;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b3)&&(target.name == "box4"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                         target.x =  506;
                         target.y =  407;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                    }
                    else if(_this.checkOverlap(target,_this.b4)&&(target.name == "box3"))
                    {
                      target.inputEnabled = false;
                        target.events.onInputDown.removeAll();
                        target.x =  708;
                        target.y =  393;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                        
                    }
                    else
                    {
                      _this.noofAttempts++;
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                          target.events.onDragStop.removeAll(); 
                    }
                    
                    if((_this.checkOverlap(_this.b1,_this.box2))&&(_this.checkOverlap(_this.b2,_this.box1))&&(_this.checkOverlap(_this.b3,_this.box4))&&(_this.checkOverlap(_this.b4,_this.box3)))
                    {
                      _this.noofAttempts++;
                        _this.box1.frame=3;
                        _this.box2.frame=3;
                        _this.box3.frame=3;
                        _this.box4.frame=3;
                        _this.rightAnswer();
                    }  
                                },_this);
        
     },
    
     rightAnswer:function(target){

      if(_this.timer)
      {
        _this.timer.stop();
        _this.timer = null;
      }
      telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
      console.log("*******************************************************************");          
                        _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
                        _this.starAnim.smoothed = false;
                        _this.anim4 =  _this.starAnim.animations.add('star');
                        _this.celebr = _this.add.audio('celebr');
                        _this.celebr.play();
                        _this.anim4.play();
                        _this.count1++;
  _this.time.events.add(300, function(){_this.removeEverthing();},_this);            

     },
    
    
checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);


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
    removeEverthing:function() 
    {
         _this.no1++;
        if( _this.no1<6)
        {
            // _this.no1++;
            _this.done1=0;
              _this.wrong = true;
             _this.timer1.stop();
                _this.count =0;

                    _this.starsGroup.getChildAt(_this.count1).frame = 2; 

              var MaintweenDestroy = _this.add.tween(_this.objGroup);
            MaintweenDestroy.to({ x: -1000}, 1000, 'Linear', true, 1000);
            MaintweenDestroy.onComplete.add(function(){
                _this.objGroup.destroy();
            },_this);
            
            var Maintween1Destroy = _this.add.tween(_this.gameBoxGroup);
            Maintween1Destroy.to({ x: -1000}, 1000, 'Linear', true, 1000);
            Maintween1Destroy.onComplete.add(function(){
                _this.gameBoxGroup.destroy();
                _this.getQuestion();
            },_this); 

            
                       
        }
        else
        {
             _this.timer1.stop();
            _this.timer1 = null;
            _this.counterForTimer = null;
             _this.stopVoice();
             _this.time.events.add(1300, function(){_this.state.start('sg1_1_1Score');},_this);      
            
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
				if( _this.starsGroup.getChildAt(j))
				{
					 _this.starsGroup.getChildAt(j).x-=15;
					 _this.starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
	
wrongAns:function(target)
	{
    target.x=target.x+40;
          _this.shake.shake(10,target);
         // _this.done1=0;
                           
		 _this.wmusic = _this.add.audio('waudio');
		 _this.wmusic.play();
      
      
	},
      
    update:function(){

    },
    
    getVoice:function(){
         _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
            switch( _this.qArrays[ _this.no1])
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
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg1.1.1/English/sg1.1.1.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg1.1.1/Hindi/sg1.1.1.mp3");
                        }
                        else if(window.languageSelected == "Kannada")

                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg1.1.1/Kannada/sg1.1.1.mp3");
                        }
						else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg1.1.1/Marathi/sg1.1.1.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg1.1.1/Telugu/sg1.1.1.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg1.1.1/Tamil/sg1.1.1.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg1.1.1/Urdu/sg1.1.1.mp3");
                    }
                        else if(window.languageSelected == "Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg1.1.1/Gujarati/sg1.1.1.mp3");
                           // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg1.1.1/Odiya/sg1.1.1.mp3");
                        }
        
                      /*  break;
         */   }

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