Game.sg20_1_4level1=function(){};

Game.sg20_1_4level1.prototype={
    init:function(game)
    {
       _this = this;
       
       telInitializer.gameIdInit("SG20_1_4",gradeSelected);
    },

    preload:function(game){
        if(!window.grade4SG4){

            window.grade4SG4 = true;

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

            this.load.atlas('SG20_1_4banana',window.baseUrl+'assets/gradeAssets/sg20.1.4/banana.png',window.baseUrl+'json/gradeJson/sg20.1.4/banana.json');
        this.load.atlas('SG20_1_4boot',window.baseUrl+'assets/gradeAssets/sg20.1.4/boot.png',window.baseUrl+'json/gradeJson/sg20.1.4/boot.json');
        this.load.atlas('SG20_1_4can',window.baseUrl+'assets/gradeAssets/sg20.1.4/can.png',window.baseUrl+'json/gradeJson/sg20.1.4/can.json');
        this.load.atlas('SG20_1_4comb',window.baseUrl+'assets/gradeAssets/sg20.1.4/comb.png',window.baseUrl+'json/gradeJson/sg20.1.4/comb.json');
        this.load.atlas('SG20_1_4cup',window.baseUrl+'assets/gradeAssets/sg20.1.4/cup.png',window.baseUrl+'json/gradeJson/sg20.1.4/cup.json');
        this.load.atlas('SG20_1_4hammer',window.baseUrl+'assets/gradeAssets/sg20.1.4/hammer.png',window.baseUrl+'json/gradeJson/sg20.1.4/hammer.json');
        this.load.atlas('SG20_1_4hand',window.baseUrl+'assets/gradeAssets/sg20.1.4/hand.png',window.baseUrl+'json/gradeJson/sg20.1.4/hand.json');
        this.load.atlas('SG20_1_4horizontal',window.baseUrl+'assets/gradeAssets/sg20.1.4/horizontal.png',window.baseUrl+'json/gradeJson/sg20.1.4/horizontal.json');
        this.load.atlas('SG20_1_4key',window.baseUrl+'assets/gradeAssets/sg20.1.4/key.png',window.baseUrl+'json/gradeJson/sg20.1.4/key.json');
        this.load.atlas('SG20_1_4leg',window.baseUrl+'assets/gradeAssets/sg20.1.4/leg.png',window.baseUrl+'json/gradeJson/sg20.1.4/leg.json');
        this.load.image('SG20_1_4mirror',window.baseUrl+'assets/gradeAssets/sg20.1.4/mirror.png');
        this.load.atlas('SG20_1_4triangle',window.baseUrl+'assets/gradeAssets/sg20.1.4/triangle.png',window.baseUrl+'json/gradeJson/sg20.1.4/triangle.json');
        this.load.atlas('SG20_1_4umbrella',window.baseUrl+'assets/gradeAssets/sg20.1.4/umbrella.png',window.baseUrl+'json/gradeJson/sg20.1.4/umbrella.json');
        this.load.atlas('SG20_1_4vertical',window.baseUrl+'assets/gradeAssets/sg20.1.4/vertical.png',window.baseUrl+'json/gradeJson/sg20.1.4/vertical.json');
        this.load.image('SG20_1_4water',window.baseUrl+'assets/gradeAssets/sg20.1.4/water.png');
        this.load.atlas('SG20_1_4watercan',window.baseUrl+'assets/gradeAssets/sg20.1.4/watercan.png',window.baseUrl+'json/gradeJson/sg20.1.4/watercan.json');
        this.load.atlas('SG20_1_4bubbleanimation',window.baseUrl+'assets/gradeAssets/sg20.1.4/BubbleAni.png',window.baseUrl+'json/gradeJson/sg20.1.4/BubbleAni.json');
        this.load.image('SG20_1_4bubble',window.baseUrl+'assets/gradeAssets/sg20.1.4/Bubble.png');
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
          
        _this.qArrays = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays2 = new Array();
        _this.qArrays3 = new Array();
        _this.qArrays4 = new Array();
        _this.qArrays5 = new Array();
        _this.qArrays6 = new Array();
        
        _this.qArrays1 = [1,3,5,7];
        _this.qArrays2 = [2,4,6,8];
        _this.qArrays3 = [10,12,14,16];
        _this.qArrays4 = [9,11,13,15];
        _this.qArrays5 = [17,19,21,23];
        _this.qArrays6 = [18,20,22,24];
        
        _this.qArrays1 = _this.shuffle(_this.qArrays1);
        _this.qArrays2 = _this.shuffle(_this.qArrays2);
        _this.qArrays3 = _this.shuffle(_this.qArrays3);
        _this.qArrays4 = _this.shuffle(_this.qArrays4);
        _this.qArrays5 = _this.shuffle(_this.qArrays5);
        _this.qArrays6 = _this.shuffle(_this.qArrays6);
        
        for(var i=0;i<1;i++)
        {
            _this.qArrays.push(_this.qArrays1[i]);
        }
       for(var j=0;j<1;j++)
        {
            _this.qArrays.push(_this.qArrays2[j]);
        }
        for(var j=0;j<1;j++)
        {
            _this.qArrays.push(_this.qArrays3[j]);
        }
        for(var j=0;j<1;j++)
        {
            _this.qArrays.push(_this.qArrays4[j]);
        }
        for(var j=0;j<1;j++)
        {
            _this.qArrays.push(_this.qArrays5[j]);
        }
        for(var j=0;j<1;j++)
        {
            _this.qArrays.push(_this.qArrays6[j]);
        }
        
        console.log(_this.qArrays);
       
     _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
       //_this.qArrays = _this.shuffle(_this.qArrays);
      
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
            case 11: _this.gotoEleventhQuestion();
    				break;
            case 12: _this.gotoTwevelvethQuestion();
    				break;
            case 13: _this.gotoThirteenthQuestion();
    				break;
            case 14: _this.gotoFourteenthQuestion();
    				break;
            case 15: _this.gotoFifteenthQuestion();
    				break;
            case 16:_this.gotoSixteenthQuestion();
    				break;
            case 17: _this.gotoSeventeenthQuestion();
    				break;
            case 18:_this.gotoEightteenthQuestion();
    				break;
            case 19:_this.gotoNineteenthQuestion();
    				break;
            case 20:_this.gotoTwentythQuestion();
    				break;
            case 21:_this.gotoTwentyonethQuestion();
    				break;
            case 22:_this.gotoTwentytwothQuestion();
    				break;
            case 23:_this.gotoTwentythreethQuestion();
    				break;
            case 24:_this.gotoTwentyfourthQuestion();
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
        
     _this.water = _this.add.sprite(230,380,'SG20_1_4water');
     _this.water.anchor.setTo(0.5);
     _this.water.scale.setTo(1,1); 
     _this.water.name="img1"; 
     
     _this.mirror = _this.add.sprite(600,270,'SG20_1_4mirror');
     _this.mirror.anchor.setTo(0.5);
     _this.mirror.scale.setTo(1,1); 
     _this.mirror.name="img2"; 
     
     _this.horizontal = _this.add.sprite(850,190,'SG20_1_4horizontal');
     _this.horizontal.anchor.setTo(0.5);
     _this.horizontal.scale.setTo(1.2,1.2); 
     _this.horizontal.name="img3"; 
     _this.horizontal.inputEnabled = true;
     _this.horizontal.input.useHandCursor = true;
      
     _this.vertical = _this.add.sprite(850,370,'SG20_1_4vertical');
     _this.vertical.anchor.setTo(0.5);
     _this.vertical.scale.setTo(1.2,1.2); 
     _this.vertical.name="img4"; 
     _this.vertical.inputEnabled = true;
     _this.vertical.input.useHandCursor = true; 
    
             
    },
    
    
 gotoFirstQuestion:function(){
       
     _this.questioNo = 1;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.boot = _this.add.sprite(220,200,'SG20_1_4boot');
     _this.boot.anchor.setTo(0.5);
     _this.boot.scale.setTo(1,1); 
     _this.boot.visible=true;
     _this.boot.name="boot"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
      _this.slideGrp.add(_this.boot);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
     
      _this.horizontal.events.onInputDown.add(_this.selected,_this);
      _this.vertical.events.onInputDown.add(_this.clicked,_this);
     

  },


gotoSecondQuestion:function(){
    
     _this.questioNo = 2;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.boot = _this.add.sprite(220,200,'SG20_1_4boot');
     _this.boot.anchor.setTo(0.5);
     _this.boot.scale.setTo(1,1); 
     _this.boot.visible=true;
     _this.boot.name="boot"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
    
      _this.horizontal.events.onInputDown.add(_this.clicked,_this);
      _this.vertical.events.onInputDown.add(_this.selected,_this);
     
      _this.slideGrp.add(_this.boot);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
    
  },
    
gotoThirdQuestion:function(){
              
     _this.questioNo = 3;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.banana = _this.add.sprite(250,210,'SG20_1_4banana');
     _this.banana.anchor.setTo(0.5);
     _this.banana.scale.setTo(1,1); 
     _this.banana.visible=true;
     _this.banana.name="banana"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
      _this.slideGrp.add(_this.banana);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
     
      _this.horizontal.events.onInputDown.add(_this.selected,_this);
      _this.vertical.events.onInputDown.add(_this.clicked,_this);
     
     },
    
    
gotoFourthQuestion:function(){
       
     _this.questioNo = 4;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.banana = _this.add.sprite(250,210,'SG20_1_4banana');
     _this.banana.anchor.setTo(0.5);
     _this.banana.scale.setTo(1,1); 
     _this.banana.visible=true;
     _this.banana.name="banana"; 
    
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
    
      _this.horizontal.events.onInputDown.add(_this.clicked,_this);
      _this.vertical.events.onInputDown.add(_this.selected,_this);
     
      _this.slideGrp.add(_this.banana);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);

     },
    
gotoFifthQuestion:function(){
       
     _this.questioNo = 5;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.can = _this.add.sprite(230,200,'SG20_1_4can');
     _this.can.anchor.setTo(0.5);
     _this.can.scale.setTo(1,1); 
     _this.can.visible=true;
     _this.can.name="can"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
      _this.slideGrp.add(_this.can);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
     
      _this.horizontal.events.onInputDown.add(_this.selected,_this);
      _this.vertical.events.onInputDown.add(_this.clicked,_this);  
     
},
    
gotoSixthQuestion:function(){
       
     _this.questioNo = 6;
     _this.getVoice();
     
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.can = _this.add.sprite(230,200,'SG20_1_4can');
     _this.can.anchor.setTo(0.5);
     _this.can.scale.setTo(1,1); 
     _this.can.visible=true;
     _this.can.name="can"; 
    
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
    
      _this.horizontal.events.onInputDown.add(_this.clicked,_this);
      _this.vertical.events.onInputDown.add(_this.selected,_this);
     
      _this.slideGrp.add(_this.can);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
    
},
  
    
gotoSeventhQuestion:function(){
      
      _this.questioNo = 7;
      _this.getVoice();
    
      _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.comb = _this.add.sprite(240,220,'SG20_1_4comb');
     _this.comb.anchor.setTo(0.5);
     _this.comb.scale.setTo(0.9,0.9); 
     _this.comb.visible=true;
     _this.comb.name="comb"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
      _this.slideGrp.add(_this.comb);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
     
      _this.horizontal.events.onInputDown.add(_this.selected,_this);
      _this.vertical.events.onInputDown.add(_this.clicked,_this);
       
    
     },
        
    
gotoEighthQuestion:function(){
    
     _this.questioNo = 8;
     _this.getVoice();
    
    _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.comb = _this.add.sprite(240,220,'SG20_1_4comb');
     _this.comb.anchor.setTo(0.5);
     _this.comb.scale.setTo(1,1); 
     _this.comb.visible=true;
     _this.comb.name="comb"; 
    
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
    
      _this.horizontal.events.onInputDown.add(_this.clicked,_this);
      _this.vertical.events.onInputDown.add(_this.selected,_this);
     
      _this.slideGrp.add(_this.comb);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
    
},

    
gotoNinthQuestion:function(){
    
     _this.questioNo = 9;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.cup = _this.add.sprite(250,200,'SG20_1_4cup');
     _this.cup.anchor.setTo(0.5);
     _this.cup.scale.setTo(1,1); 
     _this.cup.visible=true;
     _this.cup.name="cup"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
      _this.slideGrp.add(_this.cup);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
     
      _this.horizontal.events.onInputDown.add(_this.selected,_this);
      _this.vertical.events.onInputDown.add(_this.clicked,_this);

},

gotoTenthQuestion:function(){
    
     _this.questioNo = 10;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.cup = _this.add.sprite(250,200,'SG20_1_4cup');
     _this.cup.anchor.setTo(0.5);
     _this.cup.scale.setTo(1,1); 
     _this.cup.visible=true;
     _this.cup.name="cup"; 
    
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
    
      _this.horizontal.events.onInputDown.add(_this.clicked,_this);
      _this.vertical.events.onInputDown.add(_this.selected,_this);
     
      _this.slideGrp.add(_this.cup);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
    
},
    
gotoEleventhQuestion:function(){
     
     _this.questioNo = 11;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.hammer = _this.add.sprite(230,195,'SG20_1_4hammer');
     _this.hammer.anchor.setTo(0.5);
     _this.hammer.scale.setTo(0.8,0.8); 
     _this.hammer.visible=true;
     _this.hammer.name="hammer"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
      _this.slideGrp.add(_this.hammer);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
     
      _this.horizontal.events.onInputDown.add(_this.selected,_this);
      _this.vertical.events.onInputDown.add(_this.clicked,_this);
         
},
    				
gotoTwevelvethQuestion:function(){
    
     _this.questioNo = 12;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.hammer = _this.add.sprite(230,195,'SG20_1_4hammer');
     _this.hammer.anchor.setTo(0.5);
     _this.hammer.scale.setTo(0.8,0.8); 
     _this.hammer.visible=true;
     _this.hammer.name="hammer"; 
    
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
    
      _this.horizontal.events.onInputDown.add(_this.clicked,_this);
      _this.vertical.events.onInputDown.add(_this.selected,_this);
     
      _this.slideGrp.add(_this.hammer);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
    
},
    
gotoThirteenthQuestion:function(){
     
     _this.questioNo = 13;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.hand = _this.add.sprite(230,210,'SG20_1_4hand');
     _this.hand.anchor.setTo(0.5);
     _this.hand.scale.setTo(1,1); 
     _this.hand.visible=true;
     _this.hand.name="hand"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
      _this.slideGrp.add(_this.hand);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
     
      _this.horizontal.events.onInputDown.add(_this.selected,_this);
      _this.vertical.events.onInputDown.add(_this.clicked,_this);
     
     
},
    				
gotoFourteenthQuestion:function(){
  
     _this.questioNo = 14;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.hand = _this.add.sprite(230,210,'SG20_1_4hand');
     _this.hand.anchor.setTo(0.5);
     _this.hand.scale.setTo(1,1); 
     _this.hand.visible=true;
     _this.hand.name="hand"; 
    
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
    
      _this.horizontal.events.onInputDown.add(_this.clicked,_this);
      _this.vertical.events.onInputDown.add(_this.selected,_this);
     
      _this.slideGrp.add(_this.hand);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
    
},
    				
gotoFifteenthQuestion:function(){
     
     _this.questioNo = 15;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.key = _this.add.sprite(250,210,'SG20_1_4key');
     _this.key.anchor.setTo(0.5);
     _this.key.scale.setTo(1,1); 
     _this.key.visible=true;
     _this.key.name="key"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
      _this.slideGrp.add(_this.key);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
     
      _this.horizontal.events.onInputDown.add(_this.selected,_this);
      _this.vertical.events.onInputDown.add(_this.clicked,_this);
     
     
},
    				
gotoSixteenthQuestion:function(){
    
     _this.questioNo = 16;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.key = _this.add.sprite(250,210,'SG20_1_4key');
     _this.key.anchor.setTo(0.5);
     _this.key.scale.setTo(1,1); 
     _this.key.visible=true;
     _this.key.name="key"; 
    
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
    
      _this.horizontal.events.onInputDown.add(_this.clicked,_this);
      _this.vertical.events.onInputDown.add(_this.selected,_this);
     
      _this.slideGrp.add(_this.key);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
    
         
 },
    				
gotoSeventeenthQuestion:function(){
     
     _this.questioNo = 17;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.leg = _this.add.sprite(230,190,'SG20_1_4leg');
     _this.leg.anchor.setTo(0.5);
     _this.leg.scale.setTo(0.8,0.8); 
     _this.leg.visible=true;
     _this.leg.name="leg"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
      _this.slideGrp.add(_this.leg);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
     
      _this.horizontal.events.onInputDown.add(_this.selected,_this);
      _this.vertical.events.onInputDown.add(_this.clicked,_this);
       
},

gotoEightteenthQuestion:function(){
     
     _this.questioNo = 18;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.leg = _this.add.sprite(230,190,'SG20_1_4leg');
     _this.leg.anchor.setTo(0.5);
     _this.leg.scale.setTo(0.8,0.8); 
     _this.leg.visible=true;
     _this.leg.name="leg"; 
    
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
    
      _this.horizontal.events.onInputDown.add(_this.clicked,_this);
      _this.vertical.events.onInputDown.add(_this.selected,_this);
     
      _this.slideGrp.add(_this.leg);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
    
      
},
		
gotoNineteenthQuestion:function(){
     
     _this.questioNo = 19;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.triangle = _this.add.sprite(250,210,'SG20_1_4triangle');
     _this.triangle.anchor.setTo(0.5);
     _this.triangle.scale.setTo(0.8,0.8); 
     _this.triangle.visible=true;
     _this.triangle.name="triangle"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
      _this.slideGrp.add(_this.triangle);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
     
      _this.horizontal.events.onInputDown.add(_this.selected,_this);
      _this.vertical.events.onInputDown.add(_this.clicked,_this);
     
      
},
    				
gotoTwentythQuestion:function(){
     
     _this.questioNo = 20;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.triangle = _this.add.sprite(250,210,'SG20_1_4triangle');
     _this.triangle.anchor.setTo(0.5);
     _this.triangle.scale.setTo(1,1); 
     _this.triangle.visible=true;
     _this.triangle.name="triangle"; 
    
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
    
      _this.horizontal.events.onInputDown.add(_this.clicked,_this);
      _this.vertical.events.onInputDown.add(_this.selected,_this);
     
      _this.slideGrp.add(_this.triangle);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
    
    
},
    				
gotoTwentyonethQuestion:function(){
     
     _this.questioNo = 21;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.umbrella = _this.add.sprite(230,200,'SG20_1_4umbrella');
     _this.umbrella.anchor.setTo(0.5);
     _this.umbrella.scale.setTo(1,1); 
     _this.umbrella.visible=true;
     _this.umbrella.name="umbrella"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
      _this.slideGrp.add(_this.umbrella);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
     
      _this.horizontal.events.onInputDown.add(_this.selected,_this);
      _this.vertical.events.onInputDown.add(_this.clicked,_this);
     
       
},
    
gotoTwentytwothQuestion:function(){
     
     _this.questioNo = 22;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.umbrella = _this.add.sprite(230,200,'SG20_1_4umbrella');
     _this.umbrella.anchor.setTo(0.5);
     _this.umbrella.scale.setTo(1,1); 
     _this.umbrella.visible=true;
     _this.umbrella.name="umbrella"; 
    
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
    
      _this.horizontal.events.onInputDown.add(_this.clicked,_this);
      _this.vertical.events.onInputDown.add(_this.selected,_this);
     
      _this.slideGrp.add(_this.umbrella);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
    
},
    				
gotoTwentythreethQuestion:function(){
     
     _this.questioNo = 23;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.watercan = _this.add.sprite(230,200,'SG20_1_4watercan');
     _this.watercan.anchor.setTo(0.5);
     _this.watercan.scale.setTo(0.9,0.9); 
     _this.watercan.visible=true;
     _this.watercan.name="watercan"; 
     
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
      _this.slideGrp.add(_this.watercan);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
     
      _this.horizontal.events.onInputDown.add(_this.selected,_this);
      _this.vertical.events.onInputDown.add(_this.clicked,_this);
       
},
    				
gotoTwentyfourthQuestion:function(){
     
     _this.questioNo = 24;
     _this.getVoice();
    
     _this.slideGrp = _this.add.group();
     
     _this.loadobject();
     
     _this.watercan = _this.add.sprite(230,200,'SG20_1_4watercan');
     _this.watercan.anchor.setTo(0.5);
     _this.watercan.scale.setTo(1,1); 
     _this.watercan.visible=true;
     _this.watercan.name="watercan"; 
    
      _this.slideGrp.x = -1000;
      var tween = _this.add.tween(_this.slideGrp);
      tween.to({ x: 0 }, 2000,'Linear', true, 0);
    
      _this.horizontal.events.onInputDown.add(_this.clicked,_this);
      _this.vertical.events.onInputDown.add(_this.selected,_this);
     
      _this.slideGrp.add(_this.watercan);
      _this.slideGrp.add(_this.water);
      _this.slideGrp.add(_this.mirror);
      _this.slideGrp.add(_this.horizontal);
      _this.slideGrp.add(_this.vertical);
    
    
},
    				
    				

  clicked:function(target){
         console.log(target.name);
         _this.horizontal.events.onInputDown.removeAll();
         _this.vertical.events.onInputDown.removeAll();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 
         target.frame=1;
        if(_this.questioNo==1)
        {
              _this.time.events.add(800,function(){
              _this.boot1 = _this.add.sprite(610,200,'SG20_1_4boot');
              _this.boot1.anchor.setTo(0.5);
              _this.boot1.scale.setTo(1,1); 
              _this.boot1.name="boot1"; 
              _this.boot1.scale.x *= -1;
              _this.boot1.alpha=0;
              _this.add.tween(_this.boot1).to( { alpha:1 }, 1000, 'Linear', true, 0);
              },_this);
             _this.time.events.add(3000,function(){
              target.frame=0;
              _this.correctAns(); 
             },_this);   
        }
        else if(_this.questioNo==2)
        {
              _this.time.events.add(800,function(){
              _this.boot2 = _this.add.sprite(220,405,'SG20_1_4boot');
              _this.boot2.anchor.setTo(0.5);
              _this.boot2.scale.setTo(1,1); 
              _this.boot2.name="boot2";
              _this.boot2.scale.y *= -1;
              _this.boot2.alpha=0;
              _this.add.tween(_this.boot2).to( { alpha:0.5 }, 1000, 'Linear', true, 0);
              _this.time.events.add(1000,function(){
              _this.bubbleSound = _this.add.audio('bubble');
              _this.bubbleSound.play();  
              },_this);
              },_this);
              _this.time.events.add(3000,function(){
              target.frame=0;
              _this.correctAns();
             },_this);   
        }
        else if(_this.questioNo==3)
        {
              _this.time.events.add(800,function(){
              _this.banana1 = _this.add.sprite(590,210,'SG20_1_4banana');
              _this.banana1.anchor.setTo(0.5);
              _this.banana1.scale.setTo(1,1); 
              _this.banana1.name="banana1"; 
              _this.banana1.scale.x *= -1;
              _this.banana1.alpha=0;
              _this.add.tween(_this.banana1).to( { alpha:1 }, 1000, 'Linear', true, 0);
              },_this);
              _this.time.events.add(3000,function(){
              target.frame=0;
              _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==4)
        {
              _this.time.events.add(800,function(){
              _this.banana2 = _this.add.sprite(250,390,'SG20_1_4banana');
              _this.banana2.anchor.setTo(0.5);
              _this.banana2.scale.setTo(1,1); 
              _this.banana2.name="banana2";
              _this.banana2.scale.y *= -1;
              _this.banana2.alpha=0;
              _this.add.tween(_this.banana2).to( { alpha:0.5 }, 1000, 'Linear', true, 0);
              _this.time.events.add(1000,function(){
              _this.bubbleSound = _this.add.audio('bubble');
              _this.bubbleSound.play();
               },_this);
               },_this);
               _this.time.events.add(3000,function(){
               target.frame=0;
              _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==5)
        {
              _this.time.events.add(800,function(){
              _this.can1 = _this.add.sprite(600,200,'SG20_1_4can');
              _this.can1.anchor.setTo(0.5);
              _this.can1.scale.setTo(1,1); 
              _this.can1.name="can1"; 
              _this.can1.scale.x *= -1;
              _this.can1.alpha=0;
              _this.add.tween(_this.can1).to( { alpha:1 }, 1000, 'Linear', true, 0);  
               },_this);
              _this.time.events.add(3000,function(){
              target.frame=0;
              _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==6)
        {
              _this.time.events.add(800,function(){
              _this.can2 = _this.add.sprite(230,400,'SG20_1_4can');
              _this.can2.anchor.setTo(0.5);
              _this.can2.scale.setTo(1,1); 
              _this.can2.name="can2";
              _this.can2.scale.y *= -1;
              _this.can2.alpha=0;
              _this.add.tween(_this.can2).to( { alpha:0.5 }, 1000, 'Linear', true, 0);
              _this.time.events.add(1000,function(){
              _this.bubbleSound = _this.add.audio('bubble');
              _this.bubbleSound.play();   
              },_this);
              },_this);
              _this.time.events.add(3000,function(){
              target.frame=0;
              _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==7)
        {
              _this.time.events.add(800,function(){
              _this.comb1 = _this.add.sprite(600,220,'SG20_1_4comb');
              _this.comb1.anchor.setTo(0.5);
              _this.comb1.scale.setTo(0.9,0.9); 
              _this.comb1.name="can1"; 
              _this.comb1.scale.x *= -1;
              _this.comb1.alpha=0;
              _this.add.tween(_this.comb1).to( { alpha:1 }, 1000, 'Linear', true, 0);  
              },_this);
              _this.time.events.add(3000,function(){
              target.frame=0;
              _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==8)
        {
             _this.time.events.add(800,function(){
             _this.comb2 = _this.add.sprite(240,390,'SG20_1_4comb');
             _this.comb2.anchor.setTo(0.5);
             _this.comb2.scale.setTo(1,1); 
             _this.comb2.name="comb2";
             _this.comb2.scale.y *= -1;
             _this.comb2.alpha=0;
             _this.add.tween(_this.comb2).to( { alpha:0.5 }, 1000, 'Linear', true, 0);
             _this.time.events.add(1000,function(){
             _this.bubbleSound = _this.add.audio('bubble');
             _this.bubbleSound.play();  
              },_this);
              },_this);
             _this.time.events.add(3000,function(){
              target.frame=0;
             _this.correctAns();
             },_this);   
        }
        else if(_this.questioNo==9)
        {
             _this.time.events.add(800,function(){
             _this.cup1 = _this.add.sprite(580,200,'SG20_1_4cup');
             _this.cup1.anchor.setTo(0.5);
             _this.cup1.scale.setTo(1,1); 
             _this.cup1.name="cup1"; 
             _this.cup1.scale.x *= -1;
             _this.cup1.alpha=0;
             _this.add.tween(_this.cup1).to( { alpha:1 }, 1000, 'Linear', true, 0);  
              },_this);
             _this.time.events.add(3000,function(){
             target.frame=0;
             _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==10)
        {
              _this.time.events.add(800,function(){
              _this.cup2 = _this.add.sprite(250,400,'SG20_1_4cup');
              _this.cup2.anchor.setTo(0.5);
              _this.cup2.scale.setTo(1,1); 
              _this.cup2.name="cup2";
              _this.cup2.scale.y *= -1;
              _this.cup2.alpha=0;
              _this.add.tween(_this.cup2).to( { alpha:0.5 }, 1000, 'Linear', true, 0);
              _this.time.events.add(1000,function(){
              _this.bubbleSound = _this.add.audio('bubble');
              _this.bubbleSound.play();  
               },_this);
               },_this);
              _this.time.events.add(3000,function(){
               target.frame=0;
              _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==11)
        {
              _this.time.events.add(800,function(){
              _this.hammer1 = _this.add.sprite(600,195,'SG20_1_4hammer');
              _this.hammer1.anchor.setTo(0.5);
              _this.hammer1.scale.setTo(0.8,0.8); 
              _this.hammer1.name="hammer1"; 
              _this.hammer1.scale.x *= -1;
              _this.hammer1.alpha=0;
              _this.add.tween(_this.hammer1).to( { alpha:1 }, 1000, 'Linear', true, 0); 
              },_this);
              _this.time.events.add(3000,function(){
               target.frame=0;
              _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==12)
        {
              _this.time.events.add(800,function(){
              _this.hammer2 = _this.add.sprite(230,400,'SG20_1_4hammer');
              _this.hammer2.anchor.setTo(0.5);
              _this.hammer2.scale.setTo(0.8,0.8); 
              _this.hammer2.name="hammer2";
              _this.hammer2.scale.y *= -1;
              _this.hammer2.alpha=0;
              _this.add.tween(_this.hammer2).to( { alpha:0.5 }, 1000, 'Linear', true, 0);
              _this.time.events.add(1000,function(){
              _this.bubbleSound = _this.add.audio('bubble');
              _this.bubbleSound.play();  
               },_this);
               },_this);
              _this.time.events.add(3000,function(){
              target.frame=0;
              _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==13)
        {
              _this.time.events.add(800,function(){
              _this.hand1 = _this.add.sprite(600,210,'SG20_1_4hand');
              _this.hand1.anchor.setTo(0.5);
              _this.hand1.scale.setTo(1,1); 
              _this.hand1.name="hand1"; 
              _this.hand1.scale.x *= -1;
              _this.hand1.alpha=0;
              _this.add.tween(_this.hand1).to( { alpha:1 }, 1000, 'Linear', true, 0);
              },_this);
              _this.time.events.add(3000,function(){
               target.frame=0;
              _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==14)
        {
              _this.time.events.add(800,function(){
              _this.hand2 = _this.add.sprite(230,390,'SG20_1_4hand');
              _this.hand2.anchor.setTo(0.5);
              _this.hand2.scale.setTo(1,1); 
              _this.hand2.name="hand2";
              _this.hand2.scale.y *= -1;
              _this.hand2.alpha=0;
              _this.add.tween(_this.hand2).to( { alpha:0.5 }, 1000, 'Linear', true, 0);
              _this.time.events.add(1000,function(){
              _this.bubbleSound = _this.add.audio('bubble');
              _this.bubbleSound.play();  
               },_this);
               },_this);
              _this.time.events.add(3000,function(){
               target.frame=0;
              _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==15)
        {
              _this.time.events.add(800,function(){
              _this.key1 = _this.add.sprite(595,210,'SG20_1_4key');
              _this.key1.anchor.setTo(0.5);
              _this.key1.scale.setTo(1,1); 
              _this.key1.name="key1"; 
              _this.key1.scale.x *= -1;
              _this.key1.alpha=0;
              _this.add.tween(_this.key1).to( { alpha:1 }, 1000, 'Linear', true, 0);
               },_this); 
              _this.time.events.add(3000,function(){
              target.frame=0;
              _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==16)
        {
               _this.time.events.add(800,function(){
               _this.key2 = _this.add.sprite(250,380,'SG20_1_4key');
               _this.key2.anchor.setTo(0.5);
               _this.key2.scale.setTo(1,1); 
               _this.key2.name="key2";
               _this.key2.scale.y *= -1;
               _this.key2.alpha=0;
               _this.add.tween(_this.key2).to( { alpha:0.5 }, 1000, 'Linear', true, 0);
               _this.time.events.add(1000,function(){
               _this.bubbleSound = _this.add.audio('bubble');
               _this.bubbleSound.play();  
               },_this);
               },_this);
               _this.time.events.add(3000,function(){
               target.frame=0;
               _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==17)
        {
               _this.time.events.add(800,function(){
               _this.leg1 = _this.add.sprite(600,190,'SG20_1_4leg');
               _this.leg1.anchor.setTo(0.5);
               _this.leg1.scale.setTo(0.8,0.8); 
               _this.leg1.name="leg1"; 
               _this.leg1.scale.x *= -1;
               _this.leg1.alpha=0;
               _this.add.tween(_this.leg1).to( { alpha:1 }, 1000, 'Linear', true, 0);
               },_this);
               _this.time.events.add(3000,function(){
               target.frame=0;
               _this.correctAns();
               },_this);   
        }
        else if(_this.questioNo==18)
        {
               _this.time.events.add(800,function(){
               _this.leg2 = _this.add.sprite(230,400,'SG20_1_4leg');
               _this.leg2.anchor.setTo(0.5);
               _this.leg2.scale.setTo(0.8,0.8); 
               _this.leg2.name="leg2";
               _this.leg2.scale.y *= -1;
               _this.leg2.alpha=0;
               _this.add.tween(_this.leg2).to( { alpha:0.5 }, 1000, 'Linear', true, 0);
               _this.time.events.add(1000,function(){
               _this.bubbleSound = _this.add.audio('bubble');
               _this.bubbleSound.play();  
               },_this);
               },_this);
               _this.time.events.add(3000,function(){
               target.frame=0;
               _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==19)
        {
              _this.time.events.add(800,function(){
              _this.triangle1 = _this.add.sprite(590,210,'SG20_1_4triangle');
              _this.triangle1.anchor.setTo(0.5);
              _this.triangle1.scale.setTo(0.8,0.8); 
              _this.triangle1.name="triangle1"; 
              _this.triangle1.scale.x *= -1;
              _this.triangle1.alpha=0;
              _this.add.tween(_this.triangle1).to( { alpha:1 }, 1000, 'Linear', true, 0);
               },_this);  
              _this.time.events.add(3000,function(){
              target.frame=0;
              _this.correctAns();
              },_this);   
        }
        else if(_this.questioNo==20)
        {
              _this.time.events.add(800,function(){
              _this.triangle2 = _this.add.sprite(250,400,'SG20_1_4triangle');
              _this.triangle2.anchor.setTo(0.5);
              _this.triangle2.scale.setTo(1,1); 
              _this.triangle2.name="triangle2";
              _this.triangle2.scale.y *= -1;
              _this.triangle2.alpha=0;
              _this.add.tween(_this.triangle2).to( { alpha:0.5 }, 1000, 'Linear', true, 0);
              _this.time.events.add(1000,function(){
              _this.bubbleSound = _this.add.audio('bubble');
              _this.bubbleSound.play();  
               },_this);
               },_this);
              _this.time.events.add(4000,function(){
              target.frame=0;
              _this.correctAns();
              },_this);   
        }
	    else if(_this.questioNo==21)
        {
              _this.time.events.add(800,function(){
              _this.umbrella1 = _this.add.sprite(600,200,'SG20_1_4umbrella');
              _this.umbrella1.anchor.setTo(0.5);
              _this.umbrella1.scale.setTo(1,1); 
              _this.umbrella1.name="umbrella1"; 
              _this.umbrella1.scale.x *= -1;
              _this.umbrella1.alpha=0;
              _this.add.tween(_this.umbrella1).to( { alpha:1 }, 1000, 'Linear', true, 0);
               },_this);
              _this.time.events.add(3000,function(){
               target.frame=0;
              _this.correctAns();
              },_this);   
        }
       else if(_this.questioNo==22)
        {
              _this.time.events.add(800,function(){
              _this.umbrella2 = _this.add.sprite(230,400,'SG20_1_4umbrella');
              _this.umbrella2.anchor.setTo(0.5);
              _this.umbrella2.scale.setTo(1,1); 
              _this.umbrella2.name="umbrella2";
              _this.umbrella2.scale.y *= -1;
              _this.umbrella2.alpha=0;
              _this.add.tween(_this.umbrella2).to( { alpha:0.5 }, 1000, 'Linear', true, 0);
              _this.time.events.add(1000,function(){
              _this.bubbleSound = _this.add.audio('bubble');
              _this.bubbleSound.play();  
               },_this);
               },_this);
             _this.time.events.add(3000,function(){
              target.frame=0;
              _this.correctAns();
              },_this);   
        }
       else if(_this.questioNo==23)
        {
              _this.time.events.add(800,function(){
              _this.watercan1 = _this.add.sprite(600,200,'SG20_1_4watercan');
              _this.watercan1.anchor.setTo(0.5);
              _this.watercan1.scale.setTo(0.9,0.9); 
              _this.watercan1.name="watercan1"; 
              _this.watercan1.scale.x *= -1;
              _this.watercan1.alpha=0;
              _this.add.tween(_this.watercan1).to( { alpha:1 }, 1000, 'Linear', true, 0);   
               },_this);
              _this.time.events.add(3000,function(){
              target.frame=0;
              _this.correctAns();
              },_this);   
        }
       else if(_this.questioNo==24)
        {
              _this.time.events.add(800,function(){
              _this.watercan2 = _this.add.sprite(230,410,'SG20_1_4watercan');
              _this.watercan2.anchor.setTo(0.5);
              _this.watercan2.scale.setTo(1,1); 
              _this.watercan2.name="watercan2";
              _this.watercan2.scale.y *= -1;
              _this.watercan2.alpha=0;
              _this.add.tween(_this.watercan2).to( { alpha:0.5 }, 1000, 'Linear', true, 0);
              _this.time.events.add(1000,function(){
              _this.bubbleSound = _this.add.audio('bubble');
              _this.bubbleSound.play();  
               },_this);
             },_this);
            _this.time.events.add(3000,function(){
              target.frame=0;
              _this.correctAns();
              },_this);   
        }
            
    },
    
    selected:function(target){
        console.log(target.name);
        target.frame=1;
        if(_this.questioNo==1,3,5,7,9,11,13,15,17,19,21,23)
       {
          if(target.name=="img3")
            {
                 _this.wmusic = _this.add.audio('waudio');
		         _this.wmusic.play();
                 _this.shake.shake(10, _this.horizontal);
                 _this.time.events.add(500,function(){
                  target.frame=0;
                  },_this);
            }
        }
         if(_this.questioNo==2,4,6,8,10,12,14,16,18,20,22,24)
        {
          if(target.name=="img4")
            {
                 _this.wmusic = _this.add.audio('waudio');
		         _this.wmusic.play();
                 _this.shake.shake(10, _this.vertical);
                 _this.time.events.add(500,function(){
                  target.frame=0;
                  },_this);
            }
        } 

        _this.noofAttempts++;
      
            
    },
    
    addBubble:function(){
         
         _this.bubbleGrp=_this.add.group();
        
         _this.s1 = _this.add.sprite( 90,400, 'SG20_1_4bubble');
         _this.s1.anchor.setTo(0.5);
         _this.s1.scale.setTo(0.8,0.8);
         var tween = _this.add.tween(_this.s1);
         tween.to({ y: 350 }, 2000,'Linear', true, 0);
        
         _this.s2 = _this.add.sprite( 150,440, 'SG20_1_4bubble');
         _this.s2.anchor.setTo(0.5);
         _this.s2.scale.setTo(0.6,0.6);
         var tween = _this.add.tween(_this.s2);
         tween.to({ y: 390 }, 2000,'Linear', true, 0);
        
         _this.s3 = _this.add.sprite( 150,360, 'SG20_1_4bubble');
         _this.s3.anchor.setTo(0.5);
         _this.s3.scale.setTo(0.7,0.7);
         var tween = _this.add.tween(_this.s3);
         tween.to({ y: 340 }, 2000,'Linear', true, 0);
        
         _this.s4 = _this.add.sprite( 220,390, 'SG20_1_4bubble');
         _this.s4.anchor.setTo(0.5);
         _this.s4.scale.setTo(0.5,0.5);
         var tween = _this.add.tween(_this.s4);
         tween.to({ y: 360 }, 2000,'Linear', true, 0);

         _this.s5 = _this.add.sprite( 280,360, 'SG20_1_4bubble');
         _this.s5.anchor.setTo(0.5);
         _this.s5.scale.setTo(0.65,0.65);
         var tween = _this.add.tween(_this.s5);
         tween.to({ y: 340 }, 2000,'Linear', true, 0);

         _this.s6 = _this.add.sprite( 280,450, 'SG20_1_4bubble');
         _this.s6.anchor.setTo(0.5);
         _this.s6.scale.setTo(0.5,0.5);
         var tween = _this.add.tween(_this.s6);
         tween.to({ y: 390 }, 2000,'Linear', true, 0);
        
         _this.s7 = _this.add.sprite( 340,420, 'SG20_1_4bubble');
         _this.s7.anchor.setTo(0.5);
         _this.s7.scale.setTo(0.7,0.7);
         var tween = _this.add.tween(_this.s7);
         tween.to({ y: 400 }, 2000,'Linear', true, 0);
        
         _this.s8 = _this.add.sprite( 360,360, 'SG20_1_4bubble');
         _this.s8.anchor.setTo(0.5);
         _this.s8.scale.setTo(0.6,0.6);
         var tween = _this.add.tween(_this.s8);
         tween.to({ y: 350 }, 2000,'Linear', true, 0);
        
         _this.bubbleGrp.add(_this.s1);
         _this.bubbleGrp.add(_this.s2);
         _this.bubbleGrp.add(_this.s3);
         _this.bubbleGrp.add(_this.s4);
         _this.bubbleGrp.add(_this.s5);
         _this.bubbleGrp.add(_this.s6);
         _this.bubbleGrp.add(_this.s7);
         _this.bubbleGrp.add(_this.s8);
         
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
                      _this.count=0;
                         _this.countIncrement = 0;
                        
                          _this.slideGrp.destroy();
                        if(_this.boot1)
                          _this.boot1.destroy();  
                        if(_this.banana1)
                          _this.banana1.destroy();
                        if(_this.bubbleGrp)
                         _this.bubbleGrp.destroy();
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
                         _this.state.start('sg20_1_4Score',true,false);
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
         _this.sceneCount++;
       telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
       

      //  _this.wrongAnswer = false;
     
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
        if(_this.questioNo==1)
            {
        _this.time.events.add(1000,function(){
         var tween = _this.add.tween(_this.boot1);
        tween.to({ alpha: 0.10, alpha:0 }, 1000,'Linear', true, 0);
         },_this);
            }
        else if(_this.questioNo==2)
            {
        _this.time.events.add(1000,function(){
        _this.boot2.destroy();
        _this.addBubble();  
         },_this);
            }
        else if(_this.questioNo==3)
            {
        _this.time.events.add(1500,function(){
         var tween = _this.add.tween(_this.banana1);
        tween.to({ alpha: 0.10, alpha:0 }, 1000,'Linear', true, 0);
         },_this);
            }
        else if(_this.questioNo==4)
            {
        _this.time.events.add(1000,function(){
        _this.banana2.destroy();
        _this.addBubble();  
         },_this);
            }
         else if(_this.questioNo==5)
            {
        _this.time.events.add(1500,function(){
         var tween = _this.add.tween(_this.can1);
        tween.to({ alpha: 0.10, alpha:0 }, 1000,'Linear', true, 0);
         },_this);
            }
        else if(_this.questioNo==6)
            {
        _this.time.events.add(1000,function(){
        _this.can2.destroy();
        _this.addBubble();  
         },_this);
            }
         else if(_this.questioNo==7)
            {
        _this.time.events.add(1500,function(){
         var tween = _this.add.tween(_this.comb1);
        tween.to({ alpha: 0.10, alpha:0 }, 1000,'Linear', true, 0);
         },_this);
            }
        else if(_this.questioNo==8)
            {
        _this.time.events.add(1000,function(){
        _this.comb2.destroy();
        _this.addBubble();  
         },_this);
            }
         else if(_this.questioNo==9)
            {
        _this.time.events.add(1500,function(){
         var tween = _this.add.tween(_this.cup1);
        tween.to({ alpha: 0.10, alpha:0 }, 1000,'Linear', true, 0);
         },_this);
            }
        else if(_this.questioNo==10)
            {
        _this.time.events.add(1000,function(){
        _this.cup2.destroy();
        _this.addBubble();  
         },_this);
            }
         else if(_this.questioNo==11)
            {
        _this.time.events.add(1500,function(){
         var tween = _this.add.tween(_this.hammer1);
        tween.to({ alpha: 0.10, alpha:0 }, 1000,'Linear', true, 0);
         },_this);
            }
        else if(_this.questioNo==12)
            {
        _this.time.events.add(1000,function(){
        _this.hammer2.destroy();
        _this.addBubble();  
         },_this);
            }
         else if(_this.questioNo==13)
            {
        _this.time.events.add(1500,function(){
         var tween = _this.add.tween(_this.hand1);
        tween.to({ alpha: 0.10, alpha:0 }, 1000,'Linear', true, 0);
         },_this);
            }
        else if(_this.questioNo==14)
            {
        _this.time.events.add(1000,function(){
        _this.hand2.destroy();
        _this.addBubble();  
         },_this);
            }
         else if(_this.questioNo==15)
            {
        _this.time.events.add(1500,function(){
         var tween = _this.add.tween(_this.key1);
        tween.to({ alpha: 0.10, alpha:0 }, 1000,'Linear', true, 0);
         },_this);
            }
        else if(_this.questioNo==16)
            {
        _this.time.events.add(1000,function(){
        _this.key2.destroy();
        _this.addBubble();  
         },_this);
            }
         else if(_this.questioNo==17)
            {
        _this.time.events.add(1500,function(){
         var tween = _this.add.tween(_this.leg1);
        tween.to({ alpha: 0.10, alpha:0 }, 1000,'Linear', true, 0);
         },_this);
            }
        else if(_this.questioNo==18)
            {
        _this.time.events.add(1000,function(){
        _this.leg2.destroy();
        _this.addBubble();  
         },_this);
            }
         else if(_this.questioNo==19)
            {
        _this.time.events.add(1500,function(){
         var tween = _this.add.tween(_this.triangle1);
        tween.to({ alpha: 0.10, alpha:0 }, 1000,'Linear', true, 0);
         },_this);
            }
        else if(_this.questioNo==20)
            {
        _this.time.events.add(1000,function(){
        _this.triangle2.destroy();
        _this.addBubble();  
         },_this);
            }
         else if(_this.questioNo==21)
            {
        _this.time.events.add(1500,function(){
         var tween = _this.add.tween(_this.umbrella1);
        tween.to({ alpha: 0.10, alpha:0 }, 1000,'Linear', true, 0);
         },_this);
            }
        else if(_this.questioNo==22)
            {
        _this.time.events.add(1000,function(){
        _this.umbrella2.destroy();
        _this.addBubble();  
         },_this);
            }
         else if(_this.questioNo==23)
            {
        _this.time.events.add(1500,function(){
         var tween = _this.add.tween(_this.watercan1);
        tween.to({ alpha: 0.10, alpha:0 }, 1000,'Linear', true, 0);
         },_this);
            }
        else if(_this.questioNo==24)
            {
        _this.time.events.add(1000,function(){
        _this.watercan2.destroy();
        _this.addBubble();  
         },_this);
            }
        
		
        _this.time.events.add(3000, _this.removeCelebration, _this);
        
	},    
    
  
    getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no11])
        {
            case 1:
            case 3:
            case 5: 
            case 7:
            case 9:
            case 11:
            case 13:
            case 15:
            case 17:
            case 19:
            case 21:
            case 23: 
            if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/English/sg20.1.4aE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Hindi/sg20.1.4aH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Kannada/sg20.1.4aK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Gujrati/sg20.1.4a.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Marathi/sg20.1.4a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Telugu/sg20.1.4a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Tamil/sg20.1.4a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Urdu/sg20.1.4a.mp3");
                    }
                    else
                    {
                      _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Odiya/sg20.1.4a.mp3");
                    }
                    break;
            case 2:
            case 4:
            case 6: 
            case 8:
            case 10:
            case 12:
            case 14:
            case 16:
            case 18:
            case 20:
            case 22:
            case 24:
            if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/English/sg20.1.4bE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Hindi/sg20.1.4bH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Kannada/sg20.1.4bK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Gujrati/sg20.1.4b.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Marathi/sg20.1.4b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Telugu/sg20.1.4b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Tamil/sg20.1.4b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Urdu/sg20.1.4b.mp3");
                    }
                    else
                    {
                      _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.1.4/Odiya/sg20.1.4b.mp3");
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

       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       