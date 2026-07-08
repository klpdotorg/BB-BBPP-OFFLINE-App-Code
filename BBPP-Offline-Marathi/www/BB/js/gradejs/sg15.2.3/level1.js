Game.sg15_2_3level1=function(){};

Game.sg15_2_3level1.prototype={
    init:function(game)
    {
       _this = this;
       
       telInitializer.gameIdInit("SG15_2_3",gradeSelected);
       
    },

    preload:function(game){
        if(!window.grade3SG5){

            window.grade3SG5 = true;

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
        this.load.image('SG15_2_3backg',window.baseUrl+'assets/gradeAssets/sg15.2.3/backg.png');
        this.load.image('SG15_2_3Bg1',window.baseUrl+'assets/gradeAssets/sg15.2.3/Bg1.png');
        this.load.image('SG15_2_3Bg2',window.baseUrl+'assets/gradeAssets/sg15.2.3/Bg2.png');
        this.load.image('SG15_2_3Bg3',window.baseUrl+'assets/gradeAssets/sg15.2.3/Bg3.png');
        this.load.image('SG15_2_3Bg4',window.baseUrl+'assets/gradeAssets/sg15.2.3/Bg4.png');
        this.load.image('SG15_2_3Bg5',window.baseUrl+'assets/gradeAssets/sg15.2.3/Bg5.png');
        this.load.image('SG15_2_3Bg6',window.baseUrl+'assets/gradeAssets/sg15.2.3/Bg6.png');
        this.load.image('SG15_2_3direction',window.baseUrl+'assets/gradeAssets/sg15.2.3/direction.png');
        this.load.atlas('SG15_2_3object1',window.baseUrl+'assets/gradeAssets/sg15.2.3/object1.png',window.baseUrl+'json/gradeJson/sg15.2.3/object1.json');
        this.load.atlas('SG15_2_3object2',window.baseUrl+'assets/gradeAssets/sg15.2.3/object2.png',window.baseUrl+'json/gradeJson/sg15.2.3/object2.json');
        this.load.atlas('SG15_2_3object3',window.baseUrl+'assets/gradeAssets/sg15.2.3/object3.png',window.baseUrl+'json/gradeJson/sg15.2.3/object3.json');
        this.load.atlas('SG15_2_3object4',window.baseUrl+'assets/gradeAssets/sg15.2.3/object4.png',window.baseUrl+'json/gradeJson/sg15.2.3/object4.json');
        this.load.atlas('SG15_2_3object5',window.baseUrl+'assets/gradeAssets/sg15.2.3/object5.png',window.baseUrl+'json/gradeJson/sg15.2.3/object5.json');
        this.load.atlas('SG15_2_3object6',window.baseUrl+'assets/gradeAssets/sg15.2.3/object6.png',window.baseUrl+'json/gradeJson/sg15.2.3/object6.json');
        this.load.atlas('SG15_2_3object7',window.baseUrl+'assets/gradeAssets/sg15.2.3/object7.png',window.baseUrl+'json/gradeJson/sg15.2.3/object7.json');
        this.load.atlas('SG15_2_3object8',window.baseUrl+'assets/gradeAssets/sg15.2.3/object8.png',window.baseUrl+'json/gradeJson/sg15.2.3/object8.json');
        this.load.atlas('SG15_2_3box',window.baseUrl+'assets/gradeAssets/sg15.2.3/box.png',window.baseUrl+'json/gradeJson/sg15.2.3/box.json');
        this.load.atlas('SG15_2_3down',window.baseUrl+'assets/gradeAssets/sg15.2.3/down.png',window.baseUrl+'json/gradeJson/sg15.2.3/down.json');
        this.load.atlas('SG15_2_3up',window.baseUrl+'assets/gradeAssets/sg15.2.3/up.png',window.baseUrl+'json/gradeJson/sg15.2.3/up.json');
        this.load.atlas('SG15_2_3left',window.baseUrl+'assets/gradeAssets/sg15.2.3/left.png',window.baseUrl+'json/gradeJson/sg15.2.3/left.json');
        this.load.atlas('SG15_2_3right',window.baseUrl+'assets/gradeAssets/sg15.2.3/right.png',window.baseUrl+'json/gradeJson/sg15.2.3/right.json');
        this.load.atlas('SG15_2_3KidAnim',window.baseUrl+'assets/gradeAssets/sg15.2.3/KidAnim.png',window.baseUrl+'json/gradeJson/sg15.2.3/KidAnim.json');
        this.load.atlas('SG15_2_3KidAnim1',window.baseUrl+'assets/gradeAssets/sg15.2.3/KidAnim1.png',window.baseUrl+'json/gradeJson/sg15.2.3/KidAnim1.json');
        this.load.atlas('SG15_2_3KidAnim2',window.baseUrl+'assets/gradeAssets/sg15.2.3/KidAnim2.png',window.baseUrl+'json/gradeJson/sg15.2.3/KidAnim2.json');
        this.load.atlas('SG15_2_3KidAnim3',window.baseUrl+'assets/gradeAssets/sg15.2.3/KidAnim3.png',window.baseUrl+'json/gradeJson/sg15.2.3/KidAnim3.json');
        this.load.atlas('SG15_2_3KidAnim4',window.baseUrl+'assets/gradeAssets/sg15.2.3/KidAnim4.png',window.baseUrl+'json/gradeJson/sg15.2.3/KidAnim4.json');
        this.load.atlas('SG15_2_3KidAnim5',window.baseUrl+'assets/gradeAssets/sg15.2.3/KidAnim5.png',window.baseUrl+'json/gradeJson/sg15.2.3/KidAnim5.json');


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
        _this.up = 0;
        _this.down = 0;
        _this.right = 0;
        _this.left = 0;
        _this.celebration= false;
        
        _this.qArrays = new Array();    
        
        //_this.qArrays = [1,2,3,4,5,6,7,8];
        _this.qArrays = [1,2,4,5,6,7,8];
        _this.qArrays = _this.shuffle(_this.qArrays);
        
        console.log(_this.qArrays);

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'SG15_2_3backg');
        _this.background.scale.setTo(1,1.1);
        
        
        
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
        
         _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/English/sg15.2.3aE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Hindi/sg15.2.3aH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Kannada/sg15.2.3aK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Gujrati/sg15.2.3a.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Marathi/sg15.1.3q_A.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Telugu/sg15.1.3q_A.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Tamil/sg15.1.3q_A.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Urdu/sg15.1.3q_A.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Odiya/sg15.2.3a.mp3");
                    }
                   
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
          
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
           // case 9: _this.gotoNinthQuestion();
    			//	break;  

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

loadobjects:function(){
    
    _this.image2 = _this.add.sprite(745,50,'SG15_2_3direction');
    _this.image2.name="img2";
    
    _this.direction1 = _this.add.sprite(850,100,'SG15_2_3up');
    _this.direction1.name="direction1"; 
    _this.direction1.inputEnabled = true;
    _this.direction1.input.useHandCursor = true;
    _this.direction1.events.onInputDown.add(_this.selected1,_this);
    
    _this.direction2 = _this.add.sprite(850,200,'SG15_2_3down');
    _this.direction2.name="direction2";
    _this.direction2.inputEnabled = true;
    _this.direction2.input.useHandCursor = true;
    _this.direction2.events.onInputDown.add(_this.selected2,_this);
    
    _this.direction3 = _this.add.sprite(850,300,'SG15_2_3right');
    _this.direction3.name="direction3";
    _this.direction3.inputEnabled = true;
    _this.direction3.input.useHandCursor = true;
    _this.direction3.events.onInputDown.add(_this.selected3,_this);
    
    _this.direction4 = _this.add.sprite(850,400,'SG15_2_3left');
    _this.direction4.name="direction4";
    _this.direction4.inputEnabled = true;
    _this.direction4.input.useHandCursor = true;
    _this.direction4.events.onInputDown.add(_this.selected4,_this); 
    
    
},
    
    
gotoFirstQuestion:function(){
       
     _this.questioNo = 1;
   
     if( _this.no11==0)   
        {               
            _this.time.events.add(9000, function(){_this.getVoice();},_this);
        }
        else
        {
            _this.getVoice();
        }
     
     _this.ObjectGrp=_this.add.group();
      
     _this.ObjectGrp.x = -1000;
      var tween = _this.add.tween(_this.ObjectGrp);
     tween.to({ x: 0 }, 2500,'Linear', true, 0);
    
     _this.image1 = _this.add.sprite(27,70,'SG15_2_3Bg1');
     _this.image1.name="img1";
     
     _this.loadobjects();
     
     _this.dog = _this.add.sprite(700,75,'SG15_2_3object1');
     _this.dog.name="img3";
     _this.dog.inputEnabled = true;
     _this.dog.input.useHandCursor = true;
     
     _this.jointwheel = _this.add.sprite(175,425,'SG15_2_3object2');
     _this.jointwheel.name="img4";
     _this.jointwheel.inputEnabled = true;
     _this.jointwheel.input.useHandCursor = true;
     
     _this.watertank = _this.add.sprite(490,440,'SG15_2_3object3');
     _this.watertank.name="img5";
     _this.watertank.inputEnabled = true;
     _this.watertank.input.useHandCursor = true;
     
     _this.tree = _this.add.sprite(332,65,'SG15_2_3object4');
     _this.tree.scale.setTo(0.9,0.9); 
     _this.tree.name="img6";
     _this.tree.inputEnabled = true;
     _this.tree.input.useHandCursor = true;
     
     _this.elephant = _this.add.sprite(695,370,'SG15_2_3object5');
     _this.elephant.name="img7";
     _this.elephant.inputEnabled = true;
     _this.elephant.input.useHandCursor = true;
     
     _this.jeep = _this.add.sprite(80,70,'SG15_2_3object6');
     _this.jeep.name="img8";
     _this.jeep.inputEnabled = true;
     _this.jeep.input.useHandCursor = true;
     
     _this.dove = _this.add.sprite(20,360,'SG15_2_3object7');
     _this.dove.name="img9";
     _this.dove.inputEnabled = true;
     _this.dove.input.useHandCursor = true;
    
     _this.cat = _this.add.sprite(470,150,'SG15_2_3object8');
     _this.cat.name="img10";
     _this.cat.inputEnabled = true;
     _this.cat.input.useHandCursor = true;
     
     _this.kidAnim1 = _this.add.sprite(345,200,'SG15_2_3KidAnim');
     _this.kidAnim1.frame=0;
     _this.kidAnim1.name="kidAnim1"; 
    
     _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(635, 0, 20, 20);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "graphic1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(105, 360, 20, 20);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "graphic2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(410, 370, 20, 20);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "graphic3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(260, -10, 20, 20);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "graphic4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(640, 290, 20, 20);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "graphic5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(25, -10, 30, 30);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "graphic6";
    
     _this.graphics7 = _this.add.graphics(100, 100);       
     _this.graphics7.lineStyle(2, 0x0000FF, 1);
     _this.graphics7.drawRect(-50, 285, 20, 20);
     _this.graphics7.alpha=0;
     _this.graphics7.name = "graphic7";
    
     _this.graphics8 = _this.add.graphics(100, 100);       
     _this.graphics8.lineStyle(2, 0x0000FF, 1);
     _this.graphics8.drawRect(410, 70, 20, 20);
     _this.graphics8.alpha=0;
     _this.graphics8.name = "graphic8";
    
     _this.rightans=2;
    
     _this.ObjectGrp.add(_this.image1);
     _this.ObjectGrp.add(_this.image2);
     _this.ObjectGrp.add(_this.dog);
     _this.ObjectGrp.add(_this.jointwheel);
     _this.ObjectGrp.add(_this.watertank);
     _this.ObjectGrp.add(_this.tree);
     _this.ObjectGrp.add(_this.elephant);
     _this.ObjectGrp.add(_this.jeep);
     _this.ObjectGrp.add(_this.dove);
     _this.ObjectGrp.add(_this.cat);
     _this.ObjectGrp.add(_this.direction1);
     _this.ObjectGrp.add(_this.direction2);
     _this.ObjectGrp.add(_this.direction3);
     _this.ObjectGrp.add(_this.direction4);
     _this.ObjectGrp.add(_this.kidAnim1);
     _this.ObjectGrp.add(_this.graphics1);
     _this.ObjectGrp.add(_this.graphics2);
     _this.ObjectGrp.add(_this.graphics3);
     _this.ObjectGrp.add(_this.graphics4);
     _this.ObjectGrp.add(_this.graphics5);
     _this.ObjectGrp.add(_this.graphics6);
     _this.ObjectGrp.add(_this.graphics7);
     _this.ObjectGrp.add(_this.graphics8);
       
  },
    
gotoSecondQuestion:function(){
    
    _this.questioNo = 2;
   
     if( _this.no11==0)   
        {               
            _this.time.events.add(9000, function(){_this.getVoice();},_this);
        }
        else
        {
            _this.getVoice();
        }
     
     _this.ObjectGrp=_this.add.group();
      
     _this.ObjectGrp.x = -1000;
      var tween = _this.add.tween(_this.ObjectGrp);
     tween.to({ x: 0 }, 2500,'Linear', true, 0);
    
     _this.image1 = _this.add.sprite(27,70,'SG15_2_3Bg3');
     _this.image1.name="img1";
     
     _this.loadobjects();
     
     _this.dog = _this.add.sprite(92,435,'SG15_2_3object1');
     _this.dog.name="img3";
     _this.dog.inputEnabled = true;
     _this.dog.input.useHandCursor = true;
     
     _this.jointwheel = _this.add.sprite(705,350,'SG15_2_3object2');
     _this.jointwheel.name="img4";
     _this.jointwheel.inputEnabled = true;
     _this.jointwheel.input.useHandCursor = true;
     
     _this.watertank = _this.add.sprite(413,70,'SG15_2_3object3');
     _this.watertank.name="img5";
     _this.watertank.inputEnabled = true;
     _this.watertank.input.useHandCursor = true;
     
     _this.tree = _this.add.sprite(560,432,'SG15_2_3object4');
     _this.tree.name="img6";
     _this.tree.scale.setTo(0.9,0.9); 
     _this.tree.inputEnabled = true;
     _this.tree.input.useHandCursor = true;
     
     _this.elephant = _this.add.sprite(240,73,'SG15_2_3object5');
     _this.elephant.name="img7";
     _this.elephant.inputEnabled = true;
     _this.elephant.input.useHandCursor = true;
     
     _this.jeep = _this.add.sprite(310,440,'SG15_2_3object6');
     _this.jeep.name="img8";
     _this.jeep.inputEnabled = true;
     _this.jeep.input.useHandCursor = true;
     
     _this.dove = _this.add.sprite(20,137,'SG15_2_3object7');
     _this.dove.name="img9";
     _this.dove.inputEnabled = true;
     _this.dove.input.useHandCursor = true;
     
     _this.cat = _this.add.sprite(20,295,'SG15_2_3object8');
     _this.cat.name="img10";
     _this.cat.inputEnabled = true;
     _this.cat.input.useHandCursor = true;
     
     _this.kidAnim1 = _this.add.sprite(575,125,'SG15_2_3KidAnim');
     _this.kidAnim1.frame=0;
     _this.kidAnim1.name="kidAnim1"; 
    
     _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(20, 370, 20, 20);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "graphic1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(640, 280, 20, 20);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "graphic2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(330, 0, 20, 20);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "graphic3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(490, 370, 20, 20);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "graphic4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(180, 0, 20, 20);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "graphic5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(260, 370, 30, 30);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "graphic6";
    
     _this.graphics7 = _this.add.graphics(100, 100);       
     _this.graphics7.lineStyle(2, 0x0000FF, 1);
     _this.graphics7.drawRect(-50, 75, 20, 20);
     _this.graphics7.alpha=0;
     _this.graphics7.name = "graphic7";
    
     _this.graphics8 = _this.add.graphics(100, 100);       
     _this.graphics8.lineStyle(2, 0x0000FF, 1);
     _this.graphics8.drawRect(-40, 220, 20, 20);
     _this.graphics8.alpha=0;
     _this.graphics8.name = "graphic8";
    
     _this.rightans=3;
     _this.rightans1=2;
    
     _this.ObjectGrp.add(_this.image1);
     _this.ObjectGrp.add(_this.image2);
     _this.ObjectGrp.add(_this.dog);
     _this.ObjectGrp.add(_this.jointwheel);
     _this.ObjectGrp.add(_this.watertank);
     _this.ObjectGrp.add(_this.tree);
     _this.ObjectGrp.add(_this.elephant);
     _this.ObjectGrp.add(_this.jeep);
     _this.ObjectGrp.add(_this.dove);
     _this.ObjectGrp.add(_this.cat);
     _this.ObjectGrp.add(_this.direction1);
     _this.ObjectGrp.add(_this.direction2);
     _this.ObjectGrp.add(_this.direction3);
     _this.ObjectGrp.add(_this.direction4);
     _this.ObjectGrp.add(_this.kidAnim1);
     _this.ObjectGrp.add(_this.graphics1);
     _this.ObjectGrp.add(_this.graphics2);
     _this.ObjectGrp.add(_this.graphics3);
     _this.ObjectGrp.add(_this.graphics4);
     _this.ObjectGrp.add(_this.graphics5);
     _this.ObjectGrp.add(_this.graphics6);
     _this.ObjectGrp.add(_this.graphics7);
     _this.ObjectGrp.add(_this.graphics8);
    
},

gotoThirdQuestion:function(){
    
   _this.questioNo = 3;
   
    if( _this.no11==0)   
        {               
            _this.time.events.add(9000, function(){_this.getVoice();},_this);
        }
        else
        {
            _this.getVoice();
        }
     
     _this.ObjectGrp=_this.add.group();
      
     _this.ObjectGrp.x = -1000;
      var tween = _this.add.tween(_this.ObjectGrp);
     tween.to({ x: 0 }, 2500,'Linear', true, 0);
    
     _this.image1 = _this.add.sprite(27,70,'SG15_2_3Bg4');
     _this.image1.name="img1";
     
     _this.loadobjects();
     
     _this.dog = _this.add.sprite(17,435,'SG15_2_3object1');
     _this.dog.name="img3";
     _this.dog.inputEnabled = true;
     _this.dog.input.useHandCursor = true;
     
     _this.jointwheel = _this.add.sprite(705,130,'SG15_2_3object2');
     _this.jointwheel.name="img4";
     _this.jointwheel.inputEnabled = true;
     _this.jointwheel.input.useHandCursor = true;
     
     _this.watertank = _this.add.sprite(338,440,'SG15_2_3object3');
     _this.watertank.name="img5";
     _this.watertank.inputEnabled = true;
     _this.watertank.input.useHandCursor = true;
     
     _this.tree = _this.add.sprite(483,135,'SG15_2_3object4');
     _this.tree.name="img6";
     _this.tree.scale.setTo(0.9,0.9);
     _this.tree.inputEnabled = true;
     _this.tree.input.useHandCursor = true;
     
     _this.elephant = _this.add.sprite(545,365,'SG15_2_3object5');
     _this.elephant.name="img7";
     _this.elephant.inputEnabled = true;
     _this.elephant.input.useHandCursor = true;
     
     _this.jeep = _this.add.sprite(60,220,'SG15_2_3object6');
     _this.jeep.name="img8";
     _this.jeep.inputEnabled = true;
     _this.jeep.input.useHandCursor = true;
     
     _this.dove = _this.add.sprite(170,65,'SG15_2_3object7');
     _this.dove.name="img9";
     _this.dove.inputEnabled = true;
     _this.dove.input.useHandCursor = true;
     
     _this.cat = _this.add.sprite(165,295,'SG15_2_3object8');
     _this.cat.name="img10";
     _this.cat.inputEnabled = true;
     _this.cat.input.useHandCursor = true;
     
     _this.kidAnim1 = _this.add.sprite(345,125,'SG15_2_3KidAnim');
     _this.kidAnim1.frame=0;
     _this.kidAnim1.name="kidAnim1"; 
    
    _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(-40, 370, 20, 20);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "graphic1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(640, 70, 20, 20);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "graphic2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(255, 370, 20, 20);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "graphic3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(410, 70, 20, 20);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "graphic4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(480, 290, 20, 20);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "graphic5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(15, 135, 30, 30);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "graphic6";
    
     _this.graphics7 = _this.add.graphics(100, 100);       
     _this.graphics7.lineStyle(2, 0x0000FF, 1);
     _this.graphics7.drawRect(110, 0, 20, 20);
     _this.graphics7.alpha=0;
     _this.graphics7.name = "graphic7";
    
     _this.graphics8 = _this.add.graphics(100, 100);       
     _this.graphics8.lineStyle(2, 0x0000FF, 1);
     _this.graphics8.drawRect(110, 220, 20, 20);
     _this.graphics8.alpha=0;
     _this.graphics8.name = "graphic8";
    
     _this.rightans=1;
     _this.rightans1=3;
    
     _this.ObjectGrp.add(_this.image1);
     _this.ObjectGrp.add(_this.image2);
     _this.ObjectGrp.add(_this.dog);
     _this.ObjectGrp.add(_this.jointwheel);
     _this.ObjectGrp.add(_this.watertank);
     _this.ObjectGrp.add(_this.tree);
     _this.ObjectGrp.add(_this.elephant);
     _this.ObjectGrp.add(_this.jeep);
     _this.ObjectGrp.add(_this.dove);
     _this.ObjectGrp.add(_this.cat);
     _this.ObjectGrp.add(_this.direction1);
     _this.ObjectGrp.add(_this.direction2);
     _this.ObjectGrp.add(_this.direction3);
     _this.ObjectGrp.add(_this.direction4);
     _this.ObjectGrp.add(_this.kidAnim1);
     _this.ObjectGrp.add(_this.graphics1);
     _this.ObjectGrp.add(_this.graphics2);
     _this.ObjectGrp.add(_this.graphics3);
     _this.ObjectGrp.add(_this.graphics4);
     _this.ObjectGrp.add(_this.graphics5);
     _this.ObjectGrp.add(_this.graphics6);
     _this.ObjectGrp.add(_this.graphics7);
     _this.ObjectGrp.add(_this.graphics8);
    
},

gotoFourthQuestion:function(){
    
    _this.questioNo = 4;
   
     if( _this.no11==0)   
        {               
            _this.time.events.add(9000, function(){_this.getVoice();},_this);
        }
        else
        {
            _this.getVoice();
        }
     
     _this.ObjectGrp=_this.add.group();
      
     _this.ObjectGrp.x = -1000;
      var tween = _this.add.tween(_this.ObjectGrp);
     tween.to({ x: 0 }, 2500,'Linear', true, 0);
    
     _this.image1 = _this.add.sprite(27,70,'SG15_2_3Bg6');
     _this.image1.name="img1";
     
     _this.loadobjects();
     
     _this.dog = _this.add.sprite(320,70,'SG15_2_3object1');
     _this.dog.name="img3";
     _this.dog.inputEnabled = true;
     _this.dog.input.useHandCursor = true;
     
     _this.jointwheel = _this.add.sprite(705,280,'SG15_2_3object2');
     _this.jointwheel.name="img4";
     _this.jointwheel.inputEnabled = true;
     _this.jointwheel.input.useHandCursor = true;
     
     _this.watertank = _this.add.sprite(640,440,'SG15_2_3object3');
     _this.watertank.name="img5";
     _this.watertank.inputEnabled = true;
     _this.watertank.input.useHandCursor = true;
     
     _this.tree = _this.add.sprite(28,430,'SG15_2_3object4');
     _this.tree.name="img6";
     _this.tree.scale.setTo(0.9,0.9);
     _this.tree.inputEnabled = true;
     _this.tree.input.useHandCursor = true;
     
     _this.elephant = _this.add.sprite(20,150,'SG15_2_3object5');
     _this.elephant.name="img7";
     _this.elephant.inputEnabled = true;
     _this.elephant.input.useHandCursor = true;
     
     _this.jeep = _this.add.sprite(230,440,'SG15_2_3object6');
     _this.jeep.name="img8";
     _this.jeep.inputEnabled = true;
     _this.jeep.input.useHandCursor = true;
     
     _this.dove = _this.add.sprite(630,65,'SG15_2_3object7');
     _this.dove.name="img9";
     _this.dove.inputEnabled = true;
     _this.dove.input.useHandCursor = true;
     
     _this.cat = _this.add.sprite(470,440,'SG15_2_3object8');
     _this.cat.name="img10";
     _this.cat.inputEnabled = true;
     _this.cat.input.useHandCursor = true;
     
     _this.kidAnim1 = _this.add.sprite(500,200,'SG15_2_3KidAnim');
     _this.kidAnim1.frame=0;
     _this.kidAnim1.name="kidAnim1"; 
    
     _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(255, -5, 20, 20);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "graphic1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(635, 215, 20, 20);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "graphic2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(560, 370, 20, 20);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "graphic3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(-50, 370, 20, 20);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "graphic4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(-50, 70, 20, 20);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "graphic5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(180, 360, 30, 30);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "graphic6";
    
     _this.graphics7 = _this.add.graphics(100, 100);       
     _this.graphics7.lineStyle(2, 0x0000FF, 1);
     _this.graphics7.drawRect(560, 0, 20, 20);
     _this.graphics7.alpha=0;
     _this.graphics7.name = "graphic7";
    
     _this.graphics8 = _this.add.graphics(100, 100);       
     _this.graphics8.lineStyle(2, 0x0000FF, 1);
     _this.graphics8.drawRect(410, 370, 25, 25);
     _this.graphics8.alpha=0;
     _this.graphics8.name = "graphic8";
    
     _this.rightans=3;
    
     _this.ObjectGrp.add(_this.image1);
     _this.ObjectGrp.add(_this.image2);
     _this.ObjectGrp.add(_this.dog);
     _this.ObjectGrp.add(_this.jointwheel);
     _this.ObjectGrp.add(_this.watertank);
     _this.ObjectGrp.add(_this.tree);
     _this.ObjectGrp.add(_this.elephant);
     _this.ObjectGrp.add(_this.jeep);
     _this.ObjectGrp.add(_this.dove);
     _this.ObjectGrp.add(_this.cat);
     _this.ObjectGrp.add(_this.direction1);
     _this.ObjectGrp.add(_this.direction2);
     _this.ObjectGrp.add(_this.direction3);
     _this.ObjectGrp.add(_this.direction4);
     _this.ObjectGrp.add(_this.kidAnim1);
     _this.ObjectGrp.add(_this.graphics1);
     _this.ObjectGrp.add(_this.graphics2);
     _this.ObjectGrp.add(_this.graphics3);
     _this.ObjectGrp.add(_this.graphics4);
     _this.ObjectGrp.add(_this.graphics5);
     _this.ObjectGrp.add(_this.graphics6);
     _this.ObjectGrp.add(_this.graphics7);
     _this.ObjectGrp.add(_this.graphics8);
    
},

    
gotoFifthQuestion:function(){
    
    _this.questioNo = 5;
   
    if( _this.no11==0)   
        {               
            _this.time.events.add(9000, function(){_this.getVoice();},_this);
        }
        else
        {
            _this.getVoice();
        }
     
     _this.ObjectGrp=_this.add.group();
      
     _this.ObjectGrp.x = -1000;
      var tween = _this.add.tween(_this.ObjectGrp);
     tween.to({ x: 0 }, 2500,'Linear', true, 0);
    
     _this.image1 = _this.add.sprite(27,70,'SG15_2_3Bg5');
     _this.image1.name="img1";
     
     _this.loadobjects();
     
     _this.dog = _this.add.sprite(470,435,'SG15_2_3object1');
     _this.dog.name="img3";
     _this.dog.inputEnabled = true;
     _this.dog.input.useHandCursor = true;
     
     _this.jointwheel = _this.add.sprite(705,350,'SG15_2_3object2');
     _this.jointwheel.name="img4";
     _this.jointwheel.inputEnabled = true;
     _this.jointwheel.input.useHandCursor = true;
     
     _this.watertank = _this.add.sprite(262,70,'SG15_2_3object3');
     _this.watertank.name="img5";
     _this.watertank.inputEnabled = true;
     _this.watertank.input.useHandCursor = true;
     
     _this.tree = _this.add.sprite(712,135,'SG15_2_3object4');
     _this.tree.name="img6";
     _this.tree.scale.setTo(0.9,0.9); 
     _this.tree.inputEnabled = true;
     _this.tree.input.useHandCursor = true;
     
     _this.elephant = _this.add.sprite(20,220,'SG15_2_3object5');
     _this.elephant.name="img7";
     _this.elephant.inputEnabled = true;
     _this.elephant.input.useHandCursor = true;
     
     _this.jeep = _this.add.sprite(470,70,'SG15_2_3object6');
     _this.jeep.name="img8";
     _this.jeep.inputEnabled = true;
     _this.jeep.input.useHandCursor = true;
     
     _this.dove = _this.add.sprite(20,430,'SG15_2_3object7');
     _this.dove.name="img9";
     _this.dove.inputEnabled = true;
     _this.dove.input.useHandCursor = true;
     
     _this.cat = _this.add.sprite(245,220,'SG15_2_3object8');
     _this.cat.name="img10";
     _this.cat.inputEnabled = true;
     _this.cat.input.useHandCursor = true;
     
     _this.kidAnim1 = _this.add.sprite(420,270,'SG15_2_3KidAnim');
     _this.kidAnim1.frame=0;
     _this.kidAnim1.name="kidAnim1"; 
    
     _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(410, 370, 20, 20);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "graphic1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(635, 280, 20, 20);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "graphic2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(180, -10, 25, 25);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "graphic3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(640, 70, 20, 20);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "graphic4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(-50, 140, 20, 20);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "graphic5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(410, -10, 30, 30);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "graphic6";
    
     _this.graphics7 = _this.add.graphics(100, 100);       
     _this.graphics7.lineStyle(2, 0x0000FF, 1);
     _this.graphics7.drawRect(-50, 370, 20, 20);
     _this.graphics7.alpha=0;
     _this.graphics7.name = "graphic7";
    
     _this.graphics8 = _this.add.graphics(100, 100);       
     _this.graphics8.lineStyle(2, 0x0000FF, 1);
     _this.graphics8.drawRect(180, 140, 20, 20);
     _this.graphics8.alpha=0;
     _this.graphics8.name = "graphic8";
    
     _this.rightans=3;
     _this.rightans1=2;
    
     _this.ObjectGrp.add(_this.image1);
     _this.ObjectGrp.add(_this.image2);
     _this.ObjectGrp.add(_this.dog);
     _this.ObjectGrp.add(_this.jointwheel);
     _this.ObjectGrp.add(_this.watertank);
     _this.ObjectGrp.add(_this.tree);
     _this.ObjectGrp.add(_this.elephant);
     _this.ObjectGrp.add(_this.jeep);
     _this.ObjectGrp.add(_this.dove);
     _this.ObjectGrp.add(_this.cat);
     _this.ObjectGrp.add(_this.direction1);
     _this.ObjectGrp.add(_this.direction2);
     _this.ObjectGrp.add(_this.direction3);
     _this.ObjectGrp.add(_this.direction4);
     _this.ObjectGrp.add(_this.kidAnim1);
     _this.ObjectGrp.add(_this.graphics1);
     _this.ObjectGrp.add(_this.graphics2);
     _this.ObjectGrp.add(_this.graphics3);
     _this.ObjectGrp.add(_this.graphics4);
     _this.ObjectGrp.add(_this.graphics5);
     _this.ObjectGrp.add(_this.graphics6);
     _this.ObjectGrp.add(_this.graphics7);
     _this.ObjectGrp.add(_this.graphics8);
    
},

    
gotoSixthQuestion:function(){
    
    _this.questioNo = 6;
   
    if( _this.no11==0)   
        {               
            _this.time.events.add(9000, function(){_this.getVoice();},_this);
        }
        else
        {
            _this.getVoice();
        }
     
     _this.ObjectGrp=_this.add.group();
      
     _this.ObjectGrp.x = -1000;
      var tween = _this.add.tween(_this.ObjectGrp);
     tween.to({ x: 0 }, 2500,'Linear', true, 0);
    
     _this.image1 = _this.add.sprite(27,70,'SG15_2_3Bg2');
     _this.image1.name="img1";
     
     _this.loadobjects();
     
     _this.dog = _this.add.sprite(18,290,'SG15_2_3object1');
     _this.dog.name="img3";
     _this.dog.inputEnabled = true;
     _this.dog.input.useHandCursor = true;
     
     _this.jointwheel = _this.add.sprite(630,130,'SG15_2_3object2');
     _this.jointwheel.name="img4";
     _this.jointwheel.inputEnabled = true;
     _this.jointwheel.input.useHandCursor = true;
     
     _this.watertank = _this.add.sprite(415,70,'SG15_2_3object3');
     _this.watertank.name="img5";
     _this.watertank.inputEnabled = true;
     _this.watertank.input.useHandCursor = true;
     
     _this.tree = _this.add.sprite(710,285,'SG15_2_3object4');
     _this.tree.name="img6";
     _this.tree.scale.setTo(0.9,0.9);
     _this.tree.inputEnabled = true;
     _this.tree.input.useHandCursor = true;
     
     _this.elephant = _this.add.sprite(90,70,'SG15_2_3object5');
     _this.elephant.name="img7";
     _this.elephant.inputEnabled = true;
     _this.elephant.input.useHandCursor = true;
     
     _this.jeep = _this.add.sprite(400,440,'SG15_2_3object6');
     _this.jeep.name="img8";
     _this.jeep.inputEnabled = true;
     _this.jeep.input.useHandCursor = true;
     
     _this.dove = _this.add.sprite(250,360,'SG15_2_3object7');
     _this.dove.name="img9";
     _this.dove.inputEnabled = true;
     _this.dove.input.useHandCursor = true;
     
     _this.cat = _this.add.sprite(20,440,'SG15_2_3object8');
     _this.cat.name="img10";
     _this.cat.inputEnabled = true;
     _this.cat.input.useHandCursor = true;
     
     _this.kidAnim1 = _this.add.sprite(575,270,'SG15_2_3KidAnim');
     _this.kidAnim1.frame=0;
     _this.kidAnim1.name="kidAnim1"; 
    
     _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(-50,210, 25, 25);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "graphic1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(560, 70, 20, 20);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "graphic2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(335, -5, 20, 20);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "graphic3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(640, 210, 20, 20);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "graphic4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(30, -5, 20, 20);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "graphic5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(330, 360, 30, 30);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "graphic6";
    
     _this.graphics7 = _this.add.graphics(100, 100);       
     _this.graphics7.lineStyle(2, 0x0000FF, 1);
     _this.graphics7.drawRect(180,285, 20, 20);
     _this.graphics7.alpha=0;
     _this.graphics7.name = "graphic7";
    
     _this.graphics8 = _this.add.graphics(100, 100);       
     _this.graphics8.lineStyle(2, 0x0000FF, 1);
     _this.graphics8.drawRect(-40, 370, 20, 20);
     _this.graphics8.alpha=0;
     _this.graphics8.name = "graphic8";
    
     _this.rightans=7;
    
     _this.ObjectGrp.add(_this.image1);
     _this.ObjectGrp.add(_this.image2);
     _this.ObjectGrp.add(_this.dog);
     _this.ObjectGrp.add(_this.jointwheel);
     _this.ObjectGrp.add(_this.watertank);
     _this.ObjectGrp.add(_this.tree);
     _this.ObjectGrp.add(_this.elephant);
     _this.ObjectGrp.add(_this.jeep);
     _this.ObjectGrp.add(_this.dove);
     _this.ObjectGrp.add(_this.cat);
     _this.ObjectGrp.add(_this.direction1);
     _this.ObjectGrp.add(_this.direction2);
     _this.ObjectGrp.add(_this.direction3);
     _this.ObjectGrp.add(_this.direction4);
     _this.ObjectGrp.add(_this.kidAnim1);
     _this.ObjectGrp.add(_this.graphics1);
     _this.ObjectGrp.add(_this.graphics2);
     _this.ObjectGrp.add(_this.graphics3);
     _this.ObjectGrp.add(_this.graphics4);
     _this.ObjectGrp.add(_this.graphics5);
     _this.ObjectGrp.add(_this.graphics6);
     _this.ObjectGrp.add(_this.graphics7);
     _this.ObjectGrp.add(_this.graphics8);
    
},

    
gotoSeventhQuestion:function(){
    
    _this.questioNo = 7;
   
     if( _this.no11==0)   
        {               
            _this.time.events.add(9000, function(){_this.getVoice();},_this);
        }
        else
        {
            _this.getVoice();
        }
     
     _this.ObjectGrp=_this.add.group();
      
     _this.ObjectGrp.x = -1000;
      var tween = _this.add.tween(_this.ObjectGrp);
     tween.to({ x: 0 }, 2500,'Linear', true, 0);
    
     _this.image1 = _this.add.sprite(27,70,'SG15_2_3Bg6');
     _this.image1.name="img1";
     
     _this.loadobjects();
     
     _this.dog = _this.add.sprite(17,140,'SG15_2_3object1');
     _this.dog.name="img3";
     _this.dog.inputEnabled = true;
     _this.dog.input.useHandCursor = true;
     
     _this.jointwheel = _this.add.sprite(630,425,'SG15_2_3object2');
     _this.jointwheel.name="img4";
     _this.jointwheel.inputEnabled = true;
     _this.jointwheel.input.useHandCursor = true;
     
     _this.watertank = _this.add.sprite(720,292,'SG15_2_3object3');
     _this.watertank.name="img5";
     _this.watertank.inputEnabled = true;
     _this.watertank.input.useHandCursor = true;
     
     _this.tree = _this.add.sprite(25,430,'SG15_2_3object4');
     _this.tree.name="img6";
     _this.tree.scale.setTo(0.9,0.9);
     _this.tree.inputEnabled = true;
     _this.tree.input.useHandCursor = true;
     
     _this.elephant = _this.add.sprite(325,75,'SG15_2_3object5');
     _this.elephant.name="img7";
     _this.elephant.inputEnabled = true;
     _this.elephant.input.useHandCursor = true;
     
     _this.jeep = _this.add.sprite(230,440,'SG15_2_3object6');
     _this.jeep.name="img8";
     _this.jeep.inputEnabled = true;
     _this.jeep.input.useHandCursor = true;
     
     _this.dove = _this.add.sprite(630,65,'SG15_2_3object7');
     _this.dove.name="img9";
     _this.dove.inputEnabled = true;
     _this.dove.input.useHandCursor = true;
     
     _this.cat = _this.add.sprite(470,440,'SG15_2_3object8');
     _this.cat.name="img10";
     _this.cat.inputEnabled = true;
     _this.cat.input.useHandCursor = true;
     
     _this.kidAnim1 = _this.add.sprite(495,195,'SG15_2_3KidAnim');
     _this.kidAnim1.frame=0;
     _this.kidAnim1.name="kidAnim1"; 
    
     _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(-50, 70, 20, 20);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "graphic1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(560, 360, 20, 20);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "graphic2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(640, 220, 20, 20);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "graphic3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(-50, 360, 20, 20);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "graphic4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(260, -5, 20, 20);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "graphic5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(180, 360, 30, 30);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "graphic6";
    
     _this.graphics7 = _this.add.graphics(100, 100);       
     _this.graphics7.lineStyle(2, 0x0000FF, 1);
     _this.graphics7.drawRect(560, -10, 25, 25);
     _this.graphics7.alpha=0;
     _this.graphics7.name = "graphic7";
    
     _this.graphics8 = _this.add.graphics(100, 100);       
     _this.graphics8.lineStyle(2, 0x0000FF, 1);
     _this.graphics8.drawRect(410, 370, 20, 20);
     _this.graphics8.alpha=0;
     _this.graphics8.name = "graphic8";
    
     _this.rightans=2;
     _this.rightans1=2;
    
     _this.ObjectGrp.add(_this.image1);
     _this.ObjectGrp.add(_this.image2);
     _this.ObjectGrp.add(_this.dog);
     _this.ObjectGrp.add(_this.jointwheel);
     _this.ObjectGrp.add(_this.watertank);
     _this.ObjectGrp.add(_this.tree);
     _this.ObjectGrp.add(_this.elephant);
     _this.ObjectGrp.add(_this.jeep);
     _this.ObjectGrp.add(_this.dove);
     _this.ObjectGrp.add(_this.cat);
     _this.ObjectGrp.add(_this.direction1);
     _this.ObjectGrp.add(_this.direction2);
     _this.ObjectGrp.add(_this.direction3);
     _this.ObjectGrp.add(_this.direction4);
     _this.ObjectGrp.add(_this.kidAnim1);
     _this.ObjectGrp.add(_this.graphics1);
     _this.ObjectGrp.add(_this.graphics2);
     _this.ObjectGrp.add(_this.graphics3);
     _this.ObjectGrp.add(_this.graphics4);
     _this.ObjectGrp.add(_this.graphics5);
     _this.ObjectGrp.add(_this.graphics6);
     _this.ObjectGrp.add(_this.graphics7);
     _this.ObjectGrp.add(_this.graphics8);
    
},

gotoEighthQuestion:function(){
    
    _this.questioNo = 8;
   
     if( _this.no11==0)   
        {               
            _this.time.events.add(9000, function(){_this.getVoice();},_this);
        }
        else
        {
            _this.getVoice();
        }
     
     _this.ObjectGrp=_this.add.group();
      
     _this.ObjectGrp.x = -1000;
      var tween = _this.add.tween(_this.ObjectGrp);
     tween.to({ x: 0 }, 2500,'Linear', true, 0);
    
     _this.image1 = _this.add.sprite(27,70,'SG15_2_3Bg5');
     _this.image1.name="img1";
     
     _this.loadobjects();
     
     _this.dog = _this.add.sprite(473,435,'SG15_2_3object1');
     _this.dog.name="img3";
     _this.dog.inputEnabled = true;
     _this.dog.input.useHandCursor = true;
     
     _this.jointwheel = _this.add.sprite(23,205,'SG15_2_3object2');
     _this.jointwheel.name="img4";
     _this.jointwheel.inputEnabled = true;
     _this.jointwheel.input.useHandCursor = true;
     
     _this.watertank = _this.add.sprite(262,70,'SG15_2_3object3');
     _this.watertank.name="img5";
     _this.watertank.inputEnabled = true;
     _this.watertank.input.useHandCursor = true;
     
     _this.tree = _this.add.sprite(710,137,'SG15_2_3object4');
     _this.tree.name="img6";
     _this.tree.scale.setTo(0.9,0.9);
     _this.tree.inputEnabled = true;
     _this.tree.input.useHandCursor = true;
     
     _this.elephant = _this.add.sprite(693,370,'SG15_2_3object5');
     _this.elephant.name="img7";
     _this.elephant.inputEnabled = true;
     _this.elephant.input.useHandCursor = true;
     
     _this.jeep = _this.add.sprite(470,70,'SG15_2_3object6');
     _this.jeep.name="img8";
     _this.jeep.inputEnabled = true;
     _this.jeep.input.useHandCursor = true;
     
     _this.dove = _this.add.sprite(20,430,'SG15_2_3object7');
     _this.dove.name="img9";
     _this.dove.inputEnabled = true;
     _this.dove.input.useHandCursor = true;
     
     _this.cat = _this.add.sprite(245,220,'SG15_2_3object8');
     _this.cat.name="img10";
     _this.cat.inputEnabled = true;
     _this.cat.input.useHandCursor = true;
     
     _this.kidAnim1 = _this.add.sprite(420,270,'SG15_2_3KidAnim');
     _this.kidAnim1.frame=0;
     _this.kidAnim1.name="kidAnim1"; 
    
     _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(410, 370, 20, 20);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "graphic1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(-45, 140, 20, 20);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "graphic2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(180, -5, 20, 20);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "graphic3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(640, 70, 20, 20);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "graphic4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(640,285, 25, 25);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "graphic5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(410, -15, 30, 30);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "graphic6";
    
     _this.graphics7 = _this.add.graphics(100, 100);       
     _this.graphics7.lineStyle(2, 0x0000FF, 1);
     _this.graphics7.drawRect(-50, 370, 20, 20);
     _this.graphics7.alpha=0;
     _this.graphics7.name = "graphic7";
    
     _this.graphics8 = _this.add.graphics(100, 100);       
     _this.graphics8.lineStyle(2, 0x0000FF, 1);
     _this.graphics8.drawRect(180, 140, 20, 20);
     _this.graphics8.alpha=0;
     _this.graphics8.name = "graphic8";
     
     _this.rightans=1;
     _this.rightans1=4;
    
     _this.ObjectGrp.add(_this.image1);
     _this.ObjectGrp.add(_this.image2);
     _this.ObjectGrp.add(_this.dog);
     _this.ObjectGrp.add(_this.jointwheel);
     _this.ObjectGrp.add(_this.watertank);
     _this.ObjectGrp.add(_this.tree);
     _this.ObjectGrp.add(_this.elephant);
     _this.ObjectGrp.add(_this.jeep);
     _this.ObjectGrp.add(_this.dove);
     _this.ObjectGrp.add(_this.cat);
     _this.ObjectGrp.add(_this.direction1);
     _this.ObjectGrp.add(_this.direction2);
     _this.ObjectGrp.add(_this.direction3);
     _this.ObjectGrp.add(_this.direction4);
     _this.ObjectGrp.add(_this.kidAnim1);
     _this.ObjectGrp.add(_this.graphics1);
     _this.ObjectGrp.add(_this.graphics2);
     _this.ObjectGrp.add(_this.graphics3);
     _this.ObjectGrp.add(_this.graphics4);
     _this.ObjectGrp.add(_this.graphics5);
     _this.ObjectGrp.add(_this.graphics6);
     _this.ObjectGrp.add(_this.graphics7);
     _this.ObjectGrp.add(_this.graphics8);
    
},
    

check:function()
    {
         if(_this.checkOverlap(_this.kidAnim1,_this.graphics1))
                {
                 _this.dog.events.onInputDown.add(_this.checkforRightAns,_this);
                }
                 else
                {
                    _this.dog.events.onInputDown.removeAll();
                }
                 
              if(_this.checkOverlap(_this.kidAnim1,_this.graphics2))
                {
                 _this.jointwheel.events.onInputDown.add(_this.checkforRightAns,_this);
                }
                 else
                {
                    _this.jointwheel.events.onInputDown.removeAll();
                }
              if(_this.checkOverlap(_this.kidAnim1,_this.graphics3))
                {
                 _this.watertank.events.onInputDown.add(_this.checkforRightAns,_this);
                }
                  else
                {
                    _this.watertank.events.onInputDown.removeAll();
                }
              if(_this.checkOverlap(_this.kidAnim1,_this.graphics4))
                {
                   _this.tree.events.onInputDown.add(_this.checkforRightAns,_this);
                }
                else
                {
                    _this.tree.events.onInputDown.removeAll();
                }
              if(_this.checkOverlap(_this.kidAnim1,_this.graphics5))
                {
                 _this.elephant.events.onInputDown.add(_this.checkforRightAns,_this);
                }
                  else
                {
                    _this.elephant.events.onInputDown.removeAll();
                }
              if(_this.checkOverlap(_this.kidAnim1,_this.graphics6))
                {
                 _this.jeep.events.onInputDown.add(_this.checkforRightAns,_this);
                }
                  else
                {
                    _this.jeep.events.onInputDown.removeAll();
                }
              if(_this.checkOverlap(_this.kidAnim1,_this.graphics7))
                {
                 _this.dove.events.onInputDown.add(_this.checkforRightAns,_this);
                }
                  else
                {
                    _this.dove.events.onInputDown.removeAll();
                }
              if(_this.checkOverlap(_this.kidAnim1,_this.graphics8))
                {
                  _this.cat.events.onInputDown.add(_this.checkforRightAns,_this);
                }
                  else
                {
                    _this.cat.events.onInputDown.removeAll();
                }
        
    },
                  
selected1:function(target){ 
    console.log(target.name);
    _this.clickSound = _this.add.audio('ClickSound');
    _this.clickSound.play(); 
     target.frame=1;
    if(_this.questioNo==1)
    {
         if(_this.M1==null)
    {
             
       if(_this.kidAnim1.y>=125)
         {
             console.log("ssss" +_this.up);
             _this.up+=1;
            _this.down=0;
            _this.left=0;
             _this.right=0;
             console.log("uuu"+_this.up);
             console.log("ddd"+_this.down);
            _this.wx=_this.kidAnim1.x;
            _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy-74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                 _this.check();
             }, _this); 
               
         }
         }
         
    }
    else if(_this.questioNo==2)
    {
         if(_this.M1==null)
    {
             
       if(_this.kidAnim1.y>=55)
         {
             console.log("ssss" +_this.up);
             _this.up+=1;
            _this.down=0;
            _this.left=0;
             _this.right=0;
             console.log("uuu"+_this.up);
             console.log("ddd"+_this.down);
            _this.wx=_this.kidAnim1.x;
            _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy-74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                 _this.check();
             }, _this); 
                
         }
         }
         
    }
     else if(_this.questioNo==3)
    {
         if(_this.M1==null)
    {
             
       if(_this.kidAnim1.y>=55)
         {
             console.log("ssss" +_this.up);
             _this.up+=1;
            _this.down=0;
            _this.left=0;
             _this.right=0;
             console.log("uuu"+_this.up);
             console.log("ddd"+_this.down);
            _this.wx=_this.kidAnim1.x;
            _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy-74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                  _this.check();
             }, _this); 
              
         }
         }
         
    }
    
    else if(_this.questioNo==4)
    {
         if(_this.M1==null)
    {
             
       if(_this.kidAnim1.y>=55)
         {
             console.log("ssss" +_this.up);
             _this.up+=1;
            _this.down=0;
            _this.left=0;
             _this.right=0;
             console.log("uuu"+_this.up);
             console.log("ddd"+_this.down);
            _this.wx=_this.kidAnim1.x;
            _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy-74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                  _this.check();
             }, _this); 
                 
         }
     }
         
    }
     else if(_this.questioNo==5)
    {
         if(_this.M1==null)
    {
             
       if(_this.kidAnim1.y>=55)
         {
             console.log("ssss" +_this.up);
             _this.up+=1;
            _this.down=0;
            _this.left=0;
             _this.right=0;
             console.log("uuu"+_this.up);
            _this.wx=_this.kidAnim1.x;
            _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy-74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                  _this.check();
             }, _this); 
               
         }
        }
         
    }
     else if(_this.questioNo==6)
    {
         if(_this.M1==null)
    {
             
       if(_this.kidAnim1.y>=55)
         {
             console.log("ssss" +_this.up);
             _this.up+=1;
            _this.down=0;
            _this.left=0;
             _this.right=0;
             console.log("uuu"+_this.up);
            _this.wx=_this.kidAnim1.x;
            _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy-74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;  
                _this.check();
             }, _this); 
                
         }
        }
         
    }
     else if(_this.questioNo==7)
    {
         if(_this.M1==null)
    {
             
       if(_this.kidAnim1.y>=55)
         {
             console.log("ssss" +_this.up);
             _this.up+=1;
            _this.down=0;
            _this.left=0;
             _this.right=0;
             console.log("uuu"+_this.up);
            _this.wx=_this.kidAnim1.x;
            _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy-74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0; 
                _this.check();
             }, _this);       
            
         }
     }
         
    }
      else if(_this.questioNo==8)
    {
         if(_this.M1==null)
    {
             
       if(_this.kidAnim1.y>=55)
         {
             console.log("ssss" +_this.up);
             _this.up+=1;
            _this.down=0;
            _this.left=0;
             _this.right=0;
             console.log("uuu"+_this.up);
            _this.wx=_this.kidAnim1.x;
            _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy-74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                _this.check();
             }, _this); 
                
         }
     }
         
    }
    
 
},
    
               
selected2:function(target){ 
    console.log(target.name);
    _this.clickSound = _this.add.audio('ClickSound');
    _this.clickSound.play(); 
     target.frame=1;
   if(_this.questioNo==1)
    {
          if(_this.M1==null)
    {
       if(_this.kidAnim1.y<=380)
         {
             _this.up=0;
            _this.down+=1;
            _this.left=0;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy+74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                  _this.check();
             }, _this);  
         
         }
    }
 }
    else if(_this.questioNo==2)
    {
          if(_this.M1==null)
    {
       if(_this.kidAnim1.y<=380)
         {
             _this.up=0;
            _this.down+=1;
            _this.left=0;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy+74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                 _this.check();
             }, _this);  
         
       }
    }
}
else if(_this.questioNo==3)
    {
          if(_this.M1==null)
    {
       if(_this.kidAnim1.y<=380)
         {
             _this.up=0;
            _this.down+=1;
            _this.left=0;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy+74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
              target.frame=0;
             _this.check();
             }, _this);  
         
         }
    }
}
    
    else if(_this.questioNo==4)
    {
          if(_this.M1==null)
    {
       if(_this.kidAnim1.y<=380)
         {
             _this.up=0;
            _this.down+=1;
            _this.left=0;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy+74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                _this.check();
             }, _this);  
        
         }
    }
 }
    else if(_this.questioNo==5)
    {
          if(_this.M1==null)
    {
       if(_this.kidAnim1.y<=380)
         {
             _this.up=0;
            _this.down+=1;
            _this.left=0;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy+74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                 _this.check();
             }, _this);  
         
         }
    }
 }
     else if(_this.questioNo==6)
    {
          if(_this.M1==null)
    {
       if(_this.kidAnim1.y<=380)
         {
             _this.up=0;
            _this.down+=1;
            _this.left=0;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy+74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                target.frame=0;
                _this.check();
             }, _this);  
         
         }
    }
}
     else if(_this.questioNo==7)
    {
          if(_this.M1==null)
    {
       if(_this.kidAnim1.y<=380)
         {
             _this.up=0;
            _this.down+=1;
            _this.left=0;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy+74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                 _this.check();
             }, _this);  
         
         }
    }
}
     else if(_this.questioNo==8)
    {
          if(_this.M1==null)
    {
       if(_this.kidAnim1.y<=380)
         {
             _this.up=0;
            _this.down+=1;
            _this.left=0;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wy=_this.wy+74;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
             target.frame=0;
                _this.check();
             }, _this);  
         
         }
    }
 }
    
   
},
         
 
selected3:function(target){ 
    console.log(target.name);
    _this.clickSound = _this.add.audio('ClickSound');
    _this.clickSound.play(); 
     target.frame=1;
    if(_this.questioNo==1)
    {
         if(_this.M1==null)
    {

        if(_this.kidAnim1.x<=650)
         {
             _this.up=0;
            _this.down=0;
            _this.left=0;
             _this.right+=1;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx+76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                 _this.check();
             }, _this);  
             
         
           
         }
    }
    }
    else if(_this.questioNo==2)
    {
         if(_this.M1==null)
    {

        if(_this.kidAnim1.x<=700)
         {
             _this.up=0;
            _this.down+=0;
            _this.left=0;
             _this.right+=1;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx+76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                _this.check();
             }, _this);  
            
         }
    }
}
     else if(_this.questioNo==3)
    {
         if(_this.M1==null)
    {

        if(_this.kidAnim1.x<=700)
         {
             _this.up=0;
            _this.down+=0;
            _this.left=0;
             _this.right+=1;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx+76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                _this.check();
             }, _this);  
            
         }
    }
}
    
    else if(_this.questioNo==4)
    {
         if(_this.M1==null)
    {

        if(_this.kidAnim1.x<=700)
         {
             _this.up=0;
            _this.down=0;
            _this.left=0;
             _this.right+=1;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx+76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                _this.check();
             }, _this);  
             
         }
   }
}
    else if(_this.questioNo==5)
    {
         if(_this.M1==null)
    {

        if(_this.kidAnim1.x<=700)
         {
             _this.up=0;
            _this.down=0;
            _this.left=0;
             _this.right+=1;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx+76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                target.frame=0;
                _this.check();
             }, _this);  
        
         }
    }
}
    else if(_this.questioNo==6)
    {
         if(_this.M1==null)
    {

        if(_this.kidAnim1.x<=700)
         {
             _this.up=0;
            _this.down=0;
            _this.left=0;
             _this.right+=1;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx+76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                _this.check();
             }, _this);  
             
         }
    }
    }
    else if(_this.questioNo==7)
    {
         if(_this.M1==null)
    {

        if(_this.kidAnim1.x<=700)
         {
             _this.up+=0;
            _this.down=0;
            _this.left=0;
             _this.right+=1;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx+76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
                 _this.check();
             }, _this);  
              
         }
    }
 }
     else if(_this.questioNo==8)
    {
         if(_this.M1==null)
    {

        if(_this.kidAnim1.x<=700)
         {
             _this.up=0;
            _this.down+=0;
            _this.left=0;
             _this.right+=1;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx+76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
              _this.M1=null;
                 target.frame=0;
               _this.check();
             }, _this);  
             
         }
    }
 }
    
},

selected4:function(target){ 
    console.log(target.name);
    _this.clickSound = _this.add.audio('ClickSound');
    _this.clickSound.play(); 
     target.frame=1;
    if(_this.questioNo==1)
    {
         if(_this.M1==null)
      {  
        
        if(_this.kidAnim1.x>=60)
         {
            _this.up=0;
            _this.down=0;
            _this.left+=1;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx-76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
             _this.M1=null;
                 target.frame=0;
                 _this.check();
             }, _this);  
            
         }
      }
    }
    else if(_this.questioNo==2)
    {
         if(_this.M1==null)
      {  
        
        if(_this.kidAnim1.x>=60)
         {
              _this.up=0;
            _this.down=0;
            _this.left+=1;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx-76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
             _this.M1=null;
                 target.frame=0;
                 _this.check();
             }, _this);  
             
         }
      }
    }
    
    else if(_this.questioNo==3)
    {
         if(_this.M1==null)
      {  
        
        if(_this.kidAnim1.x>=60)
         {
              _this.up=0;
            _this.down+=0;
            _this.left+=1;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx-76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
             _this.M1=null;
                 target.frame=0;
                  _this.check();
             }, _this);   
         }
      }
    }
    
     else if(_this.questioNo==4)
    {
         if(_this.M1==null)
      {  
        
        if(_this.kidAnim1.x>=60)
         {
              _this.up=0;
            _this.down=0;
            _this.left+=1;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx-76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
             _this.M1=null;
                 target.frame=0;  
               _this.check();
             }, _this);  
              
         }
      }
    }
     else if(_this.questioNo==5)
    {
         if(_this.M1==null)
      {  
        
        if(_this.kidAnim1.x>=60)
         {
              _this.up+=0;
            _this.down=0;
            _this.left+=1;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx-76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
             _this.M1=null;
                 target.frame=0;
                 _this.check();
             }, _this);  
            
         }
      }
    }
      else if(_this.questioNo==6)
    {
         if(_this.M1==null)
      {  
        
        if(_this.kidAnim1.x>=60)
         {
              _this.up=0;
            _this.down=0;
            _this.left+=1;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx-76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
             _this.M1=null;
                 target.frame=0;
                 _this.check();
             }, _this);  
             
         }
      }
    }
      else if(_this.questioNo==7)
    {
         if(_this.M1==null)
      {  
        
        if(_this.kidAnim1.x>=60)
         {
              _this.up=0;
            _this.down=0;
            _this.left+=1;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx-76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
             _this.M1=null;
                 target.frame=0;
                  _this.check();
             }, _this);  
             
         }
      }
    }
      else if(_this.questioNo==8)
    {
         if(_this.M1==null)
      {  
        
        if(_this.kidAnim1.x>=60)
         {
              _this.up=0;
            _this.down=0;
            _this.left+=0;
             _this.right=0;
             _this.wx=_this.kidAnim1.x;
             _this.wy=_this.kidAnim1.y;
             _this.wx=_this.wx-76;
             console.log("_this.kidAnim1.x"+_this.kidAnim1.x);
             console.log("_this.kidAnim1.y"+_this.kidAnim1.y);
             _this.M1 = _this.add.tween(_this.kidAnim1);
             _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0); 
             _this.M1.onComplete.add(function(){
             _this.M1=null;
                 target.frame=0;  
                _this.check();
             }, _this);  
              
         }
      }
    }
    
},  
    
wrongAnimation:function()
    {
            _this.kidAnim1.frame=2;
            _this.anim1=_this.kidAnim1.animations.add('play',[3,4,5,6,7,8]); 
            _this.anim1.play(3);
           _this.wmusic = _this.add.audio('waudio');
		   _this.wmusic.play();
            _this.time.events.add(2000,function(){
            _this.anim1.stop();
             _this.kidAnim1.animations.getAnimation("play").destroy(); 
            _this.kidAnim1.frame=0;
            },_this);
        if(_this.questioNo==1)
        {
            _this.time.events.add(2500,function(){
            _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: 345,y:200}, 2000, 'Linear', true, 0);
                _this.M1.onComplete.add(function(){
              _this.M1=null;
                },_this);
            },_this);
        }
        else if(_this.questioNo==2)
        {
            _this.time.events.add(2500,function(){
            _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: 575,y:125}, 2000, 'Linear', true, 0);
                _this.M1.onComplete.add(function(){
              _this.M1=null;
                },_this);
            },_this);
        }
        else if(_this.questioNo==3)
        {
            _this.time.events.add(2500,function(){
            _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: 345,y:125}, 2000, 'Linear', true, 0);
                _this.M1.onComplete.add(function(){
              _this.M1=null;
                },_this);
            },_this);
        }
        else if(_this.questioNo==4)
        {
            _this.time.events.add(2500,function(){
            _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: 500,y:200}, 2000, 'Linear', true, 0);
                _this.M1.onComplete.add(function(){
              _this.M1=null;
                },_this);
            },_this);
        }
        else if(_this.questioNo==5)
        {
            _this.time.events.add(2500,function(){
            _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: 420,y:270}, 2000, 'Linear', true, 0);
                _this.M1.onComplete.add(function(){
              _this.M1=null;
                },_this);
            },_this);
        }
        else if(_this.questioNo==6)
        {
            _this.time.events.add(2500,function(){
            _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: 575,y:270}, 2000, 'Linear', true, 0);
                _this.M1.onComplete.add(function(){
              _this.M1=null;
                },_this);
            },_this);
        }
        else if(_this.questioNo==7)
        {
            _this.time.events.add(2500,function(){
            _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: 495,y:195}, 2000, 'Linear', true, 0);
                _this.M1.onComplete.add(function(){
              _this.M1=null;
                },_this);
            },_this);
        }
        else if(_this.questioNo==8)
        {
            _this.time.events.add(2500,function(){
            _this.M1 = _this.add.tween(_this.kidAnim1);
            _this.M1.to({ x: 420,y:270}, 2000, 'Linear', true, 0);
                _this.M1.onComplete.add(function(){
              _this.M1=null;
                },_this);
            },_this);
        }
       
            _this.up=0;
           _this.down=0;
           _this.right=0
           _this.left=0;
    },

checkforRightAns:function(target){
    _this.clickSound = _this.add.audio('ClickSound');
    _this.clickSound.play();
   target.events.onInputDown.removeAll();
  if(_this.questioNo==1)
  {
      console.log("uuuuuuuuu"+_this.up);
      console.log("rightans"+_this.rightans);
        if(_this.rightans==_this.up && (_this.kidAnim1.x>=330 &&_this.kidAnim1.x<=350))
        {
            
              _this.anim1=_this.tree.animations.add('move');
              _this.anim1.play(5,true);
             _this.time.events.add(500,function(){
              _this.anim2=_this.kidAnim1.animations.add('play',[0,1]); 
              _this.anim2.play(3); 
             },_this);
              _this.time.events.add(800,function(){
              _this.correctAns();
             },_this);   
        
        }
        else
        {   
            _this.wrongAnimation();    
        }
  }
    else if(_this.questioNo==2)
   {
      console.log("down"+_this.down);
      console.log("right"+_this.right);
      console.log("rightans"+_this.rightans);
       console.log("rightans1"+_this.rightans1);
        if((_this.rightans==_this.down && _this.rightans1==_this.right) && (_this.kidAnim1.x>=710 &&_this.kidAnim1.x<=730))
        {
            
              _this.anim1=_this.jointwheel.animations.add('move');
              _this.anim1.play(5,true);
             _this.time.events.add(500,function(){
              _this.anim2=_this.kidAnim1.animations.add('play',[0,1]); 
              _this.anim2.play(3); 
             },_this);
              _this.time.events.add(800,function(){
              _this.correctAns();
             },_this);   
        
        }
        else
        {   
           _this.wrongAnimation();    
        }
  }
     else if(_this.questioNo==3)
   {
      console.log("down"+_this.down);
      console.log("left"+_this.left);
      console.log("rightans"+_this.rightans);
       console.log("rightans1"+_this.rightans1);
       
        if((_this.rightans==_this.down && _this.rightans1==_this.left) && (_this.kidAnim1.x>=110 &&_this.kidAnim1.x<=130))
        {
            console.log("sss",_this.kidAnim1.x);
              _this.anim1=_this.jeep.animations.add('move');
              _this.anim1.play(5,true);
             _this.time.events.add(500,function(){
              _this.anim2=_this.kidAnim1.animations.add('play',[0,1]); 
              _this.anim2.play(3); 
             },_this);
              _this.time.events.add(800,function(){
              _this.correctAns();
             },_this);   
        
        }
        else
        {   
            _this.wrongAnimation();   
            
        }
  }
    
    else if(_this.questioNo==4)
   {
      console.log("uuuuuuuuu"+_this.down);
      console.log("rightans"+_this.rightans);
        if(_this.rightans==_this.down && (_this.kidAnim1.x>=490 &&_this.kidAnim1.x<=510))
        {
            
              _this.anim1=_this.cat.animations.add('move');
              _this.anim1.play(5,true);
             _this.time.events.add(500,function(){
              _this.anim2=_this.kidAnim1.animations.add('play',[0,1]); 
              _this.anim2.play(3); 
             },_this);
              _this.time.events.add(800,function(){
              _this.correctAns();
             },_this);   
        
        }
        else
        {   
            _this.wrongAnimation();
               
        }
  }
     else if(_this.questioNo==5)
   {
      console.log("up"+_this.up);
      console.log("left"+_this.left);
      console.log("rightans"+_this.rightans);
       console.log("rightans1"+_this.rightans1);
        if((_this.rightans==_this.up && _this.rightans1==_this.left) && (_this.kidAnim1.x>=260 &&_this.kidAnim1.x<=280))
        {
            
              _this.anim1=_this.watertank.animations.add('move');
              _this.anim1.play(5,true);
             _this.time.events.add(500,function(){
              _this.anim2=_this.kidAnim1.animations.add('play',[0,1]); 
              _this.anim2.play(3); 
             },_this);
              _this.time.events.add(800,function(){
              _this.correctAns();
             },_this);   
        
        }
        else
        {   
            _this.wrongAnimation();    
            
        }
  }
    else if(_this.questioNo==6)
  {
      
      console.log("left"+_this.left);
      console.log("rightans"+_this.rightans);
        if(_this.rightans==_this.left && (_this.kidAnim1.x>=30 &&_this.kidAnim1.x<=60 && _this.kidAnim1.y<=300))
        {
            
              _this.anim1=_this.dog.animations.add('move');
              _this.anim1.play(5,true);
             _this.time.events.add(500,function(){
              _this.anim2=_this.kidAnim1.animations.add('play',[0,1]); 
              _this.anim2.play(3); 
             },_this);
              _this.time.events.add(800,function(){
              _this.correctAns();
             },_this);   
        
        }
        else
        {   
            _this.wrongAnimation();
                
        }
  }
     else if(_this.questioNo==7)
   {
      console.log("up"+_this.up);
      console.log("right"+_this.right);
      console.log("rightans"+_this.rightans);
       console.log("rightans1"+_this.rightans1);
        if((_this.rightans==_this.up && _this.rightans1==_this.right) && (_this.kidAnim1.x>=640 &&_this.kidAnim1.x<=660))
        {
            
              _this.anim1=_this.dove.animations.add('move');
              _this.anim1.play(5,true);
             _this.time.events.add(500,function(){
              _this.anim2=_this.kidAnim1.animations.add('play',[0,1]); 
              _this.anim2.play(3); 
             },_this);
              _this.time.events.add(800,function(){
              _this.correctAns();
             },_this);   
        
        }
        else
        {   
            _this.wrongAnimation();
               
        }
  }
     else if(_this.questioNo==8)
   {
      console.log("down"+_this.down);
      console.log("right"+_this.right);
      console.log("rightans"+_this.rightans);
       console.log("rightans1"+_this.rightans1);
        if((_this.rightans==_this.down && _this.rightans1==_this.right) && (_this.kidAnim1.x>=715 &&_this.kidAnim1.x<=730))
        {
            
              _this.anim1=_this.elephant.animations.add('move');
              _this.anim1.play(5,true);
             _this.time.events.add(500,function(){
              _this.anim2=_this.kidAnim1.animations.add('play',[0,1]); 
              _this.anim2.play(3); 
             },_this);
              _this.time.events.add(800,function(){
              _this.correctAns();
             },_this);   
        
        }
        else
        {   
            _this.wrongAnimation();
       
        }
  }
    
},
    
    checkOverlap:function(spriteA, spriteB) 
{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);

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
                     _this.timer1.stop();
                      _this.count=0;
                        _this.up=0;
                        _this.down=0;
                        _this.right=0;
                        _this.left=0;
                       _this.ObjectGrp.destroy();
                         _this.countIncrement = 0;
                         //_this.sceneCount++;
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
                         _this.state.start('sg15_2_3Score',true,false);
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
        _this.questionid=1;
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
	
    
    getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no11])
        {             
            case 1:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/English/sg15.2.3bE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Hindi/sg15.2.3bH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Kannada/sg15.2.3bK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Gujrati/sg15.2.3b.mp3");
                       // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Marathi/sg15.2.3b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Telugu/sg15.2.3b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Tamil/sg15.2.3b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Urdu/sg15.2.3b.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Odiya/sg15.2.3b.mp3");
                       // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 2:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/English/sg15.2.3cE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Hindi/sg15.2.3cH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Kannada/sg15.2.3cK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Gujrati/sg15.2.3c.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Marathi/sg15.2.3c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Telugu/sg15.2.3c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Tamil/sg15.2.3c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Urdu/sg15.2.3c.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Odiya/sg15.2.3c.mp3");
                       // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 3:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/English/sg15.2.3dE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Hindi/sg15.2.3dH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Kannada/sg15.2.3dK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Gujrati/sg15.2.3d.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Marathi/sg15.2.3d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Telugu/sg15.2.3d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Tamil/sg15.2.3d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Urdu/sg15.2.3d.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Odiya/sg15.2.3d.mp3");
                       // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 4:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/English/sg15.2.3eE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Hindi/sg15.2.3eH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Kannada/sg15.2.3eK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Gujrati/sg15.2.3e.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Marathi/sg15.2.3e.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Telugu/sg15.2.3e.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Tamil/sg15.2.3e.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Urdu/sg15.2.3e.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Odiya/sg15.2.3e.mp3");
                       // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 5:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/English/sg15.2.3fE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Hindi/sg15.2.3fH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Kannada/sg15.2.3fK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Gujrati/sg15.2.3f.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Marathi/sg15.2.3f.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Telugu/sg15.2.3f.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Tamil/sg15.2.3f.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Urdu/sg15.2.3f.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Odiya/sg15.2.3f.mp3");
                       // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 6:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/English/sg15.2.3gE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Hindi/sg15.2.3gH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Kannada/sg15.2.3gK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Gujrati/sg15.2.3g.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Marathi/sg15.2.3g.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Telugu/sg15.2.3g.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Tamil/sg15.2.3g.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Urdu/sg15.2.3g.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Odiya/sg15.2.3g.mp3");
                       // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 7:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/English/sg15.2.3hE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Hindi/sg15.2.3hH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Kannada/sg15.2.3hK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Gujrati/sg15.2.3h.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Marathi/sg15.2.3h.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Telugu/sg15.2.3h.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Tamil/sg15.2.3h.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Urdu/sg15.2.3h.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Odiya/sg15.2.3h.mp3");
                       // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 8:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/English/sg15.2.3iE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Hindi/sg15.2.3iH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Kannada/sg15.2.3iK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Gujrati/sg15.2.3i.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Marathi/sg15.2.3i.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Telugu/sg15.2.3i.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Tamil/sg15.2.3i.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Urdu/sg15.2.3i.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.2.3/Odiya/sg15.2.3i.mp3");
                       // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       