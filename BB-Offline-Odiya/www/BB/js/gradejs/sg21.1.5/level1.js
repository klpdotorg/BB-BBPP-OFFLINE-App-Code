Game.sg21_1_5level1=function(){};

Game.sg21_1_5level1.prototype={
    init:function(game)
    {
       _this = this;
       
       telInitializer.gameIdInit("SG21_1_5",gradeSelected);
        
       
    },

    preload:function(game){
  if(!window.grade5SG1){

            window.grade5SG1 = true;

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

            this.load.image('SG21_1_5ansbox',window.baseUrl+'assets/gradeAssets/sg21.1.5/ansbox.png');
        this.load.image('SG21_1_5degree',window.baseUrl+'assets/gradeAssets/sg21.1.5/degree.png');
        this.load.image('SG21_1_5bottombar',window.baseUrl+'assets/gradeAssets/sg21.1.5/bottombar.png');
        this.load.image('SG21_1_5protractor',window.baseUrl+'assets/gradeAssets/sg21.1.5/protractor.png');
        this.load.atlas('SG21_1_5angle',window.baseUrl+'assets/gradeAssets/sg21.1.5/angle.png',window.baseUrl+'json/gradeJson/sg21.1.5/angle.json');
        this.load.atlas('SG21_1_5angle1',window.baseUrl+'assets/gradeAssets/sg21.1.5/angle1.png',window.baseUrl+'json/gradeJson/sg21.1.5/angle1.json');
        this.load.atlas('SG21_1_5angle2',window.baseUrl+'assets/gradeAssets/sg21.1.5/angle2.png',window.baseUrl+'json/gradeJson/sg21.1.5/angle2.json');
        this.load.atlas('SG21_1_5numbers',window.baseUrl+'assets/gradeAssets/sg21.1.5/numbers.png',window.baseUrl+'json/gradeJson/sg21.1.5/numbers.json');
        this.load.atlas('SG21_1_5erase',window.baseUrl+'assets/gradeAssets/sg21.1.5/erase.png',window.baseUrl+'json/gradeJson/sg21.1.5/erase.json');
        this.load.atlas('SG21_1_5rightmark',window.baseUrl+'assets/gradeAssets/sg21.1.5/rightmark.png',window.baseUrl+'json/gradeJson/sg21.1.5/rightmark.json');
        this.load.atlas('SG21_1_5line',window.baseUrl+'assets/gradeAssets/sg21.1.5/line.png',window.baseUrl+'json/gradeJson/sg21.1.5/line.json');
        this.load.atlas('SG21_1_5numberpad',window.baseUrl+'assets/gradeAssets/sg21.1.5/numberpad.png',window.baseUrl+'json/gradeJson/sg21.1.5/numberpad.json');
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
        _this.enterTxt = null;
        _this.selectedAns = "";
        
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
        _this.getVoice();
          
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
             _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
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
         _this.image1 = _this.add.sprite(430,265,'SG21_1_5protractor');
         _this.image1.anchor.setTo(0.5);
         _this.image1.scale.setTo(1,1); 
        
         _this.txtbox = _this.add.sprite(860,270,'SG21_1_5ansbox');
         _this.txtbox.anchor.setTo(0.5);
         _this.txtbox.scale.setTo(1.5,1.5);
         _this.txtbox.inputEnabled = true;
         _this.txtbox.input.useHandCursor = true;
    },
    
gotoFirstQuestion:function(){
       
     _this.questioNo = 1;
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
  
     _this.image2 = _this.add.sprite(572,405,'SG21_1_5line');
     _this.image2.anchor.setTo(0.5);
     _this.image2.scale.setTo(0.95,0.95); 
     
     _this.image3 = _this.add.sprite(365,270,'SG21_1_5line');
     _this.image3.anchor.setTo(0.5);
     _this.image3.scale.setTo(0.95,0.95); 
     _this.image3.angle=-115;
     
     _this.image4 = _this.add.sprite(420,380,'SG21_1_5angle1');
     _this.image4.anchor.setTo(0.5);
     _this.image4.scale.setTo(0.95,0.95); 
     _this.image4.frame=22;
     _this.image4.visible=false;
     
     _this.image5 = _this.add.sprite(467,370,'SG21_1_5numbers');
     _this.image5.anchor.setTo(0.5);
     _this.image5.scale.setTo(2,2); 
     _this.image5.frame=1;
     _this.image5.visible=false;
     
     _this.image6 = _this.add.sprite(477,370,'SG21_1_5numbers');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(2,2); 
     _this.image6.frame=1;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(492,370,'SG21_1_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(1.95,1.95); 
     _this.image7.frame=5;
     _this.image7.visible=false;
     
     _this.image8 = _this.add.sprite(505,350,'SG21_1_5degree');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
     _this.image8.visible=false;
    
     _this.addNumberPad();
     
      _this.slideGrp.x = -1000;
       var tween = _this.add.tween(_this.slideGrp);
       tween.to({ x: 0 }, 1700,'Linear', true, 0);
     
      _this.slideGrp.add(_this.image1);
      _this.slideGrp.add(_this.txtbox);
      _this.slideGrp.add(_this.image2);
      _this.slideGrp.add(_this.image3);
      _this.slideGrp.add(_this.image4);
      _this.slideGrp.add(_this.image5);
      _this.slideGrp.add(_this.image6);
      _this.slideGrp.add(_this.image7);
      _this.slideGrp.add(_this.image8);

   
      _this.rightAns=115;
     
  },
    
gotoSecondQuestion:function(){
    
     _this.questioNo = 2;
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
  
     _this.image2 = _this.add.sprite(278,400,'SG21_1_5line');
     _this.image2.anchor.setTo(0.5);
     _this.image2.scale.setTo(0.95,0.95); 
     _this.image2.angle=-180;
     
     _this.image3 = _this.add.sprite(387,261,'SG21_1_5line');
     _this.image3.anchor.setTo(0.5);
     _this.image3.scale.setTo(0.95,0.95); 
     _this.image3.angle=-105;
     
     _this.image4 = _this.add.sprite(400,380,'SG21_1_5angle2');
     _this.image4.anchor.setTo(0.5);
     _this.image4.scale.setTo(0.95,0.95); 
     _this.image4.frame=22;
     _this.image4.visible=false;
     
     _this.image5 = _this.add.sprite(335,360,'SG21_1_5numbers');
     _this.image5.anchor.setTo(0.5);
     _this.image5.scale.setTo(2,2); 
     _this.image5.frame=7;
     _this.image5.visible=false;
     
     _this.image6 = _this.add.sprite(355,360,'SG21_1_5numbers');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(2,2); 
     _this.image6.frame=5;
     _this.image6.visible=false;
   
     _this.image7 = _this.add.sprite(370,340,'SG21_1_5degree');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.visible=false;
    
     _this.addNumberPad();
     
     _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 1700,'Linear', true, 0);
     
      _this.slideGrp.add(_this.image1);
      _this.slideGrp.add(_this.txtbox);
      _this.slideGrp.add(_this.image2);
      _this.slideGrp.add(_this.image3);
      _this.slideGrp.add(_this.image4);
      _this.slideGrp.add(_this.image5);
      _this.slideGrp.add(_this.image6);
      _this.slideGrp.add(_this.image7);

      _this.rightAns=75;
     
        
    },

gotoThirdQuestion:function(){
       
     _this.questioNo = 3;
   
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
  
     _this.image2 = _this.add.sprite(570,405,'SG21_1_5line');
     _this.image2.anchor.setTo(0.5);
     _this.image2.scale.setTo(0.95,0.95); 
     
     _this.image3 = _this.add.sprite(425,258,'SG21_1_5line');
     _this.image3.anchor.setTo(0.5);
     _this.image3.scale.setTo(0.95,0.95); 
     _this.image3.angle=-90;
     
     _this.image4 = _this.add.sprite(415,380,'SG21_1_5angle1');
     _this.image4.anchor.setTo(0.5);
     _this.image4.scale.setTo(0.95,0.95); 
     _this.image4.frame=9;
     _this.image4.visible=false;
     
     _this.image5 = _this.add.sprite(480,375,'SG21_1_5numbers');
     _this.image5.anchor.setTo(0.5);
     _this.image5.scale.setTo(2,2); 
     _this.image5.frame=9;
     _this.image5.visible=false;
     
     _this.image6 = _this.add.sprite(500,375,'SG21_1_5numbers');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(2,2); 
     _this.image6.frame=0;
     _this.image6.visible=false;
    
     _this.image7 = _this.add.sprite(515,355,'SG21_1_5degree');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.visible=false;
    
     _this.addNumberPad();
     
      _this.slideGrp.x = -1000;
       var tween = _this.add.tween(_this.slideGrp);
       tween.to({ x: 0 }, 1700,'Linear', true, 0);
     
      _this.slideGrp.add(_this.image1);
      _this.slideGrp.add(_this.txtbox);
      _this.slideGrp.add(_this.image2);
      _this.slideGrp.add(_this.image3);
      _this.slideGrp.add(_this.image4);
      _this.slideGrp.add(_this.image5);
      _this.slideGrp.add(_this.image6);
      _this.slideGrp.add(_this.image7);

      _this.rightAns=90;
     
  },
    
gotoFourthQuestion:function(){
    
     _this.questioNo = 4;
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
  
     _this.image2 = _this.add.sprite(278,400,'SG21_1_5line');
     _this.image2.anchor.setTo(0.5);
     _this.image2.scale.setTo(0.95,0.95); 
     _this.image2.angle=-180;
     
     _this.image3 = _this.add.sprite(500,273,'SG21_1_5line');
     _this.image3.anchor.setTo(0.5);
     _this.image3.scale.setTo(0.95,0.95); 
     _this.image3.angle=-60;
     
     _this.image4 = _this.add.sprite(400,380,'SG21_1_5angle2');
     _this.image4.anchor.setTo(0.5);
     _this.image4.scale.setTo(0.95,0.95); 
     _this.image4.frame=26;
     _this.image4.visible=false;
     
     _this.image5 = _this.add.sprite(320,360,'SG21_1_5numbers');
     _this.image5.anchor.setTo(0.5);
     _this.image5.scale.setTo(2,2); 
     _this.image5.frame=1;
     _this.image5.visible=false;
    
     _this.image6 = _this.add.sprite(335,360,'SG21_1_5numbers');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(2,2); 
     _this.image6.frame=2;
     _this.image6.visible=false;
    
     _this.image7 = _this.add.sprite(355,360,'SG21_1_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.frame=0;
     _this.image7.visible=false;
   
     _this.image8 = _this.add.sprite(370,340,'SG21_1_5degree');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
     _this.image8.visible=false;
    
     _this.addNumberPad();
     
     _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 1700,'Linear', true, 0);
     
      _this.slideGrp.add(_this.image1);
      _this.slideGrp.add(_this.txtbox);
      _this.slideGrp.add(_this.image2);
      _this.slideGrp.add(_this.image3);
      _this.slideGrp.add(_this.image4);
      _this.slideGrp.add(_this.image5);
      _this.slideGrp.add(_this.image6);
      _this.slideGrp.add(_this.image7);
        _this.slideGrp.add(_this.image8);

      _this.rightAns=120;
     
        
    },
    
gotoFifthQuestion:function(){
       
     _this.questioNo = 5;
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
  
     _this.image2 = _this.add.sprite(571,405,'SG21_1_5line');
     _this.image2.anchor.setTo(0.5);
     _this.image2.scale.setTo(0.95,0.95); 
     
     _this.image3 = _this.add.sprite(552,328,'SG21_1_5line');
     _this.image3.anchor.setTo(0.5);
     _this.image3.scale.setTo(0.95,0.95); 
     _this.image3.angle=-30;
     
     _this.image4 = _this.add.sprite(430,380,'SG21_1_5angle1');
     _this.image4.anchor.setTo(0.5);
     _this.image4.scale.setTo(0.95,0.95); 
     _this.image4.frame=15;
     _this.image4.visible=false;
     
     _this.image5 = _this.add.sprite(490,385,'SG21_1_5numbers');
     _this.image5.anchor.setTo(0.5);
     _this.image5.scale.setTo(1.8,1.8); 
     _this.image5.frame=3;
     _this.image5.visible=false;
     
     _this.image6 = _this.add.sprite(510,385,'SG21_1_5numbers');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(1.8,1.8); 
     _this.image6.frame=0;
     _this.image6.visible=false;
       
     _this.image7 = _this.add.sprite(520,365,'SG21_1_5degree');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.visible=false;
    
     _this.addNumberPad();
     
      _this.slideGrp.x = -1000;
       var tween = _this.add.tween(_this.slideGrp);
       tween.to({ x: 0 }, 1700,'Linear', true, 0);
     
      _this.slideGrp.add(_this.image1);
      _this.slideGrp.add(_this.txtbox);
      _this.slideGrp.add(_this.image2);
      _this.slideGrp.add(_this.image3);
      _this.slideGrp.add(_this.image4);
      _this.slideGrp.add(_this.image5);
      _this.slideGrp.add(_this.image6);
      _this.slideGrp.add(_this.image7);
    
      _this.rightAns=30;
     
  },

gotoSixthQuestion:function(){
    
     _this.questioNo = 6;
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
  
     _this.image2 = _this.add.sprite(279,400,'SG21_1_5line');
     _this.image2.anchor.setTo(0.5);
     _this.image2.scale.setTo(0.95,0.95); 
     _this.image2.angle=-180;
     
     _this.image3 = _this.add.sprite(315,306,'SG21_1_5line');
     _this.image3.anchor.setTo(0.5);
     _this.image3.scale.setTo(0.95,0.95); 
     _this.image3.angle=-140;
    
     _this.image4 = _this.add.sprite(400,380,'SG21_1_5angle2');
     _this.image4.anchor.setTo(0.5);
     _this.image4.scale.setTo(0.95,0.95); 
     _this.image4.frame=17;
     _this.image4.visible=false;
     
     _this.image5 = _this.add.sprite(318,380,'SG21_1_5numbers');
     _this.image5.anchor.setTo(0.5);
     _this.image5.scale.setTo(2,2); 
     _this.image5.frame=4;
     _this.image5.visible=false;
     
     _this.image6 = _this.add.sprite(340,380,'SG21_1_5numbers');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(2,2); 
     _this.image6.frame=0;
     _this.image6.visible=false;
   
     _this.image7 = _this.add.sprite(352,360,'SG21_1_5degree');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.visible=false;
    
     _this.addNumberPad();
     
     _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 1700,'Linear', true, 0);
     
      _this.slideGrp.add(_this.image1);
      _this.slideGrp.add(_this.txtbox);
      _this.slideGrp.add(_this.image2);
      _this.slideGrp.add(_this.image3);
      _this.slideGrp.add(_this.image4);
      _this.slideGrp.add(_this.image5);
      _this.slideGrp.add(_this.image6);
      _this.slideGrp.add(_this.image7);

      _this.rightAns=40;
     
        
    },
    
gotoSeventhQuestion:function(){
       
     _this.questioNo = 7;
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
  
     _this.image2 = _this.add.sprite(572,405,'SG21_1_5line');
     _this.image2.anchor.setTo(0.5);
     _this.image2.scale.setTo(0.95,0.95); 
     
     _this.image3 = _this.add.sprite(306,318,'SG21_1_5line');
     _this.image3.anchor.setTo(0.5);
     _this.image3.scale.setTo(0.95,0.95); 
     _this.image3.angle=-145;
     
     _this.image4 = _this.add.sprite(422,380,'SG21_1_5angle1');
     _this.image4.anchor.setTo(0.5);
     _this.image4.scale.setTo(0.95,0.95); 
     _this.image4.frame=26;
     _this.image4.visible=false;
     
     _this.image5 = _this.add.sprite(467,370,'SG21_1_5numbers');
     _this.image5.anchor.setTo(0.5);
     _this.image5.scale.setTo(2,2); 
     _this.image5.frame=1;
     _this.image5.visible=false;
     
     _this.image6 = _this.add.sprite(483,370,'SG21_1_5numbers');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(2,2); 
     _this.image6.frame=4;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(502,370,'SG21_1_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(1.95,1.95); 
     _this.image7.frame=5;
     _this.image7.visible=false;
     
     _this.image8 = _this.add.sprite(510,345,'SG21_1_5degree');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
    _this.image8.visible=false;
     
     _this.addNumberPad();
    
      _this.slideGrp.x = -1000;
       var tween = _this.add.tween(_this.slideGrp);
       tween.to({ x: 0 }, 1700,'Linear', true, 0);
     
      _this.slideGrp.add(_this.image1);
      _this.slideGrp.add(_this.txtbox);
      _this.slideGrp.add(_this.image2);
      _this.slideGrp.add(_this.image3);
      _this.slideGrp.add(_this.image4);
      _this.slideGrp.add(_this.image5);
      _this.slideGrp.add(_this.image6);
      _this.slideGrp.add(_this.image7);
      _this.slideGrp.add(_this.image8);

      _this.rightAns=145;
     
  },

gotoEighthQuestion:function(){
    
     _this.questioNo = 8;
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
  
     _this.image2 = _this.add.sprite(279,400,'SG21_1_5line');
     _this.image2.anchor.setTo(0.5);
     _this.image2.scale.setTo(0.95,0.95); 
     _this.image2.angle=-180;
     
     _this.image3 = _this.add.sprite(532,297,'SG21_1_5line');
     _this.image3.anchor.setTo(0.5);
     _this.image3.scale.setTo(0.95,0.95); 
     _this.image3.angle=-45;
     
     _this.image4 = _this.add.sprite(442,380,'SG21_1_5angle2');
     _this.image4.anchor.setTo(0.5);
     _this.image4.scale.setTo(0.95,0.95); 
     _this.image4.frame=23;
     _this.image4.visible=false;
     
     _this.image5 = _this.add.sprite(355,370,'SG21_1_5numbers');
     _this.image5.anchor.setTo(0.5);
     _this.image5.scale.setTo(2,2); 
     _this.image5.frame=1;
     _this.image5.visible=false;
    
     _this.image6 = _this.add.sprite(370,370,'SG21_1_5numbers');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(2,2); 
     _this.image6.frame=3;
     _this.image6.visible=false;
    
      _this.image7 = _this.add.sprite(390,370,'SG21_1_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(1.95,1.95); 
     _this.image7.frame=5;
     _this.image7.visible=false;
   
     _this.image8 = _this.add.sprite(405,350,'SG21_1_5degree');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
     _this.image8.visible=false;
    
     _this.addNumberPad();
     
     _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 1700,'Linear', true, 0);
     
      _this.slideGrp.add(_this.image1);
      _this.slideGrp.add(_this.txtbox);
      _this.slideGrp.add(_this.image2);
      _this.slideGrp.add(_this.image3);
      _this.slideGrp.add(_this.image4);
      _this.slideGrp.add(_this.image5);
      _this.slideGrp.add(_this.image6);
      _this.slideGrp.add(_this.image7);
      _this.slideGrp.add(_this.image8);

      _this.rightAns=135;
     
        
    },
    
gotoNinthQuestion:function(){
       
     _this.questioNo = 9;
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
  
     _this.image2 = _this.add.sprite(572,405,'SG21_1_5line');
     _this.image2.anchor.setTo(0.5);
     _this.image2.scale.setTo(0.95,0.95); 
     
     _this.image3 = _this.add.sprite(400,260,'SG21_1_5line');
     _this.image3.anchor.setTo(0.5);
     _this.image3.scale.setTo(0.95,0.95); 
     _this.image3.angle=-100;
     
     _this.image4 = _this.add.sprite(420,380,'SG21_1_5angle1');
     _this.image4.anchor.setTo(0.5);
     _this.image4.scale.setTo(0.95,0.95); 
     _this.image4.frame=21;
     _this.image4.visible=false;
     
     _this.image5 = _this.add.sprite(465,370,'SG21_1_5numbers');
     _this.image5.anchor.setTo(0.5);
     _this.image5.scale.setTo(2,2); 
     _this.image5.frame=1;
     _this.image5.visible=false;
     
     _this.image6 = _this.add.sprite(480,370,'SG21_1_5numbers');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(2,2); 
     _this.image6.frame=0;
     _this.image6.visible=false;
     
     _this.image7 = _this.add.sprite(502,370,'SG21_1_5numbers');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.frame=0;
     _this.image7.visible=false;
    
     _this.image8 = _this.add.sprite(515,350,'SG21_1_5degree');
     _this.image8.anchor.setTo(0.5);
     _this.image8.scale.setTo(2,2); 
     _this.image8.visible=false;
    
     _this.addNumberPad();
     
      _this.slideGrp.x = -1000;
       var tween = _this.add.tween(_this.slideGrp);
       tween.to({ x: 0 }, 1700,'Linear', true, 0);
     
      _this.slideGrp.add(_this.image1);
      _this.slideGrp.add(_this.txtbox);
      _this.slideGrp.add(_this.image2);
      _this.slideGrp.add(_this.image3);
      _this.slideGrp.add(_this.image4);
      _this.slideGrp.add(_this.image5);
      _this.slideGrp.add(_this.image6);
      _this.slideGrp.add(_this.image7);
      _this.slideGrp.add(_this.image8);

      _this.rightAns=100;
     
  },
    
gotoTenthQuestion:function(){
    
     _this.questioNo = 10;
     
     _this.loadobject();
    
     _this.slideGrp = _this.add.group();
  
     _this.image2 = _this.add.sprite(278,400,'SG21_1_5line');
     _this.image2.anchor.setTo(0.5);
     _this.image2.scale.setTo(0.95,0.95); 
     _this.image2.angle=-180;
     
     _this.image3 = _this.add.sprite(333,290,'SG21_1_5line');
     _this.image3.anchor.setTo(0.5);
     _this.image3.scale.setTo(0.95,0.95); 
     _this.image3.angle=-130;
     
     _this.image4 = _this.add.sprite(400,380,'SG21_1_5angle2');
     _this.image4.anchor.setTo(0.5);
     _this.image4.scale.setTo(0.95,0.95); 
     _this.image4.frame=19;
     _this.image4.visible=false;
     
     _this.image5 = _this.add.sprite(330,370,'SG21_1_5numbers');
     _this.image5.anchor.setTo(0.5);
     _this.image5.scale.setTo(1.90,1.90); 
     _this.image5.frame=5;
     _this.image5.visible=false;
     
     _this.image6 = _this.add.sprite(350,370,'SG21_1_5numbers');
     _this.image6.anchor.setTo(0.5);
     _this.image6.scale.setTo(2,2); 
     _this.image6.frame=0;
     _this.image6.visible=false;
   
     _this.image7 = _this.add.sprite(360,348,'SG21_1_5degree');
     _this.image7.anchor.setTo(0.5);
     _this.image7.scale.setTo(2,2); 
     _this.image7.visible=false;
    
     _this.addNumberPad();
     
     _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 1700,'Linear', true, 0);
     
      _this.slideGrp.add(_this.image1);
      _this.slideGrp.add(_this.txtbox);
      _this.slideGrp.add(_this.image2);
      _this.slideGrp.add(_this.image3);
      _this.slideGrp.add(_this.image4);
      _this.slideGrp.add(_this.image5);
      _this.slideGrp.add(_this.image6);
      _this.slideGrp.add(_this.image7);

     _this.rightAns=50;
     
        
    },
    
addNumberPad:function(target){
        
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.box1 = _this.numGroup.create(480,505,'SG21_1_5bottombar');
        _this.box1.anchor.setTo(0.5);
        _this.x = 80;
     
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,508,'SG21_1_5numberpad');  
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
       
        _this.wrongbtn = _this.numGroup.create(_this.x+30,508,'SG21_1_5erase');
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(1.1,1.1);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
       
        _this.rightbtn = _this.numGroup.create(_this.x+100,508,'SG21_1_5rightmark');
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
        _this.txtbox.name = "txtbox";
        
        _this.wrongbtn.events.onInputDown.add(function(){
            _this.clickSound.play();
            _this.wrongbtn.frame=1;
             _this.time.events.add(500, function(){    
                  _this.wrongbtn.frame=0;
                 },_this);
            _this.enterTxt.setText("");
            _this.selectedAns="";
        },_this);
        
        _this.rightbtn.events.onInputDown.add(function(target){
             _this.noofAttempts++;
            _this.clickSound.play();
            console.log(_this.selectedAns);
            console.log(_this.rightAns);
                
            if(_this.selectedAns==_this.rightAns||_this.selectedAns==""+_this.rightAns||_this.selectedAns==""+_this.rightAns)  
                {
                    console.log("correct");

                    if(_this.timer)
                    {
                        _this.timer.stop();
                        _this.timer = null;
                    }
                     _this.questionid = 1;
                    telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

                    _this.rightbtn.frame=1;
                    target.events.onInputDown.removeAll();
                    if(_this.questioNo==1)
                        {
                            _this.image2.frame=1;
                            _this.image3.frame=1;
                            _this.image4.visible=true;
                            _this.image=_this.image4.animations.add('play',[12,13,14,15,16,17,18,19,20,21,22]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.image5.visible=true;
                            _this.image6.visible=true;
                            _this.image7.visible=true;
                            _this.image8.visible=true;
                              },_this);
                            
                        }
                    else if(_this.questioNo==2)
                        {
                            _this.image2.frame=1;
                            _this.image3.frame=1;
                            _this.image4.visible=true;
                            _this.image=_this.image4.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.image5.visible=true;
                            _this.image6.visible=true;
                            _this.image7.visible=true;
                              },_this);
                            
                            
                        }
                    else if(_this.questioNo==3)
                        {
                            _this.image2.frame=1;
                            _this.image3.frame=1;
                            _this.image4.visible=true;
                            _this.image=_this.image4.animations.add('play',[1,2,3,4,5,6,7,8,9]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.image5.visible=true;
                            _this.image6.visible=true;
                            _this.image7.visible=true;
                              },_this);
                            
                            
                        }
                   else if(_this.questioNo==4)
                        {
                            _this.image2.frame=1;
                            _this.image3.frame=1;
                            _this.image4.visible=true;
                            _this.image=_this.image4.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.image5.visible=true;
                            _this.image6.visible=true;
                            _this.image7.visible=true;
                            _this.image8.visible=true;
                              },_this);
                          
                             
                        }
                    else if(_this.questioNo==5)
                        {
                            _this.image2.frame=1;
                            _this.image3.frame=1;
                            _this.image4.visible=true;
                            _this.image=_this.image4.animations.add('play',[12,13,14,15]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.image5.visible=true;
                            _this.image6.visible=true;
                            _this.image7.visible=true;
                              },_this);
                          
                            
                        }
                     else if(_this.questioNo==6)
                        {
                            _this.image2.frame=1;
                            _this.image3.frame=1;
                            _this.image4.visible=true;
                            _this.image=_this.image4.animations.add('play',[11,12,13,14,15,16,17]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.image5.visible=true;
                            _this.image6.visible=true;
                            _this.image7.visible=true;
                              },_this);
                    
                            
                        }
                     else if(_this.questioNo==7)
                        {
                            _this.image2.frame=1;
                            _this.image3.frame=1;
                            _this.image4.visible=true;
                            _this.image=_this.image4.animations.add('play',[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.image5.visible=true;
                            _this.image6.visible=true;
                            _this.image7.visible=true;
                            _this.image8.visible=true;
                              },_this);
                            
                            
                        }
                     else if(_this.questioNo==8)
                        {
                            _this.image2.frame=1;
                            _this.image3.frame=1;
                            _this.image4.visible=true;
                            _this.image=_this.image4.animations.add('play',[11,12,13,14,15,16,17,18,19,20,21,22,23]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.image5.visible=true;
                            _this.image6.visible=true;
                            _this.image7.visible=true;
                            _this.image8.visible=true;
                              },_this);
                            
                            
                        }
                    else if(_this.questioNo==9)
                        {
                            _this.image2.frame=1;
                            _this.image3.frame=1;
                            _this.image4.visible=true;
                            _this.image=_this.image4.animations.add('play',[12,13,14,15,16,17,18,19,20,21]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.image5.visible=true;
                            _this.image6.visible=true;
                            _this.image7.visible=true;
                            _this.image8.visible=true;
                              },_this);
                    
                            
                        }
                    else if(_this.questioNo==10)
                        {
                            _this.image2.frame=1;
                            _this.image3.frame=1;
                            _this.image4.visible=true;
                            _this.image=_this.image4.animations.add('play',[11,12,13,14,15,16,17,18,19]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.image5.visible=true;
                            _this.image6.visible=true;
                            _this.image7.visible=true;
                              },_this);
                    
                        }
                        
                    
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
                   
                     _this.time.events.add(3500, function(){_this.removeCelebration();},_this);
                }
            else
                {
                   
                     console.log("wrong");
                     _this.rightbtn.frame=1;
                    _this.selectedAns = "";
                    _this.enterTxt.setText("");
                    _this.shake.shake(10, _this.txtbox);
                    _this.wmusic = _this.add.audio('waudio');
		            _this.wmusic.play(); 
                    _this.time.events.add(500, function(){    
                       _this.rightbtn.frame=0;
                   },_this);
                }
  
        },_this);
        
        _this.numGroup.visible=false;
        _this.time.events.add(200, function(){
        _this.numGroup.visible=true;
        _this.numGroup.y=100;
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 500);
          //  target.events.onInputDown.removeAll();
        },_this);
    },
        

     numClicked:function(target){
     console.log(target.name);
       //  _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id:  "level21.1.5_"+target.name, 
                    access_token: window.acctkn 
               } 

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         _this.tapsound = _this.add.audio('tap');
         _this.tapsound.play();
        if(_this.selectedAns.length<3)
        {
            _this.selectedAns += target.name;
            _this.txtbox.getChildAt(0).setText(_this.selectedAns);
        }
     },
     
  

     
      
    removeCelebration:function()
	{

        console.log("removeCeleb");
	//	_this.celebration = false;
		console.log("no"+_this.no11);
        _this.correct=0;
       // _this.count=0;
       
        _this.no11++;
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
		   
		  if(_this.no11<6)
                    {
                     _this.wrong = true;
                     _this.timer1.stop();
                        _this.numGroup.destroy();
                         _this.objGroup.destroy();
                        _this.slideGrp.destroy();
                         _this.enterTxt.destroy();
                        _this.selectedAns = '';
                         _this.time.events.add(1000, function(){  
                         _this.getQuestion();
                         },_this);
                    
                    }
        
                else
                    {
                         
                        _this.stopvoice();
                        _this.timer1.stop();
                        _this.timer1 = null;
                        _this.countIncrement = 0;
                        _this.counterForTimer = null;
                         _this.state.start('sg21_1_5Score',true,false);
                  }



		
	},
    
    
   
    
 correctAns:function(target)
	{
       
       
        _this.stopvoice();
      
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
        
         _this.questionid = 1;
         telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
       

        _this.wrongAnswer = false;
     
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		console.log(_this.starAnim);
        
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();   
		 console.log("correct11");
        _this.speaker.inputEnabled=false;
        _this.count1++;
       
		_this.celebration = true;
        
        _this.click3 = _this.add.audio('ClickSound');
        _this.click3.play();
     	_this.cmusic = _this.add.audio('celebr');
		_this.cmusic.play();
        
		
        _this.time.events.add(2000, _this.removeCelebration, _this);


        
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
                    res_id: "level3.1.1_", 
                    access_token: window.acctkn 
               } 
               

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
       
         _this.wrongAnswer = true;
         _this.timer1.stop();	
         _this.wrong = false;
		 _this.wmusic = _this.add.audio('waudio');
		 _this.wmusic.play();
        
        
        _this.time.events.add(1000, function(){
        _this.shapesGrp.destroy();
         _this.wrongshapesGrp.destroy();   
        _this.GraphicsGrp.destroy();
        _this.objectGrp.destroy();
        _this.rightmark.destroy();
        _this.getQuestion();
            
        },_this);
    
      
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
            case 10:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.1.5/English/sg21.1.5E.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.1.5/Hindi/sg21.1.5H.mp3");
                    }
                   else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.1.5/Kannada/sg21.1.5K.mp3");
                    }
                  else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.1.5/Gujrati/sg21.1.5.mp3");
                       // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.1.5/Marathi/sg21.1.5.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.1.5/Telugu/sg21.1.5.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.1.5/Tamil/sg21.1.5.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.1.5/Urdu/sg21.1.5.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.1.5/Odiya/sg21.1.5.mp3");
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
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       