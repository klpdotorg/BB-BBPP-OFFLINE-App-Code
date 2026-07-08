Game.sg21_2_5level1=function(){};

Game.sg21_2_5level1.prototype={
    init:function(game)
    {
       _this = this;
       
       telInitializer.gameIdInit("SG21_2_5",gradeSelected);
        
    },

    preload:function(game){
  if(!window.grade5SG2){

            window.grade5SG2 = true;

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

            this.load.image('SG21_2_5protractor',window.baseUrl+'assets/gradeAssets/sg21.2.5/protractor.png');
        this.load.image('SG21_2_5graphic',window.baseUrl+'assets/gradeAssets/sg21.2.5/graphic.png');
        this.load.atlas('SG21_2_5rightmark',window.baseUrl+'assets/gradeAssets/sg21.2.5/rightmark.png',window.baseUrl+'json/gradeJson/sg21.2.5/rightmark.json');
        this.load.atlas('SG21_2_5line',window.baseUrl+'assets/gradeAssets/sg21.2.5/line.png',window.baseUrl+'json/gradeJson/sg21.2.5/line.json');
        this.load.atlas('SG21_2_5angle1',window.baseUrl+'assets/gradeAssets/sg21.2.5/angle1.png',window.baseUrl+'json/gradeJson/sg21.2.5/angle1.json');
        this.load.atlas('SG21_2_5angle2',window.baseUrl+'assets/gradeAssets/sg21.2.5/angle2.png',window.baseUrl+'json/gradeJson/sg21.2.5/angle2.json');
        this.load.atlas('SG21_2_5numbers',window.baseUrl+'assets/gradeAssets/sg21.2.5/numbers.png',window.baseUrl+'json/gradeJson/sg21.2.5/numbers.json');
        this.load.image('SG21_2_5degree',window.baseUrl+'assets/gradeAssets/sg21.2.5/degree.png');
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
        _this.wrongAnswer = false;
		_this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add(_this.shake);
        _this.sceneCount = 0;
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.correct=0;
        _this.celebration= false;
        _this.cX = 0;
        _this.cY = 0;
        _this.circle=0;
        _this.radius = 100;
        _this.qArrays = new Array();
        

         _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
         _this.qArrays = _this.shuffle(_this.qArrays);
        
        console.log(_this.qArrays);

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'commonBg2');
        
        _this.topbar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.topbar.scale.setTo(1,1.1);
        
        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade1levelSelectionScreen',true,false);
            console.log("here");},_this,0,1,2);

        _this.speaker = _this.add.button(620,9,'grade11_speaker',function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();
        },_this);
        
        _this.timebg=_this.add.sprite(320,9,'Level42C_timer');
        _this.timebg.scale.setTo(1,1);
        
        _this.timeDisplay = _this.add.text(345,25,_this.minutes + ' : '+_this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'myfont';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';
         

        _this.generateStarsForTheScene(6);
        _this.getQuestion();     
          
    },

  updateTimer:function() {
     _this.counterForTimer++;
    // //console.log("lololil"+_this.counterForTimer);
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

              //  Set a TimerEvent to occur after 2 seconds
              _this.timer.loop(1000, function(){
                   _this.AnsTimerCount++;
              }, this);
              //  Start the timer running - this is important!
              //  It won't start automatically, allowing you to hook it to button events and the like.
              _this.timer.start();
      }
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        
    	console.log("get"+_this.no11);
        _this.speaker.inputEnabled=true;
        _this.speaker.input.useHandCursor = true;
         _this.questionid =1;
        //no11 = 0;
        
        
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
	
			_this.starsGroup.create(_this.world.centerX, 15, 'starAnim1');
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


loadobject:function()
    {
         _this.image1 = _this.add.sprite(420,295,'SG21_2_5protractor');
         _this.image1.anchor.setTo(0.5);
         _this.image1.scale.setTo(1,1); 
        
         _this.tickMark = _this.add.sprite(860,300,'SG21_2_5rightmark');
         _this.tickMark.anchor.setTo(0.5);
         _this.tickMark.scale.setTo(1.5,1.5); 
         _this.tickMark.inputEnabled = true;
         _this.tickMark.input.useHandCursor = true;
        
    },
    
gotoFirstQuestion:function(){
       
     _this.questioNo = 1;
     _this.getVoice();
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
     if(_this.wrongAnswer == false)
     {
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
     tween.to({ x: 0 }, 2000,'Linear', true, 0);
     }
  
     _this.image2 = _this.add.sprite(415,434,'SG21_2_5line');
     _this.image2.anchor.setTo(0.021,0.5);
     _this.image2.scale.setTo(0.98,0.98); 
     _this.image2.name="line1";
     _this.image2.inputEnabled = true;
     _this.image2.input.useHandCursor = true;
    
     _this.image4 = _this.add.sprite(617,434,'SG21_2_5graphic');
     _this.image4.anchor.setTo(0.65,0.5);
     _this.image4.scale.setTo(3.4,2);
     _this.image4.alpha= 0;
     _this.image4.inputEnabled = true;
     _this.image4.input.useHandCursor = true;
     _this.image4.input.enableDrag(true);
    
     _this.image3 = _this.add.sprite(415,431,'SG21_2_5line');
     _this.image3.anchor.setTo(0.021,0.5);
     _this.image3.scale.setTo(0.98,0.98); 
     _this.image3.angle=-180;
     _this.image3.name="line2";
     _this.image3.inputEnabled = true;
     _this.image3.input.useHandCursor = true;
    
     _this.image5 = _this.add.sprite(317,431,'SG21_2_5graphic');
     _this.image5.anchor.setTo(0.65,0.5);
     _this.image5.scale.setTo(3.4,2);
     _this.image5.alpha= 0;
     _this.image5.inputEnabled = true;
     _this.image5.input.useHandCursor = true;
     _this.image5.input.enableDrag(true);
    
      _this.c = _this.add.graphics(0,0);
      _this.c.beginFill(0xEC008C, 1);
      _this.c.drawCircle(416, 432, 15);
     
      _this.cX = 416;
      _this.cY = 432;
    
      _this.cX1 = 416;
      _this.cY1 = 435;
    
      _this.circle = _this.add.graphics();
      _this.circle.lineStyle(2,0xFF0000);
      _this.circle.drawCircle(_this.cX,_this.cY,_this.radius);
      _this.circle.alpha = 0;
    
      _this.circle1 = _this.add.graphics();
      _this.circle1.lineStyle(2,0xFF0000);
      _this.circle1.drawCircle(_this.cX1,_this.cY1,_this.radius);
      _this.circle1.alpha = 0;
    
     _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
     _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
    
     _this.image6 = _this.add.sprite(412,405,'SG21_2_5angle1');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(0.95,0.95); 
     _this.image6.frame=9;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(480,390,'SG21_2_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.frame=9;
     _this.image7.visible=false;
     
     _this.image8 = _this.add.sprite(502,390,'SG21_2_5numbers');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
     _this.image8.frame=0;
     _this.image8.visible=false;
    
     _this.image9 = _this.add.sprite(515,370,'SG21_2_5degree');
     _this.image9.anchor.setTo(0.5);
     _this.image9.scale.setTo(2,2); 
     _this.image9.visible=false;
    
     _this.image10 = _this.add.sprite(415,405,'SG21_2_5angle2');
     _this.image10.anchor.setTo(0.5);
     _this.image10.scale.setTo(0.95,0.95); 
     _this.image10.frame=9;
     _this.image10.visible=false;
     
     _this.image11 = _this.add.sprite(320,390,'SG21_2_5numbers');
     _this.image11.anchor.setTo(0.5);
     _this.image11.scale.setTo(2,2); 
     _this.image11.frame=9;
     _this.image11.visible=false;
     
     _this.image12 = _this.add.sprite(342,390,'SG21_2_5numbers');
     _this.image12.anchor.setTo(0.5);
     _this.image12.scale.setTo(2,2); 
     _this.image12.frame=0;
     _this.image12.visible=false;
    
     _this.image13 = _this.add.sprite(355,370,'SG21_2_5degree');
     _this.image13.anchor.setTo(0.5);
     _this.image13.scale.setTo(2,2); 
     _this.image13.visible=false;
    
     _this.slideGrp.add(_this.image1);
     _this.slideGrp.add(_this.image2);
     _this.slideGrp.add(_this.image3);
     _this.slideGrp.add(_this.image4);
     _this.slideGrp.add(_this.image5);
     _this.slideGrp.add(_this.image6);
     _this.slideGrp.add(_this.image7);
     _this.slideGrp.add(_this.image8);
     _this.slideGrp.add(_this.image9);
     _this.slideGrp.add(_this.image10);
     _this.slideGrp.add(_this.image11);
     _this.slideGrp.add(_this.image12);
     _this.slideGrp.add(_this.image13);
     _this.slideGrp.add(_this.tickMark);
     _this.slideGrp.add(_this.circle);
     _this.slideGrp.add(_this.c);
     
     _this.x = 124;
     _this.y = 285;
     
  },
    
moveSpriteOnCircle:function(x,y) {
    
    _this.theta = Math.atan2(x-_this.cX1, y-_this.cY1)
    
    var newX = Math.sin(_this.theta) * _this.radius;
    var newY = Math.cos(_this.theta) * _this.radius;
    
    _this.image4.x=_this.cX1 + newX;
    _this.image4.y=_this.cY1 + newY;
      
}, 
    
moveSpriteOnCircle1:function(x,y) {
    
    _this.theta = Math.atan2(x-_this.cX, y-_this.cY)
    
    var newX = Math.sin(_this.theta) * _this.radius;
    var newY = Math.cos(_this.theta) * _this.radius;
    
    _this.image5.x=_this.cX + newX;
    _this.image5.y=_this.cY + newY;
      
}, 
    
onDragUpdate:function() {
    var mouseX = _this.input.x;
    var mouseY = _this.input.y;
    console.log("value"+mouseX);
      console.log("value"+mouseY);
        if(mouseY >= 433)
            {
                mouseY = 433;
                
            }
    _this.moveSpriteOnCircle(mouseX, mouseY);
    {
      _this.image2.rotation = _this.physics.arcade.angleBetween(_this.image2,_this.image4);
      _this.image4.rotation = _this.physics.arcade.angleBetween(_this.image4,_this.image2);   
      _this.image4.events.onDragStop.removeAll(); 
      _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);
    }
    
},
    
onDragUpdate1:function() {
    var mouseX = _this.input.x;
    var mouseY = _this.input.y;
     console.log("value"+mouseX);
      console.log("value"+mouseY);
        if(mouseY >= 430)
            {
                mouseY = 430;
            }
    _this.moveSpriteOnCircle1(mouseX, mouseY);
    {
      _this.image3.rotation = _this.physics.arcade.angleBetween(_this.image3,_this.image5);
      _this.image5.rotation = _this.physics.arcade.angleBetween(_this.image5,_this.image3);   
      _this.image5.events.onDragStop.removeAll(); 
      _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);
    }
    
},
     
gotoSecondQuestion:function(){
    
     _this.questioNo = 2;
     _this.getVoice();
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
    if(_this.wrongAnswer == false)
    {
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
     tween.to({ x: 0 }, 2000,'Linear', true, 0);
    }
  
     _this.image2 = _this.add.sprite(415,434,'SG21_2_5line');
     _this.image2.anchor.setTo(0.021,0.5);
     _this.image2.scale.setTo(0.98,0.98); 
     _this.image2.name="line1";
     _this.image2.inputEnabled = true;
     _this.image2.input.useHandCursor = true;
    
     _this.image4 = _this.add.sprite(617,434,'SG21_2_5graphic');
     _this.image4.anchor.setTo(0.65,0.5);
     _this.image4.scale.setTo(3.4,2);
     _this.image4.alpha= 0;
     _this.image4.inputEnabled = true;
     _this.image4.input.useHandCursor = true;
     _this.image4.input.enableDrag(true);
    
     _this.image3 = _this.add.sprite(415,431,'SG21_2_5line');
     _this.image3.anchor.setTo(0.021,0.5);
     _this.image3.scale.setTo(0.98,0.98); 
     _this.image3.angle=-180;
     _this.image3.name="line2";
     _this.image3.inputEnabled = true;
     _this.image3.input.useHandCursor = true;
    
     _this.image5 = _this.add.sprite(317,431,'SG21_2_5graphic');
     _this.image5.anchor.setTo(0.65,0.5);
     _this.image5.scale.setTo(3.4,2);
     _this.image5.alpha= 0;
     _this.image5.inputEnabled = true;
     _this.image5.input.useHandCursor = true;
     _this.image5.input.enableDrag(true);
    
      _this.c = _this.add.graphics(0,0);
      _this.c.beginFill(0xEC008C, 1);
      _this.c.drawCircle(416, 432, 15);
     
      _this.cX = 416;
      _this.cY = 432;
    
      _this.cX1 = 416;
      _this.cY1 = 435;
    
      _this.circle = _this.add.graphics();
      _this.circle.lineStyle(2,0xFF0000);
      _this.circle.drawCircle(_this.cX,_this.cY,_this.radius);
      _this.circle.alpha = 0;
    
      _this.circle1 = _this.add.graphics();
      _this.circle1.lineStyle(2,0xFF0000);
      _this.circle1.drawCircle(_this.cX1,_this.cY1,_this.radius);
      _this.circle1.alpha = 0;
    
     _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
     _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
    
     _this.image6 = _this.add.sprite(470,405,'SG21_2_5angle1');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(0.95,0.95); 
     _this.image6.frame=14;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(560,415,'SG21_2_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.frame=1;
     _this.image7.visible=false;
     
     _this.image8 = _this.add.sprite(580,415,'SG21_2_5numbers');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
     _this.image8.frame=5;
     _this.image8.visible=false;
    
     _this.image9 = _this.add.sprite(600,400,'SG21_2_5degree');
     _this.image9.anchor.setTo(0.5);
     _this.image9.scale.setTo(2,2); 
     _this.image9.visible=false;
    
     _this.image10 = _this.add.sprite(350,405,'SG21_2_5angle2');
     _this.image10.anchor.setTo(0.5);
     _this.image10.scale.setTo(0.95,0.95); 
     _this.image10.frame=14;
     _this.image10.visible=false;
     
     _this.image11 = _this.add.sprite(230,415,'SG21_2_5numbers');
     _this.image11.anchor.setTo(0.5);
     _this.image11.scale.setTo(2,2); 
     _this.image11.frame=1;
     _this.image11.visible=false;
     
     _this.image12 = _this.add.sprite(250,415,'SG21_2_5numbers');
     _this.image12.anchor.setTo(0.5);
     _this.image12.scale.setTo(2,2); 
     _this.image12.frame=5;
     _this.image12.visible=false;
    
     _this.image13 = _this.add.sprite(265,400,'SG21_2_5degree');
     _this.image13.anchor.setTo(0.5);
     _this.image13.scale.setTo(2,2); 
     _this.image13.visible=false;
    
     _this.slideGrp.add(_this.image1);
     _this.slideGrp.add(_this.image2);
     _this.slideGrp.add(_this.image3);
     _this.slideGrp.add(_this.image4);
     _this.slideGrp.add(_this.image5);
     _this.slideGrp.add(_this.image6);
     _this.slideGrp.add(_this.image7);
     _this.slideGrp.add(_this.image8);
     _this.slideGrp.add(_this.image9);
     _this.slideGrp.add(_this.image10);
     _this.slideGrp.add(_this.image11);
     _this.slideGrp.add(_this.image12);
     _this.slideGrp.add(_this.image13);
     _this.slideGrp.add(_this.tickMark);
     _this.slideGrp.add(_this.circle);
     _this.slideGrp.add(_this.c);
     
     _this.x = 124;
     _this.y = 285;
     
  },   

gotoThirdQuestion:function(){
       
     _this.questioNo = 3;
     _this.getVoice();
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
    if(_this.wrongAnswer == false)
    {
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
     tween.to({ x: 0 }, 2000,'Linear', true, 0);
    }
  
     _this.image2 = _this.add.sprite(415,434,'SG21_2_5line');
     _this.image2.anchor.setTo(0.021,0.5);
     _this.image2.scale.setTo(0.98,0.98); 
     _this.image2.name="line1";
     _this.image2.inputEnabled = true;
     _this.image2.input.useHandCursor = true;
    
     _this.image4 = _this.add.sprite(617,434,'SG21_2_5graphic');
     _this.image4.anchor.setTo(0.65,0.5);
     _this.image4.scale.setTo(3.4,2);
     _this.image4.alpha= 0;
     _this.image4.inputEnabled = true;
     _this.image4.input.useHandCursor = true;
     _this.image4.input.enableDrag(true);
    
     _this.image3 = _this.add.sprite(415,431,'SG21_2_5line');
     _this.image3.anchor.setTo(0.021,0.5);
     _this.image3.scale.setTo(0.98,0.98); 
     _this.image3.angle=-180;
     _this.image3.name="line2";
     _this.image3.inputEnabled = true;
     _this.image3.input.useHandCursor = true;
    
     _this.image5 = _this.add.sprite(317,431,'SG21_2_5graphic');
     _this.image5.anchor.setTo(0.65,0.5);
     _this.image5.scale.setTo(3.4,2);
     _this.image5.alpha= 0;
     _this.image5.inputEnabled = true;
     _this.image5.input.useHandCursor = true;
     _this.image5.input.enableDrag(true);
    
      _this.c = _this.add.graphics(0,0);
      _this.c.beginFill(0xEC008C, 1);
      _this.c.drawCircle(416, 432, 15);
     
      _this.cX = 416;
      _this.cY = 432;
    
      _this.cX1 = 416;
      _this.cY1 = 435;
    
      _this.circle = _this.add.graphics();
      _this.circle.lineStyle(2,0xFF0000);
      _this.circle.drawCircle(_this.cX,_this.cY,_this.radius);
      _this.circle.alpha = 0;
    
      _this.circle1 = _this.add.graphics();
      _this.circle1.lineStyle(2,0xFF0000);
      _this.circle1.drawCircle(_this.cX1,_this.cY1,_this.radius);
      _this.circle1.alpha = 0;
    
     _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
     _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
    
     _this.image6 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(0.95,0.95); 
     _this.image6.frame=14;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(490,415,'SG21_2_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(1.8,1.8); 
     _this.image7.frame=3;
     _this.image7.visible=false;
     
     _this.image8 = _this.add.sprite(510,415,'SG21_2_5numbers');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(1.8,1.8); 
     _this.image8.frame=0;
     _this.image8.visible=false;
    
     _this.image9 = _this.add.sprite(520,395,'SG21_2_5degree');
     _this.image9.anchor.setTo(0.5);
     _this.image9.scale.setTo(2,2); 
     _this.image9.visible=false;
    
     _this.image10 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image10.anchor.setTo(0.5);
     _this.image10.scale.setTo(0.95,0.95); 
     _this.image10.frame=15;
     _this.image10.visible=false;
     
     _this.image11 = _this.add.sprite(290,415,'SG21_2_5numbers');
     _this.image11.anchor.setTo(0.5);
     _this.image11.scale.setTo(1.8,1.8); 
     _this.image11.frame=3;
     _this.image11.visible=false;
     
     _this.image12 = _this.add.sprite(310,415,'SG21_2_5numbers');
     _this.image12.anchor.setTo(0.5);
     _this.image12.scale.setTo(1.8,1.8); 
     _this.image12.frame=0;
     _this.image12.visible=false;
    
     _this.image13 = _this.add.sprite(320,395,'SG21_2_5degree');
     _this.image13.anchor.setTo(0.5);
     _this.image13.scale.setTo(2,2); 
     _this.image13.visible=false;
    
     _this.slideGrp.add(_this.image1);
     _this.slideGrp.add(_this.image2);
     _this.slideGrp.add(_this.image3);
     _this.slideGrp.add(_this.image4);
     _this.slideGrp.add(_this.image5);
     _this.slideGrp.add(_this.image6);
     _this.slideGrp.add(_this.image7);
     _this.slideGrp.add(_this.image8);
     _this.slideGrp.add(_this.image9);
     _this.slideGrp.add(_this.image10);
     _this.slideGrp.add(_this.image11);
     _this.slideGrp.add(_this.image12);
     _this.slideGrp.add(_this.image13);
     _this.slideGrp.add(_this.tickMark);
     _this.slideGrp.add(_this.circle);
     _this.slideGrp.add(_this.c);
     
     _this.x = 124;
     _this.y = 285;
     
     
  },
    
gotoFourthQuestion:function(){
    
     _this.questioNo = 4;
     _this.getVoice();
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
    if(_this.wrongAnswer == false)
    {
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
     tween.to({ x: 0 }, 2000,'Linear', true, 0);
    }
  
     _this.image2 = _this.add.sprite(415,434,'SG21_2_5line');
     _this.image2.anchor.setTo(0.021,0.5);
     _this.image2.scale.setTo(0.98,0.98); 
     _this.image2.name="line1";
     _this.image2.inputEnabled = true;
     _this.image2.input.useHandCursor = true;
    
     _this.image4 = _this.add.sprite(617,434,'SG21_2_5graphic');
     _this.image4.anchor.setTo(0.65,0.5);
     _this.image4.scale.setTo(3.4,2);
     _this.image4.alpha= 0;
     _this.image4.inputEnabled = true;
     _this.image4.input.useHandCursor = true;
     _this.image4.input.enableDrag(true);
    
     _this.image3 = _this.add.sprite(415,431,'SG21_2_5line');
     _this.image3.anchor.setTo(0.021,0.5);
     _this.image3.scale.setTo(0.98,0.98); 
     _this.image3.angle=-180;
     _this.image3.name="line2";
     _this.image3.inputEnabled = true;
     _this.image3.input.useHandCursor = true;
    
     _this.image5 = _this.add.sprite(317,431,'SG21_2_5graphic');
     _this.image5.anchor.setTo(0.65,0.5);
     _this.image5.scale.setTo(3.4,2);
     _this.image5.alpha= 0;
     _this.image5.inputEnabled = true;
     _this.image5.input.useHandCursor = true;
     _this.image5.input.enableDrag(true);
    
      _this.c = _this.add.graphics(0,0);
      _this.c.beginFill(0xEC008C, 1);
      _this.c.drawCircle(416, 432, 15);
     
      _this.cX = 416;
      _this.cY = 432;
    
      _this.cX1 = 416;
      _this.cY1 = 435;
    
      _this.circle = _this.add.graphics();
      _this.circle.lineStyle(2,0xFF0000);
      _this.circle.drawCircle(_this.cX,_this.cY,_this.radius);
      _this.circle.alpha = 0;
    
      _this.circle1 = _this.add.graphics();
      _this.circle1.lineStyle(2,0xFF0000);
      _this.circle1.drawCircle(_this.cX1,_this.cY1,_this.radius);
      _this.circle1.alpha = 0;
      _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
      _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
    
     _this.image6 = _this.add.sprite(400,405,'SG21_2_5angle1');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(0.95,0.95); 
     _this.image6.frame=22;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(450,400,'SG21_2_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.frame=1;
     _this.image7.visible=false;
     
     _this.image8 = _this.add.sprite(460,400,'SG21_2_5numbers');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
     _this.image8.frame=1;
     _this.image8.visible=false;
    
     _this.image9 = _this.add.sprite(475,400,'SG21_2_5numbers');
     _this.image9.anchor.setTo(0.5);
     _this.image9.scale.setTo(2,2); 
     _this.image9.frame=5;
     _this.image9.visible=false;
    
     _this.image10 = _this.add.sprite(490,380,'SG21_2_5degree');
     _this.image10.anchor.setTo(0.5);
     _this.image10.scale.setTo(2,2); 
     _this.image10.visible=false;
     
     _this.image11 = _this.add.sprite(420,405,'SG21_2_5angle2');
     _this.image11.anchor.setTo(0.5);
     _this.image11.scale.setTo(0.95,0.95); 
     _this.image11.frame=22;
     _this.image11.visible=false;
     
     _this.image12 = _this.add.sprite(335,400,'SG21_2_5numbers');
     _this.image12.anchor.setTo(0.5);
     _this.image12.scale.setTo(2,2); 
     _this.image12.frame=1;
     _this.image12.visible=false;
    
     _this.image13 = _this.add.sprite(345,400,'SG21_2_5numbers');
     _this.image13.anchor.setTo(0.5);
     _this.image13.scale.setTo(2,2); 
     _this.image13.frame=1;
     _this.image13.visible=false;
     
     _this.image14 = _this.add.sprite(360,400,'SG21_2_5numbers');
     _this.image14.anchor.setTo(0.5);
     _this.image14.scale.setTo(2,2); 
     _this.image14.frame=5;
     _this.image14.visible=false;
    
     _this.image15 = _this.add.sprite(375,380,'SG21_2_5degree');
     _this.image15.anchor.setTo(0.5);
     _this.image15.scale.setTo(2,2); 
     _this.image15.visible=false;
    
     _this.slideGrp.add(_this.image1);
     _this.slideGrp.add(_this.image2);
     _this.slideGrp.add(_this.image3);
     _this.slideGrp.add(_this.image4);
     _this.slideGrp.add(_this.image5);
     _this.slideGrp.add(_this.image6);
     _this.slideGrp.add(_this.image7);
     _this.slideGrp.add(_this.image8);
     _this.slideGrp.add(_this.image9);
     _this.slideGrp.add(_this.image10);
     _this.slideGrp.add(_this.image11);
     _this.slideGrp.add(_this.image12);
     _this.slideGrp.add(_this.image13);
     _this.slideGrp.add(_this.image14);
     _this.slideGrp.add(_this.image15);
     _this.slideGrp.add(_this.tickMark);
     _this.slideGrp.add(_this.circle);
     _this.slideGrp.add(_this.c);
     
     _this.x = 124;
     _this.y = 285;
     
        
},
    
gotoFifthQuestion:function(){
       
     _this.questioNo = 5;
     _this.getVoice();
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
    if(_this.wrongAnswer == false)
    {
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
     tween.to({ x: 0 }, 2000,'Linear', true, 0);
    }
  
     _this.image2 = _this.add.sprite(415,434,'SG21_2_5line');
     _this.image2.anchor.setTo(0.021,0.5);
     _this.image2.scale.setTo(0.98,0.98); 
     _this.image2.name="line1";
     _this.image2.inputEnabled = true;
     _this.image2.input.useHandCursor = true;
    
     _this.image4 = _this.add.sprite(617,434,'SG21_2_5graphic');
     _this.image4.anchor.setTo(0.65,0.5);
     _this.image4.scale.setTo(3.4,2);
     _this.image4.alpha= 0;
     _this.image4.inputEnabled = true;
     _this.image4.input.useHandCursor = true;
     _this.image4.input.enableDrag(true);
    
     _this.image3 = _this.add.sprite(415,431,'SG21_2_5line');
     _this.image3.anchor.setTo(0.021,0.5);
     _this.image3.scale.setTo(0.98,0.98); 
     _this.image3.angle=-180;
     _this.image3.name="line2";
     _this.image3.inputEnabled = true;
     _this.image3.input.useHandCursor = true;
    
     _this.image5 = _this.add.sprite(317,431,'SG21_2_5graphic');
     _this.image5.anchor.setTo(0.65,0.5);
     _this.image5.scale.setTo(3.4,2);
     _this.image5.alpha= 0;
     _this.image5.inputEnabled = true;
     _this.image5.input.useHandCursor = true;
     _this.image5.input.enableDrag(true);
    
      _this.c = _this.add.graphics(0,0);
      _this.c.beginFill(0xEC008C, 1);
      _this.c.drawCircle(416, 432, 15);
     
      _this.cX = 416;
      _this.cY = 432;
    
      _this.cX1 = 416;
      _this.cY1 = 435;
    
      _this.circle = _this.add.graphics();
      _this.circle.lineStyle(2,0xFF0000);
      _this.circle.drawCircle(_this.cX,_this.cY,_this.radius);
      _this.circle.alpha = 0;
    
      _this.circle1 = _this.add.graphics();
      _this.circle1.lineStyle(2,0xFF0000);
      _this.circle1.drawCircle(_this.cX1,_this.cY1,_this.radius);
      _this.circle1.alpha = 0;
    
     _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
     _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
    
     _this.image6 = _this.add.sprite(395,405,'SG21_2_5angle1');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(0.95,0.95); 
     _this.image6.frame=23;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(450,400,'SG21_2_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.frame=1;
     _this.image7.visible=false;
     
     _this.image8 = _this.add.sprite(465,400,'SG21_2_5numbers');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
     _this.image8.frame=3;
     _this.image8.visible=false;
    
     _this.image9 = _this.add.sprite(485,400,'SG21_2_5numbers');
     _this.image9.anchor.setTo(0.5);
     _this.image9.scale.setTo(2,2); 
     _this.image9.frame=0;
     _this.image9.visible=false;
    
     _this.image10 = _this.add.sprite(500,380,'SG21_2_5degree');
     _this.image10.anchor.setTo(0.5);
     _this.image10.scale.setTo(2,2); 
     _this.image10.visible=false;
     
     _this.image11 = _this.add.sprite(430,405,'SG21_2_5angle2');
     _this.image11.anchor.setTo(0.5);
     _this.image11.scale.setTo(0.95,0.95); 
     _this.image11.frame=23;
     _this.image11.visible=false;
     
     _this.image12 = _this.add.sprite(330,400,'SG21_2_5numbers');
     _this.image12.anchor.setTo(0.5);
     _this.image12.scale.setTo(2,2); 
     _this.image12.frame=1;
     _this.image12.visible=false;
    
     _this.image13 = _this.add.sprite(345,400,'SG21_2_5numbers');
     _this.image13.anchor.setTo(0.5);
     _this.image13.scale.setTo(2,2); 
     _this.image13.frame=3;
     _this.image13.visible=false;
     
     _this.image14 = _this.add.sprite(368,400,'SG21_2_5numbers');
     _this.image14.anchor.setTo(0.5);
     _this.image14.scale.setTo(2,2); 
     _this.image14.frame=0;
     _this.image14.visible=false;
    
     _this.image15 = _this.add.sprite(380,380,'SG21_2_5degree');
     _this.image15.anchor.setTo(0.5);
     _this.image15.scale.setTo(2,2); 
     _this.image15.visible=false;
    
     _this.slideGrp.add(_this.image1);
     _this.slideGrp.add(_this.image2);
     _this.slideGrp.add(_this.image3);
     _this.slideGrp.add(_this.image4);
     _this.slideGrp.add(_this.image5);
     _this.slideGrp.add(_this.image6);
     _this.slideGrp.add(_this.image7);
     _this.slideGrp.add(_this.image8);
     _this.slideGrp.add(_this.image9);
     _this.slideGrp.add(_this.image10);
     _this.slideGrp.add(_this.image11);
     _this.slideGrp.add(_this.image12);
     _this.slideGrp.add(_this.image13);
     _this.slideGrp.add(_this.image14);
     _this.slideGrp.add(_this.image15);
     _this.slideGrp.add(_this.tickMark);
     _this.slideGrp.add(_this.circle);
     _this.slideGrp.add(_this.c);
     
     _this.x = 124;
     _this.y = 285;
     
  },

gotoSixthQuestion:function(){
    
     _this.questioNo = 6;
     _this.getVoice();
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
    if(_this.wrongAnswer == false)
    {
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
     tween.to({ x: 0 }, 2000,'Linear', true, 0);
    }
  
     _this.image2 = _this.add.sprite(415,434,'SG21_2_5line');
     _this.image2.anchor.setTo(0.021,0.5);
     _this.image2.scale.setTo(0.98,0.98); 
     _this.image2.name="line1";
     _this.image2.inputEnabled = true;
     _this.image2.input.useHandCursor = true;
    
     _this.image4 = _this.add.sprite(617,434,'SG21_2_5graphic');
     _this.image4.anchor.setTo(0.65,0.5);
     _this.image4.scale.setTo(3.4,2);
     _this.image4.alpha= 0;
     _this.image4.inputEnabled = true;
     _this.image4.input.useHandCursor = true;
     _this.image4.input.enableDrag(true);
    
     _this.image3 = _this.add.sprite(415,431,'SG21_2_5line');
     _this.image3.anchor.setTo(0.021,0.5);
     _this.image3.scale.setTo(0.98,0.98); 
     _this.image3.angle=-180;
     _this.image3.name="line2";
     _this.image3.inputEnabled = true;
     _this.image3.input.useHandCursor = true;
    
     _this.image5 = _this.add.sprite(317,431,'SG21_2_5graphic');
     _this.image5.anchor.setTo(0.65,0.5);
     _this.image5.scale.setTo(3.4,2);
     _this.image5.alpha= 0;
     _this.image5.inputEnabled = true;
     _this.image5.input.useHandCursor = true;
     _this.image5.input.enableDrag(true);
    
      _this.c = _this.add.graphics(0,0);
      _this.c.beginFill(0xEC008C, 1);
      _this.c.drawCircle(416, 432, 15);
     
      _this.cX = 416;
      _this.cY = 432;
    
      _this.cX1 = 416;
      _this.cY1 = 435;
    
      _this.circle = _this.add.graphics();
      _this.circle.lineStyle(2,0xFF0000);
      _this.circle.drawCircle(_this.cX,_this.cY,_this.radius);
      _this.circle.alpha = 0;
    
      _this.circle1 = _this.add.graphics();
      _this.circle1.lineStyle(2,0xFF0000);
      _this.circle1.drawCircle(_this.cX1,_this.cY1,_this.radius);
      _this.circle1.alpha = 0;
    
     _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
     _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
    
     _this.image6 = _this.add.sprite(395,405,'SG21_2_5angle1');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(0.95,0.95); 
     _this.image6.frame=25;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(448,400,'SG21_2_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.frame=1;
     _this.image7.visible=false;
     
     _this.image8 = _this.add.sprite(465,400,'SG21_2_5numbers');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
     _this.image8.frame=4;
     _this.image8.visible=false;
    
     _this.image9 = _this.add.sprite(485,400,'SG21_2_5numbers');
     _this.image9.anchor.setTo(0.5);
     _this.image9.scale.setTo(2,2); 
     _this.image9.frame=5;
     _this.image9.visible=false;
    
     _this.image10 = _this.add.sprite(500,380,'SG21_2_5degree');
     _this.image10.anchor.setTo(0.5);
     _this.image10.scale.setTo(2,2); 
     _this.image10.visible=false;
     
     _this.image11 = _this.add.sprite(430,405,'SG21_2_5angle2');
     _this.image11.anchor.setTo(0.5);
     _this.image11.scale.setTo(0.95,0.95); 
     _this.image11.frame=25;
     _this.image11.visible=false;
     
     _this.image12 = _this.add.sprite(328,400,'SG21_2_5numbers');
     _this.image12.anchor.setTo(0.5);
     _this.image12.scale.setTo(2,2); 
     _this.image12.frame=1;
     _this.image12.visible=false;
    
     _this.image13 = _this.add.sprite(345,400,'SG21_2_5numbers');
     _this.image13.anchor.setTo(0.5);
     _this.image13.scale.setTo(2,2); 
     _this.image13.frame=4;
     _this.image13.visible=false;
     
     _this.image14 = _this.add.sprite(368,400,'SG21_2_5numbers');
     _this.image14.anchor.setTo(0.5);
     _this.image14.scale.setTo(2,2); 
     _this.image14.frame=5;
     _this.image14.visible=false;
    
     _this.image15 = _this.add.sprite(380,380,'SG21_2_5degree');
     _this.image15.anchor.setTo(0.5);
     _this.image15.scale.setTo(2,2); 
     _this.image15.visible=false;
    
     _this.slideGrp.add(_this.image1);
     _this.slideGrp.add(_this.image2);
     _this.slideGrp.add(_this.image3);
     _this.slideGrp.add(_this.image4);
     _this.slideGrp.add(_this.image5);
     _this.slideGrp.add(_this.image6);
     _this.slideGrp.add(_this.image7);
     _this.slideGrp.add(_this.image8);
     _this.slideGrp.add(_this.image9);
     _this.slideGrp.add(_this.image10);
     _this.slideGrp.add(_this.image11);
     _this.slideGrp.add(_this.image12);
     _this.slideGrp.add(_this.image13);
     _this.slideGrp.add(_this.image14);
     _this.slideGrp.add(_this.image15);
     _this.slideGrp.add(_this.tickMark);
     _this.slideGrp.add(_this.circle);
     _this.slideGrp.add(_this.c);
     
     _this.x = 124;
     _this.y = 285;
     
        
},
    
gotoSeventhQuestion:function(){
       
     _this.questioNo = 7;
     _this.getVoice();
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
    if(_this.wrongAnswer == false)
    {
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
     tween.to({ x: 0 }, 2000,'Linear', true, 0);
    }
  
     _this.image2 = _this.add.sprite(415,434,'SG21_2_5line');
     _this.image2.anchor.setTo(0.021,0.5);
     _this.image2.scale.setTo(0.98,0.98); 
     _this.image2.name="line1";
     _this.image2.inputEnabled = true;
     _this.image2.input.useHandCursor = true;
    
     _this.image4 = _this.add.sprite(617,434,'SG21_2_5graphic');
     _this.image4.anchor.setTo(0.65,0.5);
     _this.image4.scale.setTo(3.4,2);
     _this.image4.alpha= 0;
     _this.image4.inputEnabled = true;
     _this.image4.input.useHandCursor = true;
     _this.image4.input.enableDrag(true);
    
     _this.image3 = _this.add.sprite(415,431,'SG21_2_5line');
     _this.image3.anchor.setTo(0.021,0.5);
     _this.image3.scale.setTo(0.98,0.98); 
     _this.image3.angle=-180;
     _this.image3.name="line2";
     _this.image3.inputEnabled = true;
     _this.image3.input.useHandCursor = true;
    
     _this.image5 = _this.add.sprite(317,431,'SG21_2_5graphic');
     _this.image5.anchor.setTo(0.65,0.5);
     _this.image5.scale.setTo(3.4,2);
     _this.image5.alpha= 0;
     _this.image5.inputEnabled = true;
     _this.image5.input.useHandCursor = true;
     _this.image5.input.enableDrag(true);
    
      _this.c = _this.add.graphics(0,0);
      _this.c.beginFill(0xEC008C, 1);
      _this.c.drawCircle(416, 432, 15);
     
      _this.cX = 416;
      _this.cY = 432;
    
      _this.cX1 = 416;
      _this.cY1 = 435;
    
      _this.circle = _this.add.graphics();
      _this.circle.lineStyle(2,0xFF0000);
      _this.circle.drawCircle(_this.cX,_this.cY,_this.radius);
      _this.circle.alpha = 0;
    
      _this.circle1 = _this.add.graphics();
      _this.circle1.lineStyle(2,0xFF0000);
      _this.circle1.drawCircle(_this.cX1,_this.cY1,_this.radius);
      _this.circle1.alpha = 0;
    
     _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
     _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
    
     _this.image6 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(0.95,0.95); 
     _this.image6.frame=16;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(490,410,'SG21_2_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.frame=4;
     _this.image7.visible=false;
     
     _this.image8 = _this.add.sprite(510,410,'SG21_2_5numbers');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
     _this.image8.frame=5;
     _this.image8.visible=false;
    
     _this.image9 = _this.add.sprite(525,390,'SG21_2_5degree');
     _this.image9.anchor.setTo(0.5);
     _this.image9.scale.setTo(2,2); 
     _this.image9.visible=false;
    
     _this.image10 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image10.anchor.setTo(0.5);
     _this.image10.scale.setTo(0.95,0.95); 
     _this.image10.frame=17;
     _this.image10.visible=false;
     
     _this.image11 = _this.add.sprite(298,410,'SG21_2_5numbers');
     _this.image11.anchor.setTo(0.5);
     _this.image11.scale.setTo(2,2); 
     _this.image11.frame=4;
     _this.image11.visible=false;
     
     _this.image12 = _this.add.sprite(320,410,'SG21_2_5numbers');
     _this.image12.anchor.setTo(0.5);
     _this.image12.scale.setTo(2,2); 
     _this.image12.frame=5;
     _this.image12.visible=false;
    
     _this.image13 = _this.add.sprite(340,390,'SG21_2_5degree');
     _this.image13.anchor.setTo(0.5);
     _this.image13.scale.setTo(2,2); 
     _this.image13.visible=false;
    
     _this.slideGrp.add(_this.image1);
     _this.slideGrp.add(_this.image2);
     _this.slideGrp.add(_this.image3);
     _this.slideGrp.add(_this.image4);
     _this.slideGrp.add(_this.image5);
     _this.slideGrp.add(_this.image6);
     _this.slideGrp.add(_this.image7);
     _this.slideGrp.add(_this.image8);
     _this.slideGrp.add(_this.image9);
     _this.slideGrp.add(_this.image10);
     _this.slideGrp.add(_this.image11);
     _this.slideGrp.add(_this.image12);
     _this.slideGrp.add(_this.image13);
     _this.slideGrp.add(_this.tickMark);
     _this.slideGrp.add(_this.circle);
     _this.slideGrp.add(_this.c);
    
     _this.x = 124;
     _this.y = 285;
         
  },

gotoEighthQuestion:function(){
    
     _this.questioNo = 8;
     _this.getVoice();
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
    if(_this.wrongAnswer == false)
    {
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
     tween.to({ x: 0 }, 2000,'Linear', true, 0);
    }
  
     _this.image2 = _this.add.sprite(415,434,'SG21_2_5line');
     _this.image2.anchor.setTo(0.021,0.5);
     _this.image2.scale.setTo(0.98,0.98); 
     _this.image2.name="line1";
     _this.image2.inputEnabled = true;
     _this.image2.input.useHandCursor = true;
    
     _this.image4 = _this.add.sprite(617,434,'SG21_2_5graphic');
     _this.image4.anchor.setTo(0.65,0.5);
     _this.image4.scale.setTo(3.4,2);
     _this.image4.alpha= 0;
     _this.image4.inputEnabled = true;
     _this.image4.input.useHandCursor = true;
     _this.image4.input.enableDrag(true);
    
     _this.image3 = _this.add.sprite(415,431,'SG21_2_5line');
     _this.image3.anchor.setTo(0.021,0.5);
     _this.image3.scale.setTo(0.98,0.98); 
     _this.image3.angle=-180;
     _this.image3.name="line2";
     _this.image3.inputEnabled = true;
     _this.image3.input.useHandCursor = true;
    
     _this.image5 = _this.add.sprite(317,431,'SG21_2_5graphic');
     _this.image5.anchor.setTo(0.65,0.5);
     _this.image5.scale.setTo(3.4,2);
     _this.image5.alpha= 0;
     _this.image5.inputEnabled = true;
     _this.image5.input.useHandCursor = true;
     _this.image5.input.enableDrag(true);
    
      _this.c = _this.add.graphics(0,0);
      _this.c.beginFill(0xEC008C, 1);
      _this.c.drawCircle(416, 432, 15);
     
      _this.cX = 416;
      _this.cY = 432;
    
      _this.cX1 = 416;
      _this.cY1 = 435;
    
      _this.circle = _this.add.graphics();
      _this.circle.lineStyle(2,0xFF0000);
      _this.circle.drawCircle(_this.cX,_this.cY,_this.radius);
      _this.circle.alpha = 0;
    
      _this.circle1 = _this.add.graphics();
      _this.circle1.lineStyle(2,0xFF0000);
      _this.circle1.drawCircle(_this.cX1,_this.cY1,_this.radius);
      _this.circle1.alpha = 0;
    
     _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
     _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
    
     _this.image6 = _this.add.sprite(412,405,'SG21_2_5angle1');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(0.95,0.95); 
     _this.image6.frame=9;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(480,390,'SG21_2_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.frame=9;
     _this.image7.visible=false;
     
     _this.image8 = _this.add.sprite(502,390,'SG21_2_5numbers');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
     _this.image8.frame=0;
     _this.image8.visible=false;
    
     _this.image9 = _this.add.sprite(515,370,'SG21_2_5degree');
     _this.image9.anchor.setTo(0.5);
     _this.image9.scale.setTo(2,2); 
     _this.image9.visible=false;
    
     _this.image10 = _this.add.sprite(415,405,'SG21_2_5angle2');
     _this.image10.anchor.setTo(0.5);
     _this.image10.scale.setTo(0.95,0.95); 
     _this.image10.frame=9;
     _this.image10.visible=false;
     
     _this.image11 = _this.add.sprite(320,390,'SG21_2_5numbers');
     _this.image11.anchor.setTo(0.5);
     _this.image11.scale.setTo(2,2); 
     _this.image11.frame=9;
     _this.image11.visible=false;
     
     _this.image12 = _this.add.sprite(342,390,'SG21_2_5numbers');
     _this.image12.anchor.setTo(0.5);
     _this.image12.scale.setTo(2,2); 
     _this.image12.frame=0;
     _this.image12.visible=false;
    
     _this.image13 = _this.add.sprite(355,370,'SG21_2_5degree');
     _this.image13.anchor.setTo(0.5);
     _this.image13.scale.setTo(2,2); 
     _this.image13.visible=false;
    
     _this.slideGrp.add(_this.image1);
     _this.slideGrp.add(_this.image2);
     _this.slideGrp.add(_this.image3);
     _this.slideGrp.add(_this.image4);
     _this.slideGrp.add(_this.image5);
     _this.slideGrp.add(_this.image6);
     _this.slideGrp.add(_this.image7);
     _this.slideGrp.add(_this.image8);
     _this.slideGrp.add(_this.image9);
     _this.slideGrp.add(_this.image10);
     _this.slideGrp.add(_this.image11);
     _this.slideGrp.add(_this.image12);
     _this.slideGrp.add(_this.image13);
     _this.slideGrp.add(_this.tickMark);
     _this.slideGrp.add(_this.circle);
     _this.slideGrp.add(_this.c);
     
     _this.x = 124;
     _this.y = 285;
     
        
    },
    
gotoNinthQuestion:function(){
       
     _this.questioNo = 9;
     _this.getVoice();
     
      _this.loadobject();
    
     _this.slideGrp = _this.add.group();
    if(_this.wrongAnswer == false)
    {
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
     tween.to({ x: 0 }, 2000,'Linear', true, 0);
    }
  
     _this.image2 = _this.add.sprite(415,434,'SG21_2_5line');
     _this.image2.anchor.setTo(0.021,0.5);
     _this.image2.scale.setTo(0.98,0.98); 
     _this.image2.name="line1";
     _this.image2.inputEnabled = true;
     _this.image2.input.useHandCursor = true;
    
     _this.image4 = _this.add.sprite(617,434,'SG21_2_5graphic');
     _this.image4.anchor.setTo(0.65,0.5);
     _this.image4.scale.setTo(3.4,2);
     _this.image4.alpha= 0;
     _this.image4.inputEnabled = true;
     _this.image4.input.useHandCursor = true;
     _this.image4.input.enableDrag(true);
    
     _this.image3 = _this.add.sprite(415,431,'SG21_2_5line');
     _this.image3.anchor.setTo(0.021,0.5);
     _this.image3.scale.setTo(0.98,0.98); 
     _this.image3.angle=-180;
     _this.image3.name="line2";
     _this.image3.inputEnabled = true;
     _this.image3.input.useHandCursor = true;
    
     _this.image5 = _this.add.sprite(317,431,'SG21_2_5graphic');
     _this.image5.anchor.setTo(0.65,0.5);
     _this.image5.scale.setTo(3.4,2);
     _this.image5.alpha= 0;
     _this.image5.inputEnabled = true;
     _this.image5.input.useHandCursor = true;
     _this.image5.input.enableDrag(true);
    
      _this.c = _this.add.graphics(0,0);
      _this.c.beginFill(0xEC008C, 1);
      _this.c.drawCircle(416, 432, 15);
     
      _this.cX = 416;
      _this.cY = 432;
    
      _this.cX1 = 416;
      _this.cY1 = 435;
    
      _this.circle = _this.add.graphics();
      _this.circle.lineStyle(2,0xFF0000);
      _this.circle.drawCircle(_this.cX,_this.cY,_this.radius);
      _this.circle.alpha = 0;
    
      _this.circle1 = _this.add.graphics();
      _this.circle1.lineStyle(2,0xFF0000);
      _this.circle1.drawCircle(_this.cX1,_this.cY1,_this.radius);
      _this.circle1.alpha = 0;
    
     _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
     _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
    
    //angle5
     _this.image6 = _this.add.sprite(510,405,'SG21_2_5angle1');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(0.95,0.95); 
     _this.image6.frame=12;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(650,425,'SG21_2_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(1.2,1.2); 
     _this.image7.frame=5;
     _this.image7.visible=false;
    
     _this.image8 = _this.add.sprite(660,418,'SG21_2_5degree');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(1,1); 
     _this.image8.visible=false;
    
    //angle5 another side
     _this.image9 = _this.add.sprite(260,405,'SG21_2_5angle2');
     _this.image9.anchor.setTo(0.5);
     _this.image9.scale.setTo(0.95,0.95); 
     _this.image9.frame=13;
     _this.image9.visible=false;
     
     _this.image10 = _this.add.sprite(170,425,'SG21_2_5numbers');
     _this.image10.anchor.setTo(0.5);
     _this.image10.scale.setTo(1.2,1.2); 
     _this.image10.frame=5;
     _this.image10.visible=false;
    
     _this.image11 = _this.add.sprite(180,418,'SG21_2_5degree');
     _this.image11.anchor.setTo(0.5);
     _this.image11.scale.setTo(1,1); 
     _this.image11.visible=false;
    
     //angle10
     _this.image12 = _this.add.sprite(480,405,'SG21_2_5angle1');
     _this.image12.anchor.setTo(0.5);
     _this.image12.scale.setTo(0.95,0.95); 
     _this.image12.frame=13;
     _this.image12.visible=false;
     
     _this.image13 = _this.add.sprite(568,420,'SG21_2_5numbers');
     _this.image13.anchor.setTo(0.5);
     _this.image13.scale.setTo(1.2,1.2); 
     _this.image13.frame=1;
     _this.image13.visible=false;
      
     _this.image14 = _this.add.sprite(580,420,'SG21_2_5numbers');
     _this.image14.anchor.setTo(0.5);
     _this.image14.scale.setTo(1.2,1.2); 
     _this.image14.frame=0;
     _this.image14.visible=false;
    
     _this.image15 = _this.add.sprite(590,410,'SG21_2_5degree');
     _this.image15.anchor.setTo(0.5);
     _this.image15.scale.setTo(1.2,1.2); 
     _this.image15.visible=false;
    
     //angle10 another side
     _this.image16 = _this.add.sprite(320,405,'SG21_2_5angle2');
     _this.image16.anchor.setTo(0.5);
     _this.image16.scale.setTo(0.95,0.95); 
     _this.image16.frame=13;
     _this.image16.visible=false;
     
     _this.image17 = _this.add.sprite(210,420,'SG21_2_5numbers');
     _this.image17.anchor.setTo(0.5);
     _this.image17.scale.setTo(1.2,1.2); 
     _this.image17.frame=1;
     _this.image17.visible=false;
      
     _this.image18 = _this.add.sprite(220,420,'SG21_2_5numbers');
     _this.image18.anchor.setTo(0.5);
     _this.image18.scale.setTo(1.2,1.2); 
     _this.image18.frame=0;
     _this.image18.visible=false;
    
     _this.image19 = _this.add.sprite(230,410,'SG21_2_5degree');
     _this.image19.anchor.setTo(0.5);
     _this.image19.scale.setTo(1.2,1.2); 
     _this.image19.visible=false;
    
      //angle15
     _this.image20 = _this.add.sprite(470,405,'SG21_2_5angle1');
     _this.image20.anchor.setTo(0.5);
     _this.image20.scale.setTo(0.95,0.95); 
     _this.image20.frame=14;
     _this.image20.visible=false;
     
     _this.image21 = _this.add.sprite(560,415,'SG21_2_5numbers');
     _this.image21.anchor.setTo(0.5);
     _this.image21.scale.setTo(2,2); 
     _this.image21.frame=1;
     _this.image21.visible=false;
     
     _this.image22 = _this.add.sprite(580,415,'SG21_2_5numbers');
     _this.image22.anchor.setTo(0.5);
     _this.image22.scale.setTo(2,2); 
     _this.image22.frame=5;
     _this.image22.visible=false;
    
     _this.image23 = _this.add.sprite(600,400,'SG21_2_5degree');
     _this.image23.anchor.setTo(0.5);
     _this.image23.scale.setTo(2,2); 
     _this.image23.visible=false;
    
      //angle15 another side
     _this.image24 = _this.add.sprite(350,405,'SG21_2_5angle2');
     _this.image24.anchor.setTo(0.5);
     _this.image24.scale.setTo(0.95,0.95); 
     _this.image24.frame=14;
     _this.image24.visible=false;
     
     _this.image25 = _this.add.sprite(230,415,'SG21_2_5numbers');
     _this.image25.anchor.setTo(0.5);
     _this.image25.scale.setTo(2,2); 
     _this.image25.frame=1;
     _this.image25.visible=false;
     
     _this.image26 = _this.add.sprite(250,415,'SG21_2_5numbers');
     _this.image26.anchor.setTo(0.5);
     _this.image26.scale.setTo(2,2); 
     _this.image26.frame=5;
     _this.image26.visible=false;
    
     _this.image27 = _this.add.sprite(265,400,'SG21_2_5degree');
     _this.image27.anchor.setTo(0.5);
     _this.image27.scale.setTo(2,2); 
     _this.image27.visible=false;
    
     //angle20
     _this.image28 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image28.anchor.setTo(0.5);
     _this.image28.scale.setTo(0.95,0.95); 
     _this.image28.frame=13;
     _this.image28.visible=false;
     
     _this.image29 = _this.add.sprite(520,418,'SG21_2_5numbers');
     _this.image29.anchor.setTo(0.5);
     _this.image29.scale.setTo(1.5,1.5); 
     _this.image29.frame=2;
     _this.image29.visible=false;
     
     _this.image30 = _this.add.sprite(535,418,'SG21_2_5numbers');
     _this.image30.anchor.setTo(0.5);
     _this.image30.scale.setTo(1.5,1.5); 
     _this.image30.frame=0;
     _this.image30.visible=false;
    
     _this.image31 = _this.add.sprite(545,402,'SG21_2_5degree');
     _this.image31.anchor.setTo(0.5);
     _this.image31.scale.setTo(2,2); 
     _this.image31.visible=false;
    
     //angle20 another side
     _this.image32 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image32.anchor.setTo(0.5);
     _this.image32.scale.setTo(0.95,0.95); 
     _this.image32.frame=13;
     _this.image32.visible=false;
     
     _this.image33 = _this.add.sprite(260,415,'SG21_2_5numbers');
     _this.image33.anchor.setTo(0.5);
     _this.image33.scale.setTo(1.5,1.5); 
     _this.image33.frame=2;
     _this.image33.visible=false;
     
     _this.image34 = _this.add.sprite(275,415,'SG21_2_5numbers');
     _this.image34.anchor.setTo(0.5);
     _this.image34.scale.setTo(1.5,1.5); 
     _this.image34.frame=0;
     _this.image34.visible=false;
    
     _this.image35 = _this.add.sprite(285,400,'SG21_2_5degree');
     _this.image35.anchor.setTo(0.5);
     _this.image35.scale.setTo(2,2); 
     _this.image35.visible=false;
    
      //angle25
     _this.image36 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image36.anchor.setTo(0.5);
     _this.image36.scale.setTo(0.95,0.95); 
     _this.image36.frame=14;
     _this.image36.visible=false;
     
     _this.image37 = _this.add.sprite(505,410,'SG21_2_5numbers');
     _this.image37.anchor.setTo(0.5);
     _this.image37.scale.setTo(1.7,1.7); 
     _this.image37.frame=2;
     _this.image37.visible=false;
     
     _this.image38 = _this.add.sprite(520,410,'SG21_2_5numbers');
     _this.image38.anchor.setTo(0.5);
     _this.image38.scale.setTo(1.7,1.7); 
     _this.image38.frame=5;
     _this.image38.visible=false;
    
     _this.image39 = _this.add.sprite(530,390,'SG21_2_5degree');
     _this.image39.anchor.setTo(0.5);
     _this.image39.scale.setTo(2,2); 
     _this.image39.visible=false;
    
      //angle25 another side
     _this.image40 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image40.anchor.setTo(0.5);
     _this.image40.scale.setTo(0.95,0.95); 
     _this.image40.frame=14;
     _this.image40.visible=false;
     
     _this.image400 = _this.add.sprite(270,413,'SG21_2_5numbers');
     _this.image400.anchor.setTo(0.5);
     _this.image400.scale.setTo(1.7,1.7); 
     _this.image400.frame=2;
     _this.image400.visible=false;
     
     _this.image41 = _this.add.sprite(290,413,'SG21_2_5numbers');
     _this.image41.anchor.setTo(0.5);
     _this.image41.scale.setTo(1.7,1.7); 
     _this.image41.frame=5;
     _this.image41.visible=false;
    
     _this.image42 = _this.add.sprite(300,393,'SG21_2_5degree');
     _this.image42.anchor.setTo(0.5);
     _this.image42.scale.setTo(2,2); 
     _this.image42.visible=false;
    
     //angle30
     _this.image43 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image43.anchor.setTo(0.5);
     _this.image43.scale.setTo(0.95,0.95); 
     _this.image43.frame=14;
     _this.image43.visible=false;
     
     _this.image44 = _this.add.sprite(490,415,'SG21_2_5numbers');
     _this.image44.anchor.setTo(0.5);
     _this.image44.scale.setTo(1.8,1.8); 
     _this.image44.frame=3;
     _this.image44.visible=false;
     
     _this.image45 = _this.add.sprite(510,415,'SG21_2_5numbers');
     _this.image45.anchor.setTo(0.5);
     _this.image45.scale.setTo(1.8,1.8); 
     _this.image45.frame=0;
     _this.image45.visible=false;
    
     _this.image46 = _this.add.sprite(520,395,'SG21_2_5degree');
     _this.image46.anchor.setTo(0.5);
     _this.image46.scale.setTo(2,2); 
     _this.image46.visible=false;
    
     //angle30 another side
     _this.image47 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image47.anchor.setTo(0.5);
     _this.image47.scale.setTo(0.95,0.95); 
     _this.image47.frame=15;
     _this.image47.visible=false;
     
     _this.image48 = _this.add.sprite(290,415,'SG21_2_5numbers');
     _this.image48.anchor.setTo(0.5);
     _this.image48.scale.setTo(1.8,1.8); 
     _this.image48.frame=3;
     _this.image48.visible=false;
     
     _this.image49 = _this.add.sprite(310,415,'SG21_2_5numbers');
     _this.image49.anchor.setTo(0.5);
     _this.image49.scale.setTo(1.8,1.8); 
     _this.image49.frame=0;
     _this.image49.visible=false;
    
     _this.image50 = _this.add.sprite(320,395,'SG21_2_5degree');
     _this.image50.anchor.setTo(0.5);
     _this.image50.scale.setTo(2,2); 
     _this.image50.visible=false;
    
     //angle35
     _this.image51 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image51.anchor.setTo(0.5);
     _this.image51.scale.setTo(0.95,0.95); 
     _this.image51.frame=15;
     _this.image51.visible=false;
     
     _this.image52 = _this.add.sprite(490,410,'SG21_2_5numbers');
     _this.image52.anchor.setTo(0.5);
     _this.image52.scale.setTo(2,2); 
     _this.image52.frame=3;
     _this.image52.visible=false;
     
     _this.image53 = _this.add.sprite(510,410,'SG21_2_5numbers');
     _this.image53.anchor.setTo(0.5);
     _this.image53.scale.setTo(2,2); 
     _this.image53.frame=5;
     _this.image53.visible=false;
    
     _this.image54 = _this.add.sprite(525,385,'SG21_2_5degree');
     _this.image54.anchor.setTo(0.5);
     _this.image54.scale.setTo(2,2); 
     _this.image54.visible=false;
    
      //angle35 another side
     _this.image55 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image55.anchor.setTo(0.5);
     _this.image55.scale.setTo(0.95,0.95); 
     _this.image55.frame=16;
     _this.image55.visible=false;
     
     _this.image56 = _this.add.sprite(280,410,'SG21_2_5numbers');
     _this.image56.anchor.setTo(0.5);
     _this.image56.scale.setTo(2,2); 
     _this.image56.frame=3;
     _this.image56.visible=false;
     
     _this.image57 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image57.anchor.setTo(0.5);
     _this.image57.scale.setTo(2,2); 
     _this.image57.frame=5;
     _this.image57.visible=false;
    
     _this.image58 = _this.add.sprite(315,390,'SG21_2_5degree');
     _this.image58.anchor.setTo(0.5);
     _this.image58.scale.setTo(2,2); 
     _this.image58.visible=false;
     
      //angle40
     _this.image59 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image59.anchor.setTo(0.5);
     _this.image59.scale.setTo(0.95,0.95); 
     _this.image59.frame=15;
     _this.image59.visible=false;
     
     _this.image60 = _this.add.sprite(485,410,'SG21_2_5numbers');
     _this.image60.anchor.setTo(0.5);
     _this.image60.scale.setTo(2,2); 
     _this.image60.frame=4;
     _this.image60.visible=false;
     
     _this.image61 = _this.add.sprite(510,410,'SG21_2_5numbers');
     _this.image61.anchor.setTo(0.5);
     _this.image61.scale.setTo(2,2); 
     _this.image61.frame=0;
     _this.image61.visible=false;
    
     _this.image62 = _this.add.sprite(520,390,'SG21_2_5degree');
     _this.image62.anchor.setTo(0.5);
     _this.image62.scale.setTo(2,2); 
     _this.image62.visible=false;
    
     //angle40 another side
     _this.image63 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image63.anchor.setTo(0.5);
     _this.image63.scale.setTo(0.95,0.95); 
     _this.image63.frame=16;
     _this.image63.visible=false;
     
     _this.image64 = _this.add.sprite(285,410,'SG21_2_5numbers');
     _this.image64.anchor.setTo(0.5);
     _this.image64.scale.setTo(2,2); 
     _this.image64.frame=4;
     _this.image64.visible=false;
     
     _this.image65 = _this.add.sprite(310,410,'SG21_2_5numbers');
     _this.image65.anchor.setTo(0.5);
     _this.image65.scale.setTo(2,2); 
     _this.image65.frame=0;
     _this.image65.visible=false;
    
     _this.image66 = _this.add.sprite(320,390,'SG21_2_5degree');
     _this.image66.anchor.setTo(0.5);
     _this.image66.scale.setTo(2,2); 
     _this.image66.visible=false;
    
      //angle45
     _this.image67 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image67.anchor.setTo(0.5);
     _this.image67.scale.setTo(0.95,0.95); 
     _this.image67.frame=16;
     _this.image67.visible=false;
     
     _this.image68 = _this.add.sprite(490,410,'SG21_2_5numbers');
     _this.image68.anchor.setTo(0.5);
     _this.image68.scale.setTo(2,2); 
     _this.image68.frame=4;
     _this.image68.visible=false;
     
     _this.image69 = _this.add.sprite(510,410,'SG21_2_5numbers');
     _this.image69.anchor.setTo(0.5);
     _this.image69.scale.setTo(2,2); 
     _this.image69.frame=5;
     _this.image69.visible=false;
    
     _this.image70 = _this.add.sprite(525,390,'SG21_2_5degree');
     _this.image70.anchor.setTo(0.5);
     _this.image70.scale.setTo(2,2); 
     _this.image70.visible=false;
    
     //angle45 another side
     _this.image71 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image71.anchor.setTo(0.5);
     _this.image71.scale.setTo(0.95,0.95); 
     _this.image71.frame=17;
     _this.image71.visible=false;
     
     _this.image72 = _this.add.sprite(298,410,'SG21_2_5numbers');
     _this.image72.anchor.setTo(0.5);
     _this.image72.scale.setTo(2,2); 
     _this.image72.frame=4;
     _this.image72.visible=false;
     
     _this.image73 = _this.add.sprite(320,410,'SG21_2_5numbers');
     _this.image73.anchor.setTo(0.5);
     _this.image73.scale.setTo(2,2); 
     _this.image73.frame=5;
     _this.image73.visible=false;
    
     _this.image74 = _this.add.sprite(340,390,'SG21_2_5degree');
     _this.image74.anchor.setTo(0.5);
     _this.image74.scale.setTo(2,2); 
     _this.image74.visible=false;
    
      //angle50
     _this.image75 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image75.anchor.setTo(0.5);
     _this.image75.scale.setTo(0.95,0.95); 
     _this.image75.frame=16;
     _this.image75.visible=false;
     
     _this.image76 = _this.add.sprite(485,410,'SG21_2_5numbers');
     _this.image76.anchor.setTo(0.5);
     _this.image76.scale.setTo(2,2); 
     _this.image76.frame=5;
     _this.image76.visible=false;
     
     _this.image77 = _this.add.sprite(510,410,'SG21_2_5numbers');
     _this.image77.anchor.setTo(0.5);
     _this.image77.scale.setTo(2,2); 
     _this.image77.frame=0;
     _this.image77.visible=false;
    
     _this.image78 = _this.add.sprite(520,385,'SG21_2_5degree');
     _this.image78.anchor.setTo(0.5);
     _this.image78.scale.setTo(2,2); 
     _this.image78.visible=false;
    
     //angle50 another side
     _this.image79 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image79.anchor.setTo(0.5);
     _this.image79.scale.setTo(0.95,0.95); 
     _this.image79.frame=18;
     _this.image79.visible=false;
     
     _this.image80 = _this.add.sprite(285,410,'SG21_2_5numbers');
     _this.image80.anchor.setTo(0.5);
     _this.image80.scale.setTo(2,2); 
     _this.image80.frame=5;
     _this.image80.visible=false;
     
     _this.image81 = _this.add.sprite(310,410,'SG21_2_5numbers');
     _this.image81.anchor.setTo(0.5);
     _this.image81.scale.setTo(2,2); 
     _this.image81.frame=0;
     _this.image81.visible=false;
    
     _this.image82 = _this.add.sprite(320,385,'SG21_2_5degree');
     _this.image82.anchor.setTo(0.5);
     _this.image82.scale.setTo(2,2); 
     _this.image82.visible=false;
    
     //angle55
     _this.image83 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image83.anchor.setTo(0.5);
     _this.image83.scale.setTo(0.95,0.95); 
     _this.image83.frame=17;
     _this.image83.visible=false;
     
     _this.image84 = _this.add.sprite(490,410,'SG21_2_5numbers');
     _this.image84.anchor.setTo(0.5);
     _this.image84.scale.setTo(2,2); 
     _this.image84.frame=5;
     _this.image84.visible=false;
     
     _this.image85 = _this.add.sprite(510,410,'SG21_2_5numbers');
     _this.image85.anchor.setTo(0.5);
     _this.image85.scale.setTo(2,2); 
     _this.image85.frame=5;
     _this.image85.visible=false;
    
     _this.image86 = _this.add.sprite(525,390,'SG21_2_5degree');
     _this.image86.anchor.setTo(0.5);
     _this.image86.scale.setTo(2,2); 
     _this.image86.visible=false;
    
     //angle55 another side
     _this.image87 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image87.anchor.setTo(0.5);
     _this.image87.scale.setTo(0.95,0.95); 
     _this.image87.frame=18;
     _this.image87.visible=false;
     
     _this.image88 = _this.add.sprite(298,410,'SG21_2_5numbers');
     _this.image88.anchor.setTo(0.5);
     _this.image88.scale.setTo(2,2); 
     _this.image88.frame=5;
     _this.image88.visible=false;
     
     _this.image89 = _this.add.sprite(320,410,'SG21_2_5numbers');
     _this.image89.anchor.setTo(0.5);
     _this.image89.scale.setTo(2,2); 
     _this.image89.frame=5;
     _this.image89.visible=false;
    
     _this.image90 = _this.add.sprite(340,390,'SG21_2_5degree');
     _this.image90.anchor.setTo(0.5);
     _this.image90.scale.setTo(2,2); 
     _this.image90.visible=false;
    
      //angle60
     _this.image91 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image91.anchor.setTo(0.5);
     _this.image91.scale.setTo(0.95,0.95); 
     _this.image91.frame=17;
     _this.image91.visible=false;
     
     _this.image92 = _this.add.sprite(485,410,'SG21_2_5numbers');
     _this.image92.anchor.setTo(0.5);
     _this.image92.scale.setTo(2,2); 
     _this.image92.frame=6;
     _this.image92.visible=false;
     
     _this.image93 = _this.add.sprite(510,410,'SG21_2_5numbers');
     _this.image93.anchor.setTo(0.5);
     _this.image93.scale.setTo(2,2); 
     _this.image93.frame=0;
     _this.image93.visible=false;
    
     _this.image94 = _this.add.sprite(520,385,'SG21_2_5degree');
     _this.image94.anchor.setTo(0.5);
     _this.image94.scale.setTo(2,2); 
     _this.image94.visible=false;
    
     //angle60 another side
     _this.image95 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image95.anchor.setTo(0.5);
     _this.image95.scale.setTo(0.95,0.95); 
     _this.image95.frame=19;
     _this.image95.visible=false;
     
     _this.image96 = _this.add.sprite(285,410,'SG21_2_5numbers');
     _this.image96.anchor.setTo(0.5);
     _this.image96.scale.setTo(2,2); 
     _this.image96.frame=6;
     _this.image96.visible=false;
     
     _this.image97 = _this.add.sprite(310,410,'SG21_2_5numbers');
     _this.image97.anchor.setTo(0.5);
     _this.image97.scale.setTo(2,2); 
     _this.image97.frame=0;
     _this.image97.visible=false;
    
     _this.image98 = _this.add.sprite(320,385,'SG21_2_5degree');
     _this.image98.anchor.setTo(0.5);
     _this.image98.scale.setTo(2,2); 
     _this.image98.visible=false;
    
     //angle65
     _this.image99 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image99.anchor.setTo(0.5);
     _this.image99.scale.setTo(0.95,0.95); 
     _this.image99.frame=18;
     _this.image99.visible=false;
     
     _this.image100 = _this.add.sprite(490,410,'SG21_2_5numbers');
     _this.image100.anchor.setTo(0.5);
     _this.image100.scale.setTo(2,2); 
     _this.image100.frame=6;
     _this.image100.visible=false;
     
     _this.image101 = _this.add.sprite(510,410,'SG21_2_5numbers');
     _this.image101.anchor.setTo(0.5);
     _this.image101.scale.setTo(2,2); 
     _this.image101.frame=5;
     _this.image101.visible=false;
    
     _this.image102 = _this.add.sprite(525,390,'SG21_2_5degree');
     _this.image102.anchor.setTo(0.5);
     _this.image102.scale.setTo(2,2); 
     _this.image102.visible=false;
    
     //angle65 another side
     _this.image103 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image103.anchor.setTo(0.5);
     _this.image103.scale.setTo(0.95,0.95); 
     _this.image103.frame=20;
     _this.image103.visible=false;
     
     _this.image104 = _this.add.sprite(298,410,'SG21_2_5numbers');
     _this.image104.anchor.setTo(0.5);
     _this.image104.scale.setTo(2,2); 
     _this.image104.frame=6;
     _this.image104.visible=false;
     
     _this.image105 = _this.add.sprite(320,410,'SG21_2_5numbers');
     _this.image105.anchor.setTo(0.5);
     _this.image105.scale.setTo(2,2); 
     _this.image105.frame=5;
     _this.image105.visible=false;
    
     _this.image106 = _this.add.sprite(340,390,'SG21_2_5degree');
     _this.image106.anchor.setTo(0.5);
     _this.image106.scale.setTo(2,2); 
     _this.image106.visible=false;
    
      //angle70
     _this.image107 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image107.anchor.setTo(0.5);
     _this.image107.scale.setTo(0.95,0.95); 
     _this.image107.frame=19;
     _this.image107.visible=false;
     
     _this.image108 = _this.add.sprite(485,410,'SG21_2_5numbers');
     _this.image108.anchor.setTo(0.5);
     _this.image108.scale.setTo(2,2); 
     _this.image108.frame=7;
     _this.image108.visible=false;
     
     _this.image109 = _this.add.sprite(505,410,'SG21_2_5numbers');
     _this.image109.anchor.setTo(0.5);
     _this.image109.scale.setTo(2,2); 
     _this.image109.frame=0;
     _this.image109.visible=false;
    
     _this.image110 = _this.add.sprite(520,385,'SG21_2_5degree');
     _this.image110.anchor.setTo(0.5);
     _this.image110.scale.setTo(2,2); 
     _this.image110.visible=false;
    
     //angle70 another side
     _this.image111 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image111.anchor.setTo(0.5);
     _this.image111.scale.setTo(0.95,0.95); 
     _this.image111.frame=20;
     _this.image111.visible=false;
     
     _this.image112 = _this.add.sprite(290,410,'SG21_2_5numbers');
     _this.image112.anchor.setTo(0.5);
     _this.image112.scale.setTo(2,2); 
     _this.image112.frame=7;
     _this.image112.visible=false;
     
     _this.image113 = _this.add.sprite(310,410,'SG21_2_5numbers');
     _this.image113.anchor.setTo(0.5);
     _this.image113.scale.setTo(2,2); 
     _this.image113.frame=0;
     _this.image113.visible=false;
    
     _this.image114 = _this.add.sprite(320,385,'SG21_2_5degree');
     _this.image114.anchor.setTo(0.5);
     _this.image114.scale.setTo(2,2); 
     _this.image114.visible=false;
    
     //angle75
     _this.image115 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image115.anchor.setTo(0.5);
     _this.image115.scale.setTo(0.95,0.95); 
     _this.image115.frame=19;
     _this.image115.visible=false;
     
     _this.image116 = _this.add.sprite(490,410,'SG21_2_5numbers');
     _this.image116.anchor.setTo(0.5);
     _this.image116.scale.setTo(2,2); 
     _this.image116.frame=7;
     _this.image116.visible=false;
     
     _this.image117 = _this.add.sprite(510,410,'SG21_2_5numbers');
     _this.image117.anchor.setTo(0.5);
     _this.image117.scale.setTo(2,2); 
     _this.image117.frame=5;
     _this.image117.visible=false;
    
     _this.image118 = _this.add.sprite(525,390,'SG21_2_5degree');
     _this.image118.anchor.setTo(0.5);
     _this.image118.scale.setTo(2,2); 
     _this.image118.visible=false;
    
     //angle75 another side
     _this.image119 = _this.add.sprite(390,405,'SG21_2_5angle2');
     _this.image119.anchor.setTo(0.5);
     _this.image119.scale.setTo(0.95,0.95); 
     _this.image119.frame=22;
     _this.image119.visible=false;
     
     _this.image120 = _this.add.sprite(298,410,'SG21_2_5numbers');
     _this.image120.anchor.setTo(0.5);
     _this.image120.scale.setTo(2,2); 
     _this.image120.frame=7;
     _this.image120.visible=false;
     
     _this.image121 = _this.add.sprite(320,410,'SG21_2_5numbers');
     _this.image121.anchor.setTo(0.5);
     _this.image121.scale.setTo(2,2); 
     _this.image121.frame=5;
     _this.image121.visible=false;
    
     _this.image122 = _this.add.sprite(340,390,'SG21_2_5degree');
     _this.image122.anchor.setTo(0.5);
     _this.image122.scale.setTo(2,2); 
     _this.image122.visible=false;
    
      //angle80
     _this.image123 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image123.anchor.setTo(0.5);
     _this.image123.scale.setTo(0.95,0.95); 
     _this.image123.frame=20;
     _this.image123.visible=false;
     
     _this.image124 = _this.add.sprite(485,410,'SG21_2_5numbers');
     _this.image124.anchor.setTo(0.5);
     _this.image124.scale.setTo(2,2); 
     _this.image124.frame=8;
     _this.image124.visible=false;
     
     _this.image125 = _this.add.sprite(505,410,'SG21_2_5numbers');
     _this.image125.anchor.setTo(0.5);
     _this.image125.scale.setTo(2,2); 
     _this.image125.frame=0;
     _this.image125.visible=false;
    
     _this.image126 = _this.add.sprite(520,385,'SG21_2_5degree');
     _this.image126.anchor.setTo(0.5);
     _this.image126.scale.setTo(2,2); 
     _this.image126.visible=false;
    
     //angle80 another side
     _this.image127 = _this.add.sprite(395,405,'SG21_2_5angle2');
     _this.image127.anchor.setTo(0.5);
     _this.image127.scale.setTo(0.95,0.95); 
     _this.image127.frame=22;
     _this.image127.visible=false;
     
     _this.image128 = _this.add.sprite(290,410,'SG21_2_5numbers');
     _this.image128.anchor.setTo(0.5);
     _this.image128.scale.setTo(2,2); 
     _this.image128.frame=8;
     _this.image128.visible=false;
     
     _this.image129 = _this.add.sprite(310,410,'SG21_2_5numbers');
     _this.image129.anchor.setTo(0.5);
     _this.image129.scale.setTo(2,2); 
     _this.image129.frame=0;
     _this.image129.visible=false;
    
     _this.image130 = _this.add.sprite(320,385,'SG21_2_5degree');
     _this.image130.anchor.setTo(0.5);
     _this.image130.scale.setTo(2,2); 
     _this.image130.visible=false;
    
      //angle85
     _this.image131 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image131.anchor.setTo(0.5);
     _this.image131.scale.setTo(0.95,0.95); 
     _this.image131.frame=20;
     _this.image131.visible=false;
     
     _this.image132 = _this.add.sprite(490,410,'SG21_2_5numbers');
     _this.image132.anchor.setTo(0.5);
     _this.image132.scale.setTo(2,2); 
     _this.image132.frame=8;
     _this.image132.visible=false;
     
     _this.image133 = _this.add.sprite(510,410,'SG21_2_5numbers');
     _this.image133.anchor.setTo(0.5);
     _this.image133.scale.setTo(2,2); 
     _this.image133.frame=5;
     _this.image133.visible=false;
    
     _this.image134 = _this.add.sprite(525,390,'SG21_2_5degree');
     _this.image134.anchor.setTo(0.5);
     _this.image134.scale.setTo(2,2); 
     _this.image134.visible=false;
    
     //angle85 another side
     _this.image135 = _this.add.sprite(395,405,'SG21_2_5angle2');
     _this.image135.anchor.setTo(0.5);
     _this.image135.scale.setTo(0.95,0.95); 
     _this.image135.frame=23;
     _this.image135.visible=false;
     
     _this.image136 = _this.add.sprite(298,410,'SG21_2_5numbers');
     _this.image136.anchor.setTo(0.5);
     _this.image136.scale.setTo(2,2); 
     _this.image136.frame=8;
     _this.image136.visible=false;
     
     _this.image137 = _this.add.sprite(320,410,'SG21_2_5numbers');
     _this.image137.anchor.setTo(0.5);
     _this.image137.scale.setTo(2,2); 
     _this.image137.frame=5;
     _this.image137.visible=false;
    
     _this.image138 = _this.add.sprite(340,390,'SG21_2_5degree');
     _this.image138.anchor.setTo(0.5);
     _this.image138.scale.setTo(2,2); 
     _this.image138.visible=false;
    
     _this.slideGrp.add(_this.image1);_this.slideGrp.add(_this.image2);_this.slideGrp.add(_this.image3);_this.slideGrp.add(_this.image4);
     _this.slideGrp.add(_this.image5);_this.slideGrp.add(_this.image6);_this.slideGrp.add(_this.image7); _this.slideGrp.add(_this.image8);
     _this.slideGrp.add(_this.image9);_this.slideGrp.add(_this.image10);_this.slideGrp.add(_this.image11);_this.slideGrp.add(_this.image12);
     _this.slideGrp.add(_this.image13);_this.slideGrp.add(_this.image14);_this.slideGrp.add(_this.image15);_this.slideGrp.add(_this.image16);
     _this.slideGrp.add(_this.image17);_this.slideGrp.add(_this.image18);_this.slideGrp.add(_this.image19);_this.slideGrp.add(_this.image20);
     _this.slideGrp.add(_this.image21);_this.slideGrp.add(_this.image22);_this.slideGrp.add(_this.image23);_this.slideGrp.add(_this.image24);
     _this.slideGrp.add(_this.image25);_this.slideGrp.add(_this.image26);_this.slideGrp.add(_this.image27);_this.slideGrp.add(_this.image28);
     _this.slideGrp.add(_this.image29);_this.slideGrp.add(_this.image30);_this.slideGrp.add(_this.image31);_this.slideGrp.add(_this.image32);
     _this.slideGrp.add(_this.image33);_this.slideGrp.add(_this.image34);_this.slideGrp.add(_this.image35); _this.slideGrp.add(_this.image36);
     _this.slideGrp.add(_this.image37);_this.slideGrp.add(_this.image38);_this.slideGrp.add(_this.image39);_this.slideGrp.add(_this.image40);
     _this.slideGrp.add(_this.image41);_this.slideGrp.add(_this.image42);_this.slideGrp.add(_this.image43);_this.slideGrp.add(_this.image44);
     _this.slideGrp.add(_this.image45);_this.slideGrp.add(_this.image46);_this.slideGrp.add(_this.image47);_this.slideGrp.add(_this.image48);
     _this.slideGrp.add(_this.image49);_this.slideGrp.add(_this.image50);_this.slideGrp.add(_this.image51);_this.slideGrp.add(_this.image52);
     _this.slideGrp.add(_this.image53);_this.slideGrp.add(_this.image54);_this.slideGrp.add(_this.image55);_this.slideGrp.add(_this.image56);
     _this.slideGrp.add(_this.image57);_this.slideGrp.add(_this.image58);_this.slideGrp.add(_this.image59);_this.slideGrp.add(_this.image60);
     _this.slideGrp.add(_this.image61);_this.slideGrp.add(_this.image62);_this.slideGrp.add(_this.image63);_this.slideGrp.add(_this.image64);
     _this.slideGrp.add(_this.image65);_this.slideGrp.add(_this.image66);_this.slideGrp.add(_this.image67);_this.slideGrp.add(_this.image68);
     _this.slideGrp.add(_this.image69);_this.slideGrp.add(_this.image70);_this.slideGrp.add(_this.image71);_this.slideGrp.add(_this.image72);
     _this.slideGrp.add(_this.image73);_this.slideGrp.add(_this.image74);_this.slideGrp.add(_this.image75); _this.slideGrp.add(_this.image76);
     _this.slideGrp.add(_this.image77);_this.slideGrp.add(_this.image78);_this.slideGrp.add(_this.image79);_this.slideGrp.add(_this.image80);
     _this.slideGrp.add(_this.image81);_this.slideGrp.add(_this.image82);_this.slideGrp.add(_this.image83);_this.slideGrp.add(_this.image84);
     _this.slideGrp.add(_this.image85);_this.slideGrp.add(_this.image86);_this.slideGrp.add(_this.image87);_this.slideGrp.add(_this.image88);
     _this.slideGrp.add(_this.image89);_this.slideGrp.add(_this.image90);_this.slideGrp.add(_this.image91);_this.slideGrp.add(_this.image92);
     _this.slideGrp.add(_this.image93);_this.slideGrp.add(_this.image94);_this.slideGrp.add(_this.image95); _this.slideGrp.add(_this.image96);
     _this.slideGrp.add(_this.image97);_this.slideGrp.add(_this.image98);_this.slideGrp.add(_this.image99);_this.slideGrp.add(_this.image100);
     _this.slideGrp.add(_this.image101);_this.slideGrp.add(_this.image102);_this.slideGrp.add(_this.image103);_this.slideGrp.add(_this.image104);
     _this.slideGrp.add(_this.image105);_this.slideGrp.add(_this.image106);_this.slideGrp.add(_this.image107);_this.slideGrp.add(_this.image108);
     _this.slideGrp.add(_this.image109);_this.slideGrp.add(_this.image110);_this.slideGrp.add(_this.image111);_this.slideGrp.add(_this.image112);
     _this.slideGrp.add(_this.image113);_this.slideGrp.add(_this.image114);_this.slideGrp.add(_this.image115);_this.slideGrp.add(_this.image116);
     _this.slideGrp.add(_this.image117);_this.slideGrp.add(_this.image118);_this.slideGrp.add(_this.image119);_this.slideGrp.add(_this.image120);
     _this.slideGrp.add(_this.image121);_this.slideGrp.add(_this.image122);_this.slideGrp.add(_this.image123);_this.slideGrp.add(_this.image124);
     _this.slideGrp.add(_this.image125);_this.slideGrp.add(_this.image126);_this.slideGrp.add(_this.image127);_this.slideGrp.add(_this.image128);
     _this.slideGrp.add(_this.image129);_this.slideGrp.add(_this.image130);_this.slideGrp.add(_this.image131);_this.slideGrp.add(_this.image132);
     _this.slideGrp.add(_this.image133);_this.slideGrp.add(_this.image134);_this.slideGrp.add(_this.image135);_this.slideGrp.add(_this.image400); _this.slideGrp.add(_this.image136);_this.slideGrp.add(_this.image137);_this.slideGrp.add(_this.image138);
     _this.slideGrp.add(_this.tickMark);
     _this.slideGrp.add(_this.circle);
     _this.slideGrp.add(_this.c);
     
     _this.x = 124;
     _this.y = 285;
     
},

gotoTenthQuestion:function(){
    
     _this.questioNo = 10;
     _this.getVoice();
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
    if(_this.wrongAnswer == false)
    {
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
     tween.to({ x: 0 }, 2000,'Linear', true, 0);
    }
  
     _this.image2 = _this.add.sprite(415,434,'SG21_2_5line');
     _this.image2.anchor.setTo(0.021,0.5);
     _this.image2.scale.setTo(0.98,0.98); 
     _this.image2.name="line1";
     _this.image2.inputEnabled = true;
     _this.image2.input.useHandCursor = true;
    
     _this.image4 = _this.add.sprite(617,434,'SG21_2_5graphic');
     _this.image4.anchor.setTo(0.65,0.5);
     _this.image4.scale.setTo(3.4,2);
     _this.image4.alpha= 0;
     _this.image4.inputEnabled = true;
     _this.image4.input.useHandCursor = true;
     _this.image4.input.enableDrag(true);
    
     _this.image3 = _this.add.sprite(415,431,'SG21_2_5line');
     _this.image3.anchor.setTo(0.021,0.5);
     _this.image3.scale.setTo(0.98,0.98); 
     _this.image3.angle=-180;
     _this.image3.name="line2";
     _this.image3.inputEnabled = true;
     _this.image3.input.useHandCursor = true;
    
     _this.image5 = _this.add.sprite(317,431,'SG21_2_5graphic');
     _this.image5.anchor.setTo(0.65,0.5);
     _this.image5.scale.setTo(3.4,2);
     _this.image5.alpha= 0;
     _this.image5.inputEnabled = true;
     _this.image5.input.useHandCursor = true;
     _this.image5.input.enableDrag(true);
    
      _this.c = _this.add.graphics(0,0);
      _this.c.beginFill(0xEC008C, 1);
      _this.c.drawCircle(416, 432, 15);
     
      _this.cX = 416;
      _this.cY = 432;
    
      _this.cX1 = 416;
      _this.cY1 = 435;
    
      _this.circle = _this.add.graphics();
      _this.circle.lineStyle(2,0xFF0000);
      _this.circle.drawCircle(_this.cX,_this.cY,_this.radius);
      _this.circle.alpha = 0;
    
      _this.circle1 = _this.add.graphics();
      _this.circle1.lineStyle(2,0xFF0000);
      _this.circle1.drawCircle(_this.cX1,_this.cY1,_this.radius);
      _this.circle1.alpha = 0;
    
     _this.image4.events.onDragUpdate.add(_this.onDragUpdate, _this);
     _this.image5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
    
      //angle95
     _this.image6 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(0.95,0.95); 
     _this.image6.frame=22;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(490,410,'SG21_2_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.frame=9;
     _this.image7.visible=false;
     
     _this.image8 = _this.add.sprite(510,410,'SG21_2_5numbers');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
     _this.image8.frame=5;
     _this.image8.visible=false;
    
     _this.image9 = _this.add.sprite(525,390,'SG21_2_5degree');
     _this.image9.anchor.setTo(0.5);
     _this.image9.scale.setTo(2,2); 
     _this.image9.visible=false;
    
     //angle95 another side
     _this.image10 = _this.add.sprite(400,405,'SG21_2_5angle2');
     _this.image10.anchor.setTo(0.5);
     _this.image10.scale.setTo(0.95,0.95); 
     _this.image10.frame=23;
     _this.image10.visible=false;
     
     _this.image11 = _this.add.sprite(298,410,'SG21_2_5numbers');
     _this.image11.anchor.setTo(0.5);
     _this.image11.scale.setTo(2,2); 
     _this.image11.frame=9;
     _this.image11.visible=false;
     
     _this.image12 = _this.add.sprite(320,410,'SG21_2_5numbers');
     _this.image12.anchor.setTo(0.5);
     _this.image12.scale.setTo(2,2); 
     _this.image12.frame=5;
     _this.image12.visible=false;
    
     _this.image13 = _this.add.sprite(340,390,'SG21_2_5degree');
     _this.image13.anchor.setTo(0.5);
     _this.image13.scale.setTo(2,2); 
     _this.image13.visible=false;
    
      //angle100
     _this.image14 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image14.anchor.setTo(0.5);
     _this.image14.scale.setTo(0.95,0.95); 
     _this.image14.frame=22;
     _this.image14.visible=false;
     
     _this.image15 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image15.anchor.setTo(0.5);
     _this.image15.scale.setTo(2,2); 
     _this.image15.frame=1;
     _this.image15.visible=false;
     
     _this.image16 = _this.add.sprite(500,410,'SG21_2_5numbers');
     _this.image16.anchor.setTo(0.5);
     _this.image16.scale.setTo(2,2); 
     _this.image16.frame=0;
     _this.image16.visible=false;
    
     _this.image17 = _this.add.sprite(525,410,'SG21_2_5numbers');
     _this.image17.anchor.setTo(0.5);
     _this.image17.scale.setTo(2,2); 
     _this.image17.frame=0;
     _this.image17.visible=false;
    
     _this.image18 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image18.anchor.setTo(0.5);
     _this.image18.scale.setTo(2,2); 
     _this.image18.visible=false;
    
     //angle100 another side
     _this.image19 = _this.add.sprite(400,405,'SG21_2_5angle2');
     _this.image19.anchor.setTo(0.5);
     _this.image19.scale.setTo(0.95,0.95); 
     _this.image19.frame=23;
     _this.image19.visible=false;
     
     _this.image20 = _this.add.sprite(290,410,'SG21_2_5numbers');
     _this.image20.anchor.setTo(0.5);
     _this.image20.scale.setTo(2,2); 
     _this.image20.frame=1;
     _this.image20.visible=false;
     
     _this.image21 = _this.add.sprite(310,410,'SG21_2_5numbers');
     _this.image21.anchor.setTo(0.5);
     _this.image21.scale.setTo(2,2); 
     _this.image21.frame=0;
     _this.image21.visible=false;
    
     _this.image22 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image22.anchor.setTo(0.5);
     _this.image22.scale.setTo(2,2); 
     _this.image22.frame=0;
     _this.image22.visible=false;
    
     _this.image23 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image23.anchor.setTo(0.5);
     _this.image23.scale.setTo(2,2); 
     _this.image23.visible=false;
    
      //angle105
     _this.image24 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image24.anchor.setTo(0.5);
     _this.image24.scale.setTo(0.95,0.95); 
     _this.image24.frame=23;
     _this.image24.visible=false;
     
     _this.image25 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image25.anchor.setTo(0.5);
     _this.image25.scale.setTo(2,2); 
     _this.image25.frame=1;
     _this.image25.visible=false;
     
     _this.image26 = _this.add.sprite(500,410,'SG21_2_5numbers');
     _this.image26.anchor.setTo(0.5);
     _this.image26.scale.setTo(2,2); 
     _this.image26.frame=0;
     _this.image26.visible=false;
    
     _this.image27 = _this.add.sprite(525,410,'SG21_2_5numbers');
     _this.image27.anchor.setTo(0.5);
     _this.image27.scale.setTo(2,2); 
     _this.image27.frame=5;
     _this.image27.visible=false;
    
     _this.image28 = _this.add.sprite(535,385,'SG21_2_5degree');
     _this.image28.anchor.setTo(0.5);
     _this.image28.scale.setTo(2,2); 
     _this.image28.visible=false;
    
     //angle105 another side
     _this.image29 = _this.add.sprite(400,405,'SG21_2_5angle2');
     _this.image29.anchor.setTo(0.5);
     _this.image29.scale.setTo(0.95,0.95); 
     _this.image29.frame=24;
     _this.image29.visible=false;
     
     _this.image30 = _this.add.sprite(290,410,'SG21_2_5numbers');
     _this.image30.anchor.setTo(0.5);
     _this.image30.scale.setTo(2,2); 
     _this.image30.frame=1;
     _this.image30.visible=false;
     
     _this.image31 = _this.add.sprite(310,410,'SG21_2_5numbers');
     _this.image31.anchor.setTo(0.5);
     _this.image31.scale.setTo(2,2); 
     _this.image31.frame=0;
     _this.image31.visible=false;
    
     _this.image32 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image32.anchor.setTo(0.5);
     _this.image32.scale.setTo(2,2); 
     _this.image32.frame=5;
     _this.image32.visible=false;
    
     _this.image33 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image33.anchor.setTo(0.5);
     _this.image33.scale.setTo(2,2); 
     _this.image33.visible=false;
    
     //angle110
     _this.image34 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image34.anchor.setTo(0.5);
     _this.image34.scale.setTo(0.95,0.95); 
     _this.image34.frame=23;
     _this.image34.visible=false;
     
     _this.image35 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image35.anchor.setTo(0.5);
     _this.image35.scale.setTo(2,2); 
     _this.image35.frame=1;
     _this.image35.visible=false;
     
     _this.image36 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image36.anchor.setTo(0.5);
     _this.image36.scale.setTo(2,2); 
     _this.image36.frame=1;
     _this.image36.visible=false;
    
     _this.image37 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image37.anchor.setTo(0.5);
     _this.image37.scale.setTo(2,2); 
     _this.image37.frame=0;
     _this.image37.visible=false;
    
     _this.image38 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image38.anchor.setTo(0.5);
     _this.image38.scale.setTo(2,2); 
     _this.image38.visible=false;
    
     //angle110 another side
     _this.image39 = _this.add.sprite(400,405,'SG21_2_5angle2');
     _this.image39.anchor.setTo(0.5);
     _this.image39.scale.setTo(0.95,0.95); 
     _this.image39.frame=24;
     _this.image39.visible=false;
     
     _this.image40 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image40.anchor.setTo(0.5);
     _this.image40.scale.setTo(2,2); 
     _this.image40.frame=1;
     _this.image40.visible=false;
     
     _this.image41 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image41.anchor.setTo(0.5);
     _this.image41.scale.setTo(2,2); 
     _this.image41.frame=1;
     _this.image41.visible=false;
    
     _this.image42 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image42.anchor.setTo(0.5);
     _this.image42.scale.setTo(2,2); 
     _this.image42.frame=0;
     _this.image42.visible=false;
    
     _this.image43 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image43.anchor.setTo(0.5);
     _this.image43.scale.setTo(2,2); 
     _this.image43.visible=false;
    
      //angle115
     _this.image44 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image44.anchor.setTo(0.5);
     _this.image44.scale.setTo(0.95,0.95); 
     _this.image44.frame=24;
     _this.image44.visible=false;
     
     _this.image45 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image45.anchor.setTo(0.5);
     _this.image45.scale.setTo(2,2); 
     _this.image45.frame=1;
     _this.image45.visible=false;
     
     _this.image46 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image46.anchor.setTo(0.5);
     _this.image46.scale.setTo(2,2); 
     _this.image46.frame=1;
     _this.image46.visible=false;
    
     _this.image47 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image47.anchor.setTo(0.5);
     _this.image47.scale.setTo(2,2); 
     _this.image47.frame=5;
     _this.image47.visible=false;
    
     _this.image48 = _this.add.sprite(535,385,'SG21_2_5degree');
     _this.image48.anchor.setTo(0.5);
     _this.image48.scale.setTo(2,2); 
     _this.image48.visible=false;
    
     //angle115 another side
     _this.image49 = _this.add.sprite(400,405,'SG21_2_5angle2');
     _this.image49.anchor.setTo(0.5);
     _this.image49.scale.setTo(0.95,0.95); 
     _this.image49.frame=25;
     _this.image49.visible=false;
     
     _this.image50 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image50.anchor.setTo(0.5);
     _this.image50.scale.setTo(2,2); 
     _this.image50.frame=1;
     _this.image50.visible=false;
     
     _this.image51 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image51.anchor.setTo(0.5);
     _this.image51.scale.setTo(2,2); 
     _this.image51.frame=1;
     _this.image51.visible=false;
    
     _this.image52 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image52.anchor.setTo(0.5);
     _this.image52.scale.setTo(2,2); 
     _this.image52.frame=5;
     _this.image52.visible=false;
    
     _this.image53 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image53.anchor.setTo(0.5);
     _this.image53.scale.setTo(2,2); 
     _this.image53.visible=false;
    
      //angle120
     _this.image54 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image54.anchor.setTo(0.5);
     _this.image54.scale.setTo(0.95,0.95); 
     _this.image54.frame=24;
     _this.image54.visible=false;
     
     _this.image55 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image55.anchor.setTo(0.5);
     _this.image55.scale.setTo(2,2); 
     _this.image55.frame=1;
     _this.image55.visible=false;
     
     _this.image56 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image56.anchor.setTo(0.5);
     _this.image56.scale.setTo(2,2); 
     _this.image56.frame=2;
     _this.image56.visible=false;
    
     _this.image57 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image57.anchor.setTo(0.5);
     _this.image57.scale.setTo(2,2); 
     _this.image57.frame=0;
     _this.image57.visible=false;
    
     _this.image58 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image58.anchor.setTo(0.5);
     _this.image58.scale.setTo(2,2); 
     _this.image58.visible=false;
    
     //angle120 another side
     _this.image59 = _this.add.sprite(400,405,'SG21_2_5angle2');
     _this.image59.anchor.setTo(0.5);
     _this.image59.scale.setTo(0.95,0.95); 
     _this.image59.frame=25;
     _this.image59.visible=false;
     
     _this.image60 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image60.anchor.setTo(0.5);
     _this.image60.scale.setTo(2,2); 
     _this.image60.frame=1;
     _this.image60.visible=false;
     
     _this.image61 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image61.anchor.setTo(0.5);
     _this.image61.scale.setTo(2,2); 
     _this.image61.frame=2;
     _this.image61.visible=false;
    
     _this.image62 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image62.anchor.setTo(0.5);
     _this.image62.scale.setTo(2,2); 
     _this.image62.frame=0;
     _this.image62.visible=false;
    
     _this.image63 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image63.anchor.setTo(0.5);
     _this.image63.scale.setTo(2,2); 
     _this.image63.visible=false;
    
      //angle125
     _this.image64 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image64.anchor.setTo(0.5);
     _this.image64.scale.setTo(0.95,0.95); 
     _this.image64.frame=25;
     _this.image64.visible=false;
     
     _this.image65 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image65.anchor.setTo(0.5);
     _this.image65.scale.setTo(2,2); 
     _this.image65.frame=1;
     _this.image65.visible=false;
     
     _this.image66 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image66.anchor.setTo(0.5);
     _this.image66.scale.setTo(2,2); 
     _this.image66.frame=2;
     _this.image66.visible=false;
    
     _this.image67 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image67.anchor.setTo(0.5);
     _this.image67.scale.setTo(2,2); 
     _this.image67.frame=5;
     _this.image67.visible=false;
    
     _this.image68 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image68.anchor.setTo(0.5);
     _this.image68.scale.setTo(2,2); 
     _this.image68.visible=false;
    
     //angle125 another side
     _this.image69 = _this.add.sprite(405,405,'SG21_2_5angle2');
     _this.image69.anchor.setTo(0.5);
     _this.image69.scale.setTo(0.95,0.95); 
     _this.image69.frame=25;
     _this.image69.visible=false;
     
     _this.image70 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image70.anchor.setTo(0.5);
     _this.image70.scale.setTo(2,2); 
     _this.image70.frame=1;
     _this.image70.visible=false;
     
     _this.image71 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image71.anchor.setTo(0.5);
     _this.image71.scale.setTo(2,2); 
     _this.image71.frame=2;
     _this.image71.visible=false;
    
     _this.image72 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image72.anchor.setTo(0.5);
     _this.image72.scale.setTo(2,2); 
     _this.image72.frame=5;
     _this.image72.visible=false;
    
     _this.image73 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image73.anchor.setTo(0.5);
     _this.image73.scale.setTo(2,2); 
     _this.image73.visible=false;
    
       //angle130
     _this.image74 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image74.anchor.setTo(0.5);
     _this.image74.scale.setTo(0.95,0.95); 
     _this.image74.frame=25;
     _this.image74.visible=false;
     
     _this.image75 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image75.anchor.setTo(0.5);
     _this.image75.scale.setTo(2,2); 
     _this.image75.frame=1;
     _this.image75.visible=false;
     
     _this.image76 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image76.anchor.setTo(0.5);
     _this.image76.scale.setTo(2,2); 
     _this.image76.frame=3;
     _this.image76.visible=false;
    
     _this.image77 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image77.anchor.setTo(0.5);
     _this.image77.scale.setTo(2,2); 
     _this.image77.frame=0;
     _this.image77.visible=false;
    
     _this.image78 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image78.anchor.setTo(0.5);
     _this.image78.scale.setTo(2,2); 
     _this.image78.visible=false;
    
     //angle130 another side
     _this.image79 = _this.add.sprite(415,405,'SG21_2_5angle2');
     _this.image79.anchor.setTo(0.5);
     _this.image79.scale.setTo(0.95,0.95); 
     _this.image79.frame=25;
     _this.image79.visible=false;
     
     _this.image80 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image80.anchor.setTo(0.5);
     _this.image80.scale.setTo(2,2); 
     _this.image80.frame=1;
     _this.image80.visible=false;
     
     _this.image81 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image81.anchor.setTo(0.5);
     _this.image81.scale.setTo(2,2); 
     _this.image81.frame=3;
     _this.image81.visible=false;
    
     _this.image82 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image82.anchor.setTo(0.5);
     _this.image82.scale.setTo(2,2); 
     _this.image82.frame=0;
     _this.image82.visible=false;
    
     _this.image83 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image83.anchor.setTo(0.5);
     _this.image83.scale.setTo(2,2); 
     _this.image83.visible=false;
    
       //angle135
     _this.image84 = _this.add.sprite(415,405,'SG21_2_5angle1');
     _this.image84.anchor.setTo(0.5);
     _this.image84.scale.setTo(0.95,0.95); 
     _this.image84.frame=25;
     _this.image84.visible=false;
     
     _this.image85 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image85.anchor.setTo(0.5);
     _this.image85.scale.setTo(2,2); 
     _this.image85.frame=1;
     _this.image85.visible=false;
     
     _this.image86 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image86.anchor.setTo(0.5);
     _this.image86.scale.setTo(2,2); 
     _this.image86.frame=3;
     _this.image86.visible=false;

     _this.image87 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image87.anchor.setTo(0.5);
     _this.image87.scale.setTo(2,2); 
     _this.image87.frame=5;
     _this.image87.visible=false;
    
     _this.image88 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image88.anchor.setTo(0.5);
     _this.image88.scale.setTo(2,2); 
     _this.image88.visible=false;
    
     //angle135 another side
     _this.image89 = _this.add.sprite(415,405,'SG21_2_5angle2');
     _this.image89.anchor.setTo(0.5);
     _this.image89.scale.setTo(0.95,0.95); 
     _this.image89.frame=25;
     _this.image89.visible=false;
     
     _this.image90 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image90.anchor.setTo(0.5);
     _this.image90.scale.setTo(2,2); 
     _this.image90.frame=1;
     _this.image90.visible=false;
     
     _this.image91 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image91.anchor.setTo(0.5);
     _this.image91.scale.setTo(2,2); 
     _this.image91.frame=3;
     _this.image91.visible=false;
    
     _this.image92 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image92.anchor.setTo(0.5);
     _this.image92.scale.setTo(2,2); 
     _this.image92.frame=5;
     _this.image92.visible=false;
    
     _this.image93 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image93.anchor.setTo(0.5);
     _this.image93.scale.setTo(2,2); 
     _this.image93.visible=false;
    
       //angle140
     _this.image94 = _this.add.sprite(415,405,'SG21_2_5angle1');
     _this.image94.anchor.setTo(0.5);
     _this.image94.scale.setTo(0.95,0.95); 
     _this.image94.frame=26;
     _this.image94.visible=false;
     
     _this.image95 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image95.anchor.setTo(0.5);
     _this.image95.scale.setTo(2,2); 
     _this.image95.frame=1;
     _this.image95.visible=false;
     
     _this.image96 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image96.anchor.setTo(0.5);
     _this.image96.scale.setTo(2,2); 
     _this.image96.frame=4;
     _this.image96.visible=false;

     _this.image97 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image97.anchor.setTo(0.5);
     _this.image97.scale.setTo(2,2); 
     _this.image97.frame=0;
     _this.image97.visible=false;
    
     _this.image98 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image98.anchor.setTo(0.5);
     _this.image98.scale.setTo(2,2); 
     _this.image98.visible=false;
    
     //angle140 another side
     _this.image99 = _this.add.sprite(415,405,'SG21_2_5angle2');
     _this.image99.anchor.setTo(0.5);
     _this.image99.scale.setTo(0.95,0.95); 
     _this.image99.frame=26;
     _this.image99.visible=false;
     
     _this.image100 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image100.anchor.setTo(0.5);
     _this.image100.scale.setTo(2,2); 
     _this.image100.frame=1;
     _this.image100.visible=false;
     
     _this.image101 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image101.anchor.setTo(0.5);
     _this.image101.scale.setTo(2,2); 
     _this.image101.frame=4;
     _this.image101.visible=false;
    
     _this.image102 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image102.anchor.setTo(0.5);
     _this.image102.scale.setTo(2,2); 
     _this.image102.frame=0;
     _this.image102.visible=false;
    
     _this.image103 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image103.anchor.setTo(0.5);
     _this.image103.scale.setTo(2,2); 
     _this.image103.visible=false;
    
      //angle145
     _this.image104 = _this.add.sprite(415,405,'SG21_2_5angle1');
     _this.image104.anchor.setTo(0.5);
     _this.image104.scale.setTo(0.95,0.95); 
     _this.image104.frame=26;
     _this.image104.visible=false;
     
     _this.image105 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image105.anchor.setTo(0.5);
     _this.image105.scale.setTo(2,2); 
     _this.image105.frame=1;
     _this.image105.visible=false;
     
     _this.image106 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image106.anchor.setTo(0.5);
     _this.image106.scale.setTo(2,2); 
     _this.image106.frame=4;
     _this.image106.visible=false;

     _this.image107 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image107.anchor.setTo(0.5);
     _this.image107.scale.setTo(2,2); 
     _this.image107.frame=5;
     _this.image107.visible=false;
    
     _this.image108 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image108.anchor.setTo(0.5);
     _this.image108.scale.setTo(2,2); 
     _this.image108.visible=false;
    
     //angle145 another side
     _this.image109 = _this.add.sprite(415,405,'SG21_2_5angle2');
     _this.image109.anchor.setTo(0.5);
     _this.image109.scale.setTo(0.95,0.95); 
     _this.image109.frame=26;
     _this.image109.visible=false;
     
     _this.image110 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image110.anchor.setTo(0.5);
     _this.image110.scale.setTo(2,2); 
     _this.image110.frame=1;
     _this.image110.visible=false;
     
     _this.image111 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image111.anchor.setTo(0.5);
     _this.image111.scale.setTo(2,2); 
     _this.image111.frame=4;
     _this.image111.visible=false;
    
     _this.image112 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image112.anchor.setTo(0.5);
     _this.image112.scale.setTo(2,2); 
     _this.image112.frame=5;
     _this.image112.visible=false;
    
     _this.image113 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image113.anchor.setTo(0.5);
     _this.image113.scale.setTo(2,2); 
     _this.image113.visible=false;
    
       //angle150
     _this.image114 = _this.add.sprite(415,405,'SG21_2_5angle1');
     _this.image114.anchor.setTo(0.5);
     _this.image114.scale.setTo(0.95,0.95); 
     _this.image114.frame=27;
     _this.image114.visible=false;
     
     _this.image115 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image115.anchor.setTo(0.5);
     _this.image115.scale.setTo(2,2); 
     _this.image115.frame=1;
     _this.image115.visible=false;
     
     _this.image116 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image116.anchor.setTo(0.5);
     _this.image116.scale.setTo(2,2); 
     _this.image116.frame=5;
     _this.image116.visible=false;

     _this.image117 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image117.anchor.setTo(0.5);
     _this.image117.scale.setTo(2,2); 
     _this.image117.frame=0;
     _this.image117.visible=false;
    
     _this.image118 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image118.anchor.setTo(0.5);
     _this.image118.scale.setTo(2,2); 
     _this.image118.visible=false;
    
     //angle150 another side
     _this.image119 = _this.add.sprite(415,405,'SG21_2_5angle2');
     _this.image119.anchor.setTo(0.5);
     _this.image119.scale.setTo(0.95,0.95); 
     _this.image119.frame=27;
     _this.image119.visible=false;
     
     _this.image120 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image120.anchor.setTo(0.5);
     _this.image120.scale.setTo(2,2); 
     _this.image120.frame=1;
     _this.image120.visible=false;
     
     _this.image121 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image121.anchor.setTo(0.5);
     _this.image121.scale.setTo(2,2); 
     _this.image121.frame=5;
     _this.image121.visible=false;
    
     _this.image122 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image122.anchor.setTo(0.5);
     _this.image122.scale.setTo(2,2); 
     _this.image122.frame=0;
     _this.image122.visible=false;
    
     _this.image123 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image123.anchor.setTo(0.5);
     _this.image123.scale.setTo(2,2); 
     _this.image123.visible=false;
    
       //angle155
     _this.image124 = _this.add.sprite(415,405,'SG21_2_5angle1');
     _this.image124.anchor.setTo(0.5);
     _this.image124.scale.setTo(0.95,0.95); 
     _this.image124.frame=27;
     _this.image124.visible=false;
     
     _this.image125 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image125.anchor.setTo(0.5);
     _this.image125.scale.setTo(2,2); 
     _this.image125.frame=1;
     _this.image125.visible=false;
     
     _this.image126 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image126.anchor.setTo(0.5);
     _this.image126.scale.setTo(2,2); 
     _this.image126.frame=5;
     _this.image126.visible=false;

     _this.image127 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image127.anchor.setTo(0.5);
     _this.image127.scale.setTo(2,2); 
     _this.image127.frame=5;
     _this.image127.visible=false;
    
     _this.image128 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image128.anchor.setTo(0.5);
     _this.image128.scale.setTo(2,2); 
     _this.image128.visible=false;
    
     //angle155 another side
     _this.image129 = _this.add.sprite(415,405,'SG21_2_5angle2');
     _this.image129.anchor.setTo(0.5);
     _this.image129.scale.setTo(0.95,0.95); 
     _this.image129.frame=27;
     _this.image129.visible=false;
     
     _this.image130 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image130.anchor.setTo(0.5);
     _this.image130.scale.setTo(2,2); 
     _this.image130.frame=1;
     _this.image130.visible=false;
     
     _this.image131 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image131.anchor.setTo(0.5);
     _this.image131.scale.setTo(2,2); 
     _this.image131.frame=5;
     _this.image131.visible=false;
    
     _this.image132 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image132.anchor.setTo(0.5);
     _this.image132.scale.setTo(2,2); 
     _this.image132.frame=5;
     _this.image132.visible=false;
    
     _this.image133 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image133.anchor.setTo(0.5);
     _this.image133.scale.setTo(2,2); 
     _this.image133.visible=false;
    
       //angle160
     _this.image134 = _this.add.sprite(415,405,'SG21_2_5angle1');
     _this.image134.anchor.setTo(0.5);
     _this.image134.scale.setTo(0.95,0.95); 
     _this.image134.frame=28;
     _this.image134.visible=false;
     
     _this.image135 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image135.anchor.setTo(0.5);
     _this.image135.scale.setTo(2,2); 
     _this.image135.frame=1;
     _this.image135.visible=false;
     
     _this.image136 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image136.anchor.setTo(0.5);
     _this.image136.scale.setTo(2,2); 
     _this.image136.frame=6;
     _this.image136.visible=false;

     _this.image137 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image137.anchor.setTo(0.5);
     _this.image137.scale.setTo(2,2); 
     _this.image137.frame=0;
     _this.image137.visible=false;
    
     _this.image138 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image138.anchor.setTo(0.5);
     _this.image138.scale.setTo(2,2); 
     _this.image138.visible=false;
    
     //angle160 another side
     _this.image139 = _this.add.sprite(415,405,'SG21_2_5angle2');
     _this.image139.anchor.setTo(0.5);
     _this.image139.scale.setTo(0.95,0.95); 
     _this.image139.frame=28;
     _this.image139.visible=false;
     
     _this.image140 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image140.anchor.setTo(0.5);
     _this.image140.scale.setTo(2,2); 
     _this.image140.frame=1;
     _this.image140.visible=false;
     
     _this.image141 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image141.anchor.setTo(0.5);
     _this.image141.scale.setTo(2,2); 
     _this.image141.frame=6;
     _this.image141.visible=false;
    
     _this.image142 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image142.anchor.setTo(0.5);
     _this.image142.scale.setTo(2,2); 
     _this.image142.frame=0;
     _this.image142.visible=false;
    
     _this.image143 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image143.anchor.setTo(0.5);
     _this.image143.scale.setTo(2,2); 
     _this.image143.visible=false;
    
       //angle165
     _this.image144 = _this.add.sprite(415,405,'SG21_2_5angle1');
     _this.image144.anchor.setTo(0.5);
     _this.image144.scale.setTo(0.95,0.95); 
     _this.image144.frame=28;
     _this.image144.visible=false;
     
     _this.image145 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image145.anchor.setTo(0.5);
     _this.image145.scale.setTo(2,2); 
     _this.image145.frame=1;
     _this.image145.visible=false;
     
     _this.image146 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image146.anchor.setTo(0.5);
     _this.image146.scale.setTo(2,2); 
     _this.image146.frame=6;
     _this.image146.visible=false;

     _this.image147 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image147.anchor.setTo(0.5);
     _this.image147.scale.setTo(2,2); 
     _this.image147.frame=5;
     _this.image147.visible=false;
    
     _this.image148 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image148.anchor.setTo(0.5);
     _this.image148.scale.setTo(2,2); 
     _this.image148.visible=false;
    
     //angle165 another side
     _this.image149 = _this.add.sprite(415,405,'SG21_2_5angle2');
     _this.image149.anchor.setTo(0.5);
     _this.image149.scale.setTo(0.95,0.95); 
     _this.image149.frame=28;
     _this.image149.visible=false;
     
     _this.image150 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image150.anchor.setTo(0.5);
     _this.image150.scale.setTo(2,2); 
     _this.image150.frame=1;
     _this.image150.visible=false;
     
     _this.image151 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image151.anchor.setTo(0.5);
     _this.image151.scale.setTo(2,2); 
     _this.image151.frame=6;
     _this.image151.visible=false;
    
     _this.image152 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image152.anchor.setTo(0.5);
     _this.image152.scale.setTo(2,2); 
     _this.image152.frame=5;
     _this.image152.visible=false;
    
     _this.image153 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image153.anchor.setTo(0.5);
     _this.image153.scale.setTo(2,2); 
     _this.image153.visible=false;
    
       //angle170
     _this.image154 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image154.anchor.setTo(0.5);
     _this.image154.scale.setTo(0.95,0.95); 
     _this.image154.frame=29;
     _this.image154.visible=false;
     
     _this.image155 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image155.anchor.setTo(0.5);
     _this.image155.scale.setTo(2,2); 
     _this.image155.frame=1;
     _this.image155.visible=false;
     
     _this.image156 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image156.anchor.setTo(0.5);
     _this.image156.scale.setTo(2,2); 
     _this.image156.frame=7;
     _this.image156.visible=false;

     _this.image157 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image157.anchor.setTo(0.5);
     _this.image157.scale.setTo(2,2); 
     _this.image157.frame=0;
     _this.image157.visible=false;
    
     _this.image158 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image158.anchor.setTo(0.5);
     _this.image158.scale.setTo(2,2); 
     _this.image158.visible=false;
    
     //angle170 another side
     _this.image159 = _this.add.sprite(410,405,'SG21_2_5angle2');
     _this.image159.anchor.setTo(0.5);
     _this.image159.scale.setTo(0.95,0.95); 
     _this.image159.frame=29;
     _this.image159.visible=false;
     
     _this.image160 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image160.anchor.setTo(0.5);
     _this.image160.scale.setTo(2,2); 
     _this.image160.frame=1;
     _this.image160.visible=false;
     
     _this.image161 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image161.anchor.setTo(0.5);
     _this.image161.scale.setTo(2,2); 
     _this.image161.frame=7;
     _this.image161.visible=false;
    
     _this.image162 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image162.anchor.setTo(0.5);
     _this.image162.scale.setTo(2,2); 
     _this.image162.frame=0;
     _this.image162.visible=false;
    
     _this.image163 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image163.anchor.setTo(0.5);
     _this.image163.scale.setTo(2,2); 
     _this.image163.visible=false;
    
      //angle175
     _this.image164 = _this.add.sprite(420,405,'SG21_2_5angle1');
     _this.image164.anchor.setTo(0.5);
     _this.image164.scale.setTo(0.95,0.95); 
     _this.image164.frame=29;
     _this.image164.visible=false;
     
     _this.image165 = _this.add.sprite(480,410,'SG21_2_5numbers');
     _this.image165.anchor.setTo(0.5);
     _this.image165.scale.setTo(2,2); 
     _this.image165.frame=1;
     _this.image165.visible=false;
     
     _this.image166 = _this.add.sprite(495,410,'SG21_2_5numbers');
     _this.image166.anchor.setTo(0.5);
     _this.image166.scale.setTo(2,2); 
     _this.image166.frame=7;
     _this.image166.visible=false;

     _this.image167 = _this.add.sprite(515,410,'SG21_2_5numbers');
     _this.image167.anchor.setTo(0.5);
     _this.image167.scale.setTo(2,2); 
     _this.image167.frame=5;
     _this.image167.visible=false;
    
     _this.image168 = _this.add.sprite(535,390,'SG21_2_5degree');
     _this.image168.anchor.setTo(0.5);
     _this.image168.scale.setTo(2,2); 
     _this.image168.visible=false;
    
     //angle175 another side
     _this.image169 = _this.add.sprite(410,405,'SG21_2_5angle2');
     _this.image169.anchor.setTo(0.5);
     _this.image169.scale.setTo(0.95,0.95); 
     _this.image169.frame=29;
     _this.image169.visible=false;
     
     _this.image170 = _this.add.sprite(300,410,'SG21_2_5numbers');
     _this.image170.anchor.setTo(0.5);
     _this.image170.scale.setTo(2,2); 
     _this.image170.frame=1;
     _this.image170.visible=false;
     
     _this.image171 = _this.add.sprite(315,410,'SG21_2_5numbers');
     _this.image171.anchor.setTo(0.5);
     _this.image171.scale.setTo(2,2); 
     _this.image171.frame=7;
     _this.image171.visible=false;
    
     _this.image172 = _this.add.sprite(335,410,'SG21_2_5numbers');
     _this.image172.anchor.setTo(0.5);
     _this.image172.scale.setTo(2,2); 
     _this.image172.frame=5;
     _this.image172.visible=false;
    
     _this.image173 = _this.add.sprite(350,390,'SG21_2_5degree');
     _this.image173.anchor.setTo(0.5);
     _this.image173.scale.setTo(2,2); 
     _this.image173.visible=false;
    
     _this.slideGrp.add(_this.image1);
     _this.slideGrp.add(_this.image2);
     _this.slideGrp.add(_this.image3);
     _this.slideGrp.add(_this.image4);
     _this.slideGrp.add(_this.image5);
     _this.slideGrp.add(_this.image1);_this.slideGrp.add(_this.image2);_this.slideGrp.add(_this.image3);_this.slideGrp.add(_this.image4);
     _this.slideGrp.add(_this.image5);_this.slideGrp.add(_this.image6);_this.slideGrp.add(_this.image7); _this.slideGrp.add(_this.image8);
     _this.slideGrp.add(_this.image9);_this.slideGrp.add(_this.image10);_this.slideGrp.add(_this.image11);_this.slideGrp.add(_this.image12);
     _this.slideGrp.add(_this.image13);_this.slideGrp.add(_this.image14);_this.slideGrp.add(_this.image15);_this.slideGrp.add(_this.image16);
     _this.slideGrp.add(_this.image17);_this.slideGrp.add(_this.image18);_this.slideGrp.add(_this.image19);_this.slideGrp.add(_this.image20);
     _this.slideGrp.add(_this.image21);_this.slideGrp.add(_this.image22);_this.slideGrp.add(_this.image23);_this.slideGrp.add(_this.image24);
     _this.slideGrp.add(_this.image25);_this.slideGrp.add(_this.image26);_this.slideGrp.add(_this.image27);_this.slideGrp.add(_this.image28);
     _this.slideGrp.add(_this.image29);_this.slideGrp.add(_this.image30);_this.slideGrp.add(_this.image31);_this.slideGrp.add(_this.image32);
     _this.slideGrp.add(_this.image33);_this.slideGrp.add(_this.image34);_this.slideGrp.add(_this.image35); _this.slideGrp.add(_this.image36);
     _this.slideGrp.add(_this.image37);_this.slideGrp.add(_this.image38);_this.slideGrp.add(_this.image39);_this.slideGrp.add(_this.image40);
     _this.slideGrp.add(_this.image41);_this.slideGrp.add(_this.image42);_this.slideGrp.add(_this.image43);_this.slideGrp.add(_this.image44);
     _this.slideGrp.add(_this.image45);_this.slideGrp.add(_this.image46);_this.slideGrp.add(_this.image47);_this.slideGrp.add(_this.image48);
     _this.slideGrp.add(_this.image49);_this.slideGrp.add(_this.image50);_this.slideGrp.add(_this.image51);_this.slideGrp.add(_this.image52);
     _this.slideGrp.add(_this.image53);_this.slideGrp.add(_this.image54);_this.slideGrp.add(_this.image55);_this.slideGrp.add(_this.image56);
     _this.slideGrp.add(_this.image57);_this.slideGrp.add(_this.image58);_this.slideGrp.add(_this.image59);_this.slideGrp.add(_this.image60);
     _this.slideGrp.add(_this.image61);_this.slideGrp.add(_this.image62);_this.slideGrp.add(_this.image63);_this.slideGrp.add(_this.image64);
     _this.slideGrp.add(_this.image65);_this.slideGrp.add(_this.image66);_this.slideGrp.add(_this.image67);_this.slideGrp.add(_this.image68);
     _this.slideGrp.add(_this.image69);_this.slideGrp.add(_this.image70);_this.slideGrp.add(_this.image71);_this.slideGrp.add(_this.image72);
     _this.slideGrp.add(_this.image73);_this.slideGrp.add(_this.image74);_this.slideGrp.add(_this.image75); _this.slideGrp.add(_this.image76);
     _this.slideGrp.add(_this.image77);_this.slideGrp.add(_this.image78);_this.slideGrp.add(_this.image79);_this.slideGrp.add(_this.image80);
     _this.slideGrp.add(_this.image81);_this.slideGrp.add(_this.image82);_this.slideGrp.add(_this.image83);_this.slideGrp.add(_this.image84);
     _this.slideGrp.add(_this.image85);_this.slideGrp.add(_this.image86);_this.slideGrp.add(_this.image87);_this.slideGrp.add(_this.image88);
     _this.slideGrp.add(_this.image89);_this.slideGrp.add(_this.image90);_this.slideGrp.add(_this.image91);_this.slideGrp.add(_this.image92);
     _this.slideGrp.add(_this.image93);_this.slideGrp.add(_this.image94);_this.slideGrp.add(_this.image95); _this.slideGrp.add(_this.image96);
     _this.slideGrp.add(_this.image97);_this.slideGrp.add(_this.image98);_this.slideGrp.add(_this.image99);_this.slideGrp.add(_this.image100);
     _this.slideGrp.add(_this.image101);_this.slideGrp.add(_this.image102);_this.slideGrp.add(_this.image103);_this.slideGrp.add(_this.image104);
     _this.slideGrp.add(_this.image105);_this.slideGrp.add(_this.image106);_this.slideGrp.add(_this.image107);_this.slideGrp.add(_this.image108);
     _this.slideGrp.add(_this.image109);_this.slideGrp.add(_this.image110);_this.slideGrp.add(_this.image111);_this.slideGrp.add(_this.image112);
     _this.slideGrp.add(_this.image113);_this.slideGrp.add(_this.image114);_this.slideGrp.add(_this.image115);_this.slideGrp.add(_this.image116);
     _this.slideGrp.add(_this.image117);_this.slideGrp.add(_this.image118);_this.slideGrp.add(_this.image119);_this.slideGrp.add(_this.image120);
     _this.slideGrp.add(_this.image121);_this.slideGrp.add(_this.image122);_this.slideGrp.add(_this.image123);_this.slideGrp.add(_this.image124);
     _this.slideGrp.add(_this.image125);_this.slideGrp.add(_this.image126);_this.slideGrp.add(_this.image127);_this.slideGrp.add(_this.image128);
     _this.slideGrp.add(_this.image129);_this.slideGrp.add(_this.image130);_this.slideGrp.add(_this.image131);_this.slideGrp.add(_this.image132);
     _this.slideGrp.add(_this.image133);_this.slideGrp.add(_this.image134);_this.slideGrp.add(_this.image135);_this.slideGrp.add(_this.image136); _this.slideGrp.add(_this.image137);_this.slideGrp.add(_this.image138);_this.slideGrp.add(_this.image139);_this.slideGrp.add(_this.image140);
     _this.slideGrp.add(_this.image141);_this.slideGrp.add(_this.image142);_this.slideGrp.add(_this.image143);_this.slideGrp.add(_this.image144);
     _this.slideGrp.add(_this.image145);_this.slideGrp.add(_this.image146);_this.slideGrp.add(_this.image147);_this.slideGrp.add(_this.image148);
     _this.slideGrp.add(_this.image149);_this.slideGrp.add(_this.image150);_this.slideGrp.add(_this.image151);_this.slideGrp.add(_this.image152);
     _this.slideGrp.add(_this.image153);_this.slideGrp.add(_this.image154);_this.slideGrp.add(_this.image155);_this.slideGrp.add(_this.image156);
     _this.slideGrp.add(_this.image157);_this.slideGrp.add(_this.image158);_this.slideGrp.add(_this.image159);_this.slideGrp.add(_this.image160);
     _this.slideGrp.add(_this.image161);_this.slideGrp.add(_this.image162);_this.slideGrp.add(_this.image163);_this.slideGrp.add(_this.image164);
     _this.slideGrp.add(_this.image165);_this.slideGrp.add(_this.image166);_this.slideGrp.add(_this.image167);_this.slideGrp.add(_this.image168);
     _this.slideGrp.add(_this.image169);_this.slideGrp.add(_this.image170);_this.slideGrp.add(_this.image171);_this.slideGrp.add(_this.image172);
     _this.slideGrp.add(_this.image173);
     _this.slideGrp.add(_this.tickMark);
     _this.slideGrp.add(_this.circle);
     _this.slideGrp.add(_this.c);
     
     _this.x = 124;
     _this.y = 285;
     
     
        
    },
    
toCheckangle :function (target){
    
    	//_this.noofAttempts++;
			//var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "Level21.2.5_TickButton", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
    
     target.events.onInputDown.removeAll();
    
    _this.tickMark.frame=1;
    if(_this.questioNo ==1){
        if(_this.image3.angle >-93 && _this.image3.angle <-87 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image6.visible=true;
                _this.image=_this.image6.animations.add('play',[1,2,3,4,5,6,7,8,9]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image7.visible=true;
                  _this.image8.visible=true;
                  _this.image9.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-93 && _this.image2.angle <-87 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image10.visible=true;
                _this.image=_this.image10.animations.add('play',[1,2,3,4,5,6,7,8,9]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image11.visible=true;
                  _this.image12.visible=true;
                  _this.image13.visible=true;
                },_this);
                _this.correctAns();
            }
        else
            {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
    } 
    else if(_this.questioNo ==2){
        if(_this.image2.angle >-168 && _this.image2.angle <-162 && _this.image3.angle ==-180)
            {
                _this.image2.frame=1;
                _this.image3.frame=1;
                _this.image10.visible=true;
                _this.image=_this.image10.animations.add('play',[11,12,13,14]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image11.visible=true;
                  _this.image12.visible=true;
                  _this.image13.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image3.angle >-18 && _this.image3.angle <-12 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image6.visible=true;
                _this.image=_this.image6.animations.add('play',[11,12,13,14]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image7.visible=true;
                  _this.image8.visible=true;
                  _this.image9.visible=true;
                },_this);
                _this.correctAns();
            }
            
        else
            {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
    } 
     else if(_this.questioNo ==3){
        if(_this.image3.angle >-33 && _this.image3.angle <-27 && _this.image2.angle ==0)
            {
                _this.image2.frame=1;
                _this.image3.frame=1;
                _this.image6.visible=true;
                _this.image=_this.image6.animations.add('play',[11,12,13,14]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image7.visible=true;
                  _this.image8.visible=true;
                  _this.image9.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image2.angle >-153 && _this.image2.angle <-147 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image10.visible=true;
                _this.image=_this.image10.animations.add('play',[11,12,13,14,15]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image11.visible=true;
                  _this.image12.visible=true;
                  _this.image13.visible=true;
                },_this);
                _this.correctAns();
            }
            
        else
            {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
    } 
    else if(_this.questioNo ==4){
        if(_this.image2.angle >-68 && _this.image2.angle <-62 && _this.image3.angle ==-180)
            {
                _this.image2.frame=1;
                _this.image3.frame=1;
                _this.image11.visible=true;
                _this.image=_this.image11.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image12.visible=true;
                  _this.image13.visible=true;
                  _this.image14.visible=true;
                  _this.image15.visible=true;
                },_this);
                 _this.correctAns();
            }
         else if(_this.image3.angle >-118 && _this.image3.angle <-112 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image6.visible=true;
                _this.image=_this.image6.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image7.visible=true;
                  _this.image8.visible=true;
                  _this.image9.visible=true;
                 _this.image10.visible=true;
                },_this);
                _this.correctAns();
            }
            
         else
            {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
    } 
    else if(_this.questioNo ==5){
        if(_this.image3.angle >-133 && _this.image3.angle <-127 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image6.visible=true;
                _this.image=_this.image6.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image7.visible=true;
                  _this.image8.visible=true;
                  _this.image9.visible=true;
                 _this.image10.visible=true;
                },_this);
                _this.correctAns();
            }
          else if(_this.image2.angle >-53 && _this.image2.angle <-47 && _this.image3.angle ==-180)
            {
                _this.image2.frame=1;
                _this.image3.frame=1;
                _this.image11.visible=true;
                _this.image=_this.image11.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image12.visible=true;
                  _this.image13.visible=true;
                  _this.image14.visible=true;
                  _this.image15.visible=true;
                },_this);
                 _this.correctAns();
            }
            
         else
            {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
    } 
    else if(_this.questioNo ==6){
        if(_this.image2.angle >-38 && _this.image2.angle <-32 && _this.image3.angle ==-180)
            {
                _this.image2.frame=1;
                _this.image3.frame=1;
                _this.image11.visible=true;
                _this.image=_this.image11.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image12.visible=true;
                  _this.image13.visible=true;
                  _this.image14.visible=true;
                  _this.image15.visible=true;
                },_this);
                 _this.correctAns();
            }
         else if(_this.image3.angle >-148 && _this.image3.angle <-142 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image6.visible=true;
                _this.image=_this.image6.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image7.visible=true;
                  _this.image8.visible=true;
                  _this.image9.visible=true;
                 _this.image10.visible=true;
                },_this);
                _this.correctAns();
            }
            
         else
            {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
    } 
    else if(_this.questioNo ==7){
        if(_this.image3.angle >-48 && _this.image3.angle <-42 && _this.image2.angle ==0)
            {
                _this.image2.frame=1;
                _this.image3.frame=1;
                _this.image6.visible=true;
                _this.image=_this.image6.animations.add('play',[11,12,13,14,15,16]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image7.visible=true;
                  _this.image8.visible=true;
                  _this.image9.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-138 && _this.image2.angle <-132 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image10.visible=true;
                _this.image=_this.image10.animations.add('play',[11,12,13,14,15,16,17]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image11.visible=true;
                  _this.image12.visible=true;
                  _this.image13.visible=true;
                },_this);
                _this.correctAns();
            }
         else
            {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
    } 
    else if(_this.questioNo ==8){
        if(_this.image3.angle >-93 && _this.image3.angle <-87 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image6.visible=true;
                _this.image=_this.image6.animations.add('play',[1,2,3,4,5,6,7,8,9]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image7.visible=true;
                  _this.image8.visible=true;
                  _this.image9.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-93 && _this.image2.angle <-87 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image10.visible=true;
                _this.image=_this.image10.animations.add('play',[1,2,3,4,5,6,7,8,9]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image11.visible=true;
                  _this.image12.visible=true;
                  _this.image13.visible=true;
                },_this);
                _this.correctAns();
            }
        else
            {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
    }
    else if(_this.questioNo ==9){
       if(_this.image3.angle >-7 && _this.image3.angle <-3 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image6.visible=true;
                _this.image=_this.image6.animations.add('play',[11,12]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image7.visible=true;
                _this.image8.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-178 && _this.image2.angle <-172 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image9.visible=true;
                _this.image=_this.image9.animations.add('play',[11,12]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image10.visible=true;
                  _this.image11.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-13 && _this.image3.angle <-7 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image12.visible=true;
                _this.image=_this.image6.animations.add('play',[11,12,13]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image13.visible=true;
                _this.image14.visible=true;
                _this.image15.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-173 && _this.image2.angle <-167 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image16.visible=true;
                _this.image=_this.image16.animations.add('play',[11,12,13]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image17.visible=true;
                _this.image18.visible=true;
                _this.image19.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image3.angle >-18 && _this.image3.angle <-12 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image20.visible=true;
                _this.image=_this.image20.animations.add('play',[11,12,13,14]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image21.visible=true;
                _this.image22.visible=true;
                _this.image23.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-168 && _this.image2.angle <-162 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image24.visible=true;
                _this.image=_this.image24.animations.add('play',[11,12,13,14]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image25.visible=true;
                _this.image26.visible=true;
                _this.image27.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image3.angle >-23 && _this.image3.angle <-17 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image28.visible=true;
                _this.image=_this.image28.animations.add('play',[11,12,13,14]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image29.visible=true;
                _this.image30.visible=true;
                _this.image31.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-163 && _this.image2.angle <-157 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image32.visible=true;
                _this.image=_this.image32.animations.add('play',[11,12,13,14]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image33.visible=true;
                _this.image34.visible=true;
                _this.image35.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image3.angle >-28 && _this.image3.angle <-22 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image36.visible=true;
                _this.image=_this.image36.animations.add('play',[11,12,13,14]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image37.visible=true;
                _this.image38.visible=true;
                _this.image39.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-158 && _this.image2.angle <-152 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image40.visible=true;
                _this.image=_this.image40.animations.add('play',[11,12,13,14]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image400.visible=true;
                _this.image41.visible=true;
                _this.image42.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-33 && _this.image3.angle <-27 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image43.visible=true;
                _this.image=_this.image43.animations.add('play',[11,12,13,14]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image44.visible=true;
                _this.image45.visible=true;
                _this.image46.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-153 && _this.image2.angle <-147 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image47.visible=true;
                _this.image=_this.image47.animations.add('play',[11,12,13,14]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image48.visible=true;
                _this.image49.visible=true;
                _this.image50.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image3.angle >-38 && _this.image3.angle <-32 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image51.visible=true;
                _this.image=_this.image51.animations.add('play',[11,12,13,14,15]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image52.visible=true;
                _this.image53.visible=true;
                _this.image54.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-148 && _this.image2.angle <-142 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image55.visible=true;
                _this.image=_this.image55.animations.add('play',[11,12,13,14,15]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image56.visible=true;
                _this.image57.visible=true;
                _this.image58.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-43 && _this.image3.angle <-37 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image59.visible=true;
                _this.image=_this.image59.animations.add('play',[11,12,13,14,15]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image60.visible=true;
                _this.image61.visible=true;
                _this.image62.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-143 && _this.image2.angle <-137 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image63.visible=true;
                _this.image=_this.image63.animations.add('play',[11,12,13,14,15,16]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image64.visible=true;
                _this.image65.visible=true;
                _this.image66.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-48 && _this.image3.angle <-42 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image67.visible=true;
                _this.image=_this.image67.animations.add('play',[11,12,13,14,15,16]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image68.visible=true;
                _this.image69.visible=true;
                _this.image70.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-138 && _this.image2.angle <-132 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image71.visible=true;
                _this.image=_this.image71.animations.add('play',[11,12,13,14,15,16,17]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image72.visible=true;
                _this.image73.visible=true;
                _this.image74.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-53 && _this.image3.angle <-47 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image75.visible=true;
                _this.image=_this.image75.animations.add('play',[11,12,13,14,15,16]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image76.visible=true;
                _this.image77.visible=true;
                _this.image78.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-133 && _this.image2.angle <-127 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image79.visible=true;
                _this.image=_this.image79.animations.add('play',[11,12,13,14,15,16,17]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image80.visible=true;
                _this.image81.visible=true;
                _this.image82.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-58 && _this.image3.angle <-52 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image83.visible=true;
                _this.image=_this.image83.animations.add('play',[11,12,13,14,15,16,17]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image84.visible=true;
                _this.image85.visible=true;
                _this.image86.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-128 && _this.image2.angle <-122 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image87.visible=true;
                _this.image=_this.image87.animations.add('play',[11,12,13,14,15,16,17,18]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image88.visible=true;
                _this.image89.visible=true;
                _this.image90.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image3.angle >-63 && _this.image3.angle <-57 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image91.visible=true;
                _this.image=_this.image91.animations.add('play',[11,12,13,14,15,16,17]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image92.visible=true;
                _this.image93.visible=true;
                _this.image94.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-123 && _this.image2.angle <-117 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image95.visible=true;
                _this.image=_this.image95.animations.add('play',[11,12,13,14,15,16,17,18,19]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image96.visible=true;
                _this.image97.visible=true;
                _this.image98.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-68 && _this.image3.angle <-62 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image99.visible=true;
                _this.image=_this.image99.animations.add('play',[11,12,13,14,15,16,17,18]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image100.visible=true;
                _this.image101.visible=true;
                _this.image102.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-118 && _this.image2.angle <-112 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image103.visible=true;
                _this.image=_this.image103.animations.add('play',[11,12,13,14,15,16,17,18,19,20]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image104.visible=true;
                _this.image105.visible=true;
                _this.image106.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-73 && _this.image3.angle <-67 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image107.visible=true;
                _this.image=_this.image107.animations.add('play',[11,12,13,14,15,16,17,18]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image108.visible=true;
                _this.image109.visible=true;
                _this.image110.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-113 && _this.image2.angle <-107 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image111.visible=true;
                _this.image=_this.image111.animations.add('play',[11,12,13,14,15,16,17,18,19,20]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image112.visible=true;
                _this.image113.visible=true;
                _this.image114.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image3.angle >-78 && _this.image3.angle <-72 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image115.visible=true;
                _this.image=_this.image115.animations.add('play',[11,12,13,14,15,16,17,18,19]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image116.visible=true;
                _this.image117.visible=true;
                _this.image118.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-108 && _this.image2.angle <-102 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image119.visible=true;
                _this.image=_this.image119.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image120.visible=true;
                _this.image121.visible=true;
                _this.image122.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image3.angle >-83 && _this.image3.angle <-77 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image123.visible=true;
                _this.image=_this.image123.animations.add('play',[11,12,13,14,15,16,17,18,19]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image124.visible=true;
                _this.image125.visible=true;
                _this.image126.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-103 && _this.image2.angle <-97 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image127.visible=true;
                _this.image=_this.image127.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image128.visible=true;
                _this.image129.visible=true;
                _this.image130.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image3.angle >-88 && _this.image3.angle <-82 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image131.visible=true;
                _this.image=_this.image131.animations.add('play',[11,12,13,14,15,16,17,18,19,20]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image132.visible=true;
                _this.image133.visible=true;
                _this.image134.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image2.angle >-98 && _this.image2.angle <-92 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image135.visible=true;
                _this.image=_this.image135.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image136.visible=true;
                _this.image137.visible=true;
                _this.image138.visible=true;
                },_this);
                _this.correctAns();
            }
        else
            {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
    }
    else if(_this.questioNo ==10){
       if(_this.image3.angle >-98 && _this.image3.angle <-92 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image6.visible=true;
                _this.image=_this.image6.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image7.visible=true;
                _this.image8.visible=true;
                _this.image9.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-88 && _this.image2.angle <-82 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image10.visible=true;
                _this.image=_this.image10.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image11.visible=true;
                  _this.image12.visible=true;
                  _this.image13.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-103 && _this.image3.angle <-97 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image14.visible=true;
                _this.image=_this.image14.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image15.visible=true;
                _this.image16.visible=true;
                _this.image17.visible=true;
                _this.image18.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-83 && _this.image2.angle <-77 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image19.visible=true;
                _this.image=_this.image19.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image20.visible=true;
                  _this.image21.visible=true;
                  _this.image22.visible=true;
                  _this.image23.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image3.angle >-108 && _this.image3.angle <-102 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image24.visible=true;
                _this.image=_this.image24.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image25.visible=true;
                _this.image26.visible=true;
                _this.image27.visible=true;
                _this.image28.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-78 && _this.image2.angle <-72 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image29.visible=true;
                _this.image=_this.image29.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image30.visible=true;
                  _this.image31.visible=true;
                  _this.image32.visible=true;
                  _this.image33.visible=true;
                },_this);
                _this.correctAns();
            }
        else if(_this.image3.angle >-113 && _this.image3.angle <-107 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image34.visible=true;
                _this.image=_this.image34.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image35.visible=true;
                _this.image36.visible=true;
                _this.image37.visible=true;
                _this.image38.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-73 && _this.image2.angle <-67 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image39.visible=true;
                _this.image=_this.image39.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image40.visible=true;
                  _this.image41.visible=true;
                  _this.image42.visible=true;
                  _this.image43.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-118 && _this.image3.angle <-112 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image44.visible=true;
                _this.image=_this.image44.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image45.visible=true;
                _this.image46.visible=true;
                _this.image47.visible=true;
                _this.image48.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-68 && _this.image2.angle <-62 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image49.visible=true;
                _this.image=_this.image49.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image50.visible=true;
                  _this.image51.visible=true;
                  _this.image52.visible=true;
                  _this.image53.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-123 && _this.image3.angle <-117 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image54.visible=true;
                _this.image=_this.image54.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image55.visible=true;
                _this.image56.visible=true;
                _this.image57.visible=true;
                _this.image58.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-63 && _this.image2.angle <-57 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image59.visible=true;
                _this.image=_this.image59.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image60.visible=true;
                  _this.image61.visible=true;
                  _this.image62.visible=true;
                  _this.image63.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-128 && _this.image3.angle <-122 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image64.visible=true;
                _this.image=_this.image64.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image65.visible=true;
                _this.image66.visible=true;
                _this.image67.visible=true;
                _this.image68.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-58 && _this.image2.angle <-52 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image69.visible=true;
                _this.image=_this.image69.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image70.visible=true;
                  _this.image71.visible=true;
                  _this.image72.visible=true;
                  _this.image73.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-133 && _this.image3.angle <-127 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image74.visible=true;
                _this.image=_this.image74.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image75.visible=true;
                _this.image76.visible=true;
                _this.image77.visible=true;
                _this.image78.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-53 && _this.image2.angle <-47 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image79.visible=true;
                _this.image=_this.image79.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image80.visible=true;
                  _this.image81.visible=true;
                  _this.image82.visible=true;
                  _this.image83.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-138 && _this.image3.angle <-132 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image84.visible=true;
                _this.image=_this.image84.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image85.visible=true;
                _this.image86.visible=true;
                _this.image87.visible=true;
                _this.image88.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-48 && _this.image2.angle <-42 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image89.visible=true;
                _this.image=_this.image89.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image90.visible=true;
                  _this.image91.visible=true;
                  _this.image92.visible=true;
                  _this.image93.visible=true;
                },_this);
                _this.correctAns();
            }
          else if(_this.image3.angle >-143 && _this.image3.angle <-137 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image94.visible=true;
                _this.image=_this.image94.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image95.visible=true;
                _this.image96.visible=true;
                _this.image97.visible=true;
                _this.image98.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-43 && _this.image2.angle <-37 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image99.visible=true;
                _this.image=_this.image99.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image100.visible=true;
                  _this.image101.visible=true;
                  _this.image102.visible=true;
                  _this.image103.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-148 && _this.image3.angle <-142 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image104.visible=true;
                _this.image=_this.image104.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image105.visible=true;
                _this.image106.visible=true;
                _this.image107.visible=true;
                _this.image108.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-38 && _this.image2.angle <-32 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image109.visible=true;
                _this.image=_this.image109.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image110.visible=true;
                  _this.image111.visible=true;
                  _this.image112.visible=true;
                  _this.image113.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-153 && _this.image3.angle <-147 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image114.visible=true;
                _this.image=_this.image114.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image115.visible=true;
                _this.image116.visible=true;
                _this.image117.visible=true;
                _this.image118.visible=true;
                },_this);
                _this.correctAns();
            }
                
          else if(_this.image2.angle >-33 && _this.image2.angle <-27 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image119.visible=true;
                _this.image=_this.image119.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image120.visible=true;
                  _this.image121.visible=true;
                  _this.image122.visible=true;
                  _this.image123.visible=true;
                },_this);
                _this.correctAns();
            }
          else if(_this.image3.angle >-158 && _this.image3.angle <-152 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image124.visible=true;
                _this.image=_this.image124.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image125.visible=true;
                _this.image126.visible=true;
                _this.image127.visible=true;
                _this.image128.visible=true;
                },_this);
                _this.correctAns();
            }
                
           else if(_this.image2.angle >-28 && _this.image2.angle <-22 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image129.visible=true;
                _this.image=_this.image129.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image130.visible=true;
                  _this.image131.visible=true;
                  _this.image132.visible=true;
                  _this.image133.visible=true;
                },_this);
                _this.correctAns();
            }
            else if(_this.image3.angle >-163 && _this.image3.angle <-157 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image134.visible=true;
                _this.image=_this.image134.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image135.visible=true;
                _this.image136.visible=true;
                _this.image137.visible=true;
                _this.image138.visible=true;
                },_this);
                _this.correctAns();
            }
                
           else if(_this.image2.angle >-23 && _this.image2.angle <-17 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image139.visible=true;
                _this.image=_this.image139.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image140.visible=true;
                  _this.image141.visible=true;
                  _this.image142.visible=true;
                  _this.image143.visible=true;
                },_this);
                _this.correctAns();
            }
          else if(_this.image3.angle >-168 && _this.image3.angle <-162 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image144.visible=true;
                _this.image=_this.image144.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image145.visible=true;
                _this.image146.visible=true;
                _this.image147.visible=true;
                _this.image148.visible=true;
                },_this);
                _this.correctAns();
            }
                
           else if(_this.image2.angle >-18 && _this.image2.angle <-12 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image149.visible=true;
                _this.image=_this.image149.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image150.visible=true;
                  _this.image151.visible=true;
                  _this.image152.visible=true;
                  _this.image153.visible=true;
                },_this);
                _this.correctAns();
            }
          else if(_this.image3.angle >-173 && _this.image3.angle <-167 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image154.visible=true;
                _this.image=_this.image154.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image155.visible=true;
                _this.image156.visible=true;
                _this.image157.visible=true;
                _this.image158.visible=true;
                },_this);
                _this.correctAns();
            }
                
           else if(_this.image2.angle >-13 && _this.image2.angle <-7 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image159.visible=true;
                _this.image=_this.image159.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image160.visible=true;
                  _this.image161.visible=true;
                  _this.image162.visible=true;
                  _this.image163.visible=true;
                },_this);
                _this.correctAns();
            }
         else if(_this.image3.angle >-178 && _this.image3.angle <-172 && _this.image2.angle ==0)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image164.visible=true;
                _this.image=_this.image164.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                _this.image165.visible=true;
                _this.image166.visible=true;
                _this.image167.visible=true;
                _this.image168.visible=true;
                },_this);
                _this.correctAns();
            }
                
           else if(_this.image2.angle >-8 && _this.image2.angle <-2 && _this.image3.angle==-180)
            {
                _this.image3.frame=1;
                _this.image2.frame=1;
                _this.image169.visible=true;
                _this.image=_this.image169.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]); 
                _this.image.play(10);
                _this.time.events.add(1500, function(){    
                  _this.image170.visible=true;
                  _this.image171.visible=true;
                  _this.image172.visible=true;
                  _this.image173.visible=true;
                },_this);
                _this.correctAns();
            }
            
         else
            {
                _this.wrongAns();
                _this.shake.shake(10, _this.tickMark);
            }
    } 
    
    
     
},
 
    
    removeCelebration:function()
	{

        console.log("removeCeleb");
		console.log("no"+_this.no11);
        _this.correct=0;
       
        _this.no11++;
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
		   
		  if(_this.no11<6)
                    {
                     _this.wrong = true;
                    // _this.timer1.stop();
                        _this.slideGrp.destroy();
                         _this.time.events.add(1000, function(){  
                         _this.getQuestion();
                         },_this);
                    
                    }
        
                else
                    {
                         
                        _this.stopvoice();
                        _this.timer1 = null;
                        _this.countIncrement = 0;
                        _this.counterForTimer = null;
                         _this.state.start('sg21_2_5Score',true,false);
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
                    event_type: "drag", 
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
            _this.sceneCount++;
            _this.questionid=1;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
               
         _this.wrongAnswer = false;
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
        
      
        _this.time.events.add(4000, _this.removeCelebration, _this);	
        
	},

    

  wrongAns:function(target)
	{
       
        _this.stopvoice();
        _this.noofAttempts++;
        // _this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: "level21.2.5_", 
                    access_token: window.acctkn 
               } 
               

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
       
         _this.wrongAnswer = true;
         if(_this.timer1)
            _this.timer1.stop();	
         _this.wrong = false;
        _this.time.events.add(500, function(){  
        _this.tickMark.frame = 0;
        },_this)
       
        _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        _this.time.events.add(1000, function(){
        _this.slideGrp.destroy();
        _this.getQuestion();
            
        },_this);
          
	},
    
    getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no11])
        {
            case 1: if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/English/sg21.2.5aE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Hindi/sg21.2.5aH.mp3");
                    }
                      else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Kannada/sg21.2.5aK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Gujrati/sg21.2.5a.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Marathi/sg21.2.5a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Telugu/sg21.2.5a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Tamil/sg21.2.5a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Urdu/sg21.2.5a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Odiya/sg21.2.5a.mp3");
                    }
                    break;
            case 2: if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/English/sg21.2.5bE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Hindi/sg21.2.5bH.mp3");
                    }
                      else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Kannada/sg21.2.5bK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Gujrati/sg21.2.5b.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Marathi/sg21.2.5b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Telugu/sg21.2.5b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Tamil/sg21.2.5b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Urdu/sg21.2.5b.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Odiya/sg21.2.5b.mp3");
                    }
                    break;
            case 3:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/English/sg21.2.5cE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Hindi/sg21.2.5cH.mp3");
                    }
                      else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Kannada/sg21.2.5cK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Gujrati/sg21.2.5c.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Marathi/sg21.2.5c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Telugu/sg21.2.5c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Tamil/sg21.2.5c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Urdu/sg21.2.5c.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Odiya/sg21.2.5c.mp3");
                    }
                    break;
            case 4:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/English/sg21.2.5dE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Hindi/sg21.2.5dH.mp3");
                    }
                      else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Kannada/sg21.2.5dK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Gujrati/sg21.2.5d.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Marathi/sg21.2.5d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Telugu/sg21.2.5d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Tamil/sg21.2.5d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Urdu/sg21.2.5d.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Odiya/sg21.2.5d.mp3");
                    }
                    break;
            case 5: if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/English/sg21.2.5eE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Hindi/sg21.2.5eH.mp3");
                    }
                      else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Kannada/sg21.2.5eK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Gujrati/sg21.2.5e.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Marathi/sg21.2.5e.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Telugu/sg21.2.5e.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Tamil/sg21.2.5e.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Urdu/sg21.2.5e.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Odiya/sg21.2.5e.mp3");
                    }
                    break;
            case 6: if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/English/sg21.2.5fE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Hindi/sg21.2.5fH.mp3");
                    }
                      else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Kannada/sg21.2.5fK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Gujrati/sg21.2.5f.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Marathi/sg21.2.5f.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Telugu/sg21.2.5f.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Tamil/sg21.2.5f.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Urdu/sg21.2.5f.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Odiya/sg21.2.5f.mp3");
                    }
                    break;
            case 7:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/English/sg21.2.5gE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Hindi/sg21.2.5gH.mp3");
                    }
                      else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Kannada/sg21.2.5gK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Gujrati/sg21.2.5g.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Marathi/sg21.2.5g.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Telugu/sg21.2.5g.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Tamil/sg21.2.5g.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Urdu/sg21.2.5g.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Odiya/sg21.2.5g.mp3");
                    }
                    break;
            case 8:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/English/sg21.2.5hE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Hindi/sg21.2.5hH.mp3");
                    }
                      else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Kannada/sg21.2.5hK.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Marathi/sg21.2.5h.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Telugu/sg21.2.5h.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Tamil/sg21.2.5h.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Urdu/sg21.2.5h.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Gujrati/sg21.2.5h.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Odiya/sg21.2.5h.mp3");
                    }
                    break;
            case 9: if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/English/sg21.2.5iE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Hindi/sg21.2.5iH.mp3");
                    }
                      else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Kannada/sg21.2.5iK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Gujrati/sg21.2.5i.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Marathi/sg21.2.5i.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Telugu/sg21.2.5i.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Tamil/sg21.2.5i.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Urdu/sg21.2.5i.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Odiya/sg21.2.5i.mp3");
                    }
                    break;
            case 10:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/English/sg21.2.5jE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Hindi/sg21.2.5jH.mp3");
                    }
                      else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Kannada/sg21.2.5jK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Gujrati/sg21.2.5j.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Marathi/sg21.2.5j.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Telugu/sg21.2.5j.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Tamil/sg21.2.5j.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Urdu/sg21.2.5j.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.2.5/Odiya/sg21.2.5j.mp3");
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
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       