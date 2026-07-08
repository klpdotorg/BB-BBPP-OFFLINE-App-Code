Game.nsf2_5level1=function(){};

Game.nsf2_5level1.prototype={
    init:function(game)
    {
       _this = this;
        telInitializer.gameIdInit("NSF2_5",gradeSelected);
       
    },

    preload:function(game){
  if(!window.grade5NSF2){

            window.grade5NSF2 = true;

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

            this.load.image('F2_5backg',window.baseUrl+'assets/gradeAssets/nsf2.5/backg.png');
        
        this.load.image('F2_5plate', window.baseUrl+'assets/gradeAssets/nsf2.5/plate.png');
        this.load.image('F2_5greenplate', window.baseUrl+'assets/gradeAssets/nsf2.5/greenplate.png');
        this.load.image('F2_5orangeplate', window.baseUrl+'assets/gradeAssets/nsf2.5/orangeplate.png');
        this.load.image('F2_5A3', window.baseUrl+'assets/gradeAssets/nsf2.5/A3.png');
        this.load.image('F2_5A4', window.baseUrl+'assets/gradeAssets/nsf2.5/A4.png');
        this.load.image('F2_5A5', window.baseUrl+'assets/gradeAssets/nsf2.5/A5.png');
        this.load.image('F2_5A6', window.baseUrl+'assets/gradeAssets/nsf2.5/A6.png');
        this.load.image('F2_5A7', window.baseUrl+'assets/gradeAssets/nsf2.5/A7.png');
        this.load.image('F2_5A8', window.baseUrl+'assets/gradeAssets/nsf2.5/A8.png');
        this.load.image('F2_5A9', window.baseUrl+'assets/gradeAssets/nsf2.5/A9.png');
        this.load.image('F2_5A10', window.baseUrl+'assets/gradeAssets/nsf2.5/A10.png');
        this.load.image('F2_5B3', window.baseUrl+'assets/gradeAssets/nsf2.5/B3.png');
        this.load.image('F2_5B4', window.baseUrl+'assets/gradeAssets/nsf2.5/B4.png');
        this.load.image('F2_5B5', window.baseUrl+'assets/gradeAssets/nsf2.5/B5.png');
        this.load.image('F2_5B6', window.baseUrl+'assets/gradeAssets/nsf2.5/B6.png');
        this.load.image('F2_5B7', window.baseUrl+'assets/gradeAssets/nsf2.5/B7.png');
        this.load.image('F2_5B8', window.baseUrl+'assets/gradeAssets/nsf2.5/B8.png');
        this.load.image('F2_5B9', window.baseUrl+'assets/gradeAssets/nsf2.5/B9.png');
        this.load.image('F2_5B10', window.baseUrl+'assets/gradeAssets/nsf2.5/B10.png');
        this.load.image('F2_5C3', window.baseUrl+'assets/gradeAssets/nsf2.5/C3.png');
        this.load.image('F2_5C4', window.baseUrl+'assets/gradeAssets/nsf2.5/C4.png');
        this.load.image('F2_5C5', window.baseUrl+'assets/gradeAssets/nsf2.5/C5.png');
        this.load.image('F2_5C6', window.baseUrl+'assets/gradeAssets/nsf2.5/C6.png');
        this.load.image('F2_5C7', window.baseUrl+'assets/gradeAssets/nsf2.5/C7.png');
        this.load.image('F2_5C8', window.baseUrl+'assets/gradeAssets/nsf2.5/C8.png');
        this.load.image('F2_5C9', window.baseUrl+'assets/gradeAssets/nsf2.5/C9.png');
        this.load.image('F2_5C10', window.baseUrl+'assets/gradeAssets/nsf2.5/C10.png');
        this.load.image('F2_5bottombar', window.baseUrl+'assets/gradeAssets/nsf2.5/bottombar.png');
        this.load.image('F2_5line', window.baseUrl+'assets/gradeAssets/nsf2.5/line.png');
        this.load.atlas('F2_5box1',window.baseUrl+'assets/gradeAssets/nsf2.5/box1.png',window.baseUrl+'json/gradeJson/nsf2.5/box1.json');
        this.load.atlas('F2_5cloud1',window.baseUrl+'assets/gradeAssets/nsf2.5/cloud1.png',window.baseUrl+'json/gradeJson/nsf2.5/cloud1.json');
        this.load.atlas('F2_5cloud2',window.baseUrl+'assets/gradeAssets/nsf2.5/cloud2.png',window.baseUrl+'json/gradeJson/nsf2.5/cloud2.json');
        this.load.atlas('F2_5erase',window.baseUrl+'assets/gradeAssets/nsf2.5/erase.png',window.baseUrl+'json/gradeJson/nsf2.5/erase.json');
        this.load.atlas('F2_5rightmark',window.baseUrl+'assets/gradeAssets/nsf2.5/rightmark.png',window.baseUrl+'json/gradeJson/nsf2.5/rightmark.json');
        this.load.atlas('F2_5numberpad',window.baseUrl+'assets/gradeAssets/nsf2.5/numberpad.png',window.baseUrl+'json/gradeJson/nsf2.5/numberpad.json');
        this.load.atlas('F2_5numbers',window.baseUrl+'assets/gradeAssets/nsf2.5/numbers.png',window.baseUrl+'json/gradeJson/nsf2.5/numbers.json');
        this.load.atlas('F2_5numbers1',window.baseUrl+'assets/gradeAssets/nsf2.5/numbers1.png',window.baseUrl+'json/gradeJson/nsf2.5/numbers1.json');
        this.load.atlas('F2_5numbers2',window.baseUrl+'assets/gradeAssets/nsf2.5/numbers2.png',window.baseUrl+'json/gradeJson/nsf2.5/numbers2.json');
        this.load.atlas('F2_5compare',window.baseUrl+'assets/gradeAssets/nsf2.5/compare.png',window.baseUrl+'json/gradeJson/nsf2.5/compare.json');
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
        _this.Question = 0;
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
       //_this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
         _this.selectedAns3 = "";
        _this.selectedAns4 = "";
         _this.wrongAnswer = false;
        _this.soundPlayed = false;
        
        _this.orangeplatecount = 0;
        _this.greenplatecount = 0;
        _this.qArrays = new Array();
        

         _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
         _this.qArrays = _this.shuffle(_this.qArrays);
         
         _this.snapsound = _this.add.audio('snapSound');
        
        
        console.log(_this.qArrays);

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'F2_5backg');
        
        _this.topbar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.topbar.scale.setTo(1,1.1);
        
        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade1levelSelectionScreen',true,false);
            console.log("here");},_this,0,1,2);

        _this.speaker = _this.add.button(600,5,'grade11_speaker',function(){
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


loadobject:function()
    {
         _this.whiteplate1 = _this.add.sprite(230,150,'F2_5plate');
         _this.whiteplate1.anchor.setTo(0.5);
         _this.whiteplate1.scale.setTo(0.8,0.6); 
         _this.whiteplate1.name="plate1";
        
         _this.whiteplate2 = _this.add.sprite(720,150,'F2_5plate');
         _this.whiteplate2.anchor.setTo(0.5);
         _this.whiteplate2.scale.setTo(0.8,0.6); 
         _this.whiteplate2.name="plate2";
        
         _this.orangeplate = _this.add.sprite(160,410,'F2_5orangeplate');
         _this.orangeplate.anchor.setTo(0.5);
         _this.orangeplate.scale.setTo(1,1);
         _this.orangeplate.name="orangeplate";
        
         _this.greenplate = _this.add.sprite(795,410,'F2_5greenplate');
         _this.greenplate.anchor.setTo(0.5);
         _this.greenplate.scale.setTo(1,1);
         _this.greenplate.name="greenplate";
        
         _this.box = _this.add.sprite(480,290,'F2_5compare');
         _this.box.anchor.setTo(0.5);
         _this.box.scale.setTo(1.1,1.1);
         _this.box.frame=0;
        //drag symbol
         _this.lessthan = _this.add.sprite(350,420,'F2_5compare');
         _this.lessthan.anchor.setTo(0.5);
         _this.lessthan.scale.setTo(1.1,1.1);
         _this.lessthan.name = "lessthan";
         _this.lessthan.frame=1;
         _this.lessthan.inputEnabled = false;
         _this.lessthan.events.onInputDown.add(_this.onSymbolDragStart,_this);
        
         _this.equal = _this.add.sprite(480,420,'F2_5compare');
         _this.equal.anchor.setTo(0.5);
         _this.equal.scale.setTo(1.1,1.1);
         _this.equal.name = "equal";
         _this.equal.frame=3;
         _this.equal.inputEnabled = false;
         _this.equal.events.onInputDown.add(_this.onSymbolDragStart,_this);
        
         _this.greaterthan = _this.add.sprite(610,420,'F2_5compare');
         _this.greaterthan.anchor.setTo(0.5);
         _this.greaterthan.scale.setTo(1.1,1.1);
         _this.greaterthan.name = "greaterthan";
         _this.greaterthan.frame=2;
         _this.greaterthan.inputEnabled = false;
         _this.greaterthan.events.onInputDown.add(_this.onSymbolDragStart,_this);
        
         _this.line1 = _this.add.sprite(350,290,'F2_5line');
         _this.line1.anchor.setTo(0.5);
         _this.line1.scale.setTo(1,1);
         
         _this.line2 = _this.add.sprite(610,290,'F2_5line');
         _this.line2.anchor.setTo(0.5);
         _this.line2.scale.setTo(1,1);
        

        
    },
    
 gotoFirstQuestion:function(){
    
    _this.Question = 1;
    _this.loadobject();
   if(_this.soundPlayed == false)
    {
     // _this.getVoice();
      _this.soundPlayed = true;     
    }
   
     
     _this.group1 = _this.add.group();
      _this.group2 = _this.add.group();
     _this.wplate1cakegroup = _this.add.group();
     _this.wplate2cakegroup = _this.add.group();
     _this.oplatecakegroup = _this.add.group();
     _this.gplatecakegroup = _this.add.group();
     _this.comparegroup = _this.add.group();
     
      if(_this.wrongAnswer == false)
        {
            _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group2.x=1000;
            _this.tween1=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate1cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate1cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate2cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate2cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.oplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.oplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.gplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.gplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.comparegroup.x=1000;
            _this.tween1=_this.add.tween(_this.comparegroup).to( { x: 0 }, 1500, 'Linear', true,0);
        
        }
    
    _this.cloud1 = _this.add.sprite(100,280,'F2_5cloud1');
    _this.cloud1.anchor.setTo(0.5);
    _this.cloud1.scale.setTo(0.8,0.8);
    _this.cloud1.frame=5;
    
    _this.cloud2 = _this.add.sprite(840,280,'F2_5cloud2');
    _this.cloud2.anchor.setTo(0.5);
    _this.cloud2.scale.setTo(0.8,0.8);
    _this.cloud2.frame=5;
     
     //left side white plate
    _this.cake1 = _this.add.sprite(195,120,'F2_5B8');
    _this.cake1.anchor.setTo(0.5);
    _this.cake1.scale.setTo(1,1);
    _this.cake1.name = "cake1";
    _this.cake1.inputEnabled = true;
    _this.cake1.events.onInputDown.add(_this.onCakeDragStart1,_this);
    
    _this.cake2 = _this.add.sprite(-4,15,'F2_5B9');
    _this.cake2.anchor.setTo(0.5);
    _this.cake2.scale.setTo(1,1);
    _this.cake2.name = "cake2";
    _this.cake1.addChild(_this.cake2);
     
    _this.cake3 = _this.add.sprite(238,110,'F2_5B7');
    _this.cake3.anchor.setTo(0.5);
    _this.cake3.scale.setTo(0.85,0.85);
    _this.cake3.name = "cake3";
    _this.cake3.inputEnabled = true;
    _this.cake3.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake4 = _this.add.sprite(20,3,'F2_5B6');
    _this.cake4.anchor.setTo(0.5);
    _this.cake4.scale.setTo(0.93,0.93);
    _this.cake4.name = "cake4";
    _this.cake3.addChild(_this.cake4);
     
    _this.cake5 = _this.add.sprite(200,160,'F2_5B10');
    _this.cake5.anchor.setTo(0.5);
    _this.cake5.scale.setTo(0.92,0.92);
    _this.cake5.name = "cake5";
    _this.cake5.inputEnabled = true;
    _this.cake5.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake6 = _this.add.sprite(19,3,'F2_5B3');
    _this.cake6.anchor.setTo(0.5);
    _this.cake6.scale.setTo(0.98,0.98);
    _this.cake6.name = "cake6";
    _this.cake5.addChild(_this.cake6);
     
    _this.cake7 = _this.add.sprite(262,150,'F2_5B5');
    _this.cake7.anchor.setTo(0.5);
    _this.cake7.scale.setTo(0.9,0.9);
    _this.cake7.name = "cake7";
    _this.cake7.inputEnabled = true;
    _this.cake7.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake8 = _this.add.sprite(-3,11,'F2_5B4');
    _this.cake8.anchor.setTo(0.5);
    _this.cake8.scale.setTo(1,1);
    _this.cake8.name = "cake8";
    _this.cake7.addChild(_this.cake8);
     
     //right side white plate
    _this.cake11 = _this.add.sprite(700,110,'F2_5B8');
    _this.cake11.anchor.setTo(0.5);
    _this.cake11.scale.setTo(1,1);
    _this.cake11.name = "cake11";
    _this.cake11.inputEnabled = true;
    _this.cake11.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake12 = _this.add.sprite(670,135,'F2_5B9');
    _this.cake12.anchor.setTo(0.5);
    _this.cake12.scale.setTo(1,1);
    _this.cake12.name = "cake12";
    _this.cake12.inputEnabled = true;
    _this.cake12.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake13 = _this.add.sprite(740,110,'F2_5B7');
    _this.cake13.anchor.setTo(0.5);
    _this.cake13.scale.setTo(0.85,0.85);
    _this.cake13.name = "cake13";
    _this.cake13.inputEnabled = true;
    _this.cake13.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake14 = _this.add.sprite(770,115,'F2_5B6');
    _this.cake14.anchor.setTo(0.5);
    _this.cake14.scale.setTo(0.85,0.85);
    _this.cake14.name = "cake14";
    _this.cake14.inputEnabled = true;
    _this.cake14.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake15 = _this.add.sprite(780,140,'F2_5B5');
    _this.cake15.anchor.setTo(0.5);
    _this.cake15.scale.setTo(0.9,0.9);
    _this.cake15.name = "cake15";
    _this.cake15.inputEnabled = true;
    _this.cake15.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake16 = _this.add.sprite(760,160,'F2_5B4');
    _this.cake16.anchor.setTo(0.5);
    _this.cake16.scale.setTo(0.9,0.9);
    _this.cake16.name = "cake16";
    _this.cake16.inputEnabled = true;
    _this.cake16.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake17 = _this.add.sprite(720,160,'F2_5B3');
    _this.cake17.anchor.setTo(0.5);
    _this.cake17.scale.setTo(0.9,0.9);
    _this.cake17.name = "cake17";
    _this.cake17.inputEnabled = true;
    _this.cake17.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake18 = _this.add.sprite(680,160,'F2_5B10');
    _this.cake18.anchor.setTo(0.5);
    _this.cake18.scale.setTo(0.9,0.9);
    _this.cake18.name = "cake18";
    _this.cake18.inputEnabled = true;
    _this.cake18.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
      //left side orange plate
    _this.cake1l = _this.add.sprite(130,380,'F2_5B8');
    _this.cake1l.anchor.setTo(0.5);
    _this.cake1l.scale.setTo(1,1);
    _this.cake1l.name = "cake1l";
    
    _this.cake2l = _this.add.sprite(-4,15,'F2_5B9');
    _this.cake2l.anchor.setTo(0.5);
    _this.cake2l.scale.setTo(1,1);
    _this.cake2l.name = "cake2l";
    _this.cake1l.addChild(_this.cake2l);
    _this.cake1l.visible=false;
     
    _this.cake3l = _this.add.sprite(170,370,'F2_5B7');
    _this.cake3l.anchor.setTo(0.5);
    _this.cake3l.scale.setTo(0.85,0.85);
    _this.cake3l.name = "cake3l";
     
    _this.cake4l = _this.add.sprite(20,3,'F2_5B6');
    _this.cake4l.anchor.setTo(0.5);
    _this.cake4l.scale.setTo(0.93,0.93);
    _this.cake4l.name = "cake4l";
    _this.cake3l.addChild(_this.cake4l);
    _this.cake3l.visible=false;
     
    _this.cake5l = _this.add.sprite(140,418,'F2_5B10');
    _this.cake5l.anchor.setTo(0.5);
    _this.cake5l.scale.setTo(0.92,0.92);
    _this.cake5l.name = "cake5l";
     
    _this.cake6l = _this.add.sprite(19,3,'F2_5B3');
    _this.cake6l.anchor.setTo(0.5);
    _this.cake6l.scale.setTo(0.98,0.98);
    _this.cake6l.name = "cake6l";
    _this.cake5l.addChild(_this.cake6l);
    _this.cake5l.visible=false;
     
    _this.cake7l = _this.add.sprite(200,400,'F2_5B5');
    _this.cake7l.anchor.setTo(0.5);
    _this.cake7l.scale.setTo(0.9,0.9);
    _this.cake7l.name = "cake7l";
     
    _this.cake8l = _this.add.sprite(-3,11,'F2_5B4');
    _this.cake8l.anchor.setTo(0.5);
    _this.cake8l.scale.setTo(1,1);
    _this.cake8l.name = "cake8l";
    _this.cake7l.addChild(_this.cake8l);
    _this.cake7l.visible=false;
     
      //right side green plate
    _this.cake11r = _this.add.sprite(765,380,'F2_5B8');
    _this.cake11r.anchor.setTo(0.5);
    _this.cake11r.scale.setTo(1,1);
    _this.cake11r.name = "cake11r";
    _this.cake11r.visible=false;
     
    _this.cake12r = _this.add.sprite(735,400,'F2_5B9');
    _this.cake12r.anchor.setTo(0.5);
    _this.cake12r.scale.setTo(1,1);
    _this.cake12r.name = "cake12r";
    _this.cake12r.visible=false;
     
    _this.cake13r = _this.add.sprite(800,380,'F2_5B7');
    _this.cake13r.anchor.setTo(0.5);
    _this.cake13r.scale.setTo(0.85,0.85);
    _this.cake13r.name = "cake13r";
    _this.cake13r.visible=false;
     
    _this.cake14r = _this.add.sprite(840,380,'F2_5B6');
    _this.cake14r.anchor.setTo(0.5);
    _this.cake14r.scale.setTo(0.85,0.85);
    _this.cake14r.name = "cake14r";
    _this.cake14r.visible=false;
     
    _this.cake15r = _this.add.sprite(850,410,'F2_5B5');
    _this.cake15r.anchor.setTo(0.5);
    _this.cake15r.scale.setTo(0.9,0.9);
    _this.cake15r.name = "cake15r";
    _this.cake15r.visible=false;
     
    _this.cake16r = _this.add.sprite(830,420,'F2_5B4');
    _this.cake16r.anchor.setTo(0.5);
    _this.cake16r.scale.setTo(0.9,0.9);
    _this.cake16r.name = "cake16r";
    _this.cake16r.visible=false;
     
    _this.cake17r = _this.add.sprite(795,420,'F2_5B3');
    _this.cake17r.anchor.setTo(0.5);
    _this.cake17r.scale.setTo(0.9,0.9);
    _this.cake17r.name = "cake17r";
    _this.cake17r.visible=false;
     
    _this.cake18r = _this.add.sprite(753,420,'F2_5B10');
    _this.cake18r.anchor.setTo(0.5);
    _this.cake18r.scale.setTo(0.9,0.9);
    _this.cake18r.name = "cake18r";
    _this.cake18r.visible=false;
     
  
    _this.txtbox1 = _this.add.sprite(350,250,'F2_5box1');
    _this.txtbox1.anchor.setTo(0.5);
    _this.txtbox1.scale.setTo(1.5,1.5);
    _this.txtbox1.frame=0;
     
    _this.number1 = _this.add.sprite(345,250,'F2_5numbers2');
    _this.number1.anchor.setTo(0.5);
    _this.number1.scale.setTo(1.5,1.5);
    _this.number1.frame=4;
        
    _this.txtbox2 = _this.add.sprite(350,335,'F2_5box1');
    _this.txtbox2.anchor.setTo(0.5);
    _this.txtbox2.scale.setTo(1.5,1.5);
    _this.txtbox2.frame=1;
    _this.txtbox2.name="numbox2";
    _this.txtbox2.inputEnabled = false;
    _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
    _this.txtbox4 = _this.add.sprite(610,335,'F2_5box1');
    _this.txtbox4.anchor.setTo(0.5);
    _this.txtbox4.scale.setTo(1.5,1.5);
    _this.txtbox4.frame=1;
    _this.txtbox4.name="numbox4";
    _this.txtbox4.inputEnabled = false;
    _this.txtbox4.events.onInputDown.add(_this.numberBoxClicked,_this);
       
    _this.txtbox3 = _this.add.sprite(610,250,'F2_5box1');
    _this.txtbox3.anchor.setTo(0.5);
    _this.txtbox3.scale.setTo(1.5,1.5);
    _this.txtbox3.frame=0;
   
    _this.number2 = _this.add.sprite(605,250,'F2_5numbers2');
    _this.number2.anchor.setTo(0.5);
    _this.number2.scale.setTo(1.5,1.5);
    _this.number2.frame=4;
     
    _this.numBoxNum2 = _this.add.sprite(345,335,'F2_5numbers1');
    _this.numBoxNum2.anchor.setTo(0.5);
    _this.numBoxNum2.scale.setTo(1.2,1.2);
    _this.numBox2Pressed = false;
    _this.numBoxNum2.visible = false;
    _this.numBoxNum2.frame=4;
     
    _this.numBoxNum4 = _this.add.sprite(605,335,'F2_5numbers1');
    _this.numBoxNum4.anchor.setTo(0.5);
    _this.numBoxNum4.scale.setTo(1.2,1.2);
    _this.numBox4Pressed = false;
    _this.numBoxNum4.visible = false;
    _this.numBoxNum4.frame=8;
     
     _this.rightAns="48";
     
     _this.addNumberPad();
     
     _this.group1.add(_this.whiteplate1);
     _this.group1.add(_this.whiteplate2);
     _this.group1.add(_this.orangeplate);
      _this.group1.add(_this.greenplate);
      _this.group1.add(_this.cloud1);
      _this.group1.add(_this.cloud2);
      _this.group2.add(_this.txtbox1);
      _this.group2.add(_this.txtbox2);
      _this.group2.add(_this.txtbox3);
      _this.group2.add(_this.txtbox4);
      _this.group2.add(_this.number1);
      _this.group2.add(_this.number2);
      _this.group1.add(_this.line1);
      _this.group1.add(_this.line2);
     _this.group2.add(_this.numBoxNum2);
     _this.group2.add(_this.numBoxNum4);
     
     _this.group2.add(_this.cake1);
   //  _this.wplate1cakegroup.add(_this.cake2);
     _this.group2.add(_this.cake3);
  //   _this.wplate1cakegroup.add(_this.cake4);
     _this.group2.add(_this.cake5);
  //   _this.wplate1cakegroup.add(_this.cake6);
     _this.group2.add(_this.cake7);
  //   _this.wplate1cakegroup.add(_this.cake8);
     
     _this.group2.add(_this.cake11);
     _this.group2.add(_this.cake12);
     _this.group2.add(_this.cake13);
     _this.group2.add(_this.cake14);
     _this.group2.add(_this.cake15);
     _this.group2.add(_this.cake16);
     _this.group2.add(_this.cake17);
     _this.group2.add(_this.cake18);
     
     _this.group2.add(_this.cake1l);
  //   _this.oplatecakegroup.add(_this.cake2l);
     _this.group2.add(_this.cake3l);
 //    _this.oplatecakegroup.add(_this.cake4l);
     _this.group2.add(_this.cake5l);
 //    _this.oplatecakegroup.add(_this.cake6l);
     _this.group2.add(_this.cake7l);
 //    _this.oplatecakegroup.add(_this.cake8l);
    
     _this.group2.add(_this.cake11r);
     _this.group2.add(_this.cake12r);
     _this.group2.add(_this.cake13r);
     _this.group2.add(_this.cake14r);
     _this.group2.add(_this.cake15r);
     _this.group2.add(_this.cake16r);
     _this.group2.add(_this.cake17r);
     _this.group2.add(_this.cake18r);
     
     _this.group2.add(_this.box);
     _this.group2.add(_this.lessthan);
     _this.group2.add(_this.greaterthan);
     _this.group2.add(_this.equal);
     
  },
    
 gotoSecondQuestion:function()
    {
       _this.Question = 2;
       if(_this.soundPlayed == false)
    {
      //_this.getVoice();
      _this.soundPlayed = true;     
    }
       _this.loadobject(); 
        
          _this.group1 = _this.add.group();
      _this.group2 = _this.add.group();
     _this.wplate1cakegroup = _this.add.group();
     _this.wplate2cakegroup = _this.add.group();
     _this.oplatecakegroup = _this.add.group();
     _this.gplatecakegroup = _this.add.group();
     _this.comparegroup = _this.add.group();
        
        if(_this.wrongAnswer == false)
        {
            _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group2.x=1000;
            _this.tween1=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate1cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate1cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate2cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate2cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.oplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.oplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.gplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.gplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.comparegroup.x=1000;
            _this.tween1=_this.add.tween(_this.comparegroup).to( { x: 0 }, 1500, 'Linear', true,0);
        
        }
    
    _this.cloud1 = _this.add.sprite(100,280,'F2_5cloud1');
    _this.cloud1.anchor.setTo(0.5);
    _this.cloud1.scale.setTo(0.8,0.8);
    _this.cloud1.frame=4;
    
    _this.cloud2 = _this.add.sprite(840,280,'F2_5cloud2');
    _this.cloud2.anchor.setTo(0.5);
    _this.cloud2.scale.setTo(0.8,0.8);
    _this.cloud2.frame=4;
     
     //left side white plate
      _this.cake1 = _this.add.sprite(240,110,'F2_5B7');
    _this.cake1.anchor.setTo(0.5);
    _this.cake1.scale.setTo(1,1);
    _this.cake1.name = "cake1";
    _this.cake1.inputEnabled = true;
    _this.cake1.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake2 = _this.add.sprite(192,110,'F2_5B8');
    _this.cake2.anchor.setTo(0.5);
    _this.cake2.scale.setTo(1,1);
    _this.cake2.name = "cake2";
    _this.cake2.inputEnabled = true;
    _this.cake2.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake3 = _this.add.sprite(185,148,'F2_5B10');
    _this.cake3.anchor.setTo(0.5);
    _this.cake3.scale.setTo(1,1);
    _this.cake3.name = "cake3";
    _this.cake3.inputEnabled = true;
    _this.cake3.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake4 = _this.add.sprite(222,155,'F2_5B3');
    _this.cake4.anchor.setTo(0.5);
    _this.cake4.scale.setTo(1,1);
    _this.cake4.name = "cake4";
    _this.cake4.inputEnabled = true;
    _this.cake4.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake5 = _this.add.sprite(280,120,'F2_5B6');
    _this.cake5.anchor.setTo(0.5);
    _this.cake5.scale.setTo(1,1);
    _this.cake5.name = "cake5";
    _this.cake5.inputEnabled = true;
    _this.cake5.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake6 = _this.add.sprite(270,150,'F2_5B4');
    _this.cake6.anchor.setTo(0.5);
    _this.cake6.scale.setTo(1,1);
    _this.cake6.name = "cake6";
    _this.cake6.inputEnabled = true;
    _this.cake6.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake7 = _this.add.sprite(720,160,'F2_5B3');
    _this.cake7.anchor.setTo(0.5);
    _this.cake7.scale.setTo(0.9,0.9);
    _this.cake7.name = "cake7";
    _this.cake7.visible = false;
    _this.cake7.inputEnabled = true;
    _this.cake7.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake8 = _this.add.sprite(680,160,'F2_5B10');
    _this.cake8.anchor.setTo(0.5);
    _this.cake8.scale.setTo(0.9,0.9);
    _this.cake8.name = "cake8";
    _this.cake8.visible = false;
    _this.cake8.inputEnabled = true;
    _this.cake8.events.onInputDown.add(_this.onCakeDragStart1,_this);
  
    
   
     
     //right side white plate
     _this.cake11 = _this.add.sprite(685,110,'F2_5B8');
    _this.cake11.anchor.setTo(0.5);
    _this.cake11.scale.setTo(1,1);
    _this.cake11.name = "cake11";
    _this.cake11.inputEnabled = true;
    _this.cake11.events.onInputDown.add(_this.onCakeDragStart3,_this);
    
    _this.cake12 = _this.add.sprite(-4,15,'F2_5B9');
    _this.cake12.anchor.setTo(0.5);
    _this.cake12.scale.setTo(1,1);
    _this.cake12.name = "cake12";
    _this.cake11.addChild(_this.cake12);
    
    _this.cake13 = _this.add.sprite(730,113,'F2_5B7');
    _this.cake13.anchor.setTo(0.5);
    _this.cake13.scale.setTo(1,1);
    _this.cake13.name = "cake13";
    _this.cake13.inputEnabled = true;
    _this.cake13.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake14 = _this.add.sprite(20,3,'F2_5B6');
    _this.cake14.anchor.setTo(0.5);
    _this.cake14.scale.setTo(0.93,0.93);
    _this.cake14.name = "cake4";
    _this.cake13.addChild(_this.cake14);
     
    _this.cake15 = _this.add.sprite(685,152,'F2_5B10');
    _this.cake15.anchor.setTo(0.5);
    _this.cake15.scale.setTo(1,1);
    _this.cake15.name = "cake15";
    _this.cake15.inputEnabled = true;
    _this.cake15.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake16 = _this.add.sprite(19,3,'F2_5B3');
    _this.cake16.anchor.setTo(0.5);
    _this.cake16.scale.setTo(0.98,0.98);
    _this.cake16.name = "cake6";
    _this.cake15.addChild(_this.cake16);
     
    _this.cake17 = _this.add.sprite(755,140,'F2_5B5');
    _this.cake17.anchor.setTo(0.5);
    _this.cake17.scale.setTo(1,1);
    _this.cake17.name = "cake17";
    _this.cake17.inputEnabled = true;
    _this.cake17.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake18 = _this.add.sprite(-3,11,'F2_5B4');
    _this.cake18.anchor.setTo(0.5);
    _this.cake18.scale.setTo(1,1);
    _this.cake18.name = "cake18";
    _this.cake17.addChild(_this.cake18);
     
      //left side orange plate
    _this.cake1l = _this.add.sprite(160,370,'F2_5B7');
    _this.cake1l.anchor.setTo(0.5);
    _this.cake1l.scale.setTo(1,1);
    _this.cake1l.name = "cake1l";
    _this.cake1l.visible=false;
     
    _this.cake2l = _this.add.sprite(112,370,'F2_5B8');
    _this.cake2l.anchor.setTo(0.5);
    _this.cake2l.scale.setTo(1,1);
    _this.cake2l.name = "cake2l";
    _this.cake2l.visible=false;
     
    _this.cake3l = _this.add.sprite(105,408,'F2_5B10');
    _this.cake3l.anchor.setTo(0.5);
    _this.cake3l.scale.setTo(1,1);
    _this.cake3l.name = "cake3l";
    _this.cake3l.visible=false;
     
    _this.cake4l = _this.add.sprite(142,415,'F2_5B3');
    _this.cake4l.anchor.setTo(0.5);
    _this.cake4l.scale.setTo(1,1);
    _this.cake4l.name = "cake4l";
    _this.cake4l.visible=false;
     
    _this.cake5l = _this.add.sprite(200,380,'F2_5B6');
    _this.cake5l.anchor.setTo(0.5);
    _this.cake5l.scale.setTo(1,1);
    _this.cake5l.name = "cake5l";
    _this.cake5l.visible=false;
     
    _this.cake6l = _this.add.sprite(190,410,'F2_5B4');
    _this.cake6l.anchor.setTo(0.5);
    _this.cake6l.scale.setTo(1,1);
    _this.cake6l.name = "cake6l";
    _this.cake6l.visible=false;
     
   
     
      //right side green plate
   _this.cake11r = _this.add.sprite(755,370,'F2_5B8');
    _this.cake11r.anchor.setTo(0.5);
    _this.cake11r.scale.setTo(1,1);
    _this.cake11r.name = "cake11r";
    
    _this.cake12r = _this.add.sprite(-4,15,'F2_5B9');
    _this.cake12r.anchor.setTo(0.5);
    _this.cake12r.scale.setTo(1,1);
    _this.cake12r.name = "cake12r";
    _this.cake11r.addChild(_this.cake12r);
    _this.cake11r.visible=false;
     
    _this.cake13r = _this.add.sprite(805,373,'F2_5B7');
    _this.cake13r.anchor.setTo(0.5);
    _this.cake13r.scale.setTo(1,1);
    _this.cake13r.name = "cake13r";
     
    _this.cake14r = _this.add.sprite(20,3,'F2_5B6');
    _this.cake14r.anchor.setTo(0.5);
    _this.cake14r.scale.setTo(1,1);
    _this.cake14r.name = "cake14r";
    _this.cake13r.addChild(_this.cake14r);
    _this.cake13r.visible=false;
     
    _this.cake15r = _this.add.sprite(755,412,'F2_5B10');
    _this.cake15r.anchor.setTo(0.5);
    _this.cake15r.scale.setTo(1,1);
    _this.cake15r.name = "cake15r";
     
    _this.cake16r = _this.add.sprite(19,3,'F2_5B3');
    _this.cake16r.anchor.setTo(0.5);
    _this.cake16r.scale.setTo(1,1);
    _this.cake16r.name = "cake16r";
    _this.cake15r.addChild(_this.cake16r);
    _this.cake15r.visible=false;
     
    _this.cake17r = _this.add.sprite(830,400,'F2_5B5');
    _this.cake17r.anchor.setTo(0.5);
    _this.cake17r.scale.setTo(1,1);
    _this.cake17r.name = "cake17r";
     
    _this.cake18r = _this.add.sprite(-3,11,'F2_5B4');
    _this.cake18r.anchor.setTo(0.5);
    _this.cake18r.scale.setTo(1,1);
    _this.cake18r.name = "cake18r";
    _this.cake17r.addChild(_this.cake18r);
    _this.cake17r.visible=false;
     
  
    _this.txtbox1 = _this.add.sprite(350,250,'F2_5box1');
    _this.txtbox1.anchor.setTo(0.5);
    _this.txtbox1.scale.setTo(1.5,1.5);
    _this.txtbox1.frame=0;
     
    _this.number1 = _this.add.sprite(345,250,'F2_5numbers2');
    _this.number1.anchor.setTo(0.5);
    _this.number1.scale.setTo(1.5,1.5);
    _this.number1.frame=3;
        
    _this.txtbox2 = _this.add.sprite(350,335,'F2_5box1');
    _this.txtbox2.anchor.setTo(0.5);
    _this.txtbox2.scale.setTo(1.5,1.5);
    _this.txtbox2.frame=1;
    _this.txtbox2.name="numbox2";
    _this.txtbox2.inputEnabled = false;
    _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
    _this.txtbox4 = _this.add.sprite(610,335,'F2_5box1');
    _this.txtbox4.anchor.setTo(0.5);
    _this.txtbox4.scale.setTo(1.5,1.5);
    _this.txtbox4.frame=1;
    _this.txtbox4.name="numbox4";
    _this.txtbox4.inputEnabled = false;
    _this.txtbox4.events.onInputDown.add(_this.numberBoxClicked,_this);
       
    _this.txtbox3 = _this.add.sprite(610,250,'F2_5box1');
    _this.txtbox3.anchor.setTo(0.5);
    _this.txtbox3.scale.setTo(1.5,1.5);
    _this.txtbox3.frame=0;
   
    _this.number2 = _this.add.sprite(605,250,'F2_5numbers2');
    _this.number2.anchor.setTo(0.5);
    _this.number2.scale.setTo(1.5,1.5);
    _this.number2.frame=3;
     
    _this.numBoxNum2 = _this.add.sprite(345,335,'F2_5numbers1');
    _this.numBoxNum2.anchor.setTo(0.5);
    _this.numBoxNum2.scale.setTo(1.2,1.2);
    _this.numBox2Pressed = false;
    _this.numBoxNum2.visible = false;
    _this.numBoxNum2.frame=6;
     
    _this.numBoxNum4 = _this.add.sprite(605,335,'F2_5numbers1');
    _this.numBoxNum4.anchor.setTo(0.5);
    _this.numBoxNum4.scale.setTo(1.2,1.2);
    _this.numBox4Pressed = false;
    _this.numBoxNum4.visible = false;
    _this.numBoxNum4.frame=4;
     
     _this.rightAns="64";
     
     _this.addNumberPad();
     
     _this.group1.add(_this.whiteplate1);
     _this.group1.add(_this.whiteplate2);
     _this.group1.add(_this.orangeplate);
      _this.group1.add(_this.greenplate);
      _this.group1.add(_this.cloud1);
      _this.group1.add(_this.cloud2);
      _this.group2.add(_this.txtbox1);
      _this.group2.add(_this.txtbox2);
      _this.group2.add(_this.txtbox3);
      _this.group2.add(_this.txtbox4);
      _this.group2.add(_this.number1);
      _this.group2.add(_this.number2);
      _this.group1.add(_this.line1);
      _this.group1.add(_this.line2);
     _this.group2.add(_this.numBoxNum2);
     _this.group2.add(_this.numBoxNum4);
     
     _this.group2.add(_this.cake1);
     _this.group2.add(_this.cake2);
     _this.group2.add(_this.cake3);
     _this.group2.add(_this.cake4);
     _this.group2.add(_this.cake5);
     _this.group2.add(_this.cake6);
 
     
      _this.group2.add(_this.cake11);
//     _this.wplate2cakegroup.add(_this.cake12);
      _this.group2.add(_this.cake13);
//     _this.wplate2cakegroup.add(_this.cake14);
      _this.group2.add(_this.cake15);
//     _this.wplate2cakegroup.add(_this.cake16);
      _this.group2.add(_this.cake17);
//     _this.wplate2cakegroup.add(_this.cake18);
     
     _this.group2.add(_this.cake1l);
     _this.group2.add(_this.cake2l);
     _this.group2.add(_this.cake3l);
     _this.group2.add(_this.cake4l);
     _this.group2.add(_this.cake5l);
     _this.group2.add(_this.cake6l);
  
    
     _this.group2.add(_this.cake11r);
//     _this.gplatecakegroup.add(_this.cake12r);
     _this.group2.add(_this.cake13r);
//     _this.gplatecakegroup.add(_this.cake14r);
     _this.group2.add(_this.cake15r);
//     _this.gplatecakegroup.add(_this.cake16r);
     _this.group2.add(_this.cake17r);
//     _this.gplatecakegroup.add(_this.cake18r);
    
     _this.group2.add(_this.box);
     _this.group2.add(_this.lessthan);
     _this.group2.add(_this.greaterthan);
    _this.group2.add(_this.equal);
    },
    
 gotoThirdQuestion:function(){

      _this.Question = 3;
       if(_this.soundPlayed == false)
    {
     // _this.getVoice();
      _this.soundPlayed = true;     
    }
       _this.loadobject(); 
        
      _this.group1 = _this.add.group();
      _this.group2 = _this.add.group();
     _this.wplate1cakegroup = _this.add.group();
     _this.wplate2cakegroup = _this.add.group();
     _this.oplatecakegroup = _this.add.group();
     _this.gplatecakegroup = _this.add.group();
     _this.comparegroup = _this.add.group();
     
     if(_this.wrongAnswer == false)
        {
            _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group2.x=1000;
            _this.tween1=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate1cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate1cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate2cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate2cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.oplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.oplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.gplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.gplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.comparegroup.x=1000;
            _this.tween1=_this.add.tween(_this.comparegroup).to( { x: 0 }, 1500, 'Linear', true,0);
        
        }
    
    _this.cloud1 = _this.add.sprite(100,280,'F2_5cloud1');
    _this.cloud1.anchor.setTo(0.5);
    _this.cloud1.scale.setTo(0.8,0.8);
    _this.cloud1.frame=8;
    
    _this.cloud2 = _this.add.sprite(840,280,'F2_5cloud2');
    _this.cloud2.anchor.setTo(0.5);
    _this.cloud2.scale.setTo(0.8,0.8);
    _this.cloud2.frame=6;
    
    //left side white plate1
    _this.cake1 = _this.add.sprite(205,110,'F2_5B8');
    _this.cake1.anchor.setTo(0.5);
    _this.cake1.scale.setTo(1,1);
    _this.cake1.name = "cake1";
    _this.cake1.inputEnabled = true;
    _this.cake1.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake2 = _this.add.sprite(175,135,'F2_5B9');
    _this.cake2.anchor.setTo(0.5);
    _this.cake2.scale.setTo(1,1);
    _this.cake2.name = "cake2";
    _this.cake2.inputEnabled = true;
    _this.cake2.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake3 = _this.add.sprite(245,110,'F2_5B7');
    _this.cake3.anchor.setTo(0.5);
    _this.cake3.scale.setTo(0.85,0.85);
    _this.cake3.name = "cake3";
    _this.cake3.inputEnabled = true;
    _this.cake3.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake4 = _this.add.sprite(275,115,'F2_5B6');
    _this.cake4.anchor.setTo(0.5);
    _this.cake4.scale.setTo(0.85,0.85);
    _this.cake4.name = "cake4";
    _this.cake4.inputEnabled = true;
    _this.cake4.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake5 = _this.add.sprite(285,140,'F2_5B5');
    _this.cake5.anchor.setTo(0.5);
    _this.cake5.scale.setTo(0.9,0.9);
    _this.cake5.name = "cake5";
    _this.cake5.inputEnabled = true;
    _this.cake5.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake6 = _this.add.sprite(265,160,'F2_5B4');
    _this.cake6.anchor.setTo(0.5);
    _this.cake6.scale.setTo(0.9,0.9);
    _this.cake6.name = "cake6";
    _this.cake6.inputEnabled = true;
    _this.cake6.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake7 = _this.add.sprite(225,160,'F2_5B3');
    _this.cake7.anchor.setTo(0.5);
    _this.cake7.scale.setTo(0.9,0.9);
    _this.cake7.name = "cake7";
    _this.cake7.inputEnabled = true;
    _this.cake7.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake8 = _this.add.sprite(185,160,'F2_5B10');
    _this.cake8.anchor.setTo(0.5);
    _this.cake8.scale.setTo(0.9,0.9);
    _this.cake8.name = "cake8";
    _this.cake8.inputEnabled = true;
    _this.cake8.events.onInputDown.add(_this.onCakeDragStart1,_this);
    
    //right side white plate2
      _this.cake11 = _this.add.sprite(700,110,'F2_5B8');
    _this.cake11.anchor.setTo(0.5);
    _this.cake11.scale.setTo(1,1);
    _this.cake11.name = "cake11";
    _this.cake11.inputEnabled = true;
    _this.cake11.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake12 = _this.add.sprite(670,135,'F2_5B9');
    _this.cake12.anchor.setTo(0.5);
    _this.cake12.scale.setTo(1,1);
    _this.cake12.name = "cake12";
    _this.cake12.inputEnabled = true;
    _this.cake12.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake13 = _this.add.sprite(740,110,'F2_5B7');
    _this.cake13.anchor.setTo(0.5);
    _this.cake13.scale.setTo(0.85,0.85);
    _this.cake13.name = "cake13";
    _this.cake13.inputEnabled = true;
    _this.cake13.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake14 = _this.add.sprite(770,115,'F2_5B6');
    _this.cake14.anchor.setTo(0.5);
    _this.cake14.scale.setTo(0.85,0.85);
    _this.cake14.name = "cake14";
    _this.cake14.inputEnabled = true;
    _this.cake14.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake15 = _this.add.sprite(780,140,'F2_5B5');
    _this.cake15.anchor.setTo(0.5);
    _this.cake15.scale.setTo(0.9,0.9);
    _this.cake15.name = "cake15";
    _this.cake15.inputEnabled = true;
    _this.cake15.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake16 = _this.add.sprite(760,160,'F2_5B4');
    _this.cake16.anchor.setTo(0.5);
    _this.cake16.scale.setTo(0.9,0.9);
    _this.cake16.name = "cake16";
    _this.cake16.inputEnabled = true;
    _this.cake16.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake17 = _this.add.sprite(720,160,'F2_5B3');
    _this.cake17.anchor.setTo(0.5);
    _this.cake17.scale.setTo(0.9,0.9);
    _this.cake17.name = "cake17";
    _this.cake17.inputEnabled = true;
    _this.cake17.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake18 = _this.add.sprite(680,160,'F2_5B10');
    _this.cake18.anchor.setTo(0.5);
    _this.cake18.scale.setTo(0.9,0.9);
    _this.cake18.name = "cake18";
    _this.cake18.inputEnabled = true;
    _this.cake18.events.onInputDown.add(_this.onCakeDragStart3,_this);
    
    //left side orange plate
     _this.cake1l = _this.add.sprite(135,370,'F2_5B8');
    _this.cake1l.anchor.setTo(0.5);
    _this.cake1l.scale.setTo(1,1);
    _this.cake1l.name = "cake1l";
    _this.cake1l.visible=false;
     
    _this.cake2l = _this.add.sprite(105,390,'F2_5B9');
    _this.cake2l.anchor.setTo(0.5);
    _this.cake2l.scale.setTo(1,1);
    _this.cake2l.name = "cake2l";
    _this.cake2l.visible=false;
     
    _this.cake3l = _this.add.sprite(175,370,'F2_5B7');
    _this.cake3l.anchor.setTo(0.5);
    _this.cake3l.scale.setTo(0.85,0.85);
    _this.cake3l.name = "cake3l";
    _this.cake3l.visible=false;
     
    _this.cake4l = _this.add.sprite(205,370,'F2_5B6');
    _this.cake4l.anchor.setTo(0.5);
    _this.cake4l.scale.setTo(0.85,0.85);
    _this.cake4l.name = "cake4l";
    _this.cake4l.visible=false;
     
    _this.cake5l = _this.add.sprite(215,400,'F2_5B5');
    _this.cake5l.anchor.setTo(0.5);
    _this.cake5l.scale.setTo(0.9,0.9);
    _this.cake5l.name = "cake5l";
    _this.cake5l.visible=false;
     
    _this.cake6l = _this.add.sprite(195,410,'F2_5B4');
    _this.cake6l.anchor.setTo(0.5);
    _this.cake6l.scale.setTo(0.9,0.9);
    _this.cake6l.name = "cake6l";
    _this.cake6l.visible=false;
     
    _this.cake7l = _this.add.sprite(155,410,'F2_5B3');
    _this.cake7l.anchor.setTo(0.5);
    _this.cake7l.scale.setTo(0.9,0.9);
    _this.cake7l.name = "cake7l";
    _this.cake7l.visible=false;
     
    _this.cake8l = _this.add.sprite(115,410,'F2_5B10');
    _this.cake8l.anchor.setTo(0.5);
    _this.cake8l.scale.setTo(0.9,0.9);
    _this.cake8l.name = "cake8l";
    _this.cake8l.visible=false;
    
     //right side green plate
    _this.cake11r = _this.add.sprite(765,380,'F2_5B8');
    _this.cake11r.anchor.setTo(0.5);
    _this.cake11r.scale.setTo(1,1);
    _this.cake11r.name = "cake11r";
    _this.cake11r.visible=false;
     
    _this.cake12r = _this.add.sprite(740,400,'F2_5B9');
    _this.cake12r.anchor.setTo(0.5);
    _this.cake12r.scale.setTo(1,1);
    _this.cake12r.name = "cake12r";
    _this.cake12r.visible=false;
     
    _this.cake13r = _this.add.sprite(800,380,'F2_5B7');
    _this.cake13r.anchor.setTo(0.5);
    _this.cake13r.scale.setTo(0.85,0.85);
    _this.cake13r.name = "cake13r";
    _this.cake13r.visible=false;
     
    _this.cake14r = _this.add.sprite(840,380,'F2_5B6');
    _this.cake14r.anchor.setTo(0.5);
    _this.cake14r.scale.setTo(0.85,0.85);
    _this.cake14r.name = "cake14r";
    _this.cake14r.visible=false;
     
    _this.cake15r = _this.add.sprite(850,410,'F2_5B5');
    _this.cake15r.anchor.setTo(0.5);
    _this.cake15r.scale.setTo(0.9,0.9);
    _this.cake15r.name = "cake15r";
    _this.cake15r.visible=false;
     
    _this.cake16r = _this.add.sprite(830,420,'F2_5B4');
    _this.cake16r.anchor.setTo(0.5);
    _this.cake16r.scale.setTo(0.9,0.9);
    _this.cake16r.name = "cake16r";
    _this.cake16r.visible=false;
     
    _this.cake17r = _this.add.sprite(795,420,'F2_5B3');
    _this.cake17r.anchor.setTo(0.5);
    _this.cake17r.scale.setTo(0.9,0.9);
    _this.cake17r.name = "cake17r";
    _this.cake17r.visible=false;
     
    _this.cake18r = _this.add.sprite(753,420,'F2_5B10');
    _this.cake18r.anchor.setTo(0.5);
    _this.cake18r.scale.setTo(0.9,0.9);
    _this.cake18r.name = "cake18r";
    _this.cake18r.visible=false;
    
    _this.number1 = _this.add.sprite(345,335,'F2_5numbers2');
    _this.number1.anchor.setTo(0.5);
    _this.number1.scale.setTo(1.5,1.5);
    _this.number1.frame=8;
    
     _this.number2 = _this.add.sprite(605,335,'F2_5numbers2');
    _this.number2.anchor.setTo(0.5);
    _this.number2.scale.setTo(1.5,1.5);
    _this.number2.frame=8;
    
    _this.txtbox1 = _this.add.sprite(350,250,'F2_5box1');
    _this.txtbox1.anchor.setTo(0.5);
    _this.txtbox1.scale.setTo(1.5,1.5);
    _this.txtbox1.frame=1;
    _this.txtbox1.name="numbox1";
    _this.txtbox1.inputEnabled = false;
    _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
    
    
    _this.txtbox2 = _this.add.sprite(350,335,'F2_5box1');
    _this.txtbox2.anchor.setTo(0.5);
    _this.txtbox2.scale.setTo(1.5,1.5);
    _this.txtbox2.frame=0;
    
    _this.txtbox3 = _this.add.sprite(610,250,'F2_5box1');
    _this.txtbox3.anchor.setTo(0.5);
    _this.txtbox3.scale.setTo(1.5,1.5);
    _this.txtbox3.frame=1;
    _this.txtbox3.name="numbox3";
    _this.txtbox3.inputEnabled = false;
    _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
  
    _this.txtbox4 = _this.add.sprite(610,335,'F2_5box1');
    _this.txtbox4.anchor.setTo(0.5);
    _this.txtbox4.scale.setTo(1.5,1.5);
    _this.txtbox4.frame=0;
   
     _this.numBoxNum1 = _this.add.sprite(345,250,'F2_5numbers1');
    _this.numBoxNum1.anchor.setTo(0.5);
    _this.numBoxNum1.scale.setTo(1.2,1.2);
    _this.numBox1Pressed = false;
    _this.numBoxNum1.visible = false;
    _this.numBoxNum1.frame=7;
     
    _this.numBoxNum3 = _this.add.sprite(605,250,'F2_5numbers1');
    _this.numBoxNum3.anchor.setTo(0.5);
    _this.numBoxNum3.scale.setTo(1.2,1.2);
    _this.numBox3Pressed = false;
    _this.numBoxNum3.visible = false;
    _this.numBoxNum3.frame=5;
       
      _this.rightAns="75";
      
     _this.addNumberPad();
    
     _this.group1.add(_this.whiteplate1);
     _this.group1.add(_this.whiteplate2);
     _this.group1.add(_this.orangeplate);
      _this.group1.add(_this.greenplate);
      _this.group1.add(_this.cloud1);
      _this.group1.add(_this.cloud2);
      _this.group2.add(_this.txtbox1);
      _this.group2.add(_this.txtbox2);
      _this.group2.add(_this.txtbox3);
      _this.group2.add(_this.txtbox4);
      _this.group2.add(_this.number1);
      _this.group2.add(_this.number2);
      _this.group1.add(_this.line1);
      _this.group1.add(_this.line2);
     _this.group2.add(_this.numBoxNum1);
     _this.group2.add(_this.numBoxNum3);
     
     _this.group2.add(_this.cake1);
     _this.group2.add(_this.cake2);
     _this.group2.add(_this.cake3);
     _this.group2.add(_this.cake4);
     _this.group2.add(_this.cake5);
     _this.group2.add(_this.cake6);
     _this.group2.add(_this.cake7);
    _this.group2.add(_this.cake8);
  
     _this.group2.add(_this.cake11);
     _this.group2.add(_this.cake12);
     _this.group2.add(_this.cake13);
     _this.group2.add(_this.cake14);
     _this.group2.add(_this.cake15);
     _this.group2.add(_this.cake16);
     _this.group2.add(_this.cake17);
    _this.group2.add(_this.cake18);
  
     
     _this.group2.add(_this.cake1l);
     _this.group2.add(_this.cake2l);
     _this.group2.add(_this.cake3l);
     _this.group2.add(_this.cake4l);
     _this.group2.add(_this.cake5l);
     _this.group2.add(_this.cake6l);
     _this.group2.add(_this.cake7l);
     _this.group2.add(_this.cake8l);
    
     _this.group2.add(_this.cake11r);
     _this.group2.add(_this.cake12r);
     _this.group2.add(_this.cake13r);
     _this.group2.add(_this.cake14r);
     _this.group2.add(_this.cake15r);
     _this.group2.add(_this.cake16r);
     _this.group2.add(_this.cake17r);
     _this.group2.add(_this.cake18r);
    
     _this.group2.add(_this.box);
     _this.group2.add(_this.lessthan);
     _this.group2.add(_this.greaterthan);
    _this.group2.add(_this.equal);
    
    
},   
  
 gotoFourthQuestion:function(){
     
      _this.Question = 4;
       if(_this.soundPlayed == false)
    {
      //_this.getVoice();
      _this.soundPlayed = true;     
    }
       _this.loadobject(); 
        
          _this.group1 = _this.add.group();
      _this.group2 = _this.add.group();
     _this.wplate1cakegroup = _this.add.group();
     _this.wplate2cakegroup = _this.add.group();
     _this.oplatecakegroup = _this.add.group();
     _this.gplatecakegroup = _this.add.group();
     _this.comparegroup = _this.add.group();
     
     if(_this.wrongAnswer == false)
        {
            _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group2.x=1000;
            _this.tween1=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate1cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate1cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate2cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate2cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.oplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.oplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.gplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.gplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.comparegroup.x=1000;
            _this.tween1=_this.add.tween(_this.comparegroup).to( { x: 0 }, 1500, 'Linear', true,0);
        
        }
    
    _this.cloud1 = _this.add.sprite(100,280,'F2_5cloud1');
    _this.cloud1.anchor.setTo(0.5);
    _this.cloud1.scale.setTo(0.8,0.8);
    _this.cloud1.frame=4;
    
    _this.cloud2 = _this.add.sprite(840,280,'F2_5cloud2');
    _this.cloud2.anchor.setTo(0.5);
    _this.cloud2.scale.setTo(0.8,0.8);
    _this.cloud2.frame=5;
     
     //left side white plate
    _this.cake1 = _this.add.sprite(240,110,'F2_5B7');
    _this.cake1.anchor.setTo(0.5);
    _this.cake1.scale.setTo(1,1);
    _this.cake1.name = "cake1";
    _this.cake1.inputEnabled = true;
    _this.cake1.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake2 = _this.add.sprite(192,110,'F2_5B8');
    _this.cake2.anchor.setTo(0.5);
    _this.cake2.scale.setTo(1,1);
    _this.cake2.name = "cake2";
    _this.cake2.inputEnabled = true;
    _this.cake2.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake3 = _this.add.sprite(185,148,'F2_5B10');
    _this.cake3.anchor.setTo(0.5);
    _this.cake3.scale.setTo(1,1);
    _this.cake3.name = "cake3";
    _this.cake3.inputEnabled = true;
    _this.cake3.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake4 = _this.add.sprite(222,155,'F2_5B3');
    _this.cake4.anchor.setTo(0.5);
    _this.cake4.scale.setTo(1,1);
    _this.cake4.name = "cake4";
    _this.cake4.inputEnabled = true;
    _this.cake4.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake5 = _this.add.sprite(280,120,'F2_5B6');
    _this.cake5.anchor.setTo(0.5);
    _this.cake5.scale.setTo(1,1);
    _this.cake5.name = "cake5";
    _this.cake5.inputEnabled = true;
    _this.cake5.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake6 = _this.add.sprite(270,150,'F2_5B4');
    _this.cake6.anchor.setTo(0.5);
    _this.cake6.scale.setTo(1,1);
    _this.cake6.name = "cake6";
    _this.cake6.inputEnabled = true;
    _this.cake6.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
   
    
   
     
//right side white plate
     _this.cake11 = _this.add.sprite(730,110,'F2_5B7');
    _this.cake11.anchor.setTo(0.5);
    _this.cake11.scale.setTo(1,1);
    _this.cake11.name = "cake11";
    _this.cake11.inputEnabled = true;
    _this.cake11.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake12 = _this.add.sprite(685,110,'F2_5B8');
    _this.cake12.anchor.setTo(0.5);
    _this.cake12.scale.setTo(1,1);
    _this.cake12.name = "cake12";
    _this.cake12.inputEnabled = true;
    _this.cake12.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake13 = _this.add.sprite(675,148,'F2_5B10');
    _this.cake13.anchor.setTo(0.5);
    _this.cake13.scale.setTo(1,1);
    _this.cake13.name = "cake13";
    _this.cake13.inputEnabled = true;
    _this.cake13.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake14 = _this.add.sprite(712,155,'F2_5B3');
    _this.cake14.anchor.setTo(0.5);
    _this.cake14.scale.setTo(1,1);
    _this.cake14.name = "cake14";
    _this.cake14.inputEnabled = true;
    _this.cake14.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake15 = _this.add.sprite(770,120,'F2_5B6');
    _this.cake15.anchor.setTo(0.5);
    _this.cake15.scale.setTo(1,1);
    _this.cake15.name = "cake15";
    _this.cake15.inputEnabled = true;
    _this.cake15.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake16 = _this.add.sprite(760,150,'F2_5B4');
    _this.cake16.anchor.setTo(0.5);
    _this.cake16.scale.setTo(1,1);
    _this.cake16.name = "cake16";
    _this.cake16.inputEnabled = true;
    _this.cake16.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    
      //left side orange plate
    _this.cake1l = _this.add.sprite(165,370,'F2_5B7');
    _this.cake1l.anchor.setTo(0.5);
    _this.cake1l.scale.setTo(1,1);
    _this.cake1l.name = "cake1l";
    _this.cake1l.visible=false;
     
    _this.cake2l = _this.add.sprite(117,370,'F2_5B8');
    _this.cake2l.anchor.setTo(0.5);
    _this.cake2l.scale.setTo(1,1);
    _this.cake2l.name = "cake2l";
    _this.cake2l.visible=false;
     
    _this.cake3l = _this.add.sprite(110,408,'F2_5B10');
    _this.cake3l.anchor.setTo(0.5);
    _this.cake3l.scale.setTo(1,1);
    _this.cake3l.name = "cake3l";
    _this.cake3l.visible=false;
     
    _this.cake4l = _this.add.sprite(147,415,'F2_5B3');
    _this.cake4l.anchor.setTo(0.5);
    _this.cake4l.scale.setTo(1,1);
    _this.cake4l.name = "cake4l";
    _this.cake4l.visible=false;
     
    _this.cake5l = _this.add.sprite(205,380,'F2_5B6');
    _this.cake5l.anchor.setTo(0.5);
    _this.cake5l.scale.setTo(1,1);
    _this.cake5l.name = "cake5l";
    _this.cake5l.visible=false;
     
    _this.cake6l = _this.add.sprite(195,410,'F2_5B4');
    _this.cake6l.anchor.setTo(0.5);
    _this.cake6l.scale.setTo(1,1);
    _this.cake6l.name = "cake6l";
    _this.cake6l.visible=false;
     
   
     
//right side green plate
     _this.cake11r = _this.add.sprite(800,370,'F2_5B7');
    _this.cake11r.anchor.setTo(0.5);
    _this.cake11r.scale.setTo(1,1);
    _this.cake11r.name = "cake11r";
    _this.cake11r.visible=false;
     
    _this.cake12r = _this.add.sprite(752,370,'F2_5B8');
    _this.cake12r.anchor.setTo(0.5);
    _this.cake12r.scale.setTo(1,1);
    _this.cake12r.name = "cake12r";
    _this.cake12r.visible=false;
     
    _this.cake13r = _this.add.sprite(745,408,'F2_5B10');
    _this.cake13r.anchor.setTo(0.5);
    _this.cake13r.scale.setTo(1,1);
    _this.cake13r.name = "cake13r";
    _this.cake13r.visible=false;
     
    _this.cake14r = _this.add.sprite(782,415,'F2_5B3');
    _this.cake14r.anchor.setTo(0.5);
    _this.cake14r.scale.setTo(1,1);
    _this.cake14r.name = "cake14r";
    _this.cake14r.visible=false;
     
    _this.cake15r = _this.add.sprite(840,380,'F2_5B6');
    _this.cake15r.anchor.setTo(0.5);
    _this.cake15r.scale.setTo(1,1);
    _this.cake15r.name = "cake15r";
    _this.cake15r.visible=false;
     
    _this.cake16r = _this.add.sprite(830,410,'F2_5B4');
    _this.cake16r.anchor.setTo(0.5);
    _this.cake16r.scale.setTo(1,1);
    _this.cake16r.name = "cake16r";
    _this.cake16r.visible=false;  
     
   _this.number1 = _this.add.sprite(345,335,'F2_5numbers2');
    _this.number1.anchor.setTo(0.5);
    _this.number1.scale.setTo(1.5,1.5);
    _this.number1.frame=6;
    
     _this.number2 = _this.add.sprite(605,335,'F2_5numbers2');
    _this.number2.anchor.setTo(0.5);
    _this.number2.scale.setTo(1.5,1.5);
    _this.number2.frame=6;
    
    _this.txtbox1 = _this.add.sprite(350,250,'F2_5box1');
    _this.txtbox1.anchor.setTo(0.5);
    _this.txtbox1.scale.setTo(1.5,1.5);
    _this.txtbox1.frame=1;
    _this.txtbox1.name="numbox1";
    _this.txtbox1.inputEnabled = false;
    _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
    
    
    _this.txtbox2 = _this.add.sprite(350,335,'F2_5box1');
    _this.txtbox2.anchor.setTo(0.5);
    _this.txtbox2.scale.setTo(1.5,1.5);
    _this.txtbox2.frame=0;
    
    _this.txtbox3 = _this.add.sprite(610,250,'F2_5box1');
    _this.txtbox3.anchor.setTo(0.5);
    _this.txtbox3.scale.setTo(1.5,1.5);
    _this.txtbox3.frame=1;
    _this.txtbox3.name="numbox3";
    _this.txtbox3.inputEnabled = false;
    _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
  
    _this.txtbox4 = _this.add.sprite(610,335,'F2_5box1');
    _this.txtbox4.anchor.setTo(0.5);
    _this.txtbox4.scale.setTo(1.5,1.5);
    _this.txtbox4.frame=0;
   
     _this.numBoxNum1 = _this.add.sprite(345,250,'F2_5numbers1');
    _this.numBoxNum1.anchor.setTo(0.5);
    _this.numBoxNum1.scale.setTo(1.2,1.2);
    _this.numBox1Pressed = false;
    _this.numBoxNum1.visible = false;
    _this.numBoxNum1.frame=7;
     
    _this.numBoxNum3 = _this.add.sprite(605,250,'F2_5numbers1');
    _this.numBoxNum3.anchor.setTo(0.5);
    _this.numBoxNum3.scale.setTo(1.2,1.2);
    _this.numBox3Pressed = false;
    _this.numBoxNum3.visible = false;
    _this.numBoxNum3.frame=5;
       
      _this.rightAns="34";
     _this.addNumberPad();
     
       _this.group1.add(_this.whiteplate1);
     _this.group1.add(_this.whiteplate2);
     _this.group1.add(_this.orangeplate);
      _this.group1.add(_this.greenplate);
      _this.group1.add(_this.cloud1);
      _this.group1.add(_this.cloud2);
      _this.group2.add(_this.txtbox1);
      _this.group2.add(_this.txtbox2);
      _this.group2.add(_this.txtbox3);
      _this.group2.add(_this.txtbox4);
      _this.group2.add(_this.number1);
      _this.group2.add(_this.number2);
      _this.group1.add(_this.line1);
      _this.group1.add(_this.line2);
     _this.group2.add(_this.numBoxNum1);
     _this.group2.add(_this.numBoxNum3);
     
     _this.group2.add(_this.cake1);
     _this.group2.add(_this.cake2);
     _this.group2.add(_this.cake3);
     _this.group2.add(_this.cake4);
     _this.group2.add(_this.cake5);
     _this.group2.add(_this.cake6);
    
     _this.group2.add(_this.cake11);
     _this.group2.add(_this.cake12);
     _this.group2.add(_this.cake13);
     _this.group2.add(_this.cake14);
     _this.group2.add(_this.cake15);
     _this.group2.add(_this.cake16);
    
     
     _this.group2.add(_this.cake1l);
     _this.group2.add(_this.cake2l);
     _this.group2.add(_this.cake3l);
     _this.group2.add(_this.cake4l);
     _this.group2.add(_this.cake5l);
     _this.group2.add(_this.cake6l);
    
     _this.group2.add(_this.cake11r);
     _this.group2.add(_this.cake12r);
     _this.group2.add(_this.cake13r);
     _this.group2.add(_this.cake14r);
     _this.group2.add(_this.cake15r);
     _this.group2.add(_this.cake16r);
    
    
     _this.group2.add(_this.box);
     _this.group2.add(_this.lessthan);
     _this.group2.add(_this.greaterthan);
     _this.group2.add(_this.equal);
     
     
 },   
    
 gotoFifthQuestion:function(){
    
     _this.Question = 5;
        if(_this.soundPlayed == false)
    {
      //_this.getVoice();
      _this.soundPlayed = true;     
    }
       _this.loadobject(); 
        
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.wplate1cakegroup = _this.add.group();
     _this.wplate2cakegroup = _this.add.group();
     _this.oplatecakegroup = _this.add.group();
     _this.gplatecakegroup = _this.add.group();
     _this.comparegroup = _this.add.group();
     
     if(_this.wrongAnswer == false)
        {
            _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group2.x=1000;
            _this.tween1=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate1cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate1cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate2cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate2cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.oplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.oplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.gplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.gplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.comparegroup.x=1000;
            _this.tween1=_this.add.tween(_this.comparegroup).to( { x: 0 }, 1500, 'Linear', true,0);
        
        }
    
    _this.cloud1 = _this.add.sprite(100,280,'F2_5cloud1');
    _this.cloud1.anchor.setTo(0.5);
    _this.cloud1.scale.setTo(0.8,0.8);
    _this.cloud1.frame=4;
    
    _this.cloud2 = _this.add.sprite(840,280,'F2_5cloud2');
    _this.cloud2.anchor.setTo(0.5);
    _this.cloud2.scale.setTo(0.8,0.8);
    _this.cloud2.frame=5;
     
     //left side white plate
    _this.cake1 = _this.add.sprite(240,110,'F2_5B7');
    _this.cake1.anchor.setTo(0.5);
    _this.cake1.scale.setTo(1,1);
    _this.cake1.name = "cake1";
    _this.cake1.inputEnabled = true;
    _this.cake1.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake2 = _this.add.sprite(192,110,'F2_5B8');
    _this.cake2.anchor.setTo(0.5);
    _this.cake2.scale.setTo(1,1);
    _this.cake2.name = "cake2";
    _this.cake2.inputEnabled = true;
    _this.cake2.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake3 = _this.add.sprite(185,148,'F2_5B10');
    _this.cake3.anchor.setTo(0.5);
    _this.cake3.scale.setTo(1,1);
    _this.cake3.name = "cake3";
    _this.cake3.inputEnabled = true;
    _this.cake3.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake4 = _this.add.sprite(222,155,'F2_5B3');
    _this.cake4.anchor.setTo(0.5);
    _this.cake4.scale.setTo(1,1);
    _this.cake4.name = "cake4";
    _this.cake4.inputEnabled = true;
    _this.cake4.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake5 = _this.add.sprite(280,120,'F2_5B6');
    _this.cake5.anchor.setTo(0.5);
    _this.cake5.scale.setTo(1,1);
    _this.cake5.name = "cake5";
    _this.cake5.inputEnabled = true;
    _this.cake5.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake6 = _this.add.sprite(270,150,'F2_5B4');
    _this.cake6.anchor.setTo(0.5);
    _this.cake6.scale.setTo(1,1);
    _this.cake6.name = "cake6";
    _this.cake6.inputEnabled = true;
    _this.cake6.events.onInputDown.add(_this.onCakeDragStart1,_this);
    
    //right side white plate
    _this.cake11 = _this.add.sprite(700,110,'F2_5B8');
    _this.cake11.anchor.setTo(0.5);
    _this.cake11.scale.setTo(1,1);
    _this.cake11.name = "cake11";
    _this.cake11.inputEnabled = true;
    _this.cake11.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake12 = _this.add.sprite(670,135,'F2_5B9');
    _this.cake12.anchor.setTo(0.5);
    _this.cake12.scale.setTo(1,1);
    _this.cake12.name = "cake12";
    _this.cake12.inputEnabled = true;
    _this.cake12.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake13 = _this.add.sprite(740,110,'F2_5B7');
    _this.cake13.anchor.setTo(0.5);
    _this.cake13.scale.setTo(0.85,0.85);
    _this.cake13.name = "cake13";
    _this.cake13.inputEnabled = true;
    _this.cake13.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake14 = _this.add.sprite(770,115,'F2_5B6');
    _this.cake14.anchor.setTo(0.5);
    _this.cake14.scale.setTo(0.85,0.85);
    _this.cake14.name = "cake14";
    _this.cake14.inputEnabled = true;
    _this.cake14.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake15 = _this.add.sprite(780,140,'F2_5B5');
    _this.cake15.anchor.setTo(0.5);
    _this.cake15.scale.setTo(0.9,0.9);
    _this.cake15.name = "cake15";
    _this.cake15.inputEnabled = true;
    _this.cake15.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake16 = _this.add.sprite(760,160,'F2_5B4');
    _this.cake16.anchor.setTo(0.5);
    _this.cake16.scale.setTo(0.9,0.9);
    _this.cake16.name = "cake16";
    _this.cake16.inputEnabled = true;
    _this.cake16.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake17 = _this.add.sprite(720,160,'F2_5B3');
    _this.cake17.anchor.setTo(0.5);
    _this.cake17.scale.setTo(0.9,0.9);
    _this.cake17.name = "cake17";
    _this.cake17.inputEnabled = true;
    _this.cake17.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake18 = _this.add.sprite(680,160,'F2_5B10');
    _this.cake18.anchor.setTo(0.5);
    _this.cake18.scale.setTo(0.9,0.9);
    _this.cake18.name = "cake18";
    _this.cake18.inputEnabled = true;
    _this.cake18.events.onInputDown.add(_this.onCakeDragStart3,_this);
    
      //left side orange plate
    _this.cake1l = _this.add.sprite(165,370,'F2_5B7');
    _this.cake1l.anchor.setTo(0.5);
    _this.cake1l.scale.setTo(1,1);
    _this.cake1l.name = "cake1l";
    _this.cake1l.visible=false;
     
    _this.cake2l = _this.add.sprite(117,370,'F2_5B8');
    _this.cake2l.anchor.setTo(0.5);
    _this.cake2l.scale.setTo(1,1);
    _this.cake2l.name = "cake2l";
    _this.cake2l.visible=false;
     
    _this.cake3l = _this.add.sprite(110,408,'F2_5B10');
    _this.cake3l.anchor.setTo(0.5);
    _this.cake3l.scale.setTo(1,1);
    _this.cake3l.name = "cake3l";
    _this.cake3l.visible=false;
     
    _this.cake4l = _this.add.sprite(147,415,'F2_5B3');
    _this.cake4l.anchor.setTo(0.5);
    _this.cake4l.scale.setTo(1,1);
    _this.cake4l.name = "cake4l";
    _this.cake4l.visible=false;
     
    _this.cake5l = _this.add.sprite(205,380,'F2_5B6');
    _this.cake5l.anchor.setTo(0.5);
    _this.cake5l.scale.setTo(1,1);
    _this.cake5l.name = "cake5l";
    _this.cake5l.visible=false;
     
    _this.cake6l = _this.add.sprite(195,410,'F2_5B4');
    _this.cake6l.anchor.setTo(0.5);
    _this.cake6l.scale.setTo(1,1);
    _this.cake6l.name = "cake6l";
    _this.cake6l.visible=false;
    
    //right side green plate
    _this.cake11r = _this.add.sprite(765,380,'F2_5B8');
    _this.cake11r.anchor.setTo(0.5);
    _this.cake11r.scale.setTo(1,1);
    _this.cake11r.name = "cake11r";
    _this.cake11r.visible=false;
     
    _this.cake12r = _this.add.sprite(740,400,'F2_5B9');
    _this.cake12r.anchor.setTo(0.5);
    _this.cake12r.scale.setTo(1,1);
    _this.cake12r.name = "cake12r";
    _this.cake12r.visible=false;
     
    _this.cake13r = _this.add.sprite(800,380,'F2_5B7');
    _this.cake13r.anchor.setTo(0.5);
    _this.cake13r.scale.setTo(0.85,0.85);
    _this.cake13r.name = "cake13r";
    _this.cake13r.visible=false;
     
    _this.cake14r = _this.add.sprite(840,380,'F2_5B6');
    _this.cake14r.anchor.setTo(0.5);
    _this.cake14r.scale.setTo(0.85,0.85);
    _this.cake14r.name = "cake14r";
    _this.cake14r.visible=false;
     
    _this.cake15r = _this.add.sprite(850,410,'F2_5B5');
    _this.cake15r.anchor.setTo(0.5);
    _this.cake15r.scale.setTo(0.9,0.9);
    _this.cake15r.name = "cake15r";
    _this.cake15r.visible=false;
     
    _this.cake16r = _this.add.sprite(830,420,'F2_5B4');
    _this.cake16r.anchor.setTo(0.5);
    _this.cake16r.scale.setTo(0.9,0.9);
    _this.cake16r.name = "cake16r";
    _this.cake16r.visible=false;
     
    _this.cake17r = _this.add.sprite(795,420,'F2_5B3');
    _this.cake17r.anchor.setTo(0.5);
    _this.cake17r.scale.setTo(0.9,0.9);
    _this.cake17r.name = "cake17r";
    _this.cake17r.visible=false;
     
    _this.cake18r = _this.add.sprite(753,420,'F2_5B10');
    _this.cake18r.anchor.setTo(0.5);
    _this.cake18r.scale.setTo(0.9,0.9);
    _this.cake18r.name = "cake18r";
    _this.cake18r.visible=false;
    
    _this.txtbox1 = _this.add.sprite(350,250,'F2_5box1');
    _this.txtbox1.anchor.setTo(0.5);
    _this.txtbox1.scale.setTo(1.5,1.5);
    _this.txtbox1.frame=1;
    _this.txtbox1.name="numbox1";
    _this.txtbox1.inputEnabled = false;
    _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
    
    
    _this.txtbox2 = _this.add.sprite(350,335,'F2_5box1');
    _this.txtbox2.anchor.setTo(0.5);
    _this.txtbox2.scale.setTo(1.5,1.5);
    _this.txtbox2.frame=1;
    _this.txtbox2.name="numbox2";
    _this.txtbox2.inputEnabled = false;
    _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
    
    _this.txtbox3 = _this.add.sprite(610,250,'F2_5box1');
    _this.txtbox3.anchor.setTo(0.5);
    _this.txtbox3.scale.setTo(1.5,1.5);
    _this.txtbox3.frame=1;
    _this.txtbox3.name="numbox3";
    _this.txtbox3.inputEnabled = false;
    _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
  
    _this.txtbox4 = _this.add.sprite(610,335,'F2_5box1');
    _this.txtbox4.anchor.setTo(0.5);
    _this.txtbox4.scale.setTo(1.5,1.5);
    _this.txtbox4.frame=1;
    _this.txtbox4.name="numbox4";
    _this.txtbox4.inputEnabled = false;
    _this.txtbox4.events.onInputDown.add(_this.numberBoxClicked,_this);
   
     _this.numBoxNum1 = _this.add.sprite(345,250,'F2_5numbers1');
    _this.numBoxNum1.anchor.setTo(0.5);
    _this.numBoxNum1.scale.setTo(1.2,1.2);
    _this.numBox1Pressed = false;
    _this.numBoxNum1.visible = false;
    _this.numBoxNum1.frame=3;
    
     _this.numBoxNum2 = _this.add.sprite(345,335,'F2_5numbers1');
    _this.numBoxNum2.anchor.setTo(0.5);
    _this.numBoxNum2.scale.setTo(1.2,1.2);
    _this.numBox2Pressed = false;
    _this.numBoxNum2.visible = false;
    _this.numBoxNum2.frame=6;
     
     
    _this.numBoxNum3 = _this.add.sprite(605,250,'F2_5numbers1');
    _this.numBoxNum3.anchor.setTo(0.5);
    _this.numBoxNum3.scale.setTo(1.2,1.2);
    _this.numBox3Pressed = false;
    _this.numBoxNum3.visible = false;
    _this.numBoxNum3.frame=4;
    
   
    _this.numBoxNum4 = _this.add.sprite(605,335,'F2_5numbers1');
    _this.numBoxNum4.anchor.setTo(0.5);
    _this.numBoxNum4.scale.setTo(1.2,1.2);
    _this.numBox4Pressed = false;
    _this.numBoxNum4.visible = false;
    _this.numBoxNum4.frame=8;
       
      _this.rightAns="3648";
      
     _this.addNumberPad();
    
     _this.group1.add(_this.whiteplate1);
     _this.group1.add(_this.whiteplate2);
     _this.group1.add(_this.orangeplate);
      _this.group1.add(_this.greenplate);
      _this.group1.add(_this.cloud1);
      _this.group1.add(_this.cloud2);
      _this.group2.add(_this.txtbox1);
      _this.group2.add(_this.txtbox2);
      _this.group2.add(_this.txtbox3);
      _this.group2.add(_this.txtbox4);
      _this.group1.add(_this.line1);
      _this.group1.add(_this.line2);
      _this.group2.add(_this.numBoxNum1);
      _this.group2.add(_this.numBoxNum2);
      _this.group2.add(_this.numBoxNum3);
      _this.group2.add(_this.numBoxNum4);
     
     _this.group2.add(_this.cake1);
     _this.group2.add(_this.cake2);
     _this.group2.add(_this.cake3);
     _this.group2.add(_this.cake4);
     _this.group2.add(_this.cake5);
     _this.group2.add(_this.cake6);
    
     _this.group2.add(_this.cake11);
     _this.group2.add(_this.cake12);
     _this.group2.add(_this.cake13);
     _this.group2.add(_this.cake14);
     _this.group2.add(_this.cake15);
     _this.group2.add(_this.cake16);
      _this.group2.add(_this.cake17);
      _this.group2.add(_this.cake18);
    
     
     _this.group2.add(_this.cake1l);
     _this.group2.add(_this.cake2l);
     _this.group2.add(_this.cake3l);
     _this.group2.add(_this.cake4l);
     _this.group2.add(_this.cake5l);
     _this.group2.add(_this.cake6l);
    
     _this.group2.add(_this.cake11r);
     _this.group2.add(_this.cake12r);
     _this.group2.add(_this.cake13r);
     _this.group2.add(_this.cake14r);
     _this.group2.add(_this.cake15r);
     _this.group2.add(_this.cake16r);
     _this.group2.add(_this.cake17r);
     _this.group2.add(_this.cake18r);
    
     _this.group2.add(_this.box);
     _this.group2.add(_this.lessthan);
     _this.group2.add(_this.greaterthan);
     _this.group2.add(_this.equal);
    
     
        
    },
   
 gotoSixthQuestion:function(){  
     
       _this.Question = 6;
       if(_this.soundPlayed == false)
    {
      //_this.getVoice();
      _this.soundPlayed = true;     
    }
       _this.loadobject(); 
        
      _this.group1 = _this.add.group();
      _this.group2 = _this.add.group();
     _this.wplate1cakegroup = _this.add.group();
     _this.wplate2cakegroup = _this.add.group();
     _this.oplatecakegroup = _this.add.group();
     _this.gplatecakegroup = _this.add.group();
     _this.comparegroup = _this.add.group();
     
     if(_this.wrongAnswer == false)
        {
            _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group2.x=1000;
            _this.tween1=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate1cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate1cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate2cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate2cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.oplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.oplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.gplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.gplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.comparegroup.x=1000;
            _this.tween1=_this.add.tween(_this.comparegroup).to( { x: 0 }, 1500, 'Linear', true,0);
        
        }
    
    _this.cloud1 = _this.add.sprite(100,280,'F2_5cloud1');
    _this.cloud1.anchor.setTo(0.5);
    _this.cloud1.scale.setTo(0.8,0.8);
    _this.cloud1.frame=3;
    
    _this.cloud2 = _this.add.sprite(840,280,'F2_5cloud2');
    _this.cloud2.anchor.setTo(0.5);
    _this.cloud2.scale.setTo(0.8,0.8);
    _this.cloud2.frame=2;
    
    //left side white plate1
    _this.cake1 = _this.add.sprite(205,110,'F2_5B8');
    _this.cake1.anchor.setTo(0.5);
    _this.cake1.scale.setTo(1,1);
    _this.cake1.name = "cake1";
    _this.cake1.inputEnabled = true;
    _this.cake1.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake2 = _this.add.sprite(175,135,'F2_5B9');
    _this.cake2.anchor.setTo(0.5);
    _this.cake2.scale.setTo(1,1);
    _this.cake2.name = "cake2";
    _this.cake2.inputEnabled = true;
    _this.cake2.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake3 = _this.add.sprite(245,110,'F2_5B7');
    _this.cake3.anchor.setTo(0.5);
    _this.cake3.scale.setTo(0.85,0.85);
    _this.cake3.name = "cake3";
    _this.cake3.inputEnabled = true;
    _this.cake3.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake4 = _this.add.sprite(275,115,'F2_5B6');
    _this.cake4.anchor.setTo(0.5);
    _this.cake4.scale.setTo(0.85,0.85);
    _this.cake4.name = "cake4";
    _this.cake4.inputEnabled = true;
    _this.cake4.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake5 = _this.add.sprite(285,140,'F2_5B5');
    _this.cake5.anchor.setTo(0.5);
    _this.cake5.scale.setTo(0.9,0.9);
    _this.cake5.name = "cake5";
    _this.cake5.inputEnabled = true;
    _this.cake5.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake6 = _this.add.sprite(265,160,'F2_5B4');
    _this.cake6.anchor.setTo(0.5);
    _this.cake6.scale.setTo(0.9,0.9);
    _this.cake6.name = "cake6";
    _this.cake6.inputEnabled = true;
    _this.cake6.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake7 = _this.add.sprite(225,160,'F2_5B3');
    _this.cake7.anchor.setTo(0.5);
    _this.cake7.scale.setTo(0.9,0.9);
    _this.cake7.name = "cake7";
    _this.cake7.inputEnabled = true;
    _this.cake7.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake8 = _this.add.sprite(185,160,'F2_5B10');
    _this.cake8.anchor.setTo(0.5);
    _this.cake8.scale.setTo(0.9,0.9);
    _this.cake8.name = "cake8";
    _this.cake8.inputEnabled = true;
    _this.cake8.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
       //right side white plate
     _this.cake11 = _this.add.sprite(685,110,'F2_5B8');
    _this.cake11.anchor.setTo(0.5);
    _this.cake11.scale.setTo(1,1);
    _this.cake11.name = "cake11";
    _this.cake11.inputEnabled = true;
    _this.cake11.events.onInputDown.add(_this.onCakeDragStart3,_this);
    
    _this.cake12 = _this.add.sprite(-4,15,'F2_5B9');
    _this.cake12.anchor.setTo(0.5);
    _this.cake12.scale.setTo(1,1);
    _this.cake12.name = "cake12";
    _this.cake11.addChild(_this.cake12);
    
    _this.cake13 = _this.add.sprite(730,113,'F2_5B7');
    _this.cake13.anchor.setTo(0.5);
    _this.cake13.scale.setTo(1,1);
    _this.cake13.name = "cake13";
    _this.cake13.inputEnabled = true;
    _this.cake13.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake14 = _this.add.sprite(20,3,'F2_5B6');
    _this.cake14.anchor.setTo(0.5);
    _this.cake14.scale.setTo(0.93,0.93);
    _this.cake14.name = "cake4";
    _this.cake13.addChild(_this.cake14);
     
    _this.cake15 = _this.add.sprite(685,152,'F2_5B10');
    _this.cake15.anchor.setTo(0.5);
    _this.cake15.scale.setTo(1,1);
    _this.cake15.name = "cake15";
    _this.cake15.inputEnabled = true;
    _this.cake15.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake16 = _this.add.sprite(19,3,'F2_5B3');
    _this.cake16.anchor.setTo(0.5);
    _this.cake16.scale.setTo(0.98,0.98);
    _this.cake16.name = "cake6";
    _this.cake15.addChild(_this.cake16);
     
    _this.cake17 = _this.add.sprite(755,140,'F2_5B5');
    _this.cake17.anchor.setTo(0.5);
    _this.cake17.scale.setTo(1,1);
    _this.cake17.name = "cake17";
    _this.cake17.inputEnabled = true;
    _this.cake17.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake18 = _this.add.sprite(-3,11,'F2_5B4');
    _this.cake18.anchor.setTo(0.5);
    _this.cake18.scale.setTo(1,1);
    _this.cake18.name = "cake18";
    _this.cake17.addChild(_this.cake18);
    
     //left side orange plate
    _this.cake1l = _this.add.sprite(135,370,'F2_5B8');
    _this.cake1l.anchor.setTo(0.5);
    _this.cake1l.scale.setTo(1,1);
    _this.cake1l.name = "cake1l";
    _this.cake1l.visible=false;
     
    _this.cake2l = _this.add.sprite(105,390,'F2_5B9');
    _this.cake2l.anchor.setTo(0.5);
    _this.cake2l.scale.setTo(1,1);
    _this.cake2l.name = "cake2l";
    _this.cake2l.visible=false;
     
    _this.cake3l = _this.add.sprite(175,370,'F2_5B7');
    _this.cake3l.anchor.setTo(0.5);
    _this.cake3l.scale.setTo(0.85,0.85);
    _this.cake3l.name = "cake3l";
    _this.cake3l.visible=false;
     
    _this.cake4l = _this.add.sprite(205,370,'F2_5B6');
    _this.cake4l.anchor.setTo(0.5);
    _this.cake4l.scale.setTo(0.85,0.85);
    _this.cake4l.name = "cake4l";
    _this.cake4l.visible=false;
     
    _this.cake5l = _this.add.sprite(215,400,'F2_5B5');
    _this.cake5l.anchor.setTo(0.5);
    _this.cake5l.scale.setTo(0.9,0.9);
    _this.cake5l.name = "cake5l";
    _this.cake5l.visible=false;
     
    _this.cake6l = _this.add.sprite(195,410,'F2_5B4');
    _this.cake6l.anchor.setTo(0.5);
    _this.cake6l.scale.setTo(0.9,0.9);
    _this.cake6l.name = "cake6l";
    _this.cake6l.visible=false;
     
    _this.cake7l = _this.add.sprite(155,410,'F2_5B3');
    _this.cake7l.anchor.setTo(0.5);
    _this.cake7l.scale.setTo(0.9,0.9);
    _this.cake7l.name = "cake7l";
    _this.cake7l.visible=false;
     
    _this.cake8l = _this.add.sprite(115,410,'F2_5B10');
    _this.cake8l.anchor.setTo(0.5);
    _this.cake8l.scale.setTo(0.9,0.9);
    _this.cake8l.name = "cake8l";
    _this.cake8l.visible=false;
     
//right side green plate
    _this.cake11r = _this.add.sprite(755,370,'F2_5B8');
    _this.cake11r.anchor.setTo(0.5);
    _this.cake11r.scale.setTo(1,1);
    _this.cake11r.name = "cake11r";
    
    _this.cake12r = _this.add.sprite(-4,15,'F2_5B9');
    _this.cake12r.anchor.setTo(0.5);
    _this.cake12r.scale.setTo(1,1);
    _this.cake12r.name = "cake12r";
    _this.cake11r.addChild(_this.cake12r);
    _this.cake11r.visible=false;
     
    _this.cake13r = _this.add.sprite(805,373,'F2_5B7');
    _this.cake13r.anchor.setTo(0.5);
    _this.cake13r.scale.setTo(1,1);
    _this.cake13r.name = "cake13r";
     
    _this.cake14r = _this.add.sprite(20,3,'F2_5B6');
    _this.cake14r.anchor.setTo(0.5);
    _this.cake14r.scale.setTo(1,1);
    _this.cake14r.name = "cake14r";
    _this.cake13r.addChild(_this.cake14r);
    _this.cake13r.visible=false;
     
    _this.cake15r = _this.add.sprite(755,412,'F2_5B10');
    _this.cake15r.anchor.setTo(0.5);
    _this.cake15r.scale.setTo(1,1);
    _this.cake15r.name = "cake15r";
     
    _this.cake16r = _this.add.sprite(19,3,'F2_5B3');
    _this.cake16r.anchor.setTo(0.5);
    _this.cake16r.scale.setTo(1,1);
    _this.cake16r.name = "cake16r";
    _this.cake15r.addChild(_this.cake16r);
    _this.cake15r.visible=false;
     
    _this.cake17r = _this.add.sprite(830,400,'F2_5B5');
    _this.cake17r.anchor.setTo(0.5);
    _this.cake17r.scale.setTo(1,1);
    _this.cake17r.name = "cake17r";
     
    _this.cake18r = _this.add.sprite(-3,11,'F2_5B4');
    _this.cake18r.anchor.setTo(0.5);
    _this.cake18r.scale.setTo(1,1);
    _this.cake18r.name = "cake18r";
    _this.cake17r.addChild(_this.cake18r);
    _this.cake17r.visible=false;
     
    _this.txtbox1 = _this.add.sprite(350,250,'F2_5box1');
    _this.txtbox1.anchor.setTo(0.5);
    _this.txtbox1.scale.setTo(1.5,1.5);
    _this.txtbox1.frame=1;
    _this.txtbox1.name="numbox1";
    _this.txtbox1.inputEnabled = false;
    _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
    
    
    _this.txtbox2 = _this.add.sprite(350,335,'F2_5box1');
    _this.txtbox2.anchor.setTo(0.5);
    _this.txtbox2.scale.setTo(1.5,1.5);
    _this.txtbox2.frame=1;
    _this.txtbox2.name="numbox2";
    _this.txtbox2.inputEnabled = false;
    _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
    
    _this.txtbox3 = _this.add.sprite(610,250,'F2_5box1');
    _this.txtbox3.anchor.setTo(0.5);
    _this.txtbox3.scale.setTo(1.5,1.5);
    _this.txtbox3.frame=1;
    _this.txtbox3.name="numbox3";
    _this.txtbox3.inputEnabled = false;
    _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
  
    _this.txtbox4 = _this.add.sprite(610,335,'F2_5box1');
    _this.txtbox4.anchor.setTo(0.5);
    _this.txtbox4.scale.setTo(1.5,1.5);
    _this.txtbox4.frame=1;
    _this.txtbox4.name="numbox4";
    _this.txtbox4.inputEnabled = false;
    _this.txtbox4.events.onInputDown.add(_this.numberBoxClicked,_this);
   
    _this.numBoxNum1 = _this.add.sprite(345,250,'F2_5numbers1');
    _this.numBoxNum1.anchor.setTo(0.5);
    _this.numBoxNum1.scale.setTo(1.2,1.2);
    _this.numBox1Pressed = false;
    _this.numBoxNum1.visible = false;
    _this.numBoxNum1.frame=2;
    
     _this.numBoxNum2 = _this.add.sprite(345,335,'F2_5numbers1');
    _this.numBoxNum2.anchor.setTo(0.5);
    _this.numBoxNum2.scale.setTo(1.2,1.2);
    _this.numBox2Pressed = false;
    _this.numBoxNum2.visible = false;
    _this.numBoxNum2.frame=8;
     
     
    _this.numBoxNum3 = _this.add.sprite(605,250,'F2_5numbers1');
    _this.numBoxNum3.anchor.setTo(0.5);
    _this.numBoxNum3.scale.setTo(1.2,1.2);
    _this.numBox3Pressed = false;
    _this.numBoxNum3.visible = false;
    _this.numBoxNum3.frame=1;
    
   
    _this.numBoxNum4 = _this.add.sprite(605,335,'F2_5numbers1');
    _this.numBoxNum4.anchor.setTo(0.5);
    _this.numBoxNum4.scale.setTo(1.2,1.2);
    _this.numBox4Pressed = false;
    _this.numBoxNum4.visible = false;
    _this.numBoxNum4.frame=4;
       
      _this.rightAns="2814";
      
     _this.addNumberPad();
     
     _this.group1.add(_this.whiteplate1);
     _this.group1.add(_this.whiteplate2);
     _this.group1.add(_this.orangeplate);
      _this.group1.add(_this.greenplate);
      _this.group1.add(_this.cloud1);
      _this.group1.add(_this.cloud2);
      _this.group2.add(_this.txtbox1);
      _this.group2.add(_this.txtbox2);
      _this.group2.add(_this.txtbox3);
      _this.group2.add(_this.txtbox4);
      _this.group1.add(_this.line1);
      _this.group1.add(_this.line2);
      _this.group2.add(_this.numBoxNum1);
      _this.group2.add(_this.numBoxNum2);
      _this.group2.add(_this.numBoxNum3);
      _this.group2.add(_this.numBoxNum4);
     
     _this.group2.add(_this.cake1);
     _this.group2.add(_this.cake2);
     _this.group2.add(_this.cake3);
     _this.group2.add(_this.cake4);
     _this.group2.add(_this.cake5);
     _this.group2.add(_this.cake6);
      _this.group2.add(_this.cake7);
      _this.group2.add(_this.cake8);
    
     _this.group2.add(_this.cake1l);
     _this.group2.add(_this.cake2l);
     _this.group2.add(_this.cake3l);
     _this.group2.add(_this.cake4l);
     _this.group2.add(_this.cake5l);
     _this.group2.add(_this.cake6l);
     _this.group2.add(_this.cake7l);
     _this.group2.add(_this.cake8l);
     
      _this.group2.add(_this.cake11);
//     _this.wplate2cakegroup.add(_this.cake12);
      _this.group2.add(_this.cake13);
//     _this.wplate2cakegroup.add(_this.cake14);
      _this.group2.add(_this.cake15);
//     _this.wplate2cakegroup.add(_this.cake16);
      _this.group2.add(_this.cake17);
//     _this.wplate2cakegroup.add(_this.cake18);
     
      _this.group2.add(_this.cake11r);
//     _this.gplatecakegroup.add(_this.cake12r);
     _this.group2.add(_this.cake13r);
//     _this.gplatecakegroup.add(_this.cake14r);
     _this.group2.add(_this.cake15r);
//     _this.gplatecakegroup.add(_this.cake16r);
     _this.group2.add(_this.cake17r);
//     _this.gplatecakegroup.add(_this.cake18r);
     
    
    
     _this.group2.add(_this.box);
     _this.group2.add(_this.lessthan);
     _this.group2.add(_this.greaterthan);
     _this.group2.add(_this.equal);
 },
    
 gotoSeventhQuestion:function(){
     
      _this.Question = 7;
        if(_this.soundPlayed == false)
    {
     // _this.getVoice();
      _this.soundPlayed = true;     
    }
       _this.loadobject(); 
        
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.wplate1cakegroup = _this.add.group();
     _this.wplate2cakegroup = _this.add.group();
     _this.oplatecakegroup = _this.add.group();
     _this.gplatecakegroup = _this.add.group();
     _this.comparegroup = _this.add.group();
     
     if(_this.wrongAnswer == false)
        {
            _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group2.x=1000;
            _this.tween1=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate1cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate1cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate2cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate2cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.oplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.oplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.gplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.gplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.comparegroup.x=1000;
            _this.tween1=_this.add.tween(_this.comparegroup).to( { x: 0 }, 1500, 'Linear', true,0);
        
        }
    
    _this.cloud1 = _this.add.sprite(100,280,'F2_5cloud1');
    _this.cloud1.anchor.setTo(0.5);
    _this.cloud1.scale.setTo(0.8,0.8);
    _this.cloud1.frame=6;
    
    _this.cloud2 = _this.add.sprite(840,280,'F2_5cloud2');
    _this.cloud2.anchor.setTo(0.5);
    _this.cloud2.scale.setTo(0.8,0.8);
    _this.cloud2.frame=6;
     
     //left side white plate
      _this.cake1 = _this.add.sprite(240,110,'F2_5B7');
    _this.cake1.anchor.setTo(0.5);
    _this.cake1.scale.setTo(1,1);
    _this.cake1.name = "cake1";
    _this.cake1.inputEnabled = true;
    _this.cake1.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake2 = _this.add.sprite(192,110,'F2_5B8');
    _this.cake2.anchor.setTo(0.5);
    _this.cake2.scale.setTo(1,1);
    _this.cake2.name = "cake2";
    _this.cake2.inputEnabled = true;
    _this.cake2.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake3 = _this.add.sprite(185,148,'F2_5B10');
    _this.cake3.anchor.setTo(0.5);
    _this.cake3.scale.setTo(1,1);
    _this.cake3.name = "cake3";
    _this.cake3.inputEnabled = true;
    _this.cake3.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake4 = _this.add.sprite(222,155,'F2_5B3');
    _this.cake4.anchor.setTo(0.5);
    _this.cake4.scale.setTo(1,1);
    _this.cake4.name = "cake4";
    _this.cake4.inputEnabled = true;
    _this.cake4.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake5 = _this.add.sprite(280,120,'F2_5B6');
    _this.cake5.anchor.setTo(0.5);
    _this.cake5.scale.setTo(1,1);
    _this.cake5.name = "cake5";
    _this.cake5.inputEnabled = true;
    _this.cake5.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake6 = _this.add.sprite(270,150,'F2_5B4');
    _this.cake6.anchor.setTo(0.5);
    _this.cake6.scale.setTo(1,1);
    _this.cake6.name = "cake6";
    _this.cake6.inputEnabled = true;
    _this.cake6.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
   
     
     //left hand side orange plate cake
     _this.cake1l = _this.add.sprite(160,370,'F2_5B7');
    _this.cake1l.anchor.setTo(0.5);
    _this.cake1l.scale.setTo(1,1);
    _this.cake1l.name = "cake1l";
    _this.cake1l.visible=false;
     
    _this.cake2l = _this.add.sprite(112,370,'F2_5B8');
    _this.cake2l.anchor.setTo(0.5);
    _this.cake2l.scale.setTo(1,1);
    _this.cake2l.name = "cake2l";
    _this.cake2l.visible=false;
     
    _this.cake3l = _this.add.sprite(105,408,'F2_5B10');
    _this.cake3l.anchor.setTo(0.5);
    _this.cake3l.scale.setTo(1,1);
    _this.cake3l.name = "cake3l";
    _this.cake3l.visible=false;
     
    _this.cake4l = _this.add.sprite(142,415,'F2_5B3');
    _this.cake4l.anchor.setTo(0.5);
    _this.cake4l.scale.setTo(1,1);
    _this.cake4l.name = "cake4l";
    _this.cake4l.visible=false;
     
    _this.cake5l = _this.add.sprite(200,380,'F2_5B6');
    _this.cake5l.anchor.setTo(0.5);
    _this.cake5l.scale.setTo(1,1);
    _this.cake5l.name = "cake5l";
    _this.cake5l.visible=false;
     
    _this.cake6l = _this.add.sprite(190,410,'F2_5B4');
    _this.cake6l.anchor.setTo(0.5);
    _this.cake6l.scale.setTo(1,1);
    _this.cake6l.name = "cake6l";
    _this.cake6l.visible=false;
     
       //right side white plate
    _this.cake11 = _this.add.sprite(700,110,'F2_5B8');
    _this.cake11.anchor.setTo(0.5);
    _this.cake11.scale.setTo(1,1);
    _this.cake11.name = "cake11";
    _this.cake11.inputEnabled = true;
    _this.cake11.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake12 = _this.add.sprite(670,135,'F2_5B9');
    _this.cake12.anchor.setTo(0.5);
    _this.cake12.scale.setTo(1,1);
    _this.cake12.name = "cake12";
    _this.cake12.inputEnabled = true;
    _this.cake12.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake13 = _this.add.sprite(740,110,'F2_5B7');
    _this.cake13.anchor.setTo(0.5);
    _this.cake13.scale.setTo(0.85,0.85);
    _this.cake13.name = "cake13";
    _this.cake13.inputEnabled = true;
    _this.cake13.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake14 = _this.add.sprite(770,115,'F2_5B6');
    _this.cake14.anchor.setTo(0.5);
    _this.cake14.scale.setTo(0.85,0.85);
    _this.cake14.name = "cake14";
    _this.cake14.inputEnabled = true;
    _this.cake14.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake15 = _this.add.sprite(780,140,'F2_5B5');
    _this.cake15.anchor.setTo(0.5);
    _this.cake15.scale.setTo(0.9,0.9);
    _this.cake15.name = "cake15";
    _this.cake15.inputEnabled = true;
    _this.cake15.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake16 = _this.add.sprite(760,160,'F2_5B4');
    _this.cake16.anchor.setTo(0.5);
    _this.cake16.scale.setTo(0.9,0.9);
    _this.cake16.name = "cake16";
    _this.cake16.inputEnabled = true;
    _this.cake16.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake17 = _this.add.sprite(720,160,'F2_5B3');
    _this.cake17.anchor.setTo(0.5);
    _this.cake17.scale.setTo(0.9,0.9);
    _this.cake17.name = "cake17";
    _this.cake17.inputEnabled = true;
    _this.cake17.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake18 = _this.add.sprite(680,160,'F2_5B10');
    _this.cake18.anchor.setTo(0.5);
    _this.cake18.scale.setTo(0.9,0.9);
    _this.cake18.name = "cake18";
    _this.cake18.inputEnabled = true;
    _this.cake18.events.onInputDown.add(_this.onCakeDragStart3,_this);
     

      //right side green plate
    _this.cake11r = _this.add.sprite(765,380,'F2_5B8');
    _this.cake11r.anchor.setTo(0.5);
    _this.cake11r.scale.setTo(1,1);
    _this.cake11r.name = "cake11r";
    _this.cake11r.visible=false;
     
    _this.cake12r = _this.add.sprite(735,400,'F2_5B9');
    _this.cake12r.anchor.setTo(0.5);
    _this.cake12r.scale.setTo(1,1);
    _this.cake12r.name = "cake12r";
    _this.cake12r.visible=false;
     
    _this.cake13r = _this.add.sprite(800,380,'F2_5B7');
    _this.cake13r.anchor.setTo(0.5);
    _this.cake13r.scale.setTo(0.85,0.85);
    _this.cake13r.name = "cake13r";
    _this.cake13r.visible=false;
     
    _this.cake14r = _this.add.sprite(840,380,'F2_5B6');
    _this.cake14r.anchor.setTo(0.5);
    _this.cake14r.scale.setTo(0.85,0.85);
    _this.cake14r.name = "cake14r";
    _this.cake14r.visible=false;
     
    _this.cake15r = _this.add.sprite(850,410,'F2_5B5');
    _this.cake15r.anchor.setTo(0.5);
    _this.cake15r.scale.setTo(0.9,0.9);
    _this.cake15r.name = "cake15r";
    _this.cake15r.visible=false;
     
    _this.cake16r = _this.add.sprite(830,420,'F2_5B4');
    _this.cake16r.anchor.setTo(0.5);
    _this.cake16r.scale.setTo(0.9,0.9);
    _this.cake16r.name = "cake16r";
    _this.cake16r.visible=false;
     
    _this.cake17r = _this.add.sprite(795,420,'F2_5B3');
    _this.cake17r.anchor.setTo(0.5);
    _this.cake17r.scale.setTo(0.9,0.9);
    _this.cake17r.name = "cake17r";
    _this.cake17r.visible=false;
     
    _this.cake18r = _this.add.sprite(753,420,'F2_5B10');
    _this.cake18r.anchor.setTo(0.5);
    _this.cake18r.scale.setTo(0.9,0.9);
    _this.cake18r.name = "cake18r";
    _this.cake18r.visible=false;
     
  
    _this.txtbox1 = _this.add.sprite(350,250,'F2_5box1');
    _this.txtbox1.anchor.setTo(0.5);
    _this.txtbox1.scale.setTo(1.5,1.5);
    _this.txtbox1.frame=0;
     
    _this.number1 = _this.add.sprite(345,250,'F2_5numbers2');
    _this.number1.anchor.setTo(0.5);
    _this.number1.scale.setTo(1.5,1.5);
    _this.number1.frame=5;
        
    _this.txtbox2 = _this.add.sprite(350,335,'F2_5box1');
    _this.txtbox2.anchor.setTo(0.5);
    _this.txtbox2.scale.setTo(1.5,1.5);
    _this.txtbox2.frame=1;
    _this.txtbox2.name="numbox2";
    _this.txtbox2.inputEnabled = false;
    _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
    _this.txtbox4 = _this.add.sprite(610,335,'F2_5box1');
    _this.txtbox4.anchor.setTo(0.5);
    _this.txtbox4.scale.setTo(1.5,1.5);
    _this.txtbox4.frame=1;
    _this.txtbox4.name="numbox4";
    _this.txtbox4.inputEnabled = false;
    _this.txtbox4.events.onInputDown.add(_this.numberBoxClicked,_this);
       
    _this.txtbox3 = _this.add.sprite(610,250,'F2_5box1');
    _this.txtbox3.anchor.setTo(0.5);
    _this.txtbox3.scale.setTo(1.5,1.5);
    _this.txtbox3.frame=0;
   
    _this.number2 = _this.add.sprite(605,250,'F2_5numbers2');
    _this.number2.anchor.setTo(0.5);
    _this.number2.scale.setTo(1.5,1.5);
    _this.number2.frame=5;
     
    _this.numBoxNum2 = _this.add.sprite(345,335,'F2_5numbers1');
    _this.numBoxNum2.anchor.setTo(0.5);
    _this.numBoxNum2.scale.setTo(1.2,1.2);
    _this.numBox2Pressed = false;
    _this.numBoxNum2.visible = false;
    _this.numBoxNum2.frame=6;
     
    _this.numBoxNum4 = _this.add.sprite(605,335,'F2_5numbers1');
    _this.numBoxNum4.anchor.setTo(0.5);
    _this.numBoxNum4.scale.setTo(1.2,1.2);
    _this.numBox4Pressed = false;
    _this.numBoxNum4.visible = false;
    _this.numBoxNum4.frame=8;
     
     _this.rightAns="68";
     
     _this.addNumberPad();
     
      _this.group1.add(_this.whiteplate1);
     _this.group1.add(_this.whiteplate2);
     _this.group1.add(_this.orangeplate);
      _this.group1.add(_this.greenplate);
      _this.group1.add(_this.cloud1);
      _this.group1.add(_this.cloud2);
      _this.group2.add(_this.txtbox1);
      _this.group2.add(_this.txtbox2);
      _this.group2.add(_this.txtbox3);
      _this.group2.add(_this.txtbox4);
      _this.group1.add(_this.line1);
      _this.group1.add(_this.line2);
      _this.group2.add(_this.number1);
      _this.group2.add(_this.number2);
     
      _this.group2.add(_this.numBoxNum2);
      _this.group2.add(_this.numBoxNum4);
     
     _this.group2.add(_this.cake1);
     _this.group2.add(_this.cake2);
     _this.group2.add(_this.cake3);
     _this.group2.add(_this.cake4);
     _this.group2.add(_this.cake5);
     _this.group2.add(_this.cake6);
    
     _this.group2.add(_this.cake11);
     _this.group2.add(_this.cake12);
     _this.group2.add(_this.cake13);
     _this.group2.add(_this.cake14);
     _this.group2.add(_this.cake15);
     _this.group2.add(_this.cake16);
      _this.group2.add(_this.cake17);
      _this.group2.add(_this.cake18);
    
     
     _this.group2.add(_this.cake1l);
     _this.group2.add(_this.cake2l);
     _this.group2.add(_this.cake3l);
     _this.group2.add(_this.cake4l);
     _this.group2.add(_this.cake5l);
     _this.group2.add(_this.cake6l);
    
     _this.group2.add(_this.cake11r);
     _this.group2.add(_this.cake12r);
     _this.group2.add(_this.cake13r);
     _this.group2.add(_this.cake14r);
     _this.group2.add(_this.cake15r);
     _this.group2.add(_this.cake16r);
     _this.group2.add(_this.cake17r);
     _this.group2.add(_this.cake18r);
    
     _this.group2.add(_this.box);
     _this.group2.add(_this.lessthan);
     _this.group2.add(_this.greaterthan);
     _this.group2.add(_this.equal);
     
 },
 
 gotoEighthQuestion:function(){
     
      _this.Question = 8;
    if(_this.soundPlayed == false)
    {
      //_this.getVoice();
      _this.soundPlayed = true;     
    }
    _this.loadobject();
     
     _this.group1 = _this.add.group();
      _this.group2 = _this.add.group();
     _this.wplate1cakegroup = _this.add.group();
     _this.wplate2cakegroup = _this.add.group();
     _this.oplatecakegroup = _this.add.group();
     _this.gplatecakegroup = _this.add.group();
     _this.comparegroup = _this.add.group();
     
     if(_this.wrongAnswer == false)
        {
            _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group2.x=1000;
            _this.tween1=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate1cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate1cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate2cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate2cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.oplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.oplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.gplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.gplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.comparegroup.x=1000;
            _this.tween1=_this.add.tween(_this.comparegroup).to( { x: 0 }, 1500, 'Linear', true,0);
        
        }
    
    _this.cloud1 = _this.add.sprite(100,280,'F2_5cloud1');
    _this.cloud1.anchor.setTo(0.5);
    _this.cloud1.scale.setTo(0.8,0.8);
    _this.cloud1.frame=3;
    
    _this.cloud2 = _this.add.sprite(840,280,'F2_5cloud2');
    _this.cloud2.anchor.setTo(0.5);
    _this.cloud2.scale.setTo(0.8,0.8);
    _this.cloud2.frame=4;
     
     //left side white plate
    _this.cake1 = _this.add.sprite(195,120,'F2_5B8');
    _this.cake1.anchor.setTo(0.5);
    _this.cake1.scale.setTo(1,1);
    _this.cake1.name = "cake1";
    _this.cake1.inputEnabled = true;
    _this.cake1.events.onInputDown.add(_this.onCakeDragStart1,_this);
    
    _this.cake2 = _this.add.sprite(-4,15,'F2_5B9');
    _this.cake2.anchor.setTo(0.5);
    _this.cake2.scale.setTo(1,1);
    _this.cake2.name = "cake2";
    _this.cake1.addChild(_this.cake2);
     
    _this.cake3 = _this.add.sprite(238,110,'F2_5B7');
    _this.cake3.anchor.setTo(0.5);
    _this.cake3.scale.setTo(0.85,0.85);
    _this.cake3.name = "cake3";
    _this.cake3.inputEnabled = true;
    _this.cake3.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake4 = _this.add.sprite(20,3,'F2_5B6');
    _this.cake4.anchor.setTo(0.5);
    _this.cake4.scale.setTo(0.93,0.93);
    _this.cake4.name = "cake4";
    _this.cake3.addChild(_this.cake4);
     
    _this.cake5 = _this.add.sprite(200,160,'F2_5B10');
    _this.cake5.anchor.setTo(0.5);
    _this.cake5.scale.setTo(0.92,0.92);
    _this.cake5.name = "cake5";
    _this.cake5.inputEnabled = true;
    _this.cake5.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake6 = _this.add.sprite(19,3,'F2_5B3');
    _this.cake6.anchor.setTo(0.5);
    _this.cake6.scale.setTo(0.98,0.98);
    _this.cake6.name = "cake6";
    _this.cake5.addChild(_this.cake6);
     
    _this.cake7 = _this.add.sprite(262,150,'F2_5B5');
    _this.cake7.anchor.setTo(0.5);
    _this.cake7.scale.setTo(0.9,0.9);
    _this.cake7.name = "cake7";
    _this.cake7.inputEnabled = true;
    _this.cake7.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake8 = _this.add.sprite(-3,11,'F2_5B4');
    _this.cake8.anchor.setTo(0.5);
    _this.cake8.scale.setTo(1,1);
    _this.cake8.name = "cake8";
    _this.cake7.addChild(_this.cake8);
     
 //left side orange plate
    _this.cake1l = _this.add.sprite(130,380,'F2_5B8');
    _this.cake1l.anchor.setTo(0.5);
    _this.cake1l.scale.setTo(1,1);
    _this.cake1l.name = "cake1l";
    
    _this.cake2l = _this.add.sprite(-4,15,'F2_5B9');
    _this.cake2l.anchor.setTo(0.5);
    _this.cake2l.scale.setTo(1,1);
    _this.cake2l.name = "cake2l";
    _this.cake1l.addChild(_this.cake2l);
    _this.cake1l.visible=false;
     
    _this.cake3l = _this.add.sprite(170,370,'F2_5B7');
    _this.cake3l.anchor.setTo(0.5);
    _this.cake3l.scale.setTo(0.85,0.85);
    _this.cake3l.name = "cake3l";
     
    _this.cake4l = _this.add.sprite(20,3,'F2_5B6');
    _this.cake4l.anchor.setTo(0.5);
    _this.cake4l.scale.setTo(0.93,0.93);
    _this.cake4l.name = "cake4l";
    _this.cake3l.addChild(_this.cake4l);
    _this.cake3l.visible=false;
     
    _this.cake5l = _this.add.sprite(140,418,'F2_5B10');
    _this.cake5l.anchor.setTo(0.5);
    _this.cake5l.scale.setTo(0.92,0.92);
    _this.cake5l.name = "cake5l";
     
    _this.cake6l = _this.add.sprite(19,3,'F2_5B3');
    _this.cake6l.anchor.setTo(0.5);
    _this.cake6l.scale.setTo(0.98,0.98);
    _this.cake6l.name = "cake6l";
    _this.cake5l.addChild(_this.cake6l);
    _this.cake5l.visible=false;
     
    _this.cake7l = _this.add.sprite(200,400,'F2_5B5');
    _this.cake7l.anchor.setTo(0.5);
    _this.cake7l.scale.setTo(0.9,0.9);
    _this.cake7l.name = "cake7l";
     
    _this.cake8l = _this.add.sprite(-3,11,'F2_5B4');
    _this.cake8l.anchor.setTo(0.5);
    _this.cake8l.scale.setTo(1,1);
    _this.cake8l.name = "cake8l";
    _this.cake7l.addChild(_this.cake8l);
    _this.cake7l.visible=false;
     
       //right side white plate
    _this.cake11 = _this.add.sprite(685,110,'F2_5B8');
    _this.cake11.anchor.setTo(0.5);
    _this.cake11.scale.setTo(1,1);
    _this.cake11.name = "cake11";
    _this.cake11.inputEnabled = true;
    _this.cake11.events.onInputDown.add(_this.onCakeDragStart3,_this);
    
    _this.cake12 = _this.add.sprite(-4,15,'F2_5B9');
    _this.cake12.anchor.setTo(0.5);
    _this.cake12.scale.setTo(1,1);
    _this.cake12.name = "cake12";
    _this.cake11.addChild(_this.cake12);
    
    _this.cake13 = _this.add.sprite(730,113,'F2_5B7');
    _this.cake13.anchor.setTo(0.5);
    _this.cake13.scale.setTo(1,1);
    _this.cake13.name = "cake13";
    _this.cake13.inputEnabled = true;
    _this.cake13.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake14 = _this.add.sprite(20,3,'F2_5B6');
    _this.cake14.anchor.setTo(0.5);
    _this.cake14.scale.setTo(0.93,0.93);
    _this.cake14.name = "cake4";
    _this.cake13.addChild(_this.cake14);
     
    _this.cake15 = _this.add.sprite(685,152,'F2_5B10');
    _this.cake15.anchor.setTo(0.5);
    _this.cake15.scale.setTo(1,1);
    _this.cake15.name = "cake15";
    _this.cake15.inputEnabled = true;
    _this.cake15.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake16 = _this.add.sprite(19,3,'F2_5B3');
    _this.cake16.anchor.setTo(0.5);
    _this.cake16.scale.setTo(0.98,0.98);
    _this.cake16.name = "cake6";
    _this.cake15.addChild(_this.cake16);
     
    _this.cake17 = _this.add.sprite(755,140,'F2_5B5');
    _this.cake17.anchor.setTo(0.5);
    _this.cake17.scale.setTo(1,1);
    _this.cake17.name = "cake17";
    _this.cake17.inputEnabled = true;
    _this.cake17.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake18 = _this.add.sprite(-3,11,'F2_5B4');
    _this.cake18.anchor.setTo(0.5);
    _this.cake18.scale.setTo(1,1);
    _this.cake18.name = "cake18";
    _this.cake17.addChild(_this.cake18);
     
      _this.cake11r = _this.add.sprite(755,370,'F2_5B8');
    _this.cake11r.anchor.setTo(0.5);
    _this.cake11r.scale.setTo(1,1);
    _this.cake11r.name = "cake11r";
    
    _this.cake12r = _this.add.sprite(-4,15,'F2_5B9');
    _this.cake12r.anchor.setTo(0.5);
    _this.cake12r.scale.setTo(1,1);
    _this.cake12r.name = "cake12r";
    _this.cake11r.addChild(_this.cake12r);
    _this.cake11r.visible=false;
     
    _this.cake13r = _this.add.sprite(805,373,'F2_5B7');
    _this.cake13r.anchor.setTo(0.5);
    _this.cake13r.scale.setTo(1,1);
    _this.cake13r.name = "cake13r";
     
    _this.cake14r = _this.add.sprite(20,3,'F2_5B6');
    _this.cake14r.anchor.setTo(0.5);
    _this.cake14r.scale.setTo(1,1);
    _this.cake14r.name = "cake14r";
    _this.cake13r.addChild(_this.cake14r);
    _this.cake13r.visible=false;
     
    _this.cake15r = _this.add.sprite(755,412,'F2_5B10');
    _this.cake15r.anchor.setTo(0.5);
    _this.cake15r.scale.setTo(1,1);
    _this.cake15r.name = "cake15r";
     
    _this.cake16r = _this.add.sprite(19,3,'F2_5B3');
    _this.cake16r.anchor.setTo(0.5);
    _this.cake16r.scale.setTo(1,1);
    _this.cake16r.name = "cake16r";
    _this.cake15r.addChild(_this.cake16r);
    _this.cake15r.visible=false;
     
    _this.cake17r = _this.add.sprite(830,400,'F2_5B5');
    _this.cake17r.anchor.setTo(0.5);
    _this.cake17r.scale.setTo(1,1);
    _this.cake17r.name = "cake17r";
     
    _this.cake18r = _this.add.sprite(-3,11,'F2_5B4');
    _this.cake18r.anchor.setTo(0.5);
    _this.cake18r.scale.setTo(1,1);
    _this.cake18r.name = "cake18r";
    _this.cake17r.addChild(_this.cake18r);
    _this.cake17r.visible=false;
     
    _this.number1 = _this.add.sprite(345,335,'F2_5numbers2');
    _this.number1.anchor.setTo(0.5);
    _this.number1.scale.setTo(1.5,1.5);
    _this.number1.frame=4;
    
     _this.number2 = _this.add.sprite(605,335,'F2_5numbers2');
    _this.number2.anchor.setTo(0.5);
    _this.number2.scale.setTo(1.5,1.5);
    _this.number2.frame=4;
    
    _this.txtbox1 = _this.add.sprite(350,250,'F2_5box1');
    _this.txtbox1.anchor.setTo(0.5);
    _this.txtbox1.scale.setTo(1.5,1.5);
    _this.txtbox1.frame=1;
    _this.txtbox1.name="numbox1";
    _this.txtbox1.inputEnabled = false;
    _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
    
    
    _this.txtbox2 = _this.add.sprite(350,335,'F2_5box1');
    _this.txtbox2.anchor.setTo(0.5);
    _this.txtbox2.scale.setTo(1.5,1.5);
    _this.txtbox2.frame=0;
    
    _this.txtbox3 = _this.add.sprite(610,250,'F2_5box1');
    _this.txtbox3.anchor.setTo(0.5);
    _this.txtbox3.scale.setTo(1.5,1.5);
    _this.txtbox3.frame=1;
    _this.txtbox3.name="numbox3";
    _this.txtbox3.inputEnabled = false;
    _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
  
    _this.txtbox4 = _this.add.sprite(610,335,'F2_5box1');
    _this.txtbox4.anchor.setTo(0.5);
    _this.txtbox4.scale.setTo(1.5,1.5);
    _this.txtbox4.frame=0;
   
     _this.numBoxNum1 = _this.add.sprite(345,250,'F2_5numbers1');
    _this.numBoxNum1.anchor.setTo(0.5);
    _this.numBoxNum1.scale.setTo(1.2,1.2);
    _this.numBox1Pressed = false;
    _this.numBoxNum1.visible = false;
    _this.numBoxNum1.frame=7;
     
    _this.numBoxNum3 = _this.add.sprite(605,250,'F2_5numbers1');
    _this.numBoxNum3.anchor.setTo(0.5);
    _this.numBoxNum3.scale.setTo(1.2,1.2);
    _this.numBox3Pressed = false;
    _this.numBoxNum3.visible = false;
    _this.numBoxNum3.frame=5;
       
      _this.rightAns="23";
      
     _this.addNumberPad();
     
      _this.group1.add(_this.whiteplate1);
     _this.group1.add(_this.whiteplate2);
     _this.group1.add(_this.orangeplate);
      _this.group1.add(_this.greenplate);
      _this.group1.add(_this.cloud1);
      _this.group1.add(_this.cloud2);
      _this.group2.add(_this.txtbox1);
      _this.group2.add(_this.txtbox2);
      _this.group2.add(_this.txtbox3);
      _this.group2.add(_this.txtbox4);
      _this.group2.add(_this.number1);
      _this.group2.add(_this.number2);
      _this.group1.add(_this.line1);
      _this.group1.add(_this.line2);
     _this.group2.add(_this.numBoxNum1);
     _this.group2.add(_this.numBoxNum3);
     
     _this.group2.add(_this.cake1);
   //  _this.wplate1cakegroup.add(_this.cake2);
     _this.group2.add(_this.cake3);
  //   _this.wplate1cakegroup.add(_this.cake4);
     _this.group2.add(_this.cake5);
  //   _this.wplate1cakegroup.add(_this.cake6);
     _this.group2.add(_this.cake7);
  //   _this.wplate1cakegroup.add(_this.cake8);
     
        _this.group2.add(_this.cake1l);
  //   _this.oplatecakegroup.add(_this.cake2l);
     _this.group2.add(_this.cake3l);
 //    _this.oplatecakegroup.add(_this.cake4l);
     _this.group2.add(_this.cake5l);
 //    _this.oplatecakegroup.add(_this.cake6l);
     _this.group2.add(_this.cake7l);
 //    _this.oplatecakegroup.add(_this.cake8l);
     
        _this.group2.add(_this.cake11);
//     _this.wplate2cakegroup.add(_this.cake12);
      _this.group2.add(_this.cake13);
//     _this.wplate2cakegroup.add(_this.cake14);
      _this.group2.add(_this.cake15);
//     _this.wplate2cakegroup.add(_this.cake16);
      _this.group2.add(_this.cake17);
//     _this.wplate2cakegroup.add(_this.cake18);
     
        _this.group2.add(_this.cake11r);
//     _this.gplatecakegroup.add(_this.cake12r);
     _this.group2.add(_this.cake13r);
//     _this.gplatecakegroup.add(_this.cake14r);
     _this.group2.add(_this.cake15r);
//     _this.gplatecakegroup.add(_this.cake16r);
     _this.group2.add(_this.cake17r);
//     _this.gplatecakegroup.add(_this.cake18r);
     
      _this.group2.add(_this.box);
     _this.group2.add(_this.lessthan);
     _this.group2.add(_this.greaterthan);
     _this.group2.add(_this.equal);
    
     
 },

 gotoNinthQuestion:function(){
     
       _this.Question = 9;
    if(_this.soundPlayed == false)
    {
     // _this.getVoice();
      _this.soundPlayed = true;     
    }
    _this.loadobject();
     
     _this.group1 = _this.add.group();
      _this.group2 = _this.add.group();
     _this.wplate1cakegroup = _this.add.group();
     _this.wplate2cakegroup = _this.add.group();
     _this.oplatecakegroup = _this.add.group();
     _this.gplatecakegroup = _this.add.group();
     _this.comparegroup = _this.add.group();
     
     if(_this.wrongAnswer == false)
        {
            _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group2.x=1000;
            _this.tween1=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate1cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate1cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate2cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate2cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.oplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.oplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.gplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.gplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.comparegroup.x=1000;
            _this.tween1=_this.add.tween(_this.comparegroup).to( { x: 0 }, 1500, 'Linear', true,0);
        
        }
    
    _this.cloud1 = _this.add.sprite(100,280,'F2_5cloud1');
    _this.cloud1.anchor.setTo(0.5);
    _this.cloud1.scale.setTo(0.8,0.8);
    _this.cloud1.frame=4;
    
    _this.cloud2 = _this.add.sprite(840,280,'F2_5cloud2');
    _this.cloud2.anchor.setTo(0.5);
    _this.cloud2.scale.setTo(0.8,0.8);
    _this.cloud2.frame=6;
     
     //left side white plate
    _this.cake1 = _this.add.sprite(195,120,'F2_5B8');
    _this.cake1.anchor.setTo(0.5);
    _this.cake1.scale.setTo(1,1);
    _this.cake1.name = "cake1";
    _this.cake1.inputEnabled = true;
    _this.cake1.events.onInputDown.add(_this.onCakeDragStart1,_this);
    
    _this.cake2 = _this.add.sprite(-4,15,'F2_5B9');
    _this.cake2.anchor.setTo(0.5);
    _this.cake2.scale.setTo(1,1);
    _this.cake2.name = "cake2";
    _this.cake1.addChild(_this.cake2);
     
    _this.cake3 = _this.add.sprite(238,110,'F2_5B7');
    _this.cake3.anchor.setTo(0.5);
    _this.cake3.scale.setTo(0.85,0.85);
    _this.cake3.name = "cake3";
    _this.cake3.inputEnabled = true;
    _this.cake3.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake4 = _this.add.sprite(20,3,'F2_5B6');
    _this.cake4.anchor.setTo(0.5);
    _this.cake4.scale.setTo(0.93,0.93);
    _this.cake4.name = "cake4";
    _this.cake3.addChild(_this.cake4);
     
    _this.cake5 = _this.add.sprite(200,160,'F2_5B10');
    _this.cake5.anchor.setTo(0.5);
    _this.cake5.scale.setTo(0.92,0.92);
    _this.cake5.name = "cake5";
    _this.cake5.inputEnabled = true;
    _this.cake5.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake6 = _this.add.sprite(19,3,'F2_5B3');
    _this.cake6.anchor.setTo(0.5);
    _this.cake6.scale.setTo(0.98,0.98);
    _this.cake6.name = "cake6";
    _this.cake5.addChild(_this.cake6);
     
    _this.cake7 = _this.add.sprite(262,150,'F2_5B5');
    _this.cake7.anchor.setTo(0.5);
    _this.cake7.scale.setTo(0.9,0.9);
    _this.cake7.name = "cake7";
    _this.cake7.inputEnabled = true;
    _this.cake7.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake8 = _this.add.sprite(-3,11,'F2_5B4');
    _this.cake8.anchor.setTo(0.5);
    _this.cake8.scale.setTo(1,1);
    _this.cake8.name = "cake8";
    _this.cake7.addChild(_this.cake8);
     
 //left side orange plate
    _this.cake1l = _this.add.sprite(130,380,'F2_5B8');
    _this.cake1l.anchor.setTo(0.5);
    _this.cake1l.scale.setTo(1,1);
    _this.cake1l.name = "cake1l";
    
    _this.cake2l = _this.add.sprite(-4,15,'F2_5B9');
    _this.cake2l.anchor.setTo(0.5);
    _this.cake2l.scale.setTo(1,1);
    _this.cake2l.name = "cake2l";
    _this.cake1l.addChild(_this.cake2l);
    _this.cake1l.visible=false;
     
    _this.cake3l = _this.add.sprite(170,370,'F2_5B7');
    _this.cake3l.anchor.setTo(0.5);
    _this.cake3l.scale.setTo(0.85,0.85);
    _this.cake3l.name = "cake3l";
     
    _this.cake4l = _this.add.sprite(20,3,'F2_5B6');
    _this.cake4l.anchor.setTo(0.5);
    _this.cake4l.scale.setTo(0.93,0.93);
    _this.cake4l.name = "cake4l";
    _this.cake3l.addChild(_this.cake4l);
    _this.cake3l.visible=false;
     
    _this.cake5l = _this.add.sprite(140,418,'F2_5B10');
    _this.cake5l.anchor.setTo(0.5);
    _this.cake5l.scale.setTo(0.92,0.92);
    _this.cake5l.name = "cake5l";
     
    _this.cake6l = _this.add.sprite(19,3,'F2_5B3');
    _this.cake6l.anchor.setTo(0.5);
    _this.cake6l.scale.setTo(0.98,0.98);
    _this.cake6l.name = "cake6l";
    _this.cake5l.addChild(_this.cake6l);
    _this.cake5l.visible=false;
     
    _this.cake7l = _this.add.sprite(200,400,'F2_5B5');
    _this.cake7l.anchor.setTo(0.5);
    _this.cake7l.scale.setTo(0.9,0.9);
    _this.cake7l.name = "cake7l";
     
    _this.cake8l = _this.add.sprite(-3,11,'F2_5B4');
    _this.cake8l.anchor.setTo(0.5);
    _this.cake8l.scale.setTo(1,1);
    _this.cake8l.name = "cake8l";
    _this.cake7l.addChild(_this.cake8l);
    _this.cake7l.visible=false;
     
     //right side plate 2
      _this.cake11 = _this.add.sprite(730,110,'F2_5B7');
    _this.cake11.anchor.setTo(0.5);
    _this.cake11.scale.setTo(1,1);
    _this.cake11.name = "cake11";
    _this.cake11.inputEnabled = true;
    _this.cake11.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake12 = _this.add.sprite(685,110,'F2_5B8');
    _this.cake12.anchor.setTo(0.5);
    _this.cake12.scale.setTo(1,1);
    _this.cake12.name = "cake12";
    _this.cake12.inputEnabled = true;
    _this.cake12.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake13 = _this.add.sprite(675,148,'F2_5B10');
    _this.cake13.anchor.setTo(0.5);
    _this.cake13.scale.setTo(1,1);
    _this.cake13.name = "cake13";
    _this.cake13.inputEnabled = true;
    _this.cake13.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake14 = _this.add.sprite(712,155,'F2_5B3');
    _this.cake14.anchor.setTo(0.5);
    _this.cake14.scale.setTo(1,1);
    _this.cake14.name = "cake14";
    _this.cake14.inputEnabled = true;
    _this.cake14.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake15 = _this.add.sprite(770,120,'F2_5B6');
    _this.cake15.anchor.setTo(0.5);
    _this.cake15.scale.setTo(1,1);
    _this.cake15.name = "cake15";
    _this.cake15.inputEnabled = true;
    _this.cake15.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake16 = _this.add.sprite(760,150,'F2_5B4');
    _this.cake16.anchor.setTo(0.5);
    _this.cake16.scale.setTo(1,1);
    _this.cake16.name = "cake16";
    _this.cake16.inputEnabled = true;
    _this.cake16.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
//right side green plate
     _this.cake11r = _this.add.sprite(800,370,'F2_5B7');
    _this.cake11r.anchor.setTo(0.5);
    _this.cake11r.scale.setTo(1,1);
    _this.cake11r.name = "cake11r";
    _this.cake11r.visible=false;
     
    _this.cake12r = _this.add.sprite(752,370,'F2_5B8');
    _this.cake12r.anchor.setTo(0.5);
    _this.cake12r.scale.setTo(1,1);
    _this.cake12r.name = "cake12r";
    _this.cake12r.visible=false;
     
    _this.cake13r = _this.add.sprite(745,408,'F2_5B10');
    _this.cake13r.anchor.setTo(0.5);
    _this.cake13r.scale.setTo(1,1);
    _this.cake13r.name = "cake13r";
    _this.cake13r.visible=false;
     
    _this.cake14r = _this.add.sprite(782,415,'F2_5B3');
    _this.cake14r.anchor.setTo(0.5);
    _this.cake14r.scale.setTo(1,1);
    _this.cake14r.name = "cake14r";
    _this.cake14r.visible=false;
     
    _this.cake15r = _this.add.sprite(840,380,'F2_5B6');
    _this.cake15r.anchor.setTo(0.5);
    _this.cake15r.scale.setTo(1,1);
    _this.cake15r.name = "cake15r";
    _this.cake15r.visible=false;
     
    _this.cake16r = _this.add.sprite(830,410,'F2_5B4');
    _this.cake16r.anchor.setTo(0.5);
    _this.cake16r.scale.setTo(1,1);
    _this.cake16r.name = "cake16r";
    _this.cake16r.visible=false;  
     
       _this.txtbox1 = _this.add.sprite(350,250,'F2_5box1');
    _this.txtbox1.anchor.setTo(0.5);
    _this.txtbox1.scale.setTo(1.5,1.5);
    _this.txtbox1.frame=1;
    _this.txtbox1.name="numbox1";
    _this.txtbox1.inputEnabled = false;
    _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
    
    
    _this.txtbox2 = _this.add.sprite(350,335,'F2_5box1');
    _this.txtbox2.anchor.setTo(0.5);
    _this.txtbox2.scale.setTo(1.5,1.5);
    _this.txtbox2.frame=1;
    _this.txtbox2.name="numbox2";
    _this.txtbox2.inputEnabled = false;
    _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
    
    _this.txtbox3 = _this.add.sprite(610,250,'F2_5box1');
    _this.txtbox3.anchor.setTo(0.5);
    _this.txtbox3.scale.setTo(1.5,1.5);
    _this.txtbox3.frame=1;
    _this.txtbox3.name="numbox3";
    _this.txtbox3.inputEnabled = false;
    _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
  
    _this.txtbox4 = _this.add.sprite(610,335,'F2_5box1');
    _this.txtbox4.anchor.setTo(0.5);
    _this.txtbox4.scale.setTo(1.5,1.5);
    _this.txtbox4.frame=1;
    _this.txtbox4.name="numbox4";
    _this.txtbox4.inputEnabled = false;
    _this.txtbox4.events.onInputDown.add(_this.numberBoxClicked,_this);
   
    _this.numBoxNum1 = _this.add.sprite(345,250,'F2_5numbers1');
    _this.numBoxNum1.anchor.setTo(0.5);
    _this.numBoxNum1.scale.setTo(1.2,1.2);
    _this.numBox1Pressed = false;
    _this.numBoxNum1.visible = false;
    _this.numBoxNum1.frame=2;
    
     _this.numBoxNum2 = _this.add.sprite(345,335,'F2_5numbers1');
    _this.numBoxNum2.anchor.setTo(0.5);
    _this.numBoxNum2.scale.setTo(1.2,1.2);
    _this.numBox2Pressed = false;
    _this.numBoxNum2.visible = false;
    _this.numBoxNum2.frame=8;
     
     
    _this.numBoxNum3 = _this.add.sprite(605,250,'F2_5numbers1');
    _this.numBoxNum3.anchor.setTo(0.5);
    _this.numBoxNum3.scale.setTo(1.2,1.2);
    _this.numBox3Pressed = false;
    _this.numBoxNum3.visible = false;
    _this.numBoxNum3.frame=1;
    
   
    _this.numBoxNum4 = _this.add.sprite(605,335,'F2_5numbers1');
    _this.numBoxNum4.anchor.setTo(0.5);
    _this.numBoxNum4.scale.setTo(1.2,1.2);
    _this.numBox4Pressed = false;
    _this.numBoxNum4.visible = false;
    _this.numBoxNum4.frame=4;
       
      _this.rightAns="3456";
      
     _this.addNumberPad();
     
       _this.group1.add(_this.whiteplate1);
     _this.group1.add(_this.whiteplate2);
     _this.group1.add(_this.orangeplate);
      _this.group1.add(_this.greenplate);
      _this.group1.add(_this.cloud1);
      _this.group1.add(_this.cloud2);
      _this.group2.add(_this.txtbox1);
      _this.group2.add(_this.txtbox2);
      _this.group2.add(_this.txtbox3);
      _this.group2.add(_this.txtbox4);
      _this.group1.add(_this.line1);
      _this.group1.add(_this.line2);
     _this.group2.add(_this.numBoxNum1);
     _this.group2.add(_this.numBoxNum2);
      _this.group2.add(_this.numBoxNum3);
     _this.group2.add(_this.numBoxNum4);
     
     _this.group2.add(_this.cake1);
   //  _this.wplate1cakegroup.add(_this.cake2);
     _this.group2.add(_this.cake3);
  //   _this.wplate1cakegroup.add(_this.cake4);
     _this.group2.add(_this.cake5);
  //   _this.wplate1cakegroup.add(_this.cake6);
     _this.group2.add(_this.cake7);
  //   _this.wplate1cakegroup.add(_this.cake8);
     
        _this.group2.add(_this.cake1l);
  //   _this.oplatecakegroup.add(_this.cake2l);
     _this.group2.add(_this.cake3l);
 //    _this.oplatecakegroup.add(_this.cake4l);
     _this.group2.add(_this.cake5l);
 //    _this.oplatecakegroup.add(_this.cake6l);
     _this.group2.add(_this.cake7l);
 //    _this.oplatecakegroup.add(_this.cake8l);
     
     _this.group2.add(_this.cake11);
     _this.group2.add(_this.cake12);
     _this.group2.add(_this.cake13);
     _this.group2.add(_this.cake14);
     _this.group2.add(_this.cake15);
     _this.group2.add(_this.cake16);
    
     _this.group2.add(_this.cake11r);
     _this.group2.add(_this.cake12r);
     _this.group2.add(_this.cake13r);
     _this.group2.add(_this.cake14r);
     _this.group2.add(_this.cake15r);
     _this.group2.add(_this.cake16r);
    
    
     _this.group2.add(_this.box);
     _this.group2.add(_this.lessthan);
     _this.group2.add(_this.greaterthan);
     _this.group2.add(_this.equal);
     
 },
    
 gotoTenthQuestion:function(){
     
      _this.Question = 10;
       if(_this.soundPlayed == false)
    {
      //_this.getVoice();
      _this.soundPlayed = true;     
    }
       _this.loadobject(); 
        
      _this.group1 = _this.add.group();
      _this.group2 = _this.add.group();
     _this.wplate1cakegroup = _this.add.group();
     _this.wplate2cakegroup = _this.add.group();
     _this.oplatecakegroup = _this.add.group();
     _this.gplatecakegroup = _this.add.group();
     _this.comparegroup = _this.add.group();
     
     if(_this.wrongAnswer == false)
        {
            _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group2.x=1000;
            _this.tween1=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate1cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate1cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.wplate2cakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.wplate2cakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.oplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.oplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.gplatecakegroup.x=1000;
            _this.tween1=_this.add.tween(_this.gplatecakegroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.comparegroup.x=1000;
            _this.tween1=_this.add.tween(_this.comparegroup).to( { x: 0 }, 1500, 'Linear', true,0);
        
        }
    
    _this.cloud1 = _this.add.sprite(100,280,'F2_5cloud1');
    _this.cloud1.anchor.setTo(0.5);
    _this.cloud1.scale.setTo(0.8,0.8);
    _this.cloud1.frame=4;
    
    _this.cloud2 = _this.add.sprite(840,280,'F2_5cloud2');
    _this.cloud2.anchor.setTo(0.5);
    _this.cloud2.scale.setTo(0.8,0.8);
    _this.cloud2.frame=3;
    
    //left side white plate1
    _this.cake1 = _this.add.sprite(205,110,'F2_5B8');
    _this.cake1.anchor.setTo(0.5);
    _this.cake1.scale.setTo(1,1);
    _this.cake1.name = "cake1";
    _this.cake1.inputEnabled = true;
    _this.cake1.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake2 = _this.add.sprite(175,135,'F2_5B9');
    _this.cake2.anchor.setTo(0.5);
    _this.cake2.scale.setTo(1,1);
    _this.cake2.name = "cake2";
    _this.cake2.inputEnabled = true;
    _this.cake2.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake3 = _this.add.sprite(245,110,'F2_5B7');
    _this.cake3.anchor.setTo(0.5);
    _this.cake3.scale.setTo(0.85,0.85);
    _this.cake3.name = "cake3";
    _this.cake3.inputEnabled = true;
    _this.cake3.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake4 = _this.add.sprite(275,115,'F2_5B6');
    _this.cake4.anchor.setTo(0.5);
    _this.cake4.scale.setTo(0.85,0.85);
    _this.cake4.name = "cake4";
    _this.cake4.inputEnabled = true;
    _this.cake4.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake5 = _this.add.sprite(285,140,'F2_5B5');
    _this.cake5.anchor.setTo(0.5);
    _this.cake5.scale.setTo(0.9,0.9);
    _this.cake5.name = "cake5";
    _this.cake5.inputEnabled = true;
    _this.cake5.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake6 = _this.add.sprite(265,160,'F2_5B4');
    _this.cake6.anchor.setTo(0.5);
    _this.cake6.scale.setTo(0.9,0.9);
    _this.cake6.name = "cake6";
    _this.cake6.inputEnabled = true;
    _this.cake6.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake7 = _this.add.sprite(225,160,'F2_5B3');
    _this.cake7.anchor.setTo(0.5);
    _this.cake7.scale.setTo(0.9,0.9);
    _this.cake7.name = "cake7";
    _this.cake7.inputEnabled = true;
    _this.cake7.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
    _this.cake8 = _this.add.sprite(185,160,'F2_5B10');
    _this.cake8.anchor.setTo(0.5);
    _this.cake8.scale.setTo(0.9,0.9);
    _this.cake8.name = "cake8";
    _this.cake8.inputEnabled = true;
    _this.cake8.events.onInputDown.add(_this.onCakeDragStart1,_this);
     
        //left side orange plate
    _this.cake1l = _this.add.sprite(135,370,'F2_5B8');
    _this.cake1l.anchor.setTo(0.5);
    _this.cake1l.scale.setTo(1,1);
    _this.cake1l.name = "cake1l";
    _this.cake1l.visible=false;
     
    _this.cake2l = _this.add.sprite(105,390,'F2_5B9');
    _this.cake2l.anchor.setTo(0.5);
    _this.cake2l.scale.setTo(1,1);
    _this.cake2l.name = "cake2l";
    _this.cake2l.visible=false;
     
    _this.cake3l = _this.add.sprite(175,370,'F2_5B7');
    _this.cake3l.anchor.setTo(0.5);
    _this.cake3l.scale.setTo(0.85,0.85);
    _this.cake3l.name = "cake3l";
    _this.cake3l.visible=false;
     
    _this.cake4l = _this.add.sprite(205,370,'F2_5B6');
    _this.cake4l.anchor.setTo(0.5);
    _this.cake4l.scale.setTo(0.85,0.85);
    _this.cake4l.name = "cake4l";
    _this.cake4l.visible=false;
     
    _this.cake5l = _this.add.sprite(215,400,'F2_5B5');
    _this.cake5l.anchor.setTo(0.5);
    _this.cake5l.scale.setTo(0.9,0.9);
    _this.cake5l.name = "cake5l";
    _this.cake5l.visible=false;
     
    _this.cake6l = _this.add.sprite(195,410,'F2_5B4');
    _this.cake6l.anchor.setTo(0.5);
    _this.cake6l.scale.setTo(0.9,0.9);
    _this.cake6l.name = "cake6l";
    _this.cake6l.visible=false;
     
    _this.cake7l = _this.add.sprite(155,410,'F2_5B3');
    _this.cake7l.anchor.setTo(0.5);
    _this.cake7l.scale.setTo(0.9,0.9);
    _this.cake7l.name = "cake7l";
    _this.cake7l.visible=false;
     
    _this.cake8l = _this.add.sprite(115,410,'F2_5B10');
    _this.cake8l.anchor.setTo(0.5);
    _this.cake8l.scale.setTo(0.9,0.9);
    _this.cake8l.name = "cake8l";
    _this.cake8l.visible=false;
     
      //right side plate 2
      _this.cake11 = _this.add.sprite(730,110,'F2_5B7');
    _this.cake11.anchor.setTo(0.5);
    _this.cake11.scale.setTo(1,1);
    _this.cake11.name = "cake11";
    _this.cake11.inputEnabled = true;
    _this.cake11.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake12 = _this.add.sprite(685,110,'F2_5B8');
    _this.cake12.anchor.setTo(0.5);
    _this.cake12.scale.setTo(1,1);
    _this.cake12.name = "cake12";
    _this.cake12.inputEnabled = true;
    _this.cake12.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake13 = _this.add.sprite(675,148,'F2_5B10');
    _this.cake13.anchor.setTo(0.5);
    _this.cake13.scale.setTo(1,1);
    _this.cake13.name = "cake13";
    _this.cake13.inputEnabled = true;
    _this.cake13.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake14 = _this.add.sprite(712,155,'F2_5B3');
    _this.cake14.anchor.setTo(0.5);
    _this.cake14.scale.setTo(1,1);
    _this.cake14.name = "cake14";
    _this.cake14.inputEnabled = true;
    _this.cake14.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake15 = _this.add.sprite(770,120,'F2_5B6');
    _this.cake15.anchor.setTo(0.5);
    _this.cake15.scale.setTo(1,1);
    _this.cake15.name = "cake15";
    _this.cake15.inputEnabled = true;
    _this.cake15.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
    _this.cake16 = _this.add.sprite(760,150,'F2_5B4');
    _this.cake16.anchor.setTo(0.5);
    _this.cake16.scale.setTo(1,1);
    _this.cake16.name = "cake16";
    _this.cake16.inputEnabled = true;
    _this.cake16.events.onInputDown.add(_this.onCakeDragStart3,_this);
     
//right side green plate
     _this.cake11r = _this.add.sprite(800,370,'F2_5B7');
    _this.cake11r.anchor.setTo(0.5);
    _this.cake11r.scale.setTo(1,1);
    _this.cake11r.name = "cake11r";
    _this.cake11r.visible=false;
     
    _this.cake12r = _this.add.sprite(752,370,'F2_5B8');
    _this.cake12r.anchor.setTo(0.5);
    _this.cake12r.scale.setTo(1,1);
    _this.cake12r.name = "cake12r";
    _this.cake12r.visible=false;
     
    _this.cake13r = _this.add.sprite(745,408,'F2_5B10');
    _this.cake13r.anchor.setTo(0.5);
    _this.cake13r.scale.setTo(1,1);
    _this.cake13r.name = "cake13r";
    _this.cake13r.visible=false;
     
    _this.cake14r = _this.add.sprite(782,415,'F2_5B3');
    _this.cake14r.anchor.setTo(0.5);
    _this.cake14r.scale.setTo(1,1);
    _this.cake14r.name = "cake14r";
    _this.cake14r.visible=false;
     
    _this.cake15r = _this.add.sprite(840,380,'F2_5B6');
    _this.cake15r.anchor.setTo(0.5);
    _this.cake15r.scale.setTo(1,1);
    _this.cake15r.name = "cake15r";
    _this.cake15r.visible=false;
     
    _this.cake16r = _this.add.sprite(830,410,'F2_5B4');
    _this.cake16r.anchor.setTo(0.5);
    _this.cake16r.scale.setTo(1,1);
    _this.cake16r.name = "cake16r";
    _this.cake16r.visible=false;  
     
    _this.txtbox1 = _this.add.sprite(350,250,'F2_5box1');
    _this.txtbox1.anchor.setTo(0.5);
    _this.txtbox1.scale.setTo(1.5,1.5);
    _this.txtbox1.frame=1;
    _this.txtbox1.name="numbox1";
    _this.txtbox1.inputEnabled = false;
    _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
    
    
    _this.txtbox2 = _this.add.sprite(350,335,'F2_5box1');
    _this.txtbox2.anchor.setTo(0.5);
    _this.txtbox2.scale.setTo(1.5,1.5);
    _this.txtbox2.frame=1;
    _this.txtbox2.name="numbox2";
    _this.txtbox2.inputEnabled = false;
    _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
    
    _this.txtbox3 = _this.add.sprite(610,250,'F2_5box1');
    _this.txtbox3.anchor.setTo(0.5);
    _this.txtbox3.scale.setTo(1.5,1.5);
    _this.txtbox3.frame=1;
    _this.txtbox3.name="numbox3";
    _this.txtbox3.inputEnabled = false;
    _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
  
    _this.txtbox4 = _this.add.sprite(610,335,'F2_5box1');
    _this.txtbox4.anchor.setTo(0.5);
    _this.txtbox4.scale.setTo(1.5,1.5);
    _this.txtbox4.frame=1;
    _this.txtbox4.name="numbox4";
    _this.txtbox4.inputEnabled = false;
    _this.txtbox4.events.onInputDown.add(_this.numberBoxClicked,_this);
   
    _this.numBoxNum1 = _this.add.sprite(345,250,'F2_5numbers1');
    _this.numBoxNum1.anchor.setTo(0.5);
    _this.numBoxNum1.scale.setTo(1.2,1.2);
    _this.numBox1Pressed = false;
    _this.numBoxNum1.visible = false;
    _this.numBoxNum1.frame=2;
    
     _this.numBoxNum2 = _this.add.sprite(345,335,'F2_5numbers1');
    _this.numBoxNum2.anchor.setTo(0.5);
    _this.numBoxNum2.scale.setTo(1.2,1.2);
    _this.numBox2Pressed = false;
    _this.numBoxNum2.visible = false;
    _this.numBoxNum2.frame=8;
     
     
    _this.numBoxNum3 = _this.add.sprite(605,250,'F2_5numbers1');
    _this.numBoxNum3.anchor.setTo(0.5);
    _this.numBoxNum3.scale.setTo(1.2,1.2);
    _this.numBox3Pressed = false;
    _this.numBoxNum3.visible = false;
    _this.numBoxNum3.frame=1;
    
   
    _this.numBoxNum4 = _this.add.sprite(605,335,'F2_5numbers1');
    _this.numBoxNum4.anchor.setTo(0.5);
    _this.numBoxNum4.scale.setTo(1.2,1.2);
    _this.numBox4Pressed = false;
    _this.numBoxNum4.visible = false;
    _this.numBoxNum4.frame=4;
       
      _this.rightAns="3826";
      
     _this.addNumberPad();
     
       _this.group1.add(_this.whiteplate1);
     _this.group1.add(_this.whiteplate2);
     _this.group1.add(_this.orangeplate);
      _this.group1.add(_this.greenplate);
      _this.group1.add(_this.cloud1);
      _this.group1.add(_this.cloud2);
      _this.group2.add(_this.txtbox1);
      _this.group2.add(_this.txtbox2);
      _this.group2.add(_this.txtbox3);
      _this.group2.add(_this.txtbox4);
      _this.group1.add(_this.line1);
      _this.group1.add(_this.line2);
     _this.group2.add(_this.numBoxNum1);
     _this.group2.add(_this.numBoxNum2);
      _this.group2.add(_this.numBoxNum3);
     _this.group2.add(_this.numBoxNum4);
     
    _this.group2.add(_this.cake1);
     _this.group2.add(_this.cake2);
     _this.group2.add(_this.cake3);
     _this.group2.add(_this.cake4);
     _this.group2.add(_this.cake5);
     _this.group2.add(_this.cake6);
      _this.group2.add(_this.cake7);
      _this.group2.add(_this.cake8);
    
     _this.group2.add(_this.cake1l);
     _this.group2.add(_this.cake2l);
     _this.group2.add(_this.cake3l);
     _this.group2.add(_this.cake4l);
     _this.group2.add(_this.cake5l);
     _this.group2.add(_this.cake6l);
     _this.group2.add(_this.cake7l);
     _this.group2.add(_this.cake8l);
     
      _this.group2.add(_this.cake11);
     _this.group2.add(_this.cake12);
     _this.group2.add(_this.cake13);
     _this.group2.add(_this.cake14);
     _this.group2.add(_this.cake15);
     _this.group2.add(_this.cake16);
    
     _this.group2.add(_this.cake11r);
     _this.group2.add(_this.cake12r);
     _this.group2.add(_this.cake13r);
     _this.group2.add(_this.cake14r);
     _this.group2.add(_this.cake15r);
     _this.group2.add(_this.cake16r);
    
    
     _this.group2.add(_this.box);
     _this.group2.add(_this.lessthan);
     _this.group2.add(_this.greaterthan);
     _this.group2.add(_this.equal);
     
     
     
 },
    
onCakeDragStart1:function(target){
         
         //_this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level2.5_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         
        _this.vx = target.x;   
        _this.vy = target.y; 
       console.log("vx="+_this.vx);
       
    
        target.input.enableDrag();
        _this.snapsound.play();
    //Enabling answer boxes after dragging;
    if(_this.txtbox1.frame == 1){
     _this.txtbox1.inputEnabled = true;
    }
    if(_this.txtbox3.frame == 1){
     _this.txtbox3.inputEnabled = true;
    }
    if(_this.txtbox2.frame == 1){
          _this.txtbox2.inputEnabled = true;
        }
    if(_this.txtbox4.frame == 1){
          _this.txtbox4.inputEnabled = true;
        }
    
    target.events.onDragStop.add(function(target)
    {
         _this.snapsound.play();
        if(_this.Question==1 || _this.Question==8 || _this.Question==9)
        {
         if((_this.checkOverlap(target,_this.orangeplate)) && (_this.orangeplate.name == "orangeplate" ))
            {
                console.log("target " +target.name);
                _this.orangeplatecount++;
                console.log("oplatecount"+ _this.orangeplatecount);
                if(_this.cake1l.visible==false)
                    {
                        _this.cake1l.visible=true;
                        target.visible=false;
                        _this.cake1l.inputEnabled=true;
                        _this.cake1l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                
                else if(_this.cake3l.visible==false)
                    {
                        _this.cake3l.visible=true;
                        target.visible=false;
                        _this.cake3l.inputEnabled=true;
                        _this.cake3l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                else if(_this.cake5l.visible==false)
                    {
                        _this.cake5l.visible=true;
                        target.visible=false;
                        _this.cake5l.inputEnabled=true;
                        _this.cake5l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                else if(_this.cake7l.visible==false)
                    {
                        _this.cake7l.visible=true;
                        target.visible=false;
                        _this.cake7l.inputEnabled=true;
                        _this.cake7l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                
                            
            }
        }
        
        if(_this.Question == 2 || _this.Question == 4 || _this.Question == 5 || _this.Question == 7)
            {
             if((_this.checkOverlap(target,_this.orangeplate)) && (_this.orangeplate.name == "orangeplate" ))
              {
                console.log("target " +target.name);
                _this.orangeplatecount++;
                console.log("oplatecount"+ _this.orangeplatecount);
                if(_this.cake1l.visible==false)
                    {
                        _this.cake1l.visible=true;
                        target.visible=false;
                        _this.cake1l.inputEnabled=true;
                        _this.cake1l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                    
               else if(_this.cake2l.visible==false)
                    {
                        _this.cake2l.visible=true;
                        target.visible=false;
                        _this.cake2l.inputEnabled=true;
                        _this.cake2l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                
                else if(_this.cake3l.visible==false)
                    {
                        _this.cake3l.visible=true;
                        target.visible=false;
                        _this.cake3l.inputEnabled=true;
                        _this.cake3l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                 else if(_this.cake4l.visible==false)
                    {
                        _this.cake4l.visible=true;
                        target.visible=false;
                        _this.cake4l.inputEnabled=true;
                        _this.cake4l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }  
                else if(_this.cake5l.visible==false)
                    {
                        _this.cake5l.visible=true;
                        target.visible=false;
                        _this.cake5l.inputEnabled=true;
                        _this.cake5l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                else if(_this.cake6l.visible==false)
                    {
                        _this.cake6l.visible=true;
                        target.visible=false;
                        _this.cake6l.inputEnabled=true;
                        _this.cake6l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                
                            
            }
                
            }
       
         if(_this.Question==3 || _this.Question==6 || _this.Question==10)
          {
             if((_this.checkOverlap(target,_this.orangeplate)) && (_this.orangeplate.name == "orangeplate" ))
                {
                    console.log("target " +target.name);
                    _this.orangeplatecount++;
                    console.log("oplatecount"+ _this.orangeplatecount);
                    if(_this.cake1l.visible==false)
                    {
                        _this.cake1l.visible=true;
                         target.visible=false;
                        _this.cake1l.inputEnabled=true;
                        _this.cake1l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                
                   else if(_this.cake2l.visible==false)
                    {
                        _this.cake2l.visible=true;
                        target.visible=false;
                        _this.cake2l.inputEnabled=true;
                        _this.cake2l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                   else if(_this.cake3l.visible==false)
                    {
                        _this.cake3l.visible=true;
                        target.visible=false;
                        _this.cake3l.inputEnabled=true;
                        _this.cake3l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                   else if(_this.cake4l.visible==false)
                    {
                        _this.cake4l.visible=true;
                        target.visible=false;
                        _this.cake4l.inputEnabled=true;
                        _this.cake4l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                   else if(_this.cake5l.visible==false)
                    {
                        _this.cake5l.visible=true;
                        target.visible=false;
                        _this.cake5l.inputEnabled=true;
                        _this.cake5l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                   else if(_this.cake6l.visible==false)
                    {
                        _this.cake6l.visible=true;
                        target.visible=false;
                        _this.cake6l.inputEnabled=true;
                        _this.cake6l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                   else if(_this.cake7l.visible==false)
                    {
                        _this.cake7l.visible=true;
                        target.visible=false;
                        _this.cake7l.inputEnabled=true;
                        _this.cake7l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                   else if(_this.cake8l.visible==false)
                    {
                        _this.cake8l.visible=true;
                        target.visible=false;
                        _this.cake8l.inputEnabled=true;
                        _this.cake8l.events.onInputDown.add(_this.onCakeDragStart2,_this);
                    }
                    

                }
          }
        
        target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy; 
        console.log("target="+target.x);
    },_this);
},
   
onCakeDragStart2:function(target){
         
         //_this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level2.5_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         
        _this.vx = target.x;   
        _this.vy = target.y; 
    
        target.input.enableDrag();
        _this.snapsound.play();
    
    
    target.events.onDragStop.add(function(target)
    {
          _this.snapsound.play();
        if(_this.Question==1 || _this.Question==8 || _this.Question==9)
        {
         if((_this.checkOverlap(target,_this.whiteplate1)) && (_this.whiteplate1.name == "plate1" )) 
            {
                console.log("ocount" +target.name);
                 _this.orangeplatecount--;
                if(_this.cake1.visible==false)
                    {
                        _this.cake1.visible=true;
                        target.visible=false;
                    }
                
                else if(_this.cake3.visible==false)
                    {
                        _this.cake3.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake5.visible==false)
                    {
                        _this.cake5.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake7.visible==false)
                    {
                        _this.cake7.visible=true;
                        target.visible=false;
                    }
                
                            
            }
        }
        if(_this.Question == 2 || _this.Question == 4 || _this.Question == 5 || _this.Question == 7)
            {
                 if((_this.checkOverlap(target,_this.whiteplate1)) && (_this.whiteplate1.name == "plate1" )) 
            {
                console.log("ocount" +target.name);
                 _this.orangeplatecount--;
                if(_this.cake1.visible==false)
                    {
                        _this.cake1.visible=true;
                        target.visible=false;
                    }
                 else if(_this.cake2.visible==false)
                    {
                        _this.cake2.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake3.visible==false)
                    {
                        _this.cake3.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake4.visible==false)
                    {
                        _this.cake4.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake5.visible==false)
                    {
                        _this.cake5.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake6.visible==false)
                    {
                        _this.cake6.visible=true;
                        target.visible=false;
                    }
                               
            }
            }
         if(_this.Question == 3 || _this.Question == 6 || _this.Question==10)
            {
                 if((_this.checkOverlap(target,_this.whiteplate1)) && (_this.whiteplate1.name == "plate1" )) 
               {
                console.log("ocount" +target.name);
                 _this.orangeplatecount--;
                if(_this.cake1.visible==false)
                    {
                        _this.cake1.visible=true;
                        target.visible=false;
                    }
                 else if(_this.cake2.visible==false)
                    {
                        _this.cake2.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake3.visible==false)
                    {
                        _this.cake3.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake4.visible==false)
                    {
                        _this.cake4.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake5.visible==false)
                    {
                        _this.cake5.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake6.visible==false)
                    {
                        _this.cake6.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake7.visible==false)
                    {
                        _this.cake7.visible=true;
                        target.visible=false;
                    }
                 else
                    {
                        _this.cake8.visible=true;
                        target.visible=false;
                    }
                               
            }
            }
         target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy; 
     
    },_this);
},
   
onCakeDragStart3:function(target){
         
        // _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level2.5_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         
        _this.vx = target.x;   
        _this.vy = target.y; 
    
        target.input.enableDrag();
       _this.snapsound.play();
    
            if(_this.txtbox1.frame == 1){
             _this.txtbox1.inputEnabled = true;
            }
            if(_this.txtbox3.frame == 1){
             _this.txtbox3.inputEnabled = true;
            }
            if(_this.txtbox2.frame == 1){
                  _this.txtbox2.inputEnabled = true;
                }
            if(_this.txtbox4.frame == 1){
                  _this.txtbox4.inputEnabled = true;
                }
    
    target.events.onDragStop.add(function(target)
    {
          _this.snapsound.play();
        if(_this.Question==1 || _this.Question==3 || _this.Question==5 || _this.Question == 7)
      {
        if((_this.checkOverlap(target,_this.greenplate)) && (_this.greenplate.name == "greenplate" ))
            {
                _this.greenplatecount++;
                 console.log("gplatecount"+ _this.greenplatecount);
                if(_this.cake11r.visible==false)
                    {
                        _this.cake11r.visible=true;
                         target.visible=false;
                        _this.cake11r.inputEnabled=true;
                        _this.cake11r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                
                else if(_this.cake12r.visible==false)
                    {
                        _this.cake12r.visible=true;
                        target.visible=false;
                        _this.cake12r.inputEnabled=true;
                        _this.cake12r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                else if(_this.cake13r.visible==false)
                    {
                        _this.cake13r.visible=true;
                        target.visible=false;
                        _this.cake13r.inputEnabled=true;
                        _this.cake13r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                else if(_this.cake14r.visible==false)
                    {
                        _this.cake14r.visible=true;
                        target.visible=false;
                        _this.cake14r.inputEnabled=true;
                        _this.cake14r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                else if(_this.cake15r.visible==false)
                    {
                        _this.cake15r.visible=true;
                        target.visible=false;
                        _this.cake15r.inputEnabled=true;
                        _this.cake15r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                else if(_this.cake16r.visible==false)
                    {
                        _this.cake16r.visible=true;
                        target.visible=false;
                        _this.cake16r.inputEnabled=true;
                        _this.cake16r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                else if(_this.cake17r.visible==false)
                    {
                        _this.cake17r.visible=true;
                        target.visible=false;
                        _this.cake17r.inputEnabled=true;
                        _this.cake17r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                else if(_this.cake18r.visible==false)
                    {
                        _this.cake18r.visible=true;
                        target.visible=false;
                        _this.cake18r.inputEnabled=true;
                        _this.cake18r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                
                            
            }
      }
        
        if(_this.Question == 2 || _this.Question == 6 || _this.Question==8)
         {
             if((_this.checkOverlap(target,_this.greenplate)) && (_this.greenplate.name == "greenplate" ))
            {
                _this.greenplatecount++;
                 console.log("gplatecount"+ _this.greenplatecount);
                  if(_this.cake11r.visible==false)
                    {
                        _this.cake11r.visible=true;
                        target.visible=false;
                        _this.cake11r.inputEnabled=true;
                        _this.cake11r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                
                else if(_this.cake13r.visible==false)
                    {
                        _this.cake13r.visible=true;
                        target.visible=false;
                        _this.cake13r.inputEnabled=true;
                        _this.cake13r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                else if(_this.cake15r.visible==false)
                    {
                        _this.cake15r.visible=true;
                        target.visible=false;
                        _this.cake15r.inputEnabled=true;
                        _this.cake15r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                else if(_this.cake17r.visible==false)
                    {
                        _this.cake17r.visible=true;
                        target.visible=false;
                        _this.cake17r.inputEnabled=true;
                        _this.cake17r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                
            }
        }
        
        if(_this.Question == 4 || _this.Question==9 || _this.Question==10){
            if((_this.checkOverlap(target,_this.greenplate)) && (_this.greenplate.name == "greenplate" ))
            {
                _this.greenplatecount++;
                 console.log("gplatecount"+ _this.greenplatecount);
                if(_this.cake11r.visible==false)
                    {
                        _this.cake11r.visible=true;
                         target.visible=false;
                        _this.cake11r.inputEnabled=true;
                        _this.cake11r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                
                else if(_this.cake12r.visible==false)
                    {
                        _this.cake12r.visible=true;
                        target.visible=false;
                        _this.cake12r.inputEnabled=true;
                        _this.cake12r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                else if(_this.cake13r.visible==false)
                    {
                        _this.cake13r.visible=true;
                        target.visible=false;
                        _this.cake13r.inputEnabled=true;
                        _this.cake13r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                else if(_this.cake14r.visible==false)
                    {
                        _this.cake14r.visible=true;
                        target.visible=false;
                        _this.cake14r.inputEnabled=true;
                        _this.cake14r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                else if(_this.cake15r.visible==false)
                    {
                        _this.cake15r.visible=true;
                        target.visible=false;
                        _this.cake15r.inputEnabled=true;
                        _this.cake15r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
                else if(_this.cake16r.visible==false)
                    {
                        _this.cake16r.visible=true;
                        target.visible=false;
                        _this.cake16r.inputEnabled=true;
                        _this.cake16r.events.onInputDown.add(_this.onCakeDragStart4,_this);
                    }
               }
            }
         target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy; 
    },_this);
},
        

onCakeDragStart4:function(target){
         
        // _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level2.5_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         
        _this.vx = target.x;   
        _this.vy = target.y; 
    
        target.input.enableDrag();
        _this.snapsound.play();
    
    
    target.events.onDragStop.add(function(target)
    {
          _this.snapsound.play();
        if(_this.Question==1 || _this.Question==3 || _this.Question == 5 || _this.Question == 7)
        {
        if((_this.checkOverlap(target,_this.whiteplate2)) && (_this.whiteplate2.name == "plate2" ))
            {
                console.log("dddd" +target.name);
                _this.greenplatecount--;
                console.log("gplatecount"+ _this.greenplatecount);
                if(_this.cake11.visible==false)
                    {
                        _this.cake11.visible=true;
                        target.visible=false;
                    }
                
                else if(_this.cake12.visible==false)
                    {
                        _this.cake12.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake13.visible==false)
                    {
                        _this.cake13.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake14.visible==false)
                    {
                        _this.cake14.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake15.visible==false)
                    {
                        _this.cake15.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake16.visible==false)
                    {
                        _this.cake16.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake17.visible==false)
                    {
                        _this.cake17.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake18.visible==false)
                    {
                        _this.cake18.visible=true;
                        target.visible=false;
                    }
                             
            }
        }
        
        if(_this.Question == 2 || _this.Question == 6 || _this.Question==8){
             if((_this.checkOverlap(target,_this.whiteplate2)) && (_this.whiteplate2.name == "plate2" ))
            {
                console.log("dddd" +target.name);
                _this.greenplatecount--;
                console.log("gplatecount"+ _this.greenplatecount);
             if(_this.cake11.visible==false)
                    {
                        _this.cake11.visible=true;
                        target.visible=false;
                    }
                
                else if(_this.cake13.visible==false)
                    {
                        _this.cake13.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake15.visible==false)
                    {
                        _this.cake15.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake17.visible==false)
                    {
                        _this.cake17.visible=true;
                        target.visible=false;
                    }
           }
        }
        
        if(_this.Question == 4 || _this.Question == 9 || _this.Question==10){
            if((_this.checkOverlap(target,_this.whiteplate2)) && (_this.whiteplate2.name == "plate2" ))
            {
                console.log("dddd" +target.name);
                _this.greenplatecount--;
                console.log("gplatecount"+ _this.greenplatecount);
                if(_this.cake11.visible==false)
                    {
                        _this.cake11.visible=true;
                        target.visible=false;
                    }
                
                else if(_this.cake12.visible==false)
                    {
                        _this.cake12.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake13.visible==false)
                    {
                        _this.cake13.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake14.visible==false)
                    {
                        _this.cake14.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake15.visible==false)
                    {
                        _this.cake15.visible=true;
                        target.visible=false;
                    }
                else if(_this.cake16.visible==false)
                    {
                        _this.cake16.visible=true;
                        target.visible=false;
                    }                 
            }
        }
         target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy; 
     
    },_this);
},
    

onSymbolDragStart:function(target){
         
         //_this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level2.5_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         
        _this.vx = target.x;   
        _this.vy = target.y; 
    
        target.input.enableDrag();
       _this.snapsound.play();
    
   target.events.onDragStop.add(function(target)
    {
         _this.snapsound.play();
       console.log("!!!!!!!!!!!!!!!!!! ");
        if(_this.checkOverlap(_this.lessthan,_this.box) &&  target.name == "lessthan") 
            {
                 _this.box.frame = 1;
                target.visible = false;
                _this.greaterthan.visible = true;
                  _this.equal.visible = true;
            }
        if(_this.checkOverlap(_this.equal,_this.box) && target.name == "equal") 
            {
                 _this.box.frame = 3;
                 target.visible = false;
                _this.greaterthan.visible = true;
                  _this.lessthan.visible = true;
            }
       if(_this.checkOverlap(_this.greaterthan,_this.box) &&  target.name == "greaterthan") 
            {
                 _this.box.frame = 2;
                 target.visible = false;
                _this.lessthan.visible = true;
                _this.equal.visible = true;
                
            }
       
        target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
       
        _this.rightbtn.inputEnabled = true;
       
     },_this);
        
    }, 

 
 checkOverlap:function(spriteA, spriteB) 
	{

	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
        
    }, 
  
numberBoxClicked:function(target){
     _this.clickSound = _this.add.audio('ClickSound');
     _this.clickSound.play();
    if(_this.Question == 5 || _this.Question == 6 || _this.Question==9 || _this.Question==10)
        {
                    if(target.name == "numbox1")
                {

                     _this.numBox1Pressed = true;
                    _this.numBox2Pressed = false;
                    _this.numBox3Pressed = false;
                     _this.numBox4Pressed = false;
                      _this.txtbox1.frame = 2;
                      _this.txtbox2.frame = 1;
                      _this.txtbox3.frame = 1;
                     _this.txtbox4.frame = 1;
                }  
             if(target.name == "numbox2")
                {

                    
                     _this.numBox2Pressed = true;
                    _this.numBox1Pressed = false;
                    _this.numBox3Pressed = false;
                     _this.numBox4Pressed = false;
                      _this.txtbox2.frame = 2;
                      _this.txtbox1.frame = 1;
                      _this.txtbox3.frame = 1;
                     _this.txtbox4.frame = 1;
                }  
              if(target.name == "numbox3")
                {

                    
                     _this.numBox3Pressed = true;
                    _this.numBox2Pressed = false;
                    _this.numBox1Pressed = false;
                     _this.numBox4Pressed = false;
                      _this.txtbox3.frame = 2;
                      _this.txtbox2.frame = 1;
                      _this.txtbox1.frame = 1;
                     _this.txtbox4.frame = 1;
                }  
              if(target.name == "numbox4")
                {

                    
                     _this.numBox4Pressed = true;
                    _this.numBox2Pressed = false;
                    _this.numBox3Pressed = false;
                     _this.numBox1Pressed = false;
                      _this.txtbox4.frame = 2;
                      _this.txtbox2.frame = 1;
                      _this.txtbox3.frame = 1;
                     _this.txtbox1.frame = 1;
                }
        }
    if(_this.Question == 1 ||_this.Question == 2 || _this.Question == 3 || _this.Question == 4 || _this.Question == 7 || _this.Question == 8)
     {
     if(target.name == "numbox1")
        {
           
             _this.numBox1Pressed = true;
             _this.numBox3Pressed = false;
              _this.txtbox1.frame = 2;
              _this.txtbox3.frame = 1;
        }  
     if(target.name == "numbox2")
        {
           
             _this.numBox2Pressed = true;
             _this.numBox4Pressed = false;
              _this.txtbox4.frame = 1;
              _this.txtbox2.frame = 2;
        }  
      if(target.name == "numbox3")
        {
           
             _this.numBox3Pressed = true;
             _this.numBox1Pressed = false;
              _this.txtbox1.frame = 1;
              _this.txtbox3.frame = 2;
        }  
      if(target.name == "numbox4")
        {
             _this.numBox4Pressed = true;
             _this.numBox2Pressed = false;  
              _this.txtbox4.frame = 2;
              _this.txtbox2.frame = 1;
        }
     }
     
   
},

   
addNumberPad:function(target){
        
        
        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.box1 = _this.numGroup.create(480,505,'F2_5bottombar');
        _this.box1.anchor.setTo(0.5);
        _this.x = 80;
     
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,508,'F2_5numberpad');  
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
       
        _this.wrongbtn = _this.numGroup.create(_this.x+30,508,'F2_5erase');
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(1.1,1.1);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
     
       
        _this.rightbtn = _this.numGroup.create(_this.x+100,508,'F2_5rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.1,1.1);
        _this.rightbtn.name = "rightbtn";
       
        
        _this.wrongbtn.events.onInputDown.add(function(){
            _this.clickSound.play();
            _this.wrongbtn.frame=1;
            if(_this.numBox1Pressed){
                    _this.numBoxNum1.visible = false;
                }
            else if(_this.numBox2Pressed){
                    _this.numBoxNum2.visible = false;
                }
            else if(_this.numBox3Pressed){
                    _this.numBoxNum3.visible = false;
                }
            else if(_this.numBox4Pressed){
                    _this.numBoxNum4.visible = false;
                }
             _this.time.events.add(500, function(){    
                  _this.wrongbtn.frame=0;
                 },_this);
          //  _this.enterTxt.setText("");
            _this.selectedAns="";
        },_this);
        
        _this.rightbtn.events.onInputDown.add(function(target){
            _this.noofAttempts++;
            _this.clickSound.play();
            _this.rightbtn.frame=1;
            _this.stopvoice();
      
           if(_this.Question == 1)
                {
                    _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2;
                    _this.time.events.add(500, function(){
                        _this.rightbtn.frame=0;
                    },_this);
                    console.log("box frame "+_this.box.frame);
                    if(_this.selectedAns==_this.rightAns && _this.orangeplatecount == 4 && _this.greenplatecount == 4 && _this.box.frame == 2) 
                        {
                            _this.correctAns(target);
                        }
                    else
                        {
                             
                            _this.wrongAns();
                        }
                }
            if(_this.Question == 2)
                {
                    _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2;
                    console.log("ans="+_this.selectedAns);
                    _this.time.events.add(500, function(){
                        _this.rightbtn.frame=0;
                    },_this);
                    console.log("box frame "+_this.box.frame);
                    if(_this.selectedAns==_this.rightAns && _this.orangeplatecount == 3 && _this.greenplatecount == 3 && _this.box.frame == 1) 
                        {
                            _this.correctAns(target);
                        }
                    else
                        {
                             
                            _this.wrongAns();
                        }
                }
            
    
          if(_this.Question == 3)
                {
                    _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2;
                    _this.time.events.add(500, function(){
                        _this.rightbtn.frame=0;
                    },_this);
                    console.log("box frame "+_this.box.frame);
                    if(_this.selectedAns==_this.rightAns && _this.orangeplatecount == 7 && _this.greenplatecount == 5 && _this.box.frame == 2) 
                        {
                            _this.correctAns(target);
                        }
                    else
                        {
                             
                            _this.wrongAns();
                        }
                }
            
            if(_this.Question == 4)
                {
                    _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2;
                    _this.time.events.add(500, function(){
                        _this.rightbtn.frame=0;
                    },_this);
                    console.log("box frame "+_this.box.frame);
                    if(_this.selectedAns==_this.rightAns && _this.orangeplatecount == 3 && _this.greenplatecount == 4 && _this.box.frame == 1) 
                        {
                            _this.correctAns(target);
                        }
                    else
                        {
                             
                            _this.wrongAns();
                        }
                }
            
             if(_this.Question == 5)
                {
                    _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3+_this.selectedAns4;
                    _this.time.events.add(500, function(){
                        _this.rightbtn.frame=0;
                    },_this);
                    console.log("box frame "+_this.box.frame);
                    if(_this.selectedAns==_this.rightAns && _this.orangeplatecount == 3 && _this.greenplatecount == 4 && _this.box.frame == 3) 
                        {
                            _this.correctAns(target);
                        }
                    else
                        {
                             
                            _this.wrongAns();
                        }
                }
            
             if(_this.Question == 6)
                {
                    _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3+_this.selectedAns4;
                    _this.time.events.add(500, function(){
                        _this.rightbtn.frame=0;
                    },_this);
                    console.log("box frame "+_this.box.frame);
                    if(_this.selectedAns==_this.rightAns && _this.orangeplatecount == 2 && _this.greenplatecount == 1 && _this.box.frame == 3) 
                        {
                            _this.correctAns(target);
                        }
                    else
                        {
                             
                            _this.wrongAns();
                        }
                }
            
            if(_this.Question == 7)
                {
                    _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2;
                    _this.time.events.add(500, function(){
                        _this.rightbtn.frame=0;
                    },_this);
                    console.log("box frame "+_this.box.frame);
                    if(_this.selectedAns==_this.rightAns && _this.orangeplatecount == 5 && _this.greenplatecount == 5 && _this.box.frame == 2) 
                        {
                            _this.correctAns(target);
                        }
                    else
                        {
                             
                            _this.wrongAns();
                        }
                }
            
            if(_this.Question == 8)
                {
                    _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2;
                    _this.time.events.add(500, function(){
                        _this.rightbtn.frame=0;
                    },_this);
                    console.log("box frame "+_this.box.frame);
                    if(_this.selectedAns==_this.rightAns && _this.orangeplatecount == 2 && _this.greenplatecount == 3 && _this.box.frame == 1) 
                        {
                            _this.correctAns(target);
                        }
                    else
                        {
                             
                            _this.wrongAns();
                        }
                }
            
             if(_this.Question == 9)
                {
                    _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3+_this.selectedAns4;
                    _this.time.events.add(500, function(){
                        _this.rightbtn.frame=0;
                    },_this);
                    console.log("box frame "+_this.box.frame);
                    if(_this.selectedAns==_this.rightAns && _this.orangeplatecount == 3 && _this.greenplatecount == 5 && _this.box.frame == 1) 
                        {
                            _this.correctAns(target);
                        }
                    else
                        {
                             
                            _this.wrongAns();
                        }
                }
            
             if(_this.Question == 10)
                {
                    _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3+_this.selectedAns4;
                    _this.time.events.add(500, function(){
                        _this.rightbtn.frame=0;
                    },_this);
                    console.log("box frame "+_this.box.frame);
                    if(_this.selectedAns==_this.rightAns && _this.orangeplatecount == 3 && _this.greenplatecount == 2 && _this.box.frame == 2) 
                        {
                            _this.correctAns(target);
                        }
                    else
                        {
                             
                            _this.wrongAns();
                        }
                }
            
             },_this);

    
       },
        

numClicked:function(target){
     //console.log(target.name);
        
       //  _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id:  "level12.2_"+target.name, 
                    access_token: window.acctkn 
               } 

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         _this.clickSound = _this.add.audio('ClickSound');
         _this.clickSound.play();
          
           if(_this.Question == 1 ||_this.Question == 2 || _this.Question == 7)
          {
             if(_this.numBox2Pressed){
                 _this.numBoxNum2.visible = true;
                 _this.selectedAns1 = target.name;
                 _this.numBoxNum2.frame = target.name;
                 _this.txtbox2.frame = 1;
                 _this.txtbox4.frame = 2;
                 _this.numBox4Pressed = true;
                 _this.numBox2Pressed = false;
             }
             else if(_this.numBox4Pressed){
                 _this.numBoxNum4.visible = true;
                 _this.selectedAns2 = target.name;
                 _this.numBoxNum4.frame = target.name;
                 _this.txtbox4.frame = 1;
                 _this.txtbox2.frame = 2;
                 _this.numBox2Pressed = true;
                 _this.numBox4Pressed = false;
             }
          }
          if(_this.Question == 3 || _this.Question == 4 || _this.Question == 8)
              {
                  if(_this.numBox1Pressed){
                     _this.numBoxNum1.visible = true;
                     _this.selectedAns1 = target.name;
                     _this.numBoxNum1.frame = target.name;
                     _this.txtbox1.frame = 1;
                     _this.txtbox3.frame = 2;
                     _this.numBox1Pressed = false;
                     _this.numBox3Pressed = true;
                 }
                 else if(_this.numBox3Pressed){
                     _this.numBoxNum3.visible = true;
                     _this.selectedAns2 = target.name;
                     _this.numBoxNum3.frame = target.name;
                     _this.txtbox3.frame = 1;
                     _this.txtbox1.frame = 2;
                     _this.numBox3Pressed = false;
                     _this.numBox1Pressed = true;
                 }
              }
            
             if(_this.Question == 5 ||_this.Question == 6 || _this.Question==9 || _this.Question==10)
            {
            
             if(_this.numBox1Pressed){
                 _this.numBoxNum1.visible = true;
                 _this.selectedAns1 = target.name;
                 _this.numBoxNum1.frame = target.name;
                 _this.txtbox1.frame = 1;
                 _this.txtbox2.frame = 2;
                 _this.numBox2Pressed = true;
                 _this.numBox1Pressed = false;
             }
            
            else if(_this.numBox2Pressed){
                 _this.numBoxNum2.visible = true;
                 _this.selectedAns2 = target.name;
                 _this.numBoxNum2.frame = target.name;
                 _this.txtbox2.frame = 1;
                 _this.txtbox3.frame = 2;
                 _this.numBox3Pressed = true;
                 _this.numBox2Pressed = false;
             }
             else if(_this.numBox3Pressed){
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 _this.numBoxNum3.frame = target.name;
                 _this.txtbox3.frame = 1;
                 _this.txtbox4.frame = 2;
                 _this.numBox4Pressed = true;
                 _this.numBox3Pressed = false;
             }
             else if(_this.numBox4Pressed){
                 _this.numBoxNum4.visible = true;
                 _this.selectedAns4 = target.name;
                 _this.numBoxNum4.frame = target.name;
                 _this.txtbox4.frame = 1;
                 _this.txtbox1.frame = 2;
                 _this.numBox1Pressed = true;
                 _this.numBox4Pressed = false;
             }
         
         }
// 
        _this.lessthan.inputEnabled=true;
        _this.equal.inputEnabled=true;
        _this.greaterthan.inputEnabled=true;
        
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
                   //  _this.timer1.stop();
                        _this.numGroup.destroy();
                         _this.objGroup.destroy();
                         _this.orangeplatecount = 0;
                         _this.greenplatecount = 0;
                        
                         _this.group1.destroy();
                        _this.group2.destroy();
                        _this.wplate1cakegroup.destroy();
                        _this.wplate2cakegroup.destroy();
                        _this.oplatecakegroup.destroy();
                         _this.gplatecakegroup.destroy();
                         _this.comparegroup.destroy();
                         _this.selectedAns = '';
                         _this.time.events.add(1000, function(){  
                         _this.getQuestion();
                         },_this);
                    
                    }
        
                else
                    {
                         
                        _this.stopvoice();
                       // _this.timer1.stop();
                       // _this.timer1 = null;
                        _this.countIncrement = 0;
                        _this.counterForTimer = null;
                         _this.state.start('nsf2_5Score',true,false);
                  }



		
	},
    
    
   
    
  correctAns:function(target)
	{
            console.log("correct");
        
            _this.wrongAnswer = false;

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



            _this.rightbtn.frame=1;
            target.events.onInputDown.removeAll();

            _this.celebr = _this.add.audio('celebr');
            _this.celebr.play();
            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);

            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play();
            _this.count1++;

            _this.time.events.add(2000, function(){_this.removeCelebration();},_this);
          
          _this.questionid = 1;
          _this.sceneCount++;
            telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
	},


  wrongAns:function(target)
	{

        if(_this.timer1)
               {
                    _this.timer1.stop();
                   _this.timer1 = null;
               }
               
          console.log("Wrong Answer")
         _this.shake.shake(10, _this.group2);
         _this.waudio = _this.add.audio('waudio');
         _this.waudio.play();
         _this.wrongAnswer = true;
        
         _this.orangeplatecount = 0;
         _this.greenplatecount = 0;
        
          _this.time.events.add(500, function(){
             _this.numGroup.destroy();
             _this.objGroup.destroy();
             _this.group1.destroy();
             _this.group2.destroy();
             _this.wplate1cakegroup.destroy();
             _this.wplate2cakegroup.destroy();
             _this.oplatecakegroup.destroy();
             _this.gplatecakegroup.destroy();
             _this.comparegroup.destroy();    
             _this.getQuestion();
       },_this);
       
//       console.log("Wrong Answer")
//        _this.stopvoice();
//        _this.noofAttempts++;
//       
//         _this.wrongAnswer = true;
//         _this.timer1.stop();	
//         _this.wrong = false;
//		 _this.wmusic = _this.add.audio('waudio');
//		 _this.wmusic.play();
//        
//        
//        _this.time.events.add(1000, function(){
//            
//        },_this);
//        
//              
//       // _this.wrongAns(target);
//         //console.log("wrong");
//        
//        _this.selectedAns1 = "";
//        _this.selectedAns2 = "";
//         _this.txtbox2.frame = 1;
//         _this.txtbox4.frame = 1;
//        _this.txtbox2.inputEnabled = false;
//        _this
//        _this.numBoxNum1.visible = false;
//         _this.numBoxNum2.visible = false;
//        _this.orangeplatecount = 0;
//        _this.greenplatecount = 0;
//        _this.box.frame = 0;
//        _this.wplate1cakegroup.setAll("visible",true);
//        _this.wplate2cakegroup.setAll("visible",true);
//        _this.oplatecakegroup.setAll("visible",false);
//        _this.gplatecakegroup.setAll("visible",false);
//        _this.lessthan.visible = true;
//         _this.greaterthan.visible = true;
//         _this.equal.visible = true;
//        
//        _this.time.events.add(500, function(){
//         _this.rightbtn.frame=0;
//         _this.rightbtn.frame=0;
//         },_this);


            
  
    
      
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
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/English/nsf2.5E.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Hindi/nsf2.5H.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Kannada/nsf2.5K.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Gujarati/nsf2.5G.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Marathi/nsf2.5.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Telugu/nsf2.5.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Tamil/nsf2.5.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Urdu/nsf2.5.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Odiya/nsf2.5O.mp3");
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
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       