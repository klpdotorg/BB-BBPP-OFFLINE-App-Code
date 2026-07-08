Game.sg21_3_6level1=function(){};

Game.sg21_3_6level1.prototype={
    init:function(game)
    {
       _this = this;
      // window.languageSelected = window.languageSelected;
       
       telInitializer.gameIdInit("SG21_3_6",gradeSelected);
       
    },

    preload:function(game){
  if(!window.grade5SG6){

            window.grade5SG6 = true;

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

            this.load.atlas('sg_tick', window.baseUrl+'assets/gradeAssets/sg21.3.6/b3.png',window.baseUrl+'json/gradeJson/sg21.3.6/b3.json');
        this.load.image('sg_whitebox', window.baseUrl+'assets/gradeAssets/sg21.3.6/whitebox.png');
        //this.load.atlas('sg_box', window.baseUrl+'assets/commonAssets/box.png',window.baseUrl+'assets/commonAssets/box.json');
        
                
        this.load.atlas('sg_s1', window.baseUrl+'assets/gradeAssets/sg21.3.6/1.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/1.json');
        this.load.atlas('sg_s2', window.baseUrl+'assets/gradeAssets/sg21.3.6/2.png', window.baseUrl+'assets/gradeAssets/sg21.3.6/2.json');
        this.load.atlas('sg_s3', window.baseUrl+'assets/gradeAssets/sg21.3.6/3.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/3.json');
        this.load.atlas('sg_s4', window.baseUrl+'assets/gradeAssets/sg21.3.6/4.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/4.json');
        this.load.atlas('sg_s5', window.baseUrl+'assets/gradeAssets/sg21.3.6/5.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/5.json');
        this.load.atlas('sg_s6', window.baseUrl+'assets/gradeAssets/sg21.3.6/6.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/6.json');
        this.load.atlas('sg_s7', window.baseUrl+'assets/gradeAssets/sg21.3.6/x7.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x7.json');
        this.load.atlas('sg_s8', window.baseUrl+'assets/gradeAssets/sg21.3.6/x8.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x8.json');
        this.load.atlas('sg_s9', window.baseUrl+'assets/gradeAssets/sg21.3.6/x9.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x9.json');
        this.load.atlas('sg_s10', window.baseUrl+'assets/gradeAssets/sg21.3.6/x10.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x10.json');
        this.load.atlas('sg_s11', window.baseUrl+'assets/gradeAssets/sg21.3.6/x11.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x11.json');
        this.load.atlas('sg_s12', window.baseUrl+'assets/gradeAssets/sg21.3.6/x12.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x12.json');
        this.load.atlas('sg_s13', window.baseUrl+'assets/gradeAssets/sg21.3.6/x13.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x13.json');
        this.load.atlas('sg_s14', window.baseUrl+'assets/gradeAssets/sg21.3.6/x14.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x14.json');
        this.load.atlas('sg_s15', window.baseUrl+'assets/gradeAssets/sg21.3.6/x15.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x15.json');
        this.load.atlas('sg_s16', window.baseUrl+'assets/gradeAssets/sg21.3.6/x16.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x16.json');
        this.load.atlas('sg_s17', window.baseUrl+'assets/gradeAssets/sg21.3.6/x17.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x17.json');
        this.load.atlas('sg_s18', window.baseUrl+'assets/gradeAssets/sg21.3.6/x18.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x18.json');
        this.load.atlas('sg_s19', window.baseUrl+'assets/gradeAssets/sg21.3.6/x19.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x19.json');
        this.load.atlas('sg_s20', window.baseUrl+'assets/gradeAssets/sg21.3.6/x20.png',window.baseUrl+'assets/gradeAssets/sg21.3.6/x20.json');
       }

    },

create:function(game)
    {
        _this.amplify = null;
	
         _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         _this.qArray;
        _this.qArray1;
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
        //_this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.correct=0;
        _this.celebration= false;
         
        _this.qArray = new Array();
        _this.qArray = [1,2,3,4,5,6];
        _this.qArray = _this.shuffle(_this.qArray);
        
        _this.qArray1 = new Array();
        _this.qArray1 = [7,8,9,10,11,12];
        _this.qArray1 = _this.shuffle(_this.qArray1);
        
       // console.log(_this.qArrays);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'commonBg2');
        //_this.bg1.scale.setTo(1.05,1.12);
		
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="sg_navBar";
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){console.log("here");},_this,0,1,2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;


        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            //_this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(grade2Selected == false)
                _this.state.start('grade1levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false); 

        },_this);

         _this.speakerbtn = this.add.button(595,7,'grade11_speaker',function(){},this,1,0,2);
       //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

        _this.timebg=this.add.sprite(305,9,'Level42C_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1,1);


            _this.timeDisplay = this.add.text(332,25,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);
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
                this.minutes =  this.minutes+1;
                 _this.seconds = 00;
             }
             else{
                 this.minutes =  this.minutes+1;
                   
                 }
         }
    else{
            if (_this.counterForTimer < 10)        
	            this.seconds = '0' + this.counterForTimer;
            else
                this.seconds = this.counterForTimer;
        }
      this.timeDisplay.setText(_this.minutes+':' + this.seconds);
    },

    getQuestion:function(target)
    {  
        if(!_this.timer)
        {
            this.timer = this.time.create(false);

              //  Set a TimerEvent to occur after 2 seconds
              _this.timer.loop(1000, function(){
                   _this.AnsTimerCount++;
              }, this);
              //  Start the timer running - this is important!
              //  It won't start automatically, allowing you to hook it to button events and the like.
              _this.timer.start();
      }
        
       /**************************************************************************/ 
        _this.timer1 = this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();

        /**************************************************************************/ 
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        
        
        _this.temp2 = 0;
        if(_this.no11<3)
        {
           _this.temp2 =  _this.qArray[_this.no11];    
        }
        else
        {
            _this.temp2 =  _this.qArray1[_this.no11];
        }
        
        
    	switch(_this.temp2)
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
            case 12: _this.gotoTwelvethQuestion();
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


 gotoFirstQuestion:function(){
       
     _this.questioNo = 1;
     _this.getVoice();
     
     _this.shapeGrp=_this.add.group();
     
    
     _this.image1 = _this.add.sprite(150,180,'sg_s20');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);  
     
    _this.image2 = _this.add.sprite(400,180,'sg_s9');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="rightAns";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(650,180,'sg_s11');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.9,0.9);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(50,300,'sg_s17');
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(400,400,'sg_s8');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.9,0.9);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
        
    _this.image6 =_this.add.sprite(650,400,'sg_s13');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6)
     
     _this.shapeGrp.rightCount = 3;
     
    _this.rightmark =_this.add.sprite(860,285,'sg_tick');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(0.9,0.9);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    
     if(_this.wrongAnswer == false)
     {
    _this.image1.visible = false;
    _this.image2.visible = false;
    _this.image3.visible = false;
    _this.image4.visible = false;
    _this.image5.visible = false;
    _this.image6.visible = false;
     }
     
if(_this.wrongAnswer == false)
{    
    _this.image1.visible = true;
    _this.image2.visible = true;
    _this.image3.visible = true;
    _this.image4.visible = true;
    _this.image5.visible = true;
    _this.image6.visible = true;
    
    
          _this.shapeGrp.x = -500;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.Maintween = _this.add.tween(_this.shapeGrp);
        _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
}
  },
  
  
gotoSecondQuestion:function(){
       
     _this.questioNo = 2;
     _this.getVoice();
  
    
     _this.shapeGrp=_this.add.group();
    
     _this.image1 =_this.add.sprite(155,190,'sg_s16'); 
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="rightAns"; 
     _this.image1.inputEnabled = true
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
  
    _this.image2 =_this.add.sprite(400,190,'sg_s14');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 =_this.add.sprite(640,195,'sg_s20');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.9,0.9);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(155,420,'sg_s12');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(400,420,'sg_s18');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.9,0.9);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
        
    _this.image6 =_this.add.sprite(640,420,'sg_s10');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
    _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 4;
         
    _this.rightmark =_this.add.sprite(860,285,'sg_tick');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(0.9,0.9);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
     
    if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
        _this.image6.visible = true;
          
         _this.shapeGrp.x = -500;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.Maintween = _this.add.tween(_this.shapeGrp);
        _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
     }
    
     },
    
gotoThirdQuestion:function(){
       
     _this.questioNo = 3;
      _this.getVoice();
     
    
     _this.image1 =_this.add.sprite(190,180,'sg_s19');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(430,180,'sg_s15');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="rightAns";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(660,175,'sg_s13');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.9,0.9);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(190,400,'sg_s7');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(430,400,'sg_s9');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.9,0.9);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(660,400,'sg_s20');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
            
     _this.shapeGrp.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(860,285,'sg_tick');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(0.9,0.9);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
     
      
     if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
        _this.image6.visible = true;
          
         _this.shapeGrp.x = -500;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.Maintween = _this.add.tween(_this.shapeGrp);
        _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
     }
     
     },
    
    
gotoFourthQuestion:function(){
       
     _this.questioNo = 4;
    
    _this.getVoice();
          
     
     _this.image1 =_this.add.sprite(190,190,'sg_s8');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(430,190,'sg_s7');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(670,190,'sg_s20');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.9,0.9);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(190,410,'sg_s16');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(430,410,'sg_s17');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.9,0.9);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(670,410,'sg_s14');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 1;
         
    _this.rightmark =_this.add.sprite(860,285,'sg_tick');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(0.9,0.9);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
          
         _this.shapeGrp.x = -500;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.Maintween = _this.add.tween(_this.shapeGrp);
        _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
     }
 },
    
gotoFifthQuestion:function(){
       
     _this.questioNo = 5;
     
       _this.getVoice();
       
    
     _this.image1 =_this.add.sprite(170,185,'sg_s18');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(420,185,'sg_s11');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(670,190,'sg_s10');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.9,0.9);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(170,400,'sg_s15');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(420,400,'sg_s12');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.9,0.9);
    _this.image5.name="rightAns";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(670,400,'sg_s16');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 3;
    
    _this.rightmark =_this.add.sprite(880,290,'sg_tick');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(0.9,0.9);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           
         _this.shapeGrp.x = -500;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.Maintween = _this.add.tween(_this.shapeGrp);
        _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
     }
     
    },
    
gotoSixthQuestion:function(){
       
     _this.questioNo = 6;
     
     _this.getVoice();
      
    
     _this.image1 =_this.add.sprite(160,190,'sg_s7');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="rightAns";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(410,190,'sg_s15');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="rightAns";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(660,195,'sg_s19');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.9,0.9);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(160,400,'sg_s9');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(410,400,'sg_s17');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.9,0.9);
    _this.image5.name="rightAns";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(660,400,'sg_s18');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 4;
         
    _this.rightmark =_this.add.sprite(880,290,'sg_tick');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(0.9,0.9);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           
         _this.shapeGrp.x = -500;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.Maintween = _this.add.tween(_this.shapeGrp);
        _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
     }
    
 },
    
     
gotoSeventhQuestion:function(){
      
      _this.questioNo = 7;
   
     _this.getVoice();
       
    
     _this.image1 =_this.add.sprite(170,200,'sg_s1');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(420,200,'sg_s2');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(670,200,'sg_s3');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.9,0.9);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(170,400,'sg_s4');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(420,400,'sg_s6');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.9,0.9);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(670,400,'sg_s5');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 2;
         
    _this.rightmark =_this.add.sprite(860,285,'sg_tick');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(0.9,0.9);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
          
         _this.shapeGrp.x = -500;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.Maintween = _this.add.tween(_this.shapeGrp);
        _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
     }
     
  },
  
gotoEighthQuestion:function(){
    
    _this.questioNo = 8;
     
       _this.getVoice();
     
    
     _this.image1 =_this.add.sprite(170,200,'sg_s3');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(420,200,'sg_s1');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(670,200,'sg_s2');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.9,0.9);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(170,400,'sg_s6');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(420,400,'sg_s5');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.9,0.9);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(670,400,'sg_s4');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 1;
        
    _this.rightmark =_this.add.sprite(890,330,'sg_tick');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(0.9,0.9);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           
         _this.shapeGrp.x = -500;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.Maintween = _this.add.tween(_this.shapeGrp);
        _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
     }  
},

    
gotoNinthQuestion:function(){
    
    _this.questioNo = 9;
    
    _this.getVoice();
     
    
     _this.image1 =_this.add.sprite(170,200,'sg_s6');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(420,200,'sg_s2');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(670,200,'sg_s3');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.9,0.9);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(170,400,'sg_s4');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(420,400,'sg_s5');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.9,0.9);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(670,400,'sg_s1');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 1;
         
    _this.rightmark =_this.add.sprite(860,285,'sg_tick');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(0.9,0.9);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           
         _this.shapeGrp.x = -500;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.Maintween = _this.add.tween(_this.shapeGrp);
        _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
     }  
},
    
    gotoTenthQuestion:function(){
    
    _this.questioNo = 10;
    
        _this.getVoice();
      
    
     _this.image1 =_this.add.sprite(170,200,'sg_s4');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(420,200,'sg_s1');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(670,200,'sg_s6');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.9,0.9);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(170,400,'sg_s3');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(420,400,'sg_s5');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.9,0.9);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(670,400,'sg_s2');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 1;
    
    _this.rightmark =_this.add.sprite(860,285,'sg_tick');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(0.9,0.9);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           
         _this.shapeGrp.x = -500;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.Maintween = _this.add.tween(_this.shapeGrp);
        _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
     }  
},
    
    gotoEleventhQuestion:function(){
    
    _this.questioNo = 11;
    
        _this.getVoice();
    
    
     _this.image1 =_this.add.sprite(170,200,'sg_s5');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(420,200,'sg_s6');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="rightAns";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(670,200,'sg_s3');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.9,0.9);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(170,400,'sg_s1');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(420,400,'sg_s2');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.9,0.9);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(670,400,'sg_s4');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 1;
    
    _this.rightmark =_this.add.sprite(860,285,'sg_tick');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(0.9,0.9);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           
         _this.shapeGrp.x = -500;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.Maintween = _this.add.tween(_this.shapeGrp);
        _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
     }  
},
    
    gotoTwelvethQuestion:function(){
    
    _this.questioNo = 12;
    
      _this.getVoice();
      
    
     _this.image1 =_this.add.sprite(170,200,'sg_s1');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(420,200,'sg_s5');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="rightAns";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(670,200,'sg_s2');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.9,0.9);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(170,400,'sg_s3');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(420,400,'sg_s4');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.9,0.9);
    _this.image5.name="rightAns";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(670,400,'sg_s6');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 2;
         
    _this.rightmark =_this.add.sprite(860,285,'sg_tick');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(0.9,0.9);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           
         _this.shapeGrp.x = -500;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.Maintween = _this.add.tween(_this.shapeGrp);
        _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
     }  
},

 update:function()
    {

       // _this.physics.arcade.collide([_this.image1,_this.image2,_this.image3,_this.image4,_this.image5]);
        _this.physics.arcade.collide([_this.shapeGrp]);

    },
    
    unselect:function(target){
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 
        target.events.onInputDown.removeAll();
        target.frame=0;
        target.events.onInputDown.add(_this.clicked,_this);
        
    },
    
    clicked:function(target){
         console.log(target.name);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 
         target.frame=1;
         target.events.onInputDown.add(_this.unselect,_this);
        
        _this.rightmark.events.onInputDown.add(function(target){
            target.events.onInputDown.removeAll();
            _this.rightmark.frame=1;
           var correct = true;
            var temps = [];
            var temp = 0;
            //var temp1 = 0;
            _this.wrongshapeGrp = this.add.group();
            console.log(_this.shapeGrp.length);
           
            for(var i=0;i<_this.shapeGrp.length;i++)
                {
                    
                     console.log(_this.shapeGrp.getAt(i).name,_this.shapeGrp.getAt(i).frame);
                     if(_this.shapeGrp.getAt(i).name!="rightAns" && _this.shapeGrp.getAt(i).frame == 1)
                    {
                        correct = false;
                         temps.push(this.shapeGrp.getAt(i));                      
                    }
                    else if(_this.shapeGrp.getAt(i).name=="rightAns" && _this.shapeGrp.getAt(i).frame == 1)
                    {
                        temp++;                 
                    }
                }
                
            
            console.log(temps);
            
            for(var j=0;j<temps.length;j++)
            {
               _this.wrongshapeGrp.add(temps[j]); 
            }
             
            
            console.log(correct,temp,temp==_this.shapeGrp.rightCount);
            
            if(correct && temp==_this.shapeGrp.rightCount)
             {
                 if(_this.questioNo == 1)
                     {
                         _this.anim2=_this.image2.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image3.animations.add('move');
                         _this.anim3.play(3,true);
                         _this.anim4=_this.image6.animations.add('move');
                         _this.anim4.play(3,true);
                         _this.correctAns();
                     }
            
            
                 if(_this.questioNo == 2)
                     {
                         _this.anim1=_this.image1.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image3.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image4.animations.add('move');
                         _this.anim3.play(3,true);
                         _this.anim4=_this.image6.animations.add('move');
                         _this.anim4.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 3)
                     {
                         _this.anim1=_this.image2.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image4.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 4)
                     {
                         _this.anim1=_this.image6.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.correctAns();
                     }
                  if(_this.questioNo == 5)
                     {
                         _this.anim1=_this.image3.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image5.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image6.animations.add('move');
                         _this.anim3.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 6)
                     {
                         _this.anim1=_this.image1.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image2.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image5.animations.add('move');
                         _this.anim3.play(3,true);
                         _this.anim4=_this.image6.animations.add('move');
                         _this.anim4.play(3,true);
                         _this.correctAns();
                     }
                if(_this.questioNo == 7)
                     {
                         _this.anim1=_this.image4.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image6.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.correctAns();
                     }
                if(_this.questioNo == 8)
                     {
                         _this.anim1=_this.image3.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.correctAns();
                     }
                if(_this.questioNo == 9)
                     {
                         _this.anim1=_this.image6.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 10)
                     {
                         _this.anim1=_this.image4.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.correctAns();
                     }
                if(_this.questioNo == 11)
                     {
                         _this.anim1=_this.image2.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.correctAns();
                     }
                if(_this.questioNo == 12)
                     {
                         _this.anim1=_this.image2.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image5.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.correctAns();
                     }
             }
            
         else
            {
                
               _this.shake.shake(10, _this.wrongshapeGrp); 
                 _this.wrongAns1();
                
            }
        },_this);
            
    },        
         
    removeCelebration:function()
	{

        console.log("removeCeleb");
		_this.celebration = false;
		console.log("no"+_this.no11);
        _this.correct=0;
        _this.count=0;
       
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.no11++;
		   
		  if(_this.no11<6)
                    {
                        _this.wrong = true;
                                               
                        _this.starsGroup.getChildAt(_this.count1).frame = 2;
                        
                          if(_this.shapeGrp)
                        {
                          _this.shapeGrp.destroy();
                         }
                          if(_this.rightmark)
                             {
                                 _this.rightmark.destroy();
                             }
                        
                        if(_this.wrongshapeGrp)
                            {
                                _this.wrongshapeGrp.destroy();
                            }
                        
                         
                         _this.time.events.add(1000, function(){  
                         _this.getQuestion();
                         },_this);
                    
                    }
        
                else
                    {
                         _this.counterForTimer = null;
                         _this.stopvoice();
                         //_this.timer1=null;
                         _this.state.start('sg21_3_6Score',true,false);
                  }

	},
    
 correctAns:function(target)
	{
       // _this.stopvoice();
       // _this.rightmark.frame=1:

       if(_this.shapeGrp)
                        {
                          _this.shapeGrp.setAll("inputEnabled",false);
                         }
        //target.events.onInputDown.removeAll(); 
      
        _this.noofAttempts++;
                
			var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar,
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: "level1", 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);

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

		var currentTime = window.timeSaveFunc();
				var saveAsment = 
				{ 
					id_game_play: _this.savedVar,
					id_question: _this.questionid,   
					pass: "Yes",
					time2answer: _this.AnsTimerCount,
					attempts: _this.noofAttempts,
					date_time_submission: currentTime, 
					access_token: window.acctkn 
				}

                _this.questionid = 1;
                _this.sceneCount++;
         telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
              // absdsjsapi.saveAssessment(_this.saveAsment);

        _this.wrongAnswer = false;
     
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		console.log(_this.starAnim);
        
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();   
		 console.log("correct11");
       // _this.speaker.inputEnabled=false;
        _this.count1++;
       
		_this.celebration = true;
        
        _this.click3 = _this.add.audio('ClickSound');
        _this.click3.play();
     	_this.cmusic = _this.add.audio('celebr');
		_this.cmusic.play();
        
		
        _this.time.events.add(3000, _this.removeCelebration, _this);


		//console.log(target);
        
	},

 
     wrongAns1:function(target)
	{
        if(_this.timer1)
        {
            _this.timer1.stop();
            _this.timer1 = null;
        }
        //_this.stopvoice();
        _this.noofAttempts++;
        ////console.log("wrong");
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ");

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        // this.timer= this.time.create(false);
         _this.wrongAnswer = true;

		_this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        
        
        _this.time.events.add(1000, function(){
        _this.shapeGrp.destroy();
        //_this.shapeGrp1.destroy();
        _this.wrongshapeGrp.destroy();
             //_this.wrongshapeGrp.setAll('frame', 0);
             //_this.shapeGrp.setAll('frame', 0);
        _this.rightmark.frame = 0;
            _this.rightmark.destroy();
        _this.getQuestion();
            
        },_this);
    
        	
       // target.events.onInputDown.removeAll();
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
        switch(_this.temp2)
            {
                case 1:
                case 4:
                case 7:
                case 12:if(window.languageSelected=="English"){
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/English/sg21.3.6aE.mp3");
                        }
                        else if(window.languageSelected=="Hindi"){
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Hindi/sg21.3.6aH.mp3");
                        }
                        else if(window.languageSelected=="Kannada"){
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Kannada/sg21.3.6aK.mp3");
                        }
					   else if(window.languageSelected=="Gujarati")
					   {
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Gujarati/sg21.3.6aG.mp3");
							//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
					   }
					   else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Marathi/sg21.3.6a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Telugu/sg21.3.6a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Tamil/sg21.3.6a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Urdu/sg21.3.6a.mp3");
                    }
                       else
                       {
                            this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Odiya/sg21.3.6a.mp3");
                       }
                        break;
                case 2:
                case 5:
                case 8:if(window.languageSelected=="English"){
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/English/sg21.3.6bE.mp3");
                        }
                        else if(window.languageSelected=="Hindi"){
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Hindi/sg21.3.6bH.mp3");
                        }
                        else if(window.languageSelected=="Kannada"){
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Kannada/sg21.3.6bK.mp3");
                        }
					   else if(window.languageSelected=="Gujarati")
					   {
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Gujarati/sg21.3.6bG.mp3");
							//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
					   }
					   else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Marathi/sg21.3.6b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Telugu/sg21.3.6b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Tamil/sg21.3.6b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Urdu/sg21.3.6b.mp3");
                    }
                       else
                       {
                            this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Odiya/sg21.3.6b.mp3");
                       }
                        break;
                case 3:
                case 6:
                case 9:if(window.languageSelected=="English"){
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/English/sg21.3.6cE.mp3");
                        }
                        else if(window.languageSelected=="Hindi"){
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Hindi/sg21.3.6cH.mp3");
                        }
                        else if(window.languageSelected=="Kannada"){
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Kannada/sg21.3.6cK.mp3");
                        }
					   else if(window.languageSelected=="Gujarati")
					   {
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Gujarati/sg21.3.6cG.mp3");
							//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
					   }
					   else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Marathi/sg21.3.6c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Telugu/sg21.3.6c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Tamil/sg21.3.6c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Urdu/sg21.3.6c.mp3");
                    }
                       else
                       {
                            this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Odiya/sg21.3.6c.mp3");
                       }
                        break;
                case 10:if(window.languageSelected=="English"){
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/English/sg21.3.6dE.mp3");
                        }
                        else if(window.languageSelected=="Hindi"){
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Hindi/sg21.3.6dH.mp3");
                        }
                        else if(window.languageSelected=="Kannada"){
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Kannada/sg21.3.6dK.mp3");
                        }
					   else if(window.languageSelected=="Gujarati")
					   {
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Gujarati/sg21.3.6dG.mp3");
							//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
					   }
					   else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Marathi/sg21.3.6d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Telugu/sg21.3.6d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Tamil/sg21.3.6d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Urdu/sg21.3.6d.mp3");
                    }
                       else
                       {
                            this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Odiya/sg21.3.6d.mp3");
                       }
                        break;
                    
                case 11:if(window.languageSelected=="English"){
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/English/sg21.3.6eE.mp3");
                        }
                        else if(window.languageSelected=="Hindi"){
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Hindi/sg21.3.6eH.mp3");
                        }
                        else if(window.languageSelected=="Kannada"){
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Kannada/sg21.3.6eK.mp3");
                        }
					   else if(window.languageSelected=="Gujarati")
					   {
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Gujarati/sg21.3.6eG.mp3");
							//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
					   }
					   else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Marathi/sg21.3.6e.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Telugu/sg21.3.6e.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Tamil/sg21.3.6e.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Urdu/sg21.3.6e.mp3");
                    }
                       else
                       {
                            this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.6/Odiya/sg21.3.6e.mp3");
                       }
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
 